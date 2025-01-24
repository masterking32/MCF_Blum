import {
  d as o,
  o as n,
  c as s,
  n as a,
  f as r
} from "./BKd9vpCm.js";
const t = o({
    __name: "Skeleton",
    props: {
      rounded: {
        type: Boolean
      },
      secondary: {
        type: Boolean
      }
    },
    setup(c) {
      return (e, _) => (n(), s("div", {
        class: a(["kit-skeleton", {
          "is-rounded": e.rounded,
          "is-secondary": e.secondary
        }])
      }, null, 2))
    }
  }),
  p = r(t, [
    ["__scopeId", "data-v-0e7a3e93"]
  ]);
export {
  p as _
};