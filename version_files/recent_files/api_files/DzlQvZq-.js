import {
  d as h,
  bp as J,
  F as o,
  o as b,
  r as u,
  a9 as d,
  a as x,
  m as k,
  ap as w,
  e as M,
  aS as S,
  K as v,
  bd as m,
  bc as p
} from "./Dq6b0IKe.js";
const I = h({
  inheritAttrs: !1,
  __name: "about",
  emits: ["share"],
  setup(A) {
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
    _(), b(() => {
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
      const s = S;
      return x(), k(s, w(M(H), {
        onShare: n[0] || (n[0] = l => t.$emit("share"))
      }), null, 16)
    }
  }
});
export {
  I as
  default
};