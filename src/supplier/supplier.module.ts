import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './supplier.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierEntity]),
  ],
  providers: [SupplierService],
})
export class SupplierModule {}
