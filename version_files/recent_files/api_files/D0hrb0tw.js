import {
  _ as Ge
} from "./CZpPO4Z5.js";
import {
  f as M,
  o as u,
  N as C,
  e as n,
  X as He,
  C as O,
  a7 as _e,
  d as D,
  c as A,
  t as U,
  G as I,
  j as w,
  cM as P,
  bC as We,
  D as N,
  ag as ee,
  aE as Ye,
  Y as ae,
  x as fe,
  ay as _,
  cN as se,
  az as G,
  cO as K,
  b1 as de,
  R as Ce,
  cP as V,
  cQ as j,
  cR as Y,
  cS as Qe,
  a4 as ve,
  n as X,
  _ as J,
  b2 as ze,
  u as je,
  y as B,
  V as be,
  as as me,
  T as ie,
  w as oe,
  a as T,
  b as R,
  m as pe,
  at as Xe,
  Z as Ne,
  cT as Q,
  cE as ke,
  b7 as le,
  p as re,
  l as Be,
  bt as ne,
  aN as ye,
  a5 as Z,
  ab as Me,
  h as te,
  a6 as Je,
  k as De,
  aX as Ze,
  a3 as ce,
  U as qe,
  H as et,
  bg as tt,
  aG as at,
  cU as z,
  cV as x,
  cW as Oe,
  am as ge,
  bW as st,
  bX as nt,
  F,
  ae as Ae,
  cX as $e,
  cY as it,
  aK as ot,
  cZ as lt,
  a2 as we,
  aq as rt,
  aI as ct,
  aP as ut,
  q as W,
  c_ as dt,
  aJ as mt,
  bc as Se,
  aA as kt,
  ac as pt,
  a9 as Ue,
  c$ as ft,
  d0 as vt,
  d1 as Pe,
  d2 as Re,
  bn as bt,
  a1 as yt,
  cf as gt,
  $ as ht,
  a8 as Tt,
  aa as At
} from "./DmEY5NHF.js";
import {
  _ as Ct
} from "./C8X_FRPo.js";
import {
  _ as St,
  a as It
} from "./BwrKYghg.js";
import {
  a as Ot
} from "./D9Nl8qHj.js";
import {
  _ as Le
} from "./Ky2DfqVd.js";
import {
  _ as $t
} from "./DPGQXQrv.js";
import {
  _ as wt
} from "./CCqriBvA.js";
import {
  B as Rt
} from "./FceQKVhc.js";
import {
  d as he
} from "./Dg5_wOVI.js";
import {
  _ as Et
} from "./iAi7pEQm.js";
import {
  _ as _t
} from "./DpzGlKlS.js";
import "./oP8A2iYc.js";
const Nt = {};

function Bt(e, i) {
  const t = Ge;
  return u(), C(t, {
    icon: ("imgResolver" in e ? e.imgResolver : n(He))("emoji/Construction"),
    title: ("t" in e ? e.t : n(O))("errors.maintenance.title"),
    subtitle: ("t" in e ? e.t : n(O))("errors.maintenance.subtitle"),
    "button-label": ("t" in e ? e.t : n(O))("base.visit_community"),
    onButton: i[0] || (i[0] = a => ("useApp" in e ? e.useApp : n(_e))().openBlumTelegram())
  }, null, 8, ["icon", "title", "subtitle", "button-label"])
}
const Mt = M(Nt, [
    ["render", Bt]
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
  Pt = {
    key: 2,
    class: "pokras-bg"
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
      const i = _e().internal.isPokrasTheme;
      return (t, a) => (u(), A("div", Dt, [e.title ? (u(), A("div", qt, U(e.title), 1)) : I("", !0), e.subtitle ? (u(), A("div", Ut, U(e.subtitle), 1)) : I("", !0), n(i) ? (u(), A("div", Pt)) : I("", !0)]))
    }
  }),
  Ft = M(Lt, [
    ["__scopeId", "data-v-4760ce9b"]
  ]),
  xt = ["disabled"],
  Kt = D({
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
        t = w(() => {
          const s = [P.CARD, P.SHORT_CARD].includes(i.itemMode) ? We.RIGHT : void 0;
          if (i.tooltip === "validation") return {
            text: O("earn.task.verification_indicator_text"),
            alignment: s
          }
        });
      return (a, s) => {
        const r = Ct,
          l = fe;
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
          default: N(() => [ee(a.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["text", "alignment"])) : e.isQuestButton ? (u(), C(l, {
          key: 1,
          class: "tasks-fill-full",
          fill: "",
          size: n(ae).LARGE,
          disabled: e.disabled,
          onClick: s[1] || (s[1] = o => e.onClick && e.onClick(o))
        }, {
          default: N(() => [ee(a.$slots, "default", {}, void 0, !0)]),
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
  Vt = M(Kt, [
    ["__scopeId", "data-v-3aaee1da"]
  ]),
  Gt = {
    key: 0,
    class: "label"
  },
  Ht = D({
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
      emit: i
    }) {
      const t = e,
        a = i,
        s = G(e, "claimOverride"),
        r = w(() => t.status === K.READY_FOR_CLAIM ? de.DARK : t.status === K.STARTED ? t.mode === se.LIGHT ? de.DARK : de.LIGHT : de.DARK),
        l = w(() => {
          const o = !t.reward || t.reward.value.isZero() ? O("base.claim") : O("base.claim_n", {
              val: Ce(t.reward.value),
              currency: t.reward.symbol
            }),
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
          if (t.status === K.NOT_STARTED) return t.kind === V.ONGOING ? d.claimDisabled : t.isQuestButton ? d.questDisabled : j(t.kind) ? d.subtasksModalOpen : {
            label: O("earn.task.buttons.start"),
            cls: "is-status-not-started",
            onClick: () => {
              s.value = Y.STARTED, setTimeout(() => s.value === Y.STARTED && (s.value = void 0), 15e3), t.startCallback(), a("click")
            }
          };
          if (t.status === K.STARTED) return t.kind === V.ONGOING ? d.claimDisabled : t.isQuestButton ? d.questDisabled : j(t.kind) ? d.subtasksModalOpen : s.value === Y.STARTED ? {
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
            label: o,
            cls: "is-status-ready-for-claim",
            onClick: async () => {
              s.value = Y.LOADING, a("click"), await Qe(t.claimCallback, 2e3) ? (s.value = Y.DONE, a("ui:claimed")) : s.value = void 0
            }
          };
          throw ve("Unsupported condition")
        });
      return (o, d) => {
        const v = J,
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
          default: N(() => [n(l).label ? (u(), A("div", Gt, U(n(l).label), 1)) : n(l).icon ? (u(), C(v, {
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
  Ie = M(Ht, [
    ["__scopeId", "data-v-db81a5e6"]
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
  Jt = {
    key: 1,
    class: "pages-tasks-disclaimer details"
  },
  Ee = "community@blum.io",
  Zt = D({
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
        t = G(e, "modelValue"),
        {
          copy: a
        } = je(),
        s = () => a(Ee),
        r = () => ({
          isAgreed: !1,
          state: "general"
        }),
        l = B(r());
      be(t, b => b && (l.value = r()));
      const o = () => {
          l.value.isAgreed = !0, l.value.state = "general"
        },
        d = () => {
          t.value = !1, i.startFn && i.startFn()
        },
        v = w(() => {
          const b = Wt.split(`
`).reduce((m, c) => {
            const k = c.trim();
            if (!k) return m;
            const p = (() => {
              if (k.includes("{{ community_email }}")) {
                const h = k.split("{{ community_email }}");
                return me("p", [h[0], me("span", {
                  class: "as-link",
                  onClick: s
                }, Ee), h[1]])
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
        const c = St,
          k = fe,
          p = Ne,
          h = ie("img-error");
        return u(), C(p, {
          modelValue: t.value,
          "onUpdate:modelValue": m[4] || (m[4] = y => t.value = y),
          title: "",
          "back-icon": n(l).state === "details",
          "content-key": n(l).state,
          onBack: m[5] || (m[5] = y => n(l).state = "general")
        }, {
          title: N(() => [n(l).state === "general" ? (u(), A("span", Yt, [oe(T("img", {
            src: e.iconUrl,
            alt: "Task icon"
          }, null, 8, Qt), [
            [h]
          ]), T("span", null, U(e.productName), 1)])) : I("", !0), n(l).state === "details" ? (u(), A("span", zt, "Disclaimer")) : I("", !0)]),
          default: N(() => [n(l).state === "general" ? (u(), A("div", jt, [m[8] || (m[8] = T("div", {
            class: "text"
          }, [T("p", null, "Nothing in Blum is to be considered as being of promotional nature or aiming at commercial use."), T("p", null, "No material or information which may be made available in Blum shall constitute or be construed as a recommendation, endorsement, offer, invitation or solicitation to enter into any transaction with or purchase any product, or otherwise deal with securities, crypto assets or other products."), T("p", null, "You alone are solely responsible for determining whether any investment, security or any other product or service, is appropriate or suitable for you. You should consult an attorney or tax professional regarding your specific legal or tax situation.")], -1)), T("div", Xt, [R(c, {
            modelValue: n(l).isAgreed,
            "onUpdate:modelValue": m[0] || (m[0] = y => n(l).isAgreed = y)
          }, null, 8, ["modelValue"]), T("span", null, [m[6] || (m[6] = pe("By using Blum, you accept the terms of our ")), T("span", {
            class: "as-link",
            onClick: m[1] || (m[1] = y => n(l).state = "details")
          }, "Disclaimer"), m[7] || (m[7] = pe("."))])])])) : I("", !0), n(l).state === "details" ? (u(), A("div", Jt, [(u(), C(Xe(n(v))))])) : I("", !0)]),
          footer: N(() => [n(l).state === "general" ? (u(), C(k, {
            key: 0,
            label: `Go to ${e.productName}`,
            fill: "",
            size: n(ae).LARGE,
            tertiary: "",
            disabled: !n(l).isAgreed,
            onClick: m[2] || (m[2] = y => d())
          }, null, 8, ["label", "size", "disabled"])) : I("", !0), n(l).state === "details" ? (u(), C(k, {
            key: 1,
            label: "I agree",
            fill: "",
            size: n(ae).LARGE,
            onClick: m[3] || (m[3] = y => o())
          }, null, 8, ["size"])) : I("", !0)]),
          _: 1
        }, 8, ["modelValue", "back-icon", "content-key"])
      }
    }
  }),
  ea = M(Zt, [
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
  ia = D({
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
        s = B(""),
        r = B(),
        l = async () => {
          r.value = void 0, r.value = await t.verifyCallback(s.value), r.value === Q.SUCCESS && a("close")
        };
      be(s, () => {
        r.value !== void 0 && (r.value = void 0)
      });
      const o = w(() => {
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
      return (d, v) => {
        const b = J,
          m = Ot,
          c = fe,
          k = Le,
          p = $t,
          h = ie("img-error");
        return u(), C(p, null, {
          default: N(() => [T("div", ta, [T("div", aa, [oe(T("img", {
            src: n(le)(e.task.iconFileKey),
            alt: "Task icon",
            class: "task-icon"
          }, null, 8, sa), [
            [h]
          ]), T("div", na, U(e.task.title), 1), R(b, {
            name: "external-link",
            class: "link-icon",
            onClick: v[0] || (v[0] = y => d.$emit("doAction"))
          })]), R(m, {
            modelValue: n(s),
            "onUpdate:modelValue": v[1] || (v[1] = y => re(s) ? s.value = y : null),
            placeholder: "Keyword",
            label: "Verification",
            status: n(o).status,
            caption: n(o).caption,
            class: "input"
          }, null, 8, ["modelValue", "status", "caption"]), R(k, {
            "ignore-tabs": ""
          }, {
            default: N(() => [R(c, {
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
  oa = M(ia, [
    ["__scopeId", "data-v-64ea4ace"]
  ]),
  la = "" + new URL("Medium.9CUCDBk_.woff2", import.meta.url).href,
  ra = "" + new URL("Clap.Couz_01b.webp", import.meta.url).href,
  ca = "" + new URL("moon-bg.CTZyPnMM.webp", import.meta.url).href,
  ua = "data:image/webp;base64,UklGRs4AAABXRUJQVlA4WAoAAAAQAAAAfwAAAwAAQUxQSFYAAAABf2CQbaQ7gqvJ+wO+Q0RkvPUAjGLbavMHEShAACIeUrqRLLONlz9RUiRkMJCyoiqI6P8EnH9rTm5aAFDCLttdN30m0szH1XXn4tO2urJRNKMGXKOkWlZQOCBSAAAAcAMAnQEqgAAEAD6RSJ9LpaQioaQIALASCWcAzygMvffVJ3hgAP7x/9//f3h/7mUf/MAWUp3/WP536on+Tf3g6NQjfoODPwhtge3CIKud4qAAAA==",
  da = "data:image/webp;base64,UklGRuAAAABXRUJQVlA4WAoAAAAQAAAAdAAAAgAAQUxQSFgAAAABb2CQbaQzuCIcwvvrvUREZM4XA4xqbZvxG3ZaDBEk4M0gwT9t7URQxSfCq4EIzl/GPBSI6H92ozwkuYSHM8lJpE/X8F9WV9AWm7F2OHm7t3hW5FsDmFIBVlA4IGIAAACwAwCdASp1AAMAPpFAnUslo6KhqBgIALASCWMA0BW/gEwxFE9agAD+8f/f+YJ/9Y/+3nagDHY3P0Z+lXppwDx/w1+Zv9xKP/hvGznerPf/8nJlm/p30HP6B8rBuXNTiAAAAA==",
  ma = () => ({
    generate: async i => {
      const {
        type: t,
        data: a
      } = i;
      switch (t) {
        case "task-joined-at":
          return await ka(a)
      }
    }
  });
async function ka(e) {
  const {
    currentStreakDays: i,
    username: t,
    userCreatedAt: a,
    width: s,
    height: r
  } = e, l = await ga(s, r);
  if (!l) return;
  await fa(l, [{
    type: "bg-image",
    options: {
      src: ca
    }
  }, {
    type: "image",
    options: {
      src: ra,
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
      src: ua,
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
      src: da,
      width: 128,
      height: 3.4
    },
    position: {
      topIndent: 4
    }
  }]);
  const o = Be().public.TELEGRAM_APP_URL,
    d = ne().referralToken.value,
    v = `${o}?startapp=ref_${d}`,
    b = `${O("memepad.tasks.share_stories.text")}
${v}
#IamBlumie #Join #Blum #MiniApp`;
  return {
    canvas: l.canvas,
    share: () => ha({
      canvas: l.canvas,
      text: b,
      name: "Blum"
    })
  }
}

function pa(e, i, t, a) {
  return {
    ctx: e,
    canvas: i,
    height: t,
    width: a,
    topPosition: 0
  }
}
async function fa(e, i) {
  for (const t of i) switch (t.type) {
    case "text":
      va(e, t.options, t.position);
      break;
    case "image":
      await ba(e, t.options, t.position);
      break;
    case "bg-image":
      await ya(e, t.options);
      break;
    default:
      throw ve(`Unknown element type: ${t}`)
  }
}

function va(e, {
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
async function ba(e, {
  src: i,
  width: t,
  height: a
}, s) {
  const r = new Image;
  await new Promise(l => {
    r.onload = l, r.src = i
  }), "topIndent" in s ? (e.topPosition += s.topIndent, e.ctx.drawImage(r, e.width / 2 - t / 2, e.topPosition, t, a), e.topPosition += a) : "bottom" in s && e.ctx.drawImage(r, e.width / 2 - t / 2, e.height - s.bottom, t, a)
}
async function ya(e, {
  src: i
}) {
  const t = new Image;
  await new Promise(a => {
    t.onload = a, t.src = i
  }), e.ctx.drawImage(t, 0, 0, e.width, e.height)
}
async function ga(e, i) {
  const t = document.createElement("canvas"),
    a = t.getContext("2d");
  if (!a) return;
  const s = window.devicePixelRatio || 1,
    r = new FontFace("RoobertPro", `url(${la})`, {
      weight: "500"
    }),
    l = new FontFace("RoobertPro", `url(${Rt})`, {
      weight: "700"
    });
  return await Promise.all([ne().getReferralToken(), document.fonts.ready, r.load(), l.load()]), document.fonts.add(r), document.fonts.add(l), a.clearRect(0, 0, e, i), t.width = e * s, t.height = i * s, a.scale(s, s), a.imageSmoothingEnabled = !0, a.imageSmoothingQuality = "high", t.style.width = e * s + "px", t.style.height = i * s + "px", t.style.scale = `${1/s}`, pa(a, t, i, e)
}
async function ha({
  canvas: e,
  name: i,
  text: t
}) {
  const a = await new Promise(v => e.toBlob(v, "image/png"));
  if (!a) return ye();
  const s = new File([a], "story-image.png", {
      type: "image/png"
    }),
    r = await Z.uploadFile(s, () => {});
  if (!Me(r)) return ye();
  const l = Be().public.TELEGRAM_APP_URL,
    o = r.data.url,
    d = `${l}?startapp=ref_${ne().referralToken.value}`;
  try {
    return te().$webApp.shareToStory(o, {
      text: t,
      widget_link: {
        url: d,
        name: i
      }
    }), Je(void 0)
  } catch {
    return ye()
  }
}
const Ta = {
    class: "pages-tasks-share-story"
  },
  Aa = D({
    __name: "TasksShareStory",
    emits: ["success", "close"],
    setup(e, {
      emit: i
    }) {
      const t = i,
        a = De().getters.getUser,
        s = Ze(),
        r = B({
          type: "loading"
        }),
        l = B(!1),
        o = B(),
        {
          generate: d
        } = ma(),
        v = async () => {
          var $, f;
          const c = ($ = a.value) == null ? void 0 : $.username,
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
            Me(k) && t("success")
          })(), l.value = !1
        }, m = et(v, 50).debouncedFunction;
      return be(() => [s.currentStreakDays.value, o.value, a.value], m, {
        immediate: !0
      }), window.addEventListener("resize", m), ce(() => {
        window.removeEventListener("resize", m)
      }), qe().initHandler(() => t("close"), "tasks-share-story"), (c, k) => {
        const p = wt,
          h = fe,
          y = Le;
        return u(), A("div", Ta, [n(r).type === "loading" ? (u(), C(p, {
          key: 0,
          fixed: ""
        })) : (u(), C(y, {
          key: 1,
          "ignore-tabs": "",
          "no-background": "",
          "hide-space": ""
        }, {
          default: N(() => [R(h, {
            size: n(ae).LARGE,
            fill: "",
            loading: n(l),
            onClick: b
          }, {
            default: N(() => [pe(U(("t" in c ? c.t : n(O))("memepad.tasks.share_stories.button")), 1)]),
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
  Ca = M(Aa, [
    ["__scopeId", "data-v-7593f978"]
  ]),
  Sa = () => {
    const {
      tonConnectUI: e
    } = tt();
    return {
      sendTransaction: async t => {
        const a = he.Address.parse(t.address),
          s = {
            validUntil: Math.floor(Date.now() / 1e3) + 360,
            messages: [{
              address: a.toString(),
              amount: he.toNano(t.amountTON.toString()).toString(),
              payload: (() => {
                if (t.message) return he.beginCell().storeUint(0, 32).storeStringTail(t.message).endCell().toBoc().toString("base64")
              })()
            }]
          };
        return await e.value.sendTransaction(s)
      }
    }
  },
  Fe = D({
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
        s = G(e, "claimOverride"),
        r = Sa(),
        l = at(),
        o = B(!1),
        d = () => {
          o.value = !1, t.task.status === K.NOT_STARTED && t.startCallback()
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
          if (t.task.type === x.INTERNAL && t.task.subType === $e.SHARE_STORIES && (o.value = !0), t.task.type === x.ONCHAIN_TRANSACTION) {
            const f = async () => {
              const g = t.task.onchainTransaction;
              if (t.task.status !== K.NOT_STARTED || !g) return;
              const E = De().getters.mustGetUser.value.id,
                q = `${t.task.id}:${E}`;
              await r.sendTransaction({
                address: g.address,
                amountTON: g.amount,
                message: q
              }).then(t.startCallback).catch()
            };
            l.runConnectionFlow(f)
          }
          t.task.validationType === it.MEMEPAD && Ae().push({
            name: "memepad",
            query: {
              memepadFrom: ot.TASK
            }
          })
        },
        b = () => {
          t.task.status === K.READY_FOR_VERIFY && v();
          const g = z(t.task.status, s.value),
            E = lt(t.task.status),
            q = g || E,
            L = j(t.task.kind);
          q && (L || v(), L && a("open:subtasks-modal"))
        },
        m = w(() => t.task.kind === V.GROUP ? !0 : !t.task.reward.value.isZero()),
        c = w(() => {
          var f;
          if (!m.value) return "";
          if ((t.task.kind === V.QUEST && t.task.reward.value.isZero() || t.task.kind === V.GROUP) && "subTasks" in t.task) {
            if (!((f = t.task.subTasks) != null && f.length)) return "";
            const g = () => ({
                max: new we(0),
                finished: new we(0)
              }),
              E = t.task.subTasks.reduce((q, L) => {
                const H = q.get(L.reward.symbol) ?? g();
                return H.max = H.max.add(L.reward.value), z(L.status, s.value) && (H.finished = H.finished.add(L.reward.value)), q.set(L.reward.symbol, H), q
              }, new Map);
            return Array.from(E.entries()).map(([q, L]) => `${L.finished}/${L.max} ${q}`).join(", ")
          }
          return `+${Ce(t.task.reward.value)} ${t.task.reward.symbol}`
        }),
        k = B(),
        p = B(!1),
        h = () => {
          const f = () => {
            t.task.kind !== V.ONGOING && (j(t.task.kind) || (v(), t.task.type !== x.WALLET_CONNECTION && t.task.type !== x.ONCHAIN_TRANSACTION && (t.task.type === x.INTERNAL && t.task.subType === $e.SHARE_STORIES || t.startCallback())))
          };
          if (t.task.isDisclaimerRequired) {
            k.value = {
              startFn: f
            };
            return
          }
          f()
        },
        y = w(() => {
          if (t.task.type === x.PROGRESS_TARGET) {
            const f = Oe(t.task.progressTarget, "progress target"),
              g = ge(f.target, {
                accuracy: f.accuracy
              });
            return `${t.task.title} ${g}${f.postfix?` ${f.postfix}`:""}`
          }
          return t.task.title
        }),
        S = w(() => {
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
        $ = w(() => ({
          onClick: b,
          rewardText: c,
          startProxy: h,
          title: y,
          progress: S,
          openVerify: () => p.value = !0
        }));
      return qe().initWatcher({
        key: "tasks-item-inner-wrapper",
        watchFn: () => p.value,
        callback: () => p.value = !1
      }), (f, g) => {
        var H;
        const E = ea,
          q = oa,
          L = Ca;
        return u(), A(F, null, [ee(f.$slots, "default", st(nt(n($)))), R(E, {
          "model-value": !!n(k),
          "product-name": e.task.productName,
          "icon-url": n(le)(e.task.iconFileKey),
          "start-fn": (H = n(k)) == null ? void 0 : H.startFn,
          "onUpdate:modelValue": g[0] || (g[0] = ue => ue ? void 0 : k.value = void 0)
        }, null, 8, ["model-value", "product-name", "icon-url", "start-fn"]), n(p) ? (u(), C(q, {
          key: 0,
          task: e.task,
          "verify-callback": e.verifyCallback,
          onDoAction: g[1] || (g[1] = ue => v()),
          onClose: g[2] || (g[2] = ue => p.value = !1)
        }, null, 8, ["task", "verify-callback"])) : I("", !0), n(o) ? (u(), C(L, {
          key: 1,
          onClose: g[3] || (g[3] = ue => o.value = !1),
          onSuccess: d
        })) : I("", !0)], 64)
      }
    }
  }),
  Ia = ["onClick"],
  Oa = ["src"],
  $a = {
    class: "details"
  },
  wa = {
    class: "title"
  },
  Ra = {
    key: 0,
    class: "progress-reward"
  },
  Ea = {
    key: 0,
    class: "progress"
  },
  _a = {
    key: 1,
    class: "reward"
  },
  Na = D({
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
      const i = G(e, "claimOverride");
      return (t, a) => {
        const s = Ie,
          r = Fe,
          l = ie("img-error");
        return u(), C(r, {
          "claim-override": i.value,
          "onUpdate:claimOverride": a[4] || (a[4] = o => i.value = o),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": a[5] || (a[5] = o => t.$emit("open:subtasks-modal"))
        }, {
          default: N(({
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
            }, [oe(T("img", {
              src: n(le)(e.task.iconFileKey),
              alt: "Task icon"
            }, null, 8, Oa), [
              [l]
            ]), T("div", $a, [T("div", wa, U(b.value), 1), m.value || d.value ? (u(), A("div", Ra, [(k = m.value) != null && k.label ? (u(), A("span", Ea, U(`${m.value.label}${m.value.postfix}`) + U(d.value ? ", " : ""), 1)) : I("", !0), d.value ? (u(), A("span", _a, U(d.value), 1)) : I("", !0)])) : I("", !0)]), e.task.status ? (u(), C(s, {
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
            }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "is-nested", "item-mode", "onOpen:verify"])) : I("", !0)], 2)], 16, Ia)]
          }),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  xe = M(Na, [
    ["__scopeId", "data-v-61588e22"]
  ]),
  Ba = {
    class: "label"
  },
  Te = 185.074,
  Ma = D({
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
      ct(a => ({
        b63fb046: Te,
        "0e5a5f8f": n(t)
      }));
      const i = e,
        t = w(() => Te - Te * (i.finished / i.total));
      return (a, s) => {
        const r = J;
        return u(), A("div", {
          class: X(["pages-tasks-progress-pill", `is-${e.mode}`])
        }, [T("span", Ba, U(e.label), 1), R(r, {
          name: "special/progress-pill",
          class: "icon"
        })], 2)
      }
    }
  }),
  Da = M(Ma, [
    ["__scopeId", "data-v-293728e0"]
  ]),
  qa = ["onClick"],
  Ua = {
    key: 0,
    class: "icons"
  },
  Pa = ["src"],
  La = {
    class: "title"
  },
  Fa = {
    key: 1,
    class: "points"
  },
  xa = {
    class: "footer"
  },
  Ka = D({
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
        t = w(() => !i.short),
        a = w(() => i.short ? se.LIGHT : se.DARK),
        s = w(() => {
          var o;
          return i.task.kind === V.GROUP ? ((o = i.task.subTasks) == null ? void 0 : o.map(d => d.iconFileKey)) ?? [] : [i.task.iconFileKey]
        }),
        r = G(e, "claimOverride"),
        l = w(() => {
          if (i.short) return;
          if (i.task.color) return i.task.color;
          const o = ["#B9BBBC", "#BCABA6", "#BAAFC3", "#BEC0CB", "#C3BFB3"];
          return o[i.colorMode % o.length]
        });
      return (o, d) => {
        const v = Ie,
          b = J,
          m = Da,
          c = Fe,
          k = ie("img-error");
        return u(), C(c, {
          "claim-override": r.value,
          "onUpdate:claimOverride": d[4] || (d[4] = p => r.value = p),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": d[5] || (d[5] = p => o.$emit("open:subtasks-modal"))
        }, {
          default: N(({
            onClick: p,
            startProxy: h,
            title: y,
            progress: S,
            openVerify: $,
            rewardText: f
          }) => [T("div", {
            class: X(["pages-tasks-card", {
              "is-short": e.short
            }]),
            style: ut({
              backgroundColor: n(l)
            }),
            onClick: p
          }, [n(t) ? (u(), A("div", Ua, [(u(!0), A(F, null, W(n(s), (g, E) => oe((u(), A("img", {
            key: E,
            src: n(le)(g),
            alt: "Task icon",
            class: "icon",
            width: "48",
            height: "48"
          }, null, 8, Pa)), [
            [k]
          ])), 128))])) : I("", !0), T("div", La, U(y.value), 1), f.value ? (u(), A("div", Fa, U(f.value), 1)) : I("", !0), T("div", xa, [e.task.status ? (u(), C(v, {
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
            "onOpen:verify": $,
            onClick: d[3] || (d[3] = g => o.$emit("pill:click"))
          }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "mode", "item-mode", "onOpen:verify"])) : I("", !0), S.value ? (u(), A(F, {
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
          }, null, 8, ["finished", "total", "label", "mode"]))], 64)) : I("", !0)])], 14, qa)]),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  Va = M(Ka, [
    ["__scopeId", "data-v-04302302"]
  ]),
  Ke = () => {
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
  Ga = {
    key: 1,
    class: "heading"
  },
  Ha = {
    key: 1,
    class: "description"
  },
  Wa = D({
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
        t = G(e, "modelValue"),
        a = G(e, "tasksClaimOverride"),
        s = w(() => i.task.kind === V.QUEST);
      ne().getReferralToken();
      const r = () => {
          t.value = !1, d.value = !0
        },
        l = () => {
          d.value = !1, t.value = !0
        },
        o = B(i.task.isShared),
        d = B(!1),
        v = w(() => O("earn.quest.share.text")),
        b = w(() => `tasksheet_${btoa(i.task.id)}-ref_${ne().referralToken.value}`);
      return Ke().onOpenTaskSheet(i.task, () => {
        t.value = !0
      }), (m, c) => {
        const k = J,
          p = Et,
          h = xe,
          y = Ie,
          S = Ne,
          $ = kt;
        return u(), A(F, null, [R(S, {
          modelValue: t.value,
          "onUpdate:modelValue": c[3] || (c[3] = f => t.value = f),
          title: e.title
        }, mt({
          default: N(() => [T("div", {
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
          }, "Invite and earn up to 8% revshare", -1))])) : I("", !0), e.task.bannerFileKey || e.task.description ? (u(), A("div", Ga, [e.task.bannerFileKey ? (u(), C(p, {
            key: 0,
            url: n(le)(e.task.bannerFileKey),
            alt: "Task banner",
            class: "banner"
          }, null, 8, ["url"])) : I("", !0), e.task.description ? (u(), A("div", Ha, U(e.task.description), 1)) : I("", !0)])) : I("", !0), e.task.subTasks ? (u(), C(Se, {
            key: 2,
            tag: "div",
            name: "list-shuffle-transition",
            class: "nested-tasks"
          }, {
            default: N(() => [(u(!0), A(F, null, W(e.task.subTasks, (f, g) => (u(), C(h, {
              key: f.id,
              "claim-override": a.value[f.id],
              "onUpdate:claimOverride": E => a.value[f.id] = E,
              task: f,
              "start-callback": () => e.startSubTaskCallback(f),
              "claim-callback": () => e.claimCallback(f),
              "verify-callback": E => e.verifyCallback(f, E),
              "no-border": g === e.task.subTasks.length - 1,
              "item-mode": n(P).LIST_ITEM,
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
          fn: N(() => [e.task.status && !n(z)(e.task.status, a.value[e.task.id]) ? (u(), C(y, {
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
        } : void 0]), 1032, ["modelValue", "title"]), R($, {
          modelValue: n(d),
          "onUpdate:modelValue": c[4] || (c[4] = f => re(d) ? d.value = f : null),
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
  Ya = M(Wa, [
    ["__scopeId", "data-v-84322842"]
  ]),
  Qa = D({
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
        default: P.LIST_ITEM
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
        s = G(e, "tasksClaimOverride"),
        r = B(!1),
        l = B(void 0),
        o = w(() => {
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
      }), ce(() => {
        l.value && a("unmounted", l.value)
      }), (v, b) => {
        const m = xe,
          c = Va,
          k = Ya;
        return u(), A("div", {
          ref_key: "taskItemEl",
          ref: l,
          class: "pages-tasks-item"
        }, [e.mode === n(P).LIST_ITEM ? (u(), C(m, {
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
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "item-mode"])) : e.mode === n(P).SHORT_CARD || e.mode === n(P).CARD ? (u(), C(c, {
          key: 1,
          "claim-override": s.value[e.task.id],
          "onUpdate:claimOverride": b[4] || (b[4] = p => s.value[e.task.id] = p),
          task: e.task,
          "quest-details": n(o),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": p => e.verifyCallback(e.task, p),
          short: e.mode === n(P).SHORT_CARD,
          "color-mode": e.idx,
          "item-mode": e.mode,
          "onUi:claimed": b[5] || (b[5] = p => v.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": b[6] || (b[6] = p => r.value = !0),
          "onPill:click": b[7] || (b[7] = p => v.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "short", "color-mode", "item-mode"])) : I("", !0), n(o) ? (u(), C(k, {
          key: 2,
          modelValue: n(r),
          "onUpdate:modelValue": b[8] || (b[8] = p => re(r) ? r.value = p : null),
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
  Ve = M(Qa, [
    ["__scopeId", "data-v-86f27969"]
  ]),
  za = D({
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
        t = G(e, "tasksClaimOverride"),
        a = Ue(),
        s = c => [P.SHORT_CARD, P.CARD].includes(i.taskMode) ? i.tasks.some(p => p.id === c.id) : !1,
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
          i.taskMode === P.CARD ? a.earn.earnHighlightsTaskShow(p) : i.taskMode === P.SHORT_CARD && a.earn.earnWeeklyTaskShow(p)
        },
        d = (c, k) => {
          if (!s(c)) return;
          r[c.id] || o(c, k);
          const p = l(c, k);
          i.taskMode === P.CARD ? a.earn.earnHighlightsTaskClick(p) : i.taskMode === P.SHORT_CARD && a.earn.earnWeeklyTaskClick(p)
        },
        v = new IntersectionObserver(c => {
          const k = c[0],
            p = k.target.getAttribute("data-task-id");
          if (!p) return;
          const h = i.tasks.find(f => f.id === p);
          if (!h || !(k.intersectionRatio >= .5)) return;
          const S = h,
            $ = i.tasks.indexOf(S);
          o(S, $)
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
        const p = Ve,
          h = ie("horizontal-wheel-scroll");
        return oe((u(), C(Se, {
          tag: "div",
          name: "list-shuffle-transition",
          class: X(["pages-tasks-list", `is-${e.taskMode.toLowerCase()}`])
        }, {
          default: N(() => [(u(!0), A(F, null, W(e.tasks, (y, S) => (u(), C(p, {
            key: y.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": k[0] || (k[0] = $ => t.value = $),
            task: y,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            mode: e.taskMode,
            idx: S,
            class: "item",
            "data-task-id": y.id,
            "onUi:claimed": k[1] || (k[1] = $ => c.$emit("ui:claimed", $)),
            "onRequest:update": k[2] || (k[2] = $ => c.$emit("request:update")),
            "onPill:click": $ => d($, S),
            onMounted: $ => b(y, $),
            onUnmounted: $ => m(y, $)
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback", "mode", "idx", "data-task-id", "onPill:click", "onMounted", "onUnmounted"]))), 128))]),
          _: 1
        }, 8, ["class"])), [
          [h]
        ])
      }
    }
  }),
  ja = M(za, [
    ["__scopeId", "data-v-e804420d"]
  ]),
  Xa = {
    key: 0,
    class: "pages-tasks-sub-sections"
  },
  Ja = {
    key: 0,
    class: "empty"
  },
  Za = {
    class: "inner"
  },
  es = D({
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
        t = G(e, "tasksClaimOverride"),
        a = w(() => i.subSections.map(o => ({
          value: o.title,
          label: o.title,
          dot: o.tasks.some(d => ft(d, t.value))
        }))),
        s = B((l = a.value[0]) == null ? void 0 : l.value),
        r = w(() => {
          var o;
          return ((o = i.subSections.find(d => d.title === s.value)) == null ? void 0 : o.tasks) ?? []
        });
      return (o, d) => {
        const v = It,
          b = J,
          m = Ve;
        return n(r).length ? (u(), A("div", Xa, [R(v, {
          modelValue: n(s),
          "onUpdate:modelValue": d[0] || (d[0] = c => re(s) ? s.value = c : null),
          items: n(a)
        }, null, 8, ["modelValue", "items"]), n(r).length ? (u(), C(Se, {
          key: n(s),
          tag: "div",
          name: "list-shuffle-transition",
          class: "tasks-list"
        }, {
          default: N(() => [(u(!0), A(F, null, W(n(r), c => (u(), C(m, {
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
        })) : (u(), A("div", Ja, [T("div", Za, [R(b, {
          name: "warning-circle-check",
          class: "icon"
        }), d[4] || (d[4] = T("span", {
          class: "label"
        }, " Hooray! You've nailed every task! ", -1))])]))])) : I("", !0)
      }
    }
  }),
  ts = M(es, [
    ["__scopeId", "data-v-2fd71113"]
  ]),
  as = {
    class: "pages-tasks-section"
  },
  ss = D({
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
        t = w(() => vt(i.section)),
        a = G(e, "tasksClaimOverride"),
        s = l => {
          const o = l.tasks,
            d = k => !Pe(k),
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
        r = w(() => s(i.section));
      return (l, o) => {
        const d = Ft,
          v = ja,
          b = ts;
        return u(), A("div", as, [n(r).title || n(r).description ? (u(), C(d, {
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
  ns = M(ss, [
    ["__scopeId", "data-v-2f6edcc7"]
  ]),
  is = D({
    __name: "PageSkeleton",
    props: {
      delay: {
        type: Number,
        default: 120
      }
    },
    setup(e) {
      const i = e,
        t = B(!1),
        a = setTimeout(() => t.value = !0, i.delay);
      return ce(() => clearTimeout(a)), (s, r) => n(t) ? ee(s.$slots, "default", {
        key: 0
      }) : I("", !0)
    }
  }),
  os = {},
  ls = {
    class: "pages-tasks-skeleton"
  },
  rs = {
    class: "cards"
  },
  cs = {
    class: "subtitle-wrapper"
  },
  us = {
    class: "short-cards"
  },
  ds = {
    class: "subtitle-wrapper"
  },
  ms = {
    class: "list-items"
  };

function ks(e, i) {
  const t = _t,
    a = is;
  return u(), C(a, null, {
    default: N(() => [T("div", ls, [R(t, {
      class: "title"
    }), T("div", rs, [(u(), A(F, null, W(2, s => R(t, {
      key: s,
      class: "item"
    })), 64))]), T("div", cs, [R(t, {
      class: "subtitle"
    })]), T("div", us, [(u(), A(F, null, W(2, s => R(t, {
      key: s,
      class: "item"
    })), 64))]), T("div", ds, [R(t, {
      class: "subtitle"
    })]), T("div", ms, [(u(), A(F, null, W(7, s => T("div", {
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
const ps = M(os, [
    ["render", ks],
    ["__scopeId", "data-v-4fe8da9f"]
  ]),
  fs = {
    class: "tasks-page page"
  },
  vs = {
    class: "header"
  },
  bs = {
    class: "title"
  },
  ys = {
    class: "sections"
  },
  gs = D({
    __name: "tasks",
    setup(e) {
      const i = Ue(),
        t = w(() => bt().query.openTaskSheetId),
        a = B(!1),
        s = B(),
        r = B({}),
        o = yt(async () => At(await Z.getTasksSections(te().$webApp.dataUnsafe.query.ref)), h => s.value = h, 15e3),
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
          const y = await Z.startTask(h.id);
          y.err || d(h.id, y.data)
        }, b = async h => {
          const y = await Z.claimTask(h.id);
          return y.err ? !1 : (d(h.id, y.data), ht().update(), !0)
        }, m = async (h, y) => {
          const S = await Z.verifyTask(h.id, y);
          return S.err ? S.code === 400 ? Q.WRONG_KEYWORD : Q.UNKNOWN_ERROR : (d(h.id, S.data), Q.SUCCESS)
        }, c = h => {
          setTimeout(() => delete r.value[h.id], 3e3), h.reward.value.isZero() || Tt().success(O("base.you_got_n", {
            value: Ce(h.reward.value),
            currency: h.reward.symbol
          }))
        }, k = w(() => s.value ? s.value.reduce((y, S) => ([...S.tasks, ...S.tasks.flatMap(g => g.subTasks ?? []), ...S.subSections.flatMap(g => g.tasks ?? [])].filter(g => !z(g.status, r.value[g.id]) && !Pe(g) && g.kind !== V.GROUP).map(g => g.id).forEach(g => y.add(g)), y), new Set).size : 0);
      return (async () => {
        i.earn.earnTaskMainPageOpen(), await o.exec()
      })(), be(() => [s.value, t.value], () => {
        if (!s.value || !t.value) return;
        Ae().replace({
          query: {}
        });
        const h = s.value.flatMap(y => y.tasks).find(y => y.id === t.value && [V.QUEST, V.GROUP].includes(y.kind));
        h && gt(() => Ke().openTaskSheet(h))
      }), ce(() => {
        o.destroy()
      }), (h, y) => {
        const S = Mt,
          $ = ns,
          f = ps;
        return u(), A("div", fs, [n(a) ? (u(), C(S, {
          key: 0
        })) : n(s) ? (u(), A(F, {
          key: 1
        }, [T("div", vs, [T("span", bs, [pe(U(("t" in h ? h.t : n(O))("earn.title")) + " ", 1), T("sup", null, U(n(k)), 1)])]), T("div", ys, [(u(!0), A(F, null, W(n(s), (g, E) => (u(), C($, {
          key: E,
          "tasks-claim-override": n(r),
          "onUpdate:tasksClaimOverride": y[0] || (y[0] = q => re(r) ? r.value = q : null),
          section: g,
          "start-callback": v,
          "claim-callback": b,
          "verify-callback": m,
          class: "section",
          "onUi:claimed": y[1] || (y[1] = q => c(q)),
          "onRequest:update": y[2] || (y[2] = q => n(o).exec())
        }, null, 8, ["tasks-claim-override", "section"]))), 128))])], 64)) : (u(), C(f, {
          key: 2
        }))])
      }
    }
  }),
  Bs = M(gs, [
    ["__scopeId", "data-v-8d39a879"]
  ]);
export {
  Bs as
  default
};