import {
  d as g,
  V as M,
  au as _,
  W as V,
  j as c,
  a8 as w,
  Z as y,
  o as f,
  c as h,
  a as d,
  aB as v,
  e as r,
  ak as S,
  G as b,
  w as z,
  c6 as k,
  p as $,
  n as B,
  f as C
} from "./B3wbv-Ae.js";
const I = {
    class: "overlays"
  },
  P = ["max"],
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
        i = V(p, "modelValue"),
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
          } else throw w("Invalid scale")
        });
      y(i, s => {
        const e = a.value.reduce((n, l) => Math.abs(l - s) < Math.abs(n - s) ? l : n, a.value[0]),
          o = a.value.indexOf(e);
        i.value = a.value[o]
      }, {
        immediate: !0
      });
      const u = c({
          get: () => a.value.indexOf(i.value),
          set: s => i.value = a.value[s]
        }),
        m = c(() => {
          const s = t.pointerSize,
            e = u.value / (a.value.length - 1),
            o = (1 - e) * s - s / 2;
          return `calc(${e*100}% + ${o}px)`
        });
      return (s, e) => (f(), h("div", {
        class: B(["kit-range", {
          "has-tooltip": s.$slots.tooltip
        }])
      }, [d("div", I, [d("div", {
        class: "filled",
        style: v({
          width: r(m)
        })
      }, null, 4), s.$slots.tooltip ? (f(), h("div", {
        key: 0,
        class: "tooltip",
        style: v({
          left: r(m)
        })
      }, [S(s.$slots, "tooltip", {}, void 0, !0)], 4)) : b("", !0)]), z(d("input", {
        "onUpdate:modelValue": e[0] || (e[0] = o => $(u) ? u.value = o : null),
        type: "range",
        min: 0,
        max: r(a).length - 1,
        step: 1
      }, null, 8, P), [
        [k, r(u)]
      ])], 2))
    }
  }),
  R = C(N, [
    ["__scopeId", "data-v-e6d2338a"]
  ]);
export {
  R as _
};