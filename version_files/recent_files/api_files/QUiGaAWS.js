import {
  d as o,
  d3 as c,
  aT as _,
  bZ as u,
  K as i,
  o as l,
  z as m,
  a_ as d,
  ad as t,
  bc as f,
  f as p
} from "./Izfnm6Yj.js";
const b = o({
    __name: "[...slug]",
    setup(v) {
      const {
        isMyTribe: s,
        chatName: n
      } = c(), e = _();
      return u(() => {
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