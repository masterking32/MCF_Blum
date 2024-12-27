import {
  _ as m
} from "./DUBoscZS.js";
import {
  _
} from "./BDYQ8R4E.js";
import {
  d as c,
  aF as u,
  R as l,
  Y as b,
  ae as d,
  o as f,
  c as k,
  b as o,
  I as n,
  e as r,
  z as v,
  f as T
} from "./DRqvt5pl.js";
import "./Cp651cne.js";
import "./DEjUTUb_.js";
import "./BpbNoRbL.js";
import "./2vZNcphP.js";
import "./DScZOzZe.js";
import "./Dxw4Lx_v.js";
import "./BvaVk8E1.js";
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
  F = T(g, [
    ["__scopeId", "data-v-457281d1"]
  ]);
export {
  F as
  default
};