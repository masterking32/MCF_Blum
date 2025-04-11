import {
  _
} from "./CouS5F7x.js";
import {
  _ as c
} from "./B3prMX8f.js";
import {
  d as m,
  o as p,
  c as l,
  b as r,
  e,
  C as j,
  f as u,
  bt as f,
  j as a,
  T as h,
  ab as H,
  M as b
} from "./C6ycOBuK.js";
import {
  a as g
} from "./Br_Joraq.js";
import "./B9KSr5Ca.js";
import "./CX4xpWp4.js";
import "./Ct4OHP0e.js";
import "./lYovtXhb.js";
import "./DkML9xM_.js";
import "./DphtAbBv.js";
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
        const n = _,
          s = c;
        return p(), l("div", k, [r(n, {
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
  O = m({
    inheritAttrs: !1,
    __name: "holders",
    setup(i) {
      const t = f(),
        o = a(() => t.jetton),
        n = a(() => t.jettonInformation),
        s = a(() => t.jettonHolders);
      return g("memepad-jetton-shortname-about-holders"), h().initHandler(() => {
        H().push({
          name: "memepad-jetton-shortname-about",
          params: {
            shortname: o.value.shortname
          }
        })
      }, "memepad-jetton-shortname-about-holders"), (B, M) => {
        const d = I;
        return p(), b(d, {
          jetton: e(o),
          "jetton-holders": e(s),
          "jetton-information": e(n)
        }, null, 8, ["jetton", "jetton-holders", "jetton-information"])
      }
    }
  });
export {
  O as
  default
};