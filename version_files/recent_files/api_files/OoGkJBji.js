import {
  _
} from "./4CwwXan7.js";
import {
  d as v,
  j as o,
  cA as b,
  cB as k,
  N as p,
  o as t,
  G as f,
  H as c,
  a as l,
  t as d,
  w as y,
  c as s,
  D as m,
  bi as B,
  e as a,
  ak as T,
  f as w
} from "./DU-EduvJ.js";
const D = {
    class: "avatar"
  },
  N = {
    class: "letter"
  },
  R = ["src"],
  U = {
    key: 0,
    class: "position"
  },
  x = ["src"],
  A = {
    key: 1,
    class: "label"
  },
  C = v({
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
      return (i, H) => {
        const g = _,
          h = p("img-loader");
        return t(), f(g, {
          title: e.user.username,
          balance: e.user.earnedPoints,
          "balance-highlighted": a(u),
          class: "pages-tribe-user-item"
        }, {
          image: c(() => [l("div", D, [l("div", N, d(e.user.letterAvatar), 1), e.user.avatarUrl ? y((t(), s("img", {
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
          }, null, 8, x)) : (t(), s("span", A, d(a(r).label), 1))])) : m("", !0)], !0)]),
          _: 3
        }, 8, ["title", "balance", "balance-highlighted"])
      }
    }
  }),
  P = w(C, [
    ["__scopeId", "data-v-9f2df6ab"]
  ]);
export {
  P as _
};