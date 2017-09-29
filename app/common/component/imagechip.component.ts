import {Component, Input, trigger, state, style, transition, animate, keyframes} from '@angular/core';
import {ImageChip} from '../model/imagechip.model';

@Component({
    selector: 'image-chip',
    styleUrls: ['./imagechip.component.css'],
    templateUrl: './imagechip.component.html',
    animations: [
        trigger ('fadein', [
            state('0', style({width: 140, transform: 'translateX(0)', opacity: 1})),
            transition('0 => 1', [
                style({width: 10, transform: 'translateX(50px)', opacity: 1}),
                animate('1s 0.1s ease', style({
                transform: 'translateX(0)',
                width: 140
                }))
            ]),
            transition('1 => 0', [
                animate('1s 0.1s ease-out', style({
                transform: 'translateX(50px)',
                width: 10
                }))
            ])
        ])
    ]
})
export class ImageChipComponent {

    state: number = 0;

    @Input() imagechip: ImageChip;

    constructor() {
        setInterval(() => {
            if (this.state  === 0) {
                this.state = 1;
            } else {
                this.state = 0;
            }
            console.log(this.state);
        }, 3000);
    }

}
