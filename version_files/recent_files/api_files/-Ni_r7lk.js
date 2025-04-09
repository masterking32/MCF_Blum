import {
  _
} from "./CEG1w-Vi.js";
import {
  d as v,
  j as n,
  d7 as k,
  R as b,
  o as t,
  M as p,
  D as l,
  a as c,
  t as d,
  w as f,
  c as s,
  E as m,
  ad as y,
  e as a,
  W as B,
  f as R
} from "./IIG1dV1T.js";
import {
  g as w
} from "./sTSqYQ0f.js";
const D = {
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
  C = ["src"],
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
        r = n(() => w(o.rank)),
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
          image: l(() => [c("div", D, [c("div", T, d(e.user.letterAvatar), 1), e.user.avatarUrl ? f((t(), s("img", {
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
          }, null, 8, C)) : (t(), s("span", I, d(a(r).label), 1))])) : m("", !0)], !0)]),
          _: 3
        }, 8, ["title", "balance", "balance-highlighted"])
      }
    }
  }),
  E = R(L, [
    ["__scopeId", "data-v-65f585dd"]
  ]);
export {
  E as _
};