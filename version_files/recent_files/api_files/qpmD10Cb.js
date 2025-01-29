import {
  _ as m
} from "./CjsBSygw.js";
import {
  _
} from "./C8-UzEZw.js";
import {
  d as c,
  aE as u,
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
} from "./7B743EeA.js";
import "./DXyxeoKD.js";
import "./CwQ_G74T.js";
import "./BZ9AKuBx.js";
import "./Cdr4DyLS.js";
import "./3JmzbcDL.js";
import "./DL3DqMFN.js";
import "./CT7akwlJ.js";
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
  H = T(g, [
    ["__scopeId", "data-v-457281d1"]
  ]);
export {
  H as
  default
};