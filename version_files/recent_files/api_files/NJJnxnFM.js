import {
  _ as C
} from "./hzm3Cl5N.js";
import {
  d as g,
  j as l,
  aT as $,
  z as v,
  aV as b,
  bo as w,
  ao as j,
  a5 as A,
  o as a,
  c as t,
  a as c,
  e as o,
  t as i,
  n as L,
  aW as B,
  C as k,
  aZ as N,
  f as T,
  F as y,
  q as f,
  b as _,
  J as S
} from "./Doz8XXSF.js";
const U = {
    class: "memepad-jetton-transaction"
  },
  V = {
    class: "user-avatar-wrapper"
  },
  I = ["src"],
  W = ["src"],
  z = {
    class: "content"
  },
  D = {
    key: 0,
    class: "user-name"
  },
  F = {
    key: 1,
    class: "user-address"
  },
  J = {
    class: "event-data"
  },
  R = {
    class: "time"
  },
  q = {
    class: "values"
  },
  E = {
    key: 0,
    class: "ton-price"
  },
  K = {
    key: 1,
    class: "amount"
  },
  M = g({
    __name: "Transaction",
    props: {
      transaction: {}
    },
    setup(p) {
      const e = p,
        u = l(() => {
          const s = $(e.transaction.timestamp);
          return s.isDate ? s.label : v("base.time.ago", {
            time: s.label
          })
        }),
        n = l(() => v(`memepad.jetton.transactions.type.${e.transaction.type.toLowerCase()}`)),
        m = l(() => b(w(e.transaction.user.address))),
        d = j(`avatars/${A(0,9)}`, "webp");
      return (s, r) => (a(), t("div", U, [c("div", V, [s.transaction.user.avatarUrl ? (a(), t("img", {
        key: 0,
        src: s.transaction.user.avatarUrl,
        alt: "User avatar",
        class: "user-avatar"
      }, null, 8, I)) : (a(), t("img", {
        key: 1,
        src: o(d),
        class: "user-avatar-empty"
      }, null, 8, W))]), c("div", z, [s.transaction.user.nickname ? (a(), t("div", D, i(s.transaction.user.nickname), 1)) : (a(), t("div", F, i(o(m)), 1)), c("div", J, [c("div", {
        class: L(["type", `is-${s.transaction.type.toLowerCase()}`])
      }, i(o(n)), 3), c("div", R, i(o(u)), 1)])]), c("div", q, [s.transaction.amount ? (a(), t("div", E, i(`${("formatTon"in s?s.formatTon:o(B))(s.transaction.amount,2)} TON`), 1)) : k("", !0), s.transaction.jettonAmount ? (a(), t("div", K, i(`${("formatCount"in s?s.formatCount:o(N))(s.transaction.jettonAmount).full} ${s.transaction.ticker}`), 1)) : k("", !0)])]))
    }
  }),
  O = T(M, [
    ["__scopeId", "data-v-2192a0aa"]
  ]),
  P = {
    class: "memepad-jetton-page-transactions"
  },
  h = 2,
  Z = g({
    __name: "Transactions",
    props: {
      transactions: {},
      preview: {
        type: Boolean
      }
    },
    setup(p) {
      const e = p,
        u = l(() => {
          var n, m;
          return e.preview ? (n = e.transactions) == null ? void 0 : n.transactions.slice(0, h) : (m = e.transactions) == null ? void 0 : m.transactions
        });
      return (n, m) => {
        const d = C,
          s = O;
        return a(), t("div", P, [n.transactions ? (a(!0), t(y, {
          key: 1
        }, f(o(u), r => (a(), S(s, {
          key: r.user.address + r.timestamp,
          transaction: r
        }, null, 8, ["transaction"]))), 128)) : (a(!0), t(y, {
          key: 0
        }, f(n.preview ? h : 6, r => (a(), t("div", {
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
  Q = T(Z, [
    ["__scopeId", "data-v-82c86ec4"]
  ]);
export {
  Q as _
};