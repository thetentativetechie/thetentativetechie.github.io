import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Dashboard} from './dashboard.model';
import {OnInit} from '@angular/core';
import {Card} from '../common/model/card.model';
import {Contact} from '../contact/contact.model';
import {ImageChip} from '../common/model/imagechip.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataService: DataService;
  dashboardDetails: Dashboard;
  isInitialized: Boolean = false;
  isContactInitialized: Boolean = false;
  frontCard: Card;
  backCard: Card;
  contacts: Contact[];
  keywords: ImageChip[];

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.dataService.getDashboardDetails(type).subscribe(data => {
        this.dashboardDetails = data;
        this.frontCard = data.flipcardFront;
        this.backCard = data.flipcardBack;
        this.keywords = this.dataService.getDashboardImageChips(data.highlights);
        this.isInitialized = true;
      });
      // Get follow me details
      this.dataService.getContactList('json').subscribe(data => {
        this.contacts = this.dataService.getFollowmeContactList(data);
        this.isContactInitialized = true;
      });
  }

  onGithubBtnClick = function(dashboardDetails) {
      console.dir(dashboardDetails);
  };

  onClickContact = function (contact) {
    console.dir(contact);
    window.open(contact.url, '_blank');
    };

}
