import {
  _ as m
} from "./Cd0oDJSH.js";
import {
  _
} from "./BBNJw5y9.js";
import {
  d as c,
  aI as u,
  U as b,
  ab as l,
  ah as d,
  o as f,
  c as k,
  b as o,
  D as n,
  e as r,
  C as v,
  f as T
} from "./CeLf80nu.js";
import "./NInO1FDJ.js";
import "./CSbJ1JwP.js";
import "./CGKXGRhX.js";
import "./DO9xrrcf.js";
import "./BvG36-ie.js";
import "./BEFegR_9.js";
import "./BbwUYloX.js";
import "./BSgRs94G.js";
const h = {
    class: "pages-tribe-top page"
  },
  y = c({
    __name: "top",
    setup(g) {
      const a = u();
      return b().initHandler(() => {
        const e = l().previousRoute.value;
        d().push({
          name: e ? e.name : "tribe-join"
        })
      }, "tribe-top"), (e, x) => {
        const i = m,
          s = _;
        return f(), k("div", h, [o(s, {
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
  F = T(y, [
    ["__scopeId", "data-v-bbad13cd"]
  ]);
export {
  F as
  default
};