import { UsersUseCases } from '@/use-cases/users/users.use-cases';
import { Module } from '@nestjs/common';

@Module({
  providers: [UsersUseCases],
  exports: [UsersUseCases],
})
export class AuthModule {}
