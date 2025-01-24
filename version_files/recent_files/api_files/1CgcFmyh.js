import {
  d as e,
  o as n,
  c as a,
  a as s,
  bj as t,
  n as r,
  f as c
} from "./BKd9vpCm.js";
const l = {
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
      return (o, p) => (n(), a("div", {
        class: r(["kit-overlay", {
          "no-padding": o.noPadding,
          "no-scroll": o.noScroll
        }])
      }, [s("div", l, [t(o.$slots, "default", {}, void 0, !0)])], 2))
    }
  }),
  m = c(d, [
    ["__scopeId", "data-v-9cbd13c8"]
  ]);
export {
  m as _
};