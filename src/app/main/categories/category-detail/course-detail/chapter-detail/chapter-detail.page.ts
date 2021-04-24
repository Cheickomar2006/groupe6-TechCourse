import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../../categories.service';
import { Chapter } from './chapter.model';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.page.html',
  styleUrls: ['./chapter-detail.page.scss'],
})
export class ChapterDetailPage implements OnInit {

  selectedChapter: Chapter;
  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(paramMap => {
        let id: string = paramMap.get("chapterId").toString();
        this.selectedChapter = this.categoriesService.getOneCourseChapter(id);
      });

  }

}
