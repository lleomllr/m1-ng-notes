import { Tag } from './tag';

export class Notes {
  private static lastId = 0;

  id: number;
  title: string;
  tags: Tag[];
  content: string;

  constructor(title: string, content: string = '', tags: Tag[] = [], id?: number) {
    this.title = title;
    this.content = content;
    this.tags = tags;

    if (id !== undefined) {
      this.id = id;
      if (id > Notes.lastId) {
        Notes.lastId = id;
      }
    } else {
      Notes.lastId++;
      this.id = Notes.lastId;
    }
  }
}