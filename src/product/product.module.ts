import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './models/product.entity';
import { ProductResolver } from './product.resolver';
import { SupplierModule } from '../supplier/supplier.module';
import { PriceScalar } from './models/price.scalar';
import { ComissionModule } from '../comission/comission.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    SupplierModule,
    ComissionModule,
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
