import {
  d as i,
  r as c,
  o as r,
  a as p,
  c as _,
  w as l,
  v as u,
  e as n,
  k as m,
  a4 as d,
  n as f,
  a7 as x,
  j as v
} from "./B8dH5Zvz.js";
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
      const a = e,
        t = c(!1),
        s = setTimeout(() => t.value = !0, a.delay);
      return r(() => clearTimeout(s)), (S, k) => {
        const o = x;
        return p(), _("div", {
          class: f(["kit-page-spinner", {
            "is-fixed": e.fixed
          }])
        }, [l(m(o, {
          size: 64,
          type: n(d).LIGHT
        }, null, 8, ["type"]), [
          [u, n(t)]
        ])], 2)
      }
    }
  }),
  T = v(y, [
    ["__scopeId", "data-v-f6662c39"]
  ]);
export {
  T as _
};