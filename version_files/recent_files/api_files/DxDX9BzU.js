import {
  d as g,
  ay as M,
  aI as _,
  az as y,
  j as c,
  a4 as V,
  V as w,
  o as f,
  c as h,
  a as d,
  aP as v,
  e as u,
  ag as z,
  G as S,
  w as b,
  ce as $,
  p as k,
  n as C,
  f as I
} from "./DmEY5NHF.js";
const P = {
    class: "overlays"
  },
  B = ["max"],
  N = g({
    __name: "Range",
    props: M({
      min: {},
      max: {},
      pointerSize: {
        default: 16
      },
      color: {
        default: "#fff"
      },
      scale: {},
      step: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(p) {
      _(s => ({
        "6b93b9a5": s.color,
        "320b7ca0": s.pointerSize
      }));
      const t = p,
        i = y(p, "modelValue"),
        a = c(() => {
          if (t.scale === "linear") {
            const s = [];
            for (let e = t.min; e <= t.max; e += t.step) s.push(e);
            return s
          } else if (t.scale === "log") {
            const s = [],
              e = Math.log10(t.min),
              o = Math.log10(t.max),
              n = Math.ceil(Math.log10(t.max / t.min) * 10 * 30);
            for (let l = 0; l <= n; l++) {
              const x = Math.pow(10, e + (o - e) * l / n);
              s.push(Math.round(x))
            }
            return [...new Set(s)]
          } else if (t.scale === "points") {
            const s = [];
            for (let e = t.min; e <= t.max; e++)(e <= 10 || e <= 100 && e % 2 === 0 || e <= 1e3 && e % 10 === 0 || e <= 1e4 && e % 100 === 0 || e % 1e3 === 0) && s.push(e);
            return s
          } else throw V("Invalid scale")
        });
      w(i, s => {
        const e = a.value.reduce((n, l) => Math.abs(l - s) < Math.abs(n - s) ? l : n, a.value[0]),
          o = a.value.indexOf(e);
        i.value = a.value[o]
      }, {
        immediate: !0
      });
      const r = c({
          get: () => a.value.indexOf(i.value),
          set: s => i.value = a.value[s]
        }),
        m = c(() => {
          const s = t.pointerSize,
            e = r.value / (a.value.length - 1),
            o = (1 - e) * s - s / 2;
          return `calc(${e*100}% + ${o}px)`
        });
      return (s, e) => (f(), h("div", {
        class: C(["kit-range", {
          "has-tooltip": s.$slots.tooltip
        }])
      }, [d("div", P, [d("div", {
        class: "filled",
        style: v({
          width: u(m)
        })
      }, null, 4), s.$slots.tooltip ? (f(), h("div", {
        key: 0,
        class: "tooltip",
        style: v({
          left: u(m)
        })
      }, [z(s.$slots, "tooltip", {}, void 0, !0)], 4)) : S("", !0)]), b(d("input", {
        "onUpdate:modelValue": e[0] || (e[0] = o => k(r) ? r.value = o : null),
        type: "range",
        min: 0,
        max: u(a).length - 1,
        step: 1
      }, null, 8, B), [
        [$, u(r)]
      ])], 2))
    }
  }),
  R = I(N, [
    ["__scopeId", "data-v-e6d2338a"]
  ]);
export {
  R as _
};