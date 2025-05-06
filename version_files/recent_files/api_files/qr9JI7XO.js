import {
  d as w,
  bu as x,
  j as s,
  a3 as M,
  U as k,
  ae as C,
  y as d,
  a1 as l,
  o as $,
  N as R,
  aq as B,
  e as I,
  a$ as N,
  a5 as m,
  a6 as u,
  ab as g,
  aa as O
} from "./BtsWxTOZ.js";
const q = w({
  inheritAttrs: !1,
  __name: "about",
  emits: ["share", "copy"],
  setup(P) {
    const c = x(),
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
      } = b(),
      J = () => {
        v.init(), y.init(), p.init()
      },
      _ = () => {
        v.destroy(), y.destroy(), p.destroy()
      };
    J(), M(() => {
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

    function b() {
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
      return $(), R(a, B(I(h), {
        onShare: e[0] || (e[0] = i => t.$emit("share", "about")),
        onCopy: e[1] || (e[1] = i => t.$emit("copy", "about"))
      }), null, 16)
    }
  }
});
export {
  q as
  default
};