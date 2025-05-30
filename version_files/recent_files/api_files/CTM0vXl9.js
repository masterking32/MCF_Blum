import {
  _ as c
} from "./BInYJLyv.js";
import {
  _ as d
} from "./jOA2D9Ne.js";
import {
  d as l,
  o as t,
  c as s,
  z as n,
  F as i,
  a as o,
  t as u,
  q as y,
  D as k,
  aq as r,
  G as f,
  f as h
} from "./jPANuN8i.js";
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
        }, [o("div", g, u(e.title), 1), o("div", B, [(t(!0), s(i, null, y(e.items, (a, p) => r(e.$slots, "list-item", {
          key: a.id,
          item: a,
          idx: p
        }, void 0, !0)), 128))]), e.myItem ? (t(), n(_, {
          key: 0
        }, {
          default: k(() => [o("div", I, [r(e.$slots, "my-item", {
            item: e.myItem
          }, void 0, !0)])]),
          _: 3
        })) : f("", !0)], 64)) : (t(), n(m, {
          key: 0
        }))])
      }
    }
  }),
  q = h(b, [
    ["__scopeId", "data-v-a2ba3d31"]
  ]);
export {
  q as _
};