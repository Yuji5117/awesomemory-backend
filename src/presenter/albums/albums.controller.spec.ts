import { Test, TestingModule } from '@nestjs/testing';
import { AlbumsUseCases } from '@/use-cases/albums';
import { AlbumsController } from './albums.controller';

describe('AlbumController', () => {
  let controller: AlbumsController;
  let useCases: AlbumsUseCases;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbumsController],
      providers: [AlbumsUseCases],
    }).compile();

    controller = module.get<AlbumsController>(AlbumsController);
    useCases = module.get<AlbumsUseCases>(AlbumsUseCases);
  });

  test('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
