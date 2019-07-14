import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { ClientsModule } from '@nestjs/microservices';
import { USER_SERVICE } from './user.constants';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { UserPipe } from './user.pipe';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    ClientsModule.register([{ name: USER_SERVICE, transport: Transport.TCP }]),
  ],
  controllers: [
    UserController,
  ],
  providers: [UserService,
    //  UserPipe,
     UserEntity,
    ],
  exports: [UserService],
})
export class UserModule {}
