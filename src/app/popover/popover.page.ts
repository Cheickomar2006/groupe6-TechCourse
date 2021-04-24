import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../main/categories/categories.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    private categoriesService: CategoriesService
  ) { }

  resetStats(){
    this.categoriesService.resetStats("categories");
    this.categoriesService.resetStats("courses");
    this.categoriesService.resetStats("chapters");
  }

  ngOnInit() {
  }

}
