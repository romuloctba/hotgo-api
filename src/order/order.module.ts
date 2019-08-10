import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './models/order.entity';
import { PaymentModule } from '../payment/payment.module';
import { OrderResolver } from './order.resolver';
import { ProductModule } from '../product/product.module';
import { CustomerModule } from '../customer/customer.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity]),
    ProductModule,
    PaymentModule,
    CustomerModule,
  ],
  providers: [OrderService, OrderResolver],
  exports: [OrderService]
})
export class OrderModule {}
