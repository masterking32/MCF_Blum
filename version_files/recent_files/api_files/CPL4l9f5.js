import {
  _ as l
} from "./Bi48-Vni.js";
import {
  _
} from "./GVeB8z8m.js";
import {
  d as m,
  o as p,
  c,
  b as r,
  e,
  C as j,
  f as u,
  bl as f,
  j as a,
  U as h,
  ai as H,
  N as g
} from "./DkS1dxhG.js";
import {
  a as b
} from "./VUiab0ga.js";
import "./ob_i52GE.js";
import "./D1KV1VFf.js";
import "./BbWg3hlB.js";
import "./BrWZxbUz.js";
import "./Banrn9nF.js";
import "./ZQHh3JEZ.js";
const k = {
    class: "memepad-jetton-page-holders"
  },
  P = m({
    __name: "PageHolders",
    props: {
      jetton: {},
      jettonHolders: {},
      jettonInformation: {}
    },
    setup(i) {
      return (t, o) => {
        const n = l,
          s = _;
        return p(), c("div", k, [r(n, {
          title: ("t" in t ? t.t : e(j))("memepad.holders.title", {
            ticker: t.jetton.ticker
          }),
          jetton: t.jetton
        }, null, 8, ["title", "jetton"]), r(s, {
          jetton: t.jetton,
          "jetton-holders": t.jettonHolders,
          "jetton-information": t.jettonInformation
        }, null, 8, ["jetton", "jetton-holders", "jetton-information"])])
      }
    }
  }),
  I = u(P, [
    ["__scopeId", "data-v-f846198d"]
  ]),
  R = m({
    inheritAttrs: !1,
    __name: "holders",
    setup(i) {
      const t = f(),
        o = a(() => t.jetton),
        n = a(() => t.jettonInformation),
        s = a(() => t.jettonHolders);
      return b("memepad-jetton-shortname-about-holders"), h().initHandler(() => {
        H().push({
          name: "memepad-jetton-shortname-about",
          params: {
            shortname: o.value.shortname
          }
        })
      }, "memepad-jetton-shortname-about-holders"), (B, v) => {
        const d = I;
        return p(), g(d, {
          jetton: e(o),
          "jetton-holders": e(s),
          "jetton-information": e(n)
        }, null, 8, ["jetton", "jetton-holders", "jetton-information"])
      }
    }
  });
export {
  R as
  default
};