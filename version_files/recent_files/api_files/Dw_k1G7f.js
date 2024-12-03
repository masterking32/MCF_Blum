import {
  d,
  a as m,
  c as b,
  b as n,
  t as i,
  k as r,
  x as u,
  e as o,
  f as l,
  n as v,
  N as h,
  aJ as B,
  j as p,
  aA as V,
  m as $,
  B as S,
  C as k,
  aU as g
} from "./Cu_rX_ev.js";
const C = {
    class: "tribe-item-see-all"
  },
  I = {
    class: "label"
  },
  N = {
    class: "see-all-label"
  },
  x = d({
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
          default: u(() => [n("div", N, i(("t" in t ? t.t : o(l))("tribes.item.see_all")), 1), r(s, {
            name: "chevron-right",
            class: "see-all-icon"
          })]),
          _: 1
        }, 8, ["to", "class"])])
      }
    }
  }),
  T = p(x, [
    ["__scopeId", "data-v-c2f17806"]
  ]),
  y = {
    class: "pages-tribe-farm-faster-sheet"
  },
  z = {
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
        const _ = k,
          f = g;
        return m(), $(f, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = c => t.value = c)
        }, {
          default: u(() => [n("div", y, [n("div", z, i(("t" in e ? e.t : o(l))("tribes.farm_faster_sheet.title")), 1), n("div", A, i(("t" in e ? e.t : o(l))("tribes.farm_faster_sheet.subtitle")), 1), r(_, {
            label: ("t" in e ? e.t : o(l))("base.continue"),
            fill: "",
            size: o(S).LARGE,
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