import {
  _ as ts
} from "./2vZNcphP.js";
import {
  d as Xt,
  o as st,
  c as dt,
  e as U,
  ao as ii,
  f as Yt,
  a as Y,
  bm as ai,
  m as Ye,
  t as ot,
  n as Pe,
  G as Gt,
  aW as Ir,
  C as me,
  aX as oi,
  _ as sn,
  L as pe,
  K as ci,
  aY as Sr,
  b3 as li,
  j as ae,
  M as ui,
  N as es,
  cW as kr,
  X as Wn,
  aw as fn,
  av as hn,
  Z as Gn,
  P as di,
  Y as ns,
  z as ct,
  $ as _i,
  V as rs,
  I as xt,
  b as at,
  ay as ss,
  W as we,
  F as Ke,
  q as pr,
  p as is,
  H as pi,
  x as an,
  aK as fr,
  O as fi,
  w as hi,
  ap as Cr,
  aq as as,
  b0 as hr,
  aO as os,
  B as Zn,
  U as qn,
  a8 as cs,
  af as ls,
  aa as gi,
  E as Tr,
  bg as bi,
  ai as Er,
  c5 as tt,
  bl as wn,
  al as mi,
  c1 as us,
  cX as wi,
  cY as yi,
  a3 as vi,
  bA as ds,
  Q as Ai,
  bW as tr,
  at as Ii,
  bh as Si,
  ag as Pr
} from "./DRqvt5pl.js";
import {
  _ as ki
} from "./BiWzAglk.js";
import {
  _ as _s
} from "./jN6T2iq4.js";
import {
  d as Ci
} from "./DaCHxoB5.js";
import {
  g as Ti
} from "./BctkPI-y.js";
import {
  _ as ps
} from "./CMncxNGJ.js";
import {
  _ as fs
} from "./BiByRrzl.js";
import {
  _ as Ei
} from "./BvaVk8E1.js";
import {
  _ as Pi
} from "./d9qllZGQ.js";
import {
  a as Mi
} from "./DXiFq9Dp.js";
const Oi = ["src"],
  Di = Xt({
    __name: "Image",
    props: {
      name: {}
    },
    setup(n) {
      return (t, e) => (st(), dt("img", {
        class: "kit-image",
        src: ("imgResolver" in t ? t.imgResolver : U(ii))(t.name)
      }, null, 8, Oi))
    }
  }),
  Ri = Yt(Di, [
    ["__scopeId", "data-v-d66ca65e"]
  ]),
  Li = Xt({
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
        r = t,
        s = () => {
          e.disabled || e.state !== "default" || r("click")
        };
      return (i, o) => {
        const u = oi,
          _ = sn;
        return st(), dt("button", {
          class: Pe(["kit-pill reset", [{
            "is-disabled": i.disabled
          }, `is-type-${e.type??"default"}`]]),
          onClick: o[0] || (o[0] = h => s())
        }, [Y("div", {
          class: Pe(["label", {
            "is-hidden": e.state !== "default"
          }])
        }, [ai(i.$slots, "default", {}, () => [Ye(ot(e.label), 1)], !0)], 2), e.state === "loading" ? (st(), Gt(u, {
          key: 0,
          size: 16,
          class: "spinner",
          type: e.type === "dark" ? U(Ir).LIGHT : U(Ir).DARK
        }, null, 8, ["type"])) : e.state === "icon" ? (st(), Gt(_, {
          key: 1,
          name: e.icon,
          class: "icon"
        }, null, 8, ["name"])) : me("", !0)], 2)
      }
    }
  }),
  hs = Yt(Li, [
    ["__scopeId", "data-v-670973e0"]
  ]),
  Fi = () => {
    const n = pe(),
      t = () => {
        n.value && (clearTimeout(n.value), n.value = void 0)
      };
    return {
      set: (s, i) => {
        t(), i > 0 && (n.value = setTimeout(s, i))
      },
      destroy: () => t()
    }
  },
  Mr = (n, t = 3) => ({
    decimal: n,
    formatted: es(n, {
      accuracy: t,
      trim: !0
    })
  });
var Fe = (n => (n.PREPARING = "PREPARING", n.READY = "READY", n.ACTIVE = "ACTIVE", n.DONE = "DONE", n))(Fe || {});
const Ni = () => {
    const n = ci(),
      t = Sr("$1k89RsdjV9"),
      e = Fi(),
      r = async () => {
        const {
          res: p,
          transferTime: C
        } = await kr(Wn.getUserBalance);
        return p.err ? (t.value = void 0, fn()) : (p.data.timestamp += C, t.value = p.data, hn({}))
      }, s = Sr(() => li(r, () => {}, 3e4), "$54naw195T8"), i = async () => {
        const p = await Wn.startFarming();
        return p.err ? (Gn().error(), fn()) : (t.value && (t.value.farming = p.data), hn({}))
      }, o = async p => {
        const {
          res: C,
          transferTime: w
        } = await kr(Wn.claimFarming);
        return C.err ? (Gn().error(), fn()) : (C.data.timestamp += w, t.value = C.data, e.set(() => di().update(), 5e3), ns().makeConfetti(), Gn().success(ct("base.you_got_bp", {
          bp: p.formatted
        })), _i().farming.farmingClaimed(p.decimal), hn({}))
      }, u = ae(() => {
        var m;
        const p = n.ms100ticker.value,
          C = (m = t.value) == null ? void 0 : m.timestamp,
          w = t.value;
        if (!p || !C || !w) return {
          status: "PREPARING"
        };
        const A = w.farming;
        if (A === void 0 || p < A.startTime) return {
          status: "READY"
        };
        if (p > A.endTime) {
          const j = A.earningsRate.mul(A.endTime - A.startTime).div(1e3);
          return {
            status: "DONE",
            balance: Mr(j, 1)
          }
        }
        const I = (() => {
            const j = Math.max(A.startTime, C),
              y = Math.min(A.endTime, p),
              v = Math.max(0, y - j);
            if (v === 0) return A.balance;
            const b = A.earningsRate.mul(v).div(1e3);
            return A.balance.add(b)
          })(),
          f = (p - A.startTime) / (A.endTime - A.startTime) * 100;
        return {
          status: "ACTIVE",
          balance: Mr(I),
          progress: f,
          timeRemainingLabel: ui(A.endTime - p, "letters")
        }
      });
    return {
      init: async () => {
        await s.value.exec()
      },
      destroy: () => {
        e.destroy(), t.value = void 0, s.value.destroy()
      },
      activeFarming: u,
      start: i,
      claim: o
    }
  },
  $i = {
    class: "pages-wallet-asset-farming-slot"
  },
  ji = Xt({
    __name: "AssetFarmingSlot",
    setup(n) {
      const t = Ni(),
        e = ae(() => t.activeFarming.value),
        r = () => async () => {
          e.value.status === Fe.DONE && await t.claim(e.value.balance)
        };
      return (async () => await t.init())(), rs(() => t.destroy()), (i, o) => {
        const u = hs,
          _ = ki,
          h = sn,
          p = _s;
        return st(), dt("div", $i, [U(e).status === U(Fe).PREPARING ? (st(), Gt(u, {
          key: 0,
          state: "loading",
          label: ("t" in i ? i.t : U(ct))("base.farm"),
          type: "dark"
        }, null, 8, ["label"])) : U(e).status === U(Fe).READY ? (st(), Gt(_, {
          key: 1,
          label: ("t" in i ? i.t : U(ct))("base.farm"),
          "can-claim": "",
          "claim-fn": U(t).start,
          type: "dark"
        }, null, 8, ["label", "claim-fn"])) : U(e).status === U(Fe).ACTIVE ? (st(), Gt(p, {
          key: 2,
          nowrap: ""
        }, {
          default: xt(() => [at(u, {
            label: "",
            state: "default",
            type: "dark",
            class: "farming",
            style: ss({
              "background-position-x": `-${U(e).progress}%`
            })
          }, {
            default: xt(() => [at(h, {
              name: "clock"
            }), Y("div", null, ot(U(e).balance.formatted) + " BP", 1)]),
            _: 1
          }, 8, ["style"])]),
          inner: xt(() => [Ye(ot(("t" in i ? i.t : U(ct))("index.farming.left_to_farm", {
            time: U(e).timeRemainingLabel
          })), 1)]),
          _: 1
        })) : U(e).status === U(Fe).DONE ? (st(), Gt(_, {
          key: 3,
          label: ("t" in i ? i.t : U(ct))("base.claim_bp", {
            bp: U(e).balance.formatted
          }),
          "can-claim": "",
          "claim-fn": r()
        }, null, 8, ["label", "claim-fn"])) : me("", !0)])
      }
    }
  }),
  Ki = Yt(ji, [
    ["__scopeId", "data-v-bc872879"]
  ]),
  Bi = {
    class: "pages-wallet-asset-memepoint-slot"
  },
  xi = {
    class: "title"
  },
  zi = {
    class: "items"
  },
  Ui = {
    class: "content"
  },
  Wi = {
    class: "label"
  },
  Gi = Xt({
    __name: "AssetMemepointSlot",
    setup(n) {
      const t = pe(!1),
        e = ae(() => [{
          label: ct("wallet.points.meme_modal.launch_token"),
          icon: "emoji/Seedling",
          reward: {
            mp: 500
          }
        }, {
          label: ct("wallet.points.meme_modal.token_to_dex"),
          icon: "emoji/Clover",
          reward: {
            mp: 1e4
          }
        }, {
          label: ct("wallet.points.meme_modal.trade_on_memepad"),
          icon: "emoji/MoneyWings",
          reward: {
            mp: 50,
            usd: 10
          }
        }, {
          label: ct("wallet.points.meme_modal.trade_with_bot"),
          icon: "emoji/Rocket",
          reward: void 0
        }]),
        r = s => {
          if (s.reward === void 0) return ct("wallet.points.meme_modal.coming_soon");
          const i = "+" + es(s.reward.mp) + " Meme points",
            o = s.reward.usd ? "$" + pi(s.reward.usd, {
              trim: !0
            }) : void 0;
          return [i, o].filter(Boolean).join(" / ")
        };
      return (s, i) => {
        const o = hs,
          u = Ri,
          _ = an,
          h = fr;
        return st(), dt("div", Bi, [at(o, {
          state: "default",
          label: ("t" in s ? s.t : U(ct))("wallet.points.trade_to_earn"),
          type: "dark",
          onClick: i[0] || (i[0] = p => t.value = !0)
        }, null, 8, ["label"]), at(h, {
          modelValue: U(t),
          "onUpdate:modelValue": i[2] || (i[2] = p => is(t) ? t.value = p : null),
          class: "sheet"
        }, {
          footer: xt(() => [at(_, {
            fill: "",
            label: "Got it",
            size: U(we).LARGE,
            onClick: i[1] || (i[1] = p => t.value = !1)
          }, null, 8, ["size"])]),
          default: xt(() => [Y("div", xi, ot(("t" in s ? s.t : U(ct))("wallet.points.meme_modal.title")), 1), Y("div", zi, [(st(!0), dt(Ke, null, pr(U(e), (p, C) => (st(), dt("div", {
            key: C,
            class: "item"
          }, [Y("div", Ui, [Y("div", Wi, ot(p.label), 1), Y("div", {
            class: Pe(["reward", {
              "no-reward": !p.reward
            }])
          }, ot(r(p)), 3)]), at(u, {
            name: p.icon,
            class: "image"
          }, null, 8, ["name"])]))), 128))])]),
          _: 1
        }, 8, ["modelValue"])])
      }
    }
  }),
  Hi = Yt(Gi, [
    ["__scopeId", "data-v-1dbbb212"]
  ]),
  Vi = ["src"],
  Qi = {
    class: "compose"
  },
  Ji = {
    class: "name"
  },
  Xi = {
    key: 1,
    class: "balance"
  },
  Yi = {
    key: 0,
    class: "right-slot"
  },
  Zi = {
    key: 1,
    class: "fiat"
  },
  qi = Xt({
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
          pnl: t.pnlPercent ? Ti(t.pnlPercent) : void 0
        });
      return (r, s) => {
        const i = ts,
          o = Ki,
          u = Hi,
          _ = fi("img-error");
        return st(), dt("div", {
          class: Pe(["pages-wallet-asset", {
            clickable: r.clickable
          }])
        }, [hi(Y("img", {
          src: r.imageUrl,
          alt: "Coin item icon",
          class: "icon"
        }, null, 8, Vi), [
          [_, U(Ci)]
        ]), Y("div", Qi, [Y("div", Ji, ot(r.name), 1), r.description ? (st(), dt("div", {
          key: 0,
          class: Pe(["balance", {
            highlight: r.description.highlighted
          }])
        }, ot(r.description.value), 3)) : (st(), dt("div", Xi, ot(r.balance.defaultWithSymbol), 1))]), U(e) ? (st(), dt("div", Yi, [U(e).type === "fiat" ? (st(), dt(Ke, {
          key: 0
        }, [U(e).value === void 0 ? (st(), Gt(i, {
          key: 0,
          class: "fiat-skeleton"
        })) : (st(), dt("div", Zi, ot(U(e).value), 1)), U(e).pnl ? (st(), dt("div", {
          key: 2,
          class: Pe(["pnl-label", U(e).pnl.cls])
        }, ot(U(e).pnl.formatted), 3)) : me("", !0)], 64)) : U(e).type === "farming" ? (st(), Gt(o, {
          key: 1
        })) : U(e).type === "memepoint" ? (st(), Gt(u, {
          key: 2
        })) : me("", !0)])) : me("", !0)], 2)
      }
    }
  }),
  ta = Yt(qi, [
    ["__scopeId", "data-v-9d566e46"]
  ]),
  ea = {
    key: 0,
    class: "inner"
  },
  na = {
    class: "image-wrapper"
  },
  ra = {
    class: "title"
  },
  sa = {
    key: 0,
    class: "wrong-wallet-address"
  },
  ia = {
    class: "text"
  },
  aa = {
    class: "buttons"
  },
  oa = {
    class: "wallet"
  },
  ca = {
    class: "icon-wrapper"
  },
  la = {
    class: "address"
  },
  ua = {
    class: "status"
  },
  da = {
    class: "label"
  },
  _a = {
    key: 1,
    class: "not-enough-to-transfer"
  },
  pa = {
    class: "text"
  },
  fa = {
    class: "buttons"
  },
  ha = {
    class: "balance"
  },
  ga = {
    class: "top"
  },
  ba = {
    class: "asset"
  },
  ma = ["src"],
  wa = {
    class: "label"
  },
  ya = {
    class: "jettons"
  },
  va = {
    class: "collected"
  },
  Aa = {
    class: "total"
  },
  Ia = {
    class: "progress"
  },
  Sa = {
    key: 2,
    class: "ready-to-transfer"
  },
  ka = ["innerHTML"],
  Ca = {
    class: "buttons"
  },
  Ta = {
    class: "wallet"
  },
  Ea = {
    class: "icon-wrapper"
  },
  Pa = ["src"],
  Ma = {
    class: "ticker"
  },
  Oa = {
    class: "amount"
  },
  Da = Xt({
    __name: "Sheet",
    props: Cr({
      state: {}
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: Cr(["claim"], ["update:modelValue"]),
    setup(n) {
      const t = as(n, "modelValue"),
        e = hr(),
        r = i => new qn(i.amount).div(i.minAmount).mul(100).toNumber(),
        s = (i, o) => {
          const u = Math.min(new qn(i.toFixed(2)).decimalPlaces(), 2);
          return `${cs(i,{accuracy:u})} ${o}`
        };
      return (i, o) => {
        const u = ls,
          _ = sn,
          h = an,
          p = ps,
          C = fr;
        return st(), Gt(C, {
          modelValue: t.value,
          "onUpdate:modelValue": o[2] || (o[2] = w => t.value = w),
          class: "pages-wallet-block-details-drop-sheet"
        }, {
          default: xt(() => [i.state.type !== "loading" ? (st(), dt("div", ea, [Y("div", na, [at(u, {
            name: "animations/MoneyWings",
            size: 96
          })]), Y("div", ra, ot(("t" in i ? i.t : U(ct))("wallet.drop.sheet.title")), 1), i.state.type === "wrong_wallet_address" ? (st(), dt("div", sa, [Y("div", ia, ot(("t" in i ? i.t : U(ct))("wallet.drop.sheet.wrong_wallet_address.subtitle", {
            ticker: i.state.asset.symbol
          })), 1), Y("div", aa, [Y("div", oa, [Y("div", ca, [at(_, {
            name: "ton-logo",
            class: "icon"
          })]), Y("div", la, ot(("sliceWalletAddress" in i ? i.sliceWalletAddress : U(os))(i.state.eligibleWalletAddress)), 1), Y("div", ua, [at(_, {
            name: "circle-check",
            class: "icon"
          }), Y("div", da, ot(("t" in i ? i.t : U(ct))("wallet.drop.sheet.wrong_wallet_address.eligible_label")), 1)])]), at(h, {
            label: ("t" in i ? i.t : U(ct))("wallet.reconnect.btn"),
            fill: "",
            size: U(we).LARGE,
            onClick: o[0] || (o[0] = w => U(e).reconnect())
          }, null, 8, ["label", "size"])])])) : i.state.type === "not_enough_to_transfer" ? (st(), dt("div", _a, [Y("div", pa, ot(("t" in i ? i.t : U(ct))("wallet.drop.sheet.not_enough_to_transfer.subtitle", {
            ticker: i.state.asset.symbol
          })), 1), Y("div", fa, [Y("div", ha, [Y("div", ga, [Y("div", ba, [Y("img", {
            src: i.state.asset.imageUrl
          }, null, 8, ma), Y("div", wa, ot(i.state.asset.symbol), 1)]), Y("div", ya, [Y("span", va, ot(s(i.state.amount, i.state.asset.symbol)), 1), Y("span", Aa, " / " + ot(s(i.state.minAmount, i.state.asset.symbol)), 1)])]), Y("div", Ia, [Y("div", {
            class: "line",
            style: ss({
              "--percent": `${r(i.state)}%`
            })
          }, null, 4)])]), at(h, {
            label: ("t" in i ? i.t : U(ct))("wallet.drop.sheet.not_enough_to_transfer.btn_label"),
            fill: "",
            size: U(we).LARGE,
            type: U(Zn).SECONDARY,
            disabled: ""
          }, null, 8, ["label", "size", "type"])])])) : i.state.type === "ready_to_transfer" ? (st(), dt("div", Sa, [Y("div", {
            class: "text",
            innerHTML: ("t" in i ? i.t : U(ct))("wallet.drop.sheet.ready_to_transfer.subtitle", {
              ticker: i.state.asset.symbol
            })
          }, null, 8, ka), Y("div", Ca, [Y("div", Ta, [Y("div", Ea, [Y("img", {
            src: i.state.asset.imageUrl
          }, null, 8, Pa)]), Y("div", Ma, ot(i.state.asset.symbol), 1), Y("div", Oa, ot(s(i.state.amount, i.state.asset.symbol)), 1)]), at(h, {
            label: ("t" in i ? i.t : U(ct))("wallet.drop.sheet.ready_to_transfer.btn_label"),
            fill: "",
            size: U(we).LARGE,
            type: U(Zn).HIGHLIGHT,
            onClick: o[1] || (o[1] = w => i.state.claim())
          }, null, 8, ["label", "size", "type"])])])) : me("", !0)])) : (st(), Gt(p, {
            key: 1,
            class: "loading"
          }))]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Ra = Yt(Da, [
    ["__scopeId", "data-v-ee6ef360"]
  ]),
  La = {
    class: "kit-counter-animation"
  },
  Fa = Xt({
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
          let r = t.value.indexOf(".");
          return r === -1 && (r = t.value.length), t.value.split("").map((s, i) => ({
            char: s,
            idx: i - r
          }))
        });
      return (r, s) => (st(), dt("div", La, [(st(!0), dt(Ke, null, pr(U(e), i => (st(), dt("div", {
        key: i.idx,
        class: "el-char-wrapper"
      }, [at(gi, {
        name: "change-item-transition"
      }, {
        default: xt(() => [(st(), dt("div", {
          key: i.char,
          class: "el-char"
        }, ot(i.char), 1))]),
        _: 2
      }, 1024)]))), 128))]))
    }
  }),
  Na = Yt(Fa, [
    ["__scopeId", "data-v-191230a7"]
  ]),
  $a = {
    class: "pages-wallet-block-details-drop-claim-button"
  },
  ja = {
    class: "details"
  },
  Ka = {
    class: "wallet"
  },
  Ba = {
    key: 1,
    class: "fees"
  },
  xa = Xt({
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
        r = t,
        s = ae(() => {
          if (e.tonBalance && e.tonBalance.value.lt(e.fee)) return ct("memepad.jetton.not_enough_error", {
            ticker: "TON"
          })
        }),
        i = pe(!1),
        o = ae(() => i.value || !e.tonBalance),
        u = async () => {
          o.value || s.value || (i.value = !0, await e.claimFn(), i.value = !1, r("claim"))
        };
      return (_, h) => {
        const p = ts,
          C = sn,
          w = Pi,
          A = _s,
          I = an;
        return st(), dt("div", $a, [Y("div", ja, [U(o) ? (st(), dt(Ke, {
          key: 0
        }, [at(p, {
          class: "skeleton"
        }), at(p, {
          class: "skeleton"
        })], 64)) : (st(), dt(Ke, {
          key: 1
        }, [Y("div", Ka, [at(C, {
          name: "connected-wallet",
          class: "icon"
        }), Y("span", null, ot(("sliceWalletAddress" in _ ? _.sliceWalletAddress : U(os))(_.walletAddress)), 1)]), U(s) ? (st(), Gt(w, {
          key: 0,
          "error-message": U(s)
        }, null, 8, ["error-message"])) : (st(), dt("div", Ba, [at(A, {
          "text-min-width": 155,
          alignment: U(bi).TOP
        }, {
          default: xt(() => [at(C, {
            name: "circle-help",
            class: "icon"
          })]),
          inner: xt(() => [Y("div", null, ot(`${("t"in _?_.t:U(ct))("memepad.jetton.fees_network")}: ${("formatTon"in _?_.formatTon:U(Tr))(_.fee)} TON`), 1)]),
          _: 1
        }, 8, ["alignment"]), Y("span", null, ot(`${("t"in _?_.t:U(ct))("memepad.jetton.fees_base")}: ${`${("formatTon"in _?_.formatTon:U(Tr))(_.fee)} TON`}`), 1)]))], 64))]), at(I, {
          type: U(Zn).HIGHLIGHT,
          size: U(we).LARGE,
          loading: U(o),
          disabled: !!U(s),
          onClick: h[0] || (h[0] = f => u())
        }, {
          default: xt(() => [Ye(ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.ready_to_claim.btn_label")), 1)]),
          _: 1
        }, 8, ["type", "size", "loading", "disabled"])])
      }
    }
  }),
  za = Yt(xa, [
    ["__scopeId", "data-v-4e5d856f"]
  ]),
  Ua = {
    key: 0,
    class: "loading"
  },
  Wa = {
    key: 1,
    class: "waiting inner"
  },
  Ga = {
    class: "title"
  },
  Ha = {
    class: "status"
  },
  Va = {
    class: "text"
  },
  Qa = {
    class: "footer is-single"
  },
  Ja = {
    class: "note"
  },
  Xa = {
    key: 2,
    class: "ready-to-claim inner"
  },
  Ya = {
    class: "image-wrapper"
  },
  Za = ["src"],
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
    class: "footer"
  },
  ro = {
    key: 3,
    class: "transferring inner"
  },
  so = {
    class: "image-wrapper"
  },
  io = ["src"],
  ao = {
    class: "title"
  },
  oo = {
    class: "status"
  },
  co = {
    class: "text"
  },
  lo = {
    class: "footer"
  },
  uo = {
    key: 4,
    class: "done"
  },
  _o = {
    class: "icon-wrapper"
  },
  po = {
    class: "icon-inner"
  },
  fo = {
    class: "title"
  },
  ho = {
    class: "subtitle"
  },
  go = Xt({
    __name: "QueuePage",
    emits: ["close"],
    setup(n, {
      expose: t
    }) {
      Mi("pages-wallet-block-points-claim-page");
      const e = pe({
          status: "loading"
        }),
        r = ({
          points: _
        }) => {
          const h = ["amount"];
          return _ > 1e3 && h.push("is-many"), Er("div", {
            class: h
          }, Er(Na, {
            value: cs(_, {
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
          fee: w,
          tonBalance: A,
          claimFn: I
        }, f) => {
          e.value = {
            status: "ready_to_claim",
            pointsToClaim: _,
            imageUrl: h,
            symbol: p,
            walletAddress: C,
            fee: w,
            tonBalance: A,
            claimFn: I
          }, f && ns().makeConfetti()
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
        const p = ps,
          C = fs,
          w = Ei,
          A = za,
          I = an,
          f = sn;
        return st(), dt("div", {
          class: Pe(["pages-wallet-block-points-claim-page page", `is-${U(e).status.toLowerCase()}`])
        }, [U(e).status === "loading" ? (st(), dt("div", Ua, [at(p)])) : U(e).status === "waiting" ? (st(), dt("div", Wa, [at(C), Y("div", Ga, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.waiting.title")), 1), at(r, {
          points: U(e).spotPosition
        }, null, 8, ["points"]), Y("div", Ha, [h[2] || (h[2] = Y("div", {
          class: "ping-dot"
        }, null, -1)), Y("span", Va, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.waiting.status")), 1)]), at(w, null, {
          default: xt(() => [Y("div", Qa, [Y("div", Ja, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.waiting.note_dogs")), 1)])]),
          _: 1
        })])) : U(e).status === "ready_to_claim" ? (st(), dt("div", Xa, [at(C), Y("div", Ya, [Y("img", {
          src: U(e).imageUrl,
          alt: "Point image"
        }, null, 8, Za)]), Y("div", qa, ot(U(e).symbol), 1), at(r, {
          points: U(e).pointsToClaim
        }, null, 8, ["points"]), Y("div", to, [h[3] || (h[3] = Y("div", {
          class: "ping-dot"
        }, null, -1)), Y("span", eo, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.ready_to_claim.status")), 1)]), at(w, null, {
          default: xt(() => [Y("div", no, [at(A, {
            "wallet-address": U(e).walletAddress,
            fee: U(e).fee,
            "ton-balance": U(e).tonBalance,
            "claim-fn": U(e).claimFn
          }, null, 8, ["wallet-address", "fee", "ton-balance", "claim-fn"])])]),
          _: 1
        })])) : U(e).status === "transferring" ? (st(), dt("div", ro, [at(C), Y("div", so, [Y("img", {
          src: U(e).imageUrl,
          alt: "Point image"
        }, null, 8, io)]), Y("div", ao, ot(U(e).symbol), 1), at(r, {
          points: U(e).transferringPoints
        }, null, 8, ["points"]), Y("div", oo, [h[4] || (h[4] = Y("div", {
          class: "ping-dot"
        }, null, -1)), Y("span", co, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.transferring.status")), 1)]), at(w, null, {
          default: xt(() => [Y("div", lo, [at(I, {
            size: U(we).LARGE,
            class: "button",
            onClick: h[0] || (h[0] = m => _.$emit("close"))
          }, {
            default: xt(() => [Ye(ot(("t" in _ ? _.t : U(ct))("base.got_it")), 1)]),
            _: 1
          }, 8, ["size"])])]),
          _: 1
        })])) : U(e).status === "done" ? (st(), dt("div", uo, [Y("div", _o, [Y("div", po, [at(f, {
          name: "check-big",
          class: "icon"
        })])]), Y("div", fo, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.done.title")), 1), Y("div", ho, ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.done.subtitle")), 1), at(w, null, {
          default: xt(() => [at(I, {
            size: U(we).LARGE,
            class: "button",
            onClick: h[1] || (h[1] = m => _.$emit("close"))
          }, {
            default: xt(() => [Ye(ot(("t" in _ ? _.t : U(ct))("wallet.drop.queue_page.done.btn_label")), 1)]),
            _: 1
          }, 8, ["size"])]),
          _: 1
        })])) : me("", !0)], 2)
      }
    }
  }),
  bo = Yt(go, [
    ["__scopeId", "data-v-57eddbc3"]
  ]);
var gs = {},
  ve = {},
  Tt = {},
  Be = {};
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.getUniqueId = n.mergeTransactions = n.LT_COLLATOR = n.Semaphore = n.DelayedTransactions = n.MessageExpiredException = n.AddressLiteral = n.isAddressObject = n.Address = void 0;
  class t {
    constructor(I) {
      this.equals = f => this._equals(f), this._address = I
    }
    toString() {
      return this._address
    }
    toJSON() {
      return this._address
    }
    _equals(I) {
      return typeof I == "string" ? this._address === I : this._address === (I == null ? void 0 : I._address)
    }
  }
  n.Address = t;

  function e(A) {
    return A != null && (A instanceof t || Object.getPrototypeOf(A).constructor.name === t.prototype.constructor.name)
  }
  n.isAddressObject = e;
  class r extends t {
    constructor(I) {
      super(I)
    }
  }
  n.AddressLiteral = r;
  class s extends Error {
    constructor(I, f) {
      super("Message expired"), this.address = I, this.hash = f
    }
  }
  n.MessageExpiredException = s;
  class i {
    constructor() {
      this.transactions = new Map
    }
    async waitTransaction(I, f) {
      var m;
      let j = (m = this.transactions.get(f)) === null || m === void 0 ? void 0 : m.promise;
      if (j == null) {
        let v, b;
        j = new Promise((F, K) => {
          v = B => F(B), b = () => K()
        }), this.transactions.set(f, {
          promise: j,
          resolve: v,
          reject: b
        })
      }
      const y = await j;
      if (y == null) throw new s(I, f);
      return y
    }
    fillTransaction(I, f) {
      const m = this.transactions.get(I);
      m != null ? m.resolve(f) : this.transactions.set(I, {
        promise: Promise.resolve(f),
        resolve: () => {},
        reject: () => {}
      })
    }
  }
  n.DelayedTransactions = i;
  class o {
    constructor(I) {
      this.tasks = [], this.sched = () => {
        var f;
        this.count > 0 && this.tasks.length > 0 && (this.count--, (f = this.tasks.shift()) === null || f === void 0 || f())
      }, this.count = I
    }
    acquire() {
      return new Promise((I, f) => {
        this.tasks.push(() => {
          let m = !1;
          I(() => {
            m || (m = !0, this.count++, this.sched())
          })
        }), _(this.sched)
      })
    }
    releaseAll() {
      for (var I; this.tasks.length > 0;)(I = this.tasks.shift()) === null || I === void 0 || I()
    }
  }
  n.Semaphore = o;

  function u(A) {
    const I = document.createTextNode("");
    let f, m, j = 0,
      y = 0;
    return new A(function() {
        let v;
        if (f) m && (f = m.slice(y).concat(f));
        else {
          if (!m) return;
          f = m
        }
        if (m = f, f = null, y = 0, typeof m == "function") {
          v = m, m = null, v();
          return
        }
        for (I.data = j = ++j % 2; y < m.length;) v = m[y], y++, y === m.length && (m = null), v()
      }).observe(I, {
        characterData: !0
      }),
      function(v) {
        if (f) {
          typeof f == "function" ? f = [f, v] : f.push(v);
          return
        }
        f = v, I.data = j = ++j % 2
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

  function h(A, I, f) {
    if (f.batchType === "old") return A.push(...I), A;
    if (A.length === 0) return A.push(...I), A;
    let m = 0;
    for (; m < A.length && n.LT_COLLATOR.compare(A[m].id.lt, f.maxLt) >= 0;) ++m;
    return A.splice(m, 0, ...I), A
  }
  n.mergeTransactions = h;
  const p = 4294967295;
  let C = Math.floor(Math.random() * p);

  function w() {
    return C = (C + 1) % p, C
  }
  n.getUniqueId = w
})(Be);
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
Tt.parsePartialTokensObject = Tt.parseTokensObject = Tt.serializeTokensObject = Tt.parseAccountInteraction = Tt.parsePermissions = Tt.parseMessage = Tt.serializeMessage = Tt.parseTransaction = Tt.serializeTransaction = void 0;
const Ze = Be;

function mo(n) {
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
    inMessage: er(n.inMessage),
    outMessages: n.outMessages.map(er)
  }
}
Tt.serializeTransaction = mo;

function wo(n) {
  return {
    ...n,
    inMessage: nr(n.inMessage),
    outMessages: n.outMessages.map(nr)
  }
}
Tt.parseTransaction = wo;

function er(n) {
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
Tt.serializeMessage = er;

function nr(n) {
  return {
    ...n,
    src: n.src ? new Ze.Address(n.src) : void 0,
    dst: n.dst ? new Ze.Address(n.dst) : void 0
  }
}
Tt.parseMessage = nr;

function yo(n) {
  return {
    ...n,
    accountInteraction: n.accountInteraction ? bs(n.accountInteraction) : void 0
  }
}
Tt.parsePermissions = yo;

function bs(n) {
  return {
    ...n,
    address: new Ze.Address(n.address)
  }
}
Tt.parseAccountInteraction = bs;

function vo(n) {
  return rr(n)
}
Tt.serializeTokensObject = vo;

function rr(n) {
  if (typeof n == "object" && (0, Ze.isAddressObject)(n)) return n.toString();
  if (Array.isArray(n)) {
    const t = [];
    for (const e of n) t.push(rr(e));
    return t
  } else if (n != null && typeof n == "object") {
    const t = {};
    for (const [e, r] of Object.entries(n)) t[e] = rr(r);
    return t
  } else return n
}

function Ao(n, t) {
  const e = {};
  for (const r of n) e[r.name] = Ce(r, t[r.name]);
  return e
}
Tt.parseTokensObject = Ao;

function Io(n, t) {
  const e = {};
  for (const r of n) Object.prototype.hasOwnProperty.call(t, r.name) && (e[r.name] = Ce(r, !t[r.name]));
  return e
}
Tt.parsePartialTokensObject = Io;

function Ce(n, t) {
  if (n.type.startsWith("map")) {
    const e = n.type.indexOf(","),
      r = n.type.slice(4, e),
      s = n.type.slice(e + 1, -1),
      i = [];
    for (const [o, u] of t) i.push([Ce({
      name: "",
      type: r
    }, o), Ce({
      name: "",
      type: s,
      components: n.components
    }, u)]);
    return i
  } else {
    const e = n.type.endsWith("[]"),
      r = !e && n.type.startsWith("optional"),
      s = e ? n.type.slice(0, -2) : r ? n.type.slice(9, -1) : n.type;
    if (e) {
      const i = {
          name: n.name,
          type: s,
          components: n.components
        },
        o = [];
      for (const u of t) o.push(Ce(i, u));
      return o
    } else if (r) {
      if (t == null) return null;
      {
        const i = {
          name: n.name,
          type: s,
          components: n.components
        };
        return Ce(i, t)
      }
    } else if (s === "tuple") {
      const i = {};
      if (n.components != null)
        for (const o of n.components) i[o.name] = Ce(o, t[o.name]);
      return i
    } else return s === "address" ? new Ze.Address(t) : t
  }
}
var qe = {};
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.Subscriber = void 0;
const Je = Be,
  So = Tt;
class ko {
  constructor(t) {
    this.provider = t, this.subscriptions = new Map, this.scanners = new Map, this.unsubscribe = async () => this._unsubscribe()
  }
  transactions(t) {
    return this._addSubscription("transactionsFound", t, !1)
  }
  trace(t) {
    const e = (0, Je.getUniqueId)();
    return new Wt((r, s) => {
      const i = new To(this.provider, {
        origin: t,
        onData: r,
        onEnd: o => {
          this.scanners.delete(e), s(o)
        }
      });
      return this.scanners.set(e, i), i.start(), Promise.resolve()
    }, async () => {
      const r = this.scanners.get(e);
      r != null && (this.scanners.delete(e), await r.stop())
    }, Hn, !0)
  }
  oldTransactions(t, e) {
    const r = (0, Je.getUniqueId)();
    return new Wt((s, i) => {
      const o = new Co(this.provider, {
        address: t,
        onData: s,
        onEnd: u => {
          this.scanners.delete(r), i(u)
        },
        ...e
      });
      return this.scanners.set(r, o), o.start(), Promise.resolve()
    }, async () => {
      const s = this.scanners.get(r);
      s != null && (this.scanners.delete(r), await s.stop())
    }, Hn, !0)
  }
  states(t) {
    return this._addSubscription("contractStateChanged", t, !1)
  }
  async _unsubscribe() {
    const t = [];
    for (const e of this.subscriptions.values())
      for (const [r, s] of Object.entries(e)) delete e[r], s != null && t.push(s.subscription.then(i => i.unsubscribe()).catch(() => {}));
    this.subscriptions.clear();
    for (const e of this.scanners.values()) t.push(e.stop());
    this.scanners.clear(), await Promise.all(t)
  }
  _addSubscription(t, e, r) {
    const s = e.toString(),
      i = u => {
        const _ = this.subscriptions.get(s);
        if (_ == null) return;
        const h = _[t];
        if (h != null) {
          const p = h.handlers.get(u);
          if (p != null) {
            h.handlers.delete(u);
            const {
              queue: C,
              onEnd: w,
              state: A
            } = p;
            A.finished || (A.finished = !0, C.clear(), C.enqueue(async () => w(A.eof)))
          }
          if (h.handlers.size === 0) {
            const C = h.subscription;
            delete _[t], C.then(w => w.unsubscribe()).catch(console.debug)
          }
        }
        _.contractStateChanged == null && _.transactionsFound == null && this.subscriptions.delete(s)
      },
      o = (0, Je.getUniqueId)();
    return new Wt((u, _) => {
      const h = this.subscriptions.get(s);
      let p = h == null ? void 0 : h[t];
      const C = {
          eof: !1,
          finished: !1
        },
        w = {
          onData: u,
          onEnd: _,
          queue: new gr,
          state: C
        };
      if (p != null) return p.handlers.set(o, w), Promise.resolve();
      const A = new Map;
      A.set(o, w);
      const I = this.provider.subscribe(t, {
        address: e
      }).then(f => (f.on("data", m => {
        for (const {
            onData: j,
            queue: y,
            state: v
          }
          of A.values()) v.eof || v.finished || y.enqueue(async () => {
          await j(m) || (v.eof = !0, i(o))
        })
      }), f.on("unsubscribed", () => {
        for (const m of A.keys()) i(m)
      }), f)).catch(f => {
        console.error(f);
        for (const m of A.keys()) i(m);
        throw f
      });
      return p = {
        subscription: I,
        handlers: A
      }, h == null ? this.subscriptions.set(s, {
        [t]: p
      }) : h[t] = p, I.then(() => {})
    }, () => i(o), Hn, r)
  }
}
qe.Subscriber = ko;
async function Hn(n, t) {
  return t(n)
}
class Wt {
  constructor(t, e, r, s) {
    this.makeProducer = t, this.stopProducer = e, this.extractor = r, this.isFinite = s, this.fold = this.onlyFinite((i, o, u) => {
      let _ = i;
      return new Promise((h, p) => {
        const C = this.makeProducer(w => this.extractor(w, async A => (_ = await o(_, A), !0)), w => {
          w ? h(_) : p(new Error("Subscription closed"))
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
      result: r
    } = t({
      first: () => {
        const s = {},
          i = this.first(s);
        return {
          subscribed: s.subscribed,
          result: i
        }
      },
      on: s => {
        const i = {};
        return this.on(s, i), {
          subscribed: i.subscribed,
          result: void 0
        }
      },
      fold: this.fold != null ? (s, i) => {
        const o = {},
          u = this.fold(s, i, o);
        return {
          subscribed: o.subscribed,
          result: u
        }
      } : void 0,
      finished: this.finished != null ? () => {
        const s = {},
          i = this.finished(s);
        return {
          subscribed: s.subscribed,
          result: i
        }
      } : void 0
    });
    return await e, () => r
  }
  first(t) {
    const e = {
      found: !1
    };
    return new Promise((r, s) => {
      const i = this.makeProducer(o => this.extractor(o, u => (Object.assign(e, {
        found: !0,
        result: u
      }), !1)), o => {
        o ? this.isFinite ? r(e.found ? e.result : void 0) : e.found ? r(e.result) : s(new Error("Unexpected end of stream")) : s(new Error("Subscription closed"))
      });
      t != null && (t.subscribed = i)
    })
  }
  on(t, e) {
    const r = this.makeProducer(s => this.extractor(s, async i => (await t(i), !0)), s => {});
    e != null && (e.subscribed = r)
  }
  merge(t) {
    return new Wt((e, r) => {
      const s = {
          stopped: !1,
          counter: 0
        },
        i = o => {
          s.stopped || (++s.counter == 2 || !o) && (s.stopped = !0, r(o))
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
    return new Wt(this.makeProducer, this.stopProducer, (e, r) => this.extractor(e, async s => r({
      index: t.index++,
      item: s
    })), this.isFinite)
  }
  tap(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, r) => this.extractor(e, async s => (await t(s), r(s))), this.isFinite)
  }
  filter(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, r) => this.extractor(e, async s => await t(s) ? r(s) : !0), this.isFinite)
  }
  filterMap(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, r) => this.extractor(e, async s => {
      const i = await t(s);
      return i !== void 0 ? r(i) : !0
    }), this.isFinite)
  }
  map(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, r) => this.extractor(e, async s => {
      const i = await t(s);
      return r(i)
    }), this.isFinite)
  }
  flatMap(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, r) => this.extractor(e, async s => {
      const i = await t(s);
      for (const o of i)
        if (!await r(o)) return !1;
      return !0
    }), this.isFinite)
  }
  skip(t) {
    const e = {
      index: 0
    };
    return new Wt(this.makeProducer, this.stopProducer, (r, s) => this.extractor(r, i => e.index >= t ? s(i) : (++e.index, !0)), this.isFinite)
  }
  skipWhile(t) {
    const e = {
      shouldSkip: !0
    };
    return new Wt(this.makeProducer, this.stopProducer, (r, s) => this.extractor(r, async i => !e.shouldSkip || !await t(i) ? (e.shouldSkip = !1, s(i)) : !0), this.isFinite)
  }
  take(t) {
    const e = {
      index: 0
    };
    return new Wt(this.makeProducer, this.stopProducer, (r, s) => this.extractor(r, i => e.index < t ? (++e.index, s(i) && e.index < t) : !1), !0)
  }
  takeWhile(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, r) => this.extractor(e, async s => await t(s) ? r(s) : !1), !0)
  }
  takeWhileMap(t) {
    return new Wt(this.makeProducer, this.stopProducer, (e, r) => this.extractor(e, async s => {
      const i = await t(s);
      return i !== void 0 ? r(i) : !1
    }), !0)
  }
  onlyFinite(t) {
    if (this.isFinite) return t
  }
}
class Co {
  constructor(t, e) {
    this.provider = t, this.params = e, this.queue = new gr, this.isRunning = !1
  }
  start() {
    this.isRunning || this.promise != null || (this.isRunning = !0, this.promise = (async () => {
      const t = this.params,
        e = {
          complete: !1
        };
      for (; this.isRunning && !e.complete;) try {
        const {
          transactions: r,
          continuation: s
        } = await this.provider.getTransactions({
          address: this.params.address,
          continuation: this.continuation
        });
        if (e.complete = !e.complete && r.length == null, !this.isRunning || e.complete) break;
        const i = r.filter(u => (t.fromLt == null || Je.LT_COLLATOR.compare(u.id.lt, t.fromLt) > 0) && (t.fromUtime == null || u.createdAt > t.fromUtime));
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
          }), s != null) this.continuation = s;
        else {
          e.complete = !0;
          break
        }
      } catch (r) {
        console.error(r)
      }
      this.queue.enqueue(async () => this.params.onEnd(e.complete)), this.isRunning = !1, this.continuation = void 0
    })())
  }
  async stop() {
    this.isRunning = !1, this.queue.clear(), this.promise != null ? await this.promise : this.params.onEnd(!1)
  }
}
class To {
  constructor(t, e) {
    this.provider = t, this.params = e, this.queue = new gr, this.isRunning = !1, this.semaphore = new Je.Semaphore(10)
  }
  start() {
    if (this.isRunning || this.promise != null) return;
    const t = this.provider;
    this.isRunning = !0, this.promise = (async () => {
      const e = {
          complete: !1
        },
        r = i => {
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
                  const I = (0, So.parseTransaction)(C.transaction);
                  return I.account = I.inMessage.dst, I
                }
                let w;
                const A = new Promise((I, f) => {
                  w = () => I(), o.reject = () => f()
                });
                if (o.timeout = setTimeout(w, h), await A, o.stopped) return;
                o.reject = void 0, h = Math.min(h * 2, 3e3)
              }
            })(),
            reject: () => {
              var h;
              o.stopped = !0, (h = o.reject) === null || h === void 0 || h.call(o), o.timeout != null && clearTimeout(o.timeout)
            }
          }
        },
        s = [this.params.origin];
      try {
        t: for (; this.isRunning;) {
          const i = s.shift();
          if (i == null) {
            e.complete = !0;
            break
          }
          const o = i.outMessages.filter(u => u.dst != null).map(u => {
            const _ = u.hash;
            return r(_)
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
            }), s.push(_)
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
class gr {
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
var Me = {};
Object.defineProperty(Me, "__esModule", {
  value: !0
});
Me.TvmException = Me.Contract = void 0;
const Ne = Be,
  Mt = Tt;
class Eo {
  constructor(t, e, r) {
    if (!Array.isArray(e.functions)) throw new Error("Invalid abi. Functions array required");
    if (!Array.isArray(e.events)) throw new Error("Invalid abi. Events array required");
    this._provider = t, this._abi = JSON.stringify(e), this.methodsAbi = e.functions.reduce((s, i) => (i.inputs == null && (i.inputs = []), i.outputs == null && (i.outputs = []), s[i.name] = i, s), {}), this.eventsAbi = e.events.reduce((s, i) => (i.inputs == null && (i.inputs = []), s[i.name] = i, s), {}), this.fieldsAbi = e.fields, this._address = r, this._methods = new Proxy({}, {
      get: (s, i) => {
        const o = this.methodsAbi[i];
        return (u = {}) => new Po(this._provider, o, this._abi, this._address, i, u)
      }
    }), this._fields = new Proxy({}, {
      get: (s, i) => async (o = {}) => {
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
      state: r
    } = await this._provider.rawApi.getContractFields({
      address: this.address.toString(),
      abi: this._abi,
      cachedState: t.cachedState,
      allowPartial: t.allowPartial == null ? !1 : t.allowPartial
    });
    return {
      fields: e != null ? (0, Mt.parseTokensObject)(this.fieldsAbi, e) : void 0,
      state: r
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
    }).then(r => (r.forEach(s => s.transaction = e), r)))
  }
  async waitForEvent(t = {}) {
    const {
      range: e,
      filter: r
    } = t, s = typeof r == "string" ? ({
      event: _
    }) => _ === r : r;
    let i = t.subscriber;
    const o = i == null;
    i == null && (i = new this._provider.Subscriber);
    const u = await ((e == null ? void 0 : e.fromLt) != null || (e == null ? void 0 : e.fromUtime) != null ? i.oldTransactions(this._address, e).merge(i.transactions(this._address)) : i.transactions(this.address)).flatMap(_ => _.transactions).takeWhile(_ => e == null || (e.fromLt == null || Ne.LT_COLLATOR.compare(_.id.lt, e.fromLt) > 0) && (e.fromUtime == null || _.createdAt > e.fromUtime) && (e.toLt == null || Ne.LT_COLLATOR.compare(_.id.lt, e.toLt) < 0) && (e.toUtime == null || _.createdAt < e.toUtime)).flatMap(_ => this.decodeTransactionEvents({
      transaction: _
    }).then(h => (h.forEach(p => p.transaction = _), h))).filterMap(async _ => {
      if (s == null || await s(_)) return _
    }).first();
    return o && await i.unsubscribe(), u
  }
  async getPastEvents(t) {
    const {
      range: e,
      filter: r,
      limit: s
    } = t, i = typeof r == "string" ? ({
      event: _
    }) => _ === r : r, o = [];
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
      const p = _.filter(C => ((e == null ? void 0 : e.fromLt) == null || Ne.LT_COLLATOR.compare(C.id.lt, e.fromLt) > 0) && ((e == null ? void 0 : e.fromUtime) == null || C.createdAt > e.fromUtime) && ((e == null ? void 0 : e.toLt) == null || Ne.LT_COLLATOR.compare(C.id.lt, e.toLt) < 0) && ((e == null ? void 0 : e.toUtime) == null || C.createdAt < e.toUtime));
      if (p.length > 0) {
        const C = await Promise.all(p.map(async w => ({
          tx: w,
          events: await this.decodeTransactionEvents({
            transaction: w
          }).then(A => (A.forEach(I => I.transaction = w), A))
        })));
        for (let {
            tx: w,
            events: A
          }
          of C) {
          i != null && (A = await Promise.all(A.map(async I => await i(I) ? I : void 0)).then(I => I.filter(f => f != null))), u = w.id;
          for (const I of A) {
            if (s != null && o.length >= s) break t;
            o.push(I)
          }
          if (s != null && o.length >= s) break t
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
        method: r,
        input: s,
        output: i
      } = e, o = this.methodsAbi[r];
      return {
        method: r,
        input: o.inputs != null ? (0, Mt.parseTokensObject)(o.inputs, s) : {},
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
      }), r = [];
      for (const {
          event: s,
          data: i
        }
        of e) {
        const o = this.eventsAbi[s];
        r.push({
          event: s,
          data: o.inputs != null ? (0, Mt.parseTokensObject)(o.inputs, i) : {}
        })
      }
      return r
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
        method: r,
        input: s
      } = e, i = this.methodsAbi[r];
      return {
        method: r,
        input: i.inputs != null ? (0, Mt.parseTokensObject)(i.inputs, s) : {}
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
        method: r,
        output: s
      } = e, i = this.methodsAbi[r];
      return {
        method: r,
        output: i.outputs != null ? (0, Mt.parseTokensObject)(i.outputs, s) : {}
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
        event: r,
        data: s
      } = e, i = this.eventsAbi[r];
      return {
        event: r,
        data: i.inputs != null ? (0, Mt.parseTokensObject)(i.inputs, s) : {}
      }
    } catch {
      return
    }
  }
}
Me.Contract = Eo;
class ms extends Error {
  constructor(t) {
    super(`TvmException: ${t}`), this.code = t
  }
}
Me.TvmException = ms;
class Po {
  constructor(t, e, r, s, i, o) {
    this.provider = t, this.functionAbi = e, this.abi = r, this.address = s, this.method = i, this.params = (0, Mt.serializeTokensObject)(o)
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
    const e = new Ne.DelayedTransactions,
      r = await this.provider.subscribe("messageStatusUpdated");
    r.on("data", o => {
      o.address.equals(t.from) && e.fillTransaction(o.hash, o.transaction)
    });
    const {
      message: s
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
      throw r.unsubscribe().catch(console.error), o
    }), i = e.waitTransaction(this.address, s.hash).finally(() => r.unsubscribe().catch(console.error));
    return {
      messageHash: s.hash,
      expireAt: s.expireAt,
      transaction: i
    }
  }
  async sendWithResult(t) {
    await this.provider.ensureInitialized();
    let e = t.subscriber;
    const r = e == null;
    e == null && (e = new this.provider.Subscriber);
    try {
      let s, i;
      const o = new Promise(A => {
          i = I => A(I)
        }),
        u = [];
      e.transactions(this.address).flatMap(A => A.transactions).filter(A => {
        var I;
        return ((I = A.inMessage.src) === null || I === void 0 ? void 0 : I.equals(t.from)) || !1
      }).on(A => {
        s == null ? u.push(A) : s.possibleMessages.findIndex(I => I.hash == A.inMessage.hash) >= 0 && (i == null || i(A))
      });
      const _ = await this.send(t),
        h = _.outMessages.filter(A => {
          var I;
          return ((I = A.dst) === null || I === void 0 ? void 0 : I.equals(this.address)) || !1
        });
      s = {
        transaction: _,
        possibleMessages: h
      };
      const p = u.find(A => h.findIndex(I => I.hash == A.inMessage.hash) >= 0);
      p != null && (i == null || i(p));
      const C = await o;
      let w;
      try {
        const A = await this.provider.rawApi.decodeTransaction({
          transaction: (0, Mt.serializeTransaction)(C),
          abi: this.abi,
          method: this.method
        });
        A != null && (w = this.functionAbi.outputs != null ? (0, Mt.parseTokensObject)(this.functionAbi.outputs, A.output) : {})
      } catch (A) {
        console.error(A)
      }
      return {
        parentTransaction: s.transaction,
        childTransaction: C,
        output: w
      }
    } finally {
      r && await e.unsubscribe()
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
        transaction: r,
        output: s
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
      transaction: (0, Mt.parseTransaction)(r),
      output: s != null ? (0, Mt.parseTokensObject)(this.functionAbi.outputs, s) : void 0
    }
  }
  async sendExternalDelayed(t) {
    await this.provider.ensureInitialized();
    const e = new Ne.DelayedTransactions,
      r = await this.provider.subscribe("messageStatusUpdated");
    r.on("data", o => {
      o.address.equals(this.address) && e.fillTransaction(o.hash, o.transaction)
    });
    const {
      message: s
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
      throw r.unsubscribe().catch(console.error), o
    }), i = e.waitTransaction(this.address, s.hash).finally(() => r.unsubscribe().catch(console.error));
    return {
      messageHash: s.hash,
      expireAt: s.expireAt,
      transaction: i
    }
  }
  async call(t = {}) {
    await this.provider.ensureInitialized();
    const {
      output: e,
      code: r
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
    if (e == null || r != 0) throw new ms(r);
    return (0, Mt.parseTokensObject)(this.functionAbi.outputs, e)
  }
  async executeExternal(t) {
    await this.provider.ensureInitialized();
    const {
      transaction: e,
      newState: r,
      output: s
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
      newState: r,
      output: s !== void 0 ? (0, Mt.parseTokensObject)(this.functionAbi.outputs, s) : void 0
    }
  }
  async executeInternal(t) {
    await this.provider.ensureInitialized();
    const {
      transaction: e,
      newState: r,
      output: s
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
      newState: r,
      output: s !== void 0 ? (0, Mt.parseTokensObject)(this.functionAbi.outputs, s) : void 0
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
var ws = {};
Object.defineProperty(ws, "__esModule", {
  value: !0
});
(function(n) {
  var t = tt && tt.__createBinding || (Object.create ? function(v, b, F, K) {
      K === void 0 && (K = F);
      var B = Object.getOwnPropertyDescriptor(b, F);
      (!B || ("get" in B ? !b.__esModule : B.writable || B.configurable)) && (B = {
        enumerable: !0,
        get: function() {
          return b[F]
        }
      }), Object.defineProperty(v, K, B)
    } : function(v, b, F, K) {
      K === void 0 && (K = F), v[K] = b[F]
    }),
    e = tt && tt.__setModuleDefault || (Object.create ? function(v, b) {
      Object.defineProperty(v, "default", {
        enumerable: !0,
        value: b
      })
    } : function(v, b) {
      v.default = b
    }),
    r = tt && tt.__importStar || function(v) {
      if (v && v.__esModule) return v;
      var b = {};
      if (v != null)
        for (var F in v) F !== "default" && Object.prototype.hasOwnProperty.call(v, F) && t(b, v, F);
      return e(b, v), b
    },
    s = tt && tt.__exportStar || function(v, b) {
      for (var F in v) F !== "default" && !Object.prototype.hasOwnProperty.call(b, F) && t(b, v, F)
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.ProviderNotInitializedException = n.ProviderNotFoundException = n.ProviderRpcClient = n.hasEverscaleProvider = n.LT_COLLATOR = n.isAddressObject = n.mergeTransactions = n.MessageExpiredException = n.AddressLiteral = n.Address = n.Subscriber = void 0;
  const i = Tt,
    o = Be,
    u = r(qe),
    _ = r(Me);
  s(ws, n), s(Tt, n), s(Me, n);
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
  let w;
  !C || document.readyState === "complete" ? w = Promise.resolve() : w = new Promise(v => {
    window.addEventListener("load", () => {
      v()
    })
  });
  const A = () => C ? window.__ever || window.ton : void 0;
  async function I() {
    return C ? (await w, window.__hasEverscaleProvider === !0 || window.hasTonProvider === !0) : !1
  }
  n.hasEverscaleProvider = I;
  class f {
    constructor(b = {}) {
      this._subscriptions = {
        connected: new Map,
        disconnected: new Map,
        transactionsFound: new Map,
        contractStateChanged: new Map,
        messageStatusUpdated: new Map,
        networkChanged: new Map,
        permissionsChanged: new Map,
        loggedOut: new Map
      }, this._contractSubscriptions = new Map, this._properties = b;
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
      }), b.forceUseFallback === !0 ? this._initializationPromise = b.fallback != null ? b.fallback().then(l => {
        this._provider = l
      }) : Promise.resolve() : (this._provider = A(), this._provider != null ? this._initializationPromise = Promise.resolve() : this._initializationPromise = I().then(l => new Promise(d => {
        if (!l) return d();
        if (this._provider = A(), this._provider != null) d();
        else {
          const g = window.__hasEverscaleProvider === !0 ? "ever#initialized" : "ton#initialized";
          window.addEventListener(g, P => {
            this._provider = A(), d()
          })
        }
      })).then(async () => {
        this._provider == null && b.fallback != null && (this._provider = await b.fallback())
      })), this._initializationPromise.then(() => {
        this._provider != null && this._registerEventHandlers(this._provider)
      })
    }
    async hasProvider() {
      return this._properties.fallback != null ? !0 : I()
    }
    async ensureInitialized() {
      if (await this._initializationPromise, this._provider == null) throw new m
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
    createContract(b, F) {
      return new this.Contract(b, F)
    }
    createSubscriber() {
      return new this.Subscriber
    }
    async requestPermissions(b) {
      await this.ensureInitialized();
      const F = await this._api.requestPermissions({
        permissions: b.permissions
      });
      return (0, i.parsePermissions)(F)
    }
    async changeAccount() {
      await this.ensureInitialized(), await this._api.changeAccount()
    }
    async disconnect() {
      await this.ensureInitialized(), await this._api.disconnect()
    }
    async subscribe(b, F) {
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
      const B = this._subscriptions[b],
        l = (0, o.getUniqueId)();
      switch (b) {
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
                state: b === "contractStateChanged",
                transactions: b === "transactionsFound"
              };
              T.set(l, O);
              const {
                total: N,
                withoutExcluded: S
              } = y(T.values(), O);
              try {
                (N.transactions !== S.transactions || N.state !== S.state) && await this.rawApi.subscribe({
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
          throw new Error(`Unknown event ${b}`)
      }
    }
    async getProviderState() {
      await this.ensureInitialized();
      const b = await this._api.getProviderState();
      return {
        ...b,
        permissions: (0, i.parsePermissions)(b.permissions)
      }
    }
    async getBalance(b) {
      const {
        state: F
      } = await this.getFullContractState({
        address: b
      });
      return F == null ? "0" : F == null ? void 0 : F.balance
    }
    async getFullContractState(b) {
      return await this.ensureInitialized(), await this._api.getFullContractState({
        address: b.address.toString()
      })
    }
    async computeStorageFee(b) {
      return await this.ensureInitialized(), await this._api.computeStorageFee({
        state: {
          boc: b.state.boc,
          balance: b.state.balance,
          genTimings: {
            ...b.state.genTimings
          },
          lastTransactionId: b.state.lastTransactionId != null ? {
            ...b.state.lastTransactionId
          } : void 0,
          isDeployed: b.state.isDeployed,
          codeHash: b.state.codeHash
        },
        masterchain: b.masterchain,
        timestamp: b.timestamp
      })
    }
    async getAccountsByCodeHash(b) {
      await this.ensureInitialized();
      const {
        accounts: F,
        continuation: K
      } = await this._api.getAccountsByCodeHash({
        ...b
      });
      return {
        accounts: F.map(B => new o.Address(B)),
        continuation: K
      }
    }
    async getTransactions(b) {
      await this.ensureInitialized();
      const {
        transactions: F,
        continuation: K,
        info: B
      } = await this._api.getTransactions({
        ...b,
        address: b.address.toString()
      });
      return {
        transactions: F.map(i.parseTransaction),
        continuation: K,
        info: B
      }
    }
    async getTransaction(b) {
      await this.ensureInitialized();
      const {
        transaction: F
      } = await this._api.getTransaction({
        ...b
      });
      return {
        transaction: F ? (0, i.parseTransaction)(F) : void 0
      }
    }
    async getExpectedAddress(b, F) {
      const {
        address: K
      } = await this.getStateInit(b, F);
      return K
    }
    async getStateInit(b, F) {
      await this.ensureInitialized();
      const {
        address: K,
        stateInit: B,
        hash: l
      } = await this._api.getExpectedAddress({
        abi: JSON.stringify(b),
        ...F,
        initParams: (0, i.serializeTokensObject)(F.initParams)
      });
      return {
        address: new o.Address(K),
        stateInit: B,
        hash: l
      }
    }
    async unpackInitData(b, F) {
      await this.ensureInitialized();
      const {
        publicKey: K,
        initParams: B
      } = await this._api.unpackInitData({
        abi: JSON.stringify(b),
        data: F
      });
      return {
        publicKey: K,
        initParams: (0, i.parsePartialTokensObject)(b.data, B)
      }
    }
    async getBocHash(b) {
      return await this.ensureInitialized(), await this._api.getBocHash({
        boc: b
      }).then(({
        hash: F
      }) => F)
    }
    async packIntoCell(b) {
      return await this.ensureInitialized(), await this._api.packIntoCell({
        abiVersion: b.abiVersion,
        structure: b.structure,
        data: (0, i.serializeTokensObject)(b.data)
      })
    }
    async unpackFromCell(b) {
      await this.ensureInitialized();
      const {
        data: F
      } = await this._api.unpackFromCell({
        ...b,
        structure: b.structure
      });
      return {
        data: (0, i.parseTokensObject)(b.structure, F)
      }
    }
    async extractPublicKey(b) {
      await this.ensureInitialized();
      const {
        publicKey: F
      } = await this._api.extractPublicKey({
        boc: b
      });
      return F
    }
    async codeToTvc(b) {
      await this.ensureInitialized();
      const {
        tvc: F
      } = await this._api.codeToTvc({
        code: b
      });
      return F
    }
    async mergeTvc(b) {
      return await this.ensureInitialized(), await this._api.mergeTvc(b)
    }
    async splitTvc(b) {
      return await this.ensureInitialized(), await this._api.splitTvc({
        tvc: b
      })
    }
    async setCodeSalt(b) {
      let F;
      if (typeof b.salt == "string") await this.ensureInitialized(), F = b.salt;
      else {
        const {
          boc: K
        } = await this.packIntoCell(b.salt);
        F = K
      }
      return await this._api.setCodeSalt({
        code: b.code,
        salt: F
      })
    }
    async getCodeSalt(b) {
      await this.ensureInitialized();
      const {
        salt: F
      } = await this.rawApi.getCodeSalt({
        code: b.code
      });
      return F
    }
    async addAsset(b) {
      await this.ensureInitialized();
      let F;
      switch (b.type) {
        case "tip3_token": {
          F = {
            rootContract: b.params.rootContract.toString()
          };
          break
        }
        default:
          throw new Error("Unknown asset type")
      }
      return await this._api.addAsset({
        account: b.account.toString(),
        type: b.type,
        params: F
      })
    }
    async verifySignature(b) {
      return await this.ensureInitialized(), await this._api.verifySignature(b)
    }
    async signData(b) {
      return await this.ensureInitialized(), await this._api.signData(b)
    }
    async signDataRaw(b) {
      return await this.ensureInitialized(), await this._api.signDataRaw(b)
    }
    async encryptData(b) {
      await this.ensureInitialized();
      const {
        encryptedData: F
      } = await this._api.encryptData(b);
      return F
    }
    async decryptData(b) {
      await this.ensureInitialized();
      const {
        data: F
      } = await this._api.decryptData({
        encryptedData: b
      });
      return F
    }
    async sendMessage(b) {
      await this.ensureInitialized();
      const {
        transaction: F
      } = await this._api.sendMessage({
        sender: b.sender.toString(),
        recipient: b.recipient.toString(),
        amount: b.amount,
        bounce: b.bounce,
        payload: b.payload ? {
          abi: b.payload.abi,
          method: b.payload.method,
          params: (0, i.serializeTokensObject)(b.payload.params)
        } : void 0,
        stateInit: b.stateInit
      });
      return {
        transaction: (0, i.parseTransaction)(F)
      }
    }
    async sendMessageDelayed(b) {
      await this.ensureInitialized();
      const F = new o.DelayedTransactions,
        K = await this.subscribe("messageStatusUpdated");
      K.on("data", d => {
        d.address.equals(b.sender) && F.fillTransaction(d.hash, d.transaction)
      });
      const {
        message: B
      } = await this._api.sendMessageDelayed({
        sender: b.sender.toString(),
        recipient: b.recipient.toString(),
        amount: b.amount,
        bounce: b.bounce,
        payload: b.payload ? {
          abi: b.payload.abi,
          method: b.payload.method,
          params: (0, i.serializeTokensObject)(b.payload.params)
        } : void 0,
        stateInit: b.stateInit
      }).catch(d => {
        throw K.unsubscribe().catch(console.error), d
      }), l = F.waitTransaction(b.sender, B.hash).finally(() => K.unsubscribe().catch(console.error));
      return {
        messageHash: B.hash,
        expireAt: B.expireAt,
        transaction: l
      }
    }
    async addNetwork(b) {
      return await this.ensureInitialized(), await this._api.addNetwork(b)
    }
    async changeNetwork(b) {
      return await this.ensureInitialized(), await this._api.changeNetwork(b)
    }
    _registerEventHandlers(b) {
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
      for (const [K, B] of Object.entries(F)) b.addListener(K, l => {
        const d = this._subscriptions[K],
          g = B(l);
        for (const P of d.values()) P(g)
      })
    }
  }
  n.ProviderRpcClient = f;
  class m extends Error {
    constructor() {
      super("Everscale provider was not found")
    }
  }
  n.ProviderNotFoundException = m;
  class j extends Error {
    constructor() {
      super("Everscale provider was not initialized yet")
    }
  }
  n.ProviderNotInitializedException = j;

  function y(v, b) {
    const F = {
        state: !1,
        transactions: !1
      },
      K = Object.assign({}, F);
    for (const B of v) {
      if (K.transactions && K.state) break;
      F.state || (F.state = B.state), F.transactions || (F.transactions = B.transactions), B !== b && (K.state || (K.state = B.state), K.transactions || (K.transactions = B.transactions))
    }
    return {
      total: F,
      withoutExcluded: K
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
var kn = {};
Object.defineProperty(kn, "__esModule", {
  value: !0
});
var ys = kn.AirdropStatus = void 0,
  Or;
(function(n) {
  n.NoClaimId = "NoClaimId", n.NoUser = "NoUser", n.HasClaimed = "HasClaimed", n.CanClaim = "CanClaim", n.InQueue = "InQueue", n.NoReward = "NoReward", n.NoAirdrop = "NoAirdrop", n.Loading = "Loading"
})(Or || (ys = kn.AirdropStatus = Or = {}));
var sr = {};
(function(n) {
  var t = tt && tt.__awaiter || function(p, C, w, A) {
      function I(f) {
        return f instanceof w ? f : new w(function(m) {
          m(f)
        })
      }
      return new(w || (w = Promise))(function(f, m) {
        function j(b) {
          try {
            v(A.next(b))
          } catch (F) {
            m(F)
          }
        }

        function y(b) {
          try {
            v(A.throw(b))
          } catch (F) {
            m(F)
          }
        }

        function v(b) {
          b.done ? f(b.value) : I(b.value).then(j, y)
        }
        v((A = A.apply(p, C || [])).next())
      })
    },
    e = tt && tt.__generator || function(p, C) {
      var w = {
          label: 0,
          sent: function() {
            if (f[0] & 1) throw f[1];
            return f[1]
          },
          trys: [],
          ops: []
        },
        A, I, f, m = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
      return m.next = j(0), m.throw = j(1), m.return = j(2), typeof Symbol == "function" && (m[Symbol.iterator] = function() {
        return this
      }), m;

      function j(v) {
        return function(b) {
          return y([v, b])
        }
      }

      function y(v) {
        if (A) throw new TypeError("Generator is already executing.");
        for (; m && (m = 0, v[0] && (w = 0)), w;) try {
          if (A = 1, I && (f = v[0] & 2 ? I.return : v[0] ? I.throw || ((f = I.return) && f.call(I), 0) : I.next) && !(f = f.call(I, v[1])).done) return f;
          switch (I = 0, f && (v = [v[0] & 2, f.value]), v[0]) {
            case 0:
            case 1:
              f = v;
              break;
            case 4:
              return w.label++, {
                value: v[1],
                done: !1
              };
            case 5:
              w.label++, I = v[1], v = [0];
              continue;
            case 7:
              v = w.ops.pop(), w.trys.pop();
              continue;
            default:
              if (f = w.trys, !(f = f.length > 0 && f[f.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                w = 0;
                continue
              }
              if (v[0] === 3 && (!f || v[1] > f[0] && v[1] < f[3])) {
                w.label = v[1];
                break
              }
              if (v[0] === 6 && w.label < f[1]) {
                w.label = f[1], f = v;
                break
              }
              if (f && w.label < f[2]) {
                w.label = f[2], w.ops.push(v);
                break
              }
              f[2] && w.ops.pop(), w.trys.pop();
              continue
          }
          v = C.call(p, w)
        } catch (b) {
          v = [6, b], I = 0
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
    r = tt && tt.__spreadArray || function(p, C, w) {
      if (w || arguments.length === 2)
        for (var A = 0, I = C.length, f; A < I; A++)(f || !(A in C)) && (f || (f = Array.prototype.slice.call(C, 0, A)), f[A] = C[A]);
      return p.concat(f || Array.prototype.slice.call(C))
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.buildTransaction = n.getCodeAirdropAndAmount = n.checkQueue = void 0;
  var s = wn,
    i = ve,
    o = fe,
    u = function(p, C, w) {
      return t(void 0, void 0, void 0, function() {
        var A, I;
        return e(this, function(f) {
          switch (f.label) {
            case 0:
              return [4, fetch("".concat(p, "/v2/").concat(C, "/").concat(w, "/claim_data"))];
            case 1:
              return A = f.sent(), [4, A.json()];
            case 2:
              return I = f.sent(), [2, I]
          }
        })
      })
    };
  n.checkQueue = u;
  var _ = function(p, C) {
    for (var w = [], A = 2; A < arguments.length; A++) w[A - 2] = arguments[A];
    return t(void 0, r([p, C], w, !0), void 0, function(I, f, m) {
      var j, v, b, F, y, v, b, F;
      return m === void 0 && (m = "10000000"), e(this, function(K) {
        switch (K.label) {
          case 0:
            j = s.Address.parseFriendly(I).address.toRawString(), K.label = 1;
          case 1:
            return K.trys.push([1, 4, , 7]), v = new f.Contract(o.AirdropFactoryAbiV1, new i.Address(j)), [4, v.fields._codeAirdrop()];
          case 2:
            return b = K.sent(), [4, v.fields._claimMinGas()];
          case 3:
            return F = K.sent(), [2, {
              codeAirdrop: b,
              amount: (parseInt(m, 10) + parseInt(F, 10)).toString()
            }];
          case 4:
            return y = K.sent(), console.warn(y), v = new f.Contract(o.AirdropFactoryAbiV2, new i.Address(j)), [4, v.methods.getAirdropCode().call()];
          case 5:
            return b = K.sent().value0, [4, v.methods.getClaimMinGas().call()];
          case 6:
            return F = K.sent().value0, [2, {
              codeAirdrop: b,
              amount: (parseInt(m, 10) + parseInt(F, 10)).toString()
            }];
          case 7:
            return [2]
        }
      })
    })
  };
  n.getCodeAirdropAndAmount = _;
  var h = function(p, C, w) {
    for (var A = [], I = 3; I < arguments.length; I++) A[I - 3] = arguments[I];
    return t(void 0, r([p, C, w], A, !0), void 0, function(f, m, j, y) {
      var v, b, F, K, B, l, d, g;
      return y === void 0 && (y = "10000000"), e(this, function(P) {
        switch (P.label) {
          case 0:
            return [4, m.packIntoCell({
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
            return v = P.sent(), [4, (0, n.getCodeAirdropAndAmount)(f.factory, m, y)];
          case 2:
            return b = P.sent(), F = b.amount, K = b.codeAirdrop, [4, m.mergeTvc({
              code: K,
              data: "te6ccgEBAgEAKAABAcABAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg"
            })];
          case 3:
            return B = P.sent(), [4, m.getStateInit(o.AirdropAbi, {
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
                address: s.Address.parse(g.toString()).toString({
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
})(sr);
(function(n) {
  var t = tt && tt.__assign || function() {
      return t = Object.assign || function(I) {
        for (var f, m = 1, j = arguments.length; m < j; m++) {
          f = arguments[m];
          for (var y in f) Object.prototype.hasOwnProperty.call(f, y) && (I[y] = f[y])
        }
        return I
      }, t.apply(this, arguments)
    },
    e = tt && tt.__createBinding || (Object.create ? function(I, f, m, j) {
      j === void 0 && (j = m);
      var y = Object.getOwnPropertyDescriptor(f, m);
      (!y || ("get" in y ? !f.__esModule : y.writable || y.configurable)) && (y = {
        enumerable: !0,
        get: function() {
          return f[m]
        }
      }), Object.defineProperty(I, j, y)
    } : function(I, f, m, j) {
      j === void 0 && (j = m), I[j] = f[m]
    }),
    r = tt && tt.__exportStar || function(I, f) {
      for (var m in I) m !== "default" && !Object.prototype.hasOwnProperty.call(f, m) && e(f, I, m)
    },
    s = tt && tt.__awaiter || function(I, f, m, j) {
      function y(v) {
        return v instanceof m ? v : new m(function(b) {
          b(v)
        })
      }
      return new(m || (m = Promise))(function(v, b) {
        function F(l) {
          try {
            B(j.next(l))
          } catch (d) {
            b(d)
          }
        }

        function K(l) {
          try {
            B(j.throw(l))
          } catch (d) {
            b(d)
          }
        }

        function B(l) {
          l.done ? v(l.value) : y(l.value).then(F, K)
        }
        B((j = j.apply(I, f || [])).next())
      })
    },
    i = tt && tt.__generator || function(I, f) {
      var m = {
          label: 0,
          sent: function() {
            if (v[0] & 1) throw v[1];
            return v[1]
          },
          trys: [],
          ops: []
        },
        j, y, v, b = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
      return b.next = F(0), b.throw = F(1), b.return = F(2), typeof Symbol == "function" && (b[Symbol.iterator] = function() {
        return this
      }), b;

      function F(B) {
        return function(l) {
          return K([B, l])
        }
      }

      function K(B) {
        if (j) throw new TypeError("Generator is already executing.");
        for (; b && (b = 0, B[0] && (m = 0)), m;) try {
          if (j = 1, y && (v = B[0] & 2 ? y.return : B[0] ? y.throw || ((v = y.return) && v.call(y), 0) : y.next) && !(v = v.call(y, B[1])).done) return v;
          switch (y = 0, v && (B = [B[0] & 2, v.value]), B[0]) {
            case 0:
            case 1:
              v = B;
              break;
            case 4:
              return m.label++, {
                value: B[1],
                done: !1
              };
            case 5:
              m.label++, y = B[1], B = [0];
              continue;
            case 7:
              B = m.ops.pop(), m.trys.pop();
              continue;
            default:
              if (v = m.trys, !(v = v.length > 0 && v[v.length - 1]) && (B[0] === 6 || B[0] === 2)) {
                m = 0;
                continue
              }
              if (B[0] === 3 && (!v || B[1] > v[0] && B[1] < v[3])) {
                m.label = B[1];
                break
              }
              if (B[0] === 6 && m.label < v[1]) {
                m.label = v[1], v = B;
                break
              }
              if (v && m.label < v[2]) {
                m.label = v[2], m.ops.push(B);
                break
              }
              v[2] && m.ops.pop(), m.trys.pop();
              continue
          }
          B = f.call(I, m)
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
    _ = fe,
    h = kn,
    p = sr;
  r(sr, n);
  var C = function() {
      function I(f) {
        this.subscribers = [], this.value = f
      }
      return I.prototype.set = function(f, m) {
        var j, y = this,
          v = t({}, this.value),
          b = t(t({}, v), (j = {}, j[f] = m, j));
        this.value = b, this.subscribers.filter(function(F) {
          F[0];
          var K = F[1];
          return K.length === 0 || K.includes(f)
        }).forEach(function(F) {
          var K = F[0],
            B = F[1];
          if (B.length === 0) K(y.value);
          else
            for (var l = 0; l < B.length; l++) v[B[l]] !== b[B[l]] && K(y.value)
        })
      }, I.prototype.getState = function() {
        return t({}, this.value)
      }, I.prototype.subscribe = function(f) {
        for (var m = this, j = [], y = 1; y < arguments.length; y++) j[y - 1] = arguments[y];
        var v = this.subscribers.push([f, j]);
        return f(this.value),
          function() {
            m.subscribers.splice(v - 1, 1)
          }
      }, I.prototype.unsubscribeAll = function() {
        this.subscribers = []
      }, I
    }(),
    w = {
      claimApiBaseUrl: "https://claim-api-test.d3mo.org",
      deployValue: "10000000"
    },
    A = function() {
      function I(f, m, j, y) {
        y === void 0 && (y = {});
        var v = this,
          b;
        this.tonConnect = f, this.rpc = m, this.clock = j, this.subscribers = [], this.state = new C({
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
        }), this.getState = this.state.getState.bind(this.state), this.subscribe = this.state.subscribe.bind(this.state), this.options = t(t({}, w), y), this.syncStorageData = this.syncStorageData.bind(this), window.addEventListener("storage", this.syncStorageData), this.state.subscribe(this.initSyncClaimData.bind(this), "airdropName", "userAddress"), this.state.subscribe(this.syncStorageKey.bind(this), "airdropName", "userAddress", "claimId"), this.state.subscribe(this.syncFactoryAddress.bind(this), "claimData", "storageData", "claimId"), this.state.subscribe(this.syncAirdropAddress.bind(this), "claimData", "storageData", "claimId"), this.state.subscribe(this.initClaimListener.bind(this), "userAddress", "factoryAddress"), this.state.subscribe(this.syncRemoveStorageTimer.bind(this), "storageKey", "storageData"), this.state.subscribe(this.syncStorageData.bind(this), "storageKey", "claimed"), this.state.subscribe(this.syncClaimed.bind(this), "airdropAddress"), this.state.subscribe(this.syncClaimLoading.bind(this), "storageData"), this.state.subscribe(this.syncStatus.bind(this), "userAddress", "claimed", "claimData", "storageKey", "airdropName", "claimId"), this.state.set("userAddress", (b = this.tonConnect.account) === null || b === void 0 ? void 0 : b.address), this.tonConnectUnsubscribe = this.tonConnect.onStatusChange(function(F) {
          v.state.set("userAddress", F == null ? void 0 : F.account.address)
        })
      }
      return I.prototype.destory = function() {
        var f, m;
        this.state.unsubscribeAll(), clearTimeout(this.removeStorageTimeout), clearTimeout(this.claimDataTimeout), window.removeEventListener("storage", this.syncStorageData), (f = this.tonConnectUnsubscribe) === null || f === void 0 || f.call(this), (m = this.rpcSubscriber) === null || m === void 0 || m.unsubscribe()
      }, I.prototype.setAirdropName = function(f) {
        this.state.set("airdropName", f)
      }, I.prototype.setClaimId = function(f) {
        this.state.set("claimId", f)
      }, I.prototype.claim = function() {
        return s(this, void 0, void 0, function() {
          var f, m, j, y, v, b, F, K, B, l, d, g, P, T, O, N;
          return i(this, function(S) {
            switch (S.label) {
              case 0:
                if (f = this.getState(), m = f.claimData, j = f.storageKey, y = f.claimId, !y) throw new Error("claimId must defined");
                if ((m == null ? void 0 : m.status) !== "signed") throw new Error("claimData.status must be signed");
                if (v = m.rewards.find(function(M) {
                    return M.claimId === y
                  }), !v) throw new Error("rewardData must defined");
                if (!j) throw new Error("storageKey must be defined");
                this.state.set("loading", !0), S.label = 1;
              case 1:
                return S.trys.push([1, 7, , 8]), [4, this.rpc.packIntoCell({
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
                return b = S.sent(), [4, (0, p.getCodeAirdropAndAmount)(v.factory, this.rpc, this.options.deployValue)];
              case 3:
                return F = S.sent(), K = F.codeAirdrop, B = F.amount, [4, this.rpc.mergeTvc({
                  code: K ?? "",
                  data: "te6ccgEBAgEAKAABAcABAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg"
                })];
              case 4:
                return l = S.sent(), [4, this.rpc.getStateInit(_.AirdropAbi, {
                  workchain: 0,
                  initParams: {
                    _data: v.data,
                    _nonce: v.nonce
                  },
                  tvc: l.tvc
                })];
              case 5:
                return d = S.sent(), g = d.stateInit, P = d.address, T = this.clock.time, [4, this.tonConnect.sendTransaction({
                  messages: [{
                    amount: B,
                    address: o.Address.parse(P.toString()).toString({
                      bounceable: !0
                    }),
                    payload: b.boc,
                    stateInit: g
                  }],
                  validUntil: Math.ceil((T + 6e5) / 1e3)
                })];
              case 6:
                return S.sent(), O = {
                  airdrop: v.airdrop,
                  factory: v.factory,
                  until: T + 12e4
                }, localStorage.setItem(j, JSON.stringify(O)), this.state.set("storageData", O), [3, 8];
              case 7:
                return N = S.sent(), console.error(N), [3, 8];
              case 8:
                return this.state.set("loading", !1), [2]
            }
          })
        })
      }, I.prototype.syncFactoryAddress = function() {
        var f, m = this.state.getState(),
          j = m.claimData,
          y = m.storageData,
          v = m.claimId,
          b = void 0;
        (j == null ? void 0 : j.status) === "signed" && v ? b = (f = j.rewards.find(function(F) {
          return F.claimId === v
        })) === null || f === void 0 ? void 0 : f.factory : b = y == null ? void 0 : y.factory, this.state.set("factoryAddress", b)
      }, I.prototype.syncAirdropAddress = function() {
        var f, m = this.state.getState(),
          j = m.claimData,
          y = m.storageData,
          v = m.claimId,
          b = void 0;
        (j == null ? void 0 : j.status) === "signed" && v ? b = (f = j.rewards.find(function(F) {
          return F.claimId === v
        })) === null || f === void 0 ? void 0 : f.airdrop : b = y == null ? void 0 : y.airdrop, this.state.set("airdropAddress", b)
      }, I.prototype.syncStorageKey = function() {
        var f = this.state.getState(),
          m = f.airdropName,
          j = f.userAddress,
          y = f.claimId,
          v = m && j && y ? I.getStorageKey(m, j, y) : null;
        this.state.set("storageKey", v)
      }, I.prototype.syncStorageData = function() {
        var f = this.state.getState(),
          m = f.storageKey,
          j = f.claimed;
        if (j) this.state.set("storageData", null);
        else {
          var y = m ? localStorage.getItem(m) : null;
          if (y) try {
            var v = JSON.parse(y),
              b = this.clock.time < v.until ? v : null;
            this.state.set("storageData", b)
          } catch (F) {
            console.error(F)
          }
        }
      }, I.prototype.syncRemoveStorageTimer = function() {
        var f = this,
          m = this.clock.time,
          j = this.state.getState(),
          y = j.storageKey,
          v = j.storageData;
        clearTimeout(this.removeStorageTimeout), y && v && m < v.until && (this.removeStorageTimeout = setTimeout(function() {
          localStorage.removeItem(y), f.state.set("storageData", null)
        }, v.until - m))
      }, I.prototype.syncClaimed = function() {
        return s(this, void 0, void 0, function() {
          var f, m, j, y;
          return i(this, function(v) {
            switch (v.label) {
              case 0:
                if (f = this.state.getState().airdropAddress, this.state.set("claimed", null), !f) return [2];
                this.state.set("loading", !0), v.label = 1;
              case 1:
                return v.trys.push([1, 3, , 4]), m = o.Address.parseFriendly(f).address.toRawString(), [4, this.rpc.getFullContractState({
                  address: new u.Address(m)
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
      }, I.prototype.syncClaimLoading = function() {
        var f = this.state.getState().storageData;
        this.state.set("claimLoading", !!f)
      }, I.prototype.syncStatus = function() {
        var f, m, j, y = h.AirdropStatus.Loading,
          v = this.getState();
        v.userAddress ? v.claimed === !0 ? y = h.AirdropStatus.HasClaimed : v.claimed === !1 && ((f = v.claimData) === null || f === void 0 ? void 0 : f.status) === "signed" && v.storageKey ? y = h.AirdropStatus.CanClaim : ((m = v.claimData) === null || m === void 0 ? void 0 : m.status) === "inQueue" ? y = h.AirdropStatus.InQueue : ((j = v.claimData) === null || j === void 0 ? void 0 : j.status) === "noReward" ? y = h.AirdropStatus.NoReward : v.airdropName ? v.claimId || (y = h.AirdropStatus.NoClaimId) : y = h.AirdropStatus.NoAirdrop : y = h.AirdropStatus.NoUser, this.state.set("status", y)
      }, I.prototype.initSyncClaimData = function() {
        var f = this;
        clearInterval(this.claimDataTimeout), this.state.set("claimData", null);
        var m = this.state.getState(),
          j = m.airdropName,
          y = m.userAddress;
        if (!(!j || !y)) {
          var v = function() {
            return s(f, void 0, void 0, function() {
              var b, F, K, B;
              return i(this, function(l) {
                switch (l.label) {
                  case 0:
                    this.state.set("loading", !0), l.label = 1;
                  case 1:
                    return l.trys.push([1, 4, , 5]), b = this.options.claimApiBaseUrl, [4, fetch("".concat(b, "/v2/").concat(j, "/").concat(y, "/claim_data"))];
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
      }, I.prototype.initClaimListener = function() {
        return s(this, void 0, void 0, function() {
          var f, m, j, y, v, b = this,
            F;
          return i(this, function(K) {
            switch (K.label) {
              case 0:
                return (F = this.rpcSubscriber) === null || F === void 0 || F.unsubscribe(), f = this.state.getState(), m = f.factoryAddress, j = f.userAddress, !m || !j ? [2] : (y = o.Address.parseFriendly(m).address.toRawString(), v = new this.rpc.Contract(_.AirdropFactoryAbiV2, new u.Address(y)), this.rpcSubscriber = new this.rpc.Subscriber, [4, this.rpcSubscriber.transactions(v.address).flatMap(function(B) {
                  return B.transactions
                }).flatMap(function(B) {
                  return v.decodeTransactionEvents({
                    transaction: B
                  })
                }).filterMap(function(B) {
                  if (B.event === "AirdropClaimed" && B.data.recipient.toString() === j) return b.state.set("claimed", !0), !0
                }).first()]);
              case 1:
                return K.sent(), [2]
            }
          })
        })
      }, I.getStorageKey = function(f, m, j) {
        return "airdrop-v2-".concat(f, "-").concat(m, "-").concat(j)
      }, I
    }();
  n.AirdropUI = A
})(gs);
var ir = {};
let c;
const vs = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && vs.decode();
let He = null;

function $e() {
  return (He === null || He.byteLength === 0) && (He = new Uint8Array(c.memory.buffer)), He
}

function bt(n, t) {
  return n = n >>> 0, vs.decode($e().subarray(n, n + t))
}
const de = new Array(128).fill(void 0);
de.push(void 0, null, !0, !1);
let Xe = de.length;

function J(n) {
  Xe === de.length && de.push(de.length + 1);
  const t = Xe;
  return Xe = de[t], de[t] = n, t
}

function X(n) {
  return de[n]
}

function wt(n) {
  return n == null
}
let ke = null;

function R() {
  return (ke === null || ke.buffer.detached === !0 || ke.buffer.detached === void 0 && ke.buffer !== c.memory.buffer) && (ke = new DataView(c.memory.buffer)), ke
}
let H = 0;
const gn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  Mo = typeof gn.encodeInto == "function" ? function(n, t) {
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
  let r = n.length,
    s = t(r, 1) >>> 0;
  const i = $e();
  let o = 0;
  for (; o < r; o++) {
    const u = n.charCodeAt(o);
    if (u > 127) break;
    i[s + o] = u
  }
  if (o !== r) {
    o !== 0 && (n = n.slice(o)), s = e(s, r, r = o + n.length * 3, 1) >>> 0;
    const u = $e().subarray(s + o, s + r),
      _ = Mo(n, u);
    o += _.written, s = e(s, r, o, 1) >>> 0
  }
  return H = o, s
}

function Oo(n) {
  n < 132 || (de[n] = Xe, Xe = n)
}

function W(n) {
  const t = X(n);
  return Oo(n), t
}

function ar(n) {
  const t = typeof n;
  if (t == "number" || t == "boolean" || n == null) return `${n}`;
  if (t == "string") return `"${n}"`;
  if (t == "symbol") {
    const s = n.description;
    return s == null ? "Symbol" : `Symbol(${s})`
  }
  if (t == "function") {
    const s = n.name;
    return typeof s == "string" && s.length > 0 ? `Function(${s})` : "Function"
  }
  if (Array.isArray(n)) {
    const s = n.length;
    let i = "[";
    s > 0 && (i += ar(n[0]));
    for (let o = 1; o < s; o++) i += ", " + ar(n[o]);
    return i += "]", i
  }
  const e = /\[object ([^\]]+)\]/.exec(toString.call(n));
  let r;
  if (e.length > 1) r = e[1];
  else return toString.call(n);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(n) + ")"
  } catch {
    return "Object"
  }
  return n instanceof Error ? `${n.name}: ${n.message}
${n.stack}` : r
}
const Dr = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => {
  c.__wbindgen_export_2.get(n.dtor)(n.a, n.b)
});

function Do(n, t, e, r) {
  const s = {
      a: n,
      b: t,
      cnt: 1,
      dtor: e
    },
    i = (...o) => {
      s.cnt++;
      const u = s.a;
      s.a = 0;
      try {
        return r(u, s.b, ...o)
      } finally {
        --s.cnt === 0 ? (c.__wbindgen_export_2.get(s.dtor)(u, s.b), Dr.unregister(s)) : s.a = u
      }
    };
  return i.original = s, Dr.register(i, s, s), i
}

function Ro(n, t, e) {
  c._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0fff6d0ad1f7528f(n, t, J(e))
}

function Lo(n, t) {
  return n = n >>> 0, $e().subarray(n / 1, n / 1 + t)
}

function Fo(n, t) {
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

function re(n, t) {
  if (!(n instanceof t)) throw new Error(`expected instance of ${t.name}`);
  return n.ptr
}

function No(n) {
  const t = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
    e = H;
  return c.checkAddress(t, e) !== 0
}

function $o(n) {
  let t, e;
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.repackAddress(h, p, C);
    var r = R().getInt32(h + 4 * 0, !0),
      s = R().getInt32(h + 4 * 1, !0),
      i = R().getInt32(h + 4 * 2, !0),
      o = R().getInt32(h + 4 * 3, !0),
      u = r,
      _ = s;
    if (o) throw u = 0, _ = 0, W(i);
    return t = u, e = _, bt(u, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function jo(n, t, e, r, s, i, o) {
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16);
    re(n, _e);
    const C = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = H,
      A = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      I = H,
      f = V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      m = H;
    c.runLocal(p, n.__wbg_ptr, C, w, A, I, f, m, J(s), i, !wt(o), wt(o) ? 0 : o);
    var u = R().getInt32(p + 4 * 0, !0),
      _ = R().getInt32(p + 4 * 1, !0),
      h = R().getInt32(p + 4 * 2, !0);
    if (h) throw W(_);
    return W(u)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Ko(n) {
  let t, e;
  try {
    const C = c.__wbindgen_add_to_stack_pointer(-16);
    var r = wt(n) ? 0 : V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      s = H;
    c.makeFullAccountBoc(C, r, s);
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

function Bo(n) {
  try {
    const s = c.__wbindgen_add_to_stack_pointer(-16),
      i = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.parseFullAccountBoc(s, i, o);
    var t = R().getInt32(s + 4 * 0, !0),
      e = R().getInt32(s + 4 * 1, !0),
      r = R().getInt32(s + 4 * 2, !0);
    if (r) throw W(e);
    return W(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function xo(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H;
    c.parseFullAccountStateInit(i, o, u);
    var t = R().getInt32(i + 4 * 0, !0),
      e = R().getInt32(i + 4 * 1, !0),
      r = R().getInt32(i + 4 * 2, !0),
      s = R().getInt32(i + 4 * 3, !0);
    if (s) throw W(r);
    let _;
    return t !== 0 && (_ = bt(t, e).slice(), c.__wbindgen_free(t, e * 1, 1)), _
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function zo(n, t, e, r) {
  try {
    const u = c.__wbindgen_add_to_stack_pointer(-16),
      _ = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H,
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.computeStorageFee(u, _, h, p, C, e, r);
    var s = R().getInt32(u + 4 * 0, !0),
      i = R().getInt32(u + 4 * 1, !0),
      o = R().getInt32(u + 4 * 2, !0);
    if (o) throw W(i);
    return W(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Uo(n, t, e, r, s, i, o) {
  try {
    const w = c.__wbindgen_add_to_stack_pointer(-16),
      A = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      I = H,
      f = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      m = H,
      j = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      y = H;
    var u = wt(i) ? 0 : V(i, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H;
    c.executeLocal(w, A, I, f, m, j, y, r, s, u, _, !wt(o), wt(o) ? 0 : o);
    var h = R().getInt32(w + 4 * 0, !0),
      p = R().getInt32(w + 4 * 1, !0),
      C = R().getInt32(w + 4 * 2, !0);
    if (C) throw W(p);
    return W(h)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Wo(n, t, e, r, s) {
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16),
      C = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = H,
      A = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      I = H;
    var i = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.getExpectedAddress(p, C, w, A, I, e, i, o, J(s));
    var u = R().getInt32(p + 4 * 0, !0),
      _ = R().getInt32(p + 4 * 1, !0),
      h = R().getInt32(p + 4 * 2, !0);
    if (h) throw W(_);
    return W(u)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Go(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      u = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H,
      h = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    c.unpackContractFields(o, u, _, h, p, e);
    var r = R().getInt32(o + 4 * 0, !0),
      s = R().getInt32(o + 4 * 1, !0),
      i = R().getInt32(o + 4 * 2, !0);
    if (i) throw W(s);
    return W(r)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Ho(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H,
      _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    c.unpackInitData(i, o, u, _, h);
    var e = R().getInt32(i + 4 * 0, !0),
      r = R().getInt32(i + 4 * 1, !0),
      s = R().getInt32(i + 4 * 2, !0);
    if (s) throw W(r);
    return W(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Vo(n) {
  let t, e;
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.getBocHash(h, p, C);
    var r = R().getInt32(h + 4 * 0, !0),
      s = R().getInt32(h + 4 * 1, !0),
      i = R().getInt32(h + 4 * 2, !0),
      o = R().getInt32(h + 4 * 3, !0),
      u = r,
      _ = s;
    if (o) throw u = 0, _ = 0, W(i);
    return t = u, e = _, bt(u, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function Qo(n, t, e) {
  try {
    const _ = c.__wbindgen_add_to_stack_pointer(-16);
    var r = wt(e) ? 0 : V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      s = H;
    c.packIntoCell(_, J(n), J(t), r, s);
    var i = R().getInt32(_ + 4 * 0, !0),
      o = R().getInt32(_ + 4 * 1, !0),
      u = R().getInt32(_ + 4 * 2, !0);
    if (u) throw W(o);
    return W(i)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Jo(n, t, e, r) {
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    var s = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = H;
    c.unpackFromCell(h, J(n), p, C, e, s, i);
    var o = R().getInt32(h + 4 * 0, !0),
      u = R().getInt32(h + 4 * 1, !0),
      _ = R().getInt32(h + 4 * 2, !0);
    if (_) throw W(u);
    return W(o)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Xo(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H;
    c.extractContractData(i, o, u);
    var t = R().getInt32(i + 4 * 0, !0),
      e = R().getInt32(i + 4 * 1, !0),
      r = R().getInt32(i + 4 * 2, !0),
      s = R().getInt32(i + 4 * 3, !0);
    if (s) throw W(r);
    let _;
    return t !== 0 && (_ = bt(t, e).slice(), c.__wbindgen_free(t, e * 1, 1)), _
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Yo(n) {
  let t, e;
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.extractPublicKey(h, p, C);
    var r = R().getInt32(h + 4 * 0, !0),
      s = R().getInt32(h + 4 * 1, !0),
      i = R().getInt32(h + 4 * 2, !0),
      o = R().getInt32(h + 4 * 3, !0),
      u = r,
      _ = s;
    if (o) throw u = 0, _ = 0, W(i);
    return t = u, e = _, bt(u, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function Zo(n) {
  try {
    const s = c.__wbindgen_add_to_stack_pointer(-16),
      i = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.codeToTvc(s, i, o);
    var t = R().getInt32(s + 4 * 0, !0),
      e = R().getInt32(s + 4 * 1, !0),
      r = R().getInt32(s + 4 * 2, !0);
    if (r) throw W(e);
    return W(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function qo(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H,
      _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    c.mergeTvc(i, o, u, _, h);
    var e = R().getInt32(i + 4 * 0, !0),
      r = R().getInt32(i + 4 * 1, !0),
      s = R().getInt32(i + 4 * 2, !0);
    if (s) throw W(r);
    return W(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function tc(n) {
  try {
    const s = c.__wbindgen_add_to_stack_pointer(-16),
      i = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.splitTvc(s, i, o);
    var t = R().getInt32(s + 4 * 0, !0),
      e = R().getInt32(s + 4 * 1, !0),
      r = R().getInt32(s + 4 * 2, !0);
    if (r) throw W(e);
    return W(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function ec(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H,
      _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    c.setCodeSalt(i, o, u, _, h);
    var e = R().getInt32(i + 4 * 0, !0),
      r = R().getInt32(i + 4 * 1, !0),
      s = R().getInt32(i + 4 * 2, !0);
    if (s) throw W(r);
    return W(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function nc(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H;
    c.getCodeSalt(i, o, u);
    var t = R().getInt32(i + 4 * 0, !0),
      e = R().getInt32(i + 4 * 1, !0),
      r = R().getInt32(i + 4 * 2, !0),
      s = R().getInt32(i + 4 * 3, !0);
    if (s) throw W(r);
    let _;
    return t !== 0 && (_ = bt(t, e).slice(), c.__wbindgen_free(t, e * 1, 1)), _
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function rc(n, t, e) {
  let r, s;
  try {
    const C = c.__wbindgen_add_to_stack_pointer(-16),
      w = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H,
      I = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H;
    c.encodeInternalInput(C, w, A, I, f, J(e));
    var i = R().getInt32(C + 4 * 0, !0),
      o = R().getInt32(C + 4 * 1, !0),
      u = R().getInt32(C + 4 * 2, !0),
      _ = R().getInt32(C + 4 * 3, !0),
      h = i,
      p = o;
    if (_) throw h = 0, p = 0, W(u);
    return r = h, s = p, bt(h, p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(r, s, 1)
  }
}

function sc(n, t, e, r, s, i, o) {
  let u, _;
  try {
    const F = c.__wbindgen_add_to_stack_pointer(-16);
    var h = wt(n) ? 0 : V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    const K = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      B = H;
    var C = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = H,
      A = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      I = H;
    const l = V(i, c.__wbindgen_malloc, c.__wbindgen_realloc),
      d = H;
    c.encodeInternalMessage(F, h, p, K, B, e, C, w, A, I, l, d, wt(o) ? 16777215 : o ? 1 : 0);
    var f = R().getInt32(F + 4 * 0, !0),
      m = R().getInt32(F + 4 * 1, !0),
      j = R().getInt32(F + 4 * 2, !0),
      y = R().getInt32(F + 4 * 3, !0),
      v = f,
      b = m;
    if (y) throw v = 0, b = 0, W(j);
    return u = v, _ = b, bt(v, b)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(u, _, 1)
  }
}

function ic(n, t, e, r) {
  try {
    const u = c.__wbindgen_add_to_stack_pointer(-16),
      _ = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H,
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.decodeInput(u, _, h, p, C, J(e), r);
    var s = R().getInt32(u + 4 * 0, !0),
      i = R().getInt32(u + 4 * 1, !0),
      o = R().getInt32(u + 4 * 2, !0);
    if (o) throw W(i);
    return W(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function ac(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      u = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H,
      h = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    c.decodeEvent(o, u, _, h, p, J(e));
    var r = R().getInt32(o + 4 * 0, !0),
      s = R().getInt32(o + 4 * 1, !0),
      i = R().getInt32(o + 4 * 2, !0);
    if (i) throw W(s);
    return W(r)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function oc(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      u = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H,
      h = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = H;
    c.decodeOutput(o, u, _, h, p, J(e));
    var r = R().getInt32(o + 4 * 0, !0),
      s = R().getInt32(o + 4 * 1, !0),
      i = R().getInt32(o + 4 * 2, !0);
    if (i) throw W(s);
    return W(r)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function cc(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      u = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H;
    c.decodeTransaction(o, J(n), u, _, J(e));
    var r = R().getInt32(o + 4 * 0, !0),
      s = R().getInt32(o + 4 * 1, !0),
      i = R().getInt32(o + 4 * 2, !0);
    if (i) throw W(s);
    return W(r)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function lc(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H;
    c.decodeTransactionEvents(i, J(n), o, u);
    var e = R().getInt32(i + 4 * 0, !0),
      r = R().getInt32(i + 4 * 1, !0),
      s = R().getInt32(i + 4 * 2, !0);
    if (s) throw W(r);
    return W(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function uc(n) {
  try {
    const s = c.__wbindgen_add_to_stack_pointer(-16),
      i = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.unpackTransactionTree(s, i, o);
    var t = R().getInt32(s + 4 * 0, !0),
      e = R().getInt32(s + 4 * 1, !0),
      r = R().getInt32(s + 4 * 2, !0);
    if (r) throw W(e);
    return W(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function dc(n) {
  let t, e;
  try {
    const h = c.__wbindgen_add_to_stack_pointer(-16),
      p = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H;
    c.getDataHash(h, p, C);
    var r = R().getInt32(h + 4 * 0, !0),
      s = R().getInt32(h + 4 * 1, !0),
      i = R().getInt32(h + 4 * 2, !0),
      o = R().getInt32(h + 4 * 3, !0),
      u = r,
      _ = s;
    if (o) throw u = 0, _ = 0, W(i);
    return t = u, e = _, bt(u, _)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function _c() {
  try {
    const r = c.__wbindgen_add_to_stack_pointer(-16);
    c.ed25519_generateKeyPair(r);
    var n = R().getInt32(r + 4 * 0, !0),
      t = R().getInt32(r + 4 * 1, !0),
      e = R().getInt32(r + 4 * 2, !0);
    if (e) throw W(t);
    return W(n)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function pc(n, t, e) {
  let r, s;
  try {
    const C = c.__wbindgen_add_to_stack_pointer(-16),
      w = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H,
      I = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H;
    c.ed25519_sign(C, w, A, I, f, !wt(e), wt(e) ? 0 : e);
    var i = R().getInt32(C + 4 * 0, !0),
      o = R().getInt32(C + 4 * 1, !0),
      u = R().getInt32(C + 4 * 2, !0),
      _ = R().getInt32(C + 4 * 3, !0),
      h = i,
      p = o;
    if (_) throw h = 0, p = 0, W(u);
    return r = h, s = p, bt(h, p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(r, s, 1)
  }
}

function fc(n) {
  try {
    const s = c.__wbindgen_add_to_stack_pointer(-16),
      i = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    c.extendSignature(s, i, o);
    var t = R().getInt32(s + 4 * 0, !0),
      e = R().getInt32(s + 4 * 1, !0),
      r = R().getInt32(s + 4 * 2, !0);
    if (r) throw W(e);
    return W(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function hc(n, t, e, r) {
  try {
    const u = c.__wbindgen_add_to_stack_pointer(-16),
      _ = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H,
      p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      C = H,
      w = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H;
    c.verifySignature(u, _, h, p, C, w, A, !wt(r), wt(r) ? 0 : r);
    var s = R().getInt32(u + 4 * 0, !0),
      i = R().getInt32(u + 4 * 1, !0),
      o = R().getInt32(u + 4 * 2, !0);
    if (o) throw W(i);
    return s !== 0
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function gc(n, t, e, r) {
  try {
    const C = c.__wbindgen_add_to_stack_pointer(-16),
      w = V(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = H;
    var s = wt(t) ? 0 : V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = H,
      o = wt(e) ? 0 : V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      u = H;
    c.createRawExternalMessage(C, w, A, s, i, o, u, r);
    var _ = R().getInt32(C + 4 * 0, !0),
      h = R().getInt32(C + 4 * 1, !0),
      p = R().getInt32(C + 4 * 2, !0);
    if (p) throw W(h);
    return W(_)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function bc(n, t, e, r, s, i, o) {
  try {
    const w = c.__wbindgen_add_to_stack_pointer(-16);
    re(n, _e);
    const A = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      I = H,
      f = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      m = H,
      j = V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      y = H;
    var u = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = H;
    c.createExternalMessageWithoutSignature(w, n.__wbg_ptr, A, I, f, m, j, y, u, _, J(i), o);
    var h = R().getInt32(w + 4 * 0, !0),
      p = R().getInt32(w + 4 * 1, !0),
      C = R().getInt32(w + 4 * 2, !0);
    if (C) throw W(p);
    return W(h)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function mc(n, t, e, r, s, i, o, u) {
  try {
    const A = c.__wbindgen_add_to_stack_pointer(-16);
    re(n, _e);
    const I = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = H,
      m = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      j = H,
      y = V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      v = H;
    var _ = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = H;
    const b = V(o, c.__wbindgen_malloc, c.__wbindgen_realloc),
      F = H;
    c.createExternalMessage(A, n.__wbg_ptr, I, f, m, j, y, v, _, h, J(i), b, F, u);
    var p = R().getInt32(A + 4 * 0, !0),
      C = R().getInt32(A + 4 * 1, !0),
      w = R().getInt32(A + 4 * 2, !0);
    if (w) throw W(C);
    return En.__wrap(p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function wc(n, t, e, r) {
  c.wasm_bindgen__convert__closures__invoke2_mut__h5874b044d3e8a56e(n, t, J(e), J(r))
}
const Rr = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_bytesquery_free(n >>> 0, 1));
class Cn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Cn.prototype);
    return e.__wbg_ptr = t, Rr.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Rr.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_bytesquery_free(t, 0)
  }
  onReceive(t) {
    const e = this.__destroy_into_raw(),
      r = Fo(t, c.__wbindgen_malloc),
      s = H;
    c.bytesquery_onReceive(e, r, s)
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
const Lr = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_clockwithoffset_free(n >>> 0, 1));
class _e {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Lr.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_clockwithoffset_free(t, 0)
  }
  constructor() {
    const t = c.clockwithoffset_new();
    return this.__wbg_ptr = t >>> 0, Lr.register(this, this.__wbg_ptr, this), this
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
const Fr = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_genericcontract_free(n >>> 0, 1));
class Tn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Tn.prototype);
    return e.__wbg_ptr = t, Fr.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Fr.unregister(this), t
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
      var r = R().getInt32(i + 4 * 0, !0),
        s = R().getInt32(i + 4 * 1, !0);
      return t = r, e = s, bt(r, s)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
    }
  }
  sendMessageLocally(t, e) {
    try {
      const o = c.__wbindgen_add_to_stack_pointer(-16);
      c.genericcontract_sendMessageLocally(o, this.__wbg_ptr, J(t), J(e));
      var r = R().getInt32(o + 4 * 0, !0),
        s = R().getInt32(o + 4 * 1, !0),
        i = R().getInt32(o + 4 * 2, !0);
      if (i) throw W(s);
      return W(r)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  sendMessage(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16);
      c.genericcontract_sendMessage(i, this.__wbg_ptr, J(t));
      var e = R().getInt32(i + 4 * 0, !0),
        r = R().getInt32(i + 4 * 1, !0),
        s = R().getInt32(i + 4 * 2, !0);
      if (s) throw W(r);
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
      r = H,
      s = c.genericcontract_handleBlock(this.__wbg_ptr, e, r);
    return W(s)
  }
  preloadTransactions(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        u = H;
      c.genericcontract_preloadTransactions(i, this.__wbg_ptr, o, u);
      var e = R().getInt32(i + 4 * 0, !0),
        r = R().getInt32(i + 4 * 1, !0),
        s = R().getInt32(i + 4 * 2, !0);
      if (s) throw W(r);
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
const Nr = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_gqlconnection_free(n >>> 0, 1));
class As {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Nr.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_gqlconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, Nr.register(this, this.__wbg_ptr, this), this
  }
  getLatestBlock(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        u = H;
      c.gqlconnection_getLatestBlock(i, this.__wbg_ptr, o, u);
      var e = R().getInt32(i + 4 * 0, !0),
        r = R().getInt32(i + 4 * 1, !0),
        s = R().getInt32(i + 4 * 2, !0);
      if (s) throw W(r);
      return W(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  waitForNextBlock(t, e, r) {
    try {
      const u = c.__wbindgen_add_to_stack_pointer(-16),
        _ = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        h = H,
        p = V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
        C = H;
      c.gqlconnection_waitForNextBlock(u, this.__wbg_ptr, _, h, p, C, r);
      var s = R().getInt32(u + 4 * 0, !0),
        i = R().getInt32(u + 4 * 1, !0),
        o = R().getInt32(u + 4 * 2, !0);
      if (o) throw W(i);
      return W(s)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
const $r = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_jrpcconnection_free(n >>> 0, 1));
class Is {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $r.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_jrpcconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, $r.register(this, this.__wbg_ptr, this), this
  }
}
const jr = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_protoconnection_free(n >>> 0, 1));
class Ss {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, jr.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_protoconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, jr.register(this, this.__wbg_ptr, this), this
  }
}
const Kr = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_proxyconnection_free(n >>> 0, 1));
class ks {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Kr.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_proxyconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(J(t));
    return this.__wbg_ptr = e >>> 0, Kr.register(this, this.__wbg_ptr, this), this
  }
}
const Br = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_stringquery_free(n >>> 0, 1));
class tn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(tn.prototype);
    return e.__wbg_ptr = t, Br.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Br.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_stringquery_free(t, 0)
  }
  onReceive(t) {
    const e = this.__destroy_into_raw(),
      r = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      s = H;
    c.bytesquery_onReceive(e, r, s)
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
const xr = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_transport_free(n >>> 0, 1));
class Te {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Te.prototype);
    return e.__wbg_ptr = t, xr.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, xr.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_transport_free(t, 0)
  }
  static fromGqlConnection(t, e) {
    re(t, As), re(e, _e);
    const r = c.transport_fromGqlConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(r)
  }
  static fromJrpcConnection(t, e) {
    re(t, Is), re(e, _e);
    const r = c.transport_fromJrpcConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(r)
  }
  static fromProtoConnection(t, e) {
    re(t, Ss), re(e, _e);
    const r = c.transport_fromProtoConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(r)
  }
  static fromProxyConnection(t, e) {
    re(t, ks), re(e, _e);
    const r = c.transport_fromProxyConnection(t.__wbg_ptr, e.__wbg_ptr);
    return Te.__wrap(r)
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
      var r = R().getInt32(o + 4 * 0, !0),
        s = R().getInt32(o + 4 * 1, !0),
        i = R().getInt32(o + 4 * 2, !0);
      if (i) throw W(s);
      return W(r)
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
        r = R().getInt32(i + 4 * 1, !0),
        s = R().getInt32(i + 4 * 2, !0);
      if (s) throw W(r);
      return W(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getAccountsByCodeHash(t, e, r) {
    try {
      const h = c.__wbindgen_add_to_stack_pointer(-16),
        p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        C = H;
      var s = wt(r) ? 0 : V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
        i = H;
      c.transport_getAccountsByCodeHash(h, this.__wbg_ptr, p, C, e, s, i);
      var o = R().getInt32(h + 4 * 0, !0),
        u = R().getInt32(h + 4 * 1, !0),
        _ = R().getInt32(h + 4 * 2, !0);
      if (_) throw W(u);
      return W(o)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getTransactions(t, e, r) {
    try {
      const h = c.__wbindgen_add_to_stack_pointer(-16),
        p = V(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        C = H;
      var s = wt(e) ? 0 : V(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
        i = H;
      c.transport_getTransactions(h, this.__wbg_ptr, p, C, s, i, r);
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
        r = R().getInt32(i + 4 * 1, !0),
        s = R().getInt32(i + 4 * 2, !0);
      if (s) throw W(r);
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
        r = R().getInt32(i + 4 * 1, !0),
        s = R().getInt32(i + 4 * 2, !0);
      if (s) throw W(r);
      return W(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
const zr = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_unsignedmessage_free(n >>> 0, 1));
class En {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(En.prototype);
    return e.__wbg_ptr = t, zr.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zr.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_unsignedmessage_free(t, 0)
  }
  refreshTimeout(t) {
    re(t, _e), c.unsignedmessage_refreshTimeout(this.__wbg_ptr, t.__wbg_ptr)
  }
  expireAt() {
    return c.unsignedmessage_expireAt(this.__wbg_ptr) >>> 0
  }
  get hash() {
    let t, e;
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16);
      c.unsignedmessage_hash(i, this.__wbg_ptr);
      var r = R().getInt32(i + 4 * 0, !0),
        s = R().getInt32(i + 4 * 1, !0);
      return t = r, e = s, bt(r, s)
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
        r = R().getInt32(i + 4 * 1, !0),
        s = R().getInt32(i + 4 * 2, !0);
      if (s) throw W(r);
      return W(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  signFake() {
    try {
      const s = c.__wbindgen_add_to_stack_pointer(-16);
      c.unsignedmessage_signFake(s, this.__wbg_ptr);
      var t = R().getInt32(s + 4 * 0, !0),
        e = R().getInt32(s + 4 * 1, !0),
        r = R().getInt32(s + 4 * 2, !0);
      if (r) throw W(e);
      return W(t)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
async function yc(n, t) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, t)
    } catch (r) {
      if (n.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r
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

function Cs() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbindgen_string_new = function(t, e) {
    const r = bt(t, e);
    return J(r)
  }, n.wbg.__wbg_length_ae22078168b726f5 = function(t) {
    return X(t).length
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return X(t) === void 0
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const r = X(e),
      s = typeof r == "number" ? r : void 0;
    R().setFloat64(t + 8 * 1, wt(s) ? 0 : s, !0), R().setInt32(t + 4 * 0, !wt(s), !0)
  }, n.wbg.__wbindgen_is_null = function(t) {
    return X(t) === null
  }, n.wbg.__wbindgen_string_get = function(t, e) {
    const r = X(e),
      s = typeof r == "string" ? r : void 0;
    var i = wt(s) ? 0 : V(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = H;
    R().setInt32(t + 4 * 1, o, !0), R().setInt32(t + 4 * 0, i, !0)
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = X(t);
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof X(t) == "string"
  }, n.wbg.__wbg_new_796382978dfd4fb0 = function(t, e) {
    const r = new Error(bt(t, e));
    return J(r)
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
  }, n.wbg.__wbg_onMessageSent_2c1ae08491ab9850 = function(t, e, r) {
    X(t).onMessageSent(W(e), W(r))
  }, n.wbg.__wbg_onMessageExpired_25cd422e9328ee8a = function(t, e) {
    X(t).onMessageExpired(W(e))
  }, n.wbg.__wbg_onStateChanged_3d54166d152ed7c7 = function(t, e) {
    X(t).onStateChanged(W(e))
  }, n.wbg.__wbg_onTransactionsFound_bf3f4ff44694cccd = function(t, e, r) {
    X(t).onTransactionsFound(W(e), W(r))
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
    const r = X(t)[e >>> 0];
    return J(r)
  }, n.wbg.__wbg_isLocal_c89a0f06d00eb44d = function(t) {
    return X(t).isLocal()
  }, n.wbg.__wbg_send_3a6112602f38b674 = function(t, e, r, s, i) {
    X(t).send(bt(e, r), tn.__wrap(s), i !== 0)
  }, n.wbg.__wbg_send_bd8357f2e836b323 = function(t, e, r, s, i) {
    X(t).send(bt(e, r), tn.__wrap(s), i !== 0)
  }, n.wbg.__wbg_send_1699c4cfc0bbee60 = function(t, e, r, s, i) {
    X(t).send(Lo(e, r), Cn.__wrap(s), i !== 0)
  }, n.wbg.__wbg_new_b85e72ed1bfd57f9 = function(t, e) {
    try {
      var r = {
          a: t,
          b: e
        },
        s = (o, u) => {
          const _ = r.a;
          r.a = 0;
          try {
            return wc(_, r.b, o, u)
          } finally {
            r.a = _
          }
        };
      const i = new Promise(s);
      return J(i)
    } finally {
      r.a = r.b = 0
    }
  }, n.wbg.__wbg_info_2ffec7e533c4f23d = function() {
    return Et(function(t) {
      const e = X(t).info();
      return J(e)
    }, arguments)
  }, n.wbg.__wbg_sendMessage_8d09b0e227438eb5 = function() {
    return Et(function(t, e, r) {
      const s = X(t).sendMessage(bt(e, r));
      return J(s)
    }, arguments)
  }, n.wbg.__wbg_getContractState_a832ca559ffd8b92 = function() {
    return Et(function(t, e, r) {
      const s = X(t).getContractState(bt(e, r));
      return J(s)
    }, arguments)
  }, n.wbg.__wbg_getAccountsByCodeHash_c75072db79c08409 = function() {
    return Et(function(t, e, r, s, i, o) {
      let u;
      i !== 0 && (u = bt(i, o).slice(), c.__wbindgen_free(i, o * 1, 1));
      const _ = X(t).getAccountsByCodeHash(bt(e, r), s, u);
      return J(_)
    }, arguments)
  }, n.wbg.__wbg_getTransactions_eb09ca0ff4ac3072 = function() {
    return Et(function(t, e, r, s, i, o) {
      const u = X(t).getTransactions(bt(e, r), bt(s, i), o);
      return J(u)
    }, arguments)
  }, n.wbg.__wbg_getTransaction_c4bdcf967b80c793 = function() {
    return Et(function(t, e, r) {
      const s = X(t).getTransaction(bt(e, r));
      return J(s)
    }, arguments)
  }, n.wbg.__wbg_getDstTransaction_84b6163592386f1b = function() {
    return Et(function(t, e, r) {
      const s = X(t).getDstTransaction(bt(e, r));
      return J(s)
    }, arguments)
  }, n.wbg.__wbg_getLatestKeyBlock_934ef847dfb13892 = function() {
    return Et(function(t) {
      const e = X(t).getLatestKeyBlock();
      return J(e)
    }, arguments)
  }, n.wbg.__wbg_getCapabilities_b340b48cfe2a8c0d = function() {
    return Et(function(t, e, r) {
      const s = X(t).getCapabilities(bt(e, r));
      return J(s)
    }, arguments)
  }, n.wbg.__wbg_getBlockchainConfig_c208c7ae79b4d1c0 = function() {
    return Et(function(t, e, r) {
      const s = X(t).getBlockchainConfig(bt(e, r));
      return J(s)
    }, arguments)
  }, n.wbg.__wbindgen_memory = function() {
    const t = c.memory;
    return J(t)
  }, n.wbg.__wbg_buffer_b7b08af79b0b0974 = function(t) {
    const e = X(t).buffer;
    return J(e)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9 = function(t, e, r) {
    const s = new Uint8Array(X(t), e >>> 0, r >>> 0);
    return J(s)
  }, n.wbg.__wbg_randomFillSync_dc1e9a60c158336d = function() {
    return Et(function(t, e) {
      X(t).randomFillSync(W(e))
    }, arguments)
  }, n.wbg.__wbg_subarray_7c2e3576afe181d1 = function(t, e, r) {
    const s = X(t).subarray(e >>> 0, r >>> 0);
    return J(s)
  }, n.wbg.__wbg_getRandomValues_37fa2ca9e4e07fab = function() {
    return Et(function(t, e) {
      X(t).getRandomValues(X(e))
    }, arguments)
  }, n.wbg.__wbg_new_ea1883e1e5e86686 = function(t) {
    const e = new Uint8Array(X(t));
    return J(e)
  }, n.wbg.__wbg_set_d1e79e2388520f18 = function(t, e, r) {
    X(t).set(X(e), r >>> 0)
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
      const r = Reflect.get(X(t), X(e));
      return J(r)
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
      const t = mi.global;
      return J(t)
    }, arguments)
  }, n.wbg.__wbg_newnoargs_76313bd6ff35d0f2 = function(t, e) {
    const r = new Function(bt(t, e));
    return J(r)
  }, n.wbg.__wbg_call_1084a111329e68ce = function() {
    return Et(function(t, e) {
      const r = X(t).call(X(e));
      return J(r)
    }, arguments)
  }, n.wbg.__wbg_isArray_8364a5371e9737d8 = function(t) {
    return Array.isArray(X(t))
  }, n.wbg.__wbg_call_89af060b4e1523f2 = function() {
    return Et(function(t, e, r) {
      const s = X(t).call(X(e), X(r));
      return J(s)
    }, arguments)
  }, n.wbg.__wbg_set_eacc7d73fefaafdf = function() {
    return Et(function(t, e, r) {
      return Reflect.set(X(t), X(e), X(r))
    }, arguments)
  }, n.wbg.__wbg_stringify_bbf45426c92a6bf5 = function() {
    return Et(function(t) {
      const e = JSON.stringify(X(t));
      return J(e)
    }, arguments)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(bt(t, e))
  }, n.wbg.__wbindgen_debug_string = function(t, e) {
    const r = ar(X(e)),
      s = V(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = H;
    R().setInt32(t + 4 * 1, i, !0), R().setInt32(t + 4 * 0, s, !0)
  }, n.wbg.__wbindgen_cb_drop = function(t) {
    const e = W(t).original;
    return e.cnt-- == 1 ? (e.a = 0, !0) : !1
  }, n.wbg.__wbg_then_95e6edc0f89b73b1 = function(t, e) {
    const r = X(t).then(X(e));
    return J(r)
  }, n.wbg.__wbg_queueMicrotask_12a30234db4045d3 = function(t) {
    queueMicrotask(X(t))
  }, n.wbg.__wbg_then_876bb3c633745cc6 = function(t, e, r) {
    const s = X(t).then(X(e), X(r));
    return J(s)
  }, n.wbg.__wbg_queueMicrotask_48421b3cc9052b68 = function(t) {
    const e = X(t).queueMicrotask;
    return J(e)
  }, n.wbg.__wbg_resolve_570458cb99d56a43 = function(t) {
    const e = Promise.resolve(X(t));
    return J(e)
  }, n.wbg.__wbindgen_closure_wrapper5481 = function(t, e, r) {
    const s = Do(t, e, 981, Ro);
    return J(s)
  }, n
}

function Ts(n, t) {
  return c = n.exports, Es.__wbindgen_wasm_module = t, ke = null, He = null, c
}

function vc(n) {
  if (c !== void 0) return c;
  typeof n < "u" && Object.getPrototypeOf(n) === Object.prototype ? {
    module: n
  } = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead");
  const t = Cs();
  n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n));
  const e = new WebAssembly.Instance(n, t);
  return Ts(e, n)
}
async function Es(n) {
  if (c !== void 0) return c;
  typeof n < "u" && Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead"), typeof n > "u" && (n = new URL("" + new URL("nekoton_wasm_bg.CMYqFJ-k.wasm", import.meta.url).href, import.meta.url));
  const t = Cs();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: r
  } = await yc(await n, t);
  return Ts(e, r)
}
const Ac = Object.freeze(Object.defineProperty({
    __proto__: null,
    BytesQuery: Cn,
    ClockWithOffset: _e,
    GenericContract: Tn,
    GqlConnection: As,
    JrpcConnection: Is,
    ProtoConnection: Ss,
    ProxyConnection: ks,
    StringQuery: tn,
    Transport: Te,
    UnsignedMessage: En,
    checkAddress: No,
    codeToTvc: Zo,
    computeStorageFee: zo,
    createExternalMessage: mc,
    createExternalMessageWithoutSignature: bc,
    createRawExternalMessage: gc,
    decodeEvent: ac,
    decodeInput: ic,
    decodeOutput: oc,
    decodeTransaction: cc,
    decodeTransactionEvents: lc,
    default: Es,
    ed25519_generateKeyPair: _c,
    ed25519_sign: pc,
    encodeInternalInput: rc,
    encodeInternalMessage: sc,
    executeLocal: Uo,
    extendSignature: fc,
    extractContractData: Xo,
    extractPublicKey: Yo,
    getBocHash: Vo,
    getCodeSalt: nc,
    getDataHash: dc,
    getExpectedAddress: Wo,
    initSync: vc,
    makeFullAccountBoc: Ko,
    mergeTvc: qo,
    packIntoCell: Qo,
    parseFullAccountBoc: Bo,
    parseFullAccountStateInit: xo,
    repackAddress: $o,
    runLocal: jo,
    setCodeSalt: ec,
    splitTvc: tc,
    unpackContractFields: Go,
    unpackFromCell: Jo,
    unpackInitData: Ho,
    unpackTransactionTree: uc,
    verifySignature: hc
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Ic = us(Ac);
var Zt = {};
Object.defineProperty(Zt, "__esModule", {
  value: !0
});
const Sc = {
  ensureNekotonLoaded: void 0,
  nekoton: void 0,
  fetch: void 0,
  fetchAgent: () => {},
  debugLog: void 0
};
Zt.default = Sc;
var Ps = {},
  kc = en;
en.default = en;
en.stable = Ds;
en.stableStringify = Ds;
var yn = "[...]",
  Ms = "[Circular]",
  Oe = [],
  Ee = [];

function Os() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

function en(n, t, e, r) {
  typeof r > "u" && (r = Os()), or(n, "", 0, [], void 0, 0, r);
  var s;
  try {
    Ee.length === 0 ? s = JSON.stringify(n, t, e) : s = JSON.stringify(n, Rs(t), e)
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; Oe.length !== 0;) {
      var i = Oe.pop();
      i.length === 4 ? Object.defineProperty(i[0], i[1], i[3]) : i[0][i[1]] = i[2]
    }
  }
  return s
}

function je(n, t, e, r) {
  var s = Object.getOwnPropertyDescriptor(r, e);
  s.get !== void 0 ? s.configurable ? (Object.defineProperty(r, e, {
    value: n
  }), Oe.push([r, e, t, s])) : Ee.push([t, e, n]) : (r[e] = n, Oe.push([r, e, t]))
}

function or(n, t, e, r, s, i, o) {
  i += 1;
  var u;
  if (typeof n == "object" && n !== null) {
    for (u = 0; u < r.length; u++)
      if (r[u] === n) {
        je(Ms, n, t, s);
        return
      } if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      je(yn, n, t, s);
      return
    }
    if (typeof o.edgesLimit < "u" && e + 1 > o.edgesLimit) {
      je(yn, n, t, s);
      return
    }
    if (r.push(n), Array.isArray(n))
      for (u = 0; u < n.length; u++) or(n[u], u, u, r, n, i, o);
    else {
      var _ = Object.keys(n);
      for (u = 0; u < _.length; u++) {
        var h = _[u];
        or(n[h], h, u, r, n, i, o)
      }
    }
    r.pop()
  }
}

function Cc(n, t) {
  return n < t ? -1 : n > t ? 1 : 0
}

function Ds(n, t, e, r) {
  typeof r > "u" && (r = Os());
  var s = cr(n, "", 0, [], void 0, 0, r) || n,
    i;
  try {
    Ee.length === 0 ? i = JSON.stringify(s, t, e) : i = JSON.stringify(s, Rs(t), e)
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; Oe.length !== 0;) {
      var o = Oe.pop();
      o.length === 4 ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2]
    }
  }
  return i
}

function cr(n, t, e, r, s, i, o) {
  i += 1;
  var u;
  if (typeof n == "object" && n !== null) {
    for (u = 0; u < r.length; u++)
      if (r[u] === n) {
        je(Ms, n, t, s);
        return
      } try {
      if (typeof n.toJSON == "function") return
    } catch {
      return
    }
    if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      je(yn, n, t, s);
      return
    }
    if (typeof o.edgesLimit < "u" && e + 1 > o.edgesLimit) {
      je(yn, n, t, s);
      return
    }
    if (r.push(n), Array.isArray(n))
      for (u = 0; u < n.length; u++) cr(n[u], u, u, r, n, i, o);
    else {
      var _ = {},
        h = Object.keys(n).sort(Cc);
      for (u = 0; u < h.length; u++) {
        var p = h[u];
        cr(n[p], p, u, r, n, i, o), _[p] = n[p]
      }
      if (typeof s < "u") Oe.push([s, t, n]), s[t] = _;
      else return _
    }
    r.pop()
  }
}

function Rs(n) {
  return n = typeof n < "u" ? n : function(t, e) {
      return e
    },
    function(t, e) {
      if (Ee.length > 0)
        for (var r = 0; r < Ee.length; r++) {
          var s = Ee[r];
          if (s[1] === t && s[0] === e) {
            e = s[2], Ee.splice(r, 1);
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
const Ur = ve,
  Tc = wi();

function Wr(n, t, e) {
  try {
    Reflect.apply(n, t, e)
  } catch (r) {
    setTimeout(() => {
      throw r
    })
  }
}

function Ec(n) {
  const t = n.length,
    e = new Array(t);
  for (let r = 0; r < t; r += 1) e[r] = n[r];
  return e
}
class Pc extends Tc.EventEmitter {
  emit(t, ...e) {
    let r = t === "error";
    const s = this._events;
    if (s !== void 0) r = r && s.error === void 0;
    else if (!r) return !1;
    if (r) {
      let o;
      if (e.length > 0 && ([o] = e), o instanceof Error) throw o;
      const u = new Error(`Unhandled error.${o?` (${o.message})`:""}`);
      throw u.context = o, u
    }
    const i = s[t];
    if (i === void 0) return !1;
    if (typeof i == "function") Wr(i, this, e);
    else {
      const o = i.length,
        u = Ec(i);
      for (let _ = 0; _ < o; _ += 1) Wr(u[_], this, e)
    }
    return !0
  }
}
Ht.SafeEventEmitter = Pc;

function Mc(n) {
  if (typeof n == "object" && !(0, Ur.isAddressObject)(n)) throw new Error("Invalid address object");
  return typeof n == "object" ? n : new Ur.Address(n)
}
Ht.convertToAddressObject = Mc;
const Oc = n => {
  const t = n.split(".");
  if (t.length !== 3) throw new Error("Received invalid version string");
  t.forEach(s => {
    if (~~s > 999) throw new Error(`Version string invalid, ${s} is too large`)
  });
  let e = 1e6,
    r = 0;
  for (let s = 0; s < 3; s++) r += ~~t[s] * e, e /= 1e3;
  return r
};
Ht.convertVersionToInt32 = Oc;
const Ls = 4294967295;
let Vn = Math.floor(Math.random() * Ls);

function Dc() {
  return Vn = (Vn + 1) % Ls, Vn
}
Ht.getUniqueId = Dc;
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

function Gr(n) {
  const t = document.createTextNode("");
  let e, r, s = 0,
    i = 0;
  return new n(function() {
      let o;
      if (e) r && (e = r.slice(i).concat(e));
      else {
        if (!r) return;
        e = r
      }
      if (r = e, e = null, i = 0, typeof r == "function") {
        o = r, r = null, o();
        return
      }
      for (t.data = s = ++s % 2; i < r.length;) o = r[i], i++, i === r.length && (r = null), o()
    }).observe(t, {
      characterData: !0
    }),
    function(o) {
      if (mn(o), e) {
        typeof e == "function" ? e = [e, o] : e.push(o);
        return
      }
      e = o, t.data = s = ++s % 2
    }
}
const Rc = function() {
  if (typeof queueMicrotask == "function") return function(n) {
    queueMicrotask(mn(n))
  };
  if (typeof document == "object" && document) {
    if (typeof MutationObserver == "function") return Gr(MutationObserver);
    if (typeof window.WebKitMutationObserver == "function") return Gr(window.WebKitMutationObserver)
  }
  if (typeof setImmediate == "function") return function(n) {
    setImmediate(mn(n))
  };
  if (typeof setTimeout == "function" || typeof setTimeout == "object") return function(n) {
    setTimeout(mn(n), 0)
  };
  throw new Error("No `nextTick` implementation found")
}();
class Fs {
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
      const r = () => {
        let s = !1;
        t(() => {
          s || (s = !0, this.count++, this.sched())
        })
      };
      this.tasks.push(r), Rc(this.sched.bind(this))
    })
  }
  use(t) {
    return this.acquire().then(e => t().then(r => (e(), r)).catch(r => {
      throw e(), r
    }))
  }
}
ye.Semaphore = Fs;
class Lc extends Fs {
  constructor() {
    super(1)
  }
}
ye.Mutex = Lc;
var Pn = {},
  Fc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.GqlSocket = void 0;
const lr = Fc(Zt);
class nn {
  async connect(t) {
    class e {
      constructor(s) {
        this.nextLatencyDetectionTime = 0, this.local = s.local === !0, this.maxLatency = s.maxLatency || 6e4, this.latencyDetectionInterval = s.latencyDetectionInterval || 6e4, this.endpoints = s.endpoints.map(nn.expandAddress), this.endpoints.length == 1 && (this.currentEndpoint = this.endpoints[0], this.nextLatencyDetectionTime = Number.MAX_VALUE)
      }
      isLocal() {
        return this.local
      }
      send(s, i, o) {
        (async () => {
          const u = Date.now();
          try {
            let _;
            this.currentEndpoint != null && u < this.nextLatencyDetectionTime ? _ = this.currentEndpoint : this.resolutionPromise != null ? (_ = await this.resolutionPromise, delete this.resolutionPromise) : (delete this.currentEndpoint, this.resolutionPromise = this._selectQueryingEndpoint().then(p => (this.currentEndpoint = p, this.nextLatencyDetectionTime = Date.now() + this.latencyDetectionInterval, p)), _ = await this.resolutionPromise, delete this.resolutionPromise);
            const h = await fetch(_.url, {
              method: "post",
              headers: Nc,
              body: s,
              agent: _.agent
            }).then(p => p.text());
            i.onReceive(h)
          } catch (_) {
            i.onError(_)
          }
        })()
      }
      async _selectQueryingEndpoint() {
        const s = this.maxLatency,
          i = this.endpoints.length;
        for (let o = 0; o < 5; ++o) {
          let u;
          const _ = new Promise((C, w) => {
            u = {
              resolve: A => C(A),
              reject: () => w(void 0)
            }
          });
          let h = 0,
            p;
          for (const C of this.endpoints) nn.checkLatency(C).then(w => {
            if (++h, w !== void 0 && w <= s) return u.resolve(C);
            (p === void 0 || p.latency === void 0 || w !== void 0 && w < p.latency) && (p = {
              endpoint: C,
              latency: w
            }), h >= i && ((p == null ? void 0 : p.latency) !== void 0 ? u.resolve(p.endpoint) : u.reject())
          });
          try {
            return await _
          } catch {
            let w;
            const A = new Promise(I => {
              w = () => I()
            });
            setTimeout(() => w(), Math.min(100 * o, 5e3)), await A
          }
        }
        throw new Error("Not available endpoint found")
      }
    }
    return new lr.default.nekoton.GqlConnection(new e(t))
  }
  static async checkLatency(t) {
    const e = await fetch(`${t.url}?query=%7Binfo%7Bversion%20time%20latency%7D%7D`, {
      method: "get",
      agent: t.agent
    }).then(o => o.json()).catch(o => {
      lr.default.debugLog(o)
    });
    if (typeof e != "object" || e == null) return;
    const r = e.data;
    if (typeof r != "object" || r == null) return;
    const s = r.info;
    if (typeof s != "object" || s == null) return;
    const i = s.latency;
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
    agent: lr.default.fetchAgent(e)
  }
};
const Nc = {
  "Content-Type": "application/json"
};
var Mn = {},
  $c = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Mn, "__esModule", {
  value: !0
});
Mn.JrpcSocket = void 0;
const Qn = $c(Zt);
class jc {
  async connect(t) {
    class e {
      constructor(s) {
        this.endpoint = s.endpoint, this.endpointAgent = Qn.default.fetchAgent(this.endpoint), this.alternativeEndpoint = s.alternativeEndpoint != null ? s.alternativeEndpoint : s.endpoint, this.alternativeEndpointAgent = Qn.default.fetchAgent(this.alternativeEndpoint)
      }
      send(s, i, o) {
        (async () => {
          try {
            const u = o ? this.endpoint : this.alternativeEndpoint,
              _ = o ? this.endpointAgent : this.alternativeEndpointAgent,
              h = await fetch(u, {
                method: "post",
                headers: Kc,
                body: s,
                agent: _
              }).then(p => p.text());
            i.onReceive(h)
          } catch (u) {
            i.onError(u)
          }
        })()
      }
    }
    return new Qn.default.nekoton.JrpcConnection(new e(t))
  }
}
Mn.JrpcSocket = jc;
const Kc = {
  "Content-Type": "application/json"
};
var On = {},
  Bc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(On, "__esModule", {
  value: !0
});
On.ProtoSocket = void 0;
const Hr = Bc(Zt);
class xc {
  async connect(t) {
    class e {
      constructor(s) {
        this.endpoint = s.endpoint, this.endpointAgent = Hr.default.fetchAgent(this.endpoint)
      }
      send(s, i, o) {
        (async () => {
          try {
            const u = await fetch(this.endpoint, {
              method: "post",
              headers: zc,
              body: new Uint8Array(s),
              agent: this.endpointAgent
            }).then(_ => _.arrayBuffer());
            i.onReceive(new Uint8Array(u))
          } catch (u) {
            i.onError(u)
          }
        })()
      }
    }
    return new Hr.default.nekoton.ProtoConnection(new e(t))
  }
}
On.ProtoSocket = xc;
const zc = {
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
    r = t(Zt),
    s = Pn,
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
      const m = n.NETWORK_PRESETS[f];
      if (m == null) throw new Error(`Target preset id not found: ${f}`);
      return m
    } else return f
  }
  async function h(f) {
    const m = _(f),
      j = new r.default.nekoton.ClockWithOffset;
    try {
      const y = new w(j);
      await y._connect(m), y._initializedTransport != null && A(y._initializedTransport)
    } catch (y) {
      throw new p(m, y.toString())
    } finally {
      j.free()
    }
  }
  n.checkConnection = h;
  class p extends Error {
    constructor(m, j) {
      super(j), this.params = m
    }
  }
  n.ConnectionError = p;
  async function C(f, m, j = !1) {
    const y = _(m);
    for (;;) try {
      const v = new w(f);
      return await v.startSwitchingNetwork(y).then(b => b.switch()), r.default.debugLog(`Successfully connected to ${y.group}`), v
    } catch (v) {
      if (j) console.error("Connection failed:", v), await new Promise(b => {
        setTimeout(() => b(), 5e3)
      }), r.default.debugLog("Restarting connection process");
      else throw v
    }
  }
  n.createConnectionController = C;
  class w {
    constructor(m) {
      this._networkMutex = new e.Mutex, this._acquiredTransportCounter = 0, this._clock = m
    }
    async acquire() {
      return I(this._initializedTransport), await this._acquireTransport(), {
        transport: this._initializedTransport,
        release: () => this._releaseTransport()
      }
    }
    async use(m) {
      return I(this._initializedTransport), await this._acquireTransport(), m(this._initializedTransport).finally(() => {
        this._releaseTransport()
      })
    }
    async startSwitchingNetwork(m) {
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
      return new y(this, v, m)
    }
    get initializedTransport() {
      return this._initializedTransport
    }
    async _connect(m) {
      this._initializedTransport != null && A(this._initializedTransport), this._initializedTransport = void 0;
      let j;
      (function(v) {
        v[v.DONE = 0] = "DONE", v[v.CANCELLED = 1] = "CANCELLED"
      })(j || (j = {}));
      const y = async ({
        data: {
          transport: v
        }
      }, b) => new Promise((F, K) => {
        this._cancelTestTransport = () => F(j.CANCELLED), b ? v.getAccountsByCodeHash("4e92716de61d456e58f16e4e867e3e93a7548321eace86301b51c8b80ca6239b", 1).then(() => F(j.DONE)).catch(B => K(B)) : v.getFullContractState("-1:0000000000000000000000000000000000000000000000000000000000000000").then(() => F(j.DONE)).catch(B => K(B)), setTimeout(() => K(new Error("Connection timeout")), 1e4)
      }).finally(() => this._cancelTestTransport = void 0);
      try {
        const v = m.group != null ? m.group : u(m.id),
          {
            local: b,
            transportData: F
          } = await (async () => {
            switch (m.type) {
              case "graphql": {
                const K = new s.GqlSocket,
                  B = await K.connect(m.data),
                  l = r.default.nekoton.Transport.fromGqlConnection(B, this._clock),
                  d = {
                    id: m.id,
                    group: v,
                    type: "graphql",
                    data: {
                      socket: K,
                      connection: B,
                      transport: l
                    }
                  };
                return {
                  local: m.data.local === !0,
                  transportData: d
                }
              }
              case "jrpc": {
                const K = new i.JrpcSocket,
                  B = await K.connect(m.data),
                  l = r.default.nekoton.Transport.fromJrpcConnection(B, this._clock);
                return {
                  local: !1,
                  transportData: {
                    id: m.id,
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
                  B = await K.connect(m.data),
                  l = r.default.nekoton.Transport.fromProtoConnection(B, this._clock);
                return {
                  local: !1,
                  transportData: {
                    id: m.id,
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
                const K = m.data.connectionFactory.create(this._clock);
                return {
                  local: !0,
                  transportData: {
                    id: m.id,
                    group: v,
                    type: "proxy",
                    data: {
                      connection: K,
                      transport: r.default.nekoton.Transport.fromProxyConnection(K, this._clock)
                    }
                  }
                }
              }
            }
          })();
        try {
          if (await y(F, b) == j.CANCELLED) {
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
      r.default.debugLog("_acquireTransport"), this._acquiredTransportCounter > 0 ? (r.default.debugLog("_acquireTransport -> increase"), this._acquiredTransportCounter += 1) : (this._acquiredTransportCounter = 1, this._release != null ? console.warn("mutex is already acquired") : (r.default.debugLog("_acquireTransport -> await"), this._release = await this._networkMutex.acquire(), r.default.debugLog("_acquireTransport -> create")))
    }
    _releaseTransport() {
      var m;
      r.default.debugLog("_releaseTransport"), this._acquiredTransportCounter -= 1, this._acquiredTransportCounter <= 0 && (r.default.debugLog("_releaseTransport -> release"), (m = this._release) === null || m === void 0 || m.call(this), this._release = void 0)
    }
  }
  n.ConnectionController = w;

  function A(f) {
    f.data.transport.free(), f.data.connection.free()
  }

  function I(f) {
    if (f == null) throw new Error("Connection is not initialized")
  }
})(bn);
var Dn = {},
  Rn = {},
  Uc = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Rn, "__esModule", {
  value: !0
});
Rn.ContractSubscription = void 0;
const Wc = ye,
  Ut = Uc(Zt);
class br {
  static async subscribe(t, e, r) {
    const {
      transport: {
        data: {
          connection: s,
          transport: i
        }
      },
      release: o
    } = await t.acquire();
    try {
      const u = await i.subscribeToGenericContract(e, r);
      if (u == null) throw new Error(`Failed to subscribe to contract: ${e}`);
      return new br(s, o, e, u)
    } catch (u) {
      throw o(), u
    }
  }
  constructor(t, e, r, s) {
    this._contractMutex = new Wc.Mutex, this._pollingInterval = Vc, this._isRunning = !1, this._skipIteration = !1, this._connection = t, this._address = r, this._contract = s, this._releaseTransport = e, this._currentPollingMethod = s.pollingMethod
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
      let r = this._currentPollingMethod;
      for (; this._isRunning;) {
        this._skipIteration = !1;
        const s = r != this._currentPollingMethod;
        if (r = this._currentPollingMethod, t || this._currentPollingMethod == "manual") {
          this._currentBlockId = void 0, Ut.default.debugLog("ContractSubscription -> manual -> waiting begins");
          const i = this._currentPollingMethod == "manual" || e ? this._pollingInterval : Hc;
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
          Ut.default.debugLog("ContractSubscription -> reliable start"), s && this._suggestedBlockId != null && (this._currentBlockId = this._suggestedBlockId), this._suggestedBlockId = void 0;
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
            o = await i.waitForNextBlock(this._currentBlockId, this._address, Gc)
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
    var e, r;
    t != null && (this._currentPollingMethod = t, this._skipIteration = !0), clearTimeout((e = this._refreshTimer) === null || e === void 0 ? void 0 : e[0]), (r = this._refreshTimer) === null || r === void 0 || r[1](), this._refreshTimer = void 0
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
    return t(this._contract).then(r => (e(), r)).catch(r => {
      throw e(), r
    })
  }
}
Rn.ContractSubscription = br;
const Gc = 60,
  Hc = 2e3,
  Vc = 6e4;
Object.defineProperty(Dn, "__esModule", {
  value: !0
});
Dn.SubscriptionController = void 0;
const Qc = ye,
  Vr = Ht,
  Jc = Rn,
  Xc = 1e4;
class Yc {
  constructor(t, e) {
    this._subscriptions = new Map, this._subscriptionsMutex = new Qc.Mutex, this._sendMessageRequests = new Map, this._subscriptionStates = new Map, this._pollingInterval = Xc, this._connectionController = t, this._notify = e
  }
  setPollingInterval(t) {
    this._pollingInterval = t
  }
  async sendMessageLocally(t, e, r) {
    const s = (0, Vr.getUniqueId)();
    try {
      await this.subscribeToContract(t, {
        state: !0
      }, s);
      const i = this._subscriptions.get(t);
      if (i == null) throw new Error("Failed to subscribe to contract");
      return await i.use(o => o.sendMessageLocally(e, r))
    } finally {
      this.unsubscribeFromContract(t, s).catch(console.error)
    }
  }
  sendMessage(t, e) {
    const r = e.hash;
    let s = this._sendMessageRequests.get(t);
    if (s == null) s = new Map, this._sendMessageRequests.set(t, s);
    else if (s.has(r)) throw new Error(`Trying to send a duplicate message with id '${r}'`);
    const i = (0, Vr.getUniqueId)();
    return new Promise((o, u) => {
      s.set(r, {
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
      }).catch(_ => this._rejectMessageRequest(t, r, _)).finally(() => {
        this.unsubscribeFromContract(t, i).catch(console.error)
      })
    })
  }
  async subscribeToContract(t, e, r) {
    return this._subscriptionsMutex.use(async () => {
      const s = p => {
          const C = {
            ...p
          };
          return Object.keys(C).map(w => {
            if (w !== "state" && w !== "transactions") throw new Error(`Unknown subscription topic: ${w}`);
            const A = e[w];
            if (typeof A == "boolean") C[w] = A;
            else {
              if (A == null) return;
              throw new Error(`Unknown subscription topic value ${w}: ${A}`)
            }
          }), C
        },
        i = this._subscriptionStates.get(t) || Zc();
      let o;
      if (r == null) o = s(i.client);
      else {
        const p = i.internal.get(r);
        p != null ? (o = s(p), Qr(o) && i.internal.delete(r)) : o = s({
          state: !1,
          transactions: !1
        })
      }
      const u = {
        ...o
      };
      for (const p of i.internal.values()) u.state || (u.state = p.state), u.transactions || (u.transactions = p.transactions);
      if (Qr(u)) return this._subscriptionStates.delete(t), await this._tryUnsubscribe(t), {
        ...u
      };
      let _ = this._subscriptions.get(t);
      const h = _ == null;
      return _ == null && (_ = await this._createSubscription(t)), r == null ? i.client = o : i.internal.set(r, o), this._subscriptionStates.set(t, i), h && await _.start(), {
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
    for (const [e, r] of this._subscriptionStates.entries()) t[e] = {
      ...r.client
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
    const r = new e(t, this),
      s = await Jc.ContractSubscription.subscribe(this._connectionController, t, r);
    return s.setPollingInterval(this._pollingInterval), r.enableNotifications(), this._subscriptions.set(t, s), s
  }
  async _tryUnsubscribe(t) {
    const e = this._subscriptionStates.get(t),
      r = this._sendMessageRequests.get(t);
    if (e == null && ((r == null ? void 0 : r.size) || 0) == 0) {
      const s = this._subscriptions.get(t);
      this._subscriptions.delete(t), await (s == null ? void 0 : s.stop())
    }
  }
  async _rejectMessageRequest(t, e, r) {
    this._deleteMessageRequestAndGetCallback(t, e).reject(r), await this._subscriptionsMutex.use(async () => this._tryUnsubscribe(t))
  }
  async _resolveMessageRequest(t, e, r) {
    this._deleteMessageRequestAndGetCallback(t, e).resolve(r), await this._subscriptionsMutex.use(async () => this._tryUnsubscribe(t))
  }
  _notifyStateChanged(t, e) {
    const r = this._subscriptionStates.get(t);
    r != null && r.client.state && this._notify("contractStateChanged", {
      address: t,
      state: e
    })
  }
  _notifyTransactionsFound(t, e, r) {
    const s = this._subscriptionStates.get(t);
    s != null && s.client.transactions && this._notify("transactionsFound", {
      address: t,
      transactions: e,
      info: r
    })
  }
  _deleteMessageRequestAndGetCallback(t, e) {
    var r;
    const s = (r = this._sendMessageRequests.get(t)) === null || r === void 0 ? void 0 : r.get(e);
    if (!s) throw new Error(`SendMessage request with id '${e}' not found`);
    return this._deleteMessageRequest(t, e), s
  }
  _deleteMessageRequest(t, e) {
    const r = this._sendMessageRequests.get(t);
    r && (r.delete(e), r.size == 0 && this._sendMessageRequests.delete(t))
  }
}
Dn.SubscriptionController = Yc;
const Zc = () => ({
    internal: new Map,
    client: {
      state: !1,
      transactions: !1
    }
  }),
  Qr = n => !n.state && !n.transactions;
var ur = {},
  Ln = {};
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
Ln.GiverAccount = void 0;
const qc = Ht;
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
    this.address = (0, qc.convertToAddressObject)(t.address), this.publicKey = t.publicKey
  }
  async fetchPublicKey(t) {
    return this.publicKey
  }
  async prepareMessage(t, e) {
    if (t.payload != null) throw new Error("Giver contract does not support payload in an internal message");
    if (t.stateInit != null) throw new Error("Giver contract does not support state init in an internal message");
    const r = await e.getSigner(this.publicKey);
    return await e.createExternalMessage({
      address: this.address,
      signer: r,
      timeout: t.timeout,
      abi: tl,
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
const tl = `{
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
const el = Ht;
class Ns {
  constructor(t) {
    this.address = (0, el.convertToAddressObject)(t.address), this.abi = typeof t.abi == "string" ? t.abi : JSON.stringify(t.abi), this.prepareMessageImpl = t.prepareMessage, this.publicKey = t.publicKey
  }
  async fetchPublicKey(t) {
    return this.publicKey != null ? this.publicKey : (this.publicKey = await t.fetchPublicKey(this.address), this.publicKey)
  }
  async prepareMessage(t, e) {
    const r = await this.fetchPublicKey(e),
      s = await e.getSigner(r),
      {
        method: i,
        params: o,
        stateInit: u
      } = await this.prepareMessageImpl(t, e);
    return e.createExternalMessage({
      address: this.address,
      signer: s,
      timeout: t.timeout,
      abi: this.abi,
      method: i,
      params: o,
      stateInit: u,
      signatureId: t.signatureId
    })
  }
}
xe.GenericAccount = Ns;
class nl extends Ns {
  constructor(t) {
    const e = t.type === "multisig2";
    super({
      address: t.address,
      publicKey: t.publicKey,
      abi: e ? sl : rl,
      prepareMessage: async (r, s) => {
        if (!e && r.stateInit != null) throw new Error("Old multisig contract does not support state init in an internal message");
        const i = r.payload ? s.encodeInternalInput(r.payload) : "";
        return e && r.stateInit != null ? {
          method: "submitTransaction",
          params: {
            dest: r.recipient,
            value: r.amount,
            bounce: r.bounce,
            allBalance: !1,
            payload: i,
            stateInit: r.stateInit
          }
        } : {
          method: "sendTransaction",
          params: {
            dest: r.recipient,
            value: r.amount,
            bounce: r.bounce,
            flags: 3,
            payload: i
          }
        }
      }
    })
  }
}
xe.MsigAccount = nl;
const rl = `{
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
  sl = `{
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
  il = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  Jn = Math.ceil,
  ee = Math.floor,
  Jt = "[BigNumber Error] ",
  Jr = Jt + "Number primitive has more than 15 significant digits: ",
  ie = 1e14,
  it = 14,
  Xn = 9007199254740991,
  Yn = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  be = 1e7,
  Ft = 1e9;

function $s(n) {
  var t, e, r, s = y.prototype = {
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
    w = !1,
    A = 1,
    I = 0,
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
    m = "0123456789abcdefghijklmnopqrstuvwxyz",
    j = !0;

  function y(l, d) {
    var g, P, T, O, N, S, M, $, L = this;
    if (!(L instanceof y)) return new y(l, d);
    if (d == null) {
      if (l && l._isBigNumber === !0) {
        L.s = l.s, !l.c || l.e > C ? L.c = L.e = null : l.e < p ? L.c = [L.e = 0] : (L.e = l.e, L.c = l.c.slice());
        return
      }
      if ((S = typeof l == "number") && l * 0 == 0) {
        if (L.s = 1 / l < 0 ? (l = -l, -1) : 1, l === ~~l) {
          for (O = 0, N = l; N >= 10; N /= 10, O++);
          O > C ? L.c = L.e = null : (L.e = O, L.c = [l]);
          return
        }
        $ = String(l)
      } else {
        if (!il.test($ = String(l))) return r(L, $, S);
        L.s = $.charCodeAt(0) == 45 ? ($ = $.slice(1), -1) : 1
      }(O = $.indexOf(".")) > -1 && ($ = $.replace(".", "")), (N = $.search(/e/i)) > 0 ? (O < 0 && (O = N), O += +$.slice(N + 1), $ = $.substring(0, N)) : O < 0 && (O = $.length)
    } else {
      if (Ct(d, 2, m.length, "Base"), d == 10 && j) return L = new y(l), K(L, o + L.e + 1, u);
      if ($ = String(l), S = typeof l == "number") {
        if (l * 0 != 0) return r(L, $, S, d);
        if (L.s = 1 / l < 0 ? ($ = $.slice(1), -1) : 1, y.DEBUG && $.replace(/^0\.0*|\./, "").length > 15) throw Error(Jr + l)
      } else L.s = $.charCodeAt(0) === 45 ? ($ = $.slice(1), -1) : 1;
      for (g = m.slice(0, d), O = N = 0, M = $.length; N < M; N++)
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
          return r(L, String(l), S, d)
        } S = !1, $ = e($, d, 10, L.s), (O = $.indexOf(".")) > -1 ? $ = $.replace(".", "") : O = $.length
    }
    for (N = 0; $.charCodeAt(N) === 48; N++);
    for (M = $.length; $.charCodeAt(--M) === 48;);
    if ($ = $.slice(N, ++M)) {
      if (M -= N, S && y.DEBUG && M > 15 && (l > Xn || l !== ee(l))) throw Error(Jr + L.s * l);
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
  y.clone = $s, y.ROUND_UP = 0, y.ROUND_DOWN = 1, y.ROUND_CEIL = 2, y.ROUND_FLOOR = 3, y.ROUND_HALF_UP = 4, y.ROUND_HALF_DOWN = 5, y.ROUND_HALF_EVEN = 6, y.ROUND_HALF_CEIL = 7, y.ROUND_HALF_FLOOR = 8, y.EUCLID = 9, y.config = y.set = function(l) {
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
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) w = g;
              else throw w = !g, Error(Jt + "crypto unavailable");
        else w = g;
        else throw Error(Jt + d + " not true or false: " + g);
        if (l.hasOwnProperty(d = "MODULO_MODE") && (g = l[d], Ct(g, 0, 9, d), A = g), l.hasOwnProperty(d = "POW_PRECISION") && (g = l[d], Ct(g, 0, Ft, d), I = g), l.hasOwnProperty(d = "FORMAT"))
          if (g = l[d], typeof g == "object") f = g;
          else throw Error(Jt + d + " not an object: " + g);
        if (l.hasOwnProperty(d = "ALPHABET"))
          if (g = l[d], typeof g == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(g)) j = g.slice(0, 10) == "0123456789", m = g;
          else throw Error(Jt + d + " invalid: " + g)
      } else throw Error(Jt + "Object expected: " + l);
    return {
      DECIMAL_PLACES: o,
      ROUNDING_MODE: u,
      EXPONENTIAL_AT: [_, h],
      RANGE: [p, C],
      CRYPTO: w,
      MODULO_MODE: A,
      POW_PRECISION: I,
      FORMAT: f,
      ALPHABET: m
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
    return b(arguments, -1)
  }, y.minimum = y.min = function() {
    return b(arguments, 1)
  }, y.random = function() {
    var l = 9007199254740992,
      d = Math.random() * l & 2097151 ? function() {
        return ee(Math.random() * l)
      } : function() {
        return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
      };
    return function(g) {
      var P, T, O, N, S, M = 0,
        $ = [],
        L = new y(i);
      if (g == null ? g = o : Ct(g, 0, Ft), N = Jn(g / it), w)
        if (crypto.getRandomValues) {
          for (P = crypto.getRandomValues(new Uint32Array(N *= 2)); M < N;) S = P[M] * 131072 + (P[M + 1] >>> 11), S >= 9e15 ? (T = crypto.getRandomValues(new Uint32Array(2)), P[M] = T[0], P[M + 1] = T[1]) : ($.push(S % 1e14), M += 2);
          M = N / 2
        } else if (crypto.randomBytes) {
        for (P = crypto.randomBytes(N *= 7); M < N;) S = (P[M] & 31) * 281474976710656 + P[M + 1] * 1099511627776 + P[M + 2] * 4294967296 + P[M + 3] * 16777216 + (P[M + 4] << 16) + (P[M + 5] << 8) + P[M + 6], S >= 9e15 ? crypto.randomBytes(7).copy(P, M) : ($.push(S % 1e14), M += 7);
        M = N / 7
      } else throw w = !1, Error(Jt + "crypto unavailable");
      if (!w)
        for (; M < N;) S = d(), S < 9e15 && ($[M++] = S % 1e14);
      for (N = $[--M], g %= it, N && g && (S = Yn[it - g], $[M] = ee(N / S) * S); $[M] === 0; $.pop(), M--);
      if (M < 0) $ = [O = 0];
      else {
        for (O = -1; $[0] === 0; $.splice(0, 1), O -= it);
        for (M = 1, S = $[0]; S >= 10; S /= 10, M++);
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
      for (var N, S = [0], M, $ = 0, L = g.length; $ < L;) {
        for (M = S.length; M--; S[M] *= P);
        for (S[0] += O.indexOf(g.charAt($++)), N = 0; N < S.length; N++) S[N] > T - 1 && (S[N + 1] == null && (S[N + 1] = 0), S[N + 1] += S[N] / T | 0, S[N] %= T)
      }
      return S.reverse()
    }
    return function(g, P, T, O, N) {
      var S, M, $, L, z, et, nt, _t, vt = g.indexOf("."),
        Pt = o,
        ut = u;
      for (vt >= 0 && (L = I, I = 0, g = g.replace(".", ""), _t = new y(P), et = _t.pow(g.length - vt), I = L, _t.c = d(ue(te(et.c), et.e, "0"), 10, T, l), _t.e = _t.c.length), nt = d(g, P, T, N ? (S = m, l) : (S = l, m)), $ = L = nt.length; nt[--L] == 0; nt.pop());
      if (!nt[0]) return S.charAt(0);
      if (vt < 0 ? --$ : (et.c = nt, et.e = $, et.s = O, et = t(et, _t, Pt, ut, T), nt = et.c, z = et.r, $ = et.e), M = $ + Pt + 1, vt = nt[M], L = T / 2, z = z || M < 0 || nt[M + 1] != null, z = ut < 4 ? (vt != null || z) && (ut == 0 || ut == (et.s < 0 ? 3 : 2)) : vt > L || vt == L && (ut == 4 || z || ut == 6 && nt[M - 1] & 1 || ut == (et.s < 0 ? 8 : 7)), M < 1 || !nt[0]) g = z ? ue(S.charAt(1), -Pt, S.charAt(0)) : S.charAt(0);
      else {
        if (nt.length = M, z)
          for (--T; ++nt[--M] > T;) nt[M] = 0, M || (++$, nt = [1].concat(nt));
        for (L = nt.length; !nt[--L];);
        for (vt = 0, g = ""; vt <= L; g += S.charAt(nt[vt++]));
        g = ue(g, $, S.charAt(0))
      }
      return g
    }
  }(), t = function() {
    function l(P, T, O) {
      var N, S, M, $, L = 0,
        z = P.length,
        et = T % be,
        nt = T / be | 0;
      for (P = P.slice(); z--;) M = P[z] % be, $ = P[z] / be | 0, N = nt * M + $ * et, S = et * M + N % be * be + L, L = (S / O | 0) + (N / be | 0) + nt * $, P[z] = S % O;
      return L && (P = [L].concat(P)), P
    }

    function d(P, T, O, N) {
      var S, M;
      if (O != N) M = O > N ? 1 : -1;
      else
        for (S = M = 0; S < O; S++)
          if (P[S] != T[S]) {
            M = P[S] > T[S] ? 1 : -1;
            break
          } return M
    }

    function g(P, T, O, N) {
      for (var S = 0; O--;) P[O] -= S, S = P[O] < T[O] ? 1 : 0, P[O] = S * N + P[O] - T[O];
      for (; !P[0] && P.length > 1; P.splice(0, 1));
    }
    return function(P, T, O, N, S) {
      var M, $, L, z, et, nt, _t, vt, Pt, ut, ht, Rt, De, ze, Ue, qt, Ae, Vt = P.s == T.s ? 1 : -1,
        Nt = P.c,
        At = T.c;
      if (!Nt || !Nt[0] || !At || !At[0]) return new y(!P.s || !T.s || (Nt ? At && Nt[0] == At[0] : !At) ? NaN : Nt && Nt[0] == 0 || !At ? Vt * 0 : Vt / 0);
      for (vt = new y(Vt), Pt = vt.c = [], $ = P.e - T.e, Vt = O + $ + 1, S || (S = ie, $ = ne(P.e / it) - ne(T.e / it), Vt = Vt / it | 0), L = 0; At[L] == (Nt[L] || 0); L++);
      if (At[L] > (Nt[L] || 0) && $--, Vt < 0) Pt.push(1), z = !0;
      else {
        for (ze = Nt.length, qt = At.length, L = 0, Vt += 2, et = ee(S / (At[0] + 1)), et > 1 && (At = l(At, et, S), Nt = l(Nt, et, S), qt = At.length, ze = Nt.length), De = qt, ut = Nt.slice(0, qt), ht = ut.length; ht < qt; ut[ht++] = 0);
        Ae = At.slice(), Ae = [0].concat(Ae), Ue = At[0], At[1] >= S / 2 && Ue++;
        do {
          if (et = 0, M = d(At, ut, qt, ht), M < 0) {
            if (Rt = ut[0], qt != ht && (Rt = Rt * S + (ut[1] || 0)), et = ee(Rt / Ue), et > 1)
              for (et >= S && (et = S - 1), nt = l(At, et, S), _t = nt.length, ht = ut.length; d(nt, ut, _t, ht) == 1;) et--, g(nt, qt < _t ? Ae : At, _t, S), _t = nt.length, M = 1;
            else et == 0 && (M = et = 1), nt = At.slice(), _t = nt.length;
            if (_t < ht && (nt = [0].concat(nt)), g(ut, nt, ht, S), ht = ut.length, M == -1)
              for (; d(At, ut, qt, ht) < 1;) et++, g(ut, qt < ht ? Ae : At, ht, S), ht = ut.length
          } else M === 0 && (et++, ut = [0]);
          Pt[L++] = et, ut[0] ? ut[ht++] = Nt[De] || 0 : (ut = [Nt[De]], ht = 1)
        } while ((De++ < ze || ut[0] != null) && Vt--);
        z = ut[0] != null, Pt[0] || Pt.splice(0, 1)
      }
      if (S == ie) {
        for (L = 1, Vt = Pt[0]; Vt >= 10; Vt /= 10, L++);
        K(vt, O + (vt.e = L + $ * it - 1) + 1, N, z)
      } else vt.e = $, vt.r = +z;
      return vt
    }
  }();

  function v(l, d, g, P) {
    var T, O, N, S, M;
    if (g == null ? g = u : Ct(g, 0, 8), !l.c) return l.toString();
    if (T = l.c[0], N = l.e, d == null) M = te(l.c), M = P == 1 || P == 2 && (N <= _ || N >= h) ? pn(M, N) : ue(M, N, "0");
    else if (l = K(new y(l), d, g), O = l.e, M = te(l.c), S = M.length, P == 1 || P == 2 && (d <= O || O <= _)) {
      for (; S < d; M += "0", S++);
      M = pn(M, O)
    } else if (d -= N, M = ue(M, O, "0"), O + 1 > S) {
      if (--d > 0)
        for (M += "."; d--; M += "0");
    } else if (d += O - S, d > 0)
      for (O + 1 == S && (M += "."); d--; M += "0");
    return l.s < 0 && T ? "-" + M : M
  }

  function b(l, d) {
    for (var g, P, T = 1, O = new y(l[0]); T < l.length; T++) P = new y(l[T]), (!P.s || (g = Se(O, P)) === d || g === 0 && O.s === d) && (O = P);
    return O
  }

  function F(l, d, g) {
    for (var P = 1, T = d.length; !d[--T]; d.pop());
    for (T = d[0]; T >= 10; T /= 10, P++);
    return (g = P + g * it - 1) > C ? l.c = l.e = null : g < p ? l.c = [l.e = 0] : (l.e = g, l.c = d), l
  }
  r = function() {
    var l = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      d = /^([^.]+)\.$/,
      g = /^\.([^.]+)$/,
      P = /^-?(Infinity|NaN)$/,
      T = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(O, N, S, M) {
      var $, L = S ? N : N.replace(T, "");
      if (P.test(L)) O.s = isNaN(L) ? null : L < 0 ? -1 : 1;
      else {
        if (!S && (L = L.replace(l, function(z, et, nt) {
            return $ = (nt = nt.toLowerCase()) == "x" ? 16 : nt == "b" ? 2 : 8, !M || M == $ ? et : z
          }), M && ($ = M, L = L.replace(d, "$1").replace(g, "0.$1")), N != L)) return new y(L, $);
        if (y.DEBUG) throw Error(Jt + "Not a" + (M ? " base " + M : "") + " number: " + N);
        O.s = null
      }
      O.c = O.e = null
    }
  }();

  function K(l, d, g, P) {
    var T, O, N, S, M, $, L, z = l.c,
      et = Yn;
    if (z) {
      t: {
        for (T = 1, S = z[0]; S >= 10; S /= 10, T++);
        if (O = d - T, O < 0) O += it,
        N = d,
        M = z[$ = 0],
        L = ee(M / et[T - N - 1] % 10);
        else if ($ = Jn((O + 1) / it), $ >= z.length)
          if (P) {
            for (; z.length <= $; z.push(0));
            M = L = 0, T = 1, O %= it, N = O - it + 1
          } else break t;
        else {
          for (M = S = z[$], T = 1; S >= 10; S /= 10, T++);
          O %= it, N = O - it + T, L = N < 0 ? 0 : ee(M / et[T - N - 1] % 10)
        }
        if (P = P || d < 0 || z[$ + 1] != null || (N < 0 ? M : M % et[T - N - 1]), P = g < 4 ? (L || P) && (g == 0 || g == (l.s < 0 ? 3 : 2)) : L > 5 || L == 5 && (g == 4 || P || g == 6 && (O > 0 ? N > 0 ? M / et[T - N] : 0 : z[$ - 1]) % 10 & 1 || g == (l.s < 0 ? 8 : 7)), d < 1 || !z[0]) return z.length = 0,
        P ? (d -= l.e + 1, z[0] = et[(it - d % it) % it], l.e = -d || 0) : z[0] = l.e = 0,
        l;
        if (O == 0 ? (z.length = $, S = 1, $--) : (z.length = $ + 1, S = et[it - O], z[$] = N > 0 ? ee(M / et[T - N] % et[N]) * S : 0), P)
          for (;;)
            if ($ == 0) {
              for (O = 1, N = z[0]; N >= 10; N /= 10, O++);
              for (N = z[0] += S, S = 1; N >= 10; N /= 10, S++);
              O != S && (l.e++, z[0] == ie && (z[0] = 1));
              break
            } else {
              if (z[$] += S, z[$] != ie) break;
              z[$--] = 0, S = 1
            } for (O = z.length; z[--O] === 0; z.pop());
      }
      l.e > C ? l.c = l.e = null : l.e < p && (l.c = [l.e = 0])
    }
    return l
  }

  function B(l) {
    var d, g = l.e;
    return g === null ? l.toString() : (d = te(l.c), d = g <= _ || g >= h ? pn(d, g) : ue(d, g, "0"), l.s < 0 ? "-" + d : d)
  }
  return s.absoluteValue = s.abs = function() {
    var l = new y(this);
    return l.s < 0 && (l.s = 1), l
  }, s.comparedTo = function(l, d) {
    return Se(this, new y(l, d))
  }, s.decimalPlaces = s.dp = function(l, d) {
    var g, P, T, O = this;
    if (l != null) return Ct(l, 0, Ft), d == null ? d = u : Ct(d, 0, 8), K(new y(O), l + O.e + 1, d);
    if (!(g = O.c)) return null;
    if (P = ((T = g.length - 1) - ne(this.e / it)) * it, T = g[T])
      for (; T % 10 == 0; T /= 10, P--);
    return P < 0 && (P = 0), P
  }, s.dividedBy = s.div = function(l, d) {
    return t(this, new y(l, d), o, u)
  }, s.dividedToIntegerBy = s.idiv = function(l, d) {
    return t(this, new y(l, d), 0, 1)
  }, s.exponentiatedBy = s.pow = function(l, d) {
    var g, P, T, O, N, S, M, $, L, z = this;
    if (l = new y(l), l.c && !l.isInteger()) throw Error(Jt + "Exponent not an integer: " + B(l));
    if (d != null && (d = new y(d)), S = l.e > 14, !z.c || !z.c[0] || z.c[0] == 1 && !z.e && z.c.length == 1 || !l.c || !l.c[0]) return L = new y(Math.pow(+B(z), S ? l.s * (2 - _n(l)) : +B(l))), d ? L.mod(d) : L;
    if (M = l.s < 0, d) {
      if (d.c ? !d.c[0] : !d.s) return new y(NaN);
      P = !M && z.isInteger() && d.isInteger(), P && (z = z.mod(d))
    } else {
      if (l.e > 9 && (z.e > 0 || z.e < -1 || (z.e == 0 ? z.c[0] > 1 || S && z.c[1] >= 24e7 : z.c[0] < 8e13 || S && z.c[0] <= 9999975e7))) return O = z.s < 0 && _n(l) ? -0 : 0, z.e > -1 && (O = 1 / O), new y(M ? 1 / O : O);
      I && (O = Jn(I / it + 2))
    }
    for (S ? (g = new y(.5), M && (l.s = 1), $ = _n(l)) : (T = Math.abs(+B(l)), $ = T % 2), L = new y(i);;) {
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
    return P ? L : (M && (L = i.div(L)), d ? L.mod(d) : O ? K(L, I, u, N) : L)
  }, s.integerValue = function(l) {
    var d = new y(this);
    return l == null ? l = u : Ct(l, 0, 8), K(d, d.e + 1, l)
  }, s.isEqualTo = s.eq = function(l, d) {
    return Se(this, new y(l, d)) === 0
  }, s.isFinite = function() {
    return !!this.c
  }, s.isGreaterThan = s.gt = function(l, d) {
    return Se(this, new y(l, d)) > 0
  }, s.isGreaterThanOrEqualTo = s.gte = function(l, d) {
    return (d = Se(this, new y(l, d))) === 1 || d === 0
  }, s.isInteger = function() {
    return !!this.c && ne(this.e / it) > this.c.length - 2
  }, s.isLessThan = s.lt = function(l, d) {
    return Se(this, new y(l, d)) < 0
  }, s.isLessThanOrEqualTo = s.lte = function(l, d) {
    return (d = Se(this, new y(l, d))) === -1 || d === 0
  }, s.isNaN = function() {
    return !this.s
  }, s.isNegative = function() {
    return this.s < 0
  }, s.isPositive = function() {
    return this.s > 0
  }, s.isZero = function() {
    return !!this.c && this.c[0] == 0
  }, s.minus = function(l, d) {
    var g, P, T, O, N = this,
      S = N.s;
    if (l = new y(l, d), d = l.s, !S || !d) return new y(NaN);
    if (S != d) return l.s = -d, N.plus(l);
    var M = N.e / it,
      $ = l.e / it,
      L = N.c,
      z = l.c;
    if (!M || !$) {
      if (!L || !z) return L ? (l.s = -d, l) : new y(z ? N : NaN);
      if (!L[0] || !z[0]) return z[0] ? (l.s = -d, l) : new y(L[0] ? N : u == 3 ? -0 : 0)
    }
    if (M = ne(M), $ = ne($), L = L.slice(), S = M - $) {
      for ((O = S < 0) ? (S = -S, T = L) : ($ = M, T = z), T.reverse(), d = S; d--; T.push(0));
      T.reverse()
    } else
      for (P = (O = (S = L.length) < (d = z.length)) ? S : d, S = d = 0; d < P; d++)
        if (L[d] != z[d]) {
          O = L[d] < z[d];
          break
        } if (O && (T = L, L = z, z = T, l.s = -l.s), d = (P = z.length) - (g = L.length), d > 0)
      for (; d--; L[g++] = 0);
    for (d = ie - 1; P > S;) {
      if (L[--P] < z[P]) {
        for (g = P; g && !L[--g]; L[g] = d);
        --L[g], L[P] += ie
      }
      L[P] -= z[P]
    }
    for (; L[0] == 0; L.splice(0, 1), --$);
    return L[0] ? F(l, L, $) : (l.s = u == 3 ? -1 : 1, l.c = [l.e = 0], l)
  }, s.modulo = s.mod = function(l, d) {
    var g, P, T = this;
    return l = new y(l, d), !T.c || !l.s || l.c && !l.c[0] ? new y(NaN) : !l.c || T.c && !T.c[0] ? new y(T) : (A == 9 ? (P = l.s, l.s = 1, g = t(T, l, 0, 3), l.s = P, g.s *= P) : g = t(T, l, 0, A), l = T.minus(g.times(l)), !l.c[0] && A == 1 && (l.s = T.s), l)
  }, s.multipliedBy = s.times = function(l, d) {
    var g, P, T, O, N, S, M, $, L, z, et, nt, _t, vt, Pt, ut = this,
      ht = ut.c,
      Rt = (l = new y(l, d)).c;
    if (!ht || !Rt || !ht[0] || !Rt[0]) return !ut.s || !l.s || ht && !ht[0] && !Rt || Rt && !Rt[0] && !ht ? l.c = l.e = l.s = null : (l.s *= ut.s, !ht || !Rt ? l.c = l.e = null : (l.c = [0], l.e = 0)), l;
    for (P = ne(ut.e / it) + ne(l.e / it), l.s *= ut.s, M = ht.length, z = Rt.length, M < z && (_t = ht, ht = Rt, Rt = _t, T = M, M = z, z = T), T = M + z, _t = []; T--; _t.push(0));
    for (vt = ie, Pt = be, T = z; --T >= 0;) {
      for (g = 0, et = Rt[T] % Pt, nt = Rt[T] / Pt | 0, N = M, O = T + N; O > T;) $ = ht[--N] % Pt, L = ht[N] / Pt | 0, S = nt * $ + L * et, $ = et * $ + S % Pt * Pt + _t[O] + g, g = ($ / vt | 0) + (S / Pt | 0) + nt * L, _t[O--] = $ % vt;
      _t[O] = g
    }
    return g ? ++P : _t.splice(0, 1), F(l, _t, P)
  }, s.negated = function() {
    var l = new y(this);
    return l.s = -l.s || null, l
  }, s.plus = function(l, d) {
    var g, P = this,
      T = P.s;
    if (l = new y(l, d), d = l.s, !T || !d) return new y(NaN);
    if (T != d) return l.s = -d, P.minus(l);
    var O = P.e / it,
      N = l.e / it,
      S = P.c,
      M = l.c;
    if (!O || !N) {
      if (!S || !M) return new y(T / 0);
      if (!S[0] || !M[0]) return M[0] ? l : new y(S[0] ? P : T * 0)
    }
    if (O = ne(O), N = ne(N), S = S.slice(), T = O - N) {
      for (T > 0 ? (N = O, g = M) : (T = -T, g = S), g.reverse(); T--; g.push(0));
      g.reverse()
    }
    for (T = S.length, d = M.length, T - d < 0 && (g = M, M = S, S = g, d = T), T = 0; d;) T = (S[--d] = S[d] + M[d] + T) / ie | 0, S[d] = ie === S[d] ? 0 : S[d] % ie;
    return T && (S = [T].concat(S), ++N), F(l, S, N)
  }, s.precision = s.sd = function(l, d) {
    var g, P, T, O = this;
    if (l != null && l !== !!l) return Ct(l, 1, Ft), d == null ? d = u : Ct(d, 0, 8), K(new y(O), l, d);
    if (!(g = O.c)) return null;
    if (T = g.length - 1, P = T * it + 1, T = g[T]) {
      for (; T % 10 == 0; T /= 10, P--);
      for (T = g[0]; T >= 10; T /= 10, P++);
    }
    return l && O.e + 1 > P && (P = O.e + 1), P
  }, s.shiftedBy = function(l) {
    return Ct(l, -Xn, Xn), this.times("1e" + l)
  }, s.squareRoot = s.sqrt = function() {
    var l, d, g, P, T, O = this,
      N = O.c,
      S = O.s,
      M = O.e,
      $ = o + 4,
      L = new y("0.5");
    if (S !== 1 || !N || !N[0]) return new y(!S || S < 0 && (!N || N[0]) ? NaN : N ? O : 1 / 0);
    if (S = Math.sqrt(+B(O)), S == 0 || S == 1 / 0 ? (d = te(N), (d.length + M) % 2 == 0 && (d += "0"), S = Math.sqrt(+d), M = ne((M + 1) / 2) - (M < 0 || M % 2), S == 1 / 0 ? d = "5e" + M : (d = S.toExponential(), d = d.slice(0, d.indexOf("e") + 1) + M), g = new y(d)) : g = new y(S + ""), g.c[0]) {
      for (M = g.e, S = M + $, S < 3 && (S = 0);;)
        if (T = g, g = L.times(T.plus(t(O, T, $, 1))), te(T.c).slice(0, S) === (d = te(g.c)).slice(0, S))
          if (g.e < M && --S, d = d.slice(S - 3, S + 1), d == "9999" || !P && d == "4999") {
            if (!P && (K(T, T.e + o + 2, 0), T.times(T).eq(O))) {
              g = T;
              break
            }
            $ += 4, S += 4, P = 1
          } else {
            (!+d || !+d.slice(1) && d.charAt(0) == "5") && (K(g, g.e + o + 2, 1), l = !g.times(g).eq(O));
            break
          }
    }
    return K(g, g.e + o + 1, u, l)
  }, s.toExponential = function(l, d) {
    return l != null && (Ct(l, 0, Ft), l++), v(this, l, d, 1)
  }, s.toFixed = function(l, d) {
    return l != null && (Ct(l, 0, Ft), l = l + this.e + 1), v(this, l, d)
  }, s.toFormat = function(l, d, g) {
    var P, T = this;
    if (g == null) l != null && d && typeof d == "object" ? (g = d, d = null) : l && typeof l == "object" ? (g = l, l = d = null) : g = f;
    else if (typeof g != "object") throw Error(Jt + "Argument not an object: " + g);
    if (P = T.toFixed(l, d), T.c) {
      var O, N = P.split("."),
        S = +g.groupSize,
        M = +g.secondaryGroupSize,
        $ = g.groupSeparator || "",
        L = N[0],
        z = N[1],
        et = T.s < 0,
        nt = et ? L.slice(1) : L,
        _t = nt.length;
      if (M && (O = S, S = M, M = O, _t -= O), S > 0 && _t > 0) {
        for (O = _t % S || S, L = nt.substr(0, O); O < _t; O += S) L += $ + nt.substr(O, S);
        M > 0 && (L += $ + nt.slice(O)), et && (L = "-" + L)
      }
      P = z ? L + (g.decimalSeparator || "") + ((M = +g.fractionGroupSize) ? z.replace(new RegExp("\\d{" + M + "}\\B", "g"), "$&" + (g.fractionGroupSeparator || "")) : z) : L
    }
    return (g.prefix || "") + P + (g.suffix || "")
  }, s.toFraction = function(l) {
    var d, g, P, T, O, N, S, M, $, L, z, et, nt = this,
      _t = nt.c;
    if (l != null && (S = new y(l), !S.isInteger() && (S.c || S.s !== 1) || S.lt(i))) throw Error(Jt + "Argument " + (S.isInteger() ? "out of range: " : "not an integer: ") + B(S));
    if (!_t) return new y(nt);
    for (d = new y(i), $ = g = new y(i), P = M = new y(i), et = te(_t), O = d.e = et.length - nt.e - 1, d.c[0] = Yn[(N = O % it) < 0 ? it + N : N], l = !l || S.comparedTo(d) > 0 ? O > 0 ? d : $ : S, N = C, C = 1 / 0, S = new y(et), M.c[0] = 0; L = t(S, d, 0, 1), T = g.plus(L.times(P)), T.comparedTo(l) != 1;) g = P, P = T, $ = M.plus(L.times(T = $)), M = T, d = S.minus(L.times(T = d)), S = T;
    return T = t(l.minus(g), P, 0, 1), M = M.plus(T.times($)), g = g.plus(T.times(P)), M.s = $.s = nt.s, O = O * 2, z = t($, P, O, u).minus(nt).abs().comparedTo(t(M, g, O, u).minus(nt).abs()) < 1 ? [$, P] : [M, g], C = N, z
  }, s.toNumber = function() {
    return +B(this)
  }, s.toPrecision = function(l, d) {
    return l != null && Ct(l, 1, Ft), v(this, l, d, 2)
  }, s.toString = function(l) {
    var d, g = this,
      P = g.s,
      T = g.e;
    return T === null ? P ? (d = "Infinity", P < 0 && (d = "-" + d)) : d = "NaN" : (l == null ? d = T <= _ || T >= h ? pn(te(g.c), T) : ue(te(g.c), T, "0") : l === 10 && j ? (g = K(new y(g), o + T + 1, u), d = ue(te(g.c), g.e, "0")) : (Ct(l, 2, m.length, "Base"), d = e(ue(te(g.c), T, "0"), 10, l, P, !0)), P < 0 && g.c[0] && (d = "-" + d)), d
  }, s.valueOf = s.toJSON = function() {
    return B(this)
  }, s._isBigNumber = !0, s[Symbol.toStringTag] = "BigNumber", s[Symbol.for("nodejs.util.inspect.custom")] = s.valueOf, n != null && y.set(n), y
}

function ne(n) {
  var t = n | 0;
  return n > 0 || n === t ? t : t - 1
}

function te(n) {
  for (var t, e, r = 1, s = n.length, i = n[0] + ""; r < s;) {
    for (t = n[r++] + "", e = it - t.length; e--; t = "0" + t);
    i += t
  }
  for (s = i.length; i.charCodeAt(--s) === 48;);
  return i.slice(0, s + 1 || 1)
}

function Se(n, t) {
  var e, r, s = n.c,
    i = t.c,
    o = n.s,
    u = t.s,
    _ = n.e,
    h = t.e;
  if (!o || !u) return null;
  if (e = s && !s[0], r = i && !i[0], e || r) return e ? r ? 0 : -u : o;
  if (o != u) return o;
  if (e = o < 0, r = _ == h, !s || !i) return r ? 0 : !s ^ e ? 1 : -1;
  if (!r) return _ > h ^ e ? 1 : -1;
  for (u = (_ = s.length) < (h = i.length) ? _ : h, o = 0; o < u; o++)
    if (s[o] != i[o]) return s[o] > i[o] ^ e ? 1 : -1;
  return _ == h ? 0 : _ > h ^ e ? 1 : -1
}

function Ct(n, t, e, r) {
  if (n < t || n > e || n !== ee(n)) throw Error(Jt + (r || "Argument") + (typeof n == "number" ? n < t || n > e ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n))
}

function _n(n) {
  var t = n.c.length - 1;
  return ne(n.e / it) == t && n.c[t] % 2 != 0
}

function pn(n, t) {
  return (n.length > 1 ? n.charAt(0) + "." + n.slice(1) : n) + (t < 0 ? "e" : "e+") + t
}

function ue(n, t, e) {
  var r, s;
  if (t < 0) {
    for (s = e + "."; ++t; s += e);
    n = s + n
  } else if (r = n.length, ++t > r) {
    for (s = e, t -= r; --t; s += e);
    n += s
  } else t < r && (n = n.slice(0, t) + "." + n.slice(t));
  return n
}
var Xr = $s();
const al = Object.freeze(Object.defineProperty({
    __proto__: null,
    BigNumber: Xr,
    default: Xr
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  mr = us(al);
var js = tt && tt.__importDefault || function(n) {
  return n && n.__esModule ? n : {
    default: n
  }
};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.WalletV3Account = void 0;
const ol = ve,
  Ve = js(mr),
  dr = js(Zt);
class vn {
  static async computeAddress(t) {
    await dr.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof Ve.default ? t.publicKey : new Ve.default(`0x${t.publicKey}`),
      r = Yr(e).hash;
    return new ol.Address(`${t.workchain!=null?t.workchain:0}:${r}`)
  }
  static async fromPubkey(t) {
    const e = new Ve.default(`0x${t.publicKey}`),
      r = await vn.computeAddress({
        publicKey: e,
        workchain: t.workchain
      }),
      s = new vn(r);
    return s.publicKey = e, s
  }
  constructor(t) {
    this.address = t
  }
  async fetchPublicKey(t) {
    let e = this.publicKey;
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(r => new Ve.default(`0x${r}`))), e.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, e) {
    const {
      seqno: r,
      publicKey: s,
      stateInit: i
    } = await this.fetchState(e), o = await e.getSigner(s), u = e.nowSec + t.timeout, _ = t.payload ? e.encodeInternalInput(t.payload) : void 0, h = e.encodeInternalMessage({
      dst: t.recipient,
      bounce: t.bounce,
      stateInit: t.stateInit,
      body: _,
      amount: t.amount
    }), p = {
      walletId: xs,
      expireAt: u,
      seqno: r,
      flags: 3,
      message: h
    }, C = e.packIntoCell({
      structure: Ks,
      data: p
    }).hash, w = await o.sign(C, t.signatureId), {
      signatureParts: A
    } = e.extendSignature(w);
    p.signatureHigh = A.high, p.signatureLow = A.low;
    const I = e.packIntoCell({
      structure: ll,
      data: p
    }).boc;
    return e.createRawExternalMessage({
      address: this.address,
      body: I,
      stateInit: i,
      expireAt: u
    })
  }
  async fetchState(t) {
    let e, r;
    const s = await t.getFullContractState(this.address);
    if (s == null || !s.isDeployed) {
      if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
      e = Yr(this.publicKey).boc, r = {
        seqno: 0,
        publicKey: this.publicKey
      }
    } else {
      const i = t.extractContractData(s.boc);
      if (i == null) throw new Error("Failed to extract contract data");
      r = cl(t, i)
    }
    if (this.publicKey == null) this.publicKey = r.publicKey;
    else if (!this.publicKey.eq(r.publicKey)) throw new Error("Public key mismatch");
    return {
      seqno: r.seqno,
      publicKey: r.publicKey.toString(16).padStart(64, "0"),
      stateInit: e
    }
  }
}
Fn.WalletV3Account = vn;
const cl = (n, t) => {
    const e = n.unpackFromCell({
      structure: Bs,
      boc: t,
      allowPartial: !1
    });
    if (typeof e != "object" || typeof e.seqno != "string" || typeof e.publicKey != "string") throw new Error("Invalid contract data ");
    return {
      seqno: parseInt(e.seqno),
      publicKey: new Ve.default(e.publicKey)
    }
  },
  Yr = n => {
    const t = dr.default.nekoton.packIntoCell(Bs, {
      seqno: 0,
      walletId: xs,
      publicKey: n.toFixed(0)
    }).boc;
    return dr.default.nekoton.mergeTvc(ul, t)
  },
  Ks = [{
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
  ll = [{
    name: "signatureHigh",
    type: "uint256"
  }, {
    name: "signatureLow",
    type: "uint256"
  }, ...Ks],
  Bs = [{
    name: "seqno",
    type: "uint32"
  }, {
    name: "walletId",
    type: "uint32"
  }, {
    name: "publicKey",
    type: "uint256"
  }],
  ul = "te6ccgEBAQEAcQAA3v8AIN0gggFMl7ohggEznLqxn3Gw7UTQ0x/THzHXC//jBOCk8mCDCNcYINMf0x/TH/gjE7vyY+1E0NMf0x/T/9FRMrryoVFEuvKiBPkBVBBV+RDyo/gAkyDXSpbTB9QC+wDo0QGkyMsfyx/L/8ntVA==",
  xs = 1269378442;
var Nn = {},
  zs = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.HighloadWalletV2 = void 0;
const dl = ve,
  Qe = zs(mr),
  _r = zs(Zt),
  _l = Ht;
class An {
  static async computeAddress(t) {
    await _r.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof Qe.default ? t.publicKey : new Qe.default(`0x${t.publicKey}`),
      r = Zr(e).hash;
    return new dl.Address(`${t.workchain!=null?t.workchain:0}:${r}`)
  }
  static async fromPubkey(t) {
    const e = new Qe.default(`0x${t.publicKey}`),
      r = await An.computeAddress({
        publicKey: e,
        workchain: t.workchain
      }),
      s = new An(r);
    return s.publicKey = e, s
  }
  constructor(t) {
    this.address = (0, _l.convertToAddressObject)(t)
  }
  async fetchPublicKey(t) {
    let e = this.publicKey;
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(r => new Qe.default(`0x${r}`))), e.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, e) {
    const {
      publicKey: r,
      stateInit: s
    } = await this.fetchState(e), i = await e.getSigner(r), o = e.nowSec + t.timeout, u = t.payload ? e.encodeInternalInput(t.payload) : void 0, h = {
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
      structure: Us,
      data: h
    });
    h.walletId = Hs, h.expireAt = o, h.messagesHash = `0x${C.slice(-8)}`;
    const w = e.packIntoCell({
        structure: Ws,
        data: h
      }).hash,
      A = await i.sign(w, t.signatureId),
      {
        signatureParts: I
      } = e.extendSignature(A);
    h.signatureHigh = I.high, h.signatureLow = I.low;
    const f = e.packIntoCell({
      structure: fl,
      data: h
    }).boc;
    return e.createRawExternalMessage({
      address: this.address.toString(),
      body: f,
      stateInit: s,
      expireAt: o
    })
  }
  async fetchState(t) {
    let e, r;
    const s = await t.getFullContractState(this.address);
    if (s == null || !s.isDeployed) {
      if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
      e = Zr(this.publicKey).boc, r = this.publicKey
    } else if (this.publicKey == null) {
      const i = t.extractContractData(s.boc);
      if (i == null) throw new Error("Failed to extract contract data");
      r = pl(t, i).publicKey
    } else r = this.publicKey;
    return this.publicKey == null && (this.publicKey = r), {
      publicKey: r.toString(16).padStart(64, "0"),
      stateInit: e
    }
  }
}
Nn.HighloadWalletV2 = An;
const pl = (n, t) => {
    const e = n.unpackFromCell({
      structure: Gs,
      boc: t,
      allowPartial: !0
    });
    if (typeof e != "object" || typeof e.publicKey != "string") throw new Error("Invalid contract data");
    return {
      publicKey: new Qe.default(e.publicKey)
    }
  },
  Zr = n => {
    const t = _r.default.nekoton.packIntoCell(Gs, {
      walletId: Hs,
      lastCleaned: 0,
      publicKey: n.toFixed(0),
      queries: !1
    }).boc;
    return _r.default.nekoton.mergeTvc(hl, t)
  },
  Us = [{
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
  Ws = [{
    name: "walletId",
    type: "uint32"
  }, {
    name: "expireAt",
    type: "uint32"
  }, {
    name: "messagesHash",
    type: "uint32"
  }, ...Us],
  fl = [{
    name: "signatureHigh",
    type: "uint256"
  }, {
    name: "signatureLow",
    type: "uint256"
  }, ...Ws],
  Gs = [{
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
  hl = "te6ccgEBCQEA5QABFP8A9KQT9LzyyAsBAgEgBAIB6vKDCNcYINMf0z/4I6ofUyC58mPtRNDTH9M/0//0BNFTYIBA9A5voTHyYFFzuvKiB/kBVBCH+RDyowL0BNH4AH+OFiGAEPR4b6UgmALTB9QwAfsAkTLiAbPmW4MlochANIBA9EOK5jHIEssfE8s/y//0AMntVAMANCCAQPSWb6UyURCUMFMDud4gkzM2AZIyMOKzAgFICAUCASAHBgBBvl+XaiaGmPmOmf6f+Y+gJoqRBAIHoHN9CYyS2/yV3R8UABe9nOdqJoaa+Y64X/wABNAw",
  Hs = 0;
var $n = {},
  Vs = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.EverWalletAccount = void 0;
const gl = ve,
  Ge = Vs(mr),
  In = Vs(Zt);
class Sn {
  static async computeAddress(t) {
    await In.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof Ge.default ? t.publicKey : new Ge.default(`0x${t.publicKey}`),
      r = qr(e, t.nonce).hash;
    return new gl.Address(`${t.workchain!=null?t.workchain:0}:${r}`)
  }
  static async fromPubkey(t) {
    const e = new Ge.default(`0x${t.publicKey}`),
      r = await Sn.computeAddress({
        publicKey: e,
        workchain: t.workchain,
        nonce: t.nonce
      }),
      s = new Sn(r);
    return s.publicKey = e, s.nonce = t.nonce, s
  }
  constructor(t) {
    this.address = t
  }
  async fetchPublicKey(t) {
    let e = this.publicKey;
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(r => new Ge.default(`0x${r}`)), this.isDeployed = !0), e.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, e) {
    const {
      publicKey: r,
      stateInit: s
    } = await this.fetchState(e), i = await e.getSigner(r), o = t.payload ? e.encodeInternalInput(t.payload) : "";
    let u, _, h;
    return t.stateInit == null ? (u = yl, _ = "sendTransaction", h = {
      dest: t.recipient,
      value: t.amount,
      bounce: t.bounce,
      flags: 3,
      payload: o
    }) : (u = vl, _ = "sendTransactionRaw", h = {
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
      stateInit: s,
      signatureId: t.signatureId
    })
  }
  async fetchState(t) {
    let e, r;
    if (this.isDeployed === !0 && this.publicKey != null) r = this.publicKey;
    else {
      const s = await t.getFullContractState(this.address);
      if (s == null || !s.isDeployed) {
        if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
        e = qr(this.publicKey, this.nonce).boc, r = this.publicKey
      } else this.isDeployed = !0, r = new Ge.default(`0x${In.default.nekoton.extractPublicKey(s.boc)}`);
      this.publicKey == null && (this.publicKey = r)
    }
    return {
      publicKey: r.toString(16).padStart(64, "0"),
      stateInit: e
    }
  }
}
$n.EverWalletAccount = Sn;
const qr = (n, t) => {
    let e, r;
    t != null ? (e = ml, r = {
      publicKey: n.toFixed(0),
      timestamp: 0,
      nonce: t
    }) : (e = bl, r = {
      publicKey: n.toFixed(0),
      timestamp: 0
    });
    const s = In.default.nekoton.packIntoCell(e, r).boc;
    return In.default.nekoton.mergeTvc(wl, s)
  },
  bl = [{
    name: "publicKey",
    type: "uint256"
  }, {
    name: "timestamp",
    type: "uint64"
  }],
  ml = [{
    name: "publicKey",
    type: "uint256"
  }, {
    name: "timestamp",
    type: "uint64"
  }, {
    name: "nonce",
    type: "uint32"
  }],
  wl = "te6cckEBBgEA/AABFP8A9KQT9LzyyAsBAgEgAgMABNIwAubycdcBAcAA8nqDCNcY7UTQgwfXAdcLP8j4KM8WI88WyfkAA3HXAQHDAJqDB9cBURO68uBk3oBA1wGAINcBgCDXAVQWdfkQ8qj4I7vyeWa++COBBwiggQPoqFIgvLHydAIgghBM7mRsuuMPAcjL/8s/ye1UBAUAmDAC10zQ+kCDBtcBcdcBeNcB10z4AHCAEASqAhSxyMsFUAXPFlAD+gLLaSLQIc8xIddJoIQJuZgzcAHLAFjPFpcwcQHLABLM4skB+wAAPoIQFp4+EbqOEfgAApMg10qXeNcB1AL7AOjRkzLyPOI+zYS/",
  yl = `{
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
  vl = `{
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
  var r = xe;
  Object.defineProperty(n, "GenericAccount", {
    enumerable: !0,
    get: function() {
      return r.GenericAccount
    }
  }), Object.defineProperty(n, "MsigAccount", {
    enumerable: !0,
    get: function() {
      return r.MsigAccount
    }
  });
  var s = Fn;
  Object.defineProperty(n, "WalletV3Account", {
    enumerable: !0,
    get: function() {
      return s.WalletV3Account
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
    constructor(p, C, w, A) {
      this.clock = p, this.connectionController = C, this.nekoton = w, this.keystore = A
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
        const w = await p.signer.sign(C.hash, p.signatureId);
        return C.sign(w)
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
})(ur);
var jn = {};
Object.defineProperty(jn, "__esModule", {
  value: !0
});
jn.ConnectionFactory = void 0;
class Al {}
jn.ConnectionFactory = Al;
var Kn = {},
  Il = tt && tt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Kn, "__esModule", {
  value: !0
});
Kn.SimpleKeystore = void 0;
const Qs = Il(Zt);
class wr {
  constructor(t = {}) {
    this.signers = new Map, this.signersByPublicKey = new Map;
    for (const [e, r] of Object.entries(t)) this.addKeyPair(e, r)
  }
  static generateKeyPair() {
    return Qs.default.nekoton.ed25519_generateKeyPair()
  }
  addKeyPair(t, e) {
    let r, s;
    typeof t == "string" ? (r = t, s = e) : (r = t.publicKey, s = t);
    const i = new Sl(s);
    this.signers.set(r, i), this.signersByPublicKey.set(s.publicKey, i)
  }
  removeKeyPair(t) {
    const e = this.signers.get(t);
    e != null && (this.signers.delete(t), this.signersByPublicKey.delete(e.publicKey))
  }
  async withNewKey(t, e = {}) {
    const r = wr.generateKeyPair(),
      s = e.keyId != null ? e.keyId : r.publicKey,
      i = e.keepOnError || !1;
    return this.addKeyPair(s, r), t(s).then(o => (o === !1 && this.removeKeyPair(s), s)).catch(o => {
      throw i || this.removeKeyPair(s), o
    })
  }
  async getSigner(t) {
    return this.signers.get(t) || this.signersByPublicKey.get(t)
  }
}
Kn.SimpleKeystore = wr;
class Sl {
  constructor(t) {
    this.keyPair = t, this.publicKey = this.keyPair.publicKey
  }
  async sign(t, e) {
    return Qs.default.nekoton.ed25519_sign(this.keyPair.secretKey, t, e)
  }
}
var Bn = {};
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
Bn.Clock = void 0;
class kl {
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
Bn.Clock = kl;
(function(n) {
  var t = tt && tt.__createBinding || (Object.create ? function(k, a, E, D) {
      D === void 0 && (D = E);
      var x = Object.getOwnPropertyDescriptor(a, E);
      (!x || ("get" in x ? !a.__esModule : x.writable || x.configurable)) && (x = {
        enumerable: !0,
        get: function() {
          return a[E]
        }
      }), Object.defineProperty(k, D, x)
    } : function(k, a, E, D) {
      D === void 0 && (D = E), k[D] = a[E]
    }),
    e = tt && tt.__exportStar || function(k, a) {
      for (var E in k) E !== "default" && !Object.prototype.hasOwnProperty.call(a, E) && t(a, k, E)
    },
    r = tt && tt.__importDefault || function(k) {
      return k && k.__esModule ? k : {
        default: k
      }
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.EverscaleStandaloneClient = n.SUPPORTED_PERMISSIONS = n.VERSION = n.Clock = n.SimpleKeystore = n.checkConnection = n.ConnectionError = n.NETWORK_PRESETS = void 0;
  const s = r(kc),
    i = r(Zt),
    o = Ht,
    u = bn,
    _ = Dn,
    h = ur;
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
  }), e(ur, n);
  var w = Kn;
  Object.defineProperty(n, "SimpleKeystore", {
    enumerable: !0,
    get: function() {
      return w.SimpleKeystore
    }
  });
  var A = Bn;
  Object.defineProperty(n, "Clock", {
    enumerable: !0,
    get: function() {
      return A.Clock
    }
  });

  function I(k) {
    const a = k || {};
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
        D = (G, rt) => {
          var Z;
          (Z = E.client) === null || Z === void 0 || Z.emit(G, rt)
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
              message: I(a.message)
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
        requestPermissions: m,
        changeAccount: j,
        disconnect: y,
        subscribe: v,
        unsubscribe: b,
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
        getExpectedAddress: S,
        getContractFields: M,
        unpackInitData: $,
        getBocHash: L,
        packIntoCell: z,
        unpackFromCell: et,
        extractPublicKey: nt,
        codeToTvc: _t,
        mergeTvc: vt,
        splitTvc: Pt,
        setCodeSalt: ut,
        getCodeSalt: ht,
        encodeInternalInput: Rt,
        decodeInput: De,
        decodeOutput: ze,
        decodeEvent: Ue,
        decodeTransaction: qt,
        decodeTransactionEvents: Ae,
        verifySignature: Vt,
        sendUnsignedExternalMessage: Nt,
        signData: At,
        signDataRaw: Js,
        sendMessage: Xs,
        sendMessageDelayed: Ys,
        sendExternalMessage: Zs,
        sendExternalMessageDelayed: qs
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
  n.EverscaleStandaloneClient = f;
  const m = async (k, a) => {
    lt(a);
    const {
      permissions: E
    } = a.params;
    xn(a, a.params, "permissions");
    const D = {
      ...k.permissions
    };
    for (const G of E)
      if (G === "basic" || G === "tonClient") D.basic = !0;
      else if (G === "accountInteraction") {
      if (D.accountInteraction != null) continue;
      D.accountInteraction = await vr(a, k)
    } else throw Q(a, `Permission '${G}' is not supported by standalone provider`);
    k.permissions = D;
    const x = JSON.parse(JSON.stringify(D));
    return k.notify("permissionsChanged", {
      permissions: x
    }), x
  }, j = async (k, a) => {
    on(a, k);
    const E = {
      ...k.permissions
    };
    E.accountInteraction = await vr(a, k), k.permissions = E;
    const D = JSON.parse(JSON.stringify(E));
    return k.notify("permissionsChanged", {
      permissions: D
    }), D
  }, y = async (k, a) => {
    var E;
    k.permissions = {}, await ((E = k.subscriptionController) === null || E === void 0 ? void 0 : E.unsubscribeFromAllContracts()), k.notify("permissionsChanged", {
      permissions: {}
    })
  }, v = async (k, a) => {
    lt(a), $t(a, k);
    const {
      address: E,
      subscriptions: D
    } = a.params;
    q(a, a.params, "address"), cn(a, a.params, "subscriptions");
    let x;
    try {
      x = i.default.nekoton.repackAddress(E)
    } catch (G) {
      throw Q(a, G.toString())
    }
    try {
      return await k.subscriptionController.subscribeToContract(x, D)
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, b = async (k, a) => {
    lt(a), $t(a, k);
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
    await k.subscriptionController.unsubscribeFromContract(D)
  }, F = async (k, a) => {
    var E;
    await ((E = k.subscriptionController) === null || E === void 0 ? void 0 : E.unsubscribeFromAllContracts())
  }, K = async (k, a) => {
    var E, D;
    const x = (E = k.connectionController) === null || E === void 0 ? void 0 : E.initializedTransport,
      G = n.VERSION;
    return {
      version: G,
      numericVersion: (0, o.convertVersionToInt32)(G),
      networkId: x != null ? x.id : 0,
      selectedConnection: x != null ? x.group : "",
      supportedPermissions: [...n.SUPPORTED_PERMISSIONS],
      permissions: JSON.parse(JSON.stringify(k.permissions)),
      subscriptions: ((D = k.subscriptionController) === null || D === void 0 ? void 0 : D.subscriptionStates) || {}
    }
  }, B = async (k, a) => {
    lt(a), $t(a, k);
    const {
      address: E
    } = a.params;
    q(a, a.params, "address");
    const {
      connectionController: D
    } = k;
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
  }, l = async (k, a) => {
    lt(a), $t(a, k);
    const {
      state: E,
      masterchain: D,
      timestamp: x
    } = a.params;
    ni(a, a.params, "state"), We(a, a.params, "masterchain"), ln(a, a.params, "timestamp");
    const {
      connectionController: G
    } = k;
    try {
      const rt = await G.use(({
          data: {
            transport: ft
          }
        }) => ft.getBlockchainConfig()),
        Z = x ?? ~~(k.clock.nowMs / 1e3);
      return i.default.nekoton.computeStorageFee(rt, E.boc, Z, D || !1)
    } catch (rt) {
      throw Q(a, rt.toString())
    }
  }, d = async (k, a) => {
    lt(a), $t(a, k);
    const {
      codeHash: E,
      limit: D,
      continuation: x
    } = a.params;
    q(a, a.params, "codeHash"), ln(a, a.params, "limit"), le(a, a.params, "continuation");
    const {
      connectionController: G
    } = k;
    try {
      return G.use(({
        data: {
          transport: rt
        }
      }) => rt.getAccountsByCodeHash(E, D || 50, x))
    } catch (rt) {
      throw Q(a, rt.toString())
    }
  }, g = async (k, a) => {
    lt(a), $t(a, k);
    const {
      address: E,
      continuation: D,
      limit: x
    } = a.params;
    q(a, a.params, "address"), oe(a, a.params, "continuation", ti), ln(a, a.params, "limit");
    const {
      connectionController: G
    } = k;
    try {
      return G.use(({
        data: {
          transport: rt
        }
      }) => rt.getTransactions(E, D == null ? void 0 : D.lt, x || 50))
    } catch (rt) {
      throw Q(a, rt.toString())
    }
  }, P = async (k, a) => {
    lt(a), $t(a, k);
    const {
      hash: E
    } = a.params;
    q(a, a.params, "hash");
    const {
      connectionController: D
    } = k;
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
  }, T = async (k, a) => {
    lt(a), $t(a, k);
    const {
      inMessageHash: E
    } = a.params;
    oe(a, a.params, "inMessageHash", q);
    const {
      connectionController: D
    } = k;
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
  }, O = async (k, a) => {
    lt(a);
    const {
      address: E,
      cachedState: D,
      responsible: x,
      functionCall: G,
      withSignatureId: rt
    } = a.params;
    q(a, a.params, "address"), oe(a, a.params, "cachedState", zn), We(a, a.params, "responsible"), Re(a, a.params, "functionCall"), un(a, a.params, "withSignatureId");
    let Z = D;
    if (Z == null && ($t(a, k), Z = await k.connectionController.use(async ({
        data: {
          transport: St
        }
      }) => St.getFullContractState(E))), Z == null) throw Q(a, "Account not found");
    if (!Z.isDeployed || Z.lastTransactionId == null) throw Q(a, "Account is not deployed");
    const ft = await ce(a, k, rt);
    try {
      const {
        output: St,
        code: kt
      } = i.default.nekoton.runLocal(k.clock, Z.boc, G.abi, G.method, G.params, x || !1, ft);
      return {
        output: St,
        code: kt
      }
    } catch (St) {
      throw Q(a, St.toString())
    }
  }, N = async (k, a) => {
    lt(a), $t(a, k);
    const {
      address: E,
      cachedState: D,
      stateInit: x,
      payload: G,
      executorParams: rt,
      messageHeader: Z
    } = a.params;
    q(a, a.params, "address"), oe(a, a.params, "cachedState", zn), le(a, a.params, "stateInit"), yr(a, a.params, "payload"), cn(a, a.params, "executorParams"), he(a, a.params, "messageHeader");
    const {
      clock: ft,
      connectionController: St
    } = k;
    let kt;
    try {
      kt = i.default.nekoton.repackAddress(E)
    } catch (gt) {
      throw Q(a, gt.toString())
    }
    const jt = ~~(ft.nowMs / 1e3),
      Qt = 60;
    let Ot;
    if (Z.type === "external")
      if (G == null || typeof G == "string") Ot = i.default.nekoton.createRawExternalMessage(kt, x, G, jt + Qt).boc;
      else if (Z.withoutSignature === !0) Ot = i.default.nekoton.createExternalMessageWithoutSignature(ft, kt, G.abi, G.method, x, G.params, Qt).boc;
    else {
      const gt = i.default.nekoton.createExternalMessage(ft, kt, G.abi, G.method, x, G.params, Z.publicKey, Qt);
      try {
        if ((rt == null ? void 0 : rt.disableSignatureCheck) === !0) Ot = gt.signFake().boc;
        else {
          Ie(a, k);
          const mt = await ce(a, k),
            {
              keystore: yt
            } = k,
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
      Ot = i.default.nekoton.encodeInternalMessage(Z.sender, kt, Z.bounce, x, gt, Z.amount)
    } else throw Q(a, "Unknown message type");
    try {
      const [gt, mt, yt] = await St.use(({
        data: {
          transport: It
        }
      }) => Promise.all([D ?? It.getFullContractState(kt), It.getBlockchainConfig(), It.getNetworkDescription()])), Lt = i.default.nekoton.makeFullAccountBoc(gt == null ? void 0 : gt.boc), pt = rt == null ? void 0 : rt.overrideBalance, Dt = i.default.nekoton.executeLocal(mt, Lt, Ot, jt, (rt == null ? void 0 : rt.disableSignatureCheck) === !0, pt != null ? pt.toString() : void 0, yt.globalId);
      if (Dt.exitCode != null) throw new Error(`Contract did not accept the message. Exit code: ${Dt.exitCode}`);
      const zt = Dt,
        Le = zt.transaction,
        Kt = i.default.nekoton.parseFullAccountBoc(zt.account);
      let Bt;
      try {
        if (typeof G == "object" && typeof G != null) {
          const It = i.default.nekoton.decodeTransaction(zt.transaction, G.abi, G.method);
          Bt = It == null ? void 0 : It.output
        }
      } catch {}
      return {
        transaction: Le,
        newState: Kt,
        output: Bt
      }
    } catch (gt) {
      throw Q(a, gt.toString())
    }
  }, S = async (k, a) => {
    lt(a);
    const {
      tvc: E,
      abi: D,
      workchain: x,
      publicKey: G,
      initParams: rt
    } = a.params;
    q(a, a.params, "tvc"), q(a, a.params, "abi"), ln(a, a.params, "workchain"), le(a, a.params, "publicKey");
    try {
      return i.default.nekoton.getExpectedAddress(E, D, x || 0, G, rt)
    } catch (Z) {
      throw Q(a, Z.toString())
    }
  }, M = async (k, a) => {
    lt(a);
    const {
      address: E,
      abi: D,
      cachedState: x,
      allowPartial: G
    } = a.params;
    q(a, a.params, "address"), q(a, a.params, "abi"), oe(a, a.params, "cachedState", zn), ge(a, a.params, "allowPartial");
    let rt;
    try {
      rt = i.default.nekoton.repackAddress(E)
    } catch (ft) {
      throw Q(a, ft.toString())
    }
    let Z = x;
    if (Z == null && ($t(a, k), Z = await k.connectionController.use(async ({
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
  }, $ = async (k, a) => {
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
  }, L = async (k, a) => {
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
  }, z = async (k, a) => {
    lt(a);
    const {
      structure: E,
      data: D,
      abiVersion: x
    } = a.params;
    xn(a, a.params, "structure"), oe(a, a.params, "abiVersion", q);
    try {
      return i.default.nekoton.packIntoCell(E, D, x)
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, et = async (k, a) => {
    lt(a);
    const {
      structure: E,
      boc: D,
      allowPartial: x,
      abiVersion: G
    } = a.params;
    xn(a, a.params, "structure"), q(a, a.params, "boc"), ge(a, a.params, "allowPartial"), oe(a, a.params, "abiVersion", q);
    try {
      return {
        data: i.default.nekoton.unpackFromCell(E, D, x, G)
      }
    } catch (rt) {
      throw Q(a, rt.toString())
    }
  }, nt = async (k, a) => {
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
  }, _t = async (k, a) => {
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
  }, vt = async (k, a) => {
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
  }, Pt = async (k, a) => {
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
  }, ut = async (k, a) => {
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
  }, ht = async (k, a) => {
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
  }, Rt = async (k, a) => {
    lt(a), Re(a, a, "params");
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
  }, De = async (k, a) => {
    lt(a);
    const {
      body: E,
      abi: D,
      method: x,
      internal: G
    } = a.params;
    q(a, a.params, "body"), q(a, a.params, "abi"), dn(a, a.params, "method"), ge(a, a.params, "internal");
    try {
      return i.default.nekoton.decodeInput(E, D, x, G) || null
    } catch (rt) {
      throw Q(a, rt.toString())
    }
  }, ze = async (k, a) => {
    lt(a);
    const {
      body: E,
      abi: D,
      method: x
    } = a.params;
    q(a, a.params, "body"), q(a, a.params, "abi"), dn(a, a.params, "method");
    try {
      return i.default.nekoton.decodeOutput(E, D, x) || null
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, Ue = async (k, a) => {
    lt(a);
    const {
      body: E,
      abi: D,
      event: x
    } = a.params;
    q(a, a.params, "body"), q(a, a.params, "abi"), dn(a, a.params, "event");
    try {
      return i.default.nekoton.decodeEvent(E, D, x) || null
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, qt = async (k, a) => {
    lt(a);
    const {
      transaction: E,
      abi: D,
      method: x
    } = a.params;
    q(a, a.params, "abi"), dn(a, a.params, "method");
    try {
      return i.default.nekoton.decodeTransaction(E, D, x) || null
    } catch (G) {
      throw Q(a, G.toString())
    }
  }, Ae = async (k, a) => {
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
  }, Vt = async (k, a) => {
    lt(a);
    const {
      publicKey: E,
      dataHash: D,
      signature: x,
      withSignatureId: G
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "dataHash"), q(a, a.params, "signature"), un(a, a.params, "withSignatureId");
    const rt = await ce(a, k, G);
    try {
      return {
        isValid: i.default.nekoton.verifySignature(E, D, x, rt)
      }
    } catch (Z) {
      throw Q(a, Z.toString())
    }
  }, Nt = async (k, a) => {
    lt(a), $t(a, k);
    const {
      recipient: E,
      stateInit: D,
      payload: x,
      local: G,
      executorParams: rt
    } = a.params;
    q(a, a.params, "recipient"), le(a, a.params, "stateInit"), yr(a, a.params, "payload"), We(a, a.params, "local"), cn(a, a.params, "executorParams");
    let Z;
    try {
      Z = i.default.nekoton.repackAddress(E)
    } catch (pt) {
      throw Q(a, pt.toString())
    }
    const {
      clock: ft,
      subscriptionController: St,
      properties: kt
    } = k, jt = pt => {
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
      const pt = jt(60),
        Dt = await St.sendMessageLocally(Z, pt, rt);
      return Qt(Dt)
    }
    let Ot = kt.message.timeout;
    for (let pt = 0; pt < kt.message.retryCount; ++pt) {
      const Dt = jt(Ot),
        zt = await St.sendMessage(Z, Dt);
      if (zt == null) {
        Ot *= kt.message.timeoutGrowFactor;
        continue
      }
      return Qt(zt)
    }
    const gt = "Message expired",
      mt = jt(60),
      yt = await St.sendMessageLocally(Z, mt).catch(pt => {
        throw Q(a, `${gt}. ${pt.toString()}`)
      }),
      Lt = yt.exitCode != null ? `. Possible exit code: ${yt.exitCode}` : "";
    throw Q(a, `${gt}${Lt}`)
  }, At = async (k, a) => {
    Ie(a, k), lt(a);
    const {
      publicKey: E,
      data: D,
      withSignatureId: x
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "data"), un(a, a.params, "withSignatureId");
    const G = await ce(a, k, x),
      {
        keystore: rt
      } = k,
      Z = await rt.getSigner(E);
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
  }, Js = async (k, a) => {
    Ie(a, k), lt(a);
    const {
      publicKey: E,
      data: D,
      withSignatureId: x
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "data"), un(a, a.params, "withSignatureId");
    const G = await ce(a, k, x),
      {
        keystore: rt
      } = k,
      Z = await rt.getSigner(E);
    if (Z == null) throw Q(a, "Signer not found for public key");
    try {
      return await Z.sign(D, G).then(i.default.nekoton.extendSignature)
    } catch (ft) {
      throw Q(a, ft.toString())
    }
  }, Xs = async (k, a) => {
    Ie(a, k), on(a, k), $t(a, k), lt(a);
    const {
      sender: E,
      recipient: D,
      amount: x,
      bounce: G,
      payload: rt,
      stateInit: Z
    } = a.params;
    q(a, a.params, "sender"), q(a, a.params, "recipient"), q(a, a.params, "amount"), ge(a, a.params, "bounce"), oe(a, a.params, "payload", Re), le(a, a.params, "stateInit");
    const ft = await ce(a, k),
      {
        clock: St,
        properties: kt,
        subscriptionController: jt,
        connectionController: Qt,
        keystore: Ot,
        accountsStorage: gt
      } = k;
    let mt, yt, Lt;
    try {
      mt = i.default.nekoton.repackAddress(E), yt = i.default.nekoton.repackAddress(D), Lt = await gt.getAccount(mt).then(se => {
        if (se != null) return se;
        throw new Error("Sender not found")
      })
    } catch (se) {
      throw Q(a, se.toString())
    }
    const pt = async se => {
      try {
        return Lt.prepareMessage({
          recipient: yt,
          amount: x,
          bounce: G,
          payload: rt,
          stateInit: Z,
          timeout: ~~se,
          signatureId: ft
        }, new h.AccountsStorageContext(St, Qt, i.default.nekoton, Ot))
      } catch (Un) {
        throw Q(a, Un.toString())
      }
    };
    let Dt = kt.message.timeout;
    const zt = kt.message.retryTransfers !== !1 ? kt.message.retryCount : 1;
    for (let se = 0; se < zt; ++se) {
      const Un = await pt(Dt),
        Ar = await jt.sendMessage(mt, Un);
      if (Ar == null) {
        Dt *= kt.message.timeoutGrowFactor;
        continue
      }
      return {
        transaction: Ar
      }
    }
    const Le = "Message expired",
      Kt = await pt(60),
      Bt = await jt.sendMessageLocally(mt, Kt).catch(se => {
        throw Q(a, `${Le}. ${se.toString()}`)
      }),
      It = Bt.exitCode != null ? `. Possible exit code: ${Bt.exitCode}` : "";
    throw Q(a, `${Le}${It}`)
  }, Ys = async (k, a) => {
    Ie(a, k), on(a, k), lt(a), $t(a, k);
    const {
      sender: E,
      recipient: D,
      amount: x,
      bounce: G,
      payload: rt,
      stateInit: Z
    } = a.params;
    q(a, a.params, "sender"), q(a, a.params, "recipient"), q(a, a.params, "amount"), ge(a, a.params, "bounce"), oe(a, a.params, "payload", Re), le(a, a.params, "stateInit");
    const ft = await ce(a, k),
      {
        clock: St,
        subscriptionController: kt,
        connectionController: jt,
        keystore: Qt,
        accountsStorage: Ot,
        notify: gt
      } = k;
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
        payload: rt,
        stateInit: Z,
        timeout: 60,
        signatureId: ft
      }, new h.AccountsStorageContext(St, jt, i.default.nekoton, Qt))
    } catch (pt) {
      throw Q(a, pt.toString())
    }
    return kt.sendMessage(mt, Lt).then(pt => {
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
  }, Zs = async (k, a) => {
    Ie(a, k), lt(a), $t(a, k);
    const {
      publicKey: E,
      recipient: D,
      stateInit: x,
      payload: G,
      local: rt,
      executorParams: Z
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "recipient"), le(a, a.params, "stateInit"), Re(a, a.params, "payload"), We(a, a.params, "local"), cn(a, a.params, "executorParams");
    const ft = await ce(a, k);
    let St;
    try {
      St = i.default.nekoton.repackAddress(D)
    } catch (Kt) {
      throw Q(a, Kt.toString())
    }
    const {
      clock: kt,
      subscriptionController: jt,
      keystore: Qt,
      properties: Ot
    } = k, gt = await Qt.getSigner(E);
    if (gt == null) throw Q(a, "Signer not found for public key");
    const mt = async Kt => {
      let Bt;
      try {
        Bt = i.default.nekoton.createExternalMessage(kt, St, G.abi, G.method, x, G.params, E, ~~Kt)
      } catch (It) {
        throw Q(a, It.toString())
      }
      try {
        const It = await gt.sign(Bt.hash, ft);
        return Bt.sign(It)
      } catch (It) {
        throw Q(a, It.toString())
      } finally {
        Bt.free()
      }
    }, yt = Kt => {
      let Bt;
      try {
        const It = i.default.nekoton.decodeTransaction(Kt, G.abi, G.method);
        Bt = It == null ? void 0 : It.output
      } catch {}
      return {
        transaction: Kt,
        output: Bt
      }
    };
    if (rt === !0) {
      const Kt = await mt(60),
        Bt = await jt.sendMessageLocally(St, Kt, Z);
      return yt(Bt)
    }
    let Lt = Ot.message.timeout;
    for (let Kt = 0; Kt < Ot.message.retryCount; ++Kt) {
      const Bt = await mt(Lt),
        It = await jt.sendMessage(St, Bt);
      if (It == null) {
        Lt *= Ot.message.timeoutGrowFactor;
        continue
      }
      return yt(It)
    }
    const pt = "Message expired",
      Dt = await mt(60),
      zt = await jt.sendMessageLocally(St, Dt).catch(Kt => {
        throw Q(a, `${pt}. ${Kt.toString()}`)
      }),
      Le = zt.exitCode != null ? `. Possible exit code: ${zt.exitCode}` : "";
    throw Q(a, `${pt}${Le}`)
  }, qs = async (k, a) => {
    Ie(a, k), lt(a), $t(a, k);
    const {
      publicKey: E,
      recipient: D,
      stateInit: x,
      payload: G
    } = a.params;
    q(a, a.params, "publicKey"), q(a, a.params, "recipient"), le(a, a.params, "stateInit"), Re(a, a.params, "payload");
    const rt = await ce(a, k);
    let Z;
    try {
      Z = i.default.nekoton.repackAddress(D)
    } catch (yt) {
      throw Q(a, yt.toString())
    }
    const {
      clock: ft,
      subscriptionController: St,
      keystore: kt,
      properties: jt,
      notify: Qt
    } = k, Ot = await kt.getSigner(E);
    if (Ot == null) throw Q(a, "Signer not found for public key");
    let gt;
    try {
      gt = i.default.nekoton.createExternalMessage(ft, Z, G.abi, G.method, x, G.params, E, ~~jt.message.timeout)
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

  function Ie(k, a) {
    if (a.keystore == null) throw Q(k, "Keystore not found")
  }

  function on(k, a) {
    if (a.accountsStorage == null) throw Q(k, "AccountsStorage not found")
  }

  function $t(k, a) {
    if (a.connectionController == null || a.subscriptionController == null) throw Q(k, "Connection was not initialized")
  }
  async function ce(k, a, E) {
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
        throw Q(k, "Failed to fetch signature id")
      })
    }
  }

  function lt(k) {
    if (k.params == null || typeof k.params != "object") throw Q(k, "required params object")
  }

  function he(k, a, E) {
    if (typeof a[E] != "object") throw Q(k, `'${String(E)}' must be an object`)
  }

  function cn(k, a, E) {
    const D = a[E];
    if (D != null && typeof D != "object") throw Q(k, `'${String(E)}' must be an object if specified`)
  }

  function ge(k, a, E) {
    if (typeof a[E] != "boolean") throw Q(k, `'${String(E)}' must be a boolean`)
  }

  function We(k, a, E) {
    const D = a[E];
    if (D != null && typeof D != "boolean") throw Q(k, `'${String(E)}' must be a boolean if specified`)
  }

  function q(k, a, E) {
    const D = a[E];
    if (typeof D != "string" || D.length === 0) throw Q(k, `'${String(E)}' must be non-empty string`)
  }

  function le(k, a, E) {
    const D = a[E];
    if (D != null && (typeof D != "string" || D.length === 0)) throw Q(k, `'${String(E)}' must be a non-empty string if provided`)
  }

  function ln(k, a, E) {
    const D = a[E];
    if (D != null && typeof D != "number") throw Q(k, `'${String(E)}' must be a number if provider`)
  }

  function xn(k, a, E) {
    const D = a[E];
    if (!Array.isArray(D)) throw Q(k, `'${String(E)}' must be an array`)
  }

  function oe(k, a, E, D) {
    a[E] != null && D(k, a, E)
  }

  function un(k, a, E) {
    const D = a[E];
    if (D != null && typeof D != "boolean" && typeof D != "number") throw Q(k, `'${String(E)}' must be an optional boolean or number`)
  }

  function ti(k, a, E) {
    he(k, a, E);
    const D = a[E];
    q(k, D, "lt"), q(k, D, "hash")
  }

  function ei(k, a, E) {
    he(k, a, E);
    const D = a[E];
    ge(k, D, "isExact"), q(k, D, "lt"), le(k, D, "hash")
  }

  function ni(k, a, E) {
    he(k, a, E);
    const D = a[E];
    q(k, D, "boc")
  }

  function zn(k, a, E) {
    he(k, a, E);
    const D = a[E];
    q(k, D, "balance"), oe(k, D, "lastTransactionId", ei), ge(k, D, "isDeployed")
  }

  function Re(k, a, E) {
    he(k, a, E);
    const D = a[E];
    q(k, D, "abi"), q(k, D, "method"), he(k, D, "params")
  }

  function yr(k, a, E) {
    const D = a[E];
    if (!(typeof D == "string" || D == null))
      if (typeof D == "object") q(k, D, "abi"), q(k, D, "method"), he(k, D, "params");
      else throw Q(k, `'${String(E)}' must be a function all or optional string`)
  }

  function dn(k, a, E) {
    const D = a[E];
    if (D != null && typeof D != "string" && !Array.isArray(D)) throw Q(k, `'${String(E)}' must be a method name or an array of possible names`)
  }
  async function vr(k, a) {
    on(k, a), $t(k, a);
    const E = a.accountsStorage.defaultAccount;
    if (E == null) throw Q(k, "Default account not set in accounts storage");
    const D = await a.accountsStorage.getAccount(E);
    if (D == null) throw Q(k, "Default account not found");
    const x = await D.fetchPublicKey(new h.AccountsStorageContext(a.clock, a.connectionController, i.default.nekoton));
    return {
      address: D.address.toString(),
      publicKey: x,
      contractType: "unknown"
    }
  }
  const Q = (k, a, E) => new ri(2, `${k.method}: ${a}`, E);
  class ri extends Error {
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
      return (0, s.default)(this.serialize(), si, 2)
    }
  }
  const si = (k, a) => {
    if (a !== "[Circular]") return a
  }
})(Ps);
(function(n) {
  var t = tt && tt.__createBinding || (Object.create ? function(w, A, I, f) {
      f === void 0 && (f = I);
      var m = Object.getOwnPropertyDescriptor(A, I);
      (!m || ("get" in m ? !A.__esModule : m.writable || m.configurable)) && (m = {
        enumerable: !0,
        get: function() {
          return A[I]
        }
      }), Object.defineProperty(w, f, m)
    } : function(w, A, I, f) {
      f === void 0 && (f = I), w[f] = A[I]
    }),
    e = tt && tt.__setModuleDefault || (Object.create ? function(w, A) {
      Object.defineProperty(w, "default", {
        enumerable: !0,
        value: A
      })
    } : function(w, A) {
      w.default = A
    }),
    r = tt && tt.__importStar || function(w) {
      if (w && w.__esModule) return w;
      var A = {};
      if (w != null)
        for (var I in w) I !== "default" && Object.prototype.hasOwnProperty.call(w, I) && t(A, w, I);
      return e(A, w), A
    },
    s = tt && tt.__exportStar || function(w, A) {
      for (var I in w) I !== "default" && !Object.prototype.hasOwnProperty.call(A, I) && t(A, w, I)
    },
    i = tt && tt.__importDefault || function(w) {
      return w && w.__esModule ? w : {
        default: w
      }
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  const o = r(Ic),
    u = o,
    _ = i(Zt);
  let h = !1,
    p;
  const C = new Promise((w, A) => {
    p = {
      resolve: w,
      reject: A
    }
  });
  _.default.ensureNekotonLoaded = w => (h || (h = !0, (0, o.default)(w).then(p.resolve).catch(p.reject)), C), _.default.nekoton = u, _.default.fetch = fetch, _.default.debugLog = w => {}, s(Ps, n)
})(ir);
const Cl = () => {
    const n = hr();
    return {
      getDropItem: ({
        claimId: e,
        airdropName: r
      }) => {
        const s = new ir.Clock,
          i = new ve.ProviderRpcClient({
            fallback: () => ir.EverscaleStandaloneClient.create({
              clock: s,
              connection: {
                data: {
                  endpoint: "https://jrpc-ton.broxus.com/rpc"
                },
                id: Number(yi.MAINNET),
                type: "jrpc"
              }
            }),
            forceUseFallback: !0
          }),
          o = new gs.AirdropUI({
            account: n.tonConnectUI.value.connector.account,
            onStatusChange: n.tonConnectUI.value.connector.onStatusChange.bind(n.tonConnectUI.value.connector),
            sendTransaction: n.tonConnectUI.value.sendTransaction.bind(n.tonConnectUI.value)
          }, i, s),
          u = pe(o.getState());
        n.connectionRestoredPromise.then(() => {
          o.setAirdropName(r), o.setClaimId(e)
        });
        const _ = o.subscribe(w => {
          u.value = w
        });
        return {
          state: ae(() => u.value),
          destroy: () => {
            _(), o.destory()
          },
          claim: async () => await o.claim()
        }
      },
      AirdropStatus: ys
    }
  },
  Tl = {
    class: "pages-wallet-claim-drop-process page"
  },
  El = Xt({
    __name: "Process",
    props: {
      point: {},
      asset: {}
    },
    emits: ["close"],
    setup(n) {
      const t = n,
        e = ae(() => {
          if (!t.point.withdrawal) throw vi("Drop is not available");
          return t.point.withdrawal
        }),
        r = hr(),
        s = pe(null),
        {
          state: i
        } = ds(),
        {
          getDropItem: o,
          AirdropStatus: u
        } = Cl(),
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
      return Ai(() => ({
        state: h.value,
        walletLocalAndRemoteState: i.value,
        queueComp: s.value
      }), (w, A) => {
        var m;
        if (w.state.status === u.Loading || w.walletLocalAndRemoteState.status !== tr.CONNECTED || !w.queueComp) return;
        const I = new qn(.1),
          f = async () => {
            try {
              return await C(), hn(!0)
            } catch (j) {
              return fn(j)
            }
          };
        if (![u.NoAirdrop, u.NoUser, u.NoReward].includes(h.value.status))
          if (h.value.status === u.InQueue && ((m = h.value.claimData) == null ? void 0 : m.status) === "inQueue") w.queueComp.openWaiting({
            spotPosition: h.value.claimData.place
          });
          else if (h.value.status === u.CanClaim)
          if (h.value.claimLoading) w.queueComp.openTransferring({
            transferringPoints: e.value.amount.toNumber(),
            imageUrl: t.asset.imageUrl,
            symbol: t.asset.symbol
          });
          else {
            const j = A.state.status !== w.state.status;
            w.queueComp.openReadyToClaim({
              pointsToClaim: e.value.amount.toNumber(),
              imageUrl: t.asset.imageUrl,
              symbol: t.asset.symbol,
              fee: I,
              walletAddress: w.walletLocalAndRemoteState.address,
              tonBalance: w.walletLocalAndRemoteState.tonBalance,
              claimFn: f
            }, j)
          }
        else h.value.status === u.HasClaimed && (w.queueComp.openDone(), A.state.status !== u.HasClaimed && r.tonConnectUI.value.closeModal())
      }), rs(p), (w, A) => {
        const I = fs,
          f = bo;
        return st(), dt("div", Tl, [at(I), at(f, {
          ref_key: "queueComp",
          ref: s,
          onClose: A[0] || (A[0] = m => w.$emit("close"))
        }, null, 512)])
      }
    }
  }),
  Pl = Yt(El, [
    ["__scopeId", "data-v-9a5b2d84"]
  ]),
  Ml = {
    class: "pages-wallet-block-details-soon-notification-content"
  },
  Ol = {
    class: "title"
  },
  Dl = ["innerHTML"],
  Rl = Xt({
    __name: "Content",
    emits: ["close"],
    setup(n) {
      return (t, e) => {
        const r = ls,
          s = an;
        return st(), dt("div", Ml, [at(r, {
          name: "animations/MoneyWings",
          size: 116
        }), Y("div", Ol, ot(("t" in t ? t.t : U(ct))("wallet.drop.notification.content.title")), 1), Y("div", {
          class: "text",
          innerHTML: ("t" in t ? t.t : U(ct))("wallet.drop.notification.content.text")
        }, null, 8, Dl), at(s, {
          label: ("t" in t ? t.t : U(ct))("base.got_it"),
          fill: "",
          class: "button",
          size: U(we).LARGE,
          onClick: e[0] || (e[0] = i => t.$emit("close"))
        }, null, 8, ["label", "size"])])
      }
    }
  }),
  Ll = Yt(Rl, [
    ["__scopeId", "data-v-7ad98ffe"]
  ]),
  Fl = Xt({
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
      const t = as(n, "modelValue");
      return (e, r) => {
        const s = Ll,
          i = fr;
        return st(), Gt(i, {
          modelValue: t.value,
          "onUpdate:modelValue": r[1] || (r[1] = o => t.value = o),
          class: "pages-wallet-block-details-soon-notification-sheet"
        }, {
          default: xt(() => [at(s, {
            onClose: r[0] || (r[0] = o => t.value = !1)
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Nl = Yt(Fl, [
    ["__scopeId", "data-v-c6ce1d42"]
  ]),
  $l = {
    class: "pages-wallet-asset-points"
  },
  jl = Xt({
    __name: "AssetPoints",
    props: {
      points: {
        type: Array,
        required: !0
      }
    },
    setup(n) {
      const t = n,
        e = Ii(),
        r = w => w.withdrawal ? w.withdrawal.eligible ? {
          highlighted: !0,
          value: ct("wallet.drop.point_description.ready_to_transfer")
        } : {
          highlighted: !1,
          value: ct("wallet.drop.point_description.not_enough")
        } : void 0,
        s = w => ({
          id: w.currencyId,
          name: w.name,
          symbol: w.symbol,
          balance: w.balance,
          fiat: w.fiatValue,
          imageUrl: w.imageUrl,
          clickable: !!h(w),
          description: r(w)
        }),
        i = ae(() => t.points.map(w => ({
          asset: s(w),
          point: w
        }))),
        o = pe(),
        u = pe(),
        _ = pe(!1);

      function h(w) {
        if (["DOGS", "SOON"].includes(w.symbol)) return () => {
          w.withdrawal ? p.value.status !== tr.CONNECTED ? e.runConnectionFlow() : o.value = w : _.value = !0
        }
      }
      const p = ds().state,
        C = ae(() => {
          const w = o.value,
            A = w == null ? void 0 : w.withdrawal;
          if (p.value.status !== tr.CONNECTED || !A) return {
            type: "loading"
          };
          const I = s(w);
          if (!A.eligible) return {
            type: "not_enough_to_transfer",
            asset: I,
            amount: w.balance.value,
            minAmount: A.minAmount
          };
          const f = Si(A.eligibleWalletAddress),
            m = p.value.address;
          return wn.Address.parse(f).equals(wn.Address.parse(m)) ? {
            type: "ready_to_transfer",
            asset: I,
            amount: A.amount,
            walletAddress: f,
            tonBalance: p.value.tonBalance,
            claim: () => {
              u.value = {
                point: w,
                asset: I
              }, o.value = void 0
            }
          } : {
            type: "wrong_wallet_address",
            asset: I,
            eligibleWalletAddress: f
          }
        });
      return (w, A) => {
        const I = ta,
          f = Ra,
          m = Pl,
          j = Nl;
        return st(), dt("div", $l, [(st(!0), dt(Ke, null, pr(U(i), y => (st(), Gt(I, Pr({
          key: y.asset.id,
          ref_for: !0
        }, y.asset, {
          onClick: v => {
            var b;
            return (b = h(y.point)) == null ? void 0 : b()
          }
        }), null, 16, ["onClick"]))), 128)), at(f, {
          "model-value": !!U(o),
          state: U(C),
          "onUpdate:modelValue": A[0] || (A[0] = y => o.value = void 0)
        }, null, 8, ["model-value", "state"]), U(u) ? (st(), Gt(m, Pr({
          key: 0
        }, U(u), {
          onClose: A[1] || (A[1] = y => u.value = void 0)
        }), null, 16)) : me("", !0), at(j, {
          modelValue: U(_),
          "onUpdate:modelValue": A[2] || (A[2] = y => is(_) ? _.value = y : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  Xl = Yt(jl, [
    ["__scopeId", "data-v-d5a9f5bc"]
  ]);
export {
  Ri as _, hs as a, Xl as b, Ll as c, ta as d, Fi as u
};