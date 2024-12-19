import {
  _ as c
} from "./DxduM7D4.js";
import {
  _ as d
} from "./dJKOKjL2.js";
import {
  d as l,
  o as t,
  c as s,
  J as n,
  F as i,
  a as o,
  t as u,
  q as y,
  U as k,
  az as r,
  C as f,
  f as h
} from "./Bxr-pE_l.js";
const v = {
    class: "pages-tribe-top-list-template"
  },
  g = {
    class: "heading"
  },
  B = {
    class: "list"
  },
  C = {
    class: "my-item-in-rank"
  },
  I = l({
    __name: "TopListTemplate",
    props: {
      title: {},
      items: {},
      myItem: {}
    },
    setup(b) {
      return (e, F) => {
        const m = c,
          _ = d;
        return t(), s("div", v, [e.items ? (t(), s(i, {
          key: 1
        }, [o("div", g, u(e.title), 1), o("div", B, [(t(!0), s(i, null, y(e.items, (a, p) => r(e.$slots, "list-item", {
          key: a.id,
          item: a,
          idx: p
        }, void 0, !0)), 128))]), e.myItem ? (t(), n(_, {
          key: 0
        }, {
          default: k(() => [o("div", C, [r(e.$slots, "my-item", {
            item: e.myItem
          }, void 0, !0)])]),
          _: 3
        })) : f("", !0)], 64)) : (t(), n(m, {
          key: 0
        }))])
      }
    }
  }),
  N = h(I, [
    ["__scopeId", "data-v-a2ba3d31"]
  ]);
export {
  N as _
};