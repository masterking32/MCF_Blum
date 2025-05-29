import {
  _ as d
} from "./D125EveM.js";
import {
  d as p,
  o as t,
  c as n,
  a as m,
  y as i,
  E as o,
  aq as s,
  aH as f,
  t as l,
  b,
  C as S,
  e as k,
  a9 as v,
  F as y,
  aJ as h,
  x as z,
  f as $
} from "./YXPW7IJg.js";
import {
  _ as B
} from "./YJ664n06.js";
const C = {
    class: "kit-notification-screen"
  },
  K = ["src"],
  L = {
    key: 1,
    class: "title"
  },
  N = {
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
        return t(), n(y, null, [m("div", C, [e.withSpace ? (t(), i(u, {
          key: 0
        })) : o("", !0), s(e.$slots, "icon", {}, () => [e.icon ? (t(), n("img", {
          key: 0,
          src: e.icon,
          style: f({
            width: `${e.iconSize}px`,
            height: `${e.iconSize}px`
          })
        }, null, 12, K)) : e.lottie ? (t(), i(r, {
          key: 1,
          name: e.lottie,
          size: e.iconSize
        }, null, 8, ["name", "size"])) : o("", !0)], !0), e.title ? (t(), n("div", L, l(e.title), 1)) : o("", !0), e.subtitle ? (t(), n("div", N, l(e.subtitle), 1)) : o("", !0)]), b(_, null, {
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
  T = $(g, [
    ["__scopeId", "data-v-2545fc3b"]
  ]);
export {
  T as _
};