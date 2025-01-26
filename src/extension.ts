import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "mail-title-encoder" is now active!');

	const disposable = vscode.commands.registerCommand('mail-title-encoder.command', () => {
		vscode.window.showInformationMessage('Hello World from Mail Title Encoder!');

		// Get the active text editor
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		

	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
