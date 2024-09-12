import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Category extends Document {
  @Prop({ unique: [true, 'Duplicate category name entered'] })
  name: string;

  @Prop()
  picUrl: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
