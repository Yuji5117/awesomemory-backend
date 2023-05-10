import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsModule, AuthModule } from './infrastructure/databases/ioc';

@Module({
  imports: [AlbumsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
