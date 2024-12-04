import {
  _ as J
} from "./CQQzXgQo.js";
import {
  _ as S
} from "./C4h8zcBj.js";
import {
  d as v,
  F as i,
  aW as w,
  f as y,
  aY as A,
  br as I,
  a as s,
  c as a,
  b as c,
  k as m,
  t as d,
  e as o,
  n as P,
  aZ as L,
  g,
  b0 as N,
  N as U,
  j as k,
  W as b,
  X as C,
  m as $,
  by as B,
  o as W,
  r as K,
  a9 as O,
  K as V,
  bf as D,
  be as F
} from "./BtYZ0DEw.js";
import "./TJJPf6PW.js";
const z = {
    class: "memepad-jetton-transaction"
  },
  E = {
    class: "user-avatar-wrapper"
  },
  H = ["src"],
  R = {
    key: 1,
    class: "user-avatar-empty"
  },
  X = {
    class: "content"
  },
  Y = {
    key: 0,
    class: "user-name"
  },
  Z = {
    key: 1,
    class: "user-address"
  },
  q = {
    class: "event-data"
  },
  G = {
    class: "time"
  },
  Q = {
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
        return s(), a("div", z, [c("div", E, [t.transaction.user.avatarUrl ? (s(), a("img", {
          key: 0,
          src: t.transaction.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, H)) : (s(), a("div", R, [m(j, {
          name: "space-invader",
          class: "icon"
        })]))]), c("div", X, [t.transaction.user.nickname ? (s(), a("div", Y, d(t.transaction.user.nickname), 1)) : (s(), a("div", Z, d(o(r)), 1)), c("div", q, [c("div", {
          class: P(["type", `is-${t.transaction.type.toLowerCase()}`])
        }, d(o(e)), 3), c("div", G, d(o(_)), 1)])]), c("div", Q, [t.transaction.amount ? (s(), a("div", x, d(`${("formatTon"in t?t.formatTon:o(L))(t.transaction.amount,2)} TON`), 1)) : g("", !0), t.transaction.jettonAmount ? (s(), a("div", tt, d(`${("formatCount"in t?t.formatCount:o(N))(t.transaction.jettonAmount).full} ${t.transaction.ticker}`), 1)) : g("", !0)])])
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
        return s(), a("div", at, [n.transactions ? (s(!0), a(b, {
          key: 1
        }, C(n.transactions.transactions, t => (s(), $(r, {
          key: t.user.address + t.timestamp,
          transaction: t
        }, null, 8, ["transaction"]))), 128)) : (s(), a(b, {
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
      T(), W(() => {
        j()
      });

      function M() {
        const l = K(),
          f = O(async () => {
            const p = await V.getMemepadJettonTransactions(e.value);
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
        return s(), $(h, {
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