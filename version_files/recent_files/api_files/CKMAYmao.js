import {
  _ as i
} from "./9PC2uqXg.js";
import {
  _ as p
} from "./CgRu8RRt.js";
import {
  d as l,
  o as m,
  c as _,
  b as a,
  e as o,
  z as f,
  f as u,
  bc as h,
  j as e,
  G as H
} from "./DU-EduvJ.js";
import {
  a as M
} from "./D_q4HP5b.js";
import "./CkptFsS8.js";
import "./CkmrTVeP.js";
import "./yx392Pcm.js";
import "./BL_9Dy4z.js";
import "./DUu9sgvj.js";
import "./BPwI9ZP9.js";
const g = {
    class: "memepad-jetton-page-holders"
  },
  C = l({
    __name: "PageHolders",
    props: {
      jetton: {},
      jettonHolders: {},
      jettonModalControls: {},
      jettonInformation: {}
    },
    setup(d) {
      return (t, s) => {
        const n = i,
          r = p;
        return m(), _("div", g, [a(n, {
          title: ("t" in t ? t.t : o(f))("memepad.holders.title", {
            ticker: t.jetton.ticker
          }),
          jetton: t.jetton,
          "jetton-modal-controls": t.jettonModalControls
        }, null, 8, ["title", "jetton", "jetton-modal-controls"]), a(r, {
          jetton: t.jetton,
          "jetton-holders": t.jettonHolders,
          "jetton-information": t.jettonInformation,
          "jetton-modal-controls": t.jettonModalControls
        }, null, 8, ["jetton", "jetton-holders", "jetton-information", "jetton-modal-controls"])])
      }
    }
  }),
  P = u(C, [
    ["__scopeId", "data-v-1dfb1826"]
  ]),
  G = l({
    inheritAttrs: !1,
    __name: "holders",
    setup(d) {
      const t = h(),
        s = e(() => t.jetton),
        n = e(() => t.jettonModalControls),
        r = e(() => t.jettonInformation),
        j = e(() => t.jettonHolders);
      return M("memepad-about-holders"), (b, k) => {
        const c = P;
        return m(), H(c, {
          jetton: o(s),
          "jetton-holders": o(j),
          "jetton-modal-controls": o(n),
          "jetton-information": o(r)
        }, null, 8, ["jetton", "jetton-holders", "jetton-modal-controls", "jetton-information"])
      }
    }
  });
export {
  G as
  default
};