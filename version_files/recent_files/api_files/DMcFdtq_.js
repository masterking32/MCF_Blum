import {
  _ as n
} from "./BaCsvouh.js";
import {
  d as a,
  o as e,
  c as o,
  b as r,
  a as d,
  t as _,
  bj as c,
  D as l,
  f as i
} from "./BKd9vpCm.js";
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
      return (t, f) => {
        const s = n;
        return e(), o("div", m, [r(s, {
          jetton: t.jetton,
          "jetton-modal-controls": t.jettonModalControls
        }, null, 8, ["jetton", "jetton-modal-controls"]), d("div", p, _(t.title), 1), t.$slots.right ? (e(), o("div", h, [c(t.$slots, "right", {}, void 0, !0)])) : l("", !0)])
      }
    }
  }),
  k = i(j, [
    ["__scopeId", "data-v-0d193a81"]
  ]);
export {
  k as _
};