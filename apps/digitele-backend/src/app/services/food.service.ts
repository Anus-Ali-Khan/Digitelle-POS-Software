import { Injectable } from '@nestjs/common/decorators/core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { addFoodDto } from '../dto/addFood.dto';
import { updateFoodDto } from '../dto/updateFood.dto';
import { Food } from '../schema/food.schema';
import { IFood, IFoodAll } from '../types/food.type';

@Injectable()
export class FoodService {
  constructor(
    @InjectModel(Food.name)
    private foodModel: Model<Food>
  ) {}
  async update(
    id: string,
    userId: number,
    updateFoodDto: updateFoodDto
  ): Promise<IFood> {
    const { name, price, picUrl, categoryId } = updateFoodDto;
    const food = await this.foodModel.findByIdAndUpdate(
      id,
      {
        name,
        price,
        picUrl,
        categoryId,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return { data: food };
  }

  async add(foodDto: addFoodDto): Promise<IFood> {
    const { name, picUrl, price, categoryId } = foodDto;
    const food = await this.foodModel.create({
      name,
      picUrl,
      price,
      categoryId,
    });
    return { data: food };
  }

  async getSingle(id: string): Promise<IFood> {
    const food = await this.foodModel.findById(id);
    return { data: food };
  }

  async getAll(): Promise<IFoodAll> {
    const foods = await this.foodModel.find();
    return { data: foods };
  }

  async delete(id: string): Promise<IFood> {
    const food = await this.foodModel.findByIdAndDelete(id);
    return { data: food };
  }
}
