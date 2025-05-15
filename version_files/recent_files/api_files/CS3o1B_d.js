import {
  _ as $
} from "./BPBhizGE.js";
import {
  _ as C
} from "./BHHMs5Tb.js";
import {
  d as I,
  j as m,
  aU as A,
  C as _,
  aV as B,
  bn as L,
  a0 as S,
  b0 as N,
  o as a,
  c as e,
  a as r,
  e as o,
  t as c,
  n as U,
  aW as V,
  G as b,
  aZ as k,
  f as g,
  a6 as y,
  b as u,
  F as h,
  q as T,
  N as D
} from "./DdW0p5VG.js";
const W = {
    class: "memepad-jetton-transaction"
  },
  F = {
    class: "user-avatar-wrapper"
  },
  J = ["src"],
  M = ["src"],
  P = {
    class: "content"
  },
  R = {
    key: 0,
    class: "user-name"
  },
  q = {
    key: 1,
    class: "user-address"
  },
  z = {
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
  Z = I({
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
      return (t, d) => (a(), e("div", W, [r("div", F, [t.transaction.user.avatarUrl ? (a(), e("img", {
        key: 0,
        src: t.transaction.user.avatarUrl,
        alt: "User avatar",
        class: "user-avatar"
      }, null, 8, J)) : (a(), e("img", {
        key: 1,
        src: o(i),
        class: "user-avatar-empty"
      }, null, 8, M))]), r("div", P, [t.transaction.user.nickname ? (a(), e("div", R, c(t.transaction.user.nickname), 1)) : (a(), e("div", q, c(o(n)), 1)), r("div", z, [r("div", {
        class: U(["type", `is-${t.transaction.type.toLowerCase()}`])
      }, c(o(f)), 3), r("div", E, c(o(v)), 1)])]), r("div", G, [t.transaction.amount ? (a(), e("div", K, c(`${("formatTon"in t?t.formatTon:o(V))(t.transaction.amount,{accuracy:2,trim:!0})} TON`), 1)) : b("", !0), t.transaction.jettonAmount ? (a(), e("div", O, c(`${("formatCount"in t?t.formatCount:o(k))(t.transaction.jettonAmount).full} ${t.transaction.ticker}`), 1)) : b("", !0)])]))
    }
  }),
  H = g(Z, [
    ["__scopeId", "data-v-093753d8"]
  ]),
  Q = {
    class: "memepad-jetton-transactions-section"
  },
  X = {
    key: 0,
    class: "list"
  },
  Y = {
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
          w = H;
        return a(), e("div", Q, [u(t, {
          items: o(f),
          class: "statistic-card"
        }, null, 8, ["items"]), n.transactions ? (a(), e("div", Y, [(a(!0), e(h, null, T(o(v), l => (a(), D(w, {
          key: l.user.address + l.timestamp,
          transaction: l
        }, null, 8, ["transaction"]))), 128))])) : (a(), e("div", X, [(a(!0), e(h, null, T(n.preview ? j : 6, l => (a(), e("div", {
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