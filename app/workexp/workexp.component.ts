import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {WorkExp} from './workexp.model';
import {OnInit} from '@angular/core';


@Component({
  selector: 'workexp-list',
  templateUrl: './workexp.component.html'
})
export class WorkExpComponent implements OnInit {

  dataService: DataService;
  workExpList: WorkExp[];
  workExpColumnWidth: Number;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.workExpList = this.dataService.getWorkExpList(type);
      this.workExpColumnWidth = this.workExpList.length / 100;
  }

  onWorkExpBtnClick = function(workexp) {
    console.dir(workexp);
  };

}
