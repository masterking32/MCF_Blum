import {
  d,
  o as m,
  c as b,
  a as n,
  t as i,
  b as r,
  D as u,
  e as o,
  A as l,
  n as v,
  _ as h,
  U as B,
  f as p,
  C as V,
  z as S,
  a9 as $,
  x as g,
  aa as k
} from "./Dy2of55E.js";
const C = {
    class: "tribe-item-see-all"
  },
  I = {
    class: "label"
  },
  x = {
    class: "see-all-label"
  },
  y = d({
    __name: "TribeItemSeeAll",
    props: {
      label: {
        type: String,
        required: !0
      },
      to: {
        type: String,
        default: void 0
      }
    },
    setup(a) {
      return (t, e) => {
        const s = h,
          _ = B;
        return m(), b("div", C, [n("div", I, i(a.label), 1), r(_, {
          class: v(["see-all", {
            "is-disabled": !a.to
          }]),
          to: a.to
        }, {
          default: u(() => [n("div", x, i(("t" in t ? t.t : o(l))("tribes.item.see_all")), 1), r(s, {
            name: "chevron-right",
            class: "see-all-icon"
          })]),
          _: 1
        }, 8, ["to", "class"])])
      }
    }
  }),
  T = p(y, [
    ["__scopeId", "data-v-c2f17806"]
  ]),
  z = {
    class: "pages-tribe-farm-faster-sheet"
  },
  N = {
    class: "title"
  },
  A = {
    class: "subtitle"
  },
  E = d({
    __name: "FarmFasterSheet",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(a) {
      const t = V(a, "modelValue");
      return (e, s) => {
        const _ = g,
          f = k;
        return m(), S(f, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = c => t.value = c)
        }, {
          default: u(() => [n("div", z, [n("div", N, i(("t" in e ? e.t : o(l))("tribes.farm_faster_sheet.title")), 1), n("div", A, i(("t" in e ? e.t : o(l))("tribes.farm_faster_sheet.subtitle")), 1), r(_, {
            label: ("t" in e ? e.t : o(l))("base.continue"),
            fill: "",
            size: o($).LARGE,
            onClick: s[0] || (s[0] = c => t.value = !1)
          }, null, 8, ["label", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  U = p(E, [
    ["__scopeId", "data-v-d3f75073"]
  ]);
export {
  T as _, U as a
};