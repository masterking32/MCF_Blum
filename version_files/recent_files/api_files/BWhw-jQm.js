import {
  d as $,
  k as Ue,
  J as U,
  R as P,
  j as I,
  y as Pe,
  o as a,
  c as d,
  a as o,
  m as le,
  t as m,
  e,
  A as l,
  b as c,
  D as k,
  T as Re,
  F as R,
  q as E,
  n as j,
  G as V,
  O as Oe,
  _ as N,
  U as ce,
  f as h,
  V as de,
  W as M,
  X as me,
  h as q,
  Y as te,
  z as w,
  Z as Le,
  $ as ue,
  a0 as Ee,
  a1 as G,
  a2 as Ne,
  w as Ke,
  a3 as _e,
  a4 as Me,
  C as De,
  a5 as Y,
  a6 as Ve,
  K as He,
  a7 as xe,
  a8 as We,
  a9 as pe,
  p as fe,
  x as ve,
  aa as ze,
  ab as se,
  ac as je,
  ad as qe,
  ae as z,
  af as oe,
  ag as Ye,
  ah as Ge,
  ai as L,
  aj as D,
  ak as Ze,
  al as Je,
  Q as Qe,
  am as ae,
  an as re
} from "./CTMy7kFf.js";
import {
  _ as Xe,
  a as en
} from "./B6stuWGj.js";
import {
  _ as Z
} from "./B61P6QRF.js";
import {
  _ as nn
} from "./BXmSgBiM.js";
import {
  _ as tn
} from "./DG_5MZdi.js";
import {
  _ as sn
} from "./pZRytW70.js";
import {
  _ as on
} from "./rkMPStGi.js";
import {
  _ as an
} from "./Cw2ZiYeC.js";
import "./DvdoWw9S.js";
const rn = {
    class: "frens-blum-leaderboard-my"
  },
  ln = {
    class: "header"
  },
  cn = {
    class: "title"
  },
  dn = {
    class: "label"
  },
  mn = {
    class: "card"
  },
  un = {
    class: "dots"
  },
  _n = {
    class: "item"
  },
  pn = {
    class: "item"
  },
  fn = ["onClick"],
  vn = $({
    __name: "My",
    props: {
      my: {}
    },
    setup(g) {
      const t = g,
        s = Ue().getters.mustGetUser,
        n = U(P.BP),
        F = I(() => [P.BP, P.MP]),
        r = I(() => t.my[n.value]),
        f = Pe("listEl"),
        u = (_, b = "smooth") => {
          if (!f.value) return;
          const A = F.value.indexOf(n.value),
            S = F.value.indexOf(_),
            T = f.value.offsetHeight;
          f.value.scrollTo({
            top: S * (T + (A > S ? -1 : 1)),
            behavior: b
          })
        },
        i = Oe(() => {
          if (!f.value) return;
          const _ = f.value.children[0].offsetHeight + 10,
            b = f.value.scrollTop;
          Math.round(b / _) === 0 ? n.value = P.BP : n.value = P.MP
        }, 50).debouncedFunction;
      return (_, b) => {
        const A = N,
          S = ce,
          T = Xe,
          H = en;
        return a(), d("div", rn, [o("div", ln, [o("div", cn, [b[2] || (b[2] = o("i", {
          class: "trophy"
        }, null, -1)), le(m(("t" in _ ? _.t : e(l))("frens.leaderboards.my.title")), 1)]), c(S, {
          class: "link",
          to: {
            name: "frens-leaderboards",
            query: {
              source: ("ANALYTICS_FRENS_LEADERBOARD_SOURCE" in _ ? _.ANALYTICS_FRENS_LEADERBOARD_SOURCE : e(Re)).FRIENDS_BAR
            }
          }
        }, {
          default: k(() => [o("div", dn, m(("t" in _ ? _.t : e(l))("frens.leaderboards.my.see_all")), 1), c(A, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"])]), o("div", mn, [c(H, {
          amount: e(r).amount,
          position: e(r).position,
          username: e(s).username,
          label: ("t" in _ ? _.t : e(l))("frens.leaderboards.my.your_rating"),
          "avatar-url": e(s).avatarUrl,
          "points-postfix": e(n),
          "no-position": ""
        }, {
          after: k(() => [o("div", un, [o("div", {
            ref: "listEl",
            class: "list",
            onScroll: b[0] || (b[0] = (...C) => e(i) && e(i)(...C)),
            onTouchmove: b[1] || (b[1] = (...C) => e(i) && e(i)(...C))
          }, [o("div", _n, [c(T, {
            position: _.my[e(P).BP].position
          }, null, 8, ["position"])]), o("div", pn, [c(T, {
            position: _.my[e(P).MP].position
          }, null, 8, ["position"])])], 544), (a(!0), d(R, null, E(e(F), (C, x) => (a(), d("div", {
            key: C,
            class: j([
              [{
                active: e(n) === C
              }, `idx-${x}`], "dot"
            ])
          }, [e(n) !== C ? (a(), d("button", {
            key: 0,
            type: "button",
            class: "reset",
            onClick: W => u(C)
          }, null, 8, fn)) : V("", !0)], 2))), 128))])]),
          _: 1
        }, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"])])])
      }
    }
  }),
  gn = h(vn, [
    ["__scopeId", "data-v-4287a4e0"]
  ]),
  Fn = {
    class: "pages-frens-icons"
  },
  bn = $({
    __name: "FrensHeadingIcons",
    props: {
      icon: {}
    },
    setup(g) {
      return (t, s) => {
        const n = N;
        return a(), d("div", Fn, [s[0] || (s[0] = o("img", {
          src: de,
          alt: "Friends emoji",
          class: "emoji"
        }, null, -1)), c(n, {
          name: "arrow-right-2",
          class: "arrow"
        }), c(n, {
          name: t.icon,
          class: "icon"
        }, null, 8, ["name"])])
      }
    }
  }),
  J = h(bn, [
    ["__scopeId", "data-v-54907da8"]
  ]),
  hn = {
    class: "title"
  },
  $n = {
    class: "value"
  },
  yn = {
    class: "text"
  },
  kn = $({
    __name: "FrensCommissionsCards",
    props: {
      type: {},
      percentFromFriends: {},
      percentFromFriendsOfFriends: {}
    },
    setup(g) {
      const t = g,
        s = I(() => t.type === "points" ? "sm" : "md"),
        n = I(() => t.type === "points" ? [{
          title: l("frens.points.cards.friends.title"),
          value: `${M(t.percentFromFriends,{trim:!0})}%`,
          text: [{
            value: l("frens.points.cards.friends.text"),
            highlighted: !0
          }]
        }, {
          title: l("frens.points.cards.friends_of_friends.title"),
          value: `${M(t.percentFromFriendsOfFriends,{trim:!0})}%`,
          text: [{
            value: l("frens.points.cards.friends_of_friends.text"),
            highlighted: !0
          }]
        }] : [{
          title: l("frens.ton.cards.friends.title"),
          value: `${M(t.percentFromFriends,{trim:!0})}%`,
          text: [{
            value: l("frens.ton.cards.friends.text.1"),
            highlighted: !0
          }, {
            value: ` ${l("frens.ton.cards.friends.text.2")}`,
            highlighted: !1
          }]
        }, {
          title: l("frens.ton.cards.friends_of_friends.title"),
          value: `${M(t.percentFromFriendsOfFriends,{trim:!0})}%`,
          text: [{
            value: l("frens.ton.cards.friends_of_friends.text.1"),
            highlighted: !0
          }, {
            value: ` ${l("frens.ton.cards.friends_of_friends.text.2")}`,
            highlighted: !1
          }]
        }]);
      return (F, r) => {
        const f = Z;
        return a(), d("div", {
          class: j(["pages-frens-commissions-cards", `size-${e(s)}`])
        }, [e(n) ? (a(!0), d(R, {
          key: 0
        }, E(e(n), u => (a(), d("div", {
          key: u.title,
          class: "card"
        }, [o("div", hn, m(u.title), 1), o("div", $n, m(u.value), 1), o("div", yn, [(a(!0), d(R, null, E(u.text, i => (a(), d("span", {
          key: i.value,
          class: j([{
            highlighted: i.highlighted
          }, "item"])
        }, m(i.value), 3))), 128))])]))), 128)) : (a(), d(R, {
          key: 1
        }, E(2, u => c(f, {
          key: u,
          class: "skeleton"
        })), 64))], 2)
      }
    }
  }),
  ge = h(kn, [
    ["__scopeId", "data-v-e549e0de"]
  ]),
  wn = {
    class: "content"
  },
  An = {
    class: "title"
  },
  Cn = {
    class: "subtitle"
  },
  In = $({
    __name: "FrensHowItWorks",
    setup(g) {
      const t = () => q().$webApp.openLink("https://www.blum.io/post/blum-trading-referral-system");
      return (s, n) => {
        const F = N;
        return a(), d("button", {
          type: "button",
          class: "pages-frens-how-it-works reset",
          onClick: t
        }, [n[0] || (n[0] = o("img", {
          src: me,
          alt: "Friends emoji",
          class: "emoji"
        }, null, -1)), o("div", wn, [o("div", An, m(("t" in s ? s.t : e(l))("frens.ton.how_it_works.title")), 1), o("div", Cn, m(("t" in s ? s.t : e(l))("frens.ton.how_it_works.subtitle")), 1)]), c(F, {
          name: "chevron-right",
          class: "icon"
        })])
      }
    }
  }),
  Fe = h(In, [
    ["__scopeId", "data-v-8cb31b17"]
  ]),
  Bn = {
    class: "pages-frens-empty-state"
  },
  Sn = {
    class: "sections"
  },
  Tn = {
    class: "title"
  },
  Un = {
    key: 0,
    class: "subtitle"
  },
  Pn = $({
    __name: "FrensEmptyState",
    props: {
      frensUsing: {},
      frensTradingUsing: {}
    },
    setup(g) {
      const t = g,
        s = I(() => [{
          icon: "bp-logo-circle",
          title: l("frens.empty.points.title"),
          subtitle: l("frens.empty.points.subtitle"),
          type: "points",
          percentFromFriends: t.frensUsing.percentFromFriends,
          percentFromFriendsOfFriends: t.frensUsing.percentFromFriendsOfFriends
        }, {
          icon: "ton-logo-ref",
          title: l("frens.empty.ton.title"),
          subtitle: void 0,
          type: "ton",
          percentFromFriends: t.frensTradingUsing.percentFromFriends,
          percentFromFriendsOfFriends: t.frensTradingUsing.percentFromFriendsOfFriends
        }]);
      return (n, F) => {
        const r = J,
          f = ge,
          u = Fe;
        return a(), d("div", Bn, [o("div", Sn, [(a(!0), d(R, null, E(e(s), i => (a(), d("div", {
          key: i.title,
          class: "section"
        }, [c(r, {
          icon: i.icon,
          class: "icons"
        }, null, 8, ["icon"]), o("div", Tn, m(i.title), 1), i.subtitle ? (a(), d("div", Un, m(i.subtitle), 1)) : V("", !0), c(f, {
          class: "cards",
          type: i.type,
          "percent-from-friends": i.percentFromFriends,
          "percent-from-friends-of-friends": i.percentFromFriendsOfFriends
        }, null, 8, ["type", "percent-from-friends", "percent-from-friends-of-friends"])]))), 128))]), c(u)])
      }
    }
  }),
  Rn = h(Pn, [
    ["__scopeId", "data-v-5b2c2224"]
  ]),
  On = {
    class: "pages-frens-ton-section"
  },
  Ln = {
    key: 0,
    class: "with-balance"
  },
  En = {
    class: "title"
  },
  Nn = {
    key: 0,
    class: "balance-ton"
  },
  Kn = {
    key: 2,
    class: "balance-usd"
  },
  Mn = {
    key: 1,
    class: "empty"
  },
  Dn = {
    class: "title"
  },
  Vn = $({
    __name: "FrensTonSection",
    props: {
      frensTrading: {},
      tonAmount: {},
      usdAmount: {}
    },
    setup(g) {
      const t = g,
        s = I(() => {
          var n;
          return !!((n = t.tonAmount) != null && n.gt(0))
        });
      return (n, F) => {
        const r = Le,
          f = Z,
          u = ce,
          i = Fe,
          _ = J,
          b = ge;
        return a(), d("div", On, [e(s) ? (a(), d("div", Ln, [c(r, {
          class: "background"
        }), o("div", En, m(("t" in n ? n.t : e(l))("frens.ton.title")), 1), n.tonAmount ? (a(), d("div", Nn, m(("getWalletAmount" in n ? n.getWalletAmount : e(te))(n.tonAmount, "TON").defaultWithSymbol), 1)) : (a(), w(f, {
          key: 1,
          class: "balance-ton-skeleton"
        })), n.usdAmount ? (a(), d("div", Kn, m(("getWalletAmount" in n ? n.getWalletAmount : e(te))(n.usdAmount, "USD").defaultWithSymbol), 1)) : (a(), w(f, {
          key: 3,
          class: "balance-usd-skeleton"
        })), c(u, {
          to: {
            name: "wallet"
          },
          class: "wallet-btn"
        }, {
          default: k(() => [le(m(("t" in n ? n.t : e(l))("frens.ton.go_to_wallet_text")), 1)]),
          _: 1
        }), c(i, {
          class: "how-it-works"
        })])) : (a(), d("div", Mn, [c(_, {
          icon: "ton-logo-ref",
          class: "icons"
        }), o("div", Dn, m(("t" in n ? n.t : e(l))("frens.ton.zero_earn.title")), 1), c(b, {
          type: "ton",
          "percent-from-friends": n.frensTrading.percentFromFriends,
          "percent-from-friends-of-friends": n.frensTrading.percentFromFriendsOfFriends
        }, null, 8, ["percent-from-friends", "percent-from-friends-of-friends"]), c(i, {
          class: "how-it-works"
        })]))])
      }
    }
  }),
  Hn = h(Vn, [
    ["__scopeId", "data-v-7de774b9"]
  ]),
  xn = {
    class: "pages-frens-referrals-section"
  },
  Wn = {
    class: "card"
  },
  zn = {
    class: "title"
  },
  jn = {
    class: "count"
  },
  qn = $({
    __name: "FrensReferralsSection",
    props: {
      usedInvitation: {}
    },
    emits: ["open:referral"],
    setup(g) {
      return (t, s) => {
        const n = nn;
        return a(), d("div", xn, [c(n, {
          label: ("t" in t ? t.t : e(l))("frens.referrals.title"),
          "click-callback": () => t.$emit("open:referral")
        }, null, 8, ["label", "click-callback"]), o("div", Wn, [s[0] || (s[0] = o("img", {
          src: de,
          alt: "Friends emoji"
        }, null, -1)), o("div", zn, m(("t" in t ? t.t : e(l))("frens.referrals.invited_title")), 1), o("div", jn, m(t.usedInvitation), 1)])])
      }
    }
  }),
  Yn = h(qn, [
    ["__scopeId", "data-v-435c4437"]
  ]),
  Gn = {
    class: "pages-frens-note-card"
  },
  Zn = ["innerHTML"],
  Jn = $({
    __name: "FrensNoteCard",
    props: {
      text: {}
    },
    setup(g) {
      return (t, s) => (a(), d("div", Gn, [s[0] || (s[0] = o("img", {
        src: me,
        alt: "Friends emoji",
        class: "emoji"
      }, null, -1)), o("div", {
        class: "text",
        innerHTML: t.text
      }, null, 8, Zn)]))
    }
  }),
  Qn = h(Jn, [
    ["__scopeId", "data-v-0235c88a"]
  ]),
  Xn = {
    class: "pages-frens-points-section"
  },
  et = {
    class: "title"
  },
  nt = {
    class: "balance-card"
  },
  tt = {
    class: "inner"
  },
  st = {
    class: "points"
  },
  ot = {
    class: "description"
  },
  at = $({
    __name: "FrensPointsSection",
    props: {
      amountForClaim: {},
      canClaim: {
        type: Boolean
      },
      canClaimAt: {},
      percentFromFriends: {},
      percentFromFriendsOfFriends: {},
      claimCallback: {
        type: Function
      }
    },
    emits: ["ui:claimed"],
    setup(g, {
      emit: t
    }) {
      const s = g,
        n = t,
        F = ue(),
        r = U(!1),
        f = async () => {
          r.value = !0;
          const i = performance.now(),
            _ = await s.claimCallback();
          if (_.err) {
            r.value = !1;
            return
          }
          const b = performance.now() - i;
          b < 2e3 && await new Promise(A => setTimeout(A, 1e3 - b)), r.value = !1, n("ui:claimed", _.data)
        }, u = I(() => {
          if (s.canClaim) return l("frens.points.ready_to_claim");
          if (!F.ms100ticker.value || !s.canClaimAt) return;
          const i = Ee(s.canClaimAt - F.ms100ticker.value, "letters");
          return l("base.claim_next_in", {
            time: i
          })
        });
      return (i, _) => {
        const b = J,
          A = N,
          S = tn,
          T = Qn;
        return a(), d("div", Xn, [c(b, {
          icon: "bp-logo-circle",
          class: "icons"
        }), o("div", et, m(("t" in i ? i.t : e(l))("frens.points.title")), 1), o("div", nt, [c(A, {
          name: "logo",
          class: "icon"
        }), o("div", tt, [o("div", st, m(`${("formatBp"in i?i.formatBp:e(G))(i.amountForClaim)} BP`), 1), o("div", ot, m(e(u)), 1)]), c(S, {
          label: ("t" in i ? i.t : e(l))("base.claim"),
          "can-claim": i.canClaim,
          "claim-fn": f,
          class: "claim-pill"
        }, null, 8, ["label", "can-claim"])]), c(T, {
          text: ("t" in i ? i.t : e(l))("frens.points.note_text", {
            percentFromFriends: `${i.percentFromFriends}%`,
            percentFromFriendsOfFriends: `+ ${i.percentFromFriendsOfFriends}%`
          }),
          class: "note-card"
        }, null, 8, ["text"])])
      }
    }
  }),
  rt = h(at, [
    ["__scopeId", "data-v-3f77081e"]
  ]),
  it = {
    class: "pages-frens-list-item"
  },
  lt = {
    class: "avatar"
  },
  ct = {
    class: "letter"
  },
  dt = ["src"],
  mt = {
    class: "details"
  },
  ut = {
    class: "username"
  },
  _t = {
    class: "frens-count-compose"
  },
  pt = {
    class: "counter"
  },
  ft = {
    key: 0,
    class: "balance"
  },
  vt = $({
    __name: "FrensListItem",
    props: {
      fren: {}
    },
    setup(g) {
      return (t, s) => {
        const n = N,
          F = Z,
          r = Ne("img-loader");
        return a(), d("div", it, [o("div", lt, [o("div", ct, m(t.fren.letterAvatar), 1), t.fren.avatarUrl ? Ke((a(), d("img", {
          key: 0,
          src: t.fren.avatarUrl,
          alt: "Avatar"
        }, null, 8, dt)), [
          [r]
        ]) : V("", !0)]), o("div", mt, [o("div", ut, m(t.fren.username), 1), o("div", _t, [c(n, {
          name: "users",
          class: "icon"
        }), o("div", pt, m(t.fren.totalFrens > 0 ? "+ " : "") + m(t.fren.totalFrens), 1)])]), t.fren.farmBalance ? (a(), d("div", ft, m(("formatBp" in t ? t.formatBp : e(G))(t.fren.farmBalance)) + " BP", 1)) : (a(), w(F, {
          key: 1,
          class: "skeleton"
        }))])
      }
    }
  }),
  gt = h(vt, [
    ["__scopeId", "data-v-5f3d3da2"]
  ]),
  Ft = {
    class: "pages-frens-referral-modal"
  },
  bt = {
    class: "title"
  },
  ht = {
    class: "list"
  },
  $t = $({
    __name: "FrensReferralModal",
    props: {
      frens: {}
    },
    emits: ["close"],
    setup(g, {
      emit: t
    }) {
      const s = t;
      return _e().initHandler(() => s("close"), "frens-referral-modal"), (n, F) => {
        const r = gt,
          f = an;
        return a(), w(f, null, {
          default: k(() => [o("div", Ft, [o("div", bt, m(("t" in n ? n.t : e(l))("frens.referrals.title")), 1), o("div", ht, [(a(!0), d(R, null, E(n.frens, u => (a(), w(r, {
            key: u.username,
            fren: u
          }, null, 8, ["fren"]))), 128))])])]),
          _: 1
        })
      }
    }
  }),
  yt = h($t, [
    ["__scopeId", "data-v-907d8ddc"]
  ]),
  kt = $({
    __name: "InviteFrenModal",
    props: Me({
      referralToken: {
        type: String,
        required: !0
      },
      shareText: {
        type: String,
        default: () => l("frens.invite.share_text")
      },
      qr: {
        type: Boolean,
        default: !1
      }
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(g) {
      const t = De(g, "modelValue");
      return (s, n) => {
        const F = Ve;
        return a(), w(F, {
          modelValue: t.value,
          "onUpdate:modelValue": n[0] || (n[0] = r => t.value = r),
          title: ("t" in s ? s.t : e(l))("frens.base.invite"),
          "share-text": g.shareText,
          startapp: `ref_${g.referralToken}`,
          "copied-notification": ("t" in s ? s.t : e(l))("frens.invite.link_copied"),
          qr: g.qr,
          onShareLink: n[1] || (n[1] = r => ("useAnalytics" in s ? s.useAnalytics : e(Y))().friendsInvite.inviteSent({
            method: "share"
          })),
          onCopyLink: n[2] || (n[2] = r => ("useAnalytics" in s ? s.useAnalytics : e(Y))().friendsInvite.inviteSent({
            method: "copy"
          }))
        }, null, 8, ["modelValue", "title", "share-text", "startapp", "copied-notification", "qr"])
      }
    }
  }),
  wt = h(kt, [
    ["__scopeId", "data-v-ea93b515"]
  ]),
  At = {
    class: "frens-blum-leaderboard-intro-sheet"
  },
  Ct = ["src"],
  It = {
    class: "description"
  },
  ie = "frens_blum_leaderboards_welcome",
  Bt = $({
    __name: "IntroSheet",
    setup(g) {
      const t = U(!!q().$webApp.storage.local.get(ie));
      return He(t, s => {
        s || q().$webApp.storage.local.set(ie, "true")
      }), (s, n) => {
        const F = xe("I18nT"),
          r = ve,
          f = ze;
        return a(), w(f, {
          modelValue: e(t),
          "onUpdate:modelValue": n[1] || (n[1] = u => fe(t) ? t.value = u : null)
        }, {
          default: k(() => [o("div", At, [c(F, {
            tag: "div",
            class: "title",
            keypath: "frens.leaderboards.intro_sheet.title"
          }, {
            lineBreak: k(() => n[2] || (n[2] = [o("br", null, null, -1)])),
            trophyIcon: k(() => n[3] || (n[3] = [o("i", {
              class: "trophy"
            }, null, -1)])),
            _: 1
          }), o("img", {
            src: ("imgResolver" in s ? s.imgResolver : e(We))("frens/leaderboards-intro-sheet", "webp")
          }, null, 8, Ct), o("div", It, m(("t" in s ? s.t : e(l))("frens.leaderboards.intro_sheet.description")), 1), c(r, {
            label: ("t" in s ? s.t : e(l))("base.close"),
            size: e(pe).LARGE,
            fill: "",
            onClick: n[0] || (n[0] = u => t.value = !1)
          }, null, 8, ["label", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  St = h(Bt, [
    ["__scopeId", "data-v-2601282b"]
  ]),
  Tt = {
    class: "pages-frens"
  },
  Ut = $({
    __name: "Frens",
    setup(g) {
      const t = ue(),
        s = se(),
        {
          my: n
        } = je(),
        F = U(),
        r = U(),
        f = U();
      let u;
      const i = () => {
          u && (clearInterval(u), u = void 0)
        },
        _ = U(!1),
        b = U(!1);
      _e().initHandler(() => qe().push({
        name: "index"
      }), "frens");
      const A = async () => ae(await L.getFrens({
        pageSize: 1e3
      })), S = async () => {
        const v = await L.getFrensUsing();
        if (!re(v)) return v;
        if (!v.data.enableNewBalance) return D({
          frensUsing: v.data,
          walletFrensBalance: void 0,
          enableNewBalance: !1
        });
        const y = await L.getWalletFrensBalance();
        return re(y) ? D({
          frensUsing: v.data,
          walletFrensBalance: y.data,
          enableNewBalance: !0
        }) : y
      }, T = async () => ae(await L.getFrensTradingUsing()), H = v => {
        i();
        const p = t.getCurrentTimestamp();
        if (p && v.frensUsing.canClaimAt) {
          const y = v.frensUsing.canClaimAt - p;
          y > 0 && (u = setTimeout(O.exec, y))
        }
        r.value = v
      }, C = async () => {
        if (!r.value) throw Ge("Frens data is not loaded");
        if (!r.value.enableNewBalance) {
          const y = await L.claimFrens();
          return y.err ? y : (O.exec(), D(y.data.claimBalance))
        }
        const p = await L.claimWalletFrensBalance();
        return p.err ? p : (O.exec(), D(p.data.amount))
      }, x = v => {
        Ze().makeConfetti();
        const p = G(v);
        Je().success(l("base.you_got_bp", {
          bp: p
        })), Y().friendsInvite.frensClaimed(v), setTimeout(() => {
          O.exec(), se().update()
        }, 5e3)
      }, W = z(A, v => F.value = v, 3e4), O = z(S, H, 1e4), Q = z(T, v => f.value = v, 1e4), X = I(() => {
        var p;
        if (!s.points) return;
        const v = s.pointSymbols.value.ton;
        return v ? {
          tonAmount: v.balance.value,
          usdAmount: (p = v.fiatValue.USD) == null ? void 0 : p.value
        } : {
          tonAmount: new oe(0),
          usdAmount: new oe(0)
        }
      }), be = I(() => [{
        key: "ton",
        label: l("frens.tab.ton")
      }, {
        key: "points",
        label: l("frens.tab.points")
      }]), K = I(() => {
        if (r.value) return r.value.enableNewBalance ? {
          amountForClaim: r.value.walletFrensBalance.amount,
          canClaim: r.value.walletFrensBalance.canClaim,
          canClaimAt: r.value.walletFrensBalance.canClaimAt
        } : {
          amountForClaim: r.value.frensUsing.amountForClaim,
          canClaim: r.value.frensUsing.canClaim,
          canClaimAt: r.value.frensUsing.canClaimAt
        }
      });
      return (async () => {
        await Promise.all([W.exec(), O.exec(), Q.exec()])
      })(), Ye(() => {
        W.destroy(), O.destroy(), Q.destroy(), i()
      }), (v, p) => {
        const y = gn,
          he = Rn,
          $e = Hn,
          ee = Yn,
          ye = rt,
          ke = sn,
          we = N,
          Ae = ve,
          Ce = on,
          Ie = yt,
          Be = wt,
          Se = St,
          Te = Qe;
        return a(), d("div", Tt, [e(F) && e(r) && e(f) && e(K) && e(n) ? (a(), d(R, {
          key: 0
        }, [c(y, {
          my: e(n)
        }, null, 8, ["my"]), e(F).frens.length === 0 ? (a(), w(he, {
          key: 0,
          "frens-using": e(r).frensUsing,
          "frens-trading-using": e(f)
        }, null, 8, ["frens-using", "frens-trading-using"])) : (a(), w(ke, {
          key: 1,
          tabs: e(be),
          class: "tabs"
        }, {
          ton: k(() => {
            var B, ne;
            return [c($e, {
              "frens-trading": e(f),
              "ton-amount": (B = e(X)) == null ? void 0 : B.tonAmount,
              "usd-amount": (ne = e(X)) == null ? void 0 : ne.usdAmount
            }, null, 8, ["frens-trading", "ton-amount", "usd-amount"]), c(ee, {
              "used-invitation": e(r).frensUsing.usedInvitation,
              "onOpen:referral": p[0] || (p[0] = Nt => b.value = !0)
            }, null, 8, ["used-invitation"])]
          }),
          points: k(() => [c(ye, {
            "amount-for-claim": e(K).amountForClaim,
            "can-claim": e(K).canClaim,
            "can-claim-at": e(K).canClaimAt,
            "percent-from-friends": e(r).frensUsing.percentFromFriends,
            "percent-from-friends-of-friends": e(r).frensUsing.percentFromFriendsOfFriends,
            "claim-callback": C,
            "onUi:claimed": p[1] || (p[1] = B => x(B))
          }, null, 8, ["amount-for-claim", "can-claim", "can-claim-at", "percent-from-friends", "percent-from-friends-of-friends"]), c(ee, {
            "used-invitation": e(r).frensUsing.usedInvitation,
            "onOpen:referral": p[2] || (p[2] = B => b.value = !0)
          }, null, 8, ["used-invitation"])]),
          _: 1
        }, 8, ["tabs"])), c(Ce, null, {
          default: k(() => [c(Ae, {
            label: ("t" in v ? v.t : e(l))("frens.base.invite"),
            fill: "",
            size: e(pe).LARGE,
            onClick: p[3] || (p[3] = B => _.value = !0)
          }, {
            left: k(() => [c(we, {
              name: "users",
              class: "button-icon"
            })]),
            _: 1
          }, 8, ["label", "size"])]),
          _: 1
        }), e(b) ? (a(), w(Ie, {
          key: 2,
          frens: e(F).frens,
          onClose: p[4] || (p[4] = B => b.value = !1)
        }, null, 8, ["frens"])) : V("", !0), c(Be, {
          modelValue: e(_),
          "onUpdate:modelValue": p[5] || (p[5] = B => fe(_) ? _.value = B : null),
          "referral-token": e(r).frensUsing.referralToken,
          qr: ""
        }, null, 8, ["modelValue", "referral-token"]), c(Se)], 64)) : (a(), w(Te, {
          key: 1
        }))])
      }
    }
  }),
  Pt = h(Ut, [
    ["__scopeId", "data-v-60e305b7"]
  ]),
  Rt = {},
  Ot = {
    class: "frens-page page"
  };

function Lt(g, t) {
  const s = Pt;
  return a(), d("div", Ot, [c(s)])
}
const qt = h(Rt, [
  ["render", Lt],
  ["__scopeId", "data-v-6f807814"]
]);
export {
  qt as
  default
};