import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './customer.entity';
import { CustomerResolver } from './customer.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerEntity]),
  ],
  providers: [CustomerService, CustomerResolver],
})
export class CustomerModule {}
