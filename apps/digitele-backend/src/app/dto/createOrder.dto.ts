import { OrderStatus } from 'app/schema/order.schema';
import {
    IsArray,
    IsNotEmpty,
    IsString
} from 'class-validator';

export class CreateOrder {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsString()
  readonly totalPrice: string;

  @IsString()
  readonly orderMethod: string;

  @IsString()
  readonly orderNumber: string;

  @IsString()
  readonly paymentStatus: string;

  @IsArray()
  readonly foodId: string[];

  @IsString()
  readonly orderStatus: OrderStatus;
}
