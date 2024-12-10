import {
  d as P,
  u as x,
  F as S,
  f as r,
  a as s,
  c as a,
  b as t,
  a0 as K,
  e,
  g as T,
  t as _,
  W as I,
  X as M,
  a1 as G,
  j as C,
  a2 as O,
  r as w,
  O as W,
  a3 as X,
  k as F,
  p as Y,
  h as J,
  m as B,
  a4 as Q,
  n as ee,
  a5 as te,
  a6 as se,
  A as ne,
  a7 as ie,
  a8 as ae,
  w as re,
  q as E,
  N as oe,
  a9 as U,
  o as ce,
  x as le,
  B as me,
  V as de,
  aa as ue,
  K as q,
  G as _e,
  ab as fe,
  E as pe,
  C as ve,
  ac as H
} from "./4q655kMI.js";
import {
  _ as Fe
} from "./2l1x0vgO.js";
import {
  _ as ge
} from "./D6ooDtHS.js";
import {
  _ as he
} from "./SxfgLXAP.js";
import {
  _ as ke
} from "./BoYK_Sqj.js";
import {
  _ as ye
} from "./BnJp0EaA.js";
import "./D137lrSf.js";
const be = {
    class: "pages-frens-empty-state"
  },
  $e = {
    class: "heading"
  },
  Ce = ["innerHTML"],
  we = {
    key: 0,
    src: G,
    alt: "",
    class: "pokras-image"
  },
  Te = {
    class: "how-it-works"
  },
  Ie = {
    class: "title"
  },
  Be = {
    class: "chain"
  },
  Pe = {
    class: "content-container"
  },
  Le = {
    class: "content-title"
  },
  xe = ["innerHTML"],
  Ae = P({
    __name: "FrensEmptyState",
    props: {
      percentFromFriends: {
        type: Number,
        required: !0
      },
      percentFromFriendsOfFriends: {
        type: Number,
        required: !0
      }
    },
    setup(i) {
      const d = i,
        l = x().internal.isPokrasTheme,
        f = S(() => [{
          title: r("frens.empty.how.1_title"),
          subtitle: r("frens.empty.how.1_subtitle")
        }, {
          title: r("frens.empty.how.2_title"),
          subtitle: r("frens.empty.how.2_subtitle")
        }, {
          title: r("frens.empty.how.3_title", {
            n: d.percentFromFriends
          }),
          subtitle: r("frens.empty.how.3_subtitle", {
            n: d.percentFromFriendsOfFriends
          })
        }]);
      return (n, m) => (s(), a("div", be, [t("div", $e, [m[0] || (m[0] = t("img", {
        src: K,
        alt: "Friends emoji",
        class: "emoji"
      }, null, -1)), t("div", {
        class: "title",
        innerHTML: ("t" in n ? n.t : e(r))("frens.empty.title")
      }, null, 8, Ce), e(l) ? (s(), a("img", we)) : T("", !0)]), t("div", Te, [t("div", Ie, _(("t" in n ? n.t : e(r))("frens.empty.how.title")), 1), t("div", Be, [(s(!0), a(I, null, M(e(f), (v, g) => (s(), a("div", {
        key: g,
        class: "chain-element"
      }, [m[1] || (m[1] = t("div", {
        class: "point-container"
      }, [t("div", {
        class: "stick"
      }), t("div", {
        class: "point"
      }), t("div", {
        class: "stick"
      })], -1)), t("div", Pe, [t("div", Le, _(v.title), 1), t("div", {
        class: "content-subtitle",
        innerHTML: v.subtitle
      }, null, 8, xe)])]))), 128))])])]))
    }
  }),
  Ne = C(Ae, [
    ["__scopeId", "data-v-fc337d3d"]
  ]),
  qe = {
    class: "pages-frens-list-heading"
  },
  Ue = {
    class: "heading"
  },
  He = {
    class: "title"
  },
  Se = {
    key: 0,
    class: "claim-zone-loader"
  },
  Ke = {
    class: "calculating"
  },
  Me = {
    key: 1,
    class: "claim-zone"
  },
  Oe = {
    class: "claim-balance"
  },
  Ee = {
    key: 0,
    src: te,
    alt: "Pokras art",
    class: "pokras-art1",
    width: "40",
    height: "80"
  },
  Ve = {
    key: 1,
    src: se,
    alt: "Pokras art",
    class: "pokras-art2",
    width: "44",
    height: "81"
  },
  ze = {
    class: "disclaimer"
  },
  je = ["innerHTML"],
  Re = P({
    __name: "FrensListHeading",
    props: {
      amountForClaim: {
        type: Object,
        required: !0
      },
      canClaim: {
        type: Boolean,
        required: !0
      },
      canClaimAt: {
        type: Number,
        default: void 0
      },
      percentFromFriends: {
        type: Number,
        required: !0
      },
      percentFromFriendsOfFriends: {
        type: Number,
        required: !0
      },
      claimCallback: {
        type: Function,
        required: !0
      }
    },
    emits: ["ui:claimed"],
    setup(i, {
      emit: d
    }) {
      const l = i,
        f = d,
        n = x().internal.isPokrasTheme,
        m = O(),
        v = w(!1),
        g = w(!1),
        A = async () => {
          v.value = !0;
          const u = performance.now(),
            c = await l.claimCallback();
          if (c.err) {
            v.value = !1;
            return
          }
          const b = performance.now() - u;
          b < 2e3 && await new Promise($ => setTimeout($, 1e3 - b)), v.value = !1, f("ui:claimed", c.data)
        }, h = S(() => {
          if (v.value) return {
            type: "loader"
          };
          if (l.canClaim) return {
            type: "active",
            text: r("base.claim"),
            onClick: A
          };
          if (!l.canClaim) return {
            type: "disabled",
            text: (() => {
              if (!m.ms100ticker.value) return r("base.claim");
              if (!l.canClaimAt) return l.amountForClaim.isZero() || W().warn("Claim button is disabled but no claim time is set"), r("base.claim");
              const c = X(l.canClaimAt - m.ms100ticker.value, "letters");
              return r("base.claim_in", {
                time: c
              })
            })()
          }
        });
      return (u, c) => {
        var N, o;
        const b = ne,
          $ = Fe,
          k = ie;
        return s(), a("div", qe, [t("div", Ue, [c[1] || (c[1] = t("img", {
          src: K,
          alt: "Friends emoji"
        }, null, -1)), t("div", He, _(("t" in u ? u.t : e(r))("frens.list.title")), 1)]), e(g) && i.amountForClaim.isZero() ? (s(), a("div", Se, [F(b, {
          name: "animations/Hourglass",
          size: 36
        }), t("div", Ke, _(("t" in u ? u.t : e(r))("base.calculating")), 1)])) : (s(), a("div", Me, [t("div", Oe, [c[2] || (c[2] = t("img", {
          src: Y,
          alt: "Blum logo"
        }, null, -1)), F($, {
          value: i.amountForClaim
        }, null, 8, ["value"])]), t("button", {
          class: ee(["claim-button", [`is-${(N=e(h))==null?void 0:N.type}`]]),
          onClick: c[0] || (c[0] = p => {
            var y;
            return ((y = e(h)) == null ? void 0 : y.onClick) && e(h).onClick()
          })
        }, [(o = e(h)) != null && o.text ? (s(), a(I, {
          key: 0
        }, [J(_(e(h).text), 1)], 64)) : (s(), B(k, {
          key: 1,
          size: 16,
          type: e(Q).DARK
        }, null, 8, ["type"]))], 2), e(n) ? (s(), a("img", Ee)) : T("", !0), e(n) ? (s(), a("img", Ve)) : T("", !0)])), t("div", ze, [t("span", null, _(("t" in u ? u.t : e(r))("frens.list.disclaimer.score", {
          n1: i.percentFromFriends,
          n2: i.percentFromFriendsOfFriends
        })), 1), c[3] || (c[3] = t("br", null, null, -1)), t("span", {
          innerHTML: ("t" in u ? u.t : e(r))("frens.list.disclaimer.pp")
        }, null, 8, je)])])
      }
    }
  }),
  De = C(Re, [
    ["__scopeId", "data-v-0728f74c"]
  ]),
  Ze = {
    class: "pages-frens-list-item"
  },
  Ge = {
    class: "avatar"
  },
  We = {
    class: "letter"
  },
  Xe = ["src"],
  Ye = {
    class: "details"
  },
  Je = {
    class: "username"
  },
  Qe = {
    class: "frens-count-compose"
  },
  et = {
    class: "counter"
  },
  tt = {
    key: 0,
    class: "balance"
  },
  st = P({
    __name: "FrensListItem",
    props: {
      fren: {
        type: Object,
        required: !0
      }
    },
    setup(i) {
      return (d, l) => {
        const f = oe,
          n = ge,
          m = ae("img-loader");
        return s(), a("div", Ze, [t("div", Ge, [t("div", We, _(i.fren.letterAvatar), 1), i.fren.avatarUrl ? re((s(), a("img", {
          key: 0,
          src: i.fren.avatarUrl,
          alt: "Avatar"
        }, null, 8, Xe)), [
          [m]
        ]) : T("", !0)]), t("div", Ye, [t("div", Je, _(i.fren.username), 1), t("div", Qe, [F(f, {
          name: "users",
          class: "icon"
        }), t("div", et, _(i.fren.totalFrens > 0 ? "+ " : "") + _(i.fren.totalFrens), 1)])]), i.fren.farmBalance ? (s(), a("div", tt, _(("formatBp" in d ? d.formatBp : e(E))(i.fren.farmBalance)) + " BP", 1)) : (s(), B(n, {
          key: 1,
          class: "skeleton"
        }))])
      }
    }
  }),
  nt = C(st, [
    ["__scopeId", "data-v-97259735"]
  ]),
  it = {
    class: "pages-frens-list"
  },
  at = {
    class: "counter"
  },
  rt = {
    class: "list"
  },
  ot = P({
    __name: "FrensList",
    props: {
      frens: {
        type: Array,
        required: !0
      },
      usedInvitation: {
        type: Number,
        required: !0
      }
    },
    setup(i) {
      return (d, l) => {
        const f = nt;
        return s(), a("div", it, [t("div", at, _(i.usedInvitation) + " " + _(("t" in d ? d.t : e(r))("base.n.frens", i.usedInvitation)), 1), t("div", rt, [(s(!0), a(I, null, M(i.frens, n => (s(), B(f, {
          key: n.username,
          fren: n
        }, null, 8, ["fren"]))), 128))])])
      }
    }
  }),
  ct = C(ot, [
    ["__scopeId", "data-v-f9a37e22"]
  ]),
  lt = {
    class: "pages-frens"
  },
  mt = {
    key: 2,
    src: ue,
    alt: "Pokras frens bg",
    class: "pokras-bg-image"
  },
  dt = P({
    __name: "Frens",
    setup(i) {
      const d = x().internal.isPokrasTheme,
        l = O(),
        f = w(),
        n = w();
      let m;
      const v = () => {
          m && (clearInterval(m), m = void 0)
        },
        g = w(!1),
        A = async () => H(await q.getFrens({
          pageSize: 1e3
        })), h = async () => H(await q.getFrensUsing()), u = o => {
          v();
          const p = l.getCurrentTimestamp();
          if (p && o.canClaimAt) {
            const y = o.canClaimAt - p;
            y > 0 && (m = setTimeout(k.exec, y))
          }
          n.value = o
        }, c = async () => {
          const o = await q.claimFrens();
          return o.err || k.exec(), o
        }, b = o => {
          x().makeConfetti();
          const p = E(o.claimBalance);
          _e().bottom.success(r("base.you_got_bp", {
            bp: p
          })), fe().friendsInvite.frensClaimed(o.claimBalance), setTimeout(() => {
            k.exec(), pe().updateBalance()
          }, 5e3)
        }, $ = U(A, o => f.value = o, 3e4), k = U(h, u, 1e4);
      return (async () => {
        await Promise.all([$.exec(), k.exec()])
      })(), ce(() => {
        $.destroy(), k.destroy(), v()
      }), (o, p) => {
        const y = Ne,
          V = De,
          z = ct,
          j = ve,
          R = he,
          D = ke,
          Z = ye;
        return s(), a("div", lt, [e(f) && e(n) ? (s(), a(I, {
          key: 0
        }, [e(f).frens.length === 0 ? (s(), B(y, {
          key: 0,
          "percent-from-friends": e(n).percentFromFriends,
          "percent-from-friends-of-friends": e(n).percentFromFriendsOfFriends
        }, null, 8, ["percent-from-friends", "percent-from-friends-of-friends"])) : (s(), a(I, {
          key: 1
        }, [F(V, {
          "amount-for-claim": e(n).amountForClaim,
          "can-claim": e(n).canClaim,
          "can-claim-at": e(n).canClaimAt,
          "percent-from-friends": e(n).percentFromFriends,
          "percent-from-friends-of-friends": e(n).percentFromFriendsOfFriends,
          "claim-callback": c,
          class: "list-heading",
          "onUi:claimed": p[0] || (p[0] = L => b(L))
        }, null, 8, ["amount-for-claim", "can-claim", "can-claim-at", "percent-from-friends", "percent-from-friends-of-friends"]), F(z, {
          frens: e(f).frens,
          "used-invitation": e(n).usedInvitation
        }, null, 8, ["frens", "used-invitation"])], 64)), F(R, null, {
          default: le(() => [F(j, {
            label: ("t" in o ? o.t : e(r))("frens.base.invite"),
            fill: "",
            size: e(me).LARGE,
            onClick: p[1] || (p[1] = L => g.value = !0)
          }, null, 8, ["label", "size"])]),
          _: 1
        }), F(D, {
          modelValue: e(g),
          "onUpdate:modelValue": p[2] || (p[2] = L => de(g) ? g.value = L : null),
          "referral-token": e(n).referralToken,
          qr: ""
        }, null, 8, ["modelValue", "referral-token"]), e(d) ? (s(), a("img", mt)) : T("", !0)], 64)) : (s(), B(Z, {
          key: 1
        }))])
      }
    }
  }),
  ut = C(dt, [
    ["__scopeId", "data-v-bc43e5c4"]
  ]),
  _t = {},
  ft = {
    class: "frens-page page"
  };

function pt(i, d) {
  const l = ut;
  return s(), a("div", ft, [F(l)])
}
const $t = C(_t, [
  ["render", pt],
  ["__scopeId", "data-v-5a91f047"]
]);
export {
  $t as
  default
};