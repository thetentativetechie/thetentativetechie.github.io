import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Contact} from './contact.model';
import {OnInit} from '@angular/core';


@Component({
  selector: 'contact-list',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  dataService: DataService;
  contacts: Contact[];
  contactColumnWidth: Number;
  isInitialized: Boolean = false;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.dataService.getContactList(type).subscribe(data => {
        this.contacts = data;
        this.contactColumnWidth = 100 / this.contacts.length;
        this.isInitialized = true;
      });
  }

  onContactClick = function(contact) {
    console.log(contact);
  };

}
