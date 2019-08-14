import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AddressService } from './address.service';
import { CreateAddressDto } from './models/create-address.dto';
import { AddressEntity } from './models/address.entity';

@Resolver(of => AddressEntity)
export class AddressResolver {
  constructor(
    private readonly addressService: AddressService,
  ) {}

  @Query(returns => AddressEntity)
  async getAdressByUserId(@Args('userId') userId: string) {
    return await this.addressService.findByUserId(userId);
  }

  @Mutation(returns => AddressEntity)
  async createAddress(@Args('newAddress') newAddress: CreateAddressDto) {
    return await this.addressService.create(newAddress);
  }
}
