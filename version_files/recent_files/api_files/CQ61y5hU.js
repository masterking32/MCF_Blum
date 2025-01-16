import {
  _ as We
} from "./DDRp7YQD.js";
import {
  d as R,
  o as c,
  c as _,
  a as o,
  b as v,
  t as g,
  e,
  z as L,
  H as B,
  ab as he,
  f as O,
  al as ue,
  h as ge,
  am as Ae,
  K as $,
  j as S,
  G as C,
  D as A,
  p as fe,
  V as ze,
  _ as Q,
  x as qe,
  aH as Xe,
  m as Ze,
  F as G,
  aa as X,
  aI as H,
  aJ as Pe,
  aK as Qe,
  aL as et,
  aM as tt,
  aN as ye,
  n as J,
  aO as Se,
  I as Ee,
  aP as W,
  av as ne,
  a7 as ke,
  X as st,
  T as _e,
  P as oe,
  ak as ee,
  U as ie,
  R as me,
  q as le,
  a9 as Ne,
  aA as De,
  ai as at,
  aQ as nt,
  a3 as ve,
  aR as Y,
  E as be,
  aS as ot,
  O as Re,
  ap as lt,
  aT as p,
  aU as it,
  aV as ct,
  aW as de,
  aX as rt,
  W as Z,
  Z as Ie,
  aY as dt,
  aZ as ut,
  a_ as mt,
  a2 as te,
  a$ as pt,
  au as $e,
  b0 as q,
  $ as _t,
  as as Ce,
  b1 as se,
  b2 as ae,
  Q as Me
} from "./9pqOUFky.js";
import {
  _ as vt
} from "./C1hGzIyL.js";
import {
  _ as ht,
  a as gt
} from "./DGlCJDgF.js";
import {
  g as ft
} from "./Dw7_2C8K.js";
import {
  _ as yt,
  u as St
} from "./D7qiysA3.js";
import {
  _ as Et
} from "./B04kUIpo.js";
import {
  _ as It
} from "./CVIb7Hoc.js";
import {
  _ as Tt
} from "./CjGTBswZ.js";
import {
  u as Oe
} from "./CbcOk_RL.js";
import {
  u as kt
} from "./B5m8mQqM.js";
import "./DrIKgNjK.js";
import "./0PSS1eNo.js";
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
  wt = R({
    __name: "Intro",
    emits: ["start"],
    setup(m) {
      return (t, r) => {
        const a = he,
          n = vt;
        return c(), _("div", bt, [o("div", $t, [v(a, {
          name: "animations/Moon",
          class: "background"
        }), o("div", Ct, g(("t" in t ? t.t : e(L))("memepad.intro.title")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: r[0] || (r[0] = l => t.$emit("start"))
        }, g(("t" in t ? t.t : e(L))("memepad.intro.button_text")), 1)]), v(n, {
          "no-background": ""
        }, {
          default: B(() => [o("div", Mt, g(("t" in t ? t.t : e(L))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  Lt = O(wt, [
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
  Rt = {
    class: "actions"
  },
  Ot = {
    key: 0,
    class: "dont-show"
  },
  jt = {
    class: "checkbox"
  },
  Ut = R({
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
        $webApp: r
      } = ge(), a = m, n = t, l = Ae(m, "modelValue"), u = $(!a.dontShowStorageKey), i = $(!1), s = S({
        get: () => l.value && u.value,
        set: I => {
          l.value = I, i.value && a.dontShowStorageKey && r.storage.local.set(a.dontShowStorageKey, "true")
        }
      });
      (() => {
        a.dontShowStorageKey && (u.value = !r.storage.local.get(a.dontShowStorageKey))
      })();
      const T = () => n("readMoreClick"),
        M = () => {
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
          y = Q,
          j = ht,
          f = qe,
          h = Xe;
        return c(), C(h, {
          "model-value": e(s),
          "onUpdate:modelValue": M
        }, {
          default: B(() => [o("div", At, [v(P, {
            name: I.lottie,
            size: 116
          }, null, 8, ["name"]), o("div", Pt, g(I.title), 1), o("div", null, [o("div", Nt, g(I.subtitle), 1), I.hideReadMore ? A("", !0) : (c(), _("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: T
          }, [o("span", Dt, g(("t" in I ? I.t : e(L))("base.read_more")), 1), v(y, {
            name: "arrow-right",
            class: "icon"
          })]))]), o("div", Rt, [I.dontShowStorageKey ? (c(), _("div", Ot, [o("div", jt, [v(j, {
            modelValue: e(i),
            "onUpdate:modelValue": k[0] || (k[0] = b => fe(i) ? i.value = b : null)
          }, null, 8, ["modelValue"]), o("span", {
            class: "label",
            onClick: k[1] || (k[1] = b => i.value = !e(i))
          }, g(("t" in I ? I.t : e(L))("memepad.sheet.dont_show_again_label")), 1)])])) : A("", !0), v(f, {
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
  we = "memepad-launch-jetton",
  Bt = R({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(m, {
      emit: t
    }) {
      const {
        $webApp: r
      } = ge(), a = t, n = $(!1), l = $(r.storage.local.get(we) ? "watched" : "unwatched"), u = () => {
        l.value === "watched" ? a("launch") : n.value = !0
      }, i = () => {
        r.storage.local.set(we, "true"), a("launch")
      };
      return (s, d) => {
        const T = Kt;
        return c(), _(G, null, [o("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: u
        }, [d[1] || (d[1] = o("i", {
          class: "seedling"
        }, null, -1)), Ze(" " + g(("t" in s ? s.t : e(L))("memepad.explore.launch.button_text")), 1)]), v(T, {
          modelValue: e(n),
          "onUpdate:modelValue": d[0] || (d[0] = M => fe(n) ? n.value = M : null),
          title: ("t" in s ? s.t : e(L))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in s ? s.t : e(L))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in s ? s.t : e(L))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: i
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  Ft = O(Bt, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  xt = ["src"],
  Vt = {
    key: 1,
    class: "user-avatar-empty"
  },
  Ht = {
    class: "text"
  },
  Gt = {
    key: 0,
    class: "user-name"
  },
  Yt = {
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
  Xt = R({
    __name: "Event",
    props: {
      event: {}
    },
    setup(m) {
      const t = m,
        r = S(() => L(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        a = S(() => X().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.event.shortname
          },
          query: {
            from: H.ACTIONBAR
          }
        })),
        n = S(() => {
          const l = Pe(t.event.timestamp);
          return l.isDate ? l.label : `${l.label} ago`
        });
      return (l, u) => {
        const i = Q,
          s = Qe("I18nT"),
          d = Se,
          T = Ee;
        return c(), C(T, {
          to: e(a),
          class: J(["memepad-explore-event", `is-${l.event.type.toLowerCase()}`])
        }, {
          default: B(() => [l.event.user.avatarUrl ? (c(), _("img", {
            key: 0,
            src: l.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, xt)) : (c(), _("div", Vt, [v(i, {
            name: "space-invader",
            class: "icon"
          })])), o("div", Ht, [l.event.user.nickname ? (c(), _("span", Gt, g(l.event.user.nickname), 1)) : (c(), _("span", Yt, g(("sliceWalletAddress" in l ? l.sliceWalletAddress : e(et))(l.event.user.address)), 1)), o("span", Jt, g(e(r)), 1), l.event.amount ? (c(), C(s, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: B(() => [o("span", Wt, g(`${("formatTon"in l?l.formatTon:e(tt))(l.event.amount)} TON`), 1)]),
            _: 1
          })) : A("", !0)]), v(d, {
            src: e(ye)(l.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), o("span", zt, g(l.event.ticker), 1), o("span", qt, g(e(n)), 1)]),
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
    class: "stats"
  },
  ts = {
    class: "holders-count"
  },
  ss = {
    class: "text"
  },
  as = {
    class: "transactions-count"
  },
  ns = {
    class: "text"
  },
  os = R({
    __name: "Card",
    props: {
      jetton: {},
      bclData: {},
      index: {}
    },
    setup(m) {
      const t = m,
        r = S(() => X().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: `spotlight-${t.index+1}`
          }
        }));
      return (a, n) => {
        const l = Se,
          u = Q,
          i = Ee;
        return c(), C(i, {
          to: e(r),
          class: "memepad-explore-spotlight-card"
        }, {
          default: B(() => [v(l, {
            src: e(ye)(a.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), o("span", Qt, g(a.jetton.ticker), 1), o("div", es, [o("div", ts, [v(u, {
            name: "personal",
            class: "icon"
          }), o("span", ss, g(a.jetton.stats.holdersCount ? ("formatCount" in a ? a.formatCount : e(W))(a.jetton.stats.holdersCount, {
            accuracy: 0
          }).full : "-"), 1)]), o("div", as, [v(u, {
            name: "transfer",
            class: "icon"
          }), o("span", ns, g(a.jetton.stats.transactionsCount ? ("formatCount" in a ? a.formatCount : e(W))(a.jetton.stats.transactionsCount, {
            accuracy: 0
          }).full : "-"), 1)])])]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  ls = O(os, [
    ["__scopeId", "data-v-badcb82b"]
  ]),
  is = {
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
  hs = R({
    __name: "Progress",
    props: {
      jetton: {},
      bclData: {},
      moveDirection: {},
      marketCap: {},
      tonCollectedPercent: {}
    },
    setup(m) {
      return (t, r) => {
        var n;
        const a = Q;
        return c(), _("div", {
          class: J(["memepad-explore-spotlight-progress", [t.moveDirection && `is-${(n=t.moveDirection)==null?void 0:n.direction}`, {
            "is-released": t.jetton.isReleased
          }]])
        }, [o("div", is, [o("div", cs, [o("span", rs, g(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (c(), _("span", ds, g(t.moveDirection.diffFormatted), 1)) : A("", !0)]), t.jetton.isReleased ? (c(), C(a, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (c(), _("span", us, g(t.tonCollectedPercent ?? "-") + "% ", 1))]), o("div", ms, [o("div", {
          class: "line",
          style: ne({
            width: `${t.tonCollectedPercent}%`
          })
        }, [o("div", ps, [v(ke, {
          name: "direction-opacity"
        }, {
          default: B(() => {
            var l;
            return [((l = t.moveDirection) == null ? void 0 : l.direction) === "up" ? (c(), _("div", _s, [v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : A("", !0)]
          }),
          _: 1
        }), v(ke, {
          name: "direction-opacity"
        }, {
          default: B(() => {
            var l;
            return [((l = t.moveDirection) == null ? void 0 : l.direction) === "down" ? (c(), _("div", vs, [v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(a, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : A("", !0)]
          }),
          _: 1
        })])], 4)])], 2)
      }
    }
  }),
  gs = O(hs, [
    ["__scopeId", "data-v-cefc26d8"]
  ]),
  fs = {
    class: "memepad-explore-spotlight"
  },
  ys = {
    class: "bg"
  },
  Ss = ["src"],
  Es = ["src"],
  Is = {
    class: "content"
  },
  Ts = {
    class: "header"
  },
  ks = {
    class: "logo"
  },
  bs = {
    class: "title"
  },
  $s = ["onClick"],
  Cs = ["src"],
  Ms = R({
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
        r = st(),
        a = $(0),
        n = S(() => t.list[a.value]),
        l = f => {
          document.querySelector(".memepad-explore-spotlight .list").scrollTo({
            left: f * window.innerWidth + (a.value > f ? -1 : 1),
            behavior: "smooth"
          })
        },
        u = $(null),
        i = Ne(() => {
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
        d = [],
        T = $();
      oe(s, (f, h) => {
        if (!f.marketCap || !h.marketCap || f.marketCap.full === h.marketCap.full || f.id !== h.id) {
          T.value = void 0;
          return
        }
        const b = f.marketCap.raw.minus(h.marketCap.raw),
          N = b.lt(0),
          U = W(b.abs(), {
            accuracy: 0
          }).full;
        U !== "0" && (T.value = {
          direction: N ? "down" : "up",
          diffFormatted: `${N?"-":"+"}${U}`
        }, d.push(setTimeout(() => T.value = void 0, 3e3)))
      });
      const M = S(() => {
          var f, h;
          return ((f = T.value) == null ? void 0 : f.direction) === "down" ? ee("memepad/spotlight-room-down", "svg") : ((h = T.value) == null ? void 0 : h.direction) === "up" ? ee("memepad/spotlight-room-up", "svg") : ee("memepad/spotlight-room", "svg")
        }),
        E = () => {
          d.push(setTimeout(() => {
            a.value === t.list.length - 1 ? l(0) : l(a.value + 1)
          }, 15e3))
        },
        {
          reactionsAnimations: I,
          ANIMATION_DURATION: k,
          restart: P
        } = j();
      oe(a, () => {
        d.forEach(clearTimeout), E(), P()
      }, {
        immediate: !0
      }), ie(() => {
        d.forEach(clearTimeout)
      });
      const y = S(() => n.value.isReleased ? ee("memepad/dex-bg", "gif") : ee("memepad/bg", "gif"));

      function j() {
        let b = 0;
        const N = [];
        let U;
        const D = $(),
          K = $([]),
          w = me(async () => await t.getReactions(s.value.shortname), re => {
            if (!D.value) {
              D.value = re;
              return
            }
            const {
              user: ka,
              ...Be
            } = D.value;
            D.value = re;
            const {
              user: ba,
              ...Fe
            } = D.value, Te = Object.entries(Fe).reduce((x, [V, pe]) => {
              const Ge = Be[V],
                Ye = pe,
                Je = _e.max(Ye.minus(Ge), 0).toNumber();
              return {
                ...x,
                [V]: Je
              }
            }, {}), xe = 5e3 / Object.values(Te).reduce((x, V) => x + V, 0), Ve = b, He = x => ({
              id: at(),
              image: nt(x),
              position: {
                x: ve(0, 20) - 10,
                y: ve(0, 20) - 10
              },
              animationType: ve(1, 2),
              createdAt: Date.now()
            });
            Object.entries(Te).reduce((x, [V, pe]) => x.concat(Array(pe).fill(V)), []).sort(() => Math.random() - .5).forEach((x, V) => {
              N.push(setTimeout(() => {
                Ve === b && K.value.push(He(x))
              }, xe * V))
            })
          }, 5e3),
          F = async () => {
            await w.exec(), U = De(() => {
              K.value = K.value.filter(re => Date.now() - re.createdAt < 6e3)
            }, 2e3)
          }, ce = () => {
            w.destroy(), N.forEach(clearTimeout), U && clearInterval(U), D.value = void 0, K.value = []
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
          N = ls,
          U = gs;
        return c(), _("div", fs, [o("div", ys, [e(r).isLowEndDevice.value ? A("", !0) : (c(), _("img", {
          key: 0,
          src: e(y),
          alt: "Gif",
          class: J([{
            "is-version-1": ((D = e(s).tonCollectedPercent) == null ? void 0 : D.lte(30)) && !e(n).isReleased,
            "is-version-2": ((K = e(s).tonCollectedPercent) == null ? void 0 : K.gt(30)) && e(s).tonCollectedPercent.lte(60) && !e(n).isReleased,
            "is-version-3": ((z = e(s).tonCollectedPercent) == null ? void 0 : z.gt(60)) && !e(n).isReleased,
            "is-dex": e(n).isReleased
          }, "gif"])
        }, null, 10, Ss)), o("img", {
          src: e(M),
          alt: "Gif",
          class: "room"
        }, null, 8, Es), h[2] || (h[2] = o("div", {
          class: "gradient"
        }, null, -1))]), o("div", Is, [o("div", Ts, [o("div", ks, [v(b, {
          name: "animations/Fire",
          size: 28
        }), o("div", bs, g(("t" in f ? f.t : e(L))("memepad.explore.spotlight.title")), 1)]), t.list.length > 1 ? (c(), _("div", {
          key: 0,
          class: "controls",
          style: ne({
            gridTemplateColumns: `repeat(${t.list.length}, 1fr)`
          })
        }, [(c(!0), _(G, null, le(t.list, (w, F) => (c(), _("div", {
          key: F + "" + e(a),
          class: J(["item", {
            active: e(a) > F,
            current: e(a) === F
          }]),
          onClick: ce => l(F)
        }, h[3] || (h[3] = [o("div", {
          class: "line"
        }, [o("div", {
          class: "fill"
        })], -1)]), 10, $s))), 128))], 4)) : A("", !0)]), o("div", {
          ref_key: "listEl",
          ref: u,
          class: "list",
          onScroll: h[0] || (h[0] = (...w) => e(i) && e(i)(...w)),
          onTouchmove: h[1] || (h[1] = (...w) => e(i) && e(i)(...w))
        }, [(c(!0), _(G, null, le(t.list, (w, F) => (c(), C(N, {
          key: w.id,
          index: F,
          jetton: w,
          "bcl-data": t.bclData,
          class: "item"
        }, null, 8, ["index", "jetton", "bcl-data"]))), 128))], 544), (c(), C(U, {
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
        }, [(c(!0), _(G, null, le(e(I), w => (c(), _("img", {
          key: w.id,
          src: w.image,
          class: J(`animation-${w.animationType}`),
          style: ne({
            "--x-offset": w.position.x + "px",
            "--y-offset": w.position.y + "px"
          })
        }, null, 14, Cs))), 128))], 4)])])
      }
    }
  }),
  ws = O(Ms, [
    ["__scopeId", "data-v-297761a1"]
  ]),
  Ls = R({
    __name: "ImageCollectedCircle",
    props: {
      image: {},
      collectedPercent: {},
      isReleased: {
        type: Boolean
      }
    },
    setup(m) {
      return (t, r) => {
        const a = Se;
        return c(), _("div", {
          class: J(["memepad-jetton-image-collected-circle", {
            "is-released": t.isReleased
          }]),
          style: ne({
            "--collected-percent": t.collectedPercent
          })
        }, [v(a, {
          src: t.image,
          size: 48,
          class: "image"
        }, null, 8, ["src"])], 6)
      }
    }
  }),
  As = O(Ls, [
    ["__scopeId", "data-v-e0e5954b"]
  ]),
  Ps = {
    class: "center"
  },
  Ns = {
    class: "ticker"
  },
  Ds = {
    key: 0,
    class: "base-stats"
  },
  Rs = {
    key: 0,
    class: "holders-count"
  },
  Os = {
    class: "text"
  },
  js = {
    key: 1,
    class: "transactions-count"
  },
  Us = {
    class: "text"
  },
  Ks = {
    key: 1,
    class: "my-tokens-stats"
  },
  Bs = {
    class: "jettons"
  },
  Fs = {
    key: 0,
    class: "base-values"
  },
  xs = {
    class: "market-cap"
  },
  Vs = {
    class: "label"
  },
  Hs = {
    class: "value"
  },
  Gs = {
    class: "lifetime"
  },
  Ys = {
    class: "text"
  },
  Js = {
    key: 1,
    class: "my-tokens-values"
  },
  Ws = {
    class: "fiat"
  },
  zs = R({
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
        default: Y.BASE
      }
    },
    setup(m) {
      const t = m,
        r = S(() => X().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: t.analyticsSource
          }
        })),
        a = S(() => t.jetton.stats.tonCollected && t.bclData && t.jetton.stats.tonCollected.div(t.bclData.tonForDex).times(100).toNumber()),
        n = d => {
          const T = d.decimalPlaces();
          return Math.max(Math.min(1, T), 0)
        },
        l = S(() => Pe(t.jetton.releaseTimestamp).label),
        u = S(() => t.jetton.ownedAmount ? be(t.jetton.ownedAmount, t.jetton.ticker).frontend : "-"),
        i = S(() => t.jetton.ownedAmountUSD ? be(t.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        s = S(() => t.jetton.pnlPercent ? ft(t.jetton.pnlPercent) : void 0);
      return (d, T) => {
        const M = As,
          E = Q,
          I = Ee;
        return c(), C(I, {
          to: e(r),
          class: "memepad-jetton-list-item"
        }, {
          default: B(() => {
            var k;
            return [v(M, {
              image: e(ye)(d.jetton.iconFileKey),
              "collected-percent": e(a),
              "is-released": d.jetton.isReleased
            }, null, 8, ["image", "collected-percent", "is-released"]), o("div", Ps, [o("div", Ns, g(d.jetton.ticker), 1), d.mode === e(Y).BASE ? (c(), _("div", Ds, [d.jetton.stats.holdersCount !== void 0 ? (c(), _("div", Rs, [v(E, {
              name: "personal",
              class: "icon"
            }), o("span", Os, g(("formatCount" in d ? d.formatCount : e(W))(d.jetton.stats.holdersCount, {
              accuracy: 0
            }).full), 1)])) : A("", !0), d.jetton.stats.transactionsCount !== void 0 ? (c(), _("div", js, [v(E, {
              name: "transfer",
              class: "icon"
            }), o("span", Us, g(("formatCount" in d ? d.formatCount : e(W))(d.jetton.stats.transactionsCount, {
              accuracy: 0
            }).full), 1)])) : A("", !0)])) : d.mode === e(Y).MY_TOKENS ? (c(), _("div", Ks, [o("div", Bs, g(e(u)), 1)])) : A("", !0)]), d.mode === e(Y).BASE ? (c(), _("div", Fs, [o("div", xs, [o("span", Vs, g(("t" in d ? d.t : e(L))("memepad.jetton.stats.market_cap")), 1), o("span", Hs, g(d.jetton.stats.marketCap ? `$${("formatCount"in d?d.formatCount:e(W))(d.jetton.stats.marketCap,{accuracy:n(d.jetton.stats.marketCap)}).full}` : "-"), 1)]), o("div", Gs, [v(E, {
              name: "environment-leaf",
              class: "icon"
            }), o("span", Ys, g(e(l)), 1)])])) : d.mode === e(Y).MY_TOKENS ? (c(), _("div", Js, [o("div", Ws, g(e(i)), 1), o("div", {
              class: J(["pnl", e(s) && e(s).cls])
            }, g(((k = e(s)) == null ? void 0 : k.formatted) ?? "-"), 3)])) : A("", !0)]
          }),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  qs = O(zs, [
    ["__scopeId", "data-v-011cea28"]
  ]),
  Xs = R({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      bclData: {},
      mode: {}
    },
    setup(m) {
      return (t, r) => {
        const a = qs;
        return c(), C(ot, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: B(() => [(c(!0), _(G, null, le(t.items, n => (c(), C(a, {
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
  je = O(Xs, [
    ["__scopeId", "data-v-e4070fed"]
  ]),
  Zs = {
    class: "memepad-explore-panel-list"
  },
  Qs = {
    class: "top"
  },
  ea = {
    class: "search-btn-wrapper"
  },
  ta = {
    key: 0,
    class: "connect"
  },
  sa = {
    class: "label"
  },
  aa = {
    key: 1,
    class: "connect"
  },
  na = {
    key: 1,
    class: "empty-state"
  },
  oa = {
    class: "label"
  },
  la = R({
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
        r = Re(),
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
        }].map(i => {
          const s = {
            [p.FRESH]: "New",
            [p.HOT]: "Hot",
            [p.BLUMING]: "Bluming",
            [p.BLUMED]: "Listed",
            [p.MCAP]: "MCap",
            [p.MY_TOKENS]: "My tokens"
          };
          return {
            ...i,
            label: s[i.value]
          }
        }),
        l = S(() => {
          switch (t.value) {
            case p.FRESH:
              return H.FRESH;
            case p.BLUMING:
              return H.BLUMING;
            case p.HOT:
              return H.HOT;
            case p.MY_TOKENS:
              return H.POSITIONS;
            case p.MCAP:
              return H.MCAP;
            case p.BLUMED:
              return H.BLUMED
          }
        }),
        u = S(() => t.value === p.MY_TOKENS ? Y.MY_TOKENS : Y.BASE);
      return (i, s) => {
        const d = Q,
          T = gt,
          M = ct,
          E = je,
          I = yt,
          k = Et;
        return c(), _("div", Zs, [o("div", Qs, [v(T, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = P => t.value = P),
          items: e(n)
        }, {
          after: B(() => [o("div", ea, [o("button", {
            type: "button",
            class: "search reset",
            onClick: s[0] || (s[0] = P => i.$emit("search"))
          }, [v(d, {
            name: "search",
            class: "icon"
          })])])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (e(r).wallet.value.status === "must_reconnect" || e(r).wallet.value.status === "not_found") && t.value === e(p).MY_TOKENS ? (c(), _("div", ta, [o("div", sa, g(("t" in i ? i.t : e(L))("memepad.explore.my_tokens.connect_text")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: s[2] || (s[2] = P => e(a).runConnectionFlow())
        }, g(("t" in i ? i.t : e(L))("wallet.connect.btn")), 1)])) : e(r).wallet.value.status === "loading" && t.value === e(p).MY_TOKENS ? (c(), _("div", aa, [v(M, {
          type: e(it).LIGHT
        }, null, 8, ["type"])])) : i.items ? (c(), C(I, {
          key: 2,
          onEnd: s[3] || (s[3] = P => i.$emit("scrolled"))
        }, {
          default: B(() => [i.items.length ? (c(), C(E, {
            key: t.value,
            items: i.items,
            "analytics-source": e(l),
            "bcl-data": i.bclData,
            mode: e(u)
          }, null, 8, ["items", "analytics-source", "bcl-data", "mode"])) : t.value === e(p).MY_TOKENS ? (c(), _("div", na, [v(d, {
            name: "add-plus-circle",
            class: "icon"
          }), o("div", oa, g(("t" in i ? i.t : e(L))("memepad.explore.my_tokens.empty_text")), 1)])) : A("", !0)]),
          _: 1
        })) : (c(), _(G, {
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
  ia = O(la, [
    ["__scopeId", "data-v-92e56a6d"]
  ]),
  ca = () => {
    const m = de(() => "", "$nnokZ0cAmU"),
      t = de(() => !1, "$dxYpAQPdtd"),
      r = de("$pDWqkemNGG"),
      a = rt(async i => (t.value = !0, {
        res: await Z.getMemepadSearch(i),
        search: i
      }), ({
        res: i,
        search: s
      }) => {
        t.value = !1, m.value = s, r.value = i.err ? void 0 : i.data
      });
    return {
      _flow: {
        init: () => {},
        destroy: () => {
          m.value = "", t.value = !1, r.value = void 0
        }
      },
      search: i => {
        i !== m.value && (i === "" ? (t.value = !1, r.value = void 0, m.value = "") : a(i))
      },
      searchLine: S(() => m.value),
      data: S(() => r.value),
      isSearching: S(() => t.value)
    }
  },
  ra = {
    class: "memepad-search page"
  },
  da = {
    key: 0,
    class: "empty"
  },
  ua = R({
    __name: "Search",
    emits: ["close"],
    setup(m, {
      emit: t
    }) {
      const r = t,
        a = $(),
        n = ca();
      n._flow.init(), ie(() => n._flow.destroy());
      const {
        bclData: l
      } = Oe(), u = $(!1), i = $(""), s = [];
      (() => {
        s.push(setTimeout(() => {
          u.value = !0
        }, 400))
      })(), ie(() => {
        s.forEach(E => clearTimeout(E))
      });
      const {
        debouncedFunction: T
      } = Ne(n.search, 600);
      return oe(i, T), Ie().memepad.memepadSearchOpen(), kt(async () => {
        var E;
        (E = a.value) == null || E.blur(), await dt(), await ut(0), r("close")
      }), (E, I) => {
        const k = Tt,
          P = je;
        return c(), _("div", ra, [v(k, {
          ref_key: "searchWithTitleComponent",
          ref: a,
          modelValue: e(i),
          "onUpdate:modelValue": I[0] || (I[0] = y => fe(i) ? i.value = y : null),
          placeholder: ("t" in E ? E.t : e(L))("memepad.search.input_placeholder"),
          activated: e(u),
          autofocus: "",
          "is-loading": e(n).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), e(n).data.value ? (c(), _(G, {
          key: 0
        }, [e(n).data.value.length === 0 ? (c(), _("div", da, g(("t" in E ? E.t : e(L))("memepad.search.empty_text")), 1)) : (c(), C(P, {
          key: 1,
          items: e(n).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in E ? E.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : e(H)).SEARCH,
          "bcl-data": e(l)
        }, null, 8, ["items", "analytics-source", "bcl-data"]))], 64)) : A("", !0)])
      }
    }
  }),
  ma = O(ua, [
    ["__scopeId", "data-v-d0324906"]
  ]),
  Ue = (m, t, r) => {
    const a = Math.max(0, m.length - 1),
      n = $([...m]),
      l = $(a),
      u = () => {
        l.value < n.value.length - 1 && l.value++
      },
      i = S(() => {
        const k = Math.max(0, l.value - r + 1),
          P = Math.min(l.value + 1, n.value.length);
        return [...n.value].slice(k, P).reverse()
      }),
      s = S(() => n.value.reverse()[l.value]);
    let d;
    return {
      init: () => {
        clearInterval(d), d = De(u, t)
      },
      destroy: () => {
        n.value = [], l.value = 0, clearInterval(d)
      },
      addItems: k => {
        n.value.push(...k)
      },
      setItems: k => {
        n.value = k, l.value = k.length - 1
      },
      items: S(() => n.value),
      appearedItems: i,
      currentAppearedItem: s
    }
  },
  pa = () => {
    const m = mt(),
      t = Re(),
      r = Ie();
    let a;
    (y => {
      y.LIST = "list", y.STEP_LIST = "step-list", y.PAGINATION_LIST = "pagination-list"
    })(a || (a = {}));
    const n = {
        [p.FRESH]: "step-list",
        [p.BLUMING]: "pagination-list",
        [p.BLUMED]: "pagination-list",
        [p.MCAP]: "pagination-list",
        [p.MY_TOKENS]: "list",
        [p.HOT]: "list"
      },
      l = async ({
        type: y,
        pageToken: j
      }) => {
        if (y === p.MY_TOKENS) {
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
          b = f[y],
          N = h[y];
        return await Z.getMemepadJettonsSection(b, N, j)
      }, u = de(() => p.FRESH, "$SbGDXlzgsy"), i = () => {
        const y = u.value;
        switch (n[y]) {
          case "step-list":
            return {
              type: "step-list", stepList: void 0, interval: me(async () => await l({
                type: y
              }), f => {
                var b;
                if (((b = s.value) == null ? void 0 : b.type) !== "step-list" || y !== u.value) return;
                const h = s.value.stepList;
                if (!h) s.value.stepList = Ue(f.jettons, 1e3, 60), s.value.stepList.init();
                else {
                  const N = h,
                    U = f.jettons.filter(K => !N.items.some(z => z.id === K.id)),
                    D = N.items.map(K => f.jettons.find(w => w.id === K.id) || K);
                  N.setItems([...D]), N.addItems([...U].reverse())
                }
              }, 5e3)
            };
          case "pagination-list":
            return {
              type: "pagination-list", pagination: St(async h => {
                const b = await l({
                  type: y,
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
              type: "list", data: void 0, interval: me(async () => await l({
                type: y
              }), f => {
                var h;
                ((h = s.value) == null ? void 0 : h.type) !== "list" || y !== u.value || (s.value.data = f.jettons)
              }, 5e3)
            };
          default:
            throw te("Unknown type")
        }
      }, s = $(i()), d = () => {
        var y;
        if (s.value) switch (s.value.type) {
          case "list":
            s.value.interval.destroy();
            break;
          case "step-list":
            (y = s.value.stepList) == null || y.destroy(), s.value.interval.destroy();
            break;
          case "pagination-list":
            break;
          default:
            throw s.value, te("Unknown type")
        }
      }, T = async () => {
        switch (s.value = i(), s.value.type) {
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
    let M;
    const E = async () => {
      await T(), M = oe(u, async y => {
        d(), await T();
        const j = (() => {
          switch (y) {
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
        r.memepad.memepadOpenPanelListTab({
          source: j
        })
      })
    }, I = () => {
      d(), M == null || M()
    };
    m.onConnected(() => {
      u.value === p.MY_TOKENS && (d(), T())
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
      items: k
    }
  },
  _a = () => {
    const m = $(),
      t = S(() => {
        var u;
        return (u = m.value) == null ? void 0 : u.stepList.currentAppearedItem
      }),
      r = u => {
        m.value || (m.value = {
          stepList: Ue([], 1e3, 15)
        }, m.value.stepList.init()), m.value.stepList.addItems(u.reverse())
      },
      a = $(pt(async () => await Z.getMemepadExploreEvents(), u => {
        r(u.transactions)
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
  va = () => {
    const m = $(),
      r = me(async () => _t(await Z.getMemepadExploreSpotlight()), u => m.value = u.jettons, 5e3);
    return {
      init: async () => {
        await r.exec()
      },
      destroy: () => {
        r.destroy()
      },
      getReactions: u => Z.getMemepadJettonReactions(u),
      spotlight: S(() => m.value)
    }
  },
  ha = () => {
    const m = _a(),
      t = va(),
      r = pa();
    return {
      _flow: {
        init: async () => {
          await Promise.all([m.init(), t.init(), r.init()])
        },
        destroy: () => {
          m.destroy(), t.destroy(), r.destroy()
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
        activeTab: r.activeTab,
        items: r.items,
        onPaginationLoad: r.onPaginationLoad
      }
    }
  },
  ga = {
    key: 0,
    class: "memepad-explore"
  },
  fa = {
    class: "header"
  },
  ya = {
    class: "title"
  },
  Sa = R({
    __name: "Index",
    setup(m) {
      const {
        events: t,
        spotlight: r,
        panelList: a,
        _flow: {
          init: n,
          destroy: l
        }
      } = ha(), {
        bclData: u
      } = Oe(), i = $(!1);
      n().then(() => {
        i.value = !0
      }), ie(() => {
        l()
      });
      const s = $(!!Me().query.search),
        d = () => X().push({
          name: "memepad-new"
        }),
        T = () => {
          X().push({
            query: {
              search: "1"
            }
          }), s.value = !0
        },
        M = () => {
          s.value = !1, X().push({
            query: {
              search: void 0
            }
          }), Me().meta.back = void 0
        };
      return (E, I) => {
        var b;
        const k = Ft,
          P = Zt,
          y = ws,
          j = ia,
          f = It,
          h = ma;
        return c(), _(G, null, [e(i) ? (c(), _("div", ga, [o("div", fa, [o("div", ya, g(("t" in E ? E.t : e(L))("memepad.explore.title")), 1), v(k, {
          onLaunch: d
        })]), e(t).eventAppearedItem.value ? (c(), C(P, {
          key: 0,
          event: e(t).eventAppearedItem.value,
          class: "event"
        }, null, 8, ["event"])) : A("", !0), (b = e(r).items.value) != null && b.length ? (c(), C(y, {
          key: 1,
          list: e(r).items.value,
          "bcl-data": e(u),
          "get-reactions": e(r).getReactions
        }, null, 8, ["list", "bcl-data", "get-reactions"])) : A("", !0), v(j, {
          modelValue: e(a).activeTab.value,
          "onUpdate:modelValue": I[0] || (I[0] = N => e(a).activeTab.value = N),
          items: e(a).items.value,
          "bcl-data": e(u),
          onSearch: T,
          onScrolled: e(a).onPaginationLoad
        }, null, 8, ["modelValue", "items", "bcl-data", "onScrolled"])])) : (c(), C(f, {
          key: 1
        })), e(s) ? (c(), C(h, {
          key: 2,
          onClose: M
        })) : A("", !0)], 64)
      }
    }
  }),
  Ea = O(Sa, [
    ["__scopeId", "data-v-de510fa9"]
  ]),
  Ia = {
    class: "memepad-index page"
  },
  Le = "memepad-intro",
  Ta = R({
    __name: "index",
    setup(m) {
      const {
        $webApp: t
      } = ge(), r = $(t.storage.local.get(Le) ? "explore" : "intro"), a = () => {
        r.value = "explore", t.storage.local.set(Le, "true")
      };
      return Ie().memepad.memepadExploreOpen(), (l, u) => {
        const i = We,
          s = Lt,
          d = Ea;
        return c(), _("div", Ia, [v(i), e(r) === "intro" ? (c(), C(s, {
          key: 0,
          onStart: a
        })) : e(r) === "explore" ? (c(), C(d, {
          key: 1
        })) : A("", !0)])
      }
    }
  }),
  Ba = O(Ta, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  Ba as
  default
};