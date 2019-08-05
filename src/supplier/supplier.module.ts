import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './supplier.entity';
import { StoreModule } from '../store/store.module';
import { SupplierResolver } from './supplier.resolver';
import { UserModule } from '../user/user.module';
// export const EventHandlers =  [CreateStoreEvent, HeroFoundItemHandler];

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierEntity]),
    UserModule,
  ],
  providers: [
    SupplierService,
    SupplierResolver,
  ],
  exports: [SupplierService]
})
export class SupplierModule {}
