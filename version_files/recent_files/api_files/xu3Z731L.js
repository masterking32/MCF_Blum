import {
  _ as ce,
  a as Ae
} from "./Bz7UuiNV.js";
import {
  d as k,
  ar as ne,
  as as oe,
  at as se,
  I as x,
  j as A,
  a7 as ue,
  o as i,
  c as m,
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
  av as _e,
  F as L,
  am as j,
  aw as de,
  ak as K,
  _ as H,
  f as h,
  ag as me,
  ax as $e,
  a9 as ae,
  ay as Se,
  az as Ee,
  x as ie,
  ao as M,
  a5 as J,
  U as Ce,
  aA as pe,
  n as le,
  h as O,
  A as be,
  k as Ne,
  aB as Be,
  aa as Te,
  p as ye,
  aC as te,
  aD as fe,
  aj as Y,
  q as X,
  aE as Z,
  ai as W,
  $ as xe,
  aF as Ie,
  a0 as Re,
  aG as Pe,
  aH as q,
  aI as Me,
  a1 as Le,
  a8 as R,
  aJ as ve,
  aK as ze,
  aL as Oe,
  aM as De,
  aN as Ke,
  af as ge,
  a4 as Ve,
  aO as re,
  aP as Fe,
  ah as je,
  aQ as T,
  aR as G,
  T as Ue,
  J as Ge,
  K as Ye,
  N as We,
  ab as qe,
  aS as He,
  aT as Je
} from "./i5EetP0C.js";
import {
  _ as ke
} from "./CaSS9yYS.js";
import {
  _ as Q
} from "./D67_J7zO.js";
import {
  _ as Xe
} from "./CQ8v_u6s.js";
import {
  _ as Qe
} from "./BcnAc06K.js";
import {
  _ as he,
  a as Ze,
  b as et
} from "./Cimw8a56.js";
import {
  _ as tt
} from "./Bh9Z6XXr.js";
import {
  _ as nt
} from "./CG4ky0Zp.js";
import {
  _ as ot
} from "./DEHtcEuz.js";
import {
  _ as st
} from "./CB3uqAwb.js";
import {
  _ as at
} from "./B4UpDkIW.js";
import "./ByF7UOeu.js";
import "./D1WmgHnf.js";
import "./CV6SxyWZ.js";
import "./Uk03XfPy.js";
import "./FFrEhLZa.js";
import "./B8c8iVNp.js";
import "./ELmYgFHb.js";
const it = {
    key: 0,
    class: "notification"
  },
  lt = k({
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
        l = A(() => {
          var g;
          return ((g = e.value) == null ? void 0 : g.emailMasked) ?? ""
        }),
        u = A(() => {
          var g;
          return ((g = e.value) == null ? void 0 : g.hasEmail) ?? !1
        }),
        d = A(() => {
          var g;
          return ((g = e.value) == null ? void 0 : g.isEmailVerified) ?? !1
        }),
        v = A(() => s.value && u.value && !d.value && !o() && !c.value),
        S = () => {
          s.value = !1, t()
        },
        $ = async g => {
          const I = await n({
            captchaToken: g
          });
          if (!j(I)) {
            if (I.code === de.Forbidden) {
              c.value = !0;
              return
            }
            K().error();
            return
          }
          S(), K().success(r("secure_options.message.email_code_sent"))
        }, w = async g => {
          await $(g), c.value = !1
        }, E = () => {
          c.value = !1
        };
      return (g, I) => {
        const P = ce,
          b = ue("I18nT"),
          z = H;
        return i(), m(L, null, [a(c) ? (i(), f(P, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: w,
          onReject: E
        })) : B("", !0), p(_e, {
          name: "opacity-spring-transition"
        }, {
          default: N(() => [a(v) ? (i(), m("div", it, [p(b, {
            tag: "span",
            keypath: "secure_options.notification.email_not_verified"
          }, {
            email: N(() => [ee(C(a(l)), 1)]),
            resend: N(() => [y("a", {
              href: "#",
              onClick: I[0] || (I[0] = F(V => $(), ["prevent"]))
            }, C(("t" in g ? g.t : a(r))("secure_options.notification.email_not_verified_resend")), 1)]),
            _: 1
          }), y("button", {
            type: "button",
            class: "close reset",
            onClick: S
          }, [p(z, {
            name: "close-micro"
          })])])) : B("", !0)]),
          _: 1
        })], 64)
      }
    }
  }),
  rt = h(lt, [
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
  dt = k({
    __name: "BannerWallet",
    props: {
      wallet: {}
    },
    setup(_) {
      const e = _,
        n = () => Se(Ee.MAIN).runConnectionFlow(),
        o = A(() => {
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
        const c = Q,
          l = ie;
        return i(), m("div", ct, [a(o).type === "skeleton" ? (i(), f(c, {
          key: 0,
          class: "skeleton"
        })) : a(o).type === "connected" ? (i(), m("div", ut, [y("div", _t, C(("t" in t ? t.t : a(r))("wallet.total_balance")), 1), (i(), f($e(a(o).balance), {
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
  mt = h(dt, [
    ["__scopeId", "data-v-6a4bcf9f"]
  ]),
  pt = {
    class: "pages-tribe-external-index-page"
  },
  bt = k({
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
          l = Ce,
          u = H,
          d = Xe;
        return i(), m("div", pt, [t.myTribe ? (i(), m(L, {
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
          default: N(() => [p(d, {
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
  yt = h(bt, [
    ["__scopeId", "data-v-c8b8fd36"]
  ]),
  ft = {
    class: "field-label"
  },
  vt = {
    class: "field-value"
  },
  gt = k({
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
      pe(n => ({
        bc7bb12e: n.height,
        "0b714ec0": n.borderRadius,
        "4280b9dc": n.iconSize
      }));
      const e = A(() => ({
        field: !0,
        "field--disabled": _.disabled
      }));
      return (n, o) => {
        const t = H;
        return i(), m("div", {
          class: le(a(e))
        }, [p(t, {
          name: n.icon,
          class: "field-icon"
        }, null, 8, ["name"]), y("div", ft, C(n.label), 1), y("div", vt, C(n.value), 1)], 2)
      }
    }
  }),
  kt = h(gt, [
    ["__scopeId", "data-v-d2541044"]
  ]),
  ht = k({
    __name: "BannerProfileModalEmailVerify",
    setup(_) {
      const {
        sendEmailAuthProviderVerification: e
      } = oe(), n = x(!1), o = async c => {
        const l = await e({
          captchaToken: c
        });
        if (!j(l)) {
          if (l.code === de.Forbidden) {
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
        const u = ce,
          d = ue("I18nT");
        return a(n) ? (i(), f(u, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: t,
          onReject: s
        })) : (i(), f(d, {
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
  wt = h(ht, [
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
              const d = await n();
              if (!j(d)) {
                K().error();
                return
              }
              t("confirm:disconnect"), await o()
            }
          }];
        O().$webApp.popup(c, l, u)
      };
      return (c, l) => (i(), m("a", {
        href: "#",
        class: "disconnect",
        onClick: F(s, ["prevent"])
      }, C(("t" in c ? c.t : a(r))("secure_options.profile_modal.disconnect_email.btn")), 1))
    }
  }),
  $t = h(At, [
    ["__scopeId", "data-v-91098b8b"]
  ]),
  St = k({
    __name: "BannerProfileModalFooter",
    emits: ["click:connect-account", "confirm:disconnect"],
    setup(_, {
      emit: e
    }) {
      const n = e,
        o = ne(),
        t = A(() => {
          var l;
          return ((l = o.value) == null ? void 0 : l.hasEmail) ?? !1
        }),
        s = A(() => {
          var l;
          return ((l = o.value) == null ? void 0 : l.isEmailVerified) ?? !1
        }),
        c = A(() => {
          var l;
          return ((l = o.value) == null ? void 0 : l.emailMasked) ?? ""
        });
      return (l, u) => {
        const d = kt,
          v = wt,
          S = $t,
          $ = ie;
        return a(t) ? (i(), m(L, {
          key: 0
        }, [p(d, {
          icon: "email",
          label: ("t" in l ? l.t : a(r))("secure_options.profile_modal.connect_email.label"),
          value: a(c),
          disabled: !a(s)
        }, null, 8, ["label", "value", "disabled"]), a(s) ? B("", !0) : (i(), m(L, {
          key: 0
        }, [p(v), p(S, {
          "onConfirm:disconnect": u[0] || (u[0] = w => n("confirm:disconnect"))
        })], 64))], 64)) : (i(), f($, {
          key: 1,
          label: ("t" in l ? l.t : a(r))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: a(ae).LARGE,
          onClick: u[1] || (u[1] = w => n("click:connect-account"))
        }, null, 8, ["label", "size"]))
      }
    }
  }),
  Et = k({
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
      const e = be(_, "modelValue"),
        {
          getters: n
        } = Ne(),
        {
          secureOptionsModals: o
        } = se(),
        t = ne(),
        s = A(() => {
          var d;
          return ((d = n.getUser.value) == null ? void 0 : d.username) ?? "user"
        }),
        c = A(() => {
          var d;
          return ((d = t.value) == null ? void 0 : d.hasEmail) ?? !1
        }),
        l = () => {
          u(), o.main.show()
        },
        u = () => {
          e.value = !1
        };
      return (d, v) => {
        const S = ke,
          $ = St,
          w = Qe,
          E = Te,
          g = Ae;
        return i(), m(L, null, [p(E, {
          modelValue: e.value,
          "onUpdate:modelValue": v[0] || (v[0] = I => e.value = I)
        }, {
          default: N(() => [p(w, null, Be({
            header: N(() => [p(S, {
              size: "96px",
              class: "avatar"
            })]),
            title: N(() => [ee(C(a(s)), 1)]),
            footer: N(() => [p($, {
              "onClick:connectAccount": l,
              "onConfirm:disconnect": u
            })]),
            _: 2
          }, [a(c) ? void 0 : {
            name: "subTitle",
            fn: N(() => [ee(C(("t" in d ? d.t : a(r))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
            key: "0"
          }]), 1024)]),
          _: 1
        }, 8, ["modelValue"]), p(g)], 64)
      }
    }
  }),
  Ct = h(Et, [
    ["__scopeId", "data-v-657ce5c0"]
  ]),
  Nt = {
    class: "pages-index-banner-profile-tribe"
  },
  Bt = k({
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
          l = mt,
          u = yt,
          d = Ct;
        return i(), m("div", Nt, [p(c, {
          small: "",
          onClick: o
        }), p(l, {
          wallet: t.wallet
        }, null, 8, ["wallet"]), p(u, {
          "my-tribe": t.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"]), p(d, {
          modelValue: a(n),
          "onUpdate:modelValue": s[0] || (s[0] = v => ye(n) ? n.value = v : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  Tt = h(Bt, [
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
  Mt = k({
    __name: "BannerControls",
    setup(_) {
      const e = A(() => [{
        title: r("memepad.explore.launch.button_text"),
        image: "index/banner/controls/launch-token",
        imageType: "svg",
        onClick: () => M().push({
          name: "memepad-new",
          query: {
            memepadFrom: te.MAIN,
            memepadNewFrom: fe.MAIN
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
        return i(), m("div", xt, [(i(!0), m(L, null, X(a(e), (s, c) => (i(), m("button", {
          key: c,
          class: "control reset",
          onClick: l => s.onClick()
        }, [y("span", Rt, [p(t, {
          name: s.image,
          type: s.imageType,
          class: "image"
        }, null, 8, ["name", "type"])]), y("span", Pt, C(s.title), 1)], 8, It))), 128))])
      }
    }
  }),
  Lt = h(Mt, [
    ["__scopeId", "data-v-c1c5e80e"]
  ]),
  zt = {
    class: "pages-index-banner"
  },
  Ot = k({
    __name: "Banner",
    props: {
      myTribe: {},
      wallet: {}
    },
    setup(_) {
      return (e, n) => {
        const o = rt,
          t = Tt,
          s = Lt;
        return i(), m("div", zt, [p(o), p(t, {
          "my-tribe": e.myTribe,
          wallet: e.wallet,
          class: "profile"
        }, null, 8, ["my-tribe", "wallet"]), p(s, {
          class: "controls"
        })])
      }
    }
  }),
  Dt = h(Ot, [
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
  Gt = k({
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
          Me(l, {
            Err: () => n.error(r("base.claim_error")),
            Ok: u => {
              s === Z.RESTORE && n.success(r("daily_reward.streak_restored", {
                days: c
              })), n.success(`You’ve got ${Le(u.claimedReward.points)} BP`), Y().makeConfetti(), J().main.dailyRewardClick({
                points: u.claimedReward.points.toNumber()
              })
            }
          })
        }, t = A(() => {
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
            const d = xe().ms100ticker.value;
            if (!d) return Ie();
            const v = Re(e.dailyReward.canClaimAt - d, "letters");
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
          d = tt;
        return i(), m("div", Kt, [a(t) ? (i(), m("div", Vt, [p(u, {
          name: a(t).icon,
          class: "icon"
        }, null, 8, ["name"]), y("div", Ft, [y("div", jt, C(a(t).title), 1), ("isOk" in s ? s.isOk : a(j))(a(t).subtitle) ? (i(), m("div", Ut, C(a(t).subtitle.data), 1)) : (i(), f(l, {
          key: 1,
          type: a(Pe).SECONDARY,
          class: "skeleton subtitle"
        }, null, 8, ["type"]))]), a(t).claim ? (i(), f(d, {
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
  Yt = h(Gt, [
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
  en = k({
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
        const o = Ze,
          t = H,
          s = ve;
        return i(), m("div", {
          class: le(["pages-index-new-season-banner-card", `size-${e.textSize}`])
        }, [y("img", {
          src: ("imgResolver" in e ? e.imgResolver : a(R))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, Wt), n[0] || (n[0] = y("div", {
          class: "bg"
        }, null, -1)), y("img", {
          src: ("imgResolver" in e ? e.imgResolver : a(R))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, qt), y("div", Ht, [y("div", Jt, [y("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Xt), e.hideButton ? B("", !0) : (i(), f(o, {
          key: 0,
          type: "white",
          label: e.buttonLabel,
          state: "default",
          class: "btn",
          onClick: e.onButtonClick
        }, null, 8, ["label", "onClick"]))]), y("div", Qt, [e.icon ? (i(), f(t, {
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
        }, null, 8, ["name", "size"])) : e.gif ? (i(), m("img", {
          key: 2,
          src: e.gif,
          style: q({
            width: `${e.imageSize}px`,
            height: `${e.imageSize}px`
          })
        }, null, 12, Zt)) : B("", !0)])])], 2)
      }
    }
  }),
  tn = h(en, [
    ["__scopeId", "data-v-c254a548"]
  ]),
  nn = {
    class: "kit-stories-src-counter"
  },
  on = k({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(_) {
      pe(o => ({
        "9db269f8": o.count
      }));
      const e = _,
        n = A(() => [...new Array(e.count)].map((o, t) => t < e.current ? {
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
      return (o, t) => (i(), m("div", nn, [(i(!0), m(L, null, X(a(n), s => (i(), m("div", {
        key: s.key,
        class: le(["progress", [`is-state-${s.state}`]]),
        style: q(s.state === "current" ? {
          "background-position-x": `-${s.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  sn = h(on, [
    ["__scopeId", "data-v-4fbed44d"]
  ]),
  an = {
    class: "kit-stories-shared-background"
  },
  ln = ["poster", "src"],
  rn = ["src"],
  cn = k({
    __name: "Background",
    props: {
      background: {}
    },
    setup(_) {
      return (e, n) => {
        const o = ot;
        return i(), m("div", an, [e.background.type === "video" ? (i(), m("video", {
          key: 0,
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: e.background.preview,
          src: e.background.src
        }, null, 8, ln)) : e.background.type === "image" ? (i(), m("img", {
          key: 1,
          src: e.background.src
        }, null, 8, rn)) : e.background.type === "stars" ? (i(), f(o, {
          key: 2,
          class: "stars"
        })) : B("", !0)])
      }
    }
  }),
  un = h(cn, [
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
  pn = k({
    __name: "TitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => (i(), m("div", _n, [y("div", dn, C(e.layout.title), 1), y("div", mn, C(e.layout.subtitle), 1)]))
    }
  }),
  bn = h(pn, [
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
  hn = k({
    __name: "AnimojiTitleSubtitle",
    props: {
      layout: {}
    },
    setup(_) {
      return (e, n) => {
        const o = ve;
        return i(), m("div", yn, [y("div", fn, [p(o, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), y("div", vn, [y("div", gn, C(e.layout.title), 1), y("div", kn, C(e.layout.subtitle), 1)])])
      }
    }
  }),
  wn = h(hn, [
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
        t = A(() => n.button.type === "next" ? n.isLast ? r("base.close") : r("base.next") : n.button.label),
        s = () => {
          if (n.button.type === "next") O().$webApp.HapticFeedback.impactOccurred("light"), o("next");
          else if (n.button.type === "local") M().push(n.button.link);
          else if (n.button.type === "external") O().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") O().$webApp.openTelegramLink(n.button.link);
          else throw n.button, me("Unknown button type")
        };
      return (c, l) => {
        const u = ie;
        return i(), f(u, {
          label: a(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: a(ae).LARGE,
          onClick: l[0] || (l[0] = F(d => s(), ["stop"]))
        }, null, 8, ["label", "size"])
      }
    }
  }),
  $n = h(An, [
    ["__scopeId", "data-v-aeabe744"]
  ]),
  Sn = {
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
  Bn = k({
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
        const o = un,
          t = bn,
          s = wn,
          c = $n;
        return i(), m("div", Sn, [p(o, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), y("div", En, [y("div", Cn, [e.story.layout.type === "TitleSubtitle" ? (i(), f(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), f(s, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : B("", !0)]), y("div", Nn, [e.story.button ? (i(), f(c, {
          key: 0,
          button: e.story.button,
          "is-last": e.isLast,
          onNext: n[0] || (n[0] = l => e.$emit("next"))
        }, null, 8, ["button", "is-last"])) : B("", !0)])])])
      }
    }
  }),
  Tn = h(Bn, [
    ["__scopeId", "data-v-1e1bfe10"]
  ]),
  xn = (_, e) => {
    const n = _,
      o = x(_),
      t = A(() => 1 - o.value / n);
    let s = 0,
      c;
    const l = () => {
        s = Date.now(), c = Oe(() => {
          const S = Date.now(),
            $ = S - s;
          s = S, o.value = Math.max(o.value - $, 0), o.value <= 0 && (u(), e())
        }, 100)
      },
      u = () => {
        c && (clearInterval(c), c = void 0)
      },
      d = () => {
        if (c) {
          u();
          const S = Date.now() - s;
          o.value = Math.max(o.value - S, 0)
        }
      },
      v = () => l();
    return l(), {
      timeToExpire: ze(o),
      progress: t,
      destroy: u,
      pause: d,
      resume: v
    }
  },
  In = 150,
  Rn = k({
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
          t.value < n.stories.length - 1 ? (t.value += 1, d()) : o("close")
        },
        c = () => {
          t.value > 0 ? (t.value -= 1, d()) : o("close")
        },
        l = () => xn(5e3, s),
        u = De(l()),
        d = () => {
          u.value.destroy(), u.value = l()
        },
        v = x(),
        S = Ke(),
        $ = x(!1),
        w = x(!1),
        E = () => {
          $.value = !1, w.value = !1, S.set(() => {
            u.value.pause(), $.value = !0, w.value = !0
          }, In)
        },
        g = () => {
          S.destroy(), $.value && (u.value.resume(), $.value = !1)
        },
        I = P => {
          if ($.value || w.value || !v.value) return;
          const {
            width: b,
            left: z
          } = v.value.getBoundingClientRect(), V = P.clientX - z, U = b / 3;
          V < U ? c() : V > U * 2 && s()
        };
      return ge(() => {
        S.destroy(), u.value.destroy()
      }), (P, b) => {
        const z = sn,
          V = Tn,
          U = st;
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
  Pn = h(Rn, [
    ["__scopeId", "data-v-9c2882e6"]
  ]),
  Mn = k({
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
      const e = be(_, "modelValue");
      return (n, o) => {
        const t = Pn;
        return i(), f(_e, {
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
  Ln = h(Mn, [
    ["__scopeId", "data-v-a6bb72fa"]
  ]),
  we = () => {
    const _ = re("$Ult9HcdMR0"),
      e = re(() => Fe(async () => {
        const t = await je.getTgeEligibility();
        return j(t) ? W(!0) : t.err && t.code === 403 ? W(!1) : t
      }, t => {
        _.value = t
      }, 6e4), "$GbrQr2MFk7");
    return {
      _flow: {
        init: async () => {
          await Promise.resolve()
        },
        destroy: () => {
          e.value.destroy(), _.value = void 0
        }
      },
      available: A(() => _.value)
    }
  },
  zn = {
    class: "pages-index-new-season-banner"
  },
  On = {
    class: "progress"
  },
  Dn = k({
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
                memepadNewFrom: fe.MAIN_PAGE_BANNER_CREATE_MEMECOIN
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
                source: Ue.MAIN_PAGE_BANNER
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
      Ge(u, w => w && e.value.onShowed(), {
        immediate: !0
      });
      const d = x(0),
        v = x(null),
        S = (w, E = "smooth") => {
          var g;
          (g = v.value) == null || g.scrollTo({
            left: w * window.innerWidth + (d.value > w ? -1 : 1),
            behavior: E
          })
        },
        $ = We(() => {
          if (!v.value) return;
          const w = v.value.children[0].offsetWidth + 10,
            E = v.value.scrollLeft,
            g = Math.round(E / w);
          d.value = g
        }, 50).debouncedFunction;
      return Ye(() => {
        S(d.value, "instant")
      }), (w, E) => {
        const g = tn,
          I = nt,
          P = Ln;
        return i(), m("div", zn, [y("div", {
          ref_key: "listEl",
          ref: v,
          class: "list",
          onScroll: E[0] || (E[0] = (...b) => a($) && a($)(...b)),
          onTouchmove: E[1] || (E[1] = (...b) => a($) && a($)(...b))
        }, [(i(!0), m(L, null, X(a(l), (b, z) => (i(), m("div", {
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
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name", "hide-button", "text-size"])]))), 128))], 544), y("div", On, [a(l).length > 1 ? (i(), f(I, {
          key: 0,
          "model-value": a(d),
          count: a(l).length,
          timer: 15e3,
          "onUpdate:modelValue": S
        }, null, 8, ["model-value", "count"])) : B("", !0)]), p(P, {
          modelValue: a(u),
          "onUpdate:modelValue": E[2] || (E[2] = b => ye(u) ? u.value = b : null),
          set: w.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Kn = h(Dn, [
    ["__scopeId", "data-v-cd7410bc"]
  ]),
  Vn = {
    class: "pages-wallet-asset-skeleton"
  },
  Fn = {
    class: "content"
  },
  jn = k({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(_) {
      return (e, n) => {
        const o = Q;
        return i(), m("div", Vn, [(i(!0), m(L, null, X(e.count, t => (i(), m("div", {
          key: t,
          class: "skeleton"
        }, [p(o, {
          rounded: "",
          class: "logo"
        }), y("div", Fn, [p(o, {
          class: "title"
        }), p(o, {
          class: "subtitle"
        })])]))), 128))])
      }
    }
  }),
  Un = h(jn, [
    ["__scopeId", "data-v-26805825"]
  ]),
  Gn = {
    class: "pages-index-points"
  },
  Yn = k({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(_) {
      const e = A(() => M().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (n, o) => {
        const t = at,
          s = Un,
          c = et;
        return i(), m("div", Gn, [p(t, {
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
  Wn = h(Yn, [
    ["__scopeId", "data-v-41a444bf"]
  ]),
  qn = () => {
    const _ = qe(),
      e = He(),
      n = Je(),
      o = A(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      s = {
        set: Hn(),
        showOnStart: !O().$webApp.storage.local.get(t),
        onShowed: () => {
          O().$webApp.storage.local.set(t, "true")
        }
      },
      c = A(() => {
        const l = _.pointSymbols.value,
          u = _.dropSymbols.value;
        if (!(!l || !u) && !(!l.mp || !l.bp)) return [l.mp, l.bp, ...u]
      });
    return {
      dailyReward: n,
      myTribe: o,
      season2Stories: s,
      wallet: A(() => _.wallet.value),
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
  Xn = k({
    __name: "index",
    setup(_) {
      const e = qn(),
        n = we(),
        o = () => {
          n._flow.init()
        },
        t = () => {
          n._flow.destroy()
        };
      return o(), ge(t), (s, c) => {
        const l = Dt,
          u = Yt,
          d = Kn,
          v = Wn;
        return i(), m("div", Jn, [p(l, {
          "my-tribe": a(e).myTribe.value,
          wallet: a(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), p(u, {
          "daily-reward": a(e).dailyReward.reward.value,
          "daily-reward-claim": a(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), p(d, {
          value: a(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), p(v, {
          points: a(e).walletAssets.value
        }, null, 8, ["points"])])
      }
    }
  }),
  vo = h(Xn, [
    ["__scopeId", "data-v-3322703f"]
  ]);
export {
  vo as
  default
};