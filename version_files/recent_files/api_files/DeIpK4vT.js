import {
  _ as b
} from "./Bpz7_dWs.js";
import {
  _ as k
} from "./CNNX8xvs.js";
import {
  d as f,
  cH as v,
  ay as x,
  u,
  J as _,
  a as T,
  c as g,
  k as o,
  x as c,
  e as s,
  j as h
} from "./4q655kMI.js";
import "./PHKy4fCD.js";
import "./BsUJtYZN.js";
import "./D6ooDtHS.js";
import "./SxfgLXAP.js";
const y = {
    class: "pages-tribe-leaderboard page"
  },
  R = f({
    __name: "leaderboard",
    setup(j) {
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
        return T(), g("div", y, [o(l, {
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
  A = h(R, [
    ["__scopeId", "data-v-1ce5b660"]
  ]);
export {
  A as
  default
};