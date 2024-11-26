import {
  _ as m
} from "./Ce-JO099.js";
import {
  _
} from "./DvyIetzE.js";
import {
  d as u,
  aM as c,
  ax as l,
  u as b,
  J as d,
  a as f,
  c as k,
  k as o,
  x as n,
  e as r,
  f as v,
  j as T
} from "./CRu0zQdy.js";
import "./BgfrJuae.js";
import "./l_4W2i0X.js";
import "./BTIJKEJn.js";
import "./BEEnBspW.js";
import "./CbWGs1sI.js";
import "./RLnLwB7S.js";
import "./cFDpmBI3.js";
const x = {
    class: "pages-tribe-top page"
  },
  y = u({
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
        return f(), k("div", x, [o(i, {
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
  J = T(y, [
    ["__scopeId", "data-v-457281d1"]
  ]);
export {
  J as
  default
};