import {
  _ as i
} from "./D1OT0X_a.js";
import {
  _ as p
} from "./fWJAzBNz.js";
import {
  d as l,
  o as m,
  c as _,
  b as a,
  e as o,
  z as f,
  f as u,
  bk as h,
  j as e,
  J as H
} from "./DQp58DI6.js";
import {
  a as M
} from "./V1VfxJDJ.js";
import "./DLmetDT1.js";
import "./B-7HzDkL.js";
import "./BhxDVukc.js";
import "./DoBLsLhF.js";
import "./DT401b_N.js";
const g = {
    class: "memepad-jetton-page-holders"
  },
  k = l({
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
  C = u(k, [
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
      return M("memepad-about-holders"), (P, b) => {
        const c = C;
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