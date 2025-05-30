import {
  _ as q
} from "./D67_J7zO.js";
import {
  d as C,
  I as M,
  j as k,
  J as U,
  ag as J,
  bU as g,
  af as D,
  o as p,
  c as S,
  a as c,
  e as a,
  y as V,
  E,
  b as $,
  C as w,
  av as Z,
  t as A,
  n as F,
  h as G,
  aJ as L,
  f as I,
  a4 as O,
  aA as Y,
  A as H,
  aH as N,
  aq as Q,
  w as W,
  bV as X,
  p as z,
  bv as ee,
  a8 as P,
  z as j,
  a9 as te,
  am as se,
  a$ as ae,
  x as oe,
  aa as ne,
  F as x,
  q as K,
  b7 as ie,
  b5 as le
} from "./i5EetP0C.js";
import {
  u as re
} from "./VxiUIt2n.js";
const ce = {
    class: "image-wrapper"
  },
  ue = ["src"],
  me = {
    key: 1,
    class: "label"
  },
  de = C({
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
          }, G().$webApp.HapticFeedback.impactOccurred("light"), e.push(setTimeout(() => {
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
      U(() => i.item.active, _ => {
        _ ? s.value.status !== "click-animation" && (s.value = {
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
            throw i.item.type, J("Unknown reaction type")
        }
      });
      return l({
        showAnimation: m
      }), D(() => {
        e.forEach(clearTimeout)
      }), (_, n) => {
        const r = L;
        return p(), S("button", {
          class: F(["memepad-jetton-about-reactions-button reset", [`is-${a(s).status}`, `mode-${_.mode}`, `type-${_.item.type}`, a(s).status === "click-animation" && `is-stage-${a(s).stage}`]]),
          type: "button",
          onClick: n[0] || (n[0] = b => o())
        }, [n[1] || (n[1] = c("div", {
          class: "bg"
        }, null, -1)), _.item.type === a(g).STAR ? (p(), V(r, {
          key: 0,
          name: "animations/Stars",
          class: "animation-bg",
          loop: ""
        })) : E("", !0), c("div", ce, [c("img", {
          src: _.item.image
        }, null, 8, ue), $(Z, {
          name: "animation-fg-transition"
        }, {
          default: w(() => [a(s).status === "click-animation" && a(s).stage === 2 ? (p(), V(r, {
            key: 0,
            name: a(y),
            class: "animation-fg",
            loop: !1,
            onOnComplete: d
          }, null, 8, ["name"])) : E("", !0)]),
          _: 1
        })]), _.item.count.isZero() ? E("", !0) : (p(), S("div", me, A(_.item.label.full), 1))], 2)
      }
    }
  }),
  pe = I(de, [
    ["__scopeId", "data-v-93cfd5b6"]
  ]),
  ve = {
    class: "overlays"
  },
  _e = ["max"],
  fe = C({
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
      Y(e => ({
        "6b93b9a5": e.color,
        "320b7ca0": e.pointerSize
      }));
      const l = h,
        u = H(h, "modelValue"),
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
          } else throw J("Invalid scale")
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
      }, [c("div", ve, [c("div", {
        class: "filled",
        style: N({
          width: a(s)
        })
      }, null, 4), e.$slots.tooltip ? (p(), S("div", {
        key: 0,
        class: "tooltip",
        style: N({
          left: a(s)
        })
      }, [Q(e.$slots, "tooltip", {}, void 0, !0)], 4)) : E("", !0)]), W(c("input", {
        "onUpdate:modelValue": t[0] || (t[0] = m => z(f) ? f.value = m : null),
        type: "range",
        min: 0,
        max: a(i).length - 1,
        step: 1
      }, null, 8, _e), [
        [X, a(f)]
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
  Te = C({
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
        i = H(h, "modelValue"),
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
        const y = L,
          _ = ge,
          n = ae,
          r = oe,
          b = ne;
        return p(), V(b, {
          modelValue: i.value,
          "onUpdate:modelValue": d[1] || (d[1] = R => i.value = R)
        }, {
          default: w(() => [c("div", he, [c("div", Se, [$(_, {
            modelValue: a(s),
            "onUpdate:modelValue": d[0] || (d[0] = R => z(s) ? s.value = R : null),
            scale: "points",
            min: 1,
            max: 1e4,
            color: "#C46E00",
            "pointer-size": 28
          }, {
            tooltip: w(() => [c("div", ke, [$(y, {
              name: "animations/Stars",
              class: "animation",
              loop: ""
            }), c("img", {
              src: ("imgResolver" in o ? o.imgResolver : a(P))("telegram-star")
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
            default: w(() => [a(e) ? (p(), V(n, {
              key: 0,
              size: 24
            })) : (p(), S("div", Me, [c("span", null, A(("t" in o ? o.t : a(j))("base.send")), 1), c("img", {
              src: ("imgResolver" in o ? o.imgResolver : a(P))("telegram-star-black")
            }, null, 8, Ve), c("span", null, A(a(t)), 1)]))]),
            _: 1
          }, 8, ["size"])])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Ee = I(Te, [
    ["__scopeId", "data-v-63af6230"]
  ]),
  we = C({
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
          return Object.entries(B).map(([v, T]) => t(v, T, v === r)).sort((v, T) => n.indexOf(v.type) - n.indexOf(T.type))
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
        _ = n => {
          var r;
          ((r = u.value) == null ? void 0 : r.user) === n ? i(void 0) : i(n)
        };
      return (n, r) => {
        const b = q,
          R = pe,
          B = Ee;
        return p(), S("div", {
          class: F(["memepad-jetton-reactions-list", `is-${l.mode}`])
        }, [!a(m) || !a(o) ? (p(), S(x, {
          key: 0
        }, K(3, v => $(b, {
          key: v,
          class: "skeleton"
        })), 64)) : (p(), S(x, {
          key: 1
        }, [$(R, {
          ref_key: "starsButton",
          ref: e,
          item: a(o),
          mode: n.mode,
          onClick: r[0] || (r[0] = v => d())
        }, null, 8, ["item", "mode"]), (p(!0), S(x, null, K(a(m), v => (p(), V(R, {
          key: v.type,
          item: v,
          mode: n.mode,
          onClick: T => _(v.type)
        }, null, 8, ["item", "mode", "onClick"]))), 128)), $(B, {
          modelValue: a(s),
          "onUpdate:modelValue": r[1] || (r[1] = v => z(s) ? s.value = v : null),
          jetton: n.jetton,
          "generate-and-pay-stars-invoice": a(f),
          onSuccess: y
        }, null, 8, ["modelValue", "jetton", "generate-and-pay-stars-invoice"])], 64))], 2)
      }
    }
  }),
  je = I(we, [
    ["__scopeId", "data-v-32a2598b"]
  ]);
export {
  je as _
};