import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComissionEntity } from './models/comission.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import AddComissionDto from './models/add-comission.dto';
import AddComissionTypeDto from './models/add-comission-type.dto';
import ComissionTypeEntity from './models/comission-type.entity';

@Injectable()
export class ComissionService {
  constructor(
    @InjectRepository(ComissionEntity) private readonly comissionRepository: Repository<ComissionEntity>,
    @InjectRepository(ComissionTypeEntity) private readonly comissionTypeRepository: Repository<ComissionTypeEntity>,
  ) {}

  async create(comission: AddComissionDto) {
    return await this.comissionRepository.save(comission);
  }

  async createType(comissionType: AddComissionTypeDto) {
    return await this.comissionTypeRepository.save(comissionType);
  }

  async getTypeById(id: string) {
    return await this.comissionTypeRepository.findOne(id);
  }

  async getTypeByIds(ids: string[]) {
    return await this.comissionTypeRepository.findByIds(ids);
  }

  async getTypesByProduct(productId: string) {
    return await this.comissionTypeRepository.find({ productId });
  }

  async getComissionByAffiliate(affiliateId: string) {
    return await this.comissionRepository.find({affiliateId});
  }

  async getComissionByProduct(productId: string) {
    return await this.comissionRepository.find({productId});
  }
}
