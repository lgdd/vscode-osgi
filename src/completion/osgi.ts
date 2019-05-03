'use strict';

import { generateCompletionItems } from './common';

// https://github.com/JetBrains/intellij-community/blob/master/java/manifest/src/org/jetbrains/lang/manifest/header/impl/StandardManifestHeaderParsers.java
// https://www.osgi.org/bundle-headers-reference/
import headers from './data/osgi-headers.json';

export function getStandardOsgiHeaders() {
    return generateCompletionItems(headers);
}
