import {
  _ as He
} from "./B52RePBE.js";
import {
  d as j,
  o as l,
  c as _,
  a as i,
  b as g,
  t as h,
  e,
  C as b,
  D as K,
  aD as ge,
  f as U,
  N as L,
  aS as Ne,
  aT as we,
  _ as Q,
  V as re,
  h as ye,
  W as Pe,
  y as $,
  j as S,
  G as P,
  p as fe,
  a1 as Xe,
  x as ze,
  a2 as qe,
  m as Ze,
  F as Z,
  ai as z,
  aI as G,
  aU as Re,
  $ as Qe,
  aV as et,
  aW as tt,
  aX as Se,
  n as ee,
  aY as Ie,
  I as Ee,
  aZ as q,
  aB as de,
  ap as Te,
  ab as st,
  a6 as ve,
  Z as ae,
  a0 as se,
  a7 as oe,
  a5 as ue,
  q as me,
  H as De,
  aF as Oe,
  a_ as nt,
  a$ as at,
  b0 as he,
  b1 as X,
  M as Ae,
  b2 as ot,
  a3 as je,
  as as it,
  b3 as o,
  b4 as ce,
  b5 as lt,
  a9 as te,
  X as ie,
  U as ct,
  b6 as rt,
  a8 as ne,
  b7 as dt,
  af as Ce,
  b8 as W,
  ae as ut,
  aa as Le,
  b9 as J,
  ba as H,
  bb as mt,
  bc as $e,
  bd as pt,
  ax as _t,
  ad as vt
} from "./BN1oUHf5.js";
import {
  _ as ht
} from "./BBwPzKah.js";
import {
  _ as gt,
  a as yt
} from "./DzK4LRMC.js";
import {
  _ as ft
} from "./Bwjj0Ma-.js";
import {
  g as St
} from "./Ccvr2zYP.js";
import {
  _ as It,
  u as Et
} from "./pflsMPOi.js";
import {
  _ as kt
} from "./CVMcTLEF.js";
import {
  _ as Tt
} from "./XALPDTRK.js";
import {
  u as At,
  a as Ct
} from "./DZj5oRZm.js";
const Lt = {
    class: "memepad-intro"
  },
  $t = {
    class: "content"
  },
  bt = {
    class: "title"
  },
  Mt = {
    class: "note"
  },
  Nt = j({
    __name: "Intro",
    emits: ["start"],
    setup(p) {
      return (t, r) => {
        const n = ge,
          a = ht;
        return l(), _("div", Lt, [i("div", $t, [g(n, {
          name: "animations/Moon",
          class: "background"
        }), i("div", bt, h(("t" in t ? t.t : e(b))("memepad.intro.title")), 1), i("button", {
          type: "button",
          class: "reset",
          onClick: r[0] || (r[0] = c => t.$emit("start"))
        }, h(("t" in t ? t.t : e(b))("memepad.intro.button_text")), 1)]), g(a, {
          "no-background": ""
        }, {
          default: K(() => [i("div", Mt, h(("t" in t ? t.t : e(b))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  wt = U(Nt, [
    ["__scopeId", "data-v-2da05feb"]
  ]),
  Pt = ["disabled"],
  Rt = {
    class: "title"
  },
  Dt = j({
    __name: "StatusBanner",
    props: {
      title: {},
      loading: {
        type: Boolean
      }
    },
    setup(p) {
      return (t, r) => {
        const n = we,
          a = Q;
        return l(), _("button", {
          type: "button",
          class: "memepad-explore-status-banner reset",
          disabled: t.loading
        }, [r[0] || (r[0] = i("div", {
          class: "ping-dot"
        }, null, -1)), i("div", Rt, h(t.title), 1), t.loading ? (l(), L(n, {
          key: 0,
          class: "spinner",
          size: 16,
          type: e(Ne).DARK
        }, null, 8, ["type"])) : (l(), L(a, {
          key: 1,
          name: "chevron-right",
          class: "icon"
        }))], 8, Pt)
      }
    }
  }),
  Ot = U(Dt, [
    ["__scopeId", "data-v-92bc20c2"]
  ]),
  jt = {
    class: "memepad-sheet"
  },
  Ut = {
    class: "title"
  },
  Kt = {
    class: "subtitle"
  },
  Bt = {
    class: "label"
  },
  Vt = {
    class: "actions"
  },
  Gt = {
    key: 0,
    class: "dont-show"
  },
  xt = {
    class: "checkbox"
  },
  Wt = j({
    __name: "Sheet",
    props: re({
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
    emits: re(["close", "readMoreClick"], ["update:modelValue"]),
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: r
      } = ye(), n = p, a = t, c = Pe(p, "modelValue"), m = $(!n.dontShowStorageKey), d = $(!1), s = S({
        get: () => c.value && m.value,
        set: I => {
          c.value = I, d.value && n.dontShowStorageKey && r.storage.local.set(n.dontShowStorageKey, "true")
        }
      });
      (() => {
        n.dontShowStorageKey && (m.value = !r.storage.local.get(n.dontShowStorageKey))
      })();
      const C = () => a("readMoreClick"),
        A = () => {
          s.value = !1, a("close", {
            source: "modal"
          })
        },
        R = () => {
          s.value = !1, a("close", {
            source: "button"
          })
        };
      return (I, E) => {
        const O = ge,
          k = Q,
          y = gt,
          v = ze,
          f = qe;
        return l(), L(f, {
          "model-value": e(s),
          "onUpdate:modelValue": A
        }, {
          default: K(() => [i("div", jt, [g(O, {
            name: I.lottie,
            size: 116
          }, null, 8, ["name"]), i("div", Ut, h(I.title), 1), i("div", null, [i("div", Kt, h(I.subtitle), 1), I.hideReadMore ? P("", !0) : (l(), _("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: C
          }, [i("span", Bt, h(("t" in I ? I.t : e(b))("base.read_more")), 1), g(k, {
            name: "arrow-right",
            class: "icon"
          })]))]), i("div", Vt, [I.dontShowStorageKey ? (l(), _("div", Gt, [i("div", xt, [g(y, {
            modelValue: e(d),
            "onUpdate:modelValue": E[0] || (E[0] = T => fe(d) ? d.value = T : null)
          }, null, 8, ["modelValue"]), i("span", {
            class: "label",
            onClick: E[1] || (E[1] = T => d.value = !e(d))
          }, h(("t" in I ? I.t : e(b))("memepad.sheet.dont_show_again_label")), 1)])])) : P("", !0), g(v, {
            label: I.buttonText,
            fill: "",
            size: e(Xe).LARGE,
            onClick: R
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  Ft = U(Wt, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  be = "memepad-launch-jetton",
  Yt = j({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: r
      } = ye(), n = t, a = $(!1), c = $(r.storage.local.get(be) ? "watched" : "unwatched"), m = () => {
        c.value === "watched" ? n("launch") : a.value = !0
      }, d = () => {
        r.storage.local.set(be, "true"), n("launch")
      };
      return (s, u) => {
        const C = Ft;
        return l(), _(Z, null, [i("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: m
        }, [u[1] || (u[1] = i("i", {
          class: "seedling"
        }, null, -1)), Ze(" " + h(("t" in s ? s.t : e(b))("memepad.explore.launch.button_text")), 1)]), g(C, {
          modelValue: e(a),
          "onUpdate:modelValue": u[0] || (u[0] = A => fe(a) ? a.value = A : null),
          title: ("t" in s ? s.t : e(b))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in s ? s.t : e(b))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in s ? s.t : e(b))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: d
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  Jt = U(Yt, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  Ht = ["src"],
  Xt = {
    key: 1,
    class: "user-avatar-empty"
  },
  zt = {
    class: "text"
  },
  qt = {
    key: 0,
    class: "user-name"
  },
  Zt = {
    key: 1,
    class: "user-address"
  },
  Qt = {
    class: "action"
  },
  es = {
    class: "amount"
  },
  ts = {
    class: "ticker"
  },
  ss = {
    class: "seconds"
  },
  ns = j({
    __name: "Event",
    props: {
      event: {}
    },
    setup(p) {
      const t = p,
        r = S(() => b(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        n = S(() => z().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.event.shortname
          },
          query: {
            from: G.ACTIONBAR
          }
        })),
        a = S(() => {
          const c = Re(t.event.timestamp);
          return c.isDate ? c.label : `${c.label} ago`
        });
      return (c, m) => {
        const d = Q,
          s = Qe("I18nT"),
          u = Ie,
          C = Ee;
        return l(), L(C, {
          to: e(n),
          class: ee(["memepad-explore-event", `is-${c.event.type.toLowerCase()}`])
        }, {
          default: K(() => [c.event.user.avatarUrl ? (l(), _("img", {
            key: 0,
            src: c.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, Ht)) : (l(), _("div", Xt, [g(d, {
            name: "space-invader",
            class: "icon"
          })])), i("div", zt, [c.event.user.nickname ? (l(), _("span", qt, h(c.event.user.nickname), 1)) : (l(), _("span", Zt, h(("sliceWalletAddress" in c ? c.sliceWalletAddress : e(et))(c.event.user.address)), 1)), i("span", Qt, h(e(r)), 1), c.event.amount ? (l(), L(s, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: K(() => [i("span", es, h(`${("formatTon"in c?c.formatTon:e(tt))(c.event.amount)} TON`), 1)]),
            _: 1
          })) : P("", !0)]), g(u, {
            src: e(Se)(c.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), i("span", ts, h(c.event.ticker), 1), i("span", ss, h(e(a)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  as = U(ns, [
    ["__scopeId", "data-v-5d587a0b"]
  ]),
  os = {
    class: "ticker"
  },
  is = {
    key: 0,
    class: "live"
  },
  ls = {
    class: "label"
  },
  cs = {
    key: 1,
    class: "stats"
  },
  rs = {
    class: "holders-count"
  },
  ds = {
    class: "text"
  },
  us = {
    class: "transactions-count"
  },
  ms = {
    class: "text"
  },
  ps = j({
    __name: "Card",
    props: {
      jetton: {},
      index: {}
    },
    setup(p) {
      const t = p,
        r = S(() => z().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: `spotlight-${t.index+1}`
          }
        }));
      return (n, a) => {
        const c = Ie,
          m = Q,
          d = Ee;
        return l(), L(d, {
          to: e(r),
          class: "memepad-explore-spotlight-card"
        }, {
          default: K(() => [g(c, {
            src: e(Se)(n.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), i("span", os, h(n.jetton.ticker), 1), n.jetton.streamOnline ? (l(), _("div", is, [a[0] || (a[0] = i("div", {
            class: "dot"
          }, null, -1)), i("div", ls, h(("t" in n ? n.t : e(b))("memepad.explore.spotlight.live")), 1)])) : (l(), _("div", cs, [i("div", rs, [g(m, {
            name: "personal",
            class: "icon"
          }), i("span", ds, h(n.jetton.stats.holdersCount ? ("formatCount" in n ? n.formatCount : e(q))(n.jetton.stats.holdersCount, {
            accuracy: 0
          }).full : "-"), 1)]), i("div", us, [g(m, {
            name: "transfer",
            class: "icon"
          }), i("span", ms, h(n.jetton.stats.transactionsCount ? ("formatCount" in n ? n.formatCount : e(q))(n.jetton.stats.transactionsCount, {
            accuracy: 0
          }).full : "-"), 1)])]))]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  _s = U(ps, [
    ["__scopeId", "data-v-20e41bcf"]
  ]),
  vs = {
    class: "inner"
  },
  hs = {
    class: "left"
  },
  gs = {
    class: "mc"
  },
  ys = {
    key: 0,
    class: "diff"
  },
  fs = {
    key: 1,
    class: "percent"
  },
  Ss = {
    class: "progress"
  },
  Is = {
    class: "direction-wrapper"
  },
  Es = {
    key: 0,
    class: "direction up"
  },
  ks = {
    key: 0,
    class: "direction down"
  },
  Ts = j({
    __name: "Progress",
    props: {
      jetton: {},
      moveDirection: {},
      marketCap: {},
      tokenCollectedPercent: {}
    },
    setup(p) {
      return (t, r) => {
        var a;
        const n = Q;
        return l(), _("div", {
          class: ee(["memepad-explore-spotlight-progress", [t.moveDirection && `is-${(a=t.moveDirection)==null?void 0:a.direction}`, {
            "is-released": t.jetton.isReleased
          }]])
        }, [i("div", vs, [i("div", hs, [i("span", gs, h(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (l(), _("span", ys, h(t.moveDirection.diffFormatted), 1)) : P("", !0)]), t.jetton.isReleased ? (l(), L(n, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (l(), _("span", fs, h(t.tokenCollectedPercent ?? "-") + "% ", 1))]), i("div", Ss, [i("div", {
          class: "line",
          style: de({
            width: `${t.tokenCollectedPercent}%`
          })
        }, [i("div", Is, [g(Te, {
          name: "direction-opacity"
        }, {
          default: K(() => {
            var c;
            return [((c = t.moveDirection) == null ? void 0 : c.direction) === "up" ? (l(), _("div", Es, [g(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), g(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), g(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : P("", !0)]
          }),
          _: 1
        }), g(Te, {
          name: "direction-opacity"
        }, {
          default: K(() => {
            var c;
            return [((c = t.moveDirection) == null ? void 0 : c.direction) === "down" ? (l(), _("div", ks, [g(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), g(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), g(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : P("", !0)]
          }),
          _: 1
        })])], 4)])], 2)
      }
    }
  }),
  As = U(Ts, [
    ["__scopeId", "data-v-a683f66f"]
  ]),
  Cs = {
    class: "memepad-explore-spotlight"
  },
  Ls = {
    class: "bg"
  },
  $s = ["src"],
  bs = ["src"],
  Ms = {
    class: "content"
  },
  Ns = {
    class: "header"
  },
  ws = {
    class: "logo"
  },
  Ps = {
    class: "title"
  },
  Rs = ["src"],
  Ds = j({
    __name: "Spotlight",
    props: {
      list: {},
      getReactions: {
        type: Function
      }
    },
    setup(p) {
      const t = p,
        r = st(),
        n = $(0),
        a = S(() => t.list[n.value]),
        c = y => {
          var v;
          (v = m.value) == null || v.scrollTo({
            left: y * window.innerWidth + (n.value > y ? -1 : 1),
            behavior: "smooth"
          })
        },
        m = $(null),
        d = De(() => {
          if (!m.value) return;
          const y = m.value.children[0].offsetWidth + 10,
            v = m.value.scrollLeft,
            f = Math.round(v / y);
          n.value = f
        }, 50).debouncedFunction,
        s = S(() => {
          const y = (() => {
              if (!(!a.value.stats.tokenCollected || !a.value.tokenForDex)) return new ve(a.value.stats.tokenCollected.div(a.value.tokenForDex).times(100).toFixed(0, ve.ROUND_DOWN))
            })(),
            v = a.value.stats.marketCap && q(a.value.stats.marketCap);
          return {
            id: a.value.id,
            shortname: a.value.shortname,
            tokenCollectedPercent: y,
            marketCap: v
          }
        }),
        u = [],
        C = $();
      ae(s, (y, v) => {
        if (!y.marketCap || !v.marketCap || y.marketCap.full === v.marketCap.full || y.id !== v.id) {
          C.value = void 0;
          return
        }
        const f = y.marketCap.raw.minus(v.marketCap.raw),
          T = f.lt(0),
          M = q(f.abs(), {
            accuracy: 0
          }).full;
        M !== "0" && (C.value = {
          direction: T ? "down" : "up",
          diffFormatted: `${T?"-":"+"}${M}`
        }, u.push(setTimeout(() => C.value = void 0, 3e3)))
      });
      const A = S(() => {
          var y, v;
          return ((y = C.value) == null ? void 0 : y.direction) === "down" ? se("memepad/spotlight-room-down", "svg") : ((v = C.value) == null ? void 0 : v.direction) === "up" ? se("memepad/spotlight-room-up", "svg") : se("memepad/spotlight-room", "svg")
        }),
        {
          reactionsAnimations: R,
          ANIMATION_DURATION: I,
          restart: E
        } = k();
      ae(n, E, {
        immediate: !0
      }), oe(() => {
        u.forEach(clearTimeout)
      });
      const O = S(() => a.value.isReleased ? se("memepad/dex-bg", "gif") : se("memepad/bg", "gif"));

      function k() {
        let f = 0;
        const T = [];
        let M;
        const D = $(),
          N = $([]),
          V = ue(async () => await t.getReactions(s.value.shortname), le => {
            if (!D.value) {
              D.value = le;
              return
            }
            const {
              user: Rn,
              userStars: Dn,
              ...Be
            } = D.value;
            D.value = le;
            const {
              user: On,
              userStars: jn,
              ...Ve
            } = D.value, ke = Object.entries(Ve).reduce((x, [Y, _e]) => {
              const Fe = Be[Y],
                Ye = _e,
                Je = ve.max(Ye.minus(Fe), 0).toNumber();
              return {
                ...x,
                [Y]: Je
              }
            }, {}), Ge = 5e3 / Object.values(ke).reduce((x, Y) => x + Y, 0), xe = f, We = x => ({
              id: nt(),
              image: at(x),
              position: {
                x: he(0, 20) - 10,
                y: he(0, 20) - 10
              },
              animationType: he(1, 2),
              createdAt: Date.now()
            });
            Object.entries(ke).reduce((x, [Y, _e]) => x.concat(Array(_e).fill(Y)), []).sort(() => Math.random() - .5).forEach((x, Y) => {
              T.push(setTimeout(() => {
                xe === f && N.value.push(We(x))
              }, Ge * Y))
            })
          }, 5e3),
          w = async () => {
            await V.exec(), M = Oe(() => {
              N.value = N.value.filter(le => Date.now() - le.createdAt < 6e3)
            }, 2e3)
          }, F = () => {
            V.destroy(), T.forEach(clearTimeout), M && clearInterval(M), D.value = void 0, N.value = []
          };
        ae(() => s.value.shortname, () => {
          f++, T.forEach(clearTimeout), F(), w()
        }), w(), oe(F);
        const pe = () => {
          F(), w()
        };
        return {
          reactionsAnimations: S(() => N.value),
          ANIMATION_DURATION: 6e3,
          restart: pe
        }
      }
      return (y, v) => {
        var N, B, V;
        const f = ge,
          T = ft,
          M = _s,
          D = As;
        return l(), _("div", Cs, [i("div", Ls, [e(r).isLowEndDevice.value ? P("", !0) : (l(), _("img", {
          key: 0,
          src: e(O),
          alt: "Gif",
          class: ee([{
            "is-version-1": ((N = e(s).tokenCollectedPercent) == null ? void 0 : N.lte(30)) && !e(a).isReleased,
            "is-version-2": ((B = e(s).tokenCollectedPercent) == null ? void 0 : B.gt(30)) && e(s).tokenCollectedPercent.lte(60) && !e(a).isReleased,
            "is-version-3": ((V = e(s).tokenCollectedPercent) == null ? void 0 : V.gt(60)) && !e(a).isReleased,
            "is-dex": e(a).isReleased
          }, "gif"])
        }, null, 10, $s)), i("img", {
          src: e(A),
          alt: "Gif",
          class: "room"
        }, null, 8, bs), v[2] || (v[2] = i("div", {
          class: "gradient"
        }, null, -1))]), i("div", Ms, [i("div", Ns, [i("div", ws, [g(f, {
          name: "animations/Fire",
          size: 28
        }), i("div", Ps, h(("t" in y ? y.t : e(b))("memepad.explore.spotlight.title")), 1)]), y.list.length > 1 ? (l(), L(T, {
          key: 0,
          "model-value": e(n),
          count: y.list.length,
          timer: 15e3,
          "onUpdate:modelValue": c
        }, null, 8, ["model-value", "count"])) : P("", !0)]), i("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: v[0] || (v[0] = (...w) => e(d) && e(d)(...w)),
          onTouchmove: v[1] || (v[1] = (...w) => e(d) && e(d)(...w))
        }, [(l(!0), _(Z, null, me(t.list, (w, F) => (l(), L(M, {
          key: w.id,
          index: F,
          jetton: w,
          class: "item"
        }, null, 8, ["index", "jetton"]))), 128))], 544), (l(), L(D, {
          key: e(a).id,
          jetton: e(a),
          "move-direction": e(C),
          "market-cap": e(s).marketCap,
          "token-collected-percent": e(s).tokenCollectedPercent
        }, null, 8, ["jetton", "move-direction", "market-cap", "token-collected-percent"])), i("div", {
          class: "reactions",
          style: de({
            "--animation-duration": `${e(I)}ms`
          })
        }, [(l(!0), _(Z, null, me(e(R), w => (l(), _("img", {
          key: w.id,
          src: w.image,
          class: ee(`animation-${w.animationType}`),
          style: de({
            "--x-offset": w.position.x + "px",
            "--y-offset": w.position.y + "px"
          })
        }, null, 14, Rs))), 128))], 4)])])
      }
    }
  }),
  Os = U(Ds, [
    ["__scopeId", "data-v-42f23f4b"]
  ]),
  js = {
    class: "inner"
  },
  Us = {
    key: 0,
    class: "live"
  },
  Ks = j({
    __name: "ImageCollectedCircle",
    props: {
      image: {},
      collectedPercent: {},
      isReleased: {
        type: Boolean
      },
      streamOnline: {
        type: Boolean
      }
    },
    setup(p) {
      return (t, r) => {
        const n = Ie;
        return l(), _("div", {
          class: ee(["memepad-jetton-image-collected-circle", {
            "is-released": t.isReleased
          }]),
          style: de({
            "--collected-percent": t.collectedPercent
          })
        }, [i("div", js, [g(n, {
          src: t.image,
          size: 48,
          class: "image"
        }, null, 8, ["src"]), t.streamOnline ? (l(), _("div", Us, "LIVE")) : P("", !0)])], 6)
      }
    }
  }),
  Bs = U(Ks, [
    ["__scopeId", "data-v-abe4cfd5"]
  ]),
  Vs = {
    class: "center"
  },
  Gs = {
    class: "ticker"
  },
  xs = {
    key: 0,
    class: "base-stats"
  },
  Ws = {
    key: 0,
    class: "holders-count"
  },
  Fs = {
    class: "text"
  },
  Ys = {
    key: 1,
    class: "transactions-count"
  },
  Js = {
    class: "text"
  },
  Hs = {
    key: 1,
    class: "my-tokens-stats"
  },
  Xs = {
    class: "jettons"
  },
  zs = {
    key: 0,
    class: "base-values"
  },
  qs = {
    class: "market-cap"
  },
  Zs = {
    class: "label"
  },
  Qs = {
    class: "value"
  },
  en = {
    class: "lifetime"
  },
  tn = {
    class: "text"
  },
  sn = {
    key: 1,
    class: "my-tokens-values"
  },
  nn = {
    class: "fiat"
  },
  an = j({
    __name: "ListItem",
    props: {
      jetton: {},
      analyticsSource: {
        default: void 0
      },
      mode: {
        default: X.BASE
      }
    },
    setup(p) {
      const t = p,
        r = S(() => z().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: t.analyticsSource
          }
        })),
        n = S(() => {
          if (t.jetton.tokenForDex) return t.jetton.stats.tokenCollected && t.jetton.stats.tokenCollected.div(t.jetton.tokenForDex).times(100).toNumber()
        }),
        a = u => {
          const C = u.decimalPlaces();
          return Math.max(Math.min(1, C), 0)
        },
        c = S(() => Re(t.jetton.releaseTimestamp).label),
        m = S(() => t.jetton.ownedAmount ? Ae(t.jetton.ownedAmount, t.jetton.ticker).frontend : "-"),
        d = S(() => t.jetton.ownedAmountUSD ? Ae(t.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        s = S(() => t.jetton.pnlPercent ? St(t.jetton.pnlPercent) : void 0);
      return (u, C) => {
        const A = Bs,
          R = Q,
          I = Ee;
        return l(), L(I, {
          to: e(r),
          class: "memepad-jetton-list-item"
        }, {
          default: K(() => {
            var E;
            return [g(A, {
              image: e(Se)(u.jetton.iconFileKey),
              "collected-percent": e(n),
              "is-released": u.jetton.isReleased,
              "stream-online": u.jetton.streamOnline
            }, null, 8, ["image", "collected-percent", "is-released", "stream-online"]), i("div", Vs, [i("div", Gs, h(u.jetton.ticker), 1), u.mode === e(X).BASE ? (l(), _("div", xs, [u.jetton.stats.holdersCount !== void 0 ? (l(), _("div", Ws, [g(R, {
              name: "personal",
              class: "icon"
            }), i("span", Fs, h(("formatCount" in u ? u.formatCount : e(q))(u.jetton.stats.holdersCount, {
              accuracy: 0
            }).full), 1)])) : P("", !0), u.jetton.stats.transactionsCount !== void 0 ? (l(), _("div", Ys, [g(R, {
              name: "transfer",
              class: "icon"
            }), i("span", Js, h(("formatCount" in u ? u.formatCount : e(q))(u.jetton.stats.transactionsCount, {
              accuracy: 0
            }).full), 1)])) : P("", !0)])) : u.mode === e(X).MY_TOKENS ? (l(), _("div", Hs, [i("div", Xs, h(e(m)), 1)])) : P("", !0)]), u.mode === e(X).BASE ? (l(), _("div", zs, [i("div", qs, [i("span", Zs, h(("t" in u ? u.t : e(b))("memepad.jetton.stats.market_cap")), 1), i("span", Qs, h(u.jetton.stats.marketCap ? `$${("formatCount"in u?u.formatCount:e(q))(u.jetton.stats.marketCap,{accuracy:a(u.jetton.stats.marketCap)}).full}` : "-"), 1)]), i("div", en, [g(R, {
              name: "environment-leaf",
              class: "icon"
            }), i("span", tn, h(e(c)), 1)])])) : u.mode === e(X).MY_TOKENS ? (l(), _("div", sn, [i("div", nn, h(e(d)), 1), i("div", {
              class: ee(["pnl", e(s) && e(s).cls])
            }, h(((E = e(s)) == null ? void 0 : E.formatted) ?? "-"), 3)])) : P("", !0)]
          }),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  on = U(an, [
    ["__scopeId", "data-v-1a19f794"]
  ]),
  ln = j({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      mode: {}
    },
    setup(p) {
      return (t, r) => {
        const n = on;
        return l(), L(ot, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: K(() => [(l(!0), _(Z, null, me(t.items, a => (l(), L(n, {
            key: a.shortname,
            jetton: a,
            "analytics-source": t.analyticsSource,
            mode: t.mode
          }, null, 8, ["jetton", "analytics-source", "mode"]))), 128))]),
          _: 1
        })
      }
    }
  }),
  Ue = U(ln, [
    ["__scopeId", "data-v-3b3de455"]
  ]),
  cn = {
    class: "memepad-explore-panel-list"
  },
  rn = {
    class: "top"
  },
  dn = {
    class: "search-btn-wrapper"
  },
  un = {
    key: 0,
    class: "connect"
  },
  mn = {
    class: "label"
  },
  pn = {
    key: 1,
    class: "connect"
  },
  _n = {
    key: 1,
    class: "empty-state"
  },
  vn = {
    class: "label"
  },
  hn = j({
    __name: "PanelList",
    props: re({
      items: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: re(["search", "scrolled"], ["update:modelValue"]),
    setup(p) {
      const t = Pe(p, "modelValue"),
        r = je(),
        n = it(),
        a = [{
          value: o.NEW,
          pingDot: !0
        }, {
          value: o.LISTINGS
        }, {
          value: o.HOT
        }, {
          value: o.BLUMING
        }, {
          value: o.DEX
        }, {
          value: o.MCAP
        }, {
          value: o.STARRED
        }, {
          value: o.LIVE
        }, {
          value: o.MY_TOKENS
        }].map(d => {
          const s = {
            [o.NEW]: "New",
            [o.HOT]: "Hot",
            [o.LISTINGS]: "Listings",
            [o.BLUMING]: "Bluming",
            [o.DEX]: "DEX",
            [o.MCAP]: "MCap",
            [o.STARRED]: "Starred",
            [o.LIVE]: "Live",
            [o.MY_TOKENS]: "My tokens"
          };
          return {
            ...d,
            label: s[d.value]
          }
        }),
        c = S(() => {
          switch (t.value) {
            case o.NEW:
              return G.NEW;
            case o.BLUMING:
              return G.BLUMING;
            case o.HOT:
              return G.HOT;
            case o.MY_TOKENS:
              return G.POSITIONS;
            case o.MCAP:
              return G.MCAP;
            case o.LISTINGS:
              return G.LISTINGS;
            case o.DEX:
              return G.DEX;
            case o.STARRED:
              return G.STARRED
          }
        }),
        m = S(() => t.value === o.MY_TOKENS ? X.MY_TOKENS : X.BASE);
      return (d, s) => {
        const u = Q,
          C = yt,
          A = we,
          R = Ue,
          I = It,
          E = kt;
        return l(), _("div", cn, [i("div", rn, [g(C, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = O => t.value = O),
          items: e(a)
        }, {
          after: K(() => [i("div", dn, [i("button", {
            type: "button",
            class: "search reset",
            onClick: s[0] || (s[0] = O => d.$emit("search"))
          }, [g(u, {
            name: "search",
            class: "icon"
          })])])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (e(r).wallet.value.status === "must_reconnect" || e(r).wallet.value.status === "not_found") && t.value === e(o).MY_TOKENS ? (l(), _("div", un, [i("div", mn, h(("t" in d ? d.t : e(b))("memepad.explore.my_tokens.connect_text")), 1), i("button", {
          type: "button",
          class: "reset",
          onClick: s[2] || (s[2] = O => e(n).runConnectionFlow())
        }, h(("t" in d ? d.t : e(b))("wallet.connect.btn")), 1)])) : e(r).wallet.value.status === "loading" && t.value === e(o).MY_TOKENS ? (l(), _("div", pn, [g(A, {
          type: e(Ne).LIGHT
        }, null, 8, ["type"])])) : d.items ? (l(), L(I, {
          key: 2,
          onEnd: s[3] || (s[3] = O => d.$emit("scrolled"))
        }, {
          default: K(() => [d.items.length ? (l(), L(R, {
            key: t.value,
            items: d.items,
            "analytics-source": e(c),
            mode: e(m)
          }, null, 8, ["items", "analytics-source", "mode"])) : t.value === e(o).MY_TOKENS ? (l(), _("div", _n, [g(u, {
            name: "add-plus-circle",
            class: "icon"
          }), i("div", vn, h(("t" in d ? d.t : e(b))("memepad.explore.my_tokens.empty_text")), 1)])) : P("", !0)]),
          _: 1
        })) : (l(), _(Z, {
          key: 3
        }, me(6, O => i("div", {
          key: O,
          class: "skeleton"
        }, [g(E, {
          class: "image"
        }), g(E, {
          class: "ticker"
        }), g(E, {
          class: "stats"
        })])), 64))])
      }
    }
  }),
  gn = U(hn, [
    ["__scopeId", "data-v-3724854d"]
  ]),
  yn = () => {
    const p = ce(() => "", "$nnokZ0cAmU"),
      t = ce(() => !1, "$dxYpAQPdtd"),
      r = ce("$pDWqkemNGG"),
      n = lt(async d => (t.value = !0, {
        res: await te.getMemepadSearch(d),
        search: d
      }), ({
        res: d,
        search: s
      }) => {
        t.value = !1, p.value = s, r.value = d.err ? void 0 : d.data
      });
    return {
      _flow: {
        init: () => {},
        destroy: () => {
          p.value = "", t.value = !1, r.value = void 0
        }
      },
      search: d => {
        d !== p.value && (d === "" ? (t.value = !1, r.value = void 0, p.value = "") : n(d))
      },
      searchLine: S(() => p.value),
      data: S(() => r.value),
      isSearching: S(() => t.value)
    }
  },
  fn = {
    class: "memepad-search page"
  },
  Sn = {
    key: 0,
    class: "empty"
  },
  In = j({
    __name: "Search",
    emits: ["close"],
    setup(p, {
      emit: t
    }) {
      const r = t,
        n = $(),
        a = yn();
      a._flow.init(), oe(() => a._flow.destroy());
      const c = $(!1),
        m = $(""),
        d = [];
      (() => {
        d.push(setTimeout(() => {
          c.value = !0
        }, 400))
      })(), oe(() => {
        d.forEach(A => clearTimeout(A))
      });
      const {
        debouncedFunction: u
      } = De(a.search, 600);
      return ae(m, u), ie().memepad.memepadSearchOpen(), ct().initHandler(() => r("close"), "memepad-search"), (A, R) => {
        const I = Tt,
          E = Ue;
        return l(), _("div", fn, [g(I, {
          ref_key: "searchWithTitleComponent",
          ref: n,
          modelValue: e(m),
          "onUpdate:modelValue": R[0] || (R[0] = O => fe(m) ? m.value = O : null),
          placeholder: ("t" in A ? A.t : e(b))("memepad.search.input_placeholder"),
          activated: e(c),
          autofocus: "",
          "is-loading": e(a).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), e(a).data.value ? (l(), _(Z, {
          key: 0
        }, [e(a).data.value.length === 0 ? (l(), _("div", Sn, h(("t" in A ? A.t : e(b))("memepad.search.empty_text")), 1)) : (l(), L(E, {
          key: 1,
          items: e(a).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in A ? A.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : e(G)).SEARCH
        }, null, 8, ["items", "analytics-source"]))], 64)) : P("", !0)])
      }
    }
  }),
  En = U(In, [
    ["__scopeId", "data-v-4ec42003"]
  ]),
  Ke = (p, t, r) => {
    const n = Math.max(0, p.length - 1),
      a = $([...p].reverse()),
      c = $(n),
      m = () => {
        c.value < a.value.length - 1 && c.value++
      },
      d = S(() => {
        const E = Math.max(0, c.value - r + 1),
          O = Math.min(c.value + 1, a.value.length);
        return [...a.value].slice(E, O).reverse()
      }),
      s = S(() => [...a.value].reverse()[c.value]);
    let u;
    return {
      init: () => {
        clearInterval(u), u = Oe(m, t)
      },
      destroy: () => {
        a.value = [], c.value = 0, clearInterval(u)
      },
      addItems: E => {
        a.value.push(...[...E].reverse())
      },
      setItems: E => {
        a.value = E, c.value = E.length - 1
      },
      items: S(() => a.value),
      appearedItems: d,
      currentAppearedItem: s
    }
  },
  kn = () => {
    const p = rt(),
      t = je(),
      r = ie();
    let n;
    (k => {
      k.LIST = "list", k.STEP_LIST = "step-list", k.PAGINATION_LIST = "pagination-list"
    })(n || (n = {}));
    const a = {
        [o.NEW]: "step-list",
        [o.LIVE]: "list",
        [o.HOT]: "list",
        [o.BLUMING]: "pagination-list",
        [o.DEX]: "pagination-list",
        [o.MCAP]: "pagination-list",
        [o.MY_TOKENS]: "list",
        [o.LISTINGS]: "pagination-list",
        [o.STARRED]: "list"
      },
      c = async ({
        type: k,
        pageToken: y
      }) => {
        if (k === o.MY_TOKENS) {
          const D = t.wallet.value.status === "connected" ? t.wallet.value.address.default : void 0;
          if (!D) return Le({
            jettons: [],
            nextPageToken: ""
          });
          const N = await te.getMemepadJettonsPositions(D);
          return Ce(N) ? Le({
            jettons: N.data.jettons,
            nextPageToken: ""
          }) : N
        }
        const v = {
            [o.NEW]: J.CREATED_AT,
            [o.HOT]: J.HOT,
            [o.LIVE]: J.LIVE_STREAMS,
            [o.BLUMING]: J.NEAREST_TO_LISTING,
            [o.MCAP]: J.MARKET_CAP,
            [o.DEX]: J.PUBLISHED_AT,
            [o.LISTINGS]: J.IS_LISTED_ON_BLUM,
            [o.STARRED]: J.STARRED
          },
          f = {
            [o.NEW]: H.EXCLUDE,
            [o.HOT]: H.INCLUDE,
            [o.LIVE]: H.INCLUDE,
            [o.BLUMING]: H.INCLUDE_LISTED,
            [o.MCAP]: H.INCLUDE,
            [o.DEX]: H.ONLY,
            [o.LISTINGS]: H.INCLUDE,
            [o.STARRED]: H.INCLUDE
          },
          T = v[k],
          M = f[k];
        return await te.getMemepadJettonsSection(T, M, y)
      }, m = ce(() => o.NEW, "$SbGDXlzgsy"), d = () => {
        const k = m.value;
        switch (a[k]) {
          case "step-list":
            return {
              type: "step-list", stepList: void 0, interval: ue(async () => await c({
                type: k
              }), v => {
                var T;
                if (((T = s.value) == null ? void 0 : T.type) !== "step-list" || k !== m.value) return;
                const f = s.value.stepList;
                if (!f) s.value.stepList = Ke(v.jettons, 1e3, 60), s.value.stepList.init();
                else {
                  const M = f,
                    D = v.jettons.filter(B => !M.items.some(V => V.id === B.id)),
                    N = M.items.map(B => v.jettons.find(w => w.id === B.id) || B);
                  M.setItems(N), M.addItems(D)
                }
              }, 5e3)
            };
          case "pagination-list":
            return {
              type: "pagination-list", pagination: Et(async f => {
                const T = await c({
                  type: k,
                  pageToken: f
                });
                if (!Ce(T)) throw ne("Failed to get list");
                return {
                  items: T.data.jettons,
                  nextPageToken: T.data.nextPageToken ?? ""
                }
              })
            };
          case "list":
            return {
              type: "list", data: void 0, interval: ue(async () => await c({
                type: k
              }), v => {
                var f;
                ((f = s.value) == null ? void 0 : f.type) !== "list" || k !== m.value || (s.value.data = v.jettons)
              }, 5e3)
            };
          default:
            throw ne("Unknown type")
        }
      }, s = $(d()), u = () => {
        var k;
        if (s.value) switch (s.value.type) {
          case "list":
            s.value.interval.destroy();
            break;
          case "step-list":
            (k = s.value.stepList) == null || k.destroy(), s.value.interval.destroy();
            break;
          case "pagination-list":
            break;
          default:
            throw s.value, ne("Unknown type")
        }
      }, C = async () => {
        switch (s.value = d(), s.value.type) {
          case "step-list": {
            await s.value.interval.exec();
            break
          }
          case "pagination-list": {
            await s.value.pagination.load();
            break
          }
          case "list": {
            await s.value.interval.exec();
            break
          }
          default:
            throw ne("Unknown type")
        }
      };
    let A;
    const R = async () => {
      await C(), A = ae(m, async k => {
        u(), await C();
        const y = (() => {
          switch (k) {
            case o.NEW:
              return W.NEW;
            case o.BLUMING:
              return W.BLUMING;
            case o.HOT:
              return W.HOT;
            case o.LIVE:
              return W.LIVE;
            case o.MY_TOKENS:
              return W.POSITIONS;
            case o.MCAP:
              return W.MCAP;
            case o.DEX:
              return W.DEX;
            case o.LISTINGS:
              return W.LISTINGS;
            case o.STARRED:
              return W.STARRED
          }
        })();
        r.memepad.memepadOpenPanelListTab({
          source: y
        })
      })
    }, I = () => {
      u(), A == null || A()
    };
    p.onConnected(() => {
      m.value === o.MY_TOKENS && (u(), C())
    });
    const E = S(() => {
      var y;
      if (!s.value) return;
      switch (s.value.type) {
        case "step-list":
          return (y = s.value.stepList) == null ? void 0 : y.appearedItems;
        case "pagination-list":
          return s.value.pagination.isInitialized ? s.value.pagination.data : void 0;
        case "list":
          return s.value.data;
        default:
          throw ne("Unknown type")
      }
    });
    return {
      init: R,
      destroy: I,
      onPaginationLoad: async () => {
        s.value.type === "pagination-list" && await s.value.pagination.load()
      },
      activeTab: m,
      items: E
    }
  },
  Tn = () => {
    const p = $(),
      t = S(() => {
        var m;
        return (m = p.value) == null ? void 0 : m.stepList.currentAppearedItem
      }),
      r = m => {
        p.value || (p.value = {
          stepList: Ke([], 1e3, 15)
        }, p.value.stepList.init()), p.value.stepList.addItems(m)
      },
      n = $(dt(async () => await te.getMemepadExploreEvents(), m => {
        r(m.transactions)
      }, 9e3));
    return {
      init: async () => {
        await n.value.exec()
      },
      destroy: () => {
        var m;
        n.value.destroy(), (m = p.value) == null || m.stepList.destroy(), p.value = void 0
      },
      eventAppearedItem: S(() => t.value)
    }
  },
  An = () => {
    const p = $(),
      r = ue(async () => ut(await te.getMemepadExploreSpotlight()), m => p.value = m.jettons, 5e3);
    return {
      init: async () => {
        await r.exec()
      },
      destroy: () => {
        r.destroy()
      },
      getReactions: m => te.getMemepadJettonReactions(m),
      spotlight: S(() => p.value)
    }
  },
  Cn = () => {
    const p = Tn(),
      t = An(),
      r = kn();
    return {
      _flow: {
        init: async () => {
          await Promise.all([p.init(), t.init(), r.init()])
        },
        destroy: () => {
          p.destroy(), t.destroy(), r.destroy()
        }
      },
      events: {
        eventAppearedItem: p.eventAppearedItem
      },
      spotlight: {
        items: t.spotlight,
        getReactions: t.getReactions
      },
      panelList: {
        activeTab: r.activeTab,
        items: r.items,
        onPaginationLoad: r.onPaginationLoad
      }
    }
  },
  Ln = {
    key: 0,
    class: "memepad-explore"
  },
  $n = {
    class: "header"
  },
  bn = {
    class: "title"
  },
  Mn = j({
    __name: "Index",
    setup(p) {
      const {
        events: t,
        spotlight: r,
        panelList: n,
        _flow: {
          init: a,
          destroy: c
        }
      } = Cn(), {
        addresses: m
      } = At(), {
        launchingJettons: d
      } = mt(), {
        aiAgentStatusesNotClickedList: s,
        loadAiAgentSocialsActivateLinkAndOpen: u,
        isAiAgentStatusBannerLoading: C,
        setAiAgentStatusBannerClicked: A
      } = Ct(), R = $(!1);
      a().then(() => {
        R.value = !0
      }), oe(() => {
        c()
      });
      const I = S(() => {
          var M, D;
          const v = (M = m.value) == null ? void 0 : M.isAvailableAI,
            f = (D = s.value) == null ? void 0 : D.at(0);
          if (f && v) {
            const N = f.shortname;
            return {
              onClick: async () => {
                ie().memepad.memepadJettonAiSocialsActivate({
                  source: "main"
                }), await u(N), A(N)
              },
              title: b("memepad.ai_agent.activate_banner_label", {
                ticker: f.ticker
              }),
              loading: C(N)
            }
          }
          const T = d.value.at(0);
          if (T) return {
            onClick: () => {
              ie().memepad.memepadJettonLaunchingBannerClick({
                flowType: T.form.aiAgentEnable ? $e.AI : $e.REGULAR
              }), z().push({
                name: "memepad-new-launching-id",
                params: {
                  id: T.id
                }
              })
            },
            title: b("memepad.explore.launching_jetton_banner.label", {
              ticker: T.form.ticker
            }),
            loading: !1
          }
        }),
        E = $(!!pt().query.search),
        O = () => {
          z().push({
            name: "memepad-new",
            query: {
              memepadNewFrom: _t.MEMEPAD_MAIN
            }
          })
        },
        k = () => {
          z().push({
            query: {
              search: "1"
            }
          }), E.value = !0
        },
        y = () => {
          E.value = !1, z().push({
            query: {
              search: void 0
            }
          })
        };
      return (v, f) => {
        var F;
        const T = Ot,
          M = Jt,
          D = as,
          N = Os,
          B = gn,
          V = vt,
          w = En;
        return l(), _(Z, null, [e(R) ? (l(), _("div", Ln, [e(I) ? (l(), L(T, {
          key: 0,
          title: e(I).title,
          loading: e(I).loading,
          class: "status-banner",
          onClick: e(I).onClick
        }, null, 8, ["title", "loading", "onClick"])) : P("", !0), i("div", $n, [i("div", bn, h(("t" in v ? v.t : e(b))("memepad.explore.title")), 1), g(M, {
          onLaunch: O
        })]), e(t).eventAppearedItem.value ? (l(), L(D, {
          key: 1,
          event: e(t).eventAppearedItem.value,
          class: "event"
        }, null, 8, ["event"])) : P("", !0), (F = e(r).items.value) != null && F.length ? (l(), L(N, {
          key: 2,
          list: e(r).items.value,
          "get-reactions": e(r).getReactions
        }, null, 8, ["list", "get-reactions"])) : P("", !0), g(B, {
          modelValue: e(n).activeTab.value,
          "onUpdate:modelValue": f[0] || (f[0] = pe => e(n).activeTab.value = pe),
          items: e(n).items.value,
          onSearch: k,
          onScrolled: e(n).onPaginationLoad
        }, null, 8, ["modelValue", "items", "onScrolled"])])) : (l(), L(V, {
          key: 1
        })), e(E) ? (l(), L(w, {
          key: 2,
          onClose: y
        })) : P("", !0)], 64)
      }
    }
  }),
  Nn = U(Mn, [
    ["__scopeId", "data-v-d675e6d0"]
  ]),
  wn = {
    class: "memepad-index page"
  },
  Me = "memepad-intro",
  Pn = j({
    __name: "index",
    setup(p) {
      const {
        $webApp: t
      } = ye(), r = $(t.storage.local.get(Me) ? "explore" : "intro"), n = () => {
        r.value = "explore", t.storage.local.set(Me, "true")
      };
      return ie().memepad.memepadExploreOpen(), (c, m) => {
        const d = He,
          s = wt,
          u = Nn;
        return l(), _("div", wn, [g(d), e(r) === "intro" ? (l(), L(s, {
          key: 0,
          onStart: n
        })) : e(r) === "explore" ? (l(), L(u, {
          key: 1
        })) : P("", !0)])
      }
    }
  }),
  Xn = U(Pn, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  Xn as
  default
};