import {
  d as k,
  bp as C,
  b9 as R,
  j as s,
  ag as $,
  a3 as q,
  ad as B,
  J as d,
  ae as l,
  o as I,
  z as P,
  aT as N,
  e as O,
  aX as z,
  ai as v,
  aj as u,
  an as g,
  am as D
} from "./Dy2of55E.js";
const X = k({
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
        jettonTransactions: H,
        ...m
      } = w(),
      {
        jettonHolders: T,
        ...y
      } = x(),
      {
        jettonAiAgentState: _,
        ...p
      } = M(),
      h = () => {
        m.init(), y.init(), p.init()
      },
      S = () => {
        m.destroy(), y.destroy(), p.destroy()
      };
    h(), $(() => {
      S()
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
      jettonTransactions: H.value,
      jettonHolders: T.value,
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
  X as
  default
};