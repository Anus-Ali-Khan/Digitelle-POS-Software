import { OrderStatus } from 'app/schema/order.schema';
import {
    IsNotEmpty,
    IsString
} from 'class-validator';

export class UpdateOrderStatus {
  @IsString()
  @IsNotEmpty()
  readonly orderStatus: OrderStatus;
}
