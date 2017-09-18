import {Injectable} from '@angular/core';
import {Contact} from '../contact/contact.model';
import {Dashboard} from '../dashboard/dashboard.model';
import {Navigation} from '../navigation/navigation.model';
import {Showcase} from '../showcase/showcase.model';
import {WorkExp} from '../workexp/workexp.model';
import {Article} from '../articles/articles.model';
import {Card} from './model/card.model';
import {ArticleCard} from '../articles/articlecard.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {ImageChip} from './model/imagechip.model';

@Injectable()
export class DataService {

    http: HttpClient;
    constructor(http: HttpClient) {
      this.http = http;
    }


    // function to get the list of contacts

    getContactList(type: string): Observable<Contact[]> {
      let url = null;
      if (type === 'json') {
        url = 'assets/json/contact.json';
      }else {
        url = '';
      }
      const contact = this.http.get<Contact[]>(url).map(data => {
        return data;
      });
      return contact;
    }

    getFooterContactList(contactList: Contact[]): Contact[] {
      let footerContactList: Contact[] = [];
      // iterate over the contact list & get contacts that are not of the
      // type followme

      for (let counter = 0; counter < contactList.length; counter ++) {
        const contact: Contact = contactList[counter];
        if (contact.type === 'footer') {
          footerContactList.push(contact);
        }
      }
      return footerContactList;
    }

    getFollowmeContactList(contactList: Contact[]): Contact[] {
      let followmeContactList: Contact[] = [];
      // iterate over the contact list & get contacts that are not of the
      // type followme

      for (let counter = 0; counter < contactList.length; counter ++) {
        const contact: Contact = contactList[counter];
        if (contact.type === 'followme') {
          followmeContactList.push(contact);
        }
      }
      return followmeContactList;
    }

    // function to get the dashboard details
    getDashboardDetails(type: string): Observable<Dashboard> {
      let url = null;
      if (type === 'json') {
        url = 'assets/json/dashboard.json';
      }else {
        url = '';
      }
      const dashboard = this.http.get<Dashboard>(url).map(data => {
        return data;
      });
      return dashboard;
    }

    getDashboardImageChips(keywords: string[]): ImageChip[] {
      let imagechips: ImageChip[] = [];
      for (let keywordCounter = 0; keywordCounter < keywords.length; keywordCounter ++) {
        const keyword: string = keywords[keywordCounter];
        let imageUrl = 'assets/img/';
        if (keyword === 'java/j2ee') {
          imageUrl = imageUrl + 'java.jpg';
        } else if (keyword === 'angular') {
          imageUrl = imageUrl + 'angular.png';
        } else if (keyword === 'angular material') {
          imageUrl = imageUrl + 'angular.png';
        } else if (keyword === 'ionic') {
          imageUrl = imageUrl + 'ionic.png';
        } else if (keyword === 'javascript') {
          imageUrl = imageUrl + 'javascript.jpg';
        } else if (keyword === 'nativescript') {
          imageUrl = imageUrl + 'nativescript.png';
        }
        const imagechip: ImageChip = new ImageChip(imageUrl, keyword);
        imagechips.push(imagechip);
      }
      return imagechips;
    }

    // function to get the navigation list
    getNavigationList(type: string): Observable<Navigation[]> {
      let url = null;
      if (type === 'json') {
        url = 'assets/json/navigation.json';
      }else {
        url = '';
      }
      const navigation = this.http.get<Navigation[]>(url).map(data => {
        return data;
      });
      return navigation;
    }

    // function to get the showcase list
    getShowcaseList(type: string): Observable<Showcase[]> {
      let url = null;
      if (type === 'json') {
        url = 'assets/json/showcase.json';
      }else {
        url = '';
      }
      const showcase = this.http.get<Showcase[]>(url).map(data => {
        return data;
      });
      return showcase;
    }

    // function to get the work exp list
    getWorkExpList(type: string): Observable<WorkExp[]> {
      let url = null;
      if (type === 'json') {
        url = 'assets/json/workexp.json';
      }else {
        url = '';
      }
      const workexp = this.http.get<WorkExp[]>(url).map(data => {
        return data;
      });
      return workexp;
    }

    getArticlesList(type: string): Observable<Article[]> {
      let url = null;
      if (type === 'json') {
        url = 'assets/json/articles.json';
      }else {
        url = '';
      }
      const articles = this.http.get<Article[]>(url).map(data => {
        return data;
      });
      return articles;
    }

    getPublishedArticlesList(articles: Article[]): ArticleCard[] {
      const publishedArticles: ArticleCard[] = [];
      // iterate over the articles
      for (let articleCtr = 0; articleCtr < articles.length; articleCtr ++) {
        const article = articles[articleCtr];
        if (article['status'] === 'done') {
          // convert article into card format
            const frontCard = new Card('text', ' ', 'img', article.avatar, article.title, [article.description],
            'View More Details', '', 'View Code', article.codeLink, 'View Blog', article.blogLink,
            'Back', '' , -1, -1);

            const backCard = new Card('chips', ' ', '', article.avatar, article.title, article.keywords,
            'View More Details', '', 'View Code', article.codeLink, 'View Blog', article.blogLink,
            'Back', '' , -1, -1);
            const articleCard = new ArticleCard(frontCard, backCard);
            publishedArticles.push(articleCard);
        }
      }
      return publishedArticles;
    }

    getUnPublishedArticlesList(articles: Article[]): ArticleCard[] {
      const unpublishedArticles: ArticleCard[] = [];
      // iterate over the articles
      for (let articleCtr = 0; articleCtr < articles.length; articleCtr ++) {
        const article = articles[articleCtr];
        if (article['status'] === 'draft') {
          // convert article into card format
            const frontCard = new Card('text', ' ', 'img', article.avatar, article.title, [article.description],
            'View More Details', '', 'View Code', article.codeLink, 'View Blog', article.blogLink,
            'Back', '' , -1, -1);

            const backCard = new Card('chips', ' ', '', article.avatar, article.title, article.keywords,
            'View More Details', '', 'View Code', article.codeLink, 'View Blog', article.blogLink,
            'Back', '' , -1, -1);
            const articleCard = new ArticleCard(frontCard, backCard);
            unpublishedArticles.push(articleCard);
        }
      }
      return unpublishedArticles;
    }


}
