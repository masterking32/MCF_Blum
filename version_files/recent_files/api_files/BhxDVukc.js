import {
  d as h,
  bm as y,
  G as k,
  j as C,
  P as W,
  w as $,
  o as n,
  c as l,
  a as i,
  az as d,
  n as c,
  b as r,
  U as b,
  e as f,
  m as M,
  t as T,
  ax as g,
  C as N,
  a9 as w,
  _ as V,
  f as A
} from "./DQp58DI6.js";
const B = {
    class: "kit-tooltip"
  },
  I = h({
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
      alignment: {
        default: y.LEFT
      }
    },
    setup(m) {
      const e = m,
        a = k(!1),
        u = () => a.value = !0,
        o = () => a.value = !1,
        p = C(() => {
          const t = {};
          return t.textAlign = e.textAlignment, e.textMinWidth && (t.minWidth = `${e.textMinWidth}px`), e.textMaxWidth && (t.maxWidth = `${e.textMaxWidth}px`), t
        });
      return (t, s) => {
        const x = V,
          _ = W("click-outside");
        return $((n(), l("div", B, [i("div", {
          class: c(["body", {
            "is-fill": t.fill
          }]),
          onClick: s[0] || (s[0] = v => u())
        }, [d(t.$slots, "default", {}, void 0, !0)], 2), r(w, {
          name: "opacity-transition"
        }, {
          default: b(() => [f(a) ? (n(), l("div", {
            key: 0,
            class: c(["content", `is-${t.alignment.toLowerCase()}`])
          }, [i("div", {
            class: "text",
            style: g(f(p))
          }, [d(t.$slots, "inner", {}, () => [M(T(t.text), 1)], !0)], 4), i("button", {
            type: "button",
            class: "close-btn reset",
            onClick: s[1] || (s[1] = v => o())
          }, [r(x, {
            name: "close-sm",
            class: "icon"
          })])], 2)) : N("", !0)]),
          _: 3
        })])), [
          [_, o]
        ])
      }
    }
  }),
  S = A(I, [
    ["__scopeId", "data-v-c874f740"]
  ]);
export {
  S as _
};