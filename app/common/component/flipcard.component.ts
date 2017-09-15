import {Component, Input, ViewChild} from '@angular/core';
import {Card} from '../model/card.model';

@Component({
    selector: 'flip-card',
    templateUrl: './flipcard.component.html',
    styleUrls: ['./flipcard.component.css']
})
export class FlipCard {

    @Input() frontCard: Card;
    @Input() backCard: Card;

    @ViewChild ('card') card; 


    flip = function() {
        this.card.nativeElement.classList.add('card-flip');
        console.dir(this.card);
    };

    unflip = function() {
        this.card.nativeElement.classList.remove('card-flip');
    };

}