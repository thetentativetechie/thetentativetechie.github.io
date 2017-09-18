import {Component, Input} from '@angular/core';
import {ImageChip} from '../model/imagechip.model';

@Component({
    selector: 'image-chip',
    styleUrls: ['./imagechip.component.css'],
    templateUrl: './imagechip.component.html'
})
export class ImageChipComponent {

    @Input() imagechip: ImageChip;

}
