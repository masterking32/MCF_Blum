import {
  _ as c
} from "./ClGzRaO-.js";
import {
  _ as d
} from "./CcwzNHcN.js";
import {
  d as l,
  o as t,
  c as s,
  G as n,
  F as i,
  a as o,
  t as u,
  q as y,
  H as k,
  bm as m,
  D as f,
  f as h
} from "./BFi5NhLo.js";
const v = {
    class: "pages-tribe-top-list-template"
  },
  g = {
    class: "heading"
  },
  b = {
    class: "list"
  },
  B = {
    class: "my-item-in-rank"
  },
  I = l({
    __name: "TopListTemplate",
    props: {
      title: {},
      items: {},
      myItem: {}
    },
    setup(C) {
      return (e, F) => {
        const r = c,
          _ = d;
        return t(), s("div", v, [e.items ? (t(), s(i, {
          key: 1
        }, [o("div", g, u(e.title), 1), o("div", b, [(t(!0), s(i, null, y(e.items, (a, p) => m(e.$slots, "list-item", {
          key: a.id,
          item: a,
          idx: p
        }, void 0, !0)), 128))]), e.myItem ? (t(), n(_, {
          key: 0
        }, {
          default: k(() => [o("div", B, [m(e.$slots, "my-item", {
            item: e.myItem
          }, void 0, !0)])]),
          _: 3
        })) : f("", !0)], 64)) : (t(), n(r, {
          key: 0
        }))])
      }
    }
  }),
  D = h(I, [
    ["__scopeId", "data-v-a2ba3d31"]
  ]);
export {
  D as _
};