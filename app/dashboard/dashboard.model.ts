export class Dashboard {

    name:string;
    title:string;
    description1:string;
    description2:string;
    description3:string;
    // photo 1 , 2 & logo 1 , 2 are relative path to the images to be shown in the dashboard pane
    photo1:string;
    photo2:string;
    logo1:string;
    logo2:string;
    // the highlights that will be shown as chips
    highlights:string[];
    // link to the github repository
    github:string;

    constructor(name:string, title:string, description1:string, description2:string, description3:string, photo1:string, photo2:string, logo1:string, logo2:string, highlights:string[], github:string){
        this.name = name;
        this.title = title;
        this.description1 = description1;
        this.description2 = description2;
        this.description3 = description3;
        this.photo1 = photo1;
        this.photo2 = photo2;
        this.logo1 = logo1;
        this.logo2 = logo2;
        this.highlights = highlights;
        this.github = github;
    }
}
