import {
  d as v,
  a as s,
  c as p,
  k as j,
  aJ as F,
  aZ as w,
  j as k,
  F as r,
  J as D,
  an as b,
  af as M,
  m as h,
  x as g,
  e as n,
  aY as P,
  b as o,
  t as c,
  n as N,
  aH as $,
  a_ as y,
  g as C,
  f as J,
  N as L,
  W as A,
  X as B,
  ar as T,
  bS as U
} from "./BZXAykfw.js";
const V = v({
    __name: "ImageCollectedCircle",
    props: {
      image: {},
      collectedPercent: {}
    },
    setup(i) {
      return (t, m) => {
        const a = w;
        return s(), p("div", {
          class: "memepad-jetton-image-collected-circle",
          style: F({
            "--collected-percent": t.collectedPercent
          })
        }, [j(a, {
          src: t.image,
          size: 28,
          class: "image"
        }, null, 8, ["src"])], 4)
      }
    }
  }),
  S = k(V, [
    ["__scopeId", "data-v-49dd4c7d"]
  ]),
  z = {
    class: "center"
  },
  K = {
    class: "ticker"
  },
  W = {
    class: "jettons"
  },
  q = {
    class: "right"
  },
  E = {
    class: "fiat"
  },
  G = v({
    __name: "MyTokensListItem",
    props: {
      jetton: {},
      analyticsSource: {},
      bclData: {}
    },
    setup(i) {
      const t = i,
        m = r(() => D().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: t.analyticsSource
          }
        })),
        a = r(() => t.jetton.stats.tonCollected && t.bclData && t.jetton.stats.tonCollected.div(t.bclData.tonForDex).times(100).toNumber()),
        f = r(() => t.jetton.ownedAmount ? b(t.jetton.ownedAmount, t.jetton.ticker).frontend : "-"),
        e = r(() => t.jetton.ownedAmountUSD ? b(t.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        l = r(() => {
          if (!t.jetton.pnlPercent) return;
          const d = t.jetton.pnlPercent.lt(0),
            u = t.jetton.pnlPercent.abs(),
            _ = Math.min(new M(u.toFixed(2)).decimalPlaces(), 2);
          return {
            direction: d ? "down" : "up",
            formattedPnlPercent: u.toFixed(_)
          }
        });
      return (d, u) => {
        const _ = S,
          I = $;
        return s(), h(I, {
          to: n(m),
          class: "memepad-jetton-list-item"
        }, {
          default: g(() => [j(_, {
            image: n(P)(d.jetton.iconFileKey),
            "collected-percent": n(a)
          }, null, 8, ["image", "collected-percent"]), o("div", z, [o("div", K, c(d.jetton.ticker), 1), o("div", W, c(n(f)), 1)]), o("div", q, [o("div", E, c(n(e)), 1), o("div", {
            class: N(["pnl", n(l) && `is-${n(l).direction}`])
          }, c(n(l) ? `${n(l).direction==="up"?"+":"-"}${n(l).formattedPnlPercent}%` : "-"), 3)])]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  H = k(G, [
    ["__scopeId", "data-v-e8b07f30"]
  ]),
  R = {
    class: "ticker"
  },
  X = {
    key: 0,
    class: "values"
  },
  Y = {
    key: 0,
    class: "holders-count"
  },
  Z = {
    class: "text"
  },
  O = {
    key: 1,
    class: "transactions-count"
  },
  Q = {
    class: "text"
  },
  x = {
    key: 2,
    class: "market-cap"
  },
  tt = {
    class: "label"
  },
  et = {
    class: "value"
  },
  nt = v({
    __name: "ListItem",
    props: {
      jetton: {},
      analyticsSource: {},
      bclData: {}
    },
    setup(i) {
      const t = i,
        m = r(() => D().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: t.analyticsSource
          }
        })),
        a = r(() => t.jetton.stats.tonCollected && t.bclData && t.jetton.stats.tonCollected.div(t.bclData.tonForDex).times(100).toNumber()),
        f = e => {
          const l = e.decimalPlaces();
          return Math.max(Math.min(1, l), 0)
        };
      return (e, l) => {
        const d = S,
          u = L,
          _ = $;
        return s(), h(_, {
          to: n(m),
          class: "memepad-jetton-list-item"
        }, {
          default: g(() => [j(d, {
            image: n(P)(e.jetton.iconFileKey),
            "collected-percent": n(a)
          }, null, 8, ["image", "collected-percent"]), o("div", R, c(e.jetton.ticker), 1), e.jetton.stats.transactionsCount !== void 0 || e.jetton.stats.marketCap ? (s(), p("div", X, [e.jetton.stats.holdersCount !== void 0 ? (s(), p("div", Y, [j(u, {
            name: "personal",
            class: "icon"
          }), o("span", Z, c(("formatCount" in e ? e.formatCount : n(y))(e.jetton.stats.holdersCount, 0).full), 1)])) : C("", !0), e.jetton.stats.transactionsCount !== void 0 ? (s(), p("div", O, [j(u, {
            name: "transfer",
            class: "icon"
          }), o("span", Q, c(("formatCount" in e ? e.formatCount : n(y))(e.jetton.stats.transactionsCount, 0).full), 1)])) : C("", !0), e.jetton.stats.marketCap ? (s(), p("div", x, [o("span", tt, c(("t" in e ? e.t : n(J))("memepad.jetton.stats.market_cap")), 1), o("span", et, c(`$${("formatCount"in e?e.formatCount:n(y))(e.jetton.stats.marketCap,f(e.jetton.stats.marketCap)).full}`), 1)])) : C("", !0)])) : C("", !0)]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  ot = k(nt, [
    ["__scopeId", "data-v-2503edef"]
  ]),
  st = v({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      bclData: {},
      myTokens: {
        type: Boolean
      }
    },
    setup(i) {
      const t = i,
        m = r(() => t.myTokens ? H : ot);
      return (a, f) => (s(), h(U, {
        tag: "div",
        name: "memepad-list-transitions",
        class: "memepad-jetton-list"
      }, {
        default: g(() => [(s(!0), p(A, null, B(a.items, e => (s(), h(T(n(m)), {
          key: e.shortname,
          jetton: e,
          "analytics-source": a.analyticsSource,
          "bcl-data": a.bclData
        }, null, 8, ["jetton", "analytics-source", "bcl-data"]))), 128))]),
        _: 1
      }))
    }
  }),
  ct = k(st, [
    ["__scopeId", "data-v-77701242"]
  ]);
export {
  ct as _
};