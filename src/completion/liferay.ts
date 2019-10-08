'use strict';

import { OSGI_HEADER_SUFFIX, generateCompletionItems } from './common';

// https://github.com/liferay/liferay-portal/blob/master/modules/util/source-formatter/documentation/bnd_schema_version.markdown
import headers from './data/liferay-headers.json'

import instructions from './data/liferay-instructions.json'

export function getLiferayOsgiHeaders() {
    return generateCompletionItems(headers);
}

export function getLiferayOsgiInstructions() {
    let completionInstructions = [];
    instrutions.forEach(instruction => {
        let completionInstruction = new vscode.CompletionItem(instruction.label);
        completionInstruction.insertText = new vscode.SnippetString(completionInstruction.label + OSGI_HEADER_SUFFIX + instruction.snippet); 
        completionInstruction.documentation = new vscode.MarkdownString(instruction.description);
        completionInstructions.push(completionInstruction);
    });
    return completionInstructions;
}
