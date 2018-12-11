//import * as process from 'process';
import {IConfigurator, InterpreterManager, ConfiguratorType} from './types';

/**
 * A configuration singleton to handle interpreter version
 * @author Natnael Getahun <connect@ngetahun.me>
 */
export default class Configurator implements IConfigurator {
    private static mInstance: Configurator;
    // private rubyInterpreterVersion: String;

    private isFirstTimeSettingExt = true; 
    private configObject: ConfiguratorType;

    private constructor() {
        this.isFirstTimeSettingExt = true;

        // initialize it to use system installed ruby
        this.configObject = {
            configuredInterpreterManager: InterpreterManager.SYSTEM
        };
    }

    // private getTargetMachine(): String {
    //     let target = os.type();
    //     if(['Darwin', 'Linux', 'Windows_NT'].indexOf(target) === -1) {
    //         return 'Unknown target';
    //     }

    //     return target;
    // }
    // async findRVM(): Promise<boolean> {
    //     const targetMachine:String = this.getTargetMachine();
    //     if(targetMachine.includes('Darwin')) { // OSX
    //         let execd = await spawn('rvm', ['current'], {shell: true});

    //     }
    //     else if (targetMachine.includes('Linux')) { // Linux

    //     }
    //     else { // windows

    //     }
    //     return false;
    // }

    /**
     * @returns boolean execution status
     */
    async onConfigUpdate(): Promise<boolean> {
        return  false;
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