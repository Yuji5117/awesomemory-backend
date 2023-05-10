import { UsersUseCases } from '@/use-cases/users';
import { Module } from '@nestjs/common';

@Module({
  providers: [UsersUseCases],
  exports: [UsersUseCases],
})
export class UsersModule {}
