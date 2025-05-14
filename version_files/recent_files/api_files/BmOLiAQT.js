import {
  _
} from "./CabMcpGT.js";
import {
  d as v,
  j as n,
  d1 as k,
  T as b,
  o as t,
  N as p,
  D as l,
  a as c,
  t as d,
  w as f,
  c as s,
  G as m,
  ak as y,
  e as a,
  a0 as B,
  f as T
} from "./DH7rD_-R.js";
import {
  g as w
} from "./BwD7d5Co.js";
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
      const o = e,
        r = n(() => w(o.rank)),
        u = n(() => k(o.user.perk));
      return (i, L) => {
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
          }, null, 8, x)) : (t(), s("span", C, d(a(r).label), 1))])) : m("", !0)], !0)]),
          _: 3
        }, 8, ["title", "balance", "balance-highlighted"])
      }
    }
  }),
  H = T(I, [
    ["__scopeId", "data-v-65f585dd"]
  ]);
export {
  H as _
};