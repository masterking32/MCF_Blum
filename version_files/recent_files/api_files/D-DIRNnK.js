import {
  _ as Ye
} from "./DTH3tS9i.js";
import {
  d as D,
  o as i,
  c as _,
  a,
  b as v,
  t as h,
  e,
  C as b,
  D as K,
  am as ve,
  f as j,
  av as ce,
  h as he,
  aw as be,
  y as C,
  j as f,
  M as L,
  E as A,
  p as ye,
  W as Ge,
  _ as ee,
  x as Je,
  X as We,
  m as qe,
  F as W,
  aa as X,
  a_ as H,
  a$ as Ae,
  U as ze,
  b0 as Xe,
  b1 as Ze,
  b2 as ge,
  n as Z,
  b3 as fe,
  H as Ee,
  b4 as J,
  aL as re,
  ak as Ie,
  a5 as Qe,
  a0 as pe,
  T as oe,
  V as se,
  a1 as ae,
  $ as de,
  q as ue,
  G as we,
  aO as Pe,
  at as et,
  b5 as tt,
  ag as _e,
  b6 as G,
  L as Te,
  b7 as st,
  Y as Ne,
  ay as nt,
  b8 as u,
  b9 as ot,
  ba as at,
  bb as le,
  bc as it,
  a3 as Q,
  a7 as Se,
  R as lt,
  bd as ct,
  a2 as ne,
  be as rt,
  a9 as Me,
  bf as Y,
  a8 as dt,
  a4 as $e,
  bg as q,
  bh as z,
  bi as ut,
  aI as mt
} from "./DrkX69Hr.js";
import {
  _ as pt
} from "./BWMNV9t6.js";
import {
  _ as _t,
  a as vt
} from "./DZmxjHxH.js";
import {
  _ as ht
} from "./or4KFniO.js";
import {
  g as yt
} from "./Dg-OHpfG.js";
import {
  _ as gt,
  u as ft
} from "./albDNcKH.js";
import {
  _ as Et
} from "./BvUqsACr.js";
import {
  _ as St
} from "./CXjuiYKM.js";
import {
  _ as kt
} from "./B8vgTocg.js";
const It = {
    class: "memepad-intro"
  },
  Tt = {
    class: "content"
  },
  Mt = {
    class: "title"
  },
  $t = {
    class: "note"
  },
  Ct = D({
    __name: "Intro",
    emits: ["start"],
    setup(p) {
      return (t, r) => {
        const n = ve,
          o = pt;
        return i(), _("div", It, [a("div", Tt, [v(n, {
          name: "animations/Moon",
          class: "background"
        }), a("div", Mt, h(("t" in t ? t.t : e(b))("memepad.intro.title")), 1), a("button", {
          type: "button",
          class: "reset",
          onClick: r[0] || (r[0] = l => t.$emit("start"))
        }, h(("t" in t ? t.t : e(b))("memepad.intro.button_text")), 1)]), v(o, {
          "no-background": ""
        }, {
          default: K(() => [a("div", $t, h(("t" in t ? t.t : e(b))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  Lt = j(Ct, [
    ["__scopeId", "data-v-2da05feb"]
  ]),
  bt = {
    class: "memepad-sheet"
  },
  At = {
    class: "title"
  },
  wt = {
    class: "subtitle"
  },
  Pt = {
    class: "label"
  },
  Nt = {
    class: "actions"
  },
  Rt = {
    key: 0,
    class: "dont-show"
  },
  Ot = {
    class: "checkbox"
  },
  Dt = D({
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
      } = he(), n = p, o = t, l = be(p, "modelValue"), m = C(!n.dontShowStorageKey), c = C(!1), s = f({
        get: () => l.value && m.value,
        set: T => {
          l.value = T, c.value && n.dontShowStorageKey && r.storage.local.set(n.dontShowStorageKey, "true")
        }
      });
      (() => {
        n.dontShowStorageKey && (m.value = !r.storage.local.get(n.dontShowStorageKey))
      })();
      const I = () => o("readMoreClick"),
        E = () => {
          s.value = !1, o("close", {
            source: "modal"
          })
        },
        w = () => {
          s.value = !1, o("close", {
            source: "button"
          })
        };
      return (T, k) => {
        const N = ve,
          S = ee,
          g = _t,
          y = Je,
          M = We;
        return i(), L(M, {
          "model-value": e(s),
          "onUpdate:modelValue": E
        }, {
          default: K(() => [a("div", bt, [v(N, {
            name: T.lottie,
            size: 116
          }, null, 8, ["name"]), a("div", At, h(T.title), 1), a("div", null, [a("div", wt, h(T.subtitle), 1), T.hideReadMore ? A("", !0) : (i(), _("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: I
          }, [a("span", Pt, h(("t" in T ? T.t : e(b))("base.read_more")), 1), v(S, {
            name: "arrow-right",
            class: "icon"
          })]))]), a("div", Nt, [T.dontShowStorageKey ? (i(), _("div", Rt, [a("div", Ot, [v(g, {
            modelValue: e(c),
            "onUpdate:modelValue": k[0] || (k[0] = $ => ye(c) ? c.value = $ : null)
          }, null, 8, ["modelValue"]), a("span", {
            class: "label",
            onClick: k[1] || (k[1] = $ => c.value = !e(c))
          }, h(("t" in T ? T.t : e(b))("memepad.sheet.dont_show_again_label")), 1)])])) : A("", !0), v(y, {
            label: T.buttonText,
            fill: "",
            size: e(Ge).LARGE,
            onClick: w
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  jt = j(Dt, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  Ce = "memepad-launch-jetton",
  Ut = D({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: r
      } = he(), n = t, o = C(!1), l = C(r.storage.local.get(Ce) ? "watched" : "unwatched"), m = () => {
        l.value === "watched" ? n("launch") : o.value = !0
      }, c = () => {
        r.storage.local.set(Ce, "true"), n("launch")
      };
      return (s, d) => {
        const I = jt;
        return i(), _(W, null, [a("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: m
        }, [d[1] || (d[1] = a("i", {
          class: "seedling"
        }, null, -1)), qe(" " + h(("t" in s ? s.t : e(b))("memepad.explore.launch.button_text")), 1)]), v(I, {
          modelValue: e(o),
          "onUpdate:modelValue": d[0] || (d[0] = E => ye(o) ? o.value = E : null),
          title: ("t" in s ? s.t : e(b))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in s ? s.t : e(b))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in s ? s.t : e(b))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: c
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  Kt = j(Ut, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  Bt = ["src"],
  Vt = {
    key: 1,
    class: "user-avatar-empty"
  },
  Ft = {
    class: "text"
  },
  xt = {
    key: 0,
    class: "user-name"
  },
  Ht = {
    key: 1,
    class: "user-address"
  },
  Yt = {
    class: "action"
  },
  Gt = {
    class: "amount"
  },
  Jt = {
    class: "ticker"
  },
  Wt = {
    class: "seconds"
  },
  qt = D({
    __name: "Event",
    props: {
      event: {}
    },
    setup(p) {
      const t = p,
        r = f(() => b(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        n = f(() => X().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.event.shortname
          },
          query: {
            from: H.ACTIONBAR
          }
        })),
        o = f(() => {
          const l = Ae(t.event.timestamp);
          return l.isDate ? l.label : `${l.label} ago`
        });
      return (l, m) => {
        const c = ee,
          s = ze("I18nT"),
          d = fe,
          I = Ee;
        return i(), L(I, {
          to: e(n),
          class: Z(["memepad-explore-event", `is-${l.event.type.toLowerCase()}`])
        }, {
          default: K(() => [l.event.user.avatarUrl ? (i(), _("img", {
            key: 0,
            src: l.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, Bt)) : (i(), _("div", Vt, [v(c, {
            name: "space-invader",
            class: "icon"
          })])), a("div", Ft, [l.event.user.nickname ? (i(), _("span", xt, h(l.event.user.nickname), 1)) : (i(), _("span", Ht, h(("sliceWalletAddress" in l ? l.sliceWalletAddress : e(Xe))(l.event.user.address)), 1)), a("span", Yt, h(e(r)), 1), l.event.amount ? (i(), L(s, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: K(() => [a("span", Gt, h(`${("formatTon"in l?l.formatTon:e(Ze))(l.event.amount)} TON`), 1)]),
            _: 1
          })) : A("", !0)]), v(d, {
            src: e(ge)(l.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), a("span", Jt, h(l.event.ticker), 1), a("span", Wt, h(e(o)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  zt = j(qt, [
    ["__scopeId", "data-v-9a23721a"]
  ]),
  Xt = {
    class: "ticker"
  },
  Zt = {
    key: 0,
    class: "live"
  },
  Qt = {
    class: "label"
  },
  es = {
    key: 1,
    class: "stats"
  },
  ts = {
    class: "holders-count"
  },
  ss = {
    class: "text"
  },
  ns = {
    class: "transactions-count"
  },
  os = {
    class: "text"
  },
  as = D({
    __name: "Card",
    props: {
      jetton: {},
      index: {}
    },
    setup(p) {
      const t = p,
        r = f(() => X().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: `spotlight-${t.index+1}`
          }
        }));
      return (n, o) => {
        const l = fe,
          m = ee,
          c = Ee;
        return i(), L(c, {
          to: e(r),
          class: "memepad-explore-spotlight-card"
        }, {
          default: K(() => [v(l, {
            src: e(ge)(n.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), a("span", Xt, h(n.jetton.ticker), 1), n.jetton.streamOnline ? (i(), _("div", Zt, [o[0] || (o[0] = a("div", {
            class: "dot"
          }, null, -1)), a("div", Qt, h(("t" in n ? n.t : e(b))("memepad.explore.spotlight.live")), 1)])) : (i(), _("div", es, [a("div", ts, [v(m, {
            name: "personal",
            class: "icon"
          }), a("span", ss, h(n.jetton.stats.holdersCount ? ("formatCount" in n ? n.formatCount : e(J))(n.jetton.stats.holdersCount, {
            accuracy: 0
          }).full : "-"), 1)]), a("div", ns, [v(m, {
            name: "transfer",
            class: "icon"
          }), a("span", os, h(n.jetton.stats.transactionsCount ? ("formatCount" in n ? n.formatCount : e(J))(n.jetton.stats.transactionsCount, {
            accuracy: 0
          }).full : "-"), 1)])]))]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  is = j(as, [
    ["__scopeId", "data-v-20e41bcf"]
  ]),
  ls = {
    class: "inner"
  },
  cs = {
    class: "left"
  },
  rs = {
    class: "mc"
  },
  ds = {
    key: 0,
    class: "diff"
  },
  us = {
    key: 1,
    class: "percent"
  },
  ms = {
    class: "progress"
  },
  ps = {
    class: "direction-wrapper"
  },
  _s = {
    key: 0,
    class: "direction up"
  },
  vs = {
    key: 0,
    class: "direction down"
  },
  hs = D({
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
        const n = ee;
        return i(), _("div", {
          class: Z(["memepad-explore-spotlight-progress", [t.moveDirection && `is-${(o=t.moveDirection)==null?void 0:o.direction}`, {
            "is-released": t.jetton.isReleased
          }]])
        }, [a("div", ls, [a("div", cs, [a("span", rs, h(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (i(), _("span", ds, h(t.moveDirection.diffFormatted), 1)) : A("", !0)]), t.jetton.isReleased ? (i(), L(n, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (i(), _("span", us, h(t.tokenCollectedPercent ?? "-") + "% ", 1))]), a("div", ms, [a("div", {
          class: "line",
          style: re({
            width: `${t.tokenCollectedPercent}%`
          })
        }, [a("div", ps, [v(Ie, {
          name: "direction-opacity"
        }, {
          default: K(() => {
            var l;
            return [((l = t.moveDirection) == null ? void 0 : l.direction) === "up" ? (i(), _("div", _s, [v(n, {
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
        }), v(Ie, {
          name: "direction-opacity"
        }, {
          default: K(() => {
            var l;
            return [((l = t.moveDirection) == null ? void 0 : l.direction) === "down" ? (i(), _("div", vs, [v(n, {
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
  ys = j(hs, [
    ["__scopeId", "data-v-dd6ee1cb"]
  ]),
  gs = {
    class: "memepad-explore-spotlight"
  },
  fs = {
    class: "bg"
  },
  Es = ["src"],
  Ss = ["src"],
  ks = {
    class: "content"
  },
  Is = {
    class: "header"
  },
  Ts = {
    class: "logo"
  },
  Ms = {
    class: "title"
  },
  $s = ["src"],
  Cs = D({
    __name: "Spotlight",
    props: {
      list: {},
      getReactions: {
        type: Function
      }
    },
    setup(p) {
      const t = p,
        r = Qe(),
        n = C(0),
        o = f(() => t.list[n.value]),
        l = g => {
          var y;
          (y = m.value) == null || y.scrollTo({
            left: g * window.innerWidth + (n.value > g ? -1 : 1),
            behavior: "smooth"
          })
        },
        m = C(null),
        c = we(() => {
          if (!m.value) return;
          const g = m.value.children[0].offsetWidth + 10,
            y = m.value.scrollLeft,
            M = Math.round(y / g);
          n.value = M
        }, 50).debouncedFunction,
        s = f(() => {
          const g = (() => {
              if (!(!o.value.stats.tokenCollected || !o.value.tokenForDex)) return new pe(o.value.stats.tokenCollected.div(o.value.tokenForDex).times(100).toFixed(0, pe.ROUND_DOWN))
            })(),
            y = o.value.stats.marketCap && J(o.value.stats.marketCap);
          return {
            id: o.value.id,
            shortname: o.value.shortname,
            tokenCollectedPercent: g,
            marketCap: y
          }
        }),
        d = [],
        I = C();
      oe(s, (g, y) => {
        if (!g.marketCap || !y.marketCap || g.marketCap.full === y.marketCap.full || g.id !== y.id) {
          I.value = void 0;
          return
        }
        const M = g.marketCap.raw.minus(y.marketCap.raw),
          $ = M.lt(0),
          R = J(M.abs(), {
            accuracy: 0
          }).full;
        R !== "0" && (I.value = {
          direction: $ ? "down" : "up",
          diffFormatted: `${$?"-":"+"}${R}`
        }, d.push(setTimeout(() => I.value = void 0, 3e3)))
      });
      const E = f(() => {
          var g, y;
          return ((g = I.value) == null ? void 0 : g.direction) === "down" ? se("memepad/spotlight-room-down", "svg") : ((y = I.value) == null ? void 0 : y.direction) === "up" ? se("memepad/spotlight-room-up", "svg") : se("memepad/spotlight-room", "svg")
        }),
        {
          reactionsAnimations: w,
          ANIMATION_DURATION: T,
          restart: k
        } = S();
      oe(n, k, {
        immediate: !0
      }), ae(() => {
        d.forEach(clearTimeout)
      });
      const N = f(() => o.value.isReleased ? se("memepad/dex-bg", "gif") : se("memepad/bg", "gif"));

      function S() {
        let M = 0;
        const $ = [];
        let R;
        const U = C(),
          O = C([]),
          F = de(async () => await t.getReactions(s.value.shortname), ie => {
            if (!U.value) {
              U.value = ie;
              return
            }
            const {
              user: $n,
              ...je
            } = U.value;
            U.value = ie;
            const {
              user: Cn,
              ...Ue
            } = U.value, ke = Object.entries(Ue).reduce((B, [x, me]) => {
              const Fe = je[x],
                xe = me,
                He = pe.max(xe.minus(Fe), 0).toNumber();
              return {
                ...B,
                [x]: He
              }
            }, {}), Ke = 5e3 / Object.values(ke).reduce((B, x) => B + x, 0), Be = M, Ve = B => ({
              id: et(),
              image: tt(B),
              position: {
                x: _e(0, 20) - 10,
                y: _e(0, 20) - 10
              },
              animationType: _e(1, 2),
              createdAt: Date.now()
            });
            Object.entries(ke).reduce((B, [x, me]) => B.concat(Array(me).fill(x)), []).sort(() => Math.random() - .5).forEach((B, x) => {
              $.push(setTimeout(() => {
                Be === M && O.value.push(Ve(B))
              }, Ke * x))
            })
          }, 5e3),
          P = async () => {
            await F.exec(), R = Pe(() => {
              O.value = O.value.filter(ie => Date.now() - ie.createdAt < 6e3)
            }, 2e3)
          }, te = () => {
            F.destroy(), $.forEach(clearTimeout), R && clearInterval(R), U.value = void 0, O.value = []
          };
        oe(() => s.value.shortname, () => {
          M++, $.forEach(clearTimeout), te(), P()
        }), P(), ae(te);
        const De = () => {
          te(), P()
        };
        return {
          reactionsAnimations: f(() => O.value),
          ANIMATION_DURATION: 6e3,
          restart: De
        }
      }
      return (g, y) => {
        var O, V, F;
        const M = ve,
          $ = ht,
          R = is,
          U = ys;
        return i(), _("div", gs, [a("div", fs, [e(r).isLowEndDevice.value ? A("", !0) : (i(), _("img", {
          key: 0,
          src: e(N),
          alt: "Gif",
          class: Z([{
            "is-version-1": ((O = e(s).tokenCollectedPercent) == null ? void 0 : O.lte(30)) && !e(o).isReleased,
            "is-version-2": ((V = e(s).tokenCollectedPercent) == null ? void 0 : V.gt(30)) && e(s).tokenCollectedPercent.lte(60) && !e(o).isReleased,
            "is-version-3": ((F = e(s).tokenCollectedPercent) == null ? void 0 : F.gt(60)) && !e(o).isReleased,
            "is-dex": e(o).isReleased
          }, "gif"])
        }, null, 10, Es)), a("img", {
          src: e(E),
          alt: "Gif",
          class: "room"
        }, null, 8, Ss), y[2] || (y[2] = a("div", {
          class: "gradient"
        }, null, -1))]), a("div", ks, [a("div", Is, [a("div", Ts, [v(M, {
          name: "animations/Fire",
          size: 28
        }), a("div", Ms, h(("t" in g ? g.t : e(b))("memepad.explore.spotlight.title")), 1)]), g.list.length > 1 ? (i(), L($, {
          key: 0,
          "model-value": e(n),
          count: g.list.length,
          timer: 15e3,
          "onUpdate:modelValue": l
        }, null, 8, ["model-value", "count"])) : A("", !0)]), a("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: y[0] || (y[0] = (...P) => e(c) && e(c)(...P)),
          onTouchmove: y[1] || (y[1] = (...P) => e(c) && e(c)(...P))
        }, [(i(!0), _(W, null, ue(t.list, (P, te) => (i(), L(R, {
          key: P.id,
          index: te,
          jetton: P,
          class: "item"
        }, null, 8, ["index", "jetton"]))), 128))], 544), (i(), L(U, {
          key: e(o).id,
          jetton: e(o),
          "move-direction": e(I),
          "market-cap": e(s).marketCap,
          "token-collected-percent": e(s).tokenCollectedPercent
        }, null, 8, ["jetton", "move-direction", "market-cap", "token-collected-percent"])), a("div", {
          class: "reactions",
          style: re({
            "--animation-duration": `${e(T)}ms`
          })
        }, [(i(!0), _(W, null, ue(e(w), P => (i(), _("img", {
          key: P.id,
          src: P.image,
          class: Z(`animation-${P.animationType}`),
          style: re({
            "--x-offset": P.position.x + "px",
            "--y-offset": P.position.y + "px"
          })
        }, null, 14, $s))), 128))], 4)])])
      }
    }
  }),
  Ls = j(Cs, [
    ["__scopeId", "data-v-098a98c9"]
  ]),
  bs = {
    class: "inner"
  },
  As = {
    key: 0,
    class: "live"
  },
  ws = D({
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
          class: Z(["memepad-jetton-image-collected-circle", {
            "is-released": t.isReleased
          }]),
          style: re({
            "--collected-percent": t.collectedPercent
          })
        }, [a("div", bs, [v(n, {
          src: t.image,
          size: 48,
          class: "image"
        }, null, 8, ["src"]), t.streamOnline ? (i(), _("div", As, "LIVE")) : A("", !0)])], 6)
      }
    }
  }),
  Ps = j(ws, [
    ["__scopeId", "data-v-abe4cfd5"]
  ]),
  Ns = {
    class: "center"
  },
  Rs = {
    class: "ticker"
  },
  Os = {
    key: 0,
    class: "base-stats"
  },
  Ds = {
    key: 0,
    class: "holders-count"
  },
  js = {
    class: "text"
  },
  Us = {
    key: 1,
    class: "transactions-count"
  },
  Ks = {
    class: "text"
  },
  Bs = {
    key: 1,
    class: "my-tokens-stats"
  },
  Vs = {
    class: "jettons"
  },
  Fs = {
    key: 0,
    class: "base-values"
  },
  xs = {
    class: "market-cap"
  },
  Hs = {
    class: "label"
  },
  Ys = {
    class: "value"
  },
  Gs = {
    class: "lifetime"
  },
  Js = {
    class: "text"
  },
  Ws = {
    key: 1,
    class: "my-tokens-values"
  },
  qs = {
    class: "fiat"
  },
  zs = D({
    __name: "ListItem",
    props: {
      jetton: {},
      analyticsSource: {
        default: void 0
      },
      mode: {
        default: G.BASE
      }
    },
    setup(p) {
      const t = p,
        r = f(() => X().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: t.analyticsSource
          }
        })),
        n = f(() => {
          if (t.jetton.tokenForDex) return t.jetton.stats.tokenCollected && t.jetton.stats.tokenCollected.div(t.jetton.tokenForDex).times(100).toNumber()
        }),
        o = d => {
          const I = d.decimalPlaces();
          return Math.max(Math.min(1, I), 0)
        },
        l = f(() => Ae(t.jetton.releaseTimestamp).label),
        m = f(() => t.jetton.ownedAmount ? Te(t.jetton.ownedAmount, t.jetton.ticker).frontend : "-"),
        c = f(() => t.jetton.ownedAmountUSD ? Te(t.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        s = f(() => t.jetton.pnlPercent ? yt(t.jetton.pnlPercent) : void 0);
      return (d, I) => {
        const E = Ps,
          w = ee,
          T = Ee;
        return i(), L(T, {
          to: e(r),
          class: "memepad-jetton-list-item"
        }, {
          default: K(() => {
            var k;
            return [v(E, {
              image: e(ge)(d.jetton.iconFileKey),
              "collected-percent": e(n),
              "is-released": d.jetton.isReleased,
              "stream-online": d.jetton.streamOnline
            }, null, 8, ["image", "collected-percent", "is-released", "stream-online"]), a("div", Ns, [a("div", Rs, h(d.jetton.ticker), 1), d.mode === e(G).BASE ? (i(), _("div", Os, [d.jetton.stats.holdersCount !== void 0 ? (i(), _("div", Ds, [v(w, {
              name: "personal",
              class: "icon"
            }), a("span", js, h(("formatCount" in d ? d.formatCount : e(J))(d.jetton.stats.holdersCount, {
              accuracy: 0
            }).full), 1)])) : A("", !0), d.jetton.stats.transactionsCount !== void 0 ? (i(), _("div", Us, [v(w, {
              name: "transfer",
              class: "icon"
            }), a("span", Ks, h(("formatCount" in d ? d.formatCount : e(J))(d.jetton.stats.transactionsCount, {
              accuracy: 0
            }).full), 1)])) : A("", !0)])) : d.mode === e(G).MY_TOKENS ? (i(), _("div", Bs, [a("div", Vs, h(e(m)), 1)])) : A("", !0)]), d.mode === e(G).BASE ? (i(), _("div", Fs, [a("div", xs, [a("span", Hs, h(("t" in d ? d.t : e(b))("memepad.jetton.stats.market_cap")), 1), a("span", Ys, h(d.jetton.stats.marketCap ? `$${("formatCount"in d?d.formatCount:e(J))(d.jetton.stats.marketCap,{accuracy:o(d.jetton.stats.marketCap)}).full}` : "-"), 1)]), a("div", Gs, [v(w, {
              name: "environment-leaf",
              class: "icon"
            }), a("span", Js, h(e(l)), 1)])])) : d.mode === e(G).MY_TOKENS ? (i(), _("div", Ws, [a("div", qs, h(e(c)), 1), a("div", {
              class: Z(["pnl", e(s) && e(s).cls])
            }, h(((k = e(s)) == null ? void 0 : k.formatted) ?? "-"), 3)])) : A("", !0)]
          }),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  Xs = j(zs, [
    ["__scopeId", "data-v-3ef550eb"]
  ]),
  Zs = D({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      mode: {}
    },
    setup(p) {
      return (t, r) => {
        const n = Xs;
        return i(), L(st, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: K(() => [(i(!0), _(W, null, ue(t.items, o => (i(), L(n, {
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
  Re = j(Zs, [
    ["__scopeId", "data-v-3b3de455"]
  ]),
  Qs = {
    class: "memepad-explore-panel-list"
  },
  en = {
    class: "top"
  },
  tn = {
    class: "search-btn-wrapper"
  },
  sn = {
    key: 0,
    class: "connect"
  },
  nn = {
    class: "label"
  },
  on = {
    key: 1,
    class: "connect"
  },
  an = {
    key: 1,
    class: "empty-state"
  },
  ln = {
    class: "label"
  },
  cn = D({
    __name: "PanelList",
    props: ce({
      items: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ce(["search", "scrolled"], ["update:modelValue"]),
    setup(p) {
      const t = be(p, "modelValue"),
        r = Ne(),
        n = nt(),
        o = [{
          value: u.FRESH,
          pingDot: !0
        }, {
          value: u.LIVE_STREAMS
        }, {
          value: u.HOT
        }, {
          value: u.BLUMING
        }, {
          value: u.BLUMED
        }, {
          value: u.MCAP
        }, {
          value: u.MY_TOKENS
        }].map(c => {
          const s = {
            [u.FRESH]: "New",
            [u.LIVE_STREAMS]: "Live",
            [u.HOT]: "Hot",
            [u.BLUMING]: "Bluming",
            [u.BLUMED]: "Listed",
            [u.MCAP]: "MCap",
            [u.MY_TOKENS]: "My tokens"
          };
          return {
            ...c,
            label: s[c.value]
          }
        }),
        l = f(() => {
          switch (t.value) {
            case u.FRESH:
              return H.FRESH;
            case u.BLUMING:
              return H.BLUMING;
            case u.HOT:
              return H.HOT;
            case u.MY_TOKENS:
              return H.POSITIONS;
            case u.MCAP:
              return H.MCAP;
            case u.BLUMED:
              return H.BLUMED
          }
        }),
        m = f(() => t.value === u.MY_TOKENS ? G.MY_TOKENS : G.BASE);
      return (c, s) => {
        const d = ee,
          I = vt,
          E = at,
          w = Re,
          T = gt,
          k = Et;
        return i(), _("div", Qs, [a("div", en, [v(I, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = N => t.value = N),
          items: e(o)
        }, {
          after: K(() => [a("div", tn, [a("button", {
            type: "button",
            class: "search reset",
            onClick: s[0] || (s[0] = N => c.$emit("search"))
          }, [v(d, {
            name: "search",
            class: "icon"
          })])])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (e(r).wallet.value.status === "must_reconnect" || e(r).wallet.value.status === "not_found") && t.value === e(u).MY_TOKENS ? (i(), _("div", sn, [a("div", nn, h(("t" in c ? c.t : e(b))("memepad.explore.my_tokens.connect_text")), 1), a("button", {
          type: "button",
          class: "reset",
          onClick: s[2] || (s[2] = N => e(n).runConnectionFlow())
        }, h(("t" in c ? c.t : e(b))("wallet.connect.btn")), 1)])) : e(r).wallet.value.status === "loading" && t.value === e(u).MY_TOKENS ? (i(), _("div", on, [v(E, {
          type: e(ot).LIGHT
        }, null, 8, ["type"])])) : c.items ? (i(), L(T, {
          key: 2,
          onEnd: s[3] || (s[3] = N => c.$emit("scrolled"))
        }, {
          default: K(() => [c.items.length ? (i(), L(w, {
            key: t.value,
            items: c.items,
            "analytics-source": e(l),
            mode: e(m)
          }, null, 8, ["items", "analytics-source", "mode"])) : t.value === e(u).MY_TOKENS ? (i(), _("div", an, [v(d, {
            name: "add-plus-circle",
            class: "icon"
          }), a("div", ln, h(("t" in c ? c.t : e(b))("memepad.explore.my_tokens.empty_text")), 1)])) : A("", !0)]),
          _: 1
        })) : (i(), _(W, {
          key: 3
        }, ue(6, N => a("div", {
          key: N,
          class: "skeleton"
        }, [v(k, {
          class: "image"
        }), v(k, {
          class: "ticker"
        }), v(k, {
          class: "stats"
        })])), 64))])
      }
    }
  }),
  rn = j(cn, [
    ["__scopeId", "data-v-19258ed9"]
  ]),
  dn = () => {
    const p = le(() => "", "$nnokZ0cAmU"),
      t = le(() => !1, "$dxYpAQPdtd"),
      r = le("$pDWqkemNGG"),
      n = it(async c => (t.value = !0, {
        res: await Q.getMemepadSearch(c),
        search: c
      }), ({
        res: c,
        search: s
      }) => {
        t.value = !1, p.value = s, r.value = c.err ? void 0 : c.data
      });
    return {
      _flow: {
        init: () => {},
        destroy: () => {
          p.value = "", t.value = !1, r.value = void 0
        }
      },
      search: c => {
        c !== p.value && (c === "" ? (t.value = !1, r.value = void 0, p.value = "") : n(c))
      },
      searchLine: f(() => p.value),
      data: f(() => r.value),
      isSearching: f(() => t.value)
    }
  },
  un = {
    class: "memepad-search page"
  },
  mn = {
    key: 0,
    class: "empty"
  },
  pn = D({
    __name: "Search",
    emits: ["close"],
    setup(p, {
      emit: t
    }) {
      const r = t,
        n = C(),
        o = dn();
      o._flow.init(), ae(() => o._flow.destroy());
      const l = C(!1),
        m = C(""),
        c = [];
      (() => {
        c.push(setTimeout(() => {
          l.value = !0
        }, 400))
      })(), ae(() => {
        c.forEach(E => clearTimeout(E))
      });
      const {
        debouncedFunction: d
      } = we(o.search, 600);
      return oe(m, d), Se().memepad.memepadSearchOpen(), lt().initHandler(() => r("close"), "memepad-search"), (E, w) => {
        const T = kt,
          k = Re;
        return i(), _("div", un, [v(T, {
          ref_key: "searchWithTitleComponent",
          ref: n,
          modelValue: e(m),
          "onUpdate:modelValue": w[0] || (w[0] = N => ye(m) ? m.value = N : null),
          placeholder: ("t" in E ? E.t : e(b))("memepad.search.input_placeholder"),
          activated: e(l),
          autofocus: "",
          "is-loading": e(o).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), e(o).data.value ? (i(), _(W, {
          key: 0
        }, [e(o).data.value.length === 0 ? (i(), _("div", mn, h(("t" in E ? E.t : e(b))("memepad.search.empty_text")), 1)) : (i(), L(k, {
          key: 1,
          items: e(o).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in E ? E.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : e(H)).SEARCH
        }, null, 8, ["items", "analytics-source"]))], 64)) : A("", !0)])
      }
    }
  }),
  _n = j(pn, [
    ["__scopeId", "data-v-4ec42003"]
  ]),
  Oe = (p, t, r) => {
    const n = Math.max(0, p.length - 1),
      o = C([...p].reverse()),
      l = C(n),
      m = () => {
        l.value < o.value.length - 1 && l.value++
      },
      c = f(() => {
        const k = Math.max(0, l.value - r + 1),
          N = Math.min(l.value + 1, o.value.length);
        return [...o.value].slice(k, N).reverse()
      }),
      s = f(() => [...o.value].reverse()[l.value]);
    let d;
    return {
      init: () => {
        clearInterval(d), d = Pe(m, t)
      },
      destroy: () => {
        o.value = [], l.value = 0, clearInterval(d)
      },
      addItems: k => {
        o.value.push(...[...k].reverse())
      },
      setItems: k => {
        o.value = k, l.value = k.length - 1
      },
      items: f(() => o.value),
      appearedItems: c,
      currentAppearedItem: s
    }
  },
  vn = () => {
    const p = ct(),
      t = Ne(),
      r = Se();
    let n;
    (S => {
      S.LIST = "list", S.STEP_LIST = "step-list", S.PAGINATION_LIST = "pagination-list"
    })(n || (n = {}));
    const o = {
        [u.FRESH]: "step-list",
        [u.LIVE_STREAMS]: "list",
        [u.HOT]: "list",
        [u.BLUMING]: "pagination-list",
        [u.BLUMED]: "pagination-list",
        [u.MCAP]: "pagination-list",
        [u.MY_TOKENS]: "list"
      },
      l = async ({
        type: S,
        pageToken: g
      }) => {
        if (S === u.MY_TOKENS) {
          const U = t.wallet.value.status === "connected" ? t.wallet.value.address.default : void 0;
          if (!U) return $e({
            jettons: [],
            nextPageToken: ""
          });
          const O = await Q.getMemepadJettonsPositions(U);
          return Me(O) ? $e({
            jettons: O.data.jettons,
            nextPageToken: ""
          }) : O
        }
        const y = {
            [u.FRESH]: q.CREATED_AT,
            [u.HOT]: q.HOT,
            [u.LIVE_STREAMS]: q.LIVE_STREAMS,
            [u.BLUMING]: q.NEAREST_TO_LISTING,
            [u.MCAP]: q.MARKET_CAP,
            [u.BLUMED]: q.PUBLISHED_AT
          },
          M = {
            [u.FRESH]: z.EXCLUDE,
            [u.HOT]: z.INCLUDE,
            [u.LIVE_STREAMS]: z.INCLUDE,
            [u.BLUMING]: z.INCLUDE_LISTED,
            [u.MCAP]: z.INCLUDE,
            [u.BLUMED]: z.ONLY
          },
          $ = y[S],
          R = M[S];
        return await Q.getMemepadJettonsSection($, R, g)
      }, m = le(() => u.FRESH, "$SbGDXlzgsy"), c = () => {
        const S = m.value;
        switch (o[S]) {
          case "step-list":
            return {
              type: "step-list", stepList: void 0, interval: de(async () => await l({
                type: S
              }), y => {
                var $;
                if ((($ = s.value) == null ? void 0 : $.type) !== "step-list" || S !== m.value) return;
                const M = s.value.stepList;
                if (!M) s.value.stepList = Oe(y.jettons, 1e3, 60), s.value.stepList.init();
                else {
                  const R = M,
                    U = y.jettons.filter(V => !R.items.some(F => F.id === V.id)),
                    O = R.items.map(V => y.jettons.find(P => P.id === V.id) || V);
                  R.setItems(O), R.addItems(U)
                }
              }, 5e3)
            };
          case "pagination-list":
            return {
              type: "pagination-list", pagination: ft(async M => {
                const $ = await l({
                  type: S,
                  pageToken: M
                });
                if (!Me($)) throw ne("Failed to get list");
                return {
                  items: $.data.jettons,
                  nextPageToken: $.data.nextPageToken ?? ""
                }
              })
            };
          case "list":
            return {
              type: "list", data: void 0, interval: de(async () => await l({
                type: S
              }), y => {
                var M;
                ((M = s.value) == null ? void 0 : M.type) !== "list" || S !== m.value || (s.value.data = y.jettons)
              }, 5e3)
            };
          default:
            throw ne("Unknown type")
        }
      }, s = C(c()), d = () => {
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
      }, I = async () => {
        switch (s.value = c(), s.value.type) {
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
    let E;
    const w = async () => {
      await I(), E = oe(m, async S => {
        d(), await I();
        const g = (() => {
          switch (S) {
            case u.FRESH:
              return Y.FRESH;
            case u.BLUMING:
              return Y.BLUMING;
            case u.HOT:
              return Y.HOT;
            case u.LIVE_STREAMS:
              return Y.LIVE_STREAMS;
            case u.MY_TOKENS:
              return Y.POSITIONS;
            case u.MCAP:
              return Y.MCAP;
            case u.BLUMED:
              return Y.BLUMED
          }
        })();
        r.memepad.memepadOpenPanelListTab({
          source: g
        })
      })
    }, T = () => {
      d(), E == null || E()
    };
    p.onConnected(() => {
      m.value === u.MY_TOKENS && (d(), I())
    });
    const k = f(() => {
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
      init: w,
      destroy: T,
      onPaginationLoad: async () => {
        s.value.type === "pagination-list" && await s.value.pagination.load()
      },
      activeTab: m,
      items: k
    }
  },
  hn = () => {
    const p = C(),
      t = f(() => {
        var m;
        return (m = p.value) == null ? void 0 : m.stepList.currentAppearedItem
      }),
      r = m => {
        p.value || (p.value = {
          stepList: Oe([], 1e3, 15)
        }, p.value.stepList.init()), p.value.stepList.addItems(m)
      },
      n = C(rt(async () => await Q.getMemepadExploreEvents(), m => {
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
      eventAppearedItem: f(() => t.value)
    }
  },
  yn = () => {
    const p = C(),
      r = de(async () => dt(await Q.getMemepadExploreSpotlight()), m => p.value = m.jettons, 5e3);
    return {
      init: async () => {
        await r.exec()
      },
      destroy: () => {
        r.destroy()
      },
      getReactions: m => Q.getMemepadJettonReactions(m),
      spotlight: f(() => p.value)
    }
  },
  gn = () => {
    const p = hn(),
      t = yn(),
      r = vn();
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
  fn = {
    key: 0,
    class: "memepad-explore"
  },
  En = {
    class: "header"
  },
  Sn = {
    class: "title"
  },
  kn = D({
    __name: "Index",
    setup(p) {
      const {
        events: t,
        spotlight: r,
        panelList: n,
        _flow: {
          init: o,
          destroy: l
        }
      } = gn(), m = C(!1);
      o().then(() => {
        m.value = !0
      }), ae(() => {
        l()
      });
      const c = C(!!ut().query.search),
        s = () => X().push({
          name: "memepad-new",
          query: {
            memepadNewFrom: mt.MEMEPAD_MAIN
          }
        }),
        d = () => {
          X().push({
            query: {
              search: "1"
            }
          }), c.value = !0
        },
        I = () => {
          c.value = !1, X().push({
            query: {
              search: void 0
            }
          })
        };
      return (E, w) => {
        var M;
        const T = Kt,
          k = zt,
          N = Ls,
          S = rn,
          g = St,
          y = _n;
        return i(), _(W, null, [e(m) ? (i(), _("div", fn, [a("div", En, [a("div", Sn, h(("t" in E ? E.t : e(b))("memepad.explore.title")), 1), v(T, {
          onLaunch: s
        })]), e(t).eventAppearedItem.value ? (i(), L(k, {
          key: 0,
          event: e(t).eventAppearedItem.value,
          class: "event"
        }, null, 8, ["event"])) : A("", !0), (M = e(r).items.value) != null && M.length ? (i(), L(N, {
          key: 1,
          list: e(r).items.value,
          "get-reactions": e(r).getReactions
        }, null, 8, ["list", "get-reactions"])) : A("", !0), v(S, {
          modelValue: e(n).activeTab.value,
          "onUpdate:modelValue": w[0] || (w[0] = $ => e(n).activeTab.value = $),
          items: e(n).items.value,
          onSearch: d,
          onScrolled: e(n).onPaginationLoad
        }, null, 8, ["modelValue", "items", "onScrolled"])])) : (i(), L(g, {
          key: 1
        })), e(c) ? (i(), L(y, {
          key: 2,
          onClose: I
        })) : A("", !0)], 64)
      }
    }
  }),
  In = j(kn, [
    ["__scopeId", "data-v-0cb3bc3d"]
  ]),
  Tn = {
    class: "memepad-index page"
  },
  Le = "memepad-intro",
  Mn = D({
    __name: "index",
    setup(p) {
      const {
        $webApp: t
      } = he(), r = C(t.storage.local.get(Le) ? "explore" : "intro"), n = () => {
        r.value = "explore", t.storage.local.set(Le, "true")
      };
      return Se().memepad.memepadExploreOpen(), (l, m) => {
        const c = Ye,
          s = Lt,
          d = In;
        return i(), _("div", Tn, [v(c), e(r) === "intro" ? (i(), L(s, {
          key: 0,
          onStart: n
        })) : e(r) === "explore" ? (i(), L(d, {
          key: 1
        })) : A("", !0)])
      }
    }
  }),
  Kn = j(Mn, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  Kn as
  default
};