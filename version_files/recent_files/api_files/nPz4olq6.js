import {
  _ as le
} from "./B0HNtSUD.js";
import {
  _ as E
} from "./Bv2Es5Cu.js";
import {
  d as g,
  j as h,
  V as J,
  o as l,
  c as d,
  e as o,
  G as b,
  a as m,
  t as T,
  z as _,
  ah as ie,
  U as X,
  D as C,
  aq as re,
  ar as ce,
  x as Z,
  f,
  ac as I,
  F as N,
  H as R,
  b as p,
  $ as O,
  I as ue,
  _ as Q,
  as as _e,
  l as de,
  at as H,
  au as pe,
  Y as j,
  q as D,
  Z as me,
  av as W,
  X as Y,
  J as be,
  aw as ye,
  L as ve,
  a1 as ke,
  ax as ee,
  ay as ge,
  M as fe,
  ag as G,
  am as q,
  ad as te,
  az as we,
  n as ne,
  aA as se,
  h as L,
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
  ab as Be,
  P as Le,
  aG as Ee,
  aH as Ne
} from "./D7slzxTT.js";
import {
  _ as Ke
} from "./Bm077_gL.js";
import {
  _ as z,
  a as oe,
  b as Me
} from "./D4tAFEJ9.js";
import {
  _ as Oe
} from "./Bp56b9lQ.js";
import {
  _ as je
} from "./-f7jCtDG.js";
import {
  _ as De
} from "./C3BnI74k.js";
import {
  _ as Fe
} from "./BTaib7Va.js";
import {
  _ as ae
} from "./VP1b_bjo.js";
import "./BNz_j5IC.js";
import "./4o0MQ0r2.js";
import "./By4LWPyO.js";
import "./D9XjqWgU.js";
import "./rwQW_dLy.js";
import "./ByINc9kM.js";
import "./BeHbLYQW.js";
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
  ze = g({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(u) {
      const e = u,
        s = () => re(ce.MAIN).runConnectionFlow(),
        a = h(() => {
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
          throw e.wallet, J("Invalid wallet status")
        });
      return (t, n) => {
        const i = E,
          r = Z;
        return l(), d("div", Ve, [o(a).type === "skeleton" ? (l(), b(i, {
          key: 0,
          class: "skeleton"
        })) : o(a).type === "connected" ? (l(), d("div", Ue, [m("div", We, T(("t" in t ? t.t : o(_))("wallet.total_balance")), 1), (l(), b(ie(o(a).balance), {
          class: "balance"
        }))])) : o(a).type === "connect" ? (l(), b(r, {
          key: 2,
          label: ("t" in t ? t.t : o(_))("wallet.connect.btn"),
          size: o(X).SMALL,
          onClick: n[0] || (n[0] = c => s())
        }, null, 8, ["label", "size"])) : C("", !0)])
      }
    }
  }),
  He = f(ze, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  Ye = {
    class: "pages-tribe-external-index-page"
  },
  Ge = g({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(u) {
      const e = I().resolve({
          name: "tribe-join"
        }).fullPath,
        s = I().resolve({
          name: "tribe-slug"
        }).fullPath,
        a = t => O().main.tribeLogoClick(t);
      return (t, n) => {
        const i = E,
          r = ue,
          c = Q,
          y = Ke;
        return l(), d("div", Ye, [t.myTribe ? (l(), d(N, {
          key: 1
        }, [t.myTribe.type === "validating" ? (l(), b(r, {
          key: 0,
          to: o(e),
          class: "validating hex-center",
          onClick: n[0] || (n[0] = v => a(t.myTribe.type))
        }, {
          default: R(() => n[4] || (n[4] = [m("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (l(), b(r, {
          key: 1,
          to: o(e),
          class: "join hex-center",
          onClick: n[1] || (n[1] = v => a(t.myTribe.type))
        }, {
          default: R(() => [p(c, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_created" ? (l(), b(r, {
          key: 2,
          to: o(e),
          class: "error hex-center",
          onClick: n[2] || (n[2] = v => a(t.myTribe.type))
        }, {
          default: R(() => [p(c, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "ok" ? (l(), b(r, {
          key: 3,
          to: o(s),
          class: "ok",
          onClick: n[3] || (n[3] = v => a(t.myTribe.type))
        }, {
          default: R(() => [p(y, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : C("", !0)], 64)) : (l(), b(i, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  qe = f(Ge, [
    ["__scopeId", "data-v-ef3e1f1f"]
  ]),
  Je = {
    class: "pages-index-banner-profile-tribe"
  },
  Xe = g({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(u) {
      const e = _e(() => {
        de().public.ENVIRONMENT !== "prod" && I().push({
          name: "debug"
        })
      }, 5);
      return (s, a) => {
        const t = le,
          n = He,
          i = qe;
        return l(), d("div", Je, [p(t, {
          small: "",
          onClick: a[0] || (a[0] = r => o(e)())
        }), p(n, {
          wallet: s.wallet
        }, null, 8, ["wallet"]), p(i, {
          "my-tribe": s.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"])])
      }
    }
  }),
  Ze = f(Xe, [
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
  st = g({
    __name: "BannerControls",
    setup(u) {
      const e = h(() => [{
        title: _("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => I().push({
          name: "memepad-new",
          query: {
            memepadFrom: H.MAIN,
            memepadNewFrom: pe.MAIN
          }
        })
      }, {
        title: _("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => I().push({
          name: "memepad",
          query: {
            memepadFrom: H.MAIN
          }
        })
      }, {
        title: _("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          O().main.controlsTradingBotClick(), j().openTradingBot()
        }
      }]);
      return (s, a) => {
        const t = z;
        return l(), d("div", Qe, [(l(!0), d(N, null, D(o(e), (n, i) => (l(), d("button", {
          key: i,
          class: "control reset",
          onClick: r => n.onClick()
        }, [m("div", tt, [p(t, {
          name: n.image,
          class: "image"
        }, null, 8, ["name"])]), m("div", nt, T(n.title), 1)], 8, et))), 128))])
      }
    }
  }),
  ot = f(st, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  at = {
    class: "pages-index-banner"
  },
  lt = g({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(u) {
      return (e, s) => {
        const a = Ze,
          t = ot;
        return l(), d("div", at, [p(a, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), p(t, {
          class: "controls"
        })])
      }
    }
  }),
  it = f(lt, [
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
  pt = g({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(u) {
      const e = u,
        s = me(),
        a = (n, i) => async () => {
          const r = await e.dailyRewardClaim();
          ge(r, {
            Err: () => s.error(_("base.claim_error")),
            Ok: c => {
              n === W.RESTORE && s.success(_("daily_reward.streak_restored", {
                days: i
              })), s.success(`You’ve got ${fe(c.claimedReward.points)} BP`), s.success(G("span", ["You’ve got ", G("i", {
                class: "ticket"
              }), ` ${c.claimedReward.passes}`])), j().makeConfetti(), O().main.dailyRewardClick({
                points: c.claimedReward.points.toNumber(),
                passes: c.claimedReward.passes
              })
            }
          })
        }, t = h(() => {
          if (e.dailyReward === void 0) return;
          const n = e.dailyReward.currentStreakDays,
            i = `${n}-${_("base.n.days",n)}`;
          if (e.dailyReward.claim === W.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: _("daily_reward.missed"),
            subtitle: Y(_("daily_reward.restore_current_streak", {
              days: i
            })),
            claim: {
              label: _("base.restore"),
              white: !0,
              can: !0,
              fn: a(e.dailyReward.claim, i)
            }
          };
          const r = (() => {
            const y = be().ms100ticker.value;
            if (!y) return ye();
            const v = ve(e.dailyReward.canClaimAt - y, "letters");
            return Y(_("base.claim_next_in", {
              time: v
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: _("daily_reward.current_streak", {
              days: i
            }),
            subtitle: r,
            claim: {
              can: e.dailyReward.claim !== W.UNAVAILABLE,
              fn: a(e.dailyReward.claim, i)
            }
          }
        });
      return (n, i) => {
        const r = E,
          c = z,
          y = Oe;
        return l(), d("div", rt, [o(t) ? (l(), d("div", ct, [p(c, {
          name: o(t).icon,
          class: "icon"
        }, null, 8, ["name"]), m("div", ut, [m("div", _t, T(o(t).title), 1), ("isOk" in n ? n.isOk : o(ke))(o(t).subtitle) ? (l(), d("div", dt, T(o(t).subtitle.data), 1)) : (l(), b(r, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), o(t).claim ? (l(), b(y, {
          key: 0,
          label: o(t).claim.label,
          "can-claim": o(t).claim.can,
          "claim-fn": o(t).claim.fn,
          style: ee(o(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : C("", !0)])) : (l(), b(r, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  mt = f(pt, [
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
  $t = g({
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
    setup(u) {
      return (e, s) => {
        const a = oe,
          t = Q,
          n = te;
        return l(), d("div", bt, [m("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(q))("index/banner/stars", "gif"),
          class: "stars"
        }, null, 8, yt), s[0] || (s[0] = m("div", {
          class: "bg"
        }, null, -1)), m("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(q))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, vt), m("div", kt, [m("div", gt, [m("div", ft, T(e.title), 1), p(a, {
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"])]), m("div", wt, [e.icon ? (l(), b(t, {
          key: 0,
          name: e.icon,
          class: "icon"
        }, null, 8, ["name"])) : e.lottie ? (l(), b(n, {
          key: 1,
          name: e.lottie,
          class: "animation",
          loop: ""
        }, null, 8, ["name"])) : C("", !0)])])])
      }
    }
  }),
  ht = f($t, [
    ["__scopeId", "data-v-25e915e9"]
  ]),
  St = {
    class: "kit-stories-src-counter"
  },
  Tt = g({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(u) {
      we(a => ({
        "9db269f8": a.count
      }));
      const e = u,
        s = h(() => [...new Array(e.count)].map((a, t) => t < e.current ? {
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
      return (a, t) => (l(), d("div", St, [(l(!0), d(N, null, D(o(s), n => (l(), d("div", {
        key: n.key,
        class: ne(["progress", [`is-state-${n.state}`]]),
        style: ee(n.state === "current" ? {
          "background-position-x": `-${n.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  Ct = f(Tt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  It = {
    class: "kit-stories-shared-background"
  },
  At = ["poster", "src"],
  xt = ["src"],
  Rt = g({
    __name: "Background",
    props: {
      background: {}
    },
    setup(u) {
      return (e, s) => {
        const a = De;
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
        }, null, 8, xt)) : e.background.type === "stars" ? (l(), b(a, {
          key: 2,
          class: "stars"
        })) : C("", !0)])
      }
    }
  }),
  Pt = f(Rt, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  Bt = {
    class: "kit-stories-layouts-title-subtitle"
  },
  Lt = {
    class: "title"
  },
  Et = {
    class: "subtitle"
  },
  Nt = g({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(u) {
      return (e, s) => (l(), d("div", Bt, [m("div", Lt, T(e.layout.title), 1), m("div", Et, T(e.layout.subtitle), 1)]))
    }
  }),
  Kt = f(Nt, [
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
  Vt = g({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(u) {
      return (e, s) => {
        const a = te;
        return l(), d("div", Mt, [m("div", Ot, [p(a, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), m("div", jt, [m("div", Dt, T(e.layout.title), 1), m("div", Ft, T(e.layout.subtitle), 1)])])
      }
    }
  }),
  Ut = f(Vt, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  Wt = g({
    __name: "Button",
    props: {
      button: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(u, {
      emit: e
    }) {
      const s = u,
        a = e,
        t = h(() => s.button.type === "next" ? s.isLast ? _("base.close") : _("base.next") : s.button.label),
        n = () => {
          if (s.button.type === "next") L().$webApp.HapticFeedback.impactOccurred("light"), a("next");
          else if (s.button.type === "local") I().push(s.button.link);
          else if (s.button.type === "external") L().$webApp.openLink(s.button.link);
          else if (s.button.type === "telegram") L().$webApp.openTelegramLink(s.button.link);
          else throw s.button, J("Unknown button type")
        };
      return (i, r) => {
        const c = Z;
        return l(), b(c, {
          label: o(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: o(X).LARGE,
          onClick: r[0] || (r[0] = se(y => n(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  zt = f(Wt, [
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
  Jt = g({
    __name: "Story",
    props: {
      story: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(u) {
      return (e, s) => {
        const a = Pt,
          t = Kt,
          n = Ut,
          i = zt;
        return l(), d("div", Ht, [p(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), m("div", Yt, [m("div", Gt, [e.story.layout.type === "TitleSubtitle" ? (l(), b(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (l(), b(n, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : C("", !0)]), m("div", qt, [e.story.button ? (l(), b(i, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: s[0] || (s[0] = r => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : C("", !0)])])])
      }
    }
  }),
  Xt = f(Jt, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  Zt = (u, e) => {
    const s = u,
      a = A(u),
      t = h(() => 1 - a.value / s);
    let n = 0,
      i;
    const r = () => {
        n = Date.now(), i = he(() => {
          const k = Date.now(),
            S = k - n;
          n = k, a.value = Math.max(a.value - S, 0), a.value <= 0 && (c(), e())
        }, 100)
      },
      c = () => {
        i && (clearInterval(i), i = void 0)
      },
      y = () => {
        if (i) {
          c();
          const k = Date.now() - n;
          a.value = Math.max(a.value - k, 0)
        }
      },
      v = () => r();
    return r(), {
      timeToExpire: $e(a),
      progress: t,
      destroy: c,
      pause: y,
      resume: v
    }
  },
  Qt = 150,
  en = g({
    __name: "Stories",
    props: {
      stories: {}
    },
    emits: ["close"],
    setup(u, {
      emit: e
    }) {
      const s = u,
        a = e,
        t = A(0),
        n = () => {
          t.value < s.stories.length - 1 ? (t.value += 1, y()) : a("close")
        },
        i = () => {
          t.value > 0 ? (t.value -= 1, y()) : a("close")
        },
        r = () => Zt(5e3, n),
        c = Se(r()),
        y = () => {
          c.value.destroy(), c.value = r()
        },
        v = A(),
        k = Te(),
        S = A(!1),
        P = A(!1),
        F = () => {
          S.value = !1, P.value = !1, k.set(() => {
            c.value.pause(), S.value = !0, P.value = !0
          }, Qt)
        },
        w = () => {
          k.destroy(), S.value && (c.value.resume(), S.value = !1)
        },
        V = B => {
          if (S.value || P.value || !v.value) return;
          const {
            width: $,
            left: U
          } = v.value.getBoundingClientRect(), K = B.clientX - U, M = $ / 3;
          K < M ? i() : K > M * 2 && n()
        };
      return Ce(() => {
        k.destroy(), c.value.destroy()
      }), (B, $) => {
        const U = Ct,
          K = Xt,
          M = Fe;
        return l(), b(M, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: R(() => [m("div", {
            ref_key: "storiesRef",
            ref: v,
            class: "kit-stories-src-stories",
            onPointerdown: $[1] || ($[1] = se(x => F(), ["prevent"])),
            onPointerup: $[2] || ($[2] = x => w()),
            onPointercancel: $[3] || ($[3] = x => w()),
            onPointerleave: $[4] || ($[4] = x => w()),
            onClick: $[5] || ($[5] = x => V(x))
          }, [p(U, {
            current: o(t),
            "current-progress": o(c).progress.value,
            count: B.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (l(), b(K, {
            key: o(t),
            story: B.stories[o(t)],
            "is-last": o(t) === B.stories.length - 1,
            onNext: $[0] || ($[0] = x => n())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  tn = f(en, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  nn = g({
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
    setup(u) {
      const e = Ae(u, "modelValue");
      return (s, a) => {
        const t = tn;
        return l(), b(xe, {
          name: "opacity-transition"
        }, {
          default: R(() => [e.value ? (l(), b(t, {
            key: 0,
            stories: s.set.stories,
            class: "kit-stories",
            onClose: a[0] || (a[0] = n => e.value = !1)
          }, null, 8, ["stories"])) : C("", !0)]),
          _: 1
        })
      }
    }
  }),
  sn = f(nn, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  on = {
    class: "pages-index-new-season-banner"
  },
  an = {
    class: "progress"
  },
  ln = g({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(u) {
      const e = u,
        s = I(),
        a = j(),
        t = [{
          title: _("index.banners.trade_now.title"),
          buttonLabel: _("index.banners.trade_now.button_label"),
          onButtonClick: () => a.openTradingBot(),
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
            n.value = !0
          },
          lottie: "animations/Moon"
        }],
        n = A(e.value.showOnStart);
      Re(n, v => v && e.value.onShowed(), {
        immediate: !0
      });
      const i = A(0),
        r = A(null),
        c = v => {
          var k;
          (k = r.value) == null || k.scrollTo({
            left: v * window.innerWidth + (i.value > v ? -1 : 1),
            behavior: "smooth"
          })
        },
        y = Be(() => {
          if (!r.value) return;
          const v = r.value.children[0].offsetWidth + 10,
            k = r.value.scrollLeft,
            S = Math.round(k / v);
          i.value = S
        }, 50).debouncedFunction;
      return (v, k) => {
        const S = ht,
          P = je,
          F = sn;
        return l(), d("div", on, [m("div", {
          ref_key: "listEl",
          ref: r,
          class: "list",
          onScroll: k[0] || (k[0] = (...w) => o(y) && o(y)(...w)),
          onTouchmove: k[1] || (k[1] = (...w) => o(y) && o(y)(...w))
        }, [(l(), d(N, null, D(t, (w, V) => m("div", {
          key: w.title,
          class: "item"
        }, [p(S, {
          index: V,
          icon: w.icon,
          lottie: w.lottie,
          title: w.title,
          "button-label": w.buttonLabel,
          "on-button-click": w.onButtonClick
        }, null, 8, ["index", "icon", "lottie", "title", "button-label", "on-button-click"])])), 64))], 544), m("div", an, [t.length > 1 ? (l(), b(P, {
          key: 0,
          "model-value": o(i),
          count: t.length,
          timer: 15e3,
          "onUpdate:modelValue": c
        }, null, 8, ["model-value", "count"])) : C("", !0)]), p(F, {
          modelValue: o(n),
          "onUpdate:modelValue": k[2] || (k[2] = w => Pe(n) ? n.value = w : null),
          set: v.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  rn = f(ln, [
    ["__scopeId", "data-v-dfbab8a2"]
  ]),
  cn = {
    class: "pages-wallet-asset-skeleton"
  },
  un = {
    class: "content"
  },
  _n = g({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(u) {
      return (e, s) => {
        const a = E;
        return l(), d("div", cn, [(l(!0), d(N, null, D(e.count, t => (l(), d("div", {
          key: t,
          class: "skeleton"
        }, [p(a, {
          rounded: "",
          class: "logo"
        }), m("div", un, [p(a, {
          class: "title"
        }), p(a, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  dn = f(_n, [
    ["__scopeId", "data-v-26805825"]
  ]),
  pn = {
    class: "pages-index-points"
  },
  mn = g({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(u) {
      const e = h(() => I().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (s, a) => {
        const t = ae,
          n = dn,
          i = Me;
        return l(), d("div", pn, [p(t, {
          label: ("t" in s ? s.t : o(_))("wallet.points.title"),
          "full-path": o(e)
        }, null, 8, ["label", "full-path"]), s.points ? (l(), b(i, {
          key: 1,
          points: s.points
        }, null, 8, ["points"])) : (l(), b(n, {
          key: 0,
          count: 2
        }))])
      }
    }
  }),
  bn = f(mn, [
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
  wn = g({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(u) {
      const e = u,
        s = h(() => {
          const t = (() => {
            const n = j().internal;
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
        a = () => I().push({
          name: "game"
        });
      return (t, n) => {
        const i = ae,
          r = z,
          c = E,
          y = oe;
        return l(), d("div", {
          class: ne(["pages-index-game", `is-background-${o(s).background}`])
        }, [p(i, {
          label: ("t" in t ? t.t : o(_))("base.game")
        }, null, 8, ["label"]), o(s).type === "skeleton" ? (l(), d("div", yn, [p(r, {
          name: o(s).image,
          class: "icon"
        }, null, 8, ["name"]), p(c, {
          secondary: "",
          class: "skeleton-title"
        }), p(y, {
          label: ("t" in t ? t.t : o(_))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (l(), d("div", vn, [p(r, {
          name: o(s).image,
          class: "icon"
        }, null, 8, ["name"]), m("div", kn, [m("div", gn, T(("t" in t ? t.t : o(_))("game.card.title")), 1), m("div", fn, T(o(s).pp) + " Play passes", 1)]), p(y, {
          label: ("t" in t ? t.t : o(_))("base.play"),
          state: "default",
          type: "white",
          class: "pill",
          disabled: o(s).disabled,
          onClick: n[0] || (n[0] = v => a())
        }, null, 8, ["label", "disabled"])]))], 2)
      }
    }
  }),
  $n = f(wn, [
    ["__scopeId", "data-v-7c6add22"]
  ]),
  hn = () => {
    const u = Le(),
      e = Ee(),
      s = Ne(),
      a = h(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      n = {
        set: Sn(),
        showOnStart: !L().$webApp.storage.local.get(t),
        onShowed: () => {
          L().$webApp.storage.local.set(t, "true"), O().main.season2StoriesAppear()
        }
      },
      i = h(() => {
        const c = u.pointSymbols.value,
          y = u.dropSymbols.value;
        if (!(!c || !y) && !(!c.mp || !c.bp)) return [c.mp, c.bp, ...y]
      }),
      r = h(() => u.pointSymbols.value.pp);
    return {
      dailyReward: s,
      myTribe: a,
      season2Stories: n,
      wallet: h(() => u.wallet.value),
      pp: r,
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
  Cn = g({
    __name: "index",
    setup(u) {
      const e = hn();
      return (s, a) => {
        const t = it,
          n = mt,
          i = rn,
          r = bn,
          c = $n;
        return l(), d("div", Tn, [p(t, {
          "my-tribe": o(e).myTribe.value,
          wallet: o(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), p(n, {
          "daily-reward": o(e).dailyReward.reward.value,
          "daily-reward-claim": o(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), p(i, {
          value: o(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), p(r, {
          points: o(e).walletAssets.value
        }, null, 8, ["points"]), p(c, {
          pp: o(e).pp.value
        }, null, 8, ["pp"])])
      }
    }
  }),
  Wn = f(Cn, [
    ["__scopeId", "data-v-97e08456"]
  ]);
export {
  Wn as
  default
};