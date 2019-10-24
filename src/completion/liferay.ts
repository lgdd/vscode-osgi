'use strict';

import { OSGI_HEADER_SUFFIX, generateCompletionItems } from './common';

// https://github.com/liferay/liferay-portal/blob/master/modules/util/source-formatter/documentation/bnd_schema_version.markdown
import headers from './data/liferay-headers.json'

// https://github.com/liferay/liferay-portal/tree/master/modules/sdk/ant-bnd/src/main/java/com/liferay/ant/bnd
import instructions from './data/liferay-instructions.json'

export function getLiferayOsgiHeaders() {
    return generateCompletionItems(headers);
}

export function getLiferayOsgiInstructions() {
    return generateCompletionItems(instructions);
}
