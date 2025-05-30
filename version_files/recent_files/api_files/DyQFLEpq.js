import {
  ag as k,
  dh as m,
  A as i,
  di as w,
  d as b,
  bb as K,
  o as a,
  z as u,
  e as s,
  f as h,
  a4 as ht,
  C as vt,
  D as T,
  a as _,
  t as f,
  b as p,
  B as ft,
  a9 as L,
  _ as P,
  x as B,
  aa as q,
  J as R,
  c as r,
  dj as O,
  dk as bt,
  p as j,
  a5 as x,
  F as $,
  q as D,
  n as A,
  j as N,
  Z as z,
  aJ as wt,
  az as gt,
  a2 as kt,
  w as H,
  G as g,
  dl as C,
  ah as Q,
  aq as Y,
  dm as It,
  dn as $t,
  aV as G,
  a8 as Z,
  b1 as Nt,
  ao as Tt,
  aC as Et,
  aP as Pt,
  aT as At,
  ab as St,
  an as V,
  K as F,
  a3 as Ut,
  Q as Ct,
  b9 as Kt,
  dp as Ot
} from "./jPANuN8i.js";
import {
  _ as J
} from "./CDi5KUtr.js";
import {
  _ as W
} from "./CCM4Z8NC.js";
import {
  d as E,
  c as Dt,
  b as Wt,
  e as Lt
} from "./tfhDg62-.js";
import {
  u as X,
  _ as tt
} from "./CHsekkV8.js";
import {
  _ as Bt
} from "./CamlPaja.js";
import {
  c as Rt
} from "./CjrCyY9h.js";
import "./6VLEKrJt.js";
import "./jOA2D9Ne.js";
import "./DMkCWOMx.js";
import "./CF4Aa-Pt.js";
import "./C32szIvG.js";
import "./EsZwMrjz.js";
import "./BJ0AVki2.js";
const et = e => {
    switch (e.type) {
      case m.TYPE.IN:
        switch (e.kind) {
          case m.KIND_IN.CLAIM_FARMING:
            return i("wallet.history.points.in_farming");
          case m.KIND_IN.CLAIM_TASK:
            return i("wallet.history.points.in_task");
          case m.KIND_IN.CLAIM_REFERRAL:
            return i("wallet.history.points.in_frens");
          case m.KIND_IN.CLAIM_CHECK_IN:
            return i("wallet.history.points.in_daily_rewards");
          case m.KIND_IN.DROP_GAME:
            return i("wallet.history.points.in_drop_game");
          case m.KIND_IN.BLUM_DROP:
            return i("wallet.history.points.in_blum_drop");
          case m.KIND_IN.WALLET_MIGRATION:
            return i("wallet.history.points.in_wallet_migration");
          case m.KIND_IN.MANUAL:
            return i("wallet.history.points.in_manual");
          case m.KIND_IN.MEMEPAD_TOKEN_CREATION:
            return i("wallet.history.points.in_memepad_token_creation");
          case m.KIND_IN.MEMEPAD_LISTED_TOKEN_CREATION:
            return i("wallet.history.points.in_memepad_listed_token_creation");
          case m.KIND_IN.MEMEPAD_TOKEN_TRADING:
            return i("wallet.history.points.in_memepad_token_trading");
          case m.KIND_IN.MEMEPAD_CLAIM_REFERRAL:
            return i("wallet.history.points.in_memepad_claim_referral");
          case m.KIND_IN.BOT_TOKEN_TRADING:
            return i("wallet.history.points.in_bot_token_trading");
          default:
            throw k("Unknown history kind")
        }
      case m.TYPE.OUT:
        switch (e.kind) {
          case m.KIND_OUT.CLAIM_REFERRAL:
            return i("wallet.history.points.out_frens");
          case m.KIND_OUT.DROP_GAME:
            return i("wallet.history.points.out_drop_game");
          case m.KIND_OUT.WITHDRAW_TO_ONCHAIN:
            return i("wallet.history.points.out_withdraw_to_onchain");
          case m.KIND_OUT.MANUAL:
            return i("wallet.history.points.out_manual");
          default:
            throw k("Unknown history kind")
        }
      case m.TYPE.UNKNOWN:
        return i("wallet.history.unknown");
      default:
        throw k("Unknown history type")
    }
  },
  nt = e => {
    switch (e.type) {
      case m.TYPE.IN: {
        if (e.payload.inbound) {
          const n = e.payload.inbound.currency.amount.defaultWithSymbol,
            t = e.payload.inbound.currency.isInternal;
          return {
            details: n,
            isInternal: t,
            prefix: "+"
          }
        }
        return
      }
      case m.TYPE.OUT: {
        if (e.payload.outbound) {
          const n = e.payload.outbound.currency.amount.defaultWithSymbol,
            t = e.payload.outbound.currency.isInternal;
          return {
            details: n,
            isInternal: t,
            prefix: "-"
          }
        }
        return
      }
      case m.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  st = e => {
    var n, t;
    switch (e.type) {
      case m.TYPE.IN:
        return {
          type: "single", icon: (n = e.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case m.TYPE.OUT:
        return {
          type: "single", icon: (t = e.payload.outbound.currency) == null ? void 0 : t.imageUrl
        };
      case m.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  xt = e => ({
    title: et(e),
    details: nt(e),
    icon: st(e)
  }),
  Mt = {
    title: et,
    details: nt,
    icon: st,
    all: xt
  },
  ot = e => {
    switch (e.type) {
      case w.TYPE.IN:
        return e.payload.inbound.nft ? i("wallet.history.tokens.in_nft") : i("wallet.history.tokens.in");
      case w.TYPE.OUT:
        return e.payload.outbound.nft ? i("wallet.history.tokens.out_nft") : i("wallet.history.tokens.out");
      case w.TYPE.SWAP:
        return i("wallet.history.tokens.swap");
      case w.TYPE.UNQUANTIFIED:
        return (() => {
          switch (e.kind) {
            case w.KIND_UNQUANTIFIED.CONTRACT_DEPLOY:
              return i("wallet.history.tokens.other_contract_deploy");
            case w.KIND_UNQUANTIFIED.CONTRACT_EXEC:
              return i("wallet.history.tokens.other_contract_execution");
            case w.KIND_UNQUANTIFIED.UNSUBSCRIBE:
              return i("wallet.history.tokens.other_unsubscribed");
            case w.KIND_UNQUANTIFIED.DOMAIN_RENEW:
              return i("wallet.history.tokens.other_domain_renew");
            case w.KIND_UNQUANTIFIED.WITHDRAW_STAKE_REQUEST:
              return i("wallet.history.tokens.other_stake_request");
            default:
              throw k("Unknown unquantified history kind")
          }
        })();
      case w.TYPE.UNKNOWN:
        return i("wallet.history.unknown");
      default:
        throw k("Unknown history type")
    }
  },
  at = e => {
    switch (e.type) {
      case w.TYPE.IN: {
        if (e.payload.inbound.currency) {
          const n = e.payload.inbound.currency.amount.defaultWithSymbol,
            t = e.payload.inbound.currency.isInternal;
          return {
            details: n,
            isInternal: t,
            prefix: "+"
          }
        }
        return
      }
      case w.TYPE.OUT: {
        if (e.payload.outbound.currency) {
          const n = e.payload.outbound.currency.amount.defaultWithSymbol,
            t = e.payload.outbound.currency.isInternal;
          return {
            details: n,
            isInternal: t,
            prefix: "-"
          }
        }
        return
      }
      case w.TYPE.SWAP:
        return {
          details: `${e.payload.outbound.currency.symbol}→${e.payload.inbound.currency.symbol}`, isInternal: !1, prefix: void 0
        };
      case w.TYPE.UNQUANTIFIED:
        return;
      case w.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  lt = e => {
    var n, t;
    switch (e.type) {
      case w.TYPE.IN:
        return {
          type: "single", icon: (n = e.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case w.TYPE.OUT:
        return {
          type: "single", icon: (t = e.payload.outbound.currency) == null ? void 0 : t.imageUrl
        };
      case w.TYPE.SWAP:
        return {
          type: "double", iconFrom: e.payload.outbound.currency.imageUrl, iconTo: e.payload.inbound.currency.imageUrl
        };
      case w.TYPE.UNQUANTIFIED:
        return;
      case w.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  Ht = e => ({
    title: ot(e),
    details: at(e),
    icon: lt(e)
  }),
  Yt = {
    title: ot,
    details: at,
    icon: lt,
    all: Ht
  },
  Vt = e => e.instance === "point",
  Ft = e => e.instance === "token",
  qt = (e, n) => {
    if (Vt(e)) return n.point(e);
    if (Ft(e)) return n.token(e);
    throw k("Unknown history instance")
  },
  jt = b({
    __name: "Reconnect",
    setup(e) {
      const {
        reconnect: n
      } = K();
      return (t, c) => {
        const o = J;
        return a(), u(o, {
          lottie: "animations/Star",
          "icon-size": 116,
          title: ("t" in t ? t.t : s(i))("wallet.reconnect.title"),
          subtitle: ("t" in t ? t.t : s(i))("wallet.reconnect.subtitle"),
          "button-label": ("t" in t ? t.t : s(i))("wallet.reconnect.btn"),
          onButton: c[0] || (c[0] = l => s(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  zt = h(jt, [
    ["__scopeId", "data-v-29d5ae4b"]
  ]),
  Qt = b({
    __name: "NotConnected",
    setup(e) {
      const {
        openConnectModal: n
      } = K();
      return (t, c) => {
        const o = J;
        return a(), u(o, {
          lottie: "animations/Unicorn",
          "icon-size": 88,
          title: ("t" in t ? t.t : s(i))("wallet.legacy.not_connected.title"),
          subtitle: ("t" in t ? t.t : s(i))("wallet.legacy.not_connected.subtitle"),
          "button-label": ("t" in t ? t.t : s(i))("wallet.legacy.not_connected.btn"),
          onButton: c[0] || (c[0] = l => s(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  Gt = h(Qt, [
    ["__scopeId", "data-v-8fdb824b"]
  ]),
  Zt = {
    class: "pages-wallet-label-bottom-sheet"
  },
  Jt = {
    class: "address-status"
  },
  Xt = {
    class: "address"
  },
  te = {
    class: "status"
  },
  ee = {
    class: "label"
  },
  ne = b({
    __name: "LabelBottomSheet",
    props: ht({
      address: {
        type: Object,
        required: !0
      }
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const n = vt(e, "modelValue"),
        {
          disconnect: t,
          onDisconnected: c
        } = K();
      return c(() => n.value = !1), (o, l) => {
        const d = P,
          v = B,
          y = q;
        return a(), u(y, {
          modelValue: n.value,
          "onUpdate:modelValue": l[1] || (l[1] = I => n.value = I),
          title: "Wallet"
        }, {
          default: T(() => [_("div", Zt, [_("div", Jt, [_("div", Xt, f(e.address.short), 1), _("div", te, [p(d, {
            name: "circle-check-fill",
            class: "icon"
          }), _("span", ee, f(("t" in o ? o.t : s(i))("wallet.sheet.active")), 1)])]), p(v, {
            label: ("t" in o ? o.t : s(i))("wallet.sheet.disconnect"),
            type: s(ft).GHOST,
            "is-danger": "",
            size: s(L).LARGE,
            onClick: l[0] || (l[0] = I => s(t)())
          }, null, 8, ["label", "type", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  se = h(ne, [
    ["__scopeId", "data-v-07f164ab"]
  ]),
  oe = {
    class: "pages-wallet-label"
  },
  ae = {
    class: "address"
  },
  le = b({
    __name: "Label",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(e) {
      const n = () => {
          x().wallet.walletAddressButtonClick(), t.value = !0
        },
        t = R(!1);
      return (c, o) => {
        const l = se;
        return a(), r("div", oe, [_("div", {
          class: "label",
          onClick: n
        }, [o[1] || (o[1] = _("img", {
          src: O,
          alt: "TON logo",
          class: "ton-logo"
        }, null, -1)), _("div", ae, f(e.address.short), 1), o[2] || (o[2] = _("img", {
          src: bt,
          alt: "Arrow down",
          class: "arrow-icon"
        }, null, -1))]), p(l, {
          modelValue: s(t),
          "onUpdate:modelValue": o[0] || (o[0] = d => j(t) ? t.value = d : null),
          address: e.address
        }, null, 8, ["modelValue", "address"])])
      }
    }
  }),
  it = h(le, [
    ["__scopeId", "data-v-821e46dc"]
  ]),
  ie = {
    class: "kit-progress-stepper"
  },
  ce = {
    class: "icon-wrapper"
  },
  re = {
    class: "text"
  },
  _e = b({
    __name: "KitProgressStepper",
    props: {
      items: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      return (n, t) => {
        const c = P;
        return a(), r("div", ie, [(a(!0), r($, null, D(e.items, o => (a(), r("div", {
          key: o.text,
          class: A(["item", {
            "is-active": o.active
          }])
        }, [_("div", ce, [o.active ? (a(), u(c, {
          key: 0,
          name: "circle-check-white",
          class: "icon"
        })) : (a(), u(c, {
          key: 1,
          name: "circle-small",
          class: "icon"
        }))]), _("div", re, f(o.text), 1)], 2))), 128))])
      }
    }
  }),
  de = h(_e, [
    ["__scopeId", "data-v-c6e84c97"]
  ]),
  ue = {
    class: "pages-wallet-legacy-connected"
  },
  pe = {
    class: "container"
  },
  me = {
    class: "title"
  },
  ye = b({
    __name: "Connected",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(e) {
      const n = N(() => [{
        active: !0,
        text: i("wallet.legacy.connected.step.ton_connect")
      }, {
        active: !1,
        text: i("wallet.legacy.connected.step.blum_wallet")
      }, {
        active: !1,
        text: i("wallet.legacy.connected.step.wallet_connect")
      }]);
      return (t, c) => {
        const o = z,
          l = wt,
          d = it,
          v = de;
        return a(), r("div", ue, [p(o, {
          class: "background"
        }), _("div", pe, [_("div", me, f(("t" in t ? t.t : s(i))("wallet.legacy.connected.title")), 1), p(l, {
          name: "animations/MoneyWings",
          size: 80,
          class: "icon"
        }), p(d, {
          address: e.address
        }, null, 8, ["address"]), p(v, {
          items: s(n),
          class: "progress"
        }, null, 8, ["items"])])])
      }
    }
  }),
  he = h(ye, [
    ["__scopeId", "data-v-603fef51"]
  ]),
  ve = {
    class: "pages-wallet-connect-banner"
  },
  fe = {
    class: "container"
  },
  be = ["innerHTML"],
  we = b({
    __name: "ConnectBanner",
    setup(e) {
      const {
        openConnectModal: n
      } = K(gt.WALLET);
      return (t, c) => {
        const o = z,
          l = B;
        return a(), r("div", ve, [_("div", fe, [p(o), _("div", {
          class: "title",
          innerHTML: ("t" in t ? t.t : s(i))("wallet.connect_banner.title")
        }, null, 8, be), p(l, {
          label: ("t" in t ? t.t : s(i))("wallet.connect.btn"),
          size: s(L).SMALL,
          class: "btn",
          onClick: c[0] || (c[0] = d => s(n)())
        }, null, 8, ["label", "size"])])])
      }
    }
  }),
  ge = h(we, [
    ["__scopeId", "data-v-227fb3d9"]
  ]),
  ke = {
    class: "pages-wallet-block-points-fiat-equal"
  },
  Ie = b({
    __name: "PointsFiatEqual",
    props: {
      value: {
        type: Object,
        default: void 0
      }
    },
    setup(e) {
      return (n, t) => {
        const c = W;
        return a(), r("div", ke, [e.value === void 0 ? (a(), u(c, {
          key: 0,
          class: "skeleton",
          rounded: ""
        })) : (a(), r("div", {
          key: 1,
          class: A(["value", {
            "is-highlighted": e.value.value.greaterThan(0)
          }])
        }, f(e.value.defaultWithSymbol), 3))])
      }
    }
  }),
  $e = h(Ie, [
    ["__scopeId", "data-v-16763388"]
  ]),
  Ne = {},
  Te = {
    class: "pages-wallet-atoms-coming-soon"
  },
  Ee = {
    class: "label"
  };

function Pe(e, n) {
  const t = P;
  return a(), r("div", Te, [p(t, {
    name: "clock",
    class: "icon"
  }), _("div", Ee, f(("t" in e ? e.t : s(i))("wallet.history.coming_soon")), 1)])
}
const Ae = h(Ne, [
    ["render", Pe],
    ["__scopeId", "data-v-3ac68509"]
  ]),
  Se = ["src"],
  Ue = ["src"],
  Ce = b({
    __name: "HistoryItemIcon",
    props: {
      icon: {}
    },
    setup(e) {
      const n = e,
        t = N(() => {
          if (n.icon === void 0) return [E];
          if (n.icon.type === "single") return [n.icon.icon ?? E];
          if (n.icon.type === "double") return [n.icon.iconFrom ?? E, n.icon.iconTo ?? E];
          throw n.icon, k("Unknown icon type")
        });
      return (c, o) => {
        const l = kt("img-error");
        return a(), r("div", {
          class: A(["pages-wallet-history-item-icon", {
            "is-single": s(t).length === 1,
            "is-double": s(t).length === 2
          }])
        }, [H(_("img", {
          src: s(t)[0],
          alt: "Transaction icon"
        }, null, 8, Se), [
          [l, s(E)]
        ]), s(t).length === 2 ? H((a(), r("img", {
          key: 0,
          src: s(t)[1],
          alt: "Transaction icon"
        }, null, 8, Ue)), [
          [l, s(E)]
        ]) : g("", !0)], 2)
      }
    }
  }),
  Ke = h(Ce, [
    ["__scopeId", "data-v-43176a1b"]
  ]),
  Oe = {
    class: "label"
  },
  De = b({
    __name: "HistoryItemStatus",
    props: {
      status: {
        type: String,
        required: !0
      }
    },
    setup(e) {
      const n = e,
        t = N(() => {
          switch (n.status) {
            case C.STATUS.PENDING:
              return;
            case C.STATUS.FAILED:
              return {
                icon: "circle-warning-fill", label: "Failed", cls: "is-failed"
              };
            case C.STATUS.OK:
              return {
                icon: "circle-check-fill", label: "Success", cls: "is-success"
              };
            default:
              throw n.status, k("Unknown history status")
          }
        });
      return (c, o) => {
        const l = P;
        return s(t) ? (a(), r("div", {
          key: 0,
          class: A(["pages-wallet-history-item-status", s(t).cls])
        }, [p(l, {
          name: s(t).icon,
          class: "icon"
        }, null, 8, ["name"]), _("div", Oe, f(s(t).label), 1)], 2)) : g("", !0)
      }
    }
  }),
  We = h(De, [
    ["__scopeId", "data-v-14d91734"]
  ]),
  Le = {
    class: "pages-wallet-history-item"
  },
  Be = {
    class: "title-with-details"
  },
  Re = {
    class: "title"
  },
  xe = {
    key: 0,
    class: "details"
  },
  Me = {
    key: 0,
    class: "right-text"
  },
  He = b({
    __name: "HistoryItem",
    props: {
      historyItem: {
        type: Object,
        required: !0
      }
    },
    setup(e) {
      const n = e,
        t = N(() => qt(n.historyItem, {
          point: l => ({
            ...Mt.all(l),
            status: l.payload.status
          }),
          token: l => ({
            ...Yt.all(l),
            status: l.payload.status
          })
        })),
        c = N(() => {
          if (!(!t.value.details || t.value.details.isInternal)) return t.value.details.details
        }),
        o = N(() => {
          if (t.value.details && t.value.details.isInternal) {
            let l = t.value.details.details;
            return t.value.details.prefix && (l = `${t.value.details.prefix}${l}`), {
              type: "text",
              text: l
            }
          }
          if (t.value.status !== C.STATUS.OK) return {
            type: "status",
            status: t.value.status
          }
        });
      return (l, d) => {
        const v = Ke,
          y = We;
        return a(), r("div", Le, [p(v, {
          icon: s(t).icon
        }, null, 8, ["icon"]), _("div", Be, [_("div", Re, f(s(t).title), 1), s(c) ? (a(), r("div", xe, f(s(c)), 1)) : g("", !0)]), s(o) ? (a(), r($, {
          key: 0
        }, [s(o).type === "text" ? (a(), r("div", Me, f(s(o).text), 1)) : s(o).type === "status" ? (a(), u(y, {
          key: 1,
          status: s(o).status,
          class: "status"
        }, null, 8, ["status"])) : g("", !0)], 64)) : g("", !0)])
      }
    }
  }),
  Ye = h(He, [
    ["__scopeId", "data-v-6587f464"]
  ]),
  Ve = {
    class: "pages-wallet-history"
  },
  Fe = {
    key: 0,
    class: "date"
  },
  qe = b({
    __name: "History",
    props: {
      history: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      return (n, t) => {
        const c = Ye;
        return a(), r("div", Ve, [(a(!0), r($, null, D(e.history, (o, l) => (a(), r($, {
          key: l
        }, [l === 0 || e.history[l - 1].date.stamp !== e.history[l].date.stamp ? (a(), r("div", Fe, f(o.date.formatted), 1)) : g("", !0), p(c, {
          "history-item": o
        }, null, 8, ["history-item"])], 64))), 128))])
      }
    }
  }),
  ct = h(qe, [
    ["__scopeId", "data-v-edabb2b5"]
  ]),
  je = {
    class: "pages-wallet-points-history"
  },
  ze = b({
    __name: "PointsHistory",
    setup(e) {
      const t = X(async c => {
        const o = await Q.getPointsHistory(c);
        if (o.err) throw k("Unable to load points history");
        return {
          nextPageToken: o.data.nextPageToken,
          items: o.data.actions
        }
      });
      return (c, o) => {
        const l = Ae,
          d = ct,
          v = tt;
        return a(), r("div", je, [p(v, {
          onEnd: o[0] || (o[0] = y => s(t).load())
        }, {
          default: T(() => [s(t).isEmpty.value ? (a(), u(l, {
            key: 0
          })) : (a(), u(d, {
            key: 1,
            history: s(t).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  Qe = h(ze, [
    ["__scopeId", "data-v-7c645fab"]
  ]),
  Ge = {
    class: "kit-label-with-bottom-sheet"
  },
  Ze = {
    key: 0,
    class: "image"
  },
  Je = ["src"],
  Xe = {
    class: "text"
  },
  tn = b({
    __name: "LabelWithBottomSheet",
    props: {
      title: {
        type: String,
        default: void 0
      },
      image: {
        type: String,
        default: void 0
      },
      text: {
        type: String,
        required: !0
      },
      banner: {
        type: String,
        default: void 0
      },
      type: {
        type: String,
        default: "default"
      }
    },
    setup(e) {
      const n = R(!1),
        t = () => n.value = !1;
      return (c, o) => {
        const l = P,
          d = q;
        return a(), r("div", Ge, [_("div", {
          class: A(["label", `is-${e.type}`]),
          onClick: o[0] || (o[0] = v => n.value = !0)
        }, [e.image || c.$slots.image ? (a(), r("div", Ze, [Y(c.$slots, "image", {}, () => [e.image ? (a(), r("img", {
          key: 0,
          src: e.image,
          alt: "Image"
        }, null, 8, Je)) : g("", !0)], !0)])) : g("", !0), _("div", Xe, f(e.text), 1), p(l, {
          name: "chevron-right",
          class: "icon"
        })], 2), p(d, {
          modelValue: s(n),
          "onUpdate:modelValue": o[1] || (o[1] = v => j(n) ? n.value = v : null),
          title: e.title,
          banner: e.banner
        }, {
          default: T(() => [Y(c.$slots, "default", {
            close: t
          }, void 0, !0)]),
          _: 3
        }, 8, ["modelValue", "title", "banner"])])
      }
    }
  }),
  rt = h(tn, [
    ["__scopeId", "data-v-e9eaa47e"]
  ]),
  en = {};

function nn(e, n) {
  const t = Dt,
    c = rt;
  return a(), u(c, {
    text: ("t" in e ? e.t : s(i))("wallet.drop.notification.label"),
    class: "pages-wallet-block-details-soon-notification-with-label"
  }, {
    image: T(() => n[0] || (n[0] = [_("img", {
      class: "img",
      src: O,
      alt: "Ton logo"
    }, null, -1), _("img", {
      class: "img",
      src: It,
      alt: "Notcoin logo"
    }, null, -1)])),
    default: T(({
      close: o
    }) => [p(t, {
      onClose: l => o()
    }, null, 8, ["onClose"])]),
    _: 1
  }, 8, ["text"])
}
const sn = h(en, [
    ["render", nn],
    ["__scopeId", "data-v-eb9556ff"]
  ]),
  on = {
    class: "pages-wallet-block-points"
  },
  an = {
    class: "heading"
  },
  ln = {
    class: "title"
  },
  cn = b({
    __name: "Points",
    props: {
      points: {
        type: Object,
        required: !0
      },
      notification: {
        type: String,
        default: void 0
      }
    },
    setup(e) {
      const n = N(() => [{
        key: "balances",
        label: i("wallet.points.tabs.balances")
      }, {
        key: "history",
        label: i("wallet.points.tabs.history")
      }]);
      return (t, c) => {
        const o = $e,
          l = Qe,
          d = W,
          v = sn,
          y = Wt,
          I = Bt;
        return a(), r("div", on, [_("div", an, [_("div", ln, f(("t" in t ? t.t : s(i))("wallet.points.title")), 1), p(o, {
          value: e.points.totalFiatValue.USD
        }, null, 8, ["value"])]), p(I, {
          tabs: s(n),
          class: "tabs"
        }, {
          history: T(() => [p(l, {
            class: "history"
          })]),
          balances: T(() => [e.notification === void 0 ? (a(), u(d, {
            key: 0,
            class: "notification-skeleton notification"
          })) : e.notification === "default" ? (a(), u(v, {
            key: 1,
            class: "notification"
          })) : g("", !0), p(y, {
            points: e.points.points
          }, null, 8, ["points"])]),
          _: 1
        }, 8, ["tabs"])])
      }
    }
  }),
  rn = h(cn, [
    ["__scopeId", "data-v-013937d8"]
  ]),
  _n = {
    class: "pages-wallet-connected-banner"
  },
  dn = {
    key: 1,
    class: "balance"
  },
  un = {
    class: "value"
  },
  pn = {
    key: 2,
    class: "last-updated"
  },
  mn = b({
    __name: "ConnectedBanner",
    props: {
      address: {
        type: Object,
        required: !0
      },
      fiatValue: {
        type: Object,
        default: void 0
      },
      updatedAt: {
        type: Object,
        default: void 0
      }
    },
    setup(e) {
      const n = e,
        t = N(() => {
          if (n.updatedAt && Date.now() - n.updatedAt.getTime() > 3e5) return $t(n.updatedAt)
        });
      return (c, o) => {
        const l = it,
          d = W;
        return a(), r("div", _n, [p(l, {
          address: e.address
        }, null, 8, ["address"]), e.fiatValue === void 0 || e.fiatValue.USD == null ? (a(), u(d, {
          key: 0,
          class: "skeleton"
        })) : (a(), r("div", dn, [o[0] || (o[0] = _("span", {
          class: "symbol"
        }, "$", -1)), _("span", un, f(e.fiatValue.USD.default), 1)])), s(t) ? (a(), r("div", pn, f(("t" in c ? c.t : s(i))("wallet.connected.last_updated", {
          updatedAtLabel: s(t)
        })), 1)) : g("", !0)])
      }
    }
  }),
  yn = h(mn, [
    ["__scopeId", "data-v-6e2f0c44"]
  ]),
  hn = {
    class: "pages-wallet-controls"
  },
  vn = ["onClick"],
  fn = {
    class: "icon"
  },
  bn = ["src", "alt"],
  wn = {
    class: "label"
  },
  gn = b({
    __name: "Controls",
    emits: ["show:points", "show:tokens-history"],
    setup(e, {
      emit: n
    }) {
      const t = n,
        c = x(),
        o = G(),
        l = N(() => {
          var d;
          return [{
            label: i("wallet.controls.send"),
            icon: "arrow-up",
            disabled: !0
          }, {
            label: i("wallet.controls.buy"),
            icon: "credit-card",
            ...(d = o.availableInfo.value) != null && d.available ? {
              onClick: () => {
                c.wallet.walletBuyButtonClick(), o.openPaymentSheet()
              }
            } : {
              disabled: !0
            }
          }, {
            label: i("wallet.controls.history"),
            icon: "clock",
            onClick: () => {
              c.wallet.walletHistoryButtonClick(), t("show:tokens-history")
            }
          }, {
            label: i("wallet.controls.points"),
            icon: "leaf",
            onClick: () => {
              c.wallet.walletPointsButtonClick(), t("show:points")
            }
          }]
        });
      return (d, v) => (a(), r("div", hn, [(a(!0), r($, null, D(s(l), (y, I) => (a(), r("button", {
        key: I,
        class: A(["control reset", {
          "is-disabled": y.disabled
        }]),
        onClick: S => {
          var U;
          return (U = y.onClick) == null ? void 0 : U.call(y)
        }
      }, [_("div", fn, [_("img", {
        src: ("imgResolver" in d ? d.imgResolver : s(Z))(y.icon, "svg"),
        alt: `${y.label} icon`
      }, null, 8, bn)]), _("div", wn, f(y.label), 1)], 10, vn))), 128))]))
    }
  }),
  kn = h(gn, [
    ["__scopeId", "data-v-6ad4074d"]
  ]),
  In = {
    class: "pages-wallet-block-tokens-only-ton-notification"
  },
  $n = {
    class: "title"
  },
  Nn = {
    class: "text"
  },
  Tn = b({
    __name: "TokensOnlyTonNotification",
    setup(e) {
      return (n, t) => {
        const c = B,
          o = rt;
        return a(), u(o, {
          text: ("t" in n ? n.t : s(i))("wallet.only_ton_notification.label"),
          image: ("imgResolver" in n ? n.imgResolver : s(Z))("ton-logo", "svg")
        }, {
          default: T(({
            close: l
          }) => [_("div", In, [t[0] || (t[0] = _("img", {
            src: O,
            alt: "Ton logo"
          }, null, -1)), _("div", $n, f(("t" in n ? n.t : s(i))("wallet.only_ton_notification.title")), 1), _("div", Nn, f(("t" in n ? n.t : s(i))("wallet.only_ton_notification.text")), 1), p(c, {
            label: ("t" in n ? n.t : s(i))("base.got_it"),
            fill: "",
            class: "button",
            size: s(L).LARGE,
            onClick: l
          }, null, 8, ["label", "size", "onClick"])])]),
          _: 1
        }, 8, ["text", "image"])
      }
    }
  }),
  En = h(Tn, [
    ["__scopeId", "data-v-0315755f"]
  ]),
  Pn = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_26695_20949)'%3e%3crect%20width='64'%20height='64'%20rx='32'%20fill='%230097EA'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.0565%2021C19.9024%2021%2019.1806%2022.2489%2019.7569%2023.2489L30%2041.0238V21H21.0565ZM34%2021V41.0238L44.2431%2023.2489C44.8194%2022.2489%2044.0976%2021%2042.9435%2021H34ZM16.2911%2025.2461C14.1782%2021.5795%2016.8246%2017%2021.0565%2017H42.9435C47.1754%2017%2049.8218%2021.5795%2047.7088%2025.2461L33.7329%2049.4986C33.3758%2050.1182%2032.7151%2050.5%2032%2050.5C31.2849%2050.5%2030.6242%2050.1182%2030.2671%2049.4986L16.2911%2025.2461Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_26695_20949'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  An = {
    class: "pages-wallet-asset-tokens"
  },
  Sn = b({
    __name: "AssetTokens",
    props: {
      ton: {
        type: Object,
        required: !0
      },
      jettons: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      const n = e,
        t = N(() => {
          const c = {
              id: n.ton.currencyId,
              name: "Toncoin",
              symbol: "TON",
              balance: n.ton.balance,
              fiat: n.ton.fiatValue,
              imageUrl: Pn
            },
            o = n.jettons.map(l => ({
              id: l.currencyId,
              name: l.name,
              symbol: l.symbol,
              balance: l.balance,
              fiat: l.fiatValue,
              imageUrl: Nt(l.imageUrl),
              pnlPercent: l.pnlPercent,
              link: l.memepadShortname && Tt().resolve({
                name: "memepad-jetton-shortname",
                params: {
                  shortname: l.memepadShortname
                },
                query: {
                  memepadFrom: Et.WALLET_BAR,
                  from: Pt.WALLET
                }
              }).href
            }));
          return [c, ...o]
        });
      return (c, o) => {
        const l = Lt;
        return a(), r("div", An, [(a(!0), r($, null, D(s(t), d => (a(), u(l, At({
          key: d.id,
          ref_for: !0
        }, d), null, 16))), 128))])
      }
    }
  }),
  Un = h(Sn, [
    ["__scopeId", "data-v-75da087d"]
  ]),
  Cn = {
    class: "pages-wallet-block-tokens"
  },
  Kn = b({
    __name: "Tokens",
    props: {
      address: {},
      balance: {},
      notification: {}
    },
    emits: ["show:points", "show:tokens-history"],
    setup(e) {
      return (n, t) => {
        var y, I;
        const c = yn,
          o = kn,
          l = W,
          d = En,
          v = Un;
        return a(), r("div", Cn, [p(c, {
          address: n.address,
          "fiat-value": (y = n.balance) == null ? void 0 : y.totalFiatValue,
          "updated-at": (I = n.balance) == null ? void 0 : I.updatedAt
        }, null, 8, ["address", "fiat-value", "updated-at"]), p(o, {
          "onShow:points": t[0] || (t[0] = S => n.$emit("show:points")),
          "onShow:tokensHistory": t[1] || (t[1] = S => n.$emit("show:tokens-history"))
        }), n.notification === void 0 ? (a(), u(l, {
          key: 0,
          class: "notification-skeleton notification"
        })) : n.notification === "default" ? (a(), u(d, {
          key: 1,
          class: "notification"
        })) : g("", !0), n.balance ? (a(), u(v, {
          key: 2,
          ton: n.balance.tonBalance,
          jettons: n.balance.jettonBalances,
          class: "tokens"
        }, null, 8, ["ton", "jettons"])) : g("", !0)])
      }
    }
  }),
  On = h(Kn, [
    ["__scopeId", "data-v-6315e498"]
  ]),
  Dn = {},
  Wn = {
    class: "pages-wallet-atoms-no-records"
  },
  Ln = {
    class: "label"
  };

function Bn(e, n) {
  const t = P;
  return a(), r("div", Wn, [p(t, {
    name: "note-search",
    class: "icon"
  }), _("div", Ln, f(("t" in e ? e.t : s(i))("wallet.history.no_records")), 1)])
}
const Rn = h(Dn, [
    ["render", Bn],
    ["__scopeId", "data-v-1d0de40b"]
  ]),
  xn = {
    class: "pages-wallet-block-tokens-history"
  },
  Mn = {
    class: "heading"
  },
  Hn = {
    class: "title"
  },
  Yn = {
    key: 0,
    class: "wallet"
  },
  Vn = {
    class: "value"
  },
  Fn = b({
    __name: "TokensHistory",
    props: {
      address: {
        type: Object,
        default: void 0
      }
    },
    setup(e) {
      const t = X(async c => {
        const o = await Q.getTokensHistory(c);
        if (o.err) throw k("Unable to load tokens history");
        return {
          nextPageToken: o.data.nextPageToken,
          items: o.data.actions
        }
      });
      return (c, o) => {
        const l = Rn,
          d = ct,
          v = tt;
        return a(), r("div", xn, [_("div", Mn, [_("div", Hn, f(("t" in c ? c.t : s(i))("wallet.history.title")), 1), e.address ? (a(), r("div", Yn, [o[1] || (o[1] = _("img", {
          src: O,
          alt: "Ton logo"
        }, null, -1)), _("div", Vn, f(e.address.short), 1)])) : g("", !0)]), p(v, {
          onEnd: o[0] || (o[0] = y => s(t).load())
        }, {
          default: T(() => [s(t).isEmpty.value ? (a(), u(l, {
            key: 0,
            class: "no-records"
          })) : (a(), u(d, {
            key: 1,
            history: s(t).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  qn = h(Fn, [
    ["__scopeId", "data-v-55fd4c6d"]
  ]),
  jn = {
    class: "wallet-index-page page"
  };
var _t = (e => (e.WALLET = "wallet", e.POINTS = "points", e.TOKENS_HISTORY = "tokens_history", e))(_t || {});
const zn = b({
    __name: "index",
    setup(e) {
      const n = x(),
        t = St(),
        c = G(),
        o = (() => {
          const v = V("tab", _t),
            y = V("source", Ot);
          return Rt(), {
            page: v,
            source: y
          }
        })(),
        l = R(o.page ?? "wallet");
      n.wallet.walletPageOpen(o.source), F(() => t.wallet.value, v => {
        v.status !== "connected" && (l.value = "wallet")
      }), Ut().initWatcher({
        key: "wallet-page",
        watchFn: () => l.value !== "wallet",
        callback: () => l.value = "wallet"
      });
      const d = N(() => `wallet-${l.value}`);
      return F(d, () => Kt().meta.key = d.value), (v, y) => {
        const I = Ct,
          S = zt,
          U = Gt,
          dt = he,
          ut = ge,
          M = rn,
          pt = On,
          mt = qn;
        return a(), r("div", jn, [s(t).wallet.value.status === "loading" || !s(c).availableInfo.value ? (a(), u(I, {
          key: 0
        })) : s(t).wallet.value.status === "must_reconnect" ? (a(), u(S, {
          key: 1
        })) : (a(), r($, {
          key: 2
        }, [s(t).isAvailable.value ? (a(), r($, {
          key: 1
        }, [s(l) === "wallet" ? (a(), r($, {
          key: 0
        }, [s(t).wallet.value.status === "not_found" ? (a(), r($, {
          key: 0
        }, [p(ut, {
          class: "connect-banner"
        }), s(t).points.value ? (a(), u(M, {
          key: 0,
          points: s(t).points.value,
          notification: s(t).walletNotification.value
        }, null, 8, ["points", "notification"])) : g("", !0)], 64)) : s(t).wallet.value.status === "connected" ? (a(), u(pt, {
          key: 1,
          address: s(t).wallet.value.address,
          balance: s(t).wallet.value.balance,
          notification: s(t).walletNotification.value,
          "onShow:points": y[0] || (y[0] = yt => l.value = "points"),
          "onShow:tokensHistory": y[1] || (y[1] = yt => l.value = "tokens_history")
        }, null, 8, ["address", "balance", "notification"])) : g("", !0)], 64)) : s(l) === "points" ? (a(), r($, {
          key: 1
        }, [s(t).points.value === void 0 ? (a(), u(I, {
          key: 0
        })) : (a(), u(M, {
          key: 1,
          points: s(t).points.value,
          notification: s(t).walletNotification.value
        }, null, 8, ["points", "notification"]))], 64)) : s(l) === "tokens_history" && s(t).wallet.value.status === "connected" ? (a(), u(mt, {
          key: 2,
          address: s(t).wallet.value.address
        }, null, 8, ["address"])) : g("", !0)], 64)) : (a(), r($, {
          key: 0
        }, [s(t).wallet.value.status === "not_found" ? (a(), u(U, {
          key: 0
        })) : s(t).wallet.value.status === "connected" ? (a(), u(dt, {
          key: 1,
          address: s(t).wallet.value.address
        }, null, 8, ["address"])) : g("", !0)], 64))], 64))])
      }
    }
  }),
  rs = h(zn, [
    ["__scopeId", "data-v-46b8e8b3"]
  ]);
export {
  rs as
  default
};