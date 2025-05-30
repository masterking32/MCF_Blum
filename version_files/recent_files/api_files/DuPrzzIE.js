import {
  _ as b
} from "./BA9QrOaD.js";
import {
  _ as f
} from "./DMGQUwmt.js";
import {
  d as k,
  d1 as v,
  a3 as x,
  aj as _,
  ao as u,
  o as g,
  c as T,
  b as o,
  C as c,
  e as s,
  f as h
} from "./D0ZwcU5P.js";
import "./BcPp25he.js";
import "./CX2Y_eN_.js";
import "./Br8V_sI3.js";
import "./CVcZ4oG3.js";
import "./KLpg1vdN.js";
const j = {
    class: "pages-tribe-leaderboard page"
  },
  y = k({
    __name: "leaderboard",
    setup(B) {
      const {
        usersLeaderboard: r
      } = v();
      return x().initHandler(() => {
        const e = _().previousRoute.value;
        return () => u().push({
          name: e ? e.name : "tribe-join"
        })
      }, "tribe-slug-leaderboard"), (() => {
        var a;
        const e = (a = _().previousRoute.value) == null ? void 0 : a.name;
        u().replace({
          name: e ?? "tribe-join"
        })
      })(), (e, a) => {
        var i, m, p;
        const n = b,
          l = f;
        return g(), T("div", j, [o(l, {
          title: (i = s(r)) == null ? void 0 : i.title,
          items: (m = s(r)) == null ? void 0 : m.items,
          "my-item": (p = s(r)) == null ? void 0 : p.me
        }, {
          "list-item": c(({
            item: t,
            idx: d
          }) => [o(n, {
            user: t,
            rank: d + 1
          }, null, 8, ["user", "rank"])]),
          "my-item": c(({
            item: t
          }) => [o(n, {
            user: t,
            rank: t.rank,
            "no-open": ""
          }, null, 8, ["user", "rank"])]),
          _: 1
        }, 8, ["title", "items", "my-item"])])
      }
    }
  }),
  E = h(y, [
    ["__scopeId", "data-v-37b96330"]
  ]);
export {
  E as
  default
};