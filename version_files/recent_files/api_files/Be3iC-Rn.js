import {
  d as o,
  d6 as c,
  aX as u,
  b$ as _,
  V as i,
  o as m,
  N as l,
  b0 as f,
  ae as t,
  bm as p,
  f as b
} from "./C8Db5TeO.js";
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
      }), (a, T) => {
        const r = f;
        return m(), l(r)
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