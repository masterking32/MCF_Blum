import {
  _ as U
} from "./DdW72Z7B.js";
import {
  _ as j
} from "./fsx4Y4h1.js";
import {
  d as N,
  ab as C,
  bj as I,
  y as O,
  a2 as D,
  o as s,
  c,
  b as i,
  e as t,
  F as h,
  a as n,
  t as m,
  C as a,
  D as v,
  X as b,
  b5 as H,
  m as E,
  E as R,
  B as T,
  M as w,
  a8 as y,
  bk as L,
  h as J,
  _ as M,
  x as Y,
  an as V,
  f as K,
  bm as W,
  a3 as X,
  b_ as Z,
  T as q
} from "./Cbo9LC6p.js";
import {
  _ as Q
} from "./BCT2FObz.js";
import {
  a as x
} from "./BRW5tEA5.js";
const ee = {
    class: "memepad-new-step-launching"
  },
  te = {
    class: "inner"
  },
  ne = {
    class: "icon-wrapper"
  },
  se = {
    class: "error-icon"
  },
  oe = {
    class: "title"
  },
  ae = {
    class: "subtitle"
  },
  ie = {
    class: "inner"
  },
  ce = {
    class: "icon-wrapper"
  },
  le = ["src"],
  me = {
    class: "title"
  },
  re = {
    class: "label"
  },
  _e = {
    class: "subtitle"
  },
  de = {
    key: 0,
    class: "rocket-wrapper"
  },
  pe = {
    class: "buttons"
  },
  ue = 3e3,
  he = N({
    __name: "Launching",
    props: {
      form: {}
    },
    setup(k) {
      const r = k,
        _ = C(),
        {
          subscribeToJettonLaunchedStatus: l,
          retry: d
        } = I(),
        o = O("LOADING"),
        p = [],
        f = () => new Promise(e => {
          o.value = "ROCKET", p.push(setTimeout(() => {
            e(void 0)
          }, ue))
        }),
        B = () => {
          o.value = "ERROR"
        },
        S = () => {
          p.forEach(clearTimeout), o.value = "LOADING"
        };
      D(() => {
        S()
      });
      const F = () => {
        _.push({
          name: "memepad"
        }), y().memepad.memepadJettonLaunchingGotItClick({
          flowType: r.form.aiAgentEnable ? L.AI : L.REGULAR
        })
      };
      x("memepad-jetton-launching"), l(async e => {
        e ? (await f(), await _.replace({
          name: "memepad-jetton-shortname",
          params: {
            shortname: e.shortname
          }
        })) : B()
      });
      const G = () => {
        y().memepad.memepadAiLaunchingHowAgentWorksClick(), J().$webApp.openLink("https://www.blum.io/post/memepad-ai-agents-user-guide")
      };
      return (e, u) => {
        const P = j,
          $ = M,
          g = Y,
          A = Q,
          z = V;
        return s(), c("div", ee, [i(P), t(o) === "ERROR" ? (s(), c(h, {
          key: 0
        }, [n("div", te, [n("div", ne, [n("div", se, [i($, {
          name: "warning",
          class: "icon"
        })])]), n("div", oe, m(("t" in e ? e.t : t(a))("memepad.new.failed.title", {
          ticker: e.form.ticker
        })), 1), n("div", ae, m(("t" in e ? e.t : t(a))("memepad.new.failed.subtitle")), 1)]), i(A, null, {
          default: v(() => [i(g, {
            fill: "",
            label: ("t" in e ? e.t : t(a))("memepad.new.retry_btn_label"),
            size: t(b).LARGE,
            onClick: u[0] || (u[0] = we => t(d)(e.form))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64)) : (s(), c(h, {
          key: 1
        }, [n("div", ie, [n("div", ce, [n("img", {
          src: t(H)(e.form.iconFileKey),
          alt: "Jetton logo",
          width: "80",
          height: "80"
        }, null, 8, le)]), n("div", me, [u[1] || (u[1] = n("div", {
          class: "dot"
        }, null, -1)), n("div", re, m(("t" in e ? e.t : t(a))("memepad.new.step_launch.title")), 1)]), n("div", _e, [e.form.aiAgentEnable ? (s(), c(h, {
          key: 0
        }, [E(m(("t" in e ? e.t : t(a))("memepad.new.step_launch.with_agent_subtitle")), 1)], 64)) : (s(), c(h, {
          key: 1
        }, [E(m(("t" in e ? e.t : t(a))("memepad.new.step_launch.subtitle")), 1)], 64))])]), t(o) === "ROCKET" ? (s(), c("div", de, [i(z, {
          name: "animations/Rocket",
          size: 348
        })])) : R("", !0), i(A, null, {
          default: v(() => [n("div", pe, [i(g, {
            fill: "",
            label: ("t" in e ? e.t : t(a))("base.got_it"),
            type: e.form.aiAgentEnable ? t(T).SECONDARY : t(T).PRIMARY,
            size: t(b).LARGE,
            onClick: F
          }, null, 8, ["label", "type", "size"]), e.form.aiAgentEnable ? (s(), w(g, {
            key: 0,
            fill: "",
            label: ("t" in e ? e.t : t(a))("memepad.ai_agent.how_agent_works"),
            size: t(b).LARGE,
            onClick: G
          }, null, 8, ["label", "size"])) : R("", !0)])]),
          _: 1
        })], 64))])
      }
    }
  }),
  fe = K(he, [
    ["__scopeId", "data-v-0e24fb3a"]
  ]),
  ge = {
    class: "memepad-new-launching-id page"
  },
  be = N({
    __name: "[id]",
    setup(k) {
      const r = W("id");
      if (!r) throw X("Launching jetton id not found");
      const {
        launchingJettons: _
      } = I(), l = O();
      return Z(() => {
        const d = _.value.find(o => String(o.id) === r);
        l.value = d ?? l.value
      }), q().initHandler(() => {
        C().push({
          name: "memepad"
        })
      }, "memepad-jetton-launching"), (d, o) => {
        const p = U,
          f = fe;
        return s(), c("div", ge, [t(l) ? (s(), w(f, {
          key: 1,
          form: t(l).form
        }, null, 8, ["form"])) : (s(), w(p, {
          key: 0
        }))])
      }
    }
  }),
  Te = K(be, [
    ["__scopeId", "data-v-60c1000d"]
  ]);
export {
  Te as
  default
};