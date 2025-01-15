import {
  d as h,
  bc as J,
  j as s,
  U as x,
  K as l,
  R as d,
  o as k,
  G as w,
  ac as M,
  e as b,
  aG as A,
  W as v,
  as as m,
  au as p
} from "./DrQ2shF8.js";
const R = h({
  inheritAttrs: !1,
  __name: "about",
  emits: ["share"],
  setup(C) {
    const a = J(),
      r = s(() => a.jettonShortname),
      {
        jettonTransactions: y,
        ...c
      } = T(),
      {
        jettonHolders: j,
        ...i
      } = g(),
      _ = () => {
        c.init(), i.init()
      },
      f = () => {
        c.destroy(), i.destroy()
      };
    _(), x(() => {
      f()
    });
    const H = s(() => ({
      ...a,
      jettonTransactions: y.value,
      jettonHolders: j.value
    }));

    function T() {
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
        jettonTransactions: s(() => t.value)
      }
    }

    function g() {
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
        jettonHolders: s(() => t.value)
      }
    }
    return (t, n) => {
      const o = A;
      return k(), w(o, M(b(H), {
        onShare: n[0] || (n[0] = u => t.$emit("share"))
      }), null, 16)
    }
  }
});
export {
  R as
  default
};