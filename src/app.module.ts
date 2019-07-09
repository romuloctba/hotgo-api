import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreController } from './store/store.controller';
import { AffiliateController } from './affiliate/affiliate.controller';
import { SupplierController } from './supplier/supplier.controller';
import { ClientController } from './client/client.controller';
import { ProductController } from './product/product.controller';
import { UserController } from './user/user.controller';
import { OrdersController } from './orders/orders.controller';
import { ReferralController } from './referral/referral.controller';
import { ThemeController } from './theme/theme.controller';
import { ComissionController } from './comission/comission.controller';
import { AffiliateModule } from './affiliate/affiliate.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AffiliateModule, UserModule],
  controllers: [
    AppController,
    StoreController,
    SupplierController,
    ClientController,
    ProductController,
    UserController,
    OrdersController,
    ReferralController,
    ThemeController,
    ComissionController,
  ],
  providers: [AppService],
})
export class AppModule {}
