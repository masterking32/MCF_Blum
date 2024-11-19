import {
  d as C,
  a,
  c as o,
  k as i,
  aJ as b,
  aZ as I,
  j as f,
  F as k,
  J as P,
  m as _,
  x as g,
  e as s,
  aY as $,
  b as c,
  t as r,
  b0 as p,
  g as m,
  f as D,
  N as M,
  aH as N,
  W as S,
  X as F,
  bZ as J
} from "./nFxUmw4d.js";
const L = C({
    __name: "ImageCollectedCircle",
    props: {
      image: {},
      collectedPercent: {}
    },
    setup(d) {
      return (e, u) => {
        const n = I;
        return a(), o("div", {
          class: "memepad-jetton-image-collected-circle",
          style: b({
            "--collected-percent": e.collectedPercent
          })
        }, [i(n, {
          src: e.image,
          size: 28,
          class: "image"
        }, null, 8, ["src"])], 4)
      }
    }
  }),
  B = f(L, [
    ["__scopeId", "data-v-49dd4c7d"]
  ]),
  V = {
    class: "ticker"
  },
  z = {
    key: 0,
    class: "values"
  },
  K = {
    key: 0,
    class: "holders-count"
  },
  Z = {
    class: "text"
  },
  q = {
    key: 1,
    class: "transactions-count"
  },
  w = {
    class: "text"
  },
  E = {
    key: 2,
    class: "market-cap"
  },
  G = {
    class: "label"
  },
  H = {
    class: "value"
  },
  R = C({
    __name: "ListItem",
    props: {
      jetton: {},
      analyticsSource: {},
      bclData: {}
    },
    setup(d) {
      const e = d,
        u = k(() => P().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: e.jetton.shortname
          },
          query: {
            from: e.analyticsSource
          }
        })),
        n = k(() => e.jetton.stats.tonCollected && e.bclData && e.jetton.stats.tonCollected.div(e.bclData.tonForDex).times(100).toNumber()),
        l = t => {
          const h = t.decimalPlaces();
          return Math.max(Math.min(1, h), 0)
        };
      return (t, h) => {
        const v = B,
          j = M,
          y = N;
        return a(), _(y, {
          to: s(u),
          class: "memepad-jetton-list-item"
        }, {
          default: g(() => [i(v, {
            image: s($)(t.jetton.iconFileKey),
            "collected-percent": s(n)
          }, null, 8, ["image", "collected-percent"]), c("div", V, r(t.jetton.ticker), 1), t.jetton.stats.transactionsCount !== void 0 || t.jetton.stats.marketCap ? (a(), o("div", z, [t.jetton.stats.holdersCount !== void 0 ? (a(), o("div", K, [i(j, {
            name: "personal",
            class: "icon"
          }), c("span", Z, r(("formatCount" in t ? t.formatCount : s(p))(t.jetton.stats.holdersCount, 0).full), 1)])) : m("", !0), t.jetton.stats.transactionsCount !== void 0 ? (a(), o("div", q, [i(j, {
            name: "transfer",
            class: "icon"
          }), c("span", w, r(("formatCount" in t ? t.formatCount : s(p))(t.jetton.stats.transactionsCount, 0).full), 1)])) : m("", !0), t.jetton.stats.marketCap ? (a(), o("div", E, [c("span", G, r(("t" in t ? t.t : s(D))("memepad.jetton.stats.market_cap")), 1), c("span", H, r(`$${("formatCount"in t?t.formatCount:s(p))(t.jetton.stats.marketCap,l(t.jetton.stats.marketCap)).full}`), 1)])) : m("", !0)])) : m("", !0)]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  T = f(R, [
    ["__scopeId", "data-v-2503edef"]
  ]),
  U = C({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      bclData: {}
    },
    setup(d) {
      return (e, u) => {
        const n = T;
        return a(), _(J, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: g(() => [(a(!0), o(S, null, F(e.items, l => (a(), _(n, {
            key: l.shortname,
            jetton: l,
            "analytics-source": e.analyticsSource,
            "bcl-data": e.bclData
          }, null, 8, ["jetton", "analytics-source", "bcl-data"]))), 128))]),
          _: 1
        })
      }
    }
  }),
  X = f(U, [
    ["__scopeId", "data-v-4fe2107a"]
  ]);
export {
  B as _, X as a
};