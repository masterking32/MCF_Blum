import {
  d as C,
  o as t,
  c as a,
  b as E,
  a as r,
  t as d,
  _ as j,
  f as A,
  G as y,
  I,
  F as L,
  q as U,
  C as k,
  e as i,
  bg as H,
  $ as X,
  h as Y,
  z as v,
  W as K,
  b0 as J,
  b9 as Q,
  x as P,
  bA as Z,
  at as x,
  bW as g,
  n as ee,
  bm as $,
  j as O,
  a8 as M,
  aR as w,
  H as te,
  bX as se,
  E as W,
  ay as N,
  m as V,
  L as z,
  Q as F,
  a9 as oe,
  w as ne,
  bJ as ae,
  p as le,
  a_ as ie,
  ap as re,
  aq as ce,
  bx as ue,
  U as B
} from "./DRqvt5pl.js";
import {
  _ as de
} from "./d9qllZGQ.js";
import {
  _ as G
} from "./jN6T2iq4.js";
import {
  _ as q
} from "./2vZNcphP.js";
import {
  _ as pe
} from "./BvaVk8E1.js";
const me = {
    class: "memepad-jetton-action-controls-balance"
  },
  _e = {
    class: "label"
  },
  fe = C({
    __name: "Balance",
    props: {
      balance: {}
    },
    setup(h) {
      return (s, m) => {
        const e = j;
        return t(), a("div", me, [E(e, {
          name: "wallet",
          class: "icon"
        }), r("span", _e, d(s.balance), 1)])
      }
    }
  }),
  kt = A(fe, [
    ["__scopeId", "data-v-5ed33e11"]
  ]),
  ve = {
    type: "button",
    class: "memepad-jetton-action-controls-fees"
  },
  he = {
    key: 1,
    class: "fees"
  },
  ke = {
    class: "tooltip-detail"
  },
  be = {
    key: 0
  },
  Te = {
    class: "label"
  },
  ye = C({
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
        return t(), a("div", ve, [s.errorMessage ? (t(), y(e, {
          key: 0,
          "error-message": s.errorMessage
        }, null, 8, ["error-message"])) : s.details && s.totalLabel ? (t(), a("div", he, [s.details.length ? (t(), y(o, {
          key: 0,
          "text-min-width": 155,
          alignment: i(H).TOP
        }, {
          default: I(() => [E(u, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: I(() => [r("div", ke, [(t(!0), a(L, null, U(s.details, (n, l) => (t(), a(L, {
            key: n.label
          }, [r("span", null, d(n.label), 1), l !== s.details.length - 1 ? (t(), a("br", be)) : k("", !0)], 64))), 128))])]),
          _: 1
        }, 8, ["alignment"])) : k("", !0), r("span", Te, d(s.totalLabel), 1)])) : k("", !0)])
      }
    }
  }),
  bt = A(ye, [
    ["__scopeId", "data-v-1a2557c2"]
  ]),
  Tt = C({
    __name: "TopUpButton",
    props: {
      jettonAddress: {},
      jettonShortname: {}
    },
    setup(h) {
      const s = h,
        m = X(),
        e = Y().$webApp;

      function u(...n) {
        return n.includes(e.platform)
      }
      const o = () => {
        m.memepad.memepadTopupWallet({
          jettonShortname: s.jettonShortname,
          jettonAddress: s.jettonAddress
        });
        const n = J().tonConnectUI.value,
          _ = (n.walletInfo || n.wallet).universalLink;
        if (Q(_)) {
          const f = "https://t.me/wallet/start?startapp=main-rc__a0646df863";
          u("ios", "weba", "android", "tdesktop", "webk") ? e.openTelegramLink(f) : e.openLink(f)
        } else e.openLink(_)
      };
      return (n, l) => {
        const _ = P;
        return t(), y(_, {
          label: ("t" in n ? n.t : i(v))("memepad.top_up_wallet_button"),
          fill: "",
          size: i(K).LARGE,
          onClick: o
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Le = C({
    __name: "StateButtonWrapper",
    props: {
      forceLoading: {
        type: Boolean,
        default: !1
      },
      buttonSize: {
        default: K.LARGE
      }
    },
    setup(h) {
      const s = Z().status,
        m = x();
      return (e, u) => {
        const o = P,
          n = q;
        return i(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : i(g)).DISCONNECTED ? (t(), y(o, {
          key: 0,
          label: ("t" in e ? e.t : i(v))("wallet.connect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: u[0] || (u[0] = l => i(m).runConnectionFlow())
        }, null, 8, ["label", "size"])) : i(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : i(g)).MUST_RECONNECT ? (t(), y(o, {
          key: 1,
          label: ("t" in e ? e.t : i(v))("wallet.reconnect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: u[1] || (u[1] = l => i(m).runConnectionFlow())
        }, null, 8, ["label", "size"])) : i(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : i(g)).LOADING || e.forceLoading ? (t(), y(n, {
          key: 2,
          class: ee(["skeleton", `is-${e.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : i(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : i(g)).CONNECTED ? $(e.$slots, "default", {
          key: 3
        }, void 0, !0) : k("", !0)
      }
    }
  }),
  yt = A(Le, [
    ["__scopeId", "data-v-1e641cbd"]
  ]),
  Ce = {
    class: "memepad-jetton-market-info"
  },
  $e = {
    key: 0,
    class: "top"
  },
  Ae = {
    class: "data"
  },
  we = {
    class: "left"
  },
  Ee = {
    key: 0,
    class: "percent"
  },
  Se = {
    key: 1,
    class: "part"
  },
  De = {
    key: 0,
    class: "market-details"
  },
  Re = {
    class: "holders-count"
  },
  ge = {
    key: 0
  },
  Ie = {
    key: 1
  },
  Oe = {
    class: "transactions-count"
  },
  Me = {
    key: 0
  },
  Ne = {
    key: 1
  },
  je = {
    class: "market-cap"
  },
  Ue = {
    class: "label"
  },
  We = {
    class: "value"
  },
  Ve = {
    key: 1
  },
  ze = {
    type: "button",
    class: "memepad-jetton-market-info-tooltip reset"
  },
  Fe = {
    class: "text"
  },
  Be = {
    class: "progress"
  },
  Ke = {
    key: 1,
    class: "metrics"
  },
  Pe = {
    class: "cap"
  },
  Ge = {
    class: "title"
  },
  qe = {
    key: 0,
    class: "value"
  },
  He = {
    class: "list"
  },
  Xe = {
    class: "title"
  },
  Ye = {
    key: 1,
    class: "value"
  },
  Je = {
    key: 0,
    class: "prefix"
  },
  Qe = {
    key: 1,
    class: "postfix"
  },
  Ze = C({
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
        m = O(() => {
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
        return t(), a("div", Ce, [e.isReleased ? k("", !0) : (t(), a("div", $e, [r("div", Ae, [r("div", we, [e.total !== void 0 && e.collected !== void 0 || e.percent ? (t(), a(L, {
          key: 1
        }, [e.percent !== void 0 ? (t(), a("span", Ee, d(`${i(se)(e.percent)}%`), 1)) : k("", !0), e.total !== void 0 && e.collected !== void 0 ? (t(), a("span", Se, d(`${("formatTon"in e?e.formatTon:i(W))(e.collected,{trim:!0})}/${("formatTon"in e?e.formatTon:i(W))(e.total,{trim:!0})} TON`), 1)) : k("", !0)], 64)) : (t(), y(o, {
          key: 0,
          class: "skeleton"
        }))]), (_ = e.marketDetails) != null && _.statistics ? (t(), a("div", De, [r("div", Re, [E(n, {
          name: "personal",
          class: "icon"
        }), e.marketDetails.statistics.holdersCount ? (t(), a("span", ge, d(("formatCount" in e ? e.formatCount : i(w))(e.marketDetails.statistics.holdersCount, {
          accuracy: 0
        }).full), 1)) : (t(), a("span", Ie, "—"))]), r("div", Oe, [E(n, {
          name: "transfer",
          class: "icon"
        }), e.marketDetails.statistics.transactionsCount ? (t(), a("span", Me, d(("formatCount" in e ? e.formatCount : i(w))(e.marketDetails.statistics.transactionsCount, {
          accuracy: 0
        }).full), 1)) : (t(), a("span", Ne, "—"))]), r("div", je, [e.marketDetails.statistics.marketCap ? (t(), a(L, {
          key: 0
        }, [r("span", Ue, d(("t" in e ? e.t : i(v))("memepad.jetton.stats.market_cap")), 1), r("span", We, d(`$${("formatCount"in e?e.formatCount:i(w))(e.marketDetails.statistics.marketCap).full}`), 1)], 64)) : (t(), a("span", Ve, "—"))])])) : (t(), y(l, {
          key: 1,
          text: ("t" in e ? e.t : i(v))("memepad.jetton.market_info_tooltip.text"),
          "text-min-width": 155,
          "text-max-width": 155
        }, {
          default: I(() => [r("button", ze, [E(n, {
            name: "circle-help",
            class: "icon"
          }), r("span", Fe, d(("t" in e ? e.t : i(v))("memepad.jetton.market_info_tooltip.label")), 1)])]),
          _: 1
        }, 8, ["text"]))]), r("div", Be, [r("div", {
          class: "line",
          style: N({
            width: `${e.percent}%`
          })
        }, null, 4)])])), i(m).length ? (t(), a("div", Ke, [r("div", Pe, [r("div", Ge, d(("t" in e ? e.t : i(v))("memepad.jetton.market_cap")), 1), (f = e.marketDetails) != null && f.marketCap ? (t(), a("div", qe, [u[0] || (u[0] = r("span", {
          class: "dollar"
        }, "$", -1)), r("span", null, d(("formatCount" in e ? e.formatCount : i(w))(e.marketDetails.marketCap).full), 1)])) : (t(), y(o, {
          key: 1,
          class: "skeleton"
        }))]), r("div", He, [(t(!0), a(L, null, U(i(m), p => (t(), a("div", {
          key: p.title,
          class: "item"
        }, [r("span", Xe, d(p.title), 1), p.value === void 0 ? (t(), y(o, {
          key: 0,
          class: "skeleton"
        })) : (t(), a("span", Ye, [typeof p.value == "string" ? (t(), a(L, {
          key: 0
        }, [V(d(p.value), 1)], 64)) : p.value === null ? (t(), a(L, {
          key: 1
        }, [V(" — ")], 64)) : (t(), a(L, {
          key: 2
        }, [p.value.prefix ? (t(), a("span", Je, d(p.value.prefix), 1)) : k("", !0), r("span", null, d(p.value.value), 1), p.value.postfix ? (t(), a("span", Qe, d(p.value.postfix), 1)) : k("", !0)], 64))]))]))), 128))])])) : k("", !0)])
      }
    }
  }),
  Lt = A(Ze, [
    ["__scopeId", "data-v-559baa4e"]
  ]),
  xe = {
    class: "memepad-jetton-actions-controls-input"
  },
  et = C({
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
        _ = O({
          get: () => e.modelValue,
          set: c => {
            if (o.value && o.value.value !== e.modelValue) {
              const b = [...o.value.value].findIndex((D, R) => D !== e.modelValue[R]);
              b !== -1 && o.value.value[b] === "," && (c = c.slice(0, b) + "." + c.slice(b))
            }
            c = (e.modifier || (b => b))(c), o.value && o.value.value !== c && (o.value.value = c), u("update:modelValue", c)
          }
        });
      F(() => e.modelValue, l), F(() => o.value, l);
      const f = O(() => {
          const c = window.innerWidth,
            T = e.modelValue.length + (e.postfix ? e.postfix.length : 0),
            b = Math.floor((c - 360) / 30) + 12.5,
            D = T - b,
            R = Math.min(Math.max(1 - D / T, 0), 1);
          return {
            fontSize: `${44*R}px`,
            lineHeight: `${52*R}px`
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
      const S = () => {
        setTimeout(() => {
          var c;
          (c = o.value) == null || c.focus()
        }, 100)
      };
      return (c, T) => (t(), a("label", xe, [ne(r("input", {
        ref_key: "inputRef",
        ref: o,
        "onUpdate:modelValue": T[0] || (T[0] = b => le(_) ? _.value = b : null),
        type: "text",
        inputmode: "decimal",
        style: N(i(f)),
        onBlur: T[1] || (T[1] = b => u("blur"))
      }, null, 36), [
        [ae, i(_)]
      ]), r("input", {
        ref_key: "hiddenInputRef",
        ref: n,
        type: "text",
        inputmode: "decimal",
        class: "hidden",
        onFocus: S
      }, null, 544), c.postfix ? (t(), a("span", {
        key: 0,
        class: "label",
        style: N(i(f))
      }, d(c.postfix), 5)) : k("", !0)]))
    }
  }),
  Ct = A(et, [
    ["__scopeId", "data-v-ece355cf"]
  ]),
  tt = {
    class: "memepad-jetton-actions-controls-presets"
  },
  st = ["onClick"],
  ot = C({
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
        e = O(() => {
          var _, f, p, S;
          const u = c => ({
              label: `${c} TON`,
              value: new B(c)
            }),
            o = (c, T) => ({
              label: c === 100 ? "MAX" : `${c}%`,
              value: T ?? new B(0)
            }),
            n = (f = (_ = s.balances) == null ? void 0 : _.tonBalance) == null ? void 0 : f.value,
            l = (S = (p = s.balances) == null ? void 0 : p.jettonBalance) == null ? void 0 : S.value;
          return s.tab === ue.BUY ? [u(.3), u(.5), u(10), o(100, n)] : [o(25, l == null ? void 0 : l.mul(.25)), o(50, l == null ? void 0 : l.mul(.5)), o(75, l == null ? void 0 : l.mul(.75)), o(100, l)]
        });
      return (u, o) => (t(), a("div", tt, [(t(!0), a(L, null, U(i(e), n => (t(), a("button", {
        key: n.label,
        type: "button",
        class: "item reset",
        onClick: l => m.value = n.value.toFixed()
      }, d(n.label), 9, st))), 128))]))
    }
  }),
  $t = A(ot, [
    ["__scopeId", "data-v-4eff9b1a"]
  ]),
  nt = {
    class: "memepad-jetton-modal"
  },
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
  pt = C({
    __name: "Modal",
    setup(h) {
      return (s, m) => {
        const e = pe;
        return t(), a("div", nt, [$(s.$slots, "top", {}, () => [r("div", at, [m[0] || (m[0] = r("div", {
          class: "left"
        }, null, -1)), r("div", lt, [$(s.$slots, "top-center", {}, void 0, !0)]), r("div", it, [$(s.$slots, "top-right", {}, void 0, !0)])])], !0), r("div", rt, [$(s.$slots, "default", {}, void 0, !0)]), E(e, {
          "ignore-tabs": "",
          "hide-space": ""
        }, {
          default: I(() => [r("div", ct, [r("div", ut, [$(s.$slots, "bottom-action", {}, void 0, !0)]), s.$slots["bottom-helpers"] ? (t(), a("div", dt, [$(s.$slots, "bottom-helpers", {}, void 0, !0)])) : k("", !0)])]),
          _: 3
        })])
      }
    }
  }),
  At = A(pt, [
    ["__scopeId", "data-v-8cc99962"]
  ]);
export {
  kt as _, bt as a, Tt as b, yt as c, Ct as d, $t as e, At as f, Lt as g
};