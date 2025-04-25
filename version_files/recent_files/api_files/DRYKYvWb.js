import {
  _ as p
} from "./Cy2WoXIv.js";
import {
  d,
  o as t,
  c as n,
  a as m,
  N as i,
  G as o,
  ag as s,
  aP as f,
  t as l,
  b,
  D as S,
  e as k,
  Y as v,
  F as y,
  ap as h,
  x as z,
  f as $
} from "./Ces7X5md.js";
import {
  _ as B
} from "./D4d-YLQF.js";
const N = {
    class: "kit-notification-screen"
  },
  g = ["src"],
  K = {
    key: 1,
    class: "title"
  },
  L = {
    key: 2,
    class: "subtitle"
  },
  w = d({
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
        const u = p,
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
        }, null, 12, g)) : e.lottie ? (t(), i(r, {
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
  G = $(w, [
    ["__scopeId", "data-v-2545fc3b"]
  ]);
export {
  G as _
};