import {
  _ as z
} from "./CCqriBvA.js";
import {
  _ as Y
} from "./oP8A2iYc.js";
import {
  d as N,
  ae as C,
  bl as I,
  y as O,
  a3 as D,
  o as s,
  c,
  b as i,
  e as t,
  F as h,
  a as n,
  t as m,
  C as a,
  D as v,
  Y as b,
  b7 as H,
  m as E,
  G as R,
  B as y,
  N as w,
  a9 as T,
  bm as L,
  h as J,
  _ as j,
  x as M,
  ap as V,
  f as K,
  bo as W,
  a4 as Z,
  b$ as q,
  U as Q
} from "./DmEY5NHF.js";
import {
  _ as X
} from "./Ky2DfqVd.js";
import {
  a as x
} from "./D5TMygZC.js";
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
        G = () => {
          p.forEach(clearTimeout), o.value = "LOADING"
        };
      D(() => {
        G()
      });
      const S = () => {
        _.push({
          name: "memepad"
        }), T().memepad.memepadJettonLaunchingGotItClick({
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
      const $ = () => {
        T().memepad.memepadAiLaunchingHowAgentWorksClick(), J().$webApp.openLink("https://www.blum.io/post/memepad-ai-agents-user-guide")
      };
      return (e, u) => {
        const F = Y,
          P = j,
          g = M,
          A = X,
          U = V;
        return s(), c("div", ee, [i(F), t(o) === "ERROR" ? (s(), c(h, {
          key: 0
        }, [n("div", te, [n("div", ne, [n("div", se, [i(P, {
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
        }, [E(m(("t" in e ? e.t : t(a))("memepad.new.step_launch.subtitle")), 1)], 64))])]), t(o) === "ROCKET" ? (s(), c("div", de, [i(U, {
          name: "animations/Rocket",
          size: 348
        })])) : R("", !0), i(A, null, {
          default: v(() => [n("div", pe, [i(g, {
            fill: "",
            label: ("t" in e ? e.t : t(a))("base.got_it"),
            type: e.form.aiAgentEnable ? t(y).SECONDARY : t(y).PRIMARY,
            size: t(b).LARGE,
            onClick: S
          }, null, 8, ["label", "type", "size"]), e.form.aiAgentEnable ? (s(), w(g, {
            key: 0,
            fill: "",
            label: ("t" in e ? e.t : t(a))("memepad.ai_agent.how_agent_works"),
            size: t(b).LARGE,
            onClick: $
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
      const r = W("id");
      if (!r) throw Z("Launching jetton id not found");
      const {
        launchingJettons: _
      } = I(), l = O();
      return q(() => {
        const d = _.value.find(o => String(o.id) === r);
        l.value = d ?? l.value
      }), Q().initHandler(() => {
        C().push({
          name: "memepad"
        })
      }, "memepad-jetton-launching"), (d, o) => {
        const p = z,
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
  ye = K(be, [
    ["__scopeId", "data-v-60c1000d"]
  ]);
export {
  ye as
  default
};