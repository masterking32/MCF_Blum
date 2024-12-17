import {
  d as D,
  a as t,
  c as l,
  k as U,
  b as o,
  t as b,
  N as Q,
  j as I,
  m as S,
  x as z,
  W as w,
  X as x,
  g,
  e as u,
  c3 as ce,
  ab as ue,
  P as de,
  f as $,
  B as se,
  b8 as pe,
  bj as me,
  C as ne,
  bI as _e,
  b2 as ve,
  c4 as F,
  n as oe,
  aC as j,
  F as E,
  ai as X,
  a$ as V,
  bH as fe,
  c5 as he,
  aY as J,
  aL as W,
  h as ee,
  r as K,
  av as te,
  aj as ke,
  w as ae,
  bR as le,
  V as be,
  b6 as ye,
  az as Te,
  aA as Le,
  af as M,
  bF as P
} from "./Dq6b0IKe.js";
import {
  _ as $e
} from "./CMDdrpVt.js";
import {
  _ as ie
} from "./C_9zws1G.js";
import {
  _ as re
} from "./D9DHcFey.js";
import {
  _ as Ce
} from "./DZs_7pon.js";
const Ae = {
    class: "memepad-jetton-action-controls-balance"
  },
  ge = {
    class: "label"
  },
  Se = D({
    __name: "Balance",
    props: {
      balance: {}
    },
    setup(C) {
      return (s, m) => {
        const e = Q;
        return t(), l("div", Ae, [U(e, {
          name: "wallet",
          class: "icon"
        }), o("span", ge, b(s.balance), 1)])
      }
    }
  }),
  Mt = I(Se, [
    ["__scopeId", "data-v-5ed33e11"]
  ]),
  we = {
    type: "button",
    class: "memepad-jetton-action-controls-fees"
  },
  Ee = {
    key: 1,
    class: "fees"
  },
  De = {
    class: "tooltip-detail"
  },
  Ne = {
    key: 0
  },
  Oe = {
    class: "label"
  },
  Re = D({
    __name: "Fees",
    props: {
      details: {},
      totalLabel: {},
      errorMessage: {}
    },
    setup(C) {
      return (s, m) => {
        const e = $e,
          p = Q,
          n = ie;
        return t(), l("div", we, [s.errorMessage ? (t(), S(e, {
          key: 0,
          "error-message": s.errorMessage
        }, null, 8, ["error-message"])) : s.details && s.totalLabel ? (t(), l("div", Ee, [s.details.length ? (t(), S(n, {
          key: 0,
          "text-min-width": 155,
          alignment: u(ce).TOP
        }, {
          default: z(() => [U(p, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: z(() => [o("div", De, [(t(!0), l(w, null, x(s.details, (c, _) => (t(), l(w, {
            key: c.label
          }, [o("span", null, b(c.label), 1), _ !== s.details.length - 1 ? (t(), l("br", Ne)) : g("", !0)], 64))), 128))])]),
          _: 1
        }, 8, ["alignment"])) : g("", !0), o("span", Oe, b(s.totalLabel), 1)])) : g("", !0)])
      }
    }
  }),
  jt = I(Re, [
    ["__scopeId", "data-v-1a2557c2"]
  ]),
  It = D({
    __name: "TopUpButton",
    props: {
      jettonAddress: {},
      jettonShortname: {}
    },
    setup(C) {
      const s = C,
        m = ue(),
        e = de().$webApp;

      function p(...c) {
        return c.includes(e.platform)
      }
      const n = () => {
        m.memepad.memepadTopupWallet({
          jettonShortname: s.jettonShortname,
          jettonAddress: s.jettonAddress
        });
        const c = pe().tonConnectUI.value,
          f = (c.walletInfo || c.wallet).universalLink;
        if (me(f)) {
          const L = "https://t.me/wallet/start?startapp=main-rc__a0646df863";
          p("ios", "weba", "android", "tdesktop", "webk") ? e.openTelegramLink(L) : e.openLink(L)
        } else e.openLink(f)
      };
      return (c, _) => {
        const f = ne;
        return t(), S(f, {
          label: ("t" in c ? c.t : u($))("memepad.top_up_wallet_button"),
          fill: "",
          size: u(se).LARGE,
          onClick: n
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Me = D({
    __name: "StateButtonWrapper",
    props: {
      forceLoading: {
        type: Boolean,
        default: !1
      },
      buttonSize: {
        default: se.LARGE
      }
    },
    setup(C) {
      const s = _e().status,
        m = ve();
      return (e, p) => {
        const n = ne,
          c = re;
        return u(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : u(F)).DISCONNECTED ? (t(), S(n, {
          key: 0,
          label: ("t" in e ? e.t : u($))("wallet.connect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: p[0] || (p[0] = _ => u(m).runConnectionFlow())
        }, null, 8, ["label", "size"])) : u(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : u(F)).MUST_RECONNECT ? (t(), S(n, {
          key: 1,
          label: ("t" in e ? e.t : u($))("wallet.reconnect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: p[1] || (p[1] = _ => u(m).runConnectionFlow())
        }, null, 8, ["label", "size"])) : u(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : u(F)).LOADING || e.forceLoading ? (t(), S(c, {
          key: 2,
          class: oe(["skeleton", `is-${e.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : u(s) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : u(F)).CONNECTED ? j(e.$slots, "default", {
          key: 3
        }, void 0, !0) : g("", !0)
      }
    }
  }),
  Vt = I(Me, [
    ["__scopeId", "data-v-1e641cbd"]
  ]),
  je = {
    class: "memepad-jetton-market-info"
  },
  Ie = {
    key: 0,
    class: "top"
  },
  Ve = {
    class: "data"
  },
  Ue = {
    class: "left"
  },
  We = {
    key: 0,
    class: "percent"
  },
  Be = {
    key: 1,
    class: "part"
  },
  Fe = {
    key: 0,
    class: "market-details"
  },
  Pe = {
    class: "holders-count"
  },
  ze = {
    key: 0
  },
  Ke = {
    key: 1
  },
  Ge = {
    class: "transactions-count"
  },
  Ye = {
    key: 0
  },
  qe = {
    key: 1
  },
  He = {
    class: "market-cap"
  },
  Xe = {
    class: "label"
  },
  Ze = {
    class: "value"
  },
  Je = {
    key: 1
  },
  Qe = {
    type: "button",
    class: "memepad-jetton-market-info-tooltip reset"
  },
  xe = {
    class: "text"
  },
  et = {
    class: "progress"
  },
  tt = {
    key: 1,
    class: "metrics"
  },
  st = {
    class: "cap"
  },
  nt = {
    class: "title"
  },
  ot = {
    key: 0,
    class: "value"
  },
  at = {
    class: "list"
  },
  lt = {
    class: "title"
  },
  it = {
    key: 1,
    class: "value"
  },
  rt = {
    key: 0,
    class: "prefix"
  },
  ct = {
    key: 1,
    class: "postfix"
  },
  ut = D({
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
    setup(C) {
      const s = C,
        m = E(() => {
          var p;
          if (!((p = s.marketDetails) != null && p.listRows)) return [];
          const e = [];
          if ("holdersCount" in s.marketDetails.listRows) {
            const n = s.marketDetails.listRows.holdersCount,
              c = s.marketDetails.listRows.transactionsCount,
              _ = s.marketDetails.listRows.transactionsVolume;
            e.push({
              title: $("memepad.jetton.holders"),
              value: n != null ? X(n, {
                accuracy: 0
              }) : n
            }), e.push({
              title: $("memepad.jetton.transactions"),
              value: c != null ? X(c, {
                accuracy: 0
              }) : c
            }), e.push({
              title: $("memepad.jetton.trading_volume"),
              value: _ != null ? (() => {
                const {
                  value: f,
                  postfix: L
                } = V(_);
                return {
                  prefix: "$",
                  value: f,
                  postfix: L
                }
              })() : _
            })
          } else if ("price" in s.marketDetails.listRows) {
            const n = s.marketDetails.listRows.price,
              c = s.marketDetails.listRows.maxSupply,
              _ = s.marketDetails.listRows.availableSupply;
            e.push({
              title: $("memepad.jetton.price"),
              value: n != null ? {
                prefix: "$",
                value: fe(n, {
                  accuracy: 10
                })
              } : n
            }), e.push({
              title: $("memepad.jetton.max_supply"),
              value: c != null ? V(c) : c
            }), e.push({
              title: $("memepad.jetton.available"),
              value: _ != null ? X(_, {
                accuracy: 0
              }) : _
            })
          }
          return e
        });
      return (e, p) => {
        var f, L;
        const n = re,
          c = Q,
          _ = ie;
        return t(), l("div", je, [e.isReleased ? g("", !0) : (t(), l("div", Ie, [o("div", Ve, [o("div", Ue, [e.total !== void 0 && e.collected !== void 0 || e.percent ? (t(), l(w, {
          key: 1
        }, [e.percent !== void 0 ? (t(), l("span", We, b(`${u(he)(e.percent)}%`), 1)) : g("", !0), e.total !== void 0 && e.collected !== void 0 ? (t(), l("span", Be, b(`${("formatTon"in e?e.formatTon:u(J))(e.collected,2)}/${("formatTon"in e?e.formatTon:u(J))(e.total,2)} TON`), 1)) : g("", !0)], 64)) : (t(), S(n, {
          key: 0,
          class: "skeleton"
        }))]), (f = e.marketDetails) != null && f.statistics ? (t(), l("div", Fe, [o("div", Pe, [U(c, {
          name: "personal",
          class: "icon"
        }), e.marketDetails.statistics.holdersCount ? (t(), l("span", ze, b(("formatCount" in e ? e.formatCount : u(V))(e.marketDetails.statistics.holdersCount, 0).full), 1)) : (t(), l("span", Ke, "—"))]), o("div", Ge, [U(c, {
          name: "transfer",
          class: "icon"
        }), e.marketDetails.statistics.transactionsCount ? (t(), l("span", Ye, b(("formatCount" in e ? e.formatCount : u(V))(e.marketDetails.statistics.transactionsCount, 0).full), 1)) : (t(), l("span", qe, "—"))]), o("div", He, [e.marketDetails.statistics.marketCap ? (t(), l(w, {
          key: 0
        }, [o("span", Xe, b(("t" in e ? e.t : u($))("memepad.jetton.stats.market_cap")), 1), o("span", Ze, b(`$${("formatCount"in e?e.formatCount:u(V))(e.marketDetails.statistics.marketCap).full}`), 1)], 64)) : (t(), l("span", Je, "—"))])])) : (t(), S(_, {
          key: 1,
          text: ("t" in e ? e.t : u($))("memepad.jetton.market_info_tooltip.text"),
          "text-min-width": 155,
          "text-max-width": 155
        }, {
          default: z(() => [o("button", Qe, [U(c, {
            name: "circle-help",
            class: "icon"
          }), o("span", xe, b(("t" in e ? e.t : u($))("memepad.jetton.market_info_tooltip.label")), 1)])]),
          _: 1
        }, 8, ["text"]))]), o("div", et, [o("div", {
          class: "line",
          style: W({
            width: `${e.percent}%`
          })
        }, null, 4)])])), u(m).length ? (t(), l("div", tt, [o("div", st, [o("div", nt, b(("t" in e ? e.t : u($))("memepad.jetton.market_cap")), 1), (L = e.marketDetails) != null && L.marketCap ? (t(), l("div", ot, [p[0] || (p[0] = o("span", {
          class: "dollar"
        }, "$", -1)), o("span", null, b(("formatCount" in e ? e.formatCount : u(V))(e.marketDetails.marketCap).full), 1)])) : (t(), S(n, {
          key: 1,
          class: "skeleton"
        }))]), o("div", at, [(t(!0), l(w, null, x(u(m), y => (t(), l("div", {
          key: y.title,
          class: "item"
        }, [o("span", lt, b(y.title), 1), y.value === void 0 ? (t(), S(n, {
          key: 0,
          class: "skeleton"
        })) : (t(), l("span", it, [typeof y.value == "string" ? (t(), l(w, {
          key: 0
        }, [ee(b(y.value), 1)], 64)) : y.value === null ? (t(), l(w, {
          key: 1
        }, [ee(" — ")], 64)) : (t(), l(w, {
          key: 2
        }, [y.value.prefix ? (t(), l("span", rt, b(y.value.prefix), 1)) : g("", !0), o("span", null, b(y.value.value), 1), y.value.postfix ? (t(), l("span", ct, b(y.value.postfix), 1)) : g("", !0)], 64))]))]))), 128))])])) : g("", !0)])
      }
    }
  }),
  Ut = I(ut, [
    ["__scopeId", "data-v-545e890a"]
  ]),
  dt = {
    class: "memepad-jetton-actions-controls-input"
  },
  pt = D({
    __name: "Input",
    props: {
      modelValue: {},
      postfix: {},
      modifier: {
        type: Function
      }
    },
    emits: ["update:modelValue", "blur"],
    setup(C, {
      expose: s,
      emit: m
    }) {
      const e = C,
        p = m,
        n = K(),
        c = K(),
        _ = () => {
          ye(() => {
            n.value && (n.value.style.width = "", n.value.style.width = n.value.scrollWidth + "px")
          })
        },
        f = E({
          get: () => e.modelValue,
          set: v => {
            if (n.value && n.value.value !== e.modelValue) {
              const a = [...n.value.value].findIndex((r, i) => r !== e.modelValue[i]);
              a !== -1 && n.value.value[a] === "," && (v = v.slice(0, a) + "." + v.slice(a))
            }
            v = (e.modifier || (a => a))(v), n.value && n.value.value !== v && (n.value.value = v), p("update:modelValue", v)
          }
        });
      te(() => e.modelValue, _), te(() => n.value, _);
      const L = E(() => {
          const v = window.innerWidth,
            T = e.modelValue.length + (e.postfix ? e.postfix.length : 0),
            a = Math.floor((v - 360) / 30) + 12.5,
            r = T - a,
            i = Math.min(Math.max(1 - r / T, 0), 1);
          return {
            fontSize: `${44*i}px`,
            lineHeight: `${52*i}px`
          }
        }),
        y = () => {
          var v;
          (v = c.value) == null || v.focus()
        };
      ke(() => {
        y()
      }), s({
        focusOnInput: y
      });
      const G = () => {
        setTimeout(() => {
          var v;
          (v = n.value) == null || v.focus()
        }, 100)
      };
      return (v, T) => (t(), l("label", dt, [ae(o("input", {
        ref_key: "inputRef",
        ref: n,
        "onUpdate:modelValue": T[0] || (T[0] = a => be(f) ? f.value = a : null),
        type: "text",
        inputmode: "decimal",
        style: W(u(L)),
        onBlur: T[1] || (T[1] = a => p("blur"))
      }, null, 36), [
        [le, u(f)]
      ]), o("input", {
        ref_key: "hiddenInputRef",
        ref: c,
        type: "text",
        inputmode: "decimal",
        class: "hidden",
        onFocus: G
      }, null, 544), v.postfix ? (t(), l("span", {
        key: 0,
        class: "label",
        style: W(u(L))
      }, b(v.postfix), 5)) : g("", !0)]))
    }
  }),
  Wt = I(pt, [
    ["__scopeId", "data-v-ece355cf"]
  ]),
  mt = {
    class: "memepad-jetton-actions-controls-range-slider"
  },
  _t = {
    class: "marks"
  },
  vt = {
    class: "line"
  },
  ft = {
    class: "inner"
  },
  ht = {
    class: "content"
  },
  kt = {
    class: "label"
  },
  Z = 100,
  bt = D({
    __name: "RangeInput",
    props: Te({
      balances: {},
      tab: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(C, {
      expose: s
    }) {
      const m = C,
        e = Le(C, "modelValue"),
        p = K(null),
        n = K("0"),
        c = E(() => new M(e.value.replaceAll(",", "") || "0")),
        _ = E(() => {
          const a = {
              0: {
                value: 0
              },
              20: {
                value: .3
              },
              40: {
                value: 5
              },
              60: {
                value: 10
              },
              80: {
                value: 20
              },
              100: {
                value: 50
              }
            },
            r = {
              0: {
                percent: 0
              },
              33: {
                percent: 20
              },
              66: {
                percent: 50
              },
              100: {
                percent: 100
              }
            };
          return m.tab === P.SELL ? r : a
        }),
        f = E(() => {
          const a = _.value,
            r = Object.keys(a).map(Number).sort((h, d) => h - d),
            i = [];
          for (let h = 0; h <= Z; h++) {
            const d = h;
            if (r.includes(d)) {
              const A = a[d],
                R = "value" in A ? A.value : A.percent;
              i.push(R);
              continue
            }
            let k, N, O, B;
            for (let A = 0; A < r.length - 1; A++)
              if (d > r[A] && d < r[A + 1]) {
                k = r[A], N = r[A + 1];
                const R = a[k],
                  H = a[N];
                O = "value" in R ? R.value : R.percent, B = "value" in H ? H.value : H.percent;
                break
              } if (k === void 0 || N === void 0 || O === void 0 || B === void 0) continue;
            const Y = (d - k) / (N - k),
              q = O + Y * (B - O);
            i.push(q)
          }
          return i
        }),
        L = E(() => {
          const a = _.value,
            i = Object.keys(a).map(Number).sort((d, k) => d - k).map(d => {
              const k = a[d];
              return "value" in k ? k.value : k.percent
            }),
            h = [];
          for (let d = 0; d < i.length; d++) {
            const k = i[d],
              N = f.value.indexOf(k),
              O = N / Z * 100,
              B = Math.min(new M(k).decimalPlaces(), 2),
              Y = d === 0,
              q = d === i.length - 1,
              A = new M(T.value).gte(O),
              R = m.tab === P.SELL ? `${k}%` : `${J(k,B)} TON`;
            h.push({
              label: R,
              position: N,
              percent: O,
              isFirst: Y,
              isLast: q,
              isActive: A
            })
          }
          return h
        }),
        y = () => {
          const a = c.value,
            r = String((() => {
              var i;
              if (m.tab === P.BUY) {
                for (let h = 0; h < f.value.length; h++) {
                  const d = new M(f.value[h]);
                  if (a.eq(d)) return h;
                  if (a.lte(d)) return h - 1
                }
                return Z
              } else {
                if (!((i = m.balances) != null && i.jettonBalance)) return 0;
                const h = m.balances.jettonBalance.value;
                for (let d = 0; d < f.value.length; d++) {
                  const k = h.times(f.value[d]).div(100);
                  if (a.eq(k)) return d;
                  if (a.lte(k)) return d - 1
                }
                return 0
              }
            })());
          n.value = r, p.value && p.value.value !== r && (p.value.value = r)
        },
        G = a => L.value.find(r => Math.abs(Number(r.percent) - a) < 4 && !r.isFirst),
        v = a => {
          var r;
          if (m.tab === P.BUY) {
            const i = Math.min(new M(a).decimalPlaces(), 2);
            e.value = new M(a).toDecimalPlaces(i, M.ROUND_DOWN).toFixed(i)
          } else {
            if (!((r = m.balances) != null && r.jettonBalance)) return;
            const h = m.balances.jettonBalance.value.times(a).div(100);
            e.value = h.toFixed()
          }
        },
        T = E({
          get: () => n.value,
          set: a => {
            var d;
            const r = Number(a),
              i = (d = G(r)) == null ? void 0 : d.percent;
            i && p.value && p.value.value !== String(i) && (p.value.value = String(i));
            const h = f.value[i ?? r];
            n.value = String(i ?? r), v(String(h))
          }
        });
      return s({
        applyNearestValue: y
      }), (a, r) => (t(), l("label", mt, [ae(o("input", {
        ref_key: "inputRef",
        ref: p,
        "onUpdate:modelValue": r[0] || (r[0] = i => T.value = i),
        type: "range",
        step: 1,
        min: 0,
        max: 100,
        style: W({
          "--value": T.value
        })
      }, null, 4), [
        [le, T.value]
      ]), o("div", _t, [o("div", vt, [o("div", {
        class: "filled",
        style: W({
          "--width": `${T.value}%`
        })
      }, null, 4)]), o("div", ft, [(t(!0), l(w, null, x(L.value, i => (t(), l("div", {
        key: i.position,
        style: W({
          "--left": `${i.percent}%`
        }),
        class: oe([{
          "is-last": i.isLast,
          "is-first": i.isFirst,
          "is-active": i.isActive
        }, "item"])
      }, [o("div", ht, [r[1] || (r[1] = o("div", {
        class: "point"
      }, null, -1)), o("div", kt, b(i.label), 1)])], 6))), 128))])])]))
    }
  }),
  Bt = I(bt, [
    ["__scopeId", "data-v-ac951fbf"]
  ]),
  yt = {
    class: "memepad-jetton-modal"
  },
  Tt = {
    class: "top"
  },
  Lt = {
    class: "center"
  },
  $t = {
    class: "right"
  },
  Ct = {
    class: "inner"
  },
  At = {
    class: "memepad-jetton-modal-bottom"
  },
  gt = {
    class: "action"
  },
  St = {
    key: 0,
    class: "helpers"
  },
  wt = D({
    __name: "Modal",
    setup(C) {
      return (s, m) => {
        const e = Ce;
        return t(), l("div", yt, [j(s.$slots, "top", {}, () => [o("div", Tt, [m[0] || (m[0] = o("div", {
          class: "left"
        }, null, -1)), o("div", Lt, [j(s.$slots, "top-center", {}, void 0, !0)]), o("div", $t, [j(s.$slots, "top-right", {}, void 0, !0)])])], !0), o("div", Ct, [j(s.$slots, "default", {}, void 0, !0)]), U(e, {
          "ignore-tabs": "",
          "hide-space": ""
        }, {
          default: z(() => [o("div", At, [o("div", gt, [j(s.$slots, "bottom-action", {}, void 0, !0)]), s.$slots["bottom-helpers"] ? (t(), l("div", St, [j(s.$slots, "bottom-helpers", {}, void 0, !0)])) : g("", !0)])]),
          _: 3
        })])
      }
    }
  }),
  Ft = I(wt, [
    ["__scopeId", "data-v-8cc99962"]
  ]);
export {
  Mt as _, jt as a, It as b, Vt as c, Wt as d, Bt as e, Ft as f, Ut as g
};