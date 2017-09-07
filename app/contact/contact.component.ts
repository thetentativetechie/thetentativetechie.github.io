import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Contact} from './contact.model';
import {OnInit} from '@angular/core';


@Component({
  selector:'contact-list',
  templateUrl:'./contact.component.html'
})
export class ContactComponent implements OnInit {

  dataService:DataService;
  contacts:Contact[];


  constructor(dataService:DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type:string = 'json';
      this.contacts = this.dataService.getContactList(type);
  }

}
