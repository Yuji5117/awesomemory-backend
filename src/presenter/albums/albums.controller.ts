import { AlbumsUseCases } from 'src/use-cases/albums';
import { Controller, Get } from '@nestjs/common';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsUseCases: AlbumsUseCases) {}

  @Get()
  async findAll() {
    return await this.albumsUseCases.findAll();
  }
}
