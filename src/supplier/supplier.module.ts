import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './supplier.entity';
import { CreateStoreHandler } from '../store/handlers/create-store.handler';
import { StoreModule } from '../store/store.module';
export const CommandHandlers = [CreateStoreHandler];
// export const EventHandlers =  [CreateStoreEvent, HeroFoundItemHandler];

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierEntity]),
    StoreModule,
  ],
  providers: [
    SupplierService,
    ...CommandHandlers,
  ],
  exports: [SupplierService]
})
export class SupplierModule {}
