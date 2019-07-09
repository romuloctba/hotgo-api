import { Injectable, Inject } from '@nestjs/common';
import { CreateAffiliateDto } from './dto/createAffiliate.dto';
import { Affiliate } from './affiliate.interface';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AffiliateService {
  affiliates: Affiliate[] = [];

  constructor(
    @Inject('USER_SERVICE') private readonly client: ClientProxy) {
      //
    }

  findAll(): Affiliate[] {
    return this.affiliates;
  }

  create(body: CreateAffiliateDto): Affiliate {
    const affiliate = new Affiliate(body);
    affiliate.id = this.affiliates.length + 1;
    this.affiliates.push(affiliate);
    return affiliate;
  }

  read(id: number) {
    return this.affiliates.find(affiliate => affiliate.id === id);
  }

  isUserValid(id: number) {
    const pattern = { queryBy: 'id' };
    return this.client.send<number>(pattern, id);
  }
}
