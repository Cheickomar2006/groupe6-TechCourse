import { Course } from "./category-detail/course-detail/course.model";

export class Category{
  constructor(
      public id?: string,
      public title?: string,
      public description?: string,
      public imageUrl?: string,
      public courses?: Course[]
  ){}
}
