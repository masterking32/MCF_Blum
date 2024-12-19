import {
  _ as ue
} from "./C-nckRSo.js";
import {
  _ as _e
} from "./C_fkQNiT.js";
import {
  _ as ye
} from "./BF3abaZR.js";
import {
  _ as E
} from "./D2Mdceld.js";
import {
  d as h,
  o as s,
  c as r,
  e as t,
  ao as ge,
  f as v,
  z as u,
  G as C,
  j as P,
  a as c,
  t as b,
  n as z,
  J as p,
  C as k,
  O as pe,
  _ as q,
  Y as J,
  at as I,
  au as O,
  E as Q,
  av as B,
  H as be,
  b as _,
  aw as Z,
  ax as X,
  ay as ke,
  Q as fe,
  ah as U,
  y as R,
  az as ve,
  U as f,
  m as x,
  aA as W,
  aB as we,
  F as L,
  ae as S,
  aC as he,
  aD as $e,
  aE as Re,
  aF as Te,
  aG as Ce,
  aH as F,
  V as N,
  B as G,
  x as Ae,
  h as Pe,
  am as Ee,
  T as ee,
  aI as Ie,
  a9 as V,
  aJ as xe,
  R as Se,
  a0 as Fe,
  X as K,
  $ as te,
  k as De,
  aK as Ne,
  w as Oe,
  aL as Be,
  I as Ke,
  aM as Le,
  aN as Me,
  Z as H,
  l as ze
} from "./Bxr-pE_l.js";
import {
  _ as Ue
} from "./DR5LWXji.js";
import {
  _ as We
} from "./Caw0jtFR.js";
import {
  _ as Ge
} from "./dJKOKjL2.js";
import "./BCRP8WJG.js";
const Ve = ["src"],
  He = h({
    __name: "Image",
    props: {
      name: {}
    },
    setup(a) {
      return (e, i) => (s(), r("img", {
        class: "kit-image",
        src: ("imgResolver" in e ? e.imgResolver : t(ge))(e.name)
      }, null, 8, Ve))
    }
  }),
  Ye = v(He, [
    ["__scopeId", "data-v-d66ca65e"]
  ]),
  je = h({
    __name: "PillClaim",
    props: {
      label: {
        default: () => u("base.claim")
      },
      style: {
        default: "default"
      },
      canClaim: {
        type: Boolean
      },
      claimFn: {}
    },
    setup(a) {
      const e = a,
        i = C(!1),
        l = P(() => i.value ? {
          state: "claiming"
        } : e.canClaim ? {
          state: "claim"
        } : {
          state: "claimed"
        }),
        n = async () => {
          l.value.state === "claim" && (i.value = !0, await e.claimFn(), i.value = !1)
        };
      return (o, d) => {
        const y = pe,
          m = q;
        return s(), r("button", {
          class: z(["kit-pill reset", [`is-state-${t(l).state}`, `is-style-${o.style}`]]),
          onClick: d[0] || (d[0] = g => n())
        }, [c("div", {
          class: z(["label", {
            "is-hidden": t(l).state !== "claim"
          }])
        }, b(o.label), 3), t(l).state === "claiming" ? (s(), p(y, {
          key: 0,
          size: 16,
          class: "spinner"
        })) : t(l).state === "claimed" ? (s(), p(m, {
          key: 1,
          name: "circle-check-white",
          class: "claimed-icon"
        })) : k("", !0)], 2)
      }
    }
  }),
  qe = v(je, [
    ["__scopeId", "data-v-db0e880c"]
  ]),
  Je = {
    class: "pages-index-widgets-daily-reward"
  },
  Qe = {
    key: 1,
    class: "widget has-radius"
  },
  Ze = {
    class: "compose"
  },
  Xe = {
    class: "title"
  },
  et = {
    key: 0,
    class: "subtitle"
  },
  tt = h({
    __name: "IndexWidgetsDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(a) {
      const e = a,
        i = J(),
        l = (o, d) => async () => {
          const y = await e.dailyRewardClaim();
          ke(y, {
            Err: () => i.error(u("base.claim_error")),
            Ok: m => {
              o === I.RESTORE && i.success(u("daily_reward.streak_restored", {
                days: d
              })), i.success(`You’ve got ${fe(m.claimedReward.points)} BP`), i.success(U("span", ["You’ve got ", U("i", {
                class: "ticket"
              }), ` ${m.claimedReward.passes}`])), R().makeConfetti()
            }
          })
        }, n = P(() => {
          if (e.dailyReward === void 0) return;
          const o = e.dailyReward.currentStreakDays,
            d = `${o}-${u("base.n.days",o)}`;
          if (e.dailyReward.claim === I.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: u("daily_reward.missed"),
            subtitle: O(u("daily_reward.restore_current_streak", {
              days: d
            })),
            claim: {
              label: u("base.restore"),
              white: !0,
              can: !0,
              fn: l(e.dailyReward.claim, d)
            }
          };
          const y = (() => {
            const g = Q().ms100ticker.value;
            if (!g) return B();
            const T = be(e.dailyReward.canClaimAt - g, "letters");
            return O(u("base.claim_next_in", {
              time: T
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: u("daily_reward.current_streak", {
              days: d
            }),
            subtitle: y,
            claim: {
              can: e.dailyReward.claim !== I.UNAVAILABLE,
              fn: l(e.dailyReward.claim, d)
            }
          }
        });
      return (o, d) => {
        const y = E,
          m = Ye,
          g = qe;
        return s(), r("div", Je, [t(n) ? (s(), r("div", Qe, [_(m, {
          name: t(n).icon,
          class: "icon"
        }, null, 8, ["name"]), c("div", Ze, [c("div", Xe, b(t(n).title), 1), ("isOk" in o ? o.isOk : t(Z))(t(n).subtitle) ? (s(), r("div", et, b(t(n).subtitle.data), 1)) : (s(), p(y, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), t(n).claim ? (s(), p(g, {
          key: 0,
          label: t(n).claim.label,
          "can-claim": t(n).claim.can,
          "claim-fn": t(n).claim.fn,
          style: X(t(n).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : k("", !0)])) : (s(), p(y, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  at = v(tt, [
    ["__scopeId", "data-v-41f4c9cc"]
  ]),
  st = {
    class: "pages-tribe-external-widget-template has-radius"
  },
  nt = {
    class: "img"
  },
  it = ["src"],
  lt = {
    class: "content"
  },
  ot = {
    class: "title"
  },
  rt = {
    class: "subtitle"
  },
  ct = h({
    __name: "TribeExternalWidgetTemplate",
    props: {
      img: {
        type: String,
        default: void 0
      },
      title: {
        type: String,
        required: !0
      },
      subtitle: {
        type: String,
        required: !0
      },
      link: {
        type: String,
        default: void 0
      },
      linkText: {
        type: String,
        required: !0
      }
    },
    setup(a) {
      return (e, i) => {
        const l = we;
        return s(), r("div", st, [c("div", nt, [e.$slots.img ? ve(e.$slots, "img", {
          key: 0
        }, void 0, !0) : a.img ? (s(), r("img", {
          key: 1,
          src: a.img,
          alt: "img"
        }, null, 8, it)) : k("", !0)]), c("div", lt, [c("div", ot, b(a.title), 1), c("div", rt, b(a.subtitle), 1)]), _(l, {
          link: a.link,
          class: "btn",
          type: a.link ? t(W).LINK : t(W).SPAN
        }, {
          default: f(() => [x(b(a.linkText), 1)]),
          _: 1
        }, 8, ["link", "type"])])
      }
    }
  }),
  dt = v(ct, [
    ["__scopeId", "data-v-24218f05"]
  ]),
  Y = "" + new URL("Dizzy.DsQqlcsY.webp", import.meta.url).href,
  mt = {
    class: "pages-tribe-external-widget"
  },
  ut = h({
    __name: "TribeExternalWidget",
    props: {
      myTribeRes: {
        type: Object,
        default: void 0
      }
    },
    setup(a) {
      return (e, i) => {
        const l = E,
          n = Ue,
          o = dt;
        return s(), r("div", mt, [!a.myTribeRes || a.myTribeRes.type === "not_created" ? (s(), p(l, {
          key: 0,
          class: "skeleton has-radius"
        })) : (s(), r(L, {
          key: 1
        }, [a.myTribeRes.type === "ok" ? (s(), p(o, {
          key: 0,
          title: a.myTribeRes.tribe.title,
          subtitle: a.myTribeRes.tribe.getEarnBalanceOrCalculating(),
          link: ("useRouter" in e ? e.useRouter : t(S))().resolve({
            name: "tribe-slug"
          }).fullPath,
          "link-text": ("t" in e ? e.t : t(u))("tribes.widget.base.btn_text")
        }, {
          img: f(() => [_(n, {
            "avatar-url": a.myTribeRes.tribe.getAvatarUrl(),
            "default-avatar": a.myTribeRes.tribe.defaultAvatar,
            size: 38
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["title", "subtitle", "link", "link-text"])) : a.myTribeRes.type === "not_found" ? (s(), p(o, {
          key: 1,
          img: t(Y),
          title: ("t" in e ? e.t : t(u))("tribes.widget.base.title"),
          subtitle: ("t" in e ? e.t : t(u))("tribes.widget.base.subtitle"),
          "link-text": ("t" in e ? e.t : t(u))("tribes.widget.base.btn_text"),
          link: ("useRouter" in e ? e.useRouter : t(S))().resolve({
            name: "tribe-join"
          }).fullPath
        }, null, 8, ["img", "title", "subtitle", "link-text", "link"])) : a.myTribeRes.type === "validating" ? (s(), p(o, {
          key: 2,
          img: t(Y),
          title: ("t" in e ? e.t : t(u))("tribes.widget.base.title"),
          subtitle: ("t" in e ? e.t : t(u))("tribes.widget.base.subtitle"),
          "link-text": ("t" in e ? e.t : t(u))("tribes.widget.verifying.btn_text"),
          link: ("useRouter" in e ? e.useRouter : t(S))().resolve({
            name: "tribe-join"
          }).fullPath
        }, null, 8, ["img", "title", "subtitle", "link-text", "link"])) : k("", !0)], 64))])
      }
    }
  }),
  _t = v(ut, [
    ["__scopeId", "data-v-b1ee1be8"]
  ]),
  yt = {
    class: "pages-index-widgets"
  },
  gt = h({
    __name: "IndexWidgets",
    props: {
      tribe: {},
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(a) {
      return (e, i) => {
        const l = at,
          n = _t;
        return s(), r("div", yt, [_(l, {
          "daily-reward": e.dailyReward,
          "daily-reward-claim": e.dailyRewardClaim,
          class: "widget"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), _(n, {
          "my-tribe-res": e.tribe,
          class: "widget"
        }, null, 8, ["my-tribe-res"])])
      }
    }
  }),
  pt = v(gt, [
    ["__scopeId", "data-v-3312c1b1"]
  ]),
  bt = {
    key: 0,
    class: "pages-index-drop-skeleton"
  },
  kt = {
    class: "container"
  },
  ft = {
    class: "content"
  },
  vt = {
    key: 1,
    class: "pages-index-drop"
  },
  wt = {
    key: 0,
    src: he,
    alt: "Pokras heart token",
    class: "pokras-token-img"
  },
  ht = {
    key: 1,
    src: $e,
    alt: "Halloween heart token",
    class: "halloween-token-img"
  },
  $t = {
    key: 2,
    src: Re,
    alt: "Tsubasa heart token",
    class: "tsubasa-token-img"
  },
  Rt = {
    key: 3,
    src: Te,
    alt: "Game token",
    class: "token-img"
  },
  Tt = {
    class: "content"
  },
  Ct = {
    class: "title-with-balance"
  },
  At = {
    class: "title"
  },
  Pt = {
    class: "pass"
  },
  Et = h({
    __name: "IndexDrop",
    props: {
      playPasses: {
        type: Number,
        default: void 0
      }
    },
    setup(a) {
      const e = a,
        i = R().internal.isPokrasTheme,
        l = R().internal.isHalloweenTheme,
        n = R().internal.isTsubasaTheme,
        o = P(() => e.playPasses === void 0 ? "skeleton" : e.playPasses > 0 ? "play" : "invite");
      return (d, y) => {
        const m = E,
          g = Ce;
        return t(o) === "skeleton" ? (s(), r("div", bt, [c("div", kt, [c("div", ft, [_(m, {
          class: "top",
          rounded: ""
        }), _(m, {
          class: "bottom",
          rounded: ""
        })]), _(m, {
          class: "btn",
          rounded: ""
        })])])) : (s(), r("div", vt, [t(i) ? (s(), r("img", wt)) : t(l) ? (s(), r("img", ht)) : t(n) ? (s(), r("img", $t)) : (s(), r("img", Rt)), c("div", Tt, [c("div", Ct, [c("div", At, b(("t" in d ? d.t : t(u))("game.card.title")), 1), c("div", Pt, [y[0] || (y[0] = c("i", {
          class: "ticket"
        }, null, -1)), x(" " + b(a.playPasses), 1)])]), t(o) === "play" ? (s(), p(g, {
          key: 0,
          to: {
            name: "game"
          },
          class: "play-btn"
        }, {
          default: f(() => [x(b(("t" in d ? d.t : t(u))("base.play")), 1)]),
          _: 1
        })) : k("", !0), t(o) === "invite" ? (s(), p(g, {
          key: 1,
          to: {
            name: "frens"
          },
          class: "play-btn secondary"
        }, {
          default: f(() => [x(b(("t" in d ? d.t : t(u))("game.card.invite_for_pp")) + " ", 1), y[1] || (y[1] = c("i", {
            class: "ticket"
          }, null, -1))]),
          _: 1
        })) : k("", !0)])]))
      }
    }
  }),
  It = v(Et, [
    ["__scopeId", "data-v-22806f69"]
  ]),
  xt = {
    class: "index-farming-button"
  },
  St = {
    class: "button-label"
  },
  Ft = {
    key: 0,
    class: "lightning"
  },
  Dt = {
    class: "button-label"
  },
  Nt = {
    key: 0,
    class: "lightning"
  },
  Ot = {
    class: "time-left"
  },
  Bt = {
    class: "button-label"
  },
  Kt = {
    class: "amount"
  },
  Lt = h({
    __name: "IndexFarmingButton",
    props: {
      farming: {
        type: Object,
        default: void 0
      },
      isFastFarmingEnabled: {
        type: Boolean,
        required: !0
      },
      disabled: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["start", "claim"],
    setup(a) {
      return (e, i) => {
        const l = E,
          n = Ae,
          o = q,
          d = We;
        return s(), r("div", xt, [!a.farming || a.disabled ? (s(), p(l, {
          key: 0,
          class: "skeleton"
        })) : (s(), r(L, {
          key: 1
        }, [a.farming.status === t(F).READY ? (s(), p(n, {
          key: 0,
          size: t(N).LARGE,
          disabled: a.disabled,
          fill: "",
          class: "button",
          onClick: i[0] || (i[0] = y => e.$emit("start"))
        }, {
          default: f(() => [c("div", St, [a.isFastFarmingEnabled ? (s(), r("i", Ft)) : k("", !0), c("span", null, b(("t" in e ? e.t : t(u))("farming.start")), 1)])]),
          _: 1
        }, 8, ["size", "disabled"])) : a.farming.status === t(F).ACTIVE ? (s(), p(n, {
          key: 1,
          type: t(G).SECONDARY,
          size: t(N).LARGE,
          disabled: a.disabled,
          fill: "",
          centered: "",
          class: "button is-active",
          style: X({
            "background-position-x": `-${a.farming.progress}%`
          })
        }, {
          default: f(() => [c("div", Dt, [a.isFastFarmingEnabled ? (s(), r("i", Nt)) : k("", !0), c("div", null, b(("t" in e ? e.t : t(u))("farming.farming")), 1), _(o, {
            name: "logo-token",
            class: "coin"
          }), _(d, {
            class: "amount",
            value: a.farming.balance.formatted
          }, null, 8, ["value"])])]),
          right: f(() => [c("div", Ot, b(a.farming.timeLabel), 1)]),
          _: 1
        }, 8, ["type", "size", "disabled", "style"])) : k("", !0), a.farming.status === t(F).DONE ? (s(), p(n, {
          key: 2,
          type: t(G).DROP,
          size: t(N).LARGE,
          disabled: a.disabled,
          fill: "",
          class: "button is-done",
          onClick: i[1] || (i[1] = y => e.$emit("claim", a.farming.balance))
        }, {
          default: f(() => [c("div", Bt, [c("div", null, b(("t" in e ? e.t : t(u))("farming.claim")), 1), _(o, {
            name: "logo-token",
            class: "coin"
          }), c("div", Kt, b(a.farming.balance.formatted), 1)])]),
          _: 1
        }, 8, ["type", "size", "disabled"])) : k("", !0)], 64))])
      }
    }
  }),
  Mt = v(Lt, [
    ["__scopeId", "data-v-0419d40a"]
  ]),
  zt = {
    key: 0,
    class: "pokras-init-modals"
  },
  Ut = 400,
  j = "pokras-hacked-welcome",
  Wt = h({
    __name: "IndexPokrasModals",
    setup(a) {
      const e = R().internal.isPokrasTheme,
        {
          $webApp: i
        } = Pe(),
        l = C(!1),
        n = C(!1),
        o = [],
        d = async () => {
          n.value || (l.value = !1, await i.storage.cloud.set(j, "1"))
        }, y = () => {
          n.value = !1
        };
      (async () => {
        if (!e.value) return;
        await i.storage.cloud.get(j) || (l.value = !0, o.push(setTimeout(() => {
          n.value = !0
        }, Ut)))
      })();
      const {
        blockOverflow: g,
        unblockOverflow: T
      } = R();
      return Ee(() => l.value || n.value, $ => {
        $ ? g() : T()
      }), ee(() => {
        o.forEach($ => clearTimeout($))
      }), ($, M) => t(e) ? (s(), p(V, {
        key: 0,
        name: "hacked-modals-transition"
      }, {
        default: f(() => [t(l) || t(n) ? (s(), r("div", zt, [t(l) ? (s(), r("img", {
          key: 0,
          src: Ie,
          alt: "Pokras welcome modal",
          width: "251",
          height: "368",
          class: "welcome-modal",
          onClick: d
        })) : k("", !0), _(V, {
          name: "hacked-modal-transition"
        }, {
          default: f(() => [t(n) ? (s(), r("img", {
            key: 0,
            src: xe,
            alt: "Pokras hacked modal",
            width: "251",
            height: "397",
            class: "hacked-modal",
            onClick: y
          })) : k("", !0)]),
          _: 1
        })])) : k("", !0)]),
        _: 1
      })) : k("", !0)
    }
  }),
  Gt = v(Wt, [
    ["__scopeId", "data-v-2797486d"]
  ]),
  Vt = () => {
    const a = C(),
      e = () => {
        a.value && (clearTimeout(a.value), a.value = void 0)
      };
    return {
      set: (n, o) => {
        e(), o > 0 && (a.value = setTimeout(n, o))
      },
      destroy: () => e()
    }
  },
  Ht = (a, e) => {
    const i = {
      ...a
    };
    return i.currentStreakDays = e.currentStreakDays, i.claim = I.UNAVAILABLE, i.canClaimAt = e.canClaimAt, i
  },
  Yt = () => {
    const a = C(!1),
      e = C(),
      i = Vt(),
      n = Se(async () => {
        const m = Fe(await K.getDailyReward());
        if (Z(m)) {
          const g = Q().getCurrentTimestamp();
          if (g) {
            const T = m.data.canClaimAt - g;
            i.set(() => n.exec(), T)
          }
        }
        return m
      }, m => e.value = m),
      o = async () => {
        if (a.value || !e.value) return B();
        a.value = !0;
        const m = await K.claimDailyReward();
        return a.value = !1, m.err ? B() : (e.value = Ht(e.value, m.data), n.exec(), setTimeout(() => te().updateBalance(), 500), O(m.data))
      };
    return {
      init: async () => {
        await n.exec()
      },
      destroy: () => {
        n.destroy(), i.destroy(), a.value = !1, e.value = void 0
      },
      reward: P(() => e.value),
      claim: o,
      isClaiming: P(() => a.value)
    }
  },
  jt = {
    class: "pages-index-index"
  },
  qt = {
    class: "profile-with-balance"
  },
  Jt = {
    key: 0,
    class: "username"
  },
  Qt = {
    key: 1,
    class: "balance"
  },
  Zt = {
    key: 3,
    class: "pokras-drop-game-intro"
  },
  Xt = h({
    __name: "Index",
    setup(a) {
      const e = R().internal.isPokrasTheme,
        i = De().getters.mustGetUser.value.username,
        l = te(),
        n = l.balanceVary,
        o = l.activeFarming,
        d = l.playPasses,
        y = l.isFastFarmingEnabled,
        m = Ne(),
        g = Yt(),
        T = Me(() => {
          ze().public.ENVIRONMENT !== "prod" && S().push({
            name: "debug"
          })
        }, 5),
        $ = C(!1),
        M = async () => {
          await l.startFarming(), H().farming.farmingStarted()
        }, ae = A => {
          $.value = !0, l.claimFarming().then(() => $.value = !1), R().makeConfetti(), J().success(u("base.you_got_bp", {
            bp: A.formatted
          })), H().farming.farmingClaimed(A.decimal)
        };
      return (async () => {
        await Promise.all([K.getFrensUsing(), g.init()])
      })(), ee(() => {
        g.destroy()
      }), (A, w) => {
        const se = ue,
          ne = _e,
          ie = ye,
          le = E,
          oe = pt,
          re = It,
          ce = Mt,
          de = Ge,
          me = Gt;
        return s(), r(L, null, [c("div", jt, [Oe(_(se, null, null, 512), [
          [Be, t(o) && t(o).status === ("FARMING_STATUS" in A ? A.FARMING_STATUS : t(F)).ACTIVE]
        ]), c("div", qt, [_(ne, {
          small: "",
          class: "avatar",
          onClick: w[0] || (w[0] = D => t(T)())
        }), t(i) ? (s(), r("div", Jt, b(t(i)), 1)) : k("", !0), t(n) ? (s(), r("div", Qt, [w[3] || (w[3] = c("img", {
          src: Ke,
          alt: "Blum logo"
        }, null, -1)), _(ie, {
          class: "value",
          value: t(n).decimal
        }, null, 8, ["value"])])) : (s(), p(le, {
          key: 2,
          class: "skeleton"
        })), _(oe, {
          tribe: t(m).myTribeRes.value,
          "daily-reward": t(g).reward.value,
          "daily-reward-claim": t(g).claim,
          class: "widgets"
        }, null, 8, ["tribe", "daily-reward", "daily-reward-claim"]), t(e) ? (s(), r("div", Zt, w[4] || (w[4] = [c("img", {
          src: Le,
          alt: "Pokras drop game intro image"
        }, null, -1)]))) : k("", !0)]), _(re, {
          class: "drop-zone",
          "play-passes": t(d)
        }, null, 8, ["play-passes"]), _(de, null, {
          default: f(() => [_(ce, {
            farming: t(o),
            "is-fast-farming-enabled": t(y),
            disabled: t($),
            onStart: w[1] || (w[1] = D => M()),
            onClaim: w[2] || (w[2] = D => ae(D))
          }, null, 8, ["farming", "is-fast-farming-enabled", "disabled"])]),
          _: 1
        })]), _(me)], 64)
      }
    }
  }),
  ea = v(Xt, [
    ["__scopeId", "data-v-cbc3bf05"]
  ]),
  ta = {},
  aa = {
    class: "index-page page"
  };

function sa(a, e) {
  const i = ea;
  return s(), r("div", aa, [_(i)])
}
const ya = v(ta, [
  ["render", sa],
  ["__scopeId", "data-v-20e0bed3"]
]);
export {
  ya as
  default
};