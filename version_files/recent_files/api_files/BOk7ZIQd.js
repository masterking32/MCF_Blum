import {
  _ as Nt
} from "./6B_Xr7uX.js";
import {
  _ as J
} from "./BfA8VFEM.js";
import {
  L as T,
  cX as $,
  f as r,
  cY as k,
  d as b,
  b9 as L,
  a as l,
  m as p,
  e as o,
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
  cZ as R,
  c_ as St,
  V as z,
  W as I,
  X as A,
  n as S,
  F as h,
  A as tt,
  a8 as et,
  w as q,
  g as w,
  c$ as E,
  aj as Ct,
  o as Ut,
  aC as O,
  K as nt,
  E as st,
  J as At,
  ax as B,
  d0 as xt,
  aK as M,
  h as Kt,
  aJ as Wt,
  ap as ot,
  av as D,
  P as Et,
  aL as Z,
  b0 as Dt,
  d1 as Ot,
  ay as Y,
  ab as Bt,
  ao as Lt
} from "./B8dH5Zvz.js";
import {
  _ as at,
  d as U
} from "./Dv1uv4IR.js";
import {
  _ as W
} from "./RYa8JR7-.js";
import {
  c as Vt
} from "./DPbxm6ol.js";
import "./Dgn7poWK.js";
import "./Dkna_G2k.js";
const lt = t => {
    switch (t.type) {
      case $.TYPE.IN:
        switch (t.kind) {
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
        switch (t.kind) {
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
  it = t => {
    switch (t.type) {
      case $.TYPE.IN: {
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
      case $.TYPE.OUT: {
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
      case $.TYPE.UNKNOWN:
        return;
      default:
        throw T("Unknown history type")
    }
  },
  ct = t => {
    var n, e;
    switch (t.type) {
      case $.TYPE.IN:
        return {
          type: "single", icon: (n = t.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case $.TYPE.OUT:
        return {
          type: "single", icon: (e = t.payload.outbound.currency) == null ? void 0 : e.imageUrl
        };
      case $.TYPE.UNKNOWN:
        return;
      default:
        throw T("Unknown history type")
    }
  },
  Ht = t => ({
    title: lt(t),
    details: it(t),
    icon: ct(t)
  }),
  Rt = {
    title: lt,
    details: it,
    icon: ct,
    all: Ht
  },
  rt = t => {
    switch (t.type) {
      case k.TYPE.IN:
        return t.payload.inbound.nft ? r("wallet.history.tokens.in_nft") : r("wallet.history.tokens.in");
      case k.TYPE.OUT:
        return t.payload.outbound.nft ? r("wallet.history.tokens.out_nft") : r("wallet.history.tokens.out");
      case k.TYPE.SWAP:
        return r("wallet.history.tokens.swap");
      case k.TYPE.UNQUANTIFIED:
        return (() => {
          switch (t.kind) {
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
  dt = t => {
    switch (t.type) {
      case k.TYPE.IN: {
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
      case k.TYPE.OUT: {
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
      case k.TYPE.SWAP:
        return {
          details: `${t.payload.outbound.currency.symbol}→${t.payload.inbound.currency.symbol}`, isInternal: !1, prefix: void 0
        };
      case k.TYPE.UNQUANTIFIED:
        return;
      case k.TYPE.UNKNOWN:
        return;
      default:
        throw T("Unknown history type")
    }
  },
  ut = t => {
    var n, e;
    switch (t.type) {
      case k.TYPE.IN:
        return {
          type: "single", icon: (n = t.payload.inbound.currency) == null ? void 0 : n.imageUrl
        };
      case k.TYPE.OUT:
        return {
          type: "single", icon: (e = t.payload.outbound.currency) == null ? void 0 : e.imageUrl
        };
      case k.TYPE.SWAP:
        return {
          type: "double", iconFrom: t.payload.outbound.currency.imageUrl, iconTo: t.payload.inbound.currency.imageUrl
        };
      case k.TYPE.UNQUANTIFIED:
        return;
      case k.TYPE.UNKNOWN:
        return;
      default:
        throw T("Unknown history type")
    }
  },
  Mt = t => ({
    title: rt(t),
    details: dt(t),
    icon: ut(t)
  }),
  Yt = {
    title: rt,
    details: dt,
    icon: ut,
    all: Mt
  },
  qt = t => t.instance === "point",
  Ft = t => t.instance === "token",
  jt = (t, n) => {
    if (qt(t)) return n.point(t);
    if (Ft(t)) return n.token(t);
    throw T("Unknown history instance")
  },
  zt = b({
    __name: "Reconnect",
    setup(t) {
      const {
        reconnect: n
      } = L();
      return (e, s) => {
        const i = J;
        return l(), p(i, {
          lottie: "animations/Star",
          "icon-size": 116,
          title: ("t" in e ? e.t : o(r))("wallet.reconnect.title"),
          subtitle: ("t" in e ? e.t : o(r))("wallet.reconnect.subtitle"),
          "button-label": ("t" in e ? e.t : o(r))("wallet.reconnect.btn"),
          onButton: s[0] || (s[0] = a => o(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  Gt = v(zt, [
    ["__scopeId", "data-v-29d5ae4b"]
  ]),
  Qt = b({
    __name: "NotConnected",
    setup(t) {
      const {
        openConnectModal: n
      } = L();
      return (e, s) => {
        const i = J;
        return l(), p(i, {
          lottie: "animations/Unicorn",
          "icon-size": 88,
          title: ("t" in e ? e.t : o(r))("wallet.legacy.not_connected.title"),
          subtitle: ("t" in e ? e.t : o(r))("wallet.legacy.not_connected.subtitle"),
          "button-label": ("t" in e ? e.t : o(r))("wallet.legacy.not_connected.btn"),
          onButton: s[0] || (s[0] = a => o(n)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  Zt = v(Qt, [
    ["__scopeId", "data-v-8fdb824b"]
  ]),
  Jt = {
    class: "pages-wallet-label-bottom-sheet"
  },
  Xt = {
    class: "address-status"
  },
  te = {
    class: "address"
  },
  ee = {
    class: "status"
  },
  ne = {
    class: "label"
  },
  se = b({
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
    setup(t) {
      const n = F(t, "modelValue"),
        {
          disconnect: e,
          onDisconnected: s
        } = L();
      return s(() => n.value = !1), (i, a) => {
        const c = K,
          _ = H,
          f = j;
        return l(), p(f, {
          modelValue: n.value,
          "onUpdate:modelValue": a[1] || (a[1] = m => n.value = m),
          title: "Wallet"
        }, {
          default: N(() => [u("div", Jt, [u("div", Xt, [u("div", te, g(t.address.short), 1), u("div", ee, [y(c, {
            name: "circle-check-fill",
            class: "icon"
          }), u("span", ne, g(("t" in i ? i.t : o(r))("wallet.sheet.active")), 1)])]), y(_, {
            label: ("t" in i ? i.t : o(r))("wallet.sheet.disconnect"),
            type: o(Pt).GHOST,
            "is-danger": "",
            size: o(V).LARGE,
            onClick: a[0] || (a[0] = m => o(e)())
          }, null, 8, ["label", "type", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  oe = v(se, [
    ["__scopeId", "data-v-07f164ab"]
  ]),
  ae = {
    class: "pages-wallet-label"
  },
  le = {
    class: "address"
  },
  ie = b({
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
        const i = oe;
        return l(), d("div", ae, [u("div", {
          class: "label",
          onClick: s[0] || (s[0] = a => n.value = !0)
        }, [s[2] || (s[2] = u("img", {
          src: R,
          alt: "TON logo",
          class: "ton-logo"
        }, null, -1)), u("div", le, g(t.address.short), 1), s[3] || (s[3] = u("img", {
          src: St,
          alt: "Arrow down",
          class: "arrow-icon"
        }, null, -1))]), y(i, {
          modelValue: o(n),
          "onUpdate:modelValue": s[1] || (s[1] = a => z(n) ? n.value = a : null),
          address: t.address
        }, null, 8, ["modelValue", "address"])])
      }
    }
  }),
  _t = v(ie, [
    ["__scopeId", "data-v-0aed5ea6"]
  ]),
  ce = {
    class: "kit-progress-stepper"
  },
  re = {
    class: "icon-wrapper"
  },
  de = {
    class: "text"
  },
  ue = b({
    __name: "KitProgressStepper",
    props: {
      items: {
        type: Array,
        required: !0
      }
    },
    setup(t) {
      return (n, e) => {
        const s = K;
        return l(), d("div", ce, [(l(!0), d(I, null, A(t.items, i => (l(), d("div", {
          key: i.text,
          class: S(["item", {
            "is-active": i.active
          }])
        }, [u("div", re, [i.active ? (l(), p(s, {
          key: 0,
          name: "circle-check-white",
          class: "icon"
        })) : (l(), p(s, {
          key: 1,
          name: "circle-small",
          class: "icon"
        }))]), u("div", de, g(i.text), 1)], 2))), 128))])
      }
    }
  }),
  _e = v(ue, [
    ["__scopeId", "data-v-c6e84c97"]
  ]),
  pe = {
    class: "pages-wallet-legacy-connected"
  },
  me = {
    class: "container"
  },
  ye = {
    class: "title"
  },
  ve = b({
    __name: "Connected",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
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
      return (e, s) => {
        const i = at,
          a = tt,
          c = _t,
          _ = _e;
        return l(), d("div", pe, [y(i, {
          class: "background"
        }), u("div", me, [u("div", ye, g(("t" in e ? e.t : o(r))("wallet.legacy.connected.title")), 1), y(a, {
          name: "animations/MoneyWings",
          size: 80,
          class: "icon"
        }), y(c, {
          address: t.address
        }, null, 8, ["address"]), y(_, {
          items: o(n),
          class: "progress"
        }, null, 8, ["items"])])])
      }
    }
  }),
  fe = v(ve, [
    ["__scopeId", "data-v-bd91e87c"]
  ]),
  ge = {
    class: "pages-wallet-connect-banner"
  },
  be = {
    class: "container"
  },
  he = ["innerHTML"],
  ke = b({
    __name: "ConnectBanner",
    setup(t) {
      const {
        openConnectModal: n
      } = L();
      return (e, s) => {
        const i = at;
        return l(), d("div", ge, [y(i, {
          class: "background"
        }), u("div", be, [u("div", {
          class: "title",
          innerHTML: ("t" in e ? e.t : o(r))("wallet.connect_banner.title")
        }, null, 8, he), u("button", {
          class: "btn reset",
          onClick: s[0] || (s[0] = a => o(n)())
        }, g(("t" in e ? e.t : o(r))("wallet.connect_banner.btn")), 1)])])
      }
    }
  }),
  we = v(ke, [
    ["__scopeId", "data-v-256671da"]
  ]),
  $e = {
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
    setup(t) {
      return (n, e) => {
        const s = W;
        return l(), d("div", $e, [t.value === void 0 ? (l(), p(s, {
          key: 0,
          class: "skeleton",
          rounded: ""
        })) : (l(), d("div", {
          key: 1,
          class: S(["value", {
            "is-highlighted": t.value.value.greaterThan(0)
          }])
        }, g(t.value.defaultWithSymbol), 3))])
      }
    }
  }),
  Te = v(Ie, [
    ["__scopeId", "data-v-16763388"]
  ]),
  Ne = {},
  Pe = {
    class: "pages-wallet-atoms-coming-soon"
  },
  Se = {
    class: "label"
  };

function Ce(t, n) {
  const e = K;
  return l(), d("div", Pe, [y(e, {
    name: "clock",
    class: "icon"
  }), u("div", Se, g(("t" in t ? t.t : o(r))("wallet.history.coming_soon")), 1)])
}
const Ue = v(Ne, [
    ["render", Ce],
    ["__scopeId", "data-v-3ac68509"]
  ]),
  Ae = ["src"],
  xe = ["src"],
  Ke = b({
    __name: "HistoryItemIcon",
    props: {
      icon: {}
    },
    setup(t) {
      const n = t,
        e = h(() => {
          if (n.icon === void 0) return [U];
          if (n.icon.type === "single") return [n.icon.icon ?? U];
          if (n.icon.type === "double") return [n.icon.iconFrom ?? U, n.icon.iconTo ?? U];
          throw n.icon, T("Unknown icon type")
        });
      return (s, i) => {
        const a = et("img-error");
        return l(), d("div", {
          class: S(["pages-wallet-history-item-icon", {
            "is-single": o(e).length === 1,
            "is-double": o(e).length === 2
          }])
        }, [q(u("img", {
          src: o(e)[0],
          alt: "Transaction icon"
        }, null, 8, Ae), [
          [a, o(U)]
        ]), o(e).length === 2 ? q((l(), d("img", {
          key: 0,
          src: o(e)[1],
          alt: "Transaction icon"
        }, null, 8, xe)), [
          [a, o(U)]
        ]) : w("", !0)], 2)
      }
    }
  }),
  We = v(Ke, [
    ["__scopeId", "data-v-43176a1b"]
  ]),
  Ee = {
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
    setup(t) {
      const n = t,
        e = h(() => {
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
      return (s, i) => {
        const a = K;
        return o(e) ? (l(), d("div", {
          key: 0,
          class: S(["pages-wallet-history-item-status", o(e).cls])
        }, [y(a, {
          name: o(e).icon,
          class: "icon"
        }, null, 8, ["name"]), u("div", Ee, g(o(e).label), 1)], 2)) : w("", !0)
      }
    }
  }),
  Oe = v(De, [
    ["__scopeId", "data-v-14d91734"]
  ]),
  Be = {
    class: "pages-wallet-history-item"
  },
  Le = {
    class: "title-with-details"
  },
  Ve = {
    class: "title"
  },
  He = {
    key: 0,
    class: "details"
  },
  Re = {
    key: 0,
    class: "right-text"
  },
  Me = b({
    __name: "HistoryItem",
    props: {
      historyItem: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
      const n = t,
        e = h(() => jt(n.historyItem, {
          point: a => ({
            ...Rt.all(a),
            status: a.payload.status
          }),
          token: a => ({
            ...Yt.all(a),
            status: a.payload.status
          })
        })),
        s = h(() => {
          if (!(!e.value.details || e.value.details.isInternal)) return e.value.details.details
        }),
        i = h(() => {
          if (e.value.details && e.value.details.isInternal) {
            let a = e.value.details.details;
            return e.value.details.prefix && (a = `${e.value.details.prefix}${a}`), {
              type: "text",
              text: a
            }
          }
          if (e.value.status !== E.STATUS.OK) return {
            type: "status",
            status: e.value.status
          }
        });
      return (a, c) => {
        const _ = We,
          f = Oe;
        return l(), d("div", Be, [y(_, {
          icon: o(e).icon
        }, null, 8, ["icon"]), u("div", Le, [u("div", Ve, g(o(e).title), 1), o(s) ? (l(), d("div", He, g(o(s)), 1)) : w("", !0)]), o(i) ? (l(), d(I, {
          key: 0
        }, [o(i).type === "text" ? (l(), d("div", Re, g(o(i).text), 1)) : o(i).type === "status" ? (l(), p(f, {
          key: 1,
          status: o(i).status,
          class: "status"
        }, null, 8, ["status"])) : w("", !0)], 64)) : w("", !0)])
      }
    }
  }),
  Ye = v(Me, [
    ["__scopeId", "data-v-6587f464"]
  ]),
  qe = {
    class: "pages-wallet-history"
  },
  Fe = {
    key: 0,
    class: "date"
  },
  je = b({
    __name: "History",
    props: {
      history: {
        type: Array,
        required: !0
      }
    },
    setup(t) {
      return (n, e) => {
        const s = Ye;
        return l(), d("div", qe, [(l(!0), d(I, null, A(t.history, (i, a) => (l(), d(I, {
          key: a
        }, [a === 0 || t.history[a - 1].date.stamp !== t.history[a].date.stamp ? (l(), d("div", Fe, g(i.date.formatted), 1)) : w("", !0), y(s, {
          "history-item": i
        }, null, 8, ["history-item"])], 64))), 128))])
      }
    }
  }),
  pt = v(je, [
    ["__scopeId", "data-v-edabb2b5"]
  ]),
  ze = {
    class: "kit-scroll-observer"
  },
  Ge = b({
    __name: "KitScrollObserver",
    emits: ["end"],
    setup(t, {
      emit: n
    }) {
      const e = n,
        s = P(),
        i = new IntersectionObserver(a => a[0].isIntersecting && e("end"), {
          threshold: 1
        });
      return Ct(() => s.value && i.observe(s.value)), Ut(() => i.disconnect()), (a, c) => (l(), d("div", ze, [O(a.$slots, "default", {}, void 0, !0), u("div", {
        ref_key: "endRef",
        ref: s,
        class: "end"
      }, null, 512)]))
    }
  }),
  mt = v(Ge, [
    ["__scopeId", "data-v-a9019fbd"]
  ]),
  yt = t => {
    const n = P(),
      e = P(!1),
      s = P(!1),
      i = async () => {
        var f, m;
        if (e.value || s.value) return;
        e.value = !0;
        const c = (m = (f = n.value) == null ? void 0 : f[n.value.length - 1]) == null ? void 0 : m.nextPageToken,
          _ = await t(c);
        if (n.value || (n.value = []), n.value.push({
            nextPageToken: _.nextPageToken,
            items: _.items
          }), _.items.length === 0 || _.nextPageToken === "0" || _.nextPageToken === "" || c === _.nextPageToken) {
          s.value = !0, e.value = !1;
          return
        }
        e.value = !1
      }, a = h(() => {
        var c;
        return (c = n.value) == null ? void 0 : c.flatMap(_ => _.items)
      });
    return {
      isInitialized: h(() => n.value !== void 0),
      isLoading: h(() => e.value),
      isEmpty: h(() => {
        var c;
        return ((c = a.value) == null ? void 0 : c.length) === 0
      }),
      data: h(() => a.value ?? []),
      load: i
    }
  },
  Qe = {
    class: "pages-wallet-points-history"
  },
  Ze = b({
    __name: "PointsHistory",
    setup(t) {
      const e = yt(async s => {
        const i = await nt.getPointsHistory(s);
        if (i.err) throw T("Unable to load points history");
        return {
          nextPageToken: i.data.nextPageToken,
          items: i.data.actions
        }
      });
      return (s, i) => {
        const a = Ue,
          c = pt,
          _ = mt;
        return l(), d("div", Qe, [y(_, {
          onEnd: i[0] || (i[0] = f => o(e).load())
        }, {
          default: N(() => [o(e).isEmpty.value ? (l(), p(a, {
            key: 0
          })) : (l(), p(c, {
            key: 1,
            history: o(e).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  Je = v(Ze, [
    ["__scopeId", "data-v-7c645fab"]
  ]),
  Xe = {
    class: "kit-label-with-bottom-sheet"
  },
  tn = {
    key: 0,
    class: "image"
  },
  en = ["src"],
  nn = {
    class: "text"
  },
  sn = b({
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
      return (s, i) => {
        const a = K,
          c = j;
        return l(), d("div", Xe, [u("div", {
          class: S(["label", `is-${t.type}`]),
          onClick: i[0] || (i[0] = _ => n.value = !0)
        }, [t.image || s.$slots.image ? (l(), d("div", tn, [O(s.$slots, "image", {}, () => [t.image ? (l(), d("img", {
          key: 0,
          src: t.image,
          alt: "Image"
        }, null, 8, en)) : w("", !0)], !0)])) : w("", !0), u("div", nn, g(t.text), 1), y(a, {
          name: "chevron-right",
          class: "icon"
        })], 2), y(c, {
          modelValue: o(n),
          "onUpdate:modelValue": i[1] || (i[1] = _ => z(n) ? n.value = _ : null),
          title: t.title,
          banner: t.banner
        }, {
          default: N(() => [O(s.$slots, "default", {
            close: e
          }, void 0, !0)]),
          _: 3
        }, 8, ["modelValue", "title", "banner"])])
      }
    }
  }),
  G = v(sn, [
    ["__scopeId", "data-v-e9eaa47e"]
  ]),
  on = {
    class: "container"
  },
  an = {
    class: "title"
  },
  ln = {
    class: "text"
  },
  cn = b({
    __name: "DropDogsNotification",
    setup(t) {
      const n = h(() => {
        const e = st().playPasses.value;
        return e && e > 0 ? {
          label: r("wallet.drop.play_btn"),
          action: () => At().push({
            name: "game"
          })
        } : {
          label: r("base.got_it"),
          action: s => s()
        }
      });
      return (e, s) => {
        const i = H,
          a = G;
        return l(), p(a, {
          text: ("t" in e ? e.t : o(r))("wallet.drop.label", {
            ticker: "$DOGS"
          }),
          image: ("imgResolver" in e ? e.imgResolver : o(B))("dogs-logo", "svg"),
          banner: ("imgResolver" in e ? e.imgResolver : o(B))("special/drop-dogs-banner"),
          type: "light-blue",
          class: "pages-wallet-block-details-drop-dogs-notification"
        }, {
          default: N(({
            close: c
          }) => [u("div", on, [u("div", an, g(("t" in e ? e.t : o(r))("wallet.drop.title", {
            ticker: "$DOGS"
          })), 1), u("div", ln, g(("t" in e ? e.t : o(r))("wallet.drop.text", {
            ticker: "DOGS"
          })), 1), y(i, {
            label: o(n).label,
            fill: "",
            class: "button",
            size: o(V).LARGE,
            onClick: _ => o(n).action(c)
          }, null, 8, ["label", "size", "onClick"])])]),
          _: 1
        }, 8, ["text", "image", "banner"])
      }
    }
  }),
  vt = v(cn, [
    ["__scopeId", "data-v-ebae2f19"]
  ]),
  rn = {
    class: "pages-wallet-block-details-soon-notification-content"
  },
  dn = {
    class: "title"
  },
  un = ["innerHTML"],
  _n = b({
    __name: "Content",
    emits: ["close"],
    setup(t) {
      return (n, e) => {
        const s = tt,
          i = H;
        return l(), d("div", rn, [y(s, {
          name: "animations/MoneyWings",
          size: 116
        }), u("div", dn, g(("t" in n ? n.t : o(r))("wallet.drop.notification.content.title")), 1), u("div", {
          class: "text",
          innerHTML: ("t" in n ? n.t : o(r))("wallet.drop.notification.content.text")
        }, null, 8, un), y(i, {
          label: ("t" in n ? n.t : o(r))("base.got_it"),
          fill: "",
          class: "button",
          size: o(V).LARGE,
          onClick: e[0] || (e[0] = a => n.$emit("close"))
        }, null, 8, ["label", "size"])])
      }
    }
  }),
  ft = v(_n, [
    ["__scopeId", "data-v-7ad98ffe"]
  ]),
  pn = {};

function mn(t, n) {
  const e = ft,
    s = G;
  return l(), p(s, {
    text: ("t" in t ? t.t : o(r))("wallet.drop.notification.label"),
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
    }) => [y(e, {
      onClose: a => i()
    }, null, 8, ["onClose"])]),
    _: 1
  }, 8, ["text"])
}
const yn = v(pn, [
    ["render", mn],
    ["__scopeId", "data-v-eb9556ff"]
  ]),
  vn = b({
    __name: "AssetFarmingLabel",
    props: {
      farming: {
        type: Object,
        required: !0
      }
    },
    setup(t) {
      const n = t,
        e = h(() => {
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
      return (s, i) => {
        const a = Wt;
        return l(), p(a, {
          to: {
            name: "index"
          },
          class: S(["pages-wallet-asset-farming-label", o(e).cls])
        }, {
          default: N(() => [Kt(g(o(e).label), 1)]),
          _: 1
        }, 8, ["class"])
      }
    }
  }),
  fn = v(vn, [
    ["__scopeId", "data-v-040dda74"]
  ]),
  gn = ["src"],
  bn = {
    class: "compose"
  },
  hn = {
    class: "name"
  },
  kn = {
    class: "balance"
  },
  wn = {
    key: 0,
    class: "right-slot"
  },
  $n = {
    key: 1,
    class: "fiat"
  },
  In = b({
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
    setup(t) {
      const n = t,
        e = h(() => {
          var s;
          return n.symbol === "BP" ? {
            type: "farming",
            farming: st().activeFarming.value
          } : n.symbol === "PP" ? void 0 : {
            type: "fiat",
            value: (s = n.fiat.USD) == null ? void 0 : s.defaultWithSymbol
          }
        });
      return (s, i) => {
        const a = W,
          c = fn,
          _ = et("img-error");
        return l(), d("div", {
          class: S(["pages-wallet-asset", {
            clickable: s.clickable
          }])
        }, [q(u("img", {
          src: s.imageUrl,
          alt: "Coin item icon",
          class: "icon"
        }, null, 8, gn), [
          [_, o(U)]
        ]), u("div", bn, [u("div", hn, g(s.name), 1), u("div", kn, g(s.balance.defaultWithSymbol), 1)]), o(e) ? (l(), d("div", wn, [o(e).type === "fiat" ? (l(), d(I, {
          key: 0
        }, [o(e).value === void 0 ? (l(), p(a, {
          key: 0,
          class: "fiat-skeleton"
        })) : (l(), d("div", $n, g(o(e).value), 1))], 64)) : o(e).type === "farming" && o(e).farming ? (l(), p(c, {
          key: 1,
          farming: o(e).farming
        }, null, 8, ["farming"])) : w("", !0)])) : w("", !0)], 2)
      }
    }
  }),
  gt = v(In, [
    ["__scopeId", "data-v-ca143c01"]
  ]),
  Tn = b({
    __name: "Sheet",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(t) {
      const n = F(t, "modelValue");
      return (e, s) => {
        const i = ft,
          a = j;
        return l(), p(a, {
          modelValue: n.value,
          "onUpdate:modelValue": s[1] || (s[1] = c => n.value = c),
          class: "pages-wallet-block-details-soon-notification-sheet"
        }, {
          default: N(() => [y(i, {
            onClose: s[0] || (s[0] = c => n.value = !1)
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Nn = v(Tn, [
    ["__scopeId", "data-v-c6ce1d42"]
  ]),
  Pn = {
    class: "pages-wallet-asset-points"
  },
  Sn = b({
    __name: "AssetPoints",
    props: {
      points: {
        type: Array,
        required: !0
      }
    },
    setup(t) {
      const n = t,
        e = h(() => n.points.map(a => ({
          id: a.currencyId,
          name: a.name,
          symbol: a.symbol,
          balance: a.balance,
          fiat: a.fiatValue,
          imageUrl: a.imageUrl,
          clickable: !!i(a.symbol)
        }))),
        s = P(!1),
        i = a => {
          if (a === "DOGS") return () => s.value = !0
        };
      return (a, c) => {
        const _ = gt,
          f = Nn;
        return l(), d("div", Pn, [(l(!0), d(I, null, A(o(e), m => (l(), p(_, ot({
          key: m.id,
          ref_for: !0
        }, m, {
          onClick: C => {
            var x;
            return (x = i(m.symbol)) == null ? void 0 : x()
          }
        }), null, 16, ["onClick"]))), 128)), y(f, {
          modelValue: o(s),
          "onUpdate:modelValue": c[0] || (c[0] = m => z(s) ? s.value = m : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  Cn = v(Sn, [
    ["__scopeId", "data-v-8ed14ade"]
  ]),
  Un = ["onClick"],
  An = b({
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
    setup(t) {
      const n = t,
        e = F(t, "modelValue");
      D(e, () => Et().$webApp.HapticFeedback.impactOccurred("light"));
      const s = h(() => {
        const a = n.tabs.length,
          c = 0,
          _ = n.tabs.findIndex(m => m.key === e.value),
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
        style: Z(o(s))
      }, null, 4), (l(!0), d(I, null, A(i.tabs, c => (l(), d("button", {
        key: c.key,
        class: S(["tab reset", {
          "is-active": e.value === c.key
        }]),
        onClick: _ => e.value = c.key
      }, g(c.label), 11, Un))), 128))], 4))
    }
  }),
  xn = v(An, [
    ["__scopeId", "data-v-8fb6ab30"]
  ]),
  Kn = {
    class: "kit-tabs-slider"
  },
  Wn = {
    key: 0,
    class: "slide"
  },
  En = b({
    __name: "KitTabsSlider",
    props: {
      tabs: {}
    },
    setup(t) {
      const n = t,
        e = P(n.tabs[0].key),
        s = P("left"),
        i = P(),
        a = c => {
          if (c === e.value) return;
          const _ = n.tabs.findIndex(m => m.key === e.value),
            f = n.tabs.findIndex(m => m.key === c);
          s.value = _ < f ? "right" : "left", i.value && (i.value.scrollTop = 0), e.value = c
        };
      return (c, _) => {
        const f = xn;
        return l(), d("div", Kn, [y(f, {
          "model-value": o(e),
          tabs: c.tabs,
          "onUpdate:modelValue": _[0] || (_[0] = m => a(m))
        }, null, 8, ["model-value", "tabs"]), y(Dt, {
          tag: "div",
          class: "slider-wrapper",
          name: `slider-transition-from-${o(s)}`
        }, {
          default: N(() => [(l(!0), d(I, null, A(c.tabs, m => (l(), d(I, {
            key: m.key
          }, [m.key === o(e) ? (l(), d("div", Wn, [O(c.$slots, m.key, {}, void 0, !0)])) : w("", !0)], 64))), 128))]),
          _: 3
        }, 8, ["name"])])
      }
    }
  }),
  Dn = v(En, [
    ["__scopeId", "data-v-84da8c16"]
  ]),
  On = {
    class: "pages-wallet-block-points"
  },
  Bn = {
    class: "heading"
  },
  Ln = {
    class: "title"
  },
  Vn = b({
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
      const n = h(() => [{
        key: "balances",
        label: r("wallet.points.tabs.balances")
      }, {
        key: "history",
        label: r("wallet.points.tabs.history")
      }]);
      return (e, s) => {
        const i = Te,
          a = Je,
          c = W,
          _ = vt,
          f = yn,
          m = Cn,
          C = Dn;
        return l(), d("div", On, [u("div", Bn, [u("div", Ln, g(("t" in e ? e.t : o(r))("wallet.points.title")), 1), y(i, {
          value: t.points.totalFiatValue.USD
        }, null, 8, ["value"])]), y(C, {
          tabs: o(n),
          class: "tabs"
        }, {
          history: N(() => [y(a, {
            class: "history"
          })]),
          balances: N(() => [t.notification === void 0 ? (l(), p(c, {
            key: 0,
            class: "notification-skeleton notification"
          })) : t.notification === "dogs_drop" ? (l(), p(_, {
            key: 1,
            class: "notification"
          })) : t.notification === "default" ? (l(), p(f, {
            key: 2,
            class: "notification"
          })) : w("", !0), y(m, {
            points: t.points.points
          }, null, 8, ["points"])]),
          _: 1
        }, 8, ["tabs"])])
      }
    }
  }),
  Hn = v(Vn, [
    ["__scopeId", "data-v-1672ca95"]
  ]),
  Rn = {
    class: "pages-wallet-connected-banner"
  },
  Mn = {
    key: 1,
    class: "balance"
  },
  Yn = {
    class: "value"
  },
  qn = {
    key: 2,
    class: "last-updated"
  },
  Fn = b({
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
        e = h(() => {
          if (n.updatedAt && Date.now() - n.updatedAt.getTime() > 3e5) return Ot(n.updatedAt)
        });
      return (s, i) => {
        const a = _t,
          c = W;
        return l(), d("div", Rn, [y(a, {
          address: t.address
        }, null, 8, ["address"]), t.fiatValue === void 0 || t.fiatValue.USD == null ? (l(), p(c, {
          key: 0,
          class: "skeleton"
        })) : (l(), d("div", Mn, [i[0] || (i[0] = u("span", {
          class: "symbol"
        }, "$", -1)), u("span", Yn, g(t.fiatValue.USD.default), 1)])), o(e) ? (l(), d("div", qn, g(("t" in s ? s.t : o(r))("wallet.connected.last_updated", {
          updatedAtLabel: o(e)
        })), 1)) : w("", !0)])
      }
    }
  }),
  jn = v(Fn, [
    ["__scopeId", "data-v-6e2f0c44"]
  ]),
  zn = {
    class: "pages-wallet-controls"
  },
  Gn = ["onClick"],
  Qn = {
    class: "icon"
  },
  Zn = ["src", "alt"],
  Jn = {
    class: "label"
  },
  Xn = b({
    __name: "Controls",
    emits: ["show:points", "show:tokens-history"],
    setup(t, {
      emit: n
    }) {
      const e = n,
        s = h(() => [{
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
          onClick: () => e("show:tokens-history")
        }, {
          label: r("wallet.controls.points"),
          icon: "leaf",
          onClick: () => e("show:points")
        }]);
      return (i, a) => (l(), d("div", zn, [(l(!0), d(I, null, A(o(s), (c, _) => (l(), d("button", {
        key: _,
        class: S(["control reset", {
          "is-disabled": c.disabled
        }]),
        onClick: f => {
          var m;
          return (m = c.onClick) == null ? void 0 : m.call(c)
        }
      }, [u("div", Qn, [u("img", {
        src: ("imgResolver" in i ? i.imgResolver : o(B))(c.icon, "svg"),
        alt: `${c.label} icon`
      }, null, 8, Zn)]), u("div", Jn, g(c.label), 1)], 10, Gn))), 128))]))
    }
  }),
  ts = v(Xn, [
    ["__scopeId", "data-v-2fa06ff8"]
  ]),
  es = {
    class: "container"
  },
  ns = {
    class: "title"
  },
  ss = {
    class: "text"
  },
  os = b({
    __name: "TokensOnlyTonNotification",
    setup(t) {
      return (n, e) => {
        const s = H,
          i = G;
        return l(), p(i, {
          text: ("t" in n ? n.t : o(r))("wallet.only_ton_notification.label"),
          class: "pages-wallet-block-tokens-only-ton-notification",
          image: ("imgResolver" in n ? n.imgResolver : o(B))("ton-logo", "svg")
        }, {
          default: N(({
            close: a
          }) => [u("div", es, [e[0] || (e[0] = u("img", {
            src: R,
            alt: "Ton logo"
          }, null, -1)), u("div", ns, g(("t" in n ? n.t : o(r))("wallet.only_ton_notification.title")), 1), u("div", ss, g(("t" in n ? n.t : o(r))("wallet.only_ton_notification.text")), 1), y(s, {
            label: ("t" in n ? n.t : o(r))("base.got_it"),
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
  as = v(os, [
    ["__scopeId", "data-v-2ce60cae"]
  ]),
  ls = "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_12285_76772)'%3e%3cpath%20d='M16.25%208C16.25%2012.2802%2012.7802%2015.75%208.5%2015.75C4.21979%2015.75%200.75%2012.2802%200.75%208C0.75%203.71979%204.21979%200.25%208.5%200.25C12.7802%200.25%2016.25%203.71979%2016.25%208Z'%20fill='%230088CC'%20stroke='%23282828'%20stroke-width='0.5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.76529%204.44434H11.2438C11.4532%204.44434%2011.6276%204.48121%2011.837%204.59184C12.0813%204.70246%2012.2208%204.88684%2012.2906%205.03434C12.2906%205.03434%2012.2906%205.07122%2012.3255%205.07122C12.4302%205.25559%2012.5%205.47684%2012.5%205.73497C12.5%205.95622%2012.4651%206.17747%2012.3255%206.39873L8.87093%2012.6675C8.80115%2012.815%208.66157%2012.8888%208.48709%2012.8888C8.34751%2012.8888%208.20793%2012.815%208.10325%2012.6675L4.71845%206.39873C4.64866%206.25123%204.50908%206.06685%204.50908%205.77185C4.47418%205.51372%204.54397%205.29247%204.64866%205.07122C4.75334%204.84996%204.92782%204.66559%205.17208%204.59184C5.38145%204.44434%205.62571%204.44434%205.76529%204.44434ZM8.06835%205.32934H5.76529C5.62571%205.32934%205.55592%205.32934%205.52103%205.36622C5.45124%205.40309%205.41634%205.43997%205.38145%205.51372C5.34655%205.55059%205.34655%205.62435%205.34655%205.6981C5.34655%205.73497%205.38145%205.77185%205.45124%205.91935L8.06835%2010.7131V5.32934ZM8.90583%205.32934V10.75L11.5578%205.91935C11.5927%205.8456%2011.5927%205.77185%2011.5927%205.6981C11.5927%205.62435%2011.5927%205.55059%2011.5578%205.51372C11.5229%205.47684%2011.5229%205.43997%2011.488%205.43997L11.4532%205.40309C11.3834%205.36622%2011.3136%205.36622%2011.2089%205.36622H8.90583V5.32934Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_12285_76772'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  is = {
    class: "pages-wallet-asset-tokens"
  },
  cs = b({
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
        e = h(() => {
          const s = {
              id: n.ton.currencyId,
              name: "Toncoin",
              symbol: "TON",
              balance: n.ton.balance,
              fiat: n.ton.fiatValue,
              imageUrl: ls
            },
            i = n.jettons.map(a => ({
              id: a.currencyId,
              name: a.name,
              symbol: a.symbol,
              balance: a.balance,
              fiat: a.fiatValue,
              imageUrl: a.imageUrl
            }));
          return [s, ...i]
        });
      return (s, i) => {
        const a = gt;
        return l(), d("div", is, [(l(!0), d(I, null, A(o(e), c => (l(), p(a, ot({
          key: c.id,
          ref_for: !0
        }, c), null, 16))), 128))])
      }
    }
  }),
  rs = v(cs, [
    ["__scopeId", "data-v-11c3bbc5"]
  ]),
  ds = {
    class: "pages-wallet-block-tokens"
  },
  us = b({
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
        var m, C;
        const s = jn,
          i = ts,
          a = W,
          c = vt,
          _ = as,
          f = rs;
        return l(), d("div", ds, [y(s, {
          address: t.address,
          "fiat-value": (m = t.balance) == null ? void 0 : m.totalFiatValue,
          "updated-at": (C = t.balance) == null ? void 0 : C.updatedAt
        }, null, 8, ["address", "fiat-value", "updated-at"]), y(i, {
          "onShow:points": e[0] || (e[0] = x => n.$emit("show:points")),
          "onShow:tokensHistory": e[1] || (e[1] = x => n.$emit("show:tokens-history"))
        }), t.notification === void 0 ? (l(), p(a, {
          key: 0,
          class: "notification-skeleton notification"
        })) : t.notification === "dogs_drop" ? (l(), p(c, {
          key: 1,
          class: "notification"
        })) : t.notification === "default" ? (l(), p(_, {
          key: 2,
          class: "notification"
        })) : w("", !0), t.balance ? (l(), p(f, {
          key: 3,
          ton: t.balance.tonBalance,
          jettons: t.balance.jettonBalances,
          class: "tokens"
        }, null, 8, ["ton", "jettons"])) : w("", !0)])
      }
    }
  }),
  _s = v(us, [
    ["__scopeId", "data-v-a27c7934"]
  ]),
  ps = {},
  ms = {
    class: "pages-wallet-atoms-no-records"
  },
  ys = {
    class: "label"
  };

function vs(t, n) {
  const e = K;
  return l(), d("div", ms, [y(e, {
    name: "note-search",
    class: "icon"
  }), u("div", ys, g(("t" in t ? t.t : o(r))("wallet.history.no_records")), 1)])
}
const fs = v(ps, [
    ["render", vs],
    ["__scopeId", "data-v-1d0de40b"]
  ]),
  gs = {
    class: "pages-wallet-block-tokens-history"
  },
  bs = {
    class: "heading"
  },
  hs = {
    class: "title"
  },
  ks = {
    key: 0,
    class: "wallet"
  },
  ws = {
    class: "value"
  },
  $s = b({
    __name: "TokensHistory",
    props: {
      address: {
        type: Object,
        default: void 0
      }
    },
    setup(t) {
      const e = yt(async s => {
        const i = await nt.getTokensHistory(s);
        if (i.err) throw T("Unable to load tokens history");
        return {
          nextPageToken: i.data.nextPageToken,
          items: i.data.actions
        }
      });
      return (s, i) => {
        const a = fs,
          c = pt,
          _ = mt;
        return l(), d("div", gs, [u("div", bs, [u("div", hs, g(("t" in s ? s.t : o(r))("wallet.history.title")), 1), t.address ? (l(), d("div", ks, [i[1] || (i[1] = u("img", {
          src: R,
          alt: "Ton logo"
        }, null, -1)), u("div", ws, g(t.address.short), 1)])) : w("", !0)]), y(_, {
          onEnd: i[0] || (i[0] = f => o(e).load())
        }, {
          default: N(() => [o(e).isEmpty.value ? (l(), p(a, {
            key: 0,
            class: "no-records"
          })) : (l(), p(c, {
            key: 1,
            history: o(e).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  Is = v($s, [
    ["__scopeId", "data-v-55fd4c6d"]
  ]),
  Ts = {
    class: "wallet-index-page page"
  };
var bt = (t => (t.WALLET = "wallet", t.POINTS = "points", t.TOKENS_HISTORY = "tokens_history", t))(bt || {});
const Ns = b({
    __name: "index",
    setup(t) {
      const n = Y();
      Bt().wallet.walletPageOpen();
      const s = Lt(),
        i = f => Object.values(bt).includes(f),
        a = P((() => {
          const f = Array.isArray(n.query.tab) ? n.query.tab[0] : n.query.tab;
          return f && (Vt(), i(f)) ? f : "wallet"
        })());
      D(() => s.wallet.value, f => {
        f.status !== "connected" && (a.value = "wallet")
      });
      const c = h(() => {
        if (a.value !== "wallet") return () => a.value = "wallet"
      });
      D(c, f => Y().meta.back = f, {
        immediate: !0
      });
      const _ = h(() => `wallet-${a.value}`);
      return D(_, () => Y().meta.key = _.value), (f, m) => {
        const C = Nt,
          x = Gt,
          ht = Zt,
          kt = fe,
          wt = we,
          Q = Hn,
          $t = _s,
          It = Is;
        return l(), d("div", Ts, [o(s).wallet.value.status === "loading" ? (l(), p(C, {
          key: 0
        })) : o(s).wallet.value.status === "must_reconnect" ? (l(), p(x, {
          key: 1
        })) : (l(), d(I, {
          key: 2
        }, [o(s).isAvailable.value ? (l(), d(I, {
          key: 1
        }, [o(a) === "wallet" ? (l(), d(I, {
          key: 0
        }, [o(s).wallet.value.status === "not_found" ? (l(), d(I, {
          key: 0
        }, [y(wt, {
          class: "connect-banner"
        }), o(s).points.value ? (l(), p(Q, {
          key: 0,
          points: o(s).points.value,
          notification: o(s).walletNotification.value
        }, null, 8, ["points", "notification"])) : w("", !0)], 64)) : o(s).wallet.value.status === "connected" ? (l(), p($t, {
          key: 1,
          address: o(s).wallet.value.address,
          balance: o(s).wallet.value.balance,
          notification: o(s).walletNotification.value,
          "onShow:points": m[0] || (m[0] = Tt => a.value = "points"),
          "onShow:tokensHistory": m[1] || (m[1] = Tt => a.value = "tokens_history")
        }, null, 8, ["address", "balance", "notification"])) : w("", !0)], 64)) : o(a) === "points" ? (l(), d(I, {
          key: 1
        }, [o(s).points.value === void 0 ? (l(), p(C, {
          key: 0
        })) : (l(), p(Q, {
          key: 1,
          points: o(s).points.value,
          notification: o(s).walletNotification.value
        }, null, 8, ["points", "notification"]))], 64)) : o(a) === "tokens_history" && o(s).wallet.value.status === "connected" ? (l(), p(It, {
          key: 2,
          address: o(s).wallet.value.address
        }, null, 8, ["address"])) : w("", !0)], 64)) : (l(), d(I, {
          key: 0
        }, [o(s).wallet.value.status === "not_found" ? (l(), p(ht, {
          key: 0
        })) : o(s).wallet.value.status === "connected" ? (l(), p(kt, {
          key: 1,
          address: o(s).wallet.value.address
        }, null, 8, ["address"])) : w("", !0)], 64))], 64))])
      }
    }
  }),
  Es = v(Ns, [
    ["__scopeId", "data-v-00088916"]
  ]);
export {
  Es as
  default
};