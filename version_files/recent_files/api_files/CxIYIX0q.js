import {
  d as g,
  ar as te,
  as as ne,
  at as oe,
  J as R,
  j as w,
  a7 as re,
  o as a,
  c as d,
  e as s,
  z as f,
  G as T,
  b as p,
  D as B,
  m as Z,
  t as C,
  a as y,
  au as j,
  A as r,
  av as ce,
  F as O,
  an as W,
  aw as ue,
  al as F,
  _ as q,
  f as k,
  ah as _e,
  ax as he,
  a9 as se,
  ay as Se,
  az as Ae,
  x as ae,
  ad as L,
  a5 as H,
  U as $e,
  aA as de,
  n as ie,
  h as D,
  C as me,
  k as we,
  aB as Ee,
  aC as Ce,
  aa as Ne,
  p as pe,
  aD as ee,
  aE as be,
  ak as G,
  q as J,
  aF as Q,
  aj as le,
  $ as Be,
  aG as Te,
  a0 as xe,
  aH as Ie,
  aI as Y,
  aJ as Re,
  a1 as Pe,
  a8 as P,
  aK as ye,
  aL as Me,
  aM as Le,
  aN as Oe,
  aO as ze,
  ag as De,
  a4 as Ke,
  aP as Ve,
  aQ as Fe,
  aR as I,
  aS as U,
  T as je,
  K as Ue,
  L as Ge,
  O as Ye,
  ab as We,
  aT as qe,
  aU as He,
  Q as Je
} from "./Izfnm6Yj.js";
import {
  _ as fe,
  a as Xe
} from "./BdAeDNwD.js";
import {
  _ as ve
} from "./CPfyui3L.js";
import {
  _ as X
} from "./BuL6aMeF.js";
import {
  _ as Qe
} from "./B7IS95ja.js";
import {
  _ as ge,
  a as Ze,
  b as et
} from "./Cy8C1JMI.js";
import {
  _ as tt
} from "./YH_pT8hZ.js";
import {
  _ as nt
} from "./CLuOY3rb.js";
import {
  _ as ot
} from "./D79MLhE5.js";
import {
  _ as st
} from "./C36Og8DA.js";
import {
  u as ke
} from "./Dlfdve1Y.js";
import {
  _ as at
} from "./CipiC8PI.js";
import "./ClBz-AUq.js";
import "./CQL_QK72.js";
import "./Aafd6ceD.js";
import "./CRChgxbE.js";
import "./Cc-Uhnnl.js";
import "./DutP__Ts.js";
import "./BO5yivWN.js";
import "./CRPSg0lH.js";
const it = {
    key: 0,
    class: "notification"
  },
  lt = g({
    __name: "BannerStaySecureNotification",
    setup(_) {
      const e = te(),
        {
          sendEmailAuthProviderVerification: n
        } = ne(),
        {
          hasClosedStaySecureNotification: i,
          markStaySecureNotificationAsClosed: t
        } = oe(),
        o = R(!0),
        c = R(!1),
        l = w(() => {
          var b;
          return ((b = e.value) == null ? void 0 : b.emailMasked) ?? ""
        }),
        u = w(() => {
          var b;
          return ((b = e.value) == null ? void 0 : b.hasEmail) ?? !1
        }),
        m = w(() => {
          var b;
          return ((b = e.value) == null ? void 0 : b.isEmailVerified) ?? !1
        }),
        v = w(() => o.value && u.value && !m.value && !i() && !c.value),
        A = () => {
          o.value = !1, t()
        },
        $ = async b => {
          const S = await n({
            captchaToken: b
          });
          if (!W(S)) {
            if (S.code === ue.Forbidden) {
              c.value = !0;
              return
            }
            F().error();
            return
          }
          A(), F().success(r("secure_options.message.email_code_sent"))
        }, x = async b => {
          await $(b), c.value = !1
        }, M = () => {
          c.value = !1
        };
      return (b, S) => {
        const N = fe,
          E = re("I18nT"),
          z = q;
        return a(), d(O, null, [s(c) ? (a(), f(N, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: x,
          onReject: M
        })) : T("", !0), p(ce, {
          name: "opacity-spring-transition"
        }, {
          default: B(() => [s(v) ? (a(), d("div", it, [p(E, {
            tag: "span",
            keypath: "secure_options.notification.email_not_verified"
          }, {
            email: B(() => [Z(C(s(l)), 1)]),
            resend: B(() => [y("a", {
              href: "#",
              onClick: S[0] || (S[0] = j(h => $(), ["prevent"]))
            }, C(("t" in b ? b.t : s(r))("secure_options.notification.email_not_verified_resend")), 1)]),
            _: 1
          }), y("button", {
            type: "button",
            class: "close reset",
            onClick: A
          }, [p(z, {
            name: "close-micro"
          })])])) : T("", !0)]),
          _: 1
        })], 64)
      }
    }
  }),
  rt = k(lt, [
    ["__scopeId", "data-v-d24568ac"]
  ]),
  ct = {
    class: "pages-index-banner-wallet"
  },
  ut = {
    key: 1,
    class: "connected"
  },
  _t = {
    class: "label"
  },
  dt = g({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(_) {
      const e = _,
        n = () => Se(Ae.MAIN).runConnectionFlow(),
        i = w(() => {
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
        const c = X,
          l = ae;
        return a(), d("div", ct, [s(i).type === "skeleton" ? (a(), f(c, {
          key: 0,
          class: "skeleton"
        })) : s(i).type === "connected" ? (a(), d("div", ut, [y("div", _t, C(("t" in t ? t.t : s(r))("wallet.total_balance")), 1), (a(), f(he(s(i).balance), {
          class: "balance"
        }))])) : s(i).type === "connect" ? (a(), f(l, {
          key: 2,
          label: ("t" in t ? t.t : s(r))("wallet.connect.btn"),
          size: s(se).SMALL,
          onClick: o[0] || (o[0] = u => n())
        }, null, 8, ["label", "size"])) : T("", !0)])
      }
    }
  }),
  mt = k(dt, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  pt = {
    class: "pages-tribe-external-index-page"
  },
  bt = g({
    __name: "ExternalIndexPage",
    props: {
      myTribe: {}
    },
    setup(_) {
      const e = L().resolve({
          name: "tribe-join"
        }).fullPath,
        n = L().resolve({
          name: "tribe-slug"
        }).fullPath,
        i = t => H().main.tribeLogoClick(t);
      return (t, o) => {
        const c = X,
          l = $e,
          u = q,
          m = Qe;
        return a(), d("div", pt, [t.myTribe ? (a(), d(O, {
          key: 1
        }, [t.myTribe.type === "validating" ? (a(), f(l, {
          key: 0,
          to: s(e),
          class: "validating hex-center",
          onClick: o[0] || (o[0] = v => i(t.myTribe.type))
        }, {
          default: B(() => o[4] || (o[4] = [y("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (a(), f(l, {
          key: 1,
          to: s(e),
          class: "join hex-center",
          onClick: o[1] || (o[1] = v => i(t.myTribe.type))
        }, {
          default: B(() => [p(u, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_created" ? (a(), f(l, {
          key: 2,
          to: s(e),
          class: "error hex-center",
          onClick: o[2] || (o[2] = v => i(t.myTribe.type))
        }, {
          default: B(() => [p(u, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "ok" ? (a(), f(l, {
          key: 3,
          to: s(n),
          class: "ok",
          onClick: o[3] || (o[3] = v => i(t.myTribe.type))
        }, {
          default: B(() => [p(m, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : T("", !0)], 64)) : (a(), f(c, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  yt = k(bt, [
    ["__scopeId", "data-v-c8b8fd36"]
  ]),
  ft = {
    class: "field-label"
  },
  vt = {
    class: "field-value"
  },
  gt = g({
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
      const e = w(() => ({
        field: !0,
        "field--disabled": _.disabled
      }));
      return (n, i) => {
        const t = q;
        return a(), d("div", {
          class: ie(s(e))
        }, [p(t, {
          name: n.icon,
          class: "field-icon"
        }, null, 8, ["name"]), y("div", ft, C(n.label), 1), y("div", vt, C(n.value), 1)], 2)
      }
    }
  }),
  kt = k(gt, [
    ["__scopeId", "data-v-d2541044"]
  ]),
  ht = g({
    __name: "BannerProfileModalEmailVerify",
    setup(_) {
      const {
        sendEmailAuthProviderVerification: e
      } = ne(), n = R(!1), i = async c => {
        const l = await e({
          captchaToken: c
        });
        if (!W(l)) {
          if (l.code === ue.Forbidden) {
            n.value = !0;
            return
          }
          F().error();
          return
        }
        F().success(r("secure_options.message.email_code_sent"))
      }, t = async c => {
        await i(c), n.value = !1
      }, o = () => {
        n.value = !1
      };
      return (c, l) => {
        const u = fe,
          m = re("I18nT");
        return s(n) ? (a(), f(u, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: t,
          onReject: o
        })) : (a(), f(m, {
          key: 1,
          tag: "div",
          class: "caption",
          keypath: "secure_options.profile_modal.connect_email.not_verified_caption"
        }, {
          resend: B(() => [y("a", {
            href: "#",
            class: "link",
            onClick: l[0] || (l[0] = j(v => i(), ["prevent"]))
          }, C(("t" in c ? c.t : s(r))("secure_options.profile_modal.connect_email.not_verified_caption_resend")), 1)]),
          _: 1
        }))
      }
    }
  }),
  St = k(ht, [
    ["__scopeId", "data-v-7dba19d1"]
  ]),
  At = g({
    __name: "BannerProfileModalEmailDisconnect",
    emits: ["confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const {
        disconnectEmailAuthProvider: n,
        fetchAuthProviders: i
      } = ne(), t = e, o = () => {
        const c = r("secure_options.profile_modal.disconnect_email.confirm.title"),
          l = r("secure_options.profile_modal.disconnect_email.confirm.description"),
          u = [{
            type: "cancel"
          }, {
            type: "default",
            label: r("secure_options.profile_modal.disconnect_email.confirm.btn"),
            onClick: async () => {
              const m = await n();
              if (!W(m)) {
                F().error();
                return
              }
              t("confirm:disconnect"), await i()
            }
          }];
        D().$webApp.popup(c, l, u)
      };
      return (c, l) => (a(), d("a", {
        href: "#",
        class: "disconnect",
        onClick: j(o, ["prevent"])
      }, C(("t" in c ? c.t : s(r))("secure_options.profile_modal.disconnect_email.btn")), 1))
    }
  }),
  $t = k(At, [
    ["__scopeId", "data-v-91098b8b"]
  ]),
  wt = g({
    __name: "BannerProfileModalFooter",
    emits: ["click:connect-account", "confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const n = e,
        i = te(),
        t = w(() => {
          var l;
          return ((l = i.value) == null ? void 0 : l.hasEmail) ?? !1
        }),
        o = w(() => {
          var l;
          return ((l = i.value) == null ? void 0 : l.isEmailVerified) ?? !1
        }),
        c = w(() => {
          var l;
          return ((l = i.value) == null ? void 0 : l.emailMasked) ?? ""
        });
      return (l, u) => {
        const m = kt,
          v = St,
          A = $t,
          $ = ae;
        return s(t) ? (a(), d(O, {
          key: 0
        }, [p(m, {
          icon: "email",
          label: ("t" in l ? l.t : s(r))("secure_options.profile_modal.connect_email.label"),
          value: s(c),
          disabled: !s(o)
        }, null, 8, ["label", "value", "disabled"]), s(o) ? T("", !0) : (a(), d(O, {
          key: 0
        }, [p(v), p(A, {
          "onConfirm:disconnect": u[0] || (u[0] = x => n("confirm:disconnect"))
        })], 64))], 64)) : (a(), f($, {
          key: 1,
          label: ("t" in l ? l.t : s(r))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: s(se).LARGE,
          onClick: u[1] || (u[1] = x => n("click:connect-account"))
        }, null, 8, ["label", "size"]))
      }
    }
  }),
  Et = g({
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
        } = we(),
        {
          secureOptionsModals: i
        } = oe(),
        t = te(),
        o = w(() => {
          var m;
          return ((m = n.getUser.value) == null ? void 0 : m.username) ?? "user"
        }),
        c = w(() => {
          var m;
          return ((m = t.value) == null ? void 0 : m.hasEmail) ?? !1
        }),
        l = () => {
          u(), i.main.show()
        },
        u = () => {
          e.value = !1
        };
      return (m, v) => {
        const A = ve,
          $ = wt,
          x = Ce,
          M = Ne,
          b = Xe;
        return a(), d(O, null, [p(M, {
          modelValue: e.value,
          "onUpdate:modelValue": v[0] || (v[0] = S => e.value = S)
        }, {
          default: B(() => [p(x, null, Ee({
            header: B(() => [p(A, {
              size: "96px",
              class: "avatar"
            })]),
            title: B(() => [Z(C(s(o)), 1)]),
            footer: B(() => [p($, {
              "onClick:connectAccount": l,
              "onConfirm:disconnect": u
            })]),
            _: 2
          }, [s(c) ? void 0 : {
            name: "subTitle",
            fn: B(() => [Z(C(("t" in m ? m.t : s(r))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
            key: "0"
          }]), 1024)]),
          _: 1
        }, 8, ["modelValue"]), p(b)], 64)
      }
    }
  }),
  Ct = k(Et, [
    ["__scopeId", "data-v-657ce5c0"]
  ]),
  Nt = {
    class: "pages-index-banner-profile-tribe"
  },
  Bt = g({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      const {
        isStaySecureFeatureEnabled: e
      } = oe(), n = R(!1), i = () => {
        e.value && (n.value = !0)
      };
      return (t, o) => {
        const c = ve,
          l = mt,
          u = yt,
          m = Ct;
        return a(), d("div", Nt, [p(c, {
          small: "",
          onClick: i
        }), p(l, {
          wallet: t.wallet
        }, null, 8, ["wallet"]), p(u, {
          "my-tribe": t.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"]), p(m, {
          modelValue: s(n),
          "onUpdate:modelValue": o[0] || (o[0] = v => pe(n) ? n.value = v : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  Tt = k(Bt, [
    ["__scopeId", "data-v-67447d49"]
  ]),
  xt = {
    class: "pages-index-banner-controls"
  },
  It = ["onClick"],
  Rt = {
    class: "image-container"
  },
  Pt = {
    class: "title"
  },
  Mt = g({
    __name: "BannerControls",
    setup(_) {
      const e = w(() => [{
        title: r("memepad.explore.launch.button_text"),
        image: "index/banner/controls/launch-token",
        imageType: "svg",
        onClick: () => L().push({
          name: "memepad-new",
          query: {
            memepadFrom: ee.MAIN,
            memepadNewFrom: be.MAIN
          }
        })
      }, {
        title: r("tabs.frens"),
        image: "index/banner/controls/frens",
        imageType: "svg",
        onClick: () => L().push({
          name: "frens"
        })
      }, {
        title: r("base.trading_bot"),
        image: "index/banner/controls/trading-bot",
        imageType: "svg",
        onClick: () => {
          H().main.controlsTradingBotClick(), G().openTradingBot()
        }
      }]);
      return (n, i) => {
        const t = ge;
        return a(), d("div", xt, [(a(!0), d(O, null, J(s(e), (o, c) => (a(), d("button", {
          key: c,
          class: "control reset",
          onClick: l => o.onClick()
        }, [y("span", Rt, [p(t, {
          name: o.image,
          type: o.imageType,
          class: "image"
        }, null, 8, ["name", "type"])]), y("span", Pt, C(o.title), 1)], 8, It))), 128))])
      }
    }
  }),
  Lt = k(Mt, [
    ["__scopeId", "data-v-1225a1c7"]
  ]),
  Ot = {
    class: "pages-index-banner"
  },
  zt = g({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      return (e, n) => {
        const i = rt,
          t = Tt,
          o = Lt;
        return a(), d("div", Ot, [p(i), p(t, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), p(o, {
          class: "controls"
        })])
      }
    }
  }),
  Dt = k(zt, [
    ["__scopeId", "data-v-2dd935c4"]
  ]),
  Kt = {
    class: "pages-index-daily-reward"
  },
  Vt = {
    key: 1,
    class: "widget has-radius"
  },
  Ft = {
    class: "compose"
  },
  jt = {
    class: "title"
  },
  Ut = {
    key: 0,
    class: "subtitle"
  },
  Gt = g({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(_) {
      const e = _,
        n = F(),
        i = (o, c) => async () => {
          const l = await e.dailyRewardClaim();
          Re(l, {
            Err: () => n.error(r("base.claim_error")),
            Ok: u => {
              o === Q.RESTORE && n.success(r("daily_reward.streak_restored", {
                days: c
              })), n.success(`You’ve got ${Pe(u.claimedReward.points)} BP`), G().makeConfetti(), H().main.dailyRewardClick({
                points: u.claimedReward.points.toNumber()
              })
            }
          })
        }, t = w(() => {
          if (e.dailyReward === void 0) return;
          const o = e.dailyReward.currentStreakDays,
            c = `${o}-${r("base.n.days",o)}`;
          if (e.dailyReward.claim === Q.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: r("daily_reward.missed"),
            subtitle: le(r("daily_reward.restore_current_streak", {
              days: c
            })),
            claim: {
              label: r("base.restore"),
              white: !0,
              can: !0,
              fn: i(e.dailyReward.claim, c)
            }
          };
          const l = (() => {
            const m = Be().ms100ticker.value;
            if (!m) return Te();
            const v = xe(e.dailyReward.canClaimAt - m, "letters");
            return le(r("base.claim_next_in", {
              time: v
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: r("daily_reward.current_streak", {
              days: c
            }),
            subtitle: l,
            claim: {
              can: e.dailyReward.claim !== Q.UNAVAILABLE,
              fn: i(e.dailyReward.claim, c)
            }
          }
        });
      return (o, c) => {
        const l = X,
          u = ge,
          m = tt;
        return a(), d("div", Kt, [s(t) ? (a(), d("div", Vt, [p(u, {
          name: s(t).icon,
          class: "icon"
        }, null, 8, ["name"]), y("div", Ft, [y("div", jt, C(s(t).title), 1), ("isOk" in o ? o.isOk : s(W))(s(t).subtitle) ? (a(), d("div", Ut, C(s(t).subtitle.data), 1)) : (a(), f(l, {
          key: 1,
          type: s(Ie).SECONDARY,
          class: "skeleton subtitle"
        }, null, 8, ["type"]))]), s(t).claim ? (a(), f(m, {
          key: 0,
          label: s(t).claim.label,
          "can-claim": s(t).claim.can,
          "claim-fn": s(t).claim.fn,
          style: Y(s(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : T("", !0)])) : (a(), f(l, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  Yt = k(Gt, [
    ["__scopeId", "data-v-616b8ac4"]
  ]),
  Wt = ["src"],
  qt = ["src"],
  Ht = {
    class: "content"
  },
  Jt = {
    class: "inner"
  },
  Xt = ["innerHTML"],
  Qt = {
    class: "icon-wrapper"
  },
  Zt = ["src"],
  en = g({
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
        const i = Ze,
          t = q,
          o = ye;
        return a(), d("div", {
          class: ie(["pages-index-new-season-banner-card", `size-${e.textSize}`])
        }, [y("img", {
          src: ("imgResolver" in e ? e.imgResolver : s(P))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, Wt), n[0] || (n[0] = y("div", {
          class: "bg"
        }, null, -1)), y("img", {
          src: ("imgResolver" in e ? e.imgResolver : s(P))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, qt), y("div", Ht, [y("div", Jt, [y("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Xt), e.hideButton ? T("", !0) : (a(), f(i, {
          key: 0,
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"]))]), y("div", Qt, [e.icon ? (a(), f(t, {
          key: 0,
          name: e.icon,
          style: Y({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 8, ["name", "style"])) : e.lottie ? (a(), f(o, {
          key: 1,
          name: e.lottie,
          loop: "",
          size: e.imageSize
        }, null, 8, ["name", "size"])) : e.gif ? (a(), d("img", {
          key: 2,
          src: e.gif,
          style: Y({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 12, Zt)) : T("", !0)])])], 2)
      }
    }
  }),
  tn = k(en, [
    ["__scopeId", "data-v-c254a548"]
  ]),
  nn = {
    class: "kit-stories-src-counter"
  },
  on = g({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(_) {
      de(i => ({
        "9db269f8": i.count
      }));
      const e = _,
        n = w(() => [...new Array(e.count)].map((i, t) => t < e.current ? {
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
      return (i, t) => (a(), d("div", nn, [(a(!0), d(O, null, J(s(n), o => (a(), d("div", {
        key: o.key,
        class: ie(["progress", [`is-state-${o.state}`]]),
        style: Y(o.state === "current" ? {
          "background-position-x": `-${o.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  sn = k(on, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  an = {
    class: "kit-stories-shared-background"
  },
  ln = ["poster", "src"],
  rn = ["src"],
  cn = g({
    __name: "Background",
    props: {
      background: {}
    },
    setup(_) {
      return (e, n) => {
        const i = ot;
        return a(), d("div", an, [e.background.type === "video" ? (a(), d("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, ln)) : e.background.type === "image" ? (a(), d("img", {
          key: 1,
          src: e.background.src
        }, null, 8, rn)) : e.background.type === "stars" ? (a(), f(i, {
          key: 2,
          class: "stars"
        })) : T("", !0)])
      }
    }
  }),
  un = k(cn, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  _n = {
    class: "kit-stories-layouts-title-subtitle"
  },
  dn = {
    class: "title"
  },
  mn = {
    class: "subtitle"
  },
  pn = g({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => (a(), d("div", _n, [y("div", dn, C(e.layout.title), 1), y("div", mn, C(e.layout.subtitle), 1)]))
    }
  }),
  bn = k(pn, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  yn = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  fn = {
    class: "animoji-container"
  },
  vn = {
    class: "content-container"
  },
  gn = {
    class: "title"
  },
  kn = {
    class: "subtitle"
  },
  hn = g({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => {
        const i = ye;
        return a(), d("div", yn, [y("div", fn, [p(i, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), y("div", vn, [y("div", gn, C(e.layout.title), 1), y("div", kn, C(e.layout.subtitle), 1)])])
      }
    }
  }),
  Sn = k(hn, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  An = g({
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
        i = e,
        t = w(() => n.button.type === "next" ? n.isLast ? r("base.close") : r("base.next") : n.button.label),
        o = () => {
          if (n.button.type === "next") D().$webApp.HapticFeedback.impactOccurred("light"), i("next");
          else if (n.button.type === "local") L().push(n.button.link);
          else if (n.button.type === "external") D().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") D().$webApp.openTelegramLink(n.button.link);
          else throw n.button, _e("Unknown button type")
        };
      return (c, l) => {
        const u = ae;
        return a(), f(u, {
          label: s(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: s(se).LARGE,
          onClick: l[0] || (l[0] = j(m => o(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  $n = k(An, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  wn = {
    class: "kit-stories-src-story"
  },
  En = {
    class: "content"
  },
  Cn = {
    class: "layout"
  },
  Nn = {
    class: "button"
  },
  Bn = g({
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
        const i = un,
          t = bn,
          o = Sn,
          c = $n;
        return a(), d("div", wn, [p(i, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), y("div", En, [y("div", Cn, [e.story.layout.type === "TitleSubtitle" ? (a(), f(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (a(), f(o, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : T("", !0)]), y("div", Nn, [e.story.button ? (a(), f(c, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = l => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : T("", !0)])])])
      }
    }
  }),
  Tn = k(Bn, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  xn = (_, e) => {
    const n = _,
      i = R(_),
      t = w(() => 1 - i.value / n);
    let o = 0,
      c;
    const l = () => {
        o = Date.now(), c = Le(() => {
          const A = Date.now(),
            $ = A - o;
          o = A, i.value = Math.max(i.value - $, 0), i.value <= 0 && (u(), e())
        }, 100)
      },
      u = () => {
        c && (clearInterval(c), c = void 0)
      },
      m = () => {
        if (c) {
          u();
          const A = Date.now() - o;
          i.value = Math.max(i.value - A, 0)
        }
      },
      v = () => l();
    return l(), {
      timeToExpire: Me(i),
      progress: t,
      destroy: u,
      pause: m,
      resume: v
    }
  },
  In = 150,
  Rn = g({
    __name: "Stories",
    props: {
      stories: {}
    },
    emits: ["close"],
    setup(_, {
      emit: e
    }) {
      const n = _,
        i = e,
        t = R(0),
        o = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, m()) : i("close")
        },
        c = () => {
          t.value > 0 ? (t.value -= 1, m()) : i("close")
        },
        l = () => xn(5e3, o),
        u = Oe(l()),
        m = () => {
          u.value.destroy(), u.value = l()
        },
        v = R(),
        A = ze(),
        $ = R(!1),
        x = R(!1),
        M = () => {
          $.value = !1, x.value = !1, A.set(() => {
            u.value.pause(), $.value = !0, x.value = !0
          }, In)
        },
        b = () => {
          A.destroy(), $.value && (u.value.resume(), $.value = !1)
        },
        S = N => {
          if ($.value || x.value || !v.value) return;
          const {
            width: E,
            left: z
          } = v.value.getBoundingClientRect(), h = N.clientX - z, K = E / 3;
          h < K ? c() : h > K * 2 && o()
        };
      return De(() => {
        A.destroy(), u.value.destroy()
      }), (N, E) => {
        const z = sn,
          h = Tn,
          K = st;
        return a(), f(K, {
          "no-padding": "",
          "no-scroll": "",
          "z-index": 6
        }, {
          default: B(() => [y("div", {
            ref_key: "storiesRef",
            ref: v,
            class: "kit-stories-src-stories",
            onPointerdown: E[1] || (E[1] = j(V => M(), ["prevent"])),
            onPointerup: E[2] || (E[2] = V => b()),
            onPointercancel: E[3] || (E[3] = V => b()),
            onPointerleave: E[4] || (E[4] = V => b()),
            onClick: E[5] || (E[5] = V => S(V))
          }, [p(z, {
            current: s(t),
            "current-progress": s(u).progress.value,
            count: N.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (a(), f(h, {
            key: s(t),
            story: N.stories[s(t)],
            "is-last": s(t) === N.stories.length - 1,
            onNext: E[0] || (E[0] = V => o())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  Pn = k(Rn, [
    ["__scopeId", "data-v-6cd33e1f"]
  ]),
  Mn = g({
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
      const e = me(_, "modelValue");
      return (n, i) => {
        const t = Pn;
        return a(), f(ce, {
          name: "opacity-transition"
        }, {
          default: B(() => [e.value ? (a(), f(t, {
            key: 0,
            stories: n.set.stories,
            class: "kit-stories",
            onClose: i[0] || (i[0] = o => e.value = !1)
          }, null, 8, ["stories"])) : T("", !0)]),
          _: 1
        })
      }
    }
  }),
  Ln = k(Mn, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  On = {
    class: "pages-index-new-season-banner"
  },
  zn = {
    class: "progress"
  },
  Dn = g({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(_) {
      const e = _,
        n = L(),
        i = G(),
        t = H(),
        o = ke(),
        c = Ve(),
        l = D().$webApp,
        u = o.mustEligibilityState,
        m = [{
          title: r("index.banners.tge.title"),
          buttonLabel: r("index.banners.tge.button_label"),
          onButtonClick: () => {
            u.value.status === "restricted" ? c.open(Fe.RESTRICTED_LOCATION) : L().push({
              name: "tge"
            })
          },
          gif: P("index/banner/tge", "gif"),
          imageSize: 105,
          analyticsName: I.TGE
        }, {
          title: r("index.banners.bman.title"),
          buttonLabel: r("index.banners.bman.button_label"),
          onButtonClick: () => {
            L().push({
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
          analyticsName: I.BMAN
        }, {
          title: r("index.banners.babydoge.title"),
          buttonLabel: r("index.banners.babydoge.button_label"),
          onButtonClick: () => {
            L().push({
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
          analyticsName: I.BABYDOGE
        }, {
          title: r("index.banners.trade_now.title"),
          buttonLabel: r("index.banners.trade_now.button_label"),
          onButtonClick: () => {
            i.openTradingBot()
          },
          icon: "ton-logo",
          imageSize: 64,
          analyticsName: I.TRADE_NOW
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
          analyticsName: I.EARN_NOW
        }, {
          title: r("index.banners.season_2.title"),
          buttonLabel: r("index.banners.season_2.button_label"),
          onButtonClick: () => {
            v.value = !0
          },
          lottie: "animations/Moon",
          imageSize: 96,
          analyticsName: I.SEASON_2
        }, {
          title: r("index.banners.blum_x.title"),
          buttonLabel: r("index.banners.blum_x.button_label"),
          onButtonClick: () => {
            G().openBlumTwitter()
          },
          gif: P("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: I.BLUM_X
        }, {
          title: r("index.banners.blum_academy.title"),
          buttonLabel: r("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            l.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: P("index/banner/edu", "gif"),
          imageSize: 102,
          analyticsName: I.BLUM_ACADEMY
        }, {
          title: r("index.banners.create_memecoin.title"),
          buttonLabel: r("index.banners.create_memecoin.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-new",
              query: {
                memepadFrom: ee.MAIN_PAGE_BANNER_CREATE_MEMECOIN,
                memepadNewFrom: be.MAIN_PAGE_BANNER_CREATE_MEMECOIN
              }
            })
          },
          gif: P("index/banner/memecoin", "gif"),
          imageSize: 118,
          analyticsName: I.CREATE_MEMECOIN
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
          analyticsName: I.FRIENDS
        }, {
          title: r("index.banners.trade_memecoins.title"),
          buttonLabel: r("index.banners.trade_memecoins.button_label"),
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
          analyticsName: I.TRADE_MEMECOIN
        }, {
          title: r("index.banners.leaderboard.title"),
          buttonLabel: r("index.banners.leaderboard.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens-leaderboards",
              query: {
                source: je.MAIN_PAGE_BANNER
              }
            })
          },
          gif: P("index/banner/leaderboard", "gif"),
          imageSize: 102,
          analyticsName: I.LEADERBOARDS
        }].map((b, S) => ({
          ...b,
          onButtonClick: () => {
            t.main.bannerClick({
              position: S + 1,
              bannerName: b.analyticsName
            }), b.onButtonClick()
          }
        })),
        v = R(e.value.showOnStart);
      Ue(v, b => b && e.value.onShowed(), {
        immediate: !0
      });
      const A = R(0),
        $ = R(null),
        x = (b, S = "smooth") => {
          var N;
          (N = $.value) == null || N.scrollTo({
            left: b * window.innerWidth + (A.value > b ? -1 : 1),
            behavior: S
          })
        },
        M = Ye(() => {
          if (!$.value) return;
          const b = $.value.children[0].offsetWidth + 10,
            S = $.value.scrollLeft,
            N = Math.round(S / b);
          A.value = N
        }, 50).debouncedFunction;
      return Ge(() => {
        x(A.value, "instant")
      }), (b, S) => {
        const N = tn,
          E = nt,
          z = Ln;
        return a(), d("div", On, [y("div", {
          ref_key: "listEl",
          ref: $,
          class: "list",
          onScroll: S[0] || (S[0] = (...h) => s(M) && s(M)(...h)),
          onTouchmove: S[1] || (S[1] = (...h) => s(M) && s(M)(...h))
        }, [(a(!0), d(O, null, J(s(m), (h, K) => (a(), d("div", {
          key: h.title,
          class: "item"
        }, [p(N, {
          index: K,
          icon: h.icon,
          lottie: h.lottie,
          gif: h.gif,
          title: h.title,
          "button-label": h.buttonLabel,
          "on-button-click": h.onButtonClick,
          "image-size": h.imageSize,
          "analytics-name": h.analyticsName,
          "hide-button": h.hideButton,
          "text-size": h.textSize
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name", "hide-button", "text-size"])]))), 128))], 544), y("div", zn, [s(m).length > 1 ? (a(), f(E, {
          key: 0,
          "model-value": s(A),
          count: s(m).length,
          timer: 15e3,
          "onUpdate:modelValue": x
        }, null, 8, ["model-value", "count"])) : T("", !0)]), p(z, {
          modelValue: s(v),
          "onUpdate:modelValue": S[2] || (S[2] = h => pe(v) ? v.value = h : null),
          set: b.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Kn = k(Dn, [
    ["__scopeId", "data-v-6365c410"]
  ]),
  Vn = {
    class: "pages-wallet-asset-skeleton"
  },
  Fn = {
    class: "content"
  },
  jn = g({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(_) {
      return (e, n) => {
        const i = X;
        return a(), d("div", Vn, [(a(!0), d(O, null, J(e.count, t => (a(), d("div", {
          key: t,
          class: "skeleton"
        }, [p(i, {
          rounded: "",
          class: "logo"
        }), y("div", Fn, [p(i, {
          class: "title"
        }), p(i, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  Un = k(jn, [
    ["__scopeId", "data-v-26805825"]
  ]),
  Gn = {
    class: "pages-index-points"
  },
  Yn = g({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(_) {
      const e = w(() => L().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (n, i) => {
        const t = at,
          o = Un,
          c = et;
        return a(), d("div", Gn, [p(t, {
          label: ("t" in n ? n.t : s(r))("wallet.points.title"),
          "full-path": s(e)
        }, null, 8, ["label", "full-path"]), n.points ? (a(), f(c, {
          key: 1,
          points: n.points
        }, null, 8, ["points"])) : (a(), f(o, {
          key: 0,
          count: 2
        }))])
      }
    }
  }),
  Wn = k(Yn, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  qn = () => {
    const _ = We(),
      e = qe(),
      n = He(),
      i = w(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      o = {
        set: Hn(),
        showOnStart: !D().$webApp.storage.local.get(t),
        onShowed: () => {
          D().$webApp.storage.local.set(t, "true")
        }
      },
      c = w(() => {
        const l = _.pointSymbols.value,
          u = _.dropSymbols.value;
        if (!(!l || !u) && !(!l.mp || !l.bp)) return [l.mp, l.bp, ...u]
      });
    return {
      dailyReward: n,
      myTribe: i,
      season2Stories: o,
      wallet: w(() => _.wallet.value),
      walletAssets: c
    }
  },
  Hn = () => ({
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
  Jn = {
    class: "index-page page"
  },
  Xn = g({
    __name: "index",
    setup(_) {
      const e = qn(),
        n = ke();
      return (i, t) => {
        const o = Je,
          c = Dt,
          l = Yt,
          u = Kn,
          m = Wn;
        return a(), d("div", Jn, [s(n).eligibilityState.value ? (a(), d(O, {
          key: 1
        }, [p(c, {
          "my-tribe": s(e).myTribe.value,
          wallet: s(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), p(l, {
          "daily-reward": s(e).dailyReward.reward.value,
          "daily-reward-claim": s(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), p(u, {
          value: s(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), p(m, {
          points: s(e).walletAssets.value
        }, null, 8, ["points"])], 64)) : (a(), f(o, {
          key: 0
        }))])
      }
    }
  }),
  go = k(Xn, [
    ["__scopeId", "data-v-b29b5f84"]
  ]);
export {
  go as
  default
};