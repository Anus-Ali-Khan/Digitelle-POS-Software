import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum OrderStatus {
  ACCEPTED = 'Accepted',
  REJECTED = 'Rejected',
  PENDING = 'Pending',
  DELIVERED = 'Delivered',
}

export enum OrderMode {
  DINEIN = 'DineIn',
  TAKEAWAY = 'Takeaway',
  KIOSK = 'Kiosk',
}

@Schema({
  timestamps: true,
})
export class Order extends Document {
  @Prop()
  name: string;

  @Prop()
  totalPrice: string;

  @Prop()
  orderMethod: OrderMode;

  @Prop()
  orderNumber: string;

  @Prop()
  paymentStatus: string;

  @Prop({ type: Types.ObjectId, ref: 'Food' })
  foodId: Types.ObjectId[];

  @Prop()
  orderStatus: OrderStatus;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
