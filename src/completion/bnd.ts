'use strict';

import * as vscode from 'vscode';

// https://bnd.bndtools.org/chapters/800-headers.html
import headers from './data/bnd-headers.json';

// https://bnd.bndtools.org/chapters/825-instructions-ref.html
import instrutions from './data/bnd-instructions.json';
import { OSGI_HEADER_SUFFIX } from './common';

export function getBndOsgiHeaders() {
    let completionHeaders = [];
    headers.forEach(header => {
        let completionHeader = new vscode.CompletionItem(header.label);
        completionHeader.insertText = completionHeader.label + OSGI_HEADER_SUFFIX;
        completionHeaders.push(completionHeader);
    });
    return completionHeaders;
}

export function getBndInstructionHeaders() {
    let completionInstructions = [];
    instrutions.forEach(instruction => {
        let completionInstruction = new vscode.CompletionItem(instruction.label);
        if (instruction.label === '-plugin') {
            completionInstruction.insertText = new vscode.SnippetString(instruction.label + '.$1' + OSGI_HEADER_SUFFIX)
        }
        completionInstructions.push(completionInstruction);
    });
    return completionInstructions;
}