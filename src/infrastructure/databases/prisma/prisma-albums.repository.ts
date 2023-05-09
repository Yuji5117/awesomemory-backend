import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAlbumsRepository {
  async findAll(): Promise<any[]> {
    return [{ id: 1, title: 'test' }];
  }
}
