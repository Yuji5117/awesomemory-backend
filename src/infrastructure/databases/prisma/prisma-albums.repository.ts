import { Album } from '@/domain/albums/entities';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PrismaAlbumsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Album[]> {
    const albumsPrismaData = await this.prismaService.album.findMany({});

    const albums = albumsPrismaData.map(
      (albumPrismaData) => new Album(albumPrismaData.id, albumPrismaData.title),
    );

    return albums;
  }
}
