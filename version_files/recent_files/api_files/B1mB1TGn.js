import {
  _ as c
} from "./C53Vw5xS.js";
import {
  _ as d
} from "./DHPBEK3u.js";
import {
  d as l,
  o as t,
  c as s,
  G as n,
  F as i,
  a as o,
  t as u,
  q as k,
  I as y,
  bk as r,
  D as f,
  f as h
} from "./CVKQB8Rv.js";
const v = {
    class: "pages-tribe-top-list-template"
  },
  g = {
    class: "heading"
  },
  I = {
    class: "list"
  },
  b = {
    class: "my-item-in-rank"
  },
  B = l({
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
        }, [o("div", g, u(e.title), 1), o("div", I, [(t(!0), s(i, null, k(e.items, (a, p) => r(e.$slots, "list-item", {
          key: a.id,
          item: a,
          idx: p
        }, void 0, !0)), 128))]), e.myItem ? (t(), n(_, {
          key: 0
        }, {
          default: y(() => [o("div", b, [r(e.$slots, "my-item", {
            item: e.myItem
          }, void 0, !0)])]),
          _: 3
        })) : f("", !0)], 64)) : (t(), n(m, {
          key: 0
        }))])
      }
    }
  }),
  D = h(B, [
    ["__scopeId", "data-v-a2ba3d31"]
  ]);
export {
  D as _
};