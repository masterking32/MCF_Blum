import {
  _ as C
} from "./BiY0FrNC.js";
import {
  d as g,
  j as l,
  aM as $,
  z as v,
  aO as b,
  bh as w,
  ao as j,
  a6 as A,
  o as t,
  c as a,
  a as c,
  e as o,
  t as i,
  n as L,
  E as B,
  C as y,
  aR as N,
  f as T,
  F as f,
  q as k,
  b as _,
  G as S
} from "./BrLCGJDp.js";
const U = {
    class: "memepad-jetton-transaction"
  },
  I = {
    class: "user-avatar-wrapper"
  },
  R = ["src"],
  V = ["src"],
  z = {
    class: "content"
  },
  D = {
    key: 0,
    class: "user-name"
  },
  E = {
    key: 1,
    class: "user-address"
  },
  F = {
    class: "event-data"
  },
  M = {
    class: "time"
  },
  O = {
    class: "values"
  },
  W = {
    key: 0,
    class: "ton-price"
  },
  q = {
    key: 1,
    class: "amount"
  },
  G = g({
    __name: "Transaction",
    props: {
      transaction: {}
    },
    setup(u) {
      const e = u,
        p = l(() => {
          const s = $(e.transaction.timestamp);
          return s.isDate ? s.label : v("base.time.ago", {
            time: s.label
          })
        }),
        n = l(() => v(`memepad.jetton.transactions.type.${e.transaction.type.toLowerCase()}`)),
        m = l(() => b(w(e.transaction.user.address))),
        d = j(`avatars/${A(0,9)}`, "webp");
      return (s, r) => (t(), a("div", U, [c("div", I, [s.transaction.user.avatarUrl ? (t(), a("img", {
        key: 0,
        src: s.transaction.user.avatarUrl,
        alt: "User avatar",
        class: "user-avatar"
      }, null, 8, R)) : (t(), a("img", {
        key: 1,
        src: o(d),
        class: "user-avatar-empty"
      }, null, 8, V))]), c("div", z, [s.transaction.user.nickname ? (t(), a("div", D, i(s.transaction.user.nickname), 1)) : (t(), a("div", E, i(o(m)), 1)), c("div", F, [c("div", {
        class: L(["type", `is-${s.transaction.type.toLowerCase()}`])
      }, i(o(n)), 3), c("div", M, i(o(p)), 1)])]), c("div", O, [s.transaction.amount ? (t(), a("div", W, i(`${("formatTon"in s?s.formatTon:o(B))(s.transaction.amount,{accuracy:2,trim:!0})} TON`), 1)) : y("", !0), s.transaction.jettonAmount ? (t(), a("div", q, i(`${("formatCount"in s?s.formatCount:o(N))(s.transaction.jettonAmount).full} ${s.transaction.ticker}`), 1)) : y("", !0)])]))
    }
  }),
  J = T(G, [
    ["__scopeId", "data-v-fe319a53"]
  ]),
  K = {
    class: "memepad-jetton-page-transactions"
  },
  h = 2,
  P = g({
    __name: "Transactions",
    props: {
      transactions: {},
      preview: {
        type: Boolean
      }
    },
    setup(u) {
      const e = u,
        p = l(() => {
          var n, m;
          return e.preview ? (n = e.transactions) == null ? void 0 : n.transactions.slice(0, h) : (m = e.transactions) == null ? void 0 : m.transactions
        });
      return (n, m) => {
        const d = C,
          s = J;
        return t(), a("div", K, [n.transactions ? (t(!0), a(f, {
          key: 1
        }, k(o(p), r => (t(), S(s, {
          key: r.user.address + r.timestamp,
          transaction: r
        }, null, 8, ["transaction"]))), 128)) : (t(!0), a(f, {
          key: 0
        }, k(n.preview ? h : 6, r => (t(), a("div", {
          key: r,
          class: "skeleton"
        }, [_(d, {
          class: "image",
          rounded: ""
        }), _(d, {
          class: "title"
        }), _(d, {
          class: "value"
        })]))), 128))])
      }
    }
  }),
  X = T(P, [
    ["__scopeId", "data-v-82c86ec4"]
  ]);
export {
  X as _
};