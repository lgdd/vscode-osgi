'use strict';

import * as vscode from 'vscode';
import { getStandardOsgiHeaders } from './completion/osgi';
import { getBndOsgiHeaders, getBndInstructionHeaders } from './completion/bnd';
import { getLiferayOsgiHeaders, getLiferayOsgiInstructions } from './completion/liferay';

export function activate(context: vscode.ExtensionContext) {

	let headersProvider = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'OSGi' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const standardOsgiHeaders = getStandardOsgiHeaders();
			const bndOsgiHeaders = getBndOsgiHeaders();
			const bndInstructionsHeaders = getBndInstructionHeaders();
			const liferayOsgiHeaders = getLiferayOsgiHeaders();
			const liferayOsgiInstructions = getLiferayOsgiInstructions();

			const headers = standardOsgiHeaders
				.concat(bndOsgiHeaders)
				.concat(bndInstructionsHeaders)
				.concat(liferayOsgiHeaders)
				.concat(liferayOsgiInstructions);

			return headers;
		}
	});

	context.subscriptions.push(headersProvider);
}
