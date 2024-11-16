import {
  d as u,
  a as s,
  c as o,
  k as m,
  aJ as v,
  aZ as y,
  j as C,
  F as h,
  J as b,
  m as p,
  x as j,
  e as a,
  aY as I,
  b as c,
  t as r,
  b0 as _,
  g as l,
  f as $,
  N as D,
  aH as N,
  W as P,
  X as S,
  bZ as F
} from "./TkfSaITf.js";
const J = u({
    __name: "ImageCollectedCircle",
    props: {
      image: {},
      collectedPercent: {}
    },
    setup(i) {
      return (e, d) => {
        const n = y;
        return s(), o("div", {
          class: "memepad-jetton-image-collected-circle",
          style: v({
            "--collected-percent": e.collectedPercent
          })
        }, [m(n, {
          src: e.image,
          size: 28,
          class: "image"
        }, null, 8, ["src"])], 4)
      }
    }
  }),
  L = C(J, [
    ["__scopeId", "data-v-49dd4c7d"]
  ]),
  B = {
    class: "ticker"
  },
  M = {
    key: 0,
    class: "values"
  },
  V = {
    key: 0,
    class: "holders-count"
  },
  z = {
    class: "text"
  },
  K = {
    key: 1,
    class: "transactions-count"
  },
  Z = {
    class: "text"
  },
  q = {
    key: 2,
    class: "market-cap"
  },
  w = {
    class: "label"
  },
  E = {
    class: "value"
  },
  G = u({
    __name: "ListItem",
    props: {
      jetton: {},
      analyticsSource: {},
      bclData: {}
    },
    setup(i) {
      const e = i,
        d = h(() => b().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: e.jetton.shortname
          },
          query: {
            from: e.analyticsSource
          }
        })),
        n = h(() => e.jetton.stats.tonCollected && e.bclData && e.jetton.stats.tonCollected.div(e.bclData.tonForDex).times(100).toNumber());
      return (t, T) => {
        const k = L,
          f = D,
          g = N;
        return s(), p(g, {
          to: a(d),
          class: "memepad-jetton-list-item"
        }, {
          default: j(() => [m(k, {
            image: a(I)(t.jetton.iconFileKey),
            "collected-percent": a(n)
          }, null, 8, ["image", "collected-percent"]), c("div", B, r(t.jetton.ticker), 1), t.jetton.stats.transactionsCount !== void 0 || t.jetton.stats.marketCap ? (s(), o("div", M, [t.jetton.stats.holdersCount !== void 0 ? (s(), o("div", V, [m(f, {
            name: "personal",
            class: "icon"
          }), c("span", z, r(("formatCount" in t ? t.formatCount : a(_))(t.jetton.stats.holdersCount, 0).full), 1)])) : l("", !0), t.jetton.stats.transactionsCount !== void 0 ? (s(), o("div", K, [m(f, {
            name: "transfer",
            class: "icon"
          }), c("span", Z, r(("formatCount" in t ? t.formatCount : a(_))(t.jetton.stats.transactionsCount, 0).full), 1)])) : l("", !0), t.jetton.stats.marketCap ? (s(), o("div", q, [c("span", w, r(("t" in t ? t.t : a($))("memepad.jetton.stats.market_cap")), 1), c("span", E, r(`$${("formatCount"in t?t.formatCount:a(_))(t.jetton.stats.marketCap,0).full}`), 1)])) : l("", !0)])) : l("", !0)]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  H = C(G, [
    ["__scopeId", "data-v-ed9d0d84"]
  ]),
  R = u({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      bclData: {}
    },
    setup(i) {
      return (e, d) => {
        const n = H;
        return s(), p(F, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: j(() => [(s(!0), o(P, null, S(e.items, t => (s(), p(n, {
            key: t.shortname,
            jetton: t,
            "analytics-source": e.analyticsSource,
            "bcl-data": e.bclData
          }, null, 8, ["jetton", "analytics-source", "bcl-data"]))), 128))]),
          _: 1
        })
      }
    }
  }),
  W = C(R, [
    ["__scopeId", "data-v-4fe2107a"]
  ]);
export {
  L as _, W as a
};