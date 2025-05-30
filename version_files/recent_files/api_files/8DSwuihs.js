import {
  d,
  j as m,
  b1 as v,
  e as p,
  o as u,
  c as E,
  a as y,
  n as c,
  G as T,
  f as I,
  ag as l,
  bl as r,
  A as a,
  h as b,
  c6 as F
} from "./Q7ZkUOCs.js";
const k = ["src"],
  g = d({
    __name: "Banner",
    props: {
      bannerFileKey: {
        default: () => {}
      },
      rounded: {
        type: Boolean,
        default: !0
      }
    },
    emits: ["load"],
    setup(e, {
      emit: o
    }) {
      const s = o,
        t = m(() => e.bannerFileKey ? v(e.bannerFileKey) : void 0);
      return (i, n) => p(t) ? (u(), E("div", {
        key: 0,
        class: c(["memepad-jetton-banner", {
          rounded: i.rounded
        }])
      }, [y("img", {
        src: p(t),
        alt: "",
        class: c({
          rounded: i.rounded
        }),
        onLoad: n[0] || (n[0] = O => s("load"))
      }, null, 42, k)], 2)) : T("", !0)
    }
  }),
  h = I(g, [
    ["__scopeId", "data-v-fc07cf24"]
  ]);
var w = (e => (e.TOKEN_INFO = "TOKEN_INFO", e.PERSONALIZE_TOKEN = "PERSONALIZE_TOKEN", e.REVIEW = "REVIEW", e))(w || {});
const _ = e => {
    switch (e) {
      case r.TELEGRAM:
        return {
          display: a("memepad.social_providers.telegram.label"), placeholder: a("memepad.social_providers.telegram.placeholder"), icon: "social-providers/telegram", apiKey: "telegram", skipUrlValidation: !0
        };
      case r.TWITTER:
        return {
          display: a("memepad.social_providers.twitter.label"), placeholder: "x.com/", icon: "social-providers/x", apiKey: "x"
        };
      case r.INSTAGRAM:
        return {
          display: a("memepad.social_providers.instagram.label"), placeholder: "instagram.com/", icon: "social-providers/instagram", apiKey: "instagram"
        };
      case r.WEBSITE:
        return {
          display: a("memepad.social_providers.website.label"), placeholder: "https://", icon: "social-providers/web", apiKey: "web"
        };
      default:
        throw l("Invalid social provider")
    }
  },
  P = (e, o) => {
    const s = b().$webApp;
    switch (e) {
      case r.TELEGRAM:
        return s.openTelegramLink(o);
      case r.TWITTER:
      case r.INSTAGRAM:
      case r.WEBSITE:
        return s.openLink(o);
      default:
        throw l("Invalid social provider")
    }
  },
  f = () => {
    const e = Object.values(r);
    return Object.fromEntries(e.map(o => [o, _(o)]))
  },
  K = () => {
    const e = Object.keys(r);
    return Object.fromEntries(e.map(o => [o, void 0]))
  },
  R = () => ({
    iconFileKey: void 0,
    name: void 0,
    ticker: void 0,
    description: void 0,
    networkType: F.TON,
    promptId: void 0,
    promptExpireAt: void 0
  }),
  A = () => ({
    bannerFileKey: void 0,
    socialProviders: K(),
    isNSFW: !1
  }),
  N = () => ({
    share: 0,
    overview: void 0
  }),
  x = {
    stepTokenInfo: R,
    stepPersonalizeToken: A,
    stepReview: N
  },
  W = (e, o) => ({
    ...e.stepTokenInfo,
    ...e.stepPersonalizeToken,
    ...e.stepReview,
    withAgent: o
  });

function L(e) {
  return {
    step: "REVIEW",
    stepTokenInfo: {
      name: e.name,
      description: e.description,
      iconFileKey: e.iconFileKey,
      ticker: e.ticker,
      networkType: e.networkType,
      promptId: e.promptId,
      promptExpireAt: e.promptExpireAt
    },
    stepPersonalizeToken: {
      bannerFileKey: e.bannerFileKey,
      isNSFW: e.isNSFW,
      socialProviders: e.socialProviders
    },
    stepReview: {
      share: e.share,
      overview: e.overview
    }
  }
}
export {
  w as M, h as _, W as a, x as b, f as g, _ as m, L as r, P as s
};