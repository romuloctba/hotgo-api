import { Controller, Get, Param, Post, Body, UsePipes, UseGuards, Req } from '@nestjs/common';
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
  //@UseGuards(AuthGuard('jwt'))
  findById(@Param('id') id: string, @Req() req) {
    if (id === 'me') {
      id = req.user.id;
    }
    return this.userService.findById(id)
    .catch(e => {
      console.error(e);
      throw e
    });
  }

  @Post(':id/affiliate')
  createAffiliateByUser(@Body() user: CreateUserDto) {
    return this.userService.createAffiliateByUser(user);
  }

}
