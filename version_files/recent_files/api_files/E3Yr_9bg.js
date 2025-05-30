import {
  d as N,
  ao as C,
  b7 as I,
  J as O,
  af as J,
  o as s,
  c,
  b as i,
  e as t,
  F as h,
  a as n,
  t as m,
  A as a,
  D as v,
  a9 as w,
  b1 as U,
  m as R,
  G as T,
  B as y,
  z as b,
  a5 as E,
  b8 as L,
  h as D,
  _ as H,
  x as W,
  aJ as Y,
  f as K,
  bi as j,
  ag as M,
  bW as V,
  a3 as Q,
  Q as Z
} from "./jPANuN8i.js";
import {
  _ as q
} from "./6VLEKrJt.js";
import {
  _ as X
} from "./jOA2D9Ne.js";
import {
  a as x
} from "./BJ0AVki2.js";
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
    setup(A) {
      const r = A,
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
      J(() => {
        G()
      });
      const S = () => {
        _.push({
          name: "memepad"
        }), E().memepad.memepadJettonLaunchingGotItClick({
          flowType: r.form.withAgent ? L.AI : L.REGULAR
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
      const z = () => {
        E().memepad.memepadAiLaunchingHowAgentWorksClick(), D().$webApp.openLink("https://www.blum.io/post/memepad-ai-agents-user-guide")
      };
      return (e, u) => {
        const F = q,
          P = H,
          g = W,
          k = X,
          $ = Y;
        return s(), c("div", ee, [i(F), t(o) === "ERROR" ? (s(), c(h, {
          key: 0
        }, [n("div", te, [n("div", ne, [n("div", se, [i(P, {
          name: "warning",
          class: "icon"
        })])]), n("div", oe, m(("t" in e ? e.t : t(a))("memepad.new.failed.title", {
          ticker: e.form.ticker
        })), 1), n("div", ae, m(("t" in e ? e.t : t(a))("memepad.new.failed.subtitle")), 1)]), i(k, null, {
          default: v(() => [i(g, {
            fill: "",
            label: ("t" in e ? e.t : t(a))("memepad.new.retry_btn_label"),
            size: t(w).LARGE,
            onClick: u[0] || (u[0] = be => t(d)(e.form))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64)) : (s(), c(h, {
          key: 1
        }, [n("div", ie, [n("div", ce, [n("img", {
          src: t(U)(e.form.iconFileKey),
          alt: "Jetton logo",
          width: "80",
          height: "80"
        }, null, 8, le)]), n("div", me, [u[1] || (u[1] = n("div", {
          class: "dot"
        }, null, -1)), n("div", re, m(("t" in e ? e.t : t(a))("memepad.new.step_launch.title")), 1)]), n("div", _e, [e.form.withAgent ? (s(), c(h, {
          key: 0
        }, [R(m(("t" in e ? e.t : t(a))("memepad.new.step_launch.with_agent_subtitle")), 1)], 64)) : (s(), c(h, {
          key: 1
        }, [R(m(("t" in e ? e.t : t(a))("memepad.new.step_launch.subtitle")), 1)], 64))])]), t(o) === "ROCKET" ? (s(), c("div", de, [i($, {
          name: "animations/Rocket",
          size: 348
        })])) : T("", !0), i(k, null, {
          default: v(() => [n("div", pe, [i(g, {
            fill: "",
            label: ("t" in e ? e.t : t(a))("base.got_it"),
            type: e.form.withAgent ? t(y).SECONDARY : t(y).PRIMARY,
            size: t(w).LARGE,
            onClick: S
          }, null, 8, ["label", "type", "size"]), e.form.withAgent ? (s(), b(g, {
            key: 0,
            fill: "",
            label: ("t" in e ? e.t : t(a))("memepad.ai_agent.how_agent_works"),
            size: t(w).LARGE,
            onClick: z
          }, null, 8, ["label", "size"])) : T("", !0)])]),
          _: 1
        })], 64))])
      }
    }
  }),
  fe = K(he, [
    ["__scopeId", "data-v-a381cbc4"]
  ]),
  ge = {
    class: "memepad-new-launching-id page"
  },
  we = N({
    __name: "[id]",
    setup(A) {
      const r = j("id");
      if (!r) throw M("Launching jetton id not found");
      const {
        launchingJettons: _
      } = I(), l = O();
      return V(() => {
        const d = _.value.find(o => String(o.id) === r);
        l.value = d ?? l.value
      }), Q().initHandler(() => {
        C().push({
          name: "memepad"
        })
      }, "memepad-jetton-launching"), (d, o) => {
        const p = Z,
          f = fe;
        return s(), c("div", ge, [t(l) ? (s(), b(f, {
          key: 1,
          form: t(l).form
        }, null, 8, ["form"])) : (s(), b(p, {
          key: 0
        }))])
      }
    }
  }),
  Te = K(we, [
    ["__scopeId", "data-v-60c1000d"]
  ]);
export {
  Te as
  default
};