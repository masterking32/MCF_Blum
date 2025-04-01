import {
  d as y,
  bw as h,
  y as k,
  j as w,
  Q as g,
  w as W,
  o as n,
  c as l,
  a as o,
  ac as c,
  n as d,
  b as r,
  D as $,
  e as f,
  m as b,
  t as C,
  aL as M,
  E as T,
  ak as N,
  _ as B,
  f as L
} from "./DrkX69Hr.js";
const S = {
    class: "kit-tooltip"
  },
  V = y({
    __name: "Tooltip",
    props: {
      text: {
        default: void 0
      },
      textMinWidth: {
        default: void 0
      },
      textMaxWidth: {
        default: void 0
      },
      textAlignment: {
        default: "center"
      },
      fill: {
        type: Boolean,
        default: !1
      },
      nowrap: {
        type: Boolean,
        default: !1
      },
      alignment: {
        default: h.LEFT
      }
    },
    setup(p) {
      const e = p,
        s = k(!1),
        u = () => s.value = !s.value,
        i = () => s.value = !1,
        m = w(() => {
          const t = {};
          return t.textAlign = e.textAlignment, e.textMinWidth && (t.minWidth = `${e.textMinWidth}px`), e.textMaxWidth && (t.maxWidth = `${e.textMaxWidth}px`), e.nowrap && (t.whiteSpace = "nowrap"), t
        });
      return (t, a) => {
        const x = B,
          v = g("click-outside");
        return W((n(), l("div", S, [o("div", {
          class: d(["body", {
            "is-fill": t.fill
          }]),
          onClick: a[0] || (a[0] = _ => u())
        }, [c(t.$slots, "default", {}, void 0, !0)], 2), r(N, {
          name: "opacity-transition"
        }, {
          default: $(() => [f(s) ? (n(), l("div", {
            key: 0,
            class: d(["content", `is-${t.alignment.toLowerCase()}`])
          }, [o("div", {
            class: "text",
            style: M(f(m))
          }, [c(t.$slots, "inner", {}, () => [b(C(t.text), 1)], !0)], 4), o("button", {
            type: "button",
            class: "close-btn reset",
            onClick: a[1] || (a[1] = _ => i())
          }, [r(x, {
            name: "close-sm",
            class: "icon"
          })])], 2)) : T("", !0)]),
          _: 3
        })])), [
          [v, i]
        ])
      }
    }
  }),
  D = L(V, [
    ["__scopeId", "data-v-919068ec"]
  ]);
export {
  D as _
};