import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthUseCases } from '@/use-cases/auth';
import { SignInDTO } from '@/domain/auth/dtos';

@Controller('auth')
export class AuthController {
  constructor(private readonly authUseCases: AuthUseCases) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDTO: SignInDTO) {
    return this.authUseCases.signIn(signInDTO.username, signInDTO.password);
  }
}
