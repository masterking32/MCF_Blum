import {
  d as i,
  K as c,
  T as r,
  o as p,
  c as _,
  w as l,
  bx as u,
  e as n,
  b as f,
  b4 as m,
  n as d,
  b5 as x,
  f as b
} from "./Cdrd5uYj.js";
const y = i({
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
  N = b(y, [
    ["__scopeId", "data-v-f6662c39"]
  ]);
export {
  N as _
};