import { Resolver, Mutation, Args, ResolveProperty, Parent, Query } from '@nestjs/graphql';
import { OrderEntity } from './models/order.entity';
import { OrderService } from './order.service';
import { CreateOrderDto } from './models/create-order.dto';
import { ProductEntity } from '../product/models/product.entity';
import { ProductService } from '../product/product.service';
import { CustomerEntity } from '../customer/models/customer.entity';
import { CustomerService } from '../customer/customer.service';
import { PaymentEntity } from '../payment/models/payment.entity';
import { PaymentService } from '../payment/payment.service';
import { PayOrderDto } from './models/pay-order.dto';

@Resolver(of => OrderEntity)
export class OrderResolver {

  constructor(
    private readonly orderService: OrderService,
    private readonly productService: ProductService,
    private readonly customerService: CustomerService,
    private readonly paymentService: PaymentService,
  ) {}

  @Mutation(returns => OrderEntity)
  async createOrder(@Args('newOrder') newOrder: CreateOrderDto) {
    return await this.orderService.create(newOrder);
  }

  @Query(returns => [OrderEntity])
  async getOrders() {
    return await this.orderService.findAll();
  }

  @Query(returns => OrderEntity)
  async getOrder(@Args('id') id: string) {
    return await this.orderService.findById(id);
  }

  @Mutation(returns => OrderEntity)
  async payOrder(@Args('payOrderDto') payOrderDto: PayOrderDto) {
    const payment = await this.paymentService.create(payOrderDto.payment);
    return await this.paymentService.findById(payOrderDto.orderId);
  }

  @ResolveProperty(type => ProductEntity)
  async products(@Parent() order) {
    const { productIds } = order;
    const products = await Promise.all(
      productIds.map(async id => await this.productService.findById(id)),
    );
    return products;
  }

  @ResolveProperty(type => CustomerEntity)
  async customer(@Parent() order) {
    const { customerId } = order;
    return await this.customerService.findById(customerId);
  }

  @ResolveProperty(type => PaymentEntity)
  async payment(@Parent() order) {
    const { paymentId } = order;
    return await this.paymentService.findById(paymentId);
  }
}
