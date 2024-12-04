import {
  d as C,
  a as s,
  c as l,
  k as V,
  b as n,
  t as k,
  N as q,
  j as R,
  m as A,
  x as z,
  W as I,
  X as ee,
  g as $,
  e as u,
  bw as de,
  ab as me,
  P as ne,
  f as T,
  B as oe,
  ba as _e,
  bm as ve,
  C as ae,
  b2 as fe,
  b3 as he,
  b5 as P,
  n as le,
  aC as F,
  F as M,
  a_ as be,
  aL as W,
  L as ie,
  bl as w,
  ai as J,
  b0 as K,
  bC as ke,
  c4 as ye,
  aZ as x,
  h as te,
  r as G,
  av as se,
  aj as Te,
  w as re,
  bU as ce,
  V as ge,
  b8 as Le,
  az as Se,
  aA as $e,
  af as j,
  bK as B
} from "./BPAM48h1.js";
import {
  _ as ue
} from "./BZ8Eaxl8.js";
import {
  _ as pe
} from "./9SzTReHX.js";
import {
  _ as Ee
} from "./VoK4CKOe.js";
const Ae = {
    class: "memepad-jetton-action-controls-balance"
  },
  we = {
    class: "label"
  },
  Ce = C({
    __name: "Balance",
    props: {
      balance: {}
    },
    setup(a) {
      return (t, d) => {
        const e = q;
        return s(), l("div", Ae, [V(e, {
          name: "wallet",
          class: "icon"
        }), n("span", we, k(t.balance), 1)])
      }
    }
  }),
  Gt = R(Ce, [
    ["__scopeId", "data-v-5ed33e11"]
  ]),
  Ie = {
    class: "kit-error-message"
  },
  Me = {
    class: "label"
  },
  Re = C({
    __name: "ErrorMessage",
    props: {
      errorMessage: {}
    },
    setup(a) {
      return (t, d) => {
        const e = q;
        return s(), l("div", Ie, [V(e, {
          name: "circle-warning",
          class: "icon"
        }), n("span", Me, k(t.errorMessage), 1)])
      }
    }
  }),
  De = R(Re, [
    ["__scopeId", "data-v-f9832edf"]
  ]),
  Oe = {
    type: "button",
    class: "memepad-jetton-action-controls-fees"
  },
  Ne = {
    key: 1,
    class: "fees"
  },
  je = {
    class: "memepad-jetton-action-controls-fees-tooltip-detail"
  },
  Fe = {
    key: 0
  },
  Ve = {
    class: "label"
  },
  We = C({
    __name: "Fees",
    props: {
      details: {},
      totalLabel: {},
      errorMessage: {}
    },
    setup(a) {
      return (t, d) => {
        const e = De,
          _ = q,
          o = ue;
        return s(), l("div", Oe, [t.errorMessage ? (s(), A(e, {
          key: 0,
          "error-message": t.errorMessage
        }, null, 8, ["error-message"])) : t.details && t.totalLabel ? (s(), l("div", Ne, [t.details.length ? (s(), A(o, {
          key: 0,
          "text-min-width": 155,
          alignment: u(de).TOP
        }, {
          default: z(() => [V(_, {
            name: "circle-help",
            class: "memepad-jetton-action-controls-fees-tooltip-icon"
          })]),
          inner: z(() => [n("div", je, [(s(!0), l(I, null, ee(t.details, (p, v) => (s(), l(I, {
            key: p.label
          }, [n("span", null, k(p.label), 1), v !== t.details.length - 1 ? (s(), l("br", Fe)) : $("", !0)], 64))), 128))])]),
          _: 1
        }, 8, ["alignment"])) : $("", !0), n("span", Ve, k(t.totalLabel), 1)])) : $("", !0)])
      }
    }
  }),
  qt = R(We, [
    ["__scopeId", "data-v-a277f7f4"]
  ]),
  Xt = C({
    __name: "TopUpButton",
    props: {
      jettonAddress: {},
      jettonShortname: {}
    },
    setup(a) {
      const t = a,
        d = me(),
        e = ne().$webApp;

      function _(...p) {
        return p.includes(e.platform)
      }
      const o = () => {
        d.memepad.memepadTopupWallet({
          jettonShortname: t.jettonShortname,
          jettonAddress: t.jettonAddress
        });
        const p = _e().tonConnectUI.value,
          h = (p.walletInfo || p.wallet).universalLink;
        if (ve(h)) {
          const S = "https://t.me/wallet/start?startapp=main-rc__a0646df863";
          _("ios", "weba", "android", "tdesktop", "webk") ? e.openTelegramLink(S) : e.openLink(S)
        } else e.openLink(h)
      };
      return (p, v) => {
        const h = ae;
        return s(), A(h, {
          label: ("t" in p ? p.t : u(T))("memepad.top_up_wallet_button"),
          fill: "",
          size: u(oe).LARGE,
          onClick: o
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Ke = C({
    __name: "StateButtonWrapper",
    props: {
      forceLoading: {
        type: Boolean,
        default: !1
      },
      buttonSize: {
        default: oe.LARGE
      }
    },
    setup(a) {
      const t = fe(),
        d = he();
      return (e, _) => {
        const o = ae,
          p = pe;
        return u(t) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : u(P)).DISCONNECTED ? (s(), A(o, {
          key: 0,
          label: ("t" in e ? e.t : u(T))("wallet.connect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: _[0] || (_[0] = v => u(d).runConnectionFlow())
        }, null, 8, ["label", "size"])) : u(t) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : u(P)).MUST_RECONNECT ? (s(), A(o, {
          key: 1,
          label: ("t" in e ? e.t : u(T))("wallet.reconnect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: _[1] || (_[1] = v => u(d).runConnectionFlow())
        }, null, 8, ["label", "size"])) : u(t) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : u(P)).LOADING || e.forceLoading ? (s(), A(p, {
          key: 2,
          class: le(["skeleton", `is-${e.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : u(t) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : u(P)).CONNECTED ? F(e.$slots, "default", {
          key: 3
        }, void 0, !0) : $("", !0)
      }
    }
  }),
  Yt = R(Ke, [
    ["__scopeId", "data-v-7e755239"]
  ]),
  Ue = C({
    __name: "Banner",
    props: {
      bannerFileKey: {}
    },
    setup(a) {
      const t = a,
        d = M(() => t.bannerFileKey ? be(t.bannerFileKey) : void 0);
      return (e, _) => u(d) ? (s(), l("div", {
        key: 0,
        class: "memepad-jetton-banner",
        style: W({
          backgroundImage: `url(${u(d)})`
        })
      }, null, 4)) : $("", !0)
    }
  }),
  Ht = R(Ue, [
    ["__scopeId", "data-v-352c6c64"]
  ]),
  Pe = a => {
    switch (a) {
      case w.TELEGRAM:
        return {
          display: T("memepad.social_providers.telegram.label"), placeholder: T("memepad.social_providers.telegram.placeholder"), icon: "social-providers/telegram", apiKey: "telegram", skipUrlValidation: !0
        };
      case w.TWITTER:
        return {
          display: T("memepad.social_providers.twitter.label"), placeholder: "x.com/", icon: "social-providers/x", apiKey: "x"
        };
      case w.INSTAGRAM:
        return {
          display: T("memepad.social_providers.instagram.label"), placeholder: "instagram.com/", icon: "social-providers/instagram", apiKey: "instagram"
        };
      case w.WEBSITE:
        return {
          display: T("memepad.social_providers.website.label"), placeholder: "https://", icon: "social-providers/web", apiKey: "web"
        };
      default:
        throw ie("Invalid social provider")
    }
  },
  Zt = (a, t) => {
    const d = ne().$webApp;
    switch (a) {
      case w.TELEGRAM:
        return d.openTelegramLink(t);
      case w.TWITTER:
      case w.INSTAGRAM:
      case w.WEBSITE:
        return d.openLink(t);
      default:
        throw ie("Invalid social provider")
    }
  },
  Jt = () => {
    const a = Object.values(w);
    return Object.fromEntries(a.map(t => [t, Pe(t)]))
  },
  Be = () => {
    const a = Object.keys(w);
    return Object.fromEntries(a.map(t => [t, void 0]))
  },
  ze = () => ({
    iconFileKey: void 0,
    name: void 0,
    ticker: void 0,
    description: void 0
  }),
  Ge = () => ({
    bannerFileKey: void 0,
    socialProviders: Be(),
    isNSFW: !1
  }),
  qe = () => ({
    share: 0,
    overview: void 0
  }),
  Qt = {
    step1: ze,
    step2: Ge,
    step3: qe
  },
  xt = a => ({
    ...a.step1,
    ...a.step2,
    ...a.step3
  }),
  es = a => ({
    step: 4,
    step1: {
      name: a.name,
      description: a.description,
      iconFileKey: a.iconFileKey,
      ticker: a.ticker
    },
    step2: {
      bannerFileKey: a.bannerFileKey,
      isNSFW: a.isNSFW,
      socialProviders: a.socialProviders
    },
    step3: {
      share: a.share,
      overview: a.overview
    }
  }),
  Xe = {
    class: "memepad-jetton-market-info"
  },
  Ye = {
    key: 0,
    class: "top"
  },
  He = {
    class: "data"
  },
  Ze = {
    class: "left"
  },
  Je = {
    key: 0,
    class: "percent"
  },
  Qe = {
    key: 1,
    class: "part"
  },
  xe = {
    key: 0,
    class: "market-details"
  },
  et = {
    class: "holders-count"
  },
  tt = {
    key: 0
  },
  st = {
    key: 1
  },
  nt = {
    class: "transactions-count"
  },
  ot = {
    key: 0
  },
  at = {
    key: 1
  },
  lt = {
    class: "market-cap"
  },
  it = {
    class: "label"
  },
  rt = {
    class: "value"
  },
  ct = {
    key: 1
  },
  ut = {
    type: "button",
    class: "memepad-jetton-market-info-tooltip reset"
  },
  pt = {
    class: "text"
  },
  dt = {
    class: "progress"
  },
  mt = {
    key: 1,
    class: "metrics"
  },
  _t = {
    class: "cap"
  },
  vt = {
    class: "title"
  },
  ft = {
    key: 0,
    class: "value"
  },
  ht = {
    class: "list"
  },
  bt = {
    class: "title"
  },
  kt = {
    key: 1,
    class: "value"
  },
  yt = {
    key: 0,
    class: "prefix"
  },
  Tt = {
    key: 1,
    class: "postfix"
  },
  gt = C({
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
    setup(a) {
      const t = a,
        d = M(() => {
          var _;
          if (!((_ = t.marketDetails) != null && _.listRows)) return [];
          const e = [];
          if ("holdersCount" in t.marketDetails.listRows) {
            const o = t.marketDetails.listRows.holdersCount,
              p = t.marketDetails.listRows.transactionsCount,
              v = t.marketDetails.listRows.transactionsVolume;
            e.push({
              title: T("memepad.jetton.holders"),
              value: o != null ? J(o, {
                accuracy: 0
              }) : o
            }), e.push({
              title: T("memepad.jetton.transactions"),
              value: p != null ? J(p, {
                accuracy: 0
              }) : p
            }), e.push({
              title: T("memepad.jetton.trading_volume"),
              value: v != null ? (() => {
                const {
                  value: h,
                  postfix: S
                } = K(v);
                return {
                  prefix: "$",
                  value: h,
                  postfix: S
                }
              })() : v
            })
          } else if ("price" in t.marketDetails.listRows) {
            const o = t.marketDetails.listRows.price,
              p = t.marketDetails.listRows.maxSupply,
              v = t.marketDetails.listRows.availableSupply;
            e.push({
              title: T("memepad.jetton.price"),
              value: o != null ? {
                prefix: "$",
                value: ke(o, 10)
              } : o
            }), e.push({
              title: T("memepad.jetton.max_supply"),
              value: p != null ? K(p) : p
            }), e.push({
              title: T("memepad.jetton.available"),
              value: v != null ? J(v, {
                accuracy: 0
              }) : v
            })
          }
          return e
        });
      return (e, _) => {
        var h, S;
        const o = pe,
          p = q,
          v = ue;
        return s(), l("div", Xe, [e.isReleased ? $("", !0) : (s(), l("div", Ye, [n("div", He, [n("div", Ze, [e.total !== void 0 && e.collected !== void 0 || e.percent ? (s(), l(I, {
          key: 1
        }, [e.percent !== void 0 ? (s(), l("span", Je, k(`${u(ye)(e.percent)}%`), 1)) : $("", !0), e.total !== void 0 && e.collected !== void 0 ? (s(), l("span", Qe, k(`${("formatTon"in e?e.formatTon:u(x))(e.collected,2)}/${("formatTon"in e?e.formatTon:u(x))(e.total,2)} TON`), 1)) : $("", !0)], 64)) : (s(), A(o, {
          key: 0,
          class: "skeleton"
        }))]), (h = e.marketDetails) != null && h.statistics ? (s(), l("div", xe, [n("div", et, [V(p, {
          name: "personal",
          class: "icon"
        }), e.marketDetails.statistics.holdersCount ? (s(), l("span", tt, k(("formatCount" in e ? e.formatCount : u(K))(e.marketDetails.statistics.holdersCount, 0).full), 1)) : (s(), l("span", st, "—"))]), n("div", nt, [V(p, {
          name: "transfer",
          class: "icon"
        }), e.marketDetails.statistics.transactionsCount ? (s(), l("span", ot, k(("formatCount" in e ? e.formatCount : u(K))(e.marketDetails.statistics.transactionsCount, 0).full), 1)) : (s(), l("span", at, "—"))]), n("div", lt, [e.marketDetails.statistics.marketCap ? (s(), l(I, {
          key: 0
        }, [n("span", it, k(("t" in e ? e.t : u(T))("memepad.jetton.stats.market_cap")), 1), n("span", rt, k(`$${("formatCount"in e?e.formatCount:u(K))(e.marketDetails.statistics.marketCap).full}`), 1)], 64)) : (s(), l("span", ct, "—"))])])) : (s(), A(v, {
          key: 1,
          text: ("t" in e ? e.t : u(T))("memepad.jetton.market_info_tooltip.text"),
          "text-min-width": 155,
          "text-max-width": 155
        }, {
          default: z(() => [n("button", ut, [V(p, {
            name: "circle-help",
            class: "icon"
          }), n("span", pt, k(("t" in e ? e.t : u(T))("memepad.jetton.market_info_tooltip.label")), 1)])]),
          _: 1
        }, 8, ["text"]))]), n("div", dt, [n("div", {
          class: "line",
          style: W({
            width: `${e.percent}%`
          })
        }, null, 4)])])), u(d).length ? (s(), l("div", mt, [n("div", _t, [n("div", vt, k(("t" in e ? e.t : u(T))("memepad.jetton.market_cap")), 1), (S = e.marketDetails) != null && S.marketCap ? (s(), l("div", ft, [_[0] || (_[0] = n("span", {
          class: "dollar"
        }, "$", -1)), n("span", null, k(("formatCount" in e ? e.formatCount : u(K))(e.marketDetails.marketCap).full), 1)])) : (s(), A(o, {
          key: 1,
          class: "skeleton"
        }))]), n("div", ht, [(s(!0), l(I, null, ee(u(d), g => (s(), l("div", {
          key: g.title,
          class: "item"
        }, [n("span", bt, k(g.title), 1), g.value === void 0 ? (s(), A(o, {
          key: 0,
          class: "skeleton"
        })) : (s(), l("span", kt, [typeof g.value == "string" ? (s(), l(I, {
          key: 0
        }, [te(k(g.value), 1)], 64)) : g.value === null ? (s(), l(I, {
          key: 1
        }, [te(" — ")], 64)) : (s(), l(I, {
          key: 2
        }, [g.value.prefix ? (s(), l("span", yt, k(g.value.prefix), 1)) : $("", !0), n("span", null, k(g.value.value), 1), g.value.postfix ? (s(), l("span", Tt, k(g.value.postfix), 1)) : $("", !0)], 64))]))]))), 128))])])) : $("", !0)])
      }
    }
  }),
  ts = R(gt, [
    ["__scopeId", "data-v-96338efe"]
  ]),
  Lt = {
    class: "memepad-jetton-actions-controls-input"
  },
  St = C({
    __name: "Input",
    props: {
      modelValue: {},
      postfix: {},
      modifier: {
        type: Function
      }
    },
    emits: ["update:modelValue", "blur"],
    setup(a, {
      expose: t,
      emit: d
    }) {
      const e = a,
        _ = d,
        o = G(),
        p = G(),
        v = () => {
          Le(() => {
            o.value && (o.value.style.width = "", o.value.style.width = o.value.scrollWidth + "px")
          })
        },
        h = M({
          get: () => e.modelValue,
          set: f => {
            if (o.value && o.value.value !== e.modelValue) {
              const i = [...o.value.value].findIndex((c, r) => c !== e.modelValue[r]);
              i !== -1 && o.value.value[i] === "," && (f = f.slice(0, i) + "." + f.slice(i))
            }
            f = (e.modifier || (i => i))(f), o.value && o.value.value !== f && (o.value.value = f), _("update:modelValue", f)
          }
        });
      se(() => e.modelValue, v), se(() => o.value, v);
      const S = M(() => {
          const f = window.innerWidth,
            L = e.modelValue.length + (e.postfix ? e.postfix.length : 0),
            i = Math.floor((f - 360) / 30) + 12.5,
            c = L - i,
            r = Math.min(Math.max(1 - c / L, 0), 1);
          return {
            fontSize: `${44*r}px`,
            lineHeight: `${52*r}px`
          }
        }),
        g = () => {
          var f;
          (f = p.value) == null || f.focus()
        };
      Te(() => {
        g()
      }), t({
        focusOnInput: g
      });
      const X = () => {
        setTimeout(() => {
          var f;
          (f = o.value) == null || f.focus()
        }, 100)
      };
      return (f, L) => (s(), l("label", Lt, [re(n("input", {
        ref_key: "inputRef",
        ref: o,
        "onUpdate:modelValue": L[0] || (L[0] = i => ge(h) ? h.value = i : null),
        type: "text",
        inputmode: "decimal",
        style: W(u(S)),
        onBlur: L[1] || (L[1] = i => _("blur"))
      }, null, 36), [
        [ce, u(h)]
      ]), n("input", {
        ref_key: "hiddenInputRef",
        ref: p,
        type: "text",
        inputmode: "decimal",
        class: "hidden",
        onFocus: X
      }, null, 544), f.postfix ? (s(), l("span", {
        key: 0,
        class: "label",
        style: W(u(S))
      }, k(f.postfix), 5)) : $("", !0)]))
    }
  }),
  ss = R(St, [
    ["__scopeId", "data-v-ece355cf"]
  ]),
  $t = {
    class: "memepad-jetton-actions-controls-range-slider"
  },
  Et = {
    class: "marks"
  },
  At = {
    class: "line"
  },
  wt = {
    class: "inner"
  },
  Ct = {
    class: "content"
  },
  It = {
    class: "label"
  },
  Q = 100,
  Mt = C({
    __name: "RangeInput",
    props: Se({
      balances: {},
      tab: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(a, {
      expose: t
    }) {
      const d = a,
        e = $e(a, "modelValue"),
        _ = G(null),
        o = G("0"),
        p = M(() => new j(e.value.replaceAll(",", "") || "0")),
        v = M(() => {
          const i = {
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
            c = {
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
          return d.tab === B.SELL ? c : i
        }),
        h = M(() => {
          const i = v.value,
            c = Object.keys(i).map(Number).sort((b, m) => b - m),
            r = [];
          for (let b = 0; b <= Q; b++) {
            const m = b;
            if (c.includes(m)) {
              const E = i[m],
                N = "value" in E ? E.value : E.percent;
              r.push(N);
              continue
            }
            let y, D, O, U;
            for (let E = 0; E < c.length - 1; E++)
              if (m > c[E] && m < c[E + 1]) {
                y = c[E], D = c[E + 1];
                const N = i[y],
                  Z = i[D];
                O = "value" in N ? N.value : N.percent, U = "value" in Z ? Z.value : Z.percent;
                break
              } if (y === void 0 || D === void 0 || O === void 0 || U === void 0) continue;
            const Y = (m - y) / (D - y),
              H = O + Y * (U - O);
            r.push(H)
          }
          return r
        }),
        S = M(() => {
          const i = v.value,
            r = Object.keys(i).map(Number).sort((m, y) => m - y).map(m => {
              const y = i[m];
              return "value" in y ? y.value : y.percent
            }),
            b = [];
          for (let m = 0; m < r.length; m++) {
            const y = r[m],
              D = h.value.indexOf(y),
              O = D / Q * 100,
              U = Math.min(new j(y).decimalPlaces(), 2),
              Y = m === 0,
              H = m === r.length - 1,
              E = new j(L.value).gte(O),
              N = d.tab === B.SELL ? `${y}%` : `${x(y,U)} TON`;
            b.push({
              label: N,
              position: D,
              percent: O,
              isFirst: Y,
              isLast: H,
              isActive: E
            })
          }
          return b
        }),
        g = () => {
          const i = p.value,
            c = String((() => {
              var r;
              if (d.tab === B.BUY) {
                for (let b = 0; b < h.value.length; b++) {
                  const m = new j(h.value[b]);
                  if (i.eq(m)) return b;
                  if (i.lte(m)) return b - 1
                }
                return Q
              } else {
                if (!((r = d.balances) != null && r.jettonBalance)) return 0;
                const b = d.balances.jettonBalance.value;
                for (let m = 0; m < h.value.length; m++) {
                  const y = b.times(h.value[m]).div(100);
                  if (i.eq(y)) return m;
                  if (i.lte(y)) return m - 1
                }
                return 0
              }
            })());
          o.value = c, _.value && _.value.value !== c && (_.value.value = c)
        },
        X = i => S.value.find(c => Math.abs(Number(c.percent) - i) < 4 && !c.isFirst),
        f = i => {
          var c;
          if (d.tab === B.BUY) {
            const r = Math.min(new j(i).decimalPlaces(), 2);
            e.value = new j(i).toDecimalPlaces(r, j.ROUND_DOWN).toFixed(r)
          } else {
            if (!((c = d.balances) != null && c.jettonBalance)) return;
            const b = d.balances.jettonBalance.value.times(i).div(100);
            e.value = b.toFixed()
          }
        },
        L = M({
          get: () => o.value,
          set: i => {
            var m;
            const c = Number(i),
              r = (m = X(c)) == null ? void 0 : m.percent;
            r && _.value && _.value.value !== String(r) && (_.value.value = String(r));
            const b = h.value[r ?? c];
            o.value = String(r ?? c), f(String(b))
          }
        });
      return t({
        applyNearestValue: g
      }), (i, c) => (s(), l("label", $t, [re(n("input", {
        ref_key: "inputRef",
        ref: _,
        "onUpdate:modelValue": c[0] || (c[0] = r => L.value = r),
        type: "range",
        step: 1,
        min: 0,
        max: 100,
        style: W({
          "--value": L.value
        })
      }, null, 4), [
        [ce, L.value]
      ]), n("div", Et, [n("div", At, [n("div", {
        class: "filled",
        style: W({
          "--width": `${L.value}%`
        })
      }, null, 4)]), n("div", wt, [(s(!0), l(I, null, ee(S.value, r => (s(), l("div", {
        key: r.position,
        style: W({
          "--left": `${r.percent}%`
        }),
        class: le([{
          "is-last": r.isLast,
          "is-first": r.isFirst,
          "is-active": r.isActive
        }, "item"])
      }, [n("div", Ct, [c[1] || (c[1] = n("div", {
        class: "point"
      }, null, -1)), n("div", It, k(r.label), 1)])], 6))), 128))])])]))
    }
  }),
  ns = R(Mt, [
    ["__scopeId", "data-v-ac951fbf"]
  ]),
  Rt = {
    class: "memepad-jetton-modal"
  },
  Dt = {
    class: "top"
  },
  Ot = {
    class: "center"
  },
  Nt = {
    class: "right"
  },
  jt = {
    class: "inner"
  },
  Ft = {
    class: "memepad-jetton-modal-bottom"
  },
  Vt = {
    class: "action"
  },
  Wt = {
    key: 0,
    class: "helpers"
  },
  Kt = C({
    __name: "Modal",
    setup(a) {
      return (t, d) => {
        const e = Ee;
        return s(), l("div", Rt, [F(t.$slots, "top", {}, () => [n("div", Dt, [d[0] || (d[0] = n("div", {
          class: "left"
        }, null, -1)), n("div", Ot, [F(t.$slots, "top-center", {}, void 0, !0)]), n("div", Nt, [F(t.$slots, "top-right", {}, void 0, !0)])])], !0), n("div", jt, [F(t.$slots, "default", {}, void 0, !0)]), V(e, {
          "ignore-tabs": "",
          "hide-space": ""
        }, {
          default: z(() => [n("div", Ft, [n("div", Vt, [F(t.$slots, "bottom-action", {}, void 0, !0)]), t.$slots["bottom-helpers"] ? (s(), l("div", Wt, [F(t.$slots, "bottom-helpers", {}, void 0, !0)])) : $("", !0)])]),
          _: 3
        })])
      }
    }
  }),
  os = R(Kt, [
    ["__scopeId", "data-v-8cc99962"]
  ]);
export {
  Gt as _, qt as a, Xt as b, Yt as c, Ht as d, ss as e, ns as f, os as g, De as h, ts as i, Jt as j, Qt as k, xt as l, Pe as m, es as r, Zt as s
};