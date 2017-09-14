import {Component, Input} from '@angular/core';
import {StickyNote} from '../model/stickynote.model';

@Component({
    selector: 'sticky-note',
    templateUrl: './stickynote.component.html',
    styleUrls: ['./stickynote.component.css']
})
export class StickyNoteComponent {

    @Input() stickynotetext: StickyNote;

}
