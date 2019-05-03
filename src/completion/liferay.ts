'use strict';

import * as vscode from 'vscode';

// https://github.com/liferay/liferay-portal/blob/master/modules/util/source-formatter/documentation/bnd_schema_version.markdown
import headers from './data/liferay-headers.json'
import { OSGI_HEADER_SUFFIX } from './common';

export function getLiferayOsgiHeaders() {
    let completionHeaders = [];
    headers.forEach(header => {
        let completionHeader = new vscode.CompletionItem(header.label);
        completionHeader.insertText = completionHeader.label + OSGI_HEADER_SUFFIX;
        completionHeaders.push(completionHeader);
    });
    return completionHeaders;
}