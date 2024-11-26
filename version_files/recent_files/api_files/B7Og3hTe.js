import {
  _
} from "./BpCLhLHY.js";
import {
  d as v,
  F as o,
  cE as b,
  cF as k,
  a8 as p,
  a,
  m as f,
  x as c,
  b as l,
  t as d,
  w as y,
  c as s,
  g as m,
  aB as B,
  e as t,
  a$ as T,
  j as w
} from "./Brvr1E7g.js";
const x = {
    class: "avatar"
  },
  R = {
    class: "letter"
  },
  U = ["src"],
  C = {
    key: 0,
    class: "position"
  },
  D = ["src"],
  I = {
    key: 1,
    class: "label"
  },
  L = v({
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
          image: c(() => [l("div", x, [l("div", R, d(e.user.letterAvatar), 1), e.user.avatarUrl ? y((a(), s("img", {
            key: 0,
            src: e.user.avatarUrl,
            alt: "Avatar"
          }, null, 8, U)), [
            [h]
          ]) : m("", !0)])]),
          right: c(() => [B(i.$slots, "right", {}, () => [e.rank ? (a(), s("div", C, [t(r).icon ? (a(), s("img", {
            key: 0,
            src: ("imgResolver" in i ? i.imgResolver : t(T))(t(r).icon),
            alt: "Medal image",
            class: "medal",
            width: "32",
            height: "32"
          }, null, 8, D)) : (a(), s("span", I, d(t(r).label), 1))])) : m("", !0)], !0)]),
          _: 3
        }, 8, ["title", "balance", "balance-highlighted"])
      }
    }
  }),
  A = w(L, [
    ["__scopeId", "data-v-9f2df6ab"]
  ]);
export {
  A as _
};