import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './models/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './models/create-address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity) private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async create(newAddress: CreateAddressDto) {
    return await this.addressRepository.create(newAddress);
  }

  async findByUserId(userId: string) {
    return await this.addressRepository.findOne({ userId });
  }
}
