import {
  _
} from "./D5GEP0bX.js";
import {
  _ as j
} from "./CC0IQFJG.js";
import {
  d as i,
  o as m,
  c as u,
  b as r,
  e as n,
  z as f,
  f as d,
  bf as l,
  j as s,
  O as h,
  ac as T,
  G as g
} from "./D7slzxTT.js";
import {
  a as b
} from "./BeHbLYQW.js";
import "./DAt144yo.js";
import "./Cytqosqi.js";
import "./4o0MQ0r2.js";
import "./Bv2Es5Cu.js";
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
          title: ("t" in t ? t.t : n(f))("memepad.transactions.title", {
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
  I = d(P, [
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
        T().push({
          name: "memepad-jetton-shortname-about",
          params: {
            shortname: o.value.shortname
          }
        })
      }, "memepad-jetton-shortname-about-transactions"), (B, v) => {
        const p = I;
        return m(), g(p, {
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