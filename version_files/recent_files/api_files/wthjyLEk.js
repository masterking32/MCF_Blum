import {
  d as h,
  bY as k,
  r as y,
  F as W,
  a8 as $,
  w as b,
  a as n,
  c as l,
  b as i,
  aB as d,
  n as c,
  k as r,
  x as g,
  e as u,
  h as C,
  t as M,
  aJ as N,
  g as T,
  ak as w,
  N as B,
  j as V
} from "./CRu0zQdy.js";
const A = {
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
        default: k.LEFT
      }
    },
    setup(f) {
      const e = f,
        a = y(!1),
        m = () => a.value = !0,
        o = () => a.value = !1,
        p = W(() => {
          const t = {};
          return t.textAlign = e.textAlignment, e.textMinWidth && (t.minWidth = `${e.textMinWidth}px`), e.textMaxWidth && (t.maxWidth = `${e.textMaxWidth}px`), t
        });
      return (t, s) => {
        const x = B,
          v = $("click-outside");
        return b((n(), l("div", A, [i("div", {
          class: c(["body", {
            "is-fill": t.fill
          }]),
          onClick: s[0] || (s[0] = _ => m())
        }, [d(t.$slots, "default", {}, void 0, !0)], 2), r(w, {
          name: "opacity-transition"
        }, {
          default: g(() => [u(a) ? (n(), l("div", {
            key: 0,
            class: c(["content", `is-${t.alignment.toLowerCase()}`])
          }, [i("div", {
            class: "text",
            style: N(u(p))
          }, [d(t.$slots, "inner", {}, () => [C(M(t.text), 1)], !0)], 4), i("button", {
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
  S = V(I, [
    ["__scopeId", "data-v-c874f740"]
  ]);
export {
  S as _
};