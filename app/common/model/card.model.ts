export class Card {

    headerType: string;
    headerContent: string;
    avatarType: string;
    avatarContent: string;
    bodyTitle: string;
    bodyDescription: string[];
    frontBtnLabel: string;
    frontBtnIcon: string;
    actionBtnLabel: string;
    actionBtnLink: string;
    actionBtn1Label: string;
    actionBtn1Link: string;
    backBtnLabel: string;
    backBtnIcon: string;
    height: number;
    width: number;

    constructor(headerType: string, headerContent: string, avatarType: string, avatarContent: string, bodyTitle: string,
    bodyDescription: string[], frontBtnLabel: string, frontBtnIcon: string, actionBtnLabel: string, actionBtnLink: string,
    actionBtn1Label: string, actionBtn1Link: string, backBtnLabel: string, backBtnIcon: string, height: number, width: number) {
        this.headerType = headerType;
        this.headerContent = headerContent;
        this.avatarType = avatarType;
        this.avatarContent = avatarContent;
        this.bodyTitle = bodyTitle;
        this.bodyDescription = bodyDescription;
        this.frontBtnLabel = frontBtnLabel;
        this.frontBtnIcon = frontBtnIcon;
        this.actionBtnLabel = actionBtnLabel;
        this.actionBtnLink = actionBtnLink;
        this.actionBtn1Label = actionBtn1Label;
        this.actionBtn1Link = actionBtn1Link;
        this.backBtnLabel = backBtnLabel;
        this.backBtnIcon = backBtnIcon;
        this.height = height;
        this.width = width;
    }
}
