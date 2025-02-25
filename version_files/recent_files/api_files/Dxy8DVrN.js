import {
  d as a,
  o,
  c as r,
  b as c,
  a as n,
  t,
  _,
  f as p
} from "./HMtIIKN9.js";
const i = {
    class: "kit-error-message"
  },
  m = {
    class: "label"
  },
  l = a({
    __name: "ErrorMessage",
    props: {
      errorMessage: {}
    },
    setup(d) {
      return (e, f) => {
        const s = _;
        return o(), r("div", i, [c(s, {
          name: "circle-warning",
          class: "icon"
        }), n("span", m, t(e.errorMessage), 1)])
      }
    }
  }),
  u = p(l, [
    ["__scopeId", "data-v-f0c128af"]
  ]);
export {
  u as _
};