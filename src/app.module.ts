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
import { APP_PIPE } from '@nestjs/core';
import { UserIdValidatorPipe } from './shared/validators/user-id-validator.pipe';
import { SupplierIdValidatorPipe } from './shared/validators/supplier-id-validator.pipe';
import { StoreIdValidatorPipe } from './shared/validators/store-id-validator.pipe';
import { CustomerIdValidatorPipe } from './shared/validators/customer-id-validator.pipe';
import { ProductIdValidatorPipe } from './shared/validators/product-id-validator.pipe';
import { PaymentIdValidatorPipe } from './shared/validators/payment-id-validator.pipe';

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
  providers: [
    {
      provide: APP_PIPE,
      useClass: UserIdValidatorPipe,
    },
    {
      provide: APP_PIPE,
      useClass: SupplierIdValidatorPipe,
    },
    {
      provide: APP_PIPE,
      useClass: StoreIdValidatorPipe,
    },
    {
      provide: APP_PIPE,
      useClass: CustomerIdValidatorPipe,
    },
    {
      provide: APP_PIPE,
      useClass: ProductIdValidatorPipe,
    },
    {
      provide: APP_PIPE,
      useClass: PaymentIdValidatorPipe,
    },
  ],
})
export class AppModule {}
