import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersUseCases } from '../users';

@Injectable()
export class AuthUseCases {
  constructor(private readonly usersUseCases: UsersUseCases) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersUseCases.findOne(username);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;

    return result;
  }
}
