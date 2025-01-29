import {
  d as o,
  cB as c,
  aE as u,
  bP as _,
  P as i,
  o as l,
  G as m,
  aJ as f,
  ad as t,
  Q as p,
  f as d
} from "./7B743EeA.js";
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