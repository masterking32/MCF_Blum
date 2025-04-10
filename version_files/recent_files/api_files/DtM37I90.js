import {
  _ as m
} from "./DaEZ2q4n.js";
import {
  _
} from "./8n7kIGRj.js";
import {
  d as c,
  aV as u,
  T as b,
  a6 as l,
  ab as d,
  o as f,
  c as k,
  b as o,
  D as n,
  e as r,
  C as T,
  f as v
} from "./DraiJYMw.js";
import "./DSc564Vg.js";
import "./BTaSvHYO.js";
import "./CP-kCV3i.js";
import "./BA_9MPHj.js";
import "./Ghdbj2Aq.js";
import "./Dh4-caQq.js";
import "./DnV1fxU3.js";
import "./DxQDK-K5.js";
const y = {
    class: "pages-tribe-top page"
  },
  g = c({
    __name: "top",
    setup(h) {
      const a = u();
      return b().initHandler(() => {
        const e = l().previousRoute.value;
        d().push({
          name: e ? e.name : "tribe-join"
        })
      }, "tribe-top"), (e, x) => {
        const i = m,
          s = _;
        return f(), k("div", y, [o(s, {
          title: ("t" in e ? e.t : r(T))("tribes.top.title"),
          items: r(a).leaderboard.value,
          "my-item": r(a).tribeOrUndefined.value
        }, {
          "list-item": n(({
            item: t,
            idx: p
          }) => [o(i, {
            tribe: t,
            rank: p + 1
          }, null, 8, ["tribe", "rank"])]),
          "my-item": n(({
            item: t
          }) => [o(i, {
            tribe: t,
            rank: t.rank.tribe,
            "no-open": ""
          }, null, 8, ["tribe", "rank"])]),
          _: 1
        }, 8, ["title", "items", "my-item"])])
      }
    }
  }),
  F = v(g, [
    ["__scopeId", "data-v-bbad13cd"]
  ]);
export {
  F as
  default
};