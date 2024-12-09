import {
  _
} from "./CdrAVg61.js";
import {
  d as v,
  F as o,
  cK as b,
  cL as k,
  a8 as p,
  a,
  m as f,
  x as c,
  b as l,
  t as d,
  w as y,
  c as s,
  g as m,
  aC as B,
  e as t,
  ax as x,
  j as T
} from "./Ddf_vcE7.js";
const w = {
    class: "avatar"
  },
  C = {
    class: "letter"
  },
  L = ["src"],
  R = {
    key: 0,
    class: "position"
  },
  U = ["src"],
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
        return a(), f(g, {
          title: e.user.username,
          balance: e.user.earnedPoints,
          "balance-highlighted": t(u),
          class: "pages-tribe-user-item"
        }, {
          image: c(() => [l("div", w, [l("div", C, d(e.user.letterAvatar), 1), e.user.avatarUrl ? y((a(), s("img", {
            key: 0,
            src: e.user.avatarUrl,
            alt: "Avatar"
          }, null, 8, L)), [
            [h]
          ]) : m("", !0)])]),
          right: c(() => [B(i.$slots, "right", {}, () => [e.rank ? (a(), s("div", R, [t(r).icon ? (a(), s("img", {
            key: 0,
            src: ("imgResolver" in i ? i.imgResolver : t(x))(t(r).icon),
            alt: "Medal image",
            class: "medal",
            width: "32",
            height: "32"
          }, null, 8, U)) : (a(), s("span", D, d(t(r).label), 1))])) : m("", !0)], !0)]),
          _: 3
        }, 8, ["title", "balance", "balance-highlighted"])
      }
    }
  }),
  A = T(I, [
    ["__scopeId", "data-v-9f2df6ab"]
  ]);
export {
  A as _
};