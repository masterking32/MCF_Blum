import {
  _ as Je
} from "./CWK5LWdq.js";
import {
  d as D,
  o as l,
  c as _,
  a as o,
  b as v,
  t as y,
  e,
  z as $,
  H as B,
  ad as he,
  f as O,
  an as ue,
  h as ye,
  ao as Ae,
  K as k,
  j as E,
  G as C,
  D as L,
  p as fe,
  U as We,
  _ as te,
  x as qe,
  aN as ze,
  m as Xe,
  F as Y,
  ac as Z,
  aO as x,
  aP as we,
  aQ as Qe,
  aR as Ze,
  aS as et,
  aT as ge,
  n as W,
  aU as Ee,
  I as Se,
  aV as q,
  ax as ae,
  a9 as Me,
  Y as tt,
  R as _e,
  aF as oe,
  am as se,
  T as ie,
  Q as me,
  q as le,
  ab as Pe,
  aC as Ne,
  ak as st,
  aW as nt,
  a5 as ve,
  aX as J,
  E as be,
  aY as at,
  P as Re,
  aq as ot,
  aZ as u,
  a_ as lt,
  a$ as it,
  b0 as de,
  b1 as ct,
  W as ee,
  $ as Ie,
  O as rt,
  b2 as dt,
  V as ne,
  b3 as ut,
  a1 as ke,
  b4 as G,
  a0 as mt,
  X as $e,
  b5 as X,
  b6 as Q,
  b7 as pt,
  au as _t
} from "./tKd6_qaY.js";
import {
  _ as vt
} from "./CeVzD7Ty.js";
import {
  _ as ht,
  a as yt
} from "./BN_8LxPZ.js";
import {
  g as ft
} from "./BBGtig-R.js";
import {
  _ as gt,
  u as Et
} from "./CaokLbRz.js";
import {
  _ as St
} from "./toHQ3Ws6.js";
import {
  _ as It
} from "./CRvT_VuW.js";
import {
  _ as Tt
} from "./DeEpwBtj.js";
import {
  u as De
} from "./T-l7dKPQ.js";
import "./ChRFVE59.js";
import "./DV5E1EZo.js";
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
  Ct = D({
    __name: "Intro",
    emits: ["start"],
    setup(p) {
      return (t, d) => {
        const n = he,
          a = vt;
        return l(), _("div", Mt, [o("div", bt, [v(n, {
          name: "animations/Moon",
          class: "background"
        }), o("div", kt, y(("t" in t ? t.t : e($))("memepad.intro.title")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: d[0] || (d[0] = i => t.$emit("start"))
        }, y(("t" in t ? t.t : e($))("memepad.intro.button_text")), 1)]), v(a, {
          "no-background": ""
        }, {
          default: B(() => [o("div", $t, y(("t" in t ? t.t : e($))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  Lt = O(Ct, [
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
  jt = D({
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
      } = ye(), n = p, a = t, i = Ae(p, "modelValue"), m = k(!n.dontShowStorageKey), c = k(!1), s = E({
        get: () => i.value && m.value,
        set: S => {
          i.value = S, c.value && n.dontShowStorageKey && d.storage.local.set(n.dontShowStorageKey, "true")
        }
      });
      (() => {
        n.dontShowStorageKey && (m.value = !d.storage.local.get(n.dontShowStorageKey))
      })();
      const I = () => a("readMoreClick"),
        A = () => {
          s.value = !1, a("close", {
            source: "modal"
          })
        },
        b = () => {
          s.value = !1, a("close", {
            source: "button"
          })
        };
      return (S, T) => {
        const P = he,
          g = te,
          j = ht,
          f = qe,
          h = ze;
        return l(), C(h, {
          "model-value": e(s),
          "onUpdate:modelValue": A
        }, {
          default: B(() => [o("div", At, [v(P, {
            name: S.lottie,
            size: 116
          }, null, 8, ["name"]), o("div", wt, y(S.title), 1), o("div", null, [o("div", Pt, y(S.subtitle), 1), S.hideReadMore ? L("", !0) : (l(), _("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: I
          }, [o("span", Nt, y(("t" in S ? S.t : e($))("base.read_more")), 1), v(g, {
            name: "arrow-right",
            class: "icon"
          })]))]), o("div", Rt, [S.dontShowStorageKey ? (l(), _("div", Dt, [o("div", Ot, [v(j, {
            modelValue: e(c),
            "onUpdate:modelValue": T[0] || (T[0] = M => fe(c) ? c.value = M : null)
          }, null, 8, ["modelValue"]), o("span", {
            class: "label",
            onClick: T[1] || (T[1] = M => c.value = !e(c))
          }, y(("t" in S ? S.t : e($))("memepad.sheet.dont_show_again_label")), 1)])])) : L("", !0), v(f, {
            label: S.buttonText,
            fill: "",
            size: e(We).LARGE,
            onClick: b
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  Ut = O(jt, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  Ce = "memepad-launch-jetton",
  Kt = D({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(p, {
      emit: t
    }) {
      const {
        $webApp: d
      } = ye(), n = t, a = k(!1), i = k(d.storage.local.get(Ce) ? "watched" : "unwatched"), m = () => {
        i.value === "watched" ? n("launch") : a.value = !0
      }, c = () => {
        d.storage.local.set(Ce, "true"), n("launch")
      };
      return (s, r) => {
        const I = Ut;
        return l(), _(Y, null, [o("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: m
        }, [r[1] || (r[1] = o("i", {
          class: "seedling"
        }, null, -1)), Xe(" " + y(("t" in s ? s.t : e($))("memepad.explore.launch.button_text")), 1)]), v(I, {
          modelValue: e(a),
          "onUpdate:modelValue": r[0] || (r[0] = A => fe(a) ? a.value = A : null),
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
  Bt = O(Kt, [
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
  zt = D({
    __name: "Event",
    props: {
      event: {}
    },
    setup(p) {
      const t = p,
        d = E(() => $(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        n = E(() => Z().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.event.shortname
          },
          query: {
            from: x.ACTIONBAR
          }
        })),
        a = E(() => {
          const i = we(t.event.timestamp);
          return i.isDate ? i.label : `${i.label} ago`
        });
      return (i, m) => {
        const c = te,
          s = Qe("I18nT"),
          r = Ee,
          I = Se;
        return l(), C(I, {
          to: e(n),
          class: W(["memepad-explore-event", `is-${i.event.type.toLowerCase()}`])
        }, {
          default: B(() => [i.event.user.avatarUrl ? (l(), _("img", {
            key: 0,
            src: i.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, Vt)) : (l(), _("div", Ft, [v(c, {
            name: "space-invader",
            class: "icon"
          })])), o("div", Ht, [i.event.user.nickname ? (l(), _("span", xt, y(i.event.user.nickname), 1)) : (l(), _("span", Yt, y(("sliceWalletAddress" in i ? i.sliceWalletAddress : e(Ze))(i.event.user.address)), 1)), o("span", Gt, y(e(d)), 1), i.event.amount ? (l(), C(s, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: B(() => [o("span", Jt, y(`${("formatTon"in i?i.formatTon:e(et))(i.event.amount)} TON`), 1)]),
            _: 1
          })) : L("", !0)]), v(r, {
            src: e(ge)(i.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), o("span", Wt, y(i.event.ticker), 1), o("span", qt, y(e(a)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  Xt = O(zt, [
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
  ls = D({
    __name: "Card",
    props: {
      jetton: {},
      bclData: {},
      index: {}
    },
    setup(p) {
      const t = p,
        d = E(() => Z().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: `spotlight-${t.index+1}`
          }
        }));
      return (n, a) => {
        const i = Ee,
          m = te,
          c = Se;
        return l(), C(c, {
          to: e(d),
          class: "memepad-explore-spotlight-card"
        }, {
          default: B(() => [v(i, {
            src: e(ge)(n.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), o("span", Qt, y(n.jetton.ticker), 1), n.jetton.streamOnline ? (l(), _("div", Zt, [a[0] || (a[0] = o("div", {
            class: "dot"
          }, null, -1)), o("div", es, y(("t" in n ? n.t : e($))("memepad.explore.spotlight.live")), 1)])) : (l(), _("div", ts, [o("div", ss, [v(m, {
            name: "personal",
            class: "icon"
          }), o("span", ns, y(n.jetton.stats.holdersCount ? ("formatCount" in n ? n.formatCount : e(q))(n.jetton.stats.holdersCount, {
            accuracy: 0
          }).full : "-"), 1)]), o("div", as, [v(m, {
            name: "transfer",
            class: "icon"
          }), o("span", os, y(n.jetton.stats.transactionsCount ? ("formatCount" in n ? n.formatCount : e(q))(n.jetton.stats.transactionsCount, {
            accuracy: 0
          }).full : "-"), 1)])]))]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  is = O(ls, [
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
        var a;
        const n = te;
        return l(), _("div", {
          class: W(["memepad-explore-spotlight-progress", [t.moveDirection && `is-${(a=t.moveDirection)==null?void 0:a.direction}`, {
            "is-released": t.jetton.isReleased
          }]])
        }, [o("div", cs, [o("div", rs, [o("span", ds, y(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (l(), _("span", us, y(t.moveDirection.diffFormatted), 1)) : L("", !0)]), t.jetton.isReleased ? (l(), C(n, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (l(), _("span", ms, y(t.tonCollectedPercent ?? "-") + "% ", 1))]), o("div", ps, [o("div", {
          class: "line",
          style: ae({
            width: `${t.tonCollectedPercent}%`
          })
        }, [o("div", _s, [v(Me, {
          name: "direction-opacity"
        }, {
          default: B(() => {
            var i;
            return [((i = t.moveDirection) == null ? void 0 : i.direction) === "up" ? (l(), _("div", vs, [v(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : L("", !0)]
          }),
          _: 1
        }), v(Me, {
          name: "direction-opacity"
        }, {
          default: B(() => {
            var i;
            return [((i = t.moveDirection) == null ? void 0 : i.direction) === "down" ? (l(), _("div", hs, [v(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(n, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : L("", !0)]
          }),
          _: 1
        })])], 4)])], 2)
      }
    }
  }),
  fs = O(ys, [
    ["__scopeId", "data-v-cefc26d8"]
  ]),
  gs = {
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
  $s = ["onClick"],
  Cs = ["src"],
  Ls = D({
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
        d = tt(),
        n = k(0),
        a = E(() => t.list[n.value]),
        i = f => {
          document.querySelector(".memepad-explore-spotlight .list").scrollTo({
            left: f * window.innerWidth + (n.value > f ? -1 : 1),
            behavior: "smooth"
          })
        },
        m = k(null),
        c = Pe(() => {
          if (!m.value) return;
          const f = m.value.children[0].offsetWidth + 10,
            h = m.value.scrollLeft,
            M = Math.round(h / f);
          n.value = M
        }, 50).debouncedFunction,
        s = E(() => {
          const f = (() => {
              if (!(!a.value.stats.tonCollected || !t.bclData)) return new _e(a.value.stats.tonCollected.div(t.bclData.tonForDex).times(100).toFixed(0, _e.ROUND_DOWN))
            })(),
            h = a.value.stats.marketCap && q(a.value.stats.marketCap);
          return {
            id: a.value.id,
            shortname: a.value.shortname,
            tonCollectedPercent: f,
            marketCap: h
          }
        }),
        r = [],
        I = k();
      oe(s, (f, h) => {
        if (!f.marketCap || !h.marketCap || f.marketCap.full === h.marketCap.full || f.id !== h.id) {
          I.value = void 0;
          return
        }
        const M = f.marketCap.raw.minus(h.marketCap.raw),
          N = M.lt(0),
          U = q(M.abs(), {
            accuracy: 0
          }).full;
        U !== "0" && (I.value = {
          direction: N ? "down" : "up",
          diffFormatted: `${N?"-":"+"}${U}`
        }, r.push(setTimeout(() => I.value = void 0, 3e3)))
      });
      const A = E(() => {
          var f, h;
          return ((f = I.value) == null ? void 0 : f.direction) === "down" ? se("memepad/spotlight-room-down", "svg") : ((h = I.value) == null ? void 0 : h.direction) === "up" ? se("memepad/spotlight-room-up", "svg") : se("memepad/spotlight-room", "svg")
        }),
        b = () => {
          r.push(setTimeout(() => {
            n.value === t.list.length - 1 ? i(0) : i(n.value + 1)
          }, 15e3))
        },
        {
          reactionsAnimations: S,
          ANIMATION_DURATION: T,
          restart: P
        } = j();
      oe(n, () => {
        r.forEach(clearTimeout), b(), P()
      }, {
        immediate: !0
      }), ie(() => {
        r.forEach(clearTimeout)
      });
      const g = E(() => a.value.isReleased ? se("memepad/dex-bg", "gif") : se("memepad/bg", "gif"));

      function j() {
        let M = 0;
        const N = [];
        let U;
        const R = k(),
          K = k([]),
          w = me(async () => await t.getReactions(s.value.shortname), re => {
            if (!R.value) {
              R.value = re;
              return
            }
            const {
              user: Cn,
              ...Ke
            } = R.value;
            R.value = re;
            const {
              user: Ln,
              ...Be
            } = R.value, Te = Object.entries(Be).reduce((F, [H, pe]) => {
              const xe = Ke[H],
                Ye = pe,
                Ge = _e.max(Ye.minus(xe), 0).toNumber();
              return {
                ...F,
                [H]: Ge
              }
            }, {}), Ve = 5e3 / Object.values(Te).reduce((F, H) => F + H, 0), Fe = M, He = F => ({
              id: st(),
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
                Fe === M && K.value.push(He(F))
              }, Ve * H))
            })
          }, 5e3),
          V = async () => {
            await w.exec(), U = Ne(() => {
              K.value = K.value.filter(re => Date.now() - re.createdAt < 6e3)
            }, 2e3)
          }, ce = () => {
            w.destroy(), N.forEach(clearTimeout), U && clearInterval(U), R.value = void 0, K.value = []
          };
        oe(() => s.value.shortname, () => {
          M++, N.forEach(clearTimeout), ce(), V()
        }), V(), ie(ce);
        const Ue = () => {
          ce(), V()
        };
        return {
          reactionsAnimations: E(() => K.value),
          ANIMATION_DURATION: 6e3,
          restart: Ue
        }
      }
      return (f, h) => {
        var R, K, z;
        const M = he,
          N = is,
          U = fs;
        return l(), _("div", gs, [o("div", Es, [e(d).isLowEndDevice.value ? L("", !0) : (l(), _("img", {
          key: 0,
          src: e(g),
          alt: "Gif",
          class: W([{
            "is-version-1": ((R = e(s).tonCollectedPercent) == null ? void 0 : R.lte(30)) && !e(a).isReleased,
            "is-version-2": ((K = e(s).tonCollectedPercent) == null ? void 0 : K.gt(30)) && e(s).tonCollectedPercent.lte(60) && !e(a).isReleased,
            "is-version-3": ((z = e(s).tonCollectedPercent) == null ? void 0 : z.gt(60)) && !e(a).isReleased,
            "is-dex": e(a).isReleased
          }, "gif"])
        }, null, 10, Ss)), o("img", {
          src: e(A),
          alt: "Gif",
          class: "room"
        }, null, 8, Is), h[2] || (h[2] = o("div", {
          class: "gradient"
        }, null, -1))]), o("div", Ts, [o("div", Ms, [o("div", bs, [v(M, {
          name: "animations/Fire",
          size: 28
        }), o("div", ks, y(("t" in f ? f.t : e($))("memepad.explore.spotlight.title")), 1)]), t.list.length > 1 ? (l(), _("div", {
          key: 0,
          class: "controls",
          style: ae({
            gridTemplateColumns: `repeat(${t.list.length}, 1fr)`
          })
        }, [(l(!0), _(Y, null, le(t.list, (w, V) => (l(), _("div", {
          key: V + "" + e(n),
          class: W(["item", {
            active: e(n) > V,
            current: e(n) === V
          }]),
          onClick: ce => i(V)
        }, h[3] || (h[3] = [o("div", {
          class: "line"
        }, [o("div", {
          class: "fill"
        })], -1)]), 10, $s))), 128))], 4)) : L("", !0)]), o("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: h[0] || (h[0] = (...w) => e(c) && e(c)(...w)),
          onTouchmove: h[1] || (h[1] = (...w) => e(c) && e(c)(...w))
        }, [(l(!0), _(Y, null, le(t.list, (w, V) => (l(), C(N, {
          key: w.id,
          index: V,
          jetton: w,
          "bcl-data": t.bclData,
          class: "item"
        }, null, 8, ["index", "jetton", "bcl-data"]))), 128))], 544), (l(), C(U, {
          key: e(a).id,
          jetton: e(a),
          "bcl-data": t.bclData,
          "move-direction": e(I),
          "market-cap": e(s).marketCap,
          "ton-collected-percent": e(s).tonCollectedPercent
        }, null, 8, ["jetton", "bcl-data", "move-direction", "market-cap", "ton-collected-percent"])), o("div", {
          class: "reactions",
          style: ae({
            "--animation-duration": `${e(T)}ms`
          })
        }, [(l(!0), _(Y, null, le(e(S), w => (l(), _("img", {
          key: w.id,
          src: w.image,
          class: W(`animation-${w.animationType}`),
          style: ae({
            "--x-offset": w.position.x + "px",
            "--y-offset": w.position.y + "px"
          })
        }, null, 14, Cs))), 128))], 4)])])
      }
    }
  }),
  As = O(Ls, [
    ["__scopeId", "data-v-297761a1"]
  ]),
  ws = {
    class: "inner"
  },
  Ps = {
    key: 0,
    class: "live"
  },
  Ns = D({
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
        const n = Ee;
        return l(), _("div", {
          class: W(["memepad-jetton-image-collected-circle", {
            "is-released": t.isReleased
          }]),
          style: ae({
            "--collected-percent": t.collectedPercent
          })
        }, [o("div", ws, [v(n, {
          src: t.image,
          size: 48,
          class: "image"
        }, null, 8, ["src"]), t.streamOnline ? (l(), _("div", Ps, "LIVE")) : L("", !0)])], 6)
      }
    }
  }),
  Rs = O(Ns, [
    ["__scopeId", "data-v-abe4cfd5"]
  ]),
  Ds = {
    class: "center"
  },
  Os = {
    class: "ticker"
  },
  js = {
    key: 0,
    class: "base-stats"
  },
  Us = {
    key: 0,
    class: "holders-count"
  },
  Ks = {
    class: "text"
  },
  Bs = {
    key: 1,
    class: "transactions-count"
  },
  Vs = {
    class: "text"
  },
  Fs = {
    key: 1,
    class: "my-tokens-stats"
  },
  Hs = {
    class: "jettons"
  },
  xs = {
    key: 0,
    class: "base-values"
  },
  Ys = {
    class: "market-cap"
  },
  Gs = {
    class: "label"
  },
  Js = {
    class: "value"
  },
  Ws = {
    class: "lifetime"
  },
  qs = {
    class: "text"
  },
  zs = {
    key: 1,
    class: "my-tokens-values"
  },
  Xs = {
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
        d = E(() => Z().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: t.analyticsSource
          }
        })),
        n = E(() => t.jetton.stats.tonCollected && t.bclData && t.jetton.stats.tonCollected.div(t.bclData.tonForDex).times(100).toNumber()),
        a = r => {
          const I = r.decimalPlaces();
          return Math.max(Math.min(1, I), 0)
        },
        i = E(() => we(t.jetton.releaseTimestamp).label),
        m = E(() => t.jetton.ownedAmount ? be(t.jetton.ownedAmount, t.jetton.ticker).frontend : "-"),
        c = E(() => t.jetton.ownedAmountUSD ? be(t.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        s = E(() => t.jetton.pnlPercent ? ft(t.jetton.pnlPercent) : void 0);
      return (r, I) => {
        const A = Rs,
          b = te,
          S = Se;
        return l(), C(S, {
          to: e(d),
          class: "memepad-jetton-list-item"
        }, {
          default: B(() => {
            var T;
            return [v(A, {
              image: e(ge)(r.jetton.iconFileKey),
              "collected-percent": e(n),
              "is-released": r.jetton.isReleased,
              "stream-online": r.jetton.streamOnline
            }, null, 8, ["image", "collected-percent", "is-released", "stream-online"]), o("div", Ds, [o("div", Os, y(r.jetton.ticker), 1), r.mode === e(J).BASE ? (l(), _("div", js, [r.jetton.stats.holdersCount !== void 0 ? (l(), _("div", Us, [v(b, {
              name: "personal",
              class: "icon"
            }), o("span", Ks, y(("formatCount" in r ? r.formatCount : e(q))(r.jetton.stats.holdersCount, {
              accuracy: 0
            }).full), 1)])) : L("", !0), r.jetton.stats.transactionsCount !== void 0 ? (l(), _("div", Bs, [v(b, {
              name: "transfer",
              class: "icon"
            }), o("span", Vs, y(("formatCount" in r ? r.formatCount : e(q))(r.jetton.stats.transactionsCount, {
              accuracy: 0
            }).full), 1)])) : L("", !0)])) : r.mode === e(J).MY_TOKENS ? (l(), _("div", Fs, [o("div", Hs, y(e(m)), 1)])) : L("", !0)]), r.mode === e(J).BASE ? (l(), _("div", xs, [o("div", Ys, [o("span", Gs, y(("t" in r ? r.t : e($))("memepad.jetton.stats.market_cap")), 1), o("span", Js, y(r.jetton.stats.marketCap ? `$${("formatCount"in r?r.formatCount:e(q))(r.jetton.stats.marketCap,{accuracy:a(r.jetton.stats.marketCap)}).full}` : "-"), 1)]), o("div", Ws, [v(b, {
              name: "environment-leaf",
              class: "icon"
            }), o("span", qs, y(e(i)), 1)])])) : r.mode === e(J).MY_TOKENS ? (l(), _("div", zs, [o("div", Xs, y(e(c)), 1), o("div", {
              class: W(["pnl", e(s) && e(s).cls])
            }, y(((T = e(s)) == null ? void 0 : T.formatted) ?? "-"), 3)])) : L("", !0)]
          }),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  Zs = O(Qs, [
    ["__scopeId", "data-v-557ac54f"]
  ]),
  en = D({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      bclData: {},
      mode: {}
    },
    setup(p) {
      return (t, d) => {
        const n = Zs;
        return l(), C(at, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: B(() => [(l(!0), _(Y, null, le(t.items, a => (l(), C(n, {
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
  Oe = O(en, [
    ["__scopeId", "data-v-e4070fed"]
  ]),
  tn = {
    class: "memepad-explore-panel-list"
  },
  sn = {
    class: "top"
  },
  nn = {
    class: "search-btn-wrapper"
  },
  an = {
    key: 0,
    class: "connect"
  },
  on = {
    class: "label"
  },
  ln = {
    key: 1,
    class: "connect"
  },
  cn = {
    key: 1,
    class: "empty-state"
  },
  rn = {
    class: "label"
  },
  dn = D({
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
        d = Re(),
        n = ot(),
        a = [{
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
        i = E(() => {
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
        m = E(() => t.value === u.MY_TOKENS ? J.MY_TOKENS : J.BASE);
      return (c, s) => {
        const r = te,
          I = yt,
          A = it,
          b = Oe,
          S = gt,
          T = St;
        return l(), _("div", tn, [o("div", sn, [v(I, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = P => t.value = P),
          items: e(a)
        }, {
          after: B(() => [o("div", nn, [o("button", {
            type: "button",
            class: "search reset",
            onClick: s[0] || (s[0] = P => c.$emit("search"))
          }, [v(r, {
            name: "search",
            class: "icon"
          })])])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (e(d).wallet.value.status === "must_reconnect" || e(d).wallet.value.status === "not_found") && t.value === e(u).MY_TOKENS ? (l(), _("div", an, [o("div", on, y(("t" in c ? c.t : e($))("memepad.explore.my_tokens.connect_text")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: s[2] || (s[2] = P => e(n).runConnectionFlow())
        }, y(("t" in c ? c.t : e($))("wallet.connect.btn")), 1)])) : e(d).wallet.value.status === "loading" && t.value === e(u).MY_TOKENS ? (l(), _("div", ln, [v(A, {
          type: e(lt).LIGHT
        }, null, 8, ["type"])])) : c.items ? (l(), C(S, {
          key: 2,
          onEnd: s[3] || (s[3] = P => c.$emit("scrolled"))
        }, {
          default: B(() => [c.items.length ? (l(), C(b, {
            key: t.value,
            items: c.items,
            "analytics-source": e(i),
            "bcl-data": c.bclData,
            mode: e(m)
          }, null, 8, ["items", "analytics-source", "bcl-data", "mode"])) : t.value === e(u).MY_TOKENS ? (l(), _("div", cn, [v(r, {
            name: "add-plus-circle",
            class: "icon"
          }), o("div", rn, y(("t" in c ? c.t : e($))("memepad.explore.my_tokens.empty_text")), 1)])) : L("", !0)]),
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
  un = O(dn, [
    ["__scopeId", "data-v-81e6e4f2"]
  ]),
  mn = () => {
    const p = de(() => "", "$nnokZ0cAmU"),
      t = de(() => !1, "$dxYpAQPdtd"),
      d = de("$pDWqkemNGG"),
      n = ct(async c => (t.value = !0, {
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
        c !== p.value && (c === "" ? (t.value = !1, d.value = void 0, p.value = "") : n(c))
      },
      searchLine: E(() => p.value),
      data: E(() => d.value),
      isSearching: E(() => t.value)
    }
  },
  pn = {
    class: "memepad-search page"
  },
  _n = {
    key: 0,
    class: "empty"
  },
  vn = D({
    __name: "Search",
    emits: ["close"],
    setup(p, {
      emit: t
    }) {
      const d = t,
        n = k(),
        a = mn();
      a._flow.init(), ie(() => a._flow.destroy());
      const {
        bclData: i
      } = De(), m = k(!1), c = k(""), s = [];
      (() => {
        s.push(setTimeout(() => {
          m.value = !0
        }, 400))
      })(), ie(() => {
        s.forEach(b => clearTimeout(b))
      });
      const {
        debouncedFunction: I
      } = Pe(a.search, 600);
      return oe(c, I), Ie().memepad.memepadSearchOpen(), rt().initHandler(() => d("close"), "memepad-search"), (b, S) => {
        const T = Tt,
          P = Oe;
        return l(), _("div", pn, [v(T, {
          ref_key: "searchWithTitleComponent",
          ref: n,
          modelValue: e(c),
          "onUpdate:modelValue": S[0] || (S[0] = g => fe(c) ? c.value = g : null),
          placeholder: ("t" in b ? b.t : e($))("memepad.search.input_placeholder"),
          activated: e(m),
          autofocus: "",
          "is-loading": e(a).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), e(a).data.value ? (l(), _(Y, {
          key: 0
        }, [e(a).data.value.length === 0 ? (l(), _("div", _n, y(("t" in b ? b.t : e($))("memepad.search.empty_text")), 1)) : (l(), C(P, {
          key: 1,
          items: e(a).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in b ? b.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : e(x)).SEARCH,
          "bcl-data": e(i)
        }, null, 8, ["items", "analytics-source", "bcl-data"]))], 64)) : L("", !0)])
      }
    }
  }),
  hn = O(vn, [
    ["__scopeId", "data-v-48583317"]
  ]),
  je = (p, t, d) => {
    const n = Math.max(0, p.length - 1),
      a = k([...p].reverse()),
      i = k(n),
      m = () => {
        i.value < a.value.length - 1 && i.value++
      },
      c = E(() => {
        const T = Math.max(0, i.value - d + 1),
          P = Math.min(i.value + 1, a.value.length);
        return [...a.value].slice(T, P).reverse()
      }),
      s = E(() => [...a.value].reverse()[i.value]);
    let r;
    return {
      init: () => {
        clearInterval(r), r = Ne(m, t)
      },
      destroy: () => {
        a.value = [], i.value = 0, clearInterval(r)
      },
      addItems: T => {
        a.value.push(...[...T].reverse())
      },
      setItems: T => {
        a.value = T, i.value = T.length - 1
      },
      items: E(() => a.value),
      appearedItems: c,
      currentAppearedItem: s
    }
  },
  yn = () => {
    const p = dt(),
      t = Re(),
      d = Ie();
    let n;
    (g => {
      g.LIST = "list", g.STEP_LIST = "step-list", g.PAGINATION_LIST = "pagination-list"
    })(n || (n = {}));
    const a = {
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
          return ke(R) ? $e({
            jettons: R.data.jettons,
            nextPageToken: ""
          }) : R
        }
        const f = {
            [u.FRESH]: X.CREATED_AT,
            [u.HOT]: X.HOT,
            [u.LIVE_STREAMS]: X.LIVE_STREAMS,
            [u.BLUMING]: X.NEAREST_TO_LISTING,
            [u.MCAP]: X.MARKET_CAP,
            [u.BLUMED]: X.PUBLISHED_AT
          },
          h = {
            [u.FRESH]: Q.EXCLUDE,
            [u.HOT]: Q.INCLUDE,
            [u.LIVE_STREAMS]: Q.INCLUDE,
            [u.BLUMING]: Q.INCLUDE_LISTED,
            [u.MCAP]: Q.INCLUDE,
            [u.BLUMED]: Q.ONLY
          },
          M = f[g],
          N = h[g];
        return await ee.getMemepadJettonsSection(M, N, j)
      }, m = de(() => u.FRESH, "$SbGDXlzgsy"), c = () => {
        const g = m.value;
        switch (a[g]) {
          case "step-list":
            return {
              type: "step-list", stepList: void 0, interval: me(async () => await i({
                type: g
              }), f => {
                var M;
                if (((M = s.value) == null ? void 0 : M.type) !== "step-list" || g !== m.value) return;
                const h = s.value.stepList;
                if (!h) s.value.stepList = je(f.jettons, 1e3, 60), s.value.stepList.init();
                else {
                  const N = h,
                    U = f.jettons.filter(K => !N.items.some(z => z.id === K.id)),
                    R = N.items.map(K => f.jettons.find(w => w.id === K.id) || K);
                  N.setItems(R), N.addItems(U)
                }
              }, 5e3)
            };
          case "pagination-list":
            return {
              type: "pagination-list", pagination: Et(async h => {
                const M = await i({
                  type: g,
                  pageToken: h
                });
                if (!ke(M)) throw ne("Failed to get list");
                return {
                  items: M.data.jettons,
                  nextPageToken: M.data.nextPageToken ?? ""
                }
              })
            };
          case "list":
            return {
              type: "list", data: void 0, interval: me(async () => await i({
                type: g
              }), f => {
                var h;
                ((h = s.value) == null ? void 0 : h.type) !== "list" || g !== m.value || (s.value.data = f.jettons)
              }, 5e3)
            };
          default:
            throw ne("Unknown type")
        }
      }, s = k(c()), r = () => {
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
    let A;
    const b = async () => {
      await I(), A = oe(m, async g => {
        r(), await I();
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
    }, S = () => {
      r(), A == null || A()
    };
    p.onConnected(() => {
      m.value === u.MY_TOKENS && (r(), I())
    });
    const T = E(() => {
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
          throw ne("Unknown type")
      }
    });
    return {
      init: b,
      destroy: S,
      onPaginationLoad: async () => {
        s.value.type === "pagination-list" && await s.value.pagination.load()
      },
      activeTab: m,
      items: T
    }
  },
  fn = () => {
    const p = k(),
      t = E(() => {
        var m;
        return (m = p.value) == null ? void 0 : m.stepList.currentAppearedItem
      }),
      d = m => {
        p.value || (p.value = {
          stepList: je([], 1e3, 15)
        }, p.value.stepList.init()), p.value.stepList.addItems(m)
      },
      n = k(ut(async () => await ee.getMemepadExploreEvents(), m => {
        d(m.transactions)
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
    const p = k(),
      d = me(async () => mt(await ee.getMemepadExploreSpotlight()), m => p.value = m.jettons, 5e3);
    return {
      init: async () => {
        await d.exec()
      },
      destroy: () => {
        d.destroy()
      },
      getReactions: m => ee.getMemepadJettonReactions(m),
      spotlight: E(() => p.value)
    }
  },
  En = () => {
    const p = fn(),
      t = gn(),
      d = yn();
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
  Sn = {
    key: 0,
    class: "memepad-explore"
  },
  In = {
    class: "header"
  },
  Tn = {
    class: "title"
  },
  Mn = D({
    __name: "Index",
    setup(p) {
      const {
        events: t,
        spotlight: d,
        panelList: n,
        _flow: {
          init: a,
          destroy: i
        }
      } = En(), {
        bclData: m
      } = De(), c = k(!1);
      a().then(() => {
        c.value = !0
      }), ie(() => {
        i()
      });
      const s = k(!!pt().query.search),
        r = () => Z().push({
          name: "memepad-new",
          query: {
            memepadNewFrom: _t.MEMEPAD_MAIN
          }
        }),
        I = () => {
          Z().push({
            query: {
              search: "1"
            }
          }), s.value = !0
        },
        A = () => {
          s.value = !1, Z().push({
            query: {
              search: void 0
            }
          })
        };
      return (b, S) => {
        var M;
        const T = Bt,
          P = Xt,
          g = As,
          j = un,
          f = It,
          h = hn;
        return l(), _(Y, null, [e(c) ? (l(), _("div", Sn, [o("div", In, [o("div", Tn, y(("t" in b ? b.t : e($))("memepad.explore.title")), 1), v(T, {
          onLaunch: r
        })]), e(t).eventAppearedItem.value ? (l(), C(P, {
          key: 0,
          event: e(t).eventAppearedItem.value,
          class: "event"
        }, null, 8, ["event"])) : L("", !0), (M = e(d).items.value) != null && M.length ? (l(), C(g, {
          key: 1,
          list: e(d).items.value,
          "bcl-data": e(m),
          "get-reactions": e(d).getReactions
        }, null, 8, ["list", "bcl-data", "get-reactions"])) : L("", !0), v(j, {
          modelValue: e(n).activeTab.value,
          "onUpdate:modelValue": S[0] || (S[0] = N => e(n).activeTab.value = N),
          items: e(n).items.value,
          "bcl-data": e(m),
          onSearch: I,
          onScrolled: e(n).onPaginationLoad
        }, null, 8, ["modelValue", "items", "bcl-data", "onScrolled"])])) : (l(), C(f, {
          key: 1
        })), e(s) ? (l(), C(h, {
          key: 2,
          onClose: A
        })) : L("", !0)], 64)
      }
    }
  }),
  bn = O(Mn, [
    ["__scopeId", "data-v-7f85cc0c"]
  ]),
  kn = {
    class: "memepad-index page"
  },
  Le = "memepad-intro",
  $n = D({
    __name: "index",
    setup(p) {
      const {
        $webApp: t
      } = ye(), d = k(t.storage.local.get(Le) ? "explore" : "intro"), n = () => {
        d.value = "explore", t.storage.local.set(Le, "true")
      };
      return Ie().memepad.memepadExploreOpen(), (i, m) => {
        const c = Je,
          s = Lt,
          r = bn;
        return l(), _("div", kn, [v(c), e(d) === "intro" ? (l(), C(s, {
          key: 0,
          onStart: n
        })) : e(d) === "explore" ? (l(), C(r, {
          key: 1
        })) : L("", !0)])
      }
    }
  }),
  Hn = O($n, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  Hn as
  default
};