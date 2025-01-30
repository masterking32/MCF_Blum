import {
  _ as se
} from "./E8GOrJlS.js";
import {
  _ as B
} from "./DSCwoL6x.js";
import {
  d as y,
  ad as S,
  o as l,
  c as _,
  G as b,
  F as E,
  H as I,
  a as m,
  e as a,
  b as r,
  D as x,
  a0 as V,
  I as ne,
  _ as z,
  f as v,
  ar as oe,
  l as ae,
  as as le,
  at as ie,
  j as h,
  W as Y,
  t as $,
  ai as re,
  z as d,
  Z as F,
  q as M,
  $ as ce,
  au as D,
  Y as H,
  J as ue,
  av as _e,
  L as de,
  a2 as pe,
  aw as G,
  ax as me,
  M as be,
  ah as W,
  ay as ye,
  n as q,
  ae as Z,
  V as ve,
  az as J,
  h as R,
  x as ke,
  K as A,
  aA as ge,
  aB as fe,
  aC as $e,
  aD as we,
  U as he,
  ao as Se,
  ap as Te,
  aa as xe,
  P as Ce,
  p as Ie,
  O as Ae,
  aE as Pe,
  aF as Re,
  an as Be,
  aG as Ke
} from "./guWQ5rpf.js";
import {
  _ as Le
} from "./DPDc0K5p.js";
import {
  _ as U,
  a as X,
  b as Ee
} from "./BQke5Eur.js";
import {
  _ as Ne
} from "./srMT2O5N.js";
import {
  _ as je
} from "./DbfyaCGW.js";
import {
  _ as Oe
} from "./ToJ9CiAc.js";
import {
  _ as Q
} from "./D5HEpnfK.js";
import "./B5woiiH4.js";
import "./DhzI7PK4.js";
import "./Bg38qLCE.js";
import "./B9nPrNBv.js";
import "./C2LClDVI.js";
import "./CFmDZOW5.js";
import "./Qr_EECG-.js";
const De = {
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
        s = t => V().main.tribeLogoClick(t);
      return (t, n) => {
        const i = B,
          u = ne,
          p = z,
          k = Le;
        return l(), _("div", De, [t.myTribe ? (l(), _(E, {
          key: 1
        }, [t.myTribe.type === "validating" ? (l(), b(u, {
          key: 0,
          to: a(e),
          class: "validating hex-center",
          onClick: n[0] || (n[0] = g => s(t.myTribe.type))
        }, {
          default: I(() => n[4] || (n[4] = [m("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (l(), b(u, {
          key: 1,
          to: a(e),
          class: "join hex-center",
          onClick: n[1] || (n[1] = g => s(t.myTribe.type))
        }, {
          default: I(() => [r(p, {
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
          default: I(() => [r(p, {
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
          default: I(() => [r(k, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : x("", !0)], 64)) : (l(), b(i, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  Fe = v(Ve, [
    ["__scopeId", "data-v-ef3e1f1f"]
  ]),
  Me = {
    class: "pages-index-banner-profile-tribe"
  },
  Ue = y({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {}
    },
    setup(c) {
      const e = oe(() => {
        ae().public.ENVIRONMENT !== "prod" && S().push({
          name: "debug"
        })
      }, 5);
      return (o, s) => {
        const t = se,
          n = Fe;
        return l(), _("div", Me, [r(t, {
          small: "",
          onClick: s[0] || (s[0] = i => a(e)())
        }), r(n, {
          "my-tribe": o.myTribe
        }, null, 8, ["my-tribe"])])
      }
    }
  }),
  He = v(Ue, [
    ["__scopeId", "data-v-e7e86efc"]
  ]),
  We = {
    class: "pages-index-banner-wallet"
  },
  ze = {
    key: 1,
    class: "connected"
  },
  Ye = {
    class: "ton-label"
  },
  Ge = {
    class: "label"
  },
  qe = y({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(c) {
      const e = c,
        o = le(ie.MAIN),
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
          throw e.wallet, Y("Invalid wallet status")
        });
      return (t, n) => {
        const i = B,
          u = z;
        return l(), _("div", We, [a(s).type === "skeleton" ? (l(), b(i, {
          key: 0,
          class: "skeleton"
        })) : a(s).type === "connected" ? (l(), _("div", ze, [m("div", Ye, [r(u, {
          name: "ton-logo",
          class: "logo"
        }), m("div", Ge, $(a(s).shortAddress), 1)]), (l(), b(re(a(s).balance), {
          class: "balance"
        }))])) : a(s).type === "connect" ? (l(), _("div", {
          key: 2,
          class: "connect-label",
          onClick: n[0] || (n[0] = p => a(o).runConnectionFlow())
        }, [r(u, {
          name: "wallet",
          class: "icon"
        }), m("div", null, $(("t" in t ? t.t : a(d))("wallet.connect.btn")), 1)])) : x("", !0)])
      }
    }
  }),
  Ze = v(qe, [
    ["__scopeId", "data-v-1b480664"]
  ]),
  Je = {
    class: "pages-index-banner-controls"
  },
  Xe = ["onClick"],
  Qe = {
    class: "image-container"
  },
  et = {
    class: "title"
  },
  tt = y({
    __name: "BannerControls",
    setup(c) {
      const e = h(() => [{
        title: d("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => S().push({
          name: "memepad-new"
        })
      }, {
        title: d("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => S().push({
          name: "memepad"
        })
      }, {
        title: d("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          V().main.controlsTradingBotClick(), F().openTradingBot()
        }
      }]);
      return (o, s) => {
        const t = U;
        return l(), _("div", Je, [(l(!0), _(E, null, M(a(e), (n, i) => (l(), _("button", {
          key: i,
          class: "control reset",
          onClick: u => n.onClick()
        }, [m("div", Qe, [r(t, {
          name: n.image,
          class: "image"
        }, null, 8, ["name"])]), m("div", et, $(n.title), 1)], 8, Xe))), 128))])
      }
    }
  }),
  st = v(tt, [
    ["__scopeId", "data-v-7a589948"]
  ]),
  nt = {
    class: "pages-index-banner"
  },
  ot = y({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(c) {
      return (e, o) => {
        const s = He,
          t = Ze,
          n = st;
        return l(), _("div", nt, [r(s, {
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
  at = v(ot, [
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
  _t = y({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(c) {
      const e = c,
        o = ce(),
        s = (n, i) => async () => {
          const u = await e.dailyRewardClaim();
          me(u, {
            Err: () => o.error(d("base.claim_error")),
            Ok: p => {
              n === D.RESTORE && o.success(d("daily_reward.streak_restored", {
                days: i
              })), o.success(`You’ve got ${be(p.claimedReward.points)} BP`), o.success(W("span", ["You’ve got ", W("i", {
                class: "ticket"
              }), ` ${p.claimedReward.passes}`])), F().makeConfetti()
            }
          })
        }, t = h(() => {
          if (e.dailyReward === void 0) return;
          const n = e.dailyReward.currentStreakDays,
            i = `${n}-${d("base.n.days",n)}`;
          if (e.dailyReward.claim === D.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: d("daily_reward.missed"),
            subtitle: H(d("daily_reward.restore_current_streak", {
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
            const k = ue().ms100ticker.value;
            if (!k) return _e();
            const g = de(e.dailyReward.canClaimAt - k, "letters");
            return H(d("base.claim_next_in", {
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
              can: e.dailyReward.claim !== D.UNAVAILABLE,
              fn: s(e.dailyReward.claim, i)
            }
          }
        });
      return (n, i) => {
        const u = B,
          p = U,
          k = Ne;
        return l(), _("div", lt, [a(t) ? (l(), _("div", it, [r(p, {
          name: a(t).icon,
          class: "icon"
        }, null, 8, ["name"]), m("div", rt, [m("div", ct, $(a(t).title), 1), ("isOk" in n ? n.isOk : a(pe))(a(t).subtitle) ? (l(), _("div", ut, $(a(t).subtitle.data), 1)) : (l(), b(u, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), a(t).claim ? (l(), b(k, {
          key: 0,
          label: a(t).claim.label,
          "can-claim": a(t).claim.can,
          "claim-fn": a(t).claim.fn,
          style: G(a(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : x("", !0)])) : (l(), b(u, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  dt = v(_t, [
    ["__scopeId", "data-v-8b85c7ba"]
  ]),
  pt = {
    class: "kit-stories-src-counter"
  },
  mt = y({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(c) {
      ye(s => ({
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
      return (s, t) => (l(), _("div", pt, [(l(!0), _(E, null, M(a(o), n => (l(), _("div", {
        key: n.key,
        class: q(["progress", [`is-state-${n.state}`]]),
        style: G(n.state === "current" ? {
          "background-position-x": `-${n.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  bt = v(mt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  yt = {
    class: "kit-stories-shared-background"
  },
  vt = ["poster", "src"],
  kt = ["src"],
  gt = y({
    __name: "Background",
    props: {
      background: {}
    },
    setup(c) {
      return (e, o) => {
        const s = je;
        return l(), _("div", yt, [e.background.type === "video" ? (l(), _("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, vt)) : e.background.type === "image" ? (l(), _("img", {
          key: 1,
          src: e.background.src
        }, null, 8, kt)) : e.background.type === "stars" ? (l(), b(s, {
          key: 2,
          class: "stars"
        })) : x("", !0)])
      }
    }
  }),
  ft = v(gt, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  $t = {
    class: "kit-stories-layouts-title-subtitle"
  },
  wt = {
    class: "title"
  },
  ht = {
    class: "subtitle"
  },
  St = y({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(c) {
      return (e, o) => (l(), _("div", $t, [m("div", wt, $(e.layout.title), 1), m("div", ht, $(e.layout.subtitle), 1)]))
    }
  }),
  Tt = v(St, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  xt = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  Ct = {
    class: "animoji-container"
  },
  It = {
    class: "content-container"
  },
  At = {
    class: "title"
  },
  Pt = {
    class: "subtitle"
  },
  Rt = y({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(c) {
      return (e, o) => {
        const s = Z;
        return l(), _("div", xt, [m("div", Ct, [r(s, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), m("div", It, [m("div", At, $(e.layout.title), 1), m("div", Pt, $(e.layout.subtitle), 1)])])
      }
    }
  }),
  Bt = v(Rt, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  Kt = y({
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
          else throw o.button, Y("Unknown button type")
        };
      return (i, u) => {
        const p = ke;
        return l(), b(p, {
          label: a(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: a(ve).LARGE,
          onClick: u[0] || (u[0] = J(k => n(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Lt = v(Kt, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  Et = {
    class: "kit-stories-src-story"
  },
  Nt = {
    class: "content"
  },
  jt = {
    class: "layout"
  },
  Ot = {
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
    setup(c) {
      return (e, o) => {
        const s = ft,
          t = Tt,
          n = Bt,
          i = Lt;
        return l(), _("div", Et, [r(s, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), m("div", Nt, [m("div", jt, [e.story.layout.type === "TitleSubtitle" ? (l(), b(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (l(), b(n, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : x("", !0)]), m("div", Ot, [e.story.button ? (l(), b(i, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: o[0] || (o[0] = u => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : x("", !0)])])])
      }
    }
  }),
  Vt = v(Dt, [
    ["__scopeId", "data-v-132900fe"]
  ]),
  Ft = (c, e) => {
    const o = c,
      s = A(c),
      t = h(() => 1 - s.value / o);
    let n = 0,
      i;
    const u = () => {
        n = Date.now(), i = fe(() => {
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
      timeToExpire: ge(s),
      progress: t,
      destroy: p,
      pause: k,
      resume: g
    }
  },
  Mt = 150,
  Ut = y({
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
        t = A(0),
        n = () => {
          t.value < o.stories.length - 1 ? (t.value += 1, k()) : s("close")
        },
        i = () => {
          t.value > 0 ? (t.value -= 1, k()) : s("close")
        },
        u = () => Ft(5e3, n),
        p = $e(u()),
        k = () => {
          p.value.destroy(), p.value = u()
        },
        g = A(),
        w = we(),
        T = A(!1),
        N = A(!1),
        ee = () => {
          T.value = !1, N.value = !1, w.set(() => {
            p.value.pause(), T.value = !0, N.value = !0
          }, Mt)
        },
        j = () => {
          w.destroy(), T.value && (p.value.resume(), T.value = !1)
        },
        te = P => {
          if (T.value || N.value || !g.value) return;
          const {
            width: f,
            left: O
          } = g.value.getBoundingClientRect(), K = P.clientX - O, L = f / 3;
          K < L ? i() : K > L * 2 && n()
        };
      return he(() => {
        w.destroy(), p.value.destroy()
      }), (P, f) => {
        const O = bt,
          K = Vt,
          L = Oe;
        return l(), b(L, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: I(() => [m("div", {
            ref_key: "storiesRef",
            ref: g,
            class: "kit-stories-src-stories",
            onPointerdown: f[1] || (f[1] = J(C => ee(), ["prevent"])),
            onPointerup: f[2] || (f[2] = C => j()),
            onPointercancel: f[3] || (f[3] = C => j()),
            onPointerleave: f[4] || (f[4] = C => j()),
            onClick: f[5] || (f[5] = C => te(C))
          }, [r(O, {
            current: a(t),
            "current-progress": a(p).progress.value,
            count: P.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (l(), b(K, {
            key: a(t),
            story: P.stories[a(t)],
            "is-last": a(t) === P.stories.length - 1,
            onNext: f[0] || (f[0] = C => n())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  Ht = v(Ut, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  Wt = y({
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
    setup(c) {
      const e = Te(c, "modelValue");
      return (o, s) => {
        const t = Ht;
        return l(), b(xe, {
          name: "opacity-transition"
        }, {
          default: I(() => [e.value ? (l(), b(t, {
            key: 0,
            stories: o.set.stories,
            class: "kit-stories",
            onClose: s[0] || (s[0] = n => e.value = !1)
          }, null, 8, ["stories"])) : x("", !0)]),
          _: 1
        })
      }
    }
  }),
  zt = v(Wt, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  Yt = {
    class: "pages-index-new-season-banner"
  },
  Gt = {
    class: "banner"
  },
  qt = {
    class: "content"
  },
  Zt = {
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
      const e = c,
        o = A(e.value.showOnStart);
      return Ce(o, s => s && e.value.onShowed(), {
        immediate: !0
      }), (s, t) => {
        const n = X,
          i = Z,
          u = zt;
        return l(), _("div", Yt, [m("div", Gt, [m("div", qt, [m("div", Zt, $(("t" in s ? s.t : a(d))("index.season_2.banner.title")), 1), m("div", Jt, $(("t" in s ? s.t : a(d))("index.season_2.banner.subtitle")), 1), r(n, {
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
          "onUpdate:modelValue": t[1] || (t[1] = p => Ie(o) ? o.value = p : null),
          set: s.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Qt = v(Xt, [
    ["__scopeId", "data-v-fef03bb2"]
  ]),
  es = {
    class: "pages-wallet-asset-skeleton"
  },
  ts = {
    class: "content"
  },
  ss = y({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(c) {
      return (e, o) => {
        const s = B;
        return l(), _("div", es, [(l(!0), _(E, null, M(e.count, t => (l(), _("div", {
          key: t,
          class: "skeleton"
        }, [r(s, {
          rounded: "",
          class: "logo"
        }), m("div", ts, [r(s, {
          class: "title"
        }), r(s, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  ns = v(ss, [
    ["__scopeId", "data-v-26805825"]
  ]),
  os = {
    class: "pages-index-points"
  },
  as = y({
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
        const t = Q,
          n = ns,
          i = Ee;
        return l(), _("div", os, [r(t, {
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
  ls = v(as, [
    ["__scopeId", "data-v-88129733"]
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
  ds = y({
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
        const i = Q,
          u = U,
          p = B,
          k = X;
        return l(), _("div", {
          class: q(["pages-index-game", `is-background-${a(o).background}`])
        }, [r(i, {
          label: ("t" in t ? t.t : a(d))("base.game")
        }, null, 8, ["label"]), a(o).type === "skeleton" ? (l(), _("div", is, [r(u, {
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
        }, null, 8, ["label"])])) : (l(), _("div", rs, [r(u, {
          name: a(o).image,
          class: "icon"
        }, null, 8, ["name"]), m("div", cs, [m("div", us, $(("t" in t ? t.t : a(d))("game.card.title")), 1), m("div", _s, $(a(o).pp) + " Play passes", 1)]), r(k, {
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
  ps = v(ds, [
    ["__scopeId", "data-v-972ed848"]
  ]),
  ms = () => {
    const c = Ae(),
      e = Pe(),
      o = Re(),
      s = h(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      n = {
        set: bs(),
        showOnStart: !R().$webApp.storage.local.get(t),
        onShowed: () => {
          R().$webApp.storage.local.set(t, "true"), V().main.season2StoriesAppear()
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
  bs = () => ({
    stories: [{
      background: {
        type: "video",
        preview: Be("index/season-2-intro-preview"),
        src: Ke("index/season-2-intro.mp4")
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
  ys = {
    class: "index-page page"
  },
  vs = y({
    __name: "index",
    setup(c) {
      const e = ms();
      return (o, s) => {
        var k, g, w;
        const t = at,
          n = dt,
          i = Qt,
          u = ls,
          p = ps;
        return l(), _("div", ys, [r(t, {
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
  Ls = v(vs, [
    ["__scopeId", "data-v-21936024"]
  ]);
export {
  Ls as
  default
};