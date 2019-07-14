import { Controller, Get, Param, Post, Body, UsePipes, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './models/createUserDto';
import { UserService } from './user.service';
import { UserPipe } from './user.pipe';
import { ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAllUsers() {
    return this.userService.findAll();
  }

  @Post()
  @UsePipes(UserPipe)
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Get(':id')
  @MessagePattern({ queryBy: 'id' })
  findById(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Post(':id/affiliate')
  createAffiliateByUser(@Body() user: CreateUserDto) {
    return this.userService.createAffiliateByUser(user);
  }

}
