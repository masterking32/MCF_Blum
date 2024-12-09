import {
  _ as Nt
} from "./Cdj-cREA.js";
import {
  _ as J
} from "./BoZY2uSh.js";
import {
  L as T,
  cZ as $,
  f as r,
  c_ as w,
  d as b,
  b8 as L,
  a as l,
  m as p,
  e as s,
  j as v,
  az as X,
  aA as F,
  x as N,
  b as u,
  t as g,
  k as y,
  Y as Pt,
  B as V,
  N as K,
  C as H,
  aT as j,
  r as P,
  c as d,
  c$ as R,
  d0 as St,
  V as z,
  W as I,
  X as A,
  n as S,
  F as h,
  A as tt,
  a8 as et,
  w as Y,
  g as k,
  d1 as E,
  aj as Ut,
  o as Ct,
  aC as O,
  K as nt,
  E as st,
  J as At,
  ax as B,
  d2 as xt,
  aK as M,
  h as Kt,
  aJ as Wt,
  aZ as Et,
  ap as ot,
  av as D,
  P as Dt,
  aL as Z,
  b1 as Ot,
  d3 as Bt,
  ay as q,
  ab as Lt,
  ao as Vt
} from "./Ddf_vcE7.js";
import {
  _ as at,
  d as C
} from "./2VrX2zfM.js";
import {
  _ as W
} from "./DaQ9Brp1.js";
import {
  g as Ht
} from "./_5sz2Wx2.js";
import {
  c as Rt
} from "./DPbxm6ol.js";
import "./B8aUunDU.js";
import "./DpPsnk7w.js";
const lt = e => {
    switch (e.type) {
      case $.TYPE.IN:
        switch (e.kind) {
          case $.KIND_IN.CLAIM_FARMING:
            return r("wallet.history.points.in_farming");
          case $.KIND_IN.CLAIM_TASK:
            return r("wallet.history.points.in_task");
          case $.KIND_IN.CLAIM_REFERRAL:
            return r("wallet.history.points.in_frens");
          case $.KIND_IN.CLAIM_CHECK_IN:
            return r("wallet.history.points.in_daily_rewards");
          case $.KIND_IN.DROP_GAME:
            return r("wallet.history.points.in_drop_game");
          case $.KIND_IN.BLUM_DROP:
            return r("wallet.history.points.in_blum_drop");
          case $.KIND_IN.WALLET_MIGRATION:
            return r("wallet.history.points.in_wallet_migration");
          case $.KIND_IN.MANUAL:
            return r("wallet.history.points.in_manual");
          default:
            throw T("Unknown history kind")
        }
      case $.TYPE.OUT:
        switch (e.kind) {
          case $.KIND_OUT.DROP_GAME:
            return r("wallet.history.points.out_drop_game");
          case $.KIND_OUT.WITHDRAW_TO_ONCHAIN:
            return r("wallet.history.points.out_withdraw_to_onchain");
          default:
            throw T("Unknown history kind")
        }
      case $.TYPE.UNKNOWN:
        return r("wallet.history.unknown");
      default:
        throw T("Unknown history type")
    }
  },
  it = e => {
    switch (e.type) {
      case $.TYPE.IN: {
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
      case $.TYPE.OUT: {
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
      case $.TYPE.UNKNOWN:
        return;
      default:
        throw T("Unknown history type")
    }
  },
  ct = e => {
    var n, t;
    switch (e.type) {
      case $.TYPE.IN:
        return {
          type: "single", icon: (n = e.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case $.TYPE.OUT:
        return {
          type: "single", icon: (t = e.payload.outbound.currency) == null ? void 0 : t.imageUrl
        };
      case $.TYPE.UNKNOWN:
        return;
      default:
        throw T("Unknown history type")
    }
  },
  Mt = e => ({
    title: lt(e),
    details: it(e),
    icon: ct(e)
  }),
  qt = {
    title: lt,
    details: it,
    icon: ct,
    all: Mt
  },
  rt = e => {
    switch (e.type) {
      case w.TYPE.IN:
        return e.payload.inbound.nft ? r("wallet.history.tokens.in_nft") : r("wallet.history.tokens.in");
      case w.TYPE.OUT:
        return e.payload.outbound.nft ? r("wallet.history.tokens.out_nft") : r("wallet.history.tokens.out");
      case w.TYPE.SWAP:
        return r("wallet.history.tokens.swap");
      case w.TYPE.UNQUANTIFIED:
        return (() => {
          switch (e.kind) {
            case w.KIND_UNQUANTIFIED.CONTRACT_DEPLOY:
              return r("wallet.history.tokens.other_contract_deploy");
            case w.KIND_UNQUANTIFIED.CONTRACT_EXEC:
              return r("wallet.history.tokens.other_contract_execution");
            case w.KIND_UNQUANTIFIED.UNSUBSCRIBE:
              return r("wallet.history.tokens.other_unsubscribed");
            case w.KIND_UNQUANTIFIED.DOMAIN_RENEW:
              return r("wallet.history.tokens.other_domain_renew");
            case w.KIND_UNQUANTIFIED.WITHDRAW_STAKE_REQUEST:
              return r("wallet.history.tokens.other_stake_request");
            default:
              throw T("Unknown unquantified history kind")
          }
        })();
      case w.TYPE.UNKNOWN:
        return r("wallet.history.unknown");
      default:
        throw T("Unknown history type")
    }
  },
  dt = e => {
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
        throw T("Unknown history type")
    }
  },
  ut = e => {
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
        throw T("Unknown history type")
    }
  },
  Yt = e => ({
    title: rt(e),
    details: dt(e),
    icon: ut(e)
  }),
  Ft = {
    title: rt,
    details: dt,
    icon: ut,
    all: Yt
  },
  jt = e => e.instance === "point",
  zt = e => e.instance === "token",
  Gt = (e, n) => {
    if (jt(e)) return n.point(e);
    if (zt(e)) return n.token(e);
    throw T("Unknown history instance")
  },
  Qt = b({
    __name: "Reconnect",
    setup(e) {
      const {
        reconnect: n
      } = L();
      return (t, o) => {
        const i = J;
        return l(), p(i, {
          lottie: "animations/Star",
          "icon-size": 116,
          title: ("t" in t ? t.t : s(r))("wallet.reconnect.title"),
          subtitle: ("t" in t ? t.t : s(r))("wallet.reconnect.subtitle"),
          "button-label": ("t" in t ? t.t : s(r))("wallet.reconnect.btn"),
          onButton: o[0] || (o[0] = a => s(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  Zt = v(Qt, [
    ["__scopeId", "data-v-29d5ae4b"]
  ]),
  Jt = b({
    __name: "NotConnected",
    setup(e) {
      const {
        openConnectModal: n
      } = L();
      return (t, o) => {
        const i = J;
        return l(), p(i, {
          lottie: "animations/Unicorn",
          "icon-size": 88,
          title: ("t" in t ? t.t : s(r))("wallet.legacy.not_connected.title"),
          subtitle: ("t" in t ? t.t : s(r))("wallet.legacy.not_connected.subtitle"),
          "button-label": ("t" in t ? t.t : s(r))("wallet.legacy.not_connected.btn"),
          onButton: o[0] || (o[0] = a => s(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  Xt = v(Jt, [
    ["__scopeId", "data-v-8fdb824b"]
  ]),
  te = {
    class: "pages-wallet-label-bottom-sheet"
  },
  ee = {
    class: "address-status"
  },
  ne = {
    class: "address"
  },
  se = {
    class: "status"
  },
  oe = {
    class: "label"
  },
  ae = b({
    __name: "LabelBottomSheet",
    props: X({
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
      const n = F(e, "modelValue"),
        {
          disconnect: t,
          onDisconnected: o
        } = L();
      return o(() => n.value = !1), (i, a) => {
        const c = K,
          _ = H,
          f = j;
        return l(), p(f, {
          modelValue: n.value,
          "onUpdate:modelValue": a[1] || (a[1] = m => n.value = m),
          title: "Wallet"
        }, {
          default: N(() => [u("div", te, [u("div", ee, [u("div", ne, g(e.address.short), 1), u("div", se, [y(c, {
            name: "circle-check-fill",
            class: "icon"
          }), u("span", oe, g(("t" in i ? i.t : s(r))("wallet.sheet.active")), 1)])]), y(_, {
            label: ("t" in i ? i.t : s(r))("wallet.sheet.disconnect"),
            type: s(Pt).GHOST,
            "is-danger": "",
            size: s(V).LARGE,
            onClick: a[0] || (a[0] = m => s(t)())
          }, null, 8, ["label", "type", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  le = v(ae, [
    ["__scopeId", "data-v-07f164ab"]
  ]),
  ie = {
    class: "pages-wallet-label"
  },
  ce = {
    class: "address"
  },
  re = b({
    __name: "Label",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(e) {
      const n = P(!1);
      return (t, o) => {
        const i = le;
        return l(), d("div", ie, [u("div", {
          class: "label",
          onClick: o[0] || (o[0] = a => n.value = !0)
        }, [o[2] || (o[2] = u("img", {
          src: R,
          alt: "TON logo",
          class: "ton-logo"
        }, null, -1)), u("div", ce, g(e.address.short), 1), o[3] || (o[3] = u("img", {
          src: St,
          alt: "Arrow down",
          class: "arrow-icon"
        }, null, -1))]), y(i, {
          modelValue: s(n),
          "onUpdate:modelValue": o[1] || (o[1] = a => z(n) ? n.value = a : null),
          address: e.address
        }, null, 8, ["modelValue", "address"])])
      }
    }
  }),
  _t = v(re, [
    ["__scopeId", "data-v-0aed5ea6"]
  ]),
  de = {
    class: "kit-progress-stepper"
  },
  ue = {
    class: "icon-wrapper"
  },
  _e = {
    class: "text"
  },
  pe = b({
    __name: "KitProgressStepper",
    props: {
      items: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      return (n, t) => {
        const o = K;
        return l(), d("div", de, [(l(!0), d(I, null, A(e.items, i => (l(), d("div", {
          key: i.text,
          class: S(["item", {
            "is-active": i.active
          }])
        }, [u("div", ue, [i.active ? (l(), p(o, {
          key: 0,
          name: "circle-check-white",
          class: "icon"
        })) : (l(), p(o, {
          key: 1,
          name: "circle-small",
          class: "icon"
        }))]), u("div", _e, g(i.text), 1)], 2))), 128))])
      }
    }
  }),
  me = v(pe, [
    ["__scopeId", "data-v-c6e84c97"]
  ]),
  ye = {
    class: "pages-wallet-legacy-connected"
  },
  ve = {
    class: "container"
  },
  fe = {
    class: "title"
  },
  ge = b({
    __name: "Connected",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(e) {
      const n = h(() => [{
        active: !0,
        text: r("wallet.legacy.connected.step.ton_connect")
      }, {
        active: !1,
        text: r("wallet.legacy.connected.step.blum_wallet")
      }, {
        active: !1,
        text: r("wallet.legacy.connected.step.wallet_connect")
      }]);
      return (t, o) => {
        const i = at,
          a = tt,
          c = _t,
          _ = me;
        return l(), d("div", ye, [y(i, {
          class: "background"
        }), u("div", ve, [u("div", fe, g(("t" in t ? t.t : s(r))("wallet.legacy.connected.title")), 1), y(a, {
          name: "animations/MoneyWings",
          size: 80,
          class: "icon"
        }), y(c, {
          address: e.address
        }, null, 8, ["address"]), y(_, {
          items: s(n),
          class: "progress"
        }, null, 8, ["items"])])])
      }
    }
  }),
  be = v(ge, [
    ["__scopeId", "data-v-bd91e87c"]
  ]),
  he = {
    class: "pages-wallet-connect-banner"
  },
  ke = {
    class: "container"
  },
  we = ["innerHTML"],
  $e = b({
    __name: "ConnectBanner",
    setup(e) {
      const {
        openConnectModal: n
      } = L();
      return (t, o) => {
        const i = at;
        return l(), d("div", he, [y(i, {
          class: "background"
        }), u("div", ke, [u("div", {
          class: "title",
          innerHTML: ("t" in t ? t.t : s(r))("wallet.connect_banner.title")
        }, null, 8, we), u("button", {
          class: "btn reset",
          onClick: o[0] || (o[0] = a => s(n)())
        }, g(("t" in t ? t.t : s(r))("wallet.connect_banner.btn")), 1)])])
      }
    }
  }),
  Ie = v($e, [
    ["__scopeId", "data-v-256671da"]
  ]),
  Te = {
    class: "pages-wallet-block-points-fiat-equal"
  },
  Ne = b({
    __name: "PointsFiatEqual",
    props: {
      value: {
        type: Object,
        default: void 0
      }
    },
    setup(e) {
      return (n, t) => {
        const o = W;
        return l(), d("div", Te, [e.value === void 0 ? (l(), p(o, {
          key: 0,
          class: "skeleton",
          rounded: ""
        })) : (l(), d("div", {
          key: 1,
          class: S(["value", {
            "is-highlighted": e.value.value.greaterThan(0)
          }])
        }, g(e.value.defaultWithSymbol), 3))])
      }
    }
  }),
  Pe = v(Ne, [
    ["__scopeId", "data-v-16763388"]
  ]),
  Se = {},
  Ue = {
    class: "pages-wallet-atoms-coming-soon"
  },
  Ce = {
    class: "label"
  };

function Ae(e, n) {
  const t = K;
  return l(), d("div", Ue, [y(t, {
    name: "clock",
    class: "icon"
  }), u("div", Ce, g(("t" in e ? e.t : s(r))("wallet.history.coming_soon")), 1)])
}
const xe = v(Se, [
    ["render", Ae],
    ["__scopeId", "data-v-3ac68509"]
  ]),
  Ke = ["src"],
  We = ["src"],
  Ee = b({
    __name: "HistoryItemIcon",
    props: {
      icon: {}
    },
    setup(e) {
      const n = e,
        t = h(() => {
          if (n.icon === void 0) return [C];
          if (n.icon.type === "single") return [n.icon.icon ?? C];
          if (n.icon.type === "double") return [n.icon.iconFrom ?? C, n.icon.iconTo ?? C];
          throw n.icon, T("Unknown icon type")
        });
      return (o, i) => {
        const a = et("img-error");
        return l(), d("div", {
          class: S(["pages-wallet-history-item-icon", {
            "is-single": s(t).length === 1,
            "is-double": s(t).length === 2
          }])
        }, [Y(u("img", {
          src: s(t)[0],
          alt: "Transaction icon"
        }, null, 8, Ke), [
          [a, s(C)]
        ]), s(t).length === 2 ? Y((l(), d("img", {
          key: 0,
          src: s(t)[1],
          alt: "Transaction icon"
        }, null, 8, We)), [
          [a, s(C)]
        ]) : k("", !0)], 2)
      }
    }
  }),
  De = v(Ee, [
    ["__scopeId", "data-v-43176a1b"]
  ]),
  Oe = {
    class: "label"
  },
  Be = b({
    __name: "HistoryItemStatus",
    props: {
      status: {
        type: String,
        required: !0
      }
    },
    setup(e) {
      const n = e,
        t = h(() => {
          switch (n.status) {
            case E.STATUS.PENDING:
              return;
            case E.STATUS.FAILED:
              return {
                icon: "circle-warning-fill", label: "Failed", cls: "is-failed"
              };
            case E.STATUS.OK:
              return {
                icon: "circle-check-fill", label: "Success", cls: "is-success"
              };
            default:
              throw n.status, T("Unknown history status")
          }
        });
      return (o, i) => {
        const a = K;
        return s(t) ? (l(), d("div", {
          key: 0,
          class: S(["pages-wallet-history-item-status", s(t).cls])
        }, [y(a, {
          name: s(t).icon,
          class: "icon"
        }, null, 8, ["name"]), u("div", Oe, g(s(t).label), 1)], 2)) : k("", !0)
      }
    }
  }),
  Le = v(Be, [
    ["__scopeId", "data-v-14d91734"]
  ]),
  Ve = {
    class: "pages-wallet-history-item"
  },
  He = {
    class: "title-with-details"
  },
  Re = {
    class: "title"
  },
  Me = {
    key: 0,
    class: "details"
  },
  qe = {
    key: 0,
    class: "right-text"
  },
  Ye = b({
    __name: "HistoryItem",
    props: {
      historyItem: {
        type: Object,
        required: !0
      }
    },
    setup(e) {
      const n = e,
        t = h(() => Gt(n.historyItem, {
          point: a => ({
            ...qt.all(a),
            status: a.payload.status
          }),
          token: a => ({
            ...Ft.all(a),
            status: a.payload.status
          })
        })),
        o = h(() => {
          if (!(!t.value.details || t.value.details.isInternal)) return t.value.details.details
        }),
        i = h(() => {
          if (t.value.details && t.value.details.isInternal) {
            let a = t.value.details.details;
            return t.value.details.prefix && (a = `${t.value.details.prefix}${a}`), {
              type: "text",
              text: a
            }
          }
          if (t.value.status !== E.STATUS.OK) return {
            type: "status",
            status: t.value.status
          }
        });
      return (a, c) => {
        const _ = De,
          f = Le;
        return l(), d("div", Ve, [y(_, {
          icon: s(t).icon
        }, null, 8, ["icon"]), u("div", He, [u("div", Re, g(s(t).title), 1), s(o) ? (l(), d("div", Me, g(s(o)), 1)) : k("", !0)]), s(i) ? (l(), d(I, {
          key: 0
        }, [s(i).type === "text" ? (l(), d("div", qe, g(s(i).text), 1)) : s(i).type === "status" ? (l(), p(f, {
          key: 1,
          status: s(i).status,
          class: "status"
        }, null, 8, ["status"])) : k("", !0)], 64)) : k("", !0)])
      }
    }
  }),
  Fe = v(Ye, [
    ["__scopeId", "data-v-6587f464"]
  ]),
  je = {
    class: "pages-wallet-history"
  },
  ze = {
    key: 0,
    class: "date"
  },
  Ge = b({
    __name: "History",
    props: {
      history: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      return (n, t) => {
        const o = Fe;
        return l(), d("div", je, [(l(!0), d(I, null, A(e.history, (i, a) => (l(), d(I, {
          key: a
        }, [a === 0 || e.history[a - 1].date.stamp !== e.history[a].date.stamp ? (l(), d("div", ze, g(i.date.formatted), 1)) : k("", !0), y(o, {
          "history-item": i
        }, null, 8, ["history-item"])], 64))), 128))])
      }
    }
  }),
  pt = v(Ge, [
    ["__scopeId", "data-v-edabb2b5"]
  ]),
  Qe = {
    class: "kit-scroll-observer"
  },
  Ze = b({
    __name: "KitScrollObserver",
    emits: ["end"],
    setup(e, {
      emit: n
    }) {
      const t = n,
        o = P(),
        i = new IntersectionObserver(a => a[0].isIntersecting && t("end"), {
          threshold: 1
        });
      return Ut(() => o.value && i.observe(o.value)), Ct(() => i.disconnect()), (a, c) => (l(), d("div", Qe, [O(a.$slots, "default", {}, void 0, !0), u("div", {
        ref_key: "endRef",
        ref: o,
        class: "end"
      }, null, 512)]))
    }
  }),
  mt = v(Ze, [
    ["__scopeId", "data-v-a9019fbd"]
  ]),
  yt = e => {
    const n = P(),
      t = P(!1),
      o = P(!1),
      i = async () => {
        var f, m;
        if (t.value || o.value) return;
        t.value = !0;
        const c = (m = (f = n.value) == null ? void 0 : f[n.value.length - 1]) == null ? void 0 : m.nextPageToken,
          _ = await e(c);
        if (n.value || (n.value = []), n.value.push({
            nextPageToken: _.nextPageToken,
            items: _.items
          }), _.items.length === 0 || _.nextPageToken === "0" || _.nextPageToken === "" || c === _.nextPageToken) {
          o.value = !0, t.value = !1;
          return
        }
        t.value = !1
      }, a = h(() => {
        var c;
        return (c = n.value) == null ? void 0 : c.flatMap(_ => _.items)
      });
    return {
      isInitialized: h(() => n.value !== void 0),
      isLoading: h(() => t.value),
      isEmpty: h(() => {
        var c;
        return ((c = a.value) == null ? void 0 : c.length) === 0
      }),
      data: h(() => a.value ?? []),
      load: i
    }
  },
  Je = {
    class: "pages-wallet-points-history"
  },
  Xe = b({
    __name: "PointsHistory",
    setup(e) {
      const t = yt(async o => {
        const i = await nt.getPointsHistory(o);
        if (i.err) throw T("Unable to load points history");
        return {
          nextPageToken: i.data.nextPageToken,
          items: i.data.actions
        }
      });
      return (o, i) => {
        const a = xe,
          c = pt,
          _ = mt;
        return l(), d("div", Je, [y(_, {
          onEnd: i[0] || (i[0] = f => s(t).load())
        }, {
          default: N(() => [s(t).isEmpty.value ? (l(), p(a, {
            key: 0
          })) : (l(), p(c, {
            key: 1,
            history: s(t).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  tn = v(Xe, [
    ["__scopeId", "data-v-7c645fab"]
  ]),
  en = {
    class: "kit-label-with-bottom-sheet"
  },
  nn = {
    key: 0,
    class: "image"
  },
  sn = ["src"],
  on = {
    class: "text"
  },
  an = b({
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
      const n = P(!1),
        t = () => n.value = !1;
      return (o, i) => {
        const a = K,
          c = j;
        return l(), d("div", en, [u("div", {
          class: S(["label", `is-${e.type}`]),
          onClick: i[0] || (i[0] = _ => n.value = !0)
        }, [e.image || o.$slots.image ? (l(), d("div", nn, [O(o.$slots, "image", {}, () => [e.image ? (l(), d("img", {
          key: 0,
          src: e.image,
          alt: "Image"
        }, null, 8, sn)) : k("", !0)], !0)])) : k("", !0), u("div", on, g(e.text), 1), y(a, {
          name: "chevron-right",
          class: "icon"
        })], 2), y(c, {
          modelValue: s(n),
          "onUpdate:modelValue": i[1] || (i[1] = _ => z(n) ? n.value = _ : null),
          title: e.title,
          banner: e.banner
        }, {
          default: N(() => [O(o.$slots, "default", {
            close: t
          }, void 0, !0)]),
          _: 3
        }, 8, ["modelValue", "title", "banner"])])
      }
    }
  }),
  G = v(an, [
    ["__scopeId", "data-v-e9eaa47e"]
  ]),
  ln = {
    class: "container"
  },
  cn = {
    class: "title"
  },
  rn = {
    class: "text"
  },
  dn = b({
    __name: "DropDogsNotification",
    setup(e) {
      const n = h(() => {
        const t = st().playPasses.value;
        return t && t > 0 ? {
          label: r("wallet.drop.play_btn"),
          action: () => At().push({
            name: "game"
          })
        } : {
          label: r("base.got_it"),
          action: o => o()
        }
      });
      return (t, o) => {
        const i = H,
          a = G;
        return l(), p(a, {
          text: ("t" in t ? t.t : s(r))("wallet.drop.label", {
            ticker: "$DOGS"
          }),
          image: ("imgResolver" in t ? t.imgResolver : s(B))("dogs-logo", "svg"),
          banner: ("imgResolver" in t ? t.imgResolver : s(B))("special/drop-dogs-banner"),
          type: "light-blue",
          class: "pages-wallet-block-details-drop-dogs-notification"
        }, {
          default: N(({
            close: c
          }) => [u("div", ln, [u("div", cn, g(("t" in t ? t.t : s(r))("wallet.drop.title", {
            ticker: "$DOGS"
          })), 1), u("div", rn, g(("t" in t ? t.t : s(r))("wallet.drop.text", {
            ticker: "DOGS"
          })), 1), y(i, {
            label: s(n).label,
            fill: "",
            class: "button",
            size: s(V).LARGE,
            onClick: _ => s(n).action(c)
          }, null, 8, ["label", "size", "onClick"])])]),
          _: 1
        }, 8, ["text", "image", "banner"])
      }
    }
  }),
  vt = v(dn, [
    ["__scopeId", "data-v-ebae2f19"]
  ]),
  un = {
    class: "pages-wallet-block-details-soon-notification-content"
  },
  _n = {
    class: "title"
  },
  pn = ["innerHTML"],
  mn = b({
    __name: "Content",
    emits: ["close"],
    setup(e) {
      return (n, t) => {
        const o = tt,
          i = H;
        return l(), d("div", un, [y(o, {
          name: "animations/MoneyWings",
          size: 116
        }), u("div", _n, g(("t" in n ? n.t : s(r))("wallet.drop.notification.content.title")), 1), u("div", {
          class: "text",
          innerHTML: ("t" in n ? n.t : s(r))("wallet.drop.notification.content.text")
        }, null, 8, pn), y(i, {
          label: ("t" in n ? n.t : s(r))("base.got_it"),
          fill: "",
          class: "button",
          size: s(V).LARGE,
          onClick: t[0] || (t[0] = a => n.$emit("close"))
        }, null, 8, ["label", "size"])])
      }
    }
  }),
  ft = v(mn, [
    ["__scopeId", "data-v-7ad98ffe"]
  ]),
  yn = {};

function vn(e, n) {
  const t = ft,
    o = G;
  return l(), p(o, {
    text: ("t" in e ? e.t : s(r))("wallet.drop.notification.label"),
    class: "pages-wallet-block-details-soon-notification-with-label"
  }, {
    image: N(() => n[0] || (n[0] = [u("img", {
      class: "img",
      src: R,
      alt: "Ton logo"
    }, null, -1), u("img", {
      class: "img",
      src: xt,
      alt: "Notcoin logo"
    }, null, -1)])),
    default: N(({
      close: i
    }) => [y(t, {
      onClose: a => i()
    }, null, 8, ["onClose"])]),
    _: 1
  }, 8, ["text"])
}
const fn = v(yn, [
    ["render", vn],
    ["__scopeId", "data-v-eb9556ff"]
  ]),
  gn = b({
    __name: "AssetFarmingLabel",
    props: {
      farming: {
        type: Object,
        required: !0
      }
    },
    setup(e) {
      const n = e,
        t = h(() => {
          switch (n.farming.status) {
            case M.READY:
              return {
                label: r("wallet.farming.ready")
              };
            case M.ACTIVE:
              return {
                label: r("wallet.farming.active")
              };
            case M.DONE:
              return {
                label: r("wallet.farming.done"), cls: "is-done"
              };
            default:
              throw n.farming, T("Unknown farming status")
          }
        });
      return (o, i) => {
        const a = Wt;
        return l(), p(a, {
          to: {
            name: "index"
          },
          class: S(["pages-wallet-asset-farming-label", s(t).cls])
        }, {
          default: N(() => [Kt(g(s(t).label), 1)]),
          _: 1
        }, 8, ["class"])
      }
    }
  }),
  bn = v(gn, [
    ["__scopeId", "data-v-040dda74"]
  ]),
  hn = ["src"],
  kn = {
    class: "compose"
  },
  wn = {
    class: "name"
  },
  $n = {
    class: "balance"
  },
  In = {
    key: 0,
    class: "right-slot"
  },
  Tn = {
    key: 1,
    class: "fiat"
  },
  Nn = b({
    __name: "Asset",
    props: {
      id: {},
      name: {},
      symbol: {},
      balance: {},
      fiat: {},
      imageUrl: {},
      clickable: {
        type: Boolean
      },
      pnlPercent: {}
    },
    setup(e) {
      const n = e,
        t = h(() => n.symbol === "BP" ? {
          type: "farming",
          farming: st().activeFarming.value
        } : n.symbol === "PP" ? void 0 : n.fiat.USD === void 0 ? {
          type: "fiat",
          value: void 0,
          pnl: void 0
        } : {
          type: "fiat",
          value: n.fiat.USD.defaultWithSymbol,
          pnl: n.pnlPercent ? Ht(n.pnlPercent) : void 0
        });
      return (o, i) => {
        const a = W,
          c = bn,
          _ = et("img-error");
        return l(), d("div", {
          class: S(["pages-wallet-asset", {
            clickable: o.clickable
          }])
        }, [Y(u("img", {
          src: s(Et)(o.imageUrl),
          alt: "Coin item icon",
          class: "icon"
        }, null, 8, hn), [
          [_, s(C)]
        ]), u("div", kn, [u("div", wn, g(o.name), 1), u("div", $n, g(o.balance.defaultWithSymbol), 1)]), s(t) ? (l(), d("div", In, [s(t).type === "fiat" ? (l(), d(I, {
          key: 0
        }, [s(t).value === void 0 ? (l(), p(a, {
          key: 0,
          class: "fiat-skeleton"
        })) : (l(), d("div", Tn, g(s(t).value), 1)), s(t).pnl ? (l(), d("div", {
          key: 2,
          class: S(["pnl-label", s(t).pnl.cls])
        }, g(s(t).pnl.formatted), 3)) : k("", !0)], 64)) : s(t).type === "farming" && s(t).farming ? (l(), p(c, {
          key: 1,
          farming: s(t).farming
        }, null, 8, ["farming"])) : k("", !0)])) : k("", !0)], 2)
      }
    }
  }),
  gt = v(Nn, [
    ["__scopeId", "data-v-017192b7"]
  ]),
  Pn = b({
    __name: "Sheet",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(e) {
      const n = F(e, "modelValue");
      return (t, o) => {
        const i = ft,
          a = j;
        return l(), p(a, {
          modelValue: n.value,
          "onUpdate:modelValue": o[1] || (o[1] = c => n.value = c),
          class: "pages-wallet-block-details-soon-notification-sheet"
        }, {
          default: N(() => [y(i, {
            onClose: o[0] || (o[0] = c => n.value = !1)
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Sn = v(Pn, [
    ["__scopeId", "data-v-c6ce1d42"]
  ]),
  Un = {
    class: "pages-wallet-asset-points"
  },
  Cn = b({
    __name: "AssetPoints",
    props: {
      points: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      const n = e,
        t = h(() => n.points.map(a => ({
          id: a.currencyId,
          name: a.name,
          symbol: a.symbol,
          balance: a.balance,
          fiat: a.fiatValue,
          imageUrl: a.imageUrl,
          clickable: !!i(a.symbol)
        }))),
        o = P(!1),
        i = a => {
          if (a === "DOGS") return () => o.value = !0
        };
      return (a, c) => {
        const _ = gt,
          f = Sn;
        return l(), d("div", Un, [(l(!0), d(I, null, A(s(t), m => (l(), p(_, ot({
          key: m.id,
          ref_for: !0
        }, m, {
          onClick: U => {
            var x;
            return (x = i(m.symbol)) == null ? void 0 : x()
          }
        }), null, 16, ["onClick"]))), 128)), y(f, {
          modelValue: s(o),
          "onUpdate:modelValue": c[0] || (c[0] = m => z(o) ? o.value = m : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  An = v(Cn, [
    ["__scopeId", "data-v-8ed14ade"]
  ]),
  xn = ["onClick"],
  Kn = b({
    __name: "KitTabsToggle",
    props: X({
      tabs: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const n = e,
        t = F(e, "modelValue");
      D(t, () => Dt().$webApp.HapticFeedback.impactOccurred("light"));
      const o = h(() => {
        const a = n.tabs.length,
          c = 0,
          _ = n.tabs.findIndex(m => m.key === t.value),
          f = `(100% - ${2*2}px - ${a-1} * ${c}px) / ${a}`;
        return {
          width: `calc(${f})`,
          left: `calc(${f} * ${_} + 2px + ${c*_}px)`
        }
      });
      return (i, a) => (l(), d("div", {
        class: "kit-tabs-toggle",
        style: Z({
          gridTemplateColumns: `repeat(${i.tabs.length}, 1fr)`
        })
      }, [u("div", {
        class: "active-back",
        style: Z(s(o))
      }, null, 4), (l(!0), d(I, null, A(i.tabs, c => (l(), d("button", {
        key: c.key,
        class: S(["tab reset", {
          "is-active": t.value === c.key
        }]),
        onClick: _ => t.value = c.key
      }, g(c.label), 11, xn))), 128))], 4))
    }
  }),
  Wn = v(Kn, [
    ["__scopeId", "data-v-8fb6ab30"]
  ]),
  En = {
    class: "kit-tabs-slider"
  },
  Dn = {
    key: 0,
    class: "slide"
  },
  On = b({
    __name: "KitTabsSlider",
    props: {
      tabs: {}
    },
    setup(e) {
      const n = e,
        t = P(n.tabs[0].key),
        o = P("left"),
        i = P(),
        a = c => {
          if (c === t.value) return;
          const _ = n.tabs.findIndex(m => m.key === t.value),
            f = n.tabs.findIndex(m => m.key === c);
          o.value = _ < f ? "right" : "left", i.value && (i.value.scrollTop = 0), t.value = c
        };
      return (c, _) => {
        const f = Wn;
        return l(), d("div", En, [y(f, {
          "model-value": s(t),
          tabs: c.tabs,
          "onUpdate:modelValue": _[0] || (_[0] = m => a(m))
        }, null, 8, ["model-value", "tabs"]), y(Ot, {
          tag: "div",
          class: "slider-wrapper",
          name: `slider-transition-from-${s(o)}`
        }, {
          default: N(() => [(l(!0), d(I, null, A(c.tabs, m => (l(), d(I, {
            key: m.key
          }, [m.key === s(t) ? (l(), d("div", Dn, [O(c.$slots, m.key, {}, void 0, !0)])) : k("", !0)], 64))), 128))]),
          _: 3
        }, 8, ["name"])])
      }
    }
  }),
  Bn = v(On, [
    ["__scopeId", "data-v-84da8c16"]
  ]),
  Ln = {
    class: "pages-wallet-block-points"
  },
  Vn = {
    class: "heading"
  },
  Hn = {
    class: "title"
  },
  Rn = b({
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
      const n = h(() => [{
        key: "balances",
        label: r("wallet.points.tabs.balances")
      }, {
        key: "history",
        label: r("wallet.points.tabs.history")
      }]);
      return (t, o) => {
        const i = Pe,
          a = tn,
          c = W,
          _ = vt,
          f = fn,
          m = An,
          U = Bn;
        return l(), d("div", Ln, [u("div", Vn, [u("div", Hn, g(("t" in t ? t.t : s(r))("wallet.points.title")), 1), y(i, {
          value: e.points.totalFiatValue.USD
        }, null, 8, ["value"])]), y(U, {
          tabs: s(n),
          class: "tabs"
        }, {
          history: N(() => [y(a, {
            class: "history"
          })]),
          balances: N(() => [e.notification === void 0 ? (l(), p(c, {
            key: 0,
            class: "notification-skeleton notification"
          })) : e.notification === "dogs_drop" ? (l(), p(_, {
            key: 1,
            class: "notification"
          })) : e.notification === "default" ? (l(), p(f, {
            key: 2,
            class: "notification"
          })) : k("", !0), y(m, {
            points: e.points.points
          }, null, 8, ["points"])]),
          _: 1
        }, 8, ["tabs"])])
      }
    }
  }),
  Mn = v(Rn, [
    ["__scopeId", "data-v-1672ca95"]
  ]),
  qn = {
    class: "pages-wallet-connected-banner"
  },
  Yn = {
    key: 1,
    class: "balance"
  },
  Fn = {
    class: "value"
  },
  jn = {
    key: 2,
    class: "last-updated"
  },
  zn = b({
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
        t = h(() => {
          if (n.updatedAt && Date.now() - n.updatedAt.getTime() > 3e5) return Bt(n.updatedAt)
        });
      return (o, i) => {
        const a = _t,
          c = W;
        return l(), d("div", qn, [y(a, {
          address: e.address
        }, null, 8, ["address"]), e.fiatValue === void 0 || e.fiatValue.USD == null ? (l(), p(c, {
          key: 0,
          class: "skeleton"
        })) : (l(), d("div", Yn, [i[0] || (i[0] = u("span", {
          class: "symbol"
        }, "$", -1)), u("span", Fn, g(e.fiatValue.USD.default), 1)])), s(t) ? (l(), d("div", jn, g(("t" in o ? o.t : s(r))("wallet.connected.last_updated", {
          updatedAtLabel: s(t)
        })), 1)) : k("", !0)])
      }
    }
  }),
  Gn = v(zn, [
    ["__scopeId", "data-v-6e2f0c44"]
  ]),
  Qn = {
    class: "pages-wallet-controls"
  },
  Zn = ["onClick"],
  Jn = {
    class: "icon"
  },
  Xn = ["src", "alt"],
  ts = {
    class: "label"
  },
  es = b({
    __name: "Controls",
    emits: ["show:points", "show:tokens-history"],
    setup(e, {
      emit: n
    }) {
      const t = n,
        o = h(() => [{
          label: r("wallet.controls.receive"),
          icon: "arrow-down",
          disabled: !0
        }, {
          label: r("wallet.controls.send"),
          icon: "arrow-up",
          disabled: !0
        }, {
          label: r("wallet.controls.history"),
          icon: "clock",
          onClick: () => t("show:tokens-history")
        }, {
          label: r("wallet.controls.points"),
          icon: "leaf",
          onClick: () => t("show:points")
        }]);
      return (i, a) => (l(), d("div", Qn, [(l(!0), d(I, null, A(s(o), (c, _) => (l(), d("button", {
        key: _,
        class: S(["control reset", {
          "is-disabled": c.disabled
        }]),
        onClick: f => {
          var m;
          return (m = c.onClick) == null ? void 0 : m.call(c)
        }
      }, [u("div", Jn, [u("img", {
        src: ("imgResolver" in i ? i.imgResolver : s(B))(c.icon, "svg"),
        alt: `${c.label} icon`
      }, null, 8, Xn)]), u("div", ts, g(c.label), 1)], 10, Zn))), 128))]))
    }
  }),
  ns = v(es, [
    ["__scopeId", "data-v-2fa06ff8"]
  ]),
  ss = {
    class: "container"
  },
  os = {
    class: "title"
  },
  as = {
    class: "text"
  },
  ls = b({
    __name: "TokensOnlyTonNotification",
    setup(e) {
      return (n, t) => {
        const o = H,
          i = G;
        return l(), p(i, {
          text: ("t" in n ? n.t : s(r))("wallet.only_ton_notification.label"),
          class: "pages-wallet-block-tokens-only-ton-notification",
          image: ("imgResolver" in n ? n.imgResolver : s(B))("ton-logo", "svg")
        }, {
          default: N(({
            close: a
          }) => [u("div", ss, [t[0] || (t[0] = u("img", {
            src: R,
            alt: "Ton logo"
          }, null, -1)), u("div", os, g(("t" in n ? n.t : s(r))("wallet.only_ton_notification.title")), 1), u("div", as, g(("t" in n ? n.t : s(r))("wallet.only_ton_notification.text")), 1), y(o, {
            label: ("t" in n ? n.t : s(r))("base.got_it"),
            fill: "",
            class: "button",
            size: s(V).LARGE,
            onClick: a
          }, null, 8, ["label", "size", "onClick"])])]),
          _: 1
        }, 8, ["text", "image"])
      }
    }
  }),
  is = v(ls, [
    ["__scopeId", "data-v-2ce60cae"]
  ]),
  cs = "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_12285_76772)'%3e%3cpath%20d='M16.25%208C16.25%2012.2802%2012.7802%2015.75%208.5%2015.75C4.21979%2015.75%200.75%2012.2802%200.75%208C0.75%203.71979%204.21979%200.25%208.5%200.25C12.7802%200.25%2016.25%203.71979%2016.25%208Z'%20fill='%230088CC'%20stroke='%23282828'%20stroke-width='0.5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.76529%204.44434H11.2438C11.4532%204.44434%2011.6276%204.48121%2011.837%204.59184C12.0813%204.70246%2012.2208%204.88684%2012.2906%205.03434C12.2906%205.03434%2012.2906%205.07122%2012.3255%205.07122C12.4302%205.25559%2012.5%205.47684%2012.5%205.73497C12.5%205.95622%2012.4651%206.17747%2012.3255%206.39873L8.87093%2012.6675C8.80115%2012.815%208.66157%2012.8888%208.48709%2012.8888C8.34751%2012.8888%208.20793%2012.815%208.10325%2012.6675L4.71845%206.39873C4.64866%206.25123%204.50908%206.06685%204.50908%205.77185C4.47418%205.51372%204.54397%205.29247%204.64866%205.07122C4.75334%204.84996%204.92782%204.66559%205.17208%204.59184C5.38145%204.44434%205.62571%204.44434%205.76529%204.44434ZM8.06835%205.32934H5.76529C5.62571%205.32934%205.55592%205.32934%205.52103%205.36622C5.45124%205.40309%205.41634%205.43997%205.38145%205.51372C5.34655%205.55059%205.34655%205.62435%205.34655%205.6981C5.34655%205.73497%205.38145%205.77185%205.45124%205.91935L8.06835%2010.7131V5.32934ZM8.90583%205.32934V10.75L11.5578%205.91935C11.5927%205.8456%2011.5927%205.77185%2011.5927%205.6981C11.5927%205.62435%2011.5927%205.55059%2011.5578%205.51372C11.5229%205.47684%2011.5229%205.43997%2011.488%205.43997L11.4532%205.40309C11.3834%205.36622%2011.3136%205.36622%2011.2089%205.36622H8.90583V5.32934Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_12285_76772'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  rs = {
    class: "pages-wallet-asset-tokens"
  },
  ds = b({
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
        t = h(() => {
          const o = {
              id: n.ton.currencyId,
              name: "Toncoin",
              symbol: "TON",
              balance: n.ton.balance,
              fiat: n.ton.fiatValue,
              imageUrl: cs
            },
            i = n.jettons.map(a => ({
              id: a.currencyId,
              name: a.name,
              symbol: a.symbol,
              balance: a.balance,
              fiat: a.fiatValue,
              imageUrl: a.imageUrl,
              pnlPercent: a.pnlPercent
            }));
          return [o, ...i]
        });
      return (o, i) => {
        const a = gt;
        return l(), d("div", rs, [(l(!0), d(I, null, A(s(t), c => (l(), p(a, ot({
          key: c.id,
          ref_for: !0
        }, c), null, 16))), 128))])
      }
    }
  }),
  us = v(ds, [
    ["__scopeId", "data-v-99aea17b"]
  ]),
  _s = {
    class: "pages-wallet-block-tokens"
  },
  ps = b({
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
    setup(e) {
      return (n, t) => {
        var m, U;
        const o = Gn,
          i = ns,
          a = W,
          c = vt,
          _ = is,
          f = us;
        return l(), d("div", _s, [y(o, {
          address: e.address,
          "fiat-value": (m = e.balance) == null ? void 0 : m.totalFiatValue,
          "updated-at": (U = e.balance) == null ? void 0 : U.updatedAt
        }, null, 8, ["address", "fiat-value", "updated-at"]), y(i, {
          "onShow:points": t[0] || (t[0] = x => n.$emit("show:points")),
          "onShow:tokensHistory": t[1] || (t[1] = x => n.$emit("show:tokens-history"))
        }), e.notification === void 0 ? (l(), p(a, {
          key: 0,
          class: "notification-skeleton notification"
        })) : e.notification === "dogs_drop" ? (l(), p(c, {
          key: 1,
          class: "notification"
        })) : e.notification === "default" ? (l(), p(_, {
          key: 2,
          class: "notification"
        })) : k("", !0), e.balance ? (l(), p(f, {
          key: 3,
          ton: e.balance.tonBalance,
          jettons: e.balance.jettonBalances,
          class: "tokens"
        }, null, 8, ["ton", "jettons"])) : k("", !0)])
      }
    }
  }),
  ms = v(ps, [
    ["__scopeId", "data-v-a27c7934"]
  ]),
  ys = {},
  vs = {
    class: "pages-wallet-atoms-no-records"
  },
  fs = {
    class: "label"
  };

function gs(e, n) {
  const t = K;
  return l(), d("div", vs, [y(t, {
    name: "note-search",
    class: "icon"
  }), u("div", fs, g(("t" in e ? e.t : s(r))("wallet.history.no_records")), 1)])
}
const bs = v(ys, [
    ["render", gs],
    ["__scopeId", "data-v-1d0de40b"]
  ]),
  hs = {
    class: "pages-wallet-block-tokens-history"
  },
  ks = {
    class: "heading"
  },
  ws = {
    class: "title"
  },
  $s = {
    key: 0,
    class: "wallet"
  },
  Is = {
    class: "value"
  },
  Ts = b({
    __name: "TokensHistory",
    props: {
      address: {
        type: Object,
        default: void 0
      }
    },
    setup(e) {
      const t = yt(async o => {
        const i = await nt.getTokensHistory(o);
        if (i.err) throw T("Unable to load tokens history");
        return {
          nextPageToken: i.data.nextPageToken,
          items: i.data.actions
        }
      });
      return (o, i) => {
        const a = bs,
          c = pt,
          _ = mt;
        return l(), d("div", hs, [u("div", ks, [u("div", ws, g(("t" in o ? o.t : s(r))("wallet.history.title")), 1), e.address ? (l(), d("div", $s, [i[1] || (i[1] = u("img", {
          src: R,
          alt: "Ton logo"
        }, null, -1)), u("div", Is, g(e.address.short), 1)])) : k("", !0)]), y(_, {
          onEnd: i[0] || (i[0] = f => s(t).load())
        }, {
          default: N(() => [s(t).isEmpty.value ? (l(), p(a, {
            key: 0,
            class: "no-records"
          })) : (l(), p(c, {
            key: 1,
            history: s(t).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  Ns = v(Ts, [
    ["__scopeId", "data-v-55fd4c6d"]
  ]),
  Ps = {
    class: "wallet-index-page page"
  };
var bt = (e => (e.WALLET = "wallet", e.POINTS = "points", e.TOKENS_HISTORY = "tokens_history", e))(bt || {});
const Ss = b({
    __name: "index",
    setup(e) {
      const n = q();
      Lt().wallet.walletPageOpen();
      const o = Vt(),
        i = f => Object.values(bt).includes(f),
        a = P((() => {
          const f = Array.isArray(n.query.tab) ? n.query.tab[0] : n.query.tab;
          return f && (Rt(), i(f)) ? f : "wallet"
        })());
      D(() => o.wallet.value, f => {
        f.status !== "connected" && (a.value = "wallet")
      });
      const c = h(() => {
        if (a.value !== "wallet") return () => a.value = "wallet"
      });
      D(c, f => q().meta.back = f, {
        immediate: !0
      });
      const _ = h(() => `wallet-${a.value}`);
      return D(_, () => q().meta.key = _.value), (f, m) => {
        const U = Nt,
          x = Zt,
          ht = Xt,
          kt = be,
          wt = Ie,
          Q = Mn,
          $t = ms,
          It = Ns;
        return l(), d("div", Ps, [s(o).wallet.value.status === "loading" ? (l(), p(U, {
          key: 0
        })) : s(o).wallet.value.status === "must_reconnect" ? (l(), p(x, {
          key: 1
        })) : (l(), d(I, {
          key: 2
        }, [s(o).isAvailable.value ? (l(), d(I, {
          key: 1
        }, [s(a) === "wallet" ? (l(), d(I, {
          key: 0
        }, [s(o).wallet.value.status === "not_found" ? (l(), d(I, {
          key: 0
        }, [y(wt, {
          class: "connect-banner"
        }), s(o).points.value ? (l(), p(Q, {
          key: 0,
          points: s(o).points.value,
          notification: s(o).walletNotification.value
        }, null, 8, ["points", "notification"])) : k("", !0)], 64)) : s(o).wallet.value.status === "connected" ? (l(), p($t, {
          key: 1,
          address: s(o).wallet.value.address,
          balance: s(o).wallet.value.balance,
          notification: s(o).walletNotification.value,
          "onShow:points": m[0] || (m[0] = Tt => a.value = "points"),
          "onShow:tokensHistory": m[1] || (m[1] = Tt => a.value = "tokens_history")
        }, null, 8, ["address", "balance", "notification"])) : k("", !0)], 64)) : s(a) === "points" ? (l(), d(I, {
          key: 1
        }, [s(o).points.value === void 0 ? (l(), p(U, {
          key: 0
        })) : (l(), p(Q, {
          key: 1,
          points: s(o).points.value,
          notification: s(o).walletNotification.value
        }, null, 8, ["points", "notification"]))], 64)) : s(a) === "tokens_history" && s(o).wallet.value.status === "connected" ? (l(), p(It, {
          key: 2,
          address: s(o).wallet.value.address
        }, null, 8, ["address"])) : k("", !0)], 64)) : (l(), d(I, {
          key: 0
        }, [s(o).wallet.value.status === "not_found" ? (l(), p(ht, {
          key: 0
        })) : s(o).wallet.value.status === "connected" ? (l(), p(kt, {
          key: 1,
          address: s(o).wallet.value.address
        }, null, 8, ["address"])) : k("", !0)], 64))], 64))])
      }
    }
  }),
  Bs = v(Ss, [
    ["__scopeId", "data-v-00088916"]
  ]);
export {
  Bs as
  default
};