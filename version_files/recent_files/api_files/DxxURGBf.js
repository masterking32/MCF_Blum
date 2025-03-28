import {
  _
} from "./BYlfez-F.js";
import {
  d as v,
  j as o,
  cY as b,
  cZ as k,
  N as p,
  o as t,
  G as f,
  H as c,
  a as l,
  t as d,
  w as y,
  c as s,
  D as m,
  br as B,
  e as a,
  am as T,
  f as w
} from "./C5qtAAJO.js";
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
  C = {
    key: 1,
    class: "label"
  },
  H = v({
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
      return (i, I) => {
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
          }, null, 8, x)) : (t(), s("span", C, d(a(r).label), 1))])) : m("", !0)], !0)]),
          _: 3
        }, 8, ["title", "balance", "balance-highlighted"])
      }
    }
  }),
  j = w(H, [
    ["__scopeId", "data-v-9f2df6ab"]
  ]);
export {
  j as _
};