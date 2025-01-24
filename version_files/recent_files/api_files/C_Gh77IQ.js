import {
  _ as j
} from "./DMcFdtq_.js";
import {
  _ as l
} from "./6YGsQuXI.js";
import {
  d as c,
  o as i,
  c as d,
  b as r,
  e as o,
  z as f,
  f as u,
  bd as T,
  j as n,
  G as g
} from "./BKd9vpCm.js";
import {
  a as M
} from "./B49t5oad.js";
import "./BaCsvouh.js";
import "./BELi7QKt.js";
import "./aeA2-tLS.js";
import "./CMi4VBYK.js";
const P = {
    class: "memepad-jetton-page-transactions"
  },
  h = c({
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
  k = u(h, [
    ["__scopeId", "data-v-36a9fd62"]
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
      return M("memepad-about-transactions"), (C, I) => {
        const _ = k;
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