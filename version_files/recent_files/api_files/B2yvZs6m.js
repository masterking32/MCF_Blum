import {
  d as g,
  av as h,
  aw as T,
  T as y,
  h as w,
  j as C,
  o,
  c as l,
  a as I,
  aL as v,
  e as p,
  F as f,
  q as $,
  n as V,
  t as M,
  f as x,
  y as _,
  b as k,
  D as S,
  b7 as B,
  ac as N,
  E as F
} from "./GkJ71AXb.js";
const K = ["onClick"],
  q = g({
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
      y(n, () => w().$webApp.HapticFeedback.impactOccurred("light"));
      const m = C(() => {
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
      }, [I("div", {
        class: "active-back",
        style: v(p(m))
      }, null, 4), (o(!0), l(f, null, $(t.tabs, s => (o(), l("button", {
        key: s.key,
        class: V(["tab reset", {
          "is-active": n.value === s.key
        }]),
        onClick: i => n.value = s.key
      }, M(s.label), 11, K))), 128))], 4))
    }
  }),
  z = x(q, [
    ["__scopeId", "data-v-8fb6ab30"]
  ]),
  A = {
    class: "kit-tabs-slider"
  },
  D = {
    key: 0,
    class: "slide"
  },
  E = g({
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
          }, [a.key === p(t) ? (o(), l("div", D, [N(e.$slots, a.key, {}, void 0, !0)])) : F("", !0)], 64))), 128))]),
          _: 3
        }, 8, ["name"])])
      }
    }
  }),
  j = x(E, [
    ["__scopeId", "data-v-70fffb18"]
  ]);
export {
  j as _
};