'use strict';

import { generateCompletionItems } from './common';

// https://github.com/liferay/liferay-portal/blob/master/modules/util/source-formatter/documentation/bnd_schema_version.markdown
import headers from './data/liferay-headers.json'

import instructions from './data/liferay-instructions.json'

export function getLiferayOsgiHeaders() {
    return generateCompletionItems(headers);
}
