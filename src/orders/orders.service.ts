import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { IOrder } from './interfaces/order.interface';
import { randomUUID } from 'node:crypto';

@Injectable()
export class OrdersService {
  private readonly orders: IOrder[] = [];

  create(order: IOrder) {
    order.id = randomUUID();
    this.orders.push(order);
    return order;
  }

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
