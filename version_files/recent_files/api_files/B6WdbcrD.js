import {
  _ as ie
} from "./BDHYNldQ.js";
import {
  _ as z
} from "./De_O7LKe.js";
import {
  d as f,
  j as $,
  a3 as le,
  o as i,
  c as p,
  e as o,
  M as y,
  a as b,
  t as A,
  C as u,
  ar as ge,
  X as J,
  E,
  az as ke,
  aA as he,
  x as Z,
  f as g,
  ab as P,
  F as N,
  D as T,
  b as m,
  a8 as W,
  H as we,
  _ as Q,
  aB as re,
  n as ee,
  aC as ce,
  y as x,
  V as $e,
  aD as H,
  aa as te,
  aE as Se,
  a7 as j,
  h as L,
  aF as ue,
  ax as de,
  k as Ce,
  aG as _e,
  aH as Ae,
  m as oe,
  Y as Te,
  p as me,
  aI as U,
  aJ as pe,
  a6 as V,
  q as G,
  aK as X,
  a5 as se,
  O as Ee,
  aL as Ie,
  P as xe,
  aM as be,
  aN as Y,
  aO as Be,
  Q as Re,
  aq as ae,
  W as R,
  an as ye,
  aP as Pe,
  aQ as Ne,
  aR as Me,
  aS as Le,
  a2 as Ke,
  aw as Oe,
  al as Ve,
  aT as B,
  U as ze,
  ak as De,
  ah as Fe,
  G as je,
  Z as Ue,
  aU as Ye,
  aV as We
} from "./IIG1dV1T.js";
import {
  _ as He
} from "./DWoeiI22.js";
import {
  _ as Ge,
  a as qe
} from "./DhUfjCrC.js";
import {
  _ as Xe
} from "./BZV92Fit.js";
import {
  _ as ne,
  a as fe,
  b as Je
} from "./Dp_cugHM.js";
import {
  _ as Ze
} from "./DGiAlvMC.js";
import {
  _ as Qe
} from "./DCINMRRl.js";
import {
  _ as et
} from "./87RWik9K.js";
import {
  _ as tt
} from "./Btr3ighB.js";
import {
  _ as ve
} from "./lc5ckoKX.js";
import "./BTWQMypC.js";
import "./B2ZUo5Zo.js";
import "./Cmk0W-cB.js";
import "./BnDMzraD.js";
import "./B2pk-guf.js";
import "./B9f44bw8.js";
import "./BHnoe3_R.js";
import "./C8aBG_Jq.js";
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
    setup(d) {
      const e = d,
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
        const r = z,
          l = Z;
        return i(), p("div", nt, [o(a).type === "skeleton" ? (i(), y(r, {
          key: 0,
          class: "skeleton"
        })) : o(a).type === "connected" ? (i(), p("div", ot, [b("div", st, A(("t" in t ? t.t : o(u))("wallet.total_balance")), 1), (i(), y(ge(o(a).balance), {
          class: "balance"
        }))])) : o(a).type === "connect" ? (i(), y(l, {
          key: 2,
          label: ("t" in t ? t.t : o(u))("wallet.connect.btn"),
          size: o(J).SMALL,
          onClick: s[0] || (s[0] = c => n())
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
    setup(d) {
      const e = P().resolve({
          name: "tribe-join"
        }).fullPath,
        n = P().resolve({
          name: "tribe-slug"
        }).fullPath,
        a = t => W().main.tribeLogoClick(t);
      return (t, s) => {
        const r = z,
          l = we,
          c = Q,
          _ = He;
        return i(), p("div", lt, [t.myTribe ? (i(), p(N, {
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
          default: T(() => [m(c, {
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
          default: T(() => [m(c, {
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
          default: T(() => [m(_, {
            "avatar-url": t.myTribe.tribe.getAvatarUrl(),
            "default-avatar": t.myTribe.tribe.defaultAvatar,
            size: 26
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["to"])) : E("", !0)], 64)) : (i(), y(r, {
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
  dt = {
    class: "field-value"
  },
  _t = f({
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
      re(n => ({
        bc7bb12e: n.height,
        "0b714ec0": n.borderRadius,
        "4280b9dc": n.iconSize
      }));
      const e = $(() => ({
        field: !0,
        "field--disabled": d.disabled
      }));
      return (n, a) => {
        const t = Q;
        return i(), p("div", {
          class: ee(o(e))
        }, [m(t, {
          name: n.icon,
          class: "field-icon"
        }, null, 8, ["name"]), b("div", ut, A(n.label), 1), b("div", dt, A(n.value), 1)], 2)
      }
    }
  }),
  mt = g(_t, [
    ["__scopeId", "data-v-d2541044"]
  ]),
  pt = f({
    __name: "BannerProfileModalEmailVerify",
    setup(d) {
      const {
        sendEmailAuthProviderVerification: e
      } = ce(), n = x(!1), a = async r => {
        const l = await e({
          captchaToken: r
        });
        if (!te(l)) {
          if (l.code === Se.Forbidden) {
            n.value = !0;
            return
          }
          j().error();
          return
        }
        j().success(u("secure_options.message.email_code_sent"))
      }, t = async r => {
        await a(r), n.value = !1
      }, s = () => {
        n.value = !1
      };
      return (r, l) => {
        const c = Ge,
          _ = $e("I18nT");
        return o(n) ? (i(), y(c, {
          key: 0,
          appearance: "always",
          class: "captcha",
          onResolve: t,
          onReject: s
        })) : (i(), y(_, {
          key: 1,
          tag: "div",
          class: "caption",
          keypath: "secure_options.profile_modal.connect_email.not_verified_caption"
        }, {
          resend: T(() => [b("a", {
            href: "#",
            class: "link",
            onClick: l[0] || (l[0] = H(k => a(), ["prevent"]))
          }, A(("t" in r ? r.t : o(u))("secure_options.profile_modal.connect_email.not_verified_caption_resend")), 1)]),
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
    setup(d, {
      emit: e
    }) {
      const {
        disconnectEmailAuthProvider: n,
        fetchAuthProviders: a
      } = ce(), t = e, s = () => {
        const r = u("secure_options.profile_modal.disconnect_email.confirm.title"),
          l = u("secure_options.profile_modal.disconnect_email.confirm.description"),
          c = [{
            type: "cancel"
          }, {
            type: "default",
            label: u("secure_options.profile_modal.disconnect_email.confirm.btn"),
            onClick: async () => {
              const _ = await n();
              if (!te(_)) {
                j().error();
                return
              }
              t("confirm:disconnect"), await a()
            }
          }];
        L().$webApp.popup(r, l, c)
      };
      return (r, l) => (i(), p("a", {
        href: "#",
        class: "disconnect",
        onClick: H(s, ["prevent"])
      }, A(("t" in r ? r.t : o(u))("secure_options.profile_modal.disconnect_email.btn")), 1))
    }
  }),
  ft = g(yt, [
    ["__scopeId", "data-v-d5808e4e"]
  ]),
  vt = f({
    __name: "BannerProfileModalFooter",
    emits: ["click:connect-account", "confirm:disconnect"],
    setup(d, {
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
        r = $(() => {
          var l;
          return ((l = a.value) == null ? void 0 : l.emailMasked) ?? ""
        });
      return (l, c) => {
        const _ = mt,
          k = bt,
          S = ft,
          v = Z;
        return o(t) ? (i(), p(N, {
          key: 0
        }, [m(_, {
          icon: "email",
          label: ("t" in l ? l.t : o(u))("secure_options.profile_modal.connect_email.label"),
          value: o(r),
          disabled: !o(s)
        }, null, 8, ["label", "value", "disabled"]), o(s) ? E("", !0) : (i(), p(N, {
          key: 0
        }, [m(k), m(S, {
          "onConfirm:disconnect": c[0] || (c[0] = w => n("confirm:disconnect"))
        })], 64))], 64)) : (i(), y(v, {
          key: 1,
          label: ("t" in l ? l.t : o(u))("secure_options.profile_modal.connect_email.btn"),
          fill: "",
          size: o(J).LARGE,
          onClick: c[1] || (c[1] = w => n("click:connect-account"))
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
    setup(d) {
      const e = de(d, "modelValue"),
        {
          getters: n
        } = Ce(),
        {
          secureOptionsModals: a
        } = _e(),
        t = ue(),
        s = $(() => {
          var _;
          return ((_ = n.getUser.value) == null ? void 0 : _.username) ?? "user"
        }),
        r = $(() => {
          var _;
          return ((_ = t.value) == null ? void 0 : _.hasEmail) ?? !1
        }),
        l = () => {
          c(), a.main.show()
        },
        c = () => {
          e.value = !1
        };
      return (_, k) => {
        const S = ie,
          v = vt,
          w = Xe,
          I = Te,
          M = qe;
        return i(), p(N, null, [m(I, {
          modelValue: e.value,
          "onUpdate:modelValue": k[0] || (k[0] = O => e.value = O)
        }, {
          default: T(() => [m(w, null, Ae({
            header: T(() => [m(S, {
              size: "96px",
              class: "avatar"
            })]),
            title: T(() => [oe(A(o(s)), 1)]),
            footer: T(() => [m(v, {
              "onClick:connectAccount": l,
              "onConfirm:disconnect": c
            })]),
            _: 2
          }, [o(r) ? void 0 : {
            name: "subTitle",
            fn: T(() => [oe(A(("t" in _ ? _.t : o(u))("secure_options.profile_modal.connect_email.subtitle")), 1)]),
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
    setup(d) {
      const {
        isStaySecureFeatureEnabled: e
      } = _e(), n = x(!1), a = () => {
        e.value && (n.value = !0)
      };
      return (t, s) => {
        const r = ie,
          l = it,
          c = ct,
          _ = kt;
        return i(), p("div", ht, [m(r, {
          small: "",
          onClick: a
        }), m(l, {
          wallet: t.wallet
        }, null, 8, ["wallet"]), m(c, {
          "my-tribe": t.myTribe,
          class: "tribe"
        }, null, 8, ["my-tribe"]), m(_, {
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
  Ct = ["onClick"],
  At = {
    class: "image-container"
  },
  Tt = {
    class: "title"
  },
  Et = f({
    __name: "BannerControls",
    setup(d) {
      const e = $(() => [{
        title: u("memepad.explore.launch.button_text"),
        image: "emoji/Seedling",
        onClick: () => P().push({
          name: "memepad-new",
          query: {
            memepadFrom: U.MAIN,
            memepadNewFrom: pe.MAIN
          }
        })
      }, {
        title: u("memepad.explore.title"),
        image: "emoji/Fire",
        onClick: () => P().push({
          name: "memepad",
          query: {
            memepadFrom: U.MAIN
          }
        })
      }, {
        title: u("base.trading_bot"),
        image: "emoji/Rocket",
        onClick: () => {
          W().main.controlsTradingBotClick(), V().openTradingBot()
        }
      }]);
      return (n, a) => {
        const t = ne;
        return i(), p("div", St, [(i(!0), p(N, null, G(o(e), (s, r) => (i(), p("button", {
          key: r,
          class: "control reset",
          onClick: l => s.onClick()
        }, [b("div", At, [m(t, {
          name: s.image,
          class: "image"
        }, null, 8, ["name"])]), b("div", Tt, A(s.title), 1)], 8, Ct))), 128))])
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
    setup(d) {
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
  Rt = g(Bt, [
    ["__scopeId", "data-v-8f4c28ad"]
  ]),
  Pt = {
    class: "pages-index-daily-reward"
  },
  Nt = {
    key: 1,
    class: "widget has-radius"
  },
  Mt = {
    class: "compose"
  },
  Lt = {
    class: "title"
  },
  Kt = {
    key: 0,
    class: "subtitle"
  },
  Ot = f({
    __name: "IndexDailyReward",
    props: {
      dailyReward: {},
      dailyRewardClaim: {
        type: Function
      }
    },
    setup(d) {
      const e = d,
        n = j(),
        a = (s, r) => async () => {
          const l = await e.dailyRewardClaim();
          Be(l, {
            Err: () => n.error(u("base.claim_error")),
            Ok: c => {
              s === X.RESTORE && n.success(u("daily_reward.streak_restored", {
                days: r
              })), n.success(`You’ve got ${Re(c.claimedReward.points)} BP`), n.success(ae("span", ["You’ve got ", ae("i", {
                class: "ticket"
              }), ` ${c.claimedReward.passes}`])), V().makeConfetti(), W().main.dailyRewardClick({
                points: c.claimedReward.points.toNumber(),
                passes: c.claimedReward.passes
              })
            }
          })
        }, t = $(() => {
          if (e.dailyReward === void 0) return;
          const s = e.dailyReward.currentStreakDays,
            r = `${s}-${u("base.n.days",s)}`;
          if (e.dailyReward.claim === X.RESTORE) return {
            icon: "emoji/PleadingFace",
            title: u("daily_reward.missed"),
            subtitle: se(u("daily_reward.restore_current_streak", {
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
            const _ = Ee().ms100ticker.value;
            if (!_) return Ie();
            const k = xe(e.dailyReward.canClaimAt - _, "letters");
            return se(u("base.claim_next_in", {
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
              can: e.dailyReward.claim !== X.UNAVAILABLE,
              fn: a(e.dailyReward.claim, r)
            }
          }
        });
      return (s, r) => {
        const l = z,
          c = ne,
          _ = Ze;
        return i(), p("div", Pt, [o(t) ? (i(), p("div", Nt, [m(c, {
          name: o(t).icon,
          class: "icon"
        }, null, 8, ["name"]), b("div", Mt, [b("div", Lt, A(o(t).title), 1), ("isOk" in s ? s.isOk : o(te))(o(t).subtitle) ? (i(), p("div", Kt, A(o(t).subtitle.data), 1)) : (i(), y(l, {
          key: 1,
          type: o(be).SECONDARY,
          class: "skeleton subtitle"
        }, null, 8, ["type"]))]), o(t).claim ? (i(), y(_, {
          key: 0,
          label: o(t).claim.label,
          "can-claim": o(t).claim.can,
          "claim-fn": o(t).claim.fn,
          style: Y(o(t).claim.white ? "white" : void 0),
          class: "pill"
        }, null, 8, ["label", "can-claim", "claim-fn", "style"])) : E("", !0)])) : (i(), y(l, {
          key: 0,
          class: "skeleton has-radius"
        }))])
      }
    }
  }),
  Vt = g(Ot, [
    ["__scopeId", "data-v-c4174779"]
  ]),
  zt = {
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
  Yt = ["innerHTML"],
  Wt = {
    class: "icon-wrapper"
  },
  Ht = ["src"],
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
    setup(d) {
      return (e, n) => {
        const a = fe,
          t = Q,
          s = ye;
        return i(), p("div", zt, [b("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(R))("index/banner/animation", "gif"),
          class: "gif"
        }, null, 8, Dt), n[0] || (n[0] = b("div", {
          class: "bg"
        }, null, -1)), b("img", {
          src: ("imgResolver" in e ? e.imgResolver : o(R))("index/banner/lines", "svg"),
          class: "lines"
        }, null, 8, Ft), b("div", jt, [b("div", Ut, [b("div", {
          class: "title",
          innerHTML: e.title
        }, null, 8, Yt), e.hideButton ? E("", !0) : (i(), y(a, {
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
        }, null, 8, ["name", "style"])) : e.lottie ? (i(), y(s, {
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
        }, null, 12, Ht)) : E("", !0)])])])
      }
    }
  }),
  qt = g(Gt, [
    ["__scopeId", "data-v-80b1be0e"]
  ]),
  Xt = {
    class: "kit-stories-src-counter"
  },
  Jt = f({
    __name: "Counter",
    props: {
      count: {},
      current: {},
      currentProgress: {}
    },
    setup(d) {
      re(a => ({
        "9db269f8": a.count
      }));
      const e = d,
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
      return (a, t) => (i(), p("div", Xt, [(i(!0), p(N, null, G(o(n), s => (i(), p("div", {
        key: s.key,
        class: ee(["progress", [`is-state-${s.state}`]]),
        style: Y(s.state === "current" ? {
          "background-position-x": `-${s.progress*100}%`
        } : void 0)
      }, null, 6))), 128))]))
    }
  }),
  Zt = g(Jt, [
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
    setup(d) {
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
    setup(d) {
      return (e, n) => (i(), p("div", sn, [b("div", an, A(e.layout.title), 1), b("div", ln, A(e.layout.subtitle), 1)]))
    }
  }),
  cn = g(rn, [
    ["__scopeId", "data-v-0c68f07a"]
  ]),
  un = {
    class: "kit-stories-layouts-animoji-title-subtitle"
  },
  dn = {
    class: "animoji-container"
  },
  _n = {
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
    setup(d) {
      return (e, n) => {
        const a = ye;
        return i(), p("div", un, [b("div", dn, [m(a, {
          name: `animations/${e.layout.animoji}`,
          size: 200
        }, null, 8, ["name"])]), b("div", _n, [b("div", mn, A(e.layout.title), 1), b("div", pn, A(e.layout.subtitle), 1)])])
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
    setup(d, {
      emit: e
    }) {
      const n = d,
        a = e,
        t = $(() => n.button.type === "next" ? n.isLast ? u("base.close") : u("base.next") : n.button.label),
        s = () => {
          if (n.button.type === "next") L().$webApp.HapticFeedback.impactOccurred("light"), a("next");
          else if (n.button.type === "local") P().push(n.button.link);
          else if (n.button.type === "external") L().$webApp.openLink(n.button.link);
          else if (n.button.type === "telegram") L().$webApp.openTelegramLink(n.button.link);
          else throw n.button, le("Unknown button type")
        };
      return (r, l) => {
        const c = Z;
        return i(), y(c, {
          label: o(t),
          fill: "",
          class: "kit-stories-shared-button",
          size: o(J).LARGE,
          onClick: l[0] || (l[0] = H(_ => s(), ["stop"]))
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
    setup(d) {
      return (e, n) => {
        const a = on,
          t = cn,
          s = yn,
          r = vn;
        return i(), p("div", gn, [m(a, {
          background: e.story.background,
          class: "background"
        }, null, 8, ["background"]), b("div", kn, [b("div", hn, [e.story.layout.type === "TitleSubtitle" ? (i(), y(t, {
          key: 0,
          layout: e.story.layout
        }, null, 8, ["layout"])) : e.story.layout.type === "AnimojiTitleSubtitle" ? (i(), y(s, {
          key: 1,
          layout: e.story.layout
        }, null, 8, ["layout"])) : E("", !0)]), b("div", wn, [e.story.button ? (i(), y(r, {
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
  Cn = (d, e) => {
    const n = d,
      a = x(d),
      t = $(() => 1 - a.value / n);
    let s = 0,
      r;
    const l = () => {
        s = Date.now(), r = Ne(() => {
          const S = Date.now(),
            v = S - s;
          s = S, a.value = Math.max(a.value - v, 0), a.value <= 0 && (c(), e())
        }, 100)
      },
      c = () => {
        r && (clearInterval(r), r = void 0)
      },
      _ = () => {
        if (r) {
          c();
          const S = Date.now() - s;
          a.value = Math.max(a.value - S, 0)
        }
      },
      k = () => l();
    return l(), {
      timeToExpire: Pe(a),
      progress: t,
      destroy: c,
      pause: _,
      resume: k
    }
  },
  An = 150,
  Tn = f({
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
        s = () => {
          t.value < n.stories.length - 1 ? (t.value += 1, _()) : a("close")
        },
        r = () => {
          t.value > 0 ? (t.value -= 1, _()) : a("close")
        },
        l = () => Cn(5e3, s),
        c = Me(l()),
        _ = () => {
          c.value.destroy(), c.value = l()
        },
        k = x(),
        S = Le(),
        v = x(!1),
        w = x(!1),
        I = () => {
          v.value = !1, w.value = !1, S.set(() => {
            c.value.pause(), v.value = !0, w.value = !0
          }, An)
        },
        M = () => {
          S.destroy(), v.value && (c.value.resume(), v.value = !1)
        },
        O = h => {
          if (v.value || w.value || !k.value) return;
          const {
            width: C,
            left: q
          } = k.value.getBoundingClientRect(), D = h.clientX - q, F = C / 3;
          D < F ? r() : D > F * 2 && s()
        };
      return Ke(() => {
        S.destroy(), c.value.destroy()
      }), (h, C) => {
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
            onPointerdown: C[1] || (C[1] = H(K => I(), ["prevent"])),
            onPointerup: C[2] || (C[2] = K => M()),
            onPointercancel: C[3] || (C[3] = K => M()),
            onPointerleave: C[4] || (C[4] = K => M()),
            onClick: C[5] || (C[5] = K => O(K))
          }, [m(q, {
            current: o(t),
            "current-progress": o(c).progress.value,
            count: h.stories.length,
            class: "counter"
          }, null, 8, ["current", "current-progress", "count"]), (i(), y(D, {
            key: o(t),
            story: h.stories[o(t)],
            "is-last": o(t) === h.stories.length - 1,
            onNext: C[0] || (C[0] = K => s())
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
    props: Oe({
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
      const e = de(d, "modelValue");
      return (n, a) => {
        const t = En;
        return i(), y(Ve, {
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
  Rn = {
    class: "progress"
  },
  Pn = f({
    __name: "IndexNewSeasonBanner",
    props: {
      value: {}
    },
    setup(d) {
      const e = d,
        n = P(),
        a = V(),
        t = W(),
        s = L().$webApp,
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
            V().openBlumTwitter()
          },
          gif: R("index/banner/x", "gif"),
          imageSize: 104,
          analyticsName: B.BLUM_X
        }, {
          title: u("index.banners.blum_academy.title"),
          buttonLabel: u("index.banners.blum_academy.button_label"),
          onButtonClick: () => {
            s.openLink("https://www.youtube.com/playlist?list=PLUbcjbJzcTS14e3kZMhXf2nhyBQF7y5Lq")
          },
          gif: R("index/banner/edu", "gif"),
          imageSize: 102,
          analyticsName: B.BLUM_ACADEMY
        }, {
          title: u("index.banners.create_memecoin.title"),
          buttonLabel: u("index.banners.create_memecoin.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad-new",
              query: {
                memepadFrom: U.MAIN_PAGE_BANNER_CREATE_MEMECOIN,
                memepadNewFrom: pe.MAIN_PAGE_BANNER_CREATE_MEMECOIN
              }
            })
          },
          gif: R("index/banner/memecoin", "gif"),
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
          gif: R("index/banner/comission", "gif"),
          imageSize: 100,
          analyticsName: B.FRIENDS
        }, {
          title: u("index.banners.trade_memecoins.title"),
          buttonLabel: u("index.banners.trade_memecoins.button_label"),
          onButtonClick: () => {
            n.push({
              name: "memepad",
              query: {
                memepadFrom: U.MAIN_PAGE_BANNER_TRADE_MEMECOIN
              }
            })
          },
          gif: R("index/banner/riskreward", "gif"),
          imageSize: 102,
          analyticsName: B.TRADE_MEMECOIN
        }, {
          title: u("index.banners.leaderboard.title"),
          buttonLabel: u("index.banners.leaderboard.button_label"),
          onButtonClick: () => {
            n.push({
              name: "frens-leaderboards"
            })
          },
          gif: R("index/banner/leaderboard", "gif"),
          imageSize: 102,
          analyticsName: B.LEADERBOARDS
        }].map((v, w) => ({
          ...v,
          onButtonClick: () => {
            t.main.bannerClick({
              position: w + 1,
              bannerName: v.analyticsName
            }), v.onButtonClick()
          }
        })),
        l = x(e.value.showOnStart);
      ze(l, v => v && e.value.onShowed(), {
        immediate: !0
      });
      const c = x(Fe(0, r.length - 1)),
        _ = x(null),
        k = (v, w = "smooth") => {
          var I;
          (I = _.value) == null || I.scrollTo({
            left: v * window.innerWidth + (c.value > v ? -1 : 1),
            behavior: w
          })
        },
        S = je(() => {
          if (!_.value) return;
          const v = _.value.children[0].offsetWidth + 10,
            w = _.value.scrollLeft,
            I = Math.round(w / v);
          c.value = I
        }, 50).debouncedFunction;
      return De(() => {
        k(c.value, "instant")
      }), (v, w) => {
        const I = qt,
          M = Qe,
          O = xn;
        return i(), p("div", Bn, [b("div", {
          ref_key: "listEl",
          ref: _,
          class: "list",
          onScroll: w[0] || (w[0] = (...h) => o(S) && o(S)(...h)),
          onTouchmove: w[1] || (w[1] = (...h) => o(S) && o(S)(...h))
        }, [(i(!0), p(N, null, G(o(r), (h, C) => (i(), p("div", {
          key: h.title,
          class: "item"
        }, [m(I, {
          index: C,
          icon: h.icon,
          lottie: h.lottie,
          gif: h.gif,
          title: h.title,
          "button-label": h.buttonLabel,
          "on-button-click": h.onButtonClick,
          "image-size": h.imageSize,
          "analytics-name": h.analyticsName,
          "hide-button": h.hideButton
        }, null, 8, ["index", "icon", "lottie", "gif", "title", "button-label", "on-button-click", "image-size", "analytics-name", "hide-button"])]))), 128))], 544), b("div", Rn, [o(r).length > 1 ? (i(), y(M, {
          key: 0,
          "model-value": o(c),
          count: o(r).length,
          timer: 15e3,
          "onUpdate:modelValue": k
        }, null, 8, ["model-value", "count"])) : E("", !0)]), m(O, {
          modelValue: o(l),
          "onUpdate:modelValue": w[2] || (w[2] = h => me(l) ? l.value = h : null),
          set: v.value.set
        }, null, 8, ["modelValue", "set"])])
      }
    }
  }),
  Nn = g(Pn, [
    ["__scopeId", "data-v-fd5fe496"]
  ]),
  Mn = {
    class: "pages-wallet-asset-skeleton"
  },
  Ln = {
    class: "content"
  },
  Kn = f({
    __name: "AssetSkeleton",
    props: {
      count: {
        default: 3
      }
    },
    setup(d) {
      return (e, n) => {
        const a = z;
        return i(), p("div", Mn, [(i(!0), p(N, null, G(e.count, t => (i(), p("div", {
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
  On = g(Kn, [
    ["__scopeId", "data-v-26805825"]
  ]),
  Vn = {
    class: "pages-index-points"
  },
  zn = f({
    __name: "IndexPoints",
    props: {
      points: {}
    },
    setup(d) {
      const e = $(() => P().resolve({
        name: "wallet",
        query: {
          tab: "points",
          source: "main"
        }
      }).fullPath);
      return (n, a) => {
        const t = ve,
          s = On,
          r = Je;
        return i(), p("div", Vn, [m(t, {
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
  Dn = g(zn, [
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
  Yn = {
    class: "title"
  },
  Wn = {
    class: "balance"
  },
  Hn = f({
    __name: "IndexGame",
    props: {
      pp: {}
    },
    setup(d) {
      const e = d,
        n = $(() => {
          const t = (() => {
            const s = V().internal;
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
        const r = ve,
          l = ne,
          c = z,
          _ = fe;
        return i(), p("div", {
          class: ee(["pages-index-game", `is-mode-${o(n).mode}`])
        }, [m(r, {
          label: ("t" in t ? t.t : o(u))("base.game")
        }, null, 8, ["label"]), o(n).type === "skeleton" ? (i(), p("div", Fn, [m(l, {
          name: o(n).image,
          class: "icon"
        }, null, 8, ["name"]), m(c, {
          type: o(be).SECONDARY,
          class: "skeleton-title"
        }, null, 8, ["type"]), m(_, {
          label: ("t" in t ? t.t : o(u))("base.play"),
          state: "loading",
          type: "white",
          class: "pill"
        }, null, 8, ["label"])])) : (i(), p("div", jn, [m(l, {
          name: o(n).image,
          class: "icon"
        }, null, 8, ["name"]), b("div", Un, [b("div", Yn, A(("t" in t ? t.t : o(u))("game.card.title")), 1), b("div", Wn, A(o(n).pp) + " Play passes", 1)]), m(_, {
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
  Gn = g(Hn, [
    ["__scopeId", "data-v-86df2fc1"]
  ]),
  qn = () => {
    const d = Ue(),
      e = Ye(),
      n = We(),
      a = $(() => e.myTribeRes.value),
      t = "season_2_banner_showed",
      s = {
        set: Xn(),
        showOnStart: !L().$webApp.storage.local.get(t),
        onShowed: () => {
          L().$webApp.storage.local.set(t, "true")
        }
      },
      r = $(() => {
        const c = d.pointSymbols.value,
          _ = d.dropSymbols.value;
        if (!(!c || !_) && !(!c.mp || !c.bp)) return [c.mp, c.bp, ..._]
      }),
      l = $(() => d.pointSymbols.value.pp);
    return {
      dailyReward: n,
      myTribe: a,
      season2Stories: s,
      wallet: $(() => d.wallet.value),
      pp: l,
      walletAssets: r
    }
  },
  Xn = () => ({
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
  Jn = {
    class: "index-page page"
  },
  Zn = f({
    __name: "index",
    setup(d) {
      const e = qn();
      return (n, a) => {
        const t = Rt,
          s = Vt,
          r = Nn,
          l = Dn,
          c = Gn;
        return i(), p("div", Jn, [m(t, {
          "my-tribe": o(e).myTribe.value,
          wallet: o(e).wallet.value
        }, null, 8, ["my-tribe", "wallet"]), m(s, {
          "daily-reward": o(e).dailyReward.reward.value,
          "daily-reward-claim": o(e).dailyReward.claim,
          class: "reward"
        }, null, 8, ["daily-reward", "daily-reward-claim"]), m(r, {
          value: o(e).season2Stories,
          class: "banner"
        }, null, 8, ["value"]), m(l, {
          points: o(e).walletAssets.value
        }, null, 8, ["points"]), m(c, {
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