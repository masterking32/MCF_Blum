import {
  d as o,
  o as a,
  c as r,
  b as n,
  a as t,
  t as c,
  _,
  f as p
} from "./DrQ2shF8.js";
const i = {
    class: "kit-error-message"
  },
  m = {
    class: "label"
  },
  d = o({
    __name: "ErrorMessage",
    props: {
      errorMessage: {}
    },
    setup(l) {
      return (e, f) => {
        const s = _;
        return a(), r("div", i, [n(s, {
          name: "circle-warning",
          class: "icon"
        }), t("span", m, c(e.errorMessage), 1)])
      }
    }
  }),
  u = p(d, [
    ["__scopeId", "data-v-f9832edf"]
  ]);
export {
  u as _
};