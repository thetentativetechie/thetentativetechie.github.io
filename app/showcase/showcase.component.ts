import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Showcase} from './showcase.model';
import {OnInit} from '@angular/core';


@Component({
  selector: 'showcase-list',
  templateUrl: './showcase.component.html'
})
export class ShowcaseComponent implements OnInit {

  dataService: DataService;
  showcaseList: Showcase[];


  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.showcaseList = this.dataService.getShowcaseList(type);
  }

  onShowcaseBtnClick = function(showcase){
    console.dir(showcase);
  };

}
