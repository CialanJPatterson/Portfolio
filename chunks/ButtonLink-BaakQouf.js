import { p as push, i as attr_style, e as escape_html, d as attr, f as stringify, j as bind_props, c as pop } from './index-CTxnVRhG.js';
import { b as base } from './paths-DAeZuJez.js';
import './client-ByRptFSs.js';
import { y as fallback } from './exports-sU0w1uve.js';

/* empty css                                          */
function ButtonLink($$payload, $$props) {
  push();
  let title = fallback($$props["title"], "");
  let link = fallback($$props["link"], "/error");
  let width = fallback($$props["width"], "30vw");
  let height = fallback($$props["height"], "30vh");
  let icon = fallback($$props["icon"], "/favicon.png");
  let iconSize = fallback($$props["iconSize"], "10vw");
  let bg = fallback($$props["bg"], "indigo");
  let targetFontSize = fallback($$props["targetFontSize"], "1vw");
  let fontSize = fallback($$props["fontSize"], targetFontSize);
  let hasTitle = fallback($$props["hasTitle"], true);
  let textColour = fallback($$props["textColour"], "var(--white-text)");
  let visible = "hidden";
  $$payload.out += `<div class="super svelte-rmx5fv"${attr_style(`width:${stringify(width)}; height:${stringify(height)}; visibility:${stringify(visible)}`)}><button class="container svelte-rmx5fv"${attr_style(`background-color:${stringify(bg)}; width:${stringify(width)}; height:${stringify(height)}; font-size:${stringify(fontSize)};`)}><div${attr_style(`width:${stringify(parseInt(width) - parseInt(iconSize) + "vw")};`)} class="svelte-rmx5fv"><h2${attr_style(`color:${stringify(textColour)}`)} class="svelte-rmx5fv">${escape_html(title)}</h2></div> <img${attr("src", `${stringify(base)}${stringify(icon)}`)}${attr("alt", title)}${attr_style(`width:${stringify(iconSize)};`)} class="svelte-rmx5fv"></button></div>`;
  bind_props($$props, {
    title,
    link,
    width,
    height,
    icon,
    iconSize,
    bg,
    targetFontSize,
    fontSize,
    hasTitle,
    textColour
  });
  pop();
}

export { ButtonLink as B };
//# sourceMappingURL=ButtonLink-BaakQouf.js.map
