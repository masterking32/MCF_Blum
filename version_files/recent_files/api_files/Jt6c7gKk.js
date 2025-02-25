import {
  _ as Ve
} from "./Dn5tEXvb.js";
import {
  f as D,
  o as u,
  G as C,
  e as n,
  am as Ge,
  z as O,
  d as M,
  Y as He,
  c as A,
  t as q,
  D as I,
  j as $,
  ch as U,
  bn as We,
  H as B,
  bm as ee,
  aA as Ye,
  U as se,
  x as be,
  an as _,
  ci as ne,
  ao as V,
  cj as x,
  a$ as me,
  M as te,
  ck as K,
  cl as j,
  cm as Y,
  cn as Qe,
  V as ye,
  n as X,
  _ as Z,
  b0 as ze,
  u as je,
  K as N,
  aF as ge,
  ag as ke,
  N as oe,
  w as le,
  a as T,
  b as R,
  m as ve,
  ah as Xe,
  aO as _e,
  co as Q,
  ce as pe,
  aU as re,
  p as ce,
  l as Be,
  be as ie,
  aw as he,
  W as J,
  a1 as Ne,
  h as ae,
  X as Ze,
  k as De,
  aH as Je,
  T as ue,
  O as Me,
  ab as et,
  b3 as tt,
  aq as at,
  R as fe,
  cp as z,
  cq as F,
  cr as we,
  a7 as Te,
  bD as st,
  bE as nt,
  F as P,
  ac as Se,
  cs as $e,
  ct as it,
  at as ot,
  cu as lt,
  ae as rt,
  az as ct,
  ax as ut,
  q as H,
  cv as dt,
  bW as mt,
  aZ as Ie,
  ap as kt,
  a8 as pt,
  $ as qe,
  cw as ft,
  cx as vt,
  cy as Ue,
  cz as Re,
  b8 as bt,
  Q as yt,
  bR as gt,
  P as ht,
  Z as Tt,
  a0 as At
} from "./HMtIIKN9.js";
import {
  v as Ct
} from "./-xvZYZVc.js";
import {
  _ as St
} from "./BDsGXAn_.js";
import {
  _ as It,
  a as Ot
} from "./Cc7LqdNU.js";
import {
  a as wt
} from "./DkcNUprX.js";
import {
  _ as Le
} from "./BnMR0Hvn.js";
import {
  _ as $t
} from "./l2ZOA4Wy.js";
import {
  _ as Rt
} from "./CcZX2ME1.js";
import {
  d as Ae
} from "./CxEm-GmM.js";
import {
  _ as Et
} from "./C99zQmoc.js";
import {
  _ as _t
} from "./BezWsQga.js";
import "./Bz1irRkk.js";
const Bt = {};

function Nt(e, i) {
  const t = Ve;
  return u(), C(t, {
    icon: ("imgResolver" in e ? e.imgResolver : n(Ge))("emoji/Construction"),
    title: ("t" in e ? e.t : n(O))("errors.maintenance.title"),
    subtitle: ("t" in e ? e.t : n(O))("errors.maintenance.subtitle"),
    "button-label": ("t" in e ? e.t : n(O))("base.visit_community"),
    onButton: i[0] || (i[0] = a => ("visitCommunity" in e ? e.visitCommunity : n(Ct))())
  }, null, 8, ["icon", "title", "subtitle", "button-label"])
}
const Dt = D(Bt, [
    ["render", Nt]
  ]),
  Mt = {
    class: "pages-tasks-head"
  },
  qt = {
    key: 0,
    class: "title"
  },
  Ut = {
    key: 1,
    class: "subtitle"
  },
  Lt = {
    key: 2,
    class: "pokras-bg"
  },
  Pt = M({
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
      const i = He().internal.isPokrasTheme;
      return (t, a) => (u(), A("div", Mt, [e.title ? (u(), A("div", qt, q(e.title), 1)) : I("", !0), e.subtitle ? (u(), A("div", Ut, q(e.subtitle), 1)) : I("", !0), n(i) ? (u(), A("div", Lt)) : I("", !0)]))
    }
  }),
  Ft = D(Pt, [
    ["__scopeId", "data-v-4760ce9b"]
  ]),
  xt = ["disabled"],
  Kt = M({
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
      const i = e,
        t = $(() => {
          const s = [U.CARD, U.SHORT_CARD].includes(i.itemMode) ? We.RIGHT : void 0;
          if (i.tooltip === "validation") return {
            text: O("earn.task.verification_indicator_text"),
            alignment: s
          }
        });
      return (a, s) => {
        const r = St,
          l = be;
        return n(t) ? (u(), C(r, {
          key: 0,
          class: "tasks-pill-inline",
          fill: "",
          text: n(t).text,
          alignment: n(t).alignment,
          "text-alignment": "left",
          "text-min-width": 130,
          onClick: s[0] || (s[0] = Ye(() => {}, ["stop"]))
        }, {
          default: B(() => [ee(a.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["text", "alignment"])) : e.isQuestButton ? (u(), C(l, {
          key: 1,
          class: "tasks-fill-full",
          fill: "",
          size: n(se).LARGE,
          disabled: e.disabled,
          onClick: s[1] || (s[1] = o => e.onClick && e.onClick(o))
        }, {
          default: B(() => [ee(a.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["size", "disabled"])) : (u(), A("button", {
          key: 2,
          class: "tasks-pill-inline",
          disabled: e.disabled,
          onClick: s[2] || (s[2] = o => e.onClick && e.onClick(o))
        }, [ee(a.$slots, "default", {}, void 0, !0)], 8, xt))
      }
    }
  }),
  Vt = D(Kt, [
    ["__scopeId", "data-v-3aaee1da"]
  ]),
  Gt = {
    key: 0,
    class: "label"
  },
  Ht = M({
    __name: "TasksPill",
    props: _({
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
        default: ne.DARK
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
    emits: _(["ui:claimed", "open:subtasks-modal", "open:verify", "click"], ["update:claimOverride"]),
    setup(e, {
      emit: i
    }) {
      const t = e,
        a = i,
        s = V(e, "claimOverride"),
        r = $(() => t.status === x.READY_FOR_CLAIM ? me.DARK : t.status === x.STARTED ? t.mode === ne.LIGHT ? me.DARK : me.LIGHT : me.DARK),
        l = $(() => {
          const o = t.reward && !t.reward.isZero() ? O("base.claim_bp", {
              bp: te(t.reward)
            }) : O("base.claim"),
            d = {
              claimDisabled: {
                label: O("base.claim"),
                cls: "is-disabled",
                disabled: !0
              },
              subtasksModalOpen: {
                label: O("earn.task.buttons.open"),
                cls: "is-status-not-started",
                onClick: () => {
                  a("open:subtasks-modal"), a("click")
                }
              },
              questDisabled: {
                label: o,
                cls: "is-disabled",
                disabled: !0
              }
            };
          if (t.status === x.NOT_STARTED) return t.kind === K.ONGOING ? d.claimDisabled : t.isQuestButton ? d.questDisabled : j(t.kind) ? d.subtasksModalOpen : {
            label: O("earn.task.buttons.start"),
            cls: "is-status-not-started",
            onClick: () => {
              s.value = Y.STARTED, setTimeout(() => s.value === Y.STARTED && (s.value = void 0), 15e3), t.startCallback(), a("click")
            }
          };
          if (t.status === x.STARTED) return t.kind === K.ONGOING ? d.claimDisabled : t.isQuestButton ? d.questDisabled : j(t.kind) ? d.subtasksModalOpen : s.value === Y.STARTED ? {
            loader: !0,
            cls: "is-status-started"
          } : {
            icon: "clock",
            cls: "is-status-started",
            tooltip: "validation"
          };
          if (t.status === x.READY_FOR_VERIFY) return {
            label: O("earn.task.buttons.verify"),
            onClick: v => {
              v.stopPropagation(), a("open:verify"), a("click")
            },
            cls: "is-status-ready-for-verify"
          };
          if (s.value === Y.LOADING) return {
            loader: !0,
            cls: "is-status-ready-for-claim"
          };
          if (s.value === Y.DONE) return {
            icon: "circle-check-white",
            cls: "is-status-ready-for-claim"
          };
          if (t.status === x.FINISHED) return {
            icon: "circle-check-white",
            cls: "is-status-finished"
          };
          if (t.status === x.READY_FOR_CLAIM) return {
            label: o,
            cls: "is-status-ready-for-claim",
            onClick: async () => {
              s.value = Y.LOADING, a("click"), await Qe(t.claimCallback, 2e3) ? (s.value = Y.DONE, a("ui:claimed")) : s.value = void 0
            }
          };
          throw ye("Unsupported condition")
        });
      return (o, d) => {
        const v = Z,
          b = ze,
          m = Vt;
        return u(), C(m, {
          "on-click": n(l).onClick,
          class: X([
            [n(l).cls, `is-${e.mode}`, {
              "is-quest": e.isQuestButton,
              "is-nested": e.isNested
            }], "pages-tasks-pill"
          ]),
          "is-quest-button": e.isQuestButton,
          disabled: n(l).disabled,
          tooltip: n(l).tooltip,
          "item-mode": e.itemMode
        }, {
          default: B(() => [n(l).label ? (u(), A("div", Gt, q(n(l).label), 1)) : n(l).icon ? (u(), C(v, {
            key: 1,
            name: n(l).icon,
            class: "icon"
          }, null, 8, ["name"])) : n(l).loader ? (u(), C(b, {
            key: 2,
            size: 16,
            type: n(r)
          }, null, 8, ["type"])) : I("", !0)]),
          _: 1
        }, 8, ["on-click", "class", "is-quest-button", "disabled", "tooltip", "item-mode"])
      }
    }
  }),
  Oe = D(Ht, [
    ["__scopeId", "data-v-49254788"]
  ]),
  Wt = `PREAMBLE
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
  Yt = {
    key: 0,
    class: "pages-tasks-disclaimer-title"
  },
  Qt = ["src"],
  zt = {
    key: 1,
    class: "pages-tasks-disclaimer-title"
  },
  jt = {
    key: 0,
    class: "pages-tasks-disclaimer general"
  },
  Xt = {
    class: "checkbox"
  },
  Zt = {
    key: 1,
    class: "pages-tasks-disclaimer details"
  },
  Ee = "community@blum.io",
  Jt = M({
    __name: "TasksDisclaimer",
    props: _({
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
      const i = e,
        t = V(e, "modelValue"),
        {
          copy: a
        } = je(),
        s = () => a(Ee),
        r = () => ({
          isAgreed: !1,
          state: "general"
        }),
        l = N(r());
      ge(t, b => b && (l.value = r()));
      const o = () => {
          l.value.isAgreed = !0, l.value.state = "general"
        },
        d = () => {
          t.value = !1, i.startFn && i.startFn()
        },
        v = $(() => {
          const b = Wt.split(`
`).reduce((m, c) => {
            const k = c.trim();
            if (!k) return m;
            const p = (() => {
              if (k.includes("{{ community_email }}")) {
                const h = k.split("{{ community_email }}");
                return ke("p", [h[0], ke("span", {
                  class: "as-link",
                  onClick: s
                }, Ee), h[1]])
              }
              return ke("p", k)
            })();
            return m.push(p), m
          }, []);
          return ke("div", {
            class: "text"
          }, b)
        });
      return (b, m) => {
        const c = It,
          k = be,
          p = _e,
          h = oe("img-error");
        return u(), C(p, {
          modelValue: t.value,
          "onUpdate:modelValue": m[4] || (m[4] = y => t.value = y),
          title: "",
          "back-icon": n(l).state === "details",
          "content-key": n(l).state,
          onBack: m[5] || (m[5] = y => n(l).state = "general")
        }, {
          title: B(() => [n(l).state === "general" ? (u(), A("span", Yt, [le(T("img", {
            src: e.iconUrl,
            alt: "Task icon"
          }, null, 8, Qt), [
            [h]
          ]), T("span", null, q(e.productName), 1)])) : I("", !0), n(l).state === "details" ? (u(), A("span", zt, "Disclaimer")) : I("", !0)]),
          default: B(() => [n(l).state === "general" ? (u(), A("div", jt, [m[8] || (m[8] = T("div", {
            class: "text"
          }, [T("p", null, "Nothing in Blum is to be considered as being of promotional nature or aiming at commercial use."), T("p", null, "No material or information which may be made available in Blum shall constitute or be construed as a recommendation, endorsement, offer, invitation or solicitation to enter into any transaction with or purchase any product, or otherwise deal with securities, crypto assets or other products."), T("p", null, "You alone are solely responsible for determining whether any investment, security or any other product or service, is appropriate or suitable for you. You should consult an attorney or tax professional regarding your specific legal or tax situation.")], -1)), T("div", Xt, [R(c, {
            modelValue: n(l).isAgreed,
            "onUpdate:modelValue": m[0] || (m[0] = y => n(l).isAgreed = y)
          }, null, 8, ["modelValue"]), T("span", null, [m[6] || (m[6] = ve("By using Blum, you accept the terms of our ")), T("span", {
            class: "as-link",
            onClick: m[1] || (m[1] = y => n(l).state = "details")
          }, "Disclaimer"), m[7] || (m[7] = ve("."))])])])) : I("", !0), n(l).state === "details" ? (u(), A("div", Zt, [(u(), C(Xe(n(v))))])) : I("", !0)]),
          footer: B(() => [n(l).state === "general" ? (u(), C(k, {
            key: 0,
            label: `Go to ${e.productName}`,
            fill: "",
            size: n(se).LARGE,
            tertiary: "",
            disabled: !n(l).isAgreed,
            onClick: m[2] || (m[2] = y => d())
          }, null, 8, ["label", "size", "disabled"])) : I("", !0), n(l).state === "details" ? (u(), C(k, {
            key: 1,
            label: "I agree",
            fill: "",
            size: n(se).LARGE,
            onClick: m[3] || (m[3] = y => o())
          }, null, 8, ["size"])) : I("", !0)]),
          _: 1
        }, 8, ["modelValue", "back-icon", "content-key"])
      }
    }
  }),
  ea = D(Jt, [
    ["__scopeId", "data-v-845ec11f"]
  ]),
  ta = {
    class: "pages-tasks-verify"
  },
  aa = {
    class: "heading"
  },
  sa = ["src"],
  na = {
    class: "title"
  },
  ia = M({
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
      emit: i
    }) {
      const t = e,
        a = i,
        s = N(""),
        r = N(),
        l = async () => {
          r.value = void 0, r.value = await t.verifyCallback(s.value), r.value === Q.SUCCESS && a("close")
        };
      ge(s, () => {
        r.value !== void 0 && (r.value = void 0)
      });
      const o = $(() => {
        switch (r.value) {
          case void 0:
            return {
              status: pe.REGULAR, caption: O("earn.verify_input.caption.default")
            };
          case Q.UNKNOWN_ERROR:
            return {
              status: pe.ERROR, caption: O("earn.verify_input.caption.unknown_error")
            };
          case Q.WRONG_KEYWORD:
            return {
              status: pe.ERROR, caption: O("earn.verify_input.caption.wrong_keyword")
            };
          case Q.SUCCESS:
            return {
              status: pe.REGULAR
            };
          default:
            throw r.value, ye("Invalid status")
        }
      });
      return (d, v) => {
        const b = Z,
          m = wt,
          c = be,
          k = Le,
          p = $t,
          h = oe("img-error");
        return u(), C(p, null, {
          default: B(() => [T("div", ta, [T("div", aa, [le(T("img", {
            src: n(re)(e.task.iconFileKey),
            alt: "Task icon",
            class: "task-icon"
          }, null, 8, sa), [
            [h]
          ]), T("div", na, q(e.task.title), 1), R(b, {
            name: "external-link",
            class: "link-icon",
            onClick: v[0] || (v[0] = y => d.$emit("doAction"))
          })]), R(m, {
            modelValue: n(s),
            "onUpdate:modelValue": v[1] || (v[1] = y => ce(s) ? s.value = y : null),
            placeholder: "Keyword",
            label: "Verification",
            status: n(o).status,
            caption: n(o).caption,
            class: "input"
          }, null, 8, ["modelValue", "status", "caption"]), R(k, {
            "ignore-tabs": ""
          }, {
            default: B(() => [R(c, {
              label: "Verify",
              fill: "",
              size: n(se).LARGE,
              onClick: v[2] || (v[2] = y => l())
            }, null, 8, ["size"])]),
            _: 1
          })])]),
          _: 1
        })
      }
    }
  }),
  oa = D(ia, [
    ["__scopeId", "data-v-64ea4ace"]
  ]),
  la = "" + new URL("Bold.vYYfUnV7.woff2", import.meta.url).href,
  ra = "" + new URL("Medium.9CUCDBk_.woff2", import.meta.url).href,
  ca = "" + new URL("Clap.Couz_01b.webp", import.meta.url).href,
  ua = "" + new URL("moon-bg.CTZyPnMM.webp", import.meta.url).href,
  da = "data:image/webp;base64,UklGRs4AAABXRUJQVlA4WAoAAAAQAAAAfwAAAwAAQUxQSFYAAAABf2CQbaQ7gqvJ+wO+Q0RkvPUAjGLbavMHEShAACIeUrqRLLONlz9RUiRkMJCyoiqI6P8EnH9rTm5aAFDCLttdN30m0szH1XXn4tO2urJRNKMGXKOkWlZQOCBSAAAAcAMAnQEqgAAEAD6RSJ9LpaQioaQIALASCWcAzygMvffVJ3hgAP7x/9//f3h/7mUf/MAWUp3/WP536on+Tf3g6NQjfoODPwhtge3CIKud4qAAAA==",
  ma = "data:image/webp;base64,UklGRuAAAABXRUJQVlA4WAoAAAAQAAAAdAAAAgAAQUxQSFgAAAABb2CQbaQzuCIcwvvrvUREZM4XA4xqbZvxG3ZaDBEk4M0gwT9t7URQxSfCq4EIzl/GPBSI6H92ozwkuYSHM8lJpE/X8F9WV9AWm7F2OHm7t3hW5FsDmFIBVlA4IGIAAACwAwCdASp1AAMAPpFAnUslo6KhqBgIALASCWMA0BW/gEwxFE9agAD+8f/f+YJ/9Y/+3nagDHY3P0Z+lXppwDx/w1+Zv9xKP/hvGznerPf/8nJlm/p30HP6B8rBuXNTiAAAAA==",
  ka = () => ({
    generate: async i => {
      const {
        type: t,
        data: a
      } = i;
      switch (t) {
        case "task-joined-at":
          return await pa(a)
      }
    }
  });
async function pa(e) {
  const {
    currentStreakDays: i,
    username: t,
    userCreatedAt: a,
    width: s,
    height: r
  } = e, l = await ha(s, r);
  if (!l) return;
  await va(l, [{
    type: "bg-image",
    options: {
      src: ua
    }
  }, {
    type: "image",
    options: {
      src: ca,
      width: 96,
      height: 96
    },
    position: {
      topIndent: 96
    }
  }, {
    type: "text",
    options: {
      text: [O("memepad.tasks.share_stories.title.1", {
        username: t
      }), O("memepad.tasks.share_stories.title.2"), O("memepad.tasks.share_stories.title.3")],
      style: "heading-large",
      color: "white"
    },
    position: {
      topIndent: 24
    }
  }, {
    type: "text",
    options: {
      text: O("memepad.tasks.share_stories.joined", {
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
      src: da,
      width: 128,
      height: 3.4
    },
    position: {
      topIndent: 4
    }
  }, {
    type: "text",
    options: {
      text: [O("memepad.tasks.share_stories.check_ins.1"), O("memepad.tasks.share_stories.check_ins.2", {
        count: i
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
      src: ma,
      width: 128,
      height: 3.4
    },
    position: {
      topIndent: 4
    }
  }]);
  const o = Be().public.TELEGRAM_APP_URL,
    d = ie().referralToken.value,
    v = `${o}?startapp=ref_${d}`,
    b = `${O("memepad.tasks.share_stories.text")}
${v}
#IamBlumie #Join #Blum #MiniApp`;
  return {
    canvas: l.canvas,
    share: () => Ta({
      canvas: l.canvas,
      text: b,
      name: "Blum"
    })
  }
}

function fa(e, i, t, a) {
  return {
    ctx: e,
    canvas: i,
    height: t,
    width: a,
    topPosition: 0
  }
}
async function va(e, i) {
  for (const t of i) switch (t.type) {
    case "text":
      ba(e, t.options, t.position);
      break;
    case "image":
      await ya(e, t.options, t.position);
      break;
    case "bg-image":
      await ga(e, t.options);
      break;
    default:
      throw ye(`Unknown element type: ${t}`)
  }
}

function ba(e, {
  text: i,
  style: t,
  color: a,
  textBaseline: s = "top",
  textAlign: r = "center"
}, l) {
  const o = (() => {
    switch (t) {
      case "heading-large":
        return {
          font: "700 32px Roobert", lineHeight: 40
        };
      case "paragraph-medium":
        return {
          font: "500 16px Roobert", lineHeight: 20
        };
      default:
        throw ye("Unknown style")
    }
  })();
  e.ctx.font = o.font, e.ctx.fillStyle = a, e.ctx.textBaseline = s, e.ctx.textAlign = r;
  const d = Array.isArray(i) ? i : [i];
  if ("topIndent" in l) {
    e.topPosition += l.topIndent;
    for (const v of d) e.ctx.fillText(v, e.width / 2, e.topPosition), e.topPosition += o.lineHeight
  } else if ("bottom" in l) {
    let v = e.height - l.bottom;
    for (const b of d.reverse()) e.ctx.fillText(b, e.width / 2, v), v -= o.lineHeight
  }
}
async function ya(e, {
  src: i,
  width: t,
  height: a
}, s) {
  const r = new Image;
  await new Promise(l => {
    r.onload = l, r.src = i
  }), "topIndent" in s ? (e.topPosition += s.topIndent, e.ctx.drawImage(r, e.width / 2 - t / 2, e.topPosition, t, a), e.topPosition += a) : "bottom" in s && e.ctx.drawImage(r, e.width / 2 - t / 2, e.height - s.bottom, t, a)
}
async function ga(e, {
  src: i
}) {
  const t = new Image;
  await new Promise(a => {
    t.onload = a, t.src = i
  }), e.ctx.drawImage(t, 0, 0, e.width, e.height)
}
async function ha(e, i) {
  const t = document.createElement("canvas"),
    a = t.getContext("2d");
  if (!a) return;
  const s = window.devicePixelRatio || 1,
    r = new FontFace("Roobert", `url(${ra})`, {
      weight: "500"
    }),
    l = new FontFace("Roobert", `url(${la})`, {
      weight: "700"
    });
  return await Promise.all([ie().getReferralToken(), document.fonts.ready, r.load(), l.load()]), document.fonts.add(r), document.fonts.add(l), a.clearRect(0, 0, e, i), t.width = e * s, t.height = i * s, a.scale(s, s), a.imageSmoothingEnabled = !0, a.imageSmoothingQuality = "high", t.style.width = e * s + "px", t.style.height = i * s + "px", t.style.scale = `${1/s}`, fa(a, t, i, e)
}
async function Ta({
  canvas: e,
  name: i,
  text: t
}) {
  const a = await new Promise(v => e.toBlob(v, "image/png"));
  if (!a) return he();
  const s = new File([a], "story-image.png", {
      type: "image/png"
    }),
    r = await J.uploadFile(s, () => {});
  if (!Ne(r)) return he();
  const l = Be().public.TELEGRAM_APP_URL,
    o = r.data.url,
    d = `${l}?startapp=ref_${ie().referralToken.value}`;
  try {
    return ae().$webApp.shareToStory(o, {
      text: t,
      widget_link: {
        url: d,
        name: i
      }
    }), Ze(void 0)
  } catch {
    return he()
  }
}
const Aa = {
    class: "pages-tasks-share-story"
  },
  Ca = M({
    __name: "TasksShareStory",
    emits: ["success", "close"],
    setup(e, {
      emit: i
    }) {
      const t = i,
        a = De().getters.getUser,
        s = Je(),
        r = N({
          type: "loading"
        }),
        l = N(!1),
        o = N(),
        {
          generate: d
        } = ka(),
        v = async () => {
          var w, f;
          const c = (w = a.value) == null ? void 0 : w.username,
            k = (f = a.value) == null ? void 0 : f.createdAt,
            p = s.currentStreakDays.value;
          if (!c || !k || p === void 0 || !o.value) return;
          const h = o.value.clientWidth,
            y = o.value.clientHeight,
            S = await d({
              type: "task-joined-at",
              data: {
                username: c,
                userCreatedAt: k,
                currentStreakDays: p,
                width: h,
                height: y
              }
            });
          S && (o.value.appendChild(S.canvas), r.value = {
            type: "loaded",
            story: S
          })
        }, b = async () => {
          if (r.value.type !== "loaded") return;
          l.value = !0;
          const c = r.value.story.share;
          await (async () => {
            const k = await c();
            Ne(k) && t("success")
          })(), l.value = !1
        }, m = et(v, 50).debouncedFunction;
      return ge(() => [s.currentStreakDays.value, o.value, a.value], m, {
        immediate: !0
      }), window.addEventListener("resize", m), ue(() => {
        window.removeEventListener("resize", m)
      }), Me().initHandler(() => t("close"), "tasks-share-story"), (c, k) => {
        const p = Rt,
          h = be,
          y = Le;
        return u(), A("div", Aa, [n(r).type === "loading" ? (u(), C(p, {
          key: 0,
          fixed: ""
        })) : (u(), C(y, {
          key: 1,
          "ignore-tabs": "",
          "no-background": "",
          "hide-space": ""
        }, {
          default: B(() => [R(h, {
            size: n(se).LARGE,
            fill: "",
            loading: n(l),
            onClick: b
          }, {
            default: B(() => [ve(q(("t" in c ? c.t : n(O))("memepad.tasks.share_stories.button")), 1)]),
            _: 1
          }, 8, ["size", "loading"])]),
          _: 1
        })), T("div", {
          ref_key: "canvasContainer",
          ref: o,
          class: "canvas-wrapper"
        }, null, 512)])
      }
    }
  }),
  Sa = D(Ca, [
    ["__scopeId", "data-v-7593f978"]
  ]),
  Ia = () => {
    const {
      tonConnectUI: e
    } = tt();
    return {
      sendTransaction: async t => {
        const a = Ae.Address.parse(t.address),
          s = {
            validUntil: Math.floor(Date.now() / 1e3) + 360,
            messages: [{
              address: a.toString(),
              amount: Ae.toNano(t.amountTON.toString()).toString(),
              payload: (() => {
                if (t.message) return Ae.beginCell().storeUint(0, 32).storeStringTail(t.message).endCell().toBoc().toString("base64")
              })()
            }]
          };
        return await e.value.sendTransaction(s)
      }
    }
  },
  Pe = M({
    __name: "TasksItemInnerWrapper",
    props: _({
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
    emits: _(["open:subtasks-modal"], ["update:claimOverride"]),
    setup(e, {
      emit: i
    }) {
      const t = e,
        a = i,
        s = V(e, "claimOverride"),
        r = Ia(),
        l = at(),
        o = N(!1),
        d = () => {
          o.value = !1, t.task.status === x.NOT_STARTED && t.startCallback()
        },
        v = () => {
          if ([F.SOCIAL_MEDIA_CHECK, F.SOCIAL_SUBSCRIPTION].includes(t.task.type) && t.task.socialSubscription) {
            const f = t.task.socialSubscription.url;
            t.task.socialSubscription.openInTelegram ? ae().$webApp.openTelegramLink(f) : f.startsWith("http") ? ae().$webApp.openLink(f) : Se().push(f)
          }
          if (t.task.type === F.APPLICATION_LAUNCH && t.task.applicationLaunch && ae().$webApp.openTelegramLink(t.task.applicationLaunch.url), t.task.type === F.WALLET_CONNECTION) {
            const f = () => {
              t.task.status === x.NOT_STARTED && t.startCallback()
            };
            l.runConnectionFlow(f)
          }
          if (t.task.type === F.INTERNAL && t.task.subType === $e.SHARE_STORIES && (o.value = !0), t.task.type === F.ONCHAIN_TRANSACTION) {
            const f = async () => {
              const g = t.task.onchainTransaction;
              if (t.task.status !== x.NOT_STARTED || !g) return;
              const E = De().getters.mustGetUser.value.id,
                L = `${t.task.id}:${E}`;
              await r.sendTransaction({
                address: g.address,
                amountTON: g.amount,
                message: L
              }).then(t.startCallback).catch()
            };
            l.runConnectionFlow(f)
          }
          t.task.validationType === it.MEMEPAD && Se().push({
            name: "memepad",
            query: {
              memepadFrom: ot.TASK
            }
          })
        },
        b = () => {
          t.task.status === x.READY_FOR_VERIFY && v();
          const g = z(t.task.status, s.value),
            E = lt(t.task.status),
            L = g || E,
            G = j(t.task.kind);
          L && (G || v(), G && a("open:subtasks-modal"))
        },
        m = $(() => t.task.kind === K.GROUP ? !0 : !t.task.reward.isZero()),
        c = $(() => {
          var f, g;
          if (!m.value) return "";
          if ((t.task.kind === K.QUEST && t.task.reward.isZero() || t.task.kind === K.GROUP) && "subTasks" in t.task) {
            const E = ((f = t.task.subTasks) == null ? void 0 : f.reduce((G, W) => G.add(W.reward), new fe(0))) ?? new fe(0),
              L = ((g = t.task.subTasks) == null ? void 0 : g.reduce((G, W) => z(W.status, s.value) ? G.add(W.reward) : G, new fe(0))) ?? new fe(0);
            return `+${te(L)}/${te(E)} BP`
          }
          return `+${te(t.task.reward)} BP`
        }),
        k = N(),
        p = N(!1),
        h = () => {
          const f = () => {
            t.task.kind !== K.ONGOING && (j(t.task.kind) || (v(), t.task.type !== F.WALLET_CONNECTION && t.task.type !== F.ONCHAIN_TRANSACTION && (t.task.type === F.INTERNAL && t.task.subType === $e.SHARE_STORIES || t.startCallback())))
          };
          if (t.task.isDisclaimerRequired) {
            k.value = {
              startFn: f
            };
            return
          }
          f()
        },
        y = $(() => {
          if (t.task.type === F.PROGRESS_TARGET) {
            const f = we(t.task.progressTarget, "progress target"),
              g = Te(f.target, {
                accuracy: f.accuracy
              });
            return `${t.task.title} ${g}${f.postfix?` ${f.postfix}`:""}`
          }
          return t.task.title
        }),
        S = $(() => {
          if (t.questDetails) return {
            label: `${t.questDetails.countFinished}/${t.questDetails.countTotal}`,
            postfix: ` ${O("base.n.tasks",t.questDetails.countTotal)}`,
            finished: t.questDetails.countFinished,
            total: t.questDetails.countTotal,
            done: t.questDetails.countFinished === t.questDetails.countTotal
          };
          if (t.task.type === F.PROGRESS_TARGET && t.task.progressTarget) {
            const f = we(t.task.progressTarget, "progress target"),
              g = Te(f.progress, {
                accuracy: f.accuracy
              }),
              E = Te(f.target, {
                accuracy: f.accuracy
              });
            return {
              label: `${g}/${E}`,
              postfix: `${f.postfix?` ${f.postfix}`:""}`,
              finished: f.progress.toNumber(),
              total: f.target.toNumber(),
              done: f.progress === f.target
            }
          }
        }),
        w = $(() => ({
          onClick: b,
          rewardText: c,
          startProxy: h,
          title: y,
          progress: S,
          openVerify: () => p.value = !0
        }));
      return Me().initWatcher({
        key: "tasks-item-inner-wrapper",
        watchFn: () => p.value,
        callback: () => p.value = !1
      }), (f, g) => {
        var W;
        const E = ea,
          L = oa,
          G = Sa;
        return u(), A(P, null, [ee(f.$slots, "default", st(nt(n(w)))), R(E, {
          "model-value": !!n(k),
          "product-name": e.task.productName,
          "icon-url": n(re)(e.task.iconFileKey),
          "start-fn": (W = n(k)) == null ? void 0 : W.startFn,
          "onUpdate:modelValue": g[0] || (g[0] = de => de ? void 0 : k.value = void 0)
        }, null, 8, ["model-value", "product-name", "icon-url", "start-fn"]), n(p) ? (u(), C(L, {
          key: 0,
          task: e.task,
          "verify-callback": e.verifyCallback,
          onDoAction: g[1] || (g[1] = de => v()),
          onClose: g[2] || (g[2] = de => p.value = !1)
        }, null, 8, ["task", "verify-callback"])) : I("", !0), n(o) ? (u(), C(G, {
          key: 1,
          onClose: g[3] || (g[3] = de => o.value = !1),
          onSuccess: d
        })) : I("", !0)], 64)
      }
    }
  }),
  Oa = ["onClick"],
  wa = ["src"],
  $a = {
    class: "details"
  },
  Ra = {
    class: "title"
  },
  Ea = {
    key: 0,
    class: "progress-reward"
  },
  _a = {
    key: 0,
    class: "progress"
  },
  Ba = {
    key: 1,
    class: "reward"
  },
  Na = M({
    inheritAttrs: !1,
    __name: "TasksListItem",
    props: _({
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
    emits: _(["ui:claimed", "open:subtasks-modal", "pill:click"], ["update:claimOverride"]),
    setup(e) {
      const i = V(e, "claimOverride");
      return (t, a) => {
        const s = Oe,
          r = Pe,
          l = oe("img-error");
        return u(), C(r, {
          "claim-override": i.value,
          "onUpdate:claimOverride": a[4] || (a[4] = o => i.value = o),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": a[5] || (a[5] = o => t.$emit("open:subtasks-modal"))
        }, {
          default: B(({
            onClick: o,
            rewardText: d,
            startProxy: v,
            title: b,
            progress: m,
            openVerify: c
          }) => {
            var k;
            return [T("div", rt({
              class: "pages-tasks-list-item-label"
            }, t.$attrs, {
              onClick: o
            }), [T("div", {
              class: X(["container", {
                "no-border": e.noBorder
              }])
            }, [le(T("img", {
              src: n(re)(e.task.iconFileKey),
              alt: "Task icon"
            }, null, 8, wa), [
              [l]
            ]), T("div", $a, [T("div", Ra, q(b.value), 1), m.value || d.value ? (u(), A("div", Ea, [(k = m.value) != null && k.label ? (u(), A("span", _a, q(`${m.value.label}${m.value.postfix}`) + q(d.value ? ", " : ""), 1)) : I("", !0), d.value ? (u(), A("span", Ba, q(d.value), 1)) : I("", !0)])) : I("", !0)]), e.task.status ? (u(), C(s, {
              key: 0,
              "claim-override": i.value,
              "onUpdate:claimOverride": a[0] || (a[0] = p => i.value = p),
              status: e.task.status,
              kind: e.task.kind,
              "start-callback": v,
              "claim-callback": e.claimCallback,
              "is-nested": e.isNested,
              "item-mode": e.itemMode,
              class: "pill-btn",
              "onUi:claimed": a[1] || (a[1] = p => t.$emit("ui:claimed")),
              "onOpen:subtasksModal": a[2] || (a[2] = p => t.$emit("open:subtasks-modal")),
              "onOpen:verify": c,
              onClick: a[3] || (a[3] = p => t.$emit("pill:click"))
            }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "is-nested", "item-mode", "onOpen:verify"])) : I("", !0)], 2)], 16, Oa)]
          }),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  Fe = D(Na, [
    ["__scopeId", "data-v-61588e22"]
  ]),
  Da = {
    class: "label"
  },
  Ce = 185.074,
  Ma = M({
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
        default: ne.DARK
      }
    },
    setup(e) {
      ct(a => ({
        b63fb046: Ce,
        "0e5a5f8f": n(t)
      }));
      const i = e,
        t = $(() => Ce - Ce * (i.finished / i.total));
      return (a, s) => {
        const r = Z;
        return u(), A("div", {
          class: X(["pages-tasks-progress-pill", `is-${e.mode}`])
        }, [T("span", Da, q(e.label), 1), R(r, {
          name: "special/progress-pill",
          class: "icon"
        })], 2)
      }
    }
  }),
  qa = D(Ma, [
    ["__scopeId", "data-v-293728e0"]
  ]),
  Ua = ["onClick"],
  La = {
    key: 0,
    class: "icons"
  },
  Pa = ["src"],
  Fa = {
    class: "title"
  },
  xa = {
    key: 1,
    class: "points"
  },
  Ka = {
    class: "footer"
  },
  Va = M({
    __name: "TasksCard",
    props: _({
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
    emits: _(["ui:claimed", "open:subtasks-modal", "pill:click"], ["update:claimOverride"]),
    setup(e) {
      const i = e,
        t = $(() => !i.short),
        a = $(() => i.short ? ne.LIGHT : ne.DARK),
        s = $(() => {
          var o;
          return i.task.kind === K.GROUP ? ((o = i.task.subTasks) == null ? void 0 : o.map(d => d.iconFileKey)) ?? [] : [i.task.iconFileKey]
        }),
        r = V(e, "claimOverride"),
        l = $(() => {
          if (i.short) return;
          if (i.task.color) return i.task.color;
          const o = ["#B9BBBC", "#BCABA6", "#BAAFC3", "#BEC0CB", "#C3BFB3"];
          return o[i.colorMode % o.length]
        });
      return (o, d) => {
        const v = Oe,
          b = Z,
          m = qa,
          c = Pe,
          k = oe("img-error");
        return u(), C(c, {
          "claim-override": r.value,
          "onUpdate:claimOverride": d[4] || (d[4] = p => r.value = p),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": d[5] || (d[5] = p => o.$emit("open:subtasks-modal"))
        }, {
          default: B(({
            onClick: p,
            startProxy: h,
            title: y,
            progress: S,
            openVerify: w,
            rewardText: f
          }) => [T("div", {
            class: X(["pages-tasks-card", {
              "is-short": e.short
            }]),
            style: ut({
              backgroundColor: n(l)
            }),
            onClick: p
          }, [n(t) ? (u(), A("div", La, [(u(!0), A(P, null, H(n(s), (g, E) => le((u(), A("img", {
            key: E,
            src: n(re)(g),
            alt: "Task icon",
            class: "icon",
            width: "48",
            height: "48"
          }, null, 8, Pa)), [
            [k]
          ])), 128))])) : I("", !0), T("div", Fa, q(y.value), 1), f.value ? (u(), A("div", xa, q(f.value), 1)) : I("", !0), T("div", Ka, [e.task.status ? (u(), C(v, {
            key: 0,
            "claim-override": r.value,
            "onUpdate:claimOverride": d[0] || (d[0] = g => r.value = g),
            status: e.task.status,
            kind: e.task.kind,
            "start-callback": h,
            "claim-callback": e.claimCallback,
            "is-nested": !1,
            mode: n(a),
            "item-mode": e.itemMode,
            "onUi:claimed": d[1] || (d[1] = g => o.$emit("ui:claimed")),
            "onOpen:subtasksModal": d[2] || (d[2] = g => o.$emit("open:subtasks-modal")),
            "onOpen:verify": w,
            onClick: d[3] || (d[3] = g => o.$emit("pill:click"))
          }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "mode", "item-mode", "onOpen:verify"])) : I("", !0), S.value ? (u(), A(P, {
            key: 1
          }, [S.value.done ? (u(), C(b, {
            key: 0,
            name: "circle-check-white",
            class: "done-icon"
          })) : (u(), C(m, {
            key: 1,
            finished: S.value.finished,
            total: S.value.total,
            label: S.value.label,
            mode: n(a)
          }, null, 8, ["finished", "total", "label", "mode"]))], 64)) : I("", !0)])], 14, Ua)]),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  Ga = D(Va, [
    ["__scopeId", "data-v-04302302"]
  ]),
  xe = () => {
    const e = dt("tasks-open-sheet");
    return {
      openTaskSheet: a => {
        e.emit(a.id)
      },
      onOpenTaskSheet: (a, s) => {
        e.subscribe(r => {
          a.id === r && s()
        })
      }
    }
  },
  Ha = {
    key: 1,
    class: "heading"
  },
  Wa = {
    key: 1,
    class: "description"
  },
  Ya = M({
    __name: "TasksSubtasksModal",
    props: _({
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
    emits: _(["ui:claimed", "click:task", "pill:click"], ["update:modelValue", "update:tasksClaimOverride"]),
    setup(e) {
      const i = e,
        t = V(e, "modelValue"),
        a = V(e, "tasksClaimOverride"),
        s = $(() => i.task.kind === K.QUEST);
      ie().getReferralToken();
      const r = () => {
          t.value = !1, d.value = !0
        },
        l = () => {
          d.value = !1, t.value = !0
        },
        o = N(i.task.isShared),
        d = N(!1),
        v = $(() => O("earn.quest.share.text")),
        b = $(() => `tasksheet_${btoa(i.task.id)}-ref_${ie().referralToken.value}`);
      return xe().onOpenTaskSheet(i.task, () => {
        t.value = !0
      }), (m, c) => {
        const k = Z,
          p = Et,
          h = Fe,
          y = Oe,
          S = _e,
          w = kt;
        return u(), A(P, null, [R(S, {
          modelValue: t.value,
          "onUpdate:modelValue": c[3] || (c[3] = f => t.value = f),
          title: e.title
        }, mt({
          default: B(() => [T("div", {
            class: X(["pages-tasks-subtasks-modal", {
              "has-share": n(o)
            }])
          }, [n(o) ? (u(), A("button", {
            key: 0,
            type: "button",
            class: "reset share-btn",
            onClick: r
          }, [R(k, {
            name: "share",
            class: "icon"
          }), c[5] || (c[5] = T("div", {
            class: "labe"
          }, "Invite and earn up to 8% revshare", -1))])) : I("", !0), e.task.bannerFileKey || e.task.description ? (u(), A("div", Ha, [e.task.bannerFileKey ? (u(), C(p, {
            key: 0,
            url: n(re)(e.task.bannerFileKey),
            alt: "Task banner",
            class: "banner"
          }, null, 8, ["url"])) : I("", !0), e.task.description ? (u(), A("div", Wa, q(e.task.description), 1)) : I("", !0)])) : I("", !0), e.task.subTasks ? (u(), C(Ie, {
            key: 2,
            tag: "div",
            name: "list-shuffle-transition",
            class: "nested-tasks"
          }, {
            default: B(() => [(u(!0), A(P, null, H(e.task.subTasks, (f, g) => (u(), C(h, {
              key: f.id,
              "claim-override": a.value[f.id],
              "onUpdate:claimOverride": E => a.value[f.id] = E,
              task: f,
              "start-callback": () => e.startSubTaskCallback(f),
              "claim-callback": () => e.claimCallback(f),
              "verify-callback": E => e.verifyCallback(f, E),
              "no-border": g === e.task.subTasks.length - 1,
              "item-mode": n(U).LIST_ITEM,
              "is-nested": "",
              "onUi:claimed": E => m.$emit("ui:claimed", {
                task: f,
                isQuest: !1
              }),
              onClick: E => m.$emit("click:task", f),
              "onPill:click": E => m.$emit("pill:click", f)
            }, null, 8, ["claim-override", "onUpdate:claimOverride", "task", "start-callback", "claim-callback", "verify-callback", "no-border", "item-mode", "onUi:claimed", "onClick", "onPill:click"]))), 128))]),
            _: 1
          })) : I("", !0)], 2)]),
          _: 2
        }, [n(s) ? {
          name: "footer",
          fn: B(() => [e.task.status && !n(z)(e.task.status, a.value[e.task.id]) ? (u(), C(y, {
            key: 0,
            "claim-override": a.value[e.task.id],
            "onUpdate:claimOverride": c[0] || (c[0] = f => a.value[e.task.id] = f),
            "is-quest-button": "",
            status: e.task.status,
            kind: e.task.kind,
            reward: e.task.reward,
            "start-callback": () => {},
            "claim-callback": () => e.claimCallback(e.task),
            "item-mode": e.itemMode,
            "onUi:claimed": c[1] || (c[1] = f => m.$emit("ui:claimed", {
              task: e.task,
              isQuest: !0
            })),
            onClick: c[2] || (c[2] = f => m.$emit("pill:click", e.task))
          }, null, 8, ["claim-override", "status", "kind", "reward", "claim-callback", "item-mode"])) : I("", !0)]),
          key: "0"
        } : void 0]), 1032, ["modelValue", "title"]), R(w, {
          modelValue: n(d),
          "onUpdate:modelValue": c[4] || (c[4] = f => ce(d) ? d.value = f : null),
          title: ("t" in m ? m.t : n(O))("earn.quest.share.sheet.title"),
          "share-text": n(v),
          subtitle: e.task.sharingDescription,
          startapp: n(b),
          "copied-notification": ("t" in m ? m.t : n(O))("frens.invite.link_copied"),
          "back-icon": "",
          onBack: l
        }, null, 8, ["modelValue", "title", "share-text", "subtitle", "startapp", "copied-notification"])], 64)
      }
    }
  }),
  Qa = D(Ya, [
    ["__scopeId", "data-v-84322842"]
  ]),
  za = M({
    __name: "TasksItem",
    props: _({
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
        default: U.LIST_ITEM
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
    emits: _(["ui:claimed", "request:update", "pill:click", "mounted", "unmounted"], ["update:tasksClaimOverride"]),
    setup(e, {
      emit: i
    }) {
      const t = e,
        a = i,
        s = V(e, "tasksClaimOverride"),
        r = N(!1),
        l = N(void 0),
        o = $(() => {
          var m, c;
          if (!j(t.task.kind)) return;
          const v = ((m = t.task.subTasks) == null ? void 0 : m.length) ?? 0,
            b = ((c = t.task.subTasks) == null ? void 0 : c.filter(k => z(k.status, s.value[k.id])).length) ?? 0;
          return {
            countTotal: v,
            countFinished: b,
            progressLabel: `${b}/${v} ${O("base.n.tasks",v)}`,
            modalTitle: `${t.task.title} ${b}/${v}`
          }
        }),
        d = v => {
          v.isQuest ? r.value = !1 : a("request:update"), a("ui:claimed", v.task)
        };
      return pt(() => {
        l.value && a("mounted", l.value)
      }), ue(() => {
        l.value && a("unmounted", l.value)
      }), (v, b) => {
        const m = Fe,
          c = Ga,
          k = Qa;
        return u(), A("div", {
          ref_key: "taskItemEl",
          ref: l,
          class: "pages-tasks-item"
        }, [e.mode === n(U).LIST_ITEM ? (u(), C(m, {
          key: 0,
          "claim-override": s.value[e.task.id],
          "onUpdate:claimOverride": b[0] || (b[0] = p => s.value[e.task.id] = p),
          task: e.task,
          "quest-details": n(o),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": p => e.verifyCallback(e.task, p),
          "item-mode": e.mode,
          "onUi:claimed": b[1] || (b[1] = p => v.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": b[2] || (b[2] = p => r.value = !0),
          "onPill:click": b[3] || (b[3] = p => v.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "item-mode"])) : e.mode === n(U).SHORT_CARD || e.mode === n(U).CARD ? (u(), C(c, {
          key: 1,
          "claim-override": s.value[e.task.id],
          "onUpdate:claimOverride": b[4] || (b[4] = p => s.value[e.task.id] = p),
          task: e.task,
          "quest-details": n(o),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": p => e.verifyCallback(e.task, p),
          short: e.mode === n(U).SHORT_CARD,
          "color-mode": e.idx,
          "item-mode": e.mode,
          "onUi:claimed": b[5] || (b[5] = p => v.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": b[6] || (b[6] = p => r.value = !0),
          "onPill:click": b[7] || (b[7] = p => v.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "short", "color-mode", "item-mode"])) : I("", !0), n(o) ? (u(), C(k, {
          key: 2,
          modelValue: n(r),
          "onUpdate:modelValue": b[8] || (b[8] = p => ce(r) ? r.value = p : null),
          "tasks-claim-override": s.value,
          "onUpdate:tasksClaimOverride": b[9] || (b[9] = p => s.value = p),
          task: e.task,
          title: n(o).modalTitle,
          "start-sub-task-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "item-mode": e.mode,
          "onUi:claimed": b[10] || (b[10] = p => d(p)),
          "onPill:click": b[11] || (b[11] = p => v.$emit("pill:click", p))
        }, null, 8, ["modelValue", "tasks-claim-override", "task", "title", "start-sub-task-callback", "claim-callback", "verify-callback", "item-mode"])) : I("", !0)], 512)
      }
    }
  }),
  Ke = D(za, [
    ["__scopeId", "data-v-86f27969"]
  ]),
  ja = M({
    __name: "TasksList",
    props: _({
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
    emits: _(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      const i = e,
        t = V(e, "tasksClaimOverride"),
        a = qe(),
        s = c => [U.SHORT_CARD, U.CARD].includes(i.taskMode) ? i.tasks.some(p => p.id === c.id) : !1,
        r = {},
        l = (c, k) => ({
          source: k + 1,
          kind: c.kind,
          type: c.type,
          title: c.title,
          task_id: c.id,
          ...!j(c.kind) || !("subTasks" in c) || !c.subTasks ? {
            subtasks_done: z(c.status, t.value[c.id]) ? 1 : 0,
            subtasks_total: 1
          } : {
            subtasks_done: c.subTasks.filter(h => z(h.status, t.value[h.id])).length,
            subtasks_total: c.subTasks.length
          }
        }),
        o = (c, k) => {
          if (!s(c)) return;
          r[c.id] || (r[c.id] = !0);
          const p = l(c, k);
          i.taskMode === U.CARD ? a.earn.earnHighlightsTaskShow(p) : i.taskMode === U.SHORT_CARD && a.earn.earnWeeklyTaskShow(p)
        },
        d = (c, k) => {
          if (!s(c)) return;
          r[c.id] || o(c, k);
          const p = l(c, k);
          i.taskMode === U.CARD ? a.earn.earnHighlightsTaskClick(p) : i.taskMode === U.SHORT_CARD && a.earn.earnWeeklyTaskClick(p)
        },
        v = new IntersectionObserver(c => {
          const k = c[0],
            p = k.target.getAttribute("data-task-id");
          if (!p) return;
          const h = i.tasks.find(f => f.id === p);
          if (!h || !(k.intersectionRatio >= .5)) return;
          const S = h,
            w = i.tasks.indexOf(S);
          o(S, w)
        }, {
          threshold: .5
        }),
        b = (c, k) => {
          s(c) && v.observe(k)
        },
        m = (c, k) => {
          s(c) && v.unobserve(k)
        };
      return ue(() => v.disconnect()), (c, k) => {
        const p = Ke,
          h = oe("horizontal-wheel-scroll");
        return le((u(), C(Ie, {
          tag: "div",
          name: "list-shuffle-transition",
          class: X(["pages-tasks-list", `is-${e.taskMode.toLowerCase()}`])
        }, {
          default: B(() => [(u(!0), A(P, null, H(e.tasks, (y, S) => (u(), C(p, {
            key: y.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": k[0] || (k[0] = w => t.value = w),
            task: y,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            mode: e.taskMode,
            idx: S,
            class: "item",
            "data-task-id": y.id,
            "onUi:claimed": k[1] || (k[1] = w => c.$emit("ui:claimed", w)),
            "onRequest:update": k[2] || (k[2] = w => c.$emit("request:update")),
            "onPill:click": w => d(w, S),
            onMounted: w => b(y, w),
            onUnmounted: w => m(y, w)
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback", "mode", "idx", "data-task-id", "onPill:click", "onMounted", "onUnmounted"]))), 128))]),
          _: 1
        }, 8, ["class"])), [
          [h]
        ])
      }
    }
  }),
  Xa = D(ja, [
    ["__scopeId", "data-v-e804420d"]
  ]),
  Za = {
    key: 0,
    class: "pages-tasks-sub-sections"
  },
  Ja = {
    key: 0,
    class: "empty"
  },
  es = {
    class: "inner"
  },
  ts = M({
    __name: "TasksSubSections",
    props: _({
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
    emits: _(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      var l;
      const i = e,
        t = V(e, "tasksClaimOverride"),
        a = $(() => i.subSections.map(o => ({
          value: o.title,
          label: o.title,
          dot: o.tasks.some(d => ft(d, t.value))
        }))),
        s = N((l = a.value[0]) == null ? void 0 : l.value),
        r = $(() => {
          var o;
          return ((o = i.subSections.find(d => d.title === s.value)) == null ? void 0 : o.tasks) ?? []
        });
      return (o, d) => {
        const v = Ot,
          b = Z,
          m = Ke;
        return n(r).length ? (u(), A("div", Za, [R(v, {
          modelValue: n(s),
          "onUpdate:modelValue": d[0] || (d[0] = c => ce(s) ? s.value = c : null),
          items: n(a)
        }, null, 8, ["modelValue", "items"]), n(r).length ? (u(), C(Ie, {
          key: n(s),
          tag: "div",
          name: "list-shuffle-transition",
          class: "tasks-list"
        }, {
          default: B(() => [(u(!0), A(P, null, H(n(r), c => (u(), C(m, {
            key: c.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": d[1] || (d[1] = k => t.value = k),
            task: c,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            "onUi:claimed": d[2] || (d[2] = k => o.$emit("ui:claimed", k)),
            "onRequest:update": d[3] || (d[3] = k => o.$emit("request:update"))
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback"]))), 128))]),
          _: 1
        })) : (u(), A("div", Ja, [T("div", es, [R(b, {
          name: "warning-circle-check",
          class: "icon"
        }), d[4] || (d[4] = T("span", {
          class: "label"
        }, " Hooray! You've nailed every task! ", -1))])]))])) : I("", !0)
      }
    }
  }),
  as = D(ts, [
    ["__scopeId", "data-v-2fd71113"]
  ]),
  ss = {
    class: "pages-tasks-section"
  },
  ns = M({
    __name: "TasksSection",
    props: _({
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
    emits: _(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      const i = e,
        t = $(() => vt(i.section)),
        a = V(e, "tasksClaimOverride"),
        s = l => {
          const o = l.tasks,
            d = k => !Ue(k),
            v = k => Re(k, a.value),
            b = k => {
              const p = k.subTasks ? Re(k.subTasks, a.value) : void 0;
              return {
                ...k,
                subTasks: p
              }
            },
            m = k => {
              const p = k.filter(d);
              return v(p).map(b)
            },
            c = k => k.map(p => ({
              ...p,
              tasks: m(p.tasks)
            }));
          return {
            ...l,
            tasks: m(o),
            subSections: c(l.subSections)
          }
        },
        r = $(() => s(i.section));
      return (l, o) => {
        const d = Ft,
          v = Xa,
          b = as;
        return u(), A("div", ss, [n(r).title || n(r).description ? (u(), C(d, {
          key: 0,
          title: n(r).title,
          subtitle: n(r).description
        }, null, 8, ["title", "subtitle"])) : I("", !0), n(r).tasks.length ? (u(), C(v, {
          key: 1,
          "tasks-claim-override": a.value,
          "onUpdate:tasksClaimOverride": o[0] || (o[0] = m => a.value = m),
          tasks: n(r).tasks,
          "task-mode": n(t),
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": o[1] || (o[1] = m => l.$emit("ui:claimed", m)),
          "onRequest:update": o[2] || (o[2] = m => l.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "tasks", "task-mode", "start-callback", "claim-callback", "verify-callback"])) : I("", !0), R(b, {
          "tasks-claim-override": a.value,
          "onUpdate:tasksClaimOverride": o[3] || (o[3] = m => a.value = m),
          "sub-sections": n(r).subSections,
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": o[4] || (o[4] = m => l.$emit("ui:claimed", m)),
          "onRequest:update": o[5] || (o[5] = m => l.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "sub-sections", "start-callback", "claim-callback", "verify-callback"])])
      }
    }
  }),
  is = D(ns, [
    ["__scopeId", "data-v-2f6edcc7"]
  ]),
  os = M({
    __name: "PageSkeleton",
    props: {
      delay: {
        type: Number,
        default: 120
      }
    },
    setup(e) {
      const i = e,
        t = N(!1),
        a = setTimeout(() => t.value = !0, i.delay);
      return ue(() => clearTimeout(a)), (s, r) => n(t) ? ee(s.$slots, "default", {
        key: 0
      }) : I("", !0)
    }
  }),
  ls = {},
  rs = {
    class: "pages-tasks-skeleton"
  },
  cs = {
    class: "cards"
  },
  us = {
    class: "subtitle-wrapper"
  },
  ds = {
    class: "short-cards"
  },
  ms = {
    class: "subtitle-wrapper"
  },
  ks = {
    class: "list-items"
  };

function ps(e, i) {
  const t = _t,
    a = os;
  return u(), C(a, null, {
    default: B(() => [T("div", rs, [R(t, {
      class: "title"
    }), T("div", cs, [(u(), A(P, null, H(2, s => R(t, {
      key: s,
      class: "item"
    })), 64))]), T("div", us, [R(t, {
      class: "subtitle"
    })]), T("div", ds, [(u(), A(P, null, H(2, s => R(t, {
      key: s,
      class: "item"
    })), 64))]), T("div", ms, [R(t, {
      class: "subtitle"
    })]), T("div", ks, [(u(), A(P, null, H(7, s => T("div", {
      key: s,
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
const fs = D(ls, [
    ["render", ps],
    ["__scopeId", "data-v-4fe8da9f"]
  ]),
  vs = {
    class: "tasks-page page"
  },
  bs = {
    class: "header"
  },
  ys = {
    class: "title"
  },
  gs = {
    class: "sections"
  },
  hs = M({
    __name: "tasks",
    setup(e) {
      const i = qe(),
        t = $(() => bt().query.openTaskSheetId),
        a = N(!1),
        s = N(),
        r = N({}),
        o = yt(async () => At(await J.getTasksSections(ae().$webApp.dataUnsafe.query.ref)), h => s.value = h, 15e3),
        d = (h, y) => {
          if (s.value)
            for (const S of s.value) {
              const f = [...S.tasks, ...S.tasks.flatMap(g => g.subTasks ?? []), ...S.subSections.flatMap(g => g.tasks ?? [])].filter(g => g.id === h);
              if (f.length) {
                f.forEach(g => {
                  Object.assign(g, y)
                });
                return
              }
            }
        },
        v = async h => {
          const y = await J.startTask(h.id);
          y.err || d(h.id, y.data)
        }, b = async h => {
          const y = await J.claimTask(h.id);
          return y.err ? !1 : (d(h.id, y.data), ht().update(), !0)
        }, m = async (h, y) => {
          const S = await J.verifyTask(h.id, y);
          return S.err ? S.code === 400 ? Q.WRONG_KEYWORD : Q.UNKNOWN_ERROR : (d(h.id, S.data), Q.SUCCESS)
        }, c = h => {
          setTimeout(() => delete r.value[h.id], 3e3), h.reward.isZero() || Tt().success(O("base.you_got_bp", {
            bp: te(h.reward)
          }))
        }, k = $(() => s.value ? s.value.reduce((y, S) => ([...S.tasks, ...S.tasks.flatMap(g => g.subTasks ?? []), ...S.subSections.flatMap(g => g.tasks ?? [])].filter(g => !z(g.status, r.value[g.id]) && !Ue(g) && g.kind !== K.GROUP).map(g => g.id).forEach(g => y.add(g)), y), new Set).size : 0);
      return (async () => {
        i.earn.earnTaskMainPageOpen(), await o.exec()
      })(), ge(() => [s.value, t.value], () => {
        if (!s.value || !t.value) return;
        Se().replace({
          query: {}
        });
        const h = s.value.flatMap(y => y.tasks).find(y => y.id === t.value && [K.QUEST, K.GROUP].includes(y.kind));
        h && gt(() => xe().openTaskSheet(h))
      }), ue(() => {
        o.destroy()
      }), (h, y) => {
        const S = Dt,
          w = is,
          f = fs;
        return u(), A("div", vs, [n(a) ? (u(), C(S, {
          key: 0
        })) : n(s) ? (u(), A(P, {
          key: 1
        }, [T("div", bs, [T("span", ys, [ve(q(("t" in h ? h.t : n(O))("earn.title")) + " ", 1), T("sup", null, q(n(k)), 1)])]), T("div", gs, [(u(!0), A(P, null, H(n(s), (g, E) => (u(), C(w, {
          key: E,
          "tasks-claim-override": n(r),
          "onUpdate:tasksClaimOverride": y[0] || (y[0] = L => ce(r) ? r.value = L : null),
          section: g,
          "start-callback": v,
          "claim-callback": b,
          "verify-callback": m,
          class: "section",
          "onUi:claimed": y[1] || (y[1] = L => c(L)),
          "onRequest:update": y[2] || (y[2] = L => n(o).exec())
        }, null, 8, ["tasks-claim-override", "section"]))), 128))])], 64)) : (u(), C(f, {
          key: 2
        }))])
      }
    }
  }),
  Ds = D(hs, [
    ["__scopeId", "data-v-e92e41af"]
  ]);
export {
  Ds as
  default
};