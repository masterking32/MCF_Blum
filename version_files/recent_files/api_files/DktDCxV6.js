import {
  _ as He
} from "./BKd1wh9d.js";
import {
  d as j,
  o as i,
  c as _,
  a,
  b as g,
  t as h,
  e,
  C as $,
  D as K,
  an as ge,
  f as U,
  M as L,
  b0 as we,
  b1 as Ne,
  _ as Q,
  aw as re,
  h as ye,
  ax as Pe,
  y as A,
  j as I,
  E as P,
  p as fe,
  X as Xe,
  x as ze,
  Y as qe,
  m as Ze,
  F as Z,
  ab as z,
  aU as x,
  b2 as Oe,
  V as Qe,
  b3 as et,
  b4 as tt,
  b5 as Ie,
  n as ee,
  b6 as ke,
  H as Ee,
  b7 as q,
  aN as de,
  al as Te,
  a6 as st,
  a1 as ve,
  U as oe,
  W as se,
  a2 as ae,
  a0 as ue,
  q as me,
  G as De,
  aQ as Re,
  au as nt,
  b8 as ot,
  ah as he,
  b9 as X,
  L as be,
  ba as at,
  Z as je,
  az as it,
  bb as l,
  bc as ce,
  bd as lt,
  a4 as te,
  a8 as ie,
  T as ct,
  be as rt,
  a3 as ne,
  bf as dt,
  aa as Ce,
  bg as Y,
  a9 as ut,
  a5 as Le,
  bh as J,
  bi as H,
  bj as mt,
  bk as Ae,
  bl as pt,
  aJ as _t
} from "./C6VgFSU0.js";
import {
  _ as vt
} from "./ig43WX5S.js";
import {
  _ as ht,
  a as gt
} from "./DHjFZ3Fl.js";
import {
  _ as yt
} from "./DFTu35lS.js";
import {
  g as ft
} from "./7vvoI9-D.js";
import {
  _ as It,
  u as kt
} from "./BdLjwR_6.js";
import {
  _ as Et
} from "./J32XK_51.js";
import {
  _ as St
} from "./suJT_Una.js";
import {
  _ as Tt
} from "./DaSUW53y.js";
import {
  u as bt,
  a as Ct
} from "./CzWP8kBE.js";
const Lt = {
    class: "memepad-intro"
  },
  At = {
    class: "content"
  },
  $t = {
    class: "title"
  },
  Mt = {
    class: "note"
  },
  wt = j({
    __name: "Intro",
    emits: ["start"],
    setup(p) {
      return (t, r) => {
        const n = ge,
          o = vt;
        return i(), _("div", Lt, [a("div", At, [g(n, {
          name: "animations/Moon",
          class: "background"
        }), a("div", $t, h(("t" in t ? t.t : e($))("memepad.intro.title")), 1), a("button", {
          type: "button",
          class: "reset",
          onClick: r[0] || (r[0] = c => t.$emit("start"))
        }, h(("t" in t ? t.t : e($))("memepad.intro.button_text")), 1)]), g(o, {
          "no-background": ""
        }, {
          default: K(() => [a("div", Mt, h(("t" in t ? t.t : e($))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  Nt = U(wt, [
    ["__scopeId", "data-v-2da05feb"]
  ]),
  Pt = ["disabled"],
  Ot = {
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
        const n = Ne,
          o = Q;
        return i(), _("button", {
          type: "button",
          class: "memepad-explore-status-banner reset",
          disabled: t.loading
        }, [r[0] || (r[0] = a("div", {
          class: "ping-dot"
        }, null, -1)), a("div", Ot, h(t.title), 1), t.loading ? (i(), L(n, {
          key: 0,
          class: "spinner",
          size: 16,
          type: e(we).DARK
        }, null, 8, ["type"])) : (i(), L(o, {
          key: 1,
          name: "chevron-right",
          class: "icon"
        }))], 8, Pt)
      }
    }
  }),
  Rt = U(Dt, [
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
      } = ye(), n = p, o = t, c = Pe(p, "modelValue"), m = A(!n.dontShowStorageKey), d = A(!1), s = I({
        get: () => c.value && m.value,
        set: k => {
          c.value = k, d.value && n.dontShowStorageKey && r.storage.local.set(n.dontShowStorageKey, "true")
        }
      });
      (() => {
        n.dontShowStorageKey && (m.value = !r.storage.local.get(n.dontShowStorageKey))
      })();
      const C = () => o("readMoreClick"),
        b = () => {
          s.value = !1, o("close", {
            source: "modal"
          })
        },
        O = () => {
          s.value = !1, o("close", {
            source: "button"
          })
        };
      return (k, E) => {
        const R = ge,
          S = Q,
          y = ht,
          v = ze,
          f = qe;
        return i(), L(f, {
          "model-value": e(s),
          "onUpdate:modelValue": b
        }, {
          default: K(() => [a("div", jt, [g(R, {
            name: k.lottie,
            size: 116
          }, null, 8, ["name"]), a("div", Ut, h(k.title), 1), a("div", null, [a("div", Kt, h(k.subtitle), 1), k.hideReadMore ? P("", !0) : (i(), _("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: C
          }, [a("span", Bt, h(("t" in k ? k.t : e($))("base.read_more")), 1), g(S, {
            name: "arrow-right",
            class: "icon"
          })]))]), a("div", Vt, [k.dontShowStorageKey ? (i(), _("div", Gt, [a("div", xt, [g(y, {
            modelValue: e(d),
            "onUpdate:modelValue": E[0] || (E[0] = T => fe(d) ? d.value = T : null)
          }, null, 8, ["modelValue"]), a("span", {
            class: "label",
            onClick: E[1] || (E[1] = T => d.value = !e(d))
          }, h(("t" in k ? k.t : e($))("memepad.sheet.dont_show_again_label")), 1)])])) : P("", !0), g(v, {
            label: k.buttonText,
            fill: "",
            size: e(Xe).LARGE,
            onClick: O
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  Ft = U(Wt, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  $e = "memepad-launch-jetton",
  Yt = j({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: r
      } = ye(), n = t, o = A(!1), c = A(r.storage.local.get($e) ? "watched" : "unwatched"), m = () => {
        c.value === "watched" ? n("launch") : o.value = !0
      }, d = () => {
        r.storage.local.set($e, "true"), n("launch")
      };
      return (s, u) => {
        const C = Ft;
        return i(), _(Z, null, [a("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: m
        }, [u[1] || (u[1] = a("i", {
          class: "seedling"
        }, null, -1)), Ze(" " + h(("t" in s ? s.t : e($))("memepad.explore.launch.button_text")), 1)]), g(C, {
          modelValue: e(o),
          "onUpdate:modelValue": u[0] || (u[0] = b => fe(o) ? o.value = b : null),
          title: ("t" in s ? s.t : e($))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in s ? s.t : e($))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in s ? s.t : e($))("memepad.explore.launch_modal.button_text"),
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
        r = I(() => $(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        n = I(() => z().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.event.shortname
          },
          query: {
            from: x.ACTIONBAR
          }
        })),
        o = I(() => {
          const c = Oe(t.event.timestamp);
          return c.isDate ? c.label : `${c.label} ago`
        });
      return (c, m) => {
        const d = Q,
          s = Qe("I18nT"),
          u = ke,
          C = Ee;
        return i(), L(C, {
          to: e(n),
          class: ee(["memepad-explore-event", `is-${c.event.type.toLowerCase()}`])
        }, {
          default: K(() => [c.event.user.avatarUrl ? (i(), _("img", {
            key: 0,
            src: c.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, Ht)) : (i(), _("div", Xt, [g(d, {
            name: "space-invader",
            class: "icon"
          })])), a("div", zt, [c.event.user.nickname ? (i(), _("span", qt, h(c.event.user.nickname), 1)) : (i(), _("span", Zt, h(("sliceWalletAddress" in c ? c.sliceWalletAddress : e(et))(c.event.user.address)), 1)), a("span", Qt, h(e(r)), 1), c.event.amount ? (i(), L(s, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: K(() => [a("span", es, h(`${("formatTon"in c?c.formatTon:e(tt))(c.event.amount)} TON`), 1)]),
            _: 1
          })) : P("", !0)]), g(u, {
            src: e(Ie)(c.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), a("span", ts, h(c.event.ticker), 1), a("span", ss, h(e(o)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  os = U(ns, [
    ["__scopeId", "data-v-9a23721a"]
  ]),
  as = {
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
        r = I(() => z().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: `spotlight-${t.index+1}`
          }
        }));
      return (n, o) => {
        const c = ke,
          m = Q,
          d = Ee;
        return i(), L(d, {
          to: e(r),
          class: "memepad-explore-spotlight-card"
        }, {
          default: K(() => [g(c, {
            src: e(Ie)(n.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), a("span", as, h(n.jetton.ticker), 1), n.jetton.streamOnline ? (i(), _("div", is, [o[0] || (o[0] = a("div", {
            class: "dot"
          }, null, -1)), a("div", ls, h(("t" in n ? n.t : e($))("memepad.explore.spotlight.live")), 1)])) : (i(), _("div", cs, [a("div", rs, [g(m, {
            name: "personal",
            class: "icon"
          }), a("span", ds, h(n.jetton.stats.holdersCount ? ("formatCount" in n ? n.formatCount : e(q))(n.jetton.stats.holdersCount, {
            accuracy: 0
          }).full : "-"), 1)]), a("div", us, [g(m, {
            name: "transfer",
            class: "icon"
          }), a("span", ms, h(n.jetton.stats.transactionsCount ? ("formatCount" in n ? n.formatCount : e(q))(n.jetton.stats.transactionsCount, {
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
  Is = {
    class: "progress"
  },
  ks = {
    class: "direction-wrapper"
  },
  Es = {
    key: 0,
    class: "direction up"
  },
  Ss = {
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
        var o;
        const n = Q;
        return i(), _("div", {
          class: ee(["memepad-explore-spotlight-progress", [t.moveDirection && `is-${(o=t.moveDirection)==null?void 0:o.direction}`, {
            "is-released": t.jetton.isReleased
          }]])
        }, [a("div", vs, [a("div", hs, [a("span", gs, h(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (i(), _("span", ys, h(t.moveDirection.diffFormatted), 1)) : P("", !0)]), t.jetton.isReleased ? (i(), L(n, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (i(), _("span", fs, h(t.tokenCollectedPercent ?? "-") + "% ", 1))]), a("div", Is, [a("div", {
          class: "line",
          style: de({
            width: `${t.tokenCollectedPercent}%`
          })
        }, [a("div", ks, [g(Te, {
          name: "direction-opacity"
        }, {
          default: K(() => {
            var c;
            return [((c = t.moveDirection) == null ? void 0 : c.direction) === "up" ? (i(), _("div", Es, [g(n, {
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
            return [((c = t.moveDirection) == null ? void 0 : c.direction) === "down" ? (i(), _("div", Ss, [g(n, {
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
  bs = U(Ts, [
    ["__scopeId", "data-v-dd6ee1cb"]
  ]),
  Cs = {
    class: "memepad-explore-spotlight"
  },
  Ls = {
    class: "bg"
  },
  As = ["src"],
  $s = ["src"],
  Ms = {
    class: "content"
  },
  ws = {
    class: "header"
  },
  Ns = {
    class: "logo"
  },
  Ps = {
    class: "title"
  },
  Os = ["src"],
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
        n = A(0),
        o = I(() => t.list[n.value]),
        c = y => {
          var v;
          (v = m.value) == null || v.scrollTo({
            left: y * window.innerWidth + (n.value > y ? -1 : 1),
            behavior: "smooth"
          })
        },
        m = A(null),
        d = De(() => {
          if (!m.value) return;
          const y = m.value.children[0].offsetWidth + 10,
            v = m.value.scrollLeft,
            f = Math.round(v / y);
          n.value = f
        }, 50).debouncedFunction,
        s = I(() => {
          const y = (() => {
              if (!(!o.value.stats.tokenCollected || !o.value.tokenForDex)) return new ve(o.value.stats.tokenCollected.div(o.value.tokenForDex).times(100).toFixed(0, ve.ROUND_DOWN))
            })(),
            v = o.value.stats.marketCap && q(o.value.stats.marketCap);
          return {
            id: o.value.id,
            shortname: o.value.shortname,
            tokenCollectedPercent: y,
            marketCap: v
          }
        }),
        u = [],
        C = A();
      oe(s, (y, v) => {
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
      const b = I(() => {
          var y, v;
          return ((y = C.value) == null ? void 0 : y.direction) === "down" ? se("memepad/spotlight-room-down", "svg") : ((v = C.value) == null ? void 0 : v.direction) === "up" ? se("memepad/spotlight-room-up", "svg") : se("memepad/spotlight-room", "svg")
        }),
        {
          reactionsAnimations: O,
          ANIMATION_DURATION: k,
          restart: E
        } = S();
      oe(n, E, {
        immediate: !0
      }), ae(() => {
        u.forEach(clearTimeout)
      });
      const R = I(() => o.value.isReleased ? se("memepad/dex-bg", "gif") : se("memepad/bg", "gif"));

      function S() {
        let f = 0;
        const T = [];
        let M;
        const D = A(),
          w = A([]),
          V = ue(async () => await t.getReactions(s.value.shortname), le => {
            if (!D.value) {
              D.value = le;
              return
            }
            const {
              user: On,
              ...Be
            } = D.value;
            D.value = le;
            const {
              user: Dn,
              ...Ve
            } = D.value, Se = Object.entries(Ve).reduce((G, [F, _e]) => {
              const Fe = Be[F],
                Ye = _e,
                Je = ve.max(Ye.minus(Fe), 0).toNumber();
              return {
                ...G,
                [F]: Je
              }
            }, {}), Ge = 5e3 / Object.values(Se).reduce((G, F) => G + F, 0), xe = f, We = G => ({
              id: nt(),
              image: ot(G),
              position: {
                x: he(0, 20) - 10,
                y: he(0, 20) - 10
              },
              animationType: he(1, 2),
              createdAt: Date.now()
            });
            Object.entries(Se).reduce((G, [F, _e]) => G.concat(Array(_e).fill(F)), []).sort(() => Math.random() - .5).forEach((G, F) => {
              T.push(setTimeout(() => {
                xe === f && w.value.push(We(G))
              }, Ge * F))
            })
          }, 5e3),
          N = async () => {
            await V.exec(), M = Re(() => {
              w.value = w.value.filter(le => Date.now() - le.createdAt < 6e3)
            }, 2e3)
          }, W = () => {
            V.destroy(), T.forEach(clearTimeout), M && clearInterval(M), D.value = void 0, w.value = []
          };
        oe(() => s.value.shortname, () => {
          f++, T.forEach(clearTimeout), W(), N()
        }), N(), ae(W);
        const pe = () => {
          W(), N()
        };
        return {
          reactionsAnimations: I(() => w.value),
          ANIMATION_DURATION: 6e3,
          restart: pe
        }
      }
      return (y, v) => {
        var w, B, V;
        const f = ge,
          T = yt,
          M = _s,
          D = bs;
        return i(), _("div", Cs, [a("div", Ls, [e(r).isLowEndDevice.value ? P("", !0) : (i(), _("img", {
          key: 0,
          src: e(R),
          alt: "Gif",
          class: ee([{
            "is-version-1": ((w = e(s).tokenCollectedPercent) == null ? void 0 : w.lte(30)) && !e(o).isReleased,
            "is-version-2": ((B = e(s).tokenCollectedPercent) == null ? void 0 : B.gt(30)) && e(s).tokenCollectedPercent.lte(60) && !e(o).isReleased,
            "is-version-3": ((V = e(s).tokenCollectedPercent) == null ? void 0 : V.gt(60)) && !e(o).isReleased,
            "is-dex": e(o).isReleased
          }, "gif"])
        }, null, 10, As)), a("img", {
          src: e(b),
          alt: "Gif",
          class: "room"
        }, null, 8, $s), v[2] || (v[2] = a("div", {
          class: "gradient"
        }, null, -1))]), a("div", Ms, [a("div", ws, [a("div", Ns, [g(f, {
          name: "animations/Fire",
          size: 28
        }), a("div", Ps, h(("t" in y ? y.t : e($))("memepad.explore.spotlight.title")), 1)]), y.list.length > 1 ? (i(), L(T, {
          key: 0,
          "model-value": e(n),
          count: y.list.length,
          timer: 15e3,
          "onUpdate:modelValue": c
        }, null, 8, ["model-value", "count"])) : P("", !0)]), a("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: v[0] || (v[0] = (...N) => e(d) && e(d)(...N)),
          onTouchmove: v[1] || (v[1] = (...N) => e(d) && e(d)(...N))
        }, [(i(!0), _(Z, null, me(t.list, (N, W) => (i(), L(M, {
          key: N.id,
          index: W,
          jetton: N,
          class: "item"
        }, null, 8, ["index", "jetton"]))), 128))], 544), (i(), L(D, {
          key: e(o).id,
          jetton: e(o),
          "move-direction": e(C),
          "market-cap": e(s).marketCap,
          "token-collected-percent": e(s).tokenCollectedPercent
        }, null, 8, ["jetton", "move-direction", "market-cap", "token-collected-percent"])), a("div", {
          class: "reactions",
          style: de({
            "--animation-duration": `${e(k)}ms`
          })
        }, [(i(!0), _(Z, null, me(e(O), N => (i(), _("img", {
          key: N.id,
          src: N.image,
          class: ee(`animation-${N.animationType}`),
          style: de({
            "--x-offset": N.position.x + "px",
            "--y-offset": N.position.y + "px"
          })
        }, null, 14, Os))), 128))], 4)])])
      }
    }
  }),
  Rs = U(Ds, [
    ["__scopeId", "data-v-098a98c9"]
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
        const n = ke;
        return i(), _("div", {
          class: ee(["memepad-jetton-image-collected-circle", {
            "is-released": t.isReleased
          }]),
          style: de({
            "--collected-percent": t.collectedPercent
          })
        }, [a("div", js, [g(n, {
          src: t.image,
          size: 48,
          class: "image"
        }, null, 8, ["src"]), t.streamOnline ? (i(), _("div", Us, "LIVE")) : P("", !0)])], 6)
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
  on = j({
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
        r = I(() => z().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: t.analyticsSource
          }
        })),
        n = I(() => {
          if (t.jetton.tokenForDex) return t.jetton.stats.tokenCollected && t.jetton.stats.tokenCollected.div(t.jetton.tokenForDex).times(100).toNumber()
        }),
        o = u => {
          const C = u.decimalPlaces();
          return Math.max(Math.min(1, C), 0)
        },
        c = I(() => Oe(t.jetton.releaseTimestamp).label),
        m = I(() => t.jetton.ownedAmount ? be(t.jetton.ownedAmount, t.jetton.ticker).frontend : "-"),
        d = I(() => t.jetton.ownedAmountUSD ? be(t.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        s = I(() => t.jetton.pnlPercent ? ft(t.jetton.pnlPercent) : void 0);
      return (u, C) => {
        const b = Bs,
          O = Q,
          k = Ee;
        return i(), L(k, {
          to: e(r),
          class: "memepad-jetton-list-item"
        }, {
          default: K(() => {
            var E;
            return [g(b, {
              image: e(Ie)(u.jetton.iconFileKey),
              "collected-percent": e(n),
              "is-released": u.jetton.isReleased,
              "stream-online": u.jetton.streamOnline
            }, null, 8, ["image", "collected-percent", "is-released", "stream-online"]), a("div", Vs, [a("div", Gs, h(u.jetton.ticker), 1), u.mode === e(X).BASE ? (i(), _("div", xs, [u.jetton.stats.holdersCount !== void 0 ? (i(), _("div", Ws, [g(O, {
              name: "personal",
              class: "icon"
            }), a("span", Fs, h(("formatCount" in u ? u.formatCount : e(q))(u.jetton.stats.holdersCount, {
              accuracy: 0
            }).full), 1)])) : P("", !0), u.jetton.stats.transactionsCount !== void 0 ? (i(), _("div", Ys, [g(O, {
              name: "transfer",
              class: "icon"
            }), a("span", Js, h(("formatCount" in u ? u.formatCount : e(q))(u.jetton.stats.transactionsCount, {
              accuracy: 0
            }).full), 1)])) : P("", !0)])) : u.mode === e(X).MY_TOKENS ? (i(), _("div", Hs, [a("div", Xs, h(e(m)), 1)])) : P("", !0)]), u.mode === e(X).BASE ? (i(), _("div", zs, [a("div", qs, [a("span", Zs, h(("t" in u ? u.t : e($))("memepad.jetton.stats.market_cap")), 1), a("span", Qs, h(u.jetton.stats.marketCap ? `$${("formatCount"in u?u.formatCount:e(q))(u.jetton.stats.marketCap,{accuracy:o(u.jetton.stats.marketCap)}).full}` : "-"), 1)]), a("div", en, [g(O, {
              name: "environment-leaf",
              class: "icon"
            }), a("span", tn, h(e(c)), 1)])])) : u.mode === e(X).MY_TOKENS ? (i(), _("div", sn, [a("div", nn, h(e(d)), 1), a("div", {
              class: ee(["pnl", e(s) && e(s).cls])
            }, h(((E = e(s)) == null ? void 0 : E.formatted) ?? "-"), 3)])) : P("", !0)]
          }),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  an = U(on, [
    ["__scopeId", "data-v-3ef550eb"]
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
        const n = an;
        return i(), L(at, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: K(() => [(i(!0), _(Z, null, me(t.items, o => (i(), L(n, {
            key: o.shortname,
            jetton: o,
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
        o = [{
          value: l.NEW,
          pingDot: !0
        }, {
          value: l.LISTINGS
        }, {
          value: l.HOT
        }, {
          value: l.BLUMING
        }, {
          value: l.DEX
        }, {
          value: l.MCAP
        }, {
          value: l.LIVE
        }, {
          value: l.MY_TOKENS
        }].map(d => {
          const s = {
            [l.NEW]: "New",
            [l.HOT]: "Hot",
            [l.LISTINGS]: "Listings",
            [l.BLUMING]: "Bluming",
            [l.DEX]: "DEX",
            [l.MCAP]: "MCap",
            [l.LIVE]: "Live",
            [l.MY_TOKENS]: "My tokens"
          };
          return {
            ...d,
            label: s[d.value]
          }
        }),
        c = I(() => {
          switch (t.value) {
            case l.NEW:
              return x.NEW;
            case l.BLUMING:
              return x.BLUMING;
            case l.HOT:
              return x.HOT;
            case l.MY_TOKENS:
              return x.POSITIONS;
            case l.MCAP:
              return x.MCAP;
            case l.LISTINGS:
              return x.LISTINGS;
            case l.DEX:
              return x.DEX
          }
        }),
        m = I(() => t.value === l.MY_TOKENS ? X.MY_TOKENS : X.BASE);
      return (d, s) => {
        const u = Q,
          C = gt,
          b = Ne,
          O = Ue,
          k = It,
          E = Et;
        return i(), _("div", cn, [a("div", rn, [g(C, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = R => t.value = R),
          items: e(o)
        }, {
          after: K(() => [a("div", dn, [a("button", {
            type: "button",
            class: "search reset",
            onClick: s[0] || (s[0] = R => d.$emit("search"))
          }, [g(u, {
            name: "search",
            class: "icon"
          })])])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (e(r).wallet.value.status === "must_reconnect" || e(r).wallet.value.status === "not_found") && t.value === e(l).MY_TOKENS ? (i(), _("div", un, [a("div", mn, h(("t" in d ? d.t : e($))("memepad.explore.my_tokens.connect_text")), 1), a("button", {
          type: "button",
          class: "reset",
          onClick: s[2] || (s[2] = R => e(n).runConnectionFlow())
        }, h(("t" in d ? d.t : e($))("wallet.connect.btn")), 1)])) : e(r).wallet.value.status === "loading" && t.value === e(l).MY_TOKENS ? (i(), _("div", pn, [g(b, {
          type: e(we).LIGHT
        }, null, 8, ["type"])])) : d.items ? (i(), L(k, {
          key: 2,
          onEnd: s[3] || (s[3] = R => d.$emit("scrolled"))
        }, {
          default: K(() => [d.items.length ? (i(), L(O, {
            key: t.value,
            items: d.items,
            "analytics-source": e(c),
            mode: e(m)
          }, null, 8, ["items", "analytics-source", "mode"])) : t.value === e(l).MY_TOKENS ? (i(), _("div", _n, [g(u, {
            name: "add-plus-circle",
            class: "icon"
          }), a("div", vn, h(("t" in d ? d.t : e($))("memepad.explore.my_tokens.empty_text")), 1)])) : P("", !0)]),
          _: 1
        })) : (i(), _(Z, {
          key: 3
        }, me(6, R => a("div", {
          key: R,
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
    ["__scopeId", "data-v-dd4309f8"]
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
      searchLine: I(() => p.value),
      data: I(() => r.value),
      isSearching: I(() => t.value)
    }
  },
  fn = {
    class: "memepad-search page"
  },
  In = {
    key: 0,
    class: "empty"
  },
  kn = j({
    __name: "Search",
    emits: ["close"],
    setup(p, {
      emit: t
    }) {
      const r = t,
        n = A(),
        o = yn();
      o._flow.init(), ae(() => o._flow.destroy());
      const c = A(!1),
        m = A(""),
        d = [];
      (() => {
        d.push(setTimeout(() => {
          c.value = !0
        }, 400))
      })(), ae(() => {
        d.forEach(b => clearTimeout(b))
      });
      const {
        debouncedFunction: u
      } = De(o.search, 600);
      return oe(m, u), ie().memepad.memepadSearchOpen(), ct().initHandler(() => r("close"), "memepad-search"), (b, O) => {
        const k = Tt,
          E = Ue;
        return i(), _("div", fn, [g(k, {
          ref_key: "searchWithTitleComponent",
          ref: n,
          modelValue: e(m),
          "onUpdate:modelValue": O[0] || (O[0] = R => fe(m) ? m.value = R : null),
          placeholder: ("t" in b ? b.t : e($))("memepad.search.input_placeholder"),
          activated: e(c),
          autofocus: "",
          "is-loading": e(o).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), e(o).data.value ? (i(), _(Z, {
          key: 0
        }, [e(o).data.value.length === 0 ? (i(), _("div", In, h(("t" in b ? b.t : e($))("memepad.search.empty_text")), 1)) : (i(), L(E, {
          key: 1,
          items: e(o).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in b ? b.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : e(x)).SEARCH
        }, null, 8, ["items", "analytics-source"]))], 64)) : P("", !0)])
      }
    }
  }),
  En = U(kn, [
    ["__scopeId", "data-v-4ec42003"]
  ]),
  Ke = (p, t, r) => {
    const n = Math.max(0, p.length - 1),
      o = A([...p].reverse()),
      c = A(n),
      m = () => {
        c.value < o.value.length - 1 && c.value++
      },
      d = I(() => {
        const E = Math.max(0, c.value - r + 1),
          R = Math.min(c.value + 1, o.value.length);
        return [...o.value].slice(E, R).reverse()
      }),
      s = I(() => [...o.value].reverse()[c.value]);
    let u;
    return {
      init: () => {
        clearInterval(u), u = Re(m, t)
      },
      destroy: () => {
        o.value = [], c.value = 0, clearInterval(u)
      },
      addItems: E => {
        o.value.push(...[...E].reverse())
      },
      setItems: E => {
        o.value = E, c.value = E.length - 1
      },
      items: I(() => o.value),
      appearedItems: d,
      currentAppearedItem: s
    }
  },
  Sn = () => {
    const p = rt(),
      t = je(),
      r = ie();
    let n;
    (S => {
      S.LIST = "list", S.STEP_LIST = "step-list", S.PAGINATION_LIST = "pagination-list"
    })(n || (n = {}));
    const o = {
        [l.NEW]: "step-list",
        [l.LIVE]: "list",
        [l.HOT]: "list",
        [l.BLUMING]: "pagination-list",
        [l.DEX]: "pagination-list",
        [l.MCAP]: "pagination-list",
        [l.MY_TOKENS]: "list",
        [l.LISTINGS]: "pagination-list"
      },
      c = async ({
        type: S,
        pageToken: y
      }) => {
        if (S === l.MY_TOKENS) {
          const D = t.wallet.value.status === "connected" ? t.wallet.value.address.default : void 0;
          if (!D) return Le({
            jettons: [],
            nextPageToken: ""
          });
          const w = await te.getMemepadJettonsPositions(D);
          return Ce(w) ? Le({
            jettons: w.data.jettons,
            nextPageToken: ""
          }) : w
        }
        const v = {
            [l.NEW]: J.CREATED_AT,
            [l.HOT]: J.HOT,
            [l.LIVE]: J.LIVE_STREAMS,
            [l.BLUMING]: J.NEAREST_TO_LISTING,
            [l.MCAP]: J.MARKET_CAP,
            [l.DEX]: J.PUBLISHED_AT,
            [l.LISTINGS]: J.IS_LISTED_ON_BLUM
          },
          f = {
            [l.NEW]: H.EXCLUDE,
            [l.HOT]: H.INCLUDE,
            [l.LIVE]: H.INCLUDE,
            [l.BLUMING]: H.INCLUDE_LISTED,
            [l.MCAP]: H.INCLUDE,
            [l.DEX]: H.ONLY,
            [l.LISTINGS]: H.INCLUDE
          },
          T = v[S],
          M = f[S];
        return await te.getMemepadJettonsSection(T, M, y)
      }, m = ce(() => l.NEW, "$SbGDXlzgsy"), d = () => {
        const S = m.value;
        switch (o[S]) {
          case "step-list":
            return {
              type: "step-list", stepList: void 0, interval: ue(async () => await c({
                type: S
              }), v => {
                var T;
                if (((T = s.value) == null ? void 0 : T.type) !== "step-list" || S !== m.value) return;
                const f = s.value.stepList;
                if (!f) s.value.stepList = Ke(v.jettons, 1e3, 60), s.value.stepList.init();
                else {
                  const M = f,
                    D = v.jettons.filter(B => !M.items.some(V => V.id === B.id)),
                    w = M.items.map(B => v.jettons.find(N => N.id === B.id) || B);
                  M.setItems(w), M.addItems(D)
                }
              }, 5e3)
            };
          case "pagination-list":
            return {
              type: "pagination-list", pagination: kt(async f => {
                const T = await c({
                  type: S,
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
                type: S
              }), v => {
                var f;
                ((f = s.value) == null ? void 0 : f.type) !== "list" || S !== m.value || (s.value.data = v.jettons)
              }, 5e3)
            };
          default:
            throw ne("Unknown type")
        }
      }, s = A(d()), u = () => {
        var S;
        if (s.value) switch (s.value.type) {
          case "list":
            s.value.interval.destroy();
            break;
          case "step-list":
            (S = s.value.stepList) == null || S.destroy(), s.value.interval.destroy();
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
    let b;
    const O = async () => {
      await C(), b = oe(m, async S => {
        u(), await C();
        const y = (() => {
          switch (S) {
            case l.NEW:
              return Y.NEW;
            case l.BLUMING:
              return Y.BLUMING;
            case l.HOT:
              return Y.HOT;
            case l.LIVE:
              return Y.LIVE;
            case l.MY_TOKENS:
              return Y.POSITIONS;
            case l.MCAP:
              return Y.MCAP;
            case l.DEX:
              return Y.DEX;
            case l.LISTINGS:
              return Y.LISTINGS
          }
        })();
        r.memepad.memepadOpenPanelListTab({
          source: y
        })
      })
    }, k = () => {
      u(), b == null || b()
    };
    p.onConnected(() => {
      m.value === l.MY_TOKENS && (u(), C())
    });
    const E = I(() => {
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
      init: O,
      destroy: k,
      onPaginationLoad: async () => {
        s.value.type === "pagination-list" && await s.value.pagination.load()
      },
      activeTab: m,
      items: E
    }
  },
  Tn = () => {
    const p = A(),
      t = I(() => {
        var m;
        return (m = p.value) == null ? void 0 : m.stepList.currentAppearedItem
      }),
      r = m => {
        p.value || (p.value = {
          stepList: Ke([], 1e3, 15)
        }, p.value.stepList.init()), p.value.stepList.addItems(m)
      },
      n = A(dt(async () => await te.getMemepadExploreEvents(), m => {
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
      eventAppearedItem: I(() => t.value)
    }
  },
  bn = () => {
    const p = A(),
      r = ue(async () => ut(await te.getMemepadExploreSpotlight()), m => p.value = m.jettons, 5e3);
    return {
      init: async () => {
        await r.exec()
      },
      destroy: () => {
        r.destroy()
      },
      getReactions: m => te.getMemepadJettonReactions(m),
      spotlight: I(() => p.value)
    }
  },
  Cn = () => {
    const p = Tn(),
      t = bn(),
      r = Sn();
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
  An = {
    class: "header"
  },
  $n = {
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
          init: o,
          destroy: c
        }
      } = Cn(), {
        addresses: m
      } = bt(), {
        launchingJettons: d
      } = mt(), {
        aiAgentStatusesNotClickedList: s,
        loadAiAgentSocialsActivateLinkAndOpen: u,
        isAiAgentStatusBannerLoading: C,
        setAiAgentStatusBannerClicked: b
      } = Ct(), O = A(!1);
      o().then(() => {
        O.value = !0
      }), ae(() => {
        c()
      });
      const k = I(() => {
          var M, D;
          const v = (M = m.value) == null ? void 0 : M.isAvailableAI,
            f = (D = s.value) == null ? void 0 : D.at(0);
          if (f && v) {
            const w = f.shortname;
            return {
              onClick: async () => {
                ie().memepad.memepadJettonAiSocialsActivate({
                  source: "main"
                }), await u(w), b(w)
              },
              title: $("memepad.ai_agent.activate_banner_label", {
                ticker: f.ticker
              }),
              loading: C(w)
            }
          }
          const T = d.value.at(0);
          if (T) return {
            onClick: () => {
              ie().memepad.memepadJettonLaunchingBannerClick({
                flowType: T.form.aiAgentEnable ? Ae.AI : Ae.REGULAR
              }), z().push({
                name: "memepad-new-launching-id",
                params: {
                  id: T.id
                }
              })
            },
            title: $("memepad.explore.launching_jetton_banner.label", {
              ticker: T.form.ticker
            }),
            loading: !1
          }
        }),
        E = A(!!pt().query.search),
        R = () => {
          z().push({
            name: "memepad-new",
            query: {
              memepadNewFrom: _t.MEMEPAD_MAIN
            }
          })
        },
        S = () => {
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
        var W;
        const T = Rt,
          M = Jt,
          D = os,
          w = Rs,
          B = gn,
          V = St,
          N = En;
        return i(), _(Z, null, [e(O) ? (i(), _("div", Ln, [e(k) ? (i(), L(T, {
          key: 0,
          title: e(k).title,
          loading: e(k).loading,
          class: "status-banner",
          onClick: e(k).onClick
        }, null, 8, ["title", "loading", "onClick"])) : P("", !0), a("div", An, [a("div", $n, h(("t" in v ? v.t : e($))("memepad.explore.title")), 1), g(M, {
          onLaunch: R
        })]), e(t).eventAppearedItem.value ? (i(), L(D, {
          key: 1,
          event: e(t).eventAppearedItem.value,
          class: "event"
        }, null, 8, ["event"])) : P("", !0), (W = e(r).items.value) != null && W.length ? (i(), L(w, {
          key: 2,
          list: e(r).items.value,
          "get-reactions": e(r).getReactions
        }, null, 8, ["list", "get-reactions"])) : P("", !0), g(B, {
          modelValue: e(n).activeTab.value,
          "onUpdate:modelValue": f[0] || (f[0] = pe => e(n).activeTab.value = pe),
          items: e(n).items.value,
          onSearch: S,
          onScrolled: e(n).onPaginationLoad
        }, null, 8, ["modelValue", "items", "onScrolled"])])) : (i(), L(V, {
          key: 1
        })), e(E) ? (i(), L(N, {
          key: 2,
          onClose: y
        })) : P("", !0)], 64)
      }
    }
  }),
  wn = U(Mn, [
    ["__scopeId", "data-v-d675e6d0"]
  ]),
  Nn = {
    class: "memepad-index page"
  },
  Me = "memepad-intro",
  Pn = j({
    __name: "index",
    setup(p) {
      const {
        $webApp: t
      } = ye(), r = A(t.storage.local.get(Me) ? "explore" : "intro"), n = () => {
        r.value = "explore", t.storage.local.set(Me, "true")
      };
      return ie().memepad.memepadExploreOpen(), (c, m) => {
        const d = He,
          s = Nt,
          u = wn;
        return i(), _("div", Nn, [g(d), e(r) === "intro" ? (i(), L(s, {
          key: 0,
          onStart: n
        })) : e(r) === "explore" ? (i(), L(u, {
          key: 1
        })) : P("", !0)])
      }
    }
  }),
  Hn = U(Pn, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  Hn as
  default
};