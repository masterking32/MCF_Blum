import {
  _ as m
} from "./B67YjsIo.js";
import {
  _
} from "./D2zULEGO.js";
import {
  d as u,
  aM as c,
  ax as l,
  u as b,
  J as d,
  a as f,
  c as k,
  k as o,
  x as n,
  e as r,
  f as v,
  j as T
} from "./Brvr1E7g.js";
import "./BKqAlGRg.js";
import "./BHEQ3goZ.js";
import "./DIUw1uL7.js";
import "./CnTnF7Az.js";
import "./BpCLhLHY.js";
import "./DQ6dTWAO.js";
import "./CiIXj-OR.js";
const x = {
    class: "pages-tribe-top page"
  },
  y = u({
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
        return f(), k("div", x, [o(i, {
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
  J = T(y, [
    ["__scopeId", "data-v-457281d1"]
  ]);
export {
  J as
  default
};