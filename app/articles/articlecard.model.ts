import {Card} from '../common/model/card.model';

export class ArticleCard {

    frontCard: Card;
    backCard: Card;

    constructor(frontCard: Card, backCard: Card) {
        this.frontCard = frontCard;
        this.backCard = backCard;
    }

}
