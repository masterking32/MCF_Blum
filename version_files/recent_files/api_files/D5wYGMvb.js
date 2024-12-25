import {
  d as g,
  bl as h,
  j as o,
  T as w,
  G as u,
  R as d,
  o as x,
  J as k,
  af as M,
  e as b,
  aQ as A,
  X as v,
  au as m,
  aw as p
} from "./LwuWi-s8.js";
const R = g({
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
    _(), w(() => {
      f()
    });
    const T = o(() => ({
      ...a,
      jettonTransactions: y.value,
      jettonHolders: j.value
    }));

    function H() {
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

    function J() {
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
      return x(), k(s, M(b(T), {
        onShare: n[0] || (n[0] = l => t.$emit("share"))
      }), null, 16)
    }
  }
});
export {
  R as
  default
};