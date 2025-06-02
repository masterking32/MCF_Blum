import {
  _ as m
} from "./BZZGSL74.js";
import {
  _
} from "./oXkoXYfY.js";
import {
  d as c,
  aR as u,
  a3 as l,
  ak as b,
  ad as d,
  o as f,
  c as k,
  b as o,
  D as n,
  e as r,
  A as v,
  f as T
} from "./CTMy7kFf.js";
import "./D6xeNRIc.js";
import "./CY-1SgiA.js";
import "./CUGKEGaF.js";
import "./B61P6QRF.js";
import "./Bfh3En8u.js";
import "./DvdoWw9S.js";
import "./CvbcY9vk.js";
import "./rkMPStGi.js";
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