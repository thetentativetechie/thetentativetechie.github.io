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
  isInitialized: Boolean = false;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.dataService.getNavigationList(type).subscribe(data => {
        this.navigationList = data;
        // space the navigation items equally
        this.navigationItemWidth = 100 / this.navigationList.length;
        this.isInitialized = true;
      });
  }

}
