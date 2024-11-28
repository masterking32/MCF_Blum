import {
  _ as c
} from "./ylVg_IAq.js";
import {
  _ as d
} from "./DykT_tw6.js";
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
  aC as m,
  g as f,
  j as h
} from "./yAg4xOB2.js";
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
  C = l({
    __name: "TopListTemplate",
    props: {
      title: {},
      items: {},
      myItem: {}
    },
    setup(I) {
      return (e, L) => {
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
  F = h(C, [
    ["__scopeId", "data-v-a2ba3d31"]
  ]);
export {
  F as _
};