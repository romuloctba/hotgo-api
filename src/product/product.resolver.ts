import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { ProductEntity } from './models/product.entity';
import { ProductService } from './product.service';
import { CreateProductDto } from './models/create-product.dto';
import { SupplierService } from '../supplier/supplier.service';
import { SupplierEntity } from '../supplier/supplier.entity';

@Resolver(of => ProductEntity)
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly supplierService: SupplierService,
  ) {}

  @Query(returns => [ProductEntity])
  async getProducts() {
    return await this.productService.findAll();
  }

  @Mutation(returns => ProductEntity)
  async createProduct(
    @Args('product') product: CreateProductDto,
  ) {
    return await this.productService.create(product);
  }

  @Query(returns => ProductEntity)
  async getProduct(@Args('id') id: string) {
    return await this.productService.findById(id);
  }

  @ResolveProperty('supplier', () => SupplierEntity)
  async stores(@Parent() product) {
    const { supplierId } = product;
    return await this.supplierService.findById(supplierId);
  }
}
