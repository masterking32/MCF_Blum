import {
  _ as De
} from "./D7Yf08tA.js";
import {
  d as _,
  o,
  J as S,
  e as a,
  ao as Me,
  h as J,
  f as q,
  y as Le,
  c as O,
  t as M,
  C as $,
  j as A,
  ci as L,
  bm as Ue,
  z as N,
  U as B,
  az as z,
  bQ as Pe,
  V as de,
  x as Te,
  aq as E,
  cj as te,
  ar as x,
  ck as V,
  K as le,
  Q as ee,
  cl as F,
  cm as Q,
  cn as W,
  co as Fe,
  a3 as Ie,
  n as X,
  _ as Z,
  O as xe,
  u as Ve,
  G as U,
  am as me,
  ah as oe,
  P as ae,
  w as se,
  a as C,
  b as R,
  m as pe,
  ai as Ke,
  aQ as Ae,
  cp as H,
  cf as re,
  aW as ie,
  p as ne,
  b6 as Ge,
  b0 as Ye,
  a4 as ce,
  cq as j,
  cr as K,
  cs as Ce,
  a7 as ve,
  ap as Re,
  bX as We,
  bY as He,
  F as P,
  ae as ye,
  ct as je,
  cu as ze,
  k as Qe,
  af as Xe,
  cv as Ze,
  ax as Je,
  q as Y,
  cw as et,
  bh as Oe,
  bU as tt,
  a$ as ge,
  as as at,
  a8 as st,
  T as ke,
  Z as Ee,
  cx as it,
  cy as nt,
  cz as we,
  cA as Se,
  R as lt,
  b4 as ot,
  X as ue,
  $ as rt,
  Y as ct,
  a0 as ut
} from "./DQp58DI6.js";
import {
  _ as dt
} from "./BhxDVukc.js";
import {
  _ as mt,
  a as kt
} from "./DSTRnrZm.js";
import {
  a as vt
} from "./MqHLkdNu.js";
import {
  _ as ft
} from "./mrac9A7o.js";
import {
  d as fe
} from "./DT401b_N.js";
import {
  _ as bt
} from "./1GOKGE63.js";
import {
  _ as pt
} from "./B-7HzDkL.js";
const yt = _({
    __name: "TasksMaintenance",
    setup(e) {
      const d = () => J().$webApp.openTelegramLink("https://t.me/BlumCrypto");
      return (t, i) => {
        const s = De;
        return o(), S(s, {
          icon: ("imgResolver" in t ? t.imgResolver : a(Me))("emoji/Construction"),
          title: "Maintenance",
          subtitle: "We’re sprucing things up on Blum to bring you an even better experience. Hang tight, we’ll be back before you know it!",
          "button-label": "Visit community",
          onButton: i[0] || (i[0] = v => d())
        }, null, 8, ["icon"])
      }
    }
  }),
  Tt = q(yt, [
    ["__scopeId", "data-v-dba006cd"]
  ]),
  gt = {
    class: "pages-tasks-head"
  },
  ht = {
    key: 0,
    class: "title"
  },
  Ct = {
    key: 1,
    class: "subtitle"
  },
  Ot = {
    key: 2,
    class: "pokras-bg"
  },
  St = _({
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
      const d = Le().internal.isPokrasTheme;
      return (t, i) => (o(), O("div", gt, [e.title ? (o(), O("div", ht, M(e.title), 1)) : $("", !0), e.subtitle ? (o(), O("div", Ct, M(e.subtitle), 1)) : $("", !0), a(d) ? (o(), O("div", Ot)) : $("", !0)]))
    }
  }),
  $t = q(St, [
    ["__scopeId", "data-v-4760ce9b"]
  ]),
  It = ["disabled"],
  At = _({
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
        t = A(() => {
          const s = [L.CARD, L.SHORT_CARD].includes(d.itemMode) ? Ue.RIGHT : void 0;
          if (d.tooltip === "validation") return {
            text: N("earn.task.verification_indicator_text"),
            alignment: s
          }
        });
      return (i, s) => {
        const v = dt,
          k = Te;
        return a(t) ? (o(), S(v, {
          key: 0,
          class: "tasks-pill-inline",
          fill: "",
          text: a(t).text,
          alignment: a(t).alignment,
          "text-alignment": "left",
          "text-min-width": 130,
          onClick: s[0] || (s[0] = Pe(() => {}, ["stop"]))
        }, {
          default: B(() => [z(i.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["text", "alignment"])) : e.isQuestButton ? (o(), S(k, {
          key: 1,
          class: "tasks-fill-full",
          fill: "",
          size: a(de).LARGE,
          disabled: e.disabled,
          onClick: s[1] || (s[1] = l => e.onClick && e.onClick(l))
        }, {
          default: B(() => [z(i.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["size", "disabled"])) : (o(), O("button", {
          key: 2,
          class: "tasks-pill-inline",
          disabled: e.disabled,
          onClick: s[2] || (s[2] = l => e.onClick && e.onClick(l))
        }, [z(i.$slots, "default", {}, void 0, !0)], 8, It))
      }
    }
  }),
  Rt = q(At, [
    ["__scopeId", "data-v-3aaee1da"]
  ]),
  Et = {
    key: 0,
    class: "label"
  },
  wt = _({
    __name: "TasksPill",
    props: E({
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
        default: te.DARK
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
    emits: E(["ui:claimed", "open:subtasks-modal", "open:verify", "click"], ["update:claimOverride"]),
    setup(e, {
      emit: d
    }) {
      const t = e,
        i = d,
        s = x(e, "claimOverride"),
        v = A(() => t.status === V.READY_FOR_CLAIM ? le.DARK : t.status === V.STARTED ? t.mode === te.LIGHT ? le.DARK : le.LIGHT : le.DARK),
        k = A(() => {
          const l = t.reward && !t.reward.isZero() ? N("base.claim_bp", {
              bp: ee(t.reward)
            }) : N("base.claim"),
            c = {
              claimDisabled: {
                label: N("base.claim"),
                cls: "is-disabled",
                disabled: !0
              },
              subtasksModalOpen: {
                label: N("earn.task.buttons.open"),
                cls: "is-status-not-started",
                onClick: () => {
                  i("open:subtasks-modal"), i("click")
                }
              },
              questDisabled: {
                label: l,
                cls: "is-disabled",
                disabled: !0
              }
            };
          if (t.status === V.NOT_STARTED) return t.kind === F.ONGOING ? c.claimDisabled : t.isQuestButton ? c.questDisabled : Q(t.kind) ? c.subtasksModalOpen : {
            label: N("earn.task.buttons.start"),
            cls: "is-status-not-started",
            onClick: () => {
              s.value = W.STARTED, setTimeout(() => s.value === W.STARTED && (s.value = void 0), 15e3), t.startCallback(), i("click")
            }
          };
          if (t.status === V.STARTED) return t.kind === F.ONGOING ? c.claimDisabled : t.isQuestButton ? c.questDisabled : Q(t.kind) ? c.subtasksModalOpen : s.value === W.STARTED ? {
            loader: !0,
            cls: "is-status-started"
          } : {
            icon: "clock",
            cls: "is-status-started",
            tooltip: "validation"
          };
          if (t.status === V.READY_FOR_VERIFY) return {
            label: N("earn.task.buttons.verify"),
            onClick: T => {
              T.stopPropagation(), i("open:verify"), i("click")
            },
            cls: "is-status-ready-for-verify"
          };
          if (s.value === W.LOADING) return {
            loader: !0,
            cls: "is-status-ready-for-claim"
          };
          if (s.value === W.DONE) return {
            icon: "circle-check-white",
            cls: "is-status-ready-for-claim"
          };
          if (t.status === V.FINISHED) return {
            icon: "circle-check-white",
            cls: "is-status-finished"
          };
          if (t.status === V.READY_FOR_CLAIM) return {
            label: l,
            cls: "is-status-ready-for-claim",
            onClick: async () => {
              s.value = W.LOADING, i("click"), await Fe(t.claimCallback, 2e3) ? (s.value = W.DONE, i("ui:claimed")) : s.value = void 0
            }
          };
          throw Ie("Unsupported condition")
        });
      return (l, c) => {
        const T = Z,
          b = xe,
          r = Rt;
        return o(), S(r, {
          "on-click": a(k).onClick,
          class: X([
            [a(k).cls, `is-${e.mode}`, {
              "is-quest": e.isQuestButton,
              "is-nested": e.isNested
            }], "pages-tasks-pill"
          ]),
          "is-quest-button": e.isQuestButton,
          disabled: a(k).disabled,
          tooltip: a(k).tooltip,
          "item-mode": e.itemMode
        }, {
          default: B(() => [a(k).label ? (o(), O("div", Et, M(a(k).label), 1)) : a(k).icon ? (o(), S(T, {
            key: 1,
            name: a(k).icon,
            class: "icon"
          }, null, 8, ["name"])) : a(k).loader ? (o(), S(b, {
            key: 2,
            size: 16,
            type: a(v)
          }, null, 8, ["type"])) : $("", !0)]),
          _: 1
        }, 8, ["on-click", "class", "is-quest-button", "disabled", "tooltip", "item-mode"])
      }
    }
  }),
  he = q(wt, [
    ["__scopeId", "data-v-49254788"]
  ]),
  Nt = `PREAMBLE
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
  _t = {
    key: 0,
    class: "pages-tasks-disclaimer-title"
  },
  qt = ["src"],
  Bt = {
    key: 1,
    class: "pages-tasks-disclaimer-title"
  },
  Dt = {
    key: 0,
    class: "pages-tasks-disclaimer general"
  },
  Mt = {
    class: "checkbox"
  },
  Lt = {
    key: 1,
    class: "pages-tasks-disclaimer details"
  },
  $e = "community@blum.io",
  Ut = _({
    __name: "TasksDisclaimer",
    props: E({
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
        t = x(e, "modelValue"),
        {
          copy: i
        } = Ve(),
        s = () => i($e),
        v = () => ({
          isAgreed: !1,
          state: "general"
        }),
        k = U(v());
      me(t, b => b && (k.value = v()));
      const l = () => {
          k.value.isAgreed = !0, k.value.state = "general"
        },
        c = () => {
          t.value = !1, d.startFn && d.startFn()
        },
        T = A(() => {
          const b = Nt.split(`
`).reduce((r, n) => {
            const u = n.trim();
            if (!u) return r;
            const m = (() => {
              if (u.includes("{{ community_email }}")) {
                const g = u.split("{{ community_email }}");
                return oe("p", [g[0], oe("span", {
                  class: "as-link",
                  onClick: s
                }, $e), g[1]])
              }
              return oe("p", u)
            })();
            return r.push(m), r
          }, []);
          return oe("div", {
            class: "text"
          }, b)
        });
      return (b, r) => {
        const n = mt,
          u = Te,
          m = Ae,
          g = ae("img-error");
        return o(), S(m, {
          modelValue: t.value,
          "onUpdate:modelValue": r[4] || (r[4] = p => t.value = p),
          title: "",
          "back-icon": a(k).state === "details",
          "content-key": a(k).state,
          onBack: r[5] || (r[5] = p => a(k).state = "general")
        }, {
          title: B(() => [a(k).state === "general" ? (o(), O("span", _t, [se(C("img", {
            src: e.iconUrl,
            alt: "Task icon"
          }, null, 8, qt), [
            [g]
          ]), C("span", null, M(e.productName), 1)])) : $("", !0), a(k).state === "details" ? (o(), O("span", Bt, "Disclaimer")) : $("", !0)]),
          default: B(() => [a(k).state === "general" ? (o(), O("div", Dt, [r[8] || (r[8] = C("div", {
            class: "text"
          }, [C("p", null, "Nothing in Blum is to be considered as being of promotional nature or aiming at commercial use."), C("p", null, "No material or information which may be made available in Blum shall constitute or be construed as a recommendation, endorsement, offer, invitation or solicitation to enter into any transaction with or purchase any product, or otherwise deal with securities, crypto assets or other products."), C("p", null, "You alone are solely responsible for determining whether any investment, security or any other product or service, is appropriate or suitable for you. You should consult an attorney or tax professional regarding your specific legal or tax situation.")], -1)), C("div", Mt, [R(n, {
            modelValue: a(k).isAgreed,
            "onUpdate:modelValue": r[0] || (r[0] = p => a(k).isAgreed = p)
          }, null, 8, ["modelValue"]), C("span", null, [r[6] || (r[6] = pe("By using Blum, you accept the terms of our ")), C("span", {
            class: "as-link",
            onClick: r[1] || (r[1] = p => a(k).state = "details")
          }, "Disclaimer"), r[7] || (r[7] = pe("."))])])])) : $("", !0), a(k).state === "details" ? (o(), O("div", Lt, [(o(), S(Ke(a(T))))])) : $("", !0)]),
          footer: B(() => [a(k).state === "general" ? (o(), S(u, {
            key: 0,
            label: `Go to ${e.productName}`,
            fill: "",
            size: a(de).LARGE,
            tertiary: "",
            disabled: !a(k).isAgreed,
            onClick: r[2] || (r[2] = p => c())
          }, null, 8, ["label", "size", "disabled"])) : $("", !0), a(k).state === "details" ? (o(), S(u, {
            key: 1,
            label: "I agree",
            fill: "",
            size: a(de).LARGE,
            onClick: r[3] || (r[3] = p => l())
          }, null, 8, ["size"])) : $("", !0)]),
          _: 1
        }, 8, ["modelValue", "back-icon", "content-key"])
      }
    }
  }),
  Pt = q(Ut, [
    ["__scopeId", "data-v-845ec11f"]
  ]),
  Ft = {},
  xt = {
    class: "kit-overlay"
  },
  Vt = {
    class: "content"
  };

function Kt(e, d) {
  return o(), O("div", xt, [C("div", Vt, [z(e.$slots, "default", {}, void 0, !0)])])
}
const Gt = q(Ft, [
    ["render", Kt],
    ["__scopeId", "data-v-98d1f858"]
  ]),
  Yt = {
    class: "pages-tasks-verify"
  },
  Wt = {
    class: "heading"
  },
  Ht = ["src"],
  jt = {
    class: "title"
  },
  zt = _({
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
        i = d,
        s = U(""),
        v = U(),
        k = async () => {
          v.value = void 0, v.value = await t.verifyCallback(s.value), v.value === H.SUCCESS && i("close")
        };
      me(s, () => {
        v.value !== void 0 && (v.value = void 0)
      });
      const l = A(() => {
        switch (v.value) {
          case void 0:
            return {
              status: re.REGULAR, caption: N("earn.verify_input.caption.default")
            };
          case H.UNKNOWN_ERROR:
            return {
              status: re.ERROR, caption: N("earn.verify_input.caption.unknown_error")
            };
          case H.WRONG_KEYWORD:
            return {
              status: re.ERROR, caption: N("earn.verify_input.caption.wrong_keyword")
            };
          case H.SUCCESS:
            return {
              status: re.REGULAR
            };
          default:
            throw v.value, Ie("Invalid status")
        }
      });
      return (c, T) => {
        const b = Z,
          r = vt,
          n = Te,
          u = ft,
          m = Gt,
          g = ae("img-error");
        return o(), S(m, null, {
          default: B(() => [C("div", Yt, [C("div", Wt, [se(C("img", {
            src: a(ie)(e.task.iconFileKey),
            alt: "Task icon",
            class: "task-icon"
          }, null, 8, Ht), [
            [g]
          ]), C("div", jt, M(e.task.title), 1), R(b, {
            name: "external-link",
            class: "link-icon",
            onClick: T[0] || (T[0] = p => c.$emit("doAction"))
          })]), R(r, {
            modelValue: a(s),
            "onUpdate:modelValue": T[1] || (T[1] = p => ne(s) ? s.value = p : null),
            placeholder: "Keyword",
            label: "Verification",
            status: a(l).status,
            caption: a(l).caption,
            class: "input"
          }, null, 8, ["modelValue", "status", "caption"]), R(u, {
            "ignore-tabs": ""
          }, {
            default: B(() => [R(n, {
              label: "Verify",
              fill: "",
              size: a(de).LARGE,
              onClick: T[2] || (T[2] = p => k())
            }, null, 8, ["size"])]),
            _: 1
          })])]),
          _: 1
        })
      }
    }
  }),
  Qt = q(zt, [
    ["__scopeId", "data-v-64ea4ace"]
  ]),
  Xt = () => {
    const {
      tonConnectUI: e
    } = Ge();
    return {
      sendTransaction: async t => {
        const i = fe.Address.parse(t.address),
          s = {
            validUntil: Math.floor(Date.now() / 1e3) + 360,
            messages: [{
              address: i.toString(),
              amount: fe.toNano(t.amountTON.toString()).toString(),
              payload: (() => {
                if (t.message) return fe.beginCell().storeUint(0, 32).storeStringTail(t.message).endCell().toBoc().toString("base64")
              })()
            }]
          };
        return await e.value.sendTransaction(s)
      }
    }
  },
  Ne = _({
    __name: "TasksItemInnerWrapper",
    props: E({
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
    emits: E(["open:subtasks-modal"], ["update:claimOverride"]),
    setup(e, {
      emit: d
    }) {
      const t = e,
        i = d,
        s = x(e, "claimOverride"),
        v = Xt(),
        k = Ye(),
        l = () => {
          if ([K.SOCIAL_MEDIA_CHECK, K.SOCIAL_SUBSCRIPTION].includes(t.task.type) && t.task.socialSubscription) {
            const f = t.task.socialSubscription.url;
            t.task.socialSubscription.openInTelegram ? J().$webApp.openTelegramLink(f) : f.startsWith("http") ? J().$webApp.openLink(f) : ye().push(f)
          }
          if (t.task.type === K.APPLICATION_LAUNCH && t.task.applicationLaunch && J().$webApp.openTelegramLink(t.task.applicationLaunch.url), t.task.type === K.WALLET_CONNECTION) {
            const f = () => {
              t.task.status === V.NOT_STARTED && t.startCallback()
            };
            k.runConnectionFlow(f)
          }
          if (t.task.type === K.ONCHAIN_TRANSACTION) {
            const f = async () => {
              const y = t.task.onchainTransaction;
              if (t.task.status !== V.NOT_STARTED || !y) return;
              const h = Qe().getters.mustGetUser.value.id,
                w = `${t.task.id}:${h}`;
              await v.sendTransaction({
                address: y.address,
                amountTON: y.amount,
                message: w
              }).then(t.startCallback).catch()
            };
            k.runConnectionFlow(f)
          }
          t.task.validationType === je.MEMEPAD && ye().push({
            name: "memepad"
          })
        },
        c = () => {
          t.task.status === V.READY_FOR_VERIFY && l();
          const y = j(t.task.status, s.value),
            h = ze(t.task.status),
            w = y || h,
            D = Q(t.task.kind);
          w && (D || l(), D && i("open:subtasks-modal"))
        },
        T = A(() => t.task.kind === F.GROUP ? !0 : !t.task.reward.isZero()),
        b = A(() => {
          var f, y;
          if (!T.value) return "";
          if ((t.task.kind === F.QUEST && t.task.reward.isZero() || t.task.kind === F.GROUP) && "subTasks" in t.task) {
            const h = ((f = t.task.subTasks) == null ? void 0 : f.reduce((D, G) => D.add(G.reward), new ce(0))) ?? new ce(0),
              w = ((y = t.task.subTasks) == null ? void 0 : y.reduce((D, G) => j(G.status, s.value) ? D.add(G.reward) : D, new ce(0))) ?? new ce(0);
            return `+${ee(w)}/${ee(h)} BP`
          }
          return `+${ee(t.task.reward)} BP`
        }),
        r = U(),
        n = U(!1),
        u = () => {
          const f = () => {
            t.task.kind !== F.ONGOING && (Q(t.task.kind) || (l(), t.task.type !== K.WALLET_CONNECTION && t.task.type !== K.ONCHAIN_TRANSACTION && t.startCallback()))
          };
          if (t.task.isDisclaimerRequired) {
            r.value = {
              startFn: f
            };
            return
          }
          f()
        },
        m = A(() => {
          if (t.task.type === K.PROGRESS_TARGET) {
            const f = Ce(t.task.progressTarget, "progress target"),
              y = ve(f.target, {
                accuracy: f.accuracy
              });
            return `${t.task.title} ${y}${f.postfix?` ${f.postfix}`:""}`
          }
          return t.task.title
        }),
        g = A(() => {
          if (t.questDetails) return {
            label: `${t.questDetails.countFinished}/${t.questDetails.countTotal}`,
            postfix: ` ${N("base.n.tasks",t.questDetails.countTotal)}`,
            finished: t.questDetails.countFinished,
            total: t.questDetails.countTotal,
            done: t.questDetails.countFinished === t.questDetails.countTotal
          };
          if (t.task.type === K.PROGRESS_TARGET && t.task.progressTarget) {
            const f = Ce(t.task.progressTarget, "progress target"),
              y = ve(f.progress, {
                accuracy: f.accuracy
              }),
              h = ve(f.target, {
                accuracy: f.accuracy
              });
            return {
              label: `${y}/${h}`,
              postfix: `${f.postfix?` ${f.postfix}`:""}`,
              finished: f.progress.toNumber(),
              total: f.target.toNumber(),
              done: f.progress === f.target
            }
          }
        }),
        p = A(() => ({
          onClick: c,
          rewardText: b,
          startProxy: u,
          title: m,
          progress: g,
          openVerify: () => n.value = !0
        })),
        I = A(() => {
          if (n.value) return () => n.value = !1
        });
      return me(I, f => Re().meta.back = f), (f, y) => {
        var D;
        const h = Pt,
          w = Qt;
        return o(), O(P, null, [z(f.$slots, "default", We(He(a(p)))), R(h, {
          "model-value": !!a(r),
          "product-name": e.task.productName,
          "icon-url": a(ie)(e.task.iconFileKey),
          "start-fn": (D = a(r)) == null ? void 0 : D.startFn,
          "onUpdate:modelValue": y[0] || (y[0] = G => G ? void 0 : r.value = void 0)
        }, null, 8, ["model-value", "product-name", "icon-url", "start-fn"]), a(n) ? (o(), S(w, {
          key: 0,
          task: e.task,
          "verify-callback": e.verifyCallback,
          onDoAction: y[1] || (y[1] = G => l()),
          onClose: y[2] || (y[2] = G => n.value = !1)
        }, null, 8, ["task", "verify-callback"])) : $("", !0)], 64)
      }
    }
  }),
  Zt = ["onClick"],
  Jt = ["src"],
  ea = {
    class: "details"
  },
  ta = {
    class: "title"
  },
  aa = {
    key: 0,
    class: "progress-reward"
  },
  sa = {
    key: 0,
    class: "progress"
  },
  ia = {
    key: 1,
    class: "reward"
  },
  na = _({
    inheritAttrs: !1,
    __name: "TasksListItem",
    props: E({
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
    emits: E(["ui:claimed", "open:subtasks-modal", "pill:click"], ["update:claimOverride"]),
    setup(e) {
      const d = x(e, "claimOverride");
      return (t, i) => {
        const s = he,
          v = Ne,
          k = ae("img-error");
        return o(), S(v, {
          "claim-override": d.value,
          "onUpdate:claimOverride": i[4] || (i[4] = l => d.value = l),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": i[5] || (i[5] = l => t.$emit("open:subtasks-modal"))
        }, {
          default: B(({
            onClick: l,
            rewardText: c,
            startProxy: T,
            title: b,
            progress: r,
            openVerify: n
          }) => {
            var u;
            return [C("div", Xe({
              class: "pages-tasks-list-item-label"
            }, t.$attrs, {
              onClick: l
            }), [C("div", {
              class: X(["container", {
                "no-border": e.noBorder
              }])
            }, [se(C("img", {
              src: a(ie)(e.task.iconFileKey),
              alt: "Task icon"
            }, null, 8, Jt), [
              [k]
            ]), C("div", ea, [C("div", ta, M(b.value), 1), r.value || c.value ? (o(), O("div", aa, [(u = r.value) != null && u.label ? (o(), O("span", sa, M(`${r.value.label}${r.value.postfix}`) + M(c.value ? ", " : ""), 1)) : $("", !0), c.value ? (o(), O("span", ia, M(c.value), 1)) : $("", !0)])) : $("", !0)]), e.task.status ? (o(), S(s, {
              key: 0,
              "claim-override": d.value,
              "onUpdate:claimOverride": i[0] || (i[0] = m => d.value = m),
              status: e.task.status,
              kind: e.task.kind,
              "start-callback": T,
              "claim-callback": e.claimCallback,
              "is-nested": e.isNested,
              "item-mode": e.itemMode,
              class: "pill-btn",
              "onUi:claimed": i[1] || (i[1] = m => t.$emit("ui:claimed")),
              "onOpen:subtasksModal": i[2] || (i[2] = m => t.$emit("open:subtasks-modal")),
              "onOpen:verify": n,
              onClick: i[3] || (i[3] = m => t.$emit("pill:click"))
            }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "is-nested", "item-mode", "onOpen:verify"])) : $("", !0)], 2)], 16, Zt)]
          }),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  _e = q(na, [
    ["__scopeId", "data-v-61588e22"]
  ]),
  la = {
    class: "label"
  },
  be = 185.074,
  oa = _({
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
        default: te.DARK
      }
    },
    setup(e) {
      Ze(i => ({
        b63fb046: be,
        "0e5a5f8f": a(t)
      }));
      const d = e,
        t = A(() => be - be * (d.finished / d.total));
      return (i, s) => {
        const v = Z;
        return o(), O("div", {
          class: X(["pages-tasks-progress-pill", `is-${e.mode}`])
        }, [C("span", la, M(e.label), 1), R(v, {
          name: "special/progress-pill",
          class: "icon"
        })], 2)
      }
    }
  }),
  ra = q(oa, [
    ["__scopeId", "data-v-293728e0"]
  ]),
  ca = ["onClick"],
  ua = {
    key: 0,
    class: "icons"
  },
  da = ["src"],
  ma = {
    class: "title"
  },
  ka = {
    key: 1,
    class: "points"
  },
  va = {
    class: "footer"
  },
  fa = _({
    __name: "TasksCard",
    props: E({
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
    emits: E(["ui:claimed", "open:subtasks-modal", "pill:click"], ["update:claimOverride"]),
    setup(e) {
      const d = e,
        t = A(() => !d.short),
        i = A(() => d.short ? te.LIGHT : te.DARK),
        s = A(() => {
          var l;
          return d.task.kind === F.GROUP ? ((l = d.task.subTasks) == null ? void 0 : l.map(c => c.iconFileKey)) ?? [] : [d.task.iconFileKey]
        }),
        v = x(e, "claimOverride"),
        k = A(() => {
          if (d.short) return;
          if (d.task.color) return d.task.color;
          const l = ["#B9BBBC", "#BCABA6", "#BAAFC3", "#BEC0CB", "#C3BFB3"];
          return l[d.colorMode % l.length]
        });
      return (l, c) => {
        const T = he,
          b = Z,
          r = ra,
          n = Ne,
          u = ae("img-error");
        return o(), S(n, {
          "claim-override": v.value,
          "onUpdate:claimOverride": c[4] || (c[4] = m => v.value = m),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": c[5] || (c[5] = m => l.$emit("open:subtasks-modal"))
        }, {
          default: B(({
            onClick: m,
            startProxy: g,
            title: p,
            progress: I,
            openVerify: f,
            rewardText: y
          }) => [C("div", {
            class: X(["pages-tasks-card", {
              "is-short": e.short
            }]),
            style: Je({
              backgroundColor: a(k)
            }),
            onClick: m
          }, [a(t) ? (o(), O("div", ua, [(o(!0), O(P, null, Y(a(s), (h, w) => se((o(), O("img", {
            key: w,
            src: a(ie)(h),
            alt: "Task icon",
            class: "icon",
            width: "48",
            height: "48"
          }, null, 8, da)), [
            [u]
          ])), 128))])) : $("", !0), C("div", ma, M(p.value), 1), y.value ? (o(), O("div", ka, M(y.value), 1)) : $("", !0), C("div", va, [e.task.status ? (o(), S(T, {
            key: 0,
            "claim-override": v.value,
            "onUpdate:claimOverride": c[0] || (c[0] = h => v.value = h),
            status: e.task.status,
            kind: e.task.kind,
            "start-callback": g,
            "claim-callback": e.claimCallback,
            "is-nested": !1,
            mode: a(i),
            "item-mode": e.itemMode,
            "onUi:claimed": c[1] || (c[1] = h => l.$emit("ui:claimed")),
            "onOpen:subtasksModal": c[2] || (c[2] = h => l.$emit("open:subtasks-modal")),
            "onOpen:verify": f,
            onClick: c[3] || (c[3] = h => l.$emit("pill:click"))
          }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "mode", "item-mode", "onOpen:verify"])) : $("", !0), I.value ? (o(), O(P, {
            key: 1
          }, [I.value.done ? (o(), S(b, {
            key: 0,
            name: "circle-check-white",
            class: "done-icon"
          })) : (o(), S(r, {
            key: 1,
            finished: I.value.finished,
            total: I.value.total,
            label: I.value.label,
            mode: a(i)
          }, null, 8, ["finished", "total", "label", "mode"]))], 64)) : $("", !0)])], 14, ca)]),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  ba = q(fa, [
    ["__scopeId", "data-v-d82f927b"]
  ]),
  qe = () => {
    const e = et("tasks-open-sheet");
    return {
      openTaskSheet: i => {
        e.emit(i.id)
      },
      onOpenTaskSheet: (i, s) => {
        e.subscribe(v => {
          i.id === v && s()
        })
      }
    }
  },
  pa = {
    key: 1,
    class: "heading"
  },
  ya = {
    key: 1,
    class: "description"
  },
  Ta = _({
    __name: "TasksSubtasksModal",
    props: E({
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
    emits: E(["ui:claimed", "click:task", "pill:click"], ["update:modelValue", "update:tasksClaimOverride"]),
    setup(e) {
      const d = e,
        t = x(e, "modelValue"),
        i = x(e, "tasksClaimOverride"),
        s = A(() => d.task.kind === F.QUEST);
      Oe().getReferralToken();
      const v = () => {
          t.value = !1, c.value = !0
        },
        k = () => {
          c.value = !1, t.value = !0
        },
        l = U(d.task.isShared),
        c = U(!1),
        T = A(() => N("earn.quest.share.text")),
        b = A(() => `tasksheet_${btoa(d.task.id)}-ref_${Oe().referralToken.value}`);
      return qe().onOpenTaskSheet(d.task, () => {
        t.value = !0
      }), (r, n) => {
        const u = Z,
          m = bt,
          g = _e,
          p = he,
          I = Ae,
          f = at;
        return o(), O(P, null, [R(I, {
          modelValue: t.value,
          "onUpdate:modelValue": n[3] || (n[3] = y => t.value = y),
          title: e.title
        }, tt({
          default: B(() => [C("div", {
            class: X(["pages-tasks-subtasks-modal", {
              "has-share": a(l)
            }])
          }, [a(l) ? (o(), O("button", {
            key: 0,
            type: "button",
            class: "reset share-btn",
            onClick: v
          }, [R(u, {
            name: "share",
            class: "icon"
          }), n[5] || (n[5] = C("div", {
            class: "labe"
          }, "Invite and earn up to 8% revshare", -1))])) : $("", !0), e.task.bannerFileKey || e.task.description ? (o(), O("div", pa, [e.task.bannerFileKey ? (o(), S(m, {
            key: 0,
            url: a(ie)(e.task.bannerFileKey),
            alt: "Task banner",
            class: "banner"
          }, null, 8, ["url"])) : $("", !0), e.task.description ? (o(), O("div", ya, M(e.task.description), 1)) : $("", !0)])) : $("", !0), e.task.subTasks ? (o(), S(ge, {
            key: 2,
            tag: "div",
            name: "list-shuffle-transition",
            class: "nested-tasks"
          }, {
            default: B(() => [(o(!0), O(P, null, Y(e.task.subTasks, (y, h) => (o(), S(g, {
              key: y.id,
              "claim-override": i.value[y.id],
              "onUpdate:claimOverride": w => i.value[y.id] = w,
              task: y,
              "start-callback": () => e.startSubTaskCallback(y),
              "claim-callback": () => e.claimCallback(y),
              "verify-callback": w => e.verifyCallback(y, w),
              "no-border": h === e.task.subTasks.length - 1,
              "item-mode": a(L).LIST_ITEM,
              "is-nested": "",
              "onUi:claimed": w => r.$emit("ui:claimed", {
                task: y,
                isQuest: !1
              }),
              onClick: w => r.$emit("click:task", y),
              "onPill:click": w => r.$emit("pill:click", y)
            }, null, 8, ["claim-override", "onUpdate:claimOverride", "task", "start-callback", "claim-callback", "verify-callback", "no-border", "item-mode", "onUi:claimed", "onClick", "onPill:click"]))), 128))]),
            _: 1
          })) : $("", !0)], 2)]),
          _: 2
        }, [a(s) ? {
          name: "footer",
          fn: B(() => [e.task.status && !a(j)(e.task.status, i.value[e.task.id]) ? (o(), S(p, {
            key: 0,
            "claim-override": i.value[e.task.id],
            "onUpdate:claimOverride": n[0] || (n[0] = y => i.value[e.task.id] = y),
            "is-quest-button": "",
            status: e.task.status,
            kind: e.task.kind,
            reward: e.task.reward,
            "start-callback": () => {},
            "claim-callback": () => e.claimCallback(e.task),
            "item-mode": e.itemMode,
            "onUi:claimed": n[1] || (n[1] = y => r.$emit("ui:claimed", {
              task: e.task,
              isQuest: !0
            })),
            onClick: n[2] || (n[2] = y => r.$emit("pill:click", e.task))
          }, null, 8, ["claim-override", "status", "kind", "reward", "claim-callback", "item-mode"])) : $("", !0)]),
          key: "0"
        } : void 0]), 1032, ["modelValue", "title"]), R(f, {
          modelValue: a(c),
          "onUpdate:modelValue": n[4] || (n[4] = y => ne(c) ? c.value = y : null),
          title: ("t" in r ? r.t : a(N))("earn.quest.share.sheet.title"),
          "share-text": a(T),
          subtitle: e.task.sharingDescription,
          startapp: a(b),
          "copied-notification": ("t" in r ? r.t : a(N))("frens.invite.link_copied"),
          "back-icon": "",
          onBack: k
        }, null, 8, ["modelValue", "title", "share-text", "subtitle", "startapp", "copied-notification"])], 64)
      }
    }
  }),
  ga = q(Ta, [
    ["__scopeId", "data-v-84322842"]
  ]),
  ha = _({
    __name: "TasksItem",
    props: E({
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
    emits: E(["ui:claimed", "request:update", "pill:click", "mounted", "unmounted"], ["update:tasksClaimOverride"]),
    setup(e, {
      emit: d
    }) {
      const t = e,
        i = d,
        s = x(e, "tasksClaimOverride"),
        v = U(!1),
        k = U(void 0),
        l = A(() => {
          var r, n;
          if (!Q(t.task.kind)) return;
          const T = ((r = t.task.subTasks) == null ? void 0 : r.length) ?? 0,
            b = ((n = t.task.subTasks) == null ? void 0 : n.filter(u => j(u.status, s.value[u.id])).length) ?? 0;
          return {
            countTotal: T,
            countFinished: b,
            progressLabel: `${b}/${T} ${N("base.n.tasks",T)}`,
            modalTitle: `${t.task.title} ${b}/${T}`
          }
        }),
        c = T => {
          T.isQuest ? v.value = !1 : i("request:update"), i("ui:claimed", T.task)
        };
      return st(() => {
        k.value && i("mounted", k.value)
      }), ke(() => {
        k.value && i("unmounted", k.value)
      }), (T, b) => {
        const r = _e,
          n = ba,
          u = ga;
        return o(), O("div", {
          ref_key: "taskItemEl",
          ref: k,
          class: "pages-tasks-item"
        }, [e.mode === a(L).LIST_ITEM ? (o(), S(r, {
          key: 0,
          "claim-override": s.value[e.task.id],
          "onUpdate:claimOverride": b[0] || (b[0] = m => s.value[e.task.id] = m),
          task: e.task,
          "quest-details": a(l),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": m => e.verifyCallback(e.task, m),
          "item-mode": e.mode,
          "onUi:claimed": b[1] || (b[1] = m => T.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": b[2] || (b[2] = m => v.value = !0),
          "onPill:click": b[3] || (b[3] = m => T.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "item-mode"])) : e.mode === a(L).SHORT_CARD || e.mode === a(L).CARD ? (o(), S(n, {
          key: 1,
          "claim-override": s.value[e.task.id],
          "onUpdate:claimOverride": b[4] || (b[4] = m => s.value[e.task.id] = m),
          task: e.task,
          "quest-details": a(l),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": m => e.verifyCallback(e.task, m),
          short: e.mode === a(L).SHORT_CARD,
          "color-mode": e.idx,
          "item-mode": e.mode,
          "onUi:claimed": b[5] || (b[5] = m => T.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": b[6] || (b[6] = m => v.value = !0),
          "onPill:click": b[7] || (b[7] = m => T.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "short", "color-mode", "item-mode"])) : $("", !0), a(l) ? (o(), S(u, {
          key: 2,
          modelValue: a(v),
          "onUpdate:modelValue": b[8] || (b[8] = m => ne(v) ? v.value = m : null),
          "tasks-claim-override": s.value,
          "onUpdate:tasksClaimOverride": b[9] || (b[9] = m => s.value = m),
          task: e.task,
          title: a(l).modalTitle,
          "start-sub-task-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "item-mode": e.mode,
          "onUi:claimed": b[10] || (b[10] = m => c(m)),
          "onPill:click": b[11] || (b[11] = m => T.$emit("pill:click", m))
        }, null, 8, ["modelValue", "tasks-claim-override", "task", "title", "start-sub-task-callback", "claim-callback", "verify-callback", "item-mode"])) : $("", !0)], 512)
      }
    }
  }),
  Be = q(ha, [
    ["__scopeId", "data-v-86f27969"]
  ]),
  Ca = _({
    __name: "TasksList",
    props: E({
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
    emits: E(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      const d = e,
        t = x(e, "tasksClaimOverride"),
        i = Ee(),
        s = n => [L.SHORT_CARD, L.CARD].includes(d.taskMode) ? d.tasks.some(m => m.id === n.id) : !1,
        v = {},
        k = (n, u) => ({
          source: u + 1,
          kind: n.kind,
          type: n.type,
          title: n.title,
          task_id: n.id,
          ...!Q(n.kind) || !("subTasks" in n) || !n.subTasks ? {
            subtasks_done: j(n.status, t.value[n.id]) ? 1 : 0,
            subtasks_total: 1
          } : {
            subtasks_done: n.subTasks.filter(g => j(g.status, t.value[g.id])).length,
            subtasks_total: n.subTasks.length
          }
        }),
        l = (n, u) => {
          if (!s(n)) return;
          v[n.id] || (v[n.id] = !0);
          const m = k(n, u);
          d.taskMode === L.CARD ? i.earn.earnHighlightsTaskShow(m) : d.taskMode === L.SHORT_CARD && i.earn.earnWeeklyTaskShow(m)
        },
        c = (n, u) => {
          if (!s(n)) return;
          v[n.id] || l(n, u);
          const m = k(n, u);
          d.taskMode === L.CARD ? i.earn.earnHighlightsTaskClick(m) : d.taskMode === L.SHORT_CARD && i.earn.earnWeeklyTaskClick(m)
        },
        T = new IntersectionObserver(n => {
          const u = n[0],
            m = u.target.getAttribute("data-task-id");
          if (!m) return;
          const g = d.tasks.find(y => y.id === m);
          if (!g || !(u.intersectionRatio >= .5)) return;
          const I = g,
            f = d.tasks.indexOf(I);
          l(I, f)
        }, {
          threshold: .5
        }),
        b = (n, u) => {
          s(n) && T.observe(u)
        },
        r = (n, u) => {
          s(n) && T.unobserve(u)
        };
      return ke(() => T.disconnect()), (n, u) => {
        const m = Be,
          g = ae("horizontal-wheel-scroll");
        return se((o(), S(ge, {
          tag: "div",
          name: "list-shuffle-transition",
          class: X(["pages-tasks-list", `is-${e.taskMode.toLowerCase()}`])
        }, {
          default: B(() => [(o(!0), O(P, null, Y(e.tasks, (p, I) => (o(), S(m, {
            key: p.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": u[0] || (u[0] = f => t.value = f),
            task: p,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            mode: e.taskMode,
            idx: I,
            class: "item",
            "data-task-id": p.id,
            "onUi:claimed": u[1] || (u[1] = f => n.$emit("ui:claimed", f)),
            "onRequest:update": u[2] || (u[2] = f => n.$emit("request:update")),
            "onPill:click": f => c(f, I),
            onMounted: f => b(p, f),
            onUnmounted: f => r(p, f)
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback", "mode", "idx", "data-task-id", "onPill:click", "onMounted", "onUnmounted"]))), 128))]),
          _: 1
        }, 8, ["class"])), [
          [g]
        ])
      }
    }
  }),
  Oa = q(Ca, [
    ["__scopeId", "data-v-e804420d"]
  ]),
  Sa = {
    key: 0,
    class: "pages-tasks-sub-sections"
  },
  $a = {
    key: 0,
    class: "empty"
  },
  Ia = {
    class: "inner"
  },
  Aa = _({
    __name: "TasksSubSections",
    props: E({
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
    emits: E(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      var k;
      const d = e,
        t = x(e, "tasksClaimOverride"),
        i = A(() => d.subSections.map(l => ({
          value: l.title,
          label: l.title,
          dot: l.tasks.some(c => it(c, t.value))
        }))),
        s = U((k = i.value[0]) == null ? void 0 : k.value),
        v = A(() => {
          var l;
          return ((l = d.subSections.find(c => c.title === s.value)) == null ? void 0 : l.tasks) ?? []
        });
      return (l, c) => {
        const T = kt,
          b = Z,
          r = Be;
        return a(v).length ? (o(), O("div", Sa, [R(T, {
          modelValue: a(s),
          "onUpdate:modelValue": c[0] || (c[0] = n => ne(s) ? s.value = n : null),
          items: a(i)
        }, null, 8, ["modelValue", "items"]), a(v).length ? (o(), S(ge, {
          key: a(s),
          tag: "div",
          name: "list-shuffle-transition",
          class: "tasks-list"
        }, {
          default: B(() => [(o(!0), O(P, null, Y(a(v), n => (o(), S(r, {
            key: n.id,
            "tasks-claim-override": t.value,
            "onUpdate:tasksClaimOverride": c[1] || (c[1] = u => t.value = u),
            task: n,
            "start-callback": e.startCallback,
            "claim-callback": e.claimCallback,
            "verify-callback": e.verifyCallback,
            "onUi:claimed": c[2] || (c[2] = u => l.$emit("ui:claimed", u)),
            "onRequest:update": c[3] || (c[3] = u => l.$emit("request:update"))
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback"]))), 128))]),
          _: 1
        })) : (o(), O("div", $a, [C("div", Ia, [R(b, {
          name: "warning-circle-check",
          class: "icon"
        }), c[4] || (c[4] = C("span", {
          class: "label"
        }, " Hooray! You've nailed every task! ", -1))])]))])) : $("", !0)
      }
    }
  }),
  Ra = q(Aa, [
    ["__scopeId", "data-v-2fd71113"]
  ]),
  Ea = {
    class: "pages-tasks-section"
  },
  wa = _({
    __name: "TasksSection",
    props: E({
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
    emits: E(["ui:claimed", "request:update"], ["update:tasksClaimOverride"]),
    setup(e) {
      const d = e,
        t = A(() => nt(d.section)),
        i = x(e, "tasksClaimOverride"),
        s = k => {
          const l = k.tasks,
            c = u => !we(u),
            T = u => Se(u, i.value),
            b = u => {
              const m = u.subTasks ? Se(u.subTasks, i.value) : void 0;
              return {
                ...u,
                subTasks: m
              }
            },
            r = u => {
              const m = u.filter(c);
              return T(m).map(b)
            },
            n = u => u.map(m => ({
              ...m,
              tasks: r(m.tasks)
            }));
          return {
            ...k,
            tasks: r(l),
            subSections: n(k.subSections)
          }
        },
        v = A(() => s(d.section));
      return (k, l) => {
        const c = $t,
          T = Oa,
          b = Ra;
        return o(), O("div", Ea, [a(v).title || a(v).description ? (o(), S(c, {
          key: 0,
          title: a(v).title,
          subtitle: a(v).description
        }, null, 8, ["title", "subtitle"])) : $("", !0), a(v).tasks.length ? (o(), S(T, {
          key: 1,
          "tasks-claim-override": i.value,
          "onUpdate:tasksClaimOverride": l[0] || (l[0] = r => i.value = r),
          tasks: a(v).tasks,
          "task-mode": a(t),
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": l[1] || (l[1] = r => k.$emit("ui:claimed", r)),
          "onRequest:update": l[2] || (l[2] = r => k.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "tasks", "task-mode", "start-callback", "claim-callback", "verify-callback"])) : $("", !0), R(b, {
          "tasks-claim-override": i.value,
          "onUpdate:tasksClaimOverride": l[3] || (l[3] = r => i.value = r),
          "sub-sections": a(v).subSections,
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": l[4] || (l[4] = r => k.$emit("ui:claimed", r)),
          "onRequest:update": l[5] || (l[5] = r => k.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "sub-sections", "start-callback", "claim-callback", "verify-callback"])])
      }
    }
  }),
  Na = q(wa, [
    ["__scopeId", "data-v-2f6edcc7"]
  ]),
  _a = _({
    __name: "PageSkeleton",
    props: {
      delay: {
        type: Number,
        default: 120
      }
    },
    setup(e) {
      const d = e,
        t = U(!1),
        i = setTimeout(() => t.value = !0, d.delay);
      return ke(() => clearTimeout(i)), (s, v) => a(t) ? z(s.$slots, "default", {
        key: 0
      }) : $("", !0)
    }
  }),
  qa = {},
  Ba = {
    class: "pages-tasks-skeleton"
  },
  Da = {
    class: "cards"
  },
  Ma = {
    class: "subtitle-wrapper"
  },
  La = {
    class: "short-cards"
  },
  Ua = {
    class: "subtitle-wrapper"
  },
  Pa = {
    class: "list-items"
  };

function Fa(e, d) {
  const t = pt,
    i = _a;
  return o(), S(i, null, {
    default: B(() => [C("div", Ba, [R(t, {
      class: "title"
    }), C("div", Da, [(o(), O(P, null, Y(2, s => R(t, {
      key: s,
      class: "item"
    })), 64))]), C("div", Ma, [R(t, {
      class: "subtitle"
    })]), C("div", La, [(o(), O(P, null, Y(2, s => R(t, {
      key: s,
      class: "item"
    })), 64))]), C("div", Ua, [R(t, {
      class: "subtitle"
    })]), C("div", Pa, [(o(), O(P, null, Y(7, s => C("div", {
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
const xa = q(qa, [
    ["render", Fa],
    ["__scopeId", "data-v-4fe8da9f"]
  ]),
  Va = {
    class: "tasks-page page"
  },
  Ka = {
    class: "header"
  },
  Ga = {
    class: "title"
  },
  Ya = {
    class: "sections"
  },
  Wa = _({
    __name: "tasks",
    setup(e) {
      const d = Ee(),
        t = A(() => Re().query.openTaskSheetId),
        i = U(!1),
        s = U(),
        v = U({}),
        l = lt(async () => ut(await ue.getTasksSections(J().$webApp.dataUnsafe.query.ref)), g => s.value = g, 15e3),
        c = (g, p) => {
          if (s.value)
            for (const I of s.value) {
              const y = [...I.tasks, ...I.tasks.flatMap(h => h.subTasks ?? []), ...I.subSections.flatMap(h => h.tasks ?? [])].filter(h => h.id === g);
              if (y.length) {
                y.forEach(h => {
                  Object.assign(h, p)
                });
                return
              }
            }
        },
        T = async g => {
          const p = await ue.startTask(g.id);
          p.err || c(g.id, p.data)
        }, b = async g => {
          const p = await ue.claimTask(g.id);
          return p.err ? !1 : (c(g.id, p.data), rt().updateBalance(), !0)
        }, r = async (g, p) => {
          const I = await ue.verifyTask(g.id, p);
          return I.err ? I.code === 400 ? H.WRONG_KEYWORD : H.UNKNOWN_ERROR : (c(g.id, I.data), H.SUCCESS)
        }, n = g => {
          setTimeout(() => delete v.value[g.id], 3e3), g.reward.isZero() || ct().success(N("base.you_got_bp", {
            bp: ee(g.reward)
          }))
        }, u = A(() => s.value ? s.value.reduce((p, I) => ([...I.tasks, ...I.tasks.flatMap(h => h.subTasks ?? []), ...I.subSections.flatMap(h => h.tasks ?? [])].filter(h => !j(h.status, v.value[h.id]) && !we(h) && h.kind !== F.GROUP).map(h => h.id).forEach(h => p.add(h)), p), new Set).size : 0);
      return (async () => {
        d.earn.earnTaskMainPageOpen(), await l.exec()
      })(), me(() => [s.value, t.value], () => {
        if (!s.value || !t.value) return;
        ye().replace({
          query: {}
        });
        const g = s.value.flatMap(p => p.tasks).find(p => p.id === t.value && [F.QUEST, F.GROUP].includes(p.kind));
        g && ot(() => qe().openTaskSheet(g))
      }), ke(() => {
        l.destroy()
      }), (g, p) => {
        const I = Tt,
          f = Na,
          y = xa;
        return o(), O("div", Va, [a(i) ? (o(), S(I, {
          key: 0
        })) : a(s) ? (o(), O(P, {
          key: 1
        }, [C("div", Ka, [C("span", Ga, [pe(M(("t" in g ? g.t : a(N))("earn.title")) + " ", 1), C("sup", null, M(a(u)), 1)])]), C("div", Ya, [(o(!0), O(P, null, Y(a(s), (h, w) => (o(), S(f, {
          key: w,
          "tasks-claim-override": a(v),
          "onUpdate:tasksClaimOverride": p[0] || (p[0] = D => ne(v) ? v.value = D : null),
          section: h,
          "start-callback": T,
          "claim-callback": b,
          "verify-callback": r,
          class: "section",
          "onUi:claimed": p[1] || (p[1] = D => n(D)),
          "onRequest:update": p[2] || (p[2] = D => a(l).exec())
        }, null, 8, ["tasks-claim-override", "section"]))), 128))])], 64)) : (o(), S(y, {
          key: 2
        }))])
      }
    }
  }),
  as = q(Wa, [
    ["__scopeId", "data-v-d614c968"]
  ]);
export {
  as as
  default
};