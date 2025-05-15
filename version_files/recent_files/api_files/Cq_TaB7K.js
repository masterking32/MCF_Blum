import {
  _ as Ve
} from "./D8fBgVbz.js";
import {
  f as M,
  o as d,
  N as A,
  e as n,
  a0 as Ge,
  C as O,
  ab as He,
  d as D,
  c as C,
  t as U,
  G as I,
  j as $,
  cG as L,
  bt as We,
  D as B,
  ak as ee,
  ao as Ye,
  a1 as ae,
  x as fe,
  V as _,
  cH as se,
  W as G,
  cI as K,
  aR as de,
  R as Ce,
  cJ as V,
  cK as j,
  cL as Y,
  cM as Qe,
  a8 as ve,
  n as X,
  _ as J,
  aS as ze,
  u as je,
  y as N,
  Z as be,
  cy as me,
  T as ie,
  w as oe,
  a as h,
  b as R,
  m as pe,
  ar as Xe,
  a2 as _e,
  cN as Q,
  cx as ke,
  aX as le,
  p as re,
  l as Be,
  bj as ne,
  az as ye,
  a9 as Z,
  af as Ne,
  h as te,
  aa as Je,
  k as Me,
  aK as Ze,
  a7 as ce,
  U as De,
  H as et,
  ad as tt,
  b6 as at,
  as as st,
  cO as z,
  cP as x,
  cQ as Oe,
  br as ge,
  bO as nt,
  bP as it,
  F,
  ai as Ae,
  cR as we,
  cS as ot,
  aw as lt,
  cT as rt,
  a6 as $e,
  aM as ct,
  au as ut,
  aB as dt,
  q as W,
  cU as mt,
  av as kt,
  b2 as Se,
  Y as pt,
  ag as ft,
  X as qe,
  cV as vt,
  cW as bt,
  cX as Ue,
  cY as Re,
  bd as yt,
  a5 as gt,
  c7 as Tt,
  a3 as ht,
  ac as At,
  ae as Ct
} from "./DdW0p5VG.js";
import {
  _ as St
} from "./GFK-_PsO.js";
import {
  _ as It,
  a as Ot
} from "./BO9JN9XW.js";
import {
  a as wt
} from "./BQ-XDrql.js";
import {
  _ as Le
} from "./BFEgGYK1.js";
import {
  _ as $t
} from "./DuMelggl.js";
import {
  B as Rt
} from "./XZmCcw9f.js";
import {
  d as Te
} from "./BIfqI3t8.js";
import {
  _ as Et
} from "./B0rhmfWp.js";
import {
  _ as _t
} from "./BHHMs5Tb.js";
import "./46fdGu7D.js";
const Bt = {};

function Nt(e, o) {
  const t = Ve;
  return d(), A(t, {
    icon: ("imgResolver" in e ? e.imgResolver : n(Ge))("emoji/Construction"),
    title: ("t" in e ? e.t : n(O))("errors.maintenance.title"),
    subtitle: ("t" in e ? e.t : n(O))("errors.maintenance.subtitle"),
    "button-label": ("t" in e ? e.t : n(O))("base.visit_community"),
    onButton: o[0] || (o[0] = a => ("useApp" in e ? e.useApp : n(He))().openBlumTelegram())
  }, null, 8, ["icon", "title", "subtitle", "button-label"])
}
const Mt = M(Bt, [
    ["render", Nt]
  ]),
  Dt = {
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
  Lt = D({
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
      return (o, t) => (d(), C("div", Dt, [e.title ? (d(), C("div", qt, U(e.title), 1)) : I("", !0), e.subtitle ? (d(), C("div", Ut, U(e.subtitle), 1)) : I("", !0)]))
    }
  }),
  Pt = M(Lt, [
    ["__scopeId", "data-v-e113fe8d"]
  ]),
  Ft = ["disabled"],
  xt = D({
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
        t = $(() => {
          const s = [L.CARD, L.SHORT_CARD].includes(o.itemMode) ? We.RIGHT : void 0;
          if (o.tooltip === "validation") return {
            text: O("earn.task.verification_indicator_text"),
            alignment: s
          }
        });
      return (a, s) => {
        const r = St,
          l = fe;
        return n(t) ? (d(), A(r, {
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
        }, 8, ["text", "alignment"])) : e.isQuestButton ? (d(), A(l, {
          key: 1,
          class: "tasks-fill-full",
          fill: "",
          size: n(ae).LARGE,
          disabled: e.disabled,
          onClick: s[1] || (s[1] = i => e.onClick && e.onClick(i))
        }, {
          default: B(() => [ee(a.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["size", "disabled"])) : (d(), C("button", {
          key: 2,
          class: "tasks-pill-inline",
          disabled: e.disabled,
          onClick: s[2] || (s[2] = i => e.onClick && e.onClick(i))
        }, [ee(a.$slots, "default", {}, void 0, !0)], 8, Ft))
      }
    }
  }),
  Kt = M(xt, [
    ["__scopeId", "data-v-3aaee1da"]
  ]),
  Vt = {
    key: 0,
    class: "label"
  },
  Gt = D({
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
        default: se.DARK
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
      emit: o
    }) {
      const t = e,
        a = o,
        s = G(e, "claimOverride"),
        r = $(() => t.status === K.READY_FOR_CLAIM ? de.DARK : t.status === K.STARTED ? t.mode === se.LIGHT ? de.DARK : de.LIGHT : de.DARK),
        l = $(() => {
          const i = !t.reward || t.reward.value.isZero() ? O("base.claim") : O("base.claim_n", {
              val: Ce(t.reward.value),
              currency: t.reward.symbol
            }),
            u = {
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
                label: i,
                cls: "is-disabled",
                disabled: !0
              }
            };
          if (t.status === K.NOT_STARTED) return t.kind === V.ONGOING ? u.claimDisabled : t.isQuestButton ? u.questDisabled : j(t.kind) ? u.subtasksModalOpen : {
            label: O("earn.task.buttons.start"),
            cls: "is-status-not-started",
            onClick: () => {
              s.value = Y.STARTED, setTimeout(() => s.value === Y.STARTED && (s.value = void 0), 15e3), t.startCallback(), a("click")
            }
          };
          if (t.status === K.STARTED) return t.kind === V.ONGOING ? u.claimDisabled : t.isQuestButton ? u.questDisabled : j(t.kind) ? u.subtasksModalOpen : s.value === Y.STARTED ? {
            loader: !0,
            cls: "is-status-started"
          } : {
            icon: "clock",
            cls: "is-status-started",
            tooltip: "validation"
          };
          if (t.status === K.READY_FOR_VERIFY) return {
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
          if (t.status === K.FINISHED) return {
            icon: "circle-check-white",
            cls: "is-status-finished"
          };
          if (t.status === K.READY_FOR_CLAIM) return {
            label: i,
            cls: "is-status-ready-for-claim",
            onClick: async () => {
              s.value = Y.LOADING, a("click"), await Qe(t.claimCallback, 2e3) ? (s.value = Y.DONE, a("ui:claimed")) : s.value = void 0
            }
          };
          throw ve("Unsupported condition")
        });
      return (i, u) => {
        const v = J,
          b = ze,
          m = Kt;
        return d(), A(m, {
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
          default: B(() => [n(l).label ? (d(), C("div", Vt, U(n(l).label), 1)) : n(l).icon ? (d(), A(v, {
            key: 1,
            name: n(l).icon,
            class: "icon"
          }, null, 8, ["name"])) : n(l).loader ? (d(), A(b, {
            key: 2,
            size: 16,
            type: n(r)
          }, null, 8, ["type"])) : I("", !0)]),
          _: 1
        }, 8, ["on-click", "class", "is-quest-button", "disabled", "tooltip", "item-mode"])
      }
    }
  }),
  Ie = M(Gt, [
    ["__scopeId", "data-v-7eff87a7"]
  ]),
  Ht = `PREAMBLE
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
  Wt = {
    key: 0,
    class: "pages-tasks-disclaimer-title"
  },
  Yt = ["src"],
  Qt = {
    key: 1,
    class: "pages-tasks-disclaimer-title"
  },
  zt = {
    key: 0,
    class: "pages-tasks-disclaimer general"
  },
  jt = {
    class: "checkbox"
  },
  Xt = {
    key: 1,
    class: "pages-tasks-disclaimer details"
  },
  Ee = "community@blum.io",
  Jt = D({
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
      const o = e,
        t = G(e, "modelValue"),
        {
          copy: a
        } = je(),
        s = () => a(Ee),
        r = () => ({
          isAgreed: !1,
          state: "general"
        }),
        l = N(r());
      be(t, b => b && (l.value = r()));
      const i = () => {
          l.value.isAgreed = !0, l.value.state = "general"
        },
        u = () => {
          t.value = !1, o.startFn && o.startFn()
        },
        v = $(() => {
          const b = Ht.split(`
`).reduce((m, c) => {
            const k = c.trim();
            if (!k) return m;
            const p = (() => {
              if (k.includes("{{ community_email }}")) {
                const T = k.split("{{ community_email }}");
                return me("p", [T[0], me("span", {
                  class: "as-link",
                  onClick: s
                }, Ee), T[1]])
              }
              return me("p", k)
            })();
            return m.push(p), m
          }, []);
          return me("div", {
            class: "text"
          }, b)
        });
      return (b, m) => {
        const c = It,
          k = fe,
          p = _e,
          T = ie("img-error");
        return d(), A(p, {
          modelValue: t.value,
          "onUpdate:modelValue": m[4] || (m[4] = y => t.value = y),
          title: "",
          "back-icon": n(l).state === "details",
          "content-key": n(l).state,
          onBack: m[5] || (m[5] = y => n(l).state = "general")
        }, {
          title: B(() => [n(l).state === "general" ? (d(), C("span", Wt, [oe(h("img", {
            src: e.iconUrl,
            alt: "Task icon"
          }, null, 8, Yt), [
            [T]
          ]), h("span", null, U(e.productName), 1)])) : I("", !0), n(l).state === "details" ? (d(), C("span", Qt, "Disclaimer")) : I("", !0)]),
          default: B(() => [n(l).state === "general" ? (d(), C("div", zt, [m[8] || (m[8] = h("div", {
            class: "text"
          }, [h("p", null, "Nothing in Blum is to be considered as being of promotional nature or aiming at commercial use."), h("p", null, "No material or information which may be made available in Blum shall constitute or be construed as a recommendation, endorsement, offer, invitation or solicitation to enter into any transaction with or purchase any product, or otherwise deal with securities, crypto assets or other products."), h("p", null, "You alone are solely responsible for determining whether any investment, security or any other product or service, is appropriate or suitable for you. You should consult an attorney or tax professional regarding your specific legal or tax situation.")], -1)), h("div", jt, [R(c, {
            modelValue: n(l).isAgreed,
            "onUpdate:modelValue": m[0] || (m[0] = y => n(l).isAgreed = y)
          }, null, 8, ["modelValue"]), h("span", null, [m[6] || (m[6] = pe("By using Blum, you accept the terms of our ")), h("span", {
            class: "as-link",
            onClick: m[1] || (m[1] = y => n(l).state = "details")
          }, "Disclaimer"), m[7] || (m[7] = pe("."))])])])) : I("", !0), n(l).state === "details" ? (d(), C("div", Xt, [(d(), A(Xe(n(v))))])) : I("", !0)]),
          footer: B(() => [n(l).state === "general" ? (d(), A(k, {
            key: 0,
            label: `Go to ${e.productName}`,
            fill: "",
            size: n(ae).LARGE,
            tertiary: "",
            disabled: !n(l).isAgreed,
            onClick: m[2] || (m[2] = y => u())
          }, null, 8, ["label", "size", "disabled"])) : I("", !0), n(l).state === "details" ? (d(), A(k, {
            key: 1,
            label: "I agree",
            fill: "",
            size: n(ae).LARGE,
            onClick: m[3] || (m[3] = y => i())
          }, null, 8, ["size"])) : I("", !0)]),
          _: 1
        }, 8, ["modelValue", "back-icon", "content-key"])
      }
    }
  }),
  Zt = M(Jt, [
    ["__scopeId", "data-v-845ec11f"]
  ]),
  ea = {
    class: "pages-tasks-verify"
  },
  ta = {
    class: "heading"
  },
  aa = ["src"],
  sa = {
    class: "title"
  },
  na = D({
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
        s = N(""),
        r = N(),
        l = async () => {
          r.value = void 0, r.value = await t.verifyCallback(s.value), r.value === Q.SUCCESS && a("close")
        };
      be(s, () => {
        r.value !== void 0 && (r.value = void 0)
      });
      const i = $(() => {
        switch (r.value) {
          case void 0:
            return {
              status: ke.REGULAR, caption: O("earn.verify_input.caption.default")
            };
          case Q.UNKNOWN_ERROR:
            return {
              status: ke.ERROR, caption: O("earn.verify_input.caption.unknown_error")
            };
          case Q.WRONG_KEYWORD:
            return {
              status: ke.ERROR, caption: O("earn.verify_input.caption.wrong_keyword")
            };
          case Q.SUCCESS:
            return {
              status: ke.REGULAR
            };
          default:
            throw r.value, ve("Invalid status")
        }
      });
      return (u, v) => {
        const b = J,
          m = wt,
          c = fe,
          k = Le,
          p = $t,
          T = ie("img-error");
        return d(), A(p, null, {
          default: B(() => [h("div", ea, [h("div", ta, [oe(h("img", {
            src: n(le)(e.task.iconFileKey),
            alt: "Task icon",
            class: "task-icon"
          }, null, 8, aa), [
            [T]
          ]), h("div", sa, U(e.task.title), 1), R(b, {
            name: "external-link",
            class: "link-icon",
            onClick: v[0] || (v[0] = y => u.$emit("doAction"))
          })]), R(m, {
            modelValue: n(s),
            "onUpdate:modelValue": v[1] || (v[1] = y => re(s) ? s.value = y : null),
            placeholder: "Keyword",
            label: "Verification",
            status: n(i).status,
            caption: n(i).caption,
            class: "input"
          }, null, 8, ["modelValue", "status", "caption"]), R(k, {
            "ignore-tabs": ""
          }, {
            default: B(() => [R(c, {
              label: "Verify",
              fill: "",
              size: n(ae).LARGE,
              onClick: v[2] || (v[2] = y => l())
            }, null, 8, ["size"])]),
            _: 1
          })])]),
          _: 1
        })
      }
    }
  }),
  ia = M(na, [
    ["__scopeId", "data-v-64ea4ace"]
  ]),
  oa = "" + new URL("Medium.9CUCDBk_.woff2", import.meta.url).href,
  la = "" + new URL("Clap.Couz_01b.webp", import.meta.url).href,
  ra = "" + new URL("moon-bg.CTZyPnMM.webp", import.meta.url).href,
  ca = "data:image/webp;base64,UklGRs4AAABXRUJQVlA4WAoAAAAQAAAAfwAAAwAAQUxQSFYAAAABf2CQbaQ7gqvJ+wO+Q0RkvPUAjGLbavMHEShAACIeUrqRLLONlz9RUiRkMJCyoiqI6P8EnH9rTm5aAFDCLttdN30m0szH1XXn4tO2urJRNKMGXKOkWlZQOCBSAAAAcAMAnQEqgAAEAD6RSJ9LpaQioaQIALASCWcAzygMvffVJ3hgAP7x/9//f3h/7mUf/MAWUp3/WP536on+Tf3g6NQjfoODPwhtge3CIKud4qAAAA==",
  ua = "data:image/webp;base64,UklGRuAAAABXRUJQVlA4WAoAAAAQAAAAdAAAAgAAQUxQSFgAAAABb2CQbaQzuCIcwvvrvUREZM4XA4xqbZvxG3ZaDBEk4M0gwT9t7URQxSfCq4EIzl/GPBSI6H92ozwkuYSHM8lJpE/X8F9WV9AWm7F2OHm7t3hW5FsDmFIBVlA4IGIAAACwAwCdASp1AAMAPpFAnUslo6KhqBgIALASCWMA0BW/gEwxFE9agAD+8f/f+YJ/9Y/+3nagDHY3P0Z+lXppwDx/w1+Zv9xKP/hvGznerPf/8nJlm/p30HP6B8rBuXNTiAAAAA==",
  da = () => ({
    generate: async o => {
      const {
        type: t,
        data: a
      } = o;
      switch (t) {
        case "task-joined-at":
          return await ma(a)
      }
    }
  });
async function ma(e) {
  const {
    currentStreakDays: o,
    username: t,
    userCreatedAt: a,
    width: s,
    height: r
  } = e, l = await ya(s, r);
  if (!l) return;
  await pa(l, [{
    type: "bg-image",
    options: {
      src: ra
    }
  }, {
    type: "image",
    options: {
      src: la,
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
      src: ca,
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
      src: ua,
      width: 128,
      height: 3.4
    },
    position: {
      topIndent: 4
    }
  }]);
  const i = Be().public.TELEGRAM_APP_URL,
    u = ne().referralToken.value,
    v = `${i}?startapp=ref_${u}`,
    b = `${O("memepad.tasks.share_stories.text")}
${v}
#IamBlumie #Join #Blum #MiniApp`;
  return {
    canvas: l.canvas,
    share: () => ga({
      canvas: l.canvas,
      text: b,
      name: "Blum"
    })
  }
}

function ka(e, o, t, a) {
  return {
    ctx: e,
    canvas: o,
    height: t,
    width: a,
    topPosition: 0
  }
}
async function pa(e, o) {
  for (const t of o) switch (t.type) {
    case "text":
      fa(e, t.options, t.position);
      break;
    case "image":
      await va(e, t.options, t.position);
      break;
    case "bg-image":
      await ba(e, t.options);
      break;
    default:
      throw ve(`Unknown element type: ${t}`)
  }
}

function fa(e, {
  text: o,
  style: t,
  color: a,
  textBaseline: s = "top",
  textAlign: r = "center"
}, l) {
  const i = (() => {
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
        throw ve("Unknown style")
    }
  })();
  e.ctx.font = i.font, e.ctx.fillStyle = a, e.ctx.textBaseline = s, e.ctx.textAlign = r;
  const u = Array.isArray(o) ? o : [o];
  if ("topIndent" in l) {
    e.topPosition += l.topIndent;
    for (const v of u) e.ctx.fillText(v, e.width / 2, e.topPosition), e.topPosition += i.lineHeight
  } else if ("bottom" in l) {
    let v = e.height - l.bottom;
    for (const b of u.reverse()) e.ctx.fillText(b, e.width / 2, v), v -= i.lineHeight
  }
}
async function va(e, {
  src: o,
  width: t,
  height: a
}, s) {
  const r = new Image;
  await new Promise(l => {
    r.onload = l, r.src = o
  }), "topIndent" in s ? (e.topPosition += s.topIndent, e.ctx.drawImage(r, e.width / 2 - t / 2, e.topPosition, t, a), e.topPosition += a) : "bottom" in s && e.ctx.drawImage(r, e.width / 2 - t / 2, e.height - s.bottom, t, a)
}
async function ba(e, {
  src: o
}) {
  const t = new Image;
  await new Promise(a => {
    t.onload = a, t.src = o
  }), e.ctx.drawImage(t, 0, 0, e.width, e.height)
}
async function ya(e, o) {
  const t = document.createElement("canvas"),
    a = t.getContext("2d");
  if (!a) return;
  const s = window.devicePixelRatio || 1,
    r = new FontFace("RoobertPro", `url(${oa})`, {
      weight: "500"
    }),
    l = new FontFace("RoobertPro", `url(${Rt})`, {
      weight: "700"
    });
  return await Promise.all([ne().getReferralToken(), document.fonts.ready, r.load(), l.load()]), document.fonts.add(r), document.fonts.add(l), a.clearRect(0, 0, e, o), t.width = e * s, t.height = o * s, a.scale(s, s), a.imageSmoothingEnabled = !0, a.imageSmoothingQuality = "high", t.style.width = e * s + "px", t.style.height = o * s + "px", t.style.scale = `${1/s}`, ka(a, t, o, e)
}
async function ga({
  canvas: e,
  name: o,
  text: t
}) {
  const a = await new Promise(v => e.toBlob(v, "image/png"));
  if (!a) return ye();
  const s = new File([a], "story-image.png", {
      type: "image/png"
    }),
    r = await Z.uploadFile(s, () => {});
  if (!Ne(r)) return ye();
  const l = Be().public.TELEGRAM_APP_URL,
    i = r.data.url,
    u = `${l}?startapp=ref_${ne().referralToken.value}`;
  try {
    return te().$webApp.shareToStory(i, {
      text: t,
      widget_link: {
        url: u,
        name: o
      }
    }), Je(void 0)
  } catch {
    return ye()
  }
}
const Ta = {
    class: "pages-tasks-share-story"
  },
  ha = D({
    __name: "TasksShareStory",
    emits: ["success", "close"],
    setup(e, {
      emit: o
    }) {
      const t = o,
        a = Me().getters.getUser,
        s = Ze(),
        r = N({
          type: "loading"
        }),
        l = N(!1),
        i = N(),
        {
          generate: u
        } = da(),
        v = async () => {
          var w, f;
          const c = (w = a.value) == null ? void 0 : w.username,
            k = (f = a.value) == null ? void 0 : f.createdAt,
            p = s.currentStreakDays.value;
          if (!c || !k || p === void 0 || !i.value) return;
          const T = i.value.clientWidth,
            y = i.value.clientHeight,
            S = await u({
              type: "task-joined-at",
              data: {
                username: c,
                userCreatedAt: k,
                currentStreakDays: p,
                width: T,
                height: y
              }
            });
          S && (i.value.appendChild(S.canvas), r.value = {
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
      return be(() => [s.currentStreakDays.value, i.value, a.value], m, {
        immediate: !0
      }), window.addEventListener("resize", m), ce(() => {
        window.removeEventListener("resize", m)
      }), De().initHandler(() => t("close"), "tasks-share-story"), (c, k) => {
        const p = tt,
          T = fe,
          y = Le;
        return d(), C("div", Ta, [n(r).type === "loading" ? (d(), A(p, {
          key: 0,
          fixed: ""
        })) : (d(), A(y, {
          key: 1,
          "ignore-tabs": "",
          "no-background": "",
          "hide-space": ""
        }, {
          default: B(() => [R(T, {
            size: n(ae).LARGE,
            fill: "",
            loading: n(l),
            onClick: b
          }, {
            default: B(() => [pe(U(("t" in c ? c.t : n(O))("memepad.tasks.share_stories.button")), 1)]),
            _: 1
          }, 8, ["size", "loading"])]),
          _: 1
        })), h("div", {
          ref_key: "canvasContainer",
          ref: i,
          class: "canvas-wrapper"
        }, null, 512)])
      }
    }
  }),
  Aa = M(ha, [
    ["__scopeId", "data-v-7593f978"]
  ]),
  Ca = () => {
    const {
      tonConnectUI: e
    } = at();
    return {
      sendTransaction: async t => {
        const a = Te.Address.parse(t.address),
          s = {
            validUntil: Math.floor(Date.now() / 1e3) + 360,
            messages: [{
              address: a.toString(),
              amount: Te.toNano(t.amountTON.toString()).toString(),
              payload: (() => {
                if (t.message) return Te.beginCell().storeUint(0, 32).storeStringTail(t.message).endCell().toBoc().toString("base64")
              })()
            }]
          };
        return await e.value.sendTransaction(s)
      }
    }
  },
  Pe = D({
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
      emit: o
    }) {
      const t = e,
        a = o,
        s = G(e, "claimOverride"),
        r = Ca(),
        l = st(),
        i = N(!1),
        u = () => {
          i.value = !1, t.task.status === K.NOT_STARTED && t.startCallback()
        },
        v = () => {
          if ([x.SOCIAL_MEDIA_CHECK, x.SOCIAL_SUBSCRIPTION].includes(t.task.type) && t.task.socialSubscription) {
            const f = t.task.socialSubscription.url;
            t.task.socialSubscription.openInTelegram ? te().$webApp.openTelegramLink(f) : f.startsWith("http") ? te().$webApp.openLink(f) : Ae().push(f)
          }
          if (t.task.type === x.APPLICATION_LAUNCH && t.task.applicationLaunch && te().$webApp.openTelegramLink(t.task.applicationLaunch.url), t.task.type === x.WALLET_CONNECTION) {
            const f = () => {
              t.task.status === K.NOT_STARTED && t.startCallback()
            };
            l.runConnectionFlow(f)
          }
          if (t.task.type === x.INTERNAL && t.task.subType === we.SHARE_STORIES && (i.value = !0), t.task.type === x.ONCHAIN_TRANSACTION) {
            const f = async () => {
              const g = t.task.onchainTransaction;
              if (t.task.status !== K.NOT_STARTED || !g) return;
              const E = Me().getters.mustGetUser.value.id,
                q = `${t.task.id}:${E}`;
              await r.sendTransaction({
                address: g.address,
                amountTON: g.amount,
                message: q
              }).then(t.startCallback).catch()
            };
            l.runConnectionFlow(f)
          }
          t.task.validationType === ot.MEMEPAD && Ae().push({
            name: "memepad",
            query: {
              memepadFrom: lt.TASK
            }
          })
        },
        b = () => {
          t.task.status === K.READY_FOR_VERIFY && v();
          const g = z(t.task.status, s.value),
            E = rt(t.task.status),
            q = g || E,
            P = j(t.task.kind);
          q && (P || v(), P && a("open:subtasks-modal"))
        },
        m = $(() => t.task.kind === V.GROUP ? !0 : !t.task.reward.value.isZero()),
        c = $(() => {
          var f;
          if (!m.value) return "";
          if ((t.task.kind === V.QUEST && t.task.reward.value.isZero() || t.task.kind === V.GROUP) && "subTasks" in t.task) {
            if (!((f = t.task.subTasks) != null && f.length)) return "";
            const g = () => ({
                max: new $e(0),
                finished: new $e(0)
              }),
              E = t.task.subTasks.reduce((q, P) => {
                const H = q.get(P.reward.symbol) ?? g();
                return H.max = H.max.add(P.reward.value), z(P.status, s.value) && (H.finished = H.finished.add(P.reward.value)), q.set(P.reward.symbol, H), q
              }, new Map);
            return Array.from(E.entries()).map(([q, P]) => `${P.finished}/${P.max} ${q}`).join(", ")
          }
          return `+${Ce(t.task.reward.value)} ${t.task.reward.symbol}`
        }),
        k = N(),
        p = N(!1),
        T = () => {
          const f = () => {
            t.task.kind !== V.ONGOING && (j(t.task.kind) || (v(), t.task.type !== x.WALLET_CONNECTION && t.task.type !== x.ONCHAIN_TRANSACTION && (t.task.type === x.INTERNAL && t.task.subType === we.SHARE_STORIES || t.startCallback())))
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
          if (t.task.type === x.PROGRESS_TARGET) {
            const f = Oe(t.task.progressTarget, "progress target"),
              g = ge(f.target, {
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
          if (t.task.type === x.PROGRESS_TARGET && t.task.progressTarget) {
            const f = Oe(t.task.progressTarget, "progress target"),
              g = ge(f.progress, {
                accuracy: f.accuracy
              }),
              E = ge(f.target, {
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
          startProxy: T,
          title: y,
          progress: S,
          openVerify: () => p.value = !0
        }));
      return De().initWatcher({
        key: "tasks-item-inner-wrapper",
        watchFn: () => p.value,
        callback: () => p.value = !1
      }), (f, g) => {
        var H;
        const E = Zt,
          q = ia,
          P = Aa;
        return d(), C(F, null, [ee(f.$slots, "default", nt(it(n(w)))), R(E, {
          "model-value": !!n(k),
          "product-name": e.task.productName,
          "icon-url": n(le)(e.task.iconFileKey),
          "start-fn": (H = n(k)) == null ? void 0 : H.startFn,
          "onUpdate:modelValue": g[0] || (g[0] = ue => ue ? void 0 : k.value = void 0)
        }, null, 8, ["model-value", "product-name", "icon-url", "start-fn"]), n(p) ? (d(), A(q, {
          key: 0,
          task: e.task,
          "verify-callback": e.verifyCallback,
          onDoAction: g[1] || (g[1] = ue => v()),
          onClose: g[2] || (g[2] = ue => p.value = !1)
        }, null, 8, ["task", "verify-callback"])) : I("", !0), n(i) ? (d(), A(P, {
          key: 1,
          onClose: g[3] || (g[3] = ue => i.value = !1),
          onSuccess: u
        })) : I("", !0)], 64)
      }
    }
  }),
  Sa = ["onClick"],
  Ia = ["src"],
  Oa = {
    class: "details"
  },
  wa = {
    class: "title"
  },
  $a = {
    key: 0,
    class: "progress-reward"
  },
  Ra = {
    key: 0,
    class: "progress"
  },
  Ea = {
    key: 1,
    class: "reward"
  },
  _a = D({
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
      const o = G(e, "claimOverride");
      return (t, a) => {
        const s = Ie,
          r = Pe,
          l = ie("img-error");
        return d(), A(r, {
          "claim-override": o.value,
          "onUpdate:claimOverride": a[4] || (a[4] = i => o.value = i),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": a[5] || (a[5] = i => t.$emit("open:subtasks-modal"))
        }, {
          default: B(({
            onClick: i,
            rewardText: u,
            startProxy: v,
            title: b,
            progress: m,
            openVerify: c
          }) => {
            var k;
            return [h("div", ct({
              class: "pages-tasks-list-item-label"
            }, t.$attrs, {
              onClick: i
            }), [h("div", {
              class: X(["container", {
                "no-border": e.noBorder
              }])
            }, [oe(h("img", {
              src: n(le)(e.task.iconFileKey),
              alt: "Task icon"
            }, null, 8, Ia), [
              [l]
            ]), h("div", Oa, [h("div", wa, U(b.value), 1), m.value || u.value ? (d(), C("div", $a, [(k = m.value) != null && k.label ? (d(), C("span", Ra, U(`${m.value.label}${m.value.postfix}`) + U(u.value ? ", " : ""), 1)) : I("", !0), u.value ? (d(), C("span", Ea, U(u.value), 1)) : I("", !0)])) : I("", !0)]), e.task.status ? (d(), A(s, {
              key: 0,
              "claim-override": o.value,
              "onUpdate:claimOverride": a[0] || (a[0] = p => o.value = p),
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
            }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "is-nested", "item-mode", "onOpen:verify"])) : I("", !0)], 2)], 16, Sa)]
          }),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  Fe = M(_a, [
    ["__scopeId", "data-v-61588e22"]
  ]),
  Ba = {
    class: "label"
  },
  he = 185.074,
  Na = D({
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
        default: se.DARK
      }
    },
    setup(e) {
      ut(a => ({
        b63fb046: he,
        "0e5a5f8f": n(t)
      }));
      const o = e,
        t = $(() => he - he * (o.finished / o.total));
      return (a, s) => {
        const r = J;
        return d(), C("div", {
          class: X(["pages-tasks-progress-pill", `is-${e.mode}`])
        }, [h("span", Ba, U(e.label), 1), R(r, {
          name: "special/progress-pill",
          class: "icon"
        })], 2)
      }
    }
  }),
  Ma = M(Na, [
    ["__scopeId", "data-v-293728e0"]
  ]),
  Da = ["onClick"],
  qa = {
    key: 0,
    class: "icons"
  },
  Ua = ["src"],
  La = {
    class: "title"
  },
  Pa = {
    key: 1,
    class: "points"
  },
  Fa = {
    class: "footer"
  },
  xa = D({
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
      const o = e,
        t = $(() => !o.short),
        a = $(() => o.short ? se.LIGHT : se.DARK),
        s = $(() => {
          var i;
          return o.task.kind === V.GROUP ? ((i = o.task.subTasks) == null ? void 0 : i.map(u => u.iconFileKey)) ?? [] : [o.task.iconFileKey]
        }),
        r = G(e, "claimOverride"),
        l = $(() => {
          if (o.short) return;
          if (o.task.color) return o.task.color;
          const i = ["#B9BBBC", "#BCABA6", "#BAAFC3", "#BEC0CB", "#C3BFB3"];
          return i[o.colorMode % i.length]
        });
      return (i, u) => {
        const v = Ie,
          b = J,
          m = Ma,
          c = Pe,
          k = ie("img-error");
        return d(), A(c, {
          "claim-override": r.value,
          "onUpdate:claimOverride": u[4] || (u[4] = p => r.value = p),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": u[5] || (u[5] = p => i.$emit("open:subtasks-modal"))
        }, {
          default: B(({
            onClick: p,
            startProxy: T,
            title: y,
            progress: S,
            openVerify: w,
            rewardText: f
          }) => [h("div", {
            class: X(["pages-tasks-card", {
              "is-short": e.short
            }]),
            style: dt({
              backgroundColor: n(l)
            }),
            onClick: p
          }, [n(t) ? (d(), C("div", qa, [(d(!0), C(F, null, W(n(s), (g, E) => oe((d(), C("img", {
            key: E,
            src: n(le)(g),
            alt: "Task icon",
            class: "icon",
            width: "48",
            height: "48"
          }, null, 8, Ua)), [
            [k]
          ])), 128))])) : I("", !0), h("div", La, U(y.value), 1), f.value ? (d(), C("div", Pa, U(f.value), 1)) : I("", !0), h("div", Fa, [e.task.status ? (d(), A(v, {
            key: 0,
            "claim-override": r.value,
            "onUpdate:claimOverride": u[0] || (u[0] = g => r.value = g),
            status: e.task.status,
            kind: e.task.kind,
            "start-callback": T,
            "claim-callback": e.claimCallback,
            "is-nested": !1,
            mode: n(a),
            "item-mode": e.itemMode,
            "onUi:claimed": u[1] || (u[1] = g => i.$emit("ui:claimed")),
            "onOpen:subtasksModal": u[2] || (u[2] = g => i.$emit("open:subtasks-modal")),
            "onOpen:verify": w,
            onClick: u[3] || (u[3] = g => i.$emit("pill:click"))
          }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "mode", "item-mode", "onOpen:verify"])) : I("", !0), S.value ? (d(), C(F, {
            key: 1
          }, [S.value.done ? (d(), A(b, {
            key: 0,
            name: "circle-check-white",
            class: "done-icon"
          })) : (d(), A(m, {
            key: 1,
            finished: S.value.finished,
            total: S.value.total,
            label: S.value.label,
            mode: n(a)
          }, null, 8, ["finished", "total", "label", "mode"]))], 64)) : I("", !0)])], 14, Da)]),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  Ka = M(xa, [
    ["__scopeId", "data-v-04302302"]
  ]),
  xe = () => {
    const e = mt("tasks-open-sheet");
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
  Va = {
    key: 1,
    class: "heading"
  },
  Ga = {
    key: 1,
    class: "description"
  },
  Ha = D({
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
      const o = e,
        t = G(e, "modelValue"),
        a = G(e, "tasksClaimOverride"),
        s = $(() => o.task.kind === V.QUEST);
      ne().getReferralToken();
      const r = () => {
          t.value = !1, u.value = !0
        },
        l = () => {
          u.value = !1, t.value = !0
        },
        i = N(o.task.isShared),
        u = N(!1),
        v = $(() => O("earn.quest.share.text")),
        b = $(() => `tasksheet_${btoa(o.task.id)}-ref_${ne().referralToken.value}`);
      return xe().onOpenTaskSheet(o.task, () => {
        t.value = !0
      }), (m, c) => {
        const k = J,
          p = Et,
          T = Fe,
          y = Ie,
          S = _e,
          w = pt;
        return d(), C(F, null, [R(S, {
          modelValue: t.value,
          "onUpdate:modelValue": c[3] || (c[3] = f => t.value = f),
          title: e.title
        }, kt({
          default: B(() => [h("div", {
            class: X(["pages-tasks-subtasks-modal", {
              "has-share": n(i)
            }])
          }, [n(i) ? (d(), C("button", {
            key: 0,
            type: "button",
            class: "reset share-btn",
            onClick: r
          }, [R(k, {
            name: "share",
            class: "icon"
          }), c[5] || (c[5] = h("div", {
            class: "labe"
          }, "Invite and earn up to 8% revshare", -1))])) : I("", !0), e.task.bannerFileKey || e.task.description ? (d(), C("div", Va, [e.task.bannerFileKey ? (d(), A(p, {
            key: 0,
            url: n(le)(e.task.bannerFileKey),
            alt: "Task banner",
            class: "banner"
          }, null, 8, ["url"])) : I("", !0), e.task.description ? (d(), C("div", Ga, U(e.task.description), 1)) : I("", !0)])) : I("", !0), e.task.subTasks ? (d(), A(Se, {
            key: 2,
            tag: "div",
            name: "list-shuffle-transition",
            class: "nested-tasks"
          }, {
            default: B(() => [(d(!0), C(F, null, W(e.task.subTasks, (f, g) => (d(), A(T, {
              key: f.id,
              "claim-override": a.value[f.id],
              "onUpdate:claimOverride": E => a.value[f.id] = E,
              task: f,
              "start-callback": () => e.startSubTaskCallback(f),
              "claim-callback": () => e.claimCallback(f),
              "verify-callback": E => e.verifyCallback(f, E),
              "no-border": g === e.task.subTasks.length - 1,
              "item-mode": n(L).LIST_ITEM,
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
          fn: B(() => [e.task.status && !n(z)(e.task.status, a.value[e.task.id]) ? (d(), A(y, {
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
          modelValue: n(u),
          "onUpdate:modelValue": c[4] || (c[4] = f => re(u) ? u.value = f : null),
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
  Wa = M(Ha, [
    ["__scopeId", "data-v-84322842"]
  ]),
  Ya = D({
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
        default: L.LIST_ITEM
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
      emit: o
    }) {
      const t = e,
        a = o,
        s = G(e, "tasksClaimOverride"),
        r = N(!1),
        l = N(void 0),
        i = $(() => {
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
        u = v => {
          v.isQuest ? r.value = !1 : a("request:update"), a("ui:claimed", v.task)
        };
      return ft(() => {
        l.value && a("mounted", l.value)
      }), ce(() => {
        l.value && a("unmounted", l.value)
      }), (v, b) => {
        const m = Fe,
          c = Ka,
          k = Wa;
        return d(), C("div", {
          ref_key: "taskItemEl",
          ref: l,
          class: "pages-tasks-item"
        }, [e.mode === n(L).LIST_ITEM ? (d(), A(m, {
          key: 0,
          "claim-override": s.value[e.task.id],
          "onUpdate:claimOverride": b[0] || (b[0] = p => s.value[e.task.id] = p),
          task: e.task,
          "quest-details": n(i),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": p => e.verifyCallback(e.task, p),
          "item-mode": e.mode,
          "onUi:claimed": b[1] || (b[1] = p => v.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": b[2] || (b[2] = p => r.value = !0),
          "onPill:click": b[3] || (b[3] = p => v.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "item-mode"])) : e.mode === n(L).SHORT_CARD || e.mode === n(L).CARD ? (d(), A(c, {
          key: 1,
          "claim-override": s.value[e.task.id],
          "onUpdate:claimOverride": b[4] || (b[4] = p => s.value[e.task.id] = p),
          task: e.task,
          "quest-details": n(i),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": p => e.verifyCallback(e.task, p),
          short: e.mode === n(L).SHORT_CARD,
          "color-mode": e.idx,
          "item-mode": e.mode,
          "onUi:claimed": b[5] || (b[5] = p => v.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": b[6] || (b[6] = p => r.value = !0),
          "onPill:click": b[7] || (b[7] = p => v.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "short", "color-mode", "item-mode"])) : I("", !0), n(i) ? (d(), A(k, {
          key: 2,
          modelValue: n(r),
          "onUpdate:modelValue": b[8] || (b[8] = p => re(r) ? r.value = p : null),
          "tasks-claim-override": s.value,
          "onUpdate:tasksClaimOverride": b[9] || (b[9] = p => s.value = p),
          task: e.task,
          title: n(i).modalTitle,
          "start-sub-task-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "item-mode": e.mode,
          "onUi:claimed": b[10] || (b[10] = p => u(p)),
          "onPill:click": b[11] || (b[11] = p => v.$emit("pill:click", p))
        }, null, 8, ["modelValue", "tasks-claim-override", "task", "title", "start-sub-task-callback", "claim-callback", "verify-callback", "item-mode"])) : I("", !0)], 512)
      }
    }
  }),
  Ke = M(Ya, [
    ["__scopeId", "data-v-86f27969"]
  ]),
  Qa = D({
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
      const o = e,
        t = G(e, "tasksClaimOverride"),
        a = qe(),
        s = c => [L.SHORT_CARD, L.CARD].includes(o.taskMode) ? o.tasks.some(p => p.id === c.id) : !1,
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
            subtasks_done: c.subTasks.filter(T => z(T.status, t.value[T.id])).length,
            subtasks_total: c.subTasks.length
          }
        }),
        i = (c, k) => {
          if (!s(c)) return;
          r[c.id] || (r[c.id] = !0);
          const p = l(c, k);
          o.taskMode === L.CARD ? a.earn.earnHighlightsTaskShow(p) : o.taskMode === L.SHORT_CARD && a.earn.earnWeeklyTaskShow(p)
        },
        u = (c, k) => {
          if (!s(c)) return;
          r[c.id] || i(c, k);
          const p = l(c, k);
          o.taskMode === L.CARD ? a.earn.earnHighlightsTaskClick(p) : o.taskMode === L.SHORT_CARD && a.earn.earnWeeklyTaskClick(p)
        },
        v = new IntersectionObserver(c => {
          const k = c[0],
            p = k.target.getAttribute("data-task-id");
          if (!p) return;
          const T = o.tasks.find(f => f.id === p);
          if (!T || !(k.intersectionRatio >= .5)) return;
          const S = T,
            w = o.tasks.indexOf(S);
          i(S, w)
        }, {
          threshold: .5
        }),
        b = (c, k) => {
          s(c) && v.observe(k)
        },
        m = (c, k) => {
          s(c) && v.unobserve(k)
        };
      return ce(() => v.disconnect()), (c, k) => {
        const p = Ke,
          T = ie("horizontal-wheel-scroll");
        return oe((d(), A(Se, {
          tag: "div",
          name: "list-shuffle-transition",
          class: X(["pages-tasks-list", `is-${e.taskMode.toLowerCase()}`])
        }, {
          default: B(() => [(d(!0), C(F, null, W(e.tasks, (y, S) => (d(), A(p, {
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
            "onPill:click": w => u(w, S),
            onMounted: w => b(y, w),
            onUnmounted: w => m(y, w)
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback", "mode", "idx", "data-task-id", "onPill:click", "onMounted", "onUnmounted"]))), 128))]),
          _: 1
        }, 8, ["class"])), [
          [T]
        ])
      }
    }
  }),
  za = M(Qa, [
    ["__scopeId", "data-v-e804420d"]
  ]),
  ja = {
    key: 0,
    class: "pages-tasks-sub-sections"
  },
  Xa = {
    key: 0,
    class: "empty"
  },
  Ja = {
    class: "inner"
  },
  Za = D({
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
      const o = e,
        t = G(e, "tasksClaimOverride"),
        a = $(() => o.subSections.map(i => ({
          value: i.title,
          label: i.title,
          dot: i.tasks.some(u => vt(u, t.value))
        }))),
        s = N((l = a.value[0]) == null ? void 0 : l.value),
        r = $(() => {
          var i;
          return ((i = o.subSections.find(u => u.title === s.value)) == null ? void 0 : i.tasks) ?? []
        });
      return (i, u) => {
        const v = Ot,
          b = J,
          m = Ke;
        return n(r).length ? (d(), C("div", ja, [R(v, {
          modelValue: n(s),
          "onUpdate:modelValue": u[0] || (u[0] = c => re(s) ? s.value = c : null),
          items: n(a)
        }, null, 8, ["modelValue", "items"]), n(r).length ? (d(), A(Se, {
          key: n(s),
          tag: "div",
          name: "list-shuffle-transition",
          class: "tasks-list"
        }, {
          default: B(() => [(d(!0), C(F, null, W(n(r), c => (d(), A(m, {
            key: c.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": u[1] || (u[1] = k => t.value = k),
            task: c,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            "onUi:claimed": u[2] || (u[2] = k => i.$emit("ui:claimed", k)),
            "onRequest:update": u[3] || (u[3] = k => i.$emit("request:update"))
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback"]))), 128))]),
          _: 1
        })) : (d(), C("div", Xa, [h("div", Ja, [R(b, {
          name: "warning-circle-check",
          class: "icon"
        }), u[4] || (u[4] = h("span", {
          class: "label"
        }, " Hooray! You've nailed every task! ", -1))])]))])) : I("", !0)
      }
    }
  }),
  es = M(Za, [
    ["__scopeId", "data-v-2fd71113"]
  ]),
  ts = {
    class: "pages-tasks-section"
  },
  as = D({
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
      const o = e,
        t = $(() => bt(o.section)),
        a = G(e, "tasksClaimOverride"),
        s = l => {
          const i = l.tasks,
            u = k => !Ue(k),
            v = k => Re(k, a.value),
            b = k => {
              const p = k.subTasks ? Re(k.subTasks, a.value) : void 0;
              return {
                ...k,
                subTasks: p
              }
            },
            m = k => {
              const p = k.filter(u);
              return v(p).map(b)
            },
            c = k => k.map(p => ({
              ...p,
              tasks: m(p.tasks)
            }));
          return {
            ...l,
            tasks: m(i),
            subSections: c(l.subSections)
          }
        },
        r = $(() => s(o.section));
      return (l, i) => {
        const u = Pt,
          v = za,
          b = es;
        return d(), C("div", ts, [n(r).title || n(r).description ? (d(), A(u, {
          key: 0,
          title: n(r).title,
          subtitle: n(r).description
        }, null, 8, ["title", "subtitle"])) : I("", !0), n(r).tasks.length ? (d(), A(v, {
          key: 1,
          "tasks-claim-override": a.value,
          "onUpdate:tasksClaimOverride": i[0] || (i[0] = m => a.value = m),
          tasks: n(r).tasks,
          "task-mode": n(t),
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": i[1] || (i[1] = m => l.$emit("ui:claimed", m)),
          "onRequest:update": i[2] || (i[2] = m => l.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "tasks", "task-mode", "start-callback", "claim-callback", "verify-callback"])) : I("", !0), R(b, {
          "tasks-claim-override": a.value,
          "onUpdate:tasksClaimOverride": i[3] || (i[3] = m => a.value = m),
          "sub-sections": n(r).subSections,
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": i[4] || (i[4] = m => l.$emit("ui:claimed", m)),
          "onRequest:update": i[5] || (i[5] = m => l.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "sub-sections", "start-callback", "claim-callback", "verify-callback"])])
      }
    }
  }),
  ss = M(as, [
    ["__scopeId", "data-v-2f6edcc7"]
  ]),
  ns = D({
    __name: "PageSkeleton",
    props: {
      delay: {
        type: Number,
        default: 120
      }
    },
    setup(e) {
      const o = e,
        t = N(!1),
        a = setTimeout(() => t.value = !0, o.delay);
      return ce(() => clearTimeout(a)), (s, r) => n(t) ? ee(s.$slots, "default", {
        key: 0
      }) : I("", !0)
    }
  }),
  is = {},
  os = {
    class: "pages-tasks-skeleton"
  },
  ls = {
    class: "cards"
  },
  rs = {
    class: "subtitle-wrapper"
  },
  cs = {
    class: "short-cards"
  },
  us = {
    class: "subtitle-wrapper"
  },
  ds = {
    class: "list-items"
  };

function ms(e, o) {
  const t = _t,
    a = ns;
  return d(), A(a, null, {
    default: B(() => [h("div", os, [R(t, {
      class: "title"
    }), h("div", ls, [(d(), C(F, null, W(2, s => R(t, {
      key: s,
      class: "item"
    })), 64))]), h("div", rs, [R(t, {
      class: "subtitle"
    })]), h("div", cs, [(d(), C(F, null, W(2, s => R(t, {
      key: s,
      class: "item"
    })), 64))]), h("div", us, [R(t, {
      class: "subtitle"
    })]), h("div", ds, [(d(), C(F, null, W(7, s => h("div", {
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
const ks = M(is, [
    ["render", ms],
    ["__scopeId", "data-v-4fe8da9f"]
  ]),
  ps = {
    class: "tasks-page page"
  },
  fs = {
    class: "header"
  },
  vs = {
    class: "title"
  },
  bs = {
    class: "sections"
  },
  ys = D({
    __name: "tasks",
    setup(e) {
      const o = qe(),
        t = $(() => yt().query.openTaskSheetId),
        a = N(!1),
        s = N(),
        r = N({}),
        i = gt(async () => Ct(await Z.getTasksSections(te().$webApp.dataUnsafe.query.ref)), T => s.value = T, 15e3),
        u = (T, y) => {
          if (s.value)
            for (const S of s.value) {
              const f = [...S.tasks, ...S.tasks.flatMap(g => g.subTasks ?? []), ...S.subSections.flatMap(g => g.tasks ?? [])].filter(g => g.id === T);
              if (f.length) {
                f.forEach(g => {
                  Object.assign(g, y)
                });
                return
              }
            }
        },
        v = async T => {
          const y = await Z.startTask(T.id);
          y.err || u(T.id, y.data)
        }, b = async T => {
          const y = await Z.claimTask(T.id);
          return y.err ? !1 : (u(T.id, y.data), ht().update(), !0)
        }, m = async (T, y) => {
          const S = await Z.verifyTask(T.id, y);
          return S.err ? S.code === 400 ? Q.WRONG_KEYWORD : Q.UNKNOWN_ERROR : (u(T.id, S.data), Q.SUCCESS)
        }, c = T => {
          setTimeout(() => delete r.value[T.id], 3e3), T.reward.value.isZero() || At().success(O("base.you_got_n", {
            value: Ce(T.reward.value),
            currency: T.reward.symbol
          }))
        }, k = $(() => s.value ? s.value.reduce((y, S) => ([...S.tasks, ...S.tasks.flatMap(g => g.subTasks ?? []), ...S.subSections.flatMap(g => g.tasks ?? [])].filter(g => !z(g.status, r.value[g.id]) && !Ue(g) && g.kind !== V.GROUP).map(g => g.id).forEach(g => y.add(g)), y), new Set).size : 0);
      return (async () => {
        o.earn.earnTaskMainPageOpen(), await i.exec()
      })(), be(() => [s.value, t.value], () => {
        if (!s.value || !t.value) return;
        Ae().replace({
          query: {}
        });
        const T = s.value.flatMap(y => y.tasks).find(y => y.id === t.value && [V.QUEST, V.GROUP].includes(y.kind));
        T && Tt(() => xe().openTaskSheet(T))
      }), ce(() => {
        i.destroy()
      }), (T, y) => {
        const S = Mt,
          w = ss,
          f = ks;
        return d(), C("div", ps, [n(a) ? (d(), A(S, {
          key: 0
        })) : n(s) ? (d(), C(F, {
          key: 1
        }, [h("div", fs, [h("span", vs, [pe(U(("t" in T ? T.t : n(O))("earn.title")) + " ", 1), h("sup", null, U(n(k)), 1)])]), h("div", bs, [(d(!0), C(F, null, W(n(s), (g, E) => (d(), A(w, {
          key: E,
          "tasks-claim-override": n(r),
          "onUpdate:tasksClaimOverride": y[0] || (y[0] = q => re(r) ? r.value = q : null),
          section: g,
          "start-callback": v,
          "claim-callback": b,
          "verify-callback": m,
          class: "section",
          "onUi:claimed": y[1] || (y[1] = q => c(q)),
          "onRequest:update": y[2] || (y[2] = q => n(i).exec())
        }, null, 8, ["tasks-claim-override", "section"]))), 128))])], 64)) : (d(), A(f, {
          key: 2
        }))])
      }
    }
  }),
  _s = M(ys, [
    ["__scopeId", "data-v-8d39a879"]
  ]);
export {
  _s as
  default
};