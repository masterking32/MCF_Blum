import {
  _ as m
} from "./CSXgvjrr.js";
import {
  _
} from "./B_Ry-RZ5.js";
import {
  d as u,
  aO as c,
  ay as l,
  u as b,
  J as d,
  a as f,
  c as k,
  k as o,
  x as n,
  e as r,
  f as v,
  j as T
} from "./DK5KlhXV.js";
import "./BPZtSEvj.js";
import "./Dt2IKJNK.js";
import "./CYi1KByt.js";
import "./DAxbXggZ.js";
import "./y1kr4fnj.js";
import "./KWD-AQ_b.js";
import "./Bi1HGdYx.js";
const y = {
    class: "pages-tribe-top page"
  },
  x = u({
    __name: "top",
    setup(g) {
      const a = c();
      return l().meta.back = (() => {
        const e = b().previousRoute.value;
        return () => d().push({
          name: e ? e.name : "tribe-join"
        })
      })(), (e, h) => {
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
  J = T(x, [
    ["__scopeId", "data-v-457281d1"]
  ]);
export {
  J as
  default
};