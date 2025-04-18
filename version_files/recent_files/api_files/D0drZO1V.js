import {
  _ as pt
} from "./chImfbDF.js";
import {
  _ as V
} from "./DdCdTu0K.js";
import {
  a4 as k,
  dl as m,
  C as c,
  dm as w,
  d as f,
  bf as U,
  o as a,
  N as u,
  e as o,
  f as h,
  ay as mt,
  az as yt,
  D as T,
  a as _,
  t as v,
  b as p,
  B as ht,
  Y as W,
  _ as E,
  x as L,
  Z as F,
  y as x,
  c as r,
  dn as K,
  dp as vt,
  p as q,
  F as I,
  q as O,
  n as A,
  j as N,
  O as j,
  ap as ft,
  aH as wt,
  T as gt,
  w as R,
  G as g,
  dq as S,
  a5 as z,
  ag as H,
  dr as bt,
  ds as kt,
  X as Q,
  b6 as $t,
  ae as It,
  aq as Nt,
  a9 as Tt,
  $ as Pt,
  ad as M,
  V as Y,
  U as Et,
  bm as At,
  dt as St
} from "./BZz9wj6Z.js";
import {
  _ as C
} from "./CmXKpe7A.js";
import {
  d as P,
  c as Ut,
  b as Kt,
  e as Ot
} from "./C3x39qlh.js";
import {
  u as G,
  _ as Z
} from "./DD1SRB61.js";
import {
  _ as Ct
} from "./UonBRAd7.js";
import {
  c as Dt
} from "./CjrCyY9h.js";
import "./DjC5wntP.js";
import "./FLeABffM.js";
import "./CjF5nbrM.js";
import "./CN6q8GT5.js";
import "./BhOqZG71.js";
import "./OUPAoq0P.js";
import "./DX5DOpJi.js";
const X = t => {
    switch (t.type) {
      case m.TYPE.IN:
        switch (t.kind) {
          case m.KIND_IN.CLAIM_FARMING:
            return c("wallet.history.points.in_farming");
          case m.KIND_IN.CLAIM_TASK:
            return c("wallet.history.points.in_task");
          case m.KIND_IN.CLAIM_REFERRAL:
            return c("wallet.history.points.in_frens");
          case m.KIND_IN.CLAIM_CHECK_IN:
            return c("wallet.history.points.in_daily_rewards");
          case m.KIND_IN.DROP_GAME:
            return c("wallet.history.points.in_drop_game");
          case m.KIND_IN.BLUM_DROP:
            return c("wallet.history.points.in_blum_drop");
          case m.KIND_IN.WALLET_MIGRATION:
            return c("wallet.history.points.in_wallet_migration");
          case m.KIND_IN.MANUAL:
            return c("wallet.history.points.in_manual");
          case m.KIND_IN.MEMEPAD_TOKEN_CREATION:
            return c("wallet.history.points.in_memepad_token_creation");
          case m.KIND_IN.MEMEPAD_LISTED_TOKEN_CREATION:
            return c("wallet.history.points.in_memepad_listed_token_creation");
          case m.KIND_IN.MEMEPAD_TOKEN_TRADING:
            return c("wallet.history.points.in_memepad_token_trading");
          case m.KIND_IN.MEMEPAD_CLAIM_REFERRAL:
            return c("wallet.history.points.in_memepad_claim_referral");
          case m.KIND_IN.BOT_TOKEN_TRADING:
            return c("wallet.history.points.in_bot_token_trading");
          default:
            throw k("Unknown history kind")
        }
      case m.TYPE.OUT:
        switch (t.kind) {
          case m.KIND_OUT.CLAIM_REFERRAL:
            return c("wallet.history.points.out_frens");
          case m.KIND_OUT.DROP_GAME:
            return c("wallet.history.points.out_drop_game");
          case m.KIND_OUT.WITHDRAW_TO_ONCHAIN:
            return c("wallet.history.points.out_withdraw_to_onchain");
          case m.KIND_OUT.MANUAL:
            return c("wallet.history.points.out_manual");
          default:
            throw k("Unknown history kind")
        }
      case m.TYPE.UNKNOWN:
        return c("wallet.history.unknown");
      default:
        throw k("Unknown history type")
    }
  },
  J = t => {
    switch (t.type) {
      case m.TYPE.IN: {
        if (t.payload.inbound) {
          const n = t.payload.inbound.currency.amount.defaultWithSymbol,
            e = t.payload.inbound.currency.isInternal;
          return {
            details: n,
            isInternal: e,
            prefix: "+"
          }
        }
        return
      }
      case m.TYPE.OUT: {
        if (t.payload.outbound) {
          const n = t.payload.outbound.currency.amount.defaultWithSymbol,
            e = t.payload.outbound.currency.isInternal;
          return {
            details: n,
            isInternal: e,
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
  tt = t => {
    var n, e;
    switch (t.type) {
      case m.TYPE.IN:
        return {
          type: "single", icon: (n = t.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case m.TYPE.OUT:
        return {
          type: "single", icon: (e = t.payload.outbound.currency) == null ? void 0 : e.imageUrl
        };
      case m.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  Wt = t => ({
    title: X(t),
    details: J(t),
    icon: tt(t)
  }),
  Lt = {
    title: X,
    details: J,
    icon: tt,
    all: Wt
  },
  et = t => {
    switch (t.type) {
      case w.TYPE.IN:
        return t.payload.inbound.nft ? c("wallet.history.tokens.in_nft") : c("wallet.history.tokens.in");
      case w.TYPE.OUT:
        return t.payload.outbound.nft ? c("wallet.history.tokens.out_nft") : c("wallet.history.tokens.out");
      case w.TYPE.SWAP:
        return c("wallet.history.tokens.swap");
      case w.TYPE.UNQUANTIFIED:
        return (() => {
          switch (t.kind) {
            case w.KIND_UNQUANTIFIED.CONTRACT_DEPLOY:
              return c("wallet.history.tokens.other_contract_deploy");
            case w.KIND_UNQUANTIFIED.CONTRACT_EXEC:
              return c("wallet.history.tokens.other_contract_execution");
            case w.KIND_UNQUANTIFIED.UNSUBSCRIBE:
              return c("wallet.history.tokens.other_unsubscribed");
            case w.KIND_UNQUANTIFIED.DOMAIN_RENEW:
              return c("wallet.history.tokens.other_domain_renew");
            case w.KIND_UNQUANTIFIED.WITHDRAW_STAKE_REQUEST:
              return c("wallet.history.tokens.other_stake_request");
            default:
              throw k("Unknown unquantified history kind")
          }
        })();
      case w.TYPE.UNKNOWN:
        return c("wallet.history.unknown");
      default:
        throw k("Unknown history type")
    }
  },
  nt = t => {
    switch (t.type) {
      case w.TYPE.IN: {
        if (t.payload.inbound.currency) {
          const n = t.payload.inbound.currency.amount.defaultWithSymbol,
            e = t.payload.inbound.currency.isInternal;
          return {
            details: n,
            isInternal: e,
            prefix: "+"
          }
        }
        return
      }
      case w.TYPE.OUT: {
        if (t.payload.outbound.currency) {
          const n = t.payload.outbound.currency.amount.defaultWithSymbol,
            e = t.payload.outbound.currency.isInternal;
          return {
            details: n,
            isInternal: e,
            prefix: "-"
          }
        }
        return
      }
      case w.TYPE.SWAP:
        return {
          details: `${t.payload.outbound.currency.symbol}→${t.payload.inbound.currency.symbol}`, isInternal: !1, prefix: void 0
        };
      case w.TYPE.UNQUANTIFIED:
        return;
      case w.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  ot = t => {
    var n, e;
    switch (t.type) {
      case w.TYPE.IN:
        return {
          type: "single", icon: (n = t.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case w.TYPE.OUT:
        return {
          type: "single", icon: (e = t.payload.outbound.currency) == null ? void 0 : e.imageUrl
        };
      case w.TYPE.SWAP:
        return {
          type: "double", iconFrom: t.payload.outbound.currency.imageUrl, iconTo: t.payload.inbound.currency.imageUrl
        };
      case w.TYPE.UNQUANTIFIED:
        return;
      case w.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  xt = t => ({
    title: et(t),
    details: nt(t),
    icon: ot(t)
  }),
  Bt = {
    title: et,
    details: nt,
    icon: ot,
    all: xt
  },
  Rt = t => t.instance === "point",
  Ht = t => t.instance === "token",
  Mt = (t, n) => {
    if (Rt(t)) return n.point(t);
    if (Ht(t)) return n.token(t);
    throw k("Unknown history instance")
  },
  Yt = f({
    __name: "Reconnect",
    setup(t) {
      const {
        reconnect: n
      } = U();
      return (e, i) => {
        const s = V;
        return a(), u(s, {
          lottie: "animations/Star",
          "icon-size": 116,
          title: ("t" in e ? e.t : o(c))("wallet.reconnect.title"),
          subtitle: ("t" in e ? e.t : o(c))("wallet.reconnect.subtitle"),
          "button-label": ("t" in e ? e.t : o(c))("wallet.reconnect.btn"),
          onButton: i[0] || (i[0] = l => o(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  Vt = h(Yt, [
    ["__scopeId", "data-v-29d5ae4b"]
  ]),
  Ft = f({
    __name: "NotConnected",
    setup(t) {
      const {
        openConnectModal: n
      } = U();
      return (e, i) => {
        const s = V;
        return a(), u(s, {
          lottie: "animations/Unicorn",
          "icon-size": 88,
          title: ("t" in e ? e.t : o(c))("wallet.legacy.not_connected.title"),
          subtitle: ("t" in e ? e.t : o(c))("wallet.legacy.not_connected.subtitle"),
          "button-label": ("t" in e ? e.t : o(c))("wallet.legacy.not_connected.btn"),
          onButton: i[0] || (i[0] = l => o(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  qt = h(Ft, [
    ["__scopeId", "data-v-8fdb824b"]
  ]),
  jt = {
    class: "pages-wallet-label-bottom-sheet"
  },
  zt = {
    class: "address-status"
  },
  Qt = {
    class: "address"
  },
  Gt = {
    class: "status"
  },
  Zt = {
    class: "label"
  },
  Xt = f({
    __name: "LabelBottomSheet",
    props: mt({
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
    setup(t) {
      const n = yt(t, "modelValue"),
        {
          disconnect: e,
          onDisconnected: i
        } = U();
      return i(() => n.value = !1), (s, l) => {
        const d = E,
          y = L,
          b = F;
        return a(), u(b, {
          modelValue: n.value,
          "onUpdate:modelValue": l[1] || (l[1] = $ => n.value = $),
          title: "Wallet"
        }, {
          default: T(() => [_("div", jt, [_("div", zt, [_("div", Qt, v(t.address.short), 1), _("div", Gt, [p(d, {
            name: "circle-check-fill",
            class: "icon"
          }), _("span", Zt, v(("t" in s ? s.t : o(c))("wallet.sheet.active")), 1)])]), p(y, {
            label: ("t" in s ? s.t : o(c))("wallet.sheet.disconnect"),
            type: o(ht).GHOST,
            "is-danger": "",
            size: o(W).LARGE,
            onClick: l[0] || (l[0] = $ => o(e)())
          }, null, 8, ["label", "type", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Jt = h(Xt, [
    ["__scopeId", "data-v-07f164ab"]
  ]),
  te = {
    class: "pages-wallet-label"
  },
  ee = {
    class: "address"
  },
  ne = f({
    __name: "Label",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
      const n = x(!1);
      return (e, i) => {
        const s = Jt;
        return a(), r("div", te, [_("div", {
          class: "label",
          onClick: i[0] || (i[0] = l => n.value = !0)
        }, [i[2] || (i[2] = _("img", {
          src: K,
          alt: "TON logo",
          class: "ton-logo"
        }, null, -1)), _("div", ee, v(t.address.short), 1), i[3] || (i[3] = _("img", {
          src: vt,
          alt: "Arrow down",
          class: "arrow-icon"
        }, null, -1))]), p(s, {
          modelValue: o(n),
          "onUpdate:modelValue": i[1] || (i[1] = l => q(n) ? n.value = l : null),
          address: t.address
        }, null, 8, ["modelValue", "address"])])
      }
    }
  }),
  st = h(ne, [
    ["__scopeId", "data-v-0aed5ea6"]
  ]),
  oe = {
    class: "kit-progress-stepper"
  },
  se = {
    class: "icon-wrapper"
  },
  ae = {
    class: "text"
  },
  le = f({
    __name: "KitProgressStepper",
    props: {
      items: {
        type: Array,
        required: !0
      }
    },
    setup(t) {
      return (n, e) => {
        const i = E;
        return a(), r("div", oe, [(a(!0), r(I, null, O(t.items, s => (a(), r("div", {
          key: s.text,
          class: A(["item", {
            "is-active": s.active
          }])
        }, [_("div", se, [s.active ? (a(), u(i, {
          key: 0,
          name: "circle-check-white",
          class: "icon"
        })) : (a(), u(i, {
          key: 1,
          name: "circle-small",
          class: "icon"
        }))]), _("div", ae, v(s.text), 1)], 2))), 128))])
      }
    }
  }),
  ie = h(le, [
    ["__scopeId", "data-v-c6e84c97"]
  ]),
  ce = {
    class: "pages-wallet-legacy-connected"
  },
  re = {
    class: "container"
  },
  _e = {
    class: "title"
  },
  de = f({
    __name: "Connected",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
      const n = N(() => [{
        active: !0,
        text: c("wallet.legacy.connected.step.ton_connect")
      }, {
        active: !1,
        text: c("wallet.legacy.connected.step.blum_wallet")
      }, {
        active: !1,
        text: c("wallet.legacy.connected.step.wallet_connect")
      }]);
      return (e, i) => {
        const s = j,
          l = ft,
          d = st,
          y = ie;
        return a(), r("div", ce, [p(s, {
          class: "background"
        }), _("div", re, [_("div", _e, v(("t" in e ? e.t : o(c))("wallet.legacy.connected.title")), 1), p(l, {
          name: "animations/MoneyWings",
          size: 80,
          class: "icon"
        }), p(d, {
          address: t.address
        }, null, 8, ["address"]), p(y, {
          items: o(n),
          class: "progress"
        }, null, 8, ["items"])])])
      }
    }
  }),
  ue = h(de, [
    ["__scopeId", "data-v-603fef51"]
  ]),
  pe = {
    class: "pages-wallet-connect-banner"
  },
  me = {
    class: "container"
  },
  ye = ["innerHTML"],
  he = f({
    __name: "ConnectBanner",
    setup(t) {
      const {
        openConnectModal: n
      } = U(wt.WALLET);
      return (e, i) => {
        const s = j,
          l = L;
        return a(), r("div", pe, [_("div", me, [p(s), _("div", {
          class: "title",
          innerHTML: ("t" in e ? e.t : o(c))("wallet.connect_banner.title")
        }, null, 8, ye), p(l, {
          label: ("t" in e ? e.t : o(c))("wallet.connect.btn"),
          size: o(W).SMALL,
          class: "btn",
          onClick: i[0] || (i[0] = d => o(n)())
        }, null, 8, ["label", "size"])])])
      }
    }
  }),
  ve = h(he, [
    ["__scopeId", "data-v-227fb3d9"]
  ]),
  fe = {
    class: "pages-wallet-block-points-fiat-equal"
  },
  we = f({
    __name: "PointsFiatEqual",
    props: {
      value: {
        type: Object,
        default: void 0
      }
    },
    setup(t) {
      return (n, e) => {
        const i = C;
        return a(), r("div", fe, [t.value === void 0 ? (a(), u(i, {
          key: 0,
          class: "skeleton",
          rounded: ""
        })) : (a(), r("div", {
          key: 1,
          class: A(["value", {
            "is-highlighted": t.value.value.greaterThan(0)
          }])
        }, v(t.value.defaultWithSymbol), 3))])
      }
    }
  }),
  ge = h(we, [
    ["__scopeId", "data-v-16763388"]
  ]),
  be = {},
  ke = {
    class: "pages-wallet-atoms-coming-soon"
  },
  $e = {
    class: "label"
  };

function Ie(t, n) {
  const e = E;
  return a(), r("div", ke, [p(e, {
    name: "clock",
    class: "icon"
  }), _("div", $e, v(("t" in t ? t.t : o(c))("wallet.history.coming_soon")), 1)])
}
const Ne = h(be, [
    ["render", Ie],
    ["__scopeId", "data-v-3ac68509"]
  ]),
  Te = ["src"],
  Pe = ["src"],
  Ee = f({
    __name: "HistoryItemIcon",
    props: {
      icon: {}
    },
    setup(t) {
      const n = t,
        e = N(() => {
          if (n.icon === void 0) return [P];
          if (n.icon.type === "single") return [n.icon.icon ?? P];
          if (n.icon.type === "double") return [n.icon.iconFrom ?? P, n.icon.iconTo ?? P];
          throw n.icon, k("Unknown icon type")
        });
      return (i, s) => {
        const l = gt("img-error");
        return a(), r("div", {
          class: A(["pages-wallet-history-item-icon", {
            "is-single": o(e).length === 1,
            "is-double": o(e).length === 2
          }])
        }, [R(_("img", {
          src: o(e)[0],
          alt: "Transaction icon"
        }, null, 8, Te), [
          [l, o(P)]
        ]), o(e).length === 2 ? R((a(), r("img", {
          key: 0,
          src: o(e)[1],
          alt: "Transaction icon"
        }, null, 8, Pe)), [
          [l, o(P)]
        ]) : g("", !0)], 2)
      }
    }
  }),
  Ae = h(Ee, [
    ["__scopeId", "data-v-43176a1b"]
  ]),
  Se = {
    class: "label"
  },
  Ue = f({
    __name: "HistoryItemStatus",
    props: {
      status: {
        type: String,
        required: !0
      }
    },
    setup(t) {
      const n = t,
        e = N(() => {
          switch (n.status) {
            case S.STATUS.PENDING:
              return;
            case S.STATUS.FAILED:
              return {
                icon: "circle-warning-fill", label: "Failed", cls: "is-failed"
              };
            case S.STATUS.OK:
              return {
                icon: "circle-check-fill", label: "Success", cls: "is-success"
              };
            default:
              throw n.status, k("Unknown history status")
          }
        });
      return (i, s) => {
        const l = E;
        return o(e) ? (a(), r("div", {
          key: 0,
          class: A(["pages-wallet-history-item-status", o(e).cls])
        }, [p(l, {
          name: o(e).icon,
          class: "icon"
        }, null, 8, ["name"]), _("div", Se, v(o(e).label), 1)], 2)) : g("", !0)
      }
    }
  }),
  Ke = h(Ue, [
    ["__scopeId", "data-v-14d91734"]
  ]),
  Oe = {
    class: "pages-wallet-history-item"
  },
  Ce = {
    class: "title-with-details"
  },
  De = {
    class: "title"
  },
  We = {
    key: 0,
    class: "details"
  },
  Le = {
    key: 0,
    class: "right-text"
  },
  xe = f({
    __name: "HistoryItem",
    props: {
      historyItem: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
      const n = t,
        e = N(() => Mt(n.historyItem, {
          point: l => ({
            ...Lt.all(l),
            status: l.payload.status
          }),
          token: l => ({
            ...Bt.all(l),
            status: l.payload.status
          })
        })),
        i = N(() => {
          if (!(!e.value.details || e.value.details.isInternal)) return e.value.details.details
        }),
        s = N(() => {
          if (e.value.details && e.value.details.isInternal) {
            let l = e.value.details.details;
            return e.value.details.prefix && (l = `${e.value.details.prefix}${l}`), {
              type: "text",
              text: l
            }
          }
          if (e.value.status !== S.STATUS.OK) return {
            type: "status",
            status: e.value.status
          }
        });
      return (l, d) => {
        const y = Ae,
          b = Ke;
        return a(), r("div", Oe, [p(y, {
          icon: o(e).icon
        }, null, 8, ["icon"]), _("div", Ce, [_("div", De, v(o(e).title), 1), o(i) ? (a(), r("div", We, v(o(i)), 1)) : g("", !0)]), o(s) ? (a(), r(I, {
          key: 0
        }, [o(s).type === "text" ? (a(), r("div", Le, v(o(s).text), 1)) : o(s).type === "status" ? (a(), u(b, {
          key: 1,
          status: o(s).status,
          class: "status"
        }, null, 8, ["status"])) : g("", !0)], 64)) : g("", !0)])
      }
    }
  }),
  Be = h(xe, [
    ["__scopeId", "data-v-6587f464"]
  ]),
  Re = {
    class: "pages-wallet-history"
  },
  He = {
    key: 0,
    class: "date"
  },
  Me = f({
    __name: "History",
    props: {
      history: {
        type: Array,
        required: !0
      }
    },
    setup(t) {
      return (n, e) => {
        const i = Be;
        return a(), r("div", Re, [(a(!0), r(I, null, O(t.history, (s, l) => (a(), r(I, {
          key: l
        }, [l === 0 || t.history[l - 1].date.stamp !== t.history[l].date.stamp ? (a(), r("div", He, v(s.date.formatted), 1)) : g("", !0), p(i, {
          "history-item": s
        }, null, 8, ["history-item"])], 64))), 128))])
      }
    }
  }),
  at = h(Me, [
    ["__scopeId", "data-v-edabb2b5"]
  ]),
  Ye = {
    class: "pages-wallet-points-history"
  },
  Ve = f({
    __name: "PointsHistory",
    setup(t) {
      const e = G(async i => {
        const s = await z.getPointsHistory(i);
        if (s.err) throw k("Unable to load points history");
        return {
          nextPageToken: s.data.nextPageToken,
          items: s.data.actions
        }
      });
      return (i, s) => {
        const l = Ne,
          d = at,
          y = Z;
        return a(), r("div", Ye, [p(y, {
          onEnd: s[0] || (s[0] = b => o(e).load())
        }, {
          default: T(() => [o(e).isEmpty.value ? (a(), u(l, {
            key: 0
          })) : (a(), u(d, {
            key: 1,
            history: o(e).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  Fe = h(Ve, [
    ["__scopeId", "data-v-7c645fab"]
  ]),
  qe = {
    class: "kit-label-with-bottom-sheet"
  },
  je = {
    key: 0,
    class: "image"
  },
  ze = ["src"],
  Qe = {
    class: "text"
  },
  Ge = f({
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
    setup(t) {
      const n = x(!1),
        e = () => n.value = !1;
      return (i, s) => {
        const l = E,
          d = F;
        return a(), r("div", qe, [_("div", {
          class: A(["label", `is-${t.type}`]),
          onClick: s[0] || (s[0] = y => n.value = !0)
        }, [t.image || i.$slots.image ? (a(), r("div", je, [H(i.$slots, "image", {}, () => [t.image ? (a(), r("img", {
          key: 0,
          src: t.image,
          alt: "Image"
        }, null, 8, ze)) : g("", !0)], !0)])) : g("", !0), _("div", Qe, v(t.text), 1), p(l, {
          name: "chevron-right",
          class: "icon"
        })], 2), p(d, {
          modelValue: o(n),
          "onUpdate:modelValue": s[1] || (s[1] = y => q(n) ? n.value = y : null),
          title: t.title,
          banner: t.banner
        }, {
          default: T(() => [H(i.$slots, "default", {
            close: e
          }, void 0, !0)]),
          _: 3
        }, 8, ["modelValue", "title", "banner"])])
      }
    }
  }),
  lt = h(Ge, [
    ["__scopeId", "data-v-e9eaa47e"]
  ]),
  Ze = {};

function Xe(t, n) {
  const e = Ut,
    i = lt;
  return a(), u(i, {
    text: ("t" in t ? t.t : o(c))("wallet.drop.notification.label"),
    class: "pages-wallet-block-details-soon-notification-with-label"
  }, {
    image: T(() => n[0] || (n[0] = [_("img", {
      class: "img",
      src: K,
      alt: "Ton logo"
    }, null, -1), _("img", {
      class: "img",
      src: bt,
      alt: "Notcoin logo"
    }, null, -1)])),
    default: T(({
      close: s
    }) => [p(e, {
      onClose: l => s()
    }, null, 8, ["onClose"])]),
    _: 1
  }, 8, ["text"])
}
const Je = h(Ze, [
    ["render", Xe],
    ["__scopeId", "data-v-eb9556ff"]
  ]),
  tn = {
    class: "pages-wallet-block-points"
  },
  en = {
    class: "heading"
  },
  nn = {
    class: "title"
  },
  on = f({
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
    setup(t) {
      const n = N(() => [{
        key: "balances",
        label: c("wallet.points.tabs.balances")
      }, {
        key: "history",
        label: c("wallet.points.tabs.history")
      }]);
      return (e, i) => {
        const s = ge,
          l = Fe,
          d = C,
          y = Je,
          b = Kt,
          $ = Ct;
        return a(), r("div", tn, [_("div", en, [_("div", nn, v(("t" in e ? e.t : o(c))("wallet.points.title")), 1), p(s, {
          value: t.points.totalFiatValue.USD
        }, null, 8, ["value"])]), p($, {
          tabs: o(n),
          class: "tabs"
        }, {
          history: T(() => [p(l, {
            class: "history"
          })]),
          balances: T(() => [t.notification === void 0 ? (a(), u(d, {
            key: 0,
            class: "notification-skeleton notification"
          })) : t.notification === "default" ? (a(), u(y, {
            key: 1,
            class: "notification"
          })) : g("", !0), p(b, {
            points: t.points.points
          }, null, 8, ["points"])]),
          _: 1
        }, 8, ["tabs"])])
      }
    }
  }),
  sn = h(on, [
    ["__scopeId", "data-v-013937d8"]
  ]),
  an = {
    class: "pages-wallet-connected-banner"
  },
  ln = {
    key: 1,
    class: "balance"
  },
  cn = {
    class: "value"
  },
  rn = {
    key: 2,
    class: "last-updated"
  },
  _n = f({
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
    setup(t) {
      const n = t,
        e = N(() => {
          if (n.updatedAt && Date.now() - n.updatedAt.getTime() > 3e5) return kt(n.updatedAt)
        });
      return (i, s) => {
        const l = st,
          d = C;
        return a(), r("div", an, [p(l, {
          address: t.address
        }, null, 8, ["address"]), t.fiatValue === void 0 || t.fiatValue.USD == null ? (a(), u(d, {
          key: 0,
          class: "skeleton"
        })) : (a(), r("div", ln, [s[0] || (s[0] = _("span", {
          class: "symbol"
        }, "$", -1)), _("span", cn, v(t.fiatValue.USD.default), 1)])), o(e) ? (a(), r("div", rn, v(("t" in i ? i.t : o(c))("wallet.connected.last_updated", {
          updatedAtLabel: o(e)
        })), 1)) : g("", !0)])
      }
    }
  }),
  dn = h(_n, [
    ["__scopeId", "data-v-6e2f0c44"]
  ]),
  un = {
    class: "pages-wallet-controls"
  },
  pn = ["onClick"],
  mn = {
    class: "icon"
  },
  yn = ["src", "alt"],
  hn = {
    class: "label"
  },
  vn = f({
    __name: "Controls",
    emits: ["show:points", "show:tokens-history"],
    setup(t, {
      emit: n
    }) {
      const e = n,
        i = N(() => [{
          label: c("wallet.controls.receive"),
          icon: "arrow-down",
          disabled: !0
        }, {
          label: c("wallet.controls.send"),
          icon: "arrow-up",
          disabled: !0
        }, {
          label: c("wallet.controls.history"),
          icon: "clock",
          onClick: () => e("show:tokens-history")
        }, {
          label: c("wallet.controls.points"),
          icon: "leaf",
          onClick: () => e("show:points")
        }]);
      return (s, l) => (a(), r("div", un, [(a(!0), r(I, null, O(o(i), (d, y) => (a(), r("button", {
        key: y,
        class: A(["control reset", {
          "is-disabled": d.disabled
        }]),
        onClick: b => {
          var $;
          return ($ = d.onClick) == null ? void 0 : $.call(d)
        }
      }, [_("div", mn, [_("img", {
        src: ("imgResolver" in s ? s.imgResolver : o(Q))(d.icon, "svg"),
        alt: `${d.label} icon`
      }, null, 8, yn)]), _("div", hn, v(d.label), 1)], 10, pn))), 128))]))
    }
  }),
  fn = h(vn, [
    ["__scopeId", "data-v-2fa06ff8"]
  ]),
  wn = {
    class: "pages-wallet-block-tokens-only-ton-notification"
  },
  gn = {
    class: "title"
  },
  bn = {
    class: "text"
  },
  kn = f({
    __name: "TokensOnlyTonNotification",
    setup(t) {
      return (n, e) => {
        const i = L,
          s = lt;
        return a(), u(s, {
          text: ("t" in n ? n.t : o(c))("wallet.only_ton_notification.label"),
          image: ("imgResolver" in n ? n.imgResolver : o(Q))("ton-logo", "svg")
        }, {
          default: T(({
            close: l
          }) => [_("div", wn, [e[0] || (e[0] = _("img", {
            src: K,
            alt: "Ton logo"
          }, null, -1)), _("div", gn, v(("t" in n ? n.t : o(c))("wallet.only_ton_notification.title")), 1), _("div", bn, v(("t" in n ? n.t : o(c))("wallet.only_ton_notification.text")), 1), p(i, {
            label: ("t" in n ? n.t : o(c))("base.got_it"),
            fill: "",
            class: "button",
            size: o(W).LARGE,
            onClick: l
          }, null, 8, ["label", "size", "onClick"])])]),
          _: 1
        }, 8, ["text", "image"])
      }
    }
  }),
  $n = h(kn, [
    ["__scopeId", "data-v-0315755f"]
  ]),
  In = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_26695_20949)'%3e%3crect%20width='64'%20height='64'%20rx='32'%20fill='%230097EA'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.0565%2021C19.9024%2021%2019.1806%2022.2489%2019.7569%2023.2489L30%2041.0238V21H21.0565ZM34%2021V41.0238L44.2431%2023.2489C44.8194%2022.2489%2044.0976%2021%2042.9435%2021H34ZM16.2911%2025.2461C14.1782%2021.5795%2016.8246%2017%2021.0565%2017H42.9435C47.1754%2017%2049.8218%2021.5795%2047.7088%2025.2461L33.7329%2049.4986C33.3758%2050.1182%2032.7151%2050.5%2032%2050.5C31.2849%2050.5%2030.6242%2050.1182%2030.2671%2049.4986L16.2911%2025.2461Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_26695_20949'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Nn = {
    class: "pages-wallet-asset-tokens"
  },
  Tn = f({
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
    setup(t) {
      const n = t,
        e = N(() => {
          const i = {
              id: n.ton.currencyId,
              name: "Toncoin",
              symbol: "TON",
              balance: n.ton.balance,
              fiat: n.ton.fiatValue,
              imageUrl: In
            },
            s = n.jettons.map(l => ({
              id: l.currencyId,
              name: l.name,
              symbol: l.symbol,
              balance: l.balance,
              fiat: l.fiatValue,
              imageUrl: $t(l.imageUrl),
              pnlPercent: l.pnlPercent,
              link: l.memepadShortname && It().resolve({
                name: "memepad-jetton-shortname",
                params: {
                  shortname: l.memepadShortname
                }
              }).href
            }));
          return [i, ...s]
        });
      return (i, s) => {
        const l = Ot;
        return a(), r("div", Nn, [(a(!0), r(I, null, O(o(e), d => (a(), u(l, Nt({
          key: d.id,
          ref_for: !0
        }, d), null, 16))), 128))])
      }
    }
  }),
  Pn = h(Tn, [
    ["__scopeId", "data-v-dbb9f591"]
  ]),
  En = {
    class: "pages-wallet-block-tokens"
  },
  An = f({
    __name: "Tokens",
    props: {
      address: {},
      balance: {},
      notification: {}
    },
    emits: ["show:points", "show:tokens-history"],
    setup(t) {
      return (n, e) => {
        var b, $;
        const i = dn,
          s = fn,
          l = C,
          d = $n,
          y = Pn;
        return a(), r("div", En, [p(i, {
          address: n.address,
          "fiat-value": (b = n.balance) == null ? void 0 : b.totalFiatValue,
          "updated-at": ($ = n.balance) == null ? void 0 : $.updatedAt
        }, null, 8, ["address", "fiat-value", "updated-at"]), p(s, {
          "onShow:points": e[0] || (e[0] = D => n.$emit("show:points")),
          "onShow:tokensHistory": e[1] || (e[1] = D => n.$emit("show:tokens-history"))
        }), n.notification === void 0 ? (a(), u(l, {
          key: 0,
          class: "notification-skeleton notification"
        })) : n.notification === "default" ? (a(), u(d, {
          key: 1,
          class: "notification"
        })) : g("", !0), n.balance ? (a(), u(y, {
          key: 2,
          ton: n.balance.tonBalance,
          jettons: n.balance.jettonBalances,
          class: "tokens"
        }, null, 8, ["ton", "jettons"])) : g("", !0)])
      }
    }
  }),
  Sn = h(An, [
    ["__scopeId", "data-v-6315e498"]
  ]),
  Un = {},
  Kn = {
    class: "pages-wallet-atoms-no-records"
  },
  On = {
    class: "label"
  };

function Cn(t, n) {
  const e = E;
  return a(), r("div", Kn, [p(e, {
    name: "note-search",
    class: "icon"
  }), _("div", On, v(("t" in t ? t.t : o(c))("wallet.history.no_records")), 1)])
}
const Dn = h(Un, [
    ["render", Cn],
    ["__scopeId", "data-v-1d0de40b"]
  ]),
  Wn = {
    class: "pages-wallet-block-tokens-history"
  },
  Ln = {
    class: "heading"
  },
  xn = {
    class: "title"
  },
  Bn = {
    key: 0,
    class: "wallet"
  },
  Rn = {
    class: "value"
  },
  Hn = f({
    __name: "TokensHistory",
    props: {
      address: {
        type: Object,
        default: void 0
      }
    },
    setup(t) {
      const e = G(async i => {
        const s = await z.getTokensHistory(i);
        if (s.err) throw k("Unable to load tokens history");
        return {
          nextPageToken: s.data.nextPageToken,
          items: s.data.actions
        }
      });
      return (i, s) => {
        const l = Dn,
          d = at,
          y = Z;
        return a(), r("div", Wn, [_("div", Ln, [_("div", xn, v(("t" in i ? i.t : o(c))("wallet.history.title")), 1), t.address ? (a(), r("div", Bn, [s[1] || (s[1] = _("img", {
          src: K,
          alt: "Ton logo"
        }, null, -1)), _("div", Rn, v(t.address.short), 1)])) : g("", !0)]), p(y, {
          onEnd: s[0] || (s[0] = b => o(e).load())
        }, {
          default: T(() => [o(e).isEmpty.value ? (a(), u(l, {
            key: 0,
            class: "no-records"
          })) : (a(), u(d, {
            key: 1,
            history: o(e).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  Mn = h(Hn, [
    ["__scopeId", "data-v-55fd4c6d"]
  ]),
  Yn = {
    class: "wallet-index-page page"
  };
var it = (t => (t.WALLET = "wallet", t.POINTS = "points", t.TOKENS_HISTORY = "tokens_history", t))(it || {});
const Vn = f({
    __name: "index",
    setup(t) {
      const n = Tt(),
        e = Pt(),
        i = (() => {
          const d = M("tab", it),
            y = M("source", St);
          return Dt(), {
            page: d,
            source: y
          }
        })(),
        s = x(i.page ?? "wallet");
      n.wallet.walletPageOpen(i.source), Y(() => e.wallet.value, d => {
        d.status !== "connected" && (s.value = "wallet")
      }), Et().initWatcher({
        key: "wallet-page",
        watchFn: () => s.value !== "wallet",
        callback: () => s.value = "wallet"
      });
      const l = N(() => `wallet-${s.value}`);
      return Y(l, () => At().meta.key = l.value), (d, y) => {
        const b = pt,
          $ = Vt,
          D = qt,
          ct = ue,
          rt = ve,
          B = sn,
          _t = Sn,
          dt = Mn;
        return a(), r("div", Yn, [o(e).wallet.value.status === "loading" ? (a(), u(b, {
          key: 0
        })) : o(e).wallet.value.status === "must_reconnect" ? (a(), u($, {
          key: 1
        })) : (a(), r(I, {
          key: 2
        }, [o(e).isAvailable.value ? (a(), r(I, {
          key: 1
        }, [o(s) === "wallet" ? (a(), r(I, {
          key: 0
        }, [o(e).wallet.value.status === "not_found" ? (a(), r(I, {
          key: 0
        }, [p(rt, {
          class: "connect-banner"
        }), o(e).points.value ? (a(), u(B, {
          key: 0,
          points: o(e).points.value,
          notification: o(e).walletNotification.value
        }, null, 8, ["points", "notification"])) : g("", !0)], 64)) : o(e).wallet.value.status === "connected" ? (a(), u(_t, {
          key: 1,
          address: o(e).wallet.value.address,
          balance: o(e).wallet.value.balance,
          notification: o(e).walletNotification.value,
          "onShow:points": y[0] || (y[0] = ut => s.value = "points"),
          "onShow:tokensHistory": y[1] || (y[1] = ut => s.value = "tokens_history")
        }, null, 8, ["address", "balance", "notification"])) : g("", !0)], 64)) : o(s) === "points" ? (a(), r(I, {
          key: 1
        }, [o(e).points.value === void 0 ? (a(), u(b, {
          key: 0
        })) : (a(), u(B, {
          key: 1,
          points: o(e).points.value,
          notification: o(e).walletNotification.value
        }, null, 8, ["points", "notification"]))], 64)) : o(s) === "tokens_history" && o(e).wallet.value.status === "connected" ? (a(), u(dt, {
          key: 2,
          address: o(e).wallet.value.address
        }, null, 8, ["address"])) : g("", !0)], 64)) : (a(), r(I, {
          key: 0
        }, [o(e).wallet.value.status === "not_found" ? (a(), u(D, {
          key: 0
        })) : o(e).wallet.value.status === "connected" ? (a(), u(ct, {
          key: 1,
          address: o(e).wallet.value.address
        }, null, 8, ["address"])) : g("", !0)], 64))], 64))])
      }
    }
  }),
  lo = h(Vn, [
    ["__scopeId", "data-v-be062c2b"]
  ]);
export {
  lo as
  default
};