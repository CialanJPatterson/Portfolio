import { h as head, d as attr, e as escape_html, f as stringify } from './index-CTxnVRhG.js';
import { B as ButtonLink } from './ButtonLink-BaakQouf.js';
import { b as base } from './paths-DAeZuJez.js';
import './client-ByRptFSs.js';
import './exports-sU0w1uve.js';

function JamGame($$payload, $$props) {
  let {
    icon = "/placeholder.png",
    altText = "placeholder",
    title = "[SAMPLE] Game",
    link = "https://ampisbad.itch.io",
    jam = "[SAMPLE] game jam",
    paragraph = "This game was inspired by my love of [SAMPLE] hobbies"
  } = $$props;
  $$payload.out += `<div class="outer svelte-1puakn6"><img${attr("src", `${stringify(base)}${stringify(icon)}`)}${attr("alt", altText)} class="svelte-1puakn6"> <div class="inner svelte-1puakn6"><h3>${escape_html(title)}</h3> <a${attr("href", link)}>${escape_html(jam)}</a> <br> <p>${escape_html(paragraph)}</p></div></div>`;
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Game Jams Portfolio</title>`;
  });
  $$payload.out += `<div class="container svelte-103npnm"><div style="display:inline-flex; position:relative;">`;
  ButtonLink($$payload, {
    title: "BACK",
    link: "/games",
    width: "34vw",
    height: "15vh",
    iconSize: "0",
    targetFontSize: "40vw",
    bg: "#0006"
  });
  $$payload.out += `<!----> `;
  ButtonLink($$payload, {
    title: "Itch.io",
    link: "https://ampisbad.itch.io",
    width: "34vw",
    height: "15vh",
    iconSize: "0",
    targetFontSize: "40vw",
    bg: "#0006"
  });
  $$payload.out += `<!----></div> <div id="jam games" style="overflow:hidden scroll; max-height:calc(84vh - var(--footer-height));">`;
  JamGame($$payload, {});
  $$payload.out += `<!----> `;
  JamGame($$payload, {});
  $$payload.out += `<!----> `;
  JamGame($$payload, {});
  $$payload.out += `<!----> `;
  JamGame($$payload, {});
  $$payload.out += `<!----> `;
  JamGame($$payload, {});
  $$payload.out += `<!----> `;
  JamGame($$payload, {});
  $$payload.out += `<!----> `;
  JamGame($$payload, {});
  $$payload.out += `<!----></div></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DZsef3s7.js.map
