import {Component} from '@angular/core';
import {DataService} from '../common/dataservice';
import {Showcase} from './showcase.model';
import {OnInit} from '@angular/core';


@Component({
  selector: 'showcase-list',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  dataService: DataService;
  showcaseList: Showcase[];
  isInitialized: Boolean = false;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }


  ngOnInit() {
      const type: string = 'json';
      this.dataService.getShowcaseList(type).subscribe(data => {
        this.showcaseList = data;
        this.isInitialized = true;
      });
  }

  onShowcaseBtnClick = function(showcase){
    console.dir(showcase);
  };

}
