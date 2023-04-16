import { Album } from './album.mode';
import { AlbumsService } from './albums.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  async findAll() {
    return await this.albumsService.findAll();
  }

  @Post()
  async create(@Body() createDTO: Album) {
    return await this.albumsService.create(createDTO);
  }
}
