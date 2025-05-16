import {
  d as N,
  ai as C,
  bb as I,
  y as O,
  a7 as z,
  o as s,
  c,
  b as i,
  e as t,
  F as h,
  a as n,
  t as m,
  C as o,
  D as v,
  a1 as b,
  aX as D,
  m as E,
  G as R,
  B as T,
  N as w,
  X as y,
  bc as L,
  h as H,
  _ as J,
  x as Y,
  aD as j,
  f as K,
  be as M,
  a8 as V,
  bT as W,
  U as X,
  ad as Z
} from "./B3wbv-Ae.js";
import {
  _ as q
} from "./XyFDqTAs.js";
import {
  _ as Q
} from "./3-RB_g6S.js";
import {
  a as x
} from "./BIdzDfQk.js";
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
  ae = {
    class: "title"
  },
  oe = {
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
        a = O("LOADING"),
        p = [],
        f = () => new Promise(e => {
          a.value = "ROCKET", p.push(setTimeout(() => {
            e(void 0)
          }, ue))
        }),
        B = () => {
          a.value = "ERROR"
        },
        G = () => {
          p.forEach(clearTimeout), a.value = "LOADING"
        };
      z(() => {
        G()
      });
      const S = () => {
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
      const F = () => {
        y().memepad.memepadAiLaunchingHowAgentWorksClick(), H().$webApp.openLink("https://www.blum.io/post/memepad-ai-agents-user-guide")
      };
      return (e, u) => {
        const P = q,
          U = J,
          g = Y,
          A = Q,
          $ = j;
        return s(), c("div", ee, [i(P), t(a) === "ERROR" ? (s(), c(h, {
          key: 0
        }, [n("div", te, [n("div", ne, [n("div", se, [i(U, {
          name: "warning",
          class: "icon"
        })])]), n("div", ae, m(("t" in e ? e.t : t(o))("memepad.new.failed.title", {
          ticker: e.form.ticker
        })), 1), n("div", oe, m(("t" in e ? e.t : t(o))("memepad.new.failed.subtitle")), 1)]), i(A, null, {
          default: v(() => [i(g, {
            fill: "",
            label: ("t" in e ? e.t : t(o))("memepad.new.retry_btn_label"),
            size: t(b).LARGE,
            onClick: u[0] || (u[0] = we => t(d)(e.form))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64)) : (s(), c(h, {
          key: 1
        }, [n("div", ie, [n("div", ce, [n("img", {
          src: t(D)(e.form.iconFileKey),
          alt: "Jetton logo",
          width: "80",
          height: "80"
        }, null, 8, le)]), n("div", me, [u[1] || (u[1] = n("div", {
          class: "dot"
        }, null, -1)), n("div", re, m(("t" in e ? e.t : t(o))("memepad.new.step_launch.title")), 1)]), n("div", _e, [e.form.aiAgentEnable ? (s(), c(h, {
          key: 0
        }, [E(m(("t" in e ? e.t : t(o))("memepad.new.step_launch.with_agent_subtitle")), 1)], 64)) : (s(), c(h, {
          key: 1
        }, [E(m(("t" in e ? e.t : t(o))("memepad.new.step_launch.subtitle")), 1)], 64))])]), t(a) === "ROCKET" ? (s(), c("div", de, [i($, {
          name: "animations/Rocket",
          size: 348
        })])) : R("", !0), i(A, null, {
          default: v(() => [n("div", pe, [i(g, {
            fill: "",
            label: ("t" in e ? e.t : t(o))("base.got_it"),
            type: e.form.aiAgentEnable ? t(T).SECONDARY : t(T).PRIMARY,
            size: t(b).LARGE,
            onClick: S
          }, null, 8, ["label", "type", "size"]), e.form.aiAgentEnable ? (s(), w(g, {
            key: 0,
            fill: "",
            label: ("t" in e ? e.t : t(o))("memepad.ai_agent.how_agent_works"),
            size: t(b).LARGE,
            onClick: F
          }, null, 8, ["label", "size"])) : R("", !0)])]),
          _: 1
        })], 64))])
      }
    }
  }),
  fe = K(he, [
    ["__scopeId", "data-v-c49b797a"]
  ]),
  ge = {
    class: "memepad-new-launching-id page"
  },
  be = N({
    __name: "[id]",
    setup(k) {
      const r = M("id");
      if (!r) throw V("Launching jetton id not found");
      const {
        launchingJettons: _
      } = I(), l = O();
      return W(() => {
        const d = _.value.find(a => String(a.id) === r);
        l.value = d ?? l.value
      }), X().initHandler(() => {
        C().push({
          name: "memepad"
        })
      }, "memepad-jetton-launching"), (d, a) => {
        const p = Z,
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
  Re = K(be, [
    ["__scopeId", "data-v-60c1000d"]
  ]);
export {
  Re as
  default
};