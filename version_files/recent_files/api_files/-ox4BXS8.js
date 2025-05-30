import {
  _
} from "./R1ztTULH.js";
import {
  _ as j
} from "./Czs281QP.js";
import {
  d as i,
  o as m,
  c as u,
  b as r,
  e as n,
  z as d,
  f,
  bp as l,
  j as s,
  a3 as h,
  ao as T,
  y as b
} from "./BMIPMNvl.js";
import {
  a as g
} from "./CnCIYbR1.js";
import "./DWY3MNqu.js";
import "./VO2HwTzh.js";
import "./DYqrf8bs.js";
import "./DQDvD5n6.js";
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
    ["__scopeId", "data-v-8711133b"]
  ]),
  y = i({
    inheritAttrs: !1,
    __name: "transactions",
    setup(c) {
      const t = l(),
        o = s(() => t.jetton),
        e = s(() => t.jettonInformation),
        a = s(() => t.jettonTransactions);
      return g("memepad-jetton-shortname-about-transactions"), h().initHandler(() => {
        T().push({
          name: "memepad-jetton-shortname-about",
          params: {
            shortname: o.value.shortname
          }
        })
      }, "memepad-jetton-shortname-about-transactions"), (B, v) => {
        const p = I;
        return m(), b(p, {
          jetton: n(o),
          "jetton-information": n(e),
          "jetton-transactions": n(a)
        }, null, 8, ["jetton", "jetton-information", "jetton-transactions"])
      }
    }
  });
export {
  y as
  default
};