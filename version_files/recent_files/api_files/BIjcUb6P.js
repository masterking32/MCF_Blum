import {
  d as e,
  o as n,
  c as a,
  a as s,
  aq as t,
  n as r,
  f as l
} from "./YXPW7IJg.js";
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
      return (o, p) => (n(), a("div", {
        class: r(["kit-overlay", {
          "no-padding": o.noPadding,
          "no-scroll": o.noScroll
        }])
      }, [s("div", c, [t(o.$slots, "default", {}, void 0, !0)])], 2))
    }
  }),
  m = l(d, [
    ["__scopeId", "data-v-02e98c02"]
  ]);
export {
  m as _
};