import {
  d as o,
  cy as c,
  aD as u,
  bN as _,
  P as i,
  o as l,
  G as m,
  aH as f,
  ad as t,
  Q as p,
  f as d
} from "./BKd9vpCm.js";
const b = o({
    __name: "[...slug]",
    setup(v) {
      const {
        isMyTribe: s,
        chatName: n
      } = c(), e = u();
      return _(() => {
        s.value && e.myTribeRes.value && !e.tribeOrUndefined.value && t().replace({
          name: "tribe-join"
        })
      }), i(() => e.myTribeRes.value, () => {
        var a;
        !s.value && e.tribeOrUndefined.value && e.tribeOrUndefined.value.chatName === n.value && t().replace({
          name: (a = p().name) == null ? void 0 : a.toString(),
          params: {
            slug: ""
          }
        })
      }), (a, y) => {
        const r = f;
        return l(), m(r)
      }
    }
  }),
  g = d(b, [
    ["__scopeId", "data-v-5718f2d1"]
  ]);
export {
  g as
  default
};