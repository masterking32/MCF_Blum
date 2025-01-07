import {
  _ as $
} from "./DpS7mAhG.js";
import {
  d as g,
  j as l,
  aK as b,
  z as v,
  aM as w,
  bf as C,
  am as j,
  a4 as A,
  o as t,
  c as a,
  a as c,
  e as o,
  t as i,
  n as L,
  E as B,
  D as f,
  aP as N,
  f as T,
  F as y,
  q as k,
  b as _,
  G as S
} from "./CVKQB8Rv.js";
const U = {
    class: "memepad-jetton-transaction"
  },
  D = {
    class: "user-avatar-wrapper"
  },
  I = ["src"],
  V = ["src"],
  z = {
    class: "content"
  },
  E = {
    key: 0,
    class: "user-name"
  },
  F = {
    key: 1,
    class: "user-address"
  },
  K = {
    class: "event-data"
  },
  M = {
    class: "time"
  },
  P = {
    class: "values"
  },
  R = {
    key: 0,
    class: "ton-price"
  },
  W = {
    key: 1,
    class: "amount"
  },
  q = g({
    __name: "Transaction",
    props: {
      transaction: {}
    },
    setup(u) {
      const e = u,
        p = l(() => {
          const s = b(e.transaction.timestamp);
          return s.isDate ? s.label : v("base.time.ago", {
            time: s.label
          })
        }),
        n = l(() => v(`memepad.jetton.transactions.type.${e.transaction.type.toLowerCase()}`)),
        m = l(() => w(C(e.transaction.user.address))),
        d = j(`avatars/${A(0,9)}`, "webp");
      return (s, r) => (t(), a("div", U, [c("div", D, [s.transaction.user.avatarUrl ? (t(), a("img", {
        key: 0,
        src: s.transaction.user.avatarUrl,
        alt: "User avatar",
        class: "user-avatar"
      }, null, 8, I)) : (t(), a("img", {
        key: 1,
        src: o(d),
        class: "user-avatar-empty"
      }, null, 8, V))]), c("div", z, [s.transaction.user.nickname ? (t(), a("div", E, i(s.transaction.user.nickname), 1)) : (t(), a("div", F, i(o(m)), 1)), c("div", K, [c("div", {
        class: L(["type", `is-${s.transaction.type.toLowerCase()}`])
      }, i(o(n)), 3), c("div", M, i(o(p)), 1)])]), c("div", P, [s.transaction.amount ? (t(), a("div", R, i(`${("formatTon"in s?s.formatTon:o(B))(s.transaction.amount,{accuracy:2,trim:!0})} TON`), 1)) : f("", !0), s.transaction.jettonAmount ? (t(), a("div", W, i(`${("formatCount"in s?s.formatCount:o(N))(s.transaction.jettonAmount).full} ${s.transaction.ticker}`), 1)) : f("", !0)])]))
    }
  }),
  G = T(q, [
    ["__scopeId", "data-v-fe319a53"]
  ]),
  J = {
    class: "memepad-jetton-page-transactions"
  },
  h = 2,
  O = g({
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
        const d = $,
          s = G;
        return t(), a("div", J, [n.transactions ? (t(!0), a(y, {
          key: 1
        }, k(o(p), r => (t(), S(s, {
          key: r.user.address + r.timestamp,
          transaction: r
        }, null, 8, ["transaction"]))), 128)) : (t(!0), a(y, {
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
  X = T(O, [
    ["__scopeId", "data-v-82c86ec4"]
  ]);
export {
  X as _
};