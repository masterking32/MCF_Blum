import {
  _ as m
} from "./CYp9KuMZ.js";
import {
  _
} from "./C0GH-WYp.js";
import {
  d as c,
  aJ as u,
  U as b,
  ab as l,
  ai as d,
  o as f,
  c as k,
  b as o,
  D as n,
  e as r,
  C as v,
  f as T
} from "./DH7rD_-R.js";
import "./FLZJyHyG.js";
import "./DIr_vEmQ.js";
import "./BElaGXxL.js";
import "./CMPhozjB.js";
import "./CabMcpGT.js";
import "./BwD7d5Co.js";
import "./DZ01uE-w.js";
import "./Bta5jG-B.js";
const y = {
    class: "pages-tribe-top page"
  },
  g = c({
    __name: "top",
    setup(h) {
      const a = u();
      return b().initHandler(() => {
        const e = l().previousRoute.value;
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