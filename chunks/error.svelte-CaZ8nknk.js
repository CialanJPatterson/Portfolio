import { p as push, e as escape_html, c as pop, g as getContext } from './index-CTxnVRhG.js';
import { s as stores } from './client-ByRptFSs.js';
import './exports-sU0w1uve.js';

({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`;
  pop();
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-CaZ8nknk.js.map
