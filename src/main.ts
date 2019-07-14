import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000 },
  });

  await app.startAllMicroservicesAsync();

  const options = new DocumentBuilder()
  .setTitle('HotGo API')
  .setDescription('The HotGo API description')
  .setVersion('1.0')
  .addTag('affiliate', 'Rewarded to connect customers to products.')
  .addTag('supplier', 'Supplies quality products.')
  .addTag('customer', 'Buys quality products.')
  .addTag('product', 'Quality Product.')
  .addTag('user', 'Operations about user')
  .addTag('orders', 'Order made by customers')
  .addTag('referral', 'Referral information')
  .addTag('store', 'E-commerce for suppliers, us, or affiliates')
  .addTag('theme', 'Themes for stores and squeeze pages')
  .addTag('comission', 'Payments to affiliates')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
