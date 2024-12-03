import {
  _ as Tt
} from "./CN1WHHRd.js";
import {
  _ as J
} from "./DN7zYVad.js";
import {
  L as T,
  cY as $,
  f as r,
  cZ as k,
  d as g,
  ba as L,
  a as l,
  m as p,
  e as s,
  j as v,
  az as X,
  aA as F,
  x as N,
  b as _,
  t as f,
  k as y,
  Y as Nt,
  B as V,
  N as K,
  C as H,
  aU as j,
  r as P,
  c as d,
  c_ as R,
  c$ as Pt,
  V as z,
  W as I,
  X as A,
  n as S,
  F as h,
  A as tt,
  a8 as et,
  w as q,
  g as w,
  d0 as E,
  aj as St,
  o as Ct,
  aC as O,
  K as nt,
  E as st,
  J as Ut,
  ax as B,
  d1 as At,
  aK as M,
  h as xt,
  aJ as Kt,
  ap as ot,
  av as D,
  P as Wt,
  aL as Z,
  b1 as Et,
  d2 as Dt,
  ay as Y,
  ao as Ot
} from "./Cu_rX_ev.js";
import {
  _ as at,
  d as U
} from "./BB-0rt0Q.js";
import {
  _ as W
} from "./Du29Vle8.js";
import {
  c as Bt
} from "./DPbxm6ol.js";
import "./f4lGn_py.js";
import "./hZhn9mkx.js";
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
  Lt = e => ({
    title: lt(e),
    details: it(e),
    icon: ct(e)
  }),
  Vt = {
    title: lt,
    details: it,
    icon: ct,
    all: Lt
  },
  rt = e => {
    switch (e.type) {
      case k.TYPE.IN:
        return e.payload.inbound.nft ? r("wallet.history.tokens.in_nft") : r("wallet.history.tokens.in");
      case k.TYPE.OUT:
        return e.payload.outbound.nft ? r("wallet.history.tokens.out_nft") : r("wallet.history.tokens.out");
      case k.TYPE.SWAP:
        return r("wallet.history.tokens.swap");
      case k.TYPE.UNQUANTIFIED:
        return (() => {
          switch (e.kind) {
            case k.KIND_UNQUANTIFIED.CONTRACT_DEPLOY:
              return r("wallet.history.tokens.other_contract_deploy");
            case k.KIND_UNQUANTIFIED.CONTRACT_EXEC:
              return r("wallet.history.tokens.other_contract_execution");
            case k.KIND_UNQUANTIFIED.UNSUBSCRIBE:
              return r("wallet.history.tokens.other_unsubscribed");
            case k.KIND_UNQUANTIFIED.DOMAIN_RENEW:
              return r("wallet.history.tokens.other_domain_renew");
            case k.KIND_UNQUANTIFIED.WITHDRAW_STAKE_REQUEST:
              return r("wallet.history.tokens.other_stake_request");
            default:
              throw T("Unknown unquantified history kind")
          }
        })();
      case k.TYPE.UNKNOWN:
        return r("wallet.history.unknown");
      default:
        throw T("Unknown history type")
    }
  },
  dt = e => {
    switch (e.type) {
      case k.TYPE.IN: {
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
      case k.TYPE.OUT: {
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
      case k.TYPE.SWAP:
        return {
          details: `${e.payload.outbound.currency.symbol}→${e.payload.inbound.currency.symbol}`, isInternal: !1, prefix: void 0
        };
      case k.TYPE.UNQUANTIFIED:
        return;
      case k.TYPE.UNKNOWN:
        return;
      default:
        throw T("Unknown history type")
    }
  },
  ut = e => {
    var n, t;
    switch (e.type) {
      case k.TYPE.IN:
        return {
          type: "single", icon: (n = e.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case k.TYPE.OUT:
        return {
          type: "single", icon: (t = e.payload.outbound.currency) == null ? void 0 : t.imageUrl
        };
      case k.TYPE.SWAP:
        return {
          type: "double", iconFrom: e.payload.outbound.currency.imageUrl, iconTo: e.payload.inbound.currency.imageUrl
        };
      case k.TYPE.UNQUANTIFIED:
        return;
      case k.TYPE.UNKNOWN:
        return;
      default:
        throw T("Unknown history type")
    }
  },
  Ht = e => ({
    title: rt(e),
    details: dt(e),
    icon: ut(e)
  }),
  Rt = {
    title: rt,
    details: dt,
    icon: ut,
    all: Ht
  },
  Mt = e => e.instance === "point",
  Yt = e => e.instance === "token",
  qt = (e, n) => {
    if (Mt(e)) return n.point(e);
    if (Yt(e)) return n.token(e);
    throw T("Unknown history instance")
  },
  Ft = g({
    __name: "Reconnect",
    setup(e) {
      const {
        reconnect: n
      } = L();
      return (t, a) => {
        const o = J;
        return l(), p(o, {
          lottie: "animations/Star",
          "icon-size": 116,
          title: ("t" in t ? t.t : s(r))("wallet.reconnect.title"),
          subtitle: ("t" in t ? t.t : s(r))("wallet.reconnect.subtitle"),
          "button-label": ("t" in t ? t.t : s(r))("wallet.reconnect.btn"),
          onButton: a[0] || (a[0] = i => s(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  jt = v(Ft, [
    ["__scopeId", "data-v-29d5ae4b"]
  ]),
  zt = g({
    __name: "NotConnected",
    setup(e) {
      const {
        openConnectModal: n
      } = L();
      return (t, a) => {
        const o = J;
        return l(), p(o, {
          lottie: "animations/Unicorn",
          "icon-size": 88,
          title: ("t" in t ? t.t : s(r))("wallet.legacy.not_connected.title"),
          subtitle: ("t" in t ? t.t : s(r))("wallet.legacy.not_connected.subtitle"),
          "button-label": ("t" in t ? t.t : s(r))("wallet.legacy.not_connected.btn"),
          onButton: a[0] || (a[0] = i => s(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  Gt = v(zt, [
    ["__scopeId", "data-v-8fdb824b"]
  ]),
  Qt = {
    class: "pages-wallet-label-bottom-sheet"
  },
  Zt = {
    class: "address-status"
  },
  Jt = {
    class: "address"
  },
  Xt = {
    class: "status"
  },
  te = {
    class: "label"
  },
  ee = g({
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
          onDisconnected: a
        } = L();
      return a(() => n.value = !1), (o, i) => {
        const c = K,
          u = H,
          b = j;
        return l(), p(b, {
          modelValue: n.value,
          "onUpdate:modelValue": i[1] || (i[1] = m => n.value = m),
          title: "Wallet"
        }, {
          default: N(() => [_("div", Qt, [_("div", Zt, [_("div", Jt, f(e.address.short), 1), _("div", Xt, [y(c, {
            name: "circle-check-fill",
            class: "icon"
          }), _("span", te, f(("t" in o ? o.t : s(r))("wallet.sheet.active")), 1)])]), y(u, {
            label: ("t" in o ? o.t : s(r))("wallet.sheet.disconnect"),
            type: s(Nt).GHOST,
            "is-danger": "",
            size: s(V).LARGE,
            onClick: i[0] || (i[0] = m => s(t)())
          }, null, 8, ["label", "type", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  ne = v(ee, [
    ["__scopeId", "data-v-07f164ab"]
  ]),
  se = {
    class: "pages-wallet-label"
  },
  oe = {
    class: "address"
  },
  ae = g({
    __name: "Label",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(e) {
      const n = P(!1);
      return (t, a) => {
        const o = ne;
        return l(), d("div", se, [_("div", {
          class: "label",
          onClick: a[0] || (a[0] = i => n.value = !0)
        }, [a[2] || (a[2] = _("img", {
          src: R,
          alt: "TON logo",
          class: "ton-logo"
        }, null, -1)), _("div", oe, f(e.address.short), 1), a[3] || (a[3] = _("img", {
          src: Pt,
          alt: "Arrow down",
          class: "arrow-icon"
        }, null, -1))]), y(o, {
          modelValue: s(n),
          "onUpdate:modelValue": a[1] || (a[1] = i => z(n) ? n.value = i : null),
          address: e.address
        }, null, 8, ["modelValue", "address"])])
      }
    }
  }),
  _t = v(ae, [
    ["__scopeId", "data-v-0aed5ea6"]
  ]),
  le = {
    class: "kit-progress-stepper"
  },
  ie = {
    class: "icon-wrapper"
  },
  ce = {
    class: "text"
  },
  re = g({
    __name: "KitProgressStepper",
    props: {
      items: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      return (n, t) => {
        const a = K;
        return l(), d("div", le, [(l(!0), d(I, null, A(e.items, o => (l(), d("div", {
          key: o.text,
          class: S(["item", {
            "is-active": o.active
          }])
        }, [_("div", ie, [o.active ? (l(), p(a, {
          key: 0,
          name: "circle-check-white",
          class: "icon"
        })) : (l(), p(a, {
          key: 1,
          name: "circle-small",
          class: "icon"
        }))]), _("div", ce, f(o.text), 1)], 2))), 128))])
      }
    }
  }),
  de = v(re, [
    ["__scopeId", "data-v-c6e84c97"]
  ]),
  ue = {
    class: "pages-wallet-legacy-connected"
  },
  _e = {
    class: "container"
  },
  pe = {
    class: "title"
  },
  me = g({
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
      return (t, a) => {
        const o = at,
          i = tt,
          c = _t,
          u = de;
        return l(), d("div", ue, [y(o, {
          class: "background"
        }), _("div", _e, [_("div", pe, f(("t" in t ? t.t : s(r))("wallet.legacy.connected.title")), 1), y(i, {
          name: "animations/MoneyWings",
          size: 80,
          class: "icon"
        }), y(c, {
          address: e.address
        }, null, 8, ["address"]), y(u, {
          items: s(n),
          class: "progress"
        }, null, 8, ["items"])])])
      }
    }
  }),
  ye = v(me, [
    ["__scopeId", "data-v-bd91e87c"]
  ]),
  ve = {
    class: "pages-wallet-connect-banner"
  },
  fe = {
    class: "container"
  },
  ge = ["innerHTML"],
  be = g({
    __name: "ConnectBanner",
    setup(e) {
      const {
        openConnectModal: n
      } = L();
      return (t, a) => {
        const o = at;
        return l(), d("div", ve, [y(o, {
          class: "background"
        }), _("div", fe, [_("div", {
          class: "title",
          innerHTML: ("t" in t ? t.t : s(r))("wallet.connect_banner.title")
        }, null, 8, ge), _("button", {
          class: "btn reset",
          onClick: a[0] || (a[0] = i => s(n)())
        }, f(("t" in t ? t.t : s(r))("wallet.connect_banner.btn")), 1)])])
      }
    }
  }),
  he = v(be, [
    ["__scopeId", "data-v-256671da"]
  ]),
  ke = {
    class: "pages-wallet-block-points-fiat-equal"
  },
  we = g({
    __name: "PointsFiatEqual",
    props: {
      value: {
        type: Object,
        default: void 0
      }
    },
    setup(e) {
      return (n, t) => {
        const a = W;
        return l(), d("div", ke, [e.value === void 0 ? (l(), p(a, {
          key: 0,
          class: "skeleton",
          rounded: ""
        })) : (l(), d("div", {
          key: 1,
          class: S(["value", {
            "is-highlighted": e.value.value.greaterThan(0)
          }])
        }, f(e.value.defaultWithSymbol), 3))])
      }
    }
  }),
  $e = v(we, [
    ["__scopeId", "data-v-16763388"]
  ]),
  Ie = {},
  Te = {
    class: "pages-wallet-atoms-coming-soon"
  },
  Ne = {
    class: "label"
  };

function Pe(e, n) {
  const t = K;
  return l(), d("div", Te, [y(t, {
    name: "clock",
    class: "icon"
  }), _("div", Ne, f(("t" in e ? e.t : s(r))("wallet.history.coming_soon")), 1)])
}
const Se = v(Ie, [
    ["render", Pe],
    ["__scopeId", "data-v-3ac68509"]
  ]),
  Ce = ["src"],
  Ue = ["src"],
  Ae = g({
    __name: "HistoryItemIcon",
    props: {
      icon: {}
    },
    setup(e) {
      const n = e,
        t = h(() => {
          if (n.icon === void 0) return [U];
          if (n.icon.type === "single") return [n.icon.icon ?? U];
          if (n.icon.type === "double") return [n.icon.iconFrom ?? U, n.icon.iconTo ?? U];
          throw n.icon, T("Unknown icon type")
        });
      return (a, o) => {
        const i = et("img-error");
        return l(), d("div", {
          class: S(["pages-wallet-history-item-icon", {
            "is-single": s(t).length === 1,
            "is-double": s(t).length === 2
          }])
        }, [q(_("img", {
          src: s(t)[0],
          alt: "Transaction icon"
        }, null, 8, Ce), [
          [i, s(U)]
        ]), s(t).length === 2 ? q((l(), d("img", {
          key: 0,
          src: s(t)[1],
          alt: "Transaction icon"
        }, null, 8, Ue)), [
          [i, s(U)]
        ]) : w("", !0)], 2)
      }
    }
  }),
  xe = v(Ae, [
    ["__scopeId", "data-v-43176a1b"]
  ]),
  Ke = {
    class: "label"
  },
  We = g({
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
      return (a, o) => {
        const i = K;
        return s(t) ? (l(), d("div", {
          key: 0,
          class: S(["pages-wallet-history-item-status", s(t).cls])
        }, [y(i, {
          name: s(t).icon,
          class: "icon"
        }, null, 8, ["name"]), _("div", Ke, f(s(t).label), 1)], 2)) : w("", !0)
      }
    }
  }),
  Ee = v(We, [
    ["__scopeId", "data-v-14d91734"]
  ]),
  De = {
    class: "pages-wallet-history-item"
  },
  Oe = {
    class: "title-with-details"
  },
  Be = {
    class: "title"
  },
  Le = {
    key: 0,
    class: "details"
  },
  Ve = {
    key: 0,
    class: "right-text"
  },
  He = g({
    __name: "HistoryItem",
    props: {
      historyItem: {
        type: Object,
        required: !0
      }
    },
    setup(e) {
      const n = e,
        t = h(() => qt(n.historyItem, {
          point: i => ({
            ...Vt.all(i),
            status: i.payload.status
          }),
          token: i => ({
            ...Rt.all(i),
            status: i.payload.status
          })
        })),
        a = h(() => {
          if (!(!t.value.details || t.value.details.isInternal)) return t.value.details.details
        }),
        o = h(() => {
          if (t.value.details && t.value.details.isInternal) {
            let i = t.value.details.details;
            return t.value.details.prefix && (i = `${t.value.details.prefix}${i}`), {
              type: "text",
              text: i
            }
          }
          if (t.value.status !== E.STATUS.OK) return {
            type: "status",
            status: t.value.status
          }
        });
      return (i, c) => {
        const u = xe,
          b = Ee;
        return l(), d("div", De, [y(u, {
          icon: s(t).icon
        }, null, 8, ["icon"]), _("div", Oe, [_("div", Be, f(s(t).title), 1), s(a) ? (l(), d("div", Le, f(s(a)), 1)) : w("", !0)]), s(o) ? (l(), d(I, {
          key: 0
        }, [s(o).type === "text" ? (l(), d("div", Ve, f(s(o).text), 1)) : s(o).type === "status" ? (l(), p(b, {
          key: 1,
          status: s(o).status,
          class: "status"
        }, null, 8, ["status"])) : w("", !0)], 64)) : w("", !0)])
      }
    }
  }),
  Re = v(He, [
    ["__scopeId", "data-v-6587f464"]
  ]),
  Me = {
    class: "pages-wallet-history"
  },
  Ye = {
    key: 0,
    class: "date"
  },
  qe = g({
    __name: "History",
    props: {
      history: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      return (n, t) => {
        const a = Re;
        return l(), d("div", Me, [(l(!0), d(I, null, A(e.history, (o, i) => (l(), d(I, {
          key: i
        }, [i === 0 || e.history[i - 1].date.stamp !== e.history[i].date.stamp ? (l(), d("div", Ye, f(o.date.formatted), 1)) : w("", !0), y(a, {
          "history-item": o
        }, null, 8, ["history-item"])], 64))), 128))])
      }
    }
  }),
  pt = v(qe, [
    ["__scopeId", "data-v-edabb2b5"]
  ]),
  Fe = {
    class: "kit-scroll-observer"
  },
  je = g({
    __name: "KitScrollObserver",
    emits: ["end"],
    setup(e, {
      emit: n
    }) {
      const t = n,
        a = P(),
        o = new IntersectionObserver(i => i[0].isIntersecting && t("end"), {
          threshold: 1
        });
      return St(() => a.value && o.observe(a.value)), Ct(() => o.disconnect()), (i, c) => (l(), d("div", Fe, [O(i.$slots, "default", {}, void 0, !0), _("div", {
        ref_key: "endRef",
        ref: a,
        class: "end"
      }, null, 512)]))
    }
  }),
  mt = v(je, [
    ["__scopeId", "data-v-a9019fbd"]
  ]),
  yt = e => {
    const n = P(),
      t = P(!1),
      a = P(!1),
      o = async () => {
        var b, m;
        if (t.value || a.value) return;
        t.value = !0;
        const c = (m = (b = n.value) == null ? void 0 : b[n.value.length - 1]) == null ? void 0 : m.nextPageToken,
          u = await e(c);
        if (n.value || (n.value = []), n.value.push({
            nextPageToken: u.nextPageToken,
            items: u.items
          }), u.items.length === 0 || u.nextPageToken === "0" || u.nextPageToken === "" || c === u.nextPageToken) {
          a.value = !0, t.value = !1;
          return
        }
        t.value = !1
      }, i = h(() => {
        var c;
        return (c = n.value) == null ? void 0 : c.flatMap(u => u.items)
      });
    return {
      isInitialized: h(() => n.value !== void 0),
      isLoading: h(() => t.value),
      isEmpty: h(() => {
        var c;
        return ((c = i.value) == null ? void 0 : c.length) === 0
      }),
      data: h(() => i.value ?? []),
      load: o
    }
  },
  ze = {
    class: "pages-wallet-points-history"
  },
  Ge = g({
    __name: "PointsHistory",
    setup(e) {
      const t = yt(async a => {
        const o = await nt.getPointsHistory(a);
        if (o.err) throw T("Unable to load points history");
        return {
          nextPageToken: o.data.nextPageToken,
          items: o.data.actions
        }
      });
      return (a, o) => {
        const i = Se,
          c = pt,
          u = mt;
        return l(), d("div", ze, [y(u, {
          onEnd: o[0] || (o[0] = b => s(t).load())
        }, {
          default: N(() => [s(t).isEmpty.value ? (l(), p(i, {
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
  Qe = v(Ge, [
    ["__scopeId", "data-v-7c645fab"]
  ]),
  Ze = {
    class: "kit-label-with-bottom-sheet"
  },
  Je = {
    key: 0,
    class: "image"
  },
  Xe = ["src"],
  tn = {
    class: "text"
  },
  en = g({
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
      return (a, o) => {
        const i = K,
          c = j;
        return l(), d("div", Ze, [_("div", {
          class: S(["label", `is-${e.type}`]),
          onClick: o[0] || (o[0] = u => n.value = !0)
        }, [e.image || a.$slots.image ? (l(), d("div", Je, [O(a.$slots, "image", {}, () => [e.image ? (l(), d("img", {
          key: 0,
          src: e.image,
          alt: "Image"
        }, null, 8, Xe)) : w("", !0)], !0)])) : w("", !0), _("div", tn, f(e.text), 1), y(i, {
          name: "chevron-right",
          class: "icon"
        })], 2), y(c, {
          modelValue: s(n),
          "onUpdate:modelValue": o[1] || (o[1] = u => z(n) ? n.value = u : null),
          title: e.title,
          banner: e.banner
        }, {
          default: N(() => [O(a.$slots, "default", {
            close: t
          }, void 0, !0)]),
          _: 3
        }, 8, ["modelValue", "title", "banner"])])
      }
    }
  }),
  G = v(en, [
    ["__scopeId", "data-v-e9eaa47e"]
  ]),
  nn = {
    class: "container"
  },
  sn = {
    class: "title"
  },
  on = {
    class: "text"
  },
  an = g({
    __name: "DropDogsNotification",
    setup(e) {
      const n = h(() => {
        const t = st().playPasses.value;
        return t && t > 0 ? {
          label: r("wallet.drop.play_btn"),
          action: () => Ut().push({
            name: "game"
          })
        } : {
          label: r("base.got_it"),
          action: a => a()
        }
      });
      return (t, a) => {
        const o = H,
          i = G;
        return l(), p(i, {
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
          }) => [_("div", nn, [_("div", sn, f(("t" in t ? t.t : s(r))("wallet.drop.title", {
            ticker: "$DOGS"
          })), 1), _("div", on, f(("t" in t ? t.t : s(r))("wallet.drop.text", {
            ticker: "DOGS"
          })), 1), y(o, {
            label: s(n).label,
            fill: "",
            class: "button",
            size: s(V).LARGE,
            onClick: u => s(n).action(c)
          }, null, 8, ["label", "size", "onClick"])])]),
          _: 1
        }, 8, ["text", "image", "banner"])
      }
    }
  }),
  vt = v(an, [
    ["__scopeId", "data-v-ebae2f19"]
  ]),
  ln = {
    class: "pages-wallet-block-details-soon-notification-content"
  },
  cn = {
    class: "title"
  },
  rn = ["innerHTML"],
  dn = g({
    __name: "Content",
    emits: ["close"],
    setup(e) {
      return (n, t) => {
        const a = tt,
          o = H;
        return l(), d("div", ln, [y(a, {
          name: "animations/MoneyWings",
          size: 116
        }), _("div", cn, f(("t" in n ? n.t : s(r))("wallet.drop.notification.content.title")), 1), _("div", {
          class: "text",
          innerHTML: ("t" in n ? n.t : s(r))("wallet.drop.notification.content.text")
        }, null, 8, rn), y(o, {
          label: ("t" in n ? n.t : s(r))("base.got_it"),
          fill: "",
          class: "button",
          size: s(V).LARGE,
          onClick: t[0] || (t[0] = i => n.$emit("close"))
        }, null, 8, ["label", "size"])])
      }
    }
  }),
  ft = v(dn, [
    ["__scopeId", "data-v-7ad98ffe"]
  ]),
  un = {};

function _n(e, n) {
  const t = ft,
    a = G;
  return l(), p(a, {
    text: ("t" in e ? e.t : s(r))("wallet.drop.notification.label"),
    class: "pages-wallet-block-details-soon-notification-with-label"
  }, {
    image: N(() => n[0] || (n[0] = [_("img", {
      class: "img",
      src: R,
      alt: "Ton logo"
    }, null, -1), _("img", {
      class: "img",
      src: At,
      alt: "Notcoin logo"
    }, null, -1)])),
    default: N(({
      close: o
    }) => [y(t, {
      onClose: i => o()
    }, null, 8, ["onClose"])]),
    _: 1
  }, 8, ["text"])
}
const pn = v(un, [
    ["render", _n],
    ["__scopeId", "data-v-eb9556ff"]
  ]),
  mn = g({
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
      return (a, o) => {
        const i = Kt;
        return l(), p(i, {
          to: {
            name: "index"
          },
          class: S(["pages-wallet-asset-farming-label", s(t).cls])
        }, {
          default: N(() => [xt(f(s(t).label), 1)]),
          _: 1
        }, 8, ["class"])
      }
    }
  }),
  yn = v(mn, [
    ["__scopeId", "data-v-040dda74"]
  ]),
  vn = ["src"],
  fn = {
    class: "compose"
  },
  gn = {
    class: "name"
  },
  bn = {
    class: "balance"
  },
  hn = {
    key: 0,
    class: "right-slot"
  },
  kn = {
    key: 1,
    class: "fiat"
  },
  wn = g({
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
      }
    },
    setup(e) {
      const n = e,
        t = h(() => {
          var a;
          return n.symbol === "BP" ? {
            type: "farming",
            farming: st().activeFarming.value
          } : n.symbol === "PP" ? void 0 : {
            type: "fiat",
            value: (a = n.fiat.USD) == null ? void 0 : a.defaultWithSymbol
          }
        });
      return (a, o) => {
        const i = W,
          c = yn,
          u = et("img-error");
        return l(), d("div", {
          class: S(["pages-wallet-asset", {
            clickable: a.clickable
          }])
        }, [q(_("img", {
          src: a.imageUrl,
          alt: "Coin item icon",
          class: "icon"
        }, null, 8, vn), [
          [u, s(U)]
        ]), _("div", fn, [_("div", gn, f(a.name), 1), _("div", bn, f(a.balance.defaultWithSymbol), 1)]), s(t) ? (l(), d("div", hn, [s(t).type === "fiat" ? (l(), d(I, {
          key: 0
        }, [s(t).value === void 0 ? (l(), p(i, {
          key: 0,
          class: "fiat-skeleton"
        })) : (l(), d("div", kn, f(s(t).value), 1))], 64)) : s(t).type === "farming" && s(t).farming ? (l(), p(c, {
          key: 1,
          farming: s(t).farming
        }, null, 8, ["farming"])) : w("", !0)])) : w("", !0)], 2)
      }
    }
  }),
  gt = v(wn, [
    ["__scopeId", "data-v-ca143c01"]
  ]),
  $n = g({
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
      return (t, a) => {
        const o = ft,
          i = j;
        return l(), p(i, {
          modelValue: n.value,
          "onUpdate:modelValue": a[1] || (a[1] = c => n.value = c),
          class: "pages-wallet-block-details-soon-notification-sheet"
        }, {
          default: N(() => [y(o, {
            onClose: a[0] || (a[0] = c => n.value = !1)
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  In = v($n, [
    ["__scopeId", "data-v-c6ce1d42"]
  ]),
  Tn = {
    class: "pages-wallet-asset-points"
  },
  Nn = g({
    __name: "AssetPoints",
    props: {
      points: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      const n = e,
        t = h(() => n.points.map(i => ({
          id: i.currencyId,
          name: i.name,
          symbol: i.symbol,
          balance: i.balance,
          fiat: i.fiatValue,
          imageUrl: i.imageUrl,
          clickable: !!o(i.symbol)
        }))),
        a = P(!1),
        o = i => {
          if (i === "DOGS") return () => a.value = !0
        };
      return (i, c) => {
        const u = gt,
          b = In;
        return l(), d("div", Tn, [(l(!0), d(I, null, A(s(t), m => (l(), p(u, ot({
          key: m.id,
          ref_for: !0
        }, m, {
          onClick: C => {
            var x;
            return (x = o(m.symbol)) == null ? void 0 : x()
          }
        }), null, 16, ["onClick"]))), 128)), y(b, {
          modelValue: s(a),
          "onUpdate:modelValue": c[0] || (c[0] = m => z(a) ? a.value = m : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  Pn = v(Nn, [
    ["__scopeId", "data-v-8ed14ade"]
  ]),
  Sn = ["onClick"],
  Cn = g({
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
      D(t, () => Wt().$webApp.HapticFeedback.impactOccurred("light"));
      const a = h(() => {
        const i = n.tabs.length,
          c = 0,
          u = n.tabs.findIndex(m => m.key === t.value),
          b = `(100% - ${2*2}px - ${i-1} * ${c}px) / ${i}`;
        return {
          width: `calc(${b})`,
          left: `calc(${b} * ${u} + 2px + ${c*u}px)`
        }
      });
      return (o, i) => (l(), d("div", {
        class: "kit-tabs-toggle",
        style: Z({
          gridTemplateColumns: `repeat(${o.tabs.length}, 1fr)`
        })
      }, [_("div", {
        class: "active-back",
        style: Z(s(a))
      }, null, 4), (l(!0), d(I, null, A(o.tabs, c => (l(), d("button", {
        key: c.key,
        class: S(["tab reset", {
          "is-active": t.value === c.key
        }]),
        onClick: u => t.value = c.key
      }, f(c.label), 11, Sn))), 128))], 4))
    }
  }),
  Un = v(Cn, [
    ["__scopeId", "data-v-8fb6ab30"]
  ]),
  An = {
    class: "kit-tabs-slider"
  },
  xn = {
    key: 0,
    class: "slide"
  },
  Kn = g({
    __name: "KitTabsSlider",
    props: {
      tabs: {}
    },
    setup(e) {
      const n = e,
        t = P(n.tabs[0].key),
        a = P("left"),
        o = P(),
        i = c => {
          if (c === t.value) return;
          const u = n.tabs.findIndex(m => m.key === t.value),
            b = n.tabs.findIndex(m => m.key === c);
          a.value = u < b ? "right" : "left", o.value && (o.value.scrollTop = 0), t.value = c
        };
      return (c, u) => {
        const b = Un;
        return l(), d("div", An, [y(b, {
          "model-value": s(t),
          tabs: c.tabs,
          "onUpdate:modelValue": u[0] || (u[0] = m => i(m))
        }, null, 8, ["model-value", "tabs"]), y(Et, {
          tag: "div",
          class: "slider-wrapper",
          name: `slider-transition-from-${s(a)}`
        }, {
          default: N(() => [(l(!0), d(I, null, A(c.tabs, m => (l(), d(I, {
            key: m.key
          }, [m.key === s(t) ? (l(), d("div", xn, [O(c.$slots, m.key, {}, void 0, !0)])) : w("", !0)], 64))), 128))]),
          _: 3
        }, 8, ["name"])])
      }
    }
  }),
  Wn = v(Kn, [
    ["__scopeId", "data-v-84da8c16"]
  ]),
  En = {
    class: "pages-wallet-block-points"
  },
  Dn = {
    class: "heading"
  },
  On = {
    class: "title"
  },
  Bn = g({
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
      return (t, a) => {
        const o = $e,
          i = Qe,
          c = W,
          u = vt,
          b = pn,
          m = Pn,
          C = Wn;
        return l(), d("div", En, [_("div", Dn, [_("div", On, f(("t" in t ? t.t : s(r))("wallet.points.title")), 1), y(o, {
          value: e.points.totalFiatValue.USD
        }, null, 8, ["value"])]), y(C, {
          tabs: s(n),
          class: "tabs"
        }, {
          history: N(() => [y(i, {
            class: "history"
          })]),
          balances: N(() => [e.notification === void 0 ? (l(), p(c, {
            key: 0,
            class: "notification-skeleton notification"
          })) : e.notification === "dogs_drop" ? (l(), p(u, {
            key: 1,
            class: "notification"
          })) : e.notification === "default" ? (l(), p(b, {
            key: 2,
            class: "notification"
          })) : w("", !0), y(m, {
            points: e.points.points
          }, null, 8, ["points"])]),
          _: 1
        }, 8, ["tabs"])])
      }
    }
  }),
  Ln = v(Bn, [
    ["__scopeId", "data-v-1672ca95"]
  ]),
  Vn = {
    class: "pages-wallet-connected-banner"
  },
  Hn = {
    key: 1,
    class: "balance"
  },
  Rn = {
    class: "value"
  },
  Mn = {
    key: 2,
    class: "last-updated"
  },
  Yn = g({
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
          if (n.updatedAt && Date.now() - n.updatedAt.getTime() > 3e5) return Dt(n.updatedAt)
        });
      return (a, o) => {
        const i = _t,
          c = W;
        return l(), d("div", Vn, [y(i, {
          address: e.address
        }, null, 8, ["address"]), e.fiatValue === void 0 || e.fiatValue.USD == null ? (l(), p(c, {
          key: 0,
          class: "skeleton"
        })) : (l(), d("div", Hn, [o[0] || (o[0] = _("span", {
          class: "symbol"
        }, "$", -1)), _("span", Rn, f(e.fiatValue.USD.default), 1)])), s(t) ? (l(), d("div", Mn, f(("t" in a ? a.t : s(r))("wallet.connected.last_updated", {
          updatedAtLabel: s(t)
        })), 1)) : w("", !0)])
      }
    }
  }),
  qn = v(Yn, [
    ["__scopeId", "data-v-6e2f0c44"]
  ]),
  Fn = {
    class: "pages-wallet-controls"
  },
  jn = ["onClick"],
  zn = {
    class: "icon"
  },
  Gn = ["src", "alt"],
  Qn = {
    class: "label"
  },
  Zn = g({
    __name: "Controls",
    emits: ["show:points", "show:tokens-history"],
    setup(e, {
      emit: n
    }) {
      const t = n,
        a = h(() => [{
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
      return (o, i) => (l(), d("div", Fn, [(l(!0), d(I, null, A(s(a), (c, u) => (l(), d("button", {
        key: u,
        class: S(["control reset", {
          "is-disabled": c.disabled
        }]),
        onClick: b => {
          var m;
          return (m = c.onClick) == null ? void 0 : m.call(c)
        }
      }, [_("div", zn, [_("img", {
        src: ("imgResolver" in o ? o.imgResolver : s(B))(c.icon, "svg"),
        alt: `${c.label} icon`
      }, null, 8, Gn)]), _("div", Qn, f(c.label), 1)], 10, jn))), 128))]))
    }
  }),
  Jn = v(Zn, [
    ["__scopeId", "data-v-2fa06ff8"]
  ]),
  Xn = {
    class: "container"
  },
  ts = {
    class: "title"
  },
  es = {
    class: "text"
  },
  ns = g({
    __name: "TokensOnlyTonNotification",
    setup(e) {
      return (n, t) => {
        const a = H,
          o = G;
        return l(), p(o, {
          text: ("t" in n ? n.t : s(r))("wallet.only_ton_notification.label"),
          class: "pages-wallet-block-tokens-only-ton-notification",
          image: ("imgResolver" in n ? n.imgResolver : s(B))("ton-logo", "svg")
        }, {
          default: N(({
            close: i
          }) => [_("div", Xn, [t[0] || (t[0] = _("img", {
            src: R,
            alt: "Ton logo"
          }, null, -1)), _("div", ts, f(("t" in n ? n.t : s(r))("wallet.only_ton_notification.title")), 1), _("div", es, f(("t" in n ? n.t : s(r))("wallet.only_ton_notification.text")), 1), y(a, {
            label: ("t" in n ? n.t : s(r))("base.got_it"),
            fill: "",
            class: "button",
            size: s(V).LARGE,
            onClick: i
          }, null, 8, ["label", "size", "onClick"])])]),
          _: 1
        }, 8, ["text", "image"])
      }
    }
  }),
  ss = v(ns, [
    ["__scopeId", "data-v-2ce60cae"]
  ]),
  os = "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_12285_76772)'%3e%3cpath%20d='M16.25%208C16.25%2012.2802%2012.7802%2015.75%208.5%2015.75C4.21979%2015.75%200.75%2012.2802%200.75%208C0.75%203.71979%204.21979%200.25%208.5%200.25C12.7802%200.25%2016.25%203.71979%2016.25%208Z'%20fill='%230088CC'%20stroke='%23282828'%20stroke-width='0.5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.76529%204.44434H11.2438C11.4532%204.44434%2011.6276%204.48121%2011.837%204.59184C12.0813%204.70246%2012.2208%204.88684%2012.2906%205.03434C12.2906%205.03434%2012.2906%205.07122%2012.3255%205.07122C12.4302%205.25559%2012.5%205.47684%2012.5%205.73497C12.5%205.95622%2012.4651%206.17747%2012.3255%206.39873L8.87093%2012.6675C8.80115%2012.815%208.66157%2012.8888%208.48709%2012.8888C8.34751%2012.8888%208.20793%2012.815%208.10325%2012.6675L4.71845%206.39873C4.64866%206.25123%204.50908%206.06685%204.50908%205.77185C4.47418%205.51372%204.54397%205.29247%204.64866%205.07122C4.75334%204.84996%204.92782%204.66559%205.17208%204.59184C5.38145%204.44434%205.62571%204.44434%205.76529%204.44434ZM8.06835%205.32934H5.76529C5.62571%205.32934%205.55592%205.32934%205.52103%205.36622C5.45124%205.40309%205.41634%205.43997%205.38145%205.51372C5.34655%205.55059%205.34655%205.62435%205.34655%205.6981C5.34655%205.73497%205.38145%205.77185%205.45124%205.91935L8.06835%2010.7131V5.32934ZM8.90583%205.32934V10.75L11.5578%205.91935C11.5927%205.8456%2011.5927%205.77185%2011.5927%205.6981C11.5927%205.62435%2011.5927%205.55059%2011.5578%205.51372C11.5229%205.47684%2011.5229%205.43997%2011.488%205.43997L11.4532%205.40309C11.3834%205.36622%2011.3136%205.36622%2011.2089%205.36622H8.90583V5.32934Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_12285_76772'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  as = {
    class: "pages-wallet-asset-tokens"
  },
  ls = g({
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
          const a = {
              id: n.ton.currencyId,
              name: "Toncoin",
              symbol: "TON",
              balance: n.ton.balance,
              fiat: n.ton.fiatValue,
              imageUrl: os
            },
            o = n.jettons.map(i => ({
              id: i.currencyId,
              name: i.name,
              symbol: i.symbol,
              balance: i.balance,
              fiat: i.fiatValue,
              imageUrl: i.imageUrl
            }));
          return [a, ...o]
        });
      return (a, o) => {
        const i = gt;
        return l(), d("div", as, [(l(!0), d(I, null, A(s(t), c => (l(), p(i, ot({
          key: c.id,
          ref_for: !0
        }, c), null, 16))), 128))])
      }
    }
  }),
  is = v(ls, [
    ["__scopeId", "data-v-11c3bbc5"]
  ]),
  cs = {
    class: "pages-wallet-block-tokens"
  },
  rs = g({
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
        var m, C;
        const a = qn,
          o = Jn,
          i = W,
          c = vt,
          u = ss,
          b = is;
        return l(), d("div", cs, [y(a, {
          address: e.address,
          "fiat-value": (m = e.balance) == null ? void 0 : m.totalFiatValue,
          "updated-at": (C = e.balance) == null ? void 0 : C.updatedAt
        }, null, 8, ["address", "fiat-value", "updated-at"]), y(o, {
          "onShow:points": t[0] || (t[0] = x => n.$emit("show:points")),
          "onShow:tokensHistory": t[1] || (t[1] = x => n.$emit("show:tokens-history"))
        }), e.notification === void 0 ? (l(), p(i, {
          key: 0,
          class: "notification-skeleton notification"
        })) : e.notification === "dogs_drop" ? (l(), p(c, {
          key: 1,
          class: "notification"
        })) : e.notification === "default" ? (l(), p(u, {
          key: 2,
          class: "notification"
        })) : w("", !0), e.balance ? (l(), p(b, {
          key: 3,
          ton: e.balance.tonBalance,
          jettons: e.balance.jettonBalances,
          class: "tokens"
        }, null, 8, ["ton", "jettons"])) : w("", !0)])
      }
    }
  }),
  ds = v(rs, [
    ["__scopeId", "data-v-a27c7934"]
  ]),
  us = {},
  _s = {
    class: "pages-wallet-atoms-no-records"
  },
  ps = {
    class: "label"
  };

function ms(e, n) {
  const t = K;
  return l(), d("div", _s, [y(t, {
    name: "note-search",
    class: "icon"
  }), _("div", ps, f(("t" in e ? e.t : s(r))("wallet.history.no_records")), 1)])
}
const ys = v(us, [
    ["render", ms],
    ["__scopeId", "data-v-1d0de40b"]
  ]),
  vs = {
    class: "pages-wallet-block-tokens-history"
  },
  fs = {
    class: "heading"
  },
  gs = {
    class: "title"
  },
  bs = {
    key: 0,
    class: "wallet"
  },
  hs = {
    class: "value"
  },
  ks = g({
    __name: "TokensHistory",
    props: {
      address: {
        type: Object,
        default: void 0
      }
    },
    setup(e) {
      const t = yt(async a => {
        const o = await nt.getTokensHistory(a);
        if (o.err) throw T("Unable to load tokens history");
        return {
          nextPageToken: o.data.nextPageToken,
          items: o.data.actions
        }
      });
      return (a, o) => {
        const i = ys,
          c = pt,
          u = mt;
        return l(), d("div", vs, [_("div", fs, [_("div", gs, f(("t" in a ? a.t : s(r))("wallet.history.title")), 1), e.address ? (l(), d("div", bs, [o[1] || (o[1] = _("img", {
          src: R,
          alt: "Ton logo"
        }, null, -1)), _("div", hs, f(e.address.short), 1)])) : w("", !0)]), y(u, {
          onEnd: o[0] || (o[0] = b => s(t).load())
        }, {
          default: N(() => [s(t).isEmpty.value ? (l(), p(i, {
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
  ws = v(ks, [
    ["__scopeId", "data-v-55fd4c6d"]
  ]),
  $s = {
    class: "wallet-index-page page"
  };
var bt = (e => (e.WALLET = "wallet", e.POINTS = "points", e.TOKENS_HISTORY = "tokens_history", e))(bt || {});
const Is = g({
    __name: "index",
    setup(e) {
      const n = Y(),
        t = Ot(),
        a = u => Object.values(bt).includes(u),
        o = P((() => {
          const u = Array.isArray(n.query.tab) ? n.query.tab[0] : n.query.tab;
          return u && (Bt(), a(u)) ? u : "wallet"
        })());
      D(() => t.wallet.value, u => {
        u.status !== "connected" && (o.value = "wallet")
      });
      const i = h(() => {
        if (o.value !== "wallet") return () => o.value = "wallet"
      });
      D(i, u => Y().meta.back = u, {
        immediate: !0
      });
      const c = h(() => `wallet-${o.value}`);
      return D(c, () => Y().meta.key = c.value), (u, b) => {
        const m = Tt,
          C = jt,
          x = Gt,
          ht = ye,
          kt = he,
          Q = Ln,
          wt = ds,
          $t = ws;
        return l(), d("div", $s, [s(t).wallet.value.status === "loading" ? (l(), p(m, {
          key: 0
        })) : s(t).wallet.value.status === "must_reconnect" ? (l(), p(C, {
          key: 1
        })) : (l(), d(I, {
          key: 2
        }, [s(t).isAvailable.value ? (l(), d(I, {
          key: 1
        }, [s(o) === "wallet" ? (l(), d(I, {
          key: 0
        }, [s(t).wallet.value.status === "not_found" ? (l(), d(I, {
          key: 0
        }, [y(kt, {
          class: "connect-banner"
        }), s(t).points.value ? (l(), p(Q, {
          key: 0,
          points: s(t).points.value,
          notification: s(t).walletNotification.value
        }, null, 8, ["points", "notification"])) : w("", !0)], 64)) : s(t).wallet.value.status === "connected" ? (l(), p(wt, {
          key: 1,
          address: s(t).wallet.value.address,
          balance: s(t).wallet.value.balance,
          notification: s(t).walletNotification.value,
          "onShow:points": b[0] || (b[0] = It => o.value = "points"),
          "onShow:tokensHistory": b[1] || (b[1] = It => o.value = "tokens_history")
        }, null, 8, ["address", "balance", "notification"])) : w("", !0)], 64)) : s(o) === "points" ? (l(), d(I, {
          key: 1
        }, [s(t).points.value === void 0 ? (l(), p(m, {
          key: 0
        })) : (l(), p(Q, {
          key: 1,
          points: s(t).points.value,
          notification: s(t).walletNotification.value
        }, null, 8, ["points", "notification"]))], 64)) : s(o) === "tokens_history" && s(t).wallet.value.status === "connected" ? (l(), p($t, {
          key: 2,
          address: s(t).wallet.value.address
        }, null, 8, ["address"])) : w("", !0)], 64)) : (l(), d(I, {
          key: 0
        }, [s(t).wallet.value.status === "not_found" ? (l(), p(x, {
          key: 0
        })) : s(t).wallet.value.status === "connected" ? (l(), p(ht, {
          key: 1,
          address: s(t).wallet.value.address
        }, null, 8, ["address"])) : w("", !0)], 64))], 64))])
      }
    }
  }),
  Ks = v(Is, [
    ["__scopeId", "data-v-dc810e5d"]
  ]);
export {
  Ks as
  default
};