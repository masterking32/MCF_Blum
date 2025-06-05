import {
  d as s,
  o as a,
  c as o,
  a as t,
  t as r,
  n as i,
  f as n
} from "./P2UesN5H.js";
const c = {
    class: "image-wrapper"
  },
  _ = ["src"],
  d = {
    class: "content"
  },
  l = {
    class: "text"
  },
  m = s({
    __name: "Note",
    props: {
      image: {
        type: String,
        required: !0
      },
      text: {
        type: String,
        required: !0
      },
      tertiary: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      return (p, u) => (a(), o("div", {
        class: i(["kit-note", {
          "is-tertiary": e.tertiary
        }])
      }, [t("div", c, [t("img", {
        src: e.image,
        alt: "Star",
        width: "32",
        height: "32"
      }, null, 8, _)]), t("div", d, [t("div", l, r(e.text), 1)])], 2))
    }
  }),
  g = n(m, [
    ["__scopeId", "data-v-c235066f"]
  ]);
export {
  g as _
};