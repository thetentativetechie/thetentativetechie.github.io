import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Dashboard} from './dashboard.model';
import {OnInit} from '@angular/core';
import {Card} from '../common/model/card.model';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataService: DataService;
  dashboardDetails: Dashboard;
  isInitialized: Boolean = false;
  frontCard: Card;
  backCard: Card;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.dataService.getDashboardDetails(type).subscribe(data => {
        this.dashboardDetails = data;
        this.frontCard = data.flipcardFront;
        this.backCard = data.flipcardBack;
        this.isInitialized = true;
      });
  }

  onGithubBtnClick = function(dashboardDetails) {
      console.dir(dashboardDetails);
  };

}
