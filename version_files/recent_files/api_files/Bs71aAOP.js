import {
  d as m,
  an as d,
  az as _,
  ao as v,
  aF as p,
  T as f,
  o as a,
  c as n,
  F as k,
  q as h,
  n as C,
  a as i,
  f as V
} from "./FDgdEClw.js";
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
    setup(l) {
      _(o => ({
        b85b1658: o.count
      }));
      const e = v(l, "modelValue"),
        r = l,
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
      }), (o, u) => (a(), n("div", g, [(a(!0), n(k, null, h(o.count, (E, s) => (a(), n("div", {
        key: s,
        class: C(["item", {
          active: e.value > s,
          current: e.value === s
        }]),
        onClick: F => e.value = s
      }, u[0] || (u[0] = [i("div", {
        class: "line"
      }, [i("div", {
        class: "fill"
      })], -1)]), 10, T))), 128))]))
    }
  }),
  b = V(B, [
    ["__scopeId", "data-v-86094695"]
  ]);
export {
  b as _
};