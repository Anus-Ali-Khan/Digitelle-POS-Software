import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber } from 'class-validator';
import { Document } from 'mongoose';

export enum Role {
  ADMIN = 'Admin',
  SUBADMIN = 'SubAdmin',
  USER = 'User',
}

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop({ MIN_VALUE: 8 })
  password: string;

  @Prop()
  role: Role;

  @Prop()
  @IsNumber()
  phoneNumber: number;

  @Prop()
  profileImage: string;
}

export const UserSchema = SchemaFactory.createForClass(User);