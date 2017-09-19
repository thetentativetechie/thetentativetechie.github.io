import {Component, Input, trigger, state, style, transition, animate, keyframes} from '@angular/core';
import {ImageChip} from '../model/imagechip.model';

@Component({
    selector: 'image-chip',
    styleUrls: ['./imagechip.component.css'],
    templateUrl: './imagechip.component.html',
    animations: [
        trigger ('fadein', [
            state('0', style({
                transform: 'translateX(-100%)'
            })),
            state('1', style({
                transform: 'translateX(100%)'
            })),
            transition('0 => 1', [
                animate(300, keyframes([
                style({opacity: 0, transform: 'translateX(-50%)', offset: 0}),
                style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
                ]))
            ]),
            transition('1 => 0', [
                animate(300, keyframes([
                  style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
                  style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                  style({opacity: 0, transform: 'translateX(90%)',  offset: 1.0})
                ]))
            ])
        ])
    ]
})
export class ImageChipComponent {

    state: number = 0;

    @Input() imagechip: ImageChip;

    constructor() {
        setTimeout(() => {
            if (this.state === 0) {
                this.state = 1;
            } else {
                this.state = 0;
            }
            console.log(this.state);
        }, 1000);
    }

}
