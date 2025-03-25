import {
  d as m,
  an as d,
  as as _,
  ao as v,
  aM as p,
  T as f,
  o as a,
  c as n,
  F as k,
  q as h,
  n as C,
  a as i,
  f as V
} from "./CcLbrFeo.js";
const g = {
    class: "kit-progress-lines"
  },
  M = ["onClick"],
  T = m({
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
      }), (o, u) => (a(), n("div", g, [(a(!0), n(k, null, h(o.count, (B, s) => (a(), n("div", {
        key: s,
        class: C(["item", {
          active: e.value > s,
          current: e.value === s
        }]),
        onClick: E => e.value = s
      }, u[0] || (u[0] = [i("div", {
        class: "line"
      }, [i("div", {
        class: "fill"
      })], -1)]), 10, M))), 128))]))
    }
  }),
  q = V(T, [
    ["__scopeId", "data-v-86094695"]
  ]);
export {
  q as _
};