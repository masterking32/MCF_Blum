import {
  _ as Ge
} from "./CDN2jbrK.js";
import {
  d as O,
  o as i,
  c as _,
  a as o,
  b as v,
  t as h,
  e,
  z as L,
  H as K,
  ad as ve,
  f as j,
  an as ce,
  h as he,
  ao as Le,
  K as $,
  j as E,
  G as C,
  D as A,
  p as ye,
  U as Je,
  _ as ee,
  x as We,
  aN as qe,
  m as ze,
  F as W,
  ac as X,
  aO as x,
  aP as Ae,
  aQ as Xe,
  aR as Qe,
  aS as Ze,
  aT as ge,
  n as Q,
  aU as fe,
  I as Ee,
  aV as J,
  ax as re,
  a9 as Te,
  Y as et,
  R as pe,
  aF as ae,
  am as se,
  T as oe,
  Q as de,
  q as ue,
  ab as we,
  aC as Pe,
  ak as tt,
  aW as st,
  a5 as _e,
  aX as G,
  E as Me,
  aY as nt,
  P as Ne,
  aq as at,
  aZ as d,
  a_ as ot,
  a$ as lt,
  b0 as ie,
  b1 as it,
  W as Z,
  $ as Se,
  O as ct,
  b2 as rt,
  V as ne,
  b3 as dt,
  a1 as be,
  b4 as Y,
  a0 as ut,
  X as ke,
  b5 as q,
  b6 as z,
  b7 as mt,
  au as pt
} from "./FDgdEClw.js";
import {
  _ as _t
} from "./BWh4cXL2.js";
import {
  _ as vt,
  a as ht
} from "./Br8WqOxr.js";
import {
  _ as yt
} from "./Bs71aAOP.js";
import {
  g as gt
} from "./pHnujUK5.js";
import {
  _ as ft,
  u as Et
} from "./BRvgsKZ2.js";
import {
  _ as St
} from "./DFinPKjs.js";
import {
  _ as It
} from "./D9O4ECeF.js";
import {
  _ as Tt
} from "./cnqFhO-q.js";
import {
  u as Re
} from "./Da6s1hgR.js";
import "./K-CzMkFT.js";
import "./SjVXvVcn.js";
const Mt = {
    class: "memepad-intro"
  },
  bt = {
    class: "content"
  },
  kt = {
    class: "title"
  },
  $t = {
    class: "note"
  },
  Ct = O({
    __name: "Intro",
    emits: ["start"],
    setup(p) {
      return (t, r) => {
        const n = ve,
          a = _t;
        return i(), _("div", Mt, [o("div", bt, [v(n, {
          name: "animations/Moon",
          class: "background"
        }), o("div", kt, h(("t" in t ? t.t : e(L))("memepad.intro.title")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: r[0] || (r[0] = c => t.$emit("start"))
        }, h(("t" in t ? t.t : e(L))("memepad.intro.button_text")), 1)]), v(a, {
          "no-background": ""
        }, {
          default: K(() => [o("div", $t, h(("t" in t ? t.t : e(L))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  Lt = j(Ct, [
    ["__scopeId", "data-v-2da05feb"]
  ]),
  At = {
    class: "memepad-sheet"
  },
  wt = {
    class: "title"
  },
  Pt = {
    class: "subtitle"
  },
  Nt = {
    class: "label"
  },
  Rt = {
    class: "actions"
  },
  Dt = {
    key: 0,
    class: "dont-show"
  },
  Ot = {
    class: "checkbox"
  },
  jt = O({
    __name: "Sheet",
    props: ce({
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
    emits: ce(["close", "readMoreClick"], ["update:modelValue"]),
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: r
      } = he(), n = p, a = t, c = Le(p, "modelValue"), m = $(!n.dontShowStorageKey), l = $(!1), s = E({
        get: () => c.value && m.value,
        set: S => {
          c.value = S, l.value && n.dontShowStorageKey && r.storage.local.set(n.dontShowStorageKey, "true")
        }
      });
      (() => {
        n.dontShowStorageKey && (m.value = !r.storage.local.get(n.dontShowStorageKey))
      })();
      const I = () => a("readMoreClick"),
        w = () => {
          s.value = !1, a("close", {
            source: "modal"
          })
        },
        M = () => {
          s.value = !1, a("close", {
            source: "button"
          })
        };
      return (S, T) => {
        const N = ve,
          f = ee,
          g = vt,
          y = We,
          b = qe;
        return i(), C(b, {
          "model-value": e(s),
          "onUpdate:modelValue": w
        }, {
          default: K(() => [o("div", At, [v(N, {
            name: S.lottie,
            size: 116
          }, null, 8, ["name"]), o("div", wt, h(S.title), 1), o("div", null, [o("div", Pt, h(S.subtitle), 1), S.hideReadMore ? A("", !0) : (i(), _("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: I
          }, [o("span", Nt, h(("t" in S ? S.t : e(L))("base.read_more")), 1), v(f, {
            name: "arrow-right",
            class: "icon"
          })]))]), o("div", Rt, [S.dontShowStorageKey ? (i(), _("div", Dt, [o("div", Ot, [v(g, {
            modelValue: e(l),
            "onUpdate:modelValue": T[0] || (T[0] = k => ye(l) ? l.value = k : null)
          }, null, 8, ["modelValue"]), o("span", {
            class: "label",
            onClick: T[1] || (T[1] = k => l.value = !e(l))
          }, h(("t" in S ? S.t : e(L))("memepad.sheet.dont_show_again_label")), 1)])])) : A("", !0), v(y, {
            label: S.buttonText,
            fill: "",
            size: e(Je).LARGE,
            onClick: M
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  Ut = j(jt, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  $e = "memepad-launch-jetton",
  Kt = O({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: r
      } = he(), n = t, a = $(!1), c = $(r.storage.local.get($e) ? "watched" : "unwatched"), m = () => {
        c.value === "watched" ? n("launch") : a.value = !0
      }, l = () => {
        r.storage.local.set($e, "true"), n("launch")
      };
      return (s, u) => {
        const I = Ut;
        return i(), _(W, null, [o("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: m
        }, [u[1] || (u[1] = o("i", {
          class: "seedling"
        }, null, -1)), ze(" " + h(("t" in s ? s.t : e(L))("memepad.explore.launch.button_text")), 1)]), v(I, {
          modelValue: e(a),
          "onUpdate:modelValue": u[0] || (u[0] = w => ye(a) ? a.value = w : null),
          title: ("t" in s ? s.t : e(L))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in s ? s.t : e(L))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in s ? s.t : e(L))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: l
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  Bt = j(Kt, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  Vt = ["src"],
  Ft = {
    key: 1,
    class: "user-avatar-empty"
  },
  Ht = {
    class: "text"
  },
  xt = {
    key: 0,
    class: "user-name"
  },
  Yt = {
    key: 1,
    class: "user-address"
  },
  Gt = {
    class: "action"
  },
  Jt = {
    class: "amount"
  },
  Wt = {
    class: "ticker"
  },
  qt = {
    class: "seconds"
  },
  zt = O({
    __name: "Event",
    props: {
      event: {}
    },
    setup(p) {
      const t = p,
        r = E(() => L(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        n = E(() => X().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.event.shortname
          },
          query: {
            from: x.ACTIONBAR
          }
        })),
        a = E(() => {
          const c = Ae(t.event.timestamp);
          return c.isDate ? c.label : `${c.label} ago`
        });
      return (c, m) => {
        const l = ee,
          s = Xe("I18nT"),
          u = fe,
          I = Ee;
        return i(), C(I, {
          to: e(n),
          class: Q(["memepad-explore-event", `is-${c.event.type.toLowerCase()}`])
        }, {
          default: K(() => [c.event.user.avatarUrl ? (i(), _("img", {
            key: 0,
            src: c.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, Vt)) : (i(), _("div", Ft, [v(l, {
            name: "space-invader",
            class: "icon"
          })])), o("div", Ht, [c.event.user.nickname ? (i(), _("span", xt, h(c.event.user.nickname), 1)) : (i(), _("span", Yt, h(("sliceWalletAddress" in c ? c.sliceWalletAddress : e(Qe))(c.event.user.address)), 1)), o("span", Gt, h(e(r)), 1), c.event.amount ? (i(), C(s, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: K(() => [o("span", Jt, h(`${("formatTon"in c?c.formatTon:e(Ze))(c.event.amount)} TON`), 1)]),
            _: 1
          })) : A("", !0)]), v(u, {
            src: e(ge)(c.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), o("span", Wt, h(c.event.ticker), 1), o("span", qt, h(e(a)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  Xt = j(zt, [
    ["__scopeId", "data-v-9a23721a"]
  ]),
  Qt = {
    class: "ticker"
  },
  Zt = {
    key: 0,
    class: "live"
  },
  es = {
    class: "label"
  },
  ts = {
    key: 1,
    class: "stats"
  },
  ss = {
    class: "holders-count"
  },
  ns = {
    class: "text"
  },
  as = {
    class: "transactions-count"
  },
  os = {
    class: "text"
  },
  ls = O({
    __name: "Card",
    props: {
      jetton: {},
      bclData: {},
      index: {}
    },
    setup(p) {
      const t = p,
        r = E(() => X().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: `spotlight-${t.index+1}`
          }
        }));
      return (n, a) => {
        const c = fe,
          m = ee,
          l = Ee;
        return i(), C(l, {
          to: e(r),
          class: "memepad-explore-spotlight-card"
        }, {
          default: K(() => [v(c, {
            src: e(ge)(n.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), o("span", Qt, h(n.jetton.ticker), 1), n.jetton.streamOnline ? (i(), _("div", Zt, [a[0] || (a[0] = o("div", {
            class: "dot"
          }, null, -1)), o("div", es, h(("t" in n ? n.t : e(L))("memepad.explore.spotlight.live")), 1)])) : (i(), _("div", ts, [o("div", ss, [v(m, {
            name: "personal",
            class: "icon"
          }), o("span", ns, h(n.jetton.stats.holdersCount ? ("formatCount" in n ? n.formatCount : e(J))(n.jetton.stats.holdersCount, {
            accuracy: 0
          }).full : "-"), 1)]), o("div", as, [v(m, {
            name: "transfer",
            class: "icon"
          }), o("span", os, h(n.jetton.stats.transactionsCount ? ("formatCount" in n ? n.formatCount : e(J))(n.jetton.stats.transactionsCount, {
            accuracy: 0
          }).full : "-"), 1)])]))]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  is = j(ls, [
    ["__scopeId", "data-v-02ab3686"]
  ]),
  cs = {
    class: "inner"
  },
  rs = {
    class: "left"
  },
  ds = {
    class: "mc"
  },
  us = {
    key: 0,
    class: "diff"
  },
  ms = {
    key: 1,
    class: "percent"
  },
  ps = {
    class: "progress"
  },
  _s = {
    class: "direction-wrapper"
  },
  vs = {
    key: 0,
    class: "direction up"
  },
  hs = {
    key: 0,
    class: "direction down"
  },
  ys = O({
    __name: "Progress",
    props: {
      jetton: {},
      bclData: {},
      moveDirection: {},
      marketCap: {},
      tonCollectedPercent: {}
    },
    setup(p) {
      return (t, r) => {
        var a;
        const n = ee;
        return i(), _("div", {
          class: Q(["memepad-explore-spotlight-progress", [t.moveDirection && `is-${(a=t.moveDirection)==null?void 0:a.direction}`, {
            "is-released": t.jetton.isReleased
          }]])
        }, [o("div", cs, [o("div", rs, [o("span", ds, h(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (i(), _("span", us, h(t.moveDirection.diffFormatted), 1)) : A("", !0)]), t.jetton.isReleased ? (i(), C(n, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (i(), _("span", ms, h(t.tonCollectedPercent ?? "-") + "% ", 1))]), o("div", ps, [o("div", {
          class: "line",
          style: re({
            width: `${t.tonCollectedPercent}%`
          })
        }, [o("div", _s, [v(Te, {
          name: "direction-opacity"
        }, {
          default: K(() => {
            var c;
            return [((c = t.moveDirection) == null ? void 0 : c.direction) === "up" ? (i(), _("div", vs, [v(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : A("", !0)]
          }),
          _: 1
        }), v(Te, {
          name: "direction-opacity"
        }, {
          default: K(() => {
            var c;
            return [((c = t.moveDirection) == null ? void 0 : c.direction) === "down" ? (i(), _("div", hs, [v(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : A("", !0)]
          }),
          _: 1
        })])], 4)])], 2)
      }
    }
  }),
  gs = j(ys, [
    ["__scopeId", "data-v-cefc26d8"]
  ]),
  fs = {
    class: "memepad-explore-spotlight"
  },
  Es = {
    class: "bg"
  },
  Ss = ["src"],
  Is = ["src"],
  Ts = {
    class: "content"
  },
  Ms = {
    class: "header"
  },
  bs = {
    class: "logo"
  },
  ks = {
    class: "title"
  },
  $s = ["src"],
  Cs = O({
    __name: "Spotlight",
    props: {
      list: {},
      bclData: {},
      getReactions: {
        type: Function
      }
    },
    setup(p) {
      const t = p,
        r = et(),
        n = $(0),
        a = E(() => t.list[n.value]),
        c = g => {
          var y;
          (y = m.value) == null || y.scrollTo({
            left: g * window.innerWidth + (n.value > g ? -1 : 1),
            behavior: "smooth"
          })
        },
        m = $(null),
        l = we(() => {
          if (!m.value) return;
          const g = m.value.children[0].offsetWidth + 10,
            y = m.value.scrollLeft,
            b = Math.round(y / g);
          n.value = b
        }, 50).debouncedFunction,
        s = E(() => {
          const g = (() => {
              if (!(!a.value.stats.tonCollected || !t.bclData)) return new pe(a.value.stats.tonCollected.div(t.bclData.tonForDex).times(100).toFixed(0, pe.ROUND_DOWN))
            })(),
            y = a.value.stats.marketCap && J(a.value.stats.marketCap);
          return {
            id: a.value.id,
            shortname: a.value.shortname,
            tonCollectedPercent: g,
            marketCap: y
          }
        }),
        u = [],
        I = $();
      ae(s, (g, y) => {
        if (!g.marketCap || !y.marketCap || g.marketCap.full === y.marketCap.full || g.id !== y.id) {
          I.value = void 0;
          return
        }
        const b = g.marketCap.raw.minus(y.marketCap.raw),
          k = b.lt(0),
          R = J(b.abs(), {
            accuracy: 0
          }).full;
        R !== "0" && (I.value = {
          direction: k ? "down" : "up",
          diffFormatted: `${k?"-":"+"}${R}`
        }, u.push(setTimeout(() => I.value = void 0, 3e3)))
      });
      const w = E(() => {
          var g, y;
          return ((g = I.value) == null ? void 0 : g.direction) === "down" ? se("memepad/spotlight-room-down", "svg") : ((y = I.value) == null ? void 0 : y.direction) === "up" ? se("memepad/spotlight-room-up", "svg") : se("memepad/spotlight-room", "svg")
        }),
        {
          reactionsAnimations: M,
          ANIMATION_DURATION: S,
          restart: T
        } = f();
      ae(n, T, {
        immediate: !0
      }), oe(() => {
        u.forEach(clearTimeout)
      });
      const N = E(() => a.value.isReleased ? se("memepad/dex-bg", "gif") : se("memepad/bg", "gif"));

      function f() {
        let b = 0;
        const k = [];
        let R;
        const U = $(),
          D = $([]),
          F = de(async () => await t.getReactions(s.value.shortname), le => {
            if (!U.value) {
              U.value = le;
              return
            }
            const {
              user: $n,
              ...Ue
            } = U.value;
            U.value = le;
            const {
              user: Cn,
              ...Ke
            } = U.value, Ie = Object.entries(Ke).reduce((B, [H, me]) => {
              const He = Ue[H],
                xe = me,
                Ye = pe.max(xe.minus(He), 0).toNumber();
              return {
                ...B,
                [H]: Ye
              }
            }, {}), Be = 5e3 / Object.values(Ie).reduce((B, H) => B + H, 0), Ve = b, Fe = B => ({
              id: tt(),
              image: st(B),
              position: {
                x: _e(0, 20) - 10,
                y: _e(0, 20) - 10
              },
              animationType: _e(1, 2),
              createdAt: Date.now()
            });
            Object.entries(Ie).reduce((B, [H, me]) => B.concat(Array(me).fill(H)), []).sort(() => Math.random() - .5).forEach((B, H) => {
              k.push(setTimeout(() => {
                Ve === b && D.value.push(Fe(B))
              }, Be * H))
            })
          }, 5e3),
          P = async () => {
            await F.exec(), R = Pe(() => {
              D.value = D.value.filter(le => Date.now() - le.createdAt < 6e3)
            }, 2e3)
          }, te = () => {
            F.destroy(), k.forEach(clearTimeout), R && clearInterval(R), U.value = void 0, D.value = []
          };
        ae(() => s.value.shortname, () => {
          b++, k.forEach(clearTimeout), te(), P()
        }), P(), oe(te);
        const je = () => {
          te(), P()
        };
        return {
          reactionsAnimations: E(() => D.value),
          ANIMATION_DURATION: 6e3,
          restart: je
        }
      }
      return (g, y) => {
        var D, V, F;
        const b = ve,
          k = yt,
          R = is,
          U = gs;
        return i(), _("div", fs, [o("div", Es, [e(r).isLowEndDevice.value ? A("", !0) : (i(), _("img", {
          key: 0,
          src: e(N),
          alt: "Gif",
          class: Q([{
            "is-version-1": ((D = e(s).tonCollectedPercent) == null ? void 0 : D.lte(30)) && !e(a).isReleased,
            "is-version-2": ((V = e(s).tonCollectedPercent) == null ? void 0 : V.gt(30)) && e(s).tonCollectedPercent.lte(60) && !e(a).isReleased,
            "is-version-3": ((F = e(s).tonCollectedPercent) == null ? void 0 : F.gt(60)) && !e(a).isReleased,
            "is-dex": e(a).isReleased
          }, "gif"])
        }, null, 10, Ss)), o("img", {
          src: e(w),
          alt: "Gif",
          class: "room"
        }, null, 8, Is), y[2] || (y[2] = o("div", {
          class: "gradient"
        }, null, -1))]), o("div", Ts, [o("div", Ms, [o("div", bs, [v(b, {
          name: "animations/Fire",
          size: 28
        }), o("div", ks, h(("t" in g ? g.t : e(L))("memepad.explore.spotlight.title")), 1)]), g.list.length > 1 ? (i(), C(k, {
          key: 0,
          "model-value": e(n),
          count: g.list.length,
          timer: 15e3,
          "onUpdate:modelValue": c
        }, null, 8, ["model-value", "count"])) : A("", !0)]), o("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: y[0] || (y[0] = (...P) => e(l) && e(l)(...P)),
          onTouchmove: y[1] || (y[1] = (...P) => e(l) && e(l)(...P))
        }, [(i(!0), _(W, null, ue(t.list, (P, te) => (i(), C(R, {
          key: P.id,
          index: te,
          jetton: P,
          class: "item",
          "bcl-data": t.bclData
        }, null, 8, ["index", "jetton", "bcl-data"]))), 128))], 544), (i(), C(U, {
          key: e(a).id,
          jetton: e(a),
          "bcl-data": t.bclData,
          "move-direction": e(I),
          "market-cap": e(s).marketCap,
          "ton-collected-percent": e(s).tonCollectedPercent
        }, null, 8, ["jetton", "bcl-data", "move-direction", "market-cap", "ton-collected-percent"])), o("div", {
          class: "reactions",
          style: re({
            "--animation-duration": `${e(S)}ms`
          })
        }, [(i(!0), _(W, null, ue(e(M), P => (i(), _("img", {
          key: P.id,
          src: P.image,
          class: Q(`animation-${P.animationType}`),
          style: re({
            "--x-offset": P.position.x + "px",
            "--y-offset": P.position.y + "px"
          })
        }, null, 14, $s))), 128))], 4)])])
      }
    }
  }),
  Ls = j(Cs, [
    ["__scopeId", "data-v-3501d280"]
  ]),
  As = {
    class: "inner"
  },
  ws = {
    key: 0,
    class: "live"
  },
  Ps = O({
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
        const n = fe;
        return i(), _("div", {
          class: Q(["memepad-jetton-image-collected-circle", {
            "is-released": t.isReleased
          }]),
          style: re({
            "--collected-percent": t.collectedPercent
          })
        }, [o("div", As, [v(n, {
          src: t.image,
          size: 48,
          class: "image"
        }, null, 8, ["src"]), t.streamOnline ? (i(), _("div", ws, "LIVE")) : A("", !0)])], 6)
      }
    }
  }),
  Ns = j(Ps, [
    ["__scopeId", "data-v-abe4cfd5"]
  ]),
  Rs = {
    class: "center"
  },
  Ds = {
    class: "ticker"
  },
  Os = {
    key: 0,
    class: "base-stats"
  },
  js = {
    key: 0,
    class: "holders-count"
  },
  Us = {
    class: "text"
  },
  Ks = {
    key: 1,
    class: "transactions-count"
  },
  Bs = {
    class: "text"
  },
  Vs = {
    key: 1,
    class: "my-tokens-stats"
  },
  Fs = {
    class: "jettons"
  },
  Hs = {
    key: 0,
    class: "base-values"
  },
  xs = {
    class: "market-cap"
  },
  Ys = {
    class: "label"
  },
  Gs = {
    class: "value"
  },
  Js = {
    class: "lifetime"
  },
  Ws = {
    class: "text"
  },
  qs = {
    key: 1,
    class: "my-tokens-values"
  },
  zs = {
    class: "fiat"
  },
  Xs = O({
    __name: "ListItem",
    props: {
      jetton: {},
      analyticsSource: {
        default: void 0
      },
      bclData: {
        default: void 0
      },
      mode: {
        default: G.BASE
      }
    },
    setup(p) {
      const t = p,
        r = E(() => X().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: t.analyticsSource
          }
        })),
        n = E(() => t.jetton.stats.tonCollected && t.bclData && t.jetton.stats.tonCollected.div(t.bclData.tonForDex).times(100).toNumber()),
        a = u => {
          const I = u.decimalPlaces();
          return Math.max(Math.min(1, I), 0)
        },
        c = E(() => Ae(t.jetton.releaseTimestamp).label),
        m = E(() => t.jetton.ownedAmount ? Me(t.jetton.ownedAmount, t.jetton.ticker).frontend : "-"),
        l = E(() => t.jetton.ownedAmountUSD ? Me(t.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        s = E(() => t.jetton.pnlPercent ? gt(t.jetton.pnlPercent) : void 0);
      return (u, I) => {
        const w = Ns,
          M = ee,
          S = Ee;
        return i(), C(S, {
          to: e(r),
          class: "memepad-jetton-list-item"
        }, {
          default: K(() => {
            var T;
            return [v(w, {
              image: e(ge)(u.jetton.iconFileKey),
              "collected-percent": e(n),
              "is-released": u.jetton.isReleased,
              "stream-online": u.jetton.streamOnline
            }, null, 8, ["image", "collected-percent", "is-released", "stream-online"]), o("div", Rs, [o("div", Ds, h(u.jetton.ticker), 1), u.mode === e(G).BASE ? (i(), _("div", Os, [u.jetton.stats.holdersCount !== void 0 ? (i(), _("div", js, [v(M, {
              name: "personal",
              class: "icon"
            }), o("span", Us, h(("formatCount" in u ? u.formatCount : e(J))(u.jetton.stats.holdersCount, {
              accuracy: 0
            }).full), 1)])) : A("", !0), u.jetton.stats.transactionsCount !== void 0 ? (i(), _("div", Ks, [v(M, {
              name: "transfer",
              class: "icon"
            }), o("span", Bs, h(("formatCount" in u ? u.formatCount : e(J))(u.jetton.stats.transactionsCount, {
              accuracy: 0
            }).full), 1)])) : A("", !0)])) : u.mode === e(G).MY_TOKENS ? (i(), _("div", Vs, [o("div", Fs, h(e(m)), 1)])) : A("", !0)]), u.mode === e(G).BASE ? (i(), _("div", Hs, [o("div", xs, [o("span", Ys, h(("t" in u ? u.t : e(L))("memepad.jetton.stats.market_cap")), 1), o("span", Gs, h(u.jetton.stats.marketCap ? `$${("formatCount"in u?u.formatCount:e(J))(u.jetton.stats.marketCap,{accuracy:a(u.jetton.stats.marketCap)}).full}` : "-"), 1)]), o("div", Js, [v(M, {
              name: "environment-leaf",
              class: "icon"
            }), o("span", Ws, h(e(c)), 1)])])) : u.mode === e(G).MY_TOKENS ? (i(), _("div", qs, [o("div", zs, h(e(l)), 1), o("div", {
              class: Q(["pnl", e(s) && e(s).cls])
            }, h(((T = e(s)) == null ? void 0 : T.formatted) ?? "-"), 3)])) : A("", !0)]
          }),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  Qs = j(Xs, [
    ["__scopeId", "data-v-557ac54f"]
  ]),
  Zs = O({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      bclData: {},
      mode: {}
    },
    setup(p) {
      return (t, r) => {
        const n = Qs;
        return i(), C(nt, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: K(() => [(i(!0), _(W, null, ue(t.items, a => (i(), C(n, {
            key: a.shortname,
            jetton: a,
            "analytics-source": t.analyticsSource,
            "bcl-data": t.bclData,
            mode: t.mode
          }, null, 8, ["jetton", "analytics-source", "bcl-data", "mode"]))), 128))]),
          _: 1
        })
      }
    }
  }),
  De = j(Zs, [
    ["__scopeId", "data-v-e4070fed"]
  ]),
  en = {
    class: "memepad-explore-panel-list"
  },
  tn = {
    class: "top"
  },
  sn = {
    class: "search-btn-wrapper"
  },
  nn = {
    key: 0,
    class: "connect"
  },
  an = {
    class: "label"
  },
  on = {
    key: 1,
    class: "connect"
  },
  ln = {
    key: 1,
    class: "empty-state"
  },
  cn = {
    class: "label"
  },
  rn = O({
    __name: "PanelList",
    props: ce({
      items: {},
      bclData: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ce(["search", "scrolled"], ["update:modelValue"]),
    setup(p) {
      const t = Le(p, "modelValue"),
        r = Ne(),
        n = at(),
        a = [{
          value: d.FRESH,
          pingDot: !0
        }, {
          value: d.LIVE_STREAMS
        }, {
          value: d.HOT
        }, {
          value: d.BLUMING
        }, {
          value: d.BLUMED
        }, {
          value: d.MCAP
        }, {
          value: d.MY_TOKENS
        }].map(l => {
          const s = {
            [d.FRESH]: "New",
            [d.LIVE_STREAMS]: "Live",
            [d.HOT]: "Hot",
            [d.BLUMING]: "Bluming",
            [d.BLUMED]: "Listed",
            [d.MCAP]: "MCap",
            [d.MY_TOKENS]: "My tokens"
          };
          return {
            ...l,
            label: s[l.value]
          }
        }),
        c = E(() => {
          switch (t.value) {
            case d.FRESH:
              return x.FRESH;
            case d.BLUMING:
              return x.BLUMING;
            case d.HOT:
              return x.HOT;
            case d.MY_TOKENS:
              return x.POSITIONS;
            case d.MCAP:
              return x.MCAP;
            case d.BLUMED:
              return x.BLUMED
          }
        }),
        m = E(() => t.value === d.MY_TOKENS ? G.MY_TOKENS : G.BASE);
      return (l, s) => {
        const u = ee,
          I = ht,
          w = lt,
          M = De,
          S = ft,
          T = St;
        return i(), _("div", en, [o("div", tn, [v(I, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = N => t.value = N),
          items: e(a)
        }, {
          after: K(() => [o("div", sn, [o("button", {
            type: "button",
            class: "search reset",
            onClick: s[0] || (s[0] = N => l.$emit("search"))
          }, [v(u, {
            name: "search",
            class: "icon"
          })])])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (e(r).wallet.value.status === "must_reconnect" || e(r).wallet.value.status === "not_found") && t.value === e(d).MY_TOKENS ? (i(), _("div", nn, [o("div", an, h(("t" in l ? l.t : e(L))("memepad.explore.my_tokens.connect_text")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: s[2] || (s[2] = N => e(n).runConnectionFlow())
        }, h(("t" in l ? l.t : e(L))("wallet.connect.btn")), 1)])) : e(r).wallet.value.status === "loading" && t.value === e(d).MY_TOKENS ? (i(), _("div", on, [v(w, {
          type: e(ot).LIGHT
        }, null, 8, ["type"])])) : l.items ? (i(), C(S, {
          key: 2,
          onEnd: s[3] || (s[3] = N => l.$emit("scrolled"))
        }, {
          default: K(() => [l.items.length ? (i(), C(M, {
            key: t.value,
            items: l.items,
            "analytics-source": e(c),
            "bcl-data": l.bclData,
            mode: e(m)
          }, null, 8, ["items", "analytics-source", "bcl-data", "mode"])) : t.value === e(d).MY_TOKENS ? (i(), _("div", ln, [v(u, {
            name: "add-plus-circle",
            class: "icon"
          }), o("div", cn, h(("t" in l ? l.t : e(L))("memepad.explore.my_tokens.empty_text")), 1)])) : A("", !0)]),
          _: 1
        })) : (i(), _(W, {
          key: 3
        }, ue(6, N => o("div", {
          key: N,
          class: "skeleton"
        }, [v(T, {
          class: "image"
        }), v(T, {
          class: "ticker"
        }), v(T, {
          class: "stats"
        })])), 64))])
      }
    }
  }),
  dn = j(rn, [
    ["__scopeId", "data-v-81e6e4f2"]
  ]),
  un = () => {
    const p = ie(() => "", "$nnokZ0cAmU"),
      t = ie(() => !1, "$dxYpAQPdtd"),
      r = ie("$pDWqkemNGG"),
      n = it(async l => (t.value = !0, {
        res: await Z.getMemepadSearch(l),
        search: l
      }), ({
        res: l,
        search: s
      }) => {
        t.value = !1, p.value = s, r.value = l.err ? void 0 : l.data
      });
    return {
      _flow: {
        init: () => {},
        destroy: () => {
          p.value = "", t.value = !1, r.value = void 0
        }
      },
      search: l => {
        l !== p.value && (l === "" ? (t.value = !1, r.value = void 0, p.value = "") : n(l))
      },
      searchLine: E(() => p.value),
      data: E(() => r.value),
      isSearching: E(() => t.value)
    }
  },
  mn = {
    class: "memepad-search page"
  },
  pn = {
    key: 0,
    class: "empty"
  },
  _n = O({
    __name: "Search",
    emits: ["close"],
    setup(p, {
      emit: t
    }) {
      const r = t,
        n = $(),
        a = un();
      a._flow.init(), oe(() => a._flow.destroy());
      const {
        bclData: c
      } = Re(), m = $(!1), l = $(""), s = [];
      (() => {
        s.push(setTimeout(() => {
          m.value = !0
        }, 400))
      })(), oe(() => {
        s.forEach(M => clearTimeout(M))
      });
      const {
        debouncedFunction: I
      } = we(a.search, 600);
      return ae(l, I), Se().memepad.memepadSearchOpen(), ct().initHandler(() => r("close"), "memepad-search"), (M, S) => {
        const T = Tt,
          N = De;
        return i(), _("div", mn, [v(T, {
          ref_key: "searchWithTitleComponent",
          ref: n,
          modelValue: e(l),
          "onUpdate:modelValue": S[0] || (S[0] = f => ye(l) ? l.value = f : null),
          placeholder: ("t" in M ? M.t : e(L))("memepad.search.input_placeholder"),
          activated: e(m),
          autofocus: "",
          "is-loading": e(a).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), e(a).data.value ? (i(), _(W, {
          key: 0
        }, [e(a).data.value.length === 0 ? (i(), _("div", pn, h(("t" in M ? M.t : e(L))("memepad.search.empty_text")), 1)) : (i(), C(N, {
          key: 1,
          items: e(a).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in M ? M.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : e(x)).SEARCH,
          "bcl-data": e(c)
        }, null, 8, ["items", "analytics-source", "bcl-data"]))], 64)) : A("", !0)])
      }
    }
  }),
  vn = j(_n, [
    ["__scopeId", "data-v-48583317"]
  ]),
  Oe = (p, t, r) => {
    const n = Math.max(0, p.length - 1),
      a = $([...p].reverse()),
      c = $(n),
      m = () => {
        c.value < a.value.length - 1 && c.value++
      },
      l = E(() => {
        const T = Math.max(0, c.value - r + 1),
          N = Math.min(c.value + 1, a.value.length);
        return [...a.value].slice(T, N).reverse()
      }),
      s = E(() => [...a.value].reverse()[c.value]);
    let u;
    return {
      init: () => {
        clearInterval(u), u = Pe(m, t)
      },
      destroy: () => {
        a.value = [], c.value = 0, clearInterval(u)
      },
      addItems: T => {
        a.value.push(...[...T].reverse())
      },
      setItems: T => {
        a.value = T, c.value = T.length - 1
      },
      items: E(() => a.value),
      appearedItems: l,
      currentAppearedItem: s
    }
  },
  hn = () => {
    const p = rt(),
      t = Ne(),
      r = Se();
    let n;
    (f => {
      f.LIST = "list", f.STEP_LIST = "step-list", f.PAGINATION_LIST = "pagination-list"
    })(n || (n = {}));
    const a = {
        [d.FRESH]: "step-list",
        [d.LIVE_STREAMS]: "list",
        [d.HOT]: "list",
        [d.BLUMING]: "pagination-list",
        [d.BLUMED]: "pagination-list",
        [d.MCAP]: "pagination-list",
        [d.MY_TOKENS]: "list"
      },
      c = async ({
        type: f,
        pageToken: g
      }) => {
        if (f === d.MY_TOKENS) {
          const U = t.wallet.value.status === "connected" ? t.wallet.value.address.default : void 0;
          if (!U) return ke({
            jettons: [],
            nextPageToken: ""
          });
          const D = await Z.getMemepadJettonsPositions(U);
          return be(D) ? ke({
            jettons: D.data.jettons,
            nextPageToken: ""
          }) : D
        }
        const y = {
            [d.FRESH]: q.CREATED_AT,
            [d.HOT]: q.HOT,
            [d.LIVE_STREAMS]: q.LIVE_STREAMS,
            [d.BLUMING]: q.NEAREST_TO_LISTING,
            [d.MCAP]: q.MARKET_CAP,
            [d.BLUMED]: q.PUBLISHED_AT
          },
          b = {
            [d.FRESH]: z.EXCLUDE,
            [d.HOT]: z.INCLUDE,
            [d.LIVE_STREAMS]: z.INCLUDE,
            [d.BLUMING]: z.INCLUDE_LISTED,
            [d.MCAP]: z.INCLUDE,
            [d.BLUMED]: z.ONLY
          },
          k = y[f],
          R = b[f];
        return await Z.getMemepadJettonsSection(k, R, g)
      }, m = ie(() => d.FRESH, "$SbGDXlzgsy"), l = () => {
        const f = m.value;
        switch (a[f]) {
          case "step-list":
            return {
              type: "step-list", stepList: void 0, interval: de(async () => await c({
                type: f
              }), y => {
                var k;
                if (((k = s.value) == null ? void 0 : k.type) !== "step-list" || f !== m.value) return;
                const b = s.value.stepList;
                if (!b) s.value.stepList = Oe(y.jettons, 1e3, 60), s.value.stepList.init();
                else {
                  const R = b,
                    U = y.jettons.filter(V => !R.items.some(F => F.id === V.id)),
                    D = R.items.map(V => y.jettons.find(P => P.id === V.id) || V);
                  R.setItems(D), R.addItems(U)
                }
              }, 5e3)
            };
          case "pagination-list":
            return {
              type: "pagination-list", pagination: Et(async b => {
                const k = await c({
                  type: f,
                  pageToken: b
                });
                if (!be(k)) throw ne("Failed to get list");
                return {
                  items: k.data.jettons,
                  nextPageToken: k.data.nextPageToken ?? ""
                }
              })
            };
          case "list":
            return {
              type: "list", data: void 0, interval: de(async () => await c({
                type: f
              }), y => {
                var b;
                ((b = s.value) == null ? void 0 : b.type) !== "list" || f !== m.value || (s.value.data = y.jettons)
              }, 5e3)
            };
          default:
            throw ne("Unknown type")
        }
      }, s = $(l()), u = () => {
        var f;
        if (s.value) switch (s.value.type) {
          case "list":
            s.value.interval.destroy();
            break;
          case "step-list":
            (f = s.value.stepList) == null || f.destroy(), s.value.interval.destroy();
            break;
          case "pagination-list":
            break;
          default:
            throw s.value, ne("Unknown type")
        }
      }, I = async () => {
        switch (s.value = l(), s.value.type) {
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
    let w;
    const M = async () => {
      await I(), w = ae(m, async f => {
        u(), await I();
        const g = (() => {
          switch (f) {
            case d.FRESH:
              return Y.FRESH;
            case d.BLUMING:
              return Y.BLUMING;
            case d.HOT:
              return Y.HOT;
            case d.LIVE_STREAMS:
              return Y.LIVE_STREAMS;
            case d.MY_TOKENS:
              return Y.POSITIONS;
            case d.MCAP:
              return Y.MCAP;
            case d.BLUMED:
              return Y.BLUMED
          }
        })();
        r.memepad.memepadOpenPanelListTab({
          source: g
        })
      })
    }, S = () => {
      u(), w == null || w()
    };
    p.onConnected(() => {
      m.value === d.MY_TOKENS && (u(), I())
    });
    const T = E(() => {
      var g;
      if (!s.value) return;
      switch (s.value.type) {
        case "step-list":
          return (g = s.value.stepList) == null ? void 0 : g.appearedItems;
        case "pagination-list":
          return s.value.pagination.isInitialized ? s.value.pagination.data : void 0;
        case "list":
          return s.value.data;
        default:
          throw ne("Unknown type")
      }
    });
    return {
      init: M,
      destroy: S,
      onPaginationLoad: async () => {
        s.value.type === "pagination-list" && await s.value.pagination.load()
      },
      activeTab: m,
      items: T
    }
  },
  yn = () => {
    const p = $(),
      t = E(() => {
        var m;
        return (m = p.value) == null ? void 0 : m.stepList.currentAppearedItem
      }),
      r = m => {
        p.value || (p.value = {
          stepList: Oe([], 1e3, 15)
        }, p.value.stepList.init()), p.value.stepList.addItems(m)
      },
      n = $(dt(async () => await Z.getMemepadExploreEvents(), m => {
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
      eventAppearedItem: E(() => t.value)
    }
  },
  gn = () => {
    const p = $(),
      r = de(async () => ut(await Z.getMemepadExploreSpotlight()), m => p.value = m.jettons, 5e3);
    return {
      init: async () => {
        await r.exec()
      },
      destroy: () => {
        r.destroy()
      },
      getReactions: m => Z.getMemepadJettonReactions(m),
      spotlight: E(() => p.value)
    }
  },
  fn = () => {
    const p = yn(),
      t = gn(),
      r = hn();
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
  En = {
    key: 0,
    class: "memepad-explore"
  },
  Sn = {
    class: "header"
  },
  In = {
    class: "title"
  },
  Tn = O({
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
      } = fn(), {
        bclData: m
      } = Re(), l = $(!1);
      a().then(() => {
        l.value = !0
      }), oe(() => {
        c()
      });
      const s = $(!!mt().query.search),
        u = () => X().push({
          name: "memepad-new",
          query: {
            memepadNewFrom: pt.MEMEPAD_MAIN
          }
        }),
        I = () => {
          X().push({
            query: {
              search: "1"
            }
          }), s.value = !0
        },
        w = () => {
          s.value = !1, X().push({
            query: {
              search: void 0
            }
          })
        };
      return (M, S) => {
        var k;
        const T = Bt,
          N = Xt,
          f = Ls,
          g = dn,
          y = It,
          b = vn;
        return i(), _(W, null, [e(l) ? (i(), _("div", En, [o("div", Sn, [o("div", In, h(("t" in M ? M.t : e(L))("memepad.explore.title")), 1), v(T, {
          onLaunch: u
        })]), e(t).eventAppearedItem.value ? (i(), C(N, {
          key: 0,
          event: e(t).eventAppearedItem.value,
          class: "event"
        }, null, 8, ["event"])) : A("", !0), (k = e(r).items.value) != null && k.length ? (i(), C(f, {
          key: 1,
          list: e(r).items.value,
          "bcl-data": e(m),
          "get-reactions": e(r).getReactions
        }, null, 8, ["list", "bcl-data", "get-reactions"])) : A("", !0), v(g, {
          modelValue: e(n).activeTab.value,
          "onUpdate:modelValue": S[0] || (S[0] = R => e(n).activeTab.value = R),
          items: e(n).items.value,
          "bcl-data": e(m),
          onSearch: I,
          onScrolled: e(n).onPaginationLoad
        }, null, 8, ["modelValue", "items", "bcl-data", "onScrolled"])])) : (i(), C(y, {
          key: 1
        })), e(s) ? (i(), C(b, {
          key: 2,
          onClose: w
        })) : A("", !0)], 64)
      }
    }
  }),
  Mn = j(Tn, [
    ["__scopeId", "data-v-7f85cc0c"]
  ]),
  bn = {
    class: "memepad-index page"
  },
  Ce = "memepad-intro",
  kn = O({
    __name: "index",
    setup(p) {
      const {
        $webApp: t
      } = he(), r = $(t.storage.local.get(Ce) ? "explore" : "intro"), n = () => {
        r.value = "explore", t.storage.local.set(Ce, "true")
      };
      return Se().memepad.memepadExploreOpen(), (c, m) => {
        const l = Ge,
          s = Lt,
          u = Mn;
        return i(), _("div", bn, [v(l), e(r) === "intro" ? (i(), C(s, {
          key: 0,
          onStart: n
        })) : e(r) === "explore" ? (i(), C(u, {
          key: 1
        })) : A("", !0)])
      }
    }
  }),
  Hn = j(kn, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  Hn as
  default
};