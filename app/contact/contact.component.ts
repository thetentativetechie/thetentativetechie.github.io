import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Contact} from './contact.model';
import {OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'contact-list',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  dataService: DataService;
  contacts: Contact[];
  contactColumnWidth: Number;
  isInitialized: Boolean = false;
  snackBar: MdSnackBar;

  constructor(dataService: DataService, snackBar: MdSnackBar) {
    this.dataService = dataService;
    this.snackBar = snackBar;
  }


  ngOnInit() {
      const type: string = 'json';
      this.dataService.getContactList(type).subscribe(data => {
        this.contacts = this.dataService.getFooterContactList(data);
        this.contactColumnWidth = 100 / this.contacts.length;
        this.isInitialized = true;
      });
  }

  onContactClick = function(contact) {
    console.log(contact);
    if (contact.name !== 'email') {
      window.open(contact.url, '_blank');
    }
  };

}
