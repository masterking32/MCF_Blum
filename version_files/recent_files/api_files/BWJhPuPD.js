import {
  _ as Be
} from "./OtJXRK85.js";
import {
  d as N,
  a as o,
  m as h,
  e as a,
  a$ as qe,
  P as X,
  j as w,
  u as De,
  c as T,
  t as q,
  g as O,
  F as $,
  cg as G,
  bY as Me,
  f as E,
  x as B,
  aB as j,
  bM as Le,
  B as de,
  C as pe,
  ay as R,
  ch as J,
  az as F,
  ci as x,
  a4 as oe,
  q as Z,
  cj as U,
  ck as ee,
  cl as W,
  cm as Ue,
  L as Se,
  n as z,
  N as Q,
  a7 as Fe,
  M as Pe,
  r as M,
  av as me,
  H as le,
  a8 as ae,
  w as se,
  b as g,
  k as I,
  h as be,
  ar as xe,
  aS as $e,
  cn as H,
  cd as re,
  aY as ie,
  V as ne,
  b9 as Ke,
  b2 as Ve,
  af as ce,
  co as te,
  cp as K,
  cq as Te,
  ai as ke,
  ax as Ie,
  bU as Ge,
  bV as Ye,
  W as L,
  cr as We,
  S as He,
  ap as je,
  cs as ze,
  aJ as Qe,
  X as Y,
  ct as Xe,
  bC as he,
  bQ as Ze,
  b0 as ye,
  aA as Je,
  cu as et,
  cv as tt,
  cw as Ae,
  cx as Ce,
  o as _e,
  a9 as at,
  J as st,
  b7 as it,
  K as ue,
  E as nt,
  G as ot,
  ac as lt
} from "./CRu0zQdy.js";
import {
  _ as rt
} from "./wthjyLEk.js";
import {
  _ as ct,
  a as ut
} from "./BXZB9Ezd.js";
import {
  a as dt
} from "./BWdvII7O.js";
import {
  _ as mt
} from "./cFDpmBI3.js";
import {
  d as ve
} from "./pMUBu7ke.js";
import {
  _ as kt
} from "./BTIJKEJn.js";
import {
  _ as vt
} from "./BEEnBspW.js";
const ft = N({
    __name: "TasksMaintenance",
    setup(e) {
      const d = () => X().$webApp.openTelegramLink("https://t.me/BlumCrypto");
      return (t, s) => {
        const i = Be;
        return o(), h(i, {
          icon: ("imgResolver" in t ? t.imgResolver : a(qe))("emoji/Construction"),
          title: "Maintenance",
          subtitle: "We’re sprucing things up on Blum to bring you an even better experience. Hang tight, we’ll be back before you know it!",
          "button-label": "Visit community",
          onButton: s[0] || (s[0] = k => d())
        }, null, 8, ["icon"])
      }
    }
  }),
  bt = w(ft, [
    ["__scopeId", "data-v-dba006cd"]
  ]),
  pt = {
    class: "pages-tasks-head"
  },
  yt = {
    key: 0,
    class: "title"
  },
  gt = {
    key: 1,
    class: "subtitle"
  },
  Tt = {
    key: 2,
    class: "pokras-bg"
  },
  ht = N({
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
      const d = De().internal.isPokrasTheme;
      return (t, s) => (o(), T("div", pt, [e.title ? (o(), T("div", yt, q(e.title), 1)) : O("", !0), e.subtitle ? (o(), T("div", gt, q(e.subtitle), 1)) : O("", !0), a(d) ? (o(), T("div", Tt)) : O("", !0)]))
    }
  }),
  Ct = w(ht, [
    ["__scopeId", "data-v-4760ce9b"]
  ]),
  Ot = ["disabled"],
  St = N({
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
      const d = e,
        t = $(() => {
          const i = [G.CARD, G.SHORT_CARD].includes(d.itemMode) ? Me.RIGHT : void 0;
          if (d.tooltip === "validation") return {
            text: E("earn.task.verification_indicator_text"),
            alignment: i
          }
        });
      return (s, i) => {
        const k = rt,
          c = pe;
        return a(t) ? (o(), h(k, {
          key: 0,
          class: "tasks-pill-inline",
          fill: "",
          text: a(t).text,
          alignment: a(t).alignment,
          "text-alignment": "left",
          "text-min-width": 130,
          onClick: i[0] || (i[0] = Le(() => {}, ["stop"]))
        }, {
          default: B(() => [j(s.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["text", "alignment"])) : e.isQuestButton ? (o(), h(c, {
          key: 1,
          class: "tasks-fill-full",
          fill: "",
          size: a(de).LARGE,
          disabled: e.disabled,
          onClick: i[1] || (i[1] = l => e.onClick && e.onClick(l))
        }, {
          default: B(() => [j(s.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["size", "disabled"])) : (o(), T("button", {
          key: 2,
          class: "tasks-pill-inline",
          disabled: e.disabled,
          onClick: i[2] || (i[2] = l => e.onClick && e.onClick(l))
        }, [j(s.$slots, "default", {}, void 0, !0)], 8, Ot))
      }
    }
  }),
  $t = w(St, [
    ["__scopeId", "data-v-3aaee1da"]
  ]),
  It = {
    key: 0,
    class: "label"
  },
  At = N({
    __name: "TasksPill",
    props: R({
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
        default: J.DARK
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
    emits: R(["ui:claimed", "open:subtasks-modal", "open:verify"], ["update:claimOverride"]),
    setup(e, {
      emit: d
    }) {
      const t = e,
        s = d,
        i = F(e, "claimOverride"),
        k = $(() => t.status === x.READY_FOR_CLAIM ? oe.DARK : t.status === x.STARTED ? t.mode === J.LIGHT ? oe.DARK : oe.LIGHT : oe.DARK),
        c = $(() => {
          const l = t.reward && !t.reward.isZero() ? E("base.claim_bp", {
              bp: Z(t.reward)
            }) : E("base.claim"),
            n = {
              claimDisabled: {
                label: E("base.claim"),
                cls: "is-disabled",
                disabled: !0
              },
              subtasksModalOpen: {
                label: E("earn.task.buttons.open"),
                cls: "is-status-not-started",
                onClick: () => s("open:subtasks-modal")
              },
              questDisabled: {
                label: l,
                cls: "is-disabled",
                disabled: !0
              }
            };
          if (t.status === x.NOT_STARTED) return t.kind === U.ONGOING ? n.claimDisabled : t.isQuestButton ? n.questDisabled : ee(t.kind) ? n.subtasksModalOpen : {
            label: E("earn.task.buttons.start"),
            cls: "is-status-not-started",
            onClick: () => {
              i.value = W.STARTED, setTimeout(() => i.value === W.STARTED && (i.value = void 0), 15e3), t.startCallback()
            }
          };
          if (t.status === x.STARTED) return t.kind === U.ONGOING ? n.claimDisabled : t.isQuestButton ? n.questDisabled : ee(t.kind) ? n.subtasksModalOpen : i.value === W.STARTED ? {
            loader: !0,
            cls: "is-status-started"
          } : {
            icon: "clock",
            cls: "is-status-started",
            tooltip: "validation"
          };
          if (t.status === x.READY_FOR_VERIFY) return {
            label: E("earn.task.buttons.verify"),
            onClick: v => {
              v.stopPropagation(), s("open:verify")
            },
            cls: "is-status-ready-for-verify"
          };
          if (i.value === W.LOADING) return {
            loader: !0,
            cls: "is-status-ready-for-claim"
          };
          if (i.value === W.DONE) return {
            icon: "circle-check-white",
            cls: "is-status-ready-for-claim"
          };
          if (t.status === x.FINISHED) return {
            icon: "circle-check-white",
            cls: "is-status-finished"
          };
          if (t.status === x.READY_FOR_CLAIM) return {
            label: l,
            cls: "is-status-ready-for-claim",
            onClick: async () => {
              i.value = W.LOADING, await Ue(t.claimCallback, 2e3) ? (i.value = W.DONE, s("ui:claimed")) : i.value = void 0
            }
          };
          throw Se("Unsupported condition")
        });
      return (l, n) => {
        const v = Q,
          S = Fe,
          r = $t;
        return o(), h(r, {
          "on-click": a(c).onClick,
          class: z([
            [a(c).cls, `is-${e.mode}`, {
              "is-quest": e.isQuestButton,
              "is-nested": e.isNested
            }], "pages-tasks-pill"
          ]),
          "is-quest-button": e.isQuestButton,
          disabled: a(c).disabled,
          tooltip: a(c).tooltip,
          "item-mode": e.itemMode
        }, {
          default: B(() => [a(c).label ? (o(), T("div", It, q(a(c).label), 1)) : a(c).icon ? (o(), h(v, {
            key: 1,
            name: a(c).icon,
            class: "icon"
          }, null, 8, ["name"])) : a(c).loader ? (o(), h(S, {
            key: 2,
            size: 16,
            type: a(k)
          }, null, 8, ["type"])) : O("", !0)]),
          _: 1
        }, 8, ["on-click", "class", "is-quest-button", "disabled", "tooltip", "item-mode"])
      }
    }
  }),
  ge = w(At, [
    ["__scopeId", "data-v-61e58124"]
  ]),
  _t = `PREAMBLE
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
  Rt = {
    key: 0,
    class: "pages-tasks-disclaimer-title"
  },
  Et = ["src"],
  Nt = {
    key: 1,
    class: "pages-tasks-disclaimer-title"
  },
  wt = {
    key: 0,
    class: "pages-tasks-disclaimer general"
  },
  Bt = {
    class: "checkbox"
  },
  qt = {
    key: 1,
    class: "pages-tasks-disclaimer details"
  },
  Oe = "community@blum.io",
  Dt = N({
    __name: "TasksDisclaimer",
    props: R({
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
      const d = e,
        t = F(e, "modelValue"),
        {
          copy: s
        } = Pe(),
        i = () => s(Oe),
        k = () => ({
          isAgreed: !1,
          state: "general"
        }),
        c = M(k());
      me(t, S => S && (c.value = k()));
      const l = () => {
          c.value.isAgreed = !0, c.value.state = "general"
        },
        n = () => {
          t.value = !1, d.startFn && d.startFn()
        },
        v = $(() => {
          const S = _t.split(`
`).reduce((r, p) => {
            const m = p.trim();
            if (!m) return r;
            const f = (() => {
              if (m.includes("{{ community_email }}")) {
                const y = m.split("{{ community_email }}");
                return le("p", [y[0], le("span", {
                  class: "as-link",
                  onClick: i
                }, Oe), y[1]])
              }
              return le("p", m)
            })();
            return r.push(f), r
          }, []);
          return le("div", {
            class: "text"
          }, S)
        });
      return (S, r) => {
        const p = ct,
          m = pe,
          f = $e,
          y = ae("img-error");
        return o(), h(f, {
          modelValue: t.value,
          "onUpdate:modelValue": r[4] || (r[4] = C => t.value = C),
          title: "",
          "back-icon": a(c).state === "details",
          "content-key": a(c).state,
          onBack: r[5] || (r[5] = C => a(c).state = "general")
        }, {
          title: B(() => [a(c).state === "general" ? (o(), T("span", Rt, [se(g("img", {
            src: e.iconUrl,
            alt: "Task icon"
          }, null, 8, Et), [
            [y]
          ]), g("span", null, q(e.productName), 1)])) : O("", !0), a(c).state === "details" ? (o(), T("span", Nt, "Disclaimer")) : O("", !0)]),
          default: B(() => [a(c).state === "general" ? (o(), T("div", wt, [r[8] || (r[8] = g("div", {
            class: "text"
          }, [g("p", null, "Nothing in Blum is to be considered as being of promotional nature or aiming at commercial use."), g("p", null, "No material or information which may be made available in Blum shall constitute or be construed as a recommendation, endorsement, offer, invitation or solicitation to enter into any transaction with or purchase any product, or otherwise deal with securities, crypto assets or other products."), g("p", null, "You alone are solely responsible for determining whether any investment, security or any other product or service, is appropriate or suitable for you. You should consult an attorney or tax professional regarding your specific legal or tax situation.")], -1)), g("div", Bt, [I(p, {
            modelValue: a(c).isAgreed,
            "onUpdate:modelValue": r[0] || (r[0] = C => a(c).isAgreed = C)
          }, null, 8, ["modelValue"]), g("span", null, [r[6] || (r[6] = be("By using Blum, you accept the terms of our ")), g("span", {
            class: "as-link",
            onClick: r[1] || (r[1] = C => a(c).state = "details")
          }, "Disclaimer"), r[7] || (r[7] = be("."))])])])) : O("", !0), a(c).state === "details" ? (o(), T("div", qt, [(o(), h(xe(a(v))))])) : O("", !0)]),
          footer: B(() => [a(c).state === "general" ? (o(), h(m, {
            key: 0,
            label: `Go to ${e.productName}`,
            fill: "",
            size: a(de).LARGE,
            tertiary: "",
            disabled: !a(c).isAgreed,
            onClick: r[2] || (r[2] = C => n())
          }, null, 8, ["label", "size", "disabled"])) : O("", !0), a(c).state === "details" ? (o(), h(m, {
            key: 1,
            label: "I agree",
            fill: "",
            size: a(de).LARGE,
            onClick: r[3] || (r[3] = C => l())
          }, null, 8, ["size"])) : O("", !0)]),
          _: 1
        }, 8, ["modelValue", "back-icon", "content-key"])
      }
    }
  }),
  Mt = w(Dt, [
    ["__scopeId", "data-v-845ec11f"]
  ]),
  Lt = {},
  Ut = {
    class: "kit-overlay"
  },
  Ft = {
    class: "content"
  };

function Pt(e, d) {
  return o(), T("div", Ut, [g("div", Ft, [j(e.$slots, "default", {}, void 0, !0)])])
}
const xt = w(Lt, [
    ["render", Pt],
    ["__scopeId", "data-v-98d1f858"]
  ]),
  Kt = {
    class: "pages-tasks-verify"
  },
  Vt = {
    class: "heading"
  },
  Gt = ["src"],
  Yt = {
    class: "title"
  },
  Wt = N({
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
      emit: d
    }) {
      const t = e,
        s = d,
        i = M(""),
        k = M(),
        c = async () => {
          k.value = void 0, k.value = await t.verifyCallback(i.value), k.value === H.SUCCESS && s("close")
        };
      me(i, () => {
        k.value !== void 0 && (k.value = void 0)
      });
      const l = $(() => {
        switch (k.value) {
          case void 0:
            return {
              status: re.REGULAR, caption: E("earn.verify_input.caption.default")
            };
          case H.UNKNOWN_ERROR:
            return {
              status: re.ERROR, caption: E("earn.verify_input.caption.unknown_error")
            };
          case H.WRONG_KEYWORD:
            return {
              status: re.ERROR, caption: E("earn.verify_input.caption.wrong_keyword")
            };
          case H.SUCCESS:
            return {
              status: re.REGULAR
            };
          default:
            throw k.value, Se("Invalid status")
        }
      });
      return (n, v) => {
        const S = Q,
          r = dt,
          p = pe,
          m = mt,
          f = xt,
          y = ae("img-error");
        return o(), h(f, null, {
          default: B(() => [g("div", Kt, [g("div", Vt, [se(g("img", {
            src: a(ie)(e.task.iconFileKey),
            alt: "Task icon",
            class: "task-icon"
          }, null, 8, Gt), [
            [y]
          ]), g("div", Yt, q(e.task.title), 1), I(S, {
            name: "external-link",
            class: "link-icon",
            onClick: v[0] || (v[0] = C => n.$emit("doAction"))
          })]), I(r, {
            modelValue: a(i),
            "onUpdate:modelValue": v[1] || (v[1] = C => ne(i) ? i.value = C : null),
            placeholder: "Keyword",
            label: "Verification",
            status: a(l).status,
            caption: a(l).caption,
            class: "input"
          }, null, 8, ["modelValue", "status", "caption"]), I(m, {
            "ignore-tabs": ""
          }, {
            default: B(() => [I(p, {
              label: "Verify",
              fill: "",
              size: a(de).LARGE,
              onClick: v[2] || (v[2] = C => c())
            }, null, 8, ["size"])]),
            _: 1
          })])]),
          _: 1
        })
      }
    }
  }),
  Ht = w(Wt, [
    ["__scopeId", "data-v-64ea4ace"]
  ]),
  jt = () => {
    const {
      tonConnectUI: e
    } = Ke();
    return {
      sendTransaction: async t => {
        const s = ve.Address.parse(t.address),
          i = {
            validUntil: Math.floor(Date.now() / 1e3) + 360,
            messages: [{
              address: s.toString(),
              amount: ve.toNano(t.amountTON.toString()).toString(),
              payload: (() => {
                if (t.message) return ve.beginCell().storeUint(0, 32).storeStringTail(t.message).endCell().toBoc().toString("base64")
              })()
            }]
          };
        return await e.value.sendTransaction(i)
      }
    }
  },
  Re = N({
    __name: "TasksItemInnerWrapper",
    props: R({
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
    emits: R(["open:subtasks-modal"], ["update:claimOverride"]),
    setup(e, {
      emit: d
    }) {
      const t = e,
        s = d,
        i = F(e, "claimOverride"),
        k = jt(),
        c = Ve(),
        l = () => {
          if ([K.SOCIAL_MEDIA_CHECK, K.SOCIAL_SUBSCRIPTION].includes(t.task.type) && t.task.socialSubscription) {
            const b = t.task.socialSubscription.url;
            t.task.socialSubscription.openInTelegram ? X().$webApp.openTelegramLink(b) : X().$webApp.openLink(b)
          }
          if (t.task.type === K.APPLICATION_LAUNCH && t.task.applicationLaunch && X().$webApp.openTelegramLink(t.task.applicationLaunch.url), t.task.type === K.WALLET_CONNECTION) {
            const b = () => {
              t.task.status === x.NOT_STARTED && t.startCallback()
            };
            c.runConnectionFlow(b)
          }
          if (t.task.type === K.ONCHAIN_TRANSACTION) {
            const b = async () => {
              const u = t.task.onchainTransaction;
              if (t.task.status !== x.NOT_STARTED || !u) return;
              const _ = He().getters.mustGetUser.value.id,
                A = `${t.task.id}:${_}`;
              await k.sendTransaction({
                address: u.address,
                amountTON: u.amount,
                message: A
              }).then(t.startCallback).catch()
            };
            c.runConnectionFlow(b)
          }
        },
        n = () => {
          t.task.status === x.READY_FOR_VERIFY && l();
          const u = te(t.task.status, i.value),
            _ = We(t.task.status),
            A = u || _,
            P = ee(t.task.kind);
          A && (P || l(), P && s("open:subtasks-modal"))
        },
        v = $(() => t.task.kind === U.GROUP ? !0 : !t.task.reward.isZero()),
        S = $(() => {
          var b, u;
          if (!v.value) return "";
          if ((t.task.kind === U.QUEST && t.task.reward.isZero() || t.task.kind === U.GROUP) && "subTasks" in t.task) {
            const _ = ((b = t.task.subTasks) == null ? void 0 : b.reduce((P, V) => P.add(V.reward), new ce(0))) ?? new ce(0),
              A = ((u = t.task.subTasks) == null ? void 0 : u.reduce((P, V) => te(V.status, i.value) ? P.add(V.reward) : P, new ce(0))) ?? new ce(0);
            return `+${Z(A)}/${Z(_)} BP`
          }
          return `+${Z(t.task.reward)} BP`
        }),
        r = M(),
        p = M(!1),
        m = () => {
          const b = () => {
            t.task.kind !== U.ONGOING && (ee(t.task.kind) || (l(), t.task.type !== K.WALLET_CONNECTION && t.task.type !== K.ONCHAIN_TRANSACTION && t.startCallback()))
          };
          if (t.task.isDisclaimerRequired) {
            r.value = {
              startFn: b
            };
            return
          }
          b()
        },
        f = $(() => {
          if (t.task.type === K.PROGRESS_TARGET) {
            const b = Te(t.task.progressTarget, "progress target"),
              u = ke(b.target, {
                accuracy: b.accuracy
              });
            return `${t.task.title} ${u}${b.postfix?` ${b.postfix}`:""}`
          }
          return t.task.title
        }),
        y = $(() => {
          if (t.questDetails) return {
            label: `${t.questDetails.countFinished}/${t.questDetails.countTotal}`,
            postfix: ` ${E("base.n.tasks",t.questDetails.countTotal)}`,
            finished: t.questDetails.countFinished,
            total: t.questDetails.countTotal,
            done: t.questDetails.countFinished === t.questDetails.countTotal
          };
          if (t.task.type === K.PROGRESS_TARGET && t.task.progressTarget) {
            const b = Te(t.task.progressTarget, "progress target"),
              u = ke(b.progress, {
                accuracy: b.accuracy
              }),
              _ = ke(b.target, {
                accuracy: b.accuracy
              });
            return {
              label: `${u}/${_}`,
              postfix: `${b.postfix?` ${b.postfix}`:""}`,
              finished: b.progress.toNumber(),
              total: b.target.toNumber(),
              done: b.progress === b.target
            }
          }
        }),
        C = $(() => ({
          onClick: n,
          rewardText: S,
          startProxy: m,
          title: f,
          progress: y,
          openVerify: () => p.value = !0
        })),
        D = $(() => {
          if (p.value) return () => p.value = !1
        });
      return me(D, b => Ie().meta.back = b), (b, u) => {
        var P;
        const _ = Mt,
          A = Ht;
        return o(), T(L, null, [j(b.$slots, "default", Ge(Ye(a(C)))), I(_, {
          "model-value": !!a(r),
          "product-name": e.task.productName,
          "icon-url": a(ie)(e.task.iconFileKey),
          "start-fn": (P = a(r)) == null ? void 0 : P.startFn,
          "onUpdate:modelValue": u[0] || (u[0] = V => V ? void 0 : r.value = void 0)
        }, null, 8, ["model-value", "product-name", "icon-url", "start-fn"]), a(p) ? (o(), h(A, {
          key: 0,
          task: e.task,
          "verify-callback": e.verifyCallback,
          onDoAction: u[1] || (u[1] = V => l()),
          onClose: u[2] || (u[2] = V => p.value = !1)
        }, null, 8, ["task", "verify-callback"])) : O("", !0)], 64)
      }
    }
  }),
  zt = ["onClick"],
  Qt = ["src"],
  Xt = {
    class: "details"
  },
  Zt = {
    class: "title"
  },
  Jt = {
    key: 0,
    class: "progress-reward"
  },
  ea = {
    key: 0,
    class: "progress"
  },
  ta = {
    key: 1,
    class: "reward"
  },
  aa = N({
    inheritAttrs: !1,
    __name: "TasksListItem",
    props: R({
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
    emits: R(["ui:claimed", "open:subtasks-modal"], ["update:claimOverride"]),
    setup(e) {
      const d = F(e, "claimOverride");
      return (t, s) => {
        const i = ge,
          k = Re,
          c = ae("img-error");
        return o(), h(k, {
          "claim-override": d.value,
          "onUpdate:claimOverride": s[3] || (s[3] = l => d.value = l),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": s[4] || (s[4] = l => t.$emit("open:subtasks-modal"))
        }, {
          default: B(({
            onClick: l,
            rewardText: n,
            startProxy: v,
            title: S,
            progress: r,
            openVerify: p
          }) => {
            var m;
            return [g("div", je({
              class: "pages-tasks-list-item-label"
            }, t.$attrs, {
              onClick: l
            }), [g("div", {
              class: z(["container", {
                "no-border": e.noBorder
              }])
            }, [se(g("img", {
              src: a(ie)(e.task.iconFileKey),
              alt: "Task icon"
            }, null, 8, Qt), [
              [c]
            ]), g("div", Xt, [g("div", Zt, q(S.value), 1), r.value || n.value ? (o(), T("div", Jt, [(m = r.value) != null && m.label ? (o(), T("span", ea, q(`${r.value.label}${r.value.postfix}`) + q(n.value ? ", " : ""), 1)) : O("", !0), n.value ? (o(), T("span", ta, q(n.value), 1)) : O("", !0)])) : O("", !0)]), e.task.status ? (o(), h(i, {
              key: 0,
              "claim-override": d.value,
              "onUpdate:claimOverride": s[0] || (s[0] = f => d.value = f),
              status: e.task.status,
              kind: e.task.kind,
              "start-callback": v,
              "claim-callback": e.claimCallback,
              "is-nested": e.isNested,
              "item-mode": e.itemMode,
              class: "pill-btn",
              "onUi:claimed": s[1] || (s[1] = f => t.$emit("ui:claimed")),
              "onOpen:subtasksModal": s[2] || (s[2] = f => t.$emit("open:subtasks-modal")),
              "onOpen:verify": p
            }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "is-nested", "item-mode", "onOpen:verify"])) : O("", !0)], 2)], 16, zt)]
          }),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  Ee = w(aa, [
    ["__scopeId", "data-v-0f839909"]
  ]),
  sa = {
    class: "label"
  },
  fe = 185.074,
  ia = N({
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
        default: J.DARK
      }
    },
    setup(e) {
      ze(s => ({
        b63fb046: fe,
        "0e5a5f8f": a(t)
      }));
      const d = e,
        t = $(() => fe - fe * (d.finished / d.total));
      return (s, i) => {
        const k = Q;
        return o(), T("div", {
          class: z(["pages-tasks-progress-pill", `is-${e.mode}`])
        }, [g("span", sa, q(e.label), 1), I(k, {
          name: "special/progress-pill",
          class: "icon"
        })], 2)
      }
    }
  }),
  na = w(ia, [
    ["__scopeId", "data-v-293728e0"]
  ]),
  oa = ["onClick"],
  la = {
    key: 0,
    class: "icons"
  },
  ra = ["src"],
  ca = {
    class: "title"
  },
  ua = {
    key: 1,
    class: "points"
  },
  da = {
    class: "footer"
  },
  ma = N({
    __name: "TasksCard",
    props: R({
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
    emits: R(["ui:claimed", "open:subtasks-modal"], ["update:claimOverride"]),
    setup(e) {
      const d = e,
        t = $(() => !d.short),
        s = $(() => d.short ? J.LIGHT : J.DARK),
        i = $(() => {
          var l;
          return d.task.kind === U.GROUP ? ((l = d.task.subTasks) == null ? void 0 : l.map(n => n.iconFileKey)) ?? [] : [d.task.iconFileKey]
        }),
        k = F(e, "claimOverride"),
        c = $(() => {
          if (d.short) return;
          if (d.task.color) return d.task.color;
          const l = ["#B9BBBC", "#BCABA6", "#BAAFC3", "#BEC0CB", "#C3BFB3"];
          return l[d.colorMode % l.length]
        });
      return (l, n) => {
        const v = ge,
          S = Q,
          r = na,
          p = Re,
          m = ae("img-error");
        return o(), h(p, {
          "claim-override": k.value,
          "onUpdate:claimOverride": n[3] || (n[3] = f => k.value = f),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": n[4] || (n[4] = f => l.$emit("open:subtasks-modal"))
        }, {
          default: B(({
            onClick: f,
            startProxy: y,
            title: C,
            progress: D,
            openVerify: b,
            rewardText: u
          }) => [g("div", {
            class: z(["pages-tasks-card", {
              "is-short": e.short
            }]),
            style: Qe({
              backgroundColor: a(c)
            }),
            onClick: f
          }, [a(t) ? (o(), T("div", la, [(o(!0), T(L, null, Y(a(i), (_, A) => se((o(), T("img", {
            key: A,
            src: a(ie)(_),
            alt: "Task icon",
            class: "icon",
            width: "48",
            height: "48"
          }, null, 8, ra)), [
            [m]
          ])), 128))])) : O("", !0), g("div", ca, q(C.value), 1), u.value ? (o(), T("div", ua, q(u.value), 1)) : O("", !0), g("div", da, [e.task.status ? (o(), h(v, {
            key: 0,
            "claim-override": k.value,
            "onUpdate:claimOverride": n[0] || (n[0] = _ => k.value = _),
            status: e.task.status,
            kind: e.task.kind,
            "start-callback": y,
            "claim-callback": e.claimCallback,
            "is-nested": !1,
            mode: a(s),
            "item-mode": e.itemMode,
            "onUi:claimed": n[1] || (n[1] = _ => l.$emit("ui:claimed")),
            "onOpen:subtasksModal": n[2] || (n[2] = _ => l.$emit("open:subtasks-modal")),
            "onOpen:verify": b
          }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "mode", "item-mode", "onOpen:verify"])) : O("", !0), D.value ? (o(), T(L, {
            key: 1
          }, [D.value.done ? (o(), h(S, {
            key: 0,
            name: "circle-check-white",
            class: "done-icon"
          })) : (o(), h(r, {
            key: 1,
            finished: D.value.finished,
            total: D.value.total,
            label: D.value.label,
            mode: a(s)
          }, null, 8, ["finished", "total", "label", "mode"]))], 64)) : O("", !0)])], 14, oa)]),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  ka = w(ma, [
    ["__scopeId", "data-v-7cdfea8a"]
  ]),
  Ne = () => {
    const e = Xe("tasks-open-sheet");
    return {
      openTaskSheet: s => {
        e.emit(s.id)
      },
      onOpenTaskSheet: (s, i) => {
        e.subscribe(k => {
          s.id === k && i()
        })
      }
    }
  },
  va = {
    key: 1,
    class: "heading"
  },
  fa = {
    key: 1,
    class: "description"
  },
  ba = N({
    __name: "TasksSubtasksModal",
    props: R({
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
    emits: R(["ui:claimed", "click:task"], ["update:modelValue", "update:tasksClaimOverride"]),
    setup(e) {
      const d = e,
        t = F(e, "modelValue"),
        s = F(e, "tasksClaimOverride"),
        i = $(() => d.task.kind === U.QUEST);
      he().getReferralToken();
      const k = () => {
          t.value = !1, n.value = !0
        },
        c = () => {
          n.value = !1, t.value = !0
        },
        l = M(d.task.isShared),
        n = M(!1),
        v = $(() => E("earn.quest.share.text")),
        S = $(() => `tasksheet_${btoa(d.task.id)}-ref_${he().referralToken.value}`);
      return Ne().onOpenTaskSheet(d.task, () => {
        t.value = !0
      }), (r, p) => {
        const m = Q,
          f = kt,
          y = Ee,
          C = ge,
          D = $e,
          b = Je;
        return o(), T(L, null, [I(D, {
          modelValue: t.value,
          "onUpdate:modelValue": p[2] || (p[2] = u => t.value = u),
          title: e.title
        }, Ze({
          default: B(() => [g("div", {
            class: z(["pages-tasks-subtasks-modal", {
              "has-share": a(l)
            }])
          }, [a(l) ? (o(), T("button", {
            key: 0,
            type: "button",
            class: "reset share-btn",
            onClick: k
          }, [I(m, {
            name: "share",
            class: "icon"
          }), p[4] || (p[4] = g("div", {
            class: "labe"
          }, "Invite and earn up to 8% revshare", -1))])) : O("", !0), e.task.bannerFileKey || e.task.description ? (o(), T("div", va, [e.task.bannerFileKey ? (o(), h(f, {
            key: 0,
            url: a(ie)(e.task.bannerFileKey),
            alt: "Task banner",
            class: "banner"
          }, null, 8, ["url"])) : O("", !0), e.task.description ? (o(), T("div", fa, q(e.task.description), 1)) : O("", !0)])) : O("", !0), e.task.subTasks ? (o(), h(ye, {
            key: 2,
            tag: "div",
            name: "list-shuffle-transition",
            class: "nested-tasks"
          }, {
            default: B(() => [(o(!0), T(L, null, Y(e.task.subTasks, (u, _) => (o(), h(y, {
              key: u.id,
              "claim-override": s.value[u.id],
              "onUpdate:claimOverride": A => s.value[u.id] = A,
              task: u,
              "start-callback": () => e.startSubTaskCallback(u),
              "claim-callback": () => e.claimCallback(u),
              "verify-callback": A => e.verifyCallback(u, A),
              "no-border": _ === e.task.subTasks.length - 1,
              "item-mode": a(G).LIST_ITEM,
              "is-nested": "",
              "onUi:claimed": A => r.$emit("ui:claimed", {
                task: u,
                isQuest: !1
              }),
              onClick: A => r.$emit("click:task", u)
            }, null, 8, ["claim-override", "onUpdate:claimOverride", "task", "start-callback", "claim-callback", "verify-callback", "no-border", "item-mode", "onUi:claimed", "onClick"]))), 128))]),
            _: 1
          })) : O("", !0)], 2)]),
          _: 2
        }, [a(i) ? {
          name: "footer",
          fn: B(() => [e.task.status && !a(te)(e.task.status, s.value[e.task.id]) ? (o(), h(C, {
            key: 0,
            "claim-override": s.value[e.task.id],
            "onUpdate:claimOverride": p[0] || (p[0] = u => s.value[e.task.id] = u),
            "is-quest-button": "",
            status: e.task.status,
            kind: e.task.kind,
            reward: e.task.reward,
            "start-callback": () => {},
            "claim-callback": () => e.claimCallback(e.task),
            "item-mode": e.itemMode,
            "onUi:claimed": p[1] || (p[1] = u => r.$emit("ui:claimed", {
              task: e.task,
              isQuest: !0
            }))
          }, null, 8, ["claim-override", "status", "kind", "reward", "claim-callback", "item-mode"])) : O("", !0)]),
          key: "0"
        } : void 0]), 1032, ["modelValue", "title"]), I(b, {
          modelValue: a(n),
          "onUpdate:modelValue": p[3] || (p[3] = u => ne(n) ? n.value = u : null),
          title: ("t" in r ? r.t : a(E))("earn.quest.share.sheet.title"),
          "share-text": a(v),
          subtitle: e.task.sharingDescription,
          startapp: a(S),
          "copied-notification": ("t" in r ? r.t : a(E))("frens.invite.link_copied"),
          "back-icon": "",
          onBack: c
        }, null, 8, ["modelValue", "title", "share-text", "subtitle", "startapp", "copied-notification"])], 64)
      }
    }
  }),
  pa = w(ba, [
    ["__scopeId", "data-v-472bf202"]
  ]),
  ya = {
    class: "pages-tasks-item"
  },
  ga = N({
    __name: "TasksItem",
    props: R({
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
        default: G.LIST_ITEM
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
    emits: R(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e, {
      emit: d
    }) {
      const t = e,
        s = d,
        i = F(e, "tasksClaimOverride"),
        k = M(!1),
        c = $(() => {
          var S, r;
          if (!ee(t.task.kind)) return;
          const n = ((S = t.task.subTasks) == null ? void 0 : S.length) ?? 0,
            v = ((r = t.task.subTasks) == null ? void 0 : r.filter(p => te(p.status, i.value[p.id])).length) ?? 0;
          return {
            countTotal: n,
            countFinished: v,
            progressLabel: `${v}/${n} ${E("base.n.tasks",n)}`,
            modalTitle: `${t.task.title} ${v}/${n}`
          }
        }),
        l = n => {
          n.isQuest ? k.value = !1 : s("request:update"), s("ui:claimed", n.task)
        };
      return (n, v) => {
        const S = Ee,
          r = ka,
          p = pa;
        return o(), T("div", ya, [e.mode === a(G).LIST_ITEM ? (o(), h(S, {
          key: 0,
          "claim-override": i.value[e.task.id],
          "onUpdate:claimOverride": v[0] || (v[0] = m => i.value[e.task.id] = m),
          task: e.task,
          "quest-details": a(c),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": m => e.verifyCallback(e.task, m),
          "item-mode": e.mode,
          "onUi:claimed": v[1] || (v[1] = m => n.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": v[2] || (v[2] = m => k.value = !0)
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "item-mode"])) : e.mode === a(G).SHORT_CARD || e.mode === a(G).CARD ? (o(), h(r, {
          key: 1,
          "claim-override": i.value[e.task.id],
          "onUpdate:claimOverride": v[3] || (v[3] = m => i.value[e.task.id] = m),
          task: e.task,
          "quest-details": a(c),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": m => e.verifyCallback(e.task, m),
          short: e.mode === a(G).SHORT_CARD,
          "color-mode": e.idx,
          "item-mode": e.mode,
          "onUi:claimed": v[4] || (v[4] = m => n.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": v[5] || (v[5] = m => k.value = !0)
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "short", "color-mode", "item-mode"])) : O("", !0), a(c) ? (o(), h(p, {
          key: 2,
          modelValue: a(k),
          "onUpdate:modelValue": v[6] || (v[6] = m => ne(k) ? k.value = m : null),
          "tasks-claim-override": i.value,
          "onUpdate:tasksClaimOverride": v[7] || (v[7] = m => i.value = m),
          task: e.task,
          title: a(c).modalTitle,
          "start-sub-task-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "item-mode": e.mode,
          "onUi:claimed": v[8] || (v[8] = m => l(m))
        }, null, 8, ["modelValue", "tasks-claim-override", "task", "title", "start-sub-task-callback", "claim-callback", "verify-callback", "item-mode"])) : O("", !0)])
      }
    }
  }),
  we = w(ga, [
    ["__scopeId", "data-v-cd5a9bc3"]
  ]),
  Ta = N({
    __name: "TasksList",
    props: R({
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
    emits: R(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      const d = F(e, "tasksClaimOverride");
      return (t, s) => {
        const i = we,
          k = ae("horizontal-wheel-scroll");
        return se((o(), h(ye, {
          tag: "div",
          name: "list-shuffle-transition",
          class: z(["pages-tasks-list", `is-${e.taskMode.toLowerCase()}`])
        }, {
          default: B(() => [(o(!0), T(L, null, Y(e.tasks, (c, l) => (o(), h(i, {
            key: c.id,
            "tasks-claim-override": d.value,
            "onUpdate:tasksClaimOverride": s[0] || (s[0] = n => d.value = n),
            task: c,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            mode: e.taskMode,
            idx: l,
            class: "item",
            "onUi:claimed": s[1] || (s[1] = n => t.$emit("ui:claimed", n)),
            "onRequest:update": s[2] || (s[2] = n => t.$emit("request:update"))
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback", "mode", "idx"]))), 128))]),
          _: 1
        }, 8, ["class"])), [
          [k]
        ])
      }
    }
  }),
  ha = w(Ta, [
    ["__scopeId", "data-v-d33bf330"]
  ]),
  Ca = {
    key: 0,
    class: "pages-tasks-sub-sections"
  },
  Oa = {
    key: 0,
    class: "empty"
  },
  Sa = {
    class: "inner"
  },
  $a = N({
    __name: "TasksSubSections",
    props: R({
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
    emits: R(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      var c;
      const d = e,
        t = F(e, "tasksClaimOverride"),
        s = $(() => d.subSections.map(l => ({
          value: l.title,
          label: l.title,
          dot: l.tasks.some(n => et(n, t.value))
        }))),
        i = M((c = s.value[0]) == null ? void 0 : c.value),
        k = $(() => {
          var l;
          return ((l = d.subSections.find(n => n.title === i.value)) == null ? void 0 : l.tasks) ?? []
        });
      return (l, n) => {
        const v = ut,
          S = Q,
          r = we;
        return a(k).length ? (o(), T("div", Ca, [I(v, {
          modelValue: a(i),
          "onUpdate:modelValue": n[0] || (n[0] = p => ne(i) ? i.value = p : null),
          items: a(s)
        }, null, 8, ["modelValue", "items"]), a(k).length ? (o(), h(ye, {
          key: a(i),
          tag: "div",
          name: "list-shuffle-transition",
          class: "tasks-list"
        }, {
          default: B(() => [(o(!0), T(L, null, Y(a(k), p => (o(), h(r, {
            key: p.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": n[1] || (n[1] = m => t.value = m),
            task: p,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            "onUi:claimed": n[2] || (n[2] = m => l.$emit("ui:claimed", m)),
            "onRequest:update": n[3] || (n[3] = m => l.$emit("request:update"))
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback"]))), 128))]),
          _: 1
        })) : (o(), T("div", Oa, [g("div", Sa, [I(S, {
          name: "warning-circle-check",
          class: "icon"
        }), n[4] || (n[4] = g("span", {
          class: "label"
        }, " Hooray! You've nailed every task! ", -1))])]))])) : O("", !0)
      }
    }
  }),
  Ia = w($a, [
    ["__scopeId", "data-v-2fd71113"]
  ]),
  Aa = {
    class: "pages-tasks-section"
  },
  _a = N({
    __name: "TasksSection",
    props: R({
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
    emits: R(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      const d = e,
        t = $(() => tt(d.section)),
        s = F(e, "tasksClaimOverride"),
        i = c => {
          const l = c.tasks,
            n = m => !Ae(m),
            v = m => Ce(m, s.value),
            S = m => {
              const f = m.subTasks ? Ce(m.subTasks, s.value) : void 0;
              return {
                ...m,
                subTasks: f
              }
            },
            r = m => {
              const f = m.filter(n);
              return v(f).map(S)
            },
            p = m => m.map(f => ({
              ...f,
              tasks: r(f.tasks)
            }));
          return {
            ...c,
            tasks: r(l),
            subSections: p(c.subSections)
          }
        },
        k = $(() => i(d.section));
      return (c, l) => {
        const n = Ct,
          v = ha,
          S = Ia;
        return o(), T("div", Aa, [a(k).title || a(k).description ? (o(), h(n, {
          key: 0,
          title: a(k).title,
          subtitle: a(k).description
        }, null, 8, ["title", "subtitle"])) : O("", !0), a(k).tasks.length ? (o(), h(v, {
          key: 1,
          "tasks-claim-override": s.value,
          "onUpdate:tasksClaimOverride": l[0] || (l[0] = r => s.value = r),
          tasks: a(k).tasks,
          "task-mode": a(t),
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": l[1] || (l[1] = r => c.$emit("ui:claimed", r)),
          "onRequest:update": l[2] || (l[2] = r => c.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "tasks", "task-mode", "start-callback", "claim-callback", "verify-callback"])) : O("", !0), I(S, {
          "tasks-claim-override": s.value,
          "onUpdate:tasksClaimOverride": l[3] || (l[3] = r => s.value = r),
          "sub-sections": a(k).subSections,
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": l[4] || (l[4] = r => c.$emit("ui:claimed", r)),
          "onRequest:update": l[5] || (l[5] = r => c.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "sub-sections", "start-callback", "claim-callback", "verify-callback"])])
      }
    }
  }),
  Ra = w(_a, [
    ["__scopeId", "data-v-2f6edcc7"]
  ]),
  Ea = N({
    __name: "PageSkeleton",
    props: {
      delay: {
        type: Number,
        default: 120
      }
    },
    setup(e) {
      const d = e,
        t = M(!1),
        s = setTimeout(() => t.value = !0, d.delay);
      return _e(() => clearTimeout(s)), (i, k) => a(t) ? j(i.$slots, "default", {
        key: 0
      }) : O("", !0)
    }
  }),
  Na = {},
  wa = {
    class: "pages-tasks-skeleton"
  },
  Ba = {
    class: "cards"
  },
  qa = {
    class: "subtitle-wrapper"
  },
  Da = {
    class: "short-cards"
  },
  Ma = {
    class: "subtitle-wrapper"
  },
  La = {
    class: "list-items"
  };

function Ua(e, d) {
  const t = vt,
    s = Ea;
  return o(), h(s, null, {
    default: B(() => [g("div", wa, [I(t, {
      class: "title"
    }), g("div", Ba, [(o(), T(L, null, Y(2, i => I(t, {
      key: i,
      class: "item"
    })), 64))]), g("div", qa, [I(t, {
      class: "subtitle"
    })]), g("div", Da, [(o(), T(L, null, Y(2, i => I(t, {
      key: i,
      class: "item"
    })), 64))]), g("div", Ma, [I(t, {
      class: "subtitle"
    })]), g("div", La, [(o(), T(L, null, Y(7, i => g("div", {
      key: i,
      class: "item"
    }, [I(t, {
      class: "icon"
    }), I(t, {
      class: "details"
    }), I(t, {
      class: "points",
      rounded: ""
    })])), 64))])])]),
    _: 1
  })
}
const Fa = w(Na, [
    ["render", Ua],
    ["__scopeId", "data-v-4fe8da9f"]
  ]),
  Pa = {
    class: "tasks-page page"
  },
  xa = {
    class: "header"
  },
  Ka = {
    class: "title"
  },
  Va = {
    class: "sections"
  },
  Ga = N({
    __name: "tasks",
    setup(e) {
      const d = $(() => Ie().query.openTaskSheetId),
        t = M(!1),
        s = M(),
        i = M({}),
        c = at(async () => lt(await ue.getTasksSections(X().$webApp.dataUnsafe.query.ref)), f => s.value = f, 15e3),
        l = (f, y) => {
          if (s.value)
            for (const C of s.value) {
              const b = [...C.tasks, ...C.tasks.flatMap(u => u.subTasks ?? []), ...C.subSections.flatMap(u => u.tasks ?? [])].filter(u => u.id === f);
              if (b.length) {
                b.forEach(u => {
                  Object.assign(u, y)
                });
                return
              }
            }
        },
        n = async f => {
          const y = await ue.startTask(f.id);
          y.err || l(f.id, y.data)
        }, v = async f => {
          const y = await ue.claimTask(f.id);
          return y.err ? !1 : (l(f.id, y.data), nt().updateBalance(), !0)
        }, S = async (f, y) => {
          const C = await ue.verifyTask(f.id, y);
          return C.err ? C.code === 400 ? H.WRONG_KEYWORD : H.UNKNOWN_ERROR : (l(f.id, C.data), H.SUCCESS)
        }, r = f => {
          setTimeout(() => delete i.value[f.id], 3e3), f.reward.isZero() || ot().bottom.success(E("base.you_got_bp", {
            bp: Z(f.reward)
          }))
        }, p = $(() => s.value ? s.value.reduce((y, C) => ([...C.tasks, ...C.tasks.flatMap(u => u.subTasks ?? []), ...C.subSections.flatMap(u => u.tasks ?? [])].filter(u => !te(u.status, i.value[u.id]) && !Ae(u) && u.kind !== U.GROUP).map(u => u.id).forEach(u => y.add(u)), y), new Set).size : 0);
      return (async () => {
        await c.exec()
      })(), me(() => [s.value, d.value], () => {
        if (!s.value || !d.value) return;
        st().replace({
          query: {}
        });
        const f = s.value.flatMap(y => y.tasks).find(y => y.id === d.value && [U.QUEST, U.GROUP].includes(y.kind));
        f && it(() => Ne().openTaskSheet(f))
      }), _e(() => {
        c.destroy()
      }), (f, y) => {
        const C = bt,
          D = Ra,
          b = Fa;
        return o(), T("div", Pa, [a(t) ? (o(), h(C, {
          key: 0
        })) : a(s) ? (o(), T(L, {
          key: 1
        }, [g("div", xa, [g("span", Ka, [be(q(("t" in f ? f.t : a(E))("earn.title")) + " ", 1), g("sup", null, q(a(p)), 1)])]), g("div", Va, [(o(!0), T(L, null, Y(a(s), (u, _) => (o(), h(D, {
          key: _,
          "tasks-claim-override": a(i),
          "onUpdate:tasksClaimOverride": y[0] || (y[0] = A => ne(i) ? i.value = A : null),
          section: u,
          "start-callback": n,
          "claim-callback": v,
          "verify-callback": S,
          class: "section",
          "onUi:claimed": y[1] || (y[1] = A => r(A)),
          "onRequest:update": y[2] || (y[2] = A => a(c).exec())
        }, null, 8, ["tasks-claim-override", "section"]))), 128))])], 64)) : (o(), h(b, {
          key: 2
        }))])
      }
    }
  }),
  es = w(Ga, [
    ["__scopeId", "data-v-44da1525"]
  ]);
export {
  es as
  default
};