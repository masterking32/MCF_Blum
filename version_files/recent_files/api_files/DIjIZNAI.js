import {
  _ as m
} from "./DLYQ22VP.js";
import {
  _
} from "./BArIqvoM.js";
import {
  d as c,
  aN as u,
  O as l,
  Y as b,
  ac as d,
  o as f,
  c as k,
  b as o,
  H as n,
  e as r,
  z as v,
  f as T
} from "./CCUb6gF6.js";
import "./DPiUs8-G.js";
import "./Bc0fWgU4.js";
import "./C3MsUfEm.js";
import "./BHJbYI8N.js";
import "./DaooZyK8.js";
import "./BTVG-t1p.js";
import "./CjgFeubD.js";
const y = {
    class: "pages-tribe-top page"
  },
  g = c({
    __name: "top",
    setup(h) {
      const a = u();
      return l().initHandler(() => {
        const e = b().previousRoute.value;
        d().push({
          name: e ? e.name : "tribe-join"
        })
      }, "tribe-top"), (e, x) => {
        const i = m,
          s = _;
        return f(), k("div", y, [o(s, {
          title: ("t" in e ? e.t : r(v))("tribes.top.title"),
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
  z = T(g, [
    ["__scopeId", "data-v-bbad13cd"]
  ]);
export {
  z as
  default
};