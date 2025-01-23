import {
  d as f,
  ao as y,
  ap as $,
  P as x,
  h,
  j as T,
  o as n,
  c as o,
  a as w,
  aw as b,
  e as p,
  F as _,
  q as k,
  n as C,
  t as I,
  f as g,
  K as m,
  b as v,
  H as V,
  bj as M,
  D as S,
  aT as B
} from "./1IBRWEJd.js";
const K = ["onClick"],
  N = f({
    __name: "KitTabsToggle",
    props: y({
      tabs: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(i) {
      const l = i,
        s = $(i, "modelValue");
      x(s, () => h().$webApp.HapticFeedback.impactOccurred("light"));
      const u = T(() => {
        const c = l.tabs.length,
          e = 0,
          a = l.tabs.findIndex(t => t.key === s.value),
          r = `(100% - ${2*2}px - ${c-1} * ${e}px) / ${c}`;
        return {
          width: `calc(${r})`,
          left: `calc(${r} * ${a} + 2px + ${e*a}px)`
        }
      });
      return (d, c) => (n(), o("div", {
        class: "kit-tabs-toggle",
        style: b({
          gridTemplateColumns: `repeat(${d.tabs.length}, 1fr)`
        })
      }, [w("div", {
        class: "active-back",
        style: b(p(u))
      }, null, 4), (n(!0), o(_, null, k(d.tabs, e => (n(), o("button", {
        key: e.key,
        class: C(["tab reset", {
          "is-active": s.value === e.key
        }]),
        onClick: a => s.value = e.key
      }, I(e.label), 11, K))), 128))], 4))
    }
  }),
  F = g(N, [
    ["__scopeId", "data-v-8fb6ab30"]
  ]),
  j = {
    class: "kit-tabs-slider"
  },
  q = {
    key: 0,
    class: "slide"
  },
  z = f({
    __name: "KitTabsSlider",
    props: {
      tabs: {}
    },
    setup(i) {
      const l = i,
        s = m(l.tabs[0].key),
        u = m("left"),
        d = m(),
        c = e => {
          if (e === s.value) return;
          const a = l.tabs.findIndex(t => t.key === s.value),
            r = l.tabs.findIndex(t => t.key === e);
          u.value = a < r ? "right" : "left", d.value && (d.value.scrollTop = 0), s.value = e
        };
      return (e, a) => {
        const r = F;
        return n(), o("div", j, [v(r, {
          "model-value": p(s),
          tabs: e.tabs,
          "onUpdate:modelValue": a[0] || (a[0] = t => c(t))
        }, null, 8, ["model-value", "tabs"]), v(B, {
          tag: "div",
          class: "slider-wrapper",
          name: `slider-transition-from-${p(u)}`
        }, {
          default: V(() => [(n(!0), o(_, null, k(e.tabs, t => (n(), o(_, {
            key: t.key
          }, [t.key === p(s) ? (n(), o("div", q, [M(e.$slots, t.key, {}, void 0, !0)])) : S("", !0)], 64))), 128))]),
          _: 3
        }, 8, ["name"])])
      }
    }
  }),
  D = g(z, [
    ["__scopeId", "data-v-84da8c16"]
  ]);
export {
  D as _
};