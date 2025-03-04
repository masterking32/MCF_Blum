import {
  d as c,
  cE as o,
  aG as u,
  bS as _,
  aF as i,
  o as l,
  G as m,
  aN as f,
  ac as t,
  b8 as p,
  f as b
} from "./BFi5NhLo.js";
const d = c({
    __name: "[...slug]",
    setup(v) {
      const {
        isMyTribe: s,
        chatName: n
      } = o(), e = u();
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
      }), (a, T) => {
        const r = f;
        return l(), m(r)
      }
    }
  }),
  h = b(d, [
    ["__scopeId", "data-v-5718f2d1"]
  ]);
export {
  h as
  default
};