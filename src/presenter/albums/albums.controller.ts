import { Controller, Get } from '@nestjs/common';
import { AlbumsUseCases } from 'src/use-cases/albums';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsUseCase: AlbumsUseCases) {}

  @Get()
  async findAll() {
    return await this.albumsUseCase.findAll();
  }
}
