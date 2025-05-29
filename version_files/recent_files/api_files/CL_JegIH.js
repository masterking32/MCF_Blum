import {
  a as P
} from "./Bx4Glo5c.js";
import {
  d as B,
  o as n,
  c as p,
  F as g,
  q as R,
  b as l,
  P as k,
  y as L,
  f as h,
  a5 as S,
  k as N,
  I as U,
  Q as a,
  j as C,
  ac as D,
  J as f,
  K,
  an as $,
  T as y,
  a3 as O,
  ao as w,
  e,
  a as d,
  m as V,
  t as Q,
  z as v,
  C as c
} from "./YXPW7IJg.js";
import {
  _ as Y
} from "./D-o3M6NN.js";
import {
  _ as j
} from "./YJ664n06.js";
import "./Vhp3onO4.js";
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
  H = B({
    __name: "List",
    props: {
      items: {},
      type: {}
    },
    setup(x) {
      return (r, m) => {
        const s = P,
          u = k;
        return n(), p("div", q, [r.items ? (n(), p("div", z, [(n(!0), p(g, null, R(r.items, t => (n(), L(s, {
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
  se = B({
    __name: "leaderboards",
    setup(x) {
      const r = S(),
        m = N().getters.mustGetUser,
        s = U(a.MP),
        u = C(() => [{
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
        } = D();
      return f(s, A, {
        immediate: !0
      }), f(s, o => {
        r.friendsInvite.leaderboardTypeSwitch({
          type: o
        })
      }), K(() => {
        const o = $("source", y) ?? y.NA;
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
          T = P,
          E = j,
          F = k;
        return n(), p("div", W, [e(_) ? (n(), p(g, {
          key: 0
        }, [d("div", X, [d("div", Z, [i[1] || (i[1] = d("i", {
          class: "trophy"
        }, null, -1)), V(Q(("t" in o ? o.t : e(v))("frens.leaderboards.my.title")), 1)]), i[2] || (i[2] = d("div", {
          class: "badge"
        }, "Top-50", -1))]), l(M, {
          tabs: e(u),
          onUpdate: i[0] || (i[0] = I => s.value = I)
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
        }, 1032, ["tabs"]), l(E, {
          "no-background": ""
        }, {
          default: c(() => [d("div", ee, [l(T, {
            amount: e(_)[e(s)].amount,
            position: e(_)[e(s)].position,
            username: e(m).username,
            label: ("t" in o ? o.t : e(v))("frens.leaderboards.my.your_rating"),
            "avatar-url": e(m).avatarUrl,
            "points-postfix": e(s)
          }, null, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"])])]),
          _: 1
        })], 64)) : (n(), L(F, {
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