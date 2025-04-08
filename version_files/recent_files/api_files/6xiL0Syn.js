import {
  _ as b
} from "./DurkZplL.js";
import {
  _ as f
} from "./meBDOt8j.js";
import {
  d as k,
  cZ as v,
  R as x,
  a5 as _,
  aa as u,
  o as g,
  c as T,
  b as o,
  D as c,
  e as s,
  f as h
} from "./DyOz13Ed.js";
import "./CcTEf0QT.js";
import "./D3YZ9_M3.js";
import "./BklVPejE.js";
import "./iSQGxsJV.js";
import "./B-5v1gtj.js";
const R = {
    class: "pages-tribe-leaderboard page"
  },
  y = k({
    __name: "leaderboard",
    setup(B) {
      const {
        usersLeaderboard: r
      } = v();
      return x().initHandler(() => {
        const e = _().previousRoute.value;
        return () => u().push({
          name: e ? e.name : "tribe-join"
        })
      }, "tribe-slug-leaderboard"), (() => {
        var a;
        const e = (a = _().previousRoute.value) == null ? void 0 : a.name;
        u().replace({
          name: e ?? "tribe-join"
        })
      })(), (e, a) => {
        var i, m, p;
        const n = b,
          l = f;
        return g(), T("div", R, [o(l, {
          title: (i = s(r)) == null ? void 0 : i.title,
          items: (m = s(r)) == null ? void 0 : m.items,
          "my-item": (p = s(r)) == null ? void 0 : p.me
        }, {
          "list-item": c(({
            item: t,
            idx: d
          }) => [o(n, {
            user: t,
            rank: d + 1
          }, null, 8, ["user", "rank"])]),
          "my-item": c(({
            item: t
          }) => [o(n, {
            user: t,
            rank: t.rank,
            "no-open": ""
          }, null, 8, ["user", "rank"])]),
          _: 1
        }, 8, ["title", "items", "my-item"])])
      }
    }
  }),
  D = h(y, [
    ["__scopeId", "data-v-37b96330"]
  ]);
export {
  D as
  default
};