import { Injectable } from '@nestjs/common/decorators/core';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrder } from 'app/dto/createOrder.dto';
import { UpdateOrder } from 'app/dto/updateOrder.dto';
import { UpdateOrderStatus } from 'app/dto/updateOrderStatus.dto';
import { Food } from 'app/schema/food.schema';
import { Order, OrderMode } from 'app/schema/order.schema';
import { IOrder, IOrderAll } from 'app/types/order.type';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private OrderModel: Model<Order>
  ) {}
  async update(id: string, updateDto: UpdateOrder): Promise<IOrder> {
    const {
      name,
      totalPrice,
      paymentStatus,
      foodId,
      orderStatus,
      orderMethod,
      orderNumber,
    } = updateDto;
    const order = await this.OrderModel.findByIdAndUpdate(
      id,
      {
        name,
        totalPrice,
        paymentStatus,
        foodId,
        orderStatus,
        orderMethod,
        orderNumber,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return { data: order };
  }

  async add(createDto: CreateOrder): Promise<IOrder> {
    const {
      name,
      totalPrice,
      paymentStatus,
      foodId,
      orderStatus,
      orderMethod,
      orderNumber,
    } = createDto;
    const order = await this.OrderModel.create({
      name,
      totalPrice,
      paymentStatus,
      foodId,
      orderStatus,
      orderMethod,
      orderNumber,
    });
    return { data: order };
  }

  async getSingle(id: string): Promise<IOrder> {
    const order = await this.OrderModel.findById(id)
      .populate({ path: 'foodId', model: Food.name });
    return { data: order };
  }

  async getAll(
    orderMethod: OrderMode,
    limit:number,
    skip: number
  ): Promise<IOrderAll> {
    const order = await this.OrderModel.find({
      orderMethod: orderMethod,
    })
      .skip(skip)
      .limit(limit)
      .populate({ path: 'foodId', model: Food.name })
      .exec();
    return { data: order };
  }

  async delete(id: string): Promise<IOrder> {
    const order = await this.OrderModel.findByIdAndDelete(id);
    return { data: order };
  }

  async updateOrderStatus(
    id: string,
    updateDto: UpdateOrderStatus
  ): Promise<IOrder> {
    const order = await this.OrderModel.findByIdAndUpdate(
      id,
      {
        orderStatus: updateDto.orderStatus,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return { data: order };
  }
}
