import {
  _ as j
} from "./DqIS-x0-.js";
import {
  _ as l
} from "./BrRJPwZA.js";
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
} from "./DrQ2shF8.js";
import {
  a as M
} from "./CamKU6Ja.js";
import "./BS7KkRnM.js";
import "./DLVRNFZL.js";
import "./CiodtMOB.js";
import "./BkLk__C8.js";
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