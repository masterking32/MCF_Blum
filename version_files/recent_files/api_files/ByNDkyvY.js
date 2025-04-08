var bn = Object.defineProperty;
var vn = (n, e, t) => e in n ? bn(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var f = (n, e, t) => vn(n, typeof e != "symbol" ? e + "" : e, t);
import {
  d as Te,
  o as S,
  c as B,
  b as Fe,
  a as I,
  t as Z,
  _ as Wt,
  f as Be,
  M as ce,
  D as Ve,
  F as _e,
  q as Kt,
  E as ae,
  e as N,
  bw as kn,
  a7 as wn,
  h as Tn,
  aj as Ms,
  C as F,
  W as Us,
  bd as Ye,
  bn as Sn,
  G as jn,
  x as Ds,
  bS as An,
  ay as qn,
  c5 as tt,
  n as $n,
  ac as qe,
  j as pt,
  ai as Bt,
  b4 as Re,
  bP as En,
  b1 as ls,
  aL as xt,
  m as ms,
  y as ds,
  T as us,
  w as Cn,
  c6 as Bn,
  p as Pn,
  c7 as Rn,
  a0 as C,
  av as In,
  aw as Nn,
  bM as On,
  c8 as Ie,
  c9 as st,
  ca as Oe,
  bv as $,
  cb as we,
  cc as Fn,
  cd as xn,
  ce as hs,
  k as Gs,
  cf as j,
  cg as yt,
  ch as V,
  a9 as q,
  a4 as G,
  ci as W,
  cj as Ls,
  b2 as lt,
  bk as xe,
  bO as ne,
  ck as Js,
  cl as Mn,
  cm as Un,
  cn as Dn,
  aK as Gn,
  bb as Ln,
  a2 as He,
  c4 as Ws,
  co as mt,
  cp as Jn
} from "./CW1cwVvq.js";
import {
  _ as Wn
} from "./6rlnsuNA.js";
import {
  _ as Ks
} from "./eNHHQUma.js";
import {
  _ as Hs
} from "./DjHrKEy5.js";
import {
  _ as Kn
} from "./Car7eV2E.js";
import {
  _ as Hn
} from "./B9g5GJk8.js";
import {
  p as zn,
  r as Vn,
  s as Yn,
  d as Ue,
  e as Ht,
  f as ft,
  g as Qn
} from "./DVx0s6Yw.js";
import {
  d as zs
} from "./CkUcc54Y.js";
const Zn = {
    class: "memepad-jetton-action-controls-balance"
  },
  Xn = {
    class: "label"
  },
  er = Te({
    __name: "Balance",
    props: {
      balance: {}
    },
    setup(n) {
      return (e, t) => {
        const s = Wt;
        return S(), B("div", Zn, [Fe(s, {
          name: "wallet",
          class: "icon"
        }), I("span", Xn, Z(e.balance), 1)])
      }
    }
  }),
  ha = Be(er, [
    ["__scopeId", "data-v-5ed33e11"]
  ]),
  tr = {
    type: "button",
    class: "memepad-jetton-action-controls-fees"
  },
  sr = {
    key: 1,
    class: "fees"
  },
  nr = {
    class: "tooltip-detail"
  },
  rr = {
    key: 0
  },
  or = {
    class: "label"
  },
  ar = Te({
    __name: "Fees",
    props: {
      details: {},
      totalLabel: {},
      errorMessage: {}
    },
    setup(n) {
      return (e, t) => {
        const s = Wn,
          r = Wt,
          o = Ks;
        return S(), B("div", tr, [e.errorMessage ? (S(), ce(s, {
          key: 0,
          "error-message": e.errorMessage
        }, null, 8, ["error-message"])) : e.details && e.totalLabel ? (S(), B("div", sr, [e.details.length ? (S(), ce(o, {
          key: 0,
          "text-min-width": 155,
          alignment: N(kn).TOP
        }, {
          default: Ve(() => [Fe(r, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: Ve(() => [I("div", nr, [(S(!0), B(_e, null, Kt(e.details, (a, i) => (S(), B(_e, {
            key: a.label
          }, [I("span", null, Z(a.label), 1), i !== e.details.length - 1 ? (S(), B("br", rr)) : ae("", !0)], 64))), 128))])]),
          _: 1
        }, 8, ["alignment"])) : ae("", !0), I("span", or, Z(e.totalLabel), 1)])) : ae("", !0)])
      }
    }
  }),
  ya = Be(ar, [
    ["__scopeId", "data-v-1a2557c2"]
  ]),
  fa = Te({
    __name: "TopUpButton",
    props: {
      jettonAddress: {},
      jettonShortname: {},
      details: {},
      inputValue: {},
      valueBalance: {},
      source: {}
    },
    setup(n) {
      const e = n,
        t = wn(),
        s = Tn().$webApp;

      function r(...i) {
        return i.includes(s.platform)
      }
      const o = () => {
          t.memepad.memepadClickTopupButton({
            jettonShortname: e.jettonShortname,
            jettonAddress: e.jettonAddress,
            reason: e.details
          });
          const i = Ye().tonConnectUI.value,
            h = (i.walletInfo || i.wallet).universalLink;
          if (Sn(h)) {
            const g = "https://t.me/wallet/start?startapp=main-rc__a0646df863";
            r("ios", "weba", "android", "tdesktop", "webk") ? s.openTelegramLink(g) : s.openLink(g)
          } else s.openLink(h)
        },
        a = jn(() => t.memepad.memepadShowTopupButton({
          balance: e.valueBalance,
          value: e.inputValue,
          source: e.source
        }), 1e3).debouncedFunction;
      return Ms(() => {
        a()
      }), (i, c) => {
        const h = Ds;
        return S(), ce(h, {
          label: ("t" in i ? i.t : N(F))("memepad.top_up_wallet_button"),
          fill: "",
          size: N(Us).LARGE,
          onClick: o
        }, null, 8, ["label", "size"])
      }
    }
  }),
  ir = Te({
    __name: "StateButtonWrapper",
    props: {
      forceLoading: {
        type: Boolean,
        default: !1
      },
      buttonSize: {
        default: Us.LARGE
      }
    },
    setup(n) {
      const e = An().status,
        t = qn();
      return (s, r) => {
        const o = Ds,
          a = Hs;
        return N(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : N(tt)).DISCONNECTED ? (S(), ce(o, {
          key: 0,
          label: ("t" in s ? s.t : N(F))("wallet.connect.btn"),
          fill: "",
          size: s.buttonSize,
          onClick: r[0] || (r[0] = i => N(t).runConnectionFlow())
        }, null, 8, ["label", "size"])) : N(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : N(tt)).MUST_RECONNECT ? (S(), ce(o, {
          key: 1,
          label: ("t" in s ? s.t : N(F))("wallet.reconnect.btn"),
          fill: "",
          size: s.buttonSize,
          onClick: r[1] || (r[1] = i => N(t).runConnectionFlow())
        }, null, 8, ["label", "size"])) : N(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : N(tt)).LOADING || s.forceLoading ? (S(), ce(a, {
          key: 2,
          class: $n(["skeleton", `is-${s.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : N(e) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in s ? s.WALLET_LOCAL_AND_REMOTE_STATUS : N(tt)).CONNECTED ? qe(s.$slots, "default", {
          key: 3
        }, void 0, !0) : ae("", !0)
      }
    }
  }),
  ga = Be(ir, [
    ["__scopeId", "data-v-1e641cbd"]
  ]),
  cr = {
    class: "memepad-jetton-market-info"
  },
  pr = {
    key: 0,
    class: "top"
  },
  lr = {
    class: "data"
  },
  mr = {
    class: "left"
  },
  dr = {
    key: 0,
    class: "percent"
  },
  ur = {
    key: 1,
    class: "part"
  },
  hr = {
    key: 0,
    class: "market-details"
  },
  yr = {
    class: "holders-count"
  },
  fr = {
    key: 0
  },
  gr = {
    key: 1
  },
  _r = {
    class: "transactions-count"
  },
  br = {
    key: 0
  },
  vr = {
    key: 1
  },
  kr = {
    class: "market-cap"
  },
  wr = {
    class: "label"
  },
  Tr = {
    class: "value"
  },
  Sr = {
    key: 1
  },
  jr = {
    type: "button",
    class: "memepad-jetton-market-info-tooltip reset"
  },
  Ar = {
    class: "text"
  },
  qr = {
    class: "progress"
  },
  $r = {
    key: 1,
    class: "metrics"
  },
  Er = {
    class: "cap"
  },
  Cr = {
    class: "title"
  },
  Br = {
    key: 0,
    class: "value"
  },
  Pr = {
    class: "list"
  },
  Rr = {
    class: "title"
  },
  Ir = {
    key: 1,
    class: "value"
  },
  Nr = {
    key: 0,
    class: "prefix"
  },
  Or = {
    key: 1,
    class: "postfix"
  },
  Fr = Te({
    __name: "MarketInfo",
    props: {
      isReleased: {
        type: Boolean
      },
      percent: {},
      total: {},
      collected: {},
      marketDetails: {}
    },
    setup(n) {
      const e = n,
        t = pt(() => {
          var r;
          if (!((r = e.marketDetails) != null && r.listRows)) return [];
          const s = [];
          if ("holdersCount" in e.marketDetails.listRows) {
            const o = e.marketDetails.listRows.holdersCount,
              a = e.marketDetails.listRows.transactionsCount,
              i = e.marketDetails.listRows.transactionsVolume;
            s.push({
              title: F("memepad.jetton.holders"),
              value: o != null ? Bt(o, {
                accuracy: 0
              }) : o
            }), s.push({
              title: F("memepad.jetton.transactions"),
              value: a != null ? Bt(a, {
                accuracy: 0
              }) : a
            }), s.push({
              title: F("memepad.jetton.trading_volume"),
              value: i != null ? (() => {
                const {
                  value: c,
                  postfix: h
                } = Re(i);
                return {
                  prefix: "$",
                  value: c,
                  postfix: h
                }
              })() : i
            })
          } else if ("price" in e.marketDetails.listRows) {
            const o = e.marketDetails.listRows.price,
              a = e.marketDetails.listRows.maxSupply,
              i = e.marketDetails.listRows.availableSupply;
            s.push({
              title: F("memepad.jetton.price"),
              value: o != null ? {
                prefix: "$",
                value: En(o, {
                  accuracy: 10
                })
              } : o
            }), s.push({
              title: F("memepad.jetton.max_supply"),
              value: a != null ? Re(a) : a
            }), s.push({
              title: F("memepad.jetton.available"),
              value: i != null ? Bt(i, {
                accuracy: 0
              }) : i
            })
          }
          return s
        });
      return (s, r) => {
        var c, h;
        const o = Hs,
          a = Wt,
          i = Ks;
        return S(), B("div", cr, [s.isReleased ? ae("", !0) : (S(), B("div", pr, [I("div", lr, [I("div", mr, [s.total !== void 0 && s.collected !== void 0 || s.percent ? (S(), B(_e, {
          key: 1
        }, [s.percent !== void 0 ? (S(), B("span", dr, Z(`${s.percent.toFixed(2)}%`), 1)) : ae("", !0), s.total !== void 0 && s.collected !== void 0 ? (S(), B("span", ur, Z(`${("formatTon"in s?s.formatTon:N(ls))(s.collected,{trim:!0})}/${("formatTon"in s?s.formatTon:N(ls))(s.total,{trim:!0})} TON`), 1)) : ae("", !0)], 64)) : (S(), ce(o, {
          key: 0,
          class: "skeleton"
        }))]), (c = s.marketDetails) != null && c.statistics ? (S(), B("div", hr, [I("div", yr, [Fe(a, {
          name: "personal",
          class: "icon"
        }), s.marketDetails.statistics.holdersCount ? (S(), B("span", fr, Z(("formatCount" in s ? s.formatCount : N(Re))(s.marketDetails.statistics.holdersCount, {
          accuracy: 0
        }).full), 1)) : (S(), B("span", gr, "—"))]), I("div", _r, [Fe(a, {
          name: "transfer",
          class: "icon"
        }), s.marketDetails.statistics.transactionsCount ? (S(), B("span", br, Z(("formatCount" in s ? s.formatCount : N(Re))(s.marketDetails.statistics.transactionsCount, {
          accuracy: 0
        }).full), 1)) : (S(), B("span", vr, "—"))]), I("div", kr, [s.marketDetails.statistics.marketCap ? (S(), B(_e, {
          key: 0
        }, [I("span", wr, Z(("t" in s ? s.t : N(F))("memepad.jetton.stats.market_cap")), 1), I("span", Tr, Z(`$${("formatCount"in s?s.formatCount:N(Re))(s.marketDetails.statistics.marketCap).full}`), 1)], 64)) : (S(), B("span", Sr, "—"))])])) : (S(), ce(i, {
          key: 1,
          text: ("t" in s ? s.t : N(F))("memepad.jetton.market_info_tooltip.text"),
          "text-min-width": 155,
          "text-max-width": 155
        }, {
          default: Ve(() => [I("button", jr, [Fe(a, {
            name: "circle-help",
            class: "icon"
          }), I("span", Ar, Z(("t" in s ? s.t : N(F))("memepad.jetton.market_info_tooltip.label")), 1)])]),
          _: 1
        }, 8, ["text"]))]), I("div", qr, [I("div", {
          class: "line",
          style: xt({
            width: `${s.percent}%`
          })
        }, null, 4)])])), N(t).length ? (S(), B("div", $r, [I("div", Er, [I("div", Cr, Z(("t" in s ? s.t : N(F))("memepad.jetton.market_cap")), 1), (h = s.marketDetails) != null && h.marketCap ? (S(), B("div", Br, [r[0] || (r[0] = I("span", {
          class: "dollar"
        }, "$", -1)), I("span", null, Z(("formatCount" in s ? s.formatCount : N(Re))(s.marketDetails.marketCap).full), 1)])) : (S(), ce(o, {
          key: 1,
          class: "skeleton"
        }))]), I("div", Pr, [(S(!0), B(_e, null, Kt(N(t), g => (S(), B("div", {
          key: g.title,
          class: "item"
        }, [I("span", Rr, Z(g.title), 1), g.value === void 0 ? (S(), ce(o, {
          key: 0,
          class: "skeleton"
        })) : (S(), B("span", Ir, [typeof g.value == "string" ? (S(), B(_e, {
          key: 0
        }, [ms(Z(g.value), 1)], 64)) : g.value === null ? (S(), B(_e, {
          key: 1
        }, [ms(" — ")], 64)) : (S(), B(_e, {
          key: 2
        }, [g.value.prefix ? (S(), B("span", Nr, Z(g.value.prefix), 1)) : ae("", !0), I("span", null, Z(g.value.value), 1), g.value.postfix ? (S(), B("span", Or, Z(g.value.postfix), 1)) : ae("", !0)], 64))]))]))), 128))])])) : ae("", !0)])
      }
    }
  }),
  _a = Be(Fr, [
    ["__scopeId", "data-v-30b3cf79"]
  ]),
  xr = {
    class: "memepad-jetton-actions-controls-input"
  },
  Mr = Te({
    __name: "Input",
    props: {
      modelValue: {},
      postfix: {},
      modifier: {
        type: Function
      }
    },
    emits: ["update:modelValue", "blur"],
    setup(n, {
      expose: e,
      emit: t
    }) {
      const s = n,
        r = t,
        o = ds(),
        a = ds(),
        i = () => {
          Rn(() => {
            o.value && (o.value.style.width = "", o.value.style.width = o.value.scrollWidth + "px")
          })
        },
        c = pt({
          get: () => s.modelValue,
          set: v => {
            if (o.value && o.value.value !== s.modelValue) {
              const P = [...o.value.value].findIndex((U, x) => U !== s.modelValue[x]);
              P !== -1 && o.value.value[P] === "," && (v = v.slice(0, P) + "." + v.slice(P))
            }
            v = (s.modifier || (P => P))(v), o.value && o.value.value !== v && (o.value.value = v), r("update:modelValue", v)
          }
        });
      us(() => s.modelValue, i), us(() => o.value, i);
      const h = pt(() => {
          const v = window.innerWidth,
            T = s.modelValue.length + (s.postfix ? s.postfix.length : 0),
            P = Math.floor((v - 360) / 30) + 11,
            U = T - P,
            x = Math.min(Math.max(1 - U / T, 0), 1);
          return {
            fontSize: `${44*x}px`,
            lineHeight: `${52*x}px`
          }
        }),
        g = () => {
          var v;
          (v = a.value) == null || v.focus()
        };
      Ms(() => {
        g()
      }), e({
        focusOnInput: g
      });
      const E = () => {
        setTimeout(() => {
          var v;
          (v = o.value) == null || v.focus()
        }, 100)
      };
      return (v, T) => (S(), B("label", xr, [Cn(I("input", {
        ref_key: "inputRef",
        ref: o,
        "onUpdate:modelValue": T[0] || (T[0] = P => Pn(c) ? c.value = P : null),
        type: "text",
        inputmode: "decimal",
        style: xt(N(h)),
        onBlur: T[1] || (T[1] = P => r("blur"))
      }, null, 36), [
        [Bn, N(c)]
      ]), I("input", {
        ref_key: "hiddenInputRef",
        ref: a,
        type: "text",
        inputmode: "decimal",
        class: "hidden",
        onFocus: E
      }, null, 544), v.postfix ? (S(), B("span", {
        key: 0,
        class: "label",
        style: xt(N(h))
      }, Z(v.postfix), 5)) : ae("", !0)]))
    }
  }),
  ba = Be(Mr, [
    ["__scopeId", "data-v-af328d8a"]
  ]),
  va = n => new C(n.replaceAll(",", "") || "0"),
  Ur = {
    class: "memepad-jetton-actions-controls-presets"
  },
  Dr = ["onClick"],
  Gr = Te({
    __name: "Presets",
    props: In({
      tokenTicker: {},
      tokenBalance: {},
      jettonBalance: {},
      tab: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(n) {
      const e = n,
        t = Nn(n, "modelValue"),
        s = pt(() => {
          var c, h;
          const r = g => ({
              label: `${g} ${e.tokenTicker}`,
              value: new C(g)
            }),
            o = (g, E) => ({
              label: g === 100 ? "MAX" : `${g}%`,
              value: E ?? new C(0)
            }),
            a = (c = e.tokenBalance) == null ? void 0 : c.value,
            i = (h = e.jettonBalance) == null ? void 0 : h.value;
          return e.tab === On.BUY ? [r(1), r(5), r(10), o(100, a)] : [o(25, i == null ? void 0 : i.mul(.25)), o(50, i == null ? void 0 : i.mul(.5)), o(75, i == null ? void 0 : i.mul(.75)), o(100, i)]
        });
      return (r, o) => (S(), B("div", Ur, [(S(!0), B(_e, null, Kt(N(s), a => (S(), B("button", {
        key: a.label,
        type: "button",
        class: "item reset",
        onClick: i => t.value = a.value.toFixed()
      }, Z(a.label), 9, Dr))), 128))]))
    }
  }),
  ka = Be(Gr, [
    ["__scopeId", "data-v-a68cf1cc"]
  ]),
  Lr = {
    class: "top"
  },
  Jr = {
    class: "center"
  },
  Wr = {
    class: "right"
  },
  Kr = {
    class: "inner"
  },
  Hr = {
    class: "memepad-jetton-modal-bottom"
  },
  zr = {
    class: "action"
  },
  Vr = {
    key: 0,
    class: "helpers"
  },
  Yr = Te({
    __name: "Modal",
    setup(n) {
      return (e, t) => {
        const s = Kn,
          r = Hn;
        return S(), ce(r, {
          class: "memepad-jetton-modal"
        }, {
          default: Ve(() => [qe(e.$slots, "top", {}, () => [I("div", Lr, [t[0] || (t[0] = I("div", {
            class: "left"
          }, null, -1)), I("div", Jr, [qe(e.$slots, "top-center", {}, void 0, !0)]), I("div", Wr, [qe(e.$slots, "top-right", {}, void 0, !0)])])], !0), I("div", Kr, [qe(e.$slots, "default", {}, void 0, !0)]), Fe(s, {
            "ignore-tabs": "",
            "hide-space": ""
          }, {
            default: Ve(() => [I("div", Hr, [I("div", zr, [qe(e.$slots, "bottom-action", {}, void 0, !0)]), e.$slots["bottom-helpers"] ? (S(), B("div", Vr, [qe(e.$slots, "bottom-helpers", {}, void 0, !0)])) : ae("", !0)])]),
            _: 3
          })]),
          _: 3
        })
      }
    }
  }),
  wa = Be(Yr, [
    ["__scopeId", "data-v-cf321a94"]
  ]);
class le extends Error {
  constructor(e, t) {
    super(e, t), this.message = `${le.prefix} ${this.constructor.name}${this.info?": "+this.info:""}${e?`
`+e:""}`, Object.setPrototypeOf(this, le.prototype)
  }
  get info() {
    return ""
  }
}
le.prefix = "[TON_CONNECT_SDK_ERROR]";
class zt extends le {
  get info() {
    return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, zt.prototype)
  }
}
class Vt extends le {
  get info() {
    return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Vt.prototype)
  }
}
class gt extends le {
  get info() {
    return "User rejects the action in the wallet."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, gt.prototype)
  }
}
class _t extends le {
  get info() {
    return "Request to the wallet contains errors."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, _t.prototype)
  }
}
class bt extends le {
  get info() {
    return "App tries to send rpc request to the injected wallet while not connected."
  }
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, bt.prototype)
  }
}
class vt extends le {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, vt.prototype)
  }
}
Ie.UNKNOWN_ERROR + "", Ie.USER_REJECTS_ERROR + "", Ie.BAD_REQUEST_ERROR + "", Ie.UNKNOWN_APP_ERROR + "", Ie.MANIFEST_NOT_FOUND_ERROR + "", Ie.MANIFEST_CONTENT_ERROR + "";
st.UNKNOWN_ERROR + "", st.USER_REJECTS_ERROR + "", st.BAD_REQUEST_ERROR + "", st.UNKNOWN_APP_ERROR + "";
for (let n = 0; n <= 255; n++) {
  let e = n.toString(16);
  e.length < 2 && (e = "0" + e)
}
var z = {},
  kt, Yt = Oe && Oe.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(z, "__esModule", {
  value: !0
});
var Vs = z.Api = Ys = z.TonApiClient = z.ContentType = z.PoolImplementationType = z.TrustType = z.JettonVerificationType = z.BouncePhaseType = z.ComputeSkipReason = z.AccStatusChange = z.TransactionType = kt = z.AccountStatus = void 0,
  ys;
(function(n) {
  n.Nonexist = "nonexist", n.Uninit = "uninit", n.Active = "active", n.Frozen = "frozen"
})(ys || (kt = z.AccountStatus = ys = {}));
var fs;
(function(n) {
  n.TransOrd = "TransOrd", n.TransTickTock = "TransTickTock", n.TransSplitPrepare = "TransSplitPrepare", n.TransSplitInstall = "TransSplitInstall", n.TransMergePrepare = "TransMergePrepare", n.TransMergeInstall = "TransMergeInstall", n.TransStorage = "TransStorage"
})(fs || (z.TransactionType = fs = {}));
var gs;
(function(n) {
  n.AcstUnchanged = "acst_unchanged", n.AcstFrozen = "acst_frozen", n.AcstDeleted = "acst_deleted"
})(gs || (z.AccStatusChange = gs = {}));
var _s;
(function(n) {
  n.CskipNoState = "cskip_no_state", n.CskipBadState = "cskip_bad_state", n.CskipNoGas = "cskip_no_gas"
})(_s || (z.ComputeSkipReason = _s = {}));
var bs;
(function(n) {
  n.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", n.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", n.TrPhaseBounceOk = "TrPhaseBounceOk"
})(bs || (z.BouncePhaseType = bs = {}));
var vs;
(function(n) {
  n.Whitelist = "whitelist", n.Blacklist = "blacklist", n.None = "none"
})(vs || (z.JettonVerificationType = vs = {}));
var ks;
(function(n) {
  n.Whitelist = "whitelist", n.Graylist = "graylist", n.Blacklist = "blacklist", n.None = "none"
})(ks || (z.TrustType = ks = {}));
var ws;
(function(n) {
  n.Whales = "whales", n.Tf = "tf", n.LiquidTF = "liquidTF"
})(ws || (z.PoolImplementationType = ws = {}));
var ve;
(function(n) {
  n.Json = "application/json", n.FormData = "multipart/form-data", n.UrlEncoded = "application/x-www-form-urlencoded", n.Text = "text/plain"
})(ve || (z.ContentType = ve = {}));
const Mt = $,
  Qr = Yt(zn),
  Zr = Yt(Vn),
  Xr = Yt(Yn),
  eo = n => (0, Qr.default)(n, (e, t, s) => {
    if (typeof t == "number") {
      const r = s.source;
      return Number.isSafeInteger(t) || /[\.eE]/.test(r) ? t : BigInt(r)
    }
    return t
  }),
  Pt = n => (0, Xr.default)(n, (e, t) => typeof t == "bigint" ? (0, Zr.default)(t.toString()) : t);
class to {
  constructor(e = {}) {
    f(this, "baseUrl", "https://tonapi.io");
    f(this, "securityData", null);
    f(this, "securityWorker");
    f(this, "abortControllers", new Map);
    f(this, "customFetch", (...e) => fetch(...e));
    f(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    f(this, "setSecurityData", e => {
      this.securityData = e
    });
    f(this, "contentFormatters", {
      [ve.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? Pt(e) : e,
      [ve.Text]: e => e !== null && typeof e != "string" ? Pt(e) : e,
      [ve.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const r = e[s];
        return t.append(s, r instanceof Blob ? r : typeof r == "object" && r !== null ? Pt(r) : `${r}`), t
      }, new FormData),
      [ve.UrlEncoded]: e => this.toQueryString(e)
    });
    f(this, "createAbortSignal", e => {
      if (this.abortControllers.has(e)) {
        const s = this.abortControllers.get(e);
        return s ? s.signal : void 0
      }
      const t = new AbortController;
      return this.abortControllers.set(e, t), t.signal
    });
    f(this, "abortRequest", e => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e))
    });
    f(this, "request", async ({
      body: e,
      secure: t,
      path: s,
      type: r,
      query: o,
      format: a,
      baseUrl: i,
      cancelToken: c,
      ...h
    }) => {
      const g = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        E = this.mergeRequestParams(h, g),
        v = o && this.toQueryString(o),
        T = r ?? ve.Json,
        P = this.contentFormatters[T],
        U = a || E.format;
      return this.customFetch(`${i||this.baseUrl||""}${s}${v?`?${v}`:""}`, {
        ...E,
        headers: {
          ...E.headers || {},
          ...T && T !== ve.FormData ? {
            "Content-Type": T
          } : {}
        },
        signal: (c ? this.createAbortSignal(c) : E.signal) || null,
        body: typeof e > "u" || e === null ? null : P(e)
      }).then(async x => {
        const L = x.clone();
        L.data = null, L.error = null;
        const H = U === "json" ? "text" : U,
          X = H ? await x[H]().then(Y => (L.ok ? L.data = U === "json" ? eo(Y) : Y : L.error = Y, L)).catch(Y => (L.error = Y, L)) : L;
        if (c && this.abortControllers.delete(c), !x.ok) throw X;
        return X.data
      })
    });
    if (e.apiKey) {
      const t = e.baseApiParams || {};
      e.baseApiParams = {
        ...t,
        headers: {
          ...t.headers,
          Authorization: `Bearer ${e.apiKey}`
        }
      }
    }
    Object.assign(this, e)
  }
  encodeQueryParam(e, t) {
    return `${encodeURIComponent(e)}=${encodeURIComponent(typeof t=="number"?t:`${t}`)}`
  }
  addQueryParam(e, t) {
    return this.encodeQueryParam(t, e[t])
  }
  addArrayQueryParam(e, t) {
    return e[t].map(r => this.encodeQueryParam(t, r)).join("&")
  }
  toQueryString(e) {
    const t = e || {};
    return Object.keys(t).filter(r => typeof t[r] < "u").map(r => Array.isArray(t[r]) ? this.addArrayQueryParam(t, r) : this.addQueryParam(t, r)).join("&")
  }
  addQueryParams(e) {
    const t = this.toQueryString(e);
    return t ? `?${t}` : ""
  }
  mergeRequestParams(e, t) {
    return {
      ...this.baseApiParams,
      ...e,
      ...t || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...e.headers || {},
        ...t && t.headers || {}
      }
    }
  }
}
var Ys = z.TonApiClient = to;
const Qs = {
  "#/components/schemas/Error": {
    type: "object",
    required: ["error"],
    properties: {
      error: {
        type: "string"
      }
    }
  },
  "#/components/schemas/AccountAddress": {
    type: "object",
    required: ["address", "is_scam", "is_wallet"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      name: {
        type: "string"
      },
      is_scam: {
        type: "boolean"
      },
      icon: {
        type: "string"
      },
      is_wallet: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/BlockCurrencyCollection": {
    type: "object",
    required: ["grams", "other"],
    properties: {
      grams: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      other: {
        type: "array",
        items: {
          type: "object",
          required: ["id", "value"],
          properties: {
            id: {
              type: "integer",
              format: "int64"
            },
            value: {
              type: "string"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/BlockValueFlow": {
    type: "object",
    required: ["from_prev_blk", "to_next_blk", "imported", "exported", "fees_collected", "fees_imported", "recovered", "created", "minted"],
    properties: {
      from_prev_blk: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      to_next_blk: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      imported: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      exported: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      fees_collected: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      burned: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      fees_imported: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      recovered: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      created: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      },
      minted: {
        $ref: "#/components/schemas/BlockCurrencyCollection"
      }
    }
  },
  "#/components/schemas/ServiceStatus": {
    type: "object",
    required: ["indexing_latency", "rest_online", "last_known_masterchain_seqno"],
    properties: {
      rest_online: {
        type: "boolean",
        default: !0
      },
      indexing_latency: {
        type: "integer"
      },
      last_known_masterchain_seqno: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/ReducedBlock": {
    type: "object",
    required: ["workchain_id", "shard", "seqno", "tx_quantity", "utime", "shards_blocks", "parent"],
    properties: {
      workchain_id: {
        type: "integer",
        format: "int32"
      },
      shard: {
        type: "string"
      },
      seqno: {
        type: "integer",
        format: "int32"
      },
      master_ref: {
        type: "string"
      },
      tx_quantity: {
        type: "integer"
      },
      utime: {
        type: "integer",
        format: "int64"
      },
      shards_blocks: {
        type: "array",
        items: {
          type: "string"
        }
      },
      parent: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/BlockchainBlock": {
    type: "object",
    required: ["workchain_id", "shard", "seqno", "root_hash", "file_hash", "global_id", "value_flow", "version", "after_merge", "before_split", "after_split", "want_split", "want_merge", "key_block", "gen_utime", "start_lt", "end_lt", "vert_seqno", "gen_catchain_seqno", "min_ref_mc_seqno", "prev_key_block_seqno", "prev_refs", "in_msg_descr_length", "out_msg_descr_length", "rand_seed", "created_by", "tx_quantity"],
    properties: {
      tx_quantity: {
        type: "integer"
      },
      value_flow: {
        $ref: "#/components/schemas/BlockValueFlow"
      },
      workchain_id: {
        type: "integer",
        format: "int32"
      },
      shard: {
        type: "string"
      },
      seqno: {
        type: "integer",
        format: "int32"
      },
      root_hash: {
        type: "string"
      },
      file_hash: {
        type: "string"
      },
      global_id: {
        type: "integer",
        format: "int32"
      },
      version: {
        type: "integer",
        format: "int32"
      },
      after_merge: {
        type: "boolean"
      },
      before_split: {
        type: "boolean"
      },
      after_split: {
        type: "boolean"
      },
      want_split: {
        type: "boolean"
      },
      want_merge: {
        type: "boolean"
      },
      key_block: {
        type: "boolean"
      },
      gen_utime: {
        type: "integer",
        format: "int64"
      },
      start_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      end_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      vert_seqno: {
        type: "integer",
        format: "int32"
      },
      gen_catchain_seqno: {
        type: "integer",
        format: "int32"
      },
      min_ref_mc_seqno: {
        type: "integer",
        format: "int32"
      },
      prev_key_block_seqno: {
        type: "integer",
        format: "int32"
      },
      gen_software_version: {
        type: "integer",
        format: "int32"
      },
      gen_software_capabilities: {
        type: "integer",
        format: "int64"
      },
      master_ref: {
        type: "string"
      },
      prev_refs: {
        type: "array",
        items: {
          type: "string"
        }
      },
      in_msg_descr_length: {
        type: "integer",
        format: "int64"
      },
      out_msg_descr_length: {
        type: "integer",
        format: "int64"
      },
      rand_seed: {
        type: "string"
      },
      created_by: {
        type: "string"
      }
    }
  },
  "#/components/schemas/BlockchainBlocks": {
    type: "object",
    required: ["blocks"],
    properties: {
      blocks: {
        type: "array",
        items: {
          $ref: "#/components/schemas/BlockchainBlock"
        }
      }
    }
  },
  "#/components/schemas/ReducedBlocks": {
    type: "object",
    required: ["blocks"],
    properties: {
      blocks: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ReducedBlock"
        }
      }
    }
  },
  "#/components/schemas/BlockchainBlockShards": {
    type: "object",
    required: ["shards"],
    properties: {
      shards: {
        type: "array",
        items: {
          type: "object",
          required: ["last_known_block_id", "last_known_block"],
          properties: {
            last_known_block_id: {
              type: "string"
            },
            last_known_block: {
              $ref: "#/components/schemas/BlockchainBlock"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/AccountStatus": {
    type: "string",
    enum: ["nonexist", "uninit", "active", "frozen"]
  },
  "#/components/schemas/StateInit": {
    type: "object",
    required: ["boc", "interfaces"],
    properties: {
      boc: {
        type: "string",
        format: "cell"
      },
      interfaces: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/Message": {
    type: "object",
    required: ["msg_type", "created_lt", "ihr_disabled", "bounce", "bounced", "value", "fwd_fee", "ihr_fee", "import_fee", "created_at", "hash"],
    properties: {
      msg_type: {
        type: "string",
        enum: ["int_msg", "ext_in_msg", "ext_out_msg"]
      },
      created_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      ihr_disabled: {
        type: "boolean"
      },
      bounce: {
        type: "boolean"
      },
      bounced: {
        type: "boolean"
      },
      value: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      fwd_fee: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      ihr_fee: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      destination: {
        $ref: "#/components/schemas/AccountAddress"
      },
      source: {
        $ref: "#/components/schemas/AccountAddress"
      },
      import_fee: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      created_at: {
        type: "integer",
        format: "int64"
      },
      op_code: {
        type: "string"
      },
      init: {
        $ref: "#/components/schemas/StateInit"
      },
      hash: {
        type: "string"
      },
      raw_body: {
        type: "string",
        format: "cell"
      },
      decoded_op_name: {
        type: "string"
      },
      decoded_body: {}
    }
  },
  "#/components/schemas/TransactionType": {
    type: "string",
    enum: ["TransOrd", "TransTickTock", "TransSplitPrepare", "TransSplitInstall", "TransMergePrepare", "TransMergeInstall", "TransStorage"]
  },
  "#/components/schemas/AccStatusChange": {
    type: "string",
    enum: ["acst_unchanged", "acst_frozen", "acst_deleted"]
  },
  "#/components/schemas/ComputeSkipReason": {
    type: "string",
    enum: ["cskip_no_state", "cskip_bad_state", "cskip_no_gas"]
  },
  "#/components/schemas/BouncePhaseType": {
    type: "string",
    enum: ["TrPhaseBounceNegfunds", "TrPhaseBounceNofunds", "TrPhaseBounceOk"]
  },
  "#/components/schemas/ComputePhase": {
    type: "object",
    required: ["skipped"],
    properties: {
      skipped: {
        type: "boolean"
      },
      skip_reason: {
        $ref: "#/components/schemas/ComputeSkipReason"
      },
      success: {
        type: "boolean"
      },
      gas_fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      gas_used: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      vm_steps: {
        type: "integer",
        format: "int32"
      },
      exit_code: {
        type: "integer",
        format: "int32"
      },
      exit_code_description: {
        type: "string"
      }
    }
  },
  "#/components/schemas/StoragePhase": {
    type: "object",
    required: ["fees_collected", "status_change"],
    properties: {
      fees_collected: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      fees_due: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      status_change: {
        $ref: "#/components/schemas/AccStatusChange"
      }
    }
  },
  "#/components/schemas/CreditPhase": {
    type: "object",
    required: ["fees_collected", "credit"],
    properties: {
      fees_collected: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      credit: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      }
    }
  },
  "#/components/schemas/ActionPhase": {
    type: "object",
    required: ["success", "result_code", "total_actions", "skipped_actions", "fwd_fees", "total_fees"],
    properties: {
      success: {
        type: "boolean"
      },
      result_code: {
        type: "integer",
        format: "int32"
      },
      total_actions: {
        type: "integer",
        format: "int32"
      },
      skipped_actions: {
        type: "integer",
        format: "int32"
      },
      fwd_fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      total_fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      result_code_description: {
        type: "string"
      }
    }
  },
  "#/components/schemas/Transaction": {
    type: "object",
    required: ["hash", "lt", "account", "end_balance", "success", "utime", "orig_status", "end_status", "total_fees", "transaction_type", "state_update_old", "state_update_new", "out_msgs", "block", "aborted", "destroyed", "raw"],
    properties: {
      hash: {
        type: "string"
      },
      lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      account: {
        $ref: "#/components/schemas/AccountAddress"
      },
      success: {
        type: "boolean"
      },
      utime: {
        type: "integer",
        format: "int64"
      },
      orig_status: {
        $ref: "#/components/schemas/AccountStatus"
      },
      end_status: {
        $ref: "#/components/schemas/AccountStatus"
      },
      total_fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      end_balance: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      transaction_type: {
        $ref: "#/components/schemas/TransactionType"
      },
      state_update_old: {
        type: "string"
      },
      state_update_new: {
        type: "string"
      },
      in_msg: {
        $ref: "#/components/schemas/Message"
      },
      out_msgs: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Message"
        }
      },
      block: {
        type: "string"
      },
      prev_trans_hash: {
        type: "string"
      },
      prev_trans_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      compute_phase: {
        $ref: "#/components/schemas/ComputePhase"
      },
      storage_phase: {
        $ref: "#/components/schemas/StoragePhase"
      },
      credit_phase: {
        $ref: "#/components/schemas/CreditPhase"
      },
      action_phase: {
        $ref: "#/components/schemas/ActionPhase"
      },
      bounce_phase: {
        $ref: "#/components/schemas/BouncePhaseType"
      },
      aborted: {
        type: "boolean"
      },
      destroyed: {
        type: "boolean"
      },
      raw: {
        type: "string",
        format: "cell"
      }
    }
  },
  "#/components/schemas/Transactions": {
    type: "object",
    required: ["transactions"],
    properties: {
      transactions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Transaction"
        }
      }
    }
  },
  "#/components/schemas/ConfigProposalSetup": {
    type: "object",
    required: ["min_tot_rounds", "max_tot_rounds", "min_wins", "max_losses", "min_store_sec", "max_store_sec", "bit_price", "cell_price"],
    properties: {
      min_tot_rounds: {
        type: "integer"
      },
      max_tot_rounds: {
        type: "integer"
      },
      min_wins: {
        type: "integer"
      },
      max_losses: {
        type: "integer"
      },
      min_store_sec: {
        type: "integer",
        format: "int64"
      },
      max_store_sec: {
        type: "integer",
        format: "int64"
      },
      bit_price: {
        type: "integer",
        format: "int64"
      },
      cell_price: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/GasLimitPrices": {
    type: "object",
    required: ["gas_price", "gas_limit", "gas_credit", "block_gas_limit", "freeze_due_limit", "delete_due_limit"],
    properties: {
      special_gas_limit: {
        type: "integer",
        format: "int64"
      },
      flat_gas_limit: {
        type: "integer",
        format: "int64"
      },
      flat_gas_price: {
        type: "integer",
        format: "int64"
      },
      gas_price: {
        type: "integer",
        format: "int64"
      },
      gas_limit: {
        type: "integer",
        format: "int64"
      },
      gas_credit: {
        type: "integer",
        format: "int64"
      },
      block_gas_limit: {
        type: "integer",
        format: "int64"
      },
      freeze_due_limit: {
        type: "integer",
        format: "int64"
      },
      delete_due_limit: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/BlockParamLimits": {
    type: "object",
    required: ["underload", "soft_limit", "hard_limit"],
    properties: {
      underload: {
        type: "integer",
        format: "int64"
      },
      soft_limit: {
        type: "integer",
        format: "int64"
      },
      hard_limit: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/BlockLimits": {
    type: "object",
    required: ["bytes", "gas", "lt_delta"],
    properties: {
      bytes: {
        $ref: "#/components/schemas/BlockParamLimits"
      },
      gas: {
        $ref: "#/components/schemas/BlockParamLimits"
      },
      lt_delta: {
        $ref: "#/components/schemas/BlockParamLimits"
      }
    }
  },
  "#/components/schemas/MsgForwardPrices": {
    type: "object",
    required: ["lump_price", "bit_price", "cell_price", "ihr_price_factor", "first_frac", "next_frac"],
    properties: {
      lump_price: {
        type: "integer",
        format: "int64"
      },
      bit_price: {
        type: "integer",
        format: "int64"
      },
      cell_price: {
        type: "integer",
        format: "int64"
      },
      ihr_price_factor: {
        type: "integer",
        format: "int64"
      },
      first_frac: {
        type: "integer",
        format: "int64"
      },
      next_frac: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/WorkchainDescr": {
    type: "object",
    required: ["workchain", "enabled_since", "actual_min_split", "min_split", "max_split", "basic", "active", "accept_msgs", "flags", "zerostate_root_hash", "zerostate_file_hash", "version"],
    properties: {
      workchain: {
        type: "integer",
        format: "int"
      },
      enabled_since: {
        type: "integer",
        format: "int64"
      },
      actual_min_split: {
        type: "integer",
        format: "int"
      },
      min_split: {
        type: "integer",
        format: "int"
      },
      max_split: {
        type: "integer",
        format: "int"
      },
      basic: {
        type: "integer"
      },
      active: {
        type: "boolean"
      },
      accept_msgs: {
        type: "boolean"
      },
      flags: {
        type: "integer",
        format: "int"
      },
      zerostate_root_hash: {
        type: "string"
      },
      zerostate_file_hash: {
        type: "string"
      },
      version: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/MisbehaviourPunishmentConfig": {
    type: "object",
    required: ["default_flat_fine", "default_proportional_fine", "severity_flat_mult", "severity_proportional_mult", "unpunishable_interval", "long_interval", "long_flat_mult", "long_proportional_mult", "medium_interval", "medium_flat_mult", "medium_proportional_mult"],
    properties: {
      default_flat_fine: {
        type: "integer",
        format: "int64"
      },
      default_proportional_fine: {
        type: "integer",
        format: "int64"
      },
      severity_flat_mult: {
        type: "integer"
      },
      severity_proportional_mult: {
        type: "integer"
      },
      unpunishable_interval: {
        type: "integer"
      },
      long_interval: {
        type: "integer"
      },
      long_flat_mult: {
        type: "integer"
      },
      long_proportional_mult: {
        type: "integer"
      },
      medium_interval: {
        type: "integer"
      },
      medium_flat_mult: {
        type: "integer"
      },
      medium_proportional_mult: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/SizeLimitsConfig": {
    type: "object",
    required: ["max_msg_bits", "max_msg_cells", "max_library_cells", "max_vm_data_depth", "max_ext_msg_size", "max_ext_msg_depth"],
    properties: {
      max_msg_bits: {
        type: "integer",
        format: "int64"
      },
      max_msg_cells: {
        type: "integer",
        format: "int64"
      },
      max_library_cells: {
        type: "integer",
        format: "int64"
      },
      max_vm_data_depth: {
        type: "integer",
        format: "int"
      },
      max_ext_msg_size: {
        type: "integer",
        format: "int64"
      },
      max_ext_msg_depth: {
        type: "integer",
        format: "int"
      },
      max_acc_state_cells: {
        type: "integer",
        format: "int64"
      },
      max_acc_state_bits: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/ValidatorsSet": {
    type: "object",
    required: ["utime_since", "utime_until", "total", "main", "list"],
    properties: {
      utime_since: {
        type: "integer"
      },
      utime_until: {
        type: "integer"
      },
      total: {
        type: "integer"
      },
      main: {
        type: "integer"
      },
      total_weight: {
        type: "string"
      },
      list: {
        type: "array",
        items: {
          type: "object",
          required: ["public_key", "weight"],
          properties: {
            public_key: {
              type: "string"
            },
            weight: {
              type: "integer",
              format: "int64",
              "x-js-format": "bigint"
            },
            adnl_addr: {
              type: "string"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/Oracle": {
    type: "object",
    required: ["address", "secp_pubkey"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      secp_pubkey: {
        type: "string"
      }
    }
  },
  "#/components/schemas/OracleBridgeParams": {
    type: "object",
    required: ["bridge_addr", "oracle_multisig_address", "external_chain_address", "oracles"],
    properties: {
      bridge_addr: {
        type: "string",
        format: "address"
      },
      oracle_multisig_address: {
        type: "string",
        format: "address"
      },
      external_chain_address: {
        type: "string"
      },
      oracles: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Oracle"
        }
      }
    }
  },
  "#/components/schemas/JettonBridgePrices": {
    type: "object",
    required: ["bridge_burn_fee", "bridge_mint_fee", "wallet_min_tons_for_storage", "wallet_gas_consumption", "minter_min_tons_for_storage", "discover_gas_consumption"],
    properties: {
      bridge_burn_fee: {
        type: "integer",
        format: "int64"
      },
      bridge_mint_fee: {
        type: "integer",
        format: "int64"
      },
      wallet_min_tons_for_storage: {
        type: "integer",
        format: "int64"
      },
      wallet_gas_consumption: {
        type: "integer",
        format: "int64"
      },
      minter_min_tons_for_storage: {
        type: "integer",
        format: "int64"
      },
      discover_gas_consumption: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/JettonBridgeParams": {
    type: "object",
    required: ["bridge_address", "oracles_address", "state_flags", "oracles"],
    properties: {
      bridge_address: {
        type: "string",
        format: "address"
      },
      oracles_address: {
        type: "string",
        format: "address"
      },
      state_flags: {
        type: "integer"
      },
      burn_bridge_fee: {
        type: "integer",
        format: "int64"
      },
      oracles: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Oracle"
        }
      },
      external_chain_address: {
        type: "string"
      },
      prices: {
        $ref: "#/components/schemas/JettonBridgePrices"
      }
    }
  },
  "#/components/schemas/Validator": {
    type: "object",
    required: ["address", "adnl_address", "stake", "max_factor"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      adnl_address: {
        type: "string"
      },
      stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      max_factor: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/Validators": {
    type: "object",
    required: ["validators", "elect_at", "elect_close", "min_stake", "total_stake"],
    properties: {
      elect_at: {
        type: "integer",
        format: "int64"
      },
      elect_close: {
        type: "integer",
        format: "int64"
      },
      min_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      total_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      validators: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Validator"
        }
      }
    }
  },
  "#/components/schemas/AccountStorageInfo": {
    type: "object",
    required: ["used_cells", "used_bits", "used_public_cells", "last_paid", "due_payment"],
    properties: {
      used_cells: {
        type: "integer",
        format: "int64"
      },
      used_bits: {
        type: "integer",
        format: "int64"
      },
      used_public_cells: {
        type: "integer",
        format: "int64"
      },
      last_paid: {
        type: "integer",
        format: "int64"
      },
      due_payment: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      }
    }
  },
  "#/components/schemas/BlockchainRawAccount": {
    type: "object",
    required: ["address", "balance", "status", "last_transaction_lt", "storage"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      balance: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      extra_balance: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      },
      code: {
        type: "string",
        format: "cell"
      },
      data: {
        type: "string",
        format: "cell"
      },
      last_transaction_lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      last_transaction_hash: {
        type: "string"
      },
      frozen_hash: {
        type: "string"
      },
      status: {
        $ref: "#/components/schemas/AccountStatus"
      },
      storage: {
        $ref: "#/components/schemas/AccountStorageInfo"
      },
      libraries: {
        type: "array",
        items: {
          type: "object",
          required: ["public", "root"],
          properties: {
            public: {
              type: "boolean"
            },
            root: {
              type: "string",
              format: "cell"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/Account": {
    type: "object",
    required: ["address", "balance", "status", "last_activity", "get_methods", "is_wallet"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      balance: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      currencies_balance: {
        type: "object",
        additionalProperties: !0
      },
      last_activity: {
        type: "integer",
        format: "int64"
      },
      status: {
        $ref: "#/components/schemas/AccountStatus"
      },
      interfaces: {
        type: "array",
        items: {
          type: "string"
        }
      },
      name: {
        type: "string"
      },
      is_scam: {
        type: "boolean"
      },
      icon: {
        type: "string"
      },
      memo_required: {
        type: "boolean"
      },
      get_methods: {
        type: "array",
        items: {
          type: "string"
        }
      },
      is_suspended: {
        type: "boolean"
      },
      is_wallet: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/Accounts": {
    type: "object",
    required: ["accounts"],
    properties: {
      accounts: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Account"
        }
      }
    }
  },
  "#/components/schemas/GaslessConfig": {
    type: "object",
    required: ["gas_jettons", "relay_address"],
    properties: {
      relay_address: {
        type: "string",
        format: "address"
      },
      gas_jettons: {
        type: "array",
        items: {
          type: "object",
          required: ["master_id"],
          properties: {
            master_id: {
              type: "string",
              format: "address"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/SignRawMessage": {
    type: "object",
    required: ["address", "amount"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "string"
      },
      payload: {
        type: "string",
        format: "cell"
      },
      stateInit: {
        type: "string",
        format: "cell"
      }
    }
  },
  "#/components/schemas/SignRawParams": {
    type: "object",
    required: ["messages", "relay_address", "commission", "from", "valid_until"],
    properties: {
      relay_address: {
        type: "string",
        format: "address"
      },
      commission: {
        type: "string"
      },
      from: {
        type: "string",
        format: "address"
      },
      valid_until: {
        type: "integer",
        format: "int64"
      },
      messages: {
        type: "array",
        items: {
          $ref: "#/components/schemas/SignRawMessage"
        }
      }
    }
  },
  "#/components/schemas/MethodExecutionResult": {
    type: "object",
    required: ["success", "exit_code", "stack"],
    properties: {
      success: {
        type: "boolean"
      },
      exit_code: {
        type: "integer"
      },
      stack: {
        type: "array",
        items: {
          $ref: "#/components/schemas/TvmStackRecord"
        }
      },
      decoded: {}
    }
  },
  "#/components/schemas/TvmStackRecord": {
    type: "object",
    format: "tuple-item",
    required: ["type"],
    properties: {
      type: {
        type: "string",
        enum: ["cell", "num", "nan", "null", "tuple"]
      },
      cell: {
        type: "string",
        format: "cell"
      },
      slice: {
        type: "string",
        format: "cell"
      },
      num: {
        type: "string"
      },
      tuple: {
        type: "array",
        items: {
          $ref: "#/components/schemas/TvmStackRecord"
        }
      }
    }
  },
  "#/components/schemas/RawBlockchainConfig": {
    type: "object",
    required: ["config"],
    properties: {
      config: {
        type: "object",
        additionalProperties: !0
      }
    }
  },
  "#/components/schemas/BlockchainConfig": {
    type: "object",
    required: ["raw", "0", "1", "2", "4", "44"],
    properties: {
      0: {
        type: "string",
        format: "address"
      },
      1: {
        type: "string",
        format: "address"
      },
      2: {
        type: "string",
        format: "address"
      },
      3: {
        type: "string",
        format: "address"
      },
      4: {
        type: "string",
        format: "address"
      },
      5: {
        type: "object",
        required: ["fee_burn_nom", "fee_burn_denom"],
        properties: {
          blackhole_addr: {
            type: "string",
            format: "address"
          },
          fee_burn_nom: {
            type: "integer",
            format: "int64"
          },
          fee_burn_denom: {
            type: "integer",
            format: "int64"
          }
        }
      },
      6: {
        type: "object",
        required: ["mint_new_price", "mint_add_price"],
        properties: {
          mint_new_price: {
            type: "integer",
            format: "int64"
          },
          mint_add_price: {
            type: "integer",
            format: "int64"
          }
        }
      },
      7: {
        type: "object",
        required: ["currencies"],
        properties: {
          currencies: {
            type: "array",
            items: {
              type: "object",
              required: ["currency_id", "amount"],
              properties: {
                currency_id: {
                  type: "integer",
                  format: "int64"
                },
                amount: {
                  type: "string"
                }
              }
            }
          }
        }
      },
      8: {
        type: "object",
        required: ["version", "capabilities"],
        properties: {
          version: {
            type: "integer",
            format: "int64"
          },
          capabilities: {
            type: "integer",
            format: "int64"
          }
        }
      },
      9: {
        type: "object",
        required: ["mandatory_params"],
        properties: {
          mandatory_params: {
            type: "array",
            items: {
              type: "integer",
              format: "int32"
            }
          }
        }
      },
      10: {
        type: "object",
        required: ["critical_params"],
        properties: {
          critical_params: {
            type: "array",
            items: {
              type: "integer",
              format: "int32"
            }
          }
        }
      },
      11: {
        type: "object",
        required: ["normal_params", "critical_params"],
        properties: {
          normal_params: {
            $ref: "#/components/schemas/ConfigProposalSetup"
          },
          critical_params: {
            $ref: "#/components/schemas/ConfigProposalSetup"
          }
        }
      },
      12: {
        type: "object",
        required: ["workchains"],
        properties: {
          workchains: {
            type: "array",
            items: {
              $ref: "#/components/schemas/WorkchainDescr"
            }
          }
        }
      },
      13: {
        type: "object",
        required: ["deposit", "bit_price", "cell_price"],
        properties: {
          deposit: {
            type: "integer",
            format: "int64"
          },
          bit_price: {
            type: "integer",
            format: "int64"
          },
          cell_price: {
            type: "integer",
            format: "int64"
          }
        }
      },
      14: {
        type: "object",
        required: ["masterchain_block_fee", "basechain_block_fee"],
        properties: {
          masterchain_block_fee: {
            type: "integer",
            format: "int64"
          },
          basechain_block_fee: {
            type: "integer",
            format: "int64"
          }
        }
      },
      15: {
        type: "object",
        required: ["validators_elected_for", "elections_start_before", "elections_end_before", "stake_held_for"],
        properties: {
          validators_elected_for: {
            type: "integer",
            format: "int64"
          },
          elections_start_before: {
            type: "integer",
            format: "int64"
          },
          elections_end_before: {
            type: "integer",
            format: "int64"
          },
          stake_held_for: {
            type: "integer",
            format: "int64"
          }
        }
      },
      16: {
        type: "object",
        required: ["max_validators", "max_main_validators", "min_validators"],
        properties: {
          max_validators: {
            type: "integer"
          },
          max_main_validators: {
            type: "integer"
          },
          min_validators: {
            type: "integer"
          }
        }
      },
      17: {
        type: "object",
        required: ["min_stake", "max_stake", "min_total_stake", "max_stake_factor"],
        properties: {
          min_stake: {
            type: "string"
          },
          max_stake: {
            type: "string"
          },
          min_total_stake: {
            type: "string"
          },
          max_stake_factor: {
            type: "integer",
            format: "int64"
          }
        }
      },
      18: {
        type: "object",
        required: ["storage_prices"],
        properties: {
          storage_prices: {
            type: "array",
            items: {
              type: "object",
              required: ["utime_since", "bit_price_ps", "cell_price_ps", "mc_bit_price_ps", "mc_cell_price_ps"],
              properties: {
                utime_since: {
                  type: "integer",
                  format: "int64"
                },
                bit_price_ps: {
                  type: "integer",
                  format: "int64"
                },
                cell_price_ps: {
                  type: "integer",
                  format: "int64"
                },
                mc_bit_price_ps: {
                  type: "integer",
                  format: "int64"
                },
                mc_cell_price_ps: {
                  type: "integer",
                  format: "int64"
                }
              }
            }
          }
        }
      },
      20: {
        type: "object",
        required: ["gas_limits_prices"],
        properties: {
          gas_limits_prices: {
            $ref: "#/components/schemas/GasLimitPrices"
          }
        }
      },
      21: {
        type: "object",
        required: ["gas_limits_prices"],
        properties: {
          gas_limits_prices: {
            $ref: "#/components/schemas/GasLimitPrices"
          }
        }
      },
      22: {
        type: "object",
        required: ["block_limits"],
        properties: {
          block_limits: {
            $ref: "#/components/schemas/BlockLimits"
          }
        }
      },
      23: {
        type: "object",
        required: ["block_limits"],
        properties: {
          block_limits: {
            $ref: "#/components/schemas/BlockLimits"
          }
        }
      },
      24: {
        type: "object",
        required: ["msg_forward_prices"],
        properties: {
          msg_forward_prices: {
            $ref: "#/components/schemas/MsgForwardPrices"
          }
        }
      },
      25: {
        type: "object",
        required: ["msg_forward_prices"],
        properties: {
          msg_forward_prices: {
            $ref: "#/components/schemas/MsgForwardPrices"
          }
        }
      },
      28: {
        type: "object",
        required: ["mc_catchain_lifetime", "shard_catchain_lifetime", "shard_validators_lifetime", "shard_validators_num"],
        properties: {
          mc_catchain_lifetime: {
            type: "integer",
            format: "int64"
          },
          shard_catchain_lifetime: {
            type: "integer",
            format: "int64"
          },
          shard_validators_lifetime: {
            type: "integer",
            format: "int64"
          },
          shard_validators_num: {
            type: "integer",
            format: "int64"
          },
          flags: {
            type: "integer",
            format: "int"
          },
          shuffle_mc_validators: {
            type: "boolean"
          }
        }
      },
      29: {
        type: "object",
        required: ["round_candidates", "next_candidate_delay_ms", "consensus_timeout_ms", "fast_attempts", "attempt_duration", "catchain_max_deps", "max_block_bytes", "max_collated_bytes"],
        properties: {
          flags: {
            type: "integer",
            format: "int"
          },
          new_catchain_ids: {
            type: "boolean"
          },
          round_candidates: {
            type: "integer",
            format: "int64"
          },
          next_candidate_delay_ms: {
            type: "integer",
            format: "int64"
          },
          consensus_timeout_ms: {
            type: "integer",
            format: "int64"
          },
          fast_attempts: {
            type: "integer",
            format: "int64"
          },
          attempt_duration: {
            type: "integer",
            format: "int64"
          },
          catchain_max_deps: {
            type: "integer",
            format: "int64"
          },
          max_block_bytes: {
            type: "integer",
            format: "int64"
          },
          max_collated_bytes: {
            type: "integer",
            format: "int64"
          },
          proto_version: {
            type: "integer",
            format: "int64"
          },
          catchain_max_blocks_coeff: {
            type: "integer",
            format: "int64"
          }
        }
      },
      31: {
        type: "object",
        required: ["fundamental_smc_addr"],
        properties: {
          fundamental_smc_addr: {
            type: "array",
            items: {
              type: "string",
              format: "address"
            }
          }
        }
      },
      32: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      33: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      34: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      35: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      36: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      37: {
        $ref: "#/components/schemas/ValidatorsSet"
      },
      40: {
        type: "object",
        required: ["misbehaviour_punishment_config"],
        properties: {
          misbehaviour_punishment_config: {
            $ref: "#/components/schemas/MisbehaviourPunishmentConfig"
          }
        }
      },
      43: {
        type: "object",
        required: ["size_limits_config"],
        properties: {
          size_limits_config: {
            $ref: "#/components/schemas/SizeLimitsConfig"
          }
        }
      },
      44: {
        type: "object",
        required: ["accounts", "suspended_until"],
        properties: {
          accounts: {
            type: "array",
            items: {
              type: "string",
              format: "address"
            }
          },
          suspended_until: {
            type: "integer"
          }
        }
      },
      71: {
        type: "object",
        required: ["oracle_bridge_params"],
        properties: {
          oracle_bridge_params: {
            $ref: "#/components/schemas/OracleBridgeParams"
          }
        }
      },
      72: {
        type: "object",
        required: ["oracle_bridge_params"],
        properties: {
          oracle_bridge_params: {
            $ref: "#/components/schemas/OracleBridgeParams"
          }
        }
      },
      73: {
        type: "object",
        required: ["oracle_bridge_params"],
        properties: {
          oracle_bridge_params: {
            $ref: "#/components/schemas/OracleBridgeParams"
          }
        }
      },
      79: {
        type: "object",
        required: ["jetton_bridge_params"],
        properties: {
          jetton_bridge_params: {
            $ref: "#/components/schemas/JettonBridgeParams"
          }
        }
      },
      81: {
        type: "object",
        required: ["jetton_bridge_params"],
        properties: {
          jetton_bridge_params: {
            $ref: "#/components/schemas/JettonBridgeParams"
          }
        }
      },
      82: {
        type: "object",
        required: ["jetton_bridge_params"],
        properties: {
          jetton_bridge_params: {
            $ref: "#/components/schemas/JettonBridgeParams"
          }
        }
      },
      raw: {
        type: "string",
        format: "cell"
      }
    }
  },
  "#/components/schemas/DomainNames": {
    type: "object",
    required: ["domains"],
    properties: {
      domains: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/DomainBid": {
    type: "object",
    required: ["success", "value", "txTime", "bidder", "txHash"],
    properties: {
      success: {
        type: "boolean",
        default: !1
      },
      value: {
        type: "integer",
        format: "int64"
      },
      txTime: {
        type: "integer",
        format: "int64"
      },
      txHash: {
        type: "string"
      },
      bidder: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/DomainBids": {
    type: "object",
    required: ["data"],
    properties: {
      data: {
        type: "array",
        items: {
          $ref: "#/components/schemas/DomainBid"
        }
      }
    }
  },
  "#/components/schemas/JettonVerificationType": {
    type: "string",
    enum: ["whitelist", "blacklist", "none"]
  },
  "#/components/schemas/JettonPreview": {
    type: "object",
    required: ["address", "name", "symbol", "decimals", "verification", "image"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      name: {
        type: "string"
      },
      symbol: {
        type: "string"
      },
      decimals: {
        type: "integer"
      },
      image: {
        type: "string"
      },
      verification: {
        $ref: "#/components/schemas/JettonVerificationType"
      }
    }
  },
  "#/components/schemas/JettonBalance": {
    type: "object",
    required: ["balance", "wallet_address", "jetton"],
    properties: {
      balance: {
        type: "string"
      },
      price: {
        $ref: "#/components/schemas/TokenRates"
      },
      wallet_address: {
        $ref: "#/components/schemas/AccountAddress"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      },
      extensions: {
        type: "array",
        items: {
          type: "string"
        }
      },
      lock: {
        type: "object",
        required: ["amount", "till"],
        properties: {
          amount: {
            type: "string"
          },
          till: {
            type: "integer",
            format: "int64"
          }
        }
      }
    }
  },
  "#/components/schemas/JettonsBalances": {
    type: "object",
    required: ["balances"],
    properties: {
      balances: {
        type: "array",
        items: {
          $ref: "#/components/schemas/JettonBalance"
        }
      }
    }
  },
  "#/components/schemas/Price": {
    type: "object",
    required: ["value", "token_name"],
    properties: {
      value: {
        type: "string"
      },
      token_name: {
        type: "string"
      }
    }
  },
  "#/components/schemas/ImagePreview": {
    type: "object",
    required: ["resolution", "url"],
    properties: {
      resolution: {
        type: "string"
      },
      url: {
        type: "string"
      }
    }
  },
  "#/components/schemas/NftApprovedBy": {
    type: "array",
    items: {
      type: "string",
      enum: ["getgems", "tonkeeper", "ton.diamonds"]
    }
  },
  "#/components/schemas/TrustType": {
    type: "string",
    enum: ["whitelist", "graylist", "blacklist", "none"]
  },
  "#/components/schemas/Sale": {
    type: "object",
    required: ["address", "market", "price"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      market: {
        $ref: "#/components/schemas/AccountAddress"
      },
      owner: {
        $ref: "#/components/schemas/AccountAddress"
      },
      price: {
        $ref: "#/components/schemas/Price"
      }
    }
  },
  "#/components/schemas/NftItem": {
    type: "object",
    required: ["address", "index", "verified", "metadata", "approved_by", "trust"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      index: {
        type: "integer",
        format: "int64"
      },
      owner: {
        $ref: "#/components/schemas/AccountAddress"
      },
      collection: {
        type: "object",
        required: ["address", "name", "description"],
        properties: {
          address: {
            type: "string",
            format: "address"
          },
          name: {
            type: "string"
          },
          description: {
            type: "string"
          }
        }
      },
      verified: {
        type: "boolean"
      },
      metadata: {
        type: "object",
        additionalProperties: !0
      },
      sale: {
        $ref: "#/components/schemas/Sale"
      },
      previews: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ImagePreview"
        }
      },
      dns: {
        type: "string"
      },
      approved_by: {
        $ref: "#/components/schemas/NftApprovedBy"
      },
      include_cnft: {
        type: "boolean"
      },
      trust: {
        $ref: "#/components/schemas/TrustType"
      }
    }
  },
  "#/components/schemas/NftItems": {
    type: "object",
    required: ["nft_items"],
    properties: {
      nft_items: {
        type: "array",
        items: {
          $ref: "#/components/schemas/NftItem"
        }
      }
    }
  },
  "#/components/schemas/Multisigs": {
    type: "object",
    required: ["multisigs"],
    properties: {
      multisigs: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Multisig"
        }
      }
    }
  },
  "#/components/schemas/Multisig": {
    type: "object",
    required: ["address", "seqno", "threshold", "signers", "proposers", "orders"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      seqno: {
        type: "integer",
        format: "int64"
      },
      threshold: {
        type: "integer",
        format: "int32"
      },
      signers: {
        type: "array",
        items: {
          type: "string",
          format: "address"
        }
      },
      proposers: {
        type: "array",
        items: {
          type: "string",
          format: "address"
        }
      },
      orders: {
        type: "array",
        items: {
          $ref: "#/components/schemas/MultisigOrder"
        }
      }
    }
  },
  "#/components/schemas/MultisigOrder": {
    type: "object",
    required: ["address", "order_seqno", "threshold", "sent_for_execution", "signers", "approvals_num", "expiration_date", "risk"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      order_seqno: {
        type: "integer",
        format: "int64"
      },
      threshold: {
        type: "integer",
        format: "int32"
      },
      sent_for_execution: {
        type: "boolean"
      },
      signers: {
        type: "array",
        items: {
          type: "string",
          format: "address"
        }
      },
      approvals_num: {
        type: "integer",
        format: "int32"
      },
      expiration_date: {
        type: "integer",
        format: "int64"
      },
      risk: {
        $ref: "#/components/schemas/Risk"
      }
    }
  },
  "#/components/schemas/Refund": {
    type: "object",
    required: ["type", "origin"],
    properties: {
      type: {
        type: "string",
        enum: ["DNS.ton", "DNS.tg", "GetGems"]
      },
      origin: {
        type: "string"
      }
    }
  },
  "#/components/schemas/ValueFlow": {
    type: "object",
    required: ["account", "ton", "fees"],
    properties: {
      account: {
        $ref: "#/components/schemas/AccountAddress"
      },
      ton: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      fees: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      jettons: {
        type: "array",
        items: {
          type: "object",
          required: ["account", "quantity", "jetton"],
          properties: {
            account: {
              $ref: "#/components/schemas/AccountAddress"
            },
            jetton: {
              $ref: "#/components/schemas/JettonPreview"
            },
            quantity: {
              type: "integer",
              format: "int64",
              "x-js-format": "bigint"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/Action": {
    type: "object",
    required: ["type", "status", "simple_preview", "base_transactions"],
    properties: {
      type: {
        type: "string",
        enum: ["TonTransfer", "JettonTransfer", "JettonBurn", "JettonMint", "NftItemTransfer", "ContractDeploy", "Subscribe", "UnSubscribe", "AuctionBid", "NftPurchase", "DepositStake", "WithdrawStake", "WithdrawStakeRequest", "JettonSwap", "SmartContractExec", "ElectionsRecoverStake", "ElectionsDepositStake", "DomainRenew", "InscriptionTransfer", "InscriptionMint", "Unknown"]
      },
      status: {
        type: "string",
        enum: ["ok", "failed"]
      },
      TonTransfer: {
        $ref: "#/components/schemas/TonTransferAction"
      },
      ContractDeploy: {
        $ref: "#/components/schemas/ContractDeployAction"
      },
      JettonTransfer: {
        $ref: "#/components/schemas/JettonTransferAction"
      },
      JettonBurn: {
        $ref: "#/components/schemas/JettonBurnAction"
      },
      JettonMint: {
        $ref: "#/components/schemas/JettonMintAction"
      },
      NftItemTransfer: {
        $ref: "#/components/schemas/NftItemTransferAction"
      },
      Subscribe: {
        $ref: "#/components/schemas/SubscriptionAction"
      },
      UnSubscribe: {
        $ref: "#/components/schemas/UnSubscriptionAction"
      },
      AuctionBid: {
        $ref: "#/components/schemas/AuctionBidAction"
      },
      NftPurchase: {
        $ref: "#/components/schemas/NftPurchaseAction"
      },
      DepositStake: {
        $ref: "#/components/schemas/DepositStakeAction"
      },
      WithdrawStake: {
        $ref: "#/components/schemas/WithdrawStakeAction"
      },
      WithdrawStakeRequest: {
        $ref: "#/components/schemas/WithdrawStakeRequestAction"
      },
      ElectionsDepositStake: {
        $ref: "#/components/schemas/ElectionsDepositStakeAction"
      },
      ElectionsRecoverStake: {
        $ref: "#/components/schemas/ElectionsRecoverStakeAction"
      },
      JettonSwap: {
        $ref: "#/components/schemas/JettonSwapAction"
      },
      SmartContractExec: {
        $ref: "#/components/schemas/SmartContractAction"
      },
      DomainRenew: {
        $ref: "#/components/schemas/DomainRenewAction"
      },
      InscriptionTransfer: {
        $ref: "#/components/schemas/InscriptionTransferAction"
      },
      InscriptionMint: {
        $ref: "#/components/schemas/InscriptionMintAction"
      },
      simple_preview: {
        $ref: "#/components/schemas/ActionSimplePreview"
      },
      base_transactions: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/TonTransferAction": {
    type: "object",
    required: ["sender", "recipient", "amount"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      comment: {
        type: "string"
      },
      encrypted_comment: {
        $ref: "#/components/schemas/EncryptedComment"
      },
      refund: {
        $ref: "#/components/schemas/Refund"
      }
    }
  },
  "#/components/schemas/SmartContractAction": {
    type: "object",
    required: ["executor", "contract", "ton_attached", "operation"],
    properties: {
      executor: {
        $ref: "#/components/schemas/AccountAddress"
      },
      contract: {
        $ref: "#/components/schemas/AccountAddress"
      },
      ton_attached: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      operation: {
        type: "string"
      },
      payload: {
        type: "string"
      },
      refund: {
        $ref: "#/components/schemas/Refund"
      }
    }
  },
  "#/components/schemas/DomainRenewAction": {
    type: "object",
    required: ["domain", "contract_address", "renewer"],
    properties: {
      domain: {
        type: "string"
      },
      contract_address: {
        type: "string",
        format: "address"
      },
      renewer: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/InscriptionMintAction": {
    type: "object",
    required: ["type", "ticker", "recipient", "amount", "decimals"],
    properties: {
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "string"
      },
      type: {
        type: "string",
        enum: ["ton20", "gram20"]
      },
      ticker: {
        type: "string"
      },
      decimals: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/InscriptionTransferAction": {
    type: "object",
    required: ["sender", "recipient", "amount", "type", "ticker", "decimals"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "string"
      },
      comment: {
        type: "string"
      },
      type: {
        type: "string",
        enum: ["ton20", "gram20"]
      },
      ticker: {
        type: "string"
      },
      decimals: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/NftItemTransferAction": {
    type: "object",
    required: ["nft"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      nft: {
        type: "string"
      },
      comment: {
        type: "string"
      },
      encrypted_comment: {
        $ref: "#/components/schemas/EncryptedComment"
      },
      payload: {
        type: "string"
      },
      refund: {
        $ref: "#/components/schemas/Refund"
      }
    }
  },
  "#/components/schemas/JettonTransferAction": {
    type: "object",
    required: ["amount", "jetton", "senders_wallet", "recipients_wallet"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      senders_wallet: {
        type: "string",
        format: "address"
      },
      recipients_wallet: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "string"
      },
      comment: {
        type: "string"
      },
      encrypted_comment: {
        $ref: "#/components/schemas/EncryptedComment"
      },
      refund: {
        $ref: "#/components/schemas/Refund"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/JettonBurnAction": {
    type: "object",
    required: ["amount", "jetton", "sender", "senders_wallet"],
    properties: {
      sender: {
        $ref: "#/components/schemas/AccountAddress"
      },
      senders_wallet: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "string"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/JettonMintAction": {
    type: "object",
    required: ["amount", "jetton", "recipient", "recipients_wallet"],
    properties: {
      recipient: {
        $ref: "#/components/schemas/AccountAddress"
      },
      recipients_wallet: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "string"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/ContractDeployAction": {
    type: "object",
    required: ["address", "interfaces"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      interfaces: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/SubscriptionAction": {
    type: "object",
    required: ["subscriber", "subscription", "beneficiary", "amount", "initial"],
    properties: {
      subscriber: {
        $ref: "#/components/schemas/AccountAddress"
      },
      subscription: {
        type: "string",
        format: "address"
      },
      beneficiary: {
        $ref: "#/components/schemas/AccountAddress"
      },
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      initial: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/UnSubscriptionAction": {
    type: "object",
    required: ["subscriber", "subscription", "beneficiary"],
    properties: {
      subscriber: {
        $ref: "#/components/schemas/AccountAddress"
      },
      subscription: {
        type: "string",
        format: "address"
      },
      beneficiary: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/AuctionBidAction": {
    type: "object",
    required: ["amount", "bidder", "auction", "auction_type"],
    properties: {
      auction_type: {
        type: "string",
        enum: ["DNS.ton", "DNS.tg", "NUMBER.tg", "getgems"]
      },
      amount: {
        $ref: "#/components/schemas/Price"
      },
      nft: {
        $ref: "#/components/schemas/NftItem"
      },
      bidder: {
        $ref: "#/components/schemas/AccountAddress"
      },
      auction: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/DepositStakeAction": {
    type: "object",
    required: ["amount", "staker", "pool", "implementation"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      },
      pool: {
        $ref: "#/components/schemas/AccountAddress"
      },
      implementation: {
        $ref: "#/components/schemas/PoolImplementationType"
      }
    }
  },
  "#/components/schemas/WithdrawStakeAction": {
    type: "object",
    required: ["amount", "staker", "pool", "implementation"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      },
      pool: {
        $ref: "#/components/schemas/AccountAddress"
      },
      implementation: {
        $ref: "#/components/schemas/PoolImplementationType"
      }
    }
  },
  "#/components/schemas/WithdrawStakeRequestAction": {
    type: "object",
    required: ["staker", "pool", "implementation"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      },
      pool: {
        $ref: "#/components/schemas/AccountAddress"
      },
      implementation: {
        $ref: "#/components/schemas/PoolImplementationType"
      }
    }
  },
  "#/components/schemas/ElectionsRecoverStakeAction": {
    type: "object",
    required: ["amount", "staker"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/ElectionsDepositStakeAction": {
    type: "object",
    required: ["amount", "staker"],
    properties: {
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      staker: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/JettonSwapAction": {
    type: "object",
    required: ["dex", "amount_in", "amount_out", "user_wallet", "router"],
    properties: {
      dex: {
        type: "string",
        enum: ["stonfi", "dedust", "megatonfi"]
      },
      amount_in: {
        type: "string"
      },
      amount_out: {
        type: "string"
      },
      ton_in: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      ton_out: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      user_wallet: {
        $ref: "#/components/schemas/AccountAddress"
      },
      router: {
        $ref: "#/components/schemas/AccountAddress"
      },
      jetton_master_in: {
        $ref: "#/components/schemas/JettonPreview"
      },
      jetton_master_out: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/NftPurchaseAction": {
    type: "object",
    required: ["amount", "seller", "buyer", "auction_type", "nft"],
    properties: {
      auction_type: {
        type: "string",
        enum: ["DNS.ton", "DNS.tg", "NUMBER.tg", "getgems"]
      },
      amount: {
        $ref: "#/components/schemas/Price"
      },
      nft: {
        $ref: "#/components/schemas/NftItem"
      },
      seller: {
        $ref: "#/components/schemas/AccountAddress"
      },
      buyer: {
        $ref: "#/components/schemas/AccountAddress"
      }
    }
  },
  "#/components/schemas/ActionSimplePreview": {
    type: "object",
    required: ["name", "description", "accounts"],
    properties: {
      name: {
        type: "string"
      },
      description: {
        type: "string"
      },
      action_image: {
        type: "string"
      },
      value: {
        type: "string"
      },
      value_image: {
        type: "string"
      },
      accounts: {
        type: "array",
        items: {
          $ref: "#/components/schemas/AccountAddress"
        }
      }
    }
  },
  "#/components/schemas/AccountEvent": {
    type: "object",
    required: ["event_id", "timestamp", "actions", "account", "is_scam", "lt", "in_progress", "extra"],
    properties: {
      event_id: {
        type: "string"
      },
      account: {
        $ref: "#/components/schemas/AccountAddress"
      },
      timestamp: {
        type: "integer",
        format: "int64"
      },
      actions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Action"
        }
      },
      is_scam: {
        type: "boolean"
      },
      lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      in_progress: {
        type: "boolean"
      },
      extra: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/AccountEvents": {
    type: "object",
    required: ["events", "next_from"],
    properties: {
      events: {
        type: "array",
        items: {
          $ref: "#/components/schemas/AccountEvent"
        }
      },
      next_from: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/TraceID": {
    type: "object",
    required: ["id", "utime"],
    properties: {
      id: {
        type: "string"
      },
      utime: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/TraceIDs": {
    type: "object",
    required: ["traces"],
    properties: {
      traces: {
        type: "array",
        items: {
          $ref: "#/components/schemas/TraceID"
        }
      }
    }
  },
  "#/components/schemas/ApyHistory": {
    type: "object",
    required: ["apy", "time"],
    properties: {
      apy: {
        type: "number"
      },
      time: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/Subscription": {
    type: "object",
    required: ["address", "wallet_address", "beneficiary_address", "amount", "period", "start_time", "timeout", "last_payment_time", "last_request_time", "subscription_id", "failed_attempts"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      wallet_address: {
        type: "string",
        format: "address"
      },
      beneficiary_address: {
        type: "string",
        format: "address"
      },
      amount: {
        type: "integer",
        format: "int64"
      },
      period: {
        type: "integer",
        format: "int64"
      },
      start_time: {
        type: "integer",
        format: "int64"
      },
      timeout: {
        type: "integer",
        format: "int64"
      },
      last_payment_time: {
        type: "integer",
        format: "int64"
      },
      last_request_time: {
        type: "integer",
        format: "int64"
      },
      subscription_id: {
        type: "integer",
        format: "int64"
      },
      failed_attempts: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/Subscriptions": {
    type: "object",
    required: ["subscriptions"],
    properties: {
      subscriptions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Subscription"
        }
      }
    }
  },
  "#/components/schemas/Auction": {
    type: "object",
    required: ["domain", "owner", "price", "bids", "date"],
    properties: {
      domain: {
        type: "string"
      },
      owner: {
        type: "string",
        format: "address"
      },
      price: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      bids: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      date: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/Auctions": {
    type: "object",
    required: ["data", "total"],
    properties: {
      data: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Auction"
        }
      },
      total: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/WalletDNS": {
    type: "object",
    required: ["address", "is_wallet", "has_method_pubkey", "has_method_seqno", "names", "account"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      account: {
        $ref: "#/components/schemas/AccountAddress"
      },
      is_wallet: {
        type: "boolean"
      },
      has_method_pubkey: {
        type: "boolean"
      },
      has_method_seqno: {
        type: "boolean"
      },
      names: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/DomainInfo": {
    type: "object",
    required: ["name"],
    properties: {
      name: {
        type: "string"
      },
      expiring_at: {
        type: "integer",
        format: "int64"
      },
      item: {
        $ref: "#/components/schemas/NftItem"
      }
    }
  },
  "#/components/schemas/DnsRecord": {
    type: "object",
    required: ["sites"],
    properties: {
      wallet: {
        $ref: "#/components/schemas/WalletDNS"
      },
      next_resolver: {
        type: "string",
        format: "address"
      },
      sites: {
        type: "array",
        items: {
          type: "string"
        }
      },
      storage: {
        type: "string"
      }
    }
  },
  "#/components/schemas/NftCollection": {
    type: "object",
    required: ["address", "next_item_index", "raw_collection_content", "approved_by"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      next_item_index: {
        type: "integer",
        format: "int64"
      },
      owner: {
        $ref: "#/components/schemas/AccountAddress"
      },
      raw_collection_content: {
        type: "string",
        format: "cell"
      },
      metadata: {
        type: "object",
        additionalProperties: !0
      },
      previews: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ImagePreview"
        }
      },
      approved_by: {
        $ref: "#/components/schemas/NftApprovedBy"
      }
    }
  },
  "#/components/schemas/NftCollections": {
    type: "object",
    required: ["nft_collections"],
    properties: {
      nft_collections: {
        type: "array",
        items: {
          $ref: "#/components/schemas/NftCollection"
        }
      }
    }
  },
  "#/components/schemas/Trace": {
    type: "object",
    required: ["transaction", "interfaces"],
    properties: {
      transaction: {
        $ref: "#/components/schemas/Transaction"
      },
      interfaces: {
        type: "array",
        items: {
          type: "string"
        }
      },
      children: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Trace"
        }
      },
      emulated: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/MessageConsequences": {
    type: "object",
    required: ["trace", "risk", "event"],
    properties: {
      trace: {
        $ref: "#/components/schemas/Trace"
      },
      risk: {
        $ref: "#/components/schemas/Risk"
      },
      event: {
        $ref: "#/components/schemas/AccountEvent"
      }
    }
  },
  "#/components/schemas/Risk": {
    type: "object",
    required: ["transfer_all_remaining_balance", "ton", "jettons", "nfts"],
    properties: {
      transfer_all_remaining_balance: {
        type: "boolean"
      },
      ton: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      jettons: {
        type: "array",
        items: {
          $ref: "#/components/schemas/JettonQuantity"
        }
      },
      nfts: {
        type: "array",
        items: {
          $ref: "#/components/schemas/NftItem"
        }
      }
    }
  },
  "#/components/schemas/JettonQuantity": {
    type: "object",
    required: ["quantity", "wallet_address", "jetton"],
    properties: {
      quantity: {
        type: "string"
      },
      wallet_address: {
        $ref: "#/components/schemas/AccountAddress"
      },
      jetton: {
        $ref: "#/components/schemas/JettonPreview"
      }
    }
  },
  "#/components/schemas/DecodedMessage": {
    type: "object",
    required: ["destination", "destination_wallet_version"],
    properties: {
      destination: {
        $ref: "#/components/schemas/AccountAddress"
      },
      destination_wallet_version: {
        type: "string"
      },
      ext_in_msg_decoded: {
        type: "object",
        properties: {
          wallet_v3: {
            type: "object",
            required: ["subwallet_id", "valid_until", "seqno", "op", "raw_messages"],
            properties: {
              subwallet_id: {
                type: "integer",
                format: "int64"
              },
              valid_until: {
                type: "integer",
                format: "int64"
              },
              seqno: {
                type: "integer",
                format: "int64"
              },
              raw_messages: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/DecodedRawMessage"
                }
              }
            }
          },
          wallet_v4: {
            type: "object",
            required: ["subwallet_id", "valid_until", "seqno", "op", "raw_messages"],
            properties: {
              subwallet_id: {
                type: "integer",
                format: "int64"
              },
              valid_until: {
                type: "integer",
                format: "int64"
              },
              seqno: {
                type: "integer",
                format: "int64"
              },
              op: {
                type: "integer",
                format: "int32"
              },
              raw_messages: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/DecodedRawMessage"
                }
              }
            }
          },
          wallet_highload_v2: {
            type: "object",
            required: ["subwallet_id", "bounded_query_id", "raw_messages"],
            properties: {
              subwallet_id: {
                type: "integer",
                format: "int64"
              },
              bounded_query_id: {
                type: "string"
              },
              raw_messages: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/DecodedRawMessage"
                }
              }
            }
          }
        }
      }
    }
  },
  "#/components/schemas/DecodedRawMessage": {
    type: "object",
    required: ["message", "mode"],
    properties: {
      message: {
        type: "object",
        required: ["boc"],
        properties: {
          boc: {
            type: "string",
            format: "cell"
          },
          decoded_op_name: {
            type: "string"
          },
          op_code: {
            type: "string"
          },
          decoded_body: {}
        }
      },
      mode: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/Event": {
    type: "object",
    required: ["event_id", "timestamp", "actions", "value_flow", "is_scam", "lt", "in_progress"],
    properties: {
      event_id: {
        type: "string"
      },
      timestamp: {
        type: "integer",
        format: "int64"
      },
      actions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Action"
        }
      },
      value_flow: {
        type: "array",
        items: {
          $ref: "#/components/schemas/ValueFlow"
        }
      },
      is_scam: {
        type: "boolean"
      },
      lt: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      in_progress: {
        type: "boolean"
      }
    }
  },
  "#/components/schemas/JettonMetadata": {
    type: "object",
    required: ["address", "name", "symbol", "decimals"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      name: {
        type: "string"
      },
      symbol: {
        type: "string"
      },
      decimals: {
        type: "string"
      },
      image: {
        type: "string"
      },
      description: {
        type: "string"
      },
      social: {
        type: "array",
        items: {
          type: "string"
        }
      },
      websites: {
        type: "array",
        items: {
          type: "string"
        }
      },
      catalogs: {
        type: "array",
        items: {
          type: "string"
        }
      },
      custom_payload_api_uri: {
        type: "string"
      }
    }
  },
  "#/components/schemas/InscriptionBalances": {
    type: "object",
    required: ["inscriptions"],
    properties: {
      inscriptions: {
        type: "array",
        items: {
          $ref: "#/components/schemas/InscriptionBalance"
        }
      }
    }
  },
  "#/components/schemas/InscriptionBalance": {
    type: "object",
    required: ["type", "ticker", "balance", "decimals"],
    properties: {
      type: {
        type: "string",
        enum: ["ton20", "gram20"]
      },
      ticker: {
        type: "string"
      },
      balance: {
        type: "string"
      },
      decimals: {
        type: "integer"
      }
    }
  },
  "#/components/schemas/Jettons": {
    type: "object",
    required: ["jettons"],
    properties: {
      jettons: {
        type: "array",
        items: {
          $ref: "#/components/schemas/JettonInfo"
        }
      }
    }
  },
  "#/components/schemas/JettonInfo": {
    type: "object",
    required: ["mintable", "total_supply", "metadata", "verification", "holders_count"],
    properties: {
      mintable: {
        type: "boolean"
      },
      total_supply: {
        type: "string"
      },
      admin: {
        $ref: "#/components/schemas/AccountAddress"
      },
      metadata: {
        $ref: "#/components/schemas/JettonMetadata"
      },
      verification: {
        $ref: "#/components/schemas/JettonVerificationType"
      },
      holders_count: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/JettonHolders": {
    type: "object",
    required: ["addresses", "total"],
    properties: {
      addresses: {
        type: "array",
        items: {
          type: "object",
          required: ["address", "owner", "balance"],
          properties: {
            address: {
              type: "string",
              format: "address"
            },
            owner: {
              $ref: "#/components/schemas/AccountAddress"
            },
            balance: {
              type: "string"
            }
          }
        }
      },
      total: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/JettonTransferPayload": {
    type: "object",
    required: ["payload"],
    properties: {
      custom_payload: {
        type: "string"
      },
      state_init: {
        type: "string"
      }
    }
  },
  "#/components/schemas/AccountStaking": {
    type: "object",
    required: ["pools"],
    properties: {
      pools: {
        type: "array",
        items: {
          $ref: "#/components/schemas/AccountStakingInfo"
        }
      }
    }
  },
  "#/components/schemas/AccountStakingInfo": {
    type: "object",
    required: ["pool", "amount", "pending_deposit", "pending_withdraw", "ready_withdraw"],
    properties: {
      pool: {
        type: "string"
      },
      amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      pending_deposit: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      pending_withdraw: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      ready_withdraw: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      }
    }
  },
  "#/components/schemas/PoolInfo": {
    type: "object",
    required: ["address", "total_amount", "implementation", "apy", "name", "min_stake", "cycle_start", "cycle_end", "verified", "current_nominators", "max_nominators", "nominators_stake", "validator_stake"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      name: {
        type: "string"
      },
      total_amount: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      implementation: {
        $ref: "#/components/schemas/PoolImplementationType"
      },
      apy: {
        type: "number"
      },
      min_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      cycle_start: {
        type: "integer",
        format: "int64"
      },
      cycle_end: {
        type: "integer",
        format: "int64"
      },
      verified: {
        type: "boolean"
      },
      current_nominators: {
        type: "integer"
      },
      max_nominators: {
        type: "integer"
      },
      liquid_jetton_master: {
        type: "string",
        format: "address"
      },
      nominators_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      validator_stake: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      cycle_length: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/PoolImplementation": {
    type: "object",
    required: ["name", "description", "url", "socials"],
    properties: {
      name: {
        type: "string"
      },
      description: {
        type: "string"
      },
      url: {
        type: "string"
      },
      socials: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/StorageProvider": {
    type: "object",
    required: ["address", "accept_new_contracts", "rate_per_mb_day", "max_span", "minimal_file_size", "maximal_file_size"],
    properties: {
      address: {
        type: "string",
        format: "address"
      },
      accept_new_contracts: {
        type: "boolean"
      },
      rate_per_mb_day: {
        type: "integer",
        format: "int64",
        "x-js-format": "bigint"
      },
      max_span: {
        type: "integer",
        format: "int64"
      },
      minimal_file_size: {
        type: "integer",
        format: "int64"
      },
      maximal_file_size: {
        type: "integer",
        format: "int64"
      }
    }
  },
  "#/components/schemas/FoundAccounts": {
    type: "object",
    required: ["addresses"],
    properties: {
      addresses: {
        type: "array",
        items: {
          type: "object",
          required: ["address", "name", "preview"],
          properties: {
            address: {
              type: "string",
              format: "address"
            },
            name: {
              type: "string"
            },
            preview: {
              type: "string"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/DnsExpiring": {
    type: "object",
    required: ["items"],
    properties: {
      items: {
        type: "array",
        items: {
          type: "object",
          required: ["expiring_at", "name"],
          properties: {
            expiring_at: {
              type: "integer",
              format: "int64"
            },
            name: {
              type: "string"
            },
            dns_item: {
              $ref: "#/components/schemas/NftItem"
            }
          }
        }
      }
    }
  },
  "#/components/schemas/AccountInfoByStateInit": {
    type: "object",
    required: ["public_key", "address"],
    properties: {
      public_key: {
        type: "string"
      },
      address: {
        type: "string",
        format: "address"
      }
    }
  },
  "#/components/schemas/Seqno": {
    type: "object",
    required: ["seqno"],
    properties: {
      seqno: {
        type: "integer",
        format: "int32"
      }
    }
  },
  "#/components/schemas/BlockRaw": {
    type: "object",
    required: ["workchain", "shard", "seqno", "root_hash", "file_hash"],
    properties: {
      workchain: {
        type: "integer",
        format: "int32"
      },
      shard: {
        type: "string"
      },
      seqno: {
        type: "integer",
        format: "int32"
      },
      root_hash: {
        type: "string"
      },
      file_hash: {
        type: "string"
      }
    }
  },
  "#/components/schemas/InitStateRaw": {
    type: "object",
    required: ["workchain", "root_hash", "file_hash"],
    properties: {
      workchain: {
        type: "integer",
        format: "int32"
      },
      root_hash: {
        type: "string"
      },
      file_hash: {
        type: "string"
      }
    }
  },
  "#/components/schemas/EncryptedComment": {
    type: "object",
    required: ["encryption_type", "cipher_text"],
    properties: {
      encryption_type: {
        type: "string"
      },
      cipher_text: {
        type: "string"
      }
    }
  },
  "#/components/schemas/BlockchainAccountInspect": {
    type: "object",
    required: ["code", "code_hash", "methods"],
    properties: {
      code: {
        type: "string",
        format: "cell"
      },
      code_hash: {
        type: "string"
      },
      methods: {
        type: "array",
        items: {
          type: "object",
          required: ["id", "method"],
          properties: {
            id: {
              type: "integer",
              format: "int64"
            },
            method: {
              type: "string"
            }
          }
        }
      },
      compiler: {
        type: "string",
        enum: ["func"]
      }
    }
  },
  "#/components/schemas/PoolImplementationType": {
    type: "string",
    enum: ["whales", "tf", "liquidTF"]
  },
  "#/components/schemas/TokenRates": {
    type: "object",
    properties: {
      prices: {
        type: "object",
        additionalProperties: {
          type: "number"
        }
      },
      diff_24h: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      },
      diff_7d: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      },
      diff_30d: {
        type: "object",
        additionalProperties: {
          type: "string"
        }
      }
    }
  },
  "#/components/schemas/MarketTonRates": {
    type: "object",
    required: ["market", "usd_price", "last_date_update"],
    properties: {
      market: {
        type: "string"
      },
      usd_price: {
        type: "number"
      },
      last_date_update: {
        type: "integer",
        format: "int64"
      }
    }
  }
};

function so(n) {
  return n.replace(/(_\w)/g, e => {
    var t;
    return ((t = e[1]) == null ? void 0 : t.toUpperCase()) ?? ""
  })
}

function no(n) {
  return n.replace(/([A-Z])/g, e => `_${e.toLowerCase()}`)
}

function Rt(n) {
  return Mt.Cell.fromBase64(we.from(n, "hex").toString("base64"))
}

function ro(n) {
  return n.startsWith("-") ? BigInt(n.slice(1)) * -1n : BigInt(n)
}

function p(n, e) {
  const t = e && e.$ref,
    s = t ? Qs[t] : e;
  if (Array.isArray(n)) {
    const r = s && s.items;
    return n.map(o => p(o, r))
  } else if (s) {
    if (s.type === "string") {
      if (s.format === "address") return Mt.Address.parse(n);
      if (s.format === "cell") return n && Rt(n);
      if (s.format === "cell-base64") return n && Mt.Cell.fromBase64(n)
    }
    if (s.type === "integer") return s["x-js-format"] === "bigint" ? BigInt(n) : Number(n);
    if (s.type === "object" && s.format === "tuple-item") switch (n.type) {
      case "tuple":
        const r = s.properties.tuple.items;
        return {
          type: "tuple", items: n.tuple.map(o => p(o, r))
        };
      case "num":
        return {
          type: "int", value: ro(n.num)
        };
      case "cell":
        return {
          type: "cell", cell: Rt(n.cell)
        };
      case "slice":
        return {
          type: "slice", slice: Rt(n.slice)
        };
      case "null":
        return {
          type: "null"
        };
      case "nan":
        return {
          type: "nan"
        };
      default:
        throw new Error(`Unknown tuple item type: ${n.type}`)
    }
  }
  return n !== null && typeof n == "object" ? Object.keys(n).reduce((r, o) => {
    const a = (s == null ? void 0 : s.properties) && s.properties[o],
      i = so(o);
    return r[i] = p(n[o], a), r
  }, {}) : n
}

function se(n, e) {
  const t = e && e.$ref,
    s = t ? Qs[t] : e;
  if (Array.isArray(n)) {
    const r = s && s.items;
    return n.map(o => se(o, r))
  } else if (s && s.type === "string") {
    if (s.format === "address") return n.toRawString();
    if (s.format === "cell") return n.toBoc().toString("hex");
    if (s.format === "cell-base64") return n.toBoc().toString("base64")
  }
  return n !== null && typeof n == "object" ? Object.keys(n).reduce((r, o) => {
    const a = (s == null ? void 0 : s.properties) && s.properties[o],
      i = no(o);
    return r[i] = se(n[o], a), r
  }, {}) : n
}
let oo = class {
  constructor(e) {
    f(this, "http");
    f(this, "utilities", {
      status: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/status",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/ServiceStatus"
        })
      },
      addressParse: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/address/${s}/parse`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          type: "object",
          required: ["raw_form", "bounceable", "non_bounceable", "given_type", "test_only"],
          properties: {
            raw_form: {
              type: "string",
              format: "address"
            },
            bounceable: {
              required: ["b64", "b64url"],
              type: "object",
              properties: {
                b64: {
                  type: "string"
                },
                b64url: {
                  type: "string"
                }
              }
            },
            non_bounceable: {
              required: ["b64", "b64url"],
              type: "object",
              properties: {
                b64: {
                  type: "string"
                },
                b64url: {
                  type: "string"
                }
              }
            },
            given_type: {
              type: "string"
            },
            test_only: {
              type: "boolean"
            }
          }
        })
      }
    });
    f(this, "blockchain", {
      getReducedBlockchainBlocks: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/blockchain/reduced/blocks",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/ReducedBlocks"
        })
      },
      getBlockchainBlock: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/blocks/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/BlockchainBlock"
        })
      },
      getBlockchainMasterchainShards: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/shards`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/BlockchainBlockShards"
        })
      },
      getBlockchainMasterchainBlocks: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/blocks`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/BlockchainBlocks"
        })
      },
      getBlockchainMasterchainTransactions: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/transactions`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/Transactions"
        })
      },
      getBlockchainConfigFromBlock: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/config`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/BlockchainConfig"
        })
      },
      getRawBlockchainConfigFromBlock: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/masterchain/${e}/config/raw`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/RawBlockchainConfig"
        })
      },
      getBlockchainBlockTransactions: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/blocks/${e}/transactions`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/Transactions"
        })
      },
      getBlockchainTransaction: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/transactions/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/Transaction"
        })
      },
      getBlockchainTransactionByMessageHash: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/blockchain/messages/${e}/transaction`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/Transaction"
        })
      },
      getBlockchainValidators: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/blockchain/validators",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/Validators"
        })
      },
      getBlockchainMasterchainHead: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/blockchain/masterchain-head",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/BlockchainBlock"
        })
      },
      getBlockchainRawAccount: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/blockchain/accounts/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          $ref: "#/components/schemas/BlockchainRawAccount"
        })
      },
      getBlockchainAccountTransactions: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/blockchain/accounts/${r}/transactions`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/Transactions"
        })
      },
      execGetMethodForBlockchainAccount: async (e, t, s, r = {}) => {
        const o = e.toRawString(),
          a = await this.http.request({
            path: `/v2/blockchain/accounts/${o}/methods/${t}`,
            method: "GET",
            query: s,
            format: "json",
            ...r
          });
        return p(a, {
          $ref: "#/components/schemas/MethodExecutionResult"
        })
      },
      sendBlockchainMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/blockchain/message",
          method: "POST",
          body: se(e, {
            type: "object",
            properties: {
              boc: {
                type: "string",
                format: "cell"
              },
              batch: {
                type: "array",
                maxItems: 10,
                items: {
                  type: "string",
                  format: "cell"
                }
              }
            }
          }),
          ...t
        });
        return p(s)
      },
      getBlockchainConfig: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/blockchain/config",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/BlockchainConfig"
        })
      },
      getRawBlockchainConfig: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/blockchain/config/raw",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/RawBlockchainConfig"
        })
      },
      blockchainAccountInspect: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/blockchain/accounts/${s}/inspect`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          $ref: "#/components/schemas/BlockchainAccountInspect"
        })
      },
      status: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/status",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/ServiceStatus"
        })
      }
    });
    f(this, "accounts", {
      getAccounts: async (e, t, s = {}) => {
        const r = await this.http.request({
          path: "/v2/accounts/_bulk",
          method: "POST",
          query: t,
          body: se(e, {
            type: "object",
            required: ["accountIds"],
            properties: {
              accountIds: {
                type: "array",
                items: {
                  type: "string",
                  format: "address"
                }
              }
            }
          }),
          format: "json",
          ...s
        });
        return p(r, {
          $ref: "#/components/schemas/Accounts"
        })
      },
      getAccount: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/accounts/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          $ref: "#/components/schemas/Account"
        })
      },
      accountDnsBackResolve: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/accounts/${s}/dns/backresolve`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          $ref: "#/components/schemas/DomainNames"
        })
      },
      getAccountJettonsBalances: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${r}/jettons`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/JettonsBalances"
        })
      },
      getAccountJettonBalance: async (e, t, s, r = {}) => {
        const o = e.toRawString(),
          a = t.toRawString(),
          i = await this.http.request({
            path: `/v2/accounts/${o}/jettons/${a}`,
            method: "GET",
            query: s,
            format: "json",
            ...r
          });
        return p(i, {
          $ref: "#/components/schemas/JettonBalance"
        })
      },
      getAccountJettonsHistory: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${r}/jettons/history`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountJettonHistoryById: async (e, t, s, r = {}) => {
        const o = e.toRawString(),
          a = t.toRawString(),
          i = await this.http.request({
            path: `/v2/accounts/${o}/jettons/${a}/history`,
            method: "GET",
            query: s,
            format: "json",
            ...r
          });
        return p(i, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountNftItems: async (e, t, s = {}) => {
        var a;
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${r}/nfts`,
            method: "GET",
            query: t && {
              ...t,
              collection: (a = t.collection) == null ? void 0 : a.toRawString()
            },
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getAccountEvents: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${r}/events`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountEvent: async (e, t, s, r = {}) => {
        const o = e.toRawString(),
          a = await this.http.request({
            path: `/v2/accounts/${o}/events/${t}`,
            method: "GET",
            query: s,
            format: "json",
            ...r
          });
        return p(a, {
          $ref: "#/components/schemas/AccountEvent"
        })
      },
      getAccountTraces: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${r}/traces`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/TraceIDs"
        })
      },
      getAccountSubscriptions: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/accounts/${s}/subscriptions`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          $ref: "#/components/schemas/Subscriptions"
        })
      },
      reindexAccount: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/accounts/${s}/reindex`,
            method: "POST",
            ...t
          });
        return p(r)
      },
      searchAccounts: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/accounts/search",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/FoundAccounts"
        })
      },
      getAccountDnsExpiring: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${r}/dns/expiring`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/DnsExpiring"
        })
      },
      getAccountPublicKey: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/accounts/${s}/publickey`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          type: "object",
          required: ["public_key"],
          properties: {
            public_key: {
              type: "string"
            }
          }
        })
      },
      getAccountMultisigs: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/accounts/${s}/multisigs`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          $ref: "#/components/schemas/Multisigs"
        })
      },
      getAccountDiff: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${r}/diff`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          type: "object",
          required: ["balance_change"],
          properties: {
            balance_change: {
              type: "integer",
              format: "int64"
            }
          }
        })
      },
      addressParse: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/address/${s}/parse`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          type: "object",
          required: ["raw_form", "bounceable", "non_bounceable", "given_type", "test_only"],
          properties: {
            raw_form: {
              type: "string",
              format: "address"
            },
            bounceable: {
              required: ["b64", "b64url"],
              type: "object",
              properties: {
                b64: {
                  type: "string"
                },
                b64url: {
                  type: "string"
                }
              }
            },
            non_bounceable: {
              required: ["b64", "b64url"],
              type: "object",
              properties: {
                b64: {
                  type: "string"
                },
                b64url: {
                  type: "string"
                }
              }
            },
            given_type: {
              type: "string"
            },
            test_only: {
              type: "boolean"
            }
          }
        })
      }
    });
    f(this, "nft", {
      getAccountNftHistory: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/accounts/${r}/nfts/history`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getNftCollections: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/nfts/collections",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/NftCollections"
        })
      },
      getNftCollection: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/nfts/collections/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          $ref: "#/components/schemas/NftCollection"
        })
      },
      getItemsFromCollection: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/nfts/collections/${r}/items`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getNftItemsByAddresses: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/nfts/_bulk",
          method: "POST",
          body: se(e, {
            type: "object",
            required: ["accountIds"],
            properties: {
              accountIds: {
                type: "array",
                items: {
                  type: "string",
                  format: "address"
                }
              }
            }
          }),
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/NftItems"
        })
      },
      getNftItemByAddress: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/nfts/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          $ref: "#/components/schemas/NftItem"
        })
      },
      getNftHistoryById: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/nfts/${r}/history`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      }
    });
    f(this, "dns", {
      getDnsInfo: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/dns/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/DomainInfo"
        })
      },
      dnsResolve: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/dns/${e}/resolve`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/DnsRecord"
        })
      },
      getDomainBids: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/dns/${e}/bids`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/DomainBids"
        })
      },
      getAllAuctions: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/dns/auctions",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/Auctions"
        })
      }
    });
    f(this, "traces", {
      getTrace: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/traces/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/Trace"
        })
      }
    });
    f(this, "events", {
      getEvent: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/events/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/Event"
        })
      }
    });
    f(this, "inscriptions", {
      getAccountInscriptions: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/experimental/accounts/${r}/inscriptions`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/InscriptionBalances"
        })
      },
      getAccountInscriptionsHistory: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/experimental/accounts/${r}/inscriptions/history`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getAccountInscriptionsHistoryByTicker: async (e, t, s, r = {}) => {
        const o = e.toRawString(),
          a = await this.http.request({
            path: `/v2/experimental/accounts/${o}/inscriptions/${t}/history`,
            method: "GET",
            query: s,
            format: "json",
            ...r
          });
        return p(a, {
          $ref: "#/components/schemas/AccountEvents"
        })
      },
      getInscriptionOpTemplate: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/experimental/inscriptions/op-template",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(s, {
          type: "object",
          required: ["comment", "destination"],
          properties: {
            comment: {
              type: "string"
            },
            destination: {
              type: "string"
            }
          }
        })
      }
    });
    f(this, "jettons", {
      getJettons: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/jettons",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/Jettons"
        })
      },
      getJettonInfo: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/jettons/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          $ref: "#/components/schemas/JettonInfo"
        })
      },
      getJettonHolders: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/jettons/${r}/holders`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/JettonHolders"
        })
      },
      getJettonTransferPayload: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = t.toRawString(),
          a = await this.http.request({
            path: `/v2/jettons/${o}/transfer/${r}/payload`,
            method: "GET",
            format: "json",
            ...s
          });
        return p(a, {
          $ref: "#/components/schemas/JettonTransferPayload"
        })
      },
      getJettonsEvents: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/events/${e}/jettons`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/Event"
        })
      }
    });
    f(this, "staking", {
      getAccountNominatorsPools: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/staking/nominator/${s}/pools`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          $ref: "#/components/schemas/AccountStaking"
        })
      },
      getStakingPoolInfo: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/staking/pool/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          type: "object",
          required: ["implementation", "pool"],
          properties: {
            implementation: {
              $ref: "#/components/schemas/PoolImplementation"
            },
            pool: {
              $ref: "#/components/schemas/PoolInfo"
            }
          }
        })
      },
      getStakingPoolHistory: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/staking/pool/${s}/history`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          type: "object",
          required: ["apy"],
          properties: {
            apy: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ApyHistory"
              }
            }
          }
        })
      },
      getStakingPools: async (e, t = {}) => {
        var r;
        const s = await this.http.request({
          path: "/v2/staking/pools",
          method: "GET",
          query: e && {
            ...e,
            available_for: (r = e.available_for) == null ? void 0 : r.toRawString()
          },
          format: "json",
          ...t
        });
        return p(s, {
          type: "object",
          required: ["pools", "implementations"],
          properties: {
            pools: {
              type: "array",
              items: {
                $ref: "#/components/schemas/PoolInfo"
              }
            },
            implementations: {
              type: "object",
              additionalProperties: {
                $ref: "#/components/schemas/PoolImplementation"
              }
            }
          }
        })
      }
    });
    f(this, "storage", {
      getStorageProviders: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/storage/providers",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["providers"],
          properties: {
            providers: {
              type: "array",
              items: {
                $ref: "#/components/schemas/StorageProvider"
              }
            }
          }
        })
      }
    });
    f(this, "rates", {
      getRates: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/rates",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(s, {
          type: "object",
          required: ["rates"],
          properties: {
            rates: {
              type: "object",
              additionalProperties: {
                $ref: "#/components/schemas/TokenRates"
              }
            }
          }
        })
      },
      getChartRates: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/rates/chart",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(s, {
          type: "object",
          required: ["points"],
          properties: {
            points: {
              additionalProperties: !0,
              example: {}
            }
          }
        })
      },
      getMarketsRates: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/rates/markets",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["markets"],
          properties: {
            markets: {
              type: "array",
              items: {
                $ref: "#/components/schemas/MarketTonRates"
              }
            }
          }
        })
      }
    });
    f(this, "connect", {
      getTonConnectPayload: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/tonconnect/payload",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["payload"],
          properties: {
            payload: {
              type: "string"
            }
          }
        })
      },
      getAccountInfoByStateInit: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/tonconnect/stateinit",
          method: "POST",
          body: se(e, {
            type: "object",
            required: ["stateInit"],
            properties: {
              stateInit: {
                type: "string",
                format: "cell-base64"
              }
            }
          }),
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/AccountInfoByStateInit"
        })
      }
    });
    f(this, "wallet", {
      getWalletBackup: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/wallet/backup",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["dump"],
          properties: {
            dump: {
              type: "string"
            }
          }
        })
      },
      setWalletBackup: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/backup",
          method: "PUT",
          body: se(e),
          ...t
        });
        return p(s)
      },
      tonConnectProof: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/auth/proof",
          method: "POST",
          body: se(e, {
            type: "object",
            required: ["address", "proof"],
            properties: {
              address: {
                type: "string",
                format: "address"
              },
              proof: {
                type: "object",
                required: ["timestamp", "domain", "signature", "payload"],
                properties: {
                  timestamp: {
                    type: "integer",
                    format: "int64"
                  },
                  domain: {
                    type: "object",
                    required: ["value"],
                    properties: {
                      lengthBytes: {
                        type: "integer",
                        format: "int32"
                      },
                      value: {
                        type: "string"
                      }
                    }
                  },
                  signature: {
                    type: "string"
                  },
                  payload: {
                    type: "string"
                  },
                  stateInit: {
                    type: "string",
                    format: "cell-base64"
                  }
                }
              }
            }
          }),
          format: "json",
          ...t
        });
        return p(s, {
          type: "object",
          required: ["token"],
          properties: {
            token: {
              type: "string"
            }
          }
        })
      },
      getAccountSeqno: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/wallet/${s}/seqno`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          $ref: "#/components/schemas/Seqno"
        })
      },
      getWalletsByPublicKey: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/pubkeys/${e}/wallets`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/Accounts"
        })
      }
    });
    f(this, "gasless", {
      gaslessConfig: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/gasless/config",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          $ref: "#/components/schemas/GaslessConfig"
        })
      },
      gaslessEstimate: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/gasless/estimate/${r}`,
            method: "POST",
            body: se(t, {
              type: "object",
              required: ["messages", "walletAddress", "walletPublicKey"],
              properties: {
                walletAddress: {
                  type: "string",
                  format: "address"
                },
                walletPublicKey: {
                  type: "string"
                },
                messages: {
                  type: "array",
                  items: {
                    type: "object",
                    required: ["boc"],
                    properties: {
                      boc: {
                        type: "string",
                        format: "cell"
                      }
                    }
                  }
                }
              }
            }),
            format: "json",
            ...s
          });
        return p(o, {
          $ref: "#/components/schemas/SignRawParams"
        })
      },
      gaslessSend: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/gasless/send",
          method: "POST",
          body: se(e, {
            type: "object",
            required: ["boc", "walletPublicKey"],
            properties: {
              walletPublicKey: {
                type: "string"
              },
              boc: {
                type: "string",
                format: "cell"
              }
            }
          }),
          ...t
        });
        return p(s)
      }
    });
    f(this, "liteServer", {
      getRawMasterchainInfo: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/liteserver/get_masterchain_info",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["last", "state_root_hash", "init"],
          properties: {
            last: {
              $ref: "#/components/schemas/BlockRaw"
            },
            state_root_hash: {
              type: "string"
            },
            init: {
              $ref: "#/components/schemas/InitStateRaw"
            }
          }
        })
      },
      getRawMasterchainInfoExt: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/liteserver/get_masterchain_info_ext",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(s, {
          type: "object",
          required: ["mode", "version", "capabilities", "last", "last_utime", "now", "state_root_hash", "init"],
          properties: {
            mode: {
              type: "integer",
              format: "int32"
            },
            version: {
              type: "integer",
              format: "int32"
            },
            capabilities: {
              type: "integer",
              format: "int64"
            },
            last: {
              $ref: "#/components/schemas/BlockRaw"
            },
            last_utime: {
              type: "integer",
              format: "int32"
            },
            now: {
              type: "integer",
              format: "int32"
            },
            state_root_hash: {
              type: "string"
            },
            init: {
              $ref: "#/components/schemas/InitStateRaw"
            }
          }
        })
      },
      getRawTime: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/liteserver/get_time",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["time"],
          properties: {
            time: {
              type: "integer",
              format: "int32"
            }
          }
        })
      },
      getRawBlockchainBlock: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/liteserver/get_block/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          type: "object",
          required: ["id", "data"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            data: {
              type: "string"
            }
          }
        })
      },
      getRawBlockchainBlockState: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/liteserver/get_state/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          type: "object",
          required: ["id", "root_hash", "file_hash", "data"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            root_hash: {
              type: "string"
            },
            file_hash: {
              type: "string"
            },
            data: {
              type: "string"
            }
          }
        })
      },
      getRawBlockchainBlockHeader: async (e, t, s = {}) => {
        const r = await this.http.request({
          path: `/v2/liteserver/get_block_header/${e}`,
          method: "GET",
          query: t,
          format: "json",
          ...s
        });
        return p(r, {
          type: "object",
          required: ["id", "mode", "header_proof"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            mode: {
              type: "integer",
              format: "int32"
            },
            header_proof: {
              type: "string"
            }
          }
        })
      },
      sendRawMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/liteserver/send_message",
          method: "POST",
          body: se(e, {
            type: "object",
            required: ["body"],
            properties: {
              body: {
                type: "string",
                format: "cell-base64"
              }
            }
          }),
          format: "json",
          ...t
        });
        return p(s, {
          type: "object",
          required: ["code"],
          properties: {
            code: {
              type: "integer",
              format: "int32"
            }
          }
        })
      },
      getRawAccountState: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/liteserver/get_account_state/${r}`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          type: "object",
          required: ["id", "shardblk", "shard_proof", "proof", "state"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            shardblk: {
              $ref: "#/components/schemas/BlockRaw"
            },
            shard_proof: {
              type: "string"
            },
            proof: {
              type: "string"
            },
            state: {
              type: "string"
            }
          }
        })
      },
      getRawShardInfo: async (e, t, s = {}) => {
        const r = await this.http.request({
          path: `/v2/liteserver/get_shard_info/${e}`,
          method: "GET",
          query: t,
          format: "json",
          ...s
        });
        return p(r, {
          type: "object",
          required: ["id", "shardblk", "shard_proof", "shard_descr"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            shardblk: {
              $ref: "#/components/schemas/BlockRaw"
            },
            shard_proof: {
              type: "string"
            },
            shard_descr: {
              type: "string"
            }
          }
        })
      },
      getAllRawShardsInfo: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/liteserver/get_all_shards_info/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          type: "object",
          required: ["id", "proof", "data"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            proof: {
              type: "string"
            },
            data: {
              type: "string"
            }
          }
        })
      },
      getRawTransactions: async (e, t, s = {}) => {
        const r = e.toRawString(),
          o = await this.http.request({
            path: `/v2/liteserver/get_transactions/${r}`,
            method: "GET",
            query: t,
            format: "json",
            ...s
          });
        return p(o, {
          type: "object",
          required: ["ids", "transactions"],
          properties: {
            ids: {
              type: "array",
              items: {
                $ref: "#/components/schemas/BlockRaw"
              }
            },
            transactions: {
              type: "string"
            }
          }
        })
      },
      getRawListBlockTransactions: async (e, t, s = {}) => {
        var o;
        const r = await this.http.request({
          path: `/v2/liteserver/list_block_transactions/${e}`,
          method: "GET",
          query: t && {
            ...t,
            account_id: (o = t.account_id) == null ? void 0 : o.toRawString()
          },
          format: "json",
          ...s
        });
        return p(r, {
          type: "object",
          required: ["id", "req_count", "incomplete", "ids", "proof"],
          properties: {
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            req_count: {
              type: "integer",
              format: "int32"
            },
            incomplete: {
              type: "boolean"
            },
            ids: {
              type: "array",
              items: {
                type: "object",
                required: ["mode"],
                properties: {
                  mode: {
                    type: "integer",
                    format: "int32"
                  },
                  account: {
                    type: "string"
                  },
                  lt: {
                    type: "integer",
                    format: "bigint",
                    "x-js-format": "bigint"
                  },
                  hash: {
                    type: "string"
                  }
                }
              }
            },
            proof: {
              type: "string"
            }
          }
        })
      },
      getRawBlockProof: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/liteserver/get_block_proof",
          method: "GET",
          query: e,
          format: "json",
          ...t
        });
        return p(s, {
          type: "object",
          required: ["complete", "from", "to", "steps"],
          properties: {
            complete: {
              type: "boolean"
            },
            from: {
              $ref: "#/components/schemas/BlockRaw"
            },
            to: {
              $ref: "#/components/schemas/BlockRaw"
            },
            steps: {
              type: "array",
              items: {
                type: "object",
                required: ["lite_server_block_link_back", "lite_server_block_link_forward"],
                properties: {
                  lite_server_block_link_back: {
                    type: "object",
                    required: ["to_key_block", "from", "to", "dest_proof", "proof", "state_proof"],
                    properties: {
                      to_key_block: {
                        type: "boolean"
                      },
                      from: {
                        $ref: "#/components/schemas/BlockRaw"
                      },
                      to: {
                        $ref: "#/components/schemas/BlockRaw"
                      },
                      dest_proof: {
                        type: "string"
                      },
                      proof: {
                        type: "string"
                      },
                      state_proof: {
                        type: "string"
                      }
                    }
                  },
                  lite_server_block_link_forward: {
                    type: "object",
                    required: ["to_key_block", "from", "to", "dest_proof", "config_proof", "signatures"],
                    properties: {
                      to_key_block: {
                        type: "boolean"
                      },
                      from: {
                        $ref: "#/components/schemas/BlockRaw"
                      },
                      to: {
                        $ref: "#/components/schemas/BlockRaw"
                      },
                      dest_proof: {
                        type: "string"
                      },
                      config_proof: {
                        type: "string"
                      },
                      signatures: {
                        type: "object",
                        required: ["validator_set_hash", "catchain_seqno", "signatures"],
                        properties: {
                          validator_set_hash: {
                            type: "integer",
                            format: "int64"
                          },
                          catchain_seqno: {
                            type: "integer",
                            format: "int32"
                          },
                          signatures: {
                            type: "array",
                            items: {
                              type: "object",
                              required: ["node_id_short", "signature"],
                              properties: {
                                node_id_short: {
                                  type: "string"
                                },
                                signature: {
                                  type: "string"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        })
      },
      getRawConfig: async (e, t, s = {}) => {
        const r = await this.http.request({
          path: `/v2/liteserver/get_config_all/${e}`,
          method: "GET",
          query: t,
          format: "json",
          ...s
        });
        return p(r, {
          type: "object",
          required: ["mode", "id", "state_proof", "config_proof"],
          properties: {
            mode: {
              type: "integer",
              format: "int32"
            },
            id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            state_proof: {
              type: "string"
            },
            config_proof: {
              type: "string"
            }
          }
        })
      },
      getRawShardBlockProof: async (e, t = {}) => {
        const s = await this.http.request({
          path: `/v2/liteserver/get_shard_block_proof/${e}`,
          method: "GET",
          format: "json",
          ...t
        });
        return p(s, {
          type: "object",
          required: ["masterchain_id", "links"],
          properties: {
            masterchain_id: {
              $ref: "#/components/schemas/BlockRaw"
            },
            links: {
              type: "array",
              items: {
                type: "object",
                required: ["id", "proof"],
                properties: {
                  id: {
                    $ref: "#/components/schemas/BlockRaw"
                  },
                  proof: {
                    type: "string"
                  }
                }
              }
            }
          }
        })
      },
      getOutMsgQueueSizes: async (e = {}) => {
        const t = await this.http.request({
          path: "/v2/liteserver/get_out_msg_queue_sizes",
          method: "GET",
          format: "json",
          ...e
        });
        return p(t, {
          type: "object",
          required: ["ext_msg_queue_size_limit", "shards"],
          properties: {
            ext_msg_queue_size_limit: {
              type: "integer",
              format: "uint32"
            },
            shards: {
              type: "array",
              items: {
                type: "object",
                required: ["id", "size"],
                properties: {
                  id: {
                    $ref: "#/components/schemas/BlockRaw"
                  },
                  size: {
                    type: "integer",
                    format: "uint32"
                  }
                }
              }
            }
          }
        })
      }
    });
    f(this, "multisig", {
      getMultisigAccount: async (e, t = {}) => {
        const s = e.toRawString(),
          r = await this.http.request({
            path: `/v2/multisig/${s}`,
            method: "GET",
            format: "json",
            ...t
          });
        return p(r, {
          $ref: "#/components/schemas/Multisig"
        })
      }
    });
    f(this, "emulation", {
      decodeMessage: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/message/decode",
          method: "POST",
          body: se(e, {
            type: "object",
            required: ["boc"],
            properties: {
              boc: {
                type: "string",
                format: "cell"
              }
            }
          }),
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/DecodedMessage"
        })
      },
      emulateMessageToEvent: async (e, t, s = {}) => {
        const r = await this.http.request({
          path: "/v2/events/emulate",
          method: "POST",
          query: t,
          body: se(e, {
            type: "object",
            required: ["boc"],
            properties: {
              boc: {
                type: "string",
                format: "cell"
              }
            }
          }),
          format: "json",
          ...s
        });
        return p(r, {
          $ref: "#/components/schemas/Event"
        })
      },
      emulateMessageToTrace: async (e, t, s = {}) => {
        const r = await this.http.request({
          path: "/v2/traces/emulate",
          method: "POST",
          query: t,
          body: se(e, {
            type: "object",
            required: ["boc"],
            properties: {
              boc: {
                type: "string",
                format: "cell"
              }
            }
          }),
          format: "json",
          ...s
        });
        return p(r, {
          $ref: "#/components/schemas/Trace"
        })
      },
      emulateMessageToWallet: async (e, t = {}) => {
        const s = await this.http.request({
          path: "/v2/wallet/emulate",
          method: "POST",
          body: se(e, {
            type: "object",
            required: ["boc"],
            properties: {
              boc: {
                type: "string",
                format: "cell"
              },
              params: {
                type: "array",
                items: {
                  type: "object",
                  required: ["address"],
                  properties: {
                    address: {
                      type: "string",
                      format: "address"
                    },
                    balance: {
                      type: "integer",
                      format: "bigint",
                      "x-js-format": "bigint"
                    }
                  }
                }
              }
            }
          }),
          format: "json",
          ...t
        });
        return p(s, {
          $ref: "#/components/schemas/MessageConsequences"
        })
      },
      emulateMessageToAccountEvent: async (e, t, s, r = {}) => {
        const o = e.toRawString(),
          a = await this.http.request({
            path: `/v2/accounts/${o}/events/emulate`,
            method: "POST",
            query: s,
            body: se(t, {
              type: "object",
              required: ["boc"],
              properties: {
                boc: {
                  type: "string",
                  format: "cell"
                }
              }
            }),
            format: "json",
            ...r
          });
        return p(a, {
          $ref: "#/components/schemas/AccountEvent"
        })
      }
    });
    this.http = e
  }
};
Vs = z.Api = oo;
var ao = class {
  constructor(n) {
    this.tonapi = n
  }
  open(n) {
    return $.openContract(n, e => Ut(this.tonapi, e.address, e.init))
  }
  provider(n, e) {
    return Ut(this.tonapi, n, e || null)
  }
};

function Ut(n, e, t) {
  return {
    async getState() {
      const s = await n.blockchain.getBlockchainRawAccount(e).catch(async a => {
          const i = await a.json();
          if (i.error === "entity not found") return {
            address: e,
            balance: 0n,
            lastTransactionLt: void 0,
            status: kt.Uninit,
            storage: {
              usedCells: 1,
              usedBits: 95,
              usedPublicCells: 0,
              lastPaid: Math.floor(new Date().getTime() / 1e3),
              duePayment: 0n
            }
          };
          throw new Error("Account request failed: ", i.error)
        }),
        r = s.lastTransactionHash !== void 0 && s.lastTransactionLt !== void 0 ? {
          lt: s.lastTransactionLt,
          hash: Fn.from(s.lastTransactionHash, "base64")
        } : null,
        o = {
          active: a => {
            var i, c;
            return {
              type: "active",
              code: ((i = a.code) == null ? void 0 : i.toBoc()) ?? null,
              data: ((c = a.data) == null ? void 0 : c.toBoc()) ?? null
            }
          },
          uninit: () => ({
            type: "uninit"
          }),
          nonexist: () => ({
            type: "uninit"
          }),
          frozen: () => {
            throw new Error("Frozen accounts are not supported by TonApi")
          }
        };
      return {
        balance: s.balance,
        last: r,
        state: o[s.status](s)
      }
    },
    async get(s, r) {
      if (r.some(a => a.type === "tuple")) throw new Error("Tuples as get parameters are not supported by tonapi");
      const o = await n.blockchain.execGetMethodForBlockchainAccount(e, s, {
        args: r.map(io)
      });
      return {
        stack: new $.TupleReader(o.stack)
      }
    },
    async external(s) {
      let r = null;
      t && (await n.accounts.getAccount(e)).status !== "active" && (r = t);
      const o = $.external({
          to: e,
          init: r ? {
            code: r.code,
            data: r.data
          } : null,
          body: s
        }),
        a = $.beginCell().store($.storeMessage(o)).endCell();
      await n.blockchain.sendBlockchainMessage({
        boc: a
      })
    },
    async internal(s, r) {
      let o = null;
      t && (await n.accounts.getAccount(e)).status !== "active" && (o = t);
      let a = !0;
      r.bounce !== null && r.bounce !== void 0 && (a = r.bounce);
      let i;
      typeof r.value == "string" ? i = $.toNano(r.value) : i = r.value;
      let c = null;
      typeof r.body == "string" ? c = $.comment(r.body) : r.body && (c = r.body), await s.send({
        to: e,
        value: i,
        bounce: a,
        sendMode: r.sendMode,
        init: o,
        body: c
      })
    },
    open(s) {
      return $.openContract(s, r => Ut(n, r.address, r.init))
    },
    getTransactions(s, r, o, a) {
      return console.info("hash param in getTransactions action ignored, beacause not supported", o.toString("hex")), n.blockchain.getBlockchainAccountTransactions(s, {
        before_lt: r + 1n,
        limit: a
      }).then(({
        transactions: i
      }) => i.map(c => $.loadTransaction(c.raw.asSlice())))
    }
  }
}

function io(n) {
  switch (n.type) {
    case "int":
      return "0x" + n.value.toString(16);
    case "nan":
      return "NaN";
    case "null":
      return "Null";
    case "cell":
    case "builder":
      return n.cell.toBoc().toString("base64");
    case "slice":
      return n.cell.toBoc().toString("hex");
    case "tuple":
      throw new Error("Tuple is not supported in TonApi get method parameters");
    default:
      throw new Error(`Unknown type ${n.type}`)
  }
}
var Ee = {};
Object.defineProperty(Ee, "__esModule", {
  value: !0
});
Ee.defer = Zs = Ee.internalOnchainContentToCell = Ee.sleep = void 0;
const ye = $,
  co = xn();

function po(n) {
  return new Promise(e => {
    setTimeout(() => e(), n)
  })
}
Ee.sleep = po;

function lo(n) {
  const e = ye.Dictionary.empty(ye.Dictionary.Keys.Buffer(32), ye.Dictionary.Values.Cell());
  for (const t in n) {
    if (n[t] === void 0) continue;
    const s = (0, ye.beginCell)();
    if (t === "image_data") {
      const r = ye.Dictionary.empty(ye.Dictionary.Keys.Uint(32), ye.Dictionary.Values.Cell()),
        o = we.from(n[t], "base64");
      for (let a = 0; a * 127 < o.length; a++) r.set(a, (0, ye.beginCell)().storeBuffer(o.subarray(a * 127, (a + 1) * 127)).endCell());
      s.storeUint(1, 8).storeDict(r).endCell()
    } else s.storeUint(0, 8).storeStringTail(n[t].toString());
    e.set((0, co.sha256_sync)(t), s.endCell())
  }
  return (0, ye.beginCell)().storeUint(0, 8).storeDict(e).endCell()
}
var Zs = Ee.internalOnchainContentToCell = lo;

function mo(n) {
  return (...e) => n(...e)
}
Ee.defer = mo;

function O(n, e) {
  if (!{}.hasOwnProperty.call(n, e)) throw new TypeError("attempted to use private field on non-instance");
  return n
}
var uo = 0;

function me(n) {
  return "__private_" + uo++ + "_" + n
}
var ho = function() {
    function n(t) {
      this.api = void 0, this.adapter = void 0;
      var s = new Ys(t);
      this.api = new Vs(s), this.adapter = new ao(this.api)
    }
    var e = n.prototype;
    return e.open = function(t) {
      return this.adapter.open(t)
    }, e.isContractDeployed = function(t) {
      try {
        return Promise.resolve(this.api.accounts.getAccount(t)).then(function(s) {
          return s.status === kt.Active
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, n
  }(),
  Q = function() {};
Q.deployGas = $.toNano(.02), Q.initialGas = $.toNano(.015), Q.buyGas = $.toNano(.08), Q.sellNotificationGas = $.toNano(.02), Q.sellGas = $.toNano(.05), Q.unlockGas = $.toNano(.05), Q.buyForward = $.toNano(.04);
var Xs = function() {};
Xs.buy = 2943683892;
var en = function() {
    function n(t, s) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = s
    }
    n.createFromAddress = function(t) {
      return new n(t)
    };
    var e = n.prototype;
    return e.getWalletAddress = function(t, s) {
      try {
        return Promise.resolve(t.get("get_wallet_address", [{
          type: "slice",
          cell: $.beginCell().storeAddress(s).endCell()
        }])).then(function(r) {
          return r.stack.readAddress()
        })
      } catch (r) {
        return Promise.reject(r)
      }
    }, e.getJettonData = function(t) {
      try {
        return Promise.resolve(t.get("get_jetton_data", [])).then(function(s) {
          return {
            totalSupply: s.stack.readBigNumber(),
            mintable: s.stack.readBoolean(),
            adminAddress: s.stack.readAddressOpt(),
            content: s.stack.readCell(),
            walletCode: s.stack.readCell()
          }
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getTotalSupply = function(t) {
      try {
        return Promise.resolve(this.getJettonData(t)).then(function(s) {
          return s.totalSupply
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.sendBuy = function(t, s, r, o, a, i, c) {
      a === void 0 && (a = null), i === void 0 && (i = null), c === void 0 && (c = 0);
      try {
        return Promise.resolve(t.internal(s, {
          value: r + Q.buyGas,
          body: $.beginCell().storeUint(Xs.buy, 32).storeUint(c, 64).storeCoins(o).storeAddress(a).storeMaybeRef(i).endCell()
        })).then(function() {})
      } catch (h) {
        return Promise.reject(h)
      }
    }, n
  }(),
  dt = function() {};
dt.sell = 1948989144, dt.unlock = 4043133115;
var Dt = function() {
    function n(t, s) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = s
    }
    n.createFromAddress = function(t) {
      return new n(t)
    }, n.sellMessage = function(t, s, r, o) {
      return r === void 0 && (r = null), o === void 0 && (o = 0), $.beginCell().storeUint(dt.sell, 32).storeUint(o, 64).storeCoins(t).storeCoins(s).storeMaybeRef(r).endCell()
    }, n.unlockMessage = function(t) {
      return t === void 0 && (t = 0), $.beginCell().storeUint(dt.unlock, 32).storeUint(t, 64).endCell()
    };
    var e = n.prototype;
    return e.getUnlocked = function(t) {
      try {
        return Promise.resolve(t.getState()).then(function(s) {
          return s.state.type === "active" && Promise.resolve(t.get("get_unlocked", [])).then(function(r) {
            return r.stack.readBoolean()
          })
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.sendSell = function(t, s, r, o, a, i, c) {
      i === void 0 && (i = null), c === void 0 && (c = 0);
      try {
        return Promise.resolve(t.internal(s, {
          sendMode: $.SendMode.PAY_GAS_SEPARATELY,
          body: n.sellMessage(o, a, i, c),
          value: r
        })).then(function() {})
      } catch (h) {
        return Promise.reject(h)
      }
    }, e.sendUnlock = function(t, s, r) {
      r === void 0 && (r = 0);
      try {
        return Promise.resolve(t.internal(s, {
          sendMode: $.SendMode.PAY_GAS_SEPARATELY,
          body: n.unlockMessage(r),
          value: Q.unlockGas
        })).then(function() {})
      } catch (o) {
        return Promise.reject(o)
      }
    }, n
  }(),
  tn = 1000000000000000000n,
  Ce = me("curveA"),
  Gt = me("sqrt"),
  We = me("f"),
  fe = me("fReverse"),
  It = me("fromNano"),
  yo = function() {
    function n(t) {
      t === void 0 && (t = !1), Object.defineProperty(this, It, {
        value: bo
      }), Object.defineProperty(this, fe, {
        value: _o
      }), Object.defineProperty(this, We, {
        value: go
      }), Object.defineProperty(this, Gt, {
        value: fo
      }), this.thresholdTons = void 0, this.thresholdSupply = void 0, Object.defineProperty(this, Ce, {
        writable: !0,
        value: void 0
      }), this.thresholdTons = t ? 2500000000n : 1833000000000n, this.thresholdSupply = t ? 800000000000000000n : 799999999998688507n, O(this, Ce)[Ce] = t ? 16000000000000n : 590892876676n
    }
    var e = n.prototype;
    return e.tonSupply = function(t) {
      return O(this, fe)[fe](t)
    }, e.calculateJettonAmount = function(t, s) {
      var r = O(this, fe)[fe](t);
      return O(this, We)[We](r + s) - O(this, We)[We](r)
    }, e.calculateTonAmount = function(t, s) {
      return O(this, fe)[fe](t) - O(this, fe)[fe](t - s)
    }, e.calculateBuyAmount = function(t, s, r) {
      var o = this.calculateJettonAmount(t, s * (10000n - r) / 10000n);
      return o + t > this.thresholdSupply ? this.thresholdSupply - t : o
    }, e.calculateSellAmount = function(t, s, r) {
      return this.calculateTonAmount(t, s) * (10000n - r) / 10000n
    }, e.calculatePrice = function(t) {
      var s = 1e9,
        r = this.calculateJettonAmount(t, BigInt(s));
      return s / Number(r)
    }, e.calculateMarketCap = function(t) {
      return this.calculatePrice(t) * O(this, It)[It](tn)
    }, n
  }();

function fo(n) {
  for (var e = n, t = e + 1n >> 1n; t < e;) t = (e = t) + n / e >> 1n;
  return e
}

function go(n) {
  if (n == 0n) return 0n;
  var e = 10n ** 9n;
  return O(this, Gt)[Gt](n * e * e) * O(this, Ce)[Ce] / e
}

function _o(n) {
  if (n == 0n) return 0n;
  var e = 10n ** 9n;
  return n ** 2n * e / O(this, Ce)[Ce] ** 2n / e
}

function bo(n) {
  return Number(n) / 10 ** 9
}
var Lt, sn = function() {};
sn.deployJetton = 3637132459,
  function(n) {
    n[n.STONFI = 0] = "STONFI", n[n.DEDUST = 1] = "DEDUST"
  }(Lt || (Lt = {}));
var Ts = function() {
    function n(t, s) {
      this.address = void 0, this.init = void 0, this.address = t, this.init = s
    }
    n.createFromAddress = function(t) {
      return new n(t)
    };
    var e = n.prototype;
    return e.sendDeployJetton = function(t, s, r, o, a, i, c, h) {
      c === void 0 && (c = null), h === void 0 && (h = 0);
      try {
        return i === void 0 && (i = 0n), Promise.resolve(t.internal(s, {
          value: r,
          body: $.beginCell().storeUint(sn.deployJetton, 32).storeUint(h, 64).storeUint(o, 1).storeRef(a).storeCoins(i).storeMaybeRef(c).endCell()
        })).then(function() {})
      } catch (g) {
        return Promise.reject(g)
      }
    }, e.getConfig = function(t) {
      try {
        return Promise.resolve(t.get("get_config", [])).then(function(s) {
          return {
            admin: s.stack.readAddress(),
            jettonAdmin: s.stack.readAddress(),
            feeRecipient: s.stack.readAddress(),
            deployFee: s.stack.readBigNumber(),
            buyFeeBasis: s.stack.readBigNumber(),
            sellFeeBasis: s.stack.readBigNumber(),
            liquidityFee: s.stack.readBigNumber(),
            minterCodeStonFi: s.stack.readCell(),
            minterCodeDeDust: s.stack.readCell(),
            walletCode: s.stack.readCell()
          }
        })
      } catch (s) {
        return Promise.reject(s)
      }
    }, n
  }(),
  vo = function(n) {
    try {
      var e, t = this,
        s = {
          send: function(r) {
            return e = r, Promise.resolve()
          }
        };
      return Promise.resolve(n(s)).then(function() {
        var r, o = {
          address: e.to.toString(),
          amount: e.value.toString(),
          stateInit: void 0,
          payload: (r = e.body) == null ? void 0 : r.toBoc().toString("base64")
        };
        return e.init && (o.stateInit = $.beginCell().store($.storeStateInit(e.init)).endCell().toBoc().toString("base64")), {
          validUntil: Date.now() + 3e5,
          network: O(t, ze)[ze] ? hs.TESTNET : hs.MAINNET,
          messages: [o]
        }
      })
    } catch (r) {
      return Promise.reject(r)
    }
  },
  ze = me("testnet"),
  te = me("tokenomics"),
  ge = me("request"),
  Ae = me("minterContractFromAddress"),
  Nt = me("walletContractFromAddress"),
  ko = function() {
    function n(t, s, r) {
      s === void 0 && (s = !1), r === void 0 && (r = !1), Object.defineProperty(this, Nt, {
        value: To
      }), Object.defineProperty(this, Ae, {
        value: wo
      }), Object.defineProperty(this, ge, {
        value: vo
      }), Object.defineProperty(this, ze, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, te, {
        writable: !0,
        value: void 0
      }), this.client = void 0, O(this, ze)[ze] = s, O(this, te)[te] = new yo(r), this.client = new ho({
        baseUrl: s ? "https://testnet.tonapi.io" : "https://tonapi.io",
        apiKey: t
      })
    }
    var e = n.prototype;
    return e.sendDeployJetton = function(t, s, r, o, a, i, c) {
      i === void 0 && (i = null), c === void 0 && (c = 0);
      try {
        var h = this.client.open(Ts.createFromAddress(s));
        return Promise.resolve(h.getConfig()).then(function(g) {
          var E = g.deployFee + Q.deployGas + (a == 0n ? Q.initialGas : a + Q.buyGas),
            v = Zs(o);
          return Promise.resolve(h.sendDeployJetton(t, E, r, v, a, i, c)).then(function() {})
        })
      } catch (g) {
        return Promise.reject(g)
      }
    }, e.sendBuy = function(t, s, r, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      try {
        return Promise.resolve(O(this, Ae)[Ae](s).sendBuy(t, r, o, null, a, i)).then(function() {})
      } catch (c) {
        return Promise.reject(c)
      }
    }, e.sendSell = function(t, s, r, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      try {
        var c = Dt.createFromAddress(s),
          h = this.client.open(c);
        return Promise.resolve(h.sendSell(t, Q.sellGas, r, o, a, i)).then(function() {})
      } catch (g) {
        return Promise.reject(g)
      }
    }, e.sendUnlock = function(t, s, r) {
      r === void 0 && (r = 0);
      try {
        var o = Dt.createFromAddress(s),
          a = this.client.open(o);
        return Promise.resolve(a.sendUnlock(t, r)).then(function() {})
      } catch (i) {
        return Promise.reject(i)
      }
    }, e.getThresholdTons = function() {
      return O(this, te)[te].thresholdTons
    }, e.getTonSupply = function(t) {
      return O(this, te)[te].tonSupply(t)
    }, e.getMaxSupply = function() {
      return tn
    }, e.getThresholdSupply = function() {
      return O(this, te)[te].thresholdSupply
    }, e.getPrice = function(t) {
      return O(this, te)[te].calculatePrice(t)
    }, e.getMarketCap = function(t) {
      return O(this, te)[te].calculateMarketCap(t)
    }, e.getBuyAmount = function(t, s, r) {
      return O(this, te)[te].calculateBuyAmount(t, s, r)
    }, e.getSellAmount = function(t, s, r) {
      return O(this, te)[te].calculateSellAmount(t, s, r)
    }, e.getWalletAddress = function(t, s) {
      try {
        return Promise.resolve(O(this, Ae)[Ae](t).getWalletAddress(s))
      } catch (r) {
        return Promise.reject(r)
      }
    }, e.getTotalSupply = function(t) {
      try {
        return Promise.resolve(O(this, Ae)[Ae](t).getTotalSupply())
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getUnlocked = function(t) {
      try {
        return Promise.resolve(O(this, Nt)[Nt](t).getUnlocked())
      } catch (s) {
        return Promise.reject(s)
      }
    }, e.getDeployJettonRequest = function(t, s, r, o, a, i) {
      a === void 0 && (a = null), i === void 0 && (i = 0);
      try {
        var c = this;
        return Promise.resolve(O(c, ge)[ge](function(h) {
          return c.sendDeployJetton(h, t, s, r, o, a, i)
        }))
      } catch (h) {
        return Promise.reject(h)
      }
    }, e.getBuyRequest = function(t, s, r, o, a) {
      o === void 0 && (o = null), a === void 0 && (a = 0);
      try {
        var i = this;
        return Promise.resolve(O(i, ge)[ge](function(c) {
          return i.sendBuy(c, t, s, r, o, a)
        }))
      } catch (c) {
        return Promise.reject(c)
      }
    }, e.getSellRequest = function(t, s, r, o, a) {
      o === void 0 && (o = null), a === void 0 && (a = 0);
      try {
        var i = this;
        return Promise.resolve(O(i, ge)[ge](function(c) {
          return i.sendSell(c, t, s, r, o, a)
        }))
      } catch (c) {
        return Promise.reject(c)
      }
    }, e.getUnlockRequest = function(t, s) {
      s === void 0 && (s = 0);
      try {
        var r = this;
        return Promise.resolve(O(r, ge)[ge](function(o) {
          return r.sendUnlock(o, t, s)
        }))
      } catch (o) {
        return Promise.reject(o)
      }
    }, e.getJettonWalletAddress = function(t, s) {
      try {
        var r = this.client.open(en.createFromAddress(t));
        return Promise.resolve(r.getWalletAddress(s))
      } catch (o) {
        return Promise.reject(o)
      }
    }, e.getFactoryConfig = function(t) {
      try {
        var s = this.client.open(Ts.createFromAddress(t));
        return Promise.resolve(s.getConfig())
      } catch (r) {
        return Promise.reject(r)
      }
    }, n
  }();

function wo(n) {
  var e = en.createFromAddress(n);
  return this.client.open(e)
}

function To(n) {
  var e = Dt.createFromAddress(n);
  return this.client.open(e)
}
const nn = () => {
    const {
      getAddress: n,
      tonConnectSender: e,
      createGetWaitForLaunchStatusUntilOk: t
    } = Ue(), {
      TON_API_TOKEN: s,
      getTransactionStatus: r
    } = Ht(), {
      getMinReceive: o,
      wrapWithCache: a,
      memepadApi: i
    } = ft(), c = new ko(s, !1, !0), h = m => +String(m) / 1e4, g = {
      LAUNCH_STATUS_CHECK: 6e3,
      BUY_STATUS_CHECK: 6e3,
      SELL_STATUS_CHECK: 6e3,
      UNLOCK_STATUS_CHECK: 6e3
    }, E = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: j(Q.buyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: j(Q.sellGas),
      MEMEPAD_JETTON_LAUNCH_NETWORK_FEE: j(Q.deployGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: j(Q.unlockGas)
    }, v = {
      LAUNCH_FEE: new C(.0114),
      LAUNCH_BUY_FEE: new C(.012),
      BUY_FEE: new C(.0062),
      SELL_FEE: new C(.0044),
      UNLOCK_FEE: new C(.0037)
    }, T = {
      buyNetworkFee: E.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: E.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      launchNetworkFee: E.MEMEPAD_JETTON_LAUNCH_NETWORK_FEE,
      unlockNetworkFee: E.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE,
      walletNetworkLaunchFee: v.LAUNCH_FEE,
      walletNetworkLaunchBuyFee: v.LAUNCH_BUY_FEE,
      walletNetworkBuyFee: v.BUY_FEE,
      walletNetworkSellFee: v.SELL_FEE,
      walletNetworkUnlockFee: v.UNLOCK_FEE
    }, P = ({
      referrerToken: m
    }) => $.beginCell().storeUint(1675682413, 32).storeStringTail(m).endCell(), U = async m => {
      const l = await V(async () => await c.getTotalSupply(n(m)))();
      return q(l) ? G(j(l.data)) : l
    }, L = a(({
      masterAddress: m
    }) => `blumSdk:factoryConfig:${m.toString()}`, async ({
      masterAddress: m
    }) => {
      const l = await V(async () => await c.getFactoryConfig(n(m)))();
      return q(l) ? G(l.data) : l
    }), X = a(({
      masterAddress: m
    }) => `blumSdk:bclData:${m.toString()}`, async ({
      masterAddress: m
    }) => {
      const l = j(c.getThresholdSupply()),
        d = j(c.getMaxSupply()),
        y = d.minus(l),
        u = j(c.getThresholdTons()),
        _ = await L({
          masterAddress: m
        });
      if (!q(_)) return _;
      const {
        buyFeeBasis: k
      } = _.data, A = u.plus(u.times(h(k))), R = _.data;
      return G({
        tokenForDexWithFees: A,
        tokenForDex: u,
        bclSupply: l,
        maxSupply: d,
        liqSupply: y,
        factoryConfig: R
      })
    }), Y = async ({
      jettonAddress: m,
      masterAddress: l
    }) => {
      const d = await X({
        masterAddress: l
      });
      if (!q(d)) return d;
      const {
        bclSupply: y,
        tokenForDex: u,
        liqSupply: _
      } = d.data, k = await U(m);
      if (!q(k)) return k;
      const A = k.data,
        R = new C(y).minus(A),
        M = j(c.getTonSupply(W(A))),
        J = M.div(u).times(100);
      return G({
        tokenForDex: u,
        tokenCollected: M,
        tokenCollectedPercent: J,
        bclSupply: y,
        liqSupply: _,
        totalSupply: A,
        availableSupply: R
      })
    }, de = async ({
      masterAddress: m,
      tons: l
    }) => {
      const d = W(new C(l)),
        y = await X({
          masterAddress: m
        });
      if (!q(y)) return y;
      const {
        tokenForDex: u,
        bclSupply: _,
        tokenForDexWithFees: k,
        maxSupply: A
      } = y.data, R = await L({
        masterAddress: m
      });
      if (!q(R)) return R;
      const {
        buyFeeBasis: M
      } = R.data, J = j(c.getBuyAmount(0n, d, M)), re = J, oe = J, be = _.minus(re), Le = j(c.getTonSupply(W(re))), et = new C(c.getPrice(W(re))), Ct = new C(et).times(A), Je = Le.div(u).times(100), gn = J.div(_).times(100), _n = new C(l).minus(Le);
      return G({
        share: new C(l),
        tokenForDexWithFees: k,
        tokenForDex: u,
        tokenCollected: Le,
        availableSupply: be,
        maxSupply: A,
        tokenCollectedPercent: Je,
        jettonReceivePercent: gn,
        priceToken: et,
        marketCapToken: Ct,
        platformFee: _n,
        minReceive: oe,
        bclData: y.data
      })
    }, ue = a(({
      jettonAddress: m,
      userAddress: l
    }) => `blumSdk:jettonWalletAddress:${m.toString()}:${l.toString()}`, async ({
      jettonAddress: m,
      userAddress: l
    }) => await V(async () => await c.getJettonWalletAddress(n(m), n(l)))()), he = async ({
      masterAddress: m,
      form: l,
      tonConnectUI: d,
      referrerToken: y
    }) => {
      const u = Ls(l, yt.STONFI),
        _ = await i.saveMemepadJettonInfo(u);
      if (!q(_)) return _;
      const k = e(d),
        A = _.data.queryId,
        R = Lt.STONFI,
        M = {
          name: l.name,
          description: l.description,
          image: lt(l.iconFileKey),
          symbol: l.ticker,
          decimals: 9
        };
      u.socials.length && (M.social_links = JSON.stringify(u.socials.map(be => be.url))), u.bannerFileKey && (M.cover_image = lt(u.bannerFileKey));
      const J = y ? P({
          referrerToken: y
        }) : void 0,
        re = await V(async () => await c.sendDeployJetton(k, n(m), R, M, W(new C(l.share)), J, A))();
      if (!q(re)) return re;
      const oe = (await k.getResult()).hash;
      return G({
        queryId: A,
        transactionHash: oe
      })
    }, D = t(r, g.LAUNCH_STATUS_CHECK), ee = async ({
      tons: m,
      jettonAddress: l,
      masterAddress: d
    }) => {
      const y = await U(l);
      if (!q(y)) return y;
      const u = y.data,
        _ = await L({
          masterAddress: d
        });
      if (!q(_)) return _;
      const {
        buyFeeBasis: k
      } = _.data, A = j(c.getBuyAmount(W(u), W(m), k)), R = A, M = o(A), J = m.times(h(k));
      return G({
        maxReceive: R,
        minReceive: M,
        platformFee: J,
        additionalInfo: void 0
      })
    }, pe = async ({
      jettons: m,
      jettonAddress: l,
      masterAddress: d
    }) => {
      const y = await U(l);
      if (!q(y)) return y;
      const u = y.data,
        _ = await L({
          masterAddress: d
        });
      if (!q(_)) return _;
      const {
        sellFeeBasis: k
      } = _.data, A = j(c.getSellAmount(W(u), W(m), k)), R = A, M = o(A), J = A.div(1 - h(k)).minus(A);
      return G({
        maxReceive: R,
        minReceive: M,
        platformFee: J,
        additionalInfo: void 0
      })
    }, rs = async ({
      tons: m,
      jettonAddress: l,
      tradeInfoParams: d,
      tonConnectUI: y,
      referrerToken: u
    }) => {
      const _ = e(y),
        k = u ? P({
          referrerToken: u
        }) : void 0,
        A = await V(async () => await c.sendBuy(_, n(l), W(m), W(d.minReceive), k))();
      return q(A) ? G((await _.getResult()).hash) : A
    }, os = async ({
      jettons: m,
      jettonAddress: l,
      tradeInfoParams: d,
      userAddress: y,
      tonConnectUI: u,
      referrerToken: _
    }) => {
      const k = e(u),
        A = _ ? P({
          referrerToken: _
        }) : void 0,
        R = await ue({
          jettonAddress: l,
          userAddress: y
        });
      if (!q(R)) return R;
      const M = R.data,
        J = await V(async () => await c.sendSell(k, M, W(m), W(d.minReceive), A))();
      return q(J) ? G((await k.getResult()).hash) : J
    }, as = () => xe(({
      transactionHash: m
    }) => r({
      transactionHash: m
    }), () => {}, g.BUY_STATUS_CHECK), is = () => xe(({
      transactionHash: m
    }) => r({
      transactionHash: m
    }), () => {}, g.SELL_STATUS_CHECK), cs = async ({
      jettonAddress: m,
      userAddress: l
    }) => {
      const d = await ue({
        jettonAddress: m,
        userAddress: l
      });
      if (!q(d)) return d;
      const y = d.data,
        u = await V(async () => await c.getUnlocked(y))();
      if (!q(u)) return u;
      const _ = !u.data;
      return G(_)
    }, ps = async ({
      jettonAddress: m,
      userAddress: l,
      tonConnectUI: d
    }) => {
      const y = e(d),
        u = await ue({
          jettonAddress: m,
          userAddress: l
        });
      if (!q(u)) return u;
      const _ = u.data,
        k = await V(async () => await c.sendUnlock(y, _))();
      return q(k) ? G((await y.getResult()).hash) : k
    }, Et = ({
      transactionHash: m
    }) => r({
      transactionHash: m
    });
    return {
      getJettonTotalSupply: U,
      getFactoryConfig: L,
      getBclData: X,
      createJetton: he,
      getUnlockEnabled: cs,
      unlockWallet: ps,
      getJettonOverview: de,
      getJettonBclData: Y,
      getBuyInfo: ee,
      getSellInfo: pe,
      buyJetton: rs,
      sellJetton: os,
      getWaitForBuyStatus: as,
      getWaitForSellStatus: is,
      getUnlockStatus: Et,
      getWaitForUnlockStatus: () => xe(Et, () => {}, g.UNLOCK_STATUS_CHECK),
      getPriceDetails: ({
        overview: m
      }) => {
        const l = [],
          d = !m.share.isZero(),
          y = j(Q.buyGas),
          u = j(Q.deployGas).plus(d ? 0 : j(Q.initialGas)),
          _ = j(m.bclData.factoryConfig.deployFee),
          k = j(0n),
          A = j(0n),
          R = d ? A : k,
          M = u.plus(_).plus(R);
        if (l.push({
            title: F("memepad.new.price_details.launch"),
            details: [{
              highlight: !1,
              label: `${F("memepad.jetton.fees_network")}: ${ne(u)} TON`,
              value: u
            }, {
              highlight: !1,
              label: `${F("memepad.jetton.fees_wallet")}: ${ne(R)} TON`,
              value: R
            }, {
              highlight: _.isZero(),
              label: `${F("memepad.jetton.fees_platform")}: ${ne(_)} TON`,
              value: _
            }],
            label: `${ne(M)} TON`,
            total: M
          }), d) {
          const oe = new C(m.share.plus(y));
          l.push({
            title: `${F("base.share")} ${Js(m.jettonReceivePercent)}%`,
            details: [{
              highlight: !1,
              label: `${F("memepad.jetton.fees_network")}: ${ne(y)} TON`,
              value: y
            }, {
              highlight: !1,
              label: `${F("memepad.jetton.fees_platform")}: ${ne(m.platformFee)} TON`,
              value: m.platformFee
            }],
            label: `${ne(oe)} TON`,
            total: oe
          })
        }
        const J = l.reduce((oe, be) => oe.plus(be.total), new C(0)),
          re = {
            title: F("memepad.new.price_details.total_label"),
            label: `${ne(J)} TON`,
            value: J
          };
        return {
          tokenCollected: m.tokenCollected,
          tokenCollectedPercent: m.tokenCollectedPercent,
          sections: l,
          totalSection: re,
          total: J
        }
      },
      getWaitForCreateStatus: D,
      fees: T
    }
  },
  So = ({
    addresses: n,
    tonBalance: e
  }) => {
    var v;
    if (!n) return;
    const {
      createGetShareInfo: t
    } = Ue(), {
      getPriceDetails: s,
      getJettonOverview: r,
      createJetton: o,
      getWaitForCreateStatus: a,
      fees: i
    } = nn(), c = n.masterAddresses[yt.STONFI], h = Ye().tonConnectUI.value, g = t({
      getFees: () => i
    }), E = (v = Gs().getters.getUser.value) == null ? void 0 : v.referrerToken;
    return {
      getPriceDetails: ({
        overview: T
      }) => s({
        overview: T
      }),
      getJettonOverview: ({
        tons: T
      }) => r({
        tons: T,
        masterAddress: c
      }),
      createJetton: ({
        form: T
      }) => o({
        form: T,
        masterAddress: c,
        tonConnectUI: h,
        referrerToken: E
      }),
      getWaitForCreateStatus: () => a(),
      getShareInfo: ({
        overview: T,
        share: P,
        loading: U,
        jettonTicker: x
      }) => g({
        overview: T,
        share: P,
        loading: U,
        jettonTicker: x,
        tonBalance: e
      })
    }
  },
  jo = ({
    jetton: n,
    tonBalance: e,
    jettonBalance: t
  }) => {
    var he;
    const {
      mustGetUserWalletAddress: s,
      getTradeStateControls: r,
      createGetUnlockInfo: o
    } = Ue(), {
      getUserJettonBalance: a
    } = Ht(), {
      slippage: i
    } = ft(), {
      getUnlockEnabled: c,
      getWaitForUnlockStatus: h,
      unlockWallet: g,
      buyJetton: E,
      sellJetton: v,
      getWaitForBuyStatus: T,
      getWaitForSellStatus: P,
      getBuyInfo: U,
      getSellInfo: x,
      fees: L
    } = nn(), H = n.address, X = n.masterContractAddress, Y = Ye().tonConnectUI.value, de = r(), je = o({
      getFees: () => L
    }), ue = (he = Gs().getters.getUser.value) == null ? void 0 : he.referrerToken;
    return {
      getUserJettonBalance: () => a({
        jettonAddress: H,
        userAddress: s()
      }),
      getUnlockEnabled: () => c({
        jettonAddress: H,
        userAddress: s()
      }),
      getWaitForUnlockStatus: () => h(),
      unlockWallet: () => g({
        jettonAddress: H,
        userAddress: s(),
        tonConnectUI: Y
      }),
      getUnlockInfo: () => je({
        tonBalance: e,
        jettonBalance: t
      }),
      getSlippage: () => i.value,
      updateSlippage: D => i.value = D,
      buyJetton: ({
        tons: D,
        tradeInfoParams: ee
      }) => E({
        tons: D,
        jettonAddress: H,
        tradeInfoParams: ee,
        tonConnectUI: Y,
        referrerToken: ue
      }),
      sellJetton: ({
        jettons: D,
        tradeInfoParams: ee
      }) => v({
        jettons: D,
        jettonAddress: H,
        userAddress: s(),
        tradeInfoParams: ee,
        tonConnectUI: Y,
        referrerToken: ue
      }),
      getWaitForBuyStatus: () => T(),
      getWaitForSellStatus: () => P(),
      tradeStateControls: {
        getEmptyState: ({
          operation: D
        }) => de.getEmptyState({
          tonBalance: e,
          jettonBalance: t,
          operation: D
        }),
        getImmediateState: ({
          operation: D,
          amount: ee
        }) => de.getImmediateState({
          amount: ee,
          tonBalance: e,
          jettonBalance: t,
          operation: D,
          jettonTicker: n.ticker,
          fees: L
        }),
        getState: ({
          operation: D,
          amount: ee
        }) => de.getState({
          tonBalance: e,
          jettonBalance: t,
          operation: D,
          amount: ee,
          jettonTicker: n.ticker,
          fees: L,
          getBuyInfo: ({
            tons: pe
          }) => U({
            tons: pe,
            jettonAddress: H,
            masterAddress: X
          }),
          getSellInfo: ({
            jettons: pe
          }) => x({
            jettons: pe,
            jettonAddress: H,
            masterAddress: X
          })
        })
      }
    }
  };
var ie = {},
  wt = {},
  Tt = {},
  St = {};
Object.defineProperty(St, "__esModule", {
  value: !0
});
St.normalizeCoin = Ao;
St.normalizeCoinEvent = qo;
const $e = $;

function Ao(n) {
  return {
    id: n.id,
    address: $e.Address.parse(n.address),
    metadata: n.metadata,
    totalSupply: BigInt(n.totalSupply),
    bclSupply: BigInt(n.bclSupply),
    liqSupply: BigInt(n.liqSupply),
    lastTradeDate: n.lastTradeDate,
    authorAddress: n.authorAddress === "" ? null : $e.Address.parse(n.authorAddress),
    tradingEnabled: n.tradingEnabled,
    tonLiqCollected: BigInt(n.tonLiqCollected),
    referral: n.referral,
    createdAt: n.createdAt,
    tradingCloseFee: BigInt(n.tradingCloseFee),
    routerAddress: $e.Address.parse(n.routerAddress)
  }
}

function qo(n) {
  if (n.type === "buy") return {
    type: "buy",
    trader: n.trader === "" ? null : $e.Address.parse(n.trader),
    tonValue: BigInt(n.tonValue),
    supplyDelta: BigInt(n.supplyDelta),
    newSupply: BigInt(n.newSupply),
    tonLiqCollected: BigInt(n.tonLiqCollected),
    referral: n.referral
  };
  if (n.type === "sell") return {
    type: "sell",
    trader: n.trader === "" ? null : $e.Address.parse(n.trader),
    tonValue: BigInt(n.tonValue),
    supplyDelta: BigInt(n.supplyDelta),
    newSupply: BigInt(n.newSupply),
    tonLiqCollected: BigInt(n.tonLiqCollected),
    referral: n.referral
  };
  if (n.type === "sendLiq") return {
    type: "send_liq",
    tonLiq: BigInt(n.tonLiq),
    jettonLiq: BigInt(n.jettonLiq)
  };
  if (n.type === "deployment") return {
    type: "deployment",
    metadata: n.metadata,
    totalSupply: BigInt(n.totalSupply),
    bclSupply: BigInt(n.bclSupply),
    liqSupply: BigInt(n.liqSupply),
    lastTradeDate: n.lastTradeDate,
    authorAddress: n.authorAddress === "" ? null : $e.Address.parse(n.authorAddress),
    tradingEnabled: n.tradingEnabled,
    tonLiqCollected: BigInt(n.tonLiqCollected),
    referral: n.referral,
    createdAt: n.createdAt,
    tradingCloseFee: BigInt(n.tradingCloseFee),
    routerAddress: $e.Address.parse(n.routerAddress)
  };
  throw new Error("Unknown BCL event: " + JSON.stringify(n))
}
var jt = {};
const $o = Mn(Un);
Object.defineProperty(jt, "__esModule", {
  value: !0
});
jt.OfetchHttpProvider = void 0;
const Ss = $o;
class Eo {
  get(e, t) {
    return (0, Ss.ofetch)(e, {
      query: t.query
    })
  }
  post(e, t) {
    return (0, Ss.ofetch)(e, {
      method: "POST",
      body: JSON.stringify(t)
    })
  }
}
jt.OfetchHttpProvider = Eo;
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
Tt.BclClient = void 0;
const js = $,
  nt = St,
  Co = jt;
class Bo {
  constructor(e) {
    this.fetch = async (t, s) => await this.httpProvider.get(this.endpoint + t, {
      query: s == null ? void 0 : s.query
    }), this.fetchCoins = async t => {
      const s = await this.fetch("/getCoins", {
        query: t ?? {}
      });
      return {
        items: s.items.map(nt.normalizeCoin),
        cursor: s.cursor
      }
    }, this.fetchCoin = async t => {
      let s = await this.fetch("/getCoin/" + t.toString({
        urlSafe: !0
      }));
      return (0, nt.normalizeCoin)(s)
    }, this.fetchCoinEvents = async (t, s) => {
      const r = await this.fetch("/getCoinEvents/" + t.toString({
        urlSafe: !0
      }), {
        query: s ?? {}
      });
      return {
        items: r.items.map(o => ({
          id: o.id,
          lt: BigInt(o.lt),
          txUtime: o.txUtime,
          txHash: o.txHash,
          queryId: BigInt(o.queryId),
          event: (0, nt.normalizeCoinEvent)(o.event),
          coinAddress: js.Address.parse(o.coinAddress)
        })),
        cursor: r.cursor
      }
    }, this.fetchServerEvents = async t => {
      const s = await this.fetch("/getServerEvents", {
        query: t ?? {}
      });
      return {
        items: s.items.map(r => ({
          id: r.id,
          lt: BigInt(r.lt),
          txUtime: r.txUtime,
          txHash: r.txHash,
          queryId: BigInt(r.queryId),
          event: (0, nt.normalizeCoinEvent)(r.event),
          coinAddress: js.Address.parse(r.coinAddress)
        })),
        cursor: s.cursor
      }
    }, this.endpoint = e.endpoint, this.httpProvider = e.httpProvider ?? new Co.OfetchHttpProvider
  }
}
Tt.BclClient = Bo;
var De = {},
  Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.Constants = void 0;
const rt = $;
Pe.Constants = {
  CoinDeploymentGas: (0, rt.toNano)("0.05"),
  CoinBuyGas: (0, rt.toNano)("0.05"),
  CoinSellGas: (0, rt.toNano)("0.06"),
  WalletUnlockGas: (0, rt.toNano)("0.05")
};
var Se = {};
Object.defineProperty(Se, "__esModule", {
  value: !0
});
Se.crc32 = rn;
Se.crc32str = Io;
const Po = -306674912;
let ut;

function Ro() {
  ut = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let e = n;
    for (let t = 8; t > 0; --t) e = e & 1 ? e >>> 1 ^ Po : e >>> 1;
    ut[n] = e
  }
}

function rn(n) {
  let e = 4294967295;
  ut === void 0 && Ro();
  for (let t = 0; t < n.length; ++t) e = ut[(e ^ n[t]) & 255] ^ e >>> 8;
  return (e ^ -1) >>> 0
}

function Io(n) {
  return rn(we.from(n))
}
var Qe = {};
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.BclWallet = void 0;
const ot = $,
  As = Pe,
  qs = Se;
class Qt {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Qt(e)
  }
  async getData(e) {
    const t = await e.get("get_wallet_data", []);
    return {
      balance: t.stack.readBigNumber(),
      owner: t.stack.readAddress()
    }
  }
  async sendSellCoins(e, t, s) {
    await e.internal(t, {
      value: As.Constants.CoinSellGas,
      sendMode: ot.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, ot.beginCell)().storeUint((0, qs.crc32str)("op::sell"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.amount).storeCoins(s.minReceive).storeMaybeRef(s.referral).endCell()
    })
  }
  async sendUnlockWallet(e, t, s) {
    await e.internal(t, {
      value: As.Constants.WalletUnlockGas,
      sendMode: ot.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: (0, ot.beginCell)().storeUint((0, qs.crc32str)("op::unlock_wallet"), 32).storeUint(s.queryId ?? 0, 64).endCell()
    })
  }
  async getTransfersEnabled(e) {
    return (await e.get("get_transfers_enabled", [])).stack.readBoolean()
  }
}
Qe.BclWallet = Qt;
Object.defineProperty(De, "__esModule", {
  value: !0
});
De.BclJetton = void 0;
De.parseBclEvent = Fo;
const Ot = $,
  No = Pe,
  ct = Se,
  Oo = Qe;

function Fo(n) {
  let e = n.beginParse(),
    t = e.loadUint(32);
  if (t === (0, ct.crc32str)("send_liq_log")) return {
    type: "send_liq",
    tonLiq: e.loadCoins(),
    jettonLiq: e.loadCoins()
  };
  if (t === (0, ct.crc32str)("sell_log")) return {
    type: "sell",
    trader: e.loadAddress(),
    tonValue: e.loadCoins(),
    supplyDelta: e.loadCoins(),
    newSupply: e.loadCoins(),
    tonLiqCollected: e.loadCoins(),
    referral: e.loadMaybeRef()
  };
  if (t === (0, ct.crc32str)("buy_log")) return {
    type: "buy",
    trader: e.loadAddress(),
    tonValue: e.loadCoins(),
    supplyDelta: e.loadCoins(),
    newSupply: e.loadCoins(),
    tonLiqCollected: e.loadCoins(),
    referral: e.loadMaybeRef()
  };
  throw new Error("Unknown BCL event with id: " + t.toString(16))
}
class Zt {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Zt(e)
  }
  async getData(e) {
    const t = (await e.get("get_jetton_data", [])).stack;
    return {
      totalSupply: t.readBigNumber(),
      mintable: t.readBigNumber() !== BigInt(0),
      adminAddress: t.readAddressOpt(),
      jettonContent: t.readCell(),
      jettonWalletCode: t.readCell()
    }
  }
  async getWalletAddress(e, t) {
    return (await e.get("get_wallet_address", [{
      type: "slice",
      cell: (0, Ot.beginCell)().storeAddress(t).endCell()
    }])).stack.readAddress()
  }
  async getCoinPrice(e) {
    return (await e.get("coin_price", [])).stack.readBigNumber()
  }
  async getCoinsForTons(e, t) {
    const s = await e.get("coins_for_tons", [{
      type: "int",
      value: t
    }]);
    return {
      fees: s.stack.readBigNumber(),
      coins: s.stack.readBigNumber()
    }
  }
  async getTonsForCoins(e, t) {
    const s = await e.get("tons_for_coins", [{
      type: "int",
      value: t
    }]);
    return {
      fees: s.stack.readBigNumber(),
      tons: s.stack.readBigNumber()
    }
  }
  async sendBuy(e, t, s) {
    let r = (0, Ot.beginCell)().storeUint((0, ct.crc32str)("op::buy"), 32).storeUint(s.queryId ?? 0, 64).storeCoins(s.minReceive).storeMaybeRef(s.referral);
    s.buyerAddress && r.storeAddress(s.buyerAddress), await e.internal(t, {
      value: s.tons + No.Constants.CoinBuyGas,
      sendMode: Ot.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: r.endCell()
    })
  }
  async getBclData(e) {
    const t = (await e.get("get_bcl_data", [])).stack;
    return {
      totalSupply: t.readBigNumber(),
      bclSupply: t.readBigNumber(),
      liqSupply: t.readBigNumber(),
      admin: t.readAddressOpt(),
      author: t.readAddress(),
      content: t.readCell(),
      feeAddress: t.readAddress(),
      tradeFeeNumerator: t.readNumber(),
      tradeFeeDenominator: t.readNumber(),
      ttl: t.readNumber(),
      lastTradeDate: t.readNumber(),
      tradingEnabled: t.readBoolean(),
      tonLiqCollected: t.readBigNumber(),
      referral: t.readCell(),
      tradingCloseFee: t.readBigNumber(),
      fullPriceTon: t.readBigNumber(),
      fullPriceTonFees: t.readBigNumber(),
      routerAddress: t.readAddress(),
      routerPtonWalletAddress: t.readAddress()
    }
  }
  async getUserWallet(e, t) {
    const s = await this.getWalletAddress(e, t);
    return e.open(Oo.BclWallet.createFromAddress(s))
  }
}
De.BclJetton = Zt;
var Ze = {},
  Ge = {},
  At = {};
Object.defineProperty(At, "__esModule", {
  value: !0
});
At.sha256ToBigint = void 0;
const xo = Dn(),
  Mo = n => BigInt("0x" + (0, xo.createHash)("sha256").update(n).digest().toString("hex"));
At.sha256ToBigint = Mo;
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.storeSnakeContentData = cn;
Ge.loadSnakeContentData = pn;
Ge.storeTokenOnchainContent = Do;
Ge.loadTokenOnchainContent = Go;
const ht = zs,
  Uo = At,
  on = 0,
  an = 0;

function cn(n) {
  return e => e.storeUint(an, 8).storeStringTail(n)
}

function pn(n) {
  if (n.loadUint(8) !== an) throw new Error("Not snake ContentData");
  return n.loadStringTail()
}
const ln = {
  serialize: (n, e) => {
    e.storeRef((0, ht.beginCell)().store(cn(n)).endCell())
  },
  parse: n => pn(n.loadRef().beginParse())
};

function Do(n) {
  return e => {
    const t = ht.Dictionary.empty(ht.Dictionary.Keys.BigUint(256), ln);
    for (const s in n) n[s] && t.set((0, Uo.sha256ToBigint)(s), n[s]);
    return e.storeUint(on, 8).storeDict(t)
  }
}

function Go(n) {
  if (n.loadUint(8) !== on) throw new Error("Not on-chain content");
  return n.loadDict(ht.Dictionary.Keys.BigUint(256), ln)
}
Object.defineProperty(Ze, "__esModule", {
  value: !0
});
Ze.BclMaster = void 0;
const Ne = $,
  $s = Pe,
  Es = Se,
  Lo = Ge;
class Xt {
  constructor(e) {
    this.address = e
  }
  static createFromAddress(e) {
    return new Xt(e)
  }
  async sendDeployCoin(e, t, s, r) {
    let o = (0, Ne.beginCell)().store((0, Lo.storeTokenOnchainContent)({
        name: s.name,
        description: s.description,
        image: s.imageUrl,
        symbol: s.symbol,
        decimals: "9",
        social_links: JSON.stringify(s.socialLinks),
        ...s.extraMetadata
      })).endCell(),
      a = (0, Ne.beginCell)().storeUint((0, Es.crc32str)("op::deploy_coin"), 32).storeUint(s.queryId ?? 0, 64).storeRef(o).storeAddress(s.authorAddress).storeRef(s.referral ?? (0, Ne.beginCell)().endCell()),
      i = (0, Ne.beginCell)().storeUint(3547469196, 32).storeUint(s.queryId ?? 0, 64).endCell();
    if (r != null && r.firstBuy) {
      let g = (0, Ne.beginCell)().storeUint((0, Es.crc32str)("op::buy"), 32).storeUint(r.firstBuy.queryId ?? 0, 64).storeCoins(r.firstBuy.minReceive).storeMaybeRef(r.firstBuy.referral);
      r.firstBuy.buyerAddress && g.storeAddress(r.firstBuy.buyerAddress), i = g.endCell()
    }
    a.storeMaybeRef(i);
    let c;
    r != null && r.forceDeploymentFee ? c = r.forceDeploymentFee : c = (await this.getMasterData(e)).deploymentFee;
    let h = c + $s.Constants.CoinDeploymentGas;
    r != null && r.firstBuy && (h += $s.Constants.CoinBuyGas + r.firstBuy.tons), await e.internal(t, {
      value: h,
      sendMode: Ne.SendMode.PAY_GAS_SEPARATELY,
      bounce: !0,
      body: a.endCell()
    })
  }
  async getCoinsForTons(e, t) {
    let s = await e.get("coins_for_tons", [{
      type: "int",
      value: t
    }]);
    return {
      fees: s.stack.readBigNumber(),
      coins: s.stack.readBigNumber()
    }
  }
  async getMasterData(e) {
    let t = await e.get("get_factory_data", []);
    return {
      admin: t.stack.readAddress(),
      deploymentFee: t.stack.readBigNumber(),
      coinAdmin: t.stack.readAddress(),
      coinTtl: t.stack.readNumber(),
      bclSupply: t.stack.readBigNumber(),
      liqSupply: t.stack.readBigNumber(),
      feeAddress: t.stack.readAddress(),
      feeNumerator: t.stack.readNumber(),
      feeDenominator: t.stack.readNumber(),
      tradingCloseFee: t.stack.readBigNumber(),
      fullPriceTon: t.stack.readBigNumber(),
      fullPriceTonFees: t.stack.readBigNumber(),
      isEnabled: t.stack.readBoolean(),
      seed: t.stack.readBigNumber(),
      coinCode: t.stack.readCell(),
      walletCode: t.stack.readCell()
    }
  }
}
Ze.BclMaster = Xt;
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.BclSDK = void 0;
const Jo = Tt,
  Wo = De,
  Ft = Ze;
class es {
  constructor(e) {
    this.apiProvider = e.apiProvider, this.api = new Jo.BclClient(e.clientOptions), this.masterAddress = e.masterAddress
  }
  openCoin(e) {
    return this.apiProvider.open(Wo.BclJetton.createFromAddress(e))
  }
  async openUserCoinWallet(e, t) {
    return await this.openCoin(e).getUserWallet(t)
  }
  async deployCoin(e, t, s) {
    await this.apiProvider.open(Ft.BclMaster.createFromAddress(this.masterAddress)).sendDeployCoin(e, t, s)
  }
  async getCoinsForTons(e, t) {
    return await this.openCoin(e).getCoinsForTons(t)
  }
  async getTonsForCoins(e, t) {
    return await this.openCoin(e).getTonsForCoins(t)
  }
  async getUserCoinBalance(e, t) {
    const r = await this.openCoin(e).getUserWallet(t);
    try {
      return (await r.getData()).balance
    } catch {
      return 0n
    }
  }
  async getFirstCoinsForTons(e) {
    return await this.apiProvider.open(Ft.BclMaster.createFromAddress(this.masterAddress)).getCoinsForTons(e)
  }
  async getMasterData() {
    return await this.apiProvider.open(Ft.BclMaster.createFromAddress(this.masterAddress)).getMasterData()
  }
  open(e) {
    return this.apiProvider.open(e)
  }
  static create(e) {
    return new es(e)
  }
}
wt.BclSDK = es;
var qt = {},
  K = {};
Object.defineProperty(K, "__esModule", {
  value: !0
});
var mn = K.Api = dn = K.HttpClient = K.ContentType = K.PoolImplementationType = K.TrustType = K.JettonVerificationType = K.BouncePhaseType = K.ComputeSkipReason = K.AccStatusChange = K.TransactionType = K.AccountStatus = void 0,
  Cs;
(function(n) {
  n.Nonexist = "nonexist", n.Uninit = "uninit", n.Active = "active", n.Frozen = "frozen"
})(Cs || (K.AccountStatus = Cs = {}));
var Bs;
(function(n) {
  n.TransOrd = "TransOrd", n.TransTickTock = "TransTickTock", n.TransSplitPrepare = "TransSplitPrepare", n.TransSplitInstall = "TransSplitInstall", n.TransMergePrepare = "TransMergePrepare", n.TransMergeInstall = "TransMergeInstall", n.TransStorage = "TransStorage"
})(Bs || (K.TransactionType = Bs = {}));
var Ps;
(function(n) {
  n.AcstUnchanged = "acst_unchanged", n.AcstFrozen = "acst_frozen", n.AcstDeleted = "acst_deleted"
})(Ps || (K.AccStatusChange = Ps = {}));
var Rs;
(function(n) {
  n.CskipNoState = "cskip_no_state", n.CskipBadState = "cskip_bad_state", n.CskipNoGas = "cskip_no_gas"
})(Rs || (K.ComputeSkipReason = Rs = {}));
var Is;
(function(n) {
  n.TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds", n.TrPhaseBounceNofunds = "TrPhaseBounceNofunds", n.TrPhaseBounceOk = "TrPhaseBounceOk"
})(Is || (K.BouncePhaseType = Is = {}));
var Ns;
(function(n) {
  n.Whitelist = "whitelist", n.Blacklist = "blacklist", n.None = "none"
})(Ns || (K.JettonVerificationType = Ns = {}));
var Os;
(function(n) {
  n.Whitelist = "whitelist", n.Graylist = "graylist", n.Blacklist = "blacklist", n.None = "none"
})(Os || (K.TrustType = Os = {}));
var Fs;
(function(n) {
  n.Whales = "whales", n.Tf = "tf", n.LiquidTF = "liquidTF"
})(Fs || (K.PoolImplementationType = Fs = {}));
var ke;
(function(n) {
  n.Json = "application/json", n.FormData = "multipart/form-data", n.UrlEncoded = "application/x-www-form-urlencoded", n.Text = "text/plain"
})(ke || (K.ContentType = ke = {}));
class Ko {
  constructor(e = {}) {
    f(this, "baseUrl", "https://tonapi.io");
    f(this, "securityData", null);
    f(this, "securityWorker");
    f(this, "abortControllers", new Map);
    f(this, "customFetch", (...e) => fetch(...e));
    f(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    f(this, "setSecurityData", e => {
      this.securityData = e
    });
    f(this, "contentFormatters", {
      [ke.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
      [ke.Text]: e => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
      [ke.FormData]: e => Object.keys(e || {}).reduce((t, s) => {
        const r = e[s];
        return t.append(s, r instanceof Blob ? r : typeof r == "object" && r !== null ? JSON.stringify(r) : `${r}`), t
      }, new FormData),
      [ke.UrlEncoded]: e => this.toQueryString(e)
    });
    f(this, "createAbortSignal", e => {
      if (this.abortControllers.has(e)) {
        const s = this.abortControllers.get(e);
        return s ? s.signal : void 0
      }
      const t = new AbortController;
      return this.abortControllers.set(e, t), t.signal
    });
    f(this, "abortRequest", e => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e))
    });
    f(this, "request", async ({
      body: e,
      secure: t,
      path: s,
      type: r,
      query: o,
      format: a,
      baseUrl: i,
      cancelToken: c,
      ...h
    }) => {
      const g = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
        E = this.mergeRequestParams(h, g),
        v = o && this.toQueryString(o),
        T = this.contentFormatters[r || ke.Json],
        P = a || E.format;
      return this.customFetch(`${i||this.baseUrl||""}${s}${v?`?${v}`:""}`, {
        ...E,
        headers: {
          ...E.headers || {},
          ...r && r !== ke.FormData ? {
            "Content-Type": r
          } : {}
        },
        signal: (c ? this.createAbortSignal(c) : E.signal) || null,
        body: typeof e > "u" || e === null ? null : T(e)
      }).then(async U => {
        const x = U.clone();
        x.data = null, x.error = null;
        const L = P ? await U[P]().then(H => (x.ok ? x.data = H : x.error = H, x)).catch(H => (x.error = H, x)) : x;
        if (c && this.abortControllers.delete(c), !U.ok) throw L;
        return L.data
      })
    });
    Object.assign(this, e)
  }
  encodeQueryParam(e, t) {
    return `${encodeURIComponent(e)}=${encodeURIComponent(typeof t=="number"?t:`${t}`)}`
  }
  addQueryParam(e, t) {
    return this.encodeQueryParam(t, e[t])
  }
  addArrayQueryParam(e, t) {
    return e[t].map(r => this.encodeQueryParam(t, r)).join("&")
  }
  toQueryString(e) {
    const t = e || {};
    return Object.keys(t).filter(r => typeof t[r] < "u").map(r => Array.isArray(t[r]) ? this.addArrayQueryParam(t, r) : this.addQueryParam(t, r)).join("&")
  }
  addQueryParams(e) {
    const t = this.toQueryString(e);
    return t ? `?${t}` : ""
  }
  mergeRequestParams(e, t) {
    return {
      ...this.baseApiParams,
      ...e,
      ...t || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...e.headers || {},
        ...t && t.headers || {}
      }
    }
  }
}
var dn = K.HttpClient = Ko;
class Ho {
  constructor(e) {
    f(this, "http");
    f(this, "utilities", {
      getOpenapiJson: (e = {}) => this.http.request({
        path: "/v2/openapi.json",
        method: "GET",
        format: "json",
        ...e
      }),
      getOpenapiYml: (e = {}) => this.http.request({
        path: "/v2/openapi.yml",
        method: "GET",
        ...e
      }),
      status: (e = {}) => this.http.request({
        path: "/v2/status",
        method: "GET",
        format: "json",
        ...e
      }),
      addressParse: (e, t = {}) => this.http.request({
        path: `/v2/address/${e}/parse`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    f(this, "blockchain", {
      getReducedBlockchainBlocks: (e, t = {}) => this.http.request({
        path: "/v2/blockchain/reduced/blocks",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getBlockchainBlock: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/blocks/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainMasterchainShards: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/masterchain/${e}/shards`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainMasterchainBlocks: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/masterchain/${e}/blocks`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainMasterchainTransactions: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/masterchain/${e}/transactions`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainConfigFromBlock: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/masterchain/${e}/config`,
        method: "GET",
        format: "json",
        ...t
      }),
      getRawBlockchainConfigFromBlock: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/masterchain/${e}/config/raw`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainBlockTransactions: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/blocks/${e}/transactions`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainTransaction: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/transactions/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainTransactionByMessageHash: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/messages/${e}/transaction`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainValidators: (e = {}) => this.http.request({
        path: "/v2/blockchain/validators",
        method: "GET",
        format: "json",
        ...e
      }),
      getBlockchainMasterchainHead: (e = {}) => this.http.request({
        path: "/v2/blockchain/masterchain-head",
        method: "GET",
        format: "json",
        ...e
      }),
      getBlockchainRawAccount: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/accounts/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getBlockchainAccountTransactions: (e, t, s = {}) => this.http.request({
        path: `/v2/blockchain/accounts/${e}/transactions`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      execGetMethodForBlockchainAccount: (e, t, s, r = {}) => this.http.request({
        path: `/v2/blockchain/accounts/${e}/methods/${t}`,
        method: "GET",
        query: s,
        format: "json",
        ...r
      }),
      sendBlockchainMessage: (e, t = {}) => this.http.request({
        path: "/v2/blockchain/message",
        method: "POST",
        body: e,
        ...t
      }),
      getBlockchainConfig: (e = {}) => this.http.request({
        path: "/v2/blockchain/config",
        method: "GET",
        format: "json",
        ...e
      }),
      getRawBlockchainConfig: (e = {}) => this.http.request({
        path: "/v2/blockchain/config/raw",
        method: "GET",
        format: "json",
        ...e
      }),
      blockchainAccountInspect: (e, t = {}) => this.http.request({
        path: `/v2/blockchain/accounts/${e}/inspect`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    f(this, "accounts", {
      getAccounts: (e, t, s = {}) => this.http.request({
        path: "/v2/accounts/_bulk",
        method: "POST",
        query: t,
        body: e,
        format: "json",
        ...s
      }),
      getAccount: (e, t = {}) => this.http.request({
        path: `/v2/accounts/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      accountDnsBackResolve: (e, t = {}) => this.http.request({
        path: `/v2/accounts/${e}/dns/backresolve`,
        method: "GET",
        format: "json",
        ...t
      }),
      getAccountJettonsBalances: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/jettons`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountJettonBalance: (e, t, s, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/jettons/${t}`,
        method: "GET",
        query: s,
        format: "json",
        ...r
      }),
      getAccountJettonsHistory: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/jettons/history`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountJettonHistoryById: (e, t, s, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/jettons/${t}/history`,
        method: "GET",
        query: s,
        format: "json",
        ...r
      }),
      getAccountNftItems: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/nfts`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountEvents: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/events`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountEvent: (e, t, s, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/events/${t}`,
        method: "GET",
        query: s,
        format: "json",
        ...r
      }),
      getAccountTraces: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/traces`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountSubscriptions: (e, t = {}) => this.http.request({
        path: `/v2/accounts/${e}/subscriptions`,
        method: "GET",
        format: "json",
        ...t
      }),
      reindexAccount: (e, t = {}) => this.http.request({
        path: `/v2/accounts/${e}/reindex`,
        method: "POST",
        ...t
      }),
      searchAccounts: (e, t = {}) => this.http.request({
        path: "/v2/accounts/search",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getAccountDnsExpiring: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/dns/expiring`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountPublicKey: (e, t = {}) => this.http.request({
        path: `/v2/accounts/${e}/publickey`,
        method: "GET",
        format: "json",
        ...t
      }),
      getAccountMultisigs: (e, t = {}) => this.http.request({
        path: `/v2/accounts/${e}/multisigs`,
        method: "GET",
        format: "json",
        ...t
      }),
      getAccountDiff: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/diff`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountExtraCurrencyHistoryById: (e, t, s, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/extra-currency/${t}/history`,
        method: "GET",
        query: s,
        format: "json",
        ...r
      })
    });
    f(this, "nft", {
      getAccountNftHistory: (e, t, s = {}) => this.http.request({
        path: `/v2/accounts/${e}/nfts/history`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getNftCollections: (e, t = {}) => this.http.request({
        path: "/v2/nfts/collections",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getNftCollection: (e, t = {}) => this.http.request({
        path: `/v2/nfts/collections/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getNftCollectionItemsByAddresses: (e, t = {}) => this.http.request({
        path: "/v2/nfts/collections/_bulk",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      getItemsFromCollection: (e, t, s = {}) => this.http.request({
        path: `/v2/nfts/collections/${e}/items`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getNftItemsByAddresses: (e, t = {}) => this.http.request({
        path: "/v2/nfts/_bulk",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      getNftItemByAddress: (e, t = {}) => this.http.request({
        path: `/v2/nfts/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getNftHistoryById: (e, t, s = {}) => this.http.request({
        path: `/v2/nfts/${e}/history`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      })
    });
    f(this, "dns", {
      getDnsInfo: (e, t = {}) => this.http.request({
        path: `/v2/dns/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      dnsResolve: (e, t = {}) => this.http.request({
        path: `/v2/dns/${e}/resolve`,
        method: "GET",
        format: "json",
        ...t
      }),
      getDomainBids: (e, t = {}) => this.http.request({
        path: `/v2/dns/${e}/bids`,
        method: "GET",
        format: "json",
        ...t
      }),
      getAllAuctions: (e, t = {}) => this.http.request({
        path: "/v2/dns/auctions",
        method: "GET",
        query: e,
        format: "json",
        ...t
      })
    });
    f(this, "traces", {
      getTrace: (e, t = {}) => this.http.request({
        path: `/v2/traces/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    f(this, "events", {
      getEvent: (e, t = {}) => this.http.request({
        path: `/v2/events/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    f(this, "inscriptions", {
      getAccountInscriptions: (e, t, s = {}) => this.http.request({
        path: `/v2/experimental/accounts/${e}/inscriptions`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountInscriptionsHistory: (e, t, s = {}) => this.http.request({
        path: `/v2/experimental/accounts/${e}/inscriptions/history`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAccountInscriptionsHistoryByTicker: (e, t, s, r = {}) => this.http.request({
        path: `/v2/experimental/accounts/${e}/inscriptions/${t}/history`,
        method: "GET",
        query: s,
        format: "json",
        ...r
      }),
      getInscriptionOpTemplate: (e, t = {}) => this.http.request({
        path: "/v2/experimental/inscriptions/op-template",
        method: "GET",
        query: e,
        format: "json",
        ...t
      })
    });
    f(this, "jettons", {
      getJettons: (e, t = {}) => this.http.request({
        path: "/v2/jettons",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getJettonInfo: (e, t = {}) => this.http.request({
        path: `/v2/jettons/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getJettonInfosByAddresses: (e, t = {}) => this.http.request({
        path: "/v2/jettons/_bulk",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      getJettonHolders: (e, t, s = {}) => this.http.request({
        path: `/v2/jettons/${e}/holders`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getJettonTransferPayload: (e, t, s = {}) => this.http.request({
        path: `/v2/jettons/${t}/transfer/${e}/payload`,
        method: "GET",
        format: "json",
        ...s
      }),
      getJettonsEvents: (e, t = {}) => this.http.request({
        path: `/v2/events/${e}/jettons`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    f(this, "extraCurrency", {
      getExtraCurrencyInfo: (e, t = {}) => this.http.request({
        path: `/v2/extra-currency/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    f(this, "staking", {
      getAccountNominatorsPools: (e, t = {}) => this.http.request({
        path: `/v2/staking/nominator/${e}/pools`,
        method: "GET",
        format: "json",
        ...t
      }),
      getStakingPoolInfo: (e, t = {}) => this.http.request({
        path: `/v2/staking/pool/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getStakingPoolHistory: (e, t = {}) => this.http.request({
        path: `/v2/staking/pool/${e}/history`,
        method: "GET",
        format: "json",
        ...t
      }),
      getStakingPools: (e, t = {}) => this.http.request({
        path: "/v2/staking/pools",
        method: "GET",
        query: e,
        format: "json",
        ...t
      })
    });
    f(this, "storage", {
      getStorageProviders: (e = {}) => this.http.request({
        path: "/v2/storage/providers",
        method: "GET",
        format: "json",
        ...e
      })
    });
    f(this, "rates", {
      getRates: (e, t = {}) => this.http.request({
        path: "/v2/rates",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getChartRates: (e, t = {}) => this.http.request({
        path: "/v2/rates/chart",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getMarketsRates: (e = {}) => this.http.request({
        path: "/v2/rates/markets",
        method: "GET",
        format: "json",
        ...e
      })
    });
    f(this, "connect", {
      getTonConnectPayload: (e = {}) => this.http.request({
        path: "/v2/tonconnect/payload",
        method: "GET",
        format: "json",
        ...e
      }),
      getAccountInfoByStateInit: (e, t = {}) => this.http.request({
        path: "/v2/tonconnect/stateinit",
        method: "POST",
        body: e,
        format: "json",
        ...t
      })
    });
    f(this, "wallet", {
      tonConnectProof: (e, t = {}) => this.http.request({
        path: "/v2/wallet/auth/proof",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      getAccountSeqno: (e, t = {}) => this.http.request({
        path: `/v2/wallet/${e}/seqno`,
        method: "GET",
        format: "json",
        ...t
      }),
      getWalletsByPublicKey: (e, t = {}) => this.http.request({
        path: `/v2/pubkeys/${e}/wallets`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    f(this, "gasless", {
      gaslessConfig: (e = {}) => this.http.request({
        path: "/v2/gasless/config",
        method: "GET",
        format: "json",
        ...e
      }),
      gaslessEstimate: (e, t, s = {}) => this.http.request({
        path: `/v2/gasless/estimate/${e}`,
        method: "POST",
        body: t,
        format: "json",
        ...s
      }),
      gaslessSend: (e, t = {}) => this.http.request({
        path: "/v2/gasless/send",
        method: "POST",
        body: e,
        ...t
      })
    });
    f(this, "liteServer", {
      getRawMasterchainInfo: (e = {}) => this.http.request({
        path: "/v2/liteserver/get_masterchain_info",
        method: "GET",
        format: "json",
        ...e
      }),
      getRawMasterchainInfoExt: (e, t = {}) => this.http.request({
        path: "/v2/liteserver/get_masterchain_info_ext",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getRawTime: (e = {}) => this.http.request({
        path: "/v2/liteserver/get_time",
        method: "GET",
        format: "json",
        ...e
      }),
      getRawBlockchainBlock: (e, t = {}) => this.http.request({
        path: `/v2/liteserver/get_block/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getRawBlockchainBlockState: (e, t = {}) => this.http.request({
        path: `/v2/liteserver/get_state/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getRawBlockchainBlockHeader: (e, t, s = {}) => this.http.request({
        path: `/v2/liteserver/get_block_header/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      sendRawMessage: (e, t = {}) => this.http.request({
        path: "/v2/liteserver/send_message",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      getRawAccountState: (e, t, s = {}) => this.http.request({
        path: `/v2/liteserver/get_account_state/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getRawShardInfo: (e, t, s = {}) => this.http.request({
        path: `/v2/liteserver/get_shard_info/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getAllRawShardsInfo: (e, t = {}) => this.http.request({
        path: `/v2/liteserver/get_all_shards_info/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getRawTransactions: (e, t, s = {}) => this.http.request({
        path: `/v2/liteserver/get_transactions/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getRawListBlockTransactions: (e, t, s = {}) => this.http.request({
        path: `/v2/liteserver/list_block_transactions/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getRawBlockProof: (e, t = {}) => this.http.request({
        path: "/v2/liteserver/get_block_proof",
        method: "GET",
        query: e,
        format: "json",
        ...t
      }),
      getRawConfig: (e, t, s = {}) => this.http.request({
        path: `/v2/liteserver/get_config_all/${e}`,
        method: "GET",
        query: t,
        format: "json",
        ...s
      }),
      getRawShardBlockProof: (e, t = {}) => this.http.request({
        path: `/v2/liteserver/get_shard_block_proof/${e}`,
        method: "GET",
        format: "json",
        ...t
      }),
      getOutMsgQueueSizes: (e = {}) => this.http.request({
        path: "/v2/liteserver/get_out_msg_queue_sizes",
        method: "GET",
        format: "json",
        ...e
      })
    });
    f(this, "multisig", {
      getMultisigAccount: (e, t = {}) => this.http.request({
        path: `/v2/multisig/${e}`,
        method: "GET",
        format: "json",
        ...t
      })
    });
    f(this, "emulation", {
      decodeMessage: (e, t = {}) => this.http.request({
        path: "/v2/message/decode",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      emulateMessageToEvent: (e, t, s = {}) => this.http.request({
        path: "/v2/events/emulate",
        method: "POST",
        query: t,
        body: e,
        format: "json",
        ...s
      }),
      emulateMessageToTrace: (e, t, s = {}) => this.http.request({
        path: "/v2/traces/emulate",
        method: "POST",
        query: t,
        body: e,
        format: "json",
        ...s
      }),
      emulateMessageToWallet: (e, t = {}) => this.http.request({
        path: "/v2/wallet/emulate",
        method: "POST",
        body: e,
        format: "json",
        ...t
      }),
      emulateMessageToAccountEvent: (e, t, s, r = {}) => this.http.request({
        path: `/v2/accounts/${e}/events/emulate`,
        method: "POST",
        query: s,
        body: t,
        format: "json",
        ...r
      })
    });
    this.http = e
  }
}
mn = K.Api = Ho;
var Xe = {};
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
Xe.runGetMethod = zo;
Xe.TvmStackRecordToTupleItem = ts;
Xe.TupleItemToTonapiString = un;
const Jt = $;
async function zo(n, e, t, s) {
  const r = await n.blockchain.execGetMethodForBlockchainAccount(e.toRawString(), t, {
    args: s == null ? void 0 : s.map(un)
  });
  if (!r.success || r.exit_code !== 0) throw new Error;
  return {
    stack: new Jt.TupleReader(r.stack.map(ts))
  }
}

function ts(n) {
  var e, t;
  switch (n.type) {
    case "num":
      return (e = n.num) != null && e.startsWith("-") ? {
        type: "int",
        value: BigInt((t = n.num) == null ? void 0 : t.replace("-", "")) * BigInt(-1)
      } : {
        type: "int",
        value: BigInt(n.num)
      };
    case "nan":
      return {
        type: "nan"
      };
    case "cell":
      try {
        return {
          type: "cell",
          cell: Jt.Cell.fromBase64(n.cell)
        }
      } catch {
        return {
          type: "cell",
          cell: Jt.Cell.fromBase64(we.from(n.cell, "hex").toString("base64"))
        }
      }
    case "null":
      return {
        type: "null"
      };
    case "tuple":
      return {
        type: "tuple", items: n.tuple.map(ts)
      };
    default:
      throw new Error(`Unknown type ${n.type}`)
  }
}

function un(n) {
  switch (n.type) {
    case "int": {
      let e = n.value.toString(16);
      return e.length % 2 !== 0 && (e = "0" + e), "0x" + e
    }
    case "nan":
      return "NaN";
    case "null":
      return "Null";
    case "cell":
    case "builder":
      return n.cell.toBoc().toString("base64");
    case "slice":
      return n.cell.toBoc().toString("hex");
    case "tuple":
      throw new Error("Tuple is not supported in TonApi get method parameters");
    default:
      throw new Error(`Unknown type ${n.type}`)
  }
}
Object.defineProperty(qt, "__esModule", {
  value: !0
});
qt.simpleTonapiProvider = Vo;
qt.createProvider = ss;
const at = K,
  Ke = $,
  xs = Xe;

function Vo(n) {
  return {
    open(e) {
      return (0, Ke.openContract)(e, t => ss(n, t))
    }
  }
}

function ss(n, e) {
  return {
    async getState() {
      const t = await n.blockchain.getBlockchainRawAccount(e.address.toRawString());
      let s;
      if (t.status === at.AccountStatus.Nonexist || t.status === at.AccountStatus.Uninit) s = {
        type: "uninit"
      };
      else if (t.status === at.AccountStatus.Active) s = {
        type: "active",
        code: t.code ? we.from(t.code, "hex") : null,
        data: t.data ? we.from(t.data, "hex") : null
      };
      else if (t.status === at.AccountStatus.Frozen) s = {
        type: "frozen",
        stateHash: we.from(t.frozen_hash, "hex")
      };
      else throw new Error("Unknown state");
      return {
        balance: BigInt(t.balance),
        last: t.last_transaction_hash ? {
          lt: BigInt(t.last_transaction_lt),
          hash: we.from(t.last_transaction_hash, "hex")
        } : null,
        state: s
      }
    },
    async get(t, s) {
      const r = await n.blockchain.execGetMethodForBlockchainAccount(e.address.toRawString(), t, {
        args: s == null ? void 0 : s.map(xs.TupleItemToTonapiString)
      });
      if (!r.success || r.exit_code !== 0) throw new Error;
      return {
        stack: new Ke.TupleReader(r.stack.map(xs.TvmStackRecordToTupleItem))
      }
    },
    async external(t) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    },
    async internal(t, s) {
      let o = !0;
      s.bounce !== null && s.bounce !== void 0 && (o = s.bounce);
      let a;
      typeof s.value == "string" ? a = (0, Ke.toNano)(s.value) : a = s.value;
      let i = null;
      typeof s.body == "string" ? i = (0, Ke.comment)(s.body) : s.body && (i = s.body), await t.send({
        to: e.address,
        value: a,
        bounce: o,
        sendMode: s.sendMode,
        init: null,
        body: i
      })
    },
    open(t) {
      return (0, Ke.openContract)(t, s => ss(n, s))
    },
    async getTransactions(t, s, r, o) {
      throw new Error("Not supported, try using TonClient / TonClient 4")
    }
  }
}
var ns = {},
  Me = {};
Object.defineProperty(Me, "__esModule", {
  value: !0
});
Me.delay = Me.unixtime = void 0;
const Yo = () => Math.floor(Date.now() / 1e3);
Me.unixtime = Yo;
const Qo = n => new Promise(e => {
  setTimeout(() => e(), n)
});
Me.delay = Qo;
Object.defineProperty(ns, "__esModule", {
  value: !0
});
ns.tonConnectSender = Xo;
const it = $,
  Zo = Me;

function Xo(n) {
  let e;
  const t = [];
  return {
    get address() {
      var r;
      const s = (r = n.account) == null ? void 0 : r.address;
      return s ? it.Address.parse(s) : void 0
    },
    async send(s) {
      var v;
      const r = (0, Zo.unixtime)() + 600,
        o = s.to.toString({
          urlSafe: !0,
          bounceable: !0
        }),
        a = (v = this.address) == null ? void 0 : v.toRawString(),
        i = s.value.toString();
      let c;
      s.init && (c = (0, it.beginCell)().store((0, it.storeStateInit)(s.init)).endCell().toBoc().toString("base64"));
      let h;
      s.body && (h = s.body.toBoc().toString("base64"));
      const g = await n.sendTransaction({
          validUntil: r,
          from: a,
          messages: [{
            address: o,
            amount: i,
            stateInit: c,
            payload: h
          }]
        }),
        E = it.Cell.fromBase64(g.boc);
      e = {
        msg: E,
        hash: E.hash().toString("hex")
      }, t.forEach(T => T(e))
    },
    async getResult() {
      return new Promise(s => {
        if (e) {
          s(e);
          return
        }
        t.push(s)
      })
    }
  }
}
var hn = {};
Object.defineProperty(hn, "__esModule", {
  value: !0
});
var $t = {};
Object.defineProperty($t, "__esModule", {
  value: !0
});
$t.packReferralConfig = ta;
$t.unpackReferralConfig = sa;
const ea = zs,
  yn = Se;

function ta(n) {
  let e = (0, ea.beginCell)().storeUint((0, yn.crc32str)("ref_v1"), 32).storeAddress(n.partner);
  if (n.platformTag && e.storeAddress(n.platformTag), n.extraTag) {
    if (!n.platformTag) throw new Error("extraTag should only be set if platformTag is present");
    e.storeAddress(n.extraTag)
  }
  return e.endCell()
}

function sa(n) {
  let e = n.beginParse();
  if (e.loadUint(32) !== (0, yn.crc32str)("ref_v1")) throw new Error("Unknown referral format");
  let s = e.loadAddress(),
    r, o;
  return e.remainingBits > 0 && (r = e.loadAddress()), e.remainingBits > 0 && (o = e.loadAddress()), {
    partner: s,
    platformTag: r,
    extraTag: o
  }
}(function(n) {
  var e = Oe && Oe.__createBinding || (Object.create ? function(o, a, i, c) {
      c === void 0 && (c = i);
      var h = Object.getOwnPropertyDescriptor(a, i);
      (!h || ("get" in h ? !a.__esModule : h.writable || h.configurable)) && (h = {
        enumerable: !0,
        get: function() {
          return a[i]
        }
      }), Object.defineProperty(o, c, h)
    } : function(o, a, i, c) {
      c === void 0 && (c = i), o[c] = a[i]
    }),
    t = Oe && Oe.__exportStar || function(o, a) {
      for (var i in o) i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && e(a, o, i)
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.crc32 = n.crc32str = n.tonConnectSender = void 0, t(wt, n), t(qt, n);
  var s = ns;
  Object.defineProperty(n, "tonConnectSender", {
    enumerable: !0,
    get: function() {
      return s.tonConnectSender
    }
  });
  var r = Se;
  Object.defineProperty(n, "crc32str", {
    enumerable: !0,
    get: function() {
      return r.crc32str
    }
  }), Object.defineProperty(n, "crc32", {
    enumerable: !0,
    get: function() {
      return r.crc32
    }
  }), t(hn, n), t(Ze, n), t(De, n), t(Qe, n), t(Pe, n), t($t, n)
})(ie);
const fn = () => {
    const {
      getAddress: n,
      tonConnectSender: e,
      createGetWaitForLaunchStatusUntilOk: t
    } = Ue(), {
      TON_API_TOKEN: s,
      getTransactionStatus: r
    } = Ht(), {
      getMinReceive: o,
      memepadApi: a,
      wrapWithCache: i
    } = ft(), c = new mn(new dn({
      baseUrl: "https://tonapi.io",
      baseApiParams: {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${s}`
        }
      }
    })), h = {
      LAUNCH_STATUS_CHECK: 18e3,
      BUY_STATUS_CHECK: 18e3,
      SELL_STATUS_CHECK: 18e3,
      UNLOCK_STATUS_CHECK: 18e3
    }, g = {
      MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE: j(ie.Constants.CoinBuyGas),
      MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE: j(ie.Constants.CoinSellGas),
      MEMEPAD_JETTON_LAUNCH_NETWORK_FEE: j(ie.Constants.CoinDeploymentGas),
      MEMEPAD_JETTON_UNLOCK_NETWORK_FEE: j(ie.Constants.WalletUnlockGas)
    }, E = {
      LAUNCH_FEE: new C(.0114),
      LAUNCH_BUY_FEE: new C(.012),
      BUY_FEE: new C(.0062),
      SELL_FEE: new C(.0044),
      UNLOCK_FEE: new C(.0037)
    }, v = {
      buyNetworkFee: g.MEMEPAD_JETTON_BUY_OPERATION_NETWORK_FEE,
      sellNetworkFee: g.MEMEPAD_JETTON_SELL_OPERATION_NETWORK_FEE,
      launchNetworkFee: g.MEMEPAD_JETTON_LAUNCH_NETWORK_FEE,
      unlockNetworkFee: g.MEMEPAD_JETTON_UNLOCK_NETWORK_FEE,
      walletNetworkLaunchFee: E.LAUNCH_FEE,
      walletNetworkLaunchBuyFee: E.LAUNCH_BUY_FEE,
      walletNetworkBuyFee: E.BUY_FEE,
      walletNetworkSellFee: E.SELL_FEE,
      walletNetworkUnlockFee: E.UNLOCK_FEE
    }, T = b => {
      const w = `tonFunSdk:${b.toString()}`,
        m = Ln(w, () => new Map),
        l = m.value.get(w);
      if (l) return l;
      const d = ie.BclSDK.create({
        apiProvider: ie.simpleTonapiProvider(c),
        clientOptions: {
          endpoint: ""
        },
        masterAddress: n(b)
      });
      return m.value.set(w, d), d
    }, P = b => new C(1).minus(j(b.fees)).div(j(b.coins)), x = i(({
      masterAddress: b
    }) => `tonFunSdk:bclData:${b.toString()}`, async ({
      masterAddress: b
    }) => {
      const w = await V(async () => await T(b).getMasterData())();
      if (!q(w)) return Gn(w);
      const m = j(w.data.fullPriceTon),
        l = j(w.data.fullPriceTon).minus(j(w.data.fullPriceTonFees)),
        d = j(w.data.bclSupply),
        y = j(w.data.liqSupply),
        u = d.plus(y);
      return G({
        tokenForDexWithFees: m,
        tokenForDex: l,
        bclSupply: d,
        liqSupply: y,
        maxSupply: u,
        launchPlatformFee: j(w.data.deploymentFee)
      })
    }), H = i(({
      tons: b,
      masterAddress: w
    }) => `tonFunSdk:firstCoinsForTons:${w.toString()}:${b.toString()}`, async ({
      tons: b,
      masterAddress: w
    }) => await V(async () => await T(w).getFirstCoinsForTons(W(new C(b))))()), Y = i(({
      tons: b,
      masterAddress: w
    }) => `tonFunSdk:jettonOverview:${w.toString()}:${b.toString()}`, async ({
      tons: b,
      masterAddress: w
    }) => {
      const m = new C(b),
        l = await x({
          masterAddress: w
        });
      if (!q(l)) return l;
      const {
        tokenForDex: d,
        tokenForDexWithFees: y,
        bclSupply: u,
        maxSupply: _
      } = l.data, k = await (async () => new C(m).isZero() ? G({
        fees: W(new C(0)),
        coins: W(new C(0))
      }) : await H({
        tons: b,
        masterAddress: w
      }))();
      if (!q(k)) return k;
      const A = k.data,
        R = await (async () => {
          const Je = await H({
            masterAddress: w,
            tons: 1
          });
          return q(Je) ? G(P(Je.data)) : Je
        })();
      if (!q(R)) return R;
      const M = R.data,
        J = M.mul(_),
        re = new C(j(A.coins)),
        oe = new C(j(A.fees)),
        be = new C(m).minus(oe),
        Le = be.div(d).times(100),
        et = re.div(u).times(100),
        Ct = new C(u).sub(re);
      return G({
        share: m,
        tokenForDexWithFees: y,
        tokenForDex: d,
        tokenCollected: be,
        tokenCollectedPercent: Le,
        jettonReceivePercent: et,
        priceToken: M,
        marketCapToken: J,
        availableSupply: Ct,
        maxSupply: _,
        platformFee: oe,
        minReceive: re,
        bclData: l.data
      })
    });
    return {
      getCoinPriceInTons: P,
      getBclData: x,
      getUnlockEnabled: async ({
        jettonAddress: b,
        userAddress: w,
        masterAddress: m
      }) => {
        var u, _, k;
        const l = await V(async () => await T(m).openCoin(n(b)).getUserWallet(n(w)))();
        if (!q(l)) return l;
        const d = await V(async () => !await l.data.getTransfersEnabled())();
        if (!q(d)) return ((u = d.extra) == null ? void 0 : u.status) === 404 && ((k = (_ = d.extra) == null ? void 0 : _.error) == null ? void 0 : k.error) === "entity not found" ? G(!1) : d;
        const y = d.data;
        return G(y)
      },
      getJettonBclData: async ({
        jettonAddress: b,
        masterAddress: w
      }) => {
        const m = await V(async () => await T(w).openCoin(n(b)))();
        if (!q(m)) return m;
        const l = await V(async () => await m.data.getBclData())();
        if (!q(l)) return l;
        const d = j(l.data.totalSupply),
          y = j(l.data.fullPriceTon).minus(j(l.data.fullPriceTonFees)),
          u = j(l.data.tonLiqCollected),
          _ = u.div(y).times(100),
          k = j(l.data.bclSupply),
          A = j(l.data.liqSupply),
          R = k.minus(d);
        return G({
          tokenForDex: y,
          tokenCollected: u,
          tokenCollectedPercent: _,
          bclSupply: k,
          liqSupply: A,
          totalSupply: d,
          availableSupply: R
        })
      },
      unlockWallet: async ({
        jettonAddress: b,
        userAddress: w,
        masterAddress: m,
        tonConnectUI: l
      }) => {
        const d = T(m).openCoin(n(b)),
          y = await V(async () => await d.getUserWallet(n(w)))();
        if (!q(y)) return y;
        const u = e(l),
          _ = await V(async () => await y.data.sendUnlockWallet(u, {}))();
        return q(_) ? G((await u.getResult()).hash) : _
      },
      getWaitForUnlockStatus: () => xe(async ({
        transactionHash: b
      }) => await r({
        transactionHash: b
      }), () => {}, h.UNLOCK_STATUS_CHECK),
      getBuyInfo: async ({
        tons: b,
        masterAddress: w,
        jettonAddress: m,
        partnerAddress: l
      }) => {
        const d = await V(async () => await T(w).openCoin(n(m)).getCoinsForTons(W(b)))();
        if (!q(d)) return d;
        const y = j(d.data.coins),
          u = o(y);
        return G({
          minReceive: u,
          maxReceive: y,
          platformFee: j(d.data.fees),
          additionalInfo: {
            partnerAddress: l.toString()
          }
        })
      },
      getSellInfo: async ({
        jettons: b,
        masterAddress: w,
        jettonAddress: m,
        partnerAddress: l
      }) => {
        const d = await V(async () => await T(w).openCoin(n(m)).getTonsForCoins(W(b)))();
        if (!q(d)) return d;
        const y = j(d.data.tons),
          u = o(y);
        return G({
          minReceive: u,
          maxReceive: y,
          platformFee: j(d.data.fees),
          additionalInfo: {
            partnerAddress: l.toString()
          }
        })
      },
      buyJetton: async ({
        tons: b,
        tradeInfoParams: w,
        masterAddress: m,
        jettonAddress: l,
        tonConnectUI: d
      }) => {
        const y = {
            tons: W(b),
            minReceive: W(w.minReceive),
            referral: ie.packReferralConfig({
              partner: n(w.additionalInfo.partnerAddress)
            })
          },
          u = e(d),
          _ = await V(async () => await T(m).openCoin(n(l)).sendBuy(u, y))();
        return q(_) ? G((await u.getResult()).hash) : _
      },
      sellJetton: async ({
        jettons: b,
        tradeInfoParams: w,
        jettonAddress: m,
        masterAddress: l,
        userAddress: d,
        tonConnectUI: y
      }) => {
        const u = await T(l).openCoin(n(m)).getUserWallet(n(d)),
          _ = e(y),
          k = await V(async () => await u.sendSellCoins(_, {
            amount: W(b),
            minReceive: W(w.minReceive),
            referral: ie.packReferralConfig({
              partner: n(w.additionalInfo.partnerAddress)
            }),
            queryId: 0n
          }))();
        return q(k) ? G((await _.getResult()).hash) : k
      },
      getUserJettonBalance: async ({
        userAddress: b,
        jettonAddress: w,
        masterAddress: m
      }) => {
        const l = await V(async () => await T(m).getUserCoinBalance(n(w), n(b)))();
        return q(l) ? G(j(l.data)) : l
      },
      getWaitForBuyStatus: () => xe(({
        transactionHash: b
      }) => r({
        transactionHash: b
      }), () => {}, h.BUY_STATUS_CHECK),
      getWaitForSellStatus: () => xe(({
        transactionHash: b
      }) => r({
        transactionHash: b
      }), () => {}, h.SELL_STATUS_CHECK),
      getJettonOverview: Y,
      getPriceDetails: ({
        overview: b
      }) => {
        const w = [],
          {
            buyNetworkFee: m,
            launchNetworkFee: l,
            walletNetworkLaunchFee: d,
            walletNetworkLaunchBuyFee: y
          } = v,
          u = b.bclData.launchPlatformFee,
          _ = b.share.isZero() ? d : y,
          k = (l ? l.plus(u) : u).plus(_);
        if (w.push({
            title: F("memepad.new.price_details.launch"),
            details: [{
              highlight: !1,
              label: `${F("memepad.jetton.fees_network")}: ${ne(l)} TON`,
              value: l
            }, {
              highlight: !1,
              label: `${F("memepad.jetton.fees_wallet")}: ${ne(_)} TON`,
              value: _
            }, {
              highlight: u.isZero(),
              label: `${F("memepad.jetton.fees_platform")}: ${ne(u)} TON`,
              value: u
            }],
            label: `${ne(k)} TON`,
            total: k
          }), !b.share.isZero()) {
          const M = new C(b.share.plus(m));
          w.push({
            title: `${F("base.share")} ${Js(b.jettonReceivePercent)}%`,
            details: [{
              highlight: !1,
              label: `${F("memepad.jetton.fees_network")}: ${ne(m)} TON`,
              value: m
            }, {
              highlight: !1,
              label: `${F("memepad.jetton.fees_platform")}: ${ne(b.platformFee)} TON`,
              value: b.platformFee
            }],
            label: `${ne(M)} TON`,
            total: M
          })
        }
        const A = w.reduce((M, J) => M.plus(J.total), new C(0)),
          R = {
            title: F("memepad.new.price_details.total_label"),
            label: `${ne(A)} TON`,
            value: A
          };
        return {
          tokenCollected: b.tokenCollected,
          tokenCollectedPercent: b.tokenCollectedPercent,
          sections: w,
          totalSection: R,
          total: A
        }
      },
      createJetton: async ({
        form: b,
        userAddress: w,
        masterAddress: m,
        tonConnectUI: l
      }) => {
        const d = Ls(b, yt.STONFI_TON_FUN),
          y = await a.saveMemepadJettonInfo(d);
        if (!q(y)) return y;
        const u = new C(b.share),
          _ = b.overview.minReceive,
          k = {
            name: d.name,
            description: d.description,
            imageUrl: lt(d.iconFileKey),
            symbol: d.ticker,
            share: W(u),
            referral: y.data.referral,
            partnerAddress: y.data.partnerAddress,
            queryId: y.data.queryId,
            minReceive: W(_)
          },
          A = {};
        d.socials.length && (A.social_links = JSON.stringify(d.socials.map(oe => oe.url))), d.bannerFileKey && (A.cover_image = lt(d.bannerFileKey));
        const R = {
            authorAddress: n(w),
            name: k.name,
            description: k.description,
            imageUrl: k.imageUrl,
            symbol: k.symbol,
            referral: ie.packReferralConfig({
              partner: n(k.partnerAddress),
              platformTag: n(k.referral)
            }),
            queryId: $.toNano(k.queryId),
            extraMetadata: A
          },
          M = {
            firstBuy: u.isZero() ? void 0 : {
              tons: k.share,
              minReceive: k.minReceive,
              referral: ie.packReferralConfig({
                partner: n(k.partnerAddress)
              }),
              buyerAddress: n(w)
            }
          },
          J = e(l),
          re = await V(async () => await T(m).deployCoin(J, R, M))();
        return q(re) ? G({
          queryId: y.data.queryId,
          transactionHash: (await J.getResult()).hash
        }) : re
      },
      getWaitForCreateStatus: () => t(r, h.LAUNCH_STATUS_CHECK),
      fees: v
    }
  },
  na = ({
    addresses: n,
    tonBalance: e
  }) => {
    if (!n) return;
    const {
      mustGetUserWalletAddress: t,
      createGetShareInfo: s
    } = Ue(), {
      getPriceDetails: r,
      getJettonOverview: o,
      createJetton: a,
      getWaitForCreateStatus: i,
      fees: c
    } = fn(), h = n.masterAddresses[yt.STONFI_TON_FUN], g = Ye().tonConnectUI.value, E = s({
      getFees: () => c
    });
    return {
      getPriceDetails: ({
        overview: v
      }) => r({
        overview: v
      }),
      getJettonOverview: ({
        tons: v
      }) => o({
        tons: v,
        masterAddress: h
      }),
      createJetton: ({
        form: v
      }) => a({
        form: v,
        masterAddress: h,
        tonConnectUI: g,
        userAddress: t()
      }),
      getWaitForCreateStatus: () => i()(),
      getShareInfo: ({
        overview: v,
        share: T,
        loading: P,
        jettonTicker: U
      }) => E({
        overview: v,
        share: T,
        loading: P,
        jettonTicker: U,
        tonBalance: e
      })
    }
  },
  ra = ({
    addresses: n,
    jetton: e,
    tonBalance: t,
    jettonBalance: s
  }) => {
    const {
      mustGetUserWalletAddress: r,
      getTradeStateControls: o,
      createGetUnlockInfo: a
    } = Ue(), {
      slippage: i
    } = ft(), {
      getUserJettonBalance: c,
      getUnlockEnabled: h,
      getWaitForUnlockStatus: g,
      unlockWallet: E,
      buyJetton: v,
      sellJetton: T,
      getWaitForBuyStatus: P,
      getWaitForSellStatus: U,
      getBuyInfo: x,
      getSellInfo: L,
      fees: H
    } = fn(), X = e.address, Y = e.masterContractAddress, de = n.partnerAddress, je = Ye().tonConnectUI.value, ue = a({
      getFees: () => H
    }), he = o();
    return {
      getUserJettonBalance: () => c({
        jettonAddress: X,
        userAddress: r(),
        masterAddress: Y
      }),
      getUnlockEnabled: () => h({
        jettonAddress: X,
        userAddress: r(),
        masterAddress: Y
      }),
      getWaitForUnlockStatus: () => g(),
      unlockWallet: () => E({
        jettonAddress: X,
        userAddress: r(),
        masterAddress: Y,
        tonConnectUI: je
      }),
      getUnlockInfo: () => ue({
        tonBalance: t,
        jettonBalance: s
      }),
      getSlippage: () => i.value,
      updateSlippage: D => i.value = D,
      buyJetton: ({
        tons: D,
        tradeInfoParams: ee
      }) => v({
        tons: D,
        jettonAddress: X,
        masterAddress: Y,
        tradeInfoParams: ee,
        tonConnectUI: je
      }),
      sellJetton: ({
        jettons: D,
        tradeInfoParams: ee
      }) => T({
        jettons: D,
        jettonAddress: X,
        masterAddress: Y,
        userAddress: r(),
        tradeInfoParams: ee,
        tonConnectUI: je
      }),
      getWaitForBuyStatus: () => P(),
      getWaitForSellStatus: () => U(),
      tradeStateControls: {
        getEmptyState: ({
          operation: D
        }) => he.getEmptyState({
          tonBalance: t,
          jettonBalance: s,
          operation: D
        }),
        getImmediateState: ({
          operation: D,
          amount: ee
        }) => he.getImmediateState({
          amount: ee,
          tonBalance: t,
          jettonBalance: s,
          operation: D,
          jettonTicker: e.ticker,
          fees: H
        }),
        getState: ({
          operation: D,
          amount: ee
        }) => he.getState({
          tonBalance: t,
          jettonBalance: s,
          operation: D,
          amount: ee,
          jettonTicker: e.ticker,
          fees: H,
          getBuyInfo: ({
            tons: pe
          }) => x({
            tons: pe,
            jettonAddress: X,
            masterAddress: Y,
            partnerAddress: de
          }),
          getSellInfo: ({
            jettons: pe
          }) => L({
            jettons: pe,
            jettonAddress: X,
            masterAddress: Y,
            partnerAddress: de
          })
        })
      }
    }
  },
  Sa = ({
    balances: n,
    addresses: e,
    networkType: t
  }) => {
    switch (t) {
      case Ws.TON:
        switch (e.sdkType) {
          case mt.TON_FUN:
            return na({
              tonBalance: n.tokenBalance,
              addresses: e
            });
          case mt.BLUM:
            return So({
              tonBalance: n.tokenBalance,
              addresses: e
            });
          default: {
            const s = e.sdkType;
            throw He(`Unknown sdk type: ${s}`)
          }
        }
      default:
        throw He(`Unknown network type: ${t}`)
    }
  },
  ja = ({
    isReleased: n,
    sdkType: e,
    dexType: t,
    addresses: s,
    jetton: r,
    networkType: o,
    balances: a
  }) => {
    switch (o) {
      case Ws.TON: {
        const i = (() => {
          switch (e) {
            case mt.TON_FUN:
              return ra({
                addresses: s,
                jetton: r,
                tonBalance: a.tokenBalance,
                jettonBalance: a.jettonBalance
              });
            case mt.BLUM:
              return jo({
                jetton: r,
                tonBalance: a.tokenBalance,
                jettonBalance: a.jettonBalance
              });
            default:
              throw He("Unknown sdk type")
          }
        })();
        if (n) {
          const c = (() => {
            switch (t) {
              case Jn.STONFI:
                return Qn({
                  jetton: r,
                  tonBalance: a.tokenBalance,
                  jettonBalance: a.jettonBalance
                });
              default:
                throw He("Unknown dex type")
            }
          })();
          return {
            ...i,
            ...c
          }
        }
        return i
      }
      default:
        throw He("Unknown network type")
    }
  };
export {
  ha as _, ya as a, fa as b, ga as c, ba as d, ka as e, va as f, wa as g, _a as h, ja as i, Sa as j
};