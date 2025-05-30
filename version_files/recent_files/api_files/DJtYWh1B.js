import {
  _ as re,
  a as ke
} from "./DlBnxYAx.js";
import {
  d as g,
  ar as te,
  as as ne,
  at as oe,
  J as I,
  j as S,
  a7 as ce,
  o as i,
  c as d,
  e as s,
  z as y,
  G as B,
  b as p,
  D as N,
  m as Z,
  t as E,
  a as b,
  au as F,
  A as c,
  av as ue,
  F as L,
  am as W,
  aw as _e,
  ak as D,
  _ as q,
  f as h,
  ag as de,
  ax as he,
  a9 as se,
  ay as Ae,
  az as $e,
  x as ae,
  ao as M,
  a5 as H,
  U as we,
  aA as me,
  n as ie,
  h as z,
  C as pe,
  k as Se,
  aB as Ce,
  aa as Ee,
  p as be,
  aC as ee,
  aD as ye,
  aj as G,
  q as J,
  aE as Q,
  ai as le,
  $ as Ne,
  aF as Be,
  a0 as xe,
  aG as Te,
  aH as Y,
  aI as Ie,
  a1 as Re,
  a8 as P,
  aJ as fe,
  aK as Pe,
  aL as Me,
  aM as Le,
  aN as ze,
  af as Oe,
  a4 as De,
  aO as T,
  aP as U,
  T as Ke,
  K as Ve,
  L as Fe,
  O as je,
  ab as Ue,
  aQ as Ge,
  aR as Ye
} from "./Q7ZkUOCs.js";
import {
  _ as ve
} from "./C836762Y.js";
import {
  _ as X
} from "./Xmv6NS9R.js";
import {
  _ as We
} from "./CwB0pGGs.js";
import {
  _ as qe
} from "./B3Sc2Ku8.js";
import {
  _ as ge,
  a as He,
  b as Je
} from "./DKbj_77U.js";
import {
  _ as Xe
} from "./C7czkxvZ.js";
import {
  _ as Qe
} from "./Ch644D1n.js";
import {
  _ as Ze
} from "./o1Oj3uQj.js";
import {
  _ as et
} from "./B9SKPzTF.js";
import {
  _ as tt
} from "./DAuIybJ2.js";
import "./Cy_jAjho.js";
import "./BUGuDDdS.js";
import "./DjLbFCV5.js";
import "./CI-pBKyi.js";
import "./CcAYJJ_r.js";
import "./BNvCq4F9.js";
import "./DKIiZjQn.js";
const nt = {
    key: 0,
    class: "notification"
  },
  ot = g({
    __name: "BannerStaySecureNotification",
    setup(_) {
      const e = te(),
        {
          sendEmailAuthProviderVerification: n
        } = ne(),
        {
          hasClosedStaySecureNotification: a,
          markStaySecureNotificationAsClosed: t
        } = oe(),
        o = I(!0),
        r = I(!1),
        l = S(() => {
          var A;
          return ((A = e.value) == null ? void 0 : A.emailMasked) ?? ""
        }),
        u = S(() => {
          var A;
          return ((A = e.value) == null ? void 0 : A.hasEmail) ?? !1
        }),
        m = S(() => {
          var A;
          return ((A = e.value) == null ? void 0 : A.isEmailVerified) ?? !1
        }),
        k = S(() => o.value && u.value && !m.value && !a() && !r.value),
        w = () => {
          o.value = !1, t()
        },
        f = async A => {
          const R = await n({
            captchaToken: A
          });
          if (!W(R)) {
            if (R.code === _e.Forbidden) {
              r.value = !0;
              return
            }
            D().error();
            return
          }
          w(), D().success(c("secure_options.message.email_code_sent"))
        }, $ = async A => {
          await f(A), r.value = !1
        }, x = () => {
          r.value = !1
        };
      return (A, R) => {
        const v = re,
          C = ce("I18nT"),
          K = q;
        return i(), d(L, null, [s(r) ? (i(), y(v, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: $,
          onReject: x
        })) : B("", !0), p(ue, {
          name: "opacity-spring-transition"
        }, {
          default: N(() => [s(k) ? (i(), d("div", nt, [p(C, {
            tag: "span",
            keypath: "secure_options.notification.email_not_verified"
          }, {
            email: N(() => [Z(E(s(l)), 1)]),
            resend: N(() => [b("a", {
              href: "#",
              onClick: R[0] || (R[0] = F(V => f(), ["prevent"]))
            }, E(("t" in A ? A.t : s(c))("secure_options.notification.email_not_verified_resend")), 1)]),
            _: 1
          }), b("button", {
            type: "button",
            class: "close reset",
            onClick: w
          }, [p(K, {
            name: "close-micro"
          })])])) : B("", !0)]),
          _: 1
        })], 64)
      }
    }
  }),
  st = h(ot, [
    ["__scopeId", "data-v-d24568ac"]
  ]),
  at = {
    class: "pages-index-banner-wallet"
  },
  it = {
    key: 1,
    class: "connected"
  },
  lt = {
    class: "label"
  },
  rt = g({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(_) {
      const e = _,
        n = () => Ae($e.MAIN).runConnectionFlow(),
        a = S(() => {
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
          throw e.wallet, de("Invalid wallet status")
        });
      return (t, o) => {
        const r = X,
          l = ae;
        return i(), d("div", at, [s(a).type === "skeleton" ? (i(), y(r, {
          key: 0,
          class: "skeleton"
        })) : s(a).type === "connected" ? (i(), d("div", it, [b("div", lt, E(("t" in t ? t.t : s(c))("wallet.total_balance")), 1), (i(), y(he(s(a).balance), {
          class: "balance"
        }))])) : s(a).type === "connect" ? (i(), y(l, {
          key: 2,
          label: ("t" in t ? t.t : s(c))("wallet.connect.btn"),
          size: s(se).SMALL,
          onClick: o[0] || (o[0] = u => n())
        }, null, 8, ["label", "size"])) : B("", !0)])
      }
    }
  }),
  ct = h(rt, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  ut = {
    class: "pages-tribe-external-index-page"
  },
  _t = g({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(_) {
      const e = M().resolve({
          name: "tribe-join"
        }).fullPath,
        n = M().resolve({
          name: "tribe-slug"
        }).fullPath,
        a = t => H().main.tribeLogoClick(t);
      return (t, o) => {
        const r = X,
          l = we,
          u = q,
          m = We;
        return i(), d("div", ut, [t.myTribe ? (i(), d(L, {
          key: 1
        }, [t.myTribe.type === "validating" ? (i(), y(l, {
          key: 0,
          to: s(e),
          class: "validating hex-center",
          onClick: o[0] || (o[0] = k => a(t.myTribe.type))
        }, {
          default: N(() => o[4] || (o[4] = [b("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (i(), y(l, {
          key: 1,
          to: s(e),
          class: "join hex-center",
          onClick: o[1] || (o[1] = k => a(t.myTribe.type))
        }, {
          default: N(() => [p(u, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_created" ? (i(), y(l, {
          key: 2,
          to: s(e),
          class: "error hex-center",
          onClick: o[2] || (o[2] = k => a(t.myTribe.type))
        }, {
          default: N(() => [p(u, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "ok" ? (i(), y(l, {
          key: 3,
          to: s(n),
          class: "ok",
          onClick: o[3] || (o[3] = k => a(t.myTribe.type))
        }, {
          default: N(() => [p(m, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : B("", !0)], 64)) : (i(), y(r, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  dt = h(_t, [
    ["__scopeId", "data-v-c8b8fd36"]
  ]),
  mt = {
    class: "field-label"
  },
  pt = {
    class: "field-value"
  },
  bt = g({
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
      me(n => ({
        bc7bb12e: n.height,
        "0b714ec0": n.borderRadius,
        "4280b9dc": n.iconSize
      }));
      const e = S(() => ({
        field: !0,
        "field--disabled": _.disabled
      }));
      return (n, a) => {
        const t = q;
        return i(), d("div", {
          class: ie(s(e))
        }, [p(t, {
          name: n.icon,
          class: "field-icon"
        }, null, 8, ["name"]), b("div", mt, E(n.label), 1), b("div", pt, E(n.value), 1)], 2)
      }
    }
  }),
  yt = h(bt, [
    ["__scopeId", "data-v-d2541044"]
  ]),
  ft = g({
    __name: "BannerProfileModalEmailVerify",
    setup(_) {
      const {
        sendEmailAuthProviderVerification: e
      } = ne(), n = I(!1), a = async r => {
        const l = await e({
          captchaToken: r
        });
        if (!W(l)) {
          if (l.code === _e.Forbidden) {
            n.value = !0;
            return
          }
          D().error();
          return
        }
        D().success(c("secure_options.message.email_code_sent"))
      }, t = async r => {
        await a(r), n.value = !1
      }, o = () => {
        n.value = !1
      };
      return (r, l) => {
        const u = re,
          m = ce("I18nT");
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
          resend: N(() => [b("a", {
            href: "#",
            class: "link",
            onClick: l[0] || (l[0] = F(k => a(), ["prevent"]))
          }, E(("t" in r ? r.t : s(c))("secure_options.profile_modal.connect_email.not_verified_caption_resend")), 1)]),
          _: 1
        }))
      }
    }
  }),
  vt = h(ft, [
    ["__scopeId", "data-v-7dba19d1"]
  ]),
  gt = g({
    __name: "BannerProfileModalEmailDisconnect",
    emits: ["confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const {
        disconnectEmailAuthProvider: n,
        fetchAuthProviders: a
      } = ne(), t = e, o = () => {
        const r = c("secure_options.profile_modal.disconnect_email.confirm.title"),
          l = c("secure_options.profile_modal.disconnect_email.confirm.description"),
          u = [{
            type: "cancel"
          }, {
            type: "default",
            label: c("secure_options.profile_modal.disconnect_email.confirm.btn"),
            onClick: async () => {
              const m = await n();
              if (!W(m)) {
                D().error();
                return
              }
              t("confirm:disconnect"), await a()
            }
          }];
        z().$webApp.popup(r, l, u)
      };
      return (r, l) => (i(), d("a", {
        href: "#",
        class: "disconnect",
        onClick: F(o, ["prevent"])
      }, E(("t" in r ? r.t : s(c))("secure_options.profile_modal.disconnect_email.btn")), 1))
    }
  }),
  kt = h(gt, [
    ["__scopeId", "data-v-91098b8b"]
  ]),
  ht = g({
    __name: "BannerProfileModalFooter",
    emits: ["click:connect-account", "confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const n = e,
        a = te(),
        t = S(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.hasEmail) ?? !1
        }),
        o = S(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.isEmailVerified) ?? !1
        }),
        r = S(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.emailMasked) ?? ""
        });
      return (l, u) => {
        const m = yt,
          k = vt,
          w = kt,
          f = ae;
        return s(t) ? (i(), d(L, {
          key: 0
        }, [p(m, {
          icon: "email",
          label: ("t" in l ? l.t : s(c))("secure_options.profile_modal.connect_email.label"),
          value: s(r),
          disabled: !s(o)
        }, null, 8, ["label", "value", "disabled"]), s(o) ? B("", !0) : (i(), d(L, {
          key: 0
        }, [p(k), p(w, {
          "onConfirm:disconnect": u[0] || (u[0] = $ => n("confirm:disconnect"))
        })], 64))], 64)) : (i(), y(f, {
          key: 1,
          label: ("t" in l ? l.t : s(c))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: s(se).LARGE,
          onClick: u[1] || (u[1] = $ => n("click:connect-account"))
        }, null, 8, ["label", "size"]))
      }
    }
  }),
  At = g({
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
      const e = pe(_, "modelValue"),
        {
          getters: n
        } = Se(),
        {
          secureOptionsModals: a
        } = oe(),
        t = te(),
        o = S(() => {
          var m;
          return ((m = n.getUser.value) == null ? void 0 : m.username) ?? "user"
        }),
        r = S(() => {
          var m;
          return ((m = t.value) == null ? void 0 : m.hasEmail) ?? !1
        }),
        l = () => {
          u(), a.main.show()
        },
        u = () => {
          e.value = !1
        };
      return (m, k) => {
        const w = ve,
          f = ht,
          $ = qe,
          x = Ee,
          A = ke;
        return i(), d(L, null, [p(x, {
          modelValue: e.value,
          "onUpdate:modelValue": k[0] || (k[0] = R => e.value = R)
        }, {
          default: N(() => [p($, null, Ce({
            header: N(() => [p(w, {
              size: "96px",
              class: "avatar"
            })]),
            title: N(() => [Z(E(s(o)), 1)]),
            footer: N(() => [p(f, {
              "onClick:connectAccount": l,
              "onConfirm:disconnect": u
            })]),
            _: 2
          }, [s(r) ? void 0 : {
            name: "subTitle",
            fn: N(() => [Z(E(("t" in m ? m.t : s(c))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
            key: "0"
          }]), 1024)]),
          _: 1
        }, 8, ["modelValue"]), p(A)], 64)
      }
    }
  }),
  $t = h(At, [
    ["__scopeId", "data-v-657ce5c0"]
  ]),
  wt = {
    class: "pages-index-banner-profile-tribe"
  },
  St = g({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      const {
        isStaySecureFeatureEnabled: e
      } = oe(), n = I(!1), a = () => {
        e.value && (n.value = !0)
      };
      return (t, o) => {
        const r = ve,
          l = ct,
          u = dt,
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
          "onUpdate:modelValue": o[0] || (o[0] = k => be(n) ? n.value = k : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  Ct = h(St, [
    ["__scopeId", "data-v-67447d49"]
  ]),
  Et = {
    class: "pages-index-banner-controls"
  },
  Nt = ["onClick"],
  Bt = {
    class: "image-container"
  },
  xt = {
    class: "title"
  },
  Tt = g({
    __name: "BannerControls",
    setup(_) {
      const e = S(() => [{
        title: c("memepad.explore.launch.button_text"),
        image: "index/banner/controls/launch-token",
        imageType: "svg",
        onClick: () => M().push({
          name: "memepad-new",
          query: {
            memepadFrom: ee.MAIN,
            memepadNewFrom: ye.MAIN
          }
        })
      }, {
        title: c("tabs.frens"),
        image: "index/banner/controls/frens",
        imageType: "svg",
        onClick: () => M().push({
          name: "frens"
        })
      }, {
        title: c("base.trading_bot"),
        image: "index/banner/controls/trading-bot",
        imageType: "svg",
        onClick: () => {
          H().main.controlsTradingBotClick(), G().openTradingBot()
        }
      }]);
      return (n, a) => {
        const t = ge;
        return i(), d("div", Et, [(i(!0), d(L, null, J(s(e), (o, r) => (i(), d("button", {
          key: r,
          class: "control reset",
          onClick: l => o.onClick()
        }, [b("span", Bt, [p(t, {
          name: o.image,
          type: o.imageType,
          class: "image"
        }, null, 8, ["name", "type"])]), b("span", xt, E(o.title), 1)], 8, Nt))), 128))])
      }
    }
  }),
  It = h(Tt, [
    ["__scopeId", "data-v-1225a1c7"]
  ]),
  Rt = {
    class: "pages-index-banner"
  },
  Pt = g({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      return (e, n) => {
        const a = st,
          t = Ct,
          o = It;
        return i(), d("div", Rt, [p(a), p(t, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), p(o, {
          class: "controls"
        })])
      }
    }
  }),
  Mt = h(Pt, [
    ["__scopeId", "data-v-2dd935c4"]
  ]),
  Lt = {
    class: "pages-index-daily-reward"
  },
  zt = {
    key: 1,
    class: "widget has-radius"
  },
  Ot = {
    class: "compose"
  },
  Dt = {
    class: "title"
  },
  Kt = {
    key: 0,
    class: "subtitle"
  },
  Vt = g({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(_) {
      const e = _,
        n = D(),
        a = (o, r) => async () => {
          const l = await e.dailyRewardClaim();
          Ie(l, {
            Err: () => n.error(c("base.claim_error")),
            Ok: u => {
              o === Q.RESTORE && n.success(c("daily_reward.streak_restored", {
                days: r
              })), n.success(`You’ve got ${Re(u.claimedReward.points)} BP`), G().makeConfetti(), H().main.dailyRewardClick({
                points: u.claimedReward.points.toNumber()
              })
            }
          })
        }, t = S(() => {
          if (e.dailyReward === void 0) return;
          const o = e.dailyReward.currentStreakDays,
            r = `${o}-${c("base.n.days",o)}`;
          if (e.dailyReward.claim === Q.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: c("daily_reward.missed"),
            subtitle: le(c("daily_reward.restore_current_streak", {
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
            const m = Ne().ms100ticker.value;
            if (!m) return Be();
            const k = xe(e.dailyReward.canClaimAt - m, "letters");
            return le(c("base.claim_next_in", {
              time: k
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: c("daily_reward.current_streak", {
              days: r
            }),
            subtitle: l,
            claim: {
              can: e.dailyReward.claim !== Q.UNAVAILABLE,
              fn: a(e.dailyReward.claim, r)
            }
          }
        });
      return (o, r) => {
        const l = X,
          u = ge,
          m = Xe;
        return i(), d("div", Lt, [s(t) ? (i(), d("div", zt, [p(u, {
          name: s(t).icon,
          class: "icon"
        }, null, 8, ["name"]), b("div", Ot, [b("div", Dt, E(s(t).title), 1), ("isOk" in o ? o.isOk : s(W))(s(t).subtitle) ? (i(), d("div", Kt, E(s(t).subtitle.data), 1)) : (i(), y(l, {
          key: 1,
          type: s(Te).SECONDARY,
          class: "skeleton subtitle"
        }, null, 8, ["type"]))]), s(t).claim ? (i(), y(m, {
          key: 0,
          label: s(t).claim.label,
          "can-claim": s(t).claim.can,
          "claim-fn": s(t).claim.fn,
          style: Y(s(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : B("", !0)])) : (i(), y(l, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  Ft = h(Vt, [
    ["__scopeId", "data-v-616b8ac4"]
  ]),
  jt = ["src"],
  Ut = ["src"],
  Gt = {
    class: "content"
  },
  Yt = {
    class: "inner"
  },
  Wt = ["innerHTML"],
  qt = {
    class: "icon-wrapper"
  },
  Ht = ["src"],
  Jt = g({
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
          t = q,
          o = fe;
        return i(), d("div", {
          class: ie(["pages-index-new-season-banner-card", `size-${e.textSize}`])
        }, [b("img", {
          src: ("imgResolver" in e ? e.imgResolver : s(P))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, jt), n[0] || (n[0] = b("div", {
          class: "bg"
        }, null, -1)), b("img", {
          src: ("imgResolver" in e ? e.imgResolver : s(P))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, Ut), b("div", Gt, [b("div", Yt, [b("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Wt), e.hideButton ? B("", !0) : (i(), y(a, {
          key: 0,
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"]))]), b("div", qt, [e.icon ? (i(), y(t, {
          key: 0,
          name: e.icon,
          style: Y({
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
          style: Y({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 12, Ht)) : B("", !0)])])], 2)
      }
    }
  }),
  Xt = h(Jt, [
    ["__scopeId", "data-v-c254a548"]
  ]),
  Qt = {
    class: "kit-stories-src-counter"
  },
  Zt = g({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(_) {
      me(a => ({
        "9db269f8": a.count
      }));
      const e = _,
        n = S(() => [...new Array(e.count)].map((a, t) => t < e.current ? {
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
      return (a, t) => (i(), d("div", Qt, [(i(!0), d(L, null, J(s(n), o => (i(), d("div", {
        key: o.key,
        class: ie(["progress", [`is-state-${o.state}`]]),
        style: Y(o.state === "current" ? {
          "background-position-x": `-${o.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  en = h(Zt, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  tn = {
    class: "kit-stories-shared-background"
  },
  nn = ["poster", "src"],
  on = ["src"],
  sn = g({
    __name: "Background",
    props: {
      background: {}
    },
    setup(_) {
      return (e, n) => {
        const a = Ze;
        return i(), d("div", tn, [e.background.type === "video" ? (i(), d("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, nn)) : e.background.type === "image" ? (i(), d("img", {
          key: 1,
          src: e.background.src
        }, null, 8, on)) : e.background.type === "stars" ? (i(), y(a, {
          key: 2,
          class: "stars"
        })) : B("", !0)])
      }
    }
  }),
  an = h(sn, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  ln = {
    class: "kit-stories-layouts-title-subtitle"
  },
  rn = {
    class: "title"
  },
  cn = {
    class: "subtitle"
  },
  un = g({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => (i(), d("div", ln, [b("div", rn, E(e.layout.title), 1), b("div", cn, E(e.layout.subtitle), 1)]))
    }
  }),
  _n = h(un, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  dn = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  mn = {
    class: "animoji-container"
  },
  pn = {
    class: "content-container"
  },
  bn = {
    class: "title"
  },
  yn = {
    class: "subtitle"
  },
  fn = g({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => {
        const a = fe;
        return i(), d("div", dn, [b("div", mn, [p(a, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), b("div", pn, [b("div", bn, E(e.layout.title), 1), b("div", yn, E(e.layout.subtitle), 1)])])
      }
    }
  }),
  vn = h(fn, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  gn = g({
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
        t = S(() => n.button.type === "next" ? n.isLast ? c("base.close") : c("base.next") : n.button.label),
        o = () => {
          if (n.button.type === "next") z().$webApp.HapticFeedback.impactOccurred("light"), a("next");
          else if (n.button.type === "local") M().push(n.button.link);
          else if (n.button.type === "external") z().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") z().$webApp.openTelegramLink(n.button.link);
          else throw n.button, de("Unknown button type")
        };
      return (r, l) => {
        const u = ae;
        return i(), y(u, {
          label: s(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: s(se).LARGE,
          onClick: l[0] || (l[0] = F(m => o(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  kn = h(gn, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  hn = {
    class: "kit-stories-src-story"
  },
  An = {
    class: "content"
  },
  $n = {
    class: "layout"
  },
  wn = {
    class: "button"
  },
  Sn = g({
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
        const a = an,
          t = _n,
          o = vn,
          r = kn;
        return i(), d("div", hn, [p(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), b("div", An, [b("div", $n, [e.story.layout.type === "TitleSubtitle" ? (i(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), y(o, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : B("", !0)]), b("div", wn, [e.story.button ? (i(), y(r, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = l => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : B("", !0)])])])
      }
    }
  }),
  Cn = h(Sn, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  En = (_, e) => {
    const n = _,
      a = I(_),
      t = S(() => 1 - a.value / n);
    let o = 0,
      r;
    const l = () => {
        o = Date.now(), r = Me(() => {
          const w = Date.now(),
            f = w - o;
          o = w, a.value = Math.max(a.value - f, 0), a.value <= 0 && (u(), e())
        }, 100)
      },
      u = () => {
        r && (clearInterval(r), r = void 0)
      },
      m = () => {
        if (r) {
          u();
          const w = Date.now() - o;
          a.value = Math.max(a.value - w, 0)
        }
      },
      k = () => l();
    return l(), {
      timeToExpire: Pe(a),
      progress: t,
      destroy: u,
      pause: m,
      resume: k
    }
  },
  Nn = 150,
  Bn = g({
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
        t = I(0),
        o = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, m()) : a("close")
        },
        r = () => {
          t.value > 0 ? (t.value -= 1, m()) : a("close")
        },
        l = () => En(5e3, o),
        u = Le(l()),
        m = () => {
          u.value.destroy(), u.value = l()
        },
        k = I(),
        w = ze(),
        f = I(!1),
        $ = I(!1),
        x = () => {
          f.value = !1, $.value = !1, w.set(() => {
            u.value.pause(), f.value = !0, $.value = !0
          }, Nn)
        },
        A = () => {
          w.destroy(), f.value && (u.value.resume(), f.value = !1)
        },
        R = v => {
          if (f.value || $.value || !k.value) return;
          const {
            width: C,
            left: K
          } = k.value.getBoundingClientRect(), V = v.clientX - K, j = C / 3;
          V < j ? r() : V > j * 2 && o()
        };
      return Oe(() => {
        w.destroy(), u.value.destroy()
      }), (v, C) => {
        const K = en,
          V = Cn,
          j = et;
        return i(), y(j, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: N(() => [b("div", {
            ref_key: "storiesRef",
            ref: k,
            class: "kit-stories-src-stories",
            onPointerdown: C[1] || (C[1] = F(O => x(), ["prevent"])),
            onPointerup: C[2] || (C[2] = O => A()),
            onPointercancel: C[3] || (C[3] = O => A()),
            onPointerleave: C[4] || (C[4] = O => A()),
            onClick: C[5] || (C[5] = O => R(O))
          }, [p(K, {
            current: s(t),
            "current-progress": s(u).progress.value,
            count: v.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (i(), y(V, {
            key: s(t),
            story: v.stories[s(t)],
            "is-last": s(t) === v.stories.length - 1,
            onNext: C[0] || (C[0] = O => o())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  xn = h(Bn, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  Tn = g({
    __name: "Stories",
    props: De({
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
      const e = pe(_, "modelValue");
      return (n, a) => {
        const t = xn;
        return i(), y(ue, {
          name: "opacity-transition"
        }, {
          default: N(() => [e.value ? (i(), y(t, {
            key: 0,
            stories: n.set.stories,
            class: "kit-stories",
            onClose: a[0] || (a[0] = o => e.value = !1)
          }, null, 8, ["stories"])) : B("", !0)]),
          _: 1
        })
      }
    }
  }),
  In = h(Tn, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  Rn = {
    class: "pages-index-new-season-banner"
  },
  Pn = {
    class: "progress"
  },
  Mn = g({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(_) {
      const e = _,
        n = M(),
        a = G(),
        t = H(),
        o = z().$webApp,
        r = [{
          title: c("index.banners.tge.title"),
          buttonLabel: c("index.banners.tge.button_label"),
          onButtonClick: () => {
            M().push({
              name: "tge"
            })
          },
          gif: P("index/banner/tge", "gif"),
          imageSize: 105,
          analyticsName: T.TGE
        }, {
          title: c("index.banners.bman.title"),
          buttonLabel: c("index.banners.bman.button_label"),
          onButtonClick: () => {
            M().push({
              name: "memepad-jetton-shortname",
              params: {
                shortname: "BMAN_gJokF"
              },
              query: {
                memepadFrom: U.MAIN_PAGE_BANNER_BMAN_BANNER,
                from: U.MAIN_PAGE_BANNER_BMAN_BANNER
              }
            })
          },
          gif: P("index/banner/bman"),
          imageSize: 80,
          analyticsName: T.BMAN
        }, {
          title: c("index.banners.babydoge.title"),
          buttonLabel: c("index.banners.babydoge.button_label"),
          onButtonClick: () => {
            M().push({
              name: "memepad-jetton-shortname",
              params: {
                shortname: "BABYDOGE_nInMz"
              },
              query: {
                memepadFrom: U.MAIN_PAGE_BANNER_BABYDOGE_BANNER,
                from: U.MAIN_PAGE_BANNER_BABYDOGE_BANNER
              }
            })
          },
          gif: P("index/banner/babydoge", "gif"),
          imageSize: 92,
          analyticsName: T.BABYDOGE
        }, {
          title: c("index.banners.trade_now.title"),
          buttonLabel: c("index.banners.trade_now.button_label"),
          onButtonClick: () => {
            a.openTradingBot()
          },
          icon: "ton-logo",
          imageSize: 64,
          analyticsName: T.TRADE_NOW
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
          analyticsName: T.EARN_NOW
        }, {
          title: c("index.banners.season_2.title"),
          buttonLabel: c("index.banners.season_2.button_label"),
          onButtonClick: () => {
            l.value = !0
          },
          lottie: "animations/Moon",
          imageSize: 96,
          analyticsName: T.SEASON_2
        }, {
          title: c("index.banners.blum_x.title"),
          buttonLabel: c("index.banners.blum_x.button_label"),
          onButtonClick: () => {
            G().openBlumTwitter()
          },
          gif: P("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: T.BLUM_X
        }, {
          title: c("index.banners.blum_academy.title"),
          buttonLabel: c("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            o.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: P("index/banner/edu", "gif"),
          imageSize: 102,
          analyticsName: T.BLUM_ACADEMY
        }, {
          title: c("index.banners.create_memecoin.title"),
          buttonLabel: c("index.banners.create_memecoin.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-new",
              query: {
                memepadFrom: ee.MAIN_PAGE_BANNER_CREATE_MEMECOIN,
                memepadNewFrom: ye.MAIN_PAGE_BANNER_CREATE_MEMECOIN
              }
            })
          },
          gif: P("index/banner/memecoin", "gif"),
          imageSize: 118,
          analyticsName: T.CREATE_MEMECOIN
        }, {
          title: c("index.banners.friends.title"),
          buttonLabel: c("index.banners.friends.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens"
            })
          },
          gif: P("index/banner/comission", "gif"),
          imageSize: 100,
          analyticsName: T.FRIENDS
        }, {
          title: c("index.banners.trade_memecoins.title"),
          buttonLabel: c("index.banners.trade_memecoins.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad",
              query: {
                memepadFrom: ee.MAIN_PAGE_BANNER_TRADE_MEMECOIN
              }
            })
          },
          gif: P("index/banner/riskreward", "gif"),
          imageSize: 102,
          analyticsName: T.TRADE_MEMECOIN
        }, {
          title: c("index.banners.leaderboard.title"),
          buttonLabel: c("index.banners.leaderboard.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens-leaderboards",
              query: {
                source: Ke.MAIN_PAGE_BANNER
              }
            })
          },
          gif: P("index/banner/leaderboard", "gif"),
          imageSize: 102,
          analyticsName: T.LEADERBOARDS
        }].map((f, $) => ({
          ...f,
          onButtonClick: () => {
            t.main.bannerClick({
              position: $ + 1,
              bannerName: f.analyticsName
            }), f.onButtonClick()
          }
        })),
        l = I(e.value.showOnStart);
      Ve(l, f => f && e.value.onShowed(), {
        immediate: !0
      });
      const u = I(0),
        m = I(null),
        k = (f, $ = "smooth") => {
          var x;
          (x = m.value) == null || x.scrollTo({
            left: f * window.innerWidth + (u.value > f ? -1 : 1),
            behavior: $
          })
        },
        w = je(() => {
          if (!m.value) return;
          const f = m.value.children[0].offsetWidth + 10,
            $ = m.value.scrollLeft,
            x = Math.round($ / f);
          u.value = x
        }, 50).debouncedFunction;
      return Fe(() => {
        k(u.value, "instant")
      }), (f, $) => {
        const x = Xt,
          A = Qe,
          R = In;
        return i(), d("div", Rn, [b("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: $[0] || ($[0] = (...v) => s(w) && s(w)(...v)),
          onTouchmove: $[1] || ($[1] = (...v) => s(w) && s(w)(...v))
        }, [(i(!0), d(L, null, J(s(r), (v, C) => (i(), d("div", {
          key: v.title,
          class: "item"
        }, [p(x, {
          index: C,
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
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name", "hide-button", "text-size"])]))), 128))], 544), b("div", Pn, [s(r).length > 1 ? (i(), y(A, {
          key: 0,
          "model-value": s(u),
          count: s(r).length,
          timer: 15e3,
          "onUpdate:modelValue": k
        }, null, 8, ["model-value", "count"])) : B("", !0)]), p(R, {
          modelValue: s(l),
          "onUpdate:modelValue": $[2] || ($[2] = v => be(l) ? l.value = v : null),
          set: f.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Ln = h(Mn, [
    ["__scopeId", "data-v-858c1198"]
  ]),
  zn = {
    class: "pages-wallet-asset-skeleton"
  },
  On = {
    class: "content"
  },
  Dn = g({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(_) {
      return (e, n) => {
        const a = X;
        return i(), d("div", zn, [(i(!0), d(L, null, J(e.count, t => (i(), d("div", {
          key: t,
          class: "skeleton"
        }, [p(a, {
          rounded: "",
          class: "logo"
        }), b("div", On, [p(a, {
          class: "title"
        }), p(a, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  Kn = h(Dn, [
    ["__scopeId", "data-v-26805825"]
  ]),
  Vn = {
    class: "pages-index-points"
  },
  Fn = g({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(_) {
      const e = S(() => M().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (n, a) => {
        const t = tt,
          o = Kn,
          r = Je;
        return i(), d("div", Vn, [p(t, {
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
  jn = h(Fn, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  Un = () => {
    const _ = Ue(),
      e = Ge(),
      n = Ye(),
      a = S(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      o = {
        set: Gn(),
        showOnStart: !z().$webApp.storage.local.get(t),
        onShowed: () => {
          z().$webApp.storage.local.set(t, "true")
        }
      },
      r = S(() => {
        const l = _.pointSymbols.value,
          u = _.dropSymbols.value;
        if (!(!l || !u) && !(!l.mp || !l.bp)) return [l.mp, l.bp, ...u]
      });
    return {
      dailyReward: n,
      myTribe: a,
      season2Stories: o,
      wallet: S(() => _.wallet.value),
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
  Yn = {
    class: "index-page page"
  },
  Wn = g({
    __name: "index",
    setup(_) {
      const e = Un();
      return (n, a) => {
        const t = Mt,
          o = Ft,
          r = Ln,
          l = jn;
        return i(), d("div", Yn, [p(t, {
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
  po = h(Wn, [
    ["__scopeId", "data-v-3c1e49c9"]
  ]);
export {
  po as
  default
};