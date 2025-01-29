import {
  _ as i
} from "./CktvL1Ul.js";
import {
  _ as p
} from "./D3NESGQ7.js";
import {
  d as l,
  o as m,
  c as _,
  b as a,
  e as o,
  z as f,
  f as u,
  bf as h,
  j as e,
  G as H
} from "./7B743EeA.js";
import {
  a as M
} from "./BWvbTMdX.js";
import "./BgWV-cNS.js";
import "./Cdr4DyLS.js";
import "./4T5qB8qb.js";
import "./XqRuWQxe.js";
import "./D210eCmV.js";
import "./BqlQh3w0.js";
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
    ["__scopeId", "data-v-6b37c7d3"]
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