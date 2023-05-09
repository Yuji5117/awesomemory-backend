import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsModule } from './albums.module';

@Module({
  imports: [AlbumsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
