import {
  _ as ne
} from "./Bn9cz-Ud.js";
import {
  _ as E
} from "./0thJzY5o.js";
import {
  d as y,
  ac as S,
  o as l,
  c as _,
  G as b,
  F as L,
  H as C,
  a as m,
  e as a,
  b as r,
  D as I,
  $ as D,
  I as oe,
  _ as W,
  f as v,
  aq as ae,
  l as le,
  ar as ie,
  as as re,
  j as h,
  V as G,
  t as $,
  ah as ce,
  z as d,
  at as H,
  au as ue,
  Y as F,
  q as V,
  Z as _e,
  av as j,
  X as Y,
  J as de,
  aw as pe,
  L as me,
  a1 as be,
  ax as q,
  ay as ye,
  M as ve,
  ag as z,
  az as ke,
  n as J,
  ad as X,
  U as ge,
  aA as Z,
  h as R,
  x as fe,
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
  p as Pe,
  P as Re,
  aG as Ee,
  aH as Be,
  am as Ne,
  aI as Le
} from "./BUCBPQur.js";
import {
  _ as Ke
} from "./DPyetOXS.js";
import {
  _ as U,
  a as Q,
  b as Me
} from "./CCxh3ZOG.js";
import {
  _ as Oe
} from "./CcJHhmZS.js";
import {
  _ as je
} from "./DPx_3gJh.js";
import {
  _ as De
} from "./x_emrwD9.js";
import {
  _ as ee
} from "./DWxSe2PA.js";
import "./7BDvwr_6.js";
import "./B0r38c3I.js";
import "./DCHkIogK.js";
import "./DOm-kdMo.js";
import "./DAnRwYoM.js";
import "./BeiJi78z.js";
import "./Bu1yEy8l.js";
const Fe = {
    class: "pages-tribe-external-index-page"
  },
  Ve = y({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(c) {
      const e = S().resolve({
          name: "tribe-join"
        }).fullPath,
        o = S().resolve({
          name: "tribe-slug"
        }).fullPath,
        s = t => D().main.tribeLogoClick(t);
      return (t, n) => {
        const i = E,
          u = oe,
          p = W,
          k = Ke;
        return l(), _("div", Fe, [t.myTribe ? (l(), _(L, {
          key: 1
        }, [t.myTribe.type === "validating" ? (l(), b(u, {
          key: 0,
          to: a(e),
          class: "validating hex-center",
          onClick: n[0] || (n[0] = g => s(t.myTribe.type))
        }, {
          default: C(() => n[4] || (n[4] = [m("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (l(), b(u, {
          key: 1,
          to: a(e),
          class: "join hex-center",
          onClick: n[1] || (n[1] = g => s(t.myTribe.type))
        }, {
          default: C(() => [r(p, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_created" ? (l(), b(u, {
          key: 2,
          to: a(e),
          class: "error hex-center",
          onClick: n[2] || (n[2] = g => s(t.myTribe.type))
        }, {
          default: C(() => [r(p, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "ok" ? (l(), b(u, {
          key: 3,
          to: a(o),
          class: "ok",
          onClick: n[3] || (n[3] = g => s(t.myTribe.type))
        }, {
          default: C(() => [r(k, {
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
  Ue = v(Ve, [
    ["__scopeId", "data-v-ef3e1f1f"]
  ]),
  He = {
    class: "pages-index-banner-profile-tribe"
  },
  Ye = y({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {}
    },
    setup(c) {
      const e = ae(() => {
        le().public.ENVIRONMENT !== "prod" && S().push({
          name: "debug"
        })
      }, 5);
      return (o, s) => {
        const t = ne,
          n = Ue;
        return l(), _("div", He, [r(t, {
          small: "",
          onClick: s[0] || (s[0] = i => a(e)())
        }), r(n, {
          "my-tribe": o.myTribe
        }, null, 8, ["my-tribe"])])
      }
    }
  }),
  ze = v(Ye, [
    ["__scopeId", "data-v-e7e86efc"]
  ]),
  We = {
    class: "pages-index-banner-wallet"
  },
  Ge = {
    key: 1,
    class: "connected"
  },
  qe = {
    class: "ton-label"
  },
  Je = {
    class: "label"
  },
  Xe = y({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(c) {
      const e = c,
        o = ie(re.MAIN),
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
          throw e.wallet, G("Invalid wallet status")
        });
      return (t, n) => {
        const i = E,
          u = W;
        return l(), _("div", We, [a(s).type === "skeleton" ? (l(), b(i, {
          key: 0,
          class: "skeleton"
        })) : a(s).type === "connected" ? (l(), _("div", Ge, [m("div", qe, [r(u, {
          name: "ton-logo",
          class: "logo"
        }), m("div", Je, $(a(s).shortAddress), 1)]), (l(), b(ce(a(s).balance), {
          class: "balance"
        }))])) : a(s).type === "connect" ? (l(), _("div", {
          key: 2,
          class: "connect-label",
          onClick: n[0] || (n[0] = p => a(o).runConnectionFlow())
        }, [r(u, {
          name: "wallet",
          class: "icon"
        }), m("div", null, $(("t" in t ? t.t : a(d))("wallet.connect.btn")), 1)])) : I("", !0)])
      }
    }
  }),
  Ze = v(Xe, [
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
  nt = y({
    __name: "BannerControls",
    setup(c) {
      const e = h(() => [{
        title: d("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => S().push({
          name: "memepad-new",
          query: {
            memepadFrom: H.MAIN,
            memepadNewFrom: ue.MAIN
          }
        })
      }, {
        title: d("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => S().push({
          name: "memepad",
          query: {
            memepadFrom: H.MAIN
          }
        })
      }, {
        title: d("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          D().main.controlsTradingBotClick(), F().openTradingBot()
        }
      }]);
      return (o, s) => {
        const t = U;
        return l(), _("div", Qe, [(l(!0), _(L, null, V(a(e), (n, i) => (l(), _("button", {
          key: i,
          class: "control reset",
          onClick: u => n.onClick()
        }, [m("div", tt, [r(t, {
          name: n.image,
          class: "image"
        }, null, 8, ["name"])]), m("div", st, $(n.title), 1)], 8, et))), 128))])
      }
    }
  }),
  ot = v(nt, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  at = {
    class: "pages-index-banner"
  },
  lt = y({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(c) {
      return (e, o) => {
        const s = ze,
          t = Ze,
          n = ot;
        return l(), _("div", at, [r(s, {
          "my-tribe": e.myTribe,
          class: "profile"
        }, null, 8, ["my-tribe"]), r(t, {
          wallet: e.wallet
        }, null, 8, ["wallet"]), r(n, {
          class: "controls"
        })])
      }
    }
  }),
  it = v(lt, [
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
  pt = y({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(c) {
      const e = c,
        o = _e(),
        s = (n, i) => async () => {
          const u = await e.dailyRewardClaim();
          ye(u, {
            Err: () => o.error(d("base.claim_error")),
            Ok: p => {
              n === j.RESTORE && o.success(d("daily_reward.streak_restored", {
                days: i
              })), o.success(`You’ve got ${ve(p.claimedReward.points)} BP`), o.success(z("span", ["You’ve got ", z("i", {
                class: "ticket"
              }), ` ${p.claimedReward.passes}`])), F().makeConfetti()
            }
          })
        }, t = h(() => {
          if (e.dailyReward === void 0) return;
          const n = e.dailyReward.currentStreakDays,
            i = `${n}-${d("base.n.days",n)}`;
          if (e.dailyReward.claim === j.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: d("daily_reward.missed"),
            subtitle: Y(d("daily_reward.restore_current_streak", {
              days: i
            })),
            claim: {
              label: d("base.restore"),
              white: !0,
              can: !0,
              fn: s(e.dailyReward.claim, i)
            }
          };
          const u = (() => {
            const k = de().ms100ticker.value;
            if (!k) return pe();
            const g = me(e.dailyReward.canClaimAt - k, "letters");
            return Y(d("base.claim_next_in", {
              time: g
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: d("daily_reward.current_streak", {
              days: i
            }),
            subtitle: u,
            claim: {
              can: e.dailyReward.claim !== j.UNAVAILABLE,
              fn: s(e.dailyReward.claim, i)
            }
          }
        });
      return (n, i) => {
        const u = E,
          p = U,
          k = Oe;
        return l(), _("div", rt, [a(t) ? (l(), _("div", ct, [r(p, {
          name: a(t).icon,
          class: "icon"
        }, null, 8, ["name"]), m("div", ut, [m("div", _t, $(a(t).title), 1), ("isOk" in n ? n.isOk : a(be))(a(t).subtitle) ? (l(), _("div", dt, $(a(t).subtitle.data), 1)) : (l(), b(u, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), a(t).claim ? (l(), b(k, {
          key: 0,
          label: a(t).claim.label,
          "can-claim": a(t).claim.can,
          "claim-fn": a(t).claim.fn,
          style: q(a(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : I("", !0)])) : (l(), b(u, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  mt = v(pt, [
    ["__scopeId", "data-v-8b85c7ba"]
  ]),
  bt = {
    class: "kit-stories-src-counter"
  },
  yt = y({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(c) {
      ke(s => ({
        "9db269f8": s.count
      }));
      const e = c,
        o = h(() => [...new Array(e.count)].map((s, t) => t < e.current ? {
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
      return (s, t) => (l(), _("div", bt, [(l(!0), _(L, null, V(a(o), n => (l(), _("div", {
        key: n.key,
        class: J(["progress", [`is-state-${n.state}`]]),
        style: q(n.state === "current" ? {
          "background-position-x": `-${n.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  vt = v(yt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  kt = {
    class: "kit-stories-shared-background"
  },
  gt = ["poster", "src"],
  ft = ["src"],
  $t = y({
    __name: "Background",
    props: {
      background: {}
    },
    setup(c) {
      return (e, o) => {
        const s = je;
        return l(), _("div", kt, [e.background.type === "video" ? (l(), _("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, gt)) : e.background.type === "image" ? (l(), _("img", {
          key: 1,
          src: e.background.src
        }, null, 8, ft)) : e.background.type === "stars" ? (l(), b(s, {
          key: 2,
          class: "stars"
        })) : I("", !0)])
      }
    }
  }),
  wt = v($t, [
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
  It = y({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(c) {
      return (e, o) => (l(), _("div", ht, [m("div", St, $(e.layout.title), 1), m("div", Tt, $(e.layout.subtitle), 1)]))
    }
  }),
  At = v(It, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  Ct = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  xt = {
    class: "animoji-container"
  },
  Pt = {
    class: "content-container"
  },
  Rt = {
    class: "title"
  },
  Et = {
    class: "subtitle"
  },
  Bt = y({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(c) {
      return (e, o) => {
        const s = X;
        return l(), _("div", Ct, [m("div", xt, [r(s, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), m("div", Pt, [m("div", Rt, $(e.layout.title), 1), m("div", Et, $(e.layout.subtitle), 1)])])
      }
    }
  }),
  Nt = v(Bt, [
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
    setup(c, {
      emit: e
    }) {
      const o = c,
        s = e,
        t = h(() => o.button.type === "next" ? o.isLast ? d("base.close") : d("base.next") : o.button.label),
        n = () => {
          if (o.button.type === "next") R().$webApp.HapticFeedback.impactOccurred("light"), s("next");
          else if (o.button.type === "local") S().push(o.button.link);
          else if (o.button.type === "external") R().$webApp.openLink(o.button.link);
          else if (o.button.type === "telegram") R().$webApp.openTelegramLink(o.button.link);
          else throw o.button, G("Unknown button type")
        };
      return (i, u) => {
        const p = fe;
        return l(), b(p, {
          label: a(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: a(ge).LARGE,
          onClick: u[0] || (u[0] = Z(k => n(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Kt = v(Lt, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  Mt = {
    class: "kit-stories-src-story"
  },
  Ot = {
    class: "content"
  },
  jt = {
    class: "layout"
  },
  Dt = {
    class: "button"
  },
  Ft = y({
    __name: "Story",
    props: {
      story: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(c) {
      return (e, o) => {
        const s = wt,
          t = At,
          n = Nt,
          i = Kt;
        return l(), _("div", Mt, [r(s, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), m("div", Ot, [m("div", jt, [e.story.layout.type === "TitleSubtitle" ? (l(), b(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (l(), b(n, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : I("", !0)]), m("div", Dt, [e.story.button ? (l(), b(i, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: o[0] || (o[0] = u => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : I("", !0)])])])
      }
    }
  }),
  Vt = v(Ft, [
    ["__scopeId", "data-v-132900fe"]
  ]),
  Ut = (c, e) => {
    const o = c,
      s = x(c),
      t = h(() => 1 - s.value / o);
    let n = 0,
      i;
    const u = () => {
        n = Date.now(), i = we(() => {
          const w = Date.now(),
            T = w - n;
          n = w, s.value = Math.max(s.value - T, 0), s.value <= 0 && (p(), e())
        }, 100)
      },
      p = () => {
        i && (clearInterval(i), i = void 0)
      },
      k = () => {
        if (i) {
          p();
          const w = Date.now() - n;
          s.value = Math.max(s.value - w, 0)
        }
      },
      g = () => u();
    return u(), {
      timeToExpire: $e(s),
      progress: t,
      destroy: p,
      pause: k,
      resume: g
    }
  },
  Ht = 150,
  Yt = y({
    __name: "Stories",
    props: {
      stories: {}
    },
    emits: ["close"],
    setup(c, {
      emit: e
    }) {
      const o = c,
        s = e,
        t = x(0),
        n = () => {
          t.value < o.stories.length - 1 ? (t.value += 1, k()) : s("close")
        },
        i = () => {
          t.value > 0 ? (t.value -= 1, k()) : s("close")
        },
        u = () => Ut(5e3, n),
        p = he(u()),
        k = () => {
          p.value.destroy(), p.value = u()
        },
        g = x(),
        w = Se(),
        T = x(!1),
        K = x(!1),
        te = () => {
          T.value = !1, K.value = !1, w.set(() => {
            p.value.pause(), T.value = !0, K.value = !0
          }, Ht)
        },
        M = () => {
          w.destroy(), T.value && (p.value.resume(), T.value = !1)
        },
        se = P => {
          if (T.value || K.value || !g.value) return;
          const {
            width: f,
            left: O
          } = g.value.getBoundingClientRect(), B = P.clientX - O, N = f / 3;
          B < N ? i() : B > N * 2 && n()
        };
      return Te(() => {
        w.destroy(), p.value.destroy()
      }), (P, f) => {
        const O = vt,
          B = Vt,
          N = De;
        return l(), b(N, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: C(() => [m("div", {
            ref_key: "storiesRef",
            ref: g,
            class: "kit-stories-src-stories",
            onPointerdown: f[1] || (f[1] = Z(A => te(), ["prevent"])),
            onPointerup: f[2] || (f[2] = A => M()),
            onPointercancel: f[3] || (f[3] = A => M()),
            onPointerleave: f[4] || (f[4] = A => M()),
            onClick: f[5] || (f[5] = A => se(A))
          }, [r(O, {
            current: a(t),
            "current-progress": a(p).progress.value,
            count: P.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (l(), b(B, {
            key: a(t),
            story: P.stories[a(t)],
            "is-last": a(t) === P.stories.length - 1,
            onNext: f[0] || (f[0] = A => n())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  zt = v(Yt, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  Wt = y({
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
      return (o, s) => {
        const t = zt;
        return l(), b(Ce, {
          name: "opacity-transition"
        }, {
          default: C(() => [e.value ? (l(), b(t, {
            key: 0,
            stories: o.set.stories,
            class: "kit-stories",
            onClose: s[0] || (s[0] = n => e.value = !1)
          }, null, 8, ["stories"])) : I("", !0)]),
          _: 1
        })
      }
    }
  }),
  Gt = v(Wt, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  qt = {
    class: "pages-index-new-season-banner"
  },
  Jt = {
    class: "banner"
  },
  Xt = {
    class: "content"
  },
  Zt = {
    class: "title"
  },
  Qt = {
    class: "subtitle"
  },
  es = y({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(c) {
      const e = c,
        o = x(e.value.showOnStart);
      return xe(o, s => s && e.value.onShowed(), {
        immediate: !0
      }), (s, t) => {
        const n = Q,
          i = X,
          u = Gt;
        return l(), _("div", qt, [m("div", Jt, [m("div", Xt, [m("div", Zt, $(("t" in s ? s.t : a(d))("index.season_2.banner.title")), 1), m("div", Qt, $(("t" in s ? s.t : a(d))("index.season_2.banner.subtitle")), 1), r(n, {
          state: "default",
          label: ("t" in s ? s.t : a(d))("index.season_2.banner.btn"),
          type: "dark",
          class: "btn",
          onClick: t[0] || (t[0] = p => o.value = !0)
        }, null, 8, ["label"])]), r(i, {
          name: "animations/Moon",
          class: "animation"
        })]), r(u, {
          modelValue: a(o),
          "onUpdate:modelValue": t[1] || (t[1] = p => Pe(o) ? o.value = p : null),
          set: s.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  ts = v(es, [
    ["__scopeId", "data-v-fef03bb2"]
  ]),
  ss = {
    class: "pages-wallet-asset-skeleton"
  },
  ns = {
    class: "content"
  },
  os = y({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(c) {
      return (e, o) => {
        const s = E;
        return l(), _("div", ss, [(l(!0), _(L, null, V(e.count, t => (l(), _("div", {
          key: t,
          class: "skeleton"
        }, [r(s, {
          rounded: "",
          class: "logo"
        }), m("div", ns, [r(s, {
          class: "title"
        }), r(s, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  as = v(os, [
    ["__scopeId", "data-v-26805825"]
  ]),
  ls = {
    class: "pages-index-points"
  },
  is = y({
    __name: "IndexPoints",
    props: {
      mp: {},
      bp: {}
    },
    setup(c) {
      const e = h(() => S().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (o, s) => {
        const t = ee,
          n = as,
          i = Me;
        return l(), _("div", ls, [r(t, {
          label: ("t" in o ? o.t : a(d))("wallet.points.title"),
          "full-path": a(e)
        }, null, 8, ["label", "full-path"]), !o.mp || !o.bp ? (l(), b(n, {
          key: 0,
          count: 2
        })) : (l(), b(i, {
          key: 1,
          points: [o.mp, o.bp]
        }, null, 8, ["points"]))])
      }
    }
  }),
  rs = v(is, [
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
  ms = y({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(c) {
      const e = c,
        o = h(() => {
          const t = (() => {
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
      return (t, n) => {
        const i = ee,
          u = U,
          p = E,
          k = Q;
        return l(), _("div", {
          class: J(["pages-index-game", `is-background-${a(o).background}`])
        }, [r(i, {
          label: ("t" in t ? t.t : a(d))("base.game")
        }, null, 8, ["label"]), a(o).type === "skeleton" ? (l(), _("div", cs, [r(u, {
          name: a(o).image,
          class: "icon"
        }, null, 8, ["name"]), r(p, {
          secondary: "",
          class: "skeleton-title"
        }), r(k, {
          label: ("t" in t ? t.t : a(d))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (l(), _("div", us, [r(u, {
          name: a(o).image,
          class: "icon"
        }, null, 8, ["name"]), m("div", _s, [m("div", ds, $(("t" in t ? t.t : a(d))("game.card.title")), 1), m("div", ps, $(a(o).pp) + " Play passes", 1)]), r(k, {
          label: ("t" in t ? t.t : a(d))("base.play"),
          state: "default",
          type: "white",
          class: "pill",
          disabled: a(o).disabled,
          onClick: n[0] || (n[0] = g => s())
        }, null, 8, ["label", "disabled"])]))], 2)
      }
    }
  }),
  bs = v(ms, [
    ["__scopeId", "data-v-7c6add22"]
  ]),
  ys = () => {
    const c = Re(),
      e = Ee(),
      o = Be(),
      s = h(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      n = {
        set: vs(),
        showOnStart: !R().$webApp.storage.local.get(t),
        onShowed: () => {
          R().$webApp.storage.local.set(t, "true"), D().main.season2StoriesAppear()
        }
      };
    return {
      dailyReward: o,
      myTribe: s,
      season2Stories: n,
      symbols: h(() => c.pointSymbols.value),
      wallet: h(() => c.wallet.value)
    }
  },
  vs = () => ({
    stories: [{
      background: {
        type: "video",
        preview: Ne("index/season-2-intro-preview"),
        src: Le("index/season-2-intro.mp4")
      },
      layout: {
        type: "TitleSubtitle",
        title: d("stories.season_2.slide_1.title"),
        subtitle: d("stories.season_2.slide_1.subtitle")
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
        title: d("stories.season_2.slide_2.title"),
        subtitle: d("stories.season_2.slide_2.subtitle")
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
        title: d("stories.season_2.slide_3.title"),
        subtitle: d("stories.season_2.slide_3.subtitle")
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
        title: d("stories.season_2.slide_4.title"),
        subtitle: d("stories.season_2.slide_4.subtitle")
      },
      button: {
        type: "next"
      }
    }]
  }),
  ks = {
    class: "index-page page"
  },
  gs = y({
    __name: "index",
    setup(c) {
      const e = ys();
      return (o, s) => {
        var k, g, w;
        const t = it,
          n = mt,
          i = ts,
          u = rs,
          p = bs;
        return l(), _("div", ks, [r(t, {
          "my-tribe": a(e).myTribe.value,
          wallet: a(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), r(n, {
          "daily-reward": a(e).dailyReward.reward.value,
          "daily-reward-claim": a(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), r(i, {
          value: a(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), r(u, {
          mp: (k = a(e).symbols.value) == null ? void 0 : k.mp,
          bp: (g = a(e).symbols.value) == null ? void 0 : g.bp
        }, null, 8, ["mp", "bp"]), r(p, {
          pp: (w = a(e).symbols.value) == null ? void 0 : w.pp
        }, null, 8, ["pp"])])
      }
    }
  }),
  Ks = v(gs, [
    ["__scopeId", "data-v-21936024"]
  ]);
export {
  Ks as
  default
};