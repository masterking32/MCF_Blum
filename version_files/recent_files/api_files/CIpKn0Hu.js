import {
  d as $,
  o,
  c as l,
  a as i,
  y as X,
  b as c,
  _ as S,
  f as F,
  j as w,
  z as a,
  A as O,
  e as t,
  F as A,
  q as U,
  t as d,
  n as G,
  C as Y,
  h as fe,
  D as R,
  E as Z,
  G as k,
  H as C,
  m as ve,
  I as ge,
  J as ee,
  K as I,
  L as Fe,
  M as V,
  N as he,
  w as $e,
  O as J,
  P as be,
  Q as ke,
  R as W,
  T as Q,
  U as ye,
  V as we,
  p as Ie,
  W as K,
  X as Ce,
  Y as Ae,
  Z as Te,
  x as Pe,
  $ as N
} from "./DU-EduvJ.js";
import {
  _ as L
} from "./CkmrTVeP.js";
import {
  _ as Ue
} from "./BZx_sfnN.js";
import {
  _ as Se
} from "./DDA4RA9M.js";
import {
  _ as Be
} from "./J9RzZ51C.js";
import {
  _ as Oe
} from "./BgVxp8PZ.js";
import {
  _ as Ke
} from "./BcZCGZaW.js";
import {
  _ as xe
} from "./C9MC_0f7.js";
import {
  u as He
} from "./BeNdXI6S.js";
import {
  _ as We
} from "./1XDsDcxQ.js";
import {
  _ as Ne
} from "./JGRitRBB.js";
import "./Bn-Bqpmh.js";
const Re = {
    class: "pages-frens-icons"
  },
  Ve = $({
    __name: "FrensHeadingIcons",
    props: {
      icon: {}
    },
    setup(v) {
      return (e, r) => {
        const n = S;
        return o(), l("div", Re, [r[0] || (r[0] = i("img", {
          src: X,
          alt: "Friends emoji",
          class: "emoji"
        }, null, -1)), c(n, {
          name: "arrow-right-2",
          class: "arrow"
        }), c(n, {
          name: e.icon,
          class: "icon"
        }, null, 8, ["name"])])
      }
    }
  }),
  M = F(Ve, [
    ["__scopeId", "data-v-54907da8"]
  ]),
  Le = {
    class: "title"
  },
  Me = {
    class: "value"
  },
  je = {
    class: "text"
  },
  ze = $({
    __name: "FrensCommissionsCards",
    props: {
      type: {},
      percentFromFriends: {},
      percentFromFriendsOfFriends: {}
    },
    setup(v) {
      const e = v,
        r = w(() => e.type === "points" ? "sm" : "md"),
        n = w(() => e.type === "points" ? [{
          title: a("frens.points.cards.friends.title"),
          value: `${O(e.percentFromFriends,{trim:!0})}%`,
          text: [{
            value: a("frens.points.cards.friends.text"),
            highlighted: !0
          }]
        }, {
          title: a("frens.points.cards.friends_of_friends.title"),
          value: `${O(e.percentFromFriendsOfFriends,{trim:!0})}%`,
          text: [{
            value: a("frens.points.cards.friends_of_friends.text"),
            highlighted: !0
          }]
        }] : [{
          title: a("frens.ton.cards.friends.title"),
          value: `${O(e.percentFromFriends,{trim:!0})}%`,
          text: [{
            value: a("frens.ton.cards.friends.text.1"),
            highlighted: !0
          }, {
            value: ` ${a("frens.ton.cards.friends.text.2")}`,
            highlighted: !1
          }]
        }, {
          title: a("frens.ton.cards.friends_of_friends.title"),
          value: `${O(e.percentFromFriendsOfFriends,{trim:!0})}%`,
          text: [{
            value: a("frens.ton.cards.friends_of_friends.text.1"),
            highlighted: !0
          }, {
            value: ` ${a("frens.ton.cards.friends_of_friends.text.2")}`,
            highlighted: !1
          }]
        }]);
      return (m, f) => {
        const g = L;
        return o(), l("div", {
          class: G(["pages-frens-commissions-cards", `size-${t(r)}`])
        }, [t(n) ? (o(!0), l(A, {
          key: 0
        }, U(t(n), u => (o(), l("div", {
          key: u.title,
          class: "card"
        }, [i("div", Le, d(u.title), 1), i("div", Me, d(u.value), 1), i("div", je, [(o(!0), l(A, null, U(u.text, s => (o(), l("span", {
          key: s.value,
          class: G([{
            highlighted: s.highlighted
          }, "item"])
        }, d(s.value), 3))), 128))])]))), 128)) : (o(), l(A, {
          key: 1
        }, U(2, u => c(g, {
          key: u,
          class: "skeleton"
        })), 64))], 2)
      }
    }
  }),
  ne = F(ze, [
    ["__scopeId", "data-v-e549e0de"]
  ]),
  De = {
    class: "content"
  },
  Ee = {
    class: "title"
  },
  qe = {
    class: "subtitle"
  },
  Ge = $({
    __name: "FrensHowItWorks",
    setup(v) {
      const e = () => fe().$webApp.openLink("https://www.blum.io/post/blum-trading-referral-system");
      return (r, n) => {
        const m = S;
        return o(), l("button", {
          type: "button",
          class: "pages-frens-how-it-works reset",
          onClick: e
        }, [n[0] || (n[0] = i("img", {
          src: Y,
          alt: "Friends emoji",
          class: "emoji"
        }, null, -1)), i("div", De, [i("div", Ee, d(("t" in r ? r.t : t(a))("frens.ton.how_it_works.title")), 1), i("div", qe, d(("t" in r ? r.t : t(a))("frens.ton.how_it_works.subtitle")), 1)]), c(m, {
          name: "chevron-right",
          class: "icon"
        })])
      }
    }
  }),
  te = F(Ge, [
    ["__scopeId", "data-v-8cb31b17"]
  ]),
  Ze = {
    class: "pages-frens-empty-state"
  },
  Je = {
    class: "sections"
  },
  Qe = {
    class: "title"
  },
  Xe = {
    key: 0,
    class: "subtitle"
  },
  Ye = $({
    __name: "FrensEmptyState",
    props: {
      frensUsing: {},
      frensTradingUsing: {}
    },
    setup(v) {
      const e = v,
        r = w(() => [{
          icon: "bp-logo-circle",
          title: a("frens.empty.points.title"),
          subtitle: a("frens.empty.points.subtitle"),
          type: "points",
          percentFromFriends: e.frensUsing.percentFromFriends,
          percentFromFriendsOfFriends: e.frensUsing.percentFromFriendsOfFriends
        }, {
          icon: "ton-logo-ref",
          title: a("frens.empty.ton.title"),
          subtitle: void 0,
          type: "ton",
          percentFromFriends: e.frensTradingUsing.percentFromFriends,
          percentFromFriendsOfFriends: e.frensTradingUsing.percentFromFriendsOfFriends
        }]);
      return (n, m) => {
        const f = M,
          g = ne,
          u = te;
        return o(), l("div", Ze, [i("div", Je, [(o(!0), l(A, null, U(t(r), s => (o(), l("div", {
          key: s.title,
          class: "section"
        }, [c(f, {
          icon: s.icon,
          class: "icons"
        }, null, 8, ["icon"]), i("div", Qe, d(s.title), 1), s.subtitle ? (o(), l("div", Xe, d(s.subtitle), 1)) : R("", !0), c(g, {
          class: "cards",
          type: s.type,
          "percent-from-friends": s.percentFromFriends,
          "percent-from-friends-of-friends": s.percentFromFriendsOfFriends
        }, null, 8, ["type", "percent-from-friends", "percent-from-friends-of-friends"])]))), 128))]), c(u)])
      }
    }
  }),
  en = F(Ye, [
    ["__scopeId", "data-v-5b2c2224"]
  ]),
  nn = {
    class: "pages-frens-ton-section"
  },
  tn = {
    key: 0,
    class: "with-balance"
  },
  sn = {
    class: "title"
  },
  on = {
    key: 0,
    class: "balance-ton"
  },
  rn = {
    key: 2,
    class: "balance-usd"
  },
  an = {
    key: 1,
    class: "empty"
  },
  cn = {
    class: "title"
  },
  ln = $({
    __name: "FrensTonSection",
    props: {
      frensTrading: {},
      tonAmount: {},
      usdAmount: {}
    },
    setup(v) {
      const e = v,
        r = w(() => {
          var n;
          return !!((n = e.tonAmount) != null && n.gt(0))
        });
      return (n, m) => {
        const f = Ue,
          g = L,
          u = ge,
          s = te,
          h = M,
          y = ne;
        return o(), l("div", nn, [t(r) ? (o(), l("div", tn, [c(f, {
          class: "background"
        }), i("div", sn, d(("t" in n ? n.t : t(a))("frens.ton.title")), 1), n.tonAmount ? (o(), l("div", on, d(("getWalletAmount" in n ? n.getWalletAmount : t(Z))(n.tonAmount, "TON").defaultWithSymbol), 1)) : (o(), k(g, {
          key: 1,
          class: "balance-ton-skeleton"
        })), n.usdAmount ? (o(), l("div", rn, d(("getWalletAmount" in n ? n.getWalletAmount : t(Z))(n.usdAmount, "USD").defaultWithSymbol), 1)) : (o(), k(g, {
          key: 3,
          class: "balance-usd-skeleton"
        })), c(u, {
          to: {
            name: "wallet"
          },
          class: "wallet-btn"
        }, {
          default: C(() => [ve(d(("t" in n ? n.t : t(a))("frens.ton.go_to_wallet_text")), 1)]),
          _: 1
        }), c(s, {
          class: "how-it-works"
        })])) : (o(), l("div", an, [c(h, {
          icon: "ton-logo-ref",
          class: "icons"
        }), i("div", cn, d(("t" in n ? n.t : t(a))("frens.ton.zero_earn.title")), 1), c(y, {
          type: "ton",
          "percent-from-friends": n.frensTrading.percentFromFriends,
          "percent-from-friends-of-friends": n.frensTrading.percentFromFriendsOfFriends
        }, null, 8, ["percent-from-friends", "percent-from-friends-of-friends"]), c(s, {
          class: "how-it-works"
        })]))])
      }
    }
  }),
  _n = F(ln, [
    ["__scopeId", "data-v-ce792aa2"]
  ]),
  dn = {
    class: "pages-frens-referrals-section"
  },
  mn = {
    class: "card"
  },
  pn = {
    class: "title"
  },
  un = {
    class: "count"
  },
  fn = $({
    __name: "FrensReferralsSection",
    props: {
      usedInvitation: {}
    },
    emits: ["open:referral"],
    setup(v) {
      return (e, r) => {
        const n = Se;
        return o(), l("div", dn, [c(n, {
          label: ("t" in e ? e.t : t(a))("frens.referrals.title"),
          "click-callback": () => e.$emit("open:referral")
        }, null, 8, ["label", "click-callback"]), i("div", mn, [r[0] || (r[0] = i("img", {
          src: X,
          alt: "Friends emoji"
        }, null, -1)), i("div", pn, d(("t" in e ? e.t : t(a))("frens.referrals.invited_title")), 1), i("div", un, d(e.usedInvitation), 1)])])
      }
    }
  }),
  vn = F(fn, [
    ["__scopeId", "data-v-435c4437"]
  ]),
  gn = {
    class: "pages-frens-note-card"
  },
  Fn = ["innerHTML"],
  hn = $({
    __name: "FrensNoteCard",
    props: {
      text: {}
    },
    setup(v) {
      return (e, r) => (o(), l("div", gn, [r[0] || (r[0] = i("img", {
        src: Y,
        alt: "Friends emoji",
        class: "emoji"
      }, null, -1)), i("div", {
        class: "text",
        innerHTML: e.text
      }, null, 8, Fn)]))
    }
  }),
  $n = F(hn, [
    ["__scopeId", "data-v-0235c88a"]
  ]),
  bn = {
    class: "pages-frens-points-section"
  },
  kn = {
    class: "title"
  },
  yn = {
    class: "balance-card"
  },
  wn = {
    class: "inner"
  },
  In = {
    class: "points"
  },
  Cn = {
    class: "description"
  },
  An = $({
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
    setup(v, {
      emit: e
    }) {
      const r = v,
        n = e,
        m = ee(),
        f = I(!1),
        g = async () => {
          f.value = !0;
          const s = performance.now(),
            h = await r.claimCallback();
          if (h.err) {
            f.value = !1;
            return
          }
          const y = performance.now() - s;
          y < 2e3 && await new Promise(T => setTimeout(T, 1e3 - y)), f.value = !1, n("ui:claimed", h.data)
        }, u = w(() => {
          if (r.canClaim) return a("frens.points.ready_to_claim");
          if (!m.ms100ticker.value || !r.canClaimAt) return;
          const s = Fe(r.canClaimAt - m.ms100ticker.value, "letters");
          return a("base.claim_next_in", {
            time: s
          })
        });
      return (s, h) => {
        const y = M,
          T = S,
          x = Be,
          H = $n;
        return o(), l("div", bn, [c(y, {
          icon: "bp-logo-circle",
          class: "icons"
        }), i("div", kn, d(("t" in s ? s.t : t(a))("frens.points.title")), 1), i("div", yn, [c(T, {
          name: "logo",
          class: "icon"
        }), i("div", wn, [i("div", In, d(`${("formatBp"in s?s.formatBp:t(V))(s.amountForClaim)} BP`), 1), i("div", Cn, d(t(u)), 1)]), c(x, {
          label: ("t" in s ? s.t : t(a))("base.claim"),
          "can-claim": s.canClaim,
          "claim-fn": g,
          class: "claim-pill"
        }, null, 8, ["label", "can-claim"])]), c(H, {
          text: ("t" in s ? s.t : t(a))("frens.points.note_text", {
            percentFromFriends: `${s.percentFromFriends}%`,
            percentFromFriendsOfFriends: `+ ${s.percentFromFriendsOfFriends}%`
          }),
          class: "note-card"
        }, null, 8, ["text"])])
      }
    }
  }),
  Tn = F(An, [
    ["__scopeId", "data-v-0f8cfa86"]
  ]),
  Pn = {
    class: "pages-frens-list-item"
  },
  Un = {
    class: "avatar"
  },
  Sn = {
    class: "letter"
  },
  Bn = ["src"],
  On = {
    class: "details"
  },
  Kn = {
    class: "username"
  },
  xn = {
    class: "frens-count-compose"
  },
  Hn = {
    class: "counter"
  },
  Wn = {
    key: 0,
    class: "balance"
  },
  Nn = $({
    __name: "FrensListItem",
    props: {
      fren: {}
    },
    setup(v) {
      return (e, r) => {
        const n = S,
          m = L,
          f = he("img-loader");
        return o(), l("div", Pn, [i("div", Un, [i("div", Sn, d(e.fren.letterAvatar), 1), e.fren.avatarUrl ? $e((o(), l("img", {
          key: 0,
          src: e.fren.avatarUrl,
          alt: "Avatar"
        }, null, 8, Bn)), [
          [f]
        ]) : R("", !0)]), i("div", On, [i("div", Kn, d(e.fren.username), 1), i("div", xn, [c(n, {
          name: "users",
          class: "icon"
        }), i("div", Hn, d(e.fren.totalFrens > 0 ? "+ " : "") + d(e.fren.totalFrens), 1)])]), e.fren.farmBalance ? (o(), l("div", Wn, d(("formatBp" in e ? e.formatBp : t(V))(e.fren.farmBalance)) + " BP", 1)) : (o(), k(m, {
          key: 1,
          class: "skeleton"
        }))])
      }
    }
  }),
  Rn = F(Nn, [
    ["__scopeId", "data-v-5f3d3da2"]
  ]),
  Vn = {
    class: "pages-frens-referral-modal"
  },
  Ln = {
    class: "title"
  },
  Mn = {
    class: "list"
  },
  jn = $({
    __name: "FrensReferralModal",
    props: {
      frens: {}
    },
    emits: ["close"],
    setup(v, {
      emit: e
    }) {
      const r = e;
      return He(() => {
        r("close")
      }), (n, m) => {
        const f = Rn,
          g = xe;
        return o(), k(g, null, {
          default: C(() => [i("div", Vn, [i("div", Ln, d(("t" in n ? n.t : t(a))("frens.referrals.title")), 1), i("div", Mn, [(o(!0), l(A, null, U(n.frens, u => (o(), k(f, {
            key: u.username,
            fren: u
          }, null, 8, ["fren"]))), 128))])])]),
          _: 1
        })
      }
    }
  }),
  zn = F(jn, [
    ["__scopeId", "data-v-b395704b"]
  ]),
  Dn = {
    class: "pages-frens"
  },
  En = $({
    __name: "Frens",
    setup(v) {
      const e = ee(),
        r = J(),
        n = I(),
        m = I(),
        f = I();
      let g;
      const u = () => {
          g && (clearInterval(g), g = void 0)
        },
        s = I(!1),
        h = I(!1);
      be(h, _ => {
        _ || (ke().meta.back = void 0)
      });
      const y = async () => N(await K.getFrens({
        pageSize: 1e3
      })), T = async () => N(await K.getFrensUsing()), x = async () => N(await K.getFrensTradingUsing()), H = _ => {
        u();
        const p = e.getCurrentTimestamp();
        if (p && _.canClaimAt) {
          const B = _.canClaimAt - p;
          B > 0 && (g = setTimeout(P.exec, B))
        }
        m.value = _
      }, se = async () => {
        const _ = await K.claimFrens();
        return _.err || P.exec(), _
      }, oe = _ => {
        Ce().makeConfetti();
        const p = V(_.claimBalance);
        Ae().success(a("base.you_got_bp", {
          bp: p
        })), Te().friendsInvite.frensClaimed(_.claimBalance), setTimeout(() => {
          P.exec(), J().update()
        }, 5e3)
      }, j = W(y, _ => n.value = _, 3e4), P = W(T, H, 1e4), z = W(x, _ => f.value = _, 1e4), D = w(() => {
        var p;
        if (!r.points) return;
        const _ = r.pointSymbols.value.ton;
        return _ ? {
          tonAmount: _.balance.value,
          usdAmount: (p = _.fiatValue.USD) == null ? void 0 : p.value
        } : {
          tonAmount: new Q(0),
          usdAmount: new Q(0)
        }
      }), re = w(() => [{
        key: "ton",
        label: a("frens.tab.ton")
      }, {
        key: "points",
        label: a("frens.tab.points")
      }]);
      return (async () => {
        await Promise.all([j.exec(), P.exec(), z.exec()])
      })(), ye(() => {
        j.destroy(), P.destroy(), z.destroy(), u()
      }), (_, p) => {
        const B = en,
          ie = _n,
          E = vn,
          ae = Tn,
          ce = Oe,
          le = S,
          _e = Pe,
          de = Ke,
          me = zn,
          pe = We,
          ue = Ne;
        return o(), l("div", Dn, [t(n) && t(m) && t(f) ? (o(), l(A, {
          key: 0
        }, [t(n).frens.length === 0 ? (o(), k(B, {
          key: 0,
          "frens-using": t(m),
          "frens-trading-using": t(f)
        }, null, 8, ["frens-using", "frens-trading-using"])) : (o(), k(ce, {
          key: 1,
          tabs: t(re),
          class: "tabs"
        }, {
          ton: C(() => {
            var b, q;
            return [c(ie, {
              "frens-trading": t(f),
              "ton-amount": (b = t(D)) == null ? void 0 : b.tonAmount,
              "usd-amount": (q = t(D)) == null ? void 0 : q.usdAmount
            }, null, 8, ["frens-trading", "ton-amount", "usd-amount"]), c(E, {
              "used-invitation": t(m).usedInvitation,
              "onOpen:referral": p[0] || (p[0] = Xn => h.value = !0)
            }, null, 8, ["used-invitation"])]
          }),
          points: C(() => [c(ae, {
            "amount-for-claim": t(m).amountForClaim,
            "can-claim": t(m).canClaim,
            "can-claim-at": t(m).canClaimAt,
            "percent-from-friends": t(m).percentFromFriends,
            "percent-from-friends-of-friends": t(m).percentFromFriendsOfFriends,
            "claim-callback": se,
            "onUi:claimed": p[1] || (p[1] = b => oe(b))
          }, null, 8, ["amount-for-claim", "can-claim", "can-claim-at", "percent-from-friends", "percent-from-friends-of-friends"]), c(E, {
            "used-invitation": t(m).usedInvitation,
            "onOpen:referral": p[2] || (p[2] = b => h.value = !0)
          }, null, 8, ["used-invitation"])]),
          _: 1
        }, 8, ["tabs"])), c(de, null, {
          default: C(() => [c(_e, {
            label: ("t" in _ ? _.t : t(a))("frens.base.invite"),
            fill: "",
            size: t(we).LARGE,
            onClick: p[3] || (p[3] = b => s.value = !0)
          }, {
            left: C(() => [c(le, {
              name: "users",
              class: "button-icon"
            })]),
            _: 1
          }, 8, ["label", "size"])]),
          _: 1
        }), t(h) ? (o(), k(me, {
          key: 2,
          frens: t(n).frens,
          onClose: p[4] || (p[4] = b => h.value = !1)
        }, null, 8, ["frens"])) : R("", !0), c(pe, {
          modelValue: t(s),
          "onUpdate:modelValue": p[5] || (p[5] = b => Ie(s) ? s.value = b : null),
          "referral-token": t(m).referralToken,
          qr: ""
        }, null, 8, ["modelValue", "referral-token"])], 64)) : (o(), k(ue, {
          key: 1
        }))])
      }
    }
  }),
  qn = F(En, [
    ["__scopeId", "data-v-dc0a8263"]
  ]),
  Gn = {},
  Zn = {
    class: "frens-page page"
  };

function Jn(v, e) {
  const r = qn;
  return o(), l("div", Zn, [c(r)])
}
const dt = F(Gn, [
  ["render", Jn],
  ["__scopeId", "data-v-5a91f047"]
]);
export {
  dt as
  default
};