import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import LoginDto from './models/login.dto';
import { Any } from 'typeorm';
import SuccessJwtLoginResponse from './models/sucess-jwt-login-response.class';

@Resolver('Auth')
export class AuthResolver {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @Mutation(returns => SuccessJwtLoginResponse)
  async login(@Args('loginDto') loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }
}
