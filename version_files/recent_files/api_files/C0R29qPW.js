import {
  _ as We
} from "./CL_Pnd-8.js";
import {
  d as D,
  o as l,
  c as _,
  a as o,
  b as v,
  t as f,
  e,
  z as $,
  H as B,
  ae as he,
  f as O,
  ao as ue,
  h as fe,
  ap as Ae,
  K as M,
  j as S,
  G as C,
  D as L,
  p as ye,
  V as ze,
  _ as te,
  x as qe,
  aK as Xe,
  m as Ze,
  F as Y,
  ad as Q,
  aL as x,
  aM as Pe,
  aN as Qe,
  aO as et,
  aP as tt,
  aQ as ge,
  n as W,
  aR as Se,
  I as Ee,
  aS as z,
  aw as ne,
  aa as ke,
  Z as st,
  T as _e,
  P as oe,
  an as se,
  U as ie,
  R as me,
  q as le,
  ac as Ne,
  aB as Re,
  al as at,
  aT as nt,
  a6 as ve,
  aU as J,
  E as be,
  aV as ot,
  O as De,
  as as lt,
  aW as u,
  aX as it,
  aY as ct,
  aZ as de,
  a_ as rt,
  X as ee,
  a0 as Ie,
  a$ as dt,
  b0 as ut,
  b1 as mt,
  W as ae,
  b2 as pt,
  a2 as Me,
  b3 as G,
  a1 as _t,
  Y as $e,
  b4 as X,
  b5 as Z,
  Q as Ce
} from "./7B743EeA.js";
import {
  _ as vt
} from "./CT7akwlJ.js";
import {
  _ as ht,
  a as ft
} from "./BN0uwcad.js";
import {
  g as yt
} from "./BwA2G8wt.js";
import {
  _ as gt,
  u as St
} from "./D3g2MKzo.js";
import {
  _ as Et
} from "./Cdr4DyLS.js";
import {
  _ as It
} from "./HKUPTPvZ.js";
import {
  _ as Tt
} from "./BZmD6gWw.js";
import {
  u as Oe
} from "./DheEKTOh.js";
import {
  u as kt
} from "./Co3RAnXi.js";
import "./D210eCmV.js";
import "./BqlQh3w0.js";
const bt = {
    class: "memepad-intro"
  },
  Mt = {
    class: "content"
  },
  $t = {
    class: "title"
  },
  Ct = {
    class: "note"
  },
  Lt = D({
    __name: "Intro",
    emits: ["start"],
    setup(p) {
      return (t, d) => {
        const a = he,
          n = vt;
        return l(), _("div", bt, [o("div", Mt, [v(a, {
          name: "animations/Moon",
          class: "background"
        }), o("div", $t, f(("t" in t ? t.t : e($))("memepad.intro.title")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: d[0] || (d[0] = i => t.$emit("start"))
        }, f(("t" in t ? t.t : e($))("memepad.intro.button_text")), 1)]), v(n, {
          "no-background": ""
        }, {
          default: B(() => [o("div", Ct, f(("t" in t ? t.t : e($))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  wt = O(Lt, [
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
  Rt = {
    class: "label"
  },
  Dt = {
    class: "actions"
  },
  Ot = {
    key: 0,
    class: "dont-show"
  },
  jt = {
    class: "checkbox"
  },
  Ut = D({
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
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: d
      } = fe(), a = p, n = t, i = Ae(p, "modelValue"), m = M(!a.dontShowStorageKey), c = M(!1), s = S({
        get: () => i.value && m.value,
        set: I => {
          i.value = I, c.value && a.dontShowStorageKey && d.storage.local.set(a.dontShowStorageKey, "true")
        }
      });
      (() => {
        a.dontShowStorageKey && (m.value = !d.storage.local.get(a.dontShowStorageKey))
      })();
      const T = () => n("readMoreClick"),
        w = () => {
          s.value = !1, n("close", {
            source: "modal"
          })
        },
        E = () => {
          s.value = !1, n("close", {
            source: "button"
          })
        };
      return (I, k) => {
        const P = he,
          g = te,
          j = ht,
          y = qe,
          h = Xe;
        return l(), C(h, {
          "model-value": e(s),
          "onUpdate:modelValue": w
        }, {
          default: B(() => [o("div", At, [v(P, {
            name: I.lottie,
            size: 116
          }, null, 8, ["name"]), o("div", Pt, f(I.title), 1), o("div", null, [o("div", Nt, f(I.subtitle), 1), I.hideReadMore ? L("", !0) : (l(), _("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: T
          }, [o("span", Rt, f(("t" in I ? I.t : e($))("base.read_more")), 1), v(g, {
            name: "arrow-right",
            class: "icon"
          })]))]), o("div", Dt, [I.dontShowStorageKey ? (l(), _("div", Ot, [o("div", jt, [v(j, {
            modelValue: e(c),
            "onUpdate:modelValue": k[0] || (k[0] = b => ye(c) ? c.value = b : null)
          }, null, 8, ["modelValue"]), o("span", {
            class: "label",
            onClick: k[1] || (k[1] = b => c.value = !e(c))
          }, f(("t" in I ? I.t : e($))("memepad.sheet.dont_show_again_label")), 1)])])) : L("", !0), v(y, {
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
  Kt = O(Ut, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  Le = "memepad-launch-jetton",
  Bt = D({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: d
      } = fe(), a = t, n = M(!1), i = M(d.storage.local.get(Le) ? "watched" : "unwatched"), m = () => {
        i.value === "watched" ? a("launch") : n.value = !0
      }, c = () => {
        d.storage.local.set(Le, "true"), a("launch")
      };
      return (s, r) => {
        const T = Kt;
        return l(), _(Y, null, [o("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: m
        }, [r[1] || (r[1] = o("i", {
          class: "seedling"
        }, null, -1)), Ze(" " + f(("t" in s ? s.t : e($))("memepad.explore.launch.button_text")), 1)]), v(T, {
          modelValue: e(n),
          "onUpdate:modelValue": r[0] || (r[0] = w => ye(n) ? n.value = w : null),
          title: ("t" in s ? s.t : e($))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in s ? s.t : e($))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in s ? s.t : e($))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: c
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  Vt = O(Bt, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  Ft = ["src"],
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
  Xt = D({
    __name: "Event",
    props: {
      event: {}
    },
    setup(p) {
      const t = p,
        d = S(() => $(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        a = S(() => Q().resolve({
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
      return (i, m) => {
        const c = te,
          s = Qe("I18nT"),
          r = Se,
          T = Ee;
        return l(), C(T, {
          to: e(a),
          class: W(["memepad-explore-event", `is-${i.event.type.toLowerCase()}`])
        }, {
          default: B(() => [i.event.user.avatarUrl ? (l(), _("img", {
            key: 0,
            src: i.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, Ft)) : (l(), _("div", Ht, [v(c, {
            name: "space-invader",
            class: "icon"
          })])), o("div", xt, [i.event.user.nickname ? (l(), _("span", Yt, f(i.event.user.nickname), 1)) : (l(), _("span", Gt, f(("sliceWalletAddress" in i ? i.sliceWalletAddress : e(et))(i.event.user.address)), 1)), o("span", Jt, f(e(d)), 1), i.event.amount ? (l(), C(s, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: B(() => [o("span", Wt, f(`${("formatTon"in i?i.formatTon:e(tt))(i.event.amount)} TON`), 1)]),
            _: 1
          })) : L("", !0)]), v(r, {
            src: e(ge)(i.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), o("span", zt, f(i.event.ticker), 1), o("span", qt, f(e(n)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  Zt = O(Xt, [
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
  is = D({
    __name: "Card",
    props: {
      jetton: {},
      bclData: {},
      index: {}
    },
    setup(p) {
      const t = p,
        d = S(() => Q().resolve({
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
          m = te,
          c = Ee;
        return l(), C(c, {
          to: e(d),
          class: "memepad-explore-spotlight-card"
        }, {
          default: B(() => [v(i, {
            src: e(ge)(a.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), o("span", Qt, f(a.jetton.ticker), 1), a.jetton.streamOnline ? (l(), _("div", es, [n[0] || (n[0] = o("div", {
            class: "dot"
          }, null, -1)), o("div", ts, f(("t" in a ? a.t : e($))("memepad.explore.spotlight.live")), 1)])) : (l(), _("div", ss, [o("div", as, [v(m, {
            name: "personal",
            class: "icon"
          }), o("span", ns, f(a.jetton.stats.holdersCount ? ("formatCount" in a ? a.formatCount : e(z))(a.jetton.stats.holdersCount, {
            accuracy: 0
          }).full : "-"), 1)]), o("div", os, [v(m, {
            name: "transfer",
            class: "icon"
          }), o("span", ls, f(a.jetton.stats.transactionsCount ? ("formatCount" in a ? a.formatCount : e(z))(a.jetton.stats.transactionsCount, {
            accuracy: 0
          }).full : "-"), 1)])]))]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  cs = O(is, [
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
  fs = {
    key: 0,
    class: "direction down"
  },
  ys = D({
    __name: "Progress",
    props: {
      jetton: {},
      bclData: {},
      moveDirection: {},
      marketCap: {},
      tonCollectedPercent: {}
    },
    setup(p) {
      return (t, d) => {
        var n;
        const a = te;
        return l(), _("div", {
          class: W(["memepad-explore-spotlight-progress", [t.moveDirection && `is-${(n=t.moveDirection)==null?void 0:n.direction}`, {
            "is-released": t.jetton.isReleased
          }]])
        }, [o("div", rs, [o("div", ds, [o("span", us, f(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (l(), _("span", ms, f(t.moveDirection.diffFormatted), 1)) : L("", !0)]), t.jetton.isReleased ? (l(), C(a, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (l(), _("span", ps, f(t.tonCollectedPercent ?? "-") + "% ", 1))]), o("div", _s, [o("div", {
          class: "line",
          style: ne({
            width: `${t.tonCollectedPercent}%`
          })
        }, [o("div", vs, [v(ke, {
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
            })])) : L("", !0)]
          }),
          _: 1
        }), v(ke, {
          name: "direction-opacity"
        }, {
          default: B(() => {
            var i;
            return [((i = t.moveDirection) == null ? void 0 : i.direction) === "down" ? (l(), _("div", fs, [v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : L("", !0)]
          }),
          _: 1
        })])], 4)])], 2)
      }
    }
  }),
  gs = O(ys, [
    ["__scopeId", "data-v-cefc26d8"]
  ]),
  Ss = {
    class: "memepad-explore-spotlight"
  },
  Es = {
    class: "bg"
  },
  Is = ["src"],
  Ts = ["src"],
  ks = {
    class: "content"
  },
  bs = {
    class: "header"
  },
  Ms = {
    class: "logo"
  },
  $s = {
    class: "title"
  },
  Cs = ["onClick"],
  Ls = ["src"],
  ws = D({
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
        d = st(),
        a = M(0),
        n = S(() => t.list[a.value]),
        i = y => {
          document.querySelector(".memepad-explore-spotlight .list").scrollTo({
            left: y * window.innerWidth + (a.value > y ? -1 : 1),
            behavior: "smooth"
          })
        },
        m = M(null),
        c = Ne(() => {
          if (!m.value) return;
          const y = m.value.children[0].offsetWidth + 10,
            h = m.value.scrollLeft,
            b = Math.round(h / y);
          a.value = b
        }, 50).debouncedFunction,
        s = S(() => {
          const y = (() => {
              if (!(!n.value.stats.tonCollected || !t.bclData)) return new _e(n.value.stats.tonCollected.div(t.bclData.tonForDex).times(100).toFixed(0, _e.ROUND_DOWN))
            })(),
            h = n.value.stats.marketCap && z(n.value.stats.marketCap);
          return {
            id: n.value.id,
            shortname: n.value.shortname,
            tonCollectedPercent: y,
            marketCap: h
          }
        }),
        r = [],
        T = M();
      oe(s, (y, h) => {
        if (!y.marketCap || !h.marketCap || y.marketCap.full === h.marketCap.full || y.id !== h.id) {
          T.value = void 0;
          return
        }
        const b = y.marketCap.raw.minus(h.marketCap.raw),
          N = b.lt(0),
          U = z(b.abs(), {
            accuracy: 0
          }).full;
        U !== "0" && (T.value = {
          direction: N ? "down" : "up",
          diffFormatted: `${N?"-":"+"}${U}`
        }, r.push(setTimeout(() => T.value = void 0, 3e3)))
      });
      const w = S(() => {
          var y, h;
          return ((y = T.value) == null ? void 0 : y.direction) === "down" ? se("memepad/spotlight-room-down", "svg") : ((h = T.value) == null ? void 0 : h.direction) === "up" ? se("memepad/spotlight-room-up", "svg") : se("memepad/spotlight-room", "svg")
        }),
        E = () => {
          r.push(setTimeout(() => {
            a.value === t.list.length - 1 ? i(0) : i(a.value + 1)
          }, 15e3))
        },
        {
          reactionsAnimations: I,
          ANIMATION_DURATION: k,
          restart: P
        } = j();
      oe(a, () => {
        r.forEach(clearTimeout), E(), P()
      }, {
        immediate: !0
      }), ie(() => {
        r.forEach(clearTimeout)
      });
      const g = S(() => n.value.isReleased ? se("memepad/dex-bg", "gif") : se("memepad/bg", "gif"));

      function j() {
        let b = 0;
        const N = [];
        let U;
        const R = M(),
          K = M([]),
          A = me(async () => await t.getReactions(s.value.shortname), re => {
            if (!R.value) {
              R.value = re;
              return
            }
            const {
              user: Ca,
              ...Be
            } = R.value;
            R.value = re;
            const {
              user: La,
              ...Ve
            } = R.value, Te = Object.entries(Ve).reduce((F, [H, pe]) => {
              const Ye = Be[H],
                Ge = pe,
                Je = _e.max(Ge.minus(Ye), 0).toNumber();
              return {
                ...F,
                [H]: Je
              }
            }, {}), Fe = 5e3 / Object.values(Te).reduce((F, H) => F + H, 0), He = b, xe = F => ({
              id: at(),
              image: nt(F),
              position: {
                x: ve(0, 20) - 10,
                y: ve(0, 20) - 10
              },
              animationType: ve(1, 2),
              createdAt: Date.now()
            });
            Object.entries(Te).reduce((F, [H, pe]) => F.concat(Array(pe).fill(H)), []).sort(() => Math.random() - .5).forEach((F, H) => {
              N.push(setTimeout(() => {
                He === b && K.value.push(xe(F))
              }, Fe * H))
            })
          }, 5e3),
          V = async () => {
            await A.exec(), U = Re(() => {
              K.value = K.value.filter(re => Date.now() - re.createdAt < 6e3)
            }, 2e3)
          }, ce = () => {
            A.destroy(), N.forEach(clearTimeout), U && clearInterval(U), R.value = void 0, K.value = []
          };
        oe(() => s.value.shortname, () => {
          b++, N.forEach(clearTimeout), ce(), V()
        }), V(), ie(ce);
        const Ke = () => {
          ce(), V()
        };
        return {
          reactionsAnimations: S(() => K.value),
          ANIMATION_DURATION: 6e3,
          restart: Ke
        }
      }
      return (y, h) => {
        var R, K, q;
        const b = he,
          N = cs,
          U = gs;
        return l(), _("div", Ss, [o("div", Es, [e(d).isLowEndDevice.value ? L("", !0) : (l(), _("img", {
          key: 0,
          src: e(g),
          alt: "Gif",
          class: W([{
            "is-version-1": ((R = e(s).tonCollectedPercent) == null ? void 0 : R.lte(30)) && !e(n).isReleased,
            "is-version-2": ((K = e(s).tonCollectedPercent) == null ? void 0 : K.gt(30)) && e(s).tonCollectedPercent.lte(60) && !e(n).isReleased,
            "is-version-3": ((q = e(s).tonCollectedPercent) == null ? void 0 : q.gt(60)) && !e(n).isReleased,
            "is-dex": e(n).isReleased
          }, "gif"])
        }, null, 10, Is)), o("img", {
          src: e(w),
          alt: "Gif",
          class: "room"
        }, null, 8, Ts), h[2] || (h[2] = o("div", {
          class: "gradient"
        }, null, -1))]), o("div", ks, [o("div", bs, [o("div", Ms, [v(b, {
          name: "animations/Fire",
          size: 28
        }), o("div", $s, f(("t" in y ? y.t : e($))("memepad.explore.spotlight.title")), 1)]), t.list.length > 1 ? (l(), _("div", {
          key: 0,
          class: "controls",
          style: ne({
            gridTemplateColumns: `repeat(${t.list.length}, 1fr)`
          })
        }, [(l(!0), _(Y, null, le(t.list, (A, V) => (l(), _("div", {
          key: V + "" + e(a),
          class: W(["item", {
            active: e(a) > V,
            current: e(a) === V
          }]),
          onClick: ce => i(V)
        }, h[3] || (h[3] = [o("div", {
          class: "line"
        }, [o("div", {
          class: "fill"
        })], -1)]), 10, Cs))), 128))], 4)) : L("", !0)]), o("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: h[0] || (h[0] = (...A) => e(c) && e(c)(...A)),
          onTouchmove: h[1] || (h[1] = (...A) => e(c) && e(c)(...A))
        }, [(l(!0), _(Y, null, le(t.list, (A, V) => (l(), C(N, {
          key: A.id,
          index: V,
          jetton: A,
          "bcl-data": t.bclData,
          class: "item"
        }, null, 8, ["index", "jetton", "bcl-data"]))), 128))], 544), (l(), C(U, {
          key: e(n).id,
          jetton: e(n),
          "bcl-data": t.bclData,
          "move-direction": e(T),
          "market-cap": e(s).marketCap,
          "ton-collected-percent": e(s).tonCollectedPercent
        }, null, 8, ["jetton", "bcl-data", "move-direction", "market-cap", "ton-collected-percent"])), o("div", {
          class: "reactions",
          style: ne({
            "--animation-duration": `${e(k)}ms`
          })
        }, [(l(!0), _(Y, null, le(e(I), A => (l(), _("img", {
          key: A.id,
          src: A.image,
          class: W(`animation-${A.animationType}`),
          style: ne({
            "--x-offset": A.position.x + "px",
            "--y-offset": A.position.y + "px"
          })
        }, null, 14, Ls))), 128))], 4)])])
      }
    }
  }),
  As = O(ws, [
    ["__scopeId", "data-v-297761a1"]
  ]),
  Ps = {
    class: "inner"
  },
  Ns = {
    key: 0,
    class: "live"
  },
  Rs = D({
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
      return (t, d) => {
        const a = Se;
        return l(), _("div", {
          class: W(["memepad-jetton-image-collected-circle", {
            "is-released": t.isReleased
          }]),
          style: ne({
            "--collected-percent": t.collectedPercent
          })
        }, [o("div", Ps, [v(a, {
          src: t.image,
          size: 48,
          class: "image"
        }, null, 8, ["src"]), t.streamOnline ? (l(), _("div", Ns, "LIVE")) : L("", !0)])], 6)
      }
    }
  }),
  Ds = O(Rs, [
    ["__scopeId", "data-v-abe4cfd5"]
  ]),
  Os = {
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
  Vs = {
    key: 1,
    class: "transactions-count"
  },
  Fs = {
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
  Qs = D({
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
        default: J.BASE
      }
    },
    setup(p) {
      const t = p,
        d = S(() => Q().resolve({
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
          const T = r.decimalPlaces();
          return Math.max(Math.min(1, T), 0)
        },
        i = S(() => Pe(t.jetton.releaseTimestamp).label),
        m = S(() => t.jetton.ownedAmount ? be(t.jetton.ownedAmount, t.jetton.ticker).frontend : "-"),
        c = S(() => t.jetton.ownedAmountUSD ? be(t.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        s = S(() => t.jetton.pnlPercent ? yt(t.jetton.pnlPercent) : void 0);
      return (r, T) => {
        const w = Ds,
          E = te,
          I = Ee;
        return l(), C(I, {
          to: e(d),
          class: "memepad-jetton-list-item"
        }, {
          default: B(() => {
            var k;
            return [v(w, {
              image: e(ge)(r.jetton.iconFileKey),
              "collected-percent": e(a),
              "is-released": r.jetton.isReleased,
              "stream-online": r.jetton.streamOnline
            }, null, 8, ["image", "collected-percent", "is-released", "stream-online"]), o("div", Os, [o("div", js, f(r.jetton.ticker), 1), r.mode === e(J).BASE ? (l(), _("div", Us, [r.jetton.stats.holdersCount !== void 0 ? (l(), _("div", Ks, [v(E, {
              name: "personal",
              class: "icon"
            }), o("span", Bs, f(("formatCount" in r ? r.formatCount : e(z))(r.jetton.stats.holdersCount, {
              accuracy: 0
            }).full), 1)])) : L("", !0), r.jetton.stats.transactionsCount !== void 0 ? (l(), _("div", Vs, [v(E, {
              name: "transfer",
              class: "icon"
            }), o("span", Fs, f(("formatCount" in r ? r.formatCount : e(z))(r.jetton.stats.transactionsCount, {
              accuracy: 0
            }).full), 1)])) : L("", !0)])) : r.mode === e(J).MY_TOKENS ? (l(), _("div", Hs, [o("div", xs, f(e(m)), 1)])) : L("", !0)]), r.mode === e(J).BASE ? (l(), _("div", Ys, [o("div", Gs, [o("span", Js, f(("t" in r ? r.t : e($))("memepad.jetton.stats.market_cap")), 1), o("span", Ws, f(r.jetton.stats.marketCap ? `$${("formatCount"in r?r.formatCount:e(z))(r.jetton.stats.marketCap,{accuracy:n(r.jetton.stats.marketCap)}).full}` : "-"), 1)]), o("div", zs, [v(E, {
              name: "environment-leaf",
              class: "icon"
            }), o("span", qs, f(e(i)), 1)])])) : r.mode === e(J).MY_TOKENS ? (l(), _("div", Xs, [o("div", Zs, f(e(c)), 1), o("div", {
              class: W(["pnl", e(s) && e(s).cls])
            }, f(((k = e(s)) == null ? void 0 : k.formatted) ?? "-"), 3)])) : L("", !0)]
          }),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  ea = O(Qs, [
    ["__scopeId", "data-v-557ac54f"]
  ]),
  ta = D({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      bclData: {},
      mode: {}
    },
    setup(p) {
      return (t, d) => {
        const a = ea;
        return l(), C(ot, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: B(() => [(l(!0), _(Y, null, le(t.items, n => (l(), C(a, {
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
  je = O(ta, [
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
  da = D({
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
    setup(p) {
      const t = Ae(p, "modelValue"),
        d = De(),
        a = lt(),
        n = [{
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
        i = S(() => {
          switch (t.value) {
            case u.FRESH:
              return x.FRESH;
            case u.BLUMING:
              return x.BLUMING;
            case u.HOT:
              return x.HOT;
            case u.MY_TOKENS:
              return x.POSITIONS;
            case u.MCAP:
              return x.MCAP;
            case u.BLUMED:
              return x.BLUMED
          }
        }),
        m = S(() => t.value === u.MY_TOKENS ? J.MY_TOKENS : J.BASE);
      return (c, s) => {
        const r = te,
          T = ft,
          w = ct,
          E = je,
          I = gt,
          k = Et;
        return l(), _("div", sa, [o("div", aa, [v(T, {
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
        }, 8, ["modelValue", "items"])]), (e(d).wallet.value.status === "must_reconnect" || e(d).wallet.value.status === "not_found") && t.value === e(u).MY_TOKENS ? (l(), _("div", oa, [o("div", la, f(("t" in c ? c.t : e($))("memepad.explore.my_tokens.connect_text")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: s[2] || (s[2] = P => e(a).runConnectionFlow())
        }, f(("t" in c ? c.t : e($))("wallet.connect.btn")), 1)])) : e(d).wallet.value.status === "loading" && t.value === e(u).MY_TOKENS ? (l(), _("div", ia, [v(w, {
          type: e(it).LIGHT
        }, null, 8, ["type"])])) : c.items ? (l(), C(I, {
          key: 2,
          onEnd: s[3] || (s[3] = P => c.$emit("scrolled"))
        }, {
          default: B(() => [c.items.length ? (l(), C(E, {
            key: t.value,
            items: c.items,
            "analytics-source": e(i),
            "bcl-data": c.bclData,
            mode: e(m)
          }, null, 8, ["items", "analytics-source", "bcl-data", "mode"])) : t.value === e(u).MY_TOKENS ? (l(), _("div", ca, [v(r, {
            name: "add-plus-circle",
            class: "icon"
          }), o("div", ra, f(("t" in c ? c.t : e($))("memepad.explore.my_tokens.empty_text")), 1)])) : L("", !0)]),
          _: 1
        })) : (l(), _(Y, {
          key: 3
        }, le(6, P => o("div", {
          key: P,
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
  ua = O(da, [
    ["__scopeId", "data-v-81e6e4f2"]
  ]),
  ma = () => {
    const p = de(() => "", "$nnokZ0cAmU"),
      t = de(() => !1, "$dxYpAQPdtd"),
      d = de("$pDWqkemNGG"),
      a = rt(async c => (t.value = !0, {
        res: await ee.getMemepadSearch(c),
        search: c
      }), ({
        res: c,
        search: s
      }) => {
        t.value = !1, p.value = s, d.value = c.err ? void 0 : c.data
      });
    return {
      _flow: {
        init: () => {},
        destroy: () => {
          p.value = "", t.value = !1, d.value = void 0
        }
      },
      search: c => {
        c !== p.value && (c === "" ? (t.value = !1, d.value = void 0, p.value = "") : a(c))
      },
      searchLine: S(() => p.value),
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
  va = D({
    __name: "Search",
    emits: ["close"],
    setup(p, {
      emit: t
    }) {
      const d = t,
        a = M(),
        n = ma();
      n._flow.init(), ie(() => n._flow.destroy());
      const {
        bclData: i
      } = Oe(), m = M(!1), c = M(""), s = [];
      (() => {
        s.push(setTimeout(() => {
          m.value = !0
        }, 400))
      })(), ie(() => {
        s.forEach(E => clearTimeout(E))
      });
      const {
        debouncedFunction: T
      } = Ne(n.search, 600);
      return oe(c, T), Ie().memepad.memepadSearchOpen(), kt(async () => {
        var E;
        (E = a.value) == null || E.blur(), await dt(), await ut(0), d("close")
      }), (E, I) => {
        const k = Tt,
          P = je;
        return l(), _("div", pa, [v(k, {
          ref_key: "searchWithTitleComponent",
          ref: a,
          modelValue: e(c),
          "onUpdate:modelValue": I[0] || (I[0] = g => ye(c) ? c.value = g : null),
          placeholder: ("t" in E ? E.t : e($))("memepad.search.input_placeholder"),
          activated: e(m),
          autofocus: "",
          "is-loading": e(n).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), e(n).data.value ? (l(), _(Y, {
          key: 0
        }, [e(n).data.value.length === 0 ? (l(), _("div", _a, f(("t" in E ? E.t : e($))("memepad.search.empty_text")), 1)) : (l(), C(P, {
          key: 1,
          items: e(n).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in E ? E.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : e(x)).SEARCH,
          "bcl-data": e(i)
        }, null, 8, ["items", "analytics-source", "bcl-data"]))], 64)) : L("", !0)])
      }
    }
  }),
  ha = O(va, [
    ["__scopeId", "data-v-905a8f19"]
  ]),
  Ue = (p, t, d) => {
    const a = Math.max(0, p.length - 1),
      n = M([...p].reverse()),
      i = M(a),
      m = () => {
        i.value < n.value.length - 1 && i.value++
      },
      c = S(() => {
        const k = Math.max(0, i.value - d + 1),
          P = Math.min(i.value + 1, n.value.length);
        return [...n.value].slice(k, P).reverse()
      }),
      s = S(() => [...n.value].reverse()[i.value]);
    let r;
    return {
      init: () => {
        clearInterval(r), r = Re(m, t)
      },
      destroy: () => {
        n.value = [], i.value = 0, clearInterval(r)
      },
      addItems: k => {
        n.value.push(...[...k].reverse())
      },
      setItems: k => {
        n.value = k, i.value = k.length - 1
      },
      items: S(() => n.value),
      appearedItems: c,
      currentAppearedItem: s
    }
  },
  fa = () => {
    const p = mt(),
      t = De(),
      d = Ie();
    let a;
    (g => {
      g.LIST = "list", g.STEP_LIST = "step-list", g.PAGINATION_LIST = "pagination-list"
    })(a || (a = {}));
    const n = {
        [u.FRESH]: "step-list",
        [u.LIVE_STREAMS]: "list",
        [u.HOT]: "list",
        [u.BLUMING]: "pagination-list",
        [u.BLUMED]: "pagination-list",
        [u.MCAP]: "pagination-list",
        [u.MY_TOKENS]: "list"
      },
      i = async ({
        type: g,
        pageToken: j
      }) => {
        if (g === u.MY_TOKENS) {
          const U = t.wallet.value.status === "connected" ? t.wallet.value.address.default : void 0;
          if (!U) return $e({
            jettons: [],
            nextPageToken: ""
          });
          const R = await ee.getMemepadJettonsPositions(U);
          return Me(R) ? $e({
            jettons: R.data.jettons,
            nextPageToken: ""
          }) : R
        }
        const y = {
            [u.FRESH]: X.CREATED_AT,
            [u.HOT]: X.HOT,
            [u.LIVE_STREAMS]: X.LIVE_STREAMS,
            [u.BLUMING]: X.NEAREST_TO_LISTING,
            [u.MCAP]: X.MARKET_CAP,
            [u.BLUMED]: X.PUBLISHED_AT
          },
          h = {
            [u.FRESH]: Z.EXCLUDE,
            [u.HOT]: Z.INCLUDE,
            [u.LIVE_STREAMS]: Z.INCLUDE,
            [u.BLUMING]: Z.INCLUDE_LISTED,
            [u.MCAP]: Z.INCLUDE,
            [u.BLUMED]: Z.ONLY
          },
          b = y[g],
          N = h[g];
        return await ee.getMemepadJettonsSection(b, N, j)
      }, m = de(() => u.FRESH, "$SbGDXlzgsy"), c = () => {
        const g = m.value;
        switch (n[g]) {
          case "step-list":
            return {
              type: "step-list", stepList: void 0, interval: me(async () => await i({
                type: g
              }), y => {
                var b;
                if (((b = s.value) == null ? void 0 : b.type) !== "step-list" || g !== m.value) return;
                const h = s.value.stepList;
                if (!h) s.value.stepList = Ue(y.jettons, 1e3, 60), s.value.stepList.init();
                else {
                  const N = h,
                    U = y.jettons.filter(K => !N.items.some(q => q.id === K.id)),
                    R = N.items.map(K => y.jettons.find(A => A.id === K.id) || K);
                  N.setItems(R), N.addItems(U)
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
                if (!Me(b)) throw ae("Failed to get list");
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
              }), y => {
                var h;
                ((h = s.value) == null ? void 0 : h.type) !== "list" || g !== m.value || (s.value.data = y.jettons)
              }, 5e3)
            };
          default:
            throw ae("Unknown type")
        }
      }, s = M(c()), r = () => {
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
            throw s.value, ae("Unknown type")
        }
      }, T = async () => {
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
            throw ae("Unknown type")
        }
      };
    let w;
    const E = async () => {
      await T(), w = oe(m, async g => {
        r(), await T();
        const j = (() => {
          switch (g) {
            case u.FRESH:
              return G.FRESH;
            case u.BLUMING:
              return G.BLUMING;
            case u.HOT:
              return G.HOT;
            case u.LIVE_STREAMS:
              return G.LIVE_STREAMS;
            case u.MY_TOKENS:
              return G.POSITIONS;
            case u.MCAP:
              return G.MCAP;
            case u.BLUMED:
              return G.BLUMED
          }
        })();
        d.memepad.memepadOpenPanelListTab({
          source: j
        })
      })
    }, I = () => {
      r(), w == null || w()
    };
    p.onConnected(() => {
      m.value === u.MY_TOKENS && (r(), T())
    });
    const k = S(() => {
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
          throw ae("Unknown type")
      }
    });
    return {
      init: E,
      destroy: I,
      onPaginationLoad: async () => {
        s.value.type === "pagination-list" && await s.value.pagination.load()
      },
      activeTab: m,
      items: k
    }
  },
  ya = () => {
    const p = M(),
      t = S(() => {
        var m;
        return (m = p.value) == null ? void 0 : m.stepList.currentAppearedItem
      }),
      d = m => {
        p.value || (p.value = {
          stepList: Ue([], 1e3, 15)
        }, p.value.stepList.init()), p.value.stepList.addItems(m)
      },
      a = M(pt(async () => await ee.getMemepadExploreEvents(), m => {
        d(m.transactions)
      }, 9e3));
    return {
      init: async () => {
        await a.value.exec()
      },
      destroy: () => {
        var m;
        a.value.destroy(), (m = p.value) == null || m.stepList.destroy(), p.value = void 0
      },
      eventAppearedItem: S(() => t.value)
    }
  },
  ga = () => {
    const p = M(),
      d = me(async () => _t(await ee.getMemepadExploreSpotlight()), m => p.value = m.jettons, 5e3);
    return {
      init: async () => {
        await d.exec()
      },
      destroy: () => {
        d.destroy()
      },
      getReactions: m => ee.getMemepadJettonReactions(m),
      spotlight: S(() => p.value)
    }
  },
  Sa = () => {
    const p = ya(),
      t = ga(),
      d = fa();
    return {
      _flow: {
        init: async () => {
          await Promise.all([p.init(), t.init(), d.init()])
        },
        destroy: () => {
          p.destroy(), t.destroy(), d.destroy()
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
  Ta = {
    class: "title"
  },
  ka = D({
    __name: "Index",
    setup(p) {
      const {
        events: t,
        spotlight: d,
        panelList: a,
        _flow: {
          init: n,
          destroy: i
        }
      } = Sa(), {
        bclData: m
      } = Oe(), c = M(!1);
      n().then(() => {
        c.value = !0
      }), ie(() => {
        i()
      });
      const s = M(!!Ce().query.search),
        r = () => Q().push({
          name: "memepad-new"
        }),
        T = () => {
          Q().push({
            query: {
              search: "1"
            }
          }), s.value = !0
        },
        w = () => {
          s.value = !1, Q().push({
            query: {
              search: void 0
            }
          }), Ce().meta.back = void 0
        };
      return (E, I) => {
        var b;
        const k = Vt,
          P = Zt,
          g = As,
          j = ua,
          y = It,
          h = ha;
        return l(), _(Y, null, [e(c) ? (l(), _("div", Ea, [o("div", Ia, [o("div", Ta, f(("t" in E ? E.t : e($))("memepad.explore.title")), 1), v(k, {
          onLaunch: r
        })]), e(t).eventAppearedItem.value ? (l(), C(P, {
          key: 0,
          event: e(t).eventAppearedItem.value,
          class: "event"
        }, null, 8, ["event"])) : L("", !0), (b = e(d).items.value) != null && b.length ? (l(), C(g, {
          key: 1,
          list: e(d).items.value,
          "bcl-data": e(m),
          "get-reactions": e(d).getReactions
        }, null, 8, ["list", "bcl-data", "get-reactions"])) : L("", !0), v(j, {
          modelValue: e(a).activeTab.value,
          "onUpdate:modelValue": I[0] || (I[0] = N => e(a).activeTab.value = N),
          items: e(a).items.value,
          "bcl-data": e(m),
          onSearch: T,
          onScrolled: e(a).onPaginationLoad
        }, null, 8, ["modelValue", "items", "bcl-data", "onScrolled"])])) : (l(), C(y, {
          key: 1
        })), e(s) ? (l(), C(h, {
          key: 2,
          onClose: w
        })) : L("", !0)], 64)
      }
    }
  }),
  ba = O(ka, [
    ["__scopeId", "data-v-de510fa9"]
  ]),
  Ma = {
    class: "memepad-index page"
  },
  we = "memepad-intro",
  $a = D({
    __name: "index",
    setup(p) {
      const {
        $webApp: t
      } = fe(), d = M(t.storage.local.get(we) ? "explore" : "intro"), a = () => {
        d.value = "explore", t.storage.local.set(we, "true")
      };
      return Ie().memepad.memepadExploreOpen(), (i, m) => {
        const c = We,
          s = wt,
          r = ba;
        return l(), _("div", Ma, [v(c), e(d) === "intro" ? (l(), C(s, {
          key: 0,
          onStart: a
        })) : e(d) === "explore" ? (l(), C(r, {
          key: 1
        })) : L("", !0)])
      }
    }
  }),
  xa = O($a, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  xa as
  default
};