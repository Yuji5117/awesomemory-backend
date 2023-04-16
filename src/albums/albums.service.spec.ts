import { Test, TestingModule } from '@nestjs/testing';
import { AlbumsService } from './albums.service';

describe('AlbumsService', () => {
  let service: AlbumsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumsService],
    }).compile();

    service = module.get<AlbumsService>(AlbumsService);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('get all Albums', async () => {
    const res = await service.findAll();

    expect(res).toEqual([
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
    ]);
  });

  test('can create album', async () => {
    const params = { id: 4, title: 'test4' };

    const res = await service.create(params);

    expect(res).toEqual([
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
      { id: 4, title: 'test4' },
    ]);
  });
});
