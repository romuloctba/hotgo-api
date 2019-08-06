import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './models/product.entity';
import { ProductResolver } from './product.resolver';
import { SupplierModule } from '../supplier/supplier.module';
import { PriceScalar } from './models/price.scalar';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    SupplierModule,
  ],
  providers: [
    ProductService,
    ProductResolver,
    PriceScalar,
  ],
  exports: [
    ProductService,
  ]
})
export class ProductModule {}
