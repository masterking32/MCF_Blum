import {
  _ as m
} from "./B3K-MV4w.js";
import {
  _
} from "./uCr1X6t5.js";
import {
  d as c,
  aT as u,
  a3 as l,
  ak as b,
  ad as d,
  o as f,
  c as k,
  b as o,
  D as n,
  e as r,
  A as T,
  f as v
} from "./Izfnm6Yj.js";
import "./Bi1R3AbC.js";
import "./B7IS95ja.js";
import "./Aafd6ceD.js";
import "./BuL6aMeF.js";
import "./rEgnYJ1s.js";
import "./B47J9EI2.js";
import "./BasvBnhh.js";
import "./DutP__Ts.js";
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
  H = v(g, [
    ["__scopeId", "data-v-bbad13cd"]
  ]);
export {
  H as
  default
};