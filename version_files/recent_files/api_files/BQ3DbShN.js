import {
  d as $,
  k as Te,
  y as P,
  z as S,
  j as I,
  A as Ue,
  o as a,
  c as d,
  a as t,
  m as ie,
  t as _,
  e,
  C as c,
  b as i,
  D as k,
  E as Pe,
  F as R,
  q as N,
  n as j,
  G as M,
  H as Se,
  _ as L,
  I as le,
  f as h,
  J as ce,
  K as D,
  L as de,
  h as Y,
  M as ne,
  N as A,
  O as Re,
  P as _e,
  Q as Oe,
  R as G,
  T as Ee,
  w as Ne,
  U as Le,
  V as Ke,
  W as De,
  X as He,
  Y as me,
  p as ue,
  x as pe,
  Z as Me,
  $ as se,
  a0 as xe,
  a1 as z,
  a2 as te,
  a3 as We,
  a4 as Ve,
  a5 as E,
  a6 as H,
  a7 as ze,
  a8 as je,
  a9 as Ye,
  aa as oe,
  ab as ae
} from "./BZz9wj6Z.js";
import {
  _ as Ge,
  a as qe
} from "./1NleL0PH.js";
import {
  _ as q
} from "./CmXKpe7A.js";
import {
  _ as Ze
} from "./qV91YZNv.js";
import {
  _ as Je
} from "./CjF5nbrM.js";
import {
  _ as Qe
} from "./UonBRAd7.js";
import {
  _ as Xe
} from "./FLeABffM.js";
import {
  _ as en
} from "./CJ4WL_IN.js";
import {
  _ as nn
} from "./YC2qI2kV.js";
import {
  _ as sn
} from "./chImfbDF.js";
import "./Bp-t5y1h.js";
const tn = {
    class: "frens-blum-leaderboard-my"
  },
  on = {
    class: "header"
  },
  an = {
    class: "title"
  },
  rn = {
    class: "label"
  },
  ln = {
    class: "card"
  },
  cn = {
    class: "dots"
  },
  dn = {
    class: "item"
  },
  _n = {
    class: "item"
  },
  mn = ["onClick"],
  un = $({
    __name: "My",
    props: {
      my: {}
    },
    setup(b) {
      const s = b,
        o = Te().getters.mustGetUser,
        n = P(S.BP),
        F = I(() => [S.BP, S.MP]),
        l = I(() => s.my[n.value]),
        f = Ue("listEl"),
        m = (u, g = "smooth") => {
          if (!f.value) return;
          const w = F.value.indexOf(n.value),
            T = F.value.indexOf(u),
            U = f.value.offsetHeight;
          f.value.scrollTo({
            top: T * (U + (w > T ? -1 : 1)),
            behavior: g
          })
        },
        r = Se(() => {
          if (!f.value) return;
          const u = f.value.children[0].offsetHeight + 10,
            g = f.value.scrollTop;
          Math.round(g / u) === 0 ? n.value = S.BP : n.value = S.MP
        }, 50).debouncedFunction;
      return (u, g) => {
        const w = L,
          T = le,
          U = Ge,
          x = qe;
        return a(), d("div", tn, [t("div", on, [t("div", an, [g[2] || (g[2] = t("i", {
          class: "trophy"
        }, null, -1)), ie(_(("t" in u ? u.t : e(c))("frens.leaderboards.my.title")), 1)]), i(T, {
          class: "link",
          to: {
            name: "frens-leaderboards",
            query: {
              source: ("ANALYTICS_FRENS_LEADERBOARD_SOURCE" in u ? u.ANALYTICS_FRENS_LEADERBOARD_SOURCE : e(Pe)).FRIENDS_BAR
            }
          }
        }, {
          default: k(() => [t("div", rn, _(("t" in u ? u.t : e(c))("frens.leaderboards.my.see_all")), 1), i(w, {
            name: "chevron-right",
            class: "icon"
          })]),
          _: 1
        }, 8, ["to"])]), t("div", ln, [i(x, {
          amount: e(l).amount,
          position: e(l).position,
          username: e(o).username,
          label: ("t" in u ? u.t : e(c))("frens.leaderboards.my.your_rating"),
          "avatar-url": e(o).avatarUrl,
          "points-postfix": e(n),
          "no-position": ""
        }, {
          after: k(() => [t("div", cn, [t("div", {
            ref: "listEl",
            class: "list",
            onScroll: g[0] || (g[0] = (...C) => e(r) && e(r)(...C)),
            onTouchmove: g[1] || (g[1] = (...C) => e(r) && e(r)(...C))
          }, [t("div", dn, [i(U, {
            position: u.my[e(S).BP].position
          }, null, 8, ["position"])]), t("div", _n, [i(U, {
            position: u.my[e(S).MP].position
          }, null, 8, ["position"])])], 544), (a(!0), d(R, null, N(e(F), (C, W) => (a(), d("div", {
            key: C,
            class: j([
              [{
                active: e(n) === C
              }, `idx-${W}`], "dot"
            ])
          }, [e(n) !== C ? (a(), d("button", {
            key: 0,
            type: "button",
            class: "reset",
            onClick: V => m(C)
          }, null, 8, mn)) : M("", !0)], 2))), 128))])]),
          _: 1
        }, 8, ["amount", "position", "username", "label", "avatar-url", "points-postfix"])])])
      }
    }
  }),
  pn = h(un, [
    ["__scopeId", "data-v-4287a4e0"]
  ]),
  fn = {
    class: "pages-frens-icons"
  },
  vn = $({
    __name: "FrensHeadingIcons",
    props: {
      icon: {}
    },
    setup(b) {
      return (s, o) => {
        const n = L;
        return a(), d("div", fn, [o[0] || (o[0] = t("img", {
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
  Z = h(vn, [
    ["__scopeId", "data-v-54907da8"]
  ]),
  gn = {
    class: "title"
  },
  Fn = {
    class: "value"
  },
  bn = {
    class: "text"
  },
  hn = $({
    __name: "FrensCommissionsCards",
    props: {
      type: {},
      percentFromFriends: {},
      percentFromFriendsOfFriends: {}
    },
    setup(b) {
      const s = b,
        o = I(() => s.type === "points" ? "sm" : "md"),
        n = I(() => s.type === "points" ? [{
          title: c("frens.points.cards.friends.title"),
          value: `${D(s.percentFromFriends,{trim:!0})}%`,
          text: [{
            value: c("frens.points.cards.friends.text"),
            highlighted: !0
          }]
        }, {
          title: c("frens.points.cards.friends_of_friends.title"),
          value: `${D(s.percentFromFriendsOfFriends,{trim:!0})}%`,
          text: [{
            value: c("frens.points.cards.friends_of_friends.text"),
            highlighted: !0
          }]
        }] : [{
          title: c("frens.ton.cards.friends.title"),
          value: `${D(s.percentFromFriends,{trim:!0})}%`,
          text: [{
            value: c("frens.ton.cards.friends.text.1"),
            highlighted: !0
          }, {
            value: ` ${c("frens.ton.cards.friends.text.2")}`,
            highlighted: !1
          }]
        }, {
          title: c("frens.ton.cards.friends_of_friends.title"),
          value: `${D(s.percentFromFriendsOfFriends,{trim:!0})}%`,
          text: [{
            value: c("frens.ton.cards.friends_of_friends.text.1"),
            highlighted: !0
          }, {
            value: ` ${c("frens.ton.cards.friends_of_friends.text.2")}`,
            highlighted: !1
          }]
        }]);
      return (F, l) => {
        const f = q;
        return a(), d("div", {
          class: j(["pages-frens-commissions-cards", `size-${e(o)}`])
        }, [e(n) ? (a(!0), d(R, {
          key: 0
        }, N(e(n), m => (a(), d("div", {
          key: m.title,
          class: "card"
        }, [t("div", gn, _(m.title), 1), t("div", Fn, _(m.value), 1), t("div", bn, [(a(!0), d(R, null, N(m.text, r => (a(), d("span", {
          key: r.value,
          class: j([{
            highlighted: r.highlighted
          }, "item"])
        }, _(r.value), 3))), 128))])]))), 128)) : (a(), d(R, {
          key: 1
        }, N(2, m => i(f, {
          key: m,
          class: "skeleton"
        })), 64))], 2)
      }
    }
  }),
  fe = h(hn, [
    ["__scopeId", "data-v-e549e0de"]
  ]),
  $n = {
    class: "content"
  },
  yn = {
    class: "title"
  },
  kn = {
    class: "subtitle"
  },
  wn = $({
    __name: "FrensHowItWorks",
    setup(b) {
      const s = () => Y().$webApp.openLink("https://www.blum.io/post/blum-trading-referral-system");
      return (o, n) => {
        const F = L;
        return a(), d("button", {
          type: "button",
          class: "pages-frens-how-it-works reset",
          onClick: s
        }, [n[0] || (n[0] = t("img", {
          src: de,
          alt: "Friends emoji",
          class: "emoji"
        }, null, -1)), t("div", $n, [t("div", yn, _(("t" in o ? o.t : e(c))("frens.ton.how_it_works.title")), 1), t("div", kn, _(("t" in o ? o.t : e(c))("frens.ton.how_it_works.subtitle")), 1)]), i(F, {
          name: "chevron-right",
          class: "icon"
        })])
      }
    }
  }),
  ve = h(wn, [
    ["__scopeId", "data-v-8cb31b17"]
  ]),
  Cn = {
    class: "pages-frens-empty-state"
  },
  An = {
    class: "sections"
  },
  In = {
    class: "title"
  },
  Bn = {
    key: 0,
    class: "subtitle"
  },
  Tn = $({
    __name: "FrensEmptyState",
    props: {
      frensUsing: {},
      frensTradingUsing: {}
    },
    setup(b) {
      const s = b,
        o = I(() => [{
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
          f = fe,
          m = ve;
        return a(), d("div", Cn, [t("div", An, [(a(!0), d(R, null, N(e(o), r => (a(), d("div", {
          key: r.title,
          class: "section"
        }, [i(l, {
          icon: r.icon,
          class: "icons"
        }, null, 8, ["icon"]), t("div", In, _(r.title), 1), r.subtitle ? (a(), d("div", Bn, _(r.subtitle), 1)) : M("", !0), i(f, {
          class: "cards",
          type: r.type,
          "percent-from-friends": r.percentFromFriends,
          "percent-from-friends-of-friends": r.percentFromFriendsOfFriends
        }, null, 8, ["type", "percent-from-friends", "percent-from-friends-of-friends"])]))), 128))]), i(m)])
      }
    }
  }),
  Un = h(Tn, [
    ["__scopeId", "data-v-5b2c2224"]
  ]),
  Pn = {
    class: "pages-frens-ton-section"
  },
  Sn = {
    key: 0,
    class: "with-balance"
  },
  Rn = {
    class: "title"
  },
  On = {
    key: 0,
    class: "balance-ton"
  },
  En = {
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
  Kn = $({
    __name: "FrensTonSection",
    props: {
      frensTrading: {},
      tonAmount: {},
      usdAmount: {}
    },
    setup(b) {
      const s = b,
        o = I(() => {
          var n;
          return !!((n = s.tonAmount) != null && n.gt(0))
        });
      return (n, F) => {
        const l = Re,
          f = q,
          m = le,
          r = ve,
          u = Z,
          g = fe;
        return a(), d("div", Pn, [e(o) ? (a(), d("div", Sn, [i(l, {
          class: "background"
        }), t("div", Rn, _(("t" in n ? n.t : e(c))("frens.ton.title")), 1), n.tonAmount ? (a(), d("div", On, _(("getWalletAmount" in n ? n.getWalletAmount : e(ne))(n.tonAmount, "TON").defaultWithSymbol), 1)) : (a(), A(f, {
          key: 1,
          class: "balance-ton-skeleton"
        })), n.usdAmount ? (a(), d("div", En, _(("getWalletAmount" in n ? n.getWalletAmount : e(ne))(n.usdAmount, "USD").defaultWithSymbol), 1)) : (a(), A(f, {
          key: 3,
          class: "balance-usd-skeleton"
        })), i(m, {
          to: {
            name: "wallet"
          },
          class: "wallet-btn"
        }, {
          default: k(() => [ie(_(("t" in n ? n.t : e(c))("frens.ton.go_to_wallet_text")), 1)]),
          _: 1
        }), i(r, {
          class: "how-it-works"
        })])) : (a(), d("div", Nn, [i(u, {
          icon: "ton-logo-ref",
          class: "icons"
        }), t("div", Ln, _(("t" in n ? n.t : e(c))("frens.ton.zero_earn.title")), 1), i(g, {
          type: "ton",
          "percent-from-friends": n.frensTrading.percentFromFriends,
          "percent-from-friends-of-friends": n.frensTrading.percentFromFriendsOfFriends
        }, null, 8, ["percent-from-friends", "percent-from-friends-of-friends"]), i(r, {
          class: "how-it-works"
        })]))])
      }
    }
  }),
  Dn = h(Kn, [
    ["__scopeId", "data-v-7de774b9"]
  ]),
  Hn = {
    class: "pages-frens-referrals-section"
  },
  Mn = {
    class: "card"
  },
  xn = {
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
        const n = Ze;
        return a(), d("div", Hn, [i(n, {
          label: ("t" in s ? s.t : e(c))("frens.referrals.title"),
          "click-callback": () => s.$emit("open:referral")
        }, null, 8, ["label", "click-callback"]), t("div", Mn, [o[0] || (o[0] = t("img", {
          src: ce,
          alt: "Friends emoji"
        }, null, -1)), t("div", xn, _(("t" in s ? s.t : e(c))("frens.referrals.invited_title")), 1), t("div", Wn, _(s.usedInvitation), 1)])])
      }
    }
  }),
  zn = h(Vn, [
    ["__scopeId", "data-v-435c4437"]
  ]),
  jn = {
    class: "pages-frens-note-card"
  },
  Yn = ["innerHTML"],
  Gn = $({
    __name: "FrensNoteCard",
    props: {
      text: {}
    },
    setup(b) {
      return (s, o) => (a(), d("div", jn, [o[0] || (o[0] = t("img", {
        src: de,
        alt: "Friends emoji",
        class: "emoji"
      }, null, -1)), t("div", {
        class: "text",
        innerHTML: s.text
      }, null, 8, Yn)]))
    }
  }),
  qn = h(Gn, [
    ["__scopeId", "data-v-0235c88a"]
  ]),
  Zn = {
    class: "pages-frens-points-section"
  },
  Jn = {
    class: "title"
  },
  Qn = {
    class: "balance-card"
  },
  Xn = {
    class: "inner"
  },
  es = {
    class: "points"
  },
  ns = {
    class: "description"
  },
  ss = $({
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
        F = _e(),
        l = P(!1),
        f = async () => {
          l.value = !0;
          const r = performance.now(),
            u = await o.claimCallback();
          if (u.err) {
            l.value = !1;
            return
          }
          const g = performance.now() - r;
          g < 2e3 && await new Promise(w => setTimeout(w, 1e3 - g)), l.value = !1, n("ui:claimed", u.data)
        }, m = I(() => {
          if (o.canClaim) return c("frens.points.ready_to_claim");
          if (!F.ms100ticker.value || !o.canClaimAt) return;
          const r = Oe(o.canClaimAt - F.ms100ticker.value, "letters");
          return c("base.claim_next_in", {
            time: r
          })
        });
      return (r, u) => {
        const g = Z,
          w = L,
          T = Je,
          U = qn;
        return a(), d("div", Zn, [i(g, {
          icon: "bp-logo-circle",
          class: "icons"
        }), t("div", Jn, _(("t" in r ? r.t : e(c))("frens.points.title")), 1), t("div", Qn, [i(w, {
          name: "logo",
          class: "icon"
        }), t("div", Xn, [t("div", es, _(`${("formatBp"in r?r.formatBp:e(G))(r.amountForClaim)} BP`), 1), t("div", ns, _(e(m)), 1)]), i(T, {
          label: ("t" in r ? r.t : e(c))("base.claim"),
          "can-claim": r.canClaim,
          "claim-fn": f,
          class: "claim-pill"
        }, null, 8, ["label", "can-claim"])]), i(U, {
          text: ("t" in r ? r.t : e(c))("frens.points.note_text", {
            percentFromFriends: `${r.percentFromFriends}%`,
            percentFromFriendsOfFriends: `+ ${r.percentFromFriendsOfFriends}%`
          }),
          class: "note-card"
        }, null, 8, ["text"])])
      }
    }
  }),
  ts = h(ss, [
    ["__scopeId", "data-v-3f77081e"]
  ]),
  os = {
    class: "pages-frens-list-item"
  },
  as = {
    class: "avatar"
  },
  rs = {
    class: "letter"
  },
  is = ["src"],
  ls = {
    class: "details"
  },
  cs = {
    class: "username"
  },
  ds = {
    class: "frens-count-compose"
  },
  _s = {
    class: "counter"
  },
  ms = {
    key: 0,
    class: "balance"
  },
  us = $({
    __name: "FrensListItem",
    props: {
      fren: {}
    },
    setup(b) {
      return (s, o) => {
        const n = L,
          F = q,
          l = Ee("img-loader");
        return a(), d("div", os, [t("div", as, [t("div", rs, _(s.fren.letterAvatar), 1), s.fren.avatarUrl ? Ne((a(), d("img", {
          key: 0,
          src: s.fren.avatarUrl,
          alt: "Avatar"
        }, null, 8, is)), [
          [l]
        ]) : M("", !0)]), t("div", ls, [t("div", cs, _(s.fren.username), 1), t("div", ds, [i(n, {
          name: "users",
          class: "icon"
        }), t("div", _s, _(s.fren.totalFrens > 0 ? "+ " : "") + _(s.fren.totalFrens), 1)])]), s.fren.farmBalance ? (a(), d("div", ms, _(("formatBp" in s ? s.formatBp : e(G))(s.fren.farmBalance)) + " BP", 1)) : (a(), A(F, {
          key: 1,
          class: "skeleton"
        }))])
      }
    }
  }),
  ps = h(us, [
    ["__scopeId", "data-v-5f3d3da2"]
  ]),
  fs = {
    class: "pages-frens-referral-modal"
  },
  vs = {
    class: "title"
  },
  gs = {
    class: "list"
  },
  Fs = $({
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
        const l = ps,
          f = en;
        return a(), A(f, null, {
          default: k(() => [t("div", fs, [t("div", vs, _(("t" in n ? n.t : e(c))("frens.referrals.title")), 1), t("div", gs, [(a(!0), d(R, null, N(n.frens, m => (a(), A(l, {
            key: m.username,
            fren: m
          }, null, 8, ["fren"]))), 128))])])]),
          _: 1
        })
      }
    }
  }),
  bs = h(Fs, [
    ["__scopeId", "data-v-907d8ddc"]
  ]),
  hs = {
    class: "frens-blum-leaderboard-intro-sheet"
  },
  $s = ["src"],
  ys = {
    class: "description"
  },
  re = "frens_blum_leaderboards_welcome",
  ks = $({
    __name: "IntroSheet",
    setup(b) {
      const s = P(!!Y().$webApp.storage.local.get(re));
      return Ke(s, o => {
        o || Y().$webApp.storage.local.set(re, "true")
      }), (o, n) => {
        const F = De("I18nT"),
          l = pe,
          f = Me;
        return a(), A(f, {
          modelValue: e(s),
          "onUpdate:modelValue": n[1] || (n[1] = m => ue(s) ? s.value = m : null)
        }, {
          default: k(() => [t("div", hs, [i(F, {
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
          }, null, 8, $s), t("div", ys, _(("t" in o ? o.t : e(c))("frens.leaderboards.intro_sheet.description")), 1), i(l, {
            label: ("t" in o ? o.t : e(c))("base.close"),
            size: e(me).LARGE,
            fill: "",
            onClick: n[0] || (n[0] = m => s.value = !1)
          }, null, 8, ["label", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  ws = h(ks, [
    ["__scopeId", "data-v-2601282b"]
  ]),
  Cs = {
    class: "pages-frens"
  },
  As = $({
    __name: "Frens",
    setup(b) {
      const s = _e(),
        o = se(),
        {
          my: n
        } = xe(),
        F = P(),
        l = P(),
        f = P();
      let m;
      const r = () => {
          m && (clearInterval(m), m = void 0)
        },
        u = P(!1),
        g = P(!1),
        w = async () => oe(await E.getFrens({
          pageSize: 1e3
        })), T = async () => {
          const v = await E.getFrensUsing();
          if (!ae(v)) return v;
          if (!v.data.enableNewBalance) return H({
            frensUsing: v.data,
            walletFrensBalance: void 0,
            enableNewBalance: !1
          });
          const y = await E.getWalletFrensBalance();
          return ae(y) ? H({
            frensUsing: v.data,
            walletFrensBalance: y.data,
            enableNewBalance: !0
          }) : y
        }, U = async () => oe(await E.getFrensTradingUsing()), x = v => {
          r();
          const p = s.getCurrentTimestamp();
          if (p && v.frensUsing.canClaimAt) {
            const y = v.frensUsing.canClaimAt - p;
            y > 0 && (m = setTimeout(O.exec, y))
          }
          l.value = v
        }, C = async () => {
          if (!l.value) throw Ve("Frens data is not loaded");
          if (!l.value.enableNewBalance) {
            const y = await E.claimFrens();
            return y.err ? y : (O.exec(), H(y.data.claimBalance))
          }
          const p = await E.claimWalletFrensBalance();
          return p.err ? p : (O.exec(), H(p.data.amount))
        }, W = v => {
          ze().makeConfetti();
          const p = G(v);
          je().success(c("base.you_got_bp", {
            bp: p
          })), Ye().friendsInvite.frensClaimed(v), setTimeout(() => {
            O.exec(), se().update()
          }, 5e3)
        }, V = z(w, v => F.value = v, 3e4), O = z(T, x, 1e4), J = z(U, v => f.value = v, 1e4), Q = I(() => {
          var p;
          if (!o.points) return;
          const v = o.pointSymbols.value.ton;
          return v ? {
            tonAmount: v.balance.value,
            usdAmount: (p = v.fiatValue.USD) == null ? void 0 : p.value
          } : {
            tonAmount: new te(0),
            usdAmount: new te(0)
          }
        }), ge = I(() => [{
          key: "ton",
          label: c("frens.tab.ton")
        }, {
          key: "points",
          label: c("frens.tab.points")
        }]), K = I(() => {
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
        await Promise.all([V.exec(), O.exec(), J.exec()])
      })(), We(() => {
        V.destroy(), O.destroy(), J.destroy(), r()
      }), (v, p) => {
        const y = pn,
          Fe = Un,
          be = Dn,
          X = zn,
          he = ts,
          $e = Qe,
          ye = L,
          ke = pe,
          we = Xe,
          Ce = bs,
          Ae = nn,
          Ie = ws,
          Be = sn;
        return a(), d("div", Cs, [e(F) && e(l) && e(f) && e(K) && e(n) ? (a(), d(R, {
          key: 0
        }, [i(y, {
          my: e(n)
        }, null, 8, ["my"]), e(F).frens.length === 0 ? (a(), A(Fe, {
          key: 0,
          "frens-using": e(l).frensUsing,
          "frens-trading-using": e(f)
        }, null, 8, ["frens-using", "frens-trading-using"])) : (a(), A($e, {
          key: 1,
          tabs: e(ge),
          class: "tabs"
        }, {
          ton: k(() => {
            var B, ee;
            return [i(be, {
              "frens-trading": e(f),
              "ton-amount": (B = e(Q)) == null ? void 0 : B.tonAmount,
              "usd-amount": (ee = e(Q)) == null ? void 0 : ee.usdAmount
            }, null, 8, ["frens-trading", "ton-amount", "usd-amount"]), i(X, {
              "used-invitation": e(l).frensUsing.usedInvitation,
              "onOpen:referral": p[0] || (p[0] = Ss => g.value = !0)
            }, null, 8, ["used-invitation"])]
          }),
          points: k(() => [i(he, {
            "amount-for-claim": e(K).amountForClaim,
            "can-claim": e(K).canClaim,
            "can-claim-at": e(K).canClaimAt,
            "percent-from-friends": e(l).frensUsing.percentFromFriends,
            "percent-from-friends-of-friends": e(l).frensUsing.percentFromFriendsOfFriends,
            "claim-callback": C,
            "onUi:claimed": p[1] || (p[1] = B => W(B))
          }, null, 8, ["amount-for-claim", "can-claim", "can-claim-at", "percent-from-friends", "percent-from-friends-of-friends"]), i(X, {
            "used-invitation": e(l).frensUsing.usedInvitation,
            "onOpen:referral": p[2] || (p[2] = B => g.value = !0)
          }, null, 8, ["used-invitation"])]),
          _: 1
        }, 8, ["tabs"])), i(we, null, {
          default: k(() => [i(ke, {
            label: ("t" in v ? v.t : e(c))("frens.base.invite"),
            fill: "",
            size: e(me).LARGE,
            onClick: p[3] || (p[3] = B => u.value = !0)
          }, {
            left: k(() => [i(ye, {
              name: "users",
              class: "button-icon"
            })]),
            _: 1
          }, 8, ["label", "size"])]),
          _: 1
        }), e(g) ? (a(), A(Ce, {
          key: 2,
          frens: e(F).frens,
          onClose: p[4] || (p[4] = B => g.value = !1)
        }, null, 8, ["frens"])) : M("", !0), i(Ae, {
          modelValue: e(u),
          "onUpdate:modelValue": p[5] || (p[5] = B => ue(u) ? u.value = B : null),
          "referral-token": e(l).frensUsing.referralToken,
          qr: ""
        }, null, 8, ["modelValue", "referral-token"]), i(Ie)], 64)) : (a(), A(Be, {
          key: 1
        }))])
      }
    }
  }),
  Is = h(As, [
    ["__scopeId", "data-v-d3adb12d"]
  ]),
  Bs = {},
  Ts = {
    class: "frens-page page"
  };

function Us(b, s) {
  const o = Is;
  return a(), d("div", Ts, [i(o)])
}
const Vs = h(Bs, [
  ["render", Us],
  ["__scopeId", "data-v-6f807814"]
]);
export {
  Vs as
  default
};