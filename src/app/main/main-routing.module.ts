import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainPage,
    children: [
      {
        path: 'categories',
        loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: 'notes',
        loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
      },
      {
        path: "",
        redirectTo: "/main/tabs/categories",
        pathMatch: "full"
      },
    ]
  },
  {
    path: "",
    redirectTo: "/main/tabs/categories",
    pathMatch: "full"
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
