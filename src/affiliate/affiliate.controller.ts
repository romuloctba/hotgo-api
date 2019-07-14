import { Controller, Get, Param, Post, Body, Inject, HttpException, HttpStatus, UsePipes } from '@nestjs/common';
import { AffiliateEntity } from './affiliate.entity';
import { AffiliateService } from './affiliate.service';
import { CreateAffiliateDto } from './dto/createAffiliate.dto';
import { ClientProxy } from '@nestjs/microservices';
import { AffiliatePipe } from './affiliate.pipe';
import { ObjectID } from 'typeorm';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('affiliate')

@Controller('affiliate')
export class AffiliateController {

  constructor(
    private readonly affiliateService: AffiliateService,
    @Inject('USER_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  getAffiliates(): Promise<AffiliateEntity[]> {
    return this.affiliateService.findAll();
  }

  @UsePipes(AffiliatePipe)
  @Post()
  async createAffiliate(@Body() dto: CreateAffiliateDto): Promise<AffiliateEntity> {
    return this.affiliateService.create(dto)
      .catch(e => {
        throw new HttpException(e, HttpStatus.NOT_ACCEPTABLE);
      });
  }

  @Get(':id')
  async getAffiliate(@Param('id') id: string): Promise<AffiliateEntity> {
    return this.affiliateService.read(id);
  }

}
