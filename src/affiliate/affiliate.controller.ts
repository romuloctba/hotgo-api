import { Controller,
  Get,
  Param,
  Post,
  HttpException,
  HttpStatus,
  UsePipes,
  UnauthorizedException,
  UseGuards,
  Request
} from '@nestjs/common';
import { AffiliateEntity } from './affiliate.entity';
import { AffiliateService } from './affiliate.service';
import { CreateAffiliateDto } from './models/createAffiliate.dto';
import { ClientProxy } from '@nestjs/microservices';
import { AffiliatePipe } from './affiliate.pipe';
import { ObjectID } from 'typeorm';
import { ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('affiliate')

@Controller('affiliate')
export class AffiliateController {

  constructor(
    private readonly affiliateService: AffiliateService,
  ) {}

  @Get()
  getAffiliates(): Promise<AffiliateEntity[]> {
    return this.affiliateService.findAll();
  }

  @Post()
  @UsePipes(AffiliatePipe)
  @UseGuards(AuthGuard('jwt'))
  async createAffiliate(@Request() req): Promise<AffiliateEntity> {
    try {
      return this.affiliateService.create(req.user.id);
    } catch(e) {
        console.log('vish maninho deu erro');
        throw new HttpException(e, HttpStatus.NOT_ACCEPTABLE);
      });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getAffiliate(@Param('id') id: string): Promise<AffiliateEntity> {
    return this.affiliateService.read(id);
  }

}
