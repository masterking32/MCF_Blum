import {
  d as L,
  ab as $,
  P as R,
  a as t,
  m as f,
  e as s,
  f as c,
  B as g,
  b5 as W,
  b_ as K,
  C as O,
  b1 as U,
  b2 as M,
  b4 as E,
  n as B,
  aB as z,
  g as y,
  j as C,
  F as N,
  aY as P,
  c as l,
  aJ as F,
  L as j,
  bR as k,
  ai as b,
  a_ as T,
  bu as V,
  b as r,
  W as h,
  t as d,
  b$ as G,
  aX as w,
  k as S,
  x as X,
  X as J,
  h as D,
  N as Y
} from "./CLQlII_v.js";
import {
  _ as I
} from "./DKQVG__b.js";
import {
  _ as Z
} from "./B2L2_wgC.js";
const $e = L({
    __name: "TopUpButton",
    props: {
      jettonAddress: {},
      jettonShortname: {}
    },
    setup(a) {
      const o = a,
        m = $(),
        e = R().$webApp;

      function u(...n) {
        return n.includes(e.platform)
      }
      const i = () => {
        m.memepad.memepadTopupWallet({
          jettonShortname: o.jettonShortname,
          jettonAddress: o.jettonAddress
        });
        const n = W().tonConnectUI.value,
          _ = (n.walletInfo || n.wallet).universalLink;
        K(_) && u("ios", "weba", "android", "tdesktop", "webk") ? e.openTelegramLink(_) : e.openLink(_)
      };
      return (n, p) => {
        const _ = O;
        return t(), f(_, {
          label: ("t" in n ? n.t : s(c))("memepad.top_up_wallet_button"),
          fill: "",
          size: s(g).LARGE,
          onClick: i
        }, null, 8, ["label", "size"])
      }
    }
  }),
  q = L({
    __name: "StateButtonWrapper",
    props: {
      forceLoading: {
        type: Boolean,
        default: !1
      },
      buttonSize: {
        default: g.LARGE
      }
    },
    setup(a) {
      const o = U(),
        m = M();
      return (e, u) => {
        const i = O,
          n = I;
        return s(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : s(E)).DISCONNECTED ? (t(), f(i, {
          key: 0,
          label: ("t" in e ? e.t : s(c))("wallet.connect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: u[0] || (u[0] = p => s(m).runConnectionFlow())
        }, null, 8, ["label", "size"])) : s(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : s(E)).MUST_RECONNECT ? (t(), f(i, {
          key: 1,
          label: ("t" in e ? e.t : s(c))("wallet.reconnect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: u[1] || (u[1] = p => s(m).runConnectionFlow())
        }, null, 8, ["label", "size"])) : s(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : s(E)).LOADING || e.forceLoading ? (t(), f(n, {
          key: 2,
          class: B(["skeleton", `is-${e.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : s(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : s(E)).CONNECTED ? z(e.$slots, "default", {
          key: 3
        }, void 0, !0) : y("", !0)
      }
    }
  }),
  We = C(q, [
    ["__scopeId", "data-v-7e755239"]
  ]),
  H = L({
    __name: "Banner",
    props: {
      bannerFileKey: {}
    },
    setup(a) {
      const o = a,
        m = N(() => o.bannerFileKey ? P(o.bannerFileKey) : void 0);
      return (e, u) => s(m) ? (t(), l("div", {
        key: 0,
        class: "memepad-jetton-banner",
        style: F({
          backgroundImage: `url(${s(m)})`
        })
      }, null, 4)) : y("", !0)
    }
  }),
  Ke = C(H, [
    ["__scopeId", "data-v-352c6c64"]
  ]),
  Q = a => {
    switch (a) {
      case k.TELEGRAM:
        return {
          display: c("memepad.social_providers.telegram.label"), placeholder: c("memepad.social_providers.telegram.placeholder"), icon: "social-providers/telegram", apiKey: "telegram", skipUrlValidation: !0
        };
      case k.TWITTER:
        return {
          display: c("memepad.social_providers.twitter.label"), placeholder: "x.com/", icon: "social-providers/x", apiKey: "x"
        };
      case k.INSTAGRAM:
        return {
          display: c("memepad.social_providers.instagram.label"), placeholder: "instagram.com/", icon: "social-providers/instagram", apiKey: "instagram"
        };
      case k.WEBSITE:
        return {
          display: c("memepad.social_providers.website.label"), placeholder: "https://", icon: "social-providers/web", apiKey: "web"
        };
      default:
        throw j("Invalid social provider")
    }
  },
  Ue = (a, o) => {
    const m = R().$webApp;
    switch (a) {
      case k.TELEGRAM:
        return m.openTelegramLink(o);
      case k.TWITTER:
      case k.INSTAGRAM:
      case k.WEBSITE:
        return m.openLink(o);
      default:
        throw j("Invalid social provider")
    }
  },
  Me = () => {
    const a = Object.values(k);
    return Object.fromEntries(a.map(o => [o, Q(o)]))
  },
  x = () => {
    const a = Object.keys(k);
    return Object.fromEntries(a.map(o => [o, void 0]))
  },
  ee = () => ({
    iconFileKey: void 0,
    name: void 0,
    ticker: void 0,
    description: void 0
  }),
  te = () => ({
    bannerFileKey: void 0,
    socialProviders: x(),
    isNSFW: !1
  }),
  se = () => ({
    share: 0,
    overview: void 0
  }),
  Be = {
    step1: ee,
    step2: te,
    step3: se
  },
  ze = a => ({
    ...a.step1,
    ...a.step2,
    ...a.step3
  }),
  Pe = a => ({
    step: 4,
    step1: {
      name: a.name,
      description: a.description,
      iconFileKey: a.iconFileKey,
      ticker: a.ticker
    },
    step2: {
      bannerFileKey: a.bannerFileKey,
      isNSFW: a.isNSFW,
      socialProviders: a.socialProviders
    },
    step3: {
      share: a.share,
      overview: a.overview
    }
  }),
  ae = {
    class: "memepad-jetton-market-info"
  },
  oe = {
    key: 0,
    class: "top"
  },
  ne = {
    class: "data"
  },
  le = {
    class: "left"
  },
  ie = {
    key: 0,
    class: "percent"
  },
  re = {
    key: 1,
    class: "part"
  },
  ce = {
    key: 0,
    class: "market-details"
  },
  pe = {
    class: "holders-count"
  },
  de = {
    key: 0
  },
  me = {
    key: 1
  },
  ue = {
    class: "transactions-count"
  },
  _e = {
    key: 0
  },
  ve = {
    key: 1
  },
  ke = {
    class: "market-cap"
  },
  ye = {
    class: "label"
  },
  fe = {
    class: "value"
  },
  Te = {
    key: 1
  },
  he = {
    type: "button",
    class: "memepad-jetton-market-info-tooltip reset"
  },
  Ae = {
    class: "text"
  },
  Ee = {
    class: "progress"
  },
  Le = {
    key: 1,
    class: "metrics"
  },
  be = {
    class: "cap"
  },
  Se = {
    class: "title"
  },
  Ce = {
    key: 0,
    class: "value"
  },
  we = {
    class: "list"
  },
  De = {
    class: "title"
  },
  Re = {
    key: 1,
    class: "value"
  },
  ge = {
    key: 0,
    class: "prefix"
  },
  Oe = {
    key: 1,
    class: "postfix"
  },
  Ne = L({
    __name: "MarketInfo",
    props: {
      isReleased: {
        type: Boolean
      },
      percent: {},
      total: {},
      collected: {},
      marketDetails: {}
    },
    setup(a) {
      const o = a,
        m = N(() => {
          var u;
          if (!((u = o.marketDetails) != null && u.listRows)) return [];
          const e = [];
          if ("holdersCount" in o.marketDetails.listRows) {
            const i = o.marketDetails.listRows.holdersCount,
              n = o.marketDetails.listRows.transactionsCount,
              p = o.marketDetails.listRows.transactionsVolume;
            e.push({
              title: c("memepad.jetton.holders"),
              value: i != null ? b(i, {
                accuracy: 0
              }) : i
            }), e.push({
              title: c("memepad.jetton.transactions"),
              value: n != null ? b(n, {
                accuracy: 0
              }) : n
            }), e.push({
              title: c("memepad.jetton.trading_volume"),
              value: p != null ? (() => {
                const {
                  value: _,
                  postfix: A
                } = T(p);
                return {
                  prefix: "$",
                  value: _,
                  postfix: A
                }
              })() : p
            })
          } else if ("price" in o.marketDetails.listRows) {
            const i = o.marketDetails.listRows.price,
              n = o.marketDetails.listRows.maxSupply,
              p = o.marketDetails.listRows.availableSupply;
            e.push({
              title: c("memepad.jetton.price"),
              value: i != null ? {
                prefix: "$",
                value: V(i, 10)
              } : i
            }), e.push({
              title: c("memepad.jetton.max_supply"),
              value: n != null ? T(n) : n
            }), e.push({
              title: c("memepad.jetton.available"),
              value: p != null ? b(p, {
                accuracy: 0
              }) : p
            })
          }
          return e
        });
      return (e, u) => {
        var _, A;
        const i = I,
          n = Y,
          p = Z;
        return t(), l("div", ae, [e.isReleased ? y("", !0) : (t(), l("div", oe, [r("div", ne, [r("div", le, [e.total !== void 0 && e.collected !== void 0 || e.percent ? (t(), l(h, {
          key: 1
        }, [e.percent !== void 0 ? (t(), l("span", ie, d(`${s(G)(e.percent)}%`), 1)) : y("", !0), e.total !== void 0 && e.collected !== void 0 ? (t(), l("span", re, d(`${("formatTon"in e?e.formatTon:s(w))(e.collected,2)}/${("formatTon"in e?e.formatTon:s(w))(e.total,2)} TON`), 1)) : y("", !0)], 64)) : (t(), f(i, {
          key: 0,
          class: "skeleton"
        }))]), (_ = e.marketDetails) != null && _.statistics ? (t(), l("div", ce, [r("div", pe, [S(n, {
          name: "personal",
          class: "icon"
        }), e.marketDetails.statistics.holdersCount ? (t(), l("span", de, d(("formatCount" in e ? e.formatCount : s(T))(e.marketDetails.statistics.holdersCount, 0).full), 1)) : (t(), l("span", me, "—"))]), r("div", ue, [S(n, {
          name: "transfer",
          class: "icon"
        }), e.marketDetails.statistics.transactionsCount ? (t(), l("span", _e, d(("formatCount" in e ? e.formatCount : s(T))(e.marketDetails.statistics.transactionsCount, 0).full), 1)) : (t(), l("span", ve, "—"))]), r("div", ke, [e.marketDetails.statistics.marketCap ? (t(), l(h, {
          key: 0
        }, [r("span", ye, d(("t" in e ? e.t : s(c))("memepad.jetton.stats.market_cap")), 1), r("span", fe, d(`$${("formatCount"in e?e.formatCount:s(T))(e.marketDetails.statistics.marketCap).full}`), 1)], 64)) : (t(), l("span", Te, "—"))])])) : (t(), f(p, {
          key: 1,
          text: ("t" in e ? e.t : s(c))("memepad.jetton.market_info_tooltip.text"),
          "text-min-width": 155,
          "text-max-width": 155
        }, {
          default: X(() => [r("button", he, [S(n, {
            name: "circle-help",
            class: "icon"
          }), r("span", Ae, d(("t" in e ? e.t : s(c))("memepad.jetton.market_info_tooltip.label")), 1)])]),
          _: 1
        }, 8, ["text"]))]), r("div", Ee, [r("div", {
          class: "line",
          style: F({
            width: `${e.percent}%`
          })
        }, null, 4)])])), s(m).length ? (t(), l("div", Le, [r("div", be, [r("div", Se, d(("t" in e ? e.t : s(c))("memepad.jetton.market_cap")), 1), (A = e.marketDetails) != null && A.marketCap ? (t(), l("div", Ce, [u[0] || (u[0] = r("span", {
          class: "dollar"
        }, "$", -1)), r("span", null, d(("formatCount" in e ? e.formatCount : s(T))(e.marketDetails.marketCap).full), 1)])) : (t(), f(i, {
          key: 1,
          class: "skeleton"
        }))]), r("div", we, [(t(!0), l(h, null, J(s(m), v => (t(), l("div", {
          key: v.title,
          class: "item"
        }, [r("span", De, d(v.title), 1), v.value === void 0 ? (t(), f(i, {
          key: 0,
          class: "skeleton"
        })) : (t(), l("span", Re, [typeof v.value == "string" ? (t(), l(h, {
          key: 0
        }, [D(d(v.value), 1)], 64)) : v.value === null ? (t(), l(h, {
          key: 1
        }, [D(" — ")], 64)) : (t(), l(h, {
          key: 2
        }, [v.value.prefix ? (t(), l("span", ge, d(v.value.prefix), 1)) : y("", !0), r("span", null, d(v.value.value), 1), v.value.postfix ? (t(), l("span", Oe, d(v.value.postfix), 1)) : y("", !0)], 64))]))]))), 128))])])) : y("", !0)])
      }
    }
  }),
  Ve = C(Ne, [
    ["__scopeId", "data-v-96338efe"]
  ]);
export {
  $e as _, We as a, Ke as b, Ve as c, Be as d, ze as e, Me as g, Q as m, Pe as r, Ue as s
};