import {
  d as u,
  j as d,
  o as s,
  c as o,
  e as t,
  F as p,
  V as b,
  t as l,
  f as v,
  ab as h,
  P as g,
  a as r,
  E as _,
  m,
  M as k,
  ac as y
} from "./DrkX69Hr.js";
import {
  g as P
} from "./CU-KXbav.js";
const $ = {
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
        n = d(() => {
          if (a.position !== void 0) return P(a.position)
        });
      return (i, e) => (s(), o("div", $, [t(n) ? (s(), o(p, {
        key: 1
      }, [t(n).icon ? (s(), o("img", {
        key: 0,
        src: ("imgResolver" in i ? i.imgResolver : t(b))(t(n).icon),
        alt: "Medal image",
        class: "medal",
        width: "32",
        height: "32"
      }, null, 8, L)) : (s(), o("span", U, l(t(n).label), 1))], 64)) : (s(), o("div", B, "n/a"))]))
    }
  }),
  F = v(E, [
    ["__scopeId", "data-v-ebe7d228"]
  ]),
  V = {
    class: "frens-blum-leaderboard-item-template"
  },
  A = {
    class: "image-circle"
  },
  I = {
    class: "letter"
  },
  R = ["src"],
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
        n = d(() => h(a.username) || "X"),
        i = d(() => {
          if (a.amount !== void 0) return `${g(a.amount)} ${a.pointsPostfix}`
        });
      return (e, C) => {
        const f = F;
        return s(), o("div", V, [r("div", A, [r("span", I, l(t(n)), 1), e.avatarUrl ? (s(), o("img", {
          key: 0,
          src: e.avatarUrl,
          alt: "Avatar"
        }, null, 8, R)) : _("", !0)]), r("div", T, [r("div", D, l(e.label), 1), r("div", N, [t(i) ? (s(), o(p, {
          key: 0
        }, [m(l(t(i)), 1)], 64)) : (s(), o(p, {
          key: 1
        }, [m(l(`n/a ${e.pointsPostfix}`), 1)], 64))])]), e.noPosition ? _("", !0) : (s(), k(f, {
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