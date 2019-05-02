'use strict';

import * as vscode from 'vscode';
import { getStandardOsgiHeaders } from './headers/osgi';
import { getBndOsgiHeaders } from './headers/bnd';
import { getLiferayOsgiHeaders } from './headers/liferay';

export function activate(context: vscode.ExtensionContext) {

	let headersProvider = vscode.languages.registerCompletionItemProvider('OSGi', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			const headerEnd = ": ";

			const standardOsgiHeaders = getStandardOsgiHeaders(headerEnd);
			const bndOsgiHeaders = getBndOsgiHeaders(headerEnd);
			const liferayOsgiHeaders = getLiferayOsgiHeaders(headerEnd);

			const headers = standardOsgiHeaders.concat(bndOsgiHeaders).concat(liferayOsgiHeaders);

			return headers;
		}
	});

	context.subscriptions.push(headersProvider);
}