import {
  d as i,
  y as c,
  a1 as r,
  o as p,
  c as _,
  w as l,
  bA as u,
  e as n,
  b as f,
  b9 as m,
  n as d,
  ba as x,
  f as y
} from "./BhDmcp0J.js";
const b = i({
    __name: "KitPageSpinner",
    props: {
      delay: {
        type: Number,
        default: 120
      },
      fixed: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      const s = e,
        t = c(!1),
        a = setTimeout(() => t.value = !0, s.delay);
      return r(() => clearTimeout(a)), (v, S) => {
        const o = x;
        return p(), _("div", {
          class: d(["kit-page-spinner", {
            "is-fixed": e.fixed
          }])
        }, [l(f(o, {
          size: 64,
          type: n(m).LIGHT
        }, null, 8, ["type"]), [
          [u, n(t)]
        ])], 2)
      }
    }
  }),
  T = y(b, [
    ["__scopeId", "data-v-f6662c39"]
  ]);
export {
  T as _
};