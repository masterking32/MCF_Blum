import {
  a as B
} from "./B6stuWGj.js";
import {
  d as P,
  o as n,
  c as p,
  F as g,
  q as S,
  b as l,
  Q as k,
  z as L,
  f as h,
  a5 as I,
  k as D,
  J as N,
  R as a,
  j as U,
  ac as K,
  K as f,
  L as $,
  ao as C,
  T as y,
  a3 as O,
  ad as w,
  e,
  a as d,
  m as V,
  t as Q,
  A as v,
  D as c
} from "./CTMy7kFf.js";
import {
  _ as Y
} from "./pZRytW70.js";
import {
  _ as j
} from "./rkMPStGi.js";
import "./DvdoWw9S.js";
const q = {
    class: "frens-blum-leaderboard-list"
  },
  z = {
    key: 0,
    class: "list"
  },
  G = {
    key: 1,
    class: "spinner"
  },
  H = P({
    __name: "List",
    props: {
      items: {},
      type: {}
    },
    setup(A) {
      return (r, m) => {
        const s = B,
          u = k;
        return n(), p("div", q, [r.items ? (n(), p("div", z, [(n(!0), p(g, null, S(r.items, t => (n(), L(s, {
          key: t.position,
          amount: t.amount,
          position: t.position,
          username: t.username,
          label: t.username,
          "avatar-url": t.avatarUrl,
          "points-postfix": r.type
        }, null, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"]))), 128))])) : (n(), p("div", G, [l(u)]))])
      }
    }
  }),
  J = h(H, [
    ["__scopeId", "data-v-5ee7d61a"]
  ]),
  W = {
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
  se = P({
    __name: "leaderboards",
    setup(A) {
      const r = I(),
        m = D().getters.mustGetUser,
        s = N(a.MP),
        u = U(() => [{
          key: a.MP,
          label: "Meme points"
        }, {
          key: a.BP,
          label: "Blum Points"
        }]),
        {
          itemsMap: t,
          fetchLeaderboard: x,
          my: _
        } = K();
      return f(s, x, {
        immediate: !0
      }), f(s, o => {
        r.friendsInvite.leaderboardTypeSwitch({
          type: o
        })
      }), $(() => {
        const o = C("source", y) ?? y.NA;
        r.friendsInvite.leaderboardPageOpen({
          source: o,
          type: s.value
        })
      }), O().initHandler(() => {
        w().push({
          name: "frens"
        })
      }, "frens-leaderboards"), (o, i) => {
        const b = J,
          M = Y,
          R = B,
          T = j,
          E = k;
        return n(), p("div", W, [e(_) ? (n(), p(g, {
          key: 0
        }, [d("div", X, [d("div", Z, [i[1] || (i[1] = d("i", {
          class: "trophy"
        }, null, -1)), V(Q(("t" in o ? o.t : e(v))("frens.leaderboards.my.title")), 1)]), i[2] || (i[2] = d("div", {
          class: "badge"
        }, "Top-50", -1))]), l(M, {
          tabs: e(u),
          onUpdate: i[0] || (i[0] = F => s.value = F)
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
        }, 1032, ["tabs"]), l(T, {
          "no-background": ""
        }, {
          default: c(() => [d("div", ee, [l(R, {
            amount: e(_)[e(s)].amount,
            position: e(_)[e(s)].position,
            username: e(m).username,
            label: ("t" in o ? o.t : e(v))("frens.leaderboards.my.your_rating"),
            "avatar-url": e(m).avatarUrl,
            "points-postfix": e(s)
          }, null, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"])])]),
          _: 1
        })], 64)) : (n(), L(E, {
          key: 1
        }))])
      }
    }
  }),
  ie = h(se, [
    ["__scopeId", "data-v-122ee8b4"]
  ]);
export {
  ie as
  default
};