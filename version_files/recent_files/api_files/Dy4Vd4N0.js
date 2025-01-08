import {
  d as h,
  o,
  c as l,
  a as i,
  y as Q,
  b as c,
  _ as B,
  f as F,
  j as w,
  z as a,
  A as O,
  e as s,
  F as T,
  q as U,
  t as d,
  n as G,
  C as X,
  h as ue,
  D as V,
  E as fe,
  G as k,
  H as ve,
  I as C,
  m as ge,
  J as Fe,
  K as Y,
  L as I,
  M as $e,
  N as L,
  O as he,
  w as be,
  P as Z,
  Q as ke,
  R as ye,
  T as N,
  U as J,
  V as we,
  W as Ie,
  p as Ce,
  X as K,
  Y as Te,
  Z as Ae,
  $ as Pe,
  x as Ue,
  a0 as R
} from "./DxboYIav.js";
import {
  _ as M
} from "./T7zQbvVn.js";
import {
  _ as Be
} from "./KHJrpaoA.js";
import {
  _ as Se
} from "./CQpVjBHL.js";
import {
  _ as Oe
} from "./DSSVb2Lt.js";
import {
  _ as Ke
} from "./CMU7-Eax.js";
import {
  _ as xe
} from "./BuBMz6pq.js";
import {
  _ as He
} from "./DIKoiNep.js";
import {
  u as Ne
} from "./CbfQMKq7.js";
import {
  _ as Re
} from "./D1mHv8je.js";
import {
  _ as Ve
} from "./BdL9Dqzx.js";
import "./BExxc4bH.js";
const Le = {
    class: "pages-frens-icons"
  },
  Me = h({
    __name: "FrensHeadingIcons",
    props: {
      icon: {}
    },
    setup(v) {
      return (e, r) => {
        const n = B;
        return o(), l("div", Le, [r[0] || (r[0] = i("img", {
          src: Q,
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
  j = F(Me, [
    ["__scopeId", "data-v-54907da8"]
  ]),
  je = {
    class: "title"
  },
  ze = {
    class: "value"
  },
  De = {
    class: "text"
  },
  Ee = h({
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
        const g = M;
        return o(), l("div", {
          class: G(["pages-frens-commissions-cards", `size-${s(r)}`])
        }, [s(n) ? (o(!0), l(T, {
          key: 0
        }, U(s(n), u => (o(), l("div", {
          key: u.title,
          class: "card"
        }, [i("div", je, d(u.title), 1), i("div", ze, d(u.value), 1), i("div", De, [(o(!0), l(T, null, U(u.text, t => (o(), l("span", {
          key: t.value,
          class: G([{
            highlighted: t.highlighted
          }, "item"])
        }, d(t.value), 3))), 128))])]))), 128)) : (o(), l(T, {
          key: 1
        }, U(2, u => c(g, {
          key: u,
          class: "skeleton"
        })), 64))], 2)
      }
    }
  }),
  ee = F(Ee, [
    ["__scopeId", "data-v-e549e0de"]
  ]),
  We = {
    class: "content"
  },
  qe = {
    class: "title"
  },
  Ge = {
    class: "subtitle"
  },
  Ze = h({
    __name: "FrensHowItWorks",
    setup(v) {
      const e = () => ue().$webApp.openLink("https://www.blum.io/post/blum-trading-referral-system");
      return (r, n) => {
        const m = B;
        return o(), l("button", {
          type: "button",
          class: "pages-frens-how-it-works reset",
          onClick: e
        }, [n[0] || (n[0] = i("img", {
          src: X,
          alt: "Friends emoji",
          class: "emoji"
        }, null, -1)), i("div", We, [i("div", qe, d(("t" in r ? r.t : s(a))("frens.ton.how_it_works.title")), 1), i("div", Ge, d(("t" in r ? r.t : s(a))("frens.ton.how_it_works.subtitle")), 1)]), c(m, {
          name: "chevron-right",
          class: "icon"
        })])
      }
    }
  }),
  ne = F(Ze, [
    ["__scopeId", "data-v-8cb31b17"]
  ]),
  Je = {
    class: "pages-frens-empty-state"
  },
  Qe = {
    class: "sections"
  },
  Xe = {
    class: "title"
  },
  Ye = {
    key: 0,
    class: "subtitle"
  },
  en = h({
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
        const f = j,
          g = ee,
          u = ne;
        return o(), l("div", Je, [i("div", Qe, [(o(!0), l(T, null, U(s(r), t => (o(), l("div", {
          key: t.title,
          class: "section"
        }, [c(f, {
          icon: t.icon,
          class: "icons"
        }, null, 8, ["icon"]), i("div", Xe, d(t.title), 1), t.subtitle ? (o(), l("div", Ye, d(t.subtitle), 1)) : V("", !0), c(g, {
          class: "cards",
          type: t.type,
          "percent-from-friends": t.percentFromFriends,
          "percent-from-friends-of-friends": t.percentFromFriendsOfFriends
        }, null, 8, ["type", "percent-from-friends", "percent-from-friends-of-friends"])]))), 128))]), c(u)])
      }
    }
  }),
  nn = F(en, [
    ["__scopeId", "data-v-5b2c2224"]
  ]),
  sn = {
    class: "pages-frens-ton-section"
  },
  tn = {
    key: 0,
    class: "with-balance"
  },
  on = {
    class: "title"
  },
  rn = {
    key: 0,
    class: "balance-ton"
  },
  an = {
    key: 2,
    class: "balance-usd"
  },
  cn = {
    key: 1,
    class: "empty"
  },
  ln = {
    class: "title"
  },
  _n = h({
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
        const f = Be,
          g = M,
          u = Fe,
          t = ne,
          $ = j,
          y = ee;
        return o(), l("div", sn, [s(r) ? (o(), l("div", tn, [c(f, {
          class: "background"
        }), i("div", on, d(("t" in n ? n.t : s(a))("frens.ton.title")), 1), n.tonAmount ? (o(), l("div", rn, d(`${("formatTon"in n?n.formatTon:s(fe))(n.tonAmount,{trim:!0})} TON`), 1)) : (o(), k(g, {
          key: 1,
          class: "balance-ton-skeleton"
        })), n.usdAmount ? (o(), l("div", an, d(`$${("formatUsd"in n?n.formatUsd:s(ve))(n.usdAmount)}`), 1)) : (o(), k(g, {
          key: 3,
          class: "balance-usd-skeleton"
        })), c(u, {
          to: {
            name: "wallet"
          },
          class: "wallet-btn"
        }, {
          default: C(() => [ge(d(("t" in n ? n.t : s(a))("frens.ton.go_to_wallet_text")), 1)]),
          _: 1
        }), c(t, {
          class: "how-it-works"
        })])) : (o(), l("div", cn, [c($, {
          icon: "ton-logo-ref",
          class: "icons"
        }), i("div", ln, d(("t" in n ? n.t : s(a))("frens.ton.zero_earn.title")), 1), c(y, {
          type: "ton",
          "percent-from-friends": n.frensTrading.percentFromFriends,
          "percent-from-friends-of-friends": n.frensTrading.percentFromFriendsOfFriends
        }, null, 8, ["percent-from-friends", "percent-from-friends-of-friends"]), c(t, {
          class: "how-it-works"
        })]))])
      }
    }
  }),
  dn = F(_n, [
    ["__scopeId", "data-v-07bd4c46"]
  ]),
  mn = {
    class: "pages-frens-referrals-section"
  },
  pn = {
    class: "card"
  },
  un = {
    class: "title"
  },
  fn = {
    class: "count"
  },
  vn = h({
    __name: "FrensReferralsSection",
    props: {
      usedInvitation: {}
    },
    emits: ["open:referral"],
    setup(v) {
      return (e, r) => {
        const n = Se;
        return o(), l("div", mn, [c(n, {
          label: ("t" in e ? e.t : s(a))("frens.referrals.title"),
          "click-callback": () => e.$emit("open:referral")
        }, null, 8, ["label", "click-callback"]), i("div", pn, [r[0] || (r[0] = i("img", {
          src: Q,
          alt: "Friends emoji"
        }, null, -1)), i("div", un, d(("t" in e ? e.t : s(a))("frens.referrals.invited_title")), 1), i("div", fn, d(e.usedInvitation), 1)])])
      }
    }
  }),
  gn = F(vn, [
    ["__scopeId", "data-v-435c4437"]
  ]),
  Fn = {
    class: "pages-frens-note-card"
  },
  $n = ["innerHTML"],
  hn = h({
    __name: "FrensNoteCard",
    props: {
      text: {}
    },
    setup(v) {
      return (e, r) => (o(), l("div", Fn, [r[0] || (r[0] = i("img", {
        src: X,
        alt: "Friends emoji",
        class: "emoji"
      }, null, -1)), i("div", {
        class: "text",
        innerHTML: e.text
      }, null, 8, $n)]))
    }
  }),
  bn = F(hn, [
    ["__scopeId", "data-v-0235c88a"]
  ]),
  kn = {
    class: "pages-frens-points-section"
  },
  yn = {
    class: "title"
  },
  wn = {
    class: "balance-card"
  },
  In = {
    class: "inner"
  },
  Cn = {
    class: "points"
  },
  Tn = {
    class: "description"
  },
  An = h({
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
        m = Y(),
        f = I(!1),
        g = async () => {
          f.value = !0;
          const t = performance.now(),
            $ = await r.claimCallback();
          if ($.err) {
            f.value = !1;
            return
          }
          const y = performance.now() - t;
          y < 2e3 && await new Promise(A => setTimeout(A, 1e3 - y)), f.value = !1, n("ui:claimed", $.data)
        }, u = w(() => {
          if (r.canClaim) return a("frens.points.ready_to_claim");
          if (!m.ms100ticker.value || !r.canClaimAt) return;
          const t = $e(r.canClaimAt - m.ms100ticker.value, "letters");
          return a("base.claim_next_in", {
            time: t
          })
        });
      return (t, $) => {
        const y = j,
          A = B,
          x = Oe,
          H = bn;
        return o(), l("div", kn, [c(y, {
          icon: "bp-logo-circle",
          class: "icons"
        }), i("div", yn, d(("t" in t ? t.t : s(a))("frens.points.title")), 1), i("div", wn, [c(A, {
          name: "logo",
          class: "icon"
        }), i("div", In, [i("div", Cn, d(`${("formatBp"in t?t.formatBp:s(L))(t.amountForClaim)} BP`), 1), i("div", Tn, d(s(u)), 1)]), c(x, {
          label: ("t" in t ? t.t : s(a))("base.claim"),
          "can-claim": t.canClaim,
          "claim-fn": g,
          class: "claim-pill"
        }, null, 8, ["label", "can-claim"])]), c(H, {
          text: ("t" in t ? t.t : s(a))("frens.points.note_text", {
            percentFromFriends: `${t.percentFromFriends}%`,
            percentFromFriendsOfFriends: `+ ${t.percentFromFriendsOfFriends}%`
          }),
          class: "note-card"
        }, null, 8, ["text"])])
      }
    }
  }),
  Pn = F(An, [
    ["__scopeId", "data-v-0f8cfa86"]
  ]),
  Un = {
    class: "pages-frens-list-item"
  },
  Bn = {
    class: "avatar"
  },
  Sn = {
    class: "letter"
  },
  On = ["src"],
  Kn = {
    class: "details"
  },
  xn = {
    class: "username"
  },
  Hn = {
    class: "frens-count-compose"
  },
  Nn = {
    class: "counter"
  },
  Rn = {
    key: 0,
    class: "balance"
  },
  Vn = h({
    __name: "FrensListItem",
    props: {
      fren: {}
    },
    setup(v) {
      return (e, r) => {
        const n = B,
          m = M,
          f = he("img-loader");
        return o(), l("div", Un, [i("div", Bn, [i("div", Sn, d(e.fren.letterAvatar), 1), e.fren.avatarUrl ? be((o(), l("img", {
          key: 0,
          src: e.fren.avatarUrl,
          alt: "Avatar"
        }, null, 8, On)), [
          [f]
        ]) : V("", !0)]), i("div", Kn, [i("div", xn, d(e.fren.username), 1), i("div", Hn, [c(n, {
          name: "users",
          class: "icon"
        }), i("div", Nn, d(e.fren.totalFrens > 0 ? "+ " : "") + d(e.fren.totalFrens), 1)])]), e.fren.farmBalance ? (o(), l("div", Rn, d(("formatBp" in e ? e.formatBp : s(L))(e.fren.farmBalance)) + " BP", 1)) : (o(), k(m, {
          key: 1,
          class: "skeleton"
        }))])
      }
    }
  }),
  Ln = F(Vn, [
    ["__scopeId", "data-v-5f3d3da2"]
  ]),
  Mn = {
    class: "pages-frens-referral-modal"
  },
  jn = {
    class: "title"
  },
  zn = {
    class: "list"
  },
  Dn = h({
    __name: "FrensReferralModal",
    props: {
      frens: {}
    },
    emits: ["close"],
    setup(v, {
      emit: e
    }) {
      const r = e;
      return Ne(() => {
        r("close")
      }), (n, m) => {
        const f = Ln,
          g = He;
        return o(), k(g, null, {
          default: C(() => [i("div", Mn, [i("div", jn, d(("t" in n ? n.t : s(a))("frens.referrals.title")), 1), i("div", zn, [(o(!0), l(T, null, U(n.frens, u => (o(), k(f, {
            key: u.username,
            fren: u
          }, null, 8, ["fren"]))), 128))])])]),
          _: 1
        })
      }
    }
  }),
  En = F(Dn, [
    ["__scopeId", "data-v-b395704b"]
  ]),
  Wn = {
    class: "pages-frens"
  },
  qn = h({
    __name: "Frens",
    setup(v) {
      const e = Y(),
        r = Z(),
        n = I(),
        m = I(),
        f = I();
      let g;
      const u = () => {
          g && (clearInterval(g), g = void 0)
        },
        t = I(!1),
        $ = I(!1);
      ke($, _ => {
        _ || (ye().meta.back = void 0)
      });
      const y = async () => R(await K.getFrens({
        pageSize: 1e3
      })), A = async () => R(await K.getFrensUsing()), x = async () => R(await K.getFrensTradingUsing()), H = _ => {
        u();
        const p = e.getCurrentTimestamp();
        if (p && _.canClaimAt) {
          const S = _.canClaimAt - p;
          S > 0 && (g = setTimeout(P.exec, S))
        }
        m.value = _
      }, se = async () => {
        const _ = await K.claimFrens();
        return _.err || P.exec(), _
      }, te = _ => {
        Te().makeConfetti();
        const p = L(_.claimBalance);
        Ae().success(a("base.you_got_bp", {
          bp: p
        })), Pe().friendsInvite.frensClaimed(_.claimBalance), setTimeout(() => {
          P.exec(), Z().update()
        }, 5e3)
      }, z = N(y, _ => n.value = _, 3e4), P = N(A, H, 1e4), D = N(x, _ => f.value = _, 1e4), E = w(() => {
        var p;
        if (!r.points) return;
        const _ = r.pointSymbols.value.ton;
        return _ ? {
          tonAmount: _.balance.value,
          usdAmount: (p = _.fiatValue.USD) == null ? void 0 : p.value
        } : {
          tonAmount: new J(0),
          usdAmount: new J(0)
        }
      }), oe = w(() => [{
        key: "ton",
        label: a("frens.tab.ton")
      }, {
        key: "points",
        label: a("frens.tab.points")
      }]);
      return (async () => {
        await Promise.all([z.exec(), P.exec(), D.exec()])
      })(), we(() => {
        z.destroy(), P.destroy(), D.destroy(), u()
      }), (_, p) => {
        const S = nn,
          re = dn,
          W = gn,
          ie = Pn,
          ae = Ke,
          ce = B,
          le = Ue,
          _e = xe,
          de = En,
          me = Re,
          pe = Ve;
        return o(), l("div", Wn, [s(n) && s(m) && s(f) ? (o(), l(T, {
          key: 0
        }, [s(n).frens.length === 0 ? (o(), k(S, {
          key: 0,
          "frens-using": s(m),
          "frens-trading-using": s(f)
        }, null, 8, ["frens-using", "frens-trading-using"])) : (o(), k(ae, {
          key: 1,
          tabs: s(oe),
          class: "tabs"
        }, {
          ton: C(() => {
            var b, q;
            return [c(re, {
              "frens-trading": s(f),
              "ton-amount": (b = s(E)) == null ? void 0 : b.tonAmount,
              "usd-amount": (q = s(E)) == null ? void 0 : q.usdAmount
            }, null, 8, ["frens-trading", "ton-amount", "usd-amount"]), c(W, {
              "used-invitation": s(m).usedInvitation,
              "onOpen:referral": p[0] || (p[0] = Yn => $.value = !0)
            }, null, 8, ["used-invitation"])]
          }),
          points: C(() => [c(ie, {
            "amount-for-claim": s(m).amountForClaim,
            "can-claim": s(m).canClaim,
            "can-claim-at": s(m).canClaimAt,
            "percent-from-friends": s(m).percentFromFriends,
            "percent-from-friends-of-friends": s(m).percentFromFriendsOfFriends,
            "claim-callback": se,
            "onUi:claimed": p[1] || (p[1] = b => te(b))
          }, null, 8, ["amount-for-claim", "can-claim", "can-claim-at", "percent-from-friends", "percent-from-friends-of-friends"]), c(W, {
            "used-invitation": s(m).usedInvitation,
            "onOpen:referral": p[2] || (p[2] = b => $.value = !0)
          }, null, 8, ["used-invitation"])]),
          _: 1
        }, 8, ["tabs"])), c(_e, null, {
          default: C(() => [c(le, {
            label: ("t" in _ ? _.t : s(a))("frens.base.invite"),
            fill: "",
            size: s(Ie).LARGE,
            onClick: p[3] || (p[3] = b => t.value = !0)
          }, {
            left: C(() => [c(ce, {
              name: "users",
              class: "button-icon"
            })]),
            _: 1
          }, 8, ["label", "size"])]),
          _: 1
        }), s($) ? (o(), k(de, {
          key: 2,
          frens: s(n).frens,
          onClose: p[4] || (p[4] = b => $.value = !1)
        }, null, 8, ["frens"])) : V("", !0), c(me, {
          modelValue: s(t),
          "onUpdate:modelValue": p[5] || (p[5] = b => Ce(t) ? t.value = b : null),
          "referral-token": s(m).referralToken,
          qr: ""
        }, null, 8, ["modelValue", "referral-token"])], 64)) : (o(), k(pe, {
          key: 1
        }))])
      }
    }
  }),
  Gn = F(qn, [
    ["__scopeId", "data-v-dc0a8263"]
  ]),
  Zn = {},
  Jn = {
    class: "frens-page page"
  };

function Qn(v, e) {
  const r = Gn;
  return o(), l("div", Jn, [c(r)])
}
const ms = F(Zn, [
  ["render", Qn],
  ["__scopeId", "data-v-5a91f047"]
]);
export {
  ms as
  default
};