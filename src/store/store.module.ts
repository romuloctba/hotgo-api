import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreEntity } from './store.entity';
import { StoreResolver } from './store.resolver';
import { SupplierModule } from '../supplier/supplier.module';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([StoreEntity]),
    SupplierModule,
    ProductModule,
  ],
  providers: [StoreService, StoreEntity, StoreResolver],
  exports: [
    StoreEntity,
    StoreService,
    TypeOrmModule.forFeature([StoreEntity]),
  ]
})
export class StoreModule {}
