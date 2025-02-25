import {
  d as g,
  bg as b,
  j as o,
  T as J,
  O as k,
  ac as w,
  K as l,
  Q as d,
  o as x,
  G as C,
  ae as M,
  e as $,
  aN as A,
  W as m,
  X as p,
  a1 as v
} from "./HMtIIKN9.js";
const O = g({
  inheritAttrs: !1,
  __name: "about",
  emits: ["share", "copy"],
  setup(B) {
    const i = b(),
      s = o(() => i.jettonShortname),
      {
        jettonTransactions: y,
        ...u
      } = h(),
      {
        jettonHolders: j,
        ...c
      } = _(),
      f = () => {
        u.init(), c.init()
      },
      H = () => {
        u.destroy(), c.destroy()
      };
    f(), J(() => {
      H()
    }), k().initHandler(() => {
      w().push({
        name: "memepad-jetton-shortname-trade",
        params: {
          shortname: s.value
        }
      })
    }, "memepad-jetton-shortname-about");
    const T = o(() => ({
      ...i,
      jettonTransactions: y.value,
      jettonHolders: j.value
    }));

    function h() {
      const t = l(),
        e = d(async () => {
          const n = await m.getMemepadJettonTransactions(s.value);
          return p((v(n) ? n.data : t.value) || t.value)
        }, n => {
          t.value = n
        }, 5e3);
      return {
        init: async () => await e.exec(),
        destroy: () => {
          e.destroy(), t.value = void 0
        },
        jettonTransactions: o(() => t.value)
      }
    }

    function _() {
      const t = l(),
        e = d(async () => {
          const n = await m.getMemepadJettonHolders(s.value);
          return p((v(n) ? n.data : t.value) || t.value)
        }, n => {
          t.value = n
        }, 5e3);
      return {
        init: async () => await e.exec(),
        destroy: () => {
          e.destroy(), t.value = void 0
        },
        jettonHolders: o(() => t.value)
      }
    }
    return (t, e) => {
      const a = A;
      return x(), C(a, M($(T), {
        onShare: e[0] || (e[0] = r => t.$emit("share", "about")),
        onCopy: e[1] || (e[1] = r => t.$emit("copy", "about"))
      }), null, 16)
    }
  }
});
export {
  O as
  default
};