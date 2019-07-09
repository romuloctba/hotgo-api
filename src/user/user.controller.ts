import { Controller, Get, Param } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('user')
export class UserController {

  @Get(':id')
  @MessagePattern({ queryBy: 'id' })
  findById(@Param('id') id: number) {
    return id < 50;
  }

}
