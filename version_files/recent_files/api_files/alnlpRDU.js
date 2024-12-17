import {
  _ as p
} from "./CHqylraw.js";
import {
  _ as i
} from "./CQVsZIcG.js";
import {
  d as l,
  a as m,
  c as _,
  k as a,
  e as o,
  f,
  j as u,
  bp as h,
  F as e,
  m as H
} from "./Dq6b0IKe.js";
import {
  a as M
} from "./DvSiAemu.js";
import "./DxQXZVfI.js";
import "./D9DHcFey.js";
import "./Ba-Qjaes.js";
import "./L5NW8KQx.js";
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
        const n = p,
          s = i;
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
    ["__scopeId", "data-v-d7f8dd3c"]
  ]),
  E = l({
    inheritAttrs: !1,
    __name: "holders",
    setup(d) {
      const t = h(),
        r = e(() => t.jetton),
        n = e(() => t.jettonModalControls),
        s = e(() => t.jettonInformation),
        j = e(() => t.jettonHolders);
      return M("memepad-about-holders"), (P, I) => {
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
  E as
  default
};