import { Injectable, Request } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SupplierEntity } from './supplier.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(SupplierEntity) private readonly supplierRepository: Repository<SupplierEntity>,
  ) {}

  create(id: string) {
    const newSupplier = new SupplierEntity(id);
    return this.supplierRepository.save(newSupplier);
  }

  findOne(userId: string) {
    return this.supplierRepository.findOne({ userId});
  }
}
