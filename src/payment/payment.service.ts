import { Injectable } from '@nestjs/common';
import { PaymentEntity } from './models/payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './models/create-payment.dto';

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

  async create(paymentDto: CreatePaymentDto) {
    const newPayment = Object.assign(new PaymentEntity(), paymentDto);
    // do gateway logic
    // update newPayment.logs and status
    /// **E|VEN IF FAILED
    return await this.paymentRepository.save(newPayment);
  }
}
