import {
  _ as pt
} from "./BH1-dWyx.js";
import {
  _ as V
} from "./X4ogJy0n.js";
import {
  V as k,
  cU as y,
  z as c,
  cV as b,
  d as f,
  b2 as U,
  o as a,
  G as u,
  e as o,
  f as h,
  an as mt,
  ao as yt,
  H as T,
  a as d,
  t as v,
  b as p,
  B as ht,
  U as D,
  _ as E,
  x,
  aN as F,
  K as L,
  c as r,
  cW as A,
  cX as vt,
  p as q,
  F as I,
  q as K,
  n as C,
  j as N,
  ad as ft,
  ar as bt,
  N as wt,
  w as R,
  D as w,
  cY as S,
  W as j,
  bl as H,
  cZ as gt,
  c_ as kt,
  am as z,
  aT as $t,
  ae as It,
  $ as Nt,
  P as Tt,
  aL as M,
  aF as Y,
  O as Pt,
  c$ as Et,
  b7 as Ct
} from "./BSeb1Oeu.js";
import {
  _ as Q
} from "./CoIZX6yd.js";
import {
  _ as O
} from "./DT2v92st.js";
import {
  d as P,
  c as St,
  b as Ut,
  e as At
} from "./_yb1sSxf.js";
import {
  u as G,
  _ as Z
} from "./KMM0v7y9.js";
import {
  _ as Kt
} from "./CRxmvwd0.js";
import {
  c as Ot
} from "./CjrCyY9h.js";
import "./CIOlNM5t.js";
import "./BPsHHHgb.js";
import "./DC2Os88r.js";
import "./CdHi4aa9.js";
import "./BojLLBr-.js";
import "./B_rqq5bT.js";
import "./rdTAW5Ku.js";
const X = t => {
    switch (t.type) {
      case y.TYPE.IN:
        switch (t.kind) {
          case y.KIND_IN.CLAIM_FARMING:
            return c("wallet.history.points.in_farming");
          case y.KIND_IN.CLAIM_TASK:
            return c("wallet.history.points.in_task");
          case y.KIND_IN.CLAIM_REFERRAL:
            return c("wallet.history.points.in_frens");
          case y.KIND_IN.CLAIM_CHECK_IN:
            return c("wallet.history.points.in_daily_rewards");
          case y.KIND_IN.DROP_GAME:
            return c("wallet.history.points.in_drop_game");
          case y.KIND_IN.BLUM_DROP:
            return c("wallet.history.points.in_blum_drop");
          case y.KIND_IN.WALLET_MIGRATION:
            return c("wallet.history.points.in_wallet_migration");
          case y.KIND_IN.MANUAL:
            return c("wallet.history.points.in_manual");
          case y.KIND_IN.MEMEPAD_TOKEN_CREATION:
            return c("wallet.history.points.in_memepad_token_creation");
          case y.KIND_IN.MEMEPAD_LISTED_TOKEN_CREATION:
            return c("wallet.history.points.in_memepad_listed_token_creation");
          case y.KIND_IN.MEMEPAD_TOKEN_TRADING:
            return c("wallet.history.points.in_memepad_token_trading");
          case y.KIND_IN.MEMEPAD_CLAIM_REFERRAL:
            return c("wallet.history.points.in_memepad_claim_referral");
          case y.KIND_IN.BOT_TOKEN_TRADING:
            return c("wallet.history.points.in_bot_token_trading");
          default:
            throw k("Unknown history kind")
        }
      case y.TYPE.OUT:
        switch (t.kind) {
          case y.KIND_OUT.CLAIM_REFERRAL:
            return c("wallet.history.points.out_frens");
          case y.KIND_OUT.DROP_GAME:
            return c("wallet.history.points.out_drop_game");
          case y.KIND_OUT.WITHDRAW_TO_ONCHAIN:
            return c("wallet.history.points.out_withdraw_to_onchain");
          default:
            throw k("Unknown history kind")
        }
      case y.TYPE.UNKNOWN:
        return c("wallet.history.unknown");
      default:
        throw k("Unknown history type")
    }
  },
  J = t => {
    switch (t.type) {
      case y.TYPE.IN: {
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
      case y.TYPE.OUT: {
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
      case y.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  tt = t => {
    var n, e;
    switch (t.type) {
      case y.TYPE.IN:
        return {
          type: "single", icon: (n = t.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case y.TYPE.OUT:
        return {
          type: "single", icon: (e = t.payload.outbound.currency) == null ? void 0 : e.imageUrl
        };
      case y.TYPE.UNKNOWN:
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
  Dt = {
    title: X,
    details: J,
    icon: tt,
    all: Wt
  },
  et = t => {
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
  nt = t => {
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
  ot = t => {
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
    title: et(t),
    details: nt(t),
    icon: ot(t)
  }),
  Lt = {
    title: et,
    details: nt,
    icon: ot,
    all: xt
  },
  Bt = t => t.instance === "point",
  Rt = t => t.instance === "token",
  Ht = (t, n) => {
    if (Bt(t)) return n.point(t);
    if (Rt(t)) return n.token(t);
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
  Yt = h(Mt, [
    ["__scopeId", "data-v-29d5ae4b"]
  ]),
  Vt = f({
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
  Ft = h(Vt, [
    ["__scopeId", "data-v-8fdb824b"]
  ]),
  qt = {
    class: "pages-wallet-label-bottom-sheet"
  },
  jt = {
    class: "address-status"
  },
  zt = {
    class: "address"
  },
  Qt = {
    class: "status"
  },
  Gt = {
    class: "label"
  },
  Zt = f({
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
          onDisconnected: l
        } = U();
      return l(() => n.value = !1), (s, i) => {
        const _ = E,
          m = x,
          g = F;
        return a(), u(g, {
          modelValue: n.value,
          "onUpdate:modelValue": i[1] || (i[1] = $ => n.value = $),
          title: "Wallet"
        }, {
          default: T(() => [d("div", qt, [d("div", jt, [d("div", zt, v(t.address.short), 1), d("div", Qt, [p(_, {
            name: "circle-check-fill",
            class: "icon"
          }), d("span", Gt, v(("t" in s ? s.t : o(c))("wallet.sheet.active")), 1)])]), p(m, {
            label: ("t" in s ? s.t : o(c))("wallet.sheet.disconnect"),
            type: o(ht).GHOST,
            "is-danger": "",
            size: o(D).LARGE,
            onClick: i[0] || (i[0] = $ => o(e)())
          }, null, 8, ["label", "type", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Xt = h(Zt, [
    ["__scopeId", "data-v-07f164ab"]
  ]),
  Jt = {
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
      const n = L(!1);
      return (e, l) => {
        const s = Xt;
        return a(), r("div", Jt, [d("div", {
          class: "label",
          onClick: l[0] || (l[0] = i => n.value = !0)
        }, [l[2] || (l[2] = d("img", {
          src: A,
          alt: "TON logo",
          class: "ton-logo"
        }, null, -1)), d("div", te, v(t.address.short), 1), l[3] || (l[3] = d("img", {
          src: vt,
          alt: "Arrow down",
          class: "arrow-icon"
        }, null, -1))]), p(s, {
          modelValue: o(n),
          "onUpdate:modelValue": l[1] || (l[1] = i => q(n) ? n.value = i : null),
          address: t.address
        }, null, 8, ["modelValue", "address"])])
      }
    }
  }),
  st = h(ee, [
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
  le = h(ae, [
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
        const s = Q,
          i = ft,
          _ = st,
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
  _e = h(de, [
    ["__scopeId", "data-v-603fef51"]
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
      } = U(bt.WALLET);
      return (e, l) => {
        const s = Q,
          i = x;
        return a(), r("div", ue, [d("div", pe, [p(s), d("div", {
          class: "title",
          innerHTML: ("t" in e ? e.t : o(c))("wallet.connect_banner.title")
        }, null, 8, me), p(i, {
          label: ("t" in e ? e.t : o(c))("wallet.connect.btn"),
          size: o(D).SMALL,
          class: "btn",
          onClick: l[0] || (l[0] = _ => o(n)())
        }, null, 8, ["label", "size"])])])
      }
    }
  }),
  he = h(ye, [
    ["__scopeId", "data-v-227fb3d9"]
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
  be = h(fe, [
    ["__scopeId", "data-v-16763388"]
  ]),
  we = {},
  ge = {
    class: "pages-wallet-atoms-coming-soon"
  },
  ke = {
    class: "label"
  };

function $e(t, n) {
  const e = E;
  return a(), r("div", ge, [p(e, {
    name: "clock",
    class: "icon"
  }), d("div", ke, v(("t" in t ? t.t : o(c))("wallet.history.coming_soon")), 1)])
}
const Ie = h(we, [
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
        const i = wt("img-error");
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
  Ee = h(Pe, [
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
  Ue = h(Se, [
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
  Le = h(xe, [
    ["__scopeId", "data-v-6587f464"]
  ]),
  Be = {
    class: "pages-wallet-history"
  },
  Re = {
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
        return a(), r("div", Be, [(a(!0), r(I, null, K(t.history, (s, i) => (a(), r(I, {
          key: i
        }, [i === 0 || t.history[i - 1].date.stamp !== t.history[i].date.stamp ? (a(), r("div", Re, v(s.date.formatted), 1)) : w("", !0), p(l, {
          "history-item": s
        }, null, 8, ["history-item"])], 64))), 128))])
      }
    }
  }),
  at = h(He, [
    ["__scopeId", "data-v-edabb2b5"]
  ]),
  Me = {
    class: "pages-wallet-points-history"
  },
  Ye = f({
    __name: "PointsHistory",
    setup(t) {
      const e = G(async l => {
        const s = await j.getPointsHistory(l);
        if (s.err) throw k("Unable to load points history");
        return {
          nextPageToken: s.data.nextPageToken,
          items: s.data.actions
        }
      });
      return (l, s) => {
        const i = Ie,
          _ = at,
          m = Z;
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
  Ve = h(Ye, [
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
  ze = {
    class: "text"
  },
  Qe = f({
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
      const n = L(!1),
        e = () => n.value = !1;
      return (l, s) => {
        const i = E,
          _ = F;
        return a(), r("div", Fe, [d("div", {
          class: C(["label", `is-${t.type}`]),
          onClick: s[0] || (s[0] = m => n.value = !0)
        }, [t.image || l.$slots.image ? (a(), r("div", qe, [H(l.$slots, "image", {}, () => [t.image ? (a(), r("img", {
          key: 0,
          src: t.image,
          alt: "Image"
        }, null, 8, je)) : w("", !0)], !0)])) : w("", !0), d("div", ze, v(t.text), 1), p(i, {
          name: "chevron-right",
          class: "icon"
        })], 2), p(_, {
          modelValue: o(n),
          "onUpdate:modelValue": s[1] || (s[1] = m => q(n) ? n.value = m : null),
          title: t.title,
          banner: t.banner
        }, {
          default: T(() => [H(l.$slots, "default", {
            close: e
          }, void 0, !0)]),
          _: 3
        }, 8, ["modelValue", "title", "banner"])])
      }
    }
  }),
  lt = h(Qe, [
    ["__scopeId", "data-v-e9eaa47e"]
  ]),
  Ge = {};

function Ze(t, n) {
  const e = St,
    l = lt;
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
      src: gt,
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
const Xe = h(Ge, [
    ["render", Ze],
    ["__scopeId", "data-v-eb9556ff"]
  ]),
  Je = {
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
          i = Ve,
          _ = O,
          m = Xe,
          g = Ut,
          $ = Kt;
        return a(), r("div", Je, [d("div", tn, [d("div", en, v(("t" in e ? e.t : o(c))("wallet.points.title")), 1), p(s, {
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
  on = h(nn, [
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
          if (n.updatedAt && Date.now() - n.updatedAt.getTime() > 3e5) return kt(n.updatedAt)
        });
      return (l, s) => {
        const i = st,
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
  dn = h(rn, [
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
  vn = h(hn, [
    ["__scopeId", "data-v-2fa06ff8"]
  ]),
  fn = {
    class: "pages-wallet-block-tokens-only-ton-notification"
  },
  bn = {
    class: "title"
  },
  wn = {
    class: "text"
  },
  gn = f({
    __name: "TokensOnlyTonNotification",
    setup(t) {
      return (n, e) => {
        const l = x,
          s = lt;
        return a(), u(s, {
          text: ("t" in n ? n.t : o(c))("wallet.only_ton_notification.label"),
          image: ("imgResolver" in n ? n.imgResolver : o(z))("ton-logo", "svg")
        }, {
          default: T(({
            close: i
          }) => [d("div", fn, [e[0] || (e[0] = d("img", {
            src: A,
            alt: "Ton logo"
          }, null, -1)), d("div", bn, v(("t" in n ? n.t : o(c))("wallet.only_ton_notification.title")), 1), d("div", wn, v(("t" in n ? n.t : o(c))("wallet.only_ton_notification.text")), 1), p(l, {
            label: ("t" in n ? n.t : o(c))("base.got_it"),
            fill: "",
            class: "button",
            size: o(D).LARGE,
            onClick: i
          }, null, 8, ["label", "size", "onClick"])])]),
          _: 1
        }, 8, ["text", "image"])
      }
    }
  }),
  kn = h(gn, [
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
              imageUrl: $t(i.imageUrl),
              pnlPercent: i.pnlPercent
            }));
          return [l, ...s]
        });
      return (l, s) => {
        const i = At;
        return a(), r("div", In, [(a(!0), r(I, null, K(o(e), _ => (a(), u(i, It({
          key: _.id,
          ref_for: !0
        }, _), null, 16))), 128))])
      }
    }
  }),
  Tn = h(Nn, [
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
  Cn = h(En, [
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
const On = h(Sn, [
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
  Bn = {
    class: "value"
  },
  Rn = f({
    __name: "TokensHistory",
    props: {
      address: {
        type: Object,
        default: void 0
      }
    },
    setup(t) {
      const e = G(async l => {
        const s = await j.getTokensHistory(l);
        if (s.err) throw k("Unable to load tokens history");
        return {
          nextPageToken: s.data.nextPageToken,
          items: s.data.actions
        }
      });
      return (l, s) => {
        const i = On,
          _ = at,
          m = Z;
        return a(), r("div", Wn, [d("div", Dn, [d("div", xn, v(("t" in l ? l.t : o(c))("wallet.history.title")), 1), t.address ? (a(), r("div", Ln, [s[1] || (s[1] = d("img", {
          src: A,
          alt: "Ton logo"
        }, null, -1)), d("div", Bn, v(t.address.short), 1)])) : w("", !0)]), p(m, {
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
  Hn = h(Rn, [
    ["__scopeId", "data-v-55fd4c6d"]
  ]),
  Mn = {
    class: "wallet-index-page page"
  };
var it = (t => (t.WALLET = "wallet", t.POINTS = "points", t.TOKENS_HISTORY = "tokens_history", t))(it || {});
const Yn = f({
    __name: "index",
    setup(t) {
      const n = Nt(),
        e = Tt(),
        l = (() => {
          const _ = M("tab", it),
            m = M("source", Et);
          return Ot(), {
            page: _,
            source: m
          }
        })(),
        s = L(l.page ?? "wallet");
      n.wallet.walletPageOpen(l.source), Y(() => e.wallet.value, _ => {
        _.status !== "connected" && (s.value = "wallet")
      }), Pt().initWatcher({
        key: "wallet-page",
        watchFn: () => s.value !== "wallet",
        callback: () => s.value = "wallet"
      });
      const i = N(() => `wallet-${s.value}`);
      return Y(i, () => Ct().meta.key = i.value), (_, m) => {
        const g = pt,
          $ = Yt,
          W = Ft,
          ct = _e,
          rt = he,
          B = on,
          dt = Cn,
          _t = Hn;
        return a(), r("div", Mn, [o(e).wallet.value.status === "loading" ? (a(), u(g, {
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
        }, null, 8, ["points", "notification"])) : w("", !0)], 64)) : o(e).wallet.value.status === "connected" ? (a(), u(dt, {
          key: 1,
          address: o(e).wallet.value.address,
          balance: o(e).wallet.value.balance,
          notification: o(e).walletNotification.value,
          "onShow:points": m[0] || (m[0] = ut => s.value = "points"),
          "onShow:tokensHistory": m[1] || (m[1] = ut => s.value = "tokens_history")
        }, null, 8, ["address", "balance", "notification"])) : w("", !0)], 64)) : o(s) === "points" ? (a(), r(I, {
          key: 1
        }, [o(e).points.value === void 0 ? (a(), u(g, {
          key: 0
        })) : (a(), u(B, {
          key: 1,
          points: o(e).points.value,
          notification: o(e).walletNotification.value
        }, null, 8, ["points", "notification"]))], 64)) : o(s) === "tokens_history" && o(e).wallet.value.status === "connected" ? (a(), u(_t, {
          key: 2,
          address: o(e).wallet.value.address
        }, null, 8, ["address"])) : w("", !0)], 64)) : (a(), r(I, {
          key: 0
        }, [o(e).wallet.value.status === "not_found" ? (a(), u(W, {
          key: 0
        })) : o(e).wallet.value.status === "connected" ? (a(), u(ct, {
          key: 1,
          address: o(e).wallet.value.address
        }, null, 8, ["address"])) : w("", !0)], 64))], 64))])
      }
    }
  }),
  lo = h(Yn, [
    ["__scopeId", "data-v-be062c2b"]
  ]);
export {
  lo as
  default
};