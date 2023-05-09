import { Module } from '@nestjs/common';
import { AlbumsController } from '../../../presenter/albums/albums.controller';
import { AlbumsUseCases } from '@/use-cases/albums';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  providers: [AlbumsUseCases],
  controllers: [AlbumsController],
})
export class AlbumsModule {}
