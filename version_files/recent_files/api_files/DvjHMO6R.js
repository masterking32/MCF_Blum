import {
  d as o,
  d5 as c,
  aW as u,
  b$ as _,
  V as i,
  o as l,
  N as m,
  b0 as f,
  ae as t,
  bn as p,
  f as b
} from "./DmEY5NHF.js";
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
        return l(), m(r)
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