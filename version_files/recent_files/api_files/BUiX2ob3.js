import {
  _ as m
} from "./DcPoXdfX.js";
import {
  _
} from "./B26nfuK6.js";
import {
  d as c,
  aS as u,
  R as l,
  a5 as b,
  aa as d,
  o as f,
  c as k,
  b as o,
  D as n,
  e as r,
  C as v,
  f as T
} from "./DAWpDGzr.js";
import "./ByHycD3f.js";
import "./Cxqc0I85.js";
import "./D_RvRn40.js";
import "./Bz1PjUsG.js";
import "./DYQq2dSV.js";
import "./CgTcorQG.js";
import "./CilWMcCN.js";
import "./p-EggjsI.js";
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