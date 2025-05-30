import {
  d as u,
  j as p,
  o as s,
  c as o,
  e as t,
  F as _,
  a8 as h,
  t as l,
  f as v,
  ap as b,
  a1 as g,
  a as r,
  E as d,
  m,
  y as k,
  aq as y
} from "./i5EetP0C.js";
import {
  g as $
} from "./BzSZ9QAA.js";
const P = {
    class: "frens-blum-leaderboard-item-position"
  },
  B = {
    key: 0,
    class: "label"
  },
  L = ["src"],
  U = {
    key: 1,
    class: "label"
  },
  E = u({
    __name: "ItemPosition",
    props: {
      position: {}
    },
    setup(c) {
      const a = c,
        n = p(() => {
          if (a.position !== void 0) return $(a.position)
        });
      return (i, e) => (s(), o("div", P, [t(n) ? (s(), o(_, {
        key: 1
      }, [t(n).icon ? (s(), o("img", {
        key: 0,
        src: ("imgResolver" in i ? i.imgResolver : t(h))(t(n).icon),
        alt: "Medal image",
        class: "medal",
        width: "32",
        height: "32"
      }, null, 8, L)) : (s(), o("span", U, l(t(n).label), 1))], 64)) : (s(), o("div", B, "-"))]))
    }
  }),
  F = v(E, [
    ["__scopeId", "data-v-9a5a3520"]
  ]),
  A = {
    class: "frens-blum-leaderboard-item-template"
  },
  I = {
    class: "image-circle"
  },
  R = {
    class: "letter"
  },
  V = ["src"],
  T = {
    class: "inner"
  },
  D = {
    class: "label"
  },
  N = {
    class: "points"
  },
  S = u({
    __name: "ItemTemplate",
    props: {
      avatarUrl: {},
      username: {},
      label: {},
      amount: {},
      pointsPostfix: {},
      position: {},
      noPosition: {
        type: Boolean
      }
    },
    setup(c) {
      const a = c,
        n = p(() => b(a.username) || "X"),
        i = p(() => {
          if (a.amount !== void 0) return `${g(a.amount)} ${a.pointsPostfix}`
        });
      return (e, C) => {
        const f = F;
        return s(), o("div", A, [r("div", I, [r("span", R, l(t(n)), 1), e.avatarUrl ? (s(), o("img", {
          key: 0,
          src: e.avatarUrl,
          alt: "Avatar"
        }, null, 8, V)) : d("", !0)]), r("div", T, [r("div", D, l(e.label), 1), r("div", N, [t(i) ? (s(), o(_, {
          key: 0
        }, [m(l(t(i)), 1)], 64)) : (s(), o(_, {
          key: 1
        }, [m(l(`n/a ${e.pointsPostfix}`), 1)], 64))])]), e.noPosition ? d("", !0) : (s(), k(f, {
          key: 0,
          position: e.position,
          class: "position"
        }, null, 8, ["position"])), y(e.$slots, "after", {}, void 0, !0)])
      }
    }
  }),
  w = v(S, [
    ["__scopeId", "data-v-59c7d3fb"]
  ]);
export {
  F as _, w as a
};