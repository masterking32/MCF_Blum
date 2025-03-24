import {
  _ as ie
} from "./CfBSAU31.js";
import {
  _ as z
} from "./DmsesXUt.js";
import {
  d as g,
  j as S,
  V as X,
  o as i,
  c as _,
  e as o,
  G as b,
  a as m,
  t as x,
  z as l,
  ah as le,
  U as Z,
  D as C,
  aq as re,
  ar as ce,
  x as Q,
  f as v,
  ac as I,
  F as M,
  H as P,
  b as p,
  $ as F,
  I as ue,
  _ as ee,
  as as de,
  l as _e,
  at as q,
  au as pe,
  Y as K,
  q as V,
  Z as me,
  av as W,
  X as G,
  J as be,
  aw as ye,
  L as ge,
  a1 as ve,
  ax as D,
  ay as ke,
  M as fe,
  ag as J,
  am as R,
  ad as te,
  az as we,
  n as ne,
  aA as se,
  h as E,
  K as A,
  aB as $e,
  aC as he,
  aD as Se,
  aE as Te,
  T as xe,
  an as Ce,
  ao as Ie,
  a9 as Ae,
  aF as Le,
  a8 as Re,
  p as Be,
  a5 as Pe,
  ab as Ee,
  P as Ne,
  aG as Ke,
  aH as ze
} from "./DSiomQd1.js";
import {
  _ as Me
} from "./Baq_Rlq4.js";
import {
  _ as Y,
  a as oe,
  b as je
} from "./0nloGMsv.js";
import {
  _ as Oe
} from "./ANJp5niy.js";
import {
  _ as De
} from "./CH4tTYjB.js";
import {
  _ as Fe
} from "./BK4G9Ytk.js";
import {
  _ as Ve
} from "./BU3uNLr2.js";
import {
  _ as ae
} from "./Du61VB1N.js";
import "./BPsCXSP-.js";
import "./3tTruLS8.js";
import "./C8488ddo.js";
import "./CUxqzio7.js";
import "./DPpgwoC3.js";
import "./b7ABRMmP.js";
import "./CCUSPp2E.js";
const Ue = {
    class: "pages-index-banner-wallet"
  },
  He = {
    key: 1,
    class: "connected"
  },
  We = {
    class: "label"
  },
  Ye = g({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(d) {
      const e = d,
        s = () => re(ce.MAIN).runConnectionFlow(),
        a = S(() => {
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
          throw e.wallet, X("Invalid wallet status")
        });
      return (t, n) => {
        const r = z,
          u = Q;
        return i(), _("div", Ue, [o(a).type === "skeleton" ? (i(), b(r, {
          key: 0,
          class: "skeleton"
        })) : o(a).type === "connected" ? (i(), _("div", He, [m("div", We, x(("t" in t ? t.t : o(l))("wallet.total_balance")), 1), (i(), b(le(o(a).balance), {
          class: "balance"
        }))])) : o(a).type === "connect" ? (i(), b(u, {
          key: 2,
          label: ("t" in t ? t.t : o(l))("wallet.connect.btn"),
          size: o(Z).SMALL,
          onClick: n[0] || (n[0] = c => s())
        }, null, 8, ["label", "size"])) : C("", !0)])
      }
    }
  }),
  qe = v(Ye, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  Ge = {
    class: "pages-tribe-external-index-page"
  },
  Je = g({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(d) {
      const e = I().resolve({
          name: "tribe-join"
        }).fullPath,
        s = I().resolve({
          name: "tribe-slug"
        }).fullPath,
        a = t => F().main.tribeLogoClick(t);
      return (t, n) => {
        const r = z,
          u = ue,
          c = ee,
          y = Me;
        return i(), _("div", Ge, [t.myTribe ? (i(), _(M, {
          key: 1
        }, [t.myTribe.type === "validating" ? (i(), b(u, {
          key: 0,
          to: o(e),
          class: "validating hex-center",
          onClick: n[0] || (n[0] = f => a(t.myTribe.type))
        }, {
          default: P(() => n[4] || (n[4] = [m("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (i(), b(u, {
          key: 1,
          to: o(e),
          class: "join hex-center",
          onClick: n[1] || (n[1] = f => a(t.myTribe.type))
        }, {
          default: P(() => [p(c, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_created" ? (i(), b(u, {
          key: 2,
          to: o(e),
          class: "error hex-center",
          onClick: n[2] || (n[2] = f => a(t.myTribe.type))
        }, {
          default: P(() => [p(c, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "ok" ? (i(), b(u, {
          key: 3,
          to: o(s),
          class: "ok",
          onClick: n[3] || (n[3] = f => a(t.myTribe.type))
        }, {
          default: P(() => [p(y, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : C("", !0)], 64)) : (i(), b(r, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  Xe = v(Je, [
    ["__scopeId", "data-v-ef3e1f1f"]
  ]),
  Ze = {
    class: "pages-index-banner-profile-tribe"
  },
  Qe = g({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(d) {
      const e = de(() => {
        _e().public.ENVIRONMENT !== "prod" && I().push({
          name: "debug"
        })
      }, 5);
      return (s, a) => {
        const t = ie,
          n = qe,
          r = Xe;
        return i(), _("div", Ze, [p(t, {
          small: "",
          onClick: a[0] || (a[0] = u => o(e)())
        }), p(n, {
          wallet: s.wallet
        }, null, 8, ["wallet"]), p(r, {
          "my-tribe": s.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"])])
      }
    }
  }),
  et = v(Qe, [
    ["__scopeId", "data-v-779ec8f9"]
  ]),
  tt = {
    class: "pages-index-banner-controls"
  },
  nt = ["onClick"],
  st = {
    class: "image-container"
  },
  ot = {
    class: "title"
  },
  at = g({
    __name: "BannerControls",
    setup(d) {
      const e = S(() => [{
        title: l("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => I().push({
          name: "memepad-new",
          query: {
            memepadFrom: q.MAIN,
            memepadNewFrom: pe.MAIN
          }
        })
      }, {
        title: l("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => I().push({
          name: "memepad",
          query: {
            memepadFrom: q.MAIN
          }
        })
      }, {
        title: l("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          F().main.controlsTradingBotClick(), K().openTradingBot()
        }
      }]);
      return (s, a) => {
        const t = Y;
        return i(), _("div", tt, [(i(!0), _(M, null, V(o(e), (n, r) => (i(), _("button", {
          key: r,
          class: "control reset",
          onClick: u => n.onClick()
        }, [m("div", st, [p(t, {
          name: n.image,
          class: "image"
        }, null, 8, ["name"])]), m("div", ot, x(n.title), 1)], 8, nt))), 128))])
      }
    }
  }),
  it = v(at, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  lt = {
    class: "pages-index-banner"
  },
  rt = g({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(d) {
      return (e, s) => {
        const a = et,
          t = it;
        return i(), _("div", lt, [p(a, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), p(t, {
          class: "controls"
        })])
      }
    }
  }),
  ct = v(rt, [
    ["__scopeId", "data-v-8f4c28ad"]
  ]),
  ut = {
    class: "pages-index-daily-reward"
  },
  dt = {
    key: 1,
    class: "widget has-radius"
  },
  _t = {
    class: "compose"
  },
  pt = {
    class: "title"
  },
  mt = {
    key: 0,
    class: "subtitle"
  },
  bt = g({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(d) {
      const e = d,
        s = me(),
        a = (n, r) => async () => {
          const u = await e.dailyRewardClaim();
          ke(u, {
            Err: () => s.error(l("base.claim_error")),
            Ok: c => {
              n === W.RESTORE && s.success(l("daily_reward.streak_restored", {
                days: r
              })), s.success(`You’ve got ${fe(c.claimedReward.points)} BP`), s.success(J("span", ["You’ve got ", J("i", {
                class: "ticket"
              }), ` ${c.claimedReward.passes}`])), K().makeConfetti(), F().main.dailyRewardClick({
                points: c.claimedReward.points.toNumber(),
                passes: c.claimedReward.passes
              })
            }
          })
        }, t = S(() => {
          if (e.dailyReward === void 0) return;
          const n = e.dailyReward.currentStreakDays,
            r = `${n}-${l("base.n.days",n)}`;
          if (e.dailyReward.claim === W.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: l("daily_reward.missed"),
            subtitle: G(l("daily_reward.restore_current_streak", {
              days: r
            })),
            claim: {
              label: l("base.restore"),
              white: !0,
              can: !0,
              fn: a(e.dailyReward.claim, r)
            }
          };
          const u = (() => {
            const y = be().ms100ticker.value;
            if (!y) return ye();
            const f = ge(e.dailyReward.canClaimAt - y, "letters");
            return G(l("base.claim_next_in", {
              time: f
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: l("daily_reward.current_streak", {
              days: r
            }),
            subtitle: u,
            claim: {
              can: e.dailyReward.claim !== W.UNAVAILABLE,
              fn: a(e.dailyReward.claim, r)
            }
          }
        });
      return (n, r) => {
        const u = z,
          c = Y,
          y = Oe;
        return i(), _("div", ut, [o(t) ? (i(), _("div", dt, [p(c, {
          name: o(t).icon,
          class: "icon"
        }, null, 8, ["name"]), m("div", _t, [m("div", pt, x(o(t).title), 1), ("isOk" in n ? n.isOk : o(ve))(o(t).subtitle) ? (i(), _("div", mt, x(o(t).subtitle.data), 1)) : (i(), b(u, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), o(t).claim ? (i(), b(y, {
          key: 0,
          label: o(t).claim.label,
          "can-claim": o(t).claim.can,
          "claim-fn": o(t).claim.fn,
          style: D(o(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : C("", !0)])) : (i(), b(u, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  yt = v(bt, [
    ["__scopeId", "data-v-181516c9"]
  ]),
  gt = {
    class: "pages-index-new-season-banner-card"
  },
  vt = ["src"],
  kt = ["src"],
  ft = {
    class: "content"
  },
  wt = {
    class: "inner"
  },
  $t = ["innerHTML"],
  ht = {
    class: "icon-wrapper"
  },
  St = ["src"],
  Tt = g({
    __name: "IndexNewSeasonBannerCard",
    props: {
      title: {},
      buttonLabel: {},
      onButtonClick: {
        type: Function
      },
      icon: {},
      lottie: {},
      gif: {},
      imageSize: {}
    },
    setup(d) {
      return (e, s) => {
        const a = oe,
          t = ee,
          n = te;
        return i(), _("div", gt, [m("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(R))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, vt), s[0] || (s[0] = m("div", {
          class: "bg"
        }, null, -1)), m("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(R))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, kt), m("div", ft, [m("div", wt, [m("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, $t), p(a, {
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"])]), m("div", ht, [e.icon ? (i(), b(t, {
          key: 0,
          name: e.icon,
          style: D({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 8, ["name", "style"])) : e.lottie ? (i(), b(n, {
          key: 1,
          name: e.lottie,
          loop: "",
          size: e.imageSize
        }, null, 8, ["name", "size"])) : e.gif ? (i(), _("img", {
          key: 2,
          src: e.gif,
          style: D({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 12, St)) : C("", !0)])])])
      }
    }
  }),
  xt = v(Tt, [
    ["__scopeId", "data-v-3b6f23f8"]
  ]),
  Ct = {
    class: "kit-stories-src-counter"
  },
  It = g({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(d) {
      we(a => ({
        "9db269f8": a.count
      }));
      const e = d,
        s = S(() => [...new Array(e.count)].map((a, t) => t < e.current ? {
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
      return (a, t) => (i(), _("div", Ct, [(i(!0), _(M, null, V(o(s), n => (i(), _("div", {
        key: n.key,
        class: ne(["progress", [`is-state-${n.state}`]]),
        style: D(n.state === "current" ? {
          "background-position-x": `-${n.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  At = v(It, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  Lt = {
    class: "kit-stories-shared-background"
  },
  Rt = ["poster", "src"],
  Bt = ["src"],
  Pt = g({
    __name: "Background",
    props: {
      background: {}
    },
    setup(d) {
      return (e, s) => {
        const a = Fe;
        return i(), _("div", Lt, [e.background.type === "video" ? (i(), _("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, Rt)) : e.background.type === "image" ? (i(), _("img", {
          key: 1,
          src: e.background.src
        }, null, 8, Bt)) : e.background.type === "stars" ? (i(), b(a, {
          key: 2,
          class: "stars"
        })) : C("", !0)])
      }
    }
  }),
  Et = v(Pt, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  Nt = {
    class: "kit-stories-layouts-title-subtitle"
  },
  Kt = {
    class: "title"
  },
  zt = {
    class: "subtitle"
  },
  Mt = g({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(d) {
      return (e, s) => (i(), _("div", Nt, [m("div", Kt, x(e.layout.title), 1), m("div", zt, x(e.layout.subtitle), 1)]))
    }
  }),
  jt = v(Mt, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  Ot = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  Dt = {
    class: "animoji-container"
  },
  Ft = {
    class: "content-container"
  },
  Vt = {
    class: "title"
  },
  Ut = {
    class: "subtitle"
  },
  Ht = g({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(d) {
      return (e, s) => {
        const a = te;
        return i(), _("div", Ot, [m("div", Dt, [p(a, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), m("div", Ft, [m("div", Vt, x(e.layout.title), 1), m("div", Ut, x(e.layout.subtitle), 1)])])
      }
    }
  }),
  Wt = v(Ht, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  Yt = g({
    __name: "Button",
    props: {
      button: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(d, {
      emit: e
    }) {
      const s = d,
        a = e,
        t = S(() => s.button.type === "next" ? s.isLast ? l("base.close") : l("base.next") : s.button.label),
        n = () => {
          if (s.button.type === "next") E().$webApp.HapticFeedback.impactOccurred("light"), a("next");
          else if (s.button.type === "local") I().push(s.button.link);
          else if (s.button.type === "external") E().$webApp.openLink(s.button.link);
          else if (s.button.type === "telegram") E().$webApp.openTelegramLink(s.button.link);
          else throw s.button, X("Unknown button type")
        };
      return (r, u) => {
        const c = Q;
        return i(), b(c, {
          label: o(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: o(Z).LARGE,
          onClick: u[0] || (u[0] = se(y => n(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  qt = v(Yt, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  Gt = {
    class: "kit-stories-src-story"
  },
  Jt = {
    class: "content"
  },
  Xt = {
    class: "layout"
  },
  Zt = {
    class: "button"
  },
  Qt = g({
    __name: "Story",
    props: {
      story: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(d) {
      return (e, s) => {
        const a = Et,
          t = jt,
          n = Wt,
          r = qt;
        return i(), _("div", Gt, [p(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), m("div", Jt, [m("div", Xt, [e.story.layout.type === "TitleSubtitle" ? (i(), b(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), b(n, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : C("", !0)]), m("div", Zt, [e.story.button ? (i(), b(r, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: s[0] || (s[0] = u => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : C("", !0)])])])
      }
    }
  }),
  en = v(Qt, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  tn = (d, e) => {
    const s = d,
      a = A(d),
      t = S(() => 1 - a.value / s);
    let n = 0,
      r;
    const u = () => {
        n = Date.now(), r = he(() => {
          const w = Date.now(),
            k = w - n;
          n = w, a.value = Math.max(a.value - k, 0), a.value <= 0 && (c(), e())
        }, 100)
      },
      c = () => {
        r && (clearInterval(r), r = void 0)
      },
      y = () => {
        if (r) {
          c();
          const w = Date.now() - n;
          a.value = Math.max(a.value - w, 0)
        }
      },
      f = () => u();
    return u(), {
      timeToExpire: $e(a),
      progress: t,
      destroy: c,
      pause: y,
      resume: f
    }
  },
  nn = 150,
  sn = g({
    __name: "Stories",
    props: {
      stories: {}
    },
    emits: ["close"],
    setup(d, {
      emit: e
    }) {
      const s = d,
        a = e,
        t = A(0),
        n = () => {
          t.value < s.stories.length - 1 ? (t.value += 1, y()) : a("close")
        },
        r = () => {
          t.value > 0 ? (t.value -= 1, y()) : a("close")
        },
        u = () => tn(5e3, n),
        c = Se(u()),
        y = () => {
          c.value.destroy(), c.value = u()
        },
        f = A(),
        w = Te(),
        k = A(!1),
        T = A(!1),
        U = () => {
          k.value = !1, T.value = !1, w.set(() => {
            c.value.pause(), k.value = !0, T.value = !0
          }, nn)
        },
        N = () => {
          w.destroy(), k.value && (c.value.resume(), k.value = !1)
        },
        $ = L => {
          if (k.value || T.value || !f.value) return;
          const {
            width: h,
            left: H
          } = f.value.getBoundingClientRect(), j = L.clientX - H, O = h / 3;
          j < O ? r() : j > O * 2 && n()
        };
      return xe(() => {
        w.destroy(), c.value.destroy()
      }), (L, h) => {
        const H = At,
          j = en,
          O = Ve;
        return i(), b(O, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: P(() => [m("div", {
            ref_key: "storiesRef",
            ref: f,
            class: "kit-stories-src-stories",
            onPointerdown: h[1] || (h[1] = se(B => U(), ["prevent"])),
            onPointerup: h[2] || (h[2] = B => N()),
            onPointercancel: h[3] || (h[3] = B => N()),
            onPointerleave: h[4] || (h[4] = B => N()),
            onClick: h[5] || (h[5] = B => $(B))
          }, [p(H, {
            current: o(t),
            "current-progress": o(c).progress.value,
            count: L.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (i(), b(j, {
            key: o(t),
            story: L.stories[o(t)],
            "is-last": o(t) === L.stories.length - 1,
            onNext: h[0] || (h[0] = B => n())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  on = v(sn, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  an = g({
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
    setup(d) {
      const e = Ie(d, "modelValue");
      return (s, a) => {
        const t = on;
        return i(), b(Ae, {
          name: "opacity-transition"
        }, {
          default: P(() => [e.value ? (i(), b(t, {
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
  ln = v(an, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  rn = {
    class: "pages-index-new-season-banner"
  },
  cn = {
    class: "progress"
  },
  un = g({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(d) {
      const e = d,
        s = I(),
        a = K(),
        t = E().$webApp,
        n = [{
          title: l("index.banners.trade_now.title"),
          buttonLabel: l("index.banners.trade_now.button_label"),
          onButtonClick: () => a.openTradingBot(),
          icon: "ton-logo",
          imageSize: 64
        }, {
          title: l("index.banners.earn_now.title"),
          buttonLabel: l("index.banners.earn_now.button_label"),
          onButtonClick: () => {
            s.push({
              name: "tasks"
            })
          },
          icon: "bp-logo",
          imageSize: 64
        }, {
          title: l("index.banners.season_2.title"),
          buttonLabel: l("index.banners.season_2.button_label"),
          onButtonClick: () => {
            r.value = !0
          },
          lottie: "animations/Moon",
          imageSize: 96
        }, {
          title: l("index.banners.blum_x.title"),
          buttonLabel: l("index.banners.blum_x.button_label"),
          onButtonClick: () => {
            K().openBlumTwitter()
          },
          gif: R("index/banner/x", "gif"),
          imageSize: 104
        }, {
          title: l("index.banners.blum_academy.title"),
          buttonLabel: l("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            t.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: R("index/banner/edu", "gif"),
          imageSize: 102
        }, {
          title: l("index.banners.create_memecoin.title"),
          buttonLabel: l("index.banners.create_memecoin.button_label"),
          onButtonClick: () => {
            s.push({
              name: "memepad-new"
            })
          },
          gif: R("index/banner/memecoin", "gif"),
          imageSize: 118
        }, {
          title: l("index.banners.friends.title"),
          buttonLabel: l("index.banners.friends.button_label"),
          onButtonClick: () => {
            s.push({
              name: "frens"
            })
          },
          gif: R("index/banner/comission", "gif"),
          imageSize: 100
        }, {
          title: l("index.banners.trade_memecoins.title"),
          buttonLabel: l("index.banners.trade_memecoins.button_label"),
          onButtonClick: () => {
            s.push({
              name: "memepad"
            })
          },
          gif: R("index/banner/riskreward", "gif"),
          imageSize: 102
        }],
        r = A(e.value.showOnStart);
      Le(r, w => w && e.value.onShowed(), {
        immediate: !0
      });
      const u = A(Pe(0, n.length - 1)),
        c = A(null),
        y = (w, k = "smooth") => {
          var T;
          (T = c.value) == null || T.scrollTo({
            left: w * window.innerWidth + (u.value > w ? -1 : 1),
            behavior: k
          })
        },
        f = Ee(() => {
          if (!c.value) return;
          const w = c.value.children[0].offsetWidth + 10,
            k = c.value.scrollLeft,
            T = Math.round(k / w);
          u.value = T
        }, 50).debouncedFunction;
      return Re(() => {
        y(u.value, "instant")
      }), (w, k) => {
        const T = xt,
          U = De,
          N = ln;
        return i(), _("div", rn, [m("div", {
          ref_key: "listEl",
          ref: c,
          class: "list",
          onScroll: k[0] || (k[0] = (...$) => o(f) && o(f)(...$)),
          onTouchmove: k[1] || (k[1] = (...$) => o(f) && o(f)(...$))
        }, [(i(), _(M, null, V(n, ($, L) => m("div", {
          key: $.title,
          class: "item"
        }, [p(T, {
          index: L,
          icon: $.icon,
          lottie: $.lottie,
          gif: $.gif,
          title: $.title,
          "button-label": $.buttonLabel,
          "on-button-click": $.onButtonClick,
          "image-size": $.imageSize
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size"])])), 64))], 544), m("div", cn, [n.length > 1 ? (i(), b(U, {
          key: 0,
          "model-value": o(u),
          count: n.length,
          timer: 15e3,
          "onUpdate:modelValue": y
        }, null, 8, ["model-value", "count"])) : C("", !0)]), p(N, {
          modelValue: o(r),
          "onUpdate:modelValue": k[2] || (k[2] = $ => Be(r) ? r.value = $ : null),
          set: w.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  dn = v(un, [
    ["__scopeId", "data-v-5d5bc981"]
  ]),
  _n = {
    class: "pages-wallet-asset-skeleton"
  },
  pn = {
    class: "content"
  },
  mn = g({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(d) {
      return (e, s) => {
        const a = z;
        return i(), _("div", _n, [(i(!0), _(M, null, V(e.count, t => (i(), _("div", {
          key: t,
          class: "skeleton"
        }, [p(a, {
          rounded: "",
          class: "logo"
        }), m("div", pn, [p(a, {
          class: "title"
        }), p(a, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  bn = v(mn, [
    ["__scopeId", "data-v-26805825"]
  ]),
  yn = {
    class: "pages-index-points"
  },
  gn = g({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(d) {
      const e = S(() => I().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (s, a) => {
        const t = ae,
          n = bn,
          r = je;
        return i(), _("div", yn, [p(t, {
          label: ("t" in s ? s.t : o(l))("wallet.points.title"),
          "full-path": o(e)
        }, null, 8, ["label", "full-path"]), s.points ? (i(), b(r, {
          key: 1,
          points: s.points
        }, null, 8, ["points"])) : (i(), b(n, {
          key: 0,
          count: 2
        }))])
      }
    }
  }),
  vn = v(gn, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  kn = {
    key: 0,
    class: "skeleton"
  },
  fn = {
    key: 1,
    class: "default"
  },
  wn = {
    class: "content"
  },
  $n = {
    class: "title"
  },
  hn = {
    class: "balance"
  },
  Sn = g({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(d) {
      const e = d,
        s = S(() => {
          const t = (() => {
            const n = K().internal;
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
        const r = ae,
          u = Y,
          c = z,
          y = oe;
        return i(), _("div", {
          class: ne(["pages-index-game", `is-background-${o(s).background}`])
        }, [p(r, {
          label: ("t" in t ? t.t : o(l))("base.game")
        }, null, 8, ["label"]), o(s).type === "skeleton" ? (i(), _("div", kn, [p(u, {
          name: o(s).image,
          class: "icon"
        }, null, 8, ["name"]), p(c, {
          secondary: "",
          class: "skeleton-title"
        }), p(y, {
          label: ("t" in t ? t.t : o(l))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (i(), _("div", fn, [p(u, {
          name: o(s).image,
          class: "icon"
        }, null, 8, ["name"]), m("div", wn, [m("div", $n, x(("t" in t ? t.t : o(l))("game.card.title")), 1), m("div", hn, x(o(s).pp) + " Play passes", 1)]), p(y, {
          label: ("t" in t ? t.t : o(l))("base.play"),
          state: "default",
          type: "white",
          class: "pill",
          disabled: o(s).disabled,
          onClick: n[0] || (n[0] = f => a())
        }, null, 8, ["label", "disabled"])]))], 2)
      }
    }
  }),
  Tn = v(Sn, [
    ["__scopeId", "data-v-7c6add22"]
  ]),
  xn = () => {
    const d = Ne(),
      e = Ke(),
      s = ze(),
      a = S(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      n = {
        set: Cn(),
        showOnStart: !E().$webApp.storage.local.get(t),
        onShowed: () => {
          E().$webApp.storage.local.set(t, "true"), F().main.season2StoriesAppear()
        }
      },
      r = S(() => {
        const c = d.pointSymbols.value,
          y = d.dropSymbols.value;
        if (!(!c || !y) && !(!c.mp || !c.bp)) return [c.mp, c.bp, ...y]
      }),
      u = S(() => d.pointSymbols.value.pp);
    return {
      dailyReward: s,
      myTribe: a,
      season2Stories: n,
      wallet: S(() => d.wallet.value),
      pp: u,
      walletAssets: r
    }
  },
  Cn = () => ({
    stories: [{
      background: {
        type: "stars"
      },
      layout: {
        type: "AnimojiTitleSubtitle",
        animoji: "Fire",
        title: l("stories.season_2.slide_2.title"),
        subtitle: l("stories.season_2.slide_2.subtitle")
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
        title: l("stories.season_2.slide_3.title"),
        subtitle: l("stories.season_2.slide_3.subtitle")
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
        title: l("stories.season_2.slide_4.title"),
        subtitle: l("stories.season_2.slide_4.subtitle")
      },
      button: {
        type: "next"
      }
    }]
  }),
  In = {
    class: "index-page page"
  },
  An = g({
    __name: "index",
    setup(d) {
      const e = xn();
      return (s, a) => {
        const t = ct,
          n = yt,
          r = dn,
          u = vn,
          c = Tn;
        return i(), _("div", In, [p(t, {
          "my-tribe": o(e).myTribe.value,
          wallet: o(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), p(n, {
          "daily-reward": o(e).dailyReward.reward.value,
          "daily-reward-claim": o(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), p(r, {
          value: o(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), p(u, {
          points: o(e).walletAssets.value
        }, null, 8, ["points"]), p(c, {
          pp: o(e).pp.value
        }, null, 8, ["pp"])])
      }
    }
  }),
  Yn = v(An, [
    ["__scopeId", "data-v-97e08456"]
  ]);
export {
  Yn as
  default
};