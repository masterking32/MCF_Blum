import {
  d as a,
  u,
  o as r,
  c,
  b as d,
  e as l,
  _ as m,
  f as _,
  a as s,
  t as n,
  bk as b
} from "./CZHgEWRg.js";
const y = {
    class: "kit-copy-button"
  },
  f = a({
    __name: "CopyButton",
    props: {
      value: {
        type: String,
        required: !0
      }
    },
    setup(t) {
      const {
        copy: e
      } = u();
      return (i, o) => {
        const p = m;
        return r(), c("div", y, [d(p, {
          name: "edit-copy",
          class: "icon",
          onClick: o[0] || (o[0] = C => l(e)(t.value))
        })])
      }
    }
  }),
  $ = _(f, [
    ["__scopeId", "data-v-63ad1b1e"]
  ]),
  v = {
    class: "pages-tribe-create-property"
  },
  x = {
    class: "text"
  },
  g = {
    class: "title"
  },
  h = {
    class: "subtitle"
  },
  k = a({
    __name: "TribeCreateProperty",
    props: {
      title: {
        type: String,
        required: !0
      },
      subtitle: {
        type: String,
        required: !0
      }
    },
    setup(t) {
      return (e, i) => (r(), c("div", v, [s("div", x, [s("span", g, n(t.title), 1), s("span", h, n(t.subtitle), 1)]), b(e.$slots, "default", {}, void 0, !0)]))
    }
  }),
  B = _(k, [
    ["__scopeId", "data-v-feb1bb25"]
  ]);
export {
  $ as _, B as a
};