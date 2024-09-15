import { Food } from '../schema/food.schema';

export interface IFood {
  data: Food | null;
}

export interface IFoodAll {
  data: Food[];
}

