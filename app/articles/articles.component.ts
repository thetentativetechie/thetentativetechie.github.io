import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Article} from './articles.model';
import {OnInit} from '@angular/core';


@Component({
  selector: 'article-list',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {

  dataService: DataService;
  publishedArticles: Article[];
  unpublishedArticles: Article[];
  isInitialized: Boolean = false;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.dataService.getArticlesList(type).subscribe(data => {
        this.publishedArticles = this.dataService.getPublishedArticlesList(data);
        this.unpublishedArticles = this.dataService.getUnPublishedArticlesList(data);
        this.isInitialized = true;
      });
  }

  onArticleBtnClick = function(article, type) {
    console.dir(article);
    console.log(type);
  };

}
