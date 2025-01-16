import {
  _ as ce
} from "./9HdVnXuM.js";
import {
  _ as B
} from "./CkmrTVeP.js";
import {
  d as v,
  aa as T,
  o as l,
  c as d,
  G as b,
  F as N,
  H as A,
  a as m,
  e as a,
  b as _,
  D as x,
  Z as U,
  I as ue,
  _ as G,
  f as k,
  ao as _e,
  l as de,
  ap as pe,
  aq as me,
  j as w,
  a2 as q,
  t as $,
  af as ye,
  z as p,
  X as F,
  q as H,
  Y as be,
  ar as E,
  as as V,
  J as X,
  at as M,
  L as ve,
  au as Z,
  av as J,
  aw as ke,
  M as ge,
  ae as z,
  ax as fe,
  n as Q,
  ab as ee,
  V as we,
  ay as te,
  h as P,
  x as $e,
  K as S,
  az as he,
  aA as Se,
  aB as Te,
  U as se,
  al as Ce,
  am as xe,
  a7 as Ie,
  P as Ae,
  p as Re,
  R as Pe,
  W as Y,
  O as ne,
  $ as Be,
  aC as Le,
  ak as Ke,
  aD as Ee
} from "./DU-EduvJ.js";
import {
  _ as Ne
} from "./URqCk5Dd.js";
import {
  _ as W,
  u as oe,
  a as ae,
  b as De
} from "./B5OSjzB4.js";
import {
  _ as je
} from "./J9RzZ51C.js";
import {
  _ as Oe
} from "./C1OI46tY.js";
import {
  _ as Ve
} from "./C9MC_0f7.js";
import {
  _ as le
} from "./DDA4RA9M.js";
import "./B6qWK7UU.js";
import "./BL_9Dy4z.js";
import "./DaCHxoB5.js";
import "./C73_HQA4.js";
import "./JGRitRBB.js";
import "./BcZCGZaW.js";
import "./Ddq2Xg_z.js";
import "./D_q4HP5b.js";
const Me = {
    class: "pages-tribe-external-index-page"
  },
  Ue = v({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(i) {
      const e = T().resolve({
          name: "tribe-join"
        }).fullPath,
        s = T().resolve({
          name: "tribe-slug"
        }).fullPath,
        n = t => U().main.tribeLogoClick(t);
      return (t, o) => {
        const c = B,
          u = ue,
          r = G,
          y = Ne;
        return l(), d("div", Me, [t.myTribe ? (l(), d(N, {
          key: 1
        }, [t.myTribe.type === "validating" ? (l(), b(u, {
          key: 0,
          to: a(e),
          class: "validating hex-center",
          onClick: o[0] || (o[0] = g => n(t.myTribe.type))
        }, {
          default: A(() => o[4] || (o[4] = [m("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (l(), b(u, {
          key: 1,
          to: a(e),
          class: "join hex-center",
          onClick: o[1] || (o[1] = g => n(t.myTribe.type))
        }, {
          default: A(() => [_(r, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_created" ? (l(), b(u, {
          key: 2,
          to: a(e),
          class: "error hex-center",
          onClick: o[2] || (o[2] = g => n(t.myTribe.type))
        }, {
          default: A(() => [_(r, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "ok" ? (l(), b(u, {
          key: 3,
          to: a(s),
          class: "ok",
          onClick: o[3] || (o[3] = g => n(t.myTribe.type))
        }, {
          default: A(() => [_(y, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : x("", !0)], 64)) : (l(), b(c, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  Fe = k(Ue, [
    ["__scopeId", "data-v-ef3e1f1f"]
  ]),
  He = {
    class: "pages-index-banner-profile-tribe"
  },
  We = v({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {}
    },
    setup(i) {
      const e = _e(() => {
        de().public.ENVIRONMENT !== "prod" && T().push({
          name: "debug"
        })
      }, 5);
      return (s, n) => {
        const t = ce,
          o = Fe;
        return l(), d("div", He, [_(t, {
          small: "",
          onClick: n[0] || (n[0] = c => a(e)())
        }), _(o, {
          "my-tribe": s.myTribe
        }, null, 8, ["my-tribe"])])
      }
    }
  }),
  ze = k(We, [
    ["__scopeId", "data-v-e7e86efc"]
  ]),
  Ye = {
    class: "pages-index-banner-wallet"
  },
  Ge = {
    key: 1,
    class: "connected"
  },
  qe = {
    class: "ton-label"
  },
  Xe = {
    class: "label"
  },
  Ze = v({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(i) {
      const e = i,
        s = pe(me.MAIN),
        n = w(() => {
          var t;
          if (e.wallet.status === "loading") return {
            type: "skeleton"
          };
          if (e.wallet.status === "must_reconnect" || e.wallet.status === "not_found") return {
            type: "connect"
          };
          if (e.wallet.status === "connected") return (t = e.wallet.balance) != null && t.totalFiatValue.USD ? {
            type: "connected",
            balance: e.wallet.balance.totalFiatValue.USD.defaultH,
            shortAddress: e.wallet.address.short
          } : {
            type: "skeleton"
          };
          throw e.wallet, q("Invalid wallet status")
        });
      return (t, o) => {
        const c = B,
          u = G;
        return l(), d("div", Ye, [a(n).type === "skeleton" ? (l(), b(c, {
          key: 0,
          class: "skeleton"
        })) : a(n).type === "connected" ? (l(), d("div", Ge, [m("div", qe, [_(u, {
          name: "ton-logo",
          class: "logo"
        }), m("div", Xe, $(a(n).shortAddress), 1)]), (l(), b(ye(a(n).balance), {
          class: "balance"
        }))])) : a(n).type === "connect" ? (l(), d("div", {
          key: 2,
          class: "connect-label",
          onClick: o[0] || (o[0] = r => a(s).runConnectionFlow())
        }, [_(u, {
          name: "wallet",
          class: "icon"
        }), m("div", null, $(("t" in t ? t.t : a(p))("wallet.connect.btn")), 1)])) : x("", !0)])
      }
    }
  }),
  Je = k(Ze, [
    ["__scopeId", "data-v-1b480664"]
  ]),
  Qe = {
    class: "pages-index-banner-controls"
  },
  et = ["onClick"],
  tt = {
    class: "image-container"
  },
  st = {
    class: "title"
  },
  nt = v({
    __name: "BannerControls",
    setup(i) {
      const e = w(() => [{
        title: p("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => T().push({
          name: "memepad-new"
        })
      }, {
        title: p("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => T().push({
          name: "memepad"
        })
      }, {
        title: p("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          U().main.controlsTradingBotClick(), F().openTradingBot()
        }
      }]);
      return (s, n) => {
        const t = W;
        return l(), d("div", Qe, [(l(!0), d(N, null, H(a(e), (o, c) => (l(), d("button", {
          key: c,
          class: "control reset",
          onClick: u => o.onClick()
        }, [m("div", tt, [_(t, {
          name: o.image,
          class: "image"
        }, null, 8, ["name"])]), m("div", st, $(o.title), 1)], 8, et))), 128))])
      }
    }
  }),
  ot = k(nt, [
    ["__scopeId", "data-v-7a589948"]
  ]),
  at = {
    class: "pages-index-banner"
  },
  lt = v({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(i) {
      return (e, s) => {
        const n = ze,
          t = Je,
          o = ot;
        return l(), d("div", at, [_(n, {
          "my-tribe": e.myTribe,
          class: "profile"
        }, null, 8, ["my-tribe"]), _(t, {
          wallet: e.wallet
        }, null, 8, ["wallet"]), _(o, {
          class: "controls"
        })])
      }
    }
  }),
  it = k(lt, [
    ["__scopeId", "data-v-d4d6ef53"]
  ]),
  rt = {
    class: "pages-index-daily-reward"
  },
  ct = {
    key: 1,
    class: "widget has-radius"
  },
  ut = {
    class: "compose"
  },
  _t = {
    class: "title"
  },
  dt = {
    key: 0,
    class: "subtitle"
  },
  pt = v({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(i) {
      const e = i,
        s = be(),
        n = (o, c) => async () => {
          const u = await e.dailyRewardClaim();
          ke(u, {
            Err: () => s.error(p("base.claim_error")),
            Ok: r => {
              o === E.RESTORE && s.success(p("daily_reward.streak_restored", {
                days: c
              })), s.success(`You’ve got ${ge(r.claimedReward.points)} BP`), s.success(z("span", ["You’ve got ", z("i", {
                class: "ticket"
              }), ` ${r.claimedReward.passes}`])), F().makeConfetti()
            }
          })
        }, t = w(() => {
          if (e.dailyReward === void 0) return;
          const o = e.dailyReward.currentStreakDays,
            c = `${o}-${p("base.n.days",o)}`;
          if (e.dailyReward.claim === E.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: p("daily_reward.missed"),
            subtitle: V(p("daily_reward.restore_current_streak", {
              days: c
            })),
            claim: {
              label: p("base.restore"),
              white: !0,
              can: !0,
              fn: n(e.dailyReward.claim, c)
            }
          };
          const u = (() => {
            const y = X().ms100ticker.value;
            if (!y) return M();
            const g = ve(e.dailyReward.canClaimAt - y, "letters");
            return V(p("base.claim_next_in", {
              time: g
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: p("daily_reward.current_streak", {
              days: c
            }),
            subtitle: u,
            claim: {
              can: e.dailyReward.claim !== E.UNAVAILABLE,
              fn: n(e.dailyReward.claim, c)
            }
          }
        });
      return (o, c) => {
        const u = B,
          r = W,
          y = je;
        return l(), d("div", rt, [a(t) ? (l(), d("div", ct, [_(r, {
          name: a(t).icon,
          class: "icon"
        }, null, 8, ["name"]), m("div", ut, [m("div", _t, $(a(t).title), 1), ("isOk" in o ? o.isOk : a(Z))(a(t).subtitle) ? (l(), d("div", dt, $(a(t).subtitle.data), 1)) : (l(), b(u, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), a(t).claim ? (l(), b(y, {
          key: 0,
          label: a(t).claim.label,
          "can-claim": a(t).claim.can,
          "claim-fn": a(t).claim.fn,
          style: J(a(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : x("", !0)])) : (l(), b(u, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  mt = k(pt, [
    ["__scopeId", "data-v-8b85c7ba"]
  ]),
  yt = {
    class: "kit-stories-src-counter"
  },
  bt = v({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(i) {
      fe(n => ({
        "9db269f8": n.count
      }));
      const e = i,
        s = w(() => [...new Array(e.count)].map((n, t) => t < e.current ? {
          state: "viewed",
          key: t
        } : t === e.current ? {
          state: "current",
          progress: e.currentProgress,
          key: t
        } : {
          state: "future",
          key: t
        }));
      return (n, t) => (l(), d("div", yt, [(l(!0), d(N, null, H(a(s), o => (l(), d("div", {
        key: o.key,
        class: Q(["progress", [`is-state-${o.state}`]]),
        style: J(o.state === "current" ? {
          "background-position-x": `-${o.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  vt = k(bt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  kt = {
    class: "kit-stories-shared-background"
  },
  gt = ["poster", "src"],
  ft = ["src"],
  wt = v({
    __name: "Background",
    props: {
      background: {}
    },
    setup(i) {
      return (e, s) => {
        const n = Oe;
        return l(), d("div", kt, [e.background.type === "video" ? (l(), d("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, gt)) : e.background.type === "image" ? (l(), d("img", {
          key: 1,
          src: e.background.src
        }, null, 8, ft)) : e.background.type === "stars" ? (l(), b(n, {
          key: 2,
          class: "stars"
        })) : x("", !0)])
      }
    }
  }),
  $t = k(wt, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  ht = {
    class: "kit-stories-layouts-title-subtitle"
  },
  St = {
    class: "title"
  },
  Tt = {
    class: "subtitle"
  },
  Ct = v({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(i) {
      return (e, s) => (l(), d("div", ht, [m("div", St, $(e.layout.title), 1), m("div", Tt, $(e.layout.subtitle), 1)]))
    }
  }),
  xt = k(Ct, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  It = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  At = {
    class: "animoji-container"
  },
  Rt = {
    class: "content-container"
  },
  Pt = {
    class: "title"
  },
  Bt = {
    class: "subtitle"
  },
  Lt = v({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(i) {
      return (e, s) => {
        const n = ee;
        return l(), d("div", It, [m("div", At, [_(n, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), m("div", Rt, [m("div", Pt, $(e.layout.title), 1), m("div", Bt, $(e.layout.subtitle), 1)])])
      }
    }
  }),
  Kt = k(Lt, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  Et = v({
    __name: "Button",
    props: {
      button: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(i, {
      emit: e
    }) {
      const s = i,
        n = e,
        t = w(() => s.button.type === "next" ? s.isLast ? p("base.close") : p("base.next") : s.button.label),
        o = () => {
          if (s.button.type === "next") P().$webApp.HapticFeedback.impactOccurred("light"), n("next");
          else if (s.button.type === "local") T().push(s.button.link);
          else if (s.button.type === "external") P().$webApp.openLink(s.button.link);
          else if (s.button.type === "telegram") P().$webApp.openTelegramLink(s.button.link);
          else throw s.button, q("Unknown button type")
        };
      return (c, u) => {
        const r = $e;
        return l(), b(r, {
          label: a(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: a(we).LARGE,
          onClick: u[0] || (u[0] = te(y => o(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Nt = k(Et, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  Dt = {
    class: "kit-stories-src-story"
  },
  jt = {
    class: "content"
  },
  Ot = {
    class: "layout"
  },
  Vt = {
    class: "button"
  },
  Mt = v({
    __name: "Story",
    props: {
      story: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(i) {
      return (e, s) => {
        const n = $t,
          t = xt,
          o = Kt,
          c = Nt;
        return l(), d("div", Dt, [_(n, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), m("div", jt, [m("div", Ot, [e.story.layout.type === "TitleSubtitle" ? (l(), b(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (l(), b(o, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : x("", !0)]), m("div", Vt, [e.story.button ? (l(), b(c, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: s[0] || (s[0] = u => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : x("", !0)])])])
      }
    }
  }),
  Ut = k(Mt, [
    ["__scopeId", "data-v-a7093963"]
  ]),
  Ft = (i, e) => {
    const s = i,
      n = S(i),
      t = w(() => 1 - n.value / s);
    let o = 0,
      c;
    const u = () => {
        o = Date.now(), c = Se(() => {
          const h = Date.now(),
            C = h - o;
          o = h, n.value = Math.max(n.value - C, 0), n.value <= 0 && (r(), e())
        }, 100)
      },
      r = () => {
        c && (clearInterval(c), c = void 0)
      },
      y = () => {
        if (c) {
          r();
          const h = Date.now() - o;
          n.value = Math.max(n.value - h, 0)
        }
      },
      g = () => u();
    return u(), {
      timeToExpire: he(n),
      progress: t,
      destroy: r,
      pause: y,
      resume: g
    }
  },
  Ht = 150,
  Wt = v({
    __name: "Stories",
    props: {
      stories: {}
    },
    emits: ["close"],
    setup(i, {
      emit: e
    }) {
      const s = i,
        n = e,
        t = S(0),
        o = () => {
          t.value < s.stories.length - 1 ? (t.value += 1, y()) : n("close")
        },
        c = () => {
          t.value > 0 ? (t.value -= 1, y()) : n("close")
        },
        u = () => Ft(5e3, o),
        r = Te(u()),
        y = () => {
          r.value.destroy(), r.value = u()
        },
        g = S(),
        h = oe(),
        C = S(!1),
        D = S(!1),
        ie = () => {
          C.value = !1, D.value = !1, h.set(() => {
            r.value.pause(), C.value = !0, D.value = !0
          }, Ht)
        },
        j = () => {
          h.destroy(), C.value && (r.value.resume(), C.value = !1)
        },
        re = R => {
          if (C.value || D.value || !g.value) return;
          const {
            width: f,
            left: O
          } = g.value.getBoundingClientRect(), L = R.clientX - O, K = f / 3;
          L < K ? c() : L > K * 2 && o()
        };
      return se(() => {
        h.destroy(), r.value.destroy()
      }), (R, f) => {
        const O = vt,
          L = Ut,
          K = Ve;
        return l(), b(K, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: A(() => [m("div", {
            ref_key: "storiesRef",
            ref: g,
            class: "kit-stories-src-stories",
            onPointerdown: f[1] || (f[1] = te(I => ie(), ["prevent"])),
            onPointerup: f[2] || (f[2] = I => j()),
            onPointercancel: f[3] || (f[3] = I => j()),
            onPointerleave: f[4] || (f[4] = I => j()),
            onClick: f[5] || (f[5] = I => re(I))
          }, [_(O, {
            current: a(t),
            "current-progress": a(r).progress.value,
            count: R.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (l(), b(L, {
            key: a(t),
            story: R.stories[a(t)],
            "is-last": a(t) === R.stories.length - 1,
            onNext: f[0] || (f[0] = I => o())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  zt = k(Wt, [
    ["__scopeId", "data-v-387cfdca"]
  ]),
  Yt = v({
    __name: "Stories",
    props: Ce({
      set: {}
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(i) {
      const e = xe(i, "modelValue");
      return (s, n) => {
        const t = zt;
        return l(), b(Ie, {
          name: "opacity-transition"
        }, {
          default: A(() => [e.value ? (l(), b(t, {
            key: 0,
            stories: s.set.stories,
            class: "kit-stories",
            onClose: n[0] || (n[0] = o => e.value = !1)
          }, null, 8, ["stories"])) : x("", !0)]),
          _: 1
        })
      }
    }
  }),
  Gt = k(Yt, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  qt = {
    class: "pages-index-new-season-banner"
  },
  Xt = {
    class: "banner"
  },
  Zt = {
    class: "content"
  },
  Jt = {
    class: "title"
  },
  Qt = {
    class: "subtitle"
  },
  es = v({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(i) {
      const e = i,
        s = S(e.value.showOnStart);
      return Ae(s, n => n && e.value.onShowed(), {
        immediate: !0
      }), (n, t) => {
        const o = ae,
          c = ee,
          u = Gt;
        return l(), d("div", qt, [m("div", Xt, [m("div", Zt, [m("div", Jt, $(("t" in n ? n.t : a(p))("index.season_2.banner.title")), 1), m("div", Qt, $(("t" in n ? n.t : a(p))("index.season_2.banner.subtitle")), 1), _(o, {
          state: "default",
          label: ("t" in n ? n.t : a(p))("index.season_2.banner.btn"),
          type: "dark",
          class: "btn",
          onClick: t[0] || (t[0] = r => s.value = !0)
        }, null, 8, ["label"])]), _(c, {
          name: "animations/Moon",
          class: "animation"
        })]), _(u, {
          modelValue: a(s),
          "onUpdate:modelValue": t[1] || (t[1] = r => Re(s) ? s.value = r : null),
          set: n.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  ts = k(es, [
    ["__scopeId", "data-v-fef03bb2"]
  ]),
  ss = {
    class: "pages-wallet-asset-skeleton"
  },
  ns = {
    class: "content"
  },
  os = v({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(i) {
      return (e, s) => {
        const n = B;
        return l(), d("div", ss, [(l(!0), d(N, null, H(e.count, t => (l(), d("div", {
          key: t,
          class: "skeleton"
        }, [_(n, {
          rounded: "",
          class: "logo"
        }), m("div", ns, [_(n, {
          class: "title"
        }), _(n, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  as = k(os, [
    ["__scopeId", "data-v-26805825"]
  ]),
  ls = {
    class: "pages-index-points"
  },
  is = v({
    __name: "IndexPoints",
    props: {
      mp: {},
      bp: {}
    },
    setup(i) {
      const e = w(() => T().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (s, n) => {
        const t = le,
          o = as,
          c = De;
        return l(), d("div", ls, [_(t, {
          label: ("t" in s ? s.t : a(p))("wallet.points.title"),
          "full-path": a(e)
        }, null, 8, ["label", "full-path"]), !s.mp || !s.bp ? (l(), b(o, {
          key: 0,
          count: 2
        })) : (l(), b(c, {
          key: 1,
          points: [s.mp, s.bp]
        }, null, 8, ["points"]))])
      }
    }
  }),
  rs = k(is, [
    ["__scopeId", "data-v-88129733"]
  ]),
  cs = {
    key: 0,
    class: "skeleton"
  },
  us = {
    key: 1,
    class: "default"
  },
  _s = {
    class: "content"
  },
  ds = {
    class: "title"
  },
  ps = {
    class: "balance"
  },
  ms = v({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(i) {
      const e = i,
        s = w(() => {
          const t = (() => {
            const o = F().internal;
            return o.isPokrasTheme.value ? {
              image: "pokras/drop-game-token",
              background: "grid"
            } : o.isHalloweenTheme.value ? {
              image: "halloween/drop-game-token",
              background: "grid"
            } : o.isTsubasaTheme.value ? {
              image: "tsubasa/drop-game-token",
              background: "grid"
            } : o.isNewYearTheme.value ? {
              image: "new-year/drop-game-token",
              background: "new-year"
            } : {
              image: "pictures/drop-clover",
              background: "grid"
            }
          })();
          return e.pp === void 0 ? {
            ...t,
            type: "skeleton"
          } : {
            ...t,
            type: "default",
            pp: e.pp.balance.default,
            disabled: e.pp.balance.value.isZero()
          }
        }),
        n = () => T().push({
          name: "game"
        });
      return (t, o) => {
        const c = le,
          u = W,
          r = B,
          y = ae;
        return l(), d("div", {
          class: Q(["pages-index-game", `is-background-${a(s).background}`])
        }, [_(c, {
          label: ("t" in t ? t.t : a(p))("base.game")
        }, null, 8, ["label"]), a(s).type === "skeleton" ? (l(), d("div", cs, [_(u, {
          name: a(s).image,
          class: "icon"
        }, null, 8, ["name"]), _(r, {
          secondary: "",
          class: "skeleton-title"
        }), _(y, {
          label: ("t" in t ? t.t : a(p))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (l(), d("div", us, [_(u, {
          name: a(s).image,
          class: "icon"
        }, null, 8, ["name"]), m("div", _s, [m("div", ds, $(("t" in t ? t.t : a(p))("game.card.title")), 1), m("div", ps, $(a(s).pp) + " Play passes", 1)]), _(y, {
          label: ("t" in t ? t.t : a(p))("base.play"),
          state: "default",
          type: "white",
          class: "pill",
          disabled: a(s).disabled,
          onClick: o[0] || (o[0] = g => n())
        }, null, 8, ["label", "disabled"])]))], 2)
      }
    }
  }),
  ys = k(ms, [
    ["__scopeId", "data-v-972ed848"]
  ]),
  bs = (i, e) => {
    const s = {
      ...i
    };
    return s.currentStreakDays = e.currentStreakDays, s.claim = E.UNAVAILABLE, s.canClaimAt = e.canClaimAt, s
  },
  vs = () => {
    const i = S(!1),
      e = S(),
      s = oe(),
      t = Pe(async () => {
        const r = Be(await Y.getDailyReward());
        if (Z(r)) {
          const y = X().getCurrentTimestamp();
          if (y) {
            const g = r.data.canClaimAt - y;
            s.set(() => t.exec(), g)
          }
        }
        return r
      }, r => e.value = r),
      o = async () => {
        if (i.value || !e.value) return M();
        i.value = !0;
        const r = await Y.claimDailyReward();
        return i.value = !1, r.err ? M() : (e.value = bs(e.value, r.data), t.exec(), setTimeout(() => ne().update(), 5e3), V(r.data))
      };
    return {
      init: async () => {
        await t.exec()
      },
      destroy: () => {
        t.destroy(), s.destroy(), i.value = !1, e.value = void 0
      },
      reward: w(() => e.value),
      claim: o,
      isClaiming: w(() => i.value)
    }
  },
  ks = () => {
    const i = ne(),
      e = Le(),
      s = vs(),
      n = w(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      o = {
        set: gs(),
        showOnStart: !P().$webApp.storage.local.get(t),
        onShowed: () => {
          P().$webApp.storage.local.set(t, "true"), U().main.season2StoriesAppear()
        }
      };
    return {
      init: async () => {
        await Promise.all([s.init()])
      },
      destroy: () => {
        s.destroy()
      },
      dailyReward: s,
      myTribe: n,
      season2Stories: o,
      symbols: w(() => i.pointSymbols.value),
      wallet: w(() => i.wallet.value)
    }
  },
  gs = () => ({
    stories: [{
      background: {
        type: "video",
        preview: Ke("index/season-2-intro-preview"),
        src: Ee("index/season-2-intro.mp4")
      },
      layout: {
        type: "TitleSubtitle",
        title: p("stories.season_2.slide_1.title"),
        subtitle: p("stories.season_2.slide_1.subtitle")
      },
      button: {
        type: "next"
      }
    }, {
      background: {
        type: "stars"
      },
      layout: {
        type: "AnimojiTitleSubtitle",
        animoji: "Fire",
        title: p("stories.season_2.slide_2.title"),
        subtitle: p("stories.season_2.slide_2.subtitle")
      },
      button: {
        type: "next"
      }
    }, {
      background: {
        type: "stars"
      },
      layout: {
        type: "AnimojiTitleSubtitle",
        animoji: "Rocket",
        title: p("stories.season_2.slide_3.title"),
        subtitle: p("stories.season_2.slide_3.subtitle")
      },
      button: {
        type: "next"
      }
    }, {
      background: {
        type: "stars"
      },
      layout: {
        type: "AnimojiTitleSubtitle",
        animoji: "Seedling",
        title: p("stories.season_2.slide_4.title"),
        subtitle: p("stories.season_2.slide_4.subtitle")
      },
      button: {
        type: "next"
      }
    }]
  }),
  fs = {
    class: "index-page page"
  },
  ws = v({
    __name: "index",
    setup(i) {
      const e = ks();
      return e.init(), se(() => e.destroy()), (s, n) => {
        var y, g, h;
        const t = it,
          o = mt,
          c = ts,
          u = rs,
          r = ys;
        return l(), d("div", fs, [_(t, {
          "my-tribe": a(e).myTribe.value,
          wallet: a(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), _(o, {
          "daily-reward": a(e).dailyReward.reward.value,
          "daily-reward-claim": a(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), _(c, {
          value: a(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), _(u, {
          mp: (y = a(e).symbols.value) == null ? void 0 : y.mp,
          bp: (g = a(e).symbols.value) == null ? void 0 : g.bp
        }, null, 8, ["mp", "bp"]), _(r, {
          pp: (h = a(e).symbols.value) == null ? void 0 : h.pp
        }, null, 8, ["pp"])])
      }
    }
  }),
  Os = k(ws, [
    ["__scopeId", "data-v-6052a272"]
  ]);
export {
  Os as
  default
};