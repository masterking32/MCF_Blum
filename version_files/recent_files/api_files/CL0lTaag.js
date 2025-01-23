import {
  _ as b
} from "./SZXLbls4.js";
import {
  _ as f
} from "./BQcbLV1o.js";
import {
  d as k,
  cy as v,
  Q as x,
  Z as _,
  ad as c,
  o as T,
  c as g,
  b as a,
  H as u,
  e as s,
  f as h
} from "./1IBRWEJd.js";
import "./sBfMXLf6.js";
import "./BT4XZSBr.js";
import "./3uhcJPaW.js";
import "./CbbJ0lG1.js";
const y = {
    class: "pages-tribe-leaderboard page"
  },
  R = k({
    __name: "leaderboard",
    setup(j) {
      const {
        usersLeaderboard: o
      } = v();
      return x().meta.back = (() => {
        const e = _().previousRoute.value;
        return () => c().push({
          name: e ? e.name : "tribe-join"
        })
      })(), (() => {
        var r;
        const e = (r = _().previousRoute.value) == null ? void 0 : r.name;
        c().replace({
          name: e ?? "tribe-join"
        })
      })(), (e, r) => {
        var m, i, p;
        const n = b,
          l = f;
        return T(), g("div", y, [a(l, {
          title: (m = s(o)) == null ? void 0 : m.title,
          items: (i = s(o)) == null ? void 0 : i.items,
          "my-item": (p = s(o)) == null ? void 0 : p.me
        }, {
          "list-item": u(({
            item: t,
            idx: d
          }) => [a(n, {
            user: t,
            rank: d + 1
          }, null, 8, ["user", "rank"])]),
          "my-item": u(({
            item: t
          }) => [a(n, {
            user: t,
            rank: t.rank,
            "no-open": ""
          }, null, 8, ["user", "rank"])]),
          _: 1
        }, 8, ["title", "items", "my-item"])])
      }
    }
  }),
  A = h(R, [
    ["__scopeId", "data-v-1ce5b660"]
  ]);
export {
  A as
  default
};