import {
  d,
  o as m,
  c as b,
  a as n,
  t as i,
  b as r,
  H as u,
  e as o,
  z as l,
  n as v,
  _ as h,
  I as B,
  f as p,
  ao as V,
  G as S,
  U as $,
  x as I,
  aN as g
} from "./D7slzxTT.js";
const k = {
    class: "tribe-item-see-all"
  },
  N = {
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
        return m(), b("div", k, [n("div", N, i(a.label), 1), r(_, {
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
  U = p(y, [
    ["__scopeId", "data-v-c2f17806"]
  ]),
  z = {
    class: "pages-tribe-farm-faster-sheet"
  },
  C = {
    class: "title"
  },
  E = {
    class: "subtitle"
  },
  K = d({
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
        const _ = I,
          f = g;
        return m(), S(f, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = c => t.value = c)
        }, {
          default: u(() => [n("div", z, [n("div", C, i(("t" in e ? e.t : o(l))("tribes.farm_faster_sheet.title")), 1), n("div", E, i(("t" in e ? e.t : o(l))("tribes.farm_faster_sheet.subtitle")), 1), r(_, {
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
  q = p(K, [
    ["__scopeId", "data-v-d3f75073"]
  ]);
export {
  U as _, q as a
};