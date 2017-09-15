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
  keyHighlights: StickyNote[];

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.dataService.getWorkExpList(type).subscribe(data => {
        this.workExpList = data;
        this.workExpColumnWidth = 100 / this.workExpList.length;
        this.getKeyHighlights(data);
        this.isInitialized = true;
      });
  }

  getKeyHighlights(workExpList: WorkExp[]) {
    // iterate over the work experience & get the key highlights
    let highlights: StickyNote[] = [];
    for (let counter = 0; counter < workExpList.length; counter++) {
      // TODO - defining workexp as type WorkExp causes a compilation  error
      // Property 'keyhighlights' does not exist on type 'WorkExp'.
      const workexp: any = workExpList[counter];
      console.dir(workexp);
      for (let highlightCounter = 0; highlightCounter < workexp.keyhighlights.length; highlightCounter ++) {
          const keyhighlight = workexp.keyhighlights[highlightCounter];
          highlights.push(keyhighlight);
      }
    }
    console.dir(highlights);
    this.keyHighlights = highlights;
  }

  onWorkExpBtnClick = function(workexp) {
    console.dir(workexp);
  };

}
