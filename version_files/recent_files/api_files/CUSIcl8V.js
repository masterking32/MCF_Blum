import {
  _
} from "./CEq_timf.js";
import {
  _ as c
} from "./D9L0pH-g.js";
import {
  d as m,
  o as p,
  c as l,
  b as r,
  e,
  C as j,
  f as u,
  bq as f,
  j as a,
  R as h,
  aa as H,
  M as g
} from "./BhDmcp0J.js";
import {
  a as b
} from "./DClvwgrl.js";
import "./CknyPLan.js";
import "./DKXENsc2.js";
import "./FlASshpV.js";
import "./CWVdJjrF.js";
import "./DUx2c9nr.js";
import "./D7gYk2DF.js";
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
    ["__scopeId", "data-v-588f4547"]
  ]),
  N = m({
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
      }, "memepad-jetton-shortname-about-holders"), (B, M) => {
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
  N as
  default
};