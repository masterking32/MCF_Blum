import {
  d as R,
  a as s,
  c as l,
  k as U,
  b as o,
  t as y,
  N as x,
  j as D,
  m as E,
  x as z,
  W as C,
  X as ee,
  g as $,
  e as u,
  bu as de,
  ab as me,
  P as ne,
  f as T,
  B as oe,
  b8 as _e,
  bj as ve,
  C as ae,
  bL as fe,
  b2 as he,
  c4 as P,
  n as le,
  aC as F,
  F as I,
  aZ as be,
  aL as V,
  L as ie,
  bi as w,
  ai as Z,
  a$ as W,
  bK as ke,
  c5 as ye,
  aY as Q,
  h as te,
  r as G,
  av as se,
  aj as Te,
  w as re,
  bU as ce,
  V as ge,
  b6 as Le,
  az as Se,
  aA as $e,
  af as j,
  bI as B
} from "./7Syd4Ho8.js";
import {
  _ as Ae
} from "./uZZfAlPw.js";
import {
  _ as ue
} from "./BMLAx2ok.js";
import {
  _ as pe
} from "./B85KvM-D.js";
import {
  _ as Ee
} from "./CnSCrtWk.js";
const we = {
    class: "memepad-jetton-action-controls-balance"
  },
  Ce = {
    class: "label"
  },
  Ie = R({
    __name: "Balance",
    props: {
      balance: {}
    },
    setup(a) {
      return (t, d) => {
        const e = x;
        return s(), l("div", we, [U(e, {
          name: "wallet",
          class: "icon"
        }), o("span", Ce, y(t.balance), 1)])
      }
    }
  }),
  Bt = D(Ie, [
    ["__scopeId", "data-v-5ed33e11"]
  ]),
  Re = {
    type: "button",
    class: "memepad-jetton-action-controls-fees"
  },
  De = {
    key: 1,
    class: "fees"
  },
  Oe = {
    class: "tooltip-detail"
  },
  Ne = {
    key: 0
  },
  Me = {
    class: "label"
  },
  je = R({
    __name: "Fees",
    props: {
      details: {},
      totalLabel: {},
      errorMessage: {}
    },
    setup(a) {
      return (t, d) => {
        const e = Ae,
          _ = x,
          n = ue;
        return s(), l("div", Re, [t.errorMessage ? (s(), E(e, {
          key: 0,
          "error-message": t.errorMessage
        }, null, 8, ["error-message"])) : t.details && t.totalLabel ? (s(), l("div", De, [t.details.length ? (s(), E(n, {
          key: 0,
          "text-min-width": 155,
          alignment: u(de).TOP
        }, {
          default: z(() => [U(_, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: z(() => [o("div", Oe, [(s(!0), l(C, null, ee(t.details, (p, v) => (s(), l(C, {
            key: p.label
          }, [o("span", null, y(p.label), 1), v !== t.details.length - 1 ? (s(), l("br", Ne)) : $("", !0)], 64))), 128))])]),
          _: 1
        }, 8, ["alignment"])) : $("", !0), o("span", Me, y(t.totalLabel), 1)])) : $("", !0)])
      }
    }
  }),
  zt = D(je, [
    ["__scopeId", "data-v-fab91cc0"]
  ]),
  Gt = R({
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
      const n = () => {
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
        return s(), E(h, {
          label: ("t" in p ? p.t : u(T))("memepad.top_up_wallet_button"),
          fill: "",
          size: u(oe).LARGE,
          onClick: n
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Fe = R({
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
      const t = fe().status,
        d = he();
      return (e, _) => {
        const n = ae,
          p = pe;
        return u(t) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : u(P)).DISCONNECTED ? (s(), E(n, {
          key: 0,
          label: ("t" in e ? e.t : u(T))("wallet.connect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: _[0] || (_[0] = v => u(d).runConnectionFlow())
        }, null, 8, ["label", "size"])) : u(t) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : u(P)).MUST_RECONNECT ? (s(), E(n, {
          key: 1,
          label: ("t" in e ? e.t : u(T))("wallet.reconnect.btn"),
          fill: "",
          size: e.buttonSize,
          onClick: _[1] || (_[1] = v => u(d).runConnectionFlow())
        }, null, 8, ["label", "size"])) : u(t) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : u(P)).LOADING || e.forceLoading ? (s(), E(p, {
          key: 2,
          class: le(["skeleton", `is-${e.buttonSize.toLowerCase()}`])
        }, null, 8, ["class"])) : u(t) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in e ? e.WALLET_LOCAL_AND_REMOTE_STATUS : u(P)).CONNECTED ? F(e.$slots, "default", {
          key: 3
        }, void 0, !0) : $("", !0)
      }
    }
  }),
  Yt = D(Fe, [
    ["__scopeId", "data-v-1e641cbd"]
  ]),
  Ve = R({
    __name: "Banner",
    props: {
      bannerFileKey: {}
    },
    setup(a) {
      const t = a,
        d = I(() => t.bannerFileKey ? be(t.bannerFileKey) : void 0);
      return (e, _) => u(d) ? (s(), l("div", {
        key: 0,
        class: "memepad-jetton-banner",
        style: V({
          backgroundImage: `url(${u(d)})`
        })
      }, null, 4)) : $("", !0)
    }
  }),
  qt = D(Ve, [
    ["__scopeId", "data-v-352c6c64"]
  ]),
  We = a => {
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
  Xt = (a, t) => {
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
  Ht = () => {
    const a = Object.values(w);
    return Object.fromEntries(a.map(t => [t, We(t)]))
  },
  Ue = () => {
    const a = Object.keys(w);
    return Object.fromEntries(a.map(t => [t, void 0]))
  },
  Ke = () => ({
    iconFileKey: void 0,
    name: void 0,
    ticker: void 0,
    description: void 0
  }),
  Pe = () => ({
    bannerFileKey: void 0,
    socialProviders: Ue(),
    isNSFW: !1
  }),
  Be = () => ({
    share: 0,
    overview: void 0
  }),
  Zt = {
    step1: Ke,
    step2: Pe,
    step3: Be
  },
  Jt = a => ({
    ...a.step1,
    ...a.step2,
    ...a.step3
  }),
  Qt = a => ({
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
  ze = {
    class: "memepad-jetton-market-info"
  },
  Ge = {
    key: 0,
    class: "top"
  },
  Ye = {
    class: "data"
  },
  qe = {
    class: "left"
  },
  Xe = {
    key: 0,
    class: "percent"
  },
  He = {
    key: 1,
    class: "part"
  },
  Ze = {
    key: 0,
    class: "market-details"
  },
  Je = {
    class: "holders-count"
  },
  Qe = {
    key: 0
  },
  xe = {
    key: 1
  },
  et = {
    class: "transactions-count"
  },
  tt = {
    key: 0
  },
  st = {
    key: 1
  },
  nt = {
    class: "market-cap"
  },
  ot = {
    class: "label"
  },
  at = {
    class: "value"
  },
  lt = {
    key: 1
  },
  it = {
    type: "button",
    class: "memepad-jetton-market-info-tooltip reset"
  },
  rt = {
    class: "text"
  },
  ct = {
    class: "progress"
  },
  ut = {
    key: 1,
    class: "metrics"
  },
  pt = {
    class: "cap"
  },
  dt = {
    class: "title"
  },
  mt = {
    key: 0,
    class: "value"
  },
  _t = {
    class: "list"
  },
  vt = {
    class: "title"
  },
  ft = {
    key: 1,
    class: "value"
  },
  ht = {
    key: 0,
    class: "prefix"
  },
  bt = {
    key: 1,
    class: "postfix"
  },
  kt = R({
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
        d = I(() => {
          var _;
          if (!((_ = t.marketDetails) != null && _.listRows)) return [];
          const e = [];
          if ("holdersCount" in t.marketDetails.listRows) {
            const n = t.marketDetails.listRows.holdersCount,
              p = t.marketDetails.listRows.transactionsCount,
              v = t.marketDetails.listRows.transactionsVolume;
            e.push({
              title: T("memepad.jetton.holders"),
              value: n != null ? Z(n, {
                accuracy: 0
              }) : n
            }), e.push({
              title: T("memepad.jetton.transactions"),
              value: p != null ? Z(p, {
                accuracy: 0
              }) : p
            }), e.push({
              title: T("memepad.jetton.trading_volume"),
              value: v != null ? (() => {
                const {
                  value: h,
                  postfix: S
                } = W(v);
                return {
                  prefix: "$",
                  value: h,
                  postfix: S
                }
              })() : v
            })
          } else if ("price" in t.marketDetails.listRows) {
            const n = t.marketDetails.listRows.price,
              p = t.marketDetails.listRows.maxSupply,
              v = t.marketDetails.listRows.availableSupply;
            e.push({
              title: T("memepad.jetton.price"),
              value: n != null ? {
                prefix: "$",
                value: ke(n, {
                  accuracy: 10
                })
              } : n
            }), e.push({
              title: T("memepad.jetton.max_supply"),
              value: p != null ? W(p) : p
            }), e.push({
              title: T("memepad.jetton.available"),
              value: v != null ? Z(v, {
                accuracy: 0
              }) : v
            })
          }
          return e
        });
      return (e, _) => {
        var h, S;
        const n = pe,
          p = x,
          v = ue;
        return s(), l("div", ze, [e.isReleased ? $("", !0) : (s(), l("div", Ge, [o("div", Ye, [o("div", qe, [e.total !== void 0 && e.collected !== void 0 || e.percent ? (s(), l(C, {
          key: 1
        }, [e.percent !== void 0 ? (s(), l("span", Xe, y(`${u(ye)(e.percent)}%`), 1)) : $("", !0), e.total !== void 0 && e.collected !== void 0 ? (s(), l("span", He, y(`${("formatTon"in e?e.formatTon:u(Q))(e.collected,2)}/${("formatTon"in e?e.formatTon:u(Q))(e.total,2)} TON`), 1)) : $("", !0)], 64)) : (s(), E(n, {
          key: 0,
          class: "skeleton"
        }))]), (h = e.marketDetails) != null && h.statistics ? (s(), l("div", Ze, [o("div", Je, [U(p, {
          name: "personal",
          class: "icon"
        }), e.marketDetails.statistics.holdersCount ? (s(), l("span", Qe, y(("formatCount" in e ? e.formatCount : u(W))(e.marketDetails.statistics.holdersCount, 0).full), 1)) : (s(), l("span", xe, "—"))]), o("div", et, [U(p, {
          name: "transfer",
          class: "icon"
        }), e.marketDetails.statistics.transactionsCount ? (s(), l("span", tt, y(("formatCount" in e ? e.formatCount : u(W))(e.marketDetails.statistics.transactionsCount, 0).full), 1)) : (s(), l("span", st, "—"))]), o("div", nt, [e.marketDetails.statistics.marketCap ? (s(), l(C, {
          key: 0
        }, [o("span", ot, y(("t" in e ? e.t : u(T))("memepad.jetton.stats.market_cap")), 1), o("span", at, y(`$${("formatCount"in e?e.formatCount:u(W))(e.marketDetails.statistics.marketCap).full}`), 1)], 64)) : (s(), l("span", lt, "—"))])])) : (s(), E(v, {
          key: 1,
          text: ("t" in e ? e.t : u(T))("memepad.jetton.market_info_tooltip.text"),
          "text-min-width": 155,
          "text-max-width": 155
        }, {
          default: z(() => [o("button", it, [U(p, {
            name: "circle-help",
            class: "icon"
          }), o("span", rt, y(("t" in e ? e.t : u(T))("memepad.jetton.market_info_tooltip.label")), 1)])]),
          _: 1
        }, 8, ["text"]))]), o("div", ct, [o("div", {
          class: "line",
          style: V({
            width: `${e.percent}%`
          })
        }, null, 4)])])), u(d).length ? (s(), l("div", ut, [o("div", pt, [o("div", dt, y(("t" in e ? e.t : u(T))("memepad.jetton.market_cap")), 1), (S = e.marketDetails) != null && S.marketCap ? (s(), l("div", mt, [_[0] || (_[0] = o("span", {
          class: "dollar"
        }, "$", -1)), o("span", null, y(("formatCount" in e ? e.formatCount : u(W))(e.marketDetails.marketCap).full), 1)])) : (s(), E(n, {
          key: 1,
          class: "skeleton"
        }))]), o("div", _t, [(s(!0), l(C, null, ee(u(d), g => (s(), l("div", {
          key: g.title,
          class: "item"
        }, [o("span", vt, y(g.title), 1), g.value === void 0 ? (s(), E(n, {
          key: 0,
          class: "skeleton"
        })) : (s(), l("span", ft, [typeof g.value == "string" ? (s(), l(C, {
          key: 0
        }, [te(y(g.value), 1)], 64)) : g.value === null ? (s(), l(C, {
          key: 1
        }, [te(" — ")], 64)) : (s(), l(C, {
          key: 2
        }, [g.value.prefix ? (s(), l("span", ht, y(g.value.prefix), 1)) : $("", !0), o("span", null, y(g.value.value), 1), g.value.postfix ? (s(), l("span", bt, y(g.value.postfix), 1)) : $("", !0)], 64))]))]))), 128))])])) : $("", !0)])
      }
    }
  }),
  xt = D(kt, [
    ["__scopeId", "data-v-545e890a"]
  ]),
  yt = {
    class: "memepad-jetton-actions-controls-input"
  },
  Tt = R({
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
        n = G(),
        p = G(),
        v = () => {
          Le(() => {
            n.value && (n.value.style.width = "", n.value.style.width = n.value.scrollWidth + "px")
          })
        },
        h = I({
          get: () => e.modelValue,
          set: f => {
            if (n.value && n.value.value !== e.modelValue) {
              const i = [...n.value.value].findIndex((c, r) => c !== e.modelValue[r]);
              i !== -1 && n.value.value[i] === "," && (f = f.slice(0, i) + "." + f.slice(i))
            }
            f = (e.modifier || (i => i))(f), n.value && n.value.value !== f && (n.value.value = f), _("update:modelValue", f)
          }
        });
      se(() => e.modelValue, v), se(() => n.value, v);
      const S = I(() => {
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
      const Y = () => {
        setTimeout(() => {
          var f;
          (f = n.value) == null || f.focus()
        }, 100)
      };
      return (f, L) => (s(), l("label", yt, [re(o("input", {
        ref_key: "inputRef",
        ref: n,
        "onUpdate:modelValue": L[0] || (L[0] = i => ge(h) ? h.value = i : null),
        type: "text",
        inputmode: "decimal",
        style: V(u(S)),
        onBlur: L[1] || (L[1] = i => _("blur"))
      }, null, 36), [
        [ce, u(h)]
      ]), o("input", {
        ref_key: "hiddenInputRef",
        ref: p,
        type: "text",
        inputmode: "decimal",
        class: "hidden",
        onFocus: Y
      }, null, 544), f.postfix ? (s(), l("span", {
        key: 0,
        class: "label",
        style: V(u(S))
      }, y(f.postfix), 5)) : $("", !0)]))
    }
  }),
  es = D(Tt, [
    ["__scopeId", "data-v-ece355cf"]
  ]),
  gt = {
    class: "memepad-jetton-actions-controls-range-slider"
  },
  Lt = {
    class: "marks"
  },
  St = {
    class: "line"
  },
  $t = {
    class: "inner"
  },
  At = {
    class: "content"
  },
  Et = {
    class: "label"
  },
  J = 100,
  wt = R({
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
        n = G("0"),
        p = I(() => new j(e.value.replaceAll(",", "") || "0")),
        v = I(() => {
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
        h = I(() => {
          const i = v.value,
            c = Object.keys(i).map(Number).sort((b, m) => b - m),
            r = [];
          for (let b = 0; b <= J; b++) {
            const m = b;
            if (c.includes(m)) {
              const A = i[m],
                M = "value" in A ? A.value : A.percent;
              r.push(M);
              continue
            }
            let k, O, N, K;
            for (let A = 0; A < c.length - 1; A++)
              if (m > c[A] && m < c[A + 1]) {
                k = c[A], O = c[A + 1];
                const M = i[k],
                  H = i[O];
                N = "value" in M ? M.value : M.percent, K = "value" in H ? H.value : H.percent;
                break
              } if (k === void 0 || O === void 0 || N === void 0 || K === void 0) continue;
            const q = (m - k) / (O - k),
              X = N + q * (K - N);
            r.push(X)
          }
          return r
        }),
        S = I(() => {
          const i = v.value,
            r = Object.keys(i).map(Number).sort((m, k) => m - k).map(m => {
              const k = i[m];
              return "value" in k ? k.value : k.percent
            }),
            b = [];
          for (let m = 0; m < r.length; m++) {
            const k = r[m],
              O = h.value.indexOf(k),
              N = O / J * 100,
              K = Math.min(new j(k).decimalPlaces(), 2),
              q = m === 0,
              X = m === r.length - 1,
              A = new j(L.value).gte(N),
              M = d.tab === B.SELL ? `${k}%` : `${Q(k,K)} TON`;
            b.push({
              label: M,
              position: O,
              percent: N,
              isFirst: q,
              isLast: X,
              isActive: A
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
                return J
              } else {
                if (!((r = d.balances) != null && r.jettonBalance)) return 0;
                const b = d.balances.jettonBalance.value;
                for (let m = 0; m < h.value.length; m++) {
                  const k = b.times(h.value[m]).div(100);
                  if (i.eq(k)) return m;
                  if (i.lte(k)) return m - 1
                }
                return 0
              }
            })());
          n.value = c, _.value && _.value.value !== c && (_.value.value = c)
        },
        Y = i => S.value.find(c => Math.abs(Number(c.percent) - i) < 4 && !c.isFirst),
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
        L = I({
          get: () => n.value,
          set: i => {
            var m;
            const c = Number(i),
              r = (m = Y(c)) == null ? void 0 : m.percent;
            r && _.value && _.value.value !== String(r) && (_.value.value = String(r));
            const b = h.value[r ?? c];
            n.value = String(r ?? c), f(String(b))
          }
        });
      return t({
        applyNearestValue: g
      }), (i, c) => (s(), l("label", gt, [re(o("input", {
        ref_key: "inputRef",
        ref: _,
        "onUpdate:modelValue": c[0] || (c[0] = r => L.value = r),
        type: "range",
        step: 1,
        min: 0,
        max: 100,
        style: V({
          "--value": L.value
        })
      }, null, 4), [
        [ce, L.value]
      ]), o("div", Lt, [o("div", St, [o("div", {
        class: "filled",
        style: V({
          "--width": `${L.value}%`
        })
      }, null, 4)]), o("div", $t, [(s(!0), l(C, null, ee(S.value, r => (s(), l("div", {
        key: r.position,
        style: V({
          "--left": `${r.percent}%`
        }),
        class: le([{
          "is-last": r.isLast,
          "is-first": r.isFirst,
          "is-active": r.isActive
        }, "item"])
      }, [o("div", At, [c[1] || (c[1] = o("div", {
        class: "point"
      }, null, -1)), o("div", Et, y(r.label), 1)])], 6))), 128))])])]))
    }
  }),
  ts = D(wt, [
    ["__scopeId", "data-v-ac951fbf"]
  ]),
  Ct = {
    class: "memepad-jetton-modal"
  },
  It = {
    class: "top"
  },
  Rt = {
    class: "center"
  },
  Dt = {
    class: "right"
  },
  Ot = {
    class: "inner"
  },
  Nt = {
    class: "memepad-jetton-modal-bottom"
  },
  Mt = {
    class: "action"
  },
  jt = {
    key: 0,
    class: "helpers"
  },
  Ft = R({
    __name: "Modal",
    setup(a) {
      return (t, d) => {
        const e = Ee;
        return s(), l("div", Ct, [F(t.$slots, "top", {}, () => [o("div", It, [d[0] || (d[0] = o("div", {
          class: "left"
        }, null, -1)), o("div", Rt, [F(t.$slots, "top-center", {}, void 0, !0)]), o("div", Dt, [F(t.$slots, "top-right", {}, void 0, !0)])])], !0), o("div", Ot, [F(t.$slots, "default", {}, void 0, !0)]), U(e, {
          "ignore-tabs": "",
          "hide-space": ""
        }, {
          default: z(() => [o("div", Nt, [o("div", Mt, [F(t.$slots, "bottom-action", {}, void 0, !0)]), t.$slots["bottom-helpers"] ? (s(), l("div", jt, [F(t.$slots, "bottom-helpers", {}, void 0, !0)])) : $("", !0)])]),
          _: 3
        })])
      }
    }
  }),
  ss = D(Ft, [
    ["__scopeId", "data-v-8cc99962"]
  ]);
export {
  Bt as _, zt as a, Gt as b, Yt as c, qt as d, es as e, ts as f, ss as g, xt as h, Ht as i, Zt as j, Jt as k, We as m, Qt as r, Xt as s
};