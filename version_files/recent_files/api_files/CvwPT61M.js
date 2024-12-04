import {
  d as c,
  cG as o,
  aO as u,
  bV as _,
  av as i,
  a as m,
  m as l,
  aT as p,
  J as t,
  ay as f,
  j as d
} from "./DgYQtzR3.js";
const b = c({
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
          name: (a = f().name) == null ? void 0 : a.toString(),
          params: {
            slug: ""
          }
        })
      }), (a, T) => {
        const r = p;
        return m(), l(r)
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