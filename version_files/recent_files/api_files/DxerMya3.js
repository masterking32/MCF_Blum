import {
  d as B,
  y as x,
  j as M,
  z as r,
  o as s,
  c as a,
  a as t,
  A as S,
  e,
  C as T,
  t as _,
  F as I,
  q as K,
  D as G,
  f as C,
  E as O,
  G as w,
  g as W,
  H as Y,
  b as F,
  I as J,
  m as Q,
  J as P,
  K as X,
  n as ee,
  L as te,
  M as se,
  N as ne,
  O as ie,
  P as ae,
  w as re,
  Q as z,
  _ as oe,
  R as q,
  T as ce,
  U as le,
  V as me,
  p as de,
  W as ue,
  X as U,
  Y as _e,
  Z as fe,
  $ as pe,
  x as ve,
  a0 as H
} from "./Doz8XXSF.js";
import {
  _ as Fe
} from "./CwNO_oov.js";
import {
  _ as ge
} from "./hzm3Cl5N.js";
import {
  _ as ye
} from "./Ca5vGtTs.js";
import {
  _ as he
} from "./CbdXbOcE.js";
import {
  _ as ke
} from "./Bk2rUrXC.js";
import "./ChQsFHN6.js";
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
  Pe = {
    class: "chain"
  },
  Be = {
    class: "content-container"
  },
  Le = {
    class: "content-title"
  },
  xe = ["innerHTML"],
  Ae = B({
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
        f = M(() => [{
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
        src: S,
        alt: "Friends emoji",
        class: "emoji"
      }, null, -1)), t("div", {
        class: "title",
        innerHTML: ("t" in n ? n.t : e(r))("frens.empty.title")
      }, null, 8, Ce), e(l) ? (s(), a("img", we)) : T("", !0)]), t("div", Te, [t("div", Ie, _(("t" in n ? n.t : e(r))("frens.empty.how.title")), 1), t("div", Pe, [(s(!0), a(I, null, K(e(f), (v, g) => (s(), a("div", {
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
      })], -1)), t("div", Be, [t("div", Le, _(v.title), 1), t("div", {
        class: "content-subtitle",
        innerHTML: v.subtitle
      }, null, 8, xe)])]))), 128))])])]))
    }
  }),
  Ne = C(Ae, [
    ["__scopeId", "data-v-fc337d3d"]
  ]),
  Ue = {
    class: "pages-frens-list-heading"
  },
  qe = {
    class: "heading"
  },
  He = {
    class: "title"
  },
  Me = {
    key: 0,
    class: "claim-zone-loader"
  },
  Se = {
    class: "calculating"
  },
  Ke = {
    key: 1,
    class: "claim-zone"
  },
  Oe = {
    class: "claim-balance"
  },
  ze = {
    key: 0,
    src: te,
    alt: "Pokras art",
    class: "pokras-art1",
    width: "40",
    height: "80"
  },
  Ee = {
    key: 1,
    src: se,
    alt: "Pokras art",
    class: "pokras-art2",
    width: "44",
    height: "81"
  },
  Ve = {
    class: "disclaimer"
  },
  Re = ["innerHTML"],
  je = B({
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
        }, y = M(() => {
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
              const c = Y(l.canClaimAt - m.ms100ticker.value, "letters");
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
          h = ie;
        return s(), a("div", Ue, [t("div", qe, [c[1] || (c[1] = t("img", {
          src: S,
          alt: "Friends emoji"
        }, null, -1)), t("div", He, _(("t" in u ? u.t : e(r))("frens.list.title")), 1)]), e(g) && i.amountForClaim.isZero() ? (s(), a("div", Me, [F(b, {
          name: "animations/Hourglass",
          size: 36
        }), t("div", Se, _(("t" in u ? u.t : e(r))("base.calculating")), 1)])) : (s(), a("div", Ke, [t("div", Oe, [c[2] || (c[2] = t("img", {
          src: J,
          alt: "Blum logo"
        }, null, -1)), F($, {
          value: i.amountForClaim
        }, null, 8, ["value"])]), t("button", {
          class: ee(["claim-button", [`is-${(N=e(y))==null?void 0:N.type}`]]),
          onClick: c[0] || (c[0] = p => {
            var k;
            return ((k = e(y)) == null ? void 0 : k.onClick) && e(y).onClick()
          })
        }, [(o = e(y)) != null && o.text ? (s(), a(I, {
          key: 0
        }, [Q(_(e(y).text), 1)], 64)) : (s(), P(h, {
          key: 1,
          size: 16,
          type: e(X).DARK
        }, null, 8, ["type"]))], 2), e(n) ? (s(), a("img", ze)) : T("", !0), e(n) ? (s(), a("img", Ee)) : T("", !0)])), t("div", Ve, [t("span", null, _(("t" in u ? u.t : e(r))("frens.list.disclaimer.score", {
          n1: i.percentFromFriends,
          n2: i.percentFromFriendsOfFriends
        })), 1), c[3] || (c[3] = t("br", null, null, -1)), t("span", {
          innerHTML: ("t" in u ? u.t : e(r))("frens.list.disclaimer.pp")
        }, null, 8, Re)])])
      }
    }
  }),
  De = C(je, [
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
  Ye = ["src"],
  Je = {
    class: "details"
  },
  Qe = {
    class: "username"
  },
  Xe = {
    class: "frens-count-compose"
  },
  et = {
    class: "counter"
  },
  tt = {
    key: 0,
    class: "balance"
  },
  st = B({
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
        }, null, 8, Ye)), [
          [m]
        ]) : T("", !0)]), t("div", Je, [t("div", Qe, _(i.fren.username), 1), t("div", Xe, [F(f, {
          name: "users",
          class: "icon"
        }), t("div", et, _(i.fren.totalFrens > 0 ? "+ " : "") + _(i.fren.totalFrens), 1)])]), i.fren.farmBalance ? (s(), a("div", tt, _(("formatBp" in d ? d.formatBp : e(z))(i.fren.farmBalance)) + " BP", 1)) : (s(), P(n, {
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
  ot = B({
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
        return s(), a("div", it, [t("div", at, _(i.usedInvitation) + " " + _(("t" in d ? d.t : e(r))("base.n.frens", i.usedInvitation)), 1), t("div", rt, [(s(!0), a(I, null, K(i.frens, n => (s(), P(f, {
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
  dt = B({
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
        A = async () => H(await U.getFrens({
          pageSize: 1e3
        })), y = async () => H(await U.getFrensUsing()), u = o => {
          v();
          const p = l.getCurrentTimestamp();
          if (p && o.canClaimAt) {
            const k = o.canClaimAt - p;
            k > 0 && (m = setTimeout(h.exec, k))
          }
          n.value = o
        }, c = async () => {
          const o = await U.claimFrens();
          return o.err || h.exec(), o
        }, b = o => {
          x().makeConfetti();
          const p = z(o.claimBalance);
          _e().success(r("base.you_got_bp", {
            bp: p
          })), fe().friendsInvite.frensClaimed(o.claimBalance), setTimeout(() => {
            h.exec(), pe().updateBalance()
          }, 5e3)
        }, $ = q(A, o => f.value = o, 3e4), h = q(y, u, 1e4);
      return (async () => {
        await Promise.all([$.exec(), h.exec()])
      })(), ce(() => {
        $.destroy(), h.destroy(), v()
      }), (o, p) => {
        const k = Ne,
          E = De,
          V = ct,
          R = ve,
          j = ye,
          D = he,
          Z = ke;
        return s(), a("div", lt, [e(f) && e(n) ? (s(), a(I, {
          key: 0
        }, [e(f).frens.length === 0 ? (s(), P(k, {
          key: 0,
          "percent-from-friends": e(n).percentFromFriends,
          "percent-from-friends-of-friends": e(n).percentFromFriendsOfFriends
        }, null, 8, ["percent-from-friends", "percent-from-friends-of-friends"])) : (s(), a(I, {
          key: 1
        }, [F(E, {
          "amount-for-claim": e(n).amountForClaim,
          "can-claim": e(n).canClaim,
          "can-claim-at": e(n).canClaimAt,
          "percent-from-friends": e(n).percentFromFriends,
          "percent-from-friends-of-friends": e(n).percentFromFriendsOfFriends,
          "claim-callback": c,
          class: "list-heading",
          "onUi:claimed": p[0] || (p[0] = L => b(L))
        }, null, 8, ["amount-for-claim", "can-claim", "can-claim-at", "percent-from-friends", "percent-from-friends-of-friends"]), F(V, {
          frens: e(f).frens,
          "used-invitation": e(n).usedInvitation
        }, null, 8, ["frens", "used-invitation"])], 64)), F(j, null, {
          default: le(() => [F(R, {
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
        }, null, 8, ["modelValue", "referral-token"]), e(d) ? (s(), a("img", mt)) : T("", !0)], 64)) : (s(), P(Z, {
          key: 1
        }))])
      }
    }
  }),
  ut = C(dt, [
    ["__scopeId", "data-v-310fede9"]
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