// Wrapper for env variables
interface IEnvironmentManger {
    updateEnvHandler(): void;
    getByItemName(searchTag: String): String;
}

export default class EnvironmentManager implements IEnvironmentManger {
    private entries: Map<String, String>;
    constructor() {
        this.entries = new Map<String, String>();
        // read process environments

        for (const entry in process.env) {
            if (process.env.hasOwnProperty(entry)) {
                const element  = process.env[entry];
                this.entries.set(entry, element as String);
            }
        }
    }

    updateEnvHandler() {}

    /**
     * return the value of a string key
     * @param searchTag 
     * @return String
     */
    getByItemName(searchTag: String): String {
        if(searchTag === "") { 
            return '';
        }
        return this.entries.get(searchTag) as String;
    }
}

//TODO: add service adapter for handling environment