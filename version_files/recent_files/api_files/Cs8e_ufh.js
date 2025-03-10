import {
  _ as oe
} from "./cgsQS_Dq.js";
import {
  _ as E
} from "./CupBmkCL.js";
import {
  d as y,
  j as $,
  V as W,
  o as l,
  c as d,
  e as a,
  G as b,
  a as m,
  t as w,
  z as p,
  ah as ae,
  U as G,
  D as A,
  aq as le,
  ar as ie,
  x as q,
  f as v,
  ac as S,
  F as N,
  H as C,
  b as _,
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
  an as Ae,
  ao as Ie,
  a9 as Ce,
  aF as xe,
  p as Re,
  P as Pe,
  aG as Ee,
  aH as Be
} from "./CyXdbNzs.js";
import {
  _ as Le
} from "./B3dQr7VU.js";
import {
  _ as U,
  a as ee,
  b as Ne
} from "./B9-LK5Yk.js";
import {
  _ as Ke
} from "./BPebstne.js";
import {
  _ as Me
} from "./BOgksT8L.js";
import {
  _ as Oe
} from "./xSKH793O.js";
import {
  _ as te
} from "./CvcyNd96.js";
import "./Bf2gI98n.js";
import "./C2E1OCNI.js";
import "./De1iETJ5.js";
import "./DFiQG710.js";
import "./BRn5ypBy.js";
import "./CIaGvO_Y.js";
import "./Cor-KcUX.js";
const je = {
    class: "pages-index-banner-wallet"
  },
  De = {
    key: 1,
    class: "connected"
  },
  Fe = {
    class: "label"
  },
  Ve = y({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(c) {
      const t = c,
        o = () => le(ie.MAIN).runConnectionFlow(),
        s = $(() => {
          var e;
          if (t.wallet.status === "loading") return {
            type: "skeleton"
          };
          if (t.wallet.status === "must_reconnect" || t.wallet.status === "not_found") return {
            type: "connect"
          };
          if (t.wallet.status === "connected") return (e = t.wallet.balance) != null && e.totalFiatValue.USD ? {
            type: "connected",
            balance: t.wallet.balance.totalFiatValue.USD.defaultH,
            shortAddress: t.wallet.address.short
          } : {
            type: "skeleton"
          };
          throw t.wallet, W("Invalid wallet status")
        });
      return (e, n) => {
        const r = E,
          u = q;
        return l(), d("div", je, [a(s).type === "skeleton" ? (l(), b(r, {
          key: 0,
          class: "skeleton"
        })) : a(s).type === "connected" ? (l(), d("div", De, [m("div", Fe, w(("t" in e ? e.t : a(p))("wallet.total_balance")), 1), (l(), b(ae(a(s).balance), {
          class: "balance"
        }))])) : a(s).type === "connect" ? (l(), b(u, {
          key: 2,
          label: ("t" in e ? e.t : a(p))("wallet.connect.btn"),
          size: a(G).SMALL,
          onClick: n[0] || (n[0] = i => o())
        }, null, 8, ["label", "size"])) : A("", !0)])
      }
    }
  }),
  Ue = v(Ve, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  ze = {
    class: "pages-tribe-external-index-page"
  },
  He = y({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(c) {
      const t = S().resolve({
          name: "tribe-join"
        }).fullPath,
        o = S().resolve({
          name: "tribe-slug"
        }).fullPath,
        s = e => K().main.tribeLogoClick(e);
      return (e, n) => {
        const r = E,
          u = re,
          i = ce,
          k = Le;
        return l(), d("div", ze, [e.myTribe ? (l(), d(N, {
          key: 1
        }, [e.myTribe.type === "validating" ? (l(), b(u, {
          key: 0,
          to: a(t),
          class: "validating hex-center",
          onClick: n[0] || (n[0] = f => s(e.myTribe.type))
        }, {
          default: C(() => n[4] || (n[4] = [m("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : e.myTribe.type === "not_found" ? (l(), b(u, {
          key: 1,
          to: a(t),
          class: "join hex-center",
          onClick: n[1] || (n[1] = f => s(e.myTribe.type))
        }, {
          default: C(() => [_(i, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : e.myTribe.type === "not_created" ? (l(), b(u, {
          key: 2,
          to: a(t),
          class: "error hex-center",
          onClick: n[2] || (n[2] = f => s(e.myTribe.type))
        }, {
          default: C(() => [_(i, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : e.myTribe.type === "ok" ? (l(), b(u, {
          key: 3,
          to: a(o),
          class: "ok",
          onClick: n[3] || (n[3] = f => s(e.myTribe.type))
        }, {
          default: C(() => [_(k, {
            "avatar-url": e.myTribe.tribe.getAvatarUrl(),
            "default-avatar": e.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : A("", !0)], 64)) : (l(), b(r, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  Ye = v(He, [
    ["__scopeId", "data-v-ef3e1f1f"]
  ]),
  We = {
    class: "pages-index-banner-profile-tribe"
  },
  Ge = y({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(c) {
      const t = ue(() => {
        _e().public.ENVIRONMENT !== "prod" && S().push({
          name: "debug"
        })
      }, 5);
      return (o, s) => {
        const e = oe,
          n = Ue,
          r = Ye;
        return l(), d("div", We, [_(e, {
          small: "",
          onClick: s[0] || (s[0] = u => a(t)())
        }), _(n, {
          wallet: o.wallet
        }, null, 8, ["wallet"]), _(r, {
          "my-tribe": o.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"])])
      }
    }
  }),
  qe = v(Ge, [
    ["__scopeId", "data-v-779ec8f9"]
  ]),
  Je = {
    class: "pages-index-banner-controls"
  },
  Xe = ["onClick"],
  Ze = {
    class: "image-container"
  },
  Qe = {
    class: "title"
  },
  et = y({
    __name: "BannerControls",
    setup(c) {
      const t = $(() => [{
        title: p("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => S().push({
          name: "memepad-new",
          query: {
            memepadFrom: z.MAIN,
            memepadNewFrom: de.MAIN
          }
        })
      }, {
        title: p("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => S().push({
          name: "memepad",
          query: {
            memepadFrom: z.MAIN
          }
        })
      }, {
        title: p("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          K().main.controlsTradingBotClick(), F().openTradingBot()
        }
      }]);
      return (o, s) => {
        const e = U;
        return l(), d("div", Je, [(l(!0), d(N, null, V(a(t), (n, r) => (l(), d("button", {
          key: r,
          class: "control reset",
          onClick: u => n.onClick()
        }, [m("div", Ze, [_(e, {
          name: n.image,
          class: "image"
        }, null, 8, ["name"])]), m("div", Qe, w(n.title), 1)], 8, Xe))), 128))])
      }
    }
  }),
  tt = v(et, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  st = {
    class: "pages-index-banner"
  },
  nt = y({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(c) {
      return (t, o) => {
        const s = qe,
          e = tt;
        return l(), d("div", st, [_(s, {
          "my-tribe": t.myTribe,
          wallet: t.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), _(e, {
          class: "controls"
        })])
      }
    }
  }),
  ot = v(nt, [
    ["__scopeId", "data-v-8f4c28ad"]
  ]),
  at = {
    class: "pages-index-daily-reward"
  },
  lt = {
    key: 1,
    class: "widget has-radius"
  },
  it = {
    class: "compose"
  },
  rt = {
    class: "title"
  },
  ct = {
    key: 0,
    class: "subtitle"
  },
  ut = y({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(c) {
      const t = c,
        o = pe(),
        s = (n, r) => async () => {
          const u = await t.dailyRewardClaim();
          ke(u, {
            Err: () => o.error(p("base.claim_error")),
            Ok: i => {
              n === D.RESTORE && o.success(p("daily_reward.streak_restored", {
                days: r
              })), o.success(`You’ve got ${ge(i.claimedReward.points)} BP`), o.success(Y("span", ["You’ve got ", Y("i", {
                class: "ticket"
              }), ` ${i.claimedReward.passes}`])), F().makeConfetti(), K().main.dailyRewardClick({
                points: i.claimedReward.points.toNumber(),
                passes: i.claimedReward.passes
              })
            }
          })
        }, e = $(() => {
          if (t.dailyReward === void 0) return;
          const n = t.dailyReward.currentStreakDays,
            r = `${n}-${p("base.n.days",n)}`;
          if (t.dailyReward.claim === D.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: p("daily_reward.missed"),
            subtitle: H(p("daily_reward.restore_current_streak", {
              days: r
            })),
            claim: {
              label: p("base.restore"),
              white: !0,
              can: !0,
              fn: s(t.dailyReward.claim, r)
            }
          };
          const u = (() => {
            const k = me().ms100ticker.value;
            if (!k) return be();
            const f = ye(t.dailyReward.canClaimAt - k, "letters");
            return H(p("base.claim_next_in", {
              time: f
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: p("daily_reward.current_streak", {
              days: r
            }),
            subtitle: u,
            claim: {
              can: t.dailyReward.claim !== D.UNAVAILABLE,
              fn: s(t.dailyReward.claim, r)
            }
          }
        });
      return (n, r) => {
        const u = E,
          i = U,
          k = Ke;
        return l(), d("div", at, [a(e) ? (l(), d("div", lt, [_(i, {
          name: a(e).icon,
          class: "icon"
        }, null, 8, ["name"]), m("div", it, [m("div", rt, w(a(e).title), 1), ("isOk" in n ? n.isOk : a(ve))(a(e).subtitle) ? (l(), d("div", ct, w(a(e).subtitle.data), 1)) : (l(), b(u, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), a(e).claim ? (l(), b(k, {
          key: 0,
          label: a(e).claim.label,
          "can-claim": a(e).claim.can,
          "claim-fn": a(e).claim.fn,
          style: J(a(e).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : A("", !0)])) : (l(), b(u, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  _t = v(ut, [
    ["__scopeId", "data-v-181516c9"]
  ]),
  dt = {
    class: "kit-stories-src-counter"
  },
  pt = y({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(c) {
      fe(s => ({
        "9db269f8": s.count
      }));
      const t = c,
        o = $(() => [...new Array(t.count)].map((s, e) => e < t.current ? {
          state: "viewed",
          key: e
        } : e === t.current ? {
          state: "current",
          progress: t.currentProgress,
          key: e
        } : {
          state: "future",
          key: e
        }));
      return (s, e) => (l(), d("div", dt, [(l(!0), d(N, null, V(a(o), n => (l(), d("div", {
        key: n.key,
        class: X(["progress", [`is-state-${n.state}`]]),
        style: J(n.state === "current" ? {
          "background-position-x": `-${n.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  mt = v(pt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  bt = {
    class: "kit-stories-shared-background"
  },
  yt = ["poster", "src"],
  vt = ["src"],
  kt = y({
    __name: "Background",
    props: {
      background: {}
    },
    setup(c) {
      return (t, o) => {
        const s = Me;
        return l(), d("div", bt, [t.background.type === "video" ? (l(), d("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: t.background.preview,
          src: t.background.src
        }, null, 8, yt)) : t.background.type === "image" ? (l(), d("img", {
          key: 1,
          src: t.background.src
        }, null, 8, vt)) : t.background.type === "stars" ? (l(), b(s, {
          key: 2,
          class: "stars"
        })) : A("", !0)])
      }
    }
  }),
  gt = v(kt, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  ft = {
    class: "kit-stories-layouts-title-subtitle"
  },
  $t = {
    class: "title"
  },
  wt = {
    class: "subtitle"
  },
  ht = y({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(c) {
      return (t, o) => (l(), d("div", ft, [m("div", $t, w(t.layout.title), 1), m("div", wt, w(t.layout.subtitle), 1)]))
    }
  }),
  St = v(ht, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  Tt = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  At = {
    class: "animoji-container"
  },
  It = {
    class: "content-container"
  },
  Ct = {
    class: "title"
  },
  xt = {
    class: "subtitle"
  },
  Rt = y({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(c) {
      return (t, o) => {
        const s = Z;
        return l(), d("div", Tt, [m("div", At, [_(s, {
          name: `animations/${t.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), m("div", It, [m("div", Ct, w(t.layout.title), 1), m("div", xt, w(t.layout.subtitle), 1)])])
      }
    }
  }),
  Pt = v(Rt, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  Et = y({
    __name: "Button",
    props: {
      button: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(c, {
      emit: t
    }) {
      const o = c,
        s = t,
        e = $(() => o.button.type === "next" ? o.isLast ? p("base.close") : p("base.next") : o.button.label),
        n = () => {
          if (o.button.type === "next") P().$webApp.HapticFeedback.impactOccurred("light"), s("next");
          else if (o.button.type === "local") S().push(o.button.link);
          else if (o.button.type === "external") P().$webApp.openLink(o.button.link);
          else if (o.button.type === "telegram") P().$webApp.openTelegramLink(o.button.link);
          else throw o.button, W("Unknown button type")
        };
      return (r, u) => {
        const i = q;
        return l(), b(i, {
          label: a(e),
          fill: "",
          class: "kit-stories-shared-button",
          size: a(G).LARGE,
          onClick: u[0] || (u[0] = Q(k => n(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Bt = v(Et, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  Lt = {
    class: "kit-stories-src-story"
  },
  Nt = {
    class: "content"
  },
  Kt = {
    class: "layout"
  },
  Mt = {
    class: "button"
  },
  Ot = y({
    __name: "Story",
    props: {
      story: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(c) {
      return (t, o) => {
        const s = gt,
          e = St,
          n = Pt,
          r = Bt;
        return l(), d("div", Lt, [_(s, {
          background: t.story.background,
          class: "background"
        }, null, 8, ["background"]), m("div", Nt, [m("div", Kt, [t.story.layout.type === "TitleSubtitle" ? (l(), b(e, {
          key: 0,
          layout: t.story.layout
        }, null, 8, ["layout"])) : t.story.layout.type === "AnimojiTitleSubtitle" ? (l(), b(n, {
          key: 1,
          layout: t.story.layout
        }, null, 8, ["layout"])) : A("", !0)]), m("div", Mt, [t.story.button ? (l(), b(r, {
          key: 0,
          button: t.story.button,
          "is-last": t.isLast,
          onNext: o[0] || (o[0] = u => t.$emit("next"))
        }, null, 8, ["button", "is-last"])) : A("", !0)])])])
      }
    }
  }),
  jt = v(Ot, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  Dt = (c, t) => {
    const o = c,
      s = x(c),
      e = $(() => 1 - s.value / o);
    let n = 0,
      r;
    const u = () => {
        n = Date.now(), r = we(() => {
          const h = Date.now(),
            T = h - n;
          n = h, s.value = Math.max(s.value - T, 0), s.value <= 0 && (i(), t())
        }, 100)
      },
      i = () => {
        r && (clearInterval(r), r = void 0)
      },
      k = () => {
        if (r) {
          i();
          const h = Date.now() - n;
          s.value = Math.max(s.value - h, 0)
        }
      },
      f = () => u();
    return u(), {
      timeToExpire: $e(s),
      progress: e,
      destroy: i,
      pause: k,
      resume: f
    }
  },
  Ft = 150,
  Vt = y({
    __name: "Stories",
    props: {
      stories: {}
    },
    emits: ["close"],
    setup(c, {
      emit: t
    }) {
      const o = c,
        s = t,
        e = x(0),
        n = () => {
          e.value < o.stories.length - 1 ? (e.value += 1, k()) : s("close")
        },
        r = () => {
          e.value > 0 ? (e.value -= 1, k()) : s("close")
        },
        u = () => Dt(5e3, n),
        i = he(u()),
        k = () => {
          i.value.destroy(), i.value = u()
        },
        f = x(),
        h = Se(),
        T = x(!1),
        M = x(!1),
        se = () => {
          T.value = !1, M.value = !1, h.set(() => {
            i.value.pause(), T.value = !0, M.value = !0
          }, Ft)
        },
        O = () => {
          h.destroy(), T.value && (i.value.resume(), T.value = !1)
        },
        ne = R => {
          if (T.value || M.value || !f.value) return;
          const {
            width: g,
            left: j
          } = f.value.getBoundingClientRect(), B = R.clientX - j, L = g / 3;
          B < L ? r() : B > L * 2 && n()
        };
      return Te(() => {
        h.destroy(), i.value.destroy()
      }), (R, g) => {
        const j = mt,
          B = jt,
          L = Oe;
        return l(), b(L, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: C(() => [m("div", {
            ref_key: "storiesRef",
            ref: f,
            class: "kit-stories-src-stories",
            onPointerdown: g[1] || (g[1] = Q(I => se(), ["prevent"])),
            onPointerup: g[2] || (g[2] = I => O()),
            onPointercancel: g[3] || (g[3] = I => O()),
            onPointerleave: g[4] || (g[4] = I => O()),
            onClick: g[5] || (g[5] = I => ne(I))
          }, [_(j, {
            current: a(e),
            "current-progress": a(i).progress.value,
            count: R.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (l(), b(B, {
            key: a(e),
            story: R.stories[a(e)],
            "is-last": a(e) === R.stories.length - 1,
            onNext: g[0] || (g[0] = I => n())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  Ut = v(Vt, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  zt = y({
    __name: "Stories",
    props: Ae({
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
      const t = Ie(c, "modelValue");
      return (o, s) => {
        const e = Ut;
        return l(), b(Ce, {
          name: "opacity-transition"
        }, {
          default: C(() => [t.value ? (l(), b(e, {
            key: 0,
            stories: o.set.stories,
            class: "kit-stories",
            onClose: s[0] || (s[0] = n => t.value = !1)
          }, null, 8, ["stories"])) : A("", !0)]),
          _: 1
        })
      }
    }
  }),
  Ht = v(zt, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  Yt = {
    class: "pages-index-new-season-banner"
  },
  Wt = {
    class: "banner"
  },
  Gt = {
    class: "content"
  },
  qt = {
    class: "title"
  },
  Jt = {
    class: "subtitle"
  },
  Xt = y({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(c) {
      const t = c,
        o = x(t.value.showOnStart);
      return xe(o, s => s && t.value.onShowed(), {
        immediate: !0
      }), (s, e) => {
        const n = ee,
          r = Z,
          u = Ht;
        return l(), d("div", Yt, [m("div", Wt, [m("div", Gt, [m("div", qt, w(("t" in s ? s.t : a(p))("index.season_2.banner.title")), 1), m("div", Jt, w(("t" in s ? s.t : a(p))("index.season_2.banner.subtitle")), 1), _(n, {
          state: "default",
          label: ("t" in s ? s.t : a(p))("index.season_2.banner.btn"),
          type: "dark",
          class: "btn",
          onClick: e[0] || (e[0] = i => o.value = !0)
        }, null, 8, ["label"])]), _(r, {
          name: "animations/Moon",
          class: "animation"
        })]), _(u, {
          modelValue: a(o),
          "onUpdate:modelValue": e[1] || (e[1] = i => Re(o) ? o.value = i : null),
          set: s.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Zt = v(Xt, [
    ["__scopeId", "data-v-fef03bb2"]
  ]),
  Qt = {
    class: "pages-wallet-asset-skeleton"
  },
  es = {
    class: "content"
  },
  ts = y({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(c) {
      return (t, o) => {
        const s = E;
        return l(), d("div", Qt, [(l(!0), d(N, null, V(t.count, e => (l(), d("div", {
          key: e,
          class: "skeleton"
        }, [_(s, {
          rounded: "",
          class: "logo"
        }), m("div", es, [_(s, {
          class: "title"
        }), _(s, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  ss = v(ts, [
    ["__scopeId", "data-v-26805825"]
  ]),
  ns = {
    class: "pages-index-points"
  },
  os = y({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(c) {
      const t = $(() => S().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (o, s) => {
        const e = te,
          n = ss,
          r = Ne;
        return l(), d("div", ns, [_(e, {
          label: ("t" in o ? o.t : a(p))("wallet.points.title"),
          "full-path": a(t)
        }, null, 8, ["label", "full-path"]), o.points ? (l(), b(r, {
          key: 1,
          points: o.points
        }, null, 8, ["points"])) : (l(), b(n, {
          key: 0,
          count: 2
        }))])
      }
    }
  }),
  as = v(os, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  ls = {
    key: 0,
    class: "skeleton"
  },
  is = {
    key: 1,
    class: "default"
  },
  rs = {
    class: "content"
  },
  cs = {
    class: "title"
  },
  us = {
    class: "balance"
  },
  _s = y({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(c) {
      const t = c,
        o = $(() => {
          const e = (() => {
            const n = F().internal;
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
          return t.pp === void 0 ? {
            ...e,
            type: "skeleton"
          } : {
            ...e,
            type: "default",
            pp: t.pp.balance.default,
            disabled: t.pp.balance.value.isZero()
          }
        }),
        s = () => S().push({
          name: "game"
        });
      return (e, n) => {
        const r = te,
          u = U,
          i = E,
          k = ee;
        return l(), d("div", {
          class: X(["pages-index-game", `is-background-${a(o).background}`])
        }, [_(r, {
          label: ("t" in e ? e.t : a(p))("base.game")
        }, null, 8, ["label"]), a(o).type === "skeleton" ? (l(), d("div", ls, [_(u, {
          name: a(o).image,
          class: "icon"
        }, null, 8, ["name"]), _(i, {
          secondary: "",
          class: "skeleton-title"
        }), _(k, {
          label: ("t" in e ? e.t : a(p))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (l(), d("div", is, [_(u, {
          name: a(o).image,
          class: "icon"
        }, null, 8, ["name"]), m("div", rs, [m("div", cs, w(("t" in e ? e.t : a(p))("game.card.title")), 1), m("div", us, w(a(o).pp) + " Play passes", 1)]), _(k, {
          label: ("t" in e ? e.t : a(p))("base.play"),
          state: "default",
          type: "white",
          class: "pill",
          disabled: a(o).disabled,
          onClick: n[0] || (n[0] = f => s())
        }, null, 8, ["label", "disabled"])]))], 2)
      }
    }
  }),
  ds = v(_s, [
    ["__scopeId", "data-v-7c6add22"]
  ]),
  ps = () => {
    const c = Pe(),
      t = Ee(),
      o = Be(),
      s = $(() => t.myTribeRes.value),
      e = "season_2_banner_showed",
      n = {
        set: ms(),
        showOnStart: !P().$webApp.storage.local.get(e),
        onShowed: () => {
          P().$webApp.storage.local.set(e, "true"), K().main.season2StoriesAppear()
        }
      },
      r = $(() => {
        const i = c.pointSymbols.value,
          k = c.dropSymbols.value;
        if (!(!i || !k) && !(!i.mp || !i.bp)) return [i.mp, i.bp, ...k]
      }),
      u = $(() => c.pointSymbols.value.pp);
    return {
      dailyReward: o,
      myTribe: s,
      season2Stories: n,
      wallet: $(() => c.wallet.value),
      pp: u,
      walletAssets: r
    }
  },
  ms = () => ({
    stories: [{
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
  bs = {
    class: "index-page page"
  },
  ys = y({
    __name: "index",
    setup(c) {
      const t = ps();
      return (o, s) => {
        const e = ot,
          n = _t,
          r = Zt,
          u = as,
          i = ds;
        return l(), d("div", bs, [_(e, {
          "my-tribe": a(t).myTribe.value,
          wallet: a(t).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), _(n, {
          "daily-reward": a(t).dailyReward.reward.value,
          "daily-reward-claim": a(t).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), _(r, {
          value: a(t).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), _(u, {
          points: a(t).walletAssets.value
        }, null, 8, ["points"]), _(i, {
          pp: a(t).pp.value
        }, null, 8, ["pp"])])
      }
    }
  }),
  Bs = v(ys, [
    ["__scopeId", "data-v-97e08456"]
  ]);
export {
  Bs as
  default
};