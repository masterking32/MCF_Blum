import {
  _ as i
} from "./CHqylraw.js";
import {
  _ as l
} from "./DWHnwUSm.js";
import {
  d as c,
  a as m,
  c as d,
  k as r,
  e as o,
  f as j,
  j as u,
  bp as f,
  F as a,
  m as T
} from "./Dq6b0IKe.js";
import {
  a as g
} from "./DvSiAemu.js";
import "./DxQXZVfI.js";
import "./D9DHcFey.js";
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
        const n = i,
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
  $ = c({
    __name: "transactions",
    setup(_) {
      const t = f(),
        s = a(() => t.jetton),
        n = a(() => t.jettonModalControls),
        e = a(() => t.jettonTransactions);
      return g("memepad-about-transactions"), (C, b) => {
        const p = P;
        return m(), T(p, {
          jetton: o(s),
          "jetton-transactions": o(e),
          "jetton-modal-controls": o(n)
        }, null, 8, ["jetton", "jetton-transactions", "jetton-modal-controls"])
      }
    }
  });
export {
  $ as
  default
};