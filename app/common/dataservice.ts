import {Injectable} from '@angular/core';
import {Contact} from '../contact/contact.model';
import {Dashboard} from '../dashboard/dashboard.model';
import {Navigation} from '../navigation/navigation.model';
import {Showcase} from '../showcase/showcase.model';
import {WorkExp} from '../workexp/workexp.model';
import {Article} from '../articles/articles.model';

@Injectable()
export class DataService {


    // function to get the list of contacts

    getContactList(url: string): Contact[] {
      const contact: Contact[] = null;
      return contact;
    }

    // function to get the dashboard details
    getDashboardDetails(url: string): Dashboard {
      const dashboard: Dashboard = null;
      return dashboard;
    }

    // function to get the navigation list
    getNavigationList(url: string): Navigation[] {
      const navigation: Navigation[] = null;
      return navigation;
    }

    // function to get the showcase list
    getShowcaseList(url: string): Showcase[] {
      const showcase: Showcase[] = null;
      return showcase;
    }

    // function to get the work exp list
    getWorkExpList(url: string): WorkExp[] {
      const workexp: WorkExp[] = null;
      return workexp;
    }

    getArticlesList(url: string): Article[] {
      const articles: Article[] = null;
      return articles;
    }

    getPublishedArticlesList(articles: Article[]): Article[] {
      const publishedArticles: Article[] = null;
      return publishedArticles;
    }

    getUnPublishedArticlesList(articles: Article[]): Article[] {
      const unpublishedArticles: Article[] = null;
      return unpublishedArticles;
    }


}
