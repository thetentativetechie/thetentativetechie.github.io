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
  isInitialized: Boolean = false;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.dataService.getWorkExpList(type).subscribe(data => {
        this.workExpList = data;
        this.workExpColumnWidth = 100 / this.workExpList.length;
        this.isInitialized = true;
      });
  }

  onWorkExpBtnClick = function(workexp) {
    console.dir(workexp);
  };

}
