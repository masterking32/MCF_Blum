import {
  d as k,
  bq as C,
  ba as R,
  j as s,
  ag as q,
  a3 as $,
  ad as B,
  J as d,
  ae as l,
  o as I,
  z as P,
  aU as N,
  e as O,
  aY as U,
  ai as v,
  aj as u,
  an as g,
  am as z
} from "./CTMy7kFf.js";
const Y = k({
  inheritAttrs: !1,
  __name: "about",
  emits: ["share", "copy"],
  setup(D) {
    const c = C(),
      A = R(),
      r = s(() => c.jettonShortname),
      f = s(() => A.query.discover === "1"),
      J = s(() => f.value ? {
        discover: "1"
      } : {}),
      {
        jettonTransactions: H,
        ...m
      } = w(),
      {
        jettonHolders: _,
        ...y
      } = x(),
      {
        jettonAiAgentState: h,
        ...p
      } = M(),
      S = () => {
        m.init(), y.init(), p.init()
      },
      T = () => {
        m.destroy(), y.destroy(), p.destroy()
      };
    S(), q(() => {
      T()
    }), $().initHandler(() => {
      B().push({
        name: "memepad-jetton-shortname-trade",
        params: {
          shortname: r.value
        },
        query: J.value
      })
    }, "memepad-jetton-shortname-about");
    const b = s(() => ({
      ...c,
      jettonTransactions: H.value,
      jettonHolders: _.value,
      jettonAiAgentState: h.value
    }));

    function w() {
      const t = d(),
        e = l(async () => {
          const n = await v.getMemepadJettonTransactions(r.value);
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

    function x() {
      const t = d(),
        e = l(async () => {
          const n = await v.getMemepadJettonHolders(r.value);
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
          const o = z(await v.getMemepadJettonAiAgentStatus(r.value));
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
      const a = U;
      return I(), P(a, N(O(b), {
        onShare: e[0] || (e[0] = i => t.$emit("share", "about")),
        onCopy: e[1] || (e[1] = i => t.$emit("copy", "about"))
      }), null, 16)
    }
  }
});
export {
  Y as
  default
};