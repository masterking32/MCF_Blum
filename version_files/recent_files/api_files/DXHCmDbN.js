import {
  _ as s
} from "./Dl7VDv3R.js";
import {
  d as r,
  a2 as n,
  o as c,
  c as _,
  b as i,
  w as l,
  a as m,
  aW as d,
  f as p
} from "./aUn4L-is.js";
const u = {
    class: "kit-skeleton-image"
  },
  g = ["src", "alt"],
  f = r({
    __name: "SkeletonImage",
    props: {
      url: {
        type: String,
        required: !0
      },
      alt: {
        type: String,
        default: void 0
      }
    },
    setup(e) {
      return (t, k) => {
        const o = s,
          a = n("img-loader");
        return c(), _("div", u, [i(o, {
          class: "skeleton"
        }), l(m("img", d({
          src: e.url,
          alt: e.alt
        }, t.$attrs), null, 16, g), [
          [a]
        ])])
      }
    }
  }),
  x = p(f, [
    ["__scopeId", "data-v-d210e64a"]
  ]);
export {
  x as _
};