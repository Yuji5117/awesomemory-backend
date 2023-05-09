import { AlbumsUseCases } from 'src/use-cases/albums';
import { Controller, Get } from '@nestjs/common';
import { AlbumResponseDTO } from '@/domain/albums/dtos';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsUseCases: AlbumsUseCases) {}

  @Get()
  async findAll(): Promise<AlbumResponseDTO[]> {
    return await this.albumsUseCases.findAll();
  }
}
