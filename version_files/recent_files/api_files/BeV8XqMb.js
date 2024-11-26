import {
  _ as c
} from "./CYaYgUNP.js";
import {
  _ as d
} from "./CXaAR9zz.js";
import {
  d as l,
  a as t,
  c as s,
  m as n,
  W as i,
  b as o,
  t as u,
  X as y,
  x as k,
  aB as m,
  g as f,
  j as h
} from "./CLQlII_v.js";
const v = {
    class: "pages-tribe-top-list-template"
  },
  g = {
    class: "heading"
  },
  B = {
    class: "list"
  },
  b = {
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
      return (e, L) => {
        const r = c,
          _ = d;
        return t(), s("div", v, [e.items ? (t(), s(i, {
          key: 1
        }, [o("div", g, u(e.title), 1), o("div", B, [(t(!0), s(i, null, y(e.items, (a, p) => m(e.$slots, "list-item", {
          key: a.id,
          item: a,
          idx: p
        }, void 0, !0)), 128))]), e.myItem ? (t(), n(_, {
          key: 0
        }, {
          default: k(() => [o("div", b, [m(e.$slots, "my-item", {
            item: e.myItem
          }, void 0, !0)])]),
          _: 3
        })) : f("", !0)], 64)) : (t(), n(r, {
          key: 0
        }))])
      }
    }
  }),
  F = h(I, [
    ["__scopeId", "data-v-a2ba3d31"]
  ]);
export {
  F as _
};