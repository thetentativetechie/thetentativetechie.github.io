export class Navigation {

  id:string;
  title:string;
  route:string;
  icon:string;

  constructor(id:string, title:string, route:string, icon:string) {
      this.id = id;
      this.title = title;
      this.route = route;
      this.icon = icon;
  }

}
