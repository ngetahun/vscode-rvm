import { PathLike } from "fs";

// rvm specific gemset 
interface IGemSet {
    readonly name: String;
    readonly path: PathLike;
    gems(): String[]; // gems in the gemset
}

export default class GemSet implements IGemSet {
    readonly name: String;
    readonly path: PathLike;
    constructor(gemSetName:String, gemSetPath:PathLike) {
        this.name = gemSetName;
        this.path = gemSetPath;
    }

    gems(): String[] {
        // TODO: read gems from gemset and populate ds
        return new Array('');
    }
}