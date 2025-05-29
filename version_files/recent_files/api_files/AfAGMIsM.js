import {
  d as m,
  a4 as d,
  aA as _,
  A as v,
  J as p,
  af as f,
  o as a,
  c as l,
  F as k,
  q as h,
  n as C,
  a as i,
  f as V
} from "./OTci2SnY.js";
const g = {
    class: "kit-progress-lines"
  },
  A = ["onClick"],
  B = m({
    __name: "ProgressLines",
    props: d({
      count: {},
      timer: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(n) {
      _(o => ({
        b85b1658: o.count
      }));
      const e = v(n, "modelValue"),
        r = n,
        t = [],
        c = () => {
          t.push(setTimeout(() => {
            e.value === r.count - 1 ? e.value = 0 : e.value = e.value + 1
          }, r.timer))
        };
      return p(e, () => {
        t.forEach(clearTimeout), c()
      }, {
        immediate: !0
      }), f(() => {
        t.forEach(clearTimeout)
      }), (o, u) => (a(), l("div", g, [(a(!0), l(k, null, h(o.count, (E, s) => (a(), l("div", {
        key: s,
        class: C(["item", {
          active: e.value > s,
          current: e.value === s
        }]),
        onClick: M => e.value = s
      }, u[0] || (u[0] = [i("div", {
        class: "line"
      }, [i("div", {
        class: "fill"
      })], -1)]), 10, A))), 128))]))
    }
  }),
  b = V(B, [
    ["__scopeId", "data-v-86094695"]
  ]);
export {
  b as _
};