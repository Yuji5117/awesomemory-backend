import { Injectable } from '@nestjs/common';
import { Album } from './album.mode';
import { PrismaService } from './prisma.service';

@Injectable()
export class AlbumsService {
  constructor(private readonly prismService: PrismaService) {}

  async findAll() {
    return await this.prismService.album.findMany({});
  }

  // async create(album: Album) {
  //   this.albums.push(album);
  //   return this.albums;
  // }
}
