import {
  _ as m
} from "./DP41n5CA.js";
import {
  _
} from "./C9G0qvpS.js";
import {
  d as u,
  aO as c,
  ay as l,
  u as b,
  J as d,
  a as f,
  c as k,
  k as o,
  x as n,
  e as r,
  f as v,
  j as T
} from "./DY2exbLM.js";
import "./CH41JZcV.js";
import "./CGU-V4Z6.js";
import "./CzU6ycYO.js";
import "./B2KMU1na.js";
import "./BmKSzVfD.js";
import "./DZbb5MAF.js";
import "./DBiaJsHb.js";
const y = {
    class: "pages-tribe-top page"
  },
  x = u({
    __name: "top",
    setup(g) {
      const a = c();
      return l().meta.back = (() => {
        const e = b().previousRoute.value;
        return () => d().push({
          name: e ? e.name : "tribe-join"
        })
      })(), (e, h) => {
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
  J = T(x, [
    ["__scopeId", "data-v-457281d1"]
  ]);
export {
  J as
  default
};