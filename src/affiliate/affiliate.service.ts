import { Injectable, Response, Body, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AffiliateEntity } from './affiliate.entity';
import { Repository } from 'typeorm';
import { CreateAffiliateDto } from './models/createAffiliate.dto';
import { Affiliate } from './affiliate.interface';

@Injectable()
export class AffiliateService {
  constructor(
    @InjectRepository(AffiliateEntity) private readonly affiliateRepository: Repository<AffiliateEntity>,
  ) {}

  async findAll() {
    return this.affiliateRepository.find();
  }

  async create(userId: string) {
    const newAffiliate = Object.assign(new AffiliateEntity(userId));
    return this.affiliateRepository.save(newAffiliate)
    .catch(e => {
      console.log('catch e ', e);
      return e;
    });
  }

  async read(id: string) {
    return this.affiliateRepository.findOne(id);
  }
}
