'use strict';

import * as vscode from 'vscode';
import { getStandardOsgiHeaders } from './completion/osgi';
import { getBndOsgiHeaders, getBndInstructionHeaders } from './completion/bnd';
import { getLiferayOsgiHeaders } from './completion/liferay';
import { getJavaHeaders } from './completion/java';

export function activate(context: vscode.ExtensionContext) {

	let headersProvider = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'OSGi' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const javaHeaders = getJavaHeaders();
			const standardOsgiHeaders = getStandardOsgiHeaders();
			const bndOsgiHeaders = getBndOsgiHeaders();
			const bndInstructionsHeaders = getBndInstructionHeaders();
			const liferayOsgiHeaders = getLiferayOsgiHeaders();

			const headers = javaHeaders
				.concat(standardOsgiHeaders)
				.concat(bndOsgiHeaders)
				.concat(bndInstructionsHeaders)
				.concat(liferayOsgiHeaders);

			return headers;
		}
	});

	context.subscriptions.push(headersProvider);
}