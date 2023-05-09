import { Album } from '../entities';

export abstract class AlbumsRepository {
  abstract findAll(): Promise<Album[]>;
}
