import {
  _ as m
} from "./BuGSA4kD.js";
import {
  _
} from "./BQcbLV1o.js";
import {
  d as c,
  aD as u,
  Q as l,
  Z as b,
  ad as d,
  o as f,
  c as k,
  b as o,
  H as n,
  e as r,
  z as v,
  f as T
} from "./1IBRWEJd.js";
import "./CHXA1wk2.js";
import "./BvO_71jy.js";
import "./DsaUp77G.js";
import "./3uhcJPaW.js";
import "./sBfMXLf6.js";
import "./BT4XZSBr.js";
import "./CbbJ0lG1.js";
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
  E = T(g, [
    ["__scopeId", "data-v-457281d1"]
  ]);
export {
  E as
  default
};