import {
  _ as b
} from "./Bp8TX_8A.js";
import {
  _ as f
} from "./D18Wq_sC.js";
import {
  d as k,
  c$ as v,
  U as x,
  ab as _,
  ai as u,
  o as g,
  c as T,
  b as o,
  D as c,
  e as s,
  f as h
} from "./BN1oUHf5.js";
import "./B10iGYz9.js";
import "./DOjyroPl.js";
import "./CwIPcDCQ.js";
import "./CVMcTLEF.js";
import "./BBwPzKah.js";
const y = {
    class: "pages-tribe-leaderboard page"
  },
  B = k({
    __name: "leaderboard",
    setup(R) {
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
        return g(), T("div", y, [o(l, {
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
  A = h(B, [
    ["__scopeId", "data-v-37b96330"]
  ]);
export {
  A as
  default
};