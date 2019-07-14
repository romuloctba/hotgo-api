import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, plainPass: string): Promise<any> {
    const encriptedPpass = await crypto
    .createHmac('sha256', plainPass)
    .digest('hex');
    const user = await this.usersService.findOne({email: username, password: encriptedPpass });
    if (user && user.password === encriptedPpass) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDetails: any) {
    console.log('login to ', loginDetails);
    // TODO: add relevant stuff to payload
    const encriptedPassword = await crypto
      .createHmac('sha256', loginDetails.password)
      .digest('hex');

    const user = await this.usersService.findOne({ email: loginDetails.username, password: encriptedPassword });

    console.log('login to ', user);
    if(!user) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
