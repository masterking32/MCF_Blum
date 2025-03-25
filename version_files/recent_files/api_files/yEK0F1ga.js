import {
  _ as $
} from "./CXzcKdcd.js";
import {
  d as C,
  K as B,
  j as v,
  aM as N,
  V as w,
  bR as d,
  T as A,
  o as i,
  c as l,
  a as k,
  b as E,
  H as O,
  e as a,
  G as T,
  D as g,
  a9 as x,
  t as I,
  n as h,
  h as K,
  ad as H,
  f as F,
  bS as M,
  F as y,
  q as b
} from "./CwaQmw2d.js";
const V = {
    class: "image-wrapper"
  },
  j = ["src"],
  D = {
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
      N(() => e.item.active, c => {
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
        const R = H;
        return i(), l("button", {
          class: h(["memepad-jetton-about-reactions-button reset", [`is-${a(t).status}`, `type-${c.type}`, a(t).status === "click-animation" && `is-stage-${a(t).stage}`]]),
          type: "button",
          onClick: r[0] || (r[0] = J => _())
        }, [r[1] || (r[1] = k("div", {
          class: "bg"
        }, null, -1)), k("div", V, [k("img", {
          src: c.item.image
        }, null, 8, j), E(x, {
          name: "animation-fg-transition"
        }, {
          default: O(() => [a(t).status === "click-animation" && a(t).stage === 2 ? (i(), T(R, {
            key: 0,
            name: a(f),
            class: "animation-fg",
            loop: !1,
            onOnComplete: o
          }, null, 8, ["name"])) : g("", !0)]),
          _: 1
        })]), c.item.count.isZero() ? g("", !0) : (i(), l("div", D, I(c.item.label.full), 1))], 2)
      }
    }
  }),
  P = F(L, [
    ["__scopeId", "data-v-242afd87"]
  ]),
  S = C({
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
        e = v(() => M(s.reactions)),
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
          class: h(["memepad-jetton-reactions-list", `is-${s.type}`])
        }, [a(e) ? (i(!0), l(y, {
          key: 1
        }, b(a(e), o => (i(), T(_, {
          key: o.type,
          item: o,
          type: t.type,
          onClick: f => m(o.type)
        }, null, 8, ["item", "type", "onClick"]))), 128)) : (i(), l(y, {
          key: 0
        }, b(3, o => E(p, {
          key: o,
          class: "skeleton"
        })), 64))], 2)
      }
    }
  }),
  z = F(S, [
    ["__scopeId", "data-v-96ac2219"]
  ]);
export {
  z as _
};