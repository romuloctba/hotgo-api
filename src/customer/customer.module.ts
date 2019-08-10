import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './models/customer.entity';
import { CustomerResolver } from './customer.resolver';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerEntity]),
    UserModule,
  ],
  providers: [CustomerService, CustomerResolver],
  exports: [CustomerService]
})
export class CustomerModule {}
