import { Injectable, Request, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { SupplierEntity } from './supplier.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSupplierDto } from './models/create-supplier.dto';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(SupplierEntity) private readonly supplierRepository: Repository<SupplierEntity>,
  ) {}

  async create(newSupplier: CreateSupplierDto) {
    const entity = Object.assign(new SupplierEntity(), newSupplier);
    return this.supplierRepository.save(entity)
    .catch(error => {
      /* TODO: Handle creation error correctly */
      if (!error || !error.err || !error.err.code) {
        return HttpStatus.NOT_ACCEPTABLE;
      }

      switch (error.err.code) {
        case 11000:
          return HttpStatus.CONFLICT;

        default:
          return error.err;
      }
    });
  }

  async findAll() {
    return await this.supplierRepository.find();
  }

  async findOne(id: string) {
    return await this.supplierRepository.findOne(id);
  }

  async findById(id: string) {
    return await this.supplierRepository.findOne(id);
  }

  async findByUserId(userId: string) {
    return await this.supplierRepository.findOne({ userId });
  }
}
