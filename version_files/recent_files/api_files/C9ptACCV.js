import {
  _ as oe
} from "./D3jWO8qU.js";
import {
  _ as E
} from "./FA3XeeEH.js";
import {
  d as y,
  j as h,
  V as W,
  o as l,
  c as p,
  e as a,
  G as b,
  a as m,
  t as $,
  z as _,
  ah as ae,
  U as G,
  D as I,
  aq as le,
  ar as ie,
  x as q,
  f as v,
  ac as S,
  F as N,
  H as C,
  b as d,
  $ as K,
  I as re,
  _ as ce,
  as as ue,
  l as _e,
  at as z,
  au as de,
  Y as F,
  q as V,
  Z as pe,
  av as D,
  X as H,
  J as me,
  aw as be,
  L as ye,
  a1 as ve,
  ax as J,
  ay as ke,
  M as ge,
  ag as Y,
  az as fe,
  n as X,
  ad as Z,
  aA as Q,
  h as P,
  K as x,
  aB as $e,
  aC as we,
  aD as he,
  aE as Se,
  T as Te,
  an as Ie,
  ao as Ae,
  a9 as Ce,
  aF as xe,
  p as Re,
  P as Pe,
  aG as Ee,
  aH as Be,
  am as Le,
  aI as Ne
} from "./BLYd0JJf.js";
import {
  _ as Ke
} from "./Blgt4WWD.js";
import {
  _ as U,
  a as ee,
  b as Me
} from "./CACUs2vP.js";
import {
  _ as Oe
} from "./C72cEa8O.js";
import {
  _ as je
} from "./MTUoGFY3.js";
import {
  _ as De
} from "./D6S0Sqz9.js";
import {
  _ as te
} from "./DXE9m757.js";
import "./BRIkpOiE.js";
import "./D0BmfrnD.js";
import "./DKDMMiz-.js";
import "./C6r3LLVZ.js";
import "./Cdp9Dtz_.js";
import "./C3VO5ka-.js";
import "./h-4omDwP.js";
const Fe = {
    class: "pages-index-banner-wallet"
  },
  Ve = {
    key: 1,
    class: "connected"
  },
  Ue = {
    class: "label"
  },
  ze = y({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(r) {
      const e = r,
        n = () => le(ie.MAIN).runConnectionFlow(),
        s = h(() => {
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
          throw e.wallet, W("Invalid wallet status")
        });
      return (t, o) => {
        const i = E,
          c = q;
        return l(), p("div", Fe, [a(s).type === "skeleton" ? (l(), b(i, {
          key: 0,
          class: "skeleton"
        })) : a(s).type === "connected" ? (l(), p("div", Ve, [m("div", Ue, $(("t" in t ? t.t : a(_))("wallet.total_balance")), 1), (l(), b(ae(a(s).balance), {
          class: "balance"
        }))])) : a(s).type === "connect" ? (l(), b(c, {
          key: 2,
          label: ("t" in t ? t.t : a(_))("wallet.connect.btn"),
          size: a(G).SMALL,
          onClick: o[0] || (o[0] = u => n())
        }, null, 8, ["label", "size"])) : I("", !0)])
      }
    }
  }),
  He = v(ze, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  Ye = {
    class: "pages-tribe-external-index-page"
  },
  We = y({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(r) {
      const e = S().resolve({
          name: "tribe-join"
        }).fullPath,
        n = S().resolve({
          name: "tribe-slug"
        }).fullPath,
        s = t => K().main.tribeLogoClick(t);
      return (t, o) => {
        const i = E,
          c = re,
          u = ce,
          k = Ke;
        return l(), p("div", Ye, [t.myTribe ? (l(), p(N, {
          key: 1
        }, [t.myTribe.type === "validating" ? (l(), b(c, {
          key: 0,
          to: a(e),
          class: "validating hex-center",
          onClick: o[0] || (o[0] = g => s(t.myTribe.type))
        }, {
          default: C(() => o[4] || (o[4] = [m("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (l(), b(c, {
          key: 1,
          to: a(e),
          class: "join hex-center",
          onClick: o[1] || (o[1] = g => s(t.myTribe.type))
        }, {
          default: C(() => [d(u, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_created" ? (l(), b(c, {
          key: 2,
          to: a(e),
          class: "error hex-center",
          onClick: o[2] || (o[2] = g => s(t.myTribe.type))
        }, {
          default: C(() => [d(u, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "ok" ? (l(), b(c, {
          key: 3,
          to: a(n),
          class: "ok",
          onClick: o[3] || (o[3] = g => s(t.myTribe.type))
        }, {
          default: C(() => [d(k, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : I("", !0)], 64)) : (l(), b(i, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  Ge = v(We, [
    ["__scopeId", "data-v-ef3e1f1f"]
  ]),
  qe = {
    class: "pages-index-banner-profile-tribe"
  },
  Je = y({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(r) {
      const e = ue(() => {
        _e().public.ENVIRONMENT !== "prod" && S().push({
          name: "debug"
        })
      }, 5);
      return (n, s) => {
        const t = oe,
          o = He,
          i = Ge;
        return l(), p("div", qe, [d(t, {
          small: "",
          onClick: s[0] || (s[0] = c => a(e)())
        }), d(o, {
          wallet: n.wallet
        }, null, 8, ["wallet"]), d(i, {
          "my-tribe": n.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"])])
      }
    }
  }),
  Xe = v(Je, [
    ["__scopeId", "data-v-779ec8f9"]
  ]),
  Ze = {
    class: "pages-index-banner-controls"
  },
  Qe = ["onClick"],
  et = {
    class: "image-container"
  },
  tt = {
    class: "title"
  },
  st = y({
    __name: "BannerControls",
    setup(r) {
      const e = h(() => [{
        title: _("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => S().push({
          name: "memepad-new",
          query: {
            memepadFrom: z.MAIN,
            memepadNewFrom: de.MAIN
          }
        })
      }, {
        title: _("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => S().push({
          name: "memepad",
          query: {
            memepadFrom: z.MAIN
          }
        })
      }, {
        title: _("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          K().main.controlsTradingBotClick(), F().openTradingBot()
        }
      }]);
      return (n, s) => {
        const t = U;
        return l(), p("div", Ze, [(l(!0), p(N, null, V(a(e), (o, i) => (l(), p("button", {
          key: i,
          class: "control reset",
          onClick: c => o.onClick()
        }, [m("div", et, [d(t, {
          name: o.image,
          class: "image"
        }, null, 8, ["name"])]), m("div", tt, $(o.title), 1)], 8, Qe))), 128))])
      }
    }
  }),
  nt = v(st, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  ot = {
    class: "pages-index-banner"
  },
  at = y({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(r) {
      return (e, n) => {
        const s = Xe,
          t = nt;
        return l(), p("div", ot, [d(s, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), d(t, {
          class: "controls"
        })])
      }
    }
  }),
  lt = v(at, [
    ["__scopeId", "data-v-8f4c28ad"]
  ]),
  it = {
    class: "pages-index-daily-reward"
  },
  rt = {
    key: 1,
    class: "widget has-radius"
  },
  ct = {
    class: "compose"
  },
  ut = {
    class: "title"
  },
  _t = {
    key: 0,
    class: "subtitle"
  },
  dt = y({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(r) {
      const e = r,
        n = pe(),
        s = (o, i) => async () => {
          const c = await e.dailyRewardClaim();
          ke(c, {
            Err: () => n.error(_("base.claim_error")),
            Ok: u => {
              o === D.RESTORE && n.success(_("daily_reward.streak_restored", {
                days: i
              })), n.success(`You’ve got ${ge(u.claimedReward.points)} BP`), n.success(Y("span", ["You’ve got ", Y("i", {
                class: "ticket"
              }), ` ${u.claimedReward.passes}`])), F().makeConfetti(), K().main.dailyRewardClick({
                points: u.claimedReward.points.toNumber(),
                passes: u.claimedReward.passes
              })
            }
          })
        }, t = h(() => {
          if (e.dailyReward === void 0) return;
          const o = e.dailyReward.currentStreakDays,
            i = `${o}-${_("base.n.days",o)}`;
          if (e.dailyReward.claim === D.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: _("daily_reward.missed"),
            subtitle: H(_("daily_reward.restore_current_streak", {
              days: i
            })),
            claim: {
              label: _("base.restore"),
              white: !0,
              can: !0,
              fn: s(e.dailyReward.claim, i)
            }
          };
          const c = (() => {
            const k = me().ms100ticker.value;
            if (!k) return be();
            const g = ye(e.dailyReward.canClaimAt - k, "letters");
            return H(_("base.claim_next_in", {
              time: g
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: _("daily_reward.current_streak", {
              days: i
            }),
            subtitle: c,
            claim: {
              can: e.dailyReward.claim !== D.UNAVAILABLE,
              fn: s(e.dailyReward.claim, i)
            }
          }
        });
      return (o, i) => {
        const c = E,
          u = U,
          k = Oe;
        return l(), p("div", it, [a(t) ? (l(), p("div", rt, [d(u, {
          name: a(t).icon,
          class: "icon"
        }, null, 8, ["name"]), m("div", ct, [m("div", ut, $(a(t).title), 1), ("isOk" in o ? o.isOk : a(ve))(a(t).subtitle) ? (l(), p("div", _t, $(a(t).subtitle.data), 1)) : (l(), b(c, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), a(t).claim ? (l(), b(k, {
          key: 0,
          label: a(t).claim.label,
          "can-claim": a(t).claim.can,
          "claim-fn": a(t).claim.fn,
          style: J(a(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : I("", !0)])) : (l(), b(c, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  pt = v(dt, [
    ["__scopeId", "data-v-181516c9"]
  ]),
  mt = {
    class: "kit-stories-src-counter"
  },
  bt = y({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(r) {
      fe(s => ({
        "9db269f8": s.count
      }));
      const e = r,
        n = h(() => [...new Array(e.count)].map((s, t) => t < e.current ? {
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
      return (s, t) => (l(), p("div", mt, [(l(!0), p(N, null, V(a(n), o => (l(), p("div", {
        key: o.key,
        class: X(["progress", [`is-state-${o.state}`]]),
        style: J(o.state === "current" ? {
          "background-position-x": `-${o.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  yt = v(bt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  vt = {
    class: "kit-stories-shared-background"
  },
  kt = ["poster", "src"],
  gt = ["src"],
  ft = y({
    __name: "Background",
    props: {
      background: {}
    },
    setup(r) {
      return (e, n) => {
        const s = je;
        return l(), p("div", vt, [e.background.type === "video" ? (l(), p("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, kt)) : e.background.type === "image" ? (l(), p("img", {
          key: 1,
          src: e.background.src
        }, null, 8, gt)) : e.background.type === "stars" ? (l(), b(s, {
          key: 2,
          class: "stars"
        })) : I("", !0)])
      }
    }
  }),
  $t = v(ft, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  wt = {
    class: "kit-stories-layouts-title-subtitle"
  },
  ht = {
    class: "title"
  },
  St = {
    class: "subtitle"
  },
  Tt = y({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(r) {
      return (e, n) => (l(), p("div", wt, [m("div", ht, $(e.layout.title), 1), m("div", St, $(e.layout.subtitle), 1)]))
    }
  }),
  It = v(Tt, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  At = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  Ct = {
    class: "animoji-container"
  },
  xt = {
    class: "content-container"
  },
  Rt = {
    class: "title"
  },
  Pt = {
    class: "subtitle"
  },
  Et = y({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(r) {
      return (e, n) => {
        const s = Z;
        return l(), p("div", At, [m("div", Ct, [d(s, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), m("div", xt, [m("div", Rt, $(e.layout.title), 1), m("div", Pt, $(e.layout.subtitle), 1)])])
      }
    }
  }),
  Bt = v(Et, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  Lt = y({
    __name: "Button",
    props: {
      button: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(r, {
      emit: e
    }) {
      const n = r,
        s = e,
        t = h(() => n.button.type === "next" ? n.isLast ? _("base.close") : _("base.next") : n.button.label),
        o = () => {
          if (n.button.type === "next") P().$webApp.HapticFeedback.impactOccurred("light"), s("next");
          else if (n.button.type === "local") S().push(n.button.link);
          else if (n.button.type === "external") P().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") P().$webApp.openTelegramLink(n.button.link);
          else throw n.button, W("Unknown button type")
        };
      return (i, c) => {
        const u = q;
        return l(), b(u, {
          label: a(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: a(G).LARGE,
          onClick: c[0] || (c[0] = Q(k => o(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Nt = v(Lt, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  Kt = {
    class: "kit-stories-src-story"
  },
  Mt = {
    class: "content"
  },
  Ot = {
    class: "layout"
  },
  jt = {
    class: "button"
  },
  Dt = y({
    __name: "Story",
    props: {
      story: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(r) {
      return (e, n) => {
        const s = $t,
          t = It,
          o = Bt,
          i = Nt;
        return l(), p("div", Kt, [d(s, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), m("div", Mt, [m("div", Ot, [e.story.layout.type === "TitleSubtitle" ? (l(), b(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (l(), b(o, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : I("", !0)]), m("div", jt, [e.story.button ? (l(), b(i, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = c => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : I("", !0)])])])
      }
    }
  }),
  Ft = v(Dt, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  Vt = (r, e) => {
    const n = r,
      s = x(r),
      t = h(() => 1 - s.value / n);
    let o = 0,
      i;
    const c = () => {
        o = Date.now(), i = we(() => {
          const w = Date.now(),
            T = w - o;
          o = w, s.value = Math.max(s.value - T, 0), s.value <= 0 && (u(), e())
        }, 100)
      },
      u = () => {
        i && (clearInterval(i), i = void 0)
      },
      k = () => {
        if (i) {
          u();
          const w = Date.now() - o;
          s.value = Math.max(s.value - w, 0)
        }
      },
      g = () => c();
    return c(), {
      timeToExpire: $e(s),
      progress: t,
      destroy: u,
      pause: k,
      resume: g
    }
  },
  Ut = 150,
  zt = y({
    __name: "Stories",
    props: {
      stories: {}
    },
    emits: ["close"],
    setup(r, {
      emit: e
    }) {
      const n = r,
        s = e,
        t = x(0),
        o = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, k()) : s("close")
        },
        i = () => {
          t.value > 0 ? (t.value -= 1, k()) : s("close")
        },
        c = () => Vt(5e3, o),
        u = he(c()),
        k = () => {
          u.value.destroy(), u.value = c()
        },
        g = x(),
        w = Se(),
        T = x(!1),
        M = x(!1),
        se = () => {
          T.value = !1, M.value = !1, w.set(() => {
            u.value.pause(), T.value = !0, M.value = !0
          }, Ut)
        },
        O = () => {
          w.destroy(), T.value && (u.value.resume(), T.value = !1)
        },
        ne = R => {
          if (T.value || M.value || !g.value) return;
          const {
            width: f,
            left: j
          } = g.value.getBoundingClientRect(), B = R.clientX - j, L = f / 3;
          B < L ? i() : B > L * 2 && o()
        };
      return Te(() => {
        w.destroy(), u.value.destroy()
      }), (R, f) => {
        const j = yt,
          B = Ft,
          L = De;
        return l(), b(L, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: C(() => [m("div", {
            ref_key: "storiesRef",
            ref: g,
            class: "kit-stories-src-stories",
            onPointerdown: f[1] || (f[1] = Q(A => se(), ["prevent"])),
            onPointerup: f[2] || (f[2] = A => O()),
            onPointercancel: f[3] || (f[3] = A => O()),
            onPointerleave: f[4] || (f[4] = A => O()),
            onClick: f[5] || (f[5] = A => ne(A))
          }, [d(j, {
            current: a(t),
            "current-progress": a(u).progress.value,
            count: R.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (l(), b(B, {
            key: a(t),
            story: R.stories[a(t)],
            "is-last": a(t) === R.stories.length - 1,
            onNext: f[0] || (f[0] = A => o())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  Ht = v(zt, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  Yt = y({
    __name: "Stories",
    props: Ie({
      set: {}
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(r) {
      const e = Ae(r, "modelValue");
      return (n, s) => {
        const t = Ht;
        return l(), b(Ce, {
          name: "opacity-transition"
        }, {
          default: C(() => [e.value ? (l(), b(t, {
            key: 0,
            stories: n.set.stories,
            class: "kit-stories",
            onClose: s[0] || (s[0] = o => e.value = !1)
          }, null, 8, ["stories"])) : I("", !0)]),
          _: 1
        })
      }
    }
  }),
  Wt = v(Yt, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  Gt = {
    class: "pages-index-new-season-banner"
  },
  qt = {
    class: "banner"
  },
  Jt = {
    class: "content"
  },
  Xt = {
    class: "title"
  },
  Zt = {
    class: "subtitle"
  },
  Qt = y({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(r) {
      const e = r,
        n = x(e.value.showOnStart);
      return xe(n, s => s && e.value.onShowed(), {
        immediate: !0
      }), (s, t) => {
        const o = ee,
          i = Z,
          c = Wt;
        return l(), p("div", Gt, [m("div", qt, [m("div", Jt, [m("div", Xt, $(("t" in s ? s.t : a(_))("index.season_2.banner.title")), 1), m("div", Zt, $(("t" in s ? s.t : a(_))("index.season_2.banner.subtitle")), 1), d(o, {
          state: "default",
          label: ("t" in s ? s.t : a(_))("index.season_2.banner.btn"),
          type: "dark",
          class: "btn",
          onClick: t[0] || (t[0] = u => n.value = !0)
        }, null, 8, ["label"])]), d(i, {
          name: "animations/Moon",
          class: "animation"
        })]), d(c, {
          modelValue: a(n),
          "onUpdate:modelValue": t[1] || (t[1] = u => Re(n) ? n.value = u : null),
          set: s.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  es = v(Qt, [
    ["__scopeId", "data-v-fef03bb2"]
  ]),
  ts = {
    class: "pages-wallet-asset-skeleton"
  },
  ss = {
    class: "content"
  },
  ns = y({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(r) {
      return (e, n) => {
        const s = E;
        return l(), p("div", ts, [(l(!0), p(N, null, V(e.count, t => (l(), p("div", {
          key: t,
          class: "skeleton"
        }, [d(s, {
          rounded: "",
          class: "logo"
        }), m("div", ss, [d(s, {
          class: "title"
        }), d(s, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  os = v(ns, [
    ["__scopeId", "data-v-26805825"]
  ]),
  as = {
    class: "pages-index-points"
  },
  ls = y({
    __name: "IndexPoints",
    props: {
      mp: {},
      bp: {}
    },
    setup(r) {
      const e = h(() => S().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (n, s) => {
        const t = te,
          o = os,
          i = Me;
        return l(), p("div", as, [d(t, {
          label: ("t" in n ? n.t : a(_))("wallet.points.title"),
          "full-path": a(e)
        }, null, 8, ["label", "full-path"]), !n.mp || !n.bp ? (l(), b(o, {
          key: 0,
          count: 2
        })) : (l(), b(i, {
          key: 1,
          points: [n.mp, n.bp]
        }, null, 8, ["points"]))])
      }
    }
  }),
  is = v(ls, [
    ["__scopeId", "data-v-88129733"]
  ]),
  rs = {
    key: 0,
    class: "skeleton"
  },
  cs = {
    key: 1,
    class: "default"
  },
  us = {
    class: "content"
  },
  _s = {
    class: "title"
  },
  ds = {
    class: "balance"
  },
  ps = y({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(r) {
      const e = r,
        n = h(() => {
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
            } : o.isValentineTheme.value ? {
              image: "valentine/drop-game-token",
              background: "valentine"
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
        s = () => S().push({
          name: "game"
        });
      return (t, o) => {
        const i = te,
          c = U,
          u = E,
          k = ee;
        return l(), p("div", {
          class: X(["pages-index-game", `is-background-${a(n).background}`])
        }, [d(i, {
          label: ("t" in t ? t.t : a(_))("base.game")
        }, null, 8, ["label"]), a(n).type === "skeleton" ? (l(), p("div", rs, [d(c, {
          name: a(n).image,
          class: "icon"
        }, null, 8, ["name"]), d(u, {
          secondary: "",
          class: "skeleton-title"
        }), d(k, {
          label: ("t" in t ? t.t : a(_))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (l(), p("div", cs, [d(c, {
          name: a(n).image,
          class: "icon"
        }, null, 8, ["name"]), m("div", us, [m("div", _s, $(("t" in t ? t.t : a(_))("game.card.title")), 1), m("div", ds, $(a(n).pp) + " Play passes", 1)]), d(k, {
          label: ("t" in t ? t.t : a(_))("base.play"),
          state: "default",
          type: "white",
          class: "pill",
          disabled: a(n).disabled,
          onClick: o[0] || (o[0] = g => s())
        }, null, 8, ["label", "disabled"])]))], 2)
      }
    }
  }),
  ms = v(ps, [
    ["__scopeId", "data-v-7c6add22"]
  ]),
  bs = () => {
    const r = Pe(),
      e = Ee(),
      n = Be(),
      s = h(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      o = {
        set: ys(),
        showOnStart: !P().$webApp.storage.local.get(t),
        onShowed: () => {
          P().$webApp.storage.local.set(t, "true"), K().main.season2StoriesAppear()
        }
      };
    return {
      dailyReward: n,
      myTribe: s,
      season2Stories: o,
      symbols: h(() => r.pointSymbols.value),
      wallet: h(() => r.wallet.value)
    }
  },
  ys = () => ({
    stories: [{
      background: {
        type: "video",
        preview: Le("index/season-2-intro-preview"),
        src: Ne("index/season-2-intro.mp4")
      },
      layout: {
        type: "TitleSubtitle",
        title: _("stories.season_2.slide_1.title"),
        subtitle: _("stories.season_2.slide_1.subtitle")
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
        title: _("stories.season_2.slide_2.title"),
        subtitle: _("stories.season_2.slide_2.subtitle")
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
        title: _("stories.season_2.slide_3.title"),
        subtitle: _("stories.season_2.slide_3.subtitle")
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
        title: _("stories.season_2.slide_4.title"),
        subtitle: _("stories.season_2.slide_4.subtitle")
      },
      button: {
        type: "next"
      }
    }]
  }),
  vs = {
    class: "index-page page"
  },
  ks = y({
    __name: "index",
    setup(r) {
      const e = bs();
      return (n, s) => {
        var k, g, w;
        const t = lt,
          o = pt,
          i = es,
          c = is,
          u = ms;
        return l(), p("div", vs, [d(t, {
          "my-tribe": a(e).myTribe.value,
          wallet: a(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), d(o, {
          "daily-reward": a(e).dailyReward.reward.value,
          "daily-reward-claim": a(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), d(i, {
          value: a(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), d(c, {
          mp: (k = a(e).symbols.value) == null ? void 0 : k.mp,
          bp: (g = a(e).symbols.value) == null ? void 0 : g.bp
        }, null, 8, ["mp", "bp"]), d(u, {
          pp: (w = a(e).symbols.value) == null ? void 0 : w.pp
        }, null, 8, ["pp"])])
      }
    }
  }),
  Ns = v(ks, [
    ["__scopeId", "data-v-21936024"]
  ]);
export {
  Ns as
  default
};