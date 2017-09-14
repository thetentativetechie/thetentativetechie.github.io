import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {WorkExp} from './workexp.model';
import {OnInit} from '@angular/core';
import {StickyNote} from '../common/model/stickynote.model';

@Component({
  selector: 'workexp-list',
  templateUrl: './workexp.component.html'
})
export class WorkExpComponent implements OnInit {

  dataService: DataService;
  workExpList: WorkExp[];
  workExpColumnWidth: Number;
  isInitialized: Boolean = false;
  stickynotetext: StickyNote;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.dataService.getWorkExpList(type).subscribe(data => {
        this.workExpList = data;
        this.workExpColumnWidth = 100 / this.workExpList.length;
        this.stickynotetext = new StickyNote('Full Stack Developer', 'text', ['java/j2ee', 'struts']);
        this.isInitialized = true;

      });
  }

  onWorkExpBtnClick = function(workexp) {
    console.dir(workexp);
  };

}
