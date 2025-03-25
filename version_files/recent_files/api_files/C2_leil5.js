import {
  _ as m
} from "./k9FwfbdI.js";
import {
  _
} from "./6MrluKPj.js";
import {
  d as c,
  aN as u,
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
} from "./CwaQmw2d.js";
import "./CnMXTuUH.js";
import "./VLpnNsH5.js";
import "./CreAz3bf.js";
import "./CXzcKdcd.js";
import "./BajWm1ba.js";
import "./CBxBzP6o.js";
import "./DSO2vn9M.js";
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
  z = T(g, [
    ["__scopeId", "data-v-bbad13cd"]
  ]);
export {
  z as
  default
};