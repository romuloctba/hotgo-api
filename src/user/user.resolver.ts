import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from './models/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Query(returns => UserEntity)
  async user(@Args('id') id: string) {
    return await this.userService.findById(id);
  }

  @Mutation(returns => UserEntity)
  async createUser(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('phone') phone: string,
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    ) {
    const newUser = {
      name,
      email,
      password,
      phone,
      firstName,
      lastName,
    };
    return await this.userService.create(newUser);
  }
}
