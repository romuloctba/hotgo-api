import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreEntity } from './store.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StoreEntity]),
  ],
  providers: [StoreService, StoreEntity],
  exports: [
    StoreEntity,
    TypeOrmModule.forFeature([StoreEntity]),
  ]
})
export class StoreModule {}
