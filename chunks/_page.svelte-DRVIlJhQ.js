import { h as head, d as attr, f as stringify } from './index-CTxnVRhG.js';
import { b as base } from './paths-DAeZuJez.js';
import { I as ImgLink } from './ImgLink-Dr_KLKow.js';
import './client-ByRptFSs.js';
import './exports-sU0w1uve.js';

function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>My Animations</title>`;
  });
  $$payload.out += `<div class="container svelte-103npnm"><a${attr("href", `${stringify(base)}/`)}>HOME</a> <a${attr("href", `${stringify(base)}/art`)}>ART</a> <br> <div id="animation-gallery-link" class="gallery">`;
  ImgLink($$payload, {
    title: "GALLERY",
    link: "/gallery",
    size: "20vw",
    targetFontSize: "3.5vw"
  });
  $$payload.out += `<!----></div></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DRVIlJhQ.js.map
