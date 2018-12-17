// Shared interface types
export type InterpreterInformation = {
    path?: String,
    displayName: String,
    interpreterManager: InterpreterManager
};

export enum InterpreterManager {
    RVM = 'rvm',
    RBENV='rbenv',
    SYSTEM='system',
    UNKNOWN='unknown'
}

export enum RubyInterpreterType {
    MRI = "Matz's Ruby Interpreter",
    JRuby = "JRuby",
    Rubinius = "Rubinius"
}

export type GemInformation = {
    readonly name: String;
    readonly author: String;
    readonly description: String;
    readonly version: FullVersionInformation;
};

// uses semantic versioning information
// for more information, please visit this https://semver.org/
export type VersionInformation = {
    majorNumber: number;
    minorNumber: number;
    patch: number;
};

export type FullVersionInformation = VersionInformation & {
    releaseIdentifier: any | String;
};

export type ConfiguratorType = {
    configuredInterpreterManager: InterpreterManager;
};

export interface IPlatformProvider {
    getPlatform(): String;
}

export interface IConfigurator {
    onConfigUpdate(): Promise<boolean>;
}
interface IBaseRuby {
    checkVersion(): boolean;
}

interface IBaseRubyManager {
    updateRubyPath(): boolean;
    listGems(): GemInformation[];
    findCurrent(): String;
}

export interface IRVMService extends IBaseRuby, IBaseRubyManager {
    rvmVersion: VersionInformation;
    rvmConfig: IConfigurator;
    currentRuby: InterpreterInformation;
}

export interface IRBENVService extends IBaseRuby, IBaseRubyManager{
    rbenvVersion: VersionInformation;
    rbenvConfig: IConfigurator;
    currentRuby: InterpreterInformation;

}
