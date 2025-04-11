import {
  d as m,
  aw as d,
  aG as _,
  ax as v,
  U as p,
  a2 as f,
  o,
  c as l,
  F as k,
  q as h,
  n as C,
  a as i,
  f as V
} from "./C6ycOBuK.js";
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
      _(a => ({
        b85b1658: a.count
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
      }), (a, u) => (o(), l("div", g, [(o(!0), l(k, null, h(a.count, (M, s) => (o(), l("div", {
        key: s,
        class: C(["item", {
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
  q = V(E, [
    ["__scopeId", "data-v-86094695"]
  ]);
export {
  q as _
};