export class Showcase {
  title:string;
  description:string;
  description2:string;
  link:string;
  keywords:string[];
  icon:string;

  constructor(title:string, description:string, description2:string, link:string, keywords:string[], icon:string){
      this.title = title;
      this.description = description;
      this.description2 = description2;
      this.link = link;
      this.keywords = keywords;
      this.icon = icon;
  }

}
