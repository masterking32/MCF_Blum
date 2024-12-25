import {
  _ as ue
} from "./C7yDj6FP.js";
import {
  _ as _e
} from "./ykkfKhPL.js";
import {
  _ as ye
} from "./DH4lEchd.js";
import {
  _ as E
} from "./G8oGagOI.js";
import {
  d as $,
  o as s,
  c as r,
  e as t,
  ao as ge,
  f as v,
  z as m,
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
  b as y,
  aw as Z,
  ax as X,
  ay as ke,
  Q as fe,
  ah as U,
  y as T,
  az as ve,
  U as f,
  m as x,
  aA as W,
  aB as he,
  F as L,
  ae as S,
  aC as we,
  aD as $e,
  aE as Re,
  aF as Te,
  aG as Ce,
  aH as Ae,
  aI as F,
  V as N,
  B as G,
  x as Pe,
  h as Ee,
  am as Ie,
  T as ee,
  aJ as xe,
  a9 as V,
  aK as Se,
  R as Fe,
  a0 as De,
  X as K,
  $ as te,
  k as Ne,
  aL as Oe,
  w as Be,
  aM as Ke,
  I as Le,
  aN as Me,
  aO as ze,
  Z as Y,
  l as Ue
} from "./LwuWi-s8.js";
import {
  _ as We
} from "./BTO4WSTJ.js";
import {
  _ as Ge
} from "./DZf0dlyT.js";
import {
  _ as Ve
} from "./7MHgz_R1.js";
import "./CdD28nwc.js";
const Ye = ["src"],
  He = $({
    __name: "Image",
    props: {
      name: {}
    },
    setup(a) {
      return (e, i) => (s(), r("img", {
        class: "kit-image",
        src: ("imgResolver" in e ? e.imgResolver : t(ge))(e.name)
      }, null, 8, Ye))
    }
  }),
  je = v(He, [
    ["__scopeId", "data-v-d66ca65e"]
  ]),
  qe = $({
    __name: "PillClaim",
    props: {
      label: {
        default: () => m("base.claim")
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
      return (o, _) => {
        const u = pe,
          d = q;
        return s(), r("button", {
          class: z(["kit-pill reset", [`is-state-${t(l).state}`, `is-style-${o.style}`]]),
          onClick: _[0] || (_[0] = g => n())
        }, [c("div", {
          class: z(["label", {
            "is-hidden": t(l).state !== "claim"
          }])
        }, b(o.label), 3), t(l).state === "claiming" ? (s(), p(u, {
          key: 0,
          size: 16,
          class: "spinner"
        })) : t(l).state === "claimed" ? (s(), p(d, {
          key: 1,
          name: "circle-check-white",
          class: "claimed-icon"
        })) : k("", !0)], 2)
      }
    }
  }),
  Je = v(qe, [
    ["__scopeId", "data-v-db0e880c"]
  ]),
  Qe = {
    class: "pages-index-widgets-daily-reward"
  },
  Ze = {
    key: 1,
    class: "widget has-radius"
  },
  Xe = {
    class: "compose"
  },
  et = {
    class: "title"
  },
  tt = {
    key: 0,
    class: "subtitle"
  },
  at = $({
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
        l = (o, _) => async () => {
          const u = await e.dailyRewardClaim();
          ke(u, {
            Err: () => i.error(m("base.claim_error")),
            Ok: d => {
              o === I.RESTORE && i.success(m("daily_reward.streak_restored", {
                days: _
              })), i.success(`You’ve got ${fe(d.claimedReward.points)} BP`), i.success(U("span", ["You’ve got ", U("i", {
                class: "ticket"
              }), ` ${d.claimedReward.passes}`])), T().makeConfetti()
            }
          })
        }, n = P(() => {
          if (e.dailyReward === void 0) return;
          const o = e.dailyReward.currentStreakDays,
            _ = `${o}-${m("base.n.days",o)}`;
          if (e.dailyReward.claim === I.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: m("daily_reward.missed"),
            subtitle: O(m("daily_reward.restore_current_streak", {
              days: _
            })),
            claim: {
              label: m("base.restore"),
              white: !0,
              can: !0,
              fn: l(e.dailyReward.claim, _)
            }
          };
          const u = (() => {
            const g = Q().ms100ticker.value;
            if (!g) return B();
            const h = be(e.dailyReward.canClaimAt - g, "letters");
            return O(m("base.claim_next_in", {
              time: h
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: m("daily_reward.current_streak", {
              days: _
            }),
            subtitle: u,
            claim: {
              can: e.dailyReward.claim !== I.UNAVAILABLE,
              fn: l(e.dailyReward.claim, _)
            }
          }
        });
      return (o, _) => {
        const u = E,
          d = je,
          g = Je;
        return s(), r("div", Qe, [t(n) ? (s(), r("div", Ze, [y(d, {
          name: t(n).icon,
          class: "icon"
        }, null, 8, ["name"]), c("div", Xe, [c("div", et, b(t(n).title), 1), ("isOk" in o ? o.isOk : t(Z))(t(n).subtitle) ? (s(), r("div", tt, b(t(n).subtitle.data), 1)) : (s(), p(u, {
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
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : k("", !0)])) : (s(), p(u, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  st = v(at, [
    ["__scopeId", "data-v-41f4c9cc"]
  ]),
  nt = {
    class: "pages-tribe-external-widget-template has-radius"
  },
  it = {
    class: "img"
  },
  lt = ["src"],
  ot = {
    class: "content"
  },
  rt = {
    class: "title"
  },
  ct = {
    class: "subtitle"
  },
  dt = $({
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
        const l = he;
        return s(), r("div", nt, [c("div", it, [e.$slots.img ? ve(e.$slots, "img", {
          key: 0
        }, void 0, !0) : a.img ? (s(), r("img", {
          key: 1,
          src: a.img,
          alt: "img"
        }, null, 8, lt)) : k("", !0)]), c("div", ot, [c("div", rt, b(a.title), 1), c("div", ct, b(a.subtitle), 1)]), y(l, {
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
  mt = v(dt, [
    ["__scopeId", "data-v-24218f05"]
  ]),
  H = "" + new URL("Dizzy.DsQqlcsY.webp", import.meta.url).href,
  ut = {
    class: "pages-tribe-external-widget"
  },
  _t = $({
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
          n = We,
          o = mt;
        return s(), r("div", ut, [!a.myTribeRes || a.myTribeRes.type === "not_created" ? (s(), p(l, {
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
          "link-text": ("t" in e ? e.t : t(m))("tribes.widget.base.btn_text")
        }, {
          img: f(() => [y(n, {
            "avatar-url": a.myTribeRes.tribe.getAvatarUrl(),
            "default-avatar": a.myTribeRes.tribe.defaultAvatar,
            size: 38
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["title", "subtitle", "link", "link-text"])) : a.myTribeRes.type === "not_found" ? (s(), p(o, {
          key: 1,
          img: t(H),
          title: ("t" in e ? e.t : t(m))("tribes.widget.base.title"),
          subtitle: ("t" in e ? e.t : t(m))("tribes.widget.base.subtitle"),
          "link-text": ("t" in e ? e.t : t(m))("tribes.widget.base.btn_text"),
          link: ("useRouter" in e ? e.useRouter : t(S))().resolve({
            name: "tribe-join"
          }).fullPath
        }, null, 8, ["img", "title", "subtitle", "link-text", "link"])) : a.myTribeRes.type === "validating" ? (s(), p(o, {
          key: 2,
          img: t(H),
          title: ("t" in e ? e.t : t(m))("tribes.widget.base.title"),
          subtitle: ("t" in e ? e.t : t(m))("tribes.widget.base.subtitle"),
          "link-text": ("t" in e ? e.t : t(m))("tribes.widget.verifying.btn_text"),
          link: ("useRouter" in e ? e.useRouter : t(S))().resolve({
            name: "tribe-join"
          }).fullPath
        }, null, 8, ["img", "title", "subtitle", "link-text", "link"])) : k("", !0)], 64))])
      }
    }
  }),
  yt = v(_t, [
    ["__scopeId", "data-v-b1ee1be8"]
  ]),
  gt = {
    class: "pages-index-widgets"
  },
  pt = $({
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
        const l = st,
          n = yt;
        return s(), r("div", gt, [y(l, {
          "daily-reward": e.dailyReward,
          "daily-reward-claim": e.dailyRewardClaim,
          class: "widget"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), y(n, {
          "my-tribe-res": e.tribe,
          class: "widget"
        }, null, 8, ["my-tribe-res"])])
      }
    }
  }),
  bt = v(pt, [
    ["__scopeId", "data-v-3312c1b1"]
  ]),
  kt = {
    key: 0,
    class: "pages-index-drop-skeleton"
  },
  ft = {
    class: "container"
  },
  vt = {
    class: "content"
  },
  ht = {
    key: 1,
    class: "pages-index-drop"
  },
  wt = {
    key: 0,
    src: we,
    alt: "Pokras heart token",
    class: "pokras-token-img"
  },
  $t = {
    key: 1,
    src: $e,
    alt: "Halloween heart token",
    class: "halloween-token-img"
  },
  Rt = {
    key: 2,
    src: Re,
    alt: "Tsubasa heart token",
    class: "tsubasa-token-img"
  },
  Tt = {
    key: 3,
    src: Te,
    alt: "Tsubasa heart token",
    class: "new-year-token-img"
  },
  Ct = {
    key: 4,
    src: Ce,
    alt: "Game token",
    class: "token-img"
  },
  At = {
    class: "content"
  },
  Pt = {
    class: "title-with-balance"
  },
  Et = {
    class: "title"
  },
  It = {
    class: "pass"
  },
  xt = $({
    __name: "IndexDrop",
    props: {
      playPasses: {
        type: Number,
        default: void 0
      }
    },
    setup(a) {
      const e = a,
        i = T().internal.isPokrasTheme,
        l = T().internal.isHalloweenTheme,
        n = T().internal.isTsubasaTheme,
        o = T().internal.isNewYearTheme,
        _ = P(() => e.playPasses === void 0 ? "skeleton" : e.playPasses > 0 ? "play" : "invite");
      return (u, d) => {
        const g = E,
          h = Ae;
        return t(_) === "skeleton" ? (s(), r("div", kt, [c("div", ft, [c("div", vt, [y(g, {
          class: "top",
          rounded: ""
        }), y(g, {
          class: "bottom",
          rounded: ""
        })]), y(g, {
          class: "btn",
          rounded: ""
        })])])) : (s(), r("div", ht, [t(i) ? (s(), r("img", wt)) : t(l) ? (s(), r("img", $t)) : t(n) ? (s(), r("img", Rt)) : t(o) ? (s(), r("img", Tt)) : (s(), r("img", Ct)), c("div", At, [c("div", Pt, [c("div", Et, b(("t" in u ? u.t : t(m))("game.card.title")), 1), c("div", It, [d[0] || (d[0] = c("i", {
          class: "ticket"
        }, null, -1)), x(" " + b(a.playPasses), 1)])]), t(_) === "play" ? (s(), p(h, {
          key: 0,
          to: {
            name: "game"
          },
          class: "play-btn"
        }, {
          default: f(() => [x(b(("t" in u ? u.t : t(m))("base.play")), 1)]),
          _: 1
        })) : k("", !0), t(_) === "invite" ? (s(), p(h, {
          key: 1,
          to: {
            name: "frens"
          },
          class: "play-btn secondary"
        }, {
          default: f(() => [x(b(("t" in u ? u.t : t(m))("game.card.invite_for_pp")) + " ", 1), d[1] || (d[1] = c("i", {
            class: "ticket"
          }, null, -1))]),
          _: 1
        })) : k("", !0)])]))
      }
    }
  }),
  St = v(xt, [
    ["__scopeId", "data-v-f3843799"]
  ]),
  Ft = {
    class: "index-farming-button"
  },
  Dt = {
    class: "button-label"
  },
  Nt = {
    key: 0,
    class: "lightning"
  },
  Ot = {
    class: "button-label"
  },
  Bt = {
    key: 0,
    class: "lightning"
  },
  Kt = {
    class: "time-left"
  },
  Lt = {
    class: "button-label"
  },
  Mt = {
    class: "amount"
  },
  zt = $({
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
          n = Pe,
          o = q,
          _ = Ge;
        return s(), r("div", Ft, [!a.farming || a.disabled ? (s(), p(l, {
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
          onClick: i[0] || (i[0] = u => e.$emit("start"))
        }, {
          default: f(() => [c("div", Dt, [a.isFastFarmingEnabled ? (s(), r("i", Nt)) : k("", !0), c("span", null, b(("t" in e ? e.t : t(m))("farming.start")), 1)])]),
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
          default: f(() => [c("div", Ot, [a.isFastFarmingEnabled ? (s(), r("i", Bt)) : k("", !0), c("div", null, b(("t" in e ? e.t : t(m))("farming.farming")), 1), y(o, {
            name: "logo-token",
            class: "coin"
          }), y(_, {
            class: "amount",
            value: a.farming.balance.formatted
          }, null, 8, ["value"])])]),
          right: f(() => [c("div", Kt, b(a.farming.timeLabel), 1)]),
          _: 1
        }, 8, ["type", "size", "disabled", "style"])) : k("", !0), a.farming.status === t(F).DONE ? (s(), p(n, {
          key: 2,
          type: t(G).DROP,
          size: t(N).LARGE,
          disabled: a.disabled,
          fill: "",
          class: "button is-done",
          onClick: i[1] || (i[1] = u => e.$emit("claim", a.farming.balance))
        }, {
          default: f(() => [c("div", Lt, [c("div", null, b(("t" in e ? e.t : t(m))("farming.claim")), 1), y(o, {
            name: "logo-token",
            class: "coin"
          }), c("div", Mt, b(a.farming.balance.formatted), 1)])]),
          _: 1
        }, 8, ["type", "size", "disabled"])) : k("", !0)], 64))])
      }
    }
  }),
  Ut = v(zt, [
    ["__scopeId", "data-v-0419d40a"]
  ]),
  Wt = {
    key: 0,
    class: "pokras-init-modals"
  },
  Gt = 400,
  j = "pokras-hacked-welcome",
  Vt = $({
    __name: "IndexPokrasModals",
    setup(a) {
      const e = T().internal.isPokrasTheme,
        {
          $webApp: i
        } = Ee(),
        l = C(!1),
        n = C(!1),
        o = [],
        _ = async () => {
          n.value || (l.value = !1, await i.storage.cloud.set(j, "1"))
        }, u = () => {
          n.value = !1
        };
      (async () => {
        if (!e.value) return;
        await i.storage.cloud.get(j) || (l.value = !0, o.push(setTimeout(() => {
          n.value = !0
        }, Gt)))
      })();
      const {
        blockOverflow: g,
        unblockOverflow: h
      } = T();
      return Ie(() => l.value || n.value, R => {
        R ? g() : h()
      }), ee(() => {
        o.forEach(R => clearTimeout(R))
      }), (R, M) => t(e) ? (s(), p(V, {
        key: 0,
        name: "hacked-modals-transition"
      }, {
        default: f(() => [t(l) || t(n) ? (s(), r("div", Wt, [t(l) ? (s(), r("img", {
          key: 0,
          src: xe,
          alt: "Pokras welcome modal",
          width: "251",
          height: "368",
          class: "welcome-modal",
          onClick: _
        })) : k("", !0), y(V, {
          name: "hacked-modal-transition"
        }, {
          default: f(() => [t(n) ? (s(), r("img", {
            key: 0,
            src: Se,
            alt: "Pokras hacked modal",
            width: "251",
            height: "397",
            class: "hacked-modal",
            onClick: u
          })) : k("", !0)]),
          _: 1
        })])) : k("", !0)]),
        _: 1
      })) : k("", !0)
    }
  }),
  Yt = v(Vt, [
    ["__scopeId", "data-v-2797486d"]
  ]),
  Ht = () => {
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
  jt = (a, e) => {
    const i = {
      ...a
    };
    return i.currentStreakDays = e.currentStreakDays, i.claim = I.UNAVAILABLE, i.canClaimAt = e.canClaimAt, i
  },
  qt = () => {
    const a = C(!1),
      e = C(),
      i = Ht(),
      n = Fe(async () => {
        const d = De(await K.getDailyReward());
        if (Z(d)) {
          const g = Q().getCurrentTimestamp();
          if (g) {
            const h = d.data.canClaimAt - g;
            i.set(() => n.exec(), h)
          }
        }
        return d
      }, d => e.value = d),
      o = async () => {
        if (a.value || !e.value) return B();
        a.value = !0;
        const d = await K.claimDailyReward();
        return a.value = !1, d.err ? B() : (e.value = jt(e.value, d.data), n.exec(), setTimeout(() => te().updateBalance(), 500), O(d.data))
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
  Jt = {
    class: "pages-index-index"
  },
  Qt = {
    class: "profile-with-balance"
  },
  Zt = {
    key: 0,
    class: "username"
  },
  Xt = {
    key: 1,
    class: "balance"
  },
  ea = {
    key: 3,
    class: "pokras-drop-game-intro"
  },
  ta = $({
    __name: "Index",
    setup(a) {
      const e = T().internal.isPokrasTheme,
        i = Ne().getters.mustGetUser.value.username,
        l = te(),
        n = l.balanceVary,
        o = l.activeFarming,
        _ = l.playPasses,
        u = l.isFastFarmingEnabled,
        d = Oe(),
        g = qt(),
        h = ze(() => {
          Ue().public.ENVIRONMENT !== "prod" && S().push({
            name: "debug"
          })
        }, 5),
        R = C(!1),
        M = async () => {
          await l.startFarming(), Y().farming.farmingStarted()
        }, ae = A => {
          R.value = !0, l.claimFarming().then(() => R.value = !1), T().makeConfetti(), J().success(m("base.you_got_bp", {
            bp: A.formatted
          })), Y().farming.farmingClaimed(A.decimal)
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
          oe = bt,
          re = St,
          ce = Ut,
          de = Ve,
          me = Yt;
        return s(), r(L, null, [c("div", Jt, [Be(y(se, null, null, 512), [
          [Ke, t(o) && t(o).status === ("FARMING_STATUS" in A ? A.FARMING_STATUS : t(F)).ACTIVE]
        ]), c("div", Qt, [y(ne, {
          small: "",
          class: "avatar",
          onClick: w[0] || (w[0] = D => t(h)())
        }), t(i) ? (s(), r("div", Zt, b(t(i)), 1)) : k("", !0), t(n) ? (s(), r("div", Xt, [w[3] || (w[3] = c("img", {
          src: Le,
          alt: "Blum logo"
        }, null, -1)), y(ie, {
          class: "value",
          value: t(n).decimal
        }, null, 8, ["value"])])) : (s(), p(le, {
          key: 2,
          class: "skeleton"
        })), y(oe, {
          tribe: t(d).myTribeRes.value,
          "daily-reward": t(g).reward.value,
          "daily-reward-claim": t(g).claim,
          class: "widgets"
        }, null, 8, ["tribe", "daily-reward", "daily-reward-claim"]), t(e) ? (s(), r("div", ea, w[4] || (w[4] = [c("img", {
          src: Me,
          alt: "Pokras drop game intro image"
        }, null, -1)]))) : k("", !0)]), y(re, {
          class: "drop-zone",
          "play-passes": t(_)
        }, null, 8, ["play-passes"]), y(de, null, {
          default: f(() => [y(ce, {
            farming: t(o),
            "is-fast-farming-enabled": t(u),
            disabled: t(R),
            onStart: w[1] || (w[1] = D => M()),
            onClaim: w[2] || (w[2] = D => ae(D))
          }, null, 8, ["farming", "is-fast-farming-enabled", "disabled"])]),
          _: 1
        })]), y(me)], 64)
      }
    }
  }),
  aa = v(ta, [
    ["__scopeId", "data-v-cbc3bf05"]
  ]),
  sa = {},
  na = {
    class: "index-page page"
  };

function ia(a, e) {
  const i = aa;
  return s(), r("div", na, [y(i)])
}
const pa = v(sa, [
  ["render", ia],
  ["__scopeId", "data-v-20e0bed3"]
]);
export {
  pa as
  default
};