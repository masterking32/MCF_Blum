import {
  _
} from "./Bcl0fQzb.js";
import {
  _ as j
} from "./NVjkgg79.js";
import {
  d as i,
  o as m,
  c as u,
  b as r,
  e as n,
  z as d,
  f,
  bg as l,
  j as s,
  O as h,
  ac as g,
  G as T
} from "./BHZlrYgM.js";
import {
  a as b
} from "./BEFhevWq.js";
import "./CVfew8Rr.js";
import "./BDc5E56E.js";
import "./Dj4Tt8py.js";
import "./wIBA-zAR.js";
const k = {
    class: "memepad-jetton-page-transactions"
  },
  P = i({
    __name: "PageTransactions",
    props: {
      jetton: {},
      jettonInformation: {},
      jettonTransactions: {}
    },
    setup(c) {
      return (t, o) => {
        const e = _,
          a = j;
        return m(), u("div", k, [r(e, {
          title: ("t" in t ? t.t : n(d))("memepad.transactions.title", {
            ticker: t.jetton.ticker
          }),
          jetton: t.jetton
        }, null, 8, ["title", "jetton"]), r(a, {
          transactions: t.jettonTransactions,
          "jetton-information": t.jettonInformation
        }, null, 8, ["transactions", "jetton-information"])])
      }
    }
  }),
  I = f(P, [
    ["__scopeId", "data-v-fa41d2fd"]
  ]),
  x = i({
    inheritAttrs: !1,
    __name: "transactions",
    setup(c) {
      const t = l(),
        o = s(() => t.jetton),
        e = s(() => t.jettonInformation),
        a = s(() => t.jettonTransactions);
      return b("memepad-jetton-shortname-about-transactions"), h().initHandler(() => {
        g().push({
          name: "memepad-jetton-shortname-about",
          params: {
            shortname: o.value.shortname
          }
        })
      }, "memepad-jetton-shortname-about-transactions"), (B, v) => {
        const p = I;
        return m(), T(p, {
          jetton: n(o),
          "jetton-information": n(e),
          "jetton-transactions": n(a)
        }, null, 8, ["jetton", "jetton-information", "jetton-transactions"])
      }
    }
  });
export {
  x as
  default
};