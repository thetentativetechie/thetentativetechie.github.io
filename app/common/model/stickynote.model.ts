export class StickyNote {
    noteHeading: string;
    noteContentType: string;
    noteContentText: string[];

    constructor(noteHeading: string, noteContentType: string, noteContentText: string[]) {
        this.noteHeading = noteHeading;
        this.noteContentType = noteContentType;
        this.noteContentText = noteContentText;
    }
}
