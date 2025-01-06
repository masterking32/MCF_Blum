import {
  _ as b
} from "./h9qgucTf.js";
import {
  _ as f
} from "./D-hYExW0.js";
import {
  d as v,
  cv as k,
  R as x,
  Y as c,
  ac as _,
  o as R,
  c as T,
  b as a,
  I as u,
  e as s,
  f as g
} from "./CZHgEWRg.js";
import "./BCiLhOz2.js";
import "./QdFRFfhU.js";
import "./DbRNdSO4.js";
import "./Buw3Wxes.js";
const h = {
    class: "pages-tribe-leaderboard page"
  },
  y = v({
    __name: "leaderboard",
    setup(I) {
      const {
        usersLeaderboard: o
      } = k();
      return x().meta.back = (() => {
        const e = c().previousRoute.value;
        return () => _().push({
          name: e ? e.name : "tribe-join"
        })
      })(), (() => {
        var r;
        const e = (r = c().previousRoute.value) == null ? void 0 : r.name;
        _().replace({
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