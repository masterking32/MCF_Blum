import {
  d as c,
  j as p,
  aZ as l,
  e as t,
  o as d,
  c as m,
  n as v,
  aF as u,
  D as y,
  f as E,
  V as i,
  bh as s,
  z as o,
  h as b,
  c1 as _
} from "./CCUb6gF6.js";
const F = c({
    __name: "Banner",
    props: {
      bannerFileKey: {
        default: void 0
      },
      rounded: {
        type: Boolean,
        default: !0
      }
    },
    setup(e) {
      const a = e,
        r = p(() => a.bannerFileKey ? l(a.bannerFileKey) : void 0);
      return (n, k) => t(r) ? (d(), m("div", {
        key: 0,
        class: v(["memepad-jetton-banner", {
          rounded: n.rounded
        }]),
        style: u({
          backgroundImage: `url(${t(r)})`
        })
      }, null, 6)) : y("", !0)
    }
  }),
  A = E(F, [
    ["__scopeId", "data-v-48576aea"]
  ]),
  g = e => {
    switch (e) {
      case s.TELEGRAM:
        return {
          display: o("memepad.social_providers.telegram.label"), placeholder: o("memepad.social_providers.telegram.placeholder"), icon: "social-providers/telegram", apiKey: "telegram", skipUrlValidation: !0
        };
      case s.TWITTER:
        return {
          display: o("memepad.social_providers.twitter.label"), placeholder: "x.com/", icon: "social-providers/x", apiKey: "x"
        };
      case s.INSTAGRAM:
        return {
          display: o("memepad.social_providers.instagram.label"), placeholder: "instagram.com/", icon: "social-providers/instagram", apiKey: "instagram"
        };
      case s.WEBSITE:
        return {
          display: o("memepad.social_providers.website.label"), placeholder: "https://", icon: "social-providers/web", apiKey: "web"
        };
      default:
        throw i("Invalid social provider")
    }
  },
  I = (e, a) => {
    const r = b().$webApp;
    switch (e) {
      case s.TELEGRAM:
        return r.openTelegramLink(a);
      case s.TWITTER:
      case s.INSTAGRAM:
      case s.WEBSITE:
        return r.openLink(a);
      default:
        throw i("Invalid social provider")
    }
  },
  P = () => {
    const e = Object.values(s);
    return Object.fromEntries(e.map(a => [a, g(a)]))
  },
  T = () => {
    const e = Object.keys(s);
    return Object.fromEntries(e.map(a => [a, void 0]))
  },
  S = () => ({
    iconFileKey: void 0,
    name: void 0,
    ticker: void 0,
    description: void 0,
    networkType: _.TON
  }),
  h = () => ({
    bannerFileKey: void 0,
    socialProviders: T(),
    isNSFW: !1
  }),
  w = () => ({
    share: 0,
    overview: void 0
  }),
  M = {
    step1: S,
    step2: h,
    step3: w
  },
  N = e => ({
    ...e.step1,
    ...e.step2,
    ...e.step3
  }),
  R = e => ({
    step: 4,
    step1: {
      name: e.name,
      description: e.description,
      iconFileKey: e.iconFileKey,
      ticker: e.ticker,
      networkType: e.networkType
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
  A as _, M as a, N as b, P as g, g as m, R as r, I as s
};