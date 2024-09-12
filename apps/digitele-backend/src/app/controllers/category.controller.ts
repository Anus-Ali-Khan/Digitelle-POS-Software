import { Controller, UseGuards } from '@nestjs/common/decorators/core';
import {
    Body,
    Delete,
    Get,
    Param,
    Post,
    Put
} from '@nestjs/common/decorators/http';
import { AuthGuard } from '@nestjs/passport';
import { addCategoryDto } from '../dto/addCategory.dto';
import { updateCategoryDto } from '../dto/updateCategory.dto';
import { CategoryService } from '../services/category.service';
import { ICategory, ICategoryAll } from '../types/category.type';

@Controller('category')
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}

  @UseGuards(AuthGuard())
  @Get('/getAll')
  getAll(): Promise<ICategoryAll> {
    return this.CategoryService.getAll();
  }

  @UseGuards(AuthGuard())
  @Post('/create')
  add(@Body() addFood: addCategoryDto): Promise<ICategory> {
    return this.CategoryService.add(addFood);
  }

  @UseGuards(AuthGuard())
  @Put('/update/:id')
  updateProfile(
    @Param('id') id: string,
    @Body() updateCategory: updateCategoryDto,
  ): Promise<ICategory> {
    return this.CategoryService.update(id, updateCategory);
  }

  @UseGuards(AuthGuard())
  @Get('/getSingle/:id')
  singleProfile(@Param('id') id: string): Promise<ICategory> {
    return this.CategoryService.getSingle(id);
  }

  @UseGuards(AuthGuard())
  @Delete('/delete/:id')
  deleteProfile(
    @Param('id')
    id: string,
  ): Promise<ICategory> {
    return this.CategoryService.delete(id);
  }
}