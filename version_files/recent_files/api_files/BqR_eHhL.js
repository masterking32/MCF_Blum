import {
  _ as m
} from "./CC3xq-Ho.js";
import {
  _
} from "./CDMsIzD-.js";
import {
  d as c,
  aT as u,
  a3 as l,
  ak as b,
  ad as d,
  o as f,
  c as k,
  b as o,
  D as n,
  e as r,
  A as T,
  f as v
} from "./BkRdN3CR.js";
import "./Cb0rqF0E.js";
import "./CXpnIQG3.js";
import "./B1ZgFDB-.js";
import "./RUxoXSp4.js";
import "./BLNiqiRW.js";
import "./C8d9BUww.js";
import "./DlesSYF7.js";
import "./r4eKNJIi.js";
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
          title: ("t" in e ? e.t : r(T))("tribes.top.title"),
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
  H = v(g, [
    ["__scopeId", "data-v-bbad13cd"]
  ]);
export {
  H as
  default
};