import { Resolver, Query, Args, ResolveProperty, Parent, Mutation } from '@nestjs/graphql';

import { CustomerService } from './customer.service';
import { CustomerEntity } from './models/customer.entity';
import { UserService } from '../user/user.service';
import { CreateCustomerDto } from './models/create-customer.dto';

@Resolver(of => CustomerEntity)
export class CustomerResolver {
  constructor(
    private readonly customerService: CustomerService,
    private readonly userService: UserService,
  ) {}

  @Query(returns => [CustomerEntity])
  async getCustomers() {
    return await this.customerService.findAll();
  }

  @Query(returns => CustomerEntity)
  async customer(@Args('userId') userId?: string) {
      return await this.customerService.findByUserId(userId);
  }

  @Query(returns => CustomerEntity)
  async customerByUserId(@Args('userId') userId: string) {
    return await this.customerService.findByUserId(userId);
  }

  @Mutation(returns => CustomerEntity)
  async createCustomer(
    @Args('customer') customer: CreateCustomerDto,
  ) {
    return await this.customerService.create(customer);
  }

  @ResolveProperty('user')
  async user(@Parent() customer) {
    const { userId } = customer;
    return await this.userService.findById(userId);
  }
}
