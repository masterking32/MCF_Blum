import {
  _ as n
} from "./Dsytx_RB.js";
import {
  d as a,
  a as e,
  c as o,
  k as r,
  b as d,
  t as _,
  aC as c,
  g as l,
  j as i
} from "./4q655kMI.js";
const m = {
    class: "memepad-jetton-header-short"
  },
  p = {
    class: "ticker"
  },
  h = {
    key: 0,
    class: "right"
  },
  j = a({
    __name: "HeaderShort",
    props: {
      jetton: {},
      jettonModalControls: {},
      title: {}
    },
    setup(u) {
      return (t, g) => {
        const s = n;
        return e(), o("div", m, [r(s, {
          jetton: t.jetton,
          "jetton-modal-controls": t.jettonModalControls
        }, null, 8, ["jetton", "jetton-modal-controls"]), d("div", p, _(t.title), 1), t.$slots.right ? (e(), o("div", h, [c(t.$slots, "right", {}, void 0, !0)])) : l("", !0)])
      }
    }
  }),
  v = i(j, [
    ["__scopeId", "data-v-04d40c3d"]
  ]);
export {
  v as _
};