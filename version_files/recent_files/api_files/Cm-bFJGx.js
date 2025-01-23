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
  D,
  E as J,
  G as y,
  H as B,
  m as he,
  I as be,
  J as se,
  K as U,
  L as $e,
  M as V,
  N as ke,
  w as ye,
  O as Q,
  P as we,
  Q as Ce,
  R,
  T as X,
  U as Ie,
  V as Ae,
  p as Ue,
  W as Be,
  X as A,
  Y as W,
  Z as Te,
  $ as Pe,
  a0 as Se,
  x as Oe,
  a1 as Y,
  a2 as ee
} from "./1IBRWEJd.js";
import {
  _ as L
} from "./3uhcJPaW.js";
import {
  _ as Ne
} from "./CwrPUepX.js";
import {
  _ as Ke
} from "./B1EooiUi.js";
import {
  _ as We
} from "./Dp0Sd2_u.js";
import {
  _ as xe
} from "./A7a2uTYo.js";
import {
  _ as He
} from "./CbbJ0lG1.js";
import {
  _ as Re
} from "./CF-LOVRV.js";
import {
  u as De
} from "./D7RaRiPG.js";
import {
  _ as Ve
} from "./BZDX6LAZ.js";
import {
  _ as Le
} from "./Cqscaa7U.js";
const Me = {
    class: "pages-frens-icons"
  },
  je = $({
    __name: "FrensHeadingIcons",
    props: {
      icon: {}
    },
    setup(v) {
      return (n, r) => {
        const t = O;
        return o(), d("div", Me, [r[0] || (r[0] = a("img", {
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
  M = h(je, [
    ["__scopeId", "data-v-54907da8"]
  ]),
  ze = {
    class: "title"
  },
  Ee = {
    class: "value"
  },
  qe = {
    class: "text"
  },
  Ge = $({
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
        }, [a("div", ze, u(f.title), 1), a("div", Ee, u(f.value), 1), a("div", qe, [(o(!0), d(T, null, S(f.text, s => (o(), d("span", {
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
  oe = h(Ge, [
    ["__scopeId", "data-v-e549e0de"]
  ]),
  Ze = {
    class: "content"
  },
  Je = {
    class: "title"
  },
  Qe = {
    class: "subtitle"
  },
  Xe = $({
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
        }, null, -1)), a("div", Ze, [a("div", Je, u(("t" in r ? r.t : e(i))("frens.ton.how_it_works.title")), 1), a("div", Qe, u(("t" in r ? r.t : e(i))("frens.ton.how_it_works.subtitle")), 1)]), l(c, {
          name: "chevron-right",
          class: "icon"
        })])
      }
    }
  }),
  re = h(Xe, [
    ["__scopeId", "data-v-8cb31b17"]
  ]),
  Ye = {
    class: "pages-frens-empty-state"
  },
  en = {
    class: "sections"
  },
  nn = {
    class: "title"
  },
  tn = {
    key: 0,
    class: "subtitle"
  },
  sn = $({
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
        return o(), d("div", Ye, [a("div", en, [(o(!0), d(T, null, S(e(r), s => (o(), d("div", {
          key: s.title,
          class: "section"
        }, [l(p, {
          icon: s.icon,
          class: "icons"
        }, null, 8, ["icon"]), a("div", nn, u(s.title), 1), s.subtitle ? (o(), d("div", tn, u(s.subtitle), 1)) : D("", !0), l(g, {
          class: "cards",
          type: s.type,
          "percent-from-friends": s.percentFromFriends,
          "percent-from-friends-of-friends": s.percentFromFriendsOfFriends
        }, null, 8, ["type", "percent-from-friends", "percent-from-friends-of-friends"])]))), 128))]), l(f)])
      }
    }
  }),
  on = h(sn, [
    ["__scopeId", "data-v-5b2c2224"]
  ]),
  rn = {
    class: "pages-frens-ton-section"
  },
  an = {
    key: 0,
    class: "with-balance"
  },
  cn = {
    class: "title"
  },
  ln = {
    key: 0,
    class: "balance-ton"
  },
  dn = {
    key: 2,
    class: "balance-usd"
  },
  mn = {
    key: 1,
    class: "empty"
  },
  _n = {
    class: "title"
  },
  un = $({
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
        const p = Ne,
          g = L,
          f = be,
          s = re,
          b = M,
          w = oe;
        return o(), d("div", rn, [e(r) ? (o(), d("div", an, [l(p, {
          class: "background"
        }), a("div", cn, u(("t" in t ? t.t : e(i))("frens.ton.title")), 1), t.tonAmount ? (o(), d("div", ln, u(("getWalletAmount" in t ? t.getWalletAmount : e(J))(t.tonAmount, "TON").defaultWithSymbol), 1)) : (o(), y(g, {
          key: 1,
          class: "balance-ton-skeleton"
        })), t.usdAmount ? (o(), d("div", dn, u(("getWalletAmount" in t ? t.getWalletAmount : e(J))(t.usdAmount, "USD").defaultWithSymbol), 1)) : (o(), y(g, {
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
        })])) : (o(), d("div", mn, [l(b, {
          icon: "ton-logo-ref",
          class: "icons"
        }), a("div", _n, u(("t" in t ? t.t : e(i))("frens.ton.zero_earn.title")), 1), l(w, {
          type: "ton",
          "percent-from-friends": t.frensTrading.percentFromFriends,
          "percent-from-friends-of-friends": t.frensTrading.percentFromFriendsOfFriends
        }, null, 8, ["percent-from-friends", "percent-from-friends-of-friends"]), l(s, {
          class: "how-it-works"
        })]))])
      }
    }
  }),
  fn = h(un, [
    ["__scopeId", "data-v-7de774b9"]
  ]),
  pn = {
    class: "pages-frens-referrals-section"
  },
  vn = {
    class: "card"
  },
  gn = {
    class: "title"
  },
  Fn = {
    class: "count"
  },
  hn = $({
    __name: "FrensReferralsSection",
    props: {
      usedInvitation: {}
    },
    emits: ["open:referral"],
    setup(v) {
      return (n, r) => {
        const t = Ke;
        return o(), d("div", pn, [l(t, {
          label: ("t" in n ? n.t : e(i))("frens.referrals.title"),
          "click-callback": () => n.$emit("open:referral")
        }, null, 8, ["label", "click-callback"]), a("div", vn, [r[0] || (r[0] = a("img", {
          src: ne,
          alt: "Friends emoji"
        }, null, -1)), a("div", gn, u(("t" in n ? n.t : e(i))("frens.referrals.invited_title")), 1), a("div", Fn, u(n.usedInvitation), 1)])])
      }
    }
  }),
  bn = h(hn, [
    ["__scopeId", "data-v-435c4437"]
  ]),
  $n = {
    class: "pages-frens-note-card"
  },
  kn = ["innerHTML"],
  yn = $({
    __name: "FrensNoteCard",
    props: {
      text: {}
    },
    setup(v) {
      return (n, r) => (o(), d("div", $n, [r[0] || (r[0] = a("img", {
        src: te,
        alt: "Friends emoji",
        class: "emoji"
      }, null, -1)), a("div", {
        class: "text",
        innerHTML: n.text
      }, null, 8, kn)]))
    }
  }),
  wn = h(yn, [
    ["__scopeId", "data-v-0235c88a"]
  ]),
  Cn = {
    class: "pages-frens-points-section"
  },
  In = {
    class: "title"
  },
  An = {
    class: "balance-card"
  },
  Un = {
    class: "inner"
  },
  Bn = {
    class: "points"
  },
  Tn = {
    class: "description"
  },
  Pn = $({
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
          const s = $e(r.canClaimAt - c.ms100ticker.value, "letters");
          return i("base.claim_next_in", {
            time: s
          })
        });
      return (s, b) => {
        const w = M,
          P = O,
          x = We,
          H = wn;
        return o(), d("div", Cn, [l(w, {
          icon: "bp-logo-circle",
          class: "icons"
        }), a("div", In, u(("t" in s ? s.t : e(i))("frens.points.title")), 1), a("div", An, [l(P, {
          name: "logo",
          class: "icon"
        }), a("div", Un, [a("div", Bn, u(`${("formatBp"in s?s.formatBp:e(V))(s.amountForClaim)} BP`), 1), a("div", Tn, u(e(f)), 1)]), l(x, {
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
  Sn = h(Pn, [
    ["__scopeId", "data-v-3f77081e"]
  ]),
  On = {
    class: "pages-frens-list-item"
  },
  Nn = {
    class: "avatar"
  },
  Kn = {
    class: "letter"
  },
  Wn = ["src"],
  xn = {
    class: "details"
  },
  Hn = {
    class: "username"
  },
  Rn = {
    class: "frens-count-compose"
  },
  Dn = {
    class: "counter"
  },
  Vn = {
    key: 0,
    class: "balance"
  },
  Ln = $({
    __name: "FrensListItem",
    props: {
      fren: {}
    },
    setup(v) {
      return (n, r) => {
        const t = O,
          c = L,
          p = ke("img-loader");
        return o(), d("div", On, [a("div", Nn, [a("div", Kn, u(n.fren.letterAvatar), 1), n.fren.avatarUrl ? ye((o(), d("img", {
          key: 0,
          src: n.fren.avatarUrl,
          alt: "Avatar"
        }, null, 8, Wn)), [
          [p]
        ]) : D("", !0)]), a("div", xn, [a("div", Hn, u(n.fren.username), 1), a("div", Rn, [l(t, {
          name: "users",
          class: "icon"
        }), a("div", Dn, u(n.fren.totalFrens > 0 ? "+ " : "") + u(n.fren.totalFrens), 1)])]), n.fren.farmBalance ? (o(), d("div", Vn, u(("formatBp" in n ? n.formatBp : e(V))(n.fren.farmBalance)) + " BP", 1)) : (o(), y(c, {
          key: 1,
          class: "skeleton"
        }))])
      }
    }
  }),
  Mn = h(Ln, [
    ["__scopeId", "data-v-5f3d3da2"]
  ]),
  jn = {
    class: "pages-frens-referral-modal"
  },
  zn = {
    class: "title"
  },
  En = {
    class: "list"
  },
  qn = $({
    __name: "FrensReferralModal",
    props: {
      frens: {}
    },
    emits: ["close"],
    setup(v, {
      emit: n
    }) {
      const r = n;
      return De(() => {
        r("close")
      }), (t, c) => {
        const p = Mn,
          g = Re;
        return o(), y(g, null, {
          default: B(() => [a("div", jn, [a("div", zn, u(("t" in t ? t.t : e(i))("frens.referrals.title")), 1), a("div", En, [(o(!0), d(T, null, S(t.frens, f => (o(), y(p, {
            key: f.username,
            fren: f
          }, null, 8, ["fren"]))), 128))])])]),
          _: 1
        })
      }
    }
  }),
  Gn = h(qn, [
    ["__scopeId", "data-v-b395704b"]
  ]),
  Zn = {
    class: "pages-frens"
  },
  Jn = $({
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
        b = U(!1);
      we(b, m => {
        m || (Ce().meta.back = void 0)
      });
      const w = async () => Y(await A.getFrens({
        pageSize: 1e3
      })), P = async () => {
        const m = await A.getFrensUsing();
        if (!ee(m)) return m;
        if (!m.data.enableNewBalance) return W({
          frensUsing: m.data,
          walletFrensBalance: void 0,
          enableNewBalance: !1
        });
        const F = await A.getWalletFrensBalance();
        return ee(F) ? W({
          frensUsing: m.data,
          walletFrensBalance: F.data,
          enableNewBalance: !0
        }) : F
      }, x = async () => Y(await A.getFrensTradingUsing()), H = m => {
        f();
        const _ = n.getCurrentTimestamp();
        if (_ && m.frensUsing.canClaimAt) {
          const F = m.frensUsing.canClaimAt - _;
          F > 0 && (g = setTimeout(I.exec, F))
        }
        c.value = m
      }, ae = async () => {
        if (!c.value) throw Be("Frens data is not loaded");
        if (!c.value.enableNewBalance) {
          const F = await A.claimFrens();
          return F.err ? F : (I.exec(), W(F.data.claimBalance))
        }
        const _ = await A.claimWalletFrensBalance();
        return _.err ? _ : (I.exec(), W(_.data.amount))
      }, ie = m => {
        Te().makeConfetti();
        const _ = V(m);
        Pe().success(i("base.you_got_bp", {
          bp: _
        })), Se().friendsInvite.frensClaimed(m), setTimeout(() => {
          I.exec(), Q().update()
        }, 5e3)
      }, j = R(w, m => t.value = m, 3e4), I = R(P, H, 1e4), z = R(x, m => p.value = m, 1e4), E = C(() => {
        var _;
        if (!r.points) return;
        const m = r.pointSymbols.value.ton;
        return m ? {
          tonAmount: m.balance.value,
          usdAmount: (_ = m.fiatValue.USD) == null ? void 0 : _.value
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
      })(), Ie(() => {
        j.destroy(), I.destroy(), z.destroy(), f()
      }), (m, _) => {
        const F = on,
          le = fn,
          q = bn,
          de = Sn,
          me = xe,
          _e = O,
          ue = Oe,
          fe = He,
          pe = Gn,
          ve = Ve,
          ge = Le;
        return o(), d("div", Zn, [e(t) && e(c) && e(p) && e(N) ? (o(), d(T, {
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
              "onOpen:referral": _[0] || (_[0] = tt => b.value = !0)
            }, null, 8, ["used-invitation"])]
          }),
          points: B(() => [l(de, {
            "amount-for-claim": e(N).amountForClaim,
            "can-claim": e(N).canClaim,
            "can-claim-at": e(N).canClaimAt,
            "percent-from-friends": e(c).frensUsing.percentFromFriends,
            "percent-from-friends-of-friends": e(c).frensUsing.percentFromFriendsOfFriends,
            "claim-callback": ae,
            "onUi:claimed": _[1] || (_[1] = k => ie(k))
          }, null, 8, ["amount-for-claim", "can-claim", "can-claim-at", "percent-from-friends", "percent-from-friends-of-friends"]), l(q, {
            "used-invitation": e(c).frensUsing.usedInvitation,
            "onOpen:referral": _[2] || (_[2] = k => b.value = !0)
          }, null, 8, ["used-invitation"])]),
          _: 1
        }, 8, ["tabs"])), l(fe, null, {
          default: B(() => [l(ue, {
            label: ("t" in m ? m.t : e(i))("frens.base.invite"),
            fill: "",
            size: e(Ae).LARGE,
            onClick: _[3] || (_[3] = k => s.value = !0)
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
          onClose: _[4] || (_[4] = k => b.value = !1)
        }, null, 8, ["frens"])) : D("", !0), l(ve, {
          modelValue: e(s),
          "onUpdate:modelValue": _[5] || (_[5] = k => Ue(s) ? s.value = k : null),
          "referral-token": e(c).frensUsing.referralToken,
          qr: ""
        }, null, 8, ["modelValue", "referral-token"])], 64)) : (o(), y(ge, {
          key: 1
        }))])
      }
    }
  }),
  Qn = h(Jn, [
    ["__scopeId", "data-v-b6a521f8"]
  ]),
  Xn = {},
  Yn = {
    class: "frens-page page"
  };

function et(v, n) {
  const r = Qn;
  return o(), d("div", Yn, [l(r)])
}
const ft = h(Xn, [
  ["render", et],
  ["__scopeId", "data-v-5a91f047"]
]);
export {
  ft as
  default
};