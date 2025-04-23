import {
  m as x,
  s as ee,
  _ as te
} from "./96YLpMDA.js";
import {
  _ as se
} from "./ClGR2wvf.js";
import {
  d as ne,
  bu as oe,
  a9 as y,
  j as r,
  bq as f,
  y as k,
  V as ae,
  o as c,
  c as _,
  a as s,
  e as t,
  X as ie,
  N as j,
  G as g,
  b as i,
  t as a,
  n as I,
  m as R,
  C as l,
  F as le,
  q as re,
  bv as w,
  b4 as ce,
  D as F,
  ae as N,
  _ as de,
  I as me,
  f as pe
} from "./C8Db5TeO.js";
import {
  _ as ue
} from "./CKwmsQLQ.js";
import {
  _ as _e
} from "./BbJjWRJd.js";
import {
  _ as ve
} from "./CHAaxWl6.js";
import {
  _ as be
} from "./Cn_rKp4T.js";
import {
  u as he,
  a as ge
} from "./C86C4SjP.js";
import "./DpJe3PZ1.js";
import "./NaA5rvRX.js";
import "./BnIMAW9o.js";
import "./Ct0-pT7_.js";
import "./8YEM_4kX.js";
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
  Se = {
    class: "description"
  },
  Ce = {
    key: 0,
    class: "more"
  },
  Ee = {
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
  Re = {
    class: "label"
  },
  we = {
    key: 0,
    class: "ai-agent"
  },
  Fe = {
    class: "image"
  },
  Ne = {
    class: "title"
  },
  De = {
    key: 0,
    class: "progress"
  },
  Je = {
    class: "label"
  },
  Pe = {
    class: "contract"
  },
  Le = {
    class: "inner"
  },
  We = {
    class: "title"
  },
  Be = {
    class: "address"
  },
  $e = {
    class: "reactions"
  },
  He = {
    class: "title"
  },
  Oe = {
    class: "subtitle"
  },
  Ve = {
    class: "holders"
  },
  Ge = {
    class: "label"
  },
  Ke = {
    class: "transactions"
  },
  ze = {
    class: "label"
  },
  qe = {
    class: "disclaimer"
  },
  Ue = ne({
    inheritAttrs: !1,
    __name: "index",
    emits: ["share", "copy"],
    setup(Xe) {
      const p = oe(),
        D = y(),
        {
          addresses: J
        } = he(),
        P = r(() => {
          var e;
          return (e = J.value) == null ? void 0 : e.isAvailableAI
        }),
        o = r(() => p.jetton),
        S = r(() => p.jettonShortname),
        C = r(() => p.jettonInformation),
        L = r(() => p.jettonTransactions),
        W = r(() => p.jettonHolders),
        B = r(() => p.jettonReactions),
        b = r(() => p.jettonAiAgentState),
        $ = r(() => p.updateJettonReaction),
        {
          showFullDescription: h,
          showDescriptionMore: E,
          descriptionWrapperEl: H
        } = X(),
        {
          loadAiAgentSocialsActivateLinkAndOpen: O,
          loadAiAgentFineTuneLinkAndOpen: V,
          isAiAgentStatusBannerLoading: G
        } = ge(),
        M = r(() => G(o.value.shortname)),
        K = () => (y().memepad.memepadJettonAiSocialsActivate({
          source: "tokenpage"
        }), O(o.value.shortname)),
        z = () => (y().memepad.memepadJettonAiFineTuneButtonClick(), V(o.value.shortname)),
        q = r(() => [f.TELEGRAM, f.TWITTER, f.INSTAGRAM, f.WEBSITE].map(e => ({
          ...x(e),
          type: e
        })).map(e => {
          var v;
          const n = (v = o.value.socials) == null ? void 0 : v.find(u => u.type === e.type);
          return {
            icon: e.icon,
            type: e.type,
            display: e.display,
            onClick: n ? () => ee(e.type, n.url) : void 0
          }
        }).sort((e, n) => +!!n.onClick - +!!e.onClick)),
        U = e => {
          var n;
          D.memepad.memepadJettonSocialClick({
            source: e.type
          }), (n = e.onClick) == null || n.call(e)
        };

      function X() {
        const e = k(!1),
          n = k(!1),
          v = k(null);
        return ae(() => v.value, u => {
          if (!u) return;
          const d = parseFloat(getComputedStyle(u).lineHeight),
            A = u.scrollHeight;
          n.value = A > d * 2
        }, {
          immediate: !0
        }), {
          showFullDescription: e,
          showDescriptionMore: n,
          descriptionWrapperEl: v
        }
      }
      return (e, n) => {
        const v = te,
          u = se,
          d = de,
          A = ue,
          Q = _e,
          T = me,
          Y = ve,
          Z = be;
        return c(), _("div", Ae, [s("div", {
          class: I(["first", {
            "has-banner": t(o).bannerFileKey
          }])
        }, [s("img", {
          src: ("imgResolver" in e ? e.imgResolver : t(ie))("memepad/about-grid", "svg"),
          alt: "Background grid room",
          class: "bg-room"
        }, null, 8, fe), s("div", ye, [t(o).bannerFileKey ? (c(), j(v, {
          key: 0,
          "banner-file-key": t(o).bannerFileKey,
          class: "banner",
          rounded: !1
        }, null, 8, ["banner-file-key"])) : g("", !0), s("div", ke, [i(u, {
          jetton: t(o),
          size: 96
        }, null, 8, ["jetton"])]), s("div", je, a(t(o).ticker), 1)]), s("button", {
          type: "button",
          class: "reset share",
          onClick: n[0] || (n[0] = m => e.$emit("share"))
        }, [i(d, {
          name: "share",
          class: "icon"
        })])], 2), s("div", {
          ref_key: "descriptionWrapperEl",
          ref: H,
          class: I(["description-wrapper", {
            "show-full": t(h)
          }])
        }, [s("div", Se, [R(a(t(o).description) + " ", 1), s("span", null, [t(E) && t(h) ? (c(), _("button", {
          key: 0,
          type: "button",
          class: "reset less-btn",
          onClick: n[1] || (n[1] = m => h.value = !1)
        }, a(("t" in e ? e.t : t(l))("memepad.about.description.less")), 1)) : g("", !0)])]), t(E) && !t(h) ? (c(), _("div", Ce, [n[4] || (n[4] = s("div", {
          class: "shadow"
        }, null, -1)), s("button", {
          type: "button",
          class: "reset more-btn",
          onClick: n[2] || (n[2] = m => h.value = !0)
        }, a(("t" in e ? e.t : t(l))("memepad.about.description.more")), 1)])) : g("", !0)], 2), s("div", Ee, [(c(!0), _(le, null, re(t(q), m => (c(), _("button", {
          key: m.type,
          type: "button",
          class: "item reset",
          disabled: !m.onClick,
          onClick: Qe => U(m)
        }, [i(d, {
          name: m.icon,
          class: "icon"
        }, null, 8, ["name"]), s("div", Te, a(m.display), 1)], 8, Me))), 128)), t(o).isNSFW ? (c(), _("div", Ie, [i(d, {
          name: "stop-sign",
          class: "icon"
        }), s("span", Re, a(("t" in e ? e.t : t(l))("memepad.jetton.nsfw")), 1)])) : g("", !0)]), t(P) && (t(b).status === "in_progress" || t(b).status === "ready" && t(b).data.isMyAgent && t(b).data.status !== t(w).MEMEPAD_AI_AGENT_STATUS.OFFLINE) ? (c(), _("div", we, [s("div", Fe, [i(u, {
          jetton: t(o),
          size: 36
        }, null, 8, ["jetton"])]), s("div", Ne, a(("t" in e ? e.t : t(l))("memepad.jetton.about.agent_banner.label", {
          ticker: t(o).ticker
        })), 1), t(b).status === "in_progress" ? (c(), _("div", De, [i(d, {
          name: "calendar-clock",
          class: "icon"
        }), s("div", Je, a(("t" in e ? e.t : t(l))("memepad.jetton.about.agent_banner.in_progress")), 1)])) : t(b).data.status === t(w).MEMEPAD_AI_AGENT_STATUS.ONLINE ? (c(), j(A, {
          key: 1,
          label: ("t" in e ? e.t : t(l))("memepad.ai_agent.fine_tune_social_media_posting"),
          type: "default",
          "can-claim": "",
          loading: t(M),
          "claim-fn": z
        }, null, 8, ["label", "loading"])) : (c(), j(A, {
          key: 2,
          label: ("t" in e ? e.t : t(l))("memepad.ai_agent.active_social_media_posting_short"),
          type: "default",
          "can-claim": "",
          loading: t(M),
          "claim-fn": K
        }, null, 8, ["label", "loading"]))])) : g("", !0), s("div", Pe, [s("div", Le, [s("div", We, a(("t" in e ? e.t : t(l))("memepad.about.contract_address.title")), 1), s("div", Be, a(("sliceWalletAddress" in e ? e.sliceWalletAddress : t(ce))(t(o).address)), 1)]), s("button", {
          type: "button",
          class: "reset copy-btn",
          onClick: n[3] || (n[3] = m => e.$emit("copy"))
        }, [i(d, {
          name: "edit-copy-2",
          class: "icon"
        })])]), s("div", $e, [s("div", He, a(("t" in e ? e.t : t(l))("memepad.about.reactions.title")), 1), s("div", Oe, a(("t" in e ? e.t : t(l))("memepad.about.reactions.subtitle")), 1), i(Q, {
          reactions: t(B),
          "update-callback": t($),
          type: "about",
          class: "list"
        }, null, 8, ["reactions", "update-callback"])]), s("div", Ve, [i(T, {
          to: ("useRouter" in e ? e.useRouter : t(N))().resolve({
            name: "memepad-jetton-shortname-about-holders",
            params: {
              shortname: t(S)
            }
          }),
          class: "header"
        }, {
          default: F(() => [s("div", Ge, a(("t" in e ? e.t : t(l))("memepad.jetton.holders")), 1), i(d, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), i(Y, {
          jetton: t(o),
          "jetton-holders": t(W),
          "jetton-information": t(C),
          preview: ""
        }, null, 8, ["jetton", "jetton-holders", "jetton-information"])]), s("div", Ke, [i(T, {
          to: ("useRouter" in e ? e.useRouter : t(N))().resolve({
            name: "memepad-jetton-shortname-about-transactions",
            params: {
              shortname: t(S)
            }
          }),
          class: "header"
        }, {
          default: F(() => [s("div", ze, a(("t" in e ? e.t : t(l))("memepad.jetton.transactions")), 1), i(d, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), i(Z, {
          transactions: t(L),
          "jetton-information": t(C),
          preview: ""
        }, null, 8, ["transactions", "jetton-information"])]), s("div", qe, [R(a(("t" in e ? e.t : t(l))("memepad.about.disclaimer")) + " ", 1), n[5] || (n[5] = s("i", {
          class: "warning"
        }, null, -1))])])
      }
    }
  }),
  dt = pe(Ue, [
    ["__scopeId", "data-v-784337de"]
  ]);
export {
  dt as
  default
};