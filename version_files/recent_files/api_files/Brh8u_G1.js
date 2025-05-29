import {
  d as g,
  a4 as h,
  A as T,
  J as y,
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
  I as _,
  b as k,
  C as S,
  bc as B,
  aq as N,
  E as q
} from "./OTci2SnY.js";
const A = ["onClick"],
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
      }, M(s.label), 11, A))), 128))], 4))
    }
  }),
  K = x(F, [
    ["__scopeId", "data-v-8fb6ab30"]
  ]),
  z = {
    class: "kit-tabs-slider"
  },
  E = {
    key: 0,
    class: "slide"
  },
  H = g({
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
        const b = K;
        return o(), l("div", z, [k(b, {
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
          }, [a.key === p(t) ? (o(), l("div", E, [N(e.$slots, a.key, {}, void 0, !0)])) : q("", !0)], 64))), 128))]),
          _: 3
        }, 8, ["name"])])
      }
    }
  }),
  D = x(H, [
    ["__scopeId", "data-v-70fffb18"]
  ]);
export {
  D as _
};