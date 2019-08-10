import { Injectable, HttpStatus } from '@nestjs/common';
import { CustomerEntity } from './models/customer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from './models/create-customer.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity) private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async create(newCustomer: CreateCustomerDto) {
    const entity = Object.assign(new CustomerEntity(), newCustomer);
    return this.customerRepository.save(entity)
    .catch(error => {
      /* TODO: Handle creation error correctly */
      if (!error || !error.err || !error.err.code) {
        return HttpStatus.NOT_ACCEPTABLE;
      }

      switch (error.err.code) {
        case 11000:
          return HttpStatus.CONFLICT;

        default:
          return error.err;
      }
    });
  }

  findAll() {
    return this.customerRepository.find();
  }

  async findById(id: string) {
    return await this.customerRepository.findOne(id);
  }

  findByUserId(userId: string) {
    return this.customerRepository.find({ userId });
  }
}
