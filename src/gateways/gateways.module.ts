import { Module } from '@nestjs/common';
import { AdminGateway } from './admin.gateway';
import { AffiliateGateway } from './affiliate.gateway';
import { SellerGateway } from './seller.gateway';
import { ShoppingGateway } from './shopping.gateway';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    UserModule,
    ClientsModule.register([{ name: 'USER_SERVICE', transport: Transport.TCP }]),
  ],
  providers: [
    AdminGateway,
    AffiliateGateway,
    SellerGateway,
    ShoppingGateway,
  ],
})
export class GatewaysModule {

}
