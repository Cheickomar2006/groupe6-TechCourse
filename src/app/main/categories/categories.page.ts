import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CategoriesService } from './categories.service';
import { Category } from './category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: Category[];
  constructor(
    private categoriesService: CategoriesService,
    private menu: MenuController
  ) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }


  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }

}
