'use strict';

import * as vscode from 'vscode';
import { getStandardOsgiHeaders } from './headers/osgi';
import { getBndOsgiHeaders } from './headers/bnd';
import { getLiferayOsgiHeaders } from './headers/liferay';

export function activate(context: vscode.ExtensionContext) {

	let headersProvider = vscode.languages.registerCompletionItemProvider('OSGi', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			const headerEnd = ": ";

			const standardOsgiHeaders = getStandardOsgiHeaders();
			const bndOsgiHeaders = getBndOsgiHeaders();
			const liferayOsgiHeaders = getLiferayOsgiHeaders();

			const headers = standardOsgiHeaders.concat(bndOsgiHeaders).concat(liferayOsgiHeaders);

			headers.forEach(header => {
				header.insertText = header.label + headerEnd;
			});

			return headers;
		}
	});

	context.subscriptions.push(headersProvider);
}