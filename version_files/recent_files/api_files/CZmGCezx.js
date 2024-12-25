import {
  _ as a
} from "./CCN8FtQN.js";
import {
  d as r,
  P as n,
  o as c,
  c as _,
  b as i,
  w as l,
  a as m,
  af as d,
  f as p
} from "./DiQ4YSNT.js";
const u = {
    class: "kit-skeleton-image"
  },
  f = ["src", "alt"],
  g = r({
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
          s = n("img-loader");
        return c(), _("div", u, [i(o, {
          class: "skeleton"
        }), l(m("img", d({
          src: e.url,
          alt: e.alt
        }, t.$attrs), null, 16, f), [
          [s]
        ])])
      }
    }
  }),
  x = p(g, [
    ["__scopeId", "data-v-d210e64a"]
  ]);
export {
  x as _
};