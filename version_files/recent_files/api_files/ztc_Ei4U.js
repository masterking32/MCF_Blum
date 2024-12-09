import {
  _ as w
} from "./C1tnMb12.js";
import {
  _ as A
} from "./DaQ9Brp1.js";
import {
  d as j,
  F as l,
  aV as J,
  f as y,
  aX as S,
  bp as I,
  ax as P,
  ag as L,
  a as n,
  c as e,
  b as i,
  e as o,
  t as m,
  n as U,
  aY as B,
  g as h,
  a$ as N,
  j as k,
  W as $,
  X as C,
  k as u,
  m as b,
  bw as V,
  o as O,
  r as R,
  a9 as W,
  K as D,
  bd as F,
  bc as K
} from "./Ddf_vcE7.js";
import "./EbPyu4_5.js";
const X = {
    class: "memepad-jetton-transaction"
  },
  z = {
    class: "user-avatar-wrapper"
  },
  E = ["src"],
  H = ["src"],
  Y = {
    class: "content"
  },
  q = {
    key: 0,
    class: "user-name"
  },
  G = {
    key: 1,
    class: "user-address"
  },
  Q = {
    class: "event-data"
  },
  Z = {
    class: "time"
  },
  x = {
    class: "values"
  },
  tt = {
    key: 0,
    class: "ton-price"
  },
  st = {
    key: 1,
    class: "amount"
  },
  nt = j({
    __name: "Transaction",
    props: {
      transaction: {}
    },
    setup(p) {
      const s = p,
        _ = l(() => {
          const t = J(s.transaction.timestamp);
          return t.isDate ? t.label : y("base.time.ago", {
            time: t.label
          })
        }),
        r = l(() => y(`memepad.jetton.transactions.type.${s.transaction.type.toLowerCase()}`)),
        c = l(() => S(I(s.transaction.user.address))),
        a = P(`avatars/${L(0,9)}`, "webp");
      return (t, T) => (n(), e("div", X, [i("div", z, [t.transaction.user.avatarUrl ? (n(), e("img", {
        key: 0,
        src: t.transaction.user.avatarUrl,
        alt: "User avatar",
        class: "user-avatar"
      }, null, 8, E)) : (n(), e("img", {
        key: 1,
        src: o(a),
        class: "user-avatar-empty"
      }, null, 8, H))]), i("div", Y, [t.transaction.user.nickname ? (n(), e("div", q, m(t.transaction.user.nickname), 1)) : (n(), e("div", G, m(o(c)), 1)), i("div", Q, [i("div", {
        class: U(["type", `is-${t.transaction.type.toLowerCase()}`])
      }, m(o(r)), 3), i("div", Z, m(o(_)), 1)])]), i("div", x, [t.transaction.amount ? (n(), e("div", tt, m(`${("formatTon"in t?t.formatTon:o(B))(t.transaction.amount,2)} TON`), 1)) : h("", !0), t.transaction.jettonAmount ? (n(), e("div", st, m(`${("formatCount"in t?t.formatCount:o(N))(t.transaction.jettonAmount).full} ${t.transaction.ticker}`), 1)) : h("", !0)])]))
    }
  }),
  at = k(nt, [
    ["__scopeId", "data-v-2192a0aa"]
  ]),
  et = {
    class: "memepad-jetton-page-transactions"
  },
  ot = j({
    __name: "Transactions",
    props: {
      transactions: {}
    },
    setup(p) {
      return (s, _) => {
        const r = A,
          c = at;
        return n(), e("div", et, [s.transactions ? (n(!0), e($, {
          key: 1
        }, C(s.transactions.transactions, a => (n(), b(c, {
          key: a.user.address + a.timestamp,
          transaction: a
        }, null, 8, ["transaction"]))), 128)) : (n(), e($, {
          key: 0
        }, C(6, a => i("div", {
          key: a,
          class: "skeleton"
        }, [u(r, {
          class: "image",
          rounded: ""
        }), u(r, {
          class: "title"
        }), u(r, {
          class: "value"
        })])), 64))])
      }
    }
  }),
  rt = k(ot, [
    ["__scopeId", "data-v-ff6e1655"]
  ]),
  ct = {
    class: "memepad-jetton-page-transactions"
  },
  it = j({
    __name: "PageTransactions",
    props: {
      jetton: {},
      jettonTransactions: {},
      jettonModalControls: {}
    },
    setup(p) {
      return (s, _) => {
        const r = w,
          c = rt;
        return n(), e("div", ct, [u(r, {
          title: ("t" in s ? s.t : o(y))("memepad.transactions.title", {
            ticker: s.jetton.ticker
          }),
          jetton: s.jetton,
          "jetton-modal-controls": s.jettonModalControls
        }, null, 8, ["title", "jetton", "jetton-modal-controls"]), u(c, {
          transactions: s.jettonTransactions
        }, null, 8, ["transactions"])])
      }
    }
  }),
  lt = k(it, [
    ["__scopeId", "data-v-65afc0b1"]
  ]),
  vt = j({
    __name: "transactions",
    setup(p) {
      const s = V(),
        _ = l(() => s.jetton),
        r = l(() => s.jettonShortname),
        c = l(() => s.jettonModalControls),
        a = M(),
        t = async () => {
          await a.init()
        }, T = () => {
          a.destroy()
        };
      t(), O(() => {
        T()
      });

      function M() {
        const d = R(),
          f = W(async () => {
            const v = await D.getMemepadJettonTransactions(r.value);
            return F((K(v) ? v.data : d.value) || d.value)
          }, v => {
            d.value = v
          }, 5e3);
        return {
          init: async () => await f.exec(),
          destroy: () => {
            f.destroy(), d.value = void 0
          },
          jettonTransactions: l(() => d.value)
        }
      }
      return (d, f) => {
        const g = lt;
        return n(), b(g, {
          jetton: o(_),
          "jetton-transactions": o(a).jettonTransactions.value,
          "jetton-modal-controls": o(c)
        }, null, 8, ["jetton", "jetton-transactions", "jetton-modal-controls"])
      }
    }
  });
export {
  vt as
  default
};