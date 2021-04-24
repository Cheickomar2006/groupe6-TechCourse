import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {

  selectedCategory: Category;
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(paramMap => {
        let id: string = paramMap.get("categoryId").toString();
        this.selectedCategory = this.categoriesService.getOneCategory(id);
      });

  }

}
