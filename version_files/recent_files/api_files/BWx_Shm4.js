import {
  _ as J
} from "./CrgK12fK.js";
import {
  _ as S
} from "./RYa8JR7-.js";
import {
  d as v,
  F as i,
  aV as w,
  f as y,
  aX as A,
  bq as I,
  a as s,
  c as a,
  b as c,
  k as m,
  t as d,
  e as o,
  n as P,
  aY as L,
  g,
  a$ as N,
  N as U,
  j as k,
  W as $,
  X as C,
  m as b,
  bx as B,
  o as V,
  r as K,
  a9 as O,
  K as W,
  be as D,
  bd as F
} from "./B8dH5Zvz.js";
import "./BXBf7By7.js";
const X = {
    class: "memepad-jetton-transaction"
  },
  q = {
    class: "user-avatar-wrapper"
  },
  z = ["src"],
  E = {
    key: 1,
    class: "user-avatar-empty"
  },
  H = {
    class: "content"
  },
  R = {
    key: 0,
    class: "user-name"
  },
  Y = {
    key: 1,
    class: "user-address"
  },
  G = {
    class: "event-data"
  },
  Q = {
    class: "time"
  },
  Z = {
    class: "values"
  },
  x = {
    key: 0,
    class: "ton-price"
  },
  tt = {
    key: 1,
    class: "amount"
  },
  nt = v({
    __name: "Transaction",
    props: {
      transaction: {}
    },
    setup(u) {
      const n = u,
        _ = i(() => {
          const t = w(n.transaction.timestamp);
          return t.isDate ? t.label : y("base.time.ago", {
            time: t.label
          })
        }),
        e = i(() => y(`memepad.jetton.transactions.type.${n.transaction.type.toLowerCase()}`)),
        r = i(() => A(I(n.transaction.user.address)));
      return (t, T) => {
        const j = U;
        return s(), a("div", X, [c("div", q, [t.transaction.user.avatarUrl ? (s(), a("img", {
          key: 0,
          src: t.transaction.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, z)) : (s(), a("div", E, [m(j, {
          name: "space-invader",
          class: "icon"
        })]))]), c("div", H, [t.transaction.user.nickname ? (s(), a("div", R, d(t.transaction.user.nickname), 1)) : (s(), a("div", Y, d(o(r)), 1)), c("div", G, [c("div", {
          class: P(["type", `is-${t.transaction.type.toLowerCase()}`])
        }, d(o(e)), 3), c("div", Q, d(o(_)), 1)])]), c("div", Z, [t.transaction.amount ? (s(), a("div", x, d(`${("formatTon"in t?t.formatTon:o(L))(t.transaction.amount,2)} TON`), 1)) : g("", !0), t.transaction.jettonAmount ? (s(), a("div", tt, d(`${("formatCount"in t?t.formatCount:o(N))(t.transaction.jettonAmount).full} ${t.transaction.ticker}`), 1)) : g("", !0)])])
      }
    }
  }),
  st = k(nt, [
    ["__scopeId", "data-v-ca174fab"]
  ]),
  at = {
    class: "memepad-jetton-page-transactions"
  },
  et = v({
    __name: "Transactions",
    props: {
      transactions: {}
    },
    setup(u) {
      return (n, _) => {
        const e = S,
          r = st;
        return s(), a("div", at, [n.transactions ? (s(!0), a($, {
          key: 1
        }, C(n.transactions.transactions, t => (s(), b(r, {
          key: t.user.address + t.timestamp,
          transaction: t
        }, null, 8, ["transaction"]))), 128)) : (s(), a($, {
          key: 0
        }, C(6, t => c("div", {
          key: t,
          class: "skeleton"
        }, [m(e, {
          class: "image",
          rounded: ""
        }), m(e, {
          class: "title"
        }), m(e, {
          class: "value"
        })])), 64))])
      }
    }
  }),
  ot = k(et, [
    ["__scopeId", "data-v-ff6e1655"]
  ]),
  rt = {
    class: "memepad-jetton-page-transactions"
  },
  ct = v({
    __name: "PageTransactions",
    props: {
      jetton: {},
      jettonTransactions: {},
      jettonModalControls: {}
    },
    setup(u) {
      return (n, _) => {
        const e = J,
          r = ot;
        return s(), a("div", rt, [m(e, {
          title: ("t" in n ? n.t : o(y))("memepad.transactions.title", {
            ticker: n.jetton.ticker
          }),
          jetton: n.jetton,
          "jetton-modal-controls": n.jettonModalControls
        }, null, 8, ["title", "jetton", "jetton-modal-controls"]), m(r, {
          transactions: n.jettonTransactions
        }, null, 8, ["transactions"])])
      }
    }
  }),
  it = k(ct, [
    ["__scopeId", "data-v-65afc0b1"]
  ]),
  pt = v({
    __name: "transactions",
    setup(u) {
      const n = B(),
        _ = i(() => n.jetton),
        e = i(() => n.jettonShortname),
        r = i(() => n.jettonModalControls),
        t = M(),
        T = async () => {
          await t.init()
        }, j = () => {
          t.destroy()
        };
      T(), V(() => {
        j()
      });

      function M() {
        const l = K(),
          f = O(async () => {
            const p = await W.getMemepadJettonTransactions(e.value);
            return D((F(p) ? p.data : l.value) || l.value)
          }, p => {
            l.value = p
          }, 5e3);
        return {
          init: async () => await f.exec(),
          destroy: () => {
            f.destroy(), l.value = void 0
          },
          jettonTransactions: i(() => l.value)
        }
      }
      return (l, f) => {
        const h = it;
        return s(), b(h, {
          jetton: o(_),
          "jetton-transactions": o(t).jettonTransactions.value,
          "jetton-modal-controls": o(r)
        }, null, 8, ["jetton", "jetton-transactions", "jetton-modal-controls"])
      }
    }
  });
export {
  pt as
  default
};