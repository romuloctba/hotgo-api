import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
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

  async create(body: CreateAffiliateDto): Promise<Affiliate> {
    const pattern = { queryBy: 'id' };
    const isValidUser = await this.client.send<number>(pattern, body.userId)
      .toPromise();

    if (!isValidUser) {
      throw new HttpException('User is not valid', HttpStatus.NOT_ACCEPTABLE);
    }
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
