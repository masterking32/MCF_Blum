import {
  m as x,
  s as ee,
  _ as te
} from "./BSmYJVwZ.js";
import {
  _ as se
} from "./BRPOV8bC.js";
import {
  d as ne,
  bt as oe,
  a8 as y,
  j as r,
  bp as f,
  y as k,
  U as ae,
  o as c,
  c as _,
  a as s,
  e as t,
  W as ie,
  M as j,
  E as g,
  b as i,
  t as a,
  n as R,
  m as I,
  C as l,
  F as le,
  q as re,
  bu as w,
  b3 as ce,
  D as F,
  ab as N,
  _ as de,
  H as me,
  f as pe
} from "./DraiJYMw.js";
import {
  _ as ue
} from "./D2rt8dJr.js";
import {
  _ as _e
} from "./ByrQ0erh.js";
import {
  _ as be
} from "./BjVCUrJB.js";
import {
  _ as ve
} from "./Cbsqm2u7.js";
import {
  u as he,
  a as ge
} from "./BK5kv3cN.js";
import "./BA_9MPHj.js";
import "./BRp_P91g.js";
import "./-YuCUlNf.js";
import "./CUM6LAUx.js";
import "./DEPfnZ1P.js";
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
  Re = {
    key: 0,
    class: "nsfw"
  },
  Ie = {
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
  We = {
    class: "inner"
  },
  Le = {
    class: "title"
  },
  Be = {
    class: "address"
  },
  He = {
    class: "reactions"
  },
  $e = {
    class: "title"
  },
  Oe = {
    class: "subtitle"
  },
  Ke = {
    class: "holders"
  },
  Ve = {
    class: "label"
  },
  Ge = {
    class: "transactions"
  },
  ze = {
    class: "label"
  },
  Ue = {
    class: "disclaimer"
  },
  qe = ne({
    inheritAttrs: !1,
    __name: "index",
    emits: ["share", "copy"],
    setup(Qe) {
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
        W = r(() => p.jettonTransactions),
        L = r(() => p.jettonHolders),
        B = r(() => p.jettonReactions),
        v = r(() => p.jettonAiAgentState),
        H = r(() => p.updateJettonReaction),
        {
          showFullDescription: h,
          showDescriptionMore: E,
          descriptionWrapperEl: $
        } = Q(),
        {
          loadAiAgentSocialsActivateLinkAndOpen: O,
          loadAiAgentFineTuneLinkAndOpen: K,
          isAiAgentStatusBannerLoading: V
        } = ge(),
        M = r(() => V(o.value.shortname)),
        G = () => (y().memepad.memepadJettonAiSocialsActivate({
          source: "tokenpage"
        }), O(o.value.shortname)),
        z = () => (y().memepad.memepadJettonAiFineTuneButtonClick(), K(o.value.shortname)),
        U = r(() => [f.TELEGRAM, f.TWITTER, f.INSTAGRAM, f.WEBSITE].map(e => ({
          ...x(e),
          type: e
        })).map(e => {
          var b;
          const n = (b = o.value.socials) == null ? void 0 : b.find(u => u.type === e.type);
          return {
            icon: e.icon,
            type: e.type,
            display: e.display,
            onClick: n ? () => ee(e.type, n.url) : void 0
          }
        }).sort((e, n) => +!!n.onClick - +!!e.onClick)),
        q = e => {
          var n;
          D.memepad.memepadJettonSocialClick({
            source: e.type
          }), (n = e.onClick) == null || n.call(e)
        };

      function Q() {
        const e = k(!1),
          n = k(!1),
          b = k(null);
        return ae(() => b.value, u => {
          if (!u) return;
          const d = parseFloat(getComputedStyle(u).lineHeight),
            A = u.scrollHeight;
          n.value = A > d * 2
        }, {
          immediate: !0
        }), {
          showFullDescription: e,
          showDescriptionMore: n,
          descriptionWrapperEl: b
        }
      }
      return (e, n) => {
        const b = te,
          u = se,
          d = de,
          A = ue,
          X = _e,
          T = me,
          Y = be,
          Z = ve;
        return c(), _("div", Ae, [s("div", {
          class: R(["first", {
            "has-banner": t(o).bannerFileKey
          }])
        }, [s("img", {
          src: ("imgResolver" in e ? e.imgResolver : t(ie))("memepad/about-grid", "svg"),
          alt: "Background grid room",
          class: "bg-room"
        }, null, 8, fe), s("div", ye, [t(o).bannerFileKey ? (c(), j(b, {
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
          ref: $,
          class: R(["description-wrapper", {
            "show-full": t(h)
          }])
        }, [s("div", Se, [I(a(t(o).description) + " ", 1), s("span", null, [t(E) && t(h) ? (c(), _("button", {
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
        }, a(("t" in e ? e.t : t(l))("memepad.about.description.more")), 1)])) : g("", !0)], 2), s("div", Ee, [(c(!0), _(le, null, re(t(U), m => (c(), _("button", {
          key: m.type,
          type: "button",
          class: "item reset",
          disabled: !m.onClick,
          onClick: Xe => q(m)
        }, [i(d, {
          name: m.icon,
          class: "icon"
        }, null, 8, ["name"]), s("div", Te, a(m.display), 1)], 8, Me))), 128)), t(o).isNSFW ? (c(), _("div", Re, [i(d, {
          name: "stop-sign",
          class: "icon"
        }), s("span", Ie, a(("t" in e ? e.t : t(l))("memepad.jetton.nsfw")), 1)])) : g("", !0)]), t(P) && (t(v).status === "in_progress" || t(v).status === "ready" && t(v).data.isMyAgent && t(v).data.status !== t(w).MEMEPAD_AI_AGENT_STATUS.OFFLINE) ? (c(), _("div", we, [s("div", Fe, [i(u, {
          jetton: t(o),
          size: 36
        }, null, 8, ["jetton"])]), s("div", Ne, a(("t" in e ? e.t : t(l))("memepad.jetton.about.agent_banner.label", {
          ticker: t(o).ticker
        })), 1), t(v).status === "in_progress" ? (c(), _("div", De, [i(d, {
          name: "calendar-clock",
          class: "icon"
        }), s("div", Je, a(("t" in e ? e.t : t(l))("memepad.jetton.about.agent_banner.in_progress")), 1)])) : t(v).data.status === t(w).MEMEPAD_AI_AGENT_STATUS.ONLINE ? (c(), j(A, {
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
          "claim-fn": G
        }, null, 8, ["label", "loading"]))])) : g("", !0), s("div", Pe, [s("div", We, [s("div", Le, a(("t" in e ? e.t : t(l))("memepad.about.contract_address.title")), 1), s("div", Be, a(("sliceWalletAddress" in e ? e.sliceWalletAddress : t(ce))(t(o).address)), 1)]), s("button", {
          type: "button",
          class: "reset copy-btn",
          onClick: n[3] || (n[3] = m => e.$emit("copy"))
        }, [i(d, {
          name: "edit-copy-2",
          class: "icon"
        })])]), s("div", He, [s("div", $e, a(("t" in e ? e.t : t(l))("memepad.about.reactions.title")), 1), s("div", Oe, a(("t" in e ? e.t : t(l))("memepad.about.reactions.subtitle")), 1), i(X, {
          reactions: t(B),
          "update-callback": t(H),
          type: "about",
          class: "list"
        }, null, 8, ["reactions", "update-callback"])]), s("div", Ke, [i(T, {
          to: ("useRouter" in e ? e.useRouter : t(N))().resolve({
            name: "memepad-jetton-shortname-about-holders",
            params: {
              shortname: t(S)
            }
          }),
          class: "header"
        }, {
          default: F(() => [s("div", Ve, a(("t" in e ? e.t : t(l))("memepad.jetton.holders")), 1), i(d, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), i(Y, {
          jetton: t(o),
          "jetton-holders": t(L),
          "jetton-information": t(C),
          preview: ""
        }, null, 8, ["jetton", "jetton-holders", "jetton-information"])]), s("div", Ge, [i(T, {
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
          transactions: t(W),
          "jetton-information": t(C),
          preview: ""
        }, null, 8, ["transactions", "jetton-information"])]), s("div", Ue, [I(a(("t" in e ? e.t : t(l))("memepad.about.disclaimer")) + " ", 1), n[5] || (n[5] = s("i", {
          class: "warning"
        }, null, -1))])])
      }
    }
  }),
  dt = pe(qe, [
    ["__scopeId", "data-v-784337de"]
  ]);
export {
  dt as
  default
};