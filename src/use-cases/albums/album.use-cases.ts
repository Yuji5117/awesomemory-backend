import { AlbumResponseDTO } from '@/domain/albums/dtos';
import { AlbumsRepository } from '@/domain/albums/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbumsUseCases {
  constructor(private readonly albumsRepository: AlbumsRepository) {}
  async findAll(): Promise<AlbumResponseDTO[]> {
    const entities = await this.albumsRepository.findAll();

    const albumResponseDTO = entities.map(
      (entity) => new AlbumResponseDTO(entity),
    );

    return albumResponseDTO;
  }
}
