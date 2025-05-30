import {
  d as k,
  bp as C,
  bb as R,
  j as s,
  af as I,
  a3 as $,
  ao as q,
  I as d,
  ad as l,
  o as B,
  y as P,
  aV as N,
  e as O,
  aZ as D,
  ah as v,
  ai as u,
  am as g,
  al as F
} from "./D0ZwcU5P.js";
const Z = k({
  inheritAttrs: !1,
  __name: "about",
  emits: ["share", "copy"],
  setup(U) {
    const c = C(),
      A = R(),
      r = s(() => c.jettonShortname),
      f = s(() => A.query.discover === "1"),
      h = s(() => f.value ? {
        discover: "1"
      } : {}),
      {
        jettonTransactions: H,
        ...m
      } = w(),
      {
        jettonHolders: J,
        ...y
      } = x(),
      {
        jettonAiAgentState: _,
        ...p
      } = M(),
      S = () => {
        m.init(), y.init(), p.init()
      },
      T = () => {
        m.destroy(), y.destroy(), p.destroy()
      };
    S(), I(() => {
      T()
    }), $().initHandler(() => {
      q().push({
        name: "memepad-jetton-shortname-trade",
        params: {
          shortname: r.value
        },
        query: h.value
      })
    }, "memepad-jetton-shortname-about");
    const b = s(() => ({
      ...c,
      jettonTransactions: H.value,
      jettonHolders: J.value,
      jettonAiAgentState: _.value
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
          const o = F(await v.getMemepadJettonAiAgentStatus(r.value));
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
      const a = D;
      return B(), P(a, N(O(b), {
        onShare: e[0] || (e[0] = i => t.$emit("share", "about")),
        onCopy: e[1] || (e[1] = i => t.$emit("copy", "about"))
      }), null, 16)
    }
  }
});
export {
  Z as
  default
};