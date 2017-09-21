export class Showcase {
  title: string;
  description: string;
  description2: string;
  link: string;
  keywords: string[];
  icon: string;
  rating: number;
  downloads: number;
  demoicon: string;

  constructor(title: string, description: string, description2: string, link: string,
    keywords: string[], icon: string, rating: number, downloads: number, demoicon: string) {
      this.title = title;
      this.description = description;
      this.description2 = description2;
      this.link = link;
      this.keywords = keywords;
      this.icon = icon;
      this.downloads = downloads;
      this.rating = rating;
      this.demoicon = demoicon;
  }

}
