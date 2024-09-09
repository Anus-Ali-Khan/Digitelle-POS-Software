import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator';

export class UpdateProfile {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  
  @IsNotEmpty()
  @IsNumber()
  readonly phoneNumber : string;

  @IsString()
  @IsOptional()
  readonly profileImage: string;

}
