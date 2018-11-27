// wrapper for gem info
interface IGem {
    readonly name: String;
    readonly author: String;
    readonly description: String;
    readonly version: String;
}

export default class Gem implements IGem {
    readonly name: String;
    readonly author: String;
    readonly description: String;
    readonly version: String;

    constructor(
        gemName: string,
        authorName: String,
        description: String,
        gemVersion: String
    ) {
        this.name = gemName;
        this.author = authorName;
        this.description = description;
        this.version = gemVersion;
    }
}