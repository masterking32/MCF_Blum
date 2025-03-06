import {
  d as $,
  o,
  c as d,
  a,
  y as ne,
  b as l,
  _ as O,
  f as h,
  j as C,
  z as i,
  A as K,
  e,
  F as T,
  q as S,
  t as u,
  n as Z,
  C as te,
  h as Fe,
  D as R,
  E as J,
  G as y,
  H as B,
  m as he,
  I as $e,
  J as se,
  K as U,
  L as be,
  M as V,
  N as ke,
  w as ye,
  O as we,
  P as Q,
  Q as D,
  R as X,
  T as Ce,
  U as Ie,
  p as Ae,
  V as Ue,
  W as A,
  X as W,
  Y as Be,
  Z as Te,
  $ as Pe,
  x as Se,
  a0 as Y,
  a1 as ee
} from "./CyXdbNzs.js";
import {
  _ as L
} from "./CupBmkCL.js";
import {
  _ as Oe
} from "./DbcXUNIO.js";
import {
  _ as Ne
} from "./CvcyNd96.js";
import {
  _ as Ke
} from "./BPebstne.js";
import {
  _ as We
} from "./Dve0EBFU.js";
import {
  _ as xe
} from "./BRn5ypBy.js";
import {
  _ as He
} from "./xSKH793O.js";
import {
  _ as De
} from "./Bxc-KJYe.js";
import {
  _ as Re
} from "./DFiQG710.js";
const Ve = {
    class: "pages-frens-icons"
  },
  Le = $({
    __name: "FrensHeadingIcons",
    props: {
      icon: {}
    },
    setup(v) {
      return (n, r) => {
        const t = O;
        return o(), d("div", Ve, [r[0] || (r[0] = a("img", {
          src: ne,
          alt: "Friends emoji",
          class: "emoji"
        }, null, -1)), l(t, {
          name: "arrow-right-2",
          class: "arrow"
        }), l(t, {
          name: n.icon,
          class: "icon"
        }, null, 8, ["name"])])
      }
    }
  }),
  M = h(Le, [
    ["__scopeId", "data-v-54907da8"]
  ]),
  Me = {
    class: "title"
  },
  je = {
    class: "value"
  },
  ze = {
    class: "text"
  },
  Ee = $({
    __name: "FrensCommissionsCards",
    props: {
      type: {},
      percentFromFriends: {},
      percentFromFriendsOfFriends: {}
    },
    setup(v) {
      const n = v,
        r = C(() => n.type === "points" ? "sm" : "md"),
        t = C(() => n.type === "points" ? [{
          title: i("frens.points.cards.friends.title"),
          value: `${K(n.percentFromFriends,{trim:!0})}%`,
          text: [{
            value: i("frens.points.cards.friends.text"),
            highlighted: !0
          }]
        }, {
          title: i("frens.points.cards.friends_of_friends.title"),
          value: `${K(n.percentFromFriendsOfFriends,{trim:!0})}%`,
          text: [{
            value: i("frens.points.cards.friends_of_friends.text"),
            highlighted: !0
          }]
        }] : [{
          title: i("frens.ton.cards.friends.title"),
          value: `${K(n.percentFromFriends,{trim:!0})}%`,
          text: [{
            value: i("frens.ton.cards.friends.text.1"),
            highlighted: !0
          }, {
            value: ` ${i("frens.ton.cards.friends.text.2")}`,
            highlighted: !1
          }]
        }, {
          title: i("frens.ton.cards.friends_of_friends.title"),
          value: `${K(n.percentFromFriendsOfFriends,{trim:!0})}%`,
          text: [{
            value: i("frens.ton.cards.friends_of_friends.text.1"),
            highlighted: !0
          }, {
            value: ` ${i("frens.ton.cards.friends_of_friends.text.2")}`,
            highlighted: !1
          }]
        }]);
      return (c, p) => {
        const g = L;
        return o(), d("div", {
          class: Z(["pages-frens-commissions-cards", `size-${e(r)}`])
        }, [e(t) ? (o(!0), d(T, {
          key: 0
        }, S(e(t), f => (o(), d("div", {
          key: f.title,
          class: "card"
        }, [a("div", Me, u(f.title), 1), a("div", je, u(f.value), 1), a("div", ze, [(o(!0), d(T, null, S(f.text, s => (o(), d("span", {
          key: s.value,
          class: Z([{
            highlighted: s.highlighted
          }, "item"])
        }, u(s.value), 3))), 128))])]))), 128)) : (o(), d(T, {
          key: 1
        }, S(2, f => l(g, {
          key: f,
          class: "skeleton"
        })), 64))], 2)
      }
    }
  }),
  oe = h(Ee, [
    ["__scopeId", "data-v-e549e0de"]
  ]),
  qe = {
    class: "content"
  },
  Ge = {
    class: "title"
  },
  Ze = {
    class: "subtitle"
  },
  Je = $({
    __name: "FrensHowItWorks",
    setup(v) {
      const n = () => Fe().$webApp.openLink("https://www.blum.io/post/blum-trading-referral-system");
      return (r, t) => {
        const c = O;
        return o(), d("button", {
          type: "button",
          class: "pages-frens-how-it-works reset",
          onClick: n
        }, [t[0] || (t[0] = a("img", {
          src: te,
          alt: "Friends emoji",
          class: "emoji"
        }, null, -1)), a("div", qe, [a("div", Ge, u(("t" in r ? r.t : e(i))("frens.ton.how_it_works.title")), 1), a("div", Ze, u(("t" in r ? r.t : e(i))("frens.ton.how_it_works.subtitle")), 1)]), l(c, {
          name: "chevron-right",
          class: "icon"
        })])
      }
    }
  }),
  re = h(Je, [
    ["__scopeId", "data-v-8cb31b17"]
  ]),
  Qe = {
    class: "pages-frens-empty-state"
  },
  Xe = {
    class: "sections"
  },
  Ye = {
    class: "title"
  },
  en = {
    key: 0,
    class: "subtitle"
  },
  nn = $({
    __name: "FrensEmptyState",
    props: {
      frensUsing: {},
      frensTradingUsing: {}
    },
    setup(v) {
      const n = v,
        r = C(() => [{
          icon: "bp-logo-circle",
          title: i("frens.empty.points.title"),
          subtitle: i("frens.empty.points.subtitle"),
          type: "points",
          percentFromFriends: n.frensUsing.percentFromFriends,
          percentFromFriendsOfFriends: n.frensUsing.percentFromFriendsOfFriends
        }, {
          icon: "ton-logo-ref",
          title: i("frens.empty.ton.title"),
          subtitle: void 0,
          type: "ton",
          percentFromFriends: n.frensTradingUsing.percentFromFriends,
          percentFromFriendsOfFriends: n.frensTradingUsing.percentFromFriendsOfFriends
        }]);
      return (t, c) => {
        const p = M,
          g = oe,
          f = re;
        return o(), d("div", Qe, [a("div", Xe, [(o(!0), d(T, null, S(e(r), s => (o(), d("div", {
          key: s.title,
          class: "section"
        }, [l(p, {
          icon: s.icon,
          class: "icons"
        }, null, 8, ["icon"]), a("div", Ye, u(s.title), 1), s.subtitle ? (o(), d("div", en, u(s.subtitle), 1)) : R("", !0), l(g, {
          class: "cards",
          type: s.type,
          "percent-from-friends": s.percentFromFriends,
          "percent-from-friends-of-friends": s.percentFromFriendsOfFriends
        }, null, 8, ["type", "percent-from-friends", "percent-from-friends-of-friends"])]))), 128))]), l(f)])
      }
    }
  }),
  tn = h(nn, [
    ["__scopeId", "data-v-5b2c2224"]
  ]),
  sn = {
    class: "pages-frens-ton-section"
  },
  on = {
    key: 0,
    class: "with-balance"
  },
  rn = {
    class: "title"
  },
  an = {
    key: 0,
    class: "balance-ton"
  },
  cn = {
    key: 2,
    class: "balance-usd"
  },
  ln = {
    key: 1,
    class: "empty"
  },
  dn = {
    class: "title"
  },
  mn = $({
    __name: "FrensTonSection",
    props: {
      frensTrading: {},
      tonAmount: {},
      usdAmount: {}
    },
    setup(v) {
      const n = v,
        r = C(() => {
          var t;
          return !!((t = n.tonAmount) != null && t.gt(0))
        });
      return (t, c) => {
        const p = Oe,
          g = L,
          f = $e,
          s = re,
          b = M,
          w = oe;
        return o(), d("div", sn, [e(r) ? (o(), d("div", on, [l(p, {
          class: "background"
        }), a("div", rn, u(("t" in t ? t.t : e(i))("frens.ton.title")), 1), t.tonAmount ? (o(), d("div", an, u(("getWalletAmount" in t ? t.getWalletAmount : e(J))(t.tonAmount, "TON").defaultWithSymbol), 1)) : (o(), y(g, {
          key: 1,
          class: "balance-ton-skeleton"
        })), t.usdAmount ? (o(), d("div", cn, u(("getWalletAmount" in t ? t.getWalletAmount : e(J))(t.usdAmount, "USD").defaultWithSymbol), 1)) : (o(), y(g, {
          key: 3,
          class: "balance-usd-skeleton"
        })), l(f, {
          to: {
            name: "wallet"
          },
          class: "wallet-btn"
        }, {
          default: B(() => [he(u(("t" in t ? t.t : e(i))("frens.ton.go_to_wallet_text")), 1)]),
          _: 1
        }), l(s, {
          class: "how-it-works"
        })])) : (o(), d("div", ln, [l(b, {
          icon: "ton-logo-ref",
          class: "icons"
        }), a("div", dn, u(("t" in t ? t.t : e(i))("frens.ton.zero_earn.title")), 1), l(w, {
          type: "ton",
          "percent-from-friends": t.frensTrading.percentFromFriends,
          "percent-from-friends-of-friends": t.frensTrading.percentFromFriendsOfFriends
        }, null, 8, ["percent-from-friends", "percent-from-friends-of-friends"]), l(s, {
          class: "how-it-works"
        })]))])
      }
    }
  }),
  _n = h(mn, [
    ["__scopeId", "data-v-7de774b9"]
  ]),
  un = {
    class: "pages-frens-referrals-section"
  },
  fn = {
    class: "card"
  },
  pn = {
    class: "title"
  },
  vn = {
    class: "count"
  },
  gn = $({
    __name: "FrensReferralsSection",
    props: {
      usedInvitation: {}
    },
    emits: ["open:referral"],
    setup(v) {
      return (n, r) => {
        const t = Ne;
        return o(), d("div", un, [l(t, {
          label: ("t" in n ? n.t : e(i))("frens.referrals.title"),
          "click-callback": () => n.$emit("open:referral")
        }, null, 8, ["label", "click-callback"]), a("div", fn, [r[0] || (r[0] = a("img", {
          src: ne,
          alt: "Friends emoji"
        }, null, -1)), a("div", pn, u(("t" in n ? n.t : e(i))("frens.referrals.invited_title")), 1), a("div", vn, u(n.usedInvitation), 1)])])
      }
    }
  }),
  Fn = h(gn, [
    ["__scopeId", "data-v-435c4437"]
  ]),
  hn = {
    class: "pages-frens-note-card"
  },
  $n = ["innerHTML"],
  bn = $({
    __name: "FrensNoteCard",
    props: {
      text: {}
    },
    setup(v) {
      return (n, r) => (o(), d("div", hn, [r[0] || (r[0] = a("img", {
        src: te,
        alt: "Friends emoji",
        class: "emoji"
      }, null, -1)), a("div", {
        class: "text",
        innerHTML: n.text
      }, null, 8, $n)]))
    }
  }),
  kn = h(bn, [
    ["__scopeId", "data-v-0235c88a"]
  ]),
  yn = {
    class: "pages-frens-points-section"
  },
  wn = {
    class: "title"
  },
  Cn = {
    class: "balance-card"
  },
  In = {
    class: "inner"
  },
  An = {
    class: "points"
  },
  Un = {
    class: "description"
  },
  Bn = $({
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
      emit: n
    }) {
      const r = v,
        t = n,
        c = se(),
        p = U(!1),
        g = async () => {
          p.value = !0;
          const s = performance.now(),
            b = await r.claimCallback();
          if (b.err) {
            p.value = !1;
            return
          }
          const w = performance.now() - s;
          w < 2e3 && await new Promise(P => setTimeout(P, 1e3 - w)), p.value = !1, t("ui:claimed", b.data)
        }, f = C(() => {
          if (r.canClaim) return i("frens.points.ready_to_claim");
          if (!c.ms100ticker.value || !r.canClaimAt) return;
          const s = be(r.canClaimAt - c.ms100ticker.value, "letters");
          return i("base.claim_next_in", {
            time: s
          })
        });
      return (s, b) => {
        const w = M,
          P = O,
          x = Ke,
          H = kn;
        return o(), d("div", yn, [l(w, {
          icon: "bp-logo-circle",
          class: "icons"
        }), a("div", wn, u(("t" in s ? s.t : e(i))("frens.points.title")), 1), a("div", Cn, [l(P, {
          name: "logo",
          class: "icon"
        }), a("div", In, [a("div", An, u(`${("formatBp"in s?s.formatBp:e(V))(s.amountForClaim)} BP`), 1), a("div", Un, u(e(f)), 1)]), l(x, {
          label: ("t" in s ? s.t : e(i))("base.claim"),
          "can-claim": s.canClaim,
          "claim-fn": g,
          class: "claim-pill"
        }, null, 8, ["label", "can-claim"])]), l(H, {
          text: ("t" in s ? s.t : e(i))("frens.points.note_text", {
            percentFromFriends: `${s.percentFromFriends}%`,
            percentFromFriendsOfFriends: `+ ${s.percentFromFriendsOfFriends}%`
          }),
          class: "note-card"
        }, null, 8, ["text"])])
      }
    }
  }),
  Tn = h(Bn, [
    ["__scopeId", "data-v-3f77081e"]
  ]),
  Pn = {
    class: "pages-frens-list-item"
  },
  Sn = {
    class: "avatar"
  },
  On = {
    class: "letter"
  },
  Nn = ["src"],
  Kn = {
    class: "details"
  },
  Wn = {
    class: "username"
  },
  xn = {
    class: "frens-count-compose"
  },
  Hn = {
    class: "counter"
  },
  Dn = {
    key: 0,
    class: "balance"
  },
  Rn = $({
    __name: "FrensListItem",
    props: {
      fren: {}
    },
    setup(v) {
      return (n, r) => {
        const t = O,
          c = L,
          p = ke("img-loader");
        return o(), d("div", Pn, [a("div", Sn, [a("div", On, u(n.fren.letterAvatar), 1), n.fren.avatarUrl ? ye((o(), d("img", {
          key: 0,
          src: n.fren.avatarUrl,
          alt: "Avatar"
        }, null, 8, Nn)), [
          [p]
        ]) : R("", !0)]), a("div", Kn, [a("div", Wn, u(n.fren.username), 1), a("div", xn, [l(t, {
          name: "users",
          class: "icon"
        }), a("div", Hn, u(n.fren.totalFrens > 0 ? "+ " : "") + u(n.fren.totalFrens), 1)])]), n.fren.farmBalance ? (o(), d("div", Dn, u(("formatBp" in n ? n.formatBp : e(V))(n.fren.farmBalance)) + " BP", 1)) : (o(), y(c, {
          key: 1,
          class: "skeleton"
        }))])
      }
    }
  }),
  Vn = h(Rn, [
    ["__scopeId", "data-v-5f3d3da2"]
  ]),
  Ln = {
    class: "pages-frens-referral-modal"
  },
  Mn = {
    class: "title"
  },
  jn = {
    class: "list"
  },
  zn = $({
    __name: "FrensReferralModal",
    props: {
      frens: {}
    },
    emits: ["close"],
    setup(v, {
      emit: n
    }) {
      const r = n;
      return we().initHandler(() => r("close"), "frens-referral-modal"), (t, c) => {
        const p = Vn,
          g = He;
        return o(), y(g, null, {
          default: B(() => [a("div", Ln, [a("div", Mn, u(("t" in t ? t.t : e(i))("frens.referrals.title")), 1), a("div", jn, [(o(!0), d(T, null, S(t.frens, f => (o(), y(p, {
            key: f.username,
            fren: f
          }, null, 8, ["fren"]))), 128))])])]),
          _: 1
        })
      }
    }
  }),
  En = h(zn, [
    ["__scopeId", "data-v-907d8ddc"]
  ]),
  qn = {
    class: "pages-frens"
  },
  Gn = $({
    __name: "Frens",
    setup(v) {
      const n = se(),
        r = Q(),
        t = U(),
        c = U(),
        p = U();
      let g;
      const f = () => {
          g && (clearInterval(g), g = void 0)
        },
        s = U(!1),
        b = U(!1),
        w = async () => Y(await A.getFrens({
          pageSize: 1e3
        })), P = async () => {
          const _ = await A.getFrensUsing();
          if (!ee(_)) return _;
          if (!_.data.enableNewBalance) return W({
            frensUsing: _.data,
            walletFrensBalance: void 0,
            enableNewBalance: !1
          });
          const F = await A.getWalletFrensBalance();
          return ee(F) ? W({
            frensUsing: _.data,
            walletFrensBalance: F.data,
            enableNewBalance: !0
          }) : F
        }, x = async () => Y(await A.getFrensTradingUsing()), H = _ => {
          f();
          const m = n.getCurrentTimestamp();
          if (m && _.frensUsing.canClaimAt) {
            const F = _.frensUsing.canClaimAt - m;
            F > 0 && (g = setTimeout(I.exec, F))
          }
          c.value = _
        }, ae = async () => {
          if (!c.value) throw Ue("Frens data is not loaded");
          if (!c.value.enableNewBalance) {
            const F = await A.claimFrens();
            return F.err ? F : (I.exec(), W(F.data.claimBalance))
          }
          const m = await A.claimWalletFrensBalance();
          return m.err ? m : (I.exec(), W(m.data.amount))
        }, ie = _ => {
          Be().makeConfetti();
          const m = V(_);
          Te().success(i("base.you_got_bp", {
            bp: m
          })), Pe().friendsInvite.frensClaimed(_), setTimeout(() => {
            I.exec(), Q().update()
          }, 5e3)
        }, j = D(w, _ => t.value = _, 3e4), I = D(P, H, 1e4), z = D(x, _ => p.value = _, 1e4), E = C(() => {
          var m;
          if (!r.points) return;
          const _ = r.pointSymbols.value.ton;
          return _ ? {
            tonAmount: _.balance.value,
            usdAmount: (m = _.fiatValue.USD) == null ? void 0 : m.value
          } : {
            tonAmount: new X(0),
            usdAmount: new X(0)
          }
        }), ce = C(() => [{
          key: "ton",
          label: i("frens.tab.ton")
        }, {
          key: "points",
          label: i("frens.tab.points")
        }]), N = C(() => {
          if (c.value) return c.value.enableNewBalance ? {
            amountForClaim: c.value.walletFrensBalance.amount,
            canClaim: c.value.walletFrensBalance.canClaim,
            canClaimAt: c.value.walletFrensBalance.canClaimAt
          } : {
            amountForClaim: c.value.frensUsing.amountForClaim,
            canClaim: c.value.frensUsing.canClaim,
            canClaimAt: c.value.frensUsing.canClaimAt
          }
        });
      return (async () => {
        await Promise.all([j.exec(), I.exec(), z.exec()])
      })(), Ce(() => {
        j.destroy(), I.destroy(), z.destroy(), f()
      }), (_, m) => {
        const F = tn,
          le = _n,
          q = Fn,
          de = Tn,
          me = We,
          _e = O,
          ue = Se,
          fe = xe,
          pe = En,
          ve = De,
          ge = Re;
        return o(), d("div", qn, [e(t) && e(c) && e(p) && e(N) ? (o(), d(T, {
          key: 0
        }, [e(t).frens.length === 0 ? (o(), y(F, {
          key: 0,
          "frens-using": e(c).frensUsing,
          "frens-trading-using": e(p)
        }, null, 8, ["frens-using", "frens-trading-using"])) : (o(), y(me, {
          key: 1,
          tabs: e(ce),
          class: "tabs"
        }, {
          ton: B(() => {
            var k, G;
            return [l(le, {
              "frens-trading": e(p),
              "ton-amount": (k = e(E)) == null ? void 0 : k.tonAmount,
              "usd-amount": (G = e(E)) == null ? void 0 : G.usdAmount
            }, null, 8, ["frens-trading", "ton-amount", "usd-amount"]), l(q, {
              "used-invitation": e(c).frensUsing.usedInvitation,
              "onOpen:referral": m[0] || (m[0] = et => b.value = !0)
            }, null, 8, ["used-invitation"])]
          }),
          points: B(() => [l(de, {
            "amount-for-claim": e(N).amountForClaim,
            "can-claim": e(N).canClaim,
            "can-claim-at": e(N).canClaimAt,
            "percent-from-friends": e(c).frensUsing.percentFromFriends,
            "percent-from-friends-of-friends": e(c).frensUsing.percentFromFriendsOfFriends,
            "claim-callback": ae,
            "onUi:claimed": m[1] || (m[1] = k => ie(k))
          }, null, 8, ["amount-for-claim", "can-claim", "can-claim-at", "percent-from-friends", "percent-from-friends-of-friends"]), l(q, {
            "used-invitation": e(c).frensUsing.usedInvitation,
            "onOpen:referral": m[2] || (m[2] = k => b.value = !0)
          }, null, 8, ["used-invitation"])]),
          _: 1
        }, 8, ["tabs"])), l(fe, null, {
          default: B(() => [l(ue, {
            label: ("t" in _ ? _.t : e(i))("frens.base.invite"),
            fill: "",
            size: e(Ie).LARGE,
            onClick: m[3] || (m[3] = k => s.value = !0)
          }, {
            left: B(() => [l(_e, {
              name: "users",
              class: "button-icon"
            })]),
            _: 1
          }, 8, ["label", "size"])]),
          _: 1
        }), e(b) ? (o(), y(pe, {
          key: 2,
          frens: e(t).frens,
          onClose: m[4] || (m[4] = k => b.value = !1)
        }, null, 8, ["frens"])) : R("", !0), l(ve, {
          modelValue: e(s),
          "onUpdate:modelValue": m[5] || (m[5] = k => Ae(s) ? s.value = k : null),
          "referral-token": e(c).frensUsing.referralToken,
          qr: ""
        }, null, 8, ["modelValue", "referral-token"])], 64)) : (o(), y(ge, {
          key: 1
        }))])
      }
    }
  }),
  Zn = h(Gn, [
    ["__scopeId", "data-v-8ff8d78a"]
  ]),
  Jn = {},
  Qn = {
    class: "frens-page page"
  };

function Xn(v, n) {
  const r = Zn;
  return o(), d("div", Qn, [l(r)])
}
const mt = h(Jn, [
  ["render", Xn],
  ["__scopeId", "data-v-5a91f047"]
]);
export {
  mt as
  default
};