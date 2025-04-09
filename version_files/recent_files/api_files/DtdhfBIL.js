import {
  _ as ie
} from "./uFBSuwBb.js";
import {
  _ as V
} from "./B0Xhtl34.js";
import {
  d as f,
  j as $,
  a3 as le,
  o as i,
  c as p,
  e as o,
  M as y,
  a as b,
  t as C,
  C as r,
  ar as ge,
  X,
  E,
  az as ke,
  aA as he,
  x as Z,
  f as g,
  ab as P,
  F as R,
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
  ax as _e,
  k as Ae,
  aG as de,
  aH as Ce,
  m as oe,
  Y as Te,
  p as me,
  aI as U,
  aJ as pe,
  a6 as z,
  q as G,
  aK as J,
  a5 as se,
  O as Ee,
  aL as Ie,
  P as xe,
  aM as be,
  aN as H,
  aO as Be,
  Q as Ne,
  aq as ae,
  W as N,
  an as ye,
  aP as Pe,
  aQ as Re,
  aR as Me,
  aS as Le,
  a2 as Oe,
  aw as Ke,
  al as ze,
  aT as Ve,
  aU as x,
  U as De,
  ak as Fe,
  G as je,
  Z as Ue,
  aV as He,
  aW as Ye
} from "./Cbo9LC6p.js";
import {
  _ as We
} from "./CzpgX9nr.js";
import {
  _ as Ge,
  a as qe
} from "./DUhGNNrn.js";
import {
  _ as Je
} from "./DCCbGgRz.js";
import {
  _ as ne,
  a as fe,
  b as Xe
} from "./CcrWiPVn.js";
import {
  _ as Ze
} from "./CD_yIYp2.js";
import {
  _ as Qe
} from "./BiS4p2Vt.js";
import {
  _ as et
} from "./fsx4Y4h1.js";
import {
  _ as tt
} from "./M3dUyArS.js";
import {
  _ as ve
} from "./D9GmdU5A.js";
import "./DR-Wzlw7.js";
import "./DY3IUnyG.js";
import "./D2euHmaP.js";
import "./BdzjCQeO.js";
import "./DdW72Z7B.js";
import "./BCT2FObz.js";
import "./BTMIn2cF.js";
import "./BRW5tEA5.js";
const nt = {
    class: "pages-index-banner-wallet"
  },
  ot = {
    key: 1,
    class: "connected"
  },
  st = {
    class: "label"
  },
  at = f({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(_) {
      const e = _,
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
        return i(), p("div", nt, [o(a).type === "skeleton" ? (i(), y(c, {
          key: 0,
          class: "skeleton"
        })) : o(a).type === "connected" ? (i(), p("div", ot, [b("div", st, C(("t" in t ? t.t : o(r))("wallet.total_balance")), 1), (i(), y(ge(o(a).balance), {
          class: "balance"
        }))])) : o(a).type === "connect" ? (i(), y(l, {
          key: 2,
          label: ("t" in t ? t.t : o(r))("wallet.connect.btn"),
          size: o(X).SMALL,
          onClick: s[0] || (s[0] = u => n())
        }, null, 8, ["label", "size"])) : E("", !0)])
      }
    }
  }),
  it = g(at, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  lt = {
    class: "pages-tribe-external-index-page"
  },
  rt = f({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(_) {
      const e = P().resolve({
          name: "tribe-join"
        }).fullPath,
        n = P().resolve({
          name: "tribe-slug"
        }).fullPath,
        a = t => Y().main.tribeLogoClick(t);
      return (t, s) => {
        const c = V,
          l = we,
          u = Q,
          d = We;
        return i(), p("div", lt, [t.myTribe ? (i(), p(R, {
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
          default: T(() => [m(d, {
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
  ct = g(rt, [
    ["__scopeId", "data-v-ef3e1f1f"]
  ]),
  ut = {
    class: "field-label"
  },
  _t = {
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
    setup(_) {
      re(n => ({
        bc7bb12e: n.height,
        "0b714ec0": n.borderRadius,
        "4280b9dc": n.iconSize
      }));
      const e = $(() => ({
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
        }, null, 8, ["name"]), b("div", ut, C(n.label), 1), b("div", _t, C(n.value), 1)], 2)
      }
    }
  }),
  mt = g(dt, [
    ["__scopeId", "data-v-d2541044"]
  ]),
  pt = f({
    __name: "BannerProfileModalEmailVerify",
    setup(_) {
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
        const u = Ge,
          d = $e("I18nT");
        return o(n) ? (i(), y(u, {
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
            onClick: l[0] || (l[0] = W(k => a(), ["prevent"]))
          }, C(("t" in c ? c.t : o(r))("secure_options.profile_modal.connect_email.not_verified_caption_resend")), 1)]),
          _: 1
        }))
      }
    }
  }),
  bt = g(pt, [
    ["__scopeId", "data-v-7dba19d1"]
  ]),
  yt = f({
    __name: "BannerProfileModalEmailDisconnect",
    emits: ["confirm:disconnect"],
    setup(_, {
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
              const d = await n();
              if (!te(d)) {
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
      }, C(("t" in c ? c.t : o(r))("secure_options.profile_modal.disconnect_email.btn")), 1))
    }
  }),
  ft = g(yt, [
    ["__scopeId", "data-v-d5808e4e"]
  ]),
  vt = f({
    __name: "BannerProfileModalFooter",
    emits: ["click:connect-account", "confirm:disconnect"],
    setup(_, {
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
        const d = mt,
          k = bt,
          S = ft,
          v = Z;
        return o(t) ? (i(), p(R, {
          key: 0
        }, [m(d, {
          icon: "email",
          label: ("t" in l ? l.t : o(r))("secure_options.profile_modal.connect_email.label"),
          value: o(c),
          disabled: !o(s)
        }, null, 8, ["label", "value", "disabled"]), o(s) ? E("", !0) : (i(), p(R, {
          key: 0
        }, [m(k), m(S, {
          "onConfirm:disconnect": u[0] || (u[0] = w => n("confirm:disconnect"))
        })], 64))], 64)) : (i(), y(v, {
          key: 1,
          label: ("t" in l ? l.t : o(r))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: o(X).LARGE,
          onClick: u[1] || (u[1] = w => n("click:connect-account"))
        }, null, 8, ["label", "size"]))
      }
    }
  }),
  gt = f({
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
        } = Ae(),
        {
          secureOptionsModals: a
        } = de(),
        t = ue(),
        s = $(() => {
          var d;
          return ((d = n.getUser.value) == null ? void 0 : d.username) ?? "user"
        }),
        c = $(() => {
          var d;
          return ((d = t.value) == null ? void 0 : d.hasEmail) ?? !1
        }),
        l = () => {
          u(), a.main.show()
        },
        u = () => {
          e.value = !1
        };
      return (d, k) => {
        const S = ie,
          v = vt,
          w = Je,
          I = Te,
          M = qe;
        return i(), p(R, null, [m(I, {
          modelValue: e.value,
          "onUpdate:modelValue": k[0] || (k[0] = K => e.value = K)
        }, {
          default: T(() => [m(w, null, Ce({
            header: T(() => [m(S, {
              size: "96px",
              class: "avatar"
            })]),
            title: T(() => [oe(C(o(s)), 1)]),
            footer: T(() => [m(v, {
              "onClick:connectAccount": l,
              "onConfirm:disconnect": u
            })]),
            _: 2
          }, [o(c) ? void 0 : {
            name: "subTitle",
            fn: T(() => [oe(C(("t" in d ? d.t : o(r))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
            key: "0"
          }]), 1024)]),
          _: 1
        }, 8, ["modelValue"]), m(M)], 64)
      }
    }
  }),
  kt = g(gt, [
    ["__scopeId", "data-v-657ce5c0"]
  ]),
  ht = {
    class: "pages-index-banner-profile-tribe"
  },
  wt = f({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      const {
        isStaySecureFeatureEnabled: e
      } = de(), n = B(!1), a = () => {
        e.value && (n.value = !0)
      };
      return (t, s) => {
        const c = ie,
          l = it,
          u = ct,
          d = kt;
        return i(), p("div", ht, [m(c, {
          small: "",
          onClick: a
        }), m(l, {
          wallet: t.wallet
        }, null, 8, ["wallet"]), m(u, {
          "my-tribe": t.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"]), m(d, {
          modelValue: o(n),
          "onUpdate:modelValue": s[0] || (s[0] = k => me(n) ? n.value = k : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  $t = g(wt, [
    ["__scopeId", "data-v-67447d49"]
  ]),
  St = {
    class: "pages-index-banner-controls"
  },
  At = ["onClick"],
  Ct = {
    class: "image-container"
  },
  Tt = {
    class: "title"
  },
  Et = f({
    __name: "BannerControls",
    setup(_) {
      const e = $(() => [{
        title: r("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => P().push({
          name: "memepad-new",
          query: {
            memepadFrom: U.MAIN,
            memepadNewFrom: pe.MAIN
          }
        })
      }, {
        title: r("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => P().push({
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
        return i(), p("div", St, [(i(!0), p(R, null, G(o(e), (s, c) => (i(), p("button", {
          key: c,
          class: "control reset",
          onClick: l => s.onClick()
        }, [b("div", Ct, [m(t, {
          name: s.image,
          class: "image"
        }, null, 8, ["name"])]), b("div", Tt, C(s.title), 1)], 8, At))), 128))])
      }
    }
  }),
  It = g(Et, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  xt = {
    class: "pages-index-banner"
  },
  Bt = f({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      return (e, n) => {
        const a = $t,
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
  Nt = g(Bt, [
    ["__scopeId", "data-v-8f4c28ad"]
  ]),
  Pt = {
    class: "pages-index-daily-reward"
  },
  Rt = {
    key: 1,
    class: "widget has-radius"
  },
  Mt = {
    class: "compose"
  },
  Lt = {
    class: "title"
  },
  Ot = {
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
    setup(_) {
      const e = _,
        n = j(),
        a = (s, c) => async () => {
          const l = await e.dailyRewardClaim();
          Be(l, {
            Err: () => n.error(r("base.claim_error")),
            Ok: u => {
              s === J.RESTORE && n.success(r("daily_reward.streak_restored", {
                days: c
              })), n.success(`You’ve got ${Ne(u.claimedReward.points)} BP`), n.success(ae("span", ["You’ve got ", ae("i", {
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
          if (e.dailyReward.claim === J.RESTORE) return {
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
            const d = Ee().ms100ticker.value;
            if (!d) return Ie();
            const k = xe(e.dailyReward.canClaimAt - d, "letters");
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
              can: e.dailyReward.claim !== J.UNAVAILABLE,
              fn: a(e.dailyReward.claim, c)
            }
          }
        });
      return (s, c) => {
        const l = V,
          u = ne,
          d = Ze;
        return i(), p("div", Pt, [o(t) ? (i(), p("div", Rt, [m(u, {
          name: o(t).icon,
          class: "icon"
        }, null, 8, ["name"]), b("div", Mt, [b("div", Lt, C(o(t).title), 1), ("isOk" in s ? s.isOk : o(te))(o(t).subtitle) ? (i(), p("div", Ot, C(o(t).subtitle.data), 1)) : (i(), y(l, {
          key: 1,
          type: o(be).SECONDARY,
          class: "skeleton subtitle"
        }, null, 8, ["type"]))]), o(t).claim ? (i(), y(d, {
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
    ["__scopeId", "data-v-c4174779"]
  ]),
  Vt = {
    class: "pages-index-new-season-banner-card"
  },
  Dt = ["src"],
  Ft = ["src"],
  jt = {
    class: "content"
  },
  Ut = {
    class: "inner"
  },
  Ht = ["innerHTML"],
  Yt = {
    class: "icon-wrapper"
  },
  Wt = ["src"],
  Gt = f({
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
    setup(_) {
      return (e, n) => {
        const a = fe,
          t = Q,
          s = ye;
        return i(), p("div", Vt, [b("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(N))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, Dt), n[0] || (n[0] = b("div", {
          class: "bg"
        }, null, -1)), b("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(N))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, Ft), b("div", jt, [b("div", Ut, [b("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Ht), e.hideButton ? E("", !0) : (i(), y(a, {
          key: 0,
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"]))]), b("div", Yt, [e.icon ? (i(), y(t, {
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
  qt = g(Gt, [
    ["__scopeId", "data-v-80b1be0e"]
  ]),
  Jt = {
    class: "kit-stories-src-counter"
  },
  Xt = f({
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
      return (a, t) => (i(), p("div", Jt, [(i(!0), p(R, null, G(o(n), s => (i(), p("div", {
        key: s.key,
        class: ee(["progress", [`is-state-${s.state}`]]),
        style: H(s.state === "current" ? {
          "background-position-x": `-${s.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  Zt = g(Xt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  Qt = {
    class: "kit-stories-shared-background"
  },
  en = ["poster", "src"],
  tn = ["src"],
  nn = f({
    __name: "Background",
    props: {
      background: {}
    },
    setup(_) {
      return (e, n) => {
        const a = et;
        return i(), p("div", Qt, [e.background.type === "video" ? (i(), p("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, en)) : e.background.type === "image" ? (i(), p("img", {
          key: 1,
          src: e.background.src
        }, null, 8, tn)) : e.background.type === "stars" ? (i(), y(a, {
          key: 2,
          class: "stars"
        })) : E("", !0)])
      }
    }
  }),
  on = g(nn, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  sn = {
    class: "kit-stories-layouts-title-subtitle"
  },
  an = {
    class: "title"
  },
  ln = {
    class: "subtitle"
  },
  rn = f({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => (i(), p("div", sn, [b("div", an, C(e.layout.title), 1), b("div", ln, C(e.layout.subtitle), 1)]))
    }
  }),
  cn = g(rn, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  un = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  _n = {
    class: "animoji-container"
  },
  dn = {
    class: "content-container"
  },
  mn = {
    class: "title"
  },
  pn = {
    class: "subtitle"
  },
  bn = f({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => {
        const a = ye;
        return i(), p("div", un, [b("div", _n, [m(a, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), b("div", dn, [b("div", mn, C(e.layout.title), 1), b("div", pn, C(e.layout.subtitle), 1)])])
      }
    }
  }),
  yn = g(bn, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  fn = f({
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
        t = $(() => n.button.type === "next" ? n.isLast ? r("base.close") : r("base.next") : n.button.label),
        s = () => {
          if (n.button.type === "next") L().$webApp.HapticFeedback.impactOccurred("light"), a("next");
          else if (n.button.type === "local") P().push(n.button.link);
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
          size: o(X).LARGE,
          onClick: l[0] || (l[0] = W(d => s(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  vn = g(fn, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  gn = {
    class: "kit-stories-src-story"
  },
  kn = {
    class: "content"
  },
  hn = {
    class: "layout"
  },
  wn = {
    class: "button"
  },
  $n = f({
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
        const a = on,
          t = cn,
          s = yn,
          c = vn;
        return i(), p("div", gn, [m(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), b("div", kn, [b("div", hn, [e.story.layout.type === "TitleSubtitle" ? (i(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), y(s, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : E("", !0)]), b("div", wn, [e.story.button ? (i(), y(c, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = l => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : E("", !0)])])])
      }
    }
  }),
  Sn = g($n, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  An = (_, e) => {
    const n = _,
      a = B(_),
      t = $(() => 1 - a.value / n);
    let s = 0,
      c;
    const l = () => {
        s = Date.now(), c = Re(() => {
          const S = Date.now(),
            v = S - s;
          s = S, a.value = Math.max(a.value - v, 0), a.value <= 0 && (u(), e())
        }, 100)
      },
      u = () => {
        c && (clearInterval(c), c = void 0)
      },
      d = () => {
        if (c) {
          u();
          const S = Date.now() - s;
          a.value = Math.max(a.value - S, 0)
        }
      },
      k = () => l();
    return l(), {
      timeToExpire: Pe(a),
      progress: t,
      destroy: u,
      pause: d,
      resume: k
    }
  },
  Cn = 150,
  Tn = f({
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
        t = B(0),
        s = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, d()) : a("close")
        },
        c = () => {
          t.value > 0 ? (t.value -= 1, d()) : a("close")
        },
        l = () => An(5e3, s),
        u = Me(l()),
        d = () => {
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
        K = h => {
          if (v.value || w.value || !k.value) return;
          const {
            width: A,
            left: q
          } = k.value.getBoundingClientRect(), D = h.clientX - q, F = A / 3;
          D < F ? c() : D > F * 2 && s()
        };
      return Oe(() => {
        S.destroy(), u.value.destroy()
      }), (h, A) => {
        const q = Zt,
          D = Sn,
          F = tt;
        return i(), y(F, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: T(() => [b("div", {
            ref_key: "storiesRef",
            ref: k,
            class: "kit-stories-src-stories",
            onPointerdown: A[1] || (A[1] = W(O => I(), ["prevent"])),
            onPointerup: A[2] || (A[2] = O => M()),
            onPointercancel: A[3] || (A[3] = O => M()),
            onPointerleave: A[4] || (A[4] = O => M()),
            onClick: A[5] || (A[5] = O => K(O))
          }, [m(q, {
            current: o(t),
            "current-progress": o(u).progress.value,
            count: h.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (i(), y(D, {
            key: o(t),
            story: h.stories[o(t)],
            "is-last": o(t) === h.stories.length - 1,
            onNext: A[0] || (A[0] = O => s())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  En = g(Tn, [
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
    setup(_) {
      const e = _e(_, "modelValue");
      return (n, a) => {
        const t = En;
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
  Bn = {
    class: "pages-index-new-season-banner"
  },
  Nn = {
    class: "progress"
  },
  Pn = f({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(_) {
      const e = _,
        n = P(),
        a = z(),
        t = Y(),
        s = L().$webApp,
        c = [{
          title: r("index.banners.hash_cash.title"),
          buttonLabel: r("index.banners.hash_cash.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-jetton-shortname",
              params: {
                shortname: "HASHCASH_2sb56"
              },
              query: {
                from: Ve.MAIN_PAGE_BANNER_HASHCASH
              }
            })
          },
          gif: N("index/banner/hashcash", "gif"),
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
          gif: N("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: x.BLUM_X
        }, {
          title: r("index.banners.blum_academy.title"),
          buttonLabel: r("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            s.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: N("index/banner/edu", "gif"),
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
          gif: N("index/banner/memecoin", "gif"),
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
          gif: N("index/banner/comission", "gif"),
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
          gif: N("index/banner/riskreward", "gif"),
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
          gif: N("index/banner/leaderboard", "gif"),
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
      De(l, v => v && e.value.onShowed(), {
        immediate: !0
      });
      const u = B(0),
        d = B(null),
        k = (v, w = "smooth") => {
          var I;
          (I = d.value) == null || I.scrollTo({
            left: v * window.innerWidth + (u.value > v ? -1 : 1),
            behavior: w
          })
        },
        S = je(() => {
          if (!d.value) return;
          const v = d.value.children[0].offsetWidth + 10,
            w = d.value.scrollLeft,
            I = Math.round(w / v);
          u.value = I
        }, 50).debouncedFunction;
      return Fe(() => {
        k(u.value, "instant")
      }), (v, w) => {
        const I = qt,
          M = Qe,
          K = xn;
        return i(), p("div", Bn, [b("div", {
          ref_key: "listEl",
          ref: d,
          class: "list",
          onScroll: w[0] || (w[0] = (...h) => o(S) && o(S)(...h)),
          onTouchmove: w[1] || (w[1] = (...h) => o(S) && o(S)(...h))
        }, [(i(!0), p(R, null, G(o(c), (h, A) => (i(), p("div", {
          key: h.title,
          class: "item"
        }, [m(I, {
          index: A,
          icon: h.icon,
          lottie: h.lottie,
          gif: h.gif,
          title: h.title,
          "button-label": h.buttonLabel,
          "on-button-click": h.onButtonClick,
          "image-size": h.imageSize,
          "analytics-name": h.analyticsName,
          "hide-button": h.hideButton
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name", "hide-button"])]))), 128))], 544), b("div", Nn, [o(c).length > 1 ? (i(), y(M, {
          key: 0,
          "model-value": o(u),
          count: o(c).length,
          timer: 15e3,
          "onUpdate:modelValue": k
        }, null, 8, ["model-value", "count"])) : E("", !0)]), m(K, {
          modelValue: o(l),
          "onUpdate:modelValue": w[2] || (w[2] = h => me(l) ? l.value = h : null),
          set: v.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Rn = g(Pn, [
    ["__scopeId", "data-v-c4836903"]
  ]),
  Mn = {
    class: "pages-wallet-asset-skeleton"
  },
  Ln = {
    class: "content"
  },
  On = f({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(_) {
      return (e, n) => {
        const a = V;
        return i(), p("div", Mn, [(i(!0), p(R, null, G(e.count, t => (i(), p("div", {
          key: t,
          class: "skeleton"
        }, [m(a, {
          rounded: "",
          class: "logo"
        }), b("div", Ln, [m(a, {
          class: "title"
        }), m(a, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  Kn = g(On, [
    ["__scopeId", "data-v-26805825"]
  ]),
  zn = {
    class: "pages-index-points"
  },
  Vn = f({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(_) {
      const e = $(() => P().resolve({
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
        return i(), p("div", zn, [m(t, {
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
  Dn = g(Vn, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  Fn = {
    key: 0,
    class: "skeleton"
  },
  jn = {
    key: 1,
    class: "default"
  },
  Un = {
    class: "content"
  },
  Hn = {
    class: "title"
  },
  Yn = {
    class: "balance"
  },
  Wn = f({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(_) {
      const e = _,
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
        a = () => P().push({
          name: "game"
        });
      return (t, s) => {
        const c = ve,
          l = ne,
          u = V,
          d = fe;
        return i(), p("div", {
          class: ee(["pages-index-game", `is-mode-${o(n).mode}`])
        }, [m(c, {
          label: ("t" in t ? t.t : o(r))("base.game")
        }, null, 8, ["label"]), o(n).type === "skeleton" ? (i(), p("div", Fn, [m(l, {
          name: o(n).image,
          class: "icon"
        }, null, 8, ["name"]), m(u, {
          type: o(be).SECONDARY,
          class: "skeleton-title"
        }, null, 8, ["type"]), m(d, {
          label: ("t" in t ? t.t : o(r))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (i(), p("div", jn, [m(l, {
          name: o(n).image,
          class: "icon"
        }, null, 8, ["name"]), b("div", Un, [b("div", Hn, C(("t" in t ? t.t : o(r))("game.card.title")), 1), b("div", Yn, C(o(n).pp) + " Play passes", 1)]), m(d, {
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
  Gn = g(Wn, [
    ["__scopeId", "data-v-86df2fc1"]
  ]),
  qn = () => {
    const _ = Ue(),
      e = He(),
      n = Ye(),
      a = $(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      s = {
        set: Jn(),
        showOnStart: !L().$webApp.storage.local.get(t),
        onShowed: () => {
          L().$webApp.storage.local.set(t, "true")
        }
      },
      c = $(() => {
        const u = _.pointSymbols.value,
          d = _.dropSymbols.value;
        if (!(!u || !d) && !(!u.mp || !u.bp)) return [u.mp, u.bp, ...d]
      }),
      l = $(() => _.pointSymbols.value.pp);
    return {
      dailyReward: n,
      myTribe: a,
      season2Stories: s,
      wallet: $(() => _.wallet.value),
      pp: l,
      walletAssets: c
    }
  },
  Jn = () => ({
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
  Zn = f({
    __name: "index",
    setup(_) {
      const e = qn();
      return (n, a) => {
        const t = Nt,
          s = zt,
          c = Rn,
          l = Dn,
          u = Gn;
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
  ko = g(Zn, [
    ["__scopeId", "data-v-97e08456"]
  ]);
export {
  ko as
  default
};