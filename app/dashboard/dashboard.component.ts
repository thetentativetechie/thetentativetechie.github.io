import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Dashboard} from './dashboard.model';
import {OnInit} from '@angular/core';


@Component({
  selector:'dashboard',
  templateUrl:'./dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  dataService:DataService;
  dashboardDetails:Dashboard;


  constructor(dataService:DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type:string = 'json';
      this.dashboardDetails = this.dataService.getDashboardDetails(type);
  }

}
