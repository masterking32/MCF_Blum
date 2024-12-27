import {
  d as h,
  o as t,
  c,
  a as r,
  y as Q,
  b as d,
  _ as K,
  f as $,
  j as C,
  z as o,
  A as O,
  e as n,
  F as A,
  q as w,
  t as _,
  n as G,
  C as H,
  D as fe,
  E as pe,
  G as k,
  H as ue,
  I as T,
  m as Fe,
  J as ve,
  K as X,
  L as I,
  M as ge,
  N as M,
  O as $e,
  w as he,
  P as Z,
  Q as ye,
  R as ke,
  T as R,
  U as J,
  V as be,
  W as Ce,
  p as Ie,
  X as S,
  Y as Te,
  Z as Ae,
  $ as Pe,
  x as Ue,
  a0 as V
} from "./DRqvt5pl.js";
import {
  _ as z
} from "./2vZNcphP.js";
import {
  _ as we
} from "./DjdIR9xr.js";
import {
  _ as Be
} from "./_5JkWycP.js";
import {
  _ as Oe
} from "./BiWzAglk.js";
import {
  _ as Se
} from "./B-y46x74.js";
import {
  _ as Ke
} from "./BvaVk8E1.js";
import {
  _ as xe
} from "./DDcciUHT.js";
import {
  u as Ne
} from "./B5xCA4JM.js";
import {
  _ as Re
} from "./DsuFuiob.js";
import {
  _ as Ve
} from "./CMncxNGJ.js";
import "./CcbV7D7P.js";
const He = {
    class: "pages-frens-icons"
  },
  Me = h({
    __name: "FrensHeadingIcons",
    props: {
      icon: {}
    },
    setup(v) {
      return (s, i) => {
        const e = K;
        return t(), c("div", He, [i[0] || (i[0] = r("img", {
          src: Q,
          alt: "Friends emoji",
          class: "emoji"
        }, null, -1)), d(e, {
          name: "arrow-right-2",
          class: "arrow"
        }), d(e, {
          name: s.icon,
          class: "icon"
        }, null, 8, ["name"])])
      }
    }
  }),
  L = $(Me, [
    ["__scopeId", "data-v-54907da8"]
  ]),
  ze = {
    class: "title"
  },
  Le = {
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
      const s = v,
        i = C(() => s.type === "points" ? "sm" : "md"),
        e = C(() => s.type === "points" ? [{
          title: o("frens.points.cards.friends.title"),
          value: `${O(s.percentFromFriends,{trim:!0})}%`,
          text: [{
            value: o("frens.points.cards.friends.text"),
            highlighted: !0
          }]
        }, {
          title: o("frens.points.cards.friends_of_friends.title"),
          value: `${O(s.percentFromFriendsOfFriends,{trim:!0})}%`,
          text: [{
            value: o("frens.points.cards.friends_of_friends.text"),
            highlighted: !0
          }]
        }] : [{
          title: o("frens.ton.cards.friends.title"),
          value: `${O(s.percentFromFriends,{trim:!0})}%`,
          text: [{
            value: o("frens.ton.cards.friends.text.1"),
            highlighted: !0
          }, {
            value: ` ${o("frens.ton.cards.friends.text.2")}`,
            highlighted: !1
          }]
        }, {
          title: o("frens.ton.cards.friends_of_friends.title"),
          value: `${O(s.percentFromFriendsOfFriends,{trim:!0})}%`,
          text: [{
            value: o("frens.ton.cards.friends_of_friends.text.1"),
            highlighted: !0
          }, {
            value: ` ${o("frens.ton.cards.friends_of_friends.text.2")}`,
            highlighted: !1
          }]
        }]);
      return (f, u) => {
        const F = z;
        return t(), c("div", {
          class: G(["pages-frens-commissions-cards", `size-${n(i)}`])
        }, [n(e) ? (t(!0), c(A, {
          key: 0
        }, w(n(e), l => (t(), c("div", {
          key: l.title,
          class: "card"
        }, [r("div", ze, _(l.title), 1), r("div", Le, _(l.value), 1), r("div", De, [(t(!0), c(A, null, w(l.text, a => (t(), c("span", {
          key: a.value,
          class: G([{
            highlighted: a.highlighted
          }, "item"])
        }, _(a.value), 3))), 128))])]))), 128)) : (t(), c(A, {
          key: 1
        }, w(2, l => d(F, {
          key: l,
          class: "skeleton"
        })), 64))], 2)
      }
    }
  }),
  Y = $(Ee, [
    ["__scopeId", "data-v-e549e0de"]
  ]),
  je = {
    class: "pages-frens-empty-state"
  },
  We = {
    class: "sections"
  },
  qe = {
    class: "title"
  },
  Ge = {
    key: 0,
    class: "subtitle"
  },
  Ze = h({
    __name: "FrensEmptyState",
    props: {
      frensUsing: {},
      frensTradingUsing: {}
    },
    setup(v) {
      const s = v,
        i = C(() => [{
          icon: "bp-logo-circle",
          title: o("frens.empty.points.title"),
          subtitle: o("frens.empty.points.subtitle"),
          type: "points",
          percentFromFriends: s.frensUsing.percentFromFriends,
          percentFromFriendsOfFriends: s.frensUsing.percentFromFriendsOfFriends
        }, {
          icon: "ton-logo-ref",
          title: o("frens.empty.ton.title"),
          subtitle: void 0,
          type: "ton",
          percentFromFriends: s.frensTradingUsing.percentFromFriends,
          percentFromFriendsOfFriends: s.frensTradingUsing.percentFromFriendsOfFriends
        }]);
      return (e, f) => {
        const u = L,
          F = Y;
        return t(), c("div", je, [r("div", We, [(t(!0), c(A, null, w(n(i), l => (t(), c("div", {
          key: l.title,
          class: "section"
        }, [d(u, {
          icon: l.icon,
          class: "icons"
        }, null, 8, ["icon"]), r("div", qe, _(l.title), 1), l.subtitle ? (t(), c("div", Ge, _(l.subtitle), 1)) : H("", !0), d(F, {
          class: "cards",
          type: l.type,
          "percent-from-friends": l.percentFromFriends,
          "percent-from-friends-of-friends": l.percentFromFriendsOfFriends
        }, null, 8, ["type", "percent-from-friends", "percent-from-friends-of-friends"])]))), 128))])])
      }
    }
  }),
  Je = $(Ze, [
    ["__scopeId", "data-v-9671d2a7"]
  ]),
  Qe = {
    class: "pages-frens-note-card"
  },
  Xe = ["innerHTML"],
  Ye = h({
    __name: "FrensNoteCard",
    props: {
      text: {}
    },
    setup(v) {
      return (s, i) => (t(), c("div", Qe, [i[0] || (i[0] = r("img", {
        src: fe,
        alt: "Friends emoji",
        class: "emoji"
      }, null, -1)), r("div", {
        class: "text",
        innerHTML: s.text
      }, null, 8, Xe)]))
    }
  }),
  ee = $(Ye, [
    ["__scopeId", "data-v-0235c88a"]
  ]),
  en = {
    class: "pages-frens-ton-section"
  },
  nn = {
    key: 0,
    class: "with-balance"
  },
  sn = {
    class: "title"
  },
  tn = {
    key: 0,
    class: "balance-ton"
  },
  on = {
    key: 2,
    class: "balance-usd"
  },
  rn = {
    key: 1,
    class: "empty"
  },
  an = {
    class: "title"
  },
  cn = h({
    __name: "FrensTonSection",
    props: {
      frensTrading: {},
      tonAmount: {},
      usdAmount: {}
    },
    setup(v) {
      const s = v,
        i = C(() => {
          var e;
          return !!((e = s.tonAmount) != null && e.gt(0))
        });
      return (e, f) => {
        const u = we,
          F = z,
          l = ve,
          a = ee,
          g = L,
          b = Y;
        return t(), c("div", en, [n(i) ? (t(), c("div", nn, [d(u, {
          class: "background"
        }), r("div", sn, _(("t" in e ? e.t : n(o))("frens.ton.title")), 1), e.tonAmount ? (t(), c("div", tn, _(`${("formatTon"in e?e.formatTon:n(pe))(e.tonAmount,{trim:!0})} TON`), 1)) : (t(), k(F, {
          key: 1,
          class: "balance-ton-skeleton"
        })), e.usdAmount ? (t(), c("div", on, _(`$${("formatUsd"in e?e.formatUsd:n(ue))(e.usdAmount)}`), 1)) : (t(), k(F, {
          key: 3,
          class: "balance-usd-skeleton"
        })), d(l, {
          to: {
            name: "wallet"
          },
          class: "wallet-btn"
        }, {
          default: T(() => [Fe(_(("t" in e ? e.t : n(o))("frens.ton.go_to_wallet_text")), 1)]),
          _: 1
        }), d(a, {
          text: ("t" in e ? e.t : n(o))("frens.ton.note_text", {
            percentFromFriends: `${e.frensTrading.percentFromFriends}%`,
            percentFromFriendsOfFriends: `+ ${e.frensTrading.percentFromFriendsOfFriends}%`
          }),
          class: "note-card"
        }, null, 8, ["text"])])) : (t(), c("div", rn, [d(g, {
          icon: "ton-logo-ref",
          class: "icons"
        }), r("div", an, _(("t" in e ? e.t : n(o))("frens.ton.zero_earn.title")), 1), d(b, {
          type: "ton",
          "percent-from-friends": e.frensTrading.percentFromFriends,
          "percent-from-friends-of-friends": e.frensTrading.percentFromFriendsOfFriends
        }, null, 8, ["percent-from-friends", "percent-from-friends-of-friends"])]))])
      }
    }
  }),
  ln = $(cn, [
    ["__scopeId", "data-v-10ad0e4a"]
  ]),
  dn = {
    class: "pages-frens-referrals-section"
  },
  mn = {
    class: "card"
  },
  _n = {
    class: "title"
  },
  fn = {
    class: "count"
  },
  pn = h({
    __name: "FrensReferralsSection",
    props: {
      usedInvitation: {}
    },
    emits: ["open:referral"],
    setup(v) {
      return (s, i) => {
        const e = Be;
        return t(), c("div", dn, [d(e, {
          label: ("t" in s ? s.t : n(o))("frens.referrals.title"),
          "click-callback": () => s.$emit("open:referral")
        }, null, 8, ["label", "click-callback"]), r("div", mn, [i[0] || (i[0] = r("img", {
          src: Q,
          alt: "Friends emoji"
        }, null, -1)), r("div", _n, _(("t" in s ? s.t : n(o))("frens.referrals.invited_title")), 1), r("div", fn, _(s.usedInvitation), 1)])])
      }
    }
  }),
  un = $(pn, [
    ["__scopeId", "data-v-435c4437"]
  ]),
  Fn = {
    class: "pages-frens-points-section"
  },
  vn = {
    class: "title"
  },
  gn = {
    class: "balance-card"
  },
  $n = {
    class: "inner"
  },
  hn = {
    class: "points"
  },
  yn = {
    class: "description"
  },
  kn = h({
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
      emit: s
    }) {
      const i = v,
        e = s,
        f = X(),
        u = I(!1),
        F = async () => {
          u.value = !0;
          const a = performance.now(),
            g = await i.claimCallback();
          if (g.err) {
            u.value = !1;
            return
          }
          const b = performance.now() - a;
          b < 2e3 && await new Promise(P => setTimeout(P, 1e3 - b)), u.value = !1, e("ui:claimed", g.data)
        }, l = C(() => {
          if (i.canClaim) return o("frens.points.ready_to_claim");
          if (!f.ms100ticker.value || !i.canClaimAt) return;
          const a = ge(i.canClaimAt - f.ms100ticker.value, "letters");
          return o("base.claim_next_in", {
            time: a
          })
        });
      return (a, g) => {
        const b = L,
          P = K,
          x = Oe,
          N = ee;
        return t(), c("div", Fn, [d(b, {
          icon: "bp-logo-circle",
          class: "icons"
        }), r("div", vn, _(("t" in a ? a.t : n(o))("frens.points.title")), 1), r("div", gn, [d(P, {
          name: "logo",
          class: "icon"
        }), r("div", $n, [r("div", hn, _(`${("formatBp"in a?a.formatBp:n(M))(a.amountForClaim)} BP`), 1), r("div", yn, _(n(l)), 1)]), d(x, {
          label: ("t" in a ? a.t : n(o))("base.claim"),
          "can-claim": a.canClaim,
          "claim-fn": F,
          class: "claim-pill"
        }, null, 8, ["label", "can-claim"])]), d(N, {
          text: ("t" in a ? a.t : n(o))("frens.points.note_text", {
            percentFromFriends: `${a.percentFromFriends}%`,
            percentFromFriendsOfFriends: `+ ${a.percentFromFriendsOfFriends}%`
          }),
          class: "note-card"
        }, null, 8, ["text"])])
      }
    }
  }),
  bn = $(kn, [
    ["__scopeId", "data-v-0f8cfa86"]
  ]),
  Cn = {
    class: "pages-frens-list-item"
  },
  In = {
    class: "avatar"
  },
  Tn = {
    class: "letter"
  },
  An = ["src"],
  Pn = {
    class: "details"
  },
  Un = {
    class: "username"
  },
  wn = {
    class: "frens-count-compose"
  },
  Bn = {
    class: "counter"
  },
  On = {
    key: 0,
    class: "balance"
  },
  Sn = h({
    __name: "FrensListItem",
    props: {
      fren: {}
    },
    setup(v) {
      return (s, i) => {
        const e = K,
          f = z,
          u = $e("img-loader");
        return t(), c("div", Cn, [r("div", In, [r("div", Tn, _(s.fren.letterAvatar), 1), s.fren.avatarUrl ? he((t(), c("img", {
          key: 0,
          src: s.fren.avatarUrl,
          alt: "Avatar"
        }, null, 8, An)), [
          [u]
        ]) : H("", !0)]), r("div", Pn, [r("div", Un, _(s.fren.username), 1), r("div", wn, [d(e, {
          name: "users",
          class: "icon"
        }), r("div", Bn, _(s.fren.totalFrens > 0 ? "+ " : "") + _(s.fren.totalFrens), 1)])]), s.fren.farmBalance ? (t(), c("div", On, _(("formatBp" in s ? s.formatBp : n(M))(s.fren.farmBalance)) + " BP", 1)) : (t(), k(f, {
          key: 1,
          class: "skeleton"
        }))])
      }
    }
  }),
  Kn = $(Sn, [
    ["__scopeId", "data-v-5f3d3da2"]
  ]),
  xn = {
    class: "pages-frens-referral-modal"
  },
  Nn = {
    class: "title"
  },
  Rn = {
    class: "list"
  },
  Vn = h({
    __name: "FrensReferralModal",
    props: {
      frens: {}
    },
    emits: ["close"],
    setup(v, {
      emit: s
    }) {
      const i = s;
      return Ne(() => {
        i("close")
      }), (e, f) => {
        const u = Kn,
          F = xe;
        return t(), k(F, null, {
          default: T(() => [r("div", xn, [r("div", Nn, _(("t" in e ? e.t : n(o))("frens.referrals.title")), 1), r("div", Rn, [(t(!0), c(A, null, w(e.frens, l => (t(), k(u, {
            key: l.username,
            fren: l
          }, null, 8, ["fren"]))), 128))])])]),
          _: 1
        })
      }
    }
  }),
  Hn = $(Vn, [
    ["__scopeId", "data-v-b395704b"]
  ]),
  Mn = {
    class: "pages-frens"
  },
  zn = h({
    __name: "Frens",
    setup(v) {
      const s = X(),
        i = Z(),
        e = I(),
        f = I(),
        u = I();
      let F;
      const l = () => {
          F && (clearInterval(F), F = void 0)
        },
        a = I(!1),
        g = I(!1);
      ye(g, m => {
        m || (ke().meta.back = void 0)
      });
      const b = async () => V(await S.getFrens({
        pageSize: 1e3
      })), P = async () => V(await S.getFrensUsing()), x = async () => V(await S.getFrensTradingUsing()), N = m => {
        l();
        const p = s.getCurrentTimestamp();
        if (p && m.canClaimAt) {
          const B = m.canClaimAt - p;
          B > 0 && (F = setTimeout(U.exec, B))
        }
        f.value = m
      }, ne = async () => {
        const m = await S.claimFrens();
        return m.err || U.exec(), m
      }, se = m => {
        Te().makeConfetti();
        const p = M(m.claimBalance);
        Ae().success(o("base.you_got_bp", {
          bp: p
        })), Pe().friendsInvite.frensClaimed(m.claimBalance), setTimeout(() => {
          U.exec(), Z().update()
        }, 5e3)
      }, D = R(b, m => e.value = m, 3e4), U = R(P, N, 1e4), E = R(x, m => u.value = m, 1e4), j = C(() => {
        var p;
        if (!i.points) return;
        const m = i.pointSymbols.value.ton;
        return m ? {
          tonAmount: m.balance.value,
          usdAmount: (p = m.fiatValue.USD) == null ? void 0 : p.value
        } : {
          tonAmount: new J(0),
          usdAmount: new J(0)
        }
      }), te = C(() => [{
        key: "ton",
        label: o("frens.tab.ton")
      }, {
        key: "points",
        label: o("frens.tab.points")
      }]);
      return (async () => {
        await Promise.all([D.exec(), U.exec(), E.exec()])
      })(), be(() => {
        D.destroy(), U.destroy(), E.destroy(), l()
      }), (m, p) => {
        const B = Je,
          oe = ln,
          W = un,
          re = bn,
          ie = Se,
          ae = K,
          ce = Ue,
          le = Ke,
          de = Hn,
          me = Re,
          _e = Ve;
        return t(), c("div", Mn, [n(e) && n(f) && n(u) ? (t(), c(A, {
          key: 0
        }, [n(e).frens.length === 0 ? (t(), k(B, {
          key: 0,
          "frens-using": n(f),
          "frens-trading-using": n(u)
        }, null, 8, ["frens-using", "frens-trading-using"])) : (t(), k(ie, {
          key: 1,
          tabs: n(te),
          class: "tabs"
        }, {
          ton: T(() => {
            var y, q;
            return [d(oe, {
              "frens-trading": n(u),
              "ton-amount": (y = n(j)) == null ? void 0 : y.tonAmount,
              "usd-amount": (q = n(j)) == null ? void 0 : q.usdAmount
            }, null, 8, ["frens-trading", "ton-amount", "usd-amount"]), d(W, {
              "used-invitation": n(f).usedInvitation,
              "onOpen:referral": p[0] || (p[0] = qn => g.value = !0)
            }, null, 8, ["used-invitation"])]
          }),
          points: T(() => [d(re, {
            "amount-for-claim": n(f).amountForClaim,
            "can-claim": n(f).canClaim,
            "can-claim-at": n(f).canClaimAt,
            "percent-from-friends": n(f).percentFromFriends,
            "percent-from-friends-of-friends": n(f).percentFromFriendsOfFriends,
            "claim-callback": ne,
            "onUi:claimed": p[1] || (p[1] = y => se(y))
          }, null, 8, ["amount-for-claim", "can-claim", "can-claim-at", "percent-from-friends", "percent-from-friends-of-friends"]), d(W, {
            "used-invitation": n(f).usedInvitation,
            "onOpen:referral": p[2] || (p[2] = y => g.value = !0)
          }, null, 8, ["used-invitation"])]),
          _: 1
        }, 8, ["tabs"])), d(le, null, {
          default: T(() => [d(ce, {
            label: ("t" in m ? m.t : n(o))("frens.base.invite"),
            fill: "",
            size: n(Ce).LARGE,
            onClick: p[3] || (p[3] = y => a.value = !0)
          }, {
            left: T(() => [d(ae, {
              name: "users",
              class: "button-icon"
            })]),
            _: 1
          }, 8, ["label", "size"])]),
          _: 1
        }), n(g) ? (t(), k(de, {
          key: 2,
          frens: n(e).frens,
          onClose: p[4] || (p[4] = y => g.value = !1)
        }, null, 8, ["frens"])) : H("", !0), d(me, {
          modelValue: n(a),
          "onUpdate:modelValue": p[5] || (p[5] = y => Ie(a) ? a.value = y : null),
          "referral-token": n(f).referralToken,
          qr: ""
        }, null, 8, ["modelValue", "referral-token"])], 64)) : (t(), k(_e, {
          key: 1
        }))])
      }
    }
  }),
  Ln = $(zn, [
    ["__scopeId", "data-v-dc0a8263"]
  ]),
  Dn = {},
  En = {
    class: "frens-page page"
  };

function jn(v, s) {
  const i = Ln;
  return t(), c("div", En, [d(i)])
}
const is = $(Dn, [
  ["render", jn],
  ["__scopeId", "data-v-5a91f047"]
]);
export {
  is as
  default
};