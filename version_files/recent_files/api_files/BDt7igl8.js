import {
  _ as b
} from "./DyyQ6OpX.js";
import {
  _ as f
} from "./BiSo3tNL.js";
import {
  d as k,
  cx as v,
  R as x,
  Y as _,
  ae as c,
  o as R,
  c as T,
  b as a,
  I as u,
  e as s,
  f as g
} from "./BrLCGJDp.js";
import "./BbMUJ-Yp.js";
import "./H8YZXeHx.js";
import "./BiY0FrNC.js";
import "./LPIV59H5.js";
const h = {
    class: "pages-tribe-leaderboard page"
  },
  y = k({
    __name: "leaderboard",
    setup(I) {
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
        return R(), T("div", h, [a(l, {
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
  A = g(y, [
    ["__scopeId", "data-v-1ce5b660"]
  ]);
export {
  A as
  default
};