import {
  d as c,
  c_ as o,
  aI as _,
  bS as u,
  Z as i,
  o as l,
  N as m,
  aP as f,
  ah as t,
  bc as p,
  f as b
} from "./CeLf80nu.js";
const d = c({
    __name: "[...slug]",
    setup(v) {
      const {
        isMyTribe: s,
        chatName: n
      } = o(), e = _();
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
      }), (a, h) => {
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