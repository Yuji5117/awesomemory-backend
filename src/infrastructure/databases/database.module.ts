import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAlbumsRepository } from './prisma/';
import { AlbumsRepository } from '@/domain/albums/repositories';

@Module({
  providers: [
    PrismaService,
    { provide: AlbumsRepository, useClass: PrismaAlbumsRepository },
  ],
  exports: [AlbumsRepository],
})
export class DatabaseModule {}
