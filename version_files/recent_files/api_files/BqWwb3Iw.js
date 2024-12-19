import {
  _ as m
} from "./BUP5NKbD.js";
import {
  _
} from "./CnmjFFnT.js";
import {
  d as c,
  aK as u,
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
} from "./Bxr-pE_l.js";
import "./DEpHldGQ.js";
import "./DR5LWXji.js";
import "./BCRP8WJG.js";
import "./D2Mdceld.js";
import "./ASktFjkO.js";
import "./DxduM7D4.js";
import "./dJKOKjL2.js";
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