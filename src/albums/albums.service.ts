import { Injectable } from '@nestjs/common';
import { Album } from './album.mode';

@Injectable()
export class AlbumsService {
  private albums: Album[] = [
    {
      id: 1,
      title: 'test1',
    },
    {
      id: 2,
      title: 'test2',
    },
    {
      id: 3,
      title: 'test3',
    },
  ];

  async findAll() {
    return this.albums;
  }

  async create(album: Album) {
    this.albums.push(album);
    return this.albums;
  }
}
