import {
  _ as b
} from "./ddplxDaZ.js";
import {
  _ as k
} from "./q34SMxnp.js";
import {
  d as f,
  cI as v,
  ax as x,
  u,
  J as _,
  a as T,
  c as g,
  k as o,
  x as c,
  e as s,
  j as h
} from "./TkfSaITf.js";
import "./C8c4lAT6.js";
import "./D9u0z81y.js";
import "./Clf4VBun.js";
import "./BpEFwugf.js";
const R = {
    class: "pages-tribe-leaderboard page"
  },
  j = f({
    __name: "leaderboard",
    setup(y) {
      const {
        usersLeaderboard: a
      } = v();
      return x().meta.back = (() => {
        const e = u().previousRoute.value;
        return () => _().push({
          name: e ? e.name : "tribe-join"
        })
      })(), (() => {
        var r;
        const e = (r = u().previousRoute.value) == null ? void 0 : r.name;
        _().replace({
          name: e ?? "tribe-join"
        })
      })(), (e, r) => {
        var m, i, p;
        const n = b,
          l = k;
        return T(), g("div", R, [o(l, {
          title: (m = s(a)) == null ? void 0 : m.title,
          items: (i = s(a)) == null ? void 0 : i.items,
          "my-item": (p = s(a)) == null ? void 0 : p.me
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
  A = h(j, [
    ["__scopeId", "data-v-1ce5b660"]
  ]);
export {
  A as
  default
};