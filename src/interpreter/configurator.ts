import * as process from 'process';
import * as os from 'os';

interface IConfigurator {
    findRVM(): boolean;
    findCurrent(): String;
    listGems(): String[];
    updateConfig(): any;
    checkRVMVersion(): boolean;
    //readonly MinimumRVMSupported: String; // for now, this will be left empty
    rubyInterpreterVersion: String;
}
/**
 * A configuration singleton to handle interpreter version
 * @author Natnael Getahun <connect@ngetahun.me>
 */
export default class Configurator implements IConfigurator {
    private mInstance: number = 0;
    private constructor() {
        //readonly isFirstTimeSettingExt: boolean = true;
        
    }
    findRVM(): boolean {
        const targetMachine:String = os.type();
        if(targetMachine.includes('Darwin')) { // OSX
            //let execd = process.execArgv('rvm current');

        }
        else if (targetMachine.includes('Linux')) { // Linux

        }
        else { // windows

        }
        return false;
    }

    findCurrent(): String {
        return '';
    }

    listGems(): String[] {
        return new Array("");
    }

    updateConfig(): any {
        return;
    }

    checkRVMVersion(): boolean {
        return false;
    }

    /**
     * getConfigurator
     * @param 
     * @return Configurator 
     */
    public getConfigurator(): Configurator {
        if (this.mInstance === 0) {
            return new Configurator();
        }
        return this;
    }
}