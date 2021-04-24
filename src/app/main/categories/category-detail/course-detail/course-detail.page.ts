import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../categories.service';
import { Course } from './course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {

  selectedCourse?: Course;
  categoryId: string;
  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      paramMap => {
        let id: string = paramMap.get("courseId").toString();
        this.selectedCourse = this.categoriesService.getOneCategoryCourse(id);
        this.categoryId = id.split(" ")[0];
      }
    )
  }
}
