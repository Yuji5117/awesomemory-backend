import { IEntity } from 'src/domain/shared/IEntity';

export class Album implements IEntity {
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

  equals(entity: IEntity): boolean {
    if (!(entity instanceof Album)) return false;

    return this.id === entity.id;
  }
}
