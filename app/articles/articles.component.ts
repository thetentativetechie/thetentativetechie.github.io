import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Article} from './articles.model';
import {ArticleCard} from './articlecard.model';
import {OnInit} from '@angular/core';
import {Card} from '../common/model/card.model';


@Component({
  selector: 'article-list',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
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
