import {
  d as x,
  bl as M,
  j as s,
  a7 as b,
  U as k,
  ai as C,
  y as d,
  a5 as l,
  o as R,
  N,
  aN as $,
  e as B,
  aR as I,
  a9 as m,
  aa as u,
  af as g,
  ae as O
} from "./BN1oUHf5.js";
const F = x({
  inheritAttrs: !1,
  __name: "about",
  emits: ["share", "copy"],
  setup(P) {
    const c = M(),
      r = s(() => c.jettonShortname),
      {
        jettonTransactions: A,
        ...v
      } = S(),
      {
        jettonHolders: f,
        ...y
      } = T(),
      {
        jettonAiAgentState: H,
        ...p
      } = w(),
      J = () => {
        v.init(), y.init(), p.init()
      },
      _ = () => {
        v.destroy(), y.destroy(), p.destroy()
      };
    J(), b(() => {
      _()
    }), k().initHandler(() => {
      C().push({
        name: "memepad-jetton-shortname-trade",
        params: {
          shortname: r.value
        }
      })
    }, "memepad-jetton-shortname-about");
    const h = s(() => ({
      ...c,
      jettonTransactions: A.value,
      jettonHolders: f.value,
      jettonAiAgentState: H.value
    }));

    function S() {
      const t = d(),
        e = l(async () => {
          const n = await m.getMemepadJettonTransactions(r.value);
          return u((g(n) ? n.data : t.value) || t.value)
        }, n => {
          t.value = n
        }, 5e3);
      return {
        init: async () => await e.exec(),
        destroy: () => {
          e.destroy(), t.value = void 0
        },
        jettonTransactions: s(() => t.value)
      }
    }

    function T() {
      const t = d(),
        e = l(async () => {
          const n = await m.getMemepadJettonHolders(r.value);
          return u((g(n) ? n.data : t.value) || t.value)
        }, n => {
          t.value = n
        }, 5e3);
      return {
        init: async () => await e.exec(),
        destroy: () => {
          e.destroy(), t.value = void 0
        },
        jettonHolders: s(() => t.value)
      }
    }

    function w() {
      const t = !c.jetton.aiAgent,
        e = d({
          status: "loading"
        }),
        a = l(async () => {
          var j;
          const o = O(await m.getMemepadJettonAiAgentStatus(r.value));
          return o.err ? ((j = o.extra) == null ? void 0 : j.code) === 404 ? u(void 0) : o : u(o.data)
        }, o => {
          o ? e.value = {
            status: "ready",
            data: o
          } : e.value = {
            status: "in_progress"
          }
        }, 5e3);
      return {
        init: async () => {
          t || await a.exec()
        },
        destroy: () => {
          a.destroy(), e.value = {
            status: "loading"
          }
        },
        jettonAiAgentState: s(() => e.value)
      }
    }
    return (t, e) => {
      const a = I;
      return R(), N(a, $(B(h), {
        onShare: e[0] || (e[0] = i => t.$emit("share", "about")),
        onCopy: e[1] || (e[1] = i => t.$emit("copy", "about"))
      }), null, 16)
    }
  }
});
export {
  F as
  default
};