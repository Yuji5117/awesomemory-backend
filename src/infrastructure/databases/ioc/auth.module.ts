import { AuthUseCases } from '@/use-cases/auth';
import { UsersUseCases } from '@/use-cases/users';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersUseCases],
  providers: [AuthUseCases],
})
export class AuthModule {}
