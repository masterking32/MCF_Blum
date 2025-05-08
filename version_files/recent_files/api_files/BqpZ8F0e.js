import {
  _ as ht
} from "./C-7eHIco.js";
import {
  _ as z
} from "./CLTkpfqv.js";
import {
  a4 as k,
  dk as y,
  C as i,
  dl as b,
  d as f,
  bg as K,
  o as a,
  N as d,
  e as s,
  f as h,
  ay as vt,
  az as ft,
  D as E,
  a as _,
  t as v,
  b as u,
  B as bt,
  Y as B,
  _ as A,
  x as R,
  Z as G,
  y as x,
  c as r,
  dm as O,
  dn as wt,
  p as Q,
  a9 as H,
  F as N,
  q as D,
  n as S,
  j as T,
  O as Z,
  ap as gt,
  aH as kt,
  T as It,
  w as V,
  G as g,
  dp as C,
  a5 as J,
  ag as F,
  dq as $t,
  dr as Nt,
  a_ as X,
  b1 as Tt,
  X as tt,
  b2 as Et,
  b7 as Pt,
  ae as At,
  aK as St,
  b3 as Ut,
  aq as Ct,
  $ as Kt,
  ad as q,
  V as j,
  U as Ot,
  bn as Dt,
  ds as Wt
} from "./BlYmRJuD.js";
import {
  _ as W
} from "./Dxt6bpfQ.js";
import {
  d as P,
  c as Lt,
  b as Bt,
  e as Rt
} from "./CV4s9k8V.js";
import {
  u as et,
  _ as nt
} from "./XdcvSYGn.js";
import {
  _ as xt
} from "./tSf8xU7N.js";
import {
  c as Ht
} from "./CjrCyY9h.js";
import "./D35qgfxr.js";
import "./B5wii_a4.js";
import "./CXIqMJ3c.js";
import "./dMqbnnuC.js";
import "./DpLxSWCF.js";
import "./mtpIHHJU.js";
import "./BOpcyubt.js";
const st = e => {
    switch (e.type) {
      case y.TYPE.IN:
        switch (e.kind) {
          case y.KIND_IN.CLAIM_FARMING:
            return i("wallet.history.points.in_farming");
          case y.KIND_IN.CLAIM_TASK:
            return i("wallet.history.points.in_task");
          case y.KIND_IN.CLAIM_REFERRAL:
            return i("wallet.history.points.in_frens");
          case y.KIND_IN.CLAIM_CHECK_IN:
            return i("wallet.history.points.in_daily_rewards");
          case y.KIND_IN.DROP_GAME:
            return i("wallet.history.points.in_drop_game");
          case y.KIND_IN.BLUM_DROP:
            return i("wallet.history.points.in_blum_drop");
          case y.KIND_IN.WALLET_MIGRATION:
            return i("wallet.history.points.in_wallet_migration");
          case y.KIND_IN.MANUAL:
            return i("wallet.history.points.in_manual");
          case y.KIND_IN.MEMEPAD_TOKEN_CREATION:
            return i("wallet.history.points.in_memepad_token_creation");
          case y.KIND_IN.MEMEPAD_LISTED_TOKEN_CREATION:
            return i("wallet.history.points.in_memepad_listed_token_creation");
          case y.KIND_IN.MEMEPAD_TOKEN_TRADING:
            return i("wallet.history.points.in_memepad_token_trading");
          case y.KIND_IN.MEMEPAD_CLAIM_REFERRAL:
            return i("wallet.history.points.in_memepad_claim_referral");
          case y.KIND_IN.BOT_TOKEN_TRADING:
            return i("wallet.history.points.in_bot_token_trading");
          default:
            throw k("Unknown history kind")
        }
      case y.TYPE.OUT:
        switch (e.kind) {
          case y.KIND_OUT.CLAIM_REFERRAL:
            return i("wallet.history.points.out_frens");
          case y.KIND_OUT.DROP_GAME:
            return i("wallet.history.points.out_drop_game");
          case y.KIND_OUT.WITHDRAW_TO_ONCHAIN:
            return i("wallet.history.points.out_withdraw_to_onchain");
          case y.KIND_OUT.MANUAL:
            return i("wallet.history.points.out_manual");
          default:
            throw k("Unknown history kind")
        }
      case y.TYPE.UNKNOWN:
        return i("wallet.history.unknown");
      default:
        throw k("Unknown history type")
    }
  },
  ot = e => {
    switch (e.type) {
      case y.TYPE.IN: {
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
      case y.TYPE.OUT: {
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
      case y.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  at = e => {
    var n, t;
    switch (e.type) {
      case y.TYPE.IN:
        return {
          type: "single", icon: (n = e.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case y.TYPE.OUT:
        return {
          type: "single", icon: (t = e.payload.outbound.currency) == null ? void 0 : t.imageUrl
        };
      case y.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  Mt = e => ({
    title: st(e),
    details: ot(e),
    icon: at(e)
  }),
  Yt = {
    title: st,
    details: ot,
    icon: at,
    all: Mt
  },
  lt = e => {
    switch (e.type) {
      case b.TYPE.IN:
        return e.payload.inbound.nft ? i("wallet.history.tokens.in_nft") : i("wallet.history.tokens.in");
      case b.TYPE.OUT:
        return e.payload.outbound.nft ? i("wallet.history.tokens.out_nft") : i("wallet.history.tokens.out");
      case b.TYPE.SWAP:
        return i("wallet.history.tokens.swap");
      case b.TYPE.UNQUANTIFIED:
        return (() => {
          switch (e.kind) {
            case b.KIND_UNQUANTIFIED.CONTRACT_DEPLOY:
              return i("wallet.history.tokens.other_contract_deploy");
            case b.KIND_UNQUANTIFIED.CONTRACT_EXEC:
              return i("wallet.history.tokens.other_contract_execution");
            case b.KIND_UNQUANTIFIED.UNSUBSCRIBE:
              return i("wallet.history.tokens.other_unsubscribed");
            case b.KIND_UNQUANTIFIED.DOMAIN_RENEW:
              return i("wallet.history.tokens.other_domain_renew");
            case b.KIND_UNQUANTIFIED.WITHDRAW_STAKE_REQUEST:
              return i("wallet.history.tokens.other_stake_request");
            default:
              throw k("Unknown unquantified history kind")
          }
        })();
      case b.TYPE.UNKNOWN:
        return i("wallet.history.unknown");
      default:
        throw k("Unknown history type")
    }
  },
  it = e => {
    switch (e.type) {
      case b.TYPE.IN: {
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
      case b.TYPE.OUT: {
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
      case b.TYPE.SWAP:
        return {
          details: `${e.payload.outbound.currency.symbol}→${e.payload.inbound.currency.symbol}`, isInternal: !1, prefix: void 0
        };
      case b.TYPE.UNQUANTIFIED:
        return;
      case b.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  ct = e => {
    var n, t;
    switch (e.type) {
      case b.TYPE.IN:
        return {
          type: "single", icon: (n = e.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case b.TYPE.OUT:
        return {
          type: "single", icon: (t = e.payload.outbound.currency) == null ? void 0 : t.imageUrl
        };
      case b.TYPE.SWAP:
        return {
          type: "double", iconFrom: e.payload.outbound.currency.imageUrl, iconTo: e.payload.inbound.currency.imageUrl
        };
      case b.TYPE.UNQUANTIFIED:
        return;
      case b.TYPE.UNKNOWN:
        return;
      default:
        throw k("Unknown history type")
    }
  },
  Vt = e => ({
    title: lt(e),
    details: it(e),
    icon: ct(e)
  }),
  Ft = {
    title: lt,
    details: it,
    icon: ct,
    all: Vt
  },
  qt = e => e.instance === "point",
  jt = e => e.instance === "token",
  zt = (e, n) => {
    if (qt(e)) return n.point(e);
    if (jt(e)) return n.token(e);
    throw k("Unknown history instance")
  },
  Gt = f({
    __name: "Reconnect",
    setup(e) {
      const {
        reconnect: n
      } = K();
      return (t, c) => {
        const o = z;
        return a(), d(o, {
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
  Qt = h(Gt, [
    ["__scopeId", "data-v-29d5ae4b"]
  ]),
  Zt = f({
    __name: "NotConnected",
    setup(e) {
      const {
        openConnectModal: n
      } = K();
      return (t, c) => {
        const o = z;
        return a(), d(o, {
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
  Jt = h(Zt, [
    ["__scopeId", "data-v-8fdb824b"]
  ]),
  Xt = {
    class: "pages-wallet-label-bottom-sheet"
  },
  te = {
    class: "address-status"
  },
  ee = {
    class: "address"
  },
  ne = {
    class: "status"
  },
  se = {
    class: "label"
  },
  oe = f({
    __name: "LabelBottomSheet",
    props: vt({
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
      const n = ft(e, "modelValue"),
        {
          disconnect: t,
          onDisconnected: c
        } = K();
      return c(() => n.value = !1), (o, l) => {
        const p = A,
          m = R,
          w = G;
        return a(), d(w, {
          modelValue: n.value,
          "onUpdate:modelValue": l[1] || (l[1] = I => n.value = I),
          title: "Wallet"
        }, {
          default: E(() => [_("div", Xt, [_("div", te, [_("div", ee, v(e.address.short), 1), _("div", ne, [u(p, {
            name: "circle-check-fill",
            class: "icon"
          }), _("span", se, v(("t" in o ? o.t : s(i))("wallet.sheet.active")), 1)])]), u(m, {
            label: ("t" in o ? o.t : s(i))("wallet.sheet.disconnect"),
            type: s(bt).GHOST,
            "is-danger": "",
            size: s(B).LARGE,
            onClick: l[0] || (l[0] = I => s(t)())
          }, null, 8, ["label", "type", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  ae = h(oe, [
    ["__scopeId", "data-v-07f164ab"]
  ]),
  le = {
    class: "pages-wallet-label"
  },
  ie = {
    class: "address"
  },
  ce = f({
    __name: "Label",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(e) {
      const n = () => {
          H().wallet.walletAddressButtonClick(), t.value = !0
        },
        t = x(!1);
      return (c, o) => {
        const l = ae;
        return a(), r("div", le, [_("div", {
          class: "label",
          onClick: n
        }, [o[1] || (o[1] = _("img", {
          src: O,
          alt: "TON logo",
          class: "ton-logo"
        }, null, -1)), _("div", ie, v(e.address.short), 1), o[2] || (o[2] = _("img", {
          src: wt,
          alt: "Arrow down",
          class: "arrow-icon"
        }, null, -1))]), u(l, {
          modelValue: s(t),
          "onUpdate:modelValue": o[0] || (o[0] = p => Q(t) ? t.value = p : null),
          address: e.address
        }, null, 8, ["modelValue", "address"])])
      }
    }
  }),
  rt = h(ce, [
    ["__scopeId", "data-v-821e46dc"]
  ]),
  re = {
    class: "kit-progress-stepper"
  },
  _e = {
    class: "icon-wrapper"
  },
  de = {
    class: "text"
  },
  ue = f({
    __name: "KitProgressStepper",
    props: {
      items: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      return (n, t) => {
        const c = A;
        return a(), r("div", re, [(a(!0), r(N, null, D(e.items, o => (a(), r("div", {
          key: o.text,
          class: S(["item", {
            "is-active": o.active
          }])
        }, [_("div", _e, [o.active ? (a(), d(c, {
          key: 0,
          name: "circle-check-white",
          class: "icon"
        })) : (a(), d(c, {
          key: 1,
          name: "circle-small",
          class: "icon"
        }))]), _("div", de, v(o.text), 1)], 2))), 128))])
      }
    }
  }),
  pe = h(ue, [
    ["__scopeId", "data-v-c6e84c97"]
  ]),
  me = {
    class: "pages-wallet-legacy-connected"
  },
  ye = {
    class: "container"
  },
  he = {
    class: "title"
  },
  ve = f({
    __name: "Connected",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(e) {
      const n = T(() => [{
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
        const o = Z,
          l = gt,
          p = rt,
          m = pe;
        return a(), r("div", me, [u(o, {
          class: "background"
        }), _("div", ye, [_("div", he, v(("t" in t ? t.t : s(i))("wallet.legacy.connected.title")), 1), u(l, {
          name: "animations/MoneyWings",
          size: 80,
          class: "icon"
        }), u(p, {
          address: e.address
        }, null, 8, ["address"]), u(m, {
          items: s(n),
          class: "progress"
        }, null, 8, ["items"])])])
      }
    }
  }),
  fe = h(ve, [
    ["__scopeId", "data-v-603fef51"]
  ]),
  be = {
    class: "pages-wallet-connect-banner"
  },
  we = {
    class: "container"
  },
  ge = ["innerHTML"],
  ke = f({
    __name: "ConnectBanner",
    setup(e) {
      const {
        openConnectModal: n
      } = K(kt.WALLET);
      return (t, c) => {
        const o = Z,
          l = R;
        return a(), r("div", be, [_("div", we, [u(o), _("div", {
          class: "title",
          innerHTML: ("t" in t ? t.t : s(i))("wallet.connect_banner.title")
        }, null, 8, ge), u(l, {
          label: ("t" in t ? t.t : s(i))("wallet.connect.btn"),
          size: s(B).SMALL,
          class: "btn",
          onClick: c[0] || (c[0] = p => s(n)())
        }, null, 8, ["label", "size"])])])
      }
    }
  }),
  Ie = h(ke, [
    ["__scopeId", "data-v-227fb3d9"]
  ]),
  $e = {
    class: "pages-wallet-block-points-fiat-equal"
  },
  Ne = f({
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
        return a(), r("div", $e, [e.value === void 0 ? (a(), d(c, {
          key: 0,
          class: "skeleton",
          rounded: ""
        })) : (a(), r("div", {
          key: 1,
          class: S(["value", {
            "is-highlighted": e.value.value.greaterThan(0)
          }])
        }, v(e.value.defaultWithSymbol), 3))])
      }
    }
  }),
  Te = h(Ne, [
    ["__scopeId", "data-v-16763388"]
  ]),
  Ee = {},
  Pe = {
    class: "pages-wallet-atoms-coming-soon"
  },
  Ae = {
    class: "label"
  };

function Se(e, n) {
  const t = A;
  return a(), r("div", Pe, [u(t, {
    name: "clock",
    class: "icon"
  }), _("div", Ae, v(("t" in e ? e.t : s(i))("wallet.history.coming_soon")), 1)])
}
const Ue = h(Ee, [
    ["render", Se],
    ["__scopeId", "data-v-3ac68509"]
  ]),
  Ce = ["src"],
  Ke = ["src"],
  Oe = f({
    __name: "HistoryItemIcon",
    props: {
      icon: {}
    },
    setup(e) {
      const n = e,
        t = T(() => {
          if (n.icon === void 0) return [P];
          if (n.icon.type === "single") return [n.icon.icon ?? P];
          if (n.icon.type === "double") return [n.icon.iconFrom ?? P, n.icon.iconTo ?? P];
          throw n.icon, k("Unknown icon type")
        });
      return (c, o) => {
        const l = It("img-error");
        return a(), r("div", {
          class: S(["pages-wallet-history-item-icon", {
            "is-single": s(t).length === 1,
            "is-double": s(t).length === 2
          }])
        }, [V(_("img", {
          src: s(t)[0],
          alt: "Transaction icon"
        }, null, 8, Ce), [
          [l, s(P)]
        ]), s(t).length === 2 ? V((a(), r("img", {
          key: 0,
          src: s(t)[1],
          alt: "Transaction icon"
        }, null, 8, Ke)), [
          [l, s(P)]
        ]) : g("", !0)], 2)
      }
    }
  }),
  De = h(Oe, [
    ["__scopeId", "data-v-43176a1b"]
  ]),
  We = {
    class: "label"
  },
  Le = f({
    __name: "HistoryItemStatus",
    props: {
      status: {
        type: String,
        required: !0
      }
    },
    setup(e) {
      const n = e,
        t = T(() => {
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
        const l = A;
        return s(t) ? (a(), r("div", {
          key: 0,
          class: S(["pages-wallet-history-item-status", s(t).cls])
        }, [u(l, {
          name: s(t).icon,
          class: "icon"
        }, null, 8, ["name"]), _("div", We, v(s(t).label), 1)], 2)) : g("", !0)
      }
    }
  }),
  Be = h(Le, [
    ["__scopeId", "data-v-14d91734"]
  ]),
  Re = {
    class: "pages-wallet-history-item"
  },
  xe = {
    class: "title-with-details"
  },
  He = {
    class: "title"
  },
  Me = {
    key: 0,
    class: "details"
  },
  Ye = {
    key: 0,
    class: "right-text"
  },
  Ve = f({
    __name: "HistoryItem",
    props: {
      historyItem: {
        type: Object,
        required: !0
      }
    },
    setup(e) {
      const n = e,
        t = T(() => zt(n.historyItem, {
          point: l => ({
            ...Yt.all(l),
            status: l.payload.status
          }),
          token: l => ({
            ...Ft.all(l),
            status: l.payload.status
          })
        })),
        c = T(() => {
          if (!(!t.value.details || t.value.details.isInternal)) return t.value.details.details
        }),
        o = T(() => {
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
      return (l, p) => {
        const m = De,
          w = Be;
        return a(), r("div", Re, [u(m, {
          icon: s(t).icon
        }, null, 8, ["icon"]), _("div", xe, [_("div", He, v(s(t).title), 1), s(c) ? (a(), r("div", Me, v(s(c)), 1)) : g("", !0)]), s(o) ? (a(), r(N, {
          key: 0
        }, [s(o).type === "text" ? (a(), r("div", Ye, v(s(o).text), 1)) : s(o).type === "status" ? (a(), d(w, {
          key: 1,
          status: s(o).status,
          class: "status"
        }, null, 8, ["status"])) : g("", !0)], 64)) : g("", !0)])
      }
    }
  }),
  Fe = h(Ve, [
    ["__scopeId", "data-v-6587f464"]
  ]),
  qe = {
    class: "pages-wallet-history"
  },
  je = {
    key: 0,
    class: "date"
  },
  ze = f({
    __name: "History",
    props: {
      history: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      return (n, t) => {
        const c = Fe;
        return a(), r("div", qe, [(a(!0), r(N, null, D(e.history, (o, l) => (a(), r(N, {
          key: l
        }, [l === 0 || e.history[l - 1].date.stamp !== e.history[l].date.stamp ? (a(), r("div", je, v(o.date.formatted), 1)) : g("", !0), u(c, {
          "history-item": o
        }, null, 8, ["history-item"])], 64))), 128))])
      }
    }
  }),
  _t = h(ze, [
    ["__scopeId", "data-v-edabb2b5"]
  ]),
  Ge = {
    class: "pages-wallet-points-history"
  },
  Qe = f({
    __name: "PointsHistory",
    setup(e) {
      const t = et(async c => {
        const o = await J.getPointsHistory(c);
        if (o.err) throw k("Unable to load points history");
        return {
          nextPageToken: o.data.nextPageToken,
          items: o.data.actions
        }
      });
      return (c, o) => {
        const l = Ue,
          p = _t,
          m = nt;
        return a(), r("div", Ge, [u(m, {
          onEnd: o[0] || (o[0] = w => s(t).load())
        }, {
          default: E(() => [s(t).isEmpty.value ? (a(), d(l, {
            key: 0
          })) : (a(), d(p, {
            key: 1,
            history: s(t).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  Ze = h(Qe, [
    ["__scopeId", "data-v-7c645fab"]
  ]),
  Je = {
    class: "kit-label-with-bottom-sheet"
  },
  Xe = {
    key: 0,
    class: "image"
  },
  tn = ["src"],
  en = {
    class: "text"
  },
  nn = f({
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
      const n = x(!1),
        t = () => n.value = !1;
      return (c, o) => {
        const l = A,
          p = G;
        return a(), r("div", Je, [_("div", {
          class: S(["label", `is-${e.type}`]),
          onClick: o[0] || (o[0] = m => n.value = !0)
        }, [e.image || c.$slots.image ? (a(), r("div", Xe, [F(c.$slots, "image", {}, () => [e.image ? (a(), r("img", {
          key: 0,
          src: e.image,
          alt: "Image"
        }, null, 8, tn)) : g("", !0)], !0)])) : g("", !0), _("div", en, v(e.text), 1), u(l, {
          name: "chevron-right",
          class: "icon"
        })], 2), u(p, {
          modelValue: s(n),
          "onUpdate:modelValue": o[1] || (o[1] = m => Q(n) ? n.value = m : null),
          title: e.title,
          banner: e.banner
        }, {
          default: E(() => [F(c.$slots, "default", {
            close: t
          }, void 0, !0)]),
          _: 3
        }, 8, ["modelValue", "title", "banner"])])
      }
    }
  }),
  dt = h(nn, [
    ["__scopeId", "data-v-e9eaa47e"]
  ]),
  sn = {};

function on(e, n) {
  const t = Lt,
    c = dt;
  return a(), d(c, {
    text: ("t" in e ? e.t : s(i))("wallet.drop.notification.label"),
    class: "pages-wallet-block-details-soon-notification-with-label"
  }, {
    image: E(() => n[0] || (n[0] = [_("img", {
      class: "img",
      src: O,
      alt: "Ton logo"
    }, null, -1), _("img", {
      class: "img",
      src: $t,
      alt: "Notcoin logo"
    }, null, -1)])),
    default: E(({
      close: o
    }) => [u(t, {
      onClose: l => o()
    }, null, 8, ["onClose"])]),
    _: 1
  }, 8, ["text"])
}
const an = h(sn, [
    ["render", on],
    ["__scopeId", "data-v-eb9556ff"]
  ]),
  ln = {
    class: "pages-wallet-block-points"
  },
  cn = {
    class: "heading"
  },
  rn = {
    class: "title"
  },
  _n = f({
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
      const n = T(() => [{
        key: "balances",
        label: i("wallet.points.tabs.balances")
      }, {
        key: "history",
        label: i("wallet.points.tabs.history")
      }]);
      return (t, c) => {
        const o = Te,
          l = Ze,
          p = W,
          m = an,
          w = Bt,
          I = xt;
        return a(), r("div", ln, [_("div", cn, [_("div", rn, v(("t" in t ? t.t : s(i))("wallet.points.title")), 1), u(o, {
          value: e.points.totalFiatValue.USD
        }, null, 8, ["value"])]), u(I, {
          tabs: s(n),
          class: "tabs"
        }, {
          history: E(() => [u(l, {
            class: "history"
          })]),
          balances: E(() => [e.notification === void 0 ? (a(), d(p, {
            key: 0,
            class: "notification-skeleton notification"
          })) : e.notification === "default" ? (a(), d(m, {
            key: 1,
            class: "notification"
          })) : g("", !0), u(w, {
            points: e.points.points
          }, null, 8, ["points"])]),
          _: 1
        }, 8, ["tabs"])])
      }
    }
  }),
  dn = h(_n, [
    ["__scopeId", "data-v-013937d8"]
  ]),
  un = {
    class: "pages-wallet-connected-banner"
  },
  pn = {
    key: 1,
    class: "balance"
  },
  mn = {
    class: "value"
  },
  yn = {
    key: 2,
    class: "last-updated"
  },
  hn = f({
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
        t = T(() => {
          if (n.updatedAt && Date.now() - n.updatedAt.getTime() > 3e5) return Nt(n.updatedAt)
        });
      return (c, o) => {
        const l = rt,
          p = W;
        return a(), r("div", un, [u(l, {
          address: e.address
        }, null, 8, ["address"]), e.fiatValue === void 0 || e.fiatValue.USD == null ? (a(), d(p, {
          key: 0,
          class: "skeleton"
        })) : (a(), r("div", pn, [o[0] || (o[0] = _("span", {
          class: "symbol"
        }, "$", -1)), _("span", mn, v(e.fiatValue.USD.default), 1)])), s(t) ? (a(), r("div", yn, v(("t" in c ? c.t : s(i))("wallet.connected.last_updated", {
          updatedAtLabel: s(t)
        })), 1)) : g("", !0)])
      }
    }
  }),
  vn = h(hn, [
    ["__scopeId", "data-v-6e2f0c44"]
  ]),
  fn = {
    class: "pages-wallet-controls"
  },
  bn = ["onClick"],
  wn = {
    class: "icon"
  },
  gn = ["src", "alt"],
  kn = {
    class: "label"
  },
  In = f({
    __name: "Controls",
    emits: ["show:points", "show:tokens-history"],
    setup(e, {
      emit: n
    }) {
      const t = n,
        c = H(),
        o = X(),
        l = o.usePaymentLink(),
        p = T(() => {
          var m;
          return [{
            label: i("wallet.controls.send"),
            icon: "arrow-up",
            disabled: !0
          }, {
            label: i("wallet.controls.buy"),
            icon: "credit-card",
            ...(m = o.availableInfo.value) != null && m.available ? {
              onClick: () => {
                c.wallet.walletBuyButtonClick(), l.getAndOpen()
              },
              loading: l.isLoading.value
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
      return (m, w) => {
        const I = Et;
        return a(), r("div", fn, [(a(!0), r(N, null, D(s(p), ($, L) => (a(), r("button", {
          key: L,
          class: S(["control reset", {
            "is-disabled": $.disabled
          }]),
          onClick: M => {
            var U;
            return (U = $.onClick) == null ? void 0 : U.call($)
          }
        }, [_("div", wn, [$.loading ? (a(), d(I, {
          key: 0,
          class: "spinner",
          size: 16,
          type: s(Tt).LIGHT
        }, null, 8, ["type"])) : (a(), r("img", {
          key: 1,
          src: ("imgResolver" in m ? m.imgResolver : s(tt))($.icon, "svg"),
          alt: `${$.label} icon`
        }, null, 8, gn))]), _("div", kn, v($.label), 1)], 10, bn))), 128))])
      }
    }
  }),
  $n = h(In, [
    ["__scopeId", "data-v-a316f5b3"]
  ]),
  Nn = {
    class: "pages-wallet-block-tokens-only-ton-notification"
  },
  Tn = {
    class: "title"
  },
  En = {
    class: "text"
  },
  Pn = f({
    __name: "TokensOnlyTonNotification",
    setup(e) {
      return (n, t) => {
        const c = R,
          o = dt;
        return a(), d(o, {
          text: ("t" in n ? n.t : s(i))("wallet.only_ton_notification.label"),
          image: ("imgResolver" in n ? n.imgResolver : s(tt))("ton-logo", "svg")
        }, {
          default: E(({
            close: l
          }) => [_("div", Nn, [t[0] || (t[0] = _("img", {
            src: O,
            alt: "Ton logo"
          }, null, -1)), _("div", Tn, v(("t" in n ? n.t : s(i))("wallet.only_ton_notification.title")), 1), _("div", En, v(("t" in n ? n.t : s(i))("wallet.only_ton_notification.text")), 1), u(c, {
            label: ("t" in n ? n.t : s(i))("base.got_it"),
            fill: "",
            class: "button",
            size: s(B).LARGE,
            onClick: l
          }, null, 8, ["label", "size", "onClick"])])]),
          _: 1
        }, 8, ["text", "image"])
      }
    }
  }),
  An = h(Pn, [
    ["__scopeId", "data-v-0315755f"]
  ]),
  Sn = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_26695_20949)'%3e%3crect%20width='64'%20height='64'%20rx='32'%20fill='%230097EA'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.0565%2021C19.9024%2021%2019.1806%2022.2489%2019.7569%2023.2489L30%2041.0238V21H21.0565ZM34%2021V41.0238L44.2431%2023.2489C44.8194%2022.2489%2044.0976%2021%2042.9435%2021H34ZM16.2911%2025.2461C14.1782%2021.5795%2016.8246%2017%2021.0565%2017H42.9435C47.1754%2017%2049.8218%2021.5795%2047.7088%2025.2461L33.7329%2049.4986C33.3758%2050.1182%2032.7151%2050.5%2032%2050.5C31.2849%2050.5%2030.6242%2050.1182%2030.2671%2049.4986L16.2911%2025.2461Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_26695_20949'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Un = {
    class: "pages-wallet-asset-tokens"
  },
  Cn = f({
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
        t = T(() => {
          const c = {
              id: n.ton.currencyId,
              name: "Toncoin",
              symbol: "TON",
              balance: n.ton.balance,
              fiat: n.ton.fiatValue,
              imageUrl: Sn
            },
            o = n.jettons.map(l => ({
              id: l.currencyId,
              name: l.name,
              symbol: l.symbol,
              balance: l.balance,
              fiat: l.fiatValue,
              imageUrl: Pt(l.imageUrl),
              pnlPercent: l.pnlPercent,
              link: l.memepadShortname && At().resolve({
                name: "memepad-jetton-shortname",
                params: {
                  shortname: l.memepadShortname
                },
                query: {
                  memepadFrom: St.WALLET_BAR,
                  from: Ut.WALLET
                }
              }).href
            }));
          return [c, ...o]
        });
      return (c, o) => {
        const l = Rt;
        return a(), r("div", Un, [(a(!0), r(N, null, D(s(t), p => (a(), d(l, Ct({
          key: p.id,
          ref_for: !0
        }, p), null, 16))), 128))])
      }
    }
  }),
  Kn = h(Cn, [
    ["__scopeId", "data-v-75da087d"]
  ]),
  On = {
    class: "pages-wallet-block-tokens"
  },
  Dn = f({
    __name: "Tokens",
    props: {
      address: {},
      balance: {},
      notification: {}
    },
    emits: ["show:points", "show:tokens-history"],
    setup(e) {
      return (n, t) => {
        var w, I;
        const c = vn,
          o = $n,
          l = W,
          p = An,
          m = Kn;
        return a(), r("div", On, [u(c, {
          address: n.address,
          "fiat-value": (w = n.balance) == null ? void 0 : w.totalFiatValue,
          "updated-at": (I = n.balance) == null ? void 0 : I.updatedAt
        }, null, 8, ["address", "fiat-value", "updated-at"]), u(o, {
          "onShow:points": t[0] || (t[0] = $ => n.$emit("show:points")),
          "onShow:tokensHistory": t[1] || (t[1] = $ => n.$emit("show:tokens-history"))
        }), n.notification === void 0 ? (a(), d(l, {
          key: 0,
          class: "notification-skeleton notification"
        })) : n.notification === "default" ? (a(), d(p, {
          key: 1,
          class: "notification"
        })) : g("", !0), n.balance ? (a(), d(m, {
          key: 2,
          ton: n.balance.tonBalance,
          jettons: n.balance.jettonBalances,
          class: "tokens"
        }, null, 8, ["ton", "jettons"])) : g("", !0)])
      }
    }
  }),
  Wn = h(Dn, [
    ["__scopeId", "data-v-6315e498"]
  ]),
  Ln = {},
  Bn = {
    class: "pages-wallet-atoms-no-records"
  },
  Rn = {
    class: "label"
  };

function xn(e, n) {
  const t = A;
  return a(), r("div", Bn, [u(t, {
    name: "note-search",
    class: "icon"
  }), _("div", Rn, v(("t" in e ? e.t : s(i))("wallet.history.no_records")), 1)])
}
const Hn = h(Ln, [
    ["render", xn],
    ["__scopeId", "data-v-1d0de40b"]
  ]),
  Mn = {
    class: "pages-wallet-block-tokens-history"
  },
  Yn = {
    class: "heading"
  },
  Vn = {
    class: "title"
  },
  Fn = {
    key: 0,
    class: "wallet"
  },
  qn = {
    class: "value"
  },
  jn = f({
    __name: "TokensHistory",
    props: {
      address: {
        type: Object,
        default: void 0
      }
    },
    setup(e) {
      const t = et(async c => {
        const o = await J.getTokensHistory(c);
        if (o.err) throw k("Unable to load tokens history");
        return {
          nextPageToken: o.data.nextPageToken,
          items: o.data.actions
        }
      });
      return (c, o) => {
        const l = Hn,
          p = _t,
          m = nt;
        return a(), r("div", Mn, [_("div", Yn, [_("div", Vn, v(("t" in c ? c.t : s(i))("wallet.history.title")), 1), e.address ? (a(), r("div", Fn, [o[1] || (o[1] = _("img", {
          src: O,
          alt: "Ton logo"
        }, null, -1)), _("div", qn, v(e.address.short), 1)])) : g("", !0)]), u(m, {
          onEnd: o[0] || (o[0] = w => s(t).load())
        }, {
          default: E(() => [s(t).isEmpty.value ? (a(), d(l, {
            key: 0,
            class: "no-records"
          })) : (a(), d(p, {
            key: 1,
            history: s(t).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  zn = h(jn, [
    ["__scopeId", "data-v-55fd4c6d"]
  ]),
  Gn = {
    class: "wallet-index-page page"
  };
var ut = (e => (e.WALLET = "wallet", e.POINTS = "points", e.TOKENS_HISTORY = "tokens_history", e))(ut || {});
const Qn = f({
    __name: "index",
    setup(e) {
      const n = H(),
        t = Kt(),
        c = X(),
        o = (() => {
          const m = q("tab", ut),
            w = q("source", Wt);
          return Ht(), {
            page: m,
            source: w
          }
        })(),
        l = x(o.page ?? "wallet");
      n.wallet.walletPageOpen(o.source), j(() => t.wallet.value, m => {
        m.status !== "connected" && (l.value = "wallet")
      }), Ot().initWatcher({
        key: "wallet-page",
        watchFn: () => l.value !== "wallet",
        callback: () => l.value = "wallet"
      });
      const p = T(() => `wallet-${l.value}`);
      return j(p, () => Dt().meta.key = p.value), (m, w) => {
        const I = ht,
          $ = Qt,
          L = Jt,
          M = fe,
          U = Ie,
          Y = dn,
          pt = Wn,
          mt = zn;
        return a(), r("div", Gn, [s(t).wallet.value.status === "loading" || !s(c).availableInfo.value ? (a(), d(I, {
          key: 0
        })) : s(t).wallet.value.status === "must_reconnect" ? (a(), d($, {
          key: 1
        })) : (a(), r(N, {
          key: 2
        }, [s(t).isAvailable.value ? (a(), r(N, {
          key: 1
        }, [s(l) === "wallet" ? (a(), r(N, {
          key: 0
        }, [s(t).wallet.value.status === "not_found" ? (a(), r(N, {
          key: 0
        }, [u(U, {
          class: "connect-banner"
        }), s(t).points.value ? (a(), d(Y, {
          key: 0,
          points: s(t).points.value,
          notification: s(t).walletNotification.value
        }, null, 8, ["points", "notification"])) : g("", !0)], 64)) : s(t).wallet.value.status === "connected" ? (a(), d(pt, {
          key: 1,
          address: s(t).wallet.value.address,
          balance: s(t).wallet.value.balance,
          notification: s(t).walletNotification.value,
          "onShow:points": w[0] || (w[0] = yt => l.value = "points"),
          "onShow:tokensHistory": w[1] || (w[1] = yt => l.value = "tokens_history")
        }, null, 8, ["address", "balance", "notification"])) : g("", !0)], 64)) : s(l) === "points" ? (a(), r(N, {
          key: 1
        }, [s(t).points.value === void 0 ? (a(), d(I, {
          key: 0
        })) : (a(), d(Y, {
          key: 1,
          points: s(t).points.value,
          notification: s(t).walletNotification.value
        }, null, 8, ["points", "notification"]))], 64)) : s(l) === "tokens_history" && s(t).wallet.value.status === "connected" ? (a(), d(mt, {
          key: 2,
          address: s(t).wallet.value.address
        }, null, 8, ["address"])) : g("", !0)], 64)) : (a(), r(N, {
          key: 0
        }, [s(t).wallet.value.status === "not_found" ? (a(), d(L, {
          key: 0
        })) : s(t).wallet.value.status === "connected" ? (a(), d(M, {
          key: 1,
          address: s(t).wallet.value.address
        }, null, 8, ["address"])) : g("", !0)], 64))], 64))])
      }
    }
  }),
  us = h(Qn, [
    ["__scopeId", "data-v-46b8e8b3"]
  ]);
export {
  us as
  default
};