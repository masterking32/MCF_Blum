import {
  d as h,
  bu as k,
  r as y,
  F as C,
  a8 as W,
  w as $,
  a as n,
  c as l,
  b as i,
  aC as d,
  n as c,
  k as r,
  x as b,
  e as u,
  h as g,
  t as M,
  aL as N,
  g as T,
  ak as w,
  N as L,
  j as V
} from "./7Syd4Ho8.js";
const A = {
    class: "kit-tooltip"
  },
  B = h({
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
        default: k.LEFT
      }
    },
    setup(f) {
      const e = f,
        a = y(!1),
        m = () => a.value = !0,
        o = () => a.value = !1,
        p = C(() => {
          const t = {};
          return t.textAlign = e.textAlignment, e.textMinWidth && (t.minWidth = `${e.textMinWidth}px`), e.textMaxWidth && (t.maxWidth = `${e.textMaxWidth}px`), t
        });
      return (t, s) => {
        const x = L,
          v = W("click-outside");
        return $((n(), l("div", A, [i("div", {
          class: c(["body", {
            "is-fill": t.fill
          }]),
          onClick: s[0] || (s[0] = _ => m())
        }, [d(t.$slots, "default", {}, void 0, !0)], 2), r(w, {
          name: "opacity-transition"
        }, {
          default: b(() => [u(a) ? (n(), l("div", {
            key: 0,
            class: c(["content", `is-${t.alignment.toLowerCase()}`])
          }, [i("div", {
            class: "text",
            style: N(u(p))
          }, [d(t.$slots, "inner", {}, () => [g(M(t.text), 1)], !0)], 4), i("button", {
            type: "button",
            class: "close-btn reset",
            onClick: s[1] || (s[1] = _ => o())
          }, [r(x, {
            name: "close-sm",
            class: "icon"
          })])], 2)) : T("", !0)]),
          _: 3
        })])), [
          [v, o]
        ])
      }
    }
  }),
  S = V(B, [
    ["__scopeId", "data-v-c874f740"]
  ]);
export {
  S as _
};