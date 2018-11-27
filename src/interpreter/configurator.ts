//import * as process from 'process';
import * as os from 'os';
import {spawn, exec} from 'child_process';

interface IConfigurator {
    findRVM(): Promise<boolean>;
    findCurrent(): String;
    listGems(): String[];
    updateConfig(): boolean;
    checkRVMVersion(): boolean;
    //readonly MinimumRVMSupported: String; // for now, this will be left empty
}
/**
 * A configuration singleton to handle interpreter version
 * @author Natnael Getahun <connect@ngetahun.me>
 */
export default class Configurator implements IConfigurator {
    private static mInstance: Configurator;
    private rubyInterpreterVersion: String;
    private isFirstTimeSettingExt = true;

    private constructor() {
        this.isFirstTimeSettingExt = true;
        this.rubyInterpreterVersion = this.findCurrent();
        this.isFirstTimeSettingExt = false;
    }

    private getTargetMachine(): String {
        let target = os.type();
        if(['Darwin', 'Linux', 'Windows_NT'].indexOf(target) === -1) {
            return 'Unknown target';
        }

        return target;
    }
    async findRVM(): Promise<boolean> {
        const targetMachine:String = this.getTargetMachine();
        if(targetMachine.includes('Darwin')) { // OSX
            let execd = await spawn('rvm', ['current'], {shell: true});

        }
        else if (targetMachine.includes('Linux')) { // Linux

        }
        else { // windows

        }
        return false;
    }

    /**
     * Return the current ruby version
     * @param
     * @return String
     */
    findCurrent(): String {
        let cmd = 'rvm current';
        spawn(cmd)
        return '';
    }

    /**
     * List the gems for the current ruby 
     * @param
     * @return String[]
     */
    listGems(): String[] {
        return new Array("");
    }

    /**
     * Update hook to sync the Configurator
     * return a boolean signifying success
     * @param
     * @return boolean
     */
    updateConfig(): boolean {
        return false;
    }

    /**
     * A check to see if the user has the desired 
     * rvm version
     * @param
     * @return boolean
     */
    checkRVMVersion(): boolean {
        return false;
    }

    /**
     * getConfigurator
     * @param 
     * @return Configurator 
     */
    public static getConfigurator(): Configurator {
        if (!Configurator.mInstance) {
            Configurator.mInstance = new Configurator();
        }
        return Configurator.mInstance;
    }
}