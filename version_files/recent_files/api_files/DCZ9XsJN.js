import {
  _ as m
} from "./dvTwcLUG.js";
import {
  _
} from "./ChOXbl5o.js";
import {
  d as c,
  aQ as u,
  a3 as l,
  aj as b,
  ao as d,
  o as f,
  c as k,
  b as o,
  D as n,
  e as r,
  A as v,
  f as T
} from "./Q7ZkUOCs.js";
import "./Bebxa3Md.js";
import "./CwB0pGGs.js";
import "./Cy_jAjho.js";
import "./Xmv6NS9R.js";
import "./Mw76Z4Ld.js";
import "./fQL3VVTV.js";
import "./CYUWS0Ho.js";
import "./CcAYJJ_r.js";
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