import {
  d as k,
  bs as C,
  bc as R,
  j as s,
  ag as $,
  a3 as q,
  ad as B,
  J as d,
  ae as l,
  o as I,
  z as P,
  aW as N,
  e as O,
  a_ as z,
  ai as v,
  aj as u,
  an as g,
  am as D
} from "./aUn4L-is.js";
const W = k({
  inheritAttrs: !1,
  __name: "about",
  emits: ["share", "copy"],
  setup(F) {
    const c = C(),
      A = R(),
      r = s(() => c.jettonShortname),
      f = s(() => A.query.discover === "1"),
      J = s(() => f.value ? {
        discover: "1"
      } : {}),
      {
        jettonTransactions: _,
        ...m
      } = w(),
      {
        jettonHolders: H,
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
    S(), $(() => {
      T()
    }), q().initHandler(() => {
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
      jettonTransactions: _.value,
      jettonHolders: H.value,
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
          const o = D(await v.getMemepadJettonAiAgentStatus(r.value));
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
      const a = z;
      return I(), P(a, N(O(b), {
        onShare: e[0] || (e[0] = i => t.$emit("share", "about")),
        onCopy: e[1] || (e[1] = i => t.$emit("copy", "about"))
      }), null, 16)
    }
  }
});
export {
  W as
  default
};