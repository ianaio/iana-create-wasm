import "core-js/modules/es.promise.js";
import "core-js/modules/es.array.fill.js";
import "core-js/modules/es.math.imul.js";
import "core-js/modules/es.math.clz32.js";
import TextEncodingPolyfill from 'text-encoding';

if (typeof window['TextEncoder'] !== 'function') {
  window['TextEncoder'] = TextEncodingPolyfill.TextEncoder;
  window['TextDecoder'] = TextEncodingPolyfill.TextDecoder;
}

