import { Injectable } from '@nestjs/common';
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
    console.log(' validate user -- ', username, plainPass, encriptedPpass);
    const user = await this.usersService.findOne({email: username, password: encriptedPpass });
    console.log(' validate user found pass ', user);
    if (user && user.password === encriptedPpass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    // TODO: add relevant stuff to payload
    console.log('login User ', user);
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
