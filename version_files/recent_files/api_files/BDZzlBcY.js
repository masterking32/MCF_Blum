import {
  d as c,
  F as n,
  aZ as p,
  e as o,
  a as l,
  c as d,
  aL as m,
  g as v,
  j as y,
  L as i,
  bi as s,
  f as t,
  P as u
} from "./Dq6b0IKe.js";
const b = c({
    __name: "Banner",
    props: {
      bannerFileKey: {}
    },
    setup(e) {
      const a = e,
        r = n(() => a.bannerFileKey ? p(a.bannerFileKey) : void 0);
      return (h, w) => o(r) ? (l(), d("div", {
        key: 0,
        class: "memepad-jetton-banner",
        style: m({
          backgroundImage: `url(${o(r)})`
        })
      }, null, 4)) : v("", !0)
    }
  }),
  T = y(b, [
    ["__scopeId", "data-v-352c6c64"]
  ]),
  F = e => {
    switch (e) {
      case s.TELEGRAM:
        return {
          display: t("memepad.social_providers.telegram.label"), placeholder: t("memepad.social_providers.telegram.placeholder"), icon: "social-providers/telegram", apiKey: "telegram", skipUrlValidation: !0
        };
      case s.TWITTER:
        return {
          display: t("memepad.social_providers.twitter.label"), placeholder: "x.com/", icon: "social-providers/x", apiKey: "x"
        };
      case s.INSTAGRAM:
        return {
          display: t("memepad.social_providers.instagram.label"), placeholder: "instagram.com/", icon: "social-providers/instagram", apiKey: "instagram"
        };
      case s.WEBSITE:
        return {
          display: t("memepad.social_providers.website.label"), placeholder: "https://", icon: "social-providers/web", apiKey: "web"
        };
      default:
        throw i("Invalid social provider")
    }
  },
  A = (e, a) => {
    const r = u().$webApp;
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
  I = () => {
    const e = Object.values(s);
    return Object.fromEntries(e.map(a => [a, F(a)]))
  },
  _ = () => {
    const e = Object.keys(s);
    return Object.fromEntries(e.map(a => [a, void 0]))
  },
  g = () => ({
    iconFileKey: void 0,
    name: void 0,
    ticker: void 0,
    description: void 0
  }),
  E = () => ({
    bannerFileKey: void 0,
    socialProviders: _(),
    isNSFW: !1
  }),
  S = () => ({
    share: 0,
    overview: void 0
  }),
  k = {
    step1: g,
    step2: E,
    step3: S
  },
  P = e => ({
    ...e.step1,
    ...e.step2,
    ...e.step3
  }),
  x = e => ({
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
  T as _, k as a, P as b, I as g, F as m, x as r, A as s
};