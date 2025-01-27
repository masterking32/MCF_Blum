import {
  _ as B
} from "./CMi4VBYK.js";
import {
  d as C,
  K as N,
  j as v,
  P as R,
  W as w,
  bE as d,
  U as A,
  o as i,
  c as l,
  a as k,
  b as E,
  H as O,
  e as a,
  G as F,
  D as y,
  aa as x,
  t as I,
  n as h,
  h as K,
  ae as H,
  f as T,
  bF as P,
  F as g,
  q as b
} from "./BKd9vpCm.js";
const j = {
    class: "image-wrapper"
  },
  D = ["src"],
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
        const $ = H;
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
          default: O(() => [a(t).status === "click-animation" && a(t).stage === 2 ? (i(), F($, {
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
  U = T(M, [
    ["__scopeId", "data-v-242afd87"]
  ]),
  V = C({
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
        e = v(() => P(s.reactions)),
        m = t => {
          var n;
          ((n = s.reactions) == null ? void 0 : n.user) === t ? s.updateCallback(void 0) : s.updateCallback(t)
        };
      return (t, n) => {
        const p = B,
          _ = U;
        return i(), l("div", {
          class: h(["memepad-jetton-reactions-list", `is-${s.type}`])
        }, [a(e) ? (i(!0), l(g, {
          key: 1
        }, b(a(e), o => (i(), F(_, {
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
  z = T(V, [
    ["__scopeId", "data-v-5917d2ee"]
  ]);
export {
  z as _
};