import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersUseCases } from '../users';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUseCases {
  constructor(
    private readonly usersUseCases: UsersUseCases,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersUseCases.findOne(username);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { usename: user.username, sub: user.userId };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
