import {
  d as e,
  o as n,
  c as a,
  a as s,
  bl as t,
  n as l,
  f as r
} from "./7B743EeA.js";
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
        class: l(["kit-overlay", {
          "no-padding": o.noPadding,
          "no-scroll": o.noScroll
        }])
      }, [s("div", c, [t(o.$slots, "default", {}, void 0, !0)])], 2))
    }
  }),
  m = r(d, [
    ["__scopeId", "data-v-9cbd13c8"]
  ]);
export {
  m as _
};