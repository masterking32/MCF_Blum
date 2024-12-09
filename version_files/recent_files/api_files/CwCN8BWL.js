import {
  d as s,
  a,
  c as r,
  b as t,
  t as i,
  n as o,
  j as n
} from "./Ddf_vcE7.js";
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
      return (p, u) => (a(), r("div", {
        class: o(["kit-note", {
          "is-tertiary": e.tertiary
        }])
      }, [t("div", c, [t("img", {
        src: e.image,
        alt: "Star",
        width: "32",
        height: "32"
      }, null, 8, _)]), t("div", d, [t("div", l, i(e.text), 1)])], 2))
    }
  }),
  h = n(m, [
    ["__scopeId", "data-v-c235066f"]
  ]);
export {
  h as _
};