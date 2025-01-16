import {
  _ as $
} from "./Dci9feME.js";
import {
  _ as C
} from "./h2QFrHlG.js";
import {
  d as I,
  j as m,
  aJ as A,
  z as _,
  aL as L,
  bd as B,
  ak as S,
  a3 as D,
  o as a,
  c as e,
  a as r,
  e as o,
  t as c,
  n as N,
  aM as U,
  D as T,
  aP as k,
  f as g,
  T as y,
  b as u,
  F as h,
  q as b,
  G as J
} from "./CALhxlCG.js";
const M = {
    class: "memepad-jetton-transaction"
  },
  P = {
    class: "user-avatar-wrapper"
  },
  V = ["src"],
  z = ["src"],
  F = {
    class: "content"
  },
  R = {
    key: 0,
    class: "user-name"
  },
  W = {
    key: 1,
    class: "user-address"
  },
  q = {
    class: "event-data"
  },
  E = {
    class: "time"
  },
  G = {
    class: "values"
  },
  K = {
    key: 0,
    class: "ton-price"
  },
  O = {
    key: 1,
    class: "amount"
  },
  H = I({
    __name: "Transaction",
    props: {
      transaction: {}
    },
    setup(p) {
      const s = p,
        v = m(() => {
          const t = A(s.transaction.timestamp);
          return t.isDate ? t.label : _("base.time.ago", {
            time: t.label
          })
        }),
        f = m(() => _(`memepad.jetton.transactions.type.${s.transaction.type.toLowerCase()}`)),
        n = m(() => L(B(s.transaction.user.address))),
        i = S(`avatars/${D(0,9)}`, "webp");
      return (t, d) => (a(), e("div", M, [r("div", P, [t.transaction.user.avatarUrl ? (a(), e("img", {
        key: 0,
        src: t.transaction.user.avatarUrl,
        alt: "User avatar",
        class: "user-avatar"
      }, null, 8, V)) : (a(), e("img", {
        key: 1,
        src: o(i),
        class: "user-avatar-empty"
      }, null, 8, z))]), r("div", F, [t.transaction.user.nickname ? (a(), e("div", R, c(t.transaction.user.nickname), 1)) : (a(), e("div", W, c(o(n)), 1)), r("div", q, [r("div", {
        class: N(["type", `is-${t.transaction.type.toLowerCase()}`])
      }, c(o(f)), 3), r("div", E, c(o(v)), 1)])]), r("div", G, [t.transaction.amount ? (a(), e("div", K, c(`${("formatTon"in t?t.formatTon:o(U))(t.transaction.amount,{accuracy:2,trim:!0})} TON`), 1)) : T("", !0), t.transaction.jettonAmount ? (a(), e("div", O, c(`${("formatCount"in t?t.formatCount:o(k))(t.transaction.jettonAmount).full} ${t.transaction.ticker}`), 1)) : T("", !0)])]))
    }
  }),
  Q = g(H, [
    ["__scopeId", "data-v-fe319a53"]
  ]),
  X = {
    class: "memepad-jetton-transactions-section"
  },
  Y = {
    key: 0,
    class: "list"
  },
  Z = {
    key: 1,
    class: "list"
  },
  j = 2,
  x = I({
    __name: "TransactionsSection",
    props: {
      jettonInformation: {},
      transactions: {},
      preview: {
        type: Boolean
      }
    },
    setup(p) {
      const s = p,
        v = m(() => {
          var n, i;
          return s.preview ? (n = s.transactions) == null ? void 0 : n.transactions.slice(0, j) : (i = s.transactions) == null ? void 0 : i.transactions
        }),
        f = m(() => {
          if (!s.jettonInformation) return;
          const n = new y(s.jettonInformation.buyTransactions).plus(s.jettonInformation.sellTransactions);
          return [{
            title: _("memepad.about.transactions.buys"),
            color: "#459B11",
            label: k(s.jettonInformation.buyTransactions, {
              accuracy: 0
            }).full,
            percent: new y(s.jettonInformation.buyTransactions).div(n).mul(100)
          }, {
            title: _("memepad.about.transactions.sells"),
            color: "#A91A90",
            label: k(s.jettonInformation.sellTransactions, {
              accuracy: 0
            }).full,
            percent: new y(s.jettonInformation.sellTransactions).div(n).mul(100)
          }]
        });
      return (n, i) => {
        const t = $,
          d = C,
          w = Q;
        return a(), e("div", X, [u(t, {
          items: o(f),
          class: "statistic-card"
        }, null, 8, ["items"]), n.transactions ? (a(), e("div", Z, [(a(!0), e(h, null, b(o(v), l => (a(), J(w, {
          key: l.user.address + l.timestamp,
          transaction: l
        }, null, 8, ["transaction"]))), 128))])) : (a(), e("div", Y, [(a(!0), e(h, null, b(n.preview ? j : 6, l => (a(), e("div", {
          key: l,
          class: "skeleton"
        }, [u(d, {
          class: "image",
          rounded: ""
        }), u(d, {
          class: "title"
        }), u(d, {
          class: "value"
        })]))), 128))]))])
      }
    }
  }),
  et = g(x, [
    ["__scopeId", "data-v-016a0aa5"]
  ]);
export {
  et as _
};