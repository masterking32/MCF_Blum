import {
  _
} from "./Cq3ukGPp.js";
import {
  d as v,
  j as n,
  d3 as k,
  a2 as b,
  o as t,
  y as p,
  C as l,
  a as c,
  t as d,
  w as f,
  c as s,
  E as m,
  aq as y,
  e as a,
  a8 as B,
  f as w
} from "./OTci2SnY.js";
import {
  g as C
} from "./C4t2OH8O.js";
const R = {
    class: "avatar"
  },
  T = {
    class: "letter"
  },
  U = ["src"],
  x = {
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
      const o = e,
        r = n(() => C(o.rank)),
        u = n(() => k(o.user.perk));
      return (i, N) => {
        const g = _,
          h = b("img-loader");
        return t(), p(g, {
          title: e.user.username,
          balance: e.user.earnedPoints,
          "balance-highlighted": a(u),
          class: "pages-tribe-user-item"
        }, {
          image: l(() => [c("div", R, [c("div", T, d(e.user.letterAvatar), 1), e.user.avatarUrl ? f((t(), s("img", {
            key: 0,
            src: e.user.avatarUrl,
            alt: "Avatar"
          }, null, 8, U)), [
            [h]
          ]) : m("", !0)])]),
          right: l(() => [y(i.$slots, "right", {}, () => [e.rank ? (t(), s("div", x, [a(r).icon ? (t(), s("img", {
            key: 0,
            src: ("imgResolver" in i ? i.imgResolver : a(B))(a(r).icon),
            alt: "Medal image",
            class: "medal",
            width: "32",
            height: "32"
          }, null, 8, D)) : (t(), s("span", I, d(a(r).label), 1))])) : m("", !0)], !0)]),
          _: 3
        }, 8, ["title", "balance", "balance-highlighted"])
      }
    }
  }),
  A = w(L, [
    ["__scopeId", "data-v-65f585dd"]
  ]);
export {
  A as _
};