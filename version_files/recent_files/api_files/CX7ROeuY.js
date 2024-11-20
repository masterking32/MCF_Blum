import {
  d as T,
  ab as y,
  P as A,
  a as c,
  m as _,
  e as n,
  f as r,
  B as E,
  b5 as w,
  c3 as C,
  C as L,
  b1 as O,
  b2 as k,
  b4 as m,
  n as F,
  aB as g,
  g as S,
  j as b,
  F as N,
  aY as f,
  c as I,
  aJ as R,
  L as v,
  bY as a
} from "./ulDqqcK5.js";
import {
  _ as W
} from "./BHm9mJG9.js";
const $ = T({
    __name: "TopUpButton",
    props: {
      jettonAddress: {},
      jettonShortname: {}
    },
    setup(e) {
      const o = e,
        s = y(),
        t = A().$webApp;

      function i(...l) {
        return l.includes(t.platform)
      }
      const d = () => {
        s.memepad.memepadTopupWallet({
          jettonShortname: o.jettonShortname,
          jettonAddress: o.jettonAddress
        });
        const l = w().tonConnectUI.value,
          p = (l.walletInfo || l.wallet).universalLink;
        C(p) && i("ios", "weba", "android", "tdesktop", "webk") ? t.openTelegramLink(p) : t.openLink(p)
      };
      return (l, u) => {
        const p = L;
        return c(), _(p, {
          label: ("t" in l ? l.t : n(r))("memepad.top_up_wallet_button"),
          fill: "",
          size: n(E).LARGE,
          onClick: d
        }, null, 8, ["label", "size"])
      }
    }
  }),
  U = T({
    __name: "StateButtonWrapper",
    props: {
      forceLoading: {
        type: Boolean,
        default: !1
      },
      buttonSize: {
        default: E.LARGE
      }
    },
    setup(e) {
      const o = O(),
        s = k();
      return (t, i) => {
        const d = L,
          l = W;
        return n(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in t ? t.WALLET_LOCAL_AND_REMOTE_STATUS : n(m)).DISCONNECTED ? (c(), _(d, {
          key: 0,
          label: ("t" in t ? t.t : n(r))("wallet.connect.btn"),
          fill: "",
          size: t.buttonSize,
          onClick: i[0] || (i[0] = u => n(s).runConnectionFlow())
        }, null, 8, ["label", "size"])) : n(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in t ? t.WALLET_LOCAL_AND_REMOTE_STATUS : n(m)).MUST_RECONNECT ? (c(), _(d, {
          key: 1,
          label: ("t" in t ? t.t : n(r))("wallet.reconnect.btn"),
          fill: "",
          size: t.buttonSize,
          onClick: i[1] || (i[1] = u => n(s).runConnectionFlow())
        }, null, 8, ["label", "size"])) : n(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in t ? t.WALLET_LOCAL_AND_REMOTE_STATUS : n(m)).LOADING || t.forceLoading ? (c(), _(l, {
          key: 2,
          class: F(["skeleton", `is-${t.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : n(o) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in t ? t.WALLET_LOCAL_AND_REMOTE_STATUS : n(m)).CONNECTED ? g(t.$slots, "default", {
          key: 3
        }, void 0, !0) : S("", !0)
      }
    }
  }),
  G = b(U, [
    ["__scopeId", "data-v-7e755239"]
  ]),
  M = T({
    __name: "Banner",
    props: {
      bannerFileKey: {}
    },
    setup(e) {
      const o = e,
        s = N(() => o.bannerFileKey ? f(o.bannerFileKey) : void 0);
      return (t, i) => n(s) ? (c(), I("div", {
        key: 0,
        class: "memepad-jetton-banner",
        style: R({
          backgroundImage: `url(${n(s)})`
        })
      }, null, 4)) : S("", !0)
    }
  }),
  V = b(M, [
    ["__scopeId", "data-v-352c6c64"]
  ]),
  K = e => {
    switch (e) {
      case a.TELEGRAM:
        return {
          display: r("memepad.social_providers.telegram.label"), placeholder: r("memepad.social_providers.telegram.placeholder"), icon: "social-providers/telegram", apiKey: "telegram", skipUrlValidation: !0
        };
      case a.TWITTER:
        return {
          display: r("memepad.social_providers.twitter.label"), placeholder: "x.com/", icon: "social-providers/x", apiKey: "x"
        };
      case a.INSTAGRAM:
        return {
          display: r("memepad.social_providers.instagram.label"), placeholder: "instagram.com/", icon: "social-providers/instagram", apiKey: "instagram"
        };
      case a.WEBSITE:
        return {
          display: r("memepad.social_providers.website.label"), placeholder: "https://", icon: "social-providers/web", apiKey: "web"
        };
      default:
        throw v("Invalid social provider")
    }
  },
  Y = (e, o) => {
    const s = A().$webApp;
    switch (e) {
      case a.TELEGRAM:
        return s.openTelegramLink(o);
      case a.TWITTER:
      case a.INSTAGRAM:
      case a.WEBSITE:
        return s.openLink(o);
      default:
        throw v("Invalid social provider")
    }
  },
  J = () => {
    const e = Object.values(a);
    return Object.fromEntries(e.map(o => [o, K(o)]))
  },
  h = () => {
    const e = Object.keys(a);
    return Object.fromEntries(e.map(o => [o, void 0]))
  },
  D = () => ({
    iconFileKey: void 0,
    name: void 0,
    ticker: void 0,
    description: void 0
  }),
  B = () => ({
    bannerFileKey: void 0,
    socialProviders: h(),
    isNSFW: !1
  }),
  j = () => ({
    share: 0,
    overview: void 0
  }),
  Z = {
    step1: D,
    step2: B,
    step3: j
  },
  q = e => ({
    ...e.step1,
    ...e.step2,
    ...e.step3
  }),
  H = e => ({
    step: 4,
    step1: {
      name: e.name,
      description: e.description,
      iconFileKey: e.iconFileKey,
      ticker: e.ticker
    },
    step2: {
      bannerFileKey: e.bannerFileKey,
      isNSFW: e.isNSFW,
      socialProviders: e.socialProviders
    },
    step3: {
      share: e.share,
      overview: e.overview
    }
  });
export {
  $ as _, G as a, V as b, Z as c, q as d, J as g, K as m, H as r, Y as s
};