import {
  _ as Ee
} from "./BNZo_vHe.js";
import {
  _ as Le
} from "./BwKX5owb.js";
import {
  d as M,
  a as d,
  c as L,
  b as n,
  t as f,
  e,
  f as C,
  k as _,
  x as O,
  j as w,
  ay as j,
  P as ee,
  az as ce,
  r as y,
  F as b,
  m as k,
  g as A,
  V as te,
  B as Se,
  A as re,
  N as F,
  C as ge,
  aS as fe,
  h as Te,
  W as B,
  J as W,
  aT as R,
  aU as ye,
  aV as Ie,
  aW as be,
  aX as $e,
  aY as de,
  n as G,
  aZ as ue,
  aH as pe,
  a_ as Y,
  aJ as me,
  ak as se,
  u as Ce,
  af as oe,
  av as q,
  a$ as z,
  o as _e,
  b0 as ke,
  X as Z,
  am as Ae,
  b1 as Me,
  b2 as we,
  b3 as m,
  b4 as X,
  a4 as Ne,
  a7 as De,
  b5 as Oe,
  ao as Pe,
  b6 as H,
  b7 as V,
  ab as ve,
  b8 as Re,
  b9 as he,
  K as J,
  a9 as Ue,
  ba as Ke,
  bb as ne,
  bc as K,
  ac as Be,
  aP as ae
} from "./BZXAykfw.js";
import {
  _ as Fe,
  a as xe
} from "./BaBCFYJ0.js";
import {
  _ as He
} from "./CItn2Db1.js";
import {
  _ as Ve
} from "./CIgmxH5Y.js";
import {
  _ as je
} from "./zQF4wy8r.js";
import {
  u as We
} from "./BApF9PQZ.js";
import "./CR0t1yhu.js";
const Ge = {
    class: "memepad-intro"
  },
  Ye = {
    class: "content"
  },
  Je = {
    class: "title"
  },
  ze = {
    class: "note"
  },
  Xe = M({
    __name: "Intro",
    emits: ["start"],
    setup(p) {
      return (t, a) => {
        const s = Le;
        return d(), L("div", Ge, [n("div", Ye, [n("div", Je, f(("t" in t ? t.t : e(C))("memepad.intro.title")), 1), n("button", {
          type: "button",
          class: "reset",
          onClick: a[0] || (a[0] = c => t.$emit("start"))
        }, f(("t" in t ? t.t : e(C))("memepad.intro.button_text")), 1)]), _(s, {
          "no-background": ""
        }, {
          default: O(() => [n("div", ze, f(("t" in t ? t.t : e(C))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  qe = w(Xe, [
    ["__scopeId", "data-v-59c654b1"]
  ]),
  Ze = {
    class: "memepad-sheet"
  },
  Qe = {
    class: "title"
  },
  et = {
    class: "subtitle"
  },
  tt = {
    class: "label"
  },
  st = {
    class: "actions"
  },
  ot = {
    key: 0,
    class: "dont-show"
  },
  nt = {
    class: "checkbox"
  },
  at = M({
    __name: "Sheet",
    props: j({
      dontShowStorageKey: {},
      title: {},
      subtitle: {},
      buttonText: {},
      lottie: {},
      hideReadMore: {
        type: Boolean
      }
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: j(["close", "readMoreClick"], ["update:modelValue"]),
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: a
      } = ee(), s = p, c = t, o = ce(p, "modelValue"), l = y(!s.dontShowStorageKey), i = y(!1), u = b({
        get: () => o.value && l.value,
        set: r => {
          o.value = r, i.value && s.dontShowStorageKey && a.storage.local.set(s.dontShowStorageKey, "true")
        }
      });
      (() => {
        s.dontShowStorageKey && (l.value = !a.storage.local.get(s.dontShowStorageKey))
      })();
      const g = () => c("readMoreClick"),
        I = () => {
          u.value = !1, c("close", {
            source: "modal"
          })
        },
        $ = () => {
          u.value = !1, c("close", {
            source: "button"
          })
        };
      return (r, v) => {
        const E = re,
          h = F,
          T = Fe,
          N = ge,
          D = fe;
        return d(), k(D, {
          "model-value": e(u),
          "onUpdate:modelValue": I
        }, {
          default: O(() => [n("div", Ze, [_(E, {
            name: r.lottie,
            size: 116
          }, null, 8, ["name"]), n("div", Qe, f(r.title), 1), n("div", null, [n("div", et, f(r.subtitle), 1), r.hideReadMore ? A("", !0) : (d(), L("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: g
          }, [n("span", tt, f(("t" in r ? r.t : e(C))("base.read_more")), 1), _(h, {
            name: "arrow-right",
            class: "icon"
          })]))]), n("div", st, [r.dontShowStorageKey ? (d(), L("div", ot, [n("div", nt, [_(T, {
            modelValue: e(i),
            "onUpdate:modelValue": v[0] || (v[0] = U => te(i) ? i.value = U : null)
          }, null, 8, ["modelValue"]), n("span", {
            class: "label",
            onClick: v[1] || (v[1] = U => i.value = !e(i))
          }, f(("t" in r ? r.t : e(C))("memepad.sheet.dont_show_again_label")), 1)])])) : A("", !0), _(N, {
            label: r.buttonText,
            fill: "",
            size: e(Se).LARGE,
            onClick: $
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  lt = w(at, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  le = "memepad-launch-jetton",
  it = M({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: a
      } = ee(), s = t, c = y(!1), o = y(a.storage.local.get(le) ? "watched" : "unwatched"), l = () => {
        o.value === "watched" ? s("launch") : c.value = !0
      }, i = () => {
        a.storage.local.set(le, "true"), s("launch")
      };
      return (u, S) => {
        const g = lt;
        return d(), L(B, null, [n("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: l
        }, [S[1] || (S[1] = n("i", {
          class: "seedling"
        }, null, -1)), Te(" " + f(("t" in u ? u.t : e(C))("memepad.explore.launch.button_text")), 1)]), _(g, {
          modelValue: e(c),
          "onUpdate:modelValue": S[0] || (S[0] = I => te(c) ? c.value = I : null),
          title: ("t" in u ? u.t : e(C))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in u ? u.t : e(C))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in u ? u.t : e(C))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: i
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  ct = w(it, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  rt = ["src"],
  dt = {
    key: 1,
    class: "user-avatar-empty"
  },
  ut = {
    class: "text"
  },
  pt = {
    key: 0,
    class: "user-name"
  },
  mt = {
    key: 1,
    class: "user-address"
  },
  _t = {
    class: "action"
  },
  vt = {
    class: "amount"
  },
  ht = {
    class: "ticker"
  },
  Et = {
    class: "seconds"
  },
  Lt = M({
    __name: "Event",
    props: {
      event: {}
    },
    setup(p) {
      const t = p,
        a = b(() => C(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        s = b(() => W().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.event.shortname
          },
          query: {
            from: R.ACTIONBAR
          }
        })),
        c = b(() => {
          const o = ye(t.event.timestamp);
          return o.isDate ? o.label : `${o.label} ago`
        });
      return (o, l) => {
        const i = F,
          u = Ie("I18nT"),
          S = ue,
          g = pe;
        return d(), k(g, {
          to: e(s),
          class: G(["memepad-explore-event", `is-${o.event.type.toLowerCase()}`])
        }, {
          default: O(() => [o.event.user.avatarUrl ? (d(), L("img", {
            key: 0,
            src: o.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, rt)) : (d(), L("div", dt, [_(i, {
            name: "space-invader",
            class: "icon"
          })])), n("div", ut, [o.event.user.nickname ? (d(), L("span", pt, f(o.event.user.nickname), 1)) : (d(), L("span", mt, f(("sliceWalletAddress" in o ? o.sliceWalletAddress : e(be))(o.event.user.address)), 1)), n("span", _t, f(e(a)), 1), o.event.amount ? (d(), k(u, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: O(() => [n("span", vt, f(`${("formatTon"in o?o.formatTon:e($e))(o.event.amount)} TON`), 1)]),
            _: 1
          })) : A("", !0)]), _(S, {
            src: e(de)(o.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), n("span", ht, f(o.event.ticker), 1), n("span", Et, f(e(c)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  St = w(Lt, [
    ["__scopeId", "data-v-9a23721a"]
  ]),
  gt = {
    class: "ticker"
  },
  ft = {
    class: "stats"
  },
  Tt = {
    class: "holders-count"
  },
  yt = {
    class: "text"
  },
  It = {
    class: "transactions-count"
  },
  bt = {
    class: "text"
  },
  $t = M({
    __name: "Card",
    props: {
      jetton: {},
      bclData: {}
    },
    setup(p) {
      const t = p,
        a = b(() => W().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: R.SPOTLIGHT
          }
        }));
      return (s, c) => {
        const o = ue,
          l = F,
          i = pe;
        return d(), k(i, {
          to: e(a),
          class: "memepad-explore-spotlight-card"
        }, {
          default: O(() => [_(o, {
            src: e(de)(s.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), n("span", gt, f(s.jetton.ticker), 1), n("div", ft, [n("div", Tt, [_(l, {
            name: "personal",
            class: "icon"
          }), n("span", yt, f(s.jetton.stats.holdersCount ? ("formatCount" in s ? s.formatCount : e(Y))(s.jetton.stats.holdersCount, 0).full : "-"), 1)]), n("div", It, [_(l, {
            name: "transfer",
            class: "icon"
          }), n("span", bt, f(s.jetton.stats.transactionsCount ? ("formatCount" in s ? s.formatCount : e(Y))(s.jetton.stats.transactionsCount, 0).full : "-"), 1)])])]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  Ct = w($t, [
    ["__scopeId", "data-v-304ad5a2"]
  ]),
  kt = {
    class: "inner"
  },
  At = {
    class: "left"
  },
  Mt = {
    class: "mc"
  },
  wt = {
    key: 0,
    class: "diff"
  },
  Nt = {
    key: 1,
    class: "percent"
  },
  Dt = {
    class: "progress"
  },
  Ot = {
    class: "direction-wrapper"
  },
  Pt = {
    key: 0,
    class: "direction up"
  },
  Rt = {
    key: 0,
    class: "direction down"
  },
  Ut = M({
    __name: "Progress",
    props: {
      jetton: {},
      bclData: {},
      moveDirection: {},
      marketCap: {},
      tonCollectedPercent: {}
    },
    setup(p) {
      return (t, a) => {
        var c;
        const s = F;
        return d(), L("div", {
          class: G(["memepad-explore-spotlight-progress", t.moveDirection ? `is-${(c=t.moveDirection)==null?void 0:c.direction}` : ""])
        }, [n("div", kt, [n("div", At, [n("span", Mt, f(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (d(), L("span", wt, f(t.moveDirection.diffFormatted), 1)) : A("", !0)]), t.jetton.isReleased ? (d(), k(s, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (d(), L("span", Nt, f(t.tonCollectedPercent ?? "-") + "% ", 1))]), n("div", Dt, [n("div", {
          class: "line",
          style: me({
            width: `${t.tonCollectedPercent}%`
          })
        }, [n("div", Ot, [_(se, {
          name: "direction-opacity"
        }, {
          default: O(() => {
            var o;
            return [((o = t.moveDirection) == null ? void 0 : o.direction) === "up" ? (d(), L("div", Pt, [_(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), _(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), _(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : A("", !0)]
          }),
          _: 1
        }), _(se, {
          name: "direction-opacity"
        }, {
          default: O(() => {
            var o;
            return [((o = t.moveDirection) == null ? void 0 : o.direction) === "down" ? (d(), L("div", Rt, [_(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), _(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), _(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : A("", !0)]
          }),
          _: 1
        })])], 4)])], 2)
      }
    }
  }),
  Kt = w(Ut, [
    ["__scopeId", "data-v-65d565e0"]
  ]),
  Bt = {
    class: "memepad-explore-spotlight"
  },
  Ft = {
    class: "bg"
  },
  xt = ["src"],
  Ht = {
    class: "content"
  },
  Vt = {
    class: "header"
  },
  jt = {
    class: "logo"
  },
  Wt = {
    class: "title"
  },
  Gt = ["onClick"],
  Yt = M({
    __name: "Spotlight",
    props: {
      list: {},
      bclData: {}
    },
    setup(p) {
      const t = p,
        a = Ce(),
        s = y(0),
        c = b(() => t.list[s.value]),
        o = r => {
          document.querySelector(".memepad-explore-spotlight .list").scrollTo({
            left: r * window.innerWidth + (s.value > r ? -1 : 1),
            behavior: "smooth"
          })
        },
        l = y(null),
        i = Ae(() => {
          if (!l.value) return;
          const r = l.value.children[0].offsetWidth + 10,
            v = l.value.scrollLeft,
            E = Math.round(v / r);
          s.value = E
        }, 50).debouncedFunction,
        u = b(() => {
          const r = (() => {
              if (!(!c.value.stats.tonCollected || !t.bclData)) return new oe(c.value.stats.tonCollected.div(t.bclData.tonForDex).times(100).toFixed(0, oe.ROUND_DOWN))
            })(),
            v = c.value.stats.marketCap && Y(c.value.stats.marketCap);
          return {
            id: c.value.id,
            tonCollectedPercent: r,
            marketCap: v
          }
        }),
        S = [],
        g = y();
      q(u, (r, v) => {
        if (!r.marketCap || !v.marketCap || r.marketCap.full === v.marketCap.full || r.id !== v.id) {
          g.value = void 0;
          return
        }
        const E = r.marketCap.raw.minus(v.marketCap.raw),
          h = E.lt(0),
          T = Y(E.abs(), 0).full;
        T !== "0" && (g.value = {
          direction: h ? "down" : "up",
          diffFormatted: `${h?"-":"+"}${T}`
        }, S.push(setTimeout(() => g.value = void 0, 1200)))
      });
      const I = b(() => {
          var r, v;
          return ((r = g.value) == null ? void 0 : r.direction) === "down" ? z("memepad/spotlight-room-down", "svg") : ((v = g.value) == null ? void 0 : v.direction) === "up" ? z("memepad/spotlight-room-up", "svg") : z("memepad/spotlight-room", "svg")
        }),
        $ = () => {
          S.push(setTimeout(() => {
            s.value === t.list.length - 1 ? o(0) : o(s.value + 1)
          }, 15e3))
        };
      return q(s, () => {
        S.forEach(clearTimeout), $()
      }, {
        immediate: !0
      }), _e(() => {
        S.forEach(clearTimeout)
      }), (r, v) => {
        var N, D, U;
        const E = re,
          h = Ct,
          T = Kt;
        return d(), L("div", Bt, [n("div", Ft, [e(a).isLowEndDevice.value ? A("", !0) : (d(), L("img", {
          key: 0,
          src: ke,
          alt: "Gif",
          class: G([{
            "is-version-1": ((N = e(u).tonCollectedPercent) == null ? void 0 : N.lte(30)) && !e(c).isReleased,
            "is-version-2": ((D = e(u).tonCollectedPercent) == null ? void 0 : D.gt(30)) && e(u).tonCollectedPercent.lte(60) && !e(c).isReleased,
            "is-version-3": ((U = e(u).tonCollectedPercent) == null ? void 0 : U.gt(60)) || e(c).isReleased
          }, "gif"])
        }, null, 2)), n("img", {
          src: e(I),
          alt: "Gif",
          class: "room"
        }, null, 8, xt)]), n("div", Ht, [n("div", Vt, [n("div", jt, [_(E, {
          name: "animations/Fire",
          size: 28
        }), n("div", Wt, f(("t" in r ? r.t : e(C))("memepad.explore.spotlight.title")), 1)]), t.list.length > 1 ? (d(), L("div", {
          key: 0,
          class: "controls",
          style: me({
            gridTemplateColumns: `repeat(${t.list.length}, 1fr)`
          })
        }, [(d(!0), L(B, null, Z(t.list, (P, x) => (d(), L("div", {
          key: x + "" + e(s),
          class: G(["item", {
            active: e(s) > x,
            current: e(s) === x
          }]),
          onClick: _s => o(x)
        }, v[2] || (v[2] = [n("div", {
          class: "line"
        }, [n("div", {
          class: "fill"
        })], -1)]), 10, Gt))), 128))], 4)) : A("", !0)]), n("div", {
          ref_key: "listEl",
          ref: l,
          class: "list",
          onScroll: v[0] || (v[0] = (...P) => e(i) && e(i)(...P)),
          onTouchmove: v[1] || (v[1] = (...P) => e(i) && e(i)(...P))
        }, [(d(!0), L(B, null, Z(t.list, P => (d(), k(h, {
          key: P.id,
          jetton: P,
          "bcl-data": t.bclData,
          class: "item"
        }, null, 8, ["jetton", "bcl-data"]))), 128))], 544), (d(), k(T, {
          key: e(c).id,
          jetton: e(c),
          "bcl-data": t.bclData,
          "move-direction": e(g),
          "market-cap": e(u).marketCap,
          "ton-collected-percent": e(u).tonCollectedPercent
        }, null, 8, ["jetton", "bcl-data", "move-direction", "market-cap", "ton-collected-percent"]))])])
      }
    }
  }),
  Jt = w(Yt, [
    ["__scopeId", "data-v-298f84da"]
  ]),
  zt = {
    class: "memepad-explore-panel-list"
  },
  Xt = {
    class: "top"
  },
  qt = {
    class: "search-btn-wrapper"
  },
  Zt = {
    key: 0,
    class: "connect"
  },
  Qt = {
    key: 1,
    class: "connect"
  },
  es = {
    key: 1,
    class: "empty-state"
  },
  ts = M({
    __name: "PanelList",
    props: j({
      appearedItems: {},
      bclData: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: j(["search"], ["update:modelValue"]),
    setup(p) {
      const t = ce(p, "modelValue"),
        a = Me(),
        s = we(),
        c = [{
          value: m.FRESH,
          pingDot: !0
        }, {
          value: m.HOT
        }, {
          value: m.BLUMING
        }, {
          value: m.BLUMED
        }, {
          value: m.MY_TOKENS
        }].map(l => {
          const i = {
            [m.FRESH]: "Fresh",
            [m.HOT]: "Hot",
            [m.BLUMING]: "Bluming",
            [m.BLUMED]: "Blumed",
            [m.MY_TOKENS]: "My tokens"
          };
          return {
            ...l,
            label: i[l.value]
          }
        }),
        o = b(() => {
          switch (t.value) {
            case m.FRESH:
              return R.FRESH;
            case m.BLUMING:
              return R.BLUMING;
            case m.HOT:
              return R.HOT;
            case m.MY_TOKENS:
              return R.POSITIONS;
            case m.BLUMED:
              return R.BLUMED
          }
        });
      return (l, i) => {
        const u = F,
          S = xe,
          g = De,
          I = He,
          $ = Ve;
        return d(), L("div", zt, [n("div", Xt, [_(S, {
          modelValue: t.value,
          "onUpdate:modelValue": i[1] || (i[1] = r => t.value = r),
          items: e(c)
        }, {
          after: O(() => [n("div", qt, [n("button", {
            type: "button",
            class: "search reset",
            onClick: i[0] || (i[0] = r => l.$emit("search"))
          }, [_(u, {
            name: "search",
            class: "icon"
          })])])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (e(a) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in l ? l.WALLET_LOCAL_AND_REMOTE_STATUS : e(X)).DISCONNECTED || e(a) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in l ? l.WALLET_LOCAL_AND_REMOTE_STATUS : e(X)).MUST_RECONNECT) && t.value === e(m).MY_TOKENS ? (d(), L("div", Zt, [i[3] || (i[3] = n("div", {
          class: "label"
        }, "Connect you wallet to see your positions", -1)), n("button", {
          type: "button",
          class: "reset",
          onClick: i[2] || (i[2] = r => e(s).runConnectionFlow())
        }, f(("t" in l ? l.t : e(C))("wallet.connect.btn")), 1)])) : e(a) === ("WALLET_LOCAL_AND_REMOTE_STATUS" in l ? l.WALLET_LOCAL_AND_REMOTE_STATUS : e(X)).LOADING ? (d(), L("div", Qt, [_(g, {
          type: e(Ne).LIGHT
        }, null, 8, ["type"])])) : l.appearedItems ? (d(), L(B, {
          key: 2
        }, [l.appearedItems.length ? (d(), k(I, {
          key: t.value,
          items: l.appearedItems,
          "analytics-source": e(o),
          "bcl-data": l.bclData,
          "my-tokens": t.value === e(m).MY_TOKENS
        }, null, 8, ["items", "analytics-source", "bcl-data", "my-tokens"])) : t.value === e(m).MY_TOKENS ? (d(), L("div", es, [_(u, {
          name: "add-plus-circle",
          class: "icon"
        }), i[4] || (i[4] = n("div", {
          class: "label"
        }, "No tokens yet. Buy or launch one.", -1))])) : A("", !0)], 64)) : (d(), L(B, {
          key: 3
        }, Z(6, r => n("div", {
          key: r,
          class: "skeleton"
        }, [_($, {
          class: "image"
        }), _($, {
          class: "ticker"
        }), _($, {
          class: "stats"
        })])), 64))])
      }
    }
  }),
  ss = w(ts, [
    ["__scopeId", "data-v-222dc40b"]
  ]),
  Q = (p, t, a) => {
    const s = Math.max(0, p.length - 1),
      c = y([...p]),
      o = y(s),
      l = () => {
        o.value < c.value.length - 1 && o.value++
      },
      i = b(() => {
        const h = Math.max(0, o.value - a + 1),
          T = Math.min(o.value + 1, c.value.length);
        return [...c.value].slice(h, T).reverse()
      }),
      u = b(() => c.value.reverse()[o.value]);
    let S;
    return {
      init: () => {
        clearInterval(S), S = ae(l, t)
      },
      destroy: () => {
        c.value = [], o.value = 0, clearInterval(S)
      },
      addItems: h => {
        c.value.push(...h)
      },
      setItems: h => {
        c.value = h, o.value = h.length - 1
      },
      pause: () => {
        clearInterval(S)
      },
      unpause: () => {
        clearInterval(S), S = ae(l, t)
      },
      items: b(() => c.value),
      appearedItems: i,
      currentAppearedItem: u
    }
  },
  os = () => {
    const p = Oe(),
      t = Pe(),
      a = y(),
      s = {
        [m.FRESH]: H.CREATED_AT,
        [m.HOT]: H.TRANSACTIONS,
        [m.BLUMING]: H.NEAREST_TO_LISTING,
        [m.BLUMED]: H.PUBLISHED_AT
      },
      c = {
        [m.FRESH]: V.EXCLUDE,
        [m.HOT]: V.INCLUDE,
        [m.BLUMING]: V.INCLUDE_LISTED,
        [m.BLUMED]: V.ONLY
      },
      o = ve(),
      l = async E => {
        if (E === m.MY_TOKENS)
          if (t.wallet.value.status === "connected") {
            const T = await J.getMemepadJettonsPositions(t.wallet.value.address.default);
            return Ke(T) ? ne(T.data.jettons) : T
          } else return ne([]);
        const h = s[E];
        return await J.getMemepadJettonsList(h, c[E])
      }, i = y(), u = Re(() => m.FRESH, "$SbGDXlzgsy"), g = y(he(async () => await l(u.value), E => {
        if (u.value === m.FRESH) {
          if (a.value) {
            a.value.unpause();
            const h = a.value.items,
              T = E.filter(N => !h.some(D => D.id === N.id));
            a.value.addItems(T)
          } else {
            const h = [...E].reverse();
            a.value = Q(h, 1e3, 60), a.value.init()
          }
          return
        } else a.value && a.value.pause();
        i.value ? i.value.stepList.setItems([...E].reverse()) : (i.value = {
          stepList: Q([...E].reverse(), 1e3, 60)
        }, i.value.stepList.init())
      }, 5e3));
    let I;
    const $ = async () => {
      await g.value.exec(), I = q(u, async E => {
        var T;
        g.value.destroy(), (T = i.value) == null || T.stepList.destroy(), i.value = void 0, await g.value.exec();
        const h = (() => {
          switch (E) {
            case m.FRESH:
              return K.FRESH;
            case m.BLUMING:
              return K.BLUMING;
            case m.HOT:
              return K.HOT;
            case m.MY_TOKENS:
              return K.POSITIONS;
            case m.BLUMED:
              return K.BLUMED
          }
        })();
        o.memepad.memepadOpenPanelListTab({
          source: h
        })
      })
    }, r = () => {
      var E, h;
      g.value.destroy(), (E = i.value) == null || E.stepList.destroy(), i.value = void 0, (h = a.value) == null || h.destroy(), a.value = void 0, I == null || I()
    };
    p.onConnected(() => {
      u.value === m.MY_TOKENS && g.value.exec()
    });
    const v = b(() => {
      var E, h;
      return u.value === m.FRESH ? (E = a.value) == null ? void 0 : E.appearedItems : (h = i.value) == null ? void 0 : h.stepList.appearedItems
    });
    return {
      init: $,
      destroy: r,
      panelListActiveTab: u,
      panelListAppearedItems: v
    }
  },
  ns = () => {
    const p = y(),
      t = b(() => {
        var l;
        return (l = p.value) == null ? void 0 : l.stepList.currentAppearedItem
      }),
      a = l => {
        p.value || (p.value = {
          stepList: Q([], 1e3, 15)
        }, p.value.stepList.init()), p.value.stepList.addItems(l.reverse())
      },
      s = y(he(async () => await J.getMemepadExploreEvents(), l => {
        a(l.transactions)
      }, 9e3));
    return {
      init: async () => {
        await s.value.exec()
      },
      destroy: () => {
        var l;
        s.value.destroy(), (l = p.value) == null || l.stepList.destroy(), p.value = void 0
      },
      eventAppearedItem: b(() => t.value)
    }
  },
  as = () => {
    const p = y(),
      a = Ue(async () => Be(await J.getMemepadExploreSpotlight()), o => p.value = o.jettons, 5e3);
    return {
      init: async () => {
        await a.exec()
      },
      destroy: () => {
        a.destroy()
      },
      spotlight: b(() => p.value)
    }
  },
  ls = () => {
    const p = ns(),
      t = as(),
      a = os();
    return {
      _flow: {
        init: async () => {
          await Promise.all([p.init(), t.init(), a.init()])
        },
        destroy: () => {
          p.destroy(), t.destroy(), a.destroy()
        }
      },
      eventAppearedItem: p.eventAppearedItem,
      spotlight: t.spotlight,
      panelListActiveTab: a.panelListActiveTab,
      panelListAppearedItems: a.panelListAppearedItems
    }
  },
  is = {
    key: 0,
    class: "memepad-explore"
  },
  cs = {
    class: "header"
  },
  rs = {
    class: "title"
  },
  ds = M({
    __name: "Index",
    setup(p) {
      const {
        eventAppearedItem: t,
        spotlight: a,
        panelListActiveTab: s,
        panelListAppearedItems: c,
        _flow: {
          init: o,
          destroy: l
        }
      } = ls(), {
        bclData: i
      } = We(), u = y(!1);
      o().then(() => {
        u.value = !0
      }), _e(() => {
        l()
      });
      const S = () => W().push({
          name: "memepad-new"
        }),
        g = () => W().push({
          name: "memepad-search"
        });
      return (I, $) => {
        var N;
        const r = ct,
          v = St,
          E = Jt,
          h = ss,
          T = je;
        return e(u) ? (d(), L("div", is, [n("div", cs, [n("div", rs, [n("span", null, f(("t" in I ? I.t : e(C))("memepad.explore.title")), 1), $[1] || ($[1] = n("div", {
          class: "beta"
        }, "beta", -1))]), _(r, {
          onLaunch: S
        })]), e(t) ? (d(), k(v, {
          key: 0,
          event: e(t),
          class: "event"
        }, null, 8, ["event"])) : A("", !0), (N = e(a)) != null && N[0] ? (d(), k(E, {
          key: 1,
          class: "spotlight",
          list: e(a),
          "bcl-data": e(i)
        }, null, 8, ["list", "bcl-data"])) : A("", !0), _(h, {
          modelValue: e(s),
          "onUpdate:modelValue": $[0] || ($[0] = D => te(s) ? s.value = D : null),
          "appeared-items": e(c),
          "bcl-data": e(i),
          onSearch: g
        }, null, 8, ["modelValue", "appeared-items", "bcl-data"])])) : (d(), k(T, {
          key: 1
        }))
      }
    }
  }),
  us = w(ds, [
    ["__scopeId", "data-v-34d1c944"]
  ]),
  ps = {
    class: "memepad-index page"
  },
  ie = "memepad-intro",
  ms = M({
    __name: "index",
    setup(p) {
      const {
        $webApp: t
      } = ee(), a = y(t.storage.local.get(ie) ? "explore" : "intro"), s = () => {
        a.value = "explore", t.storage.local.set(ie, "true")
      };
      return ve().memepad.memepadExploreOpen(), (o, l) => {
        const i = Ee,
          u = qe,
          S = us;
        return d(), L("div", ps, [_(i), e(a) === "intro" ? (d(), k(u, {
          key: 0,
          onStart: s
        })) : e(a) === "explore" ? (d(), k(S, {
          key: 1
        })) : A("", !0)])
      }
    }
  }),
  Is = w(ms, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  Is as
  default
};