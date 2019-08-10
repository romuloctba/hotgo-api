import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CustomerService } from '../../customer/customer.service';
import { ValidationError } from 'apollo-server-core';

@Injectable()
export class CustomerIdValidatorPipe implements PipeTransform {
  constructor(
    private readonly customerService: CustomerService,
  ) {}
  async transform(value: any, meta: ArgumentMetadata) {
    if (meta.type !== 'body') {
      return value;
    }

    if (value.customerId) {
      const customer = await this.customerService.findById(value.customerId);
      if (customer && customer.id.toString() === value.customerId) {
        return value;
      }
      throw new ValidationError('Invalid customerId');
    }

    return value;
  }
}
