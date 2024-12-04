import {
  d as $,
  u as T,
  r as O,
  o as N,
  a as u,
  c as m,
  b as t,
  n as q,
  e as s,
  t as _,
  l as E,
  f as g,
  g as k,
  h as I,
  _ as L,
  i as C,
  j as R,
  k as v,
  w as h,
  v as f,
  m as S,
  p as K,
  q as A,
  s as V,
  x as z,
  B as x,
  y as W,
  z as j,
  A as F,
  C as H,
  D as U,
  E as G,
  F as B,
  G as P,
  H as D,
  I as M,
  J as b,
  K as Y,
  L as J
} from "./DgYQtzR3.js";
import {
  _ as Q
} from "./CQfeyRzP.js";
import {
  _ as Z
} from "./CXRKCT3d.js";
const X = {
    class: "pages-daily-reward-streak"
  },
  ee = {
    class: "heading"
  },
  se = {
    class: "title"
  },
  te = {
    key: 0,
    src: L,
    alt: "Pokras left flower",
    class: "pokras-img1",
    width: "79",
    height: "176"
  },
  ae = {
    key: 1,
    src: C,
    alt: "Pokras right flower",
    class: "pokras-img2",
    width: "71",
    height: "185"
  },
  oe = {
    class: "disclaimer"
  },
  ie = $({
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
        n = T().internal.isPokrasTheme,
        r = O({
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
        T().makeConfetti()
      }, 1500)), l.push(setTimeout(() => {
        e("done")
      }, 3e3)), N(() => {
        l.forEach(d => clearTimeout(d))
      }), (d, w) => (u(), m("div", X, [t("div", ee, [t("div", {
        class: q(["counter", {
          "is-dimmed": s(r).type === "yesterday"
        }])
      }, _(s(r).ordinal), 3), t("div", se, _(("lower" in d ? d.lower : s(E))(("t" in d ? d.t : s(g))("daily_reward.streak.title"))), 1)]), s(n) ? (u(), m("img", te)) : k("", !0), s(n) ? (u(), m("img", ae)) : k("", !0), t("div", oe, [I(_(("t" in d ? d.t : s(g))("daily_reward.streak.disclaimer")) + " ", 1), w[0] || (w[0] = t("i", {
        class: "fire"
      }, null, -1))])]))
    }
  }),
  ne = R(ie, [
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
    src: W,
    alt: "Pokras blum text",
    width: "275",
    height: "125"
  },
  ce = {
    key: 2,
    src: j,
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
  ge = $({
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
      const i = T().internal.isPokrasTheme;
      return (o, e) => {
        const n = Q,
          r = F,
          l = H,
          d = Z;
        return u(), m("div", re, [v(n), t("div", de, [s(i) ? h((u(), m("img", le, null, 512)), [
          [f, a.active]
        ]) : h((u(), S(r, {
          key: 1,
          name: "animations/Lightning",
          size: 128
        }, null, 512)), [
          [f, a.active]
        ]), s(i) ? h((u(), m("img", ce, null, 512)), [
          [f, a.active]
        ]) : k("", !0), t("div", ue, _(("t" in o ? o.t : s(g))("daily_reward.reward.title")), 1)]), t("div", me, [t("div", {
          class: q(["rewards-container", {
            active: a.active
          }])
        }, [t("div", pe, [e[1] || (e[1] = t("img", {
          src: K,
          alt: "Blum logo"
        }, null, -1)), t("div", _e, _(("formatBp" in o ? o.formatBp : s(A))(a.points)), 1), e[2] || (e[2] = t("div", {
          class: "name"
        }, "Blum Points", -1))]), t("div", ve, [e[3] || (e[3] = t("img", {
          src: V,
          alt: "Ticket"
        }, null, -1)), t("div", we, _(a.passes), 1), e[4] || (e[4] = t("div", {
          class: "name"
        }, "Play Passes", -1))])], 2), t("div", {
          class: "disclaimer",
          innerHTML: ("t" in o ? o.t : s(g))("daily_reward.reward.disclaimer", {
            n: a.tomorrowOrdinal
          })
        }, null, 8, ye), v(d, null, {
          default: z(() => [v(l, {
            label: ("t" in o ? o.t : s(g))("base.continue"),
            fill: "",
            class: "btn",
            size: s(x).LARGE,
            onClick: e[0] || (e[0] = w => o.$emit("continue"))
          }, null, 8, ["label", "size"])]),
          _: 1
        })])])
      }
    }
  }),
  he = R(ge, [
    ["__scopeId", "data-v-5e6ee64a"]
  ]),
  fe = {
    class: "pages-daily-reward"
  },
  ke = $({
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
      const i = O("STREAK");
      return (o, e) => {
        const n = ne,
          r = he;
        return u(), m("div", fe, [h(v(n, {
          "old-ordinal": a.oldOrdinal,
          "new-ordinal": a.newOrdinal,
          onDone: e[0] || (e[0] = l => i.value = "REWARD")
        }, null, 8, ["old-ordinal", "new-ordinal"]), [
          [f, s(i) === "STREAK"]
        ]), h(v(r, {
          active: s(i) === "REWARD",
          "tomorrow-ordinal": a.newOrdinal + 1,
          points: a.points,
          passes: a.passes,
          onContinue: e[1] || (e[1] = l => o.$emit("leave"))
        }, null, 8, ["active", "tomorrow-ordinal", "points", "passes"]), [
          [f, s(i) === "REWARD"]
        ])])
      }
    }
  }),
  $e = R(ke, [
    ["__scopeId", "data-v-f08141d8"]
  ]),
  Re = {
    key: 0,
    class: "daily-reward-page page no-padding"
  },
  be = $({
    __name: "daily-reward",
    setup(a) {
      const i = U(),
        o = G(),
        e = B(() => i.reward.value),
        n = B(() => {
          if (e.value === void 0) return;
          const [p, c] = e.value.days;
          return {
            oldOrdinal: e.value.countInRow !== void 0 ? e.value.countInRow : p.ordinal,
            newOrdinal: c.ordinal,
            points: c.reward.points,
            passes: c.reward.passes
          }
        });
      let r;
      const l = O(!1),
        d = () => {
          var y;
          const p = (y = e.value) == null ? void 0 : y.days[1].reward;
          p && l.value && P().bottom.success(`You’ve got ${A(p.points)} BP `, {
            onLeave: () => {
              setTimeout(() => P().bottom.success(D("span", ["You’ve got ", D("i", {
                class: "ticket"
              }), ` ${p.passes}`])), 300)
            }
          }), o.updateBalance();
          const c = M();
          c.value ? b().push(c.value) : b().replace({
            name: "index"
          })
        },
        w = async () => {
          if ((await Y.approveDailyRewardVisit()).err) throw J("Unable to approve visit");
          l.value = !0
        };
      return (() => {
        if (i.reward.value === void 0) {
          b().replace({
            name: "index"
          });
          return
        }
        r = setTimeout(w, 500)
      })(), N(() => {
        r && (clearInterval(r), r = void 0)
      }), (p, c) => {
        const y = $e;
        return s(n) ? (u(), m("div", Re, [v(y, {
          "old-ordinal": s(n).oldOrdinal,
          "new-ordinal": s(n).newOrdinal,
          points: s(n).points,
          passes: s(n).passes,
          onLeave: c[0] || (c[0] = Oe => d())
        }, null, 8, ["old-ordinal", "new-ordinal", "points", "passes"])])) : k("", !0)
      }
    }
  }),
  Ne = R(be, [
    ["__scopeId", "data-v-0aa0aa62"]
  ]);
export {
  Ne as
  default
};