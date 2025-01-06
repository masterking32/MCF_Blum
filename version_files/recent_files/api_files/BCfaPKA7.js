import {
  d as y,
  be as h,
  L as k,
  j as w,
  O as b,
  w as g,
  o as n,
  c as l,
  a as o,
  bk as d,
  n as c,
  b as r,
  I as W,
  e as f,
  m as $,
  t as C,
  aw as M,
  D as T,
  a8 as N,
  _ as B,
  f as I
} from "./CZHgEWRg.js";
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
        s = k(!1),
        u = () => s.value = !s.value,
        i = () => s.value = !1,
        m = w(() => {
          const t = {};
          return t.textAlign = e.textAlignment, e.textMinWidth && (t.minWidth = `${e.textMinWidth}px`), e.textMaxWidth && (t.maxWidth = `${e.textMaxWidth}px`), e.nowrap && (t.whiteSpace = "nowrap"), t
        });
      return (t, a) => {
        const x = B,
          v = b("click-outside");
        return g((n(), l("div", L, [o("div", {
          class: c(["body", {
            "is-fill": t.fill
          }]),
          onClick: a[0] || (a[0] = _ => u())
        }, [d(t.$slots, "default", {}, void 0, !0)], 2), r(N, {
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