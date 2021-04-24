import { Chapter } from "./chapter-detail/chapter.model";

export class Course{
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public imageUrl: string,
    public chapters: Chapter[]
  ){}
}
