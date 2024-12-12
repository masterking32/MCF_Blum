import {
  d as a,
  a as o,
  c as r,
  k as n,
  b as t,
  t as c,
  N as _,
  j as p
} from "./DY2exbLM.js";
const i = {
    class: "kit-error-message"
  },
  m = {
    class: "label"
  },
  d = a({
    __name: "ErrorMessage",
    props: {
      errorMessage: {}
    },
    setup(l) {
      return (e, f) => {
        const s = _;
        return o(), r("div", i, [n(s, {
          name: "circle-warning",
          class: "icon"
        }), t("span", m, c(e.errorMessage), 1)])
      }
    }
  }),
  k = p(d, [
    ["__scopeId", "data-v-f9832edf"]
  ]);
export {
  k as _
};