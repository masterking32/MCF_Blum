import {
  _ as b
} from "./C2SlmGbl.js";
import {
  _ as f
} from "./CnmjFFnT.js";
import {
  d as k,
  cE as v,
  ap as x,
  y as _,
  ae as c,
  o as T,
  c as g,
  b as r,
  U as u,
  e as s,
  f as h
} from "./Bxr-pE_l.js";
import "./ASktFjkO.js";
import "./DxduM7D4.js";
import "./D2Mdceld.js";
import "./dJKOKjL2.js";
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
  U = h(R, [
    ["__scopeId", "data-v-1ce5b660"]
  ]);
export {
  U as
  default
};