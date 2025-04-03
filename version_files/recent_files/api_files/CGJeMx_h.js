import {
  _ as ie
} from "./D1cs7Dra.js";
import {
  _ as V
} from "./Bz1PjUsG.js";
import {
  d as f,
  j as $,
  a2 as le,
  o as i,
  c as p,
  e as o,
  M as y,
  a as b,
  t as A,
  C as u,
  aq as ve,
  W as J,
  E as x,
  ay as ge,
  az as ke,
  x as Z,
  f as g,
  aa as R,
  F as N,
  D as T,
  b as m,
  a7 as H,
  H as he,
  _ as Q,
  aA as re,
  n as ee,
  aB as ce,
  y as E,
  U as we,
  aC as Y,
  a9 as te,
  aD as $e,
  a6 as j,
  h as L,
  aE as ue,
  aw as de,
  k as Se,
  aF as _e,
  aG as Ce,
  m as oe,
  X as Ae,
  p as me,
  aH as U,
  aI as pe,
  a5 as O,
  q,
  aJ as X,
  a4 as se,
  N as Te,
  aK as Ie,
  O as Ee,
  aL as W,
  aM as xe,
  P as Be,
  ap as ae,
  V as P,
  am as be,
  aN as Pe,
  aO as Re,
  aP as Ne,
  aQ as Me,
  a1 as Le,
  av as Ke,
  ak as ze,
  aR as B,
  T as Oe,
  aj as Ve,
  ag as De,
  G as Fe,
  Y as je,
  aS as Ue,
  aT as We
} from "./DAWpDGzr.js";
import {
  _ as He
} from "./Cxqc0I85.js";
import {
  _ as Ye,
  a as qe,
  b as Ge
} from "./DBlb0R7P.js";
import {
  _ as ne,
  a as ye,
  b as Xe
} from "./BP2-1Eke.js";
import {
  _ as Je
} from "./CROG0KkT.js";
import {
  _ as Ze
} from "./CYJKj35f.js";
import {
  _ as Qe
} from "./CaoE7OLa.js";
import {
  _ as et
} from "./DHL65vmi.js";
import {
  _ as fe
} from "./BBTA78sM.js";
import "./D_RvRn40.js";
import "./DAxizhKv.js";
import "./0m3I9PyR.js";
import "./_xEZMqOh.js";
import "./Sz7pxIoD.js";
import "./CXUCu0g7.js";
import "./p-EggjsI.js";
import "./ruD7-STU.js";
import "./CrAlppIR.js";
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
        n = () => ge(ke.MAIN).runConnectionFlow(),
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
        const r = V,
          l = Z;
        return i(), p("div", tt, [o(a).type === "skeleton" ? (i(), y(r, {
          key: 0,
          class: "skeleton"
        })) : o(a).type === "connected" ? (i(), p("div", nt, [b("div", ot, A(("t" in t ? t.t : o(u))("wallet.total_balance")), 1), (i(), y(ve(o(a).balance), {
          class: "balance"
        }))])) : o(a).type === "connect" ? (i(), y(l, {
          key: 2,
          label: ("t" in t ? t.t : o(u))("wallet.connect.btn"),
          size: o(J).SMALL,
          onClick: s[0] || (s[0] = c => n())
        }, null, 8, ["label", "size"])) : x("", !0)])
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
        a = t => H().main.tribeLogoClick(t);
      return (t, s) => {
        const r = V,
          l = he,
          c = Q,
          _ = He;
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
          default: T(() => [m(_, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : x("", !0)], 64)) : (i(), y(r, {
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
      } = ce(), n = E(!1), a = async r => {
        const l = await e({
          captchaToken: r
        });
        if (!te(l)) {
          if (l.code === $e.Forbidden) {
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
          _ = we("I18nT");
        return o(n) ? (i(), y(c, {
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
        const r = u("secure_options.profile_modal.disconnect_email.confirm.title"),
          l = u("secure_options.profile_modal.disconnect_email.confirm.description"),
          c = [{
            type: "cancel"
          }, {
            type: "default",
            label: u("secure_options.profile_modal.disconnect_email.confirm.btn"),
            onClick: async () => {
              const _ = await n();
              if (!te(_)) {
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
        r = $(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.emailMasked) ?? ""
        });
      return (l, c) => {
        const _ = _t,
          k = pt,
          S = yt,
          v = Z;
        return o(t) ? (i(), p(N, {
          key: 0
        }, [m(_, {
          icon: "email",
          label: ("t" in l ? l.t : o(u))("secure_options.profile_modal.connect_email.label"),
          value: o(r),
          disabled: !o(s)
        }, null, 8, ["label", "value", "disabled"]), o(s) ? x("", !0) : (i(), p(N, {
          key: 0
        }, [m(k), m(S, {
          "onConfirm:disconnect": c[0] || (c[0] = w => n("confirm:disconnect"))
        })], 64))], 64)) : (i(), y(v, {
          key: 1,
          label: ("t" in l ? l.t : o(u))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: o(J).LARGE,
          onClick: c[1] || (c[1] = w => n("click:connect-account"))
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
        } = Se(),
        {
          secureOptionsModals: a
        } = _e(),
        t = ue(),
        s = $(() => {
          var _;
          return ((_ = n.getUser.value) == null ? void 0 : _.username) ?? "user"
        }),
        r = $(() => {
          var _;
          return ((_ = t.value) == null ? void 0 : _.hasEmail) ?? !1
        }),
        l = () => {
          c(), a.main.show()
        },
        c = () => {
          e.value = !1
        };
      return (_, k) => {
        const S = ie,
          v = ft,
          w = qe,
          I = Ae,
          M = Ge;
        return i(), p(N, null, [m(I, {
          modelValue: e.value,
          "onUpdate:modelValue": k[0] || (k[0] = z => e.value = z)
        }, {
          default: T(() => [m(w, null, Ce({
            header: T(() => [m(S, {
              size: "96px",
              class: "avatar"
            })]),
            title: T(() => [oe(A(o(s)), 1)]),
            footer: T(() => [m(v, {
              "onClick:connectAccount": l,
              "onConfirm:disconnect": c
            })]),
            _: 2
          }, [o(r) ? void 0 : {
            name: "subTitle",
            fn: T(() => [oe(A(("t" in _ ? _.t : o(u))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
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
      } = _e(), n = E(!1), a = () => {
        e.value && (n.value = !0)
      };
      return (t, s) => {
        const r = ie,
          l = at,
          c = rt,
          _ = gt;
        return i(), p("div", kt, [m(r, {
          small: "",
          onClick: a
        }), m(l, {
          wallet: t.wallet
        }, null, 8, ["wallet"]), m(c, {
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
        title: u("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => R().push({
          name: "memepad-new",
          query: {
            memepadFrom: U.MAIN,
            memepadNewFrom: pe.MAIN
          }
        })
      }, {
        title: u("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => R().push({
          name: "memepad",
          query: {
            memepadFrom: U.MAIN
          }
        })
      }, {
        title: u("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          H().main.controlsTradingBotClick(), O().openTradingBot()
        }
      }]);
      return (n, a) => {
        const t = ne;
        return i(), p("div", $t, [(i(!0), p(N, null, q(o(e), (s, r) => (i(), p("button", {
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
  Et = {
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
          t = It;
        return i(), p("div", Et, [m(a, {
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
        a = (s, r) => async () => {
          const l = await e.dailyRewardClaim();
          xe(l, {
            Err: () => n.error(u("base.claim_error")),
            Ok: c => {
              s === X.RESTORE && n.success(u("daily_reward.streak_restored", {
                days: r
              })), n.success(`You’ve got ${Be(c.claimedReward.points)} BP`), n.success(ae("span", ["You’ve got ", ae("i", {
                class: "ticket"
              }), ` ${c.claimedReward.passes}`])), O().makeConfetti(), H().main.dailyRewardClick({
                points: c.claimedReward.points.toNumber(),
                passes: c.claimedReward.passes
              })
            }
          })
        }, t = $(() => {
          if (e.dailyReward === void 0) return;
          const s = e.dailyReward.currentStreakDays,
            r = `${s}-${u("base.n.days",s)}`;
          if (e.dailyReward.claim === X.RESTORE) return {
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
            const _ = Te().ms100ticker.value;
            if (!_) return Ie();
            const k = Ee(e.dailyReward.canClaimAt - _, "letters");
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
              can: e.dailyReward.claim !== X.UNAVAILABLE,
              fn: a(e.dailyReward.claim, r)
            }
          }
        });
      return (s, r) => {
        const l = V,
          c = ne,
          _ = Je;
        return i(), p("div", Pt, [o(t) ? (i(), p("div", Rt, [m(c, {
          name: o(t).icon,
          class: "icon"
        }, null, 8, ["name"]), b("div", Nt, [b("div", Mt, A(o(t).title), 1), ("isOk" in s ? s.isOk : o(te))(o(t).subtitle) ? (i(), p("div", Lt, A(o(t).subtitle.data), 1)) : (i(), y(l, {
          key: 1,
          secondary: "",
          class: "skeleton subtitle"
        }))]), o(t).claim ? (i(), y(_, {
          key: 0,
          label: o(t).claim.label,
          "can-claim": o(t).claim.can,
          "claim-fn": o(t).claim.fn,
          style: W(o(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : x("", !0)])) : (i(), y(l, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  zt = g(Kt, [
    ["__scopeId", "data-v-181516c9"]
  ]),
  Ot = {
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
  Wt = {
    class: "icon-wrapper"
  },
  Ht = ["src"],
  Yt = f({
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
    setup(d) {
      return (e, n) => {
        const a = ye,
          t = Q,
          s = be;
        return i(), p("div", Ot, [b("img", {
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
        }, null, 8, Ut), m(a, {
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"])]), b("div", Wt, [e.icon ? (i(), y(t, {
          key: 0,
          name: e.icon,
          style: W({
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
          style: W({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 12, Ht)) : x("", !0)])])])
      }
    }
  }),
  qt = g(Yt, [
    ["__scopeId", "data-v-3b6f23f8"]
  ]),
  Gt = {
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
      return (a, t) => (i(), p("div", Gt, [(i(!0), p(N, null, q(o(n), s => (i(), p("div", {
        key: s.key,
        class: ee(["progress", [`is-state-${s.state}`]]),
        style: W(s.state === "current" ? {
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
        })) : x("", !0)])
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
        const a = be;
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
        t = $(() => n.button.type === "next" ? n.isLast ? u("base.close") : u("base.next") : n.button.label),
        s = () => {
          if (n.button.type === "next") L().$webApp.HapticFeedback.impactOccurred("light"), a("next");
          else if (n.button.type === "local") R().push(n.button.link);
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
          size: o(J).LARGE,
          onClick: l[0] || (l[0] = Y(_ => s(), ["stop"]))
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
          r = fn;
        return i(), p("div", vn, [m(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), b("div", gn, [b("div", kn, [e.story.layout.type === "TitleSubtitle" ? (i(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), y(s, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : x("", !0)]), b("div", hn, [e.story.button ? (i(), y(r, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = l => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : x("", !0)])])])
      }
    }
  }),
  $n = g(wn, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  Sn = (d, e) => {
    const n = d,
      a = E(d),
      t = $(() => 1 - a.value / n);
    let s = 0,
      r;
    const l = () => {
        s = Date.now(), r = Re(() => {
          const S = Date.now(),
            v = S - s;
          s = S, a.value = Math.max(a.value - v, 0), a.value <= 0 && (c(), e())
        }, 100)
      },
      c = () => {
        r && (clearInterval(r), r = void 0)
      },
      _ = () => {
        if (r) {
          c();
          const S = Date.now() - s;
          a.value = Math.max(a.value - S, 0)
        }
      },
      k = () => l();
    return l(), {
      timeToExpire: Pe(a),
      progress: t,
      destroy: c,
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
        t = E(0),
        s = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, _()) : a("close")
        },
        r = () => {
          t.value > 0 ? (t.value -= 1, _()) : a("close")
        },
        l = () => Sn(5e3, s),
        c = Ne(l()),
        _ = () => {
          c.value.destroy(), c.value = l()
        },
        k = E(),
        S = Me(),
        v = E(!1),
        w = E(!1),
        I = () => {
          v.value = !1, w.value = !1, S.set(() => {
            c.value.pause(), v.value = !0, w.value = !0
          }, Cn)
        },
        M = () => {
          S.destroy(), v.value && (c.value.resume(), v.value = !1)
        },
        z = h => {
          if (v.value || w.value || !k.value) return;
          const {
            width: C,
            left: G
          } = k.value.getBoundingClientRect(), D = h.clientX - G, F = C / 3;
          D < F ? r() : D > F * 2 && s()
        };
      return Le(() => {
        S.destroy(), c.value.destroy()
      }), (h, C) => {
        const G = Jt,
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
            onPointerdown: C[1] || (C[1] = Y(K => I(), ["prevent"])),
            onPointerup: C[2] || (C[2] = K => M()),
            onPointercancel: C[3] || (C[3] = K => M()),
            onPointerleave: C[4] || (C[4] = K => M()),
            onClick: C[5] || (C[5] = K => z(K))
          }, [m(G, {
            current: o(t),
            "current-progress": o(c).progress.value,
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
  In = f({
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
          }, null, 8, ["stories"])) : x("", !0)]),
          _: 1
        })
      }
    }
  }),
  En = g(In, [
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
        a = O(),
        t = H(),
        s = L().$webApp,
        r = [{
          title: u("index.banners.trade_now.title"),
          buttonLabel: u("index.banners.trade_now.button_label"),
          onButtonClick: () => {
            a.openTradingBot()
          },
          icon: "ton-logo",
          imageSize: 64,
          analyticsName: B.TRADE_NOW
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
          analyticsName: B.EARN_NOW
        }, {
          title: u("index.banners.season_2.title"),
          buttonLabel: u("index.banners.season_2.button_label"),
          onButtonClick: () => {
            l.value = !0
          },
          lottie: "animations/Moon",
          imageSize: 96,
          analyticsName: B.SEASON_2
        }, {
          title: u("index.banners.blum_x.title"),
          buttonLabel: u("index.banners.blum_x.button_label"),
          onButtonClick: () => {
            O().openBlumTwitter()
          },
          gif: P("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: B.BLUM_X
        }, {
          title: u("index.banners.blum_academy.title"),
          buttonLabel: u("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            s.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: P("index/banner/edu", "gif"),
          imageSize: 102,
          analyticsName: B.BLUM_ACADEMY
        }, {
          title: u("index.banners.create_memecoin.title"),
          buttonLabel: u("index.banners.create_memecoin.button_label"),
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
          analyticsName: B.CREATE_MEMECOIN
        }, {
          title: u("index.banners.friends.title"),
          buttonLabel: u("index.banners.friends.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens"
            })
          },
          gif: P("index/banner/comission", "gif"),
          imageSize: 100,
          analyticsName: B.FRIENDS
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
          gif: P("index/banner/riskreward", "gif"),
          imageSize: 102,
          analyticsName: B.TRADE_MEMECOIN
        }, {
          title: u("index.banners.leaderboard.title"),
          buttonLabel: u("index.banners.leaderboard.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens-leaderboards"
            })
          },
          gif: P("index/banner/leaderboard", "gif"),
          imageSize: 102,
          analyticsName: B.LEADERBOARDS
        }].map((v, w) => ({
          ...v,
          onButtonClick: () => {
            t.main.bannerClick({
              position: w + 1,
              bannerName: v.analyticsName
            }), v.onButtonClick()
          }
        })),
        l = E(e.value.showOnStart);
      Oe(l, v => v && e.value.onShowed(), {
        immediate: !0
      });
      const c = E(De(0, r.length - 1)),
        _ = E(null),
        k = (v, w = "smooth") => {
          var I;
          (I = _.value) == null || I.scrollTo({
            left: v * window.innerWidth + (c.value > v ? -1 : 1),
            behavior: w
          })
        },
        S = Fe(() => {
          if (!_.value) return;
          const v = _.value.children[0].offsetWidth + 10,
            w = _.value.scrollLeft,
            I = Math.round(w / v);
          c.value = I
        }, 50).debouncedFunction;
      return Ve(() => {
        k(c.value, "instant")
      }), (v, w) => {
        const I = qt,
          M = Ze,
          z = En;
        return i(), p("div", xn, [b("div", {
          ref_key: "listEl",
          ref: _,
          class: "list",
          onScroll: w[0] || (w[0] = (...h) => o(S) && o(S)(...h)),
          onTouchmove: w[1] || (w[1] = (...h) => o(S) && o(S)(...h))
        }, [(i(!0), p(N, null, q(o(r), (h, C) => (i(), p("div", {
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
          "analytics-name": h.analyticsName
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name"])]))), 128))], 544), b("div", Bn, [o(r).length > 1 ? (i(), y(M, {
          key: 0,
          "model-value": o(c),
          count: o(r).length,
          timer: 15e3,
          "onUpdate:modelValue": k
        }, null, 8, ["model-value", "count"])) : x("", !0)]), m(z, {
          modelValue: o(l),
          "onUpdate:modelValue": w[2] || (w[2] = h => me(l) ? l.value = h : null),
          set: v.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Rn = g(Pn, [
    ["__scopeId", "data-v-fd023298"]
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
        return i(), p("div", Nn, [(i(!0), p(N, null, q(e.count, t => (i(), p("div", {
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
  On = f({
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
        const t = fe,
          s = Kn,
          r = Xe;
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
  Vn = g(On, [
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
  Wn = {
    class: "balance"
  },
  Hn = f({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(d) {
      const e = d,
        n = $(() => {
          const t = (() => {
            const s = O().internal;
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
        a = () => R().push({
          name: "game"
        });
      return (t, s) => {
        const r = fe,
          l = ne,
          c = V,
          _ = ye;
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
        }), m(_, {
          label: ("t" in t ? t.t : o(u))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (i(), p("div", Fn, [m(l, {
          name: o(n).image,
          class: "icon"
        }, null, 8, ["name"]), b("div", jn, [b("div", Un, A(("t" in t ? t.t : o(u))("game.card.title")), 1), b("div", Wn, A(o(n).pp) + " Play passes", 1)]), m(_, {
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
  Yn = g(Hn, [
    ["__scopeId", "data-v-7c6add22"]
  ]),
  qn = () => {
    const d = je(),
      e = Ue(),
      n = We(),
      a = $(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      s = {
        set: Gn(),
        showOnStart: !L().$webApp.storage.local.get(t),
        onShowed: () => {
          L().$webApp.storage.local.set(t, "true")
        }
      },
      r = $(() => {
        const c = d.pointSymbols.value,
          _ = d.dropSymbols.value;
        if (!(!c || !_) && !(!c.mp || !c.bp)) return [c.mp, c.bp, ..._]
      }),
      l = $(() => d.pointSymbols.value.pp);
    return {
      dailyReward: n,
      myTribe: a,
      season2Stories: s,
      wallet: $(() => d.wallet.value),
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
  Xn = {
    class: "index-page page"
  },
  Jn = f({
    __name: "index",
    setup(d) {
      const e = qn();
      return (n, a) => {
        const t = Bt,
          s = zt,
          r = Rn,
          l = Vn,
          c = Yn;
        return i(), p("div", Xn, [m(t, {
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
  go = g(Jn, [
    ["__scopeId", "data-v-97e08456"]
  ]);
export {
  go as
  default
};