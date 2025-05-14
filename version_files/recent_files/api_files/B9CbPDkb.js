import {
  _
} from "./BvG36-ie.js";
import {
  d as v,
  j as n,
  d0 as k,
  T as b,
  o as t,
  N as p,
  D as l,
  a as c,
  t as d,
  w as f,
  c as s,
  G as m,
  aj as y,
  e as a,
  a0 as B,
  f as T
} from "./CeLf80nu.js";
import {
  g as w
} from "./BEFegR_9.js";
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
  j = ["src"],
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
      const o = e,
        r = n(() => w(o.rank)),
        u = n(() => k(o.user.perk));
      return (i, I) => {
        const g = _,
          h = b("img-loader");
        return t(), p(g, {
          title: e.user.username,
          balance: e.user.earnedPoints,
          "balance-highlighted": a(u),
          class: "pages-tribe-user-item"
        }, {
          image: l(() => [c("div", D, [c("div", N, d(e.user.letterAvatar), 1), e.user.avatarUrl ? f((t(), s("img", {
            key: 0,
            src: e.user.avatarUrl,
            alt: "Avatar"
          }, null, 8, R)), [
            [h]
          ]) : m("", !0)])]),
          right: l(() => [y(i.$slots, "right", {}, () => [e.rank ? (t(), s("div", U, [a(r).icon ? (t(), s("img", {
            key: 0,
            src: ("imgResolver" in i ? i.imgResolver : a(B))(a(r).icon),
            alt: "Medal image",
            class: "medal",
            width: "32",
            height: "32"
          }, null, 8, j)) : (t(), s("span", x, d(a(r).label), 1))])) : m("", !0)], !0)]),
          _: 3
        }, 8, ["title", "balance", "balance-highlighted"])
      }
    }
  }),
  H = T(C, [
    ["__scopeId", "data-v-65f585dd"]
  ]);
export {
  H as _
};