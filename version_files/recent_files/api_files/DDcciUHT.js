import {
  d as e,
  o as a,
  c as n,
  a as s,
  bm as t,
  n as r,
  f as l
} from "./DRqvt5pl.js";
const c = {
    class: "content"
  },
  d = e({
    __name: "Overlay",
    props: {
      noPadding: {
        type: Boolean
      },
      noScroll: {
        type: Boolean
      }
    },
    setup(_) {
      return (o, p) => (a(), n("div", {
        class: r(["kit-overlay", {
          "no-padding": o.noPadding,
          "no-scroll": o.noScroll
        }])
      }, [s("div", c, [t(o.$slots, "default", {}, void 0, !0)])], 2))
    }
  }),
  m = l(d, [
    ["__scopeId", "data-v-c1da34ab"]
  ]);
export {
  m as _
};