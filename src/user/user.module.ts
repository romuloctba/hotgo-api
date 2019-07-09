import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { ClientsModule } from '@nestjs/microservices';
import { USER_SERVICE } from './user.constants';

@Module({
  imports: [
    ClientsModule.register([{ name: USER_SERVICE, transport: Transport.TCP }]),
  ],
  controllers: [UserController],
})
export class UserModule {}
