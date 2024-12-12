import {
  d as a,
  M as u,
  a as r,
  c,
  k as d,
  e as l,
  N as m,
  j as _,
  b as s,
  t as n,
  aC as b
} from "./DY2exbLM.js";
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
          onClick: o[0] || (o[0] = k => l(e)(t.value))
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
  C = {
    class: "title"
  },
  g = {
    class: "subtitle"
  },
  h = a({
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
      return (e, i) => (r(), c("div", v, [s("div", x, [s("span", C, n(t.title), 1), s("span", g, n(t.subtitle), 1)]), b(e.$slots, "default", {}, void 0, !0)]))
    }
  }),
  B = _(h, [
    ["__scopeId", "data-v-feb1bb25"]
  ]);
export {
  $ as _, B as a
};