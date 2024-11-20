import {
  b8 as a,
  c4 as p,
  ao as R,
  b9 as u,
  F as d,
  av as g,
  K as v,
  bM as b,
  bb as m
} from "./ulDqqcK5.js";
const U = () => {
  const s = a(() => {}, "$JU3mIPe8CH"),
    l = a("$P1Vozdfyic"),
    n = p(),
    o = R(),
    y = async () => {
      const e = await v.getMemepadEligible();
      return e.err ? b() : m(e.data.eligible)
    }, r = a(() => u(y, e => s.value = e, 6e4), "$5jtlbZZRyA"), w = async () => {
      const e = await n.promise,
        i = await v.getJettonRate({
          amount: 1,
          currencyFromId: e
        });
      return i.err ? b() : m(i.data.amount)
    }, c = a(() => u(w, e => l.value = e, 6e4 * 2), "$JwHI1YwVmt");
  let t;
  return {
    _flow: {
      init: async () => {
        await r.value.exec(), t = g(() => {
          var e;
          return o.wallet.value.status === "connected" && s.value && ((e = o.wallet.value.balance) == null ? void 0 : e.tonBalance.currencyId)
        }, e => {
          e && n.resolve(e)
        }, {
          immediate: !0
        }), await c.value.exec()
      },
      destroy: () => {
        r.value.destroy(), c.value.destroy(), t == null || t()
      }
    },
    isEligible: d(() => s.value),
    tonUsdRate: d(() => l.value)
  }
};
export {
  U as u
};