import { jwtConstants } from '@/config/auth';
import { AuthController } from '@/presenter/auth';
import { AuthUseCases } from '@/use-cases/auth';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthUseCases],
  controllers: [AuthController],
  exports: [AuthUseCases],
})
export class AuthModule {}
