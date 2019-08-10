import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { SupplierEntity } from './supplier.entity';
import { SupplierService } from './supplier.service';
import { StoreService } from '../store/store.service';
import { StoreEntity } from '../store/store.entity';
import { CreateSupplierDto } from './models/create-supplier.dto';
import { UserService } from '../user/user.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';


@Resolver(of => SupplierEntity)
export class SupplierResolver {
  constructor(
    private readonly supplierService: SupplierService,
    private readonly userService: UserService,
  ) {}

  @Query(returns => [SupplierEntity])
  async getSuppliers() {
    return await this.supplierService.findAll();
  }

  @Mutation(returns => SupplierEntity)
  // @UseGuards(GqlAuthGuard)
  async createSupplier(
    @Args('supplier') supplier: CreateSupplierDto,
  ) {
    return await this.supplierService.create(supplier);
  }

  @ResolveProperty('user')
  async user(@Parent() supplier) {
    const { userId } = supplier;
    return await this.userService.findById(userId);
  }
}
