import {
  d as y,
  bx as h,
  I as b,
  j as g,
  a2 as k,
  w,
  o as n,
  c as l,
  a as o,
  aq as d,
  n as r,
  b as c,
  C,
  e as f,
  m as W,
  t as $,
  aH as M,
  E as T,
  av as N,
  _ as B,
  f as I
} from "./OTci2SnY.js";
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
        s = b(!1),
        u = () => s.value = !s.value,
        i = () => s.value = !1,
        m = g(() => {
          const t = {};
          return t.textAlign = e.textAlignment, e.textMinWidth && (t.minWidth = `${e.textMinWidth}px`), e.textMaxWidth && (t.maxWidth = `${e.textMaxWidth}px`), e.nowrap && (t.whiteSpace = "nowrap"), t
        });
      return (t, a) => {
        const x = B,
          v = k("click-outside");
        return w((n(), l("div", S, [o("div", {
          class: r(["body", {
            "is-fill": t.fill
          }]),
          onClick: a[0] || (a[0] = _ => u())
        }, [d(t.$slots, "default", {}, void 0, !0)], 2), c(N, {
          name: "opacity-transition"
        }, {
          default: C(() => [f(s) ? (n(), l("div", {
            key: 0,
            class: r(["content", `is-${t.alignment.toLowerCase()}`])
          }, [o("div", {
            class: "text",
            style: M(f(m))
          }, [d(t.$slots, "inner", {}, () => [W($(t.text), 1)], !0)], 4), o("button", {
            type: "button",
            class: "close-btn reset",
            onClick: a[1] || (a[1] = _ => i())
          }, [c(x, {
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
  E = I(V, [
    ["__scopeId", "data-v-6171ebfe"]
  ]);
export {
  E as _
};