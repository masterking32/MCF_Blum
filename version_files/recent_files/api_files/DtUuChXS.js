import {
  _ as B
} from "./DKXENsc2.js";
import {
  d as C,
  y as N,
  j as v,
  T as R,
  a2 as w,
  bU as d,
  a1 as A,
  o as i,
  c as l,
  a as k,
  b as E,
  D as O,
  e as a,
  M as T,
  E as y,
  ak as x,
  t as I,
  n as h,
  h as K,
  am as M,
  f as F,
  bV as V,
  F as g,
  q as b
} from "./BhDmcp0J.js";
const j = {
    class: "image-wrapper"
  },
  D = ["src"],
  H = {
    key: 0,
    class: "label"
  },
  L = C({
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
        t = N(e.item.active ? {
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
        const $ = M;
        return i(), l("button", {
          class: h(["memepad-jetton-about-reactions-button reset", [`is-${a(t).status}`, `type-${c.type}`, a(t).status === "click-animation" && `is-stage-${a(t).stage}`]]),
          type: "button",
          onClick: r[0] || (r[0] = J => _())
        }, [r[1] || (r[1] = k("div", {
          class: "bg"
        }, null, -1)), k("div", j, [k("img", {
          src: c.item.image
        }, null, 8, D), E(x, {
          name: "animation-fg-transition"
        }, {
          default: O(() => [a(t).status === "click-animation" && a(t).stage === 2 ? (i(), T($, {
            key: 0,
            name: a(f),
            class: "animation-fg",
            loop: !1,
            onOnComplete: o
          }, null, 8, ["name"])) : y("", !0)]),
          _: 1
        })]), c.item.count.isZero() ? y("", !0) : (i(), l("div", H, I(c.item.label.full), 1))], 2)
      }
    }
  }),
  P = F(L, [
    ["__scopeId", "data-v-242afd87"]
  ]),
  U = C({
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
        e = v(() => V(s.reactions)),
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
        const p = B,
          _ = P;
        return i(), l("div", {
          class: h(["memepad-jetton-reactions-list", `is-${s.type}`])
        }, [a(e) ? (i(!0), l(g, {
          key: 1
        }, b(a(e), o => (i(), T(_, {
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
  z = F(U, [
    ["__scopeId", "data-v-96ac2219"]
  ]);
export {
  z as _
};