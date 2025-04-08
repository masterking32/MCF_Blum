import {
  d as c,
  cZ as o,
  aS as u,
  c1 as _,
  T as i,
  o as l,
  M as m,
  aZ as f,
  aa as t,
  bi as p,
  f as d
} from "./DyOz13Ed.js";
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