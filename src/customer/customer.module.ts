import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './customer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerEntity]),
  ],
  providers: [CustomerService],
})
export class CustomerModule {}
