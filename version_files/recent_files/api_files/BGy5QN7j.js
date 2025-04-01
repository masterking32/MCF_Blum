import {
  _ as a
} from "./Bcs8pI2Y.js";
import {
  d as n,
  o as t,
  c as o,
  b as r,
  a as _,
  t as c,
  ac as d,
  E as i,
  f as p
} from "./DrkX69Hr.js";
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
  f = n({
    __name: "HeaderShort",
    props: {
      jetton: {},
      title: {}
    },
    setup(u) {
      return (e, g) => {
        const s = a;
        return t(), o("div", m, [r(s, {
          jetton: e.jetton
        }, null, 8, ["jetton"]), _("div", l, c(e.title), 1), e.$slots.right ? (t(), o("div", h, [d(e.$slots, "right", {}, void 0, !0)])) : i("", !0)])
      }
    }
  }),
  k = p(f, [
    ["__scopeId", "data-v-f1c49f3d"]
  ]);
export {
  k as _
};