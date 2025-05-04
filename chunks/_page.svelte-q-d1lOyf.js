import { h as head, m as ensure_array_like, d as attr, f as stringify } from './index-CTxnVRhG.js';
import { B as ButtonLink } from './ButtonLink-BaakQouf.js';
import './client-ByRptFSs.js';
import { b as base } from './paths-DAeZuJez.js';
import './exports-sU0w1uve.js';

function Game($$payload, $$props) {
  let {
    title = "game",
    source = "./placeholder.png",
    link = "https://ampisbad.itch.io/"
  } = $$props;
  $$payload.out += `<div class="svelte-q2jun9"><button class="svelte-q2jun9"><img${attr("src", `${stringify(base)}${stringify(source)}`)}${attr("alt", title)} style="width:20vh"></button></div>`;
}
function ScrollWheel($$payload) {
  let gamesArray = [];
  function addItem(game) {
    gamesArray = [...gamesArray, game];
  }
  for (let i = 0; i < 60; i++) {
    addItem(Game);
  }
  const each_array = ensure_array_like(gamesArray);
  $$payload.out += `<grid class="scrollable svelte-ed92nk"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    Game($$payload, {});
  }
  $$payload.out += `<!--]--></grid>`;
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Games Portfolio</title>`;
  });
  $$payload.out += `<div class="container svelte-103npnm">`;
  ScrollWheel($$payload);
  $$payload.out += `<!----> <div style="position:absolute; bottom:var(--footer-height); left:1vw;">`;
  ButtonLink($$payload, {
    title: "Itch.io",
    link: "https://ampisbad.itch.io",
    width: "44vw",
    height: "20vh",
    iconSize: "0",
    targetFontSize: "40vw",
    bg: "#0006"
  });
  $$payload.out += `<!----></div> <div style="position:absolute; bottom:var(--footer-height); right:1vw;">`;
  ButtonLink($$payload, {
    title: "Jam Games",
    link: "/games/jams",
    width: "44vw",
    height: "20vh",
    iconSize: "0",
    targetFontSize: "40vw",
    bg: "#0006"
  });
  $$payload.out += `<!----></div></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-q-d1lOyf.js.map
