'use strict';

import * as vscode from 'vscode';

export function getLiferayOsgiHeaders(headerEnd: string) {
    return [
        // https://github.com/liferay/liferay-portal/blob/master/modules/util/source-formatter/documentation/bnd_schema_version.markdown
        new vscode.CompletionItem('Liferay-Service' + headerEnd),
        new vscode.CompletionItem('Liferay-Require-SchemaVersion' + headerEnd)
    ];
}