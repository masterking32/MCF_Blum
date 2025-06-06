import {
  d as l,
  C as s,
  w as c,
  c7 as n,
  o as d,
  c as u,
  f as p
} from "./aUn4L-is.js";
const r = l({
    __name: "CheckboxLegal",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(a) {
      const e = s(a, "modelValue");
      return (m, o) => c((d(), u("input", {
        "onUpdate:modelValue": o[0] || (o[0] = t => e.value = t),
        type: "checkbox",
        class: "checkbox-legal"
      }, null, 512)), [
        [n, e.value]
      ])
    }
  }),
  i = p(r, [
    ["__scopeId", "data-v-f5d0d034"]
  ]);
export {
  i as _
};