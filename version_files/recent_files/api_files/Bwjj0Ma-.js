import {
  d as m,
  V as d,
  au as _,
  W as v,
  Z as p,
  a7 as f,
  o as a,
  c as l,
  F as k,
  q as V,
  n as h,
  a as i,
  f as C
} from "./BN1oUHf5.js";
const g = {
    class: "kit-progress-lines"
  },
  B = ["onClick"],
  E = m({
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
      }), (o, u) => (a(), l("div", g, [(a(!0), l(k, null, V(o.count, (M, s) => (a(), l("div", {
        key: s,
        class: h(["item", {
          active: e.value > s,
          current: e.value === s
        }]),
        onClick: T => e.value = s
      }, u[0] || (u[0] = [i("div", {
        class: "line"
      }, [i("div", {
        class: "fill"
      })], -1)]), 10, B))), 128))]))
    }
  }),
  q = C(E, [
    ["__scopeId", "data-v-86094695"]
  ]);
export {
  q as _
};