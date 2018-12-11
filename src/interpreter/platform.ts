import { IPlatformProvider } from "./types";
import * as os from 'os';

export class PlatformAdapter implements IPlatformProvider {
    constructor(){}

    getPlatform(): String {
        return "";
    }

    private getTargetMachine(): String {
        let target = os.type();
        if(['Darwin', 'Linux', 'Windows_NT'].indexOf(target) === -1) {
            return 'Unknown target';
        }
        return target;
    }
}