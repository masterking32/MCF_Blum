import {
  _ as ce,
  a as we
} from "./-EKQjZzM.js";
import {
  d as g,
  aB as te,
  aC as ne,
  aD as oe,
  y as R,
  j as S,
  W as ue,
  o as i,
  c as p,
  e as o,
  N as y,
  G as I,
  b as _,
  D as T,
  m as ee,
  t as E,
  a as b,
  aE as j,
  C as u,
  an as _e,
  F as P,
  ab as H,
  aF as de,
  a8 as V,
  _ as q,
  f as h,
  a4 as me,
  at as Se,
  Y as se,
  aG as Ce,
  aH as Ae,
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
  aK as W,
  aL as fe,
  a7 as F,
  q as Z,
  aM as Q,
  a6 as le,
  P as Re,
  aN as xe,
  Q as Be,
  aO as ve,
  aP as G,
  aQ as Pe,
  R as Me,
  as as re,
  X as M,
  ap as ge,
  aR as Le,
  aS as ze,
  aT as Ke,
  aU as Ve,
  a3 as Oe,
  ay as De,
  aV as B,
  E as Fe,
  V as je,
  ac as Ue,
  H as Ye,
  $ as We,
  aW as Ge,
  aX as He
} from "./EtIub6tT.js";
import {
  _ as ke
} from "./CSN1cLcI.js";
import {
  _ as U
} from "./SirDWyvq.js";
import {
  _ as qe
} from "./D-4qE7C8.js";
import {
  _ as Xe
} from "./DkJz6Wcq.js";
import {
  _ as ie,
  a as he,
  b as Je
} from "./lenZ2Xqy.js";
import {
  _ as Ze
} from "./BHdOhocT.js";
import {
  _ as Qe
} from "./BF8brxOe.js";
import {
  _ as et
} from "./CvH0LIgv.js";
import {
  _ as tt
} from "./DjVJcbVh.js";
import {
  _ as $e
} from "./C_2VAzxS.js";
import "./ChXXm3xQ.js";
import "./Dvsm39Mk.js";
import "./Ck4dBbKd.js";
import "./BOScRNZN.js";
import "./C1gvD9g9.js";
import "./CH78LX6i.js";
import "./B6A7ya30.js";
import "./Bw4VGLPW.js";
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
        s = R(!0),
        r = R(!1),
        l = S(() => {
          var $;
          return (($ = e.value) == null ? void 0 : $.emailMasked) ?? ""
        }),
        c = S(() => {
          var $;
          return (($ = e.value) == null ? void 0 : $.hasEmail) ?? !1
        }),
        m = S(() => {
          var $;
          return (($ = e.value) == null ? void 0 : $.isEmailVerified) ?? !1
        }),
        k = S(() => s.value && c.value && !m.value && !a() && !r.value),
        C = () => {
          s.value = !1, t()
        },
        f = async $ => {
          const x = await n({
            captchaToken: $
          });
          if (!H(x)) {
            if (x.code === de.Forbidden) {
              r.value = !0;
              return
            }
            V().error();
            return
          }
          C(), V().success(u("secure_options.message.email_code_sent"))
        }, w = async $ => {
          await f($), r.value = !1
        }, N = () => {
          r.value = !1
        };
      return ($, x) => {
        const v = ce,
          A = ue("I18nT"),
          O = q;
        return i(), p(P, null, [o(r) ? (i(), y(v, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: w,
          onReject: N
        })) : I("", !0), _(_e, {
          name: "opacity-spring-transition"
        }, {
          default: T(() => [o(k) ? (i(), p("div", nt, [_(A, {
            tag: "span",
            keypath: "secure_options.notification.email_not_verified"
          }, {
            email: T(() => [ee(E(o(l)), 1)]),
            resend: T(() => [b("a", {
              href: "#",
              onClick: x[0] || (x[0] = j(D => f(), ["prevent"]))
            }, E(("t" in $ ? $.t : o(u))("secure_options.notification.email_not_verified_resend")), 1)]),
            _: 1
          }), b("button", {
            type: "button",
            class: "close reset",
            onClick: C
          }, [_(O, {
            name: "close-micro"
          })])])) : I("", !0)]),
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
      return (t, s) => {
        const r = U,
          l = ae;
        return i(), p("div", at, [o(a).type === "skeleton" ? (i(), y(r, {
          key: 0,
          class: "skeleton"
        })) : o(a).type === "connected" ? (i(), p("div", it, [b("div", lt, E(("t" in t ? t.t : o(u))("wallet.total_balance")), 1), (i(), y(Se(o(a).balance), {
          class: "balance"
        }))])) : o(a).type === "connect" ? (i(), y(l, {
          key: 2,
          label: ("t" in t ? t.t : o(u))("wallet.connect.btn"),
          size: o(se).SMALL,
          onClick: s[0] || (s[0] = c => n())
        }, null, 8, ["label", "size"])) : I("", !0)])
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
        a = t => X().main.tribeLogoClick(t);
      return (t, s) => {
        const r = U,
          l = Ee,
          c = q,
          m = qe;
        return i(), p("div", ut, [t.myTribe ? (i(), p(P, {
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
          default: T(() => [_(c, {
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
          default: T(() => [_(c, {
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
          class: J(o(e))
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
      } = ne(), n = R(!1), a = async r => {
        const l = await e({
          captchaToken: r
        });
        if (!H(l)) {
          if (l.code === de.Forbidden) {
            n.value = !0;
            return
          }
          V().error();
          return
        }
        V().success(u("secure_options.message.email_code_sent"))
      }, t = async r => {
        await a(r), n.value = !1
      }, s = () => {
        n.value = !1
      };
      return (r, l) => {
        const c = ce,
          m = ue("I18nT");
        return o(n) ? (i(), y(c, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: t,
          onReject: s
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
          }, E(("t" in r ? r.t : o(u))("secure_options.profile_modal.connect_email.not_verified_caption_resend")), 1)]),
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
      } = ne(), t = e, s = () => {
        const r = u("secure_options.profile_modal.disconnect_email.confirm.title"),
          l = u("secure_options.profile_modal.disconnect_email.confirm.description"),
          c = [{
            type: "cancel"
          }, {
            type: "default",
            label: u("secure_options.profile_modal.disconnect_email.confirm.btn"),
            onClick: async () => {
              const m = await n();
              if (!H(m)) {
                V().error();
                return
              }
              t("confirm:disconnect"), await a()
            }
          }];
        z().$webApp.popup(r, l, c)
      };
      return (r, l) => (i(), p("a", {
        href: "#",
        class: "disconnect",
        onClick: j(s, ["prevent"])
      }, E(("t" in r ? r.t : o(u))("secure_options.profile_modal.disconnect_email.btn")), 1))
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
        s = S(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.isEmailVerified) ?? !1
        }),
        r = S(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.emailMasked) ?? ""
        });
      return (l, c) => {
        const m = yt,
          k = vt,
          C = kt,
          f = ae;
        return o(t) ? (i(), p(P, {
          key: 0
        }, [_(m, {
          icon: "email",
          label: ("t" in l ? l.t : o(u))("secure_options.profile_modal.connect_email.label"),
          value: o(r),
          disabled: !o(s)
        }, null, 8, ["label", "value", "disabled"]), o(s) ? I("", !0) : (i(), p(P, {
          key: 0
        }, [_(k), _(C, {
          "onConfirm:disconnect": c[0] || (c[0] = w => n("confirm:disconnect"))
        })], 64))], 64)) : (i(), y(f, {
          key: 1,
          label: ("t" in l ? l.t : o(u))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: o(se).LARGE,
          onClick: c[1] || (c[1] = w => n("click:connect-account"))
        }, null, 8, ["label", "size"]))
      }
    }
  }),
  $t = g({
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
        s = S(() => {
          var m;
          return ((m = n.getUser.value) == null ? void 0 : m.username) ?? "user"
        }),
        r = S(() => {
          var m;
          return ((m = t.value) == null ? void 0 : m.hasEmail) ?? !1
        }),
        l = () => {
          c(), a.main.show()
        },
        c = () => {
          e.value = !1
        };
      return (m, k) => {
        const C = ke,
          f = ht,
          w = Xe,
          N = Ne,
          $ = we;
        return i(), p(P, null, [_(N, {
          modelValue: e.value,
          "onUpdate:modelValue": k[0] || (k[0] = x => e.value = x)
        }, {
          default: T(() => [_(w, null, Ie({
            header: T(() => [_(C, {
              size: "96px",
              class: "avatar"
            })]),
            title: T(() => [ee(E(o(s)), 1)]),
            footer: T(() => [_(f, {
              "onClick:connectAccount": l,
              "onConfirm:disconnect": c
            })]),
            _: 2
          }, [o(r) ? void 0 : {
            name: "subTitle",
            fn: T(() => [ee(E(("t" in m ? m.t : o(u))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
            key: "0"
          }]), 1024)]),
          _: 1
        }, 8, ["modelValue"]), _($)], 64)
      }
    }
  }),
  wt = h($t, [
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
      } = oe(), n = R(!1), a = () => {
        e.value && (n.value = !0)
      };
      return (t, s) => {
        const r = ke,
          l = ct,
          c = dt,
          m = wt;
        return i(), p("div", St, [_(r, {
          small: "",
          onClick: a
        }), _(l, {
          wallet: t.wallet
        }, null, 8, ["wallet"]), _(c, {
          "my-tribe": t.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"]), _(m, {
          modelValue: o(n),
          "onUpdate:modelValue": s[0] || (s[0] = k => ye(n) ? n.value = k : null)
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
  It = {
    class: "image-container"
  },
  Nt = {
    class: "title"
  },
  Rt = g({
    __name: "BannerControls",
    setup(d) {
      const e = S(() => [{
        title: u("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => L().push({
          name: "memepad-new",
          query: {
            memepadFrom: W.MAIN,
            memepadNewFrom: fe.MAIN
          }
        })
      }, {
        title: u("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => L().push({
          name: "memepad",
          query: {
            memepadFrom: W.MAIN
          }
        })
      }, {
        title: u("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          X().main.controlsTradingBotClick(), F().openTradingBot()
        }
      }]);
      return (n, a) => {
        const t = ie;
        return i(), p("div", Et, [(i(!0), p(P, null, Z(o(e), (s, r) => (i(), p("button", {
          key: r,
          class: "control reset",
          onClick: l => s.onClick()
        }, [b("div", It, [_(t, {
          name: s.image,
          class: "image"
        }, null, 8, ["name"])]), b("div", Nt, E(s.title), 1)], 8, Tt))), 128))])
      }
    }
  }),
  xt = h(Rt, [
    ["__scopeId", "data-v-341944d5"]
  ]),
  Bt = {
    class: "pages-index-banner"
  },
  Pt = g({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(d) {
      return (e, n) => {
        const a = st,
          t = At,
          s = xt;
        return i(), p("div", Bt, [_(a), _(t, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), _(s, {
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
  Kt = {
    class: "compose"
  },
  Vt = {
    class: "title"
  },
  Ot = {
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
        n = V(),
        a = (s, r) => async () => {
          const l = await e.dailyRewardClaim();
          Pe(l, {
            Err: () => n.error(u("base.claim_error")),
            Ok: c => {
              s === Q.RESTORE && n.success(u("daily_reward.streak_restored", {
                days: r
              })), n.success(`You’ve got ${Me(c.claimedReward.points)} BP`), n.success(re("span", ["You’ve got ", re("i", {
                class: "ticket"
              }), ` ${c.claimedReward.passes}`])), F().makeConfetti(), X().main.dailyRewardClick({
                points: c.claimedReward.points.toNumber(),
                passes: c.claimedReward.passes
              })
            }
          })
        }, t = S(() => {
          if (e.dailyReward === void 0) return;
          const s = e.dailyReward.currentStreakDays,
            r = `${s}-${u("base.n.days",s)}`;
          if (e.dailyReward.claim === Q.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: u("daily_reward.missed"),
            subtitle: le(u("daily_reward.restore_current_streak", {
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
            const m = Re().ms100ticker.value;
            if (!m) return xe();
            const k = Be(e.dailyReward.canClaimAt - m, "letters");
            return le(u("base.claim_next_in", {
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
              can: e.dailyReward.claim !== Q.UNAVAILABLE,
              fn: a(e.dailyReward.claim, r)
            }
          }
        });
      return (s, r) => {
        const l = U,
          c = ie,
          m = Ze;
        return i(), p("div", Lt, [o(t) ? (i(), p("div", zt, [_(c, {
          name: o(t).icon,
          class: "icon"
        }, null, 8, ["name"]), b("div", Kt, [b("div", Vt, E(o(t).title), 1), ("isOk" in s ? s.isOk : o(H))(o(t).subtitle) ? (i(), p("div", Ot, E(o(t).subtitle.data), 1)) : (i(), y(l, {
          key: 1,
          type: o(ve).SECONDARY,
          class: "skeleton subtitle"
        }, null, 8, ["type"]))]), o(t).claim ? (i(), y(m, {
          key: 0,
          label: o(t).claim.label,
          "can-claim": o(t).claim.can,
          "claim-fn": o(t).claim.fn,
          style: G(o(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : I("", !0)])) : (i(), y(l, {
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
  Yt = {
    class: "content"
  },
  Wt = {
    class: "inner"
  },
  Gt = ["innerHTML"],
  Ht = {
    class: "icon-wrapper"
  },
  qt = ["src"],
  Xt = g({
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
          s = ge;
        return i(), p("div", {
          class: J(["pages-index-new-season-banner-card", `size-${e.textSize}`])
        }, [b("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(M))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, jt), n[0] || (n[0] = b("div", {
          class: "bg"
        }, null, -1)), b("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(M))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, Ut), b("div", Yt, [b("div", Wt, [b("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Gt), e.hideButton ? I("", !0) : (i(), y(a, {
          key: 0,
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"]))]), b("div", Ht, [e.icon ? (i(), y(t, {
          key: 0,
          name: e.icon,
          style: G({
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
          style: G({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 12, qt)) : I("", !0)])])], 2)
      }
    }
  }),
  Jt = h(Xt, [
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
      return (a, t) => (i(), p("div", Zt, [(i(!0), p(P, null, Z(o(n), s => (i(), p("div", {
        key: s.key,
        class: J(["progress", [`is-state-${s.state}`]]),
        style: G(s.state === "current" ? {
          "background-position-x": `-${s.progress*100}%`
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
        })) : I("", !0)])
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
        t = S(() => n.button.type === "next" ? n.isLast ? u("base.close") : u("base.next") : n.button.label),
        s = () => {
          if (n.button.type === "next") z().$webApp.HapticFeedback.impactOccurred("light"), a("next");
          else if (n.button.type === "local") L().push(n.button.link);
          else if (n.button.type === "external") z().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") z().$webApp.openTelegramLink(n.button.link);
          else throw n.button, me("Unknown button type")
        };
      return (r, l) => {
        const c = ae;
        return i(), y(c, {
          label: o(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: o(se).LARGE,
          onClick: l[0] || (l[0] = j(m => s(), ["stop"]))
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
  $n = {
    class: "content"
  },
  wn = {
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
          s = vn,
          r = kn;
        return i(), p("div", hn, [_(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), b("div", $n, [b("div", wn, [e.story.layout.type === "TitleSubtitle" ? (i(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), y(s, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : I("", !0)]), b("div", Sn, [e.story.button ? (i(), y(r, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = l => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : I("", !0)])])])
      }
    }
  }),
  An = h(Cn, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  En = (d, e) => {
    const n = d,
      a = R(d),
      t = S(() => 1 - a.value / n);
    let s = 0,
      r;
    const l = () => {
        s = Date.now(), r = ze(() => {
          const C = Date.now(),
            f = C - s;
          s = C, a.value = Math.max(a.value - f, 0), a.value <= 0 && (c(), e())
        }, 100)
      },
      c = () => {
        r && (clearInterval(r), r = void 0)
      },
      m = () => {
        if (r) {
          c();
          const C = Date.now() - s;
          a.value = Math.max(a.value - C, 0)
        }
      },
      k = () => l();
    return l(), {
      timeToExpire: Le(a),
      progress: t,
      destroy: c,
      pause: m,
      resume: k
    }
  },
  Tn = 150,
  In = g({
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
        t = R(0),
        s = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, m()) : a("close")
        },
        r = () => {
          t.value > 0 ? (t.value -= 1, m()) : a("close")
        },
        l = () => En(5e3, s),
        c = Ke(l()),
        m = () => {
          c.value.destroy(), c.value = l()
        },
        k = R(),
        C = Ve(),
        f = R(!1),
        w = R(!1),
        N = () => {
          f.value = !1, w.value = !1, C.set(() => {
            c.value.pause(), f.value = !0, w.value = !0
          }, Tn)
        },
        $ = () => {
          C.destroy(), f.value && (c.value.resume(), f.value = !1)
        },
        x = v => {
          if (f.value || w.value || !k.value) return;
          const {
            width: A,
            left: O
          } = k.value.getBoundingClientRect(), D = v.clientX - O, Y = A / 3;
          D < Y ? r() : D > Y * 2 && s()
        };
      return Oe(() => {
        C.destroy(), c.value.destroy()
      }), (v, A) => {
        const O = en,
          D = An,
          Y = tt;
        return i(), y(Y, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: T(() => [b("div", {
            ref_key: "storiesRef",
            ref: k,
            class: "kit-stories-src-stories",
            onPointerdown: A[1] || (A[1] = j(K => N(), ["prevent"])),
            onPointerup: A[2] || (A[2] = K => $()),
            onPointercancel: A[3] || (A[3] = K => $()),
            onPointerleave: A[4] || (A[4] = K => $()),
            onClick: A[5] || (A[5] = K => x(K))
          }, [_(O, {
            current: o(t),
            "current-progress": o(c).progress.value,
            count: v.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (i(), y(D, {
            key: o(t),
            story: v.stories[o(t)],
            "is-last": o(t) === v.stories.length - 1,
            onNext: A[0] || (A[0] = K => s())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  Nn = h(In, [
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
        const t = Nn;
        return i(), y(_e, {
          name: "opacity-transition"
        }, {
          default: T(() => [e.value ? (i(), y(t, {
            key: 0,
            stories: n.set.stories,
            class: "kit-stories",
            onClose: a[0] || (a[0] = s => e.value = !1)
          }, null, 8, ["stories"])) : I("", !0)]),
          _: 1
        })
      }
    }
  }),
  xn = h(Rn, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  Bn = {
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
    setup(d) {
      const e = d,
        n = L(),
        a = F(),
        t = X(),
        s = z().$webApp,
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
            F().openBlumTwitter()
          },
          gif: M("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: B.BLUM_X
        }, {
          title: u("index.banners.blum_academy.title"),
          buttonLabel: u("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            s.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: M("index/banner/edu", "gif"),
          imageSize: 102,
          analyticsName: B.BLUM_ACADEMY
        }, {
          title: u("index.banners.create_memecoin.title"),
          buttonLabel: u("index.banners.create_memecoin.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-new",
              query: {
                memepadFrom: W.MAIN_PAGE_BANNER_CREATE_MEMECOIN,
                memepadNewFrom: fe.MAIN_PAGE_BANNER_CREATE_MEMECOIN
              }
            })
          },
          gif: M("index/banner/memecoin", "gif"),
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
          gif: M("index/banner/comission", "gif"),
          imageSize: 100,
          analyticsName: B.FRIENDS
        }, {
          title: u("index.banners.trade_memecoins.title"),
          buttonLabel: u("index.banners.trade_memecoins.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad",
              query: {
                memepadFrom: W.MAIN_PAGE_BANNER_TRADE_MEMECOIN
              }
            })
          },
          gif: M("index/banner/riskreward", "gif"),
          imageSize: 102,
          analyticsName: B.TRADE_MEMECOIN
        }, {
          title: u("index.banners.leaderboard.title"),
          buttonLabel: u("index.banners.leaderboard.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens-leaderboards",
              query: {
                source: Fe.MAIN_PAGE_BANNER
              }
            })
          },
          gif: M("index/banner/leaderboard", "gif"),
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
        l = R(e.value.showOnStart);
      je(l, f => f && e.value.onShowed(), {
        immediate: !0
      });
      const c = R(0),
        m = R(null),
        k = (f, w = "smooth") => {
          var N;
          (N = m.value) == null || N.scrollTo({
            left: f * window.innerWidth + (c.value > f ? -1 : 1),
            behavior: w
          })
        },
        C = Ye(() => {
          if (!m.value) return;
          const f = m.value.children[0].offsetWidth + 10,
            w = m.value.scrollLeft,
            N = Math.round(w / f);
          c.value = N
        }, 50).debouncedFunction;
      return Ue(() => {
        k(c.value, "instant")
      }), (f, w) => {
        const N = Jt,
          $ = Qe,
          x = xn;
        return i(), p("div", Bn, [b("div", {
          ref_key: "listEl",
          ref: m,
          class: "list",
          onScroll: w[0] || (w[0] = (...v) => o(C) && o(C)(...v)),
          onTouchmove: w[1] || (w[1] = (...v) => o(C) && o(C)(...v))
        }, [(i(!0), p(P, null, Z(o(r), (v, A) => (i(), p("div", {
          key: v.title,
          class: "item"
        }, [_(N, {
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
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name", "hide-button", "text-size"])]))), 128))], 544), b("div", Pn, [o(r).length > 1 ? (i(), y($, {
          key: 0,
          "model-value": o(c),
          count: o(r).length,
          timer: 15e3,
          "onUpdate:modelValue": k
        }, null, 8, ["model-value", "count"])) : I("", !0)]), _(x, {
          modelValue: o(l),
          "onUpdate:modelValue": w[2] || (w[2] = v => ye(l) ? l.value = v : null),
          set: f.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Ln = h(Mn, [
    ["__scopeId", "data-v-45abd144"]
  ]),
  zn = {
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
        return i(), p("div", zn, [(i(!0), p(P, null, Z(e.count, t => (i(), p("div", {
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
  On = h(Vn, [
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
        const t = $e,
          s = On,
          r = Je;
        return i(), p("div", Dn, [_(t, {
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
  jn = h(Fn, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  Un = {
    key: 0,
    class: "skeleton"
  },
  Yn = {
    key: 1,
    class: "default"
  },
  Wn = {
    class: "content"
  },
  Gn = {
    class: "title"
  },
  Hn = {
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
            const s = F().internal;
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
        a = () => L().push({
          name: "game"
        });
      return (t, s) => {
        const r = $e,
          l = ie,
          c = U,
          m = he;
        return i(), p("div", {
          class: J(["pages-index-game", `is-mode-${o(n).mode}`])
        }, [_(r, {
          label: ("t" in t ? t.t : o(u))("base.game")
        }, null, 8, ["label"]), o(n).type === "skeleton" ? (i(), p("div", Un, [_(l, {
          name: o(n).image,
          class: "icon"
        }, null, 8, ["name"]), _(c, {
          type: o(ve).SECONDARY,
          class: "skeleton-title"
        }, null, 8, ["type"]), _(m, {
          label: ("t" in t ? t.t : o(u))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (i(), p("div", Yn, [_(l, {
          name: o(n).image,
          class: "icon"
        }, null, 8, ["name"]), b("div", Wn, [b("div", Gn, E(("t" in t ? t.t : o(u))("game.card.title")), 1), b("div", Hn, E(o(n).pp) + " Play passes", 1)]), _(m, {
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
  Xn = h(qn, [
    ["__scopeId", "data-v-86df2fc1"]
  ]),
  Jn = () => {
    const d = We(),
      e = Ge(),
      n = He(),
      a = S(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      s = {
        set: Zn(),
        showOnStart: !z().$webApp.storage.local.get(t),
        onShowed: () => {
          z().$webApp.storage.local.set(t, "true")
        }
      },
      r = S(() => {
        const c = d.pointSymbols.value,
          m = d.dropSymbols.value;
        if (!(!c || !m) && !(!c.mp || !c.bp)) return [c.mp, c.bp, ...m]
      }),
      l = S(() => d.pointSymbols.value.pp);
    return {
      dailyReward: n,
      myTribe: a,
      season2Stories: s,
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
  Qn = {
    class: "index-page page"
  },
  eo = g({
    __name: "index",
    setup(d) {
      const e = Jn();
      return (n, a) => {
        const t = Mt,
          s = Ft,
          r = Ln,
          l = jn,
          c = Xn;
        return i(), p("div", Qn, [_(t, {
          "my-tribe": o(e).myTribe.value,
          wallet: o(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), _(s, {
          "daily-reward": o(e).dailyReward.reward.value,
          "daily-reward-claim": o(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), _(r, {
          value: o(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), _(l, {
          points: o(e).walletAssets.value
        }, null, 8, ["points"]), _(c, {
          pp: o(e).pp.value
        }, null, 8, ["pp"])])
      }
    }
  }),
  $o = h(eo, [
    ["__scopeId", "data-v-97e08456"]
  ]);
export {
  $o as
  default
};