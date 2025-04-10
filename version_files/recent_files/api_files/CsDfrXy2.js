import {
  d as Xt,
  o as st,
  c as ut,
  e as z,
  W as li,
  f as Yt,
  a as Y,
  ad as ui,
  m as Ye,
  t as ct,
  n as Fe,
  M as zt,
  b0 as Cs,
  E as ce,
  b1 as di,
  _ as xe,
  O as _i,
  Z as sr,
  j as ae,
  P as pi,
  Q as rr,
  dt as fi,
  a4 as Ts,
  a7 as dn,
  aL as hn,
  a5 as qn,
  a6 as hs,
  C as ot,
  a8 as ir,
  D as Nt,
  b as at,
  aN as ar,
  y as pe,
  ab as Wn,
  aI as Gn,
  aJ as hi,
  X as we,
  F as je,
  q as gs,
  p as or,
  bl as gi,
  bF as bi,
  x as rn,
  Y as bs,
  H as mi,
  R as wi,
  w as yi,
  ar as vi,
  aw as Es,
  ax as cr,
  be as ms,
  b3 as lr,
  B as ts,
  a1 as es,
  aj as ur,
  an as dr,
  al as Ai,
  b4 as Ps,
  bA as ki,
  aq as Ms,
  ch as tt,
  bz as wn,
  at as Ii,
  cr as _r,
  du as Si,
  cl as Ci,
  a3 as Ti,
  bW as pr,
  U as Ei,
  cd as ns,
  a2 as Pi,
  az as Mi,
  bv as Oi,
  ao as Os,
  dv as Hn,
  dw as _n
} from "./DraiJYMw.js";
import {
  _ as fr
} from "./D2rt8dJr.js";
import {
  _ as hr
} from "./BA_9MPHj.js";
import {
  _ as gr
} from "./-YuCUlNf.js";
import {
  g as Di
} from "./0tUf7IEQ.js";
import {
  _ as br
} from "./Boh4Bjbc.js";
import {
  _ as mr
} from "./C8YP3ozY.js";
import {
  _ as Ri
} from "./DxQDK-K5.js";
import {
  _ as Li
} from "./D4bmK0bU.js";
import {
  a as Fi
} from "./D7FmGsmr.js";
const Ni = ["src"],
  Ki = Xt({
    __name: "Image",
    props: {
      name: {}
    },
    setup(n) {
      return (t, e) => (st(), ut("img", {
        class: "kit-image",
        src: ("imgResolver" in t ? t.imgResolver : z(li))(t.name)
      }, null, 8, Ni))
    }
  }),
  ji = Yt(Ki, [
    ["__scopeId", "data-v-d66ca65e"]
  ]),
  Bi = Xt({
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
        const u = di,
          _ = xe;
        return st(), ut("button", {
          class: Fe(["kit-pill reset", [{
            "is-disabled": i.disabled
          }, `is-type-${e.type??"default"}`]]),
          onClick: o[0] || (o[0] = h => r())
        }, [Y("div", {
          class: Fe(["label", {
            "is-hidden": e.state !== "default"
          }])
        }, [ui(i.$slots, "default", {}, () => [Ye(ct(e.label), 1)], !0)], 2), e.state === "loading" ? (st(), zt(u, {
          key: 0,
          size: 16,
          class: "spinner",
          type: e.type === "dark" ? z(Cs).LIGHT : z(Cs).DARK
        }, null, 8, ["type"])) : e.state === "icon" ? (st(), zt(_, {
          key: 1,
          name: e.icon,
          class: "icon"
        }, null, 8, ["name"])) : ce("", !0)], 2)
      }
    }
  }),
  wr = Yt(Bi, [
    ["__scopeId", "data-v-670973e0"]
  ]),
  Ds = (n, t = 3, e = !1) => ({
    decimal: n,
    formatted: rr(n, {
      accuracy: t,
      trim: e
    })
  }),
  Rs = () => {
    const n = _i(),
      t = sr(),
      e = async () => {
        const {
          res: i,
          transferTime: o
        } = await fi(Ts.startFarming);
        return i.err ? (dn().error(), hn()) : (i.data.currentTime += o, t.internal.setFarming(i.data), qn({}))
      }, s = async () => {
        const i = r.value;
        return i.status !== "done" ? (dn().error(), hn()) : (await Ts.claimFarming()).err ? (dn().error(), hn()) : (hs().makeConfetti(), dn().success(ot("base.you_got_bp", {
          bp: i.balance.formatted
        })), t.internal.setFarming(void 0), t.update(), ir().farming.farmingClaimed(i.balance.decimal), qn({}))
      }, r = ae(() => {
        const i = n.ms100ticker.value,
          o = t.pointSymbols.value.bp;
        if (!i || !o) return {
          status: "loading"
        };
        const u = o.farming;
        if (u === void 0 || i < u.startTime) return {
          status: "ready"
        };
        if (i > u.endTime) {
          const p = u.earningsRate.mul(u.endTime - u.startTime).div(1e3);
          return {
            status: "done",
            balance: Ds(p, 1, !0)
          }
        }
        const _ = (() => {
            const p = Math.max(u.startTime, u.currentTime),
              C = Math.min(u.endTime, i),
              A = Math.max(0, C - p);
            if (A === 0) return u.balance;
            const E = u.earningsRate.mul(A).div(1e3);
            return u.balance.add(E)
          })(),
          h = (i - u.startTime) / (u.endTime - u.startTime) * 100;
        return {
          status: "active",
          balance: Ds(_),
          progress: h,
          timeRemainingLabel: pi(u.endTime - i, "letters")
        }
      });
    return {
      start: e,
      claim: s,
      activeFarming: r
    }
  },
  $i = {
    class: "pages-wallet-asset-farming-slot"
  },
  xi = Xt({
    __name: "AssetFarmingSlot",
    setup(n) {
      const t = Rs().activeFarming,
        {
          start: e,
          claim: s
        } = Rs();
      return (r, i) => {
        const o = wr,
          u = fr,
          _ = xe,
          h = gr;
        return st(), ut("div", $i, [z(t).status === "loading" ? (st(), zt(o, {
          key: 0,
          state: "loading",
          label: ("t" in r ? r.t : z(ot))("base.farm"),
          type: "dark"
        }, null, 8, ["label"])) : z(t).status === "ready" ? (st(), zt(u, {
          key: 1,
          label: ("t" in r ? r.t : z(ot))("base.farm"),
          "can-claim": "",
          "claim-fn": z(e),
          type: "dark"
        }, null, 8, ["label", "claim-fn"])) : z(t).status === "active" ? (st(), zt(h, {
          key: 2,
          nowrap: ""
        }, {
          default: Nt(() => [at(o, {
            label: "",
            state: "default",
            type: "dark",
            class: "farming",
            style: ar({
              "background-position-x": `-${z(t).progress}%`
            })
          }, {
            default: Nt(() => [at(_, {
              name: "clock"
            }), Y("div", null, ct(z(t).balance.formatted) + " BP", 1)]),
            _: 1
          }, 8, ["style"])]),
          inner: Nt(() => [Ye(ct(("t" in r ? r.t : z(ot))("index.farming.left_to_farm", {
            time: z(t).timeRemainingLabel
          })), 1)]),
          _: 1
        })) : z(t).status === "done" ? (st(), zt(u, {
          key: 3,
          label: ("t" in r ? r.t : z(ot))("base.claim_bp", {
            bp: z(t).balance.formatted
          }),
          "can-claim": "",
          "claim-fn": z(s)
        }, null, 8, ["label", "claim-fn"])) : ce("", !0)])
      }
    }
  }),
  zi = Yt(xi, [
    ["__scopeId", "data-v-dace0b45"]
  ]),
  Ui = {
    class: "pages-wallet-asset-memepoint-slot"
  },
  Wi = {
    class: "title"
  },
  Gi = {
    class: "items"
  },
  Hi = ["onClick"],
  Vi = {
    class: "content"
  },
  Qi = {
    class: "label"
  },
  Ji = {
    class: "description"
  },
  Xi = {
    key: 0,
    class: "reward"
  },
  Yi = {
    key: 1,
    class: "postfix"
  },
  Zi = Xt({
    __name: "AssetMemepointSlot",
    setup(n) {
      const t = pe(!1),
        e = () => {
          t.value = !0, ir().wallet.tradeToEarnClick(gi().name)
        },
        s = ae(() => [{
          label: ot("wallet.points.meme_modal.launch_token"),
          icon: "emoji/Seedling",
          reward: {
            mp: 500
          },
          onClick: () => Wn().push({
            name: "memepad-new",
            query: {
              memepadFrom: Gn.TRADE_TO_EARN_MODAL,
              memepadNewFrom: hi.TRADE_TO_EARN_MODAL
            }
          })
        }, {
          label: ot("wallet.points.meme_modal.token_to_dex"),
          icon: "emoji/Clover",
          reward: {
            mp: 1e4
          },
          onClick: () => Wn().push({
            name: "memepad",
            query: {
              memepadFrom: Gn.TRADE_TO_EARN_MODAL
            }
          })
        }, {
          label: ot("wallet.points.meme_modal.trade_on_memepad"),
          icon: "emoji/MoneyWings",
          reward: {
            mp: 50
          },
          postfix: ot("wallet.points.meme_modal.trade_on_memepad_postfix"),
          onClick: () => Wn().push({
            name: "memepad",
            query: {
              memepadFrom: Gn.TRADE_TO_EARN_MODAL
            }
          })
        }, {
          label: ot("wallet.points.meme_modal.trade_with_bot"),
          icon: "emoji/Rocket",
          reward: {
            mp: 750
          },
          postfix: ot("wallet.points.meme_modal.trade_with_bot_postfix"),
          onClick: () => hs().openTradingBot()
        }]),
        r = i => {
          const o = "+" + rr(i.mp) + " Meme points",
            u = i.usd ? "$" + bi(i.usd, {
              trim: !0
            }) : void 0;
          return [o, u].filter(Boolean).join(" / ")
        };
      return (i, o) => {
        const u = wr,
          _ = xe,
          h = ji,
          p = rn,
          C = bs;
        return st(), ut("div", Ui, [at(u, {
          state: "default",
          label: ("t" in i ? i.t : z(ot))("wallet.points.trade_to_earn"),
          type: "dark",
          onClick: o[0] || (o[0] = A => e())
        }, null, 8, ["label"]), at(C, {
          modelValue: z(t),
          "onUpdate:modelValue": o[2] || (o[2] = A => or(t) ? t.value = A : null),
          class: "sheet"
        }, {
          footer: Nt(() => [at(p, {
            fill: "",
            label: ("t" in i ? i.t : z(ot))("base.got_it"),
            size: z(we).LARGE,
            onClick: o[1] || (o[1] = A => t.value = !1)
          }, null, 8, ["label", "size"])]),
          default: Nt(() => [Y("div", Wi, ct(("t" in i ? i.t : z(ot))("wallet.points.meme_modal.title")), 1), Y("div", Gi, [(st(!0), ut(je, null, gs(z(s), (A, E) => (st(), ut("div", {
            key: E,
            class: "item",
            onClick: b => A.onClick()
          }, [Y("div", Vi, [Y("div", Qi, [Y("div", null, ct(A.label), 1), at(_, {
            name: "chevron-right",
            class: "icon"
          })]), Y("div", Ji, [A.reward ? (st(), ut("span", Xi, ct(r(A.reward)), 1)) : ce("", !0), A.postfix ? (st(), ut("span", Yi, ct(" " + A.postfix), 1)) : ce("", !0)])]), at(h, {
            name: A.icon,
            class: "image"
          }, null, 8, ["name"])], 8, Hi))), 128))])]),
          _: 1
        }, 8, ["modelValue"])])
      }
    }
  }),
  qi = Yt(Zi, [
    ["__scopeId", "data-v-4f76e5ef"]
  ]),
  ta = "data:image/webp;base64,UklGRpIDAABXRUJQVlA4IIYDAADQFACdASpsAGwAPpFEnUqlo6KhpVgKILASCWUAWFN9/by89J6Kf9h0ufqZ70BfkvWF/FXooD6r8T5Of5DwvlMXGf5xxH9s96p+AhMV/s3ohaL0hO5eIwlmmSfvE0B/iHwH+KHt3ta1MXqVxXBEOHRidUrpP5WI3s28oSm5yr+d5saE0Cu90p5z1C4RVEyhQ0hNbrGFS2u6zOZZxSXMZdcaZq7ybwcAslHnpnMMrwwwAP702b/3Sfqf6L2yd4xKGEaPJY4FKzh1M6qHoTRODvzoIk3DvrHaRrF8AsmvgwWZWqnakiNQva8SKkShA1kdSB/SUwvJW45zI/9LEvPaExqEPSWJIjrmVckL2WqgCa9zqT+57V0U/VvBat1779n4Pxjih3pQk1pa2dwHjZCP1IgMU/KKzdn71rF01EncXp4sf/EKWRsjcrgXbk+xVDtS1BllgkIbnFmDpnpKm3lE/FCd2P/3+rVvnoxfzPW57yz5HdwfRB4yIIgcnLboTfCVnQMTRHme1F66w6mqU0dIgpwFdQXTUA4b9M//jWr1Om/oVAqXqR0dOWWrxb7Xu5P+y1NhhZ1IODK3ciL8xNE7N2n6cg/BCEOLWRz2lm5gCot1ai25zK5qQuRltxkhhDoCxTqYZaVNx3LxbBgGGpN3XpuR6GkXrZtnRcxXr/sLKKjvilrDQ+SjCcTMIfzLvAbn+sUWcvu57H7m90sO2z0IuuVW4KizGDtsCPZK/008ZXvZjFapbqIeOBKnnzLgMWmXfATvjR6x+1vAWigIu4EcMmkfcYx8M+j48vqSVwcGiFmYZ9uH5KpMTGIhIS/ifAZqffXsvZGGFH7MZuQV7V3fLoHENi1qj8KTj39WFO0rygXc0umNFtIBy2s+kXwcZDv7SkYzzHpfuoEDIjDc1Iyf1+eclPsw5EZeggMlO324jxKKv1Z3Grh2lkUzojlaLGAwCZsU+dKxHojwdQk5t+5/rvPCm8O/wq4E3XXMMpVDxlmP0Gt064Rz67+qWCtmGuR8+rSB0ONJHgakegjQsWtaGpmq6nocsJb/nxcZqEPuNZnFN6fkavpUXu/as9q0CJof5gd91+SbkVnALl9jU7tWb4P8erfM0fXXrCg1DMoNq/CU8e5K3MtGtN254JYdrmJJoSFVJNrfQA5kWQ5ZO43VE1A0KPjDWLIUPxJUwl01WDGuiDuAAAAAAA==",
  ea = ["src"],
  na = {
    class: "compose"
  },
  sa = {
    class: "name"
  },
  ra = {
    key: 1,
    class: "balance"
  },
  ia = {
    key: 0,
    class: "right-slot"
  },
  aa = {
    key: 1,
    class: "fiat"
  },
  oa = Xt({
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
      link: {},
      actionButton: {}
    },
    setup(n) {
      const t = n,
        e = ae(() => t.actionButton ? {
          type: "drop",
          callback: t.actionButton.callback,
          loading: t.actionButton.loading
        } : t.symbol === "BP" ? {
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
          pnl: t.pnlPercent ? Di(t.pnlPercent) : void 0
        }),
        s = ae(() => t.link ? mi : "div");
      return (r, i) => {
        const o = fr,
          u = hr,
          _ = zi,
          h = qi,
          p = wi("img-error");
        return st(), zt(vi(z(s)), {
          to: r.link,
          class: Fe(["pages-wallet-asset", {
            clickable: r.clickable
          }])
        }, {
          default: Nt(() => [yi(Y("img", {
            src: r.imageUrl,
            alt: "Coin item icon",
            class: "icon"
          }, null, 8, ea), [
            [p, z(ta)]
          ]), Y("div", na, [Y("div", sa, ct(r.name), 1), r.description ? (st(), ut("div", {
            key: 0,
            class: Fe(["balance", {
              highlight: r.description.highlighted
            }])
          }, ct(r.description.value), 3)) : (st(), ut("div", ra, ct(r.balance.defaultWithSymbol), 1))]), z(e) ? (st(), ut("div", ia, [z(e).type === "drop" ? (st(), zt(o, {
            key: 0,
            label: ("t" in r ? r.t : z(ot))("base.claim"),
            "can-claim": "",
            loading: z(e).loading,
            "claim-fn": z(e).callback
          }, null, 8, ["label", "loading", "claim-fn"])) : z(e).type === "fiat" ? (st(), ut(je, {
            key: 1
          }, [z(e).value === void 0 ? (st(), zt(u, {
            key: 0,
            class: "fiat-skeleton"
          })) : (st(), ut("div", aa, ct(z(e).value), 1)), z(e).pnl ? (st(), ut("div", {
            key: 2,
            class: Fe(["pnl-label", z(e).pnl.cls])
          }, ct(z(e).pnl.formatted), 3)) : ce("", !0)], 64)) : z(e).type === "farming" ? (st(), zt(_, {
            key: 2
          })) : z(e).type === "memepoint" ? (st(), zt(h, {
            key: 3
          })) : ce("", !0)])) : ce("", !0)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  ca = Yt(oa, [
    ["__scopeId", "data-v-bc147540"]
  ]),
  la = {
    key: 0,
    class: "inner"
  },
  ua = {
    class: "image-wrapper"
  },
  da = {
    class: "title"
  },
  _a = {
    key: 0,
    class: "wrong-wallet-address"
  },
  pa = {
    class: "text"
  },
  fa = {
    class: "buttons"
  },
  ha = {
    class: "wallet"
  },
  ga = {
    class: "icon-wrapper"
  },
  ba = {
    class: "address"
  },
  ma = {
    class: "status"
  },
  wa = {
    class: "label"
  },
  ya = {
    key: 1,
    class: "not-enough-to-transfer"
  },
  va = {
    class: "text"
  },
  Aa = {
    class: "buttons"
  },
  ka = {
    class: "balance"
  },
  Ia = {
    class: "top"
  },
  Sa = {
    class: "asset"
  },
  Ca = ["src"],
  Ta = {
    class: "label"
  },
  Ea = {
    class: "jettons"
  },
  Pa = {
    class: "collected"
  },
  Ma = {
    class: "total"
  },
  Oa = {
    class: "progress"
  },
  Da = {
    key: 2,
    class: "ready-to-transfer"
  },
  Ra = ["innerHTML"],
  La = {
    class: "buttons"
  },
  Fa = {
    class: "wallet"
  },
  Na = {
    class: "icon-wrapper"
  },
  Ka = ["src"],
  ja = {
    class: "ticker"
  },
  Ba = {
    class: "amount"
  },
  $a = Xt({
    __name: "Sheet",
    props: Es({
      state: {}
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: Es(["claim"], ["update:modelValue"]),
    setup(n) {
      const t = cr(n, "modelValue"),
        e = ms(),
        s = i => new es(i.amount).div(i.minAmount).mul(100).toNumber(),
        r = (i, o) => {
          const u = Math.min(new es(i.toFixed(2)).decimalPlaces(), 2);
          return `${ur(i,{accuracy:u})} ${o}`
        };
      return (i, o) => {
        const u = dr,
          _ = xe,
          h = rn,
          p = br,
          C = bs;
        return st(), zt(C, {
          modelValue: t.value,
          "onUpdate:modelValue": o[2] || (o[2] = A => t.value = A),
          class: "pages-wallet-block-details-drop-sheet"
        }, {
          default: Nt(() => [i.state.type !== "loading" ? (st(), ut("div", la, [Y("div", ua, [at(u, {
            name: "animations/MoneyWings",
            size: 96
          })]), Y("div", da, ct(("t" in i ? i.t : z(ot))("wallet.drop.sheet.title")), 1), i.state.type === "wrong_wallet_address" ? (st(), ut("div", _a, [Y("div", pa, ct(("t" in i ? i.t : z(ot))("wallet.drop.sheet.wrong_wallet_address.subtitle", {
            ticker: i.state.asset.symbol
          })), 1), Y("div", fa, [Y("div", ha, [Y("div", ga, [at(_, {
            name: "ton-logo",
            class: "icon"
          })]), Y("div", ba, ct(("sliceWalletAddress" in i ? i.sliceWalletAddress : z(lr))(i.state.eligibleWalletAddress)), 1), Y("div", ma, [at(_, {
            name: "circle-check",
            class: "icon"
          }), Y("div", wa, ct(("t" in i ? i.t : z(ot))("wallet.drop.sheet.wrong_wallet_address.eligible_label")), 1)])]), at(h, {
            label: ("t" in i ? i.t : z(ot))("wallet.reconnect.btn"),
            fill: "",
            size: z(we).LARGE,
            onClick: o[0] || (o[0] = A => z(e).reconnect())
          }, null, 8, ["label", "size"])])])) : i.state.type === "not_enough_to_transfer" ? (st(), ut("div", ya, [Y("div", va, ct(("t" in i ? i.t : z(ot))("wallet.drop.sheet.not_enough_to_transfer.subtitle", {
            ticker: i.state.asset.symbol
          })), 1), Y("div", Aa, [Y("div", ka, [Y("div", Ia, [Y("div", Sa, [Y("img", {
            src: i.state.asset.imageUrl
          }, null, 8, Ca), Y("div", Ta, ct(i.state.asset.symbol), 1)]), Y("div", Ea, [Y("span", Pa, ct(r(i.state.amount, i.state.asset.symbol)), 1), Y("span", Ma, " / " + ct(r(i.state.minAmount, i.state.asset.symbol)), 1)])]), Y("div", Oa, [Y("div", {
            class: "line",
            style: ar({
              "--percent": `${s(i.state)}%`
            })
          }, null, 4)])]), at(h, {
            label: ("t" in i ? i.t : z(ot))("wallet.drop.sheet.not_enough_to_transfer.btn_label"),
            fill: "",
            size: z(we).LARGE,
            type: z(ts).SECONDARY,
            disabled: ""
          }, null, 8, ["label", "size", "type"])])])) : i.state.type === "ready_to_transfer" ? (st(), ut("div", Da, [Y("div", {
            class: "text",
            innerHTML: ("t" in i ? i.t : z(ot))("wallet.drop.sheet.ready_to_transfer.subtitle", {
              ticker: i.state.asset.symbol
            })
          }, null, 8, Ra), Y("div", La, [Y("div", Fa, [Y("div", Na, [Y("img", {
            src: i.state.asset.imageUrl
          }, null, 8, Ka)]), Y("div", ja, ct(i.state.asset.symbol), 1), Y("div", Ba, ct(r(i.state.amount, i.state.asset.symbol)), 1)]), at(h, {
            label: ("t" in i ? i.t : z(ot))("wallet.drop.sheet.ready_to_transfer.btn_label"),
            fill: "",
            size: z(we).LARGE,
            type: z(ts).HIGHLIGHT,
            onClick: o[1] || (o[1] = A => i.state.claim())
          }, null, 8, ["label", "size", "type"])])])) : ce("", !0)])) : (st(), zt(p, {
            key: 1,
            class: "loading"
          }))]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  xa = Yt($a, [
    ["__scopeId", "data-v-ee6ef360"]
  ]),
  za = {
    class: "kit-counter-animation"
  },
  Ua = Xt({
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
      return (s, r) => (st(), ut("div", za, [(st(!0), ut(je, null, gs(z(e), i => (st(), ut("div", {
        key: i.idx,
        class: "el-char-wrapper"
      }, [at(Ai, {
        name: "change-item-transition"
      }, {
        default: Nt(() => [(st(), ut("div", {
          key: i.char,
          class: "el-char"
        }, ct(i.char), 1))]),
        _: 2
      }, 1024)]))), 128))]))
    }
  }),
  Wa = Yt(Ua, [
    ["__scopeId", "data-v-191230a7"]
  ]),
  Ga = {
    class: "pages-wallet-block-details-drop-claim-button"
  },
  Ha = {
    class: "details"
  },
  Va = {
    class: "wallet"
  },
  Qa = {
    key: 1,
    class: "fees"
  },
  Ja = Xt({
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
          if (e.tonBalance && e.tonBalance.value.lt(e.fee)) return ot("memepad.jetton.not_enough_error", {
            ticker: "TON"
          })
        }),
        i = pe(!1),
        o = ae(() => i.value || !e.tonBalance),
        u = async () => {
          o.value || r.value || (i.value = !0, await e.claimFn(), i.value = !1, s("claim"))
        };
      return (_, h) => {
        const p = hr,
          C = xe,
          A = Li,
          E = gr,
          b = rn;
        return st(), ut("div", Ga, [Y("div", Ha, [z(o) ? (st(), ut(je, {
          key: 0
        }, [at(p, {
          class: "skeleton"
        }), at(p, {
          class: "skeleton"
        })], 64)) : (st(), ut(je, {
          key: 1
        }, [Y("div", Va, [at(C, {
          name: "connected-wallet",
          class: "icon"
        }), Y("span", null, ct(("sliceWalletAddress" in _ ? _.sliceWalletAddress : z(lr))(_.walletAddress)), 1)]), z(r) ? (st(), zt(A, {
          key: 0,
          "error-message": z(r)
        }, null, 8, ["error-message"])) : (st(), ut("div", Qa, [at(E, {
          "text-min-width": 155,
          alignment: z(ki).TOP
        }, {
          default: Nt(() => [at(C, {
            name: "circle-help",
            class: "icon"
          })]),
          inner: Nt(() => [Y("div", null, ct(`${("t"in _?_.t:z(ot))("memepad.jetton.fees_network")}: ${("formatTon"in _?_.formatTon:z(Ps))(_.fee)} TON`), 1)]),
          _: 1
        }, 8, ["alignment"]), Y("span", null, ct(`${("t"in _?_.t:z(ot))("memepad.jetton.fees_base")}: ${`${("formatTon"in _?_.formatTon:z(Ps))(_.fee)} TON`}`), 1)]))], 64))]), at(b, {
          type: z(ts).HIGHLIGHT,
          size: z(we).LARGE,
          loading: z(o),
          disabled: !!z(r),
          onClick: h[0] || (h[0] = f => u())
        }, {
          default: Nt(() => [Ye(ct(("t" in _ ? _.t : z(ot))("wallet.drop.queue_page.ready_to_claim.btn_label")), 1)]),
          _: 1
        }, 8, ["type", "size", "loading", "disabled"])])
      }
    }
  }),
  Xa = Yt(Ja, [
    ["__scopeId", "data-v-4e5d856f"]
  ]),
  Ya = {
    key: 0,
    class: "loading"
  },
  Za = {
    key: 1,
    class: "waiting inner"
  },
  qa = {
    class: "title"
  },
  to = {
    class: "status"
  },
  eo = {
    class: "text"
  },
  no = {
    class: "footer is-single"
  },
  so = {
    class: "note"
  },
  ro = {
    key: 2,
    class: "ready-to-claim inner"
  },
  io = {
    class: "image-wrapper"
  },
  ao = ["src"],
  oo = {
    class: "title"
  },
  co = {
    class: "status"
  },
  lo = {
    class: "text"
  },
  uo = {
    class: "footer"
  },
  _o = {
    key: 3,
    class: "transferring inner"
  },
  po = {
    class: "image-wrapper"
  },
  fo = ["src"],
  ho = {
    class: "title"
  },
  go = {
    class: "status"
  },
  bo = {
    class: "text"
  },
  mo = {
    class: "footer"
  },
  wo = {
    key: 4,
    class: "done"
  },
  yo = {
    class: "icon-wrapper"
  },
  vo = {
    class: "icon-inner"
  },
  Ao = {
    class: "title"
  },
  ko = {
    class: "subtitle"
  },
  Io = Xt({
    __name: "QueuePage",
    emits: ["close"],
    setup(n, {
      expose: t
    }) {
      Fi("pages-wallet-block-points-claim-page");
      const e = pe({
          status: "loading"
        }),
        s = ({
          points: _
        }) => {
          const h = ["amount"];
          return _ > 1e3 && h.push("is-many"), Ms("div", {
            class: h
          }, Ms(Wa, {
            value: ur(_, {
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
          imageUrl: h,
          symbol: p,
          walletAddress: C,
          fee: A,
          tonBalance: E,
          claimFn: b
        }, f) => {
          e.value = {
            status: "ready_to_claim",
            pointsToClaim: _,
            imageUrl: h,
            symbol: p,
            walletAddress: C,
            fee: A,
            tonBalance: E,
            claimFn: b
          }, f && hs().makeConfetti()
        },
        openTransferring: ({
          transferringPoints: _,
          imageUrl: h,
          symbol: p
        }) => {
          e.value = {
            status: "transferring",
            transferringPoints: _,
            imageUrl: h,
            symbol: p
          }
        },
        openDone: () => {
          e.value = {
            status: "done"
          }
        }
      }), (_, h) => {
        const p = br,
          C = mr,
          A = Ri,
          E = Xa,
          b = rn,
          f = xe;
        return st(), ut("div", {
          class: Fe(["pages-wallet-block-points-claim-page page", `is-${z(e).status.toLowerCase()}`])
        }, [z(e).status === "loading" ? (st(), ut("div", Ya, [at(p)])) : z(e).status === "waiting" ? (st(), ut("div", Za, [at(C), Y("div", qa, ct(("t" in _ ? _.t : z(ot))("wallet.drop.queue_page.waiting.title")), 1), at(s, {
          points: z(e).spotPosition
        }, null, 8, ["points"]), Y("div", to, [h[2] || (h[2] = Y("div", {
          class: "ping-dot"
        }, null, -1)), Y("span", eo, ct(("t" in _ ? _.t : z(ot))("wallet.drop.queue_page.waiting.status")), 1)]), at(A, null, {
          default: Nt(() => [Y("div", no, [Y("div", so, ct(("t" in _ ? _.t : z(ot))("wallet.drop.queue_page.waiting.note_dogs")), 1)])]),
          _: 1
        })])) : z(e).status === "ready_to_claim" ? (st(), ut("div", ro, [at(C), Y("div", io, [Y("img", {
          src: z(e).imageUrl,
          alt: "Point image"
        }, null, 8, ao)]), Y("div", oo, ct(z(e).symbol), 1), at(s, {
          points: z(e).pointsToClaim
        }, null, 8, ["points"]), Y("div", co, [h[3] || (h[3] = Y("div", {
          class: "ping-dot"
        }, null, -1)), Y("span", lo, ct(("t" in _ ? _.t : z(ot))("wallet.drop.queue_page.ready_to_claim.status")), 1)]), at(A, null, {
          default: Nt(() => [Y("div", uo, [at(E, {
            "wallet-address": z(e).walletAddress,
            fee: z(e).fee,
            "ton-balance": z(e).tonBalance,
            "claim-fn": z(e).claimFn
          }, null, 8, ["wallet-address", "fee", "ton-balance", "claim-fn"])])]),
          _: 1
        })])) : z(e).status === "transferring" ? (st(), ut("div", _o, [at(C), Y("div", po, [Y("img", {
          src: z(e).imageUrl,
          alt: "Point image"
        }, null, 8, fo)]), Y("div", ho, ct(z(e).symbol), 1), at(s, {
          points: z(e).transferringPoints
        }, null, 8, ["points"]), Y("div", go, [h[4] || (h[4] = Y("div", {
          class: "ping-dot"
        }, null, -1)), Y("span", bo, ct(("t" in _ ? _.t : z(ot))("wallet.drop.queue_page.transferring.status")), 1)]), at(A, null, {
          default: Nt(() => [Y("div", mo, [at(b, {
            size: z(we).LARGE,
            class: "button",
            onClick: h[0] || (h[0] = w => _.$emit("close"))
          }, {
            default: Nt(() => [Ye(ct(("t" in _ ? _.t : z(ot))("base.got_it")), 1)]),
            _: 1
          }, 8, ["size"])])]),
          _: 1
        })])) : z(e).status === "done" ? (st(), ut("div", wo, [Y("div", yo, [Y("div", vo, [at(f, {
          name: "check-big",
          class: "icon"
        })])]), Y("div", Ao, ct(("t" in _ ? _.t : z(ot))("wallet.drop.queue_page.done.title")), 1), Y("div", ko, ct(("t" in _ ? _.t : z(ot))("wallet.drop.queue_page.done.subtitle")), 1), at(A, null, {
          default: Nt(() => [at(b, {
            size: z(we).LARGE,
            class: "button",
            onClick: h[1] || (h[1] = w => _.$emit("close"))
          }, {
            default: Nt(() => [Ye(ct(("t" in _ ? _.t : z(ot))("wallet.drop.queue_page.done.btn_label")), 1)]),
            _: 1
          }, 8, ["size"])]),
          _: 1
        })])) : ce("", !0)], 2)
      }
    }
  }),
  So = Yt(Io, [
    ["__scopeId", "data-v-5cc03656"]
  ]);
var yr = {},
  ve = {},
  Tt = {},
  Be = {};
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.getUniqueId = n.mergeTransactions = n.LT_COLLATOR = n.Semaphore = n.DelayedTransactions = n.MessageExpiredException = n.AddressLiteral = n.isAddressObject = n.Address = void 0;
  class t {
    constructor(b) {
      this.equals = f => this._equals(f), this._address = b
    }
    toString() {
      return this._address
    }
    toJSON() {
      return this._address
    }
    _equals(b) {
      return typeof b == "string" ? this._address === b : this._address === (b == null ? void 0 : b._address)
    }
  }
  n.Address = t;

  function e(E) {
    return E != null && (E instanceof t || Object.getPrototypeOf(E).constructor.name === t.prototype.constructor.name)
  }
  n.isAddressObject = e;
  class s extends t {
    constructor(b) {
      super(b)
    }
  }
  n.AddressLiteral = s;
  class r extends Error {
    constructor(b, f) {
      super("Message expired"), this.address = b, this.hash = f
    }
  }
  n.MessageExpiredException = r;
  class i {
    constructor() {
      this.transactions = new Map
    }
    async waitTransaction(b, f) {
      var w;
      let B = (w = this.transactions.get(f)) === null || w === void 0 ? void 0 : w.promise;
      if (B == null) {
        let y, m;
        B = new Promise((L, j) => {
          y = $ => L($), m = () => j()
        }), this.transactions.set(f, {
          promise: B,
          resolve: y,
          reject: m
        })
      }
      const v = await B;
      if (v == null) throw new r(b, f);
      return v
    }
    fillTransaction(b, f) {
      const w = this.transactions.get(b);
      w != null ? w.resolve(f) : this.transactions.set(b, {
        promise: Promise.resolve(f),
        resolve: () => {},
        reject: () => {}
      })
    }
  }
  n.DelayedTransactions = i;
  class o {
    constructor(b) {
      this.tasks = [], this.sched = () => {
        var f;
        this.count > 0 && this.tasks.length > 0 && (this.count--, (f = this.tasks.shift()) === null || f === void 0 || f())
      }, this.count = b
    }
    acquire() {
      return new Promise((b, f) => {
        this.tasks.push(() => {
          let w = !1;
          b(() => {
            w || (w = !0, this.count++, this.sched())
          })
        }), _(this.sched)
      })
    }
    releaseAll() {
      for (var b; this.tasks.length > 0;)(b = this.tasks.shift()) === null || b === void 0 || b()
    }
  }
  n.Semaphore = o;

  function u(E) {
    const b = document.createTextNode("");
    let f, w, B = 0,
      v = 0;
    return new E(function() {
        let y;
        if (f) w && (f = w.slice(v).concat(f));
        else {
          if (!w) return;
          f = w
        }
        if (w = f, f = null, v = 0, typeof w == "function") {
          y = w, w = null, y();
          return
        }
        for (b.data = B = ++B % 2; v < w.length;) y = w[v], v++, v === w.length && (w = null), y()
      }).observe(b, {
        characterData: !0
      }),
      function(y) {
        if (f) {
          typeof f == "function" ? f = [f, y] : f.push(y);
          return
        }
        f = y, b.data = B = ++B % 2
      }
  }
  const _ = function() {
    if (typeof queueMicrotask == "function") return queueMicrotask;
    if (typeof document == "object" && document) {
      if (typeof MutationObserver == "function") return u(MutationObserver);
      if (typeof window.WebKitMutationObserver == "function") return u(window.WebKitMutationObserver)
    }
    if (typeof setImmediate == "function") return setImmediate;
    if (typeof setTimeout == "function" || typeof setTimeout == "object") return function(E) {
      setTimeout(E, 0)
    };
    throw new Error("No `nextTick` implementation found")
  }();
  n.LT_COLLATOR = new Intl.Collator(void 0, {
    numeric: !0,
    sensitivity: "base"
  });

  function h(E, b, f) {
    if (f.batchType === "old") return E.push(...b), E;
    if (E.length === 0) return E.push(...b), E;
    let w = 0;
    for (; w < E.length && n.LT_COLLATOR.compare(E[w].id.lt, f.maxLt) >= 0;) ++w;
    return E.splice(w, 0, ...b), E
  }
  n.mergeTransactions = h;
  const p = 4294967295;
  let C = Math.floor(Math.random() * p);

  function A() {
    return C = (C + 1) % p, C
  }
  n.getUniqueId = A
})(Be);
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
Tt.parsePartialTokensObject = Tt.parseTokensObject = Tt.serializeTokensObject = Tt.parseAccountInteraction = Tt.parsePermissions = Tt.parseMessage = Tt.serializeMessage = Tt.parseTransaction = Tt.serializeTransaction = void 0;
const Ze = Be;

function Co(n) {
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
    inMessage: ss(n.inMessage),
    outMessages: n.outMessages.map(ss)
  }
}
Tt.serializeTransaction = Co;

function To(n) {
  return {
    ...n,
    inMessage: rs(n.inMessage),
    outMessages: n.outMessages.map(rs)
  }
}
Tt.parseTransaction = To;

function ss(n) {
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
Tt.serializeMessage = ss;

function rs(n) {
  return {
    ...n,
    src: n.src ? new Ze.Address(n.src) : void 0,
    dst: n.dst ? new Ze.Address(n.dst) : void 0
  }
}
Tt.parseMessage = rs;

function Eo(n) {
  return {
    ...n,
    accountInteraction: n.accountInteraction ? vr(n.accountInteraction) : void 0
  }
}
Tt.parsePermissions = Eo;

function vr(n) {
  return {
    ...n,
    address: new Ze.Address(n.address)
  }
}
Tt.parseAccountInteraction = vr;

function Po(n) {
  return is(n)
}
Tt.serializeTokensObject = Po;

function is(n) {
  if (typeof n == "object" && (0, Ze.isAddressObject)(n)) return n.toString();
  if (Array.isArray(n)) {
    const t = [];
    for (const e of n) t.push(is(e));
    return t
  } else if (n != null && typeof n == "object") {
    const t = {};
    for (const [e, s] of Object.entries(n)) t[e] = is(s);
    return t
  } else return n
}

function Mo(n, t) {
  const e = {};
  for (const s of n) e[s.name] = Ce(s, t[s.name]);
  return e
}
Tt.parseTokensObject = Mo;

function Oo(n, t) {
  const e = {};
  for (const s of n) Object.prototype.hasOwnProperty.call(t, s.name) && (e[s.name] = Ce(s, !t[s.name]));
  return e
}
Tt.parsePartialTokensObject = Oo;

function Ce(n, t) {
  if (n.type.startsWith("map")) {
    const e = n.type.indexOf(","),
      s = n.type.slice(4, e),
      r = n.type.slice(e + 1, -1),
      i = [];
    for (const [o, u] of t) i.push([Ce({
      name: "",
      type: s
    }, o), Ce({
      name: "",
      type: r,
      components: n.components
    }, u)]);
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
      for (const u of t) o.push(Ce(i, u));
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
const Je = Be,
  Do = Tt;
class Ro {
  constructor(t) {
    this.provider = t, this.subscriptions = new Map, this.scanners = new Map, this.unsubscribe = async () => this._unsubscribe()
  }
  transactions(t) {
    return this._addSubscription("transactionsFound", t, !1)
  }
  trace(t) {
    const e = (0, Je.getUniqueId)();
    return new Gt((s, r) => {
      const i = new Fo(this.provider, {
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
    }, Vn, !0)
  }
  oldTransactions(t, e) {
    const s = (0, Je.getUniqueId)();
    return new Gt((r, i) => {
      const o = new Lo(this.provider, {
        address: t,
        onData: r,
        onEnd: u => {
          this.scanners.delete(s), i(u)
        },
        ...e
      });
      return this.scanners.set(s, o), o.start(), Promise.resolve()
    }, async () => {
      const r = this.scanners.get(s);
      r != null && (this.scanners.delete(s), await r.stop())
    }, Vn, !0)
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
      i = u => {
        const _ = this.subscriptions.get(r);
        if (_ == null) return;
        const h = _[t];
        if (h != null) {
          const p = h.handlers.get(u);
          if (p != null) {
            h.handlers.delete(u);
            const {
              queue: C,
              onEnd: A,
              state: E
            } = p;
            E.finished || (E.finished = !0, C.clear(), C.enqueue(async () => A(E.eof)))
          }
          if (h.handlers.size === 0) {
            const C = h.subscription;
            delete _[t], C.then(A => A.unsubscribe()).catch(console.debug)
          }
        }
        _.contractStateChanged == null && _.transactionsFound == null && this.subscriptions.delete(r)
      },
      o = (0, Je.getUniqueId)();
    return new Gt((u, _) => {
      const h = this.subscriptions.get(r);
      let p = h == null ? void 0 : h[t];
      const C = {
          eof: !1,
          finished: !1
        },
        A = {
          onData: u,
          onEnd: _,
          queue: new ws,
          state: C
        };
      if (p != null) return p.handlers.set(o, A), Promise.resolve();
      const E = new Map;
      E.set(o, A);
      const b = this.provider.subscribe(t, {
        address: e
      }).then(f => (f.on("data", w => {
        for (const {
            onData: B,
            queue: v,
            state: y
          }
          of E.values()) y.eof || y.finished || v.enqueue(async () => {
          await B(w) || (y.eof = !0, i(o))
        })
      }), f.on("unsubscribed", () => {
        for (const w of E.keys()) i(w)
      }), f)).catch(f => {
        console.error(f);
        for (const w of E.keys()) i(w);
        throw f
      });
      return p = {
        subscription: b,
        handlers: E
      }, h == null ? this.subscriptions.set(r, {
        [t]: p
      }) : h[t] = p, b.then(() => {})
    }, () => i(o), Vn, s)
  }
}
qe.Subscriber = Ro;
async function Vn(n, t) {
  return t(n)
}
class Gt {
  constructor(t, e, s, r) {
    this.makeProducer = t, this.stopProducer = e, this.extractor = s, this.isFinite = r, this.fold = this.onlyFinite((i, o, u) => {
      let _ = i;
      return new Promise((h, p) => {
        const C = this.makeProducer(A => this.extractor(A, async E => (_ = await o(_, E), !0)), A => {
          A ? h(_) : p(new Error("Subscription closed"))
        });
        u != null && (u.subscribed = C)
      })
    }), this.finished = this.onlyFinite(i => new Promise((o, u) => {
      const _ = this.makeProducer(h => this.extractor(h, p => !0), h => {
        h ? o(void 0) : u(new Error("Subscription closed"))
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
          u = this.fold(r, i, o);
        return {
          subscribed: o.subscribed,
          result: u
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
      const i = this.makeProducer(o => this.extractor(o, u => (Object.assign(e, {
        found: !0,
        result: u
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
    return new Gt((e, s) => {
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
    return new Gt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => s({
      index: t.index++,
      item: r
    })), this.isFinite)
  }
  tap(t) {
    return new Gt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => (await t(r), s(r))), this.isFinite)
  }
  filter(t) {
    return new Gt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => await t(r) ? s(r) : !0), this.isFinite)
  }
  filterMap(t) {
    return new Gt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => {
      const i = await t(r);
      return i !== void 0 ? s(i) : !0
    }), this.isFinite)
  }
  map(t) {
    return new Gt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => {
      const i = await t(r);
      return s(i)
    }), this.isFinite)
  }
  flatMap(t) {
    return new Gt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => {
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
    return new Gt(this.makeProducer, this.stopProducer, (s, r) => this.extractor(s, i => e.index >= t ? r(i) : (++e.index, !0)), this.isFinite)
  }
  skipWhile(t) {
    const e = {
      shouldSkip: !0
    };
    return new Gt(this.makeProducer, this.stopProducer, (s, r) => this.extractor(s, async i => !e.shouldSkip || !await t(i) ? (e.shouldSkip = !1, r(i)) : !0), this.isFinite)
  }
  take(t) {
    const e = {
      index: 0
    };
    return new Gt(this.makeProducer, this.stopProducer, (s, r) => this.extractor(s, i => e.index < t ? (++e.index, r(i) && e.index < t) : !1), !0)
  }
  takeWhile(t) {
    return new Gt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => await t(r) ? s(r) : !1), !0)
  }
  takeWhileMap(t) {
    return new Gt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => {
      const i = await t(r);
      return i !== void 0 ? s(i) : !1
    }), !0)
  }
  onlyFinite(t) {
    if (this.isFinite) return t
  }
}
class Lo {
  constructor(t, e) {
    this.provider = t, this.params = e, this.queue = new ws, this.isRunning = !1
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
        const i = s.filter(u => (t.fromLt == null || Je.LT_COLLATOR.compare(u.id.lt, t.fromLt) > 0) && (t.fromUtime == null || u.createdAt > t.fromUtime));
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
class Fo {
  constructor(t, e) {
    this.provider = t, this.params = e, this.queue = new ws, this.isRunning = !1, this.semaphore = new Je.Semaphore(10)
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
              let h = 500;
              for (;;) {
                const p = await this.semaphore.acquire();
                if (o.stopped) {
                  p();
                  return
                }
                const C = await t.rawApi.findTransaction({
                  inMessageHash: i
                }).catch(() => ({
                  transaction: void 0
                })).finally(() => p());
                if (o.stopped) return;
                if (C.transaction != null) {
                  const b = (0, Do.parseTransaction)(C.transaction);
                  return b.account = b.inMessage.dst, b
                }
                let A;
                const E = new Promise((b, f) => {
                  A = () => b(), o.reject = () => f()
                });
                if (o.timeout = setTimeout(A, h), await E, o.stopped) return;
                o.reject = void 0, h = Math.min(h * 2, 3e3)
              }
            })(),
            reject: () => {
              var h;
              o.stopped = !0, (h = o.reject) === null || h === void 0 || h.call(o), o.timeout != null && clearTimeout(o.timeout)
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
          const o = i.outMessages.filter(u => u.dst != null).map(u => {
            const _ = u.hash;
            return s(_)
          });
          this.pendingTransactions = o;
          for (const {
              promise: u
            }
            of o) {
            const _ = await u;
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
class ws {
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
const Le = Be,
  Mt = Tt;
class No {
  constructor(t, e, s) {
    if (!Array.isArray(e.functions)) throw new Error("Invalid abi. Functions array required");
    if (!Array.isArray(e.events)) throw new Error("Invalid abi. Events array required");
    this._provider = t, this._abi = JSON.stringify(e), this.methodsAbi = e.functions.reduce((r, i) => (i.inputs == null && (i.inputs = []), i.outputs == null && (i.outputs = []), r[i.name] = i, r), {}), this.eventsAbi = e.events.reduce((r, i) => (i.inputs == null && (i.inputs = []), r[i.name] = i, r), {}), this.fieldsAbi = e.fields, this._address = s, this._methods = new Proxy({}, {
      get: (r, i) => {
        const o = this.methodsAbi[i];
        return (u = {}) => new Ko(this._provider, o, this._abi, this._address, i, u)
      }
    }), this._fields = new Proxy({}, {
      get: (r, i) => async (o = {}) => {
        await this._provider.ensureInitialized();
        const {
          fields: u,
          state: _
        } = await this._provider.rawApi.getContractFields({
          address: this._address.toString(),
          abi: this._abi,
          cachedState: o == null ? void 0 : o.cachedState,
          allowPartial: (o == null ? void 0 : o.allowPartial) == null ? !1 : o.allowPartial
        });
        if (u == null) throw _ == null ? new Error("Account does not exist") : _.isDeployed ? new Error("Invalid account data") : new Error("Account is not deployed");
        const h = (0, Mt.parseTokensObject)(this.fieldsAbi, u);
        if (h == null || !Object.prototype.hasOwnProperty.call(h, i)) throw new Error("Unknown field");
        return h[i]
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
    const u = await ((e == null ? void 0 : e.fromLt) != null || (e == null ? void 0 : e.fromUtime) != null ? i.oldTransactions(this._address, e).merge(i.transactions(this._address)) : i.transactions(this.address)).flatMap(_ => _.transactions).takeWhile(_ => e == null || (e.fromLt == null || Le.LT_COLLATOR.compare(_.id.lt, e.fromLt) > 0) && (e.fromUtime == null || _.createdAt > e.fromUtime) && (e.toLt == null || Le.LT_COLLATOR.compare(_.id.lt, e.toLt) < 0) && (e.toUtime == null || _.createdAt < e.toUtime)).flatMap(_ => this.decodeTransactionEvents({
      transaction: _
    }).then(h => (h.forEach(p => p.transaction = _), h))).filterMap(async _ => {
      if (r == null || await r(_)) return _
    }).first();
    return o && await i.unsubscribe(), u
  }
  async getPastEvents(t) {
    const {
      range: e,
      filter: s,
      limit: r
    } = t, i = typeof s == "string" ? ({
      event: _
    }) => _ === s : s, o = [];
    let u = t == null ? void 0 : t.continuation;
    t: for (;;) {
      const {
        transactions: _,
        continuation: h
      } = await this._provider.getTransactions({
        address: this._address,
        continuation: u
      });
      if (_.length === null) break;
      const p = _.filter(C => ((e == null ? void 0 : e.fromLt) == null || Le.LT_COLLATOR.compare(C.id.lt, e.fromLt) > 0) && ((e == null ? void 0 : e.fromUtime) == null || C.createdAt > e.fromUtime) && ((e == null ? void 0 : e.toLt) == null || Le.LT_COLLATOR.compare(C.id.lt, e.toLt) < 0) && ((e == null ? void 0 : e.toUtime) == null || C.createdAt < e.toUtime));
      if (p.length > 0) {
        const C = await Promise.all(p.map(async A => ({
          tx: A,
          events: await this.decodeTransactionEvents({
            transaction: A
          }).then(E => (E.forEach(b => b.transaction = A), E))
        })));
        for (let {
            tx: A,
            events: E
          }
          of C) {
          i != null && (E = await Promise.all(E.map(async b => await i(b) ? b : void 0)).then(b => b.filter(f => f != null))), u = A.id;
          for (const b of E) {
            if (r != null && o.length >= r) break t;
            o.push(b)
          }
          if (r != null && o.length >= r) break t
        }
      }
      if (u = h, u == null) break
    }
    return {
      events: o,
      continuation: u
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
Pe.Contract = No;
class Ar extends Error {
  constructor(t) {
    super(`TvmException: ${t}`), this.code = t
  }
}
Pe.TvmException = Ar;
class Ko {
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
      const o = new Promise(E => {
          i = b => E(b)
        }),
        u = [];
      e.transactions(this.address).flatMap(E => E.transactions).filter(E => {
        var b;
        return ((b = E.inMessage.src) === null || b === void 0 ? void 0 : b.equals(t.from)) || !1
      }).on(E => {
        r == null ? u.push(E) : r.possibleMessages.findIndex(b => b.hash == E.inMessage.hash) >= 0 && (i == null || i(E))
      });
      const _ = await this.send(t),
        h = _.outMessages.filter(E => {
          var b;
          return ((b = E.dst) === null || b === void 0 ? void 0 : b.equals(this.address)) || !1
        });
      r = {
        transaction: _,
        possibleMessages: h
      };
      const p = u.find(E => h.findIndex(b => b.hash == E.inMessage.hash) >= 0);
      p != null && (i == null || i(p));
      const C = await o;
      let A;
      try {
        const E = await this.provider.rawApi.decodeTransaction({
          transaction: (0, Mt.serializeTransaction)(C),
          abi: this.abi,
          method: this.method
        });
        E != null && (A = this.functionAbi.outputs != null ? (0, Mt.parseTokensObject)(this.functionAbi.outputs, E.output) : {})
      } catch (E) {
        console.error(E)
      }
      return {
        parentTransaction: r.transaction,
        childTransaction: C,
        output: A
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
    if (e == null || s != 0) throw new Ar(s);
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
var kr = {};
Object.defineProperty(kr, "__esModule", {
  value: !0
});
(function(n) {
  var t = tt && tt.__createBinding || (Object.create ? function(y, m, L, j) {
      j === void 0 && (j = L);
      var $ = Object.getOwnPropertyDescriptor(m, L);
      (!$ || ("get" in $ ? !m.__esModule : $.writable || $.configurable)) && ($ = {
        enumerable: !0,
        get: function() {
          return m[L]
        }
      }), Object.defineProperty(y, j, $)
    } : function(y, m, L, j) {
      j === void 0 && (j = L), y[j] = m[L]
    }),
    e = tt && tt.__setModuleDefault || (Object.create ? function(y, m) {
      Object.defineProperty(y, "default", {
        enumerable: !0,
        value: m
      })
    } : function(y, m) {
      y.default = m
    }),
    s = tt && tt.__importStar || function(y) {
      if (y && y.__esModule) return y;
      var m = {};
      if (y != null)
        for (var L in y) L !== "default" && Object.prototype.hasOwnProperty.call(y, L) && t(m, y, L);
      return e(m, y), m
    },
    r = tt && tt.__exportStar || function(y, m) {
      for (var L in y) L !== "default" && !Object.prototype.hasOwnProperty.call(m, L) && t(m, y, L)
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.ProviderNotInitializedException = n.ProviderNotFoundException = n.ProviderRpcClient = n.hasEverscaleProvider = n.LT_COLLATOR = n.isAddressObject = n.mergeTransactions = n.MessageExpiredException = n.AddressLiteral = n.Address = n.Subscriber = void 0;
  const i = Tt,
    o = Be,
    u = s(qe),
    _ = s(Pe);
  r(kr, n), r(Tt, n), r(Pe, n);
  var h = qe;
  Object.defineProperty(n, "Subscriber", {
    enumerable: !0,
    get: function() {
      return h.Subscriber
    }
  });
  var p = Be;
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
  const C = typeof window < "u" && typeof window.document < "u";
  let A;
  !C || document.readyState === "complete" ? A = Promise.resolve() : A = new Promise(y => {
    window.addEventListener("load", () => {
      y()
    })
  });
  const E = () => C ? window.__ever || window.ton : void 0;
  async function b() {
    return C ? (await A, window.__hasEverscaleProvider === !0 || window.hasTonProvider === !0) : !1
  }
  n.hasEverscaleProvider = b;
  class f {
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
      const L = this;
      class j extends _.Contract {
        constructor(d, g) {
          super(L, d, g)
        }
      }
      this.Contract = j;
      class $ extends u.Subscriber {
        constructor() {
          super(L)
        }
      }
      this.Subscriber = $, this._api = new Proxy({}, {
        get: (l, d) => g => {
          if (this._provider != null) return this._provider.request({
            method: d,
            params: g
          });
          throw new B
        }
      }), m.forceUseFallback === !0 ? this._initializationPromise = m.fallback != null ? m.fallback().then(l => {
        this._provider = l
      }) : Promise.resolve() : (this._provider = E(), this._provider != null ? this._initializationPromise = Promise.resolve() : this._initializationPromise = b().then(l => new Promise(d => {
        if (!l) return d();
        if (this._provider = E(), this._provider != null) d();
        else {
          const g = window.__hasEverscaleProvider === !0 ? "ever#initialized" : "ton#initialized";
          window.addEventListener(g, P => {
            this._provider = E(), d()
          })
        }
      })).then(async () => {
        this._provider == null && m.fallback != null && (this._provider = await m.fallback())
      })), this._initializationPromise.then(() => {
        this._provider != null && this._registerEventHandlers(this._provider)
      })
    }
    async hasProvider() {
      return this._properties.fallback != null ? !0 : b()
    }
    async ensureInitialized() {
      if (await this._initializationPromise, this._provider == null) throw new w
    }
    get isInitialized() {
      return this._provider != null
    }
    get raw() {
      if (this._provider != null) return this._provider;
      throw new B
    }
    get rawApi() {
      return this._api
    }
    createContract(m, L) {
      return new this.Contract(m, L)
    }
    createSubscriber() {
      return new this.Subscriber
    }
    async requestPermissions(m) {
      await this.ensureInitialized();
      const L = await this._api.requestPermissions({
        permissions: m.permissions
      });
      return (0, i.parsePermissions)(L)
    }
    async changeAccount() {
      await this.ensureInitialized(), await this._api.changeAccount()
    }
    async disconnect() {
      await this.ensureInitialized(), await this._api.disconnect()
    }
    async subscribe(m, L) {
      class j {
        constructor(g, P) {
          this._subscribe = g, this._unsubscribe = P, this._listeners = {
            data: [],
            subscribed: [],
            unsubscribed: []
          }, this._subscribed = !1, this.subscribe = async () => {
            if (!this._subscribed) {
              this._subscribed = !0, await this._subscribe(this);
              for (const S of this._listeners.subscribed) S()
            }
          }, this.unsubscribe = async () => {
            if (this._subscribed) {
              this._subscribed = !1, await this._unsubscribe();
              for (const S of this._listeners.unsubscribed) S()
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
      const $ = this._subscriptions[m],
        l = (0, o.getUniqueId)();
      switch (m) {
        case "connected":
        case "disconnected":
        case "messageStatusUpdated":
        case "networkChanged":
        case "permissionsChanged":
        case "loggedOut": {
          const d = new j(async g => {
            $.has(l) || $.set(l, P => {
              g.notify(P)
            })
          }, async () => {
            $.delete(l)
          });
          return await d.subscribe(), d
        }
        case "transactionsFound":
        case "contractStateChanged": {
          if (L == null) throw new Error("Address must be specified for the subscription");
          await this.ensureInitialized();
          const d = L.address.toString(),
            g = new j(async P => {
              if ($.has(l)) return;
              $.set(l, M => {
                M.address.toString() === d && P.notify(M)
              });
              let S = this._contractSubscriptions.get(d);
              S == null && (S = new Map, this._contractSubscriptions.set(d, S));
              const O = {
                state: m === "contractStateChanged",
                transactions: m === "transactionsFound"
              };
              S.set(l, O);
              const {
                total: N,
                withoutExcluded: k
              } = v(S.values(), O);
              try {
                (N.transactions !== k.transactions || N.state !== k.state) && await this.rawApi.subscribe({
                  address: d,
                  subscriptions: N
                })
              } catch (M) {
                throw $.delete(l), S.delete(l), M
              }
            }, async () => {
              $.delete(l);
              const P = this._contractSubscriptions.get(d);
              if (P == null) return;
              const S = P.get(l),
                {
                  total: O,
                  withoutExcluded: N
                } = v(P.values(), S);
              P.delete(l), !N.transactions && !N.state ? await this.rawApi.unsubscribe({
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
        state: L
      } = await this.getFullContractState({
        address: m
      });
      return L == null ? "0" : L == null ? void 0 : L.balance
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
        accounts: L,
        continuation: j
      } = await this._api.getAccountsByCodeHash({
        ...m
      });
      return {
        accounts: L.map($ => new o.Address($)),
        continuation: j
      }
    }
    async getTransactions(m) {
      await this.ensureInitialized();
      const {
        transactions: L,
        continuation: j,
        info: $
      } = await this._api.getTransactions({
        ...m,
        address: m.address.toString()
      });
      return {
        transactions: L.map(i.parseTransaction),
        continuation: j,
        info: $
      }
    }
    async getTransaction(m) {
      await this.ensureInitialized();
      const {
        transaction: L
      } = await this._api.getTransaction({
        ...m
      });
      return {
        transaction: L ? (0, i.parseTransaction)(L) : void 0
      }
    }
    async getExpectedAddress(m, L) {
      const {
        address: j
      } = await this.getStateInit(m, L);
      return j
    }
    async getStateInit(m, L) {
      await this.ensureInitialized();
      const {
        address: j,
        stateInit: $,
        hash: l
      } = await this._api.getExpectedAddress({
        abi: JSON.stringify(m),
        ...L,
        initParams: (0, i.serializeTokensObject)(L.initParams)
      });
      return {
        address: new o.Address(j),
        stateInit: $,
        hash: l
      }
    }
    async unpackInitData(m, L) {
      await this.ensureInitialized();
      const {
        publicKey: j,
        initParams: $
      } = await this._api.unpackInitData({
        abi: JSON.stringify(m),
        data: L
      });
      return {
        publicKey: j,
        initParams: (0, i.parsePartialTokensObject)(m.data, $)
      }
    }
    async getBocHash(m) {
      return await this.ensureInitialized(), await this._api.getBocHash({
        boc: m
      }).then(({
        hash: L
      }) => L)
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
        data: L
      } = await this._api.unpackFromCell({
        ...m,
        structure: m.structure
      });
      return {
        data: (0, i.parseTokensObject)(m.structure, L)
      }
    }
    async extractPublicKey(m) {
      await this.ensureInitialized();
      const {
        publicKey: L
      } = await this._api.extractPublicKey({
        boc: m
      });
      return L
    }
    async codeToTvc(m) {
      await this.ensureInitialized();
      const {
        tvc: L
      } = await this._api.codeToTvc({
        code: m
      });
      return L
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
      let L;
      if (typeof m.salt == "string") await this.ensureInitialized(), L = m.salt;
      else {
        const {
          boc: j
        } = await this.packIntoCell(m.salt);
        L = j
      }
      return await this._api.setCodeSalt({
        code: m.code,
        salt: L
      })
    }
    async getCodeSalt(m) {
      await this.ensureInitialized();
      const {
        salt: L
      } = await this.rawApi.getCodeSalt({
        code: m.code
      });
      return L
    }
    async addAsset(m) {
      await this.ensureInitialized();
      let L;
      switch (m.type) {
        case "tip3_token": {
          L = {
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
        params: L
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
        encryptedData: L
      } = await this._api.encryptData(m);
      return L
    }
    async decryptData(m) {
      await this.ensureInitialized();
      const {
        data: L
      } = await this._api.decryptData({
        encryptedData: m
      });
      return L
    }
    async sendMessage(m) {
      await this.ensureInitialized();
      const {
        transaction: L
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
        transaction: (0, i.parseTransaction)(L)
      }
    }
    async sendMessageDelayed(m) {
      await this.ensureInitialized();
      const L = new o.DelayedTransactions,
        j = await this.subscribe("messageStatusUpdated");
      j.on("data", d => {
        d.address.equals(m.sender) && L.fillTransaction(d.hash, d.transaction)
      });
      const {
        message: $
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
      }), l = L.waitTransaction(m.sender, $.hash).finally(() => j.unsubscribe().catch(console.error));
      return {
        messageHash: $.hash,
        expireAt: $.expireAt,
        transaction: l
      }
    }
    async addNetwork(m) {
      return await this.ensureInitialized(), await this._api.addNetwork(m)
    }
    async changeNetwork(m) {
      return await this.ensureInitialized(), await this._api.changeNetwork(m)
    }
    _registerEventHandlers(m) {
      const L = {
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
      for (const [j, $] of Object.entries(L)) m.addListener(j, l => {
        const d = this._subscriptions[j],
          g = $(l);
        for (const P of d.values()) P(g)
      })
    }
  }
  n.ProviderRpcClient = f;
  class w extends Error {
    constructor() {
      super("Everscale provider was not found")
    }
  }
  n.ProviderNotFoundException = w;
  class B extends Error {
    constructor() {
      super("Everscale provider was not initialized yet")
    }
  }
  n.ProviderNotInitializedException = B;

  function v(y, m) {
    const L = {
        state: !1,
        transactions: !1
      },
      j = Object.assign({}, L);
    for (const $ of y) {
      if (j.transactions && j.state) break;
      L.state || (L.state = $.state), L.transactions || (L.transactions = $.transactions), $ !== m && (j.state || (j.state = $.state), j.transactions || (j.transactions = $.transactions))
    }
    return {
      total: L,
      withoutExcluded: j
    }
  }
})(ve);
var he = {};
Object.defineProperty(he, "__esModule", {
  value: !0
});
he.AirdropAbi = he.AirdropFactoryAbiV2 = he.AirdropFactoryAbiV1 = void 0;
he.AirdropFactoryAbiV1 = {
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
he.AirdropFactoryAbiV2 = {
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
he.AirdropAbi = {
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
var Ir = Sn.AirdropStatus = void 0,
  Ls;
(function(n) {
  n.NoClaimId = "NoClaimId", n.NoUser = "NoUser", n.HasClaimed = "HasClaimed", n.CanClaim = "CanClaim", n.InQueue = "InQueue", n.NoReward = "NoReward", n.NoAirdrop = "NoAirdrop", n.Loading = "Loading"
})(Ls || (Ir = Sn.AirdropStatus = Ls = {}));
var as = {};
(function(n) {
  var t = tt && tt.__awaiter || function(p, C, A, E) {
      function b(f) {
        return f instanceof A ? f : new A(function(w) {
          w(f)
        })
      }
      return new(A || (A = Promise))(function(f, w) {
        function B(m) {
          try {
            y(E.next(m))
          } catch (L) {
            w(L)
          }
        }

        function v(m) {
          try {
            y(E.throw(m))
          } catch (L) {
            w(L)
          }
        }

        function y(m) {
          m.done ? f(m.value) : b(m.value).then(B, v)
        }
        y((E = E.apply(p, C || [])).next())
      })
    },
    e = tt && tt.__generator || function(p, C) {
      var A = {
          label: 0,
          sent: function() {
            if (f[0] & 1) throw f[1];
            return f[1]
          },
          trys: [],
          ops: []
        },
        E, b, f, w = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
      return w.next = B(0), w.throw = B(1), w.return = B(2), typeof Symbol == "function" && (w[Symbol.iterator] = function() {
        return this
      }), w;

      function B(y) {
        return function(m) {
          return v([y, m])
        }
      }

      function v(y) {
        if (E) throw new TypeError("Generator is already executing.");
        for (; w && (w = 0, y[0] && (A = 0)), A;) try {
          if (E = 1, b && (f = y[0] & 2 ? b.return : y[0] ? b.throw || ((f = b.return) && f.call(b), 0) : b.next) && !(f = f.call(b, y[1])).done) return f;
          switch (b = 0, f && (y = [y[0] & 2, f.value]), y[0]) {
            case 0:
            case 1:
              f = y;
              break;
            case 4:
              return A.label++, {
                value: y[1],
                done: !1
              };
            case 5:
              A.label++, b = y[1], y = [0];
              continue;
            case 7:
              y = A.ops.pop(), A.trys.pop();
              continue;
            default:
              if (f = A.trys, !(f = f.length > 0 && f[f.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                A = 0;
                continue
              }
              if (y[0] === 3 && (!f || y[1] > f[0] && y[1] < f[3])) {
                A.label = y[1];
                break
              }
              if (y[0] === 6 && A.label < f[1]) {
                A.label = f[1], f = y;
                break
              }
              if (f && A.label < f[2]) {
                A.label = f[2], A.ops.push(y);
                break
              }
              f[2] && A.ops.pop(), A.trys.pop();
              continue
          }
          y = C.call(p, A)
        } catch (m) {
          y = [6, m], b = 0
        } finally {
          E = f = 0
        }
        if (y[0] & 5) throw y[1];
        return {
          value: y[0] ? y[1] : void 0,
          done: !0
        }
      }
    },
    s = tt && tt.__spreadArray || function(p, C, A) {
      if (A || arguments.length === 2)
        for (var E = 0, b = C.length, f; E < b; E++)(f || !(E in C)) && (f || (f = Array.prototype.slice.call(C, 0, E)), f[E] = C[E]);
      return p.concat(f || Array.prototype.slice.call(C))
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.buildTransaction = n.getCodeAirdropAndAmount = n.checkQueue = void 0;
  var r = wn,
    i = ve,
    o = he,
    u = function(p, C, A) {
      return t(void 0, void 0, void 0, function() {
        var E, b;
        return e(this, function(f) {
          switch (f.label) {
            case 0:
              return [4, fetch("".concat(p, "/v2/").concat(C, "/").concat(A, "/claim_data"))];
            case 1:
              return E = f.sent(), [4, E.json()];
            case 2:
              return b = f.sent(), [2, b]
          }
        })
      })
    };
  n.checkQueue = u;
  var _ = function(p, C) {
    for (var A = [], E = 2; E < arguments.length; E++) A[E - 2] = arguments[E];
    return t(void 0, s([p, C], A, !0), void 0, function(b, f, w) {
      var B, y, m, L, v, y, m, L;
      return w === void 0 && (w = "10000000"), e(this, function(j) {
        switch (j.label) {
          case 0:
            B = r.Address.parseFriendly(b).address.toRawString(), j.label = 1;
          case 1:
            return j.trys.push([1, 4, , 7]), y = new f.Contract(o.AirdropFactoryAbiV1, new i.Address(B)), [4, y.fields._codeAirdrop()];
          case 2:
            return m = j.sent(), [4, y.fields._claimMinGas()];
          case 3:
            return L = j.sent(), [2, {
              codeAirdrop: m,
              amount: (parseInt(w, 10) + parseInt(L, 10)).toString()
            }];
          case 4:
            return v = j.sent(), console.warn(v), y = new f.Contract(o.AirdropFactoryAbiV2, new i.Address(B)), [4, y.methods.getAirdropCode().call()];
          case 5:
            return m = j.sent().value0, [4, y.methods.getClaimMinGas().call()];
          case 6:
            return L = j.sent().value0, [2, {
              codeAirdrop: m,
              amount: (parseInt(w, 10) + parseInt(L, 10)).toString()
            }];
          case 7:
            return [2]
        }
      })
    })
  };
  n.getCodeAirdropAndAmount = _;
  var h = function(p, C, A) {
    for (var E = [], b = 3; b < arguments.length; b++) E[b - 3] = arguments[b];
    return t(void 0, s([p, C, A], E, !0), void 0, function(f, w, B, v) {
      var y, m, L, j, $, l, d, g;
      return v === void 0 && (v = "10000000"), e(this, function(P) {
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
                _signature: f.signature
              }
            })];
          case 1:
            return y = P.sent(), [4, (0, n.getCodeAirdropAndAmount)(f.factory, w, v)];
          case 2:
            return m = P.sent(), L = m.amount, j = m.codeAirdrop, [4, w.mergeTvc({
              code: j,
              data: "te6ccgEBAgEAKAABAcABAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg"
            })];
          case 3:
            return $ = P.sent(), [4, w.getStateInit(o.AirdropAbi, {
              workchain: 0,
              initParams: {
                _data: f.data,
                _nonce: f.nonce
              },
              tvc: $.tvc
            })];
          case 4:
            return l = P.sent(), d = l.stateInit, g = l.address, [2, {
              messages: [{
                amount: L,
                address: r.Address.parse(g.toString()).toString({
                  bounceable: !0
                }),
                payload: y.boc,
                stateInit: d
              }],
              validUntil: Math.ceil((B.time + 6e5) / 1e3)
            }]
        }
      })
    })
  };
  n.buildTransaction = h
})(as);
(function(n) {
  var t = tt && tt.__assign || function() {
      return t = Object.assign || function(b) {
        for (var f, w = 1, B = arguments.length; w < B; w++) {
          f = arguments[w];
          for (var v in f) Object.prototype.hasOwnProperty.call(f, v) && (b[v] = f[v])
        }
        return b
      }, t.apply(this, arguments)
    },
    e = tt && tt.__createBinding || (Object.create ? function(b, f, w, B) {
      B === void 0 && (B = w);
      var v = Object.getOwnPropertyDescriptor(f, w);
      (!v || ("get" in v ? !f.__esModule : v.writable || v.configurable)) && (v = {
        enumerable: !0,
        get: function() {
          return f[w]
        }
      }), Object.defineProperty(b, B, v)
    } : function(b, f, w, B) {
      B === void 0 && (B = w), b[B] = f[w]
    }),
    s = tt && tt.__exportStar || function(b, f) {
      for (var w in b) w !== "default" && !Object.prototype.hasOwnProperty.call(f, w) && e(f, b, w)
    },
    r = tt && tt.__awaiter || function(b, f, w, B) {
      function v(y) {
        return y instanceof w ? y : new w(function(m) {
          m(y)
        })
      }
      return new(w || (w = Promise))(function(y, m) {
        function L(l) {
          try {
            $(B.next(l))
          } catch (d) {
            m(d)
          }
        }

        function j(l) {
          try {
            $(B.throw(l))
          } catch (d) {
            m(d)
          }
        }

        function $(l) {
          l.done ? y(l.value) : v(l.value).then(L, j)
        }
        $((B = B.apply(b, f || [])).next())
      })
    },
    i = tt && tt.__generator || function(b, f) {
      var w = {
          label: 0,
          sent: function() {
            if (y[0] & 1) throw y[1];
            return y[1]
          },
          trys: [],
          ops: []
        },
        B, v, y, m = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
      return m.next = L(0), m.throw = L(1), m.return = L(2), typeof Symbol == "function" && (m[Symbol.iterator] = function() {
        return this
      }), m;

      function L($) {
        return function(l) {
          return j([$, l])
        }
      }

      function j($) {
        if (B) throw new TypeError("Generator is already executing.");
        for (; m && (m = 0, $[0] && (w = 0)), w;) try {
          if (B = 1, v && (y = $[0] & 2 ? v.return : $[0] ? v.throw || ((y = v.return) && y.call(v), 0) : v.next) && !(y = y.call(v, $[1])).done) return y;
          switch (v = 0, y && ($ = [$[0] & 2, y.value]), $[0]) {
            case 0:
            case 1:
              y = $;
              break;
            case 4:
              return w.label++, {
                value: $[1],
                done: !1
              };
            case 5:
              w.label++, v = $[1], $ = [0];
              continue;
            case 7:
              $ = w.ops.pop(), w.trys.pop();
              continue;
            default:
              if (y = w.trys, !(y = y.length > 0 && y[y.length - 1]) && ($[0] === 6 || $[0] === 2)) {
                w = 0;
                continue
              }
              if ($[0] === 3 && (!y || $[1] > y[0] && $[1] < y[3])) {
                w.label = $[1];
                break
              }
              if ($[0] === 6 && w.label < y[1]) {
                w.label = y[1], y = $;
                break
              }
              if (y && w.label < y[2]) {
                w.label = y[2], w.ops.push($);
                break
              }
              y[2] && w.ops.pop(), w.trys.pop();
              continue
          }
          $ = f.call(b, w)
        } catch (l) {
          $ = [6, l], v = 0
        } finally {
          B = y = 0
        }
        if ($[0] & 5) throw $[1];
        return {
          value: $[0] ? $[1] : void 0,
          done: !0
        }
      }
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.AirdropUI = void 0;
  var o = wn,
    u = ve,
    _ = he,
    h = Sn,
    p = as;
  s(as, n);
  var C = function() {
      function b(f) {
        this.subscribers = [], this.value = f
      }
      return b.prototype.set = function(f, w) {
        var B, v = this,
          y = t({}, this.value),
          m = t(t({}, y), (B = {}, B[f] = w, B));
        this.value = m, this.subscribers.filter(function(L) {
          L[0];
          var j = L[1];
          return j.length === 0 || j.includes(f)
        }).forEach(function(L) {
          var j = L[0],
            $ = L[1];
          if ($.length === 0) j(v.value);
          else
            for (var l = 0; l < $.length; l++) y[$[l]] !== m[$[l]] && j(v.value)
        })
      }, b.prototype.getState = function() {
        return t({}, this.value)
      }, b.prototype.subscribe = function(f) {
        for (var w = this, B = [], v = 1; v < arguments.length; v++) B[v - 1] = arguments[v];
        var y = this.subscribers.push([f, B]);
        return f(this.value),
          function() {
            w.subscribers.splice(y - 1, 1)
          }
      }, b.prototype.unsubscribeAll = function() {
        this.subscribers = []
      }, b
    }(),
    A = {
      claimApiBaseUrl: "https://claim-api-test.d3mo.org",
      deployValue: "10000000"
    },
    E = function() {
      function b(f, w, B, v) {
        v === void 0 && (v = {});
        var y = this,
          m;
        this.tonConnect = f, this.rpc = w, this.clock = B, this.subscribers = [], this.state = new C({
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
          status: h.AirdropStatus.Loading
        }), this.getState = this.state.getState.bind(this.state), this.subscribe = this.state.subscribe.bind(this.state), this.options = t(t({}, A), v), this.syncStorageData = this.syncStorageData.bind(this), window.addEventListener("storage", this.syncStorageData), this.state.subscribe(this.initSyncClaimData.bind(this), "airdropName", "userAddress"), this.state.subscribe(this.syncStorageKey.bind(this), "airdropName", "userAddress", "claimId"), this.state.subscribe(this.syncFactoryAddress.bind(this), "claimData", "storageData", "claimId"), this.state.subscribe(this.syncAirdropAddress.bind(this), "claimData", "storageData", "claimId"), this.state.subscribe(this.initClaimListener.bind(this), "userAddress", "factoryAddress"), this.state.subscribe(this.syncRemoveStorageTimer.bind(this), "storageKey", "storageData"), this.state.subscribe(this.syncStorageData.bind(this), "storageKey", "claimed"), this.state.subscribe(this.syncClaimed.bind(this), "airdropAddress"), this.state.subscribe(this.syncClaimLoading.bind(this), "storageData"), this.state.subscribe(this.syncStatus.bind(this), "userAddress", "claimed", "claimData", "storageKey", "airdropName", "claimId"), this.state.set("userAddress", (m = this.tonConnect.account) === null || m === void 0 ? void 0 : m.address), this.tonConnectUnsubscribe = this.tonConnect.onStatusChange(function(L) {
          y.state.set("userAddress", L == null ? void 0 : L.account.address)
        })
      }
      return b.prototype.destory = function() {
        var f, w;
        this.state.unsubscribeAll(), clearTimeout(this.removeStorageTimeout), clearTimeout(this.claimDataTimeout), window.removeEventListener("storage", this.syncStorageData), (f = this.tonConnectUnsubscribe) === null || f === void 0 || f.call(this), (w = this.rpcSubscriber) === null || w === void 0 || w.unsubscribe()
      }, b.prototype.setAirdropName = function(f) {
        this.state.set("airdropName", f)
      }, b.prototype.setClaimId = function(f) {
        this.state.set("claimId", f)
      }, b.prototype.claim = function() {
        return r(this, void 0, void 0, function() {
          var f, w, B, v, y, m, L, j, $, l, d, g, P, S, O, N;
          return i(this, function(k) {
            switch (k.label) {
              case 0:
                if (f = this.getState(), w = f.claimData, B = f.storageKey, v = f.claimId, !v) throw new Error("claimId must defined");
                if ((w == null ? void 0 : w.status) !== "signed") throw new Error("claimData.status must be signed");
                if (y = w.rewards.find(function(M) {
                    return M.claimId === v
                  }), !y) throw new Error("rewardData must defined");
                if (!B) throw new Error("storageKey must be defined");
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
                    _signature: y.signature
                  }
                })];
              case 2:
                return m = k.sent(), [4, (0, p.getCodeAirdropAndAmount)(y.factory, this.rpc, this.options.deployValue)];
              case 3:
                return L = k.sent(), j = L.codeAirdrop, $ = L.amount, [4, this.rpc.mergeTvc({
                  code: j ?? "",
                  data: "te6ccgEBAgEAKAABAcABAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg"
                })];
              case 4:
                return l = k.sent(), [4, this.rpc.getStateInit(_.AirdropAbi, {
                  workchain: 0,
                  initParams: {
                    _data: y.data,
                    _nonce: y.nonce
                  },
                  tvc: l.tvc
                })];
              case 5:
                return d = k.sent(), g = d.stateInit, P = d.address, S = this.clock.time, [4, this.tonConnect.sendTransaction({
                  messages: [{
                    amount: $,
                    address: o.Address.parse(P.toString()).toString({
                      bounceable: !0
                    }),
                    payload: m.boc,
                    stateInit: g
                  }],
                  validUntil: Math.ceil((S + 6e5) / 1e3)
                })];
              case 6:
                return k.sent(), O = {
                  airdrop: y.airdrop,
                  factory: y.factory,
                  until: S + 12e4
                }, localStorage.setItem(B, JSON.stringify(O)), this.state.set("storageData", O), [3, 8];
              case 7:
                return N = k.sent(), console.error(N), [3, 8];
              case 8:
                return this.state.set("loading", !1), [2]
            }
          })
        })
      }, b.prototype.syncFactoryAddress = function() {
        var f, w = this.state.getState(),
          B = w.claimData,
          v = w.storageData,
          y = w.claimId,
          m = void 0;
        (B == null ? void 0 : B.status) === "signed" && y ? m = (f = B.rewards.find(function(L) {
          return L.claimId === y
        })) === null || f === void 0 ? void 0 : f.factory : m = v == null ? void 0 : v.factory, this.state.set("factoryAddress", m)
      }, b.prototype.syncAirdropAddress = function() {
        var f, w = this.state.getState(),
          B = w.claimData,
          v = w.storageData,
          y = w.claimId,
          m = void 0;
        (B == null ? void 0 : B.status) === "signed" && y ? m = (f = B.rewards.find(function(L) {
          return L.claimId === y
        })) === null || f === void 0 ? void 0 : f.airdrop : m = v == null ? void 0 : v.airdrop, this.state.set("airdropAddress", m)
      }, b.prototype.syncStorageKey = function() {
        var f = this.state.getState(),
          w = f.airdropName,
          B = f.userAddress,
          v = f.claimId,
          y = w && B && v ? b.getStorageKey(w, B, v) : null;
        this.state.set("storageKey", y)
      }, b.prototype.syncStorageData = function() {
        var f = this.state.getState(),
          w = f.storageKey,
          B = f.claimed;
        if (B) this.state.set("storageData", null);
        else {
          var v = w ? localStorage.getItem(w) : null;
          if (v) try {
            var y = JSON.parse(v),
              m = this.clock.time < y.until ? y : null;
            this.state.set("storageData", m)
          } catch (L) {
            console.error(L)
          }
        }
      }, b.prototype.syncRemoveStorageTimer = function() {
        var f = this,
          w = this.clock.time,
          B = this.state.getState(),
          v = B.storageKey,
          y = B.storageData;
        clearTimeout(this.removeStorageTimeout), v && y && w < y.until && (this.removeStorageTimeout = setTimeout(function() {
          localStorage.removeItem(v), f.state.set("storageData", null)
        }, y.until - w))
      }, b.prototype.syncClaimed = function() {
        return r(this, void 0, void 0, function() {
          var f, w, B, v;
          return i(this, function(y) {
            switch (y.label) {
              case 0:
                if (f = this.state.getState().airdropAddress, this.state.set("claimed", null), !f) return [2];
                this.state.set("loading", !0), y.label = 1;
              case 1:
                return y.trys.push([1, 3, , 4]), w = o.Address.parseFriendly(f).address.toRawString(), [4, this.rpc.getFullContractState({
                  address: new u.Address(w)
                })];
              case 2:
                return B = y.sent(), this.state.set("claimed", !!B.state), [3, 4];
              case 3:
                return v = y.sent(), console.error(v), [3, 4];
              case 4:
                return this.state.set("loading", !1), [2]
            }
          })
        })
      }, b.prototype.syncClaimLoading = function() {
        var f = this.state.getState().storageData;
        this.state.set("claimLoading", !!f)
      }, b.prototype.syncStatus = function() {
        var f, w, B, v = h.AirdropStatus.Loading,
          y = this.getState();
        y.userAddress ? y.claimed === !0 ? v = h.AirdropStatus.HasClaimed : y.claimed === !1 && ((f = y.claimData) === null || f === void 0 ? void 0 : f.status) === "signed" && y.storageKey ? v = h.AirdropStatus.CanClaim : ((w = y.claimData) === null || w === void 0 ? void 0 : w.status) === "inQueue" ? v = h.AirdropStatus.InQueue : ((B = y.claimData) === null || B === void 0 ? void 0 : B.status) === "noReward" ? v = h.AirdropStatus.NoReward : y.airdropName ? y.claimId || (v = h.AirdropStatus.NoClaimId) : v = h.AirdropStatus.NoAirdrop : v = h.AirdropStatus.NoUser, this.state.set("status", v)
      }, b.prototype.initSyncClaimData = function() {
        var f = this;
        clearInterval(this.claimDataTimeout), this.state.set("claimData", null);
        var w = this.state.getState(),
          B = w.airdropName,
          v = w.userAddress;
        if (!(!B || !v)) {
          var y = function() {
            return r(f, void 0, void 0, function() {
              var m, L, j, $;
              return i(this, function(l) {
                switch (l.label) {
                  case 0:
                    this.state.set("loading", !0), l.label = 1;
                  case 1:
                    return l.trys.push([1, 4, , 5]), m = this.options.claimApiBaseUrl, [4, fetch("".concat(m, "/v2/").concat(B, "/").concat(v, "/claim_data"))];
                  case 2:
                    return L = l.sent(), [4, L.json()];
                  case 3:
                    return j = l.sent(), this.state.set("claimData", j), [3, 5];
                  case 4:
                    return $ = l.sent(), console.error($), [3, 5];
                  case 5:
                    return this.state.set("loading", !1), [2]
                }
              })
            })
          };
          this.claimDataTimeout = setInterval(y, 2e4), y()
        }
      }, b.prototype.initClaimListener = function() {
        return r(this, void 0, void 0, function() {
          var f, w, B, v, y, m = this,
            L;
          return i(this, function(j) {
            switch (j.label) {
              case 0:
                return (L = this.rpcSubscriber) === null || L === void 0 || L.unsubscribe(), f = this.state.getState(), w = f.factoryAddress, B = f.userAddress, !w || !B ? [2] : (v = o.Address.parseFriendly(w).address.toRawString(), y = new this.rpc.Contract(_.AirdropFactoryAbiV2, new u.Address(v)), this.rpcSubscriber = new this.rpc.Subscriber, [4, this.rpcSubscriber.transactions(y.address).flatMap(function($) {
                  return $.transactions
                }).flatMap(function($) {
                  return y.decodeTransactionEvents({
                    transaction: $
                  })
                }).filterMap(function($) {
                  if ($.event === "AirdropClaimed" && $.data.recipient.toString() === B) return m.state.set("claimed", !0), !0
                }).first()]);
              case 1:
                return j.sent(), [2]
            }
          })
        })
      }, b.getStorageKey = function(f, w, B) {
        return "airdrop-v2-".concat(f, "-").concat(w, "-").concat(B)
      }, b
    }();
  n.AirdropUI = E
})(yr);
var os = {};
let c;
const Sr = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Sr.decode();
let He = null;

function Ne() {
  return (He === null || He.byteLength === 0) && (He = new Uint8Array(c.memory.buffer)), He
}

function bt(n, t) {
  return n = n >>> 0, Sr.decode(Ne().subarray(n, n + t))
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
let Se = null;

function R() {
  return (Se === null || Se.buffer.detached === !0 || Se.buffer.detached === void 0 && Se.buffer !== c.memory.buffer) && (Se = new DataView(c.memory.buffer)), Se
}
let H = 0;
const gn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  jo = typeof gn.encodeInto == "function" ? function(n, t) {
    return gn.encodeInto(n, t)
  } : function(n, t) {
    const e = gn.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function V(n, t, e) {
  if (e === void 0) {
    const u = gn.encode(n),
      _ = t(u.length, 1) >>> 0;
    return Ne().subarray(_, _ + u.length).set(u), H = u.length, _
  }
  let s = n.length,
    r = t(s, 1) >>> 0;
  const i = Ne();
  let o = 0;
  for (; o < s; o++) {
    const u = n.charCodeAt(o);
    if (u > 127) break;
    i[r + o] = u
  }
  if (o !== s) {
    o !== 0 && (n = n.slice(o)), r = e(r, s, s = o + n.length * 3, 1) >>> 0;
    const u = Ne().subarray(r + o, r + s),
      _ = jo(n, u);
    o += _.written, r = e(r, s, o, 1) >>> 0
  }
  return H = o, r
}

function Bo(n) {
  n < 132 || (_e[n] = Xe, Xe = n)
}

function W(n) {
  const t = X(n);
  return Bo(n), t
}

function cs(n) {
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
    r > 0 && (i += cs(n[0]));
    for (let o = 1; o < r; o++) i += ", " + cs(n[o]);
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
const Fs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => {
  c.__wbindgen_export_2.get(n.dtor)(n.a, n.b)
});

function $o(n, t, e, s) {
  const r = {
      a: n,
      b: t,
      cnt: 1,
      dtor: e
    },
    i = (...o) => {
      r.cnt++;
      const u = r.a;
      r.a = 0;
      try {
        return s(u, r.b, ...o)
      } finally {
        --r.cnt === 0 ? (c.__wbindgen_export_2.get(r.dtor)(u, r.b), Fs.unregister(r)) : r.a = u
      }
    };
  return i.original = r, Fs.register(i, r, r), i
}

function xo(n, t, e) {
  c._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0fff6d0ad1f7528f(n, t, J(e))
}

function zo(n, t) {
  return n = n >>> 0, Ne().subarray(n / 1, n / 1 + t)
}

function Uo(n, t) {
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

function Wo(n) {
  const t = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
    e = H;
  return c.checkAddress(t, e) !== 0
}

function Go(n) {
  let t, e;
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.repackAddress(h, p, C);
    var s = R().getInt32(h + 4 * 0, !0),
      r = R().getInt32(h + 4 * 1, !0),
      i = R().getInt32(h + 4 * 2, !0),
      o = R().getInt32(h + 4 * 3, !0),
      u = s,
      _ = r;
    if (o) throw u = 0, _ = 0, W(i);
    return t = u, e = _, bt(u, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function Ho(n, t, e, s, r, i, o) {
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16);
    se(n, fe);
    const C = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H,
      E = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      b = H,
      f = V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = H;
    c.runLocal(p, n.__wbg_ptr, C, A, E, b, f, w, J(r), i, !wt(o), wt(o) ? 0 : o);
    var u = R().getInt32(p + 4 * 0, !0),
      _ = R().getInt32(p + 4 * 1, !0),
      h = R().getInt32(p + 4 * 2, !0);
    if (h) throw W(_);
    return W(u)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Vo(n) {
  let t, e;
  try {
    const C = c.__wbindgen_add_to_stack_pointer(-16);
    var s = wt(n) ? 0 : V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      r = H;
    c.makeFullAccountBoc(C, s, r);
    var i = R().getInt32(C + 4 * 0, !0),
      o = R().getInt32(C + 4 * 1, !0),
      u = R().getInt32(C + 4 * 2, !0),
      _ = R().getInt32(C + 4 * 3, !0),
      h = i,
      p = o;
    if (_) throw h = 0, p = 0, W(u);
    return t = h, e = p, bt(h, p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function Qo(n) {
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

function Jo(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H;
    c.parseFullAccountStateInit(i, o, u);
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

function Xo(n, t, e, s) {
  try {
    const u = c.__wbindgen_add_to_stack_pointer(-16),
      _ = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H,
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.computeStorageFee(u, _, h, p, C, e, s);
    var r = R().getInt32(u + 4 * 0, !0),
      i = R().getInt32(u + 4 * 1, !0),
      o = R().getInt32(u + 4 * 2, !0);
    if (o) throw W(i);
    return W(r)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Yo(n, t, e, s, r, i, o) {
  try {
    const A = c.__wbindgen_add_to_stack_pointer(-16),
      E = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      b = H,
      f = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = H,
      B = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      v = H;
    var u = wt(i) ? 0 : V(i, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H;
    c.executeLocal(A, E, b, f, w, B, v, s, r, u, _, !wt(o), wt(o) ? 0 : o);
    var h = R().getInt32(A + 4 * 0, !0),
      p = R().getInt32(A + 4 * 1, !0),
      C = R().getInt32(A + 4 * 2, !0);
    if (C) throw W(p);
    return W(h)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Zo(n, t, e, s, r) {
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16),
      C = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H,
      E = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      b = H;
    var i = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.getExpectedAddress(p, C, A, E, b, e, i, o, J(r));
    var u = R().getInt32(p + 4 * 0, !0),
      _ = R().getInt32(p + 4 * 1, !0),
      h = R().getInt32(p + 4 * 2, !0);
    if (h) throw W(_);
    return W(u)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function qo(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      u = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H,
      h = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    c.unpackContractFields(o, u, _, h, p, e);
    var s = R().getInt32(o + 4 * 0, !0),
      r = R().getInt32(o + 4 * 1, !0),
      i = R().getInt32(o + 4 * 2, !0);
    if (i) throw W(r);
    return W(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function tc(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H,
      _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    c.unpackInitData(i, o, u, _, h);
    var e = R().getInt32(i + 4 * 0, !0),
      s = R().getInt32(i + 4 * 1, !0),
      r = R().getInt32(i + 4 * 2, !0);
    if (r) throw W(s);
    return W(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function ec(n) {
  let t, e;
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.getBocHash(h, p, C);
    var s = R().getInt32(h + 4 * 0, !0),
      r = R().getInt32(h + 4 * 1, !0),
      i = R().getInt32(h + 4 * 2, !0),
      o = R().getInt32(h + 4 * 3, !0),
      u = s,
      _ = r;
    if (o) throw u = 0, _ = 0, W(i);
    return t = u, e = _, bt(u, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function nc(n, t, e) {
  try {
    const _ = c.__wbindgen_add_to_stack_pointer(-16);
    var s = wt(e) ? 0 : V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      r = H;
    c.packIntoCell(_, J(n), J(t), s, r);
    var i = R().getInt32(_ + 4 * 0, !0),
      o = R().getInt32(_ + 4 * 1, !0),
      u = R().getInt32(_ + 4 * 2, !0);
    if (u) throw W(o);
    return W(i)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function sc(n, t, e, s) {
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    var r = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = H;
    c.unpackFromCell(h, J(n), p, C, e, r, i);
    var o = R().getInt32(h + 4 * 0, !0),
      u = R().getInt32(h + 4 * 1, !0),
      _ = R().getInt32(h + 4 * 2, !0);
    if (_) throw W(u);
    return W(o)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function rc(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H;
    c.extractContractData(i, o, u);
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

function ic(n) {
  let t, e;
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.extractPublicKey(h, p, C);
    var s = R().getInt32(h + 4 * 0, !0),
      r = R().getInt32(h + 4 * 1, !0),
      i = R().getInt32(h + 4 * 2, !0),
      o = R().getInt32(h + 4 * 3, !0),
      u = s,
      _ = r;
    if (o) throw u = 0, _ = 0, W(i);
    return t = u, e = _, bt(u, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function ac(n) {
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

function oc(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H,
      _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    c.mergeTvc(i, o, u, _, h);
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

function lc(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H,
      _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    c.setCodeSalt(i, o, u, _, h);
    var e = R().getInt32(i + 4 * 0, !0),
      s = R().getInt32(i + 4 * 1, !0),
      r = R().getInt32(i + 4 * 2, !0);
    if (r) throw W(s);
    return W(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function uc(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H;
    c.getCodeSalt(i, o, u);
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

function dc(n, t, e) {
  let s, r;
  try {
    const C = c.__wbindgen_add_to_stack_pointer(-16),
      A = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      E = H,
      b = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H;
    c.encodeInternalInput(C, A, E, b, f, J(e));
    var i = R().getInt32(C + 4 * 0, !0),
      o = R().getInt32(C + 4 * 1, !0),
      u = R().getInt32(C + 4 * 2, !0),
      _ = R().getInt32(C + 4 * 3, !0),
      h = i,
      p = o;
    if (_) throw h = 0, p = 0, W(u);
    return s = h, r = p, bt(h, p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(s, r, 1)
  }
}

function _c(n, t, e, s, r, i, o) {
  let u, _;
  try {
    const L = c.__wbindgen_add_to_stack_pointer(-16);
    var h = wt(n) ? 0 : V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    const j = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      $ = H;
    var C = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H,
      E = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      b = H;
    const l = V(i, c.__wbindgen_malloc, c.__wbindgen_realloc),
      d = H;
    c.encodeInternalMessage(L, h, p, j, $, e, C, A, E, b, l, d, wt(o) ? 16777215 : o ? 1 : 0);
    var f = R().getInt32(L + 4 * 0, !0),
      w = R().getInt32(L + 4 * 1, !0),
      B = R().getInt32(L + 4 * 2, !0),
      v = R().getInt32(L + 4 * 3, !0),
      y = f,
      m = w;
    if (v) throw y = 0, m = 0, W(B);
    return u = y, _ = m, bt(y, m)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(u, _, 1)
  }
}

function pc(n, t, e, s) {
  try {
    const u = c.__wbindgen_add_to_stack_pointer(-16),
      _ = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H,
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.decodeInput(u, _, h, p, C, J(e), s);
    var r = R().getInt32(u + 4 * 0, !0),
      i = R().getInt32(u + 4 * 1, !0),
      o = R().getInt32(u + 4 * 2, !0);
    if (o) throw W(i);
    return W(r)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function fc(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      u = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H,
      h = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    c.decodeEvent(o, u, _, h, p, J(e));
    var s = R().getInt32(o + 4 * 0, !0),
      r = R().getInt32(o + 4 * 1, !0),
      i = R().getInt32(o + 4 * 2, !0);
    if (i) throw W(r);
    return W(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function hc(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      u = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H,
      h = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    c.decodeOutput(o, u, _, h, p, J(e));
    var s = R().getInt32(o + 4 * 0, !0),
      r = R().getInt32(o + 4 * 1, !0),
      i = R().getInt32(o + 4 * 2, !0);
    if (i) throw W(r);
    return W(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function gc(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      u = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H;
    c.decodeTransaction(o, J(n), u, _, J(e));
    var s = R().getInt32(o + 4 * 0, !0),
      r = R().getInt32(o + 4 * 1, !0),
      i = R().getInt32(o + 4 * 2, !0);
    if (i) throw W(r);
    return W(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function bc(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H;
    c.decodeTransactionEvents(i, J(n), o, u);
    var e = R().getInt32(i + 4 * 0, !0),
      s = R().getInt32(i + 4 * 1, !0),
      r = R().getInt32(i + 4 * 2, !0);
    if (r) throw W(s);
    return W(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function mc(n) {
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

function wc(n) {
  let t, e;
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.getDataHash(h, p, C);
    var s = R().getInt32(h + 4 * 0, !0),
      r = R().getInt32(h + 4 * 1, !0),
      i = R().getInt32(h + 4 * 2, !0),
      o = R().getInt32(h + 4 * 3, !0),
      u = s,
      _ = r;
    if (o) throw u = 0, _ = 0, W(i);
    return t = u, e = _, bt(u, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function yc() {
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

function vc(n, t, e) {
  let s, r;
  try {
    const C = c.__wbindgen_add_to_stack_pointer(-16),
      A = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      E = H,
      b = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H;
    c.ed25519_sign(C, A, E, b, f, !wt(e), wt(e) ? 0 : e);
    var i = R().getInt32(C + 4 * 0, !0),
      o = R().getInt32(C + 4 * 1, !0),
      u = R().getInt32(C + 4 * 2, !0),
      _ = R().getInt32(C + 4 * 3, !0),
      h = i,
      p = o;
    if (_) throw h = 0, p = 0, W(u);
    return s = h, r = p, bt(h, p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(s, r, 1)
  }
}

function Ac(n) {
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

function kc(n, t, e, s) {
  try {
    const u = c.__wbindgen_add_to_stack_pointer(-16),
      _ = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H,
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H,
      A = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      E = H;
    c.verifySignature(u, _, h, p, C, A, E, !wt(s), wt(s) ? 0 : s);
    var r = R().getInt32(u + 4 * 0, !0),
      i = R().getInt32(u + 4 * 1, !0),
      o = R().getInt32(u + 4 * 2, !0);
    if (o) throw W(i);
    return r !== 0
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Ic(n, t, e, s) {
  try {
    const C = c.__wbindgen_add_to_stack_pointer(-16),
      A = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      E = H;
    var r = wt(t) ? 0 : V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = H,
      o = wt(e) ? 0 : V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H;
    c.createRawExternalMessage(C, A, E, r, i, o, u, s);
    var _ = R().getInt32(C + 4 * 0, !0),
      h = R().getInt32(C + 4 * 1, !0),
      p = R().getInt32(C + 4 * 2, !0);
    if (p) throw W(h);
    return W(_)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Sc(n, t, e, s, r, i, o) {
  try {
    const A = c.__wbindgen_add_to_stack_pointer(-16);
    se(n, fe);
    const E = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      b = H,
      f = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = H,
      B = V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      v = H;
    var u = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H;
    c.createExternalMessageWithoutSignature(A, n.__wbg_ptr, E, b, f, w, B, v, u, _, J(i), o);
    var h = R().getInt32(A + 4 * 0, !0),
      p = R().getInt32(A + 4 * 1, !0),
      C = R().getInt32(A + 4 * 2, !0);
    if (C) throw W(p);
    return W(h)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Cc(n, t, e, s, r, i, o, u) {
  try {
    const E = c.__wbindgen_add_to_stack_pointer(-16);
    se(n, fe);
    const b = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H,
      w = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      B = H,
      v = V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      y = H;
    var _ = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    const m = V(o, c.__wbindgen_malloc, c.__wbindgen_realloc),
      L = H;
    c.createExternalMessage(E, n.__wbg_ptr, b, f, w, B, v, y, _, h, J(i), m, L, u);
    var p = R().getInt32(E + 4 * 0, !0),
      C = R().getInt32(E + 4 * 1, !0),
      A = R().getInt32(E + 4 * 2, !0);
    if (A) throw W(C);
    return En.__wrap(p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Tc(n, t, e, s) {
  c.wasm_bindgen__convert__closures__invoke2_mut__h5874b044d3e8a56e(n, t, J(e), J(s))
}
const Ns = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_bytesquery_free(n >>> 0, 1));
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
    c.__wbg_bytesquery_free(t, 0)
  }
  onReceive(t) {
    const e = this.__destroy_into_raw(),
      s = Uo(t, c.__wbindgen_malloc),
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
const Ks = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_clockwithoffset_free(n >>> 0, 1));
class fe {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ks.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_clockwithoffset_free(t, 0)
  }
  constructor() {
    const t = c.clockwithoffset_new();
    return this.__wbg_ptr = t >>> 0, Ks.register(this, this.__wbg_ptr, this), this
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
const js = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_genericcontract_free(n >>> 0, 1));
class Tn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Tn.prototype);
    return e.__wbg_ptr = t, js.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, js.unregister(this), t
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
        u = H;
      c.genericcontract_preloadTransactions(i, this.__wbg_ptr, o, u);
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
const Bs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_gqlconnection_free(n >>> 0, 1));
class Cr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Bs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_gqlconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, Bs.register(this, this.__wbg_ptr, this), this
  }
  getLatestBlock(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        u = H;
      c.gqlconnection_getLatestBlock(i, this.__wbg_ptr, o, u);
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
      const u = c.__wbindgen_add_to_stack_pointer(-16),
        _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        h = H,
        p = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
        C = H;
      c.gqlconnection_waitForNextBlock(u, this.__wbg_ptr, _, h, p, C, s);
      var r = R().getInt32(u + 4 * 0, !0),
        i = R().getInt32(u + 4 * 1, !0),
        o = R().getInt32(u + 4 * 2, !0);
      if (o) throw W(i);
      return W(r)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
const $s = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_jrpcconnection_free(n >>> 0, 1));
class Tr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $s.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_jrpcconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, $s.register(this, this.__wbg_ptr, this), this
  }
}
const xs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_protoconnection_free(n >>> 0, 1));
class Er {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, xs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_protoconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, xs.register(this, this.__wbg_ptr, this), this
  }
}
const zs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_proxyconnection_free(n >>> 0, 1));
class Pr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_proxyconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, zs.register(this, this.__wbg_ptr, this), this
  }
}
const Us = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_stringquery_free(n >>> 0, 1));
class tn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(tn.prototype);
    return e.__wbg_ptr = t, Us.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Us.unregister(this), t
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
const Ws = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_transport_free(n >>> 0, 1));
class Te {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Te.prototype);
    return e.__wbg_ptr = t, Ws.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ws.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_transport_free(t, 0)
  }
  static fromGqlConnection(t, e) {
    se(t, Cr), se(e, fe);
    const s = c.transport_fromGqlConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(s)
  }
  static fromJrpcConnection(t, e) {
    se(t, Tr), se(e, fe);
    const s = c.transport_fromJrpcConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(s)
  }
  static fromProtoConnection(t, e) {
    se(t, Er), se(e, fe);
    const s = c.transport_fromProtoConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(s)
  }
  static fromProxyConnection(t, e) {
    se(t, Pr), se(e, fe);
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
        u = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        _ = H;
      c.transport_subscribeToGenericContract(o, this.__wbg_ptr, u, _, J(e));
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
        u = H;
      c.transport_getFullContractState(i, this.__wbg_ptr, o, u);
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
      const h = c.__wbindgen_add_to_stack_pointer(-16),
        p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        C = H;
      var r = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
        i = H;
      c.transport_getAccountsByCodeHash(h, this.__wbg_ptr, p, C, e, r, i);
      var o = R().getInt32(h + 4 * 0, !0),
        u = R().getInt32(h + 4 * 1, !0),
        _ = R().getInt32(h + 4 * 2, !0);
      if (_) throw W(u);
      return W(o)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getTransactions(t, e, s) {
    try {
      const h = c.__wbindgen_add_to_stack_pointer(-16),
        p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        C = H;
      var r = wt(e) ? 0 : V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
        i = H;
      c.transport_getTransactions(h, this.__wbg_ptr, p, C, r, i, s);
      var o = R().getInt32(h + 4 * 0, !0),
        u = R().getInt32(h + 4 * 1, !0),
        _ = R().getInt32(h + 4 * 2, !0);
      if (_) throw W(u);
      return W(o)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getTransaction(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        u = H;
      c.transport_getTransaction(i, this.__wbg_ptr, o, u);
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
        u = H;
      c.transport_getDstTransaction(i, this.__wbg_ptr, o, u);
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
const Gs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_unsignedmessage_free(n >>> 0, 1));
class En {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(En.prototype);
    return e.__wbg_ptr = t, Gs.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Gs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_unsignedmessage_free(t, 0)
  }
  refreshTimeout(t) {
    se(t, fe), c.unsignedmessage_refreshTimeout(this.__wbg_ptr, t.__wbg_ptr)
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
        u = H;
      c.unsignedmessage_sign(i, this.__wbg_ptr, o, u);
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
async function Ec(n, t) {
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

function Mr() {
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
    const e = Tn.__wrap(t);
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
    X(t).send(zo(e, s), Cn.__wrap(r), i !== 0)
  }, n.wbg.__wbg_new_b85e72ed1bfd57f9 = function(t, e) {
    try {
      var s = {
          a: t,
          b: e
        },
        r = (o, u) => {
          const _ = s.a;
          s.a = 0;
          try {
            return Tc(_, s.b, o, u)
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
      let u;
      i !== 0 && (u = bt(i, o).slice(), c.__wbindgen_free(i, o * 1, 1));
      const _ = X(t).getAccountsByCodeHash(bt(e, s), r, u);
      return J(_)
    }, arguments)
  }, n.wbg.__wbg_getTransactions_eb09ca0ff4ac3072 = function() {
    return Et(function(t, e, s, r, i, o) {
      const u = X(t).getTransactions(bt(e, s), bt(r, i), o);
      return J(u)
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
      const t = Ii.global;
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
    const s = cs(X(e)),
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
    const r = $o(t, e, 981, xo);
    return J(r)
  }, n
}

function Or(n, t) {
  return c = n.exports, Dr.__wbindgen_wasm_module = t, Se = null, He = null, c
}

function Pc(n) {
  if (c !== void 0) return c;
  typeof n < "u" && Object.getPrototypeOf(n) === Object.prototype ? {
    module: n
  } = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead");
  const t = Mr();
  n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n));
  const e = new WebAssembly.Instance(n, t);
  return Or(e, n)
}
async function Dr(n) {
  if (c !== void 0) return c;
  typeof n < "u" && Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead"), typeof n > "u" && (n = new URL("" + new URL("nekoton_wasm_bg.CMYqFJ-k.wasm", import.meta.url).href, import.meta.url));
  const t = Mr();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: s
  } = await Ec(await n, t);
  return Or(e, s)
}
const Mc = Object.freeze(Object.defineProperty({
    __proto__: null,
    BytesQuery: Cn,
    ClockWithOffset: fe,
    GenericContract: Tn,
    GqlConnection: Cr,
    JrpcConnection: Tr,
    ProtoConnection: Er,
    ProxyConnection: Pr,
    StringQuery: tn,
    Transport: Te,
    UnsignedMessage: En,
    checkAddress: Wo,
    codeToTvc: ac,
    computeStorageFee: Xo,
    createExternalMessage: Cc,
    createExternalMessageWithoutSignature: Sc,
    createRawExternalMessage: Ic,
    decodeEvent: fc,
    decodeInput: pc,
    decodeOutput: hc,
    decodeTransaction: gc,
    decodeTransactionEvents: bc,
    default: Dr,
    ed25519_generateKeyPair: yc,
    ed25519_sign: vc,
    encodeInternalInput: dc,
    encodeInternalMessage: _c,
    executeLocal: Yo,
    extendSignature: Ac,
    extractContractData: rc,
    extractPublicKey: ic,
    getBocHash: ec,
    getCodeSalt: uc,
    getDataHash: wc,
    getExpectedAddress: Zo,
    initSync: Pc,
    makeFullAccountBoc: Vo,
    mergeTvc: oc,
    packIntoCell: nc,
    parseFullAccountBoc: Qo,
    parseFullAccountStateInit: Jo,
    repackAddress: Go,
    runLocal: Ho,
    setCodeSalt: lc,
    splitTvc: cc,
    unpackContractFields: qo,
    unpackFromCell: sc,
    unpackInitData: tc,
    unpackTransactionTree: mc,
    verifySignature: kc
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Oc = _r(Mc);
var Zt = {};
Object.defineProperty(Zt, "__esModule", {
  value: !0
});
const Dc = {
  ensureNekotonLoaded: void 0,
  nekoton: void 0,
  fetch: void 0,
  fetchAgent: () => {},
  debugLog: void 0
};
Zt.default = Dc;
var Rr = {},
  Rc = en;
en.default = en;
en.stable = Nr;
en.stableStringify = Nr;
var yn = "[...]",
  Lr = "[Circular]",
  Me = [],
  Ee = [];

function Fr() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

function en(n, t, e, s) {
  typeof s > "u" && (s = Fr()), ls(n, "", 0, [], void 0, 0, s);
  var r;
  try {
    Ee.length === 0 ? r = JSON.stringify(n, t, e) : r = JSON.stringify(n, Kr(t), e)
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

function ls(n, t, e, s, r, i, o) {
  i += 1;
  var u;
  if (typeof n == "object" && n !== null) {
    for (u = 0; u < s.length; u++)
      if (s[u] === n) {
        Ke(Lr, n, t, r);
        return
      } if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      Ke(yn, n, t, r);
      return
    }
    if (typeof o.edgesLimit < "u" && e + 1 > o.edgesLimit) {
      Ke(yn, n, t, r);
      return
    }
    if (s.push(n), Array.isArray(n))
      for (u = 0; u < n.length; u++) ls(n[u], u, u, s, n, i, o);
    else {
      var _ = Object.keys(n);
      for (u = 0; u < _.length; u++) {
        var h = _[u];
        ls(n[h], h, u, s, n, i, o)
      }
    }
    s.pop()
  }
}

function Lc(n, t) {
  return n < t ? -1 : n > t ? 1 : 0
}

function Nr(n, t, e, s) {
  typeof s > "u" && (s = Fr());
  var r = us(n, "", 0, [], void 0, 0, s) || n,
    i;
  try {
    Ee.length === 0 ? i = JSON.stringify(r, t, e) : i = JSON.stringify(r, Kr(t), e)
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

function us(n, t, e, s, r, i, o) {
  i += 1;
  var u;
  if (typeof n == "object" && n !== null) {
    for (u = 0; u < s.length; u++)
      if (s[u] === n) {
        Ke(Lr, n, t, r);
        return
      } try {
      if (typeof n.toJSON == "function") return
    } catch {
      return
    }
    if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      Ke(yn, n, t, r);
      return
    }
    if (typeof o.edgesLimit < "u" && e + 1 > o.edgesLimit) {
      Ke(yn, n, t, r);
      return
    }
    if (s.push(n), Array.isArray(n))
      for (u = 0; u < n.length; u++) us(n[u], u, u, s, n, i, o);
    else {
      var _ = {},
        h = Object.keys(n).sort(Lc);
      for (u = 0; u < h.length; u++) {
        var p = h[u];
        us(n[p], p, u, s, n, i, o), _[p] = n[p]
      }
      if (typeof r < "u") Me.push([r, t, n]), r[t] = _;
      else return _
    }
    s.pop()
  }
}

function Kr(n) {
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
const Hs = ve,
  Fc = Si();

function Vs(n, t, e) {
  try {
    Reflect.apply(n, t, e)
  } catch (s) {
    setTimeout(() => {
      throw s
    })
  }
}

function Nc(n) {
  const t = n.length,
    e = new Array(t);
  for (let s = 0; s < t; s += 1) e[s] = n[s];
  return e
}
class Kc extends Fc.EventEmitter {
  emit(t, ...e) {
    let s = t === "error";
    const r = this._events;
    if (r !== void 0) s = s && r.error === void 0;
    else if (!s) return !1;
    if (s) {
      let o;
      if (e.length > 0 && ([o] = e), o instanceof Error) throw o;
      const u = new Error(`Unhandled error.${o?` (${o.message})`:""}`);
      throw u.context = o, u
    }
    const i = r[t];
    if (i === void 0) return !1;
    if (typeof i == "function") Vs(i, this, e);
    else {
      const o = i.length,
        u = Nc(i);
      for (let _ = 0; _ < o; _ += 1) Vs(u[_], this, e)
    }
    return !0
  }
}
Ht.SafeEventEmitter = Kc;

function jc(n) {
  if (typeof n == "object" && !(0, Hs.isAddressObject)(n)) throw new Error("Invalid address object");
  return typeof n == "object" ? n : new Hs.Address(n)
}
Ht.convertToAddressObject = jc;
const Bc = n => {
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
Ht.convertVersionToInt32 = Bc;
const jr = 4294967295;
let Qn = Math.floor(Math.random() * jr);

function $c() {
  return Qn = (Qn + 1) % jr, Qn
}
Ht.getUniqueId = $c;
var bn = {},
  ye = {};
Object.defineProperty(ye, "__esModule", {
  value: !0
});
ye.Mutex = ye.Semaphore = void 0;

function mn(n) {
  if (typeof n != "function") throw new TypeError(n + " is not a function");
  return n
}

function Qs(n) {
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
      if (mn(o), e) {
        typeof e == "function" ? e = [e, o] : e.push(o);
        return
      }
      e = o, t.data = r = ++r % 2
    }
}
const xc = function() {
  if (typeof queueMicrotask == "function") return function(n) {
    queueMicrotask(mn(n))
  };
  if (typeof document == "object" && document) {
    if (typeof MutationObserver == "function") return Qs(MutationObserver);
    if (typeof window.WebKitMutationObserver == "function") return Qs(window.WebKitMutationObserver)
  }
  if (typeof setImmediate == "function") return function(n) {
    setImmediate(mn(n))
  };
  if (typeof setTimeout == "function" || typeof setTimeout == "object") return function(n) {
    setTimeout(mn(n), 0)
  };
  throw new Error("No `nextTick` implementation found")
}();
class Br {
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
      this.tasks.push(s), xc(this.sched.bind(this))
    })
  }
  use(t) {
    return this.acquire().then(e => t().then(s => (e(), s)).catch(s => {
      throw e(), s
    }))
  }
}
ye.Semaphore = Br;
class zc extends Br {
  constructor() {
    super(1)
  }
}
ye.Mutex = zc;
var Pn = {},
  Uc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.GqlSocket = void 0;
const ds = Uc(Zt);
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
          const u = Date.now();
          try {
            let _;
            this.currentEndpoint != null && u < this.nextLatencyDetectionTime ? _ = this.currentEndpoint : this.resolutionPromise != null ? (_ = await this.resolutionPromise, delete this.resolutionPromise) : (delete this.currentEndpoint, this.resolutionPromise = this._selectQueryingEndpoint().then(p => (this.currentEndpoint = p, this.nextLatencyDetectionTime = Date.now() + this.latencyDetectionInterval, p)), _ = await this.resolutionPromise, delete this.resolutionPromise);
            const h = await fetch(_.url, {
              method: "post",
              headers: Wc,
              body: r,
              agent: _.agent
            }).then(p => p.text());
            i.onReceive(h)
          } catch (_) {
            i.onError(_)
          }
        })()
      }
      async _selectQueryingEndpoint() {
        const r = this.maxLatency,
          i = this.endpoints.length;
        for (let o = 0; o < 5; ++o) {
          let u;
          const _ = new Promise((C, A) => {
            u = {
              resolve: E => C(E),
              reject: () => A(void 0)
            }
          });
          let h = 0,
            p;
          for (const C of this.endpoints) nn.checkLatency(C).then(A => {
            if (++h, A !== void 0 && A <= r) return u.resolve(C);
            (p === void 0 || p.latency === void 0 || A !== void 0 && A < p.latency) && (p = {
              endpoint: C,
              latency: A
            }), h >= i && ((p == null ? void 0 : p.latency) !== void 0 ? u.resolve(p.endpoint) : u.reject())
          });
          try {
            return await _
          } catch {
            let A;
            const E = new Promise(b => {
              A = () => b()
            });
            setTimeout(() => A(), Math.min(100 * o, 5e3)), await E
          }
        }
        throw new Error("Not available endpoint found")
      }
    }
    return new ds.default.nekoton.GqlConnection(new e(t))
  }
  static async checkLatency(t) {
    const e = await fetch(`${t.url}?query=%7Binfo%7Bversion%20time%20latency%7D%7D`, {
      method: "get",
      agent: t.agent
    }).then(o => o.json()).catch(o => {
      ds.default.debugLog(o)
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
Pn.GqlSocket = nn;
nn.expandAddress = n => {
  const t = n.lastIndexOf("/");
  n = t < 0 ? n : n.substring(0, t);
  let e;
  return n.startsWith("http://") || n.startsWith("https://") ? e = `${n}/graphql` : ["localhost", "127.0.0.1"].indexOf(n) >= 0 ? e = `http://${n}/graphql` : e = `https://${n}/graphql`, {
    url: e,
    agent: ds.default.fetchAgent(e)
  }
};
const Wc = {
  "Content-Type": "application/json"
};
var Mn = {},
  Gc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Mn, "__esModule", {
  value: !0
});
Mn.JrpcSocket = void 0;
const Jn = Gc(Zt);
class Hc {
  async connect(t) {
    class e {
      constructor(r) {
        this.endpoint = r.endpoint, this.endpointAgent = Jn.default.fetchAgent(this.endpoint), this.alternativeEndpoint = r.alternativeEndpoint != null ? r.alternativeEndpoint : r.endpoint, this.alternativeEndpointAgent = Jn.default.fetchAgent(this.alternativeEndpoint)
      }
      send(r, i, o) {
        (async () => {
          try {
            const u = o ? this.endpoint : this.alternativeEndpoint,
              _ = o ? this.endpointAgent : this.alternativeEndpointAgent,
              h = await fetch(u, {
                method: "post",
                headers: Vc,
                body: r,
                agent: _
              }).then(p => p.text());
            i.onReceive(h)
          } catch (u) {
            i.onError(u)
          }
        })()
      }
    }
    return new Jn.default.nekoton.JrpcConnection(new e(t))
  }
}
Mn.JrpcSocket = Hc;
const Vc = {
  "Content-Type": "application/json"
};
var On = {},
  Qc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(On, "__esModule", {
  value: !0
});
On.ProtoSocket = void 0;
const Js = Qc(Zt);
class Jc {
  async connect(t) {
    class e {
      constructor(r) {
        this.endpoint = r.endpoint, this.endpointAgent = Js.default.fetchAgent(this.endpoint)
      }
      send(r, i, o) {
        (async () => {
          try {
            const u = await fetch(this.endpoint, {
              method: "post",
              headers: Xc,
              body: new Uint8Array(r),
              agent: this.endpointAgent
            }).then(_ => _.arrayBuffer());
            i.onReceive(new Uint8Array(u))
          } catch (u) {
            i.onError(u)
          }
        })()
      }
    }
    return new Js.default.nekoton.ProtoConnection(new e(t))
  }
}
On.ProtoSocket = Jc;
const Xc = {
  "Content-Type": "application/x-protobuf"
};
(function(n) {
  var t = tt && tt.__importDefault || function(f) {
    return f && f.__esModule ? f : {
      default: f
    }
  };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.ConnectionController = n.createConnectionController = n.ConnectionError = n.checkConnection = n.NETWORK_PRESETS = void 0;
  const e = ye,
    s = t(Zt),
    r = Pn,
    i = Mn,
    o = On;
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
  const u = f => {
    switch (f) {
      case 1:
        return "mainnet";
      case 2:
        return "testnet";
      case 10:
        return "fld";
      case 31337:
        return "localnet";
      default:
        return `network${f}`
    }
  };

  function _(f) {
    if (typeof f == "string") {
      const w = n.NETWORK_PRESETS[f];
      if (w == null) throw new Error(`Target preset id not found: ${f}`);
      return w
    } else return f
  }
  async function h(f) {
    const w = _(f),
      B = new s.default.nekoton.ClockWithOffset;
    try {
      const v = new A(B);
      await v._connect(w), v._initializedTransport != null && E(v._initializedTransport)
    } catch (v) {
      throw new p(w, v.toString())
    } finally {
      B.free()
    }
  }
  n.checkConnection = h;
  class p extends Error {
    constructor(w, B) {
      super(B), this.params = w
    }
  }
  n.ConnectionError = p;
  async function C(f, w, B = !1) {
    const v = _(w);
    for (;;) try {
      const y = new A(f);
      return await y.startSwitchingNetwork(v).then(m => m.switch()), s.default.debugLog(`Successfully connected to ${v.group}`), y
    } catch (y) {
      if (B) console.error("Connection failed:", y), await new Promise(m => {
        setTimeout(() => m(), 5e3)
      }), s.default.debugLog("Restarting connection process");
      else throw y
    }
  }
  n.createConnectionController = C;
  class A {
    constructor(w) {
      this._networkMutex = new e.Mutex, this._acquiredTransportCounter = 0, this._clock = w
    }
    async acquire() {
      return b(this._initializedTransport), await this._acquireTransport(), {
        transport: this._initializedTransport,
        release: () => this._releaseTransport()
      }
    }
    async use(w) {
      return b(this._initializedTransport), await this._acquireTransport(), w(this._initializedTransport).finally(() => {
        this._releaseTransport()
      })
    }
    async startSwitchingNetwork(w) {
      var B;
      class v {
        constructor(L, j, $) {
          this._controller = L, this._release = j, this._params = $
        }
        async switch () {
          await this._controller._connect(this._params).finally(() => this._release())
        }
      }(B = this._cancelTestTransport) === null || B === void 0 || B.call(this);
      const y = await this._networkMutex.acquire();
      return new v(this, y, w)
    }
    get initializedTransport() {
      return this._initializedTransport
    }
    async _connect(w) {
      this._initializedTransport != null && E(this._initializedTransport), this._initializedTransport = void 0;
      let B;
      (function(y) {
        y[y.DONE = 0] = "DONE", y[y.CANCELLED = 1] = "CANCELLED"
      })(B || (B = {}));
      const v = async ({
        data: {
          transport: y
        }
      }, m) => new Promise((L, j) => {
        this._cancelTestTransport = () => L(B.CANCELLED), m ? y.getAccountsByCodeHash("4e92716de61d456e58f16e4e867e3e93a7548321eace86301b51c8b80ca6239b", 1).then(() => L(B.DONE)).catch($ => j($)) : y.getFullContractState("-1:0000000000000000000000000000000000000000000000000000000000000000").then(() => L(B.DONE)).catch($ => j($)), setTimeout(() => j(new Error("Connection timeout")), 1e4)
      }).finally(() => this._cancelTestTransport = void 0);
      try {
        const y = w.group != null ? w.group : u(w.id),
          {
            local: m,
            transportData: L
          } = await (async () => {
            switch (w.type) {
              case "graphql": {
                const j = new r.GqlSocket,
                  $ = await j.connect(w.data),
                  l = s.default.nekoton.Transport.fromGqlConnection($, this._clock),
                  d = {
                    id: w.id,
                    group: y,
                    type: "graphql",
                    data: {
                      socket: j,
                      connection: $,
                      transport: l
                    }
                  };
                return {
                  local: w.data.local === !0,
                  transportData: d
                }
              }
              case "jrpc": {
                const j = new i.JrpcSocket,
                  $ = await j.connect(w.data),
                  l = s.default.nekoton.Transport.fromJrpcConnection($, this._clock);
                return {
                  local: !1,
                  transportData: {
                    id: w.id,
                    group: y,
                    type: "jrpc",
                    data: {
                      socket: j,
                      connection: $,
                      transport: l
                    }
                  }
                }
              }
              case "proto": {
                const j = new o.ProtoSocket,
                  $ = await j.connect(w.data),
                  l = s.default.nekoton.Transport.fromProtoConnection($, this._clock);
                return {
                  local: !1,
                  transportData: {
                    id: w.id,
                    group: y,
                    type: "proto",
                    data: {
                      socket: j,
                      connection: $,
                      transport: l
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
                    group: y,
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
          if (await v(L, m) == B.CANCELLED) {
            E(L);
            return
          }
        } catch (j) {
          throw E(L), j
        }
        this._initializedTransport = L
      } catch (y) {
        throw new Error(`Failed to create connection: ${y.toString()}`)
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
  n.ConnectionController = A;

  function E(f) {
    f.data.transport.free(), f.data.connection.free()
  }

  function b(f) {
    if (f == null) throw new Error("Connection is not initialized")
  }
})(bn);
var Dn = {},
  Rn = {},
  Yc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Rn, "__esModule", {
  value: !0
});
Rn.ContractSubscription = void 0;
const Zc = ye,
  Wt = Yc(Zt);
class ys {
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
      const u = await i.subscribeToGenericContract(e, s);
      if (u == null) throw new Error(`Failed to subscribe to contract: ${e}`);
      return new ys(r, o, e, u)
    } catch (u) {
      throw o(), u
    }
  }
  constructor(t, e, s, r) {
    this._contractMutex = new Zc.Mutex, this._pollingInterval = el, this._isRunning = !1, this._skipIteration = !1, this._connection = t, this._address = s, this._contract = r, this._releaseTransport = e, this._currentPollingMethod = r.pollingMethod
  }
  setPollingInterval(t) {
    this._pollingInterval = t
  }
  async start() {
    if (this._releaseTransport == null) throw new Error("Contract subscription must not be started after being closed");
    this._loopPromise && (Wt.default.debugLog("ContractSubscription -> awaiting loop promise"), await this._loopPromise), Wt.default.debugLog("ContractSubscription -> loop started"), this._loopPromise = (async () => {
      const t = !(this._connection instanceof Wt.default.nekoton.GqlConnection),
        e = this._connection instanceof Wt.default.nekoton.ProxyConnection;
      this._isRunning = !0;
      let s = this._currentPollingMethod;
      for (; this._isRunning;) {
        this._skipIteration = !1;
        const r = s != this._currentPollingMethod;
        if (s = this._currentPollingMethod, t || this._currentPollingMethod == "manual") {
          this._currentBlockId = void 0, Wt.default.debugLog("ContractSubscription -> manual -> waiting begins");
          const i = this._currentPollingMethod == "manual" || e ? this._pollingInterval : tl;
          if (await new Promise(o => {
              const u = setTimeout(() => {
                this._refreshTimer = void 0, o()
              }, i);
              this._refreshTimer = [u, o]
            }), Wt.default.debugLog("ContractSubscription -> manual -> waiting ends"), this._skipIteration) continue;
          if (!this._isRunning) break;
          Wt.default.debugLog("ContractSubscription -> manual -> refreshing begins");
          try {
            this._currentPollingMethod = await this._contractMutex.use(async () => (await this._contract.refresh(), this._contract.pollingMethod))
          } catch (o) {
            Wt.default.debugLog(`Error during account refresh (${this._address})`, o)
          }
          Wt.default.debugLog("ContractSubscription -> manual -> refreshing ends")
        } else {
          const i = this._connection;
          Wt.default.debugLog("ContractSubscription -> reliable start"), r && this._suggestedBlockId != null && (this._currentBlockId = this._suggestedBlockId), this._suggestedBlockId = void 0;
          let o;
          if (this._currentBlockId == null) {
            Wt.default.debugLog("ContractSubscription -> starting reliable connection with unknown block");
            try {
              const u = await i.getLatestBlock(this._address);
              this._currentBlockId = u.id, o = this._currentBlockId
            } catch (u) {
              Wt.default.debugLog(`Failed to get latest block for ${this._address}`, u);
              continue
            }
          } else try {
            o = await i.waitForNextBlock(this._currentBlockId, this._address, qc)
          } catch {
            Wt.default.debugLog(`Failed to wait for next block for ${this._address}`);
            continue
          }
          try {
            this._currentPollingMethod = await this._contractMutex.use(async () => (await this._contract.handleBlock(o), this._contract.pollingMethod)), this._currentBlockId = o
          } catch (u) {
            Wt.default.debugLog(`Failed to handle block for ${this._address}`, u)
          }
        }
      }
      Wt.default.debugLog("ContractSubscription -> loop finished")
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
      this._connection instanceof Wt.default.nekoton.GqlConnection && (this._suggestedBlockId = (await this._connection.getLatestBlock(this._address)).id)
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
Rn.ContractSubscription = ys;
const qc = 60,
  tl = 2e3,
  el = 6e4;
Object.defineProperty(Dn, "__esModule", {
  value: !0
});
Dn.SubscriptionController = void 0;
const nl = ye,
  Xs = Ht,
  sl = Rn,
  rl = 1e4;
class il {
  constructor(t, e) {
    this._subscriptions = new Map, this._subscriptionsMutex = new nl.Mutex, this._sendMessageRequests = new Map, this._subscriptionStates = new Map, this._pollingInterval = rl, this._connectionController = t, this._notify = e
  }
  setPollingInterval(t) {
    this._pollingInterval = t
  }
  async sendMessageLocally(t, e, s) {
    const r = (0, Xs.getUniqueId)();
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
    const i = (0, Xs.getUniqueId)();
    return new Promise((o, u) => {
      r.set(s, {
        resolve: o,
        reject: u
      }), this.subscribeToContract(t, {
        state: !0
      }, i).then(async () => {
        const _ = this._subscriptions.get(t);
        if (_ == null) throw new Error("Failed to subscribe to contract");
        await _.prepareReliablePolling(), await _.use(async h => {
          await h.sendMessage(e), _.skipRefreshTimer(h.pollingMethod)
        })
      }).catch(_ => this._rejectMessageRequest(t, s, _)).finally(() => {
        this.unsubscribeFromContract(t, i).catch(console.error)
      })
    })
  }
  async subscribeToContract(t, e, s) {
    return this._subscriptionsMutex.use(async () => {
      const r = p => {
          const C = {
            ...p
          };
          return Object.keys(C).map(A => {
            if (A !== "state" && A !== "transactions") throw new Error(`Unknown subscription topic: ${A}`);
            const E = e[A];
            if (typeof E == "boolean") C[A] = E;
            else {
              if (E == null) return;
              throw new Error(`Unknown subscription topic value ${A}: ${E}`)
            }
          }), C
        },
        i = this._subscriptionStates.get(t) || al();
      let o;
      if (s == null) o = r(i.client);
      else {
        const p = i.internal.get(s);
        p != null ? (o = r(p), Ys(o) && i.internal.delete(s)) : o = r({
          state: !1,
          transactions: !1
        })
      }
      const u = {
        ...o
      };
      for (const p of i.internal.values()) u.state || (u.state = p.state), u.transactions || (u.transactions = p.transactions);
      if (Ys(u)) return this._subscriptionStates.delete(t), await this._tryUnsubscribe(t), {
        ...u
      };
      let _ = this._subscriptions.get(t);
      const h = _ == null;
      return _ == null && (_ = await this._createSubscription(t)), s == null ? i.client = o : i.internal.set(s, o), this._subscriptionStates.set(t, i), h && await _.start(), {
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
      constructor(o, u) {
        this._enabled = !1, this._address = o, this._controller = u
      }
      enableNotifications() {
        this._enabled = !0
      }
      onMessageExpired(o) {
        this._controller._resolveMessageRequest(this._address, o.messageHash, void 0).catch(console.error)
      }
      onMessageSent(o, u) {
        this._controller._resolveMessageRequest(this._address, o.messageHash, u).catch(console.error)
      }
      onStateChanged(o) {
        this._enabled && this._controller._notifyStateChanged(this._address, o)
      }
      onTransactionsFound(o, u) {
        this._enabled && this._controller._notifyTransactionsFound(this._address, o, u)
      }
    }
    const s = new e(t, this),
      r = await sl.ContractSubscription.subscribe(this._connectionController, t, s);
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
Dn.SubscriptionController = il;
const al = () => ({
    internal: new Map,
    client: {
      state: !1,
      transactions: !1
    }
  }),
  Ys = n => !n.state && !n.transactions;
var _s = {},
  Ln = {};
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
Ln.GiverAccount = void 0;
const ol = Ht;
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
    this.address = (0, ol.convertToAddressObject)(t.address), this.publicKey = t.publicKey
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
      abi: cl,
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
Ln.GiverAccount = sn;
sn.GIVER_KEY_PAIR = {
  secretKey: "172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3",
  publicKey: "2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16"
};
const cl = `{
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
var $e = {};
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.MsigAccount = $e.GenericAccount = void 0;
const ll = Ht;
class $r {
  constructor(t) {
    this.address = (0, ll.convertToAddressObject)(t.address), this.abi = typeof t.abi == "string" ? t.abi : JSON.stringify(t.abi), this.prepareMessageImpl = t.prepareMessage, this.publicKey = t.publicKey
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
        stateInit: u
      } = await this.prepareMessageImpl(t, e);
    return e.createExternalMessage({
      address: this.address,
      signer: r,
      timeout: t.timeout,
      abi: this.abi,
      method: i,
      params: o,
      stateInit: u,
      signatureId: t.signatureId
    })
  }
}
$e.GenericAccount = $r;
class ul extends $r {
  constructor(t) {
    const e = t.type === "multisig2";
    super({
      address: t.address,
      publicKey: t.publicKey,
      abi: e ? _l : dl,
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
$e.MsigAccount = ul;
const dl = `{
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
  _l = `{
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
var Fn = {},
  pl = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  Xn = Math.ceil,
  ee = Math.floor,
  Jt = "[BigNumber Error] ",
  Zs = Jt + "Number primitive has more than 15 significant digits: ",
  ie = 1e14,
  it = 14,
  Yn = 9007199254740991,
  Zn = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  me = 1e7,
  Ft = 1e9;

function xr(n) {
  var t, e, s, r = v.prototype = {
      constructor: v,
      toString: null,
      valueOf: null
    },
    i = new v(1),
    o = 20,
    u = 4,
    _ = -7,
    h = 21,
    p = -1e7,
    C = 1e7,
    A = !1,
    E = 1,
    b = 0,
    f = {
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
    B = !0;

  function v(l, d) {
    var g, P, S, O, N, k, M, K, F = this;
    if (!(F instanceof v)) return new v(l, d);
    if (d == null) {
      if (l && l._isBigNumber === !0) {
        F.s = l.s, !l.c || l.e > C ? F.c = F.e = null : l.e < p ? F.c = [F.e = 0] : (F.e = l.e, F.c = l.c.slice());
        return
      }
      if ((k = typeof l == "number") && l * 0 == 0) {
        if (F.s = 1 / l < 0 ? (l = -l, -1) : 1, l === ~~l) {
          for (O = 0, N = l; N >= 10; N /= 10, O++);
          O > C ? F.c = F.e = null : (F.e = O, F.c = [l]);
          return
        }
        K = String(l)
      } else {
        if (!pl.test(K = String(l))) return s(F, K, k);
        F.s = K.charCodeAt(0) == 45 ? (K = K.slice(1), -1) : 1
      }(O = K.indexOf(".")) > -1 && (K = K.replace(".", "")), (N = K.search(/e/i)) > 0 ? (O < 0 && (O = N), O += +K.slice(N + 1), K = K.substring(0, N)) : O < 0 && (O = K.length)
    } else {
      if (Ct(d, 2, w.length, "Base"), d == 10 && B) return F = new v(l), j(F, o + F.e + 1, u);
      if (K = String(l), k = typeof l == "number") {
        if (l * 0 != 0) return s(F, K, k, d);
        if (F.s = 1 / l < 0 ? (K = K.slice(1), -1) : 1, v.DEBUG && K.replace(/^0\.0*|\./, "").length > 15) throw Error(Zs + l)
      } else F.s = K.charCodeAt(0) === 45 ? (K = K.slice(1), -1) : 1;
      for (g = w.slice(0, d), O = N = 0, M = K.length; N < M; N++)
        if (g.indexOf(P = K.charAt(N)) < 0) {
          if (P == ".") {
            if (N > O) {
              O = M;
              continue
            }
          } else if (!S && (K == K.toUpperCase() && (K = K.toLowerCase()) || K == K.toLowerCase() && (K = K.toUpperCase()))) {
            S = !0, N = -1, O = 0;
            continue
          }
          return s(F, String(l), k, d)
        } k = !1, K = e(K, d, 10, F.s), (O = K.indexOf(".")) > -1 ? K = K.replace(".", "") : O = K.length
    }
    for (N = 0; K.charCodeAt(N) === 48; N++);
    for (M = K.length; K.charCodeAt(--M) === 48;);
    if (K = K.slice(N, ++M)) {
      if (M -= N, k && v.DEBUG && M > 15 && (l > Yn || l !== ee(l))) throw Error(Zs + F.s * l);
      if ((O = O - N - 1) > C) F.c = F.e = null;
      else if (O < p) F.c = [F.e = 0];
      else {
        if (F.e = O, F.c = [], N = (O + 1) % it, O < 0 && (N += it), N < M) {
          for (N && F.c.push(+K.slice(0, N)), M -= it; N < M;) F.c.push(+K.slice(N, N += it));
          N = it - (K = K.slice(N)).length
        } else N -= M;
        for (; N--; K += "0");
        F.c.push(+K)
      }
    } else F.c = [F.e = 0]
  }
  v.clone = xr, v.ROUND_UP = 0, v.ROUND_DOWN = 1, v.ROUND_CEIL = 2, v.ROUND_FLOOR = 3, v.ROUND_HALF_UP = 4, v.ROUND_HALF_DOWN = 5, v.ROUND_HALF_EVEN = 6, v.ROUND_HALF_CEIL = 7, v.ROUND_HALF_FLOOR = 8, v.EUCLID = 9, v.config = v.set = function(l) {
    var d, g;
    if (l != null)
      if (typeof l == "object") {
        if (l.hasOwnProperty(d = "DECIMAL_PLACES") && (g = l[d], Ct(g, 0, Ft, d), o = g), l.hasOwnProperty(d = "ROUNDING_MODE") && (g = l[d], Ct(g, 0, 8, d), u = g), l.hasOwnProperty(d = "EXPONENTIAL_AT") && (g = l[d], g && g.pop ? (Ct(g[0], -Ft, 0, d), Ct(g[1], 0, Ft, d), _ = g[0], h = g[1]) : (Ct(g, -Ft, Ft, d), _ = -(h = g < 0 ? -g : g))), l.hasOwnProperty(d = "RANGE"))
          if (g = l[d], g && g.pop) Ct(g[0], -Ft, -1, d), Ct(g[1], 1, Ft, d), p = g[0], C = g[1];
          else if (Ct(g, -Ft, Ft, d), g) p = -(C = g < 0 ? -g : g);
        else throw Error(Jt + d + " cannot be zero: " + g);
        if (l.hasOwnProperty(d = "CRYPTO"))
          if (g = l[d], g === !!g)
            if (g)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) A = g;
              else throw A = !g, Error(Jt + "crypto unavailable");
        else A = g;
        else throw Error(Jt + d + " not true or false: " + g);
        if (l.hasOwnProperty(d = "MODULO_MODE") && (g = l[d], Ct(g, 0, 9, d), E = g), l.hasOwnProperty(d = "POW_PRECISION") && (g = l[d], Ct(g, 0, Ft, d), b = g), l.hasOwnProperty(d = "FORMAT"))
          if (g = l[d], typeof g == "object") f = g;
          else throw Error(Jt + d + " not an object: " + g);
        if (l.hasOwnProperty(d = "ALPHABET"))
          if (g = l[d], typeof g == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(g)) B = g.slice(0, 10) == "0123456789", w = g;
          else throw Error(Jt + d + " invalid: " + g)
      } else throw Error(Jt + "Object expected: " + l);
    return {
      DECIMAL_PLACES: o,
      ROUNDING_MODE: u,
      EXPONENTIAL_AT: [_, h],
      RANGE: [p, C],
      CRYPTO: A,
      MODULO_MODE: E,
      POW_PRECISION: b,
      FORMAT: f,
      ALPHABET: w
    }
  }, v.isBigNumber = function(l) {
    if (!l || l._isBigNumber !== !0) return !1;
    if (!v.DEBUG) return !0;
    var d, g, P = l.c,
      S = l.e,
      O = l.s;
    t: if ({}.toString.call(P) == "[object Array]") {
      if ((O === 1 || O === -1) && S >= -Ft && S <= Ft && S === ee(S)) {
        if (P[0] === 0) {
          if (S === 0 && P.length === 1) return !0;
          break t
        }
        if (d = (S + 1) % it, d < 1 && (d += it), String(P[0]).length == d) {
          for (d = 0; d < P.length; d++)
            if (g = P[d], g < 0 || g >= ie || g !== ee(g)) break t;
          if (g !== 0) return !0
        }
      }
    } else if (P === null && S === null && (O === null || O === 1 || O === -1)) return !0;
    throw Error(Jt + "Invalid BigNumber: " + l)
  }, v.maximum = v.max = function() {
    return m(arguments, -1)
  }, v.minimum = v.min = function() {
    return m(arguments, 1)
  }, v.random = function() {
    var l = 9007199254740992,
      d = Math.random() * l & 2097151 ? function() {
        return ee(Math.random() * l)
      } : function() {
        return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
      };
    return function(g) {
      var P, S, O, N, k, M = 0,
        K = [],
        F = new v(i);
      if (g == null ? g = o : Ct(g, 0, Ft), N = Xn(g / it), A)
        if (crypto.getRandomValues) {
          for (P = crypto.getRandomValues(new Uint32Array(N *= 2)); M < N;) k = P[M] * 131072 + (P[M + 1] >>> 11), k >= 9e15 ? (S = crypto.getRandomValues(new Uint32Array(2)), P[M] = S[0], P[M + 1] = S[1]) : (K.push(k % 1e14), M += 2);
          M = N / 2
        } else if (crypto.randomBytes) {
        for (P = crypto.randomBytes(N *= 7); M < N;) k = (P[M] & 31) * 281474976710656 + P[M + 1] * 1099511627776 + P[M + 2] * 4294967296 + P[M + 3] * 16777216 + (P[M + 4] << 16) + (P[M + 5] << 8) + P[M + 6], k >= 9e15 ? crypto.randomBytes(7).copy(P, M) : (K.push(k % 1e14), M += 7);
        M = N / 7
      } else throw A = !1, Error(Jt + "crypto unavailable");
      if (!A)
        for (; M < N;) k = d(), k < 9e15 && (K[M++] = k % 1e14);
      for (N = K[--M], g %= it, N && g && (k = Zn[it - g], K[M] = ee(N / k) * k); K[M] === 0; K.pop(), M--);
      if (M < 0) K = [O = 0];
      else {
        for (O = -1; K[0] === 0; K.splice(0, 1), O -= it);
        for (M = 1, k = K[0]; k >= 10; k /= 10, M++);
        M < it && (O -= it - M)
      }
      return F.e = O, F.c = K, F
    }
  }(), v.sum = function() {
    for (var l = 1, d = arguments, g = new v(d[0]); l < d.length;) g = g.plus(d[l++]);
    return g
  }, e = function() {
    var l = "0123456789";

    function d(g, P, S, O) {
      for (var N, k = [0], M, K = 0, F = g.length; K < F;) {
        for (M = k.length; M--; k[M] *= P);
        for (k[0] += O.indexOf(g.charAt(K++)), N = 0; N < k.length; N++) k[N] > S - 1 && (k[N + 1] == null && (k[N + 1] = 0), k[N + 1] += k[N] / S | 0, k[N] %= S)
      }
      return k.reverse()
    }
    return function(g, P, S, O, N) {
      var k, M, K, F, U, et, nt, _t, vt = g.indexOf("."),
        Pt = o,
        dt = u;
      for (vt >= 0 && (F = b, b = 0, g = g.replace(".", ""), _t = new v(P), et = _t.pow(g.length - vt), b = F, _t.c = d(de(te(et.c), et.e, "0"), 10, S, l), _t.e = _t.c.length), nt = d(g, P, S, N ? (k = w, l) : (k = l, w)), K = F = nt.length; nt[--F] == 0; nt.pop());
      if (!nt[0]) return k.charAt(0);
      if (vt < 0 ? --K : (et.c = nt, et.e = K, et.s = O, et = t(et, _t, Pt, dt, S), nt = et.c, U = et.r, K = et.e), M = K + Pt + 1, vt = nt[M], F = S / 2, U = U || M < 0 || nt[M + 1] != null, U = dt < 4 ? (vt != null || U) && (dt == 0 || dt == (et.s < 0 ? 3 : 2)) : vt > F || vt == F && (dt == 4 || U || dt == 6 && nt[M - 1] & 1 || dt == (et.s < 0 ? 8 : 7)), M < 1 || !nt[0]) g = U ? de(k.charAt(1), -Pt, k.charAt(0)) : k.charAt(0);
      else {
        if (nt.length = M, U)
          for (--S; ++nt[--M] > S;) nt[M] = 0, M || (++K, nt = [1].concat(nt));
        for (F = nt.length; !nt[--F];);
        for (vt = 0, g = ""; vt <= F; g += k.charAt(nt[vt++]));
        g = de(g, K, k.charAt(0))
      }
      return g
    }
  }(), t = function() {
    function l(P, S, O) {
      var N, k, M, K, F = 0,
        U = P.length,
        et = S % me,
        nt = S / me | 0;
      for (P = P.slice(); U--;) M = P[U] % me, K = P[U] / me | 0, N = nt * M + K * et, k = et * M + N % me * me + F, F = (k / O | 0) + (N / me | 0) + nt * K, P[U] = k % O;
      return F && (P = [F].concat(P)), P
    }

    function d(P, S, O, N) {
      var k, M;
      if (O != N) M = O > N ? 1 : -1;
      else
        for (k = M = 0; k < O; k++)
          if (P[k] != S[k]) {
            M = P[k] > S[k] ? 1 : -1;
            break
          } return M
    }

    function g(P, S, O, N) {
      for (var k = 0; O--;) P[O] -= k, k = P[O] < S[O] ? 1 : 0, P[O] = k * N + P[O] - S[O];
      for (; !P[0] && P.length > 1; P.splice(0, 1));
    }
    return function(P, S, O, N, k) {
      var M, K, F, U, et, nt, _t, vt, Pt, dt, ht, Rt, Oe, ze, Ue, qt, Ae, Vt = P.s == S.s ? 1 : -1,
        Kt = P.c,
        At = S.c;
      if (!Kt || !Kt[0] || !At || !At[0]) return new v(!P.s || !S.s || (Kt ? At && Kt[0] == At[0] : !At) ? NaN : Kt && Kt[0] == 0 || !At ? Vt * 0 : Vt / 0);
      for (vt = new v(Vt), Pt = vt.c = [], K = P.e - S.e, Vt = O + K + 1, k || (k = ie, K = ne(P.e / it) - ne(S.e / it), Vt = Vt / it | 0), F = 0; At[F] == (Kt[F] || 0); F++);
      if (At[F] > (Kt[F] || 0) && K--, Vt < 0) Pt.push(1), U = !0;
      else {
        for (ze = Kt.length, qt = At.length, F = 0, Vt += 2, et = ee(k / (At[0] + 1)), et > 1 && (At = l(At, et, k), Kt = l(Kt, et, k), qt = At.length, ze = Kt.length), Oe = qt, dt = Kt.slice(0, qt), ht = dt.length; ht < qt; dt[ht++] = 0);
        Ae = At.slice(), Ae = [0].concat(Ae), Ue = At[0], At[1] >= k / 2 && Ue++;
        do {
          if (et = 0, M = d(At, dt, qt, ht), M < 0) {
            if (Rt = dt[0], qt != ht && (Rt = Rt * k + (dt[1] || 0)), et = ee(Rt / Ue), et > 1)
              for (et >= k && (et = k - 1), nt = l(At, et, k), _t = nt.length, ht = dt.length; d(nt, dt, _t, ht) == 1;) et--, g(nt, qt < _t ? Ae : At, _t, k), _t = nt.length, M = 1;
            else et == 0 && (M = et = 1), nt = At.slice(), _t = nt.length;
            if (_t < ht && (nt = [0].concat(nt)), g(dt, nt, ht, k), ht = dt.length, M == -1)
              for (; d(At, dt, qt, ht) < 1;) et++, g(dt, qt < ht ? Ae : At, ht, k), ht = dt.length
          } else M === 0 && (et++, dt = [0]);
          Pt[F++] = et, dt[0] ? dt[ht++] = Kt[Oe] || 0 : (dt = [Kt[Oe]], ht = 1)
        } while ((Oe++ < ze || dt[0] != null) && Vt--);
        U = dt[0] != null, Pt[0] || Pt.splice(0, 1)
      }
      if (k == ie) {
        for (F = 1, Vt = Pt[0]; Vt >= 10; Vt /= 10, F++);
        j(vt, O + (vt.e = F + K * it - 1) + 1, N, U)
      } else vt.e = K, vt.r = +U;
      return vt
    }
  }();

  function y(l, d, g, P) {
    var S, O, N, k, M;
    if (g == null ? g = u : Ct(g, 0, 8), !l.c) return l.toString();
    if (S = l.c[0], N = l.e, d == null) M = te(l.c), M = P == 1 || P == 2 && (N <= _ || N >= h) ? fn(M, N) : de(M, N, "0");
    else if (l = j(new v(l), d, g), O = l.e, M = te(l.c), k = M.length, P == 1 || P == 2 && (d <= O || O <= _)) {
      for (; k < d; M += "0", k++);
      M = fn(M, O)
    } else if (d -= N, M = de(M, O, "0"), O + 1 > k) {
      if (--d > 0)
        for (M += "."; d--; M += "0");
    } else if (d += O - k, d > 0)
      for (O + 1 == k && (M += "."); d--; M += "0");
    return l.s < 0 && S ? "-" + M : M
  }

  function m(l, d) {
    for (var g, P, S = 1, O = new v(l[0]); S < l.length; S++) P = new v(l[S]), (!P.s || (g = Ie(O, P)) === d || g === 0 && O.s === d) && (O = P);
    return O
  }

  function L(l, d, g) {
    for (var P = 1, S = d.length; !d[--S]; d.pop());
    for (S = d[0]; S >= 10; S /= 10, P++);
    return (g = P + g * it - 1) > C ? l.c = l.e = null : g < p ? l.c = [l.e = 0] : (l.e = g, l.c = d), l
  }
  s = function() {
    var l = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      d = /^([^.]+)\.$/,
      g = /^\.([^.]+)$/,
      P = /^-?(Infinity|NaN)$/,
      S = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(O, N, k, M) {
      var K, F = k ? N : N.replace(S, "");
      if (P.test(F)) O.s = isNaN(F) ? null : F < 0 ? -1 : 1;
      else {
        if (!k && (F = F.replace(l, function(U, et, nt) {
            return K = (nt = nt.toLowerCase()) == "x" ? 16 : nt == "b" ? 2 : 8, !M || M == K ? et : U
          }), M && (K = M, F = F.replace(d, "$1").replace(g, "0.$1")), N != F)) return new v(F, K);
        if (v.DEBUG) throw Error(Jt + "Not a" + (M ? " base " + M : "") + " number: " + N);
        O.s = null
      }
      O.c = O.e = null
    }
  }();

  function j(l, d, g, P) {
    var S, O, N, k, M, K, F, U = l.c,
      et = Zn;
    if (U) {
      t: {
        for (S = 1, k = U[0]; k >= 10; k /= 10, S++);
        if (O = d - S, O < 0) O += it,
        N = d,
        M = U[K = 0],
        F = ee(M / et[S - N - 1] % 10);
        else if (K = Xn((O + 1) / it), K >= U.length)
          if (P) {
            for (; U.length <= K; U.push(0));
            M = F = 0, S = 1, O %= it, N = O - it + 1
          } else break t;
        else {
          for (M = k = U[K], S = 1; k >= 10; k /= 10, S++);
          O %= it, N = O - it + S, F = N < 0 ? 0 : ee(M / et[S - N - 1] % 10)
        }
        if (P = P || d < 0 || U[K + 1] != null || (N < 0 ? M : M % et[S - N - 1]), P = g < 4 ? (F || P) && (g == 0 || g == (l.s < 0 ? 3 : 2)) : F > 5 || F == 5 && (g == 4 || P || g == 6 && (O > 0 ? N > 0 ? M / et[S - N] : 0 : U[K - 1]) % 10 & 1 || g == (l.s < 0 ? 8 : 7)), d < 1 || !U[0]) return U.length = 0,
        P ? (d -= l.e + 1, U[0] = et[(it - d % it) % it], l.e = -d || 0) : U[0] = l.e = 0,
        l;
        if (O == 0 ? (U.length = K, k = 1, K--) : (U.length = K + 1, k = et[it - O], U[K] = N > 0 ? ee(M / et[S - N] % et[N]) * k : 0), P)
          for (;;)
            if (K == 0) {
              for (O = 1, N = U[0]; N >= 10; N /= 10, O++);
              for (N = U[0] += k, k = 1; N >= 10; N /= 10, k++);
              O != k && (l.e++, U[0] == ie && (U[0] = 1));
              break
            } else {
              if (U[K] += k, U[K] != ie) break;
              U[K--] = 0, k = 1
            } for (O = U.length; U[--O] === 0; U.pop());
      }
      l.e > C ? l.c = l.e = null : l.e < p && (l.c = [l.e = 0])
    }
    return l
  }

  function $(l) {
    var d, g = l.e;
    return g === null ? l.toString() : (d = te(l.c), d = g <= _ || g >= h ? fn(d, g) : de(d, g, "0"), l.s < 0 ? "-" + d : d)
  }
  return r.absoluteValue = r.abs = function() {
    var l = new v(this);
    return l.s < 0 && (l.s = 1), l
  }, r.comparedTo = function(l, d) {
    return Ie(this, new v(l, d))
  }, r.decimalPlaces = r.dp = function(l, d) {
    var g, P, S, O = this;
    if (l != null) return Ct(l, 0, Ft), d == null ? d = u : Ct(d, 0, 8), j(new v(O), l + O.e + 1, d);
    if (!(g = O.c)) return null;
    if (P = ((S = g.length - 1) - ne(this.e / it)) * it, S = g[S])
      for (; S % 10 == 0; S /= 10, P--);
    return P < 0 && (P = 0), P
  }, r.dividedBy = r.div = function(l, d) {
    return t(this, new v(l, d), o, u)
  }, r.dividedToIntegerBy = r.idiv = function(l, d) {
    return t(this, new v(l, d), 0, 1)
  }, r.exponentiatedBy = r.pow = function(l, d) {
    var g, P, S, O, N, k, M, K, F, U = this;
    if (l = new v(l), l.c && !l.isInteger()) throw Error(Jt + "Exponent not an integer: " + $(l));
    if (d != null && (d = new v(d)), k = l.e > 14, !U.c || !U.c[0] || U.c[0] == 1 && !U.e && U.c.length == 1 || !l.c || !l.c[0]) return F = new v(Math.pow(+$(U), k ? l.s * (2 - pn(l)) : +$(l))), d ? F.mod(d) : F;
    if (M = l.s < 0, d) {
      if (d.c ? !d.c[0] : !d.s) return new v(NaN);
      P = !M && U.isInteger() && d.isInteger(), P && (U = U.mod(d))
    } else {
      if (l.e > 9 && (U.e > 0 || U.e < -1 || (U.e == 0 ? U.c[0] > 1 || k && U.c[1] >= 24e7 : U.c[0] < 8e13 || k && U.c[0] <= 9999975e7))) return O = U.s < 0 && pn(l) ? -0 : 0, U.e > -1 && (O = 1 / O), new v(M ? 1 / O : O);
      b && (O = Xn(b / it + 2))
    }
    for (k ? (g = new v(.5), M && (l.s = 1), K = pn(l)) : (S = Math.abs(+$(l)), K = S % 2), F = new v(i);;) {
      if (K) {
        if (F = F.times(U), !F.c) break;
        O ? F.c.length > O && (F.c.length = O) : P && (F = F.mod(d))
      }
      if (S) {
        if (S = ee(S / 2), S === 0) break;
        K = S % 2
      } else if (l = l.times(g), j(l, l.e + 1, 1), l.e > 14) K = pn(l);
      else {
        if (S = +$(l), S === 0) break;
        K = S % 2
      }
      U = U.times(U), O ? U.c && U.c.length > O && (U.c.length = O) : P && (U = U.mod(d))
    }
    return P ? F : (M && (F = i.div(F)), d ? F.mod(d) : O ? j(F, b, u, N) : F)
  }, r.integerValue = function(l) {
    var d = new v(this);
    return l == null ? l = u : Ct(l, 0, 8), j(d, d.e + 1, l)
  }, r.isEqualTo = r.eq = function(l, d) {
    return Ie(this, new v(l, d)) === 0
  }, r.isFinite = function() {
    return !!this.c
  }, r.isGreaterThan = r.gt = function(l, d) {
    return Ie(this, new v(l, d)) > 0
  }, r.isGreaterThanOrEqualTo = r.gte = function(l, d) {
    return (d = Ie(this, new v(l, d))) === 1 || d === 0
  }, r.isInteger = function() {
    return !!this.c && ne(this.e / it) > this.c.length - 2
  }, r.isLessThan = r.lt = function(l, d) {
    return Ie(this, new v(l, d)) < 0
  }, r.isLessThanOrEqualTo = r.lte = function(l, d) {
    return (d = Ie(this, new v(l, d))) === -1 || d === 0
  }, r.isNaN = function() {
    return !this.s
  }, r.isNegative = function() {
    return this.s < 0
  }, r.isPositive = function() {
    return this.s > 0
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0
  }, r.minus = function(l, d) {
    var g, P, S, O, N = this,
      k = N.s;
    if (l = new v(l, d), d = l.s, !k || !d) return new v(NaN);
    if (k != d) return l.s = -d, N.plus(l);
    var M = N.e / it,
      K = l.e / it,
      F = N.c,
      U = l.c;
    if (!M || !K) {
      if (!F || !U) return F ? (l.s = -d, l) : new v(U ? N : NaN);
      if (!F[0] || !U[0]) return U[0] ? (l.s = -d, l) : new v(F[0] ? N : u == 3 ? -0 : 0)
    }
    if (M = ne(M), K = ne(K), F = F.slice(), k = M - K) {
      for ((O = k < 0) ? (k = -k, S = F) : (K = M, S = U), S.reverse(), d = k; d--; S.push(0));
      S.reverse()
    } else
      for (P = (O = (k = F.length) < (d = U.length)) ? k : d, k = d = 0; d < P; d++)
        if (F[d] != U[d]) {
          O = F[d] < U[d];
          break
        } if (O && (S = F, F = U, U = S, l.s = -l.s), d = (P = U.length) - (g = F.length), d > 0)
      for (; d--; F[g++] = 0);
    for (d = ie - 1; P > k;) {
      if (F[--P] < U[P]) {
        for (g = P; g && !F[--g]; F[g] = d);
        --F[g], F[P] += ie
      }
      F[P] -= U[P]
    }
    for (; F[0] == 0; F.splice(0, 1), --K);
    return F[0] ? L(l, F, K) : (l.s = u == 3 ? -1 : 1, l.c = [l.e = 0], l)
  }, r.modulo = r.mod = function(l, d) {
    var g, P, S = this;
    return l = new v(l, d), !S.c || !l.s || l.c && !l.c[0] ? new v(NaN) : !l.c || S.c && !S.c[0] ? new v(S) : (E == 9 ? (P = l.s, l.s = 1, g = t(S, l, 0, 3), l.s = P, g.s *= P) : g = t(S, l, 0, E), l = S.minus(g.times(l)), !l.c[0] && E == 1 && (l.s = S.s), l)
  }, r.multipliedBy = r.times = function(l, d) {
    var g, P, S, O, N, k, M, K, F, U, et, nt, _t, vt, Pt, dt = this,
      ht = dt.c,
      Rt = (l = new v(l, d)).c;
    if (!ht || !Rt || !ht[0] || !Rt[0]) return !dt.s || !l.s || ht && !ht[0] && !Rt || Rt && !Rt[0] && !ht ? l.c = l.e = l.s = null : (l.s *= dt.s, !ht || !Rt ? l.c = l.e = null : (l.c = [0], l.e = 0)), l;
    for (P = ne(dt.e / it) + ne(l.e / it), l.s *= dt.s, M = ht.length, U = Rt.length, M < U && (_t = ht, ht = Rt, Rt = _t, S = M, M = U, U = S), S = M + U, _t = []; S--; _t.push(0));
    for (vt = ie, Pt = me, S = U; --S >= 0;) {
      for (g = 0, et = Rt[S] % Pt, nt = Rt[S] / Pt | 0, N = M, O = S + N; O > S;) K = ht[--N] % Pt, F = ht[N] / Pt | 0, k = nt * K + F * et, K = et * K + k % Pt * Pt + _t[O] + g, g = (K / vt | 0) + (k / Pt | 0) + nt * F, _t[O--] = K % vt;
      _t[O] = g
    }
    return g ? ++P : _t.splice(0, 1), L(l, _t, P)
  }, r.negated = function() {
    var l = new v(this);
    return l.s = -l.s || null, l
  }, r.plus = function(l, d) {
    var g, P = this,
      S = P.s;
    if (l = new v(l, d), d = l.s, !S || !d) return new v(NaN);
    if (S != d) return l.s = -d, P.minus(l);
    var O = P.e / it,
      N = l.e / it,
      k = P.c,
      M = l.c;
    if (!O || !N) {
      if (!k || !M) return new v(S / 0);
      if (!k[0] || !M[0]) return M[0] ? l : new v(k[0] ? P : S * 0)
    }
    if (O = ne(O), N = ne(N), k = k.slice(), S = O - N) {
      for (S > 0 ? (N = O, g = M) : (S = -S, g = k), g.reverse(); S--; g.push(0));
      g.reverse()
    }
    for (S = k.length, d = M.length, S - d < 0 && (g = M, M = k, k = g, d = S), S = 0; d;) S = (k[--d] = k[d] + M[d] + S) / ie | 0, k[d] = ie === k[d] ? 0 : k[d] % ie;
    return S && (k = [S].concat(k), ++N), L(l, k, N)
  }, r.precision = r.sd = function(l, d) {
    var g, P, S, O = this;
    if (l != null && l !== !!l) return Ct(l, 1, Ft), d == null ? d = u : Ct(d, 0, 8), j(new v(O), l, d);
    if (!(g = O.c)) return null;
    if (S = g.length - 1, P = S * it + 1, S = g[S]) {
      for (; S % 10 == 0; S /= 10, P--);
      for (S = g[0]; S >= 10; S /= 10, P++);
    }
    return l && O.e + 1 > P && (P = O.e + 1), P
  }, r.shiftedBy = function(l) {
    return Ct(l, -Yn, Yn), this.times("1e" + l)
  }, r.squareRoot = r.sqrt = function() {
    var l, d, g, P, S, O = this,
      N = O.c,
      k = O.s,
      M = O.e,
      K = o + 4,
      F = new v("0.5");
    if (k !== 1 || !N || !N[0]) return new v(!k || k < 0 && (!N || N[0]) ? NaN : N ? O : 1 / 0);
    if (k = Math.sqrt(+$(O)), k == 0 || k == 1 / 0 ? (d = te(N), (d.length + M) % 2 == 0 && (d += "0"), k = Math.sqrt(+d), M = ne((M + 1) / 2) - (M < 0 || M % 2), k == 1 / 0 ? d = "5e" + M : (d = k.toExponential(), d = d.slice(0, d.indexOf("e") + 1) + M), g = new v(d)) : g = new v(k + ""), g.c[0]) {
      for (M = g.e, k = M + K, k < 3 && (k = 0);;)
        if (S = g, g = F.times(S.plus(t(O, S, K, 1))), te(S.c).slice(0, k) === (d = te(g.c)).slice(0, k))
          if (g.e < M && --k, d = d.slice(k - 3, k + 1), d == "9999" || !P && d == "4999") {
            if (!P && (j(S, S.e + o + 2, 0), S.times(S).eq(O))) {
              g = S;
              break
            }
            K += 4, k += 4, P = 1
          } else {
            (!+d || !+d.slice(1) && d.charAt(0) == "5") && (j(g, g.e + o + 2, 1), l = !g.times(g).eq(O));
            break
          }
    }
    return j(g, g.e + o + 1, u, l)
  }, r.toExponential = function(l, d) {
    return l != null && (Ct(l, 0, Ft), l++), y(this, l, d, 1)
  }, r.toFixed = function(l, d) {
    return l != null && (Ct(l, 0, Ft), l = l + this.e + 1), y(this, l, d)
  }, r.toFormat = function(l, d, g) {
    var P, S = this;
    if (g == null) l != null && d && typeof d == "object" ? (g = d, d = null) : l && typeof l == "object" ? (g = l, l = d = null) : g = f;
    else if (typeof g != "object") throw Error(Jt + "Argument not an object: " + g);
    if (P = S.toFixed(l, d), S.c) {
      var O, N = P.split("."),
        k = +g.groupSize,
        M = +g.secondaryGroupSize,
        K = g.groupSeparator || "",
        F = N[0],
        U = N[1],
        et = S.s < 0,
        nt = et ? F.slice(1) : F,
        _t = nt.length;
      if (M && (O = k, k = M, M = O, _t -= O), k > 0 && _t > 0) {
        for (O = _t % k || k, F = nt.substr(0, O); O < _t; O += k) F += K + nt.substr(O, k);
        M > 0 && (F += K + nt.slice(O)), et && (F = "-" + F)
      }
      P = U ? F + (g.decimalSeparator || "") + ((M = +g.fractionGroupSize) ? U.replace(new RegExp("\\d{" + M + "}\\B", "g"), "$&" + (g.fractionGroupSeparator || "")) : U) : F
    }
    return (g.prefix || "") + P + (g.suffix || "")
  }, r.toFraction = function(l) {
    var d, g, P, S, O, N, k, M, K, F, U, et, nt = this,
      _t = nt.c;
    if (l != null && (k = new v(l), !k.isInteger() && (k.c || k.s !== 1) || k.lt(i))) throw Error(Jt + "Argument " + (k.isInteger() ? "out of range: " : "not an integer: ") + $(k));
    if (!_t) return new v(nt);
    for (d = new v(i), K = g = new v(i), P = M = new v(i), et = te(_t), O = d.e = et.length - nt.e - 1, d.c[0] = Zn[(N = O % it) < 0 ? it + N : N], l = !l || k.comparedTo(d) > 0 ? O > 0 ? d : K : k, N = C, C = 1 / 0, k = new v(et), M.c[0] = 0; F = t(k, d, 0, 1), S = g.plus(F.times(P)), S.comparedTo(l) != 1;) g = P, P = S, K = M.plus(F.times(S = K)), M = S, d = k.minus(F.times(S = d)), k = S;
    return S = t(l.minus(g), P, 0, 1), M = M.plus(S.times(K)), g = g.plus(S.times(P)), M.s = K.s = nt.s, O = O * 2, U = t(K, P, O, u).minus(nt).abs().comparedTo(t(M, g, O, u).minus(nt).abs()) < 1 ? [K, P] : [M, g], C = N, U
  }, r.toNumber = function() {
    return +$(this)
  }, r.toPrecision = function(l, d) {
    return l != null && Ct(l, 1, Ft), y(this, l, d, 2)
  }, r.toString = function(l) {
    var d, g = this,
      P = g.s,
      S = g.e;
    return S === null ? P ? (d = "Infinity", P < 0 && (d = "-" + d)) : d = "NaN" : (l == null ? d = S <= _ || S >= h ? fn(te(g.c), S) : de(te(g.c), S, "0") : l === 10 && B ? (g = j(new v(g), o + S + 1, u), d = de(te(g.c), g.e, "0")) : (Ct(l, 2, w.length, "Base"), d = e(de(te(g.c), S, "0"), 10, l, P, !0)), P < 0 && g.c[0] && (d = "-" + d)), d
  }, r.valueOf = r.toJSON = function() {
    return $(this)
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, n != null && v.set(n), v
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

function Ie(n, t) {
  var e, s, r = n.c,
    i = t.c,
    o = n.s,
    u = t.s,
    _ = n.e,
    h = t.e;
  if (!o || !u) return null;
  if (e = r && !r[0], s = i && !i[0], e || s) return e ? s ? 0 : -u : o;
  if (o != u) return o;
  if (e = o < 0, s = _ == h, !r || !i) return s ? 0 : !r ^ e ? 1 : -1;
  if (!s) return _ > h ^ e ? 1 : -1;
  for (u = (_ = r.length) < (h = i.length) ? _ : h, o = 0; o < u; o++)
    if (r[o] != i[o]) return r[o] > i[o] ^ e ? 1 : -1;
  return _ == h ? 0 : _ > h ^ e ? 1 : -1
}

function Ct(n, t, e, s) {
  if (n < t || n > e || n !== ee(n)) throw Error(Jt + (s || "Argument") + (typeof n == "number" ? n < t || n > e ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n))
}

function pn(n) {
  var t = n.c.length - 1;
  return ne(n.e / it) == t && n.c[t] % 2 != 0
}

function fn(n, t) {
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
var qs = xr();
const fl = Object.freeze(Object.defineProperty({
    __proto__: null,
    BigNumber: qs,
    default: qs
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  vs = _r(fl);
var zr = tt && tt.__importDefault || function(n) {
  return n && n.__esModule ? n : {
    default: n
  }
};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.WalletV3Account = void 0;
const hl = ve,
  Ve = zr(vs),
  ps = zr(Zt);
class vn {
  static async computeAddress(t) {
    await ps.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof Ve.default ? t.publicKey : new Ve.default(`0x${t.publicKey}`),
      s = tr(e).hash;
    return new hl.Address(`${t.workchain!=null?t.workchain:0}:${s}`)
  }
  static async fromPubkey(t) {
    const e = new Ve.default(`0x${t.publicKey}`),
      s = await vn.computeAddress({
        publicKey: e,
        workchain: t.workchain
      }),
      r = new vn(s);
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
    } = await this.fetchState(e), o = await e.getSigner(r), u = e.nowSec + t.timeout, _ = t.payload ? e.encodeInternalInput(t.payload) : void 0, h = e.encodeInternalMessage({
      dst: t.recipient,
      bounce: t.bounce,
      stateInit: t.stateInit,
      body: _,
      amount: t.amount
    }), p = {
      walletId: Gr,
      expireAt: u,
      seqno: s,
      flags: 3,
      message: h
    }, C = e.packIntoCell({
      structure: Ur,
      data: p
    }).hash, A = await o.sign(C, t.signatureId), {
      signatureParts: E
    } = e.extendSignature(A);
    p.signatureHigh = E.high, p.signatureLow = E.low;
    const b = e.packIntoCell({
      structure: bl,
      data: p
    }).boc;
    return e.createRawExternalMessage({
      address: this.address,
      body: b,
      stateInit: i,
      expireAt: u
    })
  }
  async fetchState(t) {
    let e, s;
    const r = await t.getFullContractState(this.address);
    if (r == null || !r.isDeployed) {
      if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
      e = tr(this.publicKey).boc, s = {
        seqno: 0,
        publicKey: this.publicKey
      }
    } else {
      const i = t.extractContractData(r.boc);
      if (i == null) throw new Error("Failed to extract contract data");
      s = gl(t, i)
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
Fn.WalletV3Account = vn;
const gl = (n, t) => {
    const e = n.unpackFromCell({
      structure: Wr,
      boc: t,
      allowPartial: !1
    });
    if (typeof e != "object" || typeof e.seqno != "string" || typeof e.publicKey != "string") throw new Error("Invalid contract data ");
    return {
      seqno: parseInt(e.seqno),
      publicKey: new Ve.default(e.publicKey)
    }
  },
  tr = n => {
    const t = ps.default.nekoton.packIntoCell(Wr, {
      seqno: 0,
      walletId: Gr,
      publicKey: n.toFixed(0)
    }).boc;
    return ps.default.nekoton.mergeTvc(ml, t)
  },
  Ur = [{
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
  bl = [{
    name: "signatureHigh",
    type: "uint256"
  }, {
    name: "signatureLow",
    type: "uint256"
  }, ...Ur],
  Wr = [{
    name: "seqno",
    type: "uint32"
  }, {
    name: "walletId",
    type: "uint32"
  }, {
    name: "publicKey",
    type: "uint256"
  }],
  ml = "te6ccgEBAQEAcQAA3v8AIN0gggFMl7ohggEznLqxn3Gw7UTQ0x/THzHXC//jBOCk8mCDCNcYINMf0x/TH/gjE7vyY+1E0NMf0x/T/9FRMrryoVFEuvKiBPkBVBBV+RDyo/gAkyDXSpbTB9QC+wDo0QGkyMsfyx/L/8ntVA==",
  Gr = 1269378442;
var Nn = {},
  Hr = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.HighloadWalletV2 = void 0;
const wl = ve,
  Qe = Hr(vs),
  fs = Hr(Zt),
  yl = Ht;
class An {
  static async computeAddress(t) {
    await fs.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof Qe.default ? t.publicKey : new Qe.default(`0x${t.publicKey}`),
      s = er(e).hash;
    return new wl.Address(`${t.workchain!=null?t.workchain:0}:${s}`)
  }
  static async fromPubkey(t) {
    const e = new Qe.default(`0x${t.publicKey}`),
      s = await An.computeAddress({
        publicKey: e,
        workchain: t.workchain
      }),
      r = new An(s);
    return r.publicKey = e, r
  }
  constructor(t) {
    this.address = (0, yl.convertToAddressObject)(t)
  }
  async fetchPublicKey(t) {
    let e = this.publicKey;
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(s => new Qe.default(`0x${s}`))), e.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, e) {
    const {
      publicKey: s,
      stateInit: r
    } = await this.fetchState(e), i = await e.getSigner(s), o = e.nowSec + t.timeout, u = t.payload ? e.encodeInternalInput(t.payload) : void 0, h = {
      messages: [
        [0, {
          flags: 3,
          message: e.encodeInternalMessage({
            dst: t.recipient,
            bounce: t.bounce,
            stateInit: t.stateInit,
            body: u,
            amount: t.amount
          })
        }]
      ]
    }, {
      boc: p,
      hash: C
    } = e.packIntoCell({
      structure: Vr,
      data: h
    });
    h.walletId = Xr, h.expireAt = o, h.messagesHash = `0x${C.slice(-8)}`;
    const A = e.packIntoCell({
        structure: Qr,
        data: h
      }).hash,
      E = await i.sign(A, t.signatureId),
      {
        signatureParts: b
      } = e.extendSignature(E);
    h.signatureHigh = b.high, h.signatureLow = b.low;
    const f = e.packIntoCell({
      structure: Al,
      data: h
    }).boc;
    return e.createRawExternalMessage({
      address: this.address.toString(),
      body: f,
      stateInit: r,
      expireAt: o
    })
  }
  async fetchState(t) {
    let e, s;
    const r = await t.getFullContractState(this.address);
    if (r == null || !r.isDeployed) {
      if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
      e = er(this.publicKey).boc, s = this.publicKey
    } else if (this.publicKey == null) {
      const i = t.extractContractData(r.boc);
      if (i == null) throw new Error("Failed to extract contract data");
      s = vl(t, i).publicKey
    } else s = this.publicKey;
    return this.publicKey == null && (this.publicKey = s), {
      publicKey: s.toString(16).padStart(64, "0"),
      stateInit: e
    }
  }
}
Nn.HighloadWalletV2 = An;
const vl = (n, t) => {
    const e = n.unpackFromCell({
      structure: Jr,
      boc: t,
      allowPartial: !0
    });
    if (typeof e != "object" || typeof e.publicKey != "string") throw new Error("Invalid contract data");
    return {
      publicKey: new Qe.default(e.publicKey)
    }
  },
  er = n => {
    const t = fs.default.nekoton.packIntoCell(Jr, {
      walletId: Xr,
      lastCleaned: 0,
      publicKey: n.toFixed(0),
      queries: !1
    }).boc;
    return fs.default.nekoton.mergeTvc(kl, t)
  },
  Vr = [{
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
  Qr = [{
    name: "walletId",
    type: "uint32"
  }, {
    name: "expireAt",
    type: "uint32"
  }, {
    name: "messagesHash",
    type: "uint32"
  }, ...Vr],
  Al = [{
    name: "signatureHigh",
    type: "uint256"
  }, {
    name: "signatureLow",
    type: "uint256"
  }, ...Qr],
  Jr = [{
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
  kl = "te6ccgEBCQEA5QABFP8A9KQT9LzyyAsBAgEgBAIB6vKDCNcYINMf0z/4I6ofUyC58mPtRNDTH9M/0//0BNFTYIBA9A5voTHyYFFzuvKiB/kBVBCH+RDyowL0BNH4AH+OFiGAEPR4b6UgmALTB9QwAfsAkTLiAbPmW4MlochANIBA9EOK5jHIEssfE8s/y//0AMntVAMANCCAQPSWb6UyURCUMFMDud4gkzM2AZIyMOKzAgFICAUCASAHBgBBvl+XaiaGmPmOmf6f+Y+gJoqRBAIHoHN9CYyS2/yV3R8UABe9nOdqJoaa+Y64X/wABNAw",
  Xr = 0;
var Kn = {},
  Yr = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Kn, "__esModule", {
  value: !0
});
Kn.EverWalletAccount = void 0;
const Il = ve,
  Ge = Yr(vs),
  kn = Yr(Zt);
class In {
  static async computeAddress(t) {
    await kn.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof Ge.default ? t.publicKey : new Ge.default(`0x${t.publicKey}`),
      s = nr(e, t.nonce).hash;
    return new Il.Address(`${t.workchain!=null?t.workchain:0}:${s}`)
  }
  static async fromPubkey(t) {
    const e = new Ge.default(`0x${t.publicKey}`),
      s = await In.computeAddress({
        publicKey: e,
        workchain: t.workchain,
        nonce: t.nonce
      }),
      r = new In(s);
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
    let u, _, h;
    return t.stateInit == null ? (u = El, _ = "sendTransaction", h = {
      dest: t.recipient,
      value: t.amount,
      bounce: t.bounce,
      flags: 3,
      payload: o
    }) : (u = Pl, _ = "sendTransactionRaw", h = {
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
      abi: u,
      method: _,
      params: h,
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
        e = nr(this.publicKey, this.nonce).boc, s = this.publicKey
      } else this.isDeployed = !0, s = new Ge.default(`0x${kn.default.nekoton.extractPublicKey(r.boc)}`);
      this.publicKey == null && (this.publicKey = s)
    }
    return {
      publicKey: s.toString(16).padStart(64, "0"),
      stateInit: e
    }
  }
}
Kn.EverWalletAccount = In;
const nr = (n, t) => {
    let e, s;
    t != null ? (e = Cl, s = {
      publicKey: n.toFixed(0),
      timestamp: 0,
      nonce: t
    }) : (e = Sl, s = {
      publicKey: n.toFixed(0),
      timestamp: 0
    });
    const r = kn.default.nekoton.packIntoCell(e, s).boc;
    return kn.default.nekoton.mergeTvc(Tl, r)
  },
  Sl = [{
    name: "publicKey",
    type: "uint256"
  }, {
    name: "timestamp",
    type: "uint64"
  }],
  Cl = [{
    name: "publicKey",
    type: "uint256"
  }, {
    name: "timestamp",
    type: "uint64"
  }, {
    name: "nonce",
    type: "uint32"
  }],
  Tl = "te6cckEBBgEA/AABFP8A9KQT9LzyyAsBAgEgAgMABNIwAubycdcBAcAA8nqDCNcY7UTQgwfXAdcLP8j4KM8WI88WyfkAA3HXAQHDAJqDB9cBURO68uBk3oBA1wGAINcBgCDXAVQWdfkQ8qj4I7vyeWa++COBBwiggQPoqFIgvLHydAIgghBM7mRsuuMPAcjL/8s/ye1UBAUAmDAC10zQ+kCDBtcBcdcBeNcB10z4AHCAEASqAhSxyMsFUAXPFlAD+gLLaSLQIc8xIddJoIQJuZgzcAHLAFjPFpcwcQHLABLM4skB+wAAPoIQFp4+EbqOEfgAApMg10qXeNcB1AL7AOjRkzLyPOI+zYS/",
  El = `{
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
  Pl = `{
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
  var e = Ln;
  Object.defineProperty(n, "GiverAccount", {
    enumerable: !0,
    get: function() {
      return e.GiverAccount
    }
  });
  var s = $e;
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
  var r = Fn;
  Object.defineProperty(n, "WalletV3Account", {
    enumerable: !0,
    get: function() {
      return r.WalletV3Account
    }
  });
  var i = Nn;
  Object.defineProperty(n, "HighloadWalletV2", {
    enumerable: !0,
    get: function() {
      return i.HighloadWalletV2
    }
  });
  var o = Kn;
  Object.defineProperty(n, "EverWalletAccount", {
    enumerable: !0,
    get: function() {
      return o.EverWalletAccount
    }
  });
  class u {
    constructor(p, C, A, E) {
      this.clock = p, this.connectionController = C, this.nekoton = A, this.keystore = E
    }
    async getSigner(p) {
      if (this.keystore == null) throw new Error("Keystore not found");
      const C = await this.keystore.getSigner(p);
      if (C == null) throw new Error("Signer not found");
      return C
    }
    get nowMs() {
      return this.clock.nowMs
    }
    get nowSec() {
      return ~~(this.clock.nowMs / 1e3)
    }
    async fetchPublicKey(p) {
      const C = await this.getFullContractState(p);
      if (C == null || !C.isDeployed) throw new Error("Contract not deployed");
      return this.nekoton.extractPublicKey(C.boc)
    }
    async getFullContractState(p) {
      return this.connectionController.use(async ({
        data: {
          transport: C
        }
      }) => C.getFullContractState(p.toString()))
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
      const C = this.nekoton.createExternalMessage(this.clock, p.address.toString(), p.abi, p.method, p.stateInit, p.params, p.signer.publicKey, p.timeout);
      try {
        const A = await p.signer.sign(C.hash, p.signatureId);
        return C.sign(A)
      } finally {
        C.free()
      }
    }
    createRawExternalMessage(p) {
      return this.nekoton.createRawExternalMessage(p.address.toString(), p.stateInit, p.body, p.expireAt)
    }
  }
  n.AccountsStorageContext = u;
  class _ {
    constructor(p = {}) {
      if (this.accounts = new Map, p.entries != null)
        for (const C of p.entries) this._defaultAccount == null && (this._defaultAccount = C.address), this.accounts.set(C.address.toString(), C);
      if (p.defaultAccount != null) {
        const C = (0, t.convertToAddressObject)(p.defaultAccount);
        if (!this.accounts.has(C.toString())) throw new Error("Provided default account not found in storage");
        this._defaultAccount = C
      }
    }
    get defaultAccount() {
      return this._defaultAccount
    }
    set defaultAccount(p) {
      const C = p == null ? void 0 : p.toString();
      if (C != null && !this.accounts.has(C)) throw new Error("Account not found in storage");
      this._defaultAccount = p == null ? p : (0, t.convertToAddressObject)(p)
    }
    async getAccount(p) {
      return this.accounts.get(p.toString())
    }
    addAccount(p) {
      const C = p.address;
      return this.accounts.set(C.toString(), p), C
    }
    hasAccount(p) {
      return this.accounts.has(p.toString())
    }
    removeAccount(p) {
      this.accounts.delete(p.toString())
    }
  }
  n.SimpleAccountsStorage = _
})(_s);
var jn = {};
Object.defineProperty(jn, "__esModule", {
  value: !0
});
jn.ConnectionFactory = void 0;
class Ml {}
jn.ConnectionFactory = Ml;
var Bn = {},
  Ol = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
Bn.SimpleKeystore = void 0;
const Zr = Ol(Zt);
class As {
  constructor(t = {}) {
    this.signers = new Map, this.signersByPublicKey = new Map;
    for (const [e, s] of Object.entries(t)) this.addKeyPair(e, s)
  }
  static generateKeyPair() {
    return Zr.default.nekoton.ed25519_generateKeyPair()
  }
  addKeyPair(t, e) {
    let s, r;
    typeof t == "string" ? (s = t, r = e) : (s = t.publicKey, r = t);
    const i = new Dl(r);
    this.signers.set(s, i), this.signersByPublicKey.set(r.publicKey, i)
  }
  removeKeyPair(t) {
    const e = this.signers.get(t);
    e != null && (this.signers.delete(t), this.signersByPublicKey.delete(e.publicKey))
  }
  async withNewKey(t, e = {}) {
    const s = As.generateKeyPair(),
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
Bn.SimpleKeystore = As;
class Dl {
  constructor(t) {
    this.keyPair = t, this.publicKey = this.keyPair.publicKey
  }
  async sign(t, e) {
    return Zr.default.nekoton.ed25519_sign(this.keyPair.secretKey, t, e)
  }
}
var $n = {};
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.Clock = void 0;
class Rl {
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
$n.Clock = Rl;
(function(n) {
  var t = tt && tt.__createBinding || (Object.create ? function(I, a, T, D) {
      D === void 0 && (D = T);
      var x = Object.getOwnPropertyDescriptor(a, T);
      (!x || ("get" in x ? !a.__esModule : x.writable || x.configurable)) && (x = {
        enumerable: !0,
        get: function() {
          return a[T]
        }
      }), Object.defineProperty(I, D, x)
    } : function(I, a, T, D) {
      D === void 0 && (D = T), I[D] = a[T]
    }),
    e = tt && tt.__exportStar || function(I, a) {
      for (var T in I) T !== "default" && !Object.prototype.hasOwnProperty.call(a, T) && t(a, I, T)
    },
    s = tt && tt.__importDefault || function(I) {
      return I && I.__esModule ? I : {
        default: I
      }
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.EverscaleStandaloneClient = n.SUPPORTED_PERMISSIONS = n.VERSION = n.Clock = n.SimpleKeystore = n.checkConnection = n.ConnectionError = n.NETWORK_PRESETS = void 0;
  const r = s(Rc),
    i = s(Zt),
    o = Ht,
    u = bn,
    _ = Dn,
    h = _s;
  e(jn, n);
  var p = bn;
  Object.defineProperty(n, "NETWORK_PRESETS", {
    enumerable: !0,
    get: function() {
      return p.NETWORK_PRESETS
    }
  });
  var C = bn;
  Object.defineProperty(n, "ConnectionError", {
    enumerable: !0,
    get: function() {
      return C.ConnectionError
    }
  }), Object.defineProperty(n, "checkConnection", {
    enumerable: !0,
    get: function() {
      return C.checkConnection
    }
  }), e(_s, n);
  var A = Bn;
  Object.defineProperty(n, "SimpleKeystore", {
    enumerable: !0,
    get: function() {
      return A.SimpleKeystore
    }
  });
  var E = $n;
  Object.defineProperty(n, "Clock", {
    enumerable: !0,
    get: function() {
      return E.Clock
    }
  });

  function b(I) {
    const a = I || {};
    return {
      retryCount: a.retryCount != null ? Math.max(1, ~~a.retryCount) : 5,
      timeout: a.timeout != null ? Math.max(1, ~~a.timeout) : 60,
      timeoutGrowFactor: a.timeoutGrowFactor || 1.2,
      retryTransfers: !0
    }
  }
  n.VERSION = "0.2.25", n.SUPPORTED_PERMISSIONS = ["basic", "accountInteraction"];
  class f extends o.SafeEventEmitter {
    static async create(a = {}) {
      await i.default.ensureNekotonLoaded(a.initInput);
      const T = {},
        D = (G, rt) => {
          var Z;
          (Z = T.client) === null || Z === void 0 || Z.emit(G, rt)
        },
        x = new i.default.nekoton.ClockWithOffset;
      a.clock != null && (a.clock.impls.push(x), x.updateOffset(a.clock.offset));
      try {
        const G = a.connection != null ? await (0, u.createConnectionController)(x, a.connection) : void 0,
          rt = G != null ? new _.SubscriptionController(G, D) : void 0,
          Z = new f({
            permissions: {},
            connectionController: G,
            subscriptionController: rt,
            properties: {
              message: b(a.message)
            },
            keystore: a.keystore,
            accountsStorage: a.accountsStorage,
            clock: x,
            notify: D
          });
        return T.client = Z, Z
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
        changeAccount: B,
        disconnect: v,
        subscribe: y,
        unsubscribe: m,
        unsubscribeAll: L,
        getProviderState: j,
        getFullContractState: $,
        computeStorageFee: l,
        getAccountsByCodeHash: d,
        getTransactions: g,
        getTransaction: P,
        findTransaction: S,
        runLocal: O,
        executeLocal: N,
        getExpectedAddress: k,
        getContractFields: M,
        unpackInitData: K,
        getBocHash: F,
        packIntoCell: U,
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
        signDataRaw: qr,
        sendMessage: ti,
        sendMessageDelayed: ei,
        sendExternalMessage: ni,
        sendExternalMessageDelayed: si
      }, this.setPollingInterval = T => {
        var D;
        if (this._context.connectionController == null || this._context.subscriptionController == null) throw Error("Connection was not initialized");
        (D = this._context.subscriptionController) === null || D === void 0 || D.setPollingInterval(T)
      }, this._context = a
    }
    request(a) {
      const T = this._handlers[a.method];
      if (T == null) throw Q(a, `Method '${a.method}' is not supported by standalone provider`);
      return T(this._context, a)
    }
    addListener(a, T) {
      return super.addListener(a, T)
    }
    removeListener(a, T) {
      return super.removeListener(a, T)
    }
    on(a, T) {
      return super.on(a, T)
    }
    once(a, T) {
      return super.once(a, T)
    }
    prependListener(a, T) {
      return super.prependListener(a, T)
    }
    prependOnceListener(a, T) {
      return super.prependOnceListener(a, T)
    }
  }
  n.EverscaleStandaloneClient = f;
  const w = async (I, a) => {
    lt(a);
    const {
      permissions: T
    } = a.params;
    xn(a, a.params, "permissions");
    const D = {
      ...I.permissions
    };
    for (const G of T)
      if (G === "basic" || G === "tonClient") D.basic = !0;
      else if (G === "accountInteraction") {
      if (D.accountInteraction != null) continue;
      D.accountInteraction = await Is(a, I)
    } else throw Q(a, `Permission '${G}' is not supported by standalone provider`);
    I.permissions = D;
    const x = JSON.parse(JSON.stringify(D));
    return I.notify("permissionsChanged", {
      permissions: x
    }), x
  }, B = async (I, a) => {
    an(a, I);
    const T = {
      ...I.permissions
    };
    T.accountInteraction = await Is(a, I), I.permissions = T;
    const D = JSON.parse(JSON.stringify(T));
    return I.notify("permissionsChanged", {
      permissions: D
    }), D
  }, v = async (I, a) => {
    var T;
    I.permissions = {}, await ((T = I.subscriptionController) === null || T === void 0 ? void 0 : T.unsubscribeFromAllContracts()), I.notify("permissionsChanged", {
      permissions: {}
    })
  }, y = async (I, a) => {
    lt(a), jt(a, I);
    const {
      address: T,
      subscriptions: D
    } = a.params;
    q(a, a.params, "address"), on(a, a.params, "subscriptions");
    let x;
    try {
      x = i.default.nekoton.repackAddress(T)
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
      address: T
    } = a.params;
    q(a, a.params, "address");
    let D;
    try {
      D = i.default.nekoton.repackAddress(T)
    } catch (x) {
      throw Q(a, x.toString())
    }
    await I.subscriptionController.unsubscribeFromContract(D)
  }, L = async (I, a) => {
    var T;
    await ((T = I.subscriptionController) === null || T === void 0 ? void 0 : T.unsubscribeFromAllContracts())
  }, j = async (I, a) => {
    var T, D;
    const x = (T = I.connectionController) === null || T === void 0 ? void 0 : T.initializedTransport,
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
  }, $ = async (I, a) => {
    lt(a), jt(a, I);
    const {
      address: T
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
        state: await x.getFullContractState(T)
      }))
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, l = async (I, a) => {
    lt(a), jt(a, I);
    const {
      state: T,
      masterchain: D,
      timestamp: x
    } = a.params;
    ai(a, a.params, "state"), We(a, a.params, "masterchain"), cn(a, a.params, "timestamp");
    const {
      connectionController: G
    } = I;
    try {
      const rt = await G.use(({
          data: {
            transport: ft
          }
        }) => ft.getBlockchainConfig()),
        Z = x ?? ~~(I.clock.nowMs / 1e3);
      return i.default.nekoton.computeStorageFee(rt, T.boc, Z, D || !1)
    } catch (rt) {
      throw Q(a, rt.toString())
    }
  }, d = async (I, a) => {
    lt(a), jt(a, I);
    const {
      codeHash: T,
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
          transport: rt
        }
      }) => rt.getAccountsByCodeHash(T, D || 50, x))
    } catch (rt) {
      throw Q(a, rt.toString())
    }
  }, g = async (I, a) => {
    lt(a), jt(a, I);
    const {
      address: T,
      continuation: D,
      limit: x
    } = a.params;
    q(a, a.params, "address"), oe(a, a.params, "continuation", ri), cn(a, a.params, "limit");
    const {
      connectionController: G
    } = I;
    try {
      return G.use(({
        data: {
          transport: rt
        }
      }) => rt.getTransactions(T, D == null ? void 0 : D.lt, x || 50))
    } catch (rt) {
      throw Q(a, rt.toString())
    }
  }, P = async (I, a) => {
    lt(a), jt(a, I);
    const {
      hash: T
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
        }) => x.getTransaction(T))
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, S = async (I, a) => {
    lt(a), jt(a, I);
    const {
      inMessageHash: T
    } = a.params;
    oe(a, a.params, "inMessageHash", q);
    const {
      connectionController: D
    } = I;
    if (T == null) return {
      transaction: void 0
    };
    try {
      return {
        transaction: await D.use(({
          data: {
            transport: x
          }
        }) => x.getDstTransaction(T))
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, O = async (I, a) => {
    lt(a);
    const {
      address: T,
      cachedState: D,
      responsible: x,
      functionCall: G,
      withSignatureId: rt
    } = a.params;
    q(a, a.params, "address"), oe(a, a.params, "cachedState", zn), We(a, a.params, "responsible"), De(a, a.params, "functionCall"), ln(a, a.params, "withSignatureId");
    let Z = D;
    if (Z == null && (jt(a, I), Z = await I.connectionController.use(async ({
        data: {
          transport: It
        }
      }) => It.getFullContractState(T))), Z == null) throw Q(a, "Account not found");
    if (!Z.isDeployed || Z.lastTransactionId == null) throw Q(a, "Account is not deployed");
    const ft = await le(a, I, rt);
    try {
      const {
        output: It,
        code: St
      } = i.default.nekoton.runLocal(I.clock, Z.boc, G.abi, G.method, G.params, x || !1, ft);
      return {
        output: It,
        code: St
      }
    } catch (It) {
      throw Q(a, It.toString())
    }
  }, N = async (I, a) => {
    lt(a), jt(a, I);
    const {
      address: T,
      cachedState: D,
      stateInit: x,
      payload: G,
      executorParams: rt,
      messageHeader: Z
    } = a.params;
    q(a, a.params, "address"), oe(a, a.params, "cachedState", zn), ue(a, a.params, "stateInit"), ks(a, a.params, "payload"), on(a, a.params, "executorParams"), ge(a, a.params, "messageHeader");
    const {
      clock: ft,
      connectionController: It
    } = I;
    let St;
    try {
      St = i.default.nekoton.repackAddress(T)
    } catch (gt) {
      throw Q(a, gt.toString())
    }
    const Bt = ~~(ft.nowMs / 1e3),
      Qt = 60;
    let Ot;
    if (Z.type === "external")
      if (G == null || typeof G == "string") Ot = i.default.nekoton.createRawExternalMessage(St, x, G, Bt + Qt).boc;
      else if (Z.withoutSignature === !0) Ot = i.default.nekoton.createExternalMessageWithoutSignature(ft, St, G.abi, G.method, x, G.params, Qt).boc;
    else {
      const gt = i.default.nekoton.createExternalMessage(ft, St, G.abi, G.method, x, G.params, Z.publicKey, Qt);
      try {
        if ((rt == null ? void 0 : rt.disableSignatureCheck) === !0) Ot = gt.signFake().boc;
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
      q(a, Z, "sender"), q(a, Z, "amount"), be(a, Z, "bounce"), We(a, Z, "bounced");
      const gt = G == null ? void 0 : typeof G == "string" ? G : i.default.nekoton.encodeInternalInput(G.abi, G.method, G.params);
      Ot = i.default.nekoton.encodeInternalMessage(Z.sender, St, Z.bounce, x, gt, Z.amount)
    } else throw Q(a, "Unknown message type");
    try {
      const [gt, mt, yt] = await It.use(({
        data: {
          transport: kt
        }
      }) => Promise.all([D ?? kt.getFullContractState(St), kt.getBlockchainConfig(), kt.getNetworkDescription()])), Lt = i.default.nekoton.makeFullAccountBoc(gt == null ? void 0 : gt.boc), pt = rt == null ? void 0 : rt.overrideBalance, Dt = i.default.nekoton.executeLocal(mt, Lt, Ot, Bt, (rt == null ? void 0 : rt.disableSignatureCheck) === !0, pt != null ? pt.toString() : void 0, yt.globalId);
      if (Dt.exitCode != null) throw new Error(`Contract did not accept the message. Exit code: ${Dt.exitCode}`);
      const Ut = Dt,
        Re = Ut.transaction,
        $t = i.default.nekoton.parseFullAccountBoc(Ut.account);
      let xt;
      try {
        if (typeof G == "object" && typeof G != null) {
          const kt = i.default.nekoton.decodeTransaction(Ut.transaction, G.abi, G.method);
          xt = kt == null ? void 0 : kt.output
        }
      } catch {}
      return {
        transaction: Re,
        newState: $t,
        output: xt
      }
    } catch (gt) {
      throw Q(a, gt.toString())
    }
  }, k = async (I, a) => {
    lt(a);
    const {
      tvc: T,
      abi: D,
      workchain: x,
      publicKey: G,
      initParams: rt
    } = a.params;
    q(a, a.params, "tvc"), q(a, a.params, "abi"), cn(a, a.params, "workchain"), ue(a, a.params, "publicKey");
    try {
      return i.default.nekoton.getExpectedAddress(T, D, x || 0, G, rt)
    } catch (Z) {
      throw Q(a, Z.toString())
    }
  }, M = async (I, a) => {
    lt(a);
    const {
      address: T,
      abi: D,
      cachedState: x,
      allowPartial: G
    } = a.params;
    q(a, a.params, "address"), q(a, a.params, "abi"), oe(a, a.params, "cachedState", zn), be(a, a.params, "allowPartial");
    let rt;
    try {
      rt = i.default.nekoton.repackAddress(T)
    } catch (ft) {
      throw Q(a, ft.toString())
    }
    let Z = x;
    if (Z == null && (jt(a, I), Z = await I.connectionController.use(async ({
        data: {
          transport: ft
        }
      }) => ft.getFullContractState(rt))), Z == null) return {
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
      abi: T,
      data: D
    } = a.params;
    q(a, a.params, "abi"), q(a, a.params, "data");
    try {
      const {
        publicKey: x,
        data: G
      } = i.default.nekoton.unpackInitData(T, D);
      return {
        publicKey: x,
        initParams: G
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, F = async (I, a) => {
    lt(a);
    const {
      boc: T
    } = a.params;
    q(a, a.params, "boc");
    try {
      return {
        hash: i.default.nekoton.getBocHash(T)
      }
    } catch (D) {
      throw Q(a, D.toString())
    }
  }, U = async (I, a) => {
    lt(a);
    const {
      structure: T,
      data: D,
      abiVersion: x
    } = a.params;
    xn(a, a.params, "structure"), oe(a, a.params, "abiVersion", q);
    try {
      return i.default.nekoton.packIntoCell(T, D, x)
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, et = async (I, a) => {
    lt(a);
    const {
      structure: T,
      boc: D,
      allowPartial: x,
      abiVersion: G
    } = a.params;
    xn(a, a.params, "structure"), q(a, a.params, "boc"), be(a, a.params, "allowPartial"), oe(a, a.params, "abiVersion", q);
    try {
      return {
        data: i.default.nekoton.unpackFromCell(T, D, x, G)
      }
    } catch (rt) {
      throw Q(a, rt.toString())
    }
  }, nt = async (I, a) => {
    lt(a);
    const {
      boc: T
    } = a.params;
    q(a, a.params, "boc");
    try {
      return {
        publicKey: i.default.nekoton.extractPublicKey(T)
      }
    } catch (D) {
      throw Q(a, D.toString())
    }
  }, _t = async (I, a) => {
    lt(a);
    const {
      code: T
    } = a.params;
    q(a, a.params, "code");
    try {
      const {
        boc: D,
        hash: x
      } = i.default.nekoton.codeToTvc(T);
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
      code: T,
      data: D
    } = a.params;
    q(a, a.params, "code"), q(a, a.params, "data");
    try {
      const {
        boc: x,
        hash: G
      } = i.default.nekoton.mergeTvc(T, D);
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
      tvc: T
    } = a.params;
    q(a, a.params, "tvc");
    try {
      return i.default.nekoton.splitTvc(T)
    } catch (D) {
      throw Q(a, D.toString())
    }
  }, dt = async (I, a) => {
    lt(a);
    const {
      code: T,
      salt: D
    } = a.params;
    q(a, a.params, "code"), q(a, a.params, "salt");
    try {
      const {
        boc: x,
        hash: G
      } = i.default.nekoton.setCodeSalt(T, D);
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
      code: T
    } = a.params;
    q(a, a.params, "code");
    try {
      return {
        salt: i.default.nekoton.getCodeSalt(T)
      }
    } catch (D) {
      throw Q(a, D.toString())
    }
  }, Rt = async (I, a) => {
    lt(a), De(a, a, "params");
    const {
      abi: T,
      method: D,
      params: x
    } = a.params;
    try {
      return {
        boc: i.default.nekoton.encodeInternalInput(T, D, x)
      }
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, Oe = async (I, a) => {
    lt(a);
    const {
      body: T,
      abi: D,
      method: x,
      internal: G
    } = a.params;
    q(a, a.params, "body"), q(a, a.params, "abi"), un(a, a.params, "method"), be(a, a.params, "internal");
    try {
      return i.default.nekoton.decodeInput(T, D, x, G) || null
    } catch (rt) {
      throw Q(a, rt.toString())
    }
  }, ze = async (I, a) => {
    lt(a);
    const {
      body: T,
      abi: D,
      method: x
    } = a.params;
    q(a, a.params, "body"), q(a, a.params, "abi"), un(a, a.params, "method");
    try {
      return i.default.nekoton.decodeOutput(T, D, x) || null
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, Ue = async (I, a) => {
    lt(a);
    const {
      body: T,
      abi: D,
      event: x
    } = a.params;
    q(a, a.params, "body"), q(a, a.params, "abi"), un(a, a.params, "event");
    try {
      return i.default.nekoton.decodeEvent(T, D, x) || null
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, qt = async (I, a) => {
    lt(a);
    const {
      transaction: T,
      abi: D,
      method: x
    } = a.params;
    q(a, a.params, "abi"), un(a, a.params, "method");
    try {
      return i.default.nekoton.decodeTransaction(T, D, x) || null
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, Ae = async (I, a) => {
    lt(a);
    const {
      transaction: T,
      abi: D
    } = a.params;
    q(a, a.params, "abi");
    try {
      return {
        events: i.default.nekoton.decodeTransactionEvents(T, D)
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, Vt = async (I, a) => {
    lt(a);
    const {
      publicKey: T,
      dataHash: D,
      signature: x,
      withSignatureId: G
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "dataHash"), q(a, a.params, "signature"), ln(a, a.params, "withSignatureId");
    const rt = await le(a, I, G);
    try {
      return {
        isValid: i.default.nekoton.verifySignature(T, D, x, rt)
      }
    } catch (Z) {
      throw Q(a, Z.toString())
    }
  }, Kt = async (I, a) => {
    lt(a), jt(a, I);
    const {
      recipient: T,
      stateInit: D,
      payload: x,
      local: G,
      executorParams: rt
    } = a.params;
    q(a, a.params, "recipient"), ue(a, a.params, "stateInit"), ks(a, a.params, "payload"), We(a, a.params, "local"), on(a, a.params, "executorParams");
    let Z;
    try {
      Z = i.default.nekoton.repackAddress(T)
    } catch (pt) {
      throw Q(a, pt.toString())
    }
    const {
      clock: ft,
      subscriptionController: It,
      properties: St
    } = I, Bt = pt => {
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
          const Ut = i.default.nekoton.decodeTransaction(pt, x.abi, x.method);
          Dt = Ut == null ? void 0 : Ut.output
        }
      } catch {}
      return {
        transaction: pt,
        output: Dt
      }
    };
    if (G === !0) {
      const pt = Bt(60),
        Dt = await It.sendMessageLocally(Z, pt, rt);
      return Qt(Dt)
    }
    let Ot = St.message.timeout;
    for (let pt = 0; pt < St.message.retryCount; ++pt) {
      const Dt = Bt(Ot),
        Ut = await It.sendMessage(Z, Dt);
      if (Ut == null) {
        Ot *= St.message.timeoutGrowFactor;
        continue
      }
      return Qt(Ut)
    }
    const gt = "Message expired",
      mt = Bt(60),
      yt = await It.sendMessageLocally(Z, mt).catch(pt => {
        throw Q(a, `${gt}. ${pt.toString()}`)
      }),
      Lt = yt.exitCode != null ? `. Possible exit code: ${yt.exitCode}` : "";
    throw Q(a, `${gt}${Lt}`)
  }, At = async (I, a) => {
    ke(a, I), lt(a);
    const {
      publicKey: T,
      data: D,
      withSignatureId: x
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "data"), ln(a, a.params, "withSignatureId");
    const G = await le(a, I, x),
      {
        keystore: rt
      } = I,
      Z = await rt.getSigner(T);
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
  }, qr = async (I, a) => {
    ke(a, I), lt(a);
    const {
      publicKey: T,
      data: D,
      withSignatureId: x
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "data"), ln(a, a.params, "withSignatureId");
    const G = await le(a, I, x),
      {
        keystore: rt
      } = I,
      Z = await rt.getSigner(T);
    if (Z == null) throw Q(a, "Signer not found for public key");
    try {
      return await Z.sign(D, G).then(i.default.nekoton.extendSignature)
    } catch (ft) {
      throw Q(a, ft.toString())
    }
  }, ti = async (I, a) => {
    ke(a, I), an(a, I), jt(a, I), lt(a);
    const {
      sender: T,
      recipient: D,
      amount: x,
      bounce: G,
      payload: rt,
      stateInit: Z
    } = a.params;
    q(a, a.params, "sender"), q(a, a.params, "recipient"), q(a, a.params, "amount"), be(a, a.params, "bounce"), oe(a, a.params, "payload", De), ue(a, a.params, "stateInit");
    const ft = await le(a, I),
      {
        clock: It,
        properties: St,
        subscriptionController: Bt,
        connectionController: Qt,
        keystore: Ot,
        accountsStorage: gt
      } = I;
    let mt, yt, Lt;
    try {
      mt = i.default.nekoton.repackAddress(T), yt = i.default.nekoton.repackAddress(D), Lt = await gt.getAccount(mt).then(re => {
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
          payload: rt,
          stateInit: Z,
          timeout: ~~re,
          signatureId: ft
        }, new h.AccountsStorageContext(It, Qt, i.default.nekoton, Ot))
      } catch (Un) {
        throw Q(a, Un.toString())
      }
    };
    let Dt = St.message.timeout;
    const Ut = St.message.retryTransfers !== !1 ? St.message.retryCount : 1;
    for (let re = 0; re < Ut; ++re) {
      const Un = await pt(Dt),
        Ss = await Bt.sendMessage(mt, Un);
      if (Ss == null) {
        Dt *= St.message.timeoutGrowFactor;
        continue
      }
      return {
        transaction: Ss
      }
    }
    const Re = "Message expired",
      $t = await pt(60),
      xt = await Bt.sendMessageLocally(mt, $t).catch(re => {
        throw Q(a, `${Re}. ${re.toString()}`)
      }),
      kt = xt.exitCode != null ? `. Possible exit code: ${xt.exitCode}` : "";
    throw Q(a, `${Re}${kt}`)
  }, ei = async (I, a) => {
    ke(a, I), an(a, I), lt(a), jt(a, I);
    const {
      sender: T,
      recipient: D,
      amount: x,
      bounce: G,
      payload: rt,
      stateInit: Z
    } = a.params;
    q(a, a.params, "sender"), q(a, a.params, "recipient"), q(a, a.params, "amount"), be(a, a.params, "bounce"), oe(a, a.params, "payload", De), ue(a, a.params, "stateInit");
    const ft = await le(a, I),
      {
        clock: It,
        subscriptionController: St,
        connectionController: Bt,
        keystore: Qt,
        accountsStorage: Ot,
        notify: gt
      } = I;
    let mt, yt;
    try {
      mt = i.default.nekoton.repackAddress(T), yt = i.default.nekoton.repackAddress(D)
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
        payload: rt,
        stateInit: Z,
        timeout: 60,
        signatureId: ft
      }, new h.AccountsStorageContext(It, Bt, i.default.nekoton, Qt))
    } catch (pt) {
      throw Q(a, pt.toString())
    }
    return St.sendMessage(mt, Lt).then(pt => {
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
  }, ni = async (I, a) => {
    ke(a, I), lt(a), jt(a, I);
    const {
      publicKey: T,
      recipient: D,
      stateInit: x,
      payload: G,
      local: rt,
      executorParams: Z
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "recipient"), ue(a, a.params, "stateInit"), De(a, a.params, "payload"), We(a, a.params, "local"), on(a, a.params, "executorParams");
    const ft = await le(a, I);
    let It;
    try {
      It = i.default.nekoton.repackAddress(D)
    } catch ($t) {
      throw Q(a, $t.toString())
    }
    const {
      clock: St,
      subscriptionController: Bt,
      keystore: Qt,
      properties: Ot
    } = I, gt = await Qt.getSigner(T);
    if (gt == null) throw Q(a, "Signer not found for public key");
    const mt = async $t => {
      let xt;
      try {
        xt = i.default.nekoton.createExternalMessage(St, It, G.abi, G.method, x, G.params, T, ~~$t)
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
    }, yt = $t => {
      let xt;
      try {
        const kt = i.default.nekoton.decodeTransaction($t, G.abi, G.method);
        xt = kt == null ? void 0 : kt.output
      } catch {}
      return {
        transaction: $t,
        output: xt
      }
    };
    if (rt === !0) {
      const $t = await mt(60),
        xt = await Bt.sendMessageLocally(It, $t, Z);
      return yt(xt)
    }
    let Lt = Ot.message.timeout;
    for (let $t = 0; $t < Ot.message.retryCount; ++$t) {
      const xt = await mt(Lt),
        kt = await Bt.sendMessage(It, xt);
      if (kt == null) {
        Lt *= Ot.message.timeoutGrowFactor;
        continue
      }
      return yt(kt)
    }
    const pt = "Message expired",
      Dt = await mt(60),
      Ut = await Bt.sendMessageLocally(It, Dt).catch($t => {
        throw Q(a, `${pt}. ${$t.toString()}`)
      }),
      Re = Ut.exitCode != null ? `. Possible exit code: ${Ut.exitCode}` : "";
    throw Q(a, `${pt}${Re}`)
  }, si = async (I, a) => {
    ke(a, I), lt(a), jt(a, I);
    const {
      publicKey: T,
      recipient: D,
      stateInit: x,
      payload: G
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "recipient"), ue(a, a.params, "stateInit"), De(a, a.params, "payload");
    const rt = await le(a, I);
    let Z;
    try {
      Z = i.default.nekoton.repackAddress(D)
    } catch (yt) {
      throw Q(a, yt.toString())
    }
    const {
      clock: ft,
      subscriptionController: It,
      keystore: St,
      properties: Bt,
      notify: Qt
    } = I, Ot = await St.getSigner(T);
    if (Ot == null) throw Q(a, "Signer not found for public key");
    let gt;
    try {
      gt = i.default.nekoton.createExternalMessage(ft, Z, G.abi, G.method, x, G.params, T, ~~Bt.message.timeout)
    } catch (yt) {
      throw Q(a, yt.toString())
    }
    let mt;
    try {
      const yt = await Ot.sign(gt.hash, rt);
      mt = gt.sign(yt)
    } catch (yt) {
      throw Q(a, yt.toString())
    } finally {
      gt.free()
    }
    return It.sendMessage(Z, mt).then(yt => {
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
  async function le(I, a, T) {
    if (T !== !1) {
      {
        if (typeof T == "number") return T;
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

  function ge(I, a, T) {
    if (typeof a[T] != "object") throw Q(I, `'${String(T)}' must be an object`)
  }

  function on(I, a, T) {
    const D = a[T];
    if (D != null && typeof D != "object") throw Q(I, `'${String(T)}' must be an object if specified`)
  }

  function be(I, a, T) {
    if (typeof a[T] != "boolean") throw Q(I, `'${String(T)}' must be a boolean`)
  }

  function We(I, a, T) {
    const D = a[T];
    if (D != null && typeof D != "boolean") throw Q(I, `'${String(T)}' must be a boolean if specified`)
  }

  function q(I, a, T) {
    const D = a[T];
    if (typeof D != "string" || D.length === 0) throw Q(I, `'${String(T)}' must be non-empty string`)
  }

  function ue(I, a, T) {
    const D = a[T];
    if (D != null && (typeof D != "string" || D.length === 0)) throw Q(I, `'${String(T)}' must be a non-empty string if provided`)
  }

  function cn(I, a, T) {
    const D = a[T];
    if (D != null && typeof D != "number") throw Q(I, `'${String(T)}' must be a number if provider`)
  }

  function xn(I, a, T) {
    const D = a[T];
    if (!Array.isArray(D)) throw Q(I, `'${String(T)}' must be an array`)
  }

  function oe(I, a, T, D) {
    a[T] != null && D(I, a, T)
  }

  function ln(I, a, T) {
    const D = a[T];
    if (D != null && typeof D != "boolean" && typeof D != "number") throw Q(I, `'${String(T)}' must be an optional boolean or number`)
  }

  function ri(I, a, T) {
    ge(I, a, T);
    const D = a[T];
    q(I, D, "lt"), q(I, D, "hash")
  }

  function ii(I, a, T) {
    ge(I, a, T);
    const D = a[T];
    be(I, D, "isExact"), q(I, D, "lt"), ue(I, D, "hash")
  }

  function ai(I, a, T) {
    ge(I, a, T);
    const D = a[T];
    q(I, D, "boc")
  }

  function zn(I, a, T) {
    ge(I, a, T);
    const D = a[T];
    q(I, D, "balance"), oe(I, D, "lastTransactionId", ii), be(I, D, "isDeployed")
  }

  function De(I, a, T) {
    ge(I, a, T);
    const D = a[T];
    q(I, D, "abi"), q(I, D, "method"), ge(I, D, "params")
  }

  function ks(I, a, T) {
    const D = a[T];
    if (!(typeof D == "string" || D == null))
      if (typeof D == "object") q(I, D, "abi"), q(I, D, "method"), ge(I, D, "params");
      else throw Q(I, `'${String(T)}' must be a function all or optional string`)
  }

  function un(I, a, T) {
    const D = a[T];
    if (D != null && typeof D != "string" && !Array.isArray(D)) throw Q(I, `'${String(T)}' must be a method name or an array of possible names`)
  }
  async function Is(I, a) {
    an(I, a), jt(I, a);
    const T = a.accountsStorage.defaultAccount;
    if (T == null) throw Q(I, "Default account not set in accounts storage");
    const D = await a.accountsStorage.getAccount(T);
    if (D == null) throw Q(I, "Default account not found");
    const x = await D.fetchPublicKey(new h.AccountsStorageContext(a.clock, a.connectionController, i.default.nekoton));
    return {
      address: D.address.toString(),
      publicKey: x,
      contractType: "unknown"
    }
  }
  const Q = (I, a, T) => new oi(2, `${I.method}: ${a}`, T);
  class oi extends Error {
    constructor(a, T, D) {
      if (!Number.isInteger(a)) throw new Error('"code" must be an integer');
      if (!T || typeof T != "string") throw new Error('"message" must be a nonempty string');
      super(T), this.code = a, this.data = D
    }
    serialize() {
      const a = {
        code: this.code,
        message: this.message
      };
      return this.data !== void 0 && (a.data = this.data), this.stack && (a.stack = this.stack), a
    }
    toString() {
      return (0, r.default)(this.serialize(), ci, 2)
    }
  }
  const ci = (I, a) => {
    if (a !== "[Circular]") return a
  }
})(Rr);
(function(n) {
  var t = tt && tt.__createBinding || (Object.create ? function(A, E, b, f) {
      f === void 0 && (f = b);
      var w = Object.getOwnPropertyDescriptor(E, b);
      (!w || ("get" in w ? !E.__esModule : w.writable || w.configurable)) && (w = {
        enumerable: !0,
        get: function() {
          return E[b]
        }
      }), Object.defineProperty(A, f, w)
    } : function(A, E, b, f) {
      f === void 0 && (f = b), A[f] = E[b]
    }),
    e = tt && tt.__setModuleDefault || (Object.create ? function(A, E) {
      Object.defineProperty(A, "default", {
        enumerable: !0,
        value: E
      })
    } : function(A, E) {
      A.default = E
    }),
    s = tt && tt.__importStar || function(A) {
      if (A && A.__esModule) return A;
      var E = {};
      if (A != null)
        for (var b in A) b !== "default" && Object.prototype.hasOwnProperty.call(A, b) && t(E, A, b);
      return e(E, A), E
    },
    r = tt && tt.__exportStar || function(A, E) {
      for (var b in A) b !== "default" && !Object.prototype.hasOwnProperty.call(E, b) && t(E, A, b)
    },
    i = tt && tt.__importDefault || function(A) {
      return A && A.__esModule ? A : {
        default: A
      }
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  const o = s(Oc),
    u = o,
    _ = i(Zt);
  let h = !1,
    p;
  const C = new Promise((A, E) => {
    p = {
      resolve: A,
      reject: E
    }
  });
  _.default.ensureNekotonLoaded = A => (h || (h = !0, (0, o.default)(A).then(p.resolve).catch(p.reject)), C), _.default.nekoton = u, _.default.fetch = fetch, _.default.debugLog = A => {}, r(Rr, n)
})(os);
const Ll = () => {
    const n = ms();
    return {
      getDropItem: ({
        claimId: e,
        airdropName: s
      }) => {
        const r = new os.Clock,
          i = new ve.ProviderRpcClient({
            fallback: () => os.EverscaleStandaloneClient.create({
              clock: r,
              connection: {
                data: {
                  endpoint: "https://jrpc-ton.broxus.com/rpc"
                },
                id: Number(Ci.MAINNET),
                type: "jrpc"
              }
            }),
            forceUseFallback: !0
          }),
          o = new yr.AirdropUI({
            account: n.tonConnectUI.value.connector.account,
            onStatusChange: n.tonConnectUI.value.connector.onStatusChange.bind(n.tonConnectUI.value.connector),
            sendTransaction: n.tonConnectUI.value.sendTransaction.bind(n.tonConnectUI.value)
          }, i, r),
          u = pe(o.getState());
        n.connectionRestoredPromise.then(() => {
          o.setAirdropName(s), o.setClaimId(e)
        });
        const _ = o.subscribe(A => {
          u.value = A
        });
        return {
          state: ae(() => u.value),
          destroy: () => {
            _(), o.destory()
          },
          claim: async () => await o.claim()
        }
      },
      AirdropStatus: Ir
    }
  },
  Fl = {
    class: "pages-wallet-claim-drop-process page"
  },
  Nl = Xt({
    __name: "Process",
    props: {
      point: {},
      asset: {}
    },
    emits: ["close"],
    setup(n) {
      const t = n,
        e = ae(() => {
          if (!t.point.withdrawal) throw Ti("Drop is not available");
          return t.point.withdrawal
        }),
        s = ms(),
        r = pe(null),
        {
          state: i
        } = pr(),
        {
          getDropItem: o,
          AirdropStatus: u
        } = Ll(),
        _ = {
          soon_dev_1: "soontest",
          dogs_dev_test_3: "blumtest",
          dogs_stage_test_1: "blumtest",
          dogs_stage_test_2: "blumtest",
          soon_stage_1: "soontest",
          hashcash_stage_1: "hashcashtest",
          dogs_prod_1: "blumprod",
          soon_prod_1: "soonprod",
          fpi_prod_1: "fpibankprod",
          hashcash_prod_1: "hashcashprod"
        },
        {
          state: h,
          destroy: p,
          claim: C
        } = o({
          claimId: e.value.claimId,
          airdropName: _[e.value.airdropName]
        });
      return Ei(() => ({
        state: h.value,
        walletLocalAndRemoteState: i.value,
        queueComp: r.value
      }), (A, E) => {
        var w;
        if (A.state.status === u.Loading || A.walletLocalAndRemoteState.status !== ns.CONNECTED || !A.queueComp) return;
        const b = new es(.1),
          f = async () => {
            try {
              return await C(), qn(!0)
            } catch (B) {
              return hn(B)
            }
          };
        if (![u.NoAirdrop, u.NoUser, u.NoReward].includes(h.value.status))
          if (h.value.status === u.InQueue && ((w = h.value.claimData) == null ? void 0 : w.status) === "inQueue") A.queueComp.openWaiting({
            spotPosition: h.value.claimData.place
          });
          else if (h.value.status === u.CanClaim)
          if (h.value.claimLoading) A.queueComp.openTransferring({
            transferringPoints: e.value.amount.toNumber(),
            imageUrl: t.asset.imageUrl,
            symbol: t.asset.symbol
          });
          else {
            const B = E.state.status !== A.state.status;
            A.queueComp.openReadyToClaim({
              pointsToClaim: e.value.amount.toNumber(),
              imageUrl: t.asset.imageUrl,
              symbol: t.asset.symbol,
              fee: b,
              walletAddress: A.walletLocalAndRemoteState.address,
              tonBalance: A.walletLocalAndRemoteState.tonBalance,
              claimFn: f
            }, B)
          }
        else h.value.status === u.HasClaimed && (A.queueComp.openDone(), E.state.status !== u.HasClaimed && s.tonConnectUI.value.closeModal())
      }), Pi(p), (A, E) => {
        const b = mr,
          f = So;
        return st(), ut("div", Fl, [at(b), at(f, {
          ref_key: "queueComp",
          ref: r,
          onClose: E[0] || (E[0] = w => A.$emit("close"))
        }, null, 512)])
      }
    }
  }),
  Kl = Yt(Nl, [
    ["__scopeId", "data-v-902d9474"]
  ]),
  jl = {
    class: "pages-wallet-block-details-soon-notification-content"
  },
  Bl = {
    class: "title"
  },
  $l = ["innerHTML"],
  xl = Xt({
    __name: "Content",
    emits: ["close"],
    setup(n) {
      return (t, e) => {
        const s = dr,
          r = rn;
        return st(), ut("div", jl, [at(s, {
          name: "animations/MoneyWings",
          size: 116
        }), Y("div", Bl, ct(("t" in t ? t.t : z(ot))("wallet.drop.notification.content.title")), 1), Y("div", {
          class: "text",
          innerHTML: ("t" in t ? t.t : z(ot))("wallet.drop.notification.content.text")
        }, null, 8, $l), at(r, {
          label: ("t" in t ? t.t : z(ot))("base.got_it"),
          fill: "",
          class: "button",
          size: z(we).LARGE,
          onClick: e[0] || (e[0] = i => t.$emit("close"))
        }, null, 8, ["label", "size"])])
      }
    }
  }),
  zl = Yt(xl, [
    ["__scopeId", "data-v-7ad98ffe"]
  ]),
  Ul = Xt({
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
      const t = cr(n, "modelValue");
      return (e, s) => {
        const r = zl,
          i = bs;
        return st(), zt(i, {
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
  Wl = Yt(Ul, [
    ["__scopeId", "data-v-c6ce1d42"]
  ]),
  Gl = {
    class: "pages-wallet-asset-points"
  },
  Hl = Xt({
    __name: "AssetPoints",
    props: {
      points: {
        type: Array,
        required: !0
      }
    },
    setup(n) {
      const t = n,
        e = sr(),
        s = Mi(),
        r = b => !b.withdrawal || b.withdrawal.status === _n.NOT_INIT || b.withdrawal.type === Hn.LAZY ? void 0 : b.withdrawal.eligible ? {
          highlighted: !0,
          value: ot("wallet.drop.point_description.ready_to_transfer")
        } : {
          highlighted: !1,
          value: ot("wallet.drop.point_description.not_enough")
        },
        i = pe(new Set),
        o = b => ({
          id: b.currencyId,
          name: b.name,
          symbol: b.symbol,
          balance: b.balance,
          fiat: b.fiatValue,
          imageUrl: b.imageUrl,
          clickable: !!C(b),
          description: r(b),
          actionButton: (() => {
            if (!(!b.withdrawal || b.withdrawal.type !== Hn.LAZY || b.withdrawal.status === _n.NOT_INIT)) return {
              callback: async () => {
                i.value.add(b.currencyId), await e.requestPointDrop(b.currencyId), i.value.delete(b.currencyId)
              },
              loading: b.withdrawal.status === _n.IN_PROGRESS || i.value.has(b.currencyId)
            }
          })()
        }),
        u = ae(() => t.points.map(b => ({
          asset: o(b),
          point: b
        }))),
        _ = pe(),
        h = pe(),
        p = pe(!1);

      function C(b) {
        const f = b.withdrawal;
        if (!(!f || f.type === Hn.LAZY)) return () => {
          f.status === _n.NOT_INIT ? p.value = !0 : A.value.status !== ns.CONNECTED ? s.runConnectionFlow() : _.value = b
        }
      }
      const A = pr().state,
        E = ae(() => {
          const b = _.value,
            f = b == null ? void 0 : b.withdrawal;
          if (A.value.status !== ns.CONNECTED || !f) return {
            type: "loading"
          };
          const w = o(b);
          if (!f.eligible) return {
            type: "not_enough_to_transfer",
            asset: w,
            amount: b.balance.value,
            minAmount: f.minAmount
          };
          const B = Oi(f.eligibleWalletAddress),
            v = A.value.address;
          return wn.Address.parse(B).equals(wn.Address.parse(v)) ? {
            type: "ready_to_transfer",
            asset: w,
            amount: f.amount,
            walletAddress: B,
            tonBalance: A.value.tonBalance,
            claim: () => {
              h.value = {
                point: b,
                asset: w
              }, _.value = void 0
            }
          } : {
            type: "wrong_wallet_address",
            asset: w,
            eligibleWalletAddress: B
          }
        });
      return (b, f) => {
        const w = ca,
          B = xa,
          v = Kl,
          y = Wl;
        return st(), ut("div", Gl, [(st(!0), ut(je, null, gs(z(u), m => (st(), zt(w, Os({
          key: m.asset.id,
          ref_for: !0
        }, m.asset, {
          onClick: L => {
            var j;
            return (j = C(m.point)) == null ? void 0 : j()
          }
        }), null, 16, ["onClick"]))), 128)), at(B, {
          "model-value": !!z(_),
          state: z(E),
          "onUpdate:modelValue": f[0] || (f[0] = m => _.value = void 0)
        }, null, 8, ["model-value", "state"]), z(h) ? (st(), zt(v, Os({
          key: 0
        }, z(h), {
          onClose: f[1] || (f[1] = m => h.value = void 0)
        }), null, 16)) : ce("", !0), at(y, {
          modelValue: z(p),
          "onUpdate:modelValue": f[2] || (f[2] = m => or(p) ? p.value = m : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  su = Yt(Hl, [
    ["__scopeId", "data-v-609d6ad5"]
  ]);
export {
  ji as _, wr as a, su as b, zl as c, ta as d, ca as e
};