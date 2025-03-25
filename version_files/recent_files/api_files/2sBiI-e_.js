import {
  d as c,
  cW as o,
  aN as _,
  b_ as u,
  aM as i,
  o as l,
  G as m,
  aU as f,
  ac as t,
  bd as p,
  f as d
} from "./CwaQmw2d.js";
const b = c({
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
      }), (a, T) => {
        const r = f;
        return l(), m(r)
      }
    }
  }),
  h = d(b, [
    ["__scopeId", "data-v-5718f2d1"]
  ]);
export {
  h as
  default
};