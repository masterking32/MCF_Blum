import {
  d as $,
  k as Te,
  y as U,
  z as P,
  j as C,
  A as Ue,
  o as a,
  c as d,
  a as o,
  m as le,
  t as m,
  e,
  C as l,
  b as c,
  D as k,
  E as Pe,
  F as R,
  q as E,
  n as q,
  G as V,
  H as Re,
  _ as N,
  I as ce,
  f as h,
  J as de,
  K as M,
  L as me,
  h as j,
  M as te,
  N as w,
  O as Oe,
  P as ue,
  Q as Le,
  R as G,
  T as Ee,
  w as Ne,
  U as Ke,
  V as Me,
  W as De,
  X as Y,
  Y as Ve,
  Z as He,
  $ as xe,
  a0 as We,
  a1 as _e,
  p as pe,
  x as fe,
  a2 as ze,
  a3 as se,
  a4 as qe,
  a5 as z,
  a6 as oe,
  a7 as je,
  a8 as Ye,
  a9 as L,
  aa as D,
  ab as Ge,
  ac as Ze,
  ad as Je,
  ae,
  af as re
} from "./DkS1dxhG.js";
import {
  _ as Qe,
  a as Xe
} from "./B7Zt5nj-.js";
import {
  _ as Z
} from "./D1KV1VFf.js";
import {
  _ as en
} from "./Cz5nk4wZ.js";
import {
  _ as nn
} from "./Cp4l7aCH.js";
import {
  _ as tn
} from "./BGDdPA0e.js";
import {
  _ as sn
} from "./BrHQQoPY.js";
import {
  _ as on
} from "./BKsjqm17.js";
import "./BKBXzJOF.js";
const an = {
    class: "frens-blum-leaderboard-my"
  },
  rn = {
    class: "header"
  },
  ln = {
    class: "title"
  },
  cn = {
    class: "label"
  },
  dn = {
    class: "card"
  },
  mn = {
    class: "dots"
  },
  un = {
    class: "item"
  },
  _n = {
    class: "item"
  },
  pn = ["onClick"],
  fn = $({
    __name: "My",
    props: {
      my: {}
    },
    setup(g) {
      const t = g,
        s = Te().getters.mustGetUser,
        n = U(P.BP),
        F = C(() => [P.BP, P.MP]),
        r = C(() => t.my[n.value]),
        f = Ue("listEl"),
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
        i = Re(() => {
          if (!f.value) return;
          const _ = f.value.children[0].offsetHeight + 10,
            b = f.value.scrollTop;
          Math.round(b / _) === 0 ? n.value = P.BP : n.value = P.MP
        }, 50).debouncedFunction;
      return (_, b) => {
        const A = N,
          S = ce,
          T = Qe,
          H = Xe;
        return a(), d("div", an, [o("div", rn, [o("div", ln, [b[2] || (b[2] = o("i", {
          class: "trophy"
        }, null, -1)), le(m(("t" in _ ? _.t : e(l))("frens.leaderboards.my.title")), 1)]), c(S, {
          class: "link",
          to: {
            name: "frens-leaderboards",
            query: {
              source: ("ANALYTICS_FRENS_LEADERBOARD_SOURCE" in _ ? _.ANALYTICS_FRENS_LEADERBOARD_SOURCE : e(Pe)).FRIENDS_BAR
            }
          }
        }, {
          default: k(() => [o("div", cn, m(("t" in _ ? _.t : e(l))("frens.leaderboards.my.see_all")), 1), c(A, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"])]), o("div", dn, [c(H, {
          amount: e(r).amount,
          position: e(r).position,
          username: e(s).username,
          label: ("t" in _ ? _.t : e(l))("frens.leaderboards.my.your_rating"),
          "avatar-url": e(s).avatarUrl,
          "points-postfix": e(n),
          "no-position": ""
        }, {
          after: k(() => [o("div", mn, [o("div", {
            ref: "listEl",
            class: "list",
            onScroll: b[0] || (b[0] = (...I) => e(i) && e(i)(...I)),
            onTouchmove: b[1] || (b[1] = (...I) => e(i) && e(i)(...I))
          }, [o("div", un, [c(T, {
            position: _.my[e(P).BP].position
          }, null, 8, ["position"])]), o("div", _n, [c(T, {
            position: _.my[e(P).MP].position
          }, null, 8, ["position"])])], 544), (a(!0), d(R, null, E(e(F), (I, x) => (a(), d("div", {
            key: I,
            class: q([
              [{
                active: e(n) === I
              }, `idx-${x}`], "dot"
            ])
          }, [e(n) !== I ? (a(), d("button", {
            key: 0,
            type: "button",
            class: "reset",
            onClick: W => u(I)
          }, null, 8, pn)) : V("", !0)], 2))), 128))])]),
          _: 1
        }, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"])])])
      }
    }
  }),
  vn = h(fn, [
    ["__scopeId", "data-v-4287a4e0"]
  ]),
  gn = {
    class: "pages-frens-icons"
  },
  Fn = $({
    __name: "FrensHeadingIcons",
    props: {
      icon: {}
    },
    setup(g) {
      return (t, s) => {
        const n = N;
        return a(), d("div", gn, [s[0] || (s[0] = o("img", {
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
  J = h(Fn, [
    ["__scopeId", "data-v-54907da8"]
  ]),
  bn = {
    class: "title"
  },
  hn = {
    class: "value"
  },
  $n = {
    class: "text"
  },
  yn = $({
    __name: "FrensCommissionsCards",
    props: {
      type: {},
      percentFromFriends: {},
      percentFromFriendsOfFriends: {}
    },
    setup(g) {
      const t = g,
        s = C(() => t.type === "points" ? "sm" : "md"),
        n = C(() => t.type === "points" ? [{
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
          class: q(["pages-frens-commissions-cards", `size-${e(s)}`])
        }, [e(n) ? (a(!0), d(R, {
          key: 0
        }, E(e(n), u => (a(), d("div", {
          key: u.title,
          class: "card"
        }, [o("div", bn, m(u.title), 1), o("div", hn, m(u.value), 1), o("div", $n, [(a(!0), d(R, null, E(u.text, i => (a(), d("span", {
          key: i.value,
          class: q([{
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
  ve = h(yn, [
    ["__scopeId", "data-v-e549e0de"]
  ]),
  kn = {
    class: "content"
  },
  wn = {
    class: "title"
  },
  An = {
    class: "subtitle"
  },
  In = $({
    __name: "FrensHowItWorks",
    setup(g) {
      const t = () => j().$webApp.openLink("https://www.blum.io/post/blum-trading-referral-system");
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
        }, null, -1)), o("div", kn, [o("div", wn, m(("t" in s ? s.t : e(l))("frens.ton.how_it_works.title")), 1), o("div", An, m(("t" in s ? s.t : e(l))("frens.ton.how_it_works.subtitle")), 1)]), c(F, {
          name: "chevron-right",
          class: "icon"
        })])
      }
    }
  }),
  ge = h(In, [
    ["__scopeId", "data-v-8cb31b17"]
  ]),
  Cn = {
    class: "pages-frens-empty-state"
  },
  Bn = {
    class: "sections"
  },
  Sn = {
    class: "title"
  },
  Tn = {
    key: 0,
    class: "subtitle"
  },
  Un = $({
    __name: "FrensEmptyState",
    props: {
      frensUsing: {},
      frensTradingUsing: {}
    },
    setup(g) {
      const t = g,
        s = C(() => [{
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
          f = ve,
          u = ge;
        return a(), d("div", Cn, [o("div", Bn, [(a(!0), d(R, null, E(e(s), i => (a(), d("div", {
          key: i.title,
          class: "section"
        }, [c(r, {
          icon: i.icon,
          class: "icons"
        }, null, 8, ["icon"]), o("div", Sn, m(i.title), 1), i.subtitle ? (a(), d("div", Tn, m(i.subtitle), 1)) : V("", !0), c(f, {
          class: "cards",
          type: i.type,
          "percent-from-friends": i.percentFromFriends,
          "percent-from-friends-of-friends": i.percentFromFriendsOfFriends
        }, null, 8, ["type", "percent-from-friends", "percent-from-friends-of-friends"])]))), 128))]), c(u)])
      }
    }
  }),
  Pn = h(Un, [
    ["__scopeId", "data-v-5b2c2224"]
  ]),
  Rn = {
    class: "pages-frens-ton-section"
  },
  On = {
    key: 0,
    class: "with-balance"
  },
  Ln = {
    class: "title"
  },
  En = {
    key: 0,
    class: "balance-ton"
  },
  Nn = {
    key: 2,
    class: "balance-usd"
  },
  Kn = {
    key: 1,
    class: "empty"
  },
  Mn = {
    class: "title"
  },
  Dn = $({
    __name: "FrensTonSection",
    props: {
      frensTrading: {},
      tonAmount: {},
      usdAmount: {}
    },
    setup(g) {
      const t = g,
        s = C(() => {
          var n;
          return !!((n = t.tonAmount) != null && n.gt(0))
        });
      return (n, F) => {
        const r = Oe,
          f = Z,
          u = ce,
          i = ge,
          _ = J,
          b = ve;
        return a(), d("div", Rn, [e(s) ? (a(), d("div", On, [c(r, {
          class: "background"
        }), o("div", Ln, m(("t" in n ? n.t : e(l))("frens.ton.title")), 1), n.tonAmount ? (a(), d("div", En, m(("getWalletAmount" in n ? n.getWalletAmount : e(te))(n.tonAmount, "TON").defaultWithSymbol), 1)) : (a(), w(f, {
          key: 1,
          class: "balance-ton-skeleton"
        })), n.usdAmount ? (a(), d("div", Nn, m(("getWalletAmount" in n ? n.getWalletAmount : e(te))(n.usdAmount, "USD").defaultWithSymbol), 1)) : (a(), w(f, {
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
        })])) : (a(), d("div", Kn, [c(_, {
          icon: "ton-logo-ref",
          class: "icons"
        }), o("div", Mn, m(("t" in n ? n.t : e(l))("frens.ton.zero_earn.title")), 1), c(b, {
          type: "ton",
          "percent-from-friends": n.frensTrading.percentFromFriends,
          "percent-from-friends-of-friends": n.frensTrading.percentFromFriendsOfFriends
        }, null, 8, ["percent-from-friends", "percent-from-friends-of-friends"]), c(i, {
          class: "how-it-works"
        })]))])
      }
    }
  }),
  Vn = h(Dn, [
    ["__scopeId", "data-v-7de774b9"]
  ]),
  Hn = {
    class: "pages-frens-referrals-section"
  },
  xn = {
    class: "card"
  },
  Wn = {
    class: "title"
  },
  zn = {
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
        const n = en;
        return a(), d("div", Hn, [c(n, {
          label: ("t" in t ? t.t : e(l))("frens.referrals.title"),
          "click-callback": () => t.$emit("open:referral")
        }, null, 8, ["label", "click-callback"]), o("div", xn, [s[0] || (s[0] = o("img", {
          src: de,
          alt: "Friends emoji"
        }, null, -1)), o("div", Wn, m(("t" in t ? t.t : e(l))("frens.referrals.invited_title")), 1), o("div", zn, m(t.usedInvitation), 1)])])
      }
    }
  }),
  jn = h(qn, [
    ["__scopeId", "data-v-435c4437"]
  ]),
  Yn = {
    class: "pages-frens-note-card"
  },
  Gn = ["innerHTML"],
  Zn = $({
    __name: "FrensNoteCard",
    props: {
      text: {}
    },
    setup(g) {
      return (t, s) => (a(), d("div", Yn, [s[0] || (s[0] = o("img", {
        src: me,
        alt: "Friends emoji",
        class: "emoji"
      }, null, -1)), o("div", {
        class: "text",
        innerHTML: t.text
      }, null, 8, Gn)]))
    }
  }),
  Jn = h(Zn, [
    ["__scopeId", "data-v-0235c88a"]
  ]),
  Qn = {
    class: "pages-frens-points-section"
  },
  Xn = {
    class: "title"
  },
  et = {
    class: "balance-card"
  },
  nt = {
    class: "inner"
  },
  tt = {
    class: "points"
  },
  st = {
    class: "description"
  },
  ot = $({
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
        }, u = C(() => {
          if (s.canClaim) return l("frens.points.ready_to_claim");
          if (!F.ms100ticker.value || !s.canClaimAt) return;
          const i = Le(s.canClaimAt - F.ms100ticker.value, "letters");
          return l("base.claim_next_in", {
            time: i
          })
        });
      return (i, _) => {
        const b = J,
          A = N,
          S = nn,
          T = Jn;
        return a(), d("div", Qn, [c(b, {
          icon: "bp-logo-circle",
          class: "icons"
        }), o("div", Xn, m(("t" in i ? i.t : e(l))("frens.points.title")), 1), o("div", et, [c(A, {
          name: "logo",
          class: "icon"
        }), o("div", nt, [o("div", tt, m(`${("formatBp"in i?i.formatBp:e(G))(i.amountForClaim)} BP`), 1), o("div", st, m(e(u)), 1)]), c(S, {
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
  at = h(ot, [
    ["__scopeId", "data-v-3f77081e"]
  ]),
  rt = {
    class: "pages-frens-list-item"
  },
  it = {
    class: "avatar"
  },
  lt = {
    class: "letter"
  },
  ct = ["src"],
  dt = {
    class: "details"
  },
  mt = {
    class: "username"
  },
  ut = {
    class: "frens-count-compose"
  },
  _t = {
    class: "counter"
  },
  pt = {
    key: 0,
    class: "balance"
  },
  ft = $({
    __name: "FrensListItem",
    props: {
      fren: {}
    },
    setup(g) {
      return (t, s) => {
        const n = N,
          F = Z,
          r = Ee("img-loader");
        return a(), d("div", rt, [o("div", it, [o("div", lt, m(t.fren.letterAvatar), 1), t.fren.avatarUrl ? Ne((a(), d("img", {
          key: 0,
          src: t.fren.avatarUrl,
          alt: "Avatar"
        }, null, 8, ct)), [
          [r]
        ]) : V("", !0)]), o("div", dt, [o("div", mt, m(t.fren.username), 1), o("div", ut, [c(n, {
          name: "users",
          class: "icon"
        }), o("div", _t, m(t.fren.totalFrens > 0 ? "+ " : "") + m(t.fren.totalFrens), 1)])]), t.fren.farmBalance ? (a(), d("div", pt, m(("formatBp" in t ? t.formatBp : e(G))(t.fren.farmBalance)) + " BP", 1)) : (a(), w(F, {
          key: 1,
          class: "skeleton"
        }))])
      }
    }
  }),
  vt = h(ft, [
    ["__scopeId", "data-v-5f3d3da2"]
  ]),
  gt = {
    class: "pages-frens-referral-modal"
  },
  Ft = {
    class: "title"
  },
  bt = {
    class: "list"
  },
  ht = $({
    __name: "FrensReferralModal",
    props: {
      frens: {}
    },
    emits: ["close"],
    setup(g, {
      emit: t
    }) {
      const s = t;
      return Ke().initHandler(() => s("close"), "frens-referral-modal"), (n, F) => {
        const r = vt,
          f = on;
        return a(), w(f, null, {
          default: k(() => [o("div", gt, [o("div", Ft, m(("t" in n ? n.t : e(l))("frens.referrals.title")), 1), o("div", bt, [(a(!0), d(R, null, E(n.frens, u => (a(), w(r, {
            key: u.username,
            fren: u
          }, null, 8, ["fren"]))), 128))])])]),
          _: 1
        })
      }
    }
  }),
  $t = h(ht, [
    ["__scopeId", "data-v-907d8ddc"]
  ]),
  yt = $({
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
  kt = h(yt, [
    ["__scopeId", "data-v-ea93b515"]
  ]),
  wt = {
    class: "frens-blum-leaderboard-intro-sheet"
  },
  At = ["src"],
  It = {
    class: "description"
  },
  ie = "frens_blum_leaderboards_welcome",
  Ct = $({
    __name: "IntroSheet",
    setup(g) {
      const t = U(!!j().$webApp.storage.local.get(ie));
      return He(t, s => {
        s || j().$webApp.storage.local.set(ie, "true")
      }), (s, n) => {
        const F = xe("I18nT"),
          r = fe,
          f = ze;
        return a(), w(f, {
          modelValue: e(t),
          "onUpdate:modelValue": n[1] || (n[1] = u => pe(t) ? t.value = u : null)
        }, {
          default: k(() => [o("div", wt, [c(F, {
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
          }, null, 8, At), o("div", It, m(("t" in s ? s.t : e(l))("frens.leaderboards.intro_sheet.description")), 1), c(r, {
            label: ("t" in s ? s.t : e(l))("base.close"),
            size: e(_e).LARGE,
            fill: "",
            onClick: n[0] || (n[0] = u => t.value = !1)
          }, null, 8, ["label", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Bt = h(Ct, [
    ["__scopeId", "data-v-2601282b"]
  ]),
  St = {
    class: "pages-frens"
  },
  Tt = $({
    __name: "Frens",
    setup(g) {
      const t = ue(),
        s = se(),
        {
          my: n
        } = qe(),
        F = U(),
        r = U(),
        f = U();
      let u;
      const i = () => {
          u && (clearInterval(u), u = void 0)
        },
        _ = U(!1),
        b = U(!1),
        A = async () => ae(await L.getFrens({
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
        }, I = async () => {
          if (!r.value) throw Ye("Frens data is not loaded");
          if (!r.value.enableNewBalance) {
            const y = await L.claimFrens();
            return y.err ? y : (O.exec(), D(y.data.claimBalance))
          }
          const p = await L.claimWalletFrensBalance();
          return p.err ? p : (O.exec(), D(p.data.amount))
        }, x = v => {
          Ge().makeConfetti();
          const p = G(v);
          Ze().success(l("base.you_got_bp", {
            bp: p
          })), Y().friendsInvite.frensClaimed(v), setTimeout(() => {
            O.exec(), se().update()
          }, 5e3)
        }, W = z(A, v => F.value = v, 3e4), O = z(S, H, 1e4), Q = z(T, v => f.value = v, 1e4), X = C(() => {
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
        }), Fe = C(() => [{
          key: "ton",
          label: l("frens.tab.ton")
        }, {
          key: "points",
          label: l("frens.tab.points")
        }]), K = C(() => {
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
      })(), je(() => {
        W.destroy(), O.destroy(), Q.destroy(), i()
      }), (v, p) => {
        const y = vn,
          be = Pn,
          he = Vn,
          ee = jn,
          $e = at,
          ye = tn,
          ke = N,
          we = fe,
          Ae = sn,
          Ie = $t,
          Ce = kt,
          Be = Bt,
          Se = Je;
        return a(), d("div", St, [e(F) && e(r) && e(f) && e(K) && e(n) ? (a(), d(R, {
          key: 0
        }, [c(y, {
          my: e(n)
        }, null, 8, ["my"]), e(F).frens.length === 0 ? (a(), w(be, {
          key: 0,
          "frens-using": e(r).frensUsing,
          "frens-trading-using": e(f)
        }, null, 8, ["frens-using", "frens-trading-using"])) : (a(), w(ye, {
          key: 1,
          tabs: e(Fe),
          class: "tabs"
        }, {
          ton: k(() => {
            var B, ne;
            return [c(he, {
              "frens-trading": e(f),
              "ton-amount": (B = e(X)) == null ? void 0 : B.tonAmount,
              "usd-amount": (ne = e(X)) == null ? void 0 : ne.usdAmount
            }, null, 8, ["frens-trading", "ton-amount", "usd-amount"]), c(ee, {
              "used-invitation": e(r).frensUsing.usedInvitation,
              "onOpen:referral": p[0] || (p[0] = Et => b.value = !0)
            }, null, 8, ["used-invitation"])]
          }),
          points: k(() => [c($e, {
            "amount-for-claim": e(K).amountForClaim,
            "can-claim": e(K).canClaim,
            "can-claim-at": e(K).canClaimAt,
            "percent-from-friends": e(r).frensUsing.percentFromFriends,
            "percent-from-friends-of-friends": e(r).frensUsing.percentFromFriendsOfFriends,
            "claim-callback": I,
            "onUi:claimed": p[1] || (p[1] = B => x(B))
          }, null, 8, ["amount-for-claim", "can-claim", "can-claim-at", "percent-from-friends", "percent-from-friends-of-friends"]), c(ee, {
            "used-invitation": e(r).frensUsing.usedInvitation,
            "onOpen:referral": p[2] || (p[2] = B => b.value = !0)
          }, null, 8, ["used-invitation"])]),
          _: 1
        }, 8, ["tabs"])), c(Ae, null, {
          default: k(() => [c(we, {
            label: ("t" in v ? v.t : e(l))("frens.base.invite"),
            fill: "",
            size: e(_e).LARGE,
            onClick: p[3] || (p[3] = B => _.value = !0)
          }, {
            left: k(() => [c(ke, {
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
        }, null, 8, ["frens"])) : V("", !0), c(Ce, {
          modelValue: e(_),
          "onUpdate:modelValue": p[5] || (p[5] = B => pe(_) ? _.value = B : null),
          "referral-token": e(r).frensUsing.referralToken,
          qr: ""
        }, null, 8, ["modelValue", "referral-token"]), c(Be)], 64)) : (a(), w(Se, {
          key: 1
        }))])
      }
    }
  }),
  Ut = h(Tt, [
    ["__scopeId", "data-v-d3adb12d"]
  ]),
  Pt = {},
  Rt = {
    class: "frens-page page"
  };

function Ot(g, t) {
  const s = Ut;
  return a(), d("div", Rt, [c(s)])
}
const qt = h(Pt, [
  ["render", Ot],
  ["__scopeId", "data-v-6f807814"]
]);
export {
  qt as
  default
};