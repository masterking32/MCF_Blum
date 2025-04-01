import {
  d as m,
  av as d,
  aA as v,
  aw as _,
  T as p,
  a1 as f,
  o,
  c as l,
  F as k,
  q as h,
  n as C,
  a as i,
  f as V
} from "./DrkX69Hr.js";
const g = {
    class: "kit-progress-lines"
  },
  T = ["onClick"],
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
      v(a => ({
        b85b1658: a.count
      }));
      const e = _(n, "modelValue"),
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
      }), (a, u) => (o(), l("div", g, [(o(!0), l(k, null, h(a.count, (E, s) => (o(), l("div", {
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
      })], -1)]), 10, T))), 128))]))
    }
  }),
  q = V(B, [
    ["__scopeId", "data-v-86094695"]
  ]);
export {
  q as _
};