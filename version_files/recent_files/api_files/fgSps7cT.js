import {
  d as o,
  aA as a,
  o as s,
  c as n,
  a as t,
  aq as l,
  n as d,
  f as r
} from "./aUn4L-is.js";
const c = {
    class: "content"
  },
  _ = o({
    __name: "Overlay",
    props: {
      noPadding: {
        type: Boolean,
        default: !1
      },
      noScroll: {
        type: Boolean,
        default: !1
      },
      zIndex: {
        default: 3
      }
    },
    setup(p) {
      return a(e => ({
        "03986ec0": e.zIndex
      })), (e, f) => (s(), n("div", {
        class: d(["kit-overlay", {
          "no-padding": e.noPadding,
          "no-scroll": e.noScroll
        }])
      }, [t("div", c, [l(e.$slots, "default", {}, void 0, !0)])], 2))
    }
  }),
  u = r(_, [
    ["__scopeId", "data-v-f634be20"]
  ]);
export {
  u as _
};