import {
  d as f,
  an as y,
  ao as $,
  aM as x,
  h,
  j as T,
  o as n,
  c as o,
  a as C,
  aF as _,
  e as p,
  F as b,
  q as k,
  n as I,
  t as V,
  f as g,
  K as m,
  b as v,
  H as w,
  br as M,
  D as S,
  b2 as B
} from "./CCUb6gF6.js";
const F = ["onClick"],
  K = f({
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
          d = `(100% - ${2*2}px - ${c-1} * ${e}px) / ${c}`;
        return {
          width: `calc(${d})`,
          left: `calc(${d} * ${a} + 2px + ${e*a}px)`
        }
      });
      return (r, c) => (n(), o("div", {
        class: "kit-tabs-toggle",
        style: _({
          gridTemplateColumns: `repeat(${r.tabs.length}, 1fr)`
        })
      }, [C("div", {
        class: "active-back",
        style: _(p(u))
      }, null, 4), (n(!0), o(b, null, k(r.tabs, e => (n(), o("button", {
        key: e.key,
        class: I(["tab reset", {
          "is-active": s.value === e.key
        }]),
        onClick: a => s.value = e.key
      }, V(e.label), 11, F))), 128))], 4))
    }
  }),
  N = g(K, [
    ["__scopeId", "data-v-8fb6ab30"]
  ]),
  q = {
    class: "kit-tabs-slider"
  },
  z = {
    key: 0,
    class: "slide"
  },
  A = f({
    __name: "KitTabsSlider",
    props: {
      tabs: {}
    },
    setup(i) {
      const l = i,
        s = m(l.tabs[0].key),
        u = m("left"),
        r = m(),
        c = e => {
          if (e === s.value) return;
          const a = l.tabs.findIndex(t => t.key === s.value),
            d = l.tabs.findIndex(t => t.key === e);
          u.value = a < d ? "right" : "left", r.value && (r.value.scrollTop = 0), s.value = e
        };
      return (e, a) => {
        const d = N;
        return n(), o("div", q, [v(d, {
          "model-value": p(s),
          tabs: e.tabs,
          "onUpdate:modelValue": a[0] || (a[0] = t => c(t))
        }, null, 8, ["model-value", "tabs"]), v(B, {
          tag: "div",
          class: "slider-wrapper",
          name: `slider-transition-from-${p(u)}`
        }, {
          default: w(() => [(n(!0), o(b, null, k(e.tabs, t => (n(), o(b, {
            key: t.key
          }, [t.key === p(s) ? (n(), o("div", z, [M(e.$slots, t.key, {}, void 0, !0)])) : S("", !0)], 64))), 128))]),
          _: 3
        }, 8, ["name"])])
      }
    }
  }),
  H = g(A, [
    ["__scopeId", "data-v-84da8c16"]
  ]);
export {
  H as _
};