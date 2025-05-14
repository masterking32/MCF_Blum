import {
  _ as le,
  a as ke
} from "./DWVZGNQq.js";
import {
  d as k,
  ak as ee,
  al as te,
  am as ne,
  y as N,
  j as C,
  $ as re,
  o as i,
  c as d,
  e as s,
  N as y,
  G as x,
  b as p,
  D as T,
  m as Q,
  t as E,
  a as b,
  an as F,
  C as c,
  ao as ce,
  F as P,
  ae as Y,
  ap as ue,
  ac as O,
  _ as H,
  f as h,
  a8 as _e,
  aq as ge,
  a1 as oe,
  ar as he,
  as as $e,
  x as se,
  ah as z,
  X as G,
  I as we,
  at as de,
  n as ae,
  h as L,
  W as me,
  k as Se,
  au as Ce,
  a2 as Ae,
  p as pe,
  av as U,
  aw as be,
  ab as W,
  q as X,
  ax as Z,
  aa as ie,
  P as Ee,
  ay as Te,
  Q as xe,
  az as Ie,
  aA as q,
  aB as Ne,
  R as Be,
  a0 as M,
  aC as ye,
  aD as Re,
  aE as Pe,
  aF as Me,
  aG as Le,
  a7 as ze,
  V as Ve,
  aH as R,
  E as Oe,
  Z as Ke,
  af as De,
  H as Fe,
  a3 as je,
  aI as Ue,
  aJ as We
} from "./CeLf80nu.js";
import {
  _ as fe
} from "./BZlBCaKA.js";
import {
  _ as J
} from "./DO9xrrcf.js";
import {
  _ as qe
} from "./CSbJ1JwP.js";
import {
  _ as Ye
} from "./BYZOLbTv.js";
import {
  _ as ve,
  a as He,
  b as Ge
} from "./CFJW94qr.js";
import {
  _ as Xe
} from "./DV6EXTV_.js";
import {
  _ as Je
} from "./C6J8TIRG.js";
import {
  _ as Ze
} from "./CLPfiL4J.js";
import {
  _ as Qe
} from "./Ywpn0sFW.js";
import {
  _ as et
} from "./CHtWDl72.js";
import "./CGKXGRhX.js";
import "./DX1yD9Qw.js";
import "./COYKm9W1.js";
import "./Dag53-KM.js";
import "./CiinTD8R.js";
import "./BSgRs94G.js";
import "./bC8o9hpL.js";
import "./BKc2VfQ7.js";
const tt = {
    key: 0,
    class: "notification"
  },
  nt = k({
    __name: "BannerStaySecureNotification",
    setup(_) {
      const e = ee(),
        {
          sendEmailAuthProviderVerification: n
        } = te(),
        {
          hasClosedStaySecureNotification: a,
          markStaySecureNotificationAsClosed: t
        } = ne(),
        o = N(!0),
        r = N(!1),
        l = C(() => {
          var $;
          return (($ = e.value) == null ? void 0 : $.emailMasked) ?? ""
        }),
        u = C(() => {
          var $;
          return (($ = e.value) == null ? void 0 : $.hasEmail) ?? !1
        }),
        m = C(() => {
          var $;
          return (($ = e.value) == null ? void 0 : $.isEmailVerified) ?? !1
        }),
        g = C(() => o.value && u.value && !m.value && !a() && !r.value),
        S = () => {
          o.value = !1, t()
        },
        f = async $ => {
          const B = await n({
            captchaToken: $
          });
          if (!Y(B)) {
            if (B.code === ue.Forbidden) {
              r.value = !0;
              return
            }
            O().error();
            return
          }
          S(), O().success(c("secure_options.message.email_code_sent"))
        }, w = async $ => {
          await f($), r.value = !1
        }, I = () => {
          r.value = !1
        };
      return ($, B) => {
        const v = le,
          A = re("I18nT"),
          K = H;
        return i(), d(P, null, [s(r) ? (i(), y(v, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: w,
          onReject: I
        })) : x("", !0), p(ce, {
          name: "opacity-spring-transition"
        }, {
          default: T(() => [s(g) ? (i(), d("div", tt, [p(A, {
            tag: "span",
            keypath: "secure_options.notification.email_not_verified"
          }, {
            email: T(() => [Q(E(s(l)), 1)]),
            resend: T(() => [b("a", {
              href: "#",
              onClick: B[0] || (B[0] = F(D => f(), ["prevent"]))
            }, E(("t" in $ ? $.t : s(c))("secure_options.notification.email_not_verified_resend")), 1)]),
            _: 1
          }), b("button", {
            type: "button",
            class: "close reset",
            onClick: S
          }, [p(K, {
            name: "close-micro"
          })])])) : x("", !0)]),
          _: 1
        })], 64)
      }
    }
  }),
  ot = h(nt, [
    ["__scopeId", "data-v-d24568ac"]
  ]),
  st = {
    class: "pages-index-banner-wallet"
  },
  at = {
    key: 1,
    class: "connected"
  },
  it = {
    class: "label"
  },
  lt = k({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(_) {
      const e = _,
        n = () => he($e.MAIN).runConnectionFlow(),
        a = C(() => {
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
          throw e.wallet, _e("Invalid wallet status")
        });
      return (t, o) => {
        const r = J,
          l = se;
        return i(), d("div", st, [s(a).type === "skeleton" ? (i(), y(r, {
          key: 0,
          class: "skeleton"
        })) : s(a).type === "connected" ? (i(), d("div", at, [b("div", it, E(("t" in t ? t.t : s(c))("wallet.total_balance")), 1), (i(), y(ge(s(a).balance), {
          class: "balance"
        }))])) : s(a).type === "connect" ? (i(), y(l, {
          key: 2,
          label: ("t" in t ? t.t : s(c))("wallet.connect.btn"),
          size: s(oe).SMALL,
          onClick: o[0] || (o[0] = u => n())
        }, null, 8, ["label", "size"])) : x("", !0)])
      }
    }
  }),
  rt = h(lt, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  ct = {
    class: "pages-tribe-external-index-page"
  },
  ut = k({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(_) {
      const e = z().resolve({
          name: "tribe-join"
        }).fullPath,
        n = z().resolve({
          name: "tribe-slug"
        }).fullPath,
        a = t => G().main.tribeLogoClick(t);
      return (t, o) => {
        const r = J,
          l = we,
          u = H,
          m = qe;
        return i(), d("div", ct, [t.myTribe ? (i(), d(P, {
          key: 1
        }, [t.myTribe.type === "validating" ? (i(), y(l, {
          key: 0,
          to: s(e),
          class: "validating hex-center",
          onClick: o[0] || (o[0] = g => a(t.myTribe.type))
        }, {
          default: T(() => o[4] || (o[4] = [b("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (i(), y(l, {
          key: 1,
          to: s(e),
          class: "join hex-center",
          onClick: o[1] || (o[1] = g => a(t.myTribe.type))
        }, {
          default: T(() => [p(u, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_created" ? (i(), y(l, {
          key: 2,
          to: s(e),
          class: "error hex-center",
          onClick: o[2] || (o[2] = g => a(t.myTribe.type))
        }, {
          default: T(() => [p(u, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "ok" ? (i(), y(l, {
          key: 3,
          to: s(n),
          class: "ok",
          onClick: o[3] || (o[3] = g => a(t.myTribe.type))
        }, {
          default: T(() => [p(m, {
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
  _t = h(ut, [
    ["__scopeId", "data-v-c8b8fd36"]
  ]),
  dt = {
    class: "field-label"
  },
  mt = {
    class: "field-value"
  },
  pt = k({
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
      de(n => ({
        bc7bb12e: n.height,
        "0b714ec0": n.borderRadius,
        "4280b9dc": n.iconSize
      }));
      const e = C(() => ({
        field: !0,
        "field--disabled": _.disabled
      }));
      return (n, a) => {
        const t = H;
        return i(), d("div", {
          class: ae(s(e))
        }, [p(t, {
          name: n.icon,
          class: "field-icon"
        }, null, 8, ["name"]), b("div", dt, E(n.label), 1), b("div", mt, E(n.value), 1)], 2)
      }
    }
  }),
  bt = h(pt, [
    ["__scopeId", "data-v-d2541044"]
  ]),
  yt = k({
    __name: "BannerProfileModalEmailVerify",
    setup(_) {
      const {
        sendEmailAuthProviderVerification: e
      } = te(), n = N(!1), a = async r => {
        const l = await e({
          captchaToken: r
        });
        if (!Y(l)) {
          if (l.code === ue.Forbidden) {
            n.value = !0;
            return
          }
          O().error();
          return
        }
        O().success(c("secure_options.message.email_code_sent"))
      }, t = async r => {
        await a(r), n.value = !1
      }, o = () => {
        n.value = !1
      };
      return (r, l) => {
        const u = le,
          m = re("I18nT");
        return s(n) ? (i(), y(u, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: t,
          onReject: o
        })) : (i(), y(m, {
          key: 1,
          tag: "div",
          class: "caption",
          keypath: "secure_options.profile_modal.connect_email.not_verified_caption"
        }, {
          resend: T(() => [b("a", {
            href: "#",
            class: "link",
            onClick: l[0] || (l[0] = F(g => a(), ["prevent"]))
          }, E(("t" in r ? r.t : s(c))("secure_options.profile_modal.connect_email.not_verified_caption_resend")), 1)]),
          _: 1
        }))
      }
    }
  }),
  ft = h(yt, [
    ["__scopeId", "data-v-7dba19d1"]
  ]),
  vt = k({
    __name: "BannerProfileModalEmailDisconnect",
    emits: ["confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const {
        disconnectEmailAuthProvider: n,
        fetchAuthProviders: a
      } = te(), t = e, o = () => {
        const r = c("secure_options.profile_modal.disconnect_email.confirm.title"),
          l = c("secure_options.profile_modal.disconnect_email.confirm.description"),
          u = [{
            type: "cancel"
          }, {
            type: "default",
            label: c("secure_options.profile_modal.disconnect_email.confirm.btn"),
            onClick: async () => {
              const m = await n();
              if (!Y(m)) {
                O().error();
                return
              }
              t("confirm:disconnect"), await a()
            }
          }];
        L().$webApp.popup(r, l, u)
      };
      return (r, l) => (i(), d("a", {
        href: "#",
        class: "disconnect",
        onClick: F(o, ["prevent"])
      }, E(("t" in r ? r.t : s(c))("secure_options.profile_modal.disconnect_email.btn")), 1))
    }
  }),
  kt = h(vt, [
    ["__scopeId", "data-v-91098b8b"]
  ]),
  gt = k({
    __name: "BannerProfileModalFooter",
    emits: ["click:connect-account", "confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const n = e,
        a = ee(),
        t = C(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.hasEmail) ?? !1
        }),
        o = C(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.isEmailVerified) ?? !1
        }),
        r = C(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.emailMasked) ?? ""
        });
      return (l, u) => {
        const m = bt,
          g = ft,
          S = kt,
          f = se;
        return s(t) ? (i(), d(P, {
          key: 0
        }, [p(m, {
          icon: "email",
          label: ("t" in l ? l.t : s(c))("secure_options.profile_modal.connect_email.label"),
          value: s(r),
          disabled: !s(o)
        }, null, 8, ["label", "value", "disabled"]), s(o) ? x("", !0) : (i(), d(P, {
          key: 0
        }, [p(g), p(S, {
          "onConfirm:disconnect": u[0] || (u[0] = w => n("confirm:disconnect"))
        })], 64))], 64)) : (i(), y(f, {
          key: 1,
          label: ("t" in l ? l.t : s(c))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: s(oe).LARGE,
          onClick: u[1] || (u[1] = w => n("click:connect-account"))
        }, null, 8, ["label", "size"]))
      }
    }
  }),
  ht = k({
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
      const e = me(_, "modelValue"),
        {
          getters: n
        } = Se(),
        {
          secureOptionsModals: a
        } = ne(),
        t = ee(),
        o = C(() => {
          var m;
          return ((m = n.getUser.value) == null ? void 0 : m.username) ?? "user"
        }),
        r = C(() => {
          var m;
          return ((m = t.value) == null ? void 0 : m.hasEmail) ?? !1
        }),
        l = () => {
          u(), a.main.show()
        },
        u = () => {
          e.value = !1
        };
      return (m, g) => {
        const S = fe,
          f = gt,
          w = Ye,
          I = Ae,
          $ = ke;
        return i(), d(P, null, [p(I, {
          modelValue: e.value,
          "onUpdate:modelValue": g[0] || (g[0] = B => e.value = B)
        }, {
          default: T(() => [p(w, null, Ce({
            header: T(() => [p(S, {
              size: "96px",
              class: "avatar"
            })]),
            title: T(() => [Q(E(s(o)), 1)]),
            footer: T(() => [p(f, {
              "onClick:connectAccount": l,
              "onConfirm:disconnect": u
            })]),
            _: 2
          }, [s(r) ? void 0 : {
            name: "subTitle",
            fn: T(() => [Q(E(("t" in m ? m.t : s(c))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
            key: "0"
          }]), 1024)]),
          _: 1
        }, 8, ["modelValue"]), p($)], 64)
      }
    }
  }),
  $t = h(ht, [
    ["__scopeId", "data-v-657ce5c0"]
  ]),
  wt = {
    class: "pages-index-banner-profile-tribe"
  },
  St = k({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      const {
        isStaySecureFeatureEnabled: e
      } = ne(), n = N(!1), a = () => {
        e.value && (n.value = !0)
      };
      return (t, o) => {
        const r = fe,
          l = rt,
          u = _t,
          m = $t;
        return i(), d("div", wt, [p(r, {
          small: "",
          onClick: a
        }), p(l, {
          wallet: t.wallet
        }, null, 8, ["wallet"]), p(u, {
          "my-tribe": t.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"]), p(m, {
          modelValue: s(n),
          "onUpdate:modelValue": o[0] || (o[0] = g => pe(n) ? n.value = g : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  Ct = h(St, [
    ["__scopeId", "data-v-67447d49"]
  ]),
  At = {
    class: "pages-index-banner-controls"
  },
  Et = ["onClick"],
  Tt = {
    class: "image-container"
  },
  xt = {
    class: "title"
  },
  It = k({
    __name: "BannerControls",
    setup(_) {
      const e = C(() => [{
        title: c("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => z().push({
          name: "memepad-new",
          query: {
            memepadFrom: U.MAIN,
            memepadNewFrom: be.MAIN
          }
        })
      }, {
        title: c("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => z().push({
          name: "memepad",
          query: {
            memepadFrom: U.MAIN
          }
        })
      }, {
        title: c("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          G().main.controlsTradingBotClick(), W().openTradingBot()
        }
      }]);
      return (n, a) => {
        const t = ve;
        return i(), d("div", At, [(i(!0), d(P, null, X(s(e), (o, r) => (i(), d("button", {
          key: r,
          class: "control reset",
          onClick: l => o.onClick()
        }, [b("div", Tt, [p(t, {
          name: o.image,
          class: "image"
        }, null, 8, ["name"])]), b("div", xt, E(o.title), 1)], 8, Et))), 128))])
      }
    }
  }),
  Nt = h(It, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  Bt = {
    class: "pages-index-banner"
  },
  Rt = k({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      return (e, n) => {
        const a = ot,
          t = Ct,
          o = Nt;
        return i(), d("div", Bt, [p(a), p(t, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), p(o, {
          class: "controls"
        })])
      }
    }
  }),
  Pt = h(Rt, [
    ["__scopeId", "data-v-2dd935c4"]
  ]),
  Mt = {
    class: "pages-index-daily-reward"
  },
  Lt = {
    key: 1,
    class: "widget has-radius"
  },
  zt = {
    class: "compose"
  },
  Vt = {
    class: "title"
  },
  Ot = {
    key: 0,
    class: "subtitle"
  },
  Kt = k({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(_) {
      const e = _,
        n = O(),
        a = (o, r) => async () => {
          const l = await e.dailyRewardClaim();
          Ne(l, {
            Err: () => n.error(c("base.claim_error")),
            Ok: u => {
              o === Z.RESTORE && n.success(c("daily_reward.streak_restored", {
                days: r
              })), n.success(`You’ve got ${Be(u.claimedReward.points)} BP`), W().makeConfetti(), G().main.dailyRewardClick({
                points: u.claimedReward.points.toNumber()
              })
            }
          })
        }, t = C(() => {
          if (e.dailyReward === void 0) return;
          const o = e.dailyReward.currentStreakDays,
            r = `${o}-${c("base.n.days",o)}`;
          if (e.dailyReward.claim === Z.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: c("daily_reward.missed"),
            subtitle: ie(c("daily_reward.restore_current_streak", {
              days: r
            })),
            claim: {
              label: c("base.restore"),
              white: !0,
              can: !0,
              fn: a(e.dailyReward.claim, r)
            }
          };
          const l = (() => {
            const m = Ee().ms100ticker.value;
            if (!m) return Te();
            const g = xe(e.dailyReward.canClaimAt - m, "letters");
            return ie(c("base.claim_next_in", {
              time: g
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: c("daily_reward.current_streak", {
              days: r
            }),
            subtitle: l,
            claim: {
              can: e.dailyReward.claim !== Z.UNAVAILABLE,
              fn: a(e.dailyReward.claim, r)
            }
          }
        });
      return (o, r) => {
        const l = J,
          u = ve,
          m = Xe;
        return i(), d("div", Mt, [s(t) ? (i(), d("div", Lt, [p(u, {
          name: s(t).icon,
          class: "icon"
        }, null, 8, ["name"]), b("div", zt, [b("div", Vt, E(s(t).title), 1), ("isOk" in o ? o.isOk : s(Y))(s(t).subtitle) ? (i(), d("div", Ot, E(s(t).subtitle.data), 1)) : (i(), y(l, {
          key: 1,
          type: s(Ie).SECONDARY,
          class: "skeleton subtitle"
        }, null, 8, ["type"]))]), s(t).claim ? (i(), y(m, {
          key: 0,
          label: s(t).claim.label,
          "can-claim": s(t).claim.can,
          "claim-fn": s(t).claim.fn,
          style: q(s(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : x("", !0)])) : (i(), y(l, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  Dt = h(Kt, [
    ["__scopeId", "data-v-616b8ac4"]
  ]),
  Ft = ["src"],
  jt = ["src"],
  Ut = {
    class: "content"
  },
  Wt = {
    class: "inner"
  },
  qt = ["innerHTML"],
  Yt = {
    class: "icon-wrapper"
  },
  Ht = ["src"],
  Gt = k({
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
      },
      textSize: {
        default: "md"
      }
    },
    setup(_) {
      return (e, n) => {
        const a = He,
          t = H,
          o = ye;
        return i(), d("div", {
          class: ae(["pages-index-new-season-banner-card", `size-${e.textSize}`])
        }, [b("img", {
          src: ("imgResolver" in e ? e.imgResolver : s(M))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, Ft), n[0] || (n[0] = b("div", {
          class: "bg"
        }, null, -1)), b("img", {
          src: ("imgResolver" in e ? e.imgResolver : s(M))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, jt), b("div", Ut, [b("div", Wt, [b("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, qt), e.hideButton ? x("", !0) : (i(), y(a, {
          key: 0,
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"]))]), b("div", Yt, [e.icon ? (i(), y(t, {
          key: 0,
          name: e.icon,
          style: q({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 8, ["name", "style"])) : e.lottie ? (i(), y(o, {
          key: 1,
          name: e.lottie,
          loop: "",
          size: e.imageSize
        }, null, 8, ["name", "size"])) : e.gif ? (i(), d("img", {
          key: 2,
          src: e.gif,
          style: q({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 12, Ht)) : x("", !0)])])], 2)
      }
    }
  }),
  Xt = h(Gt, [
    ["__scopeId", "data-v-290b4af0"]
  ]),
  Jt = {
    class: "kit-stories-src-counter"
  },
  Zt = k({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(_) {
      de(a => ({
        "9db269f8": a.count
      }));
      const e = _,
        n = C(() => [...new Array(e.count)].map((a, t) => t < e.current ? {
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
      return (a, t) => (i(), d("div", Jt, [(i(!0), d(P, null, X(s(n), o => (i(), d("div", {
        key: o.key,
        class: ae(["progress", [`is-state-${o.state}`]]),
        style: q(o.state === "current" ? {
          "background-position-x": `-${o.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  Qt = h(Zt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  en = {
    class: "kit-stories-shared-background"
  },
  tn = ["poster", "src"],
  nn = ["src"],
  on = k({
    __name: "Background",
    props: {
      background: {}
    },
    setup(_) {
      return (e, n) => {
        const a = Ze;
        return i(), d("div", en, [e.background.type === "video" ? (i(), d("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, tn)) : e.background.type === "image" ? (i(), d("img", {
          key: 1,
          src: e.background.src
        }, null, 8, nn)) : e.background.type === "stars" ? (i(), y(a, {
          key: 2,
          class: "stars"
        })) : x("", !0)])
      }
    }
  }),
  sn = h(on, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  an = {
    class: "kit-stories-layouts-title-subtitle"
  },
  ln = {
    class: "title"
  },
  rn = {
    class: "subtitle"
  },
  cn = k({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => (i(), d("div", an, [b("div", ln, E(e.layout.title), 1), b("div", rn, E(e.layout.subtitle), 1)]))
    }
  }),
  un = h(cn, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  _n = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  dn = {
    class: "animoji-container"
  },
  mn = {
    class: "content-container"
  },
  pn = {
    class: "title"
  },
  bn = {
    class: "subtitle"
  },
  yn = k({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => {
        const a = ye;
        return i(), d("div", _n, [b("div", dn, [p(a, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), b("div", mn, [b("div", pn, E(e.layout.title), 1), b("div", bn, E(e.layout.subtitle), 1)])])
      }
    }
  }),
  fn = h(yn, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  vn = k({
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
        t = C(() => n.button.type === "next" ? n.isLast ? c("base.close") : c("base.next") : n.button.label),
        o = () => {
          if (n.button.type === "next") L().$webApp.HapticFeedback.impactOccurred("light"), a("next");
          else if (n.button.type === "local") z().push(n.button.link);
          else if (n.button.type === "external") L().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") L().$webApp.openTelegramLink(n.button.link);
          else throw n.button, _e("Unknown button type")
        };
      return (r, l) => {
        const u = se;
        return i(), y(u, {
          label: s(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: s(oe).LARGE,
          onClick: l[0] || (l[0] = F(m => o(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  kn = h(vn, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  gn = {
    class: "kit-stories-src-story"
  },
  hn = {
    class: "content"
  },
  $n = {
    class: "layout"
  },
  wn = {
    class: "button"
  },
  Sn = k({
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
        const a = sn,
          t = un,
          o = fn,
          r = kn;
        return i(), d("div", gn, [p(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), b("div", hn, [b("div", $n, [e.story.layout.type === "TitleSubtitle" ? (i(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), y(o, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : x("", !0)]), b("div", wn, [e.story.button ? (i(), y(r, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = l => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : x("", !0)])])])
      }
    }
  }),
  Cn = h(Sn, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  An = (_, e) => {
    const n = _,
      a = N(_),
      t = C(() => 1 - a.value / n);
    let o = 0,
      r;
    const l = () => {
        o = Date.now(), r = Pe(() => {
          const S = Date.now(),
            f = S - o;
          o = S, a.value = Math.max(a.value - f, 0), a.value <= 0 && (u(), e())
        }, 100)
      },
      u = () => {
        r && (clearInterval(r), r = void 0)
      },
      m = () => {
        if (r) {
          u();
          const S = Date.now() - o;
          a.value = Math.max(a.value - S, 0)
        }
      },
      g = () => l();
    return l(), {
      timeToExpire: Re(a),
      progress: t,
      destroy: u,
      pause: m,
      resume: g
    }
  },
  En = 150,
  Tn = k({
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
        t = N(0),
        o = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, m()) : a("close")
        },
        r = () => {
          t.value > 0 ? (t.value -= 1, m()) : a("close")
        },
        l = () => An(5e3, o),
        u = Me(l()),
        m = () => {
          u.value.destroy(), u.value = l()
        },
        g = N(),
        S = Le(),
        f = N(!1),
        w = N(!1),
        I = () => {
          f.value = !1, w.value = !1, S.set(() => {
            u.value.pause(), f.value = !0, w.value = !0
          }, En)
        },
        $ = () => {
          S.destroy(), f.value && (u.value.resume(), f.value = !1)
        },
        B = v => {
          if (f.value || w.value || !g.value) return;
          const {
            width: A,
            left: K
          } = g.value.getBoundingClientRect(), D = v.clientX - K, j = A / 3;
          D < j ? r() : D > j * 2 && o()
        };
      return ze(() => {
        S.destroy(), u.value.destroy()
      }), (v, A) => {
        const K = Qt,
          D = Cn,
          j = Qe;
        return i(), y(j, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: T(() => [b("div", {
            ref_key: "storiesRef",
            ref: g,
            class: "kit-stories-src-stories",
            onPointerdown: A[1] || (A[1] = F(V => I(), ["prevent"])),
            onPointerup: A[2] || (A[2] = V => $()),
            onPointercancel: A[3] || (A[3] = V => $()),
            onPointerleave: A[4] || (A[4] = V => $()),
            onClick: A[5] || (A[5] = V => B(V))
          }, [p(K, {
            current: s(t),
            "current-progress": s(u).progress.value,
            count: v.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (i(), y(D, {
            key: s(t),
            story: v.stories[s(t)],
            "is-last": s(t) === v.stories.length - 1,
            onNext: A[0] || (A[0] = V => o())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  xn = h(Tn, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  In = k({
    __name: "Stories",
    props: Ve({
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
      const e = me(_, "modelValue");
      return (n, a) => {
        const t = xn;
        return i(), y(ce, {
          name: "opacity-transition"
        }, {
          default: T(() => [e.value ? (i(), y(t, {
            key: 0,
            stories: n.set.stories,
            class: "kit-stories",
            onClose: a[0] || (a[0] = o => e.value = !1)
          }, null, 8, ["stories"])) : x("", !0)]),
          _: 1
        })
      }
    }
  }),
  Nn = h(In, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  Bn = {
    class: "pages-index-new-season-banner"
  },
  Rn = {
    class: "progress"
  },
  Pn = k({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(_) {
      const e = _,
        n = z(),
        a = W(),
        t = G(),
        o = L().$webApp,
        r = [{
          title: c("index.banners.trade_now.title"),
          buttonLabel: c("index.banners.trade_now.button_label"),
          onButtonClick: () => {
            a.openTradingBot()
          },
          icon: "ton-logo",
          imageSize: 64,
          analyticsName: R.TRADE_NOW
        }, {
          title: c("index.banners.earn_now.title"),
          buttonLabel: c("index.banners.earn_now.button_label"),
          onButtonClick: () => {
            n.push({
              name: "tasks"
            })
          },
          icon: "bp-logo",
          imageSize: 64,
          analyticsName: R.EARN_NOW
        }, {
          title: c("index.banners.season_2.title"),
          buttonLabel: c("index.banners.season_2.button_label"),
          onButtonClick: () => {
            l.value = !0
          },
          lottie: "animations/Moon",
          imageSize: 96,
          analyticsName: R.SEASON_2
        }, {
          title: c("index.banners.blum_x.title"),
          buttonLabel: c("index.banners.blum_x.button_label"),
          onButtonClick: () => {
            W().openBlumTwitter()
          },
          gif: M("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: R.BLUM_X
        }, {
          title: c("index.banners.blum_academy.title"),
          buttonLabel: c("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            o.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: M("index/banner/edu", "gif"),
          imageSize: 102,
          analyticsName: R.BLUM_ACADEMY
        }, {
          title: c("index.banners.create_memecoin.title"),
          buttonLabel: c("index.banners.create_memecoin.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-new",
              query: {
                memepadFrom: U.MAIN_PAGE_BANNER_CREATE_MEMECOIN,
                memepadNewFrom: be.MAIN_PAGE_BANNER_CREATE_MEMECOIN
              }
            })
          },
          gif: M("index/banner/memecoin", "gif"),
          imageSize: 118,
          analyticsName: R.CREATE_MEMECOIN
        }, {
          title: c("index.banners.friends.title"),
          buttonLabel: c("index.banners.friends.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens"
            })
          },
          gif: M("index/banner/comission", "gif"),
          imageSize: 100,
          analyticsName: R.FRIENDS
        }, {
          title: c("index.banners.trade_memecoins.title"),
          buttonLabel: c("index.banners.trade_memecoins.button_label"),
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
          analyticsName: R.TRADE_MEMECOIN
        }, {
          title: c("index.banners.leaderboard.title"),
          buttonLabel: c("index.banners.leaderboard.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens-leaderboards",
              query: {
                source: Oe.MAIN_PAGE_BANNER
              }
            })
          },
          gif: M("index/banner/leaderboard", "gif"),
          imageSize: 102,
          analyticsName: R.LEADERBOARDS
        }].map((f, w) => ({
          ...f,
          onButtonClick: () => {
            t.main.bannerClick({
              position: w + 1,
              bannerName: f.analyticsName
            }), f.onButtonClick()
          }
        })),
        l = N(e.value.showOnStart);
      Ke(l, f => f && e.value.onShowed(), {
        immediate: !0
      });
      const u = N(0),
        m = N(null),
        g = (f, w = "smooth") => {
          var I;
          (I = m.value) == null || I.scrollTo({
            left: f * window.innerWidth + (u.value > f ? -1 : 1),
            behavior: w
          })
        },
        S = Fe(() => {
          if (!m.value) return;
          const f = m.value.children[0].offsetWidth + 10,
            w = m.value.scrollLeft,
            I = Math.round(w / f);
          u.value = I
        }, 50).debouncedFunction;
      return De(() => {
        g(u.value, "instant")
      }), (f, w) => {
        const I = Xt,
          $ = Je,
          B = Nn;
        return i(), d("div", Bn, [b("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: w[0] || (w[0] = (...v) => s(S) && s(S)(...v)),
          onTouchmove: w[1] || (w[1] = (...v) => s(S) && s(S)(...v))
        }, [(i(!0), d(P, null, X(s(r), (v, A) => (i(), d("div", {
          key: v.title,
          class: "item"
        }, [p(I, {
          index: A,
          icon: v.icon,
          lottie: v.lottie,
          gif: v.gif,
          title: v.title,
          "button-label": v.buttonLabel,
          "on-button-click": v.onButtonClick,
          "image-size": v.imageSize,
          "analytics-name": v.analyticsName,
          "hide-button": v.hideButton,
          "text-size": v.textSize
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name", "hide-button", "text-size"])]))), 128))], 544), b("div", Rn, [s(r).length > 1 ? (i(), y($, {
          key: 0,
          "model-value": s(u),
          count: s(r).length,
          timer: 15e3,
          "onUpdate:modelValue": g
        }, null, 8, ["model-value", "count"])) : x("", !0)]), p(B, {
          modelValue: s(l),
          "onUpdate:modelValue": w[2] || (w[2] = v => pe(l) ? l.value = v : null),
          set: f.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Mn = h(Pn, [
    ["__scopeId", "data-v-45abd144"]
  ]),
  Ln = {
    class: "pages-wallet-asset-skeleton"
  },
  zn = {
    class: "content"
  },
  Vn = k({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(_) {
      return (e, n) => {
        const a = J;
        return i(), d("div", Ln, [(i(!0), d(P, null, X(e.count, t => (i(), d("div", {
          key: t,
          class: "skeleton"
        }, [p(a, {
          rounded: "",
          class: "logo"
        }), b("div", zn, [p(a, {
          class: "title"
        }), p(a, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  On = h(Vn, [
    ["__scopeId", "data-v-26805825"]
  ]),
  Kn = {
    class: "pages-index-points"
  },
  Dn = k({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(_) {
      const e = C(() => z().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (n, a) => {
        const t = et,
          o = On,
          r = Ge;
        return i(), d("div", Kn, [p(t, {
          label: ("t" in n ? n.t : s(c))("wallet.points.title"),
          "full-path": s(e)
        }, null, 8, ["label", "full-path"]), n.points ? (i(), y(r, {
          key: 1,
          points: n.points
        }, null, 8, ["points"])) : (i(), y(o, {
          key: 0,
          count: 2
        }))])
      }
    }
  }),
  Fn = h(Dn, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  jn = () => {
    const _ = je(),
      e = Ue(),
      n = We(),
      a = C(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      o = {
        set: Un(),
        showOnStart: !L().$webApp.storage.local.get(t),
        onShowed: () => {
          L().$webApp.storage.local.set(t, "true")
        }
      },
      r = C(() => {
        const l = _.pointSymbols.value,
          u = _.dropSymbols.value;
        if (!(!l || !u) && !(!l.mp || !l.bp)) return [l.mp, l.bp, ...u]
      });
    return {
      dailyReward: n,
      myTribe: a,
      season2Stories: o,
      wallet: C(() => _.wallet.value),
      walletAssets: r
    }
  },
  Un = () => ({
    stories: [{
      background: {
        type: "stars"
      },
      layout: {
        type: "AnimojiTitleSubtitle",
        animoji: "Fire",
        title: c("stories.season_2.slide_2.title"),
        subtitle: c("stories.season_2.slide_2.subtitle")
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
        title: c("stories.season_2.slide_3.title"),
        subtitle: c("stories.season_2.slide_3.subtitle")
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
        title: c("stories.season_2.slide_4.title"),
        subtitle: c("stories.season_2.slide_4.subtitle")
      },
      button: {
        type: "next"
      }
    }]
  }),
  Wn = {
    class: "index-page page"
  },
  qn = k({
    __name: "index",
    setup(_) {
      const e = jn();
      return (n, a) => {
        const t = Pt,
          o = Dt,
          r = Mn,
          l = Fn;
        return i(), d("div", Wn, [p(t, {
          "my-tribe": s(e).myTribe.value,
          wallet: s(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), p(o, {
          "daily-reward": s(e).dailyReward.reward.value,
          "daily-reward-claim": s(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), p(r, {
          value: s(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), p(l, {
          points: s(e).walletAssets.value
        }, null, 8, ["points"])])
      }
    }
  }),
  po = h(qn, [
    ["__scopeId", "data-v-3c1e49c9"]
  ]);
export {
  po as
  default
};