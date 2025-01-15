import {
  _ as yt
} from "./CNL_pWrR.js";
import {
  _ as V
} from "./DDVmOUCQ.js";
import {
  a2 as k,
  cP as h,
  z as c,
  cQ as b,
  d as f,
  a_ as U,
  o as a,
  G as u,
  e as o,
  f as y,
  al as ht,
  am as vt,
  H as T,
  a as d,
  t as v,
  b as p,
  B as ft,
  V as Y,
  _ as E,
  x as F,
  aH as q,
  K as x,
  c as r,
  cR as A,
  cS as bt,
  p as j,
  F as I,
  q as K,
  n as C,
  j as N,
  ab as gt,
  aq as wt,
  N as kt,
  w as R,
  D as w,
  cT as S,
  W as Q,
  bi as B,
  cU as $t,
  cV as It,
  ak as z,
  aN as Nt,
  ac as Tt,
  Z as Pt,
  O as Et,
  b8 as H,
  P as D,
  cW as Ct,
  Q as M
} from "./DrQ2shF8.js";
import {
  _ as G
} from "./C3TOUlyX.js";
import {
  _ as O
} from "./BkLk__C8.js";
import {
  d as P
} from "./DaCHxoB5.js";
import {
  u as Z,
  _ as J
} from "./CAjIyiXW.js";
import {
  c as St,
  b as Ut,
  d as At
} from "./1RQYThKo.js";
import {
  _ as Kt
} from "./Y9l67QMs.js";
import {
  c as Ot
} from "./DPbxm6ol.js";
import "./D6AzFnUg.js";
import "./BI4_OO37.js";
import "./BfQOLljH.js";
import "./CiodtMOB.js";
import "./D670qHzq.js";
import "./DtKicT37.js";
import "./C5fdfC5K.js";
import "./CamKU6Ja.js";
const X = t => {
    switch (t.type) {
      case h.TYPE.IN:
        switch (t.kind) {
          case h.KIND_IN.CLAIM_FARMING:
            return c("wallet.history.points.in_farming");
          case h.KIND_IN.CLAIM_TASK:
            return c("wallet.history.points.in_task");
          case h.KIND_IN.CLAIM_REFERRAL:
            return c("wallet.history.points.in_frens");
          case h.KIND_IN.CLAIM_CHECK_IN:
            return c("wallet.history.points.in_daily_rewards");
          case h.KIND_IN.DROP_GAME:
            return c("wallet.history.points.in_drop_game");
          case h.KIND_IN.BLUM_DROP:
            return c("wallet.history.points.in_blum_drop");
          case h.KIND_IN.WALLET_MIGRATION:
            return c("wallet.history.points.in_wallet_migration");
          case h.KIND_IN.MANUAL:
            return c("wallet.history.points.in_manual");
          case h.KIND_IN.MEMEPAD_TOKEN_CREATION:
            return c("wallet.history.points.in_memepad_token_creation");
          case h.KIND_IN.MEMEPAD_LISTED_TOKEN_CREATION:
            return c("wallet.history.points.in_memepad_listed_token_creation");
          case h.KIND_IN.MEMEPAD_TOKEN_TRADING:
            return c("wallet.history.points.in_memepad_token_trading");
          case h.KIND_IN.MEMEPAD_CLAIM_REFERRAL:
            return c("wallet.history.points.in_memepad_claim_referral");
          default:
            throw k("Unknown history kind")
        }
      case h.TYPE.OUT:
        switch (t.kind) {
          case h.KIND_OUT.CLAIM_REFERRAL:
            return c("wallet.history.points.out_frens");
          case h.KIND_OUT.DROP_GAME:
            return c("wallet.history.points.out_drop_game");
          case h.KIND_OUT.WITHDRAW_TO_ONCHAIN:
            return c("wallet.history.points.out_withdraw_to_onchain");
          default:
            throw k("Unknown history kind")
        }
      case h.TYPE.UNKNOWN:
        return c("wallet.history.unknown");
      default:
        throw k("Unknown history type")
    }
  },
  tt = t => {
    switch (t.type) {
      case h.TYPE.IN: {
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
      case h.TYPE.OUT: {
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
      case h.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  et = t => {
    var n, e;
    switch (t.type) {
      case h.TYPE.IN:
        return {
          type: "single", icon: (n = t.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case h.TYPE.OUT:
        return {
          type: "single", icon: (e = t.payload.outbound.currency) == null ? void 0 : e.imageUrl
        };
      case h.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  Wt = t => ({
    title: X(t),
    details: tt(t),
    icon: et(t)
  }),
  Dt = {
    title: X,
    details: tt,
    icon: et,
    all: Wt
  },
  nt = t => {
    switch (t.type) {
      case b.TYPE.IN:
        return t.payload.inbound.nft ? c("wallet.history.tokens.in_nft") : c("wallet.history.tokens.in");
      case b.TYPE.OUT:
        return t.payload.outbound.nft ? c("wallet.history.tokens.out_nft") : c("wallet.history.tokens.out");
      case b.TYPE.SWAP:
        return c("wallet.history.tokens.swap");
      case b.TYPE.UNQUANTIFIED:
        return (() => {
          switch (t.kind) {
            case b.KIND_UNQUANTIFIED.CONTRACT_DEPLOY:
              return c("wallet.history.tokens.other_contract_deploy");
            case b.KIND_UNQUANTIFIED.CONTRACT_EXEC:
              return c("wallet.history.tokens.other_contract_execution");
            case b.KIND_UNQUANTIFIED.UNSUBSCRIBE:
              return c("wallet.history.tokens.other_unsubscribed");
            case b.KIND_UNQUANTIFIED.DOMAIN_RENEW:
              return c("wallet.history.tokens.other_domain_renew");
            case b.KIND_UNQUANTIFIED.WITHDRAW_STAKE_REQUEST:
              return c("wallet.history.tokens.other_stake_request");
            default:
              throw k("Unknown unquantified history kind")
          }
        })();
      case b.TYPE.UNKNOWN:
        return c("wallet.history.unknown");
      default:
        throw k("Unknown history type")
    }
  },
  ot = t => {
    switch (t.type) {
      case b.TYPE.IN: {
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
      case b.TYPE.OUT: {
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
      case b.TYPE.SWAP:
        return {
          details: `${t.payload.outbound.currency.symbol}→${t.payload.inbound.currency.symbol}`, isInternal: !1, prefix: void 0
        };
      case b.TYPE.UNQUANTIFIED:
        return;
      case b.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  st = t => {
    var n, e;
    switch (t.type) {
      case b.TYPE.IN:
        return {
          type: "single", icon: (n = t.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case b.TYPE.OUT:
        return {
          type: "single", icon: (e = t.payload.outbound.currency) == null ? void 0 : e.imageUrl
        };
      case b.TYPE.SWAP:
        return {
          type: "double", iconFrom: t.payload.outbound.currency.imageUrl, iconTo: t.payload.inbound.currency.imageUrl
        };
      case b.TYPE.UNQUANTIFIED:
        return;
      case b.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  xt = t => ({
    title: nt(t),
    details: ot(t),
    icon: st(t)
  }),
  Lt = {
    title: nt,
    details: ot,
    icon: st,
    all: xt
  },
  Rt = t => t.instance === "point",
  Bt = t => t.instance === "token",
  Ht = (t, n) => {
    if (Rt(t)) return n.point(t);
    if (Bt(t)) return n.token(t);
    throw k("Unknown history instance")
  },
  Mt = f({
    __name: "Reconnect",
    setup(t) {
      const {
        reconnect: n
      } = U();
      return (e, l) => {
        const s = V;
        return a(), u(s, {
          lottie: "animations/Star",
          "icon-size": 116,
          title: ("t" in e ? e.t : o(c))("wallet.reconnect.title"),
          subtitle: ("t" in e ? e.t : o(c))("wallet.reconnect.subtitle"),
          "button-label": ("t" in e ? e.t : o(c))("wallet.reconnect.btn"),
          onButton: l[0] || (l[0] = i => o(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  Vt = y(Mt, [
    ["__scopeId", "data-v-29d5ae4b"]
  ]),
  Yt = f({
    __name: "NotConnected",
    setup(t) {
      const {
        openConnectModal: n
      } = U();
      return (e, l) => {
        const s = V;
        return a(), u(s, {
          lottie: "animations/Unicorn",
          "icon-size": 88,
          title: ("t" in e ? e.t : o(c))("wallet.legacy.not_connected.title"),
          subtitle: ("t" in e ? e.t : o(c))("wallet.legacy.not_connected.subtitle"),
          "button-label": ("t" in e ? e.t : o(c))("wallet.legacy.not_connected.btn"),
          onButton: l[0] || (l[0] = i => o(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  Ft = y(Yt, [
    ["__scopeId", "data-v-8fdb824b"]
  ]),
  qt = {
    class: "pages-wallet-label-bottom-sheet"
  },
  jt = {
    class: "address-status"
  },
  Qt = {
    class: "address"
  },
  zt = {
    class: "status"
  },
  Gt = {
    class: "label"
  },
  Zt = f({
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
    setup(t) {
      const n = vt(t, "modelValue"),
        {
          disconnect: e,
          onDisconnected: l
        } = U();
      return l(() => n.value = !1), (s, i) => {
        const _ = E,
          m = F,
          g = q;
        return a(), u(g, {
          modelValue: n.value,
          "onUpdate:modelValue": i[1] || (i[1] = $ => n.value = $),
          title: "Wallet"
        }, {
          default: T(() => [d("div", qt, [d("div", jt, [d("div", Qt, v(t.address.short), 1), d("div", zt, [p(_, {
            name: "circle-check-fill",
            class: "icon"
          }), d("span", Gt, v(("t" in s ? s.t : o(c))("wallet.sheet.active")), 1)])]), p(m, {
            label: ("t" in s ? s.t : o(c))("wallet.sheet.disconnect"),
            type: o(ft).GHOST,
            "is-danger": "",
            size: o(Y).LARGE,
            onClick: i[0] || (i[0] = $ => o(e)())
          }, null, 8, ["label", "type", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Jt = y(Zt, [
    ["__scopeId", "data-v-07f164ab"]
  ]),
  Xt = {
    class: "pages-wallet-label"
  },
  te = {
    class: "address"
  },
  ee = f({
    __name: "Label",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
      const n = x(!1);
      return (e, l) => {
        const s = Jt;
        return a(), r("div", Xt, [d("div", {
          class: "label",
          onClick: l[0] || (l[0] = i => n.value = !0)
        }, [l[2] || (l[2] = d("img", {
          src: A,
          alt: "TON logo",
          class: "ton-logo"
        }, null, -1)), d("div", te, v(t.address.short), 1), l[3] || (l[3] = d("img", {
          src: bt,
          alt: "Arrow down",
          class: "arrow-icon"
        }, null, -1))]), p(s, {
          modelValue: o(n),
          "onUpdate:modelValue": l[1] || (l[1] = i => j(n) ? n.value = i : null),
          address: t.address
        }, null, 8, ["modelValue", "address"])])
      }
    }
  }),
  at = y(ee, [
    ["__scopeId", "data-v-0aed5ea6"]
  ]),
  ne = {
    class: "kit-progress-stepper"
  },
  oe = {
    class: "icon-wrapper"
  },
  se = {
    class: "text"
  },
  ae = f({
    __name: "KitProgressStepper",
    props: {
      items: {
        type: Array,
        required: !0
      }
    },
    setup(t) {
      return (n, e) => {
        const l = E;
        return a(), r("div", ne, [(a(!0), r(I, null, K(t.items, s => (a(), r("div", {
          key: s.text,
          class: C(["item", {
            "is-active": s.active
          }])
        }, [d("div", oe, [s.active ? (a(), u(l, {
          key: 0,
          name: "circle-check-white",
          class: "icon"
        })) : (a(), u(l, {
          key: 1,
          name: "circle-small",
          class: "icon"
        }))]), d("div", se, v(s.text), 1)], 2))), 128))])
      }
    }
  }),
  le = y(ae, [
    ["__scopeId", "data-v-c6e84c97"]
  ]),
  ie = {
    class: "pages-wallet-legacy-connected"
  },
  ce = {
    class: "container"
  },
  re = {
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
      return (e, l) => {
        const s = G,
          i = gt,
          _ = at,
          m = le;
        return a(), r("div", ie, [p(s, {
          class: "background"
        }), d("div", ce, [d("div", re, v(("t" in e ? e.t : o(c))("wallet.legacy.connected.title")), 1), p(i, {
          name: "animations/MoneyWings",
          size: 80,
          class: "icon"
        }), p(_, {
          address: t.address
        }, null, 8, ["address"]), p(m, {
          items: o(n),
          class: "progress"
        }, null, 8, ["items"])])])
      }
    }
  }),
  _e = y(de, [
    ["__scopeId", "data-v-bd91e87c"]
  ]),
  ue = {
    class: "pages-wallet-connect-banner"
  },
  pe = {
    class: "container"
  },
  me = ["innerHTML"],
  ye = f({
    __name: "ConnectBanner",
    setup(t) {
      const {
        openConnectModal: n
      } = U(wt.WALLET);
      return (e, l) => {
        const s = G;
        return a(), r("div", ue, [p(s, {
          class: "background"
        }), d("div", pe, [d("div", {
          class: "title",
          innerHTML: ("t" in e ? e.t : o(c))("wallet.connect_banner.title")
        }, null, 8, me), d("button", {
          class: "btn reset",
          onClick: l[0] || (l[0] = i => o(n)())
        }, v(("t" in e ? e.t : o(c))("wallet.connect_banner.btn")), 1)])])
      }
    }
  }),
  he = y(ye, [
    ["__scopeId", "data-v-1c6e86b3"]
  ]),
  ve = {
    class: "pages-wallet-block-points-fiat-equal"
  },
  fe = f({
    __name: "PointsFiatEqual",
    props: {
      value: {
        type: Object,
        default: void 0
      }
    },
    setup(t) {
      return (n, e) => {
        const l = O;
        return a(), r("div", ve, [t.value === void 0 ? (a(), u(l, {
          key: 0,
          class: "skeleton",
          rounded: ""
        })) : (a(), r("div", {
          key: 1,
          class: C(["value", {
            "is-highlighted": t.value.value.greaterThan(0)
          }])
        }, v(t.value.defaultWithSymbol), 3))])
      }
    }
  }),
  be = y(fe, [
    ["__scopeId", "data-v-16763388"]
  ]),
  ge = {},
  we = {
    class: "pages-wallet-atoms-coming-soon"
  },
  ke = {
    class: "label"
  };

function $e(t, n) {
  const e = E;
  return a(), r("div", we, [p(e, {
    name: "clock",
    class: "icon"
  }), d("div", ke, v(("t" in t ? t.t : o(c))("wallet.history.coming_soon")), 1)])
}
const Ie = y(ge, [
    ["render", $e],
    ["__scopeId", "data-v-3ac68509"]
  ]),
  Ne = ["src"],
  Te = ["src"],
  Pe = f({
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
      return (l, s) => {
        const i = kt("img-error");
        return a(), r("div", {
          class: C(["pages-wallet-history-item-icon", {
            "is-single": o(e).length === 1,
            "is-double": o(e).length === 2
          }])
        }, [R(d("img", {
          src: o(e)[0],
          alt: "Transaction icon"
        }, null, 8, Ne), [
          [i, o(P)]
        ]), o(e).length === 2 ? R((a(), r("img", {
          key: 0,
          src: o(e)[1],
          alt: "Transaction icon"
        }, null, 8, Te)), [
          [i, o(P)]
        ]) : w("", !0)], 2)
      }
    }
  }),
  Ee = y(Pe, [
    ["__scopeId", "data-v-43176a1b"]
  ]),
  Ce = {
    class: "label"
  },
  Se = f({
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
      return (l, s) => {
        const i = E;
        return o(e) ? (a(), r("div", {
          key: 0,
          class: C(["pages-wallet-history-item-status", o(e).cls])
        }, [p(i, {
          name: o(e).icon,
          class: "icon"
        }, null, 8, ["name"]), d("div", Ce, v(o(e).label), 1)], 2)) : w("", !0)
      }
    }
  }),
  Ue = y(Se, [
    ["__scopeId", "data-v-14d91734"]
  ]),
  Ae = {
    class: "pages-wallet-history-item"
  },
  Ke = {
    class: "title-with-details"
  },
  Oe = {
    class: "title"
  },
  We = {
    key: 0,
    class: "details"
  },
  De = {
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
        e = N(() => Ht(n.historyItem, {
          point: i => ({
            ...Dt.all(i),
            status: i.payload.status
          }),
          token: i => ({
            ...Lt.all(i),
            status: i.payload.status
          })
        })),
        l = N(() => {
          if (!(!e.value.details || e.value.details.isInternal)) return e.value.details.details
        }),
        s = N(() => {
          if (e.value.details && e.value.details.isInternal) {
            let i = e.value.details.details;
            return e.value.details.prefix && (i = `${e.value.details.prefix}${i}`), {
              type: "text",
              text: i
            }
          }
          if (e.value.status !== S.STATUS.OK) return {
            type: "status",
            status: e.value.status
          }
        });
      return (i, _) => {
        const m = Ee,
          g = Ue;
        return a(), r("div", Ae, [p(m, {
          icon: o(e).icon
        }, null, 8, ["icon"]), d("div", Ke, [d("div", Oe, v(o(e).title), 1), o(l) ? (a(), r("div", We, v(o(l)), 1)) : w("", !0)]), o(s) ? (a(), r(I, {
          key: 0
        }, [o(s).type === "text" ? (a(), r("div", De, v(o(s).text), 1)) : o(s).type === "status" ? (a(), u(g, {
          key: 1,
          status: o(s).status,
          class: "status"
        }, null, 8, ["status"])) : w("", !0)], 64)) : w("", !0)])
      }
    }
  }),
  Le = y(xe, [
    ["__scopeId", "data-v-6587f464"]
  ]),
  Re = {
    class: "pages-wallet-history"
  },
  Be = {
    key: 0,
    class: "date"
  },
  He = f({
    __name: "History",
    props: {
      history: {
        type: Array,
        required: !0
      }
    },
    setup(t) {
      return (n, e) => {
        const l = Le;
        return a(), r("div", Re, [(a(!0), r(I, null, K(t.history, (s, i) => (a(), r(I, {
          key: i
        }, [i === 0 || t.history[i - 1].date.stamp !== t.history[i].date.stamp ? (a(), r("div", Be, v(s.date.formatted), 1)) : w("", !0), p(l, {
          "history-item": s
        }, null, 8, ["history-item"])], 64))), 128))])
      }
    }
  }),
  lt = y(He, [
    ["__scopeId", "data-v-edabb2b5"]
  ]),
  Me = {
    class: "pages-wallet-points-history"
  },
  Ve = f({
    __name: "PointsHistory",
    setup(t) {
      const e = Z(async l => {
        const s = await Q.getPointsHistory(l);
        if (s.err) throw k("Unable to load points history");
        return {
          nextPageToken: s.data.nextPageToken,
          items: s.data.actions
        }
      });
      return (l, s) => {
        const i = Ie,
          _ = lt,
          m = J;
        return a(), r("div", Me, [p(m, {
          onEnd: s[0] || (s[0] = g => o(e).load())
        }, {
          default: T(() => [o(e).isEmpty.value ? (a(), u(i, {
            key: 0
          })) : (a(), u(_, {
            key: 1,
            history: o(e).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  Ye = y(Ve, [
    ["__scopeId", "data-v-7c645fab"]
  ]),
  Fe = {
    class: "kit-label-with-bottom-sheet"
  },
  qe = {
    key: 0,
    class: "image"
  },
  je = ["src"],
  Qe = {
    class: "text"
  },
  ze = f({
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
      return (l, s) => {
        const i = E,
          _ = q;
        return a(), r("div", Fe, [d("div", {
          class: C(["label", `is-${t.type}`]),
          onClick: s[0] || (s[0] = m => n.value = !0)
        }, [t.image || l.$slots.image ? (a(), r("div", qe, [B(l.$slots, "image", {}, () => [t.image ? (a(), r("img", {
          key: 0,
          src: t.image,
          alt: "Image"
        }, null, 8, je)) : w("", !0)], !0)])) : w("", !0), d("div", Qe, v(t.text), 1), p(i, {
          name: "chevron-right",
          class: "icon"
        })], 2), p(_, {
          modelValue: o(n),
          "onUpdate:modelValue": s[1] || (s[1] = m => j(n) ? n.value = m : null),
          title: t.title,
          banner: t.banner
        }, {
          default: T(() => [B(l.$slots, "default", {
            close: e
          }, void 0, !0)]),
          _: 3
        }, 8, ["modelValue", "title", "banner"])])
      }
    }
  }),
  it = y(ze, [
    ["__scopeId", "data-v-e9eaa47e"]
  ]),
  Ge = {};

function Ze(t, n) {
  const e = St,
    l = it;
  return a(), u(l, {
    text: ("t" in t ? t.t : o(c))("wallet.drop.notification.label"),
    class: "pages-wallet-block-details-soon-notification-with-label"
  }, {
    image: T(() => n[0] || (n[0] = [d("img", {
      class: "img",
      src: A,
      alt: "Ton logo"
    }, null, -1), d("img", {
      class: "img",
      src: $t,
      alt: "Notcoin logo"
    }, null, -1)])),
    default: T(({
      close: s
    }) => [p(e, {
      onClose: i => s()
    }, null, 8, ["onClose"])]),
    _: 1
  }, 8, ["text"])
}
const Je = y(Ge, [
    ["render", Ze],
    ["__scopeId", "data-v-eb9556ff"]
  ]),
  Xe = {
    class: "pages-wallet-block-points"
  },
  tn = {
    class: "heading"
  },
  en = {
    class: "title"
  },
  nn = f({
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
      return (e, l) => {
        const s = be,
          i = Ye,
          _ = O,
          m = Je,
          g = Ut,
          $ = Kt;
        return a(), r("div", Xe, [d("div", tn, [d("div", en, v(("t" in e ? e.t : o(c))("wallet.points.title")), 1), p(s, {
          value: t.points.totalFiatValue.USD
        }, null, 8, ["value"])]), p($, {
          tabs: o(n),
          class: "tabs"
        }, {
          history: T(() => [p(i, {
            class: "history"
          })]),
          balances: T(() => [t.notification === void 0 ? (a(), u(_, {
            key: 0,
            class: "notification-skeleton notification"
          })) : t.notification === "default" ? (a(), u(m, {
            key: 1,
            class: "notification"
          })) : w("", !0), p(g, {
            points: t.points.points
          }, null, 8, ["points"])]),
          _: 1
        }, 8, ["tabs"])])
      }
    }
  }),
  on = y(nn, [
    ["__scopeId", "data-v-013937d8"]
  ]),
  sn = {
    class: "pages-wallet-connected-banner"
  },
  an = {
    key: 1,
    class: "balance"
  },
  ln = {
    class: "value"
  },
  cn = {
    key: 2,
    class: "last-updated"
  },
  rn = f({
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
          if (n.updatedAt && Date.now() - n.updatedAt.getTime() > 3e5) return It(n.updatedAt)
        });
      return (l, s) => {
        const i = at,
          _ = O;
        return a(), r("div", sn, [p(i, {
          address: t.address
        }, null, 8, ["address"]), t.fiatValue === void 0 || t.fiatValue.USD == null ? (a(), u(_, {
          key: 0,
          class: "skeleton"
        })) : (a(), r("div", an, [s[0] || (s[0] = d("span", {
          class: "symbol"
        }, "$", -1)), d("span", ln, v(t.fiatValue.USD.default), 1)])), o(e) ? (a(), r("div", cn, v(("t" in l ? l.t : o(c))("wallet.connected.last_updated", {
          updatedAtLabel: o(e)
        })), 1)) : w("", !0)])
      }
    }
  }),
  dn = y(rn, [
    ["__scopeId", "data-v-6e2f0c44"]
  ]),
  _n = {
    class: "pages-wallet-controls"
  },
  un = ["onClick"],
  pn = {
    class: "icon"
  },
  mn = ["src", "alt"],
  yn = {
    class: "label"
  },
  hn = f({
    __name: "Controls",
    emits: ["show:points", "show:tokens-history"],
    setup(t, {
      emit: n
    }) {
      const e = n,
        l = N(() => [{
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
      return (s, i) => (a(), r("div", _n, [(a(!0), r(I, null, K(o(l), (_, m) => (a(), r("button", {
        key: m,
        class: C(["control reset", {
          "is-disabled": _.disabled
        }]),
        onClick: g => {
          var $;
          return ($ = _.onClick) == null ? void 0 : $.call(_)
        }
      }, [d("div", pn, [d("img", {
        src: ("imgResolver" in s ? s.imgResolver : o(z))(_.icon, "svg"),
        alt: `${_.label} icon`
      }, null, 8, mn)]), d("div", yn, v(_.label), 1)], 10, un))), 128))]))
    }
  }),
  vn = y(hn, [
    ["__scopeId", "data-v-2fa06ff8"]
  ]),
  fn = {
    class: "pages-wallet-block-tokens-only-ton-notification"
  },
  bn = {
    class: "title"
  },
  gn = {
    class: "text"
  },
  wn = f({
    __name: "TokensOnlyTonNotification",
    setup(t) {
      return (n, e) => {
        const l = F,
          s = it;
        return a(), u(s, {
          text: ("t" in n ? n.t : o(c))("wallet.only_ton_notification.label"),
          image: ("imgResolver" in n ? n.imgResolver : o(z))("ton-logo", "svg")
        }, {
          default: T(({
            close: i
          }) => [d("div", fn, [e[0] || (e[0] = d("img", {
            src: A,
            alt: "Ton logo"
          }, null, -1)), d("div", bn, v(("t" in n ? n.t : o(c))("wallet.only_ton_notification.title")), 1), d("div", gn, v(("t" in n ? n.t : o(c))("wallet.only_ton_notification.text")), 1), p(l, {
            label: ("t" in n ? n.t : o(c))("base.got_it"),
            fill: "",
            class: "button",
            size: o(Y).LARGE,
            onClick: i
          }, null, 8, ["label", "size", "onClick"])])]),
          _: 1
        }, 8, ["text", "image"])
      }
    }
  }),
  kn = y(wn, [
    ["__scopeId", "data-v-0315755f"]
  ]),
  $n = "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_12285_76772)'%3e%3cpath%20d='M16.25%208C16.25%2012.2802%2012.7802%2015.75%208.5%2015.75C4.21979%2015.75%200.75%2012.2802%200.75%208C0.75%203.71979%204.21979%200.25%208.5%200.25C12.7802%200.25%2016.25%203.71979%2016.25%208Z'%20fill='%230088CC'%20stroke='%23282828'%20stroke-width='0.5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.76529%204.44434H11.2438C11.4532%204.44434%2011.6276%204.48121%2011.837%204.59184C12.0813%204.70246%2012.2208%204.88684%2012.2906%205.03434C12.2906%205.03434%2012.2906%205.07122%2012.3255%205.07122C12.4302%205.25559%2012.5%205.47684%2012.5%205.73497C12.5%205.95622%2012.4651%206.17747%2012.3255%206.39873L8.87093%2012.6675C8.80115%2012.815%208.66157%2012.8888%208.48709%2012.8888C8.34751%2012.8888%208.20793%2012.815%208.10325%2012.6675L4.71845%206.39873C4.64866%206.25123%204.50908%206.06685%204.50908%205.77185C4.47418%205.51372%204.54397%205.29247%204.64866%205.07122C4.75334%204.84996%204.92782%204.66559%205.17208%204.59184C5.38145%204.44434%205.62571%204.44434%205.76529%204.44434ZM8.06835%205.32934H5.76529C5.62571%205.32934%205.55592%205.32934%205.52103%205.36622C5.45124%205.40309%205.41634%205.43997%205.38145%205.51372C5.34655%205.55059%205.34655%205.62435%205.34655%205.6981C5.34655%205.73497%205.38145%205.77185%205.45124%205.91935L8.06835%2010.7131V5.32934ZM8.90583%205.32934V10.75L11.5578%205.91935C11.5927%205.8456%2011.5927%205.77185%2011.5927%205.6981C11.5927%205.62435%2011.5927%205.55059%2011.5578%205.51372C11.5229%205.47684%2011.5229%205.43997%2011.488%205.43997L11.4532%205.40309C11.3834%205.36622%2011.3136%205.36622%2011.2089%205.36622H8.90583V5.32934Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_12285_76772'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  In = {
    class: "pages-wallet-asset-tokens"
  },
  Nn = f({
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
          const l = {
              id: n.ton.currencyId,
              name: "Toncoin",
              symbol: "TON",
              balance: n.ton.balance,
              fiat: n.ton.fiatValue,
              imageUrl: $n
            },
            s = n.jettons.map(i => ({
              id: i.currencyId,
              name: i.name,
              symbol: i.symbol,
              balance: i.balance,
              fiat: i.fiatValue,
              imageUrl: Nt(i.imageUrl),
              pnlPercent: i.pnlPercent
            }));
          return [l, ...s]
        });
      return (l, s) => {
        const i = At;
        return a(), r("div", In, [(a(!0), r(I, null, K(o(e), _ => (a(), u(i, Tt({
          key: _.id,
          ref_for: !0
        }, _), null, 16))), 128))])
      }
    }
  }),
  Tn = y(Nn, [
    ["__scopeId", "data-v-1c80b61a"]
  ]),
  Pn = {
    class: "pages-wallet-block-tokens"
  },
  En = f({
    __name: "Tokens",
    props: {
      address: {
        type: Object,
        required: !0
      },
      balance: {
        type: Object,
        default: void 0
      },
      notification: {
        type: String,
        default: void 0
      }
    },
    emits: ["show:points", "show:tokens-history"],
    setup(t) {
      return (n, e) => {
        var g, $;
        const l = dn,
          s = vn,
          i = O,
          _ = kn,
          m = Tn;
        return a(), r("div", Pn, [p(l, {
          address: t.address,
          "fiat-value": (g = t.balance) == null ? void 0 : g.totalFiatValue,
          "updated-at": ($ = t.balance) == null ? void 0 : $.updatedAt
        }, null, 8, ["address", "fiat-value", "updated-at"]), p(s, {
          "onShow:points": e[0] || (e[0] = W => n.$emit("show:points")),
          "onShow:tokensHistory": e[1] || (e[1] = W => n.$emit("show:tokens-history"))
        }), t.notification === void 0 ? (a(), u(i, {
          key: 0,
          class: "notification-skeleton notification"
        })) : t.notification === "default" ? (a(), u(_, {
          key: 1,
          class: "notification"
        })) : w("", !0), t.balance ? (a(), u(m, {
          key: 2,
          ton: t.balance.tonBalance,
          jettons: t.balance.jettonBalances,
          class: "tokens"
        }, null, 8, ["ton", "jettons"])) : w("", !0)])
      }
    }
  }),
  Cn = y(En, [
    ["__scopeId", "data-v-d12b7baa"]
  ]),
  Sn = {},
  Un = {
    class: "pages-wallet-atoms-no-records"
  },
  An = {
    class: "label"
  };

function Kn(t, n) {
  const e = E;
  return a(), r("div", Un, [p(e, {
    name: "note-search",
    class: "icon"
  }), d("div", An, v(("t" in t ? t.t : o(c))("wallet.history.no_records")), 1)])
}
const On = y(Sn, [
    ["render", Kn],
    ["__scopeId", "data-v-1d0de40b"]
  ]),
  Wn = {
    class: "pages-wallet-block-tokens-history"
  },
  Dn = {
    class: "heading"
  },
  xn = {
    class: "title"
  },
  Ln = {
    key: 0,
    class: "wallet"
  },
  Rn = {
    class: "value"
  },
  Bn = f({
    __name: "TokensHistory",
    props: {
      address: {
        type: Object,
        default: void 0
      }
    },
    setup(t) {
      const e = Z(async l => {
        const s = await Q.getTokensHistory(l);
        if (s.err) throw k("Unable to load tokens history");
        return {
          nextPageToken: s.data.nextPageToken,
          items: s.data.actions
        }
      });
      return (l, s) => {
        const i = On,
          _ = lt,
          m = J;
        return a(), r("div", Wn, [d("div", Dn, [d("div", xn, v(("t" in l ? l.t : o(c))("wallet.history.title")), 1), t.address ? (a(), r("div", Ln, [s[1] || (s[1] = d("img", {
          src: A,
          alt: "Ton logo"
        }, null, -1)), d("div", Rn, v(t.address.short), 1)])) : w("", !0)]), p(m, {
          onEnd: s[0] || (s[0] = g => o(e).load())
        }, {
          default: T(() => [o(e).isEmpty.value ? (a(), u(i, {
            key: 0,
            class: "no-records"
          })) : (a(), u(_, {
            key: 1,
            history: o(e).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  Hn = y(Bn, [
    ["__scopeId", "data-v-55fd4c6d"]
  ]),
  Mn = {
    class: "wallet-index-page page"
  };
var ct = (t => (t.WALLET = "wallet", t.POINTS = "points", t.TOKENS_HISTORY = "tokens_history", t))(ct || {});
const Vn = f({
    __name: "index",
    setup(t) {
      const n = Pt(),
        e = Et(),
        l = (() => {
          const m = H("tab", ct),
            g = H("source", Ct);
          return Ot(), {
            page: m,
            source: g
          }
        })(),
        s = x(l.page ?? "wallet");
      n.wallet.walletPageOpen(l.source), D(() => e.wallet.value, m => {
        m.status !== "connected" && (s.value = "wallet")
      });
      const i = N(() => {
        if (s.value !== "wallet") return () => s.value = "wallet"
      });
      D(i, m => M().meta.back = m, {
        immediate: !0
      });
      const _ = N(() => `wallet-${s.value}`);
      return D(_, () => M().meta.key = _.value), (m, g) => {
        const $ = yt,
          W = Vt,
          rt = Ft,
          dt = _e,
          _t = he,
          L = on,
          ut = Cn,
          pt = Hn;
        return a(), r("div", Mn, [o(e).wallet.value.status === "loading" ? (a(), u($, {
          key: 0
        })) : o(e).wallet.value.status === "must_reconnect" ? (a(), u(W, {
          key: 1
        })) : (a(), r(I, {
          key: 2
        }, [o(e).isAvailable.value ? (a(), r(I, {
          key: 1
        }, [o(s) === "wallet" ? (a(), r(I, {
          key: 0
        }, [o(e).wallet.value.status === "not_found" ? (a(), r(I, {
          key: 0
        }, [p(_t, {
          class: "connect-banner"
        }), o(e).points.value ? (a(), u(L, {
          key: 0,
          points: o(e).points.value,
          notification: o(e).walletNotification.value
        }, null, 8, ["points", "notification"])) : w("", !0)], 64)) : o(e).wallet.value.status === "connected" ? (a(), u(ut, {
          key: 1,
          address: o(e).wallet.value.address,
          balance: o(e).wallet.value.balance,
          notification: o(e).walletNotification.value,
          "onShow:points": g[0] || (g[0] = mt => s.value = "points"),
          "onShow:tokensHistory": g[1] || (g[1] = mt => s.value = "tokens_history")
        }, null, 8, ["address", "balance", "notification"])) : w("", !0)], 64)) : o(s) === "points" ? (a(), r(I, {
          key: 1
        }, [o(e).points.value === void 0 ? (a(), u($, {
          key: 0
        })) : (a(), u(L, {
          key: 1,
          points: o(e).points.value,
          notification: o(e).walletNotification.value
        }, null, 8, ["points", "notification"]))], 64)) : o(s) === "tokens_history" && o(e).wallet.value.status === "connected" ? (a(), u(pt, {
          key: 2,
          address: o(e).wallet.value.address
        }, null, 8, ["address"])) : w("", !0)], 64)) : (a(), r(I, {
          key: 0
        }, [o(e).wallet.value.status === "not_found" ? (a(), u(rt, {
          key: 0
        })) : o(e).wallet.value.status === "connected" ? (a(), u(dt, {
          key: 1,
          address: o(e).wallet.value.address
        }, null, 8, ["address"])) : w("", !0)], 64))], 64))])
      }
    }
  }),
  co = y(Vn, [
    ["__scopeId", "data-v-57d6593b"]
  ]);
export {
  co as
  default
};