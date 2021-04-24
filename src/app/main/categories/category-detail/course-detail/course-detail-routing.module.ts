import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailPage } from './course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailPage
  },
  {
    path: ':chapterId',
    loadChildren: () => import('./chapter-detail/chapter-detail.module').then( m => m.ChapterDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailPageRoutingModule {}
