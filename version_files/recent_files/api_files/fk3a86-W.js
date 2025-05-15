import {
  _ as c
} from "./DWDlhzIa.js";
import {
  _ as d
} from "./BFEgGYK1.js";
import {
  d as l,
  o as t,
  c as s,
  N as n,
  F as i,
  a as o,
  t as u,
  q as k,
  D as y,
  ak as r,
  G as f,
  f as h
} from "./DdW0p5VG.js";
const v = {
    class: "pages-tribe-top-list-template"
  },
  g = {
    class: "heading"
  },
  B = {
    class: "list"
  },
  I = {
    class: "my-item-in-rank"
  },
  b = l({
    __name: "TopListTemplate",
    props: {
      title: {},
      items: {},
      myItem: {}
    },
    setup(C) {
      return (e, F) => {
        const m = c,
          _ = d;
        return t(), s("div", v, [e.items ? (t(), s(i, {
          key: 1
        }, [o("div", g, u(e.title), 1), o("div", B, [(t(!0), s(i, null, k(e.items, (a, p) => r(e.$slots, "list-item", {
          key: a.id,
          item: a,
          idx: p
        }, void 0, !0)), 128))]), e.myItem ? (t(), n(_, {
          key: 0
        }, {
          default: y(() => [o("div", I, [r(e.$slots, "my-item", {
            item: e.myItem
          }, void 0, !0)])]),
          _: 3
        })) : f("", !0)], 64)) : (t(), n(m, {
          key: 0
        }))])
      }
    }
  }),
  T = h(b, [
    ["__scopeId", "data-v-a2ba3d31"]
  ]);
export {
  T as _
};