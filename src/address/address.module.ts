import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './models/address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AddressEntity]),
  ],
  providers: [AddressService, AddressResolver],
})
export class AddressModule {}
