'use strict';

import * as vscode from 'vscode';
import { OSGI_HEADER_SUFFIX, generateCompletionItems } from './common';

// https://bnd.bndtools.org/chapters/800-headers.html
import headers from './data/bnd-headers.json';

// https://bnd.bndtools.org/chapters/825-instructions-ref.html
import instrutions from './data/bnd-instructions.json';

export function getBndOsgiHeaders() {
    return generateCompletionItems(headers);
}

export function getBndInstructionHeaders() {
    let completionInstructions = [];
    instrutions.forEach(instruction => {
        let completionInstruction = new vscode.CompletionItem(instruction.label);
        completionInstruction.insertText = new vscode.SnippetString(completionInstruction.label + OSGI_HEADER_SUFFIX + instruction.snippet);
        if (instruction.label === '-plugin') {
            completionInstruction.insertText = new vscode.SnippetString(instruction.label + '.$1' + OSGI_HEADER_SUFFIX + "$2")
        }
        completionInstruction.documentation = new vscode.MarkdownString(instruction.description);
        completionInstructions.push(completionInstruction);
    });
    return completionInstructions;
}