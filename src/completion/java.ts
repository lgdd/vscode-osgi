'use strict';

import { generateCompletionItems } from './common';

// https://docs.oracle.com/javase/tutorial/deployment/jar/manifestindex.html
import headers from './data/java-headers.json';

export function getJavaHeaders() {
    return generateCompletionItems(headers);
}
