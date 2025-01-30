import {
  d as g,
  bf as h,
  j as o,
  U as x,
  K as u,
  R as d,
  o as k,
  G as w,
  af as M,
  e as b,
  aJ as A,
  X as v,
  Y as m,
  a2 as p
} from "./guWQ5rpf.js";
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
      } = T(),
      {
        jettonHolders: j,
        ...c
      } = J(),
      f = () => {
        i.init(), c.init()
      },
      _ = () => {
        i.destroy(), c.destroy()
      };
    f(), x(() => {
      _()
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