import { Controller, UseGuards } from '@nestjs/common/decorators/core';
import {
    Body,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query
} from '@nestjs/common/decorators/http';
import { AuthGuard } from '@nestjs/passport';
import { CreateOrder } from 'app/dto/createOrder.dto';
import { UpdateOrder } from 'app/dto/updateOrder.dto';
import { UpdateOrderStatus } from 'app/dto/updateOrderStatus.dto';
import { OrderMode } from 'app/schema/order.schema';
import { OrderService } from 'app/services/order.service';
import { IOrder, IOrderAll } from 'app/types/order.type';

@Controller('order')
export class OrderController {
  constructor(private OrderService: OrderService) {}

  @UseGuards(AuthGuard())
  @Get('/getAll')
  getAll(
    @Query('orderMethod') orderMethod: OrderMode,
    @Query('limit') limit,
    @Query('skip') skip
  ): Promise<IOrderAll> {
    return this.OrderService.getAll(orderMethod, limit, skip);
  }

  @UseGuards(AuthGuard())
  @Post('/create')
  add(@Body() CreateOrder: CreateOrder): Promise<IOrder> {
    return this.OrderService.add(CreateOrder);
  }

  @UseGuards(AuthGuard())
  @Put('/update/:id')
  update(
    @Param('id') id: string,
    @Body() UpdateOrder: UpdateOrder
  ): Promise<IOrder> {
    return this.OrderService.update(id, UpdateOrder);
  }

  @UseGuards(AuthGuard())
  @Put('/updateOrder/:id')
  updateOrder(
    @Param('id') id: string,
    @Body() UpdateOrder: UpdateOrderStatus
  ): Promise<IOrder> {
    return this.OrderService.updateOrderStatus(id, UpdateOrder);
  }

  @UseGuards(AuthGuard())
  @Get('/getSingle/:id')
  single(@Param('id') id: string): Promise<IOrder> {
    return this.OrderService.getSingle(id);
  }

  @UseGuards(AuthGuard())
  @Delete('/delete/:id')
  delete(
    @Param('id')
    id: string
  ): Promise<IOrder> {
    return this.OrderService.delete(id);
  }
}
