import {
  _ as re
} from "./B_iu9Ii8.js";
import {
  _ as B
} from "./BiY0FrNC.js";
import {
  d as v,
  ae as x,
  o as l,
  c as d,
  G as y,
  F as j,
  I as R,
  a as m,
  e as a,
  b as u,
  C as I,
  J as ce,
  _ as G,
  f as g,
  as as ue,
  l as _e,
  at as de,
  j as $,
  a3 as Y,
  t as w,
  aj as pe,
  z as p,
  Y as M,
  q as U,
  Z as me,
  au as E,
  av as F,
  K as q,
  aw as O,
  M as ye,
  ax as X,
  ay as Z,
  az as be,
  N as ve,
  ai as H,
  aA as ge,
  n as J,
  af as Q,
  W as ke,
  aB as ee,
  h as P,
  x as fe,
  L as S,
  aC as we,
  aD as $e,
  aE as he,
  V as te,
  ap as Se,
  aq as xe,
  aa as Te,
  Q as Ie,
  p as Ce,
  T as Re,
  X as W,
  P as se,
  a0 as Ae,
  aF as Pe,
  ao as Be,
  aG as Ke
} from "./BrLCGJDp.js";
import {
  _ as Le
} from "./BLM1vbSc.js";
import {
  _ as z,
  u as ne,
  a as oe,
  b as Ee
} from "./CFUTEvyn.js";
import {
  _ as je
} from "./4F4rNaz-.js";
import {
  _ as De
} from "./oPaS2f8W.js";
import {
  _ as Ne
} from "./BHeUfwcc.js";
import {
  _ as ae
} from "./SKyOI5tS.js";
import "./D4UgHPqA.js";
import "./BIjeZW-I.js";
import "./DaCHxoB5.js";
import "./CBgmpIod.js";
import "./B3q5VDfN.js";
import "./LPIV59H5.js";
import "./DHJe7qkH.js";
import "./BMDMyBOJ.js";
const Ve = {
    class: "pages-tribe-external-index-page"
  },
  Fe = v({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(i) {
      const e = x().resolve({
          name: "tribe-join"
        }).fullPath,
        n = x().resolve({
          name: "tribe-slug"
        }).fullPath;
      return (s, t) => {
        const o = B,
          c = ce,
          _ = G,
          r = Le;
        return l(), d("div", Ve, [s.myTribe ? (l(), d(j, {
          key: 1
        }, [s.myTribe.type === "validating" ? (l(), y(c, {
          key: 0,
          to: a(e),
          class: "validating hex-center"
        }, {
          default: R(() => t[0] || (t[0] = [m("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : s.myTribe.type === "not_found" ? (l(), y(c, {
          key: 1,
          to: a(e),
          class: "join hex-center"
        }, {
          default: R(() => [u(_, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : s.myTribe.type === "not_created" ? (l(), y(c, {
          key: 2,
          to: a(e),
          class: "error hex-center"
        }, {
          default: R(() => [u(_, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : s.myTribe.type === "ok" ? (l(), y(c, {
          key: 3,
          to: a(n),
          class: "ok"
        }, {
          default: R(() => [u(r, {
            "avatar-url": s.myTribe.tribe.getAvatarUrl(),
            "default-avatar": s.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : I("", !0)], 64)) : (l(), y(o, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  Oe = g(Fe, [
    ["__scopeId", "data-v-2d5bc45c"]
  ]),
  Me = {
    class: "pages-index-banner-profile-tribe"
  },
  Ue = v({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {}
    },
    setup(i) {
      const e = ue(() => {
        _e().public.ENVIRONMENT !== "prod" && x().push({
          name: "debug"
        })
      }, 5);
      return (n, s) => {
        const t = re,
          o = Oe;
        return l(), d("div", Me, [u(t, {
          small: "",
          onClick: s[0] || (s[0] = c => a(e)())
        }), u(o, {
          "my-tribe": n.myTribe
        }, null, 8, ["my-tribe"])])
      }
    }
  }),
  ze = g(Ue, [
    ["__scopeId", "data-v-e7e86efc"]
  ]),
  He = {
    class: "pages-index-banner-wallet"
  },
  We = {
    key: 1,
    class: "connected"
  },
  Ge = {
    class: "ton-label"
  },
  Ye = {
    class: "label"
  },
  qe = v({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(i) {
      const e = i,
        n = de(),
        s = $(() => {
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
          throw e.wallet, Y("Invalid wallet status")
        });
      return (t, o) => {
        const c = B,
          _ = G;
        return l(), d("div", He, [a(s).type === "skeleton" ? (l(), y(c, {
          key: 0,
          class: "skeleton"
        })) : a(s).type === "connected" ? (l(), d("div", We, [m("div", Ge, [u(_, {
          name: "ton-logo",
          class: "logo"
        }), m("div", Ye, w(a(s).shortAddress), 1)]), (l(), y(pe(a(s).balance), {
          class: "balance"
        }))])) : a(s).type === "connect" ? (l(), d("div", {
          key: 2,
          class: "connect-label",
          onClick: o[0] || (o[0] = r => a(n).runConnectionFlow())
        }, [u(_, {
          name: "wallet",
          class: "icon"
        }), m("div", null, w(("t" in t ? t.t : a(p))("wallet.connect.btn")), 1)])) : I("", !0)])
      }
    }
  }),
  Xe = g(qe, [
    ["__scopeId", "data-v-47dcd04a"]
  ]),
  Ze = {
    class: "pages-index-banner-controls"
  },
  Je = ["onClick"],
  Qe = {
    class: "image-container"
  },
  et = {
    class: "title"
  },
  tt = v({
    __name: "BannerControls",
    setup(i) {
      const e = $(() => [{
        title: p("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => x().push({
          name: "memepad-new"
        })
      }, {
        title: p("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => x().push({
          name: "memepad"
        })
      }, {
        title: p("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => M().openTradingBot()
      }]);
      return (n, s) => {
        const t = z;
        return l(), d("div", Ze, [(l(!0), d(j, null, U(a(e), (o, c) => (l(), d("button", {
          key: c,
          class: "control reset",
          onClick: _ => o.onClick()
        }, [m("div", Qe, [u(t, {
          name: o.image,
          class: "image"
        }, null, 8, ["name"])]), m("div", et, w(o.title), 1)], 8, Je))), 128))])
      }
    }
  }),
  st = g(tt, [
    ["__scopeId", "data-v-6a5c43f5"]
  ]),
  nt = {
    class: "pages-index-banner"
  },
  ot = v({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(i) {
      return (e, n) => {
        const s = ze,
          t = Xe,
          o = st;
        return l(), d("div", nt, [u(s, {
          "my-tribe": e.myTribe,
          class: "profile"
        }, null, 8, ["my-tribe"]), u(t, {
          wallet: e.wallet
        }, null, 8, ["wallet"]), u(o, {
          class: "controls"
        })])
      }
    }
  }),
  at = g(ot, [
    ["__scopeId", "data-v-d4d6ef53"]
  ]),
  lt = {
    class: "pages-index-daily-reward"
  },
  it = {
    key: 1,
    class: "widget has-radius"
  },
  rt = {
    class: "compose"
  },
  ct = {
    class: "title"
  },
  ut = {
    key: 0,
    class: "subtitle"
  },
  _t = v({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(i) {
      const e = i,
        n = me(),
        s = (o, c) => async () => {
          const _ = await e.dailyRewardClaim();
          be(_, {
            Err: () => n.error(p("base.claim_error")),
            Ok: r => {
              o === E.RESTORE && n.success(p("daily_reward.streak_restored", {
                days: c
              })), n.success(`You’ve got ${ve(r.claimedReward.points)} BP`), n.success(H("span", ["You’ve got ", H("i", {
                class: "ticket"
              }), ` ${r.claimedReward.passes}`])), M().makeConfetti()
            }
          })
        }, t = $(() => {
          if (e.dailyReward === void 0) return;
          const o = e.dailyReward.currentStreakDays,
            c = `${o}-${p("base.n.days",o)}`;
          if (e.dailyReward.claim === E.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: p("daily_reward.missed"),
            subtitle: F(p("daily_reward.restore_current_streak", {
              days: c
            })),
            claim: {
              label: p("base.restore"),
              white: !0,
              can: !0,
              fn: s(e.dailyReward.claim, c)
            }
          };
          const _ = (() => {
            const b = q().ms100ticker.value;
            if (!b) return O();
            const f = ye(e.dailyReward.canClaimAt - b, "letters");
            return F(p("base.claim_next_in", {
              time: f
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: p("daily_reward.current_streak", {
              days: c
            }),
            subtitle: _,
            claim: {
              can: e.dailyReward.claim !== E.UNAVAILABLE,
              fn: s(e.dailyReward.claim, c)
            }
          }
        });
      return (o, c) => {
        const _ = B,
          r = z,
          b = je;
        return l(), d("div", lt, [a(t) ? (l(), d("div", it, [u(r, {
          name: a(t).icon,
          class: "icon"
        }, null, 8, ["name"]), m("div", rt, [m("div", ct, w(a(t).title), 1), ("isOk" in o ? o.isOk : a(X))(a(t).subtitle) ? (l(), d("div", ut, w(a(t).subtitle.data), 1)) : (l(), y(_, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), a(t).claim ? (l(), y(b, {
          key: 0,
          label: a(t).claim.label,
          "can-claim": a(t).claim.can,
          "claim-fn": a(t).claim.fn,
          style: Z(a(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : I("", !0)])) : (l(), y(_, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  dt = g(_t, [
    ["__scopeId", "data-v-8b85c7ba"]
  ]),
  pt = {
    class: "kit-stories-src-counter"
  },
  mt = v({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(i) {
      ge(s => ({
        "9db269f8": s.count
      }));
      const e = i,
        n = $(() => [...new Array(e.count)].map((s, t) => t < e.current ? {
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
      return (s, t) => (l(), d("div", pt, [(l(!0), d(j, null, U(a(n), o => (l(), d("div", {
        key: o.key,
        class: J(["progress", [`is-state-${o.state}`]]),
        style: Z(o.state === "current" ? {
          "background-position-x": `-${o.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  yt = g(mt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  bt = {
    class: "kit-stories-shared-background"
  },
  vt = ["poster", "src"],
  gt = ["src"],
  kt = v({
    __name: "Background",
    props: {
      background: {}
    },
    setup(i) {
      return (e, n) => {
        const s = De;
        return l(), d("div", bt, [e.background.type === "video" ? (l(), d("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, vt)) : e.background.type === "image" ? (l(), d("img", {
          key: 1,
          src: e.background.src
        }, null, 8, gt)) : e.background.type === "stars" ? (l(), y(s, {
          key: 2,
          class: "stars"
        })) : I("", !0)])
      }
    }
  }),
  ft = g(kt, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  wt = {
    class: "kit-stories-layouts-title-subtitle"
  },
  $t = {
    class: "title"
  },
  ht = {
    class: "subtitle"
  },
  St = v({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(i) {
      return (e, n) => (l(), d("div", wt, [m("div", $t, w(e.layout.title), 1), m("div", ht, w(e.layout.subtitle), 1)]))
    }
  }),
  xt = g(St, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  Tt = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  It = {
    class: "animoji-container"
  },
  Ct = {
    class: "content-container"
  },
  Rt = {
    class: "title"
  },
  At = {
    class: "subtitle"
  },
  Pt = v({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(i) {
      return (e, n) => {
        const s = Q;
        return l(), d("div", Tt, [m("div", It, [u(s, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), m("div", Ct, [m("div", Rt, w(e.layout.title), 1), m("div", At, w(e.layout.subtitle), 1)])])
      }
    }
  }),
  Bt = g(Pt, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  Kt = v({
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
      const n = i,
        s = e,
        t = $(() => n.button.type === "next" ? n.isLast ? p("base.close") : p("base.next") : n.button.label),
        o = () => {
          if (n.button.type === "next") P().$webApp.HapticFeedback.impactOccurred("light"), s("next");
          else if (n.button.type === "local") x().push(n.button.link);
          else if (n.button.type === "external") P().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") P().$webApp.openTelegramLink(n.button.link);
          else throw n.button, Y("Unknown button type")
        };
      return (c, _) => {
        const r = fe;
        return l(), y(r, {
          label: a(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: a(ke).LARGE,
          onClick: _[0] || (_[0] = ee(b => o(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Lt = g(Kt, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  Et = {
    class: "kit-stories-src-story"
  },
  jt = {
    class: "content"
  },
  Dt = {
    class: "layout"
  },
  Nt = {
    class: "button"
  },
  Vt = v({
    __name: "Story",
    props: {
      story: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(i) {
      return (e, n) => {
        const s = ft,
          t = xt,
          o = Bt,
          c = Lt;
        return l(), d("div", Et, [u(s, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), m("div", jt, [m("div", Dt, [e.story.layout.type === "TitleSubtitle" ? (l(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (l(), y(o, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : I("", !0)]), m("div", Nt, [e.story.button ? (l(), y(c, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = _ => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : I("", !0)])])])
      }
    }
  }),
  Ft = g(Vt, [
    ["__scopeId", "data-v-a7093963"]
  ]),
  Ot = (i, e) => {
    const n = i,
      s = S(i),
      t = $(() => 1 - s.value / n);
    let o = 0,
      c;
    const _ = () => {
        o = Date.now(), c = $e(() => {
          const h = Date.now(),
            T = h - o;
          o = h, s.value = Math.max(s.value - T, 0), s.value <= 0 && (r(), e())
        }, 100)
      },
      r = () => {
        c && (clearInterval(c), c = void 0)
      },
      b = () => {
        if (c) {
          r();
          const h = Date.now() - o;
          s.value = Math.max(s.value - h, 0)
        }
      },
      f = () => _();
    return _(), {
      timeToExpire: we(s),
      progress: t,
      destroy: r,
      pause: b,
      resume: f
    }
  },
  Mt = 150,
  Ut = v({
    __name: "Stories",
    props: {
      stories: {}
    },
    emits: ["close"],
    setup(i, {
      emit: e
    }) {
      const n = i,
        s = e,
        t = S(0),
        o = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, b()) : s("close")
        },
        c = () => {
          t.value > 0 ? (t.value -= 1, b()) : s("close")
        },
        _ = () => Ot(5e3, o),
        r = he(_()),
        b = () => {
          r.value.destroy(), r.value = _()
        },
        f = S(),
        h = ne(),
        T = S(!1),
        D = S(!1),
        le = () => {
          T.value = !1, D.value = !1, h.set(() => {
            r.value.pause(), T.value = !0, D.value = !0
          }, Mt)
        },
        N = () => {
          h.destroy(), T.value && (r.value.resume(), T.value = !1)
        },
        ie = A => {
          if (T.value || D.value || !f.value) return;
          const {
            width: k,
            left: V
          } = f.value.getBoundingClientRect(), K = A.clientX - V, L = k / 3;
          K < L ? c() : K > L * 2 && o()
        };
      return te(() => {
        h.destroy(), r.value.destroy()
      }), (A, k) => {
        const V = yt,
          K = Ft,
          L = Ne;
        return l(), y(L, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: R(() => [m("div", {
            ref_key: "storiesRef",
            ref: f,
            class: "kit-stories-src-stories",
            onPointerdown: k[1] || (k[1] = ee(C => le(), ["prevent"])),
            onPointerup: k[2] || (k[2] = C => N()),
            onPointercancel: k[3] || (k[3] = C => N()),
            onPointerleave: k[4] || (k[4] = C => N()),
            onClick: k[5] || (k[5] = C => ie(C))
          }, [u(V, {
            current: a(t),
            "current-progress": a(r).progress.value,
            count: A.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (l(), y(K, {
            key: a(t),
            story: A.stories[a(t)],
            "is-last": a(t) === A.stories.length - 1,
            onNext: k[0] || (k[0] = C => o())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  zt = g(Ut, [
    ["__scopeId", "data-v-387cfdca"]
  ]),
  Ht = v({
    __name: "Stories",
    props: Se({
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
      return (n, s) => {
        const t = zt;
        return l(), y(Te, {
          name: "opacity-transition"
        }, {
          default: R(() => [e.value ? (l(), y(t, {
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
  Wt = g(Ht, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  Gt = {
    class: "pages-index-new-season-banner"
  },
  Yt = {
    class: "banner"
  },
  qt = {
    class: "content"
  },
  Xt = {
    class: "title"
  },
  Zt = {
    class: "subtitle"
  },
  Jt = v({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(i) {
      const e = i,
        n = S(e.value.showOnStart);
      return Ie(n, s => s && e.value.onShowed(), {
        immediate: !0
      }), (s, t) => {
        const o = oe,
          c = Q,
          _ = Wt;
        return l(), d("div", Gt, [m("div", Yt, [m("div", qt, [m("div", Xt, w(("t" in s ? s.t : a(p))("index.season_2.banner.title")), 1), m("div", Zt, w(("t" in s ? s.t : a(p))("index.season_2.banner.subtitle")), 1), u(o, {
          state: "default",
          label: ("t" in s ? s.t : a(p))("index.season_2.banner.btn"),
          type: "dark",
          class: "btn",
          onClick: t[0] || (t[0] = r => n.value = !0)
        }, null, 8, ["label"])]), u(c, {
          name: "animations/Moon",
          class: "animation"
        })]), u(_, {
          modelValue: a(n),
          "onUpdate:modelValue": t[1] || (t[1] = r => Ce(n) ? n.value = r : null),
          set: s.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Qt = g(Jt, [
    ["__scopeId", "data-v-fef03bb2"]
  ]),
  es = {
    class: "pages-wallet-asset-skeleton"
  },
  ts = {
    class: "content"
  },
  ss = v({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(i) {
      return (e, n) => {
        const s = B;
        return l(), d("div", es, [(l(!0), d(j, null, U(e.count, t => (l(), d("div", {
          key: t,
          class: "skeleton"
        }, [u(s, {
          rounded: "",
          class: "logo"
        }), m("div", ts, [u(s, {
          class: "title"
        }), u(s, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  ns = g(ss, [
    ["__scopeId", "data-v-26805825"]
  ]),
  os = {
    class: "pages-index-points"
  },
  as = v({
    __name: "IndexPoints",
    props: {
      mp: {},
      bp: {}
    },
    setup(i) {
      return (e, n) => {
        const s = ae,
          t = ns,
          o = Ee;
        return l(), d("div", os, [u(s, {
          label: ("t" in e ? e.t : a(p))("wallet.points.title"),
          "full-path": ("useRouter" in e ? e.useRouter : a(x))().resolve({
            name: "wallet",
            query: {
              tab: "points"
            }
          }).fullPath
        }, null, 8, ["label", "full-path"]), !e.mp || !e.bp ? (l(), y(t, {
          key: 0,
          count: 2
        })) : (l(), y(o, {
          key: 1,
          points: [e.mp, e.bp]
        }, null, 8, ["points"]))])
      }
    }
  }),
  ls = g(as, [
    ["__scopeId", "data-v-86909176"]
  ]),
  is = {
    key: 0,
    class: "skeleton"
  },
  rs = {
    key: 1,
    class: "default"
  },
  cs = {
    class: "content"
  },
  us = {
    class: "title"
  },
  _s = {
    class: "balance"
  },
  ds = v({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(i) {
      const e = i,
        n = $(() => {
          const t = (() => {
            const o = M().internal;
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
        s = () => x().push({
          name: "game"
        });
      return (t, o) => {
        const c = ae,
          _ = z,
          r = B,
          b = oe;
        return l(), d("div", {
          class: J(["pages-index-game", `is-background-${a(n).background}`])
        }, [u(c, {
          label: ("t" in t ? t.t : a(p))("base.game")
        }, null, 8, ["label"]), a(n).type === "skeleton" ? (l(), d("div", is, [u(_, {
          name: a(n).image,
          class: "icon"
        }, null, 8, ["name"]), u(r, {
          secondary: "",
          class: "skeleton-title"
        }), u(b, {
          label: ("t" in t ? t.t : a(p))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (l(), d("div", rs, [u(_, {
          name: a(n).image,
          class: "icon"
        }, null, 8, ["name"]), m("div", cs, [m("div", us, w(("t" in t ? t.t : a(p))("game.card.title")), 1), m("div", _s, w(a(n).pp) + " Play passes", 1)]), u(b, {
          label: ("t" in t ? t.t : a(p))("base.play"),
          state: "default",
          type: "white",
          class: "pill",
          disabled: a(n).disabled,
          onClick: o[0] || (o[0] = f => s())
        }, null, 8, ["label", "disabled"])]))], 2)
      }
    }
  }),
  ps = g(ds, [
    ["__scopeId", "data-v-972ed848"]
  ]),
  ms = (i, e) => {
    const n = {
      ...i
    };
    return n.currentStreakDays = e.currentStreakDays, n.claim = E.UNAVAILABLE, n.canClaimAt = e.canClaimAt, n
  },
  ys = () => {
    const i = S(!1),
      e = S(),
      n = ne(),
      t = Re(async () => {
        const r = Ae(await W.getDailyReward());
        if (X(r)) {
          const b = q().getCurrentTimestamp();
          if (b) {
            const f = r.data.canClaimAt - b;
            n.set(() => t.exec(), f)
          }
        }
        return r
      }, r => e.value = r),
      o = async () => {
        if (i.value || !e.value) return O();
        i.value = !0;
        const r = await W.claimDailyReward();
        return i.value = !1, r.err ? O() : (e.value = ms(e.value, r.data), t.exec(), setTimeout(() => se().update(), 5e3), F(r.data))
      };
    return {
      init: async () => {
        await t.exec()
      },
      destroy: () => {
        t.destroy(), n.destroy(), i.value = !1, e.value = void 0
      },
      reward: $(() => e.value),
      claim: o,
      isClaiming: $(() => i.value)
    }
  },
  bs = () => {
    const i = se(),
      e = Pe(),
      n = ys(),
      s = $(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      o = {
        set: vs(),
        showOnStart: !P().$webApp.storage.local.get(t),
        onShowed: () => P().$webApp.storage.local.set(t, "true")
      };
    return {
      init: async () => {
        await Promise.all([n.init()])
      },
      destroy: () => {
        n.destroy()
      },
      dailyReward: n,
      myTribe: s,
      season2Stories: o,
      symbols: $(() => i.pointSymbols.value),
      wallet: $(() => i.wallet.value)
    }
  },
  vs = () => ({
    stories: [{
      background: {
        type: "video",
        preview: Be("index/season-2-intro-preview"),
        src: Ke("index/season-2-intro.mp4")
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
  gs = {
    class: "index-page page"
  },
  ks = v({
    __name: "index",
    setup(i) {
      const e = bs();
      return e.init(), te(() => e.destroy()), (n, s) => {
        var b, f, h;
        const t = at,
          o = dt,
          c = Qt,
          _ = ls,
          r = ps;
        return l(), d("div", gs, [u(t, {
          "my-tribe": a(e).myTribe.value,
          wallet: a(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), u(o, {
          "daily-reward": a(e).dailyReward.reward.value,
          "daily-reward-claim": a(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), u(c, {
          value: a(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), u(_, {
          mp: (b = a(e).symbols.value) == null ? void 0 : b.mp,
          bp: (f = a(e).symbols.value) == null ? void 0 : f.bp
        }, null, 8, ["mp", "bp"]), u(r, {
          pp: (h = a(e).symbols.value) == null ? void 0 : h.pp
        }, null, 8, ["pp"])])
      }
    }
  }),
  Ds = g(ks, [
    ["__scopeId", "data-v-6052a272"]
  ]);
export {
  Ds as
  default
};