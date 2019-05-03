'use strict';

import * as vscode from 'vscode';

// https://github.com/JetBrains/intellij-community/blob/master/java/manifest/src/org/jetbrains/lang/manifest/header/impl/StandardManifestHeaderParsers.java
// https://www.osgi.org/bundle-headers-reference/
import headers from './data/osgi-headers.json';
import { OSGI_HEADER_SUFFIX } from './common';

export function getStandardOsgiHeaders() {
    let completionHeaders = [];
    headers.forEach(header => {
        let completionHeader = new vscode.CompletionItem(header.label);
        completionHeader.insertText = completionHeader.label + OSGI_HEADER_SUFFIX;
        completionHeaders.push(completionHeader);
    });
    return completionHeaders;
}
