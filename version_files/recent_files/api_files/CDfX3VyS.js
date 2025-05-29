import {
  _ as m
} from "./C3Bj4fAA.js";
import {
  _
} from "./Ce0MFDDO.js";
import {
  d as c,
  aS as u,
  a3 as l,
  aj as b,
  ao as d,
  o as f,
  c as k,
  b as o,
  C as n,
  e as r,
  z as v,
  f as T
} from "./YXPW7IJg.js";
import "./pkJ__gQH.js";
import "./wrq-Nfvw.js";
import "./U_U11gs_.js";
import "./DJBDGv2L.js";
import "./BvsB4bTH.js";
import "./Vhp3onO4.js";
import "./Bbec260p.js";
import "./YJ664n06.js";
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
  H = T(g, [
    ["__scopeId", "data-v-bbad13cd"]
  ]);
export {
  H as
  default
};