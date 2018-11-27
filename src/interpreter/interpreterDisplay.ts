import {
    StatusBarAlignment,
    window,
    ConfigurationChangeEvent,
    StatusBarItem
    } from 'vscode';
import Configurator from './configurator';

interface IInterpreterDisplay {
    onConfigurationChange(): void;
}
export default class InterpreterDisplay implements IInterpreterDisplay{
    private statusBar: StatusBarItem;
    private configurator:Configurator;
    constructor() {
        this.statusBar = window.createStatusBarItem(StatusBarAlignment.Left, 200);
        this.configurator = Configurator.getConfigurator();
    }

    onConfigurationChange(): void {

    }

}