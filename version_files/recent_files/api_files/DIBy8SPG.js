import {
  a as y
} from "./DcvauEF-.js";
import {
  _ as v
} from "./B3WRsq2s.js";
import {
  d as B,
  o as a,
  c as m,
  F as P,
  q as U,
  b as i,
  M as k,
  f as g,
  k as $,
  y as D,
  z as s,
  j as E,
  $ as I,
  U as K,
  T as S,
  ab as A,
  e,
  a as l,
  m as C,
  t as N,
  C as f,
  D as c
} from "./BV1dF4C1.js";
import {
  _ as R
} from "./CbfalP1d.js";
import {
  _ as V
} from "./BHnODt1Y.js";
import "./fHHTF8bc.js";
const w = {
    class: "frens-blum-leaderboard-list"
  },
  j = {
    key: 0,
    class: "list"
  },
  q = {
    key: 1,
    class: "spinner"
  },
  z = B({
    __name: "List",
    props: {
      items: {},
      type: {}
    },
    setup(h) {
      return (o, n) => {
        const d = y,
          p = v;
        return a(), m("div", w, [o.items ? (a(), m("div", j, [(a(!0), m(P, null, U(o.items, t => (a(), k(d, {
          key: t.position,
          amount: t.amount,
          position: t.position,
          username: t.username,
          label: t.username,
          "avatar-url": t.avatarUrl,
          "points-postfix": o.type
        }, null, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"]))), 128))])) : (a(), m("div", q, [i(p)]))])
      }
    }
  }),
  G = g(z, [
    ["__scopeId", "data-v-5ee7d61a"]
  ]),
  H = {
    class: "frens-blum-leaderboard page"
  },
  O = {
    class: "header"
  },
  W = {
    class: "title"
  },
  Y = {
    class: "my-card"
  },
  J = B({
    __name: "leaderboards",
    setup(h) {
      const o = $().getters.mustGetUser,
        n = D(s.MP),
        d = E(() => [{
          key: s.MP,
          label: "Meme points"
        }, {
          key: s.BP,
          label: "Blum Points"
        }]),
        {
          itemsMap: p,
          fetchLeaderboard: t,
          my: u
        } = I();
      return K(n, t, {
        immediate: !0
      }), S().initHandler(() => {
        A().push({
          name: "frens"
        })
      }, "frens-leaderboards"), (_, r) => {
        const b = G,
          L = R,
          x = y,
          M = V,
          F = v;
        return a(), m("div", H, [e(u) ? (a(), m(P, {
          key: 0
        }, [l("div", O, [l("div", W, [r[1] || (r[1] = l("i", {
          class: "trophy"
        }, null, -1)), C(N(("t" in _ ? _.t : e(f))("frens.leaderboards.my.title")), 1)]), r[2] || (r[2] = l("div", {
          class: "badge"
        }, "Top-50", -1))]), i(L, {
          tabs: e(d),
          onUpdate: r[0] || (r[0] = T => n.value = T)
        }, {
          [e(s).MP]: c(() => [i(b, {
            items: e(p)[e(s).MP].items,
            type: e(s).MP
          }, null, 8, ["items", "type"])]),
          [e(s).BP]: c(() => [i(b, {
            items: e(p)[e(s).BP].items,
            type: e(s).BP
          }, null, 8, ["items", "type"])]),
          _: 2
        }, 1032, ["tabs"]), i(M, {
          "no-background": ""
        }, {
          default: c(() => [l("div", Y, [i(x, {
            amount: e(u)[e(n)].amount,
            position: e(u)[e(n)].position,
            username: e(o).username,
            label: ("t" in _ ? _.t : e(f))("frens.leaderboards.my.your_rating"),
            "avatar-url": e(o).avatarUrl,
            "points-postfix": e(n)
          }, null, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"])])]),
          _: 1
        })], 64)) : (a(), k(F, {
          key: 1
        }))])
      }
    }
  }),
  ae = g(J, [
    ["__scopeId", "data-v-322b31e9"]
  ]);
export {
  ae as
  default
};