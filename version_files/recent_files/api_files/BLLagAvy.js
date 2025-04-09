import {
  _
} from "./D0Ytt2ne.js";
import {
  _ as j
} from "./WJ8L2N1G.js";
import {
  d as i,
  o as m,
  c as u,
  b as r,
  e as n,
  C as d,
  f,
  bt as l,
  j as s,
  T as h,
  ab as T,
  M as b
} from "./IIG1dV1T.js";
import {
  a as g
} from "./C8aBG_Jq.js";
import "./R5ztIaYn.js";
import "./D8KNiUhw.js";
import "./Cmk0W-cB.js";
import "./De_O7LKe.js";
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
  x = i({
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
      }, "memepad-jetton-shortname-about-transactions"), (B, M) => {
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
  x as
  default
};