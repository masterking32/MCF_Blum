import {
  d as k,
  ar as ne,
  as as oe,
  at as se,
  I as x,
  j as $,
  a7 as ce,
  o as i,
  c as d,
  e as a,
  y as f,
  E as B,
  b as p,
  C as N,
  m as ee,
  t as C,
  a as y,
  au as F,
  z as r,
  av as ue,
  F as L,
  am as j,
  aw as _e,
  ak as K,
  _ as H,
  f as h,
  ag as de,
  ax as $e,
  a9 as ae,
  ay as Ae,
  az as Se,
  x as ie,
  ao as M,
  a5 as J,
  U as Ee,
  aA as me,
  n as le,
  h as O,
  A as pe,
  k as Ce,
  aB as Ne,
  aa as Be,
  p as be,
  aC as te,
  aD as ye,
  aj as Y,
  q as X,
  aE as Z,
  ai as W,
  $ as Te,
  aF as xe,
  a0 as Ie,
  aG as Re,
  aH as q,
  aI as Pe,
  a1 as Me,
  a8 as R,
  aJ as fe,
  aK as Le,
  aL as ze,
  aM as Oe,
  aN as De,
  af as ve,
  a4 as Ke,
  aO as re,
  aP as Ve,
  ah as Fe,
  aQ as T,
  aR as G,
  T as je,
  J as Ue,
  K as Ge,
  N as Ye,
  ab as We,
  aS as qe,
  aT as He,
  P as Je
} from "./YXPW7IJg.js";
import {
  _ as ge,
  a as Xe
} from "./BkOP13K9.js";
import {
  _ as ke
} from "./xLft4Bod.js";
import {
  _ as Q
} from "./DJBDGv2L.js";
import {
  _ as Qe
} from "./wrq-Nfvw.js";
import {
  _ as Ze
} from "./DBf_sXip.js";
import {
  _ as he,
  a as et,
  b as tt
} from "./D6Izs1hP.js";
import {
  _ as nt
} from "./dUz_aQNG.js";
import {
  _ as ot
} from "./CMeJX8BK.js";
import {
  _ as st
} from "./D125EveM.js";
import {
  _ as at
} from "./BIjcUb6P.js";
import {
  _ as it
} from "./CXNv1nS7.js";
import "./U_U11gs_.js";
import "./BhWwsplG.js";
import "./CHCXkHUv.js";
import "./DnFZ1JsJ.js";
import "./YJ664n06.js";
import "./Bd_dECBt.js";
import "./BrfPAM8R.js";
const lt = {
    key: 0,
    class: "notification"
  },
  rt = k({
    __name: "BannerStaySecureNotification",
    setup(_) {
      const e = ne(),
        {
          sendEmailAuthProviderVerification: n
        } = oe(),
        {
          hasClosedStaySecureNotification: o,
          markStaySecureNotificationAsClosed: t
        } = se(),
        s = x(!0),
        c = x(!1),
        l = $(() => {
          var g;
          return ((g = e.value) == null ? void 0 : g.emailMasked) ?? ""
        }),
        u = $(() => {
          var g;
          return ((g = e.value) == null ? void 0 : g.hasEmail) ?? !1
        }),
        m = $(() => {
          var g;
          return ((g = e.value) == null ? void 0 : g.isEmailVerified) ?? !1
        }),
        v = $(() => s.value && u.value && !m.value && !o() && !c.value),
        A = () => {
          s.value = !1, t()
        },
        S = async g => {
          const I = await n({
            captchaToken: g
          });
          if (!j(I)) {
            if (I.code === _e.Forbidden) {
              c.value = !0;
              return
            }
            K().error();
            return
          }
          A(), K().success(r("secure_options.message.email_code_sent"))
        }, w = async g => {
          await S(g), c.value = !1
        }, E = () => {
          c.value = !1
        };
      return (g, I) => {
        const P = ge,
          b = ce("I18nT"),
          z = H;
        return i(), d(L, null, [a(c) ? (i(), f(P, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: w,
          onReject: E
        })) : B("", !0), p(ue, {
          name: "opacity-spring-transition"
        }, {
          default: N(() => [a(v) ? (i(), d("div", lt, [p(b, {
            tag: "span",
            keypath: "secure_options.notification.email_not_verified"
          }, {
            email: N(() => [ee(C(a(l)), 1)]),
            resend: N(() => [y("a", {
              href: "#",
              onClick: I[0] || (I[0] = F(V => S(), ["prevent"]))
            }, C(("t" in g ? g.t : a(r))("secure_options.notification.email_not_verified_resend")), 1)]),
            _: 1
          }), y("button", {
            type: "button",
            class: "close reset",
            onClick: A
          }, [p(z, {
            name: "close-micro"
          })])])) : B("", !0)]),
          _: 1
        })], 64)
      }
    }
  }),
  ct = h(rt, [
    ["__scopeId", "data-v-d24568ac"]
  ]),
  ut = {
    class: "pages-index-banner-wallet"
  },
  _t = {
    key: 1,
    class: "connected"
  },
  dt = {
    class: "label"
  },
  mt = k({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(_) {
      const e = _,
        n = () => Ae(Se.MAIN).runConnectionFlow(),
        o = $(() => {
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
      return (t, s) => {
        const c = Q,
          l = ie;
        return i(), d("div", ut, [a(o).type === "skeleton" ? (i(), f(c, {
          key: 0,
          class: "skeleton"
        })) : a(o).type === "connected" ? (i(), d("div", _t, [y("div", dt, C(("t" in t ? t.t : a(r))("wallet.total_balance")), 1), (i(), f($e(a(o).balance), {
          class: "balance"
        }))])) : a(o).type === "connect" ? (i(), f(l, {
          key: 2,
          label: ("t" in t ? t.t : a(r))("wallet.connect.btn"),
          size: a(ae).SMALL,
          onClick: s[0] || (s[0] = u => n())
        }, null, 8, ["label", "size"])) : B("", !0)])
      }
    }
  }),
  pt = h(mt, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  bt = {
    class: "pages-tribe-external-index-page"
  },
  yt = k({
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
        o = t => J().main.tribeLogoClick(t);
      return (t, s) => {
        const c = Q,
          l = Ee,
          u = H,
          m = Qe;
        return i(), d("div", bt, [t.myTribe ? (i(), d(L, {
          key: 1
        }, [t.myTribe.type === "validating" ? (i(), f(l, {
          key: 0,
          to: a(e),
          class: "validating hex-center",
          onClick: s[0] || (s[0] = v => o(t.myTribe.type))
        }, {
          default: N(() => s[4] || (s[4] = [y("div", {
            class: "point center"
          }, null, -1)])),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_found" ? (i(), f(l, {
          key: 1,
          to: a(e),
          class: "join hex-center",
          onClick: s[1] || (s[1] = v => o(t.myTribe.type))
        }, {
          default: N(() => [p(u, {
            name: "plus",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "not_created" ? (i(), f(l, {
          key: 2,
          to: a(e),
          class: "error hex-center",
          onClick: s[2] || (s[2] = v => o(t.myTribe.type))
        }, {
          default: N(() => [p(u, {
            name: "warning",
            class: "icon center"
          })]),
          _: 1
        }, 8, ["to"])) : t.myTribe.type === "ok" ? (i(), f(l, {
          key: 3,
          to: a(n),
          class: "ok",
          onClick: s[3] || (s[3] = v => o(t.myTribe.type))
        }, {
          default: N(() => [p(m, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : B("", !0)], 64)) : (i(), f(c, {
          key: 0,
          class: "skeleton"
        }))])
      }
    }
  }),
  ft = h(yt, [
    ["__scopeId", "data-v-c8b8fd36"]
  ]),
  vt = {
    class: "field-label"
  },
  gt = {
    class: "field-value"
  },
  kt = k({
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
      const e = $(() => ({
        field: !0,
        "field--disabled": _.disabled
      }));
      return (n, o) => {
        const t = H;
        return i(), d("div", {
          class: le(a(e))
        }, [p(t, {
          name: n.icon,
          class: "field-icon"
        }, null, 8, ["name"]), y("div", vt, C(n.label), 1), y("div", gt, C(n.value), 1)], 2)
      }
    }
  }),
  ht = h(kt, [
    ["__scopeId", "data-v-d2541044"]
  ]),
  wt = k({
    __name: "BannerProfileModalEmailVerify",
    setup(_) {
      const {
        sendEmailAuthProviderVerification: e
      } = oe(), n = x(!1), o = async c => {
        const l = await e({
          captchaToken: c
        });
        if (!j(l)) {
          if (l.code === _e.Forbidden) {
            n.value = !0;
            return
          }
          K().error();
          return
        }
        K().success(r("secure_options.message.email_code_sent"))
      }, t = async c => {
        await o(c), n.value = !1
      }, s = () => {
        n.value = !1
      };
      return (c, l) => {
        const u = ge,
          m = ce("I18nT");
        return a(n) ? (i(), f(u, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: t,
          onReject: s
        })) : (i(), f(m, {
          key: 1,
          tag: "div",
          class: "caption",
          keypath: "secure_options.profile_modal.connect_email.not_verified_caption"
        }, {
          resend: N(() => [y("a", {
            href: "#",
            class: "link",
            onClick: l[0] || (l[0] = F(v => o(), ["prevent"]))
          }, C(("t" in c ? c.t : a(r))("secure_options.profile_modal.connect_email.not_verified_caption_resend")), 1)]),
          _: 1
        }))
      }
    }
  }),
  $t = h(wt, [
    ["__scopeId", "data-v-7dba19d1"]
  ]),
  At = k({
    __name: "BannerProfileModalEmailDisconnect",
    emits: ["confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const {
        disconnectEmailAuthProvider: n,
        fetchAuthProviders: o
      } = oe(), t = e, s = () => {
        const c = r("secure_options.profile_modal.disconnect_email.confirm.title"),
          l = r("secure_options.profile_modal.disconnect_email.confirm.description"),
          u = [{
            type: "cancel"
          }, {
            type: "default",
            label: r("secure_options.profile_modal.disconnect_email.confirm.btn"),
            onClick: async () => {
              const m = await n();
              if (!j(m)) {
                K().error();
                return
              }
              t("confirm:disconnect"), await o()
            }
          }];
        O().$webApp.popup(c, l, u)
      };
      return (c, l) => (i(), d("a", {
        href: "#",
        class: "disconnect",
        onClick: F(s, ["prevent"])
      }, C(("t" in c ? c.t : a(r))("secure_options.profile_modal.disconnect_email.btn")), 1))
    }
  }),
  St = h(At, [
    ["__scopeId", "data-v-91098b8b"]
  ]),
  Et = k({
    __name: "BannerProfileModalFooter",
    emits: ["click:connect-account", "confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const n = e,
        o = ne(),
        t = $(() => {
          var l;
          return ((l = o.value) == null ? void 0 : l.hasEmail) ?? !1
        }),
        s = $(() => {
          var l;
          return ((l = o.value) == null ? void 0 : l.isEmailVerified) ?? !1
        }),
        c = $(() => {
          var l;
          return ((l = o.value) == null ? void 0 : l.emailMasked) ?? ""
        });
      return (l, u) => {
        const m = ht,
          v = $t,
          A = St,
          S = ie;
        return a(t) ? (i(), d(L, {
          key: 0
        }, [p(m, {
          icon: "email",
          label: ("t" in l ? l.t : a(r))("secure_options.profile_modal.connect_email.label"),
          value: a(c),
          disabled: !a(s)
        }, null, 8, ["label", "value", "disabled"]), a(s) ? B("", !0) : (i(), d(L, {
          key: 0
        }, [p(v), p(A, {
          "onConfirm:disconnect": u[0] || (u[0] = w => n("confirm:disconnect"))
        })], 64))], 64)) : (i(), f(S, {
          key: 1,
          label: ("t" in l ? l.t : a(r))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: a(ae).LARGE,
          onClick: u[1] || (u[1] = w => n("click:connect-account"))
        }, null, 8, ["label", "size"]))
      }
    }
  }),
  Ct = k({
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
        } = Ce(),
        {
          secureOptionsModals: o
        } = se(),
        t = ne(),
        s = $(() => {
          var m;
          return ((m = n.getUser.value) == null ? void 0 : m.username) ?? "user"
        }),
        c = $(() => {
          var m;
          return ((m = t.value) == null ? void 0 : m.hasEmail) ?? !1
        }),
        l = () => {
          u(), o.main.show()
        },
        u = () => {
          e.value = !1
        };
      return (m, v) => {
        const A = ke,
          S = Et,
          w = Ze,
          E = Be,
          g = Xe;
        return i(), d(L, null, [p(E, {
          modelValue: e.value,
          "onUpdate:modelValue": v[0] || (v[0] = I => e.value = I)
        }, {
          default: N(() => [p(w, null, Ne({
            header: N(() => [p(A, {
              size: "96px",
              class: "avatar"
            })]),
            title: N(() => [ee(C(a(s)), 1)]),
            footer: N(() => [p(S, {
              "onClick:connectAccount": l,
              "onConfirm:disconnect": u
            })]),
            _: 2
          }, [a(c) ? void 0 : {
            name: "subTitle",
            fn: N(() => [ee(C(("t" in m ? m.t : a(r))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
            key: "0"
          }]), 1024)]),
          _: 1
        }, 8, ["modelValue"]), p(g)], 64)
      }
    }
  }),
  Nt = h(Ct, [
    ["__scopeId", "data-v-657ce5c0"]
  ]),
  Bt = {
    class: "pages-index-banner-profile-tribe"
  },
  Tt = k({
    __name: "BannerProfileTribe",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      const {
        isStaySecureFeatureEnabled: e
      } = se(), n = x(!1), o = () => {
        e.value && (n.value = !0)
      };
      return (t, s) => {
        const c = ke,
          l = pt,
          u = ft,
          m = Nt;
        return i(), d("div", Bt, [p(c, {
          small: "",
          onClick: o
        }), p(l, {
          wallet: t.wallet
        }, null, 8, ["wallet"]), p(u, {
          "my-tribe": t.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"]), p(m, {
          modelValue: a(n),
          "onUpdate:modelValue": s[0] || (s[0] = v => be(n) ? n.value = v : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  xt = h(Tt, [
    ["__scopeId", "data-v-67447d49"]
  ]),
  It = {
    class: "pages-index-banner-controls"
  },
  Rt = ["onClick"],
  Pt = {
    class: "image-container"
  },
  Mt = {
    class: "title"
  },
  Lt = k({
    __name: "BannerControls",
    setup(_) {
      const e = $(() => [{
        title: r("memepad.explore.launch.button_text"),
        image: "index/banner/controls/launch-token",
        imageType: "svg",
        onClick: () => M().push({
          name: "memepad-new",
          query: {
            memepadFrom: te.MAIN,
            memepadNewFrom: ye.MAIN
          }
        })
      }, {
        title: r("tabs.earn"),
        image: "index/banner/controls/earn",
        imageType: "svg",
        onClick: () => M().push({
          name: "tasks"
        })
      }, {
        title: r("base.trading_bot"),
        image: "index/banner/controls/trading-bot",
        imageType: "svg",
        onClick: () => {
          J().main.controlsTradingBotClick(), Y().openTradingBot()
        }
      }]);
      return (n, o) => {
        const t = he;
        return i(), d("div", It, [(i(!0), d(L, null, X(a(e), (s, c) => (i(), d("button", {
          key: c,
          class: "control reset",
          onClick: l => s.onClick()
        }, [y("span", Pt, [p(t, {
          name: s.image,
          type: s.imageType,
          class: "image"
        }, null, 8, ["name", "type"])]), y("span", Mt, C(s.title), 1)], 8, Rt))), 128))])
      }
    }
  }),
  zt = h(Lt, [
    ["__scopeId", "data-v-c1c5e80e"]
  ]),
  Ot = {
    class: "pages-index-banner"
  },
  Dt = k({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      return (e, n) => {
        const o = ct,
          t = xt,
          s = zt;
        return i(), d("div", Ot, [p(o), p(t, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), p(s, {
          class: "controls"
        })])
      }
    }
  }),
  Kt = h(Dt, [
    ["__scopeId", "data-v-2dd935c4"]
  ]),
  Vt = {
    class: "pages-index-daily-reward"
  },
  Ft = {
    key: 1,
    class: "widget has-radius"
  },
  jt = {
    class: "compose"
  },
  Ut = {
    class: "title"
  },
  Gt = {
    key: 0,
    class: "subtitle"
  },
  Yt = k({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(_) {
      const e = _,
        n = K(),
        o = (s, c) => async () => {
          const l = await e.dailyRewardClaim();
          Pe(l, {
            Err: () => n.error(r("base.claim_error")),
            Ok: u => {
              s === Z.RESTORE && n.success(r("daily_reward.streak_restored", {
                days: c
              })), n.success(`You’ve got ${Me(u.claimedReward.points)} BP`), Y().makeConfetti(), J().main.dailyRewardClick({
                points: u.claimedReward.points.toNumber()
              })
            }
          })
        }, t = $(() => {
          if (e.dailyReward === void 0) return;
          const s = e.dailyReward.currentStreakDays,
            c = `${s}-${r("base.n.days",s)}`;
          if (e.dailyReward.claim === Z.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: r("daily_reward.missed"),
            subtitle: W(r("daily_reward.restore_current_streak", {
              days: c
            })),
            claim: {
              label: r("base.restore"),
              white: !0,
              can: !0,
              fn: o(e.dailyReward.claim, c)
            }
          };
          const l = (() => {
            const m = Te().ms100ticker.value;
            if (!m) return xe();
            const v = Ie(e.dailyReward.canClaimAt - m, "letters");
            return W(r("base.claim_next_in", {
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
              can: e.dailyReward.claim !== Z.UNAVAILABLE,
              fn: o(e.dailyReward.claim, c)
            }
          }
        });
      return (s, c) => {
        const l = Q,
          u = he,
          m = nt;
        return i(), d("div", Vt, [a(t) ? (i(), d("div", Ft, [p(u, {
          name: a(t).icon,
          class: "icon"
        }, null, 8, ["name"]), y("div", jt, [y("div", Ut, C(a(t).title), 1), ("isOk" in s ? s.isOk : a(j))(a(t).subtitle) ? (i(), d("div", Gt, C(a(t).subtitle.data), 1)) : (i(), f(l, {
          key: 1,
          type: a(Re).SECONDARY,
          class: "skeleton subtitle"
        }, null, 8, ["type"]))]), a(t).claim ? (i(), f(m, {
          key: 0,
          label: a(t).claim.label,
          "can-claim": a(t).claim.can,
          "claim-fn": a(t).claim.fn,
          style: q(a(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : B("", !0)])) : (i(), f(l, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  Wt = h(Yt, [
    ["__scopeId", "data-v-616b8ac4"]
  ]),
  qt = ["src"],
  Ht = ["src"],
  Jt = {
    class: "content"
  },
  Xt = {
    class: "inner"
  },
  Qt = ["innerHTML"],
  Zt = {
    class: "icon-wrapper"
  },
  en = ["src"],
  tn = k({
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
        const o = et,
          t = H,
          s = fe;
        return i(), d("div", {
          class: le(["pages-index-new-season-banner-card", `size-${e.textSize}`])
        }, [y("img", {
          src: ("imgResolver" in e ? e.imgResolver : a(R))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, qt), n[0] || (n[0] = y("div", {
          class: "bg"
        }, null, -1)), y("img", {
          src: ("imgResolver" in e ? e.imgResolver : a(R))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, Ht), y("div", Jt, [y("div", Xt, [y("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Qt), e.hideButton ? B("", !0) : (i(), f(o, {
          key: 0,
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"]))]), y("div", Zt, [e.icon ? (i(), f(t, {
          key: 0,
          name: e.icon,
          style: q({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 8, ["name", "style"])) : e.lottie ? (i(), f(s, {
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
        }, null, 12, en)) : B("", !0)])])], 2)
      }
    }
  }),
  nn = h(tn, [
    ["__scopeId", "data-v-c254a548"]
  ]),
  on = {
    class: "kit-stories-src-counter"
  },
  sn = k({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(_) {
      me(o => ({
        "9db269f8": o.count
      }));
      const e = _,
        n = $(() => [...new Array(e.count)].map((o, t) => t < e.current ? {
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
      return (o, t) => (i(), d("div", on, [(i(!0), d(L, null, X(a(n), s => (i(), d("div", {
        key: s.key,
        class: le(["progress", [`is-state-${s.state}`]]),
        style: q(s.state === "current" ? {
          "background-position-x": `-${s.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  an = h(sn, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  ln = {
    class: "kit-stories-shared-background"
  },
  rn = ["poster", "src"],
  cn = ["src"],
  un = k({
    __name: "Background",
    props: {
      background: {}
    },
    setup(_) {
      return (e, n) => {
        const o = st;
        return i(), d("div", ln, [e.background.type === "video" ? (i(), d("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, rn)) : e.background.type === "image" ? (i(), d("img", {
          key: 1,
          src: e.background.src
        }, null, 8, cn)) : e.background.type === "stars" ? (i(), f(o, {
          key: 2,
          class: "stars"
        })) : B("", !0)])
      }
    }
  }),
  _n = h(un, [
    ["__scopeId", "data-v-acfd9f44"]
  ]),
  dn = {
    class: "kit-stories-layouts-title-subtitle"
  },
  mn = {
    class: "title"
  },
  pn = {
    class: "subtitle"
  },
  bn = k({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => (i(), d("div", dn, [y("div", mn, C(e.layout.title), 1), y("div", pn, C(e.layout.subtitle), 1)]))
    }
  }),
  yn = h(bn, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  fn = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  vn = {
    class: "animoji-container"
  },
  gn = {
    class: "content-container"
  },
  kn = {
    class: "title"
  },
  hn = {
    class: "subtitle"
  },
  wn = k({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => {
        const o = fe;
        return i(), d("div", fn, [y("div", vn, [p(o, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), y("div", gn, [y("div", kn, C(e.layout.title), 1), y("div", hn, C(e.layout.subtitle), 1)])])
      }
    }
  }),
  $n = h(wn, [
    ["__scopeId", "data-v-4b8a88c8"]
  ]),
  An = k({
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
        o = e,
        t = $(() => n.button.type === "next" ? n.isLast ? r("base.close") : r("base.next") : n.button.label),
        s = () => {
          if (n.button.type === "next") O().$webApp.HapticFeedback.impactOccurred("light"), o("next");
          else if (n.button.type === "local") M().push(n.button.link);
          else if (n.button.type === "external") O().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") O().$webApp.openTelegramLink(n.button.link);
          else throw n.button, de("Unknown button type")
        };
      return (c, l) => {
        const u = ie;
        return i(), f(u, {
          label: a(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: a(ae).LARGE,
          onClick: l[0] || (l[0] = F(m => s(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  Sn = h(An, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  En = {
    class: "kit-stories-src-story"
  },
  Cn = {
    class: "content"
  },
  Nn = {
    class: "layout"
  },
  Bn = {
    class: "button"
  },
  Tn = k({
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
        const o = _n,
          t = yn,
          s = $n,
          c = Sn;
        return i(), d("div", En, [p(o, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), y("div", Cn, [y("div", Nn, [e.story.layout.type === "TitleSubtitle" ? (i(), f(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), f(s, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : B("", !0)]), y("div", Bn, [e.story.button ? (i(), f(c, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = l => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : B("", !0)])])])
      }
    }
  }),
  xn = h(Tn, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  In = (_, e) => {
    const n = _,
      o = x(_),
      t = $(() => 1 - o.value / n);
    let s = 0,
      c;
    const l = () => {
        s = Date.now(), c = ze(() => {
          const A = Date.now(),
            S = A - s;
          s = A, o.value = Math.max(o.value - S, 0), o.value <= 0 && (u(), e())
        }, 100)
      },
      u = () => {
        c && (clearInterval(c), c = void 0)
      },
      m = () => {
        if (c) {
          u();
          const A = Date.now() - s;
          o.value = Math.max(o.value - A, 0)
        }
      },
      v = () => l();
    return l(), {
      timeToExpire: Le(o),
      progress: t,
      destroy: u,
      pause: m,
      resume: v
    }
  },
  Rn = 150,
  Pn = k({
    __name: "Stories",
    props: {
      stories: {}
    },
    emits: ["close"],
    setup(_, {
      emit: e
    }) {
      const n = _,
        o = e,
        t = x(0),
        s = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, m()) : o("close")
        },
        c = () => {
          t.value > 0 ? (t.value -= 1, m()) : o("close")
        },
        l = () => In(5e3, s),
        u = Oe(l()),
        m = () => {
          u.value.destroy(), u.value = l()
        },
        v = x(),
        A = De(),
        S = x(!1),
        w = x(!1),
        E = () => {
          S.value = !1, w.value = !1, A.set(() => {
            u.value.pause(), S.value = !0, w.value = !0
          }, Rn)
        },
        g = () => {
          A.destroy(), S.value && (u.value.resume(), S.value = !1)
        },
        I = P => {
          if (S.value || w.value || !v.value) return;
          const {
            width: b,
            left: z
          } = v.value.getBoundingClientRect(), V = P.clientX - z, U = b / 3;
          V < U ? c() : V > U * 2 && s()
        };
      return ve(() => {
        A.destroy(), u.value.destroy()
      }), (P, b) => {
        const z = an,
          V = xn,
          U = at;
        return i(), f(U, {
          "no-padding": "",
          "no-scroll": ""
        }, {
          default: N(() => [y("div", {
            ref_key: "storiesRef",
            ref: v,
            class: "kit-stories-src-stories",
            onPointerdown: b[1] || (b[1] = F(D => E(), ["prevent"])),
            onPointerup: b[2] || (b[2] = D => g()),
            onPointercancel: b[3] || (b[3] = D => g()),
            onPointerleave: b[4] || (b[4] = D => g()),
            onClick: b[5] || (b[5] = D => I(D))
          }, [p(z, {
            current: a(t),
            "current-progress": a(u).progress.value,
            count: P.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (i(), f(V, {
            key: a(t),
            story: P.stories[a(t)],
            "is-last": a(t) === P.stories.length - 1,
            onNext: b[0] || (b[0] = D => s())
          }, null, 8, ["story", "is-last"]))], 544)]),
          _: 1
        })
      }
    }
  }),
  Mn = h(Pn, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  Ln = k({
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
      const e = pe(_, "modelValue");
      return (n, o) => {
        const t = Mn;
        return i(), f(ue, {
          name: "opacity-transition"
        }, {
          default: N(() => [e.value ? (i(), f(t, {
            key: 0,
            stories: n.set.stories,
            class: "kit-stories",
            onClose: o[0] || (o[0] = s => e.value = !1)
          }, null, 8, ["stories"])) : B("", !0)]),
          _: 1
        })
      }
    }
  }),
  zn = h(Ln, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  we = () => {
    const _ = re("$Ult9HcdMR0"),
      e = re(() => Ve(async () => {
        const t = await Fe.getTgeEligibility();
        return j(t) ? W(!0) : t.err && t.code === 403 ? W(!1) : t
      }, t => {
        _.value = t
      }, 6e4), "$GbrQr2MFk7");
    return {
      _flow: {
        init: async () => {
          await e.value.exec()
        },
        destroy: () => {
          e.value.destroy(), _.value = void 0
        }
      },
      available: $(() => _.value)
    }
  },
  On = {
    class: "pages-index-new-season-banner"
  },
  Dn = {
    class: "progress"
  },
  Kn = k({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(_) {
      const e = _,
        n = M(),
        o = Y(),
        t = J(),
        s = O().$webApp,
        l = [...we().available.value ? [{
          title: r("index.banners.tge.title"),
          buttonLabel: r("index.banners.tge.button_label"),
          onButtonClick: () => {
            M().push({
              name: "tge"
            })
          },
          gif: R("index/banner/tge", "gif"),
          imageSize: 105,
          analyticsName: T.TGE
        }] : [], {
          title: r("index.banners.bman.title"),
          buttonLabel: r("index.banners.bman.button_label"),
          onButtonClick: () => {
            M().push({
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
          gif: R("index/banner/bman"),
          imageSize: 80,
          analyticsName: T.BMAN
        }, {
          title: r("index.banners.babydoge.title"),
          buttonLabel: r("index.banners.babydoge.button_label"),
          onButtonClick: () => {
            M().push({
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
          gif: R("index/banner/babydoge", "gif"),
          imageSize: 92,
          analyticsName: T.BABYDOGE
        }, {
          title: r("index.banners.trade_now.title"),
          buttonLabel: r("index.banners.trade_now.button_label"),
          onButtonClick: () => {
            o.openTradingBot()
          },
          icon: "ton-logo",
          imageSize: 64,
          analyticsName: T.TRADE_NOW
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
          analyticsName: T.EARN_NOW
        }, {
          title: r("index.banners.season_2.title"),
          buttonLabel: r("index.banners.season_2.button_label"),
          onButtonClick: () => {
            u.value = !0
          },
          lottie: "animations/Moon",
          imageSize: 96,
          analyticsName: T.SEASON_2
        }, {
          title: r("index.banners.blum_x.title"),
          buttonLabel: r("index.banners.blum_x.button_label"),
          onButtonClick: () => {
            Y().openBlumTwitter()
          },
          gif: R("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: T.BLUM_X
        }, {
          title: r("index.banners.blum_academy.title"),
          buttonLabel: r("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            s.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: R("index/banner/edu", "gif"),
          imageSize: 102,
          analyticsName: T.BLUM_ACADEMY
        }, {
          title: r("index.banners.create_memecoin.title"),
          buttonLabel: r("index.banners.create_memecoin.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-new",
              query: {
                memepadFrom: te.MAIN_PAGE_BANNER_CREATE_MEMECOIN,
                memepadNewFrom: ye.MAIN_PAGE_BANNER_CREATE_MEMECOIN
              }
            })
          },
          gif: R("index/banner/memecoin", "gif"),
          imageSize: 118,
          analyticsName: T.CREATE_MEMECOIN
        }, {
          title: r("index.banners.friends.title"),
          buttonLabel: r("index.banners.friends.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens"
            })
          },
          gif: R("index/banner/comission", "gif"),
          imageSize: 100,
          analyticsName: T.FRIENDS
        }, {
          title: r("index.banners.trade_memecoins.title"),
          buttonLabel: r("index.banners.trade_memecoins.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad",
              query: {
                memepadFrom: te.MAIN_PAGE_BANNER_TRADE_MEMECOIN
              }
            })
          },
          gif: R("index/banner/riskreward", "gif"),
          imageSize: 102,
          analyticsName: T.TRADE_MEMECOIN
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
          gif: R("index/banner/leaderboard", "gif"),
          imageSize: 102,
          analyticsName: T.LEADERBOARDS
        }].map((w, E) => ({
          ...w,
          onButtonClick: () => {
            t.main.bannerClick({
              position: E + 1,
              bannerName: w.analyticsName
            }), w.onButtonClick()
          }
        })),
        u = x(e.value.showOnStart);
      Ue(u, w => w && e.value.onShowed(), {
        immediate: !0
      });
      const m = x(0),
        v = x(null),
        A = (w, E = "smooth") => {
          var g;
          (g = v.value) == null || g.scrollTo({
            left: w * window.innerWidth + (m.value > w ? -1 : 1),
            behavior: E
          })
        },
        S = Ye(() => {
          if (!v.value) return;
          const w = v.value.children[0].offsetWidth + 10,
            E = v.value.scrollLeft,
            g = Math.round(E / w);
          m.value = g
        }, 50).debouncedFunction;
      return Ge(() => {
        A(m.value, "instant")
      }), (w, E) => {
        const g = nn,
          I = ot,
          P = zn;
        return i(), d("div", On, [y("div", {
          ref_key: "listEl",
          ref: v,
          class: "list",
          onScroll: E[0] || (E[0] = (...b) => a(S) && a(S)(...b)),
          onTouchmove: E[1] || (E[1] = (...b) => a(S) && a(S)(...b))
        }, [(i(!0), d(L, null, X(a(l), (b, z) => (i(), d("div", {
          key: b.title,
          class: "item"
        }, [p(g, {
          index: z,
          icon: b.icon,
          lottie: b.lottie,
          gif: b.gif,
          title: b.title,
          "button-label": b.buttonLabel,
          "on-button-click": b.onButtonClick,
          "image-size": b.imageSize,
          "analytics-name": b.analyticsName,
          "hide-button": b.hideButton,
          "text-size": b.textSize
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name", "hide-button", "text-size"])]))), 128))], 544), y("div", Dn, [a(l).length > 1 ? (i(), f(I, {
          key: 0,
          "model-value": a(m),
          count: a(l).length,
          timer: 15e3,
          "onUpdate:modelValue": A
        }, null, 8, ["model-value", "count"])) : B("", !0)]), p(P, {
          modelValue: a(u),
          "onUpdate:modelValue": E[2] || (E[2] = b => be(u) ? u.value = b : null),
          set: w.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Vn = h(Kn, [
    ["__scopeId", "data-v-cd7410bc"]
  ]),
  Fn = {
    class: "pages-wallet-asset-skeleton"
  },
  jn = {
    class: "content"
  },
  Un = k({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(_) {
      return (e, n) => {
        const o = Q;
        return i(), d("div", Fn, [(i(!0), d(L, null, X(e.count, t => (i(), d("div", {
          key: t,
          class: "skeleton"
        }, [p(o, {
          rounded: "",
          class: "logo"
        }), y("div", jn, [p(o, {
          class: "title"
        }), p(o, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  Gn = h(Un, [
    ["__scopeId", "data-v-26805825"]
  ]),
  Yn = {
    class: "pages-index-points"
  },
  Wn = k({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(_) {
      const e = $(() => M().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (n, o) => {
        const t = it,
          s = Gn,
          c = tt;
        return i(), d("div", Yn, [p(t, {
          label: ("t" in n ? n.t : a(r))("wallet.points.title"),
          "full-path": a(e)
        }, null, 8, ["label", "full-path"]), n.points ? (i(), f(c, {
          key: 1,
          points: n.points
        }, null, 8, ["points"])) : (i(), f(s, {
          key: 0,
          count: 2
        }))])
      }
    }
  }),
  qn = h(Wn, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  Hn = () => {
    const _ = We(),
      e = qe(),
      n = He(),
      o = $(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      s = {
        set: Jn(),
        showOnStart: !O().$webApp.storage.local.get(t),
        onShowed: () => {
          O().$webApp.storage.local.set(t, "true")
        }
      },
      c = $(() => {
        const l = _.pointSymbols.value,
          u = _.dropSymbols.value;
        if (!(!l || !u) && !(!l.mp || !l.bp)) return [l.mp, l.bp, ...u]
      });
    return {
      dailyReward: n,
      myTribe: o,
      season2Stories: s,
      wallet: $(() => _.wallet.value),
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
  Qn = k({
    __name: "index",
    setup(_) {
      const e = Hn(),
        n = we(),
        o = () => {
          n._flow.init()
        },
        t = () => {
          n._flow.destroy()
        };
      return o(), ve(t), (s, c) => {
        const l = Je,
          u = Kt,
          m = Wt,
          v = Vn,
          A = qn;
        return i(), d("div", Xn, [a(n).available.value === void 0 ? (i(), f(l, {
          key: 0
        })) : (i(), d(L, {
          key: 1
        }, [p(u, {
          "my-tribe": a(e).myTribe.value,
          wallet: a(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), p(m, {
          "daily-reward": a(e).dailyReward.reward.value,
          "daily-reward-claim": a(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), p(v, {
          value: a(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), p(A, {
          points: a(e).walletAssets.value
        }, null, 8, ["points"])], 64))])
      }
    }
  }),
  go = h(Qn, [
    ["__scopeId", "data-v-bcb1875d"]
  ]);
export {
  go as
  default
};