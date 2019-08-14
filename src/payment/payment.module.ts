import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { OrderModule } from '../order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from './models/payment.entity';
import { PaymentResolver } from './payment.resolver';
import { GetNetModule } from './gateways/get-net/get-net.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentEntity]),
    GetNetModule,
  ],
  providers: [PaymentService, PaymentResolver],
  exports: [PaymentService]
})
export class PaymentModule {}
