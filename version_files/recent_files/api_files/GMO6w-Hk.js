import {
  d as o,
  cE as c,
  aK as u,
  bP as _,
  am as i,
  o as m,
  J as l,
  aP as p,
  ae as t,
  ap as f,
  f as d
} from "./Bxr-pE_l.js";
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
        const r = p;
        return m(), l(r)
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