import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Navigation} from './navigation.model';
import {OnInit} from '@angular/core';


@Component({
  selector: 'navigation-list',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  dataService: DataService;
  navigationList: Navigation[];
  navigationItemWidth: Number;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.navigationList = this.dataService.getNavigationList(type);
      // space the navigation items equally
      this.navigationItemWidth = (this.navigationList.length / 100);
  }

}
