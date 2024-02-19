export abstract class UrlUtils{
    static isUrl(link: string): boolean{
        const httpRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        return httpRegex.test(link);
    }
}