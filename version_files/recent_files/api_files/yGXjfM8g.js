import {
  d as $,
  o as t,
  c as a,
  b as E,
  a as r,
  t as d,
  _ as U,
  f as A,
  G as y,
  I as g,
  F as L,
  q as j,
  D as k,
  e as i,
  be as Y,
  $ as q,
  h as Q,
  z as v,
  W as K,
  a_ as X,
  b7 as Z,
  x as P,
  by as J,
  ar as x,
  bU as R,
  n as ee,
  bk as C,
  j as O,
  a6 as M,
  aP as w,
  H as te,
  bV as se,
  E as W,
  aw as N,
  m as V,
  L as z,
  Q as F,
  a7 as oe,
  w as ne,
  bH as ae,
  p as le,
  aY as ie,
  an as re,
  ao as ce,
  bv as ue,
  U as B
} from "./DxboYIav.js";
import {
  _ as de
} from "./BrHZP5uE.js";
import {
  _ as G
} from "./DtAKfRVh.js";
import {
  _ as H
} from "./T7zQbvVn.js";
import {
  _ as pe
} from "./BuBMz6pq.js";
const me = {
    class: "memepad-jetton-action-controls-balance"
  },
  _e = {
    class: "label"
  },
  fe = $({
    __name: "Balance",
    props: {
      balance: {}
    },
    setup(h) {
      return (s, m) => {
        const e = U;
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
  Te = {
    key: 0
  },
  be = {
    class: "label"
  },
  ye = $({
    __name: "Fees",
    props: {
      details: {},
      totalLabel: {},
      errorMessage: {}
    },
    setup(h) {
      return (s, m) => {
        const e = de,
          u = U,
          o = G;
        return t(), a("div", ve, [s.errorMessage ? (t(), y(e, {
          key: 0,
          "error-message": s.errorMessage
        }, null, 8, ["error-message"])) : s.details && s.totalLabel ? (t(), a("div", he, [s.details.length ? (t(), y(o, {
          key: 0,
          "text-min-width": 155,
          alignment: i(Y).TOP
        }, {
          default: g(() => [E(u, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: g(() => [r("div", ke, [(t(!0), a(L, null, j(s.details, (n, l) => (t(), a(L, {
            key: n.label
          }, [r("span", null, d(n.label), 1), l !== s.details.length - 1 ? (t(), a("br", Te)) : k("", !0)], 64))), 128))])]),
          _: 1
        }, 8, ["alignment"])) : k("", !0), r("span", be, d(s.totalLabel), 1)])) : k("", !0)])
      }
    }
  }),
  Tt = A(ye, [
    ["__scopeId", "data-v-1a2557c2"]
  ]),
  bt = $({
    __name: "TopUpButton",
    props: {
      jettonAddress: {},
      jettonShortname: {}
    },
    setup(h) {
      const s = h,
        m = q(),
        e = Q().$webApp;

      function u(...n) {
        return n.includes(e.platform)
      }
      const o = () => {
        m.memepad.memepadTopupWallet({
          jettonShortname: s.jettonShortname,
          jettonAddress: s.jettonAddress
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
        return t(), y(_, {
          label: ("t" in n ? n.t : i(v))("memepad.top_up_wallet_button"),
          fill: "",
          size: i(K).LARGE,
          onClick: o
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Le = $({
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
      const s = J().status,
        m = x();
      return (e, u) => {
        const o = P,
          n = H;
        return i(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : i(R)).DISCONNECTED ? (t(), y(o, {
          key: 0,
          label: ("t" in e ? e.t : i(v))("wallet.connect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: u[0] || (u[0] = l => i(m).runConnectionFlow())
        }, null, 8, ["label", "size"])) : i(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : i(R)).MUST_RECONNECT ? (t(), y(o, {
          key: 1,
          label: ("t" in e ? e.t : i(v))("wallet.reconnect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: u[1] || (u[1] = l => i(m).runConnectionFlow())
        }, null, 8, ["label", "size"])) : i(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : i(R)).LOADING || e.forceLoading ? (t(), y(n, {
          key: 2,
          class: ee(["skeleton", `is-${e.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : i(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : i(R)).CONNECTED ? C(e.$slots, "default", {
          key: 3
        }, void 0, !0) : k("", !0)
      }
    }
  }),
  yt = A(Le, [
    ["__scopeId", "data-v-1e641cbd"]
  ]),
  $e = {
    class: "memepad-jetton-market-info"
  },
  Ce = {
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
  Ie = {
    class: "holders-count"
  },
  Re = {
    key: 0
  },
  ge = {
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
  Ue = {
    class: "market-cap"
  },
  je = {
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
  He = {
    key: 0,
    class: "value"
  },
  Ye = {
    class: "list"
  },
  qe = {
    class: "title"
  },
  Qe = {
    key: 1,
    class: "value"
  },
  Xe = {
    key: 0,
    class: "prefix"
  },
  Ze = {
    key: 1,
    class: "postfix"
  },
  Je = $({
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
        const o = H,
          n = U,
          l = G;
        return t(), a("div", $e, [e.isReleased ? k("", !0) : (t(), a("div", Ce, [r("div", Ae, [r("div", we, [e.total !== void 0 && e.collected !== void 0 || e.percent ? (t(), a(L, {
          key: 1
        }, [e.percent !== void 0 ? (t(), a("span", Ee, d(`${i(se)(e.percent)}%`), 1)) : k("", !0), e.total !== void 0 && e.collected !== void 0 ? (t(), a("span", Se, d(`${("formatTon"in e?e.formatTon:i(W))(e.collected,{trim:!0})}/${("formatTon"in e?e.formatTon:i(W))(e.total,{trim:!0})} TON`), 1)) : k("", !0)], 64)) : (t(), y(o, {
          key: 0,
          class: "skeleton"
        }))]), (_ = e.marketDetails) != null && _.statistics ? (t(), a("div", De, [r("div", Ie, [E(n, {
          name: "personal",
          class: "icon"
        }), e.marketDetails.statistics.holdersCount ? (t(), a("span", Re, d(("formatCount" in e ? e.formatCount : i(w))(e.marketDetails.statistics.holdersCount, {
          accuracy: 0
        }).full), 1)) : (t(), a("span", ge, "—"))]), r("div", Oe, [E(n, {
          name: "transfer",
          class: "icon"
        }), e.marketDetails.statistics.transactionsCount ? (t(), a("span", Me, d(("formatCount" in e ? e.formatCount : i(w))(e.marketDetails.statistics.transactionsCount, {
          accuracy: 0
        }).full), 1)) : (t(), a("span", Ne, "—"))]), r("div", Ue, [e.marketDetails.statistics.marketCap ? (t(), a(L, {
          key: 0
        }, [r("span", je, d(("t" in e ? e.t : i(v))("memepad.jetton.stats.market_cap")), 1), r("span", We, d(`$${("formatCount"in e?e.formatCount:i(w))(e.marketDetails.statistics.marketCap).full}`), 1)], 64)) : (t(), a("span", Ve, "—"))])])) : (t(), y(l, {
          key: 1,
          text: ("t" in e ? e.t : i(v))("memepad.jetton.market_info_tooltip.text"),
          "text-min-width": 155,
          "text-max-width": 155
        }, {
          default: g(() => [r("button", ze, [E(n, {
            name: "circle-help",
            class: "icon"
          }), r("span", Fe, d(("t" in e ? e.t : i(v))("memepad.jetton.market_info_tooltip.label")), 1)])]),
          _: 1
        }, 8, ["text"]))]), r("div", Be, [r("div", {
          class: "line",
          style: N({
            width: `${e.percent}%`
          })
        }, null, 4)])])), i(m).length ? (t(), a("div", Ke, [r("div", Pe, [r("div", Ge, d(("t" in e ? e.t : i(v))("memepad.jetton.market_cap")), 1), (f = e.marketDetails) != null && f.marketCap ? (t(), a("div", He, [u[0] || (u[0] = r("span", {
          class: "dollar"
        }, "$", -1)), r("span", null, d(("formatCount" in e ? e.formatCount : i(w))(e.marketDetails.marketCap).full), 1)])) : (t(), y(o, {
          key: 1,
          class: "skeleton"
        }))]), r("div", Ye, [(t(!0), a(L, null, j(i(m), p => (t(), a("div", {
          key: p.title,
          class: "item"
        }, [r("span", qe, d(p.title), 1), p.value === void 0 ? (t(), y(o, {
          key: 0,
          class: "skeleton"
        })) : (t(), a("span", Qe, [typeof p.value == "string" ? (t(), a(L, {
          key: 0
        }, [V(d(p.value), 1)], 64)) : p.value === null ? (t(), a(L, {
          key: 1
        }, [V(" — ")], 64)) : (t(), a(L, {
          key: 2
        }, [p.value.prefix ? (t(), a("span", Xe, d(p.value.prefix), 1)) : k("", !0), r("span", null, d(p.value.value), 1), p.value.postfix ? (t(), a("span", Ze, d(p.value.postfix), 1)) : k("", !0)], 64))]))]))), 128))])])) : k("", !0)])
      }
    }
  }),
  Lt = A(Je, [
    ["__scopeId", "data-v-559baa4e"]
  ]),
  xe = {
    class: "memepad-jetton-actions-controls-input"
  },
  et = $({
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
              const T = [...o.value.value].findIndex((D, I) => D !== e.modelValue[I]);
              T !== -1 && o.value.value[T] === "," && (c = c.slice(0, T) + "." + c.slice(T))
            }
            c = (e.modifier || (T => T))(c), o.value && o.value.value !== c && (o.value.value = c), u("update:modelValue", c)
          }
        });
      F(() => e.modelValue, l), F(() => o.value, l);
      const f = O(() => {
          const c = window.innerWidth,
            b = e.modelValue.length + (e.postfix ? e.postfix.length : 0),
            T = Math.floor((c - 360) / 30) + 12.5,
            D = b - T,
            I = Math.min(Math.max(1 - D / b, 0), 1);
          return {
            fontSize: `${44*I}px`,
            lineHeight: `${52*I}px`
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
      return (c, b) => (t(), a("label", xe, [ne(r("input", {
        ref_key: "inputRef",
        ref: o,
        "onUpdate:modelValue": b[0] || (b[0] = T => le(_) ? _.value = T : null),
        type: "text",
        inputmode: "decimal",
        style: N(i(f)),
        onBlur: b[1] || (b[1] = T => u("blur"))
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
  $t = A(et, [
    ["__scopeId", "data-v-ece355cf"]
  ]),
  tt = {
    class: "memepad-jetton-actions-controls-presets"
  },
  st = ["onClick"],
  ot = $({
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
            o = (c, b) => ({
              label: c === 100 ? "MAX" : `${c}%`,
              value: b ?? new B(0)
            }),
            n = (f = (_ = s.balances) == null ? void 0 : _.tonBalance) == null ? void 0 : f.value,
            l = (S = (p = s.balances) == null ? void 0 : p.jettonBalance) == null ? void 0 : S.value;
          return s.tab === ue.BUY ? [u(.3), u(.5), u(10), o(100, n)] : [o(25, l == null ? void 0 : l.mul(.25)), o(50, l == null ? void 0 : l.mul(.5)), o(75, l == null ? void 0 : l.mul(.75)), o(100, l)]
        });
      return (u, o) => (t(), a("div", tt, [(t(!0), a(L, null, j(i(e), n => (t(), a("button", {
        key: n.label,
        type: "button",
        class: "item reset",
        onClick: l => m.value = n.value.toFixed()
      }, d(n.label), 9, st))), 128))]))
    }
  }),
  Ct = A(ot, [
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
  pt = $({
    __name: "Modal",
    setup(h) {
      return (s, m) => {
        const e = pe;
        return t(), a("div", nt, [C(s.$slots, "top", {}, () => [r("div", at, [m[0] || (m[0] = r("div", {
          class: "left"
        }, null, -1)), r("div", lt, [C(s.$slots, "top-center", {}, void 0, !0)]), r("div", it, [C(s.$slots, "top-right", {}, void 0, !0)])])], !0), r("div", rt, [C(s.$slots, "default", {}, void 0, !0)]), E(e, {
          "ignore-tabs": "",
          "hide-space": ""
        }, {
          default: g(() => [r("div", ct, [r("div", ut, [C(s.$slots, "bottom-action", {}, void 0, !0)]), s.$slots["bottom-helpers"] ? (t(), a("div", dt, [C(s.$slots, "bottom-helpers", {}, void 0, !0)])) : k("", !0)])]),
          _: 3
        })])
      }
    }
  }),
  At = A(pt, [
    ["__scopeId", "data-v-8cc99962"]
  ]);
export {
  kt as _, Tt as a, bt as b, yt as c, $t as d, Ct as e, At as f, Lt as g
};