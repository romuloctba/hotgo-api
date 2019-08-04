import { Injectable } from '@nestjs/common';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomerService {

  findById(id: string) {
    return new CustomerEntity();
  }
}
