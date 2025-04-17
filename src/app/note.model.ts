import { Tag } from './tag';

export class Notes {
  constructor(
    public title: string,
    public content: string,
    public tags: Tag[] = [],
    public id: number = 0
  ) {}
}
