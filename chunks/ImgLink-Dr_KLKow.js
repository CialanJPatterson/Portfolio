import { p as push, i as attr_style, d as attr, f as stringify, e as escape_html, j as bind_props, c as pop } from './index-CTxnVRhG.js';
import { y as fallback } from './exports-sU0w1uve.js';
import { b as base } from './paths-DAeZuJez.js';

/* empty css                                          */
function ImgLink($$payload, $$props) {
  push();
  let title = fallback($$props["title"], "");
  let link = fallback($$props["link"], "/error");
  let size = fallback($$props["size"], "30vw");
  let icon = fallback($$props["icon"], "/favicon.png");
  let bg = fallback($$props["bg"], "indigo");
  let targetFontSize = fallback($$props["targetFontSize"], "1vw");
  let fontSize = fallback($$props["fontSize"], targetFontSize);
  let hasTitle = fallback($$props["hasTitle"], true);
  let visible = "hidden";
  $$payload.out += `<div class="super svelte-qbblvy"${attr_style(`width:${stringify(size)}; height:${stringify(size)}; visibility:${stringify(visible)}`)}><a${attr("href", `${stringify(base)}${stringify(link)}`)}><div class="container svelte-qbblvy"${attr_style(`background-color:${stringify(bg)}; width:${stringify(size)}; height:${stringify(size)}; font-size:${stringify(fontSize)};`)}><div class="textbox-wrapper svelte-qbblvy"${attr_style(`width:${stringify(size)}; height:${stringify(size)}`)}>`;
  if (hasTitle) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="textbox svelte-qbblvy"><h2 class="svelte-qbblvy">${escape_html(title)}</h2></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <img${attr("src", `${stringify(base)}${stringify(icon)}`)}${attr("alt", title)} class="svelte-qbblvy"></div></div></a></div>`;
  bind_props($$props, {
    title,
    link,
    size,
    icon,
    bg,
    targetFontSize,
    fontSize,
    hasTitle
  });
  pop();
}

export { ImgLink as I };
//# sourceMappingURL=ImgLink-Dr_KLKow.js.map
