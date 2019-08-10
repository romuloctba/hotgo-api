import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { PaymentService } from '../../payment/payment.service';
import { ValidationError } from 'apollo-server-core';

@Injectable()
export class PaymentIdValidatorPipe implements PipeTransform {
  constructor(
    private readonly paymentService: PaymentService,
  ) {}
  async transform(value: any, meta: ArgumentMetadata) {
    if (meta.type !== 'body') {
      return value;
    }

    if (value.paymentId) {
      const payment = await this.paymentService.findById(value.paymentId);
      if (payment && payment.id.toString() === value.paymentId) {
        return value;
      }
      throw new ValidationError('Invalid paymentId');
    }

    return value;
  }
}
