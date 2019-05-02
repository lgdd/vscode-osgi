'use strict';

import * as vscode from 'vscode';

export function getBndOsgiHeaders(headerEnd: string) {
    return [
        // https://bnd.bndtools.org/chapters/800-headers.html
        new vscode.CompletionItem('Bnd-AddXmlToTest' + headerEnd),
        new vscode.CompletionItem('Bnd-LastModified' + headerEnd),
        new vscode.CompletionItem('Bundle-Blueprint' + headerEnd),
        new vscode.CompletionItem('Bundle-Contributors' + headerEnd),
        new vscode.CompletionItem('Bundle-Developers' + headerEnd),
        new vscode.CompletionItem('Conditional-Package' + headerEnd),
        new vscode.CompletionItem('Meta-Persistence' + headerEnd),
        new vscode.CompletionItem('Service-Component' + headerEnd),
        new vscode.CompletionItem('Test-Cases' + headerEnd),
        new vscode.CompletionItem('Tool' + headerEnd)
    ];
}