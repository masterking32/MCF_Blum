import {
  d as y,
  bm as h,
  K as w,
  j as b,
  N as g,
  w as k,
  o as n,
  c as l,
  a as o,
  bl as d,
  n as c,
  b as r,
  H as W,
  e as f,
  m as $,
  t as C,
  aw as M,
  D as N,
  aa as T,
  _ as B,
  f as S
} from "./7B743EeA.js";
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
        s = w(!1),
        u = () => s.value = !s.value,
        i = () => s.value = !1,
        m = b(() => {
          const t = {};
          return t.textAlign = e.textAlignment, e.textMinWidth && (t.minWidth = `${e.textMinWidth}px`), e.textMaxWidth && (t.maxWidth = `${e.textMaxWidth}px`), e.nowrap && (t.whiteSpace = "nowrap"), t
        });
      return (t, a) => {
        const x = B,
          v = g("click-outside");
        return k((n(), l("div", V, [o("div", {
          class: c(["body", {
            "is-fill": t.fill
          }]),
          onClick: a[0] || (a[0] = _ => u())
        }, [d(t.$slots, "default", {}, void 0, !0)], 2), r(T, {
          name: "opacity-transition"
        }, {
          default: W(() => [f(s) ? (n(), l("div", {
            key: 0,
            class: c(["content", `is-${t.alignment.toLowerCase()}`])
          }, [o("div", {
            class: "text",
            style: M(f(m))
          }, [d(t.$slots, "inner", {}, () => [$(C(t.text), 1)], !0)], 4), o("button", {
            type: "button",
            class: "close-btn reset",
            onClick: a[1] || (a[1] = _ => i())
          }, [r(x, {
            name: "close-sm",
            class: "icon"
          })])], 2)) : N("", !0)]),
          _: 3
        })])), [
          [v, i]
        ])
      }
    }
  }),
  I = S(A, [
    ["__scopeId", "data-v-919068ec"]
  ]);
export {
  I as _
};