import {
  _ as a
} from "./DYXdKfs2.js";
import {
  d as n,
  o as t,
  c as o,
  b as r,
  a as _,
  t as c,
  aj as d,
  G as i,
  f as p
} from "./CeLf80nu.js";
const m = {
    class: "memepad-jetton-header-short"
  },
  l = {
    class: "ticker"
  },
  h = {
    key: 0,
    class: "right"
  },
  u = n({
    __name: "HeaderShort",
    props: {
      jetton: {},
      title: {}
    },
    setup(f) {
      return (e, g) => {
        const s = a;
        return t(), o("div", m, [r(s, {
          jetton: e.jetton
        }, null, 8, ["jetton"]), _("div", l, c(e.title), 1), e.$slots.right ? (t(), o("div", h, [d(e.$slots, "right", {}, void 0, !0)])) : i("", !0)])
      }
    }
  }),
  k = p(u, [
    ["__scopeId", "data-v-9110b4a6"]
  ]);
export {
  k as _
};