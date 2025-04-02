import {
  d as b,
  bq as g,
  j as o,
  a1 as J,
  R as k,
  aa as M,
  y as l,
  $ as d,
  o as $,
  M as w,
  an as x,
  e as C,
  aZ as R,
  a3 as m,
  a4 as p,
  a9 as v
} from "./GkJ71AXb.js";
const I = b({
  inheritAttrs: !1,
  __name: "about",
  emits: ["share", "copy"],
  setup(A) {
    const i = g(),
      a = o(() => i.jettonShortname),
      {
        jettonTransactions: y,
        ...u
      } = T(),
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
      M().push({
        name: "memepad-jetton-shortname-trade",
        params: {
          shortname: a.value
        }
      })
    }, "memepad-jetton-shortname-about");
    const h = o(() => ({
      ...i,
      jettonTransactions: y.value,
      jettonHolders: j.value
    }));

    function T() {
      const t = l(),
        e = d(async () => {
          const n = await m.getMemepadJettonTransactions(a.value);
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
          const n = await m.getMemepadJettonHolders(a.value);
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
      const s = R;
      return $(), w(s, x(C(h), {
        onShare: e[0] || (e[0] = r => t.$emit("share", "about")),
        onCopy: e[1] || (e[1] = r => t.$emit("copy", "about"))
      }), null, 16)
    }
  }
});
export {
  I as
  default
};