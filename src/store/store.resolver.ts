import { Resolver, Mutation, Args, Query, ResolveProperty, Parent } from '@nestjs/graphql';
import { StoreEntity } from './store.entity';
import { CreateStoreDto } from './models/create-store.dto';
import { StoreService } from './store.service';
import { SupplierService } from '../supplier/supplier.service';
import { SupplierEntity } from '../supplier/supplier.entity';
import { ProductEntity } from '../product/models/product.entity';
import { ProductService } from '../product/product.service';
import { AddProductToStoreDto } from './models/add-product-store.dto';

@Resolver(of => StoreEntity)
export class StoreResolver {
  constructor(
    private readonly storeService: StoreService,
    private readonly supplierService: SupplierService,
    private readonly productService: ProductService,
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

  @Mutation(returns => StoreEntity)
  async addProductsToStore(
    @Args('data') data: AddProductToStoreDto,
  ) {
    return await this.storeService.addProductsToStore(data.storeId, data.productIds);
  }

  @ResolveProperty('supplier', () => SupplierEntity)
  async getSupplier(@Parent() store): Promise<SupplierEntity> {
    const { supplierId } = store;
    const result = await this.supplierService.findOne(supplierId);
    return result;
  }

  @ResolveProperty('products', () => [ProductEntity])
  async getProducts(@Parent() store): Promise<ProductEntity[]> {
    const { productIds } = store;
    const result = await this.productService.findByIds(productIds);
    return result;
  }
}
