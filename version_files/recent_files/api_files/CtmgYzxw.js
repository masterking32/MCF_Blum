import {
  _ as We
} from "./BOseS2KK.js";
import {
  d as O,
  o as l,
  c as _,
  a as o,
  b as v,
  t as y,
  e,
  z as C,
  H as B,
  ae as he,
  f as R,
  ao as ue,
  h as ye,
  ap as Ae,
  K as $,
  j as S,
  G as M,
  D as w,
  p as fe,
  V as ze,
  _ as Q,
  x as qe,
  aI as Xe,
  m as Ze,
  F as Y,
  ad as X,
  aJ as x,
  aK as Pe,
  aL as Qe,
  aM as et,
  aN as tt,
  aO as ge,
  n as J,
  aP as Se,
  I as Ee,
  aQ as W,
  aw as ne,
  aa as Te,
  Z as st,
  T as _e,
  P as oe,
  an as ee,
  U as ie,
  R as me,
  q as le,
  ac as Ne,
  aB as De,
  al as at,
  aR as nt,
  a6 as ve,
  aS as G,
  E as be,
  aT as ot,
  O as Oe,
  as as lt,
  aU as p,
  aV as it,
  aW as ct,
  aX as de,
  aY as rt,
  X as Z,
  a0 as Ie,
  aZ as dt,
  a_ as ut,
  a$ as mt,
  W as te,
  b0 as pt,
  a2 as $e,
  b1 as q,
  a1 as _t,
  Y as Ce,
  b2 as se,
  b3 as ae,
  Q as Me
} from "./1IBRWEJd.js";
import {
  _ as vt
} from "./CbbJ0lG1.js";
import {
  _ as ht,
  a as yt
} from "./-_2cYzTQ.js";
import {
  g as ft
} from "./CXc0Doaq.js";
import {
  _ as gt,
  u as St
} from "./jIzoy62P.js";
import {
  _ as Et
} from "./3uhcJPaW.js";
import {
  _ as It
} from "./Cqscaa7U.js";
import {
  _ as kt
} from "./C9VPnCfu.js";
import {
  u as Re
} from "./CjZZqKuU.js";
import {
  u as Tt
} from "./D7RaRiPG.js";
import "./Cq7yj3Pf.js";
import "./iqlb1aSe.js";
const bt = {
    class: "memepad-intro"
  },
  $t = {
    class: "content"
  },
  Ct = {
    class: "title"
  },
  Mt = {
    class: "note"
  },
  wt = O({
    __name: "Intro",
    emits: ["start"],
    setup(m) {
      return (t, d) => {
        const a = he,
          n = vt;
        return l(), _("div", bt, [o("div", $t, [v(a, {
          name: "animations/Moon",
          class: "background"
        }), o("div", Ct, y(("t" in t ? t.t : e(C))("memepad.intro.title")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: d[0] || (d[0] = i => t.$emit("start"))
        }, y(("t" in t ? t.t : e(C))("memepad.intro.button_text")), 1)]), v(n, {
          "no-background": ""
        }, {
          default: B(() => [o("div", Mt, y(("t" in t ? t.t : e(C))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  Lt = R(wt, [
    ["__scopeId", "data-v-2da05feb"]
  ]),
  At = {
    class: "memepad-sheet"
  },
  Pt = {
    class: "title"
  },
  Nt = {
    class: "subtitle"
  },
  Dt = {
    class: "label"
  },
  Ot = {
    class: "actions"
  },
  Rt = {
    key: 0,
    class: "dont-show"
  },
  jt = {
    class: "checkbox"
  },
  Ut = O({
    __name: "Sheet",
    props: ue({
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
    emits: ue(["close", "readMoreClick"], ["update:modelValue"]),
    setup(m, {
      emit: t
    }) {
      const {
        $webApp: d
      } = ye(), a = m, n = t, i = Ae(m, "modelValue"), u = $(!a.dontShowStorageKey), c = $(!1), s = S({
        get: () => i.value && u.value,
        set: I => {
          i.value = I, c.value && a.dontShowStorageKey && d.storage.local.set(a.dontShowStorageKey, "true")
        }
      });
      (() => {
        a.dontShowStorageKey && (u.value = !d.storage.local.get(a.dontShowStorageKey))
      })();
      const k = () => n("readMoreClick"),
        L = () => {
          s.value = !1, n("close", {
            source: "modal"
          })
        },
        E = () => {
          s.value = !1, n("close", {
            source: "button"
          })
        };
      return (I, T) => {
        const P = he,
          g = Q,
          j = ht,
          f = qe,
          h = Xe;
        return l(), M(h, {
          "model-value": e(s),
          "onUpdate:modelValue": L
        }, {
          default: B(() => [o("div", At, [v(P, {
            name: I.lottie,
            size: 116
          }, null, 8, ["name"]), o("div", Pt, y(I.title), 1), o("div", null, [o("div", Nt, y(I.subtitle), 1), I.hideReadMore ? w("", !0) : (l(), _("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: k
          }, [o("span", Dt, y(("t" in I ? I.t : e(C))("base.read_more")), 1), v(g, {
            name: "arrow-right",
            class: "icon"
          })]))]), o("div", Ot, [I.dontShowStorageKey ? (l(), _("div", Rt, [o("div", jt, [v(j, {
            modelValue: e(c),
            "onUpdate:modelValue": T[0] || (T[0] = b => fe(c) ? c.value = b : null)
          }, null, 8, ["modelValue"]), o("span", {
            class: "label",
            onClick: T[1] || (T[1] = b => c.value = !e(c))
          }, y(("t" in I ? I.t : e(C))("memepad.sheet.dont_show_again_label")), 1)])])) : w("", !0), v(f, {
            label: I.buttonText,
            fill: "",
            size: e(ze).LARGE,
            onClick: E
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  Kt = R(Ut, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  we = "memepad-launch-jetton",
  Bt = O({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(m, {
      emit: t
    }) {
      const {
        $webApp: d
      } = ye(), a = t, n = $(!1), i = $(d.storage.local.get(we) ? "watched" : "unwatched"), u = () => {
        i.value === "watched" ? a("launch") : n.value = !0
      }, c = () => {
        d.storage.local.set(we, "true"), a("launch")
      };
      return (s, r) => {
        const k = Kt;
        return l(), _(Y, null, [o("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: u
        }, [r[1] || (r[1] = o("i", {
          class: "seedling"
        }, null, -1)), Ze(" " + y(("t" in s ? s.t : e(C))("memepad.explore.launch.button_text")), 1)]), v(k, {
          modelValue: e(n),
          "onUpdate:modelValue": r[0] || (r[0] = L => fe(n) ? n.value = L : null),
          title: ("t" in s ? s.t : e(C))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in s ? s.t : e(C))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in s ? s.t : e(C))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: c
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  Ft = R(Bt, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  Vt = ["src"],
  Ht = {
    key: 1,
    class: "user-avatar-empty"
  },
  xt = {
    class: "text"
  },
  Yt = {
    key: 0,
    class: "user-name"
  },
  Gt = {
    key: 1,
    class: "user-address"
  },
  Jt = {
    class: "action"
  },
  Wt = {
    class: "amount"
  },
  zt = {
    class: "ticker"
  },
  qt = {
    class: "seconds"
  },
  Xt = O({
    __name: "Event",
    props: {
      event: {}
    },
    setup(m) {
      const t = m,
        d = S(() => C(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        a = S(() => X().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.event.shortname
          },
          query: {
            from: x.ACTIONBAR
          }
        })),
        n = S(() => {
          const i = Pe(t.event.timestamp);
          return i.isDate ? i.label : `${i.label} ago`
        });
      return (i, u) => {
        const c = Q,
          s = Qe("I18nT"),
          r = Se,
          k = Ee;
        return l(), M(k, {
          to: e(a),
          class: J(["memepad-explore-event", `is-${i.event.type.toLowerCase()}`])
        }, {
          default: B(() => [i.event.user.avatarUrl ? (l(), _("img", {
            key: 0,
            src: i.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, Vt)) : (l(), _("div", Ht, [v(c, {
            name: "space-invader",
            class: "icon"
          })])), o("div", xt, [i.event.user.nickname ? (l(), _("span", Yt, y(i.event.user.nickname), 1)) : (l(), _("span", Gt, y(("sliceWalletAddress" in i ? i.sliceWalletAddress : e(et))(i.event.user.address)), 1)), o("span", Jt, y(e(d)), 1), i.event.amount ? (l(), M(s, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: B(() => [o("span", Wt, y(`${("formatTon"in i?i.formatTon:e(tt))(i.event.amount)} TON`), 1)]),
            _: 1
          })) : w("", !0)]), v(r, {
            src: e(ge)(i.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), o("span", zt, y(i.event.ticker), 1), o("span", qt, y(e(n)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  Zt = R(Xt, [
    ["__scopeId", "data-v-9a23721a"]
  ]),
  Qt = {
    class: "ticker"
  },
  es = {
    key: 0,
    class: "live"
  },
  ts = {
    class: "label"
  },
  ss = {
    key: 1,
    class: "stats"
  },
  as = {
    class: "holders-count"
  },
  ns = {
    class: "text"
  },
  os = {
    class: "transactions-count"
  },
  ls = {
    class: "text"
  },
  is = O({
    __name: "Card",
    props: {
      jetton: {},
      bclData: {},
      index: {}
    },
    setup(m) {
      const t = m,
        d = S(() => X().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: `spotlight-${t.index+1}`
          }
        }));
      return (a, n) => {
        const i = Se,
          u = Q,
          c = Ee;
        return l(), M(c, {
          to: e(d),
          class: "memepad-explore-spotlight-card"
        }, {
          default: B(() => [v(i, {
            src: e(ge)(a.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), o("span", Qt, y(a.jetton.ticker), 1), a.jetton.streamOnline ? (l(), _("div", es, [n[0] || (n[0] = o("div", {
            class: "dot"
          }, null, -1)), o("div", ts, y(("t" in a ? a.t : e(C))("memepad.explore.spotlight.live")), 1)])) : (l(), _("div", ss, [o("div", as, [v(u, {
            name: "personal",
            class: "icon"
          }), o("span", ns, y(a.jetton.stats.holdersCount ? ("formatCount" in a ? a.formatCount : e(W))(a.jetton.stats.holdersCount, {
            accuracy: 0
          }).full : "-"), 1)]), o("div", os, [v(u, {
            name: "transfer",
            class: "icon"
          }), o("span", ls, y(a.jetton.stats.transactionsCount ? ("formatCount" in a ? a.formatCount : e(W))(a.jetton.stats.transactionsCount, {
            accuracy: 0
          }).full : "-"), 1)])]))]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  cs = R(is, [
    ["__scopeId", "data-v-02ab3686"]
  ]),
  rs = {
    class: "inner"
  },
  ds = {
    class: "left"
  },
  us = {
    class: "mc"
  },
  ms = {
    key: 0,
    class: "diff"
  },
  ps = {
    key: 1,
    class: "percent"
  },
  _s = {
    class: "progress"
  },
  vs = {
    class: "direction-wrapper"
  },
  hs = {
    key: 0,
    class: "direction up"
  },
  ys = {
    key: 0,
    class: "direction down"
  },
  fs = O({
    __name: "Progress",
    props: {
      jetton: {},
      bclData: {},
      moveDirection: {},
      marketCap: {},
      tonCollectedPercent: {}
    },
    setup(m) {
      return (t, d) => {
        var n;
        const a = Q;
        return l(), _("div", {
          class: J(["memepad-explore-spotlight-progress", [t.moveDirection && `is-${(n=t.moveDirection)==null?void 0:n.direction}`, {
            "is-released": t.jetton.isReleased
          }]])
        }, [o("div", rs, [o("div", ds, [o("span", us, y(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (l(), _("span", ms, y(t.moveDirection.diffFormatted), 1)) : w("", !0)]), t.jetton.isReleased ? (l(), M(a, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (l(), _("span", ps, y(t.tonCollectedPercent ?? "-") + "% ", 1))]), o("div", _s, [o("div", {
          class: "line",
          style: ne({
            width: `${t.tonCollectedPercent}%`
          })
        }, [o("div", vs, [v(Te, {
          name: "direction-opacity"
        }, {
          default: B(() => {
            var i;
            return [((i = t.moveDirection) == null ? void 0 : i.direction) === "up" ? (l(), _("div", hs, [v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : w("", !0)]
          }),
          _: 1
        }), v(Te, {
          name: "direction-opacity"
        }, {
          default: B(() => {
            var i;
            return [((i = t.moveDirection) == null ? void 0 : i.direction) === "down" ? (l(), _("div", ys, [v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : w("", !0)]
          }),
          _: 1
        })])], 4)])], 2)
      }
    }
  }),
  gs = R(fs, [
    ["__scopeId", "data-v-cefc26d8"]
  ]),
  Ss = {
    class: "memepad-explore-spotlight"
  },
  Es = {
    class: "bg"
  },
  Is = ["src"],
  ks = ["src"],
  Ts = {
    class: "content"
  },
  bs = {
    class: "header"
  },
  $s = {
    class: "logo"
  },
  Cs = {
    class: "title"
  },
  Ms = ["onClick"],
  ws = ["src"],
  Ls = O({
    __name: "Spotlight",
    props: {
      list: {},
      bclData: {},
      getReactions: {
        type: Function
      }
    },
    setup(m) {
      const t = m,
        d = st(),
        a = $(0),
        n = S(() => t.list[a.value]),
        i = f => {
          document.querySelector(".memepad-explore-spotlight .list").scrollTo({
            left: f * window.innerWidth + (a.value > f ? -1 : 1),
            behavior: "smooth"
          })
        },
        u = $(null),
        c = Ne(() => {
          if (!u.value) return;
          const f = u.value.children[0].offsetWidth + 10,
            h = u.value.scrollLeft,
            b = Math.round(h / f);
          a.value = b
        }, 50).debouncedFunction,
        s = S(() => {
          const f = (() => {
              if (!(!n.value.stats.tonCollected || !t.bclData)) return new _e(n.value.stats.tonCollected.div(t.bclData.tonForDex).times(100).toFixed(0, _e.ROUND_DOWN))
            })(),
            h = n.value.stats.marketCap && W(n.value.stats.marketCap);
          return {
            id: n.value.id,
            shortname: n.value.shortname,
            tonCollectedPercent: f,
            marketCap: h
          }
        }),
        r = [],
        k = $();
      oe(s, (f, h) => {
        if (!f.marketCap || !h.marketCap || f.marketCap.full === h.marketCap.full || f.id !== h.id) {
          k.value = void 0;
          return
        }
        const b = f.marketCap.raw.minus(h.marketCap.raw),
          N = b.lt(0),
          U = W(b.abs(), {
            accuracy: 0
          }).full;
        U !== "0" && (k.value = {
          direction: N ? "down" : "up",
          diffFormatted: `${N?"-":"+"}${U}`
        }, r.push(setTimeout(() => k.value = void 0, 3e3)))
      });
      const L = S(() => {
          var f, h;
          return ((f = k.value) == null ? void 0 : f.direction) === "down" ? ee("memepad/spotlight-room-down", "svg") : ((h = k.value) == null ? void 0 : h.direction) === "up" ? ee("memepad/spotlight-room-up", "svg") : ee("memepad/spotlight-room", "svg")
        }),
        E = () => {
          r.push(setTimeout(() => {
            a.value === t.list.length - 1 ? i(0) : i(a.value + 1)
          }, 15e3))
        },
        {
          reactionsAnimations: I,
          ANIMATION_DURATION: T,
          restart: P
        } = j();
      oe(a, () => {
        r.forEach(clearTimeout), E(), P()
      }, {
        immediate: !0
      }), ie(() => {
        r.forEach(clearTimeout)
      });
      const g = S(() => n.value.isReleased ? ee("memepad/dex-bg", "gif") : ee("memepad/bg", "gif"));

      function j() {
        let b = 0;
        const N = [];
        let U;
        const D = $(),
          K = $([]),
          A = me(async () => await t.getReactions(s.value.shortname), re => {
            if (!D.value) {
              D.value = re;
              return
            }
            const {
              user: Ma,
              ...Be
            } = D.value;
            D.value = re;
            const {
              user: wa,
              ...Fe
            } = D.value, ke = Object.entries(Fe).reduce((V, [H, pe]) => {
              const Ye = Be[H],
                Ge = pe,
                Je = _e.max(Ge.minus(Ye), 0).toNumber();
              return {
                ...V,
                [H]: Je
              }
            }, {}), Ve = 5e3 / Object.values(ke).reduce((V, H) => V + H, 0), He = b, xe = V => ({
              id: at(),
              image: nt(V),
              position: {
                x: ve(0, 20) - 10,
                y: ve(0, 20) - 10
              },
              animationType: ve(1, 2),
              createdAt: Date.now()
            });
            Object.entries(ke).reduce((V, [H, pe]) => V.concat(Array(pe).fill(H)), []).sort(() => Math.random() - .5).forEach((V, H) => {
              N.push(setTimeout(() => {
                He === b && K.value.push(xe(V))
              }, Ve * H))
            })
          }, 5e3),
          F = async () => {
            await A.exec(), U = De(() => {
              K.value = K.value.filter(re => Date.now() - re.createdAt < 6e3)
            }, 2e3)
          }, ce = () => {
            A.destroy(), N.forEach(clearTimeout), U && clearInterval(U), D.value = void 0, K.value = []
          };
        oe(() => s.value.shortname, () => {
          b++, N.forEach(clearTimeout), ce(), F()
        }), F(), ie(ce);
        const Ke = () => {
          ce(), F()
        };
        return {
          reactionsAnimations: S(() => K.value),
          ANIMATION_DURATION: 6e3,
          restart: Ke
        }
      }
      return (f, h) => {
        var D, K, z;
        const b = he,
          N = cs,
          U = gs;
        return l(), _("div", Ss, [o("div", Es, [e(d).isLowEndDevice.value ? w("", !0) : (l(), _("img", {
          key: 0,
          src: e(g),
          alt: "Gif",
          class: J([{
            "is-version-1": ((D = e(s).tonCollectedPercent) == null ? void 0 : D.lte(30)) && !e(n).isReleased,
            "is-version-2": ((K = e(s).tonCollectedPercent) == null ? void 0 : K.gt(30)) && e(s).tonCollectedPercent.lte(60) && !e(n).isReleased,
            "is-version-3": ((z = e(s).tonCollectedPercent) == null ? void 0 : z.gt(60)) && !e(n).isReleased,
            "is-dex": e(n).isReleased
          }, "gif"])
        }, null, 10, Is)), o("img", {
          src: e(L),
          alt: "Gif",
          class: "room"
        }, null, 8, ks), h[2] || (h[2] = o("div", {
          class: "gradient"
        }, null, -1))]), o("div", Ts, [o("div", bs, [o("div", $s, [v(b, {
          name: "animations/Fire",
          size: 28
        }), o("div", Cs, y(("t" in f ? f.t : e(C))("memepad.explore.spotlight.title")), 1)]), t.list.length > 1 ? (l(), _("div", {
          key: 0,
          class: "controls",
          style: ne({
            gridTemplateColumns: `repeat(${t.list.length}, 1fr)`
          })
        }, [(l(!0), _(Y, null, le(t.list, (A, F) => (l(), _("div", {
          key: F + "" + e(a),
          class: J(["item", {
            active: e(a) > F,
            current: e(a) === F
          }]),
          onClick: ce => i(F)
        }, h[3] || (h[3] = [o("div", {
          class: "line"
        }, [o("div", {
          class: "fill"
        })], -1)]), 10, Ms))), 128))], 4)) : w("", !0)]), o("div", {
          ref_key: "listEl",
          ref: u,
          class: "list",
          onScroll: h[0] || (h[0] = (...A) => e(c) && e(c)(...A)),
          onTouchmove: h[1] || (h[1] = (...A) => e(c) && e(c)(...A))
        }, [(l(!0), _(Y, null, le(t.list, (A, F) => (l(), M(N, {
          key: A.id,
          index: F,
          jetton: A,
          "bcl-data": t.bclData,
          class: "item"
        }, null, 8, ["index", "jetton", "bcl-data"]))), 128))], 544), (l(), M(U, {
          key: e(n).id,
          jetton: e(n),
          "bcl-data": t.bclData,
          "move-direction": e(k),
          "market-cap": e(s).marketCap,
          "ton-collected-percent": e(s).tonCollectedPercent
        }, null, 8, ["jetton", "bcl-data", "move-direction", "market-cap", "ton-collected-percent"])), o("div", {
          class: "reactions",
          style: ne({
            "--animation-duration": `${e(T)}ms`
          })
        }, [(l(!0), _(Y, null, le(e(I), A => (l(), _("img", {
          key: A.id,
          src: A.image,
          class: J(`animation-${A.animationType}`),
          style: ne({
            "--x-offset": A.position.x + "px",
            "--y-offset": A.position.y + "px"
          })
        }, null, 14, ws))), 128))], 4)])])
      }
    }
  }),
  As = R(Ls, [
    ["__scopeId", "data-v-297761a1"]
  ]),
  Ps = {
    class: "inner"
  },
  Ns = {
    key: 0,
    class: "live"
  },
  Ds = O({
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
    setup(m) {
      return (t, d) => {
        const a = Se;
        return l(), _("div", {
          class: J(["memepad-jetton-image-collected-circle", {
            "is-released": t.isReleased
          }]),
          style: ne({
            "--collected-percent": t.collectedPercent
          })
        }, [o("div", Ps, [v(a, {
          src: t.image,
          size: 48,
          class: "image"
        }, null, 8, ["src"]), t.streamOnline ? (l(), _("div", Ns, "LIVE")) : w("", !0)])], 6)
      }
    }
  }),
  Os = R(Ds, [
    ["__scopeId", "data-v-abe4cfd5"]
  ]),
  Rs = {
    class: "center"
  },
  js = {
    class: "ticker"
  },
  Us = {
    key: 0,
    class: "base-stats"
  },
  Ks = {
    key: 0,
    class: "holders-count"
  },
  Bs = {
    class: "text"
  },
  Fs = {
    key: 1,
    class: "transactions-count"
  },
  Vs = {
    class: "text"
  },
  Hs = {
    key: 1,
    class: "my-tokens-stats"
  },
  xs = {
    class: "jettons"
  },
  Ys = {
    key: 0,
    class: "base-values"
  },
  Gs = {
    class: "market-cap"
  },
  Js = {
    class: "label"
  },
  Ws = {
    class: "value"
  },
  zs = {
    class: "lifetime"
  },
  qs = {
    class: "text"
  },
  Xs = {
    key: 1,
    class: "my-tokens-values"
  },
  Zs = {
    class: "fiat"
  },
  Qs = O({
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
    setup(m) {
      const t = m,
        d = S(() => X().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: t.analyticsSource
          }
        })),
        a = S(() => t.jetton.stats.tonCollected && t.bclData && t.jetton.stats.tonCollected.div(t.bclData.tonForDex).times(100).toNumber()),
        n = r => {
          const k = r.decimalPlaces();
          return Math.max(Math.min(1, k), 0)
        },
        i = S(() => Pe(t.jetton.releaseTimestamp).label),
        u = S(() => t.jetton.ownedAmount ? be(t.jetton.ownedAmount, t.jetton.ticker).frontend : "-"),
        c = S(() => t.jetton.ownedAmountUSD ? be(t.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        s = S(() => t.jetton.pnlPercent ? ft(t.jetton.pnlPercent) : void 0);
      return (r, k) => {
        const L = Os,
          E = Q,
          I = Ee;
        return l(), M(I, {
          to: e(d),
          class: "memepad-jetton-list-item"
        }, {
          default: B(() => {
            var T;
            return [v(L, {
              image: e(ge)(r.jetton.iconFileKey),
              "collected-percent": e(a),
              "is-released": r.jetton.isReleased,
              "stream-online": r.jetton.streamOnline
            }, null, 8, ["image", "collected-percent", "is-released", "stream-online"]), o("div", Rs, [o("div", js, y(r.jetton.ticker), 1), r.mode === e(G).BASE ? (l(), _("div", Us, [r.jetton.stats.holdersCount !== void 0 ? (l(), _("div", Ks, [v(E, {
              name: "personal",
              class: "icon"
            }), o("span", Bs, y(("formatCount" in r ? r.formatCount : e(W))(r.jetton.stats.holdersCount, {
              accuracy: 0
            }).full), 1)])) : w("", !0), r.jetton.stats.transactionsCount !== void 0 ? (l(), _("div", Fs, [v(E, {
              name: "transfer",
              class: "icon"
            }), o("span", Vs, y(("formatCount" in r ? r.formatCount : e(W))(r.jetton.stats.transactionsCount, {
              accuracy: 0
            }).full), 1)])) : w("", !0)])) : r.mode === e(G).MY_TOKENS ? (l(), _("div", Hs, [o("div", xs, y(e(u)), 1)])) : w("", !0)]), r.mode === e(G).BASE ? (l(), _("div", Ys, [o("div", Gs, [o("span", Js, y(("t" in r ? r.t : e(C))("memepad.jetton.stats.market_cap")), 1), o("span", Ws, y(r.jetton.stats.marketCap ? `$${("formatCount"in r?r.formatCount:e(W))(r.jetton.stats.marketCap,{accuracy:n(r.jetton.stats.marketCap)}).full}` : "-"), 1)]), o("div", zs, [v(E, {
              name: "environment-leaf",
              class: "icon"
            }), o("span", qs, y(e(i)), 1)])])) : r.mode === e(G).MY_TOKENS ? (l(), _("div", Xs, [o("div", Zs, y(e(c)), 1), o("div", {
              class: J(["pnl", e(s) && e(s).cls])
            }, y(((T = e(s)) == null ? void 0 : T.formatted) ?? "-"), 3)])) : w("", !0)]
          }),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  ea = R(Qs, [
    ["__scopeId", "data-v-557ac54f"]
  ]),
  ta = O({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      bclData: {},
      mode: {}
    },
    setup(m) {
      return (t, d) => {
        const a = ea;
        return l(), M(ot, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: B(() => [(l(!0), _(Y, null, le(t.items, n => (l(), M(a, {
            key: n.shortname,
            jetton: n,
            "analytics-source": t.analyticsSource,
            "bcl-data": t.bclData,
            mode: t.mode
          }, null, 8, ["jetton", "analytics-source", "bcl-data", "mode"]))), 128))]),
          _: 1
        })
      }
    }
  }),
  je = R(ta, [
    ["__scopeId", "data-v-e4070fed"]
  ]),
  sa = {
    class: "memepad-explore-panel-list"
  },
  aa = {
    class: "top"
  },
  na = {
    class: "search-btn-wrapper"
  },
  oa = {
    key: 0,
    class: "connect"
  },
  la = {
    class: "label"
  },
  ia = {
    key: 1,
    class: "connect"
  },
  ca = {
    key: 1,
    class: "empty-state"
  },
  ra = {
    class: "label"
  },
  da = O({
    __name: "PanelList",
    props: ue({
      items: {},
      bclData: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ue(["search", "scrolled"], ["update:modelValue"]),
    setup(m) {
      const t = Ae(m, "modelValue"),
        d = Oe(),
        a = lt(),
        n = [{
          value: p.FRESH,
          pingDot: !0
        }, {
          value: p.HOT
        }, {
          value: p.BLUMING
        }, {
          value: p.BLUMED
        }, {
          value: p.MCAP
        }, {
          value: p.MY_TOKENS
        }].map(c => {
          const s = {
            [p.FRESH]: "New",
            [p.HOT]: "Hot",
            [p.BLUMING]: "Bluming",
            [p.BLUMED]: "Listed",
            [p.MCAP]: "MCap",
            [p.MY_TOKENS]: "My tokens"
          };
          return {
            ...c,
            label: s[c.value]
          }
        }),
        i = S(() => {
          switch (t.value) {
            case p.FRESH:
              return x.FRESH;
            case p.BLUMING:
              return x.BLUMING;
            case p.HOT:
              return x.HOT;
            case p.MY_TOKENS:
              return x.POSITIONS;
            case p.MCAP:
              return x.MCAP;
            case p.BLUMED:
              return x.BLUMED
          }
        }),
        u = S(() => t.value === p.MY_TOKENS ? G.MY_TOKENS : G.BASE);
      return (c, s) => {
        const r = Q,
          k = yt,
          L = ct,
          E = je,
          I = gt,
          T = Et;
        return l(), _("div", sa, [o("div", aa, [v(k, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = P => t.value = P),
          items: e(n)
        }, {
          after: B(() => [o("div", na, [o("button", {
            type: "button",
            class: "search reset",
            onClick: s[0] || (s[0] = P => c.$emit("search"))
          }, [v(r, {
            name: "search",
            class: "icon"
          })])])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (e(d).wallet.value.status === "must_reconnect" || e(d).wallet.value.status === "not_found") && t.value === e(p).MY_TOKENS ? (l(), _("div", oa, [o("div", la, y(("t" in c ? c.t : e(C))("memepad.explore.my_tokens.connect_text")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: s[2] || (s[2] = P => e(a).runConnectionFlow())
        }, y(("t" in c ? c.t : e(C))("wallet.connect.btn")), 1)])) : e(d).wallet.value.status === "loading" && t.value === e(p).MY_TOKENS ? (l(), _("div", ia, [v(L, {
          type: e(it).LIGHT
        }, null, 8, ["type"])])) : c.items ? (l(), M(I, {
          key: 2,
          onEnd: s[3] || (s[3] = P => c.$emit("scrolled"))
        }, {
          default: B(() => [c.items.length ? (l(), M(E, {
            key: t.value,
            items: c.items,
            "analytics-source": e(i),
            "bcl-data": c.bclData,
            mode: e(u)
          }, null, 8, ["items", "analytics-source", "bcl-data", "mode"])) : t.value === e(p).MY_TOKENS ? (l(), _("div", ca, [v(r, {
            name: "add-plus-circle",
            class: "icon"
          }), o("div", ra, y(("t" in c ? c.t : e(C))("memepad.explore.my_tokens.empty_text")), 1)])) : w("", !0)]),
          _: 1
        })) : (l(), _(Y, {
          key: 3
        }, le(6, P => o("div", {
          key: P,
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
  ua = R(da, [
    ["__scopeId", "data-v-92e56a6d"]
  ]),
  ma = () => {
    const m = de(() => "", "$nnokZ0cAmU"),
      t = de(() => !1, "$dxYpAQPdtd"),
      d = de("$pDWqkemNGG"),
      a = rt(async c => (t.value = !0, {
        res: await Z.getMemepadSearch(c),
        search: c
      }), ({
        res: c,
        search: s
      }) => {
        t.value = !1, m.value = s, d.value = c.err ? void 0 : c.data
      });
    return {
      _flow: {
        init: () => {},
        destroy: () => {
          m.value = "", t.value = !1, d.value = void 0
        }
      },
      search: c => {
        c !== m.value && (c === "" ? (t.value = !1, d.value = void 0, m.value = "") : a(c))
      },
      searchLine: S(() => m.value),
      data: S(() => d.value),
      isSearching: S(() => t.value)
    }
  },
  pa = {
    class: "memepad-search page"
  },
  _a = {
    key: 0,
    class: "empty"
  },
  va = O({
    __name: "Search",
    emits: ["close"],
    setup(m, {
      emit: t
    }) {
      const d = t,
        a = $(),
        n = ma();
      n._flow.init(), ie(() => n._flow.destroy());
      const {
        bclData: i
      } = Re(), u = $(!1), c = $(""), s = [];
      (() => {
        s.push(setTimeout(() => {
          u.value = !0
        }, 400))
      })(), ie(() => {
        s.forEach(E => clearTimeout(E))
      });
      const {
        debouncedFunction: k
      } = Ne(n.search, 600);
      return oe(c, k), Ie().memepad.memepadSearchOpen(), Tt(async () => {
        var E;
        (E = a.value) == null || E.blur(), await dt(), await ut(0), d("close")
      }), (E, I) => {
        const T = kt,
          P = je;
        return l(), _("div", pa, [v(T, {
          ref_key: "searchWithTitleComponent",
          ref: a,
          modelValue: e(c),
          "onUpdate:modelValue": I[0] || (I[0] = g => fe(c) ? c.value = g : null),
          placeholder: ("t" in E ? E.t : e(C))("memepad.search.input_placeholder"),
          activated: e(u),
          autofocus: "",
          "is-loading": e(n).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), e(n).data.value ? (l(), _(Y, {
          key: 0
        }, [e(n).data.value.length === 0 ? (l(), _("div", _a, y(("t" in E ? E.t : e(C))("memepad.search.empty_text")), 1)) : (l(), M(P, {
          key: 1,
          items: e(n).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in E ? E.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : e(x)).SEARCH,
          "bcl-data": e(i)
        }, null, 8, ["items", "analytics-source", "bcl-data"]))], 64)) : w("", !0)])
      }
    }
  }),
  ha = R(va, [
    ["__scopeId", "data-v-905a8f19"]
  ]),
  Ue = (m, t, d) => {
    const a = Math.max(0, m.length - 1),
      n = $([...m].reverse()),
      i = $(a),
      u = () => {
        i.value < n.value.length - 1 && i.value++
      },
      c = S(() => {
        const T = Math.max(0, i.value - d + 1),
          P = Math.min(i.value + 1, n.value.length);
        return [...n.value].slice(T, P).reverse()
      }),
      s = S(() => [...n.value].reverse()[i.value]);
    let r;
    return {
      init: () => {
        clearInterval(r), r = De(u, t)
      },
      destroy: () => {
        n.value = [], i.value = 0, clearInterval(r)
      },
      addItems: T => {
        n.value.push(...[...T].reverse())
      },
      setItems: T => {
        n.value = T, i.value = T.length - 1
      },
      items: S(() => n.value),
      appearedItems: c,
      currentAppearedItem: s
    }
  },
  ya = () => {
    const m = mt(),
      t = Oe(),
      d = Ie();
    let a;
    (g => {
      g.LIST = "list", g.STEP_LIST = "step-list", g.PAGINATION_LIST = "pagination-list"
    })(a || (a = {}));
    const n = {
        [p.FRESH]: "step-list",
        [p.BLUMING]: "pagination-list",
        [p.BLUMED]: "pagination-list",
        [p.MCAP]: "pagination-list",
        [p.MY_TOKENS]: "list",
        [p.HOT]: "list"
      },
      i = async ({
        type: g,
        pageToken: j
      }) => {
        if (g === p.MY_TOKENS) {
          const U = t.wallet.value.status === "connected" ? t.wallet.value.address.default : void 0;
          if (!U) return Ce({
            jettons: [],
            nextPageToken: ""
          });
          const D = await Z.getMemepadJettonsPositions(U);
          return $e(D) ? Ce({
            jettons: D.data.jettons,
            nextPageToken: ""
          }) : D
        }
        const f = {
            [p.FRESH]: se.CREATED_AT,
            [p.HOT]: se.HOT,
            [p.BLUMING]: se.NEAREST_TO_LISTING,
            [p.MCAP]: se.MARKET_CAP,
            [p.BLUMED]: se.PUBLISHED_AT
          },
          h = {
            [p.FRESH]: ae.EXCLUDE,
            [p.HOT]: ae.INCLUDE,
            [p.BLUMING]: ae.INCLUDE_LISTED,
            [p.MCAP]: ae.INCLUDE,
            [p.BLUMED]: ae.ONLY
          },
          b = f[g],
          N = h[g];
        return await Z.getMemepadJettonsSection(b, N, j)
      }, u = de(() => p.FRESH, "$SbGDXlzgsy"), c = () => {
        const g = u.value;
        switch (n[g]) {
          case "step-list":
            return {
              type: "step-list", stepList: void 0, interval: me(async () => await i({
                type: g
              }), f => {
                var b;
                if (((b = s.value) == null ? void 0 : b.type) !== "step-list" || g !== u.value) return;
                const h = s.value.stepList;
                if (!h) s.value.stepList = Ue(f.jettons, 1e3, 60), s.value.stepList.init();
                else {
                  const N = h,
                    U = f.jettons.filter(K => !N.items.some(z => z.id === K.id)),
                    D = N.items.map(K => f.jettons.find(A => A.id === K.id) || K);
                  N.setItems(D), N.addItems(U)
                }
              }, 5e3)
            };
          case "pagination-list":
            return {
              type: "pagination-list", pagination: St(async h => {
                const b = await i({
                  type: g,
                  pageToken: h
                });
                if (!$e(b)) throw te("Failed to get list");
                return {
                  items: b.data.jettons,
                  nextPageToken: b.data.nextPageToken ?? ""
                }
              })
            };
          case "list":
            return {
              type: "list", data: void 0, interval: me(async () => await i({
                type: g
              }), f => {
                var h;
                ((h = s.value) == null ? void 0 : h.type) !== "list" || g !== u.value || (s.value.data = f.jettons)
              }, 5e3)
            };
          default:
            throw te("Unknown type")
        }
      }, s = $(c()), r = () => {
        var g;
        if (s.value) switch (s.value.type) {
          case "list":
            s.value.interval.destroy();
            break;
          case "step-list":
            (g = s.value.stepList) == null || g.destroy(), s.value.interval.destroy();
            break;
          case "pagination-list":
            break;
          default:
            throw s.value, te("Unknown type")
        }
      }, k = async () => {
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
            throw te("Unknown type")
        }
      };
    let L;
    const E = async () => {
      await k(), L = oe(u, async g => {
        r(), await k();
        const j = (() => {
          switch (g) {
            case p.FRESH:
              return q.FRESH;
            case p.BLUMING:
              return q.BLUMING;
            case p.HOT:
              return q.HOT;
            case p.MY_TOKENS:
              return q.POSITIONS;
            case p.MCAP:
              return q.MCAP;
            case p.BLUMED:
              return q.BLUMED
          }
        })();
        d.memepad.memepadOpenPanelListTab({
          source: j
        })
      })
    }, I = () => {
      r(), L == null || L()
    };
    m.onConnected(() => {
      u.value === p.MY_TOKENS && (r(), k())
    });
    const T = S(() => {
      var j;
      if (!s.value) return;
      switch (s.value.type) {
        case "step-list":
          return (j = s.value.stepList) == null ? void 0 : j.appearedItems;
        case "pagination-list":
          return s.value.pagination.isInitialized ? s.value.pagination.data : void 0;
        case "list":
          return s.value.data;
        default:
          throw te("Unknown type")
      }
    });
    return {
      init: E,
      destroy: I,
      onPaginationLoad: async () => {
        s.value.type === "pagination-list" && await s.value.pagination.load()
      },
      activeTab: u,
      items: T
    }
  },
  fa = () => {
    const m = $(),
      t = S(() => {
        var u;
        return (u = m.value) == null ? void 0 : u.stepList.currentAppearedItem
      }),
      d = u => {
        m.value || (m.value = {
          stepList: Ue([], 1e3, 15)
        }, m.value.stepList.init()), m.value.stepList.addItems(u)
      },
      a = $(pt(async () => await Z.getMemepadExploreEvents(), u => {
        d(u.transactions)
      }, 9e3));
    return {
      init: async () => {
        await a.value.exec()
      },
      destroy: () => {
        var u;
        a.value.destroy(), (u = m.value) == null || u.stepList.destroy(), m.value = void 0
      },
      eventAppearedItem: S(() => t.value)
    }
  },
  ga = () => {
    const m = $(),
      d = me(async () => _t(await Z.getMemepadExploreSpotlight()), u => m.value = u.jettons, 5e3);
    return {
      init: async () => {
        await d.exec()
      },
      destroy: () => {
        d.destroy()
      },
      getReactions: u => Z.getMemepadJettonReactions(u),
      spotlight: S(() => m.value)
    }
  },
  Sa = () => {
    const m = fa(),
      t = ga(),
      d = ya();
    return {
      _flow: {
        init: async () => {
          await Promise.all([m.init(), t.init(), d.init()])
        },
        destroy: () => {
          m.destroy(), t.destroy(), d.destroy()
        }
      },
      events: {
        eventAppearedItem: m.eventAppearedItem
      },
      spotlight: {
        items: t.spotlight,
        getReactions: t.getReactions
      },
      panelList: {
        activeTab: d.activeTab,
        items: d.items,
        onPaginationLoad: d.onPaginationLoad
      }
    }
  },
  Ea = {
    key: 0,
    class: "memepad-explore"
  },
  Ia = {
    class: "header"
  },
  ka = {
    class: "title"
  },
  Ta = O({
    __name: "Index",
    setup(m) {
      const {
        events: t,
        spotlight: d,
        panelList: a,
        _flow: {
          init: n,
          destroy: i
        }
      } = Sa(), {
        bclData: u
      } = Re(), c = $(!1);
      n().then(() => {
        c.value = !0
      }), ie(() => {
        i()
      });
      const s = $(!!Me().query.search),
        r = () => X().push({
          name: "memepad-new"
        }),
        k = () => {
          X().push({
            query: {
              search: "1"
            }
          }), s.value = !0
        },
        L = () => {
          s.value = !1, X().push({
            query: {
              search: void 0
            }
          }), Me().meta.back = void 0
        };
      return (E, I) => {
        var b;
        const T = Ft,
          P = Zt,
          g = As,
          j = ua,
          f = It,
          h = ha;
        return l(), _(Y, null, [e(c) ? (l(), _("div", Ea, [o("div", Ia, [o("div", ka, y(("t" in E ? E.t : e(C))("memepad.explore.title")), 1), v(T, {
          onLaunch: r
        })]), e(t).eventAppearedItem.value ? (l(), M(P, {
          key: 0,
          event: e(t).eventAppearedItem.value,
          class: "event"
        }, null, 8, ["event"])) : w("", !0), (b = e(d).items.value) != null && b.length ? (l(), M(g, {
          key: 1,
          list: e(d).items.value,
          "bcl-data": e(u),
          "get-reactions": e(d).getReactions
        }, null, 8, ["list", "bcl-data", "get-reactions"])) : w("", !0), v(j, {
          modelValue: e(a).activeTab.value,
          "onUpdate:modelValue": I[0] || (I[0] = N => e(a).activeTab.value = N),
          items: e(a).items.value,
          "bcl-data": e(u),
          onSearch: k,
          onScrolled: e(a).onPaginationLoad
        }, null, 8, ["modelValue", "items", "bcl-data", "onScrolled"])])) : (l(), M(f, {
          key: 1
        })), e(s) ? (l(), M(h, {
          key: 2,
          onClose: L
        })) : w("", !0)], 64)
      }
    }
  }),
  ba = R(Ta, [
    ["__scopeId", "data-v-de510fa9"]
  ]),
  $a = {
    class: "memepad-index page"
  },
  Le = "memepad-intro",
  Ca = O({
    __name: "index",
    setup(m) {
      const {
        $webApp: t
      } = ye(), d = $(t.storage.local.get(Le) ? "explore" : "intro"), a = () => {
        d.value = "explore", t.storage.local.set(Le, "true")
      };
      return Ie().memepad.memepadExploreOpen(), (i, u) => {
        const c = We,
          s = Lt,
          r = ba;
        return l(), _("div", $a, [v(c), e(d) === "intro" ? (l(), M(s, {
          key: 0,
          onStart: a
        })) : e(d) === "explore" ? (l(), M(r, {
          key: 1
        })) : w("", !0)])
      }
    }
  }),
  xa = R(Ca, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  xa as
  default
};