import {
  _ as m
} from "./BmbZR_Ib.js";
import {
  _
} from "./D_bULoz1.js";
import {
  d as c,
  aG as u,
  O as l,
  Y as b,
  ac as d,
  o as f,
  c as k,
  b as o,
  H as i,
  e as r,
  z as v,
  f as T
} from "./BLYd0JJf.js";
import "./DY4irPP2.js";
import "./Blgt4WWD.js";
import "./BRIkpOiE.js";
import "./FA3XeeEH.js";
import "./RBkKCEFA.js";
import "./D2LxVVCJ.js";
import "./Cdp9Dtz_.js";
const y = {
    class: "pages-tribe-top page"
  },
  g = c({
    __name: "top",
    setup(h) {
      const a = u();
      return l().initHandler(() => {
        const e = b().previousRoute.value;
        return () => d().push({
          name: e ? e.name : "tribe-join"
        })
      }, "tribe-top"), (e, x) => {
        const n = m,
          s = _;
        return f(), k("div", y, [o(s, {
          title: ("t" in e ? e.t : r(v))("tribes.top.title"),
          items: r(a).leaderboard.value,
          "my-item": r(a).tribeOrUndefined.value
        }, {
          "list-item": i(({
            item: t,
            idx: p
          }) => [o(n, {
            tribe: t,
            rank: p + 1
          }, null, 8, ["tribe", "rank"])]),
          "my-item": i(({
            item: t
          }) => [o(n, {
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
    ["__scopeId", "data-v-a584ae67"]
  ]);
export {
  A as
  default
};