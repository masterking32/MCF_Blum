import {
  _ as s
} from "./DYMhC8NL.js";
import {
  d as r,
  a8 as n,
  a as c,
  c as _,
  k as i,
  w as l,
  b as m,
  ap as d,
  j as p
} from "./yAg4xOB2.js";
const u = {
    class: "kit-skeleton-image"
  },
  g = ["src", "alt"],
  k = r({
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
      return (t, v) => {
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
  x = p(k, [
    ["__scopeId", "data-v-d210e64a"]
  ]);
export {
  x as _
};