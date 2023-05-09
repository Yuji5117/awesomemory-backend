import { Album } from '../entities';

export class AlbumResponseDTO {
  private id: number;
  private title: string;

  constructor(entity: Album) {
    this.id = entity.getId();
    this.title = entity.getTitle();
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }
}
