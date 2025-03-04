import {
  d as L,
  o as t,
  c as a,
  b as E,
  a as r,
  t as d,
  _ as j,
  f as A,
  G as b,
  H as S,
  F as C,
  q as U,
  D as k,
  e as i,
  bn as H,
  $ as Y,
  h as Q,
  z as v,
  U as B,
  b3 as X,
  bd as Z,
  x as P,
  bF as J,
  aq as x,
  c0 as g,
  n as ee,
  bm as $,
  j as I,
  a7 as M,
  aW as w,
  bC as te,
  c1 as se,
  aT as W,
  ax as N,
  m as V,
  K as z,
  aF as F,
  a8 as oe,
  w as ne,
  bQ as ae,
  p as le,
  bR as ie,
  an as re,
  ao as ce,
  bA as ue,
  R as K
} from "./BFi5NhLo.js";
import {
  _ as de
} from "./CnZOlHtl.js";
import {
  _ as G
} from "./vYJaLzVh.js";
import {
  _ as q
} from "./8r8qwHgw.js";
import {
  _ as pe
} from "./CcwzNHcN.js";
import {
  _ as me
} from "./BFWebHay.js";
const _e = {
    class: "memepad-jetton-action-controls-balance"
  },
  fe = {
    class: "label"
  },
  ve = L({
    __name: "Balance",
    props: {
      balance: {}
    },
    setup(h) {
      return (s, m) => {
        const e = j;
        return t(), a("div", _e, [E(e, {
          name: "wallet",
          class: "icon"
        }), r("span", fe, d(s.balance), 1)])
      }
    }
  }),
  Tt = A(ve, [
    ["__scopeId", "data-v-5ed33e11"]
  ]),
  he = {
    type: "button",
    class: "memepad-jetton-action-controls-fees"
  },
  ke = {
    key: 1,
    class: "fees"
  },
  Te = {
    class: "tooltip-detail"
  },
  be = {
    key: 0
  },
  ye = {
    class: "label"
  },
  Ce = L({
    __name: "Fees",
    props: {
      details: {},
      totalLabel: {},
      errorMessage: {}
    },
    setup(h) {
      return (s, m) => {
        const e = de,
          u = j,
          o = G;
        return t(), a("div", he, [s.errorMessage ? (t(), b(e, {
          key: 0,
          "error-message": s.errorMessage
        }, null, 8, ["error-message"])) : s.details && s.totalLabel ? (t(), a("div", ke, [s.details.length ? (t(), b(o, {
          key: 0,
          "text-min-width": 155,
          alignment: i(H).TOP
        }, {
          default: S(() => [E(u, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: S(() => [r("div", Te, [(t(!0), a(C, null, U(s.details, (n, l) => (t(), a(C, {
            key: n.label
          }, [r("span", null, d(n.label), 1), l !== s.details.length - 1 ? (t(), a("br", be)) : k("", !0)], 64))), 128))])]),
          _: 1
        }, 8, ["alignment"])) : k("", !0), r("span", ye, d(s.totalLabel), 1)])) : k("", !0)])
      }
    }
  }),
  bt = A(Ce, [
    ["__scopeId", "data-v-1a2557c2"]
  ]),
  yt = L({
    __name: "TopUpButton",
    props: {
      jettonAddress: {},
      jettonShortname: {},
      reason: {}
    },
    setup(h) {
      const s = h,
        m = Y(),
        e = Q().$webApp;

      function u(...n) {
        return n.includes(e.platform)
      }
      const o = () => {
        m.memepad.memepadTopupWallet({
          jettonShortname: s.jettonShortname,
          jettonAddress: s.jettonAddress,
          reason: s.reason
        });
        const n = X().tonConnectUI.value,
          _ = (n.walletInfo || n.wallet).universalLink;
        if (Z(_)) {
          const f = "https://t.me/wallet/start?startapp=main-rc__a0646df863";
          u("ios", "weba", "android", "tdesktop", "webk") ? e.openTelegramLink(f) : e.openLink(f)
        } else e.openLink(_)
      };
      return (n, l) => {
        const _ = P;
        return t(), b(_, {
          label: ("t" in n ? n.t : i(v))("memepad.top_up_wallet_button"),
          fill: "",
          size: i(B).LARGE,
          onClick: o
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Le = L({
    __name: "StateButtonWrapper",
    props: {
      forceLoading: {
        type: Boolean,
        default: !1
      },
      buttonSize: {
        default: B.LARGE
      }
    },
    setup(h) {
      const s = J().status,
        m = x();
      return (e, u) => {
        const o = P,
          n = q;
        return i(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : i(g)).DISCONNECTED ? (t(), b(o, {
          key: 0,
          label: ("t" in e ? e.t : i(v))("wallet.connect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: u[0] || (u[0] = l => i(m).runConnectionFlow())
        }, null, 8, ["label", "size"])) : i(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : i(g)).MUST_RECONNECT ? (t(), b(o, {
          key: 1,
          label: ("t" in e ? e.t : i(v))("wallet.reconnect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: u[1] || (u[1] = l => i(m).runConnectionFlow())
        }, null, 8, ["label", "size"])) : i(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : i(g)).LOADING || e.forceLoading ? (t(), b(n, {
          key: 2,
          class: ee(["skeleton", `is-${e.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : i(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : i(g)).CONNECTED ? $(e.$slots, "default", {
          key: 3
        }, void 0, !0) : k("", !0)
      }
    }
  }),
  Ct = A(Le, [
    ["__scopeId", "data-v-1e641cbd"]
  ]),
  $e = {
    class: "memepad-jetton-market-info"
  },
  Ae = {
    key: 0,
    class: "top"
  },
  we = {
    class: "data"
  },
  Ee = {
    class: "left"
  },
  Se = {
    key: 0,
    class: "percent"
  },
  De = {
    key: 1,
    class: "part"
  },
  Re = {
    key: 0,
    class: "market-details"
  },
  Oe = {
    class: "holders-count"
  },
  ge = {
    key: 0
  },
  Ie = {
    key: 1
  },
  Me = {
    class: "transactions-count"
  },
  Ne = {
    key: 0
  },
  je = {
    key: 1
  },
  Ue = {
    class: "market-cap"
  },
  We = {
    class: "label"
  },
  Ve = {
    class: "value"
  },
  ze = {
    key: 1
  },
  Fe = {
    type: "button",
    class: "memepad-jetton-market-info-tooltip reset"
  },
  Ke = {
    class: "text"
  },
  Be = {
    class: "progress"
  },
  Pe = {
    key: 1,
    class: "metrics"
  },
  Ge = {
    class: "cap"
  },
  qe = {
    class: "title"
  },
  He = {
    key: 0,
    class: "value"
  },
  Ye = {
    class: "list"
  },
  Qe = {
    class: "title"
  },
  Xe = {
    key: 1,
    class: "value"
  },
  Ze = {
    key: 0,
    class: "prefix"
  },
  Je = {
    key: 1,
    class: "postfix"
  },
  xe = L({
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
    setup(h) {
      const s = h,
        m = I(() => {
          var u;
          if (!((u = s.marketDetails) != null && u.listRows)) return [];
          const e = [];
          if ("holdersCount" in s.marketDetails.listRows) {
            const o = s.marketDetails.listRows.holdersCount,
              n = s.marketDetails.listRows.transactionsCount,
              l = s.marketDetails.listRows.transactionsVolume;
            e.push({
              title: v("memepad.jetton.holders"),
              value: o != null ? M(o, {
                accuracy: 0
              }) : o
            }), e.push({
              title: v("memepad.jetton.transactions"),
              value: n != null ? M(n, {
                accuracy: 0
              }) : n
            }), e.push({
              title: v("memepad.jetton.trading_volume"),
              value: l != null ? (() => {
                const {
                  value: _,
                  postfix: f
                } = w(l);
                return {
                  prefix: "$",
                  value: _,
                  postfix: f
                }
              })() : l
            })
          } else if ("price" in s.marketDetails.listRows) {
            const o = s.marketDetails.listRows.price,
              n = s.marketDetails.listRows.maxSupply,
              l = s.marketDetails.listRows.availableSupply;
            e.push({
              title: v("memepad.jetton.price"),
              value: o != null ? {
                prefix: "$",
                value: te(o, {
                  accuracy: 10
                })
              } : o
            }), e.push({
              title: v("memepad.jetton.max_supply"),
              value: n != null ? w(n) : n
            }), e.push({
              title: v("memepad.jetton.available"),
              value: l != null ? M(l, {
                accuracy: 0
              }) : l
            })
          }
          return e
        });
      return (e, u) => {
        var _, f;
        const o = q,
          n = j,
          l = G;
        return t(), a("div", $e, [e.isReleased ? k("", !0) : (t(), a("div", Ae, [r("div", we, [r("div", Ee, [e.total !== void 0 && e.collected !== void 0 || e.percent ? (t(), a(C, {
          key: 1
        }, [e.percent !== void 0 ? (t(), a("span", Se, d(`${i(se)(e.percent)}%`), 1)) : k("", !0), e.total !== void 0 && e.collected !== void 0 ? (t(), a("span", De, d(`${("formatTon"in e?e.formatTon:i(W))(e.collected,{trim:!0})}/${("formatTon"in e?e.formatTon:i(W))(e.total,{trim:!0})} TON`), 1)) : k("", !0)], 64)) : (t(), b(o, {
          key: 0,
          class: "skeleton"
        }))]), (_ = e.marketDetails) != null && _.statistics ? (t(), a("div", Re, [r("div", Oe, [E(n, {
          name: "personal",
          class: "icon"
        }), e.marketDetails.statistics.holdersCount ? (t(), a("span", ge, d(("formatCount" in e ? e.formatCount : i(w))(e.marketDetails.statistics.holdersCount, {
          accuracy: 0
        }).full), 1)) : (t(), a("span", Ie, "—"))]), r("div", Me, [E(n, {
          name: "transfer",
          class: "icon"
        }), e.marketDetails.statistics.transactionsCount ? (t(), a("span", Ne, d(("formatCount" in e ? e.formatCount : i(w))(e.marketDetails.statistics.transactionsCount, {
          accuracy: 0
        }).full), 1)) : (t(), a("span", je, "—"))]), r("div", Ue, [e.marketDetails.statistics.marketCap ? (t(), a(C, {
          key: 0
        }, [r("span", We, d(("t" in e ? e.t : i(v))("memepad.jetton.stats.market_cap")), 1), r("span", Ve, d(`$${("formatCount"in e?e.formatCount:i(w))(e.marketDetails.statistics.marketCap).full}`), 1)], 64)) : (t(), a("span", ze, "—"))])])) : (t(), b(l, {
          key: 1,
          text: ("t" in e ? e.t : i(v))("memepad.jetton.market_info_tooltip.text"),
          "text-min-width": 155,
          "text-max-width": 155
        }, {
          default: S(() => [r("button", Fe, [E(n, {
            name: "circle-help",
            class: "icon"
          }), r("span", Ke, d(("t" in e ? e.t : i(v))("memepad.jetton.market_info_tooltip.label")), 1)])]),
          _: 1
        }, 8, ["text"]))]), r("div", Be, [r("div", {
          class: "line",
          style: N({
            width: `${e.percent}%`
          })
        }, null, 4)])])), i(m).length ? (t(), a("div", Pe, [r("div", Ge, [r("div", qe, d(("t" in e ? e.t : i(v))("memepad.jetton.market_cap")), 1), (f = e.marketDetails) != null && f.marketCap ? (t(), a("div", He, [u[0] || (u[0] = r("span", {
          class: "dollar"
        }, "$", -1)), r("span", null, d(("formatCount" in e ? e.formatCount : i(w))(e.marketDetails.marketCap).full), 1)])) : (t(), b(o, {
          key: 1,
          class: "skeleton"
        }))]), r("div", Ye, [(t(!0), a(C, null, U(i(m), p => (t(), a("div", {
          key: p.title,
          class: "item"
        }, [r("span", Qe, d(p.title), 1), p.value === void 0 ? (t(), b(o, {
          key: 0,
          class: "skeleton"
        })) : (t(), a("span", Xe, [typeof p.value == "string" ? (t(), a(C, {
          key: 0
        }, [V(d(p.value), 1)], 64)) : p.value === null ? (t(), a(C, {
          key: 1
        }, [V(" — ")], 64)) : (t(), a(C, {
          key: 2
        }, [p.value.prefix ? (t(), a("span", Ze, d(p.value.prefix), 1)) : k("", !0), r("span", null, d(p.value.value), 1), p.value.postfix ? (t(), a("span", Je, d(p.value.postfix), 1)) : k("", !0)], 64))]))]))), 128))])])) : k("", !0)])
      }
    }
  }),
  Lt = A(xe, [
    ["__scopeId", "data-v-559baa4e"]
  ]),
  et = {
    class: "memepad-jetton-actions-controls-input"
  },
  tt = L({
    __name: "Input",
    props: {
      modelValue: {},
      postfix: {},
      modifier: {
        type: Function
      }
    },
    emits: ["update:modelValue", "blur"],
    setup(h, {
      expose: s,
      emit: m
    }) {
      const e = h,
        u = m,
        o = z(),
        n = z(),
        l = () => {
          ie(() => {
            o.value && (o.value.style.width = "", o.value.style.width = o.value.scrollWidth + "px")
          })
        },
        _ = I({
          get: () => e.modelValue,
          set: c => {
            if (o.value && o.value.value !== e.modelValue) {
              const T = [...o.value.value].findIndex((R, O) => R !== e.modelValue[O]);
              T !== -1 && o.value.value[T] === "," && (c = c.slice(0, T) + "." + c.slice(T))
            }
            c = (e.modifier || (T => T))(c), o.value && o.value.value !== c && (o.value.value = c), u("update:modelValue", c)
          }
        });
      F(() => e.modelValue, l), F(() => o.value, l);
      const f = I(() => {
          const c = window.innerWidth,
            y = e.modelValue.length + (e.postfix ? e.postfix.length : 0),
            T = Math.floor((c - 360) / 30) + 11,
            R = y - T,
            O = Math.min(Math.max(1 - R / y, 0), 1);
          return {
            fontSize: `${44*O}px`,
            lineHeight: `${52*O}px`
          }
        }),
        p = () => {
          var c;
          (c = n.value) == null || c.focus()
        };
      oe(() => {
        p()
      }), s({
        focusOnInput: p
      });
      const D = () => {
        setTimeout(() => {
          var c;
          (c = o.value) == null || c.focus()
        }, 100)
      };
      return (c, y) => (t(), a("label", et, [ne(r("input", {
        ref_key: "inputRef",
        ref: o,
        "onUpdate:modelValue": y[0] || (y[0] = T => le(_) ? _.value = T : null),
        type: "text",
        inputmode: "decimal",
        style: N(i(f)),
        onBlur: y[1] || (y[1] = T => u("blur"))
      }, null, 36), [
        [ae, i(_)]
      ]), r("input", {
        ref_key: "hiddenInputRef",
        ref: n,
        type: "text",
        inputmode: "decimal",
        class: "hidden",
        onFocus: D
      }, null, 544), c.postfix ? (t(), a("span", {
        key: 0,
        class: "label",
        style: N(i(f))
      }, d(c.postfix), 5)) : k("", !0)]))
    }
  }),
  $t = A(tt, [
    ["__scopeId", "data-v-af328d8a"]
  ]),
  st = {
    class: "memepad-jetton-actions-controls-presets"
  },
  ot = ["onClick"],
  nt = L({
    __name: "Presets",
    props: re({
      balances: {},
      tab: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(h) {
      const s = h,
        m = ce(h, "modelValue"),
        e = I(() => {
          var _, f, p, D;
          const u = c => ({
              label: `${c} TON`,
              value: new K(c)
            }),
            o = (c, y) => ({
              label: c === 100 ? "MAX" : `${c}%`,
              value: y ?? new K(0)
            }),
            n = (f = (_ = s.balances) == null ? void 0 : _.tonBalance) == null ? void 0 : f.value,
            l = (D = (p = s.balances) == null ? void 0 : p.jettonBalance) == null ? void 0 : D.value;
          return s.tab === ue.BUY ? [u(1), u(5), u(10), o(100, n)] : [o(25, l == null ? void 0 : l.mul(.25)), o(50, l == null ? void 0 : l.mul(.5)), o(75, l == null ? void 0 : l.mul(.75)), o(100, l)]
        });
      return (u, o) => (t(), a("div", st, [(t(!0), a(C, null, U(i(e), n => (t(), a("button", {
        key: n.label,
        type: "button",
        class: "item reset",
        onClick: l => m.value = n.value.toFixed()
      }, d(n.label), 9, ot))), 128))]))
    }
  }),
  At = A(nt, [
    ["__scopeId", "data-v-3202a184"]
  ]),
  at = {
    class: "top"
  },
  lt = {
    class: "center"
  },
  it = {
    class: "right"
  },
  rt = {
    class: "inner"
  },
  ct = {
    class: "memepad-jetton-modal-bottom"
  },
  ut = {
    class: "action"
  },
  dt = {
    key: 0,
    class: "helpers"
  },
  pt = L({
    __name: "Modal",
    setup(h) {
      return (s, m) => {
        const e = pe,
          u = me;
        return t(), b(u, {
          class: "memepad-jetton-modal"
        }, {
          default: S(() => [$(s.$slots, "top", {}, () => [r("div", at, [m[0] || (m[0] = r("div", {
            class: "left"
          }, null, -1)), r("div", lt, [$(s.$slots, "top-center", {}, void 0, !0)]), r("div", it, [$(s.$slots, "top-right", {}, void 0, !0)])])], !0), r("div", rt, [$(s.$slots, "default", {}, void 0, !0)]), E(e, {
            "ignore-tabs": "",
            "hide-space": ""
          }, {
            default: S(() => [r("div", ct, [r("div", ut, [$(s.$slots, "bottom-action", {}, void 0, !0)]), s.$slots["bottom-helpers"] ? (t(), a("div", dt, [$(s.$slots, "bottom-helpers", {}, void 0, !0)])) : k("", !0)])]),
            _: 3
          })]),
          _: 3
        })
      }
    }
  }),
  wt = A(pt, [
    ["__scopeId", "data-v-cf321a94"]
  ]);
export {
  Tt as _, bt as a, yt as b, Ct as c, $t as d, At as e, wt as f, Lt as g
};