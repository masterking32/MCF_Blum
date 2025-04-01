import {
  _ as m
} from "./CqUGTSfk.js";
import {
  _
} from "./DhsH5Mwq.js";
import {
  d as c,
  aS as u,
  R as l,
  a5 as b,
  aa as d,
  o as f,
  c as k,
  b as o,
  D as n,
  e as r,
  C as v,
  f as T
} from "./DrkX69Hr.js";
import "./DeCv66fb.js";
import "./BdsMdWi2.js";
import "./Dk04Bl2L.js";
import "./BvUqsACr.js";
import "./DAZAiQT8.js";
import "./CU-KXbav.js";
import "./Dpq9MO63.js";
import "./BWMNV9t6.js";
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