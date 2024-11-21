import {
  _
} from "./HGxRdqoW.js";
import {
  d as v,
  F as o,
  cK as b,
  cL as k,
  a8 as p,
  a as t,
  m as f,
  x as c,
  b as l,
  t as d,
  w as y,
  c as s,
  g as m,
  aB as B,
  e as a,
  bJ as T,
  j as w
} from "./DwYsksKZ.js";
const x = {
    class: "avatar"
  },
  L = {
    class: "letter"
  },
  R = ["src"],
  U = {
    key: 0,
    class: "position"
  },
  C = ["src"],
  D = {
    key: 1,
    class: "label"
  },
  I = v({
    __name: "TribeUserItem",
    props: {
      user: {
        type: Object,
        required: !0
      },
      rank: {
        type: Number,
        default: void 0
      }
    },
    setup(e) {
      const n = e,
        r = o(() => b(n.rank)),
        u = o(() => k(n.user.perk));
      return (i, N) => {
        const g = _,
          h = p("img-loader");
        return t(), f(g, {
          title: e.user.username,
          balance: e.user.earnedPoints,
          "balance-highlighted": a(u),
          class: "pages-tribe-user-item"
        }, {
          image: c(() => [l("div", x, [l("div", L, d(e.user.letterAvatar), 1), e.user.avatarUrl ? y((t(), s("img", {
            key: 0,
            src: e.user.avatarUrl,
            alt: "Avatar"
          }, null, 8, R)), [
            [h]
          ]) : m("", !0)])]),
          right: c(() => [B(i.$slots, "right", {}, () => [e.rank ? (t(), s("div", U, [a(r).icon ? (t(), s("img", {
            key: 0,
            src: ("imgResolver" in i ? i.imgResolver : a(T))(a(r).icon),
            alt: "Medal image",
            class: "medal",
            width: "32",
            height: "32"
          }, null, 8, C)) : (t(), s("span", D, d(a(r).label), 1))])) : m("", !0)], !0)]),
          _: 3
        }, 8, ["title", "balance", "balance-highlighted"])
      }
    }
  }),
  A = w(I, [
    ["__scopeId", "data-v-9f2df6ab"]
  ]);
export {
  A as _
};