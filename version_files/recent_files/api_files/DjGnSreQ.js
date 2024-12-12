import {
  d as R,
  u as b,
  r as T,
  o as N,
  a as c,
  c as m,
  b as s,
  n as q,
  e as t,
  t as _,
  l as E,
  f as g,
  g as k,
  h as I,
  _ as C,
  i as L,
  j as $,
  k as v,
  w as h,
  v as f,
  m as S,
  p as K,
  q as A,
  s as V,
  x as z,
  B as W,
  y as j,
  z as x,
  A as H,
  C as U,
  D as F,
  E as G,
  F as O,
  G as B,
  H as P,
  I as M,
  J as D,
  K as Y,
  L as J
} from "./7Syd4Ho8.js";
import {
  _ as Z
} from "./C8u2TMle.js";
import {
  _ as Q
} from "./CnSCrtWk.js";
const X = {
    class: "pages-daily-reward-streak"
  },
  ee = {
    class: "heading"
  },
  te = {
    class: "title"
  },
  se = {
    key: 0,
    src: C,
    alt: "Pokras left flower",
    class: "pokras-img1",
    width: "79",
    height: "176"
  },
  ae = {
    key: 1,
    src: L,
    alt: "Pokras right flower",
    class: "pokras-img2",
    width: "71",
    height: "185"
  },
  oe = {
    class: "disclaimer"
  },
  ie = R({
    __name: "DailyRewardStreak",
    props: {
      oldOrdinal: {
        type: Number,
        required: !0
      },
      newOrdinal: {
        type: Number,
        required: !0
      }
    },
    emits: ["done"],
    setup(a, {
      emit: i
    }) {
      const o = a,
        e = i,
        n = b().internal.isPokrasTheme,
        r = T({
          type: "yesterday",
          ordinal: o.oldOrdinal
        }),
        l = [];
      return l.push(setTimeout(() => {
        r.value = {
          type: "today",
          ordinal: o.newOrdinal
        }
      }, 800)), l.push(setTimeout(() => {
        b().makeConfetti()
      }, 1500)), l.push(setTimeout(() => {
        e("done")
      }, 3e3)), N(() => {
        l.forEach(d => clearTimeout(d))
      }), (d, w) => (c(), m("div", X, [s("div", ee, [s("div", {
        class: q(["counter", {
          "is-dimmed": t(r).type === "yesterday"
        }])
      }, _(t(r).ordinal), 3), s("div", te, _(("lower" in d ? d.lower : t(E))(("t" in d ? d.t : t(g))("daily_reward.streak.title"))), 1)]), t(n) ? (c(), m("img", se)) : k("", !0), t(n) ? (c(), m("img", ae)) : k("", !0), s("div", oe, [I(_(("t" in d ? d.t : t(g))("daily_reward.streak.disclaimer")) + " ", 1), w[0] || (w[0] = s("i", {
        class: "fire"
      }, null, -1))])]))
    }
  }),
  ne = $(ie, [
    ["__scopeId", "data-v-0a9a3d4d"]
  ]),
  re = {
    class: "pages-daily-reward-reward"
  },
  de = {
    class: "heading"
  },
  le = {
    key: 0,
    src: j,
    alt: "Pokras blum text",
    width: "275",
    height: "125"
  },
  ce = {
    key: 2,
    src: x,
    alt: "Pokras bg image",
    class: "pokras-bg-image",
    width: "390",
    height: "168"
  },
  ue = {
    class: "title"
  },
  me = {
    class: "footer"
  },
  pe = {
    class: "reward-item"
  },
  _e = {
    class: "count"
  },
  ve = {
    class: "reward-item"
  },
  we = {
    class: "count"
  },
  ye = ["innerHTML"],
  ge = R({
    __name: "DailyRewardReward",
    props: {
      active: {
        type: Boolean,
        required: !0
      },
      tomorrowOrdinal: {
        type: Number,
        required: !0
      },
      points: {
        type: Object,
        required: !0
      },
      passes: {
        type: Number,
        required: !0
      }
    },
    emits: ["continue"],
    setup(a) {
      const i = b().internal.isPokrasTheme;
      return (o, e) => {
        const n = Z,
          r = H,
          l = U,
          d = Q;
        return c(), m("div", re, [v(n), s("div", de, [t(i) ? h((c(), m("img", le, null, 512)), [
          [f, a.active]
        ]) : h((c(), S(r, {
          key: 1,
          name: "animations/Lightning",
          size: 128
        }, null, 512)), [
          [f, a.active]
        ]), t(i) ? h((c(), m("img", ce, null, 512)), [
          [f, a.active]
        ]) : k("", !0), s("div", ue, _(("t" in o ? o.t : t(g))("daily_reward.reward.title")), 1)]), s("div", me, [s("div", {
          class: q(["rewards-container", {
            active: a.active
          }])
        }, [s("div", pe, [e[1] || (e[1] = s("img", {
          src: K,
          alt: "Blum logo"
        }, null, -1)), s("div", _e, _(("formatBp" in o ? o.formatBp : t(A))(a.points)), 1), e[2] || (e[2] = s("div", {
          class: "name"
        }, "Blum Points", -1))]), s("div", ve, [e[3] || (e[3] = s("img", {
          src: V,
          alt: "Ticket"
        }, null, -1)), s("div", we, _(a.passes), 1), e[4] || (e[4] = s("div", {
          class: "name"
        }, "Play Passes", -1))])], 2), s("div", {
          class: "disclaimer",
          innerHTML: ("t" in o ? o.t : t(g))("daily_reward.reward.disclaimer", {
            n: a.tomorrowOrdinal
          })
        }, null, 8, ye), v(d, null, {
          default: z(() => [v(l, {
            label: ("t" in o ? o.t : t(g))("base.continue"),
            fill: "",
            class: "btn",
            size: t(W).LARGE,
            onClick: e[0] || (e[0] = w => o.$emit("continue"))
          }, null, 8, ["label", "size"])]),
          _: 1
        })])])
      }
    }
  }),
  he = $(ge, [
    ["__scopeId", "data-v-5e6ee64a"]
  ]),
  fe = {
    class: "pages-daily-reward"
  },
  ke = R({
    __name: "DailyReward",
    props: {
      oldOrdinal: {
        type: Number,
        required: !0
      },
      newOrdinal: {
        type: Number,
        required: !0
      },
      points: {
        type: Object,
        required: !0
      },
      passes: {
        type: Number,
        required: !0
      }
    },
    emits: ["leave"],
    setup(a) {
      const i = T("STREAK");
      return (o, e) => {
        const n = ne,
          r = he;
        return c(), m("div", fe, [h(v(n, {
          "old-ordinal": a.oldOrdinal,
          "new-ordinal": a.newOrdinal,
          onDone: e[0] || (e[0] = l => i.value = "REWARD")
        }, null, 8, ["old-ordinal", "new-ordinal"]), [
          [f, t(i) === "STREAK"]
        ]), h(v(r, {
          active: t(i) === "REWARD",
          "tomorrow-ordinal": a.newOrdinal + 1,
          points: a.points,
          passes: a.passes,
          onContinue: e[1] || (e[1] = l => o.$emit("leave"))
        }, null, 8, ["active", "tomorrow-ordinal", "points", "passes"]), [
          [f, t(i) === "REWARD"]
        ])])
      }
    }
  }),
  Re = $(ke, [
    ["__scopeId", "data-v-f08141d8"]
  ]),
  $e = {
    key: 0,
    class: "daily-reward-page page no-padding"
  },
  be = R({
    __name: "daily-reward",
    setup(a) {
      const i = F(),
        o = G(),
        e = O(() => i.reward.value),
        n = O(() => {
          if (e.value === void 0) return;
          const [p, u] = e.value.days;
          return {
            oldOrdinal: e.value.countInRow !== void 0 ? e.value.countInRow : p.ordinal,
            newOrdinal: u.ordinal,
            points: u.reward.points,
            passes: u.reward.passes
          }
        });
      let r;
      const l = T(!1),
        d = () => {
          var y;
          const p = (y = e.value) == null ? void 0 : y.days[1].reward;
          p && l.value && B().bottom.success(`You’ve got ${A(p.points)} BP `, {
            onLeave: () => {
              setTimeout(() => B().bottom.success(P("span", ["You’ve got ", P("i", {
                class: "ticket"
              }), ` ${p.passes}`])), 300)
            }
          }), o.updateBalance();
          const u = M();
          D().replace(u)
        },
        w = async () => {
          if ((await Y.approveDailyRewardVisit()).err) throw J("Unable to approve visit");
          l.value = !0
        };
      return (() => {
        if (i.reward.value === void 0) {
          D().replace({
            name: "index"
          });
          return
        }
        r = setTimeout(w, 500)
      })(), N(() => {
        r && (clearInterval(r), r = void 0)
      }), (p, u) => {
        const y = Re;
        return t(n) ? (c(), m("div", $e, [v(y, {
          "old-ordinal": t(n).oldOrdinal,
          "new-ordinal": t(n).newOrdinal,
          points: t(n).points,
          passes: t(n).passes,
          onLeave: u[0] || (u[0] = Oe => d())
        }, null, 8, ["old-ordinal", "new-ordinal", "points", "passes"])])) : k("", !0)
      }
    }
  }),
  Ne = $(be, [
    ["__scopeId", "data-v-fb8bb2f5"]
  ]);
export {
  Ne as
  default
};