import {
  d as m,
  o as e,
  c as i,
  a as b,
  az as a,
  ax as f,
  J as s,
  C as o,
  t as c,
  b as y,
  U as S,
  e as _,
  V as v,
  F as k,
  N as z,
  x as g,
  f as x
} from "./Doz8XXSF.js";
import {
  _ as $
} from "./Ca5vGtTs.js";
const h = {
    class: "kit-notification-screen"
  },
  N = ["src"],
  B = {
    key: 0,
    class: "title"
  },
  C = {
    key: 1,
    class: "subtitle"
  },
  L = m({
    __name: "KitNotificationScreen",
    props: {
      icon: {
        type: String,
        default: void 0
      },
      lottie: {
        type: String,
        default: void 0
      },
      title: {
        type: String,
        default: void 0
      },
      subtitle: {
        type: String,
        default: void 0
      },
      buttonLabel: {
        type: String,
        default: void 0
      },
      iconSize: {
        type: Number,
        default: 64
      }
    },
    emits: ["button"],
    setup(t) {
      return (n, l) => {
        const u = z,
          d = g,
          r = $;
        return e(), i(k, null, [b("div", h, [a(n.$slots, "icon", {}, () => [t.icon ? (e(), i("img", {
          key: 0,
          src: t.icon,
          style: f({
            width: `${t.iconSize}px`,
            height: `${t.iconSize}px`
          })
        }, null, 12, N)) : t.lottie ? (e(), s(u, {
          key: 1,
          name: t.lottie,
          size: t.iconSize
        }, null, 8, ["name", "size"])) : o("", !0)], !0), t.title ? (e(), i("div", B, c(t.title), 1)) : o("", !0), t.subtitle ? (e(), i("div", C, c(t.subtitle), 1)) : o("", !0)]), y(r, null, {
          default: S(() => [a(n.$slots, "button", {}, () => [a(n.$slots, "before-button", {}, void 0, !0), t.buttonLabel ? (e(), s(d, {
            key: 0,
            size: _(v).LARGE,
            label: t.buttonLabel,
            fill: "",
            onClick: l[0] || (l[0] = p => n.$emit("button"))
          }, null, 8, ["size", "label"])) : o("", !0)], !0)]),
          _: 3
        })], 64)
      }
    }
  }),
  E = x(L, [
    ["__scopeId", "data-v-b3c79a0b"]
  ]);
export {
  E as _
};