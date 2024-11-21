import {
  _ as Q
} from "./DgvNSdjA.js";
import {
  _ as C
} from "./B1l3_1k-.js";
import {
  _ as Z
} from "./C4JiGYv2.js";
import {
  d as T,
  a as n,
  c as i,
  b as a,
  aB as X,
  g as u,
  t as _,
  k as c,
  x as b,
  h as A,
  e,
  aC as K,
  aD as ee,
  j as v,
  m as g,
  W as F,
  J as E,
  f as m,
  u as h,
  F as te,
  aE as se,
  aF as ne,
  aG as ae,
  aH as ie,
  aI as R,
  B as x,
  Y as B,
  aJ as oe,
  C as le,
  N as re,
  P as ce,
  r as N,
  av as de,
  o as me,
  aK as ue,
  ak as D,
  aL as _e,
  S as ge,
  E as be,
  aM as ke,
  w as pe,
  v as fe,
  p as ye,
  aN as ve,
  aO as he,
  ab as M,
  G as Te,
  K as $e,
  T as Pe
} from "./DwYsksKZ.js";
import {
  _ as we
} from "./jDexjJvS.js";
import {
  a as Ae,
  _ as Ee
} from "./_uBARztc.js";
import {
  _ as Re
} from "./BliXxM54.js";
import "./CTZKrIp7.js";
const Ce = {
    class: "pages-tribe-external-widget-template"
  },
  Se = {
    class: "img"
  },
  Ie = ["src"],
  xe = {
    class: "content"
  },
  Ne = {
    class: "title"
  },
  Fe = {
    class: "subtitle"
  },
  Oe = T({
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
        return n(), i("div", Ce, [a("div", Se, [t.$slots.img ? X(t.$slots, "img", {
          key: 0
        }, void 0, !0) : s.img ? (n(), i("img", {
          key: 1,
          src: s.img,
          alt: "img"
        }, null, 8, Ie)) : u("", !0)]), a("div", xe, [a("div", Ne, _(s.title), 1), a("div", Fe, _(s.subtitle), 1)]), c(o, {
          link: s.link,
          class: "btn",
          type: s.link ? e(K).LINK : e(K).SPAN
        }, {
          default: b(() => [A(_(s.linkText), 1)]),
          _: 1
        }, 8, ["link", "type"])])
      }
    }
  }),
  Ke = v(Oe, [
    ["__scopeId", "data-v-eb4d22ea"]
  ]),
  z = "" + new URL("Dizzy.DsQqlcsY.webp", import.meta.url).href,
  Be = {
    class: "pages-tribe-external-widget"
  },
  De = T({
    __name: "TribeExternalWidget",
    props: {
      myTribeRes: {
        type: Object,
        default: void 0
      }
    },
    setup(s) {
      return (t, d) => {
        const o = C,
          r = Z,
          l = Ke;
        return n(), i("div", Be, [!s.myTribeRes || s.myTribeRes.type === "not_created" ? (n(), g(o, {
          key: 0,
          class: "skeleton"
        })) : (n(), i(F, {
          key: 1
        }, [s.myTribeRes.type === "ok" ? (n(), g(l, {
          key: 0,
          title: s.myTribeRes.tribe.title,
          subtitle: s.myTribeRes.tribe.getEarnBalanceOrCalculating(),
          link: ("useRouter" in t ? t.useRouter : e(E))().resolve({
            name: "tribe-slug"
          }).fullPath,
          "link-text": ("t" in t ? t.t : e(m))("tribes.widget.base.btn_text")
        }, {
          img: b(() => [c(r, {
            "avatar-url": s.myTribeRes.tribe.getAvatarUrl(),
            "default-avatar": s.myTribeRes.tribe.defaultAvatar,
            size: 38
          }, null, 8, ["avatar-url", "default-avatar"])]),
          _: 1
        }, 8, ["title", "subtitle", "link", "link-text"])) : s.myTribeRes.type === "not_found" ? (n(), g(l, {
          key: 1,
          img: e(z),
          title: ("t" in t ? t.t : e(m))("tribes.widget.base.title"),
          subtitle: ("t" in t ? t.t : e(m))("tribes.widget.base.subtitle"),
          "link-text": ("t" in t ? t.t : e(m))("tribes.widget.base.btn_text"),
          link: ("useRouter" in t ? t.useRouter : e(E))().resolve({
            name: "tribe-join"
          }).fullPath
        }, null, 8, ["img", "title", "subtitle", "link-text", "link"])) : s.myTribeRes.type === "validating" ? (n(), g(l, {
          key: 2,
          img: e(z),
          title: ("t" in t ? t.t : e(m))("tribes.widget.base.title"),
          subtitle: ("t" in t ? t.t : e(m))("tribes.widget.base.subtitle"),
          "link-text": ("t" in t ? t.t : e(m))("tribes.widget.verifying.btn_text"),
          link: ("useRouter" in t ? t.useRouter : e(E))().resolve({
            name: "tribe-join"
          }).fullPath
        }, null, 8, ["img", "title", "subtitle", "link-text", "link"])) : u("", !0)], 64))])
      }
    }
  }),
  Me = v(De, [
    ["__scopeId", "data-v-be7954ce"]
  ]),
  ze = {
    key: 0,
    class: "pages-index-drop-skeleton"
  },
  Ge = {
    class: "container"
  },
  Le = {
    class: "content"
  },
  Ue = {
    key: 1,
    class: "pages-index-drop"
  },
  We = {
    key: 0,
    src: se,
    alt: "Pokras heart token",
    class: "pokras-token-img"
  },
  Ve = {
    key: 1,
    src: ne,
    alt: "Pokras heart token",
    class: "halloween-token-img"
  },
  Ye = {
    key: 2,
    src: ae,
    alt: "Game token",
    class: "token-img"
  },
  He = {
    class: "content"
  },
  je = {
    class: "title-with-balance"
  },
  qe = {
    class: "title"
  },
  Je = {
    class: "pass"
  },
  Qe = T({
    __name: "IndexDrop",
    props: {
      playPasses: {
        type: Number,
        default: void 0
      }
    },
    setup(s) {
      const t = s,
        d = h().internal.isPokrasTheme,
        o = h().internal.isHalloweenTheme,
        r = te(() => t.playPasses === void 0 ? "skeleton" : t.playPasses > 0 ? "play" : "invite");
      return (l, k) => {
        const f = C,
          $ = ie;
        return e(r) === "skeleton" ? (n(), i("div", ze, [a("div", Ge, [a("div", Le, [c(f, {
          class: "top",
          rounded: ""
        }), c(f, {
          class: "bottom",
          rounded: ""
        })]), c(f, {
          class: "btn",
          rounded: ""
        })])])) : (n(), i("div", Ue, [e(d) ? (n(), i("img", We)) : e(o) ? (n(), i("img", Ve)) : (n(), i("img", Ye)), a("div", He, [a("div", je, [a("div", qe, _(("t" in l ? l.t : e(m))("game.card.title")), 1), a("div", Je, [k[0] || (k[0] = a("i", {
          class: "ticket"
        }, null, -1)), A(" " + _(s.playPasses), 1)])]), e(r) === "play" ? (n(), g($, {
          key: 0,
          to: {
            name: "game"
          },
          class: "play-btn"
        }, {
          default: b(() => [A(_(("t" in l ? l.t : e(m))("base.play")), 1)]),
          _: 1
        })) : u("", !0), e(r) === "invite" ? (n(), g($, {
          key: 1,
          to: {
            name: "frens"
          },
          class: "play-btn secondary"
        }, {
          default: b(() => [A(_(("t" in l ? l.t : e(m))("game.card.invite_for_pp")) + " ", 1), k[1] || (k[1] = a("i", {
            class: "ticket"
          }, null, -1))]),
          _: 1
        })) : u("", !0)])]))
      }
    }
  }),
  Ze = v(Qe, [
    ["__scopeId", "data-v-2f028468"]
  ]),
  Xe = {
    class: "index-farming-button"
  },
  et = {
    class: "button-label"
  },
  tt = {
    key: 0,
    class: "lightning"
  },
  st = {
    class: "button-label"
  },
  nt = {
    key: 0,
    class: "lightning"
  },
  at = {
    class: "time-left"
  },
  it = {
    class: "button-label"
  },
  ot = {
    class: "amount"
  },
  lt = T({
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
        const o = C,
          r = le,
          l = re,
          k = Ae;
        return n(), i("div", Xe, [!s.farming || s.disabled ? (n(), g(o, {
          key: 0,
          class: "skeleton"
        })) : (n(), i(F, {
          key: 1
        }, [s.farming.status === e(R).READY ? (n(), g(r, {
          key: 0,
          size: e(x).LARGE,
          disabled: s.disabled,
          fill: "",
          class: "button",
          onClick: d[0] || (d[0] = f => t.$emit("start"))
        }, {
          default: b(() => [a("div", et, [s.isFastFarmingEnabled ? (n(), i("i", tt)) : u("", !0), a("span", null, _(("t" in t ? t.t : e(m))("farming.start")), 1)])]),
          _: 1
        }, 8, ["size", "disabled"])) : s.farming.status === e(R).ACTIVE ? (n(), g(r, {
          key: 1,
          type: e(B).SECONDARY,
          size: e(x).LARGE,
          disabled: s.disabled,
          fill: "",
          centered: "",
          class: "button is-active",
          style: oe({
            "background-position-x": `-${s.farming.progress}%`
          })
        }, {
          default: b(() => [a("div", st, [s.isFastFarmingEnabled ? (n(), i("i", nt)) : u("", !0), a("div", null, _(("t" in t ? t.t : e(m))("farming.farming")), 1), c(l, {
            name: "logo-token",
            class: "coin"
          }), c(k, {
            class: "amount",
            value: s.farming.balance.formatted
          }, null, 8, ["value"])])]),
          right: b(() => [a("div", at, _(s.farming.timeLabel), 1)]),
          _: 1
        }, 8, ["type", "size", "disabled", "style"])) : u("", !0), s.farming.status === e(R).DONE ? (n(), g(r, {
          key: 2,
          type: e(B).DROP,
          size: e(x).LARGE,
          disabled: s.disabled,
          fill: "",
          class: "button is-done",
          onClick: d[1] || (d[1] = f => t.$emit("claim", s.farming.balance))
        }, {
          default: b(() => [a("div", it, [a("div", null, _(("t" in t ? t.t : e(m))("farming.claim")), 1), c(l, {
            name: "logo-token",
            class: "coin"
          }), a("div", ot, _(s.farming.balance.formatted), 1)])]),
          _: 1
        }, 8, ["type", "size", "disabled"])) : u("", !0)], 64))])
      }
    }
  }),
  rt = v(lt, [
    ["__scopeId", "data-v-0419d40a"]
  ]),
  ct = {
    key: 0,
    class: "pokras-init-modals"
  },
  dt = 400,
  G = "pokras-hacked-welcome",
  mt = T({
    __name: "IndexPokrasModals",
    setup(s) {
      const t = h().internal.isPokrasTheme,
        {
          $webApp: d
        } = ce(),
        o = N(!1),
        r = N(!1),
        l = [],
        k = async () => {
          r.value || (o.value = !1, await d.storage.cloud.set(G, "1"))
        }, f = () => {
          r.value = !1
        };
      (async () => {
        if (!t.value) return;
        await d.storage.cloud.get(G) || (o.value = !0, l.push(setTimeout(() => {
          r.value = !0
        }, dt)))
      })();
      const {
        blockOverflow: S,
        unblockOverflow: P
      } = h();
      return de(() => o.value || r.value, y => {
        y ? S() : P()
      }), me(() => {
        l.forEach(y => clearTimeout(y))
      }), (y, O) => e(t) ? (n(), g(D, {
        key: 0,
        name: "hacked-modals-transition"
      }, {
        default: b(() => [e(o) || e(r) ? (n(), i("div", ct, [e(o) ? (n(), i("img", {
          key: 0,
          src: ue,
          alt: "Pokras welcome modal",
          width: "251",
          height: "368",
          class: "welcome-modal",
          onClick: k
        })) : u("", !0), c(D, {
          name: "hacked-modal-transition"
        }, {
          default: b(() => [e(r) ? (n(), i("img", {
            key: 0,
            src: _e,
            alt: "Pokras hacked modal",
            width: "251",
            height: "397",
            class: "hacked-modal",
            onClick: f
          })) : u("", !0)]),
          _: 1
        })])) : u("", !0)]),
        _: 1
      })) : u("", !0)
    }
  }),
  ut = v(mt, [
    ["__scopeId", "data-v-2797486d"]
  ]),
  _t = {
    class: "pages-index-index"
  },
  gt = {
    class: "profile-with-balance"
  },
  bt = {
    key: 0,
    class: "username"
  },
  kt = {
    key: 1,
    class: "balance"
  },
  pt = {
    key: 3,
    class: "pokras-drop-game-intro"
  },
  ft = T({
    __name: "Index",
    setup(s) {
      const t = h().internal.isPokrasTheme,
        d = ge().getters.mustGetUser.value.username,
        o = be(),
        r = o.balanceVary,
        l = o.activeFarming,
        k = o.playPasses,
        f = o.isFastFarmingEnabled,
        $ = ke(),
        S = he(() => {
          Pe().public.ENVIRONMENT !== "prod" && E().push({
            name: "debug"
          })
        }, 5),
        P = N(!1),
        y = async () => {
          await o.startFarming(), M().farming.farmingStarted()
        }, O = w => {
          P.value = !0, o.claimFarming().then(() => P.value = !1), h().makeConfetti(), Te().bottom.success(m("base.you_got_bp", {
            bp: w.formatted
          })), M().farming.farmingClaimed(w.decimal)
        };
      return (() => {
        $e.getFrensUsing()
      })(), (w, p) => {
        const L = Q,
          U = Me,
          W = we,
          V = Ee,
          Y = C,
          H = Ze,
          j = rt,
          q = Re,
          J = ut;
        return n(), i(F, null, [a("div", _t, [pe(c(L, null, null, 512), [
          [fe, e(l) && e(l).status === ("FARMING_STATUS" in w ? w.FARMING_STATUS : e(R)).ACTIVE]
        ]), a("div", gt, [c(U, {
          "my-tribe-res": e($).myTribeRes.value
        }, null, 8, ["my-tribe-res"]), c(W, {
          small: "",
          class: "avatar",
          onClick: p[0] || (p[0] = I => e(S)())
        }), e(d) ? (n(), i("div", bt, _(e(d)), 1)) : u("", !0), e(r) ? (n(), i("div", kt, [p[3] || (p[3] = a("img", {
          src: ye,
          alt: "Blum logo"
        }, null, -1)), c(V, {
          class: "value",
          value: e(r).decimal
        }, null, 8, ["value"])])) : (n(), g(Y, {
          key: 2,
          class: "skeleton"
        })), e(t) ? (n(), i("div", pt, p[4] || (p[4] = [a("img", {
          src: ve,
          alt: "Pokras drop game intro image"
        }, null, -1)]))) : u("", !0)]), c(H, {
          class: "drop-zone",
          "play-passes": e(k)
        }, null, 8, ["play-passes"]), c(q, null, {
          default: b(() => [c(j, {
            farming: e(l),
            "is-fast-farming-enabled": e(f),
            disabled: e(P),
            onStart: p[1] || (p[1] = I => y()),
            onClaim: p[2] || (p[2] = I => O(I))
          }, null, 8, ["farming", "is-fast-farming-enabled", "disabled"])]),
          _: 1
        })]), c(J)], 64)
      }
    }
  }),
  yt = v(ft, [
    ["__scopeId", "data-v-0b349b68"]
  ]),
  vt = {},
  ht = {
    class: "index-page page"
  };

function Tt(s, t) {
  const d = yt;
  return n(), i("div", ht, [c(d)])
}
const xt = v(vt, [
  ["render", Tt],
  ["__scopeId", "data-v-20e0bed3"]
]);
export {
  xt as
  default
};