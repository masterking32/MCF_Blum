import {
  _ as b
} from "./DIfhkoNt.js";
import {
  _ as f
} from "./D6qEWNHz.js";
import {
  d as k,
  cF as v,
  ap as x,
  y as _,
  ae as c,
  o as T,
  c as g,
  b as r,
  U as u,
  e as s,
  f as h
} from "./Doz8XXSF.js";
import "./CRfVlIij.js";
import "./D-GslJ5e.js";
import "./hzm3Cl5N.js";
import "./Ca5vGtTs.js";
const y = {
    class: "pages-tribe-leaderboard page"
  },
  R = k({
    __name: "leaderboard",
    setup(j) {
      const {
        usersLeaderboard: a
      } = v();
      return x().meta.back = (() => {
        const e = _().previousRoute.value;
        return () => c().push({
          name: e ? e.name : "tribe-join"
        })
      })(), (() => {
        var o;
        const e = (o = _().previousRoute.value) == null ? void 0 : o.name;
        c().replace({
          name: e ?? "tribe-join"
        })
      })(), (e, o) => {
        var m, i, p;
        const n = b,
          l = f;
        return T(), g("div", y, [r(l, {
          title: (m = s(a)) == null ? void 0 : m.title,
          items: (i = s(a)) == null ? void 0 : i.items,
          "my-item": (p = s(a)) == null ? void 0 : p.me
        }, {
          "list-item": u(({
            item: t,
            idx: d
          }) => [r(n, {
            user: t,
            rank: d + 1
          }, null, 8, ["user", "rank"])]),
          "my-item": u(({
            item: t
          }) => [r(n, {
            user: t,
            rank: t.rank,
            "no-open": ""
          }, null, 8, ["user", "rank"])]),
          _: 1
        }, 8, ["title", "items", "my-item"])])
      }
    }
  }),
  w = h(R, [
    ["__scopeId", "data-v-1ce5b660"]
  ]);
export {
  w as
  default
};