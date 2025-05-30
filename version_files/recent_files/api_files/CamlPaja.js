import {
  d as g,
  a4 as h,
  C as T,
  K as y,
  h as C,
  j as I,
  o,
  c as l,
  a as V,
  aH as v,
  e as p,
  F as f,
  q as $,
  n as w,
  t as M,
  f as x,
  J as _,
  b as k,
  D as S,
  ba as B,
  aq as K,
  G as N
} from "./jPANuN8i.js";
const q = ["onClick"],
  F = g({
    __name: "KitTabsToggle",
    props: h({
      tabs: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(c) {
      const u = c,
        n = T(c, "modelValue");
      y(n, () => C().$webApp.HapticFeedback.impactOccurred("light"));
      const m = I(() => {
        const d = u.tabs.length,
          s = 0,
          i = u.tabs.findIndex(r => r.key === n.value),
          e = `(100% - ${2*2}px - ${d-1} * ${s}px) / ${d}`;
        return {
          width: `calc(${e})`,
          left: `calc(${e} * ${i} + 2px + ${s*i}px)`
        }
      });
      return (t, d) => (o(), l("div", {
        class: "kit-tabs-toggle",
        style: v({
          gridTemplateColumns: `repeat(${t.tabs.length}, 1fr)`
        })
      }, [V("div", {
        class: "active-back",
        style: v(p(m))
      }, null, 4), (o(!0), l(f, null, $(t.tabs, s => (o(), l("button", {
        key: s.key,
        class: w(["tab reset", {
          "is-active": n.value === s.key
        }]),
        onClick: i => n.value = s.key
      }, M(s.label), 11, q))), 128))], 4))
    }
  }),
  z = x(F, [
    ["__scopeId", "data-v-8fb6ab30"]
  ]),
  A = {
    class: "kit-tabs-slider"
  },
  D = {
    key: 0,
    class: "slide"
  },
  G = g({
    __name: "KitTabsSlider",
    props: {
      tabs: {}
    },
    emits: ["update"],
    setup(c, {
      emit: u
    }) {
      const n = c,
        m = u,
        t = _(n.tabs[0].key),
        d = _("left"),
        s = _(),
        i = e => {
          if (e === t.value) return;
          const r = n.tabs.findIndex(a => a.key === t.value),
            b = n.tabs.findIndex(a => a.key === e);
          d.value = r < b ? "right" : "left", s.value && (s.value.scrollTop = 0), t.value = e
        };
      return y(t, e => m("update", e)), (e, r) => {
        const b = z;
        return o(), l("div", A, [k(b, {
          "model-value": p(t),
          tabs: e.tabs,
          "onUpdate:modelValue": r[0] || (r[0] = a => i(a))
        }, null, 8, ["model-value", "tabs"]), k(B, {
          tag: "div",
          class: "slider-wrapper",
          name: `slider-transition-from-${p(d)}`
        }, {
          default: S(() => [(o(!0), l(f, null, $(e.tabs, a => (o(), l(f, {
            key: a.key
          }, [a.key === p(t) ? (o(), l("div", D, [K(e.$slots, a.key, {}, void 0, !0)])) : N("", !0)], 64))), 128))]),
          _: 3
        }, 8, ["name"])])
      }
    }
  }),
  j = x(G, [
    ["__scopeId", "data-v-70fffb18"]
  ]);
export {
  j as _
};