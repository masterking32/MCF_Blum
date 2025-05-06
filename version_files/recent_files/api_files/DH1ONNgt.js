import {
  d as m,
  j as A,
  b6 as E,
  e as p,
  o as v,
  c as T,
  a as u,
  n as c,
  G as g,
  f as I,
  a4 as d,
  bq as a,
  C as o,
  h as b,
  bv as i,
  cd as y
} from "./BtsWxTOZ.js";
const _ = ["src"],
  F = m({
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
      emit: t
    }) {
      const s = t,
        r = A(() => e.bannerFileKey ? E(e.bannerFileKey) : void 0);
      return (n, l) => p(r) ? (v(), T("div", {
        key: 0,
        class: c(["memepad-jetton-banner", {
          rounded: n.rounded
        }])
      }, [u("img", {
        src: p(r),
        alt: "",
        class: c({
          rounded: n.rounded
        }),
        onLoad: l[0] || (l[0] = P => s("load"))
      }, null, 42, _)], 2)) : g("", !0)
    }
  }),
  G = I(F, [
    ["__scopeId", "data-v-fc07cf24"]
  ]);
var S = (e => (e.AI_AGENT = "AI_AGENT", e.TOKEN_INFO = "TOKEN_INFO", e.PERSONALIZE_TOKEN = "PERSONALIZE_TOKEN", e.REVIEW = "REVIEW", e))(S || {});
const w = e => {
    switch (e) {
      case a.TELEGRAM:
        return {
          display: o("memepad.social_providers.telegram.label"), placeholder: o("memepad.social_providers.telegram.placeholder"), icon: "social-providers/telegram", apiKey: "telegram", skipUrlValidation: !0
        };
      case a.TWITTER:
        return {
          display: o("memepad.social_providers.twitter.label"), placeholder: "x.com/", icon: "social-providers/x", apiKey: "x"
        };
      case a.INSTAGRAM:
        return {
          display: o("memepad.social_providers.instagram.label"), placeholder: "instagram.com/", icon: "social-providers/instagram", apiKey: "instagram"
        };
      case a.WEBSITE:
        return {
          display: o("memepad.social_providers.website.label"), placeholder: "https://", icon: "social-providers/web", apiKey: "web"
        };
      default:
        throw d("Invalid social provider")
    }
  },
  M = (e, t) => {
    const s = b().$webApp;
    switch (e) {
      case a.TELEGRAM:
        return s.openTelegramLink(t);
      case a.TWITTER:
      case a.INSTAGRAM:
      case a.WEBSITE:
        return s.openLink(t);
      default:
        throw d("Invalid social provider")
    }
  },
  L = () => {
    const e = Object.values(a);
    return Object.fromEntries(e.map(t => [t, w(t)]))
  },
  k = () => {
    const e = Object.keys(a);
    return Object.fromEntries(e.map(t => [t, void 0]))
  },
  N = () => ({
    aiAgentEnable: !0,
    aiAgentSettings: {
      traits: {
        [i.MEMEPAD_AI_AGENT_TRAITS.SAD]: 0,
        [i.MEMEPAD_AI_AGENT_TRAITS.CHEEKY]: 0,
        [i.MEMEPAD_AI_AGENT_TRAITS.KIND]: 0
      },
      prompt: void 0
    }
  }),
  R = () => ({
    aiAgentEnable: !1
  }),
  K = () => ({
    iconFileKey: void 0,
    name: void 0,
    ticker: void 0,
    description: void 0,
    networkType: y.TON,
    promptId: void 0
  }),
  h = () => ({
    bannerFileKey: void 0,
    socialProviders: k(),
    isNSFW: !1
  }),
  O = () => ({
    share: 0,
    overview: void 0
  }),
  W = {
    stepAiAgentEnabled: N,
    stepAiAgentDisabled: R,
    stepTokenInfo: K,
    stepPersonalizeToken: h,
    stepReview: O
  },
  B = e => ({
    ...e.stepAiAgent,
    ...e.stepTokenInfo,
    ...e.stepPersonalizeToken,
    ...e.stepReview
  });

function D(e, t) {
  return {
    step: "REVIEW",
    stepAiAgent: {
      ...t ? {
        aiAgentEnable: !0,
        aiAgentSettings: e.aiAgentSettings
      } : {
        aiAgentEnable: !1
      }
    },
    stepTokenInfo: {
      name: e.name,
      description: e.description,
      iconFileKey: e.iconFileKey,
      ticker: e.ticker,
      networkType: e.networkType,
      promptId: e.promptId
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
  S as M, G as _, B as a, W as b, L as g, w as m, D as r, M as s
};