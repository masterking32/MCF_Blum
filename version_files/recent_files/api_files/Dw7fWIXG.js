import {
  _ as Q
} from "./NNY6bzjK.js";
import {
  _ as S
} from "./BpsKWmLk.js";
import {
  _ as Z
} from "./D_d5xljw.js";
import {
  d as P,
  a,
  c as i,
  b as n,
  aC as X,
  g as u,
  t as _,
  k as l,
  x as k,
  h as E,
  e,
  aD as K,
  aE as ee,
  j as h,
  m as b,
  W as F,
  J as R,
  f as m,
  u as v,
  F as te,
  aF as se,
  aG as ae,
  aH as ne,
  aI as ie,
  aJ as oe,
  aK as C,
  B as x,
  Y as B,
  aL as le,
  C as re,
  N as ce,
  P as de,
  r as N,
  av as me,
  o as ue,
  aM as _e,
  ak as D,
  aN as ge,
  S as be,
  E as ke,
  aO as pe,
  w as fe,
  v as ye,
  p as ve,
  aP as he,
  aQ as Te,
  ab as M,
  G as $e,
  K as Pe,
  T as we
} from "./CfOYKG2j.js";
import {
  _ as Ae
} from "./Bdywh2SZ.js";
import {
  _ as Ee
} from "./BtPk5FXL.js";
import {
  _ as Re
} from "./D6NBaUu9.js";
import {
  _ as Ce
} from "./DkvVAwwp.js";
import "./DG4vrFoI.js";
const Se = {
    class: "pages-tribe-external-widget-template"
  },
  Ie = {
    class: "img"
  },
  xe = ["src"],
  Ne = {
    class: "content"
  },
  Fe = {
    class: "title"
  },
  Oe = {
    class: "subtitle"
  },
  Ke = P({
    __name: "TribeExternalWidgetTemplate",
    props: {
      img: {
        type: String,
        default: void 0
      },
      title: {
        type: String,
        required: !0
      },
      subtitle: {
        type: String,
        required: !0
      },
      link: {
        type: String,
        default: void 0
      },
      linkText: {
        type: String,
        required: !0
      }
    },
    setup(s) {
      return (t, d) => {
        const o = ee;
        return a(), i("div", Se, [n("div", Ie, [t.$slots.img ? X(t.$slots, "img", {
          key: 0
        }, void 0, !0) : s.img ? (a(), i("img", {
          key: 1,
          src: s.img,
          alt: "img"
        }, null, 8, xe)) : u("", !0)]), n("div", Ne, [n("div", Fe, _(s.title), 1), n("div", Oe, _(s.subtitle), 1)]), l(o, {
          link: s.link,
          class: "btn",
          type: s.link ? e(K).LINK : e(K).SPAN
        }, {
          default: k(() => [E(_(s.linkText), 1)]),
          _: 1
        }, 8, ["link", "type"])])
      }
    }
  }),
  Be = h(Ke, [
    ["__scopeId", "data-v-eb4d22ea"]
  ]),
  z = "" + new URL("Dizzy.DsQqlcsY.webp", import.meta.url).href,
  De = {
    class: "pages-tribe-external-widget"
  },
  Me = P({
    __name: "TribeExternalWidget",
    props: {
      myTribeRes: {
        type: Object,
        default: void 0
      }
    },
    setup(s) {
      return (t, d) => {
        const o = S,
          r = Z,
          c = Be;
        return a(), i("div", De, [!s.myTribeRes || s.myTribeRes.type === "not_created" ? (a(), b(o, {
          key: 0,
          class: "skeleton"
        })) : (a(), i(F, {
          key: 1
        }, [s.myTribeRes.type === "ok" ? (a(), b(c, {
          key: 0,
          title: s.myTribeRes.tribe.title,
          subtitle: s.myTribeRes.tribe.getEarnBalanceOrCalculating(),
          link: ("useRouter" in t ? t.useRouter : e(R))().resolve({
            name: "tribe-slug"
          }).fullPath,
          "link-text": ("t" in t ? t.t : e(m))("tribes.widget.base.btn_text")
        }, {
          img: k(() => [l(r, {
            "avatar-url": s.myTribeRes.tribe.getAvatarUrl(),
            "default-avatar": s.myTribeRes.tribe.defaultAvatar,
            size: 38
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["title", "subtitle", "link", "link-text"])) : s.myTribeRes.type === "not_found" ? (a(), b(c, {
          key: 1,
          img: e(z),
          title: ("t" in t ? t.t : e(m))("tribes.widget.base.title"),
          subtitle: ("t" in t ? t.t : e(m))("tribes.widget.base.subtitle"),
          "link-text": ("t" in t ? t.t : e(m))("tribes.widget.base.btn_text"),
          link: ("useRouter" in t ? t.useRouter : e(R))().resolve({
            name: "tribe-join"
          }).fullPath
        }, null, 8, ["img", "title", "subtitle", "link-text", "link"])) : s.myTribeRes.type === "validating" ? (a(), b(c, {
          key: 2,
          img: e(z),
          title: ("t" in t ? t.t : e(m))("tribes.widget.base.title"),
          subtitle: ("t" in t ? t.t : e(m))("tribes.widget.base.subtitle"),
          "link-text": ("t" in t ? t.t : e(m))("tribes.widget.verifying.btn_text"),
          link: ("useRouter" in t ? t.useRouter : e(R))().resolve({
            name: "tribe-join"
          }).fullPath
        }, null, 8, ["img", "title", "subtitle", "link-text", "link"])) : u("", !0)], 64))])
      }
    }
  }),
  ze = h(Me, [
    ["__scopeId", "data-v-be7954ce"]
  ]),
  Ge = {
    key: 0,
    class: "pages-index-drop-skeleton"
  },
  Le = {
    class: "container"
  },
  Ue = {
    class: "content"
  },
  We = {
    key: 1,
    class: "pages-index-drop"
  },
  Ve = {
    key: 0,
    src: se,
    alt: "Pokras heart token",
    class: "pokras-token-img"
  },
  He = {
    key: 1,
    src: ae,
    alt: "Halloween heart token",
    class: "halloween-token-img"
  },
  Ye = {
    key: 2,
    src: ne,
    alt: "Tsubasa heart token",
    class: "tsubasa-token-img"
  },
  je = {
    key: 3,
    src: ie,
    alt: "Game token",
    class: "token-img"
  },
  qe = {
    class: "content"
  },
  Je = {
    class: "title-with-balance"
  },
  Qe = {
    class: "title"
  },
  Ze = {
    class: "pass"
  },
  Xe = P({
    __name: "IndexDrop",
    props: {
      playPasses: {
        type: Number,
        default: void 0
      }
    },
    setup(s) {
      const t = s,
        d = v().internal.isPokrasTheme,
        o = v().internal.isHalloweenTheme,
        r = v().internal.isTsubasaTheme,
        c = te(() => t.playPasses === void 0 ? "skeleton" : t.playPasses > 0 ? "play" : "invite");
      return (g, p) => {
        const T = S,
          $ = oe;
        return e(c) === "skeleton" ? (a(), i("div", Ge, [n("div", Le, [n("div", Ue, [l(T, {
          class: "top",
          rounded: ""
        }), l(T, {
          class: "bottom",
          rounded: ""
        })]), l(T, {
          class: "btn",
          rounded: ""
        })])])) : (a(), i("div", We, [e(d) ? (a(), i("img", Ve)) : e(o) ? (a(), i("img", He)) : e(r) ? (a(), i("img", Ye)) : (a(), i("img", je)), n("div", qe, [n("div", Je, [n("div", Qe, _(("t" in g ? g.t : e(m))("game.card.title")), 1), n("div", Ze, [p[0] || (p[0] = n("i", {
          class: "ticket"
        }, null, -1)), E(" " + _(s.playPasses), 1)])]), e(c) === "play" ? (a(), b($, {
          key: 0,
          to: {
            name: "game"
          },
          class: "play-btn"
        }, {
          default: k(() => [E(_(("t" in g ? g.t : e(m))("base.play")), 1)]),
          _: 1
        })) : u("", !0), e(c) === "invite" ? (a(), b($, {
          key: 1,
          to: {
            name: "frens"
          },
          class: "play-btn secondary"
        }, {
          default: k(() => [E(_(("t" in g ? g.t : e(m))("game.card.invite_for_pp")) + " ", 1), p[1] || (p[1] = n("i", {
            class: "ticket"
          }, null, -1))]),
          _: 1
        })) : u("", !0)])]))
      }
    }
  }),
  et = h(Xe, [
    ["__scopeId", "data-v-64a64acb"]
  ]),
  tt = {
    class: "index-farming-button"
  },
  st = {
    class: "button-label"
  },
  at = {
    key: 0,
    class: "lightning"
  },
  nt = {
    class: "button-label"
  },
  it = {
    key: 0,
    class: "lightning"
  },
  ot = {
    class: "time-left"
  },
  lt = {
    class: "button-label"
  },
  rt = {
    class: "amount"
  },
  ct = P({
    __name: "IndexFarmingButton",
    props: {
      farming: {
        type: Object,
        default: void 0
      },
      isFastFarmingEnabled: {
        type: Boolean,
        required: !0
      },
      disabled: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["start", "claim"],
    setup(s) {
      return (t, d) => {
        const o = S,
          r = re,
          c = ce,
          g = Re;
        return a(), i("div", tt, [!s.farming || s.disabled ? (a(), b(o, {
          key: 0,
          class: "skeleton"
        })) : (a(), i(F, {
          key: 1
        }, [s.farming.status === e(C).READY ? (a(), b(r, {
          key: 0,
          size: e(x).LARGE,
          disabled: s.disabled,
          fill: "",
          class: "button",
          onClick: d[0] || (d[0] = p => t.$emit("start"))
        }, {
          default: k(() => [n("div", st, [s.isFastFarmingEnabled ? (a(), i("i", at)) : u("", !0), n("span", null, _(("t" in t ? t.t : e(m))("farming.start")), 1)])]),
          _: 1
        }, 8, ["size", "disabled"])) : s.farming.status === e(C).ACTIVE ? (a(), b(r, {
          key: 1,
          type: e(B).SECONDARY,
          size: e(x).LARGE,
          disabled: s.disabled,
          fill: "",
          centered: "",
          class: "button is-active",
          style: le({
            "background-position-x": `-${s.farming.progress}%`
          })
        }, {
          default: k(() => [n("div", nt, [s.isFastFarmingEnabled ? (a(), i("i", it)) : u("", !0), n("div", null, _(("t" in t ? t.t : e(m))("farming.farming")), 1), l(c, {
            name: "logo-token",
            class: "coin"
          }), l(g, {
            class: "amount",
            value: s.farming.balance.formatted
          }, null, 8, ["value"])])]),
          right: k(() => [n("div", ot, _(s.farming.timeLabel), 1)]),
          _: 1
        }, 8, ["type", "size", "disabled", "style"])) : u("", !0), s.farming.status === e(C).DONE ? (a(), b(r, {
          key: 2,
          type: e(B).DROP,
          size: e(x).LARGE,
          disabled: s.disabled,
          fill: "",
          class: "button is-done",
          onClick: d[1] || (d[1] = p => t.$emit("claim", s.farming.balance))
        }, {
          default: k(() => [n("div", lt, [n("div", null, _(("t" in t ? t.t : e(m))("farming.claim")), 1), l(c, {
            name: "logo-token",
            class: "coin"
          }), n("div", rt, _(s.farming.balance.formatted), 1)])]),
          _: 1
        }, 8, ["type", "size", "disabled"])) : u("", !0)], 64))])
      }
    }
  }),
  dt = h(ct, [
    ["__scopeId", "data-v-0419d40a"]
  ]),
  mt = {
    key: 0,
    class: "pokras-init-modals"
  },
  ut = 400,
  G = "pokras-hacked-welcome",
  _t = P({
    __name: "IndexPokrasModals",
    setup(s) {
      const t = v().internal.isPokrasTheme,
        {
          $webApp: d
        } = de(),
        o = N(!1),
        r = N(!1),
        c = [],
        g = async () => {
          r.value || (o.value = !1, await d.storage.cloud.set(G, "1"))
        }, p = () => {
          r.value = !1
        };
      (async () => {
        if (!t.value) return;
        await d.storage.cloud.get(G) || (o.value = !0, c.push(setTimeout(() => {
          r.value = !0
        }, ut)))
      })();
      const {
        blockOverflow: $,
        unblockOverflow: w
      } = v();
      return me(() => o.value || r.value, y => {
        y ? $() : w()
      }), ue(() => {
        c.forEach(y => clearTimeout(y))
      }), (y, O) => e(t) ? (a(), b(D, {
        key: 0,
        name: "hacked-modals-transition"
      }, {
        default: k(() => [e(o) || e(r) ? (a(), i("div", mt, [e(o) ? (a(), i("img", {
          key: 0,
          src: _e,
          alt: "Pokras welcome modal",
          width: "251",
          height: "368",
          class: "welcome-modal",
          onClick: g
        })) : u("", !0), l(D, {
          name: "hacked-modal-transition"
        }, {
          default: k(() => [e(r) ? (a(), i("img", {
            key: 0,
            src: ge,
            alt: "Pokras hacked modal",
            width: "251",
            height: "397",
            class: "hacked-modal",
            onClick: p
          })) : u("", !0)]),
          _: 1
        })])) : u("", !0)]),
        _: 1
      })) : u("", !0)
    }
  }),
  gt = h(_t, [
    ["__scopeId", "data-v-2797486d"]
  ]),
  bt = {
    class: "pages-index-index"
  },
  kt = {
    class: "profile-with-balance"
  },
  pt = {
    key: 0,
    class: "username"
  },
  ft = {
    key: 1,
    class: "balance"
  },
  yt = {
    key: 3,
    class: "pokras-drop-game-intro"
  },
  vt = P({
    __name: "Index",
    setup(s) {
      const t = v().internal.isPokrasTheme,
        d = be().getters.mustGetUser.value.username,
        o = ke(),
        r = o.balanceVary,
        c = o.activeFarming,
        g = o.playPasses,
        p = o.isFastFarmingEnabled,
        T = pe(),
        $ = Te(() => {
          we().public.ENVIRONMENT !== "prod" && R().push({
            name: "debug"
          })
        }, 5),
        w = N(!1),
        y = async () => {
          await o.startFarming(), M().farming.farmingStarted()
        }, O = A => {
          w.value = !0, o.claimFarming().then(() => w.value = !1), v().makeConfetti(), $e().bottom.success(m("base.you_got_bp", {
            bp: A.formatted
          })), M().farming.farmingClaimed(A.decimal)
        };
      return (() => {
        Pe.getFrensUsing()
      })(), (A, f) => {
        const L = Q,
          U = ze,
          W = Ae,
          V = Ee,
          H = S,
          Y = et,
          j = dt,
          q = Ce,
          J = gt;
        return a(), i(F, null, [n("div", bt, [fe(l(L, null, null, 512), [
          [ye, e(c) && e(c).status === ("FARMING_STATUS" in A ? A.FARMING_STATUS : e(C)).ACTIVE]
        ]), n("div", kt, [l(U, {
          "my-tribe-res": e(T).myTribeRes.value
        }, null, 8, ["my-tribe-res"]), l(W, {
          small: "",
          class: "avatar",
          onClick: f[0] || (f[0] = I => e($)())
        }), e(d) ? (a(), i("div", pt, _(e(d)), 1)) : u("", !0), e(r) ? (a(), i("div", ft, [f[3] || (f[3] = n("img", {
          src: ve,
          alt: "Blum logo"
        }, null, -1)), l(V, {
          class: "value",
          value: e(r).decimal
        }, null, 8, ["value"])])) : (a(), b(H, {
          key: 2,
          class: "skeleton"
        })), e(t) ? (a(), i("div", yt, f[4] || (f[4] = [n("img", {
          src: he,
          alt: "Pokras drop game intro image"
        }, null, -1)]))) : u("", !0)]), l(Y, {
          class: "drop-zone",
          "play-passes": e(g)
        }, null, 8, ["play-passes"]), l(q, null, {
          default: k(() => [l(j, {
            farming: e(c),
            "is-fast-farming-enabled": e(p),
            disabled: e(w),
            onStart: f[1] || (f[1] = I => y()),
            onClaim: f[2] || (f[2] = I => O(I))
          }, null, 8, ["farming", "is-fast-farming-enabled", "disabled"])]),
          _: 1
        })]), l(J)], 64)
      }
    }
  }),
  ht = h(vt, [
    ["__scopeId", "data-v-0b349b68"]
  ]),
  Tt = {},
  $t = {
    class: "index-page page"
  };

function Pt(s, t) {
  const d = ht;
  return a(), i("div", $t, [l(d)])
}
const Ot = h(Tt, [
  ["render", Pt],
  ["__scopeId", "data-v-20e0bed3"]
]);
export {
  Ot as
  default
};