import {
  _ as p
} from "./bDhcOR8g.js";
import {
  _ as l
} from "./DGVtMOFk.js";
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
} from "./Bxr-pE_l.js";
import {
  a as g
} from "./67GUT98e.js";
import "./DQ2hK8K4.js";
import "./D2Mdceld.js";
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