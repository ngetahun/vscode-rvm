import {window, StatusBarAlignment} from 'vscode';

export default class InterpreterDisplay {
    constructor() {
        this.statusBar = window.createStatusBarItem(StatusBarAlignment.Left, 150);
        
    }
}