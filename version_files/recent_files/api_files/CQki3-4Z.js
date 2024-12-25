import {
  _ as p
} from "./VCYaoDYF.js";
import {
  _ as l
} from "./DOf-_R5p.js";
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
} from "./DiQ4YSNT.js";
import {
  a as g
} from "./DZHUdUPB.js";
import "./C8nD_ehL.js";
import "./CCN8FtQN.js";
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