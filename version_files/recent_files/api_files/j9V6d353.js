import {
  a as B
} from "./DylgxzgJ.js";
import {
  _ as P
} from "./CticNpBB.js";
import {
  d as g,
  o as n,
  c as p,
  F as k,
  q as T,
  b as l,
  N as L,
  f as h,
  a9 as I,
  k as N,
  y as U,
  z as a,
  j as D,
  a0 as C,
  V as f,
  ac as $,
  ad as K,
  E as y,
  U as O,
  ae as V,
  e,
  a as d,
  m as w,
  t as Y,
  C as v,
  D as c
} from "./Ces7X5md.js";
import {
  _ as j
} from "./BMFxCPG5.js";
import {
  _ as q
} from "./D4d-YLQF.js";
import "./CS4spNrH.js";
const z = {
    class: "frens-blum-leaderboard-list"
  },
  G = {
    key: 0,
    class: "list"
  },
  H = {
    key: 1,
    class: "spinner"
  },
  Q = g({
    __name: "List",
    props: {
      items: {},
      type: {}
    },
    setup(x) {
      return (r, m) => {
        const s = B,
          _ = P;
        return n(), p("div", z, [r.items ? (n(), p("div", G, [(n(!0), p(k, null, T(r.items, t => (n(), L(s, {
          key: t.position,
          amount: t.amount,
          position: t.position,
          username: t.username,
          label: t.username,
          "avatar-url": t.avatarUrl,
          "points-postfix": r.type
        }, null, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"]))), 128))])) : (n(), p("div", H, [l(_)]))])
      }
    }
  }),
  W = h(Q, [
    ["__scopeId", "data-v-5ee7d61a"]
  ]),
  J = {
    class: "frens-blum-leaderboard page"
  },
  X = {
    class: "header"
  },
  Z = {
    class: "title"
  },
  ee = {
    class: "my-card"
  },
  se = g({
    __name: "leaderboards",
    setup(x) {
      const r = I(),
        m = N().getters.mustGetUser,
        s = U(a.MP),
        _ = D(() => [{
          key: a.MP,
          label: "Meme points"
        }, {
          key: a.BP,
          label: "Blum Points"
        }]),
        {
          itemsMap: t,
          fetchLeaderboard: A,
          my: u
        } = C();
      return f(s, A, {
        immediate: !0
      }), f(s, o => {
        r.friendsInvite.leaderboardTypeSwitch({
          type: o
        })
      }), $(() => {
        const o = K("source", y) ?? y.NA;
        r.friendsInvite.leaderboardPageOpen({
          source: o,
          type: s.value
        })
      }), O().initHandler(() => {
        V().push({
          name: "frens"
        })
      }, "frens-leaderboards"), (o, i) => {
        const b = W,
          E = j,
          M = B,
          F = q,
          R = P;
        return n(), p("div", J, [e(u) ? (n(), p(k, {
          key: 0
        }, [d("div", X, [d("div", Z, [i[1] || (i[1] = d("i", {
          class: "trophy"
        }, null, -1)), w(Y(("t" in o ? o.t : e(v))("frens.leaderboards.my.title")), 1)]), i[2] || (i[2] = d("div", {
          class: "badge"
        }, "Top-50", -1))]), l(E, {
          tabs: e(_),
          onUpdate: i[0] || (i[0] = S => s.value = S)
        }, {
          [e(a).MP]: c(() => [l(b, {
            items: e(t)[e(a).MP].items,
            type: e(a).MP
          }, null, 8, ["items", "type"])]),
          [e(a).BP]: c(() => [l(b, {
            items: e(t)[e(a).BP].items,
            type: e(a).BP
          }, null, 8, ["items", "type"])]),
          _: 2
        }, 1032, ["tabs"]), l(F, {
          "no-background": ""
        }, {
          default: c(() => [d("div", ee, [l(M, {
            amount: e(u)[e(s)].amount,
            position: e(u)[e(s)].position,
            username: e(m).username,
            label: ("t" in o ? o.t : e(v))("frens.leaderboards.my.your_rating"),
            "avatar-url": e(m).avatarUrl,
            "points-postfix": e(s)
          }, null, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"])])]),
          _: 1
        })], 64)) : (n(), L(R, {
          key: 1
        }))])
      }
    }
  }),
  le = h(se, [
    ["__scopeId", "data-v-122ee8b4"]
  ]);
export {
  le as
  default
};