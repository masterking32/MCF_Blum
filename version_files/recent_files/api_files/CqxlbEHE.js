import {
  _ as Je
} from "./CSrvhT6W.js";
import {
  d as D,
  o as c,
  c as _,
  a as n,
  b as v,
  t as h,
  e,
  z as M,
  I as B,
  ad as fe,
  f as R,
  an as re,
  h as ge,
  ao as Ae,
  L as b,
  j as E,
  G as L,
  D as A,
  p as de,
  W as We,
  _ as Q,
  x as qe,
  aI as ze,
  m as Xe,
  F as V,
  ac as z,
  aJ as Y,
  aK as we,
  aL as Qe,
  aM as Ze,
  E as et,
  aN as ye,
  n as J,
  aO as Ie,
  J as Ee,
  aP as W,
  aw as se,
  a8 as $e,
  Y as tt,
  U as pe,
  Q as ae,
  am as Z,
  V as ne,
  T as Pe,
  q as oe,
  aa as Ne,
  aB as ve,
  ak as st,
  aQ as at,
  a4 as _e,
  aR as G,
  ab as Te,
  aS as ot,
  P as De,
  ar as nt,
  aT as p,
  aU as lt,
  aV as ct,
  aW as ie,
  aX as it,
  X,
  $ as Se,
  aY as rt,
  aZ as dt,
  a_ as ut,
  a$ as ee,
  b0 as te,
  b1 as Re,
  av as mt,
  at as be,
  b2 as q,
  a0 as pt,
  R as ke
} from "./CVKQB8Rv.js";
import {
  _ as _t
} from "./DHPBEK3u.js";
import {
  _ as vt,
  a as ht
} from "./CUCvoiJw.js";
import {
  g as ft
} from "./Dq4Di-wu.js";
import {
  _ as gt
} from "./DpS7mAhG.js";
import {
  _ as yt
} from "./XkP0CWxk.js";
import {
  _ as It
} from "./CjHJ8z5O.js";
import {
  u as Oe
} from "./DV8Q02sg.js";
import {
  u as Et
} from "./DgI3kD9p.js";
import "./CAImHdam.js";
import "./BQL4rvnv.js";
const St = {
    class: "memepad-intro"
  },
  Ct = {
    class: "content"
  },
  $t = {
    class: "title"
  },
  Tt = {
    class: "note"
  },
  bt = D({
    __name: "Intro",
    emits: ["start"],
    setup(u) {
      return (t, l) => {
        const s = fe,
          o = _t;
        return c(), _("div", St, [n("div", Ct, [v(s, {
          name: "animations/Moon",
          class: "background"
        }), n("div", $t, h(("t" in t ? t.t : e(M))("memepad.intro.title")), 1), n("button", {
          type: "button",
          class: "reset",
          onClick: l[0] || (l[0] = i => t.$emit("start"))
        }, h(("t" in t ? t.t : e(M))("memepad.intro.button_text")), 1)]), v(o, {
          "no-background": ""
        }, {
          default: B(() => [n("div", Tt, h(("t" in t ? t.t : e(M))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  kt = R(bt, [
    ["__scopeId", "data-v-2da05feb"]
  ]),
  Mt = {
    class: "memepad-sheet"
  },
  Lt = {
    class: "title"
  },
  At = {
    class: "subtitle"
  },
  wt = {
    class: "label"
  },
  Pt = {
    class: "actions"
  },
  Nt = {
    key: 0,
    class: "dont-show"
  },
  Dt = {
    class: "checkbox"
  },
  Rt = D({
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
    setup(u, {
      emit: t
    }) {
      const {
        $webApp: l
      } = ge(), s = u, o = t, i = Ae(u, "modelValue"), m = b(!s.dontShowStorageKey), a = b(!1), r = E({
        get: () => i.value && m.value,
        set: g => {
          i.value = g, a.value && s.dontShowStorageKey && l.storage.local.set(s.dontShowStorageKey, "true")
        }
      });
      (() => {
        s.dontShowStorageKey && (m.value = !l.storage.local.get(s.dontShowStorageKey))
      })();
      const f = () => o("readMoreClick"),
        k = () => {
          r.value = !1, o("close", {
            source: "modal"
          })
        },
        S = () => {
          r.value = !1, o("close", {
            source: "button"
          })
        };
      return (g, T) => {
        const C = fe,
          y = Q,
          w = vt,
          $ = qe,
          I = ze;
        return c(), L(I, {
          "model-value": e(r),
          "onUpdate:modelValue": k
        }, {
          default: B(() => [n("div", Mt, [v(C, {
            name: g.lottie,
            size: 116
          }, null, 8, ["name"]), n("div", Lt, h(g.title), 1), n("div", null, [n("div", At, h(g.subtitle), 1), g.hideReadMore ? A("", !0) : (c(), _("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: f
          }, [n("span", wt, h(("t" in g ? g.t : e(M))("base.read_more")), 1), v(y, {
            name: "arrow-right",
            class: "icon"
          })]))]), n("div", Pt, [g.dontShowStorageKey ? (c(), _("div", Nt, [n("div", Dt, [v(w, {
            modelValue: e(a),
            "onUpdate:modelValue": T[0] || (T[0] = N => de(a) ? a.value = N : null)
          }, null, 8, ["modelValue"]), n("span", {
            class: "label",
            onClick: T[1] || (T[1] = N => a.value = !e(a))
          }, h(("t" in g ? g.t : e(M))("memepad.sheet.dont_show_again_label")), 1)])])) : A("", !0), v($, {
            label: g.buttonText,
            fill: "",
            size: e(We).LARGE,
            onClick: S
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  Ot = R(Rt, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  Me = "memepad-launch-jetton",
  jt = D({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(u, {
      emit: t
    }) {
      const {
        $webApp: l
      } = ge(), s = t, o = b(!1), i = b(l.storage.local.get(Me) ? "watched" : "unwatched"), m = () => {
        i.value === "watched" ? s("launch") : o.value = !0
      }, a = () => {
        l.storage.local.set(Me, "true"), s("launch")
      };
      return (r, d) => {
        const f = Ot;
        return c(), _(V, null, [n("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: m
        }, [d[1] || (d[1] = n("i", {
          class: "seedling"
        }, null, -1)), Xe(" " + h(("t" in r ? r.t : e(M))("memepad.explore.launch.button_text")), 1)]), v(f, {
          modelValue: e(o),
          "onUpdate:modelValue": d[0] || (d[0] = k => de(o) ? o.value = k : null),
          title: ("t" in r ? r.t : e(M))("memepad.explore.launch_modal.title"),
          subtitle: ("t" in r ? r.t : e(M))("memepad.explore.launch_modal.subtitle"),
          "button-text": ("t" in r ? r.t : e(M))("memepad.explore.launch_modal.button_text"),
          "hide-read-more": "",
          lottie: "animations/Lightning",
          onClose: a
        }, null, 8, ["modelValue", "title", "subtitle", "button-text"])], 64)
      }
    }
  }),
  Ut = R(jt, [
    ["__scopeId", "data-v-9b8c98c6"]
  ]),
  Kt = ["src"],
  Bt = {
    key: 1,
    class: "user-avatar-empty"
  },
  Ft = {
    class: "text"
  },
  Vt = {
    key: 0,
    class: "user-name"
  },
  xt = {
    key: 1,
    class: "user-address"
  },
  Ht = {
    class: "action"
  },
  Yt = {
    class: "amount"
  },
  Gt = {
    class: "ticker"
  },
  Jt = {
    class: "seconds"
  },
  Wt = D({
    __name: "Event",
    props: {
      event: {}
    },
    setup(u) {
      const t = u,
        l = E(() => M(`memepad.explore.event.kind.${t.event.type.toLowerCase()}`).toLowerCase()),
        s = E(() => z().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.event.shortname
          },
          query: {
            from: Y.ACTIONBAR
          }
        })),
        o = E(() => {
          const i = we(t.event.timestamp);
          return i.isDate ? i.label : `${i.label} ago`
        });
      return (i, m) => {
        const a = Q,
          r = Qe("I18nT"),
          d = Ie,
          f = Ee;
        return c(), L(f, {
          to: e(s),
          class: J(["memepad-explore-event", `is-${i.event.type.toLowerCase()}`])
        }, {
          default: B(() => [i.event.user.avatarUrl ? (c(), _("img", {
            key: 0,
            src: i.event.user.avatarUrl,
            alt: "User avatar",
            class: "user-avatar",
            width: "16",
            height: "16"
          }, null, 8, Kt)) : (c(), _("div", Bt, [v(a, {
            name: "space-invader",
            class: "icon"
          })])), n("div", Ft, [i.event.user.nickname ? (c(), _("span", Vt, h(i.event.user.nickname), 1)) : (c(), _("span", xt, h(("sliceWalletAddress" in i ? i.sliceWalletAddress : e(Ze))(i.event.user.address)), 1)), n("span", Ht, h(e(l)), 1), i.event.amount ? (c(), L(r, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: B(() => [n("span", Yt, h(`${("formatTon"in i?i.formatTon:e(et))(i.event.amount)} TON`), 1)]),
            _: 1
          })) : A("", !0)]), v(d, {
            src: e(ye)(i.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), n("span", Gt, h(i.event.ticker), 1), n("span", Jt, h(e(o)), 1)]),
          _: 1
        }, 8, ["to", "class"])
      }
    }
  }),
  qt = R(Wt, [
    ["__scopeId", "data-v-9a23721a"]
  ]),
  zt = {
    class: "ticker"
  },
  Xt = {
    class: "stats"
  },
  Qt = {
    class: "holders-count"
  },
  Zt = {
    class: "text"
  },
  es = {
    class: "transactions-count"
  },
  ts = {
    class: "text"
  },
  ss = D({
    __name: "Card",
    props: {
      jetton: {},
      bclData: {},
      index: {}
    },
    setup(u) {
      const t = u,
        l = E(() => z().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: `spotlight-${t.index+1}`
          }
        }));
      return (s, o) => {
        const i = Ie,
          m = Q,
          a = Ee;
        return c(), L(a, {
          to: e(l),
          class: "memepad-explore-spotlight-card"
        }, {
          default: B(() => [v(i, {
            src: e(ye)(s.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), n("span", zt, h(s.jetton.ticker), 1), n("div", Xt, [n("div", Qt, [v(m, {
            name: "personal",
            class: "icon"
          }), n("span", Zt, h(s.jetton.stats.holdersCount ? ("formatCount" in s ? s.formatCount : e(W))(s.jetton.stats.holdersCount, {
            accuracy: 0
          }).full : "-"), 1)]), n("div", es, [v(m, {
            name: "transfer",
            class: "icon"
          }), n("span", ts, h(s.jetton.stats.transactionsCount ? ("formatCount" in s ? s.formatCount : e(W))(s.jetton.stats.transactionsCount, {
            accuracy: 0
          }).full : "-"), 1)])])]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  as = R(ss, [
    ["__scopeId", "data-v-badcb82b"]
  ]),
  os = {
    class: "inner"
  },
  ns = {
    class: "left"
  },
  ls = {
    class: "mc"
  },
  cs = {
    key: 0,
    class: "diff"
  },
  is = {
    key: 1,
    class: "percent"
  },
  rs = {
    class: "progress"
  },
  ds = {
    class: "direction-wrapper"
  },
  us = {
    key: 0,
    class: "direction up"
  },
  ms = {
    key: 0,
    class: "direction down"
  },
  ps = D({
    __name: "Progress",
    props: {
      jetton: {},
      bclData: {},
      moveDirection: {},
      marketCap: {},
      tonCollectedPercent: {}
    },
    setup(u) {
      return (t, l) => {
        var o;
        const s = Q;
        return c(), _("div", {
          class: J(["memepad-explore-spotlight-progress", [t.moveDirection && `is-${(o=t.moveDirection)==null?void 0:o.direction}`, {
            "is-released": t.jetton.isReleased
          }]])
        }, [n("div", os, [n("div", ns, [n("span", ls, h(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (c(), _("span", cs, h(t.moveDirection.diffFormatted), 1)) : A("", !0)]), t.jetton.isReleased ? (c(), L(s, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (c(), _("span", is, h(t.tonCollectedPercent ?? "-") + "% ", 1))]), n("div", rs, [n("div", {
          class: "line",
          style: se({
            width: `${t.tonCollectedPercent}%`
          })
        }, [n("div", ds, [v($e, {
          name: "direction-opacity"
        }, {
          default: B(() => {
            var i;
            return [((i = t.moveDirection) == null ? void 0 : i.direction) === "up" ? (c(), _("div", us, [v(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : A("", !0)]
          }),
          _: 1
        }), v($e, {
          name: "direction-opacity"
        }, {
          default: B(() => {
            var i;
            return [((i = t.moveDirection) == null ? void 0 : i.direction) === "down" ? (c(), _("div", ms, [v(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            }), v(s, {
              name: "memepad/direction-arrows",
              class: "icon"
            })])) : A("", !0)]
          }),
          _: 1
        })])], 4)])], 2)
      }
    }
  }),
  _s = R(ps, [
    ["__scopeId", "data-v-cefc26d8"]
  ]),
  vs = {
    class: "memepad-explore-spotlight"
  },
  hs = {
    class: "bg"
  },
  fs = ["src"],
  gs = ["src"],
  ys = {
    class: "content"
  },
  Is = {
    class: "header"
  },
  Es = {
    class: "logo"
  },
  Ss = {
    class: "title"
  },
  Cs = ["onClick"],
  $s = ["src"],
  Ts = D({
    __name: "Spotlight",
    props: {
      list: {},
      bclData: {},
      getReactions: {
        type: Function
      }
    },
    setup(u) {
      const t = u,
        l = tt(),
        s = b(0),
        o = E(() => t.list[s.value]),
        i = $ => {
          document.querySelector(".memepad-explore-spotlight .list").scrollTo({
            left: $ * window.innerWidth + (s.value > $ ? -1 : 1),
            behavior: "smooth"
          })
        },
        m = b(null),
        a = Ne(() => {
          if (!m.value) return;
          const $ = m.value.children[0].offsetWidth + 10,
            I = m.value.scrollLeft,
            N = Math.round(I / $);
          s.value = N
        }, 50).debouncedFunction,
        r = E(() => {
          const $ = (() => {
              if (!(!o.value.stats.tonCollected || !t.bclData)) return new pe(o.value.stats.tonCollected.div(t.bclData.tonForDex).times(100).toFixed(0, pe.ROUND_DOWN))
            })(),
            I = o.value.stats.marketCap && W(o.value.stats.marketCap);
          return {
            id: o.value.id,
            shortname: o.value.shortname,
            tonCollectedPercent: $,
            marketCap: I
          }
        }),
        d = [],
        f = b();
      ae(r, ($, I) => {
        if (!$.marketCap || !I.marketCap || $.marketCap.full === I.marketCap.full || $.id !== I.id) {
          f.value = void 0;
          return
        }
        const N = $.marketCap.raw.minus(I.marketCap.raw),
          U = N.lt(0),
          O = W(N.abs(), {
            accuracy: 0
          }).full;
        O !== "0" && (f.value = {
          direction: U ? "down" : "up",
          diffFormatted: `${U?"-":"+"}${O}`
        }, d.push(setTimeout(() => f.value = void 0, 3e3)))
      });
      const k = E(() => {
          var $, I;
          return (($ = f.value) == null ? void 0 : $.direction) === "down" ? Z("memepad/spotlight-room-down", "svg") : ((I = f.value) == null ? void 0 : I.direction) === "up" ? Z("memepad/spotlight-room-up", "svg") : Z("memepad/spotlight-room", "svg")
        }),
        S = () => {
          d.push(setTimeout(() => {
            s.value === t.list.length - 1 ? i(0) : i(s.value + 1)
          }, 15e3))
        },
        {
          reactionsAnimations: g,
          ANIMATION_DURATION: T,
          restart: C
        } = w();
      ae(s, () => {
        d.forEach(clearTimeout), S(), C()
      }, {
        immediate: !0
      }), ne(() => {
        d.forEach(clearTimeout)
      });
      const y = E(() => o.value.isReleased ? Z("memepad/dex-bg", "gif") : Z("memepad/bg", "gif"));

      function w() {
        let N = 0;
        const U = [];
        let O;
        const j = b(),
          x = b([]),
          P = Pe(async () => await t.getReactions(r.value.shortname), ce => {
            if (!j.value) {
              j.value = ce;
              return
            }
            const {
              user: Ea,
              ...Ke
            } = j.value;
            j.value = ce;
            const {
              user: Sa,
              ...Be
            } = j.value, Ce = Object.entries(Be).reduce((F, [H, me]) => {
              const He = Ke[H],
                Ye = me,
                Ge = pe.max(Ye.minus(He), 0).toNumber();
              return {
                ...F,
                [H]: Ge
              }
            }, {}), Fe = 5e3 / Object.values(Ce).reduce((F, H) => F + H, 0), Ve = N, xe = F => ({
              id: st(),
              image: at(F),
              position: {
                x: _e(0, 20) - 10,
                y: _e(0, 20) - 10
              },
              animationType: _e(1, 2),
              createdAt: Date.now()
            });
            Object.entries(Ce).reduce((F, [H, me]) => F.concat(Array(me).fill(H)), []).sort(() => Math.random() - .5).forEach((F, H) => {
              U.push(setTimeout(() => {
                Ve === N && x.value.push(xe(F))
              }, Fe * H))
            })
          }, 5e3),
          K = async () => {
            await P.exec(), O = ve(() => {
              x.value = x.value.filter(ce => Date.now() - ce.createdAt < 6e3)
            }, 2e3)
          }, le = () => {
            P.destroy(), U.forEach(clearTimeout), O && clearInterval(O), j.value = void 0, x.value = []
          };
        ae(() => r.value.shortname, () => {
          N++, U.forEach(clearTimeout), le(), K()
        }), K(), ne(le);
        const Ue = () => {
          le(), K()
        };
        return {
          reactionsAnimations: E(() => x.value),
          ANIMATION_DURATION: 6e3,
          restart: Ue
        }
      }
      return ($, I) => {
        var j, x, ue;
        const N = fe,
          U = as,
          O = _s;
        return c(), _("div", vs, [n("div", hs, [e(l).isLowEndDevice.value ? A("", !0) : (c(), _("img", {
          key: 0,
          src: e(y),
          alt: "Gif",
          class: J([{
            "is-version-1": ((j = e(r).tonCollectedPercent) == null ? void 0 : j.lte(30)) && !e(o).isReleased,
            "is-version-2": ((x = e(r).tonCollectedPercent) == null ? void 0 : x.gt(30)) && e(r).tonCollectedPercent.lte(60) && !e(o).isReleased,
            "is-version-3": ((ue = e(r).tonCollectedPercent) == null ? void 0 : ue.gt(60)) && !e(o).isReleased,
            "is-dex": e(o).isReleased
          }, "gif"])
        }, null, 10, fs)), n("img", {
          src: e(k),
          alt: "Gif",
          class: "room"
        }, null, 8, gs), I[2] || (I[2] = n("div", {
          class: "gradient"
        }, null, -1))]), n("div", ys, [n("div", Is, [n("div", Es, [v(N, {
          name: "animations/Fire",
          size: 28
        }), n("div", Ss, h(("t" in $ ? $.t : e(M))("memepad.explore.spotlight.title")), 1)]), t.list.length > 1 ? (c(), _("div", {
          key: 0,
          class: "controls",
          style: se({
            gridTemplateColumns: `repeat(${t.list.length}, 1fr)`
          })
        }, [(c(!0), _(V, null, oe(t.list, (P, K) => (c(), _("div", {
          key: K + "" + e(s),
          class: J(["item", {
            active: e(s) > K,
            current: e(s) === K
          }]),
          onClick: le => i(K)
        }, I[3] || (I[3] = [n("div", {
          class: "line"
        }, [n("div", {
          class: "fill"
        })], -1)]), 10, Cs))), 128))], 4)) : A("", !0)]), n("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: I[0] || (I[0] = (...P) => e(a) && e(a)(...P)),
          onTouchmove: I[1] || (I[1] = (...P) => e(a) && e(a)(...P))
        }, [(c(!0), _(V, null, oe(t.list, (P, K) => (c(), L(U, {
          key: P.id,
          index: K,
          jetton: P,
          "bcl-data": t.bclData,
          class: "item"
        }, null, 8, ["index", "jetton", "bcl-data"]))), 128))], 544), (c(), L(O, {
          key: e(o).id,
          jetton: e(o),
          "bcl-data": t.bclData,
          "move-direction": e(f),
          "market-cap": e(r).marketCap,
          "ton-collected-percent": e(r).tonCollectedPercent
        }, null, 8, ["jetton", "bcl-data", "move-direction", "market-cap", "ton-collected-percent"])), n("div", {
          class: "reactions",
          style: se({
            "--animation-duration": `${e(T)}ms`
          })
        }, [(c(!0), _(V, null, oe(e(g), P => (c(), _("img", {
          key: P.id,
          src: P.image,
          class: J(`animation-${P.animationType}`),
          style: se({
            "--x-offset": P.position.x + "px",
            "--y-offset": P.position.y + "px"
          })
        }, null, 14, $s))), 128))], 4)])])
      }
    }
  }),
  bs = R(Ts, [
    ["__scopeId", "data-v-297761a1"]
  ]),
  ks = D({
    __name: "ImageCollectedCircle",
    props: {
      image: {},
      collectedPercent: {},
      isReleased: {
        type: Boolean
      }
    },
    setup(u) {
      return (t, l) => {
        const s = Ie;
        return c(), _("div", {
          class: J(["memepad-jetton-image-collected-circle", {
            "is-released": t.isReleased
          }]),
          style: se({
            "--collected-percent": t.collectedPercent
          })
        }, [v(s, {
          src: t.image,
          size: 48,
          class: "image"
        }, null, 8, ["src"])], 6)
      }
    }
  }),
  Ms = R(ks, [
    ["__scopeId", "data-v-e0e5954b"]
  ]),
  Ls = {
    class: "center"
  },
  As = {
    class: "ticker"
  },
  ws = {
    key: 0,
    class: "base-stats"
  },
  Ps = {
    key: 0,
    class: "holders-count"
  },
  Ns = {
    class: "text"
  },
  Ds = {
    key: 1,
    class: "transactions-count"
  },
  Rs = {
    class: "text"
  },
  Os = {
    key: 1,
    class: "my-tokens-stats"
  },
  js = {
    class: "jettons"
  },
  Us = {
    key: 0,
    class: "base-values"
  },
  Ks = {
    class: "market-cap"
  },
  Bs = {
    class: "label"
  },
  Fs = {
    class: "value"
  },
  Vs = {
    class: "lifetime"
  },
  xs = {
    class: "text"
  },
  Hs = {
    key: 1,
    class: "my-tokens-values"
  },
  Ys = {
    class: "fiat"
  },
  Gs = D({
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
    setup(u) {
      const t = u,
        l = E(() => z().resolve({
          name: "memepad-jetton-shortname",
          params: {
            shortname: t.jetton.shortname
          },
          query: {
            from: t.analyticsSource
          }
        })),
        s = E(() => t.jetton.stats.tonCollected && t.bclData && t.jetton.stats.tonCollected.div(t.bclData.tonForDex).times(100).toNumber()),
        o = d => {
          const f = d.decimalPlaces();
          return Math.max(Math.min(1, f), 0)
        },
        i = E(() => we(t.jetton.releaseTimestamp).label),
        m = E(() => t.jetton.ownedAmount ? Te(t.jetton.ownedAmount, t.jetton.ticker).frontend : "-"),
        a = E(() => t.jetton.ownedAmountUSD ? Te(t.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        r = E(() => t.jetton.pnlPercent ? ft(t.jetton.pnlPercent) : void 0);
      return (d, f) => {
        const k = Ms,
          S = Q,
          g = Ee;
        return c(), L(g, {
          to: e(l),
          class: "memepad-jetton-list-item"
        }, {
          default: B(() => {
            var T;
            return [v(k, {
              image: e(ye)(d.jetton.iconFileKey),
              "collected-percent": e(s),
              "is-released": d.jetton.isReleased
            }, null, 8, ["image", "collected-percent", "is-released"]), n("div", Ls, [n("div", As, h(d.jetton.ticker), 1), d.mode === e(G).BASE ? (c(), _("div", ws, [d.jetton.stats.holdersCount !== void 0 ? (c(), _("div", Ps, [v(S, {
              name: "personal",
              class: "icon"
            }), n("span", Ns, h(("formatCount" in d ? d.formatCount : e(W))(d.jetton.stats.holdersCount, {
              accuracy: 0
            }).full), 1)])) : A("", !0), d.jetton.stats.transactionsCount !== void 0 ? (c(), _("div", Ds, [v(S, {
              name: "transfer",
              class: "icon"
            }), n("span", Rs, h(("formatCount" in d ? d.formatCount : e(W))(d.jetton.stats.transactionsCount, {
              accuracy: 0
            }).full), 1)])) : A("", !0)])) : d.mode === e(G).MY_TOKENS ? (c(), _("div", Os, [n("div", js, h(e(m)), 1)])) : A("", !0)]), d.mode === e(G).BASE ? (c(), _("div", Us, [n("div", Ks, [n("span", Bs, h(("t" in d ? d.t : e(M))("memepad.jetton.stats.market_cap")), 1), n("span", Fs, h(d.jetton.stats.marketCap ? `$${("formatCount"in d?d.formatCount:e(W))(d.jetton.stats.marketCap,{accuracy:o(d.jetton.stats.marketCap)}).full}` : "-"), 1)]), n("div", Vs, [v(S, {
              name: "environment-leaf",
              class: "icon"
            }), n("span", xs, h(e(i)), 1)])])) : d.mode === e(G).MY_TOKENS ? (c(), _("div", Hs, [n("div", Ys, h(e(a)), 1), n("div", {
              class: J(["pnl", e(r) && e(r).cls])
            }, h(((T = e(r)) == null ? void 0 : T.formatted) ?? "-"), 3)])) : A("", !0)]
          }),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  Js = R(Gs, [
    ["__scopeId", "data-v-011cea28"]
  ]),
  Ws = D({
    __name: "List",
    props: {
      items: {},
      analyticsSource: {},
      bclData: {},
      mode: {}
    },
    setup(u) {
      return (t, l) => {
        const s = Js;
        return c(), L(ot, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: B(() => [(c(!0), _(V, null, oe(t.items, o => (c(), L(s, {
            key: o.shortname,
            jetton: o,
            "analytics-source": t.analyticsSource,
            "bcl-data": t.bclData,
            mode: t.mode
          }, null, 8, ["jetton", "analytics-source", "bcl-data", "mode"]))), 128))]),
          _: 1
        })
      }
    }
  }),
  je = R(Ws, [
    ["__scopeId", "data-v-e4070fed"]
  ]),
  qs = {
    class: "memepad-explore-panel-list"
  },
  zs = {
    class: "top"
  },
  Xs = {
    class: "search-btn-wrapper"
  },
  Qs = {
    key: 0,
    class: "connect"
  },
  Zs = {
    class: "label"
  },
  ea = {
    key: 1,
    class: "connect"
  },
  ta = {
    key: 1,
    class: "empty-state"
  },
  sa = {
    class: "label"
  },
  aa = D({
    __name: "PanelList",
    props: re({
      appearedItems: {},
      bclData: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: re(["search"], ["update:modelValue"]),
    setup(u) {
      const t = Ae(u, "modelValue"),
        l = De(),
        s = nt(),
        o = [{
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
        }].map(a => {
          const r = {
            [p.FRESH]: "New",
            [p.HOT]: "Hot",
            [p.BLUMING]: "Bluming",
            [p.BLUMED]: "Listed",
            [p.MCAP]: "MCap",
            [p.MY_TOKENS]: "My tokens"
          };
          return {
            ...a,
            label: r[a.value]
          }
        }),
        i = E(() => {
          switch (t.value) {
            case p.FRESH:
              return Y.FRESH;
            case p.BLUMING:
              return Y.BLUMING;
            case p.HOT:
              return Y.HOT;
            case p.MY_TOKENS:
              return Y.POSITIONS;
            case p.MCAP:
              return Y.MCAP;
            case p.BLUMED:
              return Y.BLUMED
          }
        }),
        m = E(() => t.value === p.MY_TOKENS ? G.MY_TOKENS : G.BASE);
      return (a, r) => {
        const d = Q,
          f = ht,
          k = ct,
          S = je,
          g = gt;
        return c(), _("div", qs, [n("div", zs, [v(f, {
          modelValue: t.value,
          "onUpdate:modelValue": r[1] || (r[1] = T => t.value = T),
          items: e(o)
        }, {
          after: B(() => [n("div", Xs, [n("button", {
            type: "button",
            class: "search reset",
            onClick: r[0] || (r[0] = T => a.$emit("search"))
          }, [v(d, {
            name: "search",
            class: "icon"
          })])])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (e(l).wallet.value.status === "must_reconnect" || e(l).wallet.value.status === "not_found") && t.value === e(p).MY_TOKENS ? (c(), _("div", Qs, [n("div", Zs, h(("t" in a ? a.t : e(M))("memepad.explore.my_tokens.connect_text")), 1), n("button", {
          type: "button",
          class: "reset",
          onClick: r[2] || (r[2] = T => e(s).runConnectionFlow())
        }, h(("t" in a ? a.t : e(M))("wallet.connect.btn")), 1)])) : e(l).wallet.value.status === "loading" && t.value === e(p).MY_TOKENS ? (c(), _("div", ea, [v(k, {
          type: e(lt).LIGHT
        }, null, 8, ["type"])])) : a.appearedItems ? (c(), _(V, {
          key: 2
        }, [a.appearedItems.length ? (c(), L(S, {
          key: t.value,
          items: a.appearedItems,
          "analytics-source": e(i),
          "bcl-data": a.bclData,
          mode: e(m)
        }, null, 8, ["items", "analytics-source", "bcl-data", "mode"])) : t.value === e(p).MY_TOKENS ? (c(), _("div", ta, [v(d, {
          name: "add-plus-circle",
          class: "icon"
        }), n("div", sa, h(("t" in a ? a.t : e(M))("memepad.explore.my_tokens.empty_text")), 1)])) : A("", !0)], 64)) : (c(), _(V, {
          key: 3
        }, oe(6, T => n("div", {
          key: T,
          class: "skeleton"
        }, [v(g, {
          class: "image"
        }), v(g, {
          class: "ticker"
        }), v(g, {
          class: "stats"
        })])), 64))])
      }
    }
  }),
  oa = R(aa, [
    ["__scopeId", "data-v-e42a36ca"]
  ]),
  na = () => {
    const u = ie(() => "", "$nnokZ0cAmU"),
      t = ie(() => !1, "$dxYpAQPdtd"),
      l = ie("$pDWqkemNGG"),
      s = it(async a => (t.value = !0, {
        res: await X.getMemepadSearch(a),
        search: a
      }), ({
        res: a,
        search: r
      }) => {
        t.value = !1, u.value = r, l.value = a.err ? void 0 : a.data
      });
    return {
      _flow: {
        init: () => {},
        destroy: () => {
          u.value = "", t.value = !1, l.value = void 0
        }
      },
      search: a => {
        a !== u.value && (a === "" ? (t.value = !1, l.value = void 0, u.value = "") : s(a))
      },
      searchLine: E(() => u.value),
      data: E(() => l.value),
      isSearching: E(() => t.value)
    }
  },
  la = {
    class: "memepad-search page"
  },
  ca = {
    key: 0,
    class: "empty"
  },
  ia = D({
    __name: "Search",
    emits: ["close"],
    setup(u, {
      emit: t
    }) {
      const l = t,
        s = b(),
        o = na();
      o._flow.init(), ne(() => o._flow.destroy());
      const {
        bclData: i
      } = Oe(), m = b(!1), a = b(""), r = [];
      (() => {
        r.push(setTimeout(() => {
          m.value = !0
        }, 400))
      })(), ne(() => {
        r.forEach(S => clearTimeout(S))
      });
      const {
        debouncedFunction: f
      } = Ne(o.search, 600);
      return ae(a, f), Se().memepad.memepadSearchOpen(), Et(async () => {
        var S;
        (S = s.value) == null || S.blur(), await rt(), await dt(0), l("close")
      }), (S, g) => {
        const T = It,
          C = je;
        return c(), _("div", la, [v(T, {
          ref_key: "searchWithTitleComponent",
          ref: s,
          modelValue: e(a),
          "onUpdate:modelValue": g[0] || (g[0] = y => de(a) ? a.value = y : null),
          placeholder: ("t" in S ? S.t : e(M))("memepad.search.input_placeholder"),
          activated: e(m),
          autofocus: "",
          "is-loading": e(o).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), e(o).data.value ? (c(), _(V, {
          key: 0
        }, [e(o).data.value.length === 0 ? (c(), _("div", ca, h(("t" in S ? S.t : e(M))("memepad.search.empty_text")), 1)) : (c(), L(C, {
          key: 1,
          items: e(o).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in S ? S.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : e(Y)).SEARCH,
          "bcl-data": e(i)
        }, null, 8, ["items", "analytics-source", "bcl-data"]))], 64)) : A("", !0)])
      }
    }
  }),
  ra = R(ia, [
    ["__scopeId", "data-v-d0324906"]
  ]),
  he = (u, t, l) => {
    const s = Math.max(0, u.length - 1),
      o = b([...u]),
      i = b(s),
      m = () => {
        i.value < o.value.length - 1 && i.value++
      },
      a = E(() => {
        const y = Math.max(0, i.value - l + 1),
          w = Math.min(i.value + 1, o.value.length);
        return [...o.value].slice(y, w).reverse()
      }),
      r = E(() => o.value.reverse()[i.value]);
    let d;
    return {
      init: () => {
        clearInterval(d), d = ve(m, t)
      },
      destroy: () => {
        o.value = [], i.value = 0, clearInterval(d)
      },
      addItems: y => {
        o.value.push(...y)
      },
      setItems: y => {
        o.value = y, i.value = y.length - 1
      },
      pause: () => {
        clearInterval(d)
      },
      unpause: () => {
        clearInterval(d), d = ve(m, t)
      },
      items: E(() => o.value),
      appearedItems: a,
      currentAppearedItem: r
    }
  },
  da = () => {
    const u = ut(),
      t = De(),
      l = b(),
      s = {
        [p.FRESH]: ee.CREATED_AT,
        [p.HOT]: ee.HOT,
        [p.BLUMING]: ee.NEAREST_TO_LISTING,
        [p.MCAP]: ee.MARKET_CAP,
        [p.BLUMED]: ee.PUBLISHED_AT
      },
      o = {
        [p.FRESH]: te.EXCLUDE,
        [p.HOT]: te.INCLUDE,
        [p.BLUMING]: te.INCLUDE_LISTED,
        [p.MCAP]: te.INCLUDE,
        [p.BLUMED]: te.ONLY
      },
      i = Se(),
      m = async C => {
        if (C === p.MY_TOKENS)
          if (t.wallet.value.status === "connected") {
            const w = await X.getMemepadJettonsPositions(t.wallet.value.address.default);
            return mt(w) ? be(w.data.jettons) : w
          } else return be([]);
        const y = s[C];
        return await X.getMemepadJettonsList(y, o[C])
      }, a = b(), r = ie(() => p.FRESH, "$SbGDXlzgsy"), f = b(Re(async () => await m(r.value), C => {
        if (r.value === p.FRESH) {
          if (l.value) {
            l.value.unpause();
            const y = l.value.items,
              w = C.filter($ => !y.some(I => I.id === $.id));
            l.value.addItems(w)
          } else {
            const y = [...C].reverse();
            l.value = he(y, 1e3, 60), l.value.init()
          }
          return
        } else l.value && l.value.pause();
        a.value ? a.value.stepList.setItems([...C].reverse()) : (a.value = {
          stepList: he([...C].reverse(), 1e3, 60)
        }, a.value.stepList.init())
      }, 5e3));
    let k;
    const S = async () => {
      await f.value.exec(), k = ae(r, async C => {
        var w;
        f.value.destroy(), (w = a.value) == null || w.stepList.destroy(), a.value = void 0, await f.value.exec();
        const y = (() => {
          switch (C) {
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
        i.memepad.memepadOpenPanelListTab({
          source: y
        })
      })
    }, g = () => {
      var C, y;
      f.value.destroy(), (C = a.value) == null || C.stepList.destroy(), a.value = void 0, (y = l.value) == null || y.destroy(), l.value = void 0, k == null || k()
    };
    u.onConnected(() => {
      r.value === p.MY_TOKENS && f.value.exec()
    });
    const T = E(() => {
      var C, y;
      return r.value === p.FRESH ? (C = l.value) == null ? void 0 : C.appearedItems : (y = a.value) == null ? void 0 : y.stepList.appearedItems
    });
    return {
      init: S,
      destroy: g,
      panelListActiveTab: r,
      panelListAppearedItems: T
    }
  },
  ua = () => {
    const u = b(),
      t = E(() => {
        var m;
        return (m = u.value) == null ? void 0 : m.stepList.currentAppearedItem
      }),
      l = m => {
        u.value || (u.value = {
          stepList: he([], 1e3, 15)
        }, u.value.stepList.init()), u.value.stepList.addItems(m.reverse())
      },
      s = b(Re(async () => await X.getMemepadExploreEvents(), m => {
        l(m.transactions)
      }, 9e3));
    return {
      init: async () => {
        await s.value.exec()
      },
      destroy: () => {
        var m;
        s.value.destroy(), (m = u.value) == null || m.stepList.destroy(), u.value = void 0
      },
      eventAppearedItem: E(() => t.value)
    }
  },
  ma = () => {
    const u = b(),
      l = Pe(async () => pt(await X.getMemepadExploreSpotlight()), m => u.value = m.jettons, 5e3);
    return {
      init: async () => {
        await l.exec()
      },
      destroy: () => {
        l.destroy()
      },
      getReactions: m => X.getMemepadJettonReactions(m),
      spotlight: E(() => u.value)
    }
  },
  pa = () => {
    const u = ua(),
      t = ma(),
      l = da();
    return {
      _flow: {
        init: async () => {
          await Promise.all([u.init(), t.init(), l.init()])
        },
        destroy: () => {
          u.destroy(), t.destroy(), l.destroy()
        }
      },
      eventAppearedItem: u.eventAppearedItem,
      spotlight: t.spotlight,
      getSpotlightReactions: t.getReactions,
      panelListActiveTab: l.panelListActiveTab,
      panelListAppearedItems: l.panelListAppearedItems
    }
  },
  _a = {
    key: 0,
    class: "memepad-explore"
  },
  va = {
    class: "header"
  },
  ha = {
    class: "title"
  },
  fa = D({
    __name: "Index",
    setup(u) {
      const {
        eventAppearedItem: t,
        spotlight: l,
        panelListActiveTab: s,
        panelListAppearedItems: o,
        getSpotlightReactions: i,
        _flow: {
          init: m,
          destroy: a
        }
      } = pa(), {
        bclData: r
      } = Oe(), d = b(!1);
      m().then(() => {
        d.value = !0
      }), ne(() => {
        a()
      });
      const f = b(!!ke().query.search),
        k = () => z().push({
          name: "memepad-new"
        }),
        S = () => {
          z().push({
            query: {
              search: "1"
            }
          }), f.value = !0
        },
        g = () => {
          f.value = !1, z().push({
            query: {
              search: void 0
            }
          }), ke().meta.back = void 0
        };
      return (T, C) => {
        var O;
        const y = Ut,
          w = qt,
          $ = bs,
          I = oa,
          N = yt,
          U = ra;
        return c(), _(V, null, [e(d) ? (c(), _("div", _a, [n("div", va, [n("div", ha, h(("t" in T ? T.t : e(M))("memepad.explore.title")), 1), v(y, {
          onLaunch: k
        })]), e(t) ? (c(), L(w, {
          key: 0,
          event: e(t),
          class: "event"
        }, null, 8, ["event"])) : A("", !0), (O = e(l)) != null && O.length ? (c(), L($, {
          key: 1,
          list: e(l),
          "bcl-data": e(r),
          "get-reactions": e(i)
        }, null, 8, ["list", "bcl-data", "get-reactions"])) : A("", !0), v(I, {
          modelValue: e(s),
          "onUpdate:modelValue": C[0] || (C[0] = j => de(s) ? s.value = j : null),
          "appeared-items": e(o),
          "bcl-data": e(r),
          onSearch: S
        }, null, 8, ["modelValue", "appeared-items", "bcl-data"])])) : (c(), L(N, {
          key: 1
        })), e(f) ? (c(), L(U, {
          key: 2,
          onClose: g
        })) : A("", !0)], 64)
      }
    }
  }),
  ga = R(fa, [
    ["__scopeId", "data-v-82e8208a"]
  ]),
  ya = {
    class: "memepad-index page"
  },
  Le = "memepad-intro",
  Ia = D({
    __name: "index",
    setup(u) {
      const {
        $webApp: t
      } = ge(), l = b(t.storage.local.get(Le) ? "explore" : "intro"), s = () => {
        l.value = "explore", t.storage.local.set(Le, "true")
      };
      return Se().memepad.memepadExploreOpen(), (i, m) => {
        const a = Je,
          r = kt,
          d = ga;
        return c(), _("div", ya, [v(a), e(l) === "intro" ? (c(), L(r, {
          key: 0,
          onStart: s
        })) : e(l) === "explore" ? (c(), L(d, {
          key: 1
        })) : A("", !0)])
      }
    }
  }),
  Oa = R(Ia, [
    ["__scopeId", "data-v-9c680bb4"]
  ]);
export {
  Oa as
  default
};