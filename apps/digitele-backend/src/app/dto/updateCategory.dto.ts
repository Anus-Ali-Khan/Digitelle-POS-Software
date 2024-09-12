import { IsNotEmpty, IsString } from 'class-validator';

export class updateCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsString()
  readonly picUrl: string;
}