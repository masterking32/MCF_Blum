import {
  _ as re
} from "./Dgy_2gUO.js";
import {
  _ as B
} from "./2vZNcphP.js";
import {
  d as v,
  ae as T,
  o as l,
  c as d,
  G as y,
  F as N,
  I as R,
  a as m,
  e as a,
  b as u,
  C as I,
  J as ce,
  _ as W,
  f as g,
  as as ue,
  l as _e,
  at as de,
  j as w,
  a3 as G,
  aj as pe,
  t as $,
  z as p,
  h as A,
  q as M,
  Z as me,
  au as E,
  av as O,
  K as Y,
  aw as F,
  M as ye,
  ax as q,
  ay as X,
  az as be,
  N as ve,
  ai as z,
  Y as Z,
  aA as ge,
  n as J,
  af as Q,
  W as ke,
  aB as ee,
  x as fe,
  L as S,
  aC as we,
  aD as $e,
  aE as he,
  V as te,
  ap as Se,
  aq as Te,
  aa as xe,
  Q as Ie,
  p as Ce,
  T as Re,
  X as H,
  P as se,
  a0 as Ae,
  aF as Pe,
  ao as Be,
  aG as Ke
} from "./DRqvt5pl.js";
import {
  _ as Le
} from "./DEjUTUb_.js";
import {
  _ as U,
  u as ne,
  a as oe,
  b as Ee
} from "./hUVyfWwO.js";
import {
  _ as Ne
} from "./BiWzAglk.js";
import {
  _ as je
} from "./BiByRrzl.js";
import {
  _ as De
} from "./DDcciUHT.js";
import {
  _ as ae
} from "./_5JkWycP.js";
import "./BpbNoRbL.js";
import "./jN6T2iq4.js";
import "./DaCHxoB5.js";
import "./BctkPI-y.js";
import "./CMncxNGJ.js";
import "./BvaVk8E1.js";
import "./d9qllZGQ.js";
import "./DXiFq9Dp.js";
const Ve = {
    class: "pages-tribe-external-index-page"
  },
  Oe = v({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(i) {
      const e = T().resolve({
          name: "tribe-join"
        }).fullPath,
        n = T().resolve({
          name: "tribe-slug"
        }).fullPath;
      return (s, t) => {
        const o = B,
          c = ce,
          _ = W,
          r = Le;
        return l(), d("div", Ve, [s.myTribe ? (l(), d(N, {
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
  Fe = g(Oe, [
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
        _e().public.ENVIRONMENT !== "prod" && T().push({
          name: "debug"
        })
      }, 5);
      return (n, s) => {
        const t = re,
          o = Fe;
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
  Ye = v({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(i) {
      const e = i,
        n = de(),
        s = w(() => {
          var t;
          if (e.wallet.status === "loading") return {
            type: "skeleton"
          };
          if (e.wallet.status === "must_reconnect" || e.wallet.status === "not_found") return {
            type: "connect"
          };
          if (e.wallet.status === "connected") return (t = e.wallet.balance) != null && t.totalFiatValue.USD ? {
            type: "connected",
            balance: e.wallet.balance.totalFiatValue.USD.defaultH
          } : {
            type: "skeleton"
          };
          throw e.wallet, G("Invalid wallet status")
        });
      return (t, o) => {
        const c = B,
          _ = W;
        return l(), d("div", He, [a(s).type === "skeleton" ? (l(), y(c, {
          key: 0,
          class: "skeleton"
        })) : a(s).type === "connected" ? (l(), d("div", We, [m("div", Ge, [u(_, {
          name: "ton-logo",
          class: "logo"
        }), o[1] || (o[1] = m("div", {
          class: "label"
        }, "TON", -1))]), (l(), y(pe(a(s).balance), {
          class: "balance"
        }))])) : a(s).type === "connect" ? (l(), d("div", {
          key: 2,
          class: "connect-label",
          onClick: o[0] || (o[0] = r => a(n).runConnectionFlow())
        }, [u(_, {
          name: "wallet",
          class: "icon"
        }), m("div", null, $(("t" in t ? t.t : a(p))("wallet.connect.btn")), 1)])) : I("", !0)])
      }
    }
  }),
  qe = g(Ye, [
    ["__scopeId", "data-v-12b4d9af"]
  ]),
  Xe = {
    class: "pages-index-banner-controls"
  },
  Ze = ["onClick"],
  Je = {
    class: "image-container"
  },
  Qe = {
    class: "title"
  },
  et = v({
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
        onClick: () => A().$webApp.openTelegramLink("https://t.me/BlumCryptoTradingBot")
      }]);
      return (n, s) => {
        const t = U;
        return l(), d("div", Xe, [(l(!0), d(N, null, M(a(e), (o, c) => (l(), d("button", {
          key: c,
          class: "control reset",
          onClick: _ => o.onClick()
        }, [m("div", Je, [u(t, {
          name: o.image,
          class: "image"
        }, null, 8, ["name"])]), m("div", Qe, $(o.title), 1)], 8, Ze))), 128))])
      }
    }
  }),
  tt = g(et, [
    ["__scopeId", "data-v-785ff52a"]
  ]),
  st = {
    class: "pages-index-banner"
  },
  nt = v({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(i) {
      return (e, n) => {
        const s = ze,
          t = qe,
          o = tt;
        return l(), d("div", st, [u(s, {
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
  ot = g(nt, [
    ["__scopeId", "data-v-d4d6ef53"]
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
  ut = v({
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
              })), n.success(`You’ve got ${ve(r.claimedReward.points)} BP`), n.success(z("span", ["You’ve got ", z("i", {
                class: "ticket"
              }), ` ${r.claimedReward.passes}`])), Z().makeConfetti()
            }
          })
        }, t = w(() => {
          if (e.dailyReward === void 0) return;
          const o = e.dailyReward.currentStreakDays,
            c = `${o}-${p("base.n.days",o)}`;
          if (e.dailyReward.claim === E.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: p("daily_reward.missed"),
            subtitle: O(p("daily_reward.restore_current_streak", {
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
            const b = Y().ms100ticker.value;
            if (!b) return F();
            const f = ye(e.dailyReward.canClaimAt - b, "letters");
            return O(p("base.claim_next_in", {
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
          r = U,
          b = Ne;
        return l(), d("div", at, [a(t) ? (l(), d("div", lt, [u(r, {
          name: a(t).icon,
          class: "icon"
        }, null, 8, ["name"]), m("div", it, [m("div", rt, $(a(t).title), 1), ("isOk" in o ? o.isOk : a(q))(a(t).subtitle) ? (l(), d("div", ct, $(a(t).subtitle.data), 1)) : (l(), y(_, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), a(t).claim ? (l(), y(b, {
          key: 0,
          label: a(t).claim.label,
          "can-claim": a(t).claim.can,
          "claim-fn": a(t).claim.fn,
          style: X(a(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : I("", !0)])) : (l(), y(_, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  _t = g(ut, [
    ["__scopeId", "data-v-8b85c7ba"]
  ]),
  dt = {
    class: "kit-stories-src-counter"
  },
  pt = v({
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
        n = w(() => [...new Array(e.count)].map((s, t) => t < e.current ? {
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
      return (s, t) => (l(), d("div", dt, [(l(!0), d(N, null, M(a(n), o => (l(), d("div", {
        key: o.key,
        class: J(["progress", [`is-state-${o.state}`]]),
        style: X(o.state === "current" ? {
          "background-position-x": `-${o.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  mt = g(pt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  yt = {
    class: "kit-stories-shared-background"
  },
  bt = ["poster", "src"],
  vt = ["src"],
  gt = v({
    __name: "Background",
    props: {
      background: {}
    },
    setup(i) {
      return (e, n) => {
        const s = je;
        return l(), d("div", yt, [e.background.type === "video" ? (l(), d("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, bt)) : e.background.type === "image" ? (l(), d("img", {
          key: 1,
          src: e.background.src
        }, null, 8, vt)) : e.background.type === "stars" ? (l(), y(s, {
          key: 2,
          class: "stars"
        })) : I("", !0)])
      }
    }
  }),
  kt = g(gt, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  ft = {
    class: "kit-stories-layouts-title-subtitle"
  },
  wt = {
    class: "title"
  },
  $t = {
    class: "subtitle"
  },
  ht = v({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(i) {
      return (e, n) => (l(), d("div", ft, [m("div", wt, $(e.layout.title), 1), m("div", $t, $(e.layout.subtitle), 1)]))
    }
  }),
  St = g(ht, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  Tt = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  xt = {
    class: "animoji-container"
  },
  It = {
    class: "content-container"
  },
  Ct = {
    class: "title"
  },
  Rt = {
    class: "subtitle"
  },
  At = v({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(i) {
      return (e, n) => {
        const s = Q;
        return l(), d("div", Tt, [m("div", xt, [u(s, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), m("div", It, [m("div", Ct, $(e.layout.title), 1), m("div", Rt, $(e.layout.subtitle), 1)])])
      }
    }
  }),
  Pt = g(At, [
    ["__scopeId", "data-v-3eea9b21"]
  ]),
  Bt = v({
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
        t = w(() => n.button.type === "next" ? n.isLast ? p("base.close") : p("base.next") : n.button.label),
        o = () => {
          if (n.button.type === "next") A().$webApp.HapticFeedback.impactOccurred("light"), s("next");
          else if (n.button.type === "local") T().push(n.button.link);
          else if (n.button.type === "external") A().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") A().$webApp.openTelegramLink(n.button.link);
          else throw n.button, G("Unknown button type")
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
  Kt = g(Bt, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  Lt = {
    class: "kit-stories-src-story"
  },
  Et = {
    class: "content"
  },
  Nt = {
    class: "layout"
  },
  jt = {
    class: "button"
  },
  Dt = v({
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
        const s = kt,
          t = St,
          o = Pt,
          c = Kt;
        return l(), d("div", Lt, [u(s, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), m("div", Et, [m("div", Nt, [e.story.layout.type === "TitleSubtitle" ? (l(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (l(), y(o, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : I("", !0)]), m("div", jt, [e.story.button ? (l(), y(c, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = _ => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : I("", !0)])])])
      }
    }
  }),
  Vt = g(Dt, [
    ["__scopeId", "data-v-a7093963"]
  ]),
  Ot = (i, e) => {
    const n = i,
      s = S(i),
      t = w(() => 1 - s.value / n);
    let o = 0,
      c;
    const _ = () => {
        o = Date.now(), c = $e(() => {
          const h = Date.now(),
            x = h - o;
          o = h, s.value = Math.max(s.value - x, 0), s.value <= 0 && (r(), e())
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
  Ft = 150,
  Mt = v({
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
        x = S(!1),
        j = S(!1),
        le = () => {
          x.value = !1, j.value = !1, h.set(() => {
            r.value.pause(), x.value = !0, j.value = !0
          }, Ft)
        },
        D = () => {
          h.destroy(), x.value && (r.value.resume(), x.value = !1)
        },
        ie = P => {
          if (x.value || j.value || !f.value) return;
          const {
            width: k,
            left: V
          } = f.value.getBoundingClientRect(), K = P.clientX - V, L = k / 3;
          K < L ? c() : K > L * 2 && o()
        };
      return te(() => {
        h.destroy(), r.value.destroy()
      }), (P, k) => {
        const V = mt,
          K = Vt,
          L = De;
        return l(), y(L, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: R(() => [m("div", {
            ref_key: "storiesRef",
            ref: f,
            class: "kit-stories-src-stories",
            onPointerdown: k[1] || (k[1] = ee(C => le(), ["prevent"])),
            onPointerup: k[2] || (k[2] = C => D()),
            onPointercancel: k[3] || (k[3] = C => D()),
            onPointerleave: k[4] || (k[4] = C => D()),
            onClick: k[5] || (k[5] = C => ie(C))
          }, [u(V, {
            current: a(t),
            "current-progress": a(r).progress.value,
            count: P.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (l(), y(K, {
            key: a(t),
            story: P.stories[a(t)],
            "is-last": a(t) === P.stories.length - 1,
            onNext: k[0] || (k[0] = C => o())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  Ut = g(Mt, [
    ["__scopeId", "data-v-387cfdca"]
  ]),
  zt = v({
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
      const e = Te(i, "modelValue");
      return (n, s) => {
        const t = Ut;
        return l(), y(xe, {
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
  Ht = g(zt, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  Wt = {
    class: "pages-index-new-season-banner"
  },
  Gt = {
    class: "banner"
  },
  Yt = {
    class: "content"
  },
  qt = {
    class: "title"
  },
  Xt = {
    class: "subtitle"
  },
  Zt = v({
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
          _ = Ht;
        return l(), d("div", Wt, [m("div", Gt, [m("div", Yt, [m("div", qt, $(("t" in s ? s.t : a(p))("index.season_2.banner.title")), 1), m("div", Xt, $(("t" in s ? s.t : a(p))("index.season_2.banner.subtitle")), 1), u(o, {
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
  Jt = g(Zt, [
    ["__scopeId", "data-v-fef03bb2"]
  ]),
  Qt = {
    class: "pages-wallet-asset-skeleton"
  },
  es = {
    class: "content"
  },
  ts = v({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(i) {
      return (e, n) => {
        const s = B;
        return l(), d("div", Qt, [(l(!0), d(N, null, M(e.count, t => (l(), d("div", {
          key: t,
          class: "skeleton"
        }, [u(s, {
          rounded: "",
          class: "logo"
        }), m("div", es, [u(s, {
          class: "title"
        }), u(s, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  ss = g(ts, [
    ["__scopeId", "data-v-26805825"]
  ]),
  ns = {
    class: "pages-index-points"
  },
  os = v({
    __name: "IndexPoints",
    props: {
      mp: {},
      bp: {}
    },
    setup(i) {
      return (e, n) => {
        const s = ae,
          t = ss,
          o = Ee;
        return l(), d("div", ns, [u(s, {
          label: ("t" in e ? e.t : a(p))("wallet.points.title"),
          "full-path": ("useRouter" in e ? e.useRouter : a(T))().resolve({
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
  as = g(os, [
    ["__scopeId", "data-v-86909176"]
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
  _s = v({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(i) {
      const e = i,
        n = w(() => {
          const t = (() => {
            const o = Z().internal;
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
        s = () => T().push({
          name: "game"
        });
      return (t, o) => {
        const c = ae,
          _ = U,
          r = B,
          b = oe;
        return l(), d("div", {
          class: J(["pages-index-game", `is-background-${a(n).background}`])
        }, [u(c, {
          label: ("t" in t ? t.t : a(p))("base.game")
        }, null, 8, ["label"]), a(n).type === "skeleton" ? (l(), d("div", ls, [u(_, {
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
        }, null, 8, ["label"])])) : (l(), d("div", is, [u(_, {
          name: a(n).image,
          class: "icon"
        }, null, 8, ["name"]), m("div", rs, [m("div", cs, $(("t" in t ? t.t : a(p))("game.card.title")), 1), m("div", us, $(a(n).pp) + " Play passes", 1)]), u(b, {
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
  ds = g(_s, [
    ["__scopeId", "data-v-972ed848"]
  ]),
  ps = (i, e) => {
    const n = {
      ...i
    };
    return n.currentStreakDays = e.currentStreakDays, n.claim = E.UNAVAILABLE, n.canClaimAt = e.canClaimAt, n
  },
  ms = () => {
    const i = S(!1),
      e = S(),
      n = ne(),
      t = Re(async () => {
        const r = Ae(await H.getDailyReward());
        if (q(r)) {
          const b = Y().getCurrentTimestamp();
          if (b) {
            const f = r.data.canClaimAt - b;
            n.set(() => t.exec(), f)
          }
        }
        return r
      }, r => e.value = r),
      o = async () => {
        if (i.value || !e.value) return F();
        i.value = !0;
        const r = await H.claimDailyReward();
        return i.value = !1, r.err ? F() : (e.value = ps(e.value, r.data), t.exec(), setTimeout(() => se().update(), 5e3), O(r.data))
      };
    return {
      init: async () => {
        await t.exec()
      },
      destroy: () => {
        t.destroy(), n.destroy(), i.value = !1, e.value = void 0
      },
      reward: w(() => e.value),
      claim: o,
      isClaiming: w(() => i.value)
    }
  },
  ys = () => {
    const i = se(),
      e = Pe(),
      n = ms(),
      s = w(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      o = {
        set: bs(),
        showOnStart: !A().$webApp.storage.local.get(t),
        onShowed: () => A().$webApp.storage.local.set(t, "true")
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
      symbols: w(() => i.pointSymbols.value),
      wallet: w(() => i.wallet.value)
    }
  },
  bs = () => ({
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
  vs = {
    class: "index-page page"
  },
  gs = v({
    __name: "index",
    setup(i) {
      const e = ys();
      return e.init(), te(() => e.destroy()), (n, s) => {
        var b, f, h;
        const t = ot,
          o = _t,
          c = Jt,
          _ = as,
          r = ds;
        return l(), d("div", vs, [u(t, {
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
  Ns = g(gs, [
    ["__scopeId", "data-v-6052a272"]
  ]);
export {
  Ns as
  default
};