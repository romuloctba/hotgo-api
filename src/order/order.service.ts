import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './models/order.entity';
import { Repository, getMongoManager, In } from 'typeorm';
import { CreateOrderDto } from './models/create-order.dto';
import { ProductService } from '../product/product.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity) private readonly orderRepository: Repository<OrderEntity>,
    private readonly productService: ProductService,
  ) {}

  async create(newOrder: CreateOrderDto) {
    const order = Object.assign(new OrderEntity(), newOrder);
    const products = this.productService.findByIds(order.productIds);
    order.productsSnapshot = JSON.stringify(products);
    return await this.orderRepository.save(order);
  }

  async findAll() {
    return await this.orderRepository.find();
  }
  async findById(id: string) {
    return await this.orderRepository.findOne(id);
  }

  async findByCustomer(customerId: string) {
    return await this.orderRepository.find({customerId});
  }

  async findBySupplier(supplierId: string) {
    const products = await this.productService.findBySupplier(supplierId);
    const productIds = products.map(product => product.id);
    const orders = await this.orderRepository.find({
      productIds: In(productIds),
    });
    return orders;
  }
}
