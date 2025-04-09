import {
  _ as ie
} from "./nJbpLTRS.js";
import {
  _ as V
} from "./BFBmgmpR.js";
import {
  d as f,
  j as $,
  a3 as le,
  o as i,
  c as p,
  e as o,
  M as y,
  a as b,
  t as A,
  C as r,
  ar as ge,
  X as J,
  E,
  az as ke,
  aA as he,
  x as Z,
  f as g,
  ab as R,
  F as N,
  D as T,
  b as m,
  a8 as Y,
  H as we,
  _ as Q,
  aB as re,
  n as ee,
  aC as ce,
  y as B,
  V as $e,
  aD as W,
  aa as te,
  aE as Se,
  a7 as j,
  h as L,
  aF as ue,
  ax as de,
  k as Ce,
  aG as _e,
  aH as Ae,
  m as oe,
  Y as Te,
  p as me,
  aI as U,
  aJ as pe,
  a6 as z,
  q as G,
  aK as X,
  a5 as se,
  O as Ee,
  aL as Ie,
  P as xe,
  aM as be,
  aN as H,
  aO as Be,
  Q as Pe,
  aq as ae,
  W as P,
  an as ye,
  aP as Re,
  aQ as Ne,
  aR as Me,
  aS as Le,
  a2 as Ke,
  aw as Oe,
  al as ze,
  aT as x,
  U as Ve,
  ak as De,
  G as Fe,
  Z as je,
  aU as Ue,
  aV as He
} from "./BV1dF4C1.js";
import {
  _ as Ye
} from "./C2N84iNU.js";
import {
  _ as We,
  a as Ge
} from "./CMWJ7Klh.js";
import {
  _ as qe
} from "./Cb8SA8jD.js";
import {
  _ as ne,
  a as fe,
  b as Xe
} from "./AJONJ72x.js";
import {
  _ as Je
} from "./CzONpoVd.js";
import {
  _ as Ze
} from "./Ilj96pD7.js";
import {
  _ as Qe
} from "./3L8JuOg3.js";
import {
  _ as et
} from "./NUEQ-pe1.js";
import {
  _ as ve
} from "./CB-DC5ko.js";
import "./B2Un88NO.js";
import "./BZXTU-vu.js";
import "./BgmIL_Hq.js";
import "./ChfC9qhV.js";
import "./B3WRsq2s.js";
import "./BHnODt1Y.js";
import "./D1zF7v5e.js";
import "./CsGk_MQj.js";
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
  st = f({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(d) {
      const e = d,
        n = () => ke(he.MAIN).runConnectionFlow(),
        a = $(() => {
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
        const c = V,
          l = Z;
        return i(), p("div", tt, [o(a).type === "skeleton" ? (i(), y(c, {
          key: 0,
          class: "skeleton"
        })) : o(a).type === "connected" ? (i(), p("div", nt, [b("div", ot, A(("t" in t ? t.t : o(r))("wallet.total_balance")), 1), (i(), y(ge(o(a).balance), {
          class: "balance"
        }))])) : o(a).type === "connect" ? (i(), y(l, {
          key: 2,
          label: ("t" in t ? t.t : o(r))("wallet.connect.btn"),
          size: o(J).SMALL,
          onClick: s[0] || (s[0] = u => n())
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
  lt = f({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(d) {
      const e = R().resolve({
          name: "tribe-join"
        }).fullPath,
        n = R().resolve({
          name: "tribe-slug"
        }).fullPath,
        a = t => Y().main.tribeLogoClick(t);
      return (t, s) => {
        const c = V,
          l = we,
          u = Q,
          _ = Ye;
        return i(), p("div", it, [t.myTribe ? (i(), p(N, {
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
          default: T(() => [m(u, {
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
          default: T(() => [m(u, {
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
          default: T(() => [m(_, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : E("", !0)], 64)) : (i(), y(c, {
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
  dt = f({
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
    setup(d) {
      re(n => ({
        bc7bb12e: n.height,
        "0b714ec0": n.borderRadius,
        "4280b9dc": n.iconSize
      }));
      const e = $(() => ({
        field: !0,
        "field--disabled": d.disabled
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
  _t = g(dt, [
    ["__scopeId", "data-v-d2541044"]
  ]),
  mt = f({
    __name: "BannerProfileModalEmailVerify",
    setup(d) {
      const {
        sendEmailAuthProviderVerification: e
      } = ce(), n = B(!1), a = async c => {
        const l = await e({
          captchaToken: c
        });
        if (!te(l)) {
          if (l.code === Se.Forbidden) {
            n.value = !0;
            return
          }
          j().error();
          return
        }
        j().success(r("secure_options.message.email_code_sent"))
      }, t = async c => {
        await a(c), n.value = !1
      }, s = () => {
        n.value = !1
      };
      return (c, l) => {
        const u = We,
          _ = $e("I18nT");
        return o(n) ? (i(), y(u, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: t,
          onReject: s
        })) : (i(), y(_, {
          key: 1,
          tag: "div",
          class: "caption",
          keypath: "secure_options.profile_modal.connect_email.not_verified_caption"
        }, {
          resend: T(() => [b("a", {
            href: "#",
            class: "link",
            onClick: l[0] || (l[0] = W(k => a(), ["prevent"]))
          }, A(("t" in c ? c.t : o(r))("secure_options.profile_modal.connect_email.not_verified_caption_resend")), 1)]),
          _: 1
        }))
      }
    }
  }),
  pt = g(mt, [
    ["__scopeId", "data-v-7dba19d1"]
  ]),
  bt = f({
    __name: "BannerProfileModalEmailDisconnect",
    emits: ["confirm:disconnect"],
    setup(d, {
      emit: e
    }) {
      const {
        disconnectEmailAuthProvider: n,
        fetchAuthProviders: a
      } = ce(), t = e, s = () => {
        const c = r("secure_options.profile_modal.disconnect_email.confirm.title"),
          l = r("secure_options.profile_modal.disconnect_email.confirm.description"),
          u = [{
            type: "cancel"
          }, {
            type: "default",
            label: r("secure_options.profile_modal.disconnect_email.confirm.btn"),
            onClick: async () => {
              const _ = await n();
              if (!te(_)) {
                j().error();
                return
              }
              t("confirm:disconnect"), await a()
            }
          }];
        L().$webApp.popup(c, l, u)
      };
      return (c, l) => (i(), p("a", {
        href: "#",
        class: "disconnect",
        onClick: W(s, ["prevent"])
      }, A(("t" in c ? c.t : o(r))("secure_options.profile_modal.disconnect_email.btn")), 1))
    }
  }),
  yt = g(bt, [
    ["__scopeId", "data-v-d5808e4e"]
  ]),
  ft = f({
    __name: "BannerProfileModalFooter",
    emits: ["click:connect-account", "confirm:disconnect"],
    setup(d, {
      emit: e
    }) {
      const n = e,
        a = ue(),
        t = $(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.hasEmail) ?? !1
        }),
        s = $(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.isEmailVerified) ?? !1
        }),
        c = $(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.emailMasked) ?? ""
        });
      return (l, u) => {
        const _ = _t,
          k = pt,
          S = yt,
          v = Z;
        return o(t) ? (i(), p(N, {
          key: 0
        }, [m(_, {
          icon: "email",
          label: ("t" in l ? l.t : o(r))("secure_options.profile_modal.connect_email.label"),
          value: o(c),
          disabled: !o(s)
        }, null, 8, ["label", "value", "disabled"]), o(s) ? E("", !0) : (i(), p(N, {
          key: 0
        }, [m(k), m(S, {
          "onConfirm:disconnect": u[0] || (u[0] = w => n("confirm:disconnect"))
        })], 64))], 64)) : (i(), y(v, {
          key: 1,
          label: ("t" in l ? l.t : o(r))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: o(J).LARGE,
          onClick: u[1] || (u[1] = w => n("click:connect-account"))
        }, null, 8, ["label", "size"]))
      }
    }
  }),
  vt = f({
    __name: "BannerProfileModal",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(d) {
      const e = de(d, "modelValue"),
        {
          getters: n
        } = Ce(),
        {
          secureOptionsModals: a
        } = _e(),
        t = ue(),
        s = $(() => {
          var _;
          return ((_ = n.getUser.value) == null ? void 0 : _.username) ?? "user"
        }),
        c = $(() => {
          var _;
          return ((_ = t.value) == null ? void 0 : _.hasEmail) ?? !1
        }),
        l = () => {
          u(), a.main.show()
        },
        u = () => {
          e.value = !1
        };
      return (_, k) => {
        const S = ie,
          v = ft,
          w = qe,
          I = Te,
          M = Ge;
        return i(), p(N, null, [m(I, {
          modelValue: e.value,
          "onUpdate:modelValue": k[0] || (k[0] = O => e.value = O)
        }, {
          default: T(() => [m(w, null, Ae({
            header: T(() => [m(S, {
              size: "96px",
              class: "avatar"
            })]),
            title: T(() => [oe(A(o(s)), 1)]),
            footer: T(() => [m(v, {
              "onClick:connectAccount": l,
              "onConfirm:disconnect": u
            })]),
            _: 2
          }, [o(c) ? void 0 : {
            name: "subTitle",
            fn: T(() => [oe(A(("t" in _ ? _.t : o(r))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
            key: "0"
          }]), 1024)]),
          _: 1
        }, 8, ["modelValue"]), m(M)], 64)
      }
    }
  }),
  gt = g(vt, [
    ["__scopeId", "data-v-657ce5c0"]
  ]),
  kt = {
    class: "pages-index-banner-profile-tribe"
  },
  ht = f({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(d) {
      const {
        isStaySecureFeatureEnabled: e
      } = _e(), n = B(!1), a = () => {
        e.value && (n.value = !0)
      };
      return (t, s) => {
        const c = ie,
          l = at,
          u = rt,
          _ = gt;
        return i(), p("div", kt, [m(c, {
          small: "",
          onClick: a
        }), m(l, {
          wallet: t.wallet
        }, null, 8, ["wallet"]), m(u, {
          "my-tribe": t.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"]), m(_, {
          modelValue: o(n),
          "onUpdate:modelValue": s[0] || (s[0] = k => me(n) ? n.value = k : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  wt = g(ht, [
    ["__scopeId", "data-v-67447d49"]
  ]),
  $t = {
    class: "pages-index-banner-controls"
  },
  St = ["onClick"],
  Ct = {
    class: "image-container"
  },
  At = {
    class: "title"
  },
  Tt = f({
    __name: "BannerControls",
    setup(d) {
      const e = $(() => [{
        title: r("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => R().push({
          name: "memepad-new",
          query: {
            memepadFrom: U.MAIN,
            memepadNewFrom: pe.MAIN
          }
        })
      }, {
        title: r("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => R().push({
          name: "memepad",
          query: {
            memepadFrom: U.MAIN
          }
        })
      }, {
        title: r("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          Y().main.controlsTradingBotClick(), z().openTradingBot()
        }
      }]);
      return (n, a) => {
        const t = ne;
        return i(), p("div", $t, [(i(!0), p(N, null, G(o(e), (s, c) => (i(), p("button", {
          key: c,
          class: "control reset",
          onClick: l => s.onClick()
        }, [b("div", Ct, [m(t, {
          name: s.image,
          class: "image"
        }, null, 8, ["name"])]), b("div", At, A(s.title), 1)], 8, St))), 128))])
      }
    }
  }),
  Et = g(Tt, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  It = {
    class: "pages-index-banner"
  },
  xt = f({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(d) {
      return (e, n) => {
        const a = wt,
          t = Et;
        return i(), p("div", It, [m(a, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), m(t, {
          class: "controls"
        })])
      }
    }
  }),
  Bt = g(xt, [
    ["__scopeId", "data-v-8f4c28ad"]
  ]),
  Pt = {
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
  Kt = f({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(d) {
      const e = d,
        n = j(),
        a = (s, c) => async () => {
          const l = await e.dailyRewardClaim();
          Be(l, {
            Err: () => n.error(r("base.claim_error")),
            Ok: u => {
              s === X.RESTORE && n.success(r("daily_reward.streak_restored", {
                days: c
              })), n.success(`You’ve got ${Pe(u.claimedReward.points)} BP`), n.success(ae("span", ["You’ve got ", ae("i", {
                class: "ticket"
              }), ` ${u.claimedReward.passes}`])), z().makeConfetti(), Y().main.dailyRewardClick({
                points: u.claimedReward.points.toNumber(),
                passes: u.claimedReward.passes
              })
            }
          })
        }, t = $(() => {
          if (e.dailyReward === void 0) return;
          const s = e.dailyReward.currentStreakDays,
            c = `${s}-${r("base.n.days",s)}`;
          if (e.dailyReward.claim === X.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: r("daily_reward.missed"),
            subtitle: se(r("daily_reward.restore_current_streak", {
              days: c
            })),
            claim: {
              label: r("base.restore"),
              white: !0,
              can: !0,
              fn: a(e.dailyReward.claim, c)
            }
          };
          const l = (() => {
            const _ = Ee().ms100ticker.value;
            if (!_) return Ie();
            const k = xe(e.dailyReward.canClaimAt - _, "letters");
            return se(r("base.claim_next_in", {
              time: k
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: r("daily_reward.current_streak", {
              days: c
            }),
            subtitle: l,
            claim: {
              can: e.dailyReward.claim !== X.UNAVAILABLE,
              fn: a(e.dailyReward.claim, c)
            }
          }
        });
      return (s, c) => {
        const l = V,
          u = ne,
          _ = Je;
        return i(), p("div", Pt, [o(t) ? (i(), p("div", Rt, [m(u, {
          name: o(t).icon,
          class: "icon"
        }, null, 8, ["name"]), b("div", Nt, [b("div", Mt, A(o(t).title), 1), ("isOk" in s ? s.isOk : o(te))(o(t).subtitle) ? (i(), p("div", Lt, A(o(t).subtitle.data), 1)) : (i(), y(l, {
          key: 1,
          type: o(be).SECONDARY,
          class: "skeleton subtitle"
        }, null, 8, ["type"]))]), o(t).claim ? (i(), y(_, {
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
  Ot = g(Kt, [
    ["__scopeId", "data-v-c4174779"]
  ]),
  zt = {
    class: "pages-index-new-season-banner-card"
  },
  Vt = ["src"],
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
  Yt = ["src"],
  Wt = f({
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
      analyticsName: {},
      hideButton: {
        type: Boolean
      }
    },
    setup(d) {
      return (e, n) => {
        const a = fe,
          t = Q,
          s = ye;
        return i(), p("div", zt, [b("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(P))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, Vt), n[0] || (n[0] = b("div", {
          class: "bg"
        }, null, -1)), b("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(P))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, Dt), b("div", Ft, [b("div", jt, [b("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Ut), e.hideButton ? E("", !0) : (i(), y(a, {
          key: 0,
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"]))]), b("div", Ht, [e.icon ? (i(), y(t, {
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
        }, null, 12, Yt)) : E("", !0)])])])
      }
    }
  }),
  Gt = g(Wt, [
    ["__scopeId", "data-v-80b1be0e"]
  ]),
  qt = {
    class: "kit-stories-src-counter"
  },
  Xt = f({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(d) {
      re(a => ({
        "9db269f8": a.count
      }));
      const e = d,
        n = $(() => [...new Array(e.count)].map((a, t) => t < e.current ? {
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
      return (a, t) => (i(), p("div", qt, [(i(!0), p(N, null, G(o(n), s => (i(), p("div", {
        key: s.key,
        class: ee(["progress", [`is-state-${s.state}`]]),
        style: H(s.state === "current" ? {
          "background-position-x": `-${s.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  Jt = g(Xt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  Zt = {
    class: "kit-stories-shared-background"
  },
  Qt = ["poster", "src"],
  en = ["src"],
  tn = f({
    __name: "Background",
    props: {
      background: {}
    },
    setup(d) {
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
  ln = f({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(d) {
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
  dn = {
    class: "content-container"
  },
  _n = {
    class: "title"
  },
  mn = {
    class: "subtitle"
  },
  pn = f({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(d) {
      return (e, n) => {
        const a = ye;
        return i(), p("div", cn, [b("div", un, [m(a, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), b("div", dn, [b("div", _n, A(e.layout.title), 1), b("div", mn, A(e.layout.subtitle), 1)])])
      }
    }
  }),
  bn = g(pn, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  yn = f({
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
      const n = d,
        a = e,
        t = $(() => n.button.type === "next" ? n.isLast ? r("base.close") : r("base.next") : n.button.label),
        s = () => {
          if (n.button.type === "next") L().$webApp.HapticFeedback.impactOccurred("light"), a("next");
          else if (n.button.type === "local") R().push(n.button.link);
          else if (n.button.type === "external") L().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") L().$webApp.openTelegramLink(n.button.link);
          else throw n.button, le("Unknown button type")
        };
      return (c, l) => {
        const u = Z;
        return i(), y(u, {
          label: o(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: o(J).LARGE,
          onClick: l[0] || (l[0] = W(_ => s(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  fn = g(yn, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  vn = {
    class: "kit-stories-src-story"
  },
  gn = {
    class: "content"
  },
  kn = {
    class: "layout"
  },
  hn = {
    class: "button"
  },
  wn = f({
    __name: "Story",
    props: {
      story: {},
      isLast: {
        type: Boolean
      }
    },
    emits: ["next"],
    setup(d) {
      return (e, n) => {
        const a = nn,
          t = rn,
          s = bn,
          c = fn;
        return i(), p("div", vn, [m(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), b("div", gn, [b("div", kn, [e.story.layout.type === "TitleSubtitle" ? (i(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), y(s, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : E("", !0)]), b("div", hn, [e.story.button ? (i(), y(c, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = l => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : E("", !0)])])])
      }
    }
  }),
  $n = g(wn, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  Sn = (d, e) => {
    const n = d,
      a = B(d),
      t = $(() => 1 - a.value / n);
    let s = 0,
      c;
    const l = () => {
        s = Date.now(), c = Ne(() => {
          const S = Date.now(),
            v = S - s;
          s = S, a.value = Math.max(a.value - v, 0), a.value <= 0 && (u(), e())
        }, 100)
      },
      u = () => {
        c && (clearInterval(c), c = void 0)
      },
      _ = () => {
        if (c) {
          u();
          const S = Date.now() - s;
          a.value = Math.max(a.value - S, 0)
        }
      },
      k = () => l();
    return l(), {
      timeToExpire: Re(a),
      progress: t,
      destroy: u,
      pause: _,
      resume: k
    }
  },
  Cn = 150,
  An = f({
    __name: "Stories",
    props: {
      stories: {}
    },
    emits: ["close"],
    setup(d, {
      emit: e
    }) {
      const n = d,
        a = e,
        t = B(0),
        s = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, _()) : a("close")
        },
        c = () => {
          t.value > 0 ? (t.value -= 1, _()) : a("close")
        },
        l = () => Sn(5e3, s),
        u = Me(l()),
        _ = () => {
          u.value.destroy(), u.value = l()
        },
        k = B(),
        S = Le(),
        v = B(!1),
        w = B(!1),
        I = () => {
          v.value = !1, w.value = !1, S.set(() => {
            u.value.pause(), v.value = !0, w.value = !0
          }, Cn)
        },
        M = () => {
          S.destroy(), v.value && (u.value.resume(), v.value = !1)
        },
        O = h => {
          if (v.value || w.value || !k.value) return;
          const {
            width: C,
            left: q
          } = k.value.getBoundingClientRect(), D = h.clientX - q, F = C / 3;
          D < F ? c() : D > F * 2 && s()
        };
      return Ke(() => {
        S.destroy(), u.value.destroy()
      }), (h, C) => {
        const q = Jt,
          D = $n,
          F = et;
        return i(), y(F, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: T(() => [b("div", {
            ref_key: "storiesRef",
            ref: k,
            class: "kit-stories-src-stories",
            onPointerdown: C[1] || (C[1] = W(K => I(), ["prevent"])),
            onPointerup: C[2] || (C[2] = K => M()),
            onPointercancel: C[3] || (C[3] = K => M()),
            onPointerleave: C[4] || (C[4] = K => M()),
            onClick: C[5] || (C[5] = K => O(K))
          }, [m(q, {
            current: o(t),
            "current-progress": o(u).progress.value,
            count: h.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (i(), y(D, {
            key: o(t),
            story: h.stories[o(t)],
            "is-last": o(t) === h.stories.length - 1,
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
  En = f({
    __name: "Stories",
    props: Oe({
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
      const e = de(d, "modelValue");
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
  In = g(En, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  xn = {
    class: "pages-index-new-season-banner"
  },
  Bn = {
    class: "progress"
  },
  Pn = f({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(d) {
      const e = d,
        n = R(),
        a = z(),
        t = Y(),
        s = L().$webApp,
        c = [{
          title: r("index.banners.hash_cash.title"),
          buttonLabel: r("index.banners.hash_cash.button_label"),
          onButtonClick: () => {},
          hideButton: !0,
          gif: P("index/banner/hashcash", "gif"),
          imageSize: 102,
          analyticsName: x.HASH_CASH
        }, {
          title: r("index.banners.trade_now.title"),
          buttonLabel: r("index.banners.trade_now.button_label"),
          onButtonClick: () => {
            a.openTradingBot()
          },
          icon: "ton-logo",
          imageSize: 64,
          analyticsName: x.TRADE_NOW
        }, {
          title: r("index.banners.earn_now.title"),
          buttonLabel: r("index.banners.earn_now.button_label"),
          onButtonClick: () => {
            n.push({
              name: "tasks"
            })
          },
          icon: "bp-logo",
          imageSize: 64,
          analyticsName: x.EARN_NOW
        }, {
          title: r("index.banners.season_2.title"),
          buttonLabel: r("index.banners.season_2.button_label"),
          onButtonClick: () => {
            l.value = !0
          },
          lottie: "animations/Moon",
          imageSize: 96,
          analyticsName: x.SEASON_2
        }, {
          title: r("index.banners.blum_x.title"),
          buttonLabel: r("index.banners.blum_x.button_label"),
          onButtonClick: () => {
            z().openBlumTwitter()
          },
          gif: P("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: x.BLUM_X
        }, {
          title: r("index.banners.blum_academy.title"),
          buttonLabel: r("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            s.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: P("index/banner/edu", "gif"),
          imageSize: 102,
          analyticsName: x.BLUM_ACADEMY
        }, {
          title: r("index.banners.create_memecoin.title"),
          buttonLabel: r("index.banners.create_memecoin.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-new",
              query: {
                memepadFrom: U.MAIN_PAGE_BANNER_CREATE_MEMECOIN,
                memepadNewFrom: pe.MAIN_PAGE_BANNER_CREATE_MEMECOIN
              }
            })
          },
          gif: P("index/banner/memecoin", "gif"),
          imageSize: 118,
          analyticsName: x.CREATE_MEMECOIN
        }, {
          title: r("index.banners.friends.title"),
          buttonLabel: r("index.banners.friends.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens"
            })
          },
          gif: P("index/banner/comission", "gif"),
          imageSize: 100,
          analyticsName: x.FRIENDS
        }, {
          title: r("index.banners.trade_memecoins.title"),
          buttonLabel: r("index.banners.trade_memecoins.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad",
              query: {
                memepadFrom: U.MAIN_PAGE_BANNER_TRADE_MEMECOIN
              }
            })
          },
          gif: P("index/banner/riskreward", "gif"),
          imageSize: 102,
          analyticsName: x.TRADE_MEMECOIN
        }, {
          title: r("index.banners.leaderboard.title"),
          buttonLabel: r("index.banners.leaderboard.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens-leaderboards"
            })
          },
          gif: P("index/banner/leaderboard", "gif"),
          imageSize: 102,
          analyticsName: x.LEADERBOARDS
        }].map((v, w) => ({
          ...v,
          onButtonClick: () => {
            t.main.bannerClick({
              position: w + 1,
              bannerName: v.analyticsName
            }), v.onButtonClick()
          }
        })),
        l = B(e.value.showOnStart);
      Ve(l, v => v && e.value.onShowed(), {
        immediate: !0
      });
      const u = B(0),
        _ = B(null),
        k = (v, w = "smooth") => {
          var I;
          (I = _.value) == null || I.scrollTo({
            left: v * window.innerWidth + (u.value > v ? -1 : 1),
            behavior: w
          })
        },
        S = Fe(() => {
          if (!_.value) return;
          const v = _.value.children[0].offsetWidth + 10,
            w = _.value.scrollLeft,
            I = Math.round(w / v);
          u.value = I
        }, 50).debouncedFunction;
      return De(() => {
        k(u.value, "instant")
      }), (v, w) => {
        const I = Gt,
          M = Ze,
          O = In;
        return i(), p("div", xn, [b("div", {
          ref_key: "listEl",
          ref: _,
          class: "list",
          onScroll: w[0] || (w[0] = (...h) => o(S) && o(S)(...h)),
          onTouchmove: w[1] || (w[1] = (...h) => o(S) && o(S)(...h))
        }, [(i(!0), p(N, null, G(o(c), (h, C) => (i(), p("div", {
          key: h.title,
          class: "item"
        }, [m(I, {
          index: C,
          icon: h.icon,
          lottie: h.lottie,
          gif: h.gif,
          title: h.title,
          "button-label": h.buttonLabel,
          "on-button-click": h.onButtonClick,
          "image-size": h.imageSize,
          "analytics-name": h.analyticsName,
          "hide-button": h.hideButton
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name", "hide-button"])]))), 128))], 544), b("div", Bn, [o(c).length > 1 ? (i(), y(M, {
          key: 0,
          "model-value": o(u),
          count: o(c).length,
          timer: 15e3,
          "onUpdate:modelValue": k
        }, null, 8, ["model-value", "count"])) : E("", !0)]), m(O, {
          modelValue: o(l),
          "onUpdate:modelValue": w[2] || (w[2] = h => me(l) ? l.value = h : null),
          set: v.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Rn = g(Pn, [
    ["__scopeId", "data-v-aa55fc0d"]
  ]),
  Nn = {
    class: "pages-wallet-asset-skeleton"
  },
  Mn = {
    class: "content"
  },
  Ln = f({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(d) {
      return (e, n) => {
        const a = V;
        return i(), p("div", Nn, [(i(!0), p(N, null, G(e.count, t => (i(), p("div", {
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
  On = {
    class: "pages-index-points"
  },
  zn = f({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(d) {
      const e = $(() => R().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (n, a) => {
        const t = ve,
          s = Kn,
          c = Xe;
        return i(), p("div", On, [m(t, {
          label: ("t" in n ? n.t : o(r))("wallet.points.title"),
          "full-path": o(e)
        }, null, 8, ["label", "full-path"]), n.points ? (i(), y(c, {
          key: 1,
          points: n.points
        }, null, 8, ["points"])) : (i(), y(s, {
          key: 0,
          count: 2
        }))])
      }
    }
  }),
  Vn = g(zn, [
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
  Yn = f({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(d) {
      const e = d,
        n = $(() => {
          const t = (() => {
            const s = z().internal;
            return s.isPokrasTheme.value ? {
              image: "pokras/drop-game-token",
              mode: "base"
            } : s.isHalloweenTheme.value ? {
              image: "halloween/drop-game-token",
              mode: "base"
            } : s.isTsubasaTheme.value ? {
              image: "tsubasa/drop-game-token",
              mode: "base"
            } : s.isNewYearTheme.value ? {
              image: "new-year/drop-game-token",
              mode: "new-year"
            } : s.isValentineTheme.value ? {
              image: "valentine/drop-game-token",
              mode: "valentine"
            } : s.isTGETheme.value ? {
              image: "tge/drop-game-token",
              mode: "tge"
            } : {
              image: "pictures/drop-clover",
              mode: "base"
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
        a = () => R().push({
          name: "game"
        });
      return (t, s) => {
        const c = ve,
          l = ne,
          u = V,
          _ = fe;
        return i(), p("div", {
          class: ee(["pages-index-game", `is-mode-${o(n).mode}`])
        }, [m(c, {
          label: ("t" in t ? t.t : o(r))("base.game")
        }, null, 8, ["label"]), o(n).type === "skeleton" ? (i(), p("div", Dn, [m(l, {
          name: o(n).image,
          class: "icon"
        }, null, 8, ["name"]), m(u, {
          type: o(be).SECONDARY,
          class: "skeleton-title"
        }, null, 8, ["type"]), m(_, {
          label: ("t" in t ? t.t : o(r))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (i(), p("div", Fn, [m(l, {
          name: o(n).image,
          class: "icon"
        }, null, 8, ["name"]), b("div", jn, [b("div", Un, A(("t" in t ? t.t : o(r))("game.card.title")), 1), b("div", Hn, A(o(n).pp) + " Play passes", 1)]), m(_, {
          label: ("t" in t ? t.t : o(r))("base.play"),
          state: "default",
          type: "white",
          class: "pill",
          disabled: o(n).disabled,
          onClick: s[0] || (s[0] = k => a())
        }, null, 8, ["label", "disabled"])]))], 2)
      }
    }
  }),
  Wn = g(Yn, [
    ["__scopeId", "data-v-86df2fc1"]
  ]),
  Gn = () => {
    const d = je(),
      e = Ue(),
      n = He(),
      a = $(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      s = {
        set: qn(),
        showOnStart: !L().$webApp.storage.local.get(t),
        onShowed: () => {
          L().$webApp.storage.local.set(t, "true")
        }
      },
      c = $(() => {
        const u = d.pointSymbols.value,
          _ = d.dropSymbols.value;
        if (!(!u || !_) && !(!u.mp || !u.bp)) return [u.mp, u.bp, ..._]
      }),
      l = $(() => d.pointSymbols.value.pp);
    return {
      dailyReward: n,
      myTribe: a,
      season2Stories: s,
      wallet: $(() => d.wallet.value),
      pp: l,
      walletAssets: c
    }
  },
  qn = () => ({
    stories: [{
      background: {
        type: "stars"
      },
      layout: {
        type: "AnimojiTitleSubtitle",
        animoji: "Fire",
        title: r("stories.season_2.slide_2.title"),
        subtitle: r("stories.season_2.slide_2.subtitle")
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
        title: r("stories.season_2.slide_3.title"),
        subtitle: r("stories.season_2.slide_3.subtitle")
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
        title: r("stories.season_2.slide_4.title"),
        subtitle: r("stories.season_2.slide_4.subtitle")
      },
      button: {
        type: "next"
      }
    }]
  }),
  Xn = {
    class: "index-page page"
  },
  Jn = f({
    __name: "index",
    setup(d) {
      const e = Gn();
      return (n, a) => {
        const t = Bt,
          s = Ot,
          c = Rn,
          l = Vn,
          u = Wn;
        return i(), p("div", Xn, [m(t, {
          "my-tribe": o(e).myTribe.value,
          wallet: o(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), m(s, {
          "daily-reward": o(e).dailyReward.reward.value,
          "daily-reward-claim": o(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), m(c, {
          value: o(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), m(l, {
          points: o(e).walletAssets.value
        }, null, 8, ["points"]), m(u, {
          pp: o(e).pp.value
        }, null, 8, ["pp"])])
      }
    }
  }),
  go = g(Jn, [
    ["__scopeId", "data-v-97e08456"]
  ]);
export {
  go as
  default
};