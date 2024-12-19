import {
  _
} from "./ASktFjkO.js";
import {
  d as v,
  j as o,
  cH as b,
  cI as k,
  P as p,
  o as t,
  J as f,
  U as c,
  a as l,
  t as d,
  w as y,
  c as s,
  C as m,
  az as B,
  e as a,
  ao as T,
  f as U
} from "./Bxr-pE_l.js";
const w = {
    class: "avatar"
  },
  C = {
    class: "letter"
  },
  I = ["src"],
  P = {
    key: 0,
    class: "position"
  },
  R = ["src"],
  x = {
    key: 1,
    class: "label"
  },
  D = v({
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
          image: c(() => [l("div", w, [l("div", C, d(e.user.letterAvatar), 1), e.user.avatarUrl ? y((t(), s("img", {
            key: 0,
            src: e.user.avatarUrl,
            alt: "Avatar"
          }, null, 8, I)), [
            [h]
          ]) : m("", !0)])]),
          right: c(() => [B(i.$slots, "right", {}, () => [e.rank ? (t(), s("div", P, [a(r).icon ? (t(), s("img", {
            key: 0,
            src: ("imgResolver" in i ? i.imgResolver : a(T))(a(r).icon),
            alt: "Medal image",
            class: "medal",
            width: "32",
            height: "32"
          }, null, 8, R)) : (t(), s("span", x, d(a(r).label), 1))])) : m("", !0)], !0)]),
          _: 3
        }, 8, ["title", "balance", "balance-highlighted"])
      }
    }
  }),
  j = U(D, [
    ["__scopeId", "data-v-9f2df6ab"]
  ]);
export {
  j as _
};