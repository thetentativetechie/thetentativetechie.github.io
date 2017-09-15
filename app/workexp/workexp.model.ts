import {StickyNote} from '../common/model/stickynote.model';

export class WorkExp {

  company: string;
  // relative path to the company logo
  logo: string;
  title: string;
  // list of keywords that will be displayed as chips
  keyhighlights: StickyNote[];
  // list of highlights that will be displayed as stickynotes
  highlights: StickyNote[];
  location: string;
  date: string;

  constructor(company: string, logo: string, title: string, keyhighlights: StickyNote[],
    highlights: StickyNote[], location: string, date: string) {
      this.company = company;
      this.logo = logo;
      this.title = title;
      this.keyhighlights = keyhighlights;
      this.highlights = highlights;
      this.location = location;
      this.date = date;
  }

}
