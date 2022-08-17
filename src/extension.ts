import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "tipitap" is now active!');
	
	let disposable = vscode.commands.registerCommand('tipitap.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from tipi-tap!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
