import {
  _ as U
} from "./DpzGlKlS.js";
import {
  d as O,
  y as $,
  j as T,
  V as H,
  a4 as J,
  b_ as d,
  a3 as D,
  o as c,
  c as k,
  a as i,
  e as s,
  N as E,
  G as j,
  b as S,
  D as V,
  an as Z,
  t as b,
  n as P,
  h as q,
  ap as z,
  f as w,
  ay as N,
  az as G,
  am as Y,
  p as L,
  X as K,
  C as F,
  Y as x,
  ab as X,
  b2 as Q,
  x as W,
  Z as ee,
  F as I,
  q as M,
  ba as te,
  b9 as se
} from "./DmEY5NHF.js";
import {
  _ as ae
} from "./DxDX9BzU.js";
import {
  u as ne
} from "./D2hfO6EB.js";
const oe = {
    class: "image-wrapper"
  },
  ie = ["src"],
  le = {
    key: 1,
    class: "label"
  },
  re = O({
    __name: "Button",
    props: {
      item: {},
      mode: {}
    },
    emits: ["click"],
    setup(y, {
      expose: R,
      emit: m
    }) {
      const o = y,
        h = m,
        e = $(o.item.active ? {
          status: "active"
        } : {
          status: "idle"
        }),
        u = [],
        _ = T(() => o.item.active),
        v = () => {
          _.value && o.item.type !== d.STAR ? e.value = {
            status: "idle"
          } : (e.value = {
            status: "click-animation",
            stage: 1
          }, q().$webApp.HapticFeedback.impactOccurred("light"), u.push(setTimeout(() => {
            e.value = {
              status: "click-animation",
              stage: 2
            }
          }, 300)))
        },
        n = () => {
          o.item.type !== d.STAR && v(), h("click")
        },
        p = () => {
          e.value.status === "click-animation" && (e.value = {
            status: "active"
          })
        };
      H(() => o.item.active, r => {
        r ? e.value.status !== "click-animation" && (e.value = {
          status: "active"
        }) : (e.value = {
          status: "idle"
        }, u.forEach(clearTimeout))
      });
      const A = T(() => {
        switch (o.item.type) {
          case d.BROKEN_HEART:
            return "animations/reactions/BrokenHeartFg";
          case d.FIRE:
            return "animations/reactions/FireFg";
          case d.STAR:
            return "animations/reactions/StarsFg";
          default:
            throw o.item.type, J("Unknown reaction type")
        }
      });
      return R({
        showAnimation: v
      }), D(() => {
        u.forEach(clearTimeout)
      }), (r, t) => {
        const a = z;
        return c(), k("button", {
          class: P(["memepad-jetton-about-reactions-button reset", [`is-${s(e).status}`, `mode-${r.mode}`, `type-${r.item.type}`, s(e).status === "click-animation" && `is-stage-${s(e).stage}`]]),
          type: "button",
          onClick: t[0] || (t[0] = f => n())
        }, [t[1] || (t[1] = i("div", {
          class: "bg"
        }, null, -1)), r.item.type === s(d).STAR ? (c(), E(a, {
          key: 0,
          name: "animations/Stars",
          class: "animation-bg",
          loop: ""
        })) : j("", !0), i("div", oe, [i("img", {
          src: r.item.image
        }, null, 8, ie), S(Z, {
          name: "animation-fg-transition"
        }, {
          default: V(() => [s(e).status === "click-animation" && s(e).stage === 2 ? (c(), E(a, {
            key: 0,
            name: s(A),
            class: "animation-fg",
            loop: !1,
            onOnComplete: p
          }, null, 8, ["name"])) : j("", !0)]),
          _: 1
        })]), r.item.count.isZero() ? j("", !0) : (c(), k("div", le, b(r.item.label.full), 1))], 2)
      }
    }
  }),
  ce = w(re, [
    ["__scopeId", "data-v-93cfd5b6"]
  ]),
  me = {
    class: "memepad-jetton-reactions-stars-sheet"
  },
  ue = {
    class: "range-wrapper"
  },
  de = {
    class: "tooltip"
  },
  pe = ["src"],
  _e = {
    class: "label"
  },
  ve = {
    class: "inner"
  },
  fe = {
    class: "title"
  },
  ge = {
    class: "description"
  },
  ke = {
    key: 1,
    class: "label"
  },
  Se = ["src"],
  ye = O({
    __name: "StarsSheet",
    props: N({
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
    emits: N(["success"], ["update:modelValue"]),
    setup(y, {
      emit: R
    }) {
      const m = y,
        o = G(y, "modelValue"),
        h = R,
        e = $(0),
        u = $(!1),
        _ = T(() => Y(e.value, {
          trim: !0
        })),
        v = async () => {
          if (u.value) return;
          u.value = !0;
          const n = await m.generateAndPayStarsInvoice(m.jetton.shortname, e.value);
          X(n) && (o.value = !1, h("success")), u.value = !1
        };
      return (n, p) => {
        const A = z,
          r = ae,
          t = Q,
          a = W,
          f = ee;
        return c(), E(f, {
          modelValue: o.value,
          "onUpdate:modelValue": p[1] || (p[1] = g => o.value = g)
        }, {
          default: V(() => [i("div", me, [i("div", ue, [S(r, {
            modelValue: s(e),
            "onUpdate:modelValue": p[0] || (p[0] = g => L(e) ? e.value = g : null),
            scale: "points",
            min: 1,
            max: 1e4,
            color: "#C46E00",
            "pointer-size": 28
          }, {
            tooltip: V(() => [i("div", de, [S(A, {
              name: "animations/Stars",
              class: "animation",
              loop: ""
            }), i("img", {
              src: ("imgResolver" in n ? n.imgResolver : s(K))("telegram-star")
            }, null, 8, pe), i("div", _e, b(s(_)), 1)])]),
            _: 1
          }, 8, ["modelValue"])]), i("div", ve, [i("div", fe, b(("t" in n ? n.t : s(F))("memepad.reactions.stars_sheet.title")), 1), i("div", ge, b(("t" in n ? n.t : s(F))("memepad.reactions.stars_sheet.description", {
            ticker: n.jetton.ticker
          })), 1), S(a, {
            class: "button",
            fill: "",
            size: s(x).LARGE,
            onClick: v
          }, {
            default: V(() => [s(u) ? (c(), E(t, {
              key: 0,
              size: 24
            })) : (c(), k("div", ke, [i("span", null, b(("t" in n ? n.t : s(F))("base.send")), 1), i("img", {
              src: ("imgResolver" in n ? n.imgResolver : s(K))("telegram-star-black")
            }, null, 8, Se), i("span", null, b(s(_)), 1)]))]),
            _: 1
          }, 8, ["size"])])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Re = w(ye, [
    ["__scopeId", "data-v-8bea1c52"]
  ]),
  be = O({
    __name: "List",
    props: {
      jetton: {},
      mode: {}
    },
    setup(y) {
      const R = y,
        {
          reactions: m,
          updateReaction: o,
          generateAndPayStarsInvoice: h
        } = ne({
          jettonShortname: R.jetton.shortname
        }),
        e = $(!1),
        u = $(),
        _ = (t, a, f) => ({
          type: t,
          count: a,
          image: te(t),
          active: f,
          label: se(a, {
            trim: !0
          })
        }),
        v = T(() => {
          if (!m.value) return;
          const t = [d.FIRE, d.BROKEN_HEART],
            {
              user: a,
              userStars: f,
              star: g,
              ...B
            } = m.value;
          return Object.entries(B).map(([l, C]) => _(l, C, l === a)).sort((l, C) => t.indexOf(l.type) - t.indexOf(C.type))
        }),
        n = T(() => {
          var a;
          if (!m.value) return;
          const t = m.value[d.STAR];
          return _(d.STAR, t, !!((a = m.value) != null && a.userStars))
        }),
        p = () => {
          e.value = !0
        },
        A = () => {
          var t;
          (t = u.value) == null || t.showAnimation()
        },
        r = t => {
          var a;
          ((a = m.value) == null ? void 0 : a.user) === t ? o(void 0) : o(t)
        };
      return (t, a) => {
        const f = U,
          g = ce,
          B = Re;
        return c(), k("div", {
          class: P(["memepad-jetton-reactions-list", `is-${R.mode}`])
        }, [!s(v) || !s(n) ? (c(), k(I, {
          key: 0
        }, M(3, l => S(f, {
          key: l,
          class: "skeleton"
        })), 64)) : (c(), k(I, {
          key: 1
        }, [S(g, {
          ref_key: "starsButton",
          ref: u,
          item: s(n),
          mode: t.mode,
          onClick: a[0] || (a[0] = l => p())
        }, null, 8, ["item", "mode"]), (c(!0), k(I, null, M(s(v), l => (c(), E(g, {
          key: l.type,
          item: l,
          mode: t.mode,
          onClick: C => r(l.type)
        }, null, 8, ["item", "mode", "onClick"]))), 128)), S(B, {
          modelValue: s(e),
          "onUpdate:modelValue": a[1] || (a[1] = l => L(e) ? e.value = l : null),
          jetton: t.jetton,
          "generate-and-pay-stars-invoice": s(h),
          onSuccess: A
        }, null, 8, ["modelValue", "jetton", "generate-and-pay-stars-invoice"])], 64))], 2)
      }
    }
  }),
  Ee = w(be, [
    ["__scopeId", "data-v-32a2598b"]
  ]);
export {
  Ee as _
};