import {
  _ as m
} from "./BK57hxY9.js";
import {
  _
} from "./CBLQAm71.js";
import {
  d as c,
  aS as u,
  a3 as l,
  aj as b,
  ao as d,
  o as f,
  c as k,
  b as o,
  C as n,
  e as r,
  z as v,
  f as T
} from "./i5EetP0C.js";
import "./CEBL4uqA.js";
import "./CQ8v_u6s.js";
import "./ByF7UOeu.js";
import "./D67_J7zO.js";
import "./D9xFdqOt.js";
import "./BzSZ9QAA.js";
import "./51uoD5Dq.js";
import "./FFrEhLZa.js";
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
  H = T(g, [
    ["__scopeId", "data-v-bbad13cd"]
  ]);
export {
  H as
  default
};