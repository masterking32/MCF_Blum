import {
  d as $,
  k as Pe,
  y as U,
  z as S,
  j as B,
  A as Te,
  o as a,
  c as d,
  a as t,
  m as ie,
  t as m,
  e,
  C as c,
  b as i,
  D as k,
  F as O,
  q as L,
  n as j,
  E,
  G as Ue,
  _ as R,
  H as le,
  f as h,
  I as ce,
  J as H,
  K as de,
  h as G,
  L as ne,
  M as I,
  N as Se,
  O as me,
  P as Oe,
  Q as Y,
  R as Ke,
  w as Ne,
  T as Le,
  U as Re,
  V as xe,
  W as He,
  X as _e,
  p as ue,
  x as pe,
  Y as Me,
  Z as se,
  $ as Ee,
  a0 as z,
  a1 as te,
  a2 as We,
  a3 as Ve,
  a4 as N,
  a5 as M,
  a6 as De,
  a7 as ze,
  a8 as je,
  a9 as oe,
  aa as ae
} from "./C6VgFSU0.js";
import {
  _ as Ge,
  a as Ye
} from "./Dp570cQ5.js";
import {
  _ as q
} from "./J32XK_51.js";
import {
  _ as qe
} from "./DJ5uXdw_.js";
import {
  _ as Ze
} from "./BCXT3OaL.js";
import {
  _ as Je
} from "./CJ1Xt-f0.js";
import {
  _ as Qe
} from "./ig43WX5S.js";
import {
  _ as Xe
} from "./BKF3sP-Y.js";
import {
  _ as en
} from "./B9UYk4yB.js";
import {
  _ as nn
} from "./suJT_Una.js";
import "./C0ylq0GD.js";
const sn = {
    class: "frens-blum-leaderboard-my"
  },
  tn = {
    class: "header"
  },
  on = {
    class: "title"
  },
  an = {
    class: "label"
  },
  rn = {
    class: "card"
  },
  ln = {
    class: "dots"
  },
  cn = {
    class: "item"
  },
  dn = {
    class: "item"
  },
  mn = ["onClick"],
  _n = $({
    __name: "My",
    props: {
      my: {}
    },
    setup(b) {
      const s = b,
        o = Pe().getters.mustGetUser,
        n = U(S.BP),
        F = B(() => [S.BP, S.MP]),
        l = B(() => s.my[n.value]),
        p = Te("listEl"),
        _ = (v, g = "smooth") => {
          if (!p.value) return;
          const w = F.value.indexOf(n.value),
            P = F.value.indexOf(v),
            T = p.value.offsetHeight;
          p.value.scrollTo({
            top: P * (T + (w > P ? -1 : 1)),
            behavior: g
          })
        },
        r = Ue(() => {
          if (!p.value) return;
          const v = p.value.children[0].offsetHeight + 10,
            g = p.value.scrollTop;
          Math.round(g / v) === 0 ? n.value = S.BP : n.value = S.MP
        }, 50).debouncedFunction;
      return (v, g) => {
        const w = R,
          P = le,
          T = Ge,
          W = Ye;
        return a(), d("div", sn, [t("div", tn, [t("div", on, [g[2] || (g[2] = t("i", {
          class: "trophy"
        }, null, -1)), ie(m(("t" in v ? v.t : e(c))("frens.leaderboards.my.title")), 1)]), i(P, {
          class: "link",
          to: {
            name: "frens-leaderboards"
          }
        }, {
          default: k(() => [t("div", an, m(("t" in v ? v.t : e(c))("frens.leaderboards.my.see_all")), 1), i(w, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        })]), t("div", rn, [i(W, {
          amount: e(l).amount,
          position: e(l).position,
          username: e(o).username,
          label: ("t" in v ? v.t : e(c))("frens.leaderboards.my.your_rating"),
          "avatar-url": e(o).avatarUrl,
          "points-postfix": e(n),
          "no-position": ""
        }, {
          after: k(() => [t("div", ln, [t("div", {
            ref: "listEl",
            class: "list",
            onScroll: g[0] || (g[0] = (...C) => e(r) && e(r)(...C)),
            onTouchmove: g[1] || (g[1] = (...C) => e(r) && e(r)(...C))
          }, [t("div", cn, [i(T, {
            position: v.my[e(S).BP].position
          }, null, 8, ["position"])]), t("div", dn, [i(T, {
            position: v.my[e(S).MP].position
          }, null, 8, ["position"])])], 544), (a(!0), d(O, null, L(e(F), (C, V) => (a(), d("div", {
            key: C,
            class: j([
              [{
                active: e(n) === C
              }, `idx-${V}`], "dot"
            ])
          }, [e(n) !== C ? (a(), d("button", {
            key: 0,
            type: "button",
            class: "reset",
            onClick: D => _(C)
          }, null, 8, mn)) : E("", !0)], 2))), 128))])]),
          _: 1
        }, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"])])])
      }
    }
  }),
  un = h(_n, [
    ["__scopeId", "data-v-aed45b1c"]
  ]),
  pn = {
    class: "pages-frens-icons"
  },
  fn = $({
    __name: "FrensHeadingIcons",
    props: {
      icon: {}
    },
    setup(b) {
      return (s, o) => {
        const n = R;
        return a(), d("div", pn, [o[0] || (o[0] = t("img", {
          src: ce,
          alt: "Friends emoji",
          class: "emoji"
        }, null, -1)), i(n, {
          name: "arrow-right-2",
          class: "arrow"
        }), i(n, {
          name: s.icon,
          class: "icon"
        }, null, 8, ["name"])])
      }
    }
  }),
  Z = h(fn, [
    ["__scopeId", "data-v-54907da8"]
  ]),
  vn = {
    class: "title"
  },
  gn = {
    class: "value"
  },
  Fn = {
    class: "text"
  },
  bn = $({
    __name: "FrensCommissionsCards",
    props: {
      type: {},
      percentFromFriends: {},
      percentFromFriendsOfFriends: {}
    },
    setup(b) {
      const s = b,
        o = B(() => s.type === "points" ? "sm" : "md"),
        n = B(() => s.type === "points" ? [{
          title: c("frens.points.cards.friends.title"),
          value: `${H(s.percentFromFriends,{trim:!0})}%`,
          text: [{
            value: c("frens.points.cards.friends.text"),
            highlighted: !0
          }]
        }, {
          title: c("frens.points.cards.friends_of_friends.title"),
          value: `${H(s.percentFromFriendsOfFriends,{trim:!0})}%`,
          text: [{
            value: c("frens.points.cards.friends_of_friends.text"),
            highlighted: !0
          }]
        }] : [{
          title: c("frens.ton.cards.friends.title"),
          value: `${H(s.percentFromFriends,{trim:!0})}%`,
          text: [{
            value: c("frens.ton.cards.friends.text.1"),
            highlighted: !0
          }, {
            value: ` ${c("frens.ton.cards.friends.text.2")}`,
            highlighted: !1
          }]
        }, {
          title: c("frens.ton.cards.friends_of_friends.title"),
          value: `${H(s.percentFromFriendsOfFriends,{trim:!0})}%`,
          text: [{
            value: c("frens.ton.cards.friends_of_friends.text.1"),
            highlighted: !0
          }, {
            value: ` ${c("frens.ton.cards.friends_of_friends.text.2")}`,
            highlighted: !1
          }]
        }]);
      return (F, l) => {
        const p = q;
        return a(), d("div", {
          class: j(["pages-frens-commissions-cards", `size-${e(o)}`])
        }, [e(n) ? (a(!0), d(O, {
          key: 0
        }, L(e(n), _ => (a(), d("div", {
          key: _.title,
          class: "card"
        }, [t("div", vn, m(_.title), 1), t("div", gn, m(_.value), 1), t("div", Fn, [(a(!0), d(O, null, L(_.text, r => (a(), d("span", {
          key: r.value,
          class: j([{
            highlighted: r.highlighted
          }, "item"])
        }, m(r.value), 3))), 128))])]))), 128)) : (a(), d(O, {
          key: 1
        }, L(2, _ => i(p, {
          key: _,
          class: "skeleton"
        })), 64))], 2)
      }
    }
  }),
  fe = h(bn, [
    ["__scopeId", "data-v-e549e0de"]
  ]),
  hn = {
    class: "content"
  },
  $n = {
    class: "title"
  },
  yn = {
    class: "subtitle"
  },
  kn = $({
    __name: "FrensHowItWorks",
    setup(b) {
      const s = () => G().$webApp.openLink("https://www.blum.io/post/blum-trading-referral-system");
      return (o, n) => {
        const F = R;
        return a(), d("button", {
          type: "button",
          class: "pages-frens-how-it-works reset",
          onClick: s
        }, [n[0] || (n[0] = t("img", {
          src: de,
          alt: "Friends emoji",
          class: "emoji"
        }, null, -1)), t("div", hn, [t("div", $n, m(("t" in o ? o.t : e(c))("frens.ton.how_it_works.title")), 1), t("div", yn, m(("t" in o ? o.t : e(c))("frens.ton.how_it_works.subtitle")), 1)]), i(F, {
          name: "chevron-right",
          class: "icon"
        })])
      }
    }
  }),
  ve = h(kn, [
    ["__scopeId", "data-v-8cb31b17"]
  ]),
  wn = {
    class: "pages-frens-empty-state"
  },
  Cn = {
    class: "sections"
  },
  In = {
    class: "title"
  },
  Bn = {
    key: 0,
    class: "subtitle"
  },
  An = $({
    __name: "FrensEmptyState",
    props: {
      frensUsing: {},
      frensTradingUsing: {}
    },
    setup(b) {
      const s = b,
        o = B(() => [{
          icon: "bp-logo-circle",
          title: c("frens.empty.points.title"),
          subtitle: c("frens.empty.points.subtitle"),
          type: "points",
          percentFromFriends: s.frensUsing.percentFromFriends,
          percentFromFriendsOfFriends: s.frensUsing.percentFromFriendsOfFriends
        }, {
          icon: "ton-logo-ref",
          title: c("frens.empty.ton.title"),
          subtitle: void 0,
          type: "ton",
          percentFromFriends: s.frensTradingUsing.percentFromFriends,
          percentFromFriendsOfFriends: s.frensTradingUsing.percentFromFriendsOfFriends
        }]);
      return (n, F) => {
        const l = Z,
          p = fe,
          _ = ve;
        return a(), d("div", wn, [t("div", Cn, [(a(!0), d(O, null, L(e(o), r => (a(), d("div", {
          key: r.title,
          class: "section"
        }, [i(l, {
          icon: r.icon,
          class: "icons"
        }, null, 8, ["icon"]), t("div", In, m(r.title), 1), r.subtitle ? (a(), d("div", Bn, m(r.subtitle), 1)) : E("", !0), i(p, {
          class: "cards",
          type: r.type,
          "percent-from-friends": r.percentFromFriends,
          "percent-from-friends-of-friends": r.percentFromFriendsOfFriends
        }, null, 8, ["type", "percent-from-friends", "percent-from-friends-of-friends"])]))), 128))]), i(_)])
      }
    }
  }),
  Pn = h(An, [
    ["__scopeId", "data-v-5b2c2224"]
  ]),
  Tn = {
    class: "pages-frens-ton-section"
  },
  Un = {
    key: 0,
    class: "with-balance"
  },
  Sn = {
    class: "title"
  },
  On = {
    key: 0,
    class: "balance-ton"
  },
  Kn = {
    key: 2,
    class: "balance-usd"
  },
  Nn = {
    key: 1,
    class: "empty"
  },
  Ln = {
    class: "title"
  },
  Rn = $({
    __name: "FrensTonSection",
    props: {
      frensTrading: {},
      tonAmount: {},
      usdAmount: {}
    },
    setup(b) {
      const s = b,
        o = B(() => {
          var n;
          return !!((n = s.tonAmount) != null && n.gt(0))
        });
      return (n, F) => {
        const l = Se,
          p = q,
          _ = le,
          r = ve,
          v = Z,
          g = fe;
        return a(), d("div", Tn, [e(o) ? (a(), d("div", Un, [i(l, {
          class: "background"
        }), t("div", Sn, m(("t" in n ? n.t : e(c))("frens.ton.title")), 1), n.tonAmount ? (a(), d("div", On, m(("getWalletAmount" in n ? n.getWalletAmount : e(ne))(n.tonAmount, "TON").defaultWithSymbol), 1)) : (a(), I(p, {
          key: 1,
          class: "balance-ton-skeleton"
        })), n.usdAmount ? (a(), d("div", Kn, m(("getWalletAmount" in n ? n.getWalletAmount : e(ne))(n.usdAmount, "USD").defaultWithSymbol), 1)) : (a(), I(p, {
          key: 3,
          class: "balance-usd-skeleton"
        })), i(_, {
          to: {
            name: "wallet"
          },
          class: "wallet-btn"
        }, {
          default: k(() => [ie(m(("t" in n ? n.t : e(c))("frens.ton.go_to_wallet_text")), 1)]),
          _: 1
        }), i(r, {
          class: "how-it-works"
        })])) : (a(), d("div", Nn, [i(v, {
          icon: "ton-logo-ref",
          class: "icons"
        }), t("div", Ln, m(("t" in n ? n.t : e(c))("frens.ton.zero_earn.title")), 1), i(g, {
          type: "ton",
          "percent-from-friends": n.frensTrading.percentFromFriends,
          "percent-from-friends-of-friends": n.frensTrading.percentFromFriendsOfFriends
        }, null, 8, ["percent-from-friends", "percent-from-friends-of-friends"]), i(r, {
          class: "how-it-works"
        })]))])
      }
    }
  }),
  xn = h(Rn, [
    ["__scopeId", "data-v-7de774b9"]
  ]),
  Hn = {
    class: "pages-frens-referrals-section"
  },
  Mn = {
    class: "card"
  },
  En = {
    class: "title"
  },
  Wn = {
    class: "count"
  },
  Vn = $({
    __name: "FrensReferralsSection",
    props: {
      usedInvitation: {}
    },
    emits: ["open:referral"],
    setup(b) {
      return (s, o) => {
        const n = qe;
        return a(), d("div", Hn, [i(n, {
          label: ("t" in s ? s.t : e(c))("frens.referrals.title"),
          "click-callback": () => s.$emit("open:referral")
        }, null, 8, ["label", "click-callback"]), t("div", Mn, [o[0] || (o[0] = t("img", {
          src: ce,
          alt: "Friends emoji"
        }, null, -1)), t("div", En, m(("t" in s ? s.t : e(c))("frens.referrals.invited_title")), 1), t("div", Wn, m(s.usedInvitation), 1)])])
      }
    }
  }),
  Dn = h(Vn, [
    ["__scopeId", "data-v-435c4437"]
  ]),
  zn = {
    class: "pages-frens-note-card"
  },
  jn = ["innerHTML"],
  Gn = $({
    __name: "FrensNoteCard",
    props: {
      text: {}
    },
    setup(b) {
      return (s, o) => (a(), d("div", zn, [o[0] || (o[0] = t("img", {
        src: de,
        alt: "Friends emoji",
        class: "emoji"
      }, null, -1)), t("div", {
        class: "text",
        innerHTML: s.text
      }, null, 8, jn)]))
    }
  }),
  Yn = h(Gn, [
    ["__scopeId", "data-v-0235c88a"]
  ]),
  qn = {
    class: "pages-frens-points-section"
  },
  Zn = {
    class: "title"
  },
  Jn = {
    class: "balance-card"
  },
  Qn = {
    class: "inner"
  },
  Xn = {
    class: "points"
  },
  es = {
    class: "description"
  },
  ns = $({
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
    setup(b, {
      emit: s
    }) {
      const o = b,
        n = s,
        F = me(),
        l = U(!1),
        p = async () => {
          l.value = !0;
          const r = performance.now(),
            v = await o.claimCallback();
          if (v.err) {
            l.value = !1;
            return
          }
          const g = performance.now() - r;
          g < 2e3 && await new Promise(w => setTimeout(w, 1e3 - g)), l.value = !1, n("ui:claimed", v.data)
        }, _ = B(() => {
          if (o.canClaim) return c("frens.points.ready_to_claim");
          if (!F.ms100ticker.value || !o.canClaimAt) return;
          const r = Oe(o.canClaimAt - F.ms100ticker.value, "letters");
          return c("base.claim_next_in", {
            time: r
          })
        });
      return (r, v) => {
        const g = Z,
          w = R,
          P = Ze,
          T = Yn;
        return a(), d("div", qn, [i(g, {
          icon: "bp-logo-circle",
          class: "icons"
        }), t("div", Zn, m(("t" in r ? r.t : e(c))("frens.points.title")), 1), t("div", Jn, [i(w, {
          name: "logo",
          class: "icon"
        }), t("div", Qn, [t("div", Xn, m(`${("formatBp"in r?r.formatBp:e(Y))(r.amountForClaim)} BP`), 1), t("div", es, m(e(_)), 1)]), i(P, {
          label: ("t" in r ? r.t : e(c))("base.claim"),
          "can-claim": r.canClaim,
          "claim-fn": p,
          class: "claim-pill"
        }, null, 8, ["label", "can-claim"])]), i(T, {
          text: ("t" in r ? r.t : e(c))("frens.points.note_text", {
            percentFromFriends: `${r.percentFromFriends}%`,
            percentFromFriendsOfFriends: `+ ${r.percentFromFriendsOfFriends}%`
          }),
          class: "note-card"
        }, null, 8, ["text"])])
      }
    }
  }),
  ss = h(ns, [
    ["__scopeId", "data-v-3f77081e"]
  ]),
  ts = {
    class: "pages-frens-list-item"
  },
  os = {
    class: "avatar"
  },
  as = {
    class: "letter"
  },
  rs = ["src"],
  is = {
    class: "details"
  },
  ls = {
    class: "username"
  },
  cs = {
    class: "frens-count-compose"
  },
  ds = {
    class: "counter"
  },
  ms = {
    key: 0,
    class: "balance"
  },
  _s = $({
    __name: "FrensListItem",
    props: {
      fren: {}
    },
    setup(b) {
      return (s, o) => {
        const n = R,
          F = q,
          l = Ke("img-loader");
        return a(), d("div", ts, [t("div", os, [t("div", as, m(s.fren.letterAvatar), 1), s.fren.avatarUrl ? Ne((a(), d("img", {
          key: 0,
          src: s.fren.avatarUrl,
          alt: "Avatar"
        }, null, 8, rs)), [
          [l]
        ]) : E("", !0)]), t("div", is, [t("div", ls, m(s.fren.username), 1), t("div", cs, [i(n, {
          name: "users",
          class: "icon"
        }), t("div", ds, m(s.fren.totalFrens > 0 ? "+ " : "") + m(s.fren.totalFrens), 1)])]), s.fren.farmBalance ? (a(), d("div", ms, m(("formatBp" in s ? s.formatBp : e(Y))(s.fren.farmBalance)) + " BP", 1)) : (a(), I(F, {
          key: 1,
          class: "skeleton"
        }))])
      }
    }
  }),
  us = h(_s, [
    ["__scopeId", "data-v-5f3d3da2"]
  ]),
  ps = {
    class: "pages-frens-referral-modal"
  },
  fs = {
    class: "title"
  },
  vs = {
    class: "list"
  },
  gs = $({
    __name: "FrensReferralModal",
    props: {
      frens: {}
    },
    emits: ["close"],
    setup(b, {
      emit: s
    }) {
      const o = s;
      return Le().initHandler(() => o("close"), "frens-referral-modal"), (n, F) => {
        const l = us,
          p = Xe;
        return a(), I(p, null, {
          default: k(() => [t("div", ps, [t("div", fs, m(("t" in n ? n.t : e(c))("frens.referrals.title")), 1), t("div", vs, [(a(!0), d(O, null, L(n.frens, _ => (a(), I(l, {
            key: _.username,
            fren: _
          }, null, 8, ["fren"]))), 128))])])]),
          _: 1
        })
      }
    }
  }),
  Fs = h(gs, [
    ["__scopeId", "data-v-907d8ddc"]
  ]),
  bs = {
    class: "frens-blum-leaderboard-intro-sheet"
  },
  hs = ["src"],
  $s = {
    class: "description"
  },
  re = "frens_blum_leaderboards_welcome",
  ys = $({
    __name: "IntroSheet",
    setup(b) {
      const s = U(!!G().$webApp.storage.local.get(re));
      return Re(s, o => {
        o || G().$webApp.storage.local.set(re, "true")
      }), (o, n) => {
        const F = xe("I18nT"),
          l = pe,
          p = Me;
        return a(), I(p, {
          modelValue: e(s),
          "onUpdate:modelValue": n[1] || (n[1] = _ => ue(s) ? s.value = _ : null)
        }, {
          default: k(() => [t("div", bs, [i(F, {
            tag: "div",
            class: "title",
            keypath: "frens.leaderboards.intro_sheet.title"
          }, {
            lineBreak: k(() => n[2] || (n[2] = [t("br", null, null, -1)])),
            trophyIcon: k(() => n[3] || (n[3] = [t("i", {
              class: "trophy"
            }, null, -1)])),
            _: 1
          }), t("img", {
            src: ("imgResolver" in o ? o.imgResolver : e(He))("frens/leaderboards-intro-sheet", "webp")
          }, null, 8, hs), t("div", $s, m(("t" in o ? o.t : e(c))("frens.leaderboards.intro_sheet.description")), 1), i(l, {
            label: ("t" in o ? o.t : e(c))("base.close"),
            size: e(_e).LARGE,
            fill: "",
            onClick: n[0] || (n[0] = _ => s.value = !1)
          }, null, 8, ["label", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  ks = h(ys, [
    ["__scopeId", "data-v-2601282b"]
  ]),
  ws = {
    class: "pages-frens"
  },
  Cs = $({
    __name: "Frens",
    setup(b) {
      const s = me(),
        o = se(),
        {
          my: n
        } = Ee(),
        F = U(),
        l = U(),
        p = U();
      let _;
      const r = () => {
          _ && (clearInterval(_), _ = void 0)
        },
        v = U(!1),
        g = U(!1),
        w = async () => oe(await N.getFrens({
          pageSize: 1e3
        })), P = async () => {
          const f = await N.getFrensUsing();
          if (!ae(f)) return f;
          if (!f.data.enableNewBalance) return M({
            frensUsing: f.data,
            walletFrensBalance: void 0,
            enableNewBalance: !1
          });
          const y = await N.getWalletFrensBalance();
          return ae(y) ? M({
            frensUsing: f.data,
            walletFrensBalance: y.data,
            enableNewBalance: !0
          }) : y
        }, T = async () => oe(await N.getFrensTradingUsing()), W = f => {
          r();
          const u = s.getCurrentTimestamp();
          if (u && f.frensUsing.canClaimAt) {
            const y = f.frensUsing.canClaimAt - u;
            y > 0 && (_ = setTimeout(K.exec, y))
          }
          l.value = f
        }, C = async () => {
          if (!l.value) throw Ve("Frens data is not loaded");
          if (!l.value.enableNewBalance) {
            const y = await N.claimFrens();
            return y.err ? y : (K.exec(), M(y.data.claimBalance))
          }
          const u = await N.claimWalletFrensBalance();
          return u.err ? u : (K.exec(), M(u.data.amount))
        }, V = f => {
          De().makeConfetti();
          const u = Y(f);
          ze().success(c("base.you_got_bp", {
            bp: u
          })), je().friendsInvite.frensClaimed(f), setTimeout(() => {
            K.exec(), se().update()
          }, 5e3)
        }, D = z(w, f => F.value = f, 3e4), K = z(P, W, 1e4), J = z(T, f => p.value = f, 1e4), Q = B(() => {
          var u;
          if (!o.points) return;
          const f = o.pointSymbols.value.ton;
          return f ? {
            tonAmount: f.balance.value,
            usdAmount: (u = f.fiatValue.USD) == null ? void 0 : u.value
          } : {
            tonAmount: new te(0),
            usdAmount: new te(0)
          }
        }), ge = B(() => [{
          key: "ton",
          label: c("frens.tab.ton")
        }, {
          key: "points",
          label: c("frens.tab.points")
        }]), x = B(() => {
          if (l.value) return l.value.enableNewBalance ? {
            amountForClaim: l.value.walletFrensBalance.amount,
            canClaim: l.value.walletFrensBalance.canClaim,
            canClaimAt: l.value.walletFrensBalance.canClaimAt
          } : {
            amountForClaim: l.value.frensUsing.amountForClaim,
            canClaim: l.value.frensUsing.canClaim,
            canClaimAt: l.value.frensUsing.canClaimAt
          }
        });
      return (async () => {
        await Promise.all([D.exec(), K.exec(), J.exec()])
      })(), We(() => {
        D.destroy(), K.destroy(), J.destroy(), r()
      }), (f, u) => {
        const y = un,
          Fe = Pn,
          be = xn,
          X = Dn,
          he = ss,
          $e = Je,
          ye = R,
          ke = pe,
          we = Qe,
          Ce = Fs,
          Ie = en,
          Be = ks,
          Ae = nn;
        return a(), d("div", ws, [e(F) && e(l) && e(p) && e(x) && e(n) ? (a(), d(O, {
          key: 0
        }, [i(y, {
          my: e(n)
        }, null, 8, ["my"]), e(F).frens.length === 0 ? (a(), I(Fe, {
          key: 0,
          "frens-using": e(l).frensUsing,
          "frens-trading-using": e(p)
        }, null, 8, ["frens-using", "frens-trading-using"])) : (a(), I($e, {
          key: 1,
          tabs: e(ge),
          class: "tabs"
        }, {
          ton: k(() => {
            var A, ee;
            return [i(be, {
              "frens-trading": e(p),
              "ton-amount": (A = e(Q)) == null ? void 0 : A.tonAmount,
              "usd-amount": (ee = e(Q)) == null ? void 0 : ee.usdAmount
            }, null, 8, ["frens-trading", "ton-amount", "usd-amount"]), i(X, {
              "used-invitation": e(l).frensUsing.usedInvitation,
              "onOpen:referral": u[0] || (u[0] = Us => g.value = !0)
            }, null, 8, ["used-invitation"])]
          }),
          points: k(() => [i(he, {
            "amount-for-claim": e(x).amountForClaim,
            "can-claim": e(x).canClaim,
            "can-claim-at": e(x).canClaimAt,
            "percent-from-friends": e(l).frensUsing.percentFromFriends,
            "percent-from-friends-of-friends": e(l).frensUsing.percentFromFriendsOfFriends,
            "claim-callback": C,
            "onUi:claimed": u[1] || (u[1] = A => V(A))
          }, null, 8, ["amount-for-claim", "can-claim", "can-claim-at", "percent-from-friends", "percent-from-friends-of-friends"]), i(X, {
            "used-invitation": e(l).frensUsing.usedInvitation,
            "onOpen:referral": u[2] || (u[2] = A => g.value = !0)
          }, null, 8, ["used-invitation"])]),
          _: 1
        }, 8, ["tabs"])), i(we, null, {
          default: k(() => [i(ke, {
            label: ("t" in f ? f.t : e(c))("frens.base.invite"),
            fill: "",
            size: e(_e).LARGE,
            onClick: u[3] || (u[3] = A => v.value = !0)
          }, {
            left: k(() => [i(ye, {
              name: "users",
              class: "button-icon"
            })]),
            _: 1
          }, 8, ["label", "size"])]),
          _: 1
        }), e(g) ? (a(), I(Ce, {
          key: 2,
          frens: e(F).frens,
          onClose: u[4] || (u[4] = A => g.value = !1)
        }, null, 8, ["frens"])) : E("", !0), i(Ie, {
          modelValue: e(v),
          "onUpdate:modelValue": u[5] || (u[5] = A => ue(v) ? v.value = A : null),
          "referral-token": e(l).frensUsing.referralToken,
          qr: ""
        }, null, 8, ["modelValue", "referral-token"]), i(Be)], 64)) : (a(), I(Ae, {
          key: 1
        }))])
      }
    }
  }),
  Is = h(Cs, [
    ["__scopeId", "data-v-d3adb12d"]
  ]),
  Bs = {},
  As = {
    class: "frens-page page"
  };

function Ps(b, s) {
  const o = Is;
  return a(), d("div", As, [i(o)])
}
const Vs = h(Bs, [
  ["render", Ps],
  ["__scopeId", "data-v-6f807814"]
]);
export {
  Vs as
  default
};