import {
  _ as c
} from "./DgLhri_N.js";
import {
  _ as l
} from "./C2LClDVI.js";
import {
  d,
  o as t,
  c as s,
  G as n,
  F as i,
  a as o,
  t as u,
  q as y,
  H as k,
  bl as r,
  D as f,
  f as h
} from "./guWQ5rpf.js";
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
  I = d({
    __name: "TopListTemplate",
    props: {
      title: {},
      items: {},
      myItem: {}
    },
    setup(C) {
      return (e, F) => {
        const m = c,
          _ = l;
        return t(), s("div", v, [e.items ? (t(), s(i, {
          key: 1
        }, [o("div", g, u(e.title), 1), o("div", b, [(t(!0), s(i, null, y(e.items, (a, p) => r(e.$slots, "list-item", {
          key: a.id,
          item: a,
          idx: p
        }, void 0, !0)), 128))]), e.myItem ? (t(), n(_, {
          key: 0
        }, {
          default: k(() => [o("div", B, [r(e.$slots, "my-item", {
            item: e.myItem
          }, void 0, !0)])]),
          _: 3
        })) : f("", !0)], 64)) : (t(), n(m, {
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