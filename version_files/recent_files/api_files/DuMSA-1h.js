import {
  _ as $
} from "./CmXKpe7A.js";
import {
  d as C,
  y as B,
  j as v,
  V as R,
  a4 as w,
  bZ as d,
  a3 as A,
  o as i,
  c as l,
  a as k,
  b as E,
  D as O,
  e as a,
  N as h,
  G as y,
  an as x,
  t as I,
  n as F,
  h as K,
  ap as V,
  f as T,
  b_ as j,
  F as g,
  q as b
} from "./BZz9wj6Z.js";
const D = {
    class: "image-wrapper"
  },
  H = ["src"],
  L = {
    key: 0,
    class: "label"
  },
  M = C({
    __name: "Button",
    props: {
      item: {},
      type: {}
    },
    emits: ["click"],
    setup(u, {
      emit: s
    }) {
      const e = u,
        m = s,
        t = B(e.item.active ? {
          status: "active"
        } : {
          status: "idle"
        }),
        n = [],
        p = v(() => e.item.active),
        _ = () => {
          p.value ? t.value = {
            status: "idle"
          } : (t.value = {
            status: "click-animation",
            stage: 1
          }, K().$webApp.HapticFeedback.impactOccurred("light"), n.push(setTimeout(() => {
            t.value = {
              status: "click-animation",
              stage: 2
            }
          }, 300))), m("click")
        },
        o = () => {
          t.value.status === "click-animation" && (t.value = {
            status: "active"
          })
        };
      R(() => e.item.active, c => {
        c ? t.value.status !== "click-animation" && (t.value = {
          status: "active"
        }) : (t.value = {
          status: "idle"
        }, n.forEach(clearTimeout))
      });
      const f = v(() => {
        switch (e.item.type) {
          case d.BROKEN_HEART:
            return "animations/reactions/BrokenHeartFg";
          case d.FIRE:
            return "animations/reactions/FireFg";
          case d.ROCKET:
            return "animations/reactions/RocketFg";
          default:
            throw e.item.type, w("Unknown reaction type")
        }
      });
      return A(() => {
        n.forEach(clearTimeout)
      }), (c, r) => {
        const N = V;
        return i(), l("button", {
          class: F(["memepad-jetton-about-reactions-button reset", [`is-${a(t).status}`, `type-${c.type}`, a(t).status === "click-animation" && `is-stage-${a(t).stage}`]]),
          type: "button",
          onClick: r[0] || (r[0] = S => _())
        }, [r[1] || (r[1] = k("div", {
          class: "bg"
        }, null, -1)), k("div", D, [k("img", {
          src: c.item.image
        }, null, 8, H), E(x, {
          name: "animation-fg-transition"
        }, {
          default: O(() => [a(t).status === "click-animation" && a(t).stage === 2 ? (i(), h(N, {
            key: 0,
            name: a(f),
            class: "animation-fg",
            loop: !1,
            onOnComplete: o
          }, null, 8, ["name"])) : y("", !0)]),
          _: 1
        })]), c.item.count.isZero() ? y("", !0) : (i(), l("div", L, I(c.item.label.full), 1))], 2)
      }
    }
  }),
  P = T(M, [
    ["__scopeId", "data-v-242afd87"]
  ]),
  J = C({
    __name: "List",
    props: {
      reactions: {},
      updateCallback: {
        type: Function
      },
      type: {}
    },
    setup(u) {
      const s = u,
        e = v(() => j(s.reactions)),
        m = t => {
          var n;
          ((n = s.reactions) == null ? void 0 : n.user) === t ? s.updateCallback({
            type: t,
            value: !1
          }) : s.updateCallback({
            type: t,
            value: !0
          })
        };
      return (t, n) => {
        const p = $,
          _ = P;
        return i(), l("div", {
          class: F(["memepad-jetton-reactions-list", `is-${s.type}`])
        }, [a(e) ? (i(!0), l(g, {
          key: 1
        }, b(a(e), o => (i(), h(_, {
          key: o.type,
          item: o,
          type: t.type,
          onClick: f => m(o.type)
        }, null, 8, ["item", "type", "onClick"]))), 128)) : (i(), l(g, {
          key: 0
        }, b(3, o => E(p, {
          key: o,
          class: "skeleton"
        })), 64))], 2)
      }
    }
  }),
  q = T(J, [
    ["__scopeId", "data-v-96ac2219"]
  ]);
export {
  q as _
};