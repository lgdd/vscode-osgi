'use strict';

import * as vscode from 'vscode';

export function getBndOsgiHeaders() {
    return [
        // https://bnd.bndtools.org/chapters/800-headers.html
        new vscode.CompletionItem('Bnd-AddXmlToTest'),
        new vscode.CompletionItem('Bnd-LastModified'),
        new vscode.CompletionItem('Bundle-Blueprint'),
        new vscode.CompletionItem('Bundle-Contributors'),
        new vscode.CompletionItem('Bundle-Developers'),
        new vscode.CompletionItem('Conditional-Package'),
        new vscode.CompletionItem('Meta-Persistence'),
        new vscode.CompletionItem('Service-Component'),
        new vscode.CompletionItem('Test-Cases'),
        new vscode.CompletionItem('Tool')
    ];
}