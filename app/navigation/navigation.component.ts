import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Navigation} from './navigation.model';
import {OnInit} from '@angular/core';


@Component({
  selector:'navigation-list',
  templateUrl:'./navigation.component.html'
})
export class NavigationComponent implements OnInit {

  dataService:DataService;
  navigation:Navigation[];


  constructor(dataService:DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type:string = 'json';
      this.navigation = this.dataService.getNavigationList(type);
  }

}
