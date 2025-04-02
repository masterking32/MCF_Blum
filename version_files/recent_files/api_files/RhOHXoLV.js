import {
  _ as a
} from "./RyOMEVJB.js";
import {
  d as n,
  Q as r,
  o as c,
  c as _,
  b as i,
  w as l,
  a as m,
  an as d,
  f as p
} from "./GkJ71AXb.js";
const u = {
    class: "kit-skeleton-image"
  },
  g = ["src", "alt"],
  f = n({
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
        const o = a,
          s = r("img-loader");
        return c(), _("div", u, [i(o, {
          class: "skeleton"
        }), l(m("img", d({
          src: e.url,
          alt: e.alt
        }, t.$attrs), null, 16, g), [
          [s]
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