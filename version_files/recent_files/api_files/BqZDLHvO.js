import {
  _ as m
} from "./DsSiAh3Y.js";
import {
  _
} from "./CNa_mdF3.js";
import {
  d as c,
  aD as u,
  R as l,
  Y as b,
  ac as d,
  o as f,
  c as k,
  b as o,
  I as n,
  e as r,
  z as v,
  f as T
} from "./DgHi0nY_.js";
import "./KVlekMUi.js";
import "./D9-UDNCI.js";
import "./Csi7SKKa.js";
import "./B0sM-KIU.js";
import "./Dmfl2et7.js";
import "./CVaIy80m.js";
import "./C3RIy83I.js";
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