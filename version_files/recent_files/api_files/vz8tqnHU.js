import {
  _ as ce,
  a as we
} from "./E_KnUz9Y.js";
import {
  d as g,
  aB as te,
  aC as ne,
  aD as oe,
  y as x,
  j as S,
  W as ue,
  o as i,
  c as p,
  e as s,
  N as y,
  G as I,
  b as _,
  D as T,
  m as ee,
  t as E,
  a as b,
  aE as j,
  C as c,
  an as _e,
  F as M,
  ab as W,
  aF as de,
  a8 as K,
  _ as q,
  f as h,
  a4 as me,
  at as Se,
  Y as se,
  aG as Ae,
  aH as Ce,
  x as ae,
  ae as L,
  a9 as X,
  I as Ee,
  aI as pe,
  n as J,
  h as z,
  az as be,
  k as Te,
  aJ as Ie,
  Z as Ne,
  p as ye,
  aK as Y,
  aL as fe,
  a7 as F,
  q as Z,
  aM as Q,
  a6 as le,
  P as xe,
  aN as Re,
  Q as Be,
  aO as ve,
  aP as G,
  aQ as Pe,
  R as Me,
  as as re,
  X as P,
  ap as ge,
  aR as Le,
  aS as ze,
  aT as Oe,
  aU as Ke,
  a3 as Ve,
  ay as De,
  aV as B,
  aW as Fe,
  E as je,
  V as Ue,
  ac as He,
  H as Ye,
  $ as Ge,
  aX as We,
  aY as qe
} from "./CkAWtTNJ.js";
import {
  _ as ke
} from "./BTfqomUn.js";
import {
  _ as U
} from "./_0AndDZn.js";
import {
  _ as Xe
} from "./CRe8_Q6-.js";
import {
  _ as Je
} from "./Bi9NYAlb.js";
import {
  _ as ie,
  a as he,
  b as Ze
} from "./TQiANypa.js";
import {
  _ as Qe
} from "./ndCSMFAv.js";
import {
  _ as et
} from "./CzZrNUIL.js";
import {
  _ as tt
} from "./CLC6Db_e.js";
import {
  _ as nt
} from "./KNwHMxPM.js";
import {
  _ as $e
} from "./D9DlxxUd.js";
import "./fX19TlgU.js";
import "./yh1FHjfU.js";
import "./_7vgCNfb.js";
import "./Bc4xGQqs.js";
import "./CTrSWWqv.js";
import "./BSze9QjK.js";
import "./hUyP7fhn.js";
import "./DjL4R5bz.js";
const ot = {
    key: 0,
    class: "notification"
  },
  st = g({
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
        o = x(!0),
        r = x(!1),
        l = S(() => {
          var $;
          return (($ = e.value) == null ? void 0 : $.emailMasked) ?? ""
        }),
        u = S(() => {
          var $;
          return (($ = e.value) == null ? void 0 : $.hasEmail) ?? !1
        }),
        m = S(() => {
          var $;
          return (($ = e.value) == null ? void 0 : $.isEmailVerified) ?? !1
        }),
        k = S(() => o.value && u.value && !m.value && !a() && !r.value),
        A = () => {
          o.value = !1, t()
        },
        f = async $ => {
          const R = await n({
            captchaToken: $
          });
          if (!W(R)) {
            if (R.code === de.Forbidden) {
              r.value = !0;
              return
            }
            K().error();
            return
          }
          A(), K().success(c("secure_options.message.email_code_sent"))
        }, w = async $ => {
          await f($), r.value = !1
        }, N = () => {
          r.value = !1
        };
      return ($, R) => {
        const v = ce,
          C = ue("I18nT"),
          V = q;
        return i(), p(M, null, [s(r) ? (i(), y(v, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: w,
          onReject: N
        })) : I("", !0), _(_e, {
          name: "opacity-spring-transition"
        }, {
          default: T(() => [s(k) ? (i(), p("div", ot, [_(C, {
            tag: "span",
            keypath: "secure_options.notification.email_not_verified"
          }, {
            email: T(() => [ee(E(s(l)), 1)]),
            resend: T(() => [b("a", {
              href: "#",
              onClick: R[0] || (R[0] = j(D => f(), ["prevent"]))
            }, E(("t" in $ ? $.t : s(c))("secure_options.notification.email_not_verified_resend")), 1)]),
            _: 1
          }), b("button", {
            type: "button",
            class: "close reset",
            onClick: A
          }, [_(V, {
            name: "close-micro"
          })])])) : I("", !0)]),
          _: 1
        })], 64)
      }
    }
  }),
  at = h(st, [
    ["__scopeId", "data-v-d24568ac"]
  ]),
  it = {
    class: "pages-index-banner-wallet"
  },
  lt = {
    key: 1,
    class: "connected"
  },
  rt = {
    class: "label"
  },
  ct = g({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(d) {
      const e = d,
        n = () => Ae(Ce.MAIN).runConnectionFlow(),
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
        return i(), p("div", it, [s(a).type === "skeleton" ? (i(), y(r, {
          key: 0,
          class: "skeleton"
        })) : s(a).type === "connected" ? (i(), p("div", lt, [b("div", rt, E(("t" in t ? t.t : s(c))("wallet.total_balance")), 1), (i(), y(Se(s(a).balance), {
          class: "balance"
        }))])) : s(a).type === "connect" ? (i(), y(l, {
          key: 2,
          label: ("t" in t ? t.t : s(c))("wallet.connect.btn"),
          size: s(se).SMALL,
          onClick: o[0] || (o[0] = u => n())
        }, null, 8, ["label", "size"])) : I("", !0)])
      }
    }
  }),
  ut = h(ct, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  _t = {
    class: "pages-tribe-external-index-page"
  },
  dt = g({
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
        a = t => X().main.tribeLogoClick(t);
      return (t, o) => {
        const r = U,
          l = Ee,
          u = q,
          m = Xe;
        return i(), p("div", _t, [t.myTribe ? (i(), p(M, {
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
        }, 8, ["to"])) : I("", !0)], 64)) : (i(), y(r, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  mt = h(dt, [
    ["__scopeId", "data-v-ef3e1f1f"]
  ]),
  pt = {
    class: "field-label"
  },
  bt = {
    class: "field-value"
  },
  yt = g({
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
          class: J(s(e))
        }, [_(t, {
          name: n.icon,
          class: "field-icon"
        }, null, 8, ["name"]), b("div", pt, E(n.label), 1), b("div", bt, E(n.value), 1)], 2)
      }
    }
  }),
  ft = h(yt, [
    ["__scopeId", "data-v-d2541044"]
  ]),
  vt = g({
    __name: "BannerProfileModalEmailVerify",
    setup(d) {
      const {
        sendEmailAuthProviderVerification: e
      } = ne(), n = x(!1), a = async r => {
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
  gt = h(vt, [
    ["__scopeId", "data-v-7dba19d1"]
  ]),
  kt = g({
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
  ht = h(kt, [
    ["__scopeId", "data-v-d5808e4e"]
  ]),
  $t = g({
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
        const m = ft,
          k = gt,
          A = ht,
          f = ae;
        return s(t) ? (i(), p(M, {
          key: 0
        }, [_(m, {
          icon: "email",
          label: ("t" in l ? l.t : s(c))("secure_options.profile_modal.connect_email.label"),
          value: s(r),
          disabled: !s(o)
        }, null, 8, ["label", "value", "disabled"]), s(o) ? I("", !0) : (i(), p(M, {
          key: 0
        }, [_(k), _(A, {
          "onConfirm:disconnect": u[0] || (u[0] = w => n("confirm:disconnect"))
        })], 64))], 64)) : (i(), y(f, {
          key: 1,
          label: ("t" in l ? l.t : s(c))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: s(se).LARGE,
          onClick: u[1] || (u[1] = w => n("click:connect-account"))
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
        const A = ke,
          f = $t,
          w = Je,
          N = Ne,
          $ = we;
        return i(), p(M, null, [_(N, {
          modelValue: e.value,
          "onUpdate:modelValue": k[0] || (k[0] = R => e.value = R)
        }, {
          default: T(() => [_(w, null, Ie({
            header: T(() => [_(A, {
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
        }, 8, ["modelValue"]), _($)], 64)
      }
    }
  }),
  St = h(wt, [
    ["__scopeId", "data-v-657ce5c0"]
  ]),
  At = {
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
      } = oe(), n = x(!1), a = () => {
        e.value && (n.value = !0)
      };
      return (t, o) => {
        const r = ke,
          l = ut,
          u = mt,
          m = St;
        return i(), p("div", At, [_(r, {
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
  Et = h(Ct, [
    ["__scopeId", "data-v-67447d49"]
  ]),
  Tt = {
    class: "pages-index-banner-controls"
  },
  It = ["onClick"],
  Nt = {
    class: "image-container"
  },
  xt = {
    class: "title"
  },
  Rt = g({
    __name: "BannerControls",
    setup(d) {
      const e = S(() => [{
        title: c("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => L().push({
          name: "memepad-new",
          query: {
            memepadFrom: Y.MAIN,
            memepadNewFrom: fe.MAIN
          }
        })
      }, {
        title: c("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => L().push({
          name: "memepad",
          query: {
            memepadFrom: Y.MAIN
          }
        })
      }, {
        title: c("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          X().main.controlsTradingBotClick(), F().openTradingBot()
        }
      }]);
      return (n, a) => {
        const t = ie;
        return i(), p("div", Tt, [(i(!0), p(M, null, Z(s(e), (o, r) => (i(), p("button", {
          key: r,
          class: "control reset",
          onClick: l => o.onClick()
        }, [b("div", Nt, [_(t, {
          name: o.image,
          class: "image"
        }, null, 8, ["name"])]), b("div", xt, E(o.title), 1)], 8, It))), 128))])
      }
    }
  }),
  Bt = h(Rt, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  Pt = {
    class: "pages-index-banner"
  },
  Mt = g({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(d) {
      return (e, n) => {
        const a = at,
          t = Et,
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
  Lt = h(Mt, [
    ["__scopeId", "data-v-2dd935c4"]
  ]),
  zt = {
    class: "pages-index-daily-reward"
  },
  Ot = {
    key: 1,
    class: "widget has-radius"
  },
  Kt = {
    class: "compose"
  },
  Vt = {
    class: "title"
  },
  Dt = {
    key: 0,
    class: "subtitle"
  },
  Ft = g({
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
          Pe(l, {
            Err: () => n.error(c("base.claim_error")),
            Ok: u => {
              o === Q.RESTORE && n.success(c("daily_reward.streak_restored", {
                days: r
              })), n.success(`You’ve got ${Me(u.claimedReward.points)} BP`), n.success(re("span", ["You’ve got ", re("i", {
                class: "ticket"
              }), ` ${u.claimedReward.passes}`])), F().makeConfetti(), X().main.dailyRewardClick({
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
            const m = xe().ms100ticker.value;
            if (!m) return Re();
            const k = Be(e.dailyReward.canClaimAt - m, "letters");
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
          m = Qe;
        return i(), p("div", zt, [s(t) ? (i(), p("div", Ot, [_(u, {
          name: s(t).icon,
          class: "icon"
        }, null, 8, ["name"]), b("div", Kt, [b("div", Vt, E(s(t).title), 1), ("isOk" in o ? o.isOk : s(W))(s(t).subtitle) ? (i(), p("div", Dt, E(s(t).subtitle.data), 1)) : (i(), y(l, {
          key: 1,
          type: s(ve).SECONDARY,
          class: "skeleton subtitle"
        }, null, 8, ["type"]))]), s(t).claim ? (i(), y(m, {
          key: 0,
          label: s(t).claim.label,
          "can-claim": s(t).claim.can,
          "claim-fn": s(t).claim.fn,
          style: G(s(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : I("", !0)])) : (i(), y(l, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  jt = h(Ft, [
    ["__scopeId", "data-v-c4174779"]
  ]),
  Ut = ["src"],
  Ht = ["src"],
  Yt = {
    class: "content"
  },
  Gt = {
    class: "inner"
  },
  Wt = ["innerHTML"],
  qt = {
    class: "icon-wrapper"
  },
  Xt = ["src"],
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
          class: J(["pages-index-new-season-banner-card", `size-${e.textSize}`])
        }, [b("img", {
          src: ("imgResolver" in e ? e.imgResolver : s(P))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, Ut), n[0] || (n[0] = b("div", {
          class: "bg"
        }, null, -1)), b("img", {
          src: ("imgResolver" in e ? e.imgResolver : s(P))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, Ht), b("div", Yt, [b("div", Gt, [b("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Wt), e.hideButton ? I("", !0) : (i(), y(a, {
          key: 0,
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"]))]), b("div", qt, [e.icon ? (i(), y(t, {
          key: 0,
          name: e.icon,
          style: G({
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
          style: G({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 12, Xt)) : I("", !0)])])], 2)
      }
    }
  }),
  Zt = h(Jt, [
    ["__scopeId", "data-v-290b4af0"]
  ]),
  Qt = {
    class: "kit-stories-src-counter"
  },
  en = g({
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
      return (a, t) => (i(), p("div", Qt, [(i(!0), p(M, null, Z(s(n), o => (i(), p("div", {
        key: o.key,
        class: J(["progress", [`is-state-${o.state}`]]),
        style: G(o.state === "current" ? {
          "background-position-x": `-${o.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  tn = h(en, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  nn = {
    class: "kit-stories-shared-background"
  },
  on = ["poster", "src"],
  sn = ["src"],
  an = g({
    __name: "Background",
    props: {
      background: {}
    },
    setup(d) {
      return (e, n) => {
        const a = tt;
        return i(), p("div", nn, [e.background.type === "video" ? (i(), p("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, on)) : e.background.type === "image" ? (i(), p("img", {
          key: 1,
          src: e.background.src
        }, null, 8, sn)) : e.background.type === "stars" ? (i(), y(a, {
          key: 2,
          class: "stars"
        })) : I("", !0)])
      }
    }
  }),
  ln = h(an, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  rn = {
    class: "kit-stories-layouts-title-subtitle"
  },
  cn = {
    class: "title"
  },
  un = {
    class: "subtitle"
  },
  _n = g({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(d) {
      return (e, n) => (i(), p("div", rn, [b("div", cn, E(e.layout.title), 1), b("div", un, E(e.layout.subtitle), 1)]))
    }
  }),
  dn = h(_n, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  mn = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  pn = {
    class: "animoji-container"
  },
  bn = {
    class: "content-container"
  },
  yn = {
    class: "title"
  },
  fn = {
    class: "subtitle"
  },
  vn = g({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(d) {
      return (e, n) => {
        const a = ge;
        return i(), p("div", mn, [b("div", pn, [_(a, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), b("div", bn, [b("div", yn, E(e.layout.title), 1), b("div", fn, E(e.layout.subtitle), 1)])])
      }
    }
  }),
  gn = h(vn, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  kn = g({
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
  hn = h(kn, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  $n = {
    class: "kit-stories-src-story"
  },
  wn = {
    class: "content"
  },
  Sn = {
    class: "layout"
  },
  An = {
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
        const a = ln,
          t = dn,
          o = gn,
          r = hn;
        return i(), p("div", $n, [_(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), b("div", wn, [b("div", Sn, [e.story.layout.type === "TitleSubtitle" ? (i(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), y(o, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : I("", !0)]), b("div", An, [e.story.button ? (i(), y(r, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = l => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : I("", !0)])])])
      }
    }
  }),
  En = h(Cn, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  Tn = (d, e) => {
    const n = d,
      a = x(d),
      t = S(() => 1 - a.value / n);
    let o = 0,
      r;
    const l = () => {
        o = Date.now(), r = ze(() => {
          const A = Date.now(),
            f = A - o;
          o = A, a.value = Math.max(a.value - f, 0), a.value <= 0 && (u(), e())
        }, 100)
      },
      u = () => {
        r && (clearInterval(r), r = void 0)
      },
      m = () => {
        if (r) {
          u();
          const A = Date.now() - o;
          a.value = Math.max(a.value - A, 0)
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
  In = 150,
  Nn = g({
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
        t = x(0),
        o = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, m()) : a("close")
        },
        r = () => {
          t.value > 0 ? (t.value -= 1, m()) : a("close")
        },
        l = () => Tn(5e3, o),
        u = Oe(l()),
        m = () => {
          u.value.destroy(), u.value = l()
        },
        k = x(),
        A = Ke(),
        f = x(!1),
        w = x(!1),
        N = () => {
          f.value = !1, w.value = !1, A.set(() => {
            u.value.pause(), f.value = !0, w.value = !0
          }, In)
        },
        $ = () => {
          A.destroy(), f.value && (u.value.resume(), f.value = !1)
        },
        R = v => {
          if (f.value || w.value || !k.value) return;
          const {
            width: C,
            left: V
          } = k.value.getBoundingClientRect(), D = v.clientX - V, H = C / 3;
          D < H ? r() : D > H * 2 && o()
        };
      return Ve(() => {
        A.destroy(), u.value.destroy()
      }), (v, C) => {
        const V = tn,
          D = En,
          H = nt;
        return i(), y(H, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: T(() => [b("div", {
            ref_key: "storiesRef",
            ref: k,
            class: "kit-stories-src-stories",
            onPointerdown: C[1] || (C[1] = j(O => N(), ["prevent"])),
            onPointerup: C[2] || (C[2] = O => $()),
            onPointercancel: C[3] || (C[3] = O => $()),
            onPointerleave: C[4] || (C[4] = O => $()),
            onClick: C[5] || (C[5] = O => R(O))
          }, [_(V, {
            current: s(t),
            "current-progress": s(u).progress.value,
            count: v.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (i(), y(D, {
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
  xn = h(Nn, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  Rn = g({
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
        const t = xn;
        return i(), y(_e, {
          name: "opacity-transition"
        }, {
          default: T(() => [e.value ? (i(), y(t, {
            key: 0,
            stories: n.set.stories,
            class: "kit-stories",
            onClose: a[0] || (a[0] = o => e.value = !1)
          }, null, 8, ["stories"])) : I("", !0)]),
          _: 1
        })
      }
    }
  }),
  Bn = h(Rn, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  Pn = {
    class: "pages-index-new-season-banner"
  },
  Mn = {
    class: "progress"
  },
  Ln = g({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(d) {
      const e = d,
        n = L(),
        a = F(),
        t = X(),
        o = z().$webApp,
        r = [{
          title: c("index.banners.dogs_campaign.title"),
          buttonLabel: c("index.banners.dogs_campaign.button_label"),
          onButtonClick: () => {
            o.openLink("https://www.blum.io/post/blum-dogs")
          },
          gif: P("index/banner/dogs-campaign", "gif"),
          imageSize: 98,
          textSize: "sm",
          analyticsName: B.DOGS_CAMPAIGN
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
          gif: P("index/banner/hashcash", "gif"),
          imageSize: 102,
          analyticsName: B.HASH_CASH
        }, {
          title: c("index.banners.trade_now.title"),
          buttonLabel: c("index.banners.trade_now.button_label"),
          onButtonClick: () => {
            a.openTradingBot()
          },
          icon: "ton-logo",
          imageSize: 64,
          analyticsName: B.TRADE_NOW
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
          analyticsName: B.EARN_NOW
        }, {
          title: c("index.banners.season_2.title"),
          buttonLabel: c("index.banners.season_2.button_label"),
          onButtonClick: () => {
            l.value = !0
          },
          lottie: "animations/Moon",
          imageSize: 96,
          analyticsName: B.SEASON_2
        }, {
          title: c("index.banners.blum_x.title"),
          buttonLabel: c("index.banners.blum_x.button_label"),
          onButtonClick: () => {
            F().openBlumTwitter()
          },
          gif: P("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: B.BLUM_X
        }, {
          title: c("index.banners.blum_academy.title"),
          buttonLabel: c("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            o.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: P("index/banner/edu", "gif"),
          imageSize: 102,
          analyticsName: B.BLUM_ACADEMY
        }, {
          title: c("index.banners.create_memecoin.title"),
          buttonLabel: c("index.banners.create_memecoin.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-new",
              query: {
                memepadFrom: Y.MAIN_PAGE_BANNER_CREATE_MEMECOIN,
                memepadNewFrom: fe.MAIN_PAGE_BANNER_CREATE_MEMECOIN
              }
            })
          },
          gif: P("index/banner/memecoin", "gif"),
          imageSize: 118,
          analyticsName: B.CREATE_MEMECOIN
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
          analyticsName: B.FRIENDS
        }, {
          title: c("index.banners.trade_memecoins.title"),
          buttonLabel: c("index.banners.trade_memecoins.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad",
              query: {
                memepadFrom: Y.MAIN_PAGE_BANNER_TRADE_MEMECOIN
              }
            })
          },
          gif: P("index/banner/riskreward", "gif"),
          imageSize: 102,
          analyticsName: B.TRADE_MEMECOIN
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
          gif: P("index/banner/leaderboard", "gif"),
          imageSize: 102,
          analyticsName: B.LEADERBOARDS
        }].map((f, w) => ({
          ...f,
          onButtonClick: () => {
            t.main.bannerClick({
              position: w + 1,
              bannerName: f.analyticsName
            }), f.onButtonClick()
          }
        })),
        l = x(e.value.showOnStart);
      Ue(l, f => f && e.value.onShowed(), {
        immediate: !0
      });
      const u = x(0),
        m = x(null),
        k = (f, w = "smooth") => {
          var N;
          (N = m.value) == null || N.scrollTo({
            left: f * window.innerWidth + (u.value > f ? -1 : 1),
            behavior: w
          })
        },
        A = Ye(() => {
          if (!m.value) return;
          const f = m.value.children[0].offsetWidth + 10,
            w = m.value.scrollLeft,
            N = Math.round(w / f);
          u.value = N
        }, 50).debouncedFunction;
      return He(() => {
        k(u.value, "instant")
      }), (f, w) => {
        const N = Zt,
          $ = et,
          R = Bn;
        return i(), p("div", Pn, [b("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: w[0] || (w[0] = (...v) => s(A) && s(A)(...v)),
          onTouchmove: w[1] || (w[1] = (...v) => s(A) && s(A)(...v))
        }, [(i(!0), p(M, null, Z(s(r), (v, C) => (i(), p("div", {
          key: v.title,
          class: "item"
        }, [_(N, {
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
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name", "hide-button", "text-size"])]))), 128))], 544), b("div", Mn, [s(r).length > 1 ? (i(), y($, {
          key: 0,
          "model-value": s(u),
          count: s(r).length,
          timer: 15e3,
          "onUpdate:modelValue": k
        }, null, 8, ["model-value", "count"])) : I("", !0)]), _(R, {
          modelValue: s(l),
          "onUpdate:modelValue": w[2] || (w[2] = v => ye(l) ? l.value = v : null),
          set: f.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  zn = h(Ln, [
    ["__scopeId", "data-v-0b6a3f46"]
  ]),
  On = {
    class: "pages-wallet-asset-skeleton"
  },
  Kn = {
    class: "content"
  },
  Vn = g({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(d) {
      return (e, n) => {
        const a = U;
        return i(), p("div", On, [(i(!0), p(M, null, Z(e.count, t => (i(), p("div", {
          key: t,
          class: "skeleton"
        }, [_(a, {
          rounded: "",
          class: "logo"
        }), b("div", Kn, [_(a, {
          class: "title"
        }), _(a, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  Dn = h(Vn, [
    ["__scopeId", "data-v-26805825"]
  ]),
  Fn = {
    class: "pages-index-points"
  },
  jn = g({
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
        const t = $e,
          o = Dn,
          r = Ze;
        return i(), p("div", Fn, [_(t, {
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
  Un = h(jn, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  Hn = {
    key: 0,
    class: "skeleton"
  },
  Yn = {
    key: 1,
    class: "default"
  },
  Gn = {
    class: "content"
  },
  Wn = {
    class: "title"
  },
  qn = {
    class: "balance"
  },
  Xn = g({
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
        const r = $e,
          l = ie,
          u = U,
          m = he;
        return i(), p("div", {
          class: J(["pages-index-game", `is-mode-${s(n).mode}`])
        }, [_(r, {
          label: ("t" in t ? t.t : s(c))("base.game")
        }, null, 8, ["label"]), s(n).type === "skeleton" ? (i(), p("div", Hn, [_(l, {
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
        }, null, 8, ["label"])])) : (i(), p("div", Yn, [_(l, {
          name: s(n).image,
          class: "icon"
        }, null, 8, ["name"]), b("div", Gn, [b("div", Wn, E(("t" in t ? t.t : s(c))("game.card.title")), 1), b("div", qn, E(s(n).pp) + " Play passes", 1)]), _(m, {
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
  Jn = h(Xn, [
    ["__scopeId", "data-v-86df2fc1"]
  ]),
  Zn = () => {
    const d = Ge(),
      e = We(),
      n = qe(),
      a = S(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      o = {
        set: Qn(),
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
  Qn = () => ({
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
  eo = {
    class: "index-page page"
  },
  to = g({
    __name: "index",
    setup(d) {
      const e = Zn();
      return (n, a) => {
        const t = Lt,
          o = jt,
          r = zn,
          l = Un,
          u = Jn;
        return i(), p("div", eo, [_(t, {
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
  wo = h(to, [
    ["__scopeId", "data-v-97e08456"]
  ]);
export {
  wo as
  default
};