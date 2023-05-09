import { AlbumsRepository } from '@/domain/albums/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbumsUseCases {
  constructor(private readonly albumsRepository: AlbumsRepository) {}
  async findAll(): Promise<any> {
    return this.albumsRepository.findAll();
  }
}
