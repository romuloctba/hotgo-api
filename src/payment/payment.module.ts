import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { OrderModule } from '../order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from './models/payment.entity';
import { PaymentResolver } from './payment.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentEntity]),
  ],
  providers: [PaymentService, PaymentResolver],
  exports: [PaymentService]
})
export class PaymentModule {}
