import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Dashboard} from './dashboard.model';
import {OnInit} from '@angular/core';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  dataService: DataService;
  dashboardDetails: Dashboard;
  isInitialized: Boolean = false;


  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.dataService.getDashboardDetails(type).subscribe(data => {
        this.dashboardDetails = data;
        this.isInitialized = true;
      });
  }

  onGithubBtnClick = function(dashboardDetails) {
      console.dir(dashboardDetails);
  };

}
