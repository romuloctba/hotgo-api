import { Resolver, Mutation, Args, Query, ResolveProperty, Parent } from '@nestjs/graphql';
import { StoreEntity } from './store.entity';
import { CreateStoreDto } from './models/create-store.dto';
import { StoreService } from './store.service';
import { SupplierService } from '../supplier/supplier.service';
import { SupplierEntity } from '../supplier/supplier.entity';

@Resolver(of => StoreEntity)
export class StoreResolver {
  constructor(
    private readonly storeService: StoreService,
    private readonly supplierService: SupplierService,
  ) {}

  @Mutation(returns => StoreEntity)
  async createStore(
    @Args('store') store: CreateStoreDto,
  ) {
    return await this.storeService.create(store);
  }

  @Query(returns => [StoreEntity])
  async getStores() {
    return await this.storeService.findAll();
  }

  @ResolveProperty('supplier', () => SupplierEntity)
  async getSupplier(@Parent() store): Promise<SupplierEntity> {
    const { supplierId } = store;
    const result = await this.supplierService.findByUserId(supplierId);
    console.log('find by id the id ', supplierId, result);
    return result;
  }
}
