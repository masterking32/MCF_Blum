import {
  d as g,
  bk as h,
  j as o,
  T as k,
  G as l,
  R as d,
  o as w,
  J as x,
  af as M,
  e as b,
  aP as A,
  X as v,
  au as m,
  aw as p
} from "./Bxr-pE_l.js";
const P = g({
  inheritAttrs: !1,
  __name: "about",
  emits: ["share"],
  setup(C) {
    const a = h(),
      r = o(() => a.jettonShortname),
      {
        jettonTransactions: y,
        ...i
      } = H(),
      {
        jettonHolders: j,
        ...c
      } = J(),
      _ = () => {
        i.init(), c.init()
      },
      f = () => {
        i.destroy(), c.destroy()
      };
    _(), k(() => {
      f()
    });
    const T = o(() => ({
      ...a,
      jettonTransactions: y.value,
      jettonHolders: j.value
    }));

    function H() {
      const t = l(),
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

    function J() {
      const t = l(),
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
      return w(), x(s, M(b(T), {
        onShare: n[0] || (n[0] = u => t.$emit("share"))
      }), null, 16)
    }
  }
});
export {
  P as
  default
};