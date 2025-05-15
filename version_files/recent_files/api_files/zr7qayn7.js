import {
  m as Q,
  s as Y,
  _ as x
} from "./ByJj9Xma.js";
import {
  _ as ee
} from "./DsymdmTc.js";
import {
  d as te,
  bl as se,
  X as y,
  j as m,
  bh as f,
  y as k,
  Z as ne,
  o as l,
  c as u,
  a as s,
  e as t,
  a0 as oe,
  N as j,
  G as g,
  b as i,
  t as a,
  n as I,
  m as w,
  C as r,
  F as ae,
  q as ie,
  bm as F,
  aV as re,
  D as N,
  ai as R,
  _ as le,
  I as ce,
  f as de
} from "./jpzGFStf.js";
import {
  _ as me
} from "./B7Zay7tw.js";
import {
  _ as pe
} from "./4EuHXd-1.js";
import {
  _ as ue
} from "./DjbbxcqF.js";
import {
  _ as _e
} from "./rblB6dLl.js";
import {
  u as ve,
  a as he
} from "./DG07VdQo.js";
import "./VmqcnqKa.js";
import "./v_BJZ2Ef.js";
import "./iAMY995y.js";
import "./P1wTr3YD.js";
import "./Cov7EpLg.js";
import "./Ce8OHEp9.js";
import "./jDDblI53.js";
const be = {
    class: "memepad-jetton-about"
  },
  ge = ["src"],
  Ae = {
    class: "inner"
  },
  fe = {
    class: "image"
  },
  ye = {
    class: "ticker"
  },
  ke = {
    class: "description"
  },
  je = {
    key: 0,
    class: "more"
  },
  Se = {
    class: "socials"
  },
  Ce = ["disabled", "onClick"],
  Ee = {
    class: "label"
  },
  Me = {
    key: 0,
    class: "nsfw"
  },
  Te = {
    class: "label"
  },
  Ie = {
    key: 0,
    class: "ai-agent"
  },
  we = {
    class: "image"
  },
  Fe = {
    class: "title"
  },
  Ne = {
    key: 0,
    class: "progress"
  },
  Re = {
    class: "label"
  },
  De = {
    class: "contract"
  },
  Pe = {
    class: "inner"
  },
  Le = {
    class: "title"
  },
  We = {
    class: "address"
  },
  Be = {
    class: "reactions"
  },
  Je = {
    class: "title"
  },
  $e = {
    class: "subtitle"
  },
  He = {
    class: "holders"
  },
  Oe = {
    class: "label"
  },
  Ve = {
    class: "transactions"
  },
  Ge = {
    class: "label"
  },
  Ke = {
    class: "disclaimer"
  },
  ze = te({
    inheritAttrs: !1,
    __name: "index",
    emits: ["share", "copy"],
    setup(Ue) {
      const v = se(),
        D = y(),
        {
          addresses: P
        } = ve(),
        L = m(() => {
          var e;
          return (e = P.value) == null ? void 0 : e.isAvailableAI
        }),
        o = m(() => v.jetton),
        S = m(() => v.jettonShortname),
        C = m(() => v.jettonInformation),
        W = m(() => v.jettonTransactions),
        B = m(() => v.jettonHolders),
        h = m(() => v.jettonAiAgentState),
        {
          showFullDescription: b,
          showDescriptionMore: E,
          descriptionWrapperEl: J
        } = U(),
        {
          loadAiAgentSocialsActivateLinkAndOpen: $,
          loadAiAgentFineTuneLinkAndOpen: H,
          isAiAgentStatusBannerLoading: O
        } = he(),
        M = m(() => O(o.value.shortname)),
        V = () => (y().memepad.memepadJettonAiSocialsActivate({
          source: "tokenpage"
        }), $(o.value.shortname)),
        G = () => (y().memepad.memepadJettonAiFineTuneButtonClick(), H(o.value.shortname)),
        K = m(() => [f.TELEGRAM, f.TWITTER, f.INSTAGRAM, f.WEBSITE].map(e => ({
          ...Q(e),
          type: e
        })).map(e => {
          var _;
          const n = (_ = o.value.socials) == null ? void 0 : _.find(p => p.type === e.type);
          return {
            icon: e.icon,
            type: e.type,
            display: e.display,
            onClick: n ? () => Y(e.type, n.url) : void 0
          }
        }).sort((e, n) => +!!n.onClick - +!!e.onClick)),
        z = e => {
          var n;
          D.memepad.memepadJettonSocialClick({
            source: e.type
          }), (n = e.onClick) == null || n.call(e)
        };

      function U() {
        const e = k(!1),
          n = k(!1),
          _ = k(null);
        return ne(() => _.value, p => {
          if (!p) return;
          const c = parseFloat(getComputedStyle(p).lineHeight),
            A = p.scrollHeight;
          n.value = A > c * 2
        }, {
          immediate: !0
        }), {
          showFullDescription: e,
          showDescriptionMore: n,
          descriptionWrapperEl: _
        }
      }
      return (e, n) => {
        const _ = x,
          p = ee,
          c = le,
          A = me,
          q = pe,
          T = ce,
          X = ue,
          Z = _e;
        return l(), u("div", be, [s("div", {
          class: I(["first", {
            "has-banner": t(o).bannerFileKey
          }])
        }, [s("img", {
          src: ("imgResolver" in e ? e.imgResolver : t(oe))("memepad/about-grid", "svg"),
          alt: "Background grid room",
          class: "bg-room"
        }, null, 8, ge), s("div", Ae, [t(o).bannerFileKey ? (l(), j(_, {
          key: 0,
          "banner-file-key": t(o).bannerFileKey,
          class: "banner",
          rounded: !1
        }, null, 8, ["banner-file-key"])) : g("", !0), s("div", fe, [i(p, {
          jetton: t(o),
          size: 96
        }, null, 8, ["jetton"])]), s("div", ye, a(t(o).ticker), 1)]), s("button", {
          type: "button",
          class: "reset share",
          onClick: n[0] || (n[0] = d => e.$emit("share"))
        }, [i(c, {
          name: "share",
          class: "icon"
        })])], 2), s("div", {
          ref_key: "descriptionWrapperEl",
          ref: J,
          class: I(["description-wrapper", {
            "show-full": t(b)
          }])
        }, [s("div", ke, [w(a(t(o).description) + " ", 1), s("span", null, [t(E) && t(b) ? (l(), u("button", {
          key: 0,
          type: "button",
          class: "reset less-btn",
          onClick: n[1] || (n[1] = d => b.value = !1)
        }, a(("t" in e ? e.t : t(r))("memepad.about.description.less")), 1)) : g("", !0)])]), t(E) && !t(b) ? (l(), u("div", je, [n[4] || (n[4] = s("div", {
          class: "shadow"
        }, null, -1)), s("button", {
          type: "button",
          class: "reset more-btn",
          onClick: n[2] || (n[2] = d => b.value = !0)
        }, a(("t" in e ? e.t : t(r))("memepad.about.description.more")), 1)])) : g("", !0)], 2), s("div", Se, [(l(!0), u(ae, null, ie(t(K), d => (l(), u("button", {
          key: d.type,
          type: "button",
          class: "item reset",
          disabled: !d.onClick,
          onClick: qe => z(d)
        }, [i(c, {
          name: d.icon,
          class: "icon"
        }, null, 8, ["name"]), s("div", Ee, a(d.display), 1)], 8, Ce))), 128)), t(o).isNSFW ? (l(), u("div", Me, [i(c, {
          name: "stop-sign",
          class: "icon"
        }), s("span", Te, a(("t" in e ? e.t : t(r))("memepad.jetton.nsfw")), 1)])) : g("", !0)]), t(L) && (t(h).status === "in_progress" || t(h).status === "ready" && t(h).data.isMyAgent && t(h).data.status !== t(F).MEMEPAD_AI_AGENT_STATUS.OFFLINE) ? (l(), u("div", Ie, [s("div", we, [i(p, {
          jetton: t(o),
          size: 36
        }, null, 8, ["jetton"])]), s("div", Fe, a(("t" in e ? e.t : t(r))("memepad.jetton.about.agent_banner.label", {
          ticker: t(o).ticker
        })), 1), t(h).status === "in_progress" ? (l(), u("div", Ne, [i(c, {
          name: "calendar-clock",
          class: "icon"
        }), s("div", Re, a(("t" in e ? e.t : t(r))("memepad.jetton.about.agent_banner.in_progress")), 1)])) : t(h).data.status === t(F).MEMEPAD_AI_AGENT_STATUS.ONLINE ? (l(), j(A, {
          key: 1,
          label: ("t" in e ? e.t : t(r))("memepad.ai_agent.fine_tune_social_media_posting"),
          type: "default",
          "can-claim": "",
          loading: t(M),
          "claim-fn": G
        }, null, 8, ["label", "loading"])) : (l(), j(A, {
          key: 2,
          label: ("t" in e ? e.t : t(r))("memepad.ai_agent.active_social_media_posting_short"),
          type: "default",
          "can-claim": "",
          loading: t(M),
          "claim-fn": V
        }, null, 8, ["label", "loading"]))])) : g("", !0), s("div", De, [s("div", Pe, [s("div", Le, a(("t" in e ? e.t : t(r))("memepad.about.contract_address.title")), 1), s("div", We, a(("sliceWalletAddress" in e ? e.sliceWalletAddress : t(re))(t(o).address)), 1)]), s("button", {
          type: "button",
          class: "reset copy-btn",
          onClick: n[3] || (n[3] = d => e.$emit("copy"))
        }, [i(c, {
          name: "edit-copy-2",
          class: "icon"
        })])]), s("div", Be, [s("div", Je, a(("t" in e ? e.t : t(r))("memepad.about.reactions.title")), 1), s("div", $e, a(("t" in e ? e.t : t(r))("memepad.about.reactions.subtitle")), 1), i(q, {
          jetton: t(o),
          mode: "about"
        }, null, 8, ["jetton"])]), s("div", He, [i(T, {
          to: ("useRouter" in e ? e.useRouter : t(R))().resolve({
            name: "memepad-jetton-shortname-about-holders",
            params: {
              shortname: t(S)
            }
          }),
          class: "header"
        }, {
          default: N(() => [s("div", Oe, a(("t" in e ? e.t : t(r))("memepad.jetton.holders")), 1), i(c, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), i(X, {
          jetton: t(o),
          "jetton-holders": t(B),
          "jetton-information": t(C),
          preview: ""
        }, null, 8, ["jetton", "jetton-holders", "jetton-information"])]), s("div", Ve, [i(T, {
          to: ("useRouter" in e ? e.useRouter : t(R))().resolve({
            name: "memepad-jetton-shortname-about-transactions",
            params: {
              shortname: t(S)
            }
          }),
          class: "header"
        }, {
          default: N(() => [s("div", Ge, a(("t" in e ? e.t : t(r))("memepad.jetton.transactions")), 1), i(c, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"]), i(Z, {
          transactions: t(W),
          "jetton-information": t(C),
          preview: ""
        }, null, 8, ["transactions", "jetton-information"])]), s("div", Ke, [w(a(("t" in e ? e.t : t(r))("memepad.about.disclaimer")) + " ", 1), n[5] || (n[5] = s("i", {
          class: "warning"
        }, null, -1))])])
      }
    }
  }),
  dt = de(ze, [
    ["__scopeId", "data-v-5ec2a616"]
  ]);
export {
  dt as
  default
};