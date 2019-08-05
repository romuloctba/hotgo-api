import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from './models/user.entity';
import { CreateUserDto } from './models/createUserDto';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Query(returns => UserEntity)
  async user(@Args('id') id: string) {
    return await this.userService.findById(id);
  }

  @Query(returns => [UserEntity])
  async getUsers() {
    return await this.userService.findAll();
  }

  @Mutation(returns => UserEntity)
  async createUser(
    @Args('user') user: CreateUserDto,
  ){
    return await this.userService.create(user);
  }
}
