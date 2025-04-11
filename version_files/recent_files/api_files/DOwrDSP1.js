import {
  _ as ce,
  a as $e
} from "./JeXF02wu.js";
import {
  d as g,
  az as te,
  aA as ne,
  aB as oe,
  y as N,
  j as S,
  V as ue,
  o as i,
  c as p,
  e as s,
  M as y,
  E as x,
  b as _,
  D as T,
  m as ee,
  t as E,
  a as b,
  aC as j,
  C as c,
  al as _e,
  F as M,
  aa as W,
  aD as de,
  a7 as K,
  _ as q,
  f as h,
  a3 as me,
  ar as Se,
  X as se,
  aE as Ce,
  aF as Ae,
  x as ae,
  ab as L,
  a8 as J,
  H as Ee,
  aG as pe,
  n as X,
  h as z,
  ax as be,
  k as Te,
  aH as xe,
  Y as Ie,
  p as ye,
  aI as G,
  aJ as fe,
  a6 as F,
  q as Z,
  aK as Q,
  a5 as le,
  O as Ne,
  aL as Be,
  P as Pe,
  aM as ve,
  aN as Y,
  aO as Re,
  Q as Me,
  aq as re,
  W as R,
  an as ge,
  aP as Le,
  aQ as ze,
  aR as Oe,
  aS as Ke,
  a2 as Ve,
  aw as De,
  aT as P,
  aU as Fe,
  U as je,
  ak as Ue,
  G as He,
  Z as Ge,
  aV as Ye,
  aW as We
} from "./C6ycOBuK.js";
import {
  _ as ke
} from "./D79Ut7WK.js";
import {
  _ as U
} from "./CX4xpWp4.js";
import {
  _ as qe
} from "./DjfitRWv.js";
import {
  _ as Je
} from "./dgrI4AI7.js";
import {
  _ as ie,
  a as he,
  b as Xe
} from "./DjiVnAtJ.js";
import {
  _ as Ze
} from "./DAu9xLpZ.js";
import {
  _ as Qe
} from "./QhHDNGK_.js";
import {
  _ as et
} from "./Bay6_qds.js";
import {
  _ as tt
} from "./CtwCr5D2.js";
import {
  _ as we
} from "./4L00kC5L.js";
import "./D4l7HQlD.js";
import "./Ce3hjnU9.js";
import "./lYovtXhb.js";
import "./DlyUQxzj.js";
import "./BcWuMC2o.js";
import "./pSTeQkbo.js";
import "./DipKZfX-.js";
import "./Br_Joraq.js";
const nt = {
    key: 0,
    class: "notification"
  },
  ot = g({
    __name: "BannerStaySecureNotification",
    setup(d) {
      const e = te(),
        {
          sendEmailAuthProviderVerification: n
        } = ne(),
        {
          hasClosedStaySecureNotification: a,
          markStaySecureNotificationAsClosed: t
        } = oe(),
        o = N(!0),
        r = N(!1),
        l = S(() => {
          var w;
          return ((w = e.value) == null ? void 0 : w.emailMasked) ?? ""
        }),
        u = S(() => {
          var w;
          return ((w = e.value) == null ? void 0 : w.hasEmail) ?? !1
        }),
        m = S(() => {
          var w;
          return ((w = e.value) == null ? void 0 : w.isEmailVerified) ?? !1
        }),
        k = S(() => o.value && u.value && !m.value && !a() && !r.value),
        C = () => {
          o.value = !1, t()
        },
        f = async w => {
          const B = await n({
            captchaToken: w
          });
          if (!W(B)) {
            if (B.code === de.Forbidden) {
              r.value = !0;
              return
            }
            K().error();
            return
          }
          C(), K().success(c("secure_options.message.email_code_sent"))
        }, $ = async w => {
          await f(w), r.value = !1
        }, I = () => {
          r.value = !1
        };
      return (w, B) => {
        const v = ce,
          A = ue("I18nT"),
          V = q;
        return i(), p(M, null, [s(r) ? (i(), y(v, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: $,
          onReject: I
        })) : x("", !0), _(_e, {
          name: "opacity-spring-transition"
        }, {
          default: T(() => [s(k) ? (i(), p("div", nt, [_(A, {
            tag: "span",
            keypath: "secure_options.notification.email_not_verified"
          }, {
            email: T(() => [ee(E(s(l)), 1)]),
            resend: T(() => [b("a", {
              href: "#",
              onClick: B[0] || (B[0] = j(D => f(), ["prevent"]))
            }, E(("t" in w ? w.t : s(c))("secure_options.notification.email_not_verified_resend")), 1)]),
            _: 1
          }), b("button", {
            type: "button",
            class: "close reset",
            onClick: C
          }, [_(V, {
            name: "close-micro"
          })])])) : x("", !0)]),
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
    setup(d) {
      const e = d,
        n = () => Ce(Ae.MAIN).runConnectionFlow(),
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
          throw e.wallet, me("Invalid wallet status")
        });
      return (t, o) => {
        const r = U,
          l = ae;
        return i(), p("div", at, [s(a).type === "skeleton" ? (i(), y(r, {
          key: 0,
          class: "skeleton"
        })) : s(a).type === "connected" ? (i(), p("div", it, [b("div", lt, E(("t" in t ? t.t : s(c))("wallet.total_balance")), 1), (i(), y(Se(s(a).balance), {
          class: "balance"
        }))])) : s(a).type === "connect" ? (i(), y(l, {
          key: 2,
          label: ("t" in t ? t.t : s(c))("wallet.connect.btn"),
          size: s(se).SMALL,
          onClick: o[0] || (o[0] = u => n())
        }, null, 8, ["label", "size"])) : x("", !0)])
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
    setup(d) {
      const e = L().resolve({
          name: "tribe-join"
        }).fullPath,
        n = L().resolve({
          name: "tribe-slug"
        }).fullPath,
        a = t => J().main.tribeLogoClick(t);
      return (t, o) => {
        const r = U,
          l = Ee,
          u = q,
          m = qe;
        return i(), p("div", ut, [t.myTribe ? (i(), p(M, {
          key: 1
        }, [t.myTribe.type === "validating" ? (i(), y(l, {
          key: 0,
          to: s(e),
          class: "validating hex-center",
          onClick: o[0] || (o[0] = k => a(t.myTribe.type))
        }, {
          default: T(() => o[4] || (o[4] = [b("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (i(), y(l, {
          key: 1,
          to: s(e),
          class: "join hex-center",
          onClick: o[1] || (o[1] = k => a(t.myTribe.type))
        }, {
          default: T(() => [_(u, {
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
          default: T(() => [_(u, {
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
          default: T(() => [_(m, {
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
  dt = h(_t, [
    ["__scopeId", "data-v-ef3e1f1f"]
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
    setup(d) {
      pe(n => ({
        bc7bb12e: n.height,
        "0b714ec0": n.borderRadius,
        "4280b9dc": n.iconSize
      }));
      const e = S(() => ({
        field: !0,
        "field--disabled": d.disabled
      }));
      return (n, a) => {
        const t = q;
        return i(), p("div", {
          class: X(s(e))
        }, [_(t, {
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
    setup(d) {
      const {
        sendEmailAuthProviderVerification: e
      } = ne(), n = N(!1), a = async r => {
        const l = await e({
          captchaToken: r
        });
        if (!W(l)) {
          if (l.code === de.Forbidden) {
            n.value = !0;
            return
          }
          K().error();
          return
        }
        K().success(c("secure_options.message.email_code_sent"))
      }, t = async r => {
        await a(r), n.value = !1
      }, o = () => {
        n.value = !1
      };
      return (r, l) => {
        const u = ce,
          m = ue("I18nT");
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
            onClick: l[0] || (l[0] = j(k => a(), ["prevent"]))
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
    setup(d, {
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
                K().error();
                return
              }
              t("confirm:disconnect"), await a()
            }
          }];
        z().$webApp.popup(r, l, u)
      };
      return (r, l) => (i(), p("a", {
        href: "#",
        class: "disconnect",
        onClick: j(o, ["prevent"])
      }, E(("t" in r ? r.t : s(c))("secure_options.profile_modal.disconnect_email.btn")), 1))
    }
  }),
  kt = h(gt, [
    ["__scopeId", "data-v-d5808e4e"]
  ]),
  ht = g({
    __name: "BannerProfileModalFooter",
    emits: ["click:connect-account", "confirm:disconnect"],
    setup(d, {
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
          C = kt,
          f = ae;
        return s(t) ? (i(), p(M, {
          key: 0
        }, [_(m, {
          icon: "email",
          label: ("t" in l ? l.t : s(c))("secure_options.profile_modal.connect_email.label"),
          value: s(r),
          disabled: !s(o)
        }, null, 8, ["label", "value", "disabled"]), s(o) ? x("", !0) : (i(), p(M, {
          key: 0
        }, [_(k), _(C, {
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
  wt = g({
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
      const e = be(d, "modelValue"),
        {
          getters: n
        } = Te(),
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
        const C = ke,
          f = ht,
          $ = Je,
          I = Ie,
          w = $e;
        return i(), p(M, null, [_(I, {
          modelValue: e.value,
          "onUpdate:modelValue": k[0] || (k[0] = B => e.value = B)
        }, {
          default: T(() => [_($, null, xe({
            header: T(() => [_(C, {
              size: "96px",
              class: "avatar"
            })]),
            title: T(() => [ee(E(s(o)), 1)]),
            footer: T(() => [_(f, {
              "onClick:connectAccount": l,
              "onConfirm:disconnect": u
            })]),
            _: 2
          }, [s(r) ? void 0 : {
            name: "subTitle",
            fn: T(() => [ee(E(("t" in m ? m.t : s(c))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
            key: "0"
          }]), 1024)]),
          _: 1
        }, 8, ["modelValue"]), _(w)], 64)
      }
    }
  }),
  $t = h(wt, [
    ["__scopeId", "data-v-657ce5c0"]
  ]),
  St = {
    class: "pages-index-banner-profile-tribe"
  },
  Ct = g({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(d) {
      const {
        isStaySecureFeatureEnabled: e
      } = oe(), n = N(!1), a = () => {
        e.value && (n.value = !0)
      };
      return (t, o) => {
        const r = ke,
          l = ct,
          u = dt,
          m = $t;
        return i(), p("div", St, [_(r, {
          small: "",
          onClick: a
        }), _(l, {
          wallet: t.wallet
        }, null, 8, ["wallet"]), _(u, {
          "my-tribe": t.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"]), _(m, {
          modelValue: s(n),
          "onUpdate:modelValue": o[0] || (o[0] = k => ye(n) ? n.value = k : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  At = h(Ct, [
    ["__scopeId", "data-v-67447d49"]
  ]),
  Et = {
    class: "pages-index-banner-controls"
  },
  Tt = ["onClick"],
  xt = {
    class: "image-container"
  },
  It = {
    class: "title"
  },
  Nt = g({
    __name: "BannerControls",
    setup(d) {
      const e = S(() => [{
        title: c("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => L().push({
          name: "memepad-new",
          query: {
            memepadFrom: G.MAIN,
            memepadNewFrom: fe.MAIN
          }
        })
      }, {
        title: c("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => L().push({
          name: "memepad",
          query: {
            memepadFrom: G.MAIN
          }
        })
      }, {
        title: c("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          J().main.controlsTradingBotClick(), F().openTradingBot()
        }
      }]);
      return (n, a) => {
        const t = ie;
        return i(), p("div", Et, [(i(!0), p(M, null, Z(s(e), (o, r) => (i(), p("button", {
          key: r,
          class: "control reset",
          onClick: l => o.onClick()
        }, [b("div", xt, [_(t, {
          name: o.image,
          class: "image"
        }, null, 8, ["name"])]), b("div", It, E(o.title), 1)], 8, Tt))), 128))])
      }
    }
  }),
  Bt = h(Nt, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  Pt = {
    class: "pages-index-banner"
  },
  Rt = g({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(d) {
      return (e, n) => {
        const a = st,
          t = At,
          o = Bt;
        return i(), p("div", Pt, [_(a), _(t, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), _(o, {
          class: "controls"
        })])
      }
    }
  }),
  Mt = h(Rt, [
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
  Kt = {
    class: "title"
  },
  Vt = {
    key: 0,
    class: "subtitle"
  },
  Dt = g({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(d) {
      const e = d,
        n = K(),
        a = (o, r) => async () => {
          const l = await e.dailyRewardClaim();
          Re(l, {
            Err: () => n.error(c("base.claim_error")),
            Ok: u => {
              o === Q.RESTORE && n.success(c("daily_reward.streak_restored", {
                days: r
              })), n.success(`You’ve got ${Me(u.claimedReward.points)} BP`), n.success(re("span", ["You’ve got ", re("i", {
                class: "ticket"
              }), ` ${u.claimedReward.passes}`])), F().makeConfetti(), J().main.dailyRewardClick({
                points: u.claimedReward.points.toNumber(),
                passes: u.claimedReward.passes
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
            const k = Pe(e.dailyReward.canClaimAt - m, "letters");
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
        const l = U,
          u = ie,
          m = Ze;
        return i(), p("div", Lt, [s(t) ? (i(), p("div", zt, [_(u, {
          name: s(t).icon,
          class: "icon"
        }, null, 8, ["name"]), b("div", Ot, [b("div", Kt, E(s(t).title), 1), ("isOk" in o ? o.isOk : s(W))(s(t).subtitle) ? (i(), p("div", Vt, E(s(t).subtitle.data), 1)) : (i(), y(l, {
          key: 1,
          type: s(ve).SECONDARY,
          class: "skeleton subtitle"
        }, null, 8, ["type"]))]), s(t).claim ? (i(), y(m, {
          key: 0,
          label: s(t).claim.label,
          "can-claim": s(t).claim.can,
          "claim-fn": s(t).claim.fn,
          style: Y(s(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : x("", !0)])) : (i(), y(l, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  Ft = h(Dt, [
    ["__scopeId", "data-v-c4174779"]
  ]),
  jt = ["src"],
  Ut = ["src"],
  Ht = {
    class: "content"
  },
  Gt = {
    class: "inner"
  },
  Yt = ["innerHTML"],
  Wt = {
    class: "icon-wrapper"
  },
  qt = ["src"],
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
    setup(d) {
      return (e, n) => {
        const a = he,
          t = q,
          o = ge;
        return i(), p("div", {
          class: X(["pages-index-new-season-banner-card", `size-${e.textSize}`])
        }, [b("img", {
          src: ("imgResolver" in e ? e.imgResolver : s(R))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, jt), n[0] || (n[0] = b("div", {
          class: "bg"
        }, null, -1)), b("img", {
          src: ("imgResolver" in e ? e.imgResolver : s(R))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, Ut), b("div", Ht, [b("div", Gt, [b("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Yt), e.hideButton ? x("", !0) : (i(), y(a, {
          key: 0,
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"]))]), b("div", Wt, [e.icon ? (i(), y(t, {
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
        }, null, 8, ["name", "size"])) : e.gif ? (i(), p("img", {
          key: 2,
          src: e.gif,
          style: Y({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 12, qt)) : x("", !0)])])], 2)
      }
    }
  }),
  Xt = h(Jt, [
    ["__scopeId", "data-v-290b4af0"]
  ]),
  Zt = {
    class: "kit-stories-src-counter"
  },
  Qt = g({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(d) {
      pe(a => ({
        "9db269f8": a.count
      }));
      const e = d,
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
      return (a, t) => (i(), p("div", Zt, [(i(!0), p(M, null, Z(s(n), o => (i(), p("div", {
        key: o.key,
        class: X(["progress", [`is-state-${o.state}`]]),
        style: Y(o.state === "current" ? {
          "background-position-x": `-${o.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  en = h(Qt, [
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
    setup(d) {
      return (e, n) => {
        const a = et;
        return i(), p("div", tn, [e.background.type === "video" ? (i(), p("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, nn)) : e.background.type === "image" ? (i(), p("img", {
          key: 1,
          src: e.background.src
        }, null, 8, on)) : e.background.type === "stars" ? (i(), y(a, {
          key: 2,
          class: "stars"
        })) : x("", !0)])
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
    setup(d) {
      return (e, n) => (i(), p("div", ln, [b("div", rn, E(e.layout.title), 1), b("div", cn, E(e.layout.subtitle), 1)]))
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
    setup(d) {
      return (e, n) => {
        const a = ge;
        return i(), p("div", dn, [b("div", mn, [_(a, {
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
    setup(d, {
      emit: e
    }) {
      const n = d,
        a = e,
        t = S(() => n.button.type === "next" ? n.isLast ? c("base.close") : c("base.next") : n.button.label),
        o = () => {
          if (n.button.type === "next") z().$webApp.HapticFeedback.impactOccurred("light"), a("next");
          else if (n.button.type === "local") L().push(n.button.link);
          else if (n.button.type === "external") z().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") z().$webApp.openTelegramLink(n.button.link);
          else throw n.button, me("Unknown button type")
        };
      return (r, l) => {
        const u = ae;
        return i(), y(u, {
          label: s(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: s(se).LARGE,
          onClick: l[0] || (l[0] = j(m => o(), ["stop"]))
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
  wn = {
    class: "content"
  },
  $n = {
    class: "layout"
  },
  Sn = {
    class: "button"
  },
  Cn = g({
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
        const a = an,
          t = _n,
          o = vn,
          r = kn;
        return i(), p("div", hn, [_(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), b("div", wn, [b("div", $n, [e.story.layout.type === "TitleSubtitle" ? (i(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), y(o, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : x("", !0)]), b("div", Sn, [e.story.button ? (i(), y(r, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = l => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : x("", !0)])])])
      }
    }
  }),
  An = h(Cn, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  En = (d, e) => {
    const n = d,
      a = N(d),
      t = S(() => 1 - a.value / n);
    let o = 0,
      r;
    const l = () => {
        o = Date.now(), r = ze(() => {
          const C = Date.now(),
            f = C - o;
          o = C, a.value = Math.max(a.value - f, 0), a.value <= 0 && (u(), e())
        }, 100)
      },
      u = () => {
        r && (clearInterval(r), r = void 0)
      },
      m = () => {
        if (r) {
          u();
          const C = Date.now() - o;
          a.value = Math.max(a.value - C, 0)
        }
      },
      k = () => l();
    return l(), {
      timeToExpire: Le(a),
      progress: t,
      destroy: u,
      pause: m,
      resume: k
    }
  },
  Tn = 150,
  xn = g({
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
        t = N(0),
        o = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, m()) : a("close")
        },
        r = () => {
          t.value > 0 ? (t.value -= 1, m()) : a("close")
        },
        l = () => En(5e3, o),
        u = Oe(l()),
        m = () => {
          u.value.destroy(), u.value = l()
        },
        k = N(),
        C = Ke(),
        f = N(!1),
        $ = N(!1),
        I = () => {
          f.value = !1, $.value = !1, C.set(() => {
            u.value.pause(), f.value = !0, $.value = !0
          }, Tn)
        },
        w = () => {
          C.destroy(), f.value && (u.value.resume(), f.value = !1)
        },
        B = v => {
          if (f.value || $.value || !k.value) return;
          const {
            width: A,
            left: V
          } = k.value.getBoundingClientRect(), D = v.clientX - V, H = A / 3;
          D < H ? r() : D > H * 2 && o()
        };
      return Ve(() => {
        C.destroy(), u.value.destroy()
      }), (v, A) => {
        const V = en,
          D = An,
          H = tt;
        return i(), y(H, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: T(() => [b("div", {
            ref_key: "storiesRef",
            ref: k,
            class: "kit-stories-src-stories",
            onPointerdown: A[1] || (A[1] = j(O => I(), ["prevent"])),
            onPointerup: A[2] || (A[2] = O => w()),
            onPointercancel: A[3] || (A[3] = O => w()),
            onPointerleave: A[4] || (A[4] = O => w()),
            onClick: A[5] || (A[5] = O => B(O))
          }, [_(V, {
            current: s(t),
            "current-progress": s(u).progress.value,
            count: v.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (i(), y(D, {
            key: s(t),
            story: v.stories[s(t)],
            "is-last": s(t) === v.stories.length - 1,
            onNext: A[0] || (A[0] = O => o())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  In = h(xn, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  Nn = g({
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
    setup(d) {
      const e = be(d, "modelValue");
      return (n, a) => {
        const t = In;
        return i(), y(_e, {
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
  Bn = h(Nn, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  Pn = {
    class: "pages-index-new-season-banner"
  },
  Rn = {
    class: "progress"
  },
  Mn = g({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(d) {
      const e = d,
        n = L(),
        a = F(),
        t = J(),
        o = z().$webApp,
        r = [{
          title: c("index.banners.dogs_campaign.title"),
          buttonLabel: c("index.banners.dogs_campaign.button_label"),
          onButtonClick: () => {
            o.openLink("https://www.blum.io/post/blum-dogs")
          },
          gif: R("index/banner/dogs-campaign", "gif"),
          imageSize: 98,
          textSize: "sm",
          analyticsName: P.DOGS_CAMPAIGN
        }, {
          title: c("index.banners.hash_cash.title"),
          buttonLabel: c("index.banners.hash_cash.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-jetton-shortname",
              params: {
                shortname: "HASHCASH_2sb56"
              },
              query: {
                from: Fe.MAIN_PAGE_BANNER_HASHCASH
              }
            })
          },
          gif: R("index/banner/hashcash", "gif"),
          imageSize: 102,
          analyticsName: P.HASH_CASH
        }, {
          title: c("index.banners.trade_now.title"),
          buttonLabel: c("index.banners.trade_now.button_label"),
          onButtonClick: () => {
            a.openTradingBot()
          },
          icon: "ton-logo",
          imageSize: 64,
          analyticsName: P.TRADE_NOW
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
          analyticsName: P.EARN_NOW
        }, {
          title: c("index.banners.season_2.title"),
          buttonLabel: c("index.banners.season_2.button_label"),
          onButtonClick: () => {
            l.value = !0
          },
          lottie: "animations/Moon",
          imageSize: 96,
          analyticsName: P.SEASON_2
        }, {
          title: c("index.banners.blum_x.title"),
          buttonLabel: c("index.banners.blum_x.button_label"),
          onButtonClick: () => {
            F().openBlumTwitter()
          },
          gif: R("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: P.BLUM_X
        }, {
          title: c("index.banners.blum_academy.title"),
          buttonLabel: c("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            o.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: R("index/banner/edu", "gif"),
          imageSize: 102,
          analyticsName: P.BLUM_ACADEMY
        }, {
          title: c("index.banners.create_memecoin.title"),
          buttonLabel: c("index.banners.create_memecoin.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-new",
              query: {
                memepadFrom: G.MAIN_PAGE_BANNER_CREATE_MEMECOIN,
                memepadNewFrom: fe.MAIN_PAGE_BANNER_CREATE_MEMECOIN
              }
            })
          },
          gif: R("index/banner/memecoin", "gif"),
          imageSize: 118,
          analyticsName: P.CREATE_MEMECOIN
        }, {
          title: c("index.banners.friends.title"),
          buttonLabel: c("index.banners.friends.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens"
            })
          },
          gif: R("index/banner/comission", "gif"),
          imageSize: 100,
          analyticsName: P.FRIENDS
        }, {
          title: c("index.banners.trade_memecoins.title"),
          buttonLabel: c("index.banners.trade_memecoins.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad",
              query: {
                memepadFrom: G.MAIN_PAGE_BANNER_TRADE_MEMECOIN
              }
            })
          },
          gif: R("index/banner/riskreward", "gif"),
          imageSize: 102,
          analyticsName: P.TRADE_MEMECOIN
        }, {
          title: c("index.banners.leaderboard.title"),
          buttonLabel: c("index.banners.leaderboard.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens-leaderboards"
            })
          },
          gif: R("index/banner/leaderboard", "gif"),
          imageSize: 102,
          analyticsName: P.LEADERBOARDS
        }].map((f, $) => ({
          ...f,
          onButtonClick: () => {
            t.main.bannerClick({
              position: $ + 1,
              bannerName: f.analyticsName
            }), f.onButtonClick()
          }
        })),
        l = N(e.value.showOnStart);
      je(l, f => f && e.value.onShowed(), {
        immediate: !0
      });
      const u = N(0),
        m = N(null),
        k = (f, $ = "smooth") => {
          var I;
          (I = m.value) == null || I.scrollTo({
            left: f * window.innerWidth + (u.value > f ? -1 : 1),
            behavior: $
          })
        },
        C = He(() => {
          if (!m.value) return;
          const f = m.value.children[0].offsetWidth + 10,
            $ = m.value.scrollLeft,
            I = Math.round($ / f);
          u.value = I
        }, 50).debouncedFunction;
      return Ue(() => {
        k(u.value, "instant")
      }), (f, $) => {
        const I = Xt,
          w = Qe,
          B = Bn;
        return i(), p("div", Pn, [b("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: $[0] || ($[0] = (...v) => s(C) && s(C)(...v)),
          onTouchmove: $[1] || ($[1] = (...v) => s(C) && s(C)(...v))
        }, [(i(!0), p(M, null, Z(s(r), (v, A) => (i(), p("div", {
          key: v.title,
          class: "item"
        }, [_(I, {
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
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name", "hide-button", "text-size"])]))), 128))], 544), b("div", Rn, [s(r).length > 1 ? (i(), y(w, {
          key: 0,
          "model-value": s(u),
          count: s(r).length,
          timer: 15e3,
          "onUpdate:modelValue": k
        }, null, 8, ["model-value", "count"])) : x("", !0)]), _(B, {
          modelValue: s(l),
          "onUpdate:modelValue": $[2] || ($[2] = v => ye(l) ? l.value = v : null),
          set: f.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Ln = h(Mn, [
    ["__scopeId", "data-v-fc662ad9"]
  ]),
  zn = {
    class: "pages-wallet-asset-skeleton"
  },
  On = {
    class: "content"
  },
  Kn = g({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(d) {
      return (e, n) => {
        const a = U;
        return i(), p("div", zn, [(i(!0), p(M, null, Z(e.count, t => (i(), p("div", {
          key: t,
          class: "skeleton"
        }, [_(a, {
          rounded: "",
          class: "logo"
        }), b("div", On, [_(a, {
          class: "title"
        }), _(a, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  Vn = h(Kn, [
    ["__scopeId", "data-v-26805825"]
  ]),
  Dn = {
    class: "pages-index-points"
  },
  Fn = g({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(d) {
      const e = S(() => L().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (n, a) => {
        const t = we,
          o = Vn,
          r = Xe;
        return i(), p("div", Dn, [_(t, {
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
  Un = {
    key: 0,
    class: "skeleton"
  },
  Hn = {
    key: 1,
    class: "default"
  },
  Gn = {
    class: "content"
  },
  Yn = {
    class: "title"
  },
  Wn = {
    class: "balance"
  },
  qn = g({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(d) {
      const e = d,
        n = S(() => {
          const t = (() => {
            const o = F().internal;
            return o.isPokrasTheme.value ? {
              image: "pokras/drop-game-token",
              mode: "base"
            } : o.isHalloweenTheme.value ? {
              image: "halloween/drop-game-token",
              mode: "base"
            } : o.isTsubasaTheme.value ? {
              image: "tsubasa/drop-game-token",
              mode: "base"
            } : o.isNewYearTheme.value ? {
              image: "new-year/drop-game-token",
              mode: "new-year"
            } : o.isValentineTheme.value ? {
              image: "valentine/drop-game-token",
              mode: "valentine"
            } : o.isTGETheme.value ? {
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
        a = () => L().push({
          name: "game"
        });
      return (t, o) => {
        const r = we,
          l = ie,
          u = U,
          m = he;
        return i(), p("div", {
          class: X(["pages-index-game", `is-mode-${s(n).mode}`])
        }, [_(r, {
          label: ("t" in t ? t.t : s(c))("base.game")
        }, null, 8, ["label"]), s(n).type === "skeleton" ? (i(), p("div", Un, [_(l, {
          name: s(n).image,
          class: "icon"
        }, null, 8, ["name"]), _(u, {
          type: s(ve).SECONDARY,
          class: "skeleton-title"
        }, null, 8, ["type"]), _(m, {
          label: ("t" in t ? t.t : s(c))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (i(), p("div", Hn, [_(l, {
          name: s(n).image,
          class: "icon"
        }, null, 8, ["name"]), b("div", Gn, [b("div", Yn, E(("t" in t ? t.t : s(c))("game.card.title")), 1), b("div", Wn, E(s(n).pp) + " Play passes", 1)]), _(m, {
          label: ("t" in t ? t.t : s(c))("base.play"),
          state: "default",
          type: "white",
          class: "pill",
          disabled: s(n).disabled,
          onClick: o[0] || (o[0] = k => a())
        }, null, 8, ["label", "disabled"])]))], 2)
      }
    }
  }),
  Jn = h(qn, [
    ["__scopeId", "data-v-86df2fc1"]
  ]),
  Xn = () => {
    const d = Ge(),
      e = Ye(),
      n = We(),
      a = S(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      o = {
        set: Zn(),
        showOnStart: !z().$webApp.storage.local.get(t),
        onShowed: () => {
          z().$webApp.storage.local.set(t, "true")
        }
      },
      r = S(() => {
        const u = d.pointSymbols.value,
          m = d.dropSymbols.value;
        if (!(!u || !m) && !(!u.mp || !u.bp)) return [u.mp, u.bp, ...m]
      }),
      l = S(() => d.pointSymbols.value.pp);
    return {
      dailyReward: n,
      myTribe: a,
      season2Stories: o,
      wallet: S(() => d.wallet.value),
      pp: l,
      walletAssets: r
    }
  },
  Zn = () => ({
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
  Qn = {
    class: "index-page page"
  },
  eo = g({
    __name: "index",
    setup(d) {
      const e = Xn();
      return (n, a) => {
        const t = Mt,
          o = Ft,
          r = Ln,
          l = jn,
          u = Jn;
        return i(), p("div", Qn, [_(t, {
          "my-tribe": s(e).myTribe.value,
          wallet: s(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), _(o, {
          "daily-reward": s(e).dailyReward.reward.value,
          "daily-reward-claim": s(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), _(r, {
          value: s(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), _(l, {
          points: s(e).walletAssets.value
        }, null, 8, ["points"]), _(u, {
          pp: s(e).pp.value
        }, null, 8, ["pp"])])
      }
    }
  }),
  wo = h(eo, [
    ["__scopeId", "data-v-97e08456"]
  ]);
export {
  wo as
  default
};