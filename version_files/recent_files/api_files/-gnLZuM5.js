import {
  d as J,
  be as h,
  j as o,
  V as x,
  L as u,
  T as d,
  o as k,
  G as w,
  ag as M,
  e as b,
  aJ as A,
  X as v,
  av as m,
  ax as p
} from "./BrLCGJDp.js";
const S = J({
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
      return k(), w(s, M(b(T), {
        onShare: n[0] || (n[0] = l => t.$emit("share"))
      }), null, 16)
    }
  }
});
export {
  S as
  default
};