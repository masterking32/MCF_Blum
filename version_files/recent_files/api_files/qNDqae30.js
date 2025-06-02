import {
  d as o,
  d2 as c,
  aR as u,
  bX as _,
  K as i,
  o as l,
  z as m,
  aY as d,
  ad as t,
  ba as f,
  f as p
} from "./CTMy7kFf.js";
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
          name: (a = f().name) == null ? void 0 : a.toString(),
          params: {
            slug: ""
          }
        })
      }), (a, T) => {
        const r = d;
        return l(), m(r)
      }
    }
  }),
  h = p(b, [
    ["__scopeId", "data-v-5718f2d1"]
  ]);
export {
  h as
  default
};