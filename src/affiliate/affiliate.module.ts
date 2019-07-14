import { Module } from '@nestjs/common';
import { AffiliateController } from './affiliate.controller';
import { AffiliateService } from './affiliate.service';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { ClientsModule } from '@nestjs/microservices';
import { AffiliateEntity } from './affiliate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AffiliatePipe } from './affiliate.pipe';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AffiliateEntity]),
    UserModule,
  ],
  controllers: [
    // AffiliateController
  ],
  providers: [
    AffiliateService,
    AffiliatePipe,
  ]
})
export class AffiliateModule {}
