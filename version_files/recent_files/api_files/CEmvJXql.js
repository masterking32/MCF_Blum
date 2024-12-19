import {
  _ as Je
} from "./BEVq8wPJ.js";
import {
  _ as We
} from "./mrac9A7o.js";
import {
  d as D,
  o as c,
  c as _,
  a as o,
  t as h,
  e,
  z as M,
  b as v,
  U as B,
  f as R,
  aq as re,
  h as fe,
  ar as Ae,
  G as $,
  j as E,
  J as A,
  C as L,
  p as de,
  V as qe,
  N as Le,
  _ as Z,
  x as ze,
  aQ as Xe,
  m as Ze,
  F as V,
  ae as z,
  aR as Y,
  aS as we,
  aT as Qe,
  aU as et,
  aV as tt,
  aW as ge,
  n as J,
  aX as ye,
  aG as Ie,
  aY as W,
  ax as se,
  a9 as be,
  y as st,
  a4 as pe,
  am as ae,
  ao as Q,
  T as ne,
  R as Ne,
  q as oe,
  ab as Pe,
  aO as ve,
  al as at,
  aZ as ot,
  a5 as _e,
  a_ as G,
  ac as Ce,
  a$ as nt,
  ad as De,
  b0 as lt,
  b1 as p,
  K as ct,
  O as it,
  b2 as ie,
  b3 as rt,
  X,
  Z as Se,
  b4 as dt,
  b5 as ut,
  b6 as mt,
  b7 as ee,
  b8 as te,
  b9 as Re,
  aw as pt,
  au as Te,
  ba as q,
  a0 as _t,
  ap as $e
} from "./DQp58DI6.js";
import {
  _ as vt,
  a as ht
} from "./DSTRnrZm.js";
import {
  g as ft
} from "./BkTYrbq0.js";
import {
  _ as gt
} from "./B-7HzDkL.js";
import {
  _ as yt
} from "./DGLISDhw.js";
import {
  _ as It
} from "./vGsXrSkh.js";
import {
  u as Oe
} from "./Dn2M9DN_.js";
import {
  u as St
} from "./s__ufetz.js";
import "./DoBLsLhF.js";
import "./DT401b_N.js";
const Et = {
    class: "memepad-intro"
  },
  bt = {
    class: "content"
  },
  Ct = {
    class: "title"
  },
  Tt = {
    class: "note"
  },
  $t = D({
    __name: "Intro",
    emits: ["start"],
    setup(u) {
      return (t, l) => {
        const s = We;
        return c(), _("div", Et, [o("div", bt, [o("div", Ct, h(("t" in t ? t.t : e(M))("memepad.intro.title")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: l[0] || (l[0] = n => t.$emit("start"))
        }, h(("t" in t ? t.t : e(M))("memepad.intro.button_text")), 1)]), v(s, {
          "no-background": ""
        }, {
          default: B(() => [o("div", Tt, h(("t" in t ? t.t : e(M))("memepad.intro.note")), 1)]),
          _: 1
        })])
      }
    }
  }),
  kt = R($t, [
    ["__scopeId", "data-v-59c654b1"]
  ]),
  Mt = {
    class: "memepad-sheet"
  },
  At = {
    class: "title"
  },
  Lt = {
    class: "subtitle"
  },
  wt = {
    class: "label"
  },
  Nt = {
    class: "actions"
  },
  Pt = {
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
      } = fe(), s = u, n = t, i = Ae(u, "modelValue"), m = $(!s.dontShowStorageKey), a = $(!1), r = E({
        get: () => i.value && m.value,
        set: g => {
          i.value = g, a.value && s.dontShowStorageKey && l.storage.local.set(s.dontShowStorageKey, "true")
        }
      });
      (() => {
        s.dontShowStorageKey && (m.value = !l.storage.local.get(s.dontShowStorageKey))
      })();
      const f = () => n("readMoreClick"),
        k = () => {
          r.value = !1, n("close", {
            source: "modal"
          })
        },
        b = () => {
          r.value = !1, n("close", {
            source: "button"
          })
        };
      return (g, T) => {
        const y = Le,
          I = Z,
          w = vt,
          C = ze,
          S = Xe;
        return c(), A(S, {
          "model-value": e(r),
          "onUpdate:modelValue": k
        }, {
          default: B(() => [o("div", Mt, [v(y, {
            name: g.lottie,
            size: 116
          }, null, 8, ["name"]), o("div", At, h(g.title), 1), o("div", null, [o("div", Lt, h(g.subtitle), 1), g.hideReadMore ? L("", !0) : (c(), _("button", {
            key: 0,
            type: "button",
            class: "reset read-more",
            onClick: f
          }, [o("span", wt, h(("t" in g ? g.t : e(M))("base.read_more")), 1), v(I, {
            name: "arrow-right",
            class: "icon"
          })]))]), o("div", Nt, [g.dontShowStorageKey ? (c(), _("div", Pt, [o("div", Dt, [v(w, {
            modelValue: e(a),
            "onUpdate:modelValue": T[0] || (T[0] = P => de(a) ? a.value = P : null)
          }, null, 8, ["modelValue"]), o("span", {
            class: "label",
            onClick: T[1] || (T[1] = P => a.value = !e(a))
          }, h(("t" in g ? g.t : e(M))("memepad.sheet.dont_show_again_label")), 1)])])) : L("", !0), v(C, {
            label: g.buttonText,
            fill: "",
            size: e(qe).LARGE,
            onClick: b
          }, null, 8, ["label", "size"])])])]),
          _: 1
        }, 8, ["model-value"])
      }
    }
  }),
  Ot = R(Rt, [
    ["__scopeId", "data-v-bdde4714"]
  ]),
  ke = "memepad-launch-jetton",
  jt = D({
    __name: "LaunchButton",
    emits: ["launch"],
    setup(u, {
      emit: t
    }) {
      const {
        $webApp: l
      } = fe(), s = t, n = $(!1), i = $(l.storage.local.get(ke) ? "watched" : "unwatched"), m = () => {
        i.value === "watched" ? s("launch") : n.value = !0
      }, a = () => {
        l.storage.local.set(ke, "true"), s("launch")
      };
      return (r, d) => {
        const f = Ot;
        return c(), _(V, null, [o("button", {
          type: "button",
          class: "reset memepad-explore-launch-button",
          onClick: m
        }, [d[1] || (d[1] = o("i", {
          class: "seedling"
        }, null, -1)), Ze(" " + h(("t" in r ? r.t : e(M))("memepad.explore.launch.button_text")), 1)]), v(f, {
          modelValue: e(n),
          "onUpdate:modelValue": d[0] || (d[0] = k => de(n) ? n.value = k : null),
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
        n = E(() => {
          const i = we(t.event.timestamp);
          return i.isDate ? i.label : `${i.label} ago`
        });
      return (i, m) => {
        const a = Z,
          r = Qe("I18nT"),
          d = ye,
          f = Ie;
        return c(), A(f, {
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
          })])), o("div", Ft, [i.event.user.nickname ? (c(), _("span", Vt, h(i.event.user.nickname), 1)) : (c(), _("span", xt, h(("sliceWalletAddress" in i ? i.sliceWalletAddress : e(et))(i.event.user.address)), 1)), o("span", Ht, h(e(l)), 1), i.event.amount ? (c(), A(r, {
            key: 2,
            keypath: "memepad.explore.event.amount_of",
            tag: "div",
            class: "amount-of"
          }, {
            amount: B(() => [o("span", Yt, h(`${("formatTon"in i?i.formatTon:e(tt))(i.event.amount)} TON`), 1)]),
            _: 1
          })) : L("", !0)]), v(d, {
            src: e(ge)(i.event.iconFileKey),
            size: 16,
            class: "jetton-image"
          }, null, 8, ["src"]), o("span", Gt, h(i.event.ticker), 1), o("span", Jt, h(e(n)), 1)]),
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
  Zt = {
    class: "holders-count"
  },
  Qt = {
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
      return (s, n) => {
        const i = ye,
          m = Z,
          a = Ie;
        return c(), A(a, {
          to: e(l),
          class: "memepad-explore-spotlight-card"
        }, {
          default: B(() => [v(i, {
            src: e(ge)(s.jetton.iconFileKey),
            size: 100,
            class: "icon"
          }, null, 8, ["src"]), o("span", zt, h(s.jetton.ticker), 1), o("div", Xt, [o("div", Zt, [v(m, {
            name: "personal",
            class: "icon"
          }), o("span", Qt, h(s.jetton.stats.holdersCount ? ("formatCount" in s ? s.formatCount : e(W))(s.jetton.stats.holdersCount, {
            accuracy: 0
          }).full : "-"), 1)]), o("div", es, [v(m, {
            name: "transfer",
            class: "icon"
          }), o("span", ts, h(s.jetton.stats.transactionsCount ? ("formatCount" in s ? s.formatCount : e(W))(s.jetton.stats.transactionsCount, {
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
        var n;
        const s = Z;
        return c(), _("div", {
          class: J(["memepad-explore-spotlight-progress", [t.moveDirection && `is-${(n=t.moveDirection)==null?void 0:n.direction}`, {
            "is-released": t.jetton.isReleased
          }]])
        }, [o("div", os, [o("div", ns, [o("span", ls, h(t.marketCap ? `$${t.marketCap.full}` : "-"), 1), t.moveDirection ? (c(), _("span", cs, h(t.moveDirection.diffFormatted), 1)) : L("", !0)]), t.jetton.isReleased ? (c(), A(s, {
          key: 0,
          name: "memepad/spotlight-dex",
          class: "dex-icon"
        })) : (c(), _("span", is, h(t.tonCollectedPercent ?? "-") + "% ", 1))]), o("div", rs, [o("div", {
          class: "line",
          style: se({
            width: `${t.tonCollectedPercent}%`
          })
        }, [o("div", ds, [v(be, {
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
            })])) : L("", !0)]
          }),
          _: 1
        }), v(be, {
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
            })])) : L("", !0)]
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
  Ss = {
    class: "logo"
  },
  Es = {
    class: "title"
  },
  bs = ["onClick"],
  Cs = ["src"],
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
        l = st(),
        s = $(0),
        n = E(() => t.list[s.value]),
        i = C => {
          document.querySelector(".memepad-explore-spotlight .list").scrollTo({
            left: C * window.innerWidth + (s.value > C ? -1 : 1),
            behavior: "smooth"
          })
        },
        m = $(null),
        a = Pe(() => {
          if (!m.value) return;
          const C = m.value.children[0].offsetWidth + 10,
            S = m.value.scrollLeft,
            P = Math.round(S / C);
          s.value = P
        }, 50).debouncedFunction,
        r = E(() => {
          const C = (() => {
              if (!(!n.value.stats.tonCollected || !t.bclData)) return new pe(n.value.stats.tonCollected.div(t.bclData.tonForDex).times(100).toFixed(0, pe.ROUND_DOWN))
            })(),
            S = n.value.stats.marketCap && W(n.value.stats.marketCap);
          return {
            id: n.value.id,
            shortname: n.value.shortname,
            tonCollectedPercent: C,
            marketCap: S
          }
        }),
        d = [],
        f = $();
      ae(r, (C, S) => {
        if (!C.marketCap || !S.marketCap || C.marketCap.full === S.marketCap.full || C.id !== S.id) {
          f.value = void 0;
          return
        }
        const P = C.marketCap.raw.minus(S.marketCap.raw),
          U = P.lt(0),
          O = W(P.abs(), {
            accuracy: 0
          }).full;
        O !== "0" && (f.value = {
          direction: U ? "down" : "up",
          diffFormatted: `${U?"-":"+"}${O}`
        }, d.push(setTimeout(() => f.value = void 0, 3e3)))
      });
      const k = E(() => {
          var C, S;
          return ((C = f.value) == null ? void 0 : C.direction) === "down" ? Q("memepad/spotlight-room-down", "svg") : ((S = f.value) == null ? void 0 : S.direction) === "up" ? Q("memepad/spotlight-room-up", "svg") : Q("memepad/spotlight-room", "svg")
        }),
        b = () => {
          d.push(setTimeout(() => {
            s.value === t.list.length - 1 ? i(0) : i(s.value + 1)
          }, 15e3))
        },
        {
          reactionsAnimations: g,
          ANIMATION_DURATION: T,
          restart: y
        } = w();
      ae(s, () => {
        d.forEach(clearTimeout), b(), y()
      }, {
        immediate: !0
      }), ne(() => {
        d.forEach(clearTimeout)
      });
      const I = E(() => n.value.isReleased ? Q("memepad/dex-bg", "gif") : Q("memepad/bg", "gif"));

      function w() {
        let P = 0;
        const U = [];
        let O;
        const j = $(),
          x = $([]),
          N = Ne(async () => await t.getReactions(r.value.shortname), ce => {
            if (!j.value) {
              j.value = ce;
              return
            }
            const {
              user: Sa,
              ...Ke
            } = j.value;
            j.value = ce;
            const {
              user: Ea,
              ...Be
            } = j.value, Ee = Object.entries(Be).reduce((F, [H, me]) => {
              const He = Ke[H],
                Ye = me,
                Ge = pe.max(Ye.minus(He), 0).toNumber();
              return {
                ...F,
                [H]: Ge
              }
            }, {}), Fe = 5e3 / Object.values(Ee).reduce((F, H) => F + H, 0), Ve = P, xe = F => ({
              id: at(),
              image: ot(F),
              position: {
                x: _e(0, 20) - 10,
                y: _e(0, 20) - 10
              },
              animationType: _e(1, 2),
              createdAt: Date.now()
            });
            Object.entries(Ee).reduce((F, [H, me]) => F.concat(Array(me).fill(H)), []).sort(() => Math.random() - .5).forEach((F, H) => {
              U.push(setTimeout(() => {
                Ve === P && x.value.push(xe(F))
              }, Fe * H))
            })
          }, 5e3),
          K = async () => {
            await N.exec(), O = ve(() => {
              x.value = x.value.filter(ce => Date.now() - ce.createdAt < 6e3)
            }, 2e3)
          }, le = () => {
            N.destroy(), U.forEach(clearTimeout), O && clearInterval(O), j.value = void 0, x.value = []
          };
        ae(() => r.value.shortname, () => {
          P++, U.forEach(clearTimeout), le(), K()
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
      return (C, S) => {
        var j, x, ue;
        const P = Le,
          U = as,
          O = _s;
        return c(), _("div", vs, [o("div", hs, [e(l).isLowEndDevice.value ? L("", !0) : (c(), _("img", {
          key: 0,
          src: e(I),
          alt: "Gif",
          class: J([{
            "is-version-1": ((j = e(r).tonCollectedPercent) == null ? void 0 : j.lte(30)) && !e(n).isReleased,
            "is-version-2": ((x = e(r).tonCollectedPercent) == null ? void 0 : x.gt(30)) && e(r).tonCollectedPercent.lte(60) && !e(n).isReleased,
            "is-version-3": ((ue = e(r).tonCollectedPercent) == null ? void 0 : ue.gt(60)) && !e(n).isReleased,
            "is-dex": e(n).isReleased
          }, "gif"])
        }, null, 10, fs)), o("img", {
          src: e(k),
          alt: "Gif",
          class: "room"
        }, null, 8, gs), S[2] || (S[2] = o("div", {
          class: "gradient"
        }, null, -1))]), o("div", ys, [o("div", Is, [o("div", Ss, [v(P, {
          name: "animations/Fire",
          size: 28
        }), o("div", Es, h(("t" in C ? C.t : e(M))("memepad.explore.spotlight.title")), 1)]), t.list.length > 1 ? (c(), _("div", {
          key: 0,
          class: "controls",
          style: se({
            gridTemplateColumns: `repeat(${t.list.length}, 1fr)`
          })
        }, [(c(!0), _(V, null, oe(t.list, (N, K) => (c(), _("div", {
          key: K + "" + e(s),
          class: J(["item", {
            active: e(s) > K,
            current: e(s) === K
          }]),
          onClick: le => i(K)
        }, S[3] || (S[3] = [o("div", {
          class: "line"
        }, [o("div", {
          class: "fill"
        })], -1)]), 10, bs))), 128))], 4)) : L("", !0)]), o("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: S[0] || (S[0] = (...N) => e(a) && e(a)(...N)),
          onTouchmove: S[1] || (S[1] = (...N) => e(a) && e(a)(...N))
        }, [(c(!0), _(V, null, oe(t.list, (N, K) => (c(), A(U, {
          key: N.id,
          index: K,
          jetton: N,
          "bcl-data": t.bclData,
          class: "item"
        }, null, 8, ["index", "jetton", "bcl-data"]))), 128))], 544), (c(), A(O, {
          key: e(n).id,
          jetton: e(n),
          "bcl-data": t.bclData,
          "move-direction": e(f),
          "market-cap": e(r).marketCap,
          "ton-collected-percent": e(r).tonCollectedPercent
        }, null, 8, ["jetton", "bcl-data", "move-direction", "market-cap", "ton-collected-percent"])), o("div", {
          class: "reactions",
          style: se({
            "--animation-duration": `${e(T)}ms`
          })
        }, [(c(!0), _(V, null, oe(e(g), N => (c(), _("img", {
          key: N.id,
          src: N.image,
          class: J(`animation-${N.animationType}`),
          style: se({
            "--x-offset": N.position.x + "px",
            "--y-offset": N.position.y + "px"
          })
        }, null, 14, Cs))), 128))], 4)])])
      }
    }
  }),
  $s = R(Ts, [
    ["__scopeId", "data-v-36db8f14"]
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
        const s = ye;
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
  As = {
    class: "center"
  },
  Ls = {
    class: "ticker"
  },
  ws = {
    key: 0,
    class: "base-stats"
  },
  Ns = {
    key: 0,
    class: "holders-count"
  },
  Ps = {
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
        n = d => {
          const f = d.decimalPlaces();
          return Math.max(Math.min(1, f), 0)
        },
        i = E(() => we(t.jetton.releaseTimestamp).label),
        m = E(() => t.jetton.ownedAmount ? Ce(t.jetton.ownedAmount, t.jetton.ticker).frontend : "-"),
        a = E(() => t.jetton.ownedAmountUSD ? Ce(t.jetton.ownedAmountUSD, "USD").frontendWithSymbol : "-"),
        r = E(() => t.jetton.pnlPercent ? ft(t.jetton.pnlPercent) : void 0);
      return (d, f) => {
        const k = Ms,
          b = Z,
          g = Ie;
        return c(), A(g, {
          to: e(l),
          class: "memepad-jetton-list-item"
        }, {
          default: B(() => {
            var T;
            return [v(k, {
              image: e(ge)(d.jetton.iconFileKey),
              "collected-percent": e(s),
              "is-released": d.jetton.isReleased
            }, null, 8, ["image", "collected-percent", "is-released"]), o("div", As, [o("div", Ls, h(d.jetton.ticker), 1), d.mode === e(G).BASE ? (c(), _("div", ws, [d.jetton.stats.holdersCount !== void 0 ? (c(), _("div", Ns, [v(b, {
              name: "personal",
              class: "icon"
            }), o("span", Ps, h(("formatCount" in d ? d.formatCount : e(W))(d.jetton.stats.holdersCount, {
              accuracy: 0
            }).full), 1)])) : L("", !0), d.jetton.stats.transactionsCount !== void 0 ? (c(), _("div", Ds, [v(b, {
              name: "transfer",
              class: "icon"
            }), o("span", Rs, h(("formatCount" in d ? d.formatCount : e(W))(d.jetton.stats.transactionsCount, {
              accuracy: 0
            }).full), 1)])) : L("", !0)])) : d.mode === e(G).MY_TOKENS ? (c(), _("div", Os, [o("div", js, h(e(m)), 1)])) : L("", !0)]), d.mode === e(G).BASE ? (c(), _("div", Us, [o("div", Ks, [o("span", Bs, h(("t" in d ? d.t : e(M))("memepad.jetton.stats.market_cap")), 1), o("span", Fs, h(d.jetton.stats.marketCap ? `$${("formatCount"in d?d.formatCount:e(W))(d.jetton.stats.marketCap,{accuracy:n(d.jetton.stats.marketCap)}).full}` : "-"), 1)]), o("div", Vs, [v(b, {
              name: "environment-leaf",
              class: "icon"
            }), o("span", xs, h(e(i)), 1)])])) : d.mode === e(G).MY_TOKENS ? (c(), _("div", Hs, [o("div", Ys, h(e(a)), 1), o("div", {
              class: J(["pnl", e(r) && e(r).cls])
            }, h(((T = e(r)) == null ? void 0 : T.formatted) ?? "-"), 3)])) : L("", !0)]
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
        return c(), A(nt, {
          tag: "div",
          name: "memepad-list-transitions",
          class: "memepad-jetton-list"
        }, {
          default: B(() => [(c(!0), _(V, null, oe(t.items, n => (c(), A(s, {
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
  Zs = {
    key: 0,
    class: "connect"
  },
  Qs = {
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
        s = lt(),
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
        const d = Z,
          f = ht,
          k = it,
          b = je,
          g = gt;
        return c(), _("div", qs, [o("div", zs, [v(f, {
          modelValue: t.value,
          "onUpdate:modelValue": r[1] || (r[1] = T => t.value = T),
          items: e(n)
        }, {
          after: B(() => [o("div", Xs, [o("button", {
            type: "button",
            class: "search reset",
            onClick: r[0] || (r[0] = T => a.$emit("search"))
          }, [v(d, {
            name: "search",
            class: "icon"
          })])])]),
          _: 1
        }, 8, ["modelValue", "items"])]), (e(l).wallet.value.status === "must_reconnect" || e(l).wallet.value.status === "not_found") && t.value === e(p).MY_TOKENS ? (c(), _("div", Zs, [o("div", Qs, h(("t" in a ? a.t : e(M))("memepad.explore.my_tokens.connect_text")), 1), o("button", {
          type: "button",
          class: "reset",
          onClick: r[2] || (r[2] = T => e(s).runConnectionFlow())
        }, h(("t" in a ? a.t : e(M))("wallet.connect.btn")), 1)])) : e(l).wallet.value.status === "loading" && t.value === e(p).MY_TOKENS ? (c(), _("div", ea, [v(k, {
          type: e(ct).LIGHT
        }, null, 8, ["type"])])) : a.appearedItems ? (c(), _(V, {
          key: 2
        }, [a.appearedItems.length ? (c(), A(b, {
          key: t.value,
          items: a.appearedItems,
          "analytics-source": e(i),
          "bcl-data": a.bclData,
          mode: e(m)
        }, null, 8, ["items", "analytics-source", "bcl-data", "mode"])) : t.value === e(p).MY_TOKENS ? (c(), _("div", ta, [v(d, {
          name: "add-plus-circle",
          class: "icon"
        }), o("div", sa, h(("t" in a ? a.t : e(M))("memepad.explore.my_tokens.empty_text")), 1)])) : L("", !0)], 64)) : (c(), _(V, {
          key: 3
        }, oe(6, T => o("div", {
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
      s = rt(async a => (t.value = !0, {
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
        s = $(),
        n = na();
      n._flow.init(), ne(() => n._flow.destroy());
      const {
        bclData: i
      } = Oe(), m = $(!1), a = $(""), r = [];
      (() => {
        r.push(setTimeout(() => {
          m.value = !0
        }, 400))
      })(), ne(() => {
        r.forEach(b => clearTimeout(b))
      });
      const {
        debouncedFunction: f
      } = Pe(n.search, 600);
      return ae(a, f), Se().memepad.memepadSearchOpen(), St(async () => {
        var b;
        (b = s.value) == null || b.blur(), await dt(), await ut(0), l("close")
      }), (b, g) => {
        const T = It,
          y = je;
        return c(), _("div", la, [v(T, {
          ref_key: "searchWithTitleComponent",
          ref: s,
          modelValue: e(a),
          "onUpdate:modelValue": g[0] || (g[0] = I => de(a) ? a.value = I : null),
          placeholder: ("t" in b ? b.t : e(M))("memepad.search.input_placeholder"),
          activated: e(m),
          autofocus: "",
          "is-loading": e(n).isSearching.value
        }, null, 8, ["modelValue", "placeholder", "activated", "is-loading"]), e(n).data.value ? (c(), _(V, {
          key: 0
        }, [e(n).data.value.length === 0 ? (c(), _("div", ca, h(("t" in b ? b.t : e(M))("memepad.search.empty_text")), 1)) : (c(), A(y, {
          key: 1,
          items: e(n).data.value,
          class: "events",
          "analytics-source": ("ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE" in b ? b.ANALYTICS_MEMEPAD_JETTONPAGE_SOURCE : e(Y)).SEARCH,
          "bcl-data": e(i)
        }, null, 8, ["items", "analytics-source", "bcl-data"]))], 64)) : L("", !0)])
      }
    }
  }),
  ra = R(ia, [
    ["__scopeId", "data-v-d0324906"]
  ]),
  he = (u, t, l) => {
    const s = Math.max(0, u.length - 1),
      n = $([...u]),
      i = $(s),
      m = () => {
        i.value < n.value.length - 1 && i.value++
      },
      a = E(() => {
        const I = Math.max(0, i.value - l + 1),
          w = Math.min(i.value + 1, n.value.length);
        return [...n.value].slice(I, w).reverse()
      }),
      r = E(() => n.value.reverse()[i.value]);
    let d;
    return {
      init: () => {
        clearInterval(d), d = ve(m, t)
      },
      destroy: () => {
        n.value = [], i.value = 0, clearInterval(d)
      },
      addItems: I => {
        n.value.push(...I)
      },
      setItems: I => {
        n.value = I, i.value = I.length - 1
      },
      pause: () => {
        clearInterval(d)
      },
      unpause: () => {
        clearInterval(d), d = ve(m, t)
      },
      items: E(() => n.value),
      appearedItems: a,
      currentAppearedItem: r
    }
  },
  da = () => {
    const u = mt(),
      t = De(),
      l = $(),
      s = {
        [p.FRESH]: ee.CREATED_AT,
        [p.HOT]: ee.TRANSACTIONS,
        [p.BLUMING]: ee.NEAREST_TO_LISTING,
        [p.MCAP]: ee.MARKET_CAP,
        [p.BLUMED]: ee.PUBLISHED_AT
      },
      n = {
        [p.FRESH]: te.EXCLUDE,
        [p.HOT]: te.INCLUDE,
        [p.BLUMING]: te.INCLUDE_LISTED,
        [p.MCAP]: te.INCLUDE,
        [p.BLUMED]: te.ONLY
      },
      i = Se(),
      m = async y => {
        if (y === p.MY_TOKENS)
          if (t.wallet.value.status === "connected") {
            const w = await X.getMemepadJettonsPositions(t.wallet.value.address.default);
            return pt(w) ? Te(w.data.jettons) : w
          } else return Te([]);
        const I = s[y];
        return await X.getMemepadJettonsList(I, n[y])
      }, a = $(), r = ie(() => p.FRESH, "$SbGDXlzgsy"), f = $(Re(async () => await m(r.value), y => {
        if (r.value === p.FRESH) {
          if (l.value) {
            l.value.unpause();
            const I = l.value.items,
              w = y.filter(C => !I.some(S => S.id === C.id));
            l.value.addItems(w)
          } else {
            const I = [...y].reverse();
            l.value = he(I, 1e3, 60), l.value.init()
          }
          return
        } else l.value && l.value.pause();
        a.value ? a.value.stepList.setItems([...y].reverse()) : (a.value = {
          stepList: he([...y].reverse(), 1e3, 60)
        }, a.value.stepList.init())
      }, 5e3));
    let k;
    const b = async () => {
      await f.value.exec(), k = ae(r, async y => {
        var w;
        f.value.destroy(), (w = a.value) == null || w.stepList.destroy(), a.value = void 0, await f.value.exec();
        const I = (() => {
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
        i.memepad.memepadOpenPanelListTab({
          source: I
        })
      })
    }, g = () => {
      var y, I;
      f.value.destroy(), (y = a.value) == null || y.stepList.destroy(), a.value = void 0, (I = l.value) == null || I.destroy(), l.value = void 0, k == null || k()
    };
    u.onConnected(() => {
      r.value === p.MY_TOKENS && f.value.exec()
    });
    const T = E(() => {
      var y, I;
      return r.value === p.FRESH ? (y = l.value) == null ? void 0 : y.appearedItems : (I = a.value) == null ? void 0 : I.stepList.appearedItems
    });
    return {
      init: b,
      destroy: g,
      panelListActiveTab: r,
      panelListAppearedItems: T
    }
  },
  ua = () => {
    const u = $(),
      t = E(() => {
        var m;
        return (m = u.value) == null ? void 0 : m.stepList.currentAppearedItem
      }),
      l = m => {
        u.value || (u.value = {
          stepList: he([], 1e3, 15)
        }, u.value.stepList.init()), u.value.stepList.addItems(m.reverse())
      },
      s = $(Re(async () => await X.getMemepadExploreEvents(), m => {
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
    const u = $(),
      l = Ne(async () => _t(await X.getMemepadExploreSpotlight()), m => u.value = m.jettons, 5e3);
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
        panelListAppearedItems: n,
        getSpotlightReactions: i,
        _flow: {
          init: m,
          destroy: a
        }
      } = pa(), {
        bclData: r
      } = Oe(), d = $(!1);
      m().then(() => {
        d.value = !0
      }), ne(() => {
        a()
      });
      const f = $(!!$e().query.search),
        k = () => z().push({
          name: "memepad-new"
        }),
        b = () => {
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
          }), $e().meta.back = void 0
        };
      return (T, y) => {
        var O;
        const I = Ut,
          w = qt,
          C = $s,
          S = oa,
          P = yt,
          U = ra;
        return c(), _(V, null, [e(d) ? (c(), _("div", _a, [o("div", va, [o("div", ha, [o("span", null, h(("t" in T ? T.t : e(M))("memepad.explore.title")), 1), y[1] || (y[1] = o("div", {
          class: "beta"
        }, "beta", -1))]), v(I, {
          onLaunch: k
        })]), e(t) ? (c(), A(w, {
          key: 0,
          event: e(t),
          class: "event"
        }, null, 8, ["event"])) : L("", !0), (O = e(l)) != null && O.length ? (c(), A(C, {
          key: 1,
          list: e(l),
          "bcl-data": e(r),
          "get-reactions": e(i)
        }, null, 8, ["list", "bcl-data", "get-reactions"])) : L("", !0), v(S, {
          modelValue: e(s),
          "onUpdate:modelValue": y[0] || (y[0] = j => de(s) ? s.value = j : null),
          "appeared-items": e(n),
          "bcl-data": e(r),
          onSearch: b
        }, null, 8, ["modelValue", "appeared-items", "bcl-data"])])) : (c(), A(P, {
          key: 1
        })), e(f) ? (c(), A(U, {
          key: 2,
          onClose: g
        })) : L("", !0)], 64)
      }
    }
  }),
  ga = R(fa, [
    ["__scopeId", "data-v-6a519d61"]
  ]),
  ya = {
    class: "memepad-index page"
  },
  Me = "memepad-intro",
  Ia = D({
    __name: "index",
    setup(u) {
      const {
        $webApp: t
      } = fe(), l = $(t.storage.local.get(Me) ? "explore" : "intro"), s = () => {
        l.value = "explore", t.storage.local.set(Me, "true")
      };
      return Se().memepad.memepadExploreOpen(), (i, m) => {
        const a = Je,
          r = kt,
          d = ga;
        return c(), _("div", ya, [v(a), e(l) === "intro" ? (c(), A(r, {
          key: 0,
          onStart: s
        })) : e(l) === "explore" ? (c(), A(d, {
          key: 1
        })) : L("", !0)])
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