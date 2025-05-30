import {
  _ as et
} from "./Dj-UTuuJ.js";
import {
  f as L,
  o as d,
  z as I,
  e as s,
  a8 as tt,
  A as E,
  aj as at,
  d as P,
  c as S,
  t as x,
  G as _,
  j as w,
  cH as K,
  bx as st,
  D as U,
  aq as oe,
  au as nt,
  a9 as re,
  x as ge,
  a4 as B,
  cI as le,
  C as Q,
  cJ as H,
  aY as fe,
  a1 as $e,
  cK as Y,
  cL as ae,
  cM as J,
  cN as it,
  ag as Te,
  n as se,
  _ as ne,
  aZ as ot,
  u as rt,
  J as M,
  K as he,
  cz as ve,
  a2 as ue,
  w as de,
  a as C,
  b as R,
  m as ye,
  ax as lt,
  aa as qe,
  cO as X,
  cy as be,
  b1 as me,
  p as ke,
  l as Fe,
  bn as ce,
  aF as Ce,
  ah as ie,
  am as xe,
  h as te,
  ai as ct,
  k as Ve,
  aR as ut,
  af as pe,
  a3 as Ke,
  O as dt,
  Q as mt,
  bb as kt,
  ay as pt,
  cP as Z,
  cQ as W,
  cR as Ne,
  bv as Se,
  bQ as ft,
  bR as vt,
  F as G,
  ao as we,
  cS as _e,
  cT as bt,
  aC as yt,
  cU as gt,
  ae as Be,
  aT as Tt,
  aA as ht,
  aH as At,
  q as z,
  cV as Ct,
  aB as St,
  ba as Ee,
  a6 as It,
  L as Ot,
  a5 as Ge,
  cW as wt,
  cX as _t,
  cY as We,
  cZ as Ue,
  N as $t,
  g as Le,
  y as He,
  b9 as Et,
  ad as Rt,
  c8 as Mt,
  ab as Dt,
  ak as Nt,
  al as Bt
} from "./Q7ZkUOCs.js";
import {
  _ as Ut
} from "./DjLbFCV5.js";
import {
  _ as Lt
} from "./BAAxISuL.js";
import {
  a as Pt
} from "./BUGuDDdS.js";
import {
  _ as Ye
} from "./CcAYJJ_r.js";
import {
  _ as qt
} from "./B9SKPzTF.js";
import {
  B as Ft
} from "./Dswspqmd.js";
import {
  d as Ie
} from "./CmBNsXYI.js";
import {
  _ as xt
} from "./Cy_jAjho.js";
import {
  _ as Vt
} from "./aoafaiUk.js";
import {
  _ as Kt
} from "./Xmv6NS9R.js";
import "./o1Oj3uQj.js";
const Gt = {};

function Wt(e, o) {
  const t = et;
  return d(), I(t, {
    icon: ("imgResolver" in e ? e.imgResolver : s(tt))("emoji/Construction"),
    title: ("t" in e ? e.t : s(E))("errors.maintenance.title"),
    subtitle: ("t" in e ? e.t : s(E))("errors.maintenance.subtitle"),
    "button-label": ("t" in e ? e.t : s(E))("base.visit_community"),
    onButton: o[0] || (o[0] = a => ("useApp" in e ? e.useApp : s(at))().openBlumTelegram())
  }, null, 8, ["icon", "title", "subtitle", "button-label"])
}
const Ht = L(Gt, [
    ["render", Wt]
  ]),
  Yt = {
    class: "pages-tasks-head"
  },
  Qt = {
    key: 0,
    class: "title"
  },
  jt = {
    key: 1,
    class: "subtitle"
  },
  zt = P({
    __name: "TasksHead",
    props: {
      title: {
        type: String,
        default: void 0
      },
      subtitle: {
        type: String,
        default: void 0
      }
    },
    setup(e) {
      return (o, t) => (d(), S("div", Yt, [e.title ? (d(), S("div", Qt, x(e.title), 1)) : _("", !0), e.subtitle ? (d(), S("div", jt, x(e.subtitle), 1)) : _("", !0)]))
    }
  }),
  Jt = L(zt, [
    ["__scopeId", "data-v-e113fe8d"]
  ]),
  Xt = ["disabled"],
  Zt = P({
    __name: "TasksPillWrapper",
    props: {
      isQuestButton: {
        type: Boolean,
        default: !1
      },
      onClick: {
        type: Function,
        default: void 0
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      tooltip: {
        type: String,
        default: void 0
      },
      itemMode: {
        type: String,
        required: !0
      }
    },
    setup(e) {
      const o = e,
        t = w(() => {
          const n = [K.CARD, K.SHORT_CARD].includes(o.itemMode) ? st.RIGHT : void 0;
          if (o.tooltip === "validation") return {
            text: E("earn.task.verification_indicator_text"),
            alignment: n
          }
        });
      return (a, n) => {
        const l = Ut,
          i = ge;
        return s(t) ? (d(), I(l, {
          key: 0,
          class: "tasks-pill-inline",
          fill: "",
          text: s(t).text,
          alignment: s(t).alignment,
          "text-alignment": "left",
          "text-min-width": 130,
          onClick: n[0] || (n[0] = nt(() => {}, ["stop"]))
        }, {
          default: U(() => [oe(a.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["text", "alignment"])) : e.isQuestButton ? (d(), I(i, {
          key: 1,
          class: "tasks-fill-full",
          fill: "",
          size: s(re).LARGE,
          disabled: e.disabled,
          onClick: n[1] || (n[1] = r => e.onClick && e.onClick(r))
        }, {
          default: U(() => [oe(a.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["size", "disabled"])) : (d(), S("button", {
          key: 2,
          class: "tasks-pill-inline",
          disabled: e.disabled,
          onClick: n[2] || (n[2] = r => e.onClick && e.onClick(r))
        }, [oe(a.$slots, "default", {}, void 0, !0)], 8, Xt))
      }
    }
  }),
  ea = L(Zt, [
    ["__scopeId", "data-v-3aaee1da"]
  ]),
  ta = {
    key: 0,
    class: "label"
  },
  aa = P({
    __name: "TasksPill",
    props: B({
      status: {
        type: String,
        required: !0
      },
      kind: {
        type: String,
        required: !0
      },
      startCallback: {
        type: Function,
        required: !0
      },
      claimCallback: {
        type: Function,
        required: !0
      },
      reward: {
        type: Object,
        default: void 0
      },
      isQuestButton: {
        type: Boolean,
        default: !1
      },
      isNested: {
        type: Boolean,
        default: !1
      },
      mode: {
        type: String,
        default: le.DARK
      },
      itemMode: {
        type: String,
        required: !0
      }
    }, {
      claimOverride: {
        required: !0
      },
      claimOverrideModifiers: {}
    }),
    emits: B(["ui:claimed", "open:subtasks-modal", "open:verify", "click"], ["update:claimOverride"]),
    setup(e, {
      emit: o
    }) {
      const t = e,
        a = o,
        n = Q(e, "claimOverride"),
        l = w(() => t.status === H.READY_FOR_CLAIM ? fe.DARK : t.status === H.STARTED ? t.mode === le.LIGHT ? fe.DARK : fe.LIGHT : fe.DARK),
        i = w(() => {
          const r = !t.reward || t.reward.value.isZero() ? E("base.claim") : E("base.claim_n", {
              val: $e(t.reward.value),
              currency: t.reward.symbol
            }),
            u = {
              claimDisabled: {
                label: E("base.claim"),
                cls: "is-disabled",
                disabled: !0
              },
              subtasksModalOpen: {
                label: E("earn.task.buttons.open"),
                cls: "is-status-not-started",
                onClick: () => {
                  a("open:subtasks-modal"), a("click")
                }
              },
              questDisabled: {
                label: r,
                cls: "is-disabled",
                disabled: !0
              }
            };
          if (t.status === H.NOT_STARTED) return t.kind === Y.ONGOING ? u.claimDisabled : t.isQuestButton ? u.questDisabled : ae(t.kind) ? u.subtasksModalOpen : {
            label: E("earn.task.buttons.start"),
            cls: "is-status-not-started",
            onClick: () => {
              n.value = J.STARTED, setTimeout(() => n.value === J.STARTED && (n.value = void 0), 15e3), t.startCallback(), a("click")
            }
          };
          if (t.status === H.STARTED) return t.kind === Y.ONGOING ? u.claimDisabled : t.isQuestButton ? u.questDisabled : ae(t.kind) ? u.subtasksModalOpen : n.value === J.STARTED ? {
            loader: !0,
            cls: "is-status-started"
          } : {
            icon: "clock",
            cls: "is-status-started",
            tooltip: "validation"
          };
          if (t.status === H.READY_FOR_VERIFY) return {
            label: E("earn.task.buttons.verify"),
            onClick: f => {
              f.stopPropagation(), a("open:verify"), a("click")
            },
            cls: "is-status-ready-for-verify"
          };
          if (n.value === J.LOADING) return {
            loader: !0,
            cls: "is-status-ready-for-claim"
          };
          if (n.value === J.DONE) return {
            icon: "circle-check-white",
            cls: "is-status-ready-for-claim"
          };
          if (t.status === H.FINISHED) return {
            icon: "circle-check-white",
            cls: "is-status-finished"
          };
          if (t.status === H.READY_FOR_CLAIM) return {
            label: r,
            cls: "is-status-ready-for-claim",
            onClick: async () => {
              n.value = J.LOADING, a("click"), await it(t.claimCallback, 2e3) ? (n.value = J.DONE, a("ui:claimed")) : n.value = void 0
            }
          };
          throw Te("Unsupported condition")
        });
      return (r, u) => {
        const f = ne,
          b = ot,
          m = ea;
        return d(), I(m, {
          "on-click": s(i).onClick,
          class: se([
            [s(i).cls, `is-${e.mode}`, {
              "is-quest": e.isQuestButton,
              "is-nested": e.isNested
            }], "pages-tasks-pill"
          ]),
          "is-quest-button": e.isQuestButton,
          disabled: s(i).disabled,
          tooltip: s(i).tooltip,
          "item-mode": e.itemMode
        }, {
          default: U(() => [s(i).label ? (d(), S("div", ta, x(s(i).label), 1)) : s(i).icon ? (d(), I(f, {
            key: 1,
            name: s(i).icon,
            class: "icon"
          }, null, 8, ["name"])) : s(i).loader ? (d(), I(b, {
            key: 2,
            size: 16,
            type: s(l)
          }, null, 8, ["type"])) : _("", !0)]),
          _: 1
        }, 8, ["on-click", "class", "is-quest-button", "disabled", "tooltip", "item-mode"])
      }
    }
  }),
  Re = L(aa, [
    ["__scopeId", "data-v-7eff87a7"]
  ]),
  sa = `PREAMBLE
Welcome to Blum (“Blum” or “Blum app”).
You should carefully read this Disclaimer (the “Disclaimer”). By using, accessing or registering in Blum in any manner, you agree to be bound by this Disclaimer and all other operating rules, policies and procedures (changes, amendment, alterations thereto) that may be published from time to time.
If you disagree with any part of the Disclaimer, please do not use Blum. If you do not understand all the terms of the Disclaimer or you have any questions on the content thereof, please contact us at {{ community_email }}.
We may revise this Disclaimer at any time without prior notice by posting the revised terms of the Disclaimer in Blum (respective changes will not be applied retroactively). You hereby confirm that by continuing to use Blum you accept such changes.

INFORMATION PUBLISHED IN BLUM
We attempt to ensure that the data, information, content in Blum are current but we do not guarantee its currency. The content of Blum may not always be entirely accurate, comprehensive, complete or up-to-date and may also contain technical inaccuracies or typographical errors - no representation, warranty or undertaking is given by us. In particular, we shall not be obliged to remove any outdated information from Blum or to expressly mark it as outdated.
The content in Blum is provided solely on an “as is” and “as available” basis. You are encouraged to confirm the information contained herein. You should not act or refrain from acting on the basis of any content in Blum without first obtaining matter specific legal advice, business advice, or advice of any kind.
The application and impact of laws can vary widely based on the specific facts involved. Given the changing nature of laws, rules and regulations, and the inherent hazards of electronic communication, there may be delays, omissions or inaccuracies in information contained in Blum.

BLUM MATERIALS NOT COMMERCIAL IN NATURE
Nothing in Blum is to be considered as being of promotional nature or aiming on commercial use.

SECURITIES DISCLAIMER
No material or any other information which may be made available in Blum shall constitute or be construed as a recommendation, endorsement, offer, invitation or solicitation to enter into any transaction with or purchase any product, or otherwise deal with securities, crypto assets or other products. You further understand that none of the information providers, including any third parties or third-party providers are advising you personally concerning the nature, potential, value or suitability of any particular security or crypto asset, portfolio of securities or crypto assets, transaction, investment strategy or other matter, and any information provided is not tailored to the investment needs of any specific person.
You understand that an investment in any security or crypto asset is subject to a number of risks, and that discussions of any security or crypto asset published in Blum may not contain a list or description of relevant risk factors. Please note that markets change continuously, so any information, content, content of third parties in Blum or other material provided on or through Blum may not be complete or current, or may be superseded by more current information. You rely on such information at your own risk.

NO PROFESSIONAL OR INVESTMENT ADVICE
Blum is not intended to provide tax, legal, insurance or investment advice, and nothing in Blum should be construed as an offer to sell, a solicitation of an offer to buy, or a recommendation for any security or crypto asset by Blum. You alone are solely responsible for determining whether any investment, security or strategy, or any other product or service, is appropriate or suitable for you based on your investment objectives and personal and financial situation. You should consult an attorney or tax professional regarding your specific legal or tax situation.

LIMITATION OF LIABILITY
TO THE MAXIMUM EXTENT PERMITTED BY LAW, BLUM DISCLAIMS ALL LIABILITY FOR ANY DAMAGES OF ANY KIND AND FURTHER DISCLAIMS ALL LOSSES (INCLUDING WITHOUT LIMITATION INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR SPECIAL DAMAGES) ARISING OUT OF OR IN ANY WAY CONNECTED WITH YOUR USE OF OR ACCESS TO BLUM.
You act at your own risk in reliance on the content of Blum, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through Blum meet your specific requirements.
Blum does not have any ability to prevent or mitigate attacks on blockchain networks. With respect to our app, we reserve the right to take any commercially reasonable actions in the event of an any attack.
Blum shall not be liable for availability of Blum app at all times, in all countries and/or all geographic locations, or at any given time.

NO WARRANTIES
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE EXCLUDE ALL WARRANTIES AND REPRESENTATIONS RELATING TO THE SUBJECT MATTER OF THIS DISCLAIMER AND BLUM, i.e. regarding the accuracy, adequacy, correctness, completeness, reliability, timeliness, non-infringement, title, merchantability or fitness for any purpose of the data, information, content in Blum or services or products available through Blum app, or associated therewith.
Blum makes no warranties or representations that use of Blum app will be uninterrupted or error-free. You are responsible for taking all necessary precautions to ensure that any content you may obtain from Blum app is free of viruses or other harmful codes.

LINKS TO OTHER WEBSITES
Blum app may contain links to external websites and external websites may link to Blum app. The linked websites are not under the control of Blum. Therefore, Blum is not responsible for the content, reliability or operation of any such external websites and disclaims all liability, howsoever occurring, in respect of the content or operation of any such external sites.

COPYRIGHT NOTICE
Subject to the express provisions of this Disclaimer (1) we, together with our licensors, own and control all the copyright and other intellectual property rights in Blum and the material thereon; and (2) all the copyright and other intellectual property rights that you consider this Disclaimer and risk warnings and risk disclosures provided in Blum and the material are reserved.

INDEMNIFICATION
You agree to defend, indemnify and hold harmless Blum, our officers, directors, employees, business partners and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from: (i) your use of information, materials or features available in Blum app; (ii) any transactions between you and a third party through information available in Blum app.

LIMITATIONS AND EXCLUSIONS OF LIABILITY
Nothing in this Disclaimer will (1) limit or exclude any liability for death or personal injury resulting from negligence; (2) limit or exclude any liability for fraud or fraudulent misrepresentation; (3) limit any liabilities in any way that is not permitted under applicable law; or (4) exclude any liabilities that may not be excluded under applicable law.
`,
  na = {
    key: 0,
    class: "pages-tasks-disclaimer-title"
  },
  ia = ["src"],
  oa = {
    key: 1,
    class: "pages-tasks-disclaimer-title"
  },
  ra = {
    key: 0,
    class: "pages-tasks-disclaimer general"
  },
  la = {
    class: "checkbox"
  },
  ca = {
    key: 1,
    class: "pages-tasks-disclaimer details"
  },
  Pe = "community@blum.io",
  ua = P({
    __name: "TasksDisclaimer",
    props: B({
      productName: {
        type: String,
        default: void 0
      },
      iconUrl: {
        type: String,
        required: !0
      },
      startFn: {
        type: Function,
        default: void 0
      }
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const o = e,
        t = Q(e, "modelValue"),
        {
          copy: a
        } = rt(),
        n = () => a(Pe),
        l = () => ({
          isAgreed: !1,
          state: "general"
        }),
        i = M(l());
      he(t, b => b && (i.value = l()));
      const r = () => {
          i.value.isAgreed = !0, i.value.state = "general"
        },
        u = () => {
          t.value = !1, o.startFn && o.startFn()
        },
        f = w(() => {
          const b = sa.split(`
`).reduce((m, c) => {
            const k = c.trim();
            if (!k) return m;
            const p = (() => {
              if (k.includes("{{ community_email }}")) {
                const $ = k.split("{{ community_email }}");
                return ve("p", [$[0], ve("span", {
                  class: "as-link",
                  onClick: n
                }, Pe), $[1]])
              }
              return ve("p", k)
            })();
            return m.push(p), m
          }, []);
          return ve("div", {
            class: "text"
          }, b)
        });
      return (b, m) => {
        const c = Lt,
          k = ge,
          p = qe,
          $ = ue("img-error");
        return d(), I(p, {
          modelValue: t.value,
          "onUpdate:modelValue": m[4] || (m[4] = g => t.value = g),
          title: "",
          "back-icon": s(i).state === "details",
          "content-key": s(i).state,
          onBack: m[5] || (m[5] = g => s(i).state = "general")
        }, {
          title: U(() => [s(i).state === "general" ? (d(), S("span", na, [de(C("img", {
            src: e.iconUrl,
            alt: "Task icon"
          }, null, 8, ia), [
            [$]
          ]), C("span", null, x(e.productName), 1)])) : _("", !0), s(i).state === "details" ? (d(), S("span", oa, "Disclaimer")) : _("", !0)]),
          default: U(() => [s(i).state === "general" ? (d(), S("div", ra, [m[8] || (m[8] = C("div", {
            class: "text"
          }, [C("p", null, "Nothing in Blum is to be considered as being of promotional nature or aiming at commercial use."), C("p", null, "No material or information which may be made available in Blum shall constitute or be construed as a recommendation, endorsement, offer, invitation or solicitation to enter into any transaction with or purchase any product, or otherwise deal with securities, crypto assets or other products."), C("p", null, "You alone are solely responsible for determining whether any investment, security or any other product or service, is appropriate or suitable for you. You should consult an attorney or tax professional regarding your specific legal or tax situation.")], -1)), C("div", la, [R(c, {
            modelValue: s(i).isAgreed,
            "onUpdate:modelValue": m[0] || (m[0] = g => s(i).isAgreed = g)
          }, null, 8, ["modelValue"]), C("span", null, [m[6] || (m[6] = ye("By using Blum, you accept the terms of our ")), C("span", {
            class: "as-link",
            onClick: m[1] || (m[1] = g => s(i).state = "details")
          }, "Disclaimer"), m[7] || (m[7] = ye("."))])])])) : _("", !0), s(i).state === "details" ? (d(), S("div", ca, [(d(), I(lt(s(f))))])) : _("", !0)]),
          footer: U(() => [s(i).state === "general" ? (d(), I(k, {
            key: 0,
            label: `Go to ${e.productName}`,
            fill: "",
            size: s(re).LARGE,
            tertiary: "",
            disabled: !s(i).isAgreed,
            onClick: m[2] || (m[2] = g => u())
          }, null, 8, ["label", "size", "disabled"])) : _("", !0), s(i).state === "details" ? (d(), I(k, {
            key: 1,
            label: "I agree",
            fill: "",
            size: s(re).LARGE,
            onClick: m[3] || (m[3] = g => r())
          }, null, 8, ["size"])) : _("", !0)]),
          _: 1
        }, 8, ["modelValue", "back-icon", "content-key"])
      }
    }
  }),
  da = L(ua, [
    ["__scopeId", "data-v-845ec11f"]
  ]),
  ma = {
    class: "pages-tasks-verify"
  },
  ka = {
    class: "heading"
  },
  pa = ["src"],
  fa = {
    class: "title"
  },
  va = P({
    __name: "TasksVerify",
    props: {
      task: {
        type: Object,
        required: !0
      },
      verifyCallback: {
        type: Function,
        required: !0
      }
    },
    emits: ["doAction", "close"],
    setup(e, {
      emit: o
    }) {
      const t = e,
        a = o,
        n = M(""),
        l = M(),
        i = async () => {
          l.value = void 0, l.value = await t.verifyCallback(n.value), l.value === X.SUCCESS && a("close")
        };
      he(n, () => {
        l.value !== void 0 && (l.value = void 0)
      });
      const r = w(() => {
        switch (l.value) {
          case void 0:
            return {
              status: be.REGULAR, caption: E("earn.verify_input.caption.default")
            };
          case X.UNKNOWN_ERROR:
            return {
              status: be.ERROR, caption: E("earn.verify_input.caption.unknown_error")
            };
          case X.WRONG_KEYWORD:
            return {
              status: be.ERROR, caption: E("earn.verify_input.caption.wrong_keyword")
            };
          case X.SUCCESS:
            return {
              status: be.REGULAR
            };
          default:
            throw l.value, Te("Invalid status")
        }
      });
      return (u, f) => {
        const b = ne,
          m = Pt,
          c = ge,
          k = Ye,
          p = qt,
          $ = ue("img-error");
        return d(), I(p, null, {
          default: U(() => [C("div", ma, [C("div", ka, [de(C("img", {
            src: s(me)(e.task.iconFileKey),
            alt: "Task icon",
            class: "task-icon"
          }, null, 8, pa), [
            [$]
          ]), C("div", fa, x(e.task.title), 1), R(b, {
            name: "external-link",
            class: "link-icon",
            onClick: f[0] || (f[0] = g => u.$emit("doAction"))
          })]), R(m, {
            modelValue: s(n),
            "onUpdate:modelValue": f[1] || (f[1] = g => ke(n) ? n.value = g : null),
            placeholder: "Keyword",
            label: "Verification",
            status: s(r).status,
            caption: s(r).caption,
            class: "input"
          }, null, 8, ["modelValue", "status", "caption"]), R(k, {
            "ignore-tabs": ""
          }, {
            default: U(() => [R(c, {
              label: "Verify",
              fill: "",
              size: s(re).LARGE,
              onClick: f[2] || (f[2] = g => i())
            }, null, 8, ["size"])]),
            _: 1
          })])]),
          _: 1
        })
      }
    }
  }),
  ba = L(va, [
    ["__scopeId", "data-v-64ea4ace"]
  ]),
  ya = "" + new URL("Medium.9CUCDBk_.woff2", import.meta.url).href,
  ga = "" + new URL("Clap.Couz_01b.webp", import.meta.url).href,
  Ta = "" + new URL("moon-bg.CTZyPnMM.webp", import.meta.url).href,
  ha = "data:image/webp;base64,UklGRs4AAABXRUJQVlA4WAoAAAAQAAAAfwAAAwAAQUxQSFYAAAABf2CQbaQ7gqvJ+wO+Q0RkvPUAjGLbavMHEShAACIeUrqRLLONlz9RUiRkMJCyoiqI6P8EnH9rTm5aAFDCLttdN30m0szH1XXn4tO2urJRNKMGXKOkWlZQOCBSAAAAcAMAnQEqgAAEAD6RSJ9LpaQioaQIALASCWcAzygMvffVJ3hgAP7x/9//f3h/7mUf/MAWUp3/WP536on+Tf3g6NQjfoODPwhtge3CIKud4qAAAA==",
  Aa = "data:image/webp;base64,UklGRuAAAABXRUJQVlA4WAoAAAAQAAAAdAAAAgAAQUxQSFgAAAABb2CQbaQzuCIcwvvrvUREZM4XA4xqbZvxG3ZaDBEk4M0gwT9t7URQxSfCq4EIzl/GPBSI6H92ozwkuYSHM8lJpE/X8F9WV9AWm7F2OHm7t3hW5FsDmFIBVlA4IGIAAACwAwCdASp1AAMAPpFAnUslo6KhqBgIALASCWMA0BW/gEwxFE9agAD+8f/f+YJ/9Y/+3nagDHY3P0Z+lXppwDx/w1+Zv9xKP/hvGznerPf/8nJlm/p30HP6B8rBuXNTiAAAAA==",
  Ca = () => ({
    generate: async o => {
      const {
        type: t,
        data: a
      } = o;
      switch (t) {
        case "task-joined-at":
          return await Sa(a)
      }
    }
  });
async function Sa(e) {
  const {
    currentStreakDays: o,
    username: t,
    userCreatedAt: a,
    width: n,
    height: l
  } = e, i = await Ea(n, l);
  if (!i) return;
  await Oa(i, [{
    type: "bg-image",
    options: {
      src: Ta
    }
  }, {
    type: "image",
    options: {
      src: ga,
      width: 96,
      height: 96
    },
    position: {
      topIndent: 96
    }
  }, {
    type: "text",
    options: {
      text: [E("memepad.tasks.share_stories.title.1", {
        username: t
      }), E("memepad.tasks.share_stories.title.2"), E("memepad.tasks.share_stories.title.3")],
      style: "heading-large",
      color: "white"
    },
    position: {
      topIndent: 24
    }
  }, {
    type: "text",
    options: {
      text: E("memepad.tasks.share_stories.joined", {
        date: new Date(a).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric"
        })
      }),
      style: "paragraph-medium",
      color: "white"
    },
    position: {
      topIndent: 24
    }
  }, {
    type: "image",
    options: {
      src: ha,
      width: 128,
      height: 3.4
    },
    position: {
      topIndent: 4
    }
  }, {
    type: "text",
    options: {
      text: [E("memepad.tasks.share_stories.check_ins.1"), E("memepad.tasks.share_stories.check_ins.2", {
        count: o
      })],
      style: "paragraph-medium",
      color: "white"
    },
    position: {
      topIndent: 16
    }
  }, {
    type: "image",
    options: {
      src: Aa,
      width: 128,
      height: 3.4
    },
    position: {
      topIndent: 4
    }
  }]);
  const r = Fe().public.TELEGRAM_APP_URL,
    u = ce().referralToken.value,
    f = `${r}?startapp=ref_${u}`,
    b = `${E("memepad.tasks.share_stories.text")}
${f}
#IamBlumie #Join #Blum #MiniApp`;
  return {
    canvas: i.canvas,
    share: () => Ra({
      canvas: i.canvas,
      text: b,
      name: "Blum"
    })
  }
}

function Ia(e, o, t, a) {
  return {
    ctx: e,
    canvas: o,
    height: t,
    width: a,
    topPosition: 0
  }
}
async function Oa(e, o) {
  for (const t of o) switch (t.type) {
    case "text":
      wa(e, t.options, t.position);
      break;
    case "image":
      await _a(e, t.options, t.position);
      break;
    case "bg-image":
      await $a(e, t.options);
      break;
    default:
      throw Te(`Unknown element type: ${t}`)
  }
}

function wa(e, {
  text: o,
  style: t,
  color: a,
  textBaseline: n = "top",
  textAlign: l = "center"
}, i) {
  const r = (() => {
    switch (t) {
      case "heading-large":
        return {
          font: "700 32px RoobertPro", lineHeight: 40
        };
      case "paragraph-medium":
        return {
          font: "500 16px RoobertPro", lineHeight: 20
        };
      default:
        throw Te("Unknown style")
    }
  })();
  e.ctx.font = r.font, e.ctx.fillStyle = a, e.ctx.textBaseline = n, e.ctx.textAlign = l;
  const u = Array.isArray(o) ? o : [o];
  if ("topIndent" in i) {
    e.topPosition += i.topIndent;
    for (const f of u) e.ctx.fillText(f, e.width / 2, e.topPosition), e.topPosition += r.lineHeight
  } else if ("bottom" in i) {
    let f = e.height - i.bottom;
    for (const b of u.reverse()) e.ctx.fillText(b, e.width / 2, f), f -= r.lineHeight
  }
}
async function _a(e, {
  src: o,
  width: t,
  height: a
}, n) {
  const l = new Image;
  await new Promise(i => {
    l.onload = i, l.src = o
  }), "topIndent" in n ? (e.topPosition += n.topIndent, e.ctx.drawImage(l, e.width / 2 - t / 2, e.topPosition, t, a), e.topPosition += a) : "bottom" in n && e.ctx.drawImage(l, e.width / 2 - t / 2, e.height - n.bottom, t, a)
}
async function $a(e, {
  src: o
}) {
  const t = new Image;
  await new Promise(a => {
    t.onload = a, t.src = o
  }), e.ctx.drawImage(t, 0, 0, e.width, e.height)
}
async function Ea(e, o) {
  const t = document.createElement("canvas"),
    a = t.getContext("2d");
  if (!a) return;
  const n = window.devicePixelRatio || 1,
    l = new FontFace("RoobertPro", `url(${ya})`, {
      weight: "500"
    }),
    i = new FontFace("RoobertPro", `url(${Ft})`, {
      weight: "700"
    });
  return await Promise.all([ce().getReferralToken(), document.fonts.ready, l.load(), i.load()]), document.fonts.add(l), document.fonts.add(i), a.clearRect(0, 0, e, o), t.width = e * n, t.height = o * n, a.scale(n, n), a.imageSmoothingEnabled = !0, a.imageSmoothingQuality = "high", t.style.width = e * n + "px", t.style.height = o * n + "px", t.style.scale = `${1/n}`, Ia(a, t, o, e)
}
async function Ra({
  canvas: e,
  name: o,
  text: t
}) {
  const a = await new Promise(f => e.toBlob(f, "image/png"));
  if (!a) return Ce();
  const n = new File([a], "story-image.png", {
      type: "image/png"
    }),
    l = await ie.uploadFile(n, () => {});
  if (!xe(l)) return Ce();
  const i = Fe().public.TELEGRAM_APP_URL,
    r = l.data.url,
    u = `${i}?startapp=ref_${ce().referralToken.value}`;
  try {
    return te().$webApp.shareToStory(r, {
      text: t,
      widget_link: {
        url: u,
        name: o
      }
    }), ct(void 0)
  } catch {
    return Ce()
  }
}
const Ma = {
    class: "pages-tasks-share-story"
  },
  Da = P({
    __name: "TasksShareStory",
    emits: ["success", "close"],
    setup(e, {
      emit: o
    }) {
      const t = o,
        a = Ve().getters.getUser,
        n = ut(),
        l = M({
          type: "loading"
        }),
        i = M(!1),
        r = M(),
        {
          generate: u
        } = Ca(),
        f = async () => {
          var A, v;
          const c = (A = a.value) == null ? void 0 : A.username,
            k = (v = a.value) == null ? void 0 : v.createdAt,
            p = n.currentStreakDays.value;
          if (!c || !k || p === void 0 || !r.value) return;
          const $ = r.value.clientWidth,
            g = r.value.clientHeight,
            T = await u({
              type: "task-joined-at",
              data: {
                username: c,
                userCreatedAt: k,
                currentStreakDays: p,
                width: $,
                height: g
              }
            });
          T && (r.value.appendChild(T.canvas), l.value = {
            type: "loaded",
            story: T
          })
        }, b = async () => {
          if (l.value.type !== "loaded") return;
          i.value = !0;
          const c = l.value.story.share;
          await (async () => {
            const k = await c();
            xe(k) && t("success")
          })(), i.value = !1
        }, m = dt(f, 50).debouncedFunction;
      return he(() => [n.currentStreakDays.value, r.value, a.value], m, {
        immediate: !0
      }), window.addEventListener("resize", m), pe(() => {
        window.removeEventListener("resize", m)
      }), Ke().initHandler(() => t("close"), "tasks-share-story"), (c, k) => {
        const p = mt,
          $ = ge,
          g = Ye;
        return d(), S("div", Ma, [s(l).type === "loading" ? (d(), I(p, {
          key: 0,
          fixed: ""
        })) : (d(), I(g, {
          key: 1,
          "ignore-tabs": "",
          "no-background": "",
          "hide-space": ""
        }, {
          default: U(() => [R($, {
            size: s(re).LARGE,
            fill: "",
            loading: s(i),
            onClick: b
          }, {
            default: U(() => [ye(x(("t" in c ? c.t : s(E))("memepad.tasks.share_stories.button")), 1)]),
            _: 1
          }, 8, ["size", "loading"])]),
          _: 1
        })), C("div", {
          ref_key: "canvasContainer",
          ref: r,
          class: "canvas-wrapper"
        }, null, 512)])
      }
    }
  }),
  Na = L(Da, [
    ["__scopeId", "data-v-7593f978"]
  ]),
  Ba = () => {
    const {
      tonConnectUI: e
    } = kt();
    return {
      sendTransaction: async t => {
        const a = Ie.Address.parse(t.address),
          n = {
            validUntil: Math.floor(Date.now() / 1e3) + 360,
            messages: [{
              address: a.toString(),
              amount: Ie.toNano(t.amountTON.toString()).toString(),
              payload: (() => {
                if (t.message) return Ie.beginCell().storeUint(0, 32).storeStringTail(t.message).endCell().toBoc().toString("base64")
              })()
            }]
          };
        return await e.value.sendTransaction(n)
      }
    }
  },
  Qe = P({
    __name: "TasksItemInnerWrapper",
    props: B({
      task: {
        type: Object,
        required: !0
      },
      questDetails: {
        type: Object,
        default: void 0
      },
      startCallback: {
        type: Function,
        required: !0
      },
      verifyCallback: {
        type: Function,
        required: !0
      }
    }, {
      claimOverride: {
        required: !0
      },
      claimOverrideModifiers: {}
    }),
    emits: B(["open:subtasks-modal"], ["update:claimOverride"]),
    setup(e, {
      emit: o
    }) {
      const t = e,
        a = o,
        n = Q(e, "claimOverride"),
        l = Ba(),
        i = pt(),
        r = M(!1),
        u = () => {
          r.value = !1, t.task.status === H.NOT_STARTED && t.startCallback()
        },
        f = () => {
          if ([W.SOCIAL_MEDIA_CHECK, W.SOCIAL_SUBSCRIPTION].includes(t.task.type) && t.task.socialSubscription) {
            const v = t.task.socialSubscription.url;
            t.task.socialSubscription.openInTelegram ? te().$webApp.openTelegramLink(v) : v.startsWith("http") ? te().$webApp.openLink(v) : we().push(v)
          }
          if (t.task.type === W.APPLICATION_LAUNCH && t.task.applicationLaunch && te().$webApp.openTelegramLink(t.task.applicationLaunch.url), t.task.type === W.WALLET_CONNECTION) {
            const v = () => {
              t.task.status === H.NOT_STARTED && t.startCallback()
            };
            i.runConnectionFlow(v)
          }
          if (t.task.type === W.INTERNAL && t.task.subType === _e.SHARE_STORIES && (r.value = !0), t.task.type === W.ONCHAIN_TRANSACTION) {
            const v = async () => {
              const O = t.task.onchainTransaction;
              if (t.task.status !== H.NOT_STARTED || !O) return;
              const h = Ve().getters.mustGetUser.value.id,
                V = `${t.task.id}:${h}`;
              await l.sendTransaction({
                address: O.address,
                amountTON: O.amount,
                message: V
              }).then(t.startCallback).catch()
            };
            i.runConnectionFlow(v)
          }
          t.task.validationType === bt.MEMEPAD && we().push({
            name: "memepad",
            query: {
              memepadFrom: yt.TASK
            }
          })
        },
        b = () => {
          t.task.status === H.READY_FOR_VERIFY && f();
          const O = Z(t.task.status, n.value),
            h = gt(t.task.status),
            V = O || h,
            q = ae(t.task.kind);
          V && (q || f(), q && a("open:subtasks-modal"))
        },
        m = w(() => t.task.kind === Y.GROUP ? !0 : !t.task.reward.value.isZero()),
        c = w(() => {
          var v;
          if (!m.value) return "";
          if ((t.task.kind === Y.QUEST && t.task.reward.value.isZero() || t.task.kind === Y.GROUP) && "subTasks" in t.task) {
            if (!((v = t.task.subTasks) != null && v.length)) return "";
            const O = () => ({
                max: new Be(0),
                finished: new Be(0)
              }),
              h = t.task.subTasks.reduce((V, q) => {
                const F = V.get(q.reward.symbol) ?? O();
                return F.max = F.max.add(q.reward.value), Z(q.status, n.value) && (F.finished = F.finished.add(q.reward.value)), V.set(q.reward.symbol, F), V
              }, new Map);
            return Array.from(h.entries()).map(([V, q]) => `${q.finished}/${q.max} ${V}`).join(", ")
          }
          return `+${$e(t.task.reward.value)} ${t.task.reward.symbol}`
        }),
        k = M(),
        p = M(!1),
        $ = () => {
          const v = () => {
            t.task.kind !== Y.ONGOING && (ae(t.task.kind) || (f(), t.task.type !== W.WALLET_CONNECTION && t.task.type !== W.ONCHAIN_TRANSACTION && (t.task.type === W.INTERNAL && t.task.subType === _e.SHARE_STORIES || t.startCallback())))
          };
          if (t.task.isDisclaimerRequired) {
            k.value = {
              startFn: v
            };
            return
          }
          v()
        },
        g = w(() => {
          if (t.task.type === W.PROGRESS_TARGET) {
            const v = Ne(t.task.progressTarget, "progress target"),
              O = Se(v.target, {
                accuracy: v.accuracy
              });
            return `${t.task.title} ${O}${v.postfix?` ${v.postfix}`:""}`
          }
          return t.task.title
        }),
        T = w(() => {
          if (t.questDetails) return {
            label: `${t.questDetails.countFinished}/${t.questDetails.countTotal}`,
            postfix: ` ${E("base.n.tasks",t.questDetails.countTotal)}`,
            finished: t.questDetails.countFinished,
            total: t.questDetails.countTotal,
            done: t.questDetails.countFinished === t.questDetails.countTotal
          };
          if (t.task.type === W.PROGRESS_TARGET && t.task.progressTarget) {
            const v = Ne(t.task.progressTarget, "progress target"),
              O = Se(v.progress, {
                accuracy: v.accuracy
              }),
              h = Se(v.target, {
                accuracy: v.accuracy
              });
            return {
              label: `${O}/${h}`,
              postfix: `${v.postfix?` ${v.postfix}`:""}`,
              finished: v.progress.toNumber(),
              total: v.target.toNumber(),
              done: v.progress === v.target
            }
          }
        }),
        A = w(() => ({
          onClick: b,
          rewardText: c,
          startProxy: $,
          title: g,
          progress: T,
          openVerify: () => p.value = !0
        }));
      return Ke().initWatcher({
        key: "tasks-item-inner-wrapper",
        watchFn: () => p.value,
        callback: () => p.value = !1
      }), (v, O) => {
        var F;
        const h = da,
          V = ba,
          q = Na;
        return d(), S(G, null, [oe(v.$slots, "default", ft(vt(s(A)))), R(h, {
          "model-value": !!s(k),
          "product-name": e.task.productName,
          "icon-url": s(me)(e.task.iconFileKey),
          "start-fn": (F = s(k)) == null ? void 0 : F.startFn,
          "onUpdate:modelValue": O[0] || (O[0] = ee => ee ? void 0 : k.value = void 0)
        }, null, 8, ["model-value", "product-name", "icon-url", "start-fn"]), s(p) ? (d(), I(V, {
          key: 0,
          task: e.task,
          "verify-callback": e.verifyCallback,
          onDoAction: O[1] || (O[1] = ee => f()),
          onClose: O[2] || (O[2] = ee => p.value = !1)
        }, null, 8, ["task", "verify-callback"])) : _("", !0), s(r) ? (d(), I(q, {
          key: 1,
          onClose: O[3] || (O[3] = ee => r.value = !1),
          onSuccess: u
        })) : _("", !0)], 64)
      }
    }
  }),
  Ua = ["onClick"],
  La = ["src"],
  Pa = {
    class: "details"
  },
  qa = {
    class: "title"
  },
  Fa = {
    key: 0,
    class: "progress-reward"
  },
  xa = {
    key: 0,
    class: "progress"
  },
  Va = {
    key: 1,
    class: "reward"
  },
  Ka = P({
    inheritAttrs: !1,
    __name: "TasksListItem",
    props: B({
      task: {
        type: Object,
        required: !0
      },
      questDetails: {
        type: Object,
        default: void 0
      },
      startCallback: {
        type: Function,
        required: !0
      },
      claimCallback: {
        type: Function,
        required: !0
      },
      noBorder: {
        type: Boolean,
        default: !1
      },
      isNested: {
        type: Boolean,
        default: !1
      },
      verifyCallback: {
        type: Function,
        required: !0
      },
      itemMode: {
        type: String,
        required: !0
      }
    }, {
      claimOverride: {
        required: !0
      },
      claimOverrideModifiers: {}
    }),
    emits: B(["ui:claimed", "open:subtasks-modal", "pill:click"], ["update:claimOverride"]),
    setup(e) {
      const o = Q(e, "claimOverride");
      return (t, a) => {
        const n = Re,
          l = Qe,
          i = ue("img-error");
        return d(), I(l, {
          "claim-override": o.value,
          "onUpdate:claimOverride": a[4] || (a[4] = r => o.value = r),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": a[5] || (a[5] = r => t.$emit("open:subtasks-modal"))
        }, {
          default: U(({
            onClick: r,
            rewardText: u,
            startProxy: f,
            title: b,
            progress: m,
            openVerify: c
          }) => {
            var k;
            return [C("div", Tt({
              class: "pages-tasks-list-item-label"
            }, t.$attrs, {
              onClick: r
            }), [C("div", {
              class: se(["container", {
                "no-border": e.noBorder
              }])
            }, [de(C("img", {
              src: s(me)(e.task.iconFileKey),
              alt: "Task icon"
            }, null, 8, La), [
              [i]
            ]), C("div", Pa, [C("div", qa, x(b.value), 1), m.value || u.value ? (d(), S("div", Fa, [(k = m.value) != null && k.label ? (d(), S("span", xa, x(`${m.value.label}${m.value.postfix}`) + x(u.value ? ", " : ""), 1)) : _("", !0), u.value ? (d(), S("span", Va, x(u.value), 1)) : _("", !0)])) : _("", !0)]), e.task.status ? (d(), I(n, {
              key: 0,
              "claim-override": o.value,
              "onUpdate:claimOverride": a[0] || (a[0] = p => o.value = p),
              status: e.task.status,
              kind: e.task.kind,
              "start-callback": f,
              "claim-callback": e.claimCallback,
              "is-nested": e.isNested,
              "item-mode": e.itemMode,
              class: "pill-btn",
              "onUi:claimed": a[1] || (a[1] = p => t.$emit("ui:claimed")),
              "onOpen:subtasksModal": a[2] || (a[2] = p => t.$emit("open:subtasks-modal")),
              "onOpen:verify": c,
              onClick: a[3] || (a[3] = p => t.$emit("pill:click"))
            }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "is-nested", "item-mode", "onOpen:verify"])) : _("", !0)], 2)], 16, Ua)]
          }),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  je = L(Ka, [
    ["__scopeId", "data-v-61588e22"]
  ]),
  Ga = {
    class: "label"
  },
  Oe = 185.074,
  Wa = P({
    __name: "TasksProgressPill",
    props: {
      finished: {
        type: Number,
        required: !0
      },
      total: {
        type: Number,
        required: !0
      },
      label: {
        type: String,
        required: !0
      },
      mode: {
        type: String,
        default: le.DARK
      }
    },
    setup(e) {
      ht(a => ({
        b63fb046: Oe,
        "0e5a5f8f": s(t)
      }));
      const o = e,
        t = w(() => Oe - Oe * (o.finished / o.total));
      return (a, n) => {
        const l = ne;
        return d(), S("div", {
          class: se(["pages-tasks-progress-pill", `is-${e.mode}`])
        }, [C("span", Ga, x(e.label), 1), R(l, {
          name: "special/progress-pill",
          class: "icon"
        })], 2)
      }
    }
  }),
  Ha = L(Wa, [
    ["__scopeId", "data-v-293728e0"]
  ]),
  Ya = ["onClick"],
  Qa = {
    key: 0,
    class: "icons"
  },
  ja = ["src"],
  za = {
    class: "title"
  },
  Ja = {
    key: 1,
    class: "points"
  },
  Xa = {
    class: "footer"
  },
  Za = P({
    __name: "TasksCard",
    props: B({
      task: {
        type: Object,
        required: !0
      },
      questDetails: {
        type: Object,
        default: void 0
      },
      startCallback: {
        type: Function,
        required: !0
      },
      claimCallback: {
        type: Function,
        required: !0
      },
      verifyCallback: {
        type: Function,
        required: !0
      },
      short: {
        type: Boolean,
        default: !1
      },
      colorMode: {
        type: Number,
        default: 0
      },
      itemMode: {
        type: String,
        required: !0
      }
    }, {
      claimOverride: {
        required: !0
      },
      claimOverrideModifiers: {}
    }),
    emits: B(["ui:claimed", "open:subtasks-modal", "pill:click"], ["update:claimOverride"]),
    setup(e) {
      const o = e,
        t = w(() => !o.short),
        a = w(() => o.short ? le.LIGHT : le.DARK),
        n = w(() => {
          var r;
          return o.task.kind === Y.GROUP ? ((r = o.task.subTasks) == null ? void 0 : r.map(u => u.iconFileKey)) ?? [] : [o.task.iconFileKey]
        }),
        l = Q(e, "claimOverride"),
        i = w(() => {
          if (o.short) return;
          if (o.task.color) return o.task.color;
          const r = ["#B9BBBC", "#BCABA6", "#BAAFC3", "#BEC0CB", "#C3BFB3"];
          return r[o.colorMode % r.length]
        });
      return (r, u) => {
        const f = Re,
          b = ne,
          m = Ha,
          c = Qe,
          k = ue("img-error");
        return d(), I(c, {
          "claim-override": l.value,
          "onUpdate:claimOverride": u[4] || (u[4] = p => l.value = p),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": u[5] || (u[5] = p => r.$emit("open:subtasks-modal"))
        }, {
          default: U(({
            onClick: p,
            startProxy: $,
            title: g,
            progress: T,
            openVerify: A,
            rewardText: v
          }) => [C("div", {
            class: se(["pages-tasks-card", {
              "is-short": e.short
            }]),
            style: At({
              backgroundColor: s(i)
            }),
            onClick: p
          }, [s(t) ? (d(), S("div", Qa, [(d(!0), S(G, null, z(s(n), (O, h) => de((d(), S("img", {
            key: h,
            src: s(me)(O),
            alt: "Task icon",
            class: "icon",
            width: "48",
            height: "48"
          }, null, 8, ja)), [
            [k]
          ])), 128))])) : _("", !0), C("div", za, x(g.value), 1), v.value ? (d(), S("div", Ja, x(v.value), 1)) : _("", !0), C("div", Xa, [e.task.status ? (d(), I(f, {
            key: 0,
            "claim-override": l.value,
            "onUpdate:claimOverride": u[0] || (u[0] = O => l.value = O),
            status: e.task.status,
            kind: e.task.kind,
            "start-callback": $,
            "claim-callback": e.claimCallback,
            "is-nested": !1,
            mode: s(a),
            "item-mode": e.itemMode,
            "onUi:claimed": u[1] || (u[1] = O => r.$emit("ui:claimed")),
            "onOpen:subtasksModal": u[2] || (u[2] = O => r.$emit("open:subtasks-modal")),
            "onOpen:verify": A,
            onClick: u[3] || (u[3] = O => r.$emit("pill:click"))
          }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "mode", "item-mode", "onOpen:verify"])) : _("", !0), T.value ? (d(), S(G, {
            key: 1
          }, [T.value.done ? (d(), I(b, {
            key: 0,
            name: "circle-check-white",
            class: "done-icon"
          })) : (d(), I(m, {
            key: 1,
            finished: T.value.finished,
            total: T.value.total,
            label: T.value.label,
            mode: s(a)
          }, null, 8, ["finished", "total", "label", "mode"]))], 64)) : _("", !0)])], 14, Ya)]),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  es = L(Za, [
    ["__scopeId", "data-v-04302302"]
  ]),
  ze = () => {
    const e = Ct("tasks-open-sheet");
    return {
      openTaskSheet: a => {
        e.emit(a.id)
      },
      onOpenTaskSheet: (a, n) => {
        e.subscribe(l => {
          a.id === l && n()
        })
      }
    }
  },
  ts = {
    key: 1,
    class: "heading"
  },
  as = {
    key: 1,
    class: "description"
  },
  ss = P({
    __name: "TasksSubtasksModal",
    props: B({
      task: {
        type: Object,
        required: !0
      },
      title: {
        type: String,
        required: !0
      },
      startSubTaskCallback: {
        type: Function,
        required: !0
      },
      claimCallback: {
        type: Function,
        required: !0
      },
      verifyCallback: {
        type: Function,
        required: !0
      },
      itemMode: {
        type: String,
        required: !0
      }
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {},
      tasksClaimOverride: {
        required: !0
      },
      tasksClaimOverrideModifiers: {}
    }),
    emits: B(["ui:claimed", "click:task", "pill:click"], ["update:modelValue", "update:tasksClaimOverride"]),
    setup(e) {
      const o = e,
        t = Q(e, "modelValue"),
        a = Q(e, "tasksClaimOverride"),
        n = w(() => o.task.kind === Y.QUEST);
      ce().getReferralToken();
      const l = () => {
          t.value = !1, u.value = !0
        },
        i = () => {
          u.value = !1, t.value = !0
        },
        r = M(o.task.isShared),
        u = M(!1),
        f = w(() => E("earn.quest.share.text")),
        b = w(() => `tasksheet_${btoa(o.task.id)}-ref_${ce().referralToken.value}`);
      return ze().onOpenTaskSheet(o.task, () => {
        t.value = !0
      }), (m, c) => {
        const k = ne,
          p = xt,
          $ = je,
          g = Re,
          T = qe,
          A = It;
        return d(), S(G, null, [R(T, {
          modelValue: t.value,
          "onUpdate:modelValue": c[3] || (c[3] = v => t.value = v),
          title: e.title
        }, St({
          default: U(() => [C("div", {
            class: se(["pages-tasks-subtasks-modal", {
              "has-share": s(r)
            }])
          }, [s(r) ? (d(), S("button", {
            key: 0,
            type: "button",
            class: "reset share-btn",
            onClick: l
          }, [R(k, {
            name: "share",
            class: "icon"
          }), c[5] || (c[5] = C("div", {
            class: "labe"
          }, "Invite and earn up to 8% revshare", -1))])) : _("", !0), e.task.bannerFileKey || e.task.description ? (d(), S("div", ts, [e.task.bannerFileKey ? (d(), I(p, {
            key: 0,
            url: s(me)(e.task.bannerFileKey),
            alt: "Task banner",
            class: "banner"
          }, null, 8, ["url"])) : _("", !0), e.task.description ? (d(), S("div", as, x(e.task.description), 1)) : _("", !0)])) : _("", !0), e.task.subTasks ? (d(), I(Ee, {
            key: 2,
            tag: "div",
            name: "list-shuffle-transition",
            class: "nested-tasks"
          }, {
            default: U(() => [(d(!0), S(G, null, z(e.task.subTasks, (v, O) => (d(), I($, {
              key: v.id,
              "claim-override": a.value[v.id],
              "onUpdate:claimOverride": h => a.value[v.id] = h,
              task: v,
              "start-callback": () => e.startSubTaskCallback(v),
              "claim-callback": () => e.claimCallback(v),
              "verify-callback": h => e.verifyCallback(v, h),
              "no-border": O === e.task.subTasks.length - 1,
              "item-mode": s(K).LIST_ITEM,
              "is-nested": "",
              "onUi:claimed": h => m.$emit("ui:claimed", {
                task: v,
                isQuest: !1
              }),
              onClick: h => m.$emit("click:task", v),
              "onPill:click": h => m.$emit("pill:click", v)
            }, null, 8, ["claim-override", "onUpdate:claimOverride", "task", "start-callback", "claim-callback", "verify-callback", "no-border", "item-mode", "onUi:claimed", "onClick", "onPill:click"]))), 128))]),
            _: 1
          })) : _("", !0)], 2)]),
          _: 2
        }, [s(n) ? {
          name: "footer",
          fn: U(() => [e.task.status && !s(Z)(e.task.status, a.value[e.task.id]) ? (d(), I(g, {
            key: 0,
            "claim-override": a.value[e.task.id],
            "onUpdate:claimOverride": c[0] || (c[0] = v => a.value[e.task.id] = v),
            "is-quest-button": "",
            status: e.task.status,
            kind: e.task.kind,
            reward: e.task.reward,
            "start-callback": () => {},
            "claim-callback": () => e.claimCallback(e.task),
            "item-mode": e.itemMode,
            "onUi:claimed": c[1] || (c[1] = v => m.$emit("ui:claimed", {
              task: e.task,
              isQuest: !0
            })),
            onClick: c[2] || (c[2] = v => m.$emit("pill:click", e.task))
          }, null, 8, ["claim-override", "status", "kind", "reward", "claim-callback", "item-mode"])) : _("", !0)]),
          key: "0"
        } : void 0]), 1032, ["modelValue", "title"]), R(A, {
          modelValue: s(u),
          "onUpdate:modelValue": c[4] || (c[4] = v => ke(u) ? u.value = v : null),
          title: ("t" in m ? m.t : s(E))("earn.quest.share.sheet.title"),
          "share-text": s(f),
          subtitle: e.task.sharingDescription,
          startapp: s(b),
          "copied-notification": ("t" in m ? m.t : s(E))("frens.invite.link_copied"),
          "back-icon": "",
          onBack: i
        }, null, 8, ["modelValue", "title", "share-text", "subtitle", "startapp", "copied-notification"])], 64)
      }
    }
  }),
  ns = L(ss, [
    ["__scopeId", "data-v-84322842"]
  ]),
  is = P({
    __name: "TasksItem",
    props: B({
      task: {
        type: Object,
        required: !0
      },
      startCallback: {
        type: Function,
        required: !0
      },
      claimCallback: {
        type: Function,
        required: !0
      },
      verifyCallback: {
        type: Function,
        required: !0
      },
      mode: {
        type: String,
        default: K.LIST_ITEM
      },
      idx: {
        type: Number,
        default: 0
      }
    }, {
      tasksClaimOverride: {
        required: !0
      },
      tasksClaimOverrideModifiers: {}
    }),
    emits: B(["ui:claimed", "request:update", "pill:click", "mounted", "unmounted"], ["update:tasksClaimOverride"]),
    setup(e, {
      emit: o
    }) {
      const t = e,
        a = o,
        n = Q(e, "tasksClaimOverride"),
        l = M(!1),
        i = M(void 0),
        r = w(() => {
          var m, c;
          if (!ae(t.task.kind)) return;
          const f = ((m = t.task.subTasks) == null ? void 0 : m.length) ?? 0,
            b = ((c = t.task.subTasks) == null ? void 0 : c.filter(k => Z(k.status, n.value[k.id])).length) ?? 0;
          return {
            countTotal: f,
            countFinished: b,
            progressLabel: `${b}/${f} ${E("base.n.tasks",f)}`,
            modalTitle: `${t.task.title} ${b}/${f}`
          }
        }),
        u = f => {
          f.isQuest ? l.value = !1 : a("request:update"), a("ui:claimed", f.task)
        };
      return Ot(() => {
        i.value && a("mounted", i.value)
      }), pe(() => {
        i.value && a("unmounted", i.value)
      }), (f, b) => {
        const m = je,
          c = es,
          k = ns;
        return d(), S("div", {
          ref_key: "taskItemEl",
          ref: i,
          class: "pages-tasks-item"
        }, [e.mode === s(K).LIST_ITEM ? (d(), I(m, {
          key: 0,
          "claim-override": n.value[e.task.id],
          "onUpdate:claimOverride": b[0] || (b[0] = p => n.value[e.task.id] = p),
          task: e.task,
          "quest-details": s(r),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": p => e.verifyCallback(e.task, p),
          "item-mode": e.mode,
          "onUi:claimed": b[1] || (b[1] = p => f.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": b[2] || (b[2] = p => l.value = !0),
          "onPill:click": b[3] || (b[3] = p => f.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "item-mode"])) : e.mode === s(K).SHORT_CARD || e.mode === s(K).CARD ? (d(), I(c, {
          key: 1,
          "claim-override": n.value[e.task.id],
          "onUpdate:claimOverride": b[4] || (b[4] = p => n.value[e.task.id] = p),
          task: e.task,
          "quest-details": s(r),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": p => e.verifyCallback(e.task, p),
          short: e.mode === s(K).SHORT_CARD,
          "color-mode": e.idx,
          "item-mode": e.mode,
          "onUi:claimed": b[5] || (b[5] = p => f.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": b[6] || (b[6] = p => l.value = !0),
          "onPill:click": b[7] || (b[7] = p => f.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "short", "color-mode", "item-mode"])) : _("", !0), s(r) ? (d(), I(k, {
          key: 2,
          modelValue: s(l),
          "onUpdate:modelValue": b[8] || (b[8] = p => ke(l) ? l.value = p : null),
          "tasks-claim-override": n.value,
          "onUpdate:tasksClaimOverride": b[9] || (b[9] = p => n.value = p),
          task: e.task,
          title: s(r).modalTitle,
          "start-sub-task-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "item-mode": e.mode,
          "onUi:claimed": b[10] || (b[10] = p => u(p)),
          "onPill:click": b[11] || (b[11] = p => f.$emit("pill:click", p))
        }, null, 8, ["modelValue", "tasks-claim-override", "task", "title", "start-sub-task-callback", "claim-callback", "verify-callback", "item-mode"])) : _("", !0)], 512)
      }
    }
  }),
  Je = L(is, [
    ["__scopeId", "data-v-86f27969"]
  ]),
  os = P({
    __name: "TasksList",
    props: B({
      tasks: {
        type: Array,
        required: !0
      },
      taskMode: {
        type: String,
        required: !0
      },
      startCallback: {
        type: Function,
        required: !0
      },
      claimCallback: {
        type: Function,
        required: !0
      },
      verifyCallback: {
        type: Function,
        required: !0
      }
    }, {
      tasksClaimOverride: {
        required: !0
      },
      tasksClaimOverrideModifiers: {}
    }),
    emits: B(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      const o = e,
        t = Q(e, "tasksClaimOverride"),
        a = Ge(),
        n = c => [K.SHORT_CARD, K.CARD].includes(o.taskMode) ? o.tasks.some(p => p.id === c.id) : !1,
        l = {},
        i = (c, k) => ({
          source: k + 1,
          kind: c.kind,
          type: c.type,
          title: c.title,
          task_id: c.id,
          ...!ae(c.kind) || !("subTasks" in c) || !c.subTasks ? {
            subtasks_done: Z(c.status, t.value[c.id]) ? 1 : 0,
            subtasks_total: 1
          } : {
            subtasks_done: c.subTasks.filter($ => Z($.status, t.value[$.id])).length,
            subtasks_total: c.subTasks.length
          }
        }),
        r = (c, k) => {
          if (!n(c)) return;
          l[c.id] || (l[c.id] = !0);
          const p = i(c, k);
          o.taskMode === K.CARD ? a.earn.earnHighlightsTaskShow(p) : o.taskMode === K.SHORT_CARD && a.earn.earnWeeklyTaskShow(p)
        },
        u = (c, k) => {
          if (!n(c)) return;
          l[c.id] || r(c, k);
          const p = i(c, k);
          o.taskMode === K.CARD ? a.earn.earnHighlightsTaskClick(p) : o.taskMode === K.SHORT_CARD && a.earn.earnWeeklyTaskClick(p)
        },
        f = new IntersectionObserver(c => {
          const k = c[0],
            p = k.target.getAttribute("data-task-id");
          if (!p) return;
          const $ = o.tasks.find(v => v.id === p);
          if (!$ || !(k.intersectionRatio >= .5)) return;
          const T = $,
            A = o.tasks.indexOf(T);
          r(T, A)
        }, {
          threshold: .5
        }),
        b = (c, k) => {
          n(c) && f.observe(k)
        },
        m = (c, k) => {
          n(c) && f.unobserve(k)
        };
      return pe(() => f.disconnect()), (c, k) => {
        const p = Je,
          $ = ue("horizontal-wheel-scroll");
        return de((d(), I(Ee, {
          tag: "div",
          name: "list-shuffle-transition",
          class: se(["pages-tasks-list", `is-${e.taskMode.toLowerCase()}`])
        }, {
          default: U(() => [(d(!0), S(G, null, z(e.tasks, (g, T) => (d(), I(p, {
            key: g.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": k[0] || (k[0] = A => t.value = A),
            task: g,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            mode: e.taskMode,
            idx: T,
            class: "item",
            "data-task-id": g.id,
            "onUi:claimed": k[1] || (k[1] = A => c.$emit("ui:claimed", A)),
            "onRequest:update": k[2] || (k[2] = A => c.$emit("request:update")),
            "onPill:click": A => u(A, T),
            onMounted: A => b(g, A),
            onUnmounted: A => m(g, A)
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback", "mode", "idx", "data-task-id", "onPill:click", "onMounted", "onUnmounted"]))), 128))]),
          _: 1
        }, 8, ["class"])), [
          [$]
        ])
      }
    }
  }),
  rs = L(os, [
    ["__scopeId", "data-v-e804420d"]
  ]),
  ls = {
    key: 0,
    class: "pages-tasks-sub-sections"
  },
  cs = {
    key: 0,
    class: "empty"
  },
  us = {
    class: "inner"
  },
  ds = P({
    __name: "TasksSubSections",
    props: B({
      subSections: {
        type: Array,
        required: !0
      },
      startCallback: {
        type: Function,
        required: !0
      },
      claimCallback: {
        type: Function,
        required: !0
      },
      verifyCallback: {
        type: Function,
        required: !0
      }
    }, {
      tasksClaimOverride: {
        required: !0
      },
      tasksClaimOverrideModifiers: {}
    }),
    emits: B(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      var i;
      const o = e,
        t = Q(e, "tasksClaimOverride"),
        a = w(() => o.subSections.map(r => ({
          value: r.title,
          label: r.title,
          dot: r.tasks.some(u => wt(u, t.value))
        }))),
        n = M((i = a.value[0]) == null ? void 0 : i.value),
        l = w(() => {
          var r;
          return ((r = o.subSections.find(u => u.title === n.value)) == null ? void 0 : r.tasks) ?? []
        });
      return (r, u) => {
        const f = Vt,
          b = ne,
          m = Je;
        return s(l).length ? (d(), S("div", ls, [R(f, {
          modelValue: s(n),
          "onUpdate:modelValue": u[0] || (u[0] = c => ke(n) ? n.value = c : null),
          items: s(a)
        }, null, 8, ["modelValue", "items"]), s(l).length ? (d(), I(Ee, {
          key: s(n),
          tag: "div",
          name: "list-shuffle-transition",
          class: "tasks-list"
        }, {
          default: U(() => [(d(!0), S(G, null, z(s(l), c => (d(), I(m, {
            key: c.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": u[1] || (u[1] = k => t.value = k),
            task: c,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            "onUi:claimed": u[2] || (u[2] = k => r.$emit("ui:claimed", k)),
            "onRequest:update": u[3] || (u[3] = k => r.$emit("request:update"))
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback"]))), 128))]),
          _: 1
        })) : (d(), S("div", cs, [C("div", us, [R(b, {
          name: "warning-circle-check",
          class: "icon"
        }), u[4] || (u[4] = C("span", {
          class: "label"
        }, " Hooray! You've nailed every task! ", -1))])]))])) : _("", !0)
      }
    }
  }),
  ms = L(ds, [
    ["__scopeId", "data-v-2fd71113"]
  ]),
  ks = {
    class: "pages-tasks-section"
  },
  ps = P({
    __name: "TasksSection",
    props: B({
      section: {
        type: Object,
        required: !0
      },
      startCallback: {
        type: Function,
        required: !0
      },
      claimCallback: {
        type: Function,
        required: !0
      },
      verifyCallback: {
        type: Function,
        required: !0
      }
    }, {
      tasksClaimOverride: {
        required: !0
      },
      tasksClaimOverrideModifiers: {}
    }),
    emits: B(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      const o = e,
        t = w(() => _t(o.section)),
        a = Q(e, "tasksClaimOverride"),
        n = i => {
          const r = i.tasks,
            u = k => !We(k),
            f = k => Ue(k, a.value),
            b = k => {
              const p = k.subTasks ? Ue(k.subTasks, a.value) : void 0;
              return {
                ...k,
                subTasks: p
              }
            },
            m = k => {
              const p = k.filter(u);
              return f(p).map(b)
            },
            c = k => k.map(p => ({
              ...p,
              tasks: m(p.tasks)
            }));
          return {
            ...i,
            tasks: m(r),
            subSections: c(i.subSections)
          }
        },
        l = w(() => n(o.section));
      return (i, r) => {
        const u = Jt,
          f = rs,
          b = ms;
        return d(), S("div", ks, [s(l).title || s(l).description ? (d(), I(u, {
          key: 0,
          title: s(l).title,
          subtitle: s(l).description
        }, null, 8, ["title", "subtitle"])) : _("", !0), s(l).tasks.length ? (d(), I(f, {
          key: 1,
          "tasks-claim-override": a.value,
          "onUpdate:tasksClaimOverride": r[0] || (r[0] = m => a.value = m),
          tasks: s(l).tasks,
          "task-mode": s(t),
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": r[1] || (r[1] = m => i.$emit("ui:claimed", m)),
          "onRequest:update": r[2] || (r[2] = m => i.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "tasks", "task-mode", "start-callback", "claim-callback", "verify-callback"])) : _("", !0), R(b, {
          "tasks-claim-override": a.value,
          "onUpdate:tasksClaimOverride": r[3] || (r[3] = m => a.value = m),
          "sub-sections": s(l).subSections,
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": r[4] || (r[4] = m => i.$emit("ui:claimed", m)),
          "onRequest:update": r[5] || (r[5] = m => i.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "sub-sections", "start-callback", "claim-callback", "verify-callback"])])
      }
    }
  }),
  fs = L(ps, [
    ["__scopeId", "data-v-2f6edcc7"]
  ]),
  vs = e => {
    const o = "about:blank",
      t = "https://adsgram.blum.codes/",
      a = new URL(t).origin,
      n = "https://web.telegram.org",
      l = ["accelerometer_changed", "accelerometer_failed", "accelerometer_started", "accelerometer_stopped", "content_safe_area_changed", "device_orientation_changed", "device_orientation_failed", "device_orientation_started", "device_orientation_stopped", "fullscreen_changed", "fullscreen_failed", "gyroscope_changed", "gyroscope_failed", "gyroscope_started", "gyroscope_stopped", "popup_closed", "secondary_button_pressed", "settings_button_pressed", "theme_changed", "viewport_changed", "visibility_changed"],
      {
        $webApp: i,
        $webView: r
      } = te(),
      u = M(!1),
      f = M(o),
      b = w(() => {
        const y = new URLSearchParams(i.data),
          D = ["hash"];
        for (const N of D) y.delete(N);
        return encodeURIComponent($(y))
      }),
      m = w(() => i.version),
      c = w(() => i.platform),
      k = w(() => encodeURIComponent(JSON.stringify(Object.fromEntries(Object.entries(i.themeParams).filter(([, y]) => y !== void 0))))),
      p = w(() => `${t}#tgWebAppData=${b.value}&tgWebAppVersion=${m.value}&tgWebAppPlatform=${c.value}&tgWebAppThemeParams=${k.value}`),
      $ = y => {
        const D = y instanceof URLSearchParams ? y.entries() : Object.entries(y),
          N = [];
        for (const [j, Ze] of D) N.push(`${encodeURIComponent(j)}=${encodeURIComponent(Ze)}`);
        return N.join("&")
      },
      g = y => typeof y.data == "object" && "adEventType" in y.data && y.data.adEventType !== "onError",
      T = y => typeof y.data == "object" && ("errorMessage" in y.data || "adEventType" in y.data && y.data.adEventType === "onError"),
      A = y => g(y) && y.data.adEventType === "onReward",
      v = y => {
        let D = !1;
        if (typeof y.data == "string") try {
          const N = JSON.parse(y.data);
          D = "eventType" in N && "eventData" in N
        } catch {
          D = !1
        }
        return typeof y.data == "object" && "eventType" in y.data && "eventData" in y.data && (D = !0), D
      },
      O = y => {
        const D = new Error(`${JSON.stringify(y.data)} is not a telegram event`);
        if (!v(y)) throw D;
        if (typeof y.data == "string") {
          const {
            eventType: N,
            eventData: j
          } = JSON.parse(y.data);
          return {
            eventType: N,
            eventData: j
          }
        }
        if (typeof y.data == "object" && "eventType" in y.data && typeof y.data.eventType == "string" && "eventData" in y.data) {
          const {
            eventType: N,
            eventData: j
          } = y.data;
          return {
            eventType: N,
            eventData: j
          }
        }
        throw D
      },
      h = () => {
        l.forEach(y => {
          r.onEvent(y, Me)
        })
      },
      V = () => {
        l.forEach(y => {
          r.offEvent(y, Me)
        })
      },
      q = y => {
        if (!v(y)) return;
        const {
          eventType: D,
          eventData: N
        } = O(y);
        Le().debug("ADSGRAM -> TMA", {
          eventType: D,
          eventData: N
        }), r.postEvent(D, void 0, N)
      },
      F = y => {
        var D, N, j;
        Le().debug("TMA -> ADSGRAM", y), (j = (N = (D = e.value) == null ? void 0 : D.contentWindow) == null ? void 0 : N.postMessage) == null || j.call(N, y, a)
      },
      ee = y => {
        v(y) && F(typeof y.data == "string" ? y.data : JSON.stringify(y.data))
      },
      Me = (y, D) => {
        F(JSON.stringify({
          eventType: y,
          eventData: D
        }))
      },
      De = y => {
        if (y.origin === a) {
          if (T(y) || A(y)) {
            Ae();
            return
          }
          q(y)
        }
        y.origin === n && ee(y)
      },
      Xe = () => {
        u.value = !0, f.value = p.value, window.addEventListener("message", De), h()
      },
      Ae = () => {
        V(), window.removeEventListener("message", De), f.value = o, u.value = !1
      };
    return $t(() => Ae()), {
      adsgramFrameSrc: w(() => f.value),
      destroyAdsgram: Ae,
      initAdsgram: Xe,
      isAdsgramFrameVisible: w(() => u.value)
    }
  },
  bs = ["src"],
  ys = P({
    __name: "Adsgram",
    setup(e, {
      expose: o
    }) {
      const t = He("iframe"),
        {
          adsgramFrameSrc: a,
          destroyAdsgram: n,
          initAdsgram: l,
          isAdsgramFrameVisible: i
        } = vs(t);
      return o({
        init: l,
        destroy: n
      }), (r, u) => s(i) ? (d(), S("iframe", {
        key: 0,
        ref: "iframe",
        title: "AD",
        src: s(a),
        class: "adsgram",
        sandbox: "allow-scripts allow-same-origin allow-modals",
        allowfullscreen: "",
        referrerpolicy: "no-referrer"
      }, null, 8, bs)) : _("", !0)
    }
  }),
  gs = L(ys, [
    ["__scopeId", "data-v-29cb9175"]
  ]),
  Ts = P({
    __name: "PageSkeleton",
    props: {
      delay: {
        type: Number,
        default: 120
      }
    },
    setup(e) {
      const o = e,
        t = M(!1),
        a = setTimeout(() => t.value = !0, o.delay);
      return pe(() => clearTimeout(a)), (n, l) => s(t) ? oe(n.$slots, "default", {
        key: 0
      }) : _("", !0)
    }
  }),
  hs = {},
  As = {
    class: "pages-tasks-skeleton"
  },
  Cs = {
    class: "cards"
  },
  Ss = {
    class: "subtitle-wrapper"
  },
  Is = {
    class: "short-cards"
  },
  Os = {
    class: "subtitle-wrapper"
  },
  ws = {
    class: "list-items"
  };

function _s(e, o) {
  const t = Kt,
    a = Ts;
  return d(), I(a, null, {
    default: U(() => [C("div", As, [R(t, {
      class: "title"
    }), C("div", Cs, [(d(), S(G, null, z(2, n => R(t, {
      key: n,
      class: "item"
    })), 64))]), C("div", Ss, [R(t, {
      class: "subtitle"
    })]), C("div", Is, [(d(), S(G, null, z(2, n => R(t, {
      key: n,
      class: "item"
    })), 64))]), C("div", Os, [R(t, {
      class: "subtitle"
    })]), C("div", ws, [(d(), S(G, null, z(7, n => C("div", {
      key: n,
      class: "item"
    }, [R(t, {
      class: "icon"
    }), R(t, {
      class: "details"
    }), R(t, {
      class: "points",
      rounded: ""
    })])), 64))])])]),
    _: 1
  })
}
const $s = L(hs, [
    ["render", _s],
    ["__scopeId", "data-v-4fe8da9f"]
  ]),
  Es = {
    class: "tasks-page page"
  },
  Rs = {
    class: "header"
  },
  Ms = {
    class: "title"
  },
  Ds = {
    class: "sections"
  },
  Ns = P({
    __name: "tasks",
    setup(e) {
      const o = He("adsgram"),
        t = Ge(),
        a = w(() => Et().query.openTaskSheetId),
        n = M(!1),
        l = M(),
        i = M({}),
        u = Rt(async () => Bt(await ie.getTasksSections(te().$webApp.dataUnsafe.query.ref)), g => l.value = g, 15e3),
        f = (g, T) => {
          if (l.value)
            for (const A of l.value) {
              const O = [...A.tasks, ...A.tasks.flatMap(h => h.subTasks ?? []), ...A.subSections.flatMap(h => h.tasks ?? [])].filter(h => h.id === g);
              if (O.length) {
                O.forEach(h => {
                  Object.assign(h, T)
                });
                return
              }
            }
        },
        b = async g => {
          var A;
          g.subType === _e.ADS_GRAM && ((A = o.value) == null || A.init());
          const T = await ie.startTask(g.id);
          T.err || f(g.id, T.data)
        }, m = async g => {
          const T = await ie.claimTask(g.id);
          return T.err ? !1 : (f(g.id, T.data), Dt().update(), !0)
        }, c = async (g, T) => {
          const A = await ie.verifyTask(g.id, T);
          return A.err ? A.code === 400 ? X.WRONG_KEYWORD : X.UNKNOWN_ERROR : (f(g.id, A.data), X.SUCCESS)
        }, k = g => {
          setTimeout(() => delete i.value[g.id], 3e3), g.reward.value.isZero() || Nt().success(E("base.you_got_n", {
            value: $e(g.reward.value),
            currency: g.reward.symbol
          }))
        }, p = w(() => l.value ? l.value.reduce((T, A) => ([...A.tasks, ...A.tasks.flatMap(h => h.subTasks ?? []), ...A.subSections.flatMap(h => h.tasks ?? [])].filter(h => !Z(h.status, i.value[h.id]) && !We(h) && h.kind !== Y.GROUP).map(h => h.id).forEach(h => T.add(h)), T), new Set).size : 0);
      return (async () => {
        t.earn.earnTaskMainPageOpen(), await u.exec()
      })(), he(() => [l.value, a.value], () => {
        if (!l.value || !a.value) return;
        we().replace({
          query: {}
        });
        const g = l.value.flatMap(T => T.tasks).find(T => T.id === a.value && [Y.QUEST, Y.GROUP].includes(T.kind));
        g && Mt(() => ze().openTaskSheet(g))
      }), pe(() => {
        u.destroy()
      }), (g, T) => {
        const A = Ht,
          v = fs,
          O = gs,
          h = $s;
        return d(), S("div", Es, [s(n) ? (d(), I(A, {
          key: 0
        })) : s(l) ? (d(), S(G, {
          key: 1
        }, [C("div", Rs, [C("span", Ms, [ye(x(("t" in g ? g.t : s(E))("earn.title")) + " ", 1), C("sup", null, x(s(p)), 1)])]), C("div", Ds, [(d(!0), S(G, null, z(s(l), (V, q) => (d(), I(v, {
          key: q,
          "tasks-claim-override": s(i),
          "onUpdate:tasksClaimOverride": T[0] || (T[0] = F => ke(i) ? i.value = F : null),
          section: V,
          "start-callback": b,
          "claim-callback": m,
          "verify-callback": c,
          class: "section",
          "onUi:claimed": T[1] || (T[1] = F => k(F)),
          "onRequest:update": T[2] || (T[2] = F => s(u).exec())
        }, null, 8, ["tasks-claim-override", "section"]))), 128))]), R(O, {
          ref_key: "adsgram",
          ref: o
        }, null, 512)], 64)) : (d(), I(h, {
          key: 2
        }))])
      }
    }
  }),
  Qs = L(Ns, [
    ["__scopeId", "data-v-9ec62216"]
  ]);
export {
  Qs as
  default
};