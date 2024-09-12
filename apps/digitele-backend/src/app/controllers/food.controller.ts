import { Controller, UseGuards } from '@nestjs/common/decorators/core';
import {
    Body,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Req,
} from '@nestjs/common/decorators/http';
import { AuthGuard } from '@nestjs/passport';
import { addFoodDto } from '../dto/addFood.dto';
import { updateFoodDto } from '../dto/updateFood.dto';
import { FoodService } from '../services/food.service';
import { IFood, IFoodAll } from '../types/food.type';

@Controller('food')
export class FoodController {
  constructor(private FoodService: FoodService) {}

  @UseGuards(AuthGuard())
  @Get('/getAll')
  getAll(): Promise<IFoodAll> {
    return this.FoodService.getAll();
  }

  @UseGuards(AuthGuard())
  @Post('/create')
  add(@Body() addFood: addFoodDto): Promise<IFood> {
    return this.FoodService.add(addFood);
  }

  @UseGuards(AuthGuard())
  @Put('/update/:id')
  updateProfile(
    @Param('id') id: string,
    @Req() request, // Inject the request object
    @Body() updateFood: updateFoodDto
  ): Promise<IFood> {
    const userId = request.user.id;
    return this.FoodService.update(id, userId, updateFood);
  }

  @UseGuards(AuthGuard())
  @Get('/getSingle/:id')
  singleProfile(@Param('id') id: string): Promise<IFood> {
    return this.FoodService.getSingle(id);
  }

  @UseGuards(AuthGuard())
  @Delete('/delete/:id')
  deleteProfile(
    @Param('id')
    id: string
  ): Promise<IFood> {
    return this.FoodService.delete(id);
  }
}
