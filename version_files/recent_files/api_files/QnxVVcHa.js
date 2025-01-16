import {
  _ as m
} from "./BaCw887Z.js";
import {
  _
} from "./DUy43VA7.js";
import {
  d as c,
  aC as u,
  Q as l,
  X as b,
  aa as d,
  o as f,
  c as k,
  b as o,
  H as n,
  e as r,
  z as v,
  f as T
} from "./DU-EduvJ.js";
import "./rJWjHzoQ.js";
import "./URqCk5Dd.js";
import "./B6qWK7UU.js";
import "./CkmrTVeP.js";
import "./4CwwXan7.js";
import "./CCX-F6Hl.js";
import "./BcZCGZaW.js";
const y = {
    class: "pages-tribe-top page"
  },
  g = c({
    __name: "top",
    setup(h) {
      const a = u();
      return l().meta.back = (() => {
        const e = b().previousRoute.value;
        return () => d().push({
          name: e ? e.name : "tribe-join"
        })
      })(), (e, x) => {
        const s = m,
          i = _;
        return f(), k("div", y, [o(i, {
          title: ("t" in e ? e.t : r(v))("tribes.top.title"),
          items: r(a).leaderboard.value,
          "my-item": r(a).tribeOrUndefined.value
        }, {
          "list-item": n(({
            item: t,
            idx: p
          }) => [o(s, {
            tribe: t,
            rank: p + 1
          }, null, 8, ["tribe", "rank"])]),
          "my-item": n(({
            item: t
          }) => [o(s, {
            tribe: t,
            rank: t.rank.tribe,
            "no-open": ""
          }, null, 8, ["tribe", "rank"])]),
          _: 1
        }, 8, ["title", "items", "my-item"])])
      }
    }
  }),
  H = T(g, [
    ["__scopeId", "data-v-457281d1"]
  ]);
export {
  H as
  default
};