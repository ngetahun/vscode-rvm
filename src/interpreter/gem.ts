// wrapper for gem info
import {GemInformation} from './types';

export default class Gem {
   readonly gemInfo: GemInformation;

    constructor(
        gemName: String,
        authorName: String,
        gemDescription: String,
        gemVersion: String
    ) {
        this.gemInfo = {
            name: gemName,
            author: authorName,
            description: gemDescription,
            version: gemVersion
        } 
    }
}