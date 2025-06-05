import {
  _ as D
} from "./C5XHVClu.js";
import {
  d as E,
  J as M,
  j as k,
  K as U,
  ah as L,
  bX as g,
  ag as H,
  o as p,
  c as S,
  a as c,
  e as a,
  z as V,
  G as w,
  b as $,
  D as C,
  av as G,
  t as A,
  n as F,
  h as Y,
  aK as J,
  f as I,
  a4 as O,
  aA as Z,
  C as q,
  aI as K,
  aq as X,
  w as Q,
  bY as W,
  p as z,
  by as ee,
  a8 as N,
  A as j,
  a9 as te,
  an as se,
  b0 as ae,
  x as oe,
  aa as ne,
  F as x,
  q as P,
  b8 as ie,
  b6 as le
} from "./P2UesN5H.js";
import {
  u as re
} from "./C9Lcb4u0.js";
const ce = {
    class: "image-wrapper"
  },
  ue = ["src"],
  me = {
    key: 1,
    class: "label"
  },
  de = E({
    __name: "Button",
    props: {
      item: {},
      mode: {}
    },
    emits: ["click"],
    setup(h, {
      expose: l,
      emit: u
    }) {
      const i = h,
        f = u,
        s = M(i.item.active ? {
          status: "active"
        } : {
          status: "idle"
        }),
        e = [],
        t = k(() => i.item.active),
        m = () => {
          t.value && i.item.type !== g.STAR ? s.value = {
            status: "idle"
          } : (s.value = {
            status: "click-animation",
            stage: 1
          }, Y().$webApp.HapticFeedback.impactOccurred("light"), e.push(setTimeout(() => {
            s.value = {
              status: "click-animation",
              stage: 2
            }
          }, 300)))
        },
        o = () => {
          i.item.type !== g.STAR && m(), f("click")
        },
        d = () => {
          s.value.status === "click-animation" && (s.value = {
            status: "active"
          })
        };
      U(() => i.item.active, v => {
        v ? s.value.status !== "click-animation" && (s.value = {
          status: "active"
        }) : (s.value = {
          status: "idle"
        }, e.forEach(clearTimeout))
      });
      const y = k(() => {
        switch (i.item.type) {
          case g.BROKEN_HEART:
            return "animations/reactions/BrokenHeartFg";
          case g.FIRE:
            return "animations/reactions/FireFg";
          case g.STAR:
            return "animations/reactions/StarsFg";
          default:
            throw i.item.type, L("Unknown reaction type")
        }
      });
      return l({
        showAnimation: m
      }), H(() => {
        e.forEach(clearTimeout)
      }), (v, n) => {
        const r = J;
        return p(), S("button", {
          class: F(["memepad-jetton-about-reactions-button reset", [`is-${a(s).status}`, `mode-${v.mode}`, `type-${v.item.type}`, a(s).status === "click-animation" && `is-stage-${a(s).stage}`]]),
          type: "button",
          onClick: n[0] || (n[0] = b => o())
        }, [n[1] || (n[1] = c("div", {
          class: "bg"
        }, null, -1)), v.item.type === a(g).STAR ? (p(), V(r, {
          key: 0,
          name: "animations/Stars",
          class: "animation-bg",
          loop: ""
        })) : w("", !0), c("div", ce, [c("img", {
          src: v.item.image
        }, null, 8, ue), $(G, {
          name: "animation-fg-transition"
        }, {
          default: C(() => [a(s).status === "click-animation" && a(s).stage === 2 ? (p(), V(r, {
            key: 0,
            name: a(y),
            class: "animation-fg",
            loop: !1,
            onOnComplete: d
          }, null, 8, ["name"])) : w("", !0)]),
          _: 1
        })]), v.item.count.isZero() ? w("", !0) : (p(), S("div", me, A(v.item.label.full), 1))], 2)
      }
    }
  }),
  pe = I(de, [
    ["__scopeId", "data-v-93cfd5b6"]
  ]),
  _e = {
    class: "overlays"
  },
  ve = ["max"],
  fe = E({
    __name: "Range",
    props: O({
      min: {},
      max: {},
      pointerSize: {
        default: 16
      },
      color: {
        default: "#fff"
      },
      scale: {},
      step: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(h) {
      Z(e => ({
        "6b93b9a5": e.color,
        "320b7ca0": e.pointerSize
      }));
      const l = h,
        u = q(h, "modelValue"),
        i = k(() => {
          if (l.scale === "linear") {
            const e = [];
            for (let t = l.min; t <= l.max; t += l.step) e.push(t);
            return e
          } else if (l.scale === "log") {
            const e = [],
              t = Math.log10(l.min),
              m = Math.log10(l.max),
              o = Math.ceil(Math.log10(l.max / l.min) * 10 * 30);
            for (let d = 0; d <= o; d++) {
              const y = Math.pow(10, t + (m - t) * d / o);
              e.push(Math.round(y))
            }
            return [...new Set(e)]
          } else if (l.scale === "points") {
            const e = [];
            for (let t = l.min; t <= l.max; t++)(t <= 10 || t <= 100 && t % 2 === 0 || t <= 1e3 && t % 10 === 0 || t <= 1e4 && t % 100 === 0 || t % 1e3 === 0) && e.push(t);
            return e
          } else throw L("Invalid scale")
        });
      U(u, e => {
        const t = i.value.reduce((o, d) => Math.abs(d - e) < Math.abs(o - e) ? d : o, i.value[0]),
          m = i.value.indexOf(t);
        u.value = i.value[m]
      }, {
        immediate: !0
      });
      const f = k({
          get: () => i.value.indexOf(u.value),
          set: e => u.value = i.value[e]
        }),
        s = k(() => {
          const e = l.pointerSize,
            t = f.value / (i.value.length - 1),
            m = (1 - t) * e - e / 2;
          return `calc(${t*100}% + ${m}px)`
        });
      return (e, t) => (p(), S("div", {
        class: F(["kit-range", {
          "has-tooltip": e.$slots.tooltip
        }])
      }, [c("div", _e, [c("div", {
        class: "filled",
        style: K({
          width: a(s)
        })
      }, null, 4), e.$slots.tooltip ? (p(), S("div", {
        key: 0,
        class: "tooltip",
        style: K({
          left: a(s)
        })
      }, [X(e.$slots, "tooltip", {}, void 0, !0)], 4)) : w("", !0)]), Q(c("input", {
        "onUpdate:modelValue": t[0] || (t[0] = m => z(f) ? f.value = m : null),
        type: "range",
        min: 0,
        max: a(i).length - 1,
        step: 1
      }, null, 8, ve), [
        [W, a(f)]
      ])], 2))
    }
  }),
  ge = I(fe, [
    ["__scopeId", "data-v-e6d2338a"]
  ]),
  he = {
    class: "memepad-jetton-reactions-stars-sheet"
  },
  Se = {
    class: "range-wrapper"
  },
  ke = {
    class: "tooltip"
  },
  ye = ["src"],
  be = {
    class: "label"
  },
  Re = {
    class: "inner"
  },
  $e = {
    class: "title"
  },
  Ae = {
    class: "description"
  },
  Me = {
    key: 1,
    class: "label"
  },
  Ve = ["src"],
  Te = E({
    __name: "StarsSheet",
    props: O({
      jetton: {},
      generateAndPayStarsInvoice: {
        type: Function
      }
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: O(["success"], ["update:modelValue"]),
    setup(h, {
      emit: l
    }) {
      const u = h,
        i = q(h, "modelValue"),
        f = l,
        s = M(10),
        e = M(!1),
        t = k(() => ee(s.value, {
          trim: !0
        })),
        m = async () => {
          if (e.value) return;
          e.value = !0;
          const o = await u.generateAndPayStarsInvoice(u.jetton.shortname, s.value);
          se(o) && (i.value = !1, f("success")), e.value = !1
        };
      return (o, d) => {
        const y = J,
          v = ge,
          n = ae,
          r = oe,
          b = ne;
        return p(), V(b, {
          modelValue: i.value,
          "onUpdate:modelValue": d[1] || (d[1] = R => i.value = R)
        }, {
          default: C(() => [c("div", he, [c("div", Se, [$(v, {
            modelValue: a(s),
            "onUpdate:modelValue": d[0] || (d[0] = R => z(s) ? s.value = R : null),
            scale: "points",
            min: 1,
            max: 1e4,
            color: "#C46E00",
            "pointer-size": 28
          }, {
            tooltip: C(() => [c("div", ke, [$(y, {
              name: "animations/Stars",
              class: "animation",
              loop: ""
            }), c("img", {
              src: ("imgResolver" in o ? o.imgResolver : a(N))("telegram-star")
            }, null, 8, ye), c("div", be, A(a(t)), 1)])]),
            _: 1
          }, 8, ["modelValue"])]), c("div", Re, [c("div", $e, A(("t" in o ? o.t : a(j))("memepad.reactions.stars_sheet.title")), 1), c("div", Ae, A(("t" in o ? o.t : a(j))("memepad.reactions.stars_sheet.description", {
            ticker: o.jetton.ticker
          })), 1), $(r, {
            class: "button",
            fill: "",
            size: a(te).LARGE,
            onClick: m
          }, {
            default: C(() => [a(e) ? (p(), V(n, {
              key: 0,
              size: 24
            })) : (p(), S("div", Me, [c("span", null, A(("t" in o ? o.t : a(j))("base.send")), 1), c("img", {
              src: ("imgResolver" in o ? o.imgResolver : a(N))("telegram-star-black")
            }, null, 8, Ve), c("span", null, A(a(t)), 1)]))]),
            _: 1
          }, 8, ["size"])])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  we = I(Te, [
    ["__scopeId", "data-v-63af6230"]
  ]),
  Ce = E({
    __name: "List",
    props: {
      jetton: {},
      mode: {}
    },
    setup(h) {
      const l = h,
        {
          reactions: u,
          updateReaction: i,
          generateAndPayStarsInvoice: f
        } = re({
          jettonShortname: l.jetton.shortname
        }),
        s = M(!1),
        e = M(),
        t = (n, r, b) => ({
          type: n,
          count: r,
          image: ie(n),
          active: b,
          label: le(r, {
            trim: !0
          })
        }),
        m = k(() => {
          if (!u.value) return;
          const n = [g.FIRE, g.BROKEN_HEART],
            {
              user: r,
              userStars: b,
              star: R,
              ...B
            } = u.value;
          return Object.entries(B).map(([_, T]) => t(_, T, _ === r)).sort((_, T) => n.indexOf(_.type) - n.indexOf(T.type))
        }),
        o = k(() => {
          var r;
          if (!u.value) return;
          const n = u.value[g.STAR];
          return t(g.STAR, n, !!((r = u.value) != null && r.userStars))
        }),
        d = () => {
          s.value = !0
        },
        y = () => {
          var n;
          (n = e.value) == null || n.showAnimation()
        },
        v = n => {
          var r;
          ((r = u.value) == null ? void 0 : r.user) === n ? i(void 0) : i(n)
        };
      return (n, r) => {
        const b = D,
          R = pe,
          B = we;
        return p(), S("div", {
          class: F(["memepad-jetton-reactions-list", `is-${l.mode}`])
        }, [!a(m) || !a(o) ? (p(), S(x, {
          key: 0
        }, P(3, _ => $(b, {
          key: _,
          class: "skeleton"
        })), 64)) : (p(), S(x, {
          key: 1
        }, [$(R, {
          ref_key: "starsButton",
          ref: e,
          item: a(o),
          mode: n.mode,
          onClick: r[0] || (r[0] = _ => d())
        }, null, 8, ["item", "mode"]), (p(!0), S(x, null, P(a(m), _ => (p(), V(R, {
          key: _.type,
          item: _,
          mode: n.mode,
          onClick: T => v(_.type)
        }, null, 8, ["item", "mode", "onClick"]))), 128)), $(B, {
          modelValue: a(s),
          "onUpdate:modelValue": r[1] || (r[1] = _ => z(s) ? s.value = _ : null),
          jetton: n.jetton,
          "generate-and-pay-stars-invoice": a(f),
          onSuccess: y
        }, null, 8, ["modelValue", "jetton", "generate-and-pay-stars-invoice"])], 64))], 2)
      }
    }
  }),
  je = I(Ce, [
    ["__scopeId", "data-v-32a2598b"]
  ]);
export {
  je as _
};