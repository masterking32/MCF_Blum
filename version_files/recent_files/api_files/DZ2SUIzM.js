import {
  d as c,
  cH as o,
  aM as u,
  bI as _,
  av as i,
  a as m,
  m as l,
  aR as p,
  J as t,
  ax as f,
  j as d
} from "./DwYsksKZ.js";
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
      }), (a, x) => {
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