export class Contact {
  name: string;
  title: string;
  type: string;
  // path to the corresponding contact
  url: string;
  icon: string;
  // whether to show the Contact in small screens
  showXS: boolean;
  // order of the contact
  position: number;

  constructor(name: string, title: string, type: string, url: string, icon: string, showXS: boolean, position: number) {
      this.name = name;
      this.title = title;
      this.type = type;
      this.url = url;
      this.icon = icon;
      this.showXS = showXS;
      this.position = position;
  }

}
