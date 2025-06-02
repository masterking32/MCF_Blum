import {
  _ as de,
  a as $e
} from "./BlKt0z8g.js";
import {
  d as A,
  ar as se,
  as as oe,
  at as ae,
  J as B,
  j as E,
  a7 as ie,
  o as l,
  c as p,
  e as o,
  z as f,
  G as x,
  b as m,
  D as $,
  m as Y,
  t as C,
  a as b,
  au as z,
  A as c,
  av as me,
  F as L,
  an as F,
  aw as pe,
  al as D,
  _ as H,
  f as S,
  ah as be,
  ax as Ee,
  a9 as J,
  ay as Te,
  az as Ce,
  x as X,
  ad as P,
  a5 as Q,
  U as Ne,
  aA as fe,
  n as le,
  h as O,
  C as ye,
  k as Be,
  aB as xe,
  aa as ve,
  p as re,
  aC as ne,
  aD as ge,
  ak as W,
  q as Z,
  aE as te,
  aj as ce,
  $ as Re,
  aF as Ie,
  a0 as Me,
  aG as Pe,
  aH as q,
  aI as Le,
  a1 as Oe,
  a8 as I,
  aJ as ke,
  aK as De,
  aL as Ue,
  aM as ze,
  aN as Ve,
  ag as Ke,
  a4 as Fe,
  aO as R,
  aP as G,
  T as je,
  K as Ge,
  L as he,
  O as Ye,
  ai as ue,
  aQ as _e,
  ab as We,
  aR as qe,
  aS as He
} from "./CTMy7kFf.js";
import {
  _ as Ae
} from "./CcJveUXh.js";
import {
  _ as ee
} from "./B61P6QRF.js";
import {
  _ as Je
} from "./CY-1SgiA.js";
import {
  _ as Se
} from "./BpYvSkRJ.js";
import {
  _ as we,
  a as Xe,
  b as Qe
} from "./D5S7C9f8.js";
import {
  _ as Ze
} from "./DG_5MZdi.js";
import {
  _ as et
} from "./D2DMA8A5.js";
import {
  _ as tt
} from "./CLFR7Fhn.js";
import {
  _ as nt
} from "./Cw2ZiYeC.js";
import {
  _ as st
} from "./BXmSgBiM.js";
import "./CUGKEGaF.js";
import "./DTcWo-18.js";
import "./B91Fr_j1.js";
import "./CE9IcG_c.js";
import "./rkMPStGi.js";
import "./sXOVLj76.js";
import "./DCOpuAW3.js";
const ot = {
    key: 0,
    class: "notification"
  },
  at = A({
    __name: "BannerStaySecureNotification",
    setup(_) {
      const e = se(),
        {
          sendEmailAuthProviderVerification: n
        } = oe(),
        {
          hasClosedStaySecureNotification: a,
          markStaySecureNotificationAsClosed: t
        } = ae(),
        s = B(!0),
        r = B(!1),
        i = E(() => {
          var w;
          return ((w = e.value) == null ? void 0 : w.emailMasked) ?? ""
        }),
        u = E(() => {
          var w;
          return ((w = e.value) == null ? void 0 : w.hasEmail) ?? !1
        }),
        d = E(() => {
          var w;
          return ((w = e.value) == null ? void 0 : w.isEmailVerified) ?? !1
        }),
        v = E(() => s.value && u.value && !d.value && !a() && !r.value),
        k = () => {
          s.value = !1, t()
        },
        y = async w => {
          const M = await n({
            captchaToken: w
          });
          if (!F(M)) {
            if (M.code === pe.Forbidden) {
              r.value = !0;
              return
            }
            D().error();
            return
          }
          k(), D().success(c("secure_options.message.email_code_sent"))
        }, g = async w => {
          await y(w), r.value = !1
        }, N = () => {
          r.value = !1
        };
      return (w, M) => {
        const h = de,
          T = ie("I18nT"),
          V = H;
        return l(), p(L, null, [o(r) ? (l(), f(h, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: g,
          onReject: N
        })) : x("", !0), m(me, {
          name: "opacity-spring-transition"
        }, {
          default: $(() => [o(v) ? (l(), p("div", ot, [m(T, {
            tag: "span",
            keypath: "secure_options.notification.email_not_verified"
          }, {
            email: $(() => [Y(C(o(i)), 1)]),
            resend: $(() => [b("a", {
              href: "#",
              onClick: M[0] || (M[0] = z(K => y(), ["prevent"]))
            }, C(("t" in w ? w.t : o(c))("secure_options.notification.email_not_verified_resend")), 1)]),
            _: 1
          }), b("button", {
            type: "button",
            class: "close reset",
            onClick: k
          }, [m(V, {
            name: "close-micro"
          })])])) : x("", !0)]),
          _: 1
        })], 64)
      }
    }
  }),
  it = S(at, [
    ["__scopeId", "data-v-d24568ac"]
  ]),
  lt = {
    class: "pages-index-banner-wallet"
  },
  rt = {
    key: 1,
    class: "connected"
  },
  ct = {
    class: "label"
  },
  ut = A({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(_) {
      const e = _,
        n = () => Te(Ce.MAIN).runConnectionFlow(),
        a = E(() => {
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
          throw e.wallet, be("Invalid wallet status")
        });
      return (t, s) => {
        const r = ee,
          i = X;
        return l(), p("div", lt, [o(a).type === "skeleton" ? (l(), f(r, {
          key: 0,
          class: "skeleton"
        })) : o(a).type === "connected" ? (l(), p("div", rt, [b("div", ct, C(("t" in t ? t.t : o(c))("wallet.total_balance")), 1), (l(), f(Ee(o(a).balance), {
          class: "balance"
        }))])) : o(a).type === "connect" ? (l(), f(i, {
          key: 2,
          label: ("t" in t ? t.t : o(c))("wallet.connect.btn"),
          size: o(J).SMALL,
          onClick: s[0] || (s[0] = u => n())
        }, null, 8, ["label", "size"])) : x("", !0)])
      }
    }
  }),
  _t = S(ut, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  dt = {
    class: "pages-tribe-external-index-page"
  },
  mt = A({
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
        a = t => Q().main.tribeLogoClick(t);
      return (t, s) => {
        const r = ee,
          i = Ne,
          u = H,
          d = Je;
        return l(), p("div", dt, [t.myTribe ? (l(), p(L, {
          key: 1
        }, [t.myTribe.type === "validating" ? (l(), f(i, {
          key: 0,
          to: o(e),
          class: "validating hex-center",
          onClick: s[0] || (s[0] = v => a(t.myTribe.type))
        }, {
          default: $(() => s[4] || (s[4] = [b("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (l(), f(i, {
          key: 1,
          to: o(e),
          class: "join hex-center",
          onClick: s[1] || (s[1] = v => a(t.myTribe.type))
        }, {
          default: $(() => [m(u, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_created" ? (l(), f(i, {
          key: 2,
          to: o(e),
          class: "error hex-center",
          onClick: s[2] || (s[2] = v => a(t.myTribe.type))
        }, {
          default: $(() => [m(u, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "ok" ? (l(), f(i, {
          key: 3,
          to: o(n),
          class: "ok",
          onClick: s[3] || (s[3] = v => a(t.myTribe.type))
        }, {
          default: $(() => [m(d, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : x("", !0)], 64)) : (l(), f(r, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  pt = S(mt, [
    ["__scopeId", "data-v-c8b8fd36"]
  ]),
  bt = {
    class: "field-label"
  },
  ft = {
    class: "field-value"
  },
  yt = A({
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
      fe(n => ({
        bc7bb12e: n.height,
        "0b714ec0": n.borderRadius,
        "4280b9dc": n.iconSize
      }));
      const e = E(() => ({
        field: !0,
        "field--disabled": _.disabled
      }));
      return (n, a) => {
        const t = H;
        return l(), p("div", {
          class: le(o(e))
        }, [m(t, {
          name: n.icon,
          class: "field-icon"
        }, null, 8, ["name"]), b("div", bt, C(n.label), 1), b("div", ft, C(n.value), 1)], 2)
      }
    }
  }),
  vt = S(yt, [
    ["__scopeId", "data-v-d2541044"]
  ]),
  gt = A({
    __name: "BannerProfileModalEmailVerify",
    setup(_) {
      const {
        sendEmailAuthProviderVerification: e
      } = oe(), n = B(!1), a = async r => {
        const i = await e({
          captchaToken: r
        });
        if (!F(i)) {
          if (i.code === pe.Forbidden) {
            n.value = !0;
            return
          }
          D().error();
          return
        }
        D().success(c("secure_options.message.email_code_sent"))
      }, t = async r => {
        await a(r), n.value = !1
      }, s = () => {
        n.value = !1
      };
      return (r, i) => {
        const u = de,
          d = ie("I18nT");
        return o(n) ? (l(), f(u, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: t,
          onReject: s
        })) : (l(), f(d, {
          key: 1,
          tag: "div",
          class: "caption",
          keypath: "secure_options.profile_modal.connect_email.not_verified_caption"
        }, {
          resend: $(() => [b("a", {
            href: "#",
            class: "link",
            onClick: i[0] || (i[0] = z(v => a(), ["prevent"]))
          }, C(("t" in r ? r.t : o(c))("secure_options.profile_modal.connect_email.not_verified_caption_resend")), 1)]),
          _: 1
        }))
      }
    }
  }),
  kt = S(gt, [
    ["__scopeId", "data-v-7dba19d1"]
  ]),
  ht = A({
    __name: "BannerProfileModalEmailDisconnect",
    emits: ["confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const {
        disconnectEmailAuthProvider: n,
        fetchAuthProviders: a
      } = oe(), t = e, s = () => {
        const r = c("secure_options.profile_modal.disconnect_email.confirm.title"),
          i = c("secure_options.profile_modal.disconnect_email.confirm.description"),
          u = [{
            type: "cancel"
          }, {
            type: "default",
            label: c("secure_options.profile_modal.disconnect_email.confirm.btn"),
            onClick: async () => {
              const d = await n();
              if (!F(d)) {
                D().error();
                return
              }
              t("confirm:disconnect"), await a()
            }
          }];
        O().$webApp.popup(r, i, u)
      };
      return (r, i) => (l(), p("a", {
        href: "#",
        class: "disconnect",
        onClick: z(s, ["prevent"])
      }, C(("t" in r ? r.t : o(c))("secure_options.profile_modal.disconnect_email.btn")), 1))
    }
  }),
  At = S(ht, [
    ["__scopeId", "data-v-91098b8b"]
  ]),
  St = A({
    __name: "BannerProfileModalFooter",
    emits: ["click:connect-account", "confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const n = e,
        a = se(),
        t = E(() => {
          var i;
          return ((i = a.value) == null ? void 0 : i.hasEmail) ?? !1
        }),
        s = E(() => {
          var i;
          return ((i = a.value) == null ? void 0 : i.isEmailVerified) ?? !1
        }),
        r = E(() => {
          var i;
          return ((i = a.value) == null ? void 0 : i.emailMasked) ?? ""
        });
      return (i, u) => {
        const d = vt,
          v = kt,
          k = At,
          y = X;
        return o(t) ? (l(), p(L, {
          key: 0
        }, [m(d, {
          icon: "email",
          label: ("t" in i ? i.t : o(c))("secure_options.profile_modal.connect_email.label"),
          value: o(r),
          disabled: !o(s)
        }, null, 8, ["label", "value", "disabled"]), o(s) ? x("", !0) : (l(), p(L, {
          key: 0
        }, [m(v), m(k, {
          "onConfirm:disconnect": u[0] || (u[0] = g => n("confirm:disconnect"))
        })], 64))], 64)) : (l(), f(y, {
          key: 1,
          label: ("t" in i ? i.t : o(c))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: o(J).LARGE,
          onClick: u[1] || (u[1] = g => n("click:connect-account"))
        }, null, 8, ["label", "size"]))
      }
    }
  }),
  wt = A({
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
      const e = ye(_, "modelValue"),
        {
          getters: n
        } = Be(),
        {
          secureOptionsModals: a
        } = ae(),
        t = se(),
        s = E(() => {
          var d;
          return ((d = n.getUser.value) == null ? void 0 : d.username) ?? "user"
        }),
        r = E(() => {
          var d;
          return ((d = t.value) == null ? void 0 : d.hasEmail) ?? !1
        }),
        i = () => {
          u(), a.main.show()
        },
        u = () => {
          e.value = !1
        };
      return (d, v) => {
        const k = Ae,
          y = St,
          g = Se,
          N = ve,
          w = $e;
        return l(), p(L, null, [m(N, {
          modelValue: e.value,
          "onUpdate:modelValue": v[0] || (v[0] = M => e.value = M)
        }, {
          default: $(() => [m(g, null, xe({
            header: $(() => [m(k, {
              size: "96px",
              class: "avatar"
            })]),
            title: $(() => [Y(C(o(s)), 1)]),
            footer: $(() => [m(y, {
              "onClick:connectAccount": i,
              "onConfirm:disconnect": u
            })]),
            _: 2
          }, [o(r) ? void 0 : {
            name: "subTitle",
            fn: $(() => [Y(C(("t" in d ? d.t : o(c))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
            key: "0"
          }]), 1024)]),
          _: 1
        }, 8, ["modelValue"]), m(w)], 64)
      }
    }
  }),
  $t = S(wt, [
    ["__scopeId", "data-v-657ce5c0"]
  ]),
  Et = {
    class: "pages-index-banner-profile-tribe"
  },
  Tt = A({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      const {
        isStaySecureFeatureEnabled: e
      } = ae(), n = B(!1), a = () => {
        e.value && (n.value = !0)
      };
      return (t, s) => {
        const r = Ae,
          i = _t,
          u = pt,
          d = $t;
        return l(), p("div", Et, [m(r, {
          small: "",
          onClick: a
        }), m(i, {
          wallet: t.wallet
        }, null, 8, ["wallet"]), m(u, {
          "my-tribe": t.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"]), m(d, {
          modelValue: o(n),
          "onUpdate:modelValue": s[0] || (s[0] = v => re(n) ? n.value = v : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  Ct = S(Tt, [
    ["__scopeId", "data-v-67447d49"]
  ]),
  Nt = {
    class: "pages-index-banner-controls"
  },
  Bt = ["onClick"],
  xt = {
    class: "image-container"
  },
  Rt = {
    class: "title"
  },
  It = A({
    __name: "BannerControls",
    setup(_) {
      const e = E(() => [{
        title: c("memepad.explore.launch.button_text"),
        image: "index/banner/controls/launch-token",
        imageType: "svg",
        onClick: () => P().push({
          name: "memepad-new",
          query: {
            memepadFrom: ne.MAIN,
            memepadNewFrom: ge.MAIN
          }
        })
      }, {
        title: c("tabs.frens"),
        image: "index/banner/controls/frens",
        imageType: "svg",
        onClick: () => P().push({
          name: "frens"
        })
      }, {
        title: c("base.trading_bot"),
        image: "index/banner/controls/trading-bot",
        imageType: "svg",
        onClick: () => {
          Q().main.controlsTradingBotClick(), W().openTradingBot()
        }
      }]);
      return (n, a) => {
        const t = we;
        return l(), p("div", Nt, [(l(!0), p(L, null, Z(o(e), (s, r) => (l(), p("button", {
          key: r,
          class: "control reset",
          onClick: i => s.onClick()
        }, [b("span", xt, [m(t, {
          name: s.image,
          type: s.imageType,
          class: "image"
        }, null, 8, ["name", "type"])]), b("span", Rt, C(s.title), 1)], 8, Bt))), 128))])
      }
    }
  }),
  Mt = S(It, [
    ["__scopeId", "data-v-1225a1c7"]
  ]),
  Pt = {
    class: "pages-index-banner"
  },
  Lt = A({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      return (e, n) => {
        const a = it,
          t = Ct,
          s = Mt;
        return l(), p("div", Pt, [m(a), m(t, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), m(s, {
          class: "controls"
        })])
      }
    }
  }),
  Ot = S(Lt, [
    ["__scopeId", "data-v-2dd935c4"]
  ]),
  Dt = {
    class: "pages-index-daily-reward"
  },
  Ut = {
    key: 1,
    class: "widget has-radius"
  },
  zt = {
    class: "compose"
  },
  Vt = {
    class: "title"
  },
  Kt = {
    key: 0,
    class: "subtitle"
  },
  Ft = A({
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
        a = (s, r) => async () => {
          const i = await e.dailyRewardClaim();
          Le(i, {
            Err: () => n.error(c("base.claim_error")),
            Ok: u => {
              s === te.RESTORE && n.success(c("daily_reward.streak_restored", {
                days: r
              })), n.success(`You’ve got ${Oe(u.claimedReward.points)} BP`), W().makeConfetti(), Q().main.dailyRewardClick({
                points: u.claimedReward.points.toNumber()
              })
            }
          })
        }, t = E(() => {
          if (e.dailyReward === void 0) return;
          const s = e.dailyReward.currentStreakDays,
            r = `${s}-${c("base.n.days",s)}`;
          if (e.dailyReward.claim === te.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: c("daily_reward.missed"),
            subtitle: ce(c("daily_reward.restore_current_streak", {
              days: r
            })),
            claim: {
              label: c("base.restore"),
              white: !0,
              can: !0,
              fn: a(e.dailyReward.claim, r)
            }
          };
          const i = (() => {
            const d = Re().ms100ticker.value;
            if (!d) return Ie();
            const v = Me(e.dailyReward.canClaimAt - d, "letters");
            return ce(c("base.claim_next_in", {
              time: v
            }))
          })();
          return {
            icon: "emoji/Lightning",
            title: c("daily_reward.current_streak", {
              days: r
            }),
            subtitle: i,
            claim: {
              can: e.dailyReward.claim !== te.UNAVAILABLE,
              fn: a(e.dailyReward.claim, r)
            }
          }
        });
      return (s, r) => {
        const i = ee,
          u = we,
          d = Ze;
        return l(), p("div", Dt, [o(t) ? (l(), p("div", Ut, [m(u, {
          name: o(t).icon,
          class: "icon"
        }, null, 8, ["name"]), b("div", zt, [b("div", Vt, C(o(t).title), 1), ("isOk" in s ? s.isOk : o(F))(o(t).subtitle) ? (l(), p("div", Kt, C(o(t).subtitle.data), 1)) : (l(), f(i, {
          key: 1,
          type: o(Pe).SECONDARY,
          class: "skeleton subtitle"
        }, null, 8, ["type"]))]), o(t).claim ? (l(), f(d, {
          key: 0,
          label: o(t).claim.label,
          "can-claim": o(t).claim.can,
          "claim-fn": o(t).claim.fn,
          style: q(o(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : x("", !0)])) : (l(), f(i, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  jt = S(Ft, [
    ["__scopeId", "data-v-616b8ac4"]
  ]),
  Gt = ["src"],
  Yt = ["src"],
  Wt = {
    class: "content"
  },
  qt = {
    class: "inner"
  },
  Ht = ["innerHTML"],
  Jt = {
    class: "icon-wrapper"
  },
  Xt = ["src"],
  Qt = A({
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
        const a = Xe,
          t = H,
          s = ke;
        return l(), p("div", {
          class: le(["pages-index-new-season-banner-card", `size-${e.textSize}`])
        }, [b("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(I))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, Gt), n[0] || (n[0] = b("div", {
          class: "bg"
        }, null, -1)), b("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(I))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, Yt), b("div", Wt, [b("div", qt, [b("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Ht), e.hideButton ? x("", !0) : (l(), f(a, {
          key: 0,
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"]))]), b("div", Jt, [e.icon ? (l(), f(t, {
          key: 0,
          name: e.icon,
          style: q({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 8, ["name", "style"])) : e.lottie ? (l(), f(s, {
          key: 1,
          name: e.lottie,
          loop: "",
          size: e.imageSize
        }, null, 8, ["name", "size"])) : e.gif ? (l(), p("img", {
          key: 2,
          src: e.gif,
          style: q({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 12, Xt)) : x("", !0)])])], 2)
      }
    }
  }),
  Zt = S(Qt, [
    ["__scopeId", "data-v-c254a548"]
  ]),
  en = {
    class: "kit-stories-src-counter"
  },
  tn = A({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(_) {
      fe(a => ({
        "9db269f8": a.count
      }));
      const e = _,
        n = E(() => [...new Array(e.count)].map((a, t) => t < e.current ? {
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
      return (a, t) => (l(), p("div", en, [(l(!0), p(L, null, Z(o(n), s => (l(), p("div", {
        key: s.key,
        class: le(["progress", [`is-state-${s.state}`]]),
        style: q(s.state === "current" ? {
          "background-position-x": `-${s.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  nn = S(tn, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  sn = {
    class: "kit-stories-shared-background"
  },
  on = ["poster", "src"],
  an = ["src"],
  ln = A({
    __name: "Background",
    props: {
      background: {}
    },
    setup(_) {
      return (e, n) => {
        const a = tt;
        return l(), p("div", sn, [e.background.type === "video" ? (l(), p("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, on)) : e.background.type === "image" ? (l(), p("img", {
          key: 1,
          src: e.background.src
        }, null, 8, an)) : e.background.type === "stars" ? (l(), f(a, {
          key: 2,
          class: "stars"
        })) : x("", !0)])
      }
    }
  }),
  rn = S(ln, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  cn = {
    class: "kit-stories-layouts-title-subtitle"
  },
  un = {
    class: "title"
  },
  _n = {
    class: "subtitle"
  },
  dn = A({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => (l(), p("div", cn, [b("div", un, C(e.layout.title), 1), b("div", _n, C(e.layout.subtitle), 1)]))
    }
  }),
  mn = S(dn, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  pn = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  bn = {
    class: "animoji-container"
  },
  fn = {
    class: "content-container"
  },
  yn = {
    class: "title"
  },
  vn = {
    class: "subtitle"
  },
  gn = A({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => {
        const a = ke;
        return l(), p("div", pn, [b("div", bn, [m(a, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), b("div", fn, [b("div", yn, C(e.layout.title), 1), b("div", vn, C(e.layout.subtitle), 1)])])
      }
    }
  }),
  kn = S(gn, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  hn = A({
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
        t = E(() => n.button.type === "next" ? n.isLast ? c("base.close") : c("base.next") : n.button.label),
        s = () => {
          if (n.button.type === "next") O().$webApp.HapticFeedback.impactOccurred("light"), a("next");
          else if (n.button.type === "local") P().push(n.button.link);
          else if (n.button.type === "external") O().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") O().$webApp.openTelegramLink(n.button.link);
          else throw n.button, be("Unknown button type")
        };
      return (r, i) => {
        const u = X;
        return l(), f(u, {
          label: o(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: o(J).LARGE,
          onClick: i[0] || (i[0] = z(d => s(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  An = S(hn, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  Sn = {
    class: "kit-stories-src-story"
  },
  wn = {
    class: "content"
  },
  $n = {
    class: "layout"
  },
  En = {
    class: "button"
  },
  Tn = A({
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
        const a = rn,
          t = mn,
          s = kn,
          r = An;
        return l(), p("div", Sn, [m(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), b("div", wn, [b("div", $n, [e.story.layout.type === "TitleSubtitle" ? (l(), f(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (l(), f(s, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : x("", !0)]), b("div", En, [e.story.button ? (l(), f(r, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = i => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : x("", !0)])])])
      }
    }
  }),
  Cn = S(Tn, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  Nn = (_, e) => {
    const n = _,
      a = B(_),
      t = E(() => 1 - a.value / n);
    let s = 0,
      r;
    const i = () => {
        s = Date.now(), r = Ue(() => {
          const k = Date.now(),
            y = k - s;
          s = k, a.value = Math.max(a.value - y, 0), a.value <= 0 && (u(), e())
        }, 100)
      },
      u = () => {
        r && (clearInterval(r), r = void 0)
      },
      d = () => {
        if (r) {
          u();
          const k = Date.now() - s;
          a.value = Math.max(a.value - k, 0)
        }
      },
      v = () => i();
    return i(), {
      timeToExpire: De(a),
      progress: t,
      destroy: u,
      pause: d,
      resume: v
    }
  },
  Bn = 150,
  xn = A({
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
        r = () => {
          t.value > 0 ? (t.value -= 1, d()) : a("close")
        },
        i = () => Nn(5e3, s),
        u = ze(i()),
        d = () => {
          u.value.destroy(), u.value = i()
        },
        v = B(),
        k = Ve(),
        y = B(!1),
        g = B(!1),
        N = () => {
          y.value = !1, g.value = !1, k.set(() => {
            u.value.pause(), y.value = !0, g.value = !0
          }, Bn)
        },
        w = () => {
          k.destroy(), y.value && (u.value.resume(), y.value = !1)
        },
        M = h => {
          if (y.value || g.value || !v.value) return;
          const {
            width: T,
            left: V
          } = v.value.getBoundingClientRect(), K = h.clientX - V, j = T / 3;
          K < j ? r() : K > j * 2 && s()
        };
      return Ke(() => {
        k.destroy(), u.value.destroy()
      }), (h, T) => {
        const V = nn,
          K = Cn,
          j = nt;
        return l(), f(j, {
          "no-padding": "",
          "no-scroll": "",
          "z-index": 6
        }, {
          default: $(() => [b("div", {
            ref_key: "storiesRef",
            ref: v,
            class: "kit-stories-src-stories",
            onPointerdown: T[1] || (T[1] = z(U => N(), ["prevent"])),
            onPointerup: T[2] || (T[2] = U => w()),
            onPointercancel: T[3] || (T[3] = U => w()),
            onPointerleave: T[4] || (T[4] = U => w()),
            onClick: T[5] || (T[5] = U => M(U))
          }, [m(V, {
            current: o(t),
            "current-progress": o(u).progress.value,
            count: h.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (l(), f(K, {
            key: o(t),
            story: h.stories[o(t)],
            "is-last": o(t) === h.stories.length - 1,
            onNext: T[0] || (T[0] = U => s())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  Rn = S(xn, [
    ["__scopeId", "data-v-6cd33e1f"]
  ]),
  In = A({
    __name: "Stories",
    props: Fe({
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
      const e = ye(_, "modelValue");
      return (n, a) => {
        const t = Rn;
        return l(), f(me, {
          name: "opacity-transition"
        }, {
          default: $(() => [e.value ? (l(), f(t, {
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
  Mn = S(In, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  Pn = {
    class: "pages-index-new-season-banner"
  },
  Ln = {
    class: "progress"
  },
  On = A({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(_) {
      const e = _,
        n = P(),
        a = W(),
        t = Q(),
        s = O().$webApp,
        r = [{
          title: c("index.banners.tge.title"),
          buttonLabel: c("index.banners.tge.button_label"),
          onButtonClick: () => {
            P().push({
              name: "tge"
            })
          },
          gif: I("index/banner/tge", "gif"),
          imageSize: 105,
          analyticsName: R.TGE
        }, {
          title: c("index.banners.bman.title"),
          buttonLabel: c("index.banners.bman.button_label"),
          onButtonClick: () => {
            P().push({
              name: "memepad-jetton-shortname",
              params: {
                shortname: "BMAN_gJokF"
              },
              query: {
                memepadFrom: G.MAIN_PAGE_BANNER_BMAN_BANNER,
                from: G.MAIN_PAGE_BANNER_BMAN_BANNER
              }
            })
          },
          gif: I("index/banner/bman"),
          imageSize: 80,
          analyticsName: R.BMAN
        }, {
          title: c("index.banners.babydoge.title"),
          buttonLabel: c("index.banners.babydoge.button_label"),
          onButtonClick: () => {
            P().push({
              name: "memepad-jetton-shortname",
              params: {
                shortname: "BABYDOGE_nInMz"
              },
              query: {
                memepadFrom: G.MAIN_PAGE_BANNER_BABYDOGE_BANNER,
                from: G.MAIN_PAGE_BANNER_BABYDOGE_BANNER
              }
            })
          },
          gif: I("index/banner/babydoge", "gif"),
          imageSize: 92,
          analyticsName: R.BABYDOGE
        }, {
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
            i.value = !0
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
          gif: I("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: R.BLUM_X
        }, {
          title: c("index.banners.blum_academy.title"),
          buttonLabel: c("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            s.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: I("index/banner/edu", "gif"),
          imageSize: 102,
          analyticsName: R.BLUM_ACADEMY
        }, {
          title: c("index.banners.create_memecoin.title"),
          buttonLabel: c("index.banners.create_memecoin.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-new",
              query: {
                memepadFrom: ne.MAIN_PAGE_BANNER_CREATE_MEMECOIN,
                memepadNewFrom: ge.MAIN_PAGE_BANNER_CREATE_MEMECOIN
              }
            })
          },
          gif: I("index/banner/memecoin", "gif"),
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
          gif: I("index/banner/comission", "gif"),
          imageSize: 100,
          analyticsName: R.FRIENDS
        }, {
          title: c("index.banners.trade_memecoins.title"),
          buttonLabel: c("index.banners.trade_memecoins.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad",
              query: {
                memepadFrom: ne.MAIN_PAGE_BANNER_TRADE_MEMECOIN
              }
            })
          },
          gif: I("index/banner/riskreward", "gif"),
          imageSize: 102,
          analyticsName: R.TRADE_MEMECOIN
        }, {
          title: c("index.banners.leaderboard.title"),
          buttonLabel: c("index.banners.leaderboard.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens-leaderboards",
              query: {
                source: je.MAIN_PAGE_BANNER
              }
            })
          },
          gif: I("index/banner/leaderboard", "gif"),
          imageSize: 102,
          analyticsName: R.LEADERBOARDS
        }].map((y, g) => ({
          ...y,
          onButtonClick: () => {
            t.main.bannerClick({
              position: g + 1,
              bannerName: y.analyticsName
            }), y.onButtonClick()
          }
        })),
        i = B(e.value.showOnStart);
      Ge(i, y => y && e.value.onShowed(), {
        immediate: !0
      });
      const u = B(0),
        d = B(null),
        v = (y, g = "smooth") => {
          var N;
          (N = d.value) == null || N.scrollTo({
            left: y * window.innerWidth + (u.value > y ? -1 : 1),
            behavior: g
          })
        },
        k = Ye(() => {
          if (!d.value) return;
          const y = d.value.children[0].offsetWidth + 10,
            g = d.value.scrollLeft,
            N = Math.round(g / y);
          u.value = N
        }, 50).debouncedFunction;
      return he(() => {
        v(u.value, "instant")
      }), (y, g) => {
        const N = Zt,
          w = et,
          M = Mn;
        return l(), p("div", Pn, [b("div", {
          ref_key: "listEl",
          ref: d,
          class: "list",
          onScroll: g[0] || (g[0] = (...h) => o(k) && o(k)(...h)),
          onTouchmove: g[1] || (g[1] = (...h) => o(k) && o(k)(...h))
        }, [(l(!0), p(L, null, Z(o(r), (h, T) => (l(), p("div", {
          key: h.title,
          class: "item"
        }, [m(N, {
          index: T,
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
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name", "hide-button", "text-size"])]))), 128))], 544), b("div", Ln, [o(r).length > 1 ? (l(), f(w, {
          key: 0,
          "model-value": o(u),
          count: o(r).length,
          timer: 15e3,
          "onUpdate:modelValue": v
        }, null, 8, ["model-value", "count"])) : x("", !0)]), m(M, {
          modelValue: o(i),
          "onUpdate:modelValue": g[2] || (g[2] = h => re(i) ? i.value = h : null),
          set: y.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Dn = S(On, [
    ["__scopeId", "data-v-858c1198"]
  ]),
  Un = {
    class: "pages-wallet-asset-skeleton"
  },
  zn = {
    class: "content"
  },
  Vn = A({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(_) {
      return (e, n) => {
        const a = ee;
        return l(), p("div", Un, [(l(!0), p(L, null, Z(e.count, t => (l(), p("div", {
          key: t,
          class: "skeleton"
        }, [m(a, {
          rounded: "",
          class: "logo"
        }), b("div", zn, [m(a, {
          class: "title"
        }), m(a, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  Kn = S(Vn, [
    ["__scopeId", "data-v-26805825"]
  ]),
  Fn = {
    class: "pages-index-points"
  },
  jn = A({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(_) {
      const e = E(() => P().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (n, a) => {
        const t = st,
          s = Kn,
          r = Qe;
        return l(), p("div", Fn, [m(t, {
          label: ("t" in n ? n.t : o(c))("wallet.points.title"),
          "full-path": o(e)
        }, null, 8, ["label", "full-path"]), n.points ? (l(), f(r, {
          key: 1,
          points: n.points
        }, null, 8, ["points"])) : (l(), f(s, {
          key: 0,
          count: 2
        }))])
      }
    }
  }),
  Gn = S(jn, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  Yn = () => {
    const _ = "terms_of_use_accepted",
      e = "https://www.blum.io/post/trading-bot-terms",
      {
        $webApp: n
      } = O(),
      a = B(!1),
      t = B(!1),
      s = async () => r() ? !0 : await i() ? (d(), !0) : !1, r = () => n.storage.local.get(_) === "true", i = async () => {
        var N;
        return ((N = (await ue.getUserDocuments()).data) == null ? void 0 : N.isTosAccepted) ?? !1
      }, u = async () => {
        t.value = !0;
        const g = await v();
        if (!F(g)) {
          D().error(), a.value = !1;
          return
        }
        d(), a.value = !1
      }, d = () => {
        r() || n.storage.local.set(_, "true")
      }, v = () => ue.setDocumentStatus({
        action: _e.DOCUMENT_STATUS_ACTION.ACCEPT,
        documentNames: [_e.DOCUMENT_NAME.TOS]
      }), k = () => {
        n.openLink(e)
      }, y = async () => {
        await s() || (a.value = !0)
      };
    return he(async () => {
      await y()
    }), {
      isTermsOfUseModalVisible: a,
      isTermsOfUseSubmitDisabled: E(() => t.value),
      markTermsOfUseAsAccepted: u,
      openTermsOfUseDocument: k
    }
  },
  Wn = ["src"],
  qn = A({
    __name: "TermsOfUseModal",
    setup(_) {
      const {
        isTermsOfUseSubmitDisabled: e,
        isTermsOfUseModalVisible: n,
        markTermsOfUseAsAccepted: a,
        openTermsOfUseDocument: t
      } = Yn();
      return (s, r) => {
        const i = ie("I18nT"),
          u = X,
          d = Se,
          v = ve;
        return l(), f(v, {
          modelValue: o(n),
          "onUpdate:modelValue": r[1] || (r[1] = k => re(n) ? n.value = k : null),
          "no-header-line": ""
        }, {
          default: $(() => [m(d, null, {
            header: $(() => [b("img", {
              src: ("imgResolver" in s ? s.imgResolver : o(I))("emoji/MoneyWings"),
              alt: "",
              class: "icon"
            }, null, 8, Wn)]),
            title: $(() => [Y(C(("t" in s ? s.t : o(c))("terms_of_use_modal.title")), 1)]),
            subTitle: $(() => [m(i, {
              keypath: "terms_of_use_modal.subtitle"
            }, {
              terms: $(() => [b("a", {
                href: "#",
                class: "link",
                onClick: r[0] || (r[0] = z((...k) => o(t) && o(t)(...k), ["prevent"]))
              }, C(("t" in s ? s.t : o(c))("terms_of_use_modal.subtitle_terms")), 1)]),
              _: 1
            })]),
            footer: $(() => [m(u, {
              label: ("t" in s ? s.t : o(c))("terms_of_use_modal.btn"),
              fill: "",
              size: o(J).LARGE,
              disabled: o(e),
              onClick: o(a)
            }, null, 8, ["label", "size", "disabled", "onClick"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Hn = () => {
    const _ = We(),
      e = qe(),
      n = He(),
      a = E(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      s = {
        set: Jn(),
        showOnStart: !O().$webApp.storage.local.get(t),
        onShowed: () => {
          O().$webApp.storage.local.set(t, "true")
        }
      },
      r = E(() => {
        const i = _.pointSymbols.value,
          u = _.dropSymbols.value;
        if (!(!i || !u) && !(!i.mp || !i.bp)) return [i.mp, i.bp, ...u]
      });
    return {
      dailyReward: n,
      myTribe: a,
      season2Stories: s,
      wallet: E(() => _.wallet.value),
      walletAssets: r
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
  Xn = {
    class: "index-page page"
  },
  Qn = A({
    __name: "index",
    setup(_) {
      const e = Hn();
      return (n, a) => {
        const t = Ot,
          s = jt,
          r = Dn,
          i = Gn,
          u = qn;
        return l(), p("div", Xn, [m(t, {
          "my-tribe": o(e).myTribe.value,
          wallet: o(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), m(s, {
          "daily-reward": o(e).dailyReward.reward.value,
          "daily-reward-claim": o(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), m(r, {
          value: o(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), m(i, {
          points: o(e).walletAssets.value
        }, null, 8, ["points"]), m(u)])
      }
    }
  }),
  vs = S(Qn, [
    ["__scopeId", "data-v-e74f9fb7"]
  ]);
export {
  vs as
  default
};