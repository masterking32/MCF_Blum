import {
  _ as m
} from "./Mcux8vwz.js";
import {
  _
} from "./D18Wq_sC.js";
import {
  d as c,
  aK as u,
  U as b,
  ab as l,
  ai as d,
  o as f,
  c as k,
  b as o,
  D as n,
  e as r,
  C as v,
  f as T
} from "./BN1oUHf5.js";
import "./gJFEJNrw.js";
import "./p6-qFIyX.js";
import "./BECGWiBi.js";
import "./CVMcTLEF.js";
import "./B10iGYz9.js";
import "./DOjyroPl.js";
import "./CwIPcDCQ.js";
import "./BBwPzKah.js";
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