import { Module } from '@nestjs/common';
import { AffiliateController } from './affiliate.controller';
import { AffiliateService } from './affiliate.service';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([{ name: 'USER_SERVICE', transport: Transport.TCP }]),
  ],
  controllers: [AffiliateController],
  providers: [AffiliateService]
})
export class AffiliateModule {}
