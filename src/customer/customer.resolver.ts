import { Resolver, Query, Args } from '@nestjs/graphql';

import { CustomerService } from './customer.service';
import { CustomerEntity } from '../customer/customer.entity';

@Resolver('Customer')
export class CustomerResolver {
  constructor(
    private readonly customerService: CustomerService,
  ) {}

  @Query(returns => CustomerEntity)
  async customer(@Args('id') id: string) {
    return await this.customerService.findById(id);
  }
}
