import {
  _ as m
} from "./B6TH3Q34.js";
import {
  _
} from "./QwIssf9R.js";
import {
  d as c,
  aG as u,
  O as l,
  Y as b,
  ac as d,
  o as f,
  c as k,
  b as o,
  H as n,
  e as r,
  z as v,
  f as T
} from "./BHZlrYgM.js";
import "./CPT5VhOq.js";
import "./BdaVIVKX.js";
import "./CCE_6weE.js";
import "./wIBA-zAR.js";
import "./CWd5diHG.js";
import "./hBL-wj1m.js";
import "./q2ENi3bi.js";
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
  A = T(g, [
    ["__scopeId", "data-v-bbad13cd"]
  ]);
export {
  A as
  default
};