import {
  _ as ie
} from "./wOye_MSZ.js";
import {
  _ as O
} from "./CabXfDCs.js";
import {
  d as v,
  j as w,
  V as le,
  o as i,
  c as p,
  e as o,
  G as y,
  a as b,
  t as A,
  z as u,
  ah as ve,
  U as X,
  D as E,
  aq as fe,
  ar as ge,
  x as Z,
  f as g,
  ac as B,
  F as R,
  H as T,
  b as m,
  $ as W,
  I as ke,
  _ as Q,
  as as re,
  n as ee,
  at as ce,
  K as x,
  au as $e,
  av as Y,
  a1 as te,
  aw as he,
  Z as j,
  h as L,
  ax as ue,
  ao as _e,
  k as we,
  ay as Se,
  az as Ce,
  m as oe,
  aA as Ae,
  p as de,
  aB as U,
  aC as me,
  Y as V,
  q,
  aD as J,
  X as se,
  J as Te,
  aE as Ie,
  L as xe,
  aF as H,
  aG as Ee,
  M as Pe,
  ag as ae,
  am as M,
  ad as pe,
  aH as Be,
  aI as Re,
  aJ as Ne,
  aK as Me,
  T as Le,
  an as Ke,
  a9 as ze,
  aL as P,
  aM as Ve,
  a8 as Oe,
  a5 as De,
  ab as Fe,
  P as je,
  aN as Ue,
  aO as He
} from "./Cdrd5uYj.js";
import {
  _ as We
} from "./BvXl_bnD.js";
import {
  _ as Ye,
  a as qe,
  b as Ge
} from "./DUDhzfOo.js";
import {
  _ as ne,
  a as be,
  b as Je
} from "./z1C9bJvz.js";
import {
  _ as Xe
} from "./BKZcmpQJ.js";
import {
  _ as Ze
} from "./DL6zreZv.js";
import {
  _ as Qe
} from "./Cdo0kTLJ.js";
import {
  _ as et
} from "./CoyYmVmm.js";
import {
  _ as ye
} from "./CpOTI3Ou.js";
import "./CN60xvOj.js";
import "./JeyGELIn.js";
import "./CHXfFDR_.js";
import "./D-zDcKs5.js";
import "./CsCwSH3m.js";
import "./Conyz2zC.js";
import "./BEFJCiIm.js";
import "./QukbP_ar.js";
import "./BNSx8UGV.js";
const tt = {
    class: "pages-index-banner-wallet"
  },
  nt = {
    key: 1,
    class: "connected"
  },
  ot = {
    class: "label"
  },
  st = v({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(_) {
      const e = _,
        n = () => fe(ge.MAIN).runConnectionFlow(),
        a = w(() => {
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
          throw e.wallet, le("Invalid wallet status")
        });
      return (t, s) => {
        const r = O,
          l = Z;
        return i(), p("div", tt, [o(a).type === "skeleton" ? (i(), y(r, {
          key: 0,
          class: "skeleton"
        })) : o(a).type === "connected" ? (i(), p("div", nt, [b("div", ot, A(("t" in t ? t.t : o(u))("wallet.total_balance")), 1), (i(), y(ve(o(a).balance), {
          class: "balance"
        }))])) : o(a).type === "connect" ? (i(), y(l, {
          key: 2,
          label: ("t" in t ? t.t : o(u))("wallet.connect.btn"),
          size: o(X).SMALL,
          onClick: s[0] || (s[0] = c => n())
        }, null, 8, ["label", "size"])) : E("", !0)])
      }
    }
  }),
  at = g(st, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  it = {
    class: "pages-tribe-external-index-page"
  },
  lt = v({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(_) {
      const e = B().resolve({
          name: "tribe-join"
        }).fullPath,
        n = B().resolve({
          name: "tribe-slug"
        }).fullPath,
        a = t => W().main.tribeLogoClick(t);
      return (t, s) => {
        const r = O,
          l = ke,
          c = Q,
          d = We;
        return i(), p("div", it, [t.myTribe ? (i(), p(R, {
          key: 1
        }, [t.myTribe.type === "validating" ? (i(), y(l, {
          key: 0,
          to: o(e),
          class: "validating hex-center",
          onClick: s[0] || (s[0] = k => a(t.myTribe.type))
        }, {
          default: T(() => s[4] || (s[4] = [b("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (i(), y(l, {
          key: 1,
          to: o(e),
          class: "join hex-center",
          onClick: s[1] || (s[1] = k => a(t.myTribe.type))
        }, {
          default: T(() => [m(c, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_created" ? (i(), y(l, {
          key: 2,
          to: o(e),
          class: "error hex-center",
          onClick: s[2] || (s[2] = k => a(t.myTribe.type))
        }, {
          default: T(() => [m(c, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "ok" ? (i(), y(l, {
          key: 3,
          to: o(n),
          class: "ok",
          onClick: s[3] || (s[3] = k => a(t.myTribe.type))
        }, {
          default: T(() => [m(d, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : E("", !0)], 64)) : (i(), y(r, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  rt = g(lt, [
    ["__scopeId", "data-v-ef3e1f1f"]
  ]),
  ct = {
    class: "field-label"
  },
  ut = {
    class: "field-value"
  },
  _t = v({
    __name: "FieldReadonly",
    props: {
      borderRadius: {
        default: "12px"
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      height: {
        default: "72px"
      },
      icon: {},
      iconSize: {
        default: "24px"
      },
      label: {},
      value: {}
    },
    setup(_) {
      re(n => ({
        bc7bb12e: n.height,
        "0b714ec0": n.borderRadius,
        "4280b9dc": n.iconSize
      }));
      const e = w(() => ({
        field: !0,
        "field--disabled": _.disabled
      }));
      return (n, a) => {
        const t = Q;
        return i(), p("div", {
          class: ee(o(e))
        }, [m(t, {
          name: n.icon,
          class: "field-icon"
        }, null, 8, ["name"]), b("div", ct, A(n.label), 1), b("div", ut, A(n.value), 1)], 2)
      }
    }
  }),
  dt = g(_t, [
    ["__scopeId", "data-v-d2541044"]
  ]),
  mt = v({
    __name: "BannerProfileModalEmailVerify",
    setup(_) {
      const {
        sendEmailAuthProviderVerification: e
      } = ce(), n = x(!1), a = async r => {
        const l = await e({
          captchaToken: r
        });
        if (!te(l)) {
          if (l.code === he.Forbidden) {
            n.value = !0;
            return
          }
          j().error();
          return
        }
        j().success(u("secure_options.message.email_code_sent"))
      }, t = async r => {
        await a(r), n.value = !1
      }, s = () => {
        n.value = !1
      };
      return (r, l) => {
        const c = Ye,
          d = $e("I18nT");
        return o(n) ? (i(), y(c, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: t,
          onReject: s
        })) : (i(), y(d, {
          key: 1,
          tag: "div",
          class: "caption",
          keypath: "secure_options.profile_modal.connect_email.not_verified_caption"
        }, {
          resend: T(() => [b("a", {
            href: "#",
            class: "link",
            onClick: l[0] || (l[0] = Y(k => a(), ["prevent"]))
          }, A(("t" in r ? r.t : o(u))("secure_options.profile_modal.connect_email.not_verified_caption_resend")), 1)]),
          _: 1
        }))
      }
    }
  }),
  pt = g(mt, [
    ["__scopeId", "data-v-7dba19d1"]
  ]),
  bt = v({
    __name: "BannerProfileModalEmailDisconnect",
    emits: ["confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const {
        disconnectEmailAuthProvider: n,
        fetchAuthProviders: a
      } = ce(), t = e, s = () => {
        const r = u("secure_options.profile_modal.disconnect_email.confirm.title"),
          l = u("secure_options.profile_modal.disconnect_email.confirm.description"),
          c = [{
            type: "cancel"
          }, {
            type: "default",
            label: u("secure_options.profile_modal.disconnect_email.confirm.btn"),
            onClick: async () => {
              const d = await n();
              if (!te(d)) {
                j().error();
                return
              }
              t("confirm:disconnect"), await a()
            }
          }];
        L().$webApp.popup(r, l, c)
      };
      return (r, l) => (i(), p("a", {
        href: "#",
        class: "disconnect",
        onClick: Y(s, ["prevent"])
      }, A(("t" in r ? r.t : o(u))("secure_options.profile_modal.disconnect_email.btn")), 1))
    }
  }),
  yt = g(bt, [
    ["__scopeId", "data-v-d5808e4e"]
  ]),
  vt = v({
    __name: "BannerProfileModalFooter",
    emits: ["click:connect-account", "confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const n = e,
        a = ue(),
        t = w(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.hasEmail) ?? !1
        }),
        s = w(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.isEmailVerified) ?? !1
        }),
        r = w(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.emailMasked) ?? ""
        });
      return (l, c) => {
        const d = dt,
          k = pt,
          S = yt,
          f = Z;
        return o(t) ? (i(), p(R, {
          key: 0
        }, [m(d, {
          icon: "email",
          label: ("t" in l ? l.t : o(u))("secure_options.profile_modal.connect_email.label"),
          value: o(r),
          disabled: !o(s)
        }, null, 8, ["label", "value", "disabled"]), o(s) ? E("", !0) : (i(), p(R, {
          key: 0
        }, [m(k), m(S, {
          "onConfirm:disconnect": c[0] || (c[0] = h => n("confirm:disconnect"))
        })], 64))], 64)) : (i(), y(f, {
          key: 1,
          label: ("t" in l ? l.t : o(u))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: o(X).LARGE,
          onClick: c[1] || (c[1] = h => n("click:connect-account"))
        }, null, 8, ["label", "size"]))
      }
    }
  }),
  ft = v({
    __name: "BannerProfileModal",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(_) {
      const e = _e(_, "modelValue"),
        {
          getters: n
        } = we(),
        {
          secureOptionsModals: a
        } = Se(),
        t = ue(),
        s = w(() => {
          var d;
          return ((d = n.getUser.value) == null ? void 0 : d.username) ?? "user"
        }),
        r = w(() => {
          var d;
          return ((d = t.value) == null ? void 0 : d.hasEmail) ?? !1
        }),
        l = () => {
          c(), a.main.show()
        },
        c = () => {
          e.value = !1
        };
      return (d, k) => {
        const S = ie,
          f = vt,
          h = qe,
          I = Ae,
          N = Ge;
        return i(), p(R, null, [m(I, {
          modelValue: e.value,
          "onUpdate:modelValue": k[0] || (k[0] = z => e.value = z)
        }, {
          default: T(() => [m(h, null, Ce({
            header: T(() => [m(S, {
              size: "96px",
              class: "avatar"
            })]),
            title: T(() => [oe(A(o(s)), 1)]),
            footer: T(() => [m(f, {
              "onClick:connectAccount": l,
              "onConfirm:disconnect": c
            })]),
            _: 2
          }, [o(r) ? void 0 : {
            name: "subTitle",
            fn: T(() => [oe(A(("t" in d ? d.t : o(u))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
            key: "0"
          }]), 1024)]),
          _: 1
        }, 8, ["modelValue"]), m(N)], 64)
      }
    }
  }),
  gt = g(ft, [
    ["__scopeId", "data-v-657ce5c0"]
  ]),
  kt = {
    class: "pages-index-banner-profile-tribe"
  },
  $t = v({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      const e = x(!1),
        n = () => {
          e.value = !0
        };
      return (a, t) => {
        const s = ie,
          r = at,
          l = rt,
          c = gt;
        return i(), p("div", kt, [m(s, {
          small: "",
          onClick: n
        }), m(r, {
          wallet: a.wallet
        }, null, 8, ["wallet"]), m(l, {
          "my-tribe": a.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"]), m(c, {
          modelValue: o(e),
          "onUpdate:modelValue": t[0] || (t[0] = d => de(e) ? e.value = d : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  ht = g($t, [
    ["__scopeId", "data-v-c9112e89"]
  ]),
  wt = {
    class: "pages-index-banner-controls"
  },
  St = ["onClick"],
  Ct = {
    class: "image-container"
  },
  At = {
    class: "title"
  },
  Tt = v({
    __name: "BannerControls",
    setup(_) {
      const e = w(() => [{
        title: u("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => B().push({
          name: "memepad-new",
          query: {
            memepadFrom: U.MAIN,
            memepadNewFrom: me.MAIN
          }
        })
      }, {
        title: u("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => B().push({
          name: "memepad",
          query: {
            memepadFrom: U.MAIN
          }
        })
      }, {
        title: u("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          W().main.controlsTradingBotClick(), V().openTradingBot()
        }
      }]);
      return (n, a) => {
        const t = ne;
        return i(), p("div", wt, [(i(!0), p(R, null, q(o(e), (s, r) => (i(), p("button", {
          key: r,
          class: "control reset",
          onClick: l => s.onClick()
        }, [b("div", Ct, [m(t, {
          name: s.image,
          class: "image"
        }, null, 8, ["name"])]), b("div", At, A(s.title), 1)], 8, St))), 128))])
      }
    }
  }),
  It = g(Tt, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  xt = {
    class: "pages-index-banner"
  },
  Et = v({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      return (e, n) => {
        const a = ht,
          t = It;
        return i(), p("div", xt, [m(a, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), m(t, {
          class: "controls"
        })])
      }
    }
  }),
  Pt = g(Et, [
    ["__scopeId", "data-v-8f4c28ad"]
  ]),
  Bt = {
    class: "pages-index-daily-reward"
  },
  Rt = {
    key: 1,
    class: "widget has-radius"
  },
  Nt = {
    class: "compose"
  },
  Mt = {
    class: "title"
  },
  Lt = {
    key: 0,
    class: "subtitle"
  },
  Kt = v({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(_) {
      const e = _,
        n = j(),
        a = (s, r) => async () => {
          const l = await e.dailyRewardClaim();
          Ee(l, {
            Err: () => n.error(u("base.claim_error")),
            Ok: c => {
              s === J.RESTORE && n.success(u("daily_reward.streak_restored", {
                days: r
              })), n.success(`You’ve got ${Pe(c.claimedReward.points)} BP`), n.success(ae("span", ["You’ve got ", ae("i", {
                class: "ticket"
              }), ` ${c.claimedReward.passes}`])), V().makeConfetti(), W().main.dailyRewardClick({
                points: c.claimedReward.points.toNumber(),
                passes: c.claimedReward.passes
              })
            }
          })
        }, t = w(() => {
          if (e.dailyReward === void 0) return;
          const s = e.dailyReward.currentStreakDays,
            r = `${s}-${u("base.n.days",s)}`;
          if (e.dailyReward.claim === J.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: u("daily_reward.missed"),
            subtitle: se(u("daily_reward.restore_current_streak", {
              days: r
            })),
            claim: {
              label: u("base.restore"),
              white: !0,
              can: !0,
              fn: a(e.dailyReward.claim, r)
            }
          };
          const l = (() => {
            const d = Te().ms100ticker.value;
            if (!d) return Ie();
            const k = xe(e.dailyReward.canClaimAt - d, "letters");
            return se(u("base.claim_next_in", {
              time: k
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: u("daily_reward.current_streak", {
              days: r
            }),
            subtitle: l,
            claim: {
              can: e.dailyReward.claim !== J.UNAVAILABLE,
              fn: a(e.dailyReward.claim, r)
            }
          }
        });
      return (s, r) => {
        const l = O,
          c = ne,
          d = Xe;
        return i(), p("div", Bt, [o(t) ? (i(), p("div", Rt, [m(c, {
          name: o(t).icon,
          class: "icon"
        }, null, 8, ["name"]), b("div", Nt, [b("div", Mt, A(o(t).title), 1), ("isOk" in s ? s.isOk : o(te))(o(t).subtitle) ? (i(), p("div", Lt, A(o(t).subtitle.data), 1)) : (i(), y(l, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), o(t).claim ? (i(), y(d, {
          key: 0,
          label: o(t).claim.label,
          "can-claim": o(t).claim.can,
          "claim-fn": o(t).claim.fn,
          style: H(o(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : E("", !0)])) : (i(), y(l, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  zt = g(Kt, [
    ["__scopeId", "data-v-181516c9"]
  ]),
  Vt = {
    class: "pages-index-new-season-banner-card"
  },
  Ot = ["src"],
  Dt = ["src"],
  Ft = {
    class: "content"
  },
  jt = {
    class: "inner"
  },
  Ut = ["innerHTML"],
  Ht = {
    class: "icon-wrapper"
  },
  Wt = ["src"],
  Yt = v({
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
      imageSize: {},
      analyticsName: {}
    },
    setup(_) {
      return (e, n) => {
        const a = be,
          t = Q,
          s = pe;
        return i(), p("div", Vt, [b("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(M))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, Ot), n[0] || (n[0] = b("div", {
          class: "bg"
        }, null, -1)), b("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(M))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, Dt), b("div", Ft, [b("div", jt, [b("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Ut), m(a, {
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"])]), b("div", Ht, [e.icon ? (i(), y(t, {
          key: 0,
          name: e.icon,
          style: H({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 8, ["name", "style"])) : e.lottie ? (i(), y(s, {
          key: 1,
          name: e.lottie,
          loop: "",
          size: e.imageSize
        }, null, 8, ["name", "size"])) : e.gif ? (i(), p("img", {
          key: 2,
          src: e.gif,
          style: H({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 12, Wt)) : E("", !0)])])])
      }
    }
  }),
  qt = g(Yt, [
    ["__scopeId", "data-v-3b6f23f8"]
  ]),
  Gt = {
    class: "kit-stories-src-counter"
  },
  Jt = v({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(_) {
      re(a => ({
        "9db269f8": a.count
      }));
      const e = _,
        n = w(() => [...new Array(e.count)].map((a, t) => t < e.current ? {
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
      return (a, t) => (i(), p("div", Gt, [(i(!0), p(R, null, q(o(n), s => (i(), p("div", {
        key: s.key,
        class: ee(["progress", [`is-state-${s.state}`]]),
        style: H(s.state === "current" ? {
          "background-position-x": `-${s.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  Xt = g(Jt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  Zt = {
    class: "kit-stories-shared-background"
  },
  Qt = ["poster", "src"],
  en = ["src"],
  tn = v({
    __name: "Background",
    props: {
      background: {}
    },
    setup(_) {
      return (e, n) => {
        const a = Qe;
        return i(), p("div", Zt, [e.background.type === "video" ? (i(), p("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, Qt)) : e.background.type === "image" ? (i(), p("img", {
          key: 1,
          src: e.background.src
        }, null, 8, en)) : e.background.type === "stars" ? (i(), y(a, {
          key: 2,
          class: "stars"
        })) : E("", !0)])
      }
    }
  }),
  nn = g(tn, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  on = {
    class: "kit-stories-layouts-title-subtitle"
  },
  sn = {
    class: "title"
  },
  an = {
    class: "subtitle"
  },
  ln = v({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => (i(), p("div", on, [b("div", sn, A(e.layout.title), 1), b("div", an, A(e.layout.subtitle), 1)]))
    }
  }),
  rn = g(ln, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  cn = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  un = {
    class: "animoji-container"
  },
  _n = {
    class: "content-container"
  },
  dn = {
    class: "title"
  },
  mn = {
    class: "subtitle"
  },
  pn = v({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => {
        const a = pe;
        return i(), p("div", cn, [b("div", un, [m(a, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), b("div", _n, [b("div", dn, A(e.layout.title), 1), b("div", mn, A(e.layout.subtitle), 1)])])
      }
    }
  }),
  bn = g(pn, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  yn = v({
    __name: "Button",
    props: {
      button: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(_, {
      emit: e
    }) {
      const n = _,
        a = e,
        t = w(() => n.button.type === "next" ? n.isLast ? u("base.close") : u("base.next") : n.button.label),
        s = () => {
          if (n.button.type === "next") L().$webApp.HapticFeedback.impactOccurred("light"), a("next");
          else if (n.button.type === "local") B().push(n.button.link);
          else if (n.button.type === "external") L().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") L().$webApp.openTelegramLink(n.button.link);
          else throw n.button, le("Unknown button type")
        };
      return (r, l) => {
        const c = Z;
        return i(), y(c, {
          label: o(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: o(X).LARGE,
          onClick: l[0] || (l[0] = Y(d => s(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  vn = g(yn, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  fn = {
    class: "kit-stories-src-story"
  },
  gn = {
    class: "content"
  },
  kn = {
    class: "layout"
  },
  $n = {
    class: "button"
  },
  hn = v({
    __name: "Story",
    props: {
      story: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(_) {
      return (e, n) => {
        const a = nn,
          t = rn,
          s = bn,
          r = vn;
        return i(), p("div", fn, [m(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), b("div", gn, [b("div", kn, [e.story.layout.type === "TitleSubtitle" ? (i(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), y(s, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : E("", !0)]), b("div", $n, [e.story.button ? (i(), y(r, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = l => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : E("", !0)])])])
      }
    }
  }),
  wn = g(hn, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  Sn = (_, e) => {
    const n = _,
      a = x(_),
      t = w(() => 1 - a.value / n);
    let s = 0,
      r;
    const l = () => {
        s = Date.now(), r = Re(() => {
          const S = Date.now(),
            f = S - s;
          s = S, a.value = Math.max(a.value - f, 0), a.value <= 0 && (c(), e())
        }, 100)
      },
      c = () => {
        r && (clearInterval(r), r = void 0)
      },
      d = () => {
        if (r) {
          c();
          const S = Date.now() - s;
          a.value = Math.max(a.value - S, 0)
        }
      },
      k = () => l();
    return l(), {
      timeToExpire: Be(a),
      progress: t,
      destroy: c,
      pause: d,
      resume: k
    }
  },
  Cn = 150,
  An = v({
    __name: "Stories",
    props: {
      stories: {}
    },
    emits: ["close"],
    setup(_, {
      emit: e
    }) {
      const n = _,
        a = e,
        t = x(0),
        s = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, d()) : a("close")
        },
        r = () => {
          t.value > 0 ? (t.value -= 1, d()) : a("close")
        },
        l = () => Sn(5e3, s),
        c = Ne(l()),
        d = () => {
          c.value.destroy(), c.value = l()
        },
        k = x(),
        S = Me(),
        f = x(!1),
        h = x(!1),
        I = () => {
          f.value = !1, h.value = !1, S.set(() => {
            c.value.pause(), f.value = !0, h.value = !0
          }, Cn)
        },
        N = () => {
          S.destroy(), f.value && (c.value.resume(), f.value = !1)
        },
        z = $ => {
          if (f.value || h.value || !k.value) return;
          const {
            width: C,
            left: G
          } = k.value.getBoundingClientRect(), D = $.clientX - G, F = C / 3;
          D < F ? r() : D > F * 2 && s()
        };
      return Le(() => {
        S.destroy(), c.value.destroy()
      }), ($, C) => {
        const G = Xt,
          D = wn,
          F = et;
        return i(), y(F, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: T(() => [b("div", {
            ref_key: "storiesRef",
            ref: k,
            class: "kit-stories-src-stories",
            onPointerdown: C[1] || (C[1] = Y(K => I(), ["prevent"])),
            onPointerup: C[2] || (C[2] = K => N()),
            onPointercancel: C[3] || (C[3] = K => N()),
            onPointerleave: C[4] || (C[4] = K => N()),
            onClick: C[5] || (C[5] = K => z(K))
          }, [m(G, {
            current: o(t),
            "current-progress": o(c).progress.value,
            count: $.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (i(), y(D, {
            key: o(t),
            story: $.stories[o(t)],
            "is-last": o(t) === $.stories.length - 1,
            onNext: C[0] || (C[0] = K => s())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  Tn = g(An, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  In = v({
    __name: "Stories",
    props: Ke({
      set: {}
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(_) {
      const e = _e(_, "modelValue");
      return (n, a) => {
        const t = Tn;
        return i(), y(ze, {
          name: "opacity-transition"
        }, {
          default: T(() => [e.value ? (i(), y(t, {
            key: 0,
            stories: n.set.stories,
            class: "kit-stories",
            onClose: a[0] || (a[0] = s => e.value = !1)
          }, null, 8, ["stories"])) : E("", !0)]),
          _: 1
        })
      }
    }
  }),
  xn = g(In, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  En = {
    class: "pages-index-new-season-banner"
  },
  Pn = {
    class: "progress"
  },
  Bn = v({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(_) {
      const e = _,
        n = B(),
        a = V(),
        t = W(),
        s = L().$webApp,
        r = [{
          title: u("index.banners.trade_now.title"),
          buttonLabel: u("index.banners.trade_now.button_label"),
          onButtonClick: () => {
            a.openTradingBot()
          },
          icon: "ton-logo",
          imageSize: 64,
          analyticsName: P.TRADE_NOW
        }, {
          title: u("index.banners.earn_now.title"),
          buttonLabel: u("index.banners.earn_now.button_label"),
          onButtonClick: () => {
            n.push({
              name: "tasks"
            })
          },
          icon: "bp-logo",
          imageSize: 64,
          analyticsName: P.EARN_NOW
        }, {
          title: u("index.banners.season_2.title"),
          buttonLabel: u("index.banners.season_2.button_label"),
          onButtonClick: () => {
            l.value = !0
          },
          lottie: "animations/Moon",
          imageSize: 96,
          analyticsName: P.SEASON_2
        }, {
          title: u("index.banners.blum_x.title"),
          buttonLabel: u("index.banners.blum_x.button_label"),
          onButtonClick: () => {
            V().openBlumTwitter()
          },
          gif: M("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: P.BLUM_X
        }, {
          title: u("index.banners.blum_academy.title"),
          buttonLabel: u("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            s.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: M("index/banner/edu", "gif"),
          imageSize: 102,
          analyticsName: P.BLUM_ACADEMY
        }, {
          title: u("index.banners.create_memecoin.title"),
          buttonLabel: u("index.banners.create_memecoin.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-new",
              query: {
                memepadFrom: U.MAIN_PAGE_BANNER_CREATE_MEMECOIN,
                memepadNewFrom: me.MAIN_PAGE_BANNER_CREATE_MEMECOIN
              }
            })
          },
          gif: M("index/banner/memecoin", "gif"),
          imageSize: 118,
          analyticsName: P.CREATE_MEMECOIN
        }, {
          title: u("index.banners.friends.title"),
          buttonLabel: u("index.banners.friends.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens"
            })
          },
          gif: M("index/banner/comission", "gif"),
          imageSize: 100,
          analyticsName: P.FRIENDS
        }, {
          title: u("index.banners.trade_memecoins.title"),
          buttonLabel: u("index.banners.trade_memecoins.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad",
              query: {
                memepadFrom: U.MAIN_PAGE_BANNER_TRADE_MEMECOIN
              }
            })
          },
          gif: M("index/banner/riskreward", "gif"),
          imageSize: 102,
          analyticsName: P.TRADE_MEMECOIN
        }].map((f, h) => ({
          ...f,
          onButtonClick: () => {
            t.main.bannerClick({
              position: h + 1,
              bannerName: f.analyticsName
            }), f.onButtonClick()
          }
        })),
        l = x(e.value.showOnStart);
      Ve(l, f => f && e.value.onShowed(), {
        immediate: !0
      });
      const c = x(De(0, r.length - 1)),
        d = x(null),
        k = (f, h = "smooth") => {
          var I;
          (I = d.value) == null || I.scrollTo({
            left: f * window.innerWidth + (c.value > f ? -1 : 1),
            behavior: h
          })
        },
        S = Fe(() => {
          if (!d.value) return;
          const f = d.value.children[0].offsetWidth + 10,
            h = d.value.scrollLeft,
            I = Math.round(h / f);
          c.value = I
        }, 50).debouncedFunction;
      return Oe(() => {
        k(c.value, "instant")
      }), (f, h) => {
        const I = qt,
          N = Ze,
          z = xn;
        return i(), p("div", En, [b("div", {
          ref_key: "listEl",
          ref: d,
          class: "list",
          onScroll: h[0] || (h[0] = (...$) => o(S) && o(S)(...$)),
          onTouchmove: h[1] || (h[1] = (...$) => o(S) && o(S)(...$))
        }, [(i(!0), p(R, null, q(o(r), ($, C) => (i(), p("div", {
          key: $.title,
          class: "item"
        }, [m(I, {
          index: C,
          icon: $.icon,
          lottie: $.lottie,
          gif: $.gif,
          title: $.title,
          "button-label": $.buttonLabel,
          "on-button-click": $.onButtonClick,
          "image-size": $.imageSize,
          "analytics-name": $.analyticsName
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name"])]))), 128))], 544), b("div", Pn, [o(r).length > 1 ? (i(), y(N, {
          key: 0,
          "model-value": o(c),
          count: o(r).length,
          timer: 15e3,
          "onUpdate:modelValue": k
        }, null, 8, ["model-value", "count"])) : E("", !0)]), m(z, {
          modelValue: o(l),
          "onUpdate:modelValue": h[2] || (h[2] = $ => de(l) ? l.value = $ : null),
          set: f.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Rn = g(Bn, [
    ["__scopeId", "data-v-89ac611e"]
  ]),
  Nn = {
    class: "pages-wallet-asset-skeleton"
  },
  Mn = {
    class: "content"
  },
  Ln = v({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(_) {
      return (e, n) => {
        const a = O;
        return i(), p("div", Nn, [(i(!0), p(R, null, q(e.count, t => (i(), p("div", {
          key: t,
          class: "skeleton"
        }, [m(a, {
          rounded: "",
          class: "logo"
        }), b("div", Mn, [m(a, {
          class: "title"
        }), m(a, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  Kn = g(Ln, [
    ["__scopeId", "data-v-26805825"]
  ]),
  zn = {
    class: "pages-index-points"
  },
  Vn = v({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(_) {
      const e = w(() => B().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (n, a) => {
        const t = ye,
          s = Kn,
          r = Je;
        return i(), p("div", zn, [m(t, {
          label: ("t" in n ? n.t : o(u))("wallet.points.title"),
          "full-path": o(e)
        }, null, 8, ["label", "full-path"]), n.points ? (i(), y(r, {
          key: 1,
          points: n.points
        }, null, 8, ["points"])) : (i(), y(s, {
          key: 0,
          count: 2
        }))])
      }
    }
  }),
  On = g(Vn, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  Dn = {
    key: 0,
    class: "skeleton"
  },
  Fn = {
    key: 1,
    class: "default"
  },
  jn = {
    class: "content"
  },
  Un = {
    class: "title"
  },
  Hn = {
    class: "balance"
  },
  Wn = v({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(_) {
      const e = _,
        n = w(() => {
          const t = (() => {
            const s = V().internal;
            return s.isPokrasTheme.value ? {
              image: "pokras/drop-game-token",
              background: "grid"
            } : s.isHalloweenTheme.value ? {
              image: "halloween/drop-game-token",
              background: "grid"
            } : s.isTsubasaTheme.value ? {
              image: "tsubasa/drop-game-token",
              background: "grid"
            } : s.isNewYearTheme.value ? {
              image: "new-year/drop-game-token",
              background: "new-year"
            } : s.isValentineTheme.value ? {
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
        a = () => B().push({
          name: "game"
        });
      return (t, s) => {
        const r = ye,
          l = ne,
          c = O,
          d = be;
        return i(), p("div", {
          class: ee(["pages-index-game", `is-background-${o(n).background}`])
        }, [m(r, {
          label: ("t" in t ? t.t : o(u))("base.game")
        }, null, 8, ["label"]), o(n).type === "skeleton" ? (i(), p("div", Dn, [m(l, {
          name: o(n).image,
          class: "icon"
        }, null, 8, ["name"]), m(c, {
          secondary: "",
          class: "skeleton-title"
        }), m(d, {
          label: ("t" in t ? t.t : o(u))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (i(), p("div", Fn, [m(l, {
          name: o(n).image,
          class: "icon"
        }, null, 8, ["name"]), b("div", jn, [b("div", Un, A(("t" in t ? t.t : o(u))("game.card.title")), 1), b("div", Hn, A(o(n).pp) + " Play passes", 1)]), m(d, {
          label: ("t" in t ? t.t : o(u))("base.play"),
          state: "default",
          type: "white",
          class: "pill",
          disabled: o(n).disabled,
          onClick: s[0] || (s[0] = k => a())
        }, null, 8, ["label", "disabled"])]))], 2)
      }
    }
  }),
  Yn = g(Wn, [
    ["__scopeId", "data-v-7c6add22"]
  ]),
  qn = () => {
    const _ = je(),
      e = Ue(),
      n = He(),
      a = w(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      s = {
        set: Gn(),
        showOnStart: !L().$webApp.storage.local.get(t),
        onShowed: () => {
          L().$webApp.storage.local.set(t, "true")
        }
      },
      r = w(() => {
        const c = _.pointSymbols.value,
          d = _.dropSymbols.value;
        if (!(!c || !d) && !(!c.mp || !c.bp)) return [c.mp, c.bp, ...d]
      }),
      l = w(() => _.pointSymbols.value.pp);
    return {
      dailyReward: n,
      myTribe: a,
      season2Stories: s,
      wallet: w(() => _.wallet.value),
      pp: l,
      walletAssets: r
    }
  },
  Gn = () => ({
    stories: [{
      background: {
        type: "stars"
      },
      layout: {
        type: "AnimojiTitleSubtitle",
        animoji: "Fire",
        title: u("stories.season_2.slide_2.title"),
        subtitle: u("stories.season_2.slide_2.subtitle")
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
        title: u("stories.season_2.slide_3.title"),
        subtitle: u("stories.season_2.slide_3.subtitle")
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
        title: u("stories.season_2.slide_4.title"),
        subtitle: u("stories.season_2.slide_4.subtitle")
      },
      button: {
        type: "next"
      }
    }]
  }),
  Jn = {
    class: "index-page page"
  },
  Xn = v({
    __name: "index",
    setup(_) {
      const e = qn();
      return (n, a) => {
        const t = Pt,
          s = zt,
          r = Rn,
          l = On,
          c = Yn;
        return i(), p("div", Jn, [m(t, {
          "my-tribe": o(e).myTribe.value,
          wallet: o(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), m(s, {
          "daily-reward": o(e).dailyReward.reward.value,
          "daily-reward-claim": o(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), m(r, {
          value: o(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), m(l, {
          points: o(e).walletAssets.value
        }, null, 8, ["points"]), m(c, {
          pp: o(e).pp.value
        }, null, 8, ["pp"])])
      }
    }
  }),
  go = g(Xn, [
    ["__scopeId", "data-v-97e08456"]
  ]);
export {
  go as
  default
};