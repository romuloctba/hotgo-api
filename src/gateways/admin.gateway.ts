import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Post, Inject, Body, Controller } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/models/createUserDto';
import { Client } from '@nestjs/microservices/external/nats-client.interface';

@Controller('admin')
@WebSocketGateway()
export class AdminGateway {
  constructor(
    private userService: UserService,
  ) {}
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any) {
    return 'success';
  }

  @SubscribeMessage('createUserFromAdmin')
  async createUserFromAdmin(client: Client, body: CreateUserDto) {
    const newUser = {
      email: body.email,
      password: body.password,
      phone: body.phone,
      firstName: body.firstName,
      lastName: body.firstName,
    };
    const result = await this.userService.create(newUser)
    .catch(e => {
      return JSON.stringify({ error: e.toString() });
    });
    return result;
  }
}
