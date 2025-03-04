import {
  _ as $
} from "./DvY0eilk.js";
import {
  _ as C
} from "./8r8qwHgw.js";
import {
  d as I,
  j as m,
  aQ as A,
  z as _,
  aS as S,
  bh as B,
  am as L,
  a5 as D,
  o as a,
  c as e,
  a as r,
  e as o,
  t as c,
  n as N,
  aT as U,
  D as k,
  aW as h,
  f as g,
  R as y,
  b as u,
  F as T,
  q as b,
  G as R
} from "./BFi5NhLo.js";
const V = {
    class: "memepad-jetton-transaction"
  },
  W = {
    class: "user-avatar-wrapper"
  },
  z = ["src"],
  F = ["src"],
  J = {
    class: "content"
  },
  M = {
    key: 0,
    class: "user-name"
  },
  P = {
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
  Q = I({
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
        n = m(() => S(B(s.transaction.user.address))),
        i = L(`avatars/${D(0,9)}`, "webp");
      return (t, d) => (a(), e("div", V, [r("div", W, [t.transaction.user.avatarUrl ? (a(), e("img", {
        key: 0,
        src: t.transaction.user.avatarUrl,
        alt: "User avatar",
        class: "user-avatar"
      }, null, 8, z)) : (a(), e("img", {
        key: 1,
        src: o(i),
        class: "user-avatar-empty"
      }, null, 8, F))]), r("div", J, [t.transaction.user.nickname ? (a(), e("div", M, c(t.transaction.user.nickname), 1)) : (a(), e("div", P, c(o(n)), 1)), r("div", q, [r("div", {
        class: N(["type", `is-${t.transaction.type.toLowerCase()}`])
      }, c(o(f)), 3), r("div", E, c(o(v)), 1)])]), r("div", G, [t.transaction.amount ? (a(), e("div", K, c(`${("formatTon"in t?t.formatTon:o(U))(t.transaction.amount,{accuracy:2,trim:!0})} TON`), 1)) : k("", !0), t.transaction.jettonAmount ? (a(), e("div", O, c(`${("formatCount"in t?t.formatCount:o(h))(t.transaction.jettonAmount).full} ${t.transaction.ticker}`), 1)) : k("", !0)])]))
    }
  }),
  H = g(Q, [
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
            label: h(s.jettonInformation.buyTransactions, {
              accuracy: 0
            }).full,
            percent: new y(s.jettonInformation.buyTransactions).div(n).mul(100)
          }, {
            title: _("memepad.about.transactions.sells"),
            color: "#A91A90",
            label: h(s.jettonInformation.sellTransactions, {
              accuracy: 0
            }).full,
            percent: new y(s.jettonInformation.sellTransactions).div(n).mul(100)
          }]
        });
      return (n, i) => {
        const t = $,
          d = C,
          w = H;
        return a(), e("div", X, [u(t, {
          items: o(f),
          class: "statistic-card"
        }, null, 8, ["items"]), n.transactions ? (a(), e("div", Z, [(a(!0), e(T, null, b(o(v), l => (a(), R(w, {
          key: l.user.address + l.timestamp,
          transaction: l
        }, null, 8, ["transaction"]))), 128))])) : (a(), e("div", Y, [(a(!0), e(T, null, b(n.preview ? j : 6, l => (a(), e("div", {
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