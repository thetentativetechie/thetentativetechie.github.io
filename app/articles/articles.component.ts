import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Article} from './articles.model';
import {OnInit} from '@angular/core';


@Component({
  selector:'article-list',
  templateUrl:'./articles.component.html'
})
export class ArticlesComponent implements OnInit {

  dataService:DataService;
  publishedArticles:Article[];
  unpublishedArticles:Article[];


  constructor(dataService:DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type:string = 'json';
      const articles:Article[] = this.dataService.getArticlesList(type);
      this.publishedArticles = this.dataService.getPublishedArticlesList(articles);
      this.unpublishedArticles = this.dataService.getUnPublishedArticlesList(articles);
  }

}
