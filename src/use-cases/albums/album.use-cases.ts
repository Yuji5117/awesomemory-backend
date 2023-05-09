import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbumsUseCases {
  async findAll(): Promise<any> {
    return [
      {
        id: 1,
        title: '旅行',
      },
    ];
  }
}
