import {
  _ as m
} from "./xWlVql86.js";
import {
  _
} from "./DG24NI48.js";
import {
  d as c,
  aL as u,
  ap as l,
  y as b,
  ae as d,
  o as f,
  c as k,
  b as o,
  U as n,
  e as r,
  z as v,
  f as T
} from "./LwuWi-s8.js";
import "./DLPskANt.js";
import "./BTO4WSTJ.js";
import "./CdD28nwc.js";
import "./G8oGagOI.js";
import "./BVxNfpSD.js";
import "./Dl18cmc_.js";
import "./7MHgz_R1.js";
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
  A = T(g, [
    ["__scopeId", "data-v-457281d1"]
  ]);
export {
  A as
  default
};