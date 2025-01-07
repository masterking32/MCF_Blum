import {
  _ as yt
} from "./XkP0CWxk.js";
import {
  _ as M
} from "./Z35Thri1.js";
import {
  a3 as I,
  cN as h,
  z as c,
  cO as g,
  d as b,
  a_ as K,
  o as i,
  G as p,
  e as o,
  f as y,
  an as vt,
  ao as ht,
  I as N,
  a as d,
  t as f,
  b as m,
  B as ft,
  W as V,
  _ as S,
  x as Y,
  aI as q,
  L as P,
  c as r,
  cP as O,
  cQ as bt,
  p as F,
  F as T,
  q as x,
  n as U,
  j as k,
  ad as gt,
  O as wt,
  w as H,
  D as $,
  cR as A,
  a7 as kt,
  V as $t,
  bk as L,
  X as j,
  cS as It,
  cT as Tt,
  am as Q,
  aN as Nt,
  ae as Pt,
  R as W,
  $ as Et,
  P as St,
  Q as B
} from "./CVKQB8Rv.js";
import {
  _ as z
} from "./D4Nie7W1.js";
import {
  _ as D
} from "./DpS7mAhG.js";
import {
  d as E
} from "./DaCHxoB5.js";
import {
  c as Ut,
  b as Ct,
  d as At
} from "./Bv_XXpHR.js";
import {
  _ as Kt
} from "./CAfukexD.js";
import {
  c as Ot
} from "./DPbxm6ol.js";
import "./DHPBEK3u.js";
import "./CvkAGP5n.js";
import "./B3FIR7ek.js";
import "./CrtR3p4W.js";
import "./Dq4Di-wu.js";
import "./CSrvhT6W.js";
import "./BZ75xDs_.js";
import "./Bt92pz5E.js";
const G = t => {
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
            throw I("Unknown history kind")
        }
      case h.TYPE.OUT:
        switch (t.kind) {
          case h.KIND_OUT.DROP_GAME:
            return c("wallet.history.points.out_drop_game");
          case h.KIND_OUT.WITHDRAW_TO_ONCHAIN:
            return c("wallet.history.points.out_withdraw_to_onchain");
          default:
            throw I("Unknown history kind")
        }
      case h.TYPE.UNKNOWN:
        return c("wallet.history.unknown");
      default:
        throw I("Unknown history type")
    }
  },
  Z = t => {
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
        throw I("Unknown history type")
    }
  },
  X = t => {
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
        throw I("Unknown history type")
    }
  },
  xt = t => ({
    title: G(t),
    details: Z(t),
    icon: X(t)
  }),
  Dt = {
    title: G,
    details: Z,
    icon: X,
    all: xt
  },
  J = t => {
    switch (t.type) {
      case g.TYPE.IN:
        return t.payload.inbound.nft ? c("wallet.history.tokens.in_nft") : c("wallet.history.tokens.in");
      case g.TYPE.OUT:
        return t.payload.outbound.nft ? c("wallet.history.tokens.out_nft") : c("wallet.history.tokens.out");
      case g.TYPE.SWAP:
        return c("wallet.history.tokens.swap");
      case g.TYPE.UNQUANTIFIED:
        return (() => {
          switch (t.kind) {
            case g.KIND_UNQUANTIFIED.CONTRACT_DEPLOY:
              return c("wallet.history.tokens.other_contract_deploy");
            case g.KIND_UNQUANTIFIED.CONTRACT_EXEC:
              return c("wallet.history.tokens.other_contract_execution");
            case g.KIND_UNQUANTIFIED.UNSUBSCRIBE:
              return c("wallet.history.tokens.other_unsubscribed");
            case g.KIND_UNQUANTIFIED.DOMAIN_RENEW:
              return c("wallet.history.tokens.other_domain_renew");
            case g.KIND_UNQUANTIFIED.WITHDRAW_STAKE_REQUEST:
              return c("wallet.history.tokens.other_stake_request");
            default:
              throw I("Unknown unquantified history kind")
          }
        })();
      case g.TYPE.UNKNOWN:
        return c("wallet.history.unknown");
      default:
        throw I("Unknown history type")
    }
  },
  tt = t => {
    switch (t.type) {
      case g.TYPE.IN: {
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
      case g.TYPE.OUT: {
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
      case g.TYPE.SWAP:
        return {
          details: `${t.payload.outbound.currency.symbol}→${t.payload.inbound.currency.symbol}`, isInternal: !1, prefix: void 0
        };
      case g.TYPE.UNQUANTIFIED:
        return;
      case g.TYPE.UNKNOWN:
        return;
      default:
        throw I("Unknown history type")
    }
  },
  et = t => {
    var n, e;
    switch (t.type) {
      case g.TYPE.IN:
        return {
          type: "single", icon: (n = t.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case g.TYPE.OUT:
        return {
          type: "single", icon: (e = t.payload.outbound.currency) == null ? void 0 : e.imageUrl
        };
      case g.TYPE.SWAP:
        return {
          type: "double", iconFrom: t.payload.outbound.currency.imageUrl, iconTo: t.payload.inbound.currency.imageUrl
        };
      case g.TYPE.UNQUANTIFIED:
        return;
      case g.TYPE.UNKNOWN:
        return;
      default:
        throw I("Unknown history type")
    }
  },
  Wt = t => ({
    title: J(t),
    details: tt(t),
    icon: et(t)
  }),
  Bt = {
    title: J,
    details: tt,
    icon: et,
    all: Wt
  },
  Lt = t => t.instance === "point",
  Rt = t => t.instance === "token",
  Ht = (t, n) => {
    if (Lt(t)) return n.point(t);
    if (Rt(t)) return n.token(t);
    throw I("Unknown history instance")
  },
  Mt = b({
    __name: "Reconnect",
    setup(t) {
      const {
        reconnect: n
      } = K();
      return (e, s) => {
        const l = M;
        return i(), p(l, {
          lottie: "animations/Star",
          "icon-size": 116,
          title: ("t" in e ? e.t : o(c))("wallet.reconnect.title"),
          subtitle: ("t" in e ? e.t : o(c))("wallet.reconnect.subtitle"),
          "button-label": ("t" in e ? e.t : o(c))("wallet.reconnect.btn"),
          onButton: s[0] || (s[0] = a => o(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  Vt = y(Mt, [
    ["__scopeId", "data-v-29d5ae4b"]
  ]),
  Yt = b({
    __name: "NotConnected",
    setup(t) {
      const {
        openConnectModal: n
      } = K();
      return (e, s) => {
        const l = M;
        return i(), p(l, {
          lottie: "animations/Unicorn",
          "icon-size": 88,
          title: ("t" in e ? e.t : o(c))("wallet.legacy.not_connected.title"),
          subtitle: ("t" in e ? e.t : o(c))("wallet.legacy.not_connected.subtitle"),
          "button-label": ("t" in e ? e.t : o(c))("wallet.legacy.not_connected.btn"),
          onButton: s[0] || (s[0] = a => o(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  qt = y(Yt, [
    ["__scopeId", "data-v-8fdb824b"]
  ]),
  Ft = {
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
  Zt = b({
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
    setup(t) {
      const n = ht(t, "modelValue"),
        {
          disconnect: e,
          onDisconnected: s
        } = K();
      return s(() => n.value = !1), (l, a) => {
        const u = S,
          _ = Y,
          v = q;
        return i(), p(v, {
          modelValue: n.value,
          "onUpdate:modelValue": a[1] || (a[1] = w => n.value = w),
          title: "Wallet"
        }, {
          default: N(() => [d("div", Ft, [d("div", jt, [d("div", Qt, f(t.address.short), 1), d("div", zt, [m(u, {
            name: "circle-check-fill",
            class: "icon"
          }), d("span", Gt, f(("t" in l ? l.t : o(c))("wallet.sheet.active")), 1)])]), m(_, {
            label: ("t" in l ? l.t : o(c))("wallet.sheet.disconnect"),
            type: o(ft).GHOST,
            "is-danger": "",
            size: o(V).LARGE,
            onClick: a[0] || (a[0] = w => o(e)())
          }, null, 8, ["label", "type", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Xt = y(Zt, [
    ["__scopeId", "data-v-07f164ab"]
  ]),
  Jt = {
    class: "pages-wallet-label"
  },
  te = {
    class: "address"
  },
  ee = b({
    __name: "Label",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
      const n = P(!1);
      return (e, s) => {
        const l = Xt;
        return i(), r("div", Jt, [d("div", {
          class: "label",
          onClick: s[0] || (s[0] = a => n.value = !0)
        }, [s[2] || (s[2] = d("img", {
          src: O,
          alt: "TON logo",
          class: "ton-logo"
        }, null, -1)), d("div", te, f(t.address.short), 1), s[3] || (s[3] = d("img", {
          src: bt,
          alt: "Arrow down",
          class: "arrow-icon"
        }, null, -1))]), m(l, {
          modelValue: o(n),
          "onUpdate:modelValue": s[1] || (s[1] = a => F(n) ? n.value = a : null),
          address: t.address
        }, null, 8, ["modelValue", "address"])])
      }
    }
  }),
  nt = y(ee, [
    ["__scopeId", "data-v-0aed5ea6"]
  ]),
  ne = {
    class: "kit-progress-stepper"
  },
  se = {
    class: "icon-wrapper"
  },
  oe = {
    class: "text"
  },
  ae = b({
    __name: "KitProgressStepper",
    props: {
      items: {
        type: Array,
        required: !0
      }
    },
    setup(t) {
      return (n, e) => {
        const s = S;
        return i(), r("div", ne, [(i(!0), r(T, null, x(t.items, l => (i(), r("div", {
          key: l.text,
          class: U(["item", {
            "is-active": l.active
          }])
        }, [d("div", se, [l.active ? (i(), p(s, {
          key: 0,
          name: "circle-check-white",
          class: "icon"
        })) : (i(), p(s, {
          key: 1,
          name: "circle-small",
          class: "icon"
        }))]), d("div", oe, f(l.text), 1)], 2))), 128))])
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
  de = b({
    __name: "Connected",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
      const n = k(() => [{
        active: !0,
        text: c("wallet.legacy.connected.step.ton_connect")
      }, {
        active: !1,
        text: c("wallet.legacy.connected.step.blum_wallet")
      }, {
        active: !1,
        text: c("wallet.legacy.connected.step.wallet_connect")
      }]);
      return (e, s) => {
        const l = z,
          a = gt,
          u = nt,
          _ = le;
        return i(), r("div", ie, [m(l, {
          class: "background"
        }), d("div", ce, [d("div", re, f(("t" in e ? e.t : o(c))("wallet.legacy.connected.title")), 1), m(a, {
          name: "animations/MoneyWings",
          size: 80,
          class: "icon"
        }), m(u, {
          address: t.address
        }, null, 8, ["address"]), m(_, {
          items: o(n),
          class: "progress"
        }, null, 8, ["items"])])])
      }
    }
  }),
  ue = y(de, [
    ["__scopeId", "data-v-bd91e87c"]
  ]),
  _e = {
    class: "pages-wallet-connect-banner"
  },
  pe = {
    class: "container"
  },
  me = ["innerHTML"],
  ye = b({
    __name: "ConnectBanner",
    setup(t) {
      const {
        openConnectModal: n
      } = K();
      return (e, s) => {
        const l = z;
        return i(), r("div", _e, [m(l, {
          class: "background"
        }), d("div", pe, [d("div", {
          class: "title",
          innerHTML: ("t" in e ? e.t : o(c))("wallet.connect_banner.title")
        }, null, 8, me), d("button", {
          class: "btn reset",
          onClick: s[0] || (s[0] = a => o(n)())
        }, f(("t" in e ? e.t : o(c))("wallet.connect_banner.btn")), 1)])])
      }
    }
  }),
  ve = y(ye, [
    ["__scopeId", "data-v-256671da"]
  ]),
  he = {
    class: "pages-wallet-block-points-fiat-equal"
  },
  fe = b({
    __name: "PointsFiatEqual",
    props: {
      value: {
        type: Object,
        default: void 0
      }
    },
    setup(t) {
      return (n, e) => {
        const s = D;
        return i(), r("div", he, [t.value === void 0 ? (i(), p(s, {
          key: 0,
          class: "skeleton",
          rounded: ""
        })) : (i(), r("div", {
          key: 1,
          class: U(["value", {
            "is-highlighted": t.value.value.greaterThan(0)
          }])
        }, f(t.value.defaultWithSymbol), 3))])
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
  const e = S;
  return i(), r("div", we, [m(e, {
    name: "clock",
    class: "icon"
  }), d("div", ke, f(("t" in t ? t.t : o(c))("wallet.history.coming_soon")), 1)])
}
const Ie = y(ge, [
    ["render", $e],
    ["__scopeId", "data-v-3ac68509"]
  ]),
  Te = ["src"],
  Ne = ["src"],
  Pe = b({
    __name: "HistoryItemIcon",
    props: {
      icon: {}
    },
    setup(t) {
      const n = t,
        e = k(() => {
          if (n.icon === void 0) return [E];
          if (n.icon.type === "single") return [n.icon.icon ?? E];
          if (n.icon.type === "double") return [n.icon.iconFrom ?? E, n.icon.iconTo ?? E];
          throw n.icon, I("Unknown icon type")
        });
      return (s, l) => {
        const a = wt("img-error");
        return i(), r("div", {
          class: U(["pages-wallet-history-item-icon", {
            "is-single": o(e).length === 1,
            "is-double": o(e).length === 2
          }])
        }, [H(d("img", {
          src: o(e)[0],
          alt: "Transaction icon"
        }, null, 8, Te), [
          [a, o(E)]
        ]), o(e).length === 2 ? H((i(), r("img", {
          key: 0,
          src: o(e)[1],
          alt: "Transaction icon"
        }, null, 8, Ne)), [
          [a, o(E)]
        ]) : $("", !0)], 2)
      }
    }
  }),
  Ee = y(Pe, [
    ["__scopeId", "data-v-43176a1b"]
  ]),
  Se = {
    class: "label"
  },
  Ue = b({
    __name: "HistoryItemStatus",
    props: {
      status: {
        type: String,
        required: !0
      }
    },
    setup(t) {
      const n = t,
        e = k(() => {
          switch (n.status) {
            case A.STATUS.PENDING:
              return;
            case A.STATUS.FAILED:
              return {
                icon: "circle-warning-fill", label: "Failed", cls: "is-failed"
              };
            case A.STATUS.OK:
              return {
                icon: "circle-check-fill", label: "Success", cls: "is-success"
              };
            default:
              throw n.status, I("Unknown history status")
          }
        });
      return (s, l) => {
        const a = S;
        return o(e) ? (i(), r("div", {
          key: 0,
          class: U(["pages-wallet-history-item-status", o(e).cls])
        }, [m(a, {
          name: o(e).icon,
          class: "icon"
        }, null, 8, ["name"]), d("div", Se, f(o(e).label), 1)], 2)) : $("", !0)
      }
    }
  }),
  Ce = y(Ue, [
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
  xe = {
    key: 0,
    class: "details"
  },
  De = {
    key: 0,
    class: "right-text"
  },
  We = b({
    __name: "HistoryItem",
    props: {
      historyItem: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
      const n = t,
        e = k(() => Ht(n.historyItem, {
          point: a => ({
            ...Dt.all(a),
            status: a.payload.status
          }),
          token: a => ({
            ...Bt.all(a),
            status: a.payload.status
          })
        })),
        s = k(() => {
          if (!(!e.value.details || e.value.details.isInternal)) return e.value.details.details
        }),
        l = k(() => {
          if (e.value.details && e.value.details.isInternal) {
            let a = e.value.details.details;
            return e.value.details.prefix && (a = `${e.value.details.prefix}${a}`), {
              type: "text",
              text: a
            }
          }
          if (e.value.status !== A.STATUS.OK) return {
            type: "status",
            status: e.value.status
          }
        });
      return (a, u) => {
        const _ = Ee,
          v = Ce;
        return i(), r("div", Ae, [m(_, {
          icon: o(e).icon
        }, null, 8, ["icon"]), d("div", Ke, [d("div", Oe, f(o(e).title), 1), o(s) ? (i(), r("div", xe, f(o(s)), 1)) : $("", !0)]), o(l) ? (i(), r(T, {
          key: 0
        }, [o(l).type === "text" ? (i(), r("div", De, f(o(l).text), 1)) : o(l).type === "status" ? (i(), p(v, {
          key: 1,
          status: o(l).status,
          class: "status"
        }, null, 8, ["status"])) : $("", !0)], 64)) : $("", !0)])
      }
    }
  }),
  Be = y(We, [
    ["__scopeId", "data-v-6587f464"]
  ]),
  Le = {
    class: "pages-wallet-history"
  },
  Re = {
    key: 0,
    class: "date"
  },
  He = b({
    __name: "History",
    props: {
      history: {
        type: Array,
        required: !0
      }
    },
    setup(t) {
      return (n, e) => {
        const s = Be;
        return i(), r("div", Le, [(i(!0), r(T, null, x(t.history, (l, a) => (i(), r(T, {
          key: a
        }, [a === 0 || t.history[a - 1].date.stamp !== t.history[a].date.stamp ? (i(), r("div", Re, f(l.date.formatted), 1)) : $("", !0), m(s, {
          "history-item": l
        }, null, 8, ["history-item"])], 64))), 128))])
      }
    }
  }),
  st = y(He, [
    ["__scopeId", "data-v-edabb2b5"]
  ]),
  Me = {
    class: "kit-scroll-observer"
  },
  Ve = b({
    __name: "KitScrollObserver",
    emits: ["end"],
    setup(t, {
      emit: n
    }) {
      const e = n,
        s = P(),
        l = new IntersectionObserver(a => a[0].isIntersecting && e("end"), {
          threshold: 1
        });
      return kt(() => s.value && l.observe(s.value)), $t(() => l.disconnect()), (a, u) => (i(), r("div", Me, [L(a.$slots, "default", {}, void 0, !0), d("div", {
        ref_key: "endRef",
        ref: s,
        class: "end"
      }, null, 512)]))
    }
  }),
  ot = y(Ve, [
    ["__scopeId", "data-v-a9019fbd"]
  ]),
  at = t => {
    const n = P(),
      e = P(!1),
      s = P(!1),
      l = async () => {
        var v, w;
        if (e.value || s.value) return;
        e.value = !0;
        const u = (w = (v = n.value) == null ? void 0 : v[n.value.length - 1]) == null ? void 0 : w.nextPageToken,
          _ = await t(u);
        if (n.value || (n.value = []), n.value.push({
            nextPageToken: _.nextPageToken,
            items: _.items
          }), _.items.length === 0 || _.nextPageToken === "0" || _.nextPageToken === "" || u === _.nextPageToken) {
          s.value = !0, e.value = !1;
          return
        }
        e.value = !1
      }, a = k(() => {
        var u;
        return (u = n.value) == null ? void 0 : u.flatMap(_ => _.items)
      });
    return {
      isInitialized: k(() => n.value !== void 0),
      isLoading: k(() => e.value),
      isEmpty: k(() => {
        var u;
        return ((u = a.value) == null ? void 0 : u.length) === 0
      }),
      data: k(() => a.value ?? []),
      load: l
    }
  },
  Ye = {
    class: "pages-wallet-points-history"
  },
  qe = b({
    __name: "PointsHistory",
    setup(t) {
      const e = at(async s => {
        const l = await j.getPointsHistory(s);
        if (l.err) throw I("Unable to load points history");
        return {
          nextPageToken: l.data.nextPageToken,
          items: l.data.actions
        }
      });
      return (s, l) => {
        const a = Ie,
          u = st,
          _ = ot;
        return i(), r("div", Ye, [m(_, {
          onEnd: l[0] || (l[0] = v => o(e).load())
        }, {
          default: N(() => [o(e).isEmpty.value ? (i(), p(a, {
            key: 0
          })) : (i(), p(u, {
            key: 1,
            history: o(e).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  Fe = y(qe, [
    ["__scopeId", "data-v-7c645fab"]
  ]),
  je = {
    class: "kit-label-with-bottom-sheet"
  },
  Qe = {
    key: 0,
    class: "image"
  },
  ze = ["src"],
  Ge = {
    class: "text"
  },
  Ze = b({
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
      const n = P(!1),
        e = () => n.value = !1;
      return (s, l) => {
        const a = S,
          u = q;
        return i(), r("div", je, [d("div", {
          class: U(["label", `is-${t.type}`]),
          onClick: l[0] || (l[0] = _ => n.value = !0)
        }, [t.image || s.$slots.image ? (i(), r("div", Qe, [L(s.$slots, "image", {}, () => [t.image ? (i(), r("img", {
          key: 0,
          src: t.image,
          alt: "Image"
        }, null, 8, ze)) : $("", !0)], !0)])) : $("", !0), d("div", Ge, f(t.text), 1), m(a, {
          name: "chevron-right",
          class: "icon"
        })], 2), m(u, {
          modelValue: o(n),
          "onUpdate:modelValue": l[1] || (l[1] = _ => F(n) ? n.value = _ : null),
          title: t.title,
          banner: t.banner
        }, {
          default: N(() => [L(s.$slots, "default", {
            close: e
          }, void 0, !0)]),
          _: 3
        }, 8, ["modelValue", "title", "banner"])])
      }
    }
  }),
  lt = y(Ze, [
    ["__scopeId", "data-v-e9eaa47e"]
  ]),
  Xe = {};

function Je(t, n) {
  const e = Ut,
    s = lt;
  return i(), p(s, {
    text: ("t" in t ? t.t : o(c))("wallet.drop.notification.label"),
    class: "pages-wallet-block-details-soon-notification-with-label"
  }, {
    image: N(() => n[0] || (n[0] = [d("img", {
      class: "img",
      src: O,
      alt: "Ton logo"
    }, null, -1), d("img", {
      class: "img",
      src: It,
      alt: "Notcoin logo"
    }, null, -1)])),
    default: N(({
      close: l
    }) => [m(e, {
      onClose: a => l()
    }, null, 8, ["onClose"])]),
    _: 1
  }, 8, ["text"])
}
const tn = y(Xe, [
    ["render", Je],
    ["__scopeId", "data-v-eb9556ff"]
  ]),
  en = {
    class: "pages-wallet-block-points"
  },
  nn = {
    class: "heading"
  },
  sn = {
    class: "title"
  },
  on = b({
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
      const n = k(() => [{
        key: "balances",
        label: c("wallet.points.tabs.balances")
      }, {
        key: "history",
        label: c("wallet.points.tabs.history")
      }]);
      return (e, s) => {
        const l = be,
          a = Fe,
          u = D,
          _ = tn,
          v = Ct,
          w = Kt;
        return i(), r("div", en, [d("div", nn, [d("div", sn, f(("t" in e ? e.t : o(c))("wallet.points.title")), 1), m(l, {
          value: t.points.totalFiatValue.USD
        }, null, 8, ["value"])]), m(w, {
          tabs: o(n),
          class: "tabs"
        }, {
          history: N(() => [m(a, {
            class: "history"
          })]),
          balances: N(() => [t.notification === void 0 ? (i(), p(u, {
            key: 0,
            class: "notification-skeleton notification"
          })) : t.notification === "default" ? (i(), p(_, {
            key: 1,
            class: "notification"
          })) : $("", !0), m(v, {
            points: t.points.points
          }, null, 8, ["points"])]),
          _: 1
        }, 8, ["tabs"])])
      }
    }
  }),
  an = y(on, [
    ["__scopeId", "data-v-013937d8"]
  ]),
  ln = {
    class: "pages-wallet-connected-banner"
  },
  cn = {
    key: 1,
    class: "balance"
  },
  rn = {
    class: "value"
  },
  dn = {
    key: 2,
    class: "last-updated"
  },
  un = b({
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
        e = k(() => {
          if (n.updatedAt && Date.now() - n.updatedAt.getTime() > 3e5) return Tt(n.updatedAt)
        });
      return (s, l) => {
        const a = nt,
          u = D;
        return i(), r("div", ln, [m(a, {
          address: t.address
        }, null, 8, ["address"]), t.fiatValue === void 0 || t.fiatValue.USD == null ? (i(), p(u, {
          key: 0,
          class: "skeleton"
        })) : (i(), r("div", cn, [l[0] || (l[0] = d("span", {
          class: "symbol"
        }, "$", -1)), d("span", rn, f(t.fiatValue.USD.default), 1)])), o(e) ? (i(), r("div", dn, f(("t" in s ? s.t : o(c))("wallet.connected.last_updated", {
          updatedAtLabel: o(e)
        })), 1)) : $("", !0)])
      }
    }
  }),
  _n = y(un, [
    ["__scopeId", "data-v-6e2f0c44"]
  ]),
  pn = {
    class: "pages-wallet-controls"
  },
  mn = ["onClick"],
  yn = {
    class: "icon"
  },
  vn = ["src", "alt"],
  hn = {
    class: "label"
  },
  fn = b({
    __name: "Controls",
    emits: ["show:points", "show:tokens-history"],
    setup(t, {
      emit: n
    }) {
      const e = n,
        s = k(() => [{
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
      return (l, a) => (i(), r("div", pn, [(i(!0), r(T, null, x(o(s), (u, _) => (i(), r("button", {
        key: _,
        class: U(["control reset", {
          "is-disabled": u.disabled
        }]),
        onClick: v => {
          var w;
          return (w = u.onClick) == null ? void 0 : w.call(u)
        }
      }, [d("div", yn, [d("img", {
        src: ("imgResolver" in l ? l.imgResolver : o(Q))(u.icon, "svg"),
        alt: `${u.label} icon`
      }, null, 8, vn)]), d("div", hn, f(u.label), 1)], 10, mn))), 128))]))
    }
  }),
  bn = y(fn, [
    ["__scopeId", "data-v-2fa06ff8"]
  ]),
  gn = {
    class: "pages-wallet-block-tokens-only-ton-notification"
  },
  wn = {
    class: "title"
  },
  kn = {
    class: "text"
  },
  $n = b({
    __name: "TokensOnlyTonNotification",
    setup(t) {
      return (n, e) => {
        const s = Y,
          l = lt;
        return i(), p(l, {
          text: ("t" in n ? n.t : o(c))("wallet.only_ton_notification.label"),
          image: ("imgResolver" in n ? n.imgResolver : o(Q))("ton-logo", "svg")
        }, {
          default: N(({
            close: a
          }) => [d("div", gn, [e[0] || (e[0] = d("img", {
            src: O,
            alt: "Ton logo"
          }, null, -1)), d("div", wn, f(("t" in n ? n.t : o(c))("wallet.only_ton_notification.title")), 1), d("div", kn, f(("t" in n ? n.t : o(c))("wallet.only_ton_notification.text")), 1), m(s, {
            label: ("t" in n ? n.t : o(c))("base.got_it"),
            fill: "",
            class: "button",
            size: o(V).LARGE,
            onClick: a
          }, null, 8, ["label", "size", "onClick"])])]),
          _: 1
        }, 8, ["text", "image"])
      }
    }
  }),
  In = y($n, [
    ["__scopeId", "data-v-0315755f"]
  ]),
  Tn = "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_12285_76772)'%3e%3cpath%20d='M16.25%208C16.25%2012.2802%2012.7802%2015.75%208.5%2015.75C4.21979%2015.75%200.75%2012.2802%200.75%208C0.75%203.71979%204.21979%200.25%208.5%200.25C12.7802%200.25%2016.25%203.71979%2016.25%208Z'%20fill='%230088CC'%20stroke='%23282828'%20stroke-width='0.5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.76529%204.44434H11.2438C11.4532%204.44434%2011.6276%204.48121%2011.837%204.59184C12.0813%204.70246%2012.2208%204.88684%2012.2906%205.03434C12.2906%205.03434%2012.2906%205.07122%2012.3255%205.07122C12.4302%205.25559%2012.5%205.47684%2012.5%205.73497C12.5%205.95622%2012.4651%206.17747%2012.3255%206.39873L8.87093%2012.6675C8.80115%2012.815%208.66157%2012.8888%208.48709%2012.8888C8.34751%2012.8888%208.20793%2012.815%208.10325%2012.6675L4.71845%206.39873C4.64866%206.25123%204.50908%206.06685%204.50908%205.77185C4.47418%205.51372%204.54397%205.29247%204.64866%205.07122C4.75334%204.84996%204.92782%204.66559%205.17208%204.59184C5.38145%204.44434%205.62571%204.44434%205.76529%204.44434ZM8.06835%205.32934H5.76529C5.62571%205.32934%205.55592%205.32934%205.52103%205.36622C5.45124%205.40309%205.41634%205.43997%205.38145%205.51372C5.34655%205.55059%205.34655%205.62435%205.34655%205.6981C5.34655%205.73497%205.38145%205.77185%205.45124%205.91935L8.06835%2010.7131V5.32934ZM8.90583%205.32934V10.75L11.5578%205.91935C11.5927%205.8456%2011.5927%205.77185%2011.5927%205.6981C11.5927%205.62435%2011.5927%205.55059%2011.5578%205.51372C11.5229%205.47684%2011.5229%205.43997%2011.488%205.43997L11.4532%205.40309C11.3834%205.36622%2011.3136%205.36622%2011.2089%205.36622H8.90583V5.32934Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_12285_76772'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Nn = {
    class: "pages-wallet-asset-tokens"
  },
  Pn = b({
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
        e = k(() => {
          const s = {
              id: n.ton.currencyId,
              name: "Toncoin",
              symbol: "TON",
              balance: n.ton.balance,
              fiat: n.ton.fiatValue,
              imageUrl: Tn
            },
            l = n.jettons.map(a => ({
              id: a.currencyId,
              name: a.name,
              symbol: a.symbol,
              balance: a.balance,
              fiat: a.fiatValue,
              imageUrl: Nt(a.imageUrl),
              pnlPercent: a.pnlPercent
            }));
          return [s, ...l]
        });
      return (s, l) => {
        const a = At;
        return i(), r("div", Nn, [(i(!0), r(T, null, x(o(e), u => (i(), p(a, Pt({
          key: u.id,
          ref_for: !0
        }, u), null, 16))), 128))])
      }
    }
  }),
  En = y(Pn, [
    ["__scopeId", "data-v-1c80b61a"]
  ]),
  Sn = {
    class: "pages-wallet-block-tokens"
  },
  Un = b({
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
        var v, w;
        const s = _n,
          l = bn,
          a = D,
          u = In,
          _ = En;
        return i(), r("div", Sn, [m(s, {
          address: t.address,
          "fiat-value": (v = t.balance) == null ? void 0 : v.totalFiatValue,
          "updated-at": (w = t.balance) == null ? void 0 : w.updatedAt
        }, null, 8, ["address", "fiat-value", "updated-at"]), m(l, {
          "onShow:points": e[0] || (e[0] = C => n.$emit("show:points")),
          "onShow:tokensHistory": e[1] || (e[1] = C => n.$emit("show:tokens-history"))
        }), t.notification === void 0 ? (i(), p(a, {
          key: 0,
          class: "notification-skeleton notification"
        })) : t.notification === "default" ? (i(), p(u, {
          key: 1,
          class: "notification"
        })) : $("", !0), t.balance ? (i(), p(_, {
          key: 2,
          ton: t.balance.tonBalance,
          jettons: t.balance.jettonBalances,
          class: "tokens"
        }, null, 8, ["ton", "jettons"])) : $("", !0)])
      }
    }
  }),
  Cn = y(Un, [
    ["__scopeId", "data-v-d12b7baa"]
  ]),
  An = {},
  Kn = {
    class: "pages-wallet-atoms-no-records"
  },
  On = {
    class: "label"
  };

function xn(t, n) {
  const e = S;
  return i(), r("div", Kn, [m(e, {
    name: "note-search",
    class: "icon"
  }), d("div", On, f(("t" in t ? t.t : o(c))("wallet.history.no_records")), 1)])
}
const Dn = y(An, [
    ["render", xn],
    ["__scopeId", "data-v-1d0de40b"]
  ]),
  Wn = {
    class: "pages-wallet-block-tokens-history"
  },
  Bn = {
    class: "heading"
  },
  Ln = {
    class: "title"
  },
  Rn = {
    key: 0,
    class: "wallet"
  },
  Hn = {
    class: "value"
  },
  Mn = b({
    __name: "TokensHistory",
    props: {
      address: {
        type: Object,
        default: void 0
      }
    },
    setup(t) {
      const e = at(async s => {
        const l = await j.getTokensHistory(s);
        if (l.err) throw I("Unable to load tokens history");
        return {
          nextPageToken: l.data.nextPageToken,
          items: l.data.actions
        }
      });
      return (s, l) => {
        const a = Dn,
          u = st,
          _ = ot;
        return i(), r("div", Wn, [d("div", Bn, [d("div", Ln, f(("t" in s ? s.t : o(c))("wallet.history.title")), 1), t.address ? (i(), r("div", Rn, [l[1] || (l[1] = d("img", {
          src: O,
          alt: "Ton logo"
        }, null, -1)), d("div", Hn, f(t.address.short), 1)])) : $("", !0)]), m(_, {
          onEnd: l[0] || (l[0] = v => o(e).load())
        }, {
          default: N(() => [o(e).isEmpty.value ? (i(), p(a, {
            key: 0,
            class: "no-records"
          })) : (i(), p(u, {
            key: 1,
            history: o(e).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  Vn = y(Mn, [
    ["__scopeId", "data-v-55fd4c6d"]
  ]),
  Yn = {
    class: "wallet-index-page page"
  };
var it = (t => (t.WALLET = "wallet", t.POINTS = "points", t.TOKENS_HISTORY = "tokens_history", t))(it || {});
const qn = b({
    __name: "index",
    setup(t) {
      const n = W();
      Et().wallet.walletPageOpen();
      const s = St(),
        l = v => Object.values(it).includes(v),
        a = P((() => {
          const v = Array.isArray(n.query.tab) ? n.query.tab[0] : n.query.tab;
          return v && (Ot(), l(v)) ? v : "wallet"
        })());
      B(() => s.wallet.value, v => {
        v.status !== "connected" && (a.value = "wallet")
      });
      const u = k(() => {
        if (a.value !== "wallet") return () => a.value = "wallet"
      });
      B(u, v => W().meta.back = v, {
        immediate: !0
      });
      const _ = k(() => `wallet-${a.value}`);
      return B(_, () => W().meta.key = _.value), (v, w) => {
        const C = yt,
          ct = Vt,
          rt = qt,
          dt = ue,
          ut = ve,
          R = an,
          _t = Cn,
          pt = Vn;
        return i(), r("div", Yn, [o(s).wallet.value.status === "loading" ? (i(), p(C, {
          key: 0
        })) : o(s).wallet.value.status === "must_reconnect" ? (i(), p(ct, {
          key: 1
        })) : (i(), r(T, {
          key: 2
        }, [o(s).isAvailable.value ? (i(), r(T, {
          key: 1
        }, [o(a) === "wallet" ? (i(), r(T, {
          key: 0
        }, [o(s).wallet.value.status === "not_found" ? (i(), r(T, {
          key: 0
        }, [m(ut, {
          class: "connect-banner"
        }), o(s).points.value ? (i(), p(R, {
          key: 0,
          points: o(s).points.value,
          notification: o(s).walletNotification.value
        }, null, 8, ["points", "notification"])) : $("", !0)], 64)) : o(s).wallet.value.status === "connected" ? (i(), p(_t, {
          key: 1,
          address: o(s).wallet.value.address,
          balance: o(s).wallet.value.balance,
          notification: o(s).walletNotification.value,
          "onShow:points": w[0] || (w[0] = mt => a.value = "points"),
          "onShow:tokensHistory": w[1] || (w[1] = mt => a.value = "tokens_history")
        }, null, 8, ["address", "balance", "notification"])) : $("", !0)], 64)) : o(a) === "points" ? (i(), r(T, {
          key: 1
        }, [o(s).points.value === void 0 ? (i(), p(C, {
          key: 0
        })) : (i(), p(R, {
          key: 1,
          points: o(s).points.value,
          notification: o(s).walletNotification.value
        }, null, 8, ["points", "notification"]))], 64)) : o(a) === "tokens_history" && o(s).wallet.value.status === "connected" ? (i(), p(pt, {
          key: 2,
          address: o(s).wallet.value.address
        }, null, 8, ["address"])) : $("", !0)], 64)) : (i(), r(T, {
          key: 0
        }, [o(s).wallet.value.status === "not_found" ? (i(), p(rt, {
          key: 0
        })) : o(s).wallet.value.status === "connected" ? (i(), p(dt, {
          key: 1,
          address: o(s).wallet.value.address
        }, null, 8, ["address"])) : $("", !0)], 64))], 64))])
      }
    }
  }),
  rs = y(qn, [
    ["__scopeId", "data-v-00088916"]
  ]);
export {
  rs as
  default
};