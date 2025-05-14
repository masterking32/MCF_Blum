import {
  _ as d
} from "./CLPfiL4J.js";
import {
  d as p,
  o as t,
  c as n,
  a as m,
  N as i,
  G as o,
  aj as s,
  aA as f,
  t as l,
  b,
  D as S,
  e as k,
  a1 as v,
  F as y,
  aC as h,
  x as z,
  f as $
} from "./CeLf80nu.js";
import {
  _ as B
} from "./BSgRs94G.js";
const N = {
    class: "kit-notification-screen"
  },
  C = ["src"],
  K = {
    key: 1,
    class: "title"
  },
  L = {
    key: 2,
    class: "subtitle"
  },
  g = p({
    __name: "KitNotificationScreen",
    props: {
      icon: {
        default: void 0
      },
      lottie: {
        default: void 0
      },
      title: {
        default: void 0
      },
      subtitle: {
        default: void 0
      },
      buttonLabel: {
        default: void 0
      },
      iconSize: {
        default: 64
      },
      withSpace: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["button"],
    setup(w) {
      return (e, a) => {
        const u = d,
          r = h,
          c = z,
          _ = B;
        return t(), n(y, null, [m("div", N, [e.withSpace ? (t(), i(u, {
          key: 0
        })) : o("", !0), s(e.$slots, "icon", {}, () => [e.icon ? (t(), n("img", {
          key: 0,
          src: e.icon,
          style: f({
            width: `${e.iconSize}px`,
            height: `${e.iconSize}px`
          })
        }, null, 12, C)) : e.lottie ? (t(), i(r, {
          key: 1,
          name: e.lottie,
          size: e.iconSize
        }, null, 8, ["name", "size"])) : o("", !0)], !0), e.title ? (t(), n("div", K, l(e.title), 1)) : o("", !0), e.subtitle ? (t(), n("div", L, l(e.subtitle), 1)) : o("", !0)]), b(_, null, {
          default: S(() => [s(e.$slots, "button", {}, () => [s(e.$slots, "before-button", {}, void 0, !0), e.buttonLabel ? (t(), i(c, {
            key: 0,
            size: k(v).LARGE,
            label: e.buttonLabel,
            fill: "",
            onClick: a[0] || (a[0] = E => e.$emit("button"))
          }, null, 8, ["size", "label"])) : o("", !0)], !0)]),
          _: 3
        })], 64)
      }
    }
  }),
  D = $(g, [
    ["__scopeId", "data-v-2545fc3b"]
  ]);
export {
  D as _
};