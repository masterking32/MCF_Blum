import {
  _ as p
} from "./DC__2viU.js";
import {
  _ as l
} from "./NJJnxnFM.js";
import {
  d as c,
  o as m,
  c as d,
  b as r,
  e as o,
  z as j,
  f as u,
  bl as f,
  j as a,
  J as T
} from "./Doz8XXSF.js";
import {
  a as g
} from "./DQ8uv9Xm.js";
import "./BbRKoCmi.js";
import "./hzm3Cl5N.js";
const M = {
    class: "memepad-jetton-page-transactions"
  },
  P = c({
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
  b = u(P, [
    ["__scopeId", "data-v-65afc0b1"]
  ]),
  x = c({
    __name: "transactions",
    setup(_) {
      const t = f(),
        s = a(() => t.jetton),
        n = a(() => t.jettonModalControls),
        e = a(() => t.jettonTransactions);
      return g("memepad-about-transactions"), (k, C) => {
        const i = b;
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