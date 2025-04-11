import {
  d as b,
  bt as w,
  j as s,
  a2 as x,
  T as k,
  ab as C,
  y as d,
  a0 as l,
  o as $,
  M as R,
  ao as B,
  e as I,
  a$ as N,
  a4 as m,
  a5 as u,
  aa as g,
  a9 as O
} from "./C6ycOBuK.js";
const U = b({
  inheritAttrs: !1,
  __name: "about",
  emits: ["share", "copy"],
  setup(P) {
    const c = w(),
      r = s(() => c.jettonShortname),
      {
        jettonTransactions: A,
        ...v
      } = h(),
      {
        jettonHolders: f,
        ...y
      } = S(),
      {
        jettonAiAgentState: H,
        ...p
      } = M(),
      J = () => {
        v.init(), y.init(), p.init()
      },
      T = () => {
        v.destroy(), y.destroy(), p.destroy()
      };
    J(), x(() => {
      T()
    }), k().initHandler(() => {
      C().push({
        name: "memepad-jetton-shortname-trade",
        params: {
          shortname: r.value
        }
      })
    }, "memepad-jetton-shortname-about");
    const _ = s(() => ({
      ...c,
      jettonTransactions: A.value,
      jettonHolders: f.value,
      jettonAiAgentState: H.value
    }));

    function h() {
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

    function S() {
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

    function M() {
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
      const a = N;
      return $(), R(a, B(I(_), {
        onShare: e[0] || (e[0] = i => t.$emit("share", "about")),
        onCopy: e[1] || (e[1] = i => t.$emit("copy", "about"))
      }), null, 16)
    }
  }
});
export {
  U as
  default
};