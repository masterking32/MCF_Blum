import {
  _ as i
} from "./CZEEu7EC.js";
import {
  _ as p
} from "./CtASV-Wh.js";
import {
  d as l,
  o as m,
  c as _,
  b as a,
  e as o,
  z as f,
  f as u,
  be as h,
  j as e,
  G as H
} from "./DRqvt5pl.js";
import {
  a as M
} from "./DXiFq9Dp.js";
import "./CxOjNc99.js";
import "./2vZNcphP.js";
import "./jN6T2iq4.js";
import "./D-zgr2JH.js";
import "./CnQGtdgR.js";
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
      return (t, r) => {
        const n = i,
          s = p;
        return m(), _("div", g, [a(n, {
          title: ("t" in t ? t.t : o(f))("memepad.holders.title", {
            ticker: t.jetton.ticker
          }),
          jetton: t.jetton,
          "jetton-modal-controls": t.jettonModalControls
        }, null, 8, ["title", "jetton", "jetton-modal-controls"]), a(s, {
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
  F = l({
    inheritAttrs: !1,
    __name: "holders",
    setup(d) {
      const t = h(),
        r = e(() => t.jetton),
        n = e(() => t.jettonModalControls),
        s = e(() => t.jettonInformation),
        j = e(() => t.jettonHolders);
      return M("memepad-about-holders"), (b, k) => {
        const c = P;
        return m(), H(c, {
          jetton: o(r),
          "jetton-holders": o(j),
          "jetton-modal-controls": o(n),
          "jetton-information": o(s)
        }, null, 8, ["jetton", "jetton-holders", "jetton-modal-controls", "jetton-information"])
      }
    }
  });
export {
  F as
  default
};