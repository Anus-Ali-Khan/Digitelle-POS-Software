import { IsNotEmpty, IsString } from 'class-validator';

export class addCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsString()
  readonly picUrl: string;
}
