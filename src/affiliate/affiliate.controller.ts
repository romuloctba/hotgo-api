import { Controller, Get, Param, Post, Body, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Affiliate } from './affiliate.interface';
import { AffiliateService } from './affiliate.service';
import { CreateAffiliateDto } from './dto/createAffiliate.dto';
import { ClientProxy } from '@nestjs/microservices';
import { throwError } from 'rxjs';

@Controller('affiliate')
export class AffiliateController {

  constructor(
    private readonly affiliateService: AffiliateService,
    @Inject('USER_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  getAffiliates(): Affiliate[] {
    return this.affiliateService.findAll();
  }

  @Post()
  async createAffiliate(@Body() dto: CreateAffiliateDto): Promise<any> {
    const pattern = { queryBy: 'id' };
    const isValid = await this.client.send<number>(pattern, dto.userId)
      .toPromise();

    if (!isValid) {
      throw new HttpException('Deu ruimzao', HttpStatus.NOT_ACCEPTABLE);
    }

    return this.affiliateService.create(dto);
  }

  @Get(':id')
  getAffiliate(@Param('id') id: number): Affiliate {
    return this.affiliateService.read(id);
  }

}
