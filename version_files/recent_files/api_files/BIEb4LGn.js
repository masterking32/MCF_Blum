import {
  _ as z
} from "./ClJ5rZsY.js";
import {
  d as O,
  y as A,
  j as T,
  Z as D,
  a8 as H,
  bS as d,
  a7 as J,
  o as c,
  c as k,
  a as i,
  e as s,
  N as E,
  G as j,
  b as S,
  D as V,
  ap as Z,
  t as h,
  n as P,
  h as q,
  aD as L,
  f as w,
  V as N,
  W as G,
  br as x,
  p as U,
  a0 as K,
  C as F,
  a1 as W,
  af as Y,
  aS as Q,
  x as X,
  a2 as ee,
  F as I,
  q as M,
  a$ as te,
  aZ as se
} from "./1XbCgLiZ.js";
import {
  _ as ae
} from "./D3NFvaLN.js";
import {
  u as ne
} from "./oOHTyLym.js";
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
        b = m,
        e = A(o.item.active ? {
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
          o.item.type !== d.STAR && v(), b("click")
        },
        p = () => {
          e.value.status === "click-animation" && (e.value = {
            status: "active"
          })
        };
      D(() => o.item.active, r => {
        r ? e.value.status !== "click-animation" && (e.value = {
          status: "active"
        }) : (e.value = {
          status: "idle"
        }, u.forEach(clearTimeout))
      });
      const $ = T(() => {
        switch (o.item.type) {
          case d.BROKEN_HEART:
            return "animations/reactions/BrokenHeartFg";
          case d.FIRE:
            return "animations/reactions/FireFg";
          case d.STAR:
            return "animations/reactions/StarsFg";
          default:
            throw o.item.type, H("Unknown reaction type")
        }
      });
      return R({
        showAnimation: v
      }), J(() => {
        u.forEach(clearTimeout)
      }), (r, t) => {
        const a = L;
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
            name: s($),
            class: "animation-fg",
            loop: !1,
            onOnComplete: p
          }, null, 8, ["name"])) : j("", !0)]),
          _: 1
        })]), r.item.count.isZero() ? j("", !0) : (c(), k("div", le, h(r.item.label.full), 1))], 2)
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
        b = R,
        e = A(10),
        u = A(!1),
        _ = T(() => x(e.value, {
          trim: !0
        })),
        v = async () => {
          if (u.value) return;
          u.value = !0;
          const n = await m.generateAndPayStarsInvoice(m.jetton.shortname, e.value);
          Y(n) && (o.value = !1, b("success")), u.value = !1
        };
      return (n, p) => {
        const $ = L,
          r = ae,
          t = Q,
          a = X,
          f = ee;
        return c(), E(f, {
          modelValue: o.value,
          "onUpdate:modelValue": p[1] || (p[1] = g => o.value = g)
        }, {
          default: V(() => [i("div", me, [i("div", ue, [S(r, {
            modelValue: s(e),
            "onUpdate:modelValue": p[0] || (p[0] = g => U(e) ? e.value = g : null),
            scale: "points",
            min: 1,
            max: 1e4,
            color: "#C46E00",
            "pointer-size": 28
          }, {
            tooltip: V(() => [i("div", de, [S($, {
              name: "animations/Stars",
              class: "animation",
              loop: ""
            }), i("img", {
              src: ("imgResolver" in n ? n.imgResolver : s(K))("telegram-star")
            }, null, 8, pe), i("div", _e, h(s(_)), 1)])]),
            _: 1
          }, 8, ["modelValue"])]), i("div", ve, [i("div", fe, h(("t" in n ? n.t : s(F))("memepad.reactions.stars_sheet.title")), 1), i("div", ge, h(("t" in n ? n.t : s(F))("memepad.reactions.stars_sheet.description", {
            ticker: n.jetton.ticker
          })), 1), S(a, {
            class: "button",
            fill: "",
            size: s(W).LARGE,
            onClick: v
          }, {
            default: V(() => [s(u) ? (c(), E(t, {
              key: 0,
              size: 24
            })) : (c(), k("div", ke, [i("span", null, h(("t" in n ? n.t : s(F))("base.send")), 1), i("img", {
              src: ("imgResolver" in n ? n.imgResolver : s(K))("telegram-star-black")
            }, null, 8, Se), i("span", null, h(s(_)), 1)]))]),
            _: 1
          }, 8, ["size"])])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Re = w(ye, [
    ["__scopeId", "data-v-63af6230"]
  ]),
  he = O({
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
          generateAndPayStarsInvoice: b
        } = ne({
          jettonShortname: R.jetton.shortname
        }),
        e = A(!1),
        u = A(),
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
        $ = () => {
          var t;
          (t = u.value) == null || t.showAnimation()
        },
        r = t => {
          var a;
          ((a = m.value) == null ? void 0 : a.user) === t ? o(void 0) : o(t)
        };
      return (t, a) => {
        const f = z,
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
          "onUpdate:modelValue": a[1] || (a[1] = l => U(e) ? e.value = l : null),
          jetton: t.jetton,
          "generate-and-pay-stars-invoice": s(b),
          onSuccess: $
        }, null, 8, ["modelValue", "jetton", "generate-and-pay-stars-invoice"])], 64))], 2)
      }
    }
  }),
  Ee = w(he, [
    ["__scopeId", "data-v-32a2598b"]
  ]);
export {
  Ee as _
};