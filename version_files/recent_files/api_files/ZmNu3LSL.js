import {
  _ as Ve
} from "./CWF_nTdd.js";
import {
  d as M,
  o as u,
  G as I,
  e as n,
  an as Ge,
  h as j,
  f as q,
  Z as He,
  c as S,
  t as U,
  D as O,
  j as R,
  cf as x,
  bm as We,
  z as _,
  H as N,
  bl as ae,
  az as Ye,
  V as ne,
  x as ge,
  ao as B,
  cg as ie,
  ap as G,
  ch as H,
  aX as ke,
  M as se,
  ci as V,
  cj as Z,
  ck as Q,
  cl as Qe,
  W as Te,
  n as J,
  _ as ee,
  aY as ze,
  u as je,
  K as D,
  P as oe,
  ah as pe,
  N as le,
  w as re,
  a as C,
  b as E,
  m as be,
  ai as Xe,
  aK as Be,
  cm as z,
  cc as fe,
  aQ as ce,
  p as ue,
  bc as ye,
  av as he,
  X as te,
  a2 as Ne,
  l as Ze,
  Y as Je,
  k as De,
  aF as et,
  U as de,
  ac as tt,
  b1 as at,
  as as st,
  T as ve,
  cn as X,
  co as F,
  cp as Re,
  a8 as Ae,
  Q as Me,
  bA as nt,
  bB as it,
  F as K,
  ad as Ie,
  cq as Oe,
  cr as ot,
  cs as lt,
  af as rt,
  ay as ct,
  aw as ut,
  q as W,
  ct as dt,
  bT as mt,
  aV as we,
  aq as kt,
  a9 as pt,
  a0 as qe,
  cu as ft,
  cv as vt,
  cw as Ue,
  cx as _e,
  R as bt,
  a$ as yt,
  O as gt,
  $ as Tt,
  a1 as ht
} from "./7B743EeA.js";
import {
  _ as At
} from "./XqRuWQxe.js";
import {
  _ as Ct,
  a as St
} from "./BN0uwcad.js";
import {
  a as It
} from "./DHWTYcqW.js";
import {
  _ as Pe
} from "./CT7akwlJ.js";
import {
  _ as Ot
} from "./Dn_U__Ys.js";
import {
  _ as wt
} from "./HKUPTPvZ.js";
import {
  u as $t
} from "./Co3RAnXi.js";
import {
  d as Ce
} from "./BqlQh3w0.js";
import {
  _ as Rt
} from "./BZ9AKuBx.js";
import {
  _ as _t
} from "./Cdr4DyLS.js";
const Et = M({
    __name: "TasksMaintenance",
    setup(e) {
      const l = () => j().$webApp.openTelegramLink("https://t.me/BlumCrypto");
      return (t, a) => {
        const s = Ve;
        return u(), I(s, {
          icon: ("imgResolver" in t ? t.imgResolver : n(Ge))("emoji/Construction"),
          title: "Maintenance",
          subtitle: "We’re sprucing things up on Blum to bring you an even better experience. Hang tight, we’ll be back before you know it!",
          "button-label": "Visit community",
          onButton: a[0] || (a[0] = c => l())
        }, null, 8, ["icon"])
      }
    }
  }),
  Bt = q(Et, [
    ["__scopeId", "data-v-dba006cd"]
  ]),
  Nt = {
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
  qt = {
    key: 2,
    class: "pokras-bg"
  },
  Ut = M({
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
      return (t, a) => (u(), S("div", Nt, [e.title ? (u(), S("div", Dt, U(e.title), 1)) : O("", !0), e.subtitle ? (u(), S("div", Mt, U(e.subtitle), 1)) : O("", !0), n(l) ? (u(), S("div", qt)) : O("", !0)]))
    }
  }),
  Pt = q(Ut, [
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
          const s = [x.CARD, x.SHORT_CARD].includes(l.itemMode) ? We.RIGHT : void 0;
          if (l.tooltip === "validation") return {
            text: _("earn.task.verification_indicator_text"),
            alignment: s
          }
        });
      return (a, s) => {
        const c = At,
          i = ge;
        return n(t) ? (u(), I(c, {
          key: 0,
          class: "tasks-pill-inline",
          fill: "",
          text: n(t).text,
          alignment: n(t).alignment,
          "text-alignment": "left",
          "text-min-width": 130,
          onClick: s[0] || (s[0] = Ye(() => {}, ["stop"]))
        }, {
          default: N(() => [ae(a.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["text", "alignment"])) : e.isQuestButton ? (u(), I(i, {
          key: 1,
          class: "tasks-fill-full",
          fill: "",
          size: n(ne).LARGE,
          disabled: e.disabled,
          onClick: s[1] || (s[1] = o => e.onClick && e.onClick(o))
        }, {
          default: N(() => [ae(a.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["size", "disabled"])) : (u(), S("button", {
          key: 2,
          class: "tasks-pill-inline",
          disabled: e.disabled,
          onClick: s[2] || (s[2] = o => e.onClick && e.onClick(o))
        }, [ae(a.$slots, "default", {}, void 0, !0)], 8, Lt))
      }
    }
  }),
  Ft = q(xt, [
    ["__scopeId", "data-v-3aaee1da"]
  ]),
  Kt = {
    key: 0,
    class: "label"
  },
  Vt = M({
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
        default: ie.DARK
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
      emit: l
    }) {
      const t = e,
        a = l,
        s = G(e, "claimOverride"),
        c = R(() => t.status === H.READY_FOR_CLAIM ? ke.DARK : t.status === H.STARTED ? t.mode === ie.LIGHT ? ke.DARK : ke.LIGHT : ke.DARK),
        i = R(() => {
          const o = t.reward && !t.reward.isZero() ? _("base.claim_bp", {
              bp: se(t.reward)
            }) : _("base.claim"),
            p = {
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
          if (t.status === H.NOT_STARTED) return t.kind === V.ONGOING ? p.claimDisabled : t.isQuestButton ? p.questDisabled : Z(t.kind) ? p.subtasksModalOpen : {
            label: _("earn.task.buttons.start"),
            cls: "is-status-not-started",
            onClick: () => {
              s.value = Q.STARTED, setTimeout(() => s.value === Q.STARTED && (s.value = void 0), 15e3), t.startCallback(), a("click")
            }
          };
          if (t.status === H.STARTED) return t.kind === V.ONGOING ? p.claimDisabled : t.isQuestButton ? p.questDisabled : Z(t.kind) ? p.subtasksModalOpen : s.value === Q.STARTED ? {
            loader: !0,
            cls: "is-status-started"
          } : {
            icon: "clock",
            cls: "is-status-started",
            tooltip: "validation"
          };
          if (t.status === H.READY_FOR_VERIFY) return {
            label: _("earn.task.buttons.verify"),
            onClick: v => {
              v.stopPropagation(), a("open:verify"), a("click")
            },
            cls: "is-status-ready-for-verify"
          };
          if (s.value === Q.LOADING) return {
            loader: !0,
            cls: "is-status-ready-for-claim"
          };
          if (s.value === Q.DONE) return {
            icon: "circle-check-white",
            cls: "is-status-ready-for-claim"
          };
          if (t.status === H.FINISHED) return {
            icon: "circle-check-white",
            cls: "is-status-finished"
          };
          if (t.status === H.READY_FOR_CLAIM) return {
            label: o,
            cls: "is-status-ready-for-claim",
            onClick: async () => {
              s.value = Q.LOADING, a("click"), await Qe(t.claimCallback, 2e3) ? (s.value = Q.DONE, a("ui:claimed")) : s.value = void 0
            }
          };
          throw Te("Unsupported condition")
        });
      return (o, p) => {
        const v = ee,
          f = ze,
          d = Ft;
        return u(), I(d, {
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
          default: N(() => [n(i).label ? (u(), S("div", Kt, U(n(i).label), 1)) : n(i).icon ? (u(), I(v, {
            key: 1,
            name: n(i).icon,
            class: "icon"
          }, null, 8, ["name"])) : n(i).loader ? (u(), I(f, {
            key: 2,
            size: 16,
            type: n(c)
          }, null, 8, ["type"])) : O("", !0)]),
          _: 1
        }, 8, ["on-click", "class", "is-quest-button", "disabled", "tooltip", "item-mode"])
      }
    }
  }),
  $e = q(Vt, [
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
  Ee = "community@blum.io",
  Xt = M({
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
      const l = e,
        t = G(e, "modelValue"),
        {
          copy: a
        } = je(),
        s = () => a(Ee),
        c = () => ({
          isAgreed: !1,
          state: "general"
        }),
        i = D(c());
      oe(t, f => f && (i.value = c()));
      const o = () => {
          i.value.isAgreed = !0, i.value.state = "general"
        },
        p = () => {
          t.value = !1, l.startFn && l.startFn()
        },
        v = R(() => {
          const f = Gt.split(`
`).reduce((d, r) => {
            const m = r.trim();
            if (!m) return d;
            const k = (() => {
              if (m.includes("{{ community_email }}")) {
                const $ = m.split("{{ community_email }}");
                return pe("p", [$[0], pe("span", {
                  class: "as-link",
                  onClick: s
                }, Ee), $[1]])
              }
              return pe("p", m)
            })();
            return d.push(k), d
          }, []);
          return pe("div", {
            class: "text"
          }, f)
        });
      return (f, d) => {
        const r = Ct,
          m = ge,
          k = Be,
          $ = le("img-error");
        return u(), I(k, {
          modelValue: t.value,
          "onUpdate:modelValue": d[4] || (d[4] = w => t.value = w),
          title: "",
          "back-icon": n(i).state === "details",
          "content-key": n(i).state,
          onBack: d[5] || (d[5] = w => n(i).state = "general")
        }, {
          title: N(() => [n(i).state === "general" ? (u(), S("span", Ht, [re(C("img", {
            src: e.iconUrl,
            alt: "Task icon"
          }, null, 8, Wt), [
            [$]
          ]), C("span", null, U(e.productName), 1)])) : O("", !0), n(i).state === "details" ? (u(), S("span", Yt, "Disclaimer")) : O("", !0)]),
          default: N(() => [n(i).state === "general" ? (u(), S("div", Qt, [d[8] || (d[8] = C("div", {
            class: "text"
          }, [C("p", null, "Nothing in Blum is to be considered as being of promotional nature or aiming at commercial use."), C("p", null, "No material or information which may be made available in Blum shall constitute or be construed as a recommendation, endorsement, offer, invitation or solicitation to enter into any transaction with or purchase any product, or otherwise deal with securities, crypto assets or other products."), C("p", null, "You alone are solely responsible for determining whether any investment, security or any other product or service, is appropriate or suitable for you. You should consult an attorney or tax professional regarding your specific legal or tax situation.")], -1)), C("div", zt, [E(r, {
            modelValue: n(i).isAgreed,
            "onUpdate:modelValue": d[0] || (d[0] = w => n(i).isAgreed = w)
          }, null, 8, ["modelValue"]), C("span", null, [d[6] || (d[6] = be("By using Blum, you accept the terms of our ")), C("span", {
            class: "as-link",
            onClick: d[1] || (d[1] = w => n(i).state = "details")
          }, "Disclaimer"), d[7] || (d[7] = be("."))])])])) : O("", !0), n(i).state === "details" ? (u(), S("div", jt, [(u(), I(Xe(n(v))))])) : O("", !0)]),
          footer: N(() => [n(i).state === "general" ? (u(), I(m, {
            key: 0,
            label: `Go to ${e.productName}`,
            fill: "",
            size: n(ne).LARGE,
            tertiary: "",
            disabled: !n(i).isAgreed,
            onClick: d[2] || (d[2] = w => p())
          }, null, 8, ["label", "size", "disabled"])) : O("", !0), n(i).state === "details" ? (u(), I(m, {
            key: 1,
            label: "I agree",
            fill: "",
            size: n(ne).LARGE,
            onClick: d[3] || (d[3] = w => o())
          }, null, 8, ["size"])) : O("", !0)]),
          _: 1
        }, 8, ["modelValue", "back-icon", "content-key"])
      }
    }
  }),
  Zt = q(Xt, [
    ["__scopeId", "data-v-845ec11f"]
  ]),
  Jt = {
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
        c = D(),
        i = async () => {
          c.value = void 0, c.value = await t.verifyCallback(s.value), c.value === z.SUCCESS && a("close")
        };
      oe(s, () => {
        c.value !== void 0 && (c.value = void 0)
      });
      const o = R(() => {
        switch (c.value) {
          case void 0:
            return {
              status: fe.REGULAR, caption: _("earn.verify_input.caption.default")
            };
          case z.UNKNOWN_ERROR:
            return {
              status: fe.ERROR, caption: _("earn.verify_input.caption.unknown_error")
            };
          case z.WRONG_KEYWORD:
            return {
              status: fe.ERROR, caption: _("earn.verify_input.caption.wrong_keyword")
            };
          case z.SUCCESS:
            return {
              status: fe.REGULAR
            };
          default:
            throw c.value, Te("Invalid status")
        }
      });
      return (p, v) => {
        const f = ee,
          d = It,
          r = ge,
          m = Pe,
          k = Ot,
          $ = le("img-error");
        return u(), I(k, null, {
          default: N(() => [C("div", Jt, [C("div", ea, [re(C("img", {
            src: n(ce)(e.task.iconFileKey),
            alt: "Task icon",
            class: "task-icon"
          }, null, 8, ta), [
            [$]
          ]), C("div", aa, U(e.task.title), 1), E(f, {
            name: "external-link",
            class: "link-icon",
            onClick: v[0] || (v[0] = w => p.$emit("doAction"))
          })]), E(d, {
            modelValue: n(s),
            "onUpdate:modelValue": v[1] || (v[1] = w => ue(s) ? s.value = w : null),
            placeholder: "Keyword",
            label: "Verification",
            status: n(o).status,
            caption: n(o).caption,
            class: "input"
          }, null, 8, ["modelValue", "status", "caption"]), E(m, {
            "ignore-tabs": ""
          }, {
            default: N(() => [E(r, {
              label: "Verify",
              fill: "",
              size: n(ne).LARGE,
              onClick: v[2] || (v[2] = w => i())
            }, null, 8, ["size"])]),
            _: 1
          })])]),
          _: 1
        })
      }
    }
  }),
  na = q(sa, [
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
    height: c
  } = e, i = await ya(s, c);
  if (i) return await pa(i, [{
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
  }, {
    type: "text",
    options: {
      text: [_("memepad.tasks.share_stories.note.1"), _("memepad.tasks.share_stories.note.2")],
      style: "paragraph-medium",
      color: "#A6A6A6"
    },
    position: {
      bottom: 146
    }
  }]), {
    canvas: i.canvas,
    share: () => ga({
      canvas: i.canvas,
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
      throw Te(`Unknown element type: ${t}`)
  }
}

function fa(e, {
  text: l,
  style: t,
  color: a,
  textBaseline: s = "top",
  textAlign: c = "center"
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
        throw Te("Unknown style")
    }
  })();
  e.ctx.font = o.font, e.ctx.fillStyle = a, e.ctx.textBaseline = s, e.ctx.textAlign = c;
  const p = Array.isArray(l) ? l : [l];
  if ("topIndent" in i) {
    e.topPosition += i.topIndent;
    for (const v of p) e.ctx.fillText(v, e.width / 2, e.topPosition), e.topPosition += o.lineHeight
  } else if ("bottom" in i) {
    let v = e.height - i.bottom;
    for (const f of p.reverse()) e.ctx.fillText(f, e.width / 2, v), v -= o.lineHeight
  }
}
async function va(e, {
  src: l,
  width: t,
  height: a
}, s) {
  const c = new Image;
  await new Promise(i => {
    c.onload = i, c.src = l
  }), "topIndent" in s ? (e.topPosition += s.topIndent, e.ctx.drawImage(c, e.width / 2 - t / 2, e.topPosition, t, a), e.topPosition += a) : "bottom" in s && e.ctx.drawImage(c, e.width / 2 - t / 2, e.height - s.bottom, t, a)
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
    c = new FontFace("Roobert", `url(${oa})`, {
      weight: "500"
    }),
    i = new FontFace("Roobert", `url(${ia})`, {
      weight: "700"
    });
  return await Promise.all([ye().getReferralToken(), document.fonts.ready, c.load(), i.load()]), document.fonts.add(c), document.fonts.add(i), a.clearRect(0, 0, e, l), t.width = e * s, t.height = l * s, a.scale(s, s), a.imageSmoothingEnabled = !0, a.imageSmoothingQuality = "high", t.style.width = e * s + "px", t.style.height = l * s + "px", t.style.scale = `${1/s}`, ka(a, t, l, e)
}
async function ga({
  canvas: e,
  name: l
}) {
  const t = await new Promise(p => {
    e.toBlob(p, "image/png")
  });
  if (!t) return he();
  const a = new File([t], "story-image.png", {
      type: "image/png"
    }),
    s = await te.uploadFile(a, () => {});
  if (!Ne(s)) return he();
  const c = Ze().public.TELEGRAM_APP_URL,
    i = s.data.url,
    o = `${c}?startapp=ref_${ye().referralToken.value}`;
  try {
    return j().$webApp.shareToStory(i, {
      widget_link: {
        url: o,
        name: l
      }
    }), Je(void 0)
  } catch {
    return he()
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
        s = et(),
        c = D({
          type: "loading"
        }),
        i = D(!1),
        o = D(),
        {
          generate: p
        } = da(),
        v = async () => {
          var y, g;
          const r = (y = a.value) == null ? void 0 : y.username,
            m = (g = a.value) == null ? void 0 : g.createdAt,
            k = s.currentStreakDays.value;
          if (!r || !m || k === void 0 || !o.value) return;
          const $ = o.value.clientWidth,
            w = o.value.clientHeight,
            T = await p({
              type: "task-joined-at",
              data: {
                username: r,
                userCreatedAt: m,
                currentStreakDays: k,
                width: $,
                height: w
              }
            });
          T && (o.value.appendChild(T.canvas), c.value = {
            type: "loaded",
            story: T
          })
        }, f = async () => {
          if (c.value.type !== "loaded") return;
          i.value = !0;
          const r = c.value.story.share;
          await (async () => {
            const m = await r();
            Ne(m) && t("success")
          })(), i.value = !1
        }, d = tt(v, 50).debouncedFunction;
      return oe(() => [s.currentStreakDays.value, o.value, a.value], d, {
        immediate: !0
      }), window.addEventListener("resize", d), de(() => {
        window.removeEventListener("resize", d)
      }), $t(() => t("close")), (r, m) => {
        const k = wt,
          $ = ge,
          w = Pe;
        return u(), S("div", Ta, [n(c).type === "loading" ? (u(), I(k, {
          key: 0,
          fixed: ""
        })) : (u(), I(w, {
          key: 1,
          "ignore-tabs": "",
          "no-background": "",
          "hide-space": ""
        }, {
          default: N(() => [E($, {
            size: n(ne).LARGE,
            fill: "",
            loading: n(i),
            onClick: f
          }, {
            default: N(() => [be(U(("t" in r ? r.t : n(_))("memepad.tasks.share_stories.button")), 1)]),
            _: 1
          }, 8, ["size", "loading"])]),
          _: 1
        })), C("div", {
          ref_key: "canvasContainer",
          ref: o,
          class: "canvas-wrapper"
        }, null, 512)])
      }
    }
  }),
  Aa = q(ha, [
    ["__scopeId", "data-v-28aa4a48"]
  ]),
  Ca = () => {
    const {
      tonConnectUI: e
    } = at();
    return {
      sendTransaction: async t => {
        const a = Ce.Address.parse(t.address),
          s = {
            validUntil: Math.floor(Date.now() / 1e3) + 360,
            messages: [{
              address: a.toString(),
              amount: Ce.toNano(t.amountTON.toString()).toString(),
              payload: (() => {
                if (t.message) return Ce.beginCell().storeUint(0, 32).storeStringTail(t.message).endCell().toBoc().toString("base64")
              })()
            }]
          };
        return await e.value.sendTransaction(s)
      }
    }
  },
  Le = M({
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
      emit: l
    }) {
      const t = e,
        a = l,
        s = G(e, "claimOverride"),
        c = Ca(),
        i = st(),
        o = D(!1),
        p = () => {
          o.value = !1, t.startCallback()
        },
        v = () => {
          if ([F.SOCIAL_MEDIA_CHECK, F.SOCIAL_SUBSCRIPTION].includes(t.task.type) && t.task.socialSubscription) {
            const b = t.task.socialSubscription.url;
            t.task.socialSubscription.openInTelegram ? j().$webApp.openTelegramLink(b) : b.startsWith("http") ? j().$webApp.openLink(b) : Ie().push(b)
          }
          if (t.task.type === F.APPLICATION_LAUNCH && t.task.applicationLaunch && j().$webApp.openTelegramLink(t.task.applicationLaunch.url), t.task.type === F.WALLET_CONNECTION) {
            const b = () => {
              t.task.status === H.NOT_STARTED && t.startCallback()
            };
            i.runConnectionFlow(b)
          }
          if (t.task.type === F.INTERNAL && t.task.subType === Oe.SHARE_STORIES && (o.value = !0), t.task.type === F.ONCHAIN_TRANSACTION) {
            const b = async () => {
              const A = t.task.onchainTransaction;
              if (t.task.status !== H.NOT_STARTED || !A) return;
              const h = De().getters.mustGetUser.value.id,
                P = `${t.task.id}:${h}`;
              await c.sendTransaction({
                address: A.address,
                amountTON: A.amount,
                message: P
              }).then(t.startCallback).catch()
            };
            i.runConnectionFlow(b)
          }
          t.task.validationType === ot.MEMEPAD && Ie().push({
            name: "memepad"
          })
        },
        f = () => {
          t.task.status === H.READY_FOR_VERIFY && v();
          const A = X(t.task.status, s.value),
            h = lt(t.task.status),
            P = A || h,
            L = Z(t.task.kind);
          P && (L || v(), L && a("open:subtasks-modal"))
        },
        d = R(() => t.task.kind === V.GROUP ? !0 : !t.task.reward.isZero()),
        r = R(() => {
          var b, A;
          if (!d.value) return "";
          if ((t.task.kind === V.QUEST && t.task.reward.isZero() || t.task.kind === V.GROUP) && "subTasks" in t.task) {
            const h = ((b = t.task.subTasks) == null ? void 0 : b.reduce((L, Y) => L.add(Y.reward), new ve(0))) ?? new ve(0),
              P = ((A = t.task.subTasks) == null ? void 0 : A.reduce((L, Y) => X(Y.status, s.value) ? L.add(Y.reward) : L, new ve(0))) ?? new ve(0);
            return `+${se(P)}/${se(h)} BP`
          }
          return `+${se(t.task.reward)} BP`
        }),
        m = D(),
        k = D(!1),
        $ = () => {
          const b = () => {
            t.task.kind !== V.ONGOING && (Z(t.task.kind) || (v(), t.task.type !== F.WALLET_CONNECTION && t.task.type !== F.ONCHAIN_TRANSACTION && (t.task.type === F.INTERNAL && t.task.subType === Oe.SHARE_STORIES || t.startCallback())))
          };
          if (t.task.isDisclaimerRequired) {
            m.value = {
              startFn: b
            };
            return
          }
          b()
        },
        w = R(() => {
          if (t.task.type === F.PROGRESS_TARGET) {
            const b = Re(t.task.progressTarget, "progress target"),
              A = Ae(b.target, {
                accuracy: b.accuracy
              });
            return `${t.task.title} ${A}${b.postfix?` ${b.postfix}`:""}`
          }
          return t.task.title
        }),
        T = R(() => {
          if (t.questDetails) return {
            label: `${t.questDetails.countFinished}/${t.questDetails.countTotal}`,
            postfix: ` ${_("base.n.tasks",t.questDetails.countTotal)}`,
            finished: t.questDetails.countFinished,
            total: t.questDetails.countTotal,
            done: t.questDetails.countFinished === t.questDetails.countTotal
          };
          if (t.task.type === F.PROGRESS_TARGET && t.task.progressTarget) {
            const b = Re(t.task.progressTarget, "progress target"),
              A = Ae(b.progress, {
                accuracy: b.accuracy
              }),
              h = Ae(b.target, {
                accuracy: b.accuracy
              });
            return {
              label: `${A}/${h}`,
              postfix: `${b.postfix?` ${b.postfix}`:""}`,
              finished: b.progress.toNumber(),
              total: b.target.toNumber(),
              done: b.progress === b.target
            }
          }
        }),
        y = R(() => ({
          onClick: f,
          rewardText: r,
          startProxy: $,
          title: w,
          progress: T,
          openVerify: () => k.value = !0
        })),
        g = R(() => {
          if (k.value) return () => k.value = !1
        });
      return oe(g, b => Me().meta.back = b), (b, A) => {
        var Y;
        const h = Zt,
          P = na,
          L = Aa;
        return u(), S(K, null, [ae(b.$slots, "default", nt(it(n(y)))), E(h, {
          "model-value": !!n(m),
          "product-name": e.task.productName,
          "icon-url": n(ce)(e.task.iconFileKey),
          "start-fn": (Y = n(m)) == null ? void 0 : Y.startFn,
          "onUpdate:modelValue": A[0] || (A[0] = me => me ? void 0 : m.value = void 0)
        }, null, 8, ["model-value", "product-name", "icon-url", "start-fn"]), n(k) ? (u(), I(P, {
          key: 0,
          task: e.task,
          "verify-callback": e.verifyCallback,
          onDoAction: A[1] || (A[1] = me => v()),
          onClose: A[2] || (A[2] = me => k.value = !1)
        }, null, 8, ["task", "verify-callback"])) : O("", !0), n(o) ? (u(), I(L, {
          key: 1,
          onClose: A[3] || (A[3] = me => o.value = !1),
          onSuccess: p
        })) : O("", !0)], 64)
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
      const l = G(e, "claimOverride");
      return (t, a) => {
        const s = $e,
          c = Le,
          i = le("img-error");
        return u(), I(c, {
          "claim-override": l.value,
          "onUpdate:claimOverride": a[4] || (a[4] = o => l.value = o),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": a[5] || (a[5] = o => t.$emit("open:subtasks-modal"))
        }, {
          default: N(({
            onClick: o,
            rewardText: p,
            startProxy: v,
            title: f,
            progress: d,
            openVerify: r
          }) => {
            var m;
            return [C("div", rt({
              class: "pages-tasks-list-item-label"
            }, t.$attrs, {
              onClick: o
            }), [C("div", {
              class: J(["container", {
                "no-border": e.noBorder
              }])
            }, [re(C("img", {
              src: n(ce)(e.task.iconFileKey),
              alt: "Task icon"
            }, null, 8, Ia), [
              [i]
            ]), C("div", Oa, [C("div", wa, U(f.value), 1), d.value || p.value ? (u(), S("div", $a, [(m = d.value) != null && m.label ? (u(), S("span", Ra, U(`${d.value.label}${d.value.postfix}`) + U(p.value ? ", " : ""), 1)) : O("", !0), p.value ? (u(), S("span", _a, U(p.value), 1)) : O("", !0)])) : O("", !0)]), e.task.status ? (u(), I(s, {
              key: 0,
              "claim-override": l.value,
              "onUpdate:claimOverride": a[0] || (a[0] = k => l.value = k),
              status: e.task.status,
              kind: e.task.kind,
              "start-callback": v,
              "claim-callback": e.claimCallback,
              "is-nested": e.isNested,
              "item-mode": e.itemMode,
              class: "pill-btn",
              "onUi:claimed": a[1] || (a[1] = k => t.$emit("ui:claimed")),
              "onOpen:subtasksModal": a[2] || (a[2] = k => t.$emit("open:subtasks-modal")),
              "onOpen:verify": r,
              onClick: a[3] || (a[3] = k => t.$emit("pill:click"))
            }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "is-nested", "item-mode", "onOpen:verify"])) : O("", !0)], 2)], 16, Sa)]
          }),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  xe = q(Ea, [
    ["__scopeId", "data-v-61588e22"]
  ]),
  Ba = {
    class: "label"
  },
  Se = 185.074,
  Na = M({
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
        default: ie.DARK
      }
    },
    setup(e) {
      ct(a => ({
        b63fb046: Se,
        "0e5a5f8f": n(t)
      }));
      const l = e,
        t = R(() => Se - Se * (l.finished / l.total));
      return (a, s) => {
        const c = ee;
        return u(), S("div", {
          class: J(["pages-tasks-progress-pill", `is-${e.mode}`])
        }, [C("span", Ba, U(e.label), 1), E(c, {
          name: "special/progress-pill",
          class: "icon"
        })], 2)
      }
    }
  }),
  Da = q(Na, [
    ["__scopeId", "data-v-293728e0"]
  ]),
  Ma = ["onClick"],
  qa = {
    key: 0,
    class: "icons"
  },
  Ua = ["src"],
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
      const l = e,
        t = R(() => !l.short),
        a = R(() => l.short ? ie.LIGHT : ie.DARK),
        s = R(() => {
          var o;
          return l.task.kind === V.GROUP ? ((o = l.task.subTasks) == null ? void 0 : o.map(p => p.iconFileKey)) ?? [] : [l.task.iconFileKey]
        }),
        c = G(e, "claimOverride"),
        i = R(() => {
          if (l.short) return;
          if (l.task.color) return l.task.color;
          const o = ["#B9BBBC", "#BCABA6", "#BAAFC3", "#BEC0CB", "#C3BFB3"];
          return o[l.colorMode % o.length]
        });
      return (o, p) => {
        const v = $e,
          f = ee,
          d = Da,
          r = Le,
          m = le("img-error");
        return u(), I(r, {
          "claim-override": c.value,
          "onUpdate:claimOverride": p[4] || (p[4] = k => c.value = k),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": p[5] || (p[5] = k => o.$emit("open:subtasks-modal"))
        }, {
          default: N(({
            onClick: k,
            startProxy: $,
            title: w,
            progress: T,
            openVerify: y,
            rewardText: g
          }) => [C("div", {
            class: J(["pages-tasks-card", {
              "is-short": e.short
            }]),
            style: ut({
              backgroundColor: n(i)
            }),
            onClick: k
          }, [n(t) ? (u(), S("div", qa, [(u(!0), S(K, null, W(n(s), (b, A) => re((u(), S("img", {
            key: A,
            src: n(ce)(b),
            alt: "Task icon",
            class: "icon",
            width: "48",
            height: "48"
          }, null, 8, Ua)), [
            [m]
          ])), 128))])) : O("", !0), C("div", Pa, U(w.value), 1), g.value ? (u(), S("div", La, U(g.value), 1)) : O("", !0), C("div", xa, [e.task.status ? (u(), I(v, {
            key: 0,
            "claim-override": c.value,
            "onUpdate:claimOverride": p[0] || (p[0] = b => c.value = b),
            status: e.task.status,
            kind: e.task.kind,
            "start-callback": $,
            "claim-callback": e.claimCallback,
            "is-nested": !1,
            mode: n(a),
            "item-mode": e.itemMode,
            "onUi:claimed": p[1] || (p[1] = b => o.$emit("ui:claimed")),
            "onOpen:subtasksModal": p[2] || (p[2] = b => o.$emit("open:subtasks-modal")),
            "onOpen:verify": y,
            onClick: p[3] || (p[3] = b => o.$emit("pill:click"))
          }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "mode", "item-mode", "onOpen:verify"])) : O("", !0), T.value ? (u(), S(K, {
            key: 1
          }, [T.value.done ? (u(), I(f, {
            key: 0,
            name: "circle-check-white",
            class: "done-icon"
          })) : (u(), I(d, {
            key: 1,
            finished: T.value.finished,
            total: T.value.total,
            label: T.value.label,
            mode: n(a)
          }, null, 8, ["finished", "total", "label", "mode"]))], 64)) : O("", !0)])], 14, Ma)]),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  Ka = q(Fa, [
    ["__scopeId", "data-v-d82f927b"]
  ]),
  Fe = () => {
    const e = dt("tasks-open-sheet");
    return {
      openTaskSheet: a => {
        e.emit(a.id)
      },
      onOpenTaskSheet: (a, s) => {
        e.subscribe(c => {
          a.id === c && s()
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
      const l = e,
        t = G(e, "modelValue"),
        a = G(e, "tasksClaimOverride"),
        s = R(() => l.task.kind === V.QUEST);
      ye().getReferralToken();
      const c = () => {
          t.value = !1, p.value = !0
        },
        i = () => {
          p.value = !1, t.value = !0
        },
        o = D(l.task.isShared),
        p = D(!1),
        v = R(() => _("earn.quest.share.text")),
        f = R(() => `tasksheet_${btoa(l.task.id)}-ref_${ye().referralToken.value}`);
      return Fe().onOpenTaskSheet(l.task, () => {
        t.value = !0
      }), (d, r) => {
        const m = ee,
          k = Rt,
          $ = xe,
          w = $e,
          T = Be,
          y = kt;
        return u(), S(K, null, [E(T, {
          modelValue: t.value,
          "onUpdate:modelValue": r[3] || (r[3] = g => t.value = g),
          title: e.title
        }, mt({
          default: N(() => [C("div", {
            class: J(["pages-tasks-subtasks-modal", {
              "has-share": n(o)
            }])
          }, [n(o) ? (u(), S("button", {
            key: 0,
            type: "button",
            class: "reset share-btn",
            onClick: c
          }, [E(m, {
            name: "share",
            class: "icon"
          }), r[5] || (r[5] = C("div", {
            class: "labe"
          }, "Invite and earn up to 8% revshare", -1))])) : O("", !0), e.task.bannerFileKey || e.task.description ? (u(), S("div", Va, [e.task.bannerFileKey ? (u(), I(k, {
            key: 0,
            url: n(ce)(e.task.bannerFileKey),
            alt: "Task banner",
            class: "banner"
          }, null, 8, ["url"])) : O("", !0), e.task.description ? (u(), S("div", Ga, U(e.task.description), 1)) : O("", !0)])) : O("", !0), e.task.subTasks ? (u(), I(we, {
            key: 2,
            tag: "div",
            name: "list-shuffle-transition",
            class: "nested-tasks"
          }, {
            default: N(() => [(u(!0), S(K, null, W(e.task.subTasks, (g, b) => (u(), I($, {
              key: g.id,
              "claim-override": a.value[g.id],
              "onUpdate:claimOverride": A => a.value[g.id] = A,
              task: g,
              "start-callback": () => e.startSubTaskCallback(g),
              "claim-callback": () => e.claimCallback(g),
              "verify-callback": A => e.verifyCallback(g, A),
              "no-border": b === e.task.subTasks.length - 1,
              "item-mode": n(x).LIST_ITEM,
              "is-nested": "",
              "onUi:claimed": A => d.$emit("ui:claimed", {
                task: g,
                isQuest: !1
              }),
              onClick: A => d.$emit("click:task", g),
              "onPill:click": A => d.$emit("pill:click", g)
            }, null, 8, ["claim-override", "onUpdate:claimOverride", "task", "start-callback", "claim-callback", "verify-callback", "no-border", "item-mode", "onUi:claimed", "onClick", "onPill:click"]))), 128))]),
            _: 1
          })) : O("", !0)], 2)]),
          _: 2
        }, [n(s) ? {
          name: "footer",
          fn: N(() => [e.task.status && !n(X)(e.task.status, a.value[e.task.id]) ? (u(), I(w, {
            key: 0,
            "claim-override": a.value[e.task.id],
            "onUpdate:claimOverride": r[0] || (r[0] = g => a.value[e.task.id] = g),
            "is-quest-button": "",
            status: e.task.status,
            kind: e.task.kind,
            reward: e.task.reward,
            "start-callback": () => {},
            "claim-callback": () => e.claimCallback(e.task),
            "item-mode": e.itemMode,
            "onUi:claimed": r[1] || (r[1] = g => d.$emit("ui:claimed", {
              task: e.task,
              isQuest: !0
            })),
            onClick: r[2] || (r[2] = g => d.$emit("pill:click", e.task))
          }, null, 8, ["claim-override", "status", "kind", "reward", "claim-callback", "item-mode"])) : O("", !0)]),
          key: "0"
        } : void 0]), 1032, ["modelValue", "title"]), E(y, {
          modelValue: n(p),
          "onUpdate:modelValue": r[4] || (r[4] = g => ue(p) ? p.value = g : null),
          title: ("t" in d ? d.t : n(_))("earn.quest.share.sheet.title"),
          "share-text": n(v),
          subtitle: e.task.sharingDescription,
          startapp: n(f),
          "copied-notification": ("t" in d ? d.t : n(_))("frens.invite.link_copied"),
          "back-icon": "",
          onBack: i
        }, null, 8, ["modelValue", "title", "share-text", "subtitle", "startapp", "copied-notification"])], 64)
      }
    }
  }),
  Wa = q(Ha, [
    ["__scopeId", "data-v-84322842"]
  ]),
  Ya = M({
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
        default: x.LIST_ITEM
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
      emit: l
    }) {
      const t = e,
        a = l,
        s = G(e, "tasksClaimOverride"),
        c = D(!1),
        i = D(void 0),
        o = R(() => {
          var d, r;
          if (!Z(t.task.kind)) return;
          const v = ((d = t.task.subTasks) == null ? void 0 : d.length) ?? 0,
            f = ((r = t.task.subTasks) == null ? void 0 : r.filter(m => X(m.status, s.value[m.id])).length) ?? 0;
          return {
            countTotal: v,
            countFinished: f,
            progressLabel: `${f}/${v} ${_("base.n.tasks",v)}`,
            modalTitle: `${t.task.title} ${f}/${v}`
          }
        }),
        p = v => {
          v.isQuest ? c.value = !1 : a("request:update"), a("ui:claimed", v.task)
        };
      return pt(() => {
        i.value && a("mounted", i.value)
      }), de(() => {
        i.value && a("unmounted", i.value)
      }), (v, f) => {
        const d = xe,
          r = Ka,
          m = Wa;
        return u(), S("div", {
          ref_key: "taskItemEl",
          ref: i,
          class: "pages-tasks-item"
        }, [e.mode === n(x).LIST_ITEM ? (u(), I(d, {
          key: 0,
          "claim-override": s.value[e.task.id],
          "onUpdate:claimOverride": f[0] || (f[0] = k => s.value[e.task.id] = k),
          task: e.task,
          "quest-details": n(o),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": k => e.verifyCallback(e.task, k),
          "item-mode": e.mode,
          "onUi:claimed": f[1] || (f[1] = k => v.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": f[2] || (f[2] = k => c.value = !0),
          "onPill:click": f[3] || (f[3] = k => v.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "item-mode"])) : e.mode === n(x).SHORT_CARD || e.mode === n(x).CARD ? (u(), I(r, {
          key: 1,
          "claim-override": s.value[e.task.id],
          "onUpdate:claimOverride": f[4] || (f[4] = k => s.value[e.task.id] = k),
          task: e.task,
          "quest-details": n(o),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": k => e.verifyCallback(e.task, k),
          short: e.mode === n(x).SHORT_CARD,
          "color-mode": e.idx,
          "item-mode": e.mode,
          "onUi:claimed": f[5] || (f[5] = k => v.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": f[6] || (f[6] = k => c.value = !0),
          "onPill:click": f[7] || (f[7] = k => v.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "short", "color-mode", "item-mode"])) : O("", !0), n(o) ? (u(), I(m, {
          key: 2,
          modelValue: n(c),
          "onUpdate:modelValue": f[8] || (f[8] = k => ue(c) ? c.value = k : null),
          "tasks-claim-override": s.value,
          "onUpdate:tasksClaimOverride": f[9] || (f[9] = k => s.value = k),
          task: e.task,
          title: n(o).modalTitle,
          "start-sub-task-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "item-mode": e.mode,
          "onUi:claimed": f[10] || (f[10] = k => p(k)),
          "onPill:click": f[11] || (f[11] = k => v.$emit("pill:click", k))
        }, null, 8, ["modelValue", "tasks-claim-override", "task", "title", "start-sub-task-callback", "claim-callback", "verify-callback", "item-mode"])) : O("", !0)], 512)
      }
    }
  }),
  Ke = q(Ya, [
    ["__scopeId", "data-v-86f27969"]
  ]),
  Qa = M({
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
      const l = e,
        t = G(e, "tasksClaimOverride"),
        a = qe(),
        s = r => [x.SHORT_CARD, x.CARD].includes(l.taskMode) ? l.tasks.some(k => k.id === r.id) : !1,
        c = {},
        i = (r, m) => ({
          source: m + 1,
          kind: r.kind,
          type: r.type,
          title: r.title,
          task_id: r.id,
          ...!Z(r.kind) || !("subTasks" in r) || !r.subTasks ? {
            subtasks_done: X(r.status, t.value[r.id]) ? 1 : 0,
            subtasks_total: 1
          } : {
            subtasks_done: r.subTasks.filter($ => X($.status, t.value[$.id])).length,
            subtasks_total: r.subTasks.length
          }
        }),
        o = (r, m) => {
          if (!s(r)) return;
          c[r.id] || (c[r.id] = !0);
          const k = i(r, m);
          l.taskMode === x.CARD ? a.earn.earnHighlightsTaskShow(k) : l.taskMode === x.SHORT_CARD && a.earn.earnWeeklyTaskShow(k)
        },
        p = (r, m) => {
          if (!s(r)) return;
          c[r.id] || o(r, m);
          const k = i(r, m);
          l.taskMode === x.CARD ? a.earn.earnHighlightsTaskClick(k) : l.taskMode === x.SHORT_CARD && a.earn.earnWeeklyTaskClick(k)
        },
        v = new IntersectionObserver(r => {
          const m = r[0],
            k = m.target.getAttribute("data-task-id");
          if (!k) return;
          const $ = l.tasks.find(g => g.id === k);
          if (!$ || !(m.intersectionRatio >= .5)) return;
          const T = $,
            y = l.tasks.indexOf(T);
          o(T, y)
        }, {
          threshold: .5
        }),
        f = (r, m) => {
          s(r) && v.observe(m)
        },
        d = (r, m) => {
          s(r) && v.unobserve(m)
        };
      return de(() => v.disconnect()), (r, m) => {
        const k = Ke,
          $ = le("horizontal-wheel-scroll");
        return re((u(), I(we, {
          tag: "div",
          name: "list-shuffle-transition",
          class: J(["pages-tasks-list", `is-${e.taskMode.toLowerCase()}`])
        }, {
          default: N(() => [(u(!0), S(K, null, W(e.tasks, (w, T) => (u(), I(k, {
            key: w.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": m[0] || (m[0] = y => t.value = y),
            task: w,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            mode: e.taskMode,
            idx: T,
            class: "item",
            "data-task-id": w.id,
            "onUi:claimed": m[1] || (m[1] = y => r.$emit("ui:claimed", y)),
            "onRequest:update": m[2] || (m[2] = y => r.$emit("request:update")),
            "onPill:click": y => p(y, T),
            onMounted: y => f(w, y),
            onUnmounted: y => d(w, y)
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback", "mode", "idx", "data-task-id", "onPill:click", "onMounted", "onUnmounted"]))), 128))]),
          _: 1
        }, 8, ["class"])), [
          [$]
        ])
      }
    }
  }),
  za = q(Qa, [
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
  Za = {
    class: "inner"
  },
  Ja = M({
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
      const l = e,
        t = G(e, "tasksClaimOverride"),
        a = R(() => l.subSections.map(o => ({
          value: o.title,
          label: o.title,
          dot: o.tasks.some(p => ft(p, t.value))
        }))),
        s = D((i = a.value[0]) == null ? void 0 : i.value),
        c = R(() => {
          var o;
          return ((o = l.subSections.find(p => p.title === s.value)) == null ? void 0 : o.tasks) ?? []
        });
      return (o, p) => {
        const v = St,
          f = ee,
          d = Ke;
        return n(c).length ? (u(), S("div", ja, [E(v, {
          modelValue: n(s),
          "onUpdate:modelValue": p[0] || (p[0] = r => ue(s) ? s.value = r : null),
          items: n(a)
        }, null, 8, ["modelValue", "items"]), n(c).length ? (u(), I(we, {
          key: n(s),
          tag: "div",
          name: "list-shuffle-transition",
          class: "tasks-list"
        }, {
          default: N(() => [(u(!0), S(K, null, W(n(c), r => (u(), I(d, {
            key: r.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": p[1] || (p[1] = m => t.value = m),
            task: r,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            "onUi:claimed": p[2] || (p[2] = m => o.$emit("ui:claimed", m)),
            "onRequest:update": p[3] || (p[3] = m => o.$emit("request:update"))
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback"]))), 128))]),
          _: 1
        })) : (u(), S("div", Xa, [C("div", Za, [E(f, {
          name: "warning-circle-check",
          class: "icon"
        }), p[4] || (p[4] = C("span", {
          class: "label"
        }, " Hooray! You've nailed every task! ", -1))])]))])) : O("", !0)
      }
    }
  }),
  es = q(Ja, [
    ["__scopeId", "data-v-2fd71113"]
  ]),
  ts = {
    class: "pages-tasks-section"
  },
  as = M({
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
      const l = e,
        t = R(() => vt(l.section)),
        a = G(e, "tasksClaimOverride"),
        s = i => {
          const o = i.tasks,
            p = m => !Ue(m),
            v = m => _e(m, a.value),
            f = m => {
              const k = m.subTasks ? _e(m.subTasks, a.value) : void 0;
              return {
                ...m,
                subTasks: k
              }
            },
            d = m => {
              const k = m.filter(p);
              return v(k).map(f)
            },
            r = m => m.map(k => ({
              ...k,
              tasks: d(k.tasks)
            }));
          return {
            ...i,
            tasks: d(o),
            subSections: r(i.subSections)
          }
        },
        c = R(() => s(l.section));
      return (i, o) => {
        const p = Pt,
          v = za,
          f = es;
        return u(), S("div", ts, [n(c).title || n(c).description ? (u(), I(p, {
          key: 0,
          title: n(c).title,
          subtitle: n(c).description
        }, null, 8, ["title", "subtitle"])) : O("", !0), n(c).tasks.length ? (u(), I(v, {
          key: 1,
          "tasks-claim-override": a.value,
          "onUpdate:tasksClaimOverride": o[0] || (o[0] = d => a.value = d),
          tasks: n(c).tasks,
          "task-mode": n(t),
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": o[1] || (o[1] = d => i.$emit("ui:claimed", d)),
          "onRequest:update": o[2] || (o[2] = d => i.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "tasks", "task-mode", "start-callback", "claim-callback", "verify-callback"])) : O("", !0), E(f, {
          "tasks-claim-override": a.value,
          "onUpdate:tasksClaimOverride": o[3] || (o[3] = d => a.value = d),
          "sub-sections": n(c).subSections,
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": o[4] || (o[4] = d => i.$emit("ui:claimed", d)),
          "onRequest:update": o[5] || (o[5] = d => i.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "sub-sections", "start-callback", "claim-callback", "verify-callback"])])
      }
    }
  }),
  ss = q(as, [
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
      return de(() => clearTimeout(a)), (s, c) => n(t) ? ae(s.$slots, "default", {
        key: 0
      }) : O("", !0)
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
  return u(), I(a, null, {
    default: N(() => [C("div", os, [E(t, {
      class: "title"
    }), C("div", ls, [(u(), S(K, null, W(2, s => E(t, {
      key: s,
      class: "item"
    })), 64))]), C("div", rs, [E(t, {
      class: "subtitle"
    })]), C("div", cs, [(u(), S(K, null, W(2, s => E(t, {
      key: s,
      class: "item"
    })), 64))]), C("div", us, [E(t, {
      class: "subtitle"
    })]), C("div", ds, [(u(), S(K, null, W(7, s => C("div", {
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
const ks = q(is, [
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
      const l = qe(),
        t = R(() => Me().query.openTaskSheetId),
        a = D(!1),
        s = D(),
        c = j().$webApp.dataUnsafe.user,
        i = R(() => {
          if (!s.value) return;
          const y = !!(c != null && c.is_premium) ? g => g : g => g.filter(b => !(b.type === F.INTERNAL && b.subType === Oe.SHARE_STORIES));
          return s.value.map(g => {
            const b = y(g.tasks).map(h => ({
                ...h,
                subTasks: h.subTasks ? y(h.subTasks) : h.subTasks
              })),
              A = g.subSections.map(h => ({
                ...h,
                tasks: y(h.tasks).map(P => ({
                  ...P,
                  subTasks: P.subTasks ? y(P.subTasks) : P.subTasks
                }))
              })).filter(h => h.tasks.length);
            return {
              ...g,
              tasks: b,
              subSections: A
            }
          })
        }),
        o = D({}),
        v = bt(async () => ht(await te.getTasksSections(j().$webApp.dataUnsafe.query.ref)), T => s.value = T, 15e3),
        f = (T, y) => {
          if (i.value)
            for (const g of i.value) {
              const A = [...g.tasks, ...g.tasks.flatMap(h => h.subTasks ?? []), ...g.subSections.flatMap(h => h.tasks ?? [])].filter(h => h.id === T);
              if (A.length) {
                A.forEach(h => {
                  Object.assign(h, y)
                });
                return
              }
            }
        },
        d = async T => {
          const y = await te.startTask(T.id);
          y.err || f(T.id, y.data)
        }, r = async T => {
          const y = await te.claimTask(T.id);
          return y.err ? !1 : (f(T.id, y.data), gt().update(), !0)
        }, m = async (T, y) => {
          const g = await te.verifyTask(T.id, y);
          return g.err ? g.code === 400 ? z.WRONG_KEYWORD : z.UNKNOWN_ERROR : (f(T.id, g.data), z.SUCCESS)
        }, k = T => {
          setTimeout(() => delete o.value[T.id], 3e3), T.reward.isZero() || Tt().success(_("base.you_got_bp", {
            bp: se(T.reward)
          }))
        }, $ = R(() => i.value ? i.value.reduce((y, g) => ([...g.tasks, ...g.tasks.flatMap(h => h.subTasks ?? []), ...g.subSections.flatMap(h => h.tasks ?? [])].filter(h => !X(h.status, o.value[h.id]) && !Ue(h) && h.kind !== V.GROUP).map(h => h.id).forEach(h => y.add(h)), y), new Set).size : 0);
      return (async () => {
        l.earn.earnTaskMainPageOpen(), await v.exec()
      })(), oe(() => [i.value, t.value], () => {
        if (!i.value || !t.value) return;
        Ie().replace({
          query: {}
        });
        const T = i.value.flatMap(y => y.tasks).find(y => y.id === t.value && [V.QUEST, V.GROUP].includes(y.kind));
        T && yt(() => Fe().openTaskSheet(T))
      }), de(() => {
        v.destroy()
      }), (T, y) => {
        const g = Bt,
          b = ss,
          A = ks;
        return u(), S("div", ps, [n(a) ? (u(), I(g, {
          key: 0
        })) : n(i) ? (u(), S(K, {
          key: 1
        }, [C("div", fs, [C("span", vs, [be(U(("t" in T ? T.t : n(_))("earn.title")) + " ", 1), C("sup", null, U(n($)), 1)])]), C("div", bs, [(u(!0), S(K, null, W(n(i), (h, P) => (u(), I(b, {
          key: P,
          "tasks-claim-override": n(o),
          "onUpdate:tasksClaimOverride": y[0] || (y[0] = L => ue(o) ? o.value = L : null),
          section: h,
          "start-callback": d,
          "claim-callback": r,
          "verify-callback": m,
          class: "section",
          "onUi:claimed": y[1] || (y[1] = L => k(L)),
          "onRequest:update": y[2] || (y[2] = L => n(v).exec())
        }, null, 8, ["tasks-claim-override", "section"]))), 128))])], 64)) : (u(), I(A, {
          key: 2
        }))])
      }
    }
  }),
  Es = q(ys, [
    ["__scopeId", "data-v-b80b138c"]
  ]);
export {
  Es as
  default
};