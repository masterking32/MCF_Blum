import {
  d as y,
  bC as h,
  y as g,
  j as b,
  T as k,
  w,
  o as i,
  c as l,
  a as o,
  ag as d,
  n as r,
  b as c,
  D as C,
  e as f,
  m as T,
  t as W,
  aP as $,
  G as M,
  an as N,
  _ as B,
  f as S
} from "./DmEY5NHF.js";
const V = {
    class: "kit-tooltip"
  },
  A = y({
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
        n = () => s.value = !1,
        m = b(() => {
          const t = {};
          return t.textAlign = e.textAlignment, e.textMinWidth && (t.minWidth = `${e.textMinWidth}px`), e.textMaxWidth && (t.maxWidth = `${e.textMaxWidth}px`), e.nowrap && (t.whiteSpace = "nowrap"), t
        });
      return (t, a) => {
        const x = B,
          v = k("click-outside");
        return w((i(), l("div", V, [o("div", {
          class: r(["body", {
            "is-fill": t.fill
          }]),
          onClick: a[0] || (a[0] = _ => u())
        }, [d(t.$slots, "default", {}, void 0, !0)], 2), c(N, {
          name: "opacity-transition"
        }, {
          default: C(() => [f(s) ? (i(), l("div", {
            key: 0,
            class: r(["content", `is-${t.alignment.toLowerCase()}`])
          }, [o("div", {
            class: "text",
            style: $(f(m))
          }, [d(t.$slots, "inner", {}, () => [T(W(t.text), 1)], !0)], 4), o("button", {
            type: "button",
            class: "close-btn reset",
            onClick: a[1] || (a[1] = _ => n())
          }, [c(x, {
            name: "close-sm",
            class: "icon"
          })])], 2)) : M("", !0)]),
          _: 3
        })])), [
          [v, n]
        ])
      }
    }
  }),
  I = S(A, [
    ["__scopeId", "data-v-6171ebfe"]
  ]);
export {
  I as _
};