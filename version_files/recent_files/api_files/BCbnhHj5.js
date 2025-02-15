import {
  _ as Ve
} from "./Bigw-5eS.js";
import {
  d as M,
  o as d,
  G as S,
  e as n,
  am as Ge,
  h as z,
  f as U,
  Y as He,
  c as C,
  t as P,
  D as I,
  j as R,
  ci as L,
  bm as We,
  z as _,
  H as B,
  bl as te,
  aA as Ye,
  U as se,
  x as be,
  an as N,
  cj as ne,
  ao as H,
  ck as V,
  a_ as me,
  M as ae,
  cl as G,
  cm as X,
  cn as Y,
  co as Qe,
  V as ye,
  n as J,
  _ as Z,
  a$ as ze,
  u as je,
  K as D,
  aF as ge,
  ag as ke,
  N as oe,
  w as le,
  a as A,
  b as E,
  m as ve,
  ah as Xe,
  aN as Ee,
  cp as Q,
  cf as pe,
  aT as re,
  p as ce,
  l as Ne,
  bd as ie,
  aw as Te,
  W as ee,
  a1 as Be,
  X as Je,
  k as De,
  aH as Ze,
  T as ue,
  O as Me,
  ab as et,
  b2 as tt,
  ar as at,
  R as fe,
  cq as j,
  cr as F,
  cs as $e,
  a7 as he,
  bC as st,
  bD as nt,
  F as K,
  ac as Se,
  ct as Ie,
  cu as it,
  at as ot,
  cv as lt,
  ae as rt,
  az as ct,
  ax as ut,
  q as W,
  cw as dt,
  bW as mt,
  aY as Oe,
  ap as kt,
  a8 as pt,
  $ as Ue,
  cx as ft,
  cy as vt,
  cz as qe,
  cA as Re,
  b7 as bt,
  Q as yt,
  bR as gt,
  P as Tt,
  Z as ht,
  a0 as At
} from "./CagiCBnQ.js";
import {
  _ as Ct
} from "./DahQ8Jpv.js";
import {
  _ as St,
  a as It
} from "./d1hiRaMj.js";
import {
  a as Ot
} from "./DD-3--5Z.js";
import {
  _ as Pe
} from "./CXAe61mn.js";
import {
  _ as wt
} from "./Be8M9-rU.js";
import {
  _ as $t
} from "./DeyXBG9Y.js";
import {
  d as Ae
} from "./D3CHpFsf.js";
import {
  _ as Rt
} from "./9kx13Psg.js";
import {
  _ as _t
} from "./z_uMznOC.js";
const Et = M({
    __name: "TasksMaintenance",
    setup(e) {
      const l = () => z().$webApp.openTelegramLink("https://t.me/BlumCrypto");
      return (t, a) => {
        const s = Ve;
        return d(), S(s, {
          icon: ("imgResolver" in t ? t.imgResolver : n(Ge))("emoji/Construction"),
          title: "Maintenance",
          subtitle: "We’re sprucing things up on Blum to bring you an even better experience. Hang tight, we’ll be back before you know it!",
          "button-label": "Visit community",
          onButton: a[0] || (a[0] = u => l())
        }, null, 8, ["icon"])
      }
    }
  }),
  Nt = U(Et, [
    ["__scopeId", "data-v-dba006cd"]
  ]),
  Bt = {
    class: "pages-tasks-head"
  },
  Dt = {
    key: 0,
    class: "title"
  },
  Mt = {
    key: 1,
    class: "subtitle"
  },
  Ut = {
    key: 2,
    class: "pokras-bg"
  },
  qt = M({
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
      const l = He().internal.isPokrasTheme;
      return (t, a) => (d(), C("div", Bt, [e.title ? (d(), C("div", Dt, P(e.title), 1)) : I("", !0), e.subtitle ? (d(), C("div", Mt, P(e.subtitle), 1)) : I("", !0), n(l) ? (d(), C("div", Ut)) : I("", !0)]))
    }
  }),
  Pt = U(qt, [
    ["__scopeId", "data-v-4760ce9b"]
  ]),
  Lt = ["disabled"],
  xt = M({
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
      const l = e,
        t = R(() => {
          const s = [L.CARD, L.SHORT_CARD].includes(l.itemMode) ? We.RIGHT : void 0;
          if (l.tooltip === "validation") return {
            text: _("earn.task.verification_indicator_text"),
            alignment: s
          }
        });
      return (a, s) => {
        const u = Ct,
          i = be;
        return n(t) ? (d(), S(u, {
          key: 0,
          class: "tasks-pill-inline",
          fill: "",
          text: n(t).text,
          alignment: n(t).alignment,
          "text-alignment": "left",
          "text-min-width": 130,
          onClick: s[0] || (s[0] = Ye(() => {}, ["stop"]))
        }, {
          default: B(() => [te(a.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["text", "alignment"])) : e.isQuestButton ? (d(), S(i, {
          key: 1,
          class: "tasks-fill-full",
          fill: "",
          size: n(se).LARGE,
          disabled: e.disabled,
          onClick: s[1] || (s[1] = o => e.onClick && e.onClick(o))
        }, {
          default: B(() => [te(a.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["size", "disabled"])) : (d(), C("button", {
          key: 2,
          class: "tasks-pill-inline",
          disabled: e.disabled,
          onClick: s[2] || (s[2] = o => e.onClick && e.onClick(o))
        }, [te(a.$slots, "default", {}, void 0, !0)], 8, Lt))
      }
    }
  }),
  Ft = U(xt, [
    ["__scopeId", "data-v-3aaee1da"]
  ]),
  Kt = {
    key: 0,
    class: "label"
  },
  Vt = M({
    __name: "TasksPill",
    props: N({
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
    emits: N(["ui:claimed", "open:subtasks-modal", "open:verify", "click"], ["update:claimOverride"]),
    setup(e, {
      emit: l
    }) {
      const t = e,
        a = l,
        s = H(e, "claimOverride"),
        u = R(() => t.status === V.READY_FOR_CLAIM ? me.DARK : t.status === V.STARTED ? t.mode === ne.LIGHT ? me.DARK : me.LIGHT : me.DARK),
        i = R(() => {
          const o = t.reward && !t.reward.isZero() ? _("base.claim_bp", {
              bp: ae(t.reward)
            }) : _("base.claim"),
            f = {
              claimDisabled: {
                label: _("base.claim"),
                cls: "is-disabled",
                disabled: !0
              },
              subtasksModalOpen: {
                label: _("earn.task.buttons.open"),
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
          if (t.status === V.NOT_STARTED) return t.kind === G.ONGOING ? f.claimDisabled : t.isQuestButton ? f.questDisabled : X(t.kind) ? f.subtasksModalOpen : {
            label: _("earn.task.buttons.start"),
            cls: "is-status-not-started",
            onClick: () => {
              s.value = Y.STARTED, setTimeout(() => s.value === Y.STARTED && (s.value = void 0), 15e3), t.startCallback(), a("click")
            }
          };
          if (t.status === V.STARTED) return t.kind === G.ONGOING ? f.claimDisabled : t.isQuestButton ? f.questDisabled : X(t.kind) ? f.subtasksModalOpen : s.value === Y.STARTED ? {
            loader: !0,
            cls: "is-status-started"
          } : {
            icon: "clock",
            cls: "is-status-started",
            tooltip: "validation"
          };
          if (t.status === V.READY_FOR_VERIFY) return {
            label: _("earn.task.buttons.verify"),
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
          if (t.status === V.FINISHED) return {
            icon: "circle-check-white",
            cls: "is-status-finished"
          };
          if (t.status === V.READY_FOR_CLAIM) return {
            label: o,
            cls: "is-status-ready-for-claim",
            onClick: async () => {
              s.value = Y.LOADING, a("click"), await Qe(t.claimCallback, 2e3) ? (s.value = Y.DONE, a("ui:claimed")) : s.value = void 0
            }
          };
          throw ye("Unsupported condition")
        });
      return (o, f) => {
        const v = Z,
          b = ze,
          m = Ft;
        return d(), S(m, {
          "on-click": n(i).onClick,
          class: J([
            [n(i).cls, `is-${e.mode}`, {
              "is-quest": e.isQuestButton,
              "is-nested": e.isNested
            }], "pages-tasks-pill"
          ]),
          "is-quest-button": e.isQuestButton,
          disabled: n(i).disabled,
          tooltip: n(i).tooltip,
          "item-mode": e.itemMode
        }, {
          default: B(() => [n(i).label ? (d(), C("div", Kt, P(n(i).label), 1)) : n(i).icon ? (d(), S(v, {
            key: 1,
            name: n(i).icon,
            class: "icon"
          }, null, 8, ["name"])) : n(i).loader ? (d(), S(b, {
            key: 2,
            size: 16,
            type: n(u)
          }, null, 8, ["type"])) : I("", !0)]),
          _: 1
        }, 8, ["on-click", "class", "is-quest-button", "disabled", "tooltip", "item-mode"])
      }
    }
  }),
  we = U(Vt, [
    ["__scopeId", "data-v-49254788"]
  ]),
  Gt = `PREAMBLE
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
  Ht = {
    key: 0,
    class: "pages-tasks-disclaimer-title"
  },
  Wt = ["src"],
  Yt = {
    key: 1,
    class: "pages-tasks-disclaimer-title"
  },
  Qt = {
    key: 0,
    class: "pages-tasks-disclaimer general"
  },
  zt = {
    class: "checkbox"
  },
  jt = {
    key: 1,
    class: "pages-tasks-disclaimer details"
  },
  _e = "community@blum.io",
  Xt = M({
    __name: "TasksDisclaimer",
    props: N({
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
      const l = e,
        t = H(e, "modelValue"),
        {
          copy: a
        } = je(),
        s = () => a(_e),
        u = () => ({
          isAgreed: !1,
          state: "general"
        }),
        i = D(u());
      ge(t, b => b && (i.value = u()));
      const o = () => {
          i.value.isAgreed = !0, i.value.state = "general"
        },
        f = () => {
          t.value = !1, l.startFn && l.startFn()
        },
        v = R(() => {
          const b = Gt.split(`
`).reduce((m, c) => {
            const k = c.trim();
            if (!k) return m;
            const p = (() => {
              if (k.includes("{{ community_email }}")) {
                const w = k.split("{{ community_email }}");
                return ke("p", [w[0], ke("span", {
                  class: "as-link",
                  onClick: s
                }, _e), w[1]])
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
        const c = St,
          k = be,
          p = Ee,
          w = oe("img-error");
        return d(), S(p, {
          modelValue: t.value,
          "onUpdate:modelValue": m[4] || (m[4] = O => t.value = O),
          title: "",
          "back-icon": n(i).state === "details",
          "content-key": n(i).state,
          onBack: m[5] || (m[5] = O => n(i).state = "general")
        }, {
          title: B(() => [n(i).state === "general" ? (d(), C("span", Ht, [le(A("img", {
            src: e.iconUrl,
            alt: "Task icon"
          }, null, 8, Wt), [
            [w]
          ]), A("span", null, P(e.productName), 1)])) : I("", !0), n(i).state === "details" ? (d(), C("span", Yt, "Disclaimer")) : I("", !0)]),
          default: B(() => [n(i).state === "general" ? (d(), C("div", Qt, [m[8] || (m[8] = A("div", {
            class: "text"
          }, [A("p", null, "Nothing in Blum is to be considered as being of promotional nature or aiming at commercial use."), A("p", null, "No material or information which may be made available in Blum shall constitute or be construed as a recommendation, endorsement, offer, invitation or solicitation to enter into any transaction with or purchase any product, or otherwise deal with securities, crypto assets or other products."), A("p", null, "You alone are solely responsible for determining whether any investment, security or any other product or service, is appropriate or suitable for you. You should consult an attorney or tax professional regarding your specific legal or tax situation.")], -1)), A("div", zt, [E(c, {
            modelValue: n(i).isAgreed,
            "onUpdate:modelValue": m[0] || (m[0] = O => n(i).isAgreed = O)
          }, null, 8, ["modelValue"]), A("span", null, [m[6] || (m[6] = ve("By using Blum, you accept the terms of our ")), A("span", {
            class: "as-link",
            onClick: m[1] || (m[1] = O => n(i).state = "details")
          }, "Disclaimer"), m[7] || (m[7] = ve("."))])])])) : I("", !0), n(i).state === "details" ? (d(), C("div", jt, [(d(), S(Xe(n(v))))])) : I("", !0)]),
          footer: B(() => [n(i).state === "general" ? (d(), S(k, {
            key: 0,
            label: `Go to ${e.productName}`,
            fill: "",
            size: n(se).LARGE,
            tertiary: "",
            disabled: !n(i).isAgreed,
            onClick: m[2] || (m[2] = O => f())
          }, null, 8, ["label", "size", "disabled"])) : I("", !0), n(i).state === "details" ? (d(), S(k, {
            key: 1,
            label: "I agree",
            fill: "",
            size: n(se).LARGE,
            onClick: m[3] || (m[3] = O => o())
          }, null, 8, ["size"])) : I("", !0)]),
          _: 1
        }, 8, ["modelValue", "back-icon", "content-key"])
      }
    }
  }),
  Jt = U(Xt, [
    ["__scopeId", "data-v-845ec11f"]
  ]),
  Zt = {
    class: "pages-tasks-verify"
  },
  ea = {
    class: "heading"
  },
  ta = ["src"],
  aa = {
    class: "title"
  },
  sa = M({
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
      emit: l
    }) {
      const t = e,
        a = l,
        s = D(""),
        u = D(),
        i = async () => {
          u.value = void 0, u.value = await t.verifyCallback(s.value), u.value === Q.SUCCESS && a("close")
        };
      ge(s, () => {
        u.value !== void 0 && (u.value = void 0)
      });
      const o = R(() => {
        switch (u.value) {
          case void 0:
            return {
              status: pe.REGULAR, caption: _("earn.verify_input.caption.default")
            };
          case Q.UNKNOWN_ERROR:
            return {
              status: pe.ERROR, caption: _("earn.verify_input.caption.unknown_error")
            };
          case Q.WRONG_KEYWORD:
            return {
              status: pe.ERROR, caption: _("earn.verify_input.caption.wrong_keyword")
            };
          case Q.SUCCESS:
            return {
              status: pe.REGULAR
            };
          default:
            throw u.value, ye("Invalid status")
        }
      });
      return (f, v) => {
        const b = Z,
          m = Ot,
          c = be,
          k = Pe,
          p = wt,
          w = oe("img-error");
        return d(), S(p, null, {
          default: B(() => [A("div", Zt, [A("div", ea, [le(A("img", {
            src: n(re)(e.task.iconFileKey),
            alt: "Task icon",
            class: "task-icon"
          }, null, 8, ta), [
            [w]
          ]), A("div", aa, P(e.task.title), 1), E(b, {
            name: "external-link",
            class: "link-icon",
            onClick: v[0] || (v[0] = O => f.$emit("doAction"))
          })]), E(m, {
            modelValue: n(s),
            "onUpdate:modelValue": v[1] || (v[1] = O => ce(s) ? s.value = O : null),
            placeholder: "Keyword",
            label: "Verification",
            status: n(o).status,
            caption: n(o).caption,
            class: "input"
          }, null, 8, ["modelValue", "status", "caption"]), E(k, {
            "ignore-tabs": ""
          }, {
            default: B(() => [E(c, {
              label: "Verify",
              fill: "",
              size: n(se).LARGE,
              onClick: v[2] || (v[2] = O => i())
            }, null, 8, ["size"])]),
            _: 1
          })])]),
          _: 1
        })
      }
    }
  }),
  na = U(sa, [
    ["__scopeId", "data-v-64ea4ace"]
  ]),
  ia = "" + new URL("Bold.vYYfUnV7.woff2", import.meta.url).href,
  oa = "" + new URL("Medium.9CUCDBk_.woff2", import.meta.url).href,
  la = "" + new URL("Clap.Couz_01b.webp", import.meta.url).href,
  ra = "" + new URL("moon-bg.CTZyPnMM.webp", import.meta.url).href,
  ca = "data:image/webp;base64,UklGRs4AAABXRUJQVlA4WAoAAAAQAAAAfwAAAwAAQUxQSFYAAAABf2CQbaQ7gqvJ+wO+Q0RkvPUAjGLbavMHEShAACIeUrqRLLONlz9RUiRkMJCyoiqI6P8EnH9rTm5aAFDCLttdN30m0szH1XXn4tO2urJRNKMGXKOkWlZQOCBSAAAAcAMAnQEqgAAEAD6RSJ9LpaQioaQIALASCWcAzygMvffVJ3hgAP7x/9//f3h/7mUf/MAWUp3/WP536on+Tf3g6NQjfoODPwhtge3CIKud4qAAAA==",
  ua = "data:image/webp;base64,UklGRuAAAABXRUJQVlA4WAoAAAAQAAAAdAAAAgAAQUxQSFgAAAABb2CQbaQzuCIcwvvrvUREZM4XA4xqbZvxG3ZaDBEk4M0gwT9t7URQxSfCq4EIzl/GPBSI6H92ozwkuYSHM8lJpE/X8F9WV9AWm7F2OHm7t3hW5FsDmFIBVlA4IGIAAACwAwCdASp1AAMAPpFAnUslo6KhqBgIALASCWMA0BW/gEwxFE9agAD+8f/f+YJ/9Y/+3nagDHY3P0Z+lXppwDx/w1+Zv9xKP/hvGznerPf/8nJlm/p30HP6B8rBuXNTiAAAAA==",
  da = () => ({
    generate: async l => {
      const {
        type: t,
        data: a
      } = l;
      switch (t) {
        case "task-joined-at":
          return await ma(a)
      }
    }
  });
async function ma(e) {
  const {
    currentStreakDays: l,
    username: t,
    userCreatedAt: a,
    width: s,
    height: u
  } = e, i = await ya(s, u);
  if (!i) return;
  await pa(i, [{
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
      text: [_("memepad.tasks.share_stories.title.1", {
        username: t
      }), _("memepad.tasks.share_stories.title.2"), _("memepad.tasks.share_stories.title.3")],
      style: "heading-large",
      color: "white"
    },
    position: {
      topIndent: 24
    }
  }, {
    type: "text",
    options: {
      text: _("memepad.tasks.share_stories.joined", {
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
      text: [_("memepad.tasks.share_stories.check_ins.1"), _("memepad.tasks.share_stories.check_ins.2", {
        count: l
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
  const o = Ne().public.TELEGRAM_APP_URL,
    f = ie().referralToken.value,
    v = `${o}?startapp=ref_${f}`,
    b = `${_("memepad.tasks.share_stories.text")}
${v}
#IamBlumie #Join #Blum #MiniApp`;
  return {
    canvas: i.canvas,
    share: () => ga({
      canvas: i.canvas,
      text: b,
      name: "Blum"
    })
  }
}

function ka(e, l, t, a) {
  return {
    ctx: e,
    canvas: l,
    height: t,
    width: a,
    topPosition: 0
  }
}
async function pa(e, l) {
  for (const t of l) switch (t.type) {
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
      throw ye(`Unknown element type: ${t}`)
  }
}

function fa(e, {
  text: l,
  style: t,
  color: a,
  textBaseline: s = "top",
  textAlign: u = "center"
}, i) {
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
  e.ctx.font = o.font, e.ctx.fillStyle = a, e.ctx.textBaseline = s, e.ctx.textAlign = u;
  const f = Array.isArray(l) ? l : [l];
  if ("topIndent" in i) {
    e.topPosition += i.topIndent;
    for (const v of f) e.ctx.fillText(v, e.width / 2, e.topPosition), e.topPosition += o.lineHeight
  } else if ("bottom" in i) {
    let v = e.height - i.bottom;
    for (const b of f.reverse()) e.ctx.fillText(b, e.width / 2, v), v -= o.lineHeight
  }
}
async function va(e, {
  src: l,
  width: t,
  height: a
}, s) {
  const u = new Image;
  await new Promise(i => {
    u.onload = i, u.src = l
  }), "topIndent" in s ? (e.topPosition += s.topIndent, e.ctx.drawImage(u, e.width / 2 - t / 2, e.topPosition, t, a), e.topPosition += a) : "bottom" in s && e.ctx.drawImage(u, e.width / 2 - t / 2, e.height - s.bottom, t, a)
}
async function ba(e, {
  src: l
}) {
  const t = new Image;
  await new Promise(a => {
    t.onload = a, t.src = l
  }), e.ctx.drawImage(t, 0, 0, e.width, e.height)
}
async function ya(e, l) {
  const t = document.createElement("canvas"),
    a = t.getContext("2d");
  if (!a) return;
  const s = window.devicePixelRatio || 1,
    u = new FontFace("Roobert", `url(${oa})`, {
      weight: "500"
    }),
    i = new FontFace("Roobert", `url(${ia})`, {
      weight: "700"
    });
  return await Promise.all([ie().getReferralToken(), document.fonts.ready, u.load(), i.load()]), document.fonts.add(u), document.fonts.add(i), a.clearRect(0, 0, e, l), t.width = e * s, t.height = l * s, a.scale(s, s), a.imageSmoothingEnabled = !0, a.imageSmoothingQuality = "high", t.style.width = e * s + "px", t.style.height = l * s + "px", t.style.scale = `${1/s}`, ka(a, t, l, e)
}
async function ga({
  canvas: e,
  name: l,
  text: t
}) {
  const a = await new Promise(v => e.toBlob(v, "image/png"));
  if (!a) return Te();
  const s = new File([a], "story-image.png", {
      type: "image/png"
    }),
    u = await ee.uploadFile(s, () => {});
  if (!Be(u)) return Te();
  const i = Ne().public.TELEGRAM_APP_URL,
    o = u.data.url,
    f = `${i}?startapp=ref_${ie().referralToken.value}`;
  try {
    return z().$webApp.shareToStory(o, {
      text: t,
      widget_link: {
        url: f,
        name: l
      }
    }), Je(void 0)
  } catch {
    return Te()
  }
}
const Ta = {
    class: "pages-tasks-share-story"
  },
  ha = M({
    __name: "TasksShareStory",
    emits: ["success", "close"],
    setup(e, {
      emit: l
    }) {
      const t = l,
        a = De().getters.getUser,
        s = Ze(),
        u = D({
          type: "loading"
        }),
        i = D(!1),
        o = D(),
        {
          generate: f
        } = da(),
        v = async () => {
          var y, r;
          const c = (y = a.value) == null ? void 0 : y.username,
            k = (r = a.value) == null ? void 0 : r.createdAt,
            p = s.currentStreakDays.value;
          if (!c || !k || p === void 0 || !o.value) return;
          const w = o.value.clientWidth,
            O = o.value.clientHeight,
            g = await f({
              type: "task-joined-at",
              data: {
                username: c,
                userCreatedAt: k,
                currentStreakDays: p,
                width: w,
                height: O
              }
            });
          g && (o.value.appendChild(g.canvas), u.value = {
            type: "loaded",
            story: g
          })
        }, b = async () => {
          if (u.value.type !== "loaded") return;
          i.value = !0;
          const c = u.value.story.share;
          await (async () => {
            const k = await c();
            Be(k) && t("success")
          })(), i.value = !1
        }, m = et(v, 50).debouncedFunction;
      return ge(() => [s.currentStreakDays.value, o.value, a.value], m, {
        immediate: !0
      }), window.addEventListener("resize", m), ue(() => {
        window.removeEventListener("resize", m)
      }), Me().initHandler(() => t("close"), "tasks-share-story"), (c, k) => {
        const p = $t,
          w = be,
          O = Pe;
        return d(), C("div", Ta, [n(u).type === "loading" ? (d(), S(p, {
          key: 0,
          fixed: ""
        })) : (d(), S(O, {
          key: 1,
          "ignore-tabs": "",
          "no-background": "",
          "hide-space": ""
        }, {
          default: B(() => [E(w, {
            size: n(se).LARGE,
            fill: "",
            loading: n(i),
            onClick: b
          }, {
            default: B(() => [ve(P(("t" in c ? c.t : n(_))("memepad.tasks.share_stories.button")), 1)]),
            _: 1
          }, 8, ["size", "loading"])]),
          _: 1
        })), A("div", {
          ref_key: "canvasContainer",
          ref: o,
          class: "canvas-wrapper"
        }, null, 512)])
      }
    }
  }),
  Aa = U(ha, [
    ["__scopeId", "data-v-7593f978"]
  ]),
  Ca = () => {
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
  Le = M({
    __name: "TasksItemInnerWrapper",
    props: N({
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
    emits: N(["open:subtasks-modal"], ["update:claimOverride"]),
    setup(e, {
      emit: l
    }) {
      const t = e,
        a = l,
        s = H(e, "claimOverride"),
        u = Ca(),
        i = at(),
        o = D(!1),
        f = () => {
          o.value = !1, t.task.status === V.NOT_STARTED && t.startCallback()
        },
        v = () => {
          if ([F.SOCIAL_MEDIA_CHECK, F.SOCIAL_SUBSCRIPTION].includes(t.task.type) && t.task.socialSubscription) {
            const r = t.task.socialSubscription.url;
            t.task.socialSubscription.openInTelegram ? z().$webApp.openTelegramLink(r) : r.startsWith("http") ? z().$webApp.openLink(r) : Se().push(r)
          }
          if (t.task.type === F.APPLICATION_LAUNCH && t.task.applicationLaunch && z().$webApp.openTelegramLink(t.task.applicationLaunch.url), t.task.type === F.WALLET_CONNECTION) {
            const r = () => {
              t.task.status === V.NOT_STARTED && t.startCallback()
            };
            i.runConnectionFlow(r)
          }
          if (t.task.type === F.INTERNAL && t.task.subType === Ie.SHARE_STORIES && (o.value = !0), t.task.type === F.ONCHAIN_TRANSACTION) {
            const r = async () => {
              const h = t.task.onchainTransaction;
              if (t.task.status !== V.NOT_STARTED || !h) return;
              const $ = De().getters.mustGetUser.value.id,
                T = `${t.task.id}:${$}`;
              await u.sendTransaction({
                address: h.address,
                amountTON: h.amount,
                message: T
              }).then(t.startCallback).catch()
            };
            i.runConnectionFlow(r)
          }
          t.task.validationType === it.MEMEPAD && Se().push({
            name: "memepad",
            query: {
              memepadFrom: ot.TASK
            }
          })
        },
        b = () => {
          t.task.status === V.READY_FOR_VERIFY && v();
          const h = j(t.task.status, s.value),
            $ = lt(t.task.status),
            T = h || $,
            q = X(t.task.kind);
          T && (q || v(), q && a("open:subtasks-modal"))
        },
        m = R(() => t.task.kind === G.GROUP ? !0 : !t.task.reward.isZero()),
        c = R(() => {
          var r, h;
          if (!m.value) return "";
          if ((t.task.kind === G.QUEST && t.task.reward.isZero() || t.task.kind === G.GROUP) && "subTasks" in t.task) {
            const $ = ((r = t.task.subTasks) == null ? void 0 : r.reduce((q, x) => q.add(x.reward), new fe(0))) ?? new fe(0),
              T = ((h = t.task.subTasks) == null ? void 0 : h.reduce((q, x) => j(x.status, s.value) ? q.add(x.reward) : q, new fe(0))) ?? new fe(0);
            return `+${ae(T)}/${ae($)} BP`
          }
          return `+${ae(t.task.reward)} BP`
        }),
        k = D(),
        p = D(!1),
        w = () => {
          const r = () => {
            t.task.kind !== G.ONGOING && (X(t.task.kind) || (v(), t.task.type !== F.WALLET_CONNECTION && t.task.type !== F.ONCHAIN_TRANSACTION && (t.task.type === F.INTERNAL && t.task.subType === Ie.SHARE_STORIES || t.startCallback())))
          };
          if (t.task.isDisclaimerRequired) {
            k.value = {
              startFn: r
            };
            return
          }
          r()
        },
        O = R(() => {
          if (t.task.type === F.PROGRESS_TARGET) {
            const r = $e(t.task.progressTarget, "progress target"),
              h = he(r.target, {
                accuracy: r.accuracy
              });
            return `${t.task.title} ${h}${r.postfix?` ${r.postfix}`:""}`
          }
          return t.task.title
        }),
        g = R(() => {
          if (t.questDetails) return {
            label: `${t.questDetails.countFinished}/${t.questDetails.countTotal}`,
            postfix: ` ${_("base.n.tasks",t.questDetails.countTotal)}`,
            finished: t.questDetails.countFinished,
            total: t.questDetails.countTotal,
            done: t.questDetails.countFinished === t.questDetails.countTotal
          };
          if (t.task.type === F.PROGRESS_TARGET && t.task.progressTarget) {
            const r = $e(t.task.progressTarget, "progress target"),
              h = he(r.progress, {
                accuracy: r.accuracy
              }),
              $ = he(r.target, {
                accuracy: r.accuracy
              });
            return {
              label: `${h}/${$}`,
              postfix: `${r.postfix?` ${r.postfix}`:""}`,
              finished: r.progress.toNumber(),
              total: r.target.toNumber(),
              done: r.progress === r.target
            }
          }
        }),
        y = R(() => ({
          onClick: b,
          rewardText: c,
          startProxy: w,
          title: O,
          progress: g,
          openVerify: () => p.value = !0
        }));
      return Me().initWatcher({
        key: "tasks-item-inner-wrapper",
        watchFn: () => p.value,
        callback: () => p.value = !1
      }), (r, h) => {
        var x;
        const $ = Jt,
          T = na,
          q = Aa;
        return d(), C(K, null, [te(r.$slots, "default", st(nt(n(y)))), E($, {
          "model-value": !!n(k),
          "product-name": e.task.productName,
          "icon-url": n(re)(e.task.iconFileKey),
          "start-fn": (x = n(k)) == null ? void 0 : x.startFn,
          "onUpdate:modelValue": h[0] || (h[0] = de => de ? void 0 : k.value = void 0)
        }, null, 8, ["model-value", "product-name", "icon-url", "start-fn"]), n(p) ? (d(), S(T, {
          key: 0,
          task: e.task,
          "verify-callback": e.verifyCallback,
          onDoAction: h[1] || (h[1] = de => v()),
          onClose: h[2] || (h[2] = de => p.value = !1)
        }, null, 8, ["task", "verify-callback"])) : I("", !0), n(o) ? (d(), S(q, {
          key: 1,
          onClose: h[3] || (h[3] = de => o.value = !1),
          onSuccess: f
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
  _a = {
    key: 1,
    class: "reward"
  },
  Ea = M({
    inheritAttrs: !1,
    __name: "TasksListItem",
    props: N({
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
    emits: N(["ui:claimed", "open:subtasks-modal", "pill:click"], ["update:claimOverride"]),
    setup(e) {
      const l = H(e, "claimOverride");
      return (t, a) => {
        const s = we,
          u = Le,
          i = oe("img-error");
        return d(), S(u, {
          "claim-override": l.value,
          "onUpdate:claimOverride": a[4] || (a[4] = o => l.value = o),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": a[5] || (a[5] = o => t.$emit("open:subtasks-modal"))
        }, {
          default: B(({
            onClick: o,
            rewardText: f,
            startProxy: v,
            title: b,
            progress: m,
            openVerify: c
          }) => {
            var k;
            return [A("div", rt({
              class: "pages-tasks-list-item-label"
            }, t.$attrs, {
              onClick: o
            }), [A("div", {
              class: J(["container", {
                "no-border": e.noBorder
              }])
            }, [le(A("img", {
              src: n(re)(e.task.iconFileKey),
              alt: "Task icon"
            }, null, 8, Ia), [
              [i]
            ]), A("div", Oa, [A("div", wa, P(b.value), 1), m.value || f.value ? (d(), C("div", $a, [(k = m.value) != null && k.label ? (d(), C("span", Ra, P(`${m.value.label}${m.value.postfix}`) + P(f.value ? ", " : ""), 1)) : I("", !0), f.value ? (d(), C("span", _a, P(f.value), 1)) : I("", !0)])) : I("", !0)]), e.task.status ? (d(), S(s, {
              key: 0,
              "claim-override": l.value,
              "onUpdate:claimOverride": a[0] || (a[0] = p => l.value = p),
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
  xe = U(Ea, [
    ["__scopeId", "data-v-61588e22"]
  ]),
  Na = {
    class: "label"
  },
  Ce = 185.074,
  Ba = M({
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
      const l = e,
        t = R(() => Ce - Ce * (l.finished / l.total));
      return (a, s) => {
        const u = Z;
        return d(), C("div", {
          class: J(["pages-tasks-progress-pill", `is-${e.mode}`])
        }, [A("span", Na, P(e.label), 1), E(u, {
          name: "special/progress-pill",
          class: "icon"
        })], 2)
      }
    }
  }),
  Da = U(Ba, [
    ["__scopeId", "data-v-293728e0"]
  ]),
  Ma = ["onClick"],
  Ua = {
    key: 0,
    class: "icons"
  },
  qa = ["src"],
  Pa = {
    class: "title"
  },
  La = {
    key: 1,
    class: "points"
  },
  xa = {
    class: "footer"
  },
  Fa = M({
    __name: "TasksCard",
    props: N({
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
    emits: N(["ui:claimed", "open:subtasks-modal", "pill:click"], ["update:claimOverride"]),
    setup(e) {
      const l = e,
        t = R(() => !l.short),
        a = R(() => l.short ? ne.LIGHT : ne.DARK),
        s = R(() => {
          var o;
          return l.task.kind === G.GROUP ? ((o = l.task.subTasks) == null ? void 0 : o.map(f => f.iconFileKey)) ?? [] : [l.task.iconFileKey]
        }),
        u = H(e, "claimOverride"),
        i = R(() => {
          if (l.short) return;
          if (l.task.color) return l.task.color;
          const o = ["#B9BBBC", "#BCABA6", "#BAAFC3", "#BEC0CB", "#C3BFB3"];
          return o[l.colorMode % o.length]
        });
      return (o, f) => {
        const v = we,
          b = Z,
          m = Da,
          c = Le,
          k = oe("img-error");
        return d(), S(c, {
          "claim-override": u.value,
          "onUpdate:claimOverride": f[4] || (f[4] = p => u.value = p),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": f[5] || (f[5] = p => o.$emit("open:subtasks-modal"))
        }, {
          default: B(({
            onClick: p,
            startProxy: w,
            title: O,
            progress: g,
            openVerify: y,
            rewardText: r
          }) => [A("div", {
            class: J(["pages-tasks-card", {
              "is-short": e.short
            }]),
            style: ut({
              backgroundColor: n(i)
            }),
            onClick: p
          }, [n(t) ? (d(), C("div", Ua, [(d(!0), C(K, null, W(n(s), (h, $) => le((d(), C("img", {
            key: $,
            src: n(re)(h),
            alt: "Task icon",
            class: "icon",
            width: "48",
            height: "48"
          }, null, 8, qa)), [
            [k]
          ])), 128))])) : I("", !0), A("div", Pa, P(O.value), 1), r.value ? (d(), C("div", La, P(r.value), 1)) : I("", !0), A("div", xa, [e.task.status ? (d(), S(v, {
            key: 0,
            "claim-override": u.value,
            "onUpdate:claimOverride": f[0] || (f[0] = h => u.value = h),
            status: e.task.status,
            kind: e.task.kind,
            "start-callback": w,
            "claim-callback": e.claimCallback,
            "is-nested": !1,
            mode: n(a),
            "item-mode": e.itemMode,
            "onUi:claimed": f[1] || (f[1] = h => o.$emit("ui:claimed")),
            "onOpen:subtasksModal": f[2] || (f[2] = h => o.$emit("open:subtasks-modal")),
            "onOpen:verify": y,
            onClick: f[3] || (f[3] = h => o.$emit("pill:click"))
          }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "mode", "item-mode", "onOpen:verify"])) : I("", !0), g.value ? (d(), C(K, {
            key: 1
          }, [g.value.done ? (d(), S(b, {
            key: 0,
            name: "circle-check-white",
            class: "done-icon"
          })) : (d(), S(m, {
            key: 1,
            finished: g.value.finished,
            total: g.value.total,
            label: g.value.label,
            mode: n(a)
          }, null, 8, ["finished", "total", "label", "mode"]))], 64)) : I("", !0)])], 14, Ma)]),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  Ka = U(Fa, [
    ["__scopeId", "data-v-04302302"]
  ]),
  Fe = () => {
    const e = dt("tasks-open-sheet");
    return {
      openTaskSheet: a => {
        e.emit(a.id)
      },
      onOpenTaskSheet: (a, s) => {
        e.subscribe(u => {
          a.id === u && s()
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
  Ha = M({
    __name: "TasksSubtasksModal",
    props: N({
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
    emits: N(["ui:claimed", "click:task", "pill:click"], ["update:modelValue", "update:tasksClaimOverride"]),
    setup(e) {
      const l = e,
        t = H(e, "modelValue"),
        a = H(e, "tasksClaimOverride"),
        s = R(() => l.task.kind === G.QUEST);
      ie().getReferralToken();
      const u = () => {
          t.value = !1, f.value = !0
        },
        i = () => {
          f.value = !1, t.value = !0
        },
        o = D(l.task.isShared),
        f = D(!1),
        v = R(() => _("earn.quest.share.text")),
        b = R(() => `tasksheet_${btoa(l.task.id)}-ref_${ie().referralToken.value}`);
      return Fe().onOpenTaskSheet(l.task, () => {
        t.value = !0
      }), (m, c) => {
        const k = Z,
          p = Rt,
          w = xe,
          O = we,
          g = Ee,
          y = kt;
        return d(), C(K, null, [E(g, {
          modelValue: t.value,
          "onUpdate:modelValue": c[3] || (c[3] = r => t.value = r),
          title: e.title
        }, mt({
          default: B(() => [A("div", {
            class: J(["pages-tasks-subtasks-modal", {
              "has-share": n(o)
            }])
          }, [n(o) ? (d(), C("button", {
            key: 0,
            type: "button",
            class: "reset share-btn",
            onClick: u
          }, [E(k, {
            name: "share",
            class: "icon"
          }), c[5] || (c[5] = A("div", {
            class: "labe"
          }, "Invite and earn up to 8% revshare", -1))])) : I("", !0), e.task.bannerFileKey || e.task.description ? (d(), C("div", Va, [e.task.bannerFileKey ? (d(), S(p, {
            key: 0,
            url: n(re)(e.task.bannerFileKey),
            alt: "Task banner",
            class: "banner"
          }, null, 8, ["url"])) : I("", !0), e.task.description ? (d(), C("div", Ga, P(e.task.description), 1)) : I("", !0)])) : I("", !0), e.task.subTasks ? (d(), S(Oe, {
            key: 2,
            tag: "div",
            name: "list-shuffle-transition",
            class: "nested-tasks"
          }, {
            default: B(() => [(d(!0), C(K, null, W(e.task.subTasks, (r, h) => (d(), S(w, {
              key: r.id,
              "claim-override": a.value[r.id],
              "onUpdate:claimOverride": $ => a.value[r.id] = $,
              task: r,
              "start-callback": () => e.startSubTaskCallback(r),
              "claim-callback": () => e.claimCallback(r),
              "verify-callback": $ => e.verifyCallback(r, $),
              "no-border": h === e.task.subTasks.length - 1,
              "item-mode": n(L).LIST_ITEM,
              "is-nested": "",
              "onUi:claimed": $ => m.$emit("ui:claimed", {
                task: r,
                isQuest: !1
              }),
              onClick: $ => m.$emit("click:task", r),
              "onPill:click": $ => m.$emit("pill:click", r)
            }, null, 8, ["claim-override", "onUpdate:claimOverride", "task", "start-callback", "claim-callback", "verify-callback", "no-border", "item-mode", "onUi:claimed", "onClick", "onPill:click"]))), 128))]),
            _: 1
          })) : I("", !0)], 2)]),
          _: 2
        }, [n(s) ? {
          name: "footer",
          fn: B(() => [e.task.status && !n(j)(e.task.status, a.value[e.task.id]) ? (d(), S(O, {
            key: 0,
            "claim-override": a.value[e.task.id],
            "onUpdate:claimOverride": c[0] || (c[0] = r => a.value[e.task.id] = r),
            "is-quest-button": "",
            status: e.task.status,
            kind: e.task.kind,
            reward: e.task.reward,
            "start-callback": () => {},
            "claim-callback": () => e.claimCallback(e.task),
            "item-mode": e.itemMode,
            "onUi:claimed": c[1] || (c[1] = r => m.$emit("ui:claimed", {
              task: e.task,
              isQuest: !0
            })),
            onClick: c[2] || (c[2] = r => m.$emit("pill:click", e.task))
          }, null, 8, ["claim-override", "status", "kind", "reward", "claim-callback", "item-mode"])) : I("", !0)]),
          key: "0"
        } : void 0]), 1032, ["modelValue", "title"]), E(y, {
          modelValue: n(f),
          "onUpdate:modelValue": c[4] || (c[4] = r => ce(f) ? f.value = r : null),
          title: ("t" in m ? m.t : n(_))("earn.quest.share.sheet.title"),
          "share-text": n(v),
          subtitle: e.task.sharingDescription,
          startapp: n(b),
          "copied-notification": ("t" in m ? m.t : n(_))("frens.invite.link_copied"),
          "back-icon": "",
          onBack: i
        }, null, 8, ["modelValue", "title", "share-text", "subtitle", "startapp", "copied-notification"])], 64)
      }
    }
  }),
  Wa = U(Ha, [
    ["__scopeId", "data-v-84322842"]
  ]),
  Ya = M({
    __name: "TasksItem",
    props: N({
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
    emits: N(["ui:claimed", "request:update", "pill:click", "mounted", "unmounted"], ["update:tasksClaimOverride"]),
    setup(e, {
      emit: l
    }) {
      const t = e,
        a = l,
        s = H(e, "tasksClaimOverride"),
        u = D(!1),
        i = D(void 0),
        o = R(() => {
          var m, c;
          if (!X(t.task.kind)) return;
          const v = ((m = t.task.subTasks) == null ? void 0 : m.length) ?? 0,
            b = ((c = t.task.subTasks) == null ? void 0 : c.filter(k => j(k.status, s.value[k.id])).length) ?? 0;
          return {
            countTotal: v,
            countFinished: b,
            progressLabel: `${b}/${v} ${_("base.n.tasks",v)}`,
            modalTitle: `${t.task.title} ${b}/${v}`
          }
        }),
        f = v => {
          v.isQuest ? u.value = !1 : a("request:update"), a("ui:claimed", v.task)
        };
      return pt(() => {
        i.value && a("mounted", i.value)
      }), ue(() => {
        i.value && a("unmounted", i.value)
      }), (v, b) => {
        const m = xe,
          c = Ka,
          k = Wa;
        return d(), C("div", {
          ref_key: "taskItemEl",
          ref: i,
          class: "pages-tasks-item"
        }, [e.mode === n(L).LIST_ITEM ? (d(), S(m, {
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
          "onOpen:subtasksModal": b[2] || (b[2] = p => u.value = !0),
          "onPill:click": b[3] || (b[3] = p => v.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "item-mode"])) : e.mode === n(L).SHORT_CARD || e.mode === n(L).CARD ? (d(), S(c, {
          key: 1,
          "claim-override": s.value[e.task.id],
          "onUpdate:claimOverride": b[4] || (b[4] = p => s.value[e.task.id] = p),
          task: e.task,
          "quest-details": n(o),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": p => e.verifyCallback(e.task, p),
          short: e.mode === n(L).SHORT_CARD,
          "color-mode": e.idx,
          "item-mode": e.mode,
          "onUi:claimed": b[5] || (b[5] = p => v.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": b[6] || (b[6] = p => u.value = !0),
          "onPill:click": b[7] || (b[7] = p => v.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "short", "color-mode", "item-mode"])) : I("", !0), n(o) ? (d(), S(k, {
          key: 2,
          modelValue: n(u),
          "onUpdate:modelValue": b[8] || (b[8] = p => ce(u) ? u.value = p : null),
          "tasks-claim-override": s.value,
          "onUpdate:tasksClaimOverride": b[9] || (b[9] = p => s.value = p),
          task: e.task,
          title: n(o).modalTitle,
          "start-sub-task-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "item-mode": e.mode,
          "onUi:claimed": b[10] || (b[10] = p => f(p)),
          "onPill:click": b[11] || (b[11] = p => v.$emit("pill:click", p))
        }, null, 8, ["modelValue", "tasks-claim-override", "task", "title", "start-sub-task-callback", "claim-callback", "verify-callback", "item-mode"])) : I("", !0)], 512)
      }
    }
  }),
  Ke = U(Ya, [
    ["__scopeId", "data-v-86f27969"]
  ]),
  Qa = M({
    __name: "TasksList",
    props: N({
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
    emits: N(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      const l = e,
        t = H(e, "tasksClaimOverride"),
        a = Ue(),
        s = c => [L.SHORT_CARD, L.CARD].includes(l.taskMode) ? l.tasks.some(p => p.id === c.id) : !1,
        u = {},
        i = (c, k) => ({
          source: k + 1,
          kind: c.kind,
          type: c.type,
          title: c.title,
          task_id: c.id,
          ...!X(c.kind) || !("subTasks" in c) || !c.subTasks ? {
            subtasks_done: j(c.status, t.value[c.id]) ? 1 : 0,
            subtasks_total: 1
          } : {
            subtasks_done: c.subTasks.filter(w => j(w.status, t.value[w.id])).length,
            subtasks_total: c.subTasks.length
          }
        }),
        o = (c, k) => {
          if (!s(c)) return;
          u[c.id] || (u[c.id] = !0);
          const p = i(c, k);
          l.taskMode === L.CARD ? a.earn.earnHighlightsTaskShow(p) : l.taskMode === L.SHORT_CARD && a.earn.earnWeeklyTaskShow(p)
        },
        f = (c, k) => {
          if (!s(c)) return;
          u[c.id] || o(c, k);
          const p = i(c, k);
          l.taskMode === L.CARD ? a.earn.earnHighlightsTaskClick(p) : l.taskMode === L.SHORT_CARD && a.earn.earnWeeklyTaskClick(p)
        },
        v = new IntersectionObserver(c => {
          const k = c[0],
            p = k.target.getAttribute("data-task-id");
          if (!p) return;
          const w = l.tasks.find(r => r.id === p);
          if (!w || !(k.intersectionRatio >= .5)) return;
          const g = w,
            y = l.tasks.indexOf(g);
          o(g, y)
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
          w = oe("horizontal-wheel-scroll");
        return le((d(), S(Oe, {
          tag: "div",
          name: "list-shuffle-transition",
          class: J(["pages-tasks-list", `is-${e.taskMode.toLowerCase()}`])
        }, {
          default: B(() => [(d(!0), C(K, null, W(e.tasks, (O, g) => (d(), S(p, {
            key: O.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": k[0] || (k[0] = y => t.value = y),
            task: O,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            mode: e.taskMode,
            idx: g,
            class: "item",
            "data-task-id": O.id,
            "onUi:claimed": k[1] || (k[1] = y => c.$emit("ui:claimed", y)),
            "onRequest:update": k[2] || (k[2] = y => c.$emit("request:update")),
            "onPill:click": y => f(y, g),
            onMounted: y => b(O, y),
            onUnmounted: y => m(O, y)
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback", "mode", "idx", "data-task-id", "onPill:click", "onMounted", "onUnmounted"]))), 128))]),
          _: 1
        }, 8, ["class"])), [
          [w]
        ])
      }
    }
  }),
  za = U(Qa, [
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
  Za = M({
    __name: "TasksSubSections",
    props: N({
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
    emits: N(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      var i;
      const l = e,
        t = H(e, "tasksClaimOverride"),
        a = R(() => l.subSections.map(o => ({
          value: o.title,
          label: o.title,
          dot: o.tasks.some(f => ft(f, t.value))
        }))),
        s = D((i = a.value[0]) == null ? void 0 : i.value),
        u = R(() => {
          var o;
          return ((o = l.subSections.find(f => f.title === s.value)) == null ? void 0 : o.tasks) ?? []
        });
      return (o, f) => {
        const v = It,
          b = Z,
          m = Ke;
        return n(u).length ? (d(), C("div", ja, [E(v, {
          modelValue: n(s),
          "onUpdate:modelValue": f[0] || (f[0] = c => ce(s) ? s.value = c : null),
          items: n(a)
        }, null, 8, ["modelValue", "items"]), n(u).length ? (d(), S(Oe, {
          key: n(s),
          tag: "div",
          name: "list-shuffle-transition",
          class: "tasks-list"
        }, {
          default: B(() => [(d(!0), C(K, null, W(n(u), c => (d(), S(m, {
            key: c.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": f[1] || (f[1] = k => t.value = k),
            task: c,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            "onUi:claimed": f[2] || (f[2] = k => o.$emit("ui:claimed", k)),
            "onRequest:update": f[3] || (f[3] = k => o.$emit("request:update"))
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback"]))), 128))]),
          _: 1
        })) : (d(), C("div", Xa, [A("div", Ja, [E(b, {
          name: "warning-circle-check",
          class: "icon"
        }), f[4] || (f[4] = A("span", {
          class: "label"
        }, " Hooray! You've nailed every task! ", -1))])]))])) : I("", !0)
      }
    }
  }),
  es = U(Za, [
    ["__scopeId", "data-v-2fd71113"]
  ]),
  ts = {
    class: "pages-tasks-section"
  },
  as = M({
    __name: "TasksSection",
    props: N({
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
    emits: N(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      const l = e,
        t = R(() => vt(l.section)),
        a = H(e, "tasksClaimOverride"),
        s = i => {
          const o = i.tasks,
            f = k => !qe(k),
            v = k => Re(k, a.value),
            b = k => {
              const p = k.subTasks ? Re(k.subTasks, a.value) : void 0;
              return {
                ...k,
                subTasks: p
              }
            },
            m = k => {
              const p = k.filter(f);
              return v(p).map(b)
            },
            c = k => k.map(p => ({
              ...p,
              tasks: m(p.tasks)
            }));
          return {
            ...i,
            tasks: m(o),
            subSections: c(i.subSections)
          }
        },
        u = R(() => s(l.section));
      return (i, o) => {
        const f = Pt,
          v = za,
          b = es;
        return d(), C("div", ts, [n(u).title || n(u).description ? (d(), S(f, {
          key: 0,
          title: n(u).title,
          subtitle: n(u).description
        }, null, 8, ["title", "subtitle"])) : I("", !0), n(u).tasks.length ? (d(), S(v, {
          key: 1,
          "tasks-claim-override": a.value,
          "onUpdate:tasksClaimOverride": o[0] || (o[0] = m => a.value = m),
          tasks: n(u).tasks,
          "task-mode": n(t),
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": o[1] || (o[1] = m => i.$emit("ui:claimed", m)),
          "onRequest:update": o[2] || (o[2] = m => i.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "tasks", "task-mode", "start-callback", "claim-callback", "verify-callback"])) : I("", !0), E(b, {
          "tasks-claim-override": a.value,
          "onUpdate:tasksClaimOverride": o[3] || (o[3] = m => a.value = m),
          "sub-sections": n(u).subSections,
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": o[4] || (o[4] = m => i.$emit("ui:claimed", m)),
          "onRequest:update": o[5] || (o[5] = m => i.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "sub-sections", "start-callback", "claim-callback", "verify-callback"])])
      }
    }
  }),
  ss = U(as, [
    ["__scopeId", "data-v-2f6edcc7"]
  ]),
  ns = M({
    __name: "PageSkeleton",
    props: {
      delay: {
        type: Number,
        default: 120
      }
    },
    setup(e) {
      const l = e,
        t = D(!1),
        a = setTimeout(() => t.value = !0, l.delay);
      return ue(() => clearTimeout(a)), (s, u) => n(t) ? te(s.$slots, "default", {
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

function ms(e, l) {
  const t = _t,
    a = ns;
  return d(), S(a, null, {
    default: B(() => [A("div", os, [E(t, {
      class: "title"
    }), A("div", ls, [(d(), C(K, null, W(2, s => E(t, {
      key: s,
      class: "item"
    })), 64))]), A("div", rs, [E(t, {
      class: "subtitle"
    })]), A("div", cs, [(d(), C(K, null, W(2, s => E(t, {
      key: s,
      class: "item"
    })), 64))]), A("div", us, [E(t, {
      class: "subtitle"
    })]), A("div", ds, [(d(), C(K, null, W(7, s => A("div", {
      key: s,
      class: "item"
    }, [E(t, {
      class: "icon"
    }), E(t, {
      class: "details"
    }), E(t, {
      class: "points",
      rounded: ""
    })])), 64))])])]),
    _: 1
  })
}
const ks = U(is, [
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
  ys = M({
    __name: "tasks",
    setup(e) {
      const l = Ue(),
        t = R(() => bt().query.openTaskSheetId),
        a = D(!1),
        s = D(),
        u = z().$webApp.dataUnsafe.user,
        i = R(() => {
          if (!s.value) return;
          const y = !!(u != null && u.is_premium) ? r => r : r => r.filter(h => !(h.type === F.INTERNAL && h.subType === Ie.SHARE_STORIES));
          return s.value.map(r => {
            const h = y(r.tasks).map(T => ({
                ...T,
                subTasks: T.subTasks ? y(T.subTasks) : T.subTasks
              })),
              $ = r.subSections.map(T => ({
                ...T,
                tasks: y(T.tasks).map(q => ({
                  ...q,
                  subTasks: q.subTasks ? y(q.subTasks) : q.subTasks
                }))
              })).filter(T => T.tasks.length);
            return {
              ...r,
              tasks: h,
              subSections: $
            }
          })
        }),
        o = D({}),
        v = yt(async () => At(await ee.getTasksSections(z().$webApp.dataUnsafe.query.ref)), g => s.value = g, 15e3),
        b = (g, y) => {
          if (i.value)
            for (const r of i.value) {
              const $ = [...r.tasks, ...r.tasks.flatMap(T => T.subTasks ?? []), ...r.subSections.flatMap(T => T.tasks ?? [])].filter(T => T.id === g);
              if ($.length) {
                $.forEach(T => {
                  Object.assign(T, y)
                });
                return
              }
            }
        },
        m = async g => {
          const y = await ee.startTask(g.id);
          y.err || b(g.id, y.data)
        }, c = async g => {
          const y = await ee.claimTask(g.id);
          return y.err ? !1 : (b(g.id, y.data), Tt().update(), !0)
        }, k = async (g, y) => {
          const r = await ee.verifyTask(g.id, y);
          return r.err ? r.code === 400 ? Q.WRONG_KEYWORD : Q.UNKNOWN_ERROR : (b(g.id, r.data), Q.SUCCESS)
        }, p = g => {
          setTimeout(() => delete o.value[g.id], 3e3), g.reward.isZero() || ht().success(_("base.you_got_bp", {
            bp: ae(g.reward)
          }))
        }, w = R(() => i.value ? i.value.reduce((y, r) => ([...r.tasks, ...r.tasks.flatMap(T => T.subTasks ?? []), ...r.subSections.flatMap(T => T.tasks ?? [])].filter(T => !j(T.status, o.value[T.id]) && !qe(T) && T.kind !== G.GROUP).map(T => T.id).forEach(T => y.add(T)), y), new Set).size : 0);
      return (async () => {
        l.earn.earnTaskMainPageOpen(), await v.exec()
      })(), ge(() => [i.value, t.value], () => {
        if (!i.value || !t.value) return;
        Se().replace({
          query: {}
        });
        const g = i.value.flatMap(y => y.tasks).find(y => y.id === t.value && [G.QUEST, G.GROUP].includes(y.kind));
        g && gt(() => Fe().openTaskSheet(g))
      }), ue(() => {
        v.destroy()
      }), (g, y) => {
        const r = Nt,
          h = ss,
          $ = ks;
        return d(), C("div", ps, [n(a) ? (d(), S(r, {
          key: 0
        })) : n(i) ? (d(), C(K, {
          key: 1
        }, [A("div", fs, [A("span", vs, [ve(P(("t" in g ? g.t : n(_))("earn.title")) + " ", 1), A("sup", null, P(n(w)), 1)])]), A("div", bs, [(d(!0), C(K, null, W(n(i), (T, q) => (d(), S(h, {
          key: q,
          "tasks-claim-override": n(o),
          "onUpdate:tasksClaimOverride": y[0] || (y[0] = x => ce(o) ? o.value = x : null),
          section: T,
          "start-callback": m,
          "claim-callback": c,
          "verify-callback": k,
          class: "section",
          "onUi:claimed": y[1] || (y[1] = x => p(x)),
          "onRequest:update": y[2] || (y[2] = x => n(v).exec())
        }, null, 8, ["tasks-claim-override", "section"]))), 128))])], 64)) : (d(), S($, {
          key: 2
        }))])
      }
    }
  }),
  _s = U(ys, [
    ["__scopeId", "data-v-b80b138c"]
  ]);
export {
  _s as
  default
};