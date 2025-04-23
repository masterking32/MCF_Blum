import {
  d as o,
  aO as n,
  o as s,
  c as a,
  n as t,
  f as r
} from "./CpSYFFfr.js";
const d = o({
    __name: "Skeleton",
    props: {
      type: {
        default: () => n.PRIMARY
      },
      gradient: {
        type: Boolean
      },
      rounded: {
        type: Boolean
      },
      solid: {
        type: Boolean
      }
    },
    setup(l) {
      return (e, p) => (s(), a("div", {
        class: t(["kit-skeleton", [`is-${e.type.toLowerCase()}`, {
          "is-gradient": e.gradient,
          "is-rounded": e.rounded,
          "is-solid": e.solid
        }]])
      }, null, 2))
    }
  }),
  _ = r(d, [
    ["__scopeId", "data-v-c2146257"]
  ]);
export {
  _
};