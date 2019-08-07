import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './models/order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity]),
  ],
  providers: [OrderService]
})
export class OrderModule {}
