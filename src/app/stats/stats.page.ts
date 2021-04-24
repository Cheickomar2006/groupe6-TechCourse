import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CategoriesService } from '../main/categories/categories.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  categoriesStats: number;
  coursesStats: number;
  chaptersStats: number;
  constructor(
    private categoriesService: CategoriesService
  ) { }

  presentPopover(){
    this.categoriesService.presentPopover("click");
  }

  ngOnInit() {
    this.categoriesStats = this.categoriesService.getStatsOf("categories");
    this.coursesStats = this.categoriesService.getStatsOf("courses");
    this.chaptersStats = this.categoriesService.getStatsOf("chapters");
  }

}
