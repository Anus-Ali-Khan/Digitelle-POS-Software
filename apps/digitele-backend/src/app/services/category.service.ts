import { Injectable } from '@nestjs/common/decorators/core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../schema/category.schema';
import { updateCategoryDto } from '../dto/updateCategory.dto';
import { addCategoryDto } from '../dto/addCategory.dto';
import { BadRequestException } from '@nestjs/common';
import { ICategory, ICategoryAll } from '../types/category.type';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<Category>
  ) {}
  async update(
    id: string,
    updateCategoryDto: updateCategoryDto
  ): Promise<ICategory> {
    const { name, picUrl } = updateCategoryDto;
    const category = await this.categoryModel.findByIdAndUpdate(
      id,
      {
        name,
        picUrl,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return { data: category };
  }

  async add(categoryDto: addCategoryDto): Promise<ICategory> {
    const { name, picUrl } = categoryDto;
    const isExist = await this.categoryModel.findOne({ name });
    if (isExist) {
      throw new BadRequestException('Category already exist');
    }
    const category = await this.categoryModel.create({
      name,
      picUrl,
    });
    return { data: category };
  }

  async getSingle(id: string): Promise<ICategory> {
    const category = await this.categoryModel.findById(id);
    return { data: category };
  }

  async getAll(): Promise<ICategoryAll> {
    const category = await this.categoryModel.find();
    return { data: category };
  }

  async delete(id: string): Promise<ICategory> {
    const category = await this.categoryModel.findByIdAndDelete(id);
    return { data: category };
  }
}
