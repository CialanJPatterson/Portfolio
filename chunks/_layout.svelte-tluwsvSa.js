import { I as ImgLink } from './ImgLink-Dr_KLKow.js';
import './client-ByRptFSs.js';
import './index-CTxnVRhG.js';
import './exports-sU0w1uve.js';
import './paths-DAeZuJez.js';

function Footer($$payload) {
  $$payload.out += `<footer class="svelte-d7yta8"><div id="icons" class="svelte-d7yta8"><div class="svelte-d7yta8"><div id="info">`;
  ImgLink($$payload, {
    title: "",
    link: "/",
    size: "var(--footer-icon-width)",
    targetFontSize: "3.5vw"
  });
  $$payload.out += `<!----></div> <div id="home-link">`;
  ImgLink($$payload, {
    title: "",
    link: "/",
    size: "var(--footer-icon-width)",
    targetFontSize: "3.5vw"
  });
  $$payload.out += `<!----></div></div> <div class="svelte-d7yta8"><div id="contact">`;
  ImgLink($$payload, {
    title: "",
    link: "/",
    size: "var(--footer-icon-width)",
    targetFontSize: "3.5vw"
  });
  $$payload.out += `<!----></div> <div id="french">`;
  ImgLink($$payload, {
    title: "",
    link: "/",
    size: "var(--footer-icon-width)",
    targetFontSize: "3.5vw"
  });
  $$payload.out += `<!----></div></div></div></footer>`;
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-tluwsvSa.js.map
