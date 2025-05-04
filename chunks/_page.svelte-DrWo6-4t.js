import { h as head, p as push, k as copy_payload, l as assign_payload, j as bind_props, c as pop, m as ensure_array_like, i as attr_style, f as stringify, d as attr } from './index-CTxnVRhG.js';
import './client-ByRptFSs.js';
import { y as fallback } from './exports-sU0w1uve.js';
import { b as base } from './paths-DAeZuJez.js';

function ArtPiece($$payload, $$props) {
  push();
  let {
    index = void 0,
    title = "art work",
    source = "./placeholder.png",
    initial_size = "25%",
    size = "25%",
    poppedout = void 0,
    open = void 0,
    close = void 0,
    popout
  } = $$props;
  poppedout = false;
  open = function() {
    size = "100%";
    poppedout = true;
  };
  close = function() {
    poppedout = false;
    size = initial_size;
  };
  if (poppedout == true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="pop svelte-1pbwfac"><button tabindex="-1" class="svelte-1pbwfac"><img${attr("src", `${stringify(base)}${stringify(source)}`)} style="width:100%;"${attr("alt", title)}></button> <button tabindex="0" class="svelte-1pbwfac"><h1 class="svelte-1pbwfac">X</h1></button> <div class="background svelte-1pbwfac"></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="unpop svelte-1pbwfac"><button class="svelte-1pbwfac"><img${attr("src", `${stringify(base)}${stringify(source)}`)} style="width:100%;"${attr("alt", title)}></button> <div class="background svelte-1pbwfac"></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { index, poppedout, open, close });
  pop();
}
class MediaQuery {
  current;
  /**
   * @param {string} query
   * @param {boolean} [matches]
   */
  constructor(query, matches = false) {
    this.current = matches;
  }
}
function Carousel($$payload, $$props) {
  push();
  const desktop = new MediaQuery("min-width:769px");
  let scrollDiv = fallback($$props["scrollDiv"], "90%");
  let artArray = [{ index: 0 }];
  function addItem() {
    const n = artArray.length;
    artArray = [
      ...artArray,
      {
        index: n,
        popped: false,
        open() {
        },
        close() {
        }
      }
    ];
  }
  function closeAll(index) {
    for (let i = 0; i < artArray.length; i++) {
      if (index == i) {
        if (artArray[i].popped == false) {
          artArray[i].open();
          scrollDiv = "50%";
        } else {
          artArray[i].close();
          scrollDiv = "90%";
        }
      } else {
        artArray[i].close();
      }
    }
  }
  for (let i = 0; i < 24; i++) {
    addItem();
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(artArray);
    $$payload2.out += `<grid class="scrollable svelte-9o49q"${attr_style(`width:${stringify(desktop.current ? scrollDiv : "90%")};grid-template-columns:${stringify(desktop.current && scrollDiv == "90%" ? "repeat(5, auto)" : "repeat(3, auto)")}`)}><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let artPiece = each_array[$$index];
      ArtPiece($$payload2, {
        popout: (i) => closeAll(i),
        get index() {
          return artPiece.index;
        },
        set index($$value) {
          artPiece.index = $$value;
          $$settled = false;
        },
        get poppedout() {
          return artPiece.popped;
        },
        set poppedout($$value) {
          artPiece.popped = $$value;
          $$settled = false;
        },
        get open() {
          return artPiece.open;
        },
        set open($$value) {
          artPiece.open = $$value;
          $$settled = false;
        },
        get close() {
          return artPiece.close;
        },
        set close($$value) {
          artPiece.close = $$value;
          $$settled = false;
        }
      });
    }
    $$payload2.out += `<!--]--></grid>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { scrollDiv });
  pop();
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Gallery</title>`;
  });
  $$payload.out += `<div class="container svelte-103npnm"><div id="gallery-carousel">`;
  Carousel($$payload, {});
  $$payload.out += `<!----></div></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DrWo6-4t.js.map
