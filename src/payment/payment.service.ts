import { Injectable } from '@nestjs/common';
import { PaymentEntity } from './models/payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentEntity) private readonly paymentRepository: Repository<PaymentEntity>,
  ) {}

  async findById(id: string) {
    return await this.paymentRepository.findOne(id);
  }

  async findByOrder(orderId: string) {
    return await this.paymentRepository.find({orderId});
  }
}
