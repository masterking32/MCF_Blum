import {
  _ as m
} from "./CitS2M4w.js";
import {
  _
} from "./ZGOl05Rc.js";
import {
  d as c,
  aX as u,
  U as l,
  a7 as b,
  ae as d,
  o as f,
  c as k,
  b as o,
  D as n,
  e as r,
  C as v,
  f as T
} from "./C8Db5TeO.js";
import "./yTxqil4Q.js";
import "./Dp-6v2sg.js";
import "./DFVzoMbb.js";
import "./DpJe3PZ1.js";
import "./Nb_mpPd8.js";
import "./BOohcz5l.js";
import "./De-p_-kZ.js";
import "./D0Q_M9gJ.js";
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
  F = T(g, [
    ["__scopeId", "data-v-bbad13cd"]
  ]);
export {
  F as
  default
};