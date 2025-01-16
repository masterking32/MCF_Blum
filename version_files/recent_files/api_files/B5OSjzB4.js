import {
  _ as nr
} from "./CkmrTVeP.js";
import {
  d as Xt,
  o as rt,
  c as ut,
  e as U,
  ak as oi,
  f as Yt,
  a as Y,
  bi as ci,
  m as Ze,
  t as ot,
  n as Ne,
  G as Gt,
  aU as Ss,
  D as ce,
  aV as li,
  _ as ze,
  K as fe,
  J as ui,
  aW as Cs,
  a$ as di,
  j as ae,
  L as _i,
  M as sr,
  cX as Ts,
  W as Wn,
  at as fn,
  as as hn,
  Y as Gn,
  O as pi,
  X as fs,
  z as ct,
  Z as rr,
  U as ir,
  H as xt,
  b as at,
  av as ar,
  aa as Hn,
  V as we,
  F as Ke,
  q as hs,
  p as or,
  Q as fi,
  bw as hi,
  x as an,
  aH as gs,
  N as gi,
  w as bi,
  al as Es,
  am as cr,
  a_ as bs,
  aL as lr,
  B as qn,
  T as ts,
  a5 as ur,
  ab as dr,
  a7 as mi,
  aM as Ps,
  bj as wi,
  ae as Ms,
  c5 as tt,
  bh as wn,
  ah as yi,
  c1 as _r,
  cY as vi,
  cZ as Ai,
  a2 as ki,
  by as pr,
  P as Ii,
  bW as es,
  ap as Si,
  bd as Ci,
  ac as Os
} from "./DU-EduvJ.js";
import {
  _ as Ti
} from "./J9RzZ51C.js";
import {
  _ as fr
} from "./BL_9Dy4z.js";
import {
  d as Ei
} from "./DaCHxoB5.js";
import {
  g as Pi
} from "./C73_HQA4.js";
import {
  _ as hr
} from "./JGRitRBB.js";
import {
  _ as gr
} from "./C1OI46tY.js";
import {
  _ as Mi
} from "./BcZCGZaW.js";
import {
  _ as Oi
} from "./Ddq2Xg_z.js";
import {
  a as Ri
} from "./D_q4HP5b.js";
const Di = ["src"],
  Li = Xt({
    __name: "Image",
    props: {
      name: {}
    },
    setup(n) {
      return (t, e) => (rt(), ut("img", {
        class: "kit-image",
        src: ("imgResolver" in t ? t.imgResolver : U(oi))(t.name)
      }, null, 8, Di))
    }
  }),
  Fi = Yt(Li, [
    ["__scopeId", "data-v-d66ca65e"]
  ]),
  Ni = Xt({
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
        const u = li,
          _ = ze;
        return rt(), ut("button", {
          class: Ne(["kit-pill reset", [{
            "is-disabled": i.disabled
          }, `is-type-${e.type??"default"}`]]),
          onClick: o[0] || (o[0] = h => r())
        }, [Y("div", {
          class: Ne(["label", {
            "is-hidden": e.state !== "default"
          }])
        }, [ci(i.$slots, "default", {}, () => [Ze(ot(e.label), 1)], !0)], 2), e.state === "loading" ? (rt(), Gt(u, {
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
  br = Yt(Ni, [
    ["__scopeId", "data-v-670973e0"]
  ]),
  $i = () => {
    const n = fe(),
      t = () => {
        n.value && (clearTimeout(n.value), n.value = void 0)
      };
    return {
      set: (r, i) => {
        t(), i > 0 && (n.value = setTimeout(r, i))
      },
      destroy: () => t()
    }
  },
  Rs = (n, t = 3, e = !1) => ({
    decimal: n,
    formatted: sr(n, {
      accuracy: t,
      trim: e
    })
  });
var Le = (n => (n.PREPARING = "PREPARING", n.READY = "READY", n.ACTIVE = "ACTIVE", n.DONE = "DONE", n))(Le || {});
const ji = () => {
    const n = ui(),
      t = Cs("$1k89RsdjV9"),
      e = $i(),
      s = async () => {
        const {
          res: p,
          transferTime: C
        } = await Ts(Wn.getUserBalance);
        return p.err ? (t.value = void 0, fn()) : (p.data.timestamp += C, t.value = p.data, hn({}))
      }, r = Cs(() => di(s, () => {}, 3e4), "$54naw195T8"), i = async () => {
        const p = await Wn.startFarming();
        return p.err ? (Gn().error(), fn()) : (t.value && (t.value.farming = p.data), hn({}))
      }, o = async p => {
        const {
          res: C,
          transferTime: b
        } = await Ts(Wn.claimFarming);
        return C.err ? (Gn().error(), fn()) : (C.data.timestamp += b, t.value = C.data, e.set(() => pi().update(), 5e3), fs().makeConfetti(), Gn().success(ct("base.you_got_bp", {
          bp: p.formatted
        })), rr().farming.farmingClaimed(p.decimal), hn({}))
      }, u = ae(() => {
        var w;
        const p = n.ms100ticker.value,
          C = (w = t.value) == null ? void 0 : w.timestamp,
          b = t.value;
        if (!p || !C || !b) return {
          status: "PREPARING"
        };
        const A = b.farming;
        if (A === void 0 || p < A.startTime) return {
          status: "READY"
        };
        if (p > A.endTime) {
          const j = A.earningsRate.mul(A.endTime - A.startTime).div(1e3);
          return {
            status: "DONE",
            balance: Rs(j, 1, !0)
          }
        }
        const k = (() => {
            const j = Math.max(A.startTime, C),
              y = Math.min(A.endTime, p),
              v = Math.max(0, y - j);
            if (v === 0) return A.balance;
            const m = A.earningsRate.mul(v).div(1e3);
            return A.balance.add(m)
          })(),
          f = (p - A.startTime) / (A.endTime - A.startTime) * 100;
        return {
          status: "ACTIVE",
          balance: Rs(k),
          progress: f,
          timeRemainingLabel: _i(A.endTime - p, "letters")
        }
      });
    return {
      init: async () => {
        await r.value.exec()
      },
      destroy: () => {
        e.destroy(), t.value = void 0, r.value.destroy()
      },
      activeFarming: u,
      start: i,
      claim: o
    }
  },
  Ki = {
    class: "pages-wallet-asset-farming-slot"
  },
  Bi = Xt({
    __name: "AssetFarmingSlot",
    setup(n) {
      const t = ji(),
        e = ae(() => t.activeFarming.value),
        s = () => async () => {
          e.value.status === Le.DONE && await t.claim(e.value.balance)
        };
      return (async () => await t.init())(), ir(() => t.destroy()), (i, o) => {
        const u = br,
          _ = Ti,
          h = ze,
          p = fr;
        return rt(), ut("div", Ki, [U(e).status === U(Le).PREPARING ? (rt(), Gt(u, {
          key: 0,
          state: "loading",
          label: ("t" in i ? i.t : U(ct))("base.farm"),
          type: "dark"
        }, null, 8, ["label"])) : U(e).status === U(Le).READY ? (rt(), Gt(_, {
          key: 1,
          label: ("t" in i ? i.t : U(ct))("base.farm"),
          "can-claim": "",
          "claim-fn": U(t).start,
          type: "dark"
        }, null, 8, ["label", "claim-fn"])) : U(e).status === U(Le).ACTIVE ? (rt(), Gt(p, {
          key: 2,
          nowrap: ""
        }, {
          default: xt(() => [at(u, {
            label: "",
            state: "default",
            type: "dark",
            class: "farming",
            style: ar({
              "background-position-x": `-${U(e).progress}%`
            })
          }, {
            default: xt(() => [at(h, {
              name: "clock"
            }), Y("div", null, ot(U(e).balance.formatted) + " BP", 1)]),
            _: 1
          }, 8, ["style"])]),
          inner: xt(() => [Ze(ot(("t" in i ? i.t : U(ct))("index.farming.left_to_farm", {
            time: U(e).timeRemainingLabel
          })), 1)]),
          _: 1
        })) : U(e).status === U(Le).DONE ? (rt(), Gt(_, {
          key: 3,
          label: ("t" in i ? i.t : U(ct))("base.claim_bp", {
            bp: U(e).balance.formatted
          }),
          "can-claim": "",
          "claim-fn": s()
        }, null, 8, ["label", "claim-fn"])) : ce("", !0)])
      }
    }
  }),
  xi = Yt(Bi, [
    ["__scopeId", "data-v-bc872879"]
  ]),
  zi = {
    class: "pages-wallet-asset-memepoint-slot"
  },
  Ui = {
    class: "title"
  },
  Wi = {
    class: "items"
  },
  Gi = ["onClick"],
  Hi = {
    class: "content"
  },
  Vi = {
    class: "label"
  },
  Qi = {
    class: "description"
  },
  Ji = {
    key: 0,
    class: "reward"
  },
  Xi = {
    key: 1,
    class: "postfix"
  },
  Yi = Xt({
    __name: "AssetMemepointSlot",
    setup(n) {
      const t = fe(!1),
        e = () => {
          t.value = !0, rr().wallet.tradeToEarnClick(fi().name)
        },
        s = ae(() => [{
          label: ct("wallet.points.meme_modal.launch_token"),
          icon: "emoji/Seedling",
          reward: {
            mp: 500
          },
          onClick: () => Hn().push({
            name: "memepad-new"
          })
        }, {
          label: ct("wallet.points.meme_modal.token_to_dex"),
          icon: "emoji/Clover",
          reward: {
            mp: 1e4
          },
          onClick: () => Hn().push({
            name: "memepad"
          })
        }, {
          label: ct("wallet.points.meme_modal.trade_on_memepad"),
          icon: "emoji/MoneyWings",
          reward: {
            mp: 50
          },
          postfix: ct("wallet.points.meme_modal.trade_on_memepad_postfix"),
          onClick: () => Hn().push({
            name: "memepad"
          })
        }, {
          label: ct("wallet.points.meme_modal.trade_with_bot"),
          icon: "emoji/Rocket",
          postfix: ct("wallet.points.meme_modal.coming_soon"),
          onClick: () => fs().openTradingBot()
        }]),
        r = i => {
          const o = "+" + sr(i.mp) + " Meme points",
            u = i.usd ? "$" + hi(i.usd, {
              trim: !0
            }) : void 0;
          return [o, u].filter(Boolean).join(" / ")
        };
      return (i, o) => {
        const u = br,
          _ = ze,
          h = Fi,
          p = an,
          C = gs;
        return rt(), ut("div", zi, [at(u, {
          state: "default",
          label: ("t" in i ? i.t : U(ct))("wallet.points.trade_to_earn"),
          type: "dark",
          onClick: o[0] || (o[0] = b => e())
        }, null, 8, ["label"]), at(C, {
          modelValue: U(t),
          "onUpdate:modelValue": o[2] || (o[2] = b => or(t) ? t.value = b : null),
          class: "sheet"
        }, {
          footer: xt(() => [at(p, {
            fill: "",
            label: "Got it",
            size: U(we).LARGE,
            onClick: o[1] || (o[1] = b => t.value = !1)
          }, null, 8, ["size"])]),
          default: xt(() => [Y("div", Ui, ot(("t" in i ? i.t : U(ct))("wallet.points.meme_modal.title")), 1), Y("div", Wi, [(rt(!0), ut(Ke, null, hs(U(s), (b, A) => (rt(), ut("div", {
            key: A,
            class: "item",
            onClick: k => b.onClick()
          }, [Y("div", Hi, [Y("div", Vi, [Y("div", null, ot(b.label), 1), at(_, {
            name: "chevron-right",
            class: "icon"
          })]), Y("div", Qi, [b.reward ? (rt(), ut("span", Ji, ot(r(b.reward)), 1)) : ce("", !0), b.postfix ? (rt(), ut("span", Xi, ot(" " + b.postfix), 1)) : ce("", !0)])]), at(h, {
            name: b.icon,
            class: "image"
          }, null, 8, ["name"])], 8, Gi))), 128))])]),
          _: 1
        }, 8, ["modelValue"])])
      }
    }
  }),
  Zi = Yt(Yi, [
    ["__scopeId", "data-v-9cd051f3"]
  ]),
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
      pnlPercent: {}
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
          pnl: t.pnlPercent ? Pi(t.pnlPercent) : void 0
        });
      return (s, r) => {
        const i = nr,
          o = xi,
          u = Zi,
          _ = gi("img-error");
        return rt(), ut("div", {
          class: Ne(["pages-wallet-asset", {
            clickable: s.clickable
          }])
        }, [bi(Y("img", {
          src: s.imageUrl,
          alt: "Coin item icon",
          class: "icon"
        }, null, 8, qi), [
          [_, U(Ei)]
        ]), Y("div", ta, [Y("div", ea, ot(s.name), 1), s.description ? (rt(), ut("div", {
          key: 0,
          class: Ne(["balance", {
            highlight: s.description.highlighted
          }])
        }, ot(s.description.value), 3)) : (rt(), ut("div", na, ot(s.balance.defaultWithSymbol), 1))]), U(e) ? (rt(), ut("div", sa, [U(e).type === "fiat" ? (rt(), ut(Ke, {
          key: 0
        }, [U(e).value === void 0 ? (rt(), Gt(i, {
          key: 0,
          class: "fiat-skeleton"
        })) : (rt(), ut("div", ra, ot(U(e).value), 1)), U(e).pnl ? (rt(), ut("div", {
          key: 2,
          class: Ne(["pnl-label", U(e).pnl.cls])
        }, ot(U(e).pnl.formatted), 3)) : ce("", !0)], 64)) : U(e).type === "farming" ? (rt(), Gt(o, {
          key: 1
        })) : U(e).type === "memepoint" ? (rt(), Gt(u, {
          key: 2
        })) : ce("", !0)])) : ce("", !0)], 2)
      }
    }
  }),
  aa = Yt(ia, [
    ["__scopeId", "data-v-9d566e46"]
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
  Ia = ["src"],
  Sa = {
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
  Ra = {
    class: "buttons"
  },
  Da = {
    class: "wallet"
  },
  La = {
    class: "icon-wrapper"
  },
  Fa = ["src"],
  Na = {
    class: "ticker"
  },
  $a = {
    class: "amount"
  },
  ja = Xt({
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
        e = bs(),
        s = i => new ts(i.amount).div(i.minAmount).mul(100).toNumber(),
        r = (i, o) => {
          const u = Math.min(new ts(i.toFixed(2)).decimalPlaces(), 2);
          return `${ur(i,{accuracy:u})} ${o}`
        };
      return (i, o) => {
        const u = dr,
          _ = ze,
          h = an,
          p = hr,
          C = gs;
        return rt(), Gt(C, {
          modelValue: t.value,
          "onUpdate:modelValue": o[2] || (o[2] = b => t.value = b),
          class: "pages-wallet-block-details-drop-sheet"
        }, {
          default: xt(() => [i.state.type !== "loading" ? (rt(), ut("div", oa, [Y("div", ca, [at(u, {
            name: "animations/MoneyWings",
            size: 96
          })]), Y("div", la, ot(("t" in i ? i.t : U(ct))("wallet.drop.sheet.title")), 1), i.state.type === "wrong_wallet_address" ? (rt(), ut("div", ua, [Y("div", da, ot(("t" in i ? i.t : U(ct))("wallet.drop.sheet.wrong_wallet_address.subtitle", {
            ticker: i.state.asset.symbol
          })), 1), Y("div", _a, [Y("div", pa, [Y("div", fa, [at(_, {
            name: "ton-logo",
            class: "icon"
          })]), Y("div", ha, ot(("sliceWalletAddress" in i ? i.sliceWalletAddress : U(lr))(i.state.eligibleWalletAddress)), 1), Y("div", ga, [at(_, {
            name: "circle-check",
            class: "icon"
          }), Y("div", ba, ot(("t" in i ? i.t : U(ct))("wallet.drop.sheet.wrong_wallet_address.eligible_label")), 1)])]), at(h, {
            label: ("t" in i ? i.t : U(ct))("wallet.reconnect.btn"),
            fill: "",
            size: U(we).LARGE,
            onClick: o[0] || (o[0] = b => U(e).reconnect())
          }, null, 8, ["label", "size"])])])) : i.state.type === "not_enough_to_transfer" ? (rt(), ut("div", ma, [Y("div", wa, ot(("t" in i ? i.t : U(ct))("wallet.drop.sheet.not_enough_to_transfer.subtitle", {
            ticker: i.state.asset.symbol
          })), 1), Y("div", ya, [Y("div", va, [Y("div", Aa, [Y("div", ka, [Y("img", {
            src: i.state.asset.imageUrl
          }, null, 8, Ia), Y("div", Sa, ot(i.state.asset.symbol), 1)]), Y("div", Ca, [Y("span", Ta, ot(r(i.state.amount, i.state.asset.symbol)), 1), Y("span", Ea, " / " + ot(r(i.state.minAmount, i.state.asset.symbol)), 1)])]), Y("div", Pa, [Y("div", {
            class: "line",
            style: ar({
              "--percent": `${s(i.state)}%`
            })
          }, null, 4)])]), at(h, {
            label: ("t" in i ? i.t : U(ct))("wallet.drop.sheet.not_enough_to_transfer.btn_label"),
            fill: "",
            size: U(we).LARGE,
            type: U(qn).SECONDARY,
            disabled: ""
          }, null, 8, ["label", "size", "type"])])])) : i.state.type === "ready_to_transfer" ? (rt(), ut("div", Ma, [Y("div", {
            class: "text",
            innerHTML: ("t" in i ? i.t : U(ct))("wallet.drop.sheet.ready_to_transfer.subtitle", {
              ticker: i.state.asset.symbol
            })
          }, null, 8, Oa), Y("div", Ra, [Y("div", Da, [Y("div", La, [Y("img", {
            src: i.state.asset.imageUrl
          }, null, 8, Fa)]), Y("div", Na, ot(i.state.asset.symbol), 1), Y("div", $a, ot(r(i.state.amount, i.state.asset.symbol)), 1)]), at(h, {
            label: ("t" in i ? i.t : U(ct))("wallet.drop.sheet.ready_to_transfer.btn_label"),
            fill: "",
            size: U(we).LARGE,
            type: U(qn).HIGHLIGHT,
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
  Ka = Yt(ja, [
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
      return (s, r) => (rt(), ut("div", Ba, [(rt(!0), ut(Ke, null, hs(U(e), i => (rt(), ut("div", {
        key: i.idx,
        class: "el-char-wrapper"
      }, [at(mi, {
        name: "change-item-transition"
      }, {
        default: xt(() => [(rt(), ut("div", {
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
        i = fe(!1),
        o = ae(() => i.value || !e.tonBalance),
        u = async () => {
          o.value || r.value || (i.value = !0, await e.claimFn(), i.value = !1, s("claim"))
        };
      return (_, h) => {
        const p = nr,
          C = ze,
          b = Oi,
          A = fr,
          k = an;
        return rt(), ut("div", Ua, [Y("div", Wa, [U(o) ? (rt(), ut(Ke, {
          key: 0
        }, [at(p, {
          class: "skeleton"
        }), at(p, {
          class: "skeleton"
        })], 64)) : (rt(), ut(Ke, {
          key: 1
        }, [Y("div", Ga, [at(C, {
          name: "connected-wallet",
          class: "icon"
        }), Y("span", null, ot(("sliceWalletAddress" in _ ? _.sliceWalletAddress : U(lr))(_.walletAddress)), 1)]), U(r) ? (rt(), Gt(b, {
          key: 0,
          "error-message": U(r)
        }, null, 8, ["error-message"])) : (rt(), ut("div", Ha, [at(A, {
          "text-min-width": 155,
          alignment: U(wi).TOP
        }, {
          default: xt(() => [at(C, {
            name: "circle-help",
            class: "icon"
          })]),
          inner: xt(() => [Y("div", null, ot(`${("t"in _?_.t:U(ct))("memepad.jetton.fees_network")}: ${("formatTon"in _?_.formatTon:U(Ps))(_.fee)} TON`), 1)]),
          _: 1
        }, 8, ["alignment"]), Y("span", null, ot(`${("t"in _?_.t:U(ct))("memepad.jetton.fees_base")}: ${`${("formatTon"in _?_.formatTon:U(Ps))(_.fee)} TON`}`), 1)]))], 64))]), at(k, {
          type: U(qn).HIGHLIGHT,
          size: U(we).LARGE,
          loading: U(o),
          disabled: !!U(r),
          onClick: h[0] || (h[0] = f => u())
        }, {
          default: xt(() => [Ze(ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.ready_to_claim.btn_label")), 1)]),
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
      const e = fe({
          status: "loading"
        }),
        s = ({
          points: _
        }) => {
          const h = ["amount"];
          return _ > 1e3 && h.push("is-many"), Ms("div", {
            class: h
          }, Ms(za, {
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
          fee: b,
          tonBalance: A,
          claimFn: k
        }, f) => {
          e.value = {
            status: "ready_to_claim",
            pointsToClaim: _,
            imageUrl: h,
            symbol: p,
            walletAddress: C,
            fee: b,
            tonBalance: A,
            claimFn: k
          }, f && fs().makeConfetti()
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
        const p = hr,
          C = gr,
          b = Mi,
          A = Qa,
          k = an,
          f = ze;
        return rt(), ut("div", {
          class: Ne(["pages-wallet-block-points-claim-page page", `is-${U(e).status.toLowerCase()}`])
        }, [U(e).status === "loading" ? (rt(), ut("div", Ja, [at(p)])) : U(e).status === "waiting" ? (rt(), ut("div", Xa, [at(C), Y("div", Ya, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.waiting.title")), 1), at(s, {
          points: U(e).spotPosition
        }, null, 8, ["points"]), Y("div", Za, [h[2] || (h[2] = Y("div", {
          class: "ping-dot"
        }, null, -1)), Y("span", qa, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.waiting.status")), 1)]), at(b, null, {
          default: xt(() => [Y("div", to, [Y("div", eo, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.waiting.note_dogs")), 1)])]),
          _: 1
        })])) : U(e).status === "ready_to_claim" ? (rt(), ut("div", no, [at(C), Y("div", so, [Y("img", {
          src: U(e).imageUrl,
          alt: "Point image"
        }, null, 8, ro)]), Y("div", io, ot(U(e).symbol), 1), at(s, {
          points: U(e).pointsToClaim
        }, null, 8, ["points"]), Y("div", ao, [h[3] || (h[3] = Y("div", {
          class: "ping-dot"
        }, null, -1)), Y("span", oo, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.ready_to_claim.status")), 1)]), at(b, null, {
          default: xt(() => [Y("div", co, [at(A, {
            "wallet-address": U(e).walletAddress,
            fee: U(e).fee,
            "ton-balance": U(e).tonBalance,
            "claim-fn": U(e).claimFn
          }, null, 8, ["wallet-address", "fee", "ton-balance", "claim-fn"])])]),
          _: 1
        })])) : U(e).status === "transferring" ? (rt(), ut("div", lo, [at(C), Y("div", uo, [Y("img", {
          src: U(e).imageUrl,
          alt: "Point image"
        }, null, 8, _o)]), Y("div", po, ot(U(e).symbol), 1), at(s, {
          points: U(e).transferringPoints
        }, null, 8, ["points"]), Y("div", fo, [h[4] || (h[4] = Y("div", {
          class: "ping-dot"
        }, null, -1)), Y("span", ho, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.transferring.status")), 1)]), at(b, null, {
          default: xt(() => [Y("div", go, [at(k, {
            size: U(we).LARGE,
            class: "button",
            onClick: h[0] || (h[0] = w => _.$emit("close"))
          }, {
            default: xt(() => [Ze(ot(("t" in _ ? _.t : U(ct))("base.got_it")), 1)]),
            _: 1
          }, 8, ["size"])])]),
          _: 1
        })])) : U(e).status === "done" ? (rt(), ut("div", bo, [Y("div", mo, [Y("div", wo, [at(f, {
          name: "check-big",
          class: "icon"
        })])]), Y("div", yo, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.done.title")), 1), Y("div", vo, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.done.subtitle")), 1), at(b, null, {
          default: xt(() => [at(k, {
            size: U(we).LARGE,
            class: "button",
            onClick: h[1] || (h[1] = w => _.$emit("close"))
          }, {
            default: xt(() => [Ze(ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.done.btn_label")), 1)]),
            _: 1
          }, 8, ["size"])]),
          _: 1
        })])) : ce("", !0)], 2)
      }
    }
  }),
  ko = Yt(Ao, [
    ["__scopeId", "data-v-57eddbc3"]
  ]);
var mr = {},
  ve = {},
  Tt = {},
  Be = {};
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.getUniqueId = n.mergeTransactions = n.LT_COLLATOR = n.Semaphore = n.DelayedTransactions = n.MessageExpiredException = n.AddressLiteral = n.isAddressObject = n.Address = void 0;
  class t {
    constructor(k) {
      this.equals = f => this._equals(f), this._address = k
    }
    toString() {
      return this._address
    }
    toJSON() {
      return this._address
    }
    _equals(k) {
      return typeof k == "string" ? this._address === k : this._address === (k == null ? void 0 : k._address)
    }
  }
  n.Address = t;

  function e(A) {
    return A != null && (A instanceof t || Object.getPrototypeOf(A).constructor.name === t.prototype.constructor.name)
  }
  n.isAddressObject = e;
  class s extends t {
    constructor(k) {
      super(k)
    }
  }
  n.AddressLiteral = s;
  class r extends Error {
    constructor(k, f) {
      super("Message expired"), this.address = k, this.hash = f
    }
  }
  n.MessageExpiredException = r;
  class i {
    constructor() {
      this.transactions = new Map
    }
    async waitTransaction(k, f) {
      var w;
      let j = (w = this.transactions.get(f)) === null || w === void 0 ? void 0 : w.promise;
      if (j == null) {
        let v, m;
        j = new Promise((F, K) => {
          v = B => F(B), m = () => K()
        }), this.transactions.set(f, {
          promise: j,
          resolve: v,
          reject: m
        })
      }
      const y = await j;
      if (y == null) throw new r(k, f);
      return y
    }
    fillTransaction(k, f) {
      const w = this.transactions.get(k);
      w != null ? w.resolve(f) : this.transactions.set(k, {
        promise: Promise.resolve(f),
        resolve: () => {},
        reject: () => {}
      })
    }
  }
  n.DelayedTransactions = i;
  class o {
    constructor(k) {
      this.tasks = [], this.sched = () => {
        var f;
        this.count > 0 && this.tasks.length > 0 && (this.count--, (f = this.tasks.shift()) === null || f === void 0 || f())
      }, this.count = k
    }
    acquire() {
      return new Promise((k, f) => {
        this.tasks.push(() => {
          let w = !1;
          k(() => {
            w || (w = !0, this.count++, this.sched())
          })
        }), _(this.sched)
      })
    }
    releaseAll() {
      for (var k; this.tasks.length > 0;)(k = this.tasks.shift()) === null || k === void 0 || k()
    }
  }
  n.Semaphore = o;

  function u(A) {
    const k = document.createTextNode("");
    let f, w, j = 0,
      y = 0;
    return new A(function() {
        let v;
        if (f) w && (f = w.slice(y).concat(f));
        else {
          if (!w) return;
          f = w
        }
        if (w = f, f = null, y = 0, typeof w == "function") {
          v = w, w = null, v();
          return
        }
        for (k.data = j = ++j % 2; y < w.length;) v = w[y], y++, y === w.length && (w = null), v()
      }).observe(k, {
        characterData: !0
      }),
      function(v) {
        if (f) {
          typeof f == "function" ? f = [f, v] : f.push(v);
          return
        }
        f = v, k.data = j = ++j % 2
      }
  }
  const _ = function() {
    if (typeof queueMicrotask == "function") return queueMicrotask;
    if (typeof document == "object" && document) {
      if (typeof MutationObserver == "function") return u(MutationObserver);
      if (typeof window.WebKitMutationObserver == "function") return u(window.WebKitMutationObserver)
    }
    if (typeof setImmediate == "function") return setImmediate;
    if (typeof setTimeout == "function" || typeof setTimeout == "object") return function(A) {
      setTimeout(A, 0)
    };
    throw new Error("No `nextTick` implementation found")
  }();
  n.LT_COLLATOR = new Intl.Collator(void 0, {
    numeric: !0,
    sensitivity: "base"
  });

  function h(A, k, f) {
    if (f.batchType === "old") return A.push(...k), A;
    if (A.length === 0) return A.push(...k), A;
    let w = 0;
    for (; w < A.length && n.LT_COLLATOR.compare(A[w].id.lt, f.maxLt) >= 0;) ++w;
    return A.splice(w, 0, ...k), A
  }
  n.mergeTransactions = h;
  const p = 4294967295;
  let C = Math.floor(Math.random() * p);

  function b() {
    return C = (C + 1) % p, C
  }
  n.getUniqueId = b
})(Be);
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
Tt.parsePartialTokensObject = Tt.parseTokensObject = Tt.serializeTokensObject = Tt.parseAccountInteraction = Tt.parsePermissions = Tt.parseMessage = Tt.serializeMessage = Tt.parseTransaction = Tt.serializeTransaction = void 0;
const qe = Be;

function Io(n) {
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
    inMessage: ns(n.inMessage),
    outMessages: n.outMessages.map(ns)
  }
}
Tt.serializeTransaction = Io;

function So(n) {
  return {
    ...n,
    inMessage: ss(n.inMessage),
    outMessages: n.outMessages.map(ss)
  }
}
Tt.parseTransaction = So;

function ns(n) {
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
Tt.serializeMessage = ns;

function ss(n) {
  return {
    ...n,
    src: n.src ? new qe.Address(n.src) : void 0,
    dst: n.dst ? new qe.Address(n.dst) : void 0
  }
}
Tt.parseMessage = ss;

function Co(n) {
  return {
    ...n,
    accountInteraction: n.accountInteraction ? wr(n.accountInteraction) : void 0
  }
}
Tt.parsePermissions = Co;

function wr(n) {
  return {
    ...n,
    address: new qe.Address(n.address)
  }
}
Tt.parseAccountInteraction = wr;

function To(n) {
  return rs(n)
}
Tt.serializeTokensObject = To;

function rs(n) {
  if (typeof n == "object" && (0, qe.isAddressObject)(n)) return n.toString();
  if (Array.isArray(n)) {
    const t = [];
    for (const e of n) t.push(rs(e));
    return t
  } else if (n != null && typeof n == "object") {
    const t = {};
    for (const [e, s] of Object.entries(n)) t[e] = rs(s);
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
    } else return r === "address" ? new qe.Address(t) : t
  }
}
var tn = {};
Object.defineProperty(tn, "__esModule", {
  value: !0
});
tn.Subscriber = void 0;
const Xe = Be,
  Mo = Tt;
class Oo {
  constructor(t) {
    this.provider = t, this.subscriptions = new Map, this.scanners = new Map, this.unsubscribe = async () => this._unsubscribe()
  }
  transactions(t) {
    return this._addSubscription("transactionsFound", t, !1)
  }
  trace(t) {
    const e = (0, Xe.getUniqueId)();
    return new Wt((s, r) => {
      const i = new Do(this.provider, {
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
    const s = (0, Xe.getUniqueId)();
    return new Wt((r, i) => {
      const o = new Ro(this.provider, {
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
              onEnd: b,
              state: A
            } = p;
            A.finished || (A.finished = !0, C.clear(), C.enqueue(async () => b(A.eof)))
          }
          if (h.handlers.size === 0) {
            const C = h.subscription;
            delete _[t], C.then(b => b.unsubscribe()).catch(console.debug)
          }
        }
        _.contractStateChanged == null && _.transactionsFound == null && this.subscriptions.delete(r)
      },
      o = (0, Xe.getUniqueId)();
    return new Wt((u, _) => {
      const h = this.subscriptions.get(r);
      let p = h == null ? void 0 : h[t];
      const C = {
          eof: !1,
          finished: !1
        },
        b = {
          onData: u,
          onEnd: _,
          queue: new ms,
          state: C
        };
      if (p != null) return p.handlers.set(o, b), Promise.resolve();
      const A = new Map;
      A.set(o, b);
      const k = this.provider.subscribe(t, {
        address: e
      }).then(f => (f.on("data", w => {
        for (const {
            onData: j,
            queue: y,
            state: v
          }
          of A.values()) v.eof || v.finished || y.enqueue(async () => {
          await j(w) || (v.eof = !0, i(o))
        })
      }), f.on("unsubscribed", () => {
        for (const w of A.keys()) i(w)
      }), f)).catch(f => {
        console.error(f);
        for (const w of A.keys()) i(w);
        throw f
      });
      return p = {
        subscription: k,
        handlers: A
      }, h == null ? this.subscriptions.set(r, {
        [t]: p
      }) : h[t] = p, k.then(() => {})
    }, () => i(o), Vn, s)
  }
}
tn.Subscriber = Oo;
async function Vn(n, t) {
  return t(n)
}
class Wt {
  constructor(t, e, s, r) {
    this.makeProducer = t, this.stopProducer = e, this.extractor = s, this.isFinite = r, this.fold = this.onlyFinite((i, o, u) => {
      let _ = i;
      return new Promise((h, p) => {
        const C = this.makeProducer(b => this.extractor(b, async A => (_ = await o(_, A), !0)), b => {
          b ? h(_) : p(new Error("Subscription closed"))
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
class Ro {
  constructor(t, e) {
    this.provider = t, this.params = e, this.queue = new ms, this.isRunning = !1
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
        const i = s.filter(u => (t.fromLt == null || Xe.LT_COLLATOR.compare(u.id.lt, t.fromLt) > 0) && (t.fromUtime == null || u.createdAt > t.fromUtime));
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
class Do {
  constructor(t, e) {
    this.provider = t, this.params = e, this.queue = new ms, this.isRunning = !1, this.semaphore = new Xe.Semaphore(10)
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
                  const k = (0, Mo.parseTransaction)(C.transaction);
                  return k.account = k.inMessage.dst, k
                }
                let b;
                const A = new Promise((k, f) => {
                  b = () => k(), o.reject = () => f()
                });
                if (o.timeout = setTimeout(b, h), await A, o.stopped) return;
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
class ms {
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
const Fe = Be,
  Mt = Tt;
class Lo {
  constructor(t, e, s) {
    if (!Array.isArray(e.functions)) throw new Error("Invalid abi. Functions array required");
    if (!Array.isArray(e.events)) throw new Error("Invalid abi. Events array required");
    this._provider = t, this._abi = JSON.stringify(e), this.methodsAbi = e.functions.reduce((r, i) => (i.inputs == null && (i.inputs = []), i.outputs == null && (i.outputs = []), r[i.name] = i, r), {}), this.eventsAbi = e.events.reduce((r, i) => (i.inputs == null && (i.inputs = []), r[i.name] = i, r), {}), this.fieldsAbi = e.fields, this._address = s, this._methods = new Proxy({}, {
      get: (r, i) => {
        const o = this.methodsAbi[i];
        return (u = {}) => new Fo(this._provider, o, this._abi, this._address, i, u)
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
    const u = await ((e == null ? void 0 : e.fromLt) != null || (e == null ? void 0 : e.fromUtime) != null ? i.oldTransactions(this._address, e).merge(i.transactions(this._address)) : i.transactions(this.address)).flatMap(_ => _.transactions).takeWhile(_ => e == null || (e.fromLt == null || Fe.LT_COLLATOR.compare(_.id.lt, e.fromLt) > 0) && (e.fromUtime == null || _.createdAt > e.fromUtime) && (e.toLt == null || Fe.LT_COLLATOR.compare(_.id.lt, e.toLt) < 0) && (e.toUtime == null || _.createdAt < e.toUtime)).flatMap(_ => this.decodeTransactionEvents({
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
      const p = _.filter(C => ((e == null ? void 0 : e.fromLt) == null || Fe.LT_COLLATOR.compare(C.id.lt, e.fromLt) > 0) && ((e == null ? void 0 : e.fromUtime) == null || C.createdAt > e.fromUtime) && ((e == null ? void 0 : e.toLt) == null || Fe.LT_COLLATOR.compare(C.id.lt, e.toLt) < 0) && ((e == null ? void 0 : e.toUtime) == null || C.createdAt < e.toUtime));
      if (p.length > 0) {
        const C = await Promise.all(p.map(async b => ({
          tx: b,
          events: await this.decodeTransactionEvents({
            transaction: b
          }).then(A => (A.forEach(k => k.transaction = b), A))
        })));
        for (let {
            tx: b,
            events: A
          }
          of C) {
          i != null && (A = await Promise.all(A.map(async k => await i(k) ? k : void 0)).then(k => k.filter(f => f != null))), u = b.id;
          for (const k of A) {
            if (r != null && o.length >= r) break t;
            o.push(k)
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
Pe.Contract = Lo;
class yr extends Error {
  constructor(t) {
    super(`TvmException: ${t}`), this.code = t
  }
}
Pe.TvmException = yr;
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
    const e = new Fe.DelayedTransactions,
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
      const o = new Promise(A => {
          i = k => A(k)
        }),
        u = [];
      e.transactions(this.address).flatMap(A => A.transactions).filter(A => {
        var k;
        return ((k = A.inMessage.src) === null || k === void 0 ? void 0 : k.equals(t.from)) || !1
      }).on(A => {
        r == null ? u.push(A) : r.possibleMessages.findIndex(k => k.hash == A.inMessage.hash) >= 0 && (i == null || i(A))
      });
      const _ = await this.send(t),
        h = _.outMessages.filter(A => {
          var k;
          return ((k = A.dst) === null || k === void 0 ? void 0 : k.equals(this.address)) || !1
        });
      r = {
        transaction: _,
        possibleMessages: h
      };
      const p = u.find(A => h.findIndex(k => k.hash == A.inMessage.hash) >= 0);
      p != null && (i == null || i(p));
      const C = await o;
      let b;
      try {
        const A = await this.provider.rawApi.decodeTransaction({
          transaction: (0, Mt.serializeTransaction)(C),
          abi: this.abi,
          method: this.method
        });
        A != null && (b = this.functionAbi.outputs != null ? (0, Mt.parseTokensObject)(this.functionAbi.outputs, A.output) : {})
      } catch (A) {
        console.error(A)
      }
      return {
        parentTransaction: r.transaction,
        childTransaction: C,
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
    const e = new Fe.DelayedTransactions,
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
    if (e == null || s != 0) throw new yr(s);
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
var vr = {};
Object.defineProperty(vr, "__esModule", {
  value: !0
});
(function(n) {
  var t = tt && tt.__createBinding || (Object.create ? function(v, m, F, K) {
      K === void 0 && (K = F);
      var B = Object.getOwnPropertyDescriptor(m, F);
      (!B || ("get" in B ? !m.__esModule : B.writable || B.configurable)) && (B = {
        enumerable: !0,
        get: function() {
          return m[F]
        }
      }), Object.defineProperty(v, K, B)
    } : function(v, m, F, K) {
      K === void 0 && (K = F), v[K] = m[F]
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
    o = Be,
    u = s(tn),
    _ = s(Pe);
  r(vr, n), r(Tt, n), r(Pe, n);
  var h = tn;
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
  let b;
  !C || document.readyState === "complete" ? b = Promise.resolve() : b = new Promise(v => {
    window.addEventListener("load", () => {
      v()
    })
  });
  const A = () => C ? window.__ever || window.ton : void 0;
  async function k() {
    return C ? (await b, window.__hasEverscaleProvider === !0 || window.hasTonProvider === !0) : !1
  }
  n.hasEverscaleProvider = k;
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
      const F = this;
      class K extends _.Contract {
        constructor(d, g) {
          super(F, d, g)
        }
      }
      this.Contract = K;
      class B extends u.Subscriber {
        constructor() {
          super(F)
        }
      }
      this.Subscriber = B, this._api = new Proxy({}, {
        get: (l, d) => g => {
          if (this._provider != null) return this._provider.request({
            method: d,
            params: g
          });
          throw new j
        }
      }), m.forceUseFallback === !0 ? this._initializationPromise = m.fallback != null ? m.fallback().then(l => {
        this._provider = l
      }) : Promise.resolve() : (this._provider = A(), this._provider != null ? this._initializationPromise = Promise.resolve() : this._initializationPromise = k().then(l => new Promise(d => {
        if (!l) return d();
        if (this._provider = A(), this._provider != null) d();
        else {
          const g = window.__hasEverscaleProvider === !0 ? "ever#initialized" : "ton#initialized";
          window.addEventListener(g, P => {
            this._provider = A(), d()
          })
        }
      })).then(async () => {
        this._provider == null && m.fallback != null && (this._provider = await m.fallback())
      })), this._initializationPromise.then(() => {
        this._provider != null && this._registerEventHandlers(this._provider)
      })
    }
    async hasProvider() {
      return this._properties.fallback != null ? !0 : k()
    }
    async ensureInitialized() {
      if (await this._initializationPromise, this._provider == null) throw new w
    }
    get isInitialized() {
      return this._provider != null
    }
    get raw() {
      if (this._provider != null) return this._provider;
      throw new j
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
      class K {
        constructor(g, P) {
          this._subscribe = g, this._unsubscribe = P, this._listeners = {
            data: [],
            subscribed: [],
            unsubscribed: []
          }, this._subscribed = !1, this.subscribe = async () => {
            if (!this._subscribed) {
              this._subscribed = !0, await this._subscribe(this);
              for (const T of this._listeners.subscribed) T()
            }
          }, this.unsubscribe = async () => {
            if (this._subscribed) {
              this._subscribed = !1, await this._unsubscribe();
              for (const T of this._listeners.unsubscribed) T()
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
        l = (0, o.getUniqueId)();
      switch (m) {
        case "connected":
        case "disconnected":
        case "messageStatusUpdated":
        case "networkChanged":
        case "permissionsChanged":
        case "loggedOut": {
          const d = new K(async g => {
            B.has(l) || B.set(l, P => {
              g.notify(P)
            })
          }, async () => {
            B.delete(l)
          });
          return await d.subscribe(), d
        }
        case "transactionsFound":
        case "contractStateChanged": {
          if (F == null) throw new Error("Address must be specified for the subscription");
          await this.ensureInitialized();
          const d = F.address.toString(),
            g = new K(async P => {
              if (B.has(l)) return;
              B.set(l, M => {
                M.address.toString() === d && P.notify(M)
              });
              let T = this._contractSubscriptions.get(d);
              T == null && (T = new Map, this._contractSubscriptions.set(d, T));
              const O = {
                state: m === "contractStateChanged",
                transactions: m === "transactionsFound"
              };
              T.set(l, O);
              const {
                total: N,
                withoutExcluded: I
              } = y(T.values(), O);
              try {
                (N.transactions !== I.transactions || N.state !== I.state) && await this.rawApi.subscribe({
                  address: d,
                  subscriptions: N
                })
              } catch (M) {
                throw B.delete(l), T.delete(l), M
              }
            }, async () => {
              B.delete(l);
              const P = this._contractSubscriptions.get(d);
              if (P == null) return;
              const T = P.get(l),
                {
                  total: O,
                  withoutExcluded: N
                } = y(P.values(), T);
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
        continuation: K
      } = await this._api.getAccountsByCodeHash({
        ...m
      });
      return {
        accounts: F.map(B => new o.Address(B)),
        continuation: K
      }
    }
    async getTransactions(m) {
      await this.ensureInitialized();
      const {
        transactions: F,
        continuation: K,
        info: B
      } = await this._api.getTransactions({
        ...m,
        address: m.address.toString()
      });
      return {
        transactions: F.map(i.parseTransaction),
        continuation: K,
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
        address: K
      } = await this.getStateInit(m, F);
      return K
    }
    async getStateInit(m, F) {
      await this.ensureInitialized();
      const {
        address: K,
        stateInit: B,
        hash: l
      } = await this._api.getExpectedAddress({
        abi: JSON.stringify(m),
        ...F,
        initParams: (0, i.serializeTokensObject)(F.initParams)
      });
      return {
        address: new o.Address(K),
        stateInit: B,
        hash: l
      }
    }
    async unpackInitData(m, F) {
      await this.ensureInitialized();
      const {
        publicKey: K,
        initParams: B
      } = await this._api.unpackInitData({
        abi: JSON.stringify(m),
        data: F
      });
      return {
        publicKey: K,
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
          boc: K
        } = await this.packIntoCell(m.salt);
        F = K
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
        K = await this.subscribe("messageStatusUpdated");
      K.on("data", d => {
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
        throw K.unsubscribe().catch(console.error), d
      }), l = F.waitTransaction(m.sender, B.hash).finally(() => K.unsubscribe().catch(console.error));
      return {
        messageHash: B.hash,
        expireAt: B.expireAt,
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
      const F = {
        connected: K => K,
        disconnected: K => K,
        transactionsFound: K => ({
          address: new o.Address(K.address),
          transactions: K.transactions.map(i.parseTransaction),
          info: K.info
        }),
        contractStateChanged: K => ({
          address: new o.Address(K.address),
          state: K.state
        }),
        messageStatusUpdated: K => ({
          address: new o.Address(K.address),
          hash: K.hash,
          transaction: K.transaction != null ? (0, i.parseTransaction)(K.transaction) : void 0
        }),
        networkChanged: K => K,
        permissionsChanged: K => ({
          permissions: (0, i.parsePermissions)(K.permissions)
        }),
        loggedOut: K => K
      };
      for (const [K, B] of Object.entries(F)) m.addListener(K, l => {
        const d = this._subscriptions[K],
          g = B(l);
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
  class j extends Error {
    constructor() {
      super("Everscale provider was not initialized yet")
    }
  }
  n.ProviderNotInitializedException = j;

  function y(v, m) {
    const F = {
        state: !1,
        transactions: !1
      },
      K = Object.assign({}, F);
    for (const B of v) {
      if (K.transactions && K.state) break;
      F.state || (F.state = B.state), F.transactions || (F.transactions = B.transactions), B !== m && (K.state || (K.state = B.state), K.transactions || (K.transactions = B.transactions))
    }
    return {
      total: F,
      withoutExcluded: K
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
var Ar = Sn.AirdropStatus = void 0,
  Ds;
(function(n) {
  n.NoClaimId = "NoClaimId", n.NoUser = "NoUser", n.HasClaimed = "HasClaimed", n.CanClaim = "CanClaim", n.InQueue = "InQueue", n.NoReward = "NoReward", n.NoAirdrop = "NoAirdrop", n.Loading = "Loading"
})(Ds || (Ar = Sn.AirdropStatus = Ds = {}));
var is = {};
(function(n) {
  var t = tt && tt.__awaiter || function(p, C, b, A) {
      function k(f) {
        return f instanceof b ? f : new b(function(w) {
          w(f)
        })
      }
      return new(b || (b = Promise))(function(f, w) {
        function j(m) {
          try {
            v(A.next(m))
          } catch (F) {
            w(F)
          }
        }

        function y(m) {
          try {
            v(A.throw(m))
          } catch (F) {
            w(F)
          }
        }

        function v(m) {
          m.done ? f(m.value) : k(m.value).then(j, y)
        }
        v((A = A.apply(p, C || [])).next())
      })
    },
    e = tt && tt.__generator || function(p, C) {
      var b = {
          label: 0,
          sent: function() {
            if (f[0] & 1) throw f[1];
            return f[1]
          },
          trys: [],
          ops: []
        },
        A, k, f, w = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
      return w.next = j(0), w.throw = j(1), w.return = j(2), typeof Symbol == "function" && (w[Symbol.iterator] = function() {
        return this
      }), w;

      function j(v) {
        return function(m) {
          return y([v, m])
        }
      }

      function y(v) {
        if (A) throw new TypeError("Generator is already executing.");
        for (; w && (w = 0, v[0] && (b = 0)), b;) try {
          if (A = 1, k && (f = v[0] & 2 ? k.return : v[0] ? k.throw || ((f = k.return) && f.call(k), 0) : k.next) && !(f = f.call(k, v[1])).done) return f;
          switch (k = 0, f && (v = [v[0] & 2, f.value]), v[0]) {
            case 0:
            case 1:
              f = v;
              break;
            case 4:
              return b.label++, {
                value: v[1],
                done: !1
              };
            case 5:
              b.label++, k = v[1], v = [0];
              continue;
            case 7:
              v = b.ops.pop(), b.trys.pop();
              continue;
            default:
              if (f = b.trys, !(f = f.length > 0 && f[f.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                b = 0;
                continue
              }
              if (v[0] === 3 && (!f || v[1] > f[0] && v[1] < f[3])) {
                b.label = v[1];
                break
              }
              if (v[0] === 6 && b.label < f[1]) {
                b.label = f[1], f = v;
                break
              }
              if (f && b.label < f[2]) {
                b.label = f[2], b.ops.push(v);
                break
              }
              f[2] && b.ops.pop(), b.trys.pop();
              continue
          }
          v = C.call(p, b)
        } catch (m) {
          v = [6, m], k = 0
        } finally {
          A = f = 0
        }
        if (v[0] & 5) throw v[1];
        return {
          value: v[0] ? v[1] : void 0,
          done: !0
        }
      }
    },
    s = tt && tt.__spreadArray || function(p, C, b) {
      if (b || arguments.length === 2)
        for (var A = 0, k = C.length, f; A < k; A++)(f || !(A in C)) && (f || (f = Array.prototype.slice.call(C, 0, A)), f[A] = C[A]);
      return p.concat(f || Array.prototype.slice.call(C))
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.buildTransaction = n.getCodeAirdropAndAmount = n.checkQueue = void 0;
  var r = wn,
    i = ve,
    o = he,
    u = function(p, C, b) {
      return t(void 0, void 0, void 0, function() {
        var A, k;
        return e(this, function(f) {
          switch (f.label) {
            case 0:
              return [4, fetch("".concat(p, "/v2/").concat(C, "/").concat(b, "/claim_data"))];
            case 1:
              return A = f.sent(), [4, A.json()];
            case 2:
              return k = f.sent(), [2, k]
          }
        })
      })
    };
  n.checkQueue = u;
  var _ = function(p, C) {
    for (var b = [], A = 2; A < arguments.length; A++) b[A - 2] = arguments[A];
    return t(void 0, s([p, C], b, !0), void 0, function(k, f, w) {
      var j, v, m, F, y, v, m, F;
      return w === void 0 && (w = "10000000"), e(this, function(K) {
        switch (K.label) {
          case 0:
            j = r.Address.parseFriendly(k).address.toRawString(), K.label = 1;
          case 1:
            return K.trys.push([1, 4, , 7]), v = new f.Contract(o.AirdropFactoryAbiV1, new i.Address(j)), [4, v.fields._codeAirdrop()];
          case 2:
            return m = K.sent(), [4, v.fields._claimMinGas()];
          case 3:
            return F = K.sent(), [2, {
              codeAirdrop: m,
              amount: (parseInt(w, 10) + parseInt(F, 10)).toString()
            }];
          case 4:
            return y = K.sent(), console.warn(y), v = new f.Contract(o.AirdropFactoryAbiV2, new i.Address(j)), [4, v.methods.getAirdropCode().call()];
          case 5:
            return m = K.sent().value0, [4, v.methods.getClaimMinGas().call()];
          case 6:
            return F = K.sent().value0, [2, {
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
  var h = function(p, C, b) {
    for (var A = [], k = 3; k < arguments.length; k++) A[k - 3] = arguments[k];
    return t(void 0, s([p, C, b], A, !0), void 0, function(f, w, j, y) {
      var v, m, F, K, B, l, d, g;
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
                _signature: f.signature
              }
            })];
          case 1:
            return v = P.sent(), [4, (0, n.getCodeAirdropAndAmount)(f.factory, w, y)];
          case 2:
            return m = P.sent(), F = m.amount, K = m.codeAirdrop, [4, w.mergeTvc({
              code: K,
              data: "te6ccgEBAgEAKAABAcABAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg"
            })];
          case 3:
            return B = P.sent(), [4, w.getStateInit(o.AirdropAbi, {
              workchain: 0,
              initParams: {
                _data: f.data,
                _nonce: f.nonce
              },
              tvc: B.tvc
            })];
          case 4:
            return l = P.sent(), d = l.stateInit, g = l.address, [2, {
              messages: [{
                amount: F,
                address: r.Address.parse(g.toString()).toString({
                  bounceable: !0
                }),
                payload: v.boc,
                stateInit: d
              }],
              validUntil: Math.ceil((j.time + 6e5) / 1e3)
            }]
        }
      })
    })
  };
  n.buildTransaction = h
})(is);
(function(n) {
  var t = tt && tt.__assign || function() {
      return t = Object.assign || function(k) {
        for (var f, w = 1, j = arguments.length; w < j; w++) {
          f = arguments[w];
          for (var y in f) Object.prototype.hasOwnProperty.call(f, y) && (k[y] = f[y])
        }
        return k
      }, t.apply(this, arguments)
    },
    e = tt && tt.__createBinding || (Object.create ? function(k, f, w, j) {
      j === void 0 && (j = w);
      var y = Object.getOwnPropertyDescriptor(f, w);
      (!y || ("get" in y ? !f.__esModule : y.writable || y.configurable)) && (y = {
        enumerable: !0,
        get: function() {
          return f[w]
        }
      }), Object.defineProperty(k, j, y)
    } : function(k, f, w, j) {
      j === void 0 && (j = w), k[j] = f[w]
    }),
    s = tt && tt.__exportStar || function(k, f) {
      for (var w in k) w !== "default" && !Object.prototype.hasOwnProperty.call(f, w) && e(f, k, w)
    },
    r = tt && tt.__awaiter || function(k, f, w, j) {
      function y(v) {
        return v instanceof w ? v : new w(function(m) {
          m(v)
        })
      }
      return new(w || (w = Promise))(function(v, m) {
        function F(l) {
          try {
            B(j.next(l))
          } catch (d) {
            m(d)
          }
        }

        function K(l) {
          try {
            B(j.throw(l))
          } catch (d) {
            m(d)
          }
        }

        function B(l) {
          l.done ? v(l.value) : y(l.value).then(F, K)
        }
        B((j = j.apply(k, f || [])).next())
      })
    },
    i = tt && tt.__generator || function(k, f) {
      var w = {
          label: 0,
          sent: function() {
            if (v[0] & 1) throw v[1];
            return v[1]
          },
          trys: [],
          ops: []
        },
        j, y, v, m = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
      return m.next = F(0), m.throw = F(1), m.return = F(2), typeof Symbol == "function" && (m[Symbol.iterator] = function() {
        return this
      }), m;

      function F(B) {
        return function(l) {
          return K([B, l])
        }
      }

      function K(B) {
        if (j) throw new TypeError("Generator is already executing.");
        for (; m && (m = 0, B[0] && (w = 0)), w;) try {
          if (j = 1, y && (v = B[0] & 2 ? y.return : B[0] ? y.throw || ((v = y.return) && v.call(y), 0) : y.next) && !(v = v.call(y, B[1])).done) return v;
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
          B = f.call(k, w)
        } catch (l) {
          B = [6, l], y = 0
        } finally {
          j = v = 0
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
  var o = wn,
    u = ve,
    _ = he,
    h = Sn,
    p = is;
  s(is, n);
  var C = function() {
      function k(f) {
        this.subscribers = [], this.value = f
      }
      return k.prototype.set = function(f, w) {
        var j, y = this,
          v = t({}, this.value),
          m = t(t({}, v), (j = {}, j[f] = w, j));
        this.value = m, this.subscribers.filter(function(F) {
          F[0];
          var K = F[1];
          return K.length === 0 || K.includes(f)
        }).forEach(function(F) {
          var K = F[0],
            B = F[1];
          if (B.length === 0) K(y.value);
          else
            for (var l = 0; l < B.length; l++) v[B[l]] !== m[B[l]] && K(y.value)
        })
      }, k.prototype.getState = function() {
        return t({}, this.value)
      }, k.prototype.subscribe = function(f) {
        for (var w = this, j = [], y = 1; y < arguments.length; y++) j[y - 1] = arguments[y];
        var v = this.subscribers.push([f, j]);
        return f(this.value),
          function() {
            w.subscribers.splice(v - 1, 1)
          }
      }, k.prototype.unsubscribeAll = function() {
        this.subscribers = []
      }, k
    }(),
    b = {
      claimApiBaseUrl: "https://claim-api-test.d3mo.org",
      deployValue: "10000000"
    },
    A = function() {
      function k(f, w, j, y) {
        y === void 0 && (y = {});
        var v = this,
          m;
        this.tonConnect = f, this.rpc = w, this.clock = j, this.subscribers = [], this.state = new C({
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
        }), this.getState = this.state.getState.bind(this.state), this.subscribe = this.state.subscribe.bind(this.state), this.options = t(t({}, b), y), this.syncStorageData = this.syncStorageData.bind(this), window.addEventListener("storage", this.syncStorageData), this.state.subscribe(this.initSyncClaimData.bind(this), "airdropName", "userAddress"), this.state.subscribe(this.syncStorageKey.bind(this), "airdropName", "userAddress", "claimId"), this.state.subscribe(this.syncFactoryAddress.bind(this), "claimData", "storageData", "claimId"), this.state.subscribe(this.syncAirdropAddress.bind(this), "claimData", "storageData", "claimId"), this.state.subscribe(this.initClaimListener.bind(this), "userAddress", "factoryAddress"), this.state.subscribe(this.syncRemoveStorageTimer.bind(this), "storageKey", "storageData"), this.state.subscribe(this.syncStorageData.bind(this), "storageKey", "claimed"), this.state.subscribe(this.syncClaimed.bind(this), "airdropAddress"), this.state.subscribe(this.syncClaimLoading.bind(this), "storageData"), this.state.subscribe(this.syncStatus.bind(this), "userAddress", "claimed", "claimData", "storageKey", "airdropName", "claimId"), this.state.set("userAddress", (m = this.tonConnect.account) === null || m === void 0 ? void 0 : m.address), this.tonConnectUnsubscribe = this.tonConnect.onStatusChange(function(F) {
          v.state.set("userAddress", F == null ? void 0 : F.account.address)
        })
      }
      return k.prototype.destory = function() {
        var f, w;
        this.state.unsubscribeAll(), clearTimeout(this.removeStorageTimeout), clearTimeout(this.claimDataTimeout), window.removeEventListener("storage", this.syncStorageData), (f = this.tonConnectUnsubscribe) === null || f === void 0 || f.call(this), (w = this.rpcSubscriber) === null || w === void 0 || w.unsubscribe()
      }, k.prototype.setAirdropName = function(f) {
        this.state.set("airdropName", f)
      }, k.prototype.setClaimId = function(f) {
        this.state.set("claimId", f)
      }, k.prototype.claim = function() {
        return r(this, void 0, void 0, function() {
          var f, w, j, y, v, m, F, K, B, l, d, g, P, T, O, N;
          return i(this, function(I) {
            switch (I.label) {
              case 0:
                if (f = this.getState(), w = f.claimData, j = f.storageKey, y = f.claimId, !y) throw new Error("claimId must defined");
                if ((w == null ? void 0 : w.status) !== "signed") throw new Error("claimData.status must be signed");
                if (v = w.rewards.find(function(M) {
                    return M.claimId === y
                  }), !v) throw new Error("rewardData must defined");
                if (!j) throw new Error("storageKey must be defined");
                this.state.set("loading", !0), I.label = 1;
              case 1:
                return I.trys.push([1, 7, , 8]), [4, this.rpc.packIntoCell({
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
                return m = I.sent(), [4, (0, p.getCodeAirdropAndAmount)(v.factory, this.rpc, this.options.deployValue)];
              case 3:
                return F = I.sent(), K = F.codeAirdrop, B = F.amount, [4, this.rpc.mergeTvc({
                  code: K ?? "",
                  data: "te6ccgEBAgEAKAABAcABAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg"
                })];
              case 4:
                return l = I.sent(), [4, this.rpc.getStateInit(_.AirdropAbi, {
                  workchain: 0,
                  initParams: {
                    _data: v.data,
                    _nonce: v.nonce
                  },
                  tvc: l.tvc
                })];
              case 5:
                return d = I.sent(), g = d.stateInit, P = d.address, T = this.clock.time, [4, this.tonConnect.sendTransaction({
                  messages: [{
                    amount: B,
                    address: o.Address.parse(P.toString()).toString({
                      bounceable: !0
                    }),
                    payload: m.boc,
                    stateInit: g
                  }],
                  validUntil: Math.ceil((T + 6e5) / 1e3)
                })];
              case 6:
                return I.sent(), O = {
                  airdrop: v.airdrop,
                  factory: v.factory,
                  until: T + 12e4
                }, localStorage.setItem(j, JSON.stringify(O)), this.state.set("storageData", O), [3, 8];
              case 7:
                return N = I.sent(), console.error(N), [3, 8];
              case 8:
                return this.state.set("loading", !1), [2]
            }
          })
        })
      }, k.prototype.syncFactoryAddress = function() {
        var f, w = this.state.getState(),
          j = w.claimData,
          y = w.storageData,
          v = w.claimId,
          m = void 0;
        (j == null ? void 0 : j.status) === "signed" && v ? m = (f = j.rewards.find(function(F) {
          return F.claimId === v
        })) === null || f === void 0 ? void 0 : f.factory : m = y == null ? void 0 : y.factory, this.state.set("factoryAddress", m)
      }, k.prototype.syncAirdropAddress = function() {
        var f, w = this.state.getState(),
          j = w.claimData,
          y = w.storageData,
          v = w.claimId,
          m = void 0;
        (j == null ? void 0 : j.status) === "signed" && v ? m = (f = j.rewards.find(function(F) {
          return F.claimId === v
        })) === null || f === void 0 ? void 0 : f.airdrop : m = y == null ? void 0 : y.airdrop, this.state.set("airdropAddress", m)
      }, k.prototype.syncStorageKey = function() {
        var f = this.state.getState(),
          w = f.airdropName,
          j = f.userAddress,
          y = f.claimId,
          v = w && j && y ? k.getStorageKey(w, j, y) : null;
        this.state.set("storageKey", v)
      }, k.prototype.syncStorageData = function() {
        var f = this.state.getState(),
          w = f.storageKey,
          j = f.claimed;
        if (j) this.state.set("storageData", null);
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
      }, k.prototype.syncRemoveStorageTimer = function() {
        var f = this,
          w = this.clock.time,
          j = this.state.getState(),
          y = j.storageKey,
          v = j.storageData;
        clearTimeout(this.removeStorageTimeout), y && v && w < v.until && (this.removeStorageTimeout = setTimeout(function() {
          localStorage.removeItem(y), f.state.set("storageData", null)
        }, v.until - w))
      }, k.prototype.syncClaimed = function() {
        return r(this, void 0, void 0, function() {
          var f, w, j, y;
          return i(this, function(v) {
            switch (v.label) {
              case 0:
                if (f = this.state.getState().airdropAddress, this.state.set("claimed", null), !f) return [2];
                this.state.set("loading", !0), v.label = 1;
              case 1:
                return v.trys.push([1, 3, , 4]), w = o.Address.parseFriendly(f).address.toRawString(), [4, this.rpc.getFullContractState({
                  address: new u.Address(w)
                })];
              case 2:
                return j = v.sent(), this.state.set("claimed", !!j.state), [3, 4];
              case 3:
                return y = v.sent(), console.error(y), [3, 4];
              case 4:
                return this.state.set("loading", !1), [2]
            }
          })
        })
      }, k.prototype.syncClaimLoading = function() {
        var f = this.state.getState().storageData;
        this.state.set("claimLoading", !!f)
      }, k.prototype.syncStatus = function() {
        var f, w, j, y = h.AirdropStatus.Loading,
          v = this.getState();
        v.userAddress ? v.claimed === !0 ? y = h.AirdropStatus.HasClaimed : v.claimed === !1 && ((f = v.claimData) === null || f === void 0 ? void 0 : f.status) === "signed" && v.storageKey ? y = h.AirdropStatus.CanClaim : ((w = v.claimData) === null || w === void 0 ? void 0 : w.status) === "inQueue" ? y = h.AirdropStatus.InQueue : ((j = v.claimData) === null || j === void 0 ? void 0 : j.status) === "noReward" ? y = h.AirdropStatus.NoReward : v.airdropName ? v.claimId || (y = h.AirdropStatus.NoClaimId) : y = h.AirdropStatus.NoAirdrop : y = h.AirdropStatus.NoUser, this.state.set("status", y)
      }, k.prototype.initSyncClaimData = function() {
        var f = this;
        clearInterval(this.claimDataTimeout), this.state.set("claimData", null);
        var w = this.state.getState(),
          j = w.airdropName,
          y = w.userAddress;
        if (!(!j || !y)) {
          var v = function() {
            return r(f, void 0, void 0, function() {
              var m, F, K, B;
              return i(this, function(l) {
                switch (l.label) {
                  case 0:
                    this.state.set("loading", !0), l.label = 1;
                  case 1:
                    return l.trys.push([1, 4, , 5]), m = this.options.claimApiBaseUrl, [4, fetch("".concat(m, "/v2/").concat(j, "/").concat(y, "/claim_data"))];
                  case 2:
                    return F = l.sent(), [4, F.json()];
                  case 3:
                    return K = l.sent(), this.state.set("claimData", K), [3, 5];
                  case 4:
                    return B = l.sent(), console.error(B), [3, 5];
                  case 5:
                    return this.state.set("loading", !1), [2]
                }
              })
            })
          };
          this.claimDataTimeout = setInterval(v, 2e4), v()
        }
      }, k.prototype.initClaimListener = function() {
        return r(this, void 0, void 0, function() {
          var f, w, j, y, v, m = this,
            F;
          return i(this, function(K) {
            switch (K.label) {
              case 0:
                return (F = this.rpcSubscriber) === null || F === void 0 || F.unsubscribe(), f = this.state.getState(), w = f.factoryAddress, j = f.userAddress, !w || !j ? [2] : (y = o.Address.parseFriendly(w).address.toRawString(), v = new this.rpc.Contract(_.AirdropFactoryAbiV2, new u.Address(y)), this.rpcSubscriber = new this.rpc.Subscriber, [4, this.rpcSubscriber.transactions(v.address).flatMap(function(B) {
                  return B.transactions
                }).flatMap(function(B) {
                  return v.decodeTransactionEvents({
                    transaction: B
                  })
                }).filterMap(function(B) {
                  if (B.event === "AirdropClaimed" && B.data.recipient.toString() === j) return m.state.set("claimed", !0), !0
                }).first()]);
              case 1:
                return K.sent(), [2]
            }
          })
        })
      }, k.getStorageKey = function(f, w, j) {
        return "airdrop-v2-".concat(f, "-").concat(w, "-").concat(j)
      }, k
    }();
  n.AirdropUI = A
})(mr);
var as = {};
let c;
const kr = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && kr.decode();
let Ve = null;

function $e() {
  return (Ve === null || Ve.byteLength === 0) && (Ve = new Uint8Array(c.memory.buffer)), Ve
}

function bt(n, t) {
  return n = n >>> 0, kr.decode($e().subarray(n, n + t))
}
const _e = new Array(128).fill(void 0);
_e.push(void 0, null, !0, !1);
let Ye = _e.length;

function J(n) {
  Ye === _e.length && _e.push(_e.length + 1);
  const t = Ye;
  return Ye = _e[t], _e[t] = n, t
}

function X(n) {
  return _e[n]
}

function wt(n) {
  return n == null
}
let Se = null;

function D() {
  return (Se === null || Se.buffer.detached === !0 || Se.buffer.detached === void 0 && Se.buffer !== c.memory.buffer) && (Se = new DataView(c.memory.buffer)), Se
}
let H = 0;
const gn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  No = typeof gn.encodeInto == "function" ? function(n, t) {
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
    return $e().subarray(_, _ + u.length).set(u), H = u.length, _
  }
  let s = n.length,
    r = t(s, 1) >>> 0;
  const i = $e();
  let o = 0;
  for (; o < s; o++) {
    const u = n.charCodeAt(o);
    if (u > 127) break;
    i[r + o] = u
  }
  if (o !== s) {
    o !== 0 && (n = n.slice(o)), r = e(r, s, s = o + n.length * 3, 1) >>> 0;
    const u = $e().subarray(r + o, r + s),
      _ = No(n, u);
    o += _.written, r = e(r, s, o, 1) >>> 0
  }
  return H = o, r
}

function $o(n) {
  n < 132 || (_e[n] = Ye, Ye = n)
}

function W(n) {
  const t = X(n);
  return $o(n), t
}

function os(n) {
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
    r > 0 && (i += os(n[0]));
    for (let o = 1; o < r; o++) i += ", " + os(n[o]);
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
const Ls = typeof FinalizationRegistry > "u" ? {
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
      const u = r.a;
      r.a = 0;
      try {
        return s(u, r.b, ...o)
      } finally {
        --r.cnt === 0 ? (c.__wbindgen_export_2.get(r.dtor)(u, r.b), Ls.unregister(r)) : r.a = u
      }
    };
  return i.original = r, Ls.register(i, r, r), i
}

function Ko(n, t, e) {
  c._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0fff6d0ad1f7528f(n, t, J(e))
}

function Bo(n, t) {
  return n = n >>> 0, $e().subarray(n / 1, n / 1 + t)
}

function xo(n, t) {
  const e = t(n.length * 1, 1) >>> 0;
  return $e().set(n, e / 1), H = n.length, e
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
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.repackAddress(h, p, C);
    var s = D().getInt32(h + 4 * 0, !0),
      r = D().getInt32(h + 4 * 1, !0),
      i = D().getInt32(h + 4 * 2, !0),
      o = D().getInt32(h + 4 * 3, !0),
      u = s,
      _ = r;
    if (o) throw u = 0, _ = 0, W(i);
    return t = u, e = _, bt(u, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function Wo(n, t, e, s, r, i, o) {
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16);
    se(n, pe);
    const C = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      b = H,
      A = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      k = H,
      f = V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = H;
    c.runLocal(p, n.__wbg_ptr, C, b, A, k, f, w, J(r), i, !wt(o), wt(o) ? 0 : o);
    var u = D().getInt32(p + 4 * 0, !0),
      _ = D().getInt32(p + 4 * 1, !0),
      h = D().getInt32(p + 4 * 2, !0);
    if (h) throw W(_);
    return W(u)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Go(n) {
  let t, e;
  try {
    const C = c.__wbindgen_add_to_stack_pointer(-16);
    var s = wt(n) ? 0 : V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      r = H;
    c.makeFullAccountBoc(C, s, r);
    var i = D().getInt32(C + 4 * 0, !0),
      o = D().getInt32(C + 4 * 1, !0),
      u = D().getInt32(C + 4 * 2, !0),
      _ = D().getInt32(C + 4 * 3, !0),
      h = i,
      p = o;
    if (_) throw h = 0, p = 0, W(u);
    return t = h, e = p, bt(h, p)
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
    var t = D().getInt32(r + 4 * 0, !0),
      e = D().getInt32(r + 4 * 1, !0),
      s = D().getInt32(r + 4 * 2, !0);
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
      u = H;
    c.parseFullAccountStateInit(i, o, u);
    var t = D().getInt32(i + 4 * 0, !0),
      e = D().getInt32(i + 4 * 1, !0),
      s = D().getInt32(i + 4 * 2, !0),
      r = D().getInt32(i + 4 * 3, !0);
    if (r) throw W(s);
    let _;
    return t !== 0 && (_ = bt(t, e).slice(), c.__wbindgen_free(t, e * 1, 1)), _
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Qo(n, t, e, s) {
  try {
    const u = c.__wbindgen_add_to_stack_pointer(-16),
      _ = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H,
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.computeStorageFee(u, _, h, p, C, e, s);
    var r = D().getInt32(u + 4 * 0, !0),
      i = D().getInt32(u + 4 * 1, !0),
      o = D().getInt32(u + 4 * 2, !0);
    if (o) throw W(i);
    return W(r)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Jo(n, t, e, s, r, i, o) {
  try {
    const b = c.__wbindgen_add_to_stack_pointer(-16),
      A = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      k = H,
      f = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = H,
      j = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      y = H;
    var u = wt(i) ? 0 : V(i, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H;
    c.executeLocal(b, A, k, f, w, j, y, s, r, u, _, !wt(o), wt(o) ? 0 : o);
    var h = D().getInt32(b + 4 * 0, !0),
      p = D().getInt32(b + 4 * 1, !0),
      C = D().getInt32(b + 4 * 2, !0);
    if (C) throw W(p);
    return W(h)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Xo(n, t, e, s, r) {
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16),
      C = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      b = H,
      A = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      k = H;
    var i = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.getExpectedAddress(p, C, b, A, k, e, i, o, J(r));
    var u = D().getInt32(p + 4 * 0, !0),
      _ = D().getInt32(p + 4 * 1, !0),
      h = D().getInt32(p + 4 * 2, !0);
    if (h) throw W(_);
    return W(u)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Yo(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      u = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H,
      h = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    c.unpackContractFields(o, u, _, h, p, e);
    var s = D().getInt32(o + 4 * 0, !0),
      r = D().getInt32(o + 4 * 1, !0),
      i = D().getInt32(o + 4 * 2, !0);
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
      u = H,
      _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    c.unpackInitData(i, o, u, _, h);
    var e = D().getInt32(i + 4 * 0, !0),
      s = D().getInt32(i + 4 * 1, !0),
      r = D().getInt32(i + 4 * 2, !0);
    if (r) throw W(s);
    return W(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function qo(n) {
  let t, e;
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.getBocHash(h, p, C);
    var s = D().getInt32(h + 4 * 0, !0),
      r = D().getInt32(h + 4 * 1, !0),
      i = D().getInt32(h + 4 * 2, !0),
      o = D().getInt32(h + 4 * 3, !0),
      u = s,
      _ = r;
    if (o) throw u = 0, _ = 0, W(i);
    return t = u, e = _, bt(u, _)
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
    var i = D().getInt32(_ + 4 * 0, !0),
      o = D().getInt32(_ + 4 * 1, !0),
      u = D().getInt32(_ + 4 * 2, !0);
    if (u) throw W(o);
    return W(i)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function ec(n, t, e, s) {
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    var r = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = H;
    c.unpackFromCell(h, J(n), p, C, e, r, i);
    var o = D().getInt32(h + 4 * 0, !0),
      u = D().getInt32(h + 4 * 1, !0),
      _ = D().getInt32(h + 4 * 2, !0);
    if (_) throw W(u);
    return W(o)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function nc(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H;
    c.extractContractData(i, o, u);
    var t = D().getInt32(i + 4 * 0, !0),
      e = D().getInt32(i + 4 * 1, !0),
      s = D().getInt32(i + 4 * 2, !0),
      r = D().getInt32(i + 4 * 3, !0);
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
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.extractPublicKey(h, p, C);
    var s = D().getInt32(h + 4 * 0, !0),
      r = D().getInt32(h + 4 * 1, !0),
      i = D().getInt32(h + 4 * 2, !0),
      o = D().getInt32(h + 4 * 3, !0),
      u = s,
      _ = r;
    if (o) throw u = 0, _ = 0, W(i);
    return t = u, e = _, bt(u, _)
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
    var t = D().getInt32(r + 4 * 0, !0),
      e = D().getInt32(r + 4 * 1, !0),
      s = D().getInt32(r + 4 * 2, !0);
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
      u = H,
      _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    c.mergeTvc(i, o, u, _, h);
    var e = D().getInt32(i + 4 * 0, !0),
      s = D().getInt32(i + 4 * 1, !0),
      r = D().getInt32(i + 4 * 2, !0);
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
    var t = D().getInt32(r + 4 * 0, !0),
      e = D().getInt32(r + 4 * 1, !0),
      s = D().getInt32(r + 4 * 2, !0);
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
    c.setCodeSalt(i, o, u, _, h);
    var e = D().getInt32(i + 4 * 0, !0),
      s = D().getInt32(i + 4 * 1, !0),
      r = D().getInt32(i + 4 * 2, !0);
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
      u = H;
    c.getCodeSalt(i, o, u);
    var t = D().getInt32(i + 4 * 0, !0),
      e = D().getInt32(i + 4 * 1, !0),
      s = D().getInt32(i + 4 * 2, !0),
      r = D().getInt32(i + 4 * 3, !0);
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
    const C = c.__wbindgen_add_to_stack_pointer(-16),
      b = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H,
      k = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H;
    c.encodeInternalInput(C, b, A, k, f, J(e));
    var i = D().getInt32(C + 4 * 0, !0),
      o = D().getInt32(C + 4 * 1, !0),
      u = D().getInt32(C + 4 * 2, !0),
      _ = D().getInt32(C + 4 * 3, !0),
      h = i,
      p = o;
    if (_) throw h = 0, p = 0, W(u);
    return s = h, r = p, bt(h, p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(s, r, 1)
  }
}

function uc(n, t, e, s, r, i, o) {
  let u, _;
  try {
    const F = c.__wbindgen_add_to_stack_pointer(-16);
    var h = wt(n) ? 0 : V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    const K = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      B = H;
    var C = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      b = H,
      A = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      k = H;
    const l = V(i, c.__wbindgen_malloc, c.__wbindgen_realloc),
      d = H;
    c.encodeInternalMessage(F, h, p, K, B, e, C, b, A, k, l, d, wt(o) ? 16777215 : o ? 1 : 0);
    var f = D().getInt32(F + 4 * 0, !0),
      w = D().getInt32(F + 4 * 1, !0),
      j = D().getInt32(F + 4 * 2, !0),
      y = D().getInt32(F + 4 * 3, !0),
      v = f,
      m = w;
    if (y) throw v = 0, m = 0, W(j);
    return u = v, _ = m, bt(v, m)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(u, _, 1)
  }
}

function dc(n, t, e, s) {
  try {
    const u = c.__wbindgen_add_to_stack_pointer(-16),
      _ = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H,
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.decodeInput(u, _, h, p, C, J(e), s);
    var r = D().getInt32(u + 4 * 0, !0),
      i = D().getInt32(u + 4 * 1, !0),
      o = D().getInt32(u + 4 * 2, !0);
    if (o) throw W(i);
    return W(r)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function _c(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      u = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H,
      h = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    c.decodeEvent(o, u, _, h, p, J(e));
    var s = D().getInt32(o + 4 * 0, !0),
      r = D().getInt32(o + 4 * 1, !0),
      i = D().getInt32(o + 4 * 2, !0);
    if (i) throw W(r);
    return W(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function pc(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      u = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H,
      h = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    c.decodeOutput(o, u, _, h, p, J(e));
    var s = D().getInt32(o + 4 * 0, !0),
      r = D().getInt32(o + 4 * 1, !0),
      i = D().getInt32(o + 4 * 2, !0);
    if (i) throw W(r);
    return W(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function fc(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      u = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H;
    c.decodeTransaction(o, J(n), u, _, J(e));
    var s = D().getInt32(o + 4 * 0, !0),
      r = D().getInt32(o + 4 * 1, !0),
      i = D().getInt32(o + 4 * 2, !0);
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
      u = H;
    c.decodeTransactionEvents(i, J(n), o, u);
    var e = D().getInt32(i + 4 * 0, !0),
      s = D().getInt32(i + 4 * 1, !0),
      r = D().getInt32(i + 4 * 2, !0);
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
    var t = D().getInt32(r + 4 * 0, !0),
      e = D().getInt32(r + 4 * 1, !0),
      s = D().getInt32(r + 4 * 2, !0);
    if (s) throw W(e);
    return W(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function bc(n) {
  let t, e;
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.getDataHash(h, p, C);
    var s = D().getInt32(h + 4 * 0, !0),
      r = D().getInt32(h + 4 * 1, !0),
      i = D().getInt32(h + 4 * 2, !0),
      o = D().getInt32(h + 4 * 3, !0),
      u = s,
      _ = r;
    if (o) throw u = 0, _ = 0, W(i);
    return t = u, e = _, bt(u, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function mc() {
  try {
    const s = c.__wbindgen_add_to_stack_pointer(-16);
    c.ed25519_generateKeyPair(s);
    var n = D().getInt32(s + 4 * 0, !0),
      t = D().getInt32(s + 4 * 1, !0),
      e = D().getInt32(s + 4 * 2, !0);
    if (e) throw W(t);
    return W(n)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function wc(n, t, e) {
  let s, r;
  try {
    const C = c.__wbindgen_add_to_stack_pointer(-16),
      b = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H,
      k = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H;
    c.ed25519_sign(C, b, A, k, f, !wt(e), wt(e) ? 0 : e);
    var i = D().getInt32(C + 4 * 0, !0),
      o = D().getInt32(C + 4 * 1, !0),
      u = D().getInt32(C + 4 * 2, !0),
      _ = D().getInt32(C + 4 * 3, !0),
      h = i,
      p = o;
    if (_) throw h = 0, p = 0, W(u);
    return s = h, r = p, bt(h, p)
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
    var t = D().getInt32(r + 4 * 0, !0),
      e = D().getInt32(r + 4 * 1, !0),
      s = D().getInt32(r + 4 * 2, !0);
    if (s) throw W(e);
    return W(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function vc(n, t, e, s) {
  try {
    const u = c.__wbindgen_add_to_stack_pointer(-16),
      _ = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H,
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H,
      b = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H;
    c.verifySignature(u, _, h, p, C, b, A, !wt(s), wt(s) ? 0 : s);
    var r = D().getInt32(u + 4 * 0, !0),
      i = D().getInt32(u + 4 * 1, !0),
      o = D().getInt32(u + 4 * 2, !0);
    if (o) throw W(i);
    return r !== 0
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Ac(n, t, e, s) {
  try {
    const C = c.__wbindgen_add_to_stack_pointer(-16),
      b = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H;
    var r = wt(t) ? 0 : V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = H,
      o = wt(e) ? 0 : V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H;
    c.createRawExternalMessage(C, b, A, r, i, o, u, s);
    var _ = D().getInt32(C + 4 * 0, !0),
      h = D().getInt32(C + 4 * 1, !0),
      p = D().getInt32(C + 4 * 2, !0);
    if (p) throw W(h);
    return W(_)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function kc(n, t, e, s, r, i, o) {
  try {
    const b = c.__wbindgen_add_to_stack_pointer(-16);
    se(n, pe);
    const A = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      k = H,
      f = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = H,
      j = V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      y = H;
    var u = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H;
    c.createExternalMessageWithoutSignature(b, n.__wbg_ptr, A, k, f, w, j, y, u, _, J(i), o);
    var h = D().getInt32(b + 4 * 0, !0),
      p = D().getInt32(b + 4 * 1, !0),
      C = D().getInt32(b + 4 * 2, !0);
    if (C) throw W(p);
    return W(h)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Ic(n, t, e, s, r, i, o, u) {
  try {
    const A = c.__wbindgen_add_to_stack_pointer(-16);
    se(n, pe);
    const k = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H,
      w = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      j = H,
      y = V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      v = H;
    var _ = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    const m = V(o, c.__wbindgen_malloc, c.__wbindgen_realloc),
      F = H;
    c.createExternalMessage(A, n.__wbg_ptr, k, f, w, j, y, v, _, h, J(i), m, F, u);
    var p = D().getInt32(A + 4 * 0, !0),
      C = D().getInt32(A + 4 * 1, !0),
      b = D().getInt32(A + 4 * 2, !0);
    if (b) throw W(C);
    return En.__wrap(p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Sc(n, t, e, s) {
  c.wasm_bindgen__convert__closures__invoke2_mut__h5874b044d3e8a56e(n, t, J(e), J(s))
}
const Fs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_bytesquery_free(n >>> 0, 1));
class Cn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Cn.prototype);
    return e.__wbg_ptr = t, Fs.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Fs.unregister(this), t
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
const Ns = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_clockwithoffset_free(n >>> 0, 1));
class pe {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ns.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_clockwithoffset_free(t, 0)
  }
  constructor() {
    const t = c.clockwithoffset_new();
    return this.__wbg_ptr = t >>> 0, Ns.register(this, this.__wbg_ptr, this), this
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
const $s = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_genericcontract_free(n >>> 0, 1));
class Tn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Tn.prototype);
    return e.__wbg_ptr = t, $s.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $s.unregister(this), t
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
      var s = D().getInt32(i + 4 * 0, !0),
        r = D().getInt32(i + 4 * 1, !0);
      return t = s, e = r, bt(s, r)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
    }
  }
  sendMessageLocally(t, e) {
    try {
      const o = c.__wbindgen_add_to_stack_pointer(-16);
      c.genericcontract_sendMessageLocally(o, this.__wbg_ptr, J(t), J(e));
      var s = D().getInt32(o + 4 * 0, !0),
        r = D().getInt32(o + 4 * 1, !0),
        i = D().getInt32(o + 4 * 2, !0);
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
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
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
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
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
const js = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_gqlconnection_free(n >>> 0, 1));
class Ir {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, js.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_gqlconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, js.register(this, this.__wbg_ptr, this), this
  }
  getLatestBlock(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        u = H;
      c.gqlconnection_getLatestBlock(i, this.__wbg_ptr, o, u);
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
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
      var r = D().getInt32(u + 4 * 0, !0),
        i = D().getInt32(u + 4 * 1, !0),
        o = D().getInt32(u + 4 * 2, !0);
      if (o) throw W(i);
      return W(r)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
const Ks = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_jrpcconnection_free(n >>> 0, 1));
class Sr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ks.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_jrpcconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, Ks.register(this, this.__wbg_ptr, this), this
  }
}
const Bs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_protoconnection_free(n >>> 0, 1));
class Cr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Bs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_protoconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, Bs.register(this, this.__wbg_ptr, this), this
  }
}
const xs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_proxyconnection_free(n >>> 0, 1));
class Tr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, xs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_proxyconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, xs.register(this, this.__wbg_ptr, this), this
  }
}
const zs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_stringquery_free(n >>> 0, 1));
class en {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(en.prototype);
    return e.__wbg_ptr = t, zs.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zs.unregister(this), t
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
const Us = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_transport_free(n >>> 0, 1));
class Te {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Te.prototype);
    return e.__wbg_ptr = t, Us.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Us.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_transport_free(t, 0)
  }
  static fromGqlConnection(t, e) {
    se(t, Ir), se(e, pe);
    const s = c.transport_fromGqlConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(s)
  }
  static fromJrpcConnection(t, e) {
    se(t, Sr), se(e, pe);
    const s = c.transport_fromJrpcConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(s)
  }
  static fromProtoConnection(t, e) {
    se(t, Cr), se(e, pe);
    const s = c.transport_fromProtoConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(s)
  }
  static fromProxyConnection(t, e) {
    se(t, Tr), se(e, pe);
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
      var s = D().getInt32(o + 4 * 0, !0),
        r = D().getInt32(o + 4 * 1, !0),
        i = D().getInt32(o + 4 * 2, !0);
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
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
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
      var o = D().getInt32(h + 4 * 0, !0),
        u = D().getInt32(h + 4 * 1, !0),
        _ = D().getInt32(h + 4 * 2, !0);
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
      var o = D().getInt32(h + 4 * 0, !0),
        u = D().getInt32(h + 4 * 1, !0),
        _ = D().getInt32(h + 4 * 2, !0);
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
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
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
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
      if (r) throw W(s);
      return W(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
const Ws = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_unsignedmessage_free(n >>> 0, 1));
class En {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(En.prototype);
    return e.__wbg_ptr = t, Ws.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ws.unregister(this), t
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
      var s = D().getInt32(i + 4 * 0, !0),
        r = D().getInt32(i + 4 * 1, !0);
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
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
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
      var t = D().getInt32(r + 4 * 0, !0),
        e = D().getInt32(r + 4 * 1, !0),
        s = D().getInt32(r + 4 * 2, !0);
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

function Er() {
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
    D().setFloat64(t + 8 * 1, wt(r) ? 0 : r, !0), D().setInt32(t + 4 * 0, !wt(r), !0)
  }, n.wbg.__wbindgen_is_null = function(t) {
    return X(t) === null
  }, n.wbg.__wbindgen_string_get = function(t, e) {
    const s = X(e),
      r = typeof s == "string" ? s : void 0;
    var i = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    D().setInt32(t + 4 * 1, o, !0), D().setInt32(t + 4 * 0, i, !0)
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
    X(t).send(bt(e, s), en.__wrap(r), i !== 0)
  }, n.wbg.__wbg_send_bd8357f2e836b323 = function(t, e, s, r, i) {
    X(t).send(bt(e, s), en.__wrap(r), i !== 0)
  }, n.wbg.__wbg_send_1699c4cfc0bbee60 = function(t, e, s, r, i) {
    X(t).send(Bo(e, s), Cn.__wrap(r), i !== 0)
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
            return Sc(_, s.b, o, u)
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
      const t = yi.global;
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
    const s = os(X(e)),
      r = V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = H;
    D().setInt32(t + 4 * 1, i, !0), D().setInt32(t + 4 * 0, r, !0)
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
    const r = jo(t, e, 981, Ko);
    return J(r)
  }, n
}

function Pr(n, t) {
  return c = n.exports, Mr.__wbindgen_wasm_module = t, Se = null, Ve = null, c
}

function Tc(n) {
  if (c !== void 0) return c;
  typeof n < "u" && Object.getPrototypeOf(n) === Object.prototype ? {
    module: n
  } = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead");
  const t = Er();
  n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n));
  const e = new WebAssembly.Instance(n, t);
  return Pr(e, n)
}
async function Mr(n) {
  if (c !== void 0) return c;
  typeof n < "u" && Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead"), typeof n > "u" && (n = new URL("" + new URL("nekoton_wasm_bg.CMYqFJ-k.wasm", import.meta.url).href, import.meta.url));
  const t = Er();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: s
  } = await Cc(await n, t);
  return Pr(e, s)
}
const Ec = Object.freeze(Object.defineProperty({
    __proto__: null,
    BytesQuery: Cn,
    ClockWithOffset: pe,
    GenericContract: Tn,
    GqlConnection: Ir,
    JrpcConnection: Sr,
    ProtoConnection: Cr,
    ProxyConnection: Tr,
    StringQuery: en,
    Transport: Te,
    UnsignedMessage: En,
    checkAddress: zo,
    codeToTvc: rc,
    computeStorageFee: Qo,
    createExternalMessage: Ic,
    createExternalMessageWithoutSignature: kc,
    createRawExternalMessage: Ac,
    decodeEvent: _c,
    decodeInput: dc,
    decodeOutput: pc,
    decodeTransaction: fc,
    decodeTransactionEvents: hc,
    default: Mr,
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
  Pc = _r(Ec);
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
var Or = {},
  Oc = nn;
nn.default = nn;
nn.stable = Lr;
nn.stableStringify = Lr;
var yn = "[...]",
  Rr = "[Circular]",
  Me = [],
  Ee = [];

function Dr() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

function nn(n, t, e, s) {
  typeof s > "u" && (s = Dr()), cs(n, "", 0, [], void 0, 0, s);
  var r;
  try {
    Ee.length === 0 ? r = JSON.stringify(n, t, e) : r = JSON.stringify(n, Fr(t), e)
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

function je(n, t, e, s) {
  var r = Object.getOwnPropertyDescriptor(s, e);
  r.get !== void 0 ? r.configurable ? (Object.defineProperty(s, e, {
    value: n
  }), Me.push([s, e, t, r])) : Ee.push([t, e, n]) : (s[e] = n, Me.push([s, e, t]))
}

function cs(n, t, e, s, r, i, o) {
  i += 1;
  var u;
  if (typeof n == "object" && n !== null) {
    for (u = 0; u < s.length; u++)
      if (s[u] === n) {
        je(Rr, n, t, r);
        return
      } if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      je(yn, n, t, r);
      return
    }
    if (typeof o.edgesLimit < "u" && e + 1 > o.edgesLimit) {
      je(yn, n, t, r);
      return
    }
    if (s.push(n), Array.isArray(n))
      for (u = 0; u < n.length; u++) cs(n[u], u, u, s, n, i, o);
    else {
      var _ = Object.keys(n);
      for (u = 0; u < _.length; u++) {
        var h = _[u];
        cs(n[h], h, u, s, n, i, o)
      }
    }
    s.pop()
  }
}

function Rc(n, t) {
  return n < t ? -1 : n > t ? 1 : 0
}

function Lr(n, t, e, s) {
  typeof s > "u" && (s = Dr());
  var r = ls(n, "", 0, [], void 0, 0, s) || n,
    i;
  try {
    Ee.length === 0 ? i = JSON.stringify(r, t, e) : i = JSON.stringify(r, Fr(t), e)
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

function ls(n, t, e, s, r, i, o) {
  i += 1;
  var u;
  if (typeof n == "object" && n !== null) {
    for (u = 0; u < s.length; u++)
      if (s[u] === n) {
        je(Rr, n, t, r);
        return
      } try {
      if (typeof n.toJSON == "function") return
    } catch {
      return
    }
    if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      je(yn, n, t, r);
      return
    }
    if (typeof o.edgesLimit < "u" && e + 1 > o.edgesLimit) {
      je(yn, n, t, r);
      return
    }
    if (s.push(n), Array.isArray(n))
      for (u = 0; u < n.length; u++) ls(n[u], u, u, s, n, i, o);
    else {
      var _ = {},
        h = Object.keys(n).sort(Rc);
      for (u = 0; u < h.length; u++) {
        var p = h[u];
        ls(n[p], p, u, s, n, i, o), _[p] = n[p]
      }
      if (typeof r < "u") Me.push([r, t, n]), r[t] = _;
      else return _
    }
    s.pop()
  }
}

function Fr(n) {
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
const Gs = ve,
  Dc = vi();

function Hs(n, t, e) {
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
class Fc extends Dc.EventEmitter {
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
    if (typeof i == "function") Hs(i, this, e);
    else {
      const o = i.length,
        u = Lc(i);
      for (let _ = 0; _ < o; _ += 1) Hs(u[_], this, e)
    }
    return !0
  }
}
Ht.SafeEventEmitter = Fc;

function Nc(n) {
  if (typeof n == "object" && !(0, Gs.isAddressObject)(n)) throw new Error("Invalid address object");
  return typeof n == "object" ? n : new Gs.Address(n)
}
Ht.convertToAddressObject = Nc;
const $c = n => {
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
Ht.convertVersionToInt32 = $c;
const Nr = 4294967295;
let Qn = Math.floor(Math.random() * Nr);

function jc() {
  return Qn = (Qn + 1) % Nr, Qn
}
Ht.getUniqueId = jc;
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

function Vs(n) {
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
const Kc = function() {
  if (typeof queueMicrotask == "function") return function(n) {
    queueMicrotask(mn(n))
  };
  if (typeof document == "object" && document) {
    if (typeof MutationObserver == "function") return Vs(MutationObserver);
    if (typeof window.WebKitMutationObserver == "function") return Vs(window.WebKitMutationObserver)
  }
  if (typeof setImmediate == "function") return function(n) {
    setImmediate(mn(n))
  };
  if (typeof setTimeout == "function" || typeof setTimeout == "object") return function(n) {
    setTimeout(mn(n), 0)
  };
  throw new Error("No `nextTick` implementation found")
}();
class $r {
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
      this.tasks.push(s), Kc(this.sched.bind(this))
    })
  }
  use(t) {
    return this.acquire().then(e => t().then(s => (e(), s)).catch(s => {
      throw e(), s
    }))
  }
}
ye.Semaphore = $r;
class Bc extends $r {
  constructor() {
    super(1)
  }
}
ye.Mutex = Bc;
var Pn = {},
  xc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.GqlSocket = void 0;
const us = xc(Zt);
class sn {
  async connect(t) {
    class e {
      constructor(r) {
        this.nextLatencyDetectionTime = 0, this.local = r.local === !0, this.maxLatency = r.maxLatency || 6e4, this.latencyDetectionInterval = r.latencyDetectionInterval || 6e4, this.endpoints = r.endpoints.map(sn.expandAddress), this.endpoints.length == 1 && (this.currentEndpoint = this.endpoints[0], this.nextLatencyDetectionTime = Number.MAX_VALUE)
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
              headers: zc,
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
          const _ = new Promise((C, b) => {
            u = {
              resolve: A => C(A),
              reject: () => b(void 0)
            }
          });
          let h = 0,
            p;
          for (const C of this.endpoints) sn.checkLatency(C).then(b => {
            if (++h, b !== void 0 && b <= r) return u.resolve(C);
            (p === void 0 || p.latency === void 0 || b !== void 0 && b < p.latency) && (p = {
              endpoint: C,
              latency: b
            }), h >= i && ((p == null ? void 0 : p.latency) !== void 0 ? u.resolve(p.endpoint) : u.reject())
          });
          try {
            return await _
          } catch {
            let b;
            const A = new Promise(k => {
              b = () => k()
            });
            setTimeout(() => b(), Math.min(100 * o, 5e3)), await A
          }
        }
        throw new Error("Not available endpoint found")
      }
    }
    return new us.default.nekoton.GqlConnection(new e(t))
  }
  static async checkLatency(t) {
    const e = await fetch(`${t.url}?query=%7Binfo%7Bversion%20time%20latency%7D%7D`, {
      method: "get",
      agent: t.agent
    }).then(o => o.json()).catch(o => {
      us.default.debugLog(o)
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
Pn.GqlSocket = sn;
sn.expandAddress = n => {
  const t = n.lastIndexOf("/");
  n = t < 0 ? n : n.substring(0, t);
  let e;
  return n.startsWith("http://") || n.startsWith("https://") ? e = `${n}/graphql` : ["localhost", "127.0.0.1"].indexOf(n) >= 0 ? e = `http://${n}/graphql` : e = `https://${n}/graphql`, {
    url: e,
    agent: us.default.fetchAgent(e)
  }
};
const zc = {
  "Content-Type": "application/json"
};
var Mn = {},
  Uc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Mn, "__esModule", {
  value: !0
});
Mn.JrpcSocket = void 0;
const Jn = Uc(Zt);
class Wc {
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
                headers: Gc,
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
Mn.JrpcSocket = Wc;
const Gc = {
  "Content-Type": "application/json"
};
var On = {},
  Hc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(On, "__esModule", {
  value: !0
});
On.ProtoSocket = void 0;
const Qs = Hc(Zt);
class Vc {
  async connect(t) {
    class e {
      constructor(r) {
        this.endpoint = r.endpoint, this.endpointAgent = Qs.default.fetchAgent(this.endpoint)
      }
      send(r, i, o) {
        (async () => {
          try {
            const u = await fetch(this.endpoint, {
              method: "post",
              headers: Qc,
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
    return new Qs.default.nekoton.ProtoConnection(new e(t))
  }
}
On.ProtoSocket = Vc;
const Qc = {
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
      j = new s.default.nekoton.ClockWithOffset;
    try {
      const y = new b(j);
      await y._connect(w), y._initializedTransport != null && A(y._initializedTransport)
    } catch (y) {
      throw new p(w, y.toString())
    } finally {
      j.free()
    }
  }
  n.checkConnection = h;
  class p extends Error {
    constructor(w, j) {
      super(j), this.params = w
    }
  }
  n.ConnectionError = p;
  async function C(f, w, j = !1) {
    const y = _(w);
    for (;;) try {
      const v = new b(f);
      return await v.startSwitchingNetwork(y).then(m => m.switch()), s.default.debugLog(`Successfully connected to ${y.group}`), v
    } catch (v) {
      if (j) console.error("Connection failed:", v), await new Promise(m => {
        setTimeout(() => m(), 5e3)
      }), s.default.debugLog("Restarting connection process");
      else throw v
    }
  }
  n.createConnectionController = C;
  class b {
    constructor(w) {
      this._networkMutex = new e.Mutex, this._acquiredTransportCounter = 0, this._clock = w
    }
    async acquire() {
      return k(this._initializedTransport), await this._acquireTransport(), {
        transport: this._initializedTransport,
        release: () => this._releaseTransport()
      }
    }
    async use(w) {
      return k(this._initializedTransport), await this._acquireTransport(), w(this._initializedTransport).finally(() => {
        this._releaseTransport()
      })
    }
    async startSwitchingNetwork(w) {
      var j;
      class y {
        constructor(F, K, B) {
          this._controller = F, this._release = K, this._params = B
        }
        async switch () {
          await this._controller._connect(this._params).finally(() => this._release())
        }
      }(j = this._cancelTestTransport) === null || j === void 0 || j.call(this);
      const v = await this._networkMutex.acquire();
      return new y(this, v, w)
    }
    get initializedTransport() {
      return this._initializedTransport
    }
    async _connect(w) {
      this._initializedTransport != null && A(this._initializedTransport), this._initializedTransport = void 0;
      let j;
      (function(v) {
        v[v.DONE = 0] = "DONE", v[v.CANCELLED = 1] = "CANCELLED"
      })(j || (j = {}));
      const y = async ({
        data: {
          transport: v
        }
      }, m) => new Promise((F, K) => {
        this._cancelTestTransport = () => F(j.CANCELLED), m ? v.getAccountsByCodeHash("4e92716de61d456e58f16e4e867e3e93a7548321eace86301b51c8b80ca6239b", 1).then(() => F(j.DONE)).catch(B => K(B)) : v.getFullContractState("-1:0000000000000000000000000000000000000000000000000000000000000000").then(() => F(j.DONE)).catch(B => K(B)), setTimeout(() => K(new Error("Connection timeout")), 1e4)
      }).finally(() => this._cancelTestTransport = void 0);
      try {
        const v = w.group != null ? w.group : u(w.id),
          {
            local: m,
            transportData: F
          } = await (async () => {
            switch (w.type) {
              case "graphql": {
                const K = new r.GqlSocket,
                  B = await K.connect(w.data),
                  l = s.default.nekoton.Transport.fromGqlConnection(B, this._clock),
                  d = {
                    id: w.id,
                    group: v,
                    type: "graphql",
                    data: {
                      socket: K,
                      connection: B,
                      transport: l
                    }
                  };
                return {
                  local: w.data.local === !0,
                  transportData: d
                }
              }
              case "jrpc": {
                const K = new i.JrpcSocket,
                  B = await K.connect(w.data),
                  l = s.default.nekoton.Transport.fromJrpcConnection(B, this._clock);
                return {
                  local: !1,
                  transportData: {
                    id: w.id,
                    group: v,
                    type: "jrpc",
                    data: {
                      socket: K,
                      connection: B,
                      transport: l
                    }
                  }
                }
              }
              case "proto": {
                const K = new o.ProtoSocket,
                  B = await K.connect(w.data),
                  l = s.default.nekoton.Transport.fromProtoConnection(B, this._clock);
                return {
                  local: !1,
                  transportData: {
                    id: w.id,
                    group: v,
                    type: "proto",
                    data: {
                      socket: K,
                      connection: B,
                      transport: l
                    }
                  }
                }
              }
              case "proxy": {
                const K = w.data.connectionFactory.create(this._clock);
                return {
                  local: !0,
                  transportData: {
                    id: w.id,
                    group: v,
                    type: "proxy",
                    data: {
                      connection: K,
                      transport: s.default.nekoton.Transport.fromProxyConnection(K, this._clock)
                    }
                  }
                }
              }
            }
          })();
        try {
          if (await y(F, m) == j.CANCELLED) {
            A(F);
            return
          }
        } catch (K) {
          throw A(F), K
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

  function A(f) {
    f.data.transport.free(), f.data.connection.free()
  }

  function k(f) {
    if (f == null) throw new Error("Connection is not initialized")
  }
})(bn);
var Rn = {},
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
class ws {
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
      return new ws(r, o, e, u)
    } catch (u) {
      throw o(), u
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
              const u = setTimeout(() => {
                this._refreshTimer = void 0, o()
              }, i);
              this._refreshTimer = [u, o]
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
              const u = await i.getLatestBlock(this._address);
              this._currentBlockId = u.id, o = this._currentBlockId
            } catch (u) {
              Ut.default.debugLog(`Failed to get latest block for ${this._address}`, u);
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
          } catch (u) {
            Ut.default.debugLog(`Failed to handle block for ${this._address}`, u)
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
Dn.ContractSubscription = ws;
const Yc = 60,
  Zc = 2e3,
  qc = 6e4;
Object.defineProperty(Rn, "__esModule", {
  value: !0
});
Rn.SubscriptionController = void 0;
const tl = ye,
  Js = Ht,
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
    const r = (0, Js.getUniqueId)();
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
    const i = (0, Js.getUniqueId)();
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
          return Object.keys(C).map(b => {
            if (b !== "state" && b !== "transactions") throw new Error(`Unknown subscription topic: ${b}`);
            const A = e[b];
            if (typeof A == "boolean") C[b] = A;
            else {
              if (A == null) return;
              throw new Error(`Unknown subscription topic value ${b}: ${A}`)
            }
          }), C
        },
        i = this._subscriptionStates.get(t) || rl();
      let o;
      if (s == null) o = r(i.client);
      else {
        const p = i.internal.get(s);
        p != null ? (o = r(p), Xs(o) && i.internal.delete(s)) : o = r({
          state: !1,
          transactions: !1
        })
      }
      const u = {
        ...o
      };
      for (const p of i.internal.values()) u.state || (u.state = p.state), u.transactions || (u.transactions = p.transactions);
      if (Xs(u)) return this._subscriptionStates.delete(t), await this._tryUnsubscribe(t), {
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
Rn.SubscriptionController = sl;
const rl = () => ({
    internal: new Map,
    client: {
      state: !1,
      transactions: !1
    }
  }),
  Xs = n => !n.state && !n.transactions;
var ds = {},
  Ln = {};
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
Ln.GiverAccount = void 0;
const il = Ht;
class rn {
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
    return new rn({
      address: e,
      publicKey: rn.GIVER_KEY_PAIR.publicKey
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
Ln.GiverAccount = rn;
rn.GIVER_KEY_PAIR = {
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
var xe = {};
Object.defineProperty(xe, "__esModule", {
  value: !0
});
xe.MsigAccount = xe.GenericAccount = void 0;
const ol = Ht;
class jr {
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
xe.GenericAccount = jr;
class cl extends jr {
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
xe.MsigAccount = cl;
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
var Fn = {},
  dl = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  Xn = Math.ceil,
  ee = Math.floor,
  Jt = "[BigNumber Error] ",
  Ys = Jt + "Number primitive has more than 15 significant digits: ",
  ie = 1e14,
  it = 14,
  Yn = 9007199254740991,
  Zn = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  me = 1e7,
  Ft = 1e9;

function Kr(n) {
  var t, e, s, r = y.prototype = {
      constructor: y,
      toString: null,
      valueOf: null
    },
    i = new y(1),
    o = 20,
    u = 4,
    _ = -7,
    h = 21,
    p = -1e7,
    C = 1e7,
    b = !1,
    A = 1,
    k = 0,
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
    j = !0;

  function y(l, d) {
    var g, P, T, O, N, I, M, $, L = this;
    if (!(L instanceof y)) return new y(l, d);
    if (d == null) {
      if (l && l._isBigNumber === !0) {
        L.s = l.s, !l.c || l.e > C ? L.c = L.e = null : l.e < p ? L.c = [L.e = 0] : (L.e = l.e, L.c = l.c.slice());
        return
      }
      if ((I = typeof l == "number") && l * 0 == 0) {
        if (L.s = 1 / l < 0 ? (l = -l, -1) : 1, l === ~~l) {
          for (O = 0, N = l; N >= 10; N /= 10, O++);
          O > C ? L.c = L.e = null : (L.e = O, L.c = [l]);
          return
        }
        $ = String(l)
      } else {
        if (!dl.test($ = String(l))) return s(L, $, I);
        L.s = $.charCodeAt(0) == 45 ? ($ = $.slice(1), -1) : 1
      }(O = $.indexOf(".")) > -1 && ($ = $.replace(".", "")), (N = $.search(/e/i)) > 0 ? (O < 0 && (O = N), O += +$.slice(N + 1), $ = $.substring(0, N)) : O < 0 && (O = $.length)
    } else {
      if (Ct(d, 2, w.length, "Base"), d == 10 && j) return L = new y(l), K(L, o + L.e + 1, u);
      if ($ = String(l), I = typeof l == "number") {
        if (l * 0 != 0) return s(L, $, I, d);
        if (L.s = 1 / l < 0 ? ($ = $.slice(1), -1) : 1, y.DEBUG && $.replace(/^0\.0*|\./, "").length > 15) throw Error(Ys + l)
      } else L.s = $.charCodeAt(0) === 45 ? ($ = $.slice(1), -1) : 1;
      for (g = w.slice(0, d), O = N = 0, M = $.length; N < M; N++)
        if (g.indexOf(P = $.charAt(N)) < 0) {
          if (P == ".") {
            if (N > O) {
              O = M;
              continue
            }
          } else if (!T && ($ == $.toUpperCase() && ($ = $.toLowerCase()) || $ == $.toLowerCase() && ($ = $.toUpperCase()))) {
            T = !0, N = -1, O = 0;
            continue
          }
          return s(L, String(l), I, d)
        } I = !1, $ = e($, d, 10, L.s), (O = $.indexOf(".")) > -1 ? $ = $.replace(".", "") : O = $.length
    }
    for (N = 0; $.charCodeAt(N) === 48; N++);
    for (M = $.length; $.charCodeAt(--M) === 48;);
    if ($ = $.slice(N, ++M)) {
      if (M -= N, I && y.DEBUG && M > 15 && (l > Yn || l !== ee(l))) throw Error(Ys + L.s * l);
      if ((O = O - N - 1) > C) L.c = L.e = null;
      else if (O < p) L.c = [L.e = 0];
      else {
        if (L.e = O, L.c = [], N = (O + 1) % it, O < 0 && (N += it), N < M) {
          for (N && L.c.push(+$.slice(0, N)), M -= it; N < M;) L.c.push(+$.slice(N, N += it));
          N = it - ($ = $.slice(N)).length
        } else N -= M;
        for (; N--; $ += "0");
        L.c.push(+$)
      }
    } else L.c = [L.e = 0]
  }
  y.clone = Kr, y.ROUND_UP = 0, y.ROUND_DOWN = 1, y.ROUND_CEIL = 2, y.ROUND_FLOOR = 3, y.ROUND_HALF_UP = 4, y.ROUND_HALF_DOWN = 5, y.ROUND_HALF_EVEN = 6, y.ROUND_HALF_CEIL = 7, y.ROUND_HALF_FLOOR = 8, y.EUCLID = 9, y.config = y.set = function(l) {
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
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) b = g;
              else throw b = !g, Error(Jt + "crypto unavailable");
        else b = g;
        else throw Error(Jt + d + " not true or false: " + g);
        if (l.hasOwnProperty(d = "MODULO_MODE") && (g = l[d], Ct(g, 0, 9, d), A = g), l.hasOwnProperty(d = "POW_PRECISION") && (g = l[d], Ct(g, 0, Ft, d), k = g), l.hasOwnProperty(d = "FORMAT"))
          if (g = l[d], typeof g == "object") f = g;
          else throw Error(Jt + d + " not an object: " + g);
        if (l.hasOwnProperty(d = "ALPHABET"))
          if (g = l[d], typeof g == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(g)) j = g.slice(0, 10) == "0123456789", w = g;
          else throw Error(Jt + d + " invalid: " + g)
      } else throw Error(Jt + "Object expected: " + l);
    return {
      DECIMAL_PLACES: o,
      ROUNDING_MODE: u,
      EXPONENTIAL_AT: [_, h],
      RANGE: [p, C],
      CRYPTO: b,
      MODULO_MODE: A,
      POW_PRECISION: k,
      FORMAT: f,
      ALPHABET: w
    }
  }, y.isBigNumber = function(l) {
    if (!l || l._isBigNumber !== !0) return !1;
    if (!y.DEBUG) return !0;
    var d, g, P = l.c,
      T = l.e,
      O = l.s;
    t: if ({}.toString.call(P) == "[object Array]") {
      if ((O === 1 || O === -1) && T >= -Ft && T <= Ft && T === ee(T)) {
        if (P[0] === 0) {
          if (T === 0 && P.length === 1) return !0;
          break t
        }
        if (d = (T + 1) % it, d < 1 && (d += it), String(P[0]).length == d) {
          for (d = 0; d < P.length; d++)
            if (g = P[d], g < 0 || g >= ie || g !== ee(g)) break t;
          if (g !== 0) return !0
        }
      }
    } else if (P === null && T === null && (O === null || O === 1 || O === -1)) return !0;
    throw Error(Jt + "Invalid BigNumber: " + l)
  }, y.maximum = y.max = function() {
    return m(arguments, -1)
  }, y.minimum = y.min = function() {
    return m(arguments, 1)
  }, y.random = function() {
    var l = 9007199254740992,
      d = Math.random() * l & 2097151 ? function() {
        return ee(Math.random() * l)
      } : function() {
        return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
      };
    return function(g) {
      var P, T, O, N, I, M = 0,
        $ = [],
        L = new y(i);
      if (g == null ? g = o : Ct(g, 0, Ft), N = Xn(g / it), b)
        if (crypto.getRandomValues) {
          for (P = crypto.getRandomValues(new Uint32Array(N *= 2)); M < N;) I = P[M] * 131072 + (P[M + 1] >>> 11), I >= 9e15 ? (T = crypto.getRandomValues(new Uint32Array(2)), P[M] = T[0], P[M + 1] = T[1]) : ($.push(I % 1e14), M += 2);
          M = N / 2
        } else if (crypto.randomBytes) {
        for (P = crypto.randomBytes(N *= 7); M < N;) I = (P[M] & 31) * 281474976710656 + P[M + 1] * 1099511627776 + P[M + 2] * 4294967296 + P[M + 3] * 16777216 + (P[M + 4] << 16) + (P[M + 5] << 8) + P[M + 6], I >= 9e15 ? crypto.randomBytes(7).copy(P, M) : ($.push(I % 1e14), M += 7);
        M = N / 7
      } else throw b = !1, Error(Jt + "crypto unavailable");
      if (!b)
        for (; M < N;) I = d(), I < 9e15 && ($[M++] = I % 1e14);
      for (N = $[--M], g %= it, N && g && (I = Zn[it - g], $[M] = ee(N / I) * I); $[M] === 0; $.pop(), M--);
      if (M < 0) $ = [O = 0];
      else {
        for (O = -1; $[0] === 0; $.splice(0, 1), O -= it);
        for (M = 1, I = $[0]; I >= 10; I /= 10, M++);
        M < it && (O -= it - M)
      }
      return L.e = O, L.c = $, L
    }
  }(), y.sum = function() {
    for (var l = 1, d = arguments, g = new y(d[0]); l < d.length;) g = g.plus(d[l++]);
    return g
  }, e = function() {
    var l = "0123456789";

    function d(g, P, T, O) {
      for (var N, I = [0], M, $ = 0, L = g.length; $ < L;) {
        for (M = I.length; M--; I[M] *= P);
        for (I[0] += O.indexOf(g.charAt($++)), N = 0; N < I.length; N++) I[N] > T - 1 && (I[N + 1] == null && (I[N + 1] = 0), I[N + 1] += I[N] / T | 0, I[N] %= T)
      }
      return I.reverse()
    }
    return function(g, P, T, O, N) {
      var I, M, $, L, z, et, nt, _t, vt = g.indexOf("."),
        Pt = o,
        dt = u;
      for (vt >= 0 && (L = k, k = 0, g = g.replace(".", ""), _t = new y(P), et = _t.pow(g.length - vt), k = L, _t.c = d(de(te(et.c), et.e, "0"), 10, T, l), _t.e = _t.c.length), nt = d(g, P, T, N ? (I = w, l) : (I = l, w)), $ = L = nt.length; nt[--L] == 0; nt.pop());
      if (!nt[0]) return I.charAt(0);
      if (vt < 0 ? --$ : (et.c = nt, et.e = $, et.s = O, et = t(et, _t, Pt, dt, T), nt = et.c, z = et.r, $ = et.e), M = $ + Pt + 1, vt = nt[M], L = T / 2, z = z || M < 0 || nt[M + 1] != null, z = dt < 4 ? (vt != null || z) && (dt == 0 || dt == (et.s < 0 ? 3 : 2)) : vt > L || vt == L && (dt == 4 || z || dt == 6 && nt[M - 1] & 1 || dt == (et.s < 0 ? 8 : 7)), M < 1 || !nt[0]) g = z ? de(I.charAt(1), -Pt, I.charAt(0)) : I.charAt(0);
      else {
        if (nt.length = M, z)
          for (--T; ++nt[--M] > T;) nt[M] = 0, M || (++$, nt = [1].concat(nt));
        for (L = nt.length; !nt[--L];);
        for (vt = 0, g = ""; vt <= L; g += I.charAt(nt[vt++]));
        g = de(g, $, I.charAt(0))
      }
      return g
    }
  }(), t = function() {
    function l(P, T, O) {
      var N, I, M, $, L = 0,
        z = P.length,
        et = T % me,
        nt = T / me | 0;
      for (P = P.slice(); z--;) M = P[z] % me, $ = P[z] / me | 0, N = nt * M + $ * et, I = et * M + N % me * me + L, L = (I / O | 0) + (N / me | 0) + nt * $, P[z] = I % O;
      return L && (P = [L].concat(P)), P
    }

    function d(P, T, O, N) {
      var I, M;
      if (O != N) M = O > N ? 1 : -1;
      else
        for (I = M = 0; I < O; I++)
          if (P[I] != T[I]) {
            M = P[I] > T[I] ? 1 : -1;
            break
          } return M
    }

    function g(P, T, O, N) {
      for (var I = 0; O--;) P[O] -= I, I = P[O] < T[O] ? 1 : 0, P[O] = I * N + P[O] - T[O];
      for (; !P[0] && P.length > 1; P.splice(0, 1));
    }
    return function(P, T, O, N, I) {
      var M, $, L, z, et, nt, _t, vt, Pt, dt, ht, Dt, Oe, Ue, We, qt, Ae, Vt = P.s == T.s ? 1 : -1,
        Nt = P.c,
        At = T.c;
      if (!Nt || !Nt[0] || !At || !At[0]) return new y(!P.s || !T.s || (Nt ? At && Nt[0] == At[0] : !At) ? NaN : Nt && Nt[0] == 0 || !At ? Vt * 0 : Vt / 0);
      for (vt = new y(Vt), Pt = vt.c = [], $ = P.e - T.e, Vt = O + $ + 1, I || (I = ie, $ = ne(P.e / it) - ne(T.e / it), Vt = Vt / it | 0), L = 0; At[L] == (Nt[L] || 0); L++);
      if (At[L] > (Nt[L] || 0) && $--, Vt < 0) Pt.push(1), z = !0;
      else {
        for (Ue = Nt.length, qt = At.length, L = 0, Vt += 2, et = ee(I / (At[0] + 1)), et > 1 && (At = l(At, et, I), Nt = l(Nt, et, I), qt = At.length, Ue = Nt.length), Oe = qt, dt = Nt.slice(0, qt), ht = dt.length; ht < qt; dt[ht++] = 0);
        Ae = At.slice(), Ae = [0].concat(Ae), We = At[0], At[1] >= I / 2 && We++;
        do {
          if (et = 0, M = d(At, dt, qt, ht), M < 0) {
            if (Dt = dt[0], qt != ht && (Dt = Dt * I + (dt[1] || 0)), et = ee(Dt / We), et > 1)
              for (et >= I && (et = I - 1), nt = l(At, et, I), _t = nt.length, ht = dt.length; d(nt, dt, _t, ht) == 1;) et--, g(nt, qt < _t ? Ae : At, _t, I), _t = nt.length, M = 1;
            else et == 0 && (M = et = 1), nt = At.slice(), _t = nt.length;
            if (_t < ht && (nt = [0].concat(nt)), g(dt, nt, ht, I), ht = dt.length, M == -1)
              for (; d(At, dt, qt, ht) < 1;) et++, g(dt, qt < ht ? Ae : At, ht, I), ht = dt.length
          } else M === 0 && (et++, dt = [0]);
          Pt[L++] = et, dt[0] ? dt[ht++] = Nt[Oe] || 0 : (dt = [Nt[Oe]], ht = 1)
        } while ((Oe++ < Ue || dt[0] != null) && Vt--);
        z = dt[0] != null, Pt[0] || Pt.splice(0, 1)
      }
      if (I == ie) {
        for (L = 1, Vt = Pt[0]; Vt >= 10; Vt /= 10, L++);
        K(vt, O + (vt.e = L + $ * it - 1) + 1, N, z)
      } else vt.e = $, vt.r = +z;
      return vt
    }
  }();

  function v(l, d, g, P) {
    var T, O, N, I, M;
    if (g == null ? g = u : Ct(g, 0, 8), !l.c) return l.toString();
    if (T = l.c[0], N = l.e, d == null) M = te(l.c), M = P == 1 || P == 2 && (N <= _ || N >= h) ? pn(M, N) : de(M, N, "0");
    else if (l = K(new y(l), d, g), O = l.e, M = te(l.c), I = M.length, P == 1 || P == 2 && (d <= O || O <= _)) {
      for (; I < d; M += "0", I++);
      M = pn(M, O)
    } else if (d -= N, M = de(M, O, "0"), O + 1 > I) {
      if (--d > 0)
        for (M += "."; d--; M += "0");
    } else if (d += O - I, d > 0)
      for (O + 1 == I && (M += "."); d--; M += "0");
    return l.s < 0 && T ? "-" + M : M
  }

  function m(l, d) {
    for (var g, P, T = 1, O = new y(l[0]); T < l.length; T++) P = new y(l[T]), (!P.s || (g = Ie(O, P)) === d || g === 0 && O.s === d) && (O = P);
    return O
  }

  function F(l, d, g) {
    for (var P = 1, T = d.length; !d[--T]; d.pop());
    for (T = d[0]; T >= 10; T /= 10, P++);
    return (g = P + g * it - 1) > C ? l.c = l.e = null : g < p ? l.c = [l.e = 0] : (l.e = g, l.c = d), l
  }
  s = function() {
    var l = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      d = /^([^.]+)\.$/,
      g = /^\.([^.]+)$/,
      P = /^-?(Infinity|NaN)$/,
      T = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(O, N, I, M) {
      var $, L = I ? N : N.replace(T, "");
      if (P.test(L)) O.s = isNaN(L) ? null : L < 0 ? -1 : 1;
      else {
        if (!I && (L = L.replace(l, function(z, et, nt) {
            return $ = (nt = nt.toLowerCase()) == "x" ? 16 : nt == "b" ? 2 : 8, !M || M == $ ? et : z
          }), M && ($ = M, L = L.replace(d, "$1").replace(g, "0.$1")), N != L)) return new y(L, $);
        if (y.DEBUG) throw Error(Jt + "Not a" + (M ? " base " + M : "") + " number: " + N);
        O.s = null
      }
      O.c = O.e = null
    }
  }();

  function K(l, d, g, P) {
    var T, O, N, I, M, $, L, z = l.c,
      et = Zn;
    if (z) {
      t: {
        for (T = 1, I = z[0]; I >= 10; I /= 10, T++);
        if (O = d - T, O < 0) O += it,
        N = d,
        M = z[$ = 0],
        L = ee(M / et[T - N - 1] % 10);
        else if ($ = Xn((O + 1) / it), $ >= z.length)
          if (P) {
            for (; z.length <= $; z.push(0));
            M = L = 0, T = 1, O %= it, N = O - it + 1
          } else break t;
        else {
          for (M = I = z[$], T = 1; I >= 10; I /= 10, T++);
          O %= it, N = O - it + T, L = N < 0 ? 0 : ee(M / et[T - N - 1] % 10)
        }
        if (P = P || d < 0 || z[$ + 1] != null || (N < 0 ? M : M % et[T - N - 1]), P = g < 4 ? (L || P) && (g == 0 || g == (l.s < 0 ? 3 : 2)) : L > 5 || L == 5 && (g == 4 || P || g == 6 && (O > 0 ? N > 0 ? M / et[T - N] : 0 : z[$ - 1]) % 10 & 1 || g == (l.s < 0 ? 8 : 7)), d < 1 || !z[0]) return z.length = 0,
        P ? (d -= l.e + 1, z[0] = et[(it - d % it) % it], l.e = -d || 0) : z[0] = l.e = 0,
        l;
        if (O == 0 ? (z.length = $, I = 1, $--) : (z.length = $ + 1, I = et[it - O], z[$] = N > 0 ? ee(M / et[T - N] % et[N]) * I : 0), P)
          for (;;)
            if ($ == 0) {
              for (O = 1, N = z[0]; N >= 10; N /= 10, O++);
              for (N = z[0] += I, I = 1; N >= 10; N /= 10, I++);
              O != I && (l.e++, z[0] == ie && (z[0] = 1));
              break
            } else {
              if (z[$] += I, z[$] != ie) break;
              z[$--] = 0, I = 1
            } for (O = z.length; z[--O] === 0; z.pop());
      }
      l.e > C ? l.c = l.e = null : l.e < p && (l.c = [l.e = 0])
    }
    return l
  }

  function B(l) {
    var d, g = l.e;
    return g === null ? l.toString() : (d = te(l.c), d = g <= _ || g >= h ? pn(d, g) : de(d, g, "0"), l.s < 0 ? "-" + d : d)
  }
  return r.absoluteValue = r.abs = function() {
    var l = new y(this);
    return l.s < 0 && (l.s = 1), l
  }, r.comparedTo = function(l, d) {
    return Ie(this, new y(l, d))
  }, r.decimalPlaces = r.dp = function(l, d) {
    var g, P, T, O = this;
    if (l != null) return Ct(l, 0, Ft), d == null ? d = u : Ct(d, 0, 8), K(new y(O), l + O.e + 1, d);
    if (!(g = O.c)) return null;
    if (P = ((T = g.length - 1) - ne(this.e / it)) * it, T = g[T])
      for (; T % 10 == 0; T /= 10, P--);
    return P < 0 && (P = 0), P
  }, r.dividedBy = r.div = function(l, d) {
    return t(this, new y(l, d), o, u)
  }, r.dividedToIntegerBy = r.idiv = function(l, d) {
    return t(this, new y(l, d), 0, 1)
  }, r.exponentiatedBy = r.pow = function(l, d) {
    var g, P, T, O, N, I, M, $, L, z = this;
    if (l = new y(l), l.c && !l.isInteger()) throw Error(Jt + "Exponent not an integer: " + B(l));
    if (d != null && (d = new y(d)), I = l.e > 14, !z.c || !z.c[0] || z.c[0] == 1 && !z.e && z.c.length == 1 || !l.c || !l.c[0]) return L = new y(Math.pow(+B(z), I ? l.s * (2 - _n(l)) : +B(l))), d ? L.mod(d) : L;
    if (M = l.s < 0, d) {
      if (d.c ? !d.c[0] : !d.s) return new y(NaN);
      P = !M && z.isInteger() && d.isInteger(), P && (z = z.mod(d))
    } else {
      if (l.e > 9 && (z.e > 0 || z.e < -1 || (z.e == 0 ? z.c[0] > 1 || I && z.c[1] >= 24e7 : z.c[0] < 8e13 || I && z.c[0] <= 9999975e7))) return O = z.s < 0 && _n(l) ? -0 : 0, z.e > -1 && (O = 1 / O), new y(M ? 1 / O : O);
      k && (O = Xn(k / it + 2))
    }
    for (I ? (g = new y(.5), M && (l.s = 1), $ = _n(l)) : (T = Math.abs(+B(l)), $ = T % 2), L = new y(i);;) {
      if ($) {
        if (L = L.times(z), !L.c) break;
        O ? L.c.length > O && (L.c.length = O) : P && (L = L.mod(d))
      }
      if (T) {
        if (T = ee(T / 2), T === 0) break;
        $ = T % 2
      } else if (l = l.times(g), K(l, l.e + 1, 1), l.e > 14) $ = _n(l);
      else {
        if (T = +B(l), T === 0) break;
        $ = T % 2
      }
      z = z.times(z), O ? z.c && z.c.length > O && (z.c.length = O) : P && (z = z.mod(d))
    }
    return P ? L : (M && (L = i.div(L)), d ? L.mod(d) : O ? K(L, k, u, N) : L)
  }, r.integerValue = function(l) {
    var d = new y(this);
    return l == null ? l = u : Ct(l, 0, 8), K(d, d.e + 1, l)
  }, r.isEqualTo = r.eq = function(l, d) {
    return Ie(this, new y(l, d)) === 0
  }, r.isFinite = function() {
    return !!this.c
  }, r.isGreaterThan = r.gt = function(l, d) {
    return Ie(this, new y(l, d)) > 0
  }, r.isGreaterThanOrEqualTo = r.gte = function(l, d) {
    return (d = Ie(this, new y(l, d))) === 1 || d === 0
  }, r.isInteger = function() {
    return !!this.c && ne(this.e / it) > this.c.length - 2
  }, r.isLessThan = r.lt = function(l, d) {
    return Ie(this, new y(l, d)) < 0
  }, r.isLessThanOrEqualTo = r.lte = function(l, d) {
    return (d = Ie(this, new y(l, d))) === -1 || d === 0
  }, r.isNaN = function() {
    return !this.s
  }, r.isNegative = function() {
    return this.s < 0
  }, r.isPositive = function() {
    return this.s > 0
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0
  }, r.minus = function(l, d) {
    var g, P, T, O, N = this,
      I = N.s;
    if (l = new y(l, d), d = l.s, !I || !d) return new y(NaN);
    if (I != d) return l.s = -d, N.plus(l);
    var M = N.e / it,
      $ = l.e / it,
      L = N.c,
      z = l.c;
    if (!M || !$) {
      if (!L || !z) return L ? (l.s = -d, l) : new y(z ? N : NaN);
      if (!L[0] || !z[0]) return z[0] ? (l.s = -d, l) : new y(L[0] ? N : u == 3 ? -0 : 0)
    }
    if (M = ne(M), $ = ne($), L = L.slice(), I = M - $) {
      for ((O = I < 0) ? (I = -I, T = L) : ($ = M, T = z), T.reverse(), d = I; d--; T.push(0));
      T.reverse()
    } else
      for (P = (O = (I = L.length) < (d = z.length)) ? I : d, I = d = 0; d < P; d++)
        if (L[d] != z[d]) {
          O = L[d] < z[d];
          break
        } if (O && (T = L, L = z, z = T, l.s = -l.s), d = (P = z.length) - (g = L.length), d > 0)
      for (; d--; L[g++] = 0);
    for (d = ie - 1; P > I;) {
      if (L[--P] < z[P]) {
        for (g = P; g && !L[--g]; L[g] = d);
        --L[g], L[P] += ie
      }
      L[P] -= z[P]
    }
    for (; L[0] == 0; L.splice(0, 1), --$);
    return L[0] ? F(l, L, $) : (l.s = u == 3 ? -1 : 1, l.c = [l.e = 0], l)
  }, r.modulo = r.mod = function(l, d) {
    var g, P, T = this;
    return l = new y(l, d), !T.c || !l.s || l.c && !l.c[0] ? new y(NaN) : !l.c || T.c && !T.c[0] ? new y(T) : (A == 9 ? (P = l.s, l.s = 1, g = t(T, l, 0, 3), l.s = P, g.s *= P) : g = t(T, l, 0, A), l = T.minus(g.times(l)), !l.c[0] && A == 1 && (l.s = T.s), l)
  }, r.multipliedBy = r.times = function(l, d) {
    var g, P, T, O, N, I, M, $, L, z, et, nt, _t, vt, Pt, dt = this,
      ht = dt.c,
      Dt = (l = new y(l, d)).c;
    if (!ht || !Dt || !ht[0] || !Dt[0]) return !dt.s || !l.s || ht && !ht[0] && !Dt || Dt && !Dt[0] && !ht ? l.c = l.e = l.s = null : (l.s *= dt.s, !ht || !Dt ? l.c = l.e = null : (l.c = [0], l.e = 0)), l;
    for (P = ne(dt.e / it) + ne(l.e / it), l.s *= dt.s, M = ht.length, z = Dt.length, M < z && (_t = ht, ht = Dt, Dt = _t, T = M, M = z, z = T), T = M + z, _t = []; T--; _t.push(0));
    for (vt = ie, Pt = me, T = z; --T >= 0;) {
      for (g = 0, et = Dt[T] % Pt, nt = Dt[T] / Pt | 0, N = M, O = T + N; O > T;) $ = ht[--N] % Pt, L = ht[N] / Pt | 0, I = nt * $ + L * et, $ = et * $ + I % Pt * Pt + _t[O] + g, g = ($ / vt | 0) + (I / Pt | 0) + nt * L, _t[O--] = $ % vt;
      _t[O] = g
    }
    return g ? ++P : _t.splice(0, 1), F(l, _t, P)
  }, r.negated = function() {
    var l = new y(this);
    return l.s = -l.s || null, l
  }, r.plus = function(l, d) {
    var g, P = this,
      T = P.s;
    if (l = new y(l, d), d = l.s, !T || !d) return new y(NaN);
    if (T != d) return l.s = -d, P.minus(l);
    var O = P.e / it,
      N = l.e / it,
      I = P.c,
      M = l.c;
    if (!O || !N) {
      if (!I || !M) return new y(T / 0);
      if (!I[0] || !M[0]) return M[0] ? l : new y(I[0] ? P : T * 0)
    }
    if (O = ne(O), N = ne(N), I = I.slice(), T = O - N) {
      for (T > 0 ? (N = O, g = M) : (T = -T, g = I), g.reverse(); T--; g.push(0));
      g.reverse()
    }
    for (T = I.length, d = M.length, T - d < 0 && (g = M, M = I, I = g, d = T), T = 0; d;) T = (I[--d] = I[d] + M[d] + T) / ie | 0, I[d] = ie === I[d] ? 0 : I[d] % ie;
    return T && (I = [T].concat(I), ++N), F(l, I, N)
  }, r.precision = r.sd = function(l, d) {
    var g, P, T, O = this;
    if (l != null && l !== !!l) return Ct(l, 1, Ft), d == null ? d = u : Ct(d, 0, 8), K(new y(O), l, d);
    if (!(g = O.c)) return null;
    if (T = g.length - 1, P = T * it + 1, T = g[T]) {
      for (; T % 10 == 0; T /= 10, P--);
      for (T = g[0]; T >= 10; T /= 10, P++);
    }
    return l && O.e + 1 > P && (P = O.e + 1), P
  }, r.shiftedBy = function(l) {
    return Ct(l, -Yn, Yn), this.times("1e" + l)
  }, r.squareRoot = r.sqrt = function() {
    var l, d, g, P, T, O = this,
      N = O.c,
      I = O.s,
      M = O.e,
      $ = o + 4,
      L = new y("0.5");
    if (I !== 1 || !N || !N[0]) return new y(!I || I < 0 && (!N || N[0]) ? NaN : N ? O : 1 / 0);
    if (I = Math.sqrt(+B(O)), I == 0 || I == 1 / 0 ? (d = te(N), (d.length + M) % 2 == 0 && (d += "0"), I = Math.sqrt(+d), M = ne((M + 1) / 2) - (M < 0 || M % 2), I == 1 / 0 ? d = "5e" + M : (d = I.toExponential(), d = d.slice(0, d.indexOf("e") + 1) + M), g = new y(d)) : g = new y(I + ""), g.c[0]) {
      for (M = g.e, I = M + $, I < 3 && (I = 0);;)
        if (T = g, g = L.times(T.plus(t(O, T, $, 1))), te(T.c).slice(0, I) === (d = te(g.c)).slice(0, I))
          if (g.e < M && --I, d = d.slice(I - 3, I + 1), d == "9999" || !P && d == "4999") {
            if (!P && (K(T, T.e + o + 2, 0), T.times(T).eq(O))) {
              g = T;
              break
            }
            $ += 4, I += 4, P = 1
          } else {
            (!+d || !+d.slice(1) && d.charAt(0) == "5") && (K(g, g.e + o + 2, 1), l = !g.times(g).eq(O));
            break
          }
    }
    return K(g, g.e + o + 1, u, l)
  }, r.toExponential = function(l, d) {
    return l != null && (Ct(l, 0, Ft), l++), v(this, l, d, 1)
  }, r.toFixed = function(l, d) {
    return l != null && (Ct(l, 0, Ft), l = l + this.e + 1), v(this, l, d)
  }, r.toFormat = function(l, d, g) {
    var P, T = this;
    if (g == null) l != null && d && typeof d == "object" ? (g = d, d = null) : l && typeof l == "object" ? (g = l, l = d = null) : g = f;
    else if (typeof g != "object") throw Error(Jt + "Argument not an object: " + g);
    if (P = T.toFixed(l, d), T.c) {
      var O, N = P.split("."),
        I = +g.groupSize,
        M = +g.secondaryGroupSize,
        $ = g.groupSeparator || "",
        L = N[0],
        z = N[1],
        et = T.s < 0,
        nt = et ? L.slice(1) : L,
        _t = nt.length;
      if (M && (O = I, I = M, M = O, _t -= O), I > 0 && _t > 0) {
        for (O = _t % I || I, L = nt.substr(0, O); O < _t; O += I) L += $ + nt.substr(O, I);
        M > 0 && (L += $ + nt.slice(O)), et && (L = "-" + L)
      }
      P = z ? L + (g.decimalSeparator || "") + ((M = +g.fractionGroupSize) ? z.replace(new RegExp("\\d{" + M + "}\\B", "g"), "$&" + (g.fractionGroupSeparator || "")) : z) : L
    }
    return (g.prefix || "") + P + (g.suffix || "")
  }, r.toFraction = function(l) {
    var d, g, P, T, O, N, I, M, $, L, z, et, nt = this,
      _t = nt.c;
    if (l != null && (I = new y(l), !I.isInteger() && (I.c || I.s !== 1) || I.lt(i))) throw Error(Jt + "Argument " + (I.isInteger() ? "out of range: " : "not an integer: ") + B(I));
    if (!_t) return new y(nt);
    for (d = new y(i), $ = g = new y(i), P = M = new y(i), et = te(_t), O = d.e = et.length - nt.e - 1, d.c[0] = Zn[(N = O % it) < 0 ? it + N : N], l = !l || I.comparedTo(d) > 0 ? O > 0 ? d : $ : I, N = C, C = 1 / 0, I = new y(et), M.c[0] = 0; L = t(I, d, 0, 1), T = g.plus(L.times(P)), T.comparedTo(l) != 1;) g = P, P = T, $ = M.plus(L.times(T = $)), M = T, d = I.minus(L.times(T = d)), I = T;
    return T = t(l.minus(g), P, 0, 1), M = M.plus(T.times($)), g = g.plus(T.times(P)), M.s = $.s = nt.s, O = O * 2, z = t($, P, O, u).minus(nt).abs().comparedTo(t(M, g, O, u).minus(nt).abs()) < 1 ? [$, P] : [M, g], C = N, z
  }, r.toNumber = function() {
    return +B(this)
  }, r.toPrecision = function(l, d) {
    return l != null && Ct(l, 1, Ft), v(this, l, d, 2)
  }, r.toString = function(l) {
    var d, g = this,
      P = g.s,
      T = g.e;
    return T === null ? P ? (d = "Infinity", P < 0 && (d = "-" + d)) : d = "NaN" : (l == null ? d = T <= _ || T >= h ? pn(te(g.c), T) : de(te(g.c), T, "0") : l === 10 && j ? (g = K(new y(g), o + T + 1, u), d = de(te(g.c), g.e, "0")) : (Ct(l, 2, w.length, "Base"), d = e(de(te(g.c), T, "0"), 10, l, P, !0)), P < 0 && g.c[0] && (d = "-" + d)), d
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
var Zs = Kr();
const _l = Object.freeze(Object.defineProperty({
    __proto__: null,
    BigNumber: Zs,
    default: Zs
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  ys = _r(_l);
var Br = tt && tt.__importDefault || function(n) {
  return n && n.__esModule ? n : {
    default: n
  }
};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.WalletV3Account = void 0;
const pl = ve,
  Qe = Br(ys),
  _s = Br(Zt);
class vn {
  static async computeAddress(t) {
    await _s.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof Qe.default ? t.publicKey : new Qe.default(`0x${t.publicKey}`),
      s = qs(e).hash;
    return new pl.Address(`${t.workchain!=null?t.workchain:0}:${s}`)
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
    this.address = t
  }
  async fetchPublicKey(t) {
    let e = this.publicKey;
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(s => new Qe.default(`0x${s}`))), e.toString(16).padStart(64, "0")
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
      walletId: Ur,
      expireAt: u,
      seqno: s,
      flags: 3,
      message: h
    }, C = e.packIntoCell({
      structure: xr,
      data: p
    }).hash, b = await o.sign(C, t.signatureId), {
      signatureParts: A
    } = e.extendSignature(b);
    p.signatureHigh = A.high, p.signatureLow = A.low;
    const k = e.packIntoCell({
      structure: hl,
      data: p
    }).boc;
    return e.createRawExternalMessage({
      address: this.address,
      body: k,
      stateInit: i,
      expireAt: u
    })
  }
  async fetchState(t) {
    let e, s;
    const r = await t.getFullContractState(this.address);
    if (r == null || !r.isDeployed) {
      if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
      e = qs(this.publicKey).boc, s = {
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
Fn.WalletV3Account = vn;
const fl = (n, t) => {
    const e = n.unpackFromCell({
      structure: zr,
      boc: t,
      allowPartial: !1
    });
    if (typeof e != "object" || typeof e.seqno != "string" || typeof e.publicKey != "string") throw new Error("Invalid contract data ");
    return {
      seqno: parseInt(e.seqno),
      publicKey: new Qe.default(e.publicKey)
    }
  },
  qs = n => {
    const t = _s.default.nekoton.packIntoCell(zr, {
      seqno: 0,
      walletId: Ur,
      publicKey: n.toFixed(0)
    }).boc;
    return _s.default.nekoton.mergeTvc(gl, t)
  },
  xr = [{
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
  }, ...xr],
  zr = [{
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
  Ur = 1269378442;
var Nn = {},
  Wr = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.HighloadWalletV2 = void 0;
const bl = ve,
  Je = Wr(ys),
  ps = Wr(Zt),
  ml = Ht;
class An {
  static async computeAddress(t) {
    await ps.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof Je.default ? t.publicKey : new Je.default(`0x${t.publicKey}`),
      s = tr(e).hash;
    return new bl.Address(`${t.workchain!=null?t.workchain:0}:${s}`)
  }
  static async fromPubkey(t) {
    const e = new Je.default(`0x${t.publicKey}`),
      s = await An.computeAddress({
        publicKey: e,
        workchain: t.workchain
      }),
      r = new An(s);
    return r.publicKey = e, r
  }
  constructor(t) {
    this.address = (0, ml.convertToAddressObject)(t)
  }
  async fetchPublicKey(t) {
    let e = this.publicKey;
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(s => new Je.default(`0x${s}`))), e.toString(16).padStart(64, "0")
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
      structure: Gr,
      data: h
    });
    h.walletId = Qr, h.expireAt = o, h.messagesHash = `0x${C.slice(-8)}`;
    const b = e.packIntoCell({
        structure: Hr,
        data: h
      }).hash,
      A = await i.sign(b, t.signatureId),
      {
        signatureParts: k
      } = e.extendSignature(A);
    h.signatureHigh = k.high, h.signatureLow = k.low;
    const f = e.packIntoCell({
      structure: yl,
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
      e = tr(this.publicKey).boc, s = this.publicKey
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
Nn.HighloadWalletV2 = An;
const wl = (n, t) => {
    const e = n.unpackFromCell({
      structure: Vr,
      boc: t,
      allowPartial: !0
    });
    if (typeof e != "object" || typeof e.publicKey != "string") throw new Error("Invalid contract data");
    return {
      publicKey: new Je.default(e.publicKey)
    }
  },
  tr = n => {
    const t = ps.default.nekoton.packIntoCell(Vr, {
      walletId: Qr,
      lastCleaned: 0,
      publicKey: n.toFixed(0),
      queries: !1
    }).boc;
    return ps.default.nekoton.mergeTvc(vl, t)
  },
  Gr = [{
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
  Hr = [{
    name: "walletId",
    type: "uint32"
  }, {
    name: "expireAt",
    type: "uint32"
  }, {
    name: "messagesHash",
    type: "uint32"
  }, ...Gr],
  yl = [{
    name: "signatureHigh",
    type: "uint256"
  }, {
    name: "signatureLow",
    type: "uint256"
  }, ...Hr],
  Vr = [{
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
  Qr = 0;
var $n = {},
  Jr = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.EverWalletAccount = void 0;
const Al = ve,
  He = Jr(ys),
  kn = Jr(Zt);
class In {
  static async computeAddress(t) {
    await kn.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof He.default ? t.publicKey : new He.default(`0x${t.publicKey}`),
      s = er(e, t.nonce).hash;
    return new Al.Address(`${t.workchain!=null?t.workchain:0}:${s}`)
  }
  static async fromPubkey(t) {
    const e = new He.default(`0x${t.publicKey}`),
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
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(s => new He.default(`0x${s}`)), this.isDeployed = !0), e.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, e) {
    const {
      publicKey: s,
      stateInit: r
    } = await this.fetchState(e), i = await e.getSigner(s), o = t.payload ? e.encodeInternalInput(t.payload) : "";
    let u, _, h;
    return t.stateInit == null ? (u = Cl, _ = "sendTransaction", h = {
      dest: t.recipient,
      value: t.amount,
      bounce: t.bounce,
      flags: 3,
      payload: o
    }) : (u = Tl, _ = "sendTransactionRaw", h = {
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
        e = er(this.publicKey, this.nonce).boc, s = this.publicKey
      } else this.isDeployed = !0, s = new He.default(`0x${kn.default.nekoton.extractPublicKey(r.boc)}`);
      this.publicKey == null && (this.publicKey = s)
    }
    return {
      publicKey: s.toString(16).padStart(64, "0"),
      stateInit: e
    }
  }
}
$n.EverWalletAccount = In;
const er = (n, t) => {
    let e, s;
    t != null ? (e = Il, s = {
      publicKey: n.toFixed(0),
      timestamp: 0,
      nonce: t
    }) : (e = kl, s = {
      publicKey: n.toFixed(0),
      timestamp: 0
    });
    const r = kn.default.nekoton.packIntoCell(e, s).boc;
    return kn.default.nekoton.mergeTvc(Sl, r)
  },
  kl = [{
    name: "publicKey",
    type: "uint256"
  }, {
    name: "timestamp",
    type: "uint64"
  }],
  Il = [{
    name: "publicKey",
    type: "uint256"
  }, {
    name: "timestamp",
    type: "uint64"
  }, {
    name: "nonce",
    type: "uint32"
  }],
  Sl = "te6cckEBBgEA/AABFP8A9KQT9LzyyAsBAgEgAgMABNIwAubycdcBAcAA8nqDCNcY7UTQgwfXAdcLP8j4KM8WI88WyfkAA3HXAQHDAJqDB9cBURO68uBk3oBA1wGAINcBgCDXAVQWdfkQ8qj4I7vyeWa++COBBwiggQPoqFIgvLHydAIgghBM7mRsuuMPAcjL/8s/ye1UBAUAmDAC10zQ+kCDBtcBcdcBeNcB10z4AHCAEASqAhSxyMsFUAXPFlAD+gLLaSLQIc8xIddJoIQJuZgzcAHLAFjPFpcwcQHLABLM4skB+wAAPoIQFp4+EbqOEfgAApMg10qXeNcB1AL7AOjRkzLyPOI+zYS/",
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
  var e = Ln;
  Object.defineProperty(n, "GiverAccount", {
    enumerable: !0,
    get: function() {
      return e.GiverAccount
    }
  });
  var s = xe;
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
  var o = $n;
  Object.defineProperty(n, "EverWalletAccount", {
    enumerable: !0,
    get: function() {
      return o.EverWalletAccount
    }
  });
  class u {
    constructor(p, C, b, A) {
      this.clock = p, this.connectionController = C, this.nekoton = b, this.keystore = A
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
        const b = await p.signer.sign(C.hash, p.signatureId);
        return C.sign(b)
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
})(ds);
var jn = {};
Object.defineProperty(jn, "__esModule", {
  value: !0
});
jn.ConnectionFactory = void 0;
class El {}
jn.ConnectionFactory = El;
var Kn = {},
  Pl = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Kn, "__esModule", {
  value: !0
});
Kn.SimpleKeystore = void 0;
const Xr = Pl(Zt);
class vs {
  constructor(t = {}) {
    this.signers = new Map, this.signersByPublicKey = new Map;
    for (const [e, s] of Object.entries(t)) this.addKeyPair(e, s)
  }
  static generateKeyPair() {
    return Xr.default.nekoton.ed25519_generateKeyPair()
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
    const s = vs.generateKeyPair(),
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
Kn.SimpleKeystore = vs;
class Ml {
  constructor(t) {
    this.keyPair = t, this.publicKey = this.keyPair.publicKey
  }
  async sign(t, e) {
    return Xr.default.nekoton.ed25519_sign(this.keyPair.secretKey, t, e)
  }
}
var Bn = {};
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
Bn.Clock = void 0;
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
Bn.Clock = Ol;
(function(n) {
  var t = tt && tt.__createBinding || (Object.create ? function(S, a, E, R) {
      R === void 0 && (R = E);
      var x = Object.getOwnPropertyDescriptor(a, E);
      (!x || ("get" in x ? !a.__esModule : x.writable || x.configurable)) && (x = {
        enumerable: !0,
        get: function() {
          return a[E]
        }
      }), Object.defineProperty(S, R, x)
    } : function(S, a, E, R) {
      R === void 0 && (R = E), S[R] = a[E]
    }),
    e = tt && tt.__exportStar || function(S, a) {
      for (var E in S) E !== "default" && !Object.prototype.hasOwnProperty.call(a, E) && t(a, S, E)
    },
    s = tt && tt.__importDefault || function(S) {
      return S && S.__esModule ? S : {
        default: S
      }
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.EverscaleStandaloneClient = n.SUPPORTED_PERMISSIONS = n.VERSION = n.Clock = n.SimpleKeystore = n.checkConnection = n.ConnectionError = n.NETWORK_PRESETS = void 0;
  const r = s(Oc),
    i = s(Zt),
    o = Ht,
    u = bn,
    _ = Rn,
    h = ds;
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
  }), e(ds, n);
  var b = Kn;
  Object.defineProperty(n, "SimpleKeystore", {
    enumerable: !0,
    get: function() {
      return b.SimpleKeystore
    }
  });
  var A = Bn;
  Object.defineProperty(n, "Clock", {
    enumerable: !0,
    get: function() {
      return A.Clock
    }
  });

  function k(S) {
    const a = S || {};
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
      const E = {},
        R = (G, st) => {
          var Z;
          (Z = E.client) === null || Z === void 0 || Z.emit(G, st)
        },
        x = new i.default.nekoton.ClockWithOffset;
      a.clock != null && (a.clock.impls.push(x), x.updateOffset(a.clock.offset));
      try {
        const G = a.connection != null ? await (0, u.createConnectionController)(x, a.connection) : void 0,
          st = G != null ? new _.SubscriptionController(G, R) : void 0,
          Z = new f({
            permissions: {},
            connectionController: G,
            subscriptionController: st,
            properties: {
              message: k(a.message)
            },
            keystore: a.keystore,
            accountsStorage: a.accountsStorage,
            clock: x,
            notify: R
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
        changeAccount: j,
        disconnect: y,
        subscribe: v,
        unsubscribe: m,
        unsubscribeAll: F,
        getProviderState: K,
        getFullContractState: B,
        computeStorageFee: l,
        getAccountsByCodeHash: d,
        getTransactions: g,
        getTransaction: P,
        findTransaction: T,
        runLocal: O,
        executeLocal: N,
        getExpectedAddress: I,
        getContractFields: M,
        unpackInitData: $,
        getBocHash: L,
        packIntoCell: z,
        unpackFromCell: et,
        extractPublicKey: nt,
        codeToTvc: _t,
        mergeTvc: vt,
        splitTvc: Pt,
        setCodeSalt: dt,
        getCodeSalt: ht,
        encodeInternalInput: Dt,
        decodeInput: Oe,
        decodeOutput: Ue,
        decodeEvent: We,
        decodeTransaction: qt,
        decodeTransactionEvents: Ae,
        verifySignature: Vt,
        sendUnsignedExternalMessage: Nt,
        signData: At,
        signDataRaw: Yr,
        sendMessage: Zr,
        sendMessageDelayed: qr,
        sendExternalMessage: ti,
        sendExternalMessageDelayed: ei
      }, this.setPollingInterval = E => {
        var R;
        if (this._context.connectionController == null || this._context.subscriptionController == null) throw Error("Connection was not initialized");
        (R = this._context.subscriptionController) === null || R === void 0 || R.setPollingInterval(E)
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
  n.EverscaleStandaloneClient = f;
  const w = async (S, a) => {
    lt(a);
    const {
      permissions: E
    } = a.params;
    xn(a, a.params, "permissions");
    const R = {
      ...S.permissions
    };
    for (const G of E)
      if (G === "basic" || G === "tonClient") R.basic = !0;
      else if (G === "accountInteraction") {
      if (R.accountInteraction != null) continue;
      R.accountInteraction = await ks(a, S)
    } else throw Q(a, `Permission '${G}' is not supported by standalone provider`);
    S.permissions = R;
    const x = JSON.parse(JSON.stringify(R));
    return S.notify("permissionsChanged", {
      permissions: x
    }), x
  }, j = async (S, a) => {
    on(a, S);
    const E = {
      ...S.permissions
    };
    E.accountInteraction = await ks(a, S), S.permissions = E;
    const R = JSON.parse(JSON.stringify(E));
    return S.notify("permissionsChanged", {
      permissions: R
    }), R
  }, y = async (S, a) => {
    var E;
    S.permissions = {}, await ((E = S.subscriptionController) === null || E === void 0 ? void 0 : E.unsubscribeFromAllContracts()), S.notify("permissionsChanged", {
      permissions: {}
    })
  }, v = async (S, a) => {
    lt(a), $t(a, S);
    const {
      address: E,
      subscriptions: R
    } = a.params;
    q(a, a.params, "address"), cn(a, a.params, "subscriptions");
    let x;
    try {
      x = i.default.nekoton.repackAddress(E)
    } catch (G) {
      throw Q(a, G.toString())
    }
    try {
      return await S.subscriptionController.subscribeToContract(x, R)
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, m = async (S, a) => {
    lt(a), $t(a, S);
    const {
      address: E
    } = a.params;
    q(a, a.params, "address");
    let R;
    try {
      R = i.default.nekoton.repackAddress(E)
    } catch (x) {
      throw Q(a, x.toString())
    }
    await S.subscriptionController.unsubscribeFromContract(R)
  }, F = async (S, a) => {
    var E;
    await ((E = S.subscriptionController) === null || E === void 0 ? void 0 : E.unsubscribeFromAllContracts())
  }, K = async (S, a) => {
    var E, R;
    const x = (E = S.connectionController) === null || E === void 0 ? void 0 : E.initializedTransport,
      G = n.VERSION;
    return {
      version: G,
      numericVersion: (0, o.convertVersionToInt32)(G),
      networkId: x != null ? x.id : 0,
      selectedConnection: x != null ? x.group : "",
      supportedPermissions: [...n.SUPPORTED_PERMISSIONS],
      permissions: JSON.parse(JSON.stringify(S.permissions)),
      subscriptions: ((R = S.subscriptionController) === null || R === void 0 ? void 0 : R.subscriptionStates) || {}
    }
  }, B = async (S, a) => {
    lt(a), $t(a, S);
    const {
      address: E
    } = a.params;
    q(a, a.params, "address");
    const {
      connectionController: R
    } = S;
    try {
      return R.use(async ({
        data: {
          transport: x
        }
      }) => ({
        state: await x.getFullContractState(E)
      }))
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, l = async (S, a) => {
    lt(a), $t(a, S);
    const {
      state: E,
      masterchain: R,
      timestamp: x
    } = a.params;
    ri(a, a.params, "state"), Ge(a, a.params, "masterchain"), ln(a, a.params, "timestamp");
    const {
      connectionController: G
    } = S;
    try {
      const st = await G.use(({
          data: {
            transport: ft
          }
        }) => ft.getBlockchainConfig()),
        Z = x ?? ~~(S.clock.nowMs / 1e3);
      return i.default.nekoton.computeStorageFee(st, E.boc, Z, R || !1)
    } catch (st) {
      throw Q(a, st.toString())
    }
  }, d = async (S, a) => {
    lt(a), $t(a, S);
    const {
      codeHash: E,
      limit: R,
      continuation: x
    } = a.params;
    q(a, a.params, "codeHash"), ln(a, a.params, "limit"), ue(a, a.params, "continuation");
    const {
      connectionController: G
    } = S;
    try {
      return G.use(({
        data: {
          transport: st
        }
      }) => st.getAccountsByCodeHash(E, R || 50, x))
    } catch (st) {
      throw Q(a, st.toString())
    }
  }, g = async (S, a) => {
    lt(a), $t(a, S);
    const {
      address: E,
      continuation: R,
      limit: x
    } = a.params;
    q(a, a.params, "address"), oe(a, a.params, "continuation", ni), ln(a, a.params, "limit");
    const {
      connectionController: G
    } = S;
    try {
      return G.use(({
        data: {
          transport: st
        }
      }) => st.getTransactions(E, R == null ? void 0 : R.lt, x || 50))
    } catch (st) {
      throw Q(a, st.toString())
    }
  }, P = async (S, a) => {
    lt(a), $t(a, S);
    const {
      hash: E
    } = a.params;
    q(a, a.params, "hash");
    const {
      connectionController: R
    } = S;
    try {
      return {
        transaction: await R.use(({
          data: {
            transport: x
          }
        }) => x.getTransaction(E))
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, T = async (S, a) => {
    lt(a), $t(a, S);
    const {
      inMessageHash: E
    } = a.params;
    oe(a, a.params, "inMessageHash", q);
    const {
      connectionController: R
    } = S;
    if (E == null) return {
      transaction: void 0
    };
    try {
      return {
        transaction: await R.use(({
          data: {
            transport: x
          }
        }) => x.getDstTransaction(E))
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, O = async (S, a) => {
    lt(a);
    const {
      address: E,
      cachedState: R,
      responsible: x,
      functionCall: G,
      withSignatureId: st
    } = a.params;
    q(a, a.params, "address"), oe(a, a.params, "cachedState", zn), Ge(a, a.params, "responsible"), Re(a, a.params, "functionCall"), un(a, a.params, "withSignatureId");
    let Z = R;
    if (Z == null && ($t(a, S), Z = await S.connectionController.use(async ({
        data: {
          transport: It
        }
      }) => It.getFullContractState(E))), Z == null) throw Q(a, "Account not found");
    if (!Z.isDeployed || Z.lastTransactionId == null) throw Q(a, "Account is not deployed");
    const ft = await le(a, S, st);
    try {
      const {
        output: It,
        code: St
      } = i.default.nekoton.runLocal(S.clock, Z.boc, G.abi, G.method, G.params, x || !1, ft);
      return {
        output: It,
        code: St
      }
    } catch (It) {
      throw Q(a, It.toString())
    }
  }, N = async (S, a) => {
    lt(a), $t(a, S);
    const {
      address: E,
      cachedState: R,
      stateInit: x,
      payload: G,
      executorParams: st,
      messageHeader: Z
    } = a.params;
    q(a, a.params, "address"), oe(a, a.params, "cachedState", zn), ue(a, a.params, "stateInit"), As(a, a.params, "payload"), cn(a, a.params, "executorParams"), ge(a, a.params, "messageHeader");
    const {
      clock: ft,
      connectionController: It
    } = S;
    let St;
    try {
      St = i.default.nekoton.repackAddress(E)
    } catch (gt) {
      throw Q(a, gt.toString())
    }
    const jt = ~~(ft.nowMs / 1e3),
      Qt = 60;
    let Ot;
    if (Z.type === "external")
      if (G == null || typeof G == "string") Ot = i.default.nekoton.createRawExternalMessage(St, x, G, jt + Qt).boc;
      else if (Z.withoutSignature === !0) Ot = i.default.nekoton.createExternalMessageWithoutSignature(ft, St, G.abi, G.method, x, G.params, Qt).boc;
    else {
      const gt = i.default.nekoton.createExternalMessage(ft, St, G.abi, G.method, x, G.params, Z.publicKey, Qt);
      try {
        if ((st == null ? void 0 : st.disableSignatureCheck) === !0) Ot = gt.signFake().boc;
        else {
          ke(a, S);
          const mt = await le(a, S),
            {
              keystore: yt
            } = S,
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
      q(a, Z, "sender"), q(a, Z, "amount"), be(a, Z, "bounce"), Ge(a, Z, "bounced");
      const gt = G == null ? void 0 : typeof G == "string" ? G : i.default.nekoton.encodeInternalInput(G.abi, G.method, G.params);
      Ot = i.default.nekoton.encodeInternalMessage(Z.sender, St, Z.bounce, x, gt, Z.amount)
    } else throw Q(a, "Unknown message type");
    try {
      const [gt, mt, yt] = await It.use(({
        data: {
          transport: kt
        }
      }) => Promise.all([R ?? kt.getFullContractState(St), kt.getBlockchainConfig(), kt.getNetworkDescription()])), Lt = i.default.nekoton.makeFullAccountBoc(gt == null ? void 0 : gt.boc), pt = st == null ? void 0 : st.overrideBalance, Rt = i.default.nekoton.executeLocal(mt, Lt, Ot, jt, (st == null ? void 0 : st.disableSignatureCheck) === !0, pt != null ? pt.toString() : void 0, yt.globalId);
      if (Rt.exitCode != null) throw new Error(`Contract did not accept the message. Exit code: ${Rt.exitCode}`);
      const zt = Rt,
        De = zt.transaction,
        Kt = i.default.nekoton.parseFullAccountBoc(zt.account);
      let Bt;
      try {
        if (typeof G == "object" && typeof G != null) {
          const kt = i.default.nekoton.decodeTransaction(zt.transaction, G.abi, G.method);
          Bt = kt == null ? void 0 : kt.output
        }
      } catch {}
      return {
        transaction: De,
        newState: Kt,
        output: Bt
      }
    } catch (gt) {
      throw Q(a, gt.toString())
    }
  }, I = async (S, a) => {
    lt(a);
    const {
      tvc: E,
      abi: R,
      workchain: x,
      publicKey: G,
      initParams: st
    } = a.params;
    q(a, a.params, "tvc"), q(a, a.params, "abi"), ln(a, a.params, "workchain"), ue(a, a.params, "publicKey");
    try {
      return i.default.nekoton.getExpectedAddress(E, R, x || 0, G, st)
    } catch (Z) {
      throw Q(a, Z.toString())
    }
  }, M = async (S, a) => {
    lt(a);
    const {
      address: E,
      abi: R,
      cachedState: x,
      allowPartial: G
    } = a.params;
    q(a, a.params, "address"), q(a, a.params, "abi"), oe(a, a.params, "cachedState", zn), be(a, a.params, "allowPartial");
    let st;
    try {
      st = i.default.nekoton.repackAddress(E)
    } catch (ft) {
      throw Q(a, ft.toString())
    }
    let Z = x;
    if (Z == null && ($t(a, S), Z = await S.connectionController.use(async ({
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
        fields: i.default.nekoton.unpackContractFields(R, Z.boc, G),
        state: Z
      }
    } catch (ft) {
      throw Q(a, ft.toString())
    }
  }, $ = async (S, a) => {
    lt(a);
    const {
      abi: E,
      data: R
    } = a.params;
    q(a, a.params, "abi"), q(a, a.params, "data");
    try {
      const {
        publicKey: x,
        data: G
      } = i.default.nekoton.unpackInitData(E, R);
      return {
        publicKey: x,
        initParams: G
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, L = async (S, a) => {
    lt(a);
    const {
      boc: E
    } = a.params;
    q(a, a.params, "boc");
    try {
      return {
        hash: i.default.nekoton.getBocHash(E)
      }
    } catch (R) {
      throw Q(a, R.toString())
    }
  }, z = async (S, a) => {
    lt(a);
    const {
      structure: E,
      data: R,
      abiVersion: x
    } = a.params;
    xn(a, a.params, "structure"), oe(a, a.params, "abiVersion", q);
    try {
      return i.default.nekoton.packIntoCell(E, R, x)
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, et = async (S, a) => {
    lt(a);
    const {
      structure: E,
      boc: R,
      allowPartial: x,
      abiVersion: G
    } = a.params;
    xn(a, a.params, "structure"), q(a, a.params, "boc"), be(a, a.params, "allowPartial"), oe(a, a.params, "abiVersion", q);
    try {
      return {
        data: i.default.nekoton.unpackFromCell(E, R, x, G)
      }
    } catch (st) {
      throw Q(a, st.toString())
    }
  }, nt = async (S, a) => {
    lt(a);
    const {
      boc: E
    } = a.params;
    q(a, a.params, "boc");
    try {
      return {
        publicKey: i.default.nekoton.extractPublicKey(E)
      }
    } catch (R) {
      throw Q(a, R.toString())
    }
  }, _t = async (S, a) => {
    lt(a);
    const {
      code: E
    } = a.params;
    q(a, a.params, "code");
    try {
      const {
        boc: R,
        hash: x
      } = i.default.nekoton.codeToTvc(E);
      return {
        tvc: R,
        hash: x
      }
    } catch (R) {
      throw Q(a, R.toString())
    }
  }, vt = async (S, a) => {
    lt(a);
    const {
      code: E,
      data: R
    } = a.params;
    q(a, a.params, "code"), q(a, a.params, "data");
    try {
      const {
        boc: x,
        hash: G
      } = i.default.nekoton.mergeTvc(E, R);
      return {
        tvc: x,
        hash: G
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, Pt = async (S, a) => {
    lt(a);
    const {
      tvc: E
    } = a.params;
    q(a, a.params, "tvc");
    try {
      return i.default.nekoton.splitTvc(E)
    } catch (R) {
      throw Q(a, R.toString())
    }
  }, dt = async (S, a) => {
    lt(a);
    const {
      code: E,
      salt: R
    } = a.params;
    q(a, a.params, "code"), q(a, a.params, "salt");
    try {
      const {
        boc: x,
        hash: G
      } = i.default.nekoton.setCodeSalt(E, R);
      return {
        code: x,
        hash: G
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, ht = async (S, a) => {
    lt(a);
    const {
      code: E
    } = a.params;
    q(a, a.params, "code");
    try {
      return {
        salt: i.default.nekoton.getCodeSalt(E)
      }
    } catch (R) {
      throw Q(a, R.toString())
    }
  }, Dt = async (S, a) => {
    lt(a), Re(a, a, "params");
    const {
      abi: E,
      method: R,
      params: x
    } = a.params;
    try {
      return {
        boc: i.default.nekoton.encodeInternalInput(E, R, x)
      }
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, Oe = async (S, a) => {
    lt(a);
    const {
      body: E,
      abi: R,
      method: x,
      internal: G
    } = a.params;
    q(a, a.params, "body"), q(a, a.params, "abi"), dn(a, a.params, "method"), be(a, a.params, "internal");
    try {
      return i.default.nekoton.decodeInput(E, R, x, G) || null
    } catch (st) {
      throw Q(a, st.toString())
    }
  }, Ue = async (S, a) => {
    lt(a);
    const {
      body: E,
      abi: R,
      method: x
    } = a.params;
    q(a, a.params, "body"), q(a, a.params, "abi"), dn(a, a.params, "method");
    try {
      return i.default.nekoton.decodeOutput(E, R, x) || null
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, We = async (S, a) => {
    lt(a);
    const {
      body: E,
      abi: R,
      event: x
    } = a.params;
    q(a, a.params, "body"), q(a, a.params, "abi"), dn(a, a.params, "event");
    try {
      return i.default.nekoton.decodeEvent(E, R, x) || null
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, qt = async (S, a) => {
    lt(a);
    const {
      transaction: E,
      abi: R,
      method: x
    } = a.params;
    q(a, a.params, "abi"), dn(a, a.params, "method");
    try {
      return i.default.nekoton.decodeTransaction(E, R, x) || null
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, Ae = async (S, a) => {
    lt(a);
    const {
      transaction: E,
      abi: R
    } = a.params;
    q(a, a.params, "abi");
    try {
      return {
        events: i.default.nekoton.decodeTransactionEvents(E, R)
      }
    } catch (x) {
      throw Q(a, x.toString())
    }
  }, Vt = async (S, a) => {
    lt(a);
    const {
      publicKey: E,
      dataHash: R,
      signature: x,
      withSignatureId: G
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "dataHash"), q(a, a.params, "signature"), un(a, a.params, "withSignatureId");
    const st = await le(a, S, G);
    try {
      return {
        isValid: i.default.nekoton.verifySignature(E, R, x, st)
      }
    } catch (Z) {
      throw Q(a, Z.toString())
    }
  }, Nt = async (S, a) => {
    lt(a), $t(a, S);
    const {
      recipient: E,
      stateInit: R,
      payload: x,
      local: G,
      executorParams: st
    } = a.params;
    q(a, a.params, "recipient"), ue(a, a.params, "stateInit"), As(a, a.params, "payload"), Ge(a, a.params, "local"), cn(a, a.params, "executorParams");
    let Z;
    try {
      Z = i.default.nekoton.repackAddress(E)
    } catch (pt) {
      throw Q(a, pt.toString())
    }
    const {
      clock: ft,
      subscriptionController: It,
      properties: St
    } = S, jt = pt => {
      try {
        if (typeof x == "string" || x == null) {
          const Rt = ~~(ft.nowMs / 1e3) + pt;
          return i.default.nekoton.createRawExternalMessage(Z, R, x, ~~Rt)
        } else return i.default.nekoton.createExternalMessageWithoutSignature(ft, Z, x.abi, x.method, R, x.params, ~~pt)
      } catch (Rt) {
        throw Q(a, Rt.toString())
      }
    }, Qt = pt => {
      let Rt;
      try {
        if (typeof x == "object" && typeof x != null) {
          const zt = i.default.nekoton.decodeTransaction(pt, x.abi, x.method);
          Rt = zt == null ? void 0 : zt.output
        }
      } catch {}
      return {
        transaction: pt,
        output: Rt
      }
    };
    if (G === !0) {
      const pt = jt(60),
        Rt = await It.sendMessageLocally(Z, pt, st);
      return Qt(Rt)
    }
    let Ot = St.message.timeout;
    for (let pt = 0; pt < St.message.retryCount; ++pt) {
      const Rt = jt(Ot),
        zt = await It.sendMessage(Z, Rt);
      if (zt == null) {
        Ot *= St.message.timeoutGrowFactor;
        continue
      }
      return Qt(zt)
    }
    const gt = "Message expired",
      mt = jt(60),
      yt = await It.sendMessageLocally(Z, mt).catch(pt => {
        throw Q(a, `${gt}. ${pt.toString()}`)
      }),
      Lt = yt.exitCode != null ? `. Possible exit code: ${yt.exitCode}` : "";
    throw Q(a, `${gt}${Lt}`)
  }, At = async (S, a) => {
    ke(a, S), lt(a);
    const {
      publicKey: E,
      data: R,
      withSignatureId: x
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "data"), un(a, a.params, "withSignatureId");
    const G = await le(a, S, x),
      {
        keystore: st
      } = S,
      Z = await st.getSigner(E);
    if (Z == null) throw Q(a, "Signer not found for public key");
    try {
      const ft = i.default.nekoton.getDataHash(R);
      return {
        dataHash: ft,
        ...await Z.sign(ft, G).then(i.default.nekoton.extendSignature)
      }
    } catch (ft) {
      throw Q(a, ft.toString())
    }
  }, Yr = async (S, a) => {
    ke(a, S), lt(a);
    const {
      publicKey: E,
      data: R,
      withSignatureId: x
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "data"), un(a, a.params, "withSignatureId");
    const G = await le(a, S, x),
      {
        keystore: st
      } = S,
      Z = await st.getSigner(E);
    if (Z == null) throw Q(a, "Signer not found for public key");
    try {
      return await Z.sign(R, G).then(i.default.nekoton.extendSignature)
    } catch (ft) {
      throw Q(a, ft.toString())
    }
  }, Zr = async (S, a) => {
    ke(a, S), on(a, S), $t(a, S), lt(a);
    const {
      sender: E,
      recipient: R,
      amount: x,
      bounce: G,
      payload: st,
      stateInit: Z
    } = a.params;
    q(a, a.params, "sender"), q(a, a.params, "recipient"), q(a, a.params, "amount"), be(a, a.params, "bounce"), oe(a, a.params, "payload", Re), ue(a, a.params, "stateInit");
    const ft = await le(a, S),
      {
        clock: It,
        properties: St,
        subscriptionController: jt,
        connectionController: Qt,
        keystore: Ot,
        accountsStorage: gt
      } = S;
    let mt, yt, Lt;
    try {
      mt = i.default.nekoton.repackAddress(E), yt = i.default.nekoton.repackAddress(R), Lt = await gt.getAccount(mt).then(re => {
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
        }, new h.AccountsStorageContext(It, Qt, i.default.nekoton, Ot))
      } catch (Un) {
        throw Q(a, Un.toString())
      }
    };
    let Rt = St.message.timeout;
    const zt = St.message.retryTransfers !== !1 ? St.message.retryCount : 1;
    for (let re = 0; re < zt; ++re) {
      const Un = await pt(Rt),
        Is = await jt.sendMessage(mt, Un);
      if (Is == null) {
        Rt *= St.message.timeoutGrowFactor;
        continue
      }
      return {
        transaction: Is
      }
    }
    const De = "Message expired",
      Kt = await pt(60),
      Bt = await jt.sendMessageLocally(mt, Kt).catch(re => {
        throw Q(a, `${De}. ${re.toString()}`)
      }),
      kt = Bt.exitCode != null ? `. Possible exit code: ${Bt.exitCode}` : "";
    throw Q(a, `${De}${kt}`)
  }, qr = async (S, a) => {
    ke(a, S), on(a, S), lt(a), $t(a, S);
    const {
      sender: E,
      recipient: R,
      amount: x,
      bounce: G,
      payload: st,
      stateInit: Z
    } = a.params;
    q(a, a.params, "sender"), q(a, a.params, "recipient"), q(a, a.params, "amount"), be(a, a.params, "bounce"), oe(a, a.params, "payload", Re), ue(a, a.params, "stateInit");
    const ft = await le(a, S),
      {
        clock: It,
        subscriptionController: St,
        connectionController: jt,
        keystore: Qt,
        accountsStorage: Ot,
        notify: gt
      } = S;
    let mt, yt;
    try {
      mt = i.default.nekoton.repackAddress(E), yt = i.default.nekoton.repackAddress(R)
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
      }, new h.AccountsStorageContext(It, jt, i.default.nekoton, Qt))
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
  }, ti = async (S, a) => {
    ke(a, S), lt(a), $t(a, S);
    const {
      publicKey: E,
      recipient: R,
      stateInit: x,
      payload: G,
      local: st,
      executorParams: Z
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "recipient"), ue(a, a.params, "stateInit"), Re(a, a.params, "payload"), Ge(a, a.params, "local"), cn(a, a.params, "executorParams");
    const ft = await le(a, S);
    let It;
    try {
      It = i.default.nekoton.repackAddress(R)
    } catch (Kt) {
      throw Q(a, Kt.toString())
    }
    const {
      clock: St,
      subscriptionController: jt,
      keystore: Qt,
      properties: Ot
    } = S, gt = await Qt.getSigner(E);
    if (gt == null) throw Q(a, "Signer not found for public key");
    const mt = async Kt => {
      let Bt;
      try {
        Bt = i.default.nekoton.createExternalMessage(St, It, G.abi, G.method, x, G.params, E, ~~Kt)
      } catch (kt) {
        throw Q(a, kt.toString())
      }
      try {
        const kt = await gt.sign(Bt.hash, ft);
        return Bt.sign(kt)
      } catch (kt) {
        throw Q(a, kt.toString())
      } finally {
        Bt.free()
      }
    }, yt = Kt => {
      let Bt;
      try {
        const kt = i.default.nekoton.decodeTransaction(Kt, G.abi, G.method);
        Bt = kt == null ? void 0 : kt.output
      } catch {}
      return {
        transaction: Kt,
        output: Bt
      }
    };
    if (st === !0) {
      const Kt = await mt(60),
        Bt = await jt.sendMessageLocally(It, Kt, Z);
      return yt(Bt)
    }
    let Lt = Ot.message.timeout;
    for (let Kt = 0; Kt < Ot.message.retryCount; ++Kt) {
      const Bt = await mt(Lt),
        kt = await jt.sendMessage(It, Bt);
      if (kt == null) {
        Lt *= Ot.message.timeoutGrowFactor;
        continue
      }
      return yt(kt)
    }
    const pt = "Message expired",
      Rt = await mt(60),
      zt = await jt.sendMessageLocally(It, Rt).catch(Kt => {
        throw Q(a, `${pt}. ${Kt.toString()}`)
      }),
      De = zt.exitCode != null ? `. Possible exit code: ${zt.exitCode}` : "";
    throw Q(a, `${pt}${De}`)
  }, ei = async (S, a) => {
    ke(a, S), lt(a), $t(a, S);
    const {
      publicKey: E,
      recipient: R,
      stateInit: x,
      payload: G
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "recipient"), ue(a, a.params, "stateInit"), Re(a, a.params, "payload");
    const st = await le(a, S);
    let Z;
    try {
      Z = i.default.nekoton.repackAddress(R)
    } catch (yt) {
      throw Q(a, yt.toString())
    }
    const {
      clock: ft,
      subscriptionController: It,
      keystore: St,
      properties: jt,
      notify: Qt
    } = S, Ot = await St.getSigner(E);
    if (Ot == null) throw Q(a, "Signer not found for public key");
    let gt;
    try {
      gt = i.default.nekoton.createExternalMessage(ft, Z, G.abi, G.method, x, G.params, E, ~~jt.message.timeout)
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

  function ke(S, a) {
    if (a.keystore == null) throw Q(S, "Keystore not found")
  }

  function on(S, a) {
    if (a.accountsStorage == null) throw Q(S, "AccountsStorage not found")
  }

  function $t(S, a) {
    if (a.connectionController == null || a.subscriptionController == null) throw Q(S, "Connection was not initialized")
  }
  async function le(S, a, E) {
    if (E !== !1) {
      {
        if (typeof E == "number") return E;
        if (a.connectionController == null) return
      }
      return a.connectionController.use(async ({
        data: {
          transport: R
        }
      }) => R.getSignatureId()).catch(R => {
        throw Q(S, "Failed to fetch signature id")
      })
    }
  }

  function lt(S) {
    if (S.params == null || typeof S.params != "object") throw Q(S, "required params object")
  }

  function ge(S, a, E) {
    if (typeof a[E] != "object") throw Q(S, `'${String(E)}' must be an object`)
  }

  function cn(S, a, E) {
    const R = a[E];
    if (R != null && typeof R != "object") throw Q(S, `'${String(E)}' must be an object if specified`)
  }

  function be(S, a, E) {
    if (typeof a[E] != "boolean") throw Q(S, `'${String(E)}' must be a boolean`)
  }

  function Ge(S, a, E) {
    const R = a[E];
    if (R != null && typeof R != "boolean") throw Q(S, `'${String(E)}' must be a boolean if specified`)
  }

  function q(S, a, E) {
    const R = a[E];
    if (typeof R != "string" || R.length === 0) throw Q(S, `'${String(E)}' must be non-empty string`)
  }

  function ue(S, a, E) {
    const R = a[E];
    if (R != null && (typeof R != "string" || R.length === 0)) throw Q(S, `'${String(E)}' must be a non-empty string if provided`)
  }

  function ln(S, a, E) {
    const R = a[E];
    if (R != null && typeof R != "number") throw Q(S, `'${String(E)}' must be a number if provider`)
  }

  function xn(S, a, E) {
    const R = a[E];
    if (!Array.isArray(R)) throw Q(S, `'${String(E)}' must be an array`)
  }

  function oe(S, a, E, R) {
    a[E] != null && R(S, a, E)
  }

  function un(S, a, E) {
    const R = a[E];
    if (R != null && typeof R != "boolean" && typeof R != "number") throw Q(S, `'${String(E)}' must be an optional boolean or number`)
  }

  function ni(S, a, E) {
    ge(S, a, E);
    const R = a[E];
    q(S, R, "lt"), q(S, R, "hash")
  }

  function si(S, a, E) {
    ge(S, a, E);
    const R = a[E];
    be(S, R, "isExact"), q(S, R, "lt"), ue(S, R, "hash")
  }

  function ri(S, a, E) {
    ge(S, a, E);
    const R = a[E];
    q(S, R, "boc")
  }

  function zn(S, a, E) {
    ge(S, a, E);
    const R = a[E];
    q(S, R, "balance"), oe(S, R, "lastTransactionId", si), be(S, R, "isDeployed")
  }

  function Re(S, a, E) {
    ge(S, a, E);
    const R = a[E];
    q(S, R, "abi"), q(S, R, "method"), ge(S, R, "params")
  }

  function As(S, a, E) {
    const R = a[E];
    if (!(typeof R == "string" || R == null))
      if (typeof R == "object") q(S, R, "abi"), q(S, R, "method"), ge(S, R, "params");
      else throw Q(S, `'${String(E)}' must be a function all or optional string`)
  }

  function dn(S, a, E) {
    const R = a[E];
    if (R != null && typeof R != "string" && !Array.isArray(R)) throw Q(S, `'${String(E)}' must be a method name or an array of possible names`)
  }
  async function ks(S, a) {
    on(S, a), $t(S, a);
    const E = a.accountsStorage.defaultAccount;
    if (E == null) throw Q(S, "Default account not set in accounts storage");
    const R = await a.accountsStorage.getAccount(E);
    if (R == null) throw Q(S, "Default account not found");
    const x = await R.fetchPublicKey(new h.AccountsStorageContext(a.clock, a.connectionController, i.default.nekoton));
    return {
      address: R.address.toString(),
      publicKey: x,
      contractType: "unknown"
    }
  }
  const Q = (S, a, E) => new ii(2, `${S.method}: ${a}`, E);
  class ii extends Error {
    constructor(a, E, R) {
      if (!Number.isInteger(a)) throw new Error('"code" must be an integer');
      if (!E || typeof E != "string") throw new Error('"message" must be a nonempty string');
      super(E), this.code = a, this.data = R
    }
    serialize() {
      const a = {
        code: this.code,
        message: this.message
      };
      return this.data !== void 0 && (a.data = this.data), this.stack && (a.stack = this.stack), a
    }
    toString() {
      return (0, r.default)(this.serialize(), ai, 2)
    }
  }
  const ai = (S, a) => {
    if (a !== "[Circular]") return a
  }
})(Or);
(function(n) {
  var t = tt && tt.__createBinding || (Object.create ? function(b, A, k, f) {
      f === void 0 && (f = k);
      var w = Object.getOwnPropertyDescriptor(A, k);
      (!w || ("get" in w ? !A.__esModule : w.writable || w.configurable)) && (w = {
        enumerable: !0,
        get: function() {
          return A[k]
        }
      }), Object.defineProperty(b, f, w)
    } : function(b, A, k, f) {
      f === void 0 && (f = k), b[f] = A[k]
    }),
    e = tt && tt.__setModuleDefault || (Object.create ? function(b, A) {
      Object.defineProperty(b, "default", {
        enumerable: !0,
        value: A
      })
    } : function(b, A) {
      b.default = A
    }),
    s = tt && tt.__importStar || function(b) {
      if (b && b.__esModule) return b;
      var A = {};
      if (b != null)
        for (var k in b) k !== "default" && Object.prototype.hasOwnProperty.call(b, k) && t(A, b, k);
      return e(A, b), A
    },
    r = tt && tt.__exportStar || function(b, A) {
      for (var k in b) k !== "default" && !Object.prototype.hasOwnProperty.call(A, k) && t(A, b, k)
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
    u = o,
    _ = i(Zt);
  let h = !1,
    p;
  const C = new Promise((b, A) => {
    p = {
      resolve: b,
      reject: A
    }
  });
  _.default.ensureNekotonLoaded = b => (h || (h = !0, (0, o.default)(b).then(p.resolve).catch(p.reject)), C), _.default.nekoton = u, _.default.fetch = fetch, _.default.debugLog = b => {}, r(Or, n)
})(as);
const Rl = () => {
    const n = bs();
    return {
      getDropItem: ({
        claimId: e,
        airdropName: s
      }) => {
        const r = new as.Clock,
          i = new ve.ProviderRpcClient({
            fallback: () => as.EverscaleStandaloneClient.create({
              clock: r,
              connection: {
                data: {
                  endpoint: "https://jrpc-ton.broxus.com/rpc"
                },
                id: Number(Ai.MAINNET),
                type: "jrpc"
              }
            }),
            forceUseFallback: !0
          }),
          o = new mr.AirdropUI({
            account: n.tonConnectUI.value.connector.account,
            onStatusChange: n.tonConnectUI.value.connector.onStatusChange.bind(n.tonConnectUI.value.connector),
            sendTransaction: n.tonConnectUI.value.sendTransaction.bind(n.tonConnectUI.value)
          }, i, r),
          u = fe(o.getState());
        n.connectionRestoredPromise.then(() => {
          o.setAirdropName(s), o.setClaimId(e)
        });
        const _ = o.subscribe(b => {
          u.value = b
        });
        return {
          state: ae(() => u.value),
          destroy: () => {
            _(), o.destory()
          },
          claim: async () => await o.claim()
        }
      },
      AirdropStatus: Ar
    }
  },
  Dl = {
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
          if (!t.point.withdrawal) throw ki("Drop is not available");
          return t.point.withdrawal
        }),
        s = bs(),
        r = fe(null),
        {
          state: i
        } = pr(),
        {
          getDropItem: o,
          AirdropStatus: u
        } = Rl(),
        _ = {
          soon_dev_1: "soontest",
          dogs_dev_test_3: "blumtest",
          dogs_stage_test_1: "blumtest",
          dogs_stage_test_2: "blumtest",
          soon_stage_1: "soontest",
          dogs_prod_1: "blumprod",
          soon_prod_1: "soonprod"
        },
        {
          state: h,
          destroy: p,
          claim: C
        } = o({
          claimId: e.value.claimId,
          airdropName: _[e.value.airdropName]
        });
      return Ii(() => ({
        state: h.value,
        walletLocalAndRemoteState: i.value,
        queueComp: r.value
      }), (b, A) => {
        var w;
        if (b.state.status === u.Loading || b.walletLocalAndRemoteState.status !== es.CONNECTED || !b.queueComp) return;
        const k = new ts(.1),
          f = async () => {
            try {
              return await C(), hn(!0)
            } catch (j) {
              return fn(j)
            }
          };
        if (![u.NoAirdrop, u.NoUser, u.NoReward].includes(h.value.status))
          if (h.value.status === u.InQueue && ((w = h.value.claimData) == null ? void 0 : w.status) === "inQueue") b.queueComp.openWaiting({
            spotPosition: h.value.claimData.place
          });
          else if (h.value.status === u.CanClaim)
          if (h.value.claimLoading) b.queueComp.openTransferring({
            transferringPoints: e.value.amount.toNumber(),
            imageUrl: t.asset.imageUrl,
            symbol: t.asset.symbol
          });
          else {
            const j = A.state.status !== b.state.status;
            b.queueComp.openReadyToClaim({
              pointsToClaim: e.value.amount.toNumber(),
              imageUrl: t.asset.imageUrl,
              symbol: t.asset.symbol,
              fee: k,
              walletAddress: b.walletLocalAndRemoteState.address,
              tonBalance: b.walletLocalAndRemoteState.tonBalance,
              claimFn: f
            }, j)
          }
        else h.value.status === u.HasClaimed && (b.queueComp.openDone(), A.state.status !== u.HasClaimed && s.tonConnectUI.value.closeModal())
      }), ir(p), (b, A) => {
        const k = gr,
          f = ko;
        return rt(), ut("div", Dl, [at(k), at(f, {
          ref_key: "queueComp",
          ref: r,
          onClose: A[0] || (A[0] = w => b.$emit("close"))
        }, null, 512)])
      }
    }
  }),
  Fl = Yt(Ll, [
    ["__scopeId", "data-v-9a5b2d84"]
  ]),
  Nl = {
    class: "pages-wallet-block-details-soon-notification-content"
  },
  $l = {
    class: "title"
  },
  jl = ["innerHTML"],
  Kl = Xt({
    __name: "Content",
    emits: ["close"],
    setup(n) {
      return (t, e) => {
        const s = dr,
          r = an;
        return rt(), ut("div", Nl, [at(s, {
          name: "animations/MoneyWings",
          size: 116
        }), Y("div", $l, ot(("t" in t ? t.t : U(ct))("wallet.drop.notification.content.title")), 1), Y("div", {
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
  Bl = Yt(Kl, [
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
      const t = cr(n, "modelValue");
      return (e, s) => {
        const r = Bl,
          i = gs;
        return rt(), Gt(i, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = o => t.value = o),
          class: "pages-wallet-block-details-soon-notification-sheet"
        }, {
          default: xt(() => [at(r, {
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
        e = Si(),
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
          clickable: !!h(b),
          description: s(b)
        }),
        i = ae(() => t.points.map(b => ({
          asset: r(b),
          point: b
        }))),
        o = fe(),
        u = fe(),
        _ = fe(!1);

      function h(b) {
        if (["DOGS", "SOON"].includes(b.symbol)) return () => {
          b.withdrawal ? p.value.status !== es.CONNECTED ? e.runConnectionFlow() : o.value = b : _.value = !0
        }
      }
      const p = pr().state,
        C = ae(() => {
          const b = o.value,
            A = b == null ? void 0 : b.withdrawal;
          if (p.value.status !== es.CONNECTED || !A) return {
            type: "loading"
          };
          const k = r(b);
          if (!A.eligible) return {
            type: "not_enough_to_transfer",
            asset: k,
            amount: b.balance.value,
            minAmount: A.minAmount
          };
          const f = Ci(A.eligibleWalletAddress),
            w = p.value.address;
          return wn.Address.parse(f).equals(wn.Address.parse(w)) ? {
            type: "ready_to_transfer",
            asset: k,
            amount: A.amount,
            walletAddress: f,
            tonBalance: p.value.tonBalance,
            claim: () => {
              u.value = {
                point: b,
                asset: k
              }, o.value = void 0
            }
          } : {
            type: "wrong_wallet_address",
            asset: k,
            eligibleWalletAddress: f
          }
        });
      return (b, A) => {
        const k = aa,
          f = Ka,
          w = Fl,
          j = zl;
        return rt(), ut("div", Ul, [(rt(!0), ut(Ke, null, hs(U(i), y => (rt(), Gt(k, Os({
          key: y.asset.id,
          ref_for: !0
        }, y.asset, {
          onClick: v => {
            var m;
            return (m = h(y.point)) == null ? void 0 : m()
          }
        }), null, 16, ["onClick"]))), 128)), at(f, {
          "model-value": !!U(o),
          state: U(C),
          "onUpdate:modelValue": A[0] || (A[0] = y => o.value = void 0)
        }, null, 8, ["model-value", "state"]), U(u) ? (rt(), Gt(w, Os({
          key: 0
        }, U(u), {
          onClose: A[1] || (A[1] = y => u.value = void 0)
        }), null, 16)) : ce("", !0), at(j, {
          modelValue: U(_),
          "onUpdate:modelValue": A[2] || (A[2] = y => or(_) ? _.value = y : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  nu = Yt(Wl, [
    ["__scopeId", "data-v-d5a9f5bc"]
  ]);
export {
  Fi as _, br as a, nu as b, Bl as c, aa as d, $i as u
};