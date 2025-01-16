import {
  _ as Me
} from "./Q2AGe419.js";
import {
  d as q,
  o as r,
  G as S,
  e as a,
  ak as _e,
  h as Z,
  f as B,
  X as Le,
  c as O,
  t as _,
  D as $,
  j as A,
  cc as L,
  bj as Ue,
  z as w,
  H as D,
  bi as J,
  ay as Pe,
  V as de,
  x as Te,
  al as E,
  cd as te,
  am as x,
  ce as V,
  aU as le,
  M as ee,
  cf as F,
  cg as z,
  ch as H,
  ci as Fe,
  a2 as Ie,
  n as Q,
  _ as X,
  aV as xe,
  u as Ve,
  K as U,
  P as me,
  ae as oe,
  N as ae,
  w as se,
  a as C,
  b as R,
  m as pe,
  af as Ke,
  aH as Ae,
  cj as W,
  c9 as re,
  aN as ie,
  p as ne,
  a_ as Ge,
  ap as Ye,
  T as ce,
  ck as j,
  cl as K,
  cm as Ce,
  a5 as ve,
  Q as Re,
  bR as He,
  bS as We,
  F as P,
  aa as ye,
  cn as je,
  co as ze,
  k as Qe,
  ac as Xe,
  ax as Ze,
  av as Je,
  q as Y,
  cp as et,
  b9 as Oe,
  bO as tt,
  aS as ge,
  an as at,
  a6 as st,
  U as ke,
  Z as Ee,
  cq as it,
  cr as nt,
  cs as Ne,
  ct as Se,
  R as lt,
  aY as ot,
  W as ue,
  O as rt,
  Y as ct,
  $ as ut
} from "./DU-EduvJ.js";
import {
  _ as dt
} from "./BL_9Dy4z.js";
import {
  _ as mt,
  a as kt
} from "./D27IOKjO.js";
import {
  a as vt
} from "./uwPOR0Sd.js";
import {
  _ as ft
} from "./BcZCGZaW.js";
import {
  _ as bt
} from "./C9MC_0f7.js";
import {
  d as fe
} from "./BPwI9ZP9.js";
import {
  _ as pt
} from "./B6qWK7UU.js";
import {
  _ as yt
} from "./CkmrTVeP.js";
const Tt = q({
    __name: "TasksMaintenance",
    setup(e) {
      const m = () => Z().$webApp.openTelegramLink("https://t.me/BlumCrypto");
      return (t, i) => {
        const s = Me;
        return r(), S(s, {
          icon: ("imgResolver" in t ? t.imgResolver : a(_e))("emoji/Construction"),
          title: "Maintenance",
          subtitle: "We’re sprucing things up on Blum to bring you an even better experience. Hang tight, we’ll be back before you know it!",
          "button-label": "Visit community",
          onButton: i[0] || (i[0] = v => m())
        }, null, 8, ["icon"])
      }
    }
  }),
  gt = B(Tt, [
    ["__scopeId", "data-v-dba006cd"]
  ]),
  ht = {
    class: "pages-tasks-head"
  },
  Ct = {
    key: 0,
    class: "title"
  },
  Ot = {
    key: 1,
    class: "subtitle"
  },
  St = {
    key: 2,
    class: "pokras-bg"
  },
  $t = q({
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
      const m = Le().internal.isPokrasTheme;
      return (t, i) => (r(), O("div", ht, [e.title ? (r(), O("div", Ct, _(e.title), 1)) : $("", !0), e.subtitle ? (r(), O("div", Ot, _(e.subtitle), 1)) : $("", !0), a(m) ? (r(), O("div", St)) : $("", !0)]))
    }
  }),
  It = B($t, [
    ["__scopeId", "data-v-4760ce9b"]
  ]),
  At = ["disabled"],
  Rt = q({
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
      const m = e,
        t = A(() => {
          const s = [L.CARD, L.SHORT_CARD].includes(m.itemMode) ? Ue.RIGHT : void 0;
          if (m.tooltip === "validation") return {
            text: w("earn.task.verification_indicator_text"),
            alignment: s
          }
        });
      return (i, s) => {
        const v = dt,
          k = Te;
        return a(t) ? (r(), S(v, {
          key: 0,
          class: "tasks-pill-inline",
          fill: "",
          text: a(t).text,
          alignment: a(t).alignment,
          "text-alignment": "left",
          "text-min-width": 130,
          onClick: s[0] || (s[0] = Pe(() => {}, ["stop"]))
        }, {
          default: D(() => [J(i.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["text", "alignment"])) : e.isQuestButton ? (r(), S(k, {
          key: 1,
          class: "tasks-fill-full",
          fill: "",
          size: a(de).LARGE,
          disabled: e.disabled,
          onClick: s[1] || (s[1] = l => e.onClick && e.onClick(l))
        }, {
          default: D(() => [J(i.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["size", "disabled"])) : (r(), O("button", {
          key: 2,
          class: "tasks-pill-inline",
          disabled: e.disabled,
          onClick: s[2] || (s[2] = l => e.onClick && e.onClick(l))
        }, [J(i.$slots, "default", {}, void 0, !0)], 8, At))
      }
    }
  }),
  Et = B(Rt, [
    ["__scopeId", "data-v-3aaee1da"]
  ]),
  Nt = {
    key: 0,
    class: "label"
  },
  wt = q({
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
      emit: m
    }) {
      const t = e,
        i = m,
        s = x(e, "claimOverride"),
        v = A(() => t.status === V.READY_FOR_CLAIM ? le.DARK : t.status === V.STARTED ? t.mode === te.LIGHT ? le.DARK : le.LIGHT : le.DARK),
        k = A(() => {
          const l = t.reward && !t.reward.isZero() ? w("base.claim_bp", {
              bp: ee(t.reward)
            }) : w("base.claim"),
            c = {
              claimDisabled: {
                label: w("base.claim"),
                cls: "is-disabled",
                disabled: !0
              },
              subtasksModalOpen: {
                label: w("earn.task.buttons.open"),
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
          if (t.status === V.NOT_STARTED) return t.kind === F.ONGOING ? c.claimDisabled : t.isQuestButton ? c.questDisabled : z(t.kind) ? c.subtasksModalOpen : {
            label: w("earn.task.buttons.start"),
            cls: "is-status-not-started",
            onClick: () => {
              s.value = H.STARTED, setTimeout(() => s.value === H.STARTED && (s.value = void 0), 15e3), t.startCallback(), i("click")
            }
          };
          if (t.status === V.STARTED) return t.kind === F.ONGOING ? c.claimDisabled : t.isQuestButton ? c.questDisabled : z(t.kind) ? c.subtasksModalOpen : s.value === H.STARTED ? {
            loader: !0,
            cls: "is-status-started"
          } : {
            icon: "clock",
            cls: "is-status-started",
            tooltip: "validation"
          };
          if (t.status === V.READY_FOR_VERIFY) return {
            label: w("earn.task.buttons.verify"),
            onClick: T => {
              T.stopPropagation(), i("open:verify"), i("click")
            },
            cls: "is-status-ready-for-verify"
          };
          if (s.value === H.LOADING) return {
            loader: !0,
            cls: "is-status-ready-for-claim"
          };
          if (s.value === H.DONE) return {
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
              s.value = H.LOADING, i("click"), await Fe(t.claimCallback, 2e3) ? (s.value = H.DONE, i("ui:claimed")) : s.value = void 0
            }
          };
          throw Ie("Unsupported condition")
        });
      return (l, c) => {
        const T = X,
          b = xe,
          o = Et;
        return r(), S(o, {
          "on-click": a(k).onClick,
          class: Q([
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
          default: D(() => [a(k).label ? (r(), O("div", Nt, _(a(k).label), 1)) : a(k).icon ? (r(), S(T, {
            key: 1,
            name: a(k).icon,
            class: "icon"
          }, null, 8, ["name"])) : a(k).loader ? (r(), S(b, {
            key: 2,
            size: 16,
            type: a(v)
          }, null, 8, ["type"])) : $("", !0)]),
          _: 1
        }, 8, ["on-click", "class", "is-quest-button", "disabled", "tooltip", "item-mode"])
      }
    }
  }),
  he = B(wt, [
    ["__scopeId", "data-v-49254788"]
  ]),
  qt = `PREAMBLE
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
  Dt = {
    key: 0,
    class: "pages-tasks-disclaimer-title"
  },
  Bt = ["src"],
  Mt = {
    key: 1,
    class: "pages-tasks-disclaimer-title"
  },
  _t = {
    key: 0,
    class: "pages-tasks-disclaimer general"
  },
  Lt = {
    class: "checkbox"
  },
  Ut = {
    key: 1,
    class: "pages-tasks-disclaimer details"
  },
  $e = "community@blum.io",
  Pt = q({
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
      const m = e,
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
          t.value = !1, m.startFn && m.startFn()
        },
        T = A(() => {
          const b = qt.split(`
`).reduce((o, n) => {
            const u = n.trim();
            if (!u) return o;
            const d = (() => {
              if (u.includes("{{ community_email }}")) {
                const g = u.split("{{ community_email }}");
                return oe("p", [g[0], oe("span", {
                  class: "as-link",
                  onClick: s
                }, $e), g[1]])
              }
              return oe("p", u)
            })();
            return o.push(d), o
          }, []);
          return oe("div", {
            class: "text"
          }, b)
        });
      return (b, o) => {
        const n = mt,
          u = Te,
          d = Ae,
          g = ae("img-error");
        return r(), S(d, {
          modelValue: t.value,
          "onUpdate:modelValue": o[4] || (o[4] = p => t.value = p),
          title: "",
          "back-icon": a(k).state === "details",
          "content-key": a(k).state,
          onBack: o[5] || (o[5] = p => a(k).state = "general")
        }, {
          title: D(() => [a(k).state === "general" ? (r(), O("span", Dt, [se(C("img", {
            src: e.iconUrl,
            alt: "Task icon"
          }, null, 8, Bt), [
            [g]
          ]), C("span", null, _(e.productName), 1)])) : $("", !0), a(k).state === "details" ? (r(), O("span", Mt, "Disclaimer")) : $("", !0)]),
          default: D(() => [a(k).state === "general" ? (r(), O("div", _t, [o[8] || (o[8] = C("div", {
            class: "text"
          }, [C("p", null, "Nothing in Blum is to be considered as being of promotional nature or aiming at commercial use."), C("p", null, "No material or information which may be made available in Blum shall constitute or be construed as a recommendation, endorsement, offer, invitation or solicitation to enter into any transaction with or purchase any product, or otherwise deal with securities, crypto assets or other products."), C("p", null, "You alone are solely responsible for determining whether any investment, security or any other product or service, is appropriate or suitable for you. You should consult an attorney or tax professional regarding your specific legal or tax situation.")], -1)), C("div", Lt, [R(n, {
            modelValue: a(k).isAgreed,
            "onUpdate:modelValue": o[0] || (o[0] = p => a(k).isAgreed = p)
          }, null, 8, ["modelValue"]), C("span", null, [o[6] || (o[6] = pe("By using Blum, you accept the terms of our ")), C("span", {
            class: "as-link",
            onClick: o[1] || (o[1] = p => a(k).state = "details")
          }, "Disclaimer"), o[7] || (o[7] = pe("."))])])])) : $("", !0), a(k).state === "details" ? (r(), O("div", Ut, [(r(), S(Ke(a(T))))])) : $("", !0)]),
          footer: D(() => [a(k).state === "general" ? (r(), S(u, {
            key: 0,
            label: `Go to ${e.productName}`,
            fill: "",
            size: a(de).LARGE,
            tertiary: "",
            disabled: !a(k).isAgreed,
            onClick: o[2] || (o[2] = p => c())
          }, null, 8, ["label", "size", "disabled"])) : $("", !0), a(k).state === "details" ? (r(), S(u, {
            key: 1,
            label: "I agree",
            fill: "",
            size: a(de).LARGE,
            onClick: o[3] || (o[3] = p => l())
          }, null, 8, ["size"])) : $("", !0)]),
          _: 1
        }, 8, ["modelValue", "back-icon", "content-key"])
      }
    }
  }),
  Ft = B(Pt, [
    ["__scopeId", "data-v-845ec11f"]
  ]),
  xt = {
    class: "pages-tasks-verify"
  },
  Vt = {
    class: "heading"
  },
  Kt = ["src"],
  Gt = {
    class: "title"
  },
  Yt = q({
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
      emit: m
    }) {
      const t = e,
        i = m,
        s = U(""),
        v = U(),
        k = async () => {
          v.value = void 0, v.value = await t.verifyCallback(s.value), v.value === W.SUCCESS && i("close")
        };
      me(s, () => {
        v.value !== void 0 && (v.value = void 0)
      });
      const l = A(() => {
        switch (v.value) {
          case void 0:
            return {
              status: re.REGULAR, caption: w("earn.verify_input.caption.default")
            };
          case W.UNKNOWN_ERROR:
            return {
              status: re.ERROR, caption: w("earn.verify_input.caption.unknown_error")
            };
          case W.WRONG_KEYWORD:
            return {
              status: re.ERROR, caption: w("earn.verify_input.caption.wrong_keyword")
            };
          case W.SUCCESS:
            return {
              status: re.REGULAR
            };
          default:
            throw v.value, Ie("Invalid status")
        }
      });
      return (c, T) => {
        const b = X,
          o = vt,
          n = Te,
          u = ft,
          d = bt,
          g = ae("img-error");
        return r(), S(d, null, {
          default: D(() => [C("div", xt, [C("div", Vt, [se(C("img", {
            src: a(ie)(e.task.iconFileKey),
            alt: "Task icon",
            class: "task-icon"
          }, null, 8, Kt), [
            [g]
          ]), C("div", Gt, _(e.task.title), 1), R(b, {
            name: "external-link",
            class: "link-icon",
            onClick: T[0] || (T[0] = p => c.$emit("doAction"))
          })]), R(o, {
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
            default: D(() => [R(n, {
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
  Ht = B(Yt, [
    ["__scopeId", "data-v-64ea4ace"]
  ]),
  Wt = () => {
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
  we = q({
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
      emit: m
    }) {
      const t = e,
        i = m,
        s = x(e, "claimOverride"),
        v = Wt(),
        k = Ye(),
        l = () => {
          if ([K.SOCIAL_MEDIA_CHECK, K.SOCIAL_SUBSCRIPTION].includes(t.task.type) && t.task.socialSubscription) {
            const f = t.task.socialSubscription.url;
            t.task.socialSubscription.openInTelegram ? Z().$webApp.openTelegramLink(f) : f.startsWith("http") ? Z().$webApp.openLink(f) : ye().push(f)
          }
          if (t.task.type === K.APPLICATION_LAUNCH && t.task.applicationLaunch && Z().$webApp.openTelegramLink(t.task.applicationLaunch.url), t.task.type === K.WALLET_CONNECTION) {
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
                N = `${t.task.id}:${h}`;
              await v.sendTransaction({
                address: y.address,
                amountTON: y.amount,
                message: N
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
            N = y || h,
            M = z(t.task.kind);
          N && (M || l(), M && i("open:subtasks-modal"))
        },
        T = A(() => t.task.kind === F.GROUP ? !0 : !t.task.reward.isZero()),
        b = A(() => {
          var f, y;
          if (!T.value) return "";
          if ((t.task.kind === F.QUEST && t.task.reward.isZero() || t.task.kind === F.GROUP) && "subTasks" in t.task) {
            const h = ((f = t.task.subTasks) == null ? void 0 : f.reduce((M, G) => M.add(G.reward), new ce(0))) ?? new ce(0),
              N = ((y = t.task.subTasks) == null ? void 0 : y.reduce((M, G) => j(G.status, s.value) ? M.add(G.reward) : M, new ce(0))) ?? new ce(0);
            return `+${ee(N)}/${ee(h)} BP`
          }
          return `+${ee(t.task.reward)} BP`
        }),
        o = U(),
        n = U(!1),
        u = () => {
          const f = () => {
            t.task.kind !== F.ONGOING && (z(t.task.kind) || (l(), t.task.type !== K.WALLET_CONNECTION && t.task.type !== K.ONCHAIN_TRANSACTION && t.startCallback()))
          };
          if (t.task.isDisclaimerRequired) {
            o.value = {
              startFn: f
            };
            return
          }
          f()
        },
        d = A(() => {
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
            postfix: ` ${w("base.n.tasks",t.questDetails.countTotal)}`,
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
          title: d,
          progress: g,
          openVerify: () => n.value = !0
        })),
        I = A(() => {
          if (n.value) return () => n.value = !1
        });
      return me(I, f => Re().meta.back = f), (f, y) => {
        var M;
        const h = Ft,
          N = Ht;
        return r(), O(P, null, [J(f.$slots, "default", He(We(a(p)))), R(h, {
          "model-value": !!a(o),
          "product-name": e.task.productName,
          "icon-url": a(ie)(e.task.iconFileKey),
          "start-fn": (M = a(o)) == null ? void 0 : M.startFn,
          "onUpdate:modelValue": y[0] || (y[0] = G => G ? void 0 : o.value = void 0)
        }, null, 8, ["model-value", "product-name", "icon-url", "start-fn"]), a(n) ? (r(), S(N, {
          key: 0,
          task: e.task,
          "verify-callback": e.verifyCallback,
          onDoAction: y[1] || (y[1] = G => l()),
          onClose: y[2] || (y[2] = G => n.value = !1)
        }, null, 8, ["task", "verify-callback"])) : $("", !0)], 64)
      }
    }
  }),
  jt = ["onClick"],
  zt = ["src"],
  Qt = {
    class: "details"
  },
  Xt = {
    class: "title"
  },
  Zt = {
    key: 0,
    class: "progress-reward"
  },
  Jt = {
    key: 0,
    class: "progress"
  },
  ea = {
    key: 1,
    class: "reward"
  },
  ta = q({
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
      const m = x(e, "claimOverride");
      return (t, i) => {
        const s = he,
          v = we,
          k = ae("img-error");
        return r(), S(v, {
          "claim-override": m.value,
          "onUpdate:claimOverride": i[4] || (i[4] = l => m.value = l),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": i[5] || (i[5] = l => t.$emit("open:subtasks-modal"))
        }, {
          default: D(({
            onClick: l,
            rewardText: c,
            startProxy: T,
            title: b,
            progress: o,
            openVerify: n
          }) => {
            var u;
            return [C("div", Xe({
              class: "pages-tasks-list-item-label"
            }, t.$attrs, {
              onClick: l
            }), [C("div", {
              class: Q(["container", {
                "no-border": e.noBorder
              }])
            }, [se(C("img", {
              src: a(ie)(e.task.iconFileKey),
              alt: "Task icon"
            }, null, 8, zt), [
              [k]
            ]), C("div", Qt, [C("div", Xt, _(b.value), 1), o.value || c.value ? (r(), O("div", Zt, [(u = o.value) != null && u.label ? (r(), O("span", Jt, _(`${o.value.label}${o.value.postfix}`) + _(c.value ? ", " : ""), 1)) : $("", !0), c.value ? (r(), O("span", ea, _(c.value), 1)) : $("", !0)])) : $("", !0)]), e.task.status ? (r(), S(s, {
              key: 0,
              "claim-override": m.value,
              "onUpdate:claimOverride": i[0] || (i[0] = d => m.value = d),
              status: e.task.status,
              kind: e.task.kind,
              "start-callback": T,
              "claim-callback": e.claimCallback,
              "is-nested": e.isNested,
              "item-mode": e.itemMode,
              class: "pill-btn",
              "onUi:claimed": i[1] || (i[1] = d => t.$emit("ui:claimed")),
              "onOpen:subtasksModal": i[2] || (i[2] = d => t.$emit("open:subtasks-modal")),
              "onOpen:verify": n,
              onClick: i[3] || (i[3] = d => t.$emit("pill:click"))
            }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "is-nested", "item-mode", "onOpen:verify"])) : $("", !0)], 2)], 16, jt)]
          }),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  qe = B(ta, [
    ["__scopeId", "data-v-61588e22"]
  ]),
  aa = {
    class: "label"
  },
  be = 185.074,
  sa = q({
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
      const m = e,
        t = A(() => be - be * (m.finished / m.total));
      return (i, s) => {
        const v = X;
        return r(), O("div", {
          class: Q(["pages-tasks-progress-pill", `is-${e.mode}`])
        }, [C("span", aa, _(e.label), 1), R(v, {
          name: "special/progress-pill",
          class: "icon"
        })], 2)
      }
    }
  }),
  ia = B(sa, [
    ["__scopeId", "data-v-293728e0"]
  ]),
  na = ["onClick"],
  la = {
    key: 0,
    class: "icons"
  },
  oa = ["src"],
  ra = {
    class: "title"
  },
  ca = {
    key: 1,
    class: "points"
  },
  ua = {
    class: "footer"
  },
  da = q({
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
      const m = e,
        t = A(() => !m.short),
        i = A(() => m.short ? te.LIGHT : te.DARK),
        s = A(() => {
          var l;
          return m.task.kind === F.GROUP ? ((l = m.task.subTasks) == null ? void 0 : l.map(c => c.iconFileKey)) ?? [] : [m.task.iconFileKey]
        }),
        v = x(e, "claimOverride"),
        k = A(() => {
          if (m.short) return;
          if (m.task.color) return m.task.color;
          const l = ["#B9BBBC", "#BCABA6", "#BAAFC3", "#BEC0CB", "#C3BFB3"];
          return l[m.colorMode % l.length]
        });
      return (l, c) => {
        const T = he,
          b = X,
          o = ia,
          n = we,
          u = ae("img-error");
        return r(), S(n, {
          "claim-override": v.value,
          "onUpdate:claimOverride": c[4] || (c[4] = d => v.value = d),
          task: e.task,
          "quest-details": e.questDetails,
          "start-callback": e.startCallback,
          "verify-callback": e.verifyCallback,
          "onOpen:subtasksModal": c[5] || (c[5] = d => l.$emit("open:subtasks-modal"))
        }, {
          default: D(({
            onClick: d,
            startProxy: g,
            title: p,
            progress: I,
            openVerify: f,
            rewardText: y
          }) => [C("div", {
            class: Q(["pages-tasks-card", {
              "is-short": e.short
            }]),
            style: Je({
              backgroundColor: a(k)
            }),
            onClick: d
          }, [a(t) ? (r(), O("div", la, [(r(!0), O(P, null, Y(a(s), (h, N) => se((r(), O("img", {
            key: N,
            src: a(ie)(h),
            alt: "Task icon",
            class: "icon",
            width: "48",
            height: "48"
          }, null, 8, oa)), [
            [u]
          ])), 128))])) : $("", !0), C("div", ra, _(p.value), 1), y.value ? (r(), O("div", ca, _(y.value), 1)) : $("", !0), C("div", ua, [e.task.status ? (r(), S(T, {
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
          }, null, 8, ["claim-override", "status", "kind", "start-callback", "claim-callback", "mode", "item-mode", "onOpen:verify"])) : $("", !0), I.value ? (r(), O(P, {
            key: 1
          }, [I.value.done ? (r(), S(b, {
            key: 0,
            name: "circle-check-white",
            class: "done-icon"
          })) : (r(), S(o, {
            key: 1,
            finished: I.value.finished,
            total: I.value.total,
            label: I.value.label,
            mode: a(i)
          }, null, 8, ["finished", "total", "label", "mode"]))], 64)) : $("", !0)])], 14, na)]),
          _: 1
        }, 8, ["claim-override", "task", "quest-details", "start-callback", "verify-callback"])
      }
    }
  }),
  ma = B(da, [
    ["__scopeId", "data-v-d82f927b"]
  ]),
  De = () => {
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
  ka = {
    key: 1,
    class: "heading"
  },
  va = {
    key: 1,
    class: "description"
  },
  fa = q({
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
      const m = e,
        t = x(e, "modelValue"),
        i = x(e, "tasksClaimOverride"),
        s = A(() => m.task.kind === F.QUEST);
      Oe().getReferralToken();
      const v = () => {
          t.value = !1, c.value = !0
        },
        k = () => {
          c.value = !1, t.value = !0
        },
        l = U(m.task.isShared),
        c = U(!1),
        T = A(() => w("earn.quest.share.text")),
        b = A(() => `tasksheet_${btoa(m.task.id)}-ref_${Oe().referralToken.value}`);
      return De().onOpenTaskSheet(m.task, () => {
        t.value = !0
      }), (o, n) => {
        const u = X,
          d = pt,
          g = qe,
          p = he,
          I = Ae,
          f = at;
        return r(), O(P, null, [R(I, {
          modelValue: t.value,
          "onUpdate:modelValue": n[3] || (n[3] = y => t.value = y),
          title: e.title
        }, tt({
          default: D(() => [C("div", {
            class: Q(["pages-tasks-subtasks-modal", {
              "has-share": a(l)
            }])
          }, [a(l) ? (r(), O("button", {
            key: 0,
            type: "button",
            class: "reset share-btn",
            onClick: v
          }, [R(u, {
            name: "share",
            class: "icon"
          }), n[5] || (n[5] = C("div", {
            class: "labe"
          }, "Invite and earn up to 8% revshare", -1))])) : $("", !0), e.task.bannerFileKey || e.task.description ? (r(), O("div", ka, [e.task.bannerFileKey ? (r(), S(d, {
            key: 0,
            url: a(ie)(e.task.bannerFileKey),
            alt: "Task banner",
            class: "banner"
          }, null, 8, ["url"])) : $("", !0), e.task.description ? (r(), O("div", va, _(e.task.description), 1)) : $("", !0)])) : $("", !0), e.task.subTasks ? (r(), S(ge, {
            key: 2,
            tag: "div",
            name: "list-shuffle-transition",
            class: "nested-tasks"
          }, {
            default: D(() => [(r(!0), O(P, null, Y(e.task.subTasks, (y, h) => (r(), S(g, {
              key: y.id,
              "claim-override": i.value[y.id],
              "onUpdate:claimOverride": N => i.value[y.id] = N,
              task: y,
              "start-callback": () => e.startSubTaskCallback(y),
              "claim-callback": () => e.claimCallback(y),
              "verify-callback": N => e.verifyCallback(y, N),
              "no-border": h === e.task.subTasks.length - 1,
              "item-mode": a(L).LIST_ITEM,
              "is-nested": "",
              "onUi:claimed": N => o.$emit("ui:claimed", {
                task: y,
                isQuest: !1
              }),
              onClick: N => o.$emit("click:task", y),
              "onPill:click": N => o.$emit("pill:click", y)
            }, null, 8, ["claim-override", "onUpdate:claimOverride", "task", "start-callback", "claim-callback", "verify-callback", "no-border", "item-mode", "onUi:claimed", "onClick", "onPill:click"]))), 128))]),
            _: 1
          })) : $("", !0)], 2)]),
          _: 2
        }, [a(s) ? {
          name: "footer",
          fn: D(() => [e.task.status && !a(j)(e.task.status, i.value[e.task.id]) ? (r(), S(p, {
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
            "onUi:claimed": n[1] || (n[1] = y => o.$emit("ui:claimed", {
              task: e.task,
              isQuest: !0
            })),
            onClick: n[2] || (n[2] = y => o.$emit("pill:click", e.task))
          }, null, 8, ["claim-override", "status", "kind", "reward", "claim-callback", "item-mode"])) : $("", !0)]),
          key: "0"
        } : void 0]), 1032, ["modelValue", "title"]), R(f, {
          modelValue: a(c),
          "onUpdate:modelValue": n[4] || (n[4] = y => ne(c) ? c.value = y : null),
          title: ("t" in o ? o.t : a(w))("earn.quest.share.sheet.title"),
          "share-text": a(T),
          subtitle: e.task.sharingDescription,
          startapp: a(b),
          "copied-notification": ("t" in o ? o.t : a(w))("frens.invite.link_copied"),
          "back-icon": "",
          onBack: k
        }, null, 8, ["modelValue", "title", "share-text", "subtitle", "startapp", "copied-notification"])], 64)
      }
    }
  }),
  ba = B(fa, [
    ["__scopeId", "data-v-84322842"]
  ]),
  pa = q({
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
      emit: m
    }) {
      const t = e,
        i = m,
        s = x(e, "tasksClaimOverride"),
        v = U(!1),
        k = U(void 0),
        l = A(() => {
          var o, n;
          if (!z(t.task.kind)) return;
          const T = ((o = t.task.subTasks) == null ? void 0 : o.length) ?? 0,
            b = ((n = t.task.subTasks) == null ? void 0 : n.filter(u => j(u.status, s.value[u.id])).length) ?? 0;
          return {
            countTotal: T,
            countFinished: b,
            progressLabel: `${b}/${T} ${w("base.n.tasks",T)}`,
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
        const o = qe,
          n = ma,
          u = ba;
        return r(), O("div", {
          ref_key: "taskItemEl",
          ref: k,
          class: "pages-tasks-item"
        }, [e.mode === a(L).LIST_ITEM ? (r(), S(o, {
          key: 0,
          "claim-override": s.value[e.task.id],
          "onUpdate:claimOverride": b[0] || (b[0] = d => s.value[e.task.id] = d),
          task: e.task,
          "quest-details": a(l),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": d => e.verifyCallback(e.task, d),
          "item-mode": e.mode,
          "onUi:claimed": b[1] || (b[1] = d => T.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": b[2] || (b[2] = d => v.value = !0),
          "onPill:click": b[3] || (b[3] = d => T.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "item-mode"])) : e.mode === a(L).SHORT_CARD || e.mode === a(L).CARD ? (r(), S(n, {
          key: 1,
          "claim-override": s.value[e.task.id],
          "onUpdate:claimOverride": b[4] || (b[4] = d => s.value[e.task.id] = d),
          task: e.task,
          "quest-details": a(l),
          "start-callback": () => e.startCallback(e.task),
          "claim-callback": () => e.claimCallback(e.task),
          "verify-callback": d => e.verifyCallback(e.task, d),
          short: e.mode === a(L).SHORT_CARD,
          "color-mode": e.idx,
          "item-mode": e.mode,
          "onUi:claimed": b[5] || (b[5] = d => T.$emit("ui:claimed", e.task)),
          "onOpen:subtasksModal": b[6] || (b[6] = d => v.value = !0),
          "onPill:click": b[7] || (b[7] = d => T.$emit("pill:click", e.task))
        }, null, 8, ["claim-override", "task", "quest-details", "start-callback", "claim-callback", "verify-callback", "short", "color-mode", "item-mode"])) : $("", !0), a(l) ? (r(), S(u, {
          key: 2,
          modelValue: a(v),
          "onUpdate:modelValue": b[8] || (b[8] = d => ne(v) ? v.value = d : null),
          "tasks-claim-override": s.value,
          "onUpdate:tasksClaimOverride": b[9] || (b[9] = d => s.value = d),
          task: e.task,
          title: a(l).modalTitle,
          "start-sub-task-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "item-mode": e.mode,
          "onUi:claimed": b[10] || (b[10] = d => c(d)),
          "onPill:click": b[11] || (b[11] = d => T.$emit("pill:click", d))
        }, null, 8, ["modelValue", "tasks-claim-override", "task", "title", "start-sub-task-callback", "claim-callback", "verify-callback", "item-mode"])) : $("", !0)], 512)
      }
    }
  }),
  Be = B(pa, [
    ["__scopeId", "data-v-86f27969"]
  ]),
  ya = q({
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
      const m = e,
        t = x(e, "tasksClaimOverride"),
        i = Ee(),
        s = n => [L.SHORT_CARD, L.CARD].includes(m.taskMode) ? m.tasks.some(d => d.id === n.id) : !1,
        v = {},
        k = (n, u) => ({
          source: u + 1,
          kind: n.kind,
          type: n.type,
          title: n.title,
          task_id: n.id,
          ...!z(n.kind) || !("subTasks" in n) || !n.subTasks ? {
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
          const d = k(n, u);
          m.taskMode === L.CARD ? i.earn.earnHighlightsTaskShow(d) : m.taskMode === L.SHORT_CARD && i.earn.earnWeeklyTaskShow(d)
        },
        c = (n, u) => {
          if (!s(n)) return;
          v[n.id] || l(n, u);
          const d = k(n, u);
          m.taskMode === L.CARD ? i.earn.earnHighlightsTaskClick(d) : m.taskMode === L.SHORT_CARD && i.earn.earnWeeklyTaskClick(d)
        },
        T = new IntersectionObserver(n => {
          const u = n[0],
            d = u.target.getAttribute("data-task-id");
          if (!d) return;
          const g = m.tasks.find(y => y.id === d);
          if (!g || !(u.intersectionRatio >= .5)) return;
          const I = g,
            f = m.tasks.indexOf(I);
          l(I, f)
        }, {
          threshold: .5
        }),
        b = (n, u) => {
          s(n) && T.observe(u)
        },
        o = (n, u) => {
          s(n) && T.unobserve(u)
        };
      return ke(() => T.disconnect()), (n, u) => {
        const d = Be,
          g = ae("horizontal-wheel-scroll");
        return se((r(), S(ge, {
          tag: "div",
          name: "list-shuffle-transition",
          class: Q(["pages-tasks-list", `is-${e.taskMode.toLowerCase()}`])
        }, {
          default: D(() => [(r(!0), O(P, null, Y(e.tasks, (p, I) => (r(), S(d, {
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
            onUnmounted: f => o(p, f)
          }, null, 8, ["tasks-claim-override", "task", "start-callback", "claim-callback", "verify-callback", "mode", "idx", "data-task-id", "onPill:click", "onMounted", "onUnmounted"]))), 128))]),
          _: 1
        }, 8, ["class"])), [
          [g]
        ])
      }
    }
  }),
  Ta = B(ya, [
    ["__scopeId", "data-v-e804420d"]
  ]),
  ga = {
    key: 0,
    class: "pages-tasks-sub-sections"
  },
  ha = {
    key: 0,
    class: "empty"
  },
  Ca = {
    class: "inner"
  },
  Oa = q({
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
      const m = e,
        t = x(e, "tasksClaimOverride"),
        i = A(() => m.subSections.map(l => ({
          value: l.title,
          label: l.title,
          dot: l.tasks.some(c => it(c, t.value))
        }))),
        s = U((k = i.value[0]) == null ? void 0 : k.value),
        v = A(() => {
          var l;
          return ((l = m.subSections.find(c => c.title === s.value)) == null ? void 0 : l.tasks) ?? []
        });
      return (l, c) => {
        const T = kt,
          b = X,
          o = Be;
        return a(v).length ? (r(), O("div", ga, [R(T, {
          modelValue: a(s),
          "onUpdate:modelValue": c[0] || (c[0] = n => ne(s) ? s.value = n : null),
          items: a(i)
        }, null, 8, ["modelValue", "items"]), a(v).length ? (r(), S(ge, {
          key: a(s),
          tag: "div",
          name: "list-shuffle-transition",
          class: "tasks-list"
        }, {
          default: D(() => [(r(!0), O(P, null, Y(a(v), n => (r(), S(o, {
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
        })) : (r(), O("div", ha, [C("div", Ca, [R(b, {
          name: "warning-circle-check",
          class: "icon"
        }), c[4] || (c[4] = C("span", {
          class: "label"
        }, " Hooray! You've nailed every task! ", -1))])]))])) : $("", !0)
      }
    }
  }),
  Sa = B(Oa, [
    ["__scopeId", "data-v-2fd71113"]
  ]),
  $a = {
    class: "pages-tasks-section"
  },
  Ia = q({
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
      const m = e,
        t = A(() => nt(m.section)),
        i = x(e, "tasksClaimOverride"),
        s = k => {
          const l = k.tasks,
            c = u => !Ne(u),
            T = u => Se(u, i.value),
            b = u => {
              const d = u.subTasks ? Se(u.subTasks, i.value) : void 0;
              return {
                ...u,
                subTasks: d
              }
            },
            o = u => {
              const d = u.filter(c);
              return T(d).map(b)
            },
            n = u => u.map(d => ({
              ...d,
              tasks: o(d.tasks)
            }));
          return {
            ...k,
            tasks: o(l),
            subSections: n(k.subSections)
          }
        },
        v = A(() => s(m.section));
      return (k, l) => {
        const c = It,
          T = Ta,
          b = Sa;
        return r(), O("div", $a, [a(v).title || a(v).description ? (r(), S(c, {
          key: 0,
          title: a(v).title,
          subtitle: a(v).description
        }, null, 8, ["title", "subtitle"])) : $("", !0), a(v).tasks.length ? (r(), S(T, {
          key: 1,
          "tasks-claim-override": i.value,
          "onUpdate:tasksClaimOverride": l[0] || (l[0] = o => i.value = o),
          tasks: a(v).tasks,
          "task-mode": a(t),
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": l[1] || (l[1] = o => k.$emit("ui:claimed", o)),
          "onRequest:update": l[2] || (l[2] = o => k.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "tasks", "task-mode", "start-callback", "claim-callback", "verify-callback"])) : $("", !0), R(b, {
          "tasks-claim-override": i.value,
          "onUpdate:tasksClaimOverride": l[3] || (l[3] = o => i.value = o),
          "sub-sections": a(v).subSections,
          "start-callback": e.startCallback,
          "claim-callback": e.claimCallback,
          "verify-callback": e.verifyCallback,
          "onUi:claimed": l[4] || (l[4] = o => k.$emit("ui:claimed", o)),
          "onRequest:update": l[5] || (l[5] = o => k.$emit("request:update"))
        }, null, 8, ["tasks-claim-override", "sub-sections", "start-callback", "claim-callback", "verify-callback"])])
      }
    }
  }),
  Aa = B(Ia, [
    ["__scopeId", "data-v-2f6edcc7"]
  ]),
  Ra = q({
    __name: "PageSkeleton",
    props: {
      delay: {
        type: Number,
        default: 120
      }
    },
    setup(e) {
      const m = e,
        t = U(!1),
        i = setTimeout(() => t.value = !0, m.delay);
      return ke(() => clearTimeout(i)), (s, v) => a(t) ? J(s.$slots, "default", {
        key: 0
      }) : $("", !0)
    }
  }),
  Ea = {},
  Na = {
    class: "pages-tasks-skeleton"
  },
  wa = {
    class: "cards"
  },
  qa = {
    class: "subtitle-wrapper"
  },
  Da = {
    class: "short-cards"
  },
  Ba = {
    class: "subtitle-wrapper"
  },
  Ma = {
    class: "list-items"
  };

function _a(e, m) {
  const t = yt,
    i = Ra;
  return r(), S(i, null, {
    default: D(() => [C("div", Na, [R(t, {
      class: "title"
    }), C("div", wa, [(r(), O(P, null, Y(2, s => R(t, {
      key: s,
      class: "item"
    })), 64))]), C("div", qa, [R(t, {
      class: "subtitle"
    })]), C("div", Da, [(r(), O(P, null, Y(2, s => R(t, {
      key: s,
      class: "item"
    })), 64))]), C("div", Ba, [R(t, {
      class: "subtitle"
    })]), C("div", Ma, [(r(), O(P, null, Y(7, s => C("div", {
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
const La = B(Ea, [
    ["render", _a],
    ["__scopeId", "data-v-4fe8da9f"]
  ]),
  Ua = {
    class: "tasks-page page"
  },
  Pa = {
    class: "header"
  },
  Fa = {
    class: "title"
  },
  xa = {
    class: "sections"
  },
  Va = q({
    __name: "tasks",
    setup(e) {
      const m = Ee(),
        t = A(() => Re().query.openTaskSheetId),
        i = U(!1),
        s = U(),
        v = U({}),
        l = lt(async () => ut(await ue.getTasksSections(Z().$webApp.dataUnsafe.query.ref)), g => s.value = g, 15e3),
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
          return p.err ? !1 : (c(g.id, p.data), rt().update(), !0)
        }, o = async (g, p) => {
          const I = await ue.verifyTask(g.id, p);
          return I.err ? I.code === 400 ? W.WRONG_KEYWORD : W.UNKNOWN_ERROR : (c(g.id, I.data), W.SUCCESS)
        }, n = g => {
          setTimeout(() => delete v.value[g.id], 3e3), g.reward.isZero() || ct().success(w("base.you_got_bp", {
            bp: ee(g.reward)
          }))
        }, u = A(() => s.value ? s.value.reduce((p, I) => ([...I.tasks, ...I.tasks.flatMap(h => h.subTasks ?? []), ...I.subSections.flatMap(h => h.tasks ?? [])].filter(h => !j(h.status, v.value[h.id]) && !Ne(h) && h.kind !== F.GROUP).map(h => h.id).forEach(h => p.add(h)), p), new Set).size : 0);
      return (async () => {
        m.earn.earnTaskMainPageOpen(), await l.exec()
      })(), me(() => [s.value, t.value], () => {
        if (!s.value || !t.value) return;
        ye().replace({
          query: {}
        });
        const g = s.value.flatMap(p => p.tasks).find(p => p.id === t.value && [F.QUEST, F.GROUP].includes(p.kind));
        g && ot(() => De().openTaskSheet(g))
      }), ke(() => {
        l.destroy()
      }), (g, p) => {
        const I = gt,
          f = Aa,
          y = La;
        return r(), O("div", Ua, [a(i) ? (r(), S(I, {
          key: 0
        })) : a(s) ? (r(), O(P, {
          key: 1
        }, [C("div", Pa, [C("span", Fa, [pe(_(("t" in g ? g.t : a(w))("earn.title")) + " ", 1), C("sup", null, _(a(u)), 1)])]), C("div", xa, [(r(!0), O(P, null, Y(a(s), (h, N) => (r(), S(f, {
          key: N,
          "tasks-claim-override": a(v),
          "onUpdate:tasksClaimOverride": p[0] || (p[0] = M => ne(v) ? v.value = M : null),
          section: h,
          "start-callback": T,
          "claim-callback": b,
          "verify-callback": o,
          class: "section",
          "onUi:claimed": p[1] || (p[1] = M => n(M)),
          "onRequest:update": p[2] || (p[2] = M => a(l).exec())
        }, null, 8, ["tasks-claim-override", "section"]))), 128))])], 64)) : (r(), S(y, {
          key: 2
        }))])
      }
    }
  }),
  Ja = B(Va, [
    ["__scopeId", "data-v-9aeda16e"]
  ]);
export {
  Ja as
  default
};