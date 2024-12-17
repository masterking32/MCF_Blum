import {
  _ as $
} from "./D9DHcFey.js";
import {
  d as g,
  F as l,
  aV as b,
  f as v,
  aX as w,
  bq as C,
  ax as j,
  ag as A,
  a,
  c as t,
  b as c,
  e as o,
  t as i,
  n as L,
  aY as B,
  g as k,
  a$ as N,
  j as T,
  W as y,
  X as f,
  k as _,
  m as S
} from "./Dq6b0IKe.js";
const U = {
    class: "memepad-jetton-transaction"
  },
  V = {
    class: "user-avatar-wrapper"
  },
  I = ["src"],
  W = ["src"],
  D = {
    class: "content"
  },
  F = {
    key: 0,
    class: "user-name"
  },
  R = {
    key: 1,
    class: "user-address"
  },
  X = {
    class: "event-data"
  },
  q = {
    class: "time"
  },
  z = {
    class: "values"
  },
  E = {
    key: 0,
    class: "ton-price"
  },
  J = {
    key: 1,
    class: "amount"
  },
  K = g({
    __name: "Transaction",
    props: {
      transaction: {}
    },
    setup(p) {
      const e = p,
        u = l(() => {
          const s = b(e.transaction.timestamp);
          return s.isDate ? s.label : v("base.time.ago", {
            time: s.label
          })
        }),
        n = l(() => v(`memepad.jetton.transactions.type.${e.transaction.type.toLowerCase()}`)),
        m = l(() => w(C(e.transaction.user.address))),
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
      }, null, 8, W))]), c("div", D, [s.transaction.user.nickname ? (a(), t("div", F, i(s.transaction.user.nickname), 1)) : (a(), t("div", R, i(o(m)), 1)), c("div", X, [c("div", {
        class: L(["type", `is-${s.transaction.type.toLowerCase()}`])
      }, i(o(n)), 3), c("div", q, i(o(u)), 1)])]), c("div", z, [s.transaction.amount ? (a(), t("div", E, i(`${("formatTon"in s?s.formatTon:o(B))(s.transaction.amount,2)} TON`), 1)) : k("", !0), s.transaction.jettonAmount ? (a(), t("div", J, i(`${("formatCount"in s?s.formatCount:o(N))(s.transaction.jettonAmount).full} ${s.transaction.ticker}`), 1)) : k("", !0)])]))
    }
  }),
  M = T(K, [
    ["__scopeId", "data-v-2192a0aa"]
  ]),
  O = {
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
    setup(p) {
      const e = p,
        u = l(() => {
          var n, m;
          return e.preview ? (n = e.transactions) == null ? void 0 : n.transactions.slice(0, h) : (m = e.transactions) == null ? void 0 : m.transactions
        });
      return (n, m) => {
        const d = $,
          s = M;
        return a(), t("div", O, [n.transactions ? (a(!0), t(y, {
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
  H = T(P, [
    ["__scopeId", "data-v-82c86ec4"]
  ]);
export {
  H as _
};