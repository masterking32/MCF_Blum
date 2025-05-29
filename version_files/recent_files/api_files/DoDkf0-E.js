import {
  d as o,
  d1 as c,
  aS as u,
  bW as _,
  J as i,
  o as l,
  y as m,
  aZ as f,
  ao as t,
  bb as p,
  f as b
} from "./OTci2SnY.js";
const d = o({
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
  g = b(d, [
    ["__scopeId", "data-v-5718f2d1"]
  ]);
export {
  g as
  default
};