import {
  d as i,
  y as c,
  a3 as r,
  o as p,
  c as _,
  w as l,
  bF as u,
  e as n,
  b as f,
  b1 as m,
  n as d,
  b2 as x,
  f as y
} from "./BZz9wj6Z.js";
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