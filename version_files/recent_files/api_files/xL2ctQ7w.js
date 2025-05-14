import {
  a as B
} from "./RRTjNSod.js";
import {
  d as P,
  o as n,
  c as p,
  F as g,
  q as T,
  b as l,
  ad as k,
  N as h,
  f as L,
  X as I,
  k as N,
  y as U,
  z as a,
  j as D,
  a4 as C,
  Z as f,
  ag as $,
  ah as K,
  E as y,
  U as O,
  ai as w,
  e,
  a as d,
  m as V,
  t as Y,
  C as v,
  D as c
} from "./DH7rD_-R.js";
import {
  _ as j
} from "./BcunE9sL.js";
import {
  _ as q
} from "./Bta5jG-B.js";
import "./BwD7d5Co.js";
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
  Q = P({
    __name: "List",
    props: {
      items: {},
      type: {}
    },
    setup(x) {
      return (r, m) => {
        const s = B,
          u = k;
        return n(), p("div", z, [r.items ? (n(), p("div", G, [(n(!0), p(g, null, T(r.items, t => (n(), h(s, {
          key: t.position,
          amount: t.amount,
          position: t.position,
          username: t.username,
          label: t.username,
          "avatar-url": t.avatarUrl,
          "points-postfix": r.type
        }, null, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"]))), 128))])) : (n(), p("div", H, [l(u)]))])
      }
    }
  }),
  W = L(Q, [
    ["__scopeId", "data-v-5ee7d61a"]
  ]),
  X = {
    class: "frens-blum-leaderboard page"
  },
  Z = {
    class: "header"
  },
  J = {
    class: "title"
  },
  ee = {
    class: "my-card"
  },
  se = P({
    __name: "leaderboards",
    setup(x) {
      const r = I(),
        m = N().getters.mustGetUser,
        s = U(a.MP),
        u = D(() => [{
          key: a.MP,
          label: "Meme points"
        }, {
          key: a.BP,
          label: "Blum Points"
        }]),
        {
          itemsMap: t,
          fetchLeaderboard: A,
          my: _
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
        w().push({
          name: "frens"
        })
      }, "frens-leaderboards"), (o, i) => {
        const b = W,
          E = j,
          M = B,
          F = q,
          R = k;
        return n(), p("div", X, [e(_) ? (n(), p(g, {
          key: 0
        }, [d("div", Z, [d("div", J, [i[1] || (i[1] = d("i", {
          class: "trophy"
        }, null, -1)), V(Y(("t" in o ? o.t : e(v))("frens.leaderboards.my.title")), 1)]), i[2] || (i[2] = d("div", {
          class: "badge"
        }, "Top-50", -1))]), l(E, {
          tabs: e(u),
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
            amount: e(_)[e(s)].amount,
            position: e(_)[e(s)].position,
            username: e(m).username,
            label: ("t" in o ? o.t : e(v))("frens.leaderboards.my.your_rating"),
            "avatar-url": e(m).avatarUrl,
            "points-postfix": e(s)
          }, null, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"])])]),
          _: 1
        })], 64)) : (n(), h(R, {
          key: 1
        }))])
      }
    }
  }),
  ie = L(se, [
    ["__scopeId", "data-v-122ee8b4"]
  ]);
export {
  ie as
  default
};