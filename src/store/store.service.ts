import { Injectable, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreEntity } from './store.entity';
import { findAddedNonNullDirectiveArgs } from 'graphql/utilities/findBreakingChanges';
import { CreateStoreDto } from './models/create-store.dto';
@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(StoreEntity) private readonly storeRepository: Repository<StoreEntity>,
  ) {
  }

  async create(newStore: CreateStoreDto) {
    const entity = Object.assign(new StoreEntity(), newStore);
    return this.storeRepository.save(entity)
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

  async findAll(): Promise<StoreEntity[]> {
    return await this.storeRepository.find();
  }

  async findById(id: string): Promise<StoreEntity> {
    return await this.storeRepository.findOne(id);
  }

  async findBySupplierId(id: string) {
    return await this.storeRepository.find({ supplierId: id });
  }

  async addProductsToStore(storeId: string, productIds: string[]): Promise<StoreEntity> {
    const store = await this.storeRepository.findOne(storeId);
    store.productIds = store.productIds || [];
    productIds.forEach(id => {
      if (!store.productIds.includes(id)) {
        store.productIds.push(id);
      }
    });
    return await this.storeRepository.save(store);
  }
}
