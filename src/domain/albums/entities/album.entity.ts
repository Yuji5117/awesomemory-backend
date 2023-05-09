import { BaseEntity } from 'src/domain/shared';

export class Album implements BaseEntity {
  private readonly id: number;
  private title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  equals(entity: BaseEntity): boolean {
    if (!(entity instanceof Album)) return false;

    return this.id === entity.id;
  }
}
