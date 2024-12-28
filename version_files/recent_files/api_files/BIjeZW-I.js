import {
  d as y,
  bg as h,
  L as g,
  j as b,
  O as k,
  w,
  o as n,
  c as l,
  a as o,
  bm as d,
  n as c,
  b as r,
  I as C,
  e as f,
  m as W,
  t as $,
  ay as M,
  C as T,
  aa as N,
  _ as B,
  f as I
} from "./BrLCGJDp.js";
const L = {
    class: "kit-tooltip"
  },
  S = y({
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
        s = g(!1),
        u = () => s.value = !s.value,
        i = () => s.value = !1,
        m = b(() => {
          const t = {};
          return t.textAlign = e.textAlignment, e.textMinWidth && (t.minWidth = `${e.textMinWidth}px`), e.textMaxWidth && (t.maxWidth = `${e.textMaxWidth}px`), e.nowrap && (t.whiteSpace = "nowrap"), t
        });
      return (t, a) => {
        const x = B,
          v = k("click-outside");
        return w((n(), l("div", L, [o("div", {
          class: c(["body", {
            "is-fill": t.fill
          }]),
          onClick: a[0] || (a[0] = _ => u())
        }, [d(t.$slots, "default", {}, void 0, !0)], 2), r(N, {
          name: "opacity-transition"
        }, {
          default: C(() => [f(s) ? (n(), l("div", {
            key: 0,
            class: c(["content", `is-${t.alignment.toLowerCase()}`])
          }, [o("div", {
            class: "text",
            style: M(f(m))
          }, [d(t.$slots, "inner", {}, () => [W($(t.text), 1)], !0)], 4), o("button", {
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
  A = I(S, [
    ["__scopeId", "data-v-919068ec"]
  ]);
export {
  A as _
};