import {
  d as i,
  y as c,
  a7 as r,
  o as p,
  c as _,
  w as l,
  bw as u,
  e as n,
  b as f,
  aQ as m,
  n as d,
  aR as x,
  f as y
} from "./CeLf80nu.js";
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
      const a = e,
        t = c(!1),
        s = setTimeout(() => t.value = !0, a.delay);
      return r(() => clearTimeout(s)), (S, b) => {
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