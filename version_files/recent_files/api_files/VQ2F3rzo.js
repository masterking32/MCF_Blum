import {
  _ as Cs
} from "./D-Sqbfrx.js";
import {
  _ as cr
} from "./B-C8jhdy.js";
import {
  L as te,
  c_ as jt,
  f as J,
  c$ as Kt,
  d as gt,
  b8 as Ke,
  a as U,
  m as ut,
  e as $,
  j as _t,
  az as In,
  aA as Dn,
  x as Dt,
  b as H,
  t as at,
  k as st,
  Y as Sn,
  B as ye,
  N as Ae,
  C as Qe,
  aT as Ln,
  r as Jt,
  c as q,
  d0 as Rn,
  d1 as Ai,
  V as Ps,
  W as xt,
  X as Be,
  n as de,
  F as kt,
  A as Es,
  a8 as lr,
  w as us,
  g as Pt,
  d2 as yn,
  aj as ki,
  o as ur,
  aC as Tn,
  K as dr,
  d3 as Ii,
  aK as ns,
  h as Cn,
  aJ as Si,
  E as Ti,
  aX as _r,
  aL as ds,
  af as _s,
  ai as pr,
  aY as Fs,
  c3 as Ci,
  H as Ks,
  u as Pi,
  cf as rt,
  bu as Pn,
  at as Ei,
  cb as fr,
  d4 as Mi,
  d5 as Oi,
  bI as hr,
  av as sn,
  c4 as ps,
  bd as $i,
  bo as Ni,
  b2 as Di,
  bq as Li,
  ap as fs,
  P as Ri,
  b1 as Fi,
  d6 as Ki,
  ax as gr,
  aZ as Bi,
  ay as ss,
  ab as ji,
  ao as xi
} from "./Dq6b0IKe.js";
import {
  _ as br,
  d as Oe
} from "./CyLYgXy8.js";
import {
  _ as Ye
} from "./D9DHcFey.js";
import {
  g as Ui
} from "./CrBVGa-F.js";
import {
  _ as mr
} from "./DU6LzOyQ.js";
import {
  _ as zi
} from "./D3zhtYA3.js";
import {
  _ as Wi
} from "./DZs_7pon.js";
import {
  _ as Hi
} from "./CMDdrpVt.js";
import {
  _ as Vi
} from "./C_9zws1G.js";
import {
  a as Gi
} from "./DvSiAemu.js";
import {
  c as Qi
} from "./DPbxm6ol.js";
import "./C7IeTE92.js";
const wr = n => {
    switch (n.type) {
      case jt.TYPE.IN:
        switch (n.kind) {
          case jt.KIND_IN.CLAIM_FARMING:
            return J("wallet.history.points.in_farming");
          case jt.KIND_IN.CLAIM_TASK:
            return J("wallet.history.points.in_task");
          case jt.KIND_IN.CLAIM_REFERRAL:
            return J("wallet.history.points.in_frens");
          case jt.KIND_IN.CLAIM_CHECK_IN:
            return J("wallet.history.points.in_daily_rewards");
          case jt.KIND_IN.DROP_GAME:
            return J("wallet.history.points.in_drop_game");
          case jt.KIND_IN.BLUM_DROP:
            return J("wallet.history.points.in_blum_drop");
          case jt.KIND_IN.WALLET_MIGRATION:
            return J("wallet.history.points.in_wallet_migration");
          case jt.KIND_IN.MANUAL:
            return J("wallet.history.points.in_manual");
          default:
            throw te("Unknown history kind")
        }
      case jt.TYPE.OUT:
        switch (n.kind) {
          case jt.KIND_OUT.DROP_GAME:
            return J("wallet.history.points.out_drop_game");
          case jt.KIND_OUT.WITHDRAW_TO_ONCHAIN:
            return J("wallet.history.points.out_withdraw_to_onchain");
          default:
            throw te("Unknown history kind")
        }
      case jt.TYPE.UNKNOWN:
        return J("wallet.history.unknown");
      default:
        throw te("Unknown history type")
    }
  },
  yr = n => {
    switch (n.type) {
      case jt.TYPE.IN: {
        if (n.payload.inbound) {
          const t = n.payload.inbound.currency.amount.defaultWithSymbol,
            e = n.payload.inbound.currency.isInternal;
          return {
            details: t,
            isInternal: e,
            prefix: "+"
          }
        }
        return
      }
      case jt.TYPE.OUT: {
        if (n.payload.outbound) {
          const t = n.payload.outbound.currency.amount.defaultWithSymbol,
            e = n.payload.outbound.currency.isInternal;
          return {
            details: t,
            isInternal: e,
            prefix: "-"
          }
        }
        return
      }
      case jt.TYPE.UNKNOWN:
        return;
      default:
        throw te("Unknown history type")
    }
  },
  vr = n => {
    var t, e;
    switch (n.type) {
      case jt.TYPE.IN:
        return {
          type: "single", icon: (t = n.payload.inbound.currency) == null ? void 0 : t.imageUrl
        };
      case jt.TYPE.OUT:
        return {
          type: "single", icon: (e = n.payload.outbound.currency) == null ? void 0 : e.imageUrl
        };
      case jt.TYPE.UNKNOWN:
        return;
      default:
        throw te("Unknown history type")
    }
  },
  Yi = n => ({
    title: wr(n),
    details: yr(n),
    icon: vr(n)
  }),
  Ji = {
    title: wr,
    details: yr,
    icon: vr,
    all: Yi
  },
  Ar = n => {
    switch (n.type) {
      case Kt.TYPE.IN:
        return n.payload.inbound.nft ? J("wallet.history.tokens.in_nft") : J("wallet.history.tokens.in");
      case Kt.TYPE.OUT:
        return n.payload.outbound.nft ? J("wallet.history.tokens.out_nft") : J("wallet.history.tokens.out");
      case Kt.TYPE.SWAP:
        return J("wallet.history.tokens.swap");
      case Kt.TYPE.UNQUANTIFIED:
        return (() => {
          switch (n.kind) {
            case Kt.KIND_UNQUANTIFIED.CONTRACT_DEPLOY:
              return J("wallet.history.tokens.other_contract_deploy");
            case Kt.KIND_UNQUANTIFIED.CONTRACT_EXEC:
              return J("wallet.history.tokens.other_contract_execution");
            case Kt.KIND_UNQUANTIFIED.UNSUBSCRIBE:
              return J("wallet.history.tokens.other_unsubscribed");
            case Kt.KIND_UNQUANTIFIED.DOMAIN_RENEW:
              return J("wallet.history.tokens.other_domain_renew");
            case Kt.KIND_UNQUANTIFIED.WITHDRAW_STAKE_REQUEST:
              return J("wallet.history.tokens.other_stake_request");
            default:
              throw te("Unknown unquantified history kind")
          }
        })();
      case Kt.TYPE.UNKNOWN:
        return J("wallet.history.unknown");
      default:
        throw te("Unknown history type")
    }
  },
  kr = n => {
    switch (n.type) {
      case Kt.TYPE.IN: {
        if (n.payload.inbound.currency) {
          const t = n.payload.inbound.currency.amount.defaultWithSymbol,
            e = n.payload.inbound.currency.isInternal;
          return {
            details: t,
            isInternal: e,
            prefix: "+"
          }
        }
        return
      }
      case Kt.TYPE.OUT: {
        if (n.payload.outbound.currency) {
          const t = n.payload.outbound.currency.amount.defaultWithSymbol,
            e = n.payload.outbound.currency.isInternal;
          return {
            details: t,
            isInternal: e,
            prefix: "-"
          }
        }
        return
      }
      case Kt.TYPE.SWAP:
        return {
          details: `${n.payload.outbound.currency.symbol}→${n.payload.inbound.currency.symbol}`, isInternal: !1, prefix: void 0
        };
      case Kt.TYPE.UNQUANTIFIED:
        return;
      case Kt.TYPE.UNKNOWN:
        return;
      default:
        throw te("Unknown history type")
    }
  },
  Ir = n => {
    var t, e;
    switch (n.type) {
      case Kt.TYPE.IN:
        return {
          type: "single", icon: (t = n.payload.inbound.currency) == null ? void 0 : t.imageUrl
        };
      case Kt.TYPE.OUT:
        return {
          type: "single", icon: (e = n.payload.outbound.currency) == null ? void 0 : e.imageUrl
        };
      case Kt.TYPE.SWAP:
        return {
          type: "double", iconFrom: n.payload.outbound.currency.imageUrl, iconTo: n.payload.inbound.currency.imageUrl
        };
      case Kt.TYPE.UNQUANTIFIED:
        return;
      case Kt.TYPE.UNKNOWN:
        return;
      default:
        throw te("Unknown history type")
    }
  },
  Xi = n => ({
    title: Ar(n),
    details: kr(n),
    icon: Ir(n)
  }),
  Zi = {
    title: Ar,
    details: kr,
    icon: Ir,
    all: Xi
  },
  qi = n => n.instance === "point",
  ta = n => n.instance === "token",
  ea = (n, t) => {
    if (qi(n)) return t.point(n);
    if (ta(n)) return t.token(n);
    throw te("Unknown history instance")
  },
  na = gt({
    __name: "Reconnect",
    setup(n) {
      const {
        reconnect: t
      } = Ke();
      return (e, s) => {
        const r = cr;
        return U(), ut(r, {
          lottie: "animations/Star",
          "icon-size": 116,
          title: ("t" in e ? e.t : $(J))("wallet.reconnect.title"),
          subtitle: ("t" in e ? e.t : $(J))("wallet.reconnect.subtitle"),
          "button-label": ("t" in e ? e.t : $(J))("wallet.reconnect.btn"),
          onButton: s[0] || (s[0] = i => $(t)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  sa = _t(na, [
    ["__scopeId", "data-v-29d5ae4b"]
  ]),
  ra = gt({
    __name: "NotConnected",
    setup(n) {
      const {
        openConnectModal: t
      } = Ke();
      return (e, s) => {
        const r = cr;
        return U(), ut(r, {
          lottie: "animations/Unicorn",
          "icon-size": 88,
          title: ("t" in e ? e.t : $(J))("wallet.legacy.not_connected.title"),
          subtitle: ("t" in e ? e.t : $(J))("wallet.legacy.not_connected.subtitle"),
          "button-label": ("t" in e ? e.t : $(J))("wallet.legacy.not_connected.btn"),
          onButton: s[0] || (s[0] = i => $(t)())
        }, null, 8, ["title", "subtitle", "button-label"])
      }
    }
  }),
  ia = _t(ra, [
    ["__scopeId", "data-v-8fdb824b"]
  ]),
  aa = {
    class: "pages-wallet-label-bottom-sheet"
  },
  oa = {
    class: "address-status"
  },
  ca = {
    class: "address"
  },
  la = {
    class: "status"
  },
  ua = {
    class: "label"
  },
  da = gt({
    __name: "LabelBottomSheet",
    props: In({
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
    setup(n) {
      const t = Dn(n, "modelValue"),
        {
          disconnect: e,
          onDisconnected: s
        } = Ke();
      return s(() => t.value = !1), (r, i) => {
        const o = Ae,
          l = Qe,
          d = Ln;
        return U(), ut(d, {
          modelValue: t.value,
          "onUpdate:modelValue": i[1] || (i[1] = p => t.value = p),
          title: "Wallet"
        }, {
          default: Dt(() => [H("div", aa, [H("div", oa, [H("div", ca, at(n.address.short), 1), H("div", la, [st(o, {
            name: "circle-check-fill",
            class: "icon"
          }), H("span", ua, at(("t" in r ? r.t : $(J))("wallet.sheet.active")), 1)])]), st(l, {
            label: ("t" in r ? r.t : $(J))("wallet.sheet.disconnect"),
            type: $(Sn).GHOST,
            "is-danger": "",
            size: $(ye).LARGE,
            onClick: i[0] || (i[0] = p => $(e)())
          }, null, 8, ["label", "type", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  _a = _t(da, [
    ["__scopeId", "data-v-07f164ab"]
  ]),
  pa = {
    class: "pages-wallet-label"
  },
  fa = {
    class: "address"
  },
  ha = gt({
    __name: "Label",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(n) {
      const t = Jt(!1);
      return (e, s) => {
        const r = _a;
        return U(), q("div", pa, [H("div", {
          class: "label",
          onClick: s[0] || (s[0] = i => t.value = !0)
        }, [s[2] || (s[2] = H("img", {
          src: Rn,
          alt: "TON logo",
          class: "ton-logo"
        }, null, -1)), H("div", fa, at(n.address.short), 1), s[3] || (s[3] = H("img", {
          src: Ai,
          alt: "Arrow down",
          class: "arrow-icon"
        }, null, -1))]), st(r, {
          modelValue: $(t),
          "onUpdate:modelValue": s[1] || (s[1] = i => Ps(t) ? t.value = i : null),
          address: n.address
        }, null, 8, ["modelValue", "address"])])
      }
    }
  }),
  Sr = _t(ha, [
    ["__scopeId", "data-v-0aed5ea6"]
  ]),
  ga = {
    class: "kit-progress-stepper"
  },
  ba = {
    class: "icon-wrapper"
  },
  ma = {
    class: "text"
  },
  wa = gt({
    __name: "KitProgressStepper",
    props: {
      items: {
        type: Array,
        required: !0
      }
    },
    setup(n) {
      return (t, e) => {
        const s = Ae;
        return U(), q("div", ga, [(U(!0), q(xt, null, Be(n.items, r => (U(), q("div", {
          key: r.text,
          class: de(["item", {
            "is-active": r.active
          }])
        }, [H("div", ba, [r.active ? (U(), ut(s, {
          key: 0,
          name: "circle-check-white",
          class: "icon"
        })) : (U(), ut(s, {
          key: 1,
          name: "circle-small",
          class: "icon"
        }))]), H("div", ma, at(r.text), 1)], 2))), 128))])
      }
    }
  }),
  ya = _t(wa, [
    ["__scopeId", "data-v-c6e84c97"]
  ]),
  va = {
    class: "pages-wallet-legacy-connected"
  },
  Aa = {
    class: "container"
  },
  ka = {
    class: "title"
  },
  Ia = gt({
    __name: "Connected",
    props: {
      address: {
        type: Object,
        required: !0
      }
    },
    setup(n) {
      const t = kt(() => [{
        active: !0,
        text: J("wallet.legacy.connected.step.ton_connect")
      }, {
        active: !1,
        text: J("wallet.legacy.connected.step.blum_wallet")
      }, {
        active: !1,
        text: J("wallet.legacy.connected.step.wallet_connect")
      }]);
      return (e, s) => {
        const r = br,
          i = Es,
          o = Sr,
          l = ya;
        return U(), q("div", va, [st(r, {
          class: "background"
        }), H("div", Aa, [H("div", ka, at(("t" in e ? e.t : $(J))("wallet.legacy.connected.title")), 1), st(i, {
          name: "animations/MoneyWings",
          size: 80,
          class: "icon"
        }), st(o, {
          address: n.address
        }, null, 8, ["address"]), st(l, {
          items: $(t),
          class: "progress"
        }, null, 8, ["items"])])])
      }
    }
  }),
  Sa = _t(Ia, [
    ["__scopeId", "data-v-bd91e87c"]
  ]),
  Ta = {
    class: "pages-wallet-connect-banner"
  },
  Ca = {
    class: "container"
  },
  Pa = ["innerHTML"],
  Ea = gt({
    __name: "ConnectBanner",
    setup(n) {
      const {
        openConnectModal: t
      } = Ke();
      return (e, s) => {
        const r = br;
        return U(), q("div", Ta, [st(r, {
          class: "background"
        }), H("div", Ca, [H("div", {
          class: "title",
          innerHTML: ("t" in e ? e.t : $(J))("wallet.connect_banner.title")
        }, null, 8, Pa), H("button", {
          class: "btn reset",
          onClick: s[0] || (s[0] = i => $(t)())
        }, at(("t" in e ? e.t : $(J))("wallet.connect_banner.btn")), 1)])])
      }
    }
  }),
  Ma = _t(Ea, [
    ["__scopeId", "data-v-256671da"]
  ]),
  Oa = {
    class: "pages-wallet-block-points-fiat-equal"
  },
  $a = gt({
    __name: "PointsFiatEqual",
    props: {
      value: {
        type: Object,
        default: void 0
      }
    },
    setup(n) {
      return (t, e) => {
        const s = Ye;
        return U(), q("div", Oa, [n.value === void 0 ? (U(), ut(s, {
          key: 0,
          class: "skeleton",
          rounded: ""
        })) : (U(), q("div", {
          key: 1,
          class: de(["value", {
            "is-highlighted": n.value.value.greaterThan(0)
          }])
        }, at(n.value.defaultWithSymbol), 3))])
      }
    }
  }),
  Na = _t($a, [
    ["__scopeId", "data-v-16763388"]
  ]),
  Da = {},
  La = {
    class: "pages-wallet-atoms-coming-soon"
  },
  Ra = {
    class: "label"
  };

function Fa(n, t) {
  const e = Ae;
  return U(), q("div", La, [st(e, {
    name: "clock",
    class: "icon"
  }), H("div", Ra, at(("t" in n ? n.t : $(J))("wallet.history.coming_soon")), 1)])
}
const Ka = _t(Da, [
    ["render", Fa],
    ["__scopeId", "data-v-3ac68509"]
  ]),
  Ba = ["src"],
  ja = ["src"],
  xa = gt({
    __name: "HistoryItemIcon",
    props: {
      icon: {}
    },
    setup(n) {
      const t = n,
        e = kt(() => {
          if (t.icon === void 0) return [Oe];
          if (t.icon.type === "single") return [t.icon.icon ?? Oe];
          if (t.icon.type === "double") return [t.icon.iconFrom ?? Oe, t.icon.iconTo ?? Oe];
          throw t.icon, te("Unknown icon type")
        });
      return (s, r) => {
        const i = lr("img-error");
        return U(), q("div", {
          class: de(["pages-wallet-history-item-icon", {
            "is-single": $(e).length === 1,
            "is-double": $(e).length === 2
          }])
        }, [us(H("img", {
          src: $(e)[0],
          alt: "Transaction icon"
        }, null, 8, Ba), [
          [i, $(Oe)]
        ]), $(e).length === 2 ? us((U(), q("img", {
          key: 0,
          src: $(e)[1],
          alt: "Transaction icon"
        }, null, 8, ja)), [
          [i, $(Oe)]
        ]) : Pt("", !0)], 2)
      }
    }
  }),
  Ua = _t(xa, [
    ["__scopeId", "data-v-43176a1b"]
  ]),
  za = {
    class: "label"
  },
  Wa = gt({
    __name: "HistoryItemStatus",
    props: {
      status: {
        type: String,
        required: !0
      }
    },
    setup(n) {
      const t = n,
        e = kt(() => {
          switch (t.status) {
            case yn.STATUS.PENDING:
              return;
            case yn.STATUS.FAILED:
              return {
                icon: "circle-warning-fill", label: "Failed", cls: "is-failed"
              };
            case yn.STATUS.OK:
              return {
                icon: "circle-check-fill", label: "Success", cls: "is-success"
              };
            default:
              throw t.status, te("Unknown history status")
          }
        });
      return (s, r) => {
        const i = Ae;
        return $(e) ? (U(), q("div", {
          key: 0,
          class: de(["pages-wallet-history-item-status", $(e).cls])
        }, [st(i, {
          name: $(e).icon,
          class: "icon"
        }, null, 8, ["name"]), H("div", za, at($(e).label), 1)], 2)) : Pt("", !0)
      }
    }
  }),
  Ha = _t(Wa, [
    ["__scopeId", "data-v-14d91734"]
  ]),
  Va = {
    class: "pages-wallet-history-item"
  },
  Ga = {
    class: "title-with-details"
  },
  Qa = {
    class: "title"
  },
  Ya = {
    key: 0,
    class: "details"
  },
  Ja = {
    key: 0,
    class: "right-text"
  },
  Xa = gt({
    __name: "HistoryItem",
    props: {
      historyItem: {
        type: Object,
        required: !0
      }
    },
    setup(n) {
      const t = n,
        e = kt(() => ea(t.historyItem, {
          point: i => ({
            ...Ji.all(i),
            status: i.payload.status
          }),
          token: i => ({
            ...Zi.all(i),
            status: i.payload.status
          })
        })),
        s = kt(() => {
          if (!(!e.value.details || e.value.details.isInternal)) return e.value.details.details
        }),
        r = kt(() => {
          if (e.value.details && e.value.details.isInternal) {
            let i = e.value.details.details;
            return e.value.details.prefix && (i = `${e.value.details.prefix}${i}`), {
              type: "text",
              text: i
            }
          }
          if (e.value.status !== yn.STATUS.OK) return {
            type: "status",
            status: e.value.status
          }
        });
      return (i, o) => {
        const l = Ua,
          d = Ha;
        return U(), q("div", Va, [st(l, {
          icon: $(e).icon
        }, null, 8, ["icon"]), H("div", Ga, [H("div", Qa, at($(e).title), 1), $(s) ? (U(), q("div", Ya, at($(s)), 1)) : Pt("", !0)]), $(r) ? (U(), q(xt, {
          key: 0
        }, [$(r).type === "text" ? (U(), q("div", Ja, at($(r).text), 1)) : $(r).type === "status" ? (U(), ut(d, {
          key: 1,
          status: $(r).status,
          class: "status"
        }, null, 8, ["status"])) : Pt("", !0)], 64)) : Pt("", !0)])
      }
    }
  }),
  Za = _t(Xa, [
    ["__scopeId", "data-v-6587f464"]
  ]),
  qa = {
    class: "pages-wallet-history"
  },
  to = {
    key: 0,
    class: "date"
  },
  eo = gt({
    __name: "History",
    props: {
      history: {
        type: Array,
        required: !0
      }
    },
    setup(n) {
      return (t, e) => {
        const s = Za;
        return U(), q("div", qa, [(U(!0), q(xt, null, Be(n.history, (r, i) => (U(), q(xt, {
          key: i
        }, [i === 0 || n.history[i - 1].date.stamp !== n.history[i].date.stamp ? (U(), q("div", to, at(r.date.formatted), 1)) : Pt("", !0), st(s, {
          "history-item": r
        }, null, 8, ["history-item"])], 64))), 128))])
      }
    }
  }),
  Tr = _t(eo, [
    ["__scopeId", "data-v-edabb2b5"]
  ]),
  no = {
    class: "kit-scroll-observer"
  },
  so = gt({
    __name: "KitScrollObserver",
    emits: ["end"],
    setup(n, {
      emit: t
    }) {
      const e = t,
        s = Jt(),
        r = new IntersectionObserver(i => i[0].isIntersecting && e("end"), {
          threshold: 1
        });
      return ki(() => s.value && r.observe(s.value)), ur(() => r.disconnect()), (i, o) => (U(), q("div", no, [Tn(i.$slots, "default", {}, void 0, !0), H("div", {
        ref_key: "endRef",
        ref: s,
        class: "end"
      }, null, 512)]))
    }
  }),
  Cr = _t(so, [
    ["__scopeId", "data-v-a9019fbd"]
  ]),
  Pr = n => {
    const t = Jt(),
      e = Jt(!1),
      s = Jt(!1),
      r = async () => {
        var d, p;
        if (e.value || s.value) return;
        e.value = !0;
        const o = (p = (d = t.value) == null ? void 0 : d[t.value.length - 1]) == null ? void 0 : p.nextPageToken,
          l = await n(o);
        if (t.value || (t.value = []), t.value.push({
            nextPageToken: l.nextPageToken,
            items: l.items
          }), l.items.length === 0 || l.nextPageToken === "0" || l.nextPageToken === "" || o === l.nextPageToken) {
          s.value = !0, e.value = !1;
          return
        }
        e.value = !1
      }, i = kt(() => {
        var o;
        return (o = t.value) == null ? void 0 : o.flatMap(l => l.items)
      });
    return {
      isInitialized: kt(() => t.value !== void 0),
      isLoading: kt(() => e.value),
      isEmpty: kt(() => {
        var o;
        return ((o = i.value) == null ? void 0 : o.length) === 0
      }),
      data: kt(() => i.value ?? []),
      load: r
    }
  },
  ro = {
    class: "pages-wallet-points-history"
  },
  io = gt({
    __name: "PointsHistory",
    setup(n) {
      const e = Pr(async s => {
        const r = await dr.getPointsHistory(s);
        if (r.err) throw te("Unable to load points history");
        return {
          nextPageToken: r.data.nextPageToken,
          items: r.data.actions
        }
      });
      return (s, r) => {
        const i = Ka,
          o = Tr,
          l = Cr;
        return U(), q("div", ro, [st(l, {
          onEnd: r[0] || (r[0] = d => $(e).load())
        }, {
          default: Dt(() => [$(e).isEmpty.value ? (U(), ut(i, {
            key: 0
          })) : (U(), ut(o, {
            key: 1,
            history: $(e).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  ao = _t(io, [
    ["__scopeId", "data-v-7c645fab"]
  ]),
  oo = {
    class: "pages-wallet-block-details-soon-notification-content"
  },
  co = {
    class: "title"
  },
  lo = ["innerHTML"],
  uo = gt({
    __name: "Content",
    emits: ["close"],
    setup(n) {
      return (t, e) => {
        const s = Es,
          r = Qe;
        return U(), q("div", oo, [st(s, {
          name: "animations/MoneyWings",
          size: 116
        }), H("div", co, at(("t" in t ? t.t : $(J))("wallet.drop.notification.content.title")), 1), H("div", {
          class: "text",
          innerHTML: ("t" in t ? t.t : $(J))("wallet.drop.notification.content.text")
        }, null, 8, lo), st(r, {
          label: ("t" in t ? t.t : $(J))("base.got_it"),
          fill: "",
          class: "button",
          size: $(ye).LARGE,
          onClick: e[0] || (e[0] = i => t.$emit("close"))
        }, null, 8, ["label", "size"])])
      }
    }
  }),
  Er = _t(uo, [
    ["__scopeId", "data-v-7ad98ffe"]
  ]),
  _o = {
    class: "kit-label-with-bottom-sheet"
  },
  po = {
    key: 0,
    class: "image"
  },
  fo = ["src"],
  ho = {
    class: "text"
  },
  go = gt({
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
    setup(n) {
      const t = Jt(!1),
        e = () => t.value = !1;
      return (s, r) => {
        const i = Ae,
          o = Ln;
        return U(), q("div", _o, [H("div", {
          class: de(["label", `is-${n.type}`]),
          onClick: r[0] || (r[0] = l => t.value = !0)
        }, [n.image || s.$slots.image ? (U(), q("div", po, [Tn(s.$slots, "image", {}, () => [n.image ? (U(), q("img", {
          key: 0,
          src: n.image,
          alt: "Image"
        }, null, 8, fo)) : Pt("", !0)], !0)])) : Pt("", !0), H("div", ho, at(n.text), 1), st(i, {
          name: "chevron-right",
          class: "icon"
        })], 2), st(o, {
          modelValue: $(t),
          "onUpdate:modelValue": r[1] || (r[1] = l => Ps(t) ? t.value = l : null),
          title: n.title,
          banner: n.banner
        }, {
          default: Dt(() => [Tn(s.$slots, "default", {
            close: e
          }, void 0, !0)]),
          _: 3
        }, 8, ["modelValue", "title", "banner"])])
      }
    }
  }),
  Mr = _t(go, [
    ["__scopeId", "data-v-e9eaa47e"]
  ]),
  bo = {};

function mo(n, t) {
  const e = Er,
    s = Mr;
  return U(), ut(s, {
    text: ("t" in n ? n.t : $(J))("wallet.drop.notification.label"),
    class: "pages-wallet-block-details-soon-notification-with-label"
  }, {
    image: Dt(() => t[0] || (t[0] = [H("img", {
      class: "img",
      src: Rn,
      alt: "Ton logo"
    }, null, -1), H("img", {
      class: "img",
      src: Ii,
      alt: "Notcoin logo"
    }, null, -1)])),
    default: Dt(({
      close: r
    }) => [st(e, {
      onClose: i => r()
    }, null, 8, ["onClose"])]),
    _: 1
  }, 8, ["text"])
}
const wo = _t(bo, [
    ["render", mo],
    ["__scopeId", "data-v-eb9556ff"]
  ]),
  yo = gt({
    __name: "AssetFarmingLabel",
    props: {
      farming: {
        type: Object,
        required: !0
      }
    },
    setup(n) {
      const t = n,
        e = kt(() => {
          switch (t.farming.status) {
            case ns.READY:
              return {
                label: J("wallet.farming.ready")
              };
            case ns.ACTIVE:
              return {
                label: J("wallet.farming.active")
              };
            case ns.DONE:
              return {
                label: J("wallet.farming.done"), cls: "is-done"
              };
            default:
              throw t.farming, te("Unknown farming status")
          }
        });
      return (s, r) => {
        const i = Si;
        return U(), ut(i, {
          to: {
            name: "index"
          },
          class: de(["pages-wallet-asset-farming-label", $(e).cls])
        }, {
          default: Dt(() => [Cn(at($(e).label), 1)]),
          _: 1
        }, 8, ["class"])
      }
    }
  }),
  vo = _t(yo, [
    ["__scopeId", "data-v-040dda74"]
  ]),
  Ao = ["src"],
  ko = {
    class: "compose"
  },
  Io = {
    class: "name"
  },
  So = {
    key: 1,
    class: "balance"
  },
  To = {
    key: 0,
    class: "right-slot"
  },
  Co = {
    key: 1,
    class: "fiat"
  },
  Po = gt({
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
      description: {},
      pnlPercent: {}
    },
    setup(n) {
      const t = n,
        e = kt(() => t.symbol === "BP" ? {
          type: "farming",
          farming: Ti().activeFarming.value
        } : t.symbol === "PP" ? void 0 : t.fiat.USD === void 0 ? {
          type: "fiat",
          value: void 0,
          pnl: void 0
        } : {
          type: "fiat",
          value: t.fiat.USD.defaultWithSymbol,
          pnl: t.pnlPercent ? Ui(t.pnlPercent) : void 0
        });
      return (s, r) => {
        const i = Ye,
          o = vo,
          l = lr("img-error");
        return U(), q("div", {
          class: de(["pages-wallet-asset", {
            clickable: s.clickable
          }])
        }, [us(H("img", {
          src: s.imageUrl,
          alt: "Coin item icon",
          class: "icon"
        }, null, 8, Ao), [
          [l, $(Oe)]
        ]), H("div", ko, [H("div", Io, at(s.name), 1), s.description ? (U(), q("div", {
          key: 0,
          class: de(["balance", {
            highlight: s.description.highlighted
          }])
        }, at(s.description.value), 3)) : (U(), q("div", So, at(s.balance.defaultWithSymbol), 1))]), $(e) ? (U(), q("div", To, [$(e).type === "fiat" ? (U(), q(xt, {
          key: 0
        }, [$(e).value === void 0 ? (U(), ut(i, {
          key: 0,
          class: "fiat-skeleton"
        })) : (U(), q("div", Co, at($(e).value), 1)), $(e).pnl ? (U(), q("div", {
          key: 2,
          class: de(["pnl-label", $(e).pnl.cls])
        }, at($(e).pnl.formatted), 3)) : Pt("", !0)], 64)) : $(e).type === "farming" && $(e).farming ? (U(), ut(o, {
          key: 1,
          farming: $(e).farming
        }, null, 8, ["farming"])) : Pt("", !0)])) : Pt("", !0)], 2)
      }
    }
  }),
  Or = _t(Po, [
    ["__scopeId", "data-v-eb17afcf"]
  ]),
  Eo = {
    key: 0,
    class: "inner"
  },
  Mo = {
    class: "image-wrapper"
  },
  Oo = {
    class: "title"
  },
  $o = {
    key: 0,
    class: "wrong-wallet-address"
  },
  No = {
    class: "text"
  },
  Do = {
    class: "buttons"
  },
  Lo = {
    class: "wallet"
  },
  Ro = {
    class: "icon-wrapper"
  },
  Fo = {
    class: "address"
  },
  Ko = {
    class: "status"
  },
  Bo = {
    class: "label"
  },
  jo = {
    key: 1,
    class: "not-enough-to-transfer"
  },
  xo = {
    class: "text"
  },
  Uo = {
    class: "buttons"
  },
  zo = {
    class: "balance"
  },
  Wo = {
    class: "top"
  },
  Ho = {
    class: "asset"
  },
  Vo = ["src"],
  Go = {
    class: "label"
  },
  Qo = {
    class: "jettons"
  },
  Yo = {
    class: "collected"
  },
  Jo = {
    class: "total"
  },
  Xo = {
    class: "progress"
  },
  Zo = {
    key: 2,
    class: "ready-to-transfer"
  },
  qo = ["innerHTML"],
  tc = {
    class: "buttons"
  },
  ec = {
    class: "wallet"
  },
  nc = {
    class: "icon-wrapper"
  },
  sc = ["src"],
  rc = {
    class: "ticker"
  },
  ic = {
    class: "amount"
  },
  ac = gt({
    __name: "Sheet",
    props: In({
      state: {}
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: In(["claim"], ["update:modelValue"]),
    setup(n) {
      const t = Dn(n, "modelValue"),
        e = Ke(),
        s = i => new _s(i.amount).div(i.minAmount).mul(100).toNumber(),
        r = (i, o) => {
          const l = Math.min(new _s(i.toFixed(2)).decimalPlaces(), 2);
          return `${pr(i,{accuracy:l})} ${o}`
        };
      return (i, o) => {
        const l = Es,
          d = Ae,
          p = Qe,
          f = Cs,
          P = Ln;
        return U(), ut(P, {
          modelValue: t.value,
          "onUpdate:modelValue": o[2] || (o[2] = y => t.value = y),
          class: "pages-wallet-block-details-drop-sheet"
        }, {
          default: Dt(() => [i.state.type !== "loading" ? (U(), q("div", Eo, [H("div", Mo, [st(l, {
            name: "animations/MoneyWings",
            size: 96
          })]), H("div", Oo, at(("t" in i ? i.t : $(J))("wallet.drop.sheet.title")), 1), i.state.type === "wrong_wallet_address" ? (U(), q("div", $o, [H("div", No, at(("t" in i ? i.t : $(J))("wallet.drop.sheet.wrong_wallet_address.subtitle", {
            ticker: i.state.asset.symbol
          })), 1), H("div", Do, [H("div", Lo, [H("div", Ro, [st(d, {
            name: "ton-logo",
            class: "icon"
          })]), H("div", Fo, at(("sliceWalletAddress" in i ? i.sliceWalletAddress : $(_r))(i.state.eligibleWalletAddress)), 1), H("div", Ko, [st(d, {
            name: "circle-check",
            class: "icon"
          }), H("div", Bo, at(("t" in i ? i.t : $(J))("wallet.drop.sheet.wrong_wallet_address.eligible_label")), 1)])]), st(p, {
            label: ("t" in i ? i.t : $(J))("wallet.reconnect.btn"),
            fill: "",
            size: $(ye).LARGE,
            onClick: o[0] || (o[0] = y => $(e).reconnect())
          }, null, 8, ["label", "size"])])])) : i.state.type === "not_enough_to_transfer" ? (U(), q("div", jo, [H("div", xo, at(("t" in i ? i.t : $(J))("wallet.drop.sheet.not_enough_to_transfer.subtitle", {
            ticker: i.state.asset.symbol
          })), 1), H("div", Uo, [H("div", zo, [H("div", Wo, [H("div", Ho, [H("img", {
            src: i.state.asset.imageUrl
          }, null, 8, Vo), H("div", Go, at(i.state.asset.symbol), 1)]), H("div", Qo, [H("span", Yo, at(r(i.state.amount, i.state.asset.symbol)), 1), H("span", Jo, " / " + at(r(i.state.minAmount, i.state.asset.symbol)), 1)])]), H("div", Xo, [H("div", {
            class: "line",
            style: ds({
              "--percent": `${s(i.state)}%`
            })
          }, null, 4)])]), st(p, {
            label: ("t" in i ? i.t : $(J))("wallet.drop.sheet.not_enough_to_transfer.btn_label"),
            fill: "",
            size: $(ye).LARGE,
            type: $(Sn).SECONDARY,
            disabled: ""
          }, null, 8, ["label", "size", "type"])])])) : i.state.type === "ready_to_transfer" ? (U(), q("div", Zo, [H("div", {
            class: "text",
            innerHTML: ("t" in i ? i.t : $(J))("wallet.drop.sheet.ready_to_transfer.subtitle", {
              ticker: i.state.asset.symbol
            })
          }, null, 8, qo), H("div", tc, [H("div", ec, [H("div", nc, [H("img", {
            src: i.state.asset.imageUrl
          }, null, 8, sc)]), H("div", rc, at(i.state.asset.symbol), 1), H("div", ic, at(r(i.state.amount, i.state.asset.symbol)), 1)]), st(p, {
            label: ("t" in i ? i.t : $(J))("wallet.drop.sheet.ready_to_transfer.btn_label"),
            fill: "",
            size: $(ye).LARGE,
            type: $(Sn).HIGHLIGHT,
            onClick: o[1] || (o[1] = y => i.state.claim())
          }, null, 8, ["label", "size", "type"])])])) : Pt("", !0)])) : (U(), ut(f, {
            key: 1,
            class: "loading"
          }))]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  oc = _t(ac, [
    ["__scopeId", "data-v-ee6ef360"]
  ]),
  cc = {
    class: "pages-wallet-block-details-drop-claim-button"
  },
  lc = {
    class: "details"
  },
  uc = {
    class: "wallet"
  },
  dc = {
    key: 1,
    class: "fees"
  },
  _c = gt({
    __name: "ClaimButton",
    props: {
      walletAddress: {},
      fee: {},
      tonBalance: {},
      claimFn: {
        type: Function
      }
    },
    emits: ["claim"],
    setup(n, {
      emit: t
    }) {
      const e = n,
        s = t,
        r = kt(() => {
          if (e.tonBalance && e.tonBalance.value.lt(e.fee)) return J("memepad.jetton.not_enough_error", {
            ticker: "TON"
          })
        }),
        i = Jt(!1),
        o = kt(() => i.value || !e.tonBalance),
        l = async () => {
          o.value || r.value || (i.value = !0, await e.claimFn(), i.value = !1, s("claim"))
        };
      return (d, p) => {
        const f = Ye,
          P = Ae,
          y = Hi,
          S = Vi,
          A = Qe;
        return U(), q("div", cc, [H("div", lc, [$(o) ? (U(), q(xt, {
          key: 0
        }, [st(f, {
          class: "skeleton"
        }), st(f, {
          class: "skeleton"
        })], 64)) : (U(), q(xt, {
          key: 1
        }, [H("div", uc, [st(P, {
          name: "connected-wallet",
          class: "icon"
        }), H("span", null, at(("sliceWalletAddress" in d ? d.sliceWalletAddress : $(_r))(d.walletAddress)), 1)]), $(r) ? (U(), ut(y, {
          key: 0,
          "error-message": $(r)
        }, null, 8, ["error-message"])) : (U(), q("div", dc, [st(S, {
          "text-min-width": 155,
          alignment: $(Ci).TOP
        }, {
          default: Dt(() => [st(P, {
            name: "circle-help",
            class: "icon"
          })]),
          inner: Dt(() => [H("div", null, at(`${("t"in d?d.t:$(J))("memepad.jetton.fees_network")}: ${("formatTon"in d?d.formatTon:$(Fs))(d.fee,2)} TON`), 1)]),
          _: 1
        }, 8, ["alignment"]), H("span", null, at(`${("t"in d?d.t:$(J))("memepad.jetton.fees_base")}: ${`${("formatTon"in d?d.formatTon:$(Fs))(d.fee,2)} TON`}`), 1)]))], 64))]), st(A, {
          type: $(Sn).HIGHLIGHT,
          size: $(ye).LARGE,
          loading: $(o),
          disabled: !!$(r),
          onClick: p[0] || (p[0] = h => l())
        }, {
          default: Dt(() => [Cn(at(("t" in d ? d.t : $(J))("wallet.drop.queue_page.ready_to_claim.btn_label")), 1)]),
          _: 1
        }, 8, ["type", "size", "loading", "disabled"])])
      }
    }
  }),
  pc = _t(_c, [
    ["__scopeId", "data-v-bc302f37"]
  ]),
  fc = {
    key: 0,
    class: "loading"
  },
  hc = {
    key: 1,
    class: "waiting inner"
  },
  gc = {
    class: "title"
  },
  bc = {
    class: "status"
  },
  mc = {
    class: "text"
  },
  wc = {
    class: "footer is-single"
  },
  yc = {
    class: "note"
  },
  vc = {
    key: 2,
    class: "ready-to-claim inner"
  },
  Ac = {
    class: "image-wrapper"
  },
  kc = ["src"],
  Ic = {
    class: "title"
  },
  Sc = {
    class: "status"
  },
  Tc = {
    class: "text"
  },
  Cc = {
    class: "footer"
  },
  Pc = {
    key: 3,
    class: "transferring inner"
  },
  Ec = {
    class: "image-wrapper"
  },
  Mc = ["src"],
  Oc = {
    class: "title"
  },
  $c = {
    class: "status"
  },
  Nc = {
    class: "text"
  },
  Dc = {
    class: "footer"
  },
  Lc = {
    key: 4,
    class: "done"
  },
  Rc = {
    class: "icon-wrapper"
  },
  Fc = {
    class: "icon-inner"
  },
  Kc = {
    class: "title"
  },
  Bc = {
    class: "subtitle"
  },
  jc = gt({
    __name: "QueuePage",
    emits: ["close"],
    setup(n, {
      expose: t
    }) {
      Gi("pages-wallet-block-points-claim-page");
      const e = Jt({
          status: "loading"
        }),
        s = ({
          points: d
        }) => {
          const p = ["amount"];
          return d > 1e3 && p.push("is-many"), Ks("div", {
            class: p
          }, Ks(zi, {
            value: pr(d, {
              accuracy: 2,
              trim: !0
            })
          }))
        };
      return t({
        openWaiting: ({
          spotPosition: d
        }) => {
          e.value = {
            status: "waiting",
            spotPosition: d
          }
        },
        openReadyToClaim: ({
          pointsToClaim: d,
          imageUrl: p,
          symbol: f,
          walletAddress: P,
          fee: y,
          tonBalance: S,
          claimFn: A
        }, h) => {
          e.value = {
            status: "ready_to_claim",
            pointsToClaim: d,
            imageUrl: p,
            symbol: f,
            walletAddress: P,
            fee: y,
            tonBalance: S,
            claimFn: A
          }, h && Pi().makeConfetti()
        },
        openTransferring: ({
          transferringPoints: d,
          imageUrl: p,
          symbol: f
        }) => {
          e.value = {
            status: "transferring",
            transferringPoints: d,
            imageUrl: p,
            symbol: f
          }
        },
        openDone: () => {
          e.value = {
            status: "done"
          }
        }
      }), (d, p) => {
        const f = Cs,
          P = mr,
          y = Wi,
          S = pc,
          A = Qe,
          h = Ae;
        return U(), q("div", {
          class: de(["pages-wallet-block-points-claim-page page", `is-${$(e).status.toLowerCase()}`])
        }, [$(e).status === "loading" ? (U(), q("div", fc, [st(f)])) : $(e).status === "waiting" ? (U(), q("div", hc, [st(P), H("div", gc, at(("t" in d ? d.t : $(J))("wallet.drop.queue_page.waiting.title")), 1), st(s, {
          points: $(e).spotPosition
        }, null, 8, ["points"]), H("div", bc, [p[2] || (p[2] = H("div", {
          class: "ping-dot"
        }, null, -1)), H("span", mc, at(("t" in d ? d.t : $(J))("wallet.drop.queue_page.waiting.status")), 1)]), st(y, null, {
          default: Dt(() => [H("div", wc, [H("div", yc, at(("t" in d ? d.t : $(J))("wallet.drop.queue_page.waiting.note_dogs")), 1)])]),
          _: 1
        })])) : $(e).status === "ready_to_claim" ? (U(), q("div", vc, [st(P), H("div", Ac, [H("img", {
          src: $(e).imageUrl,
          alt: "Point image"
        }, null, 8, kc)]), H("div", Ic, at($(e).symbol), 1), st(s, {
          points: $(e).pointsToClaim
        }, null, 8, ["points"]), H("div", Sc, [p[3] || (p[3] = H("div", {
          class: "ping-dot"
        }, null, -1)), H("span", Tc, at(("t" in d ? d.t : $(J))("wallet.drop.queue_page.ready_to_claim.status")), 1)]), st(y, null, {
          default: Dt(() => [H("div", Cc, [st(S, {
            "wallet-address": $(e).walletAddress,
            fee: $(e).fee,
            "ton-balance": $(e).tonBalance,
            "claim-fn": $(e).claimFn
          }, null, 8, ["wallet-address", "fee", "ton-balance", "claim-fn"])])]),
          _: 1
        })])) : $(e).status === "transferring" ? (U(), q("div", Pc, [st(P), H("div", Ec, [H("img", {
          src: $(e).imageUrl,
          alt: "Point image"
        }, null, 8, Mc)]), H("div", Oc, at($(e).symbol), 1), st(s, {
          points: $(e).transferringPoints
        }, null, 8, ["points"]), H("div", $c, [p[4] || (p[4] = H("div", {
          class: "ping-dot"
        }, null, -1)), H("span", Nc, at(("t" in d ? d.t : $(J))("wallet.drop.queue_page.transferring.status")), 1)]), st(y, null, {
          default: Dt(() => [H("div", Dc, [st(A, {
            size: $(ye).LARGE,
            class: "button",
            onClick: p[0] || (p[0] = m => d.$emit("close"))
          }, {
            default: Dt(() => [Cn(at(("t" in d ? d.t : $(J))("base.got_it")), 1)]),
            _: 1
          }, 8, ["size"])])]),
          _: 1
        })])) : $(e).status === "done" ? (U(), q("div", Lc, [H("div", Rc, [H("div", Fc, [st(h, {
          name: "check-big",
          class: "icon"
        })])]), H("div", Kc, at(("t" in d ? d.t : $(J))("wallet.drop.queue_page.done.title")), 1), H("div", Bc, at(("t" in d ? d.t : $(J))("wallet.drop.queue_page.done.subtitle")), 1), st(y, null, {
          default: Dt(() => [st(A, {
            size: $(ye).LARGE,
            class: "button",
            onClick: p[1] || (p[1] = m => d.$emit("close"))
          }, {
            default: Dt(() => [Cn(at(("t" in d ? d.t : $(J))("wallet.drop.queue_page.done.btn_label")), 1)]),
            _: 1
          }, 8, ["size"])]),
          _: 1
        })])) : Pt("", !0)], 2)
      }
    }
  }),
  xc = _t(jc, [
    ["__scopeId", "data-v-57eddbc3"]
  ]);
var $r = {},
  Ce = {},
  $t = {},
  Ve = {};
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.getUniqueId = n.mergeTransactions = n.LT_COLLATOR = n.Semaphore = n.DelayedTransactions = n.MessageExpiredException = n.AddressLiteral = n.isAddressObject = n.Address = void 0;
  class t {
    constructor(A) {
      this.equals = h => this._equals(h), this._address = A
    }
    toString() {
      return this._address
    }
    toJSON() {
      return this._address
    }
    _equals(A) {
      return typeof A == "string" ? this._address === A : this._address === (A == null ? void 0 : A._address)
    }
  }
  n.Address = t;

  function e(S) {
    return S != null && (S instanceof t || Object.getPrototypeOf(S).constructor.name === t.prototype.constructor.name)
  }
  n.isAddressObject = e;
  class s extends t {
    constructor(A) {
      super(A)
    }
  }
  n.AddressLiteral = s;
  class r extends Error {
    constructor(A, h) {
      super("Message expired"), this.address = A, this.hash = h
    }
  }
  n.MessageExpiredException = r;
  class i {
    constructor() {
      this.transactions = new Map
    }
    async waitTransaction(A, h) {
      var m;
      let B = (m = this.transactions.get(h)) === null || m === void 0 ? void 0 : m.promise;
      if (B == null) {
        let v, b;
        B = new Promise((R, j) => {
          v = x => R(x), b = () => j()
        }), this.transactions.set(h, {
          promise: B,
          resolve: v,
          reject: b
        })
      }
      const w = await B;
      if (w == null) throw new r(A, h);
      return w
    }
    fillTransaction(A, h) {
      const m = this.transactions.get(A);
      m != null ? m.resolve(h) : this.transactions.set(A, {
        promise: Promise.resolve(h),
        resolve: () => {},
        reject: () => {}
      })
    }
  }
  n.DelayedTransactions = i;
  class o {
    constructor(A) {
      this.tasks = [], this.sched = () => {
        var h;
        this.count > 0 && this.tasks.length > 0 && (this.count--, (h = this.tasks.shift()) === null || h === void 0 || h())
      }, this.count = A
    }
    acquire() {
      return new Promise((A, h) => {
        this.tasks.push(() => {
          let m = !1;
          A(() => {
            m || (m = !0, this.count++, this.sched())
          })
        }), d(this.sched)
      })
    }
    releaseAll() {
      for (var A; this.tasks.length > 0;)(A = this.tasks.shift()) === null || A === void 0 || A()
    }
  }
  n.Semaphore = o;

  function l(S) {
    const A = document.createTextNode("");
    let h, m, B = 0,
      w = 0;
    return new S(function() {
        let v;
        if (h) m && (h = m.slice(w).concat(h));
        else {
          if (!m) return;
          h = m
        }
        if (m = h, h = null, w = 0, typeof m == "function") {
          v = m, m = null, v();
          return
        }
        for (A.data = B = ++B % 2; w < m.length;) v = m[w], w++, w === m.length && (m = null), v()
      }).observe(A, {
        characterData: !0
      }),
      function(v) {
        if (h) {
          typeof h == "function" ? h = [h, v] : h.push(v);
          return
        }
        h = v, A.data = B = ++B % 2
      }
  }
  const d = function() {
    if (typeof queueMicrotask == "function") return queueMicrotask;
    if (typeof document == "object" && document) {
      if (typeof MutationObserver == "function") return l(MutationObserver);
      if (typeof window.WebKitMutationObserver == "function") return l(window.WebKitMutationObserver)
    }
    if (typeof setImmediate == "function") return setImmediate;
    if (typeof setTimeout == "function" || typeof setTimeout == "object") return function(S) {
      setTimeout(S, 0)
    };
    throw new Error("No `nextTick` implementation found")
  }();
  n.LT_COLLATOR = new Intl.Collator(void 0, {
    numeric: !0,
    sensitivity: "base"
  });

  function p(S, A, h) {
    if (h.batchType === "old") return S.push(...A), S;
    if (S.length === 0) return S.push(...A), S;
    let m = 0;
    for (; m < S.length && n.LT_COLLATOR.compare(S[m].id.lt, h.maxLt) >= 0;) ++m;
    return S.splice(m, 0, ...A), S
  }
  n.mergeTransactions = p;
  const f = 4294967295;
  let P = Math.floor(Math.random() * f);

  function y() {
    return P = (P + 1) % f, P
  }
  n.getUniqueId = y
})(Ve);
Object.defineProperty($t, "__esModule", {
  value: !0
});
$t.parsePartialTokensObject = $t.parseTokensObject = $t.serializeTokensObject = $t.parseAccountInteraction = $t.parsePermissions = $t.parseMessage = $t.serializeMessage = $t.parseTransaction = $t.serializeTransaction = void 0;
const on = Ve;

function Uc(n) {
  return {
    id: {
      hash: n.id.hash,
      lt: n.id.lt
    },
    prevTransactionId: n.prevTransactionId != null ? {
      hash: n.prevTransactionId.hash,
      lt: n.prevTransactionId.lt
    } : void 0,
    createdAt: n.createdAt,
    aborted: n.aborted,
    exitCode: n.exitCode,
    resultCode: n.resultCode,
    origStatus: n.origStatus,
    endStatus: n.endStatus,
    totalFees: n.totalFees,
    inMessage: hs(n.inMessage),
    outMessages: n.outMessages.map(hs)
  }
}
$t.serializeTransaction = Uc;

function zc(n) {
  return {
    ...n,
    inMessage: gs(n.inMessage),
    outMessages: n.outMessages.map(gs)
  }
}
$t.parseTransaction = zc;

function hs(n) {
  return {
    hash: n.hash,
    src: n.src ? n.src.toString() : void 0,
    dst: n.dst ? n.dst.toString() : void 0,
    value: n.value,
    bounce: n.bounce,
    bounced: n.bounced,
    body: n.body,
    bodyHash: n.bodyHash
  }
}
$t.serializeMessage = hs;

function gs(n) {
  return {
    ...n,
    src: n.src ? new on.Address(n.src) : void 0,
    dst: n.dst ? new on.Address(n.dst) : void 0
  }
}
$t.parseMessage = gs;

function Wc(n) {
  return {
    ...n,
    accountInteraction: n.accountInteraction ? Nr(n.accountInteraction) : void 0
  }
}
$t.parsePermissions = Wc;

function Nr(n) {
  return {
    ...n,
    address: new on.Address(n.address)
  }
}
$t.parseAccountInteraction = Nr;

function Hc(n) {
  return bs(n)
}
$t.serializeTokensObject = Hc;

function bs(n) {
  if (typeof n == "object" && (0, on.isAddressObject)(n)) return n.toString();
  if (Array.isArray(n)) {
    const t = [];
    for (const e of n) t.push(bs(e));
    return t
  } else if (n != null && typeof n == "object") {
    const t = {};
    for (const [e, s] of Object.entries(n)) t[e] = bs(s);
    return t
  } else return n
}

function Vc(n, t) {
  const e = {};
  for (const s of n) e[s.name] = Ne(s, t[s.name]);
  return e
}
$t.parseTokensObject = Vc;

function Gc(n, t) {
  const e = {};
  for (const s of n) Object.prototype.hasOwnProperty.call(t, s.name) && (e[s.name] = Ne(s, !t[s.name]));
  return e
}
$t.parsePartialTokensObject = Gc;

function Ne(n, t) {
  if (n.type.startsWith("map")) {
    const e = n.type.indexOf(","),
      s = n.type.slice(4, e),
      r = n.type.slice(e + 1, -1),
      i = [];
    for (const [o, l] of t) i.push([Ne({
      name: "",
      type: s
    }, o), Ne({
      name: "",
      type: r,
      components: n.components
    }, l)]);
    return i
  } else {
    const e = n.type.endsWith("[]"),
      s = !e && n.type.startsWith("optional"),
      r = e ? n.type.slice(0, -2) : s ? n.type.slice(9, -1) : n.type;
    if (e) {
      const i = {
          name: n.name,
          type: r,
          components: n.components
        },
        o = [];
      for (const l of t) o.push(Ne(i, l));
      return o
    } else if (s) {
      if (t == null) return null;
      {
        const i = {
          name: n.name,
          type: r,
          components: n.components
        };
        return Ne(i, t)
      }
    } else if (r === "tuple") {
      const i = {};
      if (n.components != null)
        for (const o of n.components) i[o.name] = Ne(o, t[o.name]);
      return i
    } else return r === "address" ? new on.Address(t) : t
  }
}
var cn = {};
Object.defineProperty(cn, "__esModule", {
  value: !0
});
cn.Subscriber = void 0;
const rn = Ve,
  Qc = $t;
class Yc {
  constructor(t) {
    this.provider = t, this.subscriptions = new Map, this.scanners = new Map, this.unsubscribe = async () => this._unsubscribe()
  }
  transactions(t) {
    return this._addSubscription("transactionsFound", t, !1)
  }
  trace(t) {
    const e = (0, rn.getUniqueId)();
    return new qt((s, r) => {
      const i = new Xc(this.provider, {
        origin: t,
        onData: s,
        onEnd: o => {
          this.scanners.delete(e), r(o)
        }
      });
      return this.scanners.set(e, i), i.start(), Promise.resolve()
    }, async () => {
      const s = this.scanners.get(e);
      s != null && (this.scanners.delete(e), await s.stop())
    }, rs, !0)
  }
  oldTransactions(t, e) {
    const s = (0, rn.getUniqueId)();
    return new qt((r, i) => {
      const o = new Jc(this.provider, {
        address: t,
        onData: r,
        onEnd: l => {
          this.scanners.delete(s), i(l)
        },
        ...e
      });
      return this.scanners.set(s, o), o.start(), Promise.resolve()
    }, async () => {
      const r = this.scanners.get(s);
      r != null && (this.scanners.delete(s), await r.stop())
    }, rs, !0)
  }
  states(t) {
    return this._addSubscription("contractStateChanged", t, !1)
  }
  async _unsubscribe() {
    const t = [];
    for (const e of this.subscriptions.values())
      for (const [s, r] of Object.entries(e)) delete e[s], r != null && t.push(r.subscription.then(i => i.unsubscribe()).catch(() => {}));
    this.subscriptions.clear();
    for (const e of this.scanners.values()) t.push(e.stop());
    this.scanners.clear(), await Promise.all(t)
  }
  _addSubscription(t, e, s) {
    const r = e.toString(),
      i = l => {
        const d = this.subscriptions.get(r);
        if (d == null) return;
        const p = d[t];
        if (p != null) {
          const f = p.handlers.get(l);
          if (f != null) {
            p.handlers.delete(l);
            const {
              queue: P,
              onEnd: y,
              state: S
            } = f;
            S.finished || (S.finished = !0, P.clear(), P.enqueue(async () => y(S.eof)))
          }
          if (p.handlers.size === 0) {
            const P = p.subscription;
            delete d[t], P.then(y => y.unsubscribe()).catch(console.debug)
          }
        }
        d.contractStateChanged == null && d.transactionsFound == null && this.subscriptions.delete(r)
      },
      o = (0, rn.getUniqueId)();
    return new qt((l, d) => {
      const p = this.subscriptions.get(r);
      let f = p == null ? void 0 : p[t];
      const P = {
          eof: !1,
          finished: !1
        },
        y = {
          onData: l,
          onEnd: d,
          queue: new Ms,
          state: P
        };
      if (f != null) return f.handlers.set(o, y), Promise.resolve();
      const S = new Map;
      S.set(o, y);
      const A = this.provider.subscribe(t, {
        address: e
      }).then(h => (h.on("data", m => {
        for (const {
            onData: B,
            queue: w,
            state: v
          }
          of S.values()) v.eof || v.finished || w.enqueue(async () => {
          await B(m) || (v.eof = !0, i(o))
        })
      }), h.on("unsubscribed", () => {
        for (const m of S.keys()) i(m)
      }), h)).catch(h => {
        console.error(h);
        for (const m of S.keys()) i(m);
        throw h
      });
      return f = {
        subscription: A,
        handlers: S
      }, p == null ? this.subscriptions.set(r, {
        [t]: f
      }) : p[t] = f, A.then(() => {})
    }, () => i(o), rs, s)
  }
}
cn.Subscriber = Yc;
async function rs(n, t) {
  return t(n)
}
class qt {
  constructor(t, e, s, r) {
    this.makeProducer = t, this.stopProducer = e, this.extractor = s, this.isFinite = r, this.fold = this.onlyFinite((i, o, l) => {
      let d = i;
      return new Promise((p, f) => {
        const P = this.makeProducer(y => this.extractor(y, async S => (d = await o(d, S), !0)), y => {
          y ? p(d) : f(new Error("Subscription closed"))
        });
        l != null && (l.subscribed = P)
      })
    }), this.finished = this.onlyFinite(i => new Promise((o, l) => {
      const d = this.makeProducer(p => this.extractor(p, f => !0), p => {
        p ? o(void 0) : l(new Error("Subscription closed"))
      });
      i != null && (i.subscribed = d)
    }))
  }
  async delayed(t) {
    const {
      subscribed: e,
      result: s
    } = t({
      first: () => {
        const r = {},
          i = this.first(r);
        return {
          subscribed: r.subscribed,
          result: i
        }
      },
      on: r => {
        const i = {};
        return this.on(r, i), {
          subscribed: i.subscribed,
          result: void 0
        }
      },
      fold: this.fold != null ? (r, i) => {
        const o = {},
          l = this.fold(r, i, o);
        return {
          subscribed: o.subscribed,
          result: l
        }
      } : void 0,
      finished: this.finished != null ? () => {
        const r = {},
          i = this.finished(r);
        return {
          subscribed: r.subscribed,
          result: i
        }
      } : void 0
    });
    return await e, () => s
  }
  first(t) {
    const e = {
      found: !1
    };
    return new Promise((s, r) => {
      const i = this.makeProducer(o => this.extractor(o, l => (Object.assign(e, {
        found: !0,
        result: l
      }), !1)), o => {
        o ? this.isFinite ? s(e.found ? e.result : void 0) : e.found ? s(e.result) : r(new Error("Unexpected end of stream")) : r(new Error("Subscription closed"))
      });
      t != null && (t.subscribed = i)
    })
  }
  on(t, e) {
    const s = this.makeProducer(r => this.extractor(r, async i => (await t(i), !0)), r => {});
    e != null && (e.subscribed = s)
  }
  merge(t) {
    return new qt((e, s) => {
      const r = {
          stopped: !1,
          counter: 0
        },
        i = o => {
          r.stopped || (++r.counter == 2 || !o) && (r.stopped = !0, s(o))
        };
      return Promise.all([this.makeProducer(e, i), t.makeProducer(e, i)]).then(() => {})
    }, () => {
      this.stopProducer(), t.stopProducer()
    }, this.extractor, this.isFinite && t.isFinite)
  }
  enumerate() {
    const t = {
      index: 0
    };
    return new qt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => s({
      index: t.index++,
      item: r
    })), this.isFinite)
  }
  tap(t) {
    return new qt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => (await t(r), s(r))), this.isFinite)
  }
  filter(t) {
    return new qt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => await t(r) ? s(r) : !0), this.isFinite)
  }
  filterMap(t) {
    return new qt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => {
      const i = await t(r);
      return i !== void 0 ? s(i) : !0
    }), this.isFinite)
  }
  map(t) {
    return new qt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => {
      const i = await t(r);
      return s(i)
    }), this.isFinite)
  }
  flatMap(t) {
    return new qt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => {
      const i = await t(r);
      for (const o of i)
        if (!await s(o)) return !1;
      return !0
    }), this.isFinite)
  }
  skip(t) {
    const e = {
      index: 0
    };
    return new qt(this.makeProducer, this.stopProducer, (s, r) => this.extractor(s, i => e.index >= t ? r(i) : (++e.index, !0)), this.isFinite)
  }
  skipWhile(t) {
    const e = {
      shouldSkip: !0
    };
    return new qt(this.makeProducer, this.stopProducer, (s, r) => this.extractor(s, async i => !e.shouldSkip || !await t(i) ? (e.shouldSkip = !1, r(i)) : !0), this.isFinite)
  }
  take(t) {
    const e = {
      index: 0
    };
    return new qt(this.makeProducer, this.stopProducer, (s, r) => this.extractor(s, i => e.index < t ? (++e.index, r(i) && e.index < t) : !1), !0)
  }
  takeWhile(t) {
    return new qt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => await t(r) ? s(r) : !1), !0)
  }
  takeWhileMap(t) {
    return new qt(this.makeProducer, this.stopProducer, (e, s) => this.extractor(e, async r => {
      const i = await t(r);
      return i !== void 0 ? s(i) : !1
    }), !0)
  }
  onlyFinite(t) {
    if (this.isFinite) return t
  }
}
class Jc {
  constructor(t, e) {
    this.provider = t, this.params = e, this.queue = new Ms, this.isRunning = !1
  }
  start() {
    this.isRunning || this.promise != null || (this.isRunning = !0, this.promise = (async () => {
      const t = this.params,
        e = {
          complete: !1
        };
      for (; this.isRunning && !e.complete;) try {
        const {
          transactions: s,
          continuation: r
        } = await this.provider.getTransactions({
          address: this.params.address,
          continuation: this.continuation
        });
        if (e.complete = !e.complete && s.length == null, !this.isRunning || e.complete) break;
        const i = s.filter(l => (t.fromLt == null || rn.LT_COLLATOR.compare(l.id.lt, t.fromLt) > 0) && (t.fromUtime == null || l.createdAt > t.fromUtime));
        if (i.length == 0) {
          e.complete = !0;
          break
        }
        const o = {
          maxLt: i[0].id.lt,
          minLt: i[i.length - 1].id.lt,
          batchType: "old"
        };
        if (this.queue.enqueue(async () => {
            await this.params.onData({
              address: this.params.address,
              transactions: i,
              info: o
            }) || (e.complete = !0, this.isRunning = !1)
          }), r != null) this.continuation = r;
        else {
          e.complete = !0;
          break
        }
      } catch (s) {
        console.error(s)
      }
      this.queue.enqueue(async () => this.params.onEnd(e.complete)), this.isRunning = !1, this.continuation = void 0
    })())
  }
  async stop() {
    this.isRunning = !1, this.queue.clear(), this.promise != null ? await this.promise : this.params.onEnd(!1)
  }
}
class Xc {
  constructor(t, e) {
    this.provider = t, this.params = e, this.queue = new Ms, this.isRunning = !1, this.semaphore = new rn.Semaphore(10)
  }
  start() {
    if (this.isRunning || this.promise != null) return;
    const t = this.provider;
    this.isRunning = !0, this.promise = (async () => {
      const e = {
          complete: !1
        },
        s = i => {
          const o = {
            stopped: !1
          };
          return {
            promise: (async () => {
              let p = 500;
              for (;;) {
                const f = await this.semaphore.acquire();
                if (o.stopped) {
                  f();
                  return
                }
                const P = await t.rawApi.findTransaction({
                  inMessageHash: i
                }).catch(() => ({
                  transaction: void 0
                })).finally(() => f());
                if (o.stopped) return;
                if (P.transaction != null) {
                  const A = (0, Qc.parseTransaction)(P.transaction);
                  return A.account = A.inMessage.dst, A
                }
                let y;
                const S = new Promise((A, h) => {
                  y = () => A(), o.reject = () => h()
                });
                if (o.timeout = setTimeout(y, p), await S, o.stopped) return;
                o.reject = void 0, p = Math.min(p * 2, 3e3)
              }
            })(),
            reject: () => {
              var p;
              o.stopped = !0, (p = o.reject) === null || p === void 0 || p.call(o), o.timeout != null && clearTimeout(o.timeout)
            }
          }
        },
        r = [this.params.origin];
      try {
        t: for (; this.isRunning;) {
          const i = r.shift();
          if (i == null) {
            e.complete = !0;
            break
          }
          const o = i.outMessages.filter(l => l.dst != null).map(l => {
            const d = l.hash;
            return s(d)
          });
          this.pendingTransactions = o;
          for (const {
              promise: l
            }
            of o) {
            const d = await l;
            if (!this.isRunning || e.complete || d == null) break t;
            this.queue.enqueue(async () => {
              await this.params.onData(d) || (e.complete = !0, this.isRunning = !1, this.rejectPendingTransactions())
            }), r.push(d)
          }
          this.pendingTransactions = void 0
        }
      }
      catch (i) {
        console.error(i)
      } finally {
        this.queue.enqueue(async () => this.params.onEnd(e.complete)), this.isRunning = !1, this.rejectPendingTransactions()
      }
    })()
  }
  async stop() {
    this.isRunning = !1, this.queue.clear(), this.rejectPendingTransactions(), this.promise != null ? await this.promise : this.params.onEnd(!1)
  }
  rejectPendingTransactions() {
    if (this.pendingTransactions != null) {
      for (const t of this.pendingTransactions) t.reject();
      this.pendingTransactions = void 0
    }
    this.semaphore.releaseAll()
  }
}
class Ms {
  constructor() {
    this.queue = [], this.workingOnPromise = !1
  }
  enqueue(t) {
    this.queue.push(t), this._dequeue().catch(() => {})
  }
  clear() {
    this.queue.length = 0
  }
  async _dequeue() {
    if (this.workingOnPromise) return;
    const t = this.queue.shift();
    t && (this.workingOnPromise = !0, t().then(() => {
      this.workingOnPromise = !1, this._dequeue()
    }).catch(() => {
      this.workingOnPromise = !1, this._dequeue()
    }))
  }
}
var Re = {};
Object.defineProperty(Re, "__esModule", {
  value: !0
});
Re.TvmException = Re.Contract = void 0;
const ze = Ve,
  Rt = $t;
class Zc {
  constructor(t, e, s) {
    if (!Array.isArray(e.functions)) throw new Error("Invalid abi. Functions array required");
    if (!Array.isArray(e.events)) throw new Error("Invalid abi. Events array required");
    this._provider = t, this._abi = JSON.stringify(e), this.methodsAbi = e.functions.reduce((r, i) => (i.inputs == null && (i.inputs = []), i.outputs == null && (i.outputs = []), r[i.name] = i, r), {}), this.eventsAbi = e.events.reduce((r, i) => (i.inputs == null && (i.inputs = []), r[i.name] = i, r), {}), this.fieldsAbi = e.fields, this._address = s, this._methods = new Proxy({}, {
      get: (r, i) => {
        const o = this.methodsAbi[i];
        return (l = {}) => new qc(this._provider, o, this._abi, this._address, i, l)
      }
    }), this._fields = new Proxy({}, {
      get: (r, i) => async (o = {}) => {
        await this._provider.ensureInitialized();
        const {
          fields: l,
          state: d
        } = await this._provider.rawApi.getContractFields({
          address: this._address.toString(),
          abi: this._abi,
          cachedState: o == null ? void 0 : o.cachedState,
          allowPartial: (o == null ? void 0 : o.allowPartial) == null ? !1 : o.allowPartial
        });
        if (l == null) throw d == null ? new Error("Account does not exist") : d.isDeployed ? new Error("Invalid account data") : new Error("Account is not deployed");
        const p = (0, Rt.parseTokensObject)(this.fieldsAbi, l);
        if (p == null || !Object.prototype.hasOwnProperty.call(p, i)) throw new Error("Unknown field");
        return p[i]
      }
    })
  }
  get methods() {
    return this._methods
  }
  get fields() {
    return this._fields
  }
  get address() {
    return this._address
  }
  get abi() {
    return this._abi
  }
  async getFullState() {
    return await this._provider.ensureInitialized(), await this._provider.rawApi.getFullContractState({
      address: this.address.toString()
    })
  }
  async getFields(t = {}) {
    await this._provider.ensureInitialized();
    const {
      fields: e,
      state: s
    } = await this._provider.rawApi.getContractFields({
      address: this.address.toString(),
      abi: this._abi,
      cachedState: t.cachedState,
      allowPartial: t.allowPartial == null ? !1 : t.allowPartial
    });
    return {
      fields: e != null ? (0, Rt.parseTokensObject)(this.fieldsAbi, e) : void 0,
      state: s
    }
  }
  transactions(t) {
    return t.transactions(this._address).flatMap(({
      transactions: e
    }) => e)
  }
  events(t) {
    return t.transactions(this._address).flatMap(({
      transactions: e
    }) => e).flatMap(e => this.decodeTransactionEvents({
      transaction: e
    }).then(s => (s.forEach(r => r.transaction = e), s)))
  }
  async waitForEvent(t = {}) {
    const {
      range: e,
      filter: s
    } = t, r = typeof s == "string" ? ({
      event: d
    }) => d === s : s;
    let i = t.subscriber;
    const o = i == null;
    i == null && (i = new this._provider.Subscriber);
    const l = await ((e == null ? void 0 : e.fromLt) != null || (e == null ? void 0 : e.fromUtime) != null ? i.oldTransactions(this._address, e).merge(i.transactions(this._address)) : i.transactions(this.address)).flatMap(d => d.transactions).takeWhile(d => e == null || (e.fromLt == null || ze.LT_COLLATOR.compare(d.id.lt, e.fromLt) > 0) && (e.fromUtime == null || d.createdAt > e.fromUtime) && (e.toLt == null || ze.LT_COLLATOR.compare(d.id.lt, e.toLt) < 0) && (e.toUtime == null || d.createdAt < e.toUtime)).flatMap(d => this.decodeTransactionEvents({
      transaction: d
    }).then(p => (p.forEach(f => f.transaction = d), p))).filterMap(async d => {
      if (r == null || await r(d)) return d
    }).first();
    return o && await i.unsubscribe(), l
  }
  async getPastEvents(t) {
    const {
      range: e,
      filter: s,
      limit: r
    } = t, i = typeof s == "string" ? ({
      event: d
    }) => d === s : s, o = [];
    let l = t == null ? void 0 : t.continuation;
    t: for (;;) {
      const {
        transactions: d,
        continuation: p
      } = await this._provider.getTransactions({
        address: this._address,
        continuation: l
      });
      if (d.length === null) break;
      const f = d.filter(P => ((e == null ? void 0 : e.fromLt) == null || ze.LT_COLLATOR.compare(P.id.lt, e.fromLt) > 0) && ((e == null ? void 0 : e.fromUtime) == null || P.createdAt > e.fromUtime) && ((e == null ? void 0 : e.toLt) == null || ze.LT_COLLATOR.compare(P.id.lt, e.toLt) < 0) && ((e == null ? void 0 : e.toUtime) == null || P.createdAt < e.toUtime));
      if (f.length > 0) {
        const P = await Promise.all(f.map(async y => ({
          tx: y,
          events: await this.decodeTransactionEvents({
            transaction: y
          }).then(S => (S.forEach(A => A.transaction = y), S))
        })));
        for (let {
            tx: y,
            events: S
          }
          of P) {
          i != null && (S = await Promise.all(S.map(async A => await i(A) ? A : void 0)).then(A => A.filter(h => h != null))), l = y.id;
          for (const A of S) {
            if (r != null && o.length >= r) break t;
            o.push(A)
          }
          if (r != null && o.length >= r) break t
        }
      }
      if (l = p, l == null) break
    }
    return {
      events: o,
      continuation: l
    }
  }
  async decodeTransaction(t) {
    await this._provider.ensureInitialized();
    try {
      const e = await this._provider.rawApi.decodeTransaction({
        transaction: (0, Rt.serializeTransaction)(t.transaction),
        abi: this._abi,
        method: t.methods
      });
      if (e == null) return;
      const {
        method: s,
        input: r,
        output: i
      } = e, o = this.methodsAbi[s];
      return {
        method: s,
        input: o.inputs != null ? (0, Rt.parseTokensObject)(o.inputs, r) : {},
        output: o.outputs != null ? (0, Rt.parseTokensObject)(o.outputs, i) : {}
      }
    } catch {
      return
    }
  }
  async decodeTransactionEvents(t) {
    await this._provider.ensureInitialized();
    try {
      const {
        events: e
      } = await this._provider.rawApi.decodeTransactionEvents({
        transaction: (0, Rt.serializeTransaction)(t.transaction),
        abi: this._abi
      }), s = [];
      for (const {
          event: r,
          data: i
        }
        of e) {
        const o = this.eventsAbi[r];
        s.push({
          event: r,
          data: o.inputs != null ? (0, Rt.parseTokensObject)(o.inputs, i) : {}
        })
      }
      return s
    } catch {
      return []
    }
  }
  async decodeInputMessage(t) {
    await this._provider.ensureInitialized();
    try {
      const e = await this._provider.rawApi.decodeInput({
        abi: this._abi,
        body: t.body,
        internal: t.internal,
        method: t.methods
      });
      if (e == null) return;
      const {
        method: s,
        input: r
      } = e, i = this.methodsAbi[s];
      return {
        method: s,
        input: i.inputs != null ? (0, Rt.parseTokensObject)(i.inputs, r) : {}
      }
    } catch {
      return
    }
  }
  async decodeOutputMessage(t) {
    await this._provider.ensureInitialized();
    try {
      const e = await this._provider.rawApi.decodeOutput({
        abi: this._abi,
        body: t.body,
        method: t.methods
      });
      if (e == null) return;
      const {
        method: s,
        output: r
      } = e, i = this.methodsAbi[s];
      return {
        method: s,
        output: i.outputs != null ? (0, Rt.parseTokensObject)(i.outputs, r) : {}
      }
    } catch {
      return
    }
  }
  async decodeEvent(t) {
    await this._provider.ensureInitialized();
    try {
      const e = await this._provider.rawApi.decodeEvent({
        abi: this.abi,
        body: t.body,
        event: t.events
      });
      if (e == null) return;
      const {
        event: s,
        data: r
      } = e, i = this.eventsAbi[s];
      return {
        event: s,
        data: i.inputs != null ? (0, Rt.parseTokensObject)(i.inputs, r) : {}
      }
    } catch {
      return
    }
  }
}
Re.Contract = Zc;
class Dr extends Error {
  constructor(t) {
    super(`TvmException: ${t}`), this.code = t
  }
}
Re.TvmException = Dr;
class qc {
  constructor(t, e, s, r, i, o) {
    this.provider = t, this.functionAbi = e, this.abi = s, this.address = r, this.method = i, this.params = (0, Rt.serializeTokensObject)(o)
  }
  async send(t) {
    await this.provider.ensureInitialized();
    const {
      transaction: e
    } = await this.provider.rawApi.sendMessage({
      sender: t.from.toString(),
      recipient: this.address.toString(),
      amount: t.amount,
      bounce: t.bounce == null ? !0 : t.bounce,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      stateInit: t.stateInit
    });
    return (0, Rt.parseTransaction)(e)
  }
  async sendDelayed(t) {
    await this.provider.ensureInitialized();
    const e = new ze.DelayedTransactions,
      s = await this.provider.subscribe("messageStatusUpdated");
    s.on("data", o => {
      o.address.equals(t.from) && e.fillTransaction(o.hash, o.transaction)
    });
    const {
      message: r
    } = await this.provider.rawApi.sendMessageDelayed({
      sender: t.from.toString(),
      recipient: this.address.toString(),
      amount: t.amount,
      bounce: t.bounce == null ? !0 : t.bounce,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      stateInit: t.stateInit
    }).catch(o => {
      throw s.unsubscribe().catch(console.error), o
    }), i = e.waitTransaction(this.address, r.hash).finally(() => s.unsubscribe().catch(console.error));
    return {
      messageHash: r.hash,
      expireAt: r.expireAt,
      transaction: i
    }
  }
  async sendWithResult(t) {
    await this.provider.ensureInitialized();
    let e = t.subscriber;
    const s = e == null;
    e == null && (e = new this.provider.Subscriber);
    try {
      let r, i;
      const o = new Promise(S => {
          i = A => S(A)
        }),
        l = [];
      e.transactions(this.address).flatMap(S => S.transactions).filter(S => {
        var A;
        return ((A = S.inMessage.src) === null || A === void 0 ? void 0 : A.equals(t.from)) || !1
      }).on(S => {
        r == null ? l.push(S) : r.possibleMessages.findIndex(A => A.hash == S.inMessage.hash) >= 0 && (i == null || i(S))
      });
      const d = await this.send(t),
        p = d.outMessages.filter(S => {
          var A;
          return ((A = S.dst) === null || A === void 0 ? void 0 : A.equals(this.address)) || !1
        });
      r = {
        transaction: d,
        possibleMessages: p
      };
      const f = l.find(S => p.findIndex(A => A.hash == S.inMessage.hash) >= 0);
      f != null && (i == null || i(f));
      const P = await o;
      let y;
      try {
        const S = await this.provider.rawApi.decodeTransaction({
          transaction: (0, Rt.serializeTransaction)(P),
          abi: this.abi,
          method: this.method
        });
        S != null && (y = this.functionAbi.outputs != null ? (0, Rt.parseTokensObject)(this.functionAbi.outputs, S.output) : {})
      } catch (S) {
        console.error(S)
      }
      return {
        parentTransaction: r.transaction,
        childTransaction: P,
        output: y
      }
    } finally {
      s && await e.unsubscribe()
    }
  }
  async estimateFees(t) {
    await this.provider.ensureInitialized();
    const {
      fees: e
    } = await this.provider.rawApi.estimateFees({
      sender: t.from.toString(),
      recipient: this.address.toString(),
      amount: t.amount,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      stateInit: t.stateInit
    });
    return e
  }
  async sendExternal(t) {
    await this.provider.ensureInitialized();
    const e = t.withoutSignature === !0 ? this.provider.rawApi.sendUnsignedExternalMessage : this.provider.rawApi.sendExternalMessage,
      {
        transaction: s,
        output: r
      } = await e({
        publicKey: t.publicKey,
        recipient: this.address.toString(),
        stateInit: t.stateInit,
        payload: {
          abi: this.abi,
          method: this.method,
          params: this.params
        },
        local: t.local,
        executorParams: t.executorParams ? {
          disableSignatureCheck: t.executorParams.disableSignatureCheck,
          overrideBalance: t.executorParams.overrideBalance
        } : void 0
      });
    return {
      transaction: (0, Rt.parseTransaction)(s),
      output: r != null ? (0, Rt.parseTokensObject)(this.functionAbi.outputs, r) : void 0
    }
  }
  async sendExternalDelayed(t) {
    await this.provider.ensureInitialized();
    const e = new ze.DelayedTransactions,
      s = await this.provider.subscribe("messageStatusUpdated");
    s.on("data", o => {
      o.address.equals(this.address) && e.fillTransaction(o.hash, o.transaction)
    });
    const {
      message: r
    } = await this.provider.rawApi.sendExternalMessageDelayed({
      publicKey: t.publicKey,
      recipient: this.address.toString(),
      stateInit: t.stateInit,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      }
    }).catch(o => {
      throw s.unsubscribe().catch(console.error), o
    }), i = e.waitTransaction(this.address, r.hash).finally(() => s.unsubscribe().catch(console.error));
    return {
      messageHash: r.hash,
      expireAt: r.expireAt,
      transaction: i
    }
  }
  async call(t = {}) {
    await this.provider.ensureInitialized();
    const {
      output: e,
      code: s
    } = await this.provider.rawApi.runLocal({
      address: this.address.toString(),
      cachedState: t.cachedState,
      responsible: t.responsible,
      functionCall: {
        abi: this.abi,
        method: this.method,
        params: this.params
      }
    });
    if (e == null || s != 0) throw new Dr(s);
    return (0, Rt.parseTokensObject)(this.functionAbi.outputs, e)
  }
  async executeExternal(t) {
    await this.provider.ensureInitialized();
    const {
      transaction: e,
      newState: s,
      output: r
    } = await this.provider.rawApi.executeLocal({
      address: this.address.toString(),
      cachedState: t.cachedState,
      stateInit: t.stateInit,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      messageHeader: {
        type: "external",
        publicKey: t.publicKey,
        withoutSignature: t.withoutSignature
      },
      executorParams: t.executorParams != null ? {
        disableSignatureCheck: t.executorParams.disableSignatureCheck,
        overrideBalance: t.executorParams.overrideBalance
      } : void 0
    });
    return {
      transaction: (0, Rt.parseTransaction)(e),
      newState: s,
      output: r !== void 0 ? (0, Rt.parseTokensObject)(this.functionAbi.outputs, r) : void 0
    }
  }
  async executeInternal(t) {
    await this.provider.ensureInitialized();
    const {
      transaction: e,
      newState: s,
      output: r
    } = await this.provider.rawApi.executeLocal({
      address: this.address.toString(),
      cachedState: t.cachedState,
      stateInit: t.stateInit,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      messageHeader: {
        type: "internal",
        sender: t.sender.toString(),
        amount: t.amount,
        bounce: t.bounce != null ? t.bounce : !1,
        bounced: t.bounced
      },
      executorParams: t.executorParams != null ? {
        disableSignatureCheck: t.executorParams.disableSignatureCheck,
        overrideBalance: t.executorParams.overrideBalance
      } : void 0
    });
    return {
      transaction: (0, Rt.parseTransaction)(e),
      newState: s,
      output: r !== void 0 ? (0, Rt.parseTokensObject)(this.functionAbi.outputs, r) : void 0
    }
  }
  async encodeInternal() {
    await this.provider.ensureInitialized();
    const {
      boc: t
    } = await this.provider.rawApi.encodeInternalInput({
      abi: this.abi,
      method: this.method,
      params: this.params
    });
    return t
  }
}
var Lr = {};
Object.defineProperty(Lr, "__esModule", {
  value: !0
});
(function(n) {
  var t = rt && rt.__createBinding || (Object.create ? function(v, b, R, j) {
      j === void 0 && (j = R);
      var x = Object.getOwnPropertyDescriptor(b, R);
      (!x || ("get" in x ? !b.__esModule : x.writable || x.configurable)) && (x = {
        enumerable: !0,
        get: function() {
          return b[R]
        }
      }), Object.defineProperty(v, j, x)
    } : function(v, b, R, j) {
      j === void 0 && (j = R), v[j] = b[R]
    }),
    e = rt && rt.__setModuleDefault || (Object.create ? function(v, b) {
      Object.defineProperty(v, "default", {
        enumerable: !0,
        value: b
      })
    } : function(v, b) {
      v.default = b
    }),
    s = rt && rt.__importStar || function(v) {
      if (v && v.__esModule) return v;
      var b = {};
      if (v != null)
        for (var R in v) R !== "default" && Object.prototype.hasOwnProperty.call(v, R) && t(b, v, R);
      return e(b, v), b
    },
    r = rt && rt.__exportStar || function(v, b) {
      for (var R in v) R !== "default" && !Object.prototype.hasOwnProperty.call(b, R) && t(b, v, R)
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.ProviderNotInitializedException = n.ProviderNotFoundException = n.ProviderRpcClient = n.hasEverscaleProvider = n.LT_COLLATOR = n.isAddressObject = n.mergeTransactions = n.MessageExpiredException = n.AddressLiteral = n.Address = n.Subscriber = void 0;
  const i = $t,
    o = Ve,
    l = s(cn),
    d = s(Re);
  r(Lr, n), r($t, n), r(Re, n);
  var p = cn;
  Object.defineProperty(n, "Subscriber", {
    enumerable: !0,
    get: function() {
      return p.Subscriber
    }
  });
  var f = Ve;
  Object.defineProperty(n, "Address", {
    enumerable: !0,
    get: function() {
      return f.Address
    }
  }), Object.defineProperty(n, "AddressLiteral", {
    enumerable: !0,
    get: function() {
      return f.AddressLiteral
    }
  }), Object.defineProperty(n, "MessageExpiredException", {
    enumerable: !0,
    get: function() {
      return f.MessageExpiredException
    }
  }), Object.defineProperty(n, "mergeTransactions", {
    enumerable: !0,
    get: function() {
      return f.mergeTransactions
    }
  }), Object.defineProperty(n, "isAddressObject", {
    enumerable: !0,
    get: function() {
      return f.isAddressObject
    }
  }), Object.defineProperty(n, "LT_COLLATOR", {
    enumerable: !0,
    get: function() {
      return f.LT_COLLATOR
    }
  });
  const P = typeof window < "u" && typeof window.document < "u";
  let y;
  !P || document.readyState === "complete" ? y = Promise.resolve() : y = new Promise(v => {
    window.addEventListener("load", () => {
      v()
    })
  });
  const S = () => P ? window.__ever || window.ton : void 0;
  async function A() {
    return P ? (await y, window.__hasEverscaleProvider === !0 || window.hasTonProvider === !0) : !1
  }
  n.hasEverscaleProvider = A;
  class h {
    constructor(b = {}) {
      this._subscriptions = {
        connected: new Map,
        disconnected: new Map,
        transactionsFound: new Map,
        contractStateChanged: new Map,
        messageStatusUpdated: new Map,
        networkChanged: new Map,
        permissionsChanged: new Map,
        loggedOut: new Map
      }, this._contractSubscriptions = new Map, this._properties = b;
      const R = this;
      class j extends d.Contract {
        constructor(_, g) {
          super(R, _, g)
        }
      }
      this.Contract = j;
      class x extends l.Subscriber {
        constructor() {
          super(R)
        }
      }
      this.Subscriber = x, this._api = new Proxy({}, {
        get: (u, _) => g => {
          if (this._provider != null) return this._provider.request({
            method: _,
            params: g
          });
          throw new B
        }
      }), b.forceUseFallback === !0 ? this._initializationPromise = b.fallback != null ? b.fallback().then(u => {
        this._provider = u
      }) : Promise.resolve() : (this._provider = S(), this._provider != null ? this._initializationPromise = Promise.resolve() : this._initializationPromise = A().then(u => new Promise(_ => {
        if (!u) return _();
        if (this._provider = S(), this._provider != null) _();
        else {
          const g = window.__hasEverscaleProvider === !0 ? "ever#initialized" : "ton#initialized";
          window.addEventListener(g, E => {
            this._provider = S(), _()
          })
        }
      })).then(async () => {
        this._provider == null && b.fallback != null && (this._provider = await b.fallback())
      })), this._initializationPromise.then(() => {
        this._provider != null && this._registerEventHandlers(this._provider)
      })
    }
    async hasProvider() {
      return this._properties.fallback != null ? !0 : A()
    }
    async ensureInitialized() {
      if (await this._initializationPromise, this._provider == null) throw new m
    }
    get isInitialized() {
      return this._provider != null
    }
    get raw() {
      if (this._provider != null) return this._provider;
      throw new B
    }
    get rawApi() {
      return this._api
    }
    createContract(b, R) {
      return new this.Contract(b, R)
    }
    createSubscriber() {
      return new this.Subscriber
    }
    async requestPermissions(b) {
      await this.ensureInitialized();
      const R = await this._api.requestPermissions({
        permissions: b.permissions
      });
      return (0, i.parsePermissions)(R)
    }
    async changeAccount() {
      await this.ensureInitialized(), await this._api.changeAccount()
    }
    async disconnect() {
      await this.ensureInitialized(), await this._api.disconnect()
    }
    async subscribe(b, R) {
      class j {
        constructor(g, E) {
          this._subscribe = g, this._unsubscribe = E, this._listeners = {
            data: [],
            subscribed: [],
            unsubscribed: []
          }, this._subscribed = !1, this.subscribe = async () => {
            if (!this._subscribed) {
              this._subscribed = !0, await this._subscribe(this);
              for (const T of this._listeners.subscribed) T()
            }
          }, this.unsubscribe = async () => {
            if (this._subscribed) {
              this._subscribed = !1, await this._unsubscribe();
              for (const T of this._listeners.unsubscribed) T()
            }
          }
        }
        on(g, E) {
          return this._listeners[g].push(E), this
        }
        notify(g) {
          for (const E of this._listeners.data) E(g)
        }
      }
      const x = this._subscriptions[b],
        u = (0, o.getUniqueId)();
      switch (b) {
        case "connected":
        case "disconnected":
        case "messageStatusUpdated":
        case "networkChanged":
        case "permissionsChanged":
        case "loggedOut": {
          const _ = new j(async g => {
            x.has(u) || x.set(u, E => {
              g.notify(E)
            })
          }, async () => {
            x.delete(u)
          });
          return await _.subscribe(), _
        }
        case "transactionsFound":
        case "contractStateChanged": {
          if (R == null) throw new Error("Address must be specified for the subscription");
          await this.ensureInitialized();
          const _ = R.address.toString(),
            g = new j(async E => {
              if (x.has(u)) return;
              x.set(u, M => {
                M.address.toString() === _ && E.notify(M)
              });
              let T = this._contractSubscriptions.get(_);
              T == null && (T = new Map, this._contractSubscriptions.set(_, T));
              const O = {
                state: b === "contractStateChanged",
                transactions: b === "transactionsFound"
              };
              T.set(u, O);
              const {
                total: F,
                withoutExcluded: k
              } = w(T.values(), O);
              try {
                (F.transactions !== k.transactions || F.state !== k.state) && await this.rawApi.subscribe({
                  address: _,
                  subscriptions: F
                })
              } catch (M) {
                throw x.delete(u), T.delete(u), M
              }
            }, async () => {
              x.delete(u);
              const E = this._contractSubscriptions.get(_);
              if (E == null) return;
              const T = E.get(u),
                {
                  total: O,
                  withoutExcluded: F
                } = w(E.values(), T);
              E.delete(u), !F.transactions && !F.state ? await this.rawApi.unsubscribe({
                address: _
              }) : (O.transactions !== F.transactions || O.state !== F.state) && await this.rawApi.subscribe({
                address: _,
                subscriptions: F
              })
            });
          return await g.subscribe(), g
        }
        default:
          throw new Error(`Unknown event ${b}`)
      }
    }
    async getProviderState() {
      await this.ensureInitialized();
      const b = await this._api.getProviderState();
      return {
        ...b,
        permissions: (0, i.parsePermissions)(b.permissions)
      }
    }
    async getBalance(b) {
      const {
        state: R
      } = await this.getFullContractState({
        address: b
      });
      return R == null ? "0" : R == null ? void 0 : R.balance
    }
    async getFullContractState(b) {
      return await this.ensureInitialized(), await this._api.getFullContractState({
        address: b.address.toString()
      })
    }
    async computeStorageFee(b) {
      return await this.ensureInitialized(), await this._api.computeStorageFee({
        state: {
          boc: b.state.boc,
          balance: b.state.balance,
          genTimings: {
            ...b.state.genTimings
          },
          lastTransactionId: b.state.lastTransactionId != null ? {
            ...b.state.lastTransactionId
          } : void 0,
          isDeployed: b.state.isDeployed,
          codeHash: b.state.codeHash
        },
        masterchain: b.masterchain,
        timestamp: b.timestamp
      })
    }
    async getAccountsByCodeHash(b) {
      await this.ensureInitialized();
      const {
        accounts: R,
        continuation: j
      } = await this._api.getAccountsByCodeHash({
        ...b
      });
      return {
        accounts: R.map(x => new o.Address(x)),
        continuation: j
      }
    }
    async getTransactions(b) {
      await this.ensureInitialized();
      const {
        transactions: R,
        continuation: j,
        info: x
      } = await this._api.getTransactions({
        ...b,
        address: b.address.toString()
      });
      return {
        transactions: R.map(i.parseTransaction),
        continuation: j,
        info: x
      }
    }
    async getTransaction(b) {
      await this.ensureInitialized();
      const {
        transaction: R
      } = await this._api.getTransaction({
        ...b
      });
      return {
        transaction: R ? (0, i.parseTransaction)(R) : void 0
      }
    }
    async getExpectedAddress(b, R) {
      const {
        address: j
      } = await this.getStateInit(b, R);
      return j
    }
    async getStateInit(b, R) {
      await this.ensureInitialized();
      const {
        address: j,
        stateInit: x,
        hash: u
      } = await this._api.getExpectedAddress({
        abi: JSON.stringify(b),
        ...R,
        initParams: (0, i.serializeTokensObject)(R.initParams)
      });
      return {
        address: new o.Address(j),
        stateInit: x,
        hash: u
      }
    }
    async unpackInitData(b, R) {
      await this.ensureInitialized();
      const {
        publicKey: j,
        initParams: x
      } = await this._api.unpackInitData({
        abi: JSON.stringify(b),
        data: R
      });
      return {
        publicKey: j,
        initParams: (0, i.parsePartialTokensObject)(b.data, x)
      }
    }
    async getBocHash(b) {
      return await this.ensureInitialized(), await this._api.getBocHash({
        boc: b
      }).then(({
        hash: R
      }) => R)
    }
    async packIntoCell(b) {
      return await this.ensureInitialized(), await this._api.packIntoCell({
        abiVersion: b.abiVersion,
        structure: b.structure,
        data: (0, i.serializeTokensObject)(b.data)
      })
    }
    async unpackFromCell(b) {
      await this.ensureInitialized();
      const {
        data: R
      } = await this._api.unpackFromCell({
        ...b,
        structure: b.structure
      });
      return {
        data: (0, i.parseTokensObject)(b.structure, R)
      }
    }
    async extractPublicKey(b) {
      await this.ensureInitialized();
      const {
        publicKey: R
      } = await this._api.extractPublicKey({
        boc: b
      });
      return R
    }
    async codeToTvc(b) {
      await this.ensureInitialized();
      const {
        tvc: R
      } = await this._api.codeToTvc({
        code: b
      });
      return R
    }
    async mergeTvc(b) {
      return await this.ensureInitialized(), await this._api.mergeTvc(b)
    }
    async splitTvc(b) {
      return await this.ensureInitialized(), await this._api.splitTvc({
        tvc: b
      })
    }
    async setCodeSalt(b) {
      let R;
      if (typeof b.salt == "string") await this.ensureInitialized(), R = b.salt;
      else {
        const {
          boc: j
        } = await this.packIntoCell(b.salt);
        R = j
      }
      return await this._api.setCodeSalt({
        code: b.code,
        salt: R
      })
    }
    async getCodeSalt(b) {
      await this.ensureInitialized();
      const {
        salt: R
      } = await this.rawApi.getCodeSalt({
        code: b.code
      });
      return R
    }
    async addAsset(b) {
      await this.ensureInitialized();
      let R;
      switch (b.type) {
        case "tip3_token": {
          R = {
            rootContract: b.params.rootContract.toString()
          };
          break
        }
        default:
          throw new Error("Unknown asset type")
      }
      return await this._api.addAsset({
        account: b.account.toString(),
        type: b.type,
        params: R
      })
    }
    async verifySignature(b) {
      return await this.ensureInitialized(), await this._api.verifySignature(b)
    }
    async signData(b) {
      return await this.ensureInitialized(), await this._api.signData(b)
    }
    async signDataRaw(b) {
      return await this.ensureInitialized(), await this._api.signDataRaw(b)
    }
    async encryptData(b) {
      await this.ensureInitialized();
      const {
        encryptedData: R
      } = await this._api.encryptData(b);
      return R
    }
    async decryptData(b) {
      await this.ensureInitialized();
      const {
        data: R
      } = await this._api.decryptData({
        encryptedData: b
      });
      return R
    }
    async sendMessage(b) {
      await this.ensureInitialized();
      const {
        transaction: R
      } = await this._api.sendMessage({
        sender: b.sender.toString(),
        recipient: b.recipient.toString(),
        amount: b.amount,
        bounce: b.bounce,
        payload: b.payload ? {
          abi: b.payload.abi,
          method: b.payload.method,
          params: (0, i.serializeTokensObject)(b.payload.params)
        } : void 0,
        stateInit: b.stateInit
      });
      return {
        transaction: (0, i.parseTransaction)(R)
      }
    }
    async sendMessageDelayed(b) {
      await this.ensureInitialized();
      const R = new o.DelayedTransactions,
        j = await this.subscribe("messageStatusUpdated");
      j.on("data", _ => {
        _.address.equals(b.sender) && R.fillTransaction(_.hash, _.transaction)
      });
      const {
        message: x
      } = await this._api.sendMessageDelayed({
        sender: b.sender.toString(),
        recipient: b.recipient.toString(),
        amount: b.amount,
        bounce: b.bounce,
        payload: b.payload ? {
          abi: b.payload.abi,
          method: b.payload.method,
          params: (0, i.serializeTokensObject)(b.payload.params)
        } : void 0,
        stateInit: b.stateInit
      }).catch(_ => {
        throw j.unsubscribe().catch(console.error), _
      }), u = R.waitTransaction(b.sender, x.hash).finally(() => j.unsubscribe().catch(console.error));
      return {
        messageHash: x.hash,
        expireAt: x.expireAt,
        transaction: u
      }
    }
    async addNetwork(b) {
      return await this.ensureInitialized(), await this._api.addNetwork(b)
    }
    async changeNetwork(b) {
      return await this.ensureInitialized(), await this._api.changeNetwork(b)
    }
    _registerEventHandlers(b) {
      const R = {
        connected: j => j,
        disconnected: j => j,
        transactionsFound: j => ({
          address: new o.Address(j.address),
          transactions: j.transactions.map(i.parseTransaction),
          info: j.info
        }),
        contractStateChanged: j => ({
          address: new o.Address(j.address),
          state: j.state
        }),
        messageStatusUpdated: j => ({
          address: new o.Address(j.address),
          hash: j.hash,
          transaction: j.transaction != null ? (0, i.parseTransaction)(j.transaction) : void 0
        }),
        networkChanged: j => j,
        permissionsChanged: j => ({
          permissions: (0, i.parsePermissions)(j.permissions)
        }),
        loggedOut: j => j
      };
      for (const [j, x] of Object.entries(R)) b.addListener(j, u => {
        const _ = this._subscriptions[j],
          g = x(u);
        for (const E of _.values()) E(g)
      })
    }
  }
  n.ProviderRpcClient = h;
  class m extends Error {
    constructor() {
      super("Everscale provider was not found")
    }
  }
  n.ProviderNotFoundException = m;
  class B extends Error {
    constructor() {
      super("Everscale provider was not initialized yet")
    }
  }
  n.ProviderNotInitializedException = B;

  function w(v, b) {
    const R = {
        state: !1,
        transactions: !1
      },
      j = Object.assign({}, R);
    for (const x of v) {
      if (j.transactions && j.state) break;
      R.state || (R.state = x.state), R.transactions || (R.transactions = x.transactions), x !== b && (j.state || (j.state = x.state), j.transactions || (j.transactions = x.transactions))
    }
    return {
      total: R,
      withoutExcluded: j
    }
  }
})(Ce);
var ve = {};
Object.defineProperty(ve, "__esModule", {
  value: !0
});
ve.AirdropAbi = ve.AirdropFactoryAbiV2 = ve.AirdropFactoryAbiV1 = void 0;
ve.AirdropFactoryAbiV1 = {
  "ABI version": 2,
  version: "2.3",
  header: ["pubkey", "time", "expire"],
  functions: [{
    name: "constructor",
    inputs: [{
      name: "_initCodeAirdrop",
      type: "cell"
    }, {
      name: "_initManager",
      type: "address"
    }, {
      name: "_initSignaturePubkey",
      type: "uint256"
    }, {
      name: "_initClaimMinGas",
      type: "uint128"
    }, {
      name: "_initJettonMinter",
      type: "address"
    }],
    outputs: []
  }, {
    name: "takeWalletAddress",
    id: "0xD1735400",
    inputs: [{
      name: "value0",
      type: "uint64"
    }, {
      name: "_wallet",
      type: "address"
    }, {
      name: "value2",
      type: "optional(cell)"
    }],
    outputs: []
  }, {
    name: "getSuccessClaimsCount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getWithdrawnFeesCount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getTotalTokenAmount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getClaimedTokenAmount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "triggerEnable",
    inputs: [],
    outputs: []
  }, {
    name: "increaseTotalTokenAmount",
    inputs: [{
      name: "_depositAmount",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "decreaseTotalTokenAmount",
    inputs: [{
      name: "_withdrawnAmount",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "setClaimMinGas",
    inputs: [{
      name: "_minGas",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "transferOwnership",
    inputs: [{
      name: "_newOwner",
      type: "address"
    }],
    outputs: []
  }, {
    name: "expectedAirdropAddress",
    inputs: [{
      name: "answerId",
      type: "uint32"
    }, {
      name: "_data",
      type: "cell"
    }],
    outputs: [{
      name: "value0",
      type: "address"
    }]
  }, {
    name: "onAirdropCreated",
    inputs: [{
      name: "_airdropNonce",
      type: "uint64"
    }, {
      name: "_data",
      type: "cell"
    }, {
      name: "_signature",
      type: "bytes"
    }],
    outputs: []
  }, {
    name: "withdraw",
    inputs: [{
      name: "_recipient",
      type: "address"
    }, {
      name: "_amount",
      type: "varuint16"
    }],
    outputs: []
  }, {
    name: "withdrawFees",
    inputs: [{
      name: "_recipient",
      type: "address"
    }],
    outputs: []
  }, {
    name: "upgrade",
    inputs: [{
      name: "_code",
      type: "cell"
    }, {
      name: "_version",
      type: "optional(uint32)"
    }, {
      name: "_remainingGasTo",
      type: "optional(address)"
    }],
    outputs: []
  }, {
    name: "getVersion",
    inputs: [{
      name: "answerId",
      type: "uint32"
    }],
    outputs: [{
      name: "value0",
      type: "uint32"
    }]
  }],
  data: [{
    key: 1,
    name: "_nonce",
    type: "uint256"
  }],
  events: [{
    name: "EnableChanged",
    inputs: [{
      name: "current",
      type: "bool"
    }],
    outputs: []
  }, {
    name: "AirdropClaimed",
    inputs: [{
      name: "recipient",
      type: "address"
    }, {
      name: "reward",
      type: "uint128"
    }, {
      name: "deployment",
      type: "address"
    }, {
      name: "claimId",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "VersionChanged",
    inputs: [{
      name: "current",
      type: "uint32"
    }, {
      name: "previous",
      type: "uint32"
    }],
    outputs: []
  }],
  fields: [{
    name: "_pubkey",
    type: "uint256"
  }, {
    name: "_timestamp",
    type: "uint64"
  }, {
    name: "_constructorFlag",
    type: "bool"
  }, {
    name: "_currentVersion",
    type: "uint32"
  }, {
    name: "_nonce",
    type: "uint256"
  }, {
    name: "_codeAirdrop",
    type: "cell"
  }, {
    name: "_manager",
    type: "address"
  }, {
    name: "_signaturePubkey",
    type: "uint256"
  }, {
    name: "_claimMinGas",
    type: "uint128"
  }, {
    name: "_jettonMinter",
    type: "address"
  }, {
    name: "_jettonWallet",
    type: "address"
  }, {
    name: "_enable",
    type: "bool"
  }, {
    name: "_successfulClaimsCount",
    type: "uint128"
  }, {
    name: "_withdrawnFeesCount",
    type: "uint128"
  }, {
    name: "_totalTokenAmount",
    type: "uint128"
  }, {
    name: "_claimedTokenAmount",
    type: "uint128"
  }]
};
ve.AirdropFactoryAbiV2 = {
  "ABI version": 2,
  version: "2.3",
  header: ["pubkey", "time", "expire"],
  functions: [{
    name: "constructor",
    inputs: [{
      name: "_initCodeAirdrop",
      type: "cell"
    }, {
      name: "_initManager",
      type: "address"
    }, {
      name: "_initSignaturePubkey",
      type: "uint256"
    }, {
      name: "_initClaimMinGas",
      type: "uint128"
    }, {
      name: "_initJettonMinter",
      type: "address"
    }, {
      name: "_initWithdrawRecipient",
      type: "address"
    }, {
      name: "_initFixedClaimFee",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "takeWalletAddress",
    id: "0xD1735400",
    inputs: [{
      name: "value0",
      type: "uint64"
    }, {
      name: "_wallet",
      type: "address"
    }, {
      name: "value2",
      type: "optional(cell)"
    }],
    outputs: []
  }, {
    name: "getSuccessClaimsCount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getWithdrawnFeesCount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getTotalTokenAmount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getClaimedTokenAmount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getFixedClaimFee",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getClaimMinGas",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getAirdropCode",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "cell"
    }]
  }, {
    name: "triggerEnable",
    inputs: [],
    outputs: []
  }, {
    name: "increaseTotalTokenAmount",
    inputs: [{
      name: "_depositAmount",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "decreaseTotalTokenAmount",
    inputs: [{
      name: "_withdrawnAmount",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "setClaimMinGas",
    inputs: [{
      name: "_minGas",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "transferOwnership",
    inputs: [{
      name: "_newOwner",
      type: "address"
    }],
    outputs: []
  }, {
    name: "expectedAirdropAddress",
    inputs: [{
      name: "answerId",
      type: "uint32"
    }, {
      name: "_data",
      type: "cell"
    }],
    outputs: [{
      name: "value0",
      type: "address"
    }]
  }, {
    name: "onAirdropCreated",
    inputs: [{
      name: "_airdropNonce",
      type: "uint64"
    }, {
      name: "_data",
      type: "cell"
    }, {
      name: "_signature",
      type: "bytes"
    }],
    outputs: []
  }, {
    name: "withdraw",
    inputs: [{
      name: "_remainingGasTo",
      type: "address"
    }, {
      name: "_amount",
      type: "varuint16"
    }],
    outputs: []
  }, {
    name: "withdrawFees",
    inputs: [{
      name: "_recipient",
      type: "address"
    }],
    outputs: []
  }, {
    name: "upgrade",
    inputs: [{
      name: "_code",
      type: "cell"
    }, {
      name: "_version",
      type: "optional(uint32)"
    }, {
      name: "_remainingGasTo",
      type: "optional(address)"
    }],
    outputs: []
  }, {
    name: "getVersion",
    inputs: [{
      name: "answerId",
      type: "uint32"
    }],
    outputs: [{
      name: "value0",
      type: "uint32"
    }]
  }],
  data: [{
    key: 1,
    name: "_nonce",
    type: "uint256"
  }],
  events: [{
    name: "EnableChanged",
    inputs: [{
      name: "current",
      type: "bool"
    }],
    outputs: []
  }, {
    name: "AirdropClaimed",
    inputs: [{
      name: "recipient",
      type: "address"
    }, {
      name: "reward",
      type: "uint128"
    }, {
      name: "deployment",
      type: "address"
    }, {
      name: "claimId",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "VersionChanged",
    inputs: [{
      name: "current",
      type: "uint32"
    }, {
      name: "previous",
      type: "uint32"
    }],
    outputs: []
  }],
  fields: [{
    name: "_pubkey",
    type: "uint256"
  }, {
    name: "_timestamp",
    type: "uint64"
  }, {
    name: "_constructorFlag",
    type: "bool"
  }, {
    name: "_currentVersion",
    type: "uint32"
  }, {
    name: "_nonce",
    type: "uint256"
  }, {
    name: "_codeAirdrop",
    type: "cell"
  }, {
    name: "_manager",
    type: "address"
  }, {
    name: "_signaturePubkey",
    type: "uint256"
  }, {
    name: "_claimMinGas",
    type: "uint128"
  }, {
    name: "_withdrawRecipient",
    type: "address"
  }, {
    name: "_fixedClaimFee",
    type: "uint128"
  }, {
    name: "_jettonMinter",
    type: "address"
  }, {
    name: "_jettonWallet",
    type: "address"
  }, {
    name: "_enable",
    type: "bool"
  }, {
    name: "_successfulClaimsCount",
    type: "uint128"
  }, {
    name: "_withdrawnFeesCount",
    type: "uint128"
  }, {
    name: "_totalTokenAmount",
    type: "uint128"
  }, {
    name: "_claimedTokenAmount",
    type: "uint128"
  }]
};
ve.AirdropAbi = {
  "ABI version": 2,
  version: "2.3",
  header: ["pubkey", "time", "expire"],
  functions: [{
    name: "constructor",
    inputs: [{
      name: "_signature",
      type: "bytes"
    }],
    outputs: []
  }],
  data: [{
    key: 1,
    name: "_nonce",
    type: "uint64"
  }, {
    key: 2,
    name: "_data",
    type: "cell"
  }],
  events: [],
  fields: [{
    name: "_pubkey",
    type: "uint256"
  }, {
    name: "_timestamp",
    type: "uint64"
  }, {
    name: "_constructorFlag",
    type: "bool"
  }, {
    name: "_nonce",
    type: "uint64"
  }, {
    name: "_data",
    type: "cell"
  }]
};
var Fn = {};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
var Rr = Fn.AirdropStatus = void 0,
  Bs;
(function(n) {
  n.NoClaimId = "NoClaimId", n.NoUser = "NoUser", n.HasClaimed = "HasClaimed", n.CanClaim = "CanClaim", n.InQueue = "InQueue", n.NoReward = "NoReward", n.NoAirdrop = "NoAirdrop", n.Loading = "Loading"
})(Bs || (Rr = Fn.AirdropStatus = Bs = {}));
var ms = {};
(function(n) {
  var t = rt && rt.__awaiter || function(f, P, y, S) {
      function A(h) {
        return h instanceof y ? h : new y(function(m) {
          m(h)
        })
      }
      return new(y || (y = Promise))(function(h, m) {
        function B(b) {
          try {
            v(S.next(b))
          } catch (R) {
            m(R)
          }
        }

        function w(b) {
          try {
            v(S.throw(b))
          } catch (R) {
            m(R)
          }
        }

        function v(b) {
          b.done ? h(b.value) : A(b.value).then(B, w)
        }
        v((S = S.apply(f, P || [])).next())
      })
    },
    e = rt && rt.__generator || function(f, P) {
      var y = {
          label: 0,
          sent: function() {
            if (h[0] & 1) throw h[1];
            return h[1]
          },
          trys: [],
          ops: []
        },
        S, A, h, m = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
      return m.next = B(0), m.throw = B(1), m.return = B(2), typeof Symbol == "function" && (m[Symbol.iterator] = function() {
        return this
      }), m;

      function B(v) {
        return function(b) {
          return w([v, b])
        }
      }

      function w(v) {
        if (S) throw new TypeError("Generator is already executing.");
        for (; m && (m = 0, v[0] && (y = 0)), y;) try {
          if (S = 1, A && (h = v[0] & 2 ? A.return : v[0] ? A.throw || ((h = A.return) && h.call(A), 0) : A.next) && !(h = h.call(A, v[1])).done) return h;
          switch (A = 0, h && (v = [v[0] & 2, h.value]), v[0]) {
            case 0:
            case 1:
              h = v;
              break;
            case 4:
              return y.label++, {
                value: v[1],
                done: !1
              };
            case 5:
              y.label++, A = v[1], v = [0];
              continue;
            case 7:
              v = y.ops.pop(), y.trys.pop();
              continue;
            default:
              if (h = y.trys, !(h = h.length > 0 && h[h.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                y = 0;
                continue
              }
              if (v[0] === 3 && (!h || v[1] > h[0] && v[1] < h[3])) {
                y.label = v[1];
                break
              }
              if (v[0] === 6 && y.label < h[1]) {
                y.label = h[1], h = v;
                break
              }
              if (h && y.label < h[2]) {
                y.label = h[2], y.ops.push(v);
                break
              }
              h[2] && y.ops.pop(), y.trys.pop();
              continue
          }
          v = P.call(f, y)
        } catch (b) {
          v = [6, b], A = 0
        } finally {
          S = h = 0
        }
        if (v[0] & 5) throw v[1];
        return {
          value: v[0] ? v[1] : void 0,
          done: !0
        }
      }
    },
    s = rt && rt.__spreadArray || function(f, P, y) {
      if (y || arguments.length === 2)
        for (var S = 0, A = P.length, h; S < A; S++)(h || !(S in P)) && (h || (h = Array.prototype.slice.call(P, 0, S)), h[S] = P[S]);
      return f.concat(h || Array.prototype.slice.call(P))
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.buildTransaction = n.getCodeAirdropAndAmount = n.checkQueue = void 0;
  var r = Pn,
    i = Ce,
    o = ve,
    l = function(f, P, y) {
      return t(void 0, void 0, void 0, function() {
        var S, A;
        return e(this, function(h) {
          switch (h.label) {
            case 0:
              return [4, fetch("".concat(f, "/v2/").concat(P, "/").concat(y, "/claim_data"))];
            case 1:
              return S = h.sent(), [4, S.json()];
            case 2:
              return A = h.sent(), [2, A]
          }
        })
      })
    };
  n.checkQueue = l;
  var d = function(f, P) {
    for (var y = [], S = 2; S < arguments.length; S++) y[S - 2] = arguments[S];
    return t(void 0, s([f, P], y, !0), void 0, function(A, h, m) {
      var B, v, b, R, w, v, b, R;
      return m === void 0 && (m = "10000000"), e(this, function(j) {
        switch (j.label) {
          case 0:
            B = r.Address.parseFriendly(A).address.toRawString(), j.label = 1;
          case 1:
            return j.trys.push([1, 4, , 7]), v = new h.Contract(o.AirdropFactoryAbiV1, new i.Address(B)), [4, v.fields._codeAirdrop()];
          case 2:
            return b = j.sent(), [4, v.fields._claimMinGas()];
          case 3:
            return R = j.sent(), [2, {
              codeAirdrop: b,
              amount: (parseInt(m, 10) + parseInt(R, 10)).toString()
            }];
          case 4:
            return w = j.sent(), console.warn(w), v = new h.Contract(o.AirdropFactoryAbiV2, new i.Address(B)), [4, v.methods.getAirdropCode().call()];
          case 5:
            return b = j.sent().value0, [4, v.methods.getClaimMinGas().call()];
          case 6:
            return R = j.sent().value0, [2, {
              codeAirdrop: b,
              amount: (parseInt(m, 10) + parseInt(R, 10)).toString()
            }];
          case 7:
            return [2]
        }
      })
    })
  };
  n.getCodeAirdropAndAmount = d;
  var p = function(f, P, y) {
    for (var S = [], A = 3; A < arguments.length; A++) S[A - 3] = arguments[A];
    return t(void 0, s([f, P, y], S, !0), void 0, function(h, m, B, w) {
      var v, b, R, j, x, u, _, g;
      return w === void 0 && (w = "10000000"), e(this, function(E) {
        switch (E.label) {
          case 0:
            return [4, m.packIntoCell({
              abiVersion: "2.3",
              structure: [{
                type: "uint32",
                name: "functionId"
              }, {
                type: "bytes",
                name: "_signature"
              }],
              data: {
                functionId: "0x0bda4e15",
                _signature: h.signature
              }
            })];
          case 1:
            return v = E.sent(), [4, (0, n.getCodeAirdropAndAmount)(h.factory, m, w)];
          case 2:
            return b = E.sent(), R = b.amount, j = b.codeAirdrop, [4, m.mergeTvc({
              code: j,
              data: "te6ccgEBAgEAKAABAcABAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg"
            })];
          case 3:
            return x = E.sent(), [4, m.getStateInit(o.AirdropAbi, {
              workchain: 0,
              initParams: {
                _data: h.data,
                _nonce: h.nonce
              },
              tvc: x.tvc
            })];
          case 4:
            return u = E.sent(), _ = u.stateInit, g = u.address, [2, {
              messages: [{
                amount: R,
                address: r.Address.parse(g.toString()).toString({
                  bounceable: !0
                }),
                payload: v.boc,
                stateInit: _
              }],
              validUntil: Math.ceil((B.time + 6e5) / 1e3)
            }]
        }
      })
    })
  };
  n.buildTransaction = p
})(ms);
(function(n) {
  var t = rt && rt.__assign || function() {
      return t = Object.assign || function(A) {
        for (var h, m = 1, B = arguments.length; m < B; m++) {
          h = arguments[m];
          for (var w in h) Object.prototype.hasOwnProperty.call(h, w) && (A[w] = h[w])
        }
        return A
      }, t.apply(this, arguments)
    },
    e = rt && rt.__createBinding || (Object.create ? function(A, h, m, B) {
      B === void 0 && (B = m);
      var w = Object.getOwnPropertyDescriptor(h, m);
      (!w || ("get" in w ? !h.__esModule : w.writable || w.configurable)) && (w = {
        enumerable: !0,
        get: function() {
          return h[m]
        }
      }), Object.defineProperty(A, B, w)
    } : function(A, h, m, B) {
      B === void 0 && (B = m), A[B] = h[m]
    }),
    s = rt && rt.__exportStar || function(A, h) {
      for (var m in A) m !== "default" && !Object.prototype.hasOwnProperty.call(h, m) && e(h, A, m)
    },
    r = rt && rt.__awaiter || function(A, h, m, B) {
      function w(v) {
        return v instanceof m ? v : new m(function(b) {
          b(v)
        })
      }
      return new(m || (m = Promise))(function(v, b) {
        function R(u) {
          try {
            x(B.next(u))
          } catch (_) {
            b(_)
          }
        }

        function j(u) {
          try {
            x(B.throw(u))
          } catch (_) {
            b(_)
          }
        }

        function x(u) {
          u.done ? v(u.value) : w(u.value).then(R, j)
        }
        x((B = B.apply(A, h || [])).next())
      })
    },
    i = rt && rt.__generator || function(A, h) {
      var m = {
          label: 0,
          sent: function() {
            if (v[0] & 1) throw v[1];
            return v[1]
          },
          trys: [],
          ops: []
        },
        B, w, v, b = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
      return b.next = R(0), b.throw = R(1), b.return = R(2), typeof Symbol == "function" && (b[Symbol.iterator] = function() {
        return this
      }), b;

      function R(x) {
        return function(u) {
          return j([x, u])
        }
      }

      function j(x) {
        if (B) throw new TypeError("Generator is already executing.");
        for (; b && (b = 0, x[0] && (m = 0)), m;) try {
          if (B = 1, w && (v = x[0] & 2 ? w.return : x[0] ? w.throw || ((v = w.return) && v.call(w), 0) : w.next) && !(v = v.call(w, x[1])).done) return v;
          switch (w = 0, v && (x = [x[0] & 2, v.value]), x[0]) {
            case 0:
            case 1:
              v = x;
              break;
            case 4:
              return m.label++, {
                value: x[1],
                done: !1
              };
            case 5:
              m.label++, w = x[1], x = [0];
              continue;
            case 7:
              x = m.ops.pop(), m.trys.pop();
              continue;
            default:
              if (v = m.trys, !(v = v.length > 0 && v[v.length - 1]) && (x[0] === 6 || x[0] === 2)) {
                m = 0;
                continue
              }
              if (x[0] === 3 && (!v || x[1] > v[0] && x[1] < v[3])) {
                m.label = x[1];
                break
              }
              if (x[0] === 6 && m.label < v[1]) {
                m.label = v[1], v = x;
                break
              }
              if (v && m.label < v[2]) {
                m.label = v[2], m.ops.push(x);
                break
              }
              v[2] && m.ops.pop(), m.trys.pop();
              continue
          }
          x = h.call(A, m)
        } catch (u) {
          x = [6, u], w = 0
        } finally {
          B = v = 0
        }
        if (x[0] & 5) throw x[1];
        return {
          value: x[0] ? x[1] : void 0,
          done: !0
        }
      }
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.AirdropUI = void 0;
  var o = Pn,
    l = Ce,
    d = ve,
    p = Fn,
    f = ms;
  s(ms, n);
  var P = function() {
      function A(h) {
        this.subscribers = [], this.value = h
      }
      return A.prototype.set = function(h, m) {
        var B, w = this,
          v = t({}, this.value),
          b = t(t({}, v), (B = {}, B[h] = m, B));
        this.value = b, this.subscribers.filter(function(R) {
          R[0];
          var j = R[1];
          return j.length === 0 || j.includes(h)
        }).forEach(function(R) {
          var j = R[0],
            x = R[1];
          if (x.length === 0) j(w.value);
          else
            for (var u = 0; u < x.length; u++) v[x[u]] !== b[x[u]] && j(w.value)
        })
      }, A.prototype.getState = function() {
        return t({}, this.value)
      }, A.prototype.subscribe = function(h) {
        for (var m = this, B = [], w = 1; w < arguments.length; w++) B[w - 1] = arguments[w];
        var v = this.subscribers.push([h, B]);
        return h(this.value),
          function() {
            m.subscribers.splice(v - 1, 1)
          }
      }, A.prototype.unsubscribeAll = function() {
        this.subscribers = []
      }, A
    }(),
    y = {
      claimApiBaseUrl: "https://claim-api-test.d3mo.org",
      deployValue: "10000000"
    },
    S = function() {
      function A(h, m, B, w) {
        w === void 0 && (w = {});
        var v = this,
          b;
        this.tonConnect = h, this.rpc = m, this.clock = B, this.subscribers = [], this.state = new P({
          claimId: null,
          airdropName: null,
          claimData: null,
          storageData: null,
          claimed: null,
          loading: !1,
          userAddress: null,
          factoryAddress: null,
          airdropAddress: null,
          storageKey: null,
          claimLoading: !1,
          status: p.AirdropStatus.Loading
        }), this.getState = this.state.getState.bind(this.state), this.subscribe = this.state.subscribe.bind(this.state), this.options = t(t({}, y), w), this.syncStorageData = this.syncStorageData.bind(this), window.addEventListener("storage", this.syncStorageData), this.state.subscribe(this.initSyncClaimData.bind(this), "airdropName", "userAddress"), this.state.subscribe(this.syncStorageKey.bind(this), "airdropName", "userAddress", "claimId"), this.state.subscribe(this.syncFactoryAddress.bind(this), "claimData", "storageData", "claimId"), this.state.subscribe(this.syncAirdropAddress.bind(this), "claimData", "storageData", "claimId"), this.state.subscribe(this.initClaimListener.bind(this), "userAddress", "factoryAddress"), this.state.subscribe(this.syncRemoveStorageTimer.bind(this), "storageKey", "storageData"), this.state.subscribe(this.syncStorageData.bind(this), "storageKey", "claimed"), this.state.subscribe(this.syncClaimed.bind(this), "airdropAddress"), this.state.subscribe(this.syncClaimLoading.bind(this), "storageData"), this.state.subscribe(this.syncStatus.bind(this), "userAddress", "claimed", "claimData", "storageKey", "airdropName", "claimId"), this.state.set("userAddress", (b = this.tonConnect.account) === null || b === void 0 ? void 0 : b.address), this.tonConnectUnsubscribe = this.tonConnect.onStatusChange(function(R) {
          v.state.set("userAddress", R == null ? void 0 : R.account.address)
        })
      }
      return A.prototype.destory = function() {
        var h, m;
        this.state.unsubscribeAll(), clearTimeout(this.removeStorageTimeout), clearTimeout(this.claimDataTimeout), window.removeEventListener("storage", this.syncStorageData), (h = this.tonConnectUnsubscribe) === null || h === void 0 || h.call(this), (m = this.rpcSubscriber) === null || m === void 0 || m.unsubscribe()
      }, A.prototype.setAirdropName = function(h) {
        this.state.set("airdropName", h)
      }, A.prototype.setClaimId = function(h) {
        this.state.set("claimId", h)
      }, A.prototype.claim = function() {
        return r(this, void 0, void 0, function() {
          var h, m, B, w, v, b, R, j, x, u, _, g, E, T, O, F;
          return i(this, function(k) {
            switch (k.label) {
              case 0:
                if (h = this.getState(), m = h.claimData, B = h.storageKey, w = h.claimId, !w) throw new Error("claimId must defined");
                if ((m == null ? void 0 : m.status) !== "signed") throw new Error("claimData.status must be signed");
                if (v = m.rewards.find(function(M) {
                    return M.claimId === w
                  }), !v) throw new Error("rewardData must defined");
                if (!B) throw new Error("storageKey must be defined");
                this.state.set("loading", !0), k.label = 1;
              case 1:
                return k.trys.push([1, 7, , 8]), [4, this.rpc.packIntoCell({
                  abiVersion: "2.3",
                  structure: [{
                    type: "uint32",
                    name: "functionId"
                  }, {
                    type: "bytes",
                    name: "_signature"
                  }],
                  data: {
                    functionId: "0x0bda4e15",
                    _signature: v.signature
                  }
                })];
              case 2:
                return b = k.sent(), [4, (0, f.getCodeAirdropAndAmount)(v.factory, this.rpc, this.options.deployValue)];
              case 3:
                return R = k.sent(), j = R.codeAirdrop, x = R.amount, [4, this.rpc.mergeTvc({
                  code: j ?? "",
                  data: "te6ccgEBAgEAKAABAcABAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg"
                })];
              case 4:
                return u = k.sent(), [4, this.rpc.getStateInit(d.AirdropAbi, {
                  workchain: 0,
                  initParams: {
                    _data: v.data,
                    _nonce: v.nonce
                  },
                  tvc: u.tvc
                })];
              case 5:
                return _ = k.sent(), g = _.stateInit, E = _.address, T = this.clock.time, [4, this.tonConnect.sendTransaction({
                  messages: [{
                    amount: x,
                    address: o.Address.parse(E.toString()).toString({
                      bounceable: !0
                    }),
                    payload: b.boc,
                    stateInit: g
                  }],
                  validUntil: Math.ceil((T + 6e5) / 1e3)
                })];
              case 6:
                return k.sent(), O = {
                  airdrop: v.airdrop,
                  factory: v.factory,
                  until: T + 12e4
                }, localStorage.setItem(B, JSON.stringify(O)), this.state.set("storageData", O), [3, 8];
              case 7:
                return F = k.sent(), console.error(F), [3, 8];
              case 8:
                return this.state.set("loading", !1), [2]
            }
          })
        })
      }, A.prototype.syncFactoryAddress = function() {
        var h, m = this.state.getState(),
          B = m.claimData,
          w = m.storageData,
          v = m.claimId,
          b = void 0;
        (B == null ? void 0 : B.status) === "signed" && v ? b = (h = B.rewards.find(function(R) {
          return R.claimId === v
        })) === null || h === void 0 ? void 0 : h.factory : b = w == null ? void 0 : w.factory, this.state.set("factoryAddress", b)
      }, A.prototype.syncAirdropAddress = function() {
        var h, m = this.state.getState(),
          B = m.claimData,
          w = m.storageData,
          v = m.claimId,
          b = void 0;
        (B == null ? void 0 : B.status) === "signed" && v ? b = (h = B.rewards.find(function(R) {
          return R.claimId === v
        })) === null || h === void 0 ? void 0 : h.airdrop : b = w == null ? void 0 : w.airdrop, this.state.set("airdropAddress", b)
      }, A.prototype.syncStorageKey = function() {
        var h = this.state.getState(),
          m = h.airdropName,
          B = h.userAddress,
          w = h.claimId,
          v = m && B && w ? A.getStorageKey(m, B, w) : null;
        this.state.set("storageKey", v)
      }, A.prototype.syncStorageData = function() {
        var h = this.state.getState(),
          m = h.storageKey,
          B = h.claimed;
        if (B) this.state.set("storageData", null);
        else {
          var w = m ? localStorage.getItem(m) : null;
          if (w) try {
            var v = JSON.parse(w),
              b = this.clock.time < v.until ? v : null;
            this.state.set("storageData", b)
          } catch (R) {
            console.error(R)
          }
        }
      }, A.prototype.syncRemoveStorageTimer = function() {
        var h = this,
          m = this.clock.time,
          B = this.state.getState(),
          w = B.storageKey,
          v = B.storageData;
        clearTimeout(this.removeStorageTimeout), w && v && m < v.until && (this.removeStorageTimeout = setTimeout(function() {
          localStorage.removeItem(w), h.state.set("storageData", null)
        }, v.until - m))
      }, A.prototype.syncClaimed = function() {
        return r(this, void 0, void 0, function() {
          var h, m, B, w;
          return i(this, function(v) {
            switch (v.label) {
              case 0:
                if (h = this.state.getState().airdropAddress, this.state.set("claimed", null), !h) return [2];
                this.state.set("loading", !0), v.label = 1;
              case 1:
                return v.trys.push([1, 3, , 4]), m = o.Address.parseFriendly(h).address.toRawString(), [4, this.rpc.getFullContractState({
                  address: new l.Address(m)
                })];
              case 2:
                return B = v.sent(), this.state.set("claimed", !!B.state), [3, 4];
              case 3:
                return w = v.sent(), console.error(w), [3, 4];
              case 4:
                return this.state.set("loading", !1), [2]
            }
          })
        })
      }, A.prototype.syncClaimLoading = function() {
        var h = this.state.getState().storageData;
        this.state.set("claimLoading", !!h)
      }, A.prototype.syncStatus = function() {
        var h, m, B, w = p.AirdropStatus.Loading,
          v = this.getState();
        v.userAddress ? v.claimed === !0 ? w = p.AirdropStatus.HasClaimed : v.claimed === !1 && ((h = v.claimData) === null || h === void 0 ? void 0 : h.status) === "signed" && v.storageKey ? w = p.AirdropStatus.CanClaim : ((m = v.claimData) === null || m === void 0 ? void 0 : m.status) === "inQueue" ? w = p.AirdropStatus.InQueue : ((B = v.claimData) === null || B === void 0 ? void 0 : B.status) === "noReward" ? w = p.AirdropStatus.NoReward : v.airdropName ? v.claimId || (w = p.AirdropStatus.NoClaimId) : w = p.AirdropStatus.NoAirdrop : w = p.AirdropStatus.NoUser, this.state.set("status", w)
      }, A.prototype.initSyncClaimData = function() {
        var h = this;
        clearInterval(this.claimDataTimeout), this.state.set("claimData", null);
        var m = this.state.getState(),
          B = m.airdropName,
          w = m.userAddress;
        if (!(!B || !w)) {
          var v = function() {
            return r(h, void 0, void 0, function() {
              var b, R, j, x;
              return i(this, function(u) {
                switch (u.label) {
                  case 0:
                    this.state.set("loading", !0), u.label = 1;
                  case 1:
                    return u.trys.push([1, 4, , 5]), b = this.options.claimApiBaseUrl, [4, fetch("".concat(b, "/v2/").concat(B, "/").concat(w, "/claim_data"))];
                  case 2:
                    return R = u.sent(), [4, R.json()];
                  case 3:
                    return j = u.sent(), this.state.set("claimData", j), [3, 5];
                  case 4:
                    return x = u.sent(), console.error(x), [3, 5];
                  case 5:
                    return this.state.set("loading", !1), [2]
                }
              })
            })
          };
          this.claimDataTimeout = setInterval(v, 2e4), v()
        }
      }, A.prototype.initClaimListener = function() {
        return r(this, void 0, void 0, function() {
          var h, m, B, w, v, b = this,
            R;
          return i(this, function(j) {
            switch (j.label) {
              case 0:
                return (R = this.rpcSubscriber) === null || R === void 0 || R.unsubscribe(), h = this.state.getState(), m = h.factoryAddress, B = h.userAddress, !m || !B ? [2] : (w = o.Address.parseFriendly(m).address.toRawString(), v = new this.rpc.Contract(d.AirdropFactoryAbiV2, new l.Address(w)), this.rpcSubscriber = new this.rpc.Subscriber, [4, this.rpcSubscriber.transactions(v.address).flatMap(function(x) {
                  return x.transactions
                }).flatMap(function(x) {
                  return v.decodeTransactionEvents({
                    transaction: x
                  })
                }).filterMap(function(x) {
                  if (x.event === "AirdropClaimed" && x.data.recipient.toString() === B) return b.state.set("claimed", !0), !0
                }).first()]);
              case 1:
                return j.sent(), [2]
            }
          })
        })
      }, A.getStorageKey = function(h, m, B) {
        return "airdrop-v2-".concat(h, "-").concat(m, "-").concat(B)
      }, A
    }();
  n.AirdropUI = S
})($r);
var ws = {};
let c;
const Fr = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Fr.decode();
let tn = null;

function We() {
  return (tn === null || tn.byteLength === 0) && (tn = new Uint8Array(c.memory.buffer)), tn
}

function yt(n, t) {
  return n = n >>> 0, Fr.decode(We().subarray(n, n + t))
}
const me = new Array(128).fill(void 0);
me.push(void 0, null, !0, !1);
let an = me.length;

function Z(n) {
  an === me.length && me.push(me.length + 1);
  const t = an;
  return an = me[t], me[t] = n, t
}

function tt(n) {
  return me[n]
}

function At(n) {
  return n == null
}
let $e = null;

function D() {
  return ($e === null || $e.buffer.detached === !0 || $e.buffer.detached === void 0 && $e.buffer !== c.memory.buffer) && ($e = new DataView(c.memory.buffer)), $e
}
let Q = 0;
const vn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  tl = typeof vn.encodeInto == "function" ? function(n, t) {
    return vn.encodeInto(n, t)
  } : function(n, t) {
    const e = vn.encode(n);
    return t.set(e), {
      read: n.length,
      written: e.length
    }
  };

function Y(n, t, e) {
  if (e === void 0) {
    const l = vn.encode(n),
      d = t(l.length, 1) >>> 0;
    return We().subarray(d, d + l.length).set(l), Q = l.length, d
  }
  let s = n.length,
    r = t(s, 1) >>> 0;
  const i = We();
  let o = 0;
  for (; o < s; o++) {
    const l = n.charCodeAt(o);
    if (l > 127) break;
    i[r + o] = l
  }
  if (o !== s) {
    o !== 0 && (n = n.slice(o)), r = e(r, s, s = o + n.length * 3, 1) >>> 0;
    const l = We().subarray(r + o, r + s),
      d = tl(n, l);
    o += d.written, r = e(r, s, o, 1) >>> 0
  }
  return Q = o, r
}

function el(n) {
  n < 132 || (me[n] = an, an = n)
}

function V(n) {
  const t = tt(n);
  return el(n), t
}

function ys(n) {
  const t = typeof n;
  if (t == "number" || t == "boolean" || n == null) return `${n}`;
  if (t == "string") return `"${n}"`;
  if (t == "symbol") {
    const r = n.description;
    return r == null ? "Symbol" : `Symbol(${r})`
  }
  if (t == "function") {
    const r = n.name;
    return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function"
  }
  if (Array.isArray(n)) {
    const r = n.length;
    let i = "[";
    r > 0 && (i += ys(n[0]));
    for (let o = 1; o < r; o++) i += ", " + ys(n[o]);
    return i += "]", i
  }
  const e = /\[object ([^\]]+)\]/.exec(toString.call(n));
  let s;
  if (e.length > 1) s = e[1];
  else return toString.call(n);
  if (s == "Object") try {
    return "Object(" + JSON.stringify(n) + ")"
  } catch {
    return "Object"
  }
  return n instanceof Error ? `${n.name}: ${n.message}
${n.stack}` : s
}
const js = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => {
  c.__wbindgen_export_2.get(n.dtor)(n.a, n.b)
});

function nl(n, t, e, s) {
  const r = {
      a: n,
      b: t,
      cnt: 1,
      dtor: e
    },
    i = (...o) => {
      r.cnt++;
      const l = r.a;
      r.a = 0;
      try {
        return s(l, r.b, ...o)
      } finally {
        --r.cnt === 0 ? (c.__wbindgen_export_2.get(r.dtor)(l, r.b), js.unregister(r)) : r.a = l
      }
    };
  return i.original = r, js.register(i, r, r), i
}

function sl(n, t, e) {
  c._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0fff6d0ad1f7528f(n, t, Z(e))
}

function rl(n, t) {
  return n = n >>> 0, We().subarray(n / 1, n / 1 + t)
}

function il(n, t) {
  const e = t(n.length * 1, 1) >>> 0;
  return We().set(n, e / 1), Q = n.length, e
}

function Nt(n, t) {
  try {
    return n.apply(this, t)
  } catch (e) {
    c.__wbindgen_exn_store(Z(e))
  }
}

function ue(n, t) {
  if (!(n instanceof t)) throw new Error(`expected instance of ${t.name}`);
  return n.ptr
}

function al(n) {
  const t = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
    e = Q;
  return c.checkAddress(t, e) !== 0
}

function ol(n) {
  let t, e;
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16),
      f = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      P = Q;
    c.repackAddress(p, f, P);
    var s = D().getInt32(p + 4 * 0, !0),
      r = D().getInt32(p + 4 * 1, !0),
      i = D().getInt32(p + 4 * 2, !0),
      o = D().getInt32(p + 4 * 3, !0),
      l = s,
      d = r;
    if (o) throw l = 0, d = 0, V(i);
    return t = l, e = d, yt(l, d)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function cl(n, t, e, s, r, i, o) {
  try {
    const f = c.__wbindgen_add_to_stack_pointer(-16);
    ue(n, we);
    const P = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      y = Q,
      S = Y(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = Q,
      h = Y(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      m = Q;
    c.runLocal(f, n.__wbg_ptr, P, y, S, A, h, m, Z(r), i, !At(o), At(o) ? 0 : o);
    var l = D().getInt32(f + 4 * 0, !0),
      d = D().getInt32(f + 4 * 1, !0),
      p = D().getInt32(f + 4 * 2, !0);
    if (p) throw V(d);
    return V(l)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function ll(n) {
  let t, e;
  try {
    const P = c.__wbindgen_add_to_stack_pointer(-16);
    var s = At(n) ? 0 : Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      r = Q;
    c.makeFullAccountBoc(P, s, r);
    var i = D().getInt32(P + 4 * 0, !0),
      o = D().getInt32(P + 4 * 1, !0),
      l = D().getInt32(P + 4 * 2, !0),
      d = D().getInt32(P + 4 * 3, !0),
      p = i,
      f = o;
    if (d) throw p = 0, f = 0, V(l);
    return t = p, e = f, yt(p, f)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function ul(n) {
  try {
    const r = c.__wbindgen_add_to_stack_pointer(-16),
      i = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = Q;
    c.parseFullAccountBoc(r, i, o);
    var t = D().getInt32(r + 4 * 0, !0),
      e = D().getInt32(r + 4 * 1, !0),
      s = D().getInt32(r + 4 * 2, !0);
    if (s) throw V(e);
    return V(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function dl(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = Q;
    c.parseFullAccountStateInit(i, o, l);
    var t = D().getInt32(i + 4 * 0, !0),
      e = D().getInt32(i + 4 * 1, !0),
      s = D().getInt32(i + 4 * 2, !0),
      r = D().getInt32(i + 4 * 3, !0);
    if (r) throw V(s);
    let d;
    return t !== 0 && (d = yt(t, e).slice(), c.__wbindgen_free(t, e * 1, 1)), d
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function _l(n, t, e, s) {
  try {
    const l = c.__wbindgen_add_to_stack_pointer(-16),
      d = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = Q,
      f = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      P = Q;
    c.computeStorageFee(l, d, p, f, P, e, s);
    var r = D().getInt32(l + 4 * 0, !0),
      i = D().getInt32(l + 4 * 1, !0),
      o = D().getInt32(l + 4 * 2, !0);
    if (o) throw V(i);
    return V(r)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function pl(n, t, e, s, r, i, o) {
  try {
    const y = c.__wbindgen_add_to_stack_pointer(-16),
      S = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = Q,
      h = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      m = Q,
      B = Y(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = Q;
    var l = At(i) ? 0 : Y(i, c.__wbindgen_malloc, c.__wbindgen_realloc),
      d = Q;
    c.executeLocal(y, S, A, h, m, B, w, s, r, l, d, !At(o), At(o) ? 0 : o);
    var p = D().getInt32(y + 4 * 0, !0),
      f = D().getInt32(y + 4 * 1, !0),
      P = D().getInt32(y + 4 * 2, !0);
    if (P) throw V(f);
    return V(p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function fl(n, t, e, s, r) {
  try {
    const f = c.__wbindgen_add_to_stack_pointer(-16),
      P = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      y = Q,
      S = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = Q;
    var i = At(s) ? 0 : Y(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = Q;
    c.getExpectedAddress(f, P, y, S, A, e, i, o, Z(r));
    var l = D().getInt32(f + 4 * 0, !0),
      d = D().getInt32(f + 4 * 1, !0),
      p = D().getInt32(f + 4 * 2, !0);
    if (p) throw V(d);
    return V(l)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function hl(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      l = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      d = Q,
      p = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = Q;
    c.unpackContractFields(o, l, d, p, f, e);
    var s = D().getInt32(o + 4 * 0, !0),
      r = D().getInt32(o + 4 * 1, !0),
      i = D().getInt32(o + 4 * 2, !0);
    if (i) throw V(r);
    return V(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function gl(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = Q,
      d = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = Q;
    c.unpackInitData(i, o, l, d, p);
    var e = D().getInt32(i + 4 * 0, !0),
      s = D().getInt32(i + 4 * 1, !0),
      r = D().getInt32(i + 4 * 2, !0);
    if (r) throw V(s);
    return V(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function bl(n) {
  let t, e;
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16),
      f = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      P = Q;
    c.getBocHash(p, f, P);
    var s = D().getInt32(p + 4 * 0, !0),
      r = D().getInt32(p + 4 * 1, !0),
      i = D().getInt32(p + 4 * 2, !0),
      o = D().getInt32(p + 4 * 3, !0),
      l = s,
      d = r;
    if (o) throw l = 0, d = 0, V(i);
    return t = l, e = d, yt(l, d)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function ml(n, t, e) {
  try {
    const d = c.__wbindgen_add_to_stack_pointer(-16);
    var s = At(e) ? 0 : Y(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      r = Q;
    c.packIntoCell(d, Z(n), Z(t), s, r);
    var i = D().getInt32(d + 4 * 0, !0),
      o = D().getInt32(d + 4 * 1, !0),
      l = D().getInt32(d + 4 * 2, !0);
    if (l) throw V(o);
    return V(i)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function wl(n, t, e, s) {
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16),
      f = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      P = Q;
    var r = At(s) ? 0 : Y(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = Q;
    c.unpackFromCell(p, Z(n), f, P, e, r, i);
    var o = D().getInt32(p + 4 * 0, !0),
      l = D().getInt32(p + 4 * 1, !0),
      d = D().getInt32(p + 4 * 2, !0);
    if (d) throw V(l);
    return V(o)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function yl(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = Q;
    c.extractContractData(i, o, l);
    var t = D().getInt32(i + 4 * 0, !0),
      e = D().getInt32(i + 4 * 1, !0),
      s = D().getInt32(i + 4 * 2, !0),
      r = D().getInt32(i + 4 * 3, !0);
    if (r) throw V(s);
    let d;
    return t !== 0 && (d = yt(t, e).slice(), c.__wbindgen_free(t, e * 1, 1)), d
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function vl(n) {
  let t, e;
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16),
      f = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      P = Q;
    c.extractPublicKey(p, f, P);
    var s = D().getInt32(p + 4 * 0, !0),
      r = D().getInt32(p + 4 * 1, !0),
      i = D().getInt32(p + 4 * 2, !0),
      o = D().getInt32(p + 4 * 3, !0),
      l = s,
      d = r;
    if (o) throw l = 0, d = 0, V(i);
    return t = l, e = d, yt(l, d)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function Al(n) {
  try {
    const r = c.__wbindgen_add_to_stack_pointer(-16),
      i = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = Q;
    c.codeToTvc(r, i, o);
    var t = D().getInt32(r + 4 * 0, !0),
      e = D().getInt32(r + 4 * 1, !0),
      s = D().getInt32(r + 4 * 2, !0);
    if (s) throw V(e);
    return V(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function kl(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = Q,
      d = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = Q;
    c.mergeTvc(i, o, l, d, p);
    var e = D().getInt32(i + 4 * 0, !0),
      s = D().getInt32(i + 4 * 1, !0),
      r = D().getInt32(i + 4 * 2, !0);
    if (r) throw V(s);
    return V(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Il(n) {
  try {
    const r = c.__wbindgen_add_to_stack_pointer(-16),
      i = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = Q;
    c.splitTvc(r, i, o);
    var t = D().getInt32(r + 4 * 0, !0),
      e = D().getInt32(r + 4 * 1, !0),
      s = D().getInt32(r + 4 * 2, !0);
    if (s) throw V(e);
    return V(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Sl(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = Q,
      d = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = Q;
    c.setCodeSalt(i, o, l, d, p);
    var e = D().getInt32(i + 4 * 0, !0),
      s = D().getInt32(i + 4 * 1, !0),
      r = D().getInt32(i + 4 * 2, !0);
    if (r) throw V(s);
    return V(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Tl(n) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = Q;
    c.getCodeSalt(i, o, l);
    var t = D().getInt32(i + 4 * 0, !0),
      e = D().getInt32(i + 4 * 1, !0),
      s = D().getInt32(i + 4 * 2, !0),
      r = D().getInt32(i + 4 * 3, !0);
    if (r) throw V(s);
    let d;
    return t !== 0 && (d = yt(t, e).slice(), c.__wbindgen_free(t, e * 1, 1)), d
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Cl(n, t, e) {
  let s, r;
  try {
    const P = c.__wbindgen_add_to_stack_pointer(-16),
      y = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      S = Q,
      A = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = Q;
    c.encodeInternalInput(P, y, S, A, h, Z(e));
    var i = D().getInt32(P + 4 * 0, !0),
      o = D().getInt32(P + 4 * 1, !0),
      l = D().getInt32(P + 4 * 2, !0),
      d = D().getInt32(P + 4 * 3, !0),
      p = i,
      f = o;
    if (d) throw p = 0, f = 0, V(l);
    return s = p, r = f, yt(p, f)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(s, r, 1)
  }
}

function Pl(n, t, e, s, r, i, o) {
  let l, d;
  try {
    const R = c.__wbindgen_add_to_stack_pointer(-16);
    var p = At(n) ? 0 : Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = Q;
    const j = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      x = Q;
    var P = At(s) ? 0 : Y(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      y = Q,
      S = At(r) ? 0 : Y(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = Q;
    const u = Y(i, c.__wbindgen_malloc, c.__wbindgen_realloc),
      _ = Q;
    c.encodeInternalMessage(R, p, f, j, x, e, P, y, S, A, u, _, At(o) ? 16777215 : o ? 1 : 0);
    var h = D().getInt32(R + 4 * 0, !0),
      m = D().getInt32(R + 4 * 1, !0),
      B = D().getInt32(R + 4 * 2, !0),
      w = D().getInt32(R + 4 * 3, !0),
      v = h,
      b = m;
    if (w) throw v = 0, b = 0, V(B);
    return l = v, d = b, yt(v, b)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(l, d, 1)
  }
}

function El(n, t, e, s) {
  try {
    const l = c.__wbindgen_add_to_stack_pointer(-16),
      d = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = Q,
      f = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      P = Q;
    c.decodeInput(l, d, p, f, P, Z(e), s);
    var r = D().getInt32(l + 4 * 0, !0),
      i = D().getInt32(l + 4 * 1, !0),
      o = D().getInt32(l + 4 * 2, !0);
    if (o) throw V(i);
    return V(r)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Ml(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      l = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      d = Q,
      p = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = Q;
    c.decodeEvent(o, l, d, p, f, Z(e));
    var s = D().getInt32(o + 4 * 0, !0),
      r = D().getInt32(o + 4 * 1, !0),
      i = D().getInt32(o + 4 * 2, !0);
    if (i) throw V(r);
    return V(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Ol(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      l = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      d = Q,
      p = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      f = Q;
    c.decodeOutput(o, l, d, p, f, Z(e));
    var s = D().getInt32(o + 4 * 0, !0),
      r = D().getInt32(o + 4 * 1, !0),
      i = D().getInt32(o + 4 * 2, !0);
    if (i) throw V(r);
    return V(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function $l(n, t, e) {
  try {
    const o = c.__wbindgen_add_to_stack_pointer(-16),
      l = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      d = Q;
    c.decodeTransaction(o, Z(n), l, d, Z(e));
    var s = D().getInt32(o + 4 * 0, !0),
      r = D().getInt32(o + 4 * 1, !0),
      i = D().getInt32(o + 4 * 2, !0);
    if (i) throw V(r);
    return V(s)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Nl(n, t) {
  try {
    const i = c.__wbindgen_add_to_stack_pointer(-16),
      o = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = Q;
    c.decodeTransactionEvents(i, Z(n), o, l);
    var e = D().getInt32(i + 4 * 0, !0),
      s = D().getInt32(i + 4 * 1, !0),
      r = D().getInt32(i + 4 * 2, !0);
    if (r) throw V(s);
    return V(e)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Dl(n) {
  try {
    const r = c.__wbindgen_add_to_stack_pointer(-16),
      i = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = Q;
    c.unpackTransactionTree(r, i, o);
    var t = D().getInt32(r + 4 * 0, !0),
      e = D().getInt32(r + 4 * 1, !0),
      s = D().getInt32(r + 4 * 2, !0);
    if (s) throw V(e);
    return V(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Ll(n) {
  let t, e;
  try {
    const p = c.__wbindgen_add_to_stack_pointer(-16),
      f = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      P = Q;
    c.getDataHash(p, f, P);
    var s = D().getInt32(p + 4 * 0, !0),
      r = D().getInt32(p + 4 * 1, !0),
      i = D().getInt32(p + 4 * 2, !0),
      o = D().getInt32(p + 4 * 3, !0),
      l = s,
      d = r;
    if (o) throw l = 0, d = 0, V(i);
    return t = l, e = d, yt(l, d)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
  }
}

function Rl() {
  try {
    const s = c.__wbindgen_add_to_stack_pointer(-16);
    c.ed25519_generateKeyPair(s);
    var n = D().getInt32(s + 4 * 0, !0),
      t = D().getInt32(s + 4 * 1, !0),
      e = D().getInt32(s + 4 * 2, !0);
    if (e) throw V(t);
    return V(n)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Fl(n, t, e) {
  let s, r;
  try {
    const P = c.__wbindgen_add_to_stack_pointer(-16),
      y = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      S = Q,
      A = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = Q;
    c.ed25519_sign(P, y, S, A, h, !At(e), At(e) ? 0 : e);
    var i = D().getInt32(P + 4 * 0, !0),
      o = D().getInt32(P + 4 * 1, !0),
      l = D().getInt32(P + 4 * 2, !0),
      d = D().getInt32(P + 4 * 3, !0),
      p = i,
      f = o;
    if (d) throw p = 0, f = 0, V(l);
    return s = p, r = f, yt(p, f)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(s, r, 1)
  }
}

function Kl(n) {
  try {
    const r = c.__wbindgen_add_to_stack_pointer(-16),
      i = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = Q;
    c.extendSignature(r, i, o);
    var t = D().getInt32(r + 4 * 0, !0),
      e = D().getInt32(r + 4 * 1, !0),
      s = D().getInt32(r + 4 * 2, !0);
    if (s) throw V(e);
    return V(t)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Bl(n, t, e, s) {
  try {
    const l = c.__wbindgen_add_to_stack_pointer(-16),
      d = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = Q,
      f = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      P = Q,
      y = Y(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      S = Q;
    c.verifySignature(l, d, p, f, P, y, S, !At(s), At(s) ? 0 : s);
    var r = D().getInt32(l + 4 * 0, !0),
      i = D().getInt32(l + 4 * 1, !0),
      o = D().getInt32(l + 4 * 2, !0);
    if (o) throw V(i);
    return r !== 0
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function jl(n, t, e, s) {
  try {
    const P = c.__wbindgen_add_to_stack_pointer(-16),
      y = Y(n, c.__wbindgen_malloc, c.__wbindgen_realloc),
      S = Q;
    var r = At(t) ? 0 : Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = Q,
      o = At(e) ? 0 : Y(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      l = Q;
    c.createRawExternalMessage(P, y, S, r, i, o, l, s);
    var d = D().getInt32(P + 4 * 0, !0),
      p = D().getInt32(P + 4 * 1, !0),
      f = D().getInt32(P + 4 * 2, !0);
    if (f) throw V(p);
    return V(d)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function xl(n, t, e, s, r, i, o) {
  try {
    const y = c.__wbindgen_add_to_stack_pointer(-16);
    ue(n, we);
    const S = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      A = Q,
      h = Y(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      m = Q,
      B = Y(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      w = Q;
    var l = At(r) ? 0 : Y(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      d = Q;
    c.createExternalMessageWithoutSignature(y, n.__wbg_ptr, S, A, h, m, B, w, l, d, Z(i), o);
    var p = D().getInt32(y + 4 * 0, !0),
      f = D().getInt32(y + 4 * 1, !0),
      P = D().getInt32(y + 4 * 2, !0);
    if (P) throw V(f);
    return V(p)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function Ul(n, t, e, s, r, i, o, l) {
  try {
    const S = c.__wbindgen_add_to_stack_pointer(-16);
    ue(n, we);
    const A = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      h = Q,
      m = Y(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
      B = Q,
      w = Y(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      v = Q;
    var d = At(r) ? 0 : Y(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      p = Q;
    const b = Y(o, c.__wbindgen_malloc, c.__wbindgen_realloc),
      R = Q;
    c.createExternalMessage(S, n.__wbg_ptr, A, h, m, B, w, v, d, p, Z(i), b, R, l);
    var f = D().getInt32(S + 4 * 0, !0),
      P = D().getInt32(S + 4 * 1, !0),
      y = D().getInt32(S + 4 * 2, !0);
    if (y) throw V(P);
    return jn.__wrap(f)
  } finally {
    c.__wbindgen_add_to_stack_pointer(16)
  }
}

function zl(n, t, e, s) {
  c.wasm_bindgen__convert__closures__invoke2_mut__h5874b044d3e8a56e(n, t, Z(e), Z(s))
}
const xs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_bytesquery_free(n >>> 0, 1));
class Kn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Kn.prototype);
    return e.__wbg_ptr = t, xs.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, xs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_bytesquery_free(t, 0)
  }
  onReceive(t) {
    const e = this.__destroy_into_raw(),
      s = il(t, c.__wbindgen_malloc),
      r = Q;
    c.bytesquery_onReceive(e, s, r)
  }
  onError(t) {
    const e = this.__destroy_into_raw();
    c.bytesquery_onError(e, Z(t))
  }
  onTimeout() {
    const t = this.__destroy_into_raw();
    c.bytesquery_onTimeout(t)
  }
}
const Us = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_clockwithoffset_free(n >>> 0, 1));
class we {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Us.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_clockwithoffset_free(t, 0)
  }
  constructor() {
    const t = c.clockwithoffset_new();
    return this.__wbg_ptr = t >>> 0, Us.register(this, this.__wbg_ptr, this), this
  }
  get nowMs() {
    return c.clockwithoffset_nowMs(this.__wbg_ptr)
  }
  updateOffset(t) {
    c.clockwithoffset_updateOffset(this.__wbg_ptr, t)
  }
  offsetMs() {
    return c.clockwithoffset_offsetMs(this.__wbg_ptr)
  }
}
const zs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_genericcontract_free(n >>> 0, 1));
class Bn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Bn.prototype);
    return e.__wbg_ptr = t, zs.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_genericcontract_free(t, 0)
  }
  get address() {
    let t, e;
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16);
      c.genericcontract_address(i, this.__wbg_ptr);
      var s = D().getInt32(i + 4 * 0, !0),
        r = D().getInt32(i + 4 * 1, !0);
      return t = s, e = r, yt(s, r)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
    }
  }
  sendMessageLocally(t, e) {
    try {
      const o = c.__wbindgen_add_to_stack_pointer(-16);
      c.genericcontract_sendMessageLocally(o, this.__wbg_ptr, Z(t), Z(e));
      var s = D().getInt32(o + 4 * 0, !0),
        r = D().getInt32(o + 4 * 1, !0),
        i = D().getInt32(o + 4 * 2, !0);
      if (i) throw V(r);
      return V(s)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  sendMessage(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16);
      c.genericcontract_sendMessage(i, this.__wbg_ptr, Z(t));
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
      if (r) throw V(s);
      return V(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  refresh() {
    const t = c.genericcontract_refresh(this.__wbg_ptr);
    return V(t)
  }
  handleBlock(t) {
    const e = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      s = Q,
      r = c.genericcontract_handleBlock(this.__wbg_ptr, e, s);
    return V(r)
  }
  preloadTransactions(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        l = Q;
      c.genericcontract_preloadTransactions(i, this.__wbg_ptr, o, l);
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
      if (r) throw V(s);
      return V(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  get pollingMethod() {
    const t = c.genericcontract_pollingMethod(this.__wbg_ptr);
    return V(t)
  }
}
const Ws = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_gqlconnection_free(n >>> 0, 1));
class Kr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ws.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_gqlconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(Z(t));
    return this.__wbg_ptr = e >>> 0, Ws.register(this, this.__wbg_ptr, this), this
  }
  getLatestBlock(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        l = Q;
      c.gqlconnection_getLatestBlock(i, this.__wbg_ptr, o, l);
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
      if (r) throw V(s);
      return V(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  waitForNextBlock(t, e, s) {
    try {
      const l = c.__wbindgen_add_to_stack_pointer(-16),
        d = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        p = Q,
        f = Y(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
        P = Q;
      c.gqlconnection_waitForNextBlock(l, this.__wbg_ptr, d, p, f, P, s);
      var r = D().getInt32(l + 4 * 0, !0),
        i = D().getInt32(l + 4 * 1, !0),
        o = D().getInt32(l + 4 * 2, !0);
      if (o) throw V(i);
      return V(r)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
const Hs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_jrpcconnection_free(n >>> 0, 1));
class Br {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Hs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_jrpcconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(Z(t));
    return this.__wbg_ptr = e >>> 0, Hs.register(this, this.__wbg_ptr, this), this
  }
}
const Vs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_protoconnection_free(n >>> 0, 1));
class jr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Vs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_protoconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(Z(t));
    return this.__wbg_ptr = e >>> 0, Vs.register(this, this.__wbg_ptr, this), this
  }
}
const Gs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_proxyconnection_free(n >>> 0, 1));
class xr {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Gs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_proxyconnection_free(t, 0)
  }
  constructor(t) {
    const e = c.gqlconnection_new(Z(t));
    return this.__wbg_ptr = e >>> 0, Gs.register(this, this.__wbg_ptr, this), this
  }
}
const Qs = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_stringquery_free(n >>> 0, 1));
class ln {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(ln.prototype);
    return e.__wbg_ptr = t, Qs.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Qs.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_stringquery_free(t, 0)
  }
  onReceive(t) {
    const e = this.__destroy_into_raw(),
      s = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
      r = Q;
    c.bytesquery_onReceive(e, s, r)
  }
  onError(t) {
    const e = this.__destroy_into_raw();
    c.bytesquery_onError(e, Z(t))
  }
  onTimeout() {
    const t = this.__destroy_into_raw();
    c.bytesquery_onTimeout(t)
  }
}
const Ys = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_transport_free(n >>> 0, 1));
class De {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(De.prototype);
    return e.__wbg_ptr = t, Ys.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ys.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_transport_free(t, 0)
  }
  static fromGqlConnection(t, e) {
    ue(t, Kr), ue(e, we);
    const s = c.transport_fromGqlConnection(t.__wbg_ptr, e.__wbg_ptr);
    return De.__wrap(s)
  }
  static fromJrpcConnection(t, e) {
    ue(t, Br), ue(e, we);
    const s = c.transport_fromJrpcConnection(t.__wbg_ptr, e.__wbg_ptr);
    return De.__wrap(s)
  }
  static fromProtoConnection(t, e) {
    ue(t, jr), ue(e, we);
    const s = c.transport_fromProtoConnection(t.__wbg_ptr, e.__wbg_ptr);
    return De.__wrap(s)
  }
  static fromProxyConnection(t, e) {
    ue(t, xr), ue(e, we);
    const s = c.transport_fromProxyConnection(t.__wbg_ptr, e.__wbg_ptr);
    return De.__wrap(s)
  }
  getNetworkDescription() {
    const t = c.transport_getNetworkDescription(this.__wbg_ptr);
    return V(t)
  }
  getSignatureId() {
    const t = c.transport_getSignatureId(this.__wbg_ptr);
    return V(t)
  }
  getBlockchainConfig(t) {
    const e = c.transport_getBlockchainConfig(this.__wbg_ptr, At(t) ? 16777215 : t ? 1 : 0);
    return V(e)
  }
  subscribeToGenericContract(t, e) {
    try {
      const o = c.__wbindgen_add_to_stack_pointer(-16),
        l = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        d = Q;
      c.transport_subscribeToGenericContract(o, this.__wbg_ptr, l, d, Z(e));
      var s = D().getInt32(o + 4 * 0, !0),
        r = D().getInt32(o + 4 * 1, !0),
        i = D().getInt32(o + 4 * 2, !0);
      if (i) throw V(r);
      return V(s)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getFullContractState(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        l = Q;
      c.transport_getFullContractState(i, this.__wbg_ptr, o, l);
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
      if (r) throw V(s);
      return V(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getAccountsByCodeHash(t, e, s) {
    try {
      const p = c.__wbindgen_add_to_stack_pointer(-16),
        f = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        P = Q;
      var r = At(s) ? 0 : Y(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
        i = Q;
      c.transport_getAccountsByCodeHash(p, this.__wbg_ptr, f, P, e, r, i);
      var o = D().getInt32(p + 4 * 0, !0),
        l = D().getInt32(p + 4 * 1, !0),
        d = D().getInt32(p + 4 * 2, !0);
      if (d) throw V(l);
      return V(o)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getTransactions(t, e, s) {
    try {
      const p = c.__wbindgen_add_to_stack_pointer(-16),
        f = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        P = Q;
      var r = At(e) ? 0 : Y(e, c.__wbindgen_malloc, c.__wbindgen_realloc),
        i = Q;
      c.transport_getTransactions(p, this.__wbg_ptr, f, P, r, i, s);
      var o = D().getInt32(p + 4 * 0, !0),
        l = D().getInt32(p + 4 * 1, !0),
        d = D().getInt32(p + 4 * 2, !0);
      if (d) throw V(l);
      return V(o)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getTransaction(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        l = Q;
      c.transport_getTransaction(i, this.__wbg_ptr, o, l);
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
      if (r) throw V(s);
      return V(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getDstTransaction(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        l = Q;
      c.transport_getDstTransaction(i, this.__wbg_ptr, o, l);
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
      if (r) throw V(s);
      return V(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
const Js = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(n => c.__wbg_unsignedmessage_free(n >>> 0, 1));
class jn {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(jn.prototype);
    return e.__wbg_ptr = t, Js.register(e, e.__wbg_ptr, e), e
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Js.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    c.__wbg_unsignedmessage_free(t, 0)
  }
  refreshTimeout(t) {
    ue(t, we), c.unsignedmessage_refreshTimeout(this.__wbg_ptr, t.__wbg_ptr)
  }
  expireAt() {
    return c.unsignedmessage_expireAt(this.__wbg_ptr) >>> 0
  }
  get hash() {
    let t, e;
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16);
      c.unsignedmessage_hash(i, this.__wbg_ptr);
      var s = D().getInt32(i + 4 * 0, !0),
        r = D().getInt32(i + 4 * 1, !0);
      return t = s, e = r, yt(s, r)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(t, e, 1)
    }
  }
  sign(t) {
    try {
      const i = c.__wbindgen_add_to_stack_pointer(-16),
        o = Y(t, c.__wbindgen_malloc, c.__wbindgen_realloc),
        l = Q;
      c.unsignedmessage_sign(i, this.__wbg_ptr, o, l);
      var e = D().getInt32(i + 4 * 0, !0),
        s = D().getInt32(i + 4 * 1, !0),
        r = D().getInt32(i + 4 * 2, !0);
      if (r) throw V(s);
      return V(e)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
  signFake() {
    try {
      const r = c.__wbindgen_add_to_stack_pointer(-16);
      c.unsignedmessage_signFake(r, this.__wbg_ptr);
      var t = D().getInt32(r + 4 * 0, !0),
        e = D().getInt32(r + 4 * 1, !0),
        s = D().getInt32(r + 4 * 2, !0);
      if (s) throw V(e);
      return V(t)
    } finally {
      c.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
async function Wl(n, t) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, t)
    } catch (s) {
      if (n.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
      else throw s
    }
    const e = await n.arrayBuffer();
    return await WebAssembly.instantiate(e, t)
  } else {
    const e = await WebAssembly.instantiate(n, t);
    return e instanceof WebAssembly.Instance ? {
      instance: e,
      module: n
    } : e
  }
}

function Ur() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbindgen_string_new = function(t, e) {
    const s = yt(t, e);
    return Z(s)
  }, n.wbg.__wbg_length_ae22078168b726f5 = function(t) {
    return tt(t).length
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return tt(t) === void 0
  }, n.wbg.__wbindgen_number_get = function(t, e) {
    const s = tt(e),
      r = typeof s == "number" ? s : void 0;
    D().setFloat64(t + 8 * 1, At(r) ? 0 : r, !0), D().setInt32(t + 4 * 0, !At(r), !0)
  }, n.wbg.__wbindgen_is_null = function(t) {
    return tt(t) === null
  }, n.wbg.__wbindgen_string_get = function(t, e) {
    const s = tt(e),
      r = typeof s == "string" ? s : void 0;
    var i = At(r) ? 0 : Y(r, c.__wbindgen_malloc, c.__wbindgen_realloc),
      o = Q;
    D().setInt32(t + 4 * 1, o, !0), D().setInt32(t + 4 * 0, i, !0)
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = tt(t);
    return typeof e == "object" && e !== null
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof tt(t) == "string"
  }, n.wbg.__wbg_new_796382978dfd4fb0 = function(t, e) {
    const s = new Error(yt(t, e));
    return Z(s)
  }, n.wbg.__wbg_new_525245e2b9901204 = function() {
    const t = new Object;
    return Z(t)
  }, n.wbg.__wbg_new_a220cf903aa02ca2 = function() {
    const t = new Array;
    return Z(t)
  }, n.wbg.__wbg_push_37c89022f34c01ca = function(t, e) {
    return tt(t).push(tt(e))
  }, n.wbg.__wbg_genericcontract_new = function(t) {
    const e = Bn.__wrap(t);
    return Z(e)
  }, n.wbg.__wbg_instanceof_Error_69bde193b0cc95e3 = function(t) {
    let e;
    try {
      e = tt(t) instanceof Error
    } catch {
      e = !1
    }
    return e
  }, n.wbg.__wbg_name_ac78212e803c7941 = function(t) {
    const e = tt(t).name;
    return Z(e)
  }, n.wbg.__wbg_message_e18bae0a0e2c097a = function(t) {
    const e = tt(t).message;
    return Z(e)
  }, n.wbg.__wbg_toString_9d18e102ca933e68 = function(t) {
    const e = tt(t).toString();
    return Z(e)
  }, n.wbg.__wbindgen_object_drop_ref = function(t) {
    V(t)
  }, n.wbg.__wbindgen_number_new = function(t) {
    return Z(t)
  }, n.wbg.__wbg_now_b7a162010a9e75b4 = function() {
    return Date.now()
  }, n.wbg.__wbg_onMessageSent_2c1ae08491ab9850 = function(t, e, s) {
    tt(t).onMessageSent(V(e), V(s))
  }, n.wbg.__wbg_onMessageExpired_25cd422e9328ee8a = function(t, e) {
    tt(t).onMessageExpired(V(e))
  }, n.wbg.__wbg_onStateChanged_3d54166d152ed7c7 = function(t, e) {
    tt(t).onStateChanged(V(e))
  }, n.wbg.__wbg_onTransactionsFound_bf3f4ff44694cccd = function(t, e, s) {
    tt(t).onTransactionsFound(V(e), V(s))
  }, n.wbg.__wbindgen_object_clone_ref = function(t) {
    const e = tt(t);
    return Z(e)
  }, n.wbg.__wbg_keys_7840ae453e408eab = function(t) {
    const e = Object.keys(tt(t));
    return Z(e)
  }, n.wbg.__wbindgen_boolean_get = function(t) {
    const e = tt(t);
    return typeof e == "boolean" ? e ? 1 : 0 : 2
  }, n.wbg.__wbg_get_3baa728f9d58d3f6 = function(t, e) {
    const s = tt(t)[e >>> 0];
    return Z(s)
  }, n.wbg.__wbg_isLocal_c89a0f06d00eb44d = function(t) {
    return tt(t).isLocal()
  }, n.wbg.__wbg_send_3a6112602f38b674 = function(t, e, s, r, i) {
    tt(t).send(yt(e, s), ln.__wrap(r), i !== 0)
  }, n.wbg.__wbg_send_bd8357f2e836b323 = function(t, e, s, r, i) {
    tt(t).send(yt(e, s), ln.__wrap(r), i !== 0)
  }, n.wbg.__wbg_send_1699c4cfc0bbee60 = function(t, e, s, r, i) {
    tt(t).send(rl(e, s), Kn.__wrap(r), i !== 0)
  }, n.wbg.__wbg_new_b85e72ed1bfd57f9 = function(t, e) {
    try {
      var s = {
          a: t,
          b: e
        },
        r = (o, l) => {
          const d = s.a;
          s.a = 0;
          try {
            return zl(d, s.b, o, l)
          } finally {
            s.a = d
          }
        };
      const i = new Promise(r);
      return Z(i)
    } finally {
      s.a = s.b = 0
    }
  }, n.wbg.__wbg_info_2ffec7e533c4f23d = function() {
    return Nt(function(t) {
      const e = tt(t).info();
      return Z(e)
    }, arguments)
  }, n.wbg.__wbg_sendMessage_8d09b0e227438eb5 = function() {
    return Nt(function(t, e, s) {
      const r = tt(t).sendMessage(yt(e, s));
      return Z(r)
    }, arguments)
  }, n.wbg.__wbg_getContractState_a832ca559ffd8b92 = function() {
    return Nt(function(t, e, s) {
      const r = tt(t).getContractState(yt(e, s));
      return Z(r)
    }, arguments)
  }, n.wbg.__wbg_getAccountsByCodeHash_c75072db79c08409 = function() {
    return Nt(function(t, e, s, r, i, o) {
      let l;
      i !== 0 && (l = yt(i, o).slice(), c.__wbindgen_free(i, o * 1, 1));
      const d = tt(t).getAccountsByCodeHash(yt(e, s), r, l);
      return Z(d)
    }, arguments)
  }, n.wbg.__wbg_getTransactions_eb09ca0ff4ac3072 = function() {
    return Nt(function(t, e, s, r, i, o) {
      const l = tt(t).getTransactions(yt(e, s), yt(r, i), o);
      return Z(l)
    }, arguments)
  }, n.wbg.__wbg_getTransaction_c4bdcf967b80c793 = function() {
    return Nt(function(t, e, s) {
      const r = tt(t).getTransaction(yt(e, s));
      return Z(r)
    }, arguments)
  }, n.wbg.__wbg_getDstTransaction_84b6163592386f1b = function() {
    return Nt(function(t, e, s) {
      const r = tt(t).getDstTransaction(yt(e, s));
      return Z(r)
    }, arguments)
  }, n.wbg.__wbg_getLatestKeyBlock_934ef847dfb13892 = function() {
    return Nt(function(t) {
      const e = tt(t).getLatestKeyBlock();
      return Z(e)
    }, arguments)
  }, n.wbg.__wbg_getCapabilities_b340b48cfe2a8c0d = function() {
    return Nt(function(t, e, s) {
      const r = tt(t).getCapabilities(yt(e, s));
      return Z(r)
    }, arguments)
  }, n.wbg.__wbg_getBlockchainConfig_c208c7ae79b4d1c0 = function() {
    return Nt(function(t, e, s) {
      const r = tt(t).getBlockchainConfig(yt(e, s));
      return Z(r)
    }, arguments)
  }, n.wbg.__wbindgen_memory = function() {
    const t = c.memory;
    return Z(t)
  }, n.wbg.__wbg_buffer_b7b08af79b0b0974 = function(t) {
    const e = tt(t).buffer;
    return Z(e)
  }, n.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9 = function(t, e, s) {
    const r = new Uint8Array(tt(t), e >>> 0, s >>> 0);
    return Z(r)
  }, n.wbg.__wbg_randomFillSync_dc1e9a60c158336d = function() {
    return Nt(function(t, e) {
      tt(t).randomFillSync(V(e))
    }, arguments)
  }, n.wbg.__wbg_subarray_7c2e3576afe181d1 = function(t, e, s) {
    const r = tt(t).subarray(e >>> 0, s >>> 0);
    return Z(r)
  }, n.wbg.__wbg_getRandomValues_37fa2ca9e4e07fab = function() {
    return Nt(function(t, e) {
      tt(t).getRandomValues(tt(e))
    }, arguments)
  }, n.wbg.__wbg_new_ea1883e1e5e86686 = function(t) {
    const e = new Uint8Array(tt(t));
    return Z(e)
  }, n.wbg.__wbg_set_d1e79e2388520f18 = function(t, e, s) {
    tt(t).set(tt(e), s >>> 0)
  }, n.wbg.__wbg_crypto_c48a774b022d20ac = function(t) {
    const e = tt(t).crypto;
    return Z(e)
  }, n.wbg.__wbg_process_298734cf255a885d = function(t) {
    const e = tt(t).process;
    return Z(e)
  }, n.wbg.__wbg_versions_e2e78e134e3e5d01 = function(t) {
    const e = tt(t).versions;
    return Z(e)
  }, n.wbg.__wbg_node_1cd7a5d853dbea79 = function(t) {
    const e = tt(t).node;
    return Z(e)
  }, n.wbg.__wbg_require_8f08ceecec0f4fee = function() {
    return Nt(function() {
      const t = module.require;
      return Z(t)
    }, arguments)
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof tt(t) == "function"
  }, n.wbg.__wbg_msCrypto_bcb970640f50a1e8 = function(t) {
    const e = tt(t).msCrypto;
    return Z(e)
  }, n.wbg.__wbg_newwithlength_ec548f448387c968 = function(t) {
    const e = new Uint8Array(t >>> 0);
    return Z(e)
  }, n.wbg.__wbg_get_224d16597dbbfd96 = function() {
    return Nt(function(t, e) {
      const s = Reflect.get(tt(t), tt(e));
      return Z(s)
    }, arguments)
  }, n.wbg.__wbg_self_3093d5d1f7bcb682 = function() {
    return Nt(function() {
      const t = self.self;
      return Z(t)
    }, arguments)
  }, n.wbg.__wbg_window_3bcfc4d31bc012f8 = function() {
    return Nt(function() {
      const t = window.window;
      return Z(t)
    }, arguments)
  }, n.wbg.__wbg_globalThis_86b222e13bdf32ed = function() {
    return Nt(function() {
      const t = globalThis.globalThis;
      return Z(t)
    }, arguments)
  }, n.wbg.__wbg_global_e5a3fe56f8be9485 = function() {
    return Nt(function() {
      const t = Ei.global;
      return Z(t)
    }, arguments)
  }, n.wbg.__wbg_newnoargs_76313bd6ff35d0f2 = function(t, e) {
    const s = new Function(yt(t, e));
    return Z(s)
  }, n.wbg.__wbg_call_1084a111329e68ce = function() {
    return Nt(function(t, e) {
      const s = tt(t).call(tt(e));
      return Z(s)
    }, arguments)
  }, n.wbg.__wbg_isArray_8364a5371e9737d8 = function(t) {
    return Array.isArray(tt(t))
  }, n.wbg.__wbg_call_89af060b4e1523f2 = function() {
    return Nt(function(t, e, s) {
      const r = tt(t).call(tt(e), tt(s));
      return Z(r)
    }, arguments)
  }, n.wbg.__wbg_set_eacc7d73fefaafdf = function() {
    return Nt(function(t, e, s) {
      return Reflect.set(tt(t), tt(e), tt(s))
    }, arguments)
  }, n.wbg.__wbg_stringify_bbf45426c92a6bf5 = function() {
    return Nt(function(t) {
      const e = JSON.stringify(tt(t));
      return Z(e)
    }, arguments)
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(yt(t, e))
  }, n.wbg.__wbindgen_debug_string = function(t, e) {
    const s = ys(tt(e)),
      r = Y(s, c.__wbindgen_malloc, c.__wbindgen_realloc),
      i = Q;
    D().setInt32(t + 4 * 1, i, !0), D().setInt32(t + 4 * 0, r, !0)
  }, n.wbg.__wbindgen_cb_drop = function(t) {
    const e = V(t).original;
    return e.cnt-- == 1 ? (e.a = 0, !0) : !1
  }, n.wbg.__wbg_then_95e6edc0f89b73b1 = function(t, e) {
    const s = tt(t).then(tt(e));
    return Z(s)
  }, n.wbg.__wbg_queueMicrotask_12a30234db4045d3 = function(t) {
    queueMicrotask(tt(t))
  }, n.wbg.__wbg_then_876bb3c633745cc6 = function(t, e, s) {
    const r = tt(t).then(tt(e), tt(s));
    return Z(r)
  }, n.wbg.__wbg_queueMicrotask_48421b3cc9052b68 = function(t) {
    const e = tt(t).queueMicrotask;
    return Z(e)
  }, n.wbg.__wbg_resolve_570458cb99d56a43 = function(t) {
    const e = Promise.resolve(tt(t));
    return Z(e)
  }, n.wbg.__wbindgen_closure_wrapper5481 = function(t, e, s) {
    const r = nl(t, e, 981, sl);
    return Z(r)
  }, n
}

function zr(n, t) {
  return c = n.exports, Wr.__wbindgen_wasm_module = t, $e = null, tn = null, c
}

function Hl(n) {
  if (c !== void 0) return c;
  typeof n < "u" && Object.getPrototypeOf(n) === Object.prototype ? {
    module: n
  } = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead");
  const t = Ur();
  n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n));
  const e = new WebAssembly.Instance(n, t);
  return zr(e, n)
}
async function Wr(n) {
  if (c !== void 0) return c;
  typeof n < "u" && Object.getPrototypeOf(n) === Object.prototype ? {
    module_or_path: n
  } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead"), typeof n > "u" && (n = new URL("" + new URL("nekoton_wasm_bg.CMYqFJ-k.wasm", import.meta.url).href, import.meta.url));
  const t = Ur();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const {
    instance: e,
    module: s
  } = await Wl(await n, t);
  return zr(e, s)
}
const Vl = Object.freeze(Object.defineProperty({
    __proto__: null,
    BytesQuery: Kn,
    ClockWithOffset: we,
    GenericContract: Bn,
    GqlConnection: Kr,
    JrpcConnection: Br,
    ProtoConnection: jr,
    ProxyConnection: xr,
    StringQuery: ln,
    Transport: De,
    UnsignedMessage: jn,
    checkAddress: al,
    codeToTvc: Al,
    computeStorageFee: _l,
    createExternalMessage: Ul,
    createExternalMessageWithoutSignature: xl,
    createRawExternalMessage: jl,
    decodeEvent: Ml,
    decodeInput: El,
    decodeOutput: Ol,
    decodeTransaction: $l,
    decodeTransactionEvents: Nl,
    default: Wr,
    ed25519_generateKeyPair: Rl,
    ed25519_sign: Fl,
    encodeInternalInput: Cl,
    encodeInternalMessage: Pl,
    executeLocal: pl,
    extendSignature: Kl,
    extractContractData: yl,
    extractPublicKey: vl,
    getBocHash: bl,
    getCodeSalt: Tl,
    getDataHash: Ll,
    getExpectedAddress: fl,
    initSync: Hl,
    makeFullAccountBoc: ll,
    mergeTvc: kl,
    packIntoCell: ml,
    parseFullAccountBoc: ul,
    parseFullAccountStateInit: dl,
    repackAddress: ol,
    runLocal: cl,
    setCodeSalt: Sl,
    splitTvc: Il,
    unpackContractFields: hl,
    unpackFromCell: wl,
    unpackInitData: gl,
    unpackTransactionTree: Dl,
    verifySignature: Bl
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Gl = fr(Vl);
var ie = {};
Object.defineProperty(ie, "__esModule", {
  value: !0
});
const Ql = {
  ensureNekotonLoaded: void 0,
  nekoton: void 0,
  fetch: void 0,
  fetchAgent: () => {},
  debugLog: void 0
};
ie.default = Ql;
var Hr = {},
  Yl = un;
un.default = un;
un.stable = Qr;
un.stableStringify = Qr;
var En = "[...]",
  Vr = "[Circular]",
  Fe = [],
  Le = [];

function Gr() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

function un(n, t, e, s) {
  typeof s > "u" && (s = Gr()), vs(n, "", 0, [], void 0, 0, s);
  var r;
  try {
    Le.length === 0 ? r = JSON.stringify(n, t, e) : r = JSON.stringify(n, Yr(t), e)
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; Fe.length !== 0;) {
      var i = Fe.pop();
      i.length === 4 ? Object.defineProperty(i[0], i[1], i[3]) : i[0][i[1]] = i[2]
    }
  }
  return r
}

function He(n, t, e, s) {
  var r = Object.getOwnPropertyDescriptor(s, e);
  r.get !== void 0 ? r.configurable ? (Object.defineProperty(s, e, {
    value: n
  }), Fe.push([s, e, t, r])) : Le.push([t, e, n]) : (s[e] = n, Fe.push([s, e, t]))
}

function vs(n, t, e, s, r, i, o) {
  i += 1;
  var l;
  if (typeof n == "object" && n !== null) {
    for (l = 0; l < s.length; l++)
      if (s[l] === n) {
        He(Vr, n, t, r);
        return
      } if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      He(En, n, t, r);
      return
    }
    if (typeof o.edgesLimit < "u" && e + 1 > o.edgesLimit) {
      He(En, n, t, r);
      return
    }
    if (s.push(n), Array.isArray(n))
      for (l = 0; l < n.length; l++) vs(n[l], l, l, s, n, i, o);
    else {
      var d = Object.keys(n);
      for (l = 0; l < d.length; l++) {
        var p = d[l];
        vs(n[p], p, l, s, n, i, o)
      }
    }
    s.pop()
  }
}

function Jl(n, t) {
  return n < t ? -1 : n > t ? 1 : 0
}

function Qr(n, t, e, s) {
  typeof s > "u" && (s = Gr());
  var r = As(n, "", 0, [], void 0, 0, s) || n,
    i;
  try {
    Le.length === 0 ? i = JSON.stringify(r, t, e) : i = JSON.stringify(r, Yr(t), e)
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; Fe.length !== 0;) {
      var o = Fe.pop();
      o.length === 4 ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2]
    }
  }
  return i
}

function As(n, t, e, s, r, i, o) {
  i += 1;
  var l;
  if (typeof n == "object" && n !== null) {
    for (l = 0; l < s.length; l++)
      if (s[l] === n) {
        He(Vr, n, t, r);
        return
      } try {
      if (typeof n.toJSON == "function") return
    } catch {
      return
    }
    if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      He(En, n, t, r);
      return
    }
    if (typeof o.edgesLimit < "u" && e + 1 > o.edgesLimit) {
      He(En, n, t, r);
      return
    }
    if (s.push(n), Array.isArray(n))
      for (l = 0; l < n.length; l++) As(n[l], l, l, s, n, i, o);
    else {
      var d = {},
        p = Object.keys(n).sort(Jl);
      for (l = 0; l < p.length; l++) {
        var f = p[l];
        As(n[f], f, l, s, n, i, o), d[f] = n[f]
      }
      if (typeof r < "u") Fe.push([r, t, n]), r[t] = d;
      else return d
    }
    s.pop()
  }
}

function Yr(n) {
  return n = typeof n < "u" ? n : function(t, e) {
      return e
    },
    function(t, e) {
      if (Le.length > 0)
        for (var s = 0; s < Le.length; s++) {
          var r = Le[s];
          if (r[1] === t && r[0] === e) {
            e = r[2], Le.splice(s, 1);
            break
          }
        }
      return n.call(this, t, e)
    }
}
var ee = {};
Object.defineProperty(ee, "__esModule", {
  value: !0
});
ee.getUniqueId = ee.convertVersionToInt32 = ee.convertToAddressObject = ee.SafeEventEmitter = void 0;
const Xs = Ce,
  Xl = Mi();

function Zs(n, t, e) {
  try {
    Reflect.apply(n, t, e)
  } catch (s) {
    setTimeout(() => {
      throw s
    })
  }
}

function Zl(n) {
  const t = n.length,
    e = new Array(t);
  for (let s = 0; s < t; s += 1) e[s] = n[s];
  return e
}
class ql extends Xl.EventEmitter {
  emit(t, ...e) {
    let s = t === "error";
    const r = this._events;
    if (r !== void 0) s = s && r.error === void 0;
    else if (!s) return !1;
    if (s) {
      let o;
      if (e.length > 0 && ([o] = e), o instanceof Error) throw o;
      const l = new Error(`Unhandled error.${o?` (${o.message})`:""}`);
      throw l.context = o, l
    }
    const i = r[t];
    if (i === void 0) return !1;
    if (typeof i == "function") Zs(i, this, e);
    else {
      const o = i.length,
        l = Zl(i);
      for (let d = 0; d < o; d += 1) Zs(l[d], this, e)
    }
    return !0
  }
}
ee.SafeEventEmitter = ql;

function tu(n) {
  if (typeof n == "object" && !(0, Xs.isAddressObject)(n)) throw new Error("Invalid address object");
  return typeof n == "object" ? n : new Xs.Address(n)
}
ee.convertToAddressObject = tu;
const eu = n => {
  const t = n.split(".");
  if (t.length !== 3) throw new Error("Received invalid version string");
  t.forEach(r => {
    if (~~r > 999) throw new Error(`Version string invalid, ${r} is too large`)
  });
  let e = 1e6,
    s = 0;
  for (let r = 0; r < 3; r++) s += ~~t[r] * e, e /= 1e3;
  return s
};
ee.convertVersionToInt32 = eu;
const Jr = 4294967295;
let is = Math.floor(Math.random() * Jr);

function nu() {
  return is = (is + 1) % Jr, is
}
ee.getUniqueId = nu;
var An = {},
  Te = {};
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.Mutex = Te.Semaphore = void 0;

function kn(n) {
  if (typeof n != "function") throw new TypeError(n + " is not a function");
  return n
}

function qs(n) {
  const t = document.createTextNode("");
  let e, s, r = 0,
    i = 0;
  return new n(function() {
      let o;
      if (e) s && (e = s.slice(i).concat(e));
      else {
        if (!s) return;
        e = s
      }
      if (s = e, e = null, i = 0, typeof s == "function") {
        o = s, s = null, o();
        return
      }
      for (t.data = r = ++r % 2; i < s.length;) o = s[i], i++, i === s.length && (s = null), o()
    }).observe(t, {
      characterData: !0
    }),
    function(o) {
      if (kn(o), e) {
        typeof e == "function" ? e = [e, o] : e.push(o);
        return
      }
      e = o, t.data = r = ++r % 2
    }
}
const su = function() {
  if (typeof queueMicrotask == "function") return function(n) {
    queueMicrotask(kn(n))
  };
  if (typeof document == "object" && document) {
    if (typeof MutationObserver == "function") return qs(MutationObserver);
    if (typeof window.WebKitMutationObserver == "function") return qs(window.WebKitMutationObserver)
  }
  if (typeof setImmediate == "function") return function(n) {
    setImmediate(kn(n))
  };
  if (typeof setTimeout == "function" || typeof setTimeout == "object") return function(n) {
    setTimeout(kn(n), 0)
  };
  throw new Error("No `nextTick` implementation found")
}();
class Xr {
  constructor(t) {
    this.tasks = [], this.count = t
  }
  sched() {
    if (this.count > 0 && this.tasks.length > 0) {
      this.count--;
      let t = this.tasks.shift();
      if (t === void 0) throw "Unexpected undefined value in tasks list";
      t()
    }
  }
  acquire() {
    return new Promise((t, e) => {
      const s = () => {
        let r = !1;
        t(() => {
          r || (r = !0, this.count++, this.sched())
        })
      };
      this.tasks.push(s), su(this.sched.bind(this))
    })
  }
  use(t) {
    return this.acquire().then(e => t().then(s => (e(), s)).catch(s => {
      throw e(), s
    }))
  }
}
Te.Semaphore = Xr;
class ru extends Xr {
  constructor() {
    super(1)
  }
}
Te.Mutex = ru;
var xn = {},
  iu = rt && rt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(xn, "__esModule", {
  value: !0
});
xn.GqlSocket = void 0;
const ks = iu(ie);
class dn {
  async connect(t) {
    class e {
      constructor(r) {
        this.nextLatencyDetectionTime = 0, this.local = r.local === !0, this.maxLatency = r.maxLatency || 6e4, this.latencyDetectionInterval = r.latencyDetectionInterval || 6e4, this.endpoints = r.endpoints.map(dn.expandAddress), this.endpoints.length == 1 && (this.currentEndpoint = this.endpoints[0], this.nextLatencyDetectionTime = Number.MAX_VALUE)
      }
      isLocal() {
        return this.local
      }
      send(r, i, o) {
        (async () => {
          const l = Date.now();
          try {
            let d;
            this.currentEndpoint != null && l < this.nextLatencyDetectionTime ? d = this.currentEndpoint : this.resolutionPromise != null ? (d = await this.resolutionPromise, delete this.resolutionPromise) : (delete this.currentEndpoint, this.resolutionPromise = this._selectQueryingEndpoint().then(f => (this.currentEndpoint = f, this.nextLatencyDetectionTime = Date.now() + this.latencyDetectionInterval, f)), d = await this.resolutionPromise, delete this.resolutionPromise);
            const p = await fetch(d.url, {
              method: "post",
              headers: au,
              body: r,
              agent: d.agent
            }).then(f => f.text());
            i.onReceive(p)
          } catch (d) {
            i.onError(d)
          }
        })()
      }
      async _selectQueryingEndpoint() {
        const r = this.maxLatency,
          i = this.endpoints.length;
        for (let o = 0; o < 5; ++o) {
          let l;
          const d = new Promise((P, y) => {
            l = {
              resolve: S => P(S),
              reject: () => y(void 0)
            }
          });
          let p = 0,
            f;
          for (const P of this.endpoints) dn.checkLatency(P).then(y => {
            if (++p, y !== void 0 && y <= r) return l.resolve(P);
            (f === void 0 || f.latency === void 0 || y !== void 0 && y < f.latency) && (f = {
              endpoint: P,
              latency: y
            }), p >= i && ((f == null ? void 0 : f.latency) !== void 0 ? l.resolve(f.endpoint) : l.reject())
          });
          try {
            return await d
          } catch {
            let y;
            const S = new Promise(A => {
              y = () => A()
            });
            setTimeout(() => y(), Math.min(100 * o, 5e3)), await S
          }
        }
        throw new Error("Not available endpoint found")
      }
    }
    return new ks.default.nekoton.GqlConnection(new e(t))
  }
  static async checkLatency(t) {
    const e = await fetch(`${t.url}?query=%7Binfo%7Bversion%20time%20latency%7D%7D`, {
      method: "get",
      agent: t.agent
    }).then(o => o.json()).catch(o => {
      ks.default.debugLog(o)
    });
    if (typeof e != "object" || e == null) return;
    const s = e.data;
    if (typeof s != "object" || s == null) return;
    const r = s.info;
    if (typeof r != "object" || r == null) return;
    const i = r.latency;
    if (typeof i == "number") return i
  }
}
xn.GqlSocket = dn;
dn.expandAddress = n => {
  const t = n.lastIndexOf("/");
  n = t < 0 ? n : n.substring(0, t);
  let e;
  return n.startsWith("http://") || n.startsWith("https://") ? e = `${n}/graphql` : ["localhost", "127.0.0.1"].indexOf(n) >= 0 ? e = `http://${n}/graphql` : e = `https://${n}/graphql`, {
    url: e,
    agent: ks.default.fetchAgent(e)
  }
};
const au = {
  "Content-Type": "application/json"
};
var Un = {},
  ou = rt && rt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Un, "__esModule", {
  value: !0
});
Un.JrpcSocket = void 0;
const as = ou(ie);
class cu {
  async connect(t) {
    class e {
      constructor(r) {
        this.endpoint = r.endpoint, this.endpointAgent = as.default.fetchAgent(this.endpoint), this.alternativeEndpoint = r.alternativeEndpoint != null ? r.alternativeEndpoint : r.endpoint, this.alternativeEndpointAgent = as.default.fetchAgent(this.alternativeEndpoint)
      }
      send(r, i, o) {
        (async () => {
          try {
            const l = o ? this.endpoint : this.alternativeEndpoint,
              d = o ? this.endpointAgent : this.alternativeEndpointAgent,
              p = await fetch(l, {
                method: "post",
                headers: lu,
                body: r,
                agent: d
              }).then(f => f.text());
            i.onReceive(p)
          } catch (l) {
            i.onError(l)
          }
        })()
      }
    }
    return new as.default.nekoton.JrpcConnection(new e(t))
  }
}
Un.JrpcSocket = cu;
const lu = {
  "Content-Type": "application/json"
};
var zn = {},
  uu = rt && rt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(zn, "__esModule", {
  value: !0
});
zn.ProtoSocket = void 0;
const tr = uu(ie);
class du {
  async connect(t) {
    class e {
      constructor(r) {
        this.endpoint = r.endpoint, this.endpointAgent = tr.default.fetchAgent(this.endpoint)
      }
      send(r, i, o) {
        (async () => {
          try {
            const l = await fetch(this.endpoint, {
              method: "post",
              headers: _u,
              body: new Uint8Array(r),
              agent: this.endpointAgent
            }).then(d => d.arrayBuffer());
            i.onReceive(new Uint8Array(l))
          } catch (l) {
            i.onError(l)
          }
        })()
      }
    }
    return new tr.default.nekoton.ProtoConnection(new e(t))
  }
}
zn.ProtoSocket = du;
const _u = {
  "Content-Type": "application/x-protobuf"
};
(function(n) {
  var t = rt && rt.__importDefault || function(h) {
    return h && h.__esModule ? h : {
      default: h
    }
  };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.ConnectionController = n.createConnectionController = n.ConnectionError = n.checkConnection = n.NETWORK_PRESETS = void 0;
  const e = Te,
    s = t(ie),
    r = xn,
    i = Un,
    o = zn;
  n.NETWORK_PRESETS = {
    mainnetJrpc: {
      id: 1,
      type: "jrpc",
      data: {
        endpoint: "https://jrpc.everwallet.net/rpc"
      }
    },
    fld: {
      id: 10,
      type: "graphql",
      data: {
        endpoints: ["gql.custler.net"],
        local: !1
      }
    },
    local: {
      id: 31337,
      type: "graphql",
      data: {
        endpoints: ["127.0.0.1"],
        local: !0
      }
    }
  };
  const l = h => {
    switch (h) {
      case 1:
        return "mainnet";
      case 2:
        return "testnet";
      case 10:
        return "fld";
      case 31337:
        return "localnet";
      default:
        return `network${h}`
    }
  };

  function d(h) {
    if (typeof h == "string") {
      const m = n.NETWORK_PRESETS[h];
      if (m == null) throw new Error(`Target preset id not found: ${h}`);
      return m
    } else return h
  }
  async function p(h) {
    const m = d(h),
      B = new s.default.nekoton.ClockWithOffset;
    try {
      const w = new y(B);
      await w._connect(m), w._initializedTransport != null && S(w._initializedTransport)
    } catch (w) {
      throw new f(m, w.toString())
    } finally {
      B.free()
    }
  }
  n.checkConnection = p;
  class f extends Error {
    constructor(m, B) {
      super(B), this.params = m
    }
  }
  n.ConnectionError = f;
  async function P(h, m, B = !1) {
    const w = d(m);
    for (;;) try {
      const v = new y(h);
      return await v.startSwitchingNetwork(w).then(b => b.switch()), s.default.debugLog(`Successfully connected to ${w.group}`), v
    } catch (v) {
      if (B) console.error("Connection failed:", v), await new Promise(b => {
        setTimeout(() => b(), 5e3)
      }), s.default.debugLog("Restarting connection process");
      else throw v
    }
  }
  n.createConnectionController = P;
  class y {
    constructor(m) {
      this._networkMutex = new e.Mutex, this._acquiredTransportCounter = 0, this._clock = m
    }
    async acquire() {
      return A(this._initializedTransport), await this._acquireTransport(), {
        transport: this._initializedTransport,
        release: () => this._releaseTransport()
      }
    }
    async use(m) {
      return A(this._initializedTransport), await this._acquireTransport(), m(this._initializedTransport).finally(() => {
        this._releaseTransport()
      })
    }
    async startSwitchingNetwork(m) {
      var B;
      class w {
        constructor(R, j, x) {
          this._controller = R, this._release = j, this._params = x
        }
        async switch () {
          await this._controller._connect(this._params).finally(() => this._release())
        }
      }(B = this._cancelTestTransport) === null || B === void 0 || B.call(this);
      const v = await this._networkMutex.acquire();
      return new w(this, v, m)
    }
    get initializedTransport() {
      return this._initializedTransport
    }
    async _connect(m) {
      this._initializedTransport != null && S(this._initializedTransport), this._initializedTransport = void 0;
      let B;
      (function(v) {
        v[v.DONE = 0] = "DONE", v[v.CANCELLED = 1] = "CANCELLED"
      })(B || (B = {}));
      const w = async ({
        data: {
          transport: v
        }
      }, b) => new Promise((R, j) => {
        this._cancelTestTransport = () => R(B.CANCELLED), b ? v.getAccountsByCodeHash("4e92716de61d456e58f16e4e867e3e93a7548321eace86301b51c8b80ca6239b", 1).then(() => R(B.DONE)).catch(x => j(x)) : v.getFullContractState("-1:0000000000000000000000000000000000000000000000000000000000000000").then(() => R(B.DONE)).catch(x => j(x)), setTimeout(() => j(new Error("Connection timeout")), 1e4)
      }).finally(() => this._cancelTestTransport = void 0);
      try {
        const v = m.group != null ? m.group : l(m.id),
          {
            local: b,
            transportData: R
          } = await (async () => {
            switch (m.type) {
              case "graphql": {
                const j = new r.GqlSocket,
                  x = await j.connect(m.data),
                  u = s.default.nekoton.Transport.fromGqlConnection(x, this._clock),
                  _ = {
                    id: m.id,
                    group: v,
                    type: "graphql",
                    data: {
                      socket: j,
                      connection: x,
                      transport: u
                    }
                  };
                return {
                  local: m.data.local === !0,
                  transportData: _
                }
              }
              case "jrpc": {
                const j = new i.JrpcSocket,
                  x = await j.connect(m.data),
                  u = s.default.nekoton.Transport.fromJrpcConnection(x, this._clock);
                return {
                  local: !1,
                  transportData: {
                    id: m.id,
                    group: v,
                    type: "jrpc",
                    data: {
                      socket: j,
                      connection: x,
                      transport: u
                    }
                  }
                }
              }
              case "proto": {
                const j = new o.ProtoSocket,
                  x = await j.connect(m.data),
                  u = s.default.nekoton.Transport.fromProtoConnection(x, this._clock);
                return {
                  local: !1,
                  transportData: {
                    id: m.id,
                    group: v,
                    type: "proto",
                    data: {
                      socket: j,
                      connection: x,
                      transport: u
                    }
                  }
                }
              }
              case "proxy": {
                const j = m.data.connectionFactory.create(this._clock);
                return {
                  local: !0,
                  transportData: {
                    id: m.id,
                    group: v,
                    type: "proxy",
                    data: {
                      connection: j,
                      transport: s.default.nekoton.Transport.fromProxyConnection(j, this._clock)
                    }
                  }
                }
              }
            }
          })();
        try {
          if (await w(R, b) == B.CANCELLED) {
            S(R);
            return
          }
        } catch (j) {
          throw S(R), j
        }
        this._initializedTransport = R
      } catch (v) {
        throw new Error(`Failed to create connection: ${v.toString()}`)
      }
    }
    async _acquireTransport() {
      s.default.debugLog("_acquireTransport"), this._acquiredTransportCounter > 0 ? (s.default.debugLog("_acquireTransport -> increase"), this._acquiredTransportCounter += 1) : (this._acquiredTransportCounter = 1, this._release != null ? console.warn("mutex is already acquired") : (s.default.debugLog("_acquireTransport -> await"), this._release = await this._networkMutex.acquire(), s.default.debugLog("_acquireTransport -> create")))
    }
    _releaseTransport() {
      var m;
      s.default.debugLog("_releaseTransport"), this._acquiredTransportCounter -= 1, this._acquiredTransportCounter <= 0 && (s.default.debugLog("_releaseTransport -> release"), (m = this._release) === null || m === void 0 || m.call(this), this._release = void 0)
    }
  }
  n.ConnectionController = y;

  function S(h) {
    h.data.transport.free(), h.data.connection.free()
  }

  function A(h) {
    if (h == null) throw new Error("Connection is not initialized")
  }
})(An);
var Wn = {},
  Hn = {},
  pu = rt && rt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Hn, "__esModule", {
  value: !0
});
Hn.ContractSubscription = void 0;
const fu = Te,
  Zt = pu(ie);
class Os {
  static async subscribe(t, e, s) {
    const {
      transport: {
        data: {
          connection: r,
          transport: i
        }
      },
      release: o
    } = await t.acquire();
    try {
      const l = await i.subscribeToGenericContract(e, s);
      if (l == null) throw new Error(`Failed to subscribe to contract: ${e}`);
      return new Os(r, o, e, l)
    } catch (l) {
      throw o(), l
    }
  }
  constructor(t, e, s, r) {
    this._contractMutex = new fu.Mutex, this._pollingInterval = bu, this._isRunning = !1, this._skipIteration = !1, this._connection = t, this._address = s, this._contract = r, this._releaseTransport = e, this._currentPollingMethod = r.pollingMethod
  }
  setPollingInterval(t) {
    this._pollingInterval = t
  }
  async start() {
    if (this._releaseTransport == null) throw new Error("Contract subscription must not be started after being closed");
    this._loopPromise && (Zt.default.debugLog("ContractSubscription -> awaiting loop promise"), await this._loopPromise), Zt.default.debugLog("ContractSubscription -> loop started"), this._loopPromise = (async () => {
      const t = !(this._connection instanceof Zt.default.nekoton.GqlConnection),
        e = this._connection instanceof Zt.default.nekoton.ProxyConnection;
      this._isRunning = !0;
      let s = this._currentPollingMethod;
      for (; this._isRunning;) {
        this._skipIteration = !1;
        const r = s != this._currentPollingMethod;
        if (s = this._currentPollingMethod, t || this._currentPollingMethod == "manual") {
          this._currentBlockId = void 0, Zt.default.debugLog("ContractSubscription -> manual -> waiting begins");
          const i = this._currentPollingMethod == "manual" || e ? this._pollingInterval : gu;
          if (await new Promise(o => {
              const l = setTimeout(() => {
                this._refreshTimer = void 0, o()
              }, i);
              this._refreshTimer = [l, o]
            }), Zt.default.debugLog("ContractSubscription -> manual -> waiting ends"), this._skipIteration) continue;
          if (!this._isRunning) break;
          Zt.default.debugLog("ContractSubscription -> manual -> refreshing begins");
          try {
            this._currentPollingMethod = await this._contractMutex.use(async () => (await this._contract.refresh(), this._contract.pollingMethod))
          } catch (o) {
            Zt.default.debugLog(`Error during account refresh (${this._address})`, o)
          }
          Zt.default.debugLog("ContractSubscription -> manual -> refreshing ends")
        } else {
          const i = this._connection;
          Zt.default.debugLog("ContractSubscription -> reliable start"), r && this._suggestedBlockId != null && (this._currentBlockId = this._suggestedBlockId), this._suggestedBlockId = void 0;
          let o;
          if (this._currentBlockId == null) {
            Zt.default.debugLog("ContractSubscription -> starting reliable connection with unknown block");
            try {
              const l = await i.getLatestBlock(this._address);
              this._currentBlockId = l.id, o = this._currentBlockId
            } catch (l) {
              Zt.default.debugLog(`Failed to get latest block for ${this._address}`, l);
              continue
            }
          } else try {
            o = await i.waitForNextBlock(this._currentBlockId, this._address, hu)
          } catch {
            Zt.default.debugLog(`Failed to wait for next block for ${this._address}`);
            continue
          }
          try {
            this._currentPollingMethod = await this._contractMutex.use(async () => (await this._contract.handleBlock(o), this._contract.pollingMethod)), this._currentBlockId = o
          } catch (l) {
            Zt.default.debugLog(`Failed to handle block for ${this._address}`, l)
          }
        }
      }
      Zt.default.debugLog("ContractSubscription -> loop finished")
    })()
  }
  skipRefreshTimer(t) {
    var e, s;
    t != null && (this._currentPollingMethod = t, this._skipIteration = !0), clearTimeout((e = this._refreshTimer) === null || e === void 0 ? void 0 : e[0]), (s = this._refreshTimer) === null || s === void 0 || s[1](), this._refreshTimer = void 0
  }
  async pause() {
    this._isRunning && (this._isRunning = !1, this.skipRefreshTimer(), await this._loopPromise, this._loopPromise = void 0, this._currentPollingMethod = await this._contractMutex.use(async () => this._contract.pollingMethod), this._currentBlockId = void 0, this._suggestedBlockId = void 0)
  }
  async stop() {
    var t;
    await this.pause(), this._contract.free(), (t = this._releaseTransport) === null || t === void 0 || t.call(this), this._releaseTransport = void 0
  }
  async prepareReliablePolling() {
    try {
      this._connection instanceof Zt.default.nekoton.GqlConnection && (this._suggestedBlockId = (await this._connection.getLatestBlock(this._address)).id)
    } catch (t) {
      throw new Error(`Failed to prepare reliable polling: ${t.toString()}`)
    }
  }
  async use(t) {
    const e = await this._contractMutex.acquire();
    return t(this._contract).then(s => (e(), s)).catch(s => {
      throw e(), s
    })
  }
}
Hn.ContractSubscription = Os;
const hu = 60,
  gu = 2e3,
  bu = 6e4;
Object.defineProperty(Wn, "__esModule", {
  value: !0
});
Wn.SubscriptionController = void 0;
const mu = Te,
  er = ee,
  wu = Hn,
  yu = 1e4;
class vu {
  constructor(t, e) {
    this._subscriptions = new Map, this._subscriptionsMutex = new mu.Mutex, this._sendMessageRequests = new Map, this._subscriptionStates = new Map, this._pollingInterval = yu, this._connectionController = t, this._notify = e
  }
  setPollingInterval(t) {
    this._pollingInterval = t
  }
  async sendMessageLocally(t, e, s) {
    const r = (0, er.getUniqueId)();
    try {
      await this.subscribeToContract(t, {
        state: !0
      }, r);
      const i = this._subscriptions.get(t);
      if (i == null) throw new Error("Failed to subscribe to contract");
      return await i.use(o => o.sendMessageLocally(e, s))
    } finally {
      this.unsubscribeFromContract(t, r).catch(console.error)
    }
  }
  sendMessage(t, e) {
    const s = e.hash;
    let r = this._sendMessageRequests.get(t);
    if (r == null) r = new Map, this._sendMessageRequests.set(t, r);
    else if (r.has(s)) throw new Error(`Trying to send a duplicate message with id '${s}'`);
    const i = (0, er.getUniqueId)();
    return new Promise((o, l) => {
      r.set(s, {
        resolve: o,
        reject: l
      }), this.subscribeToContract(t, {
        state: !0
      }, i).then(async () => {
        const d = this._subscriptions.get(t);
        if (d == null) throw new Error("Failed to subscribe to contract");
        await d.prepareReliablePolling(), await d.use(async p => {
          await p.sendMessage(e), d.skipRefreshTimer(p.pollingMethod)
        })
      }).catch(d => this._rejectMessageRequest(t, s, d)).finally(() => {
        this.unsubscribeFromContract(t, i).catch(console.error)
      })
    })
  }
  async subscribeToContract(t, e, s) {
    return this._subscriptionsMutex.use(async () => {
      const r = f => {
          const P = {
            ...f
          };
          return Object.keys(P).map(y => {
            if (y !== "state" && y !== "transactions") throw new Error(`Unknown subscription topic: ${y}`);
            const S = e[y];
            if (typeof S == "boolean") P[y] = S;
            else {
              if (S == null) return;
              throw new Error(`Unknown subscription topic value ${y}: ${S}`)
            }
          }), P
        },
        i = this._subscriptionStates.get(t) || Au();
      let o;
      if (s == null) o = r(i.client);
      else {
        const f = i.internal.get(s);
        f != null ? (o = r(f), nr(o) && i.internal.delete(s)) : o = r({
          state: !1,
          transactions: !1
        })
      }
      const l = {
        ...o
      };
      for (const f of i.internal.values()) l.state || (l.state = f.state), l.transactions || (l.transactions = f.transactions);
      if (nr(l)) return this._subscriptionStates.delete(t), await this._tryUnsubscribe(t), {
        ...l
      };
      let d = this._subscriptions.get(t);
      const p = d == null;
      return d == null && (d = await this._createSubscription(t)), s == null ? i.client = o : i.internal.set(s, o), this._subscriptionStates.set(t, i), p && await d.start(), {
        ...o
      }
    })
  }
  async unsubscribeFromContract(t, e) {
    await this.subscribeToContract(t, {
      state: !1,
      transactions: !1
    }, e)
  }
  async unsubscribeFromAllContracts(t) {
    for (const e of this._subscriptions.keys()) await this.unsubscribeFromContract(e, t)
  }
  get subscriptionStates() {
    const t = {};
    for (const [e, s] of this._subscriptionStates.entries()) t[e] = {
      ...s.client
    };
    return t
  }
  async _createSubscription(t) {
    class e {
      constructor(o, l) {
        this._enabled = !1, this._address = o, this._controller = l
      }
      enableNotifications() {
        this._enabled = !0
      }
      onMessageExpired(o) {
        this._controller._resolveMessageRequest(this._address, o.messageHash, void 0).catch(console.error)
      }
      onMessageSent(o, l) {
        this._controller._resolveMessageRequest(this._address, o.messageHash, l).catch(console.error)
      }
      onStateChanged(o) {
        this._enabled && this._controller._notifyStateChanged(this._address, o)
      }
      onTransactionsFound(o, l) {
        this._enabled && this._controller._notifyTransactionsFound(this._address, o, l)
      }
    }
    const s = new e(t, this),
      r = await wu.ContractSubscription.subscribe(this._connectionController, t, s);
    return r.setPollingInterval(this._pollingInterval), s.enableNotifications(), this._subscriptions.set(t, r), r
  }
  async _tryUnsubscribe(t) {
    const e = this._subscriptionStates.get(t),
      s = this._sendMessageRequests.get(t);
    if (e == null && ((s == null ? void 0 : s.size) || 0) == 0) {
      const r = this._subscriptions.get(t);
      this._subscriptions.delete(t), await (r == null ? void 0 : r.stop())
    }
  }
  async _rejectMessageRequest(t, e, s) {
    this._deleteMessageRequestAndGetCallback(t, e).reject(s), await this._subscriptionsMutex.use(async () => this._tryUnsubscribe(t))
  }
  async _resolveMessageRequest(t, e, s) {
    this._deleteMessageRequestAndGetCallback(t, e).resolve(s), await this._subscriptionsMutex.use(async () => this._tryUnsubscribe(t))
  }
  _notifyStateChanged(t, e) {
    const s = this._subscriptionStates.get(t);
    s != null && s.client.state && this._notify("contractStateChanged", {
      address: t,
      state: e
    })
  }
  _notifyTransactionsFound(t, e, s) {
    const r = this._subscriptionStates.get(t);
    r != null && r.client.transactions && this._notify("transactionsFound", {
      address: t,
      transactions: e,
      info: s
    })
  }
  _deleteMessageRequestAndGetCallback(t, e) {
    var s;
    const r = (s = this._sendMessageRequests.get(t)) === null || s === void 0 ? void 0 : s.get(e);
    if (!r) throw new Error(`SendMessage request with id '${e}' not found`);
    return this._deleteMessageRequest(t, e), r
  }
  _deleteMessageRequest(t, e) {
    const s = this._sendMessageRequests.get(t);
    s && (s.delete(e), s.size == 0 && this._sendMessageRequests.delete(t))
  }
}
Wn.SubscriptionController = vu;
const Au = () => ({
    internal: new Map,
    client: {
      state: !1,
      transactions: !1
    }
  }),
  nr = n => !n.state && !n.transactions;
var Is = {},
  Vn = {};
Object.defineProperty(Vn, "__esModule", {
  value: !0
});
Vn.GiverAccount = void 0;
const ku = ee;
class _n {
  static fromVersion(t) {
    let e;
    switch (t) {
      case 2:
        e = "0:ece57bcc6c530283becbbd8a3b24d3c5987cdddc3c8b7b33be6e4a6312490415";
        break;
      case 3:
        e = "0:78fbd6980c10cf41401b32e9b51810415e7578b52403af80dae68ddf99714498";
        break;
      default:
        throw new Error("Unknown version")
    }
    return new _n({
      address: e,
      publicKey: _n.GIVER_KEY_PAIR.publicKey
    })
  }
  constructor(t) {
    this.address = (0, ku.convertToAddressObject)(t.address), this.publicKey = t.publicKey
  }
  async fetchPublicKey(t) {
    return this.publicKey
  }
  async prepareMessage(t, e) {
    if (t.payload != null) throw new Error("Giver contract does not support payload in an internal message");
    if (t.stateInit != null) throw new Error("Giver contract does not support state init in an internal message");
    const s = await e.getSigner(this.publicKey);
    return await e.createExternalMessage({
      address: this.address,
      signer: s,
      timeout: t.timeout,
      abi: Iu,
      method: "sendTransaction",
      params: {
        dest: t.recipient,
        value: t.amount,
        bounce: t.bounce
      },
      signatureId: t.signatureId
    })
  }
}
Vn.GiverAccount = _n;
_n.GIVER_KEY_PAIR = {
  secretKey: "172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3",
  publicKey: "2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16"
};
const Iu = `{
  "ABI version": 2,
  "header": ["time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"}
    ],
    "outputs": []
  }],
  "events": []
}`;
var Ge = {};
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.MsigAccount = Ge.GenericAccount = void 0;
const Su = ee;
class Zr {
  constructor(t) {
    this.address = (0, Su.convertToAddressObject)(t.address), this.abi = typeof t.abi == "string" ? t.abi : JSON.stringify(t.abi), this.prepareMessageImpl = t.prepareMessage, this.publicKey = t.publicKey
  }
  async fetchPublicKey(t) {
    return this.publicKey != null ? this.publicKey : (this.publicKey = await t.fetchPublicKey(this.address), this.publicKey)
  }
  async prepareMessage(t, e) {
    const s = await this.fetchPublicKey(e),
      r = await e.getSigner(s),
      {
        method: i,
        params: o,
        stateInit: l
      } = await this.prepareMessageImpl(t, e);
    return e.createExternalMessage({
      address: this.address,
      signer: r,
      timeout: t.timeout,
      abi: this.abi,
      method: i,
      params: o,
      stateInit: l,
      signatureId: t.signatureId
    })
  }
}
Ge.GenericAccount = Zr;
class Tu extends Zr {
  constructor(t) {
    const e = t.type === "multisig2";
    super({
      address: t.address,
      publicKey: t.publicKey,
      abi: e ? Pu : Cu,
      prepareMessage: async (s, r) => {
        if (!e && s.stateInit != null) throw new Error("Old multisig contract does not support state init in an internal message");
        const i = s.payload ? r.encodeInternalInput(s.payload) : "";
        return e && s.stateInit != null ? {
          method: "submitTransaction",
          params: {
            dest: s.recipient,
            value: s.amount,
            bounce: s.bounce,
            allBalance: !1,
            payload: i,
            stateInit: s.stateInit
          }
        } : {
          method: "sendTransaction",
          params: {
            dest: s.recipient,
            value: s.amount,
            bounce: s.bounce,
            flags: 3,
            payload: i
          }
        }
      }
    })
  }
}
Ge.MsigAccount = Tu;
const Cu = `{
  "ABI version": 2,
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"flags","type":"uint8"},
      {"name":"payload","type":"cell"}
    ],
    "outputs": []
  }],
  "events": []
}`,
  Pu = `{
  "ABI version": 2,
  "version": "2.3",
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"flags","type":"uint8"},
      {"name":"payload","type":"cell"}
    ],
    "outputs": []
  }, {
    "name": "submitTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"allBalance","type":"bool"},
      {"name":"payload","type":"cell"},
      {"name":"stateInit","type":"optional(cell)"}
    ],
    "outputs": []
  }],
  "events": []
}`;
var Gn = {},
  Eu = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  os = Math.ceil,
  ce = Math.floor,
  re = "[BigNumber Error] ",
  sr = re + "Number primitive has more than 15 significant digits: ",
  pe = 1e14,
  lt = 14,
  cs = 9007199254740991,
  ls = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  Se = 1e7,
  Wt = 1e9;

function qr(n) {
  var t, e, s, r = w.prototype = {
      constructor: w,
      toString: null,
      valueOf: null
    },
    i = new w(1),
    o = 20,
    l = 4,
    d = -7,
    p = 21,
    f = -1e7,
    P = 1e7,
    y = !1,
    S = 1,
    A = 0,
    h = {
      prefix: "",
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ",",
      decimalSeparator: ".",
      fractionGroupSize: 0,
      fractionGroupSeparator: " ",
      suffix: ""
    },
    m = "0123456789abcdefghijklmnopqrstuvwxyz",
    B = !0;

  function w(u, _) {
    var g, E, T, O, F, k, M, K, L = this;
    if (!(L instanceof w)) return new w(u, _);
    if (_ == null) {
      if (u && u._isBigNumber === !0) {
        L.s = u.s, !u.c || u.e > P ? L.c = L.e = null : u.e < f ? L.c = [L.e = 0] : (L.e = u.e, L.c = u.c.slice());
        return
      }
      if ((k = typeof u == "number") && u * 0 == 0) {
        if (L.s = 1 / u < 0 ? (u = -u, -1) : 1, u === ~~u) {
          for (O = 0, F = u; F >= 10; F /= 10, O++);
          O > P ? L.c = L.e = null : (L.e = O, L.c = [u]);
          return
        }
        K = String(u)
      } else {
        if (!Eu.test(K = String(u))) return s(L, K, k);
        L.s = K.charCodeAt(0) == 45 ? (K = K.slice(1), -1) : 1
      }(O = K.indexOf(".")) > -1 && (K = K.replace(".", "")), (F = K.search(/e/i)) > 0 ? (O < 0 && (O = F), O += +K.slice(F + 1), K = K.substring(0, F)) : O < 0 && (O = K.length)
    } else {
      if (Ot(_, 2, m.length, "Base"), _ == 10 && B) return L = new w(u), j(L, o + L.e + 1, l);
      if (K = String(u), k = typeof u == "number") {
        if (u * 0 != 0) return s(L, K, k, _);
        if (L.s = 1 / u < 0 ? (K = K.slice(1), -1) : 1, w.DEBUG && K.replace(/^0\.0*|\./, "").length > 15) throw Error(sr + u)
      } else L.s = K.charCodeAt(0) === 45 ? (K = K.slice(1), -1) : 1;
      for (g = m.slice(0, _), O = F = 0, M = K.length; F < M; F++)
        if (g.indexOf(E = K.charAt(F)) < 0) {
          if (E == ".") {
            if (F > O) {
              O = M;
              continue
            }
          } else if (!T && (K == K.toUpperCase() && (K = K.toLowerCase()) || K == K.toLowerCase() && (K = K.toUpperCase()))) {
            T = !0, F = -1, O = 0;
            continue
          }
          return s(L, String(u), k, _)
        } k = !1, K = e(K, _, 10, L.s), (O = K.indexOf(".")) > -1 ? K = K.replace(".", "") : O = K.length
    }
    for (F = 0; K.charCodeAt(F) === 48; F++);
    for (M = K.length; K.charCodeAt(--M) === 48;);
    if (K = K.slice(F, ++M)) {
      if (M -= F, k && w.DEBUG && M > 15 && (u > cs || u !== ce(u))) throw Error(sr + L.s * u);
      if ((O = O - F - 1) > P) L.c = L.e = null;
      else if (O < f) L.c = [L.e = 0];
      else {
        if (L.e = O, L.c = [], F = (O + 1) % lt, O < 0 && (F += lt), F < M) {
          for (F && L.c.push(+K.slice(0, F)), M -= lt; F < M;) L.c.push(+K.slice(F, F += lt));
          F = lt - (K = K.slice(F)).length
        } else F -= M;
        for (; F--; K += "0");
        L.c.push(+K)
      }
    } else L.c = [L.e = 0]
  }
  w.clone = qr, w.ROUND_UP = 0, w.ROUND_DOWN = 1, w.ROUND_CEIL = 2, w.ROUND_FLOOR = 3, w.ROUND_HALF_UP = 4, w.ROUND_HALF_DOWN = 5, w.ROUND_HALF_EVEN = 6, w.ROUND_HALF_CEIL = 7, w.ROUND_HALF_FLOOR = 8, w.EUCLID = 9, w.config = w.set = function(u) {
    var _, g;
    if (u != null)
      if (typeof u == "object") {
        if (u.hasOwnProperty(_ = "DECIMAL_PLACES") && (g = u[_], Ot(g, 0, Wt, _), o = g), u.hasOwnProperty(_ = "ROUNDING_MODE") && (g = u[_], Ot(g, 0, 8, _), l = g), u.hasOwnProperty(_ = "EXPONENTIAL_AT") && (g = u[_], g && g.pop ? (Ot(g[0], -Wt, 0, _), Ot(g[1], 0, Wt, _), d = g[0], p = g[1]) : (Ot(g, -Wt, Wt, _), d = -(p = g < 0 ? -g : g))), u.hasOwnProperty(_ = "RANGE"))
          if (g = u[_], g && g.pop) Ot(g[0], -Wt, -1, _), Ot(g[1], 1, Wt, _), f = g[0], P = g[1];
          else if (Ot(g, -Wt, Wt, _), g) f = -(P = g < 0 ? -g : g);
        else throw Error(re + _ + " cannot be zero: " + g);
        if (u.hasOwnProperty(_ = "CRYPTO"))
          if (g = u[_], g === !!g)
            if (g)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) y = g;
              else throw y = !g, Error(re + "crypto unavailable");
        else y = g;
        else throw Error(re + _ + " not true or false: " + g);
        if (u.hasOwnProperty(_ = "MODULO_MODE") && (g = u[_], Ot(g, 0, 9, _), S = g), u.hasOwnProperty(_ = "POW_PRECISION") && (g = u[_], Ot(g, 0, Wt, _), A = g), u.hasOwnProperty(_ = "FORMAT"))
          if (g = u[_], typeof g == "object") h = g;
          else throw Error(re + _ + " not an object: " + g);
        if (u.hasOwnProperty(_ = "ALPHABET"))
          if (g = u[_], typeof g == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(g)) B = g.slice(0, 10) == "0123456789", m = g;
          else throw Error(re + _ + " invalid: " + g)
      } else throw Error(re + "Object expected: " + u);
    return {
      DECIMAL_PLACES: o,
      ROUNDING_MODE: l,
      EXPONENTIAL_AT: [d, p],
      RANGE: [f, P],
      CRYPTO: y,
      MODULO_MODE: S,
      POW_PRECISION: A,
      FORMAT: h,
      ALPHABET: m
    }
  }, w.isBigNumber = function(u) {
    if (!u || u._isBigNumber !== !0) return !1;
    if (!w.DEBUG) return !0;
    var _, g, E = u.c,
      T = u.e,
      O = u.s;
    t: if ({}.toString.call(E) == "[object Array]") {
      if ((O === 1 || O === -1) && T >= -Wt && T <= Wt && T === ce(T)) {
        if (E[0] === 0) {
          if (T === 0 && E.length === 1) return !0;
          break t
        }
        if (_ = (T + 1) % lt, _ < 1 && (_ += lt), String(E[0]).length == _) {
          for (_ = 0; _ < E.length; _++)
            if (g = E[_], g < 0 || g >= pe || g !== ce(g)) break t;
          if (g !== 0) return !0
        }
      }
    } else if (E === null && T === null && (O === null || O === 1 || O === -1)) return !0;
    throw Error(re + "Invalid BigNumber: " + u)
  }, w.maximum = w.max = function() {
    return b(arguments, -1)
  }, w.minimum = w.min = function() {
    return b(arguments, 1)
  }, w.random = function() {
    var u = 9007199254740992,
      _ = Math.random() * u & 2097151 ? function() {
        return ce(Math.random() * u)
      } : function() {
        return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
      };
    return function(g) {
      var E, T, O, F, k, M = 0,
        K = [],
        L = new w(i);
      if (g == null ? g = o : Ot(g, 0, Wt), F = os(g / lt), y)
        if (crypto.getRandomValues) {
          for (E = crypto.getRandomValues(new Uint32Array(F *= 2)); M < F;) k = E[M] * 131072 + (E[M + 1] >>> 11), k >= 9e15 ? (T = crypto.getRandomValues(new Uint32Array(2)), E[M] = T[0], E[M + 1] = T[1]) : (K.push(k % 1e14), M += 2);
          M = F / 2
        } else if (crypto.randomBytes) {
        for (E = crypto.randomBytes(F *= 7); M < F;) k = (E[M] & 31) * 281474976710656 + E[M + 1] * 1099511627776 + E[M + 2] * 4294967296 + E[M + 3] * 16777216 + (E[M + 4] << 16) + (E[M + 5] << 8) + E[M + 6], k >= 9e15 ? crypto.randomBytes(7).copy(E, M) : (K.push(k % 1e14), M += 7);
        M = F / 7
      } else throw y = !1, Error(re + "crypto unavailable");
      if (!y)
        for (; M < F;) k = _(), k < 9e15 && (K[M++] = k % 1e14);
      for (F = K[--M], g %= lt, F && g && (k = ls[lt - g], K[M] = ce(F / k) * k); K[M] === 0; K.pop(), M--);
      if (M < 0) K = [O = 0];
      else {
        for (O = -1; K[0] === 0; K.splice(0, 1), O -= lt);
        for (M = 1, k = K[0]; k >= 10; k /= 10, M++);
        M < lt && (O -= lt - M)
      }
      return L.e = O, L.c = K, L
    }
  }(), w.sum = function() {
    for (var u = 1, _ = arguments, g = new w(_[0]); u < _.length;) g = g.plus(_[u++]);
    return g
  }, e = function() {
    var u = "0123456789";

    function _(g, E, T, O) {
      for (var F, k = [0], M, K = 0, L = g.length; K < L;) {
        for (M = k.length; M--; k[M] *= E);
        for (k[0] += O.indexOf(g.charAt(K++)), F = 0; F < k.length; F++) k[F] > T - 1 && (k[F + 1] == null && (k[F + 1] = 0), k[F + 1] += k[F] / T | 0, k[F] %= T)
      }
      return k.reverse()
    }
    return function(g, E, T, O, F) {
      var k, M, K, L, W, it, ot, ft, St = g.indexOf("."),
        Lt = o,
        pt = l;
      for (St >= 0 && (L = A, A = 0, g = g.replace(".", ""), ft = new w(E), it = ft.pow(g.length - St), A = L, ft.c = _(be(oe(it.c), it.e, "0"), 10, T, u), ft.e = ft.c.length), ot = _(g, E, T, F ? (k = m, u) : (k = u, m)), K = L = ot.length; ot[--L] == 0; ot.pop());
      if (!ot[0]) return k.charAt(0);
      if (St < 0 ? --K : (it.c = ot, it.e = K, it.s = O, it = t(it, ft, Lt, pt, T), ot = it.c, W = it.r, K = it.e), M = K + Lt + 1, St = ot[M], L = T / 2, W = W || M < 0 || ot[M + 1] != null, W = pt < 4 ? (St != null || W) && (pt == 0 || pt == (it.s < 0 ? 3 : 2)) : St > L || St == L && (pt == 4 || W || pt == 6 && ot[M - 1] & 1 || pt == (it.s < 0 ? 8 : 7)), M < 1 || !ot[0]) g = W ? be(k.charAt(1), -Lt, k.charAt(0)) : k.charAt(0);
      else {
        if (ot.length = M, W)
          for (--T; ++ot[--M] > T;) ot[M] = 0, M || (++K, ot = [1].concat(ot));
        for (L = ot.length; !ot[--L];);
        for (St = 0, g = ""; St <= L; g += k.charAt(ot[St++]));
        g = be(g, K, k.charAt(0))
      }
      return g
    }
  }(), t = function() {
    function u(E, T, O) {
      var F, k, M, K, L = 0,
        W = E.length,
        it = T % Se,
        ot = T / Se | 0;
      for (E = E.slice(); W--;) M = E[W] % Se, K = E[W] / Se | 0, F = ot * M + K * it, k = it * M + F % Se * Se + L, L = (k / O | 0) + (F / Se | 0) + ot * K, E[W] = k % O;
      return L && (E = [L].concat(E)), E
    }

    function _(E, T, O, F) {
      var k, M;
      if (O != F) M = O > F ? 1 : -1;
      else
        for (k = M = 0; k < O; k++)
          if (E[k] != T[k]) {
            M = E[k] > T[k] ? 1 : -1;
            break
          } return M
    }

    function g(E, T, O, F) {
      for (var k = 0; O--;) E[O] -= k, k = E[O] < T[O] ? 1 : 0, E[O] = k * F + E[O] - T[O];
      for (; !E[0] && E.length > 1; E.splice(0, 1));
    }
    return function(E, T, O, F, k) {
      var M, K, L, W, it, ot, ft, St, Lt, pt, mt, Ut, je, Je, Xe, ae, Pe, ne = E.s == T.s ? 1 : -1,
        Ht = E.c,
        Tt = T.c;
      if (!Ht || !Ht[0] || !Tt || !Tt[0]) return new w(!E.s || !T.s || (Ht ? Tt && Ht[0] == Tt[0] : !Tt) ? NaN : Ht && Ht[0] == 0 || !Tt ? ne * 0 : ne / 0);
      for (St = new w(ne), Lt = St.c = [], K = E.e - T.e, ne = O + K + 1, k || (k = pe, K = le(E.e / lt) - le(T.e / lt), ne = ne / lt | 0), L = 0; Tt[L] == (Ht[L] || 0); L++);
      if (Tt[L] > (Ht[L] || 0) && K--, ne < 0) Lt.push(1), W = !0;
      else {
        for (Je = Ht.length, ae = Tt.length, L = 0, ne += 2, it = ce(k / (Tt[0] + 1)), it > 1 && (Tt = u(Tt, it, k), Ht = u(Ht, it, k), ae = Tt.length, Je = Ht.length), je = ae, pt = Ht.slice(0, ae), mt = pt.length; mt < ae; pt[mt++] = 0);
        Pe = Tt.slice(), Pe = [0].concat(Pe), Xe = Tt[0], Tt[1] >= k / 2 && Xe++;
        do {
          if (it = 0, M = _(Tt, pt, ae, mt), M < 0) {
            if (Ut = pt[0], ae != mt && (Ut = Ut * k + (pt[1] || 0)), it = ce(Ut / Xe), it > 1)
              for (it >= k && (it = k - 1), ot = u(Tt, it, k), ft = ot.length, mt = pt.length; _(ot, pt, ft, mt) == 1;) it--, g(ot, ae < ft ? Pe : Tt, ft, k), ft = ot.length, M = 1;
            else it == 0 && (M = it = 1), ot = Tt.slice(), ft = ot.length;
            if (ft < mt && (ot = [0].concat(ot)), g(pt, ot, mt, k), mt = pt.length, M == -1)
              for (; _(Tt, pt, ae, mt) < 1;) it++, g(pt, ae < mt ? Pe : Tt, mt, k), mt = pt.length
          } else M === 0 && (it++, pt = [0]);
          Lt[L++] = it, pt[0] ? pt[mt++] = Ht[je] || 0 : (pt = [Ht[je]], mt = 1)
        } while ((je++ < Je || pt[0] != null) && ne--);
        W = pt[0] != null, Lt[0] || Lt.splice(0, 1)
      }
      if (k == pe) {
        for (L = 1, ne = Lt[0]; ne >= 10; ne /= 10, L++);
        j(St, O + (St.e = L + K * lt - 1) + 1, F, W)
      } else St.e = K, St.r = +W;
      return St
    }
  }();

  function v(u, _, g, E) {
    var T, O, F, k, M;
    if (g == null ? g = l : Ot(g, 0, 8), !u.c) return u.toString();
    if (T = u.c[0], F = u.e, _ == null) M = oe(u.c), M = E == 1 || E == 2 && (F <= d || F >= p) ? wn(M, F) : be(M, F, "0");
    else if (u = j(new w(u), _, g), O = u.e, M = oe(u.c), k = M.length, E == 1 || E == 2 && (_ <= O || O <= d)) {
      for (; k < _; M += "0", k++);
      M = wn(M, O)
    } else if (_ -= F, M = be(M, O, "0"), O + 1 > k) {
      if (--_ > 0)
        for (M += "."; _--; M += "0");
    } else if (_ += O - k, _ > 0)
      for (O + 1 == k && (M += "."); _--; M += "0");
    return u.s < 0 && T ? "-" + M : M
  }

  function b(u, _) {
    for (var g, E, T = 1, O = new w(u[0]); T < u.length; T++) E = new w(u[T]), (!E.s || (g = Me(O, E)) === _ || g === 0 && O.s === _) && (O = E);
    return O
  }

  function R(u, _, g) {
    for (var E = 1, T = _.length; !_[--T]; _.pop());
    for (T = _[0]; T >= 10; T /= 10, E++);
    return (g = E + g * lt - 1) > P ? u.c = u.e = null : g < f ? u.c = [u.e = 0] : (u.e = g, u.c = _), u
  }
  s = function() {
    var u = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      _ = /^([^.]+)\.$/,
      g = /^\.([^.]+)$/,
      E = /^-?(Infinity|NaN)$/,
      T = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(O, F, k, M) {
      var K, L = k ? F : F.replace(T, "");
      if (E.test(L)) O.s = isNaN(L) ? null : L < 0 ? -1 : 1;
      else {
        if (!k && (L = L.replace(u, function(W, it, ot) {
            return K = (ot = ot.toLowerCase()) == "x" ? 16 : ot == "b" ? 2 : 8, !M || M == K ? it : W
          }), M && (K = M, L = L.replace(_, "$1").replace(g, "0.$1")), F != L)) return new w(L, K);
        if (w.DEBUG) throw Error(re + "Not a" + (M ? " base " + M : "") + " number: " + F);
        O.s = null
      }
      O.c = O.e = null
    }
  }();

  function j(u, _, g, E) {
    var T, O, F, k, M, K, L, W = u.c,
      it = ls;
    if (W) {
      t: {
        for (T = 1, k = W[0]; k >= 10; k /= 10, T++);
        if (O = _ - T, O < 0) O += lt,
        F = _,
        M = W[K = 0],
        L = ce(M / it[T - F - 1] % 10);
        else if (K = os((O + 1) / lt), K >= W.length)
          if (E) {
            for (; W.length <= K; W.push(0));
            M = L = 0, T = 1, O %= lt, F = O - lt + 1
          } else break t;
        else {
          for (M = k = W[K], T = 1; k >= 10; k /= 10, T++);
          O %= lt, F = O - lt + T, L = F < 0 ? 0 : ce(M / it[T - F - 1] % 10)
        }
        if (E = E || _ < 0 || W[K + 1] != null || (F < 0 ? M : M % it[T - F - 1]), E = g < 4 ? (L || E) && (g == 0 || g == (u.s < 0 ? 3 : 2)) : L > 5 || L == 5 && (g == 4 || E || g == 6 && (O > 0 ? F > 0 ? M / it[T - F] : 0 : W[K - 1]) % 10 & 1 || g == (u.s < 0 ? 8 : 7)), _ < 1 || !W[0]) return W.length = 0,
        E ? (_ -= u.e + 1, W[0] = it[(lt - _ % lt) % lt], u.e = -_ || 0) : W[0] = u.e = 0,
        u;
        if (O == 0 ? (W.length = K, k = 1, K--) : (W.length = K + 1, k = it[lt - O], W[K] = F > 0 ? ce(M / it[T - F] % it[F]) * k : 0), E)
          for (;;)
            if (K == 0) {
              for (O = 1, F = W[0]; F >= 10; F /= 10, O++);
              for (F = W[0] += k, k = 1; F >= 10; F /= 10, k++);
              O != k && (u.e++, W[0] == pe && (W[0] = 1));
              break
            } else {
              if (W[K] += k, W[K] != pe) break;
              W[K--] = 0, k = 1
            } for (O = W.length; W[--O] === 0; W.pop());
      }
      u.e > P ? u.c = u.e = null : u.e < f && (u.c = [u.e = 0])
    }
    return u
  }

  function x(u) {
    var _, g = u.e;
    return g === null ? u.toString() : (_ = oe(u.c), _ = g <= d || g >= p ? wn(_, g) : be(_, g, "0"), u.s < 0 ? "-" + _ : _)
  }
  return r.absoluteValue = r.abs = function() {
    var u = new w(this);
    return u.s < 0 && (u.s = 1), u
  }, r.comparedTo = function(u, _) {
    return Me(this, new w(u, _))
  }, r.decimalPlaces = r.dp = function(u, _) {
    var g, E, T, O = this;
    if (u != null) return Ot(u, 0, Wt), _ == null ? _ = l : Ot(_, 0, 8), j(new w(O), u + O.e + 1, _);
    if (!(g = O.c)) return null;
    if (E = ((T = g.length - 1) - le(this.e / lt)) * lt, T = g[T])
      for (; T % 10 == 0; T /= 10, E--);
    return E < 0 && (E = 0), E
  }, r.dividedBy = r.div = function(u, _) {
    return t(this, new w(u, _), o, l)
  }, r.dividedToIntegerBy = r.idiv = function(u, _) {
    return t(this, new w(u, _), 0, 1)
  }, r.exponentiatedBy = r.pow = function(u, _) {
    var g, E, T, O, F, k, M, K, L, W = this;
    if (u = new w(u), u.c && !u.isInteger()) throw Error(re + "Exponent not an integer: " + x(u));
    if (_ != null && (_ = new w(_)), k = u.e > 14, !W.c || !W.c[0] || W.c[0] == 1 && !W.e && W.c.length == 1 || !u.c || !u.c[0]) return L = new w(Math.pow(+x(W), k ? u.s * (2 - mn(u)) : +x(u))), _ ? L.mod(_) : L;
    if (M = u.s < 0, _) {
      if (_.c ? !_.c[0] : !_.s) return new w(NaN);
      E = !M && W.isInteger() && _.isInteger(), E && (W = W.mod(_))
    } else {
      if (u.e > 9 && (W.e > 0 || W.e < -1 || (W.e == 0 ? W.c[0] > 1 || k && W.c[1] >= 24e7 : W.c[0] < 8e13 || k && W.c[0] <= 9999975e7))) return O = W.s < 0 && mn(u) ? -0 : 0, W.e > -1 && (O = 1 / O), new w(M ? 1 / O : O);
      A && (O = os(A / lt + 2))
    }
    for (k ? (g = new w(.5), M && (u.s = 1), K = mn(u)) : (T = Math.abs(+x(u)), K = T % 2), L = new w(i);;) {
      if (K) {
        if (L = L.times(W), !L.c) break;
        O ? L.c.length > O && (L.c.length = O) : E && (L = L.mod(_))
      }
      if (T) {
        if (T = ce(T / 2), T === 0) break;
        K = T % 2
      } else if (u = u.times(g), j(u, u.e + 1, 1), u.e > 14) K = mn(u);
      else {
        if (T = +x(u), T === 0) break;
        K = T % 2
      }
      W = W.times(W), O ? W.c && W.c.length > O && (W.c.length = O) : E && (W = W.mod(_))
    }
    return E ? L : (M && (L = i.div(L)), _ ? L.mod(_) : O ? j(L, A, l, F) : L)
  }, r.integerValue = function(u) {
    var _ = new w(this);
    return u == null ? u = l : Ot(u, 0, 8), j(_, _.e + 1, u)
  }, r.isEqualTo = r.eq = function(u, _) {
    return Me(this, new w(u, _)) === 0
  }, r.isFinite = function() {
    return !!this.c
  }, r.isGreaterThan = r.gt = function(u, _) {
    return Me(this, new w(u, _)) > 0
  }, r.isGreaterThanOrEqualTo = r.gte = function(u, _) {
    return (_ = Me(this, new w(u, _))) === 1 || _ === 0
  }, r.isInteger = function() {
    return !!this.c && le(this.e / lt) > this.c.length - 2
  }, r.isLessThan = r.lt = function(u, _) {
    return Me(this, new w(u, _)) < 0
  }, r.isLessThanOrEqualTo = r.lte = function(u, _) {
    return (_ = Me(this, new w(u, _))) === -1 || _ === 0
  }, r.isNaN = function() {
    return !this.s
  }, r.isNegative = function() {
    return this.s < 0
  }, r.isPositive = function() {
    return this.s > 0
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0
  }, r.minus = function(u, _) {
    var g, E, T, O, F = this,
      k = F.s;
    if (u = new w(u, _), _ = u.s, !k || !_) return new w(NaN);
    if (k != _) return u.s = -_, F.plus(u);
    var M = F.e / lt,
      K = u.e / lt,
      L = F.c,
      W = u.c;
    if (!M || !K) {
      if (!L || !W) return L ? (u.s = -_, u) : new w(W ? F : NaN);
      if (!L[0] || !W[0]) return W[0] ? (u.s = -_, u) : new w(L[0] ? F : l == 3 ? -0 : 0)
    }
    if (M = le(M), K = le(K), L = L.slice(), k = M - K) {
      for ((O = k < 0) ? (k = -k, T = L) : (K = M, T = W), T.reverse(), _ = k; _--; T.push(0));
      T.reverse()
    } else
      for (E = (O = (k = L.length) < (_ = W.length)) ? k : _, k = _ = 0; _ < E; _++)
        if (L[_] != W[_]) {
          O = L[_] < W[_];
          break
        } if (O && (T = L, L = W, W = T, u.s = -u.s), _ = (E = W.length) - (g = L.length), _ > 0)
      for (; _--; L[g++] = 0);
    for (_ = pe - 1; E > k;) {
      if (L[--E] < W[E]) {
        for (g = E; g && !L[--g]; L[g] = _);
        --L[g], L[E] += pe
      }
      L[E] -= W[E]
    }
    for (; L[0] == 0; L.splice(0, 1), --K);
    return L[0] ? R(u, L, K) : (u.s = l == 3 ? -1 : 1, u.c = [u.e = 0], u)
  }, r.modulo = r.mod = function(u, _) {
    var g, E, T = this;
    return u = new w(u, _), !T.c || !u.s || u.c && !u.c[0] ? new w(NaN) : !u.c || T.c && !T.c[0] ? new w(T) : (S == 9 ? (E = u.s, u.s = 1, g = t(T, u, 0, 3), u.s = E, g.s *= E) : g = t(T, u, 0, S), u = T.minus(g.times(u)), !u.c[0] && S == 1 && (u.s = T.s), u)
  }, r.multipliedBy = r.times = function(u, _) {
    var g, E, T, O, F, k, M, K, L, W, it, ot, ft, St, Lt, pt = this,
      mt = pt.c,
      Ut = (u = new w(u, _)).c;
    if (!mt || !Ut || !mt[0] || !Ut[0]) return !pt.s || !u.s || mt && !mt[0] && !Ut || Ut && !Ut[0] && !mt ? u.c = u.e = u.s = null : (u.s *= pt.s, !mt || !Ut ? u.c = u.e = null : (u.c = [0], u.e = 0)), u;
    for (E = le(pt.e / lt) + le(u.e / lt), u.s *= pt.s, M = mt.length, W = Ut.length, M < W && (ft = mt, mt = Ut, Ut = ft, T = M, M = W, W = T), T = M + W, ft = []; T--; ft.push(0));
    for (St = pe, Lt = Se, T = W; --T >= 0;) {
      for (g = 0, it = Ut[T] % Lt, ot = Ut[T] / Lt | 0, F = M, O = T + F; O > T;) K = mt[--F] % Lt, L = mt[F] / Lt | 0, k = ot * K + L * it, K = it * K + k % Lt * Lt + ft[O] + g, g = (K / St | 0) + (k / Lt | 0) + ot * L, ft[O--] = K % St;
      ft[O] = g
    }
    return g ? ++E : ft.splice(0, 1), R(u, ft, E)
  }, r.negated = function() {
    var u = new w(this);
    return u.s = -u.s || null, u
  }, r.plus = function(u, _) {
    var g, E = this,
      T = E.s;
    if (u = new w(u, _), _ = u.s, !T || !_) return new w(NaN);
    if (T != _) return u.s = -_, E.minus(u);
    var O = E.e / lt,
      F = u.e / lt,
      k = E.c,
      M = u.c;
    if (!O || !F) {
      if (!k || !M) return new w(T / 0);
      if (!k[0] || !M[0]) return M[0] ? u : new w(k[0] ? E : T * 0)
    }
    if (O = le(O), F = le(F), k = k.slice(), T = O - F) {
      for (T > 0 ? (F = O, g = M) : (T = -T, g = k), g.reverse(); T--; g.push(0));
      g.reverse()
    }
    for (T = k.length, _ = M.length, T - _ < 0 && (g = M, M = k, k = g, _ = T), T = 0; _;) T = (k[--_] = k[_] + M[_] + T) / pe | 0, k[_] = pe === k[_] ? 0 : k[_] % pe;
    return T && (k = [T].concat(k), ++F), R(u, k, F)
  }, r.precision = r.sd = function(u, _) {
    var g, E, T, O = this;
    if (u != null && u !== !!u) return Ot(u, 1, Wt), _ == null ? _ = l : Ot(_, 0, 8), j(new w(O), u, _);
    if (!(g = O.c)) return null;
    if (T = g.length - 1, E = T * lt + 1, T = g[T]) {
      for (; T % 10 == 0; T /= 10, E--);
      for (T = g[0]; T >= 10; T /= 10, E++);
    }
    return u && O.e + 1 > E && (E = O.e + 1), E
  }, r.shiftedBy = function(u) {
    return Ot(u, -cs, cs), this.times("1e" + u)
  }, r.squareRoot = r.sqrt = function() {
    var u, _, g, E, T, O = this,
      F = O.c,
      k = O.s,
      M = O.e,
      K = o + 4,
      L = new w("0.5");
    if (k !== 1 || !F || !F[0]) return new w(!k || k < 0 && (!F || F[0]) ? NaN : F ? O : 1 / 0);
    if (k = Math.sqrt(+x(O)), k == 0 || k == 1 / 0 ? (_ = oe(F), (_.length + M) % 2 == 0 && (_ += "0"), k = Math.sqrt(+_), M = le((M + 1) / 2) - (M < 0 || M % 2), k == 1 / 0 ? _ = "5e" + M : (_ = k.toExponential(), _ = _.slice(0, _.indexOf("e") + 1) + M), g = new w(_)) : g = new w(k + ""), g.c[0]) {
      for (M = g.e, k = M + K, k < 3 && (k = 0);;)
        if (T = g, g = L.times(T.plus(t(O, T, K, 1))), oe(T.c).slice(0, k) === (_ = oe(g.c)).slice(0, k))
          if (g.e < M && --k, _ = _.slice(k - 3, k + 1), _ == "9999" || !E && _ == "4999") {
            if (!E && (j(T, T.e + o + 2, 0), T.times(T).eq(O))) {
              g = T;
              break
            }
            K += 4, k += 4, E = 1
          } else {
            (!+_ || !+_.slice(1) && _.charAt(0) == "5") && (j(g, g.e + o + 2, 1), u = !g.times(g).eq(O));
            break
          }
    }
    return j(g, g.e + o + 1, l, u)
  }, r.toExponential = function(u, _) {
    return u != null && (Ot(u, 0, Wt), u++), v(this, u, _, 1)
  }, r.toFixed = function(u, _) {
    return u != null && (Ot(u, 0, Wt), u = u + this.e + 1), v(this, u, _)
  }, r.toFormat = function(u, _, g) {
    var E, T = this;
    if (g == null) u != null && _ && typeof _ == "object" ? (g = _, _ = null) : u && typeof u == "object" ? (g = u, u = _ = null) : g = h;
    else if (typeof g != "object") throw Error(re + "Argument not an object: " + g);
    if (E = T.toFixed(u, _), T.c) {
      var O, F = E.split("."),
        k = +g.groupSize,
        M = +g.secondaryGroupSize,
        K = g.groupSeparator || "",
        L = F[0],
        W = F[1],
        it = T.s < 0,
        ot = it ? L.slice(1) : L,
        ft = ot.length;
      if (M && (O = k, k = M, M = O, ft -= O), k > 0 && ft > 0) {
        for (O = ft % k || k, L = ot.substr(0, O); O < ft; O += k) L += K + ot.substr(O, k);
        M > 0 && (L += K + ot.slice(O)), it && (L = "-" + L)
      }
      E = W ? L + (g.decimalSeparator || "") + ((M = +g.fractionGroupSize) ? W.replace(new RegExp("\\d{" + M + "}\\B", "g"), "$&" + (g.fractionGroupSeparator || "")) : W) : L
    }
    return (g.prefix || "") + E + (g.suffix || "")
  }, r.toFraction = function(u) {
    var _, g, E, T, O, F, k, M, K, L, W, it, ot = this,
      ft = ot.c;
    if (u != null && (k = new w(u), !k.isInteger() && (k.c || k.s !== 1) || k.lt(i))) throw Error(re + "Argument " + (k.isInteger() ? "out of range: " : "not an integer: ") + x(k));
    if (!ft) return new w(ot);
    for (_ = new w(i), K = g = new w(i), E = M = new w(i), it = oe(ft), O = _.e = it.length - ot.e - 1, _.c[0] = ls[(F = O % lt) < 0 ? lt + F : F], u = !u || k.comparedTo(_) > 0 ? O > 0 ? _ : K : k, F = P, P = 1 / 0, k = new w(it), M.c[0] = 0; L = t(k, _, 0, 1), T = g.plus(L.times(E)), T.comparedTo(u) != 1;) g = E, E = T, K = M.plus(L.times(T = K)), M = T, _ = k.minus(L.times(T = _)), k = T;
    return T = t(u.minus(g), E, 0, 1), M = M.plus(T.times(K)), g = g.plus(T.times(E)), M.s = K.s = ot.s, O = O * 2, W = t(K, E, O, l).minus(ot).abs().comparedTo(t(M, g, O, l).minus(ot).abs()) < 1 ? [K, E] : [M, g], P = F, W
  }, r.toNumber = function() {
    return +x(this)
  }, r.toPrecision = function(u, _) {
    return u != null && Ot(u, 1, Wt), v(this, u, _, 2)
  }, r.toString = function(u) {
    var _, g = this,
      E = g.s,
      T = g.e;
    return T === null ? E ? (_ = "Infinity", E < 0 && (_ = "-" + _)) : _ = "NaN" : (u == null ? _ = T <= d || T >= p ? wn(oe(g.c), T) : be(oe(g.c), T, "0") : u === 10 && B ? (g = j(new w(g), o + T + 1, l), _ = be(oe(g.c), g.e, "0")) : (Ot(u, 2, m.length, "Base"), _ = e(be(oe(g.c), T, "0"), 10, u, E, !0)), E < 0 && g.c[0] && (_ = "-" + _)), _
  }, r.valueOf = r.toJSON = function() {
    return x(this)
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, n != null && w.set(n), w
}

function le(n) {
  var t = n | 0;
  return n > 0 || n === t ? t : t - 1
}

function oe(n) {
  for (var t, e, s = 1, r = n.length, i = n[0] + ""; s < r;) {
    for (t = n[s++] + "", e = lt - t.length; e--; t = "0" + t);
    i += t
  }
  for (r = i.length; i.charCodeAt(--r) === 48;);
  return i.slice(0, r + 1 || 1)
}

function Me(n, t) {
  var e, s, r = n.c,
    i = t.c,
    o = n.s,
    l = t.s,
    d = n.e,
    p = t.e;
  if (!o || !l) return null;
  if (e = r && !r[0], s = i && !i[0], e || s) return e ? s ? 0 : -l : o;
  if (o != l) return o;
  if (e = o < 0, s = d == p, !r || !i) return s ? 0 : !r ^ e ? 1 : -1;
  if (!s) return d > p ^ e ? 1 : -1;
  for (l = (d = r.length) < (p = i.length) ? d : p, o = 0; o < l; o++)
    if (r[o] != i[o]) return r[o] > i[o] ^ e ? 1 : -1;
  return d == p ? 0 : d > p ^ e ? 1 : -1
}

function Ot(n, t, e, s) {
  if (n < t || n > e || n !== ce(n)) throw Error(re + (s || "Argument") + (typeof n == "number" ? n < t || n > e ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n))
}

function mn(n) {
  var t = n.c.length - 1;
  return le(n.e / lt) == t && n.c[t] % 2 != 0
}

function wn(n, t) {
  return (n.length > 1 ? n.charAt(0) + "." + n.slice(1) : n) + (t < 0 ? "e" : "e+") + t
}

function be(n, t, e) {
  var s, r;
  if (t < 0) {
    for (r = e + "."; ++t; r += e);
    n = r + n
  } else if (s = n.length, ++t > s) {
    for (r = e, t -= s; --t; r += e);
    n += r
  } else t < s && (n = n.slice(0, t) + "." + n.slice(t));
  return n
}
var rr = qr();
const Mu = Object.freeze(Object.defineProperty({
    __proto__: null,
    BigNumber: rr,
    default: rr
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  $s = fr(Mu);
var ti = rt && rt.__importDefault || function(n) {
  return n && n.__esModule ? n : {
    default: n
  }
};
Object.defineProperty(Gn, "__esModule", {
  value: !0
});
Gn.WalletV3Account = void 0;
const Ou = Ce,
  en = ti($s),
  Ss = ti(ie);
class Mn {
  static async computeAddress(t) {
    await Ss.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof en.default ? t.publicKey : new en.default(`0x${t.publicKey}`),
      s = ir(e).hash;
    return new Ou.Address(`${t.workchain!=null?t.workchain:0}:${s}`)
  }
  static async fromPubkey(t) {
    const e = new en.default(`0x${t.publicKey}`),
      s = await Mn.computeAddress({
        publicKey: e,
        workchain: t.workchain
      }),
      r = new Mn(s);
    return r.publicKey = e, r
  }
  constructor(t) {
    this.address = t
  }
  async fetchPublicKey(t) {
    let e = this.publicKey;
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(s => new en.default(`0x${s}`))), e.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, e) {
    const {
      seqno: s,
      publicKey: r,
      stateInit: i
    } = await this.fetchState(e), o = await e.getSigner(r), l = e.nowSec + t.timeout, d = t.payload ? e.encodeInternalInput(t.payload) : void 0, p = e.encodeInternalMessage({
      dst: t.recipient,
      bounce: t.bounce,
      stateInit: t.stateInit,
      body: d,
      amount: t.amount
    }), f = {
      walletId: si,
      expireAt: l,
      seqno: s,
      flags: 3,
      message: p
    }, P = e.packIntoCell({
      structure: ei,
      data: f
    }).hash, y = await o.sign(P, t.signatureId), {
      signatureParts: S
    } = e.extendSignature(y);
    f.signatureHigh = S.high, f.signatureLow = S.low;
    const A = e.packIntoCell({
      structure: Nu,
      data: f
    }).boc;
    return e.createRawExternalMessage({
      address: this.address,
      body: A,
      stateInit: i,
      expireAt: l
    })
  }
  async fetchState(t) {
    let e, s;
    const r = await t.getFullContractState(this.address);
    if (r == null || !r.isDeployed) {
      if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
      e = ir(this.publicKey).boc, s = {
        seqno: 0,
        publicKey: this.publicKey
      }
    } else {
      const i = t.extractContractData(r.boc);
      if (i == null) throw new Error("Failed to extract contract data");
      s = $u(t, i)
    }
    if (this.publicKey == null) this.publicKey = s.publicKey;
    else if (!this.publicKey.eq(s.publicKey)) throw new Error("Public key mismatch");
    return {
      seqno: s.seqno,
      publicKey: s.publicKey.toString(16).padStart(64, "0"),
      stateInit: e
    }
  }
}
Gn.WalletV3Account = Mn;
const $u = (n, t) => {
    const e = n.unpackFromCell({
      structure: ni,
      boc: t,
      allowPartial: !1
    });
    if (typeof e != "object" || typeof e.seqno != "string" || typeof e.publicKey != "string") throw new Error("Invalid contract data ");
    return {
      seqno: parseInt(e.seqno),
      publicKey: new en.default(e.publicKey)
    }
  },
  ir = n => {
    const t = Ss.default.nekoton.packIntoCell(ni, {
      seqno: 0,
      walletId: si,
      publicKey: n.toFixed(0)
    }).boc;
    return Ss.default.nekoton.mergeTvc(Du, t)
  },
  ei = [{
    name: "walletId",
    type: "uint32"
  }, {
    name: "expireAt",
    type: "uint32"
  }, {
    name: "seqno",
    type: "uint32"
  }, {
    name: "flags",
    type: "uint8"
  }, {
    name: "message",
    type: "cell"
  }],
  Nu = [{
    name: "signatureHigh",
    type: "uint256"
  }, {
    name: "signatureLow",
    type: "uint256"
  }, ...ei],
  ni = [{
    name: "seqno",
    type: "uint32"
  }, {
    name: "walletId",
    type: "uint32"
  }, {
    name: "publicKey",
    type: "uint256"
  }],
  Du = "te6ccgEBAQEAcQAA3v8AIN0gggFMl7ohggEznLqxn3Gw7UTQ0x/THzHXC//jBOCk8mCDCNcYINMf0x/TH/gjE7vyY+1E0NMf0x/T/9FRMrryoVFEuvKiBPkBVBBV+RDyo/gAkyDXSpbTB9QC+wDo0QGkyMsfyx/L/8ntVA==",
  si = 1269378442;
var Qn = {},
  ri = rt && rt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Qn, "__esModule", {
  value: !0
});
Qn.HighloadWalletV2 = void 0;
const Lu = Ce,
  nn = ri($s),
  Ts = ri(ie),
  Ru = ee;
class On {
  static async computeAddress(t) {
    await Ts.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof nn.default ? t.publicKey : new nn.default(`0x${t.publicKey}`),
      s = ar(e).hash;
    return new Lu.Address(`${t.workchain!=null?t.workchain:0}:${s}`)
  }
  static async fromPubkey(t) {
    const e = new nn.default(`0x${t.publicKey}`),
      s = await On.computeAddress({
        publicKey: e,
        workchain: t.workchain
      }),
      r = new On(s);
    return r.publicKey = e, r
  }
  constructor(t) {
    this.address = (0, Ru.convertToAddressObject)(t)
  }
  async fetchPublicKey(t) {
    let e = this.publicKey;
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(s => new nn.default(`0x${s}`))), e.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, e) {
    const {
      publicKey: s,
      stateInit: r
    } = await this.fetchState(e), i = await e.getSigner(s), o = e.nowSec + t.timeout, l = t.payload ? e.encodeInternalInput(t.payload) : void 0, p = {
      messages: [
        [0, {
          flags: 3,
          message: e.encodeInternalMessage({
            dst: t.recipient,
            bounce: t.bounce,
            stateInit: t.stateInit,
            body: l,
            amount: t.amount
          })
        }]
      ]
    }, {
      boc: f,
      hash: P
    } = e.packIntoCell({
      structure: ii,
      data: p
    });
    p.walletId = ci, p.expireAt = o, p.messagesHash = `0x${P.slice(-8)}`;
    const y = e.packIntoCell({
        structure: ai,
        data: p
      }).hash,
      S = await i.sign(y, t.signatureId),
      {
        signatureParts: A
      } = e.extendSignature(S);
    p.signatureHigh = A.high, p.signatureLow = A.low;
    const h = e.packIntoCell({
      structure: Ku,
      data: p
    }).boc;
    return e.createRawExternalMessage({
      address: this.address.toString(),
      body: h,
      stateInit: r,
      expireAt: o
    })
  }
  async fetchState(t) {
    let e, s;
    const r = await t.getFullContractState(this.address);
    if (r == null || !r.isDeployed) {
      if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
      e = ar(this.publicKey).boc, s = this.publicKey
    } else if (this.publicKey == null) {
      const i = t.extractContractData(r.boc);
      if (i == null) throw new Error("Failed to extract contract data");
      s = Fu(t, i).publicKey
    } else s = this.publicKey;
    return this.publicKey == null && (this.publicKey = s), {
      publicKey: s.toString(16).padStart(64, "0"),
      stateInit: e
    }
  }
}
Qn.HighloadWalletV2 = On;
const Fu = (n, t) => {
    const e = n.unpackFromCell({
      structure: oi,
      boc: t,
      allowPartial: !0
    });
    if (typeof e != "object" || typeof e.publicKey != "string") throw new Error("Invalid contract data");
    return {
      publicKey: new nn.default(e.publicKey)
    }
  },
  ar = n => {
    const t = Ts.default.nekoton.packIntoCell(oi, {
      walletId: ci,
      lastCleaned: 0,
      publicKey: n.toFixed(0),
      queries: !1
    }).boc;
    return Ts.default.nekoton.mergeTvc(Bu, t)
  },
  ii = [{
    name: "messages",
    type: "map(uint16,tuple)",
    components: [{
      name: "flags",
      type: "uint8"
    }, {
      name: "message",
      type: "cell"
    }]
  }],
  ai = [{
    name: "walletId",
    type: "uint32"
  }, {
    name: "expireAt",
    type: "uint32"
  }, {
    name: "messagesHash",
    type: "uint32"
  }, ...ii],
  Ku = [{
    name: "signatureHigh",
    type: "uint256"
  }, {
    name: "signatureLow",
    type: "uint256"
  }, ...ai],
  oi = [{
    name: "walletId",
    type: "uint32"
  }, {
    name: "lastCleaned",
    type: "uint64"
  }, {
    name: "publicKey",
    type: "uint256"
  }, {
    name: "queries",
    type: "bool"
  }],
  Bu = "te6ccgEBCQEA5QABFP8A9KQT9LzyyAsBAgEgBAIB6vKDCNcYINMf0z/4I6ofUyC58mPtRNDTH9M/0//0BNFTYIBA9A5voTHyYFFzuvKiB/kBVBCH+RDyowL0BNH4AH+OFiGAEPR4b6UgmALTB9QwAfsAkTLiAbPmW4MlochANIBA9EOK5jHIEssfE8s/y//0AMntVAMANCCAQPSWb6UyURCUMFMDud4gkzM2AZIyMOKzAgFICAUCASAHBgBBvl+XaiaGmPmOmf6f+Y+gJoqRBAIHoHN9CYyS2/yV3R8UABe9nOdqJoaa+Y64X/wABNAw",
  ci = 0;
var Yn = {},
  li = rt && rt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Yn, "__esModule", {
  value: !0
});
Yn.EverWalletAccount = void 0;
const ju = Ce,
  qe = li($s),
  $n = li(ie);
class Nn {
  static async computeAddress(t) {
    await $n.default.ensureNekotonLoaded();
    const e = t.publicKey instanceof qe.default ? t.publicKey : new qe.default(`0x${t.publicKey}`),
      s = or(e, t.nonce).hash;
    return new ju.Address(`${t.workchain!=null?t.workchain:0}:${s}`)
  }
  static async fromPubkey(t) {
    const e = new qe.default(`0x${t.publicKey}`),
      s = await Nn.computeAddress({
        publicKey: e,
        workchain: t.workchain,
        nonce: t.nonce
      }),
      r = new Nn(s);
    return r.publicKey = e, r.nonce = t.nonce, r
  }
  constructor(t) {
    this.address = t
  }
  async fetchPublicKey(t) {
    let e = this.publicKey;
    return e == null && (e = this.publicKey = await t.fetchPublicKey(this.address).then(s => new qe.default(`0x${s}`)), this.isDeployed = !0), e.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, e) {
    const {
      publicKey: s,
      stateInit: r
    } = await this.fetchState(e), i = await e.getSigner(s), o = t.payload ? e.encodeInternalInput(t.payload) : "";
    let l, d, p;
    return t.stateInit == null ? (l = Wu, d = "sendTransaction", p = {
      dest: t.recipient,
      value: t.amount,
      bounce: t.bounce,
      flags: 3,
      payload: o
    }) : (l = Hu, d = "sendTransactionRaw", p = {
      flags: 3,
      message: e.encodeInternalMessage({
        dst: t.recipient,
        bounce: t.bounce,
        stateInit: t.stateInit,
        body: o,
        amount: t.amount
      })
    }), e.createExternalMessage({
      address: this.address,
      signer: i,
      timeout: t.timeout,
      abi: l,
      method: d,
      params: p,
      stateInit: r,
      signatureId: t.signatureId
    })
  }
  async fetchState(t) {
    let e, s;
    if (this.isDeployed === !0 && this.publicKey != null) s = this.publicKey;
    else {
      const r = await t.getFullContractState(this.address);
      if (r == null || !r.isDeployed) {
        if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
        e = or(this.publicKey, this.nonce).boc, s = this.publicKey
      } else this.isDeployed = !0, s = new qe.default(`0x${$n.default.nekoton.extractPublicKey(r.boc)}`);
      this.publicKey == null && (this.publicKey = s)
    }
    return {
      publicKey: s.toString(16).padStart(64, "0"),
      stateInit: e
    }
  }
}
Yn.EverWalletAccount = Nn;
const or = (n, t) => {
    let e, s;
    t != null ? (e = Uu, s = {
      publicKey: n.toFixed(0),
      timestamp: 0,
      nonce: t
    }) : (e = xu, s = {
      publicKey: n.toFixed(0),
      timestamp: 0
    });
    const r = $n.default.nekoton.packIntoCell(e, s).boc;
    return $n.default.nekoton.mergeTvc(zu, r)
  },
  xu = [{
    name: "publicKey",
    type: "uint256"
  }, {
    name: "timestamp",
    type: "uint64"
  }],
  Uu = [{
    name: "publicKey",
    type: "uint256"
  }, {
    name: "timestamp",
    type: "uint64"
  }, {
    name: "nonce",
    type: "uint32"
  }],
  zu = "te6cckEBBgEA/AABFP8A9KQT9LzyyAsBAgEgAgMABNIwAubycdcBAcAA8nqDCNcY7UTQgwfXAdcLP8j4KM8WI88WyfkAA3HXAQHDAJqDB9cBURO68uBk3oBA1wGAINcBgCDXAVQWdfkQ8qj4I7vyeWa++COBBwiggQPoqFIgvLHydAIgghBM7mRsuuMPAcjL/8s/ye1UBAUAmDAC10zQ+kCDBtcBcdcBeNcB10z4AHCAEASqAhSxyMsFUAXPFlAD+gLLaSLQIc8xIddJoIQJuZgzcAHLAFjPFpcwcQHLABLM4skB+wAAPoIQFp4+EbqOEfgAApMg10qXeNcB1AL7AOjRkzLyPOI+zYS/",
  Wu = `{
  "ABI version": 2,
  "version": "2.3",
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"flags","type":"uint8"},
      {"name":"payload","type":"cell"}
    ],
    "outputs": []
  }],
  "events": []
}`,
  Hu = `{
  "ABI version": 2,
  "version": "2.3",
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransactionRaw",
    "inputs": [
      {"name":"flags","type":"uint8"},
      {"name":"message","type":"cell"}
    ],
    "outputs": [],
    "id": "0x169e3e11"
  }],
  "events": []
}`;
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.SimpleAccountsStorage = n.AccountsStorageContext = n.EverWalletAccount = n.HighloadWalletV2 = n.WalletV3Account = n.MsigAccount = n.GenericAccount = n.GiverAccount = void 0;
  const t = ee;
  var e = Vn;
  Object.defineProperty(n, "GiverAccount", {
    enumerable: !0,
    get: function() {
      return e.GiverAccount
    }
  });
  var s = Ge;
  Object.defineProperty(n, "GenericAccount", {
    enumerable: !0,
    get: function() {
      return s.GenericAccount
    }
  }), Object.defineProperty(n, "MsigAccount", {
    enumerable: !0,
    get: function() {
      return s.MsigAccount
    }
  });
  var r = Gn;
  Object.defineProperty(n, "WalletV3Account", {
    enumerable: !0,
    get: function() {
      return r.WalletV3Account
    }
  });
  var i = Qn;
  Object.defineProperty(n, "HighloadWalletV2", {
    enumerable: !0,
    get: function() {
      return i.HighloadWalletV2
    }
  });
  var o = Yn;
  Object.defineProperty(n, "EverWalletAccount", {
    enumerable: !0,
    get: function() {
      return o.EverWalletAccount
    }
  });
  class l {
    constructor(f, P, y, S) {
      this.clock = f, this.connectionController = P, this.nekoton = y, this.keystore = S
    }
    async getSigner(f) {
      if (this.keystore == null) throw new Error("Keystore not found");
      const P = await this.keystore.getSigner(f);
      if (P == null) throw new Error("Signer not found");
      return P
    }
    get nowMs() {
      return this.clock.nowMs
    }
    get nowSec() {
      return ~~(this.clock.nowMs / 1e3)
    }
    async fetchPublicKey(f) {
      const P = await this.getFullContractState(f);
      if (P == null || !P.isDeployed) throw new Error("Contract not deployed");
      return this.nekoton.extractPublicKey(P.boc)
    }
    async getFullContractState(f) {
      return this.connectionController.use(async ({
        data: {
          transport: P
        }
      }) => P.getFullContractState(f.toString()))
    }
    extractContractData(f) {
      return this.nekoton.extractContractData(f)
    }
    packIntoCell(f) {
      return this.nekoton.packIntoCell(f.structure, f.data, f.abiVersion)
    }
    unpackFromCell(f) {
      return this.nekoton.unpackFromCell(f.structure, f.boc, f.allowPartial, f.abiVersion)
    }
    getBocHash(f) {
      return this.nekoton.getBocHash(f)
    }
    extendSignature(f) {
      return this.nekoton.extendSignature(f)
    }
    encodeInternalInput(f) {
      return this.nekoton.encodeInternalInput(f.abi, f.method, f.params)
    }
    encodeInternalMessage(f) {
      return this.nekoton.encodeInternalMessage(f.src, f.dst, f.bounce, f.stateInit, f.body, f.amount)
    }
    async createExternalMessage(f) {
      const P = this.nekoton.createExternalMessage(this.clock, f.address.toString(), f.abi, f.method, f.stateInit, f.params, f.signer.publicKey, f.timeout);
      try {
        const y = await f.signer.sign(P.hash, f.signatureId);
        return P.sign(y)
      } finally {
        P.free()
      }
    }
    createRawExternalMessage(f) {
      return this.nekoton.createRawExternalMessage(f.address.toString(), f.stateInit, f.body, f.expireAt)
    }
  }
  n.AccountsStorageContext = l;
  class d {
    constructor(f = {}) {
      if (this.accounts = new Map, f.entries != null)
        for (const P of f.entries) this._defaultAccount == null && (this._defaultAccount = P.address), this.accounts.set(P.address.toString(), P);
      if (f.defaultAccount != null) {
        const P = (0, t.convertToAddressObject)(f.defaultAccount);
        if (!this.accounts.has(P.toString())) throw new Error("Provided default account not found in storage");
        this._defaultAccount = P
      }
    }
    get defaultAccount() {
      return this._defaultAccount
    }
    set defaultAccount(f) {
      const P = f == null ? void 0 : f.toString();
      if (P != null && !this.accounts.has(P)) throw new Error("Account not found in storage");
      this._defaultAccount = f == null ? f : (0, t.convertToAddressObject)(f)
    }
    async getAccount(f) {
      return this.accounts.get(f.toString())
    }
    addAccount(f) {
      const P = f.address;
      return this.accounts.set(P.toString(), f), P
    }
    hasAccount(f) {
      return this.accounts.has(f.toString())
    }
    removeAccount(f) {
      this.accounts.delete(f.toString())
    }
  }
  n.SimpleAccountsStorage = d
})(Is);
var Jn = {};
Object.defineProperty(Jn, "__esModule", {
  value: !0
});
Jn.ConnectionFactory = void 0;
class Vu {}
Jn.ConnectionFactory = Vu;
var Xn = {},
  Gu = rt && rt.__importDefault || function(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  };
Object.defineProperty(Xn, "__esModule", {
  value: !0
});
Xn.SimpleKeystore = void 0;
const ui = Gu(ie);
class Ns {
  constructor(t = {}) {
    this.signers = new Map, this.signersByPublicKey = new Map;
    for (const [e, s] of Object.entries(t)) this.addKeyPair(e, s)
  }
  static generateKeyPair() {
    return ui.default.nekoton.ed25519_generateKeyPair()
  }
  addKeyPair(t, e) {
    let s, r;
    typeof t == "string" ? (s = t, r = e) : (s = t.publicKey, r = t);
    const i = new Qu(r);
    this.signers.set(s, i), this.signersByPublicKey.set(r.publicKey, i)
  }
  removeKeyPair(t) {
    const e = this.signers.get(t);
    e != null && (this.signers.delete(t), this.signersByPublicKey.delete(e.publicKey))
  }
  async withNewKey(t, e = {}) {
    const s = Ns.generateKeyPair(),
      r = e.keyId != null ? e.keyId : s.publicKey,
      i = e.keepOnError || !1;
    return this.addKeyPair(r, s), t(r).then(o => (o === !1 && this.removeKeyPair(r), r)).catch(o => {
      throw i || this.removeKeyPair(r), o
    })
  }
  async getSigner(t) {
    return this.signers.get(t) || this.signersByPublicKey.get(t)
  }
}
Xn.SimpleKeystore = Ns;
class Qu {
  constructor(t) {
    this.keyPair = t, this.publicKey = this.keyPair.publicKey
  }
  async sign(t, e) {
    return ui.default.nekoton.ed25519_sign(this.keyPair.secretKey, t, e)
  }
}
var Zn = {};
Object.defineProperty(Zn, "__esModule", {
  value: !0
});
Zn.Clock = void 0;
class Yu {
  constructor(t) {
    this.impls = [], this.currentOffset = 0, t != null && (this.currentOffset = t)
  }
  get offset() {
    return this.currentOffset
  }
  set offset(t) {
    this.currentOffset = t;
    for (const e of this.impls) e.updateOffset(this.currentOffset)
  }
  get time() {
    return new Date().getTime() + this.offset
  }
  detach() {
    this.impls = []
  }
}
Zn.Clock = Yu;
(function(n) {
  var t = rt && rt.__createBinding || (Object.create ? function(I, a, C, N) {
      N === void 0 && (N = C);
      var z = Object.getOwnPropertyDescriptor(a, C);
      (!z || ("get" in z ? !a.__esModule : z.writable || z.configurable)) && (z = {
        enumerable: !0,
        get: function() {
          return a[C]
        }
      }), Object.defineProperty(I, N, z)
    } : function(I, a, C, N) {
      N === void 0 && (N = C), I[N] = a[C]
    }),
    e = rt && rt.__exportStar || function(I, a) {
      for (var C in I) C !== "default" && !Object.prototype.hasOwnProperty.call(a, C) && t(a, I, C)
    },
    s = rt && rt.__importDefault || function(I) {
      return I && I.__esModule ? I : {
        default: I
      }
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.EverscaleStandaloneClient = n.SUPPORTED_PERMISSIONS = n.VERSION = n.Clock = n.SimpleKeystore = n.checkConnection = n.ConnectionError = n.NETWORK_PRESETS = void 0;
  const r = s(Yl),
    i = s(ie),
    o = ee,
    l = An,
    d = Wn,
    p = Is;
  e(Jn, n);
  var f = An;
  Object.defineProperty(n, "NETWORK_PRESETS", {
    enumerable: !0,
    get: function() {
      return f.NETWORK_PRESETS
    }
  });
  var P = An;
  Object.defineProperty(n, "ConnectionError", {
    enumerable: !0,
    get: function() {
      return P.ConnectionError
    }
  }), Object.defineProperty(n, "checkConnection", {
    enumerable: !0,
    get: function() {
      return P.checkConnection
    }
  }), e(Is, n);
  var y = Xn;
  Object.defineProperty(n, "SimpleKeystore", {
    enumerable: !0,
    get: function() {
      return y.SimpleKeystore
    }
  });
  var S = Zn;
  Object.defineProperty(n, "Clock", {
    enumerable: !0,
    get: function() {
      return S.Clock
    }
  });

  function A(I) {
    const a = I || {};
    return {
      retryCount: a.retryCount != null ? Math.max(1, ~~a.retryCount) : 5,
      timeout: a.timeout != null ? Math.max(1, ~~a.timeout) : 60,
      timeoutGrowFactor: a.timeoutGrowFactor || 1.2,
      retryTransfers: !0
    }
  }
  n.VERSION = "0.2.25", n.SUPPORTED_PERMISSIONS = ["basic", "accountInteraction"];
  class h extends o.SafeEventEmitter {
    static async create(a = {}) {
      await i.default.ensureNekotonLoaded(a.initInput);
      const C = {},
        N = (G, ct) => {
          var et;
          (et = C.client) === null || et === void 0 || et.emit(G, ct)
        },
        z = new i.default.nekoton.ClockWithOffset;
      a.clock != null && (a.clock.impls.push(z), z.updateOffset(a.clock.offset));
      try {
        const G = a.connection != null ? await (0, l.createConnectionController)(z, a.connection) : void 0,
          ct = G != null ? new d.SubscriptionController(G, N) : void 0,
          et = new h({
            permissions: {},
            connectionController: G,
            subscriptionController: ct,
            properties: {
              message: A(a.message)
            },
            keystore: a.keystore,
            accountsStorage: a.accountsStorage,
            clock: z,
            notify: N
          });
        return C.client = et, et
      } catch (G) {
        throw a.clock != null && a.clock.impls.pop(), z.free(), G
      }
    }
    static setDebugLogger(a) {
      i.default.debugLog = a
    }
    constructor(a) {
      super(), this._handlers = {
        requestPermissions: m,
        changeAccount: B,
        disconnect: w,
        subscribe: v,
        unsubscribe: b,
        unsubscribeAll: R,
        getProviderState: j,
        getFullContractState: x,
        computeStorageFee: u,
        getAccountsByCodeHash: _,
        getTransactions: g,
        getTransaction: E,
        findTransaction: T,
        runLocal: O,
        executeLocal: F,
        getExpectedAddress: k,
        getContractFields: M,
        unpackInitData: K,
        getBocHash: L,
        packIntoCell: W,
        unpackFromCell: it,
        extractPublicKey: ot,
        codeToTvc: ft,
        mergeTvc: St,
        splitTvc: Lt,
        setCodeSalt: pt,
        getCodeSalt: mt,
        encodeInternalInput: Ut,
        decodeInput: je,
        decodeOutput: Je,
        decodeEvent: Xe,
        decodeTransaction: ae,
        decodeTransactionEvents: Pe,
        verifySignature: ne,
        sendUnsignedExternalMessage: Ht,
        signData: Tt,
        signDataRaw: _i,
        sendMessage: pi,
        sendMessageDelayed: fi,
        sendExternalMessage: hi,
        sendExternalMessageDelayed: gi
      }, this.setPollingInterval = C => {
        var N;
        if (this._context.connectionController == null || this._context.subscriptionController == null) throw Error("Connection was not initialized");
        (N = this._context.subscriptionController) === null || N === void 0 || N.setPollingInterval(C)
      }, this._context = a
    }
    request(a) {
      const C = this._handlers[a.method];
      if (C == null) throw X(a, `Method '${a.method}' is not supported by standalone provider`);
      return C(this._context, a)
    }
    addListener(a, C) {
      return super.addListener(a, C)
    }
    removeListener(a, C) {
      return super.removeListener(a, C)
    }
    on(a, C) {
      return super.on(a, C)
    }
    once(a, C) {
      return super.once(a, C)
    }
    prependListener(a, C) {
      return super.prependListener(a, C)
    }
    prependOnceListener(a, C) {
      return super.prependOnceListener(a, C)
    }
  }
  n.EverscaleStandaloneClient = h;
  const m = async (I, a) => {
    dt(a);
    const {
      permissions: C
    } = a.params;
    qn(a, a.params, "permissions");
    const N = {
      ...I.permissions
    };
    for (const G of C)
      if (G === "basic" || G === "tonClient") N.basic = !0;
      else if (G === "accountInteraction") {
      if (N.accountInteraction != null) continue;
      N.accountInteraction = await Ls(a, I)
    } else throw X(a, `Permission '${G}' is not supported by standalone provider`);
    I.permissions = N;
    const z = JSON.parse(JSON.stringify(N));
    return I.notify("permissionsChanged", {
      permissions: z
    }), z
  }, B = async (I, a) => {
    pn(a, I);
    const C = {
      ...I.permissions
    };
    C.accountInteraction = await Ls(a, I), I.permissions = C;
    const N = JSON.parse(JSON.stringify(C));
    return I.notify("permissionsChanged", {
      permissions: N
    }), N
  }, w = async (I, a) => {
    var C;
    I.permissions = {}, await ((C = I.subscriptionController) === null || C === void 0 ? void 0 : C.unsubscribeFromAllContracts()), I.notify("permissionsChanged", {
      permissions: {}
    })
  }, v = async (I, a) => {
    dt(a), Vt(a, I);
    const {
      address: C,
      subscriptions: N
    } = a.params;
    nt(a, a.params, "address"), fn(a, a.params, "subscriptions");
    let z;
    try {
      z = i.default.nekoton.repackAddress(C)
    } catch (G) {
      throw X(a, G.toString())
    }
    try {
      return await I.subscriptionController.subscribeToContract(z, N)
    } catch (G) {
      throw X(a, G.toString())
    }
  }, b = async (I, a) => {
    dt(a), Vt(a, I);
    const {
      address: C
    } = a.params;
    nt(a, a.params, "address");
    let N;
    try {
      N = i.default.nekoton.repackAddress(C)
    } catch (z) {
      throw X(a, z.toString())
    }
    await I.subscriptionController.unsubscribeFromContract(N)
  }, R = async (I, a) => {
    var C;
    await ((C = I.subscriptionController) === null || C === void 0 ? void 0 : C.unsubscribeFromAllContracts())
  }, j = async (I, a) => {
    var C, N;
    const z = (C = I.connectionController) === null || C === void 0 ? void 0 : C.initializedTransport,
      G = n.VERSION;
    return {
      version: G,
      numericVersion: (0, o.convertVersionToInt32)(G),
      networkId: z != null ? z.id : 0,
      selectedConnection: z != null ? z.group : "",
      supportedPermissions: [...n.SUPPORTED_PERMISSIONS],
      permissions: JSON.parse(JSON.stringify(I.permissions)),
      subscriptions: ((N = I.subscriptionController) === null || N === void 0 ? void 0 : N.subscriptionStates) || {}
    }
  }, x = async (I, a) => {
    dt(a), Vt(a, I);
    const {
      address: C
    } = a.params;
    nt(a, a.params, "address");
    const {
      connectionController: N
    } = I;
    try {
      return N.use(async ({
        data: {
          transport: z
        }
      }) => ({
        state: await z.getFullContractState(C)
      }))
    } catch (z) {
      throw X(a, z.toString())
    }
  }, u = async (I, a) => {
    dt(a), Vt(a, I);
    const {
      state: C,
      masterchain: N,
      timestamp: z
    } = a.params;
    wi(a, a.params, "state"), Ze(a, a.params, "masterchain"), hn(a, a.params, "timestamp");
    const {
      connectionController: G
    } = I;
    try {
      const ct = await G.use(({
          data: {
            transport: bt
          }
        }) => bt.getBlockchainConfig()),
        et = z ?? ~~(I.clock.nowMs / 1e3);
      return i.default.nekoton.computeStorageFee(ct, C.boc, et, N || !1)
    } catch (ct) {
      throw X(a, ct.toString())
    }
  }, _ = async (I, a) => {
    dt(a), Vt(a, I);
    const {
      codeHash: C,
      limit: N,
      continuation: z
    } = a.params;
    nt(a, a.params, "codeHash"), hn(a, a.params, "limit"), ge(a, a.params, "continuation");
    const {
      connectionController: G
    } = I;
    try {
      return G.use(({
        data: {
          transport: ct
        }
      }) => ct.getAccountsByCodeHash(C, N || 50, z))
    } catch (ct) {
      throw X(a, ct.toString())
    }
  }, g = async (I, a) => {
    dt(a), Vt(a, I);
    const {
      address: C,
      continuation: N,
      limit: z
    } = a.params;
    nt(a, a.params, "address"), fe(a, a.params, "continuation", bi), hn(a, a.params, "limit");
    const {
      connectionController: G
    } = I;
    try {
      return G.use(({
        data: {
          transport: ct
        }
      }) => ct.getTransactions(C, N == null ? void 0 : N.lt, z || 50))
    } catch (ct) {
      throw X(a, ct.toString())
    }
  }, E = async (I, a) => {
    dt(a), Vt(a, I);
    const {
      hash: C
    } = a.params;
    nt(a, a.params, "hash");
    const {
      connectionController: N
    } = I;
    try {
      return {
        transaction: await N.use(({
          data: {
            transport: z
          }
        }) => z.getTransaction(C))
      }
    } catch (z) {
      throw X(a, z.toString())
    }
  }, T = async (I, a) => {
    dt(a), Vt(a, I);
    const {
      inMessageHash: C
    } = a.params;
    fe(a, a.params, "inMessageHash", nt);
    const {
      connectionController: N
    } = I;
    if (C == null) return {
      transaction: void 0
    };
    try {
      return {
        transaction: await N.use(({
          data: {
            transport: z
          }
        }) => z.getDstTransaction(C))
      }
    } catch (z) {
      throw X(a, z.toString())
    }
  }, O = async (I, a) => {
    dt(a);
    const {
      address: C,
      cachedState: N,
      responsible: z,
      functionCall: G,
      withSignatureId: ct
    } = a.params;
    nt(a, a.params, "address"), fe(a, a.params, "cachedState", ts), Ze(a, a.params, "responsible"), xe(a, a.params, "functionCall"), gn(a, a.params, "withSignatureId");
    let et = N;
    if (et == null && (Vt(a, I), et = await I.connectionController.use(async ({
        data: {
          transport: Et
        }
      }) => Et.getFullContractState(C))), et == null) throw X(a, "Account not found");
    if (!et.isDeployed || et.lastTransactionId == null) throw X(a, "Account is not deployed");
    const bt = await he(a, I, ct);
    try {
      const {
        output: Et,
        code: Mt
      } = i.default.nekoton.runLocal(I.clock, et.boc, G.abi, G.method, G.params, z || !1, bt);
      return {
        output: Et,
        code: Mt
      }
    } catch (Et) {
      throw X(a, Et.toString())
    }
  }, F = async (I, a) => {
    dt(a), Vt(a, I);
    const {
      address: C,
      cachedState: N,
      stateInit: z,
      payload: G,
      executorParams: ct,
      messageHeader: et
    } = a.params;
    nt(a, a.params, "address"), fe(a, a.params, "cachedState", ts), ge(a, a.params, "stateInit"), Ds(a, a.params, "payload"), fn(a, a.params, "executorParams"), ke(a, a.params, "messageHeader");
    const {
      clock: bt,
      connectionController: Et
    } = I;
    let Mt;
    try {
      Mt = i.default.nekoton.repackAddress(C)
    } catch (wt) {
      throw X(a, wt.toString())
    }
    const Gt = ~~(bt.nowMs / 1e3),
      se = 60;
    let Ft;
    if (et.type === "external")
      if (G == null || typeof G == "string") Ft = i.default.nekoton.createRawExternalMessage(Mt, z, G, Gt + se).boc;
      else if (et.withoutSignature === !0) Ft = i.default.nekoton.createExternalMessageWithoutSignature(bt, Mt, G.abi, G.method, z, G.params, se).boc;
    else {
      const wt = i.default.nekoton.createExternalMessage(bt, Mt, G.abi, G.method, z, G.params, et.publicKey, se);
      try {
        if ((ct == null ? void 0 : ct.disableSignatureCheck) === !0) Ft = wt.signFake().boc;
        else {
          Ee(a, I);
          const vt = await he(a, I),
            {
              keystore: It
            } = I,
            zt = await It.getSigner(et.publicKey);
          if (zt == null) throw "Signer not found for public key";
          const ht = await zt.sign(wt.hash, vt);
          Ft = wt.sign(ht).boc
        }
      } catch (vt) {
        throw X(a, vt.toString())
      } finally {
        wt.free()
      }
    } else if (et.type === "internal") {
      nt(a, et, "sender"), nt(a, et, "amount"), Ie(a, et, "bounce"), Ze(a, et, "bounced");
      const wt = G == null ? void 0 : typeof G == "string" ? G : i.default.nekoton.encodeInternalInput(G.abi, G.method, G.params);
      Ft = i.default.nekoton.encodeInternalMessage(et.sender, Mt, et.bounce, z, wt, et.amount)
    } else throw X(a, "Unknown message type");
    try {
      const [wt, vt, It] = await Et.use(({
        data: {
          transport: Ct
        }
      }) => Promise.all([N ?? Ct.getFullContractState(Mt), Ct.getBlockchainConfig(), Ct.getNetworkDescription()])), zt = i.default.nekoton.makeFullAccountBoc(wt == null ? void 0 : wt.boc), ht = ct == null ? void 0 : ct.overrideBalance, Bt = i.default.nekoton.executeLocal(vt, zt, Ft, Gt, (ct == null ? void 0 : ct.disableSignatureCheck) === !0, ht != null ? ht.toString() : void 0, It.globalId);
      if (Bt.exitCode != null) throw new Error(`Contract did not accept the message. Exit code: ${Bt.exitCode}`);
      const Xt = Bt,
        Ue = Xt.transaction,
        Qt = i.default.nekoton.parseFullAccountBoc(Xt.account);
      let Yt;
      try {
        if (typeof G == "object" && typeof G != null) {
          const Ct = i.default.nekoton.decodeTransaction(Xt.transaction, G.abi, G.method);
          Yt = Ct == null ? void 0 : Ct.output
        }
      } catch {}
      return {
        transaction: Ue,
        newState: Qt,
        output: Yt
      }
    } catch (wt) {
      throw X(a, wt.toString())
    }
  }, k = async (I, a) => {
    dt(a);
    const {
      tvc: C,
      abi: N,
      workchain: z,
      publicKey: G,
      initParams: ct
    } = a.params;
    nt(a, a.params, "tvc"), nt(a, a.params, "abi"), hn(a, a.params, "workchain"), ge(a, a.params, "publicKey");
    try {
      return i.default.nekoton.getExpectedAddress(C, N, z || 0, G, ct)
    } catch (et) {
      throw X(a, et.toString())
    }
  }, M = async (I, a) => {
    dt(a);
    const {
      address: C,
      abi: N,
      cachedState: z,
      allowPartial: G
    } = a.params;
    nt(a, a.params, "address"), nt(a, a.params, "abi"), fe(a, a.params, "cachedState", ts), Ie(a, a.params, "allowPartial");
    let ct;
    try {
      ct = i.default.nekoton.repackAddress(C)
    } catch (bt) {
      throw X(a, bt.toString())
    }
    let et = z;
    if (et == null && (Vt(a, I), et = await I.connectionController.use(async ({
        data: {
          transport: bt
        }
      }) => bt.getFullContractState(ct))), et == null) return {
      fields: void 0,
      state: void 0
    };
    if (!et.isDeployed || et.lastTransactionId == null) return {
      fields: void 0,
      state: et
    };
    try {
      return {
        fields: i.default.nekoton.unpackContractFields(N, et.boc, G),
        state: et
      }
    } catch (bt) {
      throw X(a, bt.toString())
    }
  }, K = async (I, a) => {
    dt(a);
    const {
      abi: C,
      data: N
    } = a.params;
    nt(a, a.params, "abi"), nt(a, a.params, "data");
    try {
      const {
        publicKey: z,
        data: G
      } = i.default.nekoton.unpackInitData(C, N);
      return {
        publicKey: z,
        initParams: G
      }
    } catch (z) {
      throw X(a, z.toString())
    }
  }, L = async (I, a) => {
    dt(a);
    const {
      boc: C
    } = a.params;
    nt(a, a.params, "boc");
    try {
      return {
        hash: i.default.nekoton.getBocHash(C)
      }
    } catch (N) {
      throw X(a, N.toString())
    }
  }, W = async (I, a) => {
    dt(a);
    const {
      structure: C,
      data: N,
      abiVersion: z
    } = a.params;
    qn(a, a.params, "structure"), fe(a, a.params, "abiVersion", nt);
    try {
      return i.default.nekoton.packIntoCell(C, N, z)
    } catch (G) {
      throw X(a, G.toString())
    }
  }, it = async (I, a) => {
    dt(a);
    const {
      structure: C,
      boc: N,
      allowPartial: z,
      abiVersion: G
    } = a.params;
    qn(a, a.params, "structure"), nt(a, a.params, "boc"), Ie(a, a.params, "allowPartial"), fe(a, a.params, "abiVersion", nt);
    try {
      return {
        data: i.default.nekoton.unpackFromCell(C, N, z, G)
      }
    } catch (ct) {
      throw X(a, ct.toString())
    }
  }, ot = async (I, a) => {
    dt(a);
    const {
      boc: C
    } = a.params;
    nt(a, a.params, "boc");
    try {
      return {
        publicKey: i.default.nekoton.extractPublicKey(C)
      }
    } catch (N) {
      throw X(a, N.toString())
    }
  }, ft = async (I, a) => {
    dt(a);
    const {
      code: C
    } = a.params;
    nt(a, a.params, "code");
    try {
      const {
        boc: N,
        hash: z
      } = i.default.nekoton.codeToTvc(C);
      return {
        tvc: N,
        hash: z
      }
    } catch (N) {
      throw X(a, N.toString())
    }
  }, St = async (I, a) => {
    dt(a);
    const {
      code: C,
      data: N
    } = a.params;
    nt(a, a.params, "code"), nt(a, a.params, "data");
    try {
      const {
        boc: z,
        hash: G
      } = i.default.nekoton.mergeTvc(C, N);
      return {
        tvc: z,
        hash: G
      }
    } catch (z) {
      throw X(a, z.toString())
    }
  }, Lt = async (I, a) => {
    dt(a);
    const {
      tvc: C
    } = a.params;
    nt(a, a.params, "tvc");
    try {
      return i.default.nekoton.splitTvc(C)
    } catch (N) {
      throw X(a, N.toString())
    }
  }, pt = async (I, a) => {
    dt(a);
    const {
      code: C,
      salt: N
    } = a.params;
    nt(a, a.params, "code"), nt(a, a.params, "salt");
    try {
      const {
        boc: z,
        hash: G
      } = i.default.nekoton.setCodeSalt(C, N);
      return {
        code: z,
        hash: G
      }
    } catch (z) {
      throw X(a, z.toString())
    }
  }, mt = async (I, a) => {
    dt(a);
    const {
      code: C
    } = a.params;
    nt(a, a.params, "code");
    try {
      return {
        salt: i.default.nekoton.getCodeSalt(C)
      }
    } catch (N) {
      throw X(a, N.toString())
    }
  }, Ut = async (I, a) => {
    dt(a), xe(a, a, "params");
    const {
      abi: C,
      method: N,
      params: z
    } = a.params;
    try {
      return {
        boc: i.default.nekoton.encodeInternalInput(C, N, z)
      }
    } catch (G) {
      throw X(a, G.toString())
    }
  }, je = async (I, a) => {
    dt(a);
    const {
      body: C,
      abi: N,
      method: z,
      internal: G
    } = a.params;
    nt(a, a.params, "body"), nt(a, a.params, "abi"), bn(a, a.params, "method"), Ie(a, a.params, "internal");
    try {
      return i.default.nekoton.decodeInput(C, N, z, G) || null
    } catch (ct) {
      throw X(a, ct.toString())
    }
  }, Je = async (I, a) => {
    dt(a);
    const {
      body: C,
      abi: N,
      method: z
    } = a.params;
    nt(a, a.params, "body"), nt(a, a.params, "abi"), bn(a, a.params, "method");
    try {
      return i.default.nekoton.decodeOutput(C, N, z) || null
    } catch (G) {
      throw X(a, G.toString())
    }
  }, Xe = async (I, a) => {
    dt(a);
    const {
      body: C,
      abi: N,
      event: z
    } = a.params;
    nt(a, a.params, "body"), nt(a, a.params, "abi"), bn(a, a.params, "event");
    try {
      return i.default.nekoton.decodeEvent(C, N, z) || null
    } catch (G) {
      throw X(a, G.toString())
    }
  }, ae = async (I, a) => {
    dt(a);
    const {
      transaction: C,
      abi: N,
      method: z
    } = a.params;
    nt(a, a.params, "abi"), bn(a, a.params, "method");
    try {
      return i.default.nekoton.decodeTransaction(C, N, z) || null
    } catch (G) {
      throw X(a, G.toString())
    }
  }, Pe = async (I, a) => {
    dt(a);
    const {
      transaction: C,
      abi: N
    } = a.params;
    nt(a, a.params, "abi");
    try {
      return {
        events: i.default.nekoton.decodeTransactionEvents(C, N)
      }
    } catch (z) {
      throw X(a, z.toString())
    }
  }, ne = async (I, a) => {
    dt(a);
    const {
      publicKey: C,
      dataHash: N,
      signature: z,
      withSignatureId: G
    } = a.params;
    nt(a, a.params, "publicKey"), nt(a, a.params, "dataHash"), nt(a, a.params, "signature"), gn(a, a.params, "withSignatureId");
    const ct = await he(a, I, G);
    try {
      return {
        isValid: i.default.nekoton.verifySignature(C, N, z, ct)
      }
    } catch (et) {
      throw X(a, et.toString())
    }
  }, Ht = async (I, a) => {
    dt(a), Vt(a, I);
    const {
      recipient: C,
      stateInit: N,
      payload: z,
      local: G,
      executorParams: ct
    } = a.params;
    nt(a, a.params, "recipient"), ge(a, a.params, "stateInit"), Ds(a, a.params, "payload"), Ze(a, a.params, "local"), fn(a, a.params, "executorParams");
    let et;
    try {
      et = i.default.nekoton.repackAddress(C)
    } catch (ht) {
      throw X(a, ht.toString())
    }
    const {
      clock: bt,
      subscriptionController: Et,
      properties: Mt
    } = I, Gt = ht => {
      try {
        if (typeof z == "string" || z == null) {
          const Bt = ~~(bt.nowMs / 1e3) + ht;
          return i.default.nekoton.createRawExternalMessage(et, N, z, ~~Bt)
        } else return i.default.nekoton.createExternalMessageWithoutSignature(bt, et, z.abi, z.method, N, z.params, ~~ht)
      } catch (Bt) {
        throw X(a, Bt.toString())
      }
    }, se = ht => {
      let Bt;
      try {
        if (typeof z == "object" && typeof z != null) {
          const Xt = i.default.nekoton.decodeTransaction(ht, z.abi, z.method);
          Bt = Xt == null ? void 0 : Xt.output
        }
      } catch {}
      return {
        transaction: ht,
        output: Bt
      }
    };
    if (G === !0) {
      const ht = Gt(60),
        Bt = await Et.sendMessageLocally(et, ht, ct);
      return se(Bt)
    }
    let Ft = Mt.message.timeout;
    for (let ht = 0; ht < Mt.message.retryCount; ++ht) {
      const Bt = Gt(Ft),
        Xt = await Et.sendMessage(et, Bt);
      if (Xt == null) {
        Ft *= Mt.message.timeoutGrowFactor;
        continue
      }
      return se(Xt)
    }
    const wt = "Message expired",
      vt = Gt(60),
      It = await Et.sendMessageLocally(et, vt).catch(ht => {
        throw X(a, `${wt}. ${ht.toString()}`)
      }),
      zt = It.exitCode != null ? `. Possible exit code: ${It.exitCode}` : "";
    throw X(a, `${wt}${zt}`)
  }, Tt = async (I, a) => {
    Ee(a, I), dt(a);
    const {
      publicKey: C,
      data: N,
      withSignatureId: z
    } = a.params;
    nt(a, a.params, "publicKey"), nt(a, a.params, "data"), gn(a, a.params, "withSignatureId");
    const G = await he(a, I, z),
      {
        keystore: ct
      } = I,
      et = await ct.getSigner(C);
    if (et == null) throw X(a, "Signer not found for public key");
    try {
      const bt = i.default.nekoton.getDataHash(N);
      return {
        dataHash: bt,
        ...await et.sign(bt, G).then(i.default.nekoton.extendSignature)
      }
    } catch (bt) {
      throw X(a, bt.toString())
    }
  }, _i = async (I, a) => {
    Ee(a, I), dt(a);
    const {
      publicKey: C,
      data: N,
      withSignatureId: z
    } = a.params;
    nt(a, a.params, "publicKey"), nt(a, a.params, "data"), gn(a, a.params, "withSignatureId");
    const G = await he(a, I, z),
      {
        keystore: ct
      } = I,
      et = await ct.getSigner(C);
    if (et == null) throw X(a, "Signer not found for public key");
    try {
      return await et.sign(N, G).then(i.default.nekoton.extendSignature)
    } catch (bt) {
      throw X(a, bt.toString())
    }
  }, pi = async (I, a) => {
    Ee(a, I), pn(a, I), Vt(a, I), dt(a);
    const {
      sender: C,
      recipient: N,
      amount: z,
      bounce: G,
      payload: ct,
      stateInit: et
    } = a.params;
    nt(a, a.params, "sender"), nt(a, a.params, "recipient"), nt(a, a.params, "amount"), Ie(a, a.params, "bounce"), fe(a, a.params, "payload", xe), ge(a, a.params, "stateInit");
    const bt = await he(a, I),
      {
        clock: Et,
        properties: Mt,
        subscriptionController: Gt,
        connectionController: se,
        keystore: Ft,
        accountsStorage: wt
      } = I;
    let vt, It, zt;
    try {
      vt = i.default.nekoton.repackAddress(C), It = i.default.nekoton.repackAddress(N), zt = await wt.getAccount(vt).then(_e => {
        if (_e != null) return _e;
        throw new Error("Sender not found")
      })
    } catch (_e) {
      throw X(a, _e.toString())
    }
    const ht = async _e => {
      try {
        return zt.prepareMessage({
          recipient: It,
          amount: z,
          bounce: G,
          payload: ct,
          stateInit: et,
          timeout: ~~_e,
          signatureId: bt
        }, new p.AccountsStorageContext(Et, se, i.default.nekoton, Ft))
      } catch (es) {
        throw X(a, es.toString())
      }
    };
    let Bt = Mt.message.timeout;
    const Xt = Mt.message.retryTransfers !== !1 ? Mt.message.retryCount : 1;
    for (let _e = 0; _e < Xt; ++_e) {
      const es = await ht(Bt),
        Rs = await Gt.sendMessage(vt, es);
      if (Rs == null) {
        Bt *= Mt.message.timeoutGrowFactor;
        continue
      }
      return {
        transaction: Rs
      }
    }
    const Ue = "Message expired",
      Qt = await ht(60),
      Yt = await Gt.sendMessageLocally(vt, Qt).catch(_e => {
        throw X(a, `${Ue}. ${_e.toString()}`)
      }),
      Ct = Yt.exitCode != null ? `. Possible exit code: ${Yt.exitCode}` : "";
    throw X(a, `${Ue}${Ct}`)
  }, fi = async (I, a) => {
    Ee(a, I), pn(a, I), dt(a), Vt(a, I);
    const {
      sender: C,
      recipient: N,
      amount: z,
      bounce: G,
      payload: ct,
      stateInit: et
    } = a.params;
    nt(a, a.params, "sender"), nt(a, a.params, "recipient"), nt(a, a.params, "amount"), Ie(a, a.params, "bounce"), fe(a, a.params, "payload", xe), ge(a, a.params, "stateInit");
    const bt = await he(a, I),
      {
        clock: Et,
        subscriptionController: Mt,
        connectionController: Gt,
        keystore: se,
        accountsStorage: Ft,
        notify: wt
      } = I;
    let vt, It;
    try {
      vt = i.default.nekoton.repackAddress(C), It = i.default.nekoton.repackAddress(N)
    } catch (ht) {
      throw X(a, ht.toString())
    }
    let zt;
    try {
      const ht = await Ft.getAccount(vt);
      if (ht == null) throw new Error("Sender not found");
      zt = await ht.prepareMessage({
        recipient: It,
        amount: z,
        bounce: G,
        payload: ct,
        stateInit: et,
        timeout: 60,
        signatureId: bt
      }, new p.AccountsStorageContext(Et, Gt, i.default.nekoton, se))
    } catch (ht) {
      throw X(a, ht.toString())
    }
    return Mt.sendMessage(vt, zt).then(ht => {
      wt("messageStatusUpdated", {
        address: vt,
        hash: zt.hash,
        transaction: ht
      })
    }).catch(console.error), {
      message: {
        account: vt,
        hash: zt.hash,
        expireAt: zt.expireAt
      }
    }
  }, hi = async (I, a) => {
    Ee(a, I), dt(a), Vt(a, I);
    const {
      publicKey: C,
      recipient: N,
      stateInit: z,
      payload: G,
      local: ct,
      executorParams: et
    } = a.params;
    nt(a, a.params, "publicKey"), nt(a, a.params, "recipient"), ge(a, a.params, "stateInit"), xe(a, a.params, "payload"), Ze(a, a.params, "local"), fn(a, a.params, "executorParams");
    const bt = await he(a, I);
    let Et;
    try {
      Et = i.default.nekoton.repackAddress(N)
    } catch (Qt) {
      throw X(a, Qt.toString())
    }
    const {
      clock: Mt,
      subscriptionController: Gt,
      keystore: se,
      properties: Ft
    } = I, wt = await se.getSigner(C);
    if (wt == null) throw X(a, "Signer not found for public key");
    const vt = async Qt => {
      let Yt;
      try {
        Yt = i.default.nekoton.createExternalMessage(Mt, Et, G.abi, G.method, z, G.params, C, ~~Qt)
      } catch (Ct) {
        throw X(a, Ct.toString())
      }
      try {
        const Ct = await wt.sign(Yt.hash, bt);
        return Yt.sign(Ct)
      } catch (Ct) {
        throw X(a, Ct.toString())
      } finally {
        Yt.free()
      }
    }, It = Qt => {
      let Yt;
      try {
        const Ct = i.default.nekoton.decodeTransaction(Qt, G.abi, G.method);
        Yt = Ct == null ? void 0 : Ct.output
      } catch {}
      return {
        transaction: Qt,
        output: Yt
      }
    };
    if (ct === !0) {
      const Qt = await vt(60),
        Yt = await Gt.sendMessageLocally(Et, Qt, et);
      return It(Yt)
    }
    let zt = Ft.message.timeout;
    for (let Qt = 0; Qt < Ft.message.retryCount; ++Qt) {
      const Yt = await vt(zt),
        Ct = await Gt.sendMessage(Et, Yt);
      if (Ct == null) {
        zt *= Ft.message.timeoutGrowFactor;
        continue
      }
      return It(Ct)
    }
    const ht = "Message expired",
      Bt = await vt(60),
      Xt = await Gt.sendMessageLocally(Et, Bt).catch(Qt => {
        throw X(a, `${ht}. ${Qt.toString()}`)
      }),
      Ue = Xt.exitCode != null ? `. Possible exit code: ${Xt.exitCode}` : "";
    throw X(a, `${ht}${Ue}`)
  }, gi = async (I, a) => {
    Ee(a, I), dt(a), Vt(a, I);
    const {
      publicKey: C,
      recipient: N,
      stateInit: z,
      payload: G
    } = a.params;
    nt(a, a.params, "publicKey"), nt(a, a.params, "recipient"), ge(a, a.params, "stateInit"), xe(a, a.params, "payload");
    const ct = await he(a, I);
    let et;
    try {
      et = i.default.nekoton.repackAddress(N)
    } catch (It) {
      throw X(a, It.toString())
    }
    const {
      clock: bt,
      subscriptionController: Et,
      keystore: Mt,
      properties: Gt,
      notify: se
    } = I, Ft = await Mt.getSigner(C);
    if (Ft == null) throw X(a, "Signer not found for public key");
    let wt;
    try {
      wt = i.default.nekoton.createExternalMessage(bt, et, G.abi, G.method, z, G.params, C, ~~Gt.message.timeout)
    } catch (It) {
      throw X(a, It.toString())
    }
    let vt;
    try {
      const It = await Ft.sign(wt.hash, ct);
      vt = wt.sign(It)
    } catch (It) {
      throw X(a, It.toString())
    } finally {
      wt.free()
    }
    return Et.sendMessage(et, vt).then(It => {
      se("messageStatusUpdated", {
        address: et,
        hash: vt.hash,
        transaction: It
      })
    }).catch(console.error), {
      message: {
        account: et,
        hash: vt.hash,
        expireAt: vt.expireAt
      }
    }
  };

  function Ee(I, a) {
    if (a.keystore == null) throw X(I, "Keystore not found")
  }

  function pn(I, a) {
    if (a.accountsStorage == null) throw X(I, "AccountsStorage not found")
  }

  function Vt(I, a) {
    if (a.connectionController == null || a.subscriptionController == null) throw X(I, "Connection was not initialized")
  }
  async function he(I, a, C) {
    if (C !== !1) {
      {
        if (typeof C == "number") return C;
        if (a.connectionController == null) return
      }
      return a.connectionController.use(async ({
        data: {
          transport: N
        }
      }) => N.getSignatureId()).catch(N => {
        throw X(I, "Failed to fetch signature id")
      })
    }
  }

  function dt(I) {
    if (I.params == null || typeof I.params != "object") throw X(I, "required params object")
  }

  function ke(I, a, C) {
    if (typeof a[C] != "object") throw X(I, `'${String(C)}' must be an object`)
  }

  function fn(I, a, C) {
    const N = a[C];
    if (N != null && typeof N != "object") throw X(I, `'${String(C)}' must be an object if specified`)
  }

  function Ie(I, a, C) {
    if (typeof a[C] != "boolean") throw X(I, `'${String(C)}' must be a boolean`)
  }

  function Ze(I, a, C) {
    const N = a[C];
    if (N != null && typeof N != "boolean") throw X(I, `'${String(C)}' must be a boolean if specified`)
  }

  function nt(I, a, C) {
    const N = a[C];
    if (typeof N != "string" || N.length === 0) throw X(I, `'${String(C)}' must be non-empty string`)
  }

  function ge(I, a, C) {
    const N = a[C];
    if (N != null && (typeof N != "string" || N.length === 0)) throw X(I, `'${String(C)}' must be a non-empty string if provided`)
  }

  function hn(I, a, C) {
    const N = a[C];
    if (N != null && typeof N != "number") throw X(I, `'${String(C)}' must be a number if provider`)
  }

  function qn(I, a, C) {
    const N = a[C];
    if (!Array.isArray(N)) throw X(I, `'${String(C)}' must be an array`)
  }

  function fe(I, a, C, N) {
    a[C] != null && N(I, a, C)
  }

  function gn(I, a, C) {
    const N = a[C];
    if (N != null && typeof N != "boolean" && typeof N != "number") throw X(I, `'${String(C)}' must be an optional boolean or number`)
  }

  function bi(I, a, C) {
    ke(I, a, C);
    const N = a[C];
    nt(I, N, "lt"), nt(I, N, "hash")
  }

  function mi(I, a, C) {
    ke(I, a, C);
    const N = a[C];
    Ie(I, N, "isExact"), nt(I, N, "lt"), ge(I, N, "hash")
  }

  function wi(I, a, C) {
    ke(I, a, C);
    const N = a[C];
    nt(I, N, "boc")
  }

  function ts(I, a, C) {
    ke(I, a, C);
    const N = a[C];
    nt(I, N, "balance"), fe(I, N, "lastTransactionId", mi), Ie(I, N, "isDeployed")
  }

  function xe(I, a, C) {
    ke(I, a, C);
    const N = a[C];
    nt(I, N, "abi"), nt(I, N, "method"), ke(I, N, "params")
  }

  function Ds(I, a, C) {
    const N = a[C];
    if (!(typeof N == "string" || N == null))
      if (typeof N == "object") nt(I, N, "abi"), nt(I, N, "method"), ke(I, N, "params");
      else throw X(I, `'${String(C)}' must be a function all or optional string`)
  }

  function bn(I, a, C) {
    const N = a[C];
    if (N != null && typeof N != "string" && !Array.isArray(N)) throw X(I, `'${String(C)}' must be a method name or an array of possible names`)
  }
  async function Ls(I, a) {
    pn(I, a), Vt(I, a);
    const C = a.accountsStorage.defaultAccount;
    if (C == null) throw X(I, "Default account not set in accounts storage");
    const N = await a.accountsStorage.getAccount(C);
    if (N == null) throw X(I, "Default account not found");
    const z = await N.fetchPublicKey(new p.AccountsStorageContext(a.clock, a.connectionController, i.default.nekoton));
    return {
      address: N.address.toString(),
      publicKey: z,
      contractType: "unknown"
    }
  }
  const X = (I, a, C) => new yi(2, `${I.method}: ${a}`, C);
  class yi extends Error {
    constructor(a, C, N) {
      if (!Number.isInteger(a)) throw new Error('"code" must be an integer');
      if (!C || typeof C != "string") throw new Error('"message" must be a nonempty string');
      super(C), this.code = a, this.data = N
    }
    serialize() {
      const a = {
        code: this.code,
        message: this.message
      };
      return this.data !== void 0 && (a.data = this.data), this.stack && (a.stack = this.stack), a
    }
    toString() {
      return (0, r.default)(this.serialize(), vi, 2)
    }
  }
  const vi = (I, a) => {
    if (a !== "[Circular]") return a
  }
})(Hr);
(function(n) {
  var t = rt && rt.__createBinding || (Object.create ? function(y, S, A, h) {
      h === void 0 && (h = A);
      var m = Object.getOwnPropertyDescriptor(S, A);
      (!m || ("get" in m ? !S.__esModule : m.writable || m.configurable)) && (m = {
        enumerable: !0,
        get: function() {
          return S[A]
        }
      }), Object.defineProperty(y, h, m)
    } : function(y, S, A, h) {
      h === void 0 && (h = A), y[h] = S[A]
    }),
    e = rt && rt.__setModuleDefault || (Object.create ? function(y, S) {
      Object.defineProperty(y, "default", {
        enumerable: !0,
        value: S
      })
    } : function(y, S) {
      y.default = S
    }),
    s = rt && rt.__importStar || function(y) {
      if (y && y.__esModule) return y;
      var S = {};
      if (y != null)
        for (var A in y) A !== "default" && Object.prototype.hasOwnProperty.call(y, A) && t(S, y, A);
      return e(S, y), S
    },
    r = rt && rt.__exportStar || function(y, S) {
      for (var A in y) A !== "default" && !Object.prototype.hasOwnProperty.call(S, A) && t(S, y, A)
    },
    i = rt && rt.__importDefault || function(y) {
      return y && y.__esModule ? y : {
        default: y
      }
    };
  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  const o = s(Gl),
    l = o,
    d = i(ie);
  let p = !1,
    f;
  const P = new Promise((y, S) => {
    f = {
      resolve: y,
      reject: S
    }
  });
  d.default.ensureNekotonLoaded = y => (p || (p = !0, (0, o.default)(y).then(f.resolve).catch(f.reject)), P), d.default.nekoton = l, d.default.fetch = fetch, d.default.debugLog = y => {}, r(Hr, n)
})(ws);
const Ju = () => {
    const n = Ke();
    return {
      getDropItem: ({
        claimId: e,
        airdropName: s
      }) => {
        const r = new ws.Clock,
          i = new Ce.ProviderRpcClient({
            fallback: () => ws.EverscaleStandaloneClient.create({
              clock: r,
              connection: {
                data: {
                  endpoint: "https://jrpc-ton.broxus.com/rpc"
                },
                id: Number(Oi.MAINNET),
                type: "jrpc"
              }
            }),
            forceUseFallback: !0
          }),
          o = new $r.AirdropUI({
            account: n.tonConnectUI.value.connector.account,
            onStatusChange: n.tonConnectUI.value.connector.onStatusChange.bind(n.tonConnectUI.value.connector),
            sendTransaction: n.tonConnectUI.value.sendTransaction.bind(n.tonConnectUI.value)
          }, i, r),
          l = Jt(o.getState());
        n.connectionRestoredPromise.then(() => {
          o.setAirdropName(s), o.setClaimId(e)
        });
        const d = o.subscribe(y => {
          l.value = y
        });
        return {
          state: kt(() => l.value),
          destroy: () => {
            d(), o.destory()
          },
          claim: async () => await o.claim()
        }
      },
      AirdropStatus: Rr
    }
  },
  Xu = {
    class: "pages-wallet-claim-drop-process page"
  },
  Zu = gt({
    __name: "Process",
    props: {
      point: {},
      asset: {}
    },
    emits: ["close"],
    setup(n) {
      const t = n,
        e = kt(() => {
          if (!t.point.withdrawal) throw te("Drop is not available");
          return t.point.withdrawal
        }),
        s = Ke(),
        r = Jt(null),
        {
          state: i
        } = hr(),
        {
          getDropItem: o,
          AirdropStatus: l
        } = Ju(),
        d = {
          dogs_dev_test_3: "blumtest",
          dogs_stage_test_1: "blumtest",
          dogs_stage_test_2: "blumtest",
          dogs_prod_1: "blumprod"
        },
        {
          state: p,
          destroy: f,
          claim: P
        } = o({
          claimId: e.value.claimId,
          airdropName: d[e.value.airdropName]
        });
      return sn(() => ({
        state: p.value,
        walletLocalAndRemoteState: i.value,
        queueComp: r.value
      }), (y, S) => {
        var m;
        if (y.state.status === l.Loading || y.walletLocalAndRemoteState.status !== ps.CONNECTED || !y.queueComp) return;
        const A = new _s(.1),
          h = async () => {
            try {
              return await P(), $i(!0)
            } catch (B) {
              return Ni(B)
            }
          };
        if (![l.NoAirdrop, l.NoUser, l.NoReward].includes(p.value.status))
          if (p.value.status === l.InQueue && ((m = p.value.claimData) == null ? void 0 : m.status) === "inQueue") y.queueComp.openWaiting({
            spotPosition: p.value.claimData.place
          });
          else if (p.value.status === l.CanClaim)
          if (p.value.claimLoading) y.queueComp.openTransferring({
            transferringPoints: e.value.amount.toNumber(),
            imageUrl: t.asset.imageUrl,
            symbol: t.asset.symbol
          });
          else {
            const B = S.state.status !== y.state.status;
            y.queueComp.openReadyToClaim({
              pointsToClaim: e.value.amount.toNumber(),
              imageUrl: t.asset.imageUrl,
              symbol: t.asset.symbol,
              fee: A,
              walletAddress: y.walletLocalAndRemoteState.address,
              tonBalance: y.walletLocalAndRemoteState.tonBalance,
              claimFn: h
            }, B)
          }
        else p.value.status === l.HasClaimed && (y.queueComp.openDone(), S.state.status !== l.HasClaimed && s.tonConnectUI.value.closeModal())
      }), ur(f), (y, S) => {
        const A = mr,
          h = xc;
        return U(), q("div", Xu, [st(A), st(h, {
          ref_key: "queueComp",
          ref: r,
          onClose: S[0] || (S[0] = m => y.$emit("close"))
        }, null, 512)])
      }
    }
  }),
  qu = _t(Zu, [
    ["__scopeId", "data-v-8504e7ba"]
  ]),
  td = gt({
    __name: "Sheet",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(n) {
      const t = Dn(n, "modelValue");
      return (e, s) => {
        const r = Er,
          i = Ln;
        return U(), ut(i, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = o => t.value = o),
          class: "pages-wallet-block-details-soon-notification-sheet"
        }, {
          default: Dt(() => [st(r, {
            onClose: s[0] || (s[0] = o => t.value = !1)
          })]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  ed = _t(td, [
    ["__scopeId", "data-v-c6ce1d42"]
  ]),
  nd = {
    class: "pages-wallet-asset-points"
  },
  sd = gt({
    __name: "AssetPoints",
    props: {
      points: {
        type: Array,
        required: !0
      }
    },
    setup(n) {
      const t = n,
        e = Di(),
        s = y => y.withdrawal ? y.withdrawal.eligible ? {
          highlighted: !0,
          value: J("wallet.drop.point_description.ready_to_transfer")
        } : {
          highlighted: !1,
          value: J("wallet.drop.point_description.not_enough")
        } : void 0,
        r = y => ({
          id: y.currencyId,
          name: y.name,
          symbol: y.symbol,
          balance: y.balance,
          fiat: y.fiatValue,
          imageUrl: y.imageUrl,
          clickable: !!p(y),
          description: s(y)
        }),
        i = kt(() => t.points.map(y => ({
          asset: r(y),
          point: y
        }))),
        o = Jt(),
        l = Jt(),
        d = Jt(!1);

      function p(y) {
        if (y.symbol === "DOGS") return () => {
          y.withdrawal ? f.value.status !== ps.CONNECTED ? e.runConnectionFlow() : o.value = y : d.value = !0
        }
      }
      const f = hr().state,
        P = kt(() => {
          const y = o.value,
            S = y == null ? void 0 : y.withdrawal;
          if (f.value.status !== ps.CONNECTED || !S) return {
            type: "loading"
          };
          const A = r(y);
          if (!S.eligible) return {
            type: "not_enough_to_transfer",
            asset: A,
            amount: y.balance.value,
            minAmount: S.minAmount
          };
          const h = Li(S.eligibleWalletAddress),
            m = f.value.address;
          return Pn.Address.parse(h).equals(Pn.Address.parse(m)) ? {
            type: "ready_to_transfer",
            asset: A,
            amount: S.amount,
            walletAddress: h,
            tonBalance: f.value.tonBalance,
            claim: () => {
              l.value = {
                point: y,
                asset: A
              }, o.value = void 0
            }
          } : {
            type: "wrong_wallet_address",
            asset: A,
            eligibleWalletAddress: h
          }
        });
      return (y, S) => {
        const A = Or,
          h = oc,
          m = qu,
          B = ed;
        return U(), q("div", nd, [(U(!0), q(xt, null, Be($(i), w => (U(), ut(A, fs({
          key: w.asset.id,
          ref_for: !0
        }, w.asset, {
          onClick: v => {
            var b;
            return (b = p(w.point)) == null ? void 0 : b()
          }
        }), null, 16, ["onClick"]))), 128)), st(h, {
          "model-value": !!$(o),
          state: $(P),
          "onUpdate:modelValue": S[0] || (S[0] = w => o.value = void 0)
        }, null, 8, ["model-value", "state"]), $(l) ? (U(), ut(m, fs({
          key: 0
        }, $(l), {
          onClose: S[1] || (S[1] = w => l.value = void 0)
        }), null, 16)) : Pt("", !0), st(B, {
          modelValue: $(d),
          "onUpdate:modelValue": S[2] || (S[2] = w => Ps(d) ? d.value = w : null)
        }, null, 8, ["modelValue"])])
      }
    }
  }),
  rd = _t(sd, [
    ["__scopeId", "data-v-a38e7341"]
  ]),
  id = ["onClick"],
  ad = gt({
    __name: "KitTabsToggle",
    props: In({
      tabs: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(n) {
      const t = n,
        e = Dn(n, "modelValue");
      sn(e, () => Ri().$webApp.HapticFeedback.impactOccurred("light"));
      const s = kt(() => {
        const i = t.tabs.length,
          o = 0,
          l = t.tabs.findIndex(p => p.key === e.value),
          d = `(100% - ${2*2}px - ${i-1} * ${o}px) / ${i}`;
        return {
          width: `calc(${d})`,
          left: `calc(${d} * ${l} + 2px + ${o*l}px)`
        }
      });
      return (r, i) => (U(), q("div", {
        class: "kit-tabs-toggle",
        style: ds({
          gridTemplateColumns: `repeat(${r.tabs.length}, 1fr)`
        })
      }, [H("div", {
        class: "active-back",
        style: ds($(s))
      }, null, 4), (U(!0), q(xt, null, Be(r.tabs, o => (U(), q("button", {
        key: o.key,
        class: de(["tab reset", {
          "is-active": e.value === o.key
        }]),
        onClick: l => e.value = o.key
      }, at(o.label), 11, id))), 128))], 4))
    }
  }),
  od = _t(ad, [
    ["__scopeId", "data-v-8fb6ab30"]
  ]),
  cd = {
    class: "kit-tabs-slider"
  },
  ld = {
    key: 0,
    class: "slide"
  },
  ud = gt({
    __name: "KitTabsSlider",
    props: {
      tabs: {}
    },
    setup(n) {
      const t = n,
        e = Jt(t.tabs[0].key),
        s = Jt("left"),
        r = Jt(),
        i = o => {
          if (o === e.value) return;
          const l = t.tabs.findIndex(p => p.key === e.value),
            d = t.tabs.findIndex(p => p.key === o);
          s.value = l < d ? "right" : "left", r.value && (r.value.scrollTop = 0), e.value = o
        };
      return (o, l) => {
        const d = od;
        return U(), q("div", cd, [st(d, {
          "model-value": $(e),
          tabs: o.tabs,
          "onUpdate:modelValue": l[0] || (l[0] = p => i(p))
        }, null, 8, ["model-value", "tabs"]), st(Fi, {
          tag: "div",
          class: "slider-wrapper",
          name: `slider-transition-from-${$(s)}`
        }, {
          default: Dt(() => [(U(!0), q(xt, null, Be(o.tabs, p => (U(), q(xt, {
            key: p.key
          }, [p.key === $(e) ? (U(), q("div", ld, [Tn(o.$slots, p.key, {}, void 0, !0)])) : Pt("", !0)], 64))), 128))]),
          _: 3
        }, 8, ["name"])])
      }
    }
  }),
  dd = _t(ud, [
    ["__scopeId", "data-v-84da8c16"]
  ]),
  _d = {
    class: "pages-wallet-block-points"
  },
  pd = {
    class: "heading"
  },
  fd = {
    class: "title"
  },
  hd = gt({
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
    setup(n) {
      const t = kt(() => [{
        key: "balances",
        label: J("wallet.points.tabs.balances")
      }, {
        key: "history",
        label: J("wallet.points.tabs.history")
      }]);
      return (e, s) => {
        const r = Na,
          i = ao,
          o = Ye,
          l = wo,
          d = rd,
          p = dd;
        return U(), q("div", _d, [H("div", pd, [H("div", fd, at(("t" in e ? e.t : $(J))("wallet.points.title")), 1), st(r, {
          value: n.points.totalFiatValue.USD
        }, null, 8, ["value"])]), st(p, {
          tabs: $(t),
          class: "tabs"
        }, {
          history: Dt(() => [st(i, {
            class: "history"
          })]),
          balances: Dt(() => [n.notification === void 0 ? (U(), ut(o, {
            key: 0,
            class: "notification-skeleton notification"
          })) : n.notification === "default" ? (U(), ut(l, {
            key: 1,
            class: "notification"
          })) : Pt("", !0), st(d, {
            points: n.points.points
          }, null, 8, ["points"])]),
          _: 1
        }, 8, ["tabs"])])
      }
    }
  }),
  gd = _t(hd, [
    ["__scopeId", "data-v-013937d8"]
  ]),
  bd = {
    class: "pages-wallet-connected-banner"
  },
  md = {
    key: 1,
    class: "balance"
  },
  wd = {
    class: "value"
  },
  yd = {
    key: 2,
    class: "last-updated"
  },
  vd = gt({
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
    setup(n) {
      const t = n,
        e = kt(() => {
          if (t.updatedAt && Date.now() - t.updatedAt.getTime() > 3e5) return Ki(t.updatedAt)
        });
      return (s, r) => {
        const i = Sr,
          o = Ye;
        return U(), q("div", bd, [st(i, {
          address: n.address
        }, null, 8, ["address"]), n.fiatValue === void 0 || n.fiatValue.USD == null ? (U(), ut(o, {
          key: 0,
          class: "skeleton"
        })) : (U(), q("div", md, [r[0] || (r[0] = H("span", {
          class: "symbol"
        }, "$", -1)), H("span", wd, at(n.fiatValue.USD.default), 1)])), $(e) ? (U(), q("div", yd, at(("t" in s ? s.t : $(J))("wallet.connected.last_updated", {
          updatedAtLabel: $(e)
        })), 1)) : Pt("", !0)])
      }
    }
  }),
  Ad = _t(vd, [
    ["__scopeId", "data-v-6e2f0c44"]
  ]),
  kd = {
    class: "pages-wallet-controls"
  },
  Id = ["onClick"],
  Sd = {
    class: "icon"
  },
  Td = ["src", "alt"],
  Cd = {
    class: "label"
  },
  Pd = gt({
    __name: "Controls",
    emits: ["show:points", "show:tokens-history"],
    setup(n, {
      emit: t
    }) {
      const e = t,
        s = kt(() => [{
          label: J("wallet.controls.receive"),
          icon: "arrow-down",
          disabled: !0
        }, {
          label: J("wallet.controls.send"),
          icon: "arrow-up",
          disabled: !0
        }, {
          label: J("wallet.controls.history"),
          icon: "clock",
          onClick: () => e("show:tokens-history")
        }, {
          label: J("wallet.controls.points"),
          icon: "leaf",
          onClick: () => e("show:points")
        }]);
      return (r, i) => (U(), q("div", kd, [(U(!0), q(xt, null, Be($(s), (o, l) => (U(), q("button", {
        key: l,
        class: de(["control reset", {
          "is-disabled": o.disabled
        }]),
        onClick: d => {
          var p;
          return (p = o.onClick) == null ? void 0 : p.call(o)
        }
      }, [H("div", Sd, [H("img", {
        src: ("imgResolver" in r ? r.imgResolver : $(gr))(o.icon, "svg"),
        alt: `${o.label} icon`
      }, null, 8, Td)]), H("div", Cd, at(o.label), 1)], 10, Id))), 128))]))
    }
  }),
  Ed = _t(Pd, [
    ["__scopeId", "data-v-2fa06ff8"]
  ]),
  Md = {
    class: "pages-wallet-block-tokens-only-ton-notification"
  },
  Od = {
    class: "title"
  },
  $d = {
    class: "text"
  },
  Nd = gt({
    __name: "TokensOnlyTonNotification",
    setup(n) {
      return (t, e) => {
        const s = Qe,
          r = Mr;
        return U(), ut(r, {
          text: ("t" in t ? t.t : $(J))("wallet.only_ton_notification.label"),
          image: ("imgResolver" in t ? t.imgResolver : $(gr))("ton-logo", "svg")
        }, {
          default: Dt(({
            close: i
          }) => [H("div", Md, [e[0] || (e[0] = H("img", {
            src: Rn,
            alt: "Ton logo"
          }, null, -1)), H("div", Od, at(("t" in t ? t.t : $(J))("wallet.only_ton_notification.title")), 1), H("div", $d, at(("t" in t ? t.t : $(J))("wallet.only_ton_notification.text")), 1), st(s, {
            label: ("t" in t ? t.t : $(J))("base.got_it"),
            fill: "",
            class: "button",
            size: $(ye).LARGE,
            onClick: i
          }, null, 8, ["label", "size", "onClick"])])]),
          _: 1
        }, 8, ["text", "image"])
      }
    }
  }),
  Dd = _t(Nd, [
    ["__scopeId", "data-v-0315755f"]
  ]),
  Ld = "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_12285_76772)'%3e%3cpath%20d='M16.25%208C16.25%2012.2802%2012.7802%2015.75%208.5%2015.75C4.21979%2015.75%200.75%2012.2802%200.75%208C0.75%203.71979%204.21979%200.25%208.5%200.25C12.7802%200.25%2016.25%203.71979%2016.25%208Z'%20fill='%230088CC'%20stroke='%23282828'%20stroke-width='0.5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.76529%204.44434H11.2438C11.4532%204.44434%2011.6276%204.48121%2011.837%204.59184C12.0813%204.70246%2012.2208%204.88684%2012.2906%205.03434C12.2906%205.03434%2012.2906%205.07122%2012.3255%205.07122C12.4302%205.25559%2012.5%205.47684%2012.5%205.73497C12.5%205.95622%2012.4651%206.17747%2012.3255%206.39873L8.87093%2012.6675C8.80115%2012.815%208.66157%2012.8888%208.48709%2012.8888C8.34751%2012.8888%208.20793%2012.815%208.10325%2012.6675L4.71845%206.39873C4.64866%206.25123%204.50908%206.06685%204.50908%205.77185C4.47418%205.51372%204.54397%205.29247%204.64866%205.07122C4.75334%204.84996%204.92782%204.66559%205.17208%204.59184C5.38145%204.44434%205.62571%204.44434%205.76529%204.44434ZM8.06835%205.32934H5.76529C5.62571%205.32934%205.55592%205.32934%205.52103%205.36622C5.45124%205.40309%205.41634%205.43997%205.38145%205.51372C5.34655%205.55059%205.34655%205.62435%205.34655%205.6981C5.34655%205.73497%205.38145%205.77185%205.45124%205.91935L8.06835%2010.7131V5.32934ZM8.90583%205.32934V10.75L11.5578%205.91935C11.5927%205.8456%2011.5927%205.77185%2011.5927%205.6981C11.5927%205.62435%2011.5927%205.55059%2011.5578%205.51372C11.5229%205.47684%2011.5229%205.43997%2011.488%205.43997L11.4532%205.40309C11.3834%205.36622%2011.3136%205.36622%2011.2089%205.36622H8.90583V5.32934Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_12285_76772'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Rd = {
    class: "pages-wallet-asset-tokens"
  },
  Fd = gt({
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
    setup(n) {
      const t = n,
        e = kt(() => {
          const s = {
              id: t.ton.currencyId,
              name: "Toncoin",
              symbol: "TON",
              balance: t.ton.balance,
              fiat: t.ton.fiatValue,
              imageUrl: Ld
            },
            r = t.jettons.map(i => ({
              id: i.currencyId,
              name: i.name,
              symbol: i.symbol,
              balance: i.balance,
              fiat: i.fiatValue,
              imageUrl: Bi(i.imageUrl),
              pnlPercent: i.pnlPercent
            }));
          return [s, ...r]
        });
      return (s, r) => {
        const i = Or;
        return U(), q("div", Rd, [(U(!0), q(xt, null, Be($(e), o => (U(), ut(i, fs({
          key: o.id,
          ref_for: !0
        }, o), null, 16))), 128))])
      }
    }
  }),
  Kd = _t(Fd, [
    ["__scopeId", "data-v-cdfd622d"]
  ]),
  Bd = {
    class: "pages-wallet-block-tokens"
  },
  jd = gt({
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
    setup(n) {
      return (t, e) => {
        var d, p;
        const s = Ad,
          r = Ed,
          i = Ye,
          o = Dd,
          l = Kd;
        return U(), q("div", Bd, [st(s, {
          address: n.address,
          "fiat-value": (d = n.balance) == null ? void 0 : d.totalFiatValue,
          "updated-at": (p = n.balance) == null ? void 0 : p.updatedAt
        }, null, 8, ["address", "fiat-value", "updated-at"]), st(r, {
          "onShow:points": e[0] || (e[0] = f => t.$emit("show:points")),
          "onShow:tokensHistory": e[1] || (e[1] = f => t.$emit("show:tokens-history"))
        }), n.notification === void 0 ? (U(), ut(i, {
          key: 0,
          class: "notification-skeleton notification"
        })) : n.notification === "default" ? (U(), ut(o, {
          key: 1,
          class: "notification"
        })) : Pt("", !0), n.balance ? (U(), ut(l, {
          key: 2,
          ton: n.balance.tonBalance,
          jettons: n.balance.jettonBalances,
          class: "tokens"
        }, null, 8, ["ton", "jettons"])) : Pt("", !0)])
      }
    }
  }),
  xd = _t(jd, [
    ["__scopeId", "data-v-d12b7baa"]
  ]),
  Ud = {},
  zd = {
    class: "pages-wallet-atoms-no-records"
  },
  Wd = {
    class: "label"
  };

function Hd(n, t) {
  const e = Ae;
  return U(), q("div", zd, [st(e, {
    name: "note-search",
    class: "icon"
  }), H("div", Wd, at(("t" in n ? n.t : $(J))("wallet.history.no_records")), 1)])
}
const Vd = _t(Ud, [
    ["render", Hd],
    ["__scopeId", "data-v-1d0de40b"]
  ]),
  Gd = {
    class: "pages-wallet-block-tokens-history"
  },
  Qd = {
    class: "heading"
  },
  Yd = {
    class: "title"
  },
  Jd = {
    key: 0,
    class: "wallet"
  },
  Xd = {
    class: "value"
  },
  Zd = gt({
    __name: "TokensHistory",
    props: {
      address: {
        type: Object,
        default: void 0
      }
    },
    setup(n) {
      const e = Pr(async s => {
        const r = await dr.getTokensHistory(s);
        if (r.err) throw te("Unable to load tokens history");
        return {
          nextPageToken: r.data.nextPageToken,
          items: r.data.actions
        }
      });
      return (s, r) => {
        const i = Vd,
          o = Tr,
          l = Cr;
        return U(), q("div", Gd, [H("div", Qd, [H("div", Yd, at(("t" in s ? s.t : $(J))("wallet.history.title")), 1), n.address ? (U(), q("div", Jd, [r[1] || (r[1] = H("img", {
          src: Rn,
          alt: "Ton logo"
        }, null, -1)), H("div", Xd, at(n.address.short), 1)])) : Pt("", !0)]), st(l, {
          onEnd: r[0] || (r[0] = d => $(e).load())
        }, {
          default: Dt(() => [$(e).isEmpty.value ? (U(), ut(i, {
            key: 0,
            class: "no-records"
          })) : (U(), ut(o, {
            key: 1,
            history: $(e).data.value,
            class: "history"
          }, null, 8, ["history"]))]),
          _: 1
        })])
      }
    }
  }),
  qd = _t(Zd, [
    ["__scopeId", "data-v-55fd4c6d"]
  ]),
  t_ = {
    class: "wallet-index-page page"
  };
var di = (n => (n.WALLET = "wallet", n.POINTS = "points", n.TOKENS_HISTORY = "tokens_history", n))(di || {});
const e_ = gt({
    __name: "index",
    setup(n) {
      const t = ss();
      ji().wallet.walletPageOpen();
      const s = xi(),
        r = d => Object.values(di).includes(d),
        i = Jt((() => {
          const d = Array.isArray(t.query.tab) ? t.query.tab[0] : t.query.tab;
          return d && (Qi(), r(d)) ? d : "wallet"
        })());
      sn(() => s.wallet.value, d => {
        d.status !== "connected" && (i.value = "wallet")
      });
      const o = kt(() => {
        if (i.value !== "wallet") return () => i.value = "wallet"
      });
      sn(o, d => ss().meta.back = d, {
        immediate: !0
      });
      const l = kt(() => `wallet-${i.value}`);
      return sn(l, () => ss().meta.key = l.value), (d, p) => {
        const f = Cs,
          P = sa,
          y = ia,
          S = Sa,
          A = Ma,
          h = gd,
          m = xd,
          B = qd;
        return U(), q("div", t_, [$(s).wallet.value.status === "loading" ? (U(), ut(f, {
          key: 0
        })) : $(s).wallet.value.status === "must_reconnect" ? (U(), ut(P, {
          key: 1
        })) : (U(), q(xt, {
          key: 2
        }, [$(s).isAvailable.value ? (U(), q(xt, {
          key: 1
        }, [$(i) === "wallet" ? (U(), q(xt, {
          key: 0
        }, [$(s).wallet.value.status === "not_found" ? (U(), q(xt, {
          key: 0
        }, [st(A, {
          class: "connect-banner"
        }), $(s).points.value ? (U(), ut(h, {
          key: 0,
          points: $(s).points.value,
          notification: $(s).walletNotification.value
        }, null, 8, ["points", "notification"])) : Pt("", !0)], 64)) : $(s).wallet.value.status === "connected" ? (U(), ut(m, {
          key: 1,
          address: $(s).wallet.value.address,
          balance: $(s).wallet.value.balance,
          notification: $(s).walletNotification.value,
          "onShow:points": p[0] || (p[0] = w => i.value = "points"),
          "onShow:tokensHistory": p[1] || (p[1] = w => i.value = "tokens_history")
        }, null, 8, ["address", "balance", "notification"])) : Pt("", !0)], 64)) : $(i) === "points" ? (U(), q(xt, {
          key: 1
        }, [$(s).points.value === void 0 ? (U(), ut(f, {
          key: 0
        })) : (U(), ut(h, {
          key: 1,
          points: $(s).points.value,
          notification: $(s).walletNotification.value
        }, null, 8, ["points", "notification"]))], 64)) : $(i) === "tokens_history" && $(s).wallet.value.status === "connected" ? (U(), ut(B, {
          key: 2,
          address: $(s).wallet.value.address
        }, null, 8, ["address"])) : Pt("", !0)], 64)) : (U(), q(xt, {
          key: 0
        }, [$(s).wallet.value.status === "not_found" ? (U(), ut(y, {
          key: 0
        })) : $(s).wallet.value.status === "connected" ? (U(), ut(S, {
          key: 1,
          address: $(s).wallet.value.address
        }, null, 8, ["address"])) : Pt("", !0)], 64))], 64))])
      }
    }
  }),
  g_ = _t(e_, [
    ["__scopeId", "data-v-00088916"]
  ]);
export {
  g_ as
  default
};