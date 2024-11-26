import {
  d as n,
  a as o,
  c as s,
  n as t,
  j as a
} from "./Brvr1E7g.js";
const c = n({
    __name: "Skeleton",
    props: {
      rounded: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      return (_, r) => (o(), s("div", {
        class: t(["kit-skeleton", {
          "is-rounded": e.rounded
        }])
      }, null, 2))
    }
  }),
  d = a(c, [
    ["__scopeId", "data-v-20511fcb"]
  ]);
export {
  d as _
};