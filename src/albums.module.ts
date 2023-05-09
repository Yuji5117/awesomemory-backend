import { Module } from '@nestjs/common';
import { AlbumsController } from './presenter/albums/albums.controller';
import { AlbumsUseCases } from './use-cases/albums';

@Module({
  providers: [AlbumsUseCases],
  controllers: [AlbumsController],
})
export class AlbumsModule {}
