import {
  _ as p
} from "./DMSS2068.js";
import {
  _ as l
} from "./BCi7qlXr.js";
import {
  d as c,
  o as m,
  c as d,
  b as r,
  e as o,
  z as j,
  f as u,
  bk as f,
  j as a,
  J as T
} from "./B4CS4-WO.js";
import {
  a as g
} from "./DCEeGfpz.js";
import "./B4tAZcY1.js";
import "./CzlKqpQR.js";
const M = {
    class: "memepad-jetton-page-transactions"
  },
  k = c({
    __name: "PageTransactions",
    props: {
      jetton: {},
      jettonTransactions: {},
      jettonModalControls: {}
    },
    setup(_) {
      return (t, s) => {
        const n = p,
          e = l;
        return m(), d("div", M, [r(n, {
          title: ("t" in t ? t.t : o(j))("memepad.transactions.title", {
            ticker: t.jetton.ticker
          }),
          jetton: t.jetton,
          "jetton-modal-controls": t.jettonModalControls
        }, null, 8, ["title", "jetton", "jetton-modal-controls"]), r(e, {
          transactions: t.jettonTransactions
        }, null, 8, ["transactions"])])
      }
    }
  }),
  P = u(k, [
    ["__scopeId", "data-v-65afc0b1"]
  ]),
  x = c({
    __name: "transactions",
    setup(_) {
      const t = f(),
        s = a(() => t.jetton),
        n = a(() => t.jettonModalControls),
        e = a(() => t.jettonTransactions);
      return g("memepad-about-transactions"), (b, C) => {
        const i = P;
        return m(), T(i, {
          jetton: o(s),
          "jetton-transactions": o(e),
          "jetton-modal-controls": o(n)
        }, null, 8, ["jetton", "jetton-transactions", "jetton-modal-controls"])
      }
    }
  });
export {
  x as
  default
};