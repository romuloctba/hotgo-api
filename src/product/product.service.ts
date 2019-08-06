import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './models/product.entity';
import { CreateProductDto } from './models/create-product.dto';
import { Repository, ObjectID } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async create(newProduct: CreateProductDto) {
    const entity = Object.assign(new ProductEntity(), newProduct);
    return this.productRepository.save(entity);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findById(id: string) {
    const result = await this.productRepository.findOne(id);
    return result;
  }

  async findByIds(ids: string[]) {
    const objectIds = ids.map(id => new ObjectId(id));
    const result = await this.productRepository.findByIds(objectIds);
    return result;
  }

}
