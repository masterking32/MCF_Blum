import {
  d as Xt,
  o as rt,
  c as ut,
  e as U,
  V as ii,
  f as Yt,
  a as Y,
  ac as ai,
  m as Ye,
  t as ot,
  n as Fe,
  M as Gt,
  b9 as Ss,
  E as ce,
  ba as oi,
  _ as xe,
  N as ci,
  Y as li,
  j as ae,
  O as ui,
  P as er,
  dk as di,
  a3 as Is,
  a6 as dn,
  aK as fn,
  a4 as Yn,
  a5 as ps,
  C as ct,
  a7 as nr,
  D as Nt,
  b as at,
  aL as sr,
  y as me,
  aa as Un,
  aH as Wn,
  aI as _i,
  W as we,
  F as je,
  q as fs,
  p as rr,
  bi as pi,
  bP as fi,
  x as rn,
  X as hs,
  H as hi,
  Q as gi,
  w as bi,
  aq as mi,
  av as Cs,
  aw as ir,
  bd as gs,
  b0 as ar,
  B as Zn,
  a0 as qn,
  ai as or,
  am as cr,
  ak as wi,
  b1 as Ts,
  bw as yi,
  ap as Es,
  ca as tt,
  bv as mn,
  as as vi,
  cl as lr,
  dl as Ai,
  ce as ki,
  a2 as Si,
  bS as ur,
  T as Ii,
  c5 as ts,
  a1 as Ci,
  ay as Ti,
  br as Ei,
  an as Ps
} from "./BhDmcp0J.js";
import {
  _ as dr
} from "./DKXENsc2.js";
import {
  _ as Pi
} from "./D6htqxbw.js";
import {
  _ as _r
} from "./CWVdJjrF.js";
import {
  g as Mi
} from "./DiTdHwz-.js";
import {
  _ as pr
} from "./Bbuyy3BV.js";
import {
  _ as fr
} from "./BU6lr6GK.js";
import {
  _ as Oi
} from "./C2S_QJmL.js";
import {
  _ as Di
} from "./CTQq9vtL.js";
import {
  a as Ri
} from "./DClvwgrl.js";
const Li = ["src"],
  Fi = Xt({
    __name: "Image",
    props: {
      name: {}
    },
    setup(n) {
      return (t, e) => (rt(), ut("img", {
        class: "kit-image",
        src: ("imgResolver" in t ? t.imgResolver : U(ii))(t.name)
      }, null, 8, Li))
    }
  }),
  Ni = Yt(Fi, [
    ["__scopeId", "data-v-d66ca65e"]
  ]),
  Ki = Xt({
    __name: "Pill",
    props: {
      label: {},
      type: {},
      disabled: {
        type: Boolean
      },
      state: {},
      icon: {}
    },
    emits: ["click"],
    setup(n, {
      emit: t
    }) {
      const e = n,
        s = t,
        r = () => {
          e.disabled || e.state !== "default" || s("click")
        };
      return (i, o) => {
        const l = oi,
          _ = xe;
        return rt(), ut("button", {
          class: Fe(["kit-pill reset", [{
            "is-disabled": i.disabled
          }, `is-type-${e.type??"default"}`]]),
          onClick: o[0] || (o[0] = f => r())
        }, [Y("div", {
          class: Fe(["label", {
            "is-hidden": e.state !== "default"
          }])
        }, [ai(i.$slots, "default", {}, () => [Ye(ot(e.label), 1)], !0)], 2), e.state === "loading" ? (rt(), Gt(l, {
          key: 0,
          size: 16,
          class: "spinner",
          type: e.type === "dark" ? U(Ss).LIGHT : U(Ss).DARK
        }, null, 8, ["type"])) : e.state === "icon" ? (rt(), Gt(_, {
          key: 1,
          name: e.icon,
          class: "icon"
        }, null, 8, ["name"])) : ce("", !0)], 2)
      }
    }
  }),
  hr = Yt(Ki, [
    ["__scopeId", "data-v-670973e0"]
  ]),
  Ms = (n, t = 3, e = !1) => ({
    decimal: n,
    formatted: er(n, {
      accuracy: t,
      trim: e
    })
  }),
  Os = () => {
    const n = ci(),
      t = li(),
      e = async () => {
        const {
          res: i,
          transferTime: o
        } = await di(Is.startFarming);
        return i.err ? (dn().error(), fn()) : (i.data.currentTime += o, t.internal.setFarming(i.data), Yn({}))
      }, s = async () => {
        const i = r.value;
        return i.status !== "done" ? (dn().error(), fn()) : (await Is.claimFarming()).err ? (dn().error(), fn()) : (ps().makeConfetti(), dn().success(ct("base.you_got_bp", {
          bp: i.balance.formatted
        })), t.internal.setFarming(void 0), t.update(), nr().farming.farmingClaimed(i.balance.decimal), Yn({}))
      }, r = ae(() => {
        const i = n.ms100ticker.value,
          o = t.pointSymbols.value.bp;
        if (!i || !o) return {
          status: "loading"
        };
        const l = o.farming;
        if (l === void 0 || i < l.startTime) return {
          status: "ready"
        };
        if (i > l.endTime) {
          const p = l.earningsRate.mul(l.endTime - l.startTime).div(1e3);
          return {
            status: "done",
            balance: Ms(p, 1, !0)
          }
        }
        const _ = (() => {
            const p = Math.max(l.startTime, l.currentTime),
              T = Math.min(l.endTime, i),
              b = Math.max(0, T - p);
            if (b === 0) return l.balance;
            const S = l.earningsRate.mul(b).div(1e3);
            return l.balance.add(S)
          })(),
          f = (i - l.startTime) / (l.endTime - l.startTime) * 100;
        return {
          status: "active",
          balance: Ms(_),
          progress: f,
          timeRemainingLabel: ui(l.endTime - i, "letters")
        }
      });
    return {
      start: e,
      claim: s,
      activeFarming: r
    }
  },
  ji = {
    class: "pages-wallet-asset-farming-slot"
  },
  $i = Xt({
    __name: "AssetFarmingSlot",
    setup(n) {
      const t = Os().activeFarming,
        {
          start: e,
          claim: s
        } = Os();
      return (r, i) => {
        const o = hr,
          l = Pi,
          _ = xe,
          f = _r;
        return rt(), ut("div", ji, [U(t).status === "loading" ? (rt(), Gt(o, {
          key: 0,
          state: "loading",
          label: ("t" in r ? r.t : U(ct))("base.farm"),
          type: "dark"
        }, null, 8, ["label"])) : U(t).status === "ready" ? (rt(), Gt(l, {
          key: 1,
          label: ("t" in r ? r.t : U(ct))("base.farm"),
          "can-claim": "",
          "claim-fn": U(e),
          type: "dark"
        }, null, 8, ["label", "claim-fn"])) : U(t).status === "active" ? (rt(), Gt(f, {
          key: 2,
          nowrap: ""
        }, {
          default: Nt(() => [at(o, {
            label: "",
            state: "default",
            type: "dark",
            class: "farming",
            style: sr({
              "background-position-x": `-${U(t).progress}%`
            })
          }, {
            default: Nt(() => [at(_, {
              name: "clock"
            }), Y("div", null, ot(U(t).balance.formatted) + " BP", 1)]),
            _: 1
          }, 8, ["style"])]),
          inner: Nt(() => [Ye(ot(("t" in r ? r.t : U(ct))("index.farming.left_to_farm", {
            time: U(t).timeRemainingLabel
          })), 1)]),
          _: 1
        })) : U(t).status === "done" ? (rt(), Gt(l, {
          key: 3,
          label: ("t" in r ? r.t : U(ct))("base.claim_bp", {
            bp: U(t).balance.formatted
          }),
          "can-claim": "",
          "claim-fn": U(s)
        }, null, 8, ["label", "claim-fn"])) : ce("", !0)])
      }
    }
  }),
  Bi = Yt($i, [
    ["__scopeId", "data-v-dace0b45"]
  ]),
  xi = {
    class: "pages-wallet-asset-memepoint-slot"
  },
  zi = {
    class: "title"
  },
  Ui = {
    class: "items"
  },
  Wi = ["onClick"],
  Gi = {
    class: "content"
  },
  Hi = {
    class: "label"
  },
  Vi = {
    class: "description"
  },
  Qi = {
    key: 0,
    class: "reward"
  },
  Ji = {
    key: 1,
    class: "postfix"
  },
  Xi = Xt({
    __name: "AssetMemepointSlot",
    setup(n) {
      const t = me(!1),
        e = () => {
          t.value = !0, nr().wallet.tradeToEarnClick(pi().name)
        },
        s = ae(() => [{
          label: ct("wallet.points.meme_modal.launch_token"),
          icon: "emoji/Seedling",
          reward: {
            mp: 500
          },
          onClick: () => Un().push({
            name: "memepad-new",
            query: {
              memepadFrom: Wn.TRADE_TO_EARN_MODAL,
              memepadNewFrom: _i.TRADE_TO_EARN_MODAL
            }
          })
        }, {
          label: ct("wallet.points.meme_modal.token_to_dex"),
          icon: "emoji/Clover",
          reward: {
            mp: 1e4
          },
          onClick: () => Un().push({
            name: "memepad",
            query: {
              memepadFrom: Wn.TRADE_TO_EARN_MODAL
            }
          })
        }, {
          label: ct("wallet.points.meme_modal.trade_on_memepad"),
          icon: "emoji/MoneyWings",
          reward: {
            mp: 50
          },
          postfix: ct("wallet.points.meme_modal.trade_on_memepad_postfix"),
          onClick: () => Un().push({
            name: "memepad",
            query: {
              memepadFrom: Wn.TRADE_TO_EARN_MODAL
            }
          })
        }, {
          label: ct("wallet.points.meme_modal.trade_with_bot"),
          icon: "emoji/Rocket",
          reward: {
            mp: 750
          },
          postfix: ct("wallet.points.meme_modal.trade_with_bot_postfix"),
          onClick: () => ps().openTradingBot()
        }]),
        r = i => {
          const o = "+" + er(i.mp) + " Meme points",
            l = i.usd ? "$" + fi(i.usd, {
              trim: !0
            }) : void 0;
          return [o, l].filter(Boolean).join(" / ")
        };
      return (i, o) => {
        const l = hr,
          _ = xe,
          f = Ni,
          p = rn,
          T = hs;
        return rt(), ut("div", xi, [at(l, {
          state: "default",
          label: ("t" in i ? i.t : U(ct))("wallet.points.trade_to_earn"),
          type: "dark",
          onClick: o[0] || (o[0] = b => e())
        }, null, 8, ["label"]), at(T, {
          modelValue: U(t),
          "onUpdate:modelValue": o[2] || (o[2] = b => rr(t) ? t.value = b : null),
          class: "sheet"
        }, {
          footer: Nt(() => [at(p, {
            fill: "",
            label: "Got it",
            size: U(we).LARGE,
            onClick: o[1] || (o[1] = b => t.value = !1)
          }, null, 8, ["size"])]),
          default: Nt(() => [Y("div", zi, ot(("t" in i ? i.t : U(ct))("wallet.points.meme_modal.title")), 1), Y("div", Ui, [(rt(!0), ut(je, null, fs(U(s), (b, S) => (rt(), ut("div", {
            key: S,
            class: "item",
            onClick: A => b.onClick()
          }, [Y("div", Gi, [Y("div", Hi, [Y("div", null, ot(b.label), 1), at(_, {
            name: "chevron-right",
            class: "icon"
          })]), Y("div", Vi, [b.reward ? (rt(), ut("span", Qi, ot(r(b.reward)), 1)) : ce("", !0), b.postfix ? (rt(), ut("span", Ji, ot(" " + b.postfix), 1)) : ce("", !0)])]), at(f, {
            name: b.icon,
            class: "image"
          }, null, 8, ["name"])], 8, Wi))), 128))])]),
          _: 1
        }, 8, ["modelValue"])])
      }
    }
  }),
  Yi = Yt(Xi, [
    ["__scopeId", "data-v-3ac5e09e"]
  ]),
  Zi = "data:image/webp;base64,UklGRpIDAABXRUJQVlA4IIYDAADQFACdASpsAGwAPpFEnUqlo6KhpVgKILASCWUAWFN9/by89J6Kf9h0ufqZ70BfkvWF/FXooD6r8T5Of5DwvlMXGf5xxH9s96p+AhMV/s3ohaL0hO5eIwlmmSfvE0B/iHwH+KHt3ta1MXqVxXBEOHRidUrpP5WI3s28oSm5yr+d5saE0Cu90p5z1C4RVEyhQ0hNbrGFS2u6zOZZxSXMZdcaZq7ybwcAslHnpnMMrwwwAP702b/3Sfqf6L2yd4xKGEaPJY4FKzh1M6qHoTRODvzoIk3DvrHaRrF8AsmvgwWZWqnakiNQva8SKkShA1kdSB/SUwvJW45zI/9LEvPaExqEPSWJIjrmVckL2WqgCa9zqT+57V0U/VvBat1779n4Pxjih3pQk1pa2dwHjZCP1IgMU/KKzdn71rF01EncXp4sf/EKWRsjcrgXbk+xVDtS1BllgkIbnFmDpnpKm3lE/FCd2P/3+rVvnoxfzPW57yz5HdwfRB4yIIgcnLboTfCVnQMTRHme1F66w6mqU0dIgpwFdQXTUA4b9M//jWr1Om/oVAqXqR0dOWWrxb7Xu5P+y1NhhZ1IODK3ciL8xNE7N2n6cg/BCEOLWRz2lm5gCot1ai25zK5qQuRltxkhhDoCxTqYZaVNx3LxbBgGGpN3XpuR6GkXrZtnRcxXr/sLKKjvilrDQ+SjCcTMIfzLvAbn+sUWcvu57H7m90sO2z0IuuVW4KizGDtsCPZK/008ZXvZjFapbqIeOBKnnzLgMWmXfATvjR6x+1vAWigIu4EcMmkfcYx8M+j48vqSVwcGiFmYZ9uH5KpMTGIhIS/ifAZqffXsvZGGFH7MZuQV7V3fLoHENi1qj8KTj39WFO0rygXc0umNFtIBy2s+kXwcZDv7SkYzzHpfuoEDIjDc1Iyf1+eclPsw5EZeggMlO324jxKKv1Z3Grh2lkUzojlaLGAwCZsU+dKxHojwdQk5t+5/rvPCm8O/wq4E3XXMMpVDxlmP0Gt064Rz67+qWCtmGuR8+rSB0ONJHgakegjQsWtaGpmq6nocsJb/nxcZqEPuNZnFN6fkavpUXu/as9q0CJof5gd91+SbkVnALl9jU7tWb4P8erfM0fXXrCg1DMoNq/CU8e5K3MtGtN254JYdrmJJoSFVJNrfQA5kWQ5ZO43VE1A0KPjDWLIUPxJUwl01WDGuiDuAAAAAAA==",
  qi = ["src"],
  ta = {
    class: "compose"
  },
  ea = {
    class: "name"
  },
  na = {
    key: 1,
    class: "balance"
  },
  sa = {
    key: 0,
    class: "right-slot"
  },
  ra = {
    key: 1,
    class: "fiat"
  },
  ia = Xt({
    __name: "Asset",
    props: {
      id: {},
      name: {},
      symbol: {},
      balance: {},
      fiat: {},
      imageUrl: {},
      clickable: {
        type: Boolean
      },
      description: {},
      pnlPercent: {},
      link: {}
    },
    setup(n) {
      const t = n,
        e = ae(() => t.symbol === "BP" ? {
          type: "farming"
        } : t.symbol === "MP" ? {
          type: "memepoint"
        } : t.symbol === "PP" ? void 0 : t.fiat.USD === void 0 ? {
          type: "fiat",
          value: void 0,
          pnl: void 0
        } : {
          type: "fiat",
          value: t.fiat.USD.defaultWithSymbol,
          pnl: t.pnlPercent ? Mi(t.pnlPercent) : void 0
        }),
        s = ae(() => t.link ? hi : "div");
      return (r, i) => {
        const o = dr,
          l = Bi,
          _ = Yi,
          f = gi("img-error");
        return rt(), Gt(mi(U(s)), {
          to: r.link,
          class: Fe(["pages-wallet-asset", {
            clickable: r.clickable
          }])
        }, {
          default: Nt(() => [bi(Y("img", {
            src: r.imageUrl,
            alt: "Coin item icon",
            class: "icon"
          }, null, 8, qi), [
            [f, U(Zi)]
          ]), Y("div", ta, [Y("div", ea, ot(r.name), 1), r.description ? (rt(), ut("div", {
            key: 0,
            class: Fe(["balance", {
              highlight: r.description.highlighted
            }])
          }, ot(r.description.value), 3)) : (rt(), ut("div", na, ot(r.balance.defaultWithSymbol), 1))]), U(e) ? (rt(), ut("div", sa, [U(e).type === "fiat" ? (rt(), ut(je, {
            key: 0
          }, [U(e).value === void 0 ? (rt(), Gt(o, {
            key: 0,
            class: "fiat-skeleton"
          })) : (rt(), ut("div", ra, ot(U(e).value), 1)), U(e).pnl ? (rt(), ut("div", {
            key: 2,
            class: Fe(["pnl-label", U(e).pnl.cls])
          }, ot(U(e).pnl.formatted), 3)) : ce("", !0)], 64)) : U(e).type === "farming" ? (rt(), Gt(l, {
            key: 1
          })) : U(e).type === "memepoint" ? (rt(), Gt(_, {
            key: 2
          })) : ce("", !0)])) : ce("", !0)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  aa = Yt(ia, [
    ["__scopeId", "data-v-507ba0bb"]
  ]),
  oa = {
    key: 0,
    class: "inner"
  },
  ca = {
    class: "image-wrapper"
  },
  la = {
    class: "title"
  },
  ua = {
    key: 0,
    class: "wrong-wallet-address"
  },
  da = {
    class: "text"
  },
  _a = {
    class: "buttons"
  },
  pa = {
    class: "wallet"
  },
  fa = {
    class: "icon-wrapper"
  },
  ha = {
    class: "address"
  },
  ga = {
    class: "status"
  },
  ba = {
    class: "label"
  },
  ma = {
    key: 1,
    class: "not-enough-to-transfer"
  },
  wa = {
    class: "text"
  },
  ya = {
    class: "buttons"
  },
  va = {
    class: "balance"
  },
  Aa = {
    class: "top"
  },
  ka = {
    class: "asset"
  },
  Sa = ["src"],
  Ia = {
    class: "label"
  },
  Ca = {
    class: "jettons"
  },
  Ta = {
    class: "collected"
  },
  Ea = {
    class: "total"
  },
  Pa = {
    class: "progress"
  },
  Ma = {
    key: 2,
    class: "ready-to-transfer"
  },
  Oa = ["innerHTML"],
  Da = {
    class: "buttons"
  },
  Ra = {
    class: "wallet"
  },
  La = {
    class: "icon-wrapper"
  },
  Fa = ["src"],
  Na = {
    class: "ticker"
  },
  Ka = {
    class: "amount"
  },
  ja = Xt({
    __name: "Sheet",
    props: Cs({
      state: {}
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: Cs(["claim"], ["update:modelValue"]),
    setup(n) {
      const t = ir(n, "modelValue"),
        e = gs(),
        s = i => new qn(i.amount).div(i.minAmount).mul(100).toNumber(),
        r = (i, o) => {
          const l = Math.min(new qn(i.toFixed(2)).decimalPlaces(), 2);
          return `${or(i,{accuracy:l})} ${o}`
        };
      return (i, o) => {
        const l = cr,
          _ = xe,
          f = rn,
          p = pr,
          T = hs;
        return rt(), Gt(T, {
          modelValue: t.value,
          "onUpdate:modelValue": o[2] || (o[2] = b => t.value = b),
          class: "pages-wallet-block-details-drop-sheet"
        }, {
          default: Nt(() => [i.state.type !== "loading" ? (rt(), ut("div", oa, [Y("div", ca, [at(l, {
            name: "animations/MoneyWings",
            size: 96
          })]), Y("div", la, ot(("t" in i ? i.t : U(ct))("wallet.drop.sheet.title")), 1), i.state.type === "wrong_wallet_address" ? (rt(), ut("div", ua, [Y("div", da, ot(("t" in i ? i.t : U(ct))("wallet.drop.sheet.wrong_wallet_address.subtitle", {
            ticker: i.state.asset.symbol
          })), 1), Y("div", _a, [Y("div", pa, [Y("div", fa, [at(_, {
            name: "ton-logo",
            class: "icon"
          })]), Y("div", ha, ot(("sliceWalletAddress" in i ? i.sliceWalletAddress : U(ar))(i.state.eligibleWalletAddress)), 1), Y("div", ga, [at(_, {
            name: "circle-check",
            class: "icon"
          }), Y("div", ba, ot(("t" in i ? i.t : U(ct))("wallet.drop.sheet.wrong_wallet_address.eligible_label")), 1)])]), at(f, {
            label: ("t" in i ? i.t : U(ct))("wallet.reconnect.btn"),
            fill: "",
            size: U(we).LARGE,
            onClick: o[0] || (o[0] = b => U(e).reconnect())
          }, null, 8, ["label", "size"])])])) : i.state.type === "not_enough_to_transfer" ? (rt(), ut("div", ma, [Y("div", wa, ot(("t" in i ? i.t : U(ct))("wallet.drop.sheet.not_enough_to_transfer.subtitle", {
            ticker: i.state.asset.symbol
          })), 1), Y("div", ya, [Y("div", va, [Y("div", Aa, [Y("div", ka, [Y("img", {
            src: i.state.asset.imageUrl
          }, null, 8, Sa), Y("div", Ia, ot(i.state.asset.symbol), 1)]), Y("div", Ca, [Y("span", Ta, ot(r(i.state.amount, i.state.asset.symbol)), 1), Y("span", Ea, " / " + ot(r(i.state.minAmount, i.state.asset.symbol)), 1)])]), Y("div", Pa, [Y("div", {
            class: "line",
            style: sr({
              "--percent": `${s(i.state)}%`
            })
          }, null, 4)])]), at(f, {
            label: ("t" in i ? i.t : U(ct))("wallet.drop.sheet.not_enough_to_transfer.btn_label"),
            fill: "",
            size: U(we).LARGE,
            type: U(Zn).SECONDARY,
            disabled: ""
          }, null, 8, ["label", "size", "type"])])])) : i.state.type === "ready_to_transfer" ? (rt(), ut("div", Ma, [Y("div", {
            class: "text",
            innerHTML: ("t" in i ? i.t : U(ct))("wallet.drop.sheet.ready_to_transfer.subtitle", {
              ticker: i.state.asset.symbol
            })
          }, null, 8, Oa), Y("div", Da, [Y("div", Ra, [Y("div", La, [Y("img", {
            src: i.state.asset.imageUrl
          }, null, 8, Fa)]), Y("div", Na, ot(i.state.asset.symbol), 1), Y("div", Ka, ot(r(i.state.amount, i.state.asset.symbol)), 1)]), at(f, {
            label: ("t" in i ? i.t : U(ct))("wallet.drop.sheet.ready_to_transfer.btn_label"),
            fill: "",
            size: U(we).LARGE,
            type: U(Zn).HIGHLIGHT,
            onClick: o[1] || (o[1] = b => i.state.claim())
          }, null, 8, ["label", "size", "type"])])])) : ce("", !0)])) : (rt(), Gt(p, {
            key: 1,
            class: "loading"
          }))]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  $a = Yt(ja, [
    ["__scopeId", "data-v-ee6ef360"]
  ]),
  Ba = {
    class: "kit-counter-animation"
  },
  xa = Xt({
    __name: "CounterAnimation",
    props: {
      value: {
        type: String,
        required: !0
      }
    },
    setup(n) {
      const t = n,
        e = ae(() => {
          let s = t.value.indexOf(".");
          return s === -1 && (s = t.value.length), t.value.split("").map((r, i) => ({
            char: r,
            idx: i - s
          }))
        });
      return (s, r) => (rt(), ut("div", Ba, [(rt(!0), ut(je, null, fs(U(e), i => (rt(), ut("div", {
        key: i.idx,
        class: "el-char-wrapper"
      }, [at(wi, {
        name: "change-item-transition"
      }, {
        default: Nt(() => [(rt(), ut("div", {
          key: i.char,
          class: "el-char"
        }, ot(i.char), 1))]),
        _: 2
      }, 1024)]))), 128))]))
    }
  }),
  za = Yt(xa, [
    ["__scopeId", "data-v-191230a7"]
  ]),
  Ua = {
    class: "pages-wallet-block-details-drop-claim-button"
  },
  Wa = {
    class: "details"
  },
  Ga = {
    class: "wallet"
  },
  Ha = {
    key: 1,
    class: "fees"
  },
  Va = Xt({
    __name: "ClaimButton",
    props: {
      walletAddress: {},
      fee: {},
      tonBalance: {},
      claimFn: {
        type: Function
      }
    },
    emits: ["claim"],
    setup(n, {
      emit: t
    }) {
      const e = n,
        s = t,
        r = ae(() => {
          if (e.tonBalance && e.tonBalance.value.lt(e.fee)) return ct("memepad.jetton.not_enough_error", {
            ticker: "TON"
          })
        }),
        i = me(!1),
        o = ae(() => i.value || !e.tonBalance),
        l = async () => {
          o.value || r.value || (i.value = !0, await e.claimFn(), i.value = !1, s("claim"))
        };
      return (_, f) => {
        const p = dr,
          T = xe,
          b = Di,
          S = _r,
          A = rn;
        return rt(), ut("div", Ua, [Y("div", Wa, [U(o) ? (rt(), ut(je, {
          key: 0
        }, [at(p, {
          class: "skeleton"
        }), at(p, {
          class: "skeleton"
        })], 64)) : (rt(), ut(je, {
          key: 1
        }, [Y("div", Ga, [at(T, {
          name: "connected-wallet",
          class: "icon"
        }), Y("span", null, ot(("sliceWalletAddress" in _ ? _.sliceWalletAddress : U(ar))(_.walletAddress)), 1)]), U(r) ? (rt(), Gt(b, {
          key: 0,
          "error-message": U(r)
        }, null, 8, ["error-message"])) : (rt(), ut("div", Ha, [at(S, {
          "text-min-width": 155,
          alignment: U(yi).TOP
        }, {
          default: Nt(() => [at(T, {
            name: "circle-help",
            class: "icon"
          })]),
          inner: Nt(() => [Y("div", null, ot(`${("t"in _?_.t:U(ct))("memepad.jetton.fees_network")}: ${("formatTon"in _?_.formatTon:U(Ts))(_.fee)} TON`), 1)]),
          _: 1
        }, 8, ["alignment"]), Y("span", null, ot(`${("t"in _?_.t:U(ct))("memepad.jetton.fees_base")}: ${`${("formatTon"in _?_.formatTon:U(Ts))(_.fee)} TON`}`), 1)]))], 64))]), at(A, {
          type: U(Zn).HIGHLIGHT,
          size: U(we).LARGE,
          loading: U(o),
          disabled: !!U(r),
          onClick: f[0] || (f[0] = h => l())
        }, {
          default: Nt(() => [Ye(ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.ready_to_claim.btn_label")), 1)]),
          _: 1
        }, 8, ["type", "size", "loading", "disabled"])])
      }
    }
  }),
  Qa = Yt(Va, [
    ["__scopeId", "data-v-4e5d856f"]
  ]),
  Ja = {
    key: 0,
    class: "loading"
  },
  Xa = {
    key: 1,
    class: "waiting inner"
  },
  Ya = {
    class: "title"
  },
  Za = {
    class: "status"
  },
  qa = {
    class: "text"
  },
  to = {
    class: "footer is-single"
  },
  eo = {
    class: "note"
  },
  no = {
    key: 2,
    class: "ready-to-claim inner"
  },
  so = {
    class: "image-wrapper"
  },
  ro = ["src"],
  io = {
    class: "title"
  },
  ao = {
    class: "status"
  },
  oo = {
    class: "text"
  },
  co = {
    class: "footer"
  },
  lo = {
    key: 3,
    class: "transferring inner"
  },
  uo = {
    class: "image-wrapper"
  },
  _o = ["src"],
  po = {
    class: "title"
  },
  fo = {
    class: "status"
  },
  ho = {
    class: "text"
  },
  go = {
    class: "footer"
  },
  bo = {
    key: 4,
    class: "done"
  },
  mo = {
    class: "icon-wrapper"
  },
  wo = {
    class: "icon-inner"
  },
  yo = {
    class: "title"
  },
  vo = {
    class: "subtitle"
  },
  Ao = Xt({
    __name: "QueuePage",
    emits: ["close"],
    setup(n, {
      expose: t
    }) {
      Ri("pages-wallet-block-points-claim-page");
      const e = me({
          status: "loading"
        }),
        s = ({
          points: _
        }) => {
          const f = ["amount"];
          return _ > 1e3 && f.push("is-many"), Es("div", {
            class: f
          }, Es(za, {
            value: or(_, {
              accuracy: 2,
              trim: !0
            })
          }))
        };
      return t({
        openWaiting: ({
          spotPosition: _
        }) => {
          e.value = {
            status: "waiting",
            spotPosition: _
          }
        },
        openReadyToClaim: ({
          pointsToClaim: _,
          imageUrl: f,
          symbol: p,
          walletAddress: T,
          fee: b,
          tonBalance: S,
          claimFn: A
        }, h) => {
          e.value = {
            status: "ready_to_claim",
            pointsToClaim: _,
            imageUrl: f,
            symbol: p,
            walletAddress: T,
            fee: b,
            tonBalance: S,
            claimFn: A
          }, h && ps().makeConfetti()
        },
        openTransferring: ({
          transferringPoints: _,
          imageUrl: f,
          symbol: p
        }) => {
          e.value = {
            status: "transferring",
            transferringPoints: _,
            imageUrl: f,
            symbol: p
          }
        },
        openDone: () => {
          e.value = {
            status: "done"
          }
        }
      }), (_, f) => {
        const p = pr,
          T = fr,
          b = Oi,
          S = Qa,
          A = rn,
          h = xe;
        return rt(), ut("div", {
          class: Fe(["pages-wallet-block-points-claim-page page", `is-${U(e).status.toLowerCase()}`])
        }, [U(e).status === "loading" ? (rt(), ut("div", Ja, [at(p)])) : U(e).status === "waiting" ? (rt(), ut("div", Xa, [at(T), Y("div", Ya, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.waiting.title")), 1), at(s, {
          points: U(e).spotPosition
        }, null, 8, ["points"]), Y("div", Za, [f[2] || (f[2] = Y("div", {
          class: "ping-dot"
        }, null, -1)), Y("span", qa, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.waiting.status")), 1)]), at(b, null, {
          default: Nt(() => [Y("div", to, [Y("div", eo, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.waiting.note_dogs")), 1)])]),
          _: 1
        })])) : U(e).status === "ready_to_claim" ? (rt(), ut("div", no, [at(T), Y("div", so, [Y("img", {
          src: U(e).imageUrl,
          alt: "Point image"
        }, null, 8, ro)]), Y("div", io, ot(U(e).symbol), 1), at(s, {
          points: U(e).pointsToClaim
        }, null, 8, ["points"]), Y("div", ao, [f[3] || (f[3] = Y("div", {
          class: "ping-dot"
        }, null, -1)), Y("span", oo, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.ready_to_claim.status")), 1)]), at(b, null, {
          default: Nt(() => [Y("div", co, [at(S, {
            "wallet-address": U(e).walletAddress,
            fee: U(e).fee,
            "ton-balance": U(e).tonBalance,
            "claim-fn": U(e).claimFn
          }, null, 8, ["wallet-address", "fee", "ton-balance", "claim-fn"])])]),
          _: 1
        })])) : U(e).status === "transferring" ? (rt(), ut("div", lo, [at(T), Y("div", uo, [Y("img", {
          src: U(e).imageUrl,
          alt: "Point image"
        }, null, 8, _o)]), Y("div", po, ot(U(e).symbol), 1), at(s, {
          points: U(e).transferringPoints
        }, null, 8, ["points"]), Y("div", fo, [f[4] || (f[4] = Y("div", {
          class: "ping-dot"
        }, null, -1)), Y("span", ho, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.transferring.status")), 1)]), at(b, null, {
          default: Nt(() => [Y("div", go, [at(A, {
            size: U(we).LARGE,
            class: "button",
            onClick: f[0] || (f[0] = w => _.$emit("close"))
          }, {
            default: Nt(() => [Ye(ot(("t" in _ ? _.t : U(ct))("base.got_it")), 1)]),
            _: 1
          }, 8, ["size"])])]),
          _: 1
        })])) : U(e).status === "done" ? (rt(), ut("div", bo, [Y("div", mo, [Y("div", wo, [at(h, {
          name: "check-big",
          class: "icon"
        })])]), Y("div", yo, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.done.title")), 1), Y("div", vo, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.done.subtitle")), 1), at(b, null, {
          default: Nt(() => [at(A, {
            size: U(we).LARGE,
            class: "button",
            onClick: f[1] || (f[1] = w => _.$emit("close"))
          }, {
            default: Nt(() => [Ye(ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.done.btn_label")), 1)]),
            _: 1
          }, 8, ["size"])]),
          _: 1
        })])) : ce("", !0)], 2)
      }
    }
  }),
  ko = Yt(Ao, [
    ["__scopeId", "data-v-5cc03656"]
  ]);
var gr = {},
  ve = {},
  Tt = {},
  $e = {};
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.getUniqueId = n.mergeTransactions = n.LT_COLLATOR = n.Semaphore = n.DelayedTransactions = n.MessageExpiredException = n.AddressLiteral = n.isAddressObject = n.Address = void 0;
  class t {
    constructor(A) {
      this.equals = h => this._equals(h), this._address = A
    }
    toString() {
      return this._address
    }
    toJSON() {
      return this._address
    }
    _equals(A) {
      return typeof A == "string" ? this._address === A : this._address === (A == null ? void 0 : A._address)
    }
  }
  n.Address = t;

  function e(S) {
    return S != null && (S instanceof t || Object.getPrototypeOf(S).constructor.name === t.prototype.constructor.name)
  }
  n.isAddressObject = e;
  class s extends t {
    constructor(A) {
      super(A)
    }
  }
  n.AddressLiteral = s;
  class r extends Error {
    constructor(A, h) {
      super("Message expired"), this.address = A, this.hash = h
    }
  }
  n.MessageExpiredException = r;
  class i {
    constructor() {
      this.transactions = new Map
    }
    async waitTransaction(A, h) {
      var w;
      let $ = (w = this.transactions.get(h)) === null || w === void 0 ? void 0 : w.promise;
      if ($ == null) {
        let v, m;
        $ = new Promise((F, j) => {
          v = B => F(B), m = () => j()
        }), this.transactions.set(h, {
          promise: $,
          resolve: v,
          reject: m
        })
      }
      const y = await $;
      if (y == null) throw new r(A, h);
      return y
    }
    fillTransaction(A, h) {
      const w = this.transactions.get(A);
      w != null ? w.resolve(h) : this.transactions.set(A, {
        promise: Promise.resolve(h),
        resolve: () => {},
        reject: () => {}
      })
    }
  }
  n.DelayedTransactions = i;
  class o {
    constructor(A) {
      this.tasks = [], this.sched = () => {
        var h;
        this.count > 0 && this.tasks.length > 0 && (this.count--, (h = this.tasks.shift()) === null || h === void 0 || h())
      }, this.count = A
    }
    acquire() {
      return new Promise((A, h) => {
        this.tasks.push(() => {
          let w = !1;
          A(() => {
            w || (w = !0, this.count++, this.sched())
          })
        }), _(this.sched)
      })
    }
    releaseAll() {
      for (var A; this.tasks.length > 0;)(A = this.tasks.shift()) === null || A === void 0 || A()
    }
  }
  n.Semaphore = o;

  function l(S) {
    const A = document.createTextNode("");
    let h, w, $ = 0,
      y = 0;
    return new S(function() {
        let v;
        if (h) w && (h = w.slice(y).concat(h));
        else {
          if (!w) return;
          h = w
        }
        if (w = h, h = null, y = 0, typeof w == "function") {
          v = w, w = null, v();
          return
        }
        for (A.data = $ = ++$ % 2; y < w.length;) v = w[y], y++, y === w.length && (w = null), v()
      }).observe(A, {
        characterData: !0
      }),
      function(v) {
        if (h) {
          typeof h == "function" ? h = [h, v] : h.push(v);
          return
        }
        h = v, A.data = $ = ++$ % 2
      }
  }
  const _ = function() {
    if (typeof queueMicrotask == "function") return queueMicrotask;
    if (typeof document == "object" && document) {
      if (typeof MutationObserver == "function") return l(MutationObserver);
      if (typeof window.WebKitMutationObserver == "function") return l(window.WebKitMutationObserver)
    }
    if (typeof setImmediate == "function") return setImmediate;
    if (typeof setTimeout == "function" || typeof setTimeout == "object") return function(S) {
      setTimeout(S, 0)
    };
    throw new Error("No `nextTick` implementation found")
  }();
  n.LT_COLLATOR = new Intl.Collator(void 0, {
    numeric: !0,
    sensitivity: "base"
  });

  function f(S, A, h) {
    if (h.batchType === "old") return S.push(...A), S;
    if (S.length === 0) return S.push(...A), S;
    let w = 0;
    for (; w < S.length && n.LT_COLLATOR.compare(S[w].id.lt, h.maxLt) >= 0;) ++w;
    return S.splice(w, 0, ...A), S
  }
  n.mergeTransactions = f;
  const p = 4294967295;
  let T = Math.floor(Math.random() * p);

  function b() {
    return T = (T + 1) % p, T
  }
  n.getUniqueId = b
})($e);
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
Tt.parsePartialTokensObject = Tt.parseTokensObject = Tt.serializeTokensObject = Tt.parseAccountInteraction = Tt.parsePermissions = Tt.parseMessage = Tt.serializeMessage = Tt.parseTransaction = Tt.serializeTransaction = void 0;
const Ze = $e;

function So(n) {
  return {
    id: {
      hash: n.id.hash,
      lt: n.id.lt
    },
    prevTransactionId: n.prevTransactionId != null ? {
      hash: n.prevTransactionId.hash,
      lt: n.prevTransactionId.lt
    } : void 0,
    createdAt: n.createdAt,
    aborted: n.aborted,
    exitCode: n.exitCode,
    resultCode: n.resultCode,
    origStatus: n.origStatus,
    endStatus: n.endStatus,
    totalFees: n.totalFees,
    inMessage: es(n.inMessage),
    outMessages: n.outMessages.map(es)
  }
}
Tt.serializeTransaction = So;

function Io(n) {
  return {
    ...n,
    inMessage: ns(n.inMessage),
    outMessages: n.outMessages.map(ns)
  }
}
Tt.parseTransaction = Io;

function es(n) {
  return {
    hash: n.hash,
    src: n.src ? n.src.toString() : void 0,
    dst: n.dst ? n.dst.toString() : void 0,
    value: n.value,
    bounce: n.bounce,
    bounced: n.bounced,
    body: n.body,
    bodyHash: n.bodyHash
  }
}
Tt.serializeMessage = es;

function ns(n) {
  return {
    ...n,
    src: n.src ? new Ze.Address(n.src) : void 0,
    dst: n.dst ? new Ze.Address(n.dst) : void 0
  }
}
Tt.parseMessage = ns;

function Co(n) {
  return {
    ...n,
    accountInteraction: n.accountInteraction ? br(n.accountInteraction) : void 0
  }
}
Tt.parsePermissions = Co;

function br(n) {
  return {
    ...n,
    address: new Ze.Address(n.address)
  }
}
Tt.parseAccountInteraction = br;

function To(n) {
  return ss(n)
}
Tt.serializeTokensObject = To;

function ss(n) {
  if (typeof n == "object" && (0, Ze.isAddressObject)(n)) return n.toString();
  if (Array.isArray(n)) {
    const t = [];
    for (const e of n) t.push(ss(e));
    return t
  } else if (n != null && typeof n == "object") {
    const t = {};
    for (const [e, s] of Object.entries(n)) t[e] = ss(s);
    return t
  } else return n
}

function Eo(n, t) {
  const e = {};
  for (const s of n) e[s.name] = Ce(s, t[s.name]);
  return e
}
Tt.parseTokensObject = Eo;

function Po(n, t) {
  const e = {};
  for (const s of n) Object.prototype.hasOwnProperty.call(t, s.name) && (e[s.name] = Ce(s, !t[s.name]));
  return e
}
Tt.parsePartialTokensObject = Po;

function Ce(n, t) {
  if (n.type.startsWith("map")) {
    const e = n.type.indexOf(","),
      s = n.type.slice(4, e),
      r = n.type.slice(e + 1, -1),
      i = [];
    for (const [o, l] of t) i.push([Ce({
      name: "",
      type: s
    }, o), Ce({
      name: "",
      type: r,
      components: n.components
    }, l)]);
    return i
  } else {
    const e = n.type.endsWith("[]"),
      s = !e && n.type.startsWith("optional"),
      r = e ? n.type.slice(0, -2) : s ? n.type.slice(9, -1) : n.type;
    if (e) {
      const i = {
          name: n.name,
          type: r,
          components: n.components
        },
        o = [];
      for (const l of t) o.push(Ce(i, l));
      return o
    } else if (s) {
      if (t == null) return null;
      {
        const i = {
          name: n.name,
          type: r,
          components: n.components
        };
        return Ce(i, t)
      }
    } else if (r === "tuple") {
      const i = {};
      if (n.components != null)
        for (const o of n.components) i[o.name] = Ce(o, t[o.name]);
      return i
    } else return r === "address" ? new Ze.Address(t) : t
  }
}
var qe = {};
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.Subscriber = void 0;
const Je = $e,
  Mo = Tt;
class Oo {
  constructor(t) {
    this.provider = t, this.subscriptions = new Map, this.scanners = new Map, this.unsubscribe = async () => this._unsubscribe()
  }
  transactions(t) {
    return this._addSubscription("transactionsFound", t, !1)
  }
  trace(t) {
    const e = (0, Je.getUniqueId)();
    return new Wt((s, r) => {
      const i = new Ro(this.provider, {
        origin: t,
        onData: s,
        onEnd: o => {
          this.scanners.delete(e), r(o)
        }
      });
      return this.scanners.set(e, i), i.start(), Promise.resolve()
    }, async () => {
      const s = this.scanners.get(e);
      s != null && (this.scanners.delete(e), await s.stop())
    }, Gn, !0)
  }
  oldTransactions(t, e) {
    const s = (0, Je.getUniqueId)();
    return new Wt((r, i) => {
      const o = new Do(this.provider, {
        address: t,
        onData: r,
        onEnd: l => {
          this.scanners.delete(s), i(l)
        },
        ...e
      });
      return this.scanners.set(s, o), o.start(), Promise.resolve()
    }, async () => {
      const r = this.scanners.get(s);
      r != null && (this.scanners.delete(s), await r.stop())
    }, Gn, !0)
  }
  states(t) {
    return this._addSubscription("contractStateChanged", t, !1)
  }
  async _unsubscribe() {
    const t = [];
    for (const e of this.subscriptions.values())
      for (const [s, r] of Object.entries(e)) delete e[s], r != null && t.push(r.subscription.then(i => i.unsubscribe()).catch(() => {}));
    this.subscriptions.clear();
    for (const e of this.scanners.values()) t.push(e.stop());
    this.scanners.clear(), await Promise.all(t)
  }
  _addSubscription(t, e, s) {
    const r = e.toString(),
      i = l => {
        const _ = this.subscriptions.get(r);
        if (_ == null) return;
        const f = _[t];
        if (f != null) {
          const p = f.handlers.get(l);
          if (p != null) {
            f.handlers.delete(l);
            const {
              queue: T,
              onEnd: b,
              state: S
            } = p;
            S.finished || (S.finished = !0, T.clear(), T.enqueue(async () => b(S.eof)))
          }
          if (f.handlers.size === 0) {
            const T = f.subscription;
            delete _[t], T.then(b => b.unsubscribe()).catch(console.debug)
          }
        }
        _.contractStateChanged == null && _.transactionsFound == null && this.subscriptions.delete(r)
      },
      o = (0, Je.getUniqueId)();
    return new Wt((l, _) => {
      const f = this.subscriptions.get(r);
      let p = f == null ? void 0 : f[t];
      const T = {
          eof: !1,
          finished: !1
        },
        b = {
          onData: l,
          onEnd: _,
          queue: new bs,
          state: T
        };
      if (p != null) return p.handlers.set(o, b), Promise.resolve();
      const S = new Map;
      S.set(o, b);
      const A = this.provider.subscribe(t, {
        address: e
      }).then(h => (h.on("data", w => {
        for (const {
            onData: $,
            queue: y,
            state: v
          }
          of S.values()) v.eof || v.finished || y.enqueue(async () => {
          await $(w) || (v.eof = !0, i(o))
        })
      }), h.on("unsubscribed", () => {
        for (const w of S.keys()) i(w)
      }), h)).catch(h => {
        console.error(h);
        for (const w of S.keys()) i(w);
        throw h
      });
      return p = {
        subscription: A,
        handlers: S
      }, f == null ? this.subscriptions.set(r, {
        [t]: p
      }) : f[t] = p, A.then(() => {})
    }, () => i(o), Gn, s)
  }
}
qe.Subscriber = Oo;
async function Gn(n, t) {
  return t(n)
}
class Wt {
  constructor(t, e, s, r) {
    this.makeProducer = t, this.stopProducer = e, this.extractor = s, this.isFinite = r, this.fold = this.onlyFinite((i, o, l) => {
      let _ = i;
      return new Promise((f, p) => {
        const T = this.makeProducer(b => this.extractor(b, async S => (_ = await o(_, S), !0)), b => {
          b ? f(_) : p(new Error("Subscription closed"))
        });
        l != null && (l.subscribed = T)
      })
    }), this.finished = this.onlyFinite(i => new Promise((o, l) => {
      const _ = this.makeProducer(f => this.extractor(f, p => !0), f => {
        f ? o(void 0) : l(new Error("Subscription closed"))
      });
      i != null && (i.subscribed = _)
    }))
  }
  async delayed(t) {
    const {
      subscribed: e,
      result: s
    } = t({
      first: () => {
        const r = {},
          i = this.first(r);
        return {
          subscribed: r.subscribed,
          result: i
        }
      },
      on: r => {
        const i = {};
        return this.on(r, i), {
          subscribed: i.subscribed,
          result: void 0
        }
      },
      fold: this.fold != null ? (r, i) => {
        const o = {},
          l = this.fold(r, i, o);
        return {
          subscribed: o.subscribed,
          result: l
        }
      } : void 0,
      finished: this.finished != null ? () => {
        const r = {},
          i = this.finished(r);
        return {
          subscribed: r.subscribed,
          result: i
        }
      } : void 0
    });
    return await e, () => s
  }
  first(t) {
    const e = {
      found: !1
    };
    return new Promise((s, r) => {
      const i = this.makeProducer(o => this.extractor(o, l => (Object.assign(e, {
        found: !0,
        result: l
      }), !1)), o => {
        o ? this.isFinite ? s(e.found ? e.result : void 0) : e.found ? s(e.result) : r(new Error("Unexpected end of stream")) : r(new Error("Subscription closed"))
      });
      t != null && (t.subscribed = i)
    })
  }
  on(t, e) {
    const s = this.makeProducer(r => this.extractor(r, async i => (await t(i), !0)), r => {});
    e != null && (e.subscribed = s)
  }
  merge(t) {
    return new Wt((e, s) => {
      const r = {
          stopped: !1,
          counter: 0
        },
        i = o => {
          r.stopped || (++r.counter == 2 || !o) && (r.stopped = !0, s(o))
        };
      return Promise.all([this.makeProducer(e, i), t.makeProducer(e, i)]).then(() => {})
    }, () => {
      this.stopProducer(), t.stopProducer()
    }, this.extractor, this.isFinite && t.isFinite)
  }
  enumerate() {
    const t = {
      index: 0
    };
    return new Wt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => s({
      index: t.index++,
      item: r
    })), this.isFinite)
  }
  tap(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => (await t(r), s(r))), this.isFinite)
  }
  filter(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => await t(r) ? s(r) : !0), this.isFinite)
  }
  filterMap(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => {
      const i = await t(r);
      return i !== void 0 ? s(i) : !0
    }), this.isFinite)
  }
  map(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => {
      const i = await t(r);
      return s(i)
    }), this.isFinite)
  }
  flatMap(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => {
      const i = await t(r);
      for (const o of i)
        if (!await s(o)) return !1;
      return !0
    }), this.isFinite)
  }
  skip(t) {
    const e = {
      index: 0
    };
    return new Wt(this.makeProducer, this.stopProducer, (s, r) => this.extractor(s, i => e.index >= t ? r(i) : (++e.index, !0)), this.isFinite)
  }
  skipWhile(t) {
    const e = {
      shouldSkip: !0
    };
    return new Wt(this.makeProducer, this.stopProducer, (s, r) => this.extractor(s, async i => !e.shouldSkip || !await t(i) ? (e.shouldSkip = !1, r(i)) : !0), this.isFinite)
  }
  take(t) {
    const e = {
      index: 0
    };
    return new Wt(this.makeProducer, this.stopProducer, (s, r) => this.extractor(s, i => e.index < t ? (++e.index, r(i) && e.index < t) : !1), !0)
  }
  takeWhile(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => await t(r) ? s(r) : !1), !0)
  }
  takeWhileMap(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => {
      const i = await t(r);
      return i !== void 0 ? s(i) : !1
    }), !0)
  }
  onlyFinite(t) {
    if (this.isFinite) return t
  }
}
class Do {
  constructor(t, e) {
    this.provider = t, this.params = e, this.queue = new bs, this.isRunning = !1
  }
  start() {
    this.isRunning || this.promise != null || (this.isRunning = !0, this.promise = (async () => {
      const t = this.params,
        e = {
          complete: !1
        };
      for (; this.isRunning && !e.complete;) try {
        const {
          transactions: s,
          continuation: r
        } = await this.provider.getTransactions({
          address: this.params.address,
          continuation: this.continuation
        });
        if (e.complete = !e.complete && s.length == null, !this.isRunning || e.complete) break;
        const i = s.filter(l => (t.fromLt == null || Je.LT_COLLATOR.compare(l.id.lt, t.fromLt) > 0) && (t.fromUtime == null || l.createdAt > t.fromUtime));
        if (i.length == 0) {
          e.complete = !0;
          break
        }
        const o = {
          maxLt: i[0].id.lt,
          minLt: i[i.length - 1].id.lt,
          batchType: "old"
        };
        if (this.queue.enqueue(async () => {
            await this.params.onData({
              address: this.params.address,
              transactions: i,
              info: o
            }) || (e.complete = !0, this.isRunning = !1)
          }), r != null) this.continuation = r;
        else {
          e.complete = !0;
          break
        }
      } catch (s) {
        console.error(s)
      }
      this.queue.enqueue(async () => this.params.onEnd(e.complete)), this.isRunning = !1, this.continuation = void 0
    })())
  }
  async stop() {
    this.isRunning = !1, this.queue.clear(), this.promise != null ? await this.promise : this.params.onEnd(!1)
  }
}
class Ro {
  constructor(t, e) {
    this.provider = t, this.params = e, this.queue = new bs, this.isRunning = !1, this.semaphore = new Je.Semaphore(10)
  }
  start() {
    if (this.isRunning || this.promise != null) return;
    const t = this.provider;
    this.isRunning = !0, this.promise = (async () => {
      const e = {
          complete: !1
        },
        s = i => {
          const o = {
            stopped: !1
          };
          return {
            promise: (async () => {
              let f = 500;
              for (;;) {
                const p = await this.semaphore.acquire();
                if (o.stopped) {
                  p();
                  return
                }
                const T = await t.rawApi.findTransaction({
                  inMessageHash: i
                }).catch(() => ({
                  transaction: void 0
                })).finally(() => p());
                if (o.stopped) return;
                if (T.transaction != null) {
                  const A = (0, Mo.parseTransaction)(T.transaction);
                  return A.account = A.inMessage.dst, A
                }
                let b;
                const S = new Promise((A, h) => {
                  b = () => A(), o.reject = () => h()
                });
                if (o.timeout = setTimeout(b, f), await S, o.stopped) return;
                o.reject = void 0, f = Math.min(f * 2, 3e3)
              }
            })(),
            reject: () => {
              var f;
              o.stopped = !0, (f = o.reject) === null || f === void 0 || f.call(o), o.timeout != null && clearTimeout(o.timeout)
            }
          }
        },
        r = [this.params.origin];
      try {
        t: for (; this.isRunning;) {
          const i = r.shift();
          if (i == null) {
            e.complete = !0;
            break
          }
          const o = i.outMessages.filter(l => l.dst != null).map(l => {
            const _ = l.hash;
            return s(_)
          });
          this.pendingTransactions = o;
          for (const {
              promise: l
            }
            of o) {
            const _ = await l;
            if (!this.isRunning || e.complete || _ == null) break t;
            this.queue.enqueue(async () => {
              await this.params.onData(_) || (e.complete = !0, this.isRunning = !1, this.rejectPendingTransactions())
            }), r.push(_)
          }
          this.pendingTransactions = void 0
        }
      }
      catch (i) {
        console.error(i)
      } finally {
        this.queue.enqueue(async () => this.params.onEnd(e.complete)), this.isRunning = !1, this.rejectPendingTransactions()
      }
    })()
  }
  async stop() {
    this.isRunning = !1, this.queue.clear(), this.rejectPendingTransactions(), this.promise != null ? await this.promise : this.params.onEnd(!1)
  }
  rejectPendingTransactions() {
    if (this.pendingTransactions != null) {
      for (const t of this.pendingTransactions) t.reject();
      this.pendingTransactions = void 0
    }
    this.semaphore.releaseAll()
  }
}
class bs {
  constructor() {
    this.queue = [], this.workingOnPromise = !1
  }
  enqueue(t) {
    this.queue.push(t), this._dequeue().catch(() => {})
  }
  clear() {
    this.queue.length = 0
  }
  async _dequeue() {
    if (this.workingOnPromise) return;
    const t = this.queue.shift();
    t && (this.workingOnPromise = !0, t().then(() => {
      this.workingOnPromise = !1, this._dequeue()
    }).catch(() => {
      this.workingOnPromise = !1, this._dequeue()
    }))
  }
}
var Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.TvmException = Pe.Contract = void 0;
const Le = $e,
  Mt = Tt;
class Lo {
  constructor(t, e, s) {
    if (!Array.isArray(e.functions)) throw new Error("Invalid abi. Functions array required");
    if (!Array.isArray(e.events)) throw new Error("Invalid abi. Events array required");
    this._provider = t, this._abi = JSON.stringify(e), this.methodsAbi = e.functions.reduce((r, i) => (i.inputs == null && (i.inputs = []), i.outputs == null && (i.outputs = []), r[i.name] = i, r), {}), this.eventsAbi = e.events.reduce((r, i) => (i.inputs == null && (i.inputs = []), r[i.name] = i, r), {}), this.fieldsAbi = e.fields, this._address = s, this._methods = new Proxy({}, {
      get: (r, i) => {
        const o = this.methodsAbi[i];
        return (l = {}) => new Fo(this._provider, o, this._abi, this._address, i, l)
      }
    }), this._fields = new Proxy({}, {
      get: (r, i) => async (o = {}) => {
        await this._provider.ensureInitialized();
        const {
          fields: l,
          state: _
        } = await this._provider.rawApi.getContractFields({
          address: this._address.toString(),
          abi: this._abi,
          cachedState: o == null ? void 0 : o.cachedState,
          allowPartial: (o == null ? void 0 : o.allowPartial) == null ? !1 : o.allowPartial
        });
        if (l == null) throw _ == null ? new Error("Account does not exist") : _.isDeployed ? new Error("Invalid account data") : new Error("Account is not deployed");
        const f = (0, Mt.parseTokensObject)(this.fieldsAbi, l);
        if (f == null || !Object.prototype.hasOwnProperty.call(f, i)) throw new Error("Unknown field");
        return f[i]
      }
    })
  }
  get methods() {
    return this._methods
  }
  get fields() {
    return this._fields
  }
  get address() {
    return this._address
  }
  get abi() {
    return this._abi
  }
  async getFullState() {
    return await this._provider.ensureInitialized(), await this._provider.rawApi.getFullContractState({
      address: this.address.toString()
    })
  }
  async getFields(t = {}) {
    await this._provider.ensureInitialized();
    const {
      fields: e,
      state: s
    } = await this._provider.rawApi.getContractFields({
      address: this.address.toString(),
      abi: this._abi,
      cachedState: t.cachedState,
      allowPartial: t.allowPartial == null ? !1 : t.allowPartial
    });
    return {
      fields: e != null ? (0, Mt.parseTokensObject)(this.fieldsAbi, e) : void 0,
      state: s
    }
  }
  transactions(t) {
    return t.transactions(this._address).flatMap(({
      transactions: e
    }) => e)
  }
  events(t) {
    return t.transactions(this._address).flatMap(({
      transactions: e
    }) => e).flatMap(e => this.decodeTransactionEvents({
      transaction: e
    }).then(s => (s.forEach(r => r.transaction = e), s)))
  }
  async waitForEvent(t = {}) {
    const {
      range: e,
      filter: s
    } = t, r = typeof s == "string" ? ({
      event: _
    }) => _ === s : s;
    let i = t.subscriber;
    const o = i == null;
    i == null && (i = new this._provider.Subscriber);
    const l = await ((e == null ? void 0 : e.fromLt) != null || (e == null ? void 0 : e.fromUtime) != null ? i.oldTransactions(this._address, e).merge(i.transactions(this._address)) : i.transactions(this.address)).flatMap(_ => _.transactions).takeWhile(_ => e == null || (e.fromLt == null || Le.LT_COLLATOR.compare(_.id.lt, e.fromLt) > 0) && (e.fromUtime == null || _.createdAt > e.fromUtime) && (e.toLt == null || Le.LT_COLLATOR.compare(_.id.lt, e.toLt) < 0) && (e.toUtime == null || _.createdAt < e.toUtime)).flatMap(_ => this.decodeTransactionEvents({
      transaction: _
    }).then(f => (f.forEach(p => p.transaction = _), f))).filterMap(async _ => {
      if (r == null || await r(_)) return _
    }).first();
    return o && await i.unsubscribe(), l
  }
  async getPastEvents(t) {
    const {
      range: e,
      filter: s,
      limit: r
    } = t, i = typeof s == "string" ? ({
      event: _
    }) => _ === s : s, o = [];
    let l = t == null ? void 0 : t.continuation;
    t: for (;;) {
      const {
        transactions: _,
        continuation: f
      } = await this._provider.getTransactions({
        address: this._address,
        continuation: l
      });
      if (_.length === null) break;
      const p = _.filter(T => ((e == null ? void 0 : e.fromLt) == null || Le.LT_COLLATOR.compare(T.id.lt, e.fromLt) > 0) && ((e == null ? void 0 : e.fromUtime) == null || T.createdAt > e.fromUtime) && ((e == null ? void 0 : e.toLt) == null || Le.LT_COLLATOR.compare(T.id.lt, e.toLt) < 0) && ((e == null ? void 0 : e.toUtime) == null || T.createdAt < e.toUtime));
      if (p.length > 0) {
        const T = await Promise.all(p.map(async b => ({
          tx: b,
          events: await this.decodeTransactionEvents({
            transaction: b
          }).then(S => (S.forEach(A => A.transaction = b), S))
        })));
        for (let {
            tx: b,
            events: S
          }
          of T) {
          i != null && (S = await Promise.all(S.map(async A => await i(A) ? A : void 0)).then(A => A.filter(h => h != null))), l = b.id;
          for (const A of S) {
            if (r != null && o.length >= r) break t;
            o.push(A)
          }
          if (r != null && o.length >= r) break t
        }
      }
      if (l = f, l == null) break
    }
    return {
      events: o,
      continuation: l
    }
  }
  async decodeTransaction(t) {
    await this._provider.ensureInitialized();
    try {
      const e = await this._provider.rawApi.decodeTransaction({
        transaction: (0, Mt.serializeTransaction)(t.transaction),
        abi: this._abi,
        method: t.methods
      });
      if (e == null) return;
      const {
        method: s,
        input: r,
        output: i
      } = e, o = this.methodsAbi[s];
      return {
        method: s,
        input: o.inputs != null ? (0, Mt.parseTokensObject)(o.inputs, r) : {},
        output: o.outputs != null ? (0, Mt.parseTokensObject)(o.outputs, i) : {}
      }
    } catch {
      return
    }
  }
  async decodeTransactionEvents(t) {
    await this._provider.ensureInitialized();
    try {
      const {
        events: e
      } = await this._provider.rawApi.decodeTransactionEvents({
        transaction: (0, Mt.serializeTransaction)(t.transaction),
        abi: this._abi
      }), s = [];
      for (const {
          event: r,
          data: i
        }
        of e) {
        const o = this.eventsAbi[r];
        s.push({
          event: r,
          data: o.inputs != null ? (0, Mt.parseTokensObject)(o.inputs, i) : {}
        })
      }
      return s
    } catch {
      return []
    }
  }
  async decodeInputMessage(t) {
    await this._provider.ensureInitialized();
    try {
      const e = await this._provider.rawApi.decodeInput({
        abi: this._abi,
        body: t.body,
        internal: t.internal,
        method: t.methods
      });
      if (e == null) return;
      const {
        method: s,
        input: r
      } = e, i = this.methodsAbi[s];
      return {
        method: s,
        input: i.inputs != null ? (0, Mt.parseTokensObject)(i.inputs, r) : {}
      }
    } catch {
      return
    }
  }
  async decodeOutputMessage(t) {
    await this._provider.ensureInitialized();
    try {
      const e = await this._provider.rawApi.decodeOutput({
        abi: this._abi,
        body: t.body,
        method: t.methods
      });
      if (e == null) return;
      const {
        method: s,
        output: r
      } = e, i = this.methodsAbi[s];
      return {
        method: s,
        output: i.outputs != null ? (0, Mt.parseTokensObject)(i.outputs, r) : {}
      }
    } catch {
      return
    }
  }
  async decodeEvent(t) {
    await this._provider.ensureInitialized();
    try {
      const e = await this._provider.rawApi.decodeEvent({
        abi: this.abi,
        body: t.body,
        event: t.events
      });
      if (e == null) return;
      const {
        event: s,
        data: r
      } = e, i = this.eventsAbi[s];
      return {
        event: s,
        data: i.inputs != null ? (0, Mt.parseTokensObject)(i.inputs, r) : {}
      }
    } catch {
      return
    }
  }
}
Pe.Contract = Lo;
class mr extends Error {
  constructor(t) {
    super(`TvmException: ${t}`), this.code = t
  }
}
Pe.TvmException = mr;
class Fo {
  constructor(t, e, s, r, i, o) {
    this.provider = t, this.functionAbi = e, this.abi = s, this.address = r, this.method = i, this.params = (0, Mt.serializeTokensObject)(o)
  }
  async send(t) {
    await this.provider.ensureInitialized();
    const {
      transaction: e
    } = await this.provider.rawApi.sendMessage({
      sender: t.from.toString(),
      recipient: this.address.toString(),
      amount: t.amount,
      bounce: t.bounce == null ? !0 : t.bounce,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      stateInit: t.stateInit
    });
    return (0, Mt.parseTransaction)(e)
  }
  async sendDelayed(t) {
    await this.provider.ensureInitialized();
    const e = new Le.DelayedTransactions,
      s = await this.provider.subscribe("messageStatusUpdated");
    s.on("data", o => {
      o.address.equals(t.from) && e.fillTransaction(o.hash, o.transaction)
    });
    const {
      message: r
    } = await this.provider.rawApi.sendMessageDelayed({
      sender: t.from.toString(),
      recipient: this.address.toString(),
      amount: t.amount,
      bounce: t.bounce == null ? !0 : t.bounce,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      stateInit: t.stateInit
    }).catch(o => {
      throw s.unsubscribe().catch(console.error), o
    }), i = e.waitTransaction(this.address, r.hash).finally(() => s.unsubscribe().catch(console.error));
    return {
      messageHash: r.hash,
      expireAt: r.expireAt,
      transaction: i
    }
  }
  async sendWithResult(t) {
    await this.provider.ensureInitialized();
    let e = t.subscriber;
    const s = e == null;
    e == null && (e = new this.provider.Subscriber);
    try {
      let r, i;
      const o = new Promise(S => {
          i = A => S(A)
        }),
        l = [];
      e.transactions(this.address).flatMap(S => S.transactions).filter(S => {
        var A;
        return ((A = S.inMessage.src) === null || A === void 0 ? void 0 : A.equals(t.from)) || !1
      }).on(S => {
        r == null ? l.push(S) : r.possibleMessages.findIndex(A => A.hash == S.inMessage.hash) >= 0 && (i == null || i(S))
      });
      const _ = await this.send(t),
        f = _.outMessages.filter(S => {
          var A;
          return ((A = S.dst) === null || A === void 0 ? void 0 : A.equals(this.address)) || !1
        });
      r = {
        transaction: _,
        possibleMessages: f
      };
      const p = l.find(S => f.findIndex(A => A.hash == S.inMessage.hash) >= 0);
      p != null && (i == null || i(p));
      const T = await o;
      let b;
      try {
        const S = await this.provider.rawApi.decodeTransaction({
          transaction: (0, Mt.serializeTransaction)(T),
          abi: this.abi,
          method: this.method
        });
        S != null && (b = this.functionAbi.outputs != null ? (0, Mt.parseTokensObject)(this.functionAbi.outputs, S.output) : {})
      } catch (S) {
        console.error(S)
      }
      return {
        parentTransaction: r.transaction,
        childTransaction: T,
        output: b
      }
    } finally {
      s && await e.unsubscribe()
    }
  }
  async estimateFees(t) {
    await this.provider.ensureInitialized();
    const {
      fees: e
    } = await this.provider.rawApi.estimateFees({
      sender: t.from.toString(),
      recipient: this.address.toString(),
      amount: t.amount,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      stateInit: t.stateInit
    });
    return e
  }
  async sendExternal(t) {
    await this.provider.ensureInitialized();
    const e = t.withoutSignature === !0 ? this.provider.rawApi.sendUnsignedExternalMessage : this.provider.rawApi.sendExternalMessage,
      {
        transaction: s,
        output: r
      } = await e({
        publicKey: t.publicKey,
        recipient: this.address.toString(),
        stateInit: t.stateInit,
        payload: {
          abi: this.abi,
          method: this.method,
          params: this.params
        },
        local: t.local,
        executorParams: t.executorParams ? {
          disableSignatureCheck: t.executorParams.disableSignatureCheck,
          overrideBalance: t.executorParams.overrideBalance
        } : void 0
      });
    return {
      transaction: (0, Mt.parseTransaction)(s),
      output: r != null ? (0, Mt.parseTokensObject)(this.functionAbi.outputs, r) : void 0
    }
  }
  async sendExternalDelayed(t) {
    await this.provider.ensureInitialized();
    const e = new Le.DelayedTransactions,
      s = await this.provider.subscribe("messageStatusUpdated");
    s.on("data", o => {
      o.address.equals(this.address) && e.fillTransaction(o.hash, o.transaction)
    });
    const {
      message: r
    } = await this.provider.rawApi.sendExternalMessageDelayed({
      publicKey: t.publicKey,
      recipient: this.address.toString(),
      stateInit: t.stateInit,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      }
    }).catch(o => {
      throw s.unsubscribe().catch(console.error), o
    }), i = e.waitTransaction(this.address, r.hash).finally(() => s.unsubscribe().catch(console.error));
    return {
      messageHash: r.hash,
      expireAt: r.expireAt,
      transaction: i
    }
  }
  async call(t = {}) {
    await this.provider.ensureInitialized();
    const {
      output: e,
      code: s
    } = await this.provider.rawApi.runLocal({
      address: this.address.toString(),
      cachedState: t.cachedState,
      responsible: t.responsible,
      functionCall: {
        abi: this.abi,
        method: this.method,
        params: this.params
      }
    });
    if (e == null || s != 0) throw new mr(s);
    return (0, Mt.parseTokensObject)(this.functionAbi.outputs, e)
  }
  async executeExternal(t) {
    await this.provider.ensureInitialized();
    const {
      transaction: e,
      newState: s,
      output: r
    } = await this.provider.rawApi.executeLocal({
      address: this.address.toString(),
      cachedState: t.cachedState,
      stateInit: t.stateInit,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      messageHeader: {
        type: "external",
        publicKey: t.publicKey,
        withoutSignature: t.withoutSignature
      },
      executorParams: t.executorParams != null ? {
        disableSignatureCheck: t.executorParams.disableSignatureCheck,
        overrideBalance: t.executorParams.overrideBalance
      } : void 0
    });
    return {
      transaction: (0, Mt.parseTransaction)(e),
      newState: s,
      output: r !== void 0 ? (0, Mt.parseTokensObject)(this.functionAbi.outputs, r) : void 0
    }
  }
  async executeInternal(t) {
    await this.provider.ensureInitialized();
    const {
      transaction: e,
      newState: s,
      output: r
    } = await this.provider.rawApi.executeLocal({
      address: this.address.toString(),
      cachedState: t.cachedState,
      stateInit: t.stateInit,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      messageHeader: {
        type: "internal",
        sender: t.sender.toString(),
        amount: t.amount,
        bounce: t.bounce != null ? t.bounce : !1,
        bounced: t.bounced
      },
      executorParams: t.executorParams != null ? {
        disableSignatureCheck: t.executorParams.disableSignatureCheck,
        overrideBalance: t.executorParams.overrideBalance
      } : void 0
    });
    return {
      transaction: (0, Mt.parseTransaction)(e),
      newState: s,
      output: r !== void 0 ? (0, Mt.parseTokensObject)(this.functionAbi.outputs, r) : void 0
    }
  }
  async encodeInternal() {
    await this.provider.ensureInitialized();
    const {
      boc: t
    } = await this.provider.rawApi.encodeInternalInput({
      abi: this.abi,
      method: this.method,
      params: this.params
    });
    return t
  }
}
var wr = {};
Object.defineProperty(wr, "__esModule", {
  value: !0
});
(function(n) {
  var t = tt && tt.__createBinding || (Object.create ? function(v, m, F, j) {
      j === void 0 && (j = F);
      var B = Object.getOwnPropertyDescriptor(m, F);
      (!B || ("get" in B ? !m.__esModule : B.writable || B.configurable)) && (B = {
        enumerable: !0,
        get: function() {
          return m[F]
        }
      }), Object.defineProperty(v, j, B)
    } : function(v, m, F, j) {
      j === void 0 && (j = F), v[j] = m[F]
    }),
    e = tt && tt.__setModuleDefault || (Object.create ? function(v, m) {
      Object.defineProperty(v, "default", {
        enumerable: !0,
        value: m
      })
    } : function(v, m) {
      v.default = m
    }),
    s = tt && tt.__importStar || function(v) {
      if (v && v.__esModule) return v;
      var m = {};
      if (v != null)
        for (var F in v) F !== "default" && Object.prototype.hasOwnProperty.call(v, F) && t(m, v, F);
      return e(m, v), m
    },
    r = tt && tt.__exportStar || function(v, m) {
      for (var F in v) F !== "default" && !Object.prototype.hasOwnProperty.call(m, F) && t(m, v, F)
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.ProviderNotInitializedException = n.ProviderNotFoundException = n.ProviderRpcClient = n.hasEverscaleProvider = n.LT_COLLATOR = n.isAddressObject = n.mergeTransactions = n.MessageExpiredException = n.AddressLiteral = n.Address = n.Subscriber = void 0;
  const i = Tt,
    o = $e,
    l = s(qe),
    _ = s(Pe);
  r(wr, n), r(Tt, n), r(Pe, n);
  var f = qe;
  Object.defineProperty(n, "Subscriber", {
    enumerable: !0,
    get: function() {
      return f.Subscriber
    }
  });
  var p = $e;
  Object.defineProperty(n, "Address", {
    enumerable: !0,
    get: function() {
      return p.Address
    }
  }), Object.defineProperty(n, "AddressLiteral", {
    enumerable: !0,
    get: function() {
      return p.AddressLiteral
    }
  }), Object.defineProperty(n, "MessageExpiredException", {
    enumerable: !0,
    get: function() {
      return p.MessageExpiredException
    }
  }), Object.defineProperty(n, "mergeTransactions", {
    enumerable: !0,
    get: function() {
      return p.mergeTransactions
    }
  }), Object.defineProperty(n, "isAddressObject", {
    enumerable: !0,
    get: function() {
      return p.isAddressObject
    }
  }), Object.defineProperty(n, "LT_COLLATOR", {
    enumerable: !0,
    get: function() {
      return p.LT_COLLATOR
    }
  });
  const T = typeof window < "u" && typeof window.document < "u";
  let b;
  !T || document.readyState === "complete" ? b = Promise.resolve() : b = new Promise(v => {
    window.addEventListener("load", () => {
      v()
    })
  });
  const S = () => T ? window.__ever || window.ton : void 0;
  async function A() {
    return T ? (await b, window.__hasEverscaleProvider === !0 || window.hasTonProvider === !0) : !1
  }
  n.hasEverscaleProvider = A;
  class h {
    constructor(m = {}) {
      this._subscriptions = {
        connected: new Map,
        disconnected: new Map,
        transactionsFound: new Map,
        contractStateChanged: new Map,
        messageStatusUpdated: new Map,
        networkChanged: new Map,
        permissionsChanged: new Map,
        loggedOut: new Map
      }, this._contractSubscriptions = new Map, this._properties = m;
      const F = this;
      class j extends _.Contract {
        constructor(d, g) {
          super(F, d, g)
        }
      }
      this.Contract = j;
      class B extends l.Subscriber {
        constructor() {
          super(F)
        }
      }
      this.Subscriber = B, this._api = new Proxy({}, {
        get: (u, d) => g => {
          if (this._provider != null) return this._provider.request({
            method: d,
            params: g
          });
          throw new $
        }
      }), m.forceUseFallback === !0 ? this._initializationPromise = m.fallback != null ? m.fallback().then(u => {
        this._provider = u
      }) : Promise.resolve() : (this._provider = S(), this._provider != null ? this._initializationPromise = Promise.resolve() : this._initializationPromise = A().then(u => new Promise(d => {
        if (!u) return d();
        if (this._provider = S(), this._provider != null) d();
        else {
          const g = window.__hasEverscaleProvider === !0 ? "ever#initialized" : "ton#initialized";
          window.addEventListener(g, P => {
            this._provider = S(), d()
          })
        }
      })).then(async () => {
        this._provider == null && m.fallback != null && (this._provider = await m.fallback())
      })), this._initializationPromise.then(() => {
        this._provider != null && this._registerEventHandlers(this._provider)
      })
    }
    async hasProvider() {
      return this._properties.fallback != null ? !0 : A()
    }
    async ensureInitialized() {
      if (await this._initializationPromise, this._provider == null) throw new w
    }
    get isInitialized() {
      return this._provider != null
    }
    get raw() {
      if (this._provider != null) return this._provider;
      throw new $
    }
    get rawApi() {
      return this._api
    }
    createContract(m, F) {
      return new this.Contract(m, F)
    }
    createSubscriber() {
      return new this.Subscriber
    }
    async requestPermissions(m) {
      await this.ensureInitialized();
      const F = await this._api.requestPermissions({
        permissions: m.permissions
      });
      return (0, i.parsePermissions)(F)
    }
    async changeAccount() {
      await this.ensureInitialized(), await this._api.changeAccount()
    }
    async disconnect() {
      await this.ensureInitialized(), await this._api.disconnect()
    }
    async subscribe(m, F) {
      class j {
        constructor(g, P) {
          this._subscribe = g, this._unsubscribe = P, this._listeners = {
            data: [],
            subscribed: [],
            unsubscribed: []
          }, this._subscribed = !1, this.subscribe = async () => {
            if (!this._subscribed) {
              this._subscribed = !0, await this._subscribe(this);
              for (const C of this._listeners.subscribed) C()
            }
          }, this.unsubscribe = async () => {
            if (this._subscribed) {
              this._subscribed = !1, await this._unsubscribe();
              for (const C of this._listeners.unsubscribed) C()
            }
          }
        }
        on(g, P) {
          return this._listeners[g].push(P), this
        }
        notify(g) {
          for (const P of this._listeners.data) P(g)
        }
      }
      const B = this._subscriptions[m],
        u = (0, o.getUniqueId)();
      switch (m) {
        case "connected":
        case "disconnected":
        case "messageStatusUpdated":
        case "networkChanged":
        case "permissionsChanged":
        case "loggedOut": {
          const d = new j(async g => {
            B.has(u) || B.set(u, P => {
              g.notify(P)
            })
          }, async () => {
            B.delete(u)
          });
          return await d.subscribe(), d
        }
        case "transactionsFound":
        case "contractStateChanged": {
          if (F == null) throw new Error("Address must be specified for the subscription");
          await this.ensureInitialized();
          const d = F.address.toString(),
            g = new j(async P => {
              if (B.has(u)) return;
              B.set(u, M => {
                M.address.toString() === d && P.notify(M)
              });
              let C = this._contractSubscriptions.get(d);
              C == null && (C = new Map, this._contractSubscriptions.set(d, C));
              const O = {
                state: m === "contractStateChanged",
                transactions: m === "transactionsFound"
              };
              C.set(u, O);
              const {
                total: N,
                withoutExcluded: k
              } = y(C.values(), O);
              try {
                (N.transactions !== k.transactions || N.state !== k.state) && await this.rawApi.subscribe({
                  address: d,
                  subscriptions: N
                })
              } catch (M) {
                throw B.delete(u), C.delete(u), M
              }
            }, async () => {
              B.delete(u);
              const P = this._contractSubscriptions.get(d);
              if (P == null) return;
              const C = P.get(u),
                {
                  total: O,
                  withoutExcluded: N
                } = y(P.values(), C);
              P.delete(u), !N.transactions && !N.state ? await this.rawApi.unsubscribe({
                address: d
              }) : (O.transactions !== N.transactions || O.state !== N.state) && await this.rawApi.subscribe({
                address: d,
                subscriptions: N
              })
            });
          return await g.subscribe(), g
        }
        default:
          throw new Error(`Unknown event ${m}`)
      }
    }
    async getProviderState() {
      await this.ensureInitialized();
      const m = await this._api.getProviderState();
      return {
        ...m,
        permissions: (0, i.parsePermissions)(m.permissions)
      }
    }
    async getBalance(m) {
      const {
        state: F
      } = await this.getFullContractState({
        address: m
      });
      return F == null ? "0" : F == null ? void 0 : F.balance
    }
    async getFullContractState(m) {
      return await this.ensureInitialized(), await this._api.getFullContractState({
        address: m.address.toString()
      })
    }
    async computeStorageFee(m) {
      return await this.ensureInitialized(), await this._api.computeStorageFee({
        state: {
          boc: m.state.boc,
          balance: m.state.balance,
          genTimings: {
            ...m.state.genTimings
          },
          lastTransactionId: m.state.lastTransactionId != null ? {
            ...m.state.lastTransactionId
          } : void 0,
          isDeployed: m.state.isDeployed,
          codeHash: m.state.codeHash
        },
        masterchain: m.masterchain,
        timestamp: m.timestamp
      })
    }
    async getAccountsByCodeHash(m) {
      await this.ensureInitialized();
      const {
        accounts: F,
        continuation: j
      } = await this._api.getAccountsByCodeHash({
        ...m
      });
      return {
        accounts: F.map(B => new o.Address(B)),
        continuation: j
      }
    }
    async getTransactions(m) {
      await this.ensureInitialized();
      const {
        transactions: F,
        continuation: j,
        info: B
      } = await this._api.getTransactions({
        ...m,
        address: m.address.toString()
      });
      return {
        transactions: F.map(i.parseTransaction),
        continuation: j,
        info: B
      }
    }
    async getTransaction(m) {
      await this.ensureInitialized();
      const {
        transaction: F
      } = await this._api.getTransaction({
        ...m
      });
      return {
        transaction: F ? (0, i.parseTransaction)(F) : void 0
      }
    }
    async getExpectedAddress(m, F) {
      const {
        address: j
      } = await this.getStateInit(m, F);
      return j
    }
    async getStateInit(m, F) {
      await this.ensureInitialized();
      const {
        address: j,
        stateInit: B,
        hash: u
      } = await this._api.getExpectedAddress({
        abi: JSON.stringify(m),
        ...F,
        initParams: (0, i.serializeTokensObject)(F.initParams)
      });
      return {
        address: new o.Address(j),
        stateInit: B,
        hash: u
      }
    }
    async unpackInitData(m, F) {
      await this.ensureInitialized();
      const {
        publicKey: j,
        initParams: B
      } = await this._api.unpackInitData({
        abi: JSON.stringify(m),
        data: F
      });
      return {
        publicKey: j,
        initParams: (0, i.parsePartialTokensObject)(m.data, B)
      }
    }
    async getBocHash(m) {
      return await this.ensureInitialized(), await this._api.getBocHash({
        boc: m
      }).then(({
        hash: F
      }) => F)
    }
    async packIntoCell(m) {
      return await this.ensureInitialized(), await this._api.packIntoCell({
        abiVersion: m.abiVersion,
        structure: m.structure,
        data: (0, i.serializeTokensObject)(m.data)
      })
    }
    async unpackFromCell(m) {
      await this.ensureInitialized();
      const {
        data: F
      } = await this._api.unpackFromCell({
        ...m,
        structure: m.structure
      });
      return {
        data: (0, i.parseTokensObject)(m.structure, F)
      }
    }
    async extractPublicKey(m) {
      await this.ensureInitialized();
      const {
        publicKey: F
      } = await this._api.extractPublicKey({
        boc: m
      });
      return F
    }
    async codeToTvc(m) {
      await this.ensureInitialized();
      const {
        tvc: F
      } = await this._api.codeToTvc({
        code: m
      });
      return F
    }
    async mergeTvc(m) {
      return await this.ensureInitialized(), await this._api.mergeTvc(m)
    }
    async splitTvc(m) {
      return await this.ensureInitialized(), await this._api.splitTvc({
        tvc: m
      })
    }
    async setCodeSalt(m) {
      let F;
      if (typeof m.salt == "string") await this.ensureInitialized(), F = m.salt;
      else {
        const {
          boc: j
        } = await this.packIntoCell(m.salt);
        F = j
      }
      return await this._api.setCodeSalt({
        code: m.code,
        salt: F
      })
    }
    async getCodeSalt(m) {
      await this.ensureInitialized();
      const {
        salt: F
      } = await this.rawApi.getCodeSalt({
        code: m.code
      });
      return F
    }
    async addAsset(m) {
      await this.ensureInitialized();
      let F;
      switch (m.type) {
        case "tip3_token": {
          F = {
            rootContract: m.params.rootContract.toString()
          };
          break
        }
        default:
          throw new Error("Unknown asset type")
      }
      return await this._api.addAsset({
        account: m.account.toString(),
        type: m.type,
        params: F
      })
    }
    async verifySignature(m) {
      return await this.ensureInitialized(), await this._api.verifySignature(m)
    }
    async signData(m) {
      return await this.ensureInitialized(), await this._api.signData(m)
    }
    async signDataRaw(m) {
      return await this.ensureInitialized(), await this._api.signDataRaw(m)
    }
    async encryptData(m) {
      await this.ensureInitialized();
      const {
        encryptedData: F
      } = await this._api.encryptData(m);
      return F
    }
    async decryptData(m) {
      await this.ensureInitialized();
      const {
        data: F
      } = await this._api.decryptData({
        encryptedData: m
      });
      return F
    }
    async sendMessage(m) {
      await this.ensureInitialized();
      const {
        transaction: F
      } = await this._api.sendMessage({
        sender: m.sender.toString(),
        recipient: m.recipient.toString(),
        amount: m.amount,
        bounce: m.bounce,
        payload: m.payload ? {
          abi: m.payload.abi,
          method: m.payload.method,
          params: (0, i.serializeTokensObject)(m.payload.params)
        } : void 0,
        stateInit: m.stateInit
      });
      return {
        transaction: (0, i.parseTransaction)(F)
      }
    }
    async sendMessageDelayed(m) {
      await this.ensureInitialized();
      const F = new o.DelayedTransactions,
        j = await this.subscribe("messageStatusUpdated");
      j.on("data", d => {
        d.address.equals(m.sender) && F.fillTransaction(d.hash, d.transaction)
      });
      const {
        message: B
      } = await this._api.sendMessageDelayed({
        sender: m.sender.toString(),
        recipient: m.recipient.toString(),
        amount: m.amount,
        bounce: m.bounce,
        payload: m.payload ? {
          abi: m.payload.abi,
          method: m.payload.method,
          params: (0, i.serializeTokensObject)(m.payload.params)
        } : void 0,
        stateInit: m.stateInit
      }).catch(d => {
        throw j.unsubscribe().catch(console.error), d
      }), u = F.waitTransaction(m.sender, B.hash).finally(() => j.unsubscribe().catch(console.error));
      return {
        messageHash: B.hash,
        expireAt: B.expireAt,
        transaction: u
      }
    }
    async addNetwork(m) {
      return await this.ensureInitialized(), await this._api.addNetwork(m)
    }
    async changeNetwork(m) {
      return await this.ensureInitialized(), await this._api.changeNetwork(m)
    }
    _registerEventHandlers(m) {
      const F = {
        connected: j => j,
        disconnected: j => j,
        transactionsFound: j => ({
          address: new o.Address(j.address),
          transactions: j.transactions.map(i.parseTransaction),
          info: j.info
        }),
        contractStateChanged: j => ({
          address: new o.Address(j.address),
          state: j.state
        }),
        messageStatusUpdated: j => ({
          address: new o.Address(j.address),
          hash: j.hash,
          transaction: j.transaction != null ? (0, i.parseTransaction)(j.transaction) : void 0
        }),
        networkChanged: j => j,
        permissionsChanged: j => ({
          permissions: (0, i.parsePermissions)(j.permissions)
        }),
        loggedOut: j => j
      };
      for (const [j, B] of Object.entries(F)) m.addListener(j, u => {
        const d = this._subscriptions[j],
          g = B(u);
        for (const P of d.values()) P(g)
      })
    }
  }
  n.ProviderRpcClient = h;
  class w extends Error {
    constructor() {
      super("Everscale provider was not found")
    }
  }
  n.ProviderNotFoundException = w;
  class $ extends Error {
    constructor() {
      super("Everscale provider was not initialized yet")
    }
  }
  n.ProviderNotInitializedException = $;

  function y(v, m) {
    const F = {
        state: !1,
        transactions: !1
      },
      j = Object.assign({}, F);
    for (const B of v) {
      if (j.transactions && j.state) break;
      F.state || (F.state = B.state), F.transactions || (F.transactions = B.transactions), B !== m && (j.state || (j.state = B.state), j.transactions || (j.transactions = B.transactions))
    }
    return {
      total: F,
      withoutExcluded: j
    }
  }
})(ve);
var fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.AirdropAbi = fe.AirdropFactoryAbiV2 = fe.AirdropFactoryAbiV1 = void 0;
fe.AirdropFactoryAbiV1 = {
  "ABI version": 2,
  version: "2.3",
  header: ["pubkey", "time", "expire"],
  functions: [{
    name: "constructor",
    inputs: [{
      name: "_initCodeAirdrop",
      type: "cell"
    }, {
      name: "_initManager",
      type: "address"
    }, {
      name: "_initSignaturePubkey",
      type: "uint256"
    }, {
      name: "_initClaimMinGas",
      type: "uint128"
    }, {
      name: "_initJettonMinter",
      type: "address"
    }],
    outputs: []
  }, {
    name: "takeWalletAddress",
    id: "0xD1735400",
    inputs: [{
      name: "value0",
      type: "uint64"
    }, {
      name: "_wallet",
      type: "address"
    }, {
      name: "value2",
      type: "optional(cell)"
    }],
    outputs: []
  }, {
    name: "getSuccessClaimsCount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getWithdrawnFeesCount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getTotalTokenAmount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getClaimedTokenAmount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "triggerEnable",
    inputs: [],
    outputs: []
  }, {
    name: "increaseTotalTokenAmount",
    inputs: [{
      name: "_depositAmount",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "decreaseTotalTokenAmount",
    inputs: [{
      name: "_withdrawnAmount",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "setClaimMinGas",
    inputs: [{
      name: "_minGas",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "transferOwnership",
    inputs: [{
      name: "_newOwner",
      type: "address"
    }],
    outputs: []
  }, {
    name: "expectedAirdropAddress",
    inputs: [{
      name: "answerId",
      type: "uint32"
    }, {
      name: "_data",
      type: "cell"
    }],
    outputs: [{
      name: "value0",
      type: "address"
    }]
  }, {
    name: "onAirdropCreated",
    inputs: [{
      name: "_airdropNonce",
      type: "uint64"
    }, {
      name: "_data",
      type: "cell"
    }, {
      name: "_signature",
      type: "bytes"
    }],
    outputs: []
  }, {
    name: "withdraw",
    inputs: [{
      name: "_recipient",
      type: "address"
    }, {
      name: "_amount",
      type: "varuint16"
    }],
    outputs: []
  }, {
    name: "withdrawFees",
    inputs: [{
      name: "_recipient",
      type: "address"
    }],
    outputs: []
  }, {
    name: "upgrade",
    inputs: [{
      name: "_code",
      type: "cell"
    }, {
      name: "_version",
      type: "optional(uint32)"
    }, {
      name: "_remainingGasTo",
      type: "optional(address)"
    }],
    outputs: []
  }, {
    name: "getVersion",
    inputs: [{
      name: "answerId",
      type: "uint32"
    }],
    outputs: [{
      name: "value0",
      type: "uint32"
    }]
  }],
  data: [{
    key: 1,
    name: "_nonce",
    type: "uint256"
  }],
  events: [{
    name: "EnableChanged",
    inputs: [{
      name: "current",
      type: "bool"
    }],
    outputs: []
  }, {
    name: "AirdropClaimed",
    inputs: [{
      name: "recipient",
      type: "address"
    }, {
      name: "reward",
      type: "uint128"
    }, {
      name: "deployment",
      type: "address"
    }, {
      name: "claimId",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "VersionChanged",
    inputs: [{
      name: "current",
      type: "uint32"
    }, {
      name: "previous",
      type: "uint32"
    }],
    outputs: []
  }],
  fields: [{
    name: "_pubkey",
    type: "uint256"
  }, {
    name: "_timestamp",
    type: "uint64"
  }, {
    name: "_constructorFlag",
    type: "bool"
  }, {
    name: "_currentVersion",
    type: "uint32"
  }, {
    name: "_nonce",
    type: "uint256"
  }, {
    name: "_codeAirdrop",
    type: "cell"
  }, {
    name: "_manager",
    type: "address"
  }, {
    name: "_signaturePubkey",
    type: "uint256"
  }, {
    name: "_claimMinGas",
    type: "uint128"
  }, {
    name: "_jettonMinter",
    type: "address"
  }, {
    name: "_jettonWallet",
    type: "address"
  }, {
    name: "_enable",
    type: "bool"
  }, {
    name: "_successfulClaimsCount",
    type: "uint128"
  }, {
    name: "_withdrawnFeesCount",
    type: "uint128"
  }, {
    name: "_totalTokenAmount",
    type: "uint128"
  }, {
    name: "_claimedTokenAmount",
    type: "uint128"
  }]
};
fe.AirdropFactoryAbiV2 = {
  "ABI version": 2,
  version: "2.3",
  header: ["pubkey", "time", "expire"],
  functions: [{
    name: "constructor",
    inputs: [{
      name: "_initCodeAirdrop",
      type: "cell"
    }, {
      name: "_initManager",
      type: "address"
    }, {
      name: "_initSignaturePubkey",
      type: "uint256"
    }, {
      name: "_initClaimMinGas",
      type: "uint128"
    }, {
      name: "_initJettonMinter",
      type: "address"
    }, {
      name: "_initWithdrawRecipient",
      type: "address"
    }, {
      name: "_initFixedClaimFee",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "takeWalletAddress",
    id: "0xD1735400",
    inputs: [{
      name: "value0",
      type: "uint64"
    }, {
      name: "_wallet",
      type: "address"
    }, {
      name: "value2",
      type: "optional(cell)"
    }],
    outputs: []
  }, {
    name: "getSuccessClaimsCount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getWithdrawnFeesCount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getTotalTokenAmount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getClaimedTokenAmount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getFixedClaimFee",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getClaimMinGas",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getAirdropCode",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "cell"
    }]
  }, {
    name: "triggerEnable",
    inputs: [],
    outputs: []
  }, {
    name: "increaseTotalTokenAmount",
    inputs: [{
      name: "_depositAmount",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "decreaseTotalTokenAmount",
    inputs: [{
      name: "_withdrawnAmount",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "setClaimMinGas",
    inputs: [{
      name: "_minGas",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "transferOwnership",
    inputs: [{
      name: "_newOwner",
      type: "address"
    }],
    outputs: []
  }, {
    name: "expectedAirdropAddress",
    inputs: [{
      name: "answerId",
      type: "uint32"
    }, {
      name: "_data",
      type: "cell"
    }],
    outputs: [{
      name: "value0",
      type: "address"
    }]
  }, {
    name: "onAirdropCreated",
    inputs: [{
      name: "_airdropNonce",
      type: "uint64"
    }, {
      name: "_data",
      type: "cell"
    }, {
      name: "_signature",
      type: "bytes"
    }],
    outputs: []
  }, {
    name: "withdraw",
    inputs: [{
      name: "_remainingGasTo",
      type: "address"
    }, {
      name: "_amount",
      type: "varuint16"
    }],
    outputs: []
  }, {
    name: "withdrawFees",
    inputs: [{
      name: "_recipient",
      type: "address"
    }],
    outputs: []
  }, {
    name: "upgrade",
    inputs: [{
      name: "_code",
      type: "cell"
    }, {
      name: "_version",
      type: "optional(uint32)"
    }, {
      name: "_remainingGasTo",
      type: "optional(address)"
    }],
    outputs: []
  }, {
    name: "getVersion",
    inputs: [{
      name: "answerId",
      type: "uint32"
    }],
    outputs: [{
      name: "value0",
      type: "uint32"
    }]
  }],
  data: [{
    key: 1,
    name: "_nonce",
    type: "uint256"
  }],
  events: [{
    name: "EnableChanged",
    inputs: [{
      name: "current",
      type: "bool"
    }],
    outputs: []
  }, {
    name: "AirdropClaimed",
    inputs: [{
      name: "recipient",
      type: "address"
    }, {
      name: "reward",
      type: "uint128"
    }, {
      name: "deployment",
      type: "address"
    }, {
      name: "claimId",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "VersionChanged",
    inputs: [{
      name: "current",
      type: "uint32"
    }, {
      name: "previous",
      type: "uint32"
    }],
    outputs: []
  }],
  fields: [{
    name: "_pubkey",
    type: "uint256"
  }, {
    name: "_timestamp",
    type: "uint64"
  }, {
    name: "_constructorFlag",
    type: "bool"
  }, {
    name: "_currentVersion",
    type: "uint32"
  }, {
    name: "_nonce",
    type: "uint256"
  }, {
    name: "_codeAirdrop",
    type: "cell"
  }, {
    name: "_manager",
    type: "address"
  }, {
    name: "_signaturePubkey",
    type: "uint256"
  }, {
    name: "_claimMinGas",
    type: "uint128"
  }, {
    name: "_withdrawRecipient",
    type: "address"
  }, {
    name: "_fixedClaimFee",
    type: "uint128"
  }, {
    name: "_jettonMinter",
    type: "address"
  }, {
    name: "_jettonWallet",
    type: "address"
  }, {
    name: "_enable",
    type: "bool"
  }, {
    name: "_successfulClaimsCount",
    type: "uint128"
  }, {
    name: "_withdrawnFeesCount",
    type: "uint128"
  }, {
    name: "_totalTokenAmount",
    type: "uint128"
  }, {
    name: "_claimedTokenAmount",
    type: "uint128"
  }]
};
fe.AirdropAbi = {
  "ABI version": 2,
  version: "2.3",
  header: ["pubkey", "time", "expire"],
  functions: [{
    name: "constructor",
    inputs: [{
      name: "_signature",
      type: "bytes"
    }],
    outputs: []
  }],
  data: [{
    key: 1,
    name: "_nonce",
    type: "uint64"
  }, {
    key: 2,
    name: "_data",
    type: "cell"
  }],
  events: [],
  fields: [{
    name: "_pubkey",
    type: "uint256"
  }, {
    name: "_timestamp",
    type: "uint64"
  }, {
    name: "_constructorFlag",
    type: "bool"
  }, {
    name: "_nonce",
    type: "uint64"
  }, {
    name: "_data",
    type: "cell"
  }]
};
var Sn = {};
Object.defineProperty(Sn, "__esModule", {
  value: !0
});
var yr = Sn.AirdropStatus = void 0,
  Ds;
(function(n) {
  n.NoClaimId = "NoClaimId", n.NoUser = "NoUser", n.HasClaimed = "HasClaimed", n.CanClaim = "CanClaim", n.InQueue = "InQueue", n.NoReward = "NoReward", n.NoAirdrop = "NoAirdrop", n.Loading = "Loading"
})(Ds || (yr = Sn.AirdropStatus = Ds = {}));
var rs = {};
(function(n) {
  var t = tt && tt.__awaiter || function(p, T, b, S) {
      function A(h) {
        return h instanceof b ? h : new b(function(w) {
          w(h)
        })
      }
      return new(b || (b = Promise))(function(h, w) {
        function $(m) {
          try {
            v(S.next(m))
          } catch (F) {
            w(F)
          }
        }

        function y(m) {
          try {
            v(S.throw(m))
          } catch (F) {
            w(F)
          }
        }

        function v(m) {
          m.done ? h(m.value) : A(m.value).then($, y)
        }
        v((S = S.apply(p, T || [])).next())
      })
    },
    e = tt && tt.__generator || function(p, T) {
      var b = {
          label: 0,
          sent: function() {
            if (h[0] & 1) throw h[1];
            return h[1]
          },
          trys: [],
          ops: []
        },
        S, A, h, w = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
      return w.next = $(0), w.throw = $(1), w.return = $(2), typeof Symbol == "function" && (w[Symbol.iterator] = function() {
        return this
      }), w;

      function $(v) {
        return function(m) {
          return y([v, m])
        }
      }

      function y(v) {
        if (S) throw new TypeError("Generator is already executing.");
        for (; w && (w = 0, v[0] && (b = 0)), b;) try {
          if (S = 1, A && (h = v[0] & 2 ? A.return : v[0] ? A.throw || ((h = A.return) && h.call(A), 0) : A.next) && !(h = h.call(A, v[1])).done) return h;
          switch (A = 0, h && (v = [v[0] & 2, h.value]), v[0]) {
            case 0:
            case 1:
              h = v;
              break;
            case 4:
              return b.label++, {
                value: v[1],
                done: !1
              };
            case 5:
              b.label++, A = v[1], v = [0];
              continue;
            case 7:
              v = b.ops.pop(), b.trys.pop();
              continue;
            default:
              if (h = b.trys, !(h = h.length > 0 && h[h.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                b = 0;
                continue
              }
              if (v[0] === 3 && (!h || v[1] > h[0] && v[1] < h[3])) {
                b.label = v[1];
                break
              }
              if (v[0] === 6 && b.label < h[1]) {
                b.label = h[1], h = v;
                break
              }
              if (h && b.label < h[2]) {
                b.label = h[2], b.ops.push(v);
                break
              }
              h[2] && b.ops.pop(), b.trys.pop();
              continue
          }
          v = T.call(p, b)
        } catch (m) {
          v = [6, m], A = 0
        } finally {
          S = h = 0
        }
        if (v[0] & 5) throw v[1];
        return {
          value: v[0] ? v[1] : void 0,
          done: !0
        }
      }
    },
    s = tt && tt.__spreadArray || function(p, T, b) {
      if (b || arguments.length === 2)
        for (var S = 0, A = T.length, h; S < A; S++)(h || !(S in T)) && (h || (h = Array.prototype.slice.call(T, 0, S)), h[S] = T[S]);
      return p.concat(h || Array.prototype.slice.call(T))
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.buildTransaction = n.getCodeAirdropAndAmount = n.checkQueue = void 0;
  var r = mn,
    i = ve,
    o = fe,
    l = function(p, T, b) {
      return t(void 0, void 0, void 0, function() {
        var S, A;
        return e(this, function(h) {
          switch (h.label) {
            case 0:
              return [4, fetch("".concat(p, "/v2/").concat(T, "/").concat(b, "/claim_data"))];
            case 1:
              return S = h.sent(), [4, S.json()];
            case 2:
              return A = h.sent(), [2, A]
          }
        })
      })
    };
  n.checkQueue = l;
  var _ = function(p, T) {
    for (var b = [], S = 2; S < arguments.length; S++) b[S - 2] = arguments[S];
    return t(void 0, s([p, T], b, !0), void 0, function(A, h, w) {
      var $, v, m, F, y, v, m, F;
      return w === void 0 && (w = "10000000"), e(this, function(j) {
        switch (j.label) {
          case 0:
            $ = r.Address.parseFriendly(A).address.toRawString(), j.label = 1;
          case 1:
            return j.trys.push([1, 4, , 7]), v = new h.Contract(o.AirdropFactoryAbiV1, new i.Address($)), [4, v.fields._codeAirdrop()];
          case 2:
            return m = j.sent(), [4, v.fields._claimMinGas()];
          case 3:
            return F = j.sent(), [2, {
              codeAirdrop: m,
              amount: (parseInt(w, 10) + parseInt(F, 10)).toString()
            }];
          case 4:
            return y = j.sent(), console.warn(y), v = new h.Contract(o.AirdropFactoryAbiV2, new i.Address($)), [4, v.methods.getAirdropCode().call()];
          case 5:
            return m = j.sent().value0, [4, v.methods.getClaimMinGas().call()];
          case 6:
            return F = j.sent().value0, [2, {
              codeAirdrop: m,
              amount: (parseInt(w, 10) + parseInt(F, 10)).toString()
            }];
          case 7:
            return [2]
        }
      })
    })
  };
  n.getCodeAirdropAndAmount = _;
  var f = function(p, T, b) {
    for (var S = [], A = 3; A < arguments.length; A++) S[A - 3] = arguments[A];
    return t(void 0, s([p, T, b], S, !0), void 0, function(h, w, $, y) {
      var v, m, F, j, B, u, d, g;
      return y === void 0 && (y = "10000000"), e(this, function(P) {
        switch (P.label) {
          case 0:
            return [4, w.packIntoCell({
              abiVersion: "2.3",
              structure: [{
                type: "uint32",
                name: "functionId"
              }, {
                type: "bytes",
                name: "_signature"
              }],
              data: {
                functionId: "0x0bda4e15",
                _signature: h.signature
              }
            })];
          case 1:
            return v = P.sent(), [4, (0, n.getCodeAirdropAndAmount)(h.factory, w, y)];
          case 2:
            return m = P.sent(), F = m.amount, j = m.codeAirdrop, [4, w.mergeTvc({
              code: j,
              data: "te6ccgEBAgEAKAABAcABAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg"
            })];
          case 3:
            return B = P.sent(), [4, w.getStateInit(o.AirdropAbi, {
              workchain: 0,
              initParams: {
                _data: h.data,
                _nonce: h.nonce
              },
              tvc: B.tvc
            })];
          case 4:
            return u = P.sent(), d = u.stateInit, g = u.address, [2, {
              messages: [{
                amount: F,
                address: r.Address.parse(g.toString()).toString({
                  bounceable: !0
                }),
                payload: v.boc,
                stateInit: d
              }],
              validUntil: Math.ceil(($.time + 6e5) / 1e3)
            }]
        }
      })
    })
  };
  n.buildTransaction = f
})(rs);
(function(n) {
  var t = tt && tt.__assign || function() {
      return t = Object.assign || function(A) {
        for (var h, w = 1, $ = arguments.length; w < $; w++) {
          h = arguments[w];
          for (var y in h) Object.prototype.hasOwnProperty.call(h, y) && (A[y] = h[y])
        }
        return A
      }, t.apply(this, arguments)
    },
    e = tt && tt.__createBinding || (Object.create ? function(A, h, w, $) {
      $ === void 0 && ($ = w);
      var y = Object.getOwnPropertyDescriptor(h, w);
      (!y || ("get" in y ? !h.__esModule : y.writable || y.configurable)) && (y = {
        enumerable: !0,
        get: function() {
          return h[w]
        }
      }), Object.defineProperty(A, $, y)
    } : function(A, h, w, $) {
      $ === void 0 && ($ = w), A[$] = h[w]
    }),
    s = tt && tt.__exportStar || function(A, h) {
      for (var w in A) w !== "default" && !Object.prototype.hasOwnProperty.call(h, w) && e(h, A, w)
    },
    r = tt && tt.__awaiter || function(A, h, w, $) {
      function y(v) {
        return v instanceof w ? v : new w(function(m) {
          m(v)
        })
      }
      return new(w || (w = Promise))(function(v, m) {
        function F(u) {
          try {
            B($.next(u))
          } catch (d) {
            m(d)
          }
        }

        function j(u) {
          try {
            B($.throw(u))
          } catch (d) {
            m(d)
          }
        }

        function B(u) {
          u.done ? v(u.value) : y(u.value).then(F, j)
        }
        B(($ = $.apply(A, h || [])).next())
      })
    },
    i = tt && tt.__generator || function(A, h) {
      var w = {
          label: 0,
          sent: function() {
            if (v[0] & 1) throw v[1];
            return v[1]
          },
          trys: [],
          ops: []
        },
        $, y, v, m = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
      return m.next = F(0), m.throw = F(1), m.return = F(2), typeof Symbol == "function" && (m[Symbol.iterator] = function() {
        return this
      }), m;

      function F(B) {
        return function(u) {
          return j([B, u])
        }
      }

      function j(B) {
        if ($) throw new TypeError("Generator is already executing.");
        for (; m && (m = 0, B[0] && (w = 0)), w;) try {
          if ($ = 1, y && (v = B[0] & 2 ? y.return : B[0] ? y.throw || ((v = y.return) && v.call(y), 0) : y.next) && !(v = v.call(y, B[1])).done) return v;
          switch (y = 0, v && (B = [B[0] & 2, v.value]), B[0]) {
            case 0:
            case 1:
              v = B;
              break;
            case 4:
              return w.label++, {
                value: B[1],
                done: !1
              };
            case 5:
              w.label++, y = B[1], B = [0];
              continue;
            case 7:
              B = w.ops.pop(), w.trys.pop();
              continue;
            default:
              if (v = w.trys, !(v = v.length > 0 && v[v.length - 1]) && (B[0] === 6 || B[0] === 2)) {
                w = 0;
                continue
              }
              if (B[0] === 3 && (!v || B[1] > v[0] && B[1] < v[3])) {
                w.label = B[1];
                break
              }
              if (B[0] === 6 && w.label < v[1]) {
                w.label = v[1], v = B;
                break
              }
              if (v && w.label < v[2]) {
                w.label = v[2], w.ops.push(B);
                break
              }
              v[2] && w.ops.pop(), w.trys.pop();
              continue
          }
          B = h.call(A, w)
        } catch (u) {
          B = [6, u], y = 0
        } finally {
          $ = v = 0
        }
        if (B[0] & 5) throw B[1];
        return {
          value: B[0] ? B[1] : void 0,
          done: !0
        }
      }
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.AirdropUI = void 0;
  var o = mn,
    l = ve,
    _ = fe,
    f = Sn,
    p = rs;
  s(rs, n);
  var T = function() {
      function A(h) {
        this.subscribers = [], this.value = h
      }
      return A.prototype.set = function(h, w) {
        var $, y = this,
          v = t({}, this.value),
          m = t(t({}, v), ($ = {}, $[h] = w, $));
        this.value = m, this.subscribers.filter(function(F) {
          F[0];
          var j = F[1];
          return j.length === 0 || j.includes(h)
        }).forEach(function(F) {
          var j = F[0],
            B = F[1];
          if (B.length === 0) j(y.value);
          else
            for (var u = 0; u < B.length; u++) v[B[u]] !== m[B[u]] && j(y.value)
        })
      }, A.prototype.getState = function() {
        return t({}, this.value)
      }, A.prototype.subscribe = function(h) {
        for (var w = this, $ = [], y = 1; y < arguments.length; y++) $[y - 1] = arguments[y];
        var v = this.subscribers.push([h, $]);
        return h(this.value),
          function() {
            w.subscribers.splice(v - 1, 1)
          }
      }, A.prototype.unsubscribeAll = function() {
        this.subscribers = []
      }, A
    }(),
    b = {
      claimApiBaseUrl: "https://claim-api-test.d3mo.org",
      deployValue: "10000000"
    },
    S = function() {
      function A(h, w, $, y) {
        y === void 0 && (y = {});
        var v = this,
          m;
        this.tonConnect = h, this.rpc = w, this.clock = $, this.subscribers = [], this.state = new T({
          claimId: null,
          airdropName: null,
          claimData: null,
          storageData: null,
          claimed: null,
          loading: !1,
          userAddress: null,
          factoryAddress: null,
          airdropAddress: null,
          storageKey: null,
          claimLoading: !1,
          status: f.AirdropStatus.Loading
        }), this.getState = this.state.getState.bind(this.state), this.subscribe = this.state.subscribe.bind(this.state), this.options = t(t({}, b), y), this.syncStorageData = this.syncStorageData.bind(this), window.addEventListener("storage", this.syncStorageData), this.state.subscribe(this.initSyncClaimData.bind(this), "airdropName", "userAddress"), this.state.subscribe(this.syncStorageKey.bind(this), "airdropName", "userAddress", "claimId"), this.state.subscribe(this.syncFactoryAddress.bind(this), "claimData", "storageData", "claimId"), this.state.subscribe(this.syncAirdropAddress.bind(this), "claimData", "storageData", "claimId"), this.state.subscribe(this.initClaimListener.bind(this), "userAddress", "factoryAddress"), this.state.subscribe(this.syncRemoveStorageTimer.bind(this), "storageKey", "storageData"), this.state.subscribe(this.syncStorageData.bind(this), "storageKey", "claimed"), this.state.subscribe(this.syncClaimed.bind(this), "airdropAddress"), this.state.subscribe(this.syncClaimLoading.bind(this), "storageData"), this.state.subscribe(this.syncStatus.bind(this), "userAddress", "claimed", "claimData", "storageKey", "airdropName", "claimId"), this.state.set("userAddress", (m = this.tonConnect.account) === null || m === void 0 ? void 0 : m.address), this.tonConnectUnsubscribe = this.tonConnect.onStatusChange(function(F) {
          v.state.set("userAddress", F == null ? void 0 : F.account.address)
        })
      }
      return A.prototype.destory = function() {
        var h, w;
        this.state.unsubscribeAll(), clearTimeout(this.removeStorageTimeout), clearTimeout(this.claimDataTimeout), window.removeEventListener("storage", this.syncStorageData), (h = this.tonConnectUnsubscribe) === null || h === void 0 || h.call(this), (w = this.rpcSubscriber) === null || w === void 0 || w.unsubscribe()
      }, A.prototype.setAirdropName = function(h) {
        this.state.set("airdropName", h)
      }, A.prototype.setClaimId = function(h) {
        this.state.set("claimId", h)
      }, A.prototype.claim = function() {
        return r(this, void 0, void 0, function() {
          var h, w, $, y, v, m, F, j, B, u, d, g, P, C, O, N;
          return i(this, function(k) {
            switch (k.label) {
              case 0:
                if (h = this.getState(), w = h.claimData, $ = h.storageKey, y = h.claimId, !y) throw new Error("claimId must defined");
                if ((w == null ? void 0 : w.status) !== "signed") throw new Error("claimData.status must be signed");
                if (v = w.rewards.find(function(M) {
                    return M.claimId === y
                  }), !v) throw new Error("rewardData must defined");
                if (!$) throw new Error("storageKey must be defined");
                this.state.set("loading", !0), k.label = 1;
              case 1:
                return k.trys.push([1, 7, , 8]), [4, this.rpc.packIntoCell({
                  abiVersion: "2.3",
                  structure: [{
                    type: "uint32",
                    name: "functionId"
                  }, {
                    type: "bytes",
                    name: "_signature"
                  }],
                  data: {
                    functionId: "0x0bda4e15",
                    _signature: v.signature
                  }
                })];
              case 2:
                return m = k.sent(), [4, (0, p.getCodeAirdropAndAmount)(v.factory, this.rpc, this.options.deployValue)];
              case 3:
                return F = k.sent(), j = F.codeAirdrop, B = F.amount, [4, this.rpc.mergeTvc({
                  code: j ?? "",
                  data: "te6ccgEBAgEAKAABAcABAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg"
                })];
              case 4:
                return u = k.sent(), [4, this.rpc.getStateInit(_.AirdropAbi, {
                  workchain: 0,
                  initParams: {
                    _data: v.data,
                    _nonce: v.nonce
                  },
                  tvc: u.tvc
                })];
              case 5:
                return d = k.sent(), g = d.stateInit, P = d.address, C = this.clock.time, [4, this.tonConnect.sendTransaction({
                  messages: [{
                    amount: B,
                    address: o.Address.parse(P.toString()).toString({
                      bounceable: !0
                    }),
                    payload: m.boc,
                    stateInit: g
                  }],
                  validUntil: Math.ceil((C + 6e5) / 1e3)
                })];
              case 6:
                return k.sent(), O = {
                  airdrop: v.airdrop,
                  factory: v.factory,
                  until: C + 12e4
                }, localStorage.setItem($, JSON.stringify(O)), this.state.set("storageData", O), [3, 8];
              case 7:
                return N = k.sent(), console.error(N), [3, 8];
              case 8:
                return this.state.set("loading", !1), [2]
            }
          })
        })
      }, A.prototype.syncFactoryAddress = function() {
        var h, w = this.state.getState(),
          $ = w.claimData,
          y = w.storageData,
          v = w.claimId,
          m = void 0;
        ($ == null ? void 0 : $.status) === "signed" && v ? m = (h = $.rewards.find(function(F) {
          return F.claimId === v
        })) === null || h === void 0 ? void 0 : h.factory : m = y == null ? void 0 : y.factory, this.state.set("factoryAddress", m)
      }, A.prototype.syncAirdropAddress = function() {
        var h, w = this.state.getState(),
          $ = w.claimData,
          y = w.storageData,
          v = w.claimId,
          m = void 0;
        ($ == null ? void 0 : $.status) === "signed" && v ? m = (h = $.rewards.find(function(F) {
          return F.claimId === v
        })) === null || h === void 0 ? void 0 : h.airdrop : m = y == null ? void 0 : y.airdrop, this.state.set("airdropAddress", m)
      }, A.prototype.syncStorageKey = function() {
        var h = this.state.getState(),
          w = h.airdropName,
          $ = h.userAddress,
          y = h.claimId,
          v = w && $ && y ? A.getStorageKey(w, $, y) : null;
        this.state.set("storageKey", v)
      }, A.prototype.syncStorageData = function() {
        var h = this.state.getState(),
          w = h.storageKey,
          $ = h.claimed;
        if ($) this.state.set("storageData", null);
        else {
          var y = w ? localStorage.getItem(w) : null;
          if (y) try {
            var v = JSON.parse(y),
              m = this.clock.time < v.until ? v : null;
            this.state.set("storageData", m)
          } catch (F) {
            console.error(F)
          }
        }
      }, A.prototype.syncRemoveStorageTimer = function() {
        var h = this,
          w = this.clock.time,
          $ = this.state.getState(),
          y = $.storageKey,
          v = $.storageData;
        clearTimeout(this.removeStorageTimeout), y && v && w < v.until && (this.removeStorageTimeout = setTimeout(function() {
          localStorage.removeItem(y), h.state.set("storageData", null)
        }, v.until - w))
      }, A.prototype.syncClaimed = function() {
        return r(this, void 0, void 0, function() {
          var h, w, $, y;
          return i(this, function(v) {
            switch (v.label) {
              case 0:
                if (h = this.state.getState().airdropAddress, this.state.set("claimed", null), !h) return [2];
                this.state.set("loading", !0), v.label = 1;
              case 1:
                return v.trys.push([1, 3, , 4]), w = o.Address.parseFriendly(h).address.toRawString(), [4, this.rpc.getFullContractState({
                  address: new l.Address(w)
                })];
              case 2:
                return $ = v.sent(), this.state.set("claimed", !!$.state), [3, 4];
              case 3:
                return y = v.sent(), console.error(y), [3, 4];
              case 4:
                return this.state.set("loading", !1), [2]
            }
          })
        })
      }, A.prototype.syncClaimLoading = function() {
        var h = this.state.getState().storageData;
        this.state.set("claimLoading", !!h)
      }, A.prototype.syncStatus = function() {
        var h, w, $, y = f.AirdropStatus.Loading,
          v = this.getState();
        v.userAddress ? v.claimed === !0 ? y = f.AirdropStatus.HasClaimed : v.claimed === !1 && ((h = v.claimData) === null || h === void 0 ? void 0 : h.status) === "signed" && v.storageKey ? y = f.AirdropStatus.CanClaim : ((w = v.claimData) === null || w === void 0 ? void 0 : w.status) === "inQueue" ? y = f.AirdropStatus.InQueue : (($ = v.claimData) === null || $ === void 0 ? void 0 : $.status) === "noReward" ? y = f.AirdropStatus.NoReward : v.airdropName ? v.claimId || (y = f.AirdropStatus.NoClaimId) : y = f.AirdropStatus.NoAirdrop : y = f.AirdropStatus.NoUser, this.state.set("status", y)
      }, A.prototype.initSyncClaimData = function() {
        var h = this;
        clearInterval(this.claimDataTimeout), this.state.set("claimData", null);
        var w = this.state.getState(),
          $ = w.airdropName,
          y = w.userAddress;
        if (!(!$ || !y)) {
          var v = function() {
            return r(h, void 0, void 0, function() {
              var m, F, j, B;
              return i(this, function(u) {
                switch (u.label) {
                  case 0:
                    this.state.set("loading", !0), u.label = 1;
                  case 1:
                    return u.trys.push([1, 4, , 5]), m = this.options.claimApiBaseUrl, [4, fetch("".concat(m, "/v2/").concat($, "/").concat(y, "/claim_data"))];
                  case 2:
                    return F = u.sent(), [4, F.json()];
                  case 3:
                    return j = u.sent(), this.state.set("claimData", j), [3, 5];
                  case 4:
                    return B = u.sent(), console.error(B), [3, 5];
                  case 5:
                    return this.state.set("loading", !1), [2]
                }
              })
            })
          };
          this.claimDataTimeout = setInterval(v, 2e4), v()
        }
      }, A.prototype.initClaimListener = function() {
        return r(this, void 0, void 0, function() {
          var h, w, $, y, v, m = this,
            F;
          return i(this, function(j) {
            switch (j.label) {
              case 0:
                return (F = this.rpcSubscriber) === null || F === void 0 || F.unsubscribe(), h = this.state.getState(), w = h.factoryAddress, $ = h.userAddress, !w || !$ ? [2] : (y = o.Address.parseFriendly(w).address.toRawString(), v = new this.rpc.Contract(_.AirdropFactoryAbiV2, new l.Address(y)), this.rpcSubscriber = new this.rpc.Subscriber, [4, this.rpcSubscriber.transactions(v.address).flatMap(function(B) {
                  return B.transactions
                }).flatMap(function(B) {
                  return v.decodeTransactionEvents({
                    transaction: B
                  })
                }).filterMap(function(B) {
                  if (B.event === "AirdropClaimed" && B.data.recipient.toString() === $) return m.state.set("claimed", !0), !0
                }).first()]);
              case 1:
                return j.sent(), [2]
            }
          })
        })
      }, A.getStorageKey = function(h, w, $) {
        return "airdrop-v2-".concat(h, "-").concat(w, "-").concat($)
      }, A
    }();
  n.AirdropUI = S
})(gr);
var is = {};
let c;
const vr = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && vr.decode();
let He = null;

function Ne() {
  return (He === null || He.byteLength === 0) && (He = new Uint8Array(c.memory.buffer)), He
}

function bt(n, t) {
  return n = n >>> 0, vr.decode(Ne().subarray(n, n + t))
}
const _e = new Array(128).fill(void 0);
_e.push(void 0, null, !0, !1);
let Xe = _e.length;

function J(n) {
  Xe === _e.length && _e.push(_e.length + 1);
  const t = Xe;
  return Xe = _e[t], _e[t] = n, t
}

function X(n) {
  return _e[n]
}

function wt(n) {
  return n == null
}
let Ie = null;

function R() {
  return (Ie === null || Ie.buffer.detached === !0 || Ie.buffer.detached === void 0 && Ie.buffer !== c.memory.buffer) && (Ie = new DataView(c.memory.buffer)), Ie
}
let H = 0;
const hn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  No = typeof hn.encodeInto == "function" ? function(n, t) {
    return hn.encodeInto(n, t)
  } : function(n, t) {
    const e = hn.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function V(n, t, e) {
  if (e === void 0) {
    const l = hn.encode(n),
      _ = t(l.length, 1) >>> 0;
    return Ne().subarray(_, _ + l.length).set(l), H = l.length, _
  }
  let s = n.length,
    r = t(s, 1) >>> 0;
  const i = Ne();
  let o = 0;
  for (; o < s; o++) {
    const l = n.charCodeAt(o);
    if (l > 127) break;
    i[r + o] = l
  }
  if (o !== s) {
    o !== 0 && (n = n.slice(o)), r = e(r, s, s = o + n.length * 3, 1) >>> 0;
    const l = Ne().subarray(r + o, r + s),
      _ = No(n, l);
    o += _.written, r = e(r, s, o, 1) >>> 0
  }
  return H = o, r
}

function Ko(n) {
  n < 132 || (_e[n] = Xe, Xe = n)
}

function W(n) {
  const t = X(n);
  return Ko(n), t
}

function as(n) {
  const t = typeof n;
  if (t == "number" || t == "boolean" || n == null) return `${n}`;
  if (t == "string") return `"${n}"`;
  if (t == "symbol") {
    const r = n.description;
    return r == null ? "Symbol" : `Symbol(${r})`
  }
  if (t == "function") {
    const r = n.name;
    return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function"
  }
  if (Array.isArray(n)) {
    const r = n.length;
    let i = "[";
    r > 0 && (i += as(n[0]));
    for (let o = 1; o < r; o++) i += ", " + as(n[o]);
    return i += "]", i
  }
  const e = /\[object ([^\]]+)\]/.exec(toString.call(n));
  let s;
  if (e.length > 1) s = e[1];
  else return toString.call(n);
  if (s == "Object") try {
    return "Object(" + JSON.stringify(n) + ")"
  } catch {
    return "Object"
  }
  return n instanceof Error ? `${n.name}: ${n.message}
${n.stack}` : s
}
const Rs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => {
  c.__wbindgen_export_2.get(n.dtor)(n.a, n.b)
});

function jo(n, t, e, s) {
  const r = {
      a: n,
      b: t,
      cnt: 1,
      dtor: e
    },
    i = (...o) => {
      r.cnt++;
      const l = r.a;
      r.a = 0;
      try {
        return s(l, r.b, ...o)
      } finally {
        --r.cnt === 0 ? (c.__wbindgen_export_2.get(r.dtor)(l, r.b), Rs.unregister(r)) : r.a = l
      }
    };
  return i.original = r, Rs.register(i, r, r), i
}

function $o(n, t, e) {
  c._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0fff6d0ad1f7528f(n, t, J(e))
}

function Bo(n, t) {
  return n = n >>> 0, Ne().subarray(n / 1, n / 1 + t)
}

function xo(n, t) {
  const e = t(n.length * 1, 1) >>> 0;
  return Ne().set(n, e / 1), H = n.length, e
}

function Et(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    c.__wbindgen_exn_store(J(e))
  }
}

function se(n, t) {
  if (!(n instanceof t)) throw new Error(`expected instance of ${t.name}`);
  return n.ptr
}

function zo(n) {
  const t = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
    e = H;
  return c.checkAddress(t, e) !== 0
}

function Uo(n) {
  let t, e;
  try {
    const f = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      T = H;
    c.repackAddress(f, p, T);
    var s = R().getInt32(f + 4 * 0, !0),
      r = R().getInt32(f + 4 * 1, !0),
      i = R().getInt32(f + 4 * 2, !0),
      o = R().getInt32(f + 4 * 3, !0),
      l = s,
      _ = r;
    if (o) throw l = 0, _ = 0, W(i);
    return t = l, e = _, bt(l, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function Wo(n, t, e, s, r, i, o) {
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16);
    se(n, pe);
    const T = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      b = H,
      S = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H,
      h = V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = H;
    c.runLocal(p, n.__wbg_ptr, T, b, S, A, h, w, J(r), i, !wt(o), wt(o) ? 0 : o);
    var l = R().getInt32(p + 4 * 0, !0),
      _ = R().getInt32(p + 4 * 1, !0),
      f = R().getInt32(p + 4 * 2, !0);
    if (f) throw W(_);
    return W(l)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Go(n) {
  let t, e;
  try {
    const T = c.__wbindgen_add_to_stack_pointer(-16);
    var s = wt(n) ? 0 : V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      r = H;
    c.makeFullAccountBoc(T, s, r);
    var i = R().getInt32(T + 4 * 0, !0),
      o = R().getInt32(T + 4 * 1, !0),
      l = R().getInt32(T + 4 * 2, !0),
      _ = R().getInt32(T + 4 * 3, !0),
      f = i,
      p = o;
    if (_) throw f = 0, p = 0, W(l);
    return t = f, e = p, bt(f, p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function Ho(n) {
  try {
    const r = c.__wbindgen_add_to_stack_pointer(-16),
      i = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.parseFullAccountBoc(r, i, o);
    var t = R().getInt32(r + 4 * 0, !0),
      e = R().getInt32(r + 4 * 1, !0),
      s = R().getInt32(r + 4 * 2, !0);
    if (s) throw W(e);
    return W(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Vo(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = H;
    c.parseFullAccountStateInit(i, o, l);
    var t = R().getInt32(i + 4 * 0, !0),
      e = R().getInt32(i + 4 * 1, !0),
      s = R().getInt32(i + 4 * 2, !0),
      r = R().getInt32(i + 4 * 3, !0);
    if (r) throw W(s);
    let _;
    return t !== 0 && (_ = bt(t, e).slice(), c.__wbindgen_free(t, e * 1, 1)), _
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Qo(n, t, e, s) {
  try {
    const l = c.__wbindgen_add_to_stack_pointer(-16),
      _ = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H,
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      T = H;
    c.computeStorageFee(l, _, f, p, T, e, s);
    var r = R().getInt32(l + 4 * 0, !0),
      i = R().getInt32(l + 4 * 1, !0),
      o = R().getInt32(l + 4 * 2, !0);
    if (o) throw W(i);
    return W(r)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Jo(n, t, e, s, r, i, o) {
  try {
    const b = c.__wbindgen_add_to_stack_pointer(-16),
      S = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H,
      h = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = H,
      $ = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      y = H;
    var l = wt(i) ? 0 : V(i, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H;
    c.executeLocal(b, S, A, h, w, $, y, s, r, l, _, !wt(o), wt(o) ? 0 : o);
    var f = R().getInt32(b + 4 * 0, !0),
      p = R().getInt32(b + 4 * 1, !0),
      T = R().getInt32(b + 4 * 2, !0);
    if (T) throw W(p);
    return W(f)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Xo(n, t, e, s, r) {
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16),
      T = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      b = H,
      S = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H;
    var i = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.getExpectedAddress(p, T, b, S, A, e, i, o, J(r));
    var l = R().getInt32(p + 4 * 0, !0),
      _ = R().getInt32(p + 4 * 1, !0),
      f = R().getInt32(p + 4 * 2, !0);
    if (f) throw W(_);
    return W(l)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Yo(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      l = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H,
      f = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    c.unpackContractFields(o, l, _, f, p, e);
    var s = R().getInt32(o + 4 * 0, !0),
      r = R().getInt32(o + 4 * 1, !0),
      i = R().getInt32(o + 4 * 2, !0);
    if (i) throw W(r);
    return W(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Zo(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = H,
      _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H;
    c.unpackInitData(i, o, l, _, f);
    var e = R().getInt32(i + 4 * 0, !0),
      s = R().getInt32(i + 4 * 1, !0),
      r = R().getInt32(i + 4 * 2, !0);
    if (r) throw W(s);
    return W(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function qo(n) {
  let t, e;
  try {
    const f = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      T = H;
    c.getBocHash(f, p, T);
    var s = R().getInt32(f + 4 * 0, !0),
      r = R().getInt32(f + 4 * 1, !0),
      i = R().getInt32(f + 4 * 2, !0),
      o = R().getInt32(f + 4 * 3, !0),
      l = s,
      _ = r;
    if (o) throw l = 0, _ = 0, W(i);
    return t = l, e = _, bt(l, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function tc(n, t, e) {
  try {
    const _ = c.__wbindgen_add_to_stack_pointer(-16);
    var s = wt(e) ? 0 : V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      r = H;
    c.packIntoCell(_, J(n), J(t), s, r);
    var i = R().getInt32(_ + 4 * 0, !0),
      o = R().getInt32(_ + 4 * 1, !0),
      l = R().getInt32(_ + 4 * 2, !0);
    if (l) throw W(o);
    return W(i)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function ec(n, t, e, s) {
  try {
    const f = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      T = H;
    var r = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = H;
    c.unpackFromCell(f, J(n), p, T, e, r, i);
    var o = R().getInt32(f + 4 * 0, !0),
      l = R().getInt32(f + 4 * 1, !0),
      _ = R().getInt32(f + 4 * 2, !0);
    if (_) throw W(l);
    return W(o)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function nc(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = H;
    c.extractContractData(i, o, l);
    var t = R().getInt32(i + 4 * 0, !0),
      e = R().getInt32(i + 4 * 1, !0),
      s = R().getInt32(i + 4 * 2, !0),
      r = R().getInt32(i + 4 * 3, !0);
    if (r) throw W(s);
    let _;
    return t !== 0 && (_ = bt(t, e).slice(), c.__wbindgen_free(t, e * 1, 1)), _
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function sc(n) {
  let t, e;
  try {
    const f = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      T = H;
    c.extractPublicKey(f, p, T);
    var s = R().getInt32(f + 4 * 0, !0),
      r = R().getInt32(f + 4 * 1, !0),
      i = R().getInt32(f + 4 * 2, !0),
      o = R().getInt32(f + 4 * 3, !0),
      l = s,
      _ = r;
    if (o) throw l = 0, _ = 0, W(i);
    return t = l, e = _, bt(l, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function rc(n) {
  try {
    const r = c.__wbindgen_add_to_stack_pointer(-16),
      i = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.codeToTvc(r, i, o);
    var t = R().getInt32(r + 4 * 0, !0),
      e = R().getInt32(r + 4 * 1, !0),
      s = R().getInt32(r + 4 * 2, !0);
    if (s) throw W(e);
    return W(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function ic(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = H,
      _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H;
    c.mergeTvc(i, o, l, _, f);
    var e = R().getInt32(i + 4 * 0, !0),
      s = R().getInt32(i + 4 * 1, !0),
      r = R().getInt32(i + 4 * 2, !0);
    if (r) throw W(s);
    return W(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function ac(n) {
  try {
    const r = c.__wbindgen_add_to_stack_pointer(-16),
      i = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.splitTvc(r, i, o);
    var t = R().getInt32(r + 4 * 0, !0),
      e = R().getInt32(r + 4 * 1, !0),
      s = R().getInt32(r + 4 * 2, !0);
    if (s) throw W(e);
    return W(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function oc(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = H,
      _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H;
    c.setCodeSalt(i, o, l, _, f);
    var e = R().getInt32(i + 4 * 0, !0),
      s = R().getInt32(i + 4 * 1, !0),
      r = R().getInt32(i + 4 * 2, !0);
    if (r) throw W(s);
    return W(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function cc(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = H;
    c.getCodeSalt(i, o, l);
    var t = R().getInt32(i + 4 * 0, !0),
      e = R().getInt32(i + 4 * 1, !0),
      s = R().getInt32(i + 4 * 2, !0),
      r = R().getInt32(i + 4 * 3, !0);
    if (r) throw W(s);
    let _;
    return t !== 0 && (_ = bt(t, e).slice(), c.__wbindgen_free(t, e * 1, 1)), _
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function lc(n, t, e) {
  let s, r;
  try {
    const T = c.__wbindgen_add_to_stack_pointer(-16),
      b = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      S = H,
      A = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    c.encodeInternalInput(T, b, S, A, h, J(e));
    var i = R().getInt32(T + 4 * 0, !0),
      o = R().getInt32(T + 4 * 1, !0),
      l = R().getInt32(T + 4 * 2, !0),
      _ = R().getInt32(T + 4 * 3, !0),
      f = i,
      p = o;
    if (_) throw f = 0, p = 0, W(l);
    return s = f, r = p, bt(f, p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(s, r, 1)
  }
}

function uc(n, t, e, s, r, i, o) {
  let l, _;
  try {
    const F = c.__wbindgen_add_to_stack_pointer(-16);
    var f = wt(n) ? 0 : V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    const j = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      B = H;
    var T = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      b = H,
      S = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H;
    const u = V(i, c.__wbindgen_malloc, c.__wbindgen_realloc),
      d = H;
    c.encodeInternalMessage(F, f, p, j, B, e, T, b, S, A, u, d, wt(o) ? 16777215 : o ? 1 : 0);
    var h = R().getInt32(F + 4 * 0, !0),
      w = R().getInt32(F + 4 * 1, !0),
      $ = R().getInt32(F + 4 * 2, !0),
      y = R().getInt32(F + 4 * 3, !0),
      v = h,
      m = w;
    if (y) throw v = 0, m = 0, W($);
    return l = v, _ = m, bt(v, m)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(l, _, 1)
  }
}

function dc(n, t, e, s) {
  try {
    const l = c.__wbindgen_add_to_stack_pointer(-16),
      _ = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H,
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      T = H;
    c.decodeInput(l, _, f, p, T, J(e), s);
    var r = R().getInt32(l + 4 * 0, !0),
      i = R().getInt32(l + 4 * 1, !0),
      o = R().getInt32(l + 4 * 2, !0);
    if (o) throw W(i);
    return W(r)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function _c(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      l = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H,
      f = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    c.decodeEvent(o, l, _, f, p, J(e));
    var s = R().getInt32(o + 4 * 0, !0),
      r = R().getInt32(o + 4 * 1, !0),
      i = R().getInt32(o + 4 * 2, !0);
    if (i) throw W(r);
    return W(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function pc(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      l = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H,
      f = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    c.decodeOutput(o, l, _, f, p, J(e));
    var s = R().getInt32(o + 4 * 0, !0),
      r = R().getInt32(o + 4 * 1, !0),
      i = R().getInt32(o + 4 * 2, !0);
    if (i) throw W(r);
    return W(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function fc(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      l = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H;
    c.decodeTransaction(o, J(n), l, _, J(e));
    var s = R().getInt32(o + 4 * 0, !0),
      r = R().getInt32(o + 4 * 1, !0),
      i = R().getInt32(o + 4 * 2, !0);
    if (i) throw W(r);
    return W(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function hc(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = H;
    c.decodeTransactionEvents(i, J(n), o, l);
    var e = R().getInt32(i + 4 * 0, !0),
      s = R().getInt32(i + 4 * 1, !0),
      r = R().getInt32(i + 4 * 2, !0);
    if (r) throw W(s);
    return W(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function gc(n) {
  try {
    const r = c.__wbindgen_add_to_stack_pointer(-16),
      i = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.unpackTransactionTree(r, i, o);
    var t = R().getInt32(r + 4 * 0, !0),
      e = R().getInt32(r + 4 * 1, !0),
      s = R().getInt32(r + 4 * 2, !0);
    if (s) throw W(e);
    return W(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function bc(n) {
  let t, e;
  try {
    const f = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      T = H;
    c.getDataHash(f, p, T);
    var s = R().getInt32(f + 4 * 0, !0),
      r = R().getInt32(f + 4 * 1, !0),
      i = R().getInt32(f + 4 * 2, !0),
      o = R().getInt32(f + 4 * 3, !0),
      l = s,
      _ = r;
    if (o) throw l = 0, _ = 0, W(i);
    return t = l, e = _, bt(l, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function mc() {
  try {
    const s = c.__wbindgen_add_to_stack_pointer(-16);
    c.ed25519_generateKeyPair(s);
    var n = R().getInt32(s + 4 * 0, !0),
      t = R().getInt32(s + 4 * 1, !0),
      e = R().getInt32(s + 4 * 2, !0);
    if (e) throw W(t);
    return W(n)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function wc(n, t, e) {
  let s, r;
  try {
    const T = c.__wbindgen_add_to_stack_pointer(-16),
      b = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      S = H,
      A = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    c.ed25519_sign(T, b, S, A, h, !wt(e), wt(e) ? 0 : e);
    var i = R().getInt32(T + 4 * 0, !0),
      o = R().getInt32(T + 4 * 1, !0),
      l = R().getInt32(T + 4 * 2, !0),
      _ = R().getInt32(T + 4 * 3, !0),
      f = i,
      p = o;
    if (_) throw f = 0, p = 0, W(l);
    return s = f, r = p, bt(f, p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(s, r, 1)
  }
}

function yc(n) {
  try {
    const r = c.__wbindgen_add_to_stack_pointer(-16),
      i = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.extendSignature(r, i, o);
    var t = R().getInt32(r + 4 * 0, !0),
      e = R().getInt32(r + 4 * 1, !0),
      s = R().getInt32(r + 4 * 2, !0);
    if (s) throw W(e);
    return W(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function vc(n, t, e, s) {
  try {
    const l = c.__wbindgen_add_to_stack_pointer(-16),
      _ = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H,
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      T = H,
      b = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      S = H;
    c.verifySignature(l, _, f, p, T, b, S, !wt(s), wt(s) ? 0 : s);
    var r = R().getInt32(l + 4 * 0, !0),
      i = R().getInt32(l + 4 * 1, !0),
      o = R().getInt32(l + 4 * 2, !0);
    if (o) throw W(i);
    return r !== 0
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Ac(n, t, e, s) {
  try {
    const T = c.__wbindgen_add_to_stack_pointer(-16),
      b = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      S = H;
    var r = wt(t) ? 0 : V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = H,
      o = wt(e) ? 0 : V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = H;
    c.createRawExternalMessage(T, b, S, r, i, o, l, s);
    var _ = R().getInt32(T + 4 * 0, !0),
      f = R().getInt32(T + 4 * 1, !0),
      p = R().getInt32(T + 4 * 2, !0);
    if (p) throw W(f);
    return W(_)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function kc(n, t, e, s, r, i, o) {
  try {
    const b = c.__wbindgen_add_to_stack_pointer(-16);
    se(n, pe);
    const S = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H,
      h = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = H,
      $ = V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      y = H;
    var l = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H;
    c.createExternalMessageWithoutSignature(b, n.__wbg_ptr, S, A, h, w, $, y, l, _, J(i), o);
    var f = R().getInt32(b + 4 * 0, !0),
      p = R().getInt32(b + 4 * 1, !0),
      T = R().getInt32(b + 4 * 2, !0);
    if (T) throw W(p);
    return W(f)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Sc(n, t, e, s, r, i, o, l) {
  try {
    const S = c.__wbindgen_add_to_stack_pointer(-16);
    se(n, pe);
    const A = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H,
      w = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      $ = H,
      y = V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      v = H;
    var _ = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H;
    const m = V(o, c.__wbindgen_malloc, c.__wbindgen_realloc),
      F = H;
    c.createExternalMessage(S, n.__wbg_ptr, A, h, w, $, y, v, _, f, J(i), m, F, l);
    var p = R().getInt32(S + 4 * 0, !0),
      T = R().getInt32(S + 4 * 1, !0),
      b = R().getInt32(S + 4 * 2, !0);
    if (b) throw W(T);
    return Tn.__wrap(p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Ic(n, t, e, s) {
  c.wasm_bindgen__convert__closures__invoke2_mut__h5874b044d3e8a56e(n, t, J(e), J(s))
}
const Ls = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_bytesquery_free(n >>> 0, 1));
class In {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(In.prototype);
    return e.__wbg_ptr = t, Ls.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ls.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_bytesquery_free(t, 0)
  }
  onReceive(t) {
    const e = this.__destroy_into_raw(),
      s = xo(t, c.__wbindgen_malloc),
      r = H;
    c.bytesquery_onReceive(e, s, r)
  }
  onError(t) {
    const e = this.__destroy_into_raw();
    c.bytesquery_onError(e, J(t))
  }
  onTimeout() {
    const t = this.__destroy_into_raw();
    c.bytesquery_onTimeout(t)
  }
}
const Fs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_clockwithoffset_free(n >>> 0, 1));
class pe {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Fs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_clockwithoffset_free(t, 0)
  }
  constructor() {
    const t = c.clockwithoffset_new();
    return this.__wbg_ptr = t >>> 0, Fs.register(this, this.__wbg_ptr, this), this
  }
  get nowMs() {
    return c.clockwithoffset_nowMs(this.__wbg_ptr)
  }
  updateOffset(t) {
    c.clockwithoffset_updateOffset(this.__wbg_ptr, t)
  }
  offsetMs() {
    return c.clockwithoffset_offsetMs(this.__wbg_ptr)
  }
}
const Ns = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_genericcontract_free(n >>> 0, 1));
class Cn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Cn.prototype);
    return e.__wbg_ptr = t, Ns.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ns.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_genericcontract_free(t, 0)
  }
  get address() {
    let t, e;
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16);
      c.genericcontract_address(i, this.__wbg_ptr);
      var s = R().getInt32(i + 4 * 0, !0),
        r = R().getInt32(i + 4 * 1, !0);
      return t = s, e = r, bt(s, r)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
    }
  }
  sendMessageLocally(t, e) {
    try {
      const o = c.__wbindgen_add_to_stack_pointer(-16);
      c.genericcontract_sendMessageLocally(o, this.__wbg_ptr, J(t), J(e));
      var s = R().getInt32(o + 4 * 0, !0),
        r = R().getInt32(o + 4 * 1, !0),
        i = R().getInt32(o + 4 * 2, !0);
      if (i) throw W(r);
      return W(s)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  sendMessage(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16);
      c.genericcontract_sendMessage(i, this.__wbg_ptr, J(t));
      var e = R().getInt32(i + 4 * 0, !0),
        s = R().getInt32(i + 4 * 1, !0),
        r = R().getInt32(i + 4 * 2, !0);
      if (r) throw W(s);
      return W(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  refresh() {
    const t = c.genericcontract_refresh(this.__wbg_ptr);
    return W(t)
  }
  handleBlock(t) {
    const e = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      s = H,
      r = c.genericcontract_handleBlock(this.__wbg_ptr, e, s);
    return W(r)
  }
  preloadTransactions(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        l = H;
      c.genericcontract_preloadTransactions(i, this.__wbg_ptr, o, l);
      var e = R().getInt32(i + 4 * 0, !0),
        s = R().getInt32(i + 4 * 1, !0),
        r = R().getInt32(i + 4 * 2, !0);
      if (r) throw W(s);
      return W(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  get pollingMethod() {
    const t = c.genericcontract_pollingMethod(this.__wbg_ptr);
    return W(t)
  }
}
const Ks = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_gqlconnection_free(n >>> 0, 1));
class Ar {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ks.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_gqlconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, Ks.register(this, this.__wbg_ptr, this), this
  }
  getLatestBlock(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        l = H;
      c.gqlconnection_getLatestBlock(i, this.__wbg_ptr, o, l);
      var e = R().getInt32(i + 4 * 0, !0),
        s = R().getInt32(i + 4 * 1, !0),
        r = R().getInt32(i + 4 * 2, !0);
      if (r) throw W(s);
      return W(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  waitForNextBlock(t, e, s) {
    try {
      const l = c.__wbindgen_add_to_stack_pointer(-16),
        _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        f = H,
        p = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
        T = H;
      c.gqlconnection_waitForNextBlock(l, this.__wbg_ptr, _, f, p, T, s);
      var r = R().getInt32(l + 4 * 0, !0),
        i = R().getInt32(l + 4 * 1, !0),
        o = R().getInt32(l + 4 * 2, !0);
      if (o) throw W(i);
      return W(r)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
const js = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_jrpcconnection_free(n >>> 0, 1));
class kr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, js.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_jrpcconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, js.register(this, this.__wbg_ptr, this), this
  }
}
const $s = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_protoconnection_free(n >>> 0, 1));
class Sr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $s.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_protoconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, $s.register(this, this.__wbg_ptr, this), this
  }
}
const Bs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_proxyconnection_free(n >>> 0, 1));
class Ir {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Bs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_proxyconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, Bs.register(this, this.__wbg_ptr, this), this
  }
}
const xs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_stringquery_free(n >>> 0, 1));
class tn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(tn.prototype);
    return e.__wbg_ptr = t, xs.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, xs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_stringquery_free(t, 0)
  }
  onReceive(t) {
    const e = this.__destroy_into_raw(),
      s = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      r = H;
    c.bytesquery_onReceive(e, s, r)
  }
  onError(t) {
    const e = this.__destroy_into_raw();
    c.bytesquery_onError(e, J(t))
  }
  onTimeout() {
    const t = this.__destroy_into_raw();
    c.bytesquery_onTimeout(t)
  }
}
const zs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_transport_free(n >>> 0, 1));
class Te {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Te.prototype);
    return e.__wbg_ptr = t, zs.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_transport_free(t, 0)
  }
  static fromGqlConnection(t, e) {
    se(t, Ar), se(e, pe);
    const s = c.transport_fromGqlConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(s)
  }
  static fromJrpcConnection(t, e) {
    se(t, kr), se(e, pe);
    const s = c.transport_fromJrpcConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(s)
  }
  static fromProtoConnection(t, e) {
    se(t, Sr), se(e, pe);
    const s = c.transport_fromProtoConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(s)
  }
  static fromProxyConnection(t, e) {
    se(t, Ir), se(e, pe);
    const s = c.transport_fromProxyConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(s)
  }
  getNetworkDescription() {
    const t = c.transport_getNetworkDescription(this.__wbg_ptr);
    return W(t)
  }
  getSignatureId() {
    const t = c.transport_getSignatureId(this.__wbg_ptr);
    return W(t)
  }
  getBlockchainConfig(t) {
    const e = c.transport_getBlockchainConfig(this.__wbg_ptr, wt(t) ? 16777215 : t ? 1 : 0);
    return W(e)
  }
  subscribeToGenericContract(t, e) {
    try {
      const o = c.__wbindgen_add_to_stack_pointer(-16),
        l = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        _ = H;
      c.transport_subscribeToGenericContract(o, this.__wbg_ptr, l, _, J(e));
      var s = R().getInt32(o + 4 * 0, !0),
        r = R().getInt32(o + 4 * 1, !0),
        i = R().getInt32(o + 4 * 2, !0);
      if (i) throw W(r);
      return W(s)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getFullContractState(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        l = H;
      c.transport_getFullContractState(i, this.__wbg_ptr, o, l);
      var e = R().getInt32(i + 4 * 0, !0),
        s = R().getInt32(i + 4 * 1, !0),
        r = R().getInt32(i + 4 * 2, !0);
      if (r) throw W(s);
      return W(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getAccountsByCodeHash(t, e, s) {
    try {
      const f = c.__wbindgen_add_to_stack_pointer(-16),
        p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        T = H;
      var r = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
        i = H;
      c.transport_getAccountsByCodeHash(f, this.__wbg_ptr, p, T, e, r, i);
      var o = R().getInt32(f + 4 * 0, !0),
        l = R().getInt32(f + 4 * 1, !0),
        _ = R().getInt32(f + 4 * 2, !0);
      if (_) throw W(l);
      return W(o)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getTransactions(t, e, s) {
    try {
      const f = c.__wbindgen_add_to_stack_pointer(-16),
        p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        T = H;
      var r = wt(e) ? 0 : V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
        i = H;
      c.transport_getTransactions(f, this.__wbg_ptr, p, T, r, i, s);
      var o = R().getInt32(f + 4 * 0, !0),
        l = R().getInt32(f + 4 * 1, !0),
        _ = R().getInt32(f + 4 * 2, !0);
      if (_) throw W(l);
      return W(o)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getTransaction(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        l = H;
      c.transport_getTransaction(i, this.__wbg_ptr, o, l);
      var e = R().getInt32(i + 4 * 0, !0),
        s = R().getInt32(i + 4 * 1, !0),
        r = R().getInt32(i + 4 * 2, !0);
      if (r) throw W(s);
      return W(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getDstTransaction(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        l = H;
      c.transport_getDstTransaction(i, this.__wbg_ptr, o, l);
      var e = R().getInt32(i + 4 * 0, !0),
        s = R().getInt32(i + 4 * 1, !0),
        r = R().getInt32(i + 4 * 2, !0);
      if (r) throw W(s);
      return W(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
const Us = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_unsignedmessage_free(n >>> 0, 1));
class Tn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Tn.prototype);
    return e.__wbg_ptr = t, Us.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Us.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_unsignedmessage_free(t, 0)
  }
  refreshTimeout(t) {
    se(t, pe), c.unsignedmessage_refreshTimeout(this.__wbg_ptr, t.__wbg_ptr)
  }
  expireAt() {
    return c.unsignedmessage_expireAt(this.__wbg_ptr) >>> 0
  }
  get hash() {
    let t, e;
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16);
      c.unsignedmessage_hash(i, this.__wbg_ptr);
      var s = R().getInt32(i + 4 * 0, !0),
        r = R().getInt32(i + 4 * 1, !0);
      return t = s, e = r, bt(s, r)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
    }
  }
  sign(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        l = H;
      c.unsignedmessage_sign(i, this.__wbg_ptr, o, l);
      var e = R().getInt32(i + 4 * 0, !0),
        s = R().getInt32(i + 4 * 1, !0),
        r = R().getInt32(i + 4 * 2, !0);
      if (r) throw W(s);
      return W(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  signFake() {
    try {
      const r = c.__wbindgen_add_to_stack_pointer(-16);
      c.unsignedmessage_signFake(r, this.__wbg_ptr);
      var t = R().getInt32(r + 4 * 0, !0),
        e = R().getInt32(r + 4 * 1, !0),
        s = R().getInt32(r + 4 * 2, !0);
      if (s) throw W(e);
      return W(t)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
async function Cc(n, t) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, t)
    } catch (s) {
      if (n.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
      else throw s
    }
    const e = await n.arrayBuffer();
    return await WebAssembly.instantiate(e, t)
  } else {
    const e = await WebAssembly.instantiate(n, t);
    return e instanceof WebAssembly.Instance ? {
      instance: e,
      module: n
    } : e
  }
}

function Cr() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbindgen_string_new = function(t, e) {
    const s = bt(t, e);
    return J(s)
  }, n.wbg.__wbg_length_ae22078168b726f5 = function(t) {
    return X(t).length
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return X(t) === void 0
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const s = X(e),
      r = typeof s == "number" ? s : void 0;
    R().setFloat64(t + 8 * 1, wt(r) ? 0 : r, !0), R().setInt32(t + 4 * 0, !wt(r), !0)
  }, n.wbg.__wbindgen_is_null = function(t) {
    return X(t) === null
  }, n.wbg.__wbindgen_string_get = function(t, e) {
    const s = X(e),
      r = typeof s == "string" ? s : void 0;
    var i = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    R().setInt32(t + 4 * 1, o, !0), R().setInt32(t + 4 * 0, i, !0)
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = X(t);
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof X(t) == "string"
  }, n.wbg.__wbg_new_796382978dfd4fb0 = function(t, e) {
    const s = new Error(bt(t, e));
    return J(s)
  }, n.wbg.__wbg_new_525245e2b9901204 = function() {
    const t = new Object;
    return J(t)
  }, n.wbg.__wbg_new_a220cf903aa02ca2 = function() {
    const t = new Array;
    return J(t)
  }, n.wbg.__wbg_push_37c89022f34c01ca = function(t, e) {
    return X(t).push(X(e))
  }, n.wbg.__wbg_genericcontract_new = function(t) {
    const e = Cn.__wrap(t);
    return J(e)
  }, n.wbg.__wbg_instanceof_Error_69bde193b0cc95e3 = function(t) {
    let e;
    try {
      e = X(t) instanceof Error
    } catch {
      e = !1
    }
    return e
  }, n.wbg.__wbg_name_ac78212e803c7941 = function(t) {
    const e = X(t).name;
    return J(e)
  }, n.wbg.__wbg_message_e18bae0a0e2c097a = function(t) {
    const e = X(t).message;
    return J(e)
  }, n.wbg.__wbg_toString_9d18e102ca933e68 = function(t) {
    const e = X(t).toString();
    return J(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    W(t)
  }, n.wbg.__wbindgen_number_new = function(t) {
    return J(t)
  }, n.wbg.__wbg_now_b7a162010a9e75b4 = function() {
    return Date.now()
  }, n.wbg.__wbg_onMessageSent_2c1ae08491ab9850 = function(t, e, s) {
    X(t).onMessageSent(W(e), W(s))
  }, n.wbg.__wbg_onMessageExpired_25cd422e9328ee8a = function(t, e) {
    X(t).onMessageExpired(W(e))
  }, n.wbg.__wbg_onStateChanged_3d54166d152ed7c7 = function(t, e) {
    X(t).onStateChanged(W(e))
  }, n.wbg.__wbg_onTransactionsFound_bf3f4ff44694cccd = function(t, e, s) {
    X(t).onTransactionsFound(W(e), W(s))
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = X(t);
    return J(e)
  }, n.wbg.__wbg_keys_7840ae453e408eab = function(t) {
    const e = Object.keys(X(t));
    return J(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = X(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbg_get_3baa728f9d58d3f6 = function(t, e) {
    const s = X(t)[e >>> 0];
    return J(s)
  }, n.wbg.__wbg_isLocal_c89a0f06d00eb44d = function(t) {
    return X(t).isLocal()
  }, n.wbg.__wbg_send_3a6112602f38b674 = function(t, e, s, r, i) {
    X(t).send(bt(e, s), tn.__wrap(r), i !== 0)
  }, n.wbg.__wbg_send_bd8357f2e836b323 = function(t, e, s, r, i) {
    X(t).send(bt(e, s), tn.__wrap(r), i !== 0)
  }, n.wbg.__wbg_send_1699c4cfc0bbee60 = function(t, e, s, r, i) {
    X(t).send(Bo(e, s), In.__wrap(r), i !== 0)
  }, n.wbg.__wbg_new_b85e72ed1bfd57f9 = function(t, e) {
    try {
      var s = {
          a: t,
          b: e
        },
        r = (o, l) => {
          const _ = s.a;
          s.a = 0;
          try {
            return Ic(_, s.b, o, l)
          } finally {
            s.a = _
          }
        };
      const i = new Promise(r);
      return J(i)
    } finally {
      s.a = s.b = 0
    }
  }, n.wbg.__wbg_info_2ffec7e533c4f23d = function() {
    return Et(function(t) {
      const e = X(t).info();
      return J(e)
    }, arguments)
  }, n.wbg.__wbg_sendMessage_8d09b0e227438eb5 = function() {
    return Et(function(t, e, s) {
      const r = X(t).sendMessage(bt(e, s));
      return J(r)
    }, arguments)
  }, n.wbg.__wbg_getContractState_a832ca559ffd8b92 = function() {
    return Et(function(t, e, s) {
      const r = X(t).getContractState(bt(e, s));
      return J(r)
    }, arguments)
  }, n.wbg.__wbg_getAccountsByCodeHash_c75072db79c08409 = function() {
    return Et(function(t, e, s, r, i, o) {
      let l;
      i !== 0 && (l = bt(i, o).slice(), c.__wbindgen_free(i, o * 1, 1));
      const _ = X(t).getAccountsByCodeHash(bt(e, s), r, l);
      return J(_)
    }, arguments)
  }, n.wbg.__wbg_getTransactions_eb09ca0ff4ac3072 = function() {
    return Et(function(t, e, s, r, i, o) {
      const l = X(t).getTransactions(bt(e, s), bt(r, i), o);
      return J(l)
    }, arguments)
  }, n.wbg.__wbg_getTransaction_c4bdcf967b80c793 = function() {
    return Et(function(t, e, s) {
      const r = X(t).getTransaction(bt(e, s));
      return J(r)
    }, arguments)
  }, n.wbg.__wbg_getDstTransaction_84b6163592386f1b = function() {
    return Et(function(t, e, s) {
      const r = X(t).getDstTransaction(bt(e, s));
      return J(r)
    }, arguments)
  }, n.wbg.__wbg_getLatestKeyBlock_934ef847dfb13892 = function() {
    return Et(function(t) {
      const e = X(t).getLatestKeyBlock();
      return J(e)
    }, arguments)
  }, n.wbg.__wbg_getCapabilities_b340b48cfe2a8c0d = function() {
    return Et(function(t, e, s) {
      const r = X(t).getCapabilities(bt(e, s));
      return J(r)
    }, arguments)
  }, n.wbg.__wbg_getBlockchainConfig_c208c7ae79b4d1c0 = function() {
    return Et(function(t, e, s) {
      const r = X(t).getBlockchainConfig(bt(e, s));
      return J(r)
    }, arguments)
  }, n.wbg.__wbindgen_memory = function() {
    const t = c.memory;
    return J(t)
  }, n.wbg.__wbg_buffer_b7b08af79b0b0974 = function(t) {
    const e = X(t).buffer;
    return J(e)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9 = function(t, e, s) {
    const r = new Uint8Array(X(t), e >>> 0, s >>> 0);
    return J(r)
  }, n.wbg.__wbg_randomFillSync_dc1e9a60c158336d = function() {
    return Et(function(t, e) {
      X(t).randomFillSync(W(e))
    }, arguments)
  }, n.wbg.__wbg_subarray_7c2e3576afe181d1 = function(t, e, s) {
    const r = X(t).subarray(e >>> 0, s >>> 0);
    return J(r)
  }, n.wbg.__wbg_getRandomValues_37fa2ca9e4e07fab = function() {
    return Et(function(t, e) {
      X(t).getRandomValues(X(e))
    }, arguments)
  }, n.wbg.__wbg_new_ea1883e1e5e86686 = function(t) {
    const e = new Uint8Array(X(t));
    return J(e)
  }, n.wbg.__wbg_set_d1e79e2388520f18 = function(t, e, s) {
    X(t).set(X(e), s >>> 0)
  }, n.wbg.__wbg_crypto_c48a774b022d20ac = function(t) {
    const e = X(t).crypto;
    return J(e)
  }, n.wbg.__wbg_process_298734cf255a885d = function(t) {
    const e = X(t).process;
    return J(e)
  }, n.wbg.__wbg_versions_e2e78e134e3e5d01 = function(t) {
    const e = X(t).versions;
    return J(e)
  }, n.wbg.__wbg_node_1cd7a5d853dbea79 = function(t) {
    const e = X(t).node;
    return J(e)
  }, n.wbg.__wbg_require_8f08ceecec0f4fee = function() {
    return Et(function() {
      const t = module.require;
      return J(t)
    }, arguments)
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof X(t) == "function"
  }, n.wbg.__wbg_msCrypto_bcb970640f50a1e8 = function(t) {
    const e = X(t).msCrypto;
    return J(e)
  }, n.wbg.__wbg_newwithlength_ec548f448387c968 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return J(e)
  }, n.wbg.__wbg_get_224d16597dbbfd96 = function() {
    return Et(function(t, e) {
      const s = Reflect.get(X(t), X(e));
      return J(s)
    }, arguments)
  }, n.wbg.__wbg_self_3093d5d1f7bcb682 = function() {
    return Et(function() {
      const t = self.self;
      return J(t)
    }, arguments)
  }, n.wbg.__wbg_window_3bcfc4d31bc012f8 = function() {
    return Et(function() {
      const t = window.window;
      return J(t)
    }, arguments)
  }, n.wbg.__wbg_globalThis_86b222e13bdf32ed = function() {
    return Et(function() {
      const t = globalThis.globalThis;
      return J(t)
    }, arguments)
  }, n.wbg.__wbg_global_e5a3fe56f8be9485 = function() {
    return Et(function() {
      const t = vi.global;
      return J(t)
    }, arguments)
  }, n.wbg.__wbg_newnoargs_76313bd6ff35d0f2 = function(t, e) {
    const s = new Function(bt(t, e));
    return J(s)
  }, n.wbg.__wbg_call_1084a111329e68ce = function() {
    return Et(function(t, e) {
      const s = X(t).call(X(e));
      return J(s)
    }, arguments)
  }, n.wbg.__wbg_isArray_8364a5371e9737d8 = function(t) {
    return Array.isArray(X(t))
  }, n.wbg.__wbg_call_89af060b4e1523f2 = function() {
    return Et(function(t, e, s) {
      const r = X(t).call(X(e), X(s));
      return J(r)
    }, arguments)
  }, n.wbg.__wbg_set_eacc7d73fefaafdf = function() {
    return Et(function(t, e, s) {
      return Reflect.set(X(t), X(e), X(s))
    }, arguments)
  }, n.wbg.__wbg_stringify_bbf45426c92a6bf5 = function() {
    return Et(function(t) {
      const e = JSON.stringify(X(t));
      return J(e)
    }, arguments)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(bt(t, e))
  }, n.wbg.__wbindgen_debug_string = function(t, e) {
    const s = as(X(e)),
      r = V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = H;
    R().setInt32(t + 4 * 1, i, !0), R().setInt32(t + 4 * 0, r, !0)
  }, n.wbg.__wbindgen_cb_drop = function(t) {
    const e = W(t).original;
    return e.cnt-- == 1 ? (e.a = 0, !0) : !1
  }, n.wbg.__wbg_then_95e6edc0f89b73b1 = function(t, e) {
    const s = X(t).then(X(e));
    return J(s)
  }, n.wbg.__wbg_queueMicrotask_12a30234db4045d3 = function(t) {
    queueMicrotask(X(t))
  }, n.wbg.__wbg_then_876bb3c633745cc6 = function(t, e, s) {
    const r = X(t).then(X(e), X(s));
    return J(r)
  }, n.wbg.__wbg_queueMicrotask_48421b3cc9052b68 = function(t) {
    const e = X(t).queueMicrotask;
    return J(e)
  }, n.wbg.__wbg_resolve_570458cb99d56a43 = function(t) {
    const e = Promise.resolve(X(t));
    return J(e)
  }, n.wbg.__wbindgen_closure_wrapper5481 = function(t, e, s) {
    const r = jo(t, e, 981, $o);
    return J(r)
  }, n
}

function Tr(n, t) {
  return c = n.exports, Er.__wbindgen_wasm_module = t, Ie = null, He = null, c
}

function Tc(n) {
  if (c !== void 0) return c;
  typeof n < "u" && Object.getPrototypeOf(n) === Object.prototype ? {
    module: n
  } = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead");
  const t = Cr();
  n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n));
  const e = new WebAssembly.Instance(n, t);
  return Tr(e, n)
}
async function Er(n) {
  if (c !== void 0) return c;
  typeof n < "u" && Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead"), typeof n > "u" && (n = new URL("" + new URL("nekoton_wasm_bg.CMYqFJ-k.wasm", import.meta.url).href, import.meta.url));
  const t = Cr();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: s
  } = await Cc(await n, t);
  return Tr(e, s)
}
const Ec = Object.freeze(Object.defineProperty({
    __proto__: null,
    BytesQuery: In,
    ClockWithOffset: pe,
    GenericContract: Cn,
    GqlConnection: Ar,
    JrpcConnection: kr,
    ProtoConnection: Sr,
    ProxyConnection: Ir,
    StringQuery: tn,
    Transport: Te,
    UnsignedMessage: Tn,
    checkAddress: zo,
    codeToTvc: rc,
    computeStorageFee: Qo,
    createExternalMessage: Sc,
    createExternalMessageWithoutSignature: kc,
    createRawExternalMessage: Ac,
    decodeEvent: _c,
    decodeInput: dc,
    decodeOutput: pc,
    decodeTransaction: fc,
    decodeTransactionEvents: hc,
    default: Er,
    ed25519_generateKeyPair: mc,
    ed25519_sign: wc,
    encodeInternalInput: lc,
    encodeInternalMessage: uc,
    executeLocal: Jo,
    extendSignature: yc,
    extractContractData: nc,
    extractPublicKey: sc,
    getBocHash: qo,
    getCodeSalt: cc,
    getDataHash: bc,
    getExpectedAddress: Xo,
    initSync: Tc,
    makeFullAccountBoc: Go,
    mergeTvc: ic,
    packIntoCell: tc,
    parseFullAccountBoc: Ho,
    parseFullAccountStateInit: Vo,
    repackAddress: Uo,
    runLocal: Wo,
    setCodeSalt: oc,
    splitTvc: ac,
    unpackContractFields: Yo,
    unpackFromCell: ec,
    unpackInitData: Zo,
    unpackTransactionTree: gc,
    verifySignature: vc
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Pc = lr(Ec);
var Zt = {};
Object.defineProperty(Zt, "__esModule", {
  value: !0
});
const Mc = {
  ensureNekotonLoaded: void 0,
  nekoton: void 0,
  fetch: void 0,
  fetchAgent: () => {},
  debugLog: void 0
};
Zt.default = Mc;
var Pr = {},
  Oc = en;
en.default = en;
en.stable = Dr;
en.stableStringify = Dr;
var wn = "[...]",
  Mr = "[Circular]",
  Me = [],
  Ee = [];

function Or() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

function en(n, t, e, s) {
  typeof s > "u" && (s = Or()), os(n, "", 0, [], void 0, 0, s);
  var r;
  try {
    Ee.length === 0 ? r = JSON.stringify(n, t, e) : r = JSON.stringify(n, Rr(t), e)
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; Me.length !== 0;) {
      var i = Me.pop();
      i.length === 4 ? Object.defineProperty(i[0], i[1], i[3]) : i[0][i[1]] = i[2]
    }
  }
  return r
}

function Ke(n, t, e, s) {
  var r = Object.getOwnPropertyDescriptor(s, e);
  r.get !== void 0 ? r.configurable ? (Object.defineProperty(s, e, {
    value: n
  }), Me.push([s, e, t, r])) : Ee.push([t, e, n]) : (s[e] = n, Me.push([s, e, t]))
}

function os(n, t, e, s, r, i, o) {
  i += 1;
  var l;
  if (typeof n == "object" && n !== null) {
    for (l = 0; l < s.length; l++)
      if (s[l] === n) {
        Ke(Mr, n, t, r);
        return
      } if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      Ke(wn, n, t, r);
      return
    }
    if (typeof o.edgesLimit < "u" && e + 1 > o.edgesLimit) {
      Ke(wn, n, t, r);
      return
    }
    if (s.push(n), Array.isArray(n))
      for (l = 0; l < n.length; l++) os(n[l], l, l, s, n, i, o);
    else {
      var _ = Object.keys(n);
      for (l = 0; l < _.length; l++) {
        var f = _[l];
        os(n[f], f, l, s, n, i, o)
      }
    }
    s.pop()
  }
}

function Dc(n, t) {
  return n < t ? -1 : n > t ? 1 : 0
}

function Dr(n, t, e, s) {
  typeof s > "u" && (s = Or());
  var r = cs(n, "", 0, [], void 0, 0, s) || n,
    i;
  try {
    Ee.length === 0 ? i = JSON.stringify(r, t, e) : i = JSON.stringify(r, Rr(t), e)
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; Me.length !== 0;) {
      var o = Me.pop();
      o.length === 4 ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2]
    }
  }
  return i
}

function cs(n, t, e, s, r, i, o) {
  i += 1;
  var l;
  if (typeof n == "object" && n !== null) {
    for (l = 0; l < s.length; l++)
      if (s[l] === n) {
        Ke(Mr, n, t, r);
        return
      } try {
      if (typeof n.toJSON == "function") return
    } catch {
      return
    }
    if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      Ke(wn, n, t, r);
      return
    }
    if (typeof o.edgesLimit < "u" && e + 1 > o.edgesLimit) {
      Ke(wn, n, t, r);
      return
    }
    if (s.push(n), Array.isArray(n))
      for (l = 0; l < n.length; l++) cs(n[l], l, l, s, n, i, o);
    else {
      var _ = {},
        f = Object.keys(n).sort(Dc);
      for (l = 0; l < f.length; l++) {
        var p = f[l];
        cs(n[p], p, l, s, n, i, o), _[p] = n[p]
      }
      if (typeof r < "u") Me.push([r, t, n]), r[t] = _;
      else return _
    }
    s.pop()
  }
}

function Rr(n) {
  return n = typeof n < "u" ? n : function(t, e) {
      return e
    },
    function(t, e) {
      if (Ee.length > 0)
        for (var s = 0; s < Ee.length; s++) {
          var r = Ee[s];
          if (r[1] === t && r[0] === e) {
            e = r[2], Ee.splice(s, 1);
            break
          }
        }
      return n.call(this, t, e)
    }
}
var Ht = {};
Object.defineProperty(Ht, "__esModule", {
  value: !0
});
Ht.getUniqueId = Ht.convertVersionToInt32 = Ht.convertToAddressObject = Ht.SafeEventEmitter = void 0;
const Ws = ve,
  Rc = Ai();

function Gs(n, t, e) {
  try {
    Reflect.apply(n, t, e)
  } catch (s) {
    setTimeout(() => {
      throw s
    })
  }
}

function Lc(n) {
  const t = n.length,
    e = new Array(t);
  for (let s = 0; s < t; s += 1) e[s] = n[s];
  return e
}
class Fc extends Rc.EventEmitter {
  emit(t, ...e) {
    let s = t === "error";
    const r = this._events;
    if (r !== void 0) s = s && r.error === void 0;
    else if (!s) return !1;
    if (s) {
      let o;
      if (e.length > 0 && ([o] = e), o instanceof Error) throw o;
      const l = new Error(`Unhandled error.${o?` (${o.message})`:""}`);
      throw l.context = o, l
    }
    const i = r[t];
    if (i === void 0) return !1;
    if (typeof i == "function") Gs(i, this, e);
    else {
      const o = i.length,
        l = Lc(i);
      for (let _ = 0; _ < o; _ += 1) Gs(l[_], this, e)
    }
    return !0
  }
}
Ht.SafeEventEmitter = Fc;

function Nc(n) {
  if (typeof n == "object" && !(0, Ws.isAddressObject)(n)) throw new Error("Invalid address object");
  return typeof n == "object" ? n : new Ws.Address(n)
}
Ht.convertToAddressObject = Nc;
const Kc = n => {
  const t = n.split(".");
  if (t.length !== 3) throw new Error("Received invalid version string");
  t.forEach(r => {
    if (~~r > 999) throw new Error(`Version string invalid, ${r} is too large`)
  });
  let e = 1e6,
    s = 0;
  for (let r = 0; r < 3; r++) s += ~~t[r] * e, e /= 1e3;
  return s
};
Ht.convertVersionToInt32 = Kc;
const Lr = 4294967295;
let Hn = Math.floor(Math.random() * Lr);

function jc() {
  return Hn = (Hn + 1) % Lr, Hn
}
Ht.getUniqueId = jc;
var gn = {},
  ye = {};
Object.defineProperty(ye, "__esModule", {
  value: !0
});
ye.Mutex = ye.Semaphore = void 0;

function bn(n) {
  if (typeof n != "function") throw new TypeError(n + " is not a function");
  return n
}

function Hs(n) {
  const t = document.createTextNode("");
  let e, s, r = 0,
    i = 0;
  return new n(function() {
      let o;
      if (e) s && (e = s.slice(i).concat(e));
      else {
        if (!s) return;
        e = s
      }
      if (s = e, e = null, i = 0, typeof s == "function") {
        o = s, s = null, o();
        return
      }
      for (t.data = r = ++r % 2; i < s.length;) o = s[i], i++, i === s.length && (s = null), o()
    }).observe(t, {
      characterData: !0
    }),
    function(o) {
      if (bn(o), e) {
        typeof e == "function" ? e = [e, o] : e.push(o);
        return
      }
      e = o, t.data = r = ++r % 2
    }
}
const $c = function() {
  if (typeof queueMicrotask == "function") return function(n) {
    queueMicrotask(bn(n))
  };
  if (typeof document == "object" && document) {
    if (typeof MutationObserver == "function") return Hs(MutationObserver);
    if (typeof window.WebKitMutationObserver == "function") return Hs(window.WebKitMutationObserver)
  }
  if (typeof setImmediate == "function") return function(n) {
    setImmediate(bn(n))
  };
  if (typeof setTimeout == "function" || typeof setTimeout == "object") return function(n) {
    setTimeout(bn(n), 0)
  };
  throw new Error("No `nextTick` implementation found")
}();
class Fr {
  constructor(t) {
    this.tasks = [], this.count = t
  }
  sched() {
    if (this.count > 0 && this.tasks.length > 0) {
      this.count--;
      let t = this.tasks.shift();
      if (t === void 0) throw "Unexpected undefined value in tasks list";
      t()
    }
  }
  acquire() {
    return new Promise((t, e) => {
      const s = () => {
        let r = !1;
        t(() => {
          r || (r = !0, this.count++, this.sched())
        })
      };
      this.tasks.push(s), $c(this.sched.bind(this))
    })
  }
  use(t) {
    return this.acquire().then(e => t().then(s => (e(), s)).catch(s => {
      throw e(), s
    }))
  }
}
ye.Semaphore = Fr;
class Bc extends Fr {
  constructor() {
    super(1)
  }
}
ye.Mutex = Bc;
var En = {},
  xc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(En, "__esModule", {
  value: !0
});
En.GqlSocket = void 0;
const ls = xc(Zt);
class nn {
  async connect(t) {
    class e {
      constructor(r) {
        this.nextLatencyDetectionTime = 0, this.local = r.local === !0, this.maxLatency = r.maxLatency || 6e4, this.latencyDetectionInterval = r.latencyDetectionInterval || 6e4, this.endpoints = r.endpoints.map(nn.expandAddress), this.endpoints.length == 1 && (this.currentEndpoint = this.endpoints[0], this.nextLatencyDetectionTime = Number.MAX_VALUE)
      }
      isLocal() {
        return this.local
      }
      send(r, i, o) {
        (async () => {
          const l = Date.now();
          try {
            let _;
            this.currentEndpoint != null && l < this.nextLatencyDetectionTime ? _ = this.currentEndpoint : this.resolutionPromise != null ? (_ = await this.resolutionPromise, delete this.resolutionPromise) : (delete this.currentEndpoint, this.resolutionPromise = this._selectQueryingEndpoint().then(p => (this.currentEndpoint = p, this.nextLatencyDetectionTime = Date.now() + this.latencyDetectionInterval, p)), _ = await this.resolutionPromise, delete this.resolutionPromise);
            const f = await fetch(_.url, {
              method: "post",
              headers: zc,
              body: r,
              agent: _.agent
            }).then(p => p.text());
            i.onReceive(f)
          } catch (_) {
            i.onError(_)
          }
        })()
      }
      async _selectQueryingEndpoint() {
        const r = this.maxLatency,
          i = this.endpoints.length;
        for (let o = 0; o < 5; ++o) {
          let l;
          const _ = new Promise((T, b) => {
            l = {
              resolve: S => T(S),
              reject: () => b(void 0)
            }
          });
          let f = 0,
            p;
          for (const T of this.endpoints) nn.checkLatency(T).then(b => {
            if (++f, b !== void 0 && b <= r) return l.resolve(T);
            (p === void 0 || p.latency === void 0 || b !== void 0 && b < p.latency) && (p = {
              endpoint: T,
              latency: b
            }), f >= i && ((p == null ? void 0 : p.latency) !== void 0 ? l.resolve(p.endpoint) : l.reject())
          });
          try {
            return await _
          } catch {
            let b;
            const S = new Promise(A => {
              b = () => A()
            });
            setTimeout(() => b(), Math.min(100 * o, 5e3)), await S
          }
        }
        throw new Error("Not available endpoint found")
      }
    }
    return new ls.default.nekoton.GqlConnection(new e(t))
  }
  static async checkLatency(t) {
    const e = await fetch(`${t.url}?query=%7Binfo%7Bversion%20time%20latency%7D%7D`, {
      method: "get",
      agent: t.agent
    }).then(o => o.json()).catch(o => {
      ls.default.debugLog(o)
    });
    if (typeof e != "object" || e == null) return;
    const s = e.data;
    if (typeof s != "object" || s == null) return;
    const r = s.info;
    if (typeof r != "object" || r == null) return;
    const i = r.latency;
    if (typeof i == "number") return i
  }
}
En.GqlSocket = nn;
nn.expandAddress = n => {
  const t = n.lastIndexOf("/");
  n = t < 0 ? n : n.substring(0, t);
  let e;
  return n.startsWith("http://") || n.startsWith("https://") ? e = `${n}/graphql` : ["localhost", "127.0.0.1"].indexOf(n) >= 0 ? e = `http://${n}/graphql` : e = `https://${n}/graphql`, {
    url: e,
    agent: ls.default.fetchAgent(e)
  }
};
const zc = {
  "Content-Type": "application/json"
};
var Pn = {},
  Uc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.JrpcSocket = void 0;
const Vn = Uc(Zt);
class Wc {
  async connect(t) {
    class e {
      constructor(r) {
        this.endpoint = r.endpoint, this.endpointAgent = Vn.default.fetchAgent(this.endpoint), this.alternativeEndpoint = r.alternativeEndpoint != null ? r.alternativeEndpoint : r.endpoint, this.alternativeEndpointAgent = Vn.default.fetchAgent(this.alternativeEndpoint)
      }
      send(r, i, o) {
        (async () => {
          try {
            const l = o ? this.endpoint : this.alternativeEndpoint,
              _ = o ? this.endpointAgent : this.alternativeEndpointAgent,
              f = await fetch(l, {
                method: "post",
                headers: Gc,
                body: r,
                agent: _
              }).then(p => p.text());
            i.onReceive(f)
          } catch (l) {
            i.onError(l)
          }
        })()
      }
    }
    return new Vn.default.nekoton.JrpcConnection(new e(t))
  }
}
Pn.JrpcSocket = Wc;
const Gc = {
  "Content-Type": "application/json"
};
var Mn = {},
  Hc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Mn, "__esModule", {
  value: !0
});
Mn.ProtoSocket = void 0;
const Vs = Hc(Zt);
class Vc {
  async connect(t) {
    class e {
      constructor(r) {
        this.endpoint = r.endpoint, this.endpointAgent = Vs.default.fetchAgent(this.endpoint)
      }
      send(r, i, o) {
        (async () => {
          try {
            const l = await fetch(this.endpoint, {
              method: "post",
              headers: Qc,
              body: new Uint8Array(r),
              agent: this.endpointAgent
            }).then(_ => _.arrayBuffer());
            i.onReceive(new Uint8Array(l))
          } catch (l) {
            i.onError(l)
          }
        })()
      }
    }
    return new Vs.default.nekoton.ProtoConnection(new e(t))
  }
}
Mn.ProtoSocket = Vc;
const Qc = {
  "Content-Type": "application/x-protobuf"
};
(function(n) {
  var t = tt && tt.__importDefault || function(h) {
    return h && h.__esModule ? h : {
      default: h
    }
  };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.ConnectionController = n.createConnectionController = n.ConnectionError = n.checkConnection = n.NETWORK_PRESETS = void 0;
  const e = ye,
    s = t(Zt),
    r = En,
    i = Pn,
    o = Mn;
  n.NETWORK_PRESETS = {
    mainnetJrpc: {
      id: 1,
      type: "jrpc",
      data: {
        endpoint: "https://jrpc.everwallet.net/rpc"
      }
    },
    fld: {
      id: 10,
      type: "graphql",
      data: {
        endpoints: ["gql.custler.net"],
        local: !1
      }
    },
    local: {
      id: 31337,
      type: "graphql",
      data: {
        endpoints: ["127.0.0.1"],
        local: !0
      }
    }
  };
  const l = h => {
    switch (h) {
      case 1:
        return "mainnet";
      case 2:
        return "testnet";
      case 10:
        return "fld";
      case 31337:
        return "localnet";
      default:
        return `network${h}`
    }
  };

  function _(h) {
    if (typeof h == "string") {
      const w = n.NETWORK_PRESETS[h];
      if (w == null) throw new Error(`Target preset id not found: ${h}`);
      return w
    } else return h
  }
  async function f(h) {
    const w = _(h),
      $ = new s.default.nekoton.ClockWithOffset;
    try {
      const y = new b($);
      await y._connect(w), y._initializedTransport != null && S(y._initializedTransport)
    } catch (y) {
      throw new p(w, y.toString())
    } finally {
      $.free()
    }
  }
  n.checkConnection = f;
  class p extends Error {
    constructor(w, $) {
      super($), this.params = w
    }
  }
  n.ConnectionError = p;
  async function T(h, w, $ = !1) {
    const y = _(w);
    for (;;) try {
      const v = new b(h);
      return await v.startSwitchingNetwork(y).then(m => m.switch()), s.default.debugLog(`Successfully connected to ${y.group}`), v
    } catch (v) {
      if ($) console.error("Connection failed:", v), await new Promise(m => {
        setTimeout(() => m(), 5e3)
      }), s.default.debugLog("Restarting connection process");
      else throw v
    }
  }
  n.createConnectionController = T;
  class b {
    constructor(w) {
      this._networkMutex = new e.Mutex, this._acquiredTransportCounter = 0, this._clock = w
    }
    async acquire() {
      return A(this._initializedTransport), await this._acquireTransport(), {
        transport: this._initializedTransport,
        release: () => this._releaseTransport()
      }
    }
    async use(w) {
      return A(this._initializedTransport), await this._acquireTransport(), w(this._initializedTransport).finally(() => {
        this._releaseTransport()
      })
    }
    async startSwitchingNetwork(w) {
      var $;
      class y {
        constructor(F, j, B) {
          this._controller = F, this._release = j, this._params = B
        }
        async switch () {
          await this._controller._connect(this._params).finally(() => this._release())
        }
      }($ = this._cancelTestTransport) === null || $ === void 0 || $.call(this);
      const v = await this._networkMutex.acquire();
      return new y(this, v, w)
    }
    get initializedTransport() {
      return this._initializedTransport
    }
    async _connect(w) {
      this._initializedTransport != null && S(this._initializedTransport), this._initializedTransport = void 0;
      let $;
      (function(v) {
        v[v.DONE = 0] = "DONE", v[v.CANCELLED = 1] = "CANCELLED"
      })($ || ($ = {}));
      const y = async ({
        data: {
          transport: v
        }
      }, m) => new Promise((F, j) => {
        this._cancelTestTransport = () => F($.CANCELLED), m ? v.getAccountsByCodeHash("4e92716de61d456e58f16e4e867e3e93a7548321eace86301b51c8b80ca6239b", 1).then(() => F($.DONE)).catch(B => j(B)) : v.getFullContractState("-1:0000000000000000000000000000000000000000000000000000000000000000").then(() => F($.DONE)).catch(B => j(B)), setTimeout(() => j(new Error("Connection timeout")), 1e4)
      }).finally(() => this._cancelTestTransport = void 0);
      try {
        const v = w.group != null ? w.group : l(w.id),
          {
            local: m,
            transportData: F
          } = await (async () => {
            switch (w.type) {
              case "graphql": {
                const j = new r.GqlSocket,
                  B = await j.connect(w.data),
                  u = s.default.nekoton.Transport.fromGqlConnection(B, this._clock),
                  d = {
                    id: w.id,
                    group: v,
                    type: "graphql",
                    data: {
                      socket: j,
                      connection: B,
                      transport: u
                    }
                  };
                return {
                  local: w.data.local === !0,
                  transportData: d
                }
              }
              case "jrpc": {
                const j = new i.JrpcSocket,
                  B = await j.connect(w.data),
                  u = s.default.nekoton.Transport.fromJrpcConnection(B, this._clock);
                return {
                  local: !1,
                  transportData: {
                    id: w.id,
                    group: v,
                    type: "jrpc",
                    data: {
                      socket: j,
                      connection: B,
                      transport: u
                    }
                  }
                }
              }
              case "proto": {
                const j = new o.ProtoSocket,
                  B = await j.connect(w.data),
                  u = s.default.nekoton.Transport.fromProtoConnection(B, this._clock);
                return {
                  local: !1,
                  transportData: {
                    id: w.id,
                    group: v,
                    type: "proto",
                    data: {
                      socket: j,
                      connection: B,
                      transport: u
                    }
                  }
                }
              }
              case "proxy": {
                const j = w.data.connectionFactory.create(this._clock);
                return {
                  local: !0,
                  transportData: {
                    id: w.id,
                    group: v,
                    type: "proxy",
                    data: {
                      connection: j,
                      transport: s.default.nekoton.Transport.fromProxyConnection(j, this._clock)
                    }
                  }
                }
              }
            }
          })();
        try {
          if (await y(F, m) == $.CANCELLED) {
            S(F);
            return
          }
        } catch (j) {
          throw S(F), j
        }
        this._initializedTransport = F
      } catch (v) {
        throw new Error(`Failed to create connection: ${v.toString()}`)
      }
    }
    async _acquireTransport() {
      s.default.debugLog("_acquireTransport"), this._acquiredTransportCounter > 0 ? (s.default.debugLog("_acquireTransport -> increase"), this._acquiredTransportCounter += 1) : (this._acquiredTransportCounter = 1, this._release != null ? console.warn("mutex is already acquired") : (s.default.debugLog("_acquireTransport -> await"), this._release = await this._networkMutex.acquire(), s.default.debugLog("_acquireTransport -> create")))
    }
    _releaseTransport() {
      var w;
      s.default.debugLog("_releaseTransport"), this._acquiredTransportCounter -= 1, this._acquiredTransportCounter <= 0 && (s.default.debugLog("_releaseTransport -> release"), (w = this._release) === null || w === void 0 || w.call(this), this._release = void 0)
    }
  }
  n.ConnectionController = b;

  function S(h) {
    h.data.transport.free(), h.data.connection.free()
  }

  function A(h) {
    if (h == null) throw new Error("Connection is not initialized")
  }
})(gn);
var On = {},
  Dn = {},
  Jc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Dn, "__esModule", {
  value: !0
});
Dn.ContractSubscription = void 0;
const Xc = ye,
  Ut = Jc(Zt);
class ms {
  static async subscribe(t, e, s) {
    const {
      transport: {
        data: {
          connection: r,
          transport: i
        }
      },
      release: o
    } = await t.acquire();
    try {
      const l = await i.subscribeToGenericContract(e, s);
      if (l == null) throw new Error(`Failed to subscribe to contract: ${e}`);
      return new ms(r, o, e, l)
    } catch (l) {
      throw o(), l
    }
  }
  constructor(t, e, s, r) {
    this._contractMutex = new Xc.Mutex, this._pollingInterval = qc, this._isRunning = !1, this._skipIteration = !1, this._connection = t, this._address = s, this._contract = r, this._releaseTransport = e, this._currentPollingMethod = r.pollingMethod
  }
  setPollingInterval(t) {
    this._pollingInterval = t
  }
  async start() {
    if (this._releaseTransport == null) throw new Error("Contract subscription must not be started after being closed");
    this._loopPromise && (Ut.default.debugLog("ContractSubscription -> awaiting loop promise"), await this._loopPromise), Ut.default.debugLog("ContractSubscription -> loop started"), this._loopPromise = (async () => {
      const t = !(this._connection instanceof Ut.default.nekoton.GqlConnection),
        e = this._connection instanceof Ut.default.nekoton.ProxyConnection;
      this._isRunning = !0;
      let s = this._currentPollingMethod;
      for (; this._isRunning;) {
        this._skipIteration = !1;
        const r = s != this._currentPollingMethod;
        if (s = this._currentPollingMethod, t || this._currentPollingMethod == "manual") {
          this._currentBlockId = void 0, Ut.default.debugLog("ContractSubscription -> manual -> waiting begins");
          const i = this._currentPollingMethod == "manual" || e ? this._pollingInterval : Zc;
          if (await new Promise(o => {
              const l = setTimeout(() => {
                this._refreshTimer = void 0, o()
              }, i);
              this._refreshTimer = [l, o]
            }), Ut.default.debugLog("ContractSubscription -> manual -> waiting ends"), this._skipIteration) continue;
          if (!this._isRunning) break;
          Ut.default.debugLog("ContractSubscription -> manual -> refreshing begins");
          try {
            this._currentPollingMethod = await this._contractMutex.use(async () => (await this._contract.refresh(), this._contract.pollingMethod))
          } catch (o) {
            Ut.default.debugLog(`Error during account refresh (${this._address})`, o)
          }
          Ut.default.debugLog("ContractSubscription -> manual -> refreshing ends")
        } else {
          const i = this._connection;
          Ut.default.debugLog("ContractSubscription -> reliable start"), r && this._suggestedBlockId != null && (this._currentBlockId = this._suggestedBlockId), this._suggestedBlockId = void 0;
          let o;
          if (this._currentBlockId == null) {
            Ut.default.debugLog("ContractSubscription -> starting reliable connection with unknown block");
            try {
              const l = await i.getLatestBlock(this._address);
              this._currentBlockId = l.id, o = this._currentBlockId
            } catch (l) {
              Ut.default.debugLog(`Failed to get latest block for ${this._address}`, l);
              continue
            }
          } else try {
            o = await i.waitForNextBlock(this._currentBlockId, this._address, Yc)
          } catch {
            Ut.default.debugLog(`Failed to wait for next block for ${this._address}`);
            continue
          }
          try {
            this._currentPollingMethod = await this._contractMutex.use(async () => (await this._contract.handleBlock(o), this._contract.pollingMethod)), this._currentBlockId = o
          } catch (l) {
            Ut.default.debugLog(`Failed to handle block for ${this._address}`, l)
          }
        }
      }
      Ut.default.debugLog("ContractSubscription -> loop finished")
    })()
  }
  skipRefreshTimer(t) {
    var e, s;
    t != null && (this._currentPollingMethod = t, this._skipIteration = !0), clearTimeout((e = this._refreshTimer) === null || e === void 0 ? void 0 : e[0]), (s = this._refreshTimer) === null || s === void 0 || s[1](), this._refreshTimer = void 0
  }
  async pause() {
    this._isRunning && (this._isRunning = !1, this.skipRefreshTimer(), await this._loopPromise, this._loopPromise = void 0, this._currentPollingMethod = await this._contractMutex.use(async () => this._contract.pollingMethod), this._currentBlockId = void 0, this._suggestedBlockId = void 0)
  }
  async stop() {
    var t;
    await this.pause(), this._contract.free(), (t = this._releaseTransport) === null || t === void 0 || t.call(this), this._releaseTransport = void 0
  }
  async prepareReliablePolling() {
    try {
      this._connection instanceof Ut.default.nekoton.GqlConnection && (this._suggestedBlockId = (await this._connection.getLatestBlock(this._address)).id)
    } catch (t) {
      throw new Error(`Failed to prepare reliable polling: ${t.toString()}`)
    }
  }
  async use(t) {
    const e = await this._contractMutex.acquire();
    return t(this._contract).then(s => (e(), s)).catch(s => {
      throw e(), s
    })
  }
}
Dn.ContractSubscription = ms;
const Yc = 60,
  Zc = 2e3,
  qc = 6e4;
Object.defineProperty(On, "__esModule", {
  value: !0
});
On.SubscriptionController = void 0;
const tl = ye,
  Qs = Ht,
  el = Dn,
  nl = 1e4;
class sl {
  constructor(t, e) {
    this._subscriptions = new Map, this._subscriptionsMutex = new tl.Mutex, this._sendMessageRequests = new Map, this._subscriptionStates = new Map, this._pollingInterval = nl, this._connectionController = t, this._notify = e
  }
  setPollingInterval(t) {
    this._pollingInterval = t
  }
  async sendMessageLocally(t, e, s) {
    const r = (0, Qs.getUniqueId)();
    try {
      await this.subscribeToContract(t, {
        state: !0
      }, r);
      const i = this._subscriptions.get(t);
      if (i == null) throw new Error("Failed to subscribe to contract");
      return await i.use(o => o.sendMessageLocally(e, s))
    } finally {
      this.unsubscribeFromContract(t, r).catch(console.error)
    }
  }
  sendMessage(t, e) {
    const s = e.hash;
    let r = this._sendMessageRequests.get(t);
    if (r == null) r = new Map, this._sendMessageRequests.set(t, r);
    else if (r.has(s)) throw new Error(`Trying to send a duplicate message with id '${s}'`);
    const i = (0, Qs.getUniqueId)();
    return new Promise((o, l) => {
      r.set(s, {
        resolve: o,
        reject: l
      }), this.subscribeToContract(t, {
        state: !0
      }, i).then(async () => {
        const _ = this._subscriptions.get(t);
        if (_ == null) throw new Error("Failed to subscribe to contract");
        await _.prepareReliablePolling(), await _.use(async f => {
          await f.sendMessage(e), _.skipRefreshTimer(f.pollingMethod)
        })
      }).catch(_ => this._rejectMessageRequest(t, s, _)).finally(() => {
        this.unsubscribeFromContract(t, i).catch(console.error)
      })
    })
  }
  async subscribeToContract(t, e, s) {
    return this._subscriptionsMutex.use(async () => {
      const r = p => {
          const T = {
            ...p
          };
          return Object.keys(T).map(b => {
            if (b !== "state" && b !== "transactions") throw new Error(`Unknown subscription topic: ${b}`);
            const S = e[b];
            if (typeof S == "boolean") T[b] = S;
            else {
              if (S == null) return;
              throw new Error(`Unknown subscription topic value ${b}: ${S}`)
            }
          }), T
        },
        i = this._subscriptionStates.get(t) || rl();
      let o;
      if (s == null) o = r(i.client);
      else {
        const p = i.internal.get(s);
        p != null ? (o = r(p), Js(o) && i.internal.delete(s)) : o = r({
          state: !1,
          transactions: !1
        })
      }
      const l = {
        ...o
      };
      for (const p of i.internal.values()) l.state || (l.state = p.state), l.transactions || (l.transactions = p.transactions);
      if (Js(l)) return this._subscriptionStates.delete(t), await this._tryUnsubscribe(t), {
        ...l
      };
      let _ = this._subscriptions.get(t);
      const f = _ == null;
      return _ == null && (_ = await this._createSubscription(t)), s == null ? i.client = o : i.internal.set(s, o), this._subscriptionStates.set(t, i), f && await _.start(), {
        ...o
      }
    })
  }
  async unsubscribeFromContract(t, e) {
    await this.subscribeToContract(t, {
      state: !1,
      transactions: !1
    }, e)
  }
  async unsubscribeFromAllContracts(t) {
    for (const e of this._subscriptions.keys()) await this.unsubscribeFromContract(e, t)
  }
  get subscriptionStates() {
    const t = {};
    for (const [e, s] of this._subscriptionStates.entries()) t[e] = {
      ...s.client
    };
    return t
  }
  async _createSubscription(t) {
    class e {
      constructor(o, l) {
        this._enabled = !1, this._address = o, this._controller = l
      }
      enableNotifications() {
        this._enabled = !0
      }
      onMessageExpired(o) {
        this._controller._resolveMessageRequest(this._address, o.messageHash, void 0).catch(console.error)
      }
      onMessageSent(o, l) {
        this._controller._resolveMessageRequest(this._address, o.messageHash, l).catch(console.error)
      }
      onStateChanged(o) {
        this._enabled && this._controller._notifyStateChanged(this._address, o)
      }
      onTransactionsFound(o, l) {
        this._enabled && this._controller._notifyTransactionsFound(this._address, o, l)
      }
    }
    const s = new e(t, this),
      r = await el.ContractSubscription.subscribe(this._connectionController, t, s);
    return r.setPollingInterval(this._pollingInterval), s.enableNotifications(), this._subscriptions.set(t, r), r
  }
  async _tryUnsubscribe(t) {
    const e = this._subscriptionStates.get(t),
      s = this._sendMessageRequests.get(t);
    if (e == null && ((s == null ? void 0 : s.size) || 0) == 0) {
      const r = this._subscriptions.get(t);
      this._subscriptions.delete(t), await (r == null ? void 0 : r.stop())
    }
  }
  async _rejectMessageRequest(t, e, s) {
    this._deleteMessageRequestAndGetCallback(t, e).reject(s), await this._subscriptionsMutex.use(async () => this._tryUnsubscribe(t))
  }
  async _resolveMessageRequest(t, e, s) {
    this._deleteMessageRequestAndGetCallback(t, e).resolve(s), await this._subscriptionsMutex.use(async () => this._tryUnsubscribe(t))
  }
  _notifyStateChanged(t, e) {
    const s = this._subscriptionStates.get(t);
    s != null && s.client.state && this._notify("contractStateChanged", {
      address: t,
      state: e
    })
  }
  _notifyTransactionsFound(t, e, s) {
    const r = this._subscriptionStates.get(t);
    r != null && r.client.transactions && this._notify("transactionsFound", {
      address: t,
      transactions: e,
      info: s
    })
  }
  _deleteMessageRequestAndGetCallback(t, e) {
    var s;
    const r = (s = this._sendMessageRequests.get(t)) === null || s === void 0 ? void 0 : s.get(e);
    if (!r) throw new Error(`SendMessage request with id '${e}' not found`);
    return this._deleteMessageRequest(t, e), r
  }
  _deleteMessageRequest(t, e) {
    const s = this._sendMessageRequests.get(t);
    s && (s.delete(e), s.size == 0 && this._sendMessageRequests.delete(t))
  }
}
On.SubscriptionController = sl;
const rl = () => ({
    internal: new Map,
    client: {
      state: !1,
      transactions: !1
    }
  }),
  Js = n => !n.state && !n.transactions;
var us = {},
  Rn = {};
Object.defineProperty(Rn, "__esModule", {
  value: !0
});
Rn.GiverAccount = void 0;
const il = Ht;
class sn {
  static fromVersion(t) {
    let e;
    switch (t) {
      case 2:
        e = "0:ece57bcc6c530283becbbd8a3b24d3c5987cdddc3c8b7b33be6e4a6312490415";
        break;
      case 3:
        e = "0:78fbd6980c10cf41401b32e9b51810415e7578b52403af80dae68ddf99714498";
        break;
      default:
        throw new Error("Unknown version")
    }
    return new sn({
      address: e,
      publicKey: sn.GIVER_KEY_PAIR.publicKey
    })
  }
  constructor(t) {
    this.address = (0, il.convertToAddressObject)(t.address), this.publicKey = t.publicKey
  }
  async fetchPublicKey(t) {
    return this.publicKey
  }
  async prepareMessage(t, e) {
    if (t.payload != null) throw new Error("Giver contract does not support payload in an internal message");
    if (t.stateInit != null) throw new Error("Giver contract does not support state init in an internal message");
    const s = await e.getSigner(this.publicKey);
    return await e.createExternalMessage({
      address: this.address,
      signer: s,
      timeout: t.timeout,
      abi: al,
      method: "sendTransaction",
      params: {
        dest: t.recipient,
        value: t.amount,
        bounce: t.bounce
      },
      signatureId: t.signatureId
    })
  }
}
Rn.GiverAccount = sn;
sn.GIVER_KEY_PAIR = {
  secretKey: "172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3",
  publicKey: "2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16"
};
const al = `{
  "ABI version": 2,
  "header": ["time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"}
    ],
    "outputs": []
  }],
  "events": []
}`;
var Be = {};
Object.defineProperty(Be, "__esModule", {
  value: !0
});
Be.MsigAccount = Be.GenericAccount = void 0;
const ol = Ht;
class Nr {
  constructor(t) {
    this.address = (0, ol.convertToAddressObject)(t.address), this.abi = typeof t.abi == "string" ? t.abi : JSON.stringify(t.abi), this.prepareMessageImpl = t.prepareMessage, this.publicKey = t.publicKey
  }
  async fetchPublicKey(t) {
    return this.publicKey != null ? this.publicKey : (this.publicKey = await t.fetchPublicKey(this.address), this.publicKey)
  }
  async prepareMessage(t, e) {
    const s = await this.fetchPublicKey(e),
      r = await e.getSigner(s),
      {
        method: i,
        params: o,
        stateInit: l
      } = await this.prepareMessageImpl(t, e);
    return e.createExternalMessage({
      address: this.address,
      signer: r,
      timeout: t.timeout,
      abi: this.abi,
      method: i,
      params: o,
      stateInit: l,
      signatureId: t.signatureId
    })
  }
}
Be.GenericAccount = Nr;
class cl extends Nr {
  constructor(t) {
    const e = t.type === "multisig2";
    super({
      address: t.address,
      publicKey: t.publicKey,
      abi: e ? ul : ll,
      prepareMessage: async (s, r) => {
        if (!e && s.stateInit != null) throw new Error("Old multisig contract does not support state init in an internal message");
        const i = s.payload ? r.encodeInternalInput(s.payload) : "";
        return e && s.stateInit != null ? {
          method: "submitTransaction",
          params: {
            dest: s.recipient,
            value: s.amount,
            bounce: s.bounce,
            allBalance: !1,
            payload: i,
            stateInit: s.stateInit
          }
        } : {
          method: "sendTransaction",
          params: {
            dest: s.recipient,
            value: s.amount,
            bounce: s.bounce,
            flags: 3,
            payload: i
          }
        }
      }
    })
  }
}
Be.MsigAccount = cl;
const ll = `{
  "ABI version": 2,
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"flags","type":"uint8"},
      {"name":"payload","type":"cell"}
    ],
    "outputs": []
  }],
  "events": []
}`,
  ul = `{
  "ABI version": 2,
  "version": "2.3",
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"flags","type":"uint8"},
      {"name":"payload","type":"cell"}
    ],
    "outputs": []
  }, {
    "name": "submitTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"allBalance","type":"bool"},
      {"name":"payload","type":"cell"},
      {"name":"stateInit","type":"optional(cell)"}
    ],
    "outputs": []
  }],
  "events": []
}`;
var Ln = {},
  dl = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  Qn = Math.ceil,
  ee = Math.floor,
  Jt = "[BigNumber Error] ",
  Xs = Jt + "Number primitive has more than 15 significant digits: ",
  ie = 1e14,
  it = 14,
  Jn = 9007199254740991,
  Xn = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  be = 1e7,
  Ft = 1e9;

function Kr(n) {
  var t, e, s, r = y.prototype = {
      constructor: y,
      toString: null,
      valueOf: null
    },
    i = new y(1),
    o = 20,
    l = 4,
    _ = -7,
    f = 21,
    p = -1e7,
    T = 1e7,
    b = !1,
    S = 1,
    A = 0,
    h = {
      prefix: "",
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ",",
      decimalSeparator: ".",
      fractionGroupSize: 0,
      fractionGroupSeparator: " ",
      suffix: ""
    },
    w = "0123456789abcdefghijklmnopqrstuvwxyz",
    $ = !0;

  function y(u, d) {
    var g, P, C, O, N, k, M, K, L = this;
    if (!(L instanceof y)) return new y(u, d);
    if (d == null) {
      if (u && u._isBigNumber === !0) {
        L.s = u.s, !u.c || u.e > T ? L.c = L.e = null : u.e < p ? L.c = [L.e = 0] : (L.e = u.e, L.c = u.c.slice());
        return
      }
      if ((k = typeof u == "number") && u * 0 == 0) {
        if (L.s = 1 / u < 0 ? (u = -u, -1) : 1, u === ~~u) {
          for (O = 0, N = u; N >= 10; N /= 10, O++);
          O > T ? L.c = L.e = null : (L.e = O, L.c = [u]);
          return
        }
        K = String(u)
      } else {
        if (!dl.test(K = String(u))) return s(L, K, k);
        L.s = K.charCodeAt(0) == 45 ? (K = K.slice(1), -1) : 1
      }(O = K.indexOf(".")) > -1 && (K = K.replace(".", "")), (N = K.search(/e/i)) > 0 ? (O < 0 && (O = N), O += +K.slice(N + 1), K = K.substring(0, N)) : O < 0 && (O = K.length)
    } else {
      if (Ct(d, 2, w.length, "Base"), d == 10 && $) return L = new y(u), j(L, o + L.e + 1, l);
      if (K = String(u), k = typeof u == "number") {
        if (u * 0 != 0) return s(L, K, k, d);
        if (L.s = 1 / u < 0 ? (K = K.slice(1), -1) : 1, y.DEBUG && K.replace(/^0\.0*|\./, "").length > 15) throw Error(Xs + u)
      } else L.s = K.charCodeAt(0) === 45 ? (K = K.slice(1), -1) : 1;
      for (g = w.slice(0, d), O = N = 0, M = K.length; N < M; N++)
        if (g.indexOf(P = K.charAt(N)) < 0) {
          if (P == ".") {
            if (N > O) {
              O = M;
              continue
            }
          } else if (!C && (K == K.toUpperCase() && (K = K.toLowerCase()) || K == K.toLowerCase() && (K = K.toUpperCase()))) {
            C = !0, N = -1, O = 0;
            continue
          }
          return s(L, String(u), k, d)
        } k = !1, K = e(K, d, 10, L.s), (O = K.indexOf(".")) > -1 ? K = K.replace(".", "") : O = K.length
    }
    for (N = 0; K.charCodeAt(N) === 48; N++);
    for (M = K.length; K.charCodeAt(--M) === 48;);
    if (K = K.slice(N, ++M)) {
      if (M -= N, k && y.DEBUG && M > 15 && (u > Jn || u !== ee(u))) throw Error(Xs + L.s * u);
      if ((O = O - N - 1) > T) L.c = L.e = null;
      else if (O < p) L.c = [L.e = 0];
      else {
        if (L.e = O, L.c = [], N = (O + 1) % it, O < 0 && (N += it), N < M) {
          for (N && L.c.push(+K.slice(0, N)), M -= it; N < M;) L.c.push(+K.slice(N, N += it));
          N = it - (K = K.slice(N)).length
        } else N -= M;
        for (; N--; K += "0");
        L.c.push(+K)
      }
    } else L.c = [L.e = 0]
  }
  y.clone = Kr, y.ROUND_UP = 0, y.ROUND_DOWN = 1, y.ROUND_CEIL = 2, y.ROUND_FLOOR = 3, y.ROUND_HALF_UP = 4, y.ROUND_HALF_DOWN = 5, y.ROUND_HALF_EVEN = 6, y.ROUND_HALF_CEIL = 7, y.ROUND_HALF_FLOOR = 8, y.EUCLID = 9, y.config = y.set = function(u) {
    var d, g;
    if (u != null)
      if (typeof u == "object") {
        if (u.hasOwnProperty(d = "DECIMAL_PLACES") && (g = u[d], Ct(g, 0, Ft, d), o = g), u.hasOwnProperty(d = "ROUNDING_MODE") && (g = u[d], Ct(g, 0, 8, d), l = g), u.hasOwnProperty(d = "EXPONENTIAL_AT") && (g = u[d], g && g.pop ? (Ct(g[0], -Ft, 0, d), Ct(g[1], 0, Ft, d), _ = g[0], f = g[1]) : (Ct(g, -Ft, Ft, d), _ = -(f = g < 0 ? -g : g))), u.hasOwnProperty(d = "RANGE"))
          if (g = u[d], g && g.pop) Ct(g[0], -Ft, -1, d), Ct(g[1], 1, Ft, d), p = g[0], T = g[1];
          else if (Ct(g, -Ft, Ft, d), g) p = -(T = g < 0 ? -g : g);
        else throw Error(Jt + d + " cannot be zero: " + g);
        if (u.hasOwnProperty(d = "CRYPTO"))
          if (g = u[d], g === !!g)
            if (g)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) b = g;
              else throw b = !g, Error(Jt + "crypto unavailable");
        else b = g;
        else throw Error(Jt + d + " not true or false: " + g);
        if (u.hasOwnProperty(d = "MODULO_MODE") && (g = u[d], Ct(g, 0, 9, d), S = g), u.hasOwnProperty(d = "POW_PRECISION") && (g = u[d], Ct(g, 0, Ft, d), A = g), u.hasOwnProperty(d = "FORMAT"))
          if (g = u[d], typeof g == "object") h = g;
          else throw Error(Jt + d + " not an object: " + g);
        if (u.hasOwnProperty(d = "ALPHABET"))
          if (g = u[d], typeof g == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(g)) $ = g.slice(0, 10) == "0123456789", w = g;
          else throw Error(Jt + d + " invalid: " + g)
      } else throw Error(Jt + "Object expected: " + u);
    return {
      DECIMAL_PLACES: o,
      ROUNDING_MODE: l,
      EXPONENTIAL_AT: [_, f],
      RANGE: [p, T],
      CRYPTO: b,
      MODULO_MODE: S,
      POW_PRECISION: A,
      FORMAT: h,
      ALPHABET: w
    }
  }, y.isBigNumber = function(u) {
    if (!u || u._isBigNumber !== !0) return !1;
    if (!y.DEBUG) return !0;
    var d, g, P = u.c,
      C = u.e,
      O = u.s;
    t: if ({}.toString.call(P) == "[object Array]") {
      if ((O === 1 || O === -1) && C >= -Ft && C <= Ft && C === ee(C)) {
        if (P[0] === 0) {
          if (C === 0 && P.length === 1) return !0;
          break t
        }
        if (d = (C + 1) % it, d < 1 && (d += it), String(P[0]).length == d) {
          for (d = 0; d < P.length; d++)
            if (g = P[d], g < 0 || g >= ie || g !== ee(g)) break t;
          if (g !== 0) return !0
        }
      }
    } else if (P === null && C === null && (O === null || O === 1 || O === -1)) return !0;
    throw Error(Jt + "Invalid BigNumber: " + u)
  }, y.maximum = y.max = function() {
    return m(arguments, -1)
  }, y.minimum = y.min = function() {
    return m(arguments, 1)
  }, y.random = function() {
    var u = 9007199254740992,
      d = Math.random() * u & 2097151 ? function() {
        return ee(Math.random() * u)
      } : function() {
        return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
      };
    return function(g) {
      var P, C, O, N, k, M = 0,
        K = [],
        L = new y(i);
      if (g == null ? g = o : Ct(g, 0, Ft), N = Qn(g / it), b)
        if (crypto.getRandomValues) {
          for (P = crypto.getRandomValues(new Uint32Array(N *= 2)); M < N;) k = P[M] * 131072 + (P[M + 1] >>> 11), k >= 9e15 ? (C = crypto.getRandomValues(new Uint32Array(2)), P[M] = C[0], P[M + 1] = C[1]) : (K.push(k % 1e14), M += 2);
          M = N / 2
        } else if (crypto.randomBytes) {
        for (P = crypto.randomBytes(N *= 7); M < N;) k = (P[M] & 31) * 281474976710656 + P[M + 1] * 1099511627776 + P[M + 2] * 4294967296 + P[M + 3] * 16777216 + (P[M + 4] << 16) + (P[M + 5] << 8) + P[M + 6], k >= 9e15 ? crypto.randomBytes(7).copy(P, M) : (K.push(k % 1e14), M += 7);
        M = N / 7
      } else throw b = !1, Error(Jt + "crypto unavailable");
      if (!b)
        for (; M < N;) k = d(), k < 9e15 && (K[M++] = k % 1e14);
      for (N = K[--M], g %= it, N && g && (k = Xn[it - g], K[M] = ee(N / k) * k); K[M] === 0; K.pop(), M--);
      if (M < 0) K = [O = 0];
      else {
        for (O = -1; K[0] === 0; K.splice(0, 1), O -= it);
        for (M = 1, k = K[0]; k >= 10; k /= 10, M++);
        M < it && (O -= it - M)
      }
      return L.e = O, L.c = K, L
    }
  }(), y.sum = function() {
    for (var u = 1, d = arguments, g = new y(d[0]); u < d.length;) g = g.plus(d[u++]);
    return g
  }, e = function() {
    var u = "0123456789";

    function d(g, P, C, O) {
      for (var N, k = [0], M, K = 0, L = g.length; K < L;) {
        for (M = k.length; M--; k[M] *= P);
        for (k[0] += O.indexOf(g.charAt(K++)), N = 0; N < k.length; N++) k[N] > C - 1 && (k[N + 1] == null && (k[N + 1] = 0), k[N + 1] += k[N] / C | 0, k[N] %= C)
      }
      return k.reverse()
    }
    return function(g, P, C, O, N) {
      var k, M, K, L, z, et, nt, _t, vt = g.indexOf("."),
        Pt = o,
        dt = l;
      for (vt >= 0 && (L = A, A = 0, g = g.replace(".", ""), _t = new y(P), et = _t.pow(g.length - vt), A = L, _t.c = d(de(te(et.c), et.e, "0"), 10, C, u), _t.e = _t.c.length), nt = d(g, P, C, N ? (k = w, u) : (k = u, w)), K = L = nt.length; nt[--L] == 0; nt.pop());
      if (!nt[0]) return k.charAt(0);
      if (vt < 0 ? --K : (et.c = nt, et.e = K, et.s = O, et = t(et, _t, Pt, dt, C), nt = et.c, z = et.r, K = et.e), M = K + Pt + 1, vt = nt[M], L = C / 2, z = z || M < 0 || nt[M + 1] != null, z = dt < 4 ? (vt != null || z) && (dt == 0 || dt == (et.s < 0 ? 3 : 2)) : vt > L || vt == L && (dt == 4 || z || dt == 6 && nt[M - 1] & 1 || dt == (et.s < 0 ? 8 : 7)), M < 1 || !nt[0]) g = z ? de(k.charAt(1), -Pt, k.charAt(0)) : k.charAt(0);
      else {
        if (nt.length = M, z)
          for (--C; ++nt[--M] > C;) nt[M] = 0, M || (++K, nt = [1].concat(nt));
        for (L = nt.length; !nt[--L];);
        for (vt = 0, g = ""; vt <= L; g += k.charAt(nt[vt++]));
        g = de(g, K, k.charAt(0))
      }
      return g
    }
  }(), t = function() {
    function u(P, C, O) {
      var N, k, M, K, L = 0,
        z = P.length,
        et = C % be,
        nt = C / be | 0;
      for (P = P.slice(); z--;) M = P[z] % be, K = P[z] / be | 0, N = nt * M + K * et, k = et * M + N % be * be + L, L = (k / O | 0) + (N / be | 0) + nt * K, P[z] = k % O;
      return L && (P = [L].concat(P)), P
    }

    function d(P, C, O, N) {
      var k, M;
      if (O != N) M = O > N ? 1 : -1;
      else
        for (k = M = 0; k < O; k++)
          if (P[k] != C[k]) {
            M = P[k] > C[k] ? 1 : -1;
            break
          } return M
    }

    function g(P, C, O, N) {
      for (var k = 0; O--;) P[O] -= k, k = P[O] < C[O] ? 1 : 0, P[O] = k * N + P[O] - C[O];
      for (; !P[0] && P.length > 1; P.splice(0, 1));
    }
    return function(P, C, O, N, k) {
      var M, K, L, z, et, nt, _t, vt, Pt, dt, ht, Rt, Oe, ze, Ue, qt, Ae, Vt = P.s == C.s ? 1 : -1,
        Kt = P.c,
        At = C.c;
      if (!Kt || !Kt[0] || !At || !At[0]) return new y(!P.s || !C.s || (Kt ? At && Kt[0] == At[0] : !At) ? NaN : Kt && Kt[0] == 0 || !At ? Vt * 0 : Vt / 0);
      for (vt = new y(Vt), Pt = vt.c = [], K = P.e - C.e, Vt = O + K + 1, k || (k = ie, K = ne(P.e / it) - ne(C.e / it), Vt = Vt / it | 0), L = 0; At[L] == (Kt[L] || 0); L++);
      if (At[L] > (Kt[L] || 0) && K--, Vt < 0) Pt.push(1), z = !0;
      else {
        for (ze = Kt.length, qt = At.length, L = 0, Vt += 2, et = ee(k / (At[0] + 1)), et > 1 && (At = u(At, et, k), Kt = u(Kt, et, k), qt = At.length, ze = Kt.length), Oe = qt, dt = Kt.slice(0, qt), ht = dt.length; ht < qt; dt[ht++] = 0);
        Ae = At.slice(), Ae = [0].concat(Ae), Ue = At[0], At[1] >= k / 2 && Ue++;
        do {
          if (et = 0, M = d(At, dt, qt, ht), M < 0) {
            if (Rt = dt[0], qt != ht && (Rt = Rt * k + (dt[1] || 0)), et = ee(Rt / Ue), et > 1)
              for (et >= k && (et = k - 1), nt = u(At, et, k), _t = nt.length, ht = dt.length; d(nt, dt, _t, ht) == 1;) et--, g(nt, qt < _t ? Ae : At, _t, k), _t = nt.length, M = 1;
            else et == 0 && (M = et = 1), nt = At.slice(), _t = nt.length;
            if (_t < ht && (nt = [0].concat(nt)), g(dt, nt, ht, k), ht = dt.length, M == -1)
              for (; d(At, dt, qt, ht) < 1;) et++, g(dt, qt < ht ? Ae : At, ht, k), ht = dt.length
          } else M === 0 && (et++, dt = [0]);
          Pt[L++] = et, dt[0] ? dt[ht++] = Kt[Oe] || 0 : (dt = [Kt[Oe]], ht = 1)
        } while ((Oe++ < ze || dt[0] != null) && Vt--);
        z = dt[0] != null, Pt[0] || Pt.splice(0, 1)
      }
      if (k == ie) {
        for (L = 1, Vt = Pt[0]; Vt >= 10; Vt /= 10, L++);
        j(vt, O + (vt.e = L + K * it - 1) + 1, N, z)
      } else vt.e = K, vt.r = +z;
      return vt
    }
  }();

  function v(u, d, g, P) {
    var C, O, N, k, M;
    if (g == null ? g = l : Ct(g, 0, 8), !u.c) return u.toString();
    if (C = u.c[0], N = u.e, d == null) M = te(u.c), M = P == 1 || P == 2 && (N <= _ || N >= f) ? pn(M, N) : de(M, N, "0");
    else if (u = j(new y(u), d, g), O = u.e, M = te(u.c), k = M.length, P == 1 || P == 2 && (d <= O || O <= _)) {
      for (; k < d; M += "0", k++);
      M = pn(M, O)
    } else if (d -= N, M = de(M, O, "0"), O + 1 > k) {
      if (--d > 0)
        for (M += "."; d--; M += "0");
    } else if (d += O - k, d > 0)
      for (O + 1 == k && (M += "."); d--; M += "0");
    return u.s < 0 && C ? "-" + M : M
  }

  function m(u, d) {
    for (var g, P, C = 1, O = new y(u[0]); C < u.length; C++) P = new y(u[C]), (!P.s || (g = Se(O, P)) === d || g === 0 && O.s === d) && (O = P);
    return O
  }

  function F(u, d, g) {
    for (var P = 1, C = d.length; !d[--C]; d.pop());
    for (C = d[0]; C >= 10; C /= 10, P++);
    return (g = P + g * it - 1) > T ? u.c = u.e = null : g < p ? u.c = [u.e = 0] : (u.e = g, u.c = d), u
  }
  s = function() {
    var u = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      d = /^([^.]+)\.$/,
      g = /^\.([^.]+)$/,
      P = /^-?(Infinity|NaN)$/,
      C = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(O, N, k, M) {
      var K, L = k ? N : N.replace(C, "");
      if (P.test(L)) O.s = isNaN(L) ? null : L < 0 ? -1 : 1;
      else {
        if (!k && (L = L.replace(u, function(z, et, nt) {
            return K = (nt = nt.toLowerCase()) == "x" ? 16 : nt == "b" ? 2 : 8, !M || M == K ? et : z
          }), M && (K = M, L = L.replace(d, "$1").replace(g, "0.$1")), N != L)) return new y(L, K);
        if (y.DEBUG) throw Error(Jt + "Not a" + (M ? " base " + M : "") + " number: " + N);
        O.s = null
      }
      O.c = O.e = null
    }
  }();

  function j(u, d, g, P) {
    var C, O, N, k, M, K, L, z = u.c,
      et = Xn;
    if (z) {
      t: {
        for (C = 1, k = z[0]; k >= 10; k /= 10, C++);
        if (O = d - C, O < 0) O += it,
        N = d,
        M = z[K = 0],
        L = ee(M / et[C - N - 1] % 10);
        else if (K = Qn((O + 1) / it), K >= z.length)
          if (P) {
            for (; z.length <= K; z.push(0));
            M = L = 0, C = 1, O %= it, N = O - it + 1
          } else break t;
        else {
          for (M = k = z[K], C = 1; k >= 10; k /= 10, C++);
          O %= it, N = O - it + C, L = N < 0 ? 0 : ee(M / et[C - N - 1] % 10)
        }
        if (P = P || d < 0 || z[K + 1] != null || (N < 0 ? M : M % et[C - N - 1]), P = g < 4 ? (L || P) && (g == 0 || g == (u.s < 0 ? 3 : 2)) : L > 5 || L == 5 && (g == 4 || P || g == 6 && (O > 0 ? N > 0 ? M / et[C - N] : 0 : z[K - 1]) % 10 & 1 || g == (u.s < 0 ? 8 : 7)), d < 1 || !z[0]) return z.length = 0,
        P ? (d -= u.e + 1, z[0] = et[(it - d % it) % it], u.e = -d || 0) : z[0] = u.e = 0,
        u;
        if (O == 0 ? (z.length = K, k = 1, K--) : (z.length = K + 1, k = et[it - O], z[K] = N > 0 ? ee(M / et[C - N] % et[N]) * k : 0), P)
          for (;;)
            if (K == 0) {
              for (O = 1, N = z[0]; N >= 10; N /= 10, O++);
              for (N = z[0] += k, k = 1; N >= 10; N /= 10, k++);
              O != k && (u.e++, z[0] == ie && (z[0] = 1));
              break
            } else {
              if (z[K] += k, z[K] != ie) break;
              z[K--] = 0, k = 1
            } for (O = z.length; z[--O] === 0; z.pop());
      }
      u.e > T ? u.c = u.e = null : u.e < p && (u.c = [u.e = 0])
    }
    return u
  }

  function B(u) {
    var d, g = u.e;
    return g === null ? u.toString() : (d = te(u.c), d = g <= _ || g >= f ? pn(d, g) : de(d, g, "0"), u.s < 0 ? "-" + d : d)
  }
  return r.absoluteValue = r.abs = function() {
    var u = new y(this);
    return u.s < 0 && (u.s = 1), u
  }, r.comparedTo = function(u, d) {
    return Se(this, new y(u, d))
  }, r.decimalPlaces = r.dp = function(u, d) {
    var g, P, C, O = this;
    if (u != null) return Ct(u, 0, Ft), d == null ? d = l : Ct(d, 0, 8), j(new y(O), u + O.e + 1, d);
    if (!(g = O.c)) return null;
    if (P = ((C = g.length - 1) - ne(this.e / it)) * it, C = g[C])
      for (; C % 10 == 0; C /= 10, P--);
    return P < 0 && (P = 0), P
  }, r.dividedBy = r.div = function(u, d) {
    return t(this, new y(u, d), o, l)
  }, r.dividedToIntegerBy = r.idiv = function(u, d) {
    return t(this, new y(u, d), 0, 1)
  }, r.exponentiatedBy = r.pow = function(u, d) {
    var g, P, C, O, N, k, M, K, L, z = this;
    if (u = new y(u), u.c && !u.isInteger()) throw Error(Jt + "Exponent not an integer: " + B(u));
    if (d != null && (d = new y(d)), k = u.e > 14, !z.c || !z.c[0] || z.c[0] == 1 && !z.e && z.c.length == 1 || !u.c || !u.c[0]) return L = new y(Math.pow(+B(z), k ? u.s * (2 - _n(u)) : +B(u))), d ? L.mod(d) : L;
    if (M = u.s < 0, d) {
      if (d.c ? !d.c[0] : !d.s) return new y(NaN);
      P = !M && z.isInteger() && d.isInteger(), P && (z = z.mod(d))
    } else {
      if (u.e > 9 && (z.e > 0 || z.e < -1 || (z.e == 0 ? z.c[0] > 1 || k && z.c[1] >= 24e7 : z.c[0] < 8e13 || k && z.c[0] <= 9999975e7))) return O = z.s < 0 && _n(u) ? -0 : 0, z.e > -1 && (O = 1 / O), new y(M ? 1 / O : O);
      A && (O = Qn(A / it + 2))
    }
    for (k ? (g = new y(.5), M && (u.s = 1), K = _n(u)) : (C = Math.abs(+B(u)), K = C % 2), L = new y(i);;) {
      if (K) {
        if (L = L.times(z), !L.c) break;
        O ? L.c.length > O && (L.c.length = O) : P && (L = L.mod(d))
      }
      if (C) {
        if (C = ee(C / 2), C === 0) break;
        K = C % 2
      } else if (u = u.times(g), j(u, u.e + 1, 1), u.e > 14) K = _n(u);
      else {
        if (C = +B(u), C === 0) break;
        K = C % 2
      }
      z = z.times(z), O ? z.c && z.c.length > O && (z.c.length = O) : P && (z = z.mod(d))
    }
    return P ? L : (M && (L = i.div(L)), d ? L.mod(d) : O ? j(L, A, l, N) : L)
  }, r.integerValue = function(u) {
    var d = new y(this);
    return u == null ? u = l : Ct(u, 0, 8), j(d, d.e + 1, u)
  }, r.isEqualTo = r.eq = function(u, d) {
    return Se(this, new y(u, d)) === 0
  }, r.isFinite = function() {
    return !!this.c
  }, r.isGreaterThan = r.gt = function(u, d) {
    return Se(this, new y(u, d)) > 0
  }, r.isGreaterThanOrEqualTo = r.gte = function(u, d) {
    return (d = Se(this, new y(u, d))) === 1 || d === 0
  }, r.isInteger = function() {
    return !!this.c && ne(this.e / it) > this.c.length - 2
  }, r.isLessThan = r.lt = function(u, d) {
    return Se(this, new y(u, d)) < 0
  }, r.isLessThanOrEqualTo = r.lte = function(u, d) {
    return (d = Se(this, new y(u, d))) === -1 || d === 0
  }, r.isNaN = function() {
    return !this.s
  }, r.isNegative = function() {
    return this.s < 0
  }, r.isPositive = function() {
    return this.s > 0
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0
  }, r.minus = function(u, d) {
    var g, P, C, O, N = this,
      k = N.s;
    if (u = new y(u, d), d = u.s, !k || !d) return new y(NaN);
    if (k != d) return u.s = -d, N.plus(u);
    var M = N.e / it,
      K = u.e / it,
      L = N.c,
      z = u.c;
    if (!M || !K) {
      if (!L || !z) return L ? (u.s = -d, u) : new y(z ? N : NaN);
      if (!L[0] || !z[0]) return z[0] ? (u.s = -d, u) : new y(L[0] ? N : l == 3 ? -0 : 0)
    }
    if (M = ne(M), K = ne(K), L = L.slice(), k = M - K) {
      for ((O = k < 0) ? (k = -k, C = L) : (K = M, C = z), C.reverse(), d = k; d--; C.push(0));
      C.reverse()
    } else
      for (P = (O = (k = L.length) < (d = z.length)) ? k : d, k = d = 0; d < P; d++)
        if (L[d] != z[d]) {
          O = L[d] < z[d];
          break
        } if (O && (C = L, L = z, z = C, u.s = -u.s), d = (P = z.length) - (g = L.length), d > 0)
      for (; d--; L[g++] = 0);
    for (d = ie - 1; P > k;) {
      if (L[--P] < z[P]) {
        for (g = P; g && !L[--g]; L[g] = d);
        --L[g], L[P] += ie
      }
      L[P] -= z[P]
    }
    for (; L[0] == 0; L.splice(0, 1), --K);
    return L[0] ? F(u, L, K) : (u.s = l == 3 ? -1 : 1, u.c = [u.e = 0], u)
  }, r.modulo = r.mod = function(u, d) {
    var g, P, C = this;
    return u = new y(u, d), !C.c || !u.s || u.c && !u.c[0] ? new y(NaN) : !u.c || C.c && !C.c[0] ? new y(C) : (S == 9 ? (P = u.s, u.s = 1, g = t(C, u, 0, 3), u.s = P, g.s *= P) : g = t(C, u, 0, S), u = C.minus(g.times(u)), !u.c[0] && S == 1 && (u.s = C.s), u)
  }, r.multipliedBy = r.times = function(u, d) {
    var g, P, C, O, N, k, M, K, L, z, et, nt, _t, vt, Pt, dt = this,
      ht = dt.c,
      Rt = (u = new y(u, d)).c;
    if (!ht || !Rt || !ht[0] || !Rt[0]) return !dt.s || !u.s || ht && !ht[0] && !Rt || Rt && !Rt[0] && !ht ? u.c = u.e = u.s = null : (u.s *= dt.s, !ht || !Rt ? u.c = u.e = null : (u.c = [0], u.e = 0)), u;
    for (P = ne(dt.e / it) + ne(u.e / it), u.s *= dt.s, M = ht.length, z = Rt.length, M < z && (_t = ht, ht = Rt, Rt = _t, C = M, M = z, z = C), C = M + z, _t = []; C--; _t.push(0));
    for (vt = ie, Pt = be, C = z; --C >= 0;) {
      for (g = 0, et = Rt[C] % Pt, nt = Rt[C] / Pt | 0, N = M, O = C + N; O > C;) K = ht[--N] % Pt, L = ht[N] / Pt | 0, k = nt * K + L * et, K = et * K + k % Pt * Pt + _t[O] + g, g = (K / vt | 0) + (k / Pt | 0) + nt * L, _t[O--] = K % vt;
      _t[O] = g
    }
    return g ? ++P : _t.splice(0, 1), F(u, _t, P)
  }, r.negated = function() {
    var u = new y(this);
    return u.s = -u.s || null, u
  }, r.plus = function(u, d) {
    var g, P = this,
      C = P.s;
    if (u = new y(u, d), d = u.s, !C || !d) return new y(NaN);
    if (C != d) return u.s = -d, P.minus(u);
    var O = P.e / it,
      N = u.e / it,
      k = P.c,
      M = u.c;
    if (!O || !N) {
      if (!k || !M) return new y(C / 0);
      if (!k[0] || !M[0]) return M[0] ? u : new y(k[0] ? P : C * 0)
    }
    if (O = ne(O), N = ne(N), k = k.slice(), C = O - N) {
      for (C > 0 ? (N = O, g = M) : (C = -C, g = k), g.reverse(); C--; g.push(0));
      g.reverse()
    }
    for (C = k.length, d = M.length, C - d < 0 && (g = M, M = k, k = g, d = C), C = 0; d;) C = (k[--d] = k[d] + M[d] + C) / ie | 0, k[d] = ie === k[d] ? 0 : k[d] % ie;
    return C && (k = [C].concat(k), ++N), F(u, k, N)
  }, r.precision = r.sd = function(u, d) {
    var g, P, C, O = this;
    if (u != null && u !== !!u) return Ct(u, 1, Ft), d == null ? d = l : Ct(d, 0, 8), j(new y(O), u, d);
    if (!(g = O.c)) return null;
    if (C = g.length - 1, P = C * it + 1, C = g[C]) {
      for (; C % 10 == 0; C /= 10, P--);
      for (C = g[0]; C >= 10; C /= 10, P++);
    }
    return u && O.e + 1 > P && (P = O.e + 1), P
  }, r.shiftedBy = function(u) {
    return Ct(u, -Jn, Jn), this.times("1e" + u)
  }, r.squareRoot = r.sqrt = function() {
    var u, d, g, P, C, O = this,
      N = O.c,
      k = O.s,
      M = O.e,
      K = o + 4,
      L = new y("0.5");
    if (k !== 1 || !N || !N[0]) return new y(!k || k < 0 && (!N || N[0]) ? NaN : N ? O : 1 / 0);
    if (k = Math.sqrt(+B(O)), k == 0 || k == 1 / 0 ? (d = te(N), (d.length + M) % 2 == 0 && (d += "0"), k = Math.sqrt(+d), M = ne((M + 1) / 2) - (M < 0 || M % 2), k == 1 / 0 ? d = "5e" + M : (d = k.toExponential(), d = d.slice(0, d.indexOf("e") + 1) + M), g = new y(d)) : g = new y(k + ""), g.c[0]) {
      for (M = g.e, k = M + K, k < 3 && (k = 0);;)
        if (C = g, g = L.times(C.plus(t(O, C, K, 1))), te(C.c).slice(0, k) === (d = te(g.c)).slice(0, k))
          if (g.e < M && --k, d = d.slice(k - 3, k + 1), d == "9999" || !P && d == "4999") {
            if (!P && (j(C, C.e + o + 2, 0), C.times(C).eq(O))) {
              g = C;
              break
            }
            K += 4, k += 4, P = 1
          } else {
            (!+d || !+d.slice(1) && d.charAt(0) == "5") && (j(g, g.e + o + 2, 1), u = !g.times(g).eq(O));
            break
          }
    }
    return j(g, g.e + o + 1, l, u)
  }, r.toExponential = function(u, d) {
    return u != null && (Ct(u, 0, Ft), u++), v(this, u, d, 1)
  }, r.toFixed = function(u, d) {
    return u != null && (Ct(u, 0, Ft), u = u + this.e + 1), v(this, u, d)
  }, r.toFormat = function(u, d, g) {
    var P, C = this;
    if (g == null) u != null && d && typeof d == "object" ? (g = d, d = null) : u && typeof u == "object" ? (g = u, u = d = null) : g = h;
    else if (typeof g != "object") throw Error(Jt + "Argument not an object: " + g);
    if (P = C.toFixed(u, d), C.c) {
      var O, N = P.split("."),
        k = +g.groupSize,
        M = +g.secondaryGroupSize,
        K = g.groupSeparator || "",
        L = N[0],
        z = N[1],
        et = C.s < 0,
        nt = et ? L.slice(1) : L,
        _t = nt.length;
      if (M && (O = k, k = M, M = O, _t -= O), k > 0 && _t > 0) {
        for (O = _t % k || k, L = nt.substr(0, O); O < _t; O += k) L += K + nt.substr(O, k);
        M > 0 && (L += K + nt.slice(O)), et && (L = "-" + L)
      }
      P = z ? L + (g.decimalSeparator || "") + ((M = +g.fractionGroupSize) ? z.replace(new RegExp("\\d{" + M + "}\\B", "g"), "$&" + (g.fractionGroupSeparator || "")) : z) : L
    }
    return (g.prefix || "") + P + (g.suffix || "")
  }, r.toFraction = function(u) {
    var d, g, P, C, O, N, k, M, K, L, z, et, nt = this,
      _t = nt.c;
    if (u != null && (k = new y(u), !k.isInteger() && (k.c || k.s !== 1) || k.lt(i))) throw Error(Jt + "Argument " + (k.isInteger() ? "out of range: " : "not an integer: ") + B(k));
    if (!_t) return new y(nt);
    for (d = new y(i), K = g = new y(i), P = M = new y(i), et = te(_t), O = d.e = et.length - nt.e - 1, d.c[0] = Xn[(N = O % it) < 0 ? it + N : N], u = !u || k.comparedTo(d) > 0 ? O > 0 ? d : K : k, N = T, T = 1 / 0, k = new y(et), M.c[0] = 0; L = t(k, d, 0, 1), C = g.plus(L.times(P)), C.comparedTo(u) != 1;) g = P, P = C, K = M.plus(L.times(C = K)), M = C, d = k.minus(L.times(C = d)), k = C;
    return C = t(u.minus(g), P, 0, 1), M = M.plus(C.times(K)), g = g.plus(C.times(P)), M.s = K.s = nt.s, O = O * 2, z = t(K, P, O, l).minus(nt).abs().comparedTo(t(M, g, O, l).minus(nt).abs()) < 1 ? [K, P] : [M, g], T = N, z
  }, r.toNumber = function() {
    return +B(this)
  }, r.toPrecision = function(u, d) {
    return u != null && Ct(u, 1, Ft), v(this, u, d, 2)
  }, r.toString = function(u) {
    var d, g = this,
      P = g.s,
      C = g.e;
    return C === null ? P ? (d = "Infinity", P < 0 && (d = "-" + d)) : d = "NaN" : (u == null ? d = C <= _ || C >= f ? pn(te(g.c), C) : de(te(g.c), C, "0") : u === 10 && $ ? (g = j(new y(g), o + C + 1, l), d = de(te(g.c), g.e, "0")) : (Ct(u, 2, w.length, "Base"), d = e(de(te(g.c), C, "0"), 10, u, P, !0)), P < 0 && g.c[0] && (d = "-" + d)), d
  }, r.valueOf = r.toJSON = function() {
    return B(this)
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, n != null && y.set(n), y
}

function ne(n) {
  var t = n | 0;
  return n > 0 || n === t ? t : t - 1
}

function te(n) {
  for (var t, e, s = 1, r = n.length, i = n[0] + ""; s < r;) {
    for (t = n[s++] + "", e = it - t.length; e--; t = "0" + t);
    i += t
  }
  for (r = i.length; i.charCodeAt(--r) === 48;);
  return i.slice(0, r + 1 || 1)
}

function Se(n, t) {
  var e, s, r = n.c,
    i = t.c,
    o = n.s,
    l = t.s,
    _ = n.e,
    f = t.e;
  if (!o || !l) return null;
  if (e = r && !r[0], s = i && !i[0], e || s) return e ? s ? 0 : -l : o;
  if (o != l) return o;
  if (e = o < 0, s = _ == f, !r || !i) return s ? 0 : !r ^ e ? 1 : -1;
  if (!s) return _ > f ^ e ? 1 : -1;
  for (l = (_ = r.length) < (f = i.length) ? _ : f, o = 0; o < l; o++)
    if (r[o] != i[o]) return r[o] > i[o] ^ e ? 1 : -1;
  return _ == f ? 0 : _ > f ^ e ? 1 : -1
}

function Ct(n, t, e, s) {
  if (n < t || n > e || n !== ee(n)) throw Error(Jt + (s || "Argument") + (typeof n == "number" ? n < t || n > e ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n))
}

function _n(n) {
  var t = n.c.length - 1;
  return ne(n.e / it) == t && n.c[t] % 2 != 0
}

function pn(n, t) {
  return (n.length > 1 ? n.charAt(0) + "." + n.slice(1) : n) + (t < 0 ? "e" : "e+") + t
}

function de(n, t, e) {
  var s, r;
  if (t < 0) {
    for (r = e + "."; ++t; r += e);
    n = r + n
  } else if (s = n.length, ++t > s) {
    for (r = e, t -= s; --t; r += e);
    n += r
  } else t < s && (n = n.slice(0, t) + "." + n.slice(t));
  return n
}
var Ys = Kr();
const _l = Object.freeze(Object.defineProperty({
    __proto__: null,
    BigNumber: Ys,
    default: Ys
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  ws = lr(_l);
var jr = tt && tt.__importDefault || function(n) {
  return n && n.__esModule ? n : {
    default: n
  }
};
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
Ln.WalletV3Account = void 0;
const pl = ve,
  Ve = jr(ws),
  ds = jr(Zt);
class yn {
  static async computeAddress(t) {
    await ds.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof Ve.default ? t.publicKey : new Ve.default(`0x${t.publicKey}`),
      s = Zs(e).hash;
    return new pl.Address(`${t.workchain!=null?t.workchain:0}:${s}`)
  }
  static async fromPubkey(t) {
    const e = new Ve.default(`0x${t.publicKey}`),
      s = await yn.computeAddress({
        publicKey: e,
        workchain: t.workchain
      }),
      r = new yn(s);
    return r.publicKey = e, r
  }
  constructor(t) {
    this.address = t
  }
  async fetchPublicKey(t) {
    let e = this.publicKey;
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(s => new Ve.default(`0x${s}`))), e.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, e) {
    const {
      seqno: s,
      publicKey: r,
      stateInit: i
    } = await this.fetchState(e), o = await e.getSigner(r), l = e.nowSec + t.timeout, _ = t.payload ? e.encodeInternalInput(t.payload) : void 0, f = e.encodeInternalMessage({
      dst: t.recipient,
      bounce: t.bounce,
      stateInit: t.stateInit,
      body: _,
      amount: t.amount
    }), p = {
      walletId: xr,
      expireAt: l,
      seqno: s,
      flags: 3,
      message: f
    }, T = e.packIntoCell({
      structure: $r,
      data: p
    }).hash, b = await o.sign(T, t.signatureId), {
      signatureParts: S
    } = e.extendSignature(b);
    p.signatureHigh = S.high, p.signatureLow = S.low;
    const A = e.packIntoCell({
      structure: hl,
      data: p
    }).boc;
    return e.createRawExternalMessage({
      address: this.address,
      body: A,
      stateInit: i,
      expireAt: l
    })
  }
  async fetchState(t) {
    let e, s;
    const r = await t.getFullContractState(this.address);
    if (r == null || !r.isDeployed) {
      if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
      e = Zs(this.publicKey).boc, s = {
        seqno: 0,
        publicKey: this.publicKey
      }
    } else {
      const i = t.extractContractData(r.boc);
      if (i == null) throw new Error("Failed to extract contract data");
      s = fl(t, i)
    }
    if (this.publicKey == null) this.publicKey = s.publicKey;
    else if (!this.publicKey.eq(s.publicKey)) throw new Error("Public key mismatch");
    return {
      seqno: s.seqno,
      publicKey: s.publicKey.toString(16).padStart(64, "0"),
      stateInit: e
    }
  }
}
Ln.WalletV3Account = yn;
const fl = (n, t) => {
    const e = n.unpackFromCell({
      structure: Br,
      boc: t,
      allowPartial: !1
    });
    if (typeof e != "object" || typeof e.seqno != "string" || typeof e.publicKey != "string") throw new Error("Invalid contract data ");
    return {
      seqno: parseInt(e.seqno),
      publicKey: new Ve.default(e.publicKey)
    }
  },
  Zs = n => {
    const t = ds.default.nekoton.packIntoCell(Br, {
      seqno: 0,
      walletId: xr,
      publicKey: n.toFixed(0)
    }).boc;
    return ds.default.nekoton.mergeTvc(gl, t)
  },
  $r = [{
    name: "walletId",
    type: "uint32"
  }, {
    name: "expireAt",
    type: "uint32"
  }, {
    name: "seqno",
    type: "uint32"
  }, {
    name: "flags",
    type: "uint8"
  }, {
    name: "message",
    type: "cell"
  }],
  hl = [{
    name: "signatureHigh",
    type: "uint256"
  }, {
    name: "signatureLow",
    type: "uint256"
  }, ...$r],
  Br = [{
    name: "seqno",
    type: "uint32"
  }, {
    name: "walletId",
    type: "uint32"
  }, {
    name: "publicKey",
    type: "uint256"
  }],
  gl = "te6ccgEBAQEAcQAA3v8AIN0gggFMl7ohggEznLqxn3Gw7UTQ0x/THzHXC//jBOCk8mCDCNcYINMf0x/TH/gjE7vyY+1E0NMf0x/T/9FRMrryoVFEuvKiBPkBVBBV+RDyo/gAkyDXSpbTB9QC+wDo0QGkyMsfyx/L/8ntVA==",
  xr = 1269378442;
var Fn = {},
  zr = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.HighloadWalletV2 = void 0;
const bl = ve,
  Qe = zr(ws),
  _s = zr(Zt),
  ml = Ht;
class vn {
  static async computeAddress(t) {
    await _s.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof Qe.default ? t.publicKey : new Qe.default(`0x${t.publicKey}`),
      s = qs(e).hash;
    return new bl.Address(`${t.workchain!=null?t.workchain:0}:${s}`)
  }
  static async fromPubkey(t) {
    const e = new Qe.default(`0x${t.publicKey}`),
      s = await vn.computeAddress({
        publicKey: e,
        workchain: t.workchain
      }),
      r = new vn(s);
    return r.publicKey = e, r
  }
  constructor(t) {
    this.address = (0, ml.convertToAddressObject)(t)
  }
  async fetchPublicKey(t) {
    let e = this.publicKey;
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(s => new Qe.default(`0x${s}`))), e.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, e) {
    const {
      publicKey: s,
      stateInit: r
    } = await this.fetchState(e), i = await e.getSigner(s), o = e.nowSec + t.timeout, l = t.payload ? e.encodeInternalInput(t.payload) : void 0, f = {
      messages: [
        [0, {
          flags: 3,
          message: e.encodeInternalMessage({
            dst: t.recipient,
            bounce: t.bounce,
            stateInit: t.stateInit,
            body: l,
            amount: t.amount
          })
        }]
      ]
    }, {
      boc: p,
      hash: T
    } = e.packIntoCell({
      structure: Ur,
      data: f
    });
    f.walletId = Hr, f.expireAt = o, f.messagesHash = `0x${T.slice(-8)}`;
    const b = e.packIntoCell({
        structure: Wr,
        data: f
      }).hash,
      S = await i.sign(b, t.signatureId),
      {
        signatureParts: A
      } = e.extendSignature(S);
    f.signatureHigh = A.high, f.signatureLow = A.low;
    const h = e.packIntoCell({
      structure: yl,
      data: f
    }).boc;
    return e.createRawExternalMessage({
      address: this.address.toString(),
      body: h,
      stateInit: r,
      expireAt: o
    })
  }
  async fetchState(t) {
    let e, s;
    const r = await t.getFullContractState(this.address);
    if (r == null || !r.isDeployed) {
      if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
      e = qs(this.publicKey).boc, s = this.publicKey
    } else if (this.publicKey == null) {
      const i = t.extractContractData(r.boc);
      if (i == null) throw new Error("Failed to extract contract data");
      s = wl(t, i).publicKey
    } else s = this.publicKey;
    return this.publicKey == null && (this.publicKey = s), {
      publicKey: s.toString(16).padStart(64, "0"),
      stateInit: e
    }
  }
}
Fn.HighloadWalletV2 = vn;
const wl = (n, t) => {
    const e = n.unpackFromCell({
      structure: Gr,
      boc: t,
      allowPartial: !0
    });
    if (typeof e != "object" || typeof e.publicKey != "string") throw new Error("Invalid contract data");
    return {
      publicKey: new Qe.default(e.publicKey)
    }
  },
  qs = n => {
    const t = _s.default.nekoton.packIntoCell(Gr, {
      walletId: Hr,
      lastCleaned: 0,
      publicKey: n.toFixed(0),
      queries: !1
    }).boc;
    return _s.default.nekoton.mergeTvc(vl, t)
  },
  Ur = [{
    name: "messages",
    type: "map(uint16,tuple)",
    components: [{
      name: "flags",
      type: "uint8"
    }, {
      name: "message",
      type: "cell"
    }]
  }],
  Wr = [{
    name: "walletId",
    type: "uint32"
  }, {
    name: "expireAt",
    type: "uint32"
  }, {
    name: "messagesHash",
    type: "uint32"
  }, ...Ur],
  yl = [{
    name: "signatureHigh",
    type: "uint256"
  }, {
    name: "signatureLow",
    type: "uint256"
  }, ...Wr],
  Gr = [{
    name: "walletId",
    type: "uint32"
  }, {
    name: "lastCleaned",
    type: "uint64"
  }, {
    name: "publicKey",
    type: "uint256"
  }, {
    name: "queries",
    type: "bool"
  }],
  vl = "te6ccgEBCQEA5QABFP8A9KQT9LzyyAsBAgEgBAIB6vKDCNcYINMf0z/4I6ofUyC58mPtRNDTH9M/0//0BNFTYIBA9A5voTHyYFFzuvKiB/kBVBCH+RDyowL0BNH4AH+OFiGAEPR4b6UgmALTB9QwAfsAkTLiAbPmW4MlochANIBA9EOK5jHIEssfE8s/y//0AMntVAMANCCAQPSWb6UyURCUMFMDud4gkzM2AZIyMOKzAgFICAUCASAHBgBBvl+XaiaGmPmOmf6f+Y+gJoqRBAIHoHN9CYyS2/yV3R8UABe9nOdqJoaa+Y64X/wABNAw",
  Hr = 0;
var Nn = {},
  Vr = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.EverWalletAccount = void 0;
const Al = ve,
  Ge = Vr(ws),
  An = Vr(Zt);
class kn {
  static async computeAddress(t) {
    await An.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof Ge.default ? t.publicKey : new Ge.default(`0x${t.publicKey}`),
      s = tr(e, t.nonce).hash;
    return new Al.Address(`${t.workchain!=null?t.workchain:0}:${s}`)
  }
  static async fromPubkey(t) {
    const e = new Ge.default(`0x${t.publicKey}`),
      s = await kn.computeAddress({
        publicKey: e,
        workchain: t.workchain,
        nonce: t.nonce
      }),
      r = new kn(s);
    return r.publicKey = e, r.nonce = t.nonce, r
  }
  constructor(t) {
    this.address = t
  }
  async fetchPublicKey(t) {
    let e = this.publicKey;
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(s => new Ge.default(`0x${s}`)), this.isDeployed = !0), e.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, e) {
    const {
      publicKey: s,
      stateInit: r
    } = await this.fetchState(e), i = await e.getSigner(s), o = t.payload ? e.encodeInternalInput(t.payload) : "";
    let l, _, f;
    return t.stateInit == null ? (l = Cl, _ = "sendTransaction", f = {
      dest: t.recipient,
      value: t.amount,
      bounce: t.bounce,
      flags: 3,
      payload: o
    }) : (l = Tl, _ = "sendTransactionRaw", f = {
      flags: 3,
      message: e.encodeInternalMessage({
        dst: t.recipient,
        bounce: t.bounce,
        stateInit: t.stateInit,
        body: o,
        amount: t.amount
      })
    }), e.createExternalMessage({
      address: this.address,
      signer: i,
      timeout: t.timeout,
      abi: l,
      method: _,
      params: f,
      stateInit: r,
      signatureId: t.signatureId
    })
  }
  async fetchState(t) {
    let e, s;
    if (this.isDeployed === !0 && this.publicKey != null) s = this.publicKey;
    else {
      const r = await t.getFullContractState(this.address);
      if (r == null || !r.isDeployed) {
        if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
        e = tr(this.publicKey, this.nonce).boc, s = this.publicKey
      } else this.isDeployed = !0, s = new Ge.default(`0x${An.default.nekoton.extractPublicKey(r.boc)}`);
      this.publicKey == null && (this.publicKey = s)
    }
    return {
      publicKey: s.toString(16).padStart(64, "0"),
      stateInit: e
    }
  }
}
Nn.EverWalletAccount = kn;
const tr = (n, t) => {
    let e, s;
    t != null ? (e = Sl, s = {
      publicKey: n.toFixed(0),
      timestamp: 0,
      nonce: t
    }) : (e = kl, s = {
      publicKey: n.toFixed(0),
      timestamp: 0
    });
    const r = An.default.nekoton.packIntoCell(e, s).boc;
    return An.default.nekoton.mergeTvc(Il, r)
  },
  kl = [{
    name: "publicKey",
    type: "uint256"
  }, {
    name: "timestamp",
    type: "uint64"
  }],
  Sl = [{
    name: "publicKey",
    type: "uint256"
  }, {
    name: "timestamp",
    type: "uint64"
  }, {
    name: "nonce",
    type: "uint32"
  }],
  Il = "te6cckEBBgEA/AABFP8A9KQT9LzyyAsBAgEgAgMABNIwAubycdcBAcAA8nqDCNcY7UTQgwfXAdcLP8j4KM8WI88WyfkAA3HXAQHDAJqDB9cBURO68uBk3oBA1wGAINcBgCDXAVQWdfkQ8qj4I7vyeWa++COBBwiggQPoqFIgvLHydAIgghBM7mRsuuMPAcjL/8s/ye1UBAUAmDAC10zQ+kCDBtcBcdcBeNcB10z4AHCAEASqAhSxyMsFUAXPFlAD+gLLaSLQIc8xIddJoIQJuZgzcAHLAFjPFpcwcQHLABLM4skB+wAAPoIQFp4+EbqOEfgAApMg10qXeNcB1AL7AOjRkzLyPOI+zYS/",
  Cl = `{
  "ABI version": 2,
  "version": "2.3",
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"flags","type":"uint8"},
      {"name":"payload","type":"cell"}
    ],
    "outputs": []
  }],
  "events": []
}`,
  Tl = `{
  "ABI version": 2,
  "version": "2.3",
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransactionRaw",
    "inputs": [
      {"name":"flags","type":"uint8"},
      {"name":"message","type":"cell"}
    ],
    "outputs": [],
    "id": "0x169e3e11"
  }],
  "events": []
}`;
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.SimpleAccountsStorage = n.AccountsStorageContext = n.EverWalletAccount = n.HighloadWalletV2 = n.WalletV3Account = n.MsigAccount = n.GenericAccount = n.GiverAccount = void 0;
  const t = Ht;
  var e = Rn;
  Object.defineProperty(n, "GiverAccount", {
    enumerable: !0,
    get: function() {
      return e.GiverAccount
    }
  });
  var s = Be;
  Object.defineProperty(n, "GenericAccount", {
    enumerable: !0,
    get: function() {
      return s.GenericAccount
    }
  }), Object.defineProperty(n, "MsigAccount", {
    enumerable: !0,
    get: function() {
      return s.MsigAccount
    }
  });
  var r = Ln;
  Object.defineProperty(n, "WalletV3Account", {
    enumerable: !0,
    get: function() {
      return r.WalletV3Account
    }
  });
  var i = Fn;
  Object.defineProperty(n, "HighloadWalletV2", {
    enumerable: !0,
    get: function() {
      return i.HighloadWalletV2
    }
  });
  var o = Nn;
  Object.defineProperty(n, "EverWalletAccount", {
    enumerable: !0,
    get: function() {
      return o.EverWalletAccount
    }
  });
  class l {
    constructor(p, T, b, S) {
      this.clock = p, this.connectionController = T, this.nekoton = b, this.keystore = S
    }
    async getSigner(p) {
      if (this.keystore == null) throw new Error("Keystore not found");
      const T = await this.keystore.getSigner(p);
      if (T == null) throw new Error("Signer not found");
      return T
    }
    get nowMs() {
      return this.clock.nowMs
    }
    get nowSec() {
      return ~~(this.clock.nowMs / 1e3)
    }
    async fetchPublicKey(p) {
      const T = await this.getFullContractState(p);
      if (T == null || !T.isDeployed) throw new Error("Contract not deployed");
      return this.nekoton.extractPublicKey(T.boc)
    }
    async getFullContractState(p) {
      return this.connectionController.use(async ({
        data: {
          transport: T
        }
      }) => T.getFullContractState(p.toString()))
    }
    extractContractData(p) {
      return this.nekoton.extractContractData(p)
    }
    packIntoCell(p) {
      return this.nekoton.packIntoCell(p.structure, p.data, p.abiVersion)
    }
    unpackFromCell(p) {
      return this.nekoton.unpackFromCell(p.structure, p.boc, p.allowPartial, p.abiVersion)
    }
    getBocHash(p) {
      return this.nekoton.getBocHash(p)
    }
    extendSignature(p) {
      return this.nekoton.extendSignature(p)
    }
    encodeInternalInput(p) {
      return this.nekoton.encodeInternalInput(p.abi, p.method, p.params)
    }
    encodeInternalMessage(p) {
      return this.nekoton.encodeInternalMessage(p.src, p.dst, p.bounce, p.stateInit, p.body, p.amount)
    }
    async createExternalMessage(p) {
      const T = this.nekoton.createExternalMessage(this.clock, p.address.toString(), p.abi, p.method, p.stateInit, p.params, p.signer.publicKey, p.timeout);
      try {
        const b = await p.signer.sign(T.hash, p.signatureId);
        return T.sign(b)
      } finally {
        T.free()
      }
    }
    createRawExternalMessage(p) {
      return this.nekoton.createRawExternalMessage(p.address.toString(), p.stateInit, p.body, p.expireAt)
    }
  }
  n.AccountsStorageContext = l;
  class _ {
    constructor(p = {}) {
      if (this.accounts = new Map, p.entries != null)
        for (const T of p.entries) this._defaultAccount == null && (this._defaultAccount = T.address), this.accounts.set(T.address.toString(), T);
      if (p.defaultAccount != null) {
        const T = (0, t.convertToAddressObject)(p.defaultAccount);
        if (!this.accounts.has(T.toString())) throw new Error("Provided default account not found in storage");
        this._defaultAccount = T
      }
    }
    get defaultAccount() {
      return this._defaultAccount
    }
    set defaultAccount(p) {
      const T = p == null ? void 0 : p.toString();
      if (T != null && !this.accounts.has(T)) throw new Error("Account not found in storage");
      this._defaultAccount = p == null ? p : (0, t.convertToAddressObject)(p)
    }
    async getAccount(p) {
      return this.accounts.get(p.toString())
    }
    addAccount(p) {
      const T = p.address;
      return this.accounts.set(T.toString(), p), T
    }
    hasAccount(p) {
      return this.accounts.has(p.toString())
    }
    removeAccount(p) {
      this.accounts.delete(p.toString())
    }
  }
  n.SimpleAccountsStorage = _
})(us);
var Kn = {};
Object.defineProperty(Kn, "__esModule", {
  value: !0
});
Kn.ConnectionFactory = void 0;
class El {}
Kn.ConnectionFactory = El;
var jn = {},
  Pl = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(jn, "__esModule", {
  value: !0
});
jn.SimpleKeystore = void 0;
const Qr = Pl(Zt);
class ys {
  constructor(t = {}) {
    this.signers = new Map, this.signersByPublicKey = new Map;
    for (const [e, s] of Object.entries(t)) this.addKeyPair(e, s)
  }
  static generateKeyPair() {
    return Qr.default.nekoton.ed25519_generateKeyPair()
  }
  addKeyPair(t, e) {
    let s, r;
    typeof t == "string" ? (s = t, r = e) : (s = t.publicKey, r = t);
    const i = new Ml(r);
    this.signers.set(s, i), this.signersByPublicKey.set(r.publicKey, i)
  }
  removeKeyPair(t) {
    const e = this.signers.get(t);
    e != null && (this.signers.delete(t), this.signersByPublicKey.delete(e.publicKey))
  }
  async withNewKey(t, e = {}) {
    const s = ys.generateKeyPair(),
      r = e.keyId != null ? e.keyId : s.publicKey,
      i = e.keepOnError || !1;
    return this.addKeyPair(r, s), t(r).then(o => (o === !1 && this.removeKeyPair(r), r)).catch(o => {
      throw i || this.removeKeyPair(r), o
    })
  }
  async getSigner(t) {
    return this.signers.get(t) || this.signersByPublicKey.get(t)
  }
}
jn.SimpleKeystore = ys;
class Ml {
  constructor(t) {
    this.keyPair = t, this.publicKey = this.keyPair.publicKey
  }
  async sign(t, e) {
    return Qr.default.nekoton.ed25519_sign(this.keyPair.secretKey, t, e)
  }
}
var $n = {};
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.Clock = void 0;
class Ol {
  constructor(t) {
    this.impls = [], this.currentOffset = 0, t != null && (this.currentOffset = t)
  }
  get offset() {
    return this.currentOffset
  }
  set offset(t) {
    this.currentOffset = t;
    for (const e of this.impls) e.updateOffset(this.currentOffset)
  }
  get time() {
    return new Date().getTime() + this.offset
  }
  detach() {
    this.impls = []
  }
}
$n.Clock = Ol;
(function(n) {
  var t = tt && tt.__createBinding || (Object.create ? function(I, a, E, D) {
      D === void 0 && (D = E);
      var x = Object.getOwnPropertyDescriptor(a, E);
      (!x || ("get" in x ? !a.__esModule : x.writable || x.configurable)) && (x = {
        enumerable: !0,
        get: function() {
          return a[E]
        }
      }), Object.defineProperty(I, D, x)
    } : function(I, a, E, D) {
      D === void 0 && (D = E), I[D] = a[E]
    }),
    e = tt && tt.__exportStar || function(I, a) {
      for (var E in I) E !== "default" && !Object.prototype.hasOwnProperty.call(a, E) && t(a, I, E)
    },
    s = tt && tt.__importDefault || function(I) {
      return I && I.__esModule ? I : {
        default: I
      }
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.EverscaleStandaloneClient = n.SUPPORTED_PERMISSIONS = n.VERSION = n.Clock = n.SimpleKeystore = n.checkConnection = n.ConnectionError = n.NETWORK_PRESETS = void 0;
  const r = s(Oc),
    i = s(Zt),
    o = Ht,
    l = gn,
    _ = On,
    f = us;
  e(Kn, n);
  var p = gn;
  Object.defineProperty(n, "NETWORK_PRESETS", {
    enumerable: !0,
    get: function() {
      return p.NETWORK_PRESETS
    }
  });
  var T = gn;
  Object.defineProperty(n, "ConnectionError", {
    enumerable: !0,
    get: function() {
      return T.ConnectionError
    }
  }), Object.defineProperty(n, "checkConnection", {
    enumerable: !0,
    get: function() {
      return T.checkConnection
    }
  }), e(us, n);
  var b = jn;
  Object.defineProperty(n, "SimpleKeystore", {
    enumerable: !0,
    get: function() {
      return b.SimpleKeystore
    }
  });
  var S = $n;
  Object.defineProperty(n, "Clock", {
    enumerable: !0,
    get: function() {
      return S.Clock
    }
  });

  function A(I) {
    const a = I || {};
    return {
      retryCount: a.retryCount != null ? Math.max(1, ~~a.retryCount) : 5,
      timeout: a.timeout != null ? Math.max(1, ~~a.timeout) : 60,
      timeoutGrowFactor: a.timeoutGrowFactor || 1.2,
      retryTransfers: !0
    }
  }
  n.VERSION = "0.2.25", n.SUPPORTED_PERMISSIONS = ["basic", "accountInteraction"];
  class h extends o.SafeEventEmitter {
    static async create(a = {}) {
      await i.default.ensureNekotonLoaded(a.initInput);
      const E = {},
        D = (G, st) => {
          var Z;
          (Z = E.client) === null || Z === void 0 || Z.emit(G, st)
        },
        x = new i.default.nekoton.ClockWithOffset;
      a.clock != null && (a.clock.impls.push(x), x.updateOffset(a.clock.offset));
      try {
        const G = a.connection != null ? await (0, l.createConnectionController)(x, a.connection) : void 0,
          st = G != null ? new _.SubscriptionController(G, D) : void 0,
          Z = new h({
            permissions: {},
            connectionController: G,
            subscriptionController: st,
            properties: {
              message: A(a.message)
            },
            keystore: a.keystore,
            accountsStorage: a.accountsStorage,
            clock: x,
            notify: D
          });
        return E.client = Z, Z
      } catch (G) {
        throw a.clock != null && a.clock.impls.pop(), x.free(), G
      }
    }
    static setDebugLogger(a) {
      i.default.debugLog = a
    }
    constructor(a) {
      super(), this._handlers = {
        requestPermissions: w,
        changeAccount: $,
        disconnect: y,
        subscribe: v,
        unsubscribe: m,
        unsubscribeAll: F,
        getProviderState: j,
        getFullContractState: B,
        computeStorageFee: u,
        getAccountsByCodeHash: d,
        getTransactions: g,
        getTransaction: P,
        findTransaction: C,
        runLocal: O,
        executeLocal: N,
        getExpectedAddress: k,
        getContractFields: M,
        unpackInitData: K,
        getBocHash: L,
        packIntoCell: z,
        unpackFromCell: et,
        extractPublicKey: nt,
        codeToTvc: _t,
        mergeTvc: vt,
        splitTvc: Pt,
        setCodeSalt: dt,
        getCodeSalt: ht,
        encodeInternalInput: Rt,
        decodeInput: Oe,
        decodeOutput: ze,
        decodeEvent: Ue,
        decodeTransaction: qt,
        decodeTransactionEvents: Ae,
        verifySignature: Vt,
        sendUnsignedExternalMessage: Kt,
        signData: At,
        signDataRaw: Jr,
        sendMessage: Xr,
        sendMessageDelayed: Yr,
        sendExternalMessage: Zr,
        sendExternalMessageDelayed: qr
      }, this.setPollingInterval = E => {
        var D;
        if (this._context.connectionController == null || this._context.subscriptionController == null) throw Error("Connection was not initialized");
        (D = this._context.subscriptionController) === null || D === void 0 || D.setPollingInterval(E)
      }, this._context = a
    }
    request(a) {
      const E = this._handlers[a.method];
      if (E == null) throw Q(a, `Method '${a.method}' is not supported by standalone provider`);
      return E(this._context, a)
    }
    addListener(a, E) {
      return super.addListener(a, E)
    }
    removeListener(a, E) {
      return super.removeListener(a, E)
    }
    on(a, E) {
      return super.on(a, E)
    }
    once(a, E) {
      return super.once(a, E)
    }
    prependListener(a, E) {
      return super.prependListener(a, E)
    }
    prependOnceListener(a, E) {
      return super.prependOnceListener(a, E)
    }
  }
  n.EverscaleStandaloneClient = h;
  const w = async (I, a) => {
    lt(a);
    const {
      permissions: E
    } = a.params;
    Bn(a, a.params, "permissions");
    const D = {
      ...I.permissions
    };
    for (const G of E)
      if (G === "basic" || G === "tonClient") D.basic = !0;
      else if (G === "accountInteraction") {
      if (D.accountInteraction != null) continue;
      D.accountInteraction = await As(a, I)
    } else throw Q(a, `Permission '${G}' is not supported by standalone provider`);
    I.permissions = D;
    const x = JSON.parse(JSON.stringify(D));
    return I.notify("permissionsChanged", {
      permissions: x
    }), x
  }, $ = async (I, a) => {
    an(a, I);
    const E = {
      ...I.permissions
    };
    E.accountInteraction = await As(a, I), I.permissions = E;
    const D = JSON.parse(JSON.stringify(E));
    return I.notify("permissionsChanged", {
      permissions: D
    }), D
  }, y = async (I, a) => {
    var E;
    I.permissions = {}, await ((E = I.subscriptionController) === null || E === void 0 ? void 0 : E.unsubscribeFromAllContracts()), I.notify("permissionsChanged", {
      permissions: {}
    })
  }, v = async (I, a) => {
    lt(a), jt(a, I);
    const {
      address: E,
      subscriptions: D
    } = a.params;
    q(a, a.params, "address"), on(a, a.params, "subscriptions");
    let x;
    try {
      x = i.default.nekoton.repackAddress(E)
    } catch (G) {
      throw Q(a, G.toString())
    }
    try {
      return await I.subscriptionController.subscribeToContract(x, D)
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, m = async (I, a) => {
    lt(a), jt(a, I);
    const {
      address: E
    } = a.params;
    q(a, a.params, "address");
    let D;
    try {
      D = i.default.nekoton.repackAddress(E)
    } catch (x) {
      throw Q(a, x.toString())
    }
    await I.subscriptionController.unsubscribeFromContract(D)
  }, F = async (I, a) => {
    var E;
    await ((E = I.subscriptionController) === null || E === void 0 ? void 0 : E.unsubscribeFromAllContracts())
  }, j = async (I, a) => {
    var E, D;
    const x = (E = I.connectionController) === null || E === void 0 ? void 0 : E.initializedTransport,
      G = n.VERSION;
    return {
      version: G,
      numericVersion: (0, o.convertVersionToInt32)(G),
      networkId: x != null ? x.id : 0,
      selectedConnection: x != null ? x.group : "",
      supportedPermissions: [...n.SUPPORTED_PERMISSIONS],
      permissions: JSON.parse(JSON.stringify(I.permissions)),
      subscriptions: ((D = I.subscriptionController) === null || D === void 0 ? void 0 : D.subscriptionStates) || {}
    }
  }, B = async (I, a) => {
    lt(a), jt(a, I);
    const {
      address: E
    } = a.params;
    q(a, a.params, "address");
    const {
      connectionController: D
    } = I;
    try {
      return D.use(async ({
        data: {
          transport: x
        }
      }) => ({
        state: await x.getFullContractState(E)
      }))
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, u = async (I, a) => {
    lt(a), jt(a, I);
    const {
      state: E,
      masterchain: D,
      timestamp: x
    } = a.params;
    ni(a, a.params, "state"), We(a, a.params, "masterchain"), cn(a, a.params, "timestamp");
    const {
      connectionController: G
    } = I;
    try {
      const st = await G.use(({
          data: {
            transport: ft
          }
        }) => ft.getBlockchainConfig()),
        Z = x ?? ~~(I.clock.nowMs / 1e3);
      return i.default.nekoton.computeStorageFee(st, E.boc, Z, D || !1)
    } catch (st) {
      throw Q(a, st.toString())
    }
  }, d = async (I, a) => {
    lt(a), jt(a, I);
    const {
      codeHash: E,
      limit: D,
      continuation: x
    } = a.params;
    q(a, a.params, "codeHash"), cn(a, a.params, "limit"), ue(a, a.params, "continuation");
    const {
      connectionController: G
    } = I;
    try {
      return G.use(({
        data: {
          transport: st
        }
      }) => st.getAccountsByCodeHash(E, D || 50, x))
    } catch (st) {
      throw Q(a, st.toString())
    }
  }, g = async (I, a) => {
    lt(a), jt(a, I);
    const {
      address: E,
      continuation: D,
      limit: x
    } = a.params;
    q(a, a.params, "address"), oe(a, a.params, "continuation", ti), cn(a, a.params, "limit");
    const {
      connectionController: G
    } = I;
    try {
      return G.use(({
        data: {
          transport: st
        }
      }) => st.getTransactions(E, D == null ? void 0 : D.lt, x || 50))
    } catch (st) {
      throw Q(a, st.toString())
    }
  }, P = async (I, a) => {
    lt(a), jt(a, I);
    const {
      hash: E
    } = a.params;
    q(a, a.params, "hash");
    const {
      connectionController: D
    } = I;
    try {
      return {
        transaction: await D.use(({
          data: {
            transport: x
          }
        }) => x.getTransaction(E))
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, C = async (I, a) => {
    lt(a), jt(a, I);
    const {
      inMessageHash: E
    } = a.params;
    oe(a, a.params, "inMessageHash", q);
    const {
      connectionController: D
    } = I;
    if (E == null) return {
      transaction: void 0
    };
    try {
      return {
        transaction: await D.use(({
          data: {
            transport: x
          }
        }) => x.getDstTransaction(E))
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, O = async (I, a) => {
    lt(a);
    const {
      address: E,
      cachedState: D,
      responsible: x,
      functionCall: G,
      withSignatureId: st
    } = a.params;
    q(a, a.params, "address"), oe(a, a.params, "cachedState", xn), We(a, a.params, "responsible"), De(a, a.params, "functionCall"), ln(a, a.params, "withSignatureId");
    let Z = D;
    if (Z == null && (jt(a, I), Z = await I.connectionController.use(async ({
        data: {
          transport: St
        }
      }) => St.getFullContractState(E))), Z == null) throw Q(a, "Account not found");
    if (!Z.isDeployed || Z.lastTransactionId == null) throw Q(a, "Account is not deployed");
    const ft = await le(a, I, st);
    try {
      const {
        output: St,
        code: It
      } = i.default.nekoton.runLocal(I.clock, Z.boc, G.abi, G.method, G.params, x || !1, ft);
      return {
        output: St,
        code: It
      }
    } catch (St) {
      throw Q(a, St.toString())
    }
  }, N = async (I, a) => {
    lt(a), jt(a, I);
    const {
      address: E,
      cachedState: D,
      stateInit: x,
      payload: G,
      executorParams: st,
      messageHeader: Z
    } = a.params;
    q(a, a.params, "address"), oe(a, a.params, "cachedState", xn), ue(a, a.params, "stateInit"), vs(a, a.params, "payload"), on(a, a.params, "executorParams"), he(a, a.params, "messageHeader");
    const {
      clock: ft,
      connectionController: St
    } = I;
    let It;
    try {
      It = i.default.nekoton.repackAddress(E)
    } catch (gt) {
      throw Q(a, gt.toString())
    }
    const $t = ~~(ft.nowMs / 1e3),
      Qt = 60;
    let Ot;
    if (Z.type === "external")
      if (G == null || typeof G == "string") Ot = i.default.nekoton.createRawExternalMessage(It, x, G, $t + Qt).boc;
      else if (Z.withoutSignature === !0) Ot = i.default.nekoton.createExternalMessageWithoutSignature(ft, It, G.abi, G.method, x, G.params, Qt).boc;
    else {
      const gt = i.default.nekoton.createExternalMessage(ft, It, G.abi, G.method, x, G.params, Z.publicKey, Qt);
      try {
        if ((st == null ? void 0 : st.disableSignatureCheck) === !0) Ot = gt.signFake().boc;
        else {
          ke(a, I);
          const mt = await le(a, I),
            {
              keystore: yt
            } = I,
            Lt = await yt.getSigner(Z.publicKey);
          if (Lt == null) throw "Signer not found for public key";
          const pt = await Lt.sign(gt.hash, mt);
          Ot = gt.sign(pt).boc
        }
      } catch (mt) {
        throw Q(a, mt.toString())
      } finally {
        gt.free()
      }
    } else if (Z.type === "internal") {
      q(a, Z, "sender"), q(a, Z, "amount"), ge(a, Z, "bounce"), We(a, Z, "bounced");
      const gt = G == null ? void 0 : typeof G == "string" ? G : i.default.nekoton.encodeInternalInput(G.abi, G.method, G.params);
      Ot = i.default.nekoton.encodeInternalMessage(Z.sender, It, Z.bounce, x, gt, Z.amount)
    } else throw Q(a, "Unknown message type");
    try {
      const [gt, mt, yt] = await St.use(({
        data: {
          transport: kt
        }
      }) => Promise.all([D ?? kt.getFullContractState(It), kt.getBlockchainConfig(), kt.getNetworkDescription()])), Lt = i.default.nekoton.makeFullAccountBoc(gt == null ? void 0 : gt.boc), pt = st == null ? void 0 : st.overrideBalance, Dt = i.default.nekoton.executeLocal(mt, Lt, Ot, $t, (st == null ? void 0 : st.disableSignatureCheck) === !0, pt != null ? pt.toString() : void 0, yt.globalId);
      if (Dt.exitCode != null) throw new Error(`Contract did not accept the message. Exit code: ${Dt.exitCode}`);
      const zt = Dt,
        Re = zt.transaction,
        Bt = i.default.nekoton.parseFullAccountBoc(zt.account);
      let xt;
      try {
        if (typeof G == "object" && typeof G != null) {
          const kt = i.default.nekoton.decodeTransaction(zt.transaction, G.abi, G.method);
          xt = kt == null ? void 0 : kt.output
        }
      } catch {}
      return {
        transaction: Re,
        newState: Bt,
        output: xt
      }
    } catch (gt) {
      throw Q(a, gt.toString())
    }
  }, k = async (I, a) => {
    lt(a);
    const {
      tvc: E,
      abi: D,
      workchain: x,
      publicKey: G,
      initParams: st
    } = a.params;
    q(a, a.params, "tvc"), q(a, a.params, "abi"), cn(a, a.params, "workchain"), ue(a, a.params, "publicKey");
    try {
      return i.default.nekoton.getExpectedAddress(E, D, x || 0, G, st)
    } catch (Z) {
      throw Q(a, Z.toString())
    }
  }, M = async (I, a) => {
    lt(a);
    const {
      address: E,
      abi: D,
      cachedState: x,
      allowPartial: G
    } = a.params;
    q(a, a.params, "address"), q(a, a.params, "abi"), oe(a, a.params, "cachedState", xn), ge(a, a.params, "allowPartial");
    let st;
    try {
      st = i.default.nekoton.repackAddress(E)
    } catch (ft) {
      throw Q(a, ft.toString())
    }
    let Z = x;
    if (Z == null && (jt(a, I), Z = await I.connectionController.use(async ({
        data: {
          transport: ft
        }
      }) => ft.getFullContractState(st))), Z == null) return {
      fields: void 0,
      state: void 0
    };
    if (!Z.isDeployed || Z.lastTransactionId == null) return {
      fields: void 0,
      state: Z
    };
    try {
      return {
        fields: i.default.nekoton.unpackContractFields(D, Z.boc, G),
        state: Z
      }
    } catch (ft) {
      throw Q(a, ft.toString())
    }
  }, K = async (I, a) => {
    lt(a);
    const {
      abi: E,
      data: D
    } = a.params;
    q(a, a.params, "abi"), q(a, a.params, "data");
    try {
      const {
        publicKey: x,
        data: G
      } = i.default.nekoton.unpackInitData(E, D);
      return {
        publicKey: x,
        initParams: G
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, L = async (I, a) => {
    lt(a);
    const {
      boc: E
    } = a.params;
    q(a, a.params, "boc");
    try {
      return {
        hash: i.default.nekoton.getBocHash(E)
      }
    } catch (D) {
      throw Q(a, D.toString())
    }
  }, z = async (I, a) => {
    lt(a);
    const {
      structure: E,
      data: D,
      abiVersion: x
    } = a.params;
    Bn(a, a.params, "structure"), oe(a, a.params, "abiVersion", q);
    try {
      return i.default.nekoton.packIntoCell(E, D, x)
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, et = async (I, a) => {
    lt(a);
    const {
      structure: E,
      boc: D,
      allowPartial: x,
      abiVersion: G
    } = a.params;
    Bn(a, a.params, "structure"), q(a, a.params, "boc"), ge(a, a.params, "allowPartial"), oe(a, a.params, "abiVersion", q);
    try {
      return {
        data: i.default.nekoton.unpackFromCell(E, D, x, G)
      }
    } catch (st) {
      throw Q(a, st.toString())
    }
  }, nt = async (I, a) => {
    lt(a);
    const {
      boc: E
    } = a.params;
    q(a, a.params, "boc");
    try {
      return {
        publicKey: i.default.nekoton.extractPublicKey(E)
      }
    } catch (D) {
      throw Q(a, D.toString())
    }
  }, _t = async (I, a) => {
    lt(a);
    const {
      code: E
    } = a.params;
    q(a, a.params, "code");
    try {
      const {
        boc: D,
        hash: x
      } = i.default.nekoton.codeToTvc(E);
      return {
        tvc: D,
        hash: x
      }
    } catch (D) {
      throw Q(a, D.toString())
    }
  }, vt = async (I, a) => {
    lt(a);
    const {
      code: E,
      data: D
    } = a.params;
    q(a, a.params, "code"), q(a, a.params, "data");
    try {
      const {
        boc: x,
        hash: G
      } = i.default.nekoton.mergeTvc(E, D);
      return {
        tvc: x,
        hash: G
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, Pt = async (I, a) => {
    lt(a);
    const {
      tvc: E
    } = a.params;
    q(a, a.params, "tvc");
    try {
      return i.default.nekoton.splitTvc(E)
    } catch (D) {
      throw Q(a, D.toString())
    }
  }, dt = async (I, a) => {
    lt(a);
    const {
      code: E,
      salt: D
    } = a.params;
    q(a, a.params, "code"), q(a, a.params, "salt");
    try {
      const {
        boc: x,
        hash: G
      } = i.default.nekoton.setCodeSalt(E, D);
      return {
        code: x,
        hash: G
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, ht = async (I, a) => {
    lt(a);
    const {
      code: E
    } = a.params;
    q(a, a.params, "code");
    try {
      return {
        salt: i.default.nekoton.getCodeSalt(E)
      }
    } catch (D) {
      throw Q(a, D.toString())
    }
  }, Rt = async (I, a) => {
    lt(a), De(a, a, "params");
    const {
      abi: E,
      method: D,
      params: x
    } = a.params;
    try {
      return {
        boc: i.default.nekoton.encodeInternalInput(E, D, x)
      }
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, Oe = async (I, a) => {
    lt(a);
    const {
      body: E,
      abi: D,
      method: x,
      internal: G
    } = a.params;
    q(a, a.params, "body"), q(a, a.params, "abi"), un(a, a.params, "method"), ge(a, a.params, "internal");
    try {
      return i.default.nekoton.decodeInput(E, D, x, G) || null
    } catch (st) {
      throw Q(a, st.toString())
    }
  }, ze = async (I, a) => {
    lt(a);
    const {
      body: E,
      abi: D,
      method: x
    } = a.params;
    q(a, a.params, "body"), q(a, a.params, "abi"), un(a, a.params, "method");
    try {
      return i.default.nekoton.decodeOutput(E, D, x) || null
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, Ue = async (I, a) => {
    lt(a);
    const {
      body: E,
      abi: D,
      event: x
    } = a.params;
    q(a, a.params, "body"), q(a, a.params, "abi"), un(a, a.params, "event");
    try {
      return i.default.nekoton.decodeEvent(E, D, x) || null
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, qt = async (I, a) => {
    lt(a);
    const {
      transaction: E,
      abi: D,
      method: x
    } = a.params;
    q(a, a.params, "abi"), un(a, a.params, "method");
    try {
      return i.default.nekoton.decodeTransaction(E, D, x) || null
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, Ae = async (I, a) => {
    lt(a);
    const {
      transaction: E,
      abi: D
    } = a.params;
    q(a, a.params, "abi");
    try {
      return {
        events: i.default.nekoton.decodeTransactionEvents(E, D)
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, Vt = async (I, a) => {
    lt(a);
    const {
      publicKey: E,
      dataHash: D,
      signature: x,
      withSignatureId: G
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "dataHash"), q(a, a.params, "signature"), ln(a, a.params, "withSignatureId");
    const st = await le(a, I, G);
    try {
      return {
        isValid: i.default.nekoton.verifySignature(E, D, x, st)
      }
    } catch (Z) {
      throw Q(a, Z.toString())
    }
  }, Kt = async (I, a) => {
    lt(a), jt(a, I);
    const {
      recipient: E,
      stateInit: D,
      payload: x,
      local: G,
      executorParams: st
    } = a.params;
    q(a, a.params, "recipient"), ue(a, a.params, "stateInit"), vs(a, a.params, "payload"), We(a, a.params, "local"), on(a, a.params, "executorParams");
    let Z;
    try {
      Z = i.default.nekoton.repackAddress(E)
    } catch (pt) {
      throw Q(a, pt.toString())
    }
    const {
      clock: ft,
      subscriptionController: St,
      properties: It
    } = I, $t = pt => {
      try {
        if (typeof x == "string" || x == null) {
          const Dt = ~~(ft.nowMs / 1e3) + pt;
          return i.default.nekoton.createRawExternalMessage(Z, D, x, ~~Dt)
        } else return i.default.nekoton.createExternalMessageWithoutSignature(ft, Z, x.abi, x.method, D, x.params, ~~pt)
      } catch (Dt) {
        throw Q(a, Dt.toString())
      }
    }, Qt = pt => {
      let Dt;
      try {
        if (typeof x == "object" && typeof x != null) {
          const zt = i.default.nekoton.decodeTransaction(pt, x.abi, x.method);
          Dt = zt == null ? void 0 : zt.output
        }
      } catch {}
      return {
        transaction: pt,
        output: Dt
      }
    };
    if (G === !0) {
      const pt = $t(60),
        Dt = await St.sendMessageLocally(Z, pt, st);
      return Qt(Dt)
    }
    let Ot = It.message.timeout;
    for (let pt = 0; pt < It.message.retryCount; ++pt) {
      const Dt = $t(Ot),
        zt = await St.sendMessage(Z, Dt);
      if (zt == null) {
        Ot *= It.message.timeoutGrowFactor;
        continue
      }
      return Qt(zt)
    }
    const gt = "Message expired",
      mt = $t(60),
      yt = await St.sendMessageLocally(Z, mt).catch(pt => {
        throw Q(a, `${gt}. ${pt.toString()}`)
      }),
      Lt = yt.exitCode != null ? `. Possible exit code: ${yt.exitCode}` : "";
    throw Q(a, `${gt}${Lt}`)
  }, At = async (I, a) => {
    ke(a, I), lt(a);
    const {
      publicKey: E,
      data: D,
      withSignatureId: x
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "data"), ln(a, a.params, "withSignatureId");
    const G = await le(a, I, x),
      {
        keystore: st
      } = I,
      Z = await st.getSigner(E);
    if (Z == null) throw Q(a, "Signer not found for public key");
    try {
      const ft = i.default.nekoton.getDataHash(D);
      return {
        dataHash: ft,
        ...await Z.sign(ft, G).then(i.default.nekoton.extendSignature)
      }
    } catch (ft) {
      throw Q(a, ft.toString())
    }
  }, Jr = async (I, a) => {
    ke(a, I), lt(a);
    const {
      publicKey: E,
      data: D,
      withSignatureId: x
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "data"), ln(a, a.params, "withSignatureId");
    const G = await le(a, I, x),
      {
        keystore: st
      } = I,
      Z = await st.getSigner(E);
    if (Z == null) throw Q(a, "Signer not found for public key");
    try {
      return await Z.sign(D, G).then(i.default.nekoton.extendSignature)
    } catch (ft) {
      throw Q(a, ft.toString())
    }
  }, Xr = async (I, a) => {
    ke(a, I), an(a, I), jt(a, I), lt(a);
    const {
      sender: E,
      recipient: D,
      amount: x,
      bounce: G,
      payload: st,
      stateInit: Z
    } = a.params;
    q(a, a.params, "sender"), q(a, a.params, "recipient"), q(a, a.params, "amount"), ge(a, a.params, "bounce"), oe(a, a.params, "payload", De), ue(a, a.params, "stateInit");
    const ft = await le(a, I),
      {
        clock: St,
        properties: It,
        subscriptionController: $t,
        connectionController: Qt,
        keystore: Ot,
        accountsStorage: gt
      } = I;
    let mt, yt, Lt;
    try {
      mt = i.default.nekoton.repackAddress(E), yt = i.default.nekoton.repackAddress(D), Lt = await gt.getAccount(mt).then(re => {
        if (re != null) return re;
        throw new Error("Sender not found")
      })
    } catch (re) {
      throw Q(a, re.toString())
    }
    const pt = async re => {
      try {
        return Lt.prepareMessage({
          recipient: yt,
          amount: x,
          bounce: G,
          payload: st,
          stateInit: Z,
          timeout: ~~re,
          signatureId: ft
        }, new f.AccountsStorageContext(St, Qt, i.default.nekoton, Ot))
      } catch (zn) {
        throw Q(a, zn.toString())
      }
    };
    let Dt = It.message.timeout;
    const zt = It.message.retryTransfers !== !1 ? It.message.retryCount : 1;
    for (let re = 0; re < zt; ++re) {
      const zn = await pt(Dt),
        ks = await $t.sendMessage(mt, zn);
      if (ks == null) {
        Dt *= It.message.timeoutGrowFactor;
        continue
      }
      return {
        transaction: ks
      }
    }
    const Re = "Message expired",
      Bt = await pt(60),
      xt = await $t.sendMessageLocally(mt, Bt).catch(re => {
        throw Q(a, `${Re}. ${re.toString()}`)
      }),
      kt = xt.exitCode != null ? `. Possible exit code: ${xt.exitCode}` : "";
    throw Q(a, `${Re}${kt}`)
  }, Yr = async (I, a) => {
    ke(a, I), an(a, I), lt(a), jt(a, I);
    const {
      sender: E,
      recipient: D,
      amount: x,
      bounce: G,
      payload: st,
      stateInit: Z
    } = a.params;
    q(a, a.params, "sender"), q(a, a.params, "recipient"), q(a, a.params, "amount"), ge(a, a.params, "bounce"), oe(a, a.params, "payload", De), ue(a, a.params, "stateInit");
    const ft = await le(a, I),
      {
        clock: St,
        subscriptionController: It,
        connectionController: $t,
        keystore: Qt,
        accountsStorage: Ot,
        notify: gt
      } = I;
    let mt, yt;
    try {
      mt = i.default.nekoton.repackAddress(E), yt = i.default.nekoton.repackAddress(D)
    } catch (pt) {
      throw Q(a, pt.toString())
    }
    let Lt;
    try {
      const pt = await Ot.getAccount(mt);
      if (pt == null) throw new Error("Sender not found");
      Lt = await pt.prepareMessage({
        recipient: yt,
        amount: x,
        bounce: G,
        payload: st,
        stateInit: Z,
        timeout: 60,
        signatureId: ft
      }, new f.AccountsStorageContext(St, $t, i.default.nekoton, Qt))
    } catch (pt) {
      throw Q(a, pt.toString())
    }
    return It.sendMessage(mt, Lt).then(pt => {
      gt("messageStatusUpdated", {
        address: mt,
        hash: Lt.hash,
        transaction: pt
      })
    }).catch(console.error), {
      message: {
        account: mt,
        hash: Lt.hash,
        expireAt: Lt.expireAt
      }
    }
  }, Zr = async (I, a) => {
    ke(a, I), lt(a), jt(a, I);
    const {
      publicKey: E,
      recipient: D,
      stateInit: x,
      payload: G,
      local: st,
      executorParams: Z
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "recipient"), ue(a, a.params, "stateInit"), De(a, a.params, "payload"), We(a, a.params, "local"), on(a, a.params, "executorParams");
    const ft = await le(a, I);
    let St;
    try {
      St = i.default.nekoton.repackAddress(D)
    } catch (Bt) {
      throw Q(a, Bt.toString())
    }
    const {
      clock: It,
      subscriptionController: $t,
      keystore: Qt,
      properties: Ot
    } = I, gt = await Qt.getSigner(E);
    if (gt == null) throw Q(a, "Signer not found for public key");
    const mt = async Bt => {
      let xt;
      try {
        xt = i.default.nekoton.createExternalMessage(It, St, G.abi, G.method, x, G.params, E, ~~Bt)
      } catch (kt) {
        throw Q(a, kt.toString())
      }
      try {
        const kt = await gt.sign(xt.hash, ft);
        return xt.sign(kt)
      } catch (kt) {
        throw Q(a, kt.toString())
      } finally {
        xt.free()
      }
    }, yt = Bt => {
      let xt;
      try {
        const kt = i.default.nekoton.decodeTransaction(Bt, G.abi, G.method);
        xt = kt == null ? void 0 : kt.output
      } catch {}
      return {
        transaction: Bt,
        output: xt
      }
    };
    if (st === !0) {
      const Bt = await mt(60),
        xt = await $t.sendMessageLocally(St, Bt, Z);
      return yt(xt)
    }
    let Lt = Ot.message.timeout;
    for (let Bt = 0; Bt < Ot.message.retryCount; ++Bt) {
      const xt = await mt(Lt),
        kt = await $t.sendMessage(St, xt);
      if (kt == null) {
        Lt *= Ot.message.timeoutGrowFactor;
        continue
      }
      return yt(kt)
    }
    const pt = "Message expired",
      Dt = await mt(60),
      zt = await $t.sendMessageLocally(St, Dt).catch(Bt => {
        throw Q(a, `${pt}. ${Bt.toString()}`)
      }),
      Re = zt.exitCode != null ? `. Possible exit code: ${zt.exitCode}` : "";
    throw Q(a, `${pt}${Re}`)
  }, qr = async (I, a) => {
    ke(a, I), lt(a), jt(a, I);
    const {
      publicKey: E,
      recipient: D,
      stateInit: x,
      payload: G
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "recipient"), ue(a, a.params, "stateInit"), De(a, a.params, "payload");
    const st = await le(a, I);
    let Z;
    try {
      Z = i.default.nekoton.repackAddress(D)
    } catch (yt) {
      throw Q(a, yt.toString())
    }
    const {
      clock: ft,
      subscriptionController: St,
      keystore: It,
      properties: $t,
      notify: Qt
    } = I, Ot = await It.getSigner(E);
    if (Ot == null) throw Q(a, "Signer not found for public key");
    let gt;
    try {
      gt = i.default.nekoton.createExternalMessage(ft, Z, G.abi, G.method, x, G.params, E, ~~$t.message.timeout)
    } catch (yt) {
      throw Q(a, yt.toString())
    }
    let mt;
    try {
      const yt = await Ot.sign(gt.hash, st);
      mt = gt.sign(yt)
    } catch (yt) {
      throw Q(a, yt.toString())
    } finally {
      gt.free()
    }
    return St.sendMessage(Z, mt).then(yt => {
      Qt("messageStatusUpdated", {
        address: Z,
        hash: mt.hash,
        transaction: yt
      })
    }).catch(console.error), {
      message: {
        account: Z,
        hash: mt.hash,
        expireAt: mt.expireAt
      }
    }
  };

  function ke(I, a) {
    if (a.keystore == null) throw Q(I, "Keystore not found")
  }

  function an(I, a) {
    if (a.accountsStorage == null) throw Q(I, "AccountsStorage not found")
  }

  function jt(I, a) {
    if (a.connectionController == null || a.subscriptionController == null) throw Q(I, "Connection was not initialized")
  }
  async function le(I, a, E) {
    if (E !== !1) {
      {
        if (typeof E == "number") return E;
        if (a.connectionController == null) return
      }
      return a.connectionController.use(async ({
        data: {
          transport: D
        }
      }) => D.getSignatureId()).catch(D => {
        throw Q(I, "Failed to fetch signature id")
      })
    }
  }

  function lt(I) {
    if (I.params == null || typeof I.params != "object") throw Q(I, "required params object")
  }

  function he(I, a, E) {
    if (typeof a[E] != "object") throw Q(I, `'${String(E)}' must be an object`)
  }

  function on(I, a, E) {
    const D = a[E];
    if (D != null && typeof D != "object") throw Q(I, `'${String(E)}' must be an object if specified`)
  }

  function ge(I, a, E) {
    if (typeof a[E] != "boolean") throw Q(I, `'${String(E)}' must be a boolean`)
  }

  function We(I, a, E) {
    const D = a[E];
    if (D != null && typeof D != "boolean") throw Q(I, `'${String(E)}' must be a boolean if specified`)
  }

  function q(I, a, E) {
    const D = a[E];
    if (typeof D != "string" || D.length === 0) throw Q(I, `'${String(E)}' must be non-empty string`)
  }

  function ue(I, a, E) {
    const D = a[E];
    if (D != null && (typeof D != "string" || D.length === 0)) throw Q(I, `'${String(E)}' must be a non-empty string if provided`)
  }

  function cn(I, a, E) {
    const D = a[E];
    if (D != null && typeof D != "number") throw Q(I, `'${String(E)}' must be a number if provider`)
  }

  function Bn(I, a, E) {
    const D = a[E];
    if (!Array.isArray(D)) throw Q(I, `'${String(E)}' must be an array`)
  }

  function oe(I, a, E, D) {
    a[E] != null && D(I, a, E)
  }

  function ln(I, a, E) {
    const D = a[E];
    if (D != null && typeof D != "boolean" && typeof D != "number") throw Q(I, `'${String(E)}' must be an optional boolean or number`)
  }

  function ti(I, a, E) {
    he(I, a, E);
    const D = a[E];
    q(I, D, "lt"), q(I, D, "hash")
  }

  function ei(I, a, E) {
    he(I, a, E);
    const D = a[E];
    ge(I, D, "isExact"), q(I, D, "lt"), ue(I, D, "hash")
  }

  function ni(I, a, E) {
    he(I, a, E);
    const D = a[E];
    q(I, D, "boc")
  }

  function xn(I, a, E) {
    he(I, a, E);
    const D = a[E];
    q(I, D, "balance"), oe(I, D, "lastTransactionId", ei), ge(I, D, "isDeployed")
  }

  function De(I, a, E) {
    he(I, a, E);
    const D = a[E];
    q(I, D, "abi"), q(I, D, "method"), he(I, D, "params")
  }

  function vs(I, a, E) {
    const D = a[E];
    if (!(typeof D == "string" || D == null))
      if (typeof D == "object") q(I, D, "abi"), q(I, D, "method"), he(I, D, "params");
      else throw Q(I, `'${String(E)}' must be a function all or optional string`)
  }

  function un(I, a, E) {
    const D = a[E];
    if (D != null && typeof D != "string" && !Array.isArray(D)) throw Q(I, `'${String(E)}' must be a method name or an array of possible names`)
  }
  async function As(I, a) {
    an(I, a), jt(I, a);
    const E = a.accountsStorage.defaultAccount;
    if (E == null) throw Q(I, "Default account not set in accounts storage");
    const D = await a.accountsStorage.getAccount(E);
    if (D == null) throw Q(I, "Default account not found");
    const x = await D.fetchPublicKey(new f.AccountsStorageContext(a.clock, a.connectionController, i.default.nekoton));
    return {
      address: D.address.toString(),
      publicKey: x,
      contractType: "unknown"
    }
  }
  const Q = (I, a, E) => new si(2, `${I.method}: ${a}`, E);
  class si extends Error {
    constructor(a, E, D) {
      if (!Number.isInteger(a)) throw new Error('"code" must be an integer');
      if (!E || typeof E != "string") throw new Error('"message" must be a nonempty string');
      super(E), this.code = a, this.data = D
    }
    serialize() {
      const a = {
        code: this.code,
        message: this.message
      };
      return this.data !== void 0 && (a.data = this.data), this.stack && (a.stack = this.stack), a
    }
    toString() {
      return (0, r.default)(this.serialize(), ri, 2)
    }
  }
  const ri = (I, a) => {
    if (a !== "[Circular]") return a
  }
})(Pr);
(function(n) {
  var t = tt && tt.__createBinding || (Object.create ? function(b, S, A, h) {
      h === void 0 && (h = A);
      var w = Object.getOwnPropertyDescriptor(S, A);
      (!w || ("get" in w ? !S.__esModule : w.writable || w.configurable)) && (w = {
        enumerable: !0,
        get: function() {
          return S[A]
        }
      }), Object.defineProperty(b, h, w)
    } : function(b, S, A, h) {
      h === void 0 && (h = A), b[h] = S[A]
    }),
    e = tt && tt.__setModuleDefault || (Object.create ? function(b, S) {
      Object.defineProperty(b, "default", {
        enumerable: !0,
        value: S
      })
    } : function(b, S) {
      b.default = S
    }),
    s = tt && tt.__importStar || function(b) {
      if (b && b.__esModule) return b;
      var S = {};
      if (b != null)
        for (var A in b) A !== "default" && Object.prototype.hasOwnProperty.call(b, A) && t(S, b, A);
      return e(S, b), S
    },
    r = tt && tt.__exportStar || function(b, S) {
      for (var A in b) A !== "default" && !Object.prototype.hasOwnProperty.call(S, A) && t(S, b, A)
    },
    i = tt && tt.__importDefault || function(b) {
      return b && b.__esModule ? b : {
        default: b
      }
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  const o = s(Pc),
    l = o,
    _ = i(Zt);
  let f = !1,
    p;
  const T = new Promise((b, S) => {
    p = {
      resolve: b,
      reject: S
    }
  });
  _.default.ensureNekotonLoaded = b => (f || (f = !0, (0, o.default)(b).then(p.resolve).catch(p.reject)), T), _.default.nekoton = l, _.default.fetch = fetch, _.default.debugLog = b => {}, r(Pr, n)
})(is);
const Dl = () => {
    const n = gs();
    return {
      getDropItem: ({
        claimId: e,
        airdropName: s
      }) => {
        const r = new is.Clock,
          i = new ve.ProviderRpcClient({
            fallback: () => is.EverscaleStandaloneClient.create({
              clock: r,
              connection: {
                data: {
                  endpoint: "https://jrpc-ton.broxus.com/rpc"
                },
                id: Number(ki.MAINNET),
                type: "jrpc"
              }
            }),
            forceUseFallback: !0
          }),
          o = new gr.AirdropUI({
            account: n.tonConnectUI.value.connector.account,
            onStatusChange: n.tonConnectUI.value.connector.onStatusChange.bind(n.tonConnectUI.value.connector),
            sendTransaction: n.tonConnectUI.value.sendTransaction.bind(n.tonConnectUI.value)
          }, i, r),
          l = me(o.getState());
        n.connectionRestoredPromise.then(() => {
          o.setAirdropName(s), o.setClaimId(e)
        });
        const _ = o.subscribe(b => {
          l.value = b
        });
        return {
          state: ae(() => l.value),
          destroy: () => {
            _(), o.destory()
          },
          claim: async () => await o.claim()
        }
      },
      AirdropStatus: yr
    }
  },
  Rl = {
    class: "pages-wallet-claim-drop-process page"
  },
  Ll = Xt({
    __name: "Process",
    props: {
      point: {},
      asset: {}
    },
    emits: ["close"],
    setup(n) {
      const t = n,
        e = ae(() => {
          if (!t.point.withdrawal) throw Si("Drop is not available");
          return t.point.withdrawal
        }),
        s = gs(),
        r = me(null),
        {
          state: i
        } = ur(),
        {
          getDropItem: o,
          AirdropStatus: l
        } = Dl(),
        _ = {
          soon_dev_1: "soontest",
          dogs_dev_test_3: "blumtest",
          dogs_stage_test_1: "blumtest",
          dogs_stage_test_2: "blumtest",
          soon_stage_1: "soontest",
          dogs_prod_1: "blumprod",
          soon_prod_1: "soonprod",
          fpi_prod_1: "fpibankprod"
        },
        {
          state: f,
          destroy: p,
          claim: T
        } = o({
          claimId: e.value.claimId,
          airdropName: _[e.value.airdropName]
        });
      return Ii(() => ({
        state: f.value,
        walletLocalAndRemoteState: i.value,
        queueComp: r.value
      }), (b, S) => {
        var w;
        if (b.state.status === l.Loading || b.walletLocalAndRemoteState.status !== ts.CONNECTED || !b.queueComp) return;
        const A = new qn(.1),
          h = async () => {
            try {
              return await T(), Yn(!0)
            } catch ($) {
              return fn($)
            }
          };
        if (![l.NoAirdrop, l.NoUser, l.NoReward].includes(f.value.status))
          if (f.value.status === l.InQueue && ((w = f.value.claimData) == null ? void 0 : w.status) === "inQueue") b.queueComp.openWaiting({
            spotPosition: f.value.claimData.place
          });
          else if (f.value.status === l.CanClaim)
          if (f.value.claimLoading) b.queueComp.openTransferring({
            transferringPoints: e.value.amount.toNumber(),
            imageUrl: t.asset.imageUrl,
            symbol: t.asset.symbol
          });
          else {
            const $ = S.state.status !== b.state.status;
            b.queueComp.openReadyToClaim({
              pointsToClaim: e.value.amount.toNumber(),
              imageUrl: t.asset.imageUrl,
              symbol: t.asset.symbol,
              fee: A,
              walletAddress: b.walletLocalAndRemoteState.address,
              tonBalance: b.walletLocalAndRemoteState.tonBalance,
              claimFn: h
            }, $)
          }
        else f.value.status === l.HasClaimed && (b.queueComp.openDone(), S.state.status !== l.HasClaimed && s.tonConnectUI.value.closeModal())
      }), Ci(p), (b, S) => {
        const A = fr,
          h = ko;
        return rt(), ut("div", Rl, [at(A), at(h, {
          ref_key: "queueComp",
          ref: r,
          onClose: S[0] || (S[0] = w => b.$emit("close"))
        }, null, 512)])
      }
    }
  }),
  Fl = Yt(Ll, [
    ["__scopeId", "data-v-99663b12"]
  ]),
  Nl = {
    class: "pages-wallet-block-details-soon-notification-content"
  },
  Kl = {
    class: "title"
  },
  jl = ["innerHTML"],
  $l = Xt({
    __name: "Content",
    emits: ["close"],
    setup(n) {
      return (t, e) => {
        const s = cr,
          r = rn;
        return rt(), ut("div", Nl, [at(s, {
          name: "animations/MoneyWings",
          size: 116
        }), Y("div", Kl, ot(("t" in t ? t.t : U(ct))("wallet.drop.notification.content.title")), 1), Y("div", {
          class: "text",
          innerHTML: ("t" in t ? t.t : U(ct))("wallet.drop.notification.content.text")
        }, null, 8, jl), at(r, {
          label: ("t" in t ? t.t : U(ct))("base.got_it"),
          fill: "",
          class: "button",
          size: U(we).LARGE,
          onClick: e[0] || (e[0] = i => t.$emit("close"))
        }, null, 8, ["label", "size"])])
      }
    }
  }),
  Bl = Yt($l, [
    ["__scopeId", "data-v-7ad98ffe"]
  ]),
  xl = Xt({
    __name: "Sheet",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(n) {
      const t = ir(n, "modelValue");
      return (e, s) => {
        const r = Bl,
          i = hs;
        return rt(), Gt(i, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = o => t.value = o),
          class: "pages-wallet-block-details-soon-notification-sheet"
        }, {
          default: Nt(() => [at(r, {
            onClose: s[0] || (s[0] = o => t.value = !1)
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  zl = Yt(xl, [
    ["__scopeId", "data-v-c6ce1d42"]
  ]),
  Ul = {
    class: "pages-wallet-asset-points"
  },
  Wl = Xt({
    __name: "AssetPoints",
    props: {
      points: {
        type: Array,
        required: !0
      }
    },
    setup(n) {
      const t = n,
        e = Ti(),
        s = b => b.withdrawal ? b.withdrawal.eligible ? {
          highlighted: !0,
          value: ct("wallet.drop.point_description.ready_to_transfer")
        } : {
          highlighted: !1,
          value: ct("wallet.drop.point_description.not_enough")
        } : void 0,
        r = b => ({
          id: b.currencyId,
          name: b.name,
          symbol: b.symbol,
          balance: b.balance,
          fiat: b.fiatValue,
          imageUrl: b.imageUrl,
          clickable: !!f(b),
          description: s(b)
        }),
        i = ae(() => t.points.map(b => ({
          asset: r(b),
          point: b
        }))),
        o = me(),
        l = me(),
        _ = me(!1);

      function f(b) {
        if (["DOGS", "SOON", "FPIBANK"].includes(b.symbol)) return () => {
          b.withdrawal ? p.value.status !== ts.CONNECTED ? e.runConnectionFlow() : o.value = b : _.value = !0
        }
      }
      const p = ur().state,
        T = ae(() => {
          const b = o.value,
            S = b == null ? void 0 : b.withdrawal;
          if (p.value.status !== ts.CONNECTED || !S) return {
            type: "loading"
          };
          const A = r(b);
          if (!S.eligible) return {
            type: "not_enough_to_transfer",
            asset: A,
            amount: b.balance.value,
            minAmount: S.minAmount
          };
          const h = Ei(S.eligibleWalletAddress),
            w = p.value.address;
          return mn.Address.parse(h).equals(mn.Address.parse(w)) ? {
            type: "ready_to_transfer",
            asset: A,
            amount: S.amount,
            walletAddress: h,
            tonBalance: p.value.tonBalance,
            claim: () => {
              l.value = {
                point: b,
                asset: A
              }, o.value = void 0
            }
          } : {
            type: "wrong_wallet_address",
            asset: A,
            eligibleWalletAddress: h
          }
        });
      return (b, S) => {
        const A = aa,
          h = $a,
          w = Fl,
          $ = zl;
        return rt(), ut("div", Ul, [(rt(!0), ut(je, null, fs(U(i), y => (rt(), Gt(A, Ps({
          key: y.asset.id,
          ref_for: !0
        }, y.asset, {
          onClick: v => {
            var m;
            return (m = f(y.point)) == null ? void 0 : m()
          }
        }), null, 16, ["onClick"]))), 128)), at(h, {
          "model-value": !!U(o),
          state: U(T),
          "onUpdate:modelValue": S[0] || (S[0] = y => o.value = void 0)
        }, null, 8, ["model-value", "state"]), U(l) ? (rt(), Gt(w, Ps({
          key: 0
        }, U(l), {
          onClose: S[1] || (S[1] = y => l.value = void 0)
        }), null, 16)) : ce("", !0), at($, {
          modelValue: U(_),
          "onUpdate:modelValue": S[2] || (S[2] = y => rr(_) ? _.value = y : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  eu = Yt(Wl, [
    ["__scopeId", "data-v-14f5566c"]
  ]);
export {
  Ni as _, hr as a, eu as b, Bl as c, Zi as d, aa as e
};