import {
  d as i,
  K as c,
  T as r,
  o as p,
  c as _,
  w as l,
  cQ as u,
  e as n,
  b as f,
  a$ as m,
  n as d,
  b0 as x,
  f as y
} from "./BFi5NhLo.js";
const v = i({
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
      return r(() => clearTimeout(a)), (S, T) => {
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
  N = y(v, [
    ["__scopeId", "data-v-f6662c39"]
  ]);
export {
  N as _
};