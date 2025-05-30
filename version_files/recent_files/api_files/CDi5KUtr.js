import {
  _ as d
} from "./6VLEKrJt.js";
import {
  d as p,
  o as t,
  c as n,
  a as m,
  z as i,
  G as o,
  aq as s,
  aH as f,
  t as l,
  b,
  D as S,
  e as k,
  a9 as v,
  F as y,
  aJ as z,
  x as h,
  f as $
} from "./jPANuN8i.js";
import {
  _ as B
} from "./jOA2D9Ne.js";
const K = {
    class: "kit-notification-screen"
  },
  L = ["src"],
  N = {
    key: 1,
    class: "title"
  },
  g = {
    key: 2,
    class: "subtitle"
  },
  w = p({
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
    setup(C) {
      return (e, a) => {
        const u = d,
          r = z,
          c = h,
          _ = B;
        return t(), n(y, null, [m("div", K, [e.withSpace ? (t(), i(u, {
          key: 0
        })) : o("", !0), s(e.$slots, "icon", {}, () => [e.icon ? (t(), n("img", {
          key: 0,
          src: e.icon,
          style: f({
            width: `${e.iconSize}px`,
            height: `${e.iconSize}px`
          })
        }, null, 12, L)) : e.lottie ? (t(), i(r, {
          key: 1,
          name: e.lottie,
          size: e.iconSize
        }, null, 8, ["name", "size"])) : o("", !0)], !0), e.title ? (t(), n("div", N, l(e.title), 1)) : o("", !0), e.subtitle ? (t(), n("div", g, l(e.subtitle), 1)) : o("", !0)]), b(_, null, {
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
  G = $(w, [
    ["__scopeId", "data-v-2545fc3b"]
  ]);
export {
  G as _
};