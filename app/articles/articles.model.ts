export class Article {
    title: string;
    description: string;
    keywords: string[];
    codeLink: string;
    blogLink: string;
    status: string;
    // article published date
    date: Date;
    avatar: string;

    constructor(title: string, description: string, keywords: string[], codeLink: string, blogLink: string,
        status: string, date: Date, avatar: string) {
        this.title = title;
        this.description = description;
        this.keywords = keywords;
        this.codeLink =  codeLink;
        this.blogLink = blogLink;
        this.status = status;
        this.date = date;
        this.avatar = avatar;
    }

}
