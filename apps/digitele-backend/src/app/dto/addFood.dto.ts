import { IsNotEmpty, IsString } from 'class-validator';

export class addFoodDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly price: string;

  @IsString()
  readonly picUrl: string;

  @IsString()
  readonly categoryId: string;
}