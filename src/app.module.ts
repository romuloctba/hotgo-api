import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AffiliateModule } from './affiliate/affiliate.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GatewaysModule } from './gateways/gateways.module';
import { StoreModule } from './store/store.module';
import { SupplierModule } from './supplier/supplier.module';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { ComissionModule } from './comission/comission.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
    }),
    AffiliateModule,
    UserModule,
    GatewaysModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
    StoreModule,
    SupplierModule,
    ProductModule,
    CustomerModule,
    OrderModule,
    ComissionModule,
    AuthModule,
    PaymentModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule {}
