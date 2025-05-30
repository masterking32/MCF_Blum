import {
  _ as w
} from "./VO2HwTzh.js";
import {
  _ as C
} from "./DQDvD5n6.js";
import {
  d as I,
  j as m,
  a_ as A,
  z as _,
  a$ as B,
  br as L,
  a8 as S,
  b6 as N,
  o as a,
  c as e,
  a as r,
  e as o,
  t as c,
  n as U,
  b0 as D,
  E as k,
  b3 as b,
  f as $,
  ae as y,
  b as u,
  F as h,
  q as T,
  y as V
} from "./BMIPMNvl.js";
const z = {
    class: "memepad-jetton-transaction"
  },
  E = {
    class: "user-avatar-wrapper"
  },
  F = ["src"],
  J = ["src"],
  M = {
    class: "content"
  },
  P = {
    key: 0,
    class: "user-name"
  },
  R = {
    key: 1,
    class: "user-address"
  },
  W = {
    class: "event-data"
  },
  q = {
    class: "time"
  },
  K = {
    class: "values"
  },
  O = {
    key: 0,
    class: "ton-price"
  },
  G = {
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
        n = m(() => B(L(s.transaction.user.address))),
        i = S(`avatars/${N(0,9)}`, "webp");
      return (t, d) => (a(), e("div", z, [r("div", E, [t.transaction.user.avatarUrl ? (a(), e("img", {
        key: 0,
        src: t.transaction.user.avatarUrl,
        alt: "User avatar",
        class: "user-avatar"
      }, null, 8, F)) : (a(), e("img", {
        key: 1,
        src: o(i),
        class: "user-avatar-empty"
      }, null, 8, J))]), r("div", M, [t.transaction.user.nickname ? (a(), e("div", P, c(t.transaction.user.nickname), 1)) : (a(), e("div", R, c(o(n)), 1)), r("div", W, [r("div", {
        class: U(["type", `is-${t.transaction.type.toLowerCase()}`])
      }, c(o(f)), 3), r("div", q, c(o(v)), 1)])]), r("div", K, [t.transaction.amount ? (a(), e("div", O, c(`${("formatTon"in t?t.formatTon:o(D))(t.transaction.amount,{accuracy:2,trim:!0})} TON`), 1)) : k("", !0), t.transaction.jettonAmount ? (a(), e("div", G, c(`${("formatCount"in t?t.formatCount:o(b))(t.transaction.jettonAmount).full} ${t.transaction.ticker}`), 1)) : k("", !0)])]))
    }
  }),
  Q = $(H, [
    ["__scopeId", "data-v-093753d8"]
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
            label: b(s.jettonInformation.buyTransactions, {
              accuracy: 0
            }).full,
            percent: new y(s.jettonInformation.buyTransactions).div(n).mul(100)
          }, {
            title: _("memepad.about.transactions.sells"),
            color: "#A91A90",
            label: b(s.jettonInformation.sellTransactions, {
              accuracy: 0
            }).full,
            percent: new y(s.jettonInformation.sellTransactions).div(n).mul(100)
          }]
        });
      return (n, i) => {
        const t = w,
          d = C,
          g = Q;
        return a(), e("div", X, [u(t, {
          items: o(f),
          class: "statistic-card"
        }, null, 8, ["items"]), n.transactions ? (a(), e("div", Z, [(a(!0), e(h, null, T(o(v), l => (a(), V(g, {
          key: l.user.address + l.timestamp,
          transaction: l
        }, null, 8, ["transaction"]))), 128))])) : (a(), e("div", Y, [(a(!0), e(h, null, T(n.preview ? j : 6, l => (a(), e("div", {
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
  et = $(x, [
    ["__scopeId", "data-v-016a0aa5"]
  ]);
export {
  et as _
};