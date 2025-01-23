import {
  d as h,
  bd as J,
  j as o,
  U as x,
  K as u,
  R as d,
  o as k,
  G as w,
  af as M,
  e as b,
  aH as A,
  X as v,
  Y as m,
  a2 as p
} from "./1IBRWEJd.js";
const R = h({
  inheritAttrs: !1,
  __name: "about",
  emits: ["share"],
  setup(C) {
    const a = J(),
      r = o(() => a.jettonShortname),
      {
        jettonTransactions: y,
        ...i
      } = T(),
      {
        jettonHolders: j,
        ...c
      } = g(),
      _ = () => {
        i.init(), c.init()
      },
      f = () => {
        i.destroy(), c.destroy()
      };
    _(), x(() => {
      f()
    });
    const H = o(() => ({
      ...a,
      jettonTransactions: y.value,
      jettonHolders: j.value
    }));

    function T() {
      const t = u(),
        n = d(async () => {
          const e = await v.getMemepadJettonTransactions(r.value);
          return m((p(e) ? e.data : t.value) || t.value)
        }, e => {
          t.value = e
        }, 5e3);
      return {
        init: async () => await n.exec(),
        destroy: () => {
          n.destroy(), t.value = void 0
        },
        jettonTransactions: o(() => t.value)
      }
    }

    function g() {
      const t = u(),
        n = d(async () => {
          const e = await v.getMemepadJettonHolders(r.value);
          return m((p(e) ? e.data : t.value) || t.value)
        }, e => {
          t.value = e
        }, 5e3);
      return {
        init: async () => await n.exec(),
        destroy: () => {
          n.destroy(), t.value = void 0
        },
        jettonHolders: o(() => t.value)
      }
    }
    return (t, n) => {
      const s = A;
      return k(), w(s, M(b(H), {
        onShare: n[0] || (n[0] = l => t.$emit("share"))
      }), null, 16)
    }
  }
});
export {
  R as
  default
};