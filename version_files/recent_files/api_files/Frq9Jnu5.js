import {
  _ as m
} from "./DFD-hFPh.js";
import {
  _
} from "./CaI69VWw.js";
import {
  d as c,
  aW as u,
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
} from "./BdCgqCrf.js";
import "./BvkEU_-s.js";
import "./DYzBA-7N.js";
import "./BdJt_Wsl.js";
import "./Bp0DWu3U.js";
import "./C6V-4a2L.js";
import "./DXeQEraT.js";
import "./B6pgQfjv.js";
import "./D83Ku9hI.js";
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