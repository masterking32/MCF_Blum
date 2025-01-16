import {
  _ as b
} from "./OoGkJBji.js";
import {
  _ as f
} from "./DUy43VA7.js";
import {
  d as k,
  cx as v,
  Q as x,
  X as _,
  aa as c,
  o as T,
  c as g,
  b as r,
  H as u,
  e as s,
  f as h
} from "./DU-EduvJ.js";
import "./4CwwXan7.js";
import "./CCX-F6Hl.js";
import "./CkmrTVeP.js";
import "./BcZCGZaW.js";
const R = {
    class: "pages-tribe-leaderboard page"
  },
  y = k({
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
        return T(), g("div", R, [r(l, {
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
  A = h(y, [
    ["__scopeId", "data-v-1ce5b660"]
  ]);
export {
  A as
  default
};