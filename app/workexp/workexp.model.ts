export class WorkExp {

  company: string;
  // relative path to the company logo
  logo: string;
  title: string;
  // list of keywords that will be displayed as chips
  keywords: string[];
  // list of highlights that will be displayed as list items
  highlights: string[];
  location: string;
  date: string;

  constructor(company: string, logo: string, title: string, keywords: string[], highlights: string[], location: string, date: string) {
      this.company = company;
      this.logo = logo;
      this.title = title;
      this.keywords = keywords;
      this.highlights = highlights;
      this.location = location;
      this.date = date;
  }

}
