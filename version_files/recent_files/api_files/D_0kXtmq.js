import {
  d as o,
  d5 as _,
  aU as c,
  b_ as u,
  U as i,
  o as l,
  M as m,
  a_ as f,
  ab as t,
  bl as p,
  f as b
} from "./IIG1dV1T.js";
const d = o({
    __name: "[...slug]",
    setup(v) {
      const {
        isMyTribe: s,
        chatName: n
      } = _(), e = c();
      return u(() => {
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