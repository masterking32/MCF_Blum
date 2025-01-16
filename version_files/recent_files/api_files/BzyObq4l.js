import {
  _ as j
} from "./1qU4iY3a.js";
import {
  _ as l
} from "./_h61D1vJ.js";
import {
  d as c,
  o as i,
  c as d,
  b as r,
  e as o,
  z as f,
  f as u,
  bc as T,
  j as n,
  G as g
} from "./CALhxlCG.js";
import {
  a as M
} from "./Ht1Jelhj.js";
import "./2VRS7L3q.js";
import "./Dci9feME.js";
import "./B23xJpGh.js";
import "./h2QFrHlG.js";
const P = {
    class: "memepad-jetton-page-transactions"
  },
  b = c({
    __name: "PageTransactions",
    props: {
      jetton: {},
      jettonInformation: {},
      jettonTransactions: {},
      jettonModalControls: {}
    },
    setup(m) {
      return (t, s) => {
        const e = j,
          a = l;
        return i(), d("div", P, [r(e, {
          title: ("t" in t ? t.t : o(f))("memepad.transactions.title", {
            ticker: t.jetton.ticker
          }),
          jetton: t.jetton,
          "jetton-modal-controls": t.jettonModalControls
        }, null, 8, ["title", "jetton", "jetton-modal-controls"]), r(a, {
          transactions: t.jettonTransactions,
          "jetton-information": t.jettonInformation
        }, null, 8, ["transactions", "jetton-information"])])
      }
    }
  }),
  h = u(b, [
    ["__scopeId", "data-v-3a232b81"]
  ]),
  z = c({
    inheritAttrs: !1,
    __name: "transactions",
    setup(m) {
      const t = T(),
        s = n(() => t.jetton),
        e = n(() => t.jettonInformation),
        a = n(() => t.jettonModalControls),
        p = n(() => t.jettonTransactions);
      return M("memepad-about-transactions"), (k, C) => {
        const _ = h;
        return i(), g(_, {
          jetton: o(s),
          "jetton-information": o(e),
          "jetton-transactions": o(p),
          "jetton-modal-controls": o(a)
        }, null, 8, ["jetton", "jetton-information", "jetton-transactions", "jetton-modal-controls"])
      }
    }
  });
export {
  z as
  default
};