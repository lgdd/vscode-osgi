import * as vscode from 'vscode';

export const OSGI_HEADER_SUFFIX = ": ";

export function generateCompletionItems(headers: {"label":string, "snippet": string, "description": string}[]) {
    let completionHeaders = [];
    headers.forEach(header => {
        let completionHeader = new vscode.CompletionItem(header.label);
        completionHeader.insertText = new vscode.SnippetString(completionHeader.label + OSGI_HEADER_SUFFIX + header.snippet)
        completionHeader.documentation = new vscode.MarkdownString(header.description);
        completionHeaders.push(completionHeader);
    });
    return completionHeaders;
}