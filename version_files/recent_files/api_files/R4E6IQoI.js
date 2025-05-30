import {
  m as Z,
  s as x,
  _ as ee
} from "./DNbIem4T.js";
import {
  _ as te
} from "./CGCoXvgD.js";
import {
  d as se,
  bp as ne,
  a5 as y,
  j as c,
  E as oe,
  bl as f,
  J as k,
  K as ae,
  o as r,
  c as d,
  a as s,
  e as t,
  a8 as ie,
  z as j,
  G as v,
  b as i,
  t as a,
  n as w,
  m as F,
  A as l,
  F as re,
  q as le,
  bq as N,
  a$ as ce,
  D as R,
  ao as D,
  _ as de,
  U as me,
  f as pe
} from "./jPANuN8i.js";
import {
  _ as ue
} from "./DMkCWOMx.js";
import {
  _ as _e
} from "./DAA5O0Nb.js";
import {
  _ as ve
} from "./DjUuWGLO.js";
import {
  _ as be
} from "./oY7SSWll.js";
import {
  u as he,
  a as ge
} from "./BNQ3AqER.js";
import "./CCM4Z8NC.js";
import "./Bjz_74gY.js";
import "./ClDzspln.js";
import "./CF4Aa-Pt.js";
import "./BpAE4W84.js";
import "./BdtjkSyI.js";
const Ae = {
    class: "memepad-jetton-about"
  },
  fe = ["src"],
  ye = {
    class: "inner"
  },
  ke = {
    class: "image"
  },
  je = {
    class: "ticker"
  },
  Ee = {
    class: "description"
  },
  Se = {
    key: 0,
    class: "more"
  },
  Ce = {
    class: "socials"
  },
  Me = ["disabled", "onClick"],
  Te = {
    class: "label"
  },
  Ie = {
    key: 0,
    class: "nsfw"
  },
  we = {
    class: "label"
  },
  Fe = {
    key: 0,
    class: "ai-agent"
  },
  Ne = {
    class: "image"
  },
  Re = {
    class: "title"
  },
  De = {
    key: 0,
    class: "progress"
  },
  Le = {
    class: "label"
  },
  Pe = {
    class: "contract"
  },
  Be = {
    class: "inner"
  },
  Je = {
    class: "title"
  },
  Oe = {
    class: "address"
  },
  We = {
    class: "reactions"
  },
  $e = {
    class: "title"
  },
  He = {
    class: "subtitle"
  },
  Ke = {
    key: 1,
    class: "holders"
  },
  Ge = {
    class: "label"
  },
  Ue = {
    key: 2,
    class: "transactions"
  },
  Ve = {
    class: "label"
  },
  ze = {
    class: "disclaimer"
  },
  qe = se({
    inheritAttrs: !1,
    __name: "index",
    emits: ["share", "copy"],
    setup(Qe) {
      const b = ne(),
        L = y(),
        {
          addresses: P
        } = he(),
        B = c(() => {
          var e;
          return (e = P.value) == null ? void 0 : e.isAvailableAI
        }),
        o = c(() => b.jetton),
        E = c(() => b.jettonShortname),
        S = c(() => b.jettonInformation),
        J = c(() => b.jettonTransactions),
        O = c(() => b.jettonHolders),
        h = c(() => b.jettonAiAgentState),
        C = c(() => o.value.source === oe.BLUM),
        {
          showFullDescription: g,
          showDescriptionMore: M,
          descriptionWrapperEl: W
        } = q(),
        {
          loadAiAgentSocialsActivateLinkAndOpen: $,
          loadAiAgentFineTuneLinkAndOpen: H,
          isAiAgentStatusBannerLoading: K
        } = ge(),
        T = c(() => K(o.value.shortname)),
        G = () => (y().memepad.memepadJettonAiSocialsActivate({
          source: "tokenpage"
        }), $(o.value.shortname)),
        U = () => (y().memepad.memepadJettonAiFineTuneButtonClick(), H(o.value.shortname)),
        V = c(() => [f.TELEGRAM, f.TWITTER, f.INSTAGRAM, f.WEBSITE].map(e => ({
          ...Z(e),
          type: e
        })).map(e => {
          var _;
          const n = (_ = o.value.socials) == null ? void 0 : _.find(u => u.type === e.type);
          return {
            icon: e.icon,
            type: e.type,
            display: e.display,
            onClick: n ? () => x(e.type, n.url) : void 0
          }
        }).sort((e, n) => +!!n.onClick - +!!e.onClick)),
        z = e => {
          var n;
          L.memepad.memepadJettonSocialClick({
            source: e.type
          }), (n = e.onClick) == null || n.call(e)
        };

      function q() {
        const e = k(!1),
          n = k(!1),
          _ = k(null);
        return ae(() => _.value, u => {
          if (!u) return;
          const m = parseFloat(getComputedStyle(u).lineHeight),
            A = u.scrollHeight;
          n.value = A > m * 2
        }, {
          immediate: !0
        }), {
          showFullDescription: e,
          showDescriptionMore: n,
          descriptionWrapperEl: _
        }
      }
      return (e, n) => {
        const _ = ee,
          u = te,
          m = de,
          A = ue,
          Q = _e,
          I = me,
          X = ve,
          Y = be;
        return r(), d("div", Ae, [s("div", {
          class: w(["first", {
            "has-banner": t(o).bannerFileKey
          }])
        }, [s("img", {
          src: ("imgResolver" in e ? e.imgResolver : t(ie))("memepad/about-grid", "svg"),
          alt: "Background grid room",
          class: "bg-room"
        }, null, 8, fe), s("div", ye, [t(o).bannerFileKey ? (r(), j(_, {
          key: 0,
          "banner-file-key": t(o).bannerFileKey,
          class: "banner",
          rounded: !1
        }, null, 8, ["banner-file-key"])) : v("", !0), s("div", ke, [i(u, {
          jetton: t(o),
          size: 96
        }, null, 8, ["jetton"])]), s("div", je, a(t(o).ticker), 1)]), s("button", {
          type: "button",
          class: "reset share",
          onClick: n[0] || (n[0] = p => e.$emit("share"))
        }, [i(m, {
          name: "share",
          class: "icon"
        })])], 2), s("div", {
          ref_key: "descriptionWrapperEl",
          ref: W,
          class: w(["description-wrapper", {
            "show-full": t(g)
          }])
        }, [s("div", Ee, [F(a(t(o).description) + " ", 1), s("span", null, [t(M) && t(g) ? (r(), d("button", {
          key: 0,
          type: "button",
          class: "reset less-btn",
          onClick: n[1] || (n[1] = p => g.value = !1)
        }, a(("t" in e ? e.t : t(l))("memepad.about.description.less")), 1)) : v("", !0)])]), t(M) && !t(g) ? (r(), d("div", Se, [n[4] || (n[4] = s("div", {
          class: "shadow"
        }, null, -1)), s("button", {
          type: "button",
          class: "reset more-btn",
          onClick: n[2] || (n[2] = p => g.value = !0)
        }, a(("t" in e ? e.t : t(l))("memepad.about.description.more")), 1)])) : v("", !0)], 2), s("div", Ce, [(r(!0), d(re, null, le(t(V), p => (r(), d("button", {
          key: p.type,
          type: "button",
          class: "item reset",
          disabled: !p.onClick,
          onClick: Xe => z(p)
        }, [i(m, {
          name: p.icon,
          class: "icon"
        }, null, 8, ["name"]), s("div", Te, a(p.display), 1)], 8, Me))), 128)), t(o).isNSFW ? (r(), d("div", Ie, [i(m, {
          name: "stop-sign",
          class: "icon"
        }), s("span", we, a(("t" in e ? e.t : t(l))("memepad.jetton.nsfw")), 1)])) : v("", !0)]), t(B) && (t(h).status === "in_progress" || t(h).status === "ready" && t(h).data.isMyAgent && t(h).data.status !== t(N).MEMEPAD_AI_AGENT_STATUS.OFFLINE) ? (r(), d("div", Fe, [s("div", Ne, [i(u, {
          jetton: t(o),
          size: 36
        }, null, 8, ["jetton"])]), s("div", Re, a(("t" in e ? e.t : t(l))("memepad.jetton.about.agent_banner.label", {
          ticker: t(o).ticker
        })), 1), t(h).status === "in_progress" ? (r(), d("div", De, [i(m, {
          name: "calendar-clock",
          class: "icon"
        }), s("div", Le, a(("t" in e ? e.t : t(l))("memepad.jetton.about.agent_banner.in_progress")), 1)])) : t(h).data.status === t(N).MEMEPAD_AI_AGENT_STATUS.ONLINE ? (r(), j(A, {
          key: 1,
          label: ("t" in e ? e.t : t(l))("memepad.ai_agent.fine_tune_social_media_posting"),
          type: "default",
          "can-claim": "",
          loading: t(T),
          "claim-fn": U
        }, null, 8, ["label", "loading"])) : (r(), j(A, {
          key: 2,
          label: ("t" in e ? e.t : t(l))("memepad.ai_agent.active_social_media_posting_short"),
          type: "default",
          "can-claim": "",
          loading: t(T),
          "claim-fn": G
        }, null, 8, ["label", "loading"]))])) : v("", !0), s("div", Pe, [s("div", Be, [s("div", Je, a(("t" in e ? e.t : t(l))("memepad.about.contract_address.title")), 1), s("div", Oe, a(("sliceWalletAddress" in e ? e.sliceWalletAddress : t(ce))(t(o).address)), 1)]), s("button", {
          type: "button",
          class: "reset copy-btn",
          onClick: n[3] || (n[3] = p => e.$emit("copy"))
        }, [i(m, {
          name: "edit-copy-2",
          class: "icon"
        })])]), s("div", We, [s("div", $e, a(("t" in e ? e.t : t(l))("memepad.about.reactions.title")), 1), s("div", He, a(("t" in e ? e.t : t(l))("memepad.about.reactions.subtitle")), 1), i(Q, {
          jetton: t(o),
          mode: "about"
        }, null, 8, ["jetton"])]), t(C) ? (r(), d("div", Ke, [i(I, {
          to: ("useRouter" in e ? e.useRouter : t(D))().resolve({
            name: "memepad-jetton-shortname-about-holders",
            params: {
              shortname: t(E)
            }
          }),
          class: "header"
        }, {
          default: R(() => [s("div", Ge, a(("t" in e ? e.t : t(l))("memepad.jetton.holders")), 1), i(m, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), i(X, {
          jetton: t(o),
          "jetton-holders": t(O),
          "jetton-information": t(S),
          preview: ""
        }, null, 8, ["jetton", "jetton-holders", "jetton-information"])])) : v("", !0), t(C) ? (r(), d("div", Ue, [i(I, {
          to: ("useRouter" in e ? e.useRouter : t(D))().resolve({
            name: "memepad-jetton-shortname-about-transactions",
            params: {
              shortname: t(E)
            }
          }),
          class: "header"
        }, {
          default: R(() => [s("div", Ve, a(("t" in e ? e.t : t(l))("memepad.jetton.transactions")), 1), i(m, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), i(Y, {
          transactions: t(J),
          "jetton-information": t(S),
          preview: ""
        }, null, 8, ["transactions", "jetton-information"])])) : v("", !0), s("div", ze, [F(a(("t" in e ? e.t : t(l))("memepad.about.disclaimer")) + " ", 1), n[5] || (n[5] = s("i", {
          class: "warning"
        }, null, -1))])])
      }
    }
  }),
  mt = pe(qe, [
    ["__scopeId", "data-v-74be7426"]
  ]);
export {
  mt as
  default
};