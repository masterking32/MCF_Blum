import {
  _ as b
} from "./VzDBOy_t.js";
import {
  _ as f
} from "./QwIssf9R.js";
import {
  d as k,
  cE as v,
  O as x,
  Y as _,
  ac as c,
  o as g,
  c as T,
  b as o,
  H as u,
  e as s,
  f as h
} from "./BHZlrYgM.js";
import "./CWd5diHG.js";
import "./hBL-wj1m.js";
import "./wIBA-zAR.js";
import "./q2ENi3bi.js";
const y = {
    class: "pages-tribe-leaderboard page"
  },
  B = k({
    __name: "leaderboard",
    setup(R) {
      const {
        usersLeaderboard: r
      } = v();
      return x().initHandler(() => {
        const e = _().previousRoute.value;
        return () => c().push({
          name: e ? e.name : "tribe-join"
        })
      }, "tribe-slug-leaderboard"), (() => {
        var a;
        const e = (a = _().previousRoute.value) == null ? void 0 : a.name;
        c().replace({
          name: e ?? "tribe-join"
        })
      })(), (e, a) => {
        var i, m, p;
        const n = b,
          l = f;
        return g(), T("div", y, [o(l, {
          title: (i = s(r)) == null ? void 0 : i.title,
          items: (m = s(r)) == null ? void 0 : m.items,
          "my-item": (p = s(r)) == null ? void 0 : p.me
        }, {
          "list-item": u(({
            item: t,
            idx: d
          }) => [o(n, {
            user: t,
            rank: d + 1
          }, null, 8, ["user", "rank"])]),
          "my-item": u(({
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
  P = h(B, [
    ["__scopeId", "data-v-37b96330"]
  ]);
export {
  P as
  default
};