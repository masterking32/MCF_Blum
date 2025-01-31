import {
  _
} from "./yPFsrcgW.js";
import {
  d as v,
  j as o,
  cG as b,
  cH as k,
  N as p,
  o as t,
  G as f,
  H as c,
  a as l,
  t as d,
  w as y,
  c as s,
  D as m,
  bl as B,
  e as a,
  am as T,
  f as w
} from "./BZtpgRro.js";
const D = {
    class: "avatar"
  },
  H = {
    class: "letter"
  },
  N = ["src"],
  R = {
    key: 0,
    class: "position"
  },
  U = ["src"],
  x = {
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
      return (i, I) => {
        const g = _,
          h = p("img-loader");
        return t(), f(g, {
          title: e.user.username,
          balance: e.user.earnedPoints,
          "balance-highlighted": a(u),
          class: "pages-tribe-user-item"
        }, {
          image: c(() => [l("div", D, [l("div", H, d(e.user.letterAvatar), 1), e.user.avatarUrl ? y((t(), s("img", {
            key: 0,
            src: e.user.avatarUrl,
            alt: "Avatar"
          }, null, 8, N)), [
            [h]
          ]) : m("", !0)])]),
          right: c(() => [B(i.$slots, "right", {}, () => [e.rank ? (t(), s("div", R, [a(r).icon ? (t(), s("img", {
            key: 0,
            src: ("imgResolver" in i ? i.imgResolver : a(T))(a(r).icon),
            alt: "Medal image",
            class: "medal",
            width: "32",
            height: "32"
          }, null, 8, U)) : (t(), s("span", x, d(a(r).label), 1))])) : m("", !0)], !0)]),
          _: 3
        }, 8, ["title", "balance", "balance-highlighted"])
      }
    }
  }),
  j = w(C, [
    ["__scopeId", "data-v-9f2df6ab"]
  ]);
export {
  j as _
};