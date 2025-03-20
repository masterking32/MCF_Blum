import {
  _ as le
} from "./CT6v5-Wc.js";
import {
  _ as N
} from "./DFinPKjs.js";
import {
  d as k,
  j as h,
  V as q,
  o as l,
  c as d,
  e as a,
  G as y,
  a as m,
  t as S,
  z as _,
  ah as ie,
  U as J,
  D as C,
  aq as re,
  ar as ce,
  x as X,
  f as g,
  ac as I,
  F as K,
  H as R,
  b as p,
  $ as j,
  I as ue,
  _ as Z,
  as as _e,
  l as de,
  at as z,
  au as pe,
  Y as U,
  q as D,
  Z as me,
  av as V,
  X as H,
  J as be,
  aw as ye,
  L as ve,
  a1 as ke,
  ax as Q,
  ay as ge,
  M as fe,
  ag as Y,
  am as G,
  ad as ee,
  az as we,
  n as te,
  aA as ne,
  h as E,
  K as A,
  aB as $e,
  aC as he,
  aD as Se,
  aE as Te,
  T as Ce,
  an as Ie,
  ao as Ae,
  a9 as xe,
  aF as Re,
  p as Pe,
  ab as Le,
  P as Be,
  aG as Ee,
  aH as Ne
} from "./FDgdEClw.js";
import {
  _ as Ke
} from "./2QBQIYF8.js";
import {
  _ as W,
  a as se,
  b as Me
} from "./DOcNjVRo.js";
import {
  _ as Oe
} from "./wrYHLSEh.js";
import {
  _ as je
} from "./Bs71aAOP.js";
import {
  _ as De
} from "./CDN2jbrK.js";
import {
  _ as Fe
} from "./CNVNfEpt.js";
import {
  _ as oe
} from "./D_hhxFuq.js";
import "./C5ylHOsA.js";
import "./bkgNDqKI.js";
import "./pHnujUK5.js";
import "./D9O4ECeF.js";
import "./BWh4cXL2.js";
import "./BzAm81KQ.js";
import "./C_LgIH7q.js";
const Ve = {
    class: "pages-index-banner-wallet"
  },
  Ue = {
    key: 1,
    class: "connected"
  },
  We = {
    class: "label"
  },
  ze = k({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(c) {
      const e = c,
        s = () => re(ce.MAIN).runConnectionFlow(),
        o = h(() => {
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
      return (t, n) => {
        const i = N,
          u = X;
        return l(), d("div", Ve, [a(o).type === "skeleton" ? (l(), y(i, {
          key: 0,
          class: "skeleton"
        })) : a(o).type === "connected" ? (l(), d("div", Ue, [m("div", We, S(("t" in t ? t.t : a(_))("wallet.total_balance")), 1), (l(), y(ie(a(o).balance), {
          class: "balance"
        }))])) : a(o).type === "connect" ? (l(), y(u, {
          key: 2,
          label: ("t" in t ? t.t : a(_))("wallet.connect.btn"),
          size: a(J).SMALL,
          onClick: n[0] || (n[0] = r => s())
        }, null, 8, ["label", "size"])) : C("", !0)])
      }
    }
  }),
  He = g(ze, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  Ye = {
    class: "pages-tribe-external-index-page"
  },
  Ge = k({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(c) {
      const e = I().resolve({
          name: "tribe-join"
        }).fullPath,
        s = I().resolve({
          name: "tribe-slug"
        }).fullPath,
        o = t => j().main.tribeLogoClick(t);
      return (t, n) => {
        const i = N,
          u = ue,
          r = Z,
          b = Ke;
        return l(), d("div", Ye, [t.myTribe ? (l(), d(K, {
          key: 1
        }, [t.myTribe.type === "validating" ? (l(), y(u, {
          key: 0,
          to: a(e),
          class: "validating hex-center",
          onClick: n[0] || (n[0] = v => o(t.myTribe.type))
        }, {
          default: R(() => n[4] || (n[4] = [m("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (l(), y(u, {
          key: 1,
          to: a(e),
          class: "join hex-center",
          onClick: n[1] || (n[1] = v => o(t.myTribe.type))
        }, {
          default: R(() => [p(r, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_created" ? (l(), y(u, {
          key: 2,
          to: a(e),
          class: "error hex-center",
          onClick: n[2] || (n[2] = v => o(t.myTribe.type))
        }, {
          default: R(() => [p(r, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "ok" ? (l(), y(u, {
          key: 3,
          to: a(s),
          class: "ok",
          onClick: n[3] || (n[3] = v => o(t.myTribe.type))
        }, {
          default: R(() => [p(b, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : C("", !0)], 64)) : (l(), y(i, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  qe = g(Ge, [
    ["__scopeId", "data-v-ef3e1f1f"]
  ]),
  Je = {
    class: "pages-index-banner-profile-tribe"
  },
  Xe = k({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(c) {
      const e = _e(() => {
        de().public.ENVIRONMENT !== "prod" && I().push({
          name: "debug"
        })
      }, 5);
      return (s, o) => {
        const t = le,
          n = He,
          i = qe;
        return l(), d("div", Je, [p(t, {
          small: "",
          onClick: o[0] || (o[0] = u => a(e)())
        }), p(n, {
          wallet: s.wallet
        }, null, 8, ["wallet"]), p(i, {
          "my-tribe": s.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"])])
      }
    }
  }),
  Ze = g(Xe, [
    ["__scopeId", "data-v-779ec8f9"]
  ]),
  Qe = {
    class: "pages-index-banner-controls"
  },
  et = ["onClick"],
  tt = {
    class: "image-container"
  },
  nt = {
    class: "title"
  },
  st = k({
    __name: "BannerControls",
    setup(c) {
      const e = h(() => [{
        title: _("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => I().push({
          name: "memepad-new",
          query: {
            memepadFrom: z.MAIN,
            memepadNewFrom: pe.MAIN
          }
        })
      }, {
        title: _("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => I().push({
          name: "memepad",
          query: {
            memepadFrom: z.MAIN
          }
        })
      }, {
        title: _("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          j().main.controlsTradingBotClick(), U().openTradingBot()
        }
      }]);
      return (s, o) => {
        const t = W;
        return l(), d("div", Qe, [(l(!0), d(K, null, D(a(e), (n, i) => (l(), d("button", {
          key: i,
          class: "control reset",
          onClick: u => n.onClick()
        }, [m("div", tt, [p(t, {
          name: n.image,
          class: "image"
        }, null, 8, ["name"])]), m("div", nt, S(n.title), 1)], 8, et))), 128))])
      }
    }
  }),
  ot = g(st, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  at = {
    class: "pages-index-banner"
  },
  lt = k({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(c) {
      return (e, s) => {
        const o = Ze,
          t = ot;
        return l(), d("div", at, [p(o, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), p(t, {
          class: "controls"
        })])
      }
    }
  }),
  it = g(lt, [
    ["__scopeId", "data-v-8f4c28ad"]
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
  pt = k({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(c) {
      const e = c,
        s = me(),
        o = (n, i) => async () => {
          const u = await e.dailyRewardClaim();
          ge(u, {
            Err: () => s.error(_("base.claim_error")),
            Ok: r => {
              n === V.RESTORE && s.success(_("daily_reward.streak_restored", {
                days: i
              })), s.success(`You’ve got ${fe(r.claimedReward.points)} BP`), s.success(Y("span", ["You’ve got ", Y("i", {
                class: "ticket"
              }), ` ${r.claimedReward.passes}`])), U().makeConfetti(), j().main.dailyRewardClick({
                points: r.claimedReward.points.toNumber(),
                passes: r.claimedReward.passes
              })
            }
          })
        }, t = h(() => {
          if (e.dailyReward === void 0) return;
          const n = e.dailyReward.currentStreakDays,
            i = `${n}-${_("base.n.days",n)}`;
          if (e.dailyReward.claim === V.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: _("daily_reward.missed"),
            subtitle: H(_("daily_reward.restore_current_streak", {
              days: i
            })),
            claim: {
              label: _("base.restore"),
              white: !0,
              can: !0,
              fn: o(e.dailyReward.claim, i)
            }
          };
          const u = (() => {
            const b = be().ms100ticker.value;
            if (!b) return ye();
            const v = ve(e.dailyReward.canClaimAt - b, "letters");
            return H(_("base.claim_next_in", {
              time: v
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: _("daily_reward.current_streak", {
              days: i
            }),
            subtitle: u,
            claim: {
              can: e.dailyReward.claim !== V.UNAVAILABLE,
              fn: o(e.dailyReward.claim, i)
            }
          }
        });
      return (n, i) => {
        const u = N,
          r = W,
          b = Oe;
        return l(), d("div", rt, [a(t) ? (l(), d("div", ct, [p(r, {
          name: a(t).icon,
          class: "icon"
        }, null, 8, ["name"]), m("div", ut, [m("div", _t, S(a(t).title), 1), ("isOk" in n ? n.isOk : a(ke))(a(t).subtitle) ? (l(), d("div", dt, S(a(t).subtitle.data), 1)) : (l(), y(u, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), a(t).claim ? (l(), y(b, {
          key: 0,
          label: a(t).claim.label,
          "can-claim": a(t).claim.can,
          "claim-fn": a(t).claim.fn,
          style: Q(a(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : C("", !0)])) : (l(), y(u, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  mt = g(pt, [
    ["__scopeId", "data-v-181516c9"]
  ]),
  bt = {
    class: "pages-index-new-season-banner-card"
  },
  yt = ["src"],
  vt = ["src"],
  kt = {
    class: "content"
  },
  gt = {
    class: "inner"
  },
  ft = {
    class: "title"
  },
  wt = {
    class: "icon-wrapper"
  },
  $t = k({
    __name: "IndexNewSeasonBannerCard",
    props: {
      title: {},
      buttonLabel: {},
      onButtonClick: {
        type: Function
      },
      icon: {},
      lottie: {}
    },
    setup(c) {
      return (e, s) => {
        const o = se,
          t = Z,
          n = ee;
        return l(), d("div", bt, [m("img", {
          src: ("imgResolver" in e ? e.imgResolver : a(G))("index/banner/stars", "gif"),
          class: "stars"
        }, null, 8, yt), s[0] || (s[0] = m("div", {
          class: "bg"
        }, null, -1)), m("img", {
          src: ("imgResolver" in e ? e.imgResolver : a(G))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, vt), m("div", kt, [m("div", gt, [m("div", ft, S(e.title), 1), p(o, {
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"])]), m("div", wt, [e.icon ? (l(), y(t, {
          key: 0,
          name: e.icon,
          class: "icon"
        }, null, 8, ["name"])) : e.lottie ? (l(), y(n, {
          key: 1,
          name: e.lottie,
          class: "animation"
        }, null, 8, ["name"])) : C("", !0)])])])
      }
    }
  }),
  ht = g($t, [
    ["__scopeId", "data-v-63c6a0fe"]
  ]),
  St = {
    class: "kit-stories-src-counter"
  },
  Tt = k({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(c) {
      we(o => ({
        "9db269f8": o.count
      }));
      const e = c,
        s = h(() => [...new Array(e.count)].map((o, t) => t < e.current ? {
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
      return (o, t) => (l(), d("div", St, [(l(!0), d(K, null, D(a(s), n => (l(), d("div", {
        key: n.key,
        class: te(["progress", [`is-state-${n.state}`]]),
        style: Q(n.state === "current" ? {
          "background-position-x": `-${n.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  Ct = g(Tt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  It = {
    class: "kit-stories-shared-background"
  },
  At = ["poster", "src"],
  xt = ["src"],
  Rt = k({
    __name: "Background",
    props: {
      background: {}
    },
    setup(c) {
      return (e, s) => {
        const o = De;
        return l(), d("div", It, [e.background.type === "video" ? (l(), d("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, At)) : e.background.type === "image" ? (l(), d("img", {
          key: 1,
          src: e.background.src
        }, null, 8, xt)) : e.background.type === "stars" ? (l(), y(o, {
          key: 2,
          class: "stars"
        })) : C("", !0)])
      }
    }
  }),
  Pt = g(Rt, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  Lt = {
    class: "kit-stories-layouts-title-subtitle"
  },
  Bt = {
    class: "title"
  },
  Et = {
    class: "subtitle"
  },
  Nt = k({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(c) {
      return (e, s) => (l(), d("div", Lt, [m("div", Bt, S(e.layout.title), 1), m("div", Et, S(e.layout.subtitle), 1)]))
    }
  }),
  Kt = g(Nt, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  Mt = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  Ot = {
    class: "animoji-container"
  },
  jt = {
    class: "content-container"
  },
  Dt = {
    class: "title"
  },
  Ft = {
    class: "subtitle"
  },
  Vt = k({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(c) {
      return (e, s) => {
        const o = ee;
        return l(), d("div", Mt, [m("div", Ot, [p(o, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), m("div", jt, [m("div", Dt, S(e.layout.title), 1), m("div", Ft, S(e.layout.subtitle), 1)])])
      }
    }
  }),
  Ut = g(Vt, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  Wt = k({
    __name: "Button",
    props: {
      button: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(c, {
      emit: e
    }) {
      const s = c,
        o = e,
        t = h(() => s.button.type === "next" ? s.isLast ? _("base.close") : _("base.next") : s.button.label),
        n = () => {
          if (s.button.type === "next") E().$webApp.HapticFeedback.impactOccurred("light"), o("next");
          else if (s.button.type === "local") I().push(s.button.link);
          else if (s.button.type === "external") E().$webApp.openLink(s.button.link);
          else if (s.button.type === "telegram") E().$webApp.openTelegramLink(s.button.link);
          else throw s.button, q("Unknown button type")
        };
      return (i, u) => {
        const r = X;
        return l(), y(r, {
          label: a(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: a(J).LARGE,
          onClick: u[0] || (u[0] = ne(b => n(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  zt = g(Wt, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  Ht = {
    class: "kit-stories-src-story"
  },
  Yt = {
    class: "content"
  },
  Gt = {
    class: "layout"
  },
  qt = {
    class: "button"
  },
  Jt = k({
    __name: "Story",
    props: {
      story: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(c) {
      return (e, s) => {
        const o = Pt,
          t = Kt,
          n = Ut,
          i = zt;
        return l(), d("div", Ht, [p(o, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), m("div", Yt, [m("div", Gt, [e.story.layout.type === "TitleSubtitle" ? (l(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (l(), y(n, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : C("", !0)]), m("div", qt, [e.story.button ? (l(), y(i, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: s[0] || (s[0] = u => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : C("", !0)])])])
      }
    }
  }),
  Xt = g(Jt, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  Zt = (c, e) => {
    const s = c,
      o = A(c),
      t = h(() => 1 - o.value / s);
    let n = 0,
      i;
    const u = () => {
        n = Date.now(), i = he(() => {
          const $ = Date.now(),
            T = $ - n;
          n = $, o.value = Math.max(o.value - T, 0), o.value <= 0 && (r(), e())
        }, 100)
      },
      r = () => {
        i && (clearInterval(i), i = void 0)
      },
      b = () => {
        if (i) {
          r();
          const $ = Date.now() - n;
          o.value = Math.max(o.value - $, 0)
        }
      },
      v = () => u();
    return u(), {
      timeToExpire: $e(o),
      progress: t,
      destroy: r,
      pause: b,
      resume: v
    }
  },
  Qt = 150,
  en = k({
    __name: "Stories",
    props: {
      stories: {}
    },
    emits: ["close"],
    setup(c, {
      emit: e
    }) {
      const s = c,
        o = e,
        t = A(0),
        n = () => {
          t.value < s.stories.length - 1 ? (t.value += 1, b()) : o("close")
        },
        i = () => {
          t.value > 0 ? (t.value -= 1, b()) : o("close")
        },
        u = () => Zt(5e3, n),
        r = Se(u()),
        b = () => {
          r.value.destroy(), r.value = u()
        },
        v = A(),
        $ = Te(),
        T = A(!1),
        P = A(!1),
        f = () => {
          T.value = !1, P.value = !1, $.set(() => {
            r.value.pause(), T.value = !0, P.value = !0
          }, Qt)
        },
        L = () => {
          $.destroy(), T.value && (r.value.resume(), T.value = !1)
        },
        ae = B => {
          if (T.value || P.value || !v.value) return;
          const {
            width: w,
            left: F
          } = v.value.getBoundingClientRect(), M = B.clientX - F, O = w / 3;
          M < O ? i() : M > O * 2 && n()
        };
      return Ce(() => {
        $.destroy(), r.value.destroy()
      }), (B, w) => {
        const F = Ct,
          M = Xt,
          O = Fe;
        return l(), y(O, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: R(() => [m("div", {
            ref_key: "storiesRef",
            ref: v,
            class: "kit-stories-src-stories",
            onPointerdown: w[1] || (w[1] = ne(x => f(), ["prevent"])),
            onPointerup: w[2] || (w[2] = x => L()),
            onPointercancel: w[3] || (w[3] = x => L()),
            onPointerleave: w[4] || (w[4] = x => L()),
            onClick: w[5] || (w[5] = x => ae(x))
          }, [p(F, {
            current: a(t),
            "current-progress": a(r).progress.value,
            count: B.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (l(), y(M, {
            key: a(t),
            story: B.stories[a(t)],
            "is-last": a(t) === B.stories.length - 1,
            onNext: w[0] || (w[0] = x => n())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  tn = g(en, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  nn = k({
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
    setup(c) {
      const e = Ae(c, "modelValue");
      return (s, o) => {
        const t = tn;
        return l(), y(xe, {
          name: "opacity-transition"
        }, {
          default: R(() => [e.value ? (l(), y(t, {
            key: 0,
            stories: s.set.stories,
            class: "kit-stories",
            onClose: o[0] || (o[0] = n => e.value = !1)
          }, null, 8, ["stories"])) : C("", !0)]),
          _: 1
        })
      }
    }
  }),
  sn = g(nn, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  on = {
    class: "pages-index-new-season-banner"
  },
  an = {
    class: "progress"
  },
  ln = k({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(c) {
      const e = c,
        s = I(),
        o = [{
          title: _("index.banners.trade_now.title"),
          buttonLabel: _("index.banners.trade_now.button_label"),
          onButtonClick: () => s.push({
            name: "memepad"
          }),
          icon: "ton-logo"
        }, {
          title: _("index.banners.earn_now.title"),
          buttonLabel: _("index.banners.earn_now.button_label"),
          onButtonClick: () => s.push({
            name: "tasks"
          }),
          icon: "bp-logo"
        }, {
          title: _("index.banners.season_2.title"),
          buttonLabel: _("index.banners.season_2.button_label"),
          onButtonClick: () => {
            t.value = !0
          },
          lottie: "animations/Moon"
        }],
        t = A(e.value.showOnStart);
      Re(t, b => b && e.value.onShowed(), {
        immediate: !0
      });
      const n = A(0),
        i = A(null),
        u = b => {
          var v;
          (v = i.value) == null || v.scrollTo({
            left: b * window.innerWidth + (n.value > b ? -1 : 1),
            behavior: "smooth"
          })
        },
        r = Le(() => {
          if (!i.value) return;
          const b = i.value.children[0].offsetWidth + 10,
            v = i.value.scrollLeft,
            $ = Math.round(v / b);
          n.value = $
        }, 50).debouncedFunction;
      return (b, v) => {
        const $ = ht,
          T = je,
          P = sn;
        return l(), d("div", on, [m("div", {
          ref_key: "listEl",
          ref: i,
          class: "list",
          onScroll: v[0] || (v[0] = (...f) => a(r) && a(r)(...f)),
          onTouchmove: v[1] || (v[1] = (...f) => a(r) && a(r)(...f))
        }, [(l(), d(K, null, D(o, (f, L) => m("div", {
          key: f.title,
          class: "item"
        }, [p($, {
          index: L,
          icon: f.icon,
          lottie: f.lottie,
          title: f.title,
          "button-label": f.buttonLabel,
          "on-button-click": f.onButtonClick
        }, null, 8, ["index", "icon", "lottie", "title", "button-label", "on-button-click"])])), 64))], 544), m("div", an, [o.length > 1 ? (l(), y(T, {
          key: 0,
          "model-value": a(n),
          count: o.length,
          timer: 15e3,
          "onUpdate:modelValue": u
        }, null, 8, ["model-value", "count"])) : C("", !0)]), p(P, {
          modelValue: a(t),
          "onUpdate:modelValue": v[2] || (v[2] = f => Pe(t) ? t.value = f : null),
          set: b.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  rn = g(ln, [
    ["__scopeId", "data-v-48b17753"]
  ]),
  cn = {
    class: "pages-wallet-asset-skeleton"
  },
  un = {
    class: "content"
  },
  _n = k({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(c) {
      return (e, s) => {
        const o = N;
        return l(), d("div", cn, [(l(!0), d(K, null, D(e.count, t => (l(), d("div", {
          key: t,
          class: "skeleton"
        }, [p(o, {
          rounded: "",
          class: "logo"
        }), m("div", un, [p(o, {
          class: "title"
        }), p(o, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  dn = g(_n, [
    ["__scopeId", "data-v-26805825"]
  ]),
  pn = {
    class: "pages-index-points"
  },
  mn = k({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(c) {
      const e = h(() => I().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (s, o) => {
        const t = oe,
          n = dn,
          i = Me;
        return l(), d("div", pn, [p(t, {
          label: ("t" in s ? s.t : a(_))("wallet.points.title"),
          "full-path": a(e)
        }, null, 8, ["label", "full-path"]), s.points ? (l(), y(i, {
          key: 1,
          points: s.points
        }, null, 8, ["points"])) : (l(), y(n, {
          key: 0,
          count: 2
        }))])
      }
    }
  }),
  bn = g(mn, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  yn = {
    key: 0,
    class: "skeleton"
  },
  vn = {
    key: 1,
    class: "default"
  },
  kn = {
    class: "content"
  },
  gn = {
    class: "title"
  },
  fn = {
    class: "balance"
  },
  wn = k({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(c) {
      const e = c,
        s = h(() => {
          const t = (() => {
            const n = U().internal;
            return n.isPokrasTheme.value ? {
              image: "pokras/drop-game-token",
              background: "grid"
            } : n.isHalloweenTheme.value ? {
              image: "halloween/drop-game-token",
              background: "grid"
            } : n.isTsubasaTheme.value ? {
              image: "tsubasa/drop-game-token",
              background: "grid"
            } : n.isNewYearTheme.value ? {
              image: "new-year/drop-game-token",
              background: "new-year"
            } : n.isValentineTheme.value ? {
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
        o = () => I().push({
          name: "game"
        });
      return (t, n) => {
        const i = oe,
          u = W,
          r = N,
          b = se;
        return l(), d("div", {
          class: te(["pages-index-game", `is-background-${a(s).background}`])
        }, [p(i, {
          label: ("t" in t ? t.t : a(_))("base.game")
        }, null, 8, ["label"]), a(s).type === "skeleton" ? (l(), d("div", yn, [p(u, {
          name: a(s).image,
          class: "icon"
        }, null, 8, ["name"]), p(r, {
          secondary: "",
          class: "skeleton-title"
        }), p(b, {
          label: ("t" in t ? t.t : a(_))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (l(), d("div", vn, [p(u, {
          name: a(s).image,
          class: "icon"
        }, null, 8, ["name"]), m("div", kn, [m("div", gn, S(("t" in t ? t.t : a(_))("game.card.title")), 1), m("div", fn, S(a(s).pp) + " Play passes", 1)]), p(b, {
          label: ("t" in t ? t.t : a(_))("base.play"),
          state: "default",
          type: "white",
          class: "pill",
          disabled: a(s).disabled,
          onClick: n[0] || (n[0] = v => o())
        }, null, 8, ["label", "disabled"])]))], 2)
      }
    }
  }),
  $n = g(wn, [
    ["__scopeId", "data-v-7c6add22"]
  ]),
  hn = () => {
    const c = Be(),
      e = Ee(),
      s = Ne(),
      o = h(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      n = {
        set: Sn(),
        showOnStart: !E().$webApp.storage.local.get(t),
        onShowed: () => {
          E().$webApp.storage.local.set(t, "true"), j().main.season2StoriesAppear()
        }
      },
      i = h(() => {
        const r = c.pointSymbols.value,
          b = c.dropSymbols.value;
        if (!(!r || !b) && !(!r.mp || !r.bp)) return [r.mp, r.bp, ...b]
      }),
      u = h(() => c.pointSymbols.value.pp);
    return {
      dailyReward: s,
      myTribe: o,
      season2Stories: n,
      wallet: h(() => c.wallet.value),
      pp: u,
      walletAssets: i
    }
  },
  Sn = () => ({
    stories: [{
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
  Tn = {
    class: "index-page page"
  },
  Cn = k({
    __name: "index",
    setup(c) {
      const e = hn();
      return (s, o) => {
        const t = it,
          n = mt,
          i = rn,
          u = bn,
          r = $n;
        return l(), d("div", Tn, [p(t, {
          "my-tribe": a(e).myTribe.value,
          wallet: a(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), p(n, {
          "daily-reward": a(e).dailyReward.reward.value,
          "daily-reward-claim": a(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), p(i, {
          value: a(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), p(u, {
          points: a(e).walletAssets.value
        }, null, 8, ["points"]), p(r, {
          pp: a(e).pp.value
        }, null, 8, ["pp"])])
      }
    }
  }),
  Wn = g(Cn, [
    ["__scopeId", "data-v-97e08456"]
  ]);
export {
  Wn as
  default
};