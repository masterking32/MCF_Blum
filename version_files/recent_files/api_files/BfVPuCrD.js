import {
  _ as m
} from "./C2UcBmZz.js";
import {
  _
} from "./BiI2j5xN.js";
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
} from "./CALhxlCG.js";
import "./C5rfxk7H.js";
import "./BV2uIhO9.js";
import "./CN26zeAi.js";
import "./h2QFrHlG.js";
import "./Cl4meCva.js";
import "./BsV9Qidx.js";
import "./Ch9aycJO.js";
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