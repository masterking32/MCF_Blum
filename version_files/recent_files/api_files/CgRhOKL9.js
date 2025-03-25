import {
  _ as Mr
} from "./Conyz2zC.js";
import {
  _ as kr
} from "./Cdo0kTLJ.js";
import {
  d as lt,
  j,
  $ as Wt,
  aR as ws,
  K as q,
  T as Re,
  o as C,
  c as B,
  a as k,
  e as v,
  G as W,
  bt as Qi,
  H as et,
  t as K,
  z as V,
  U as Ut,
  a1 as pt,
  bu as ro,
  Z as ii,
  x as Zt,
  f as ht,
  b as R,
  aZ as lo,
  p as mt,
  ad as Cr,
  a_ as ao,
  bk as Er,
  aW as ts,
  D as Ct,
  aX as Tr,
  _ as Oe,
  au as ho,
  bv as zr,
  aI as Pr,
  bw as Ci,
  w as Bt,
  bx as Ei,
  n as oe,
  u as Ir,
  B as jt,
  V as Ss,
  h as Ce,
  aA as co,
  F as Rt,
  X as St,
  W as si,
  b6 as zt,
  by as ge,
  bz as $t,
  bA as ie,
  b9 as $r,
  a0 as Lr,
  bB as jr,
  aM as re,
  aF as Hs,
  q as es,
  bC as is,
  bD as Js,
  bE as Rr,
  a7 as ni,
  bF as Or,
  bG as uo,
  an as ss,
  bH as ns,
  ao as os,
  bI as Ar,
  ak as Dr,
  N as Vr,
  br as Wr,
  bJ as Q,
  bK as Br,
  bL as Xs,
  bM as Nr,
  O as fo,
  R as Fr,
  g as Ur,
  a$ as Kr,
  ab as Ys,
  E as rs,
  a6 as Hr,
  bN as Jr,
  bO as Xr,
  bl as Yr,
  bP as Gr,
  bQ as Gs,
  Q as Ti,
  aE as Qt
} from "./Cdrd5uYj.js";
import {
  _ as po,
  a as mo,
  b as vo,
  c as xs,
  f as Ms,
  d as go,
  e as Zr,
  g as bo,
  h as qr,
  i as Qr
} from "./DC6JhdU7.js";
import {
  _ as fi
} from "./CabXfDCs.js";
import {
  M as tl,
  a as el
} from "./Dbrl5qwH.js";
import {
  _ as il
} from "./BEFJCiIm.js";
import {
  a as sl
} from "./BNSx8UGV.js";
import {
  _ as nl
} from "./D32TvoVy.js";
import {
  g as ol
} from "./CsCwSH3m.js";
import {
  _ as rl
} from "./-xd11Uq6.js";
import {
  _ as ll
} from "./QukbP_ar.js";
import "./D-zDcKs5.js";
import "./CoyYmVmm.js";
import "./CZQEtrXA.js";
const al = {
    class: "memepad-jetton-action-controls-unlock-button"
  },
  hl = {
    class: "info"
  },
  cl = {
    class: "label"
  },
  ul = lt({
    __name: "UnlockButton",
    props: {
      jetton: {},
      jettonInformation: {},
      jettonSdk: {},
      balances: {}
    },
    emits: ["unlocked"],
    setup(s, {
      emit: t
    }) {
      const e = s,
        i = j(() => e.jettonSdk.getUnlockInfo()),
        n = t,
        o = Wt(),
        {
          addErrorToStackAndCheck: r
        } = ws().useWalletOperationsErrorsStack(),
        l = q(!1),
        a = e.jettonSdk.getWaitForUnlockStatus(),
        h = async () => {
          if (c.value) return;
          const u = () => ii().error(V("memepad.jetton.unlock.failed_alert", {
              ticker: e.jetton.ticker
            })),
            d = m => {
              o.memepad.memepadJettonUnlock({
                status: m,
                jettonId: e.jetton.id,
                jettonShortname: e.jetton.shortname,
                jettonAddress: e.jetton.address
              })
            };
          l.value = !0;
          const f = await e.jettonSdk.unlockWallet();
          if (!pt(f)) {
            d("failed"), u(), r({
              address: e.jetton.address
            });
            return
          }
          await ro(5e3), await a.exec({
            transactionHash: f.data
          }) ? (ii().success(V("memepad.jetton.unlock.success_alert", {
            ticker: e.jetton.ticker
          })), d("success"), n("unlocked")) : (d("failed"), u()), l.value = !1
        }, c = j(() => !!(l.value || !i.value.feesInfo));
      return Re(() => {
        a.destroy()
      }), (u, d) => {
        var g, M, S;
        const f = po,
          p = fi,
          m = mo,
          b = vo,
          y = Zt;
        return C(), B("div", al, [k("div", hl, [v(i).balanceLabel ? (C(), W(f, {
          key: 0,
          balance: v(i).balanceLabel
        }, null, 8, ["balance"])) : (C(), W(p, {
          key: 1,
          class: "skeleton"
        })), v(i).feesInfo ? (C(), W(m, {
          key: 2,
          details: v(i).feesInfo.details,
          "total-label": v(i).feesInfo.totalLabel,
          "error-message": (g = v(i).error) == null ? void 0 : g.message
        }, null, 8, ["details", "total-label", "error-message"])) : (C(), W(p, {
          key: 3,
          class: "skeleton"
        }))]), ((M = v(i).error) == null ? void 0 : M.type) === ("MEMEPAD_UNLOCK_ERRORS" in u ? u.MEMEPAD_UNLOCK_ERRORS : v(tl)).NOT_ENOUGH_TOKEN ? (C(), W(b, {
          key: 0,
          "jetton-shortname": u.jetton.shortname,
          "jetton-address": u.jetton.address,
          details: v(i).error.details,
          source: ("ANALYTICS_MEMEPAD_TOP_UP_SHOW_SOURCE" in u ? u.ANALYTICS_MEMEPAD_TOP_UP_SHOW_SOURCE : v(Qi)).UNLOCK,
          "value-balance": (S = u.balances.tokenBalance) == null ? void 0 : S.value.toNumber()
        }, null, 8, ["jetton-shortname", "jetton-address", "details", "source", "value-balance"])) : (C(), W(y, {
          key: 1,
          fill: "",
          icon: "lock-open",
          "icon-align": "left",
          size: v(Ut).LARGE,
          class: "button",
          loading: v(c),
          disabled: !!v(i).error,
          onClick: h
        }, {
          default: et(() => [k("div", cl, K(("t" in u ? u.t : v(V))("memepad.jetton.unlock_btn", {
            ticker: u.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "loading", "disabled"]))])
      }
    }
  }),
  ks = ht(ul, [
    ["__scopeId", "data-v-fe13e893"]
  ]),
  dl = {
    class: "memepad-jetton-moving-to-dex-page"
  },
  fl = {
    class: "content"
  },
  pl = {
    class: "image-wrapper"
  },
  ml = {
    class: "title"
  },
  vl = {
    class: "subtitle"
  },
  gl = {
    class: "wallet-and-button"
  },
  bl = lt({
    __name: "MovingToDexPage",
    props: {
      jetton: {},
      jettonInformation: {},
      unlockEnabled: {
        type: Boolean
      },
      jettonSdk: {},
      balances: {}
    },
    emits: ["trade-success", "unlock-success"],
    setup(s) {
      const t = s,
        e = q(!1);
      return sl("memepad-jetton-moving-to-dex"), (i, n) => {
        const o = kr,
          r = Cr,
          l = ao,
          a = ks,
          h = Zt,
          c = xs,
          u = il,
          d = Er;
        return C(), B("div", dl, [R(o), k("div", fl, [k("div", pl, [R(r, {
          size: 342,
          name: "animations/Clover",
          class: "animation"
        }), R(l, {
          src: v(lo)(i.jetton.iconFileKey),
          size: 80
        }, null, 8, ["src"])]), k("div", ml, K(("t" in i ? i.t : v(V))("memepad.moving_to_dex.title")), 1), k("div", vl, K(("t" in i ? i.t : v(V))("memepad.moving_to_dex.subtitle", {
          ticker: i.jetton.ticker
        })), 1)]), R(u, null, {
          default: et(() => [k("div", gl, [R(c, {
            "force-loading": i.unlockEnabled === void 0
          }, {
            default: et(() => [i.unlockEnabled ? (C(), W(a, {
              key: 0,
              jetton: i.jetton,
              "jetton-information": i.jettonInformation,
              "jetton-sdk": i.jettonSdk,
              balances: i.balances,
              onUnlocked: n[0] || (n[0] = f => i.$emit("unlock-success"))
            }, null, 8, ["jetton", "jetton-information", "jetton-sdk", "balances"])) : (C(), W(h, {
              key: 1,
              label: ("t" in i ? i.t : v(V))("memepad.jetton.share_token_link"),
              fill: "",
              size: v(Ut).LARGE,
              onClick: n[1] || (n[1] = f => e.value = !0)
            }, null, 8, ["label", "size"]))]),
            _: 1
          }, 8, ["force-loading"])])]),
          _: 1
        }), R(d, {
          modelValue: v(e),
          "onUpdate:modelValue": n[2] || (n[2] = f => mt(e) ? e.value = f : null),
          "jetton-shortname": t.jetton.shortname,
          ticker: i.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])])
      }
    }
  }),
  yl = ht(bl, [
    ["__scopeId", "data-v-b3a2f581"]
  ]),
  _l = {
    class: "memepad-jetton-header"
  },
  wl = {
    class: "jetton"
  },
  Sl = {
    class: "info"
  },
  xl = {
    class: "info-top"
  },
  Ml = {
    class: "ticker"
  },
  kl = {
    key: 0,
    class: "live"
  },
  Cl = {
    key: 1,
    class: "spotlight"
  },
  El = {
    class: "info-bottom"
  },
  Tl = {
    class: "right"
  },
  zl = {
    class: "label"
  },
  Pl = lt({
    __name: "Header",
    props: {
      jetton: {},
      jettonInformation: {},
      isReleased: {
        type: Boolean
      }
    },
    emits: ["share", "copy"],
    setup(s) {
      const t = s,
        e = j(() => {
          const i = ts(t.jetton.releaseTimestamp).label;
          return t.isReleased ? `${i} • STON.fi` : i
        });
      return (i, n) => {
        const o = nl,
          r = Oe;
        return C(), B("div", _l, [k("div", wl, [R(o, {
          jetton: i.jetton
        }, null, 8, ["jetton"]), k("div", Sl, [k("div", xl, [k("div", Ml, K(i.jetton.ticker), 1), i.jettonInformation.stream.online ? (C(), B("div", kl, n[2] || (n[2] = [k("div", {
          class: "dot"
        }, null, -1)]))) : Ct("", !0), i.jettonInformation.inSpotlight ? (C(), B("div", Cl, [R(r, {
          name: "fire",
          class: "icon"
        }), n[3] || (n[3] = k("span", {
          class: "label"
        }, "Spotlight", -1))])) : Ct("", !0)]), k("div", El, K(v(e)), 1)])]), k("div", Tl, [k("button", {
          type: "button",
          class: "reset copy",
          onClick: n[0] || (n[0] = l => i.$emit("copy"))
        }, [R(r, {
          name: "edit-copy",
          class: "icon"
        }), k("span", zl, K(("sliceWalletAddress" in i ? i.sliceWalletAddress : v(Tr))(i.jetton.address, 3)), 1)]), k("button", {
          type: "button",
          class: "reset share",
          onClick: n[1] || (n[1] = l => i.$emit("share"))
        }, [R(r, {
          name: "share",
          class: "icon"
        })])])])
      }
    }
  }),
  Il = ht(Pl, [
    ["__scopeId", "data-v-7d6d2526"]
  ]),
  $l = {
    class: "reset memepad-jetton-stream-banned"
  },
  Ll = lt({
    __name: "Banned",
    emits: ["open-rules"],
    setup(s) {
      return (t, e) => {
        const i = ho("I18nT");
        return C(), B("div", $l, [R(i, {
          keypath: "memepad.jetton.stream_banned_text",
          tag: "div",
          class: "rules"
        }, {
          rules: et(() => [k("button", {
            type: "button",
            class: "reset",
            onClick: e[0] || (e[0] = n => t.$emit("open-rules"))
          }, K(("t" in t ? t.t : v(V))("memepad.jetton.stream_banned_link")), 1)]),
          _: 1
        })])
      }
    }
  }),
  jl = ht(Ll, [
    ["__scopeId", "data-v-cdb295f6"]
  ]),
  Z = {
    init: Rl,
    document: null,
    DocumentFragment: null,
    SVGElement: null,
    SVGSVGElement: null,
    SVGElementInstance: null,
    Element: null,
    HTMLElement: null,
    Event: null,
    Touch: null,
    PointerEvent: null
  };

function te() {}

function Rl(s) {
  const t = s;
  Z.document = t.document, Z.DocumentFragment = t.DocumentFragment || te, Z.SVGElement = t.SVGElement || te, Z.SVGSVGElement = t.SVGSVGElement || te, Z.SVGElementInstance = t.SVGElementInstance || te, Z.Element = t.Element || te, Z.HTMLElement = t.HTMLElement || Z.Element, Z.Event = t.Event, Z.Touch = t.Touch || te, Z.PointerEvent = t.PointerEvent || t.MSPointerEvent
}
var yo = s => !!(s && s.Window) && s instanceof s.Window;
let _o, qt;

function wo(s) {
  _o = s;
  const t = s.document.createTextNode("");
  t.ownerDocument !== s.document && typeof s.wrap == "function" && s.wrap(t) === t && (s = s.wrap(s)), qt = s
}
typeof window < "u" && window && wo(window);

function he(s) {
  return yo(s) ? s : (s.ownerDocument || s).defaultView || qt.window
}
const Ol = s => s === qt || yo(s),
  Al = s => pi(s) && s.nodeType === 11,
  pi = s => !!s && typeof s == "object",
  So = s => typeof s == "function",
  Dl = s => typeof s == "number",
  Vl = s => typeof s == "boolean",
  Wl = s => typeof s == "string",
  Bl = s => {
    if (!s || typeof s != "object") return !1;
    const t = he(s) || qt;
    return /object|function/.test(typeof Element) ? s instanceof Element || s instanceof t.Element : s.nodeType === 1 && typeof s.nodeName == "string"
  },
  Nl = s => pi(s) && !!s.constructor && /function Object\b/.test(s.constructor.toString()),
  Fl = s => pi(s) && typeof s.length < "u" && So(s.splice);
var _ = {
  window: Ol,
  docFrag: Al,
  object: pi,
  func: So,
  number: Dl,
  bool: Vl,
  string: Wl,
  element: Bl,
  plainObject: Nl,
  array: Fl
};
const tt = {
  init: Ul,
  supportsTouch: null,
  supportsPointerEvent: null,
  isIOS7: null,
  isIOS: null,
  isIe9: null,
  isOperaMobile: null,
  prefixedMatchesSelector: null,
  pEventTypes: null,
  wheelEvent: null
};

function Ul(s) {
  const t = Z.Element,
    e = s.navigator || {};
  tt.supportsTouch = "ontouchstart" in s || _.func(s.DocumentTouch) && Z.document instanceof s.DocumentTouch, tt.supportsPointerEvent = e.pointerEnabled !== !1 && !!Z.PointerEvent, tt.isIOS = /iP(hone|od|ad)/.test(e.platform), tt.isIOS7 = /iP(hone|od|ad)/.test(e.platform) && /OS 7[^\d]/.test(e.appVersion), tt.isIe9 = /MSIE 9/.test(e.userAgent), tt.isOperaMobile = e.appName === "Opera" && tt.supportsTouch && /Presto/.test(e.userAgent), tt.prefixedMatchesSelector = "matches" in t.prototype ? "matches" : "webkitMatchesSelector" in t.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in t.prototype ? "mozMatchesSelector" : "oMatchesSelector" in t.prototype ? "oMatchesSelector" : "msMatchesSelector", tt.pEventTypes = tt.supportsPointerEvent ? Z.PointerEvent === s.MSPointerEvent ? {
    up: "MSPointerUp",
    down: "MSPointerDown",
    over: "mouseover",
    out: "mouseout",
    move: "MSPointerMove",
    cancel: "MSPointerCancel"
  } : {
    up: "pointerup",
    down: "pointerdown",
    over: "pointerover",
    out: "pointerout",
    move: "pointermove",
    cancel: "pointercancel"
  } : null, tt.wheelEvent = Z.document && "onmousewheel" in Z.document ? "mousewheel" : "wheel"
}

function Nt(s, t) {
  if (s.contains) return s.contains(t);
  for (; t;) {
    if (t === s) return !0;
    t = t.parentNode
  }
  return !1
}

function xo(s, t) {
  for (; _.element(s);) {
    if (Kt(s, t)) return s;
    s = Et(s)
  }
  return null
}

function Et(s) {
  let t = s.parentNode;
  if (_.docFrag(t)) {
    for (;
      (t = t.host) && _.docFrag(t););
    return t
  }
  return t
}

function Kt(s, t) {
  return qt !== _o && (t = t.replace(/\/deep\//g, " ")), s[tt.prefixedMatchesSelector](t)
}

function ls(s, t, e) {
  for (; _.element(s);) {
    if (Kt(s, t)) return !0;
    if (s = Et(s), s === e) return Kt(s, t)
  }
  return !1
}

function Zs(s) {
  return s.correspondingUseElement || s
}

function Kl(s) {
  return s = s || qt, {
    x: s.scrollX || s.document.documentElement.scrollLeft,
    y: s.scrollY || s.document.documentElement.scrollTop
  }
}

function Mo(s) {
  const t = s instanceof Z.SVGElement ? s.getBoundingClientRect() : s.getClientRects()[0];
  return t && {
    left: t.left,
    right: t.right,
    top: t.top,
    bottom: t.bottom,
    width: t.width || t.right - t.left,
    height: t.height || t.bottom - t.top
  }
}

function Cs(s) {
  const t = Mo(s);
  if (!tt.isIOS7 && t) {
    const e = Kl(he(s));
    t.left += e.x, t.right += e.x, t.top += e.y, t.bottom += e.y
  }
  return t
}

function ko(s) {
  const t = [];
  for (; s;) t.push(s), s = Et(s);
  return t
}

function qs(s) {
  return _.string(s) ? (Z.document.querySelector(s), !0) : !1
}

function P(s, t) {
  for (const i in t) s[i] = t[i];
  return s
}

function Ee(s, t) {
  let e = !1;
  return function() {
    return e || (qt.console.warn(t), e = !0), s.apply(this, arguments)
  }
}

function Es(s, t) {
  return s.name = t.name, s.axis = t.axis, s.edges = t.edges, s
}

function Hl(s) {
  const {
    Interactable: t
  } = s;
  t.prototype.getAction = function(i, n, o, r) {
    const l = Jl(this, n, o, r, s);
    return this.options.actionChecker ? this.options.actionChecker(i, n, l, this, r, o) : l
  }, t.prototype.ignoreFrom = Ee(function(e) {
    return this._backCompatOption("ignoreFrom", e)
  }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), t.prototype.allowFrom = Ee(function(e) {
    return this._backCompatOption("allowFrom", e)
  }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), t.prototype.actionChecker = Yl, t.prototype.styleCursor = Xl
}

function Jl(s, t, e, i, n) {
  const o = s.getRect(i),
    r = t.buttons || {
      0: 1,
      1: 4,
      3: 8,
      4: 16
    } [t.button],
    l = {
      action: null,
      interactable: s,
      interaction: e,
      element: i,
      rect: o,
      buttons: r
    };
  return n.fire("auto-start:check", l), l.action
}

function Xl(s) {
  return _.bool(s) ? (this.options.styleCursor = s, this) : s === null ? (delete this.options.styleCursor, this) : this.options.styleCursor
}

function Yl(s) {
  return _.func(s) ? (this.options.actionChecker = s, this) : s === null ? (delete this.options.actionChecker, this) : this.options.actionChecker
}
var Gl = {
  id: "auto-start/interactableMethods",
  install: Hl
};

function Zl(s) {
  const {
    interactStatic: t,
    defaults: e
  } = s;
  s.usePlugin(Gl), e.base.actionChecker = null, e.base.styleCursor = !0, P(e.perAction, {
    manualStart: !1,
    max: 1 / 0,
    maxPerElement: 1,
    allowFrom: null,
    ignoreFrom: null,
    mouseButtons: 1
  }), t.maxInteractions = i => zo(i, s), s.autoStart = {
    maxInteractions: 1 / 0,
    withinInteractionLimit: mi,
    cursorElement: null
  }
}

function ql(s, t) {
  let {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o
  } = s;
  if (e.interacting()) return;
  const r = Eo(e, i, n, o, t);
  To(e, r, t)
}

function Ql(s, t) {
  let {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o
  } = s;
  if (e.pointerType !== "mouse" || e.pointerIsDown || e.interacting()) return;
  const r = Eo(e, i, n, o, t);
  To(e, r, t)
}

function ta(s, t) {
  const {
    interaction: e
  } = s;
  if (!e.pointerIsDown || e.interacting() || !e.pointerWasMoved || !e.prepared.name) return;
  t.fire("autoStart:before-start", s);
  const {
    interactable: i
  } = e, n = e.prepared.name;
  n && i && (i.options[n].manualStart || !mi(i, e.element, e.prepared, t) ? e.stop() : (e.start(e.prepared, i, e.element), Po(e, t)))
}

function ea(s, t) {
  let {
    interaction: e
  } = s;
  const {
    interactable: i
  } = e;
  i && i.options.styleCursor && as(e.element, "", t)
}

function Co(s, t, e, i, n) {
  return t.testIgnoreAllow(t.options[s.name], e, i) && t.options[s.name].enabled && mi(t, e, s, n) ? s : null
}

function ia(s, t, e, i, n, o, r) {
  for (let l = 0, a = i.length; l < a; l++) {
    const h = i[l],
      c = n[l],
      u = h.getAction(t, e, s, c);
    if (!u) continue;
    const d = Co(u, h, c, o, r);
    if (d) return {
      action: d,
      interactable: h,
      element: c
    }
  }
  return {
    action: null,
    interactable: null,
    element: null
  }
}

function Eo(s, t, e, i, n) {
  let o = [],
    r = [],
    l = i;

  function a(h) {
    o.push(h), r.push(l)
  }
  for (; _.element(l);) {
    o = [], r = [], n.interactables.forEachMatch(l, a);
    const h = ia(s, t, e, o, r, i, n);
    if (h.action && !h.interactable.options[h.action.name].manualStart) return h;
    l = Et(l)
  }
  return {
    action: null,
    interactable: null,
    element: null
  }
}

function To(s, t, e) {
  let {
    action: i,
    interactable: n,
    element: o
  } = t;
  i = i || {
    name: null
  }, s.interactable = n, s.element = o, Es(s.prepared, i), s.rect = n && i.name ? n.getRect(o) : null, Po(s, e), e.fire("autoStart:prepared", {
    interaction: s
  })
}

function mi(s, t, e, i) {
  const n = s.options,
    o = n[e.name].max,
    r = n[e.name].maxPerElement,
    l = i.autoStart.maxInteractions;
  let a = 0,
    h = 0,
    c = 0;
  if (!(o && r && l)) return !1;
  for (const u of i.interactions.list) {
    const d = u.prepared.name;
    if (u.interacting()) {
      if (a++, a >= l) return !1;
      if (u.interactable === s && (h += d === e.name ? 1 : 0, h >= o || u.element === t && (c++, d === e.name && c >= r))) return !1
    }
  }
  return l > 0
}

function zo(s, t) {
  return _.number(s) ? (t.autoStart.maxInteractions = s, this) : t.autoStart.maxInteractions
}

function as(s, t, e) {
  const {
    cursorElement: i
  } = e.autoStart;
  i && i !== s && (i.style.cursor = ""), s.ownerDocument.documentElement.style.cursor = t, s.style.cursor = t, e.autoStart.cursorElement = t ? s : null
}

function Po(s, t) {
  const {
    interactable: e,
    element: i,
    prepared: n
  } = s;
  if (!(s.pointerType === "mouse" && e && e.options.styleCursor)) {
    t.autoStart.cursorElement && as(t.autoStart.cursorElement, "", t);
    return
  }
  let o = "";
  if (n.name) {
    const r = e.options[n.name].cursorChecker;
    _.func(r) ? o = r(n, e, i, s._interacting) : o = t.actions.map[n.name].getCursor(n)
  }
  as(s.element, o || "", t)
}
const Ts = {
  id: "auto-start/base",
  before: ["actions"],
  install: Zl,
  listeners: {
    "interactions:down": ql,
    "interactions:move": (s, t) => {
      Ql(s, t), ta(s, t)
    },
    "interactions:stop": ea
  },
  maxInteractions: zo,
  withinInteractionLimit: mi,
  validateAction: Co
};

function sa(s, t) {
  let {
    interaction: e,
    eventTarget: i,
    dx: n,
    dy: o
  } = s;
  if (e.prepared.name !== "drag") return;
  const r = Math.abs(n),
    l = Math.abs(o),
    a = e.interactable.options.drag,
    h = a.startAxis,
    c = r > l ? "x" : r < l ? "y" : "xy";
  if (e.prepared.axis = a.lockAxis === "start" ? c[0] : a.lockAxis, c !== "xy" && h !== "xy" && h !== c) {
    e.prepared.name = null;
    let u = i;
    const d = function(f) {
      if (f === e.interactable) return;
      const p = e.interactable.options.drag;
      if (!p.manualStart && f.testIgnoreAllow(p, u, i)) {
        const m = f.getAction(e.downPointer, e.downEvent, e, u);
        if (m && m.name === "drag" && na(c, f) && Ts.validateAction(m, f, u, i, t)) return f
      }
    };
    for (; _.element(u);) {
      const f = t.interactables.forEachMatch(u, d);
      if (f) {
        e.prepared.name = "drag", e.interactable = f, e.element = u;
        break
      }
      u = Et(u)
    }
  }
}

function na(s, t) {
  if (!t) return !1;
  const e = t.options.drag.startAxis;
  return s === "xy" || e === "xy" || e === s
}
var oa = {
  id: "auto-start/dragAxis",
  listeners: {
    "autoStart:before-start": sa
  }
};

function ra(s) {
  const {
    defaults: t
  } = s;
  s.usePlugin(Ts), t.perAction.hold = 0, t.perAction.delay = 0
}

function zi(s) {
  const t = s.prepared && s.prepared.name;
  if (!t) return null;
  const e = s.interactable.options;
  return e[t].hold || e[t].delay
}
const la = {
  id: "auto-start/hold",
  install: ra,
  listeners: {
    "interactions:new": s => {
      let {
        interaction: t
      } = s;
      t.autoStartHoldTimer = null
    },
    "autoStart:prepared": s => {
      let {
        interaction: t
      } = s;
      const e = zi(t);
      e > 0 && (t.autoStartHoldTimer = setTimeout(() => {
        t.start(t.prepared, t.interactable, t.element)
      }, e))
    },
    "interactions:move": s => {
      let {
        interaction: t,
        duplicate: e
      } = s;
      t.autoStartHoldTimer && t.pointerWasMoved && !e && (clearTimeout(t.autoStartHoldTimer), t.autoStartHoldTimer = null)
    },
    "autoStart:before-start": s => {
      let {
        interaction: t
      } = s;
      zi(t) > 0 && (t.prepared.name = null)
    }
  },
  getHoldDuration: zi
};
var aa = {
  id: "auto-start",
  install(s) {
    s.usePlugin(Ts), s.usePlugin(la), s.usePlugin(oa)
  }
};
const ha = (s, t) => s.splice(s.indexOf(t), 1),
  Io = (s, t) => {
    for (const e of t) s.push(e);
    return s
  },
  $o = s => Io([], s),
  vi = (s, t) => {
    for (let e = 0; e < s.length; e++)
      if (t(s[e], e, s)) return e;
    return -1
  },
  be = (s, t) => s[vi(s, t)];

function ce(s) {
  const t = {};
  for (const e in s) {
    const i = s[e];
    _.plainObject(i) ? t[e] = ce(i) : _.array(i) ? t[e] = $o(i) : t[e] = i
  }
  return t
}
let Qs = 0,
  wt, Vt;

function ca(s) {
  if (wt = s.requestAnimationFrame, Vt = s.cancelAnimationFrame, !wt) {
    const t = ["ms", "moz", "webkit", "o"];
    for (const e of t) wt = s[`${e}RequestAnimationFrame`], Vt = s[`${e}CancelAnimationFrame`] || s[`${e}CancelRequestAnimationFrame`]
  }
  wt = wt && wt.bind(s), Vt = Vt && Vt.bind(s), wt || (wt = t => {
    const e = Date.now(),
      i = Math.max(0, 16 - (e - Qs)),
      n = s.setTimeout(() => {
        t(e + i)
      }, i);
    return Qs = e + i, n
  }, Vt = t => clearTimeout(t))
}
var hs = {
  request: s => wt(s),
  cancel: s => Vt(s),
  init: ca
};

function le(s, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : n => !0,
    i = arguments.length > 3 ? arguments[3] : void 0;
  if (i = i || {}, _.string(s) && s.search(" ") !== -1 && (s = tn(s)), _.array(s)) return s.forEach(n => le(n, t, e, i)), i;
  if (_.object(s) && (t = s, s = ""), _.func(t) && e(s)) i[s] = i[s] || [], i[s].push(t);
  else if (_.array(t))
    for (const n of t) le(s, n, e, i);
  else if (_.object(t))
    for (const n in t) {
      const o = tn(n).map(r => `${s}${r}`);
      le(o, t[n], e, i)
    }
  return i
}

function tn(s) {
  return s.trim().split(/ +/)
}

function en(s, t) {
  for (const e of t) {
    if (s.immediatePropagationStopped) break;
    e(s)
  }
}
class Lo {
  constructor(t) {
    this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = P({}, t || {})
  }
  fire(t) {
    let e;
    const i = this.global;
    (e = this.types[t.type]) && en(t, e), !t.propagationStopped && i && (e = i[t.type]) && en(t, e)
  }
  on(t, e) {
    const i = le(t, e);
    for (t in i) this.types[t] = Io(this.types[t] || [], i[t])
  }
  off(t, e) {
    const i = le(t, e);
    for (t in i) {
      const n = this.types[t];
      if (!(!n || !n.length))
        for (const o of i[t]) {
          const r = n.indexOf(o);
          r !== -1 && n.splice(r, 1)
        }
    }
  }
  getRect(t) {
    return null
  }
}
const ua = ["webkit", "moz"];

function oi(s, t) {
  s.__set || (s.__set = {});
  for (const e in t) ua.some(i => e.indexOf(i) === 0) || typeof s[e] != "function" && e !== "__set" && Object.defineProperty(s, e, {
    get() {
      return e in s.__set ? s.__set[e] : s.__set[e] = t[e]
    },
    set(i) {
      s.__set[e] = i
    },
    configurable: !0
  });
  return s
}
var Ae = (s, t) => Math.sqrt(s * s + t * t);

function Qe(s, t) {
  s.page = s.page || {}, s.page.x = t.page.x, s.page.y = t.page.y, s.client = s.client || {}, s.client.x = t.client.x, s.client.y = t.client.y, s.timeStamp = t.timeStamp
}

function da(s, t, e) {
  s.page.x = e.page.x - t.page.x, s.page.y = e.page.y - t.page.y, s.client.x = e.client.x - t.client.x, s.client.y = e.client.y - t.client.y, s.timeStamp = e.timeStamp - t.timeStamp
}

function fa(s, t) {
  const e = Math.max(t.timeStamp / 1e3, .001);
  s.page.x = t.page.x / e, s.page.y = t.page.y / e, s.client.x = t.client.x / e, s.client.y = t.client.y / e, s.timeStamp = e
}

function jo(s) {
  s.page.x = 0, s.page.y = 0, s.client.x = 0, s.client.y = 0
}

function Ro(s) {
  return s instanceof Z.Event || s instanceof Z.Touch
}

function ri(s, t, e) {
  return e = e || {}, s = s || "page", e.x = t[s + "X"], e.y = t[s + "Y"], e
}

function pa(s, t) {
  return t = t || {
    x: 0,
    y: 0
  }, tt.isOperaMobile && Ro(s) ? (ri("screen", s, t), t.x += window.scrollX, t.y += window.scrollY) : ri("page", s, t), t
}

function ma(s, t) {
  return t = t || {}, tt.isOperaMobile && Ro(s) ? ri("screen", s, t) : ri("client", s, t), t
}

function Te(s) {
  return _.number(s.pointerId) ? s.pointerId : s.identifier
}

function va(s, t, e) {
  const i = t.length > 1 ? Oo(t) : t[0];
  pa(i, s.page), ma(i, s.client), s.timeStamp = e
}

function zs(s) {
  const t = [];
  return _.array(s) ? (t[0] = s[0], t[1] = s[1]) : s.type === "touchend" ? s.touches.length === 1 ? (t[0] = s.touches[0], t[1] = s.changedTouches[0]) : s.touches.length === 0 && (t[0] = s.changedTouches[0], t[1] = s.changedTouches[1]) : (t[0] = s.touches[0], t[1] = s.touches[1]), t
}

function Oo(s) {
  const t = {
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    screenX: 0,
    screenY: 0
  };
  for (const e of s)
    for (const i in t) t[i] += e[i];
  for (const e in t) t[e] /= s.length;
  return t
}

function ga(s) {
  if (!s.length) return null;
  const t = zs(s),
    e = Math.min(t[0].pageX, t[1].pageX),
    i = Math.min(t[0].pageY, t[1].pageY),
    n = Math.max(t[0].pageX, t[1].pageX),
    o = Math.max(t[0].pageY, t[1].pageY);
  return {
    x: e,
    y: i,
    left: e,
    top: i,
    right: n,
    bottom: o,
    width: n - e,
    height: o - i
  }
}

function ba(s, t) {
  const e = t + "X",
    i = t + "Y",
    n = zs(s),
    o = n[0][e] - n[1][e],
    r = n[0][i] - n[1][i];
  return Ae(o, r)
}

function ya(s, t) {
  const e = t + "X",
    i = t + "Y",
    n = zs(s),
    o = n[1][e] - n[0][e],
    r = n[1][i] - n[0][i];
  return 180 * Math.atan2(r, o) / Math.PI
}

function Ao(s) {
  return _.string(s.pointerType) ? s.pointerType : _.number(s.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][s.pointerType] : /touch/.test(s.type || "") || s instanceof Z.Touch ? "touch" : "mouse"
}

function Do(s) {
  const t = _.func(s.composedPath) ? s.composedPath() : s.path;
  return [Zs(t ? t[0] : s.target), Zs(s.currentTarget)]
}

function fe() {
  return {
    page: {
      x: 0,
      y: 0
    },
    client: {
      x: 0,
      y: 0
    },
    timeStamp: 0
  }
}

function _a(s) {
  return {
    coords: s,
    get page() {
      return this.coords.page
    },
    get client() {
      return this.coords.client
    },
    get timeStamp() {
      return this.coords.timeStamp
    },
    get pageX() {
      return this.coords.page.x
    },
    get pageY() {
      return this.coords.page.y
    },
    get clientX() {
      return this.coords.client.x
    },
    get clientY() {
      return this.coords.client.y
    },
    get pointerId() {
      return this.coords.pointerId
    },
    get target() {
      return this.coords.target
    },
    get type() {
      return this.coords.type
    },
    get pointerType() {
      return this.coords.pointerType
    },
    get buttons() {
      return this.coords.buttons
    },
    preventDefault() {}
  }
}

function wa(s) {
  var t;
  const e = [],
    i = {},
    n = [],
    o = {
      add: r,
      remove: l,
      addDelegate: a,
      removeDelegate: h,
      delegateListener: c,
      delegateUseCapture: u,
      delegatedEvents: i,
      documents: n,
      targets: e,
      supportsOptions: !1,
      supportsPassive: !1
    };
  (t = s.document) == null || t.createElement("div").addEventListener("test", null, {
    get capture() {
      return o.supportsOptions = !0
    },
    get passive() {
      return o.supportsPassive = !0
    }
  }), s.events = o;

  function r(d, f, p, m) {
    if (!d.addEventListener) return;
    const b = pe(m);
    let y = be(e, g => g.eventTarget === d);
    y || (y = {
      eventTarget: d,
      events: {}
    }, e.push(y)), y.events[f] || (y.events[f] = []), be(y.events[f], g => g.func === p && We(g.options, b)) || (d.addEventListener(f, p, o.supportsOptions ? b : b.capture), y.events[f].push({
      func: p,
      options: b
    }))
  }

  function l(d, f, p, m) {
    if (!d.addEventListener || !d.removeEventListener) return;
    const b = vi(e, S => S.eventTarget === d),
      y = e[b];
    if (!y || !y.events) return;
    if (f === "all") {
      for (f in y.events) y.events.hasOwnProperty(f) && l(d, f, "all");
      return
    }
    let g = !1;
    const M = y.events[f];
    if (M)
      if (p === "all") {
        for (let S = M.length - 1; S >= 0; S--) {
          const z = M[S];
          l(d, f, z.func, z.options)
        }
        return
      } else {
        const S = pe(m);
        for (let z = 0; z < M.length; z++) {
          const D = M[z];
          if (D.func === p && We(D.options, S)) {
            d.removeEventListener(f, p, o.supportsOptions ? S : S.capture), M.splice(z, 1), M.length === 0 && (delete y.events[f], g = !0);
            break
          }
        }
      } g && !Object.keys(y.events).length && e.splice(b, 1)
  }

  function a(d, f, p, m, b) {
    const y = pe(b);
    if (!i[p]) {
      i[p] = [];
      for (const S of n) r(S, p, c), r(S, p, u, !0)
    }
    const g = i[p];
    let M = be(g, S => S.selector === d && S.context === f);
    M || (M = {
      selector: d,
      context: f,
      listeners: []
    }, g.push(M)), M.listeners.push({
      func: m,
      options: y
    })
  }

  function h(d, f, p, m, b) {
    const y = pe(b),
      g = i[p];
    let M = !1,
      S;
    if (g)
      for (S = g.length - 1; S >= 0; S--) {
        const z = g[S];
        if (z.selector === d && z.context === f) {
          const {
            listeners: D
          } = z;
          for (let O = D.length - 1; O >= 0; O--) {
            const $ = D[O];
            if ($.func === m && We($.options, y)) {
              D.splice(O, 1), D.length || (g.splice(S, 1), l(f, p, c), l(f, p, u, !0)), M = !0;
              break
            }
          }
          if (M) break
        }
      }
  }

  function c(d, f) {
    const p = pe(f),
      m = new Sa(d),
      b = i[d.type],
      [y] = Do(d);
    let g = y;
    for (; _.element(g);) {
      for (let M = 0; M < b.length; M++) {
        const S = b[M],
          {
            selector: z,
            context: D
          } = S;
        if (Kt(g, z) && Nt(D, y) && Nt(D, g)) {
          const {
            listeners: O
          } = S;
          m.currentTarget = g;
          for (const $ of O) We($.options, p) && $.func(m)
        }
      }
      g = Et(g)
    }
  }

  function u(d) {
    return c.call(this, d, !0)
  }
  return o
}
class Sa {
  constructor(t) {
    this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = t, oi(this, t)
  }
  preventOriginalDefault() {
    this.originalEvent.preventDefault()
  }
  stopPropagation() {
    this.originalEvent.stopPropagation()
  }
  stopImmediatePropagation() {
    this.originalEvent.stopImmediatePropagation()
  }
}

function pe(s) {
  return _.object(s) ? {
    capture: !!s.capture,
    passive: !!s.passive
  } : {
    capture: !!s,
    passive: !1
  }
}

function We(s, t) {
  return s === t ? !0 : typeof s == "boolean" ? !!t.capture === s && !t.passive : !!s.capture == !!t.capture && !!s.passive == !!t.passive
}
var xa = {
  id: "events",
  install: wa
};
const Ma = function(t) {
  return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : _.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault
};

function ka(s, t, e) {
  const i = s.options.preventDefault;
  if (i !== "never") {
    if (i === "always") {
      e.preventDefault();
      return
    }
    if (t.events.supportsPassive && /^touch(start|move)$/.test(e.type)) {
      const n = he(e.target).document,
        o = t.getDocOptions(n);
      if (!(o && o.events) || o.events.passive !== !1) return
    }
    /^(mouse|pointer|touch)*(down|start)/i.test(e.type) || _.element(e.target) && Kt(e.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || e.preventDefault()
  }
}

function Ca(s) {
  let {
    interaction: t,
    event: e
  } = s;
  t.interactable && t.interactable.checkAndPreventDefault(e)
}

function Ea(s) {
  const {
    Interactable: t
  } = s;
  t.prototype.preventDefault = Ma, t.prototype.checkAndPreventDefault = function(e) {
    return ka(this, s, e)
  }, s.interactions.docEvents.push({
    type: "dragstart",
    listener(e) {
      for (const i of s.interactions.list)
        if (i.element && (i.element === e.target || Nt(i.element, e.target))) {
          i.interactable.checkAndPreventDefault(e);
          return
        }
    }
  })
}
var Ta = {
  id: "core/interactablePreventDefault",
  install: Ea,
  listeners: ["down", "move", "up", "cancel"].reduce((s, t) => (s[`interactions:${t}`] = Ca, s), {})
};

function za(s, t, e) {
  return s === "parent" ? Et(e) : s === "self" ? t.getRect(e) : xo(e, s)
}

function ze(s, t, e, i) {
  let n = s;
  return _.string(n) ? n = za(n, t, e) : _.func(n) && (n = n(...i)), _.element(n) && (n = Cs(n)), n
}

function gi(s) {
  return s && {
    x: "x" in s ? s.x : s.left,
    y: "y" in s ? s.y : s.top
  }
}

function Pa(s) {
  return s && !("left" in s && "top" in s) && (s = P({}, s), s.left = s.x || 0, s.top = s.y || 0, s.right = s.right || s.left + s.width, s.bottom = s.bottom || s.top + s.height), s
}

function cs(s) {
  return s && !("x" in s && "y" in s) && (s = P({}, s), s.x = s.left || 0, s.y = s.top || 0, s.width = s.width || (s.right || 0) - s.x, s.height = s.height || (s.bottom || 0) - s.y), s
}

function bi(s, t, e) {
  s.left && (t.left += e.x), s.right && (t.right += e.x), s.top && (t.top += e.y), s.bottom && (t.bottom += e.y), t.width = t.right - t.left, t.height = t.bottom - t.top
}

function yi(s, t, e) {
  const i = e && s.options[e],
    o = i && i.origin || s.options.origin,
    r = ze(o, s, t, [s && t]);
  return gi(r) || {
    x: 0,
    y: 0
  }
}
class Ps {
  constructor(t) {
    this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = t
  }
  preventDefault() {}
  stopPropagation() {
    this.propagationStopped = !0
  }
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0
  }
}
Object.defineProperty(Ps.prototype, "interaction", {
  get() {
    return this._interaction._proxy
  },
  set() {}
});
const Vo = {
  base: {
    preventDefault: "auto",
    deltaSource: "page"
  },
  perAction: {
    enabled: !1,
    origin: {
      x: 0,
      y: 0
    }
  },
  actions: {}
};
class Is extends Ps {
  constructor(t, e, i, n, o, r, l) {
    super(t), this.relatedTarget = null, this.screenX = void 0, this.screenY = void 0, this.button = void 0, this.buttons = void 0, this.ctrlKey = void 0, this.shiftKey = void 0, this.altKey = void 0, this.metaKey = void 0, this.page = void 0, this.client = void 0, this.delta = void 0, this.rect = void 0, this.x0 = void 0, this.y0 = void 0, this.t0 = void 0, this.dt = void 0, this.duration = void 0, this.clientX0 = void 0, this.clientY0 = void 0, this.velocity = void 0, this.speed = void 0, this.swipe = void 0, this.axes = void 0, this.preEnd = void 0, o = o || t.element;
    const a = t.interactable,
      h = (a && a.options || Vo).deltaSource,
      c = yi(a, o, i),
      u = n === "start",
      d = n === "end",
      f = u ? this : t.prevEvent,
      p = u ? t.coords.start : d ? {
        page: f.page,
        client: f.client,
        timeStamp: t.coords.cur.timeStamp
      } : t.coords.cur;
    this.page = P({}, p.page), this.client = P({}, p.client), this.rect = P({}, t.rect), this.timeStamp = p.timeStamp, d || (this.page.x -= c.x, this.page.y -= c.y, this.client.x -= c.x, this.client.y -= c.y), this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.button = e.button, this.buttons = e.buttons, this.target = o, this.currentTarget = o, this.preEnd = r, this.type = l || i + (n || ""), this.interactable = a, this.t0 = u ? t.pointers[t.pointers.length - 1].downTime : f.t0, this.x0 = t.coords.start.page.x - c.x, this.y0 = t.coords.start.page.y - c.y, this.clientX0 = t.coords.start.client.x - c.x, this.clientY0 = t.coords.start.client.y - c.y, u || d ? this.delta = {
      x: 0,
      y: 0
    } : this.delta = {
      x: this[h].x - f[h].x,
      y: this[h].y - f[h].y
    }, this.dt = t.coords.delta.timeStamp, this.duration = this.timeStamp - this.t0, this.velocity = P({}, t.coords.velocity[h]), this.speed = Ae(this.velocity.x, this.velocity.y), this.swipe = d || n === "inertiastart" ? this.getSwipe() : null
  }
  getSwipe() {
    const t = this._interaction;
    if (t.prevEvent.speed < 600 || this.timeStamp - t.prevEvent.timeStamp > 150) return null;
    let e = 180 * Math.atan2(t.prevEvent.velocityY, t.prevEvent.velocityX) / Math.PI;
    const i = 22.5;
    e < 0 && (e += 360);
    const n = 135 - i <= e && e < 225 + i,
      o = 225 - i <= e && e < 315 + i,
      r = !n && (315 - i <= e || e < 45 + i),
      l = !o && 45 - i <= e && e < 135 + i;
    return {
      up: o,
      down: l,
      left: n,
      right: r,
      angle: e,
      speed: t.prevEvent.speed,
      velocity: {
        x: t.prevEvent.velocityX,
        y: t.prevEvent.velocityY
      }
    }
  }
  preventDefault() {}
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0
  }
  stopPropagation() {
    this.propagationStopped = !0
  }
}
Object.defineProperties(Is.prototype, {
  pageX: {
    get() {
      return this.page.x
    },
    set(s) {
      this.page.x = s
    }
  },
  pageY: {
    get() {
      return this.page.y
    },
    set(s) {
      this.page.y = s
    }
  },
  clientX: {
    get() {
      return this.client.x
    },
    set(s) {
      this.client.x = s
    }
  },
  clientY: {
    get() {
      return this.client.y
    },
    set(s) {
      this.client.y = s
    }
  },
  dx: {
    get() {
      return this.delta.x
    },
    set(s) {
      this.delta.x = s
    }
  },
  dy: {
    get() {
      return this.delta.y
    },
    set(s) {
      this.delta.y = s
    }
  },
  velocityX: {
    get() {
      return this.velocity.x
    },
    set(s) {
      this.velocity.x = s
    }
  },
  velocityY: {
    get() {
      return this.velocity.y
    },
    set(s) {
      this.velocity.y = s
    }
  }
});
class Ia {
  constructor(t, e, i, n, o) {
    this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = t, this.pointer = e, this.event = i, this.downTime = n, this.downTarget = o
  }
}
let $a = function(s) {
    return s.interactable = "", s.element = "", s.prepared = "", s.pointerIsDown = "", s.pointerWasMoved = "", s._proxy = "", s
  }({}),
  Wo = function(s) {
    return s.start = "", s.move = "", s.end = "", s.stop = "", s.interacting = "", s
  }({}),
  La = 0;
class ja {
  get pointerMoveTolerance() {
    return 1
  }
  constructor(t) {
    this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = {
      name: null,
      axis: null,
      edges: null
    }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = {
      pointer: null,
      event: null,
      eventTarget: null
    }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = Ee(function(o) {
      this.move(o)
    }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = {
      start: fe(),
      prev: fe(),
      cur: fe(),
      delta: fe(),
      velocity: fe()
    }, this._id = La++;
    let {
      pointerType: e,
      scopeFire: i
    } = t;
    this._scopeFire = i, this.pointerType = e;
    const n = this;
    this._proxy = {};
    for (const o in $a) Object.defineProperty(this._proxy, o, {
      get() {
        return n[o]
      }
    });
    for (const o in Wo) Object.defineProperty(this._proxy, o, {
      value: function() {
        return n[o](...arguments)
      }
    });
    this._scopeFire("interactions:new", {
      interaction: this
    })
  }
  pointerDown(t, e, i) {
    const n = this.updatePointer(t, e, i, !0),
      o = this.pointers[n];
    this._scopeFire("interactions:down", {
      pointer: t,
      event: e,
      eventTarget: i,
      pointerIndex: n,
      pointerInfo: o,
      type: "down",
      interaction: this
    })
  }
  start(t, e, i) {
    return this.interacting() || !this.pointerIsDown || this.pointers.length < (t.name === "gesture" ? 2 : 1) || !e.options[t.name].enabled ? !1 : (Es(this.prepared, t), this.interactable = e, this.element = i, this.rect = e.getRect(i), this.edges = this.prepared.edges ? P({}, this.prepared.edges) : {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }, this._stopped = !1, this._interacting = this._doPhase({
      interaction: this,
      event: this.downEvent,
      phase: "start"
    }) && !this._stopped, this._interacting)
  }
  pointerMove(t, e, i) {
    !this.simulation && !(this.modification && this.modification.endResult) && this.updatePointer(t, e, i, !1);
    const n = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
    let o, r;
    this.pointerIsDown && !this.pointerWasMoved && (o = this.coords.cur.client.x - this.coords.start.client.x, r = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Ae(o, r) > this.pointerMoveTolerance);
    const l = this.getPointerIndex(t),
      a = {
        pointer: t,
        pointerIndex: l,
        pointerInfo: this.pointers[l],
        event: e,
        type: "move",
        eventTarget: i,
        dx: o,
        dy: r,
        duplicate: n,
        interaction: this
      };
    n || fa(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", a), !n && !this.simulation && (this.interacting() && (a.type = null, this.move(a)), this.pointerWasMoved && Qe(this.coords.prev, this.coords.cur))
  }
  move(t) {
    (!t || !t.event) && jo(this.coords.delta), t = P({
      pointer: this._latestPointer.pointer,
      event: this._latestPointer.event,
      eventTarget: this._latestPointer.eventTarget,
      interaction: this
    }, t || {}), t.phase = "move", this._doPhase(t)
  }
  pointerUp(t, e, i, n) {
    let o = this.getPointerIndex(t);
    o === -1 && (o = this.updatePointer(t, e, i, !1));
    const r = /cancel$/i.test(e.type) ? "cancel" : "up";
    this._scopeFire(`interactions:${r}`, {
      pointer: t,
      pointerIndex: o,
      pointerInfo: this.pointers[o],
      event: e,
      eventTarget: i,
      type: r,
      curEventTarget: n,
      interaction: this
    }), this.simulation || this.end(e), this.removePointer(t, e)
  }
  documentBlur(t) {
    this.end(t), this._scopeFire("interactions:blur", {
      event: t,
      type: "blur",
      interaction: this
    })
  }
  end(t) {
    this._ending = !0, t = t || this._latestPointer.event;
    let e;
    this.interacting() && (e = this._doPhase({
      event: t,
      interaction: this,
      phase: "end"
    })), this._ending = !1, e === !0 && this.stop()
  }
  currentAction() {
    return this._interacting ? this.prepared.name : null
  }
  interacting() {
    return this._interacting
  }
  stop() {
    this._scopeFire("interactions:stop", {
      interaction: this
    }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null
  }
  getPointerIndex(t) {
    const e = Te(t);
    return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : vi(this.pointers, i => i.id === e)
  }
  getPointerInfo(t) {
    return this.pointers[this.getPointerIndex(t)]
  }
  updatePointer(t, e, i, n) {
    const o = Te(t);
    let r = this.getPointerIndex(t),
      l = this.pointers[r];
    return n = n === !1 ? !1 : n || /(down|start)$/i.test(e.type), l ? l.pointer = t : (l = new Ia(o, t, e, null, null), r = this.pointers.length, this.pointers.push(l)), va(this.coords.cur, this.pointers.map(a => a.pointer), this._now()), da(this.coords.delta, this.coords.prev, this.coords.cur), n && (this.pointerIsDown = !0, l.downTime = this.coords.cur.timeStamp, l.downTarget = i, oi(this.downPointer, t), this.interacting() || (Qe(this.coords.start, this.coords.cur), Qe(this.coords.prev, this.coords.cur), this.downEvent = e, this.pointerWasMoved = !1)), this._updateLatestPointer(t, e, i), this._scopeFire("interactions:update-pointer", {
      pointer: t,
      event: e,
      eventTarget: i,
      down: n,
      pointerInfo: l,
      pointerIndex: r,
      interaction: this
    }), r
  }
  removePointer(t, e) {
    const i = this.getPointerIndex(t);
    if (i === -1) return;
    const n = this.pointers[i];
    this._scopeFire("interactions:remove-pointer", {
      pointer: t,
      event: e,
      eventTarget: null,
      pointerIndex: i,
      pointerInfo: n,
      interaction: this
    }), this.pointers.splice(i, 1), this.pointerIsDown = !1
  }
  _updateLatestPointer(t, e, i) {
    this._latestPointer.pointer = t, this._latestPointer.event = e, this._latestPointer.eventTarget = i
  }
  destroy() {
    this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null
  }
  _createPreparedEvent(t, e, i, n) {
    return new Is(this, t, this.prepared.name, e, this.element, i, n)
  }
  _fireEvent(t) {
    var e;
    (e = this.interactable) == null || e.fire(t), (!this.prevEvent || t.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t)
  }
  _doPhase(t) {
    const {
      event: e,
      phase: i,
      preEnd: n,
      type: o
    } = t, {
      rect: r
    } = this;
    if (r && i === "move" && (bi(this.edges, r, this.coords.delta[this.interactable.options.deltaSource]), r.width = r.right - r.left, r.height = r.bottom - r.top), this._scopeFire(`interactions:before-action-${i}`, t) === !1) return !1;
    const a = t.iEvent = this._createPreparedEvent(e, i, n, o);
    return this._scopeFire(`interactions:action-${i}`, t), i === "start" && (this.prevEvent = a), this._fireEvent(a), this._scopeFire(`interactions:after-action-${i}`, t), !0
  }
  _now() {
    return Date.now()
  }
}
const us = {
  methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
  search(s) {
    for (const t of us.methodOrder) {
      const e = us[t](s);
      if (e) return e
    }
    return null
  },
  simulationResume(s) {
    let {
      pointerType: t,
      eventType: e,
      eventTarget: i,
      scope: n
    } = s;
    if (!/down|start/i.test(e)) return null;
    for (const o of n.interactions.list) {
      let r = i;
      if (o.simulation && o.simulation.allowResume && o.pointerType === t)
        for (; r;) {
          if (r === o.element) return o;
          r = Et(r)
        }
    }
    return null
  },
  mouseOrPen(s) {
    let {
      pointerId: t,
      pointerType: e,
      eventType: i,
      scope: n
    } = s;
    if (e !== "mouse" && e !== "pen") return null;
    let o;
    for (const r of n.interactions.list)
      if (r.pointerType === e) {
        if (r.simulation && !sn(r, t)) continue;
        if (r.interacting()) return r;
        o || (o = r)
      } if (o) return o;
    for (const r of n.interactions.list)
      if (r.pointerType === e && !(/down/i.test(i) && r.simulation)) return r;
    return null
  },
  hasPointer(s) {
    let {
      pointerId: t,
      scope: e
    } = s;
    for (const i of e.interactions.list)
      if (sn(i, t)) return i;
    return null
  },
  idle(s) {
    let {
      pointerType: t,
      scope: e
    } = s;
    for (const i of e.interactions.list) {
      if (i.pointers.length === 1) {
        const n = i.interactable;
        if (n && !(n.options.gesture && n.options.gesture.enabled)) continue
      } else if (i.pointers.length >= 2) continue;
      if (!i.interacting() && t === i.pointerType) return i
    }
    return null
  }
};

function sn(s, t) {
  return s.pointers.some(e => {
    let {
      id: i
    } = e;
    return i === t
  })
}
const Bo = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];

function Ra(s) {
  const t = {};
  for (const o of Bo) t[o] = No(o, s);
  const e = tt.pEventTypes;
  let i;
  Z.PointerEvent ? i = [{
    type: e.down,
    listener: n
  }, {
    type: e.down,
    listener: t.pointerDown
  }, {
    type: e.move,
    listener: t.pointerMove
  }, {
    type: e.up,
    listener: t.pointerUp
  }, {
    type: e.cancel,
    listener: t.pointerUp
  }] : i = [{
    type: "mousedown",
    listener: t.pointerDown
  }, {
    type: "mousemove",
    listener: t.pointerMove
  }, {
    type: "mouseup",
    listener: t.pointerUp
  }, {
    type: "touchstart",
    listener: n
  }, {
    type: "touchstart",
    listener: t.pointerDown
  }, {
    type: "touchmove",
    listener: t.pointerMove
  }, {
    type: "touchend",
    listener: t.pointerUp
  }, {
    type: "touchcancel",
    listener: t.pointerUp
  }], i.push({
    type: "blur",
    listener(o) {
      for (const r of s.interactions.list) r.documentBlur(o)
    }
  }), s.prevTouchTime = 0, s.Interaction = class extends ja {
    get pointerMoveTolerance() {
      return s.interactions.pointerMoveTolerance
    }
    set pointerMoveTolerance(o) {
      s.interactions.pointerMoveTolerance = o
    }
    _now() {
      return s.now()
    }
  }, s.interactions = {
    list: [],
    new(o) {
      o.scopeFire = (l, a) => s.fire(l, a);
      const r = new s.Interaction(o);
      return s.interactions.list.push(r), r
    },
    listeners: t,
    docEvents: i,
    pointerMoveTolerance: 1
  };

  function n() {
    for (const o of s.interactions.list)
      if (!(!o.pointerIsDown || o.pointerType !== "touch" || o._interacting))
        for (const r of o.pointers) s.documents.some(l => {
          let {
            doc: a
          } = l;
          return Nt(a, r.downTarget)
        }) || o.removePointer(r.pointer, r.event)
  }
  s.usePlugin(Ta)
}

function No(s, t) {
  return function(e) {
    const i = t.interactions.list,
      n = Ao(e),
      [o, r] = Do(e),
      l = [];
    if (/^touch/.test(e.type)) {
      t.prevTouchTime = t.now();
      for (const a of e.changedTouches) {
        const h = a,
          c = Te(h),
          u = {
            pointer: h,
            pointerId: c,
            pointerType: n,
            eventType: e.type,
            eventTarget: o,
            curEventTarget: r,
            scope: t
          },
          d = nn(u);
        l.push([u.pointer, u.eventTarget, u.curEventTarget, d])
      }
    } else {
      let a = !1;
      if (!tt.supportsPointerEvent && /mouse/.test(e.type)) {
        for (let h = 0; h < i.length && !a; h++) a = i[h].pointerType !== "mouse" && i[h].pointerIsDown;
        a = a || t.now() - t.prevTouchTime < 500 || e.timeStamp === 0
      }
      if (!a) {
        const h = {
            pointer: e,
            pointerId: Te(e),
            pointerType: n,
            eventType: e.type,
            curEventTarget: r,
            eventTarget: o,
            scope: t
          },
          c = nn(h);
        l.push([h.pointer, h.eventTarget, h.curEventTarget, c])
      }
    }
    for (const [a, h, c, u] of l) u[s](a, e, h, c)
  }
}

function nn(s) {
  const {
    pointerType: t,
    scope: e
  } = s, n = {
    interaction: us.search(s),
    searchDetails: s
  };
  return e.fire("interactions:find", n), n.interaction || e.interactions.new({
    pointerType: t
  })
}

function Pi(s, t) {
  let {
    doc: e,
    scope: i,
    options: n
  } = s;
  const {
    interactions: {
      docEvents: o
    },
    events: r
  } = i, l = r[t];
  i.browser.isIOS && !n.events && (n.events = {
    passive: !1
  });
  for (const h in r.delegatedEvents) l(e, h, r.delegateListener), l(e, h, r.delegateUseCapture, !0);
  const a = n && n.events;
  for (const {
      type: h,
      listener: c
    }
    of o) l(e, h, c, a)
}
const Oa = {
  id: "core/interactions",
  install: Ra,
  listeners: {
    "scope:add-document": s => Pi(s, "add"),
    "scope:remove-document": s => Pi(s, "remove"),
    "interactable:unset": (s, t) => {
      let {
        interactable: e
      } = s;
      for (let i = t.interactions.list.length - 1; i >= 0; i--) {
        const n = t.interactions.list[i];
        n.interactable === e && (n.stop(), t.fire("interactions:destroy", {
          interaction: n
        }), n.destroy(), t.interactions.list.length > 2 && t.interactions.list.splice(i, 1))
      }
    }
  },
  onDocSignal: Pi,
  doOnInteractions: No,
  methodNames: Bo
};

function li(s, t) {
  if (t.phaselessTypes[s]) return !0;
  for (const e in t.map)
    if (s.indexOf(e) === 0 && s.substr(e.length) in t.phases) return !0;
  return !1
}
var It = function(s) {
  return s[s.On = 0] = "On", s[s.Off = 1] = "Off", s
}(It || {});
class Aa {
  get _defaults() {
    return {
      base: {},
      perAction: {},
      actions: {}
    }
  }
  constructor(t, e, i, n) {
    this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new Lo, this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = e.actions, this.target = t, this._context = e.context || i, this._win = he(qs(t) ? this._context : t), this._doc = this._win.document, this._scopeEvents = n, this.set(e)
  }
  setOnEvents(t, e) {
    return _.func(e.onstart) && this.on(`${t}start`, e.onstart), _.func(e.onmove) && this.on(`${t}move`, e.onmove), _.func(e.onend) && this.on(`${t}end`, e.onend), _.func(e.oninertiastart) && this.on(`${t}inertiastart`, e.oninertiastart), this
  }
  updatePerActionListeners(t, e, i) {
    var n;
    const o = (n = this._actions.map[t]) == null ? void 0 : n.filterEventType,
      r = l => (o == null || o(l)) && li(l, this._actions);
    (_.array(e) || _.object(e)) && this._onOff(It.Off, t, e, void 0, r), (_.array(i) || _.object(i)) && this._onOff(It.On, t, i, void 0, r)
  }
  setPerAction(t, e) {
    const i = this._defaults;
    for (const n in e) {
      const o = n,
        r = this.options[t],
        l = e[o];
      o === "listeners" && this.updatePerActionListeners(t, r.listeners, l), _.array(l) ? r[o] = $o(l) : _.plainObject(l) ? (r[o] = P(r[o] || {}, ce(l)), _.object(i.perAction[o]) && "enabled" in i.perAction[o] && (r[o].enabled = l.enabled !== !1)) : _.bool(l) && _.object(i.perAction[o]) ? r[o].enabled = l : r[o] = l
    }
  }
  getRect(t) {
    return t = t || (_.element(this.target) ? this.target : null), _.string(this.target) && (t = t || this._context.querySelector(this.target)), Cs(t)
  }
  rectChecker(t) {
    return _.func(t) ? (this.getRect = e => {
      const i = P({}, t.apply(this, e));
      return "width" in i || (i.width = i.right - i.left, i.height = i.bottom - i.top), i
    }, this) : t === null ? (delete this.getRect, this) : this.getRect
  }
  _backCompatOption(t, e) {
    if (qs(e) || _.object(e)) {
      this.options[t] = e;
      for (const i in this._actions.map) this.options[i][t] = e;
      return this
    }
    return this.options[t]
  }
  origin(t) {
    return this._backCompatOption("origin", t)
  }
  deltaSource(t) {
    return t === "page" || t === "client" ? (this.options.deltaSource = t, this) : this.options.deltaSource
  }
  getAllElements() {
    const {
      target: t
    } = this;
    return _.string(t) ? Array.from(this._context.querySelectorAll(t)) : _.func(t) && t.getAllElements ? t.getAllElements() : _.element(t) ? [t] : []
  }
  context() {
    return this._context
  }
  inContext(t) {
    return this._context === t.ownerDocument || Nt(this._context, t)
  }
  testIgnoreAllow(t, e, i) {
    return !this.testIgnore(t.ignoreFrom, e, i) && this.testAllow(t.allowFrom, e, i)
  }
  testAllow(t, e, i) {
    return t ? _.element(i) ? _.string(t) ? ls(i, t, e) : _.element(t) ? Nt(t, i) : !1 : !1 : !0
  }
  testIgnore(t, e, i) {
    return !t || !_.element(i) ? !1 : _.string(t) ? ls(i, t, e) : _.element(t) ? Nt(t, i) : !1
  }
  fire(t) {
    return this.events.fire(t), this
  }
  _onOff(t, e, i, n, o) {
    _.object(e) && !_.array(e) && (n = i, i = null);
    const r = le(e, i, o);
    for (let l in r) {
      l === "wheel" && (l = tt.wheelEvent);
      for (const a of r[l]) li(l, this._actions) ? this.events[t === It.On ? "on" : "off"](l, a) : _.string(this.target) ? this._scopeEvents[t === It.On ? "addDelegate" : "removeDelegate"](this.target, this._context, l, a, n) : this._scopeEvents[t === It.On ? "add" : "remove"](this.target, l, a, n)
    }
    return this
  }
  on(t, e, i) {
    return this._onOff(It.On, t, e, i)
  }
  off(t, e, i) {
    return this._onOff(It.Off, t, e, i)
  }
  set(t) {
    const e = this._defaults;
    _.object(t) || (t = {}), this.options = ce(e.base);
    for (const i in this._actions.methodDict) {
      const n = i,
        o = this._actions.methodDict[n];
      this.options[n] = {}, this.setPerAction(n, P(P({}, e.perAction), e.actions[n])), this[o](t[n])
    }
    for (const i in t) {
      if (i === "getRect") {
        this.rectChecker(t.getRect);
        continue
      }
      _.func(this[i]) && this[i](t[i])
    }
    return this
  }
  unset() {
    if (_.string(this.target))
      for (const t in this._scopeEvents.delegatedEvents) {
        const e = this._scopeEvents.delegatedEvents[t];
        for (let i = e.length - 1; i >= 0; i--) {
          const {
            selector: n,
            context: o,
            listeners: r
          } = e[i];
          n === this.target && o === this._context && e.splice(i, 1);
          for (let l = r.length - 1; l >= 0; l--) this._scopeEvents.removeDelegate(this.target, this._context, t, r[l][0], r[l][1])
        }
      } else this._scopeEvents.remove(this.target, "all")
  }
}
class Da {
  constructor(t) {
    this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = t, t.addListeners({
      "interactable:unset": e => {
        let {
          interactable: i
        } = e;
        const {
          target: n
        } = i, o = _.string(n) ? this.selectorMap[n] : n[this.scope.id], r = vi(o, l => l === i);
        o.splice(r, 1)
      }
    })
  }
  new(t, e) {
    e = P(e || {}, {
      actions: this.scope.actions
    });
    const i = new this.scope.Interactable(t, e, this.scope.document, this.scope.events);
    return this.scope.addDocument(i._doc), this.list.push(i), _.string(t) ? (this.selectorMap[t] || (this.selectorMap[t] = []), this.selectorMap[t].push(i)) : (i.target[this.scope.id] || Object.defineProperty(t, this.scope.id, {
      value: [],
      configurable: !0
    }), t[this.scope.id].push(i)), this.scope.fire("interactable:new", {
      target: t,
      options: e,
      interactable: i,
      win: this.scope._win
    }), i
  }
  getExisting(t, e) {
    const i = e && e.context || this.scope.document,
      n = _.string(t),
      o = n ? this.selectorMap[t] : t[this.scope.id];
    if (o) return be(o, r => r._context === i && (n || r.inContext(t)))
  }
  forEachMatch(t, e) {
    for (const i of this.list) {
      let n;
      if ((_.string(i.target) ? _.element(t) && Kt(t, i.target) : t === i.target) && i.inContext(t) && (n = e(i)), n !== void 0) return n
    }
  }
}

function Va(s) {
  const t = (e, i) => {
    let n = s.interactables.getExisting(e, i);
    return n || (n = s.interactables.new(e, i), n.events.global = t.globalEvents), n
  };
  return t.getPointerAverage = Oo, t.getTouchBBox = ga, t.getTouchDistance = ba, t.getTouchAngle = ya, t.getElementRect = Cs, t.getElementClientRect = Mo, t.matchesSelector = Kt, t.closest = xo, t.globalEvents = {}, t.version = "1.10.27", t.scope = s, t.use = function(e, i) {
    return this.scope.usePlugin(e, i), this
  }, t.isSet = function(e, i) {
    return !!this.scope.interactables.get(e, i && i.context)
  }, t.on = Ee(function(i, n, o) {
    if (_.string(i) && i.search(" ") !== -1 && (i = i.trim().split(/ +/)), _.array(i)) {
      for (const r of i) this.on(r, n, o);
      return this
    }
    if (_.object(i)) {
      for (const r in i) this.on(r, i[r], n);
      return this
    }
    return li(i, this.scope.actions) ? this.globalEvents[i] ? this.globalEvents[i].push(n) : this.globalEvents[i] = [n] : this.scope.events.add(this.scope.document, i, n, {
      options: o
    }), this
  }, "The interact.on() method is being deprecated"), t.off = Ee(function(i, n, o) {
    if (_.string(i) && i.search(" ") !== -1 && (i = i.trim().split(/ +/)), _.array(i)) {
      for (const r of i) this.off(r, n, o);
      return this
    }
    if (_.object(i)) {
      for (const r in i) this.off(r, i[r], n);
      return this
    }
    if (li(i, this.scope.actions)) {
      let r;
      i in this.globalEvents && (r = this.globalEvents[i].indexOf(n)) !== -1 && this.globalEvents[i].splice(r, 1)
    } else this.scope.events.remove(this.scope.document, i, n, o);
    return this
  }, "The interact.off() method is being deprecated"), t.debug = function() {
    return this.scope
  }, t.supportsTouch = function() {
    return tt.supportsTouch
  }, t.supportsPointerEvent = function() {
    return tt.supportsPointerEvent
  }, t.stop = function() {
    for (const e of this.scope.interactions.list) e.stop();
    return this
  }, t.pointerMoveTolerance = function(e) {
    return _.number(e) ? (this.scope.interactions.pointerMoveTolerance = e, this) : this.scope.interactions.pointerMoveTolerance
  }, t.addDocument = function(e, i) {
    this.scope.addDocument(e, i)
  }, t.removeDocument = function(e) {
    this.scope.removeDocument(e)
  }, t
}
class Wa {
  constructor() {
    this.id = `__interact_scope_${Math.floor(Math.random()*100)}`, this.isInitialized = !1, this.listenerMaps = [], this.browser = tt, this.defaults = ce(Vo), this.Eventable = Lo, this.actions = {
      map: {},
      phases: {
        start: !0,
        move: !0,
        end: !0
      },
      methodDict: {},
      phaselessTypes: {}
    }, this.interactStatic = Va(this), this.InteractEvent = Is, this.Interactable = void 0, this.interactables = new Da(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = {
      list: [],
      map: {}
    }, this.onWindowUnload = e => this.removeDocument(e.target);
    const t = this;
    this.Interactable = class extends Aa {
      get _defaults() {
        return t.defaults
      }
      set(e) {
        return super.set(e), t.fire("interactable:set", {
          options: e,
          interactable: this
        }), this
      }
      unset() {
        super.unset();
        const e = t.interactables.list.indexOf(this);
        e < 0 || (t.interactables.list.splice(e, 1), t.fire("interactable:unset", {
          interactable: this
        }))
      }
    }
  }
  addListeners(t, e) {
    this.listenerMaps.push({
      id: e,
      map: t
    })
  }
  fire(t, e) {
    for (const {
        map: {
          [t]: i
        }
      }
      of this.listenerMaps)
      if (i && i(e, this, t) === !1) return !1
  }
  init(t) {
    return this.isInitialized ? this : Ba(this, t)
  }
  pluginIsInstalled(t) {
    const {
      id: e
    } = t;
    return e ? !!this._plugins.map[e] : this._plugins.list.indexOf(t) !== -1
  }
  usePlugin(t, e) {
    if (!this.isInitialized) return this;
    if (this.pluginIsInstalled(t)) return this;
    if (t.id && (this._plugins.map[t.id] = t), this._plugins.list.push(t), t.install && t.install(this, e), t.listeners && t.before) {
      let i = 0;
      const n = this.listenerMaps.length,
        o = t.before.reduce((r, l) => (r[l] = !0, r[on(l)] = !0, r), {});
      for (; i < n; i++) {
        const r = this.listenerMaps[i].id;
        if (r && (o[r] || o[on(r)])) break
      }
      this.listenerMaps.splice(i, 0, {
        id: t.id,
        map: t.listeners
      })
    } else t.listeners && this.listenerMaps.push({
      id: t.id,
      map: t.listeners
    });
    return this
  }
  addDocument(t, e) {
    if (this.getDocIndex(t) !== -1) return !1;
    const i = he(t);
    e = e ? P({}, e) : {}, this.documents.push({
      doc: t,
      options: e
    }), this.events.documents.push(t), t !== this.document && this.events.add(i, "unload", this.onWindowUnload), this.fire("scope:add-document", {
      doc: t,
      window: i,
      scope: this,
      options: e
    })
  }
  removeDocument(t) {
    const e = this.getDocIndex(t),
      i = he(t),
      n = this.documents[e].options;
    this.events.remove(i, "unload", this.onWindowUnload), this.documents.splice(e, 1), this.events.documents.splice(e, 1), this.fire("scope:remove-document", {
      doc: t,
      window: i,
      scope: this,
      options: n
    })
  }
  getDocIndex(t) {
    for (let e = 0; e < this.documents.length; e++)
      if (this.documents[e].doc === t) return e;
    return -1
  }
  getDocOptions(t) {
    const e = this.getDocIndex(t);
    return e === -1 ? null : this.documents[e].options
  }
  now() {
    return (this.window.Date || Date).now()
  }
}

function Ba(s, t) {
  return s.isInitialized = !0, _.window(t) && wo(t), Z.init(t), tt.init(t), hs.init(t), s.window = t, s.document = t.document, s.usePlugin(Oa), s.usePlugin(xa), s
}

function on(s) {
  return s && s.replace(/\/.*$/, "")
}
const Fo = new Wa,
  ft = Fo.interactStatic,
  Na = typeof globalThis < "u" ? globalThis : window;
Fo.init(Na);
ft.use(aa);
class $s {
  constructor(t) {
    this.states = [], this.startOffset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = t, this.result = Be(), this.edges = {
      left: !1,
      right: !1,
      top: !1,
      bottom: !1
    }
  }
  start(t, e) {
    let {
      phase: i
    } = t;
    const {
      interaction: n
    } = this, o = Fa(n);
    this.prepareStates(o), this.startEdges = P({}, n.edges), this.edges = P({}, this.startEdges), this.startOffset = Ua(n.rect, e), this.startDelta = {
      x: 0,
      y: 0
    };
    const r = this.fillArg({
      phase: i,
      pageCoords: e,
      preEnd: !1
    });
    return this.result = Be(), this.startAll(r), this.result = this.setAll(r)
  }
  fillArg(t) {
    const {
      interaction: e
    } = this;
    return t.interaction = e, t.interactable = e.interactable, t.element = e.element, t.rect || (t.rect = e.rect), t.edges || (t.edges = this.startEdges), t.startOffset = this.startOffset, t
  }
  startAll(t) {
    for (const e of this.states) e.methods.start && (t.state = e, e.methods.start(t))
  }
  setAll(t) {
    const {
      phase: e,
      preEnd: i,
      skipModifiers: n,
      rect: o,
      edges: r
    } = t;
    t.coords = P({}, t.pageCoords), t.rect = P({}, o), t.edges = P({}, r);
    const l = n ? this.states.slice(n) : this.states,
      a = Be(t.coords, t.rect);
    for (const d of l) {
      var h;
      const {
        options: f
      } = d, p = P({}, t.coords);
      let m = null;
      (h = d.methods) != null && h.set && this.shouldDo(f, i, e) && (t.state = d, m = d.methods.set(t), bi(t.edges, t.rect, {
        x: t.coords.x - p.x,
        y: t.coords.y - p.y
      })), a.eventProps.push(m)
    }
    P(this.edges, t.edges), a.delta.x = t.coords.x - t.pageCoords.x, a.delta.y = t.coords.y - t.pageCoords.y, a.rectDelta.left = t.rect.left - o.left, a.rectDelta.right = t.rect.right - o.right, a.rectDelta.top = t.rect.top - o.top, a.rectDelta.bottom = t.rect.bottom - o.bottom;
    const c = this.result.coords,
      u = this.result.rect;
    if (c && u) {
      const d = a.rect.left !== u.left || a.rect.right !== u.right || a.rect.top !== u.top || a.rect.bottom !== u.bottom;
      a.changed = d || c.x !== a.coords.x || c.y !== a.coords.y
    }
    return a
  }
  applyToInteraction(t) {
    const {
      interaction: e
    } = this, {
      phase: i
    } = t, n = e.coords.cur, o = e.coords.start, {
      result: r,
      startDelta: l
    } = this, a = r.delta;
    i === "start" && P(this.startDelta, r.delta);
    for (const [u, d] of [
        [o, l],
        [n, a]
      ]) u.page.x += d.x, u.page.y += d.y, u.client.x += d.x, u.client.y += d.y;
    const {
      rectDelta: h
    } = this.result, c = t.rect || e.rect;
    c.left += h.left, c.right += h.right, c.top += h.top, c.bottom += h.bottom, c.width = c.right - c.left, c.height = c.bottom - c.top
  }
  setAndApply(t) {
    const {
      interaction: e
    } = this, {
      phase: i,
      preEnd: n,
      skipModifiers: o
    } = t, r = this.setAll(this.fillArg({
      preEnd: n,
      phase: i,
      pageCoords: t.modifiedCoords || e.coords.cur.page
    }));
    if (this.result = r, !r.changed && (!o || o < this.states.length) && e.interacting()) return !1;
    if (t.modifiedCoords) {
      const {
        page: l
      } = e.coords.cur, a = {
        x: t.modifiedCoords.x - l.x,
        y: t.modifiedCoords.y - l.y
      };
      r.coords.x += a.x, r.coords.y += a.y, r.delta.x += a.x, r.delta.y += a.y
    }
    this.applyToInteraction(t)
  }
  beforeEnd(t) {
    const {
      interaction: e,
      event: i
    } = t, n = this.states;
    if (!n || !n.length) return;
    let o = !1;
    for (const r of n) {
      t.state = r;
      const {
        options: l,
        methods: a
      } = r, h = a.beforeEnd && a.beforeEnd(t);
      if (h) return this.endResult = h, !1;
      o = o || !o && this.shouldDo(l, !0, t.phase, !0)
    }
    o && e.move({
      event: i,
      preEnd: !0
    })
  }
  stop(t) {
    const {
      interaction: e
    } = t;
    if (!this.states || !this.states.length) return;
    const i = P({
      states: this.states,
      interactable: e.interactable,
      element: e.element,
      rect: null
    }, t);
    this.fillArg(i);
    for (const n of this.states) i.state = n, n.methods.stop && n.methods.stop(i);
    this.states = null, this.endResult = null
  }
  prepareStates(t) {
    this.states = [];
    for (let e = 0; e < t.length; e++) {
      const {
        options: i,
        methods: n,
        name: o
      } = t[e];
      this.states.push({
        options: i,
        methods: n,
        index: e,
        name: o
      })
    }
    return this.states
  }
  restoreInteractionCoords(t) {
    let {
      interaction: {
        coords: e,
        rect: i,
        modification: n
      }
    } = t;
    if (!n.result) return;
    const {
      startDelta: o
    } = n, {
      delta: r,
      rectDelta: l
    } = n.result, a = [
      [e.start, o],
      [e.cur, r]
    ];
    for (const [h, c] of a) h.page.x -= c.x, h.page.y -= c.y, h.client.x -= c.x, h.client.y -= c.y;
    i.left -= l.left, i.right -= l.right, i.top -= l.top, i.bottom -= l.bottom
  }
  shouldDo(t, e, i, n) {
    return !(!t || t.enabled === !1 || n && !t.endOnly || t.endOnly && !e || i === "start" && !t.setStart)
  }
  copyFrom(t) {
    this.startOffset = t.startOffset, this.startDelta = t.startDelta, this.startEdges = t.startEdges, this.edges = t.edges, this.states = t.states.map(e => ce(e)), this.result = Be(P({}, t.result.coords), P({}, t.result.rect))
  }
  destroy() {
    for (const t in this) this[t] = null
  }
}

function Be(s, t) {
  return {
    rect: t,
    coords: s,
    delta: {
      x: 0,
      y: 0
    },
    rectDelta: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventProps: [],
    changed: !0
  }
}

function Fa(s) {
  const t = s.interactable.options[s.prepared.name],
    e = t.modifiers;
  return e && e.length ? e : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(i => {
    const n = t[i];
    return n && n.enabled && {
      options: n,
      methods: n._methods
    }
  }).filter(i => !!i)
}

function Ua(s, t) {
  return s ? {
    left: t.x - s.left,
    top: t.y - s.top,
    right: s.right - t.x,
    bottom: s.bottom - t.y
  } : {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
}

function At(s, t) {
  const {
    defaults: e
  } = s, i = {
    start: s.start,
    set: s.set,
    beforeEnd: s.beforeEnd,
    stop: s.stop
  }, n = o => {
    const r = o || {};
    r.enabled = r.enabled !== !1;
    for (const a in e) a in r || (r[a] = e[a]);
    const l = {
      options: r,
      methods: i,
      name: t,
      enable: () => (r.enabled = !0, l),
      disable: () => (r.enabled = !1, l)
    };
    return l
  };
  return t && typeof t == "string" && (n._defaults = e, n._methods = i), n
}

function ye(s) {
  let {
    iEvent: t,
    interaction: e
  } = s;
  const i = e.modification.result;
  i && (t.modifiers = i.eventProps)
}
const Uo = {
  id: "modifiers/base",
  before: ["actions"],
  install: s => {
    s.defaults.perAction.modifiers = []
  },
  listeners: {
    "interactions:new": s => {
      let {
        interaction: t
      } = s;
      t.modification = new $s(t)
    },
    "interactions:before-action-start": s => {
      const {
        interaction: t
      } = s, e = s.interaction.modification;
      e.start(s, t.coords.start.page), t.edges = e.edges, e.applyToInteraction(s)
    },
    "interactions:before-action-move": s => {
      const {
        interaction: t
      } = s, {
        modification: e
      } = t, i = e.setAndApply(s);
      return t.edges = e.edges, i
    },
    "interactions:before-action-end": s => {
      const {
        interaction: t
      } = s, {
        modification: e
      } = t, i = e.beforeEnd(s);
      return t.edges = e.startEdges, i
    },
    "interactions:action-start": ye,
    "interactions:action-move": ye,
    "interactions:action-end": ye,
    "interactions:after-action-start": s => s.interaction.modification.restoreInteractionCoords(s),
    "interactions:after-action-move": s => s.interaction.modification.restoreInteractionCoords(s),
    "interactions:stop": s => s.interaction.modification.stop(s)
  }
};
Wo.offsetBy = "";

function Ka(s) {
  s.pointerIsDown && (ds(s.coords.cur, s.offset.total), s.offset.pending.x = 0, s.offset.pending.y = 0)
}

function rn(s) {
  let {
    interaction: t
  } = s;
  Ko(t)
}

function Ha(s) {
  let {
    interaction: t
  } = s;
  if (Ko(t)) return t.move({
    offset: !0
  }), t.end(), !1
}

function Ja(s) {
  let {
    interaction: t
  } = s;
  t.offset.total.x = 0, t.offset.total.y = 0, t.offset.pending.x = 0, t.offset.pending.y = 0
}

function Ko(s) {
  if (!Ya(s)) return !1;
  const {
    pending: t
  } = s.offset;
  return ds(s.coords.cur, t), ds(s.coords.delta, t), bi(s.edges, s.rect, t), t.x = 0, t.y = 0, !0
}

function Xa(s) {
  let {
    x: t,
    y: e
  } = s;
  this.offset.pending.x += t, this.offset.pending.y += e, this.offset.total.x += t, this.offset.total.y += e
}

function ds(s, t) {
  let {
    page: e,
    client: i
  } = s, {
    x: n,
    y: o
  } = t;
  e.x += n, e.y += o, i.x += n, i.y += o
}

function Ya(s) {
  return !!(s.offset.pending.x || s.offset.pending.y)
}
const Ga = {
  id: "offset",
  before: ["modifiers", "pointer-events", "actions", "inertia"],
  install(s) {
    s.Interaction.prototype.offsetBy = Xa
  },
  listeners: {
    "interactions:new": s => {
      let {
        interaction: t
      } = s;
      t.offset = {
        total: {
          x: 0,
          y: 0
        },
        pending: {
          x: 0,
          y: 0
        }
      }
    },
    "interactions:update-pointer": s => {
      let {
        interaction: t
      } = s;
      return Ka(t)
    },
    "interactions:before-action-start": rn,
    "interactions:before-action-move": rn,
    "interactions:before-action-end": Ha,
    "interactions:stop": Ja
  }
};

function Za(s) {
  const {
    defaults: t
  } = s;
  s.usePlugin(Ga), s.usePlugin(Uo), s.actions.phases.inertiastart = !0, s.actions.phases.resume = !0, t.perAction.inertia = {
    enabled: !1,
    resistance: 10,
    minSpeed: 100,
    endSpeed: 10,
    allowResume: !0,
    smoothEndDuration: 300
  }
}
class qa {
  constructor(t) {
    this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = t
  }
  start(t) {
    const {
      interaction: e
    } = this, i = Ne(e);
    if (!i || !i.enabled) return !1;
    const {
      client: n
    } = e.coords.velocity, o = Ae(n.x, n.y), r = this.modification || (this.modification = new $s(e));
    if (r.copyFrom(e.modification), this.t0 = e._now(), this.allowResume = i.allowResume, this.v0 = o, this.currentOffset = {
        x: 0,
        y: 0
      }, this.startCoords = e.coords.cur.page, this.modifierArg = r.fillArg({
        pageCoords: this.startCoords,
        preEnd: !0,
        phase: "inertiastart"
      }), this.t0 - e.coords.cur.timeStamp < 50 && o > i.minSpeed && o > i.endSpeed) this.startInertia();
    else {
      if (r.result = r.setAll(this.modifierArg), !r.result.changed) return !1;
      this.startSmoothEnd()
    }
    return e.modification.result.rect = null, e.offsetBy(this.targetOffset), e._doPhase({
      interaction: e,
      event: t,
      phase: "inertiastart"
    }), e.offsetBy({
      x: -this.targetOffset.x,
      y: -this.targetOffset.y
    }), e.modification.result.rect = null, this.active = !0, e.simulation = this, !0
  }
  startInertia() {
    const t = this.interaction.coords.velocity.client,
      e = Ne(this.interaction),
      i = e.resistance,
      n = -Math.log(e.endSpeed / this.v0) / i;
    this.targetOffset = {
      x: (t.x - n) / i,
      y: (t.y - n) / i
    }, this.te = n, this.lambda_v0 = i / this.v0, this.one_ve_v0 = 1 - e.endSpeed / this.v0;
    const {
      modification: o,
      modifierArg: r
    } = this;
    r.pageCoords = {
      x: this.startCoords.x + this.targetOffset.x,
      y: this.startCoords.y + this.targetOffset.y
    }, o.result = o.setAll(r), o.result.changed && (this.isModified = !0, this.modifiedOffset = {
      x: this.targetOffset.x + o.result.delta.x,
      y: this.targetOffset.y + o.result.delta.y
    }), this.onNextFrame(() => this.inertiaTick())
  }
  startSmoothEnd() {
    this.smoothEnd = !0, this.isModified = !0, this.targetOffset = {
      x: this.modification.result.delta.x,
      y: this.modification.result.delta.y
    }, this.onNextFrame(() => this.smoothEndTick())
  }
  onNextFrame(t) {
    this.timeout = hs.request(() => {
      this.active && t()
    })
  }
  inertiaTick() {
    const {
      interaction: t
    } = this, i = Ne(t).resistance, n = (t._now() - this.t0) / 1e3;
    if (n < this.te) {
      const o = 1 - (Math.exp(-i * n) - this.lambda_v0) / this.one_ve_v0;
      let r;
      this.isModified ? r = sh(0, 0, this.targetOffset.x, this.targetOffset.y, this.modifiedOffset.x, this.modifiedOffset.y, o) : r = {
        x: this.targetOffset.x * o,
        y: this.targetOffset.y * o
      };
      const l = {
        x: r.x - this.currentOffset.x,
        y: r.y - this.currentOffset.y
      };
      this.currentOffset.x += l.x, this.currentOffset.y += l.y, t.offsetBy(l), t.move(), this.onNextFrame(() => this.inertiaTick())
    } else t.offsetBy({
      x: this.modifiedOffset.x - this.currentOffset.x,
      y: this.modifiedOffset.y - this.currentOffset.y
    }), this.end()
  }
  smoothEndTick() {
    const {
      interaction: t
    } = this, e = t._now() - this.t0, {
      smoothEndDuration: i
    } = Ne(t);
    if (e < i) {
      const n = {
          x: an(e, 0, this.targetOffset.x, i),
          y: an(e, 0, this.targetOffset.y, i)
        },
        o = {
          x: n.x - this.currentOffset.x,
          y: n.y - this.currentOffset.y
        };
      this.currentOffset.x += o.x, this.currentOffset.y += o.y, t.offsetBy(o), t.move({
        skipModifiers: this.modifierCount
      }), this.onNextFrame(() => this.smoothEndTick())
    } else t.offsetBy({
      x: this.targetOffset.x - this.currentOffset.x,
      y: this.targetOffset.y - this.currentOffset.y
    }), this.end()
  }
  resume(t) {
    let {
      pointer: e,
      event: i,
      eventTarget: n
    } = t;
    const {
      interaction: o
    } = this;
    o.offsetBy({
      x: -this.currentOffset.x,
      y: -this.currentOffset.y
    }), o.updatePointer(e, i, n, !0), o._doPhase({
      interaction: o,
      event: i,
      phase: "resume"
    }), Qe(o.coords.prev, o.coords.cur), this.stop()
  }
  end() {
    this.interaction.move(), this.interaction.end(), this.stop()
  }
  stop() {
    this.active = this.smoothEnd = !1, this.interaction.simulation = null, hs.cancel(this.timeout)
  }
}

function Qa(s) {
  let {
    interaction: t,
    event: e
  } = s;
  return !t._interacting || t.simulation ? null : t.inertia.start(e) ? !1 : null
}

function th(s) {
  const {
    interaction: t,
    eventTarget: e
  } = s, i = t.inertia;
  if (!i.active) return;
  let n = e;
  for (; _.element(n);) {
    if (n === t.element) {
      i.resume(s);
      break
    }
    n = Et(n)
  }
}

function eh(s) {
  let {
    interaction: t
  } = s;
  const e = t.inertia;
  e.active && e.stop()
}

function Ne(s) {
  let {
    interactable: t,
    prepared: e
  } = s;
  return t && t.options && e.name && t.options[e.name].inertia
}
const ih = {
  id: "inertia",
  before: ["modifiers", "actions"],
  install: Za,
  listeners: {
    "interactions:new": s => {
      let {
        interaction: t
      } = s;
      t.inertia = new qa(t)
    },
    "interactions:before-action-end": Qa,
    "interactions:down": th,
    "interactions:stop": eh,
    "interactions:before-action-resume": s => {
      const {
        modification: t
      } = s.interaction;
      t.stop(s), t.start(s, s.interaction.coords.cur.page), t.applyToInteraction(s)
    },
    "interactions:before-action-inertiastart": s => s.interaction.modification.setAndApply(s),
    "interactions:action-resume": ye,
    "interactions:action-inertiastart": ye,
    "interactions:after-action-inertiastart": s => s.interaction.modification.restoreInteractionCoords(s),
    "interactions:after-action-resume": s => s.interaction.modification.restoreInteractionCoords(s)
  }
};

function ln(s, t, e, i) {
  const n = 1 - s;
  return n * n * t + 2 * n * s * e + s * s * i
}

function sh(s, t, e, i, n, o, r) {
  return {
    x: ln(r, s, e, n),
    y: ln(r, t, i, o)
  }
}

function an(s, t, e, i) {
  return s /= i, -e * s * (s - 2) + t
}
ft.use(ih);

function nh(s) {
  const {
    actions: t,
    Interactable: e,
    defaults: i
  } = s;
  e.prototype.draggable = ti.draggable, t.map.drag = ti, t.methodDict.drag = "draggable", i.actions.drag = ti.defaults
}

function Ii(s) {
  let {
    interaction: t
  } = s;
  if (t.prepared.name !== "drag") return;
  const e = t.prepared.axis;
  e === "x" ? (t.coords.cur.page.y = t.coords.start.page.y, t.coords.cur.client.y = t.coords.start.client.y, t.coords.velocity.client.y = 0, t.coords.velocity.page.y = 0) : e === "y" && (t.coords.cur.page.x = t.coords.start.page.x, t.coords.cur.client.x = t.coords.start.client.x, t.coords.velocity.client.x = 0, t.coords.velocity.page.x = 0)
}

function hn(s) {
  let {
    iEvent: t,
    interaction: e
  } = s;
  if (e.prepared.name !== "drag") return;
  const i = e.prepared.axis;
  if (i === "x" || i === "y") {
    const n = i === "x" ? "y" : "x";
    t.page[n] = e.coords.start.page[n], t.client[n] = e.coords.start.client[n], t.delta[n] = 0
  }
}
const oh = function(t) {
    return _.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : _.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag
  },
  ti = {
    id: "actions/drag",
    install: nh,
    listeners: {
      "interactions:before-action-move": Ii,
      "interactions:action-resume": Ii,
      "interactions:action-move": hn,
      "auto-start:check": s => {
        const {
          interaction: t,
          interactable: e,
          buttons: i
        } = s, n = e.options.drag;
        if (!(!(n && n.enabled) || t.pointerIsDown && /mouse|pointer/.test(t.pointerType) && !(i & e.options.drag.mouseButtons))) return s.action = {
          name: "drag",
          axis: n.lockAxis === "start" ? n.startAxis : n.lockAxis
        }, !1
      }
    },
    draggable: oh,
    beforeMove: Ii,
    move: hn,
    defaults: {
      startAxis: "xy",
      lockAxis: "xy"
    },
    getCursor() {
      return "move"
    },
    filterEventType: s => s.search("drag") === 0
  };
ft.use(ti);

function rh(s) {
  const {
    actions: t,
    browser: e,
    Interactable: i,
    defaults: n
  } = s;
  xt.cursors = ch(e), xt.defaultMargin = e.supportsTouch || e.supportsPointerEvent ? 20 : 10, i.prototype.resizable = function(o) {
    return ah(this, o, s)
  }, t.map.resize = xt, t.methodDict.resize = "resizable", n.actions.resize = xt.defaults
}

function lh(s) {
  const {
    interaction: t,
    interactable: e,
    element: i,
    rect: n,
    buttons: o
  } = s;
  if (!n) return;
  const r = P({}, t.coords.cur.page),
    l = e.options.resize;
  if (!(!(l && l.enabled) || t.pointerIsDown && /mouse|pointer/.test(t.pointerType) && !(o & l.mouseButtons))) {
    if (_.object(l.edges)) {
      const a = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      };
      for (const h in a) a[h] = hh(h, l.edges[h], r, t._latestPointer.eventTarget, i, n, l.margin || xt.defaultMargin);
      a.left = a.left && !a.right, a.top = a.top && !a.bottom, (a.left || a.right || a.top || a.bottom) && (s.action = {
        name: "resize",
        edges: a
      })
    } else {
      const a = l.axis !== "y" && r.x > n.right - xt.defaultMargin,
        h = l.axis !== "x" && r.y > n.bottom - xt.defaultMargin;
      (a || h) && (s.action = {
        name: "resize",
        axes: (a ? "x" : "") + (h ? "y" : "")
      })
    }
    return s.action ? !1 : void 0
  }
}

function ah(s, t, e) {
  return _.object(t) ? (s.options.resize.enabled = t.enabled !== !1, s.setPerAction("resize", t), s.setOnEvents("resize", t), _.string(t.axis) && /^x$|^y$|^xy$/.test(t.axis) ? s.options.resize.axis = t.axis : t.axis === null && (s.options.resize.axis = e.defaults.actions.resize.axis), _.bool(t.preserveAspectRatio) ? s.options.resize.preserveAspectRatio = t.preserveAspectRatio : _.bool(t.square) && (s.options.resize.square = t.square), s) : _.bool(t) ? (s.options.resize.enabled = t, s) : s.options.resize
}

function hh(s, t, e, i, n, o, r) {
  if (!t) return !1;
  if (t === !0) {
    const l = _.number(o.width) ? o.width : o.right - o.left,
      a = _.number(o.height) ? o.height : o.bottom - o.top;
    if (r = Math.min(r, Math.abs((s === "left" || s === "right" ? l : a) / 2)), l < 0 && (s === "left" ? s = "right" : s === "right" && (s = "left")), a < 0 && (s === "top" ? s = "bottom" : s === "bottom" && (s = "top")), s === "left") {
      const h = l >= 0 ? o.left : o.right;
      return e.x < h + r
    }
    if (s === "top") {
      const h = a >= 0 ? o.top : o.bottom;
      return e.y < h + r
    }
    if (s === "right") return e.x > (l >= 0 ? o.right : o.left) - r;
    if (s === "bottom") return e.y > (a >= 0 ? o.bottom : o.top) - r
  }
  return _.element(i) ? _.element(t) ? t === i : ls(i, t, n) : !1
}

function ch(s) {
  return s.isIe9 ? {
    x: "e-resize",
    y: "s-resize",
    xy: "se-resize",
    top: "n-resize",
    left: "w-resize",
    bottom: "s-resize",
    right: "e-resize",
    topleft: "se-resize",
    bottomright: "se-resize",
    topright: "ne-resize",
    bottomleft: "ne-resize"
  } : {
    x: "ew-resize",
    y: "ns-resize",
    xy: "nwse-resize",
    top: "ns-resize",
    left: "ew-resize",
    bottom: "ns-resize",
    right: "ew-resize",
    topleft: "nwse-resize",
    bottomright: "nwse-resize",
    topright: "nesw-resize",
    bottomleft: "nesw-resize"
  }
}

function uh(s) {
  let {
    iEvent: t,
    interaction: e
  } = s;
  if (e.prepared.name !== "resize" || !e.prepared.edges) return;
  const i = t,
    n = e.rect;
  e._rects = {
    start: P({}, n),
    corrected: P({}, n),
    previous: P({}, n),
    delta: {
      left: 0,
      right: 0,
      width: 0,
      top: 0,
      bottom: 0,
      height: 0
    }
  }, i.edges = e.prepared.edges, i.rect = e._rects.corrected, i.deltaRect = e._rects.delta
}

function dh(s) {
  let {
    iEvent: t,
    interaction: e
  } = s;
  if (e.prepared.name !== "resize" || !e.prepared.edges) return;
  const i = t,
    o = e.interactable.options.resize.invert,
    r = o === "reposition" || o === "negate",
    l = e.rect,
    {
      start: a,
      corrected: h,
      delta: c,
      previous: u
    } = e._rects;
  if (P(u, h), r) {
    if (P(h, l), o === "reposition") {
      if (h.top > h.bottom) {
        const d = h.top;
        h.top = h.bottom, h.bottom = d
      }
      if (h.left > h.right) {
        const d = h.left;
        h.left = h.right, h.right = d
      }
    }
  } else h.top = Math.min(l.top, a.bottom), h.bottom = Math.max(l.bottom, a.top), h.left = Math.min(l.left, a.right), h.right = Math.max(l.right, a.left);
  h.width = h.right - h.left, h.height = h.bottom - h.top;
  for (const d in h) c[d] = h[d] - u[d];
  i.edges = e.prepared.edges, i.rect = h, i.deltaRect = c
}

function fh(s) {
  let {
    iEvent: t,
    interaction: e
  } = s;
  if (e.prepared.name !== "resize" || !e.prepared.edges) return;
  const i = t;
  i.edges = e.prepared.edges, i.rect = e._rects.corrected, i.deltaRect = e._rects.delta
}

function cn(s) {
  let {
    iEvent: t,
    interaction: e
  } = s;
  if (e.prepared.name !== "resize" || !e.resizeAxes) return;
  const i = e.interactable.options,
    n = t;
  i.resize.square ? (e.resizeAxes === "y" ? n.delta.x = n.delta.y : n.delta.y = n.delta.x, n.axes = "xy") : (n.axes = e.resizeAxes, e.resizeAxes === "x" ? n.delta.y = 0 : e.resizeAxes === "y" && (n.delta.x = 0))
}
const xt = {
  id: "actions/resize",
  before: ["actions/drag"],
  install: rh,
  listeners: {
    "interactions:new": s => {
      let {
        interaction: t
      } = s;
      t.resizeAxes = "xy"
    },
    "interactions:action-start": s => {
      uh(s), cn(s)
    },
    "interactions:action-move": s => {
      dh(s), cn(s)
    },
    "interactions:action-end": fh,
    "auto-start:check": lh
  },
  defaults: {
    square: !1,
    preserveAspectRatio: !1,
    axis: "xy",
    margin: NaN,
    edges: null,
    invert: "none"
  },
  cursors: null,
  getCursor(s) {
    let {
      edges: t,
      axis: e,
      name: i
    } = s;
    const n = xt.cursors;
    let o = null;
    if (e) o = n[i + e];
    else if (t) {
      let r = "";
      for (const l of ["top", "bottom", "left", "right"]) t[l] && (r += l);
      o = n[r]
    }
    return o
  },
  filterEventType: s => s.search("resize") === 0,
  defaultMargin: null
};
ft.use(xt);
var ph = () => {},
  mh = () => {},
  vh = s => {
    const t = [
        ["x", "y"],
        ["left", "top"],
        ["right", "bottom"],
        ["width", "height"]
      ].filter(i => {
        let [n, o] = i;
        return n in s || o in s
      }),
      e = (i, n) => {
        const {
          range: o,
          limits: r = {
            left: -1 / 0,
            right: 1 / 0,
            top: -1 / 0,
            bottom: 1 / 0
          },
          offset: l = {
            x: 0,
            y: 0
          }
        } = s, a = {
          range: o,
          grid: s,
          x: null,
          y: null
        };
        for (const [h, c] of t) {
          const u = Math.round((i - l.x) / s[h]),
            d = Math.round((n - l.y) / s[c]);
          a[h] = Math.max(r.left, Math.min(r.right, u * s[h] + l.x)), a[c] = Math.max(r.top, Math.min(r.bottom, d * s[c] + l.y))
        }
        return a
      };
    return e.grid = s, e.coordFields = t, e
  },
  gh = Object.freeze({
    __proto__: null,
    edgeTarget: ph,
    elements: mh,
    grid: vh
  });
const bh = {
    id: "snappers",
    install(s) {
      const {
        interactStatic: t
      } = s;
      t.snappers = P(t.snappers || {}, gh), t.createSnapGrid = t.snappers.grid
    }
  },
  yh = {
    start(s) {
      const {
        state: t,
        rect: e,
        edges: i,
        pageCoords: n
      } = s;
      let {
        ratio: o,
        enabled: r
      } = t.options;
      const {
        equalDelta: l,
        modifiers: a
      } = t.options;
      o === "preserve" && (o = e.width / e.height), t.startCoords = P({}, n), t.startRect = P({}, e), t.ratio = o, t.equalDelta = l;
      const h = t.linkedEdges = {
        top: i.top || i.left && !i.bottom,
        left: i.left || i.top && !i.right,
        bottom: i.bottom || i.right && !i.top,
        right: i.right || i.bottom && !i.left
      };
      if (t.xIsPrimaryAxis = !!(i.left || i.right), t.equalDelta) {
        const u = (h.left ? 1 : -1) * (h.top ? 1 : -1);
        t.edgeSign = {
          x: u,
          y: u
        }
      } else t.edgeSign = {
        x: h.left ? -1 : 1,
        y: h.top ? -1 : 1
      };
      if (r !== !1 && P(i, h), !(a != null && a.length)) return;
      const c = new $s(s.interaction);
      c.copyFrom(s.interaction.modification), c.prepareStates(a), t.subModification = c, c.startAll({
        ...s
      })
    },
    set(s) {
      const {
        state: t,
        rect: e,
        coords: i
      } = s, {
        linkedEdges: n
      } = t, o = P({}, i), r = t.equalDelta ? _h : wh;
      if (P(s.edges, n), r(t, t.xIsPrimaryAxis, i, e), !t.subModification) return null;
      const l = P({}, e);
      bi(n, l, {
        x: i.x - o.x,
        y: i.y - o.y
      });
      const a = t.subModification.setAll({
          ...s,
          rect: l,
          edges: n,
          pageCoords: i,
          prevCoords: i,
          prevRect: l
        }),
        {
          delta: h
        } = a;
      if (a.changed) {
        const c = Math.abs(h.x) > Math.abs(h.y);
        r(t, c, a.coords, a.rect), P(i, a.coords)
      }
      return a.eventProps
    },
    defaults: {
      ratio: "preserve",
      equalDelta: !1,
      modifiers: [],
      enabled: !1
    }
  };

function _h(s, t, e) {
  let {
    startCoords: i,
    edgeSign: n
  } = s;
  t ? e.y = i.y + (e.x - i.x) * n.y : e.x = i.x + (e.y - i.y) * n.x
}

function wh(s, t, e, i) {
  let {
    startRect: n,
    startCoords: o,
    ratio: r,
    edgeSign: l
  } = s;
  if (t) {
    const a = i.width / r;
    e.y = o.y + (a - n.height) * l.y
  } else {
    const a = i.height * r;
    e.x = o.x + (a - n.width) * l.x
  }
}
var Sh = At(yh, "aspectRatio");

function xh(s) {
  let {
    rect: t,
    startOffset: e,
    state: i,
    interaction: n,
    pageCoords: o
  } = s;
  const {
    options: r
  } = i, {
    elementRect: l
  } = r, a = P({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }, r.offset || {});
  if (t && l) {
    const h = Ht(r.restriction, n, o);
    if (h) {
      const c = h.right - h.left - t.width,
        u = h.bottom - h.top - t.height;
      c < 0 && (a.left += c, a.right += c), u < 0 && (a.top += u, a.bottom += u)
    }
    a.left += e.left - t.width * l.left, a.top += e.top - t.height * l.top, a.right += e.right - t.width * (1 - l.right), a.bottom += e.bottom - t.height * (1 - l.bottom)
  }
  i.offset = a
}

function Mh(s) {
  let {
    coords: t,
    interaction: e,
    state: i
  } = s;
  const {
    options: n,
    offset: o
  } = i, r = Ht(n.restriction, e, t);
  if (!r) return;
  const l = Pa(r);
  t.x = Math.max(Math.min(l.right - o.right, t.x), l.left + o.left), t.y = Math.max(Math.min(l.bottom - o.bottom, t.y), l.top + o.top)
}

function Ht(s, t, e) {
  return _.func(s) ? ze(s, t.interactable, t.element, [e.x, e.y, t]) : ze(s, t.interactable, t.element)
}
const kh = {
    restriction: null,
    elementRect: null,
    offset: null,
    endOnly: !1,
    enabled: !1
  },
  ai = {
    start: xh,
    set: Mh,
    defaults: kh
  };
var Ch = At(ai, "restrict");
const Ho = {
    top: 1 / 0,
    left: 1 / 0,
    bottom: -1 / 0,
    right: -1 / 0
  },
  Jo = {
    top: -1 / 0,
    left: -1 / 0,
    bottom: 1 / 0,
    right: 1 / 0
  };

function Eh(s) {
  let {
    interaction: t,
    startOffset: e,
    state: i
  } = s;
  const {
    options: n
  } = i;
  let o;
  if (n) {
    const r = Ht(n.offset, t, t.coords.start.page);
    o = gi(r)
  }
  o = o || {
    x: 0,
    y: 0
  }, i.offset = {
    top: o.y + e.top,
    left: o.x + e.left,
    bottom: o.y - e.bottom,
    right: o.x - e.right
  }
}

function Th(s) {
  let {
    coords: t,
    edges: e,
    interaction: i,
    state: n
  } = s;
  const {
    offset: o,
    options: r
  } = n;
  if (!e) return;
  const l = P({}, t),
    a = Ht(r.inner, i, l) || {},
    h = Ht(r.outer, i, l) || {};
  un(a, Ho), un(h, Jo), e.top ? t.y = Math.min(Math.max(h.top + o.top, l.y), a.top + o.top) : e.bottom && (t.y = Math.max(Math.min(h.bottom + o.bottom, l.y), a.bottom + o.bottom)), e.left ? t.x = Math.min(Math.max(h.left + o.left, l.x), a.left + o.left) : e.right && (t.x = Math.max(Math.min(h.right + o.right, l.x), a.right + o.right))
}

function un(s, t) {
  for (const e of ["top", "left", "bottom", "right"]) e in s || (s[e] = t[e]);
  return s
}
const zh = {
    inner: null,
    outer: null,
    offset: null,
    endOnly: !1,
    enabled: !1
  },
  _e = {
    noInner: Ho,
    noOuter: Jo,
    start: Eh,
    set: Th,
    defaults: zh
  };
var Ph = At(_e, "restrictEdges");
const Ih = P({
    get elementRect() {
      return {
        top: 0,
        left: 0,
        bottom: 1,
        right: 1
      }
    },
    set elementRect(s) {}
  }, ai.defaults),
  $h = {
    start: ai.start,
    set: ai.set,
    defaults: Ih
  };
var Lh = At($h, "restrictRect");
const jh = {
    width: -1 / 0,
    height: -1 / 0
  },
  Rh = {
    width: 1 / 0,
    height: 1 / 0
  };

function Oh(s) {
  return _e.start(s)
}

function Ah(s) {
  const {
    interaction: t,
    state: e,
    rect: i,
    edges: n
  } = s, {
    options: o
  } = e;
  if (!n) return;
  const r = cs(Ht(o.min, t, s.coords)) || jh,
    l = cs(Ht(o.max, t, s.coords)) || Rh;
  e.options = {
    endOnly: o.endOnly,
    inner: P({}, _e.noInner),
    outer: P({}, _e.noOuter)
  }, n.top ? (e.options.inner.top = i.bottom - r.height, e.options.outer.top = i.bottom - l.height) : n.bottom && (e.options.inner.bottom = i.top + r.height, e.options.outer.bottom = i.top + l.height), n.left ? (e.options.inner.left = i.right - r.width, e.options.outer.left = i.right - l.width) : n.right && (e.options.inner.right = i.left + r.width, e.options.outer.right = i.left + l.width), _e.set(s), e.options = o
}
const Dh = {
    min: null,
    max: null,
    endOnly: !1,
    enabled: !1
  },
  Vh = {
    start: Oh,
    set: Ah,
    defaults: Dh
  };
var Wh = At(Vh, "restrictSize");

function Bh(s) {
  const {
    interaction: t,
    interactable: e,
    element: i,
    rect: n,
    state: o,
    startOffset: r
  } = s, {
    options: l
  } = o, a = l.offsetWithOrigin ? Fh(s) : {
    x: 0,
    y: 0
  };
  let h;
  if (l.offset === "startCoords") h = {
    x: t.coords.start.page.x,
    y: t.coords.start.page.y
  };
  else {
    const u = ze(l.offset, e, i, [t]);
    h = gi(u) || {
      x: 0,
      y: 0
    }, h.x += a.x, h.y += a.y
  }
  const {
    relativePoints: c
  } = l;
  o.offsets = n && c && c.length ? c.map((u, d) => ({
    index: d,
    relativePoint: u,
    x: r.left - n.width * u.x + h.x,
    y: r.top - n.height * u.y + h.y
  })) : [{
    index: 0,
    relativePoint: null,
    x: h.x,
    y: h.y
  }]
}

function Nh(s) {
  const {
    interaction: t,
    coords: e,
    state: i
  } = s, {
    options: n,
    offsets: o
  } = i, r = yi(t.interactable, t.element, t.prepared.name), l = P({}, e), a = [];
  n.offsetWithOrigin || (l.x -= r.x, l.y -= r.y);
  for (const c of o) {
    const u = l.x - c.x,
      d = l.y - c.y;
    for (let f = 0, p = n.targets.length; f < p; f++) {
      const m = n.targets[f];
      let b;
      _.func(m) ? b = m(u, d, t._proxy, c, f) : b = m, b && a.push({
        x: (_.number(b.x) ? b.x : u) + c.x,
        y: (_.number(b.y) ? b.y : d) + c.y,
        range: _.number(b.range) ? b.range : n.range,
        source: m,
        index: f,
        offset: c
      })
    }
  }
  const h = {
    target: null,
    inRange: !1,
    distance: 0,
    range: 0,
    delta: {
      x: 0,
      y: 0
    }
  };
  for (const c of a) {
    const u = c.range,
      d = c.x - l.x,
      f = c.y - l.y,
      p = Ae(d, f);
    let m = p <= u;
    u === 1 / 0 && h.inRange && h.range !== 1 / 0 && (m = !1), (!h.target || (m ? h.inRange && u !== 1 / 0 ? p / u < h.distance / h.range : u === 1 / 0 && h.range !== 1 / 0 || p < h.distance : !h.inRange && p < h.distance)) && (h.target = c, h.distance = p, h.range = u, h.inRange = m, h.delta.x = d, h.delta.y = f)
  }
  return h.inRange && (e.x = h.target.x, e.y = h.target.y), i.closest = h, h
}

function Fh(s) {
  const {
    element: t
  } = s.interaction;
  return gi(ze(s.state.options.origin, null, null, [t])) || yi(s.interactable, t, s.interaction.prepared.name)
}
const Uh = {
    range: 1 / 0,
    targets: null,
    offset: null,
    offsetWithOrigin: !0,
    origin: null,
    relativePoints: null,
    endOnly: !1,
    enabled: !1
  },
  Ls = {
    start: Bh,
    set: Nh,
    defaults: Uh
  };
var Kh = At(Ls, "snap");

function Hh(s) {
  const {
    state: t,
    edges: e
  } = s, {
    options: i
  } = t;
  if (!e) return null;
  s.state = {
    options: {
      targets: null,
      relativePoints: [{
        x: e.left ? 0 : 1,
        y: e.top ? 0 : 1
      }],
      offset: i.offset || "self",
      origin: {
        x: 0,
        y: 0
      },
      range: i.range
    }
  }, t.targetFields = t.targetFields || [
    ["width", "height"],
    ["x", "y"]
  ], Ls.start(s), t.offsets = s.state.offsets, s.state = t
}

function Jh(s) {
  const {
    interaction: t,
    state: e,
    coords: i
  } = s, {
    options: n,
    offsets: o
  } = e, r = {
    x: i.x - o[0].x,
    y: i.y - o[0].y
  };
  e.options = P({}, n), e.options.targets = [];
  for (const a of n.targets || []) {
    let h;
    if (_.func(a) ? h = a(r.x, r.y, t) : h = a, !!h) {
      for (const [c, u] of e.targetFields)
        if (c in h || u in h) {
          h.x = h[c], h.y = h[u];
          break
        } e.options.targets.push(h)
    }
  }
  const l = Ls.set(s);
  return e.options = n, l
}
const Xh = {
    range: 1 / 0,
    targets: null,
    offset: null,
    endOnly: !1,
    enabled: !1
  },
  hi = {
    start: Hh,
    set: Jh,
    defaults: Xh
  };
var Yh = At(hi, "snapSize");

function Gh(s) {
  const {
    edges: t
  } = s;
  return t ? (s.state.targetFields = s.state.targetFields || [
    [t.left ? "left" : "right", t.top ? "top" : "bottom"]
  ], hi.start(s)) : null
}
const Zh = {
  start: Gh,
  set: hi.set,
  defaults: P(ce(hi.defaults), {
    targets: void 0,
    range: void 0,
    offset: {
      x: 0,
      y: 0
    }
  })
};
var qh = At(Zh, "snapEdges");
const ve = () => {};
ve._defaults = {};
var $i = {
  aspectRatio: Sh,
  restrictEdges: Ph,
  restrict: Ch,
  restrictRect: Lh,
  restrictSize: Wh,
  snapEdges: qh,
  snap: Kh,
  snapSize: Yh,
  spring: ve,
  avoid: ve,
  transform: ve,
  rubberband: ve
};
const Qh = {
  id: "modifiers",
  install(s) {
    const {
      interactStatic: t
    } = s;
    s.usePlugin(Uo), s.usePlugin(bh), t.modifiers = $i;
    for (const e in $i) {
      const {
        _defaults: i,
        _methods: n
      } = $i[e];
      i._methods = n, s.defaults.perAction[e] = i
    }
  }
};
ft.use(Qh);
class Xo extends Ps {
  constructor(t, e, i, n, o, r) {
    if (super(o), oi(this, i), i !== e && oi(this, e), this.timeStamp = r, this.originalEvent = i, this.type = t, this.pointerId = Te(e), this.pointerType = Ao(e), this.target = n, this.currentTarget = null, t === "tap") {
      const l = o.getPointerIndex(e);
      this.dt = this.timeStamp - o.pointers[l].downTime;
      const a = this.timeStamp - o.tapTime;
      this.double = !!o.prevTap && o.prevTap.type !== "doubletap" && o.prevTap.target === this.target && a < 500
    } else t === "doubletap" && (this.dt = e.timeStamp - o.tapTime, this.double = !0)
  }
  _subtractOrigin(t) {
    let {
      x: e,
      y: i
    } = t;
    return this.pageX -= e, this.pageY -= i, this.clientX -= e, this.clientY -= i, this
  }
  _addOrigin(t) {
    let {
      x: e,
      y: i
    } = t;
    return this.pageX += e, this.pageY += i, this.clientX += e, this.clientY += i, this
  }
  preventDefault() {
    this.originalEvent.preventDefault()
  }
}
const tc = {
    holdDuration: 600,
    ignoreFrom: null,
    allowFrom: null,
    origin: {
      x: 0,
      y: 0
    }
  },
  we = {
    id: "pointer-events/base",
    before: ["inertia", "modifiers", "auto-start", "actions"],
    install: rc,
    listeners: {
      "interactions:new": ec,
      "interactions:update-pointer": ic,
      "interactions:move": sc,
      "interactions:down": (s, t) => {
        nc(s, t), Lt(s, t)
      },
      "interactions:up": (s, t) => {
        fs(s), Lt(s, t), oc(s, t)
      },
      "interactions:cancel": (s, t) => {
        fs(s), Lt(s, t)
      }
    },
    PointerEvent: Xo,
    fire: Lt,
    collectEventTargets: Yo,
    defaults: tc,
    types: {
      down: !0,
      move: !0,
      up: !0,
      cancel: !0,
      tap: !0,
      doubletap: !0,
      hold: !0
    }
  };

function Lt(s, t) {
  const {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o,
    type: r,
    targets: l = Yo(s, t)
  } = s, a = new Xo(r, i, n, o, e, t.now());
  t.fire("pointerEvents:new", {
    pointerEvent: a
  });
  const h = {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o,
    targets: l,
    type: r,
    pointerEvent: a
  };
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    for (const f in u.props || {}) a[f] = u.props[f];
    const d = yi(u.eventable, u.node);
    if (a._subtractOrigin(d), a.eventable = u.eventable, a.currentTarget = u.node, u.eventable.fire(a), a._addOrigin(d), a.immediatePropagationStopped || a.propagationStopped && c + 1 < l.length && l[c + 1].node !== a.currentTarget) break
  }
  if (t.fire("pointerEvents:fired", h), r === "tap") {
    const c = a.double ? Lt({
      interaction: e,
      pointer: i,
      event: n,
      eventTarget: o,
      type: "doubletap"
    }, t) : a;
    e.prevTap = c, e.tapTime = c.timeStamp
  }
  return a
}

function Yo(s, t) {
  let {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o,
    type: r
  } = s;
  const l = e.getPointerIndex(i),
    a = e.pointers[l];
  if (r === "tap" && (e.pointerWasMoved || !(a && a.downTarget === o))) return [];
  const h = ko(o),
    c = {
      interaction: e,
      pointer: i,
      event: n,
      eventTarget: o,
      type: r,
      path: h,
      targets: [],
      node: null
    };
  for (const u of h) c.node = u, t.fire("pointerEvents:collect-targets", c);
  return r === "hold" && (c.targets = c.targets.filter(u => {
    var d, f;
    return u.eventable.options.holdDuration === ((d = e.pointers[l]) == null || (f = d.hold) == null ? void 0 : f.duration)
  })), c.targets
}

function ec(s) {
  let {
    interaction: t
  } = s;
  t.prevTap = null, t.tapTime = 0
}

function ic(s) {
  let {
    down: t,
    pointerInfo: e
  } = s;
  !t && e.hold || (e.hold = {
    duration: 1 / 0,
    timeout: null
  })
}

function fs(s) {
  let {
    interaction: t,
    pointerIndex: e
  } = s;
  const i = t.pointers[e].hold;
  i && i.timeout && (clearTimeout(i.timeout), i.timeout = null)
}

function sc(s, t) {
  const {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o,
    duplicate: r
  } = s;
  !r && (!e.pointerIsDown || e.pointerWasMoved) && (e.pointerIsDown && fs(s), Lt({
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o,
    type: "move"
  }, t))
}

function nc(s, t) {
  let {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o,
    pointerIndex: r
  } = s;
  const l = e.pointers[r].hold,
    a = ko(o),
    h = {
      interaction: e,
      pointer: i,
      event: n,
      eventTarget: o,
      type: "hold",
      targets: [],
      path: a,
      node: null
    };
  for (const u of a) h.node = u, t.fire("pointerEvents:collect-targets", h);
  if (!h.targets.length) return;
  let c = 1 / 0;
  for (const u of h.targets) {
    const d = u.eventable.options.holdDuration;
    d < c && (c = d)
  }
  l.duration = c, l.timeout = setTimeout(() => {
    Lt({
      interaction: e,
      eventTarget: o,
      pointer: i,
      event: n,
      type: "hold"
    }, t)
  }, c)
}

function oc(s, t) {
  let {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o
  } = s;
  e.pointerWasMoved || Lt({
    interaction: e,
    eventTarget: o,
    pointer: i,
    event: n,
    type: "tap"
  }, t)
}

function rc(s) {
  s.pointerEvents = we, s.defaults.actions.pointerEvents = we.defaults, P(s.actions.phaselessTypes, we.types)
}
var lc = Object.freeze({
  __proto__: null,
  default: we
});

function ac(s) {
  s.usePlugin(we);
  const {
    pointerEvents: t
  } = s;
  t.defaults.holdRepeatInterval = 0, t.types.holdrepeat = s.actions.phaselessTypes.holdrepeat = !0
}

function hc(s) {
  let {
    pointerEvent: t
  } = s;
  t.type === "hold" && (t.count = (t.count || 0) + 1)
}

function cc(s, t) {
  let {
    interaction: e,
    pointerEvent: i,
    eventTarget: n,
    targets: o
  } = s;
  if (i.type !== "hold" || !o.length) return;
  const r = o[0].eventable.options.holdRepeatInterval;
  r <= 0 || (e.holdIntervalHandle = setTimeout(() => {
    t.pointerEvents.fire({
      interaction: e,
      eventTarget: n,
      type: "hold",
      pointer: i,
      event: i
    }, t)
  }, r))
}

function uc(s) {
  let {
    interaction: t
  } = s;
  t.holdIntervalHandle && (clearInterval(t.holdIntervalHandle), t.holdIntervalHandle = null)
}
const dc = {
  id: "pointer-events/holdRepeat",
  install: ac,
  listeners: ["move", "up", "cancel", "endall"].reduce((s, t) => (s[`pointerEvents:${t}`] = uc, s), {
    "pointerEvents:new": hc,
    "pointerEvents:fired": cc
  })
};

function fc(s) {
  const {
    Interactable: t
  } = s;
  t.prototype.pointerEvents = function(i) {
    return P(this.events.options, i), this
  };
  const e = t.prototype._backCompatOption;
  t.prototype._backCompatOption = function(i, n) {
    const o = e.call(this, i, n);
    return o === this && (this.events.options[i] = n), o
  }
}
const pc = {
    id: "pointer-events/interactableTargets",
    install: fc,
    listeners: {
      "pointerEvents:collect-targets": (s, t) => {
        let {
          targets: e,
          node: i,
          type: n,
          eventTarget: o
        } = s;
        t.interactables.forEachMatch(i, r => {
          const l = r.events,
            a = l.options;
          l.types[n] && l.types[n].length && r.testIgnoreAllow(a, i, o) && e.push({
            node: i,
            eventable: l,
            props: {
              interactable: r
            }
          })
        })
      },
      "interactable:new": s => {
        let {
          interactable: t
        } = s;
        t.events.getRect = function(e) {
          return t.getRect(e)
        }
      },
      "interactable:set": (s, t) => {
        let {
          interactable: e,
          options: i
        } = s;
        P(e.events.options, t.pointerEvents.defaults), P(e.events.options, i.pointerEvents || {})
      }
    }
  },
  mc = {
    id: "pointer-events",
    install(s) {
      s.usePlugin(lc), s.usePlugin(dc), s.usePlugin(pc)
    }
  };
ft.use(mc);

function vc(s) {
  const {
    Interactable: t
  } = s;
  s.actions.phases.reflow = !0, t.prototype.reflow = function(e) {
    return gc(this, e, s)
  }
}

function gc(s, t, e) {
  const i = s.getAllElements(),
    n = e.window.Promise,
    o = n ? [] : null;
  for (const r of i) {
    const l = s.getRect(r);
    if (!l) break;
    const a = be(e.interactions.list, c => c.interacting() && c.interactable === s && c.element === r && c.prepared.name === t.name);
    let h;
    if (a) a.move(), o && (h = a._reflowPromise || new n(c => {
      a._reflowResolve = c
    }));
    else {
      const c = cs(l),
        u = {
          page: {
            x: c.x,
            y: c.y
          },
          client: {
            x: c.x,
            y: c.y
          },
          timeStamp: e.now()
        },
        d = _a(u);
      h = bc(e, s, r, t, d)
    }
    o && o.push(h)
  }
  return o && n.all(o).then(() => s)
}

function bc(s, t, e, i, n) {
  const o = s.interactions.new({
      pointerType: "reflow"
    }),
    r = {
      interaction: o,
      event: n,
      pointer: n,
      eventTarget: e,
      phase: "reflow"
    };
  o.interactable = t, o.element = e, o.prevEvent = n, o.updatePointer(n, n, e, !0), jo(o.coords.delta), Es(o.prepared, i), o._doPhase(r);
  const {
    Promise: l
  } = s.window, a = l ? new l(h => {
    o._reflowResolve = h
  }) : void 0;
  return o._reflowPromise = a, o.start(i, t, e), o._interacting ? (o.move(r), o.end(n)) : (o.stop(), o._reflowResolve()), o.removePointer(n, n), a
}
const yc = {
  id: "reflow",
  install: vc,
  listeners: {
    "interactions:stop": (s, t) => {
      let {
        interaction: e
      } = s;
      e.pointerType === "reflow" && (e._reflowResolve && e._reflowResolve(), ha(t.interactions.list, e))
    }
  }
};
ft.use(yc);
const _c = () => ({
    createAspectRatioModifier: ({
      ratio: l,
      minHeight: a,
      minWidth: h
    }) => ft.modifiers.aspectRatio({
      ratio: l,
      modifiers: [ft.modifiers.restrictSize({
        min: {
          width: h,
          height: a
        }
      })]
    }),
    createInteractable: l => {
      if (l !== null) return ft(l)
    },
    createRestrictRectModifier: ({
      restriction: l
    }) => ft.modifiers.restrictRect({
      restriction: l
    }),
    interactStatic: ft,
    onInteractionEnd: l => {
      l.target.style.touchAction = "pinch-zoom", l.target.style.userSelect = "auto"
    },
    onInteractionStart: l => {
      l.target.style.touchAction = "none", l.target.style.userSelect = "none"
    },
    reflow: async l => {
      l !== void 0 && (await l.reflow({
        name: "resize",
        edges: {
          top: !0,
          left: !0,
          bottom: !0,
          right: !0
        }
      }), await l.reflow({
        name: "drag",
        axis: "xy"
      }))
    },
    destroyInteractable: l => {
      l !== void 0 && l.unset()
    }
  }),
  wc = (s, t) => {
    let n, o;
    const r = q(!1),
      {
        createAspectRatioModifier: l,
        createInteractable: a,
        createRestrictRectModifier: h,
        onInteractionEnd: c,
        onInteractionStart: u,
        reflow: d,
        destroyInteractable: f
      } = _c(),
      p = {
        position: {
          x: 0,
          y: 0
        },
        margins: {
          bottom: "",
          left: "",
          right: "",
          top: ""
        }
      },
      m = () => {
        s.value !== null && (s.value.style.position = "fixed", s.value.style.zIndex = "3")
      },
      b = () => {
        s.value !== null && (p.margins.bottom = getComputedStyle(s.value).marginBottom, p.margins.left = getComputedStyle(s.value).marginLeft, p.margins.right = getComputedStyle(s.value).marginRight, p.margins.top = getComputedStyle(s.value).marginTop, s.value.style.marginBottom = "unset", s.value.style.marginLeft = "unset", s.value.style.marginRight = "unset", s.value.style.marginTop = "unset")
      },
      y = () => {
        s.value !== null && (s.value.style.marginBottom = p.margins.bottom, s.value.style.marginLeft = p.margins.left, s.value.style.marginRight = p.margins.right, s.value.style.marginTop = p.margins.top, p.margins.bottom = "", p.margins.left = "", p.margins.right = "", p.margins.top = "")
      },
      g = () => {
        s.value !== null && (s.value.style.height = "auto", s.value.style.position = "relative", s.value.style.transform = "none", s.value.style.width = "auto", s.value.style.zIndex = "1")
      },
      M = () => 174 / 98,
      S = () => {
        var G;
        const E = D(),
          A = Math.ceil(((((G = window.visualViewport) == null ? void 0 : G.width) ?? window.innerWidth) - E) / 2);
        return {
          left: A,
          right: A
        }
      },
      z = () => {
        const E = document.querySelector(".tabs"),
          A = document.querySelector(".memepad-jetton-header"),
          G = (E == null ? void 0 : E.offsetHeight) ?? 0;
        return {
          top: A instanceof HTMLElement ? Math.ceil(A.offsetTop + parseInt(getComputedStyle(A).marginTop) + parseInt(getComputedStyle(A).borderTop) + parseInt(getComputedStyle(A).paddingTop)) : 0,
          bottom: G
        }
      },
      D = () => {
        const E = document.querySelector(".page");
        return Math.ceil((E == null ? void 0 : E.offsetWidth) ?? 0)
      },
      O = () => {
        var G;
        const {
          top: E,
          bottom: A
        } = z();
        return Math.ceil((((G = window.visualViewport) == null ? void 0 : G.height) ?? window.innerHeight) - E - A)
      },
      $ = () => {
        const E = D(),
          A = O();
        return E < A ? E : E > A ? Math.ceil(A * M()) : Math.ceil(E / 2)
      },
      T = () => {
        const E = D(),
          A = O();
        return E < A ? Math.ceil(E / M()) : E > A ? A : Math.ceil(A / 2)
      },
      x = () => {
        var E, A;
        return (((E = s.value) == null ? void 0 : E.offsetWidth) ?? 174) > 174 && (((A = s.value) == null ? void 0 : A.offsetHeight) ?? 98) > 98
      },
      L = () => {
        if (s.value === null) return;
        const E = D(),
          {
            offsetWidth: A
          } = s.value,
          G = E - A < 0 ? 0 : Math.ceil(E - A),
          Tt = 0;
        p.position.x = G, p.position.y = Tt, s.value.style.transform = `translate(${G}px, ${Tt}px)`
      },
      I = () => {
        s.value !== null && (s.value.style.height = "98px", s.value.style.width = "174px")
      },
      N = (E, A) => {
        s.value !== null && (E === void 0 && A === void 0 || (E !== void 0 && (s.value.style.width = E), A !== void 0 && (s.value.style.height = A)))
      },
      it = async () => {
        L(), await d(n)
      }, nt = () => {
        requestAnimationFrame(async () => {
          x() ? (bt(), await H(), N(`${$()}px`, `${T()}px`)) : I(), await d(n)
        })
      }, U = () => {
        window.addEventListener("resize", it), window.screen && "orientation" in window.screen ? window.screen.orientation.addEventListener("change", nt) : window.addEventListener("orientationchange", nt)
      }, X = () => {
        window.removeEventListener("resize", it), window.screen && "orientation" in window.screen ? window.screen.orientation.removeEventListener("change", nt) : window.removeEventListener("orientationchange", nt)
      }, J = l({
        ratio: M(),
        minHeight: 98,
        minWidth: 174
      }), ot = h({
        restriction() {
          const E = D(),
            A = O(),
            {
              left: G
            } = S(),
            {
              top: Tt
            } = z();
          return {
            top: Tt,
            left: G,
            bottom: Math.ceil(Tt + A),
            right: Math.ceil(G + E)
          }
        }
      }), rt = {
        inertia: {
          resistance: 5,
          minSpeed: 300
        },
        modifiers: [ot],
        onmove(E) {
          p.position.x += E.dx, p.position.y += E.dy, E.target.style.transform = `translate(${p.position.x}px, ${p.position.y}px)`
        },
        onstart: u,
        onend: c
      }, F = {
        edges: {
          top: !0,
          left: !0,
          bottom: !0,
          right: !0
        },
        inertia: {
          enabled: !0
        },
        modifiers: [J],
        onmove(E) {
          var A, G;
          p.position.x += ((A = E.deltaRect) == null ? void 0 : A.left) ?? 0, p.position.y += ((G = E.deltaRect) == null ? void 0 : G.top) ?? 0, E.target.style.height = `${E.rect.height}px`, E.target.style.transform = `translate(${p.position.x}px, ${p.position.y}px)`, E.target.style.width = `${E.rect.width}px`
        },
        onstart: u,
        onend(E) {
          const A = $(),
            G = T();
          E.rect.width > A || E.rect.height > G ? (E.target.style.height = `${G}px`, E.target.style.width = `${A}px`, d(n).then(() => c(E))) : c(E)
        }
      }, H = async () => {
        var E, A, G;
        b(), m(), I(), L(), n = (A = (E = a(s.value)) == null ? void 0 : E.draggable(rt)) == null ? void 0 : A.resizable(F), o = (G = a(t.value)) == null ? void 0 : G.on("doubletap", async Tt => {
          x() ? I() : N(`${$()}px`, `${T()}px`), await d(n), Tt.preventDefault()
        }), await d(n), U(), r.value = !0
      }, bt = () => {
        X(), f(n), f(o), g(), y(), r.value = !1
      };
    return zr(bt), {
      destroy: bt,
      init: H,
      isEnabled: r
    }
  },
  Sc = (...s) => {
    const t = q(ts(...s)),
      e = Pr(() => {
        t.value = ts(...s)
      }, 1e3);
    return Re(() => {
      clearInterval(e)
    }), t
  },
  xc = ["src"],
  Mc = {
    class: "stats"
  },
  kc = {
    class: "item"
  },
  Cc = {
    class: "label"
  },
  Ec = {
    class: "item"
  },
  Tc = {
    class: "label"
  },
  zc = {
    class: "controls"
  },
  Pc = lt({
    __name: "View",
    props: {
      stream: {}
    },
    emits: ["hide"],
    setup(s, {
      emit: t
    }) {
      const e = s,
        i = t,
        n = Ci("player"),
        o = Ci("wrapper"),
        r = Ci("bg"),
        l = wc(o, r),
        a = Sc(e.stream.startAt, "hms"),
        h = q(!0),
        c = j(() => ({
          "memepad-stream-view": !0,
          "memepad-stream-view--pip": l.isEnabled.value
        })),
        u = j(() => `https://stream.blum.codes/embed/${e.stream.id}?autoplay=1&loop=1&muted=1&controls=0&coverFitMode=1&ignoreSize=1`),
        d = j(() => h.value ? "media-volume-off" : "media-volume-min"),
        f = g => {
          var M, S;
          (S = (M = n.value) == null ? void 0 : M.contentWindow) == null || S.postMessage(g, "*")
        },
        p = () => {
          f({
            actionName: "mute"
          }), h.value = !0
        },
        m = () => {
          f({
            actionName: "unmute"
          }), h.value = !1
        },
        b = () => {
          h.value ? m() : p()
        },
        y = () => {
          l.destroy(), i("hide")
        };
      return (g, M) => {
        const S = Oe;
        return C(), B("div", {
          ref_key: "wrapper",
          ref: o,
          class: oe(v(c))
        }, [k("iframe", {
          ref_key: "player",
          ref: n,
          src: v(u),
          frameborder: "0",
          allow: "autoplay; encrypted-media",
          allowfullscreen: "",
          width: "100%",
          height: "100%",
          sandbox: "allow-scripts allow-same-origin allow-presentation",
          referrerpolicy: "no-referrer"
        }, null, 8, xc), k("div", {
          ref_key: "bg",
          ref: r,
          class: "bg"
        }, null, 512), k("div", Mc, [k("div", kc, [R(S, {
          name: "user-voice",
          class: "icon"
        }), k("span", Cc, K(e.stream.viewers), 1)]), k("div", Ec, [R(S, {
          name: "calendar-clock",
          class: "icon"
        }), k("span", Tc, K(v(a).label), 1)])]), Bt(k("div", zc, [k("button", {
          type: "button",
          class: "reset sound-control",
          onClick: b
        }, [R(S, {
          name: v(d),
          class: "icon"
        }, null, 8, ["name"])]), k("button", {
          type: "button",
          class: "reset visibility-control",
          onClick: y
        }, [R(S, {
          name: "edit-hide",
          class: "icon"
        })])], 512), [
          [Ei, !v(l).isEnabled.value]
        ]), Bt(k("button", {
          type: "button",
          class: "reset sound-control",
          onClick: b
        }, [R(S, {
          name: v(d),
          class: "icon"
        }, null, 8, ["name"])], 512), [
          [Ei, v(l).isEnabled.value]
        ]), Bt(k("button", {
          type: "button",
          class: "reset pip-disable-control",
          onClick: y
        }, [R(S, {
          name: "close",
          class: "icon"
        })], 512), [
          [Ei, v(l).isEnabled.value]
        ])], 2)
      }
    }
  }),
  Ic = ht(Pc, [
    ["__scopeId", "data-v-7617d535"]
  ]),
  $c = {
    class: "memepad-jetton-stream-start"
  },
  Lc = {
    class: "memepad-jetton-stream-start-key-sheet"
  },
  jc = {
    class: "title"
  },
  Rc = {
    class: "subtitle"
  },
  Oc = {
    class: "copy"
  },
  Ac = {
    class: "label"
  },
  Dc = lt({
    __name: "Start",
    props: {
      generateStreamKey: {
        type: Function
      }
    },
    emits: ["open-rules"],
    setup(s) {
      const t = s,
        e = q({
          status: "idle"
        }),
        i = async () => {
          if (e.value.status === "loading" || e.value.status === "loaded") return;
          e.value = {
            status: "loading"
          };
          const r = await t.generateStreamKey();
          if (!pt(r)) throw Ss("Failed to generate stream key");
          e.value = {
            status: "loaded",
            streamKey: r.data
          }
        }, n = j({
          get: () => e.value.status !== "idle",
          set: r => {
            r || (e.value = {
              status: "idle"
            })
          }
        }), o = () => Ce().$webApp.openLink("https://www.blum.io/post/videostream-quick-start-guide");
      return (r, l) => {
        const a = Oe,
          h = fi,
          c = ho("I18nT"),
          u = Zt,
          d = co;
        return C(), B("div", $c, [k("button", {
          type: "button",
          class: "reset button",
          onClick: i
        }, K(("t" in r ? r.t : v(V))("memepad.jetton.start_stream_button")), 1), R(d, {
          modelValue: v(n),
          "onUpdate:modelValue": l[2] || (l[2] = f => mt(n) ? n.value = f : null)
        }, {
          default: et(() => [k("div", Lc, [k("div", jc, K(("t" in r ? r.t : v(V))("memepad.jetton.steam.start_sheet.title")), 1), k("div", Rc, K(("t" in r ? r.t : v(V))("memepad.jetton.steam.start_sheet.subtitle")), 1), k("div", Oc, [v(e).status === "loaded" ? (C(), B("button", {
            key: 0,
            type: "button",
            class: "reset",
            onClick: l[0] || (l[0] = f => ("useCopy" in r ? r.useCopy : v(Ir))().copy(v(e).streamKey))
          }, [k("div", Ac, K(v(e).streamKey), 1), R(a, {
            name: "edit-copy",
            class: "icon"
          })])) : (C(), W(h, {
            key: 1,
            class: "skeleton",
            secondary: ""
          }))]), R(c, {
            keypath: "memepad.jetton.stream.rules_text",
            tag: "div",
            class: "rules"
          }, {
            link: et(() => [k("button", {
              type: "button",
              class: "reset",
              onClick: l[1] || (l[1] = f => r.$emit("open-rules"))
            }, K(("t" in r ? r.t : v(V))("memepad.jetton.stream.rules_link")), 1)]),
            _: 1
          }), R(u, {
            label: ("t" in r ? r.t : v(V))("memepad.jetton.stream.how.title"),
            fill: "",
            type: v(jt).SECONDARY,
            size: v(Ut).LARGE,
            onClick: o
          }, null, 8, ["label", "type", "size"])])]),
          _: 1
        }, 8, ["modelValue"])])
      }
    }
  }),
  Vc = ht(Dc, [
    ["__scopeId", "data-v-1f697dfe"]
  ]),
  Wc = lt({
    __name: "Stream",
    props: {
      jetton: {},
      jettonInformation: {}
    },
    setup(s) {
      const t = s,
        e = q(!1),
        i = async () => {
          if (t.jettonInformation.stream.key) return St(t.jettonInformation.stream.key);
          const o = await si.getMemepadStreamKey(t.jetton.shortname);
          if (!pt(o)) return o;
          const r = o.data.stream.key;
          if (!r) throw Ss("Failed to generate stream key");
          return St(r)
        }, n = () => Ce().$webApp.openLink("https://www.blum.io/post/videostream-quick-start-guide#:~:text=Blum%20Memepad%20Videostream%20Terms%20%26%C2%A0Conditions");
      return (o, r) => {
        const l = jl,
          a = Ic,
          h = Vc;
        return o.jettonInformation.stream.isBanned ? (C(), W(l, {
          key: 0,
          onOpenRules: n
        })) : o.jettonInformation.stream.online ? (C(), B(Rt, {
          key: 1
        }, [v(e) ? (C(), B("button", {
          key: 0,
          type: "button",
          class: "reset memepad-jetton-stream-show-button",
          onClick: r[0] || (r[0] = c => e.value = !1)
        }, K(("t" in o ? o.t : v(V))("memepad.jetton.show_stream_button")), 1)) : (C(), W(a, {
          key: 1,
          stream: o.jettonInformation.stream,
          onHide: r[1] || (r[1] = c => e.value = !0)
        }, null, 8, ["stream"]))], 64)) : o.jettonInformation.stream.creator ? (C(), W(h, {
          key: 2,
          "generate-stream-key": i,
          onOpenRules: n
        })) : Ct("", !0)
      }
    }
  }),
  Bc = ht(Wc, [
    ["__scopeId", "data-v-b01336ec"]
  ]);

function Y(s) {
  var t = s.width,
    e = s.height;
  if (t < 0) throw new Error("Negative width is not allowed for Size");
  if (e < 0) throw new Error("Negative height is not allowed for Size");
  return {
    width: t,
    height: e
  }
}

function Ft(s, t) {
  return s.width === t.width && s.height === t.height
}
var Nc = function() {
  function s(t) {
    var e = this;
    this._resolutionListener = function() {
      return e._onResolutionChanged()
    }, this._resolutionMediaQueryList = null, this._observers = [], this._window = t, this._installResolutionListener()
  }
  return s.prototype.dispose = function() {
    this._uninstallResolutionListener(), this._window = null
  }, Object.defineProperty(s.prototype, "value", {
    get: function() {
      return this._window.devicePixelRatio
    },
    enumerable: !1,
    configurable: !0
  }), s.prototype.subscribe = function(t) {
    var e = this,
      i = {
        next: t
      };
    return this._observers.push(i), {
      unsubscribe: function() {
        e._observers = e._observers.filter(function(n) {
          return n !== i
        })
      }
    }
  }, s.prototype._installResolutionListener = function() {
    if (this._resolutionMediaQueryList !== null) throw new Error("Resolution listener is already installed");
    var t = this._window.devicePixelRatio;
    this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(t, "dppx)")), this._resolutionMediaQueryList.addListener(this._resolutionListener)
  }, s.prototype._uninstallResolutionListener = function() {
    this._resolutionMediaQueryList !== null && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null)
  }, s.prototype._reinstallResolutionListener = function() {
    this._uninstallResolutionListener(), this._installResolutionListener()
  }, s.prototype._onResolutionChanged = function() {
    var t = this;
    this._observers.forEach(function(e) {
      return e.next(t._window.devicePixelRatio)
    }), this._reinstallResolutionListener()
  }, s
}();

function Fc(s) {
  return new Nc(s)
}
var Uc = function() {
  function s(t, e, i) {
    var n;
    this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = t, this._canvasElementClientSize = Y({
      width: this._canvasElement.clientWidth,
      height: this._canvasElement.clientHeight
    }), this._transformBitmapSize = e ?? function(o) {
      return o
    }, this._allowResizeObserver = (n = i == null ? void 0 : i.allowResizeObserver) !== null && n !== void 0 ? n : !0, this._chooseAndInitObserver()
  }
  return s.prototype.dispose = function() {
    var t, e;
    if (this._canvasElement === null) throw new Error("Object is disposed");
    (t = this._canvasElementResizeObserver) === null || t === void 0 || t.disconnect(), this._canvasElementResizeObserver = null, (e = this._devicePixelRatioObservable) === null || e === void 0 || e.dispose(), this._devicePixelRatioObservable = null, this._suggestedBitmapSizeChangedListeners.length = 0, this._bitmapSizeChangedListeners.length = 0, this._canvasElement = null
  }, Object.defineProperty(s.prototype, "canvasElement", {
    get: function() {
      if (this._canvasElement === null) throw new Error("Object is disposed");
      return this._canvasElement
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s.prototype, "canvasElementClientSize", {
    get: function() {
      return this._canvasElementClientSize
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s.prototype, "bitmapSize", {
    get: function() {
      return Y({
        width: this.canvasElement.width,
        height: this.canvasElement.height
      })
    },
    enumerable: !1,
    configurable: !0
  }), s.prototype.resizeCanvasElement = function(t) {
    this._canvasElementClientSize = Y(t), this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px"), this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px"), this._invalidateBitmapSize()
  }, s.prototype.subscribeBitmapSizeChanged = function(t) {
    this._bitmapSizeChangedListeners.push(t)
  }, s.prototype.unsubscribeBitmapSizeChanged = function(t) {
    this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(function(e) {
      return e !== t
    })
  }, Object.defineProperty(s.prototype, "suggestedBitmapSize", {
    get: function() {
      return this._suggestedBitmapSize
    },
    enumerable: !1,
    configurable: !0
  }), s.prototype.subscribeSuggestedBitmapSizeChanged = function(t) {
    this._suggestedBitmapSizeChangedListeners.push(t)
  }, s.prototype.unsubscribeSuggestedBitmapSizeChanged = function(t) {
    this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter(function(e) {
      return e !== t
    })
  }, s.prototype.applySuggestedBitmapSize = function() {
    if (this._suggestedBitmapSize !== null) {
      var t = this._suggestedBitmapSize;
      this._suggestedBitmapSize = null, this._resizeBitmap(t), this._emitSuggestedBitmapSizeChanged(t, this._suggestedBitmapSize)
    }
  }, s.prototype._resizeBitmap = function(t) {
    var e = this.bitmapSize;
    Ft(e, t) || (this.canvasElement.width = t.width, this.canvasElement.height = t.height, this._emitBitmapSizeChanged(e, t))
  }, s.prototype._emitBitmapSizeChanged = function(t, e) {
    var i = this;
    this._bitmapSizeChangedListeners.forEach(function(n) {
      return n.call(i, t, e)
    })
  }, s.prototype._suggestNewBitmapSize = function(t) {
    var e = this._suggestedBitmapSize,
      i = Y(this._transformBitmapSize(t, this._canvasElementClientSize)),
      n = Ft(this.bitmapSize, i) ? null : i;
    e === null && n === null || e !== null && n !== null && Ft(e, n) || (this._suggestedBitmapSize = n, this._emitSuggestedBitmapSizeChanged(e, n))
  }, s.prototype._emitSuggestedBitmapSizeChanged = function(t, e) {
    var i = this;
    this._suggestedBitmapSizeChangedListeners.forEach(function(n) {
      return n.call(i, t, e)
    })
  }, s.prototype._chooseAndInitObserver = function() {
    var t = this;
    if (!this._allowResizeObserver) {
      this._initDevicePixelRatioObservable();
      return
    }
    Hc().then(function(e) {
      return e ? t._initResizeObserver() : t._initDevicePixelRatioObservable()
    })
  }, s.prototype._initDevicePixelRatioObservable = function() {
    var t = this;
    if (this._canvasElement !== null) {
      var e = dn(this._canvasElement);
      if (e === null) throw new Error("No window is associated with the canvas");
      this._devicePixelRatioObservable = Fc(e), this._devicePixelRatioObservable.subscribe(function() {
        return t._invalidateBitmapSize()
      }), this._invalidateBitmapSize()
    }
  }, s.prototype._invalidateBitmapSize = function() {
    var t, e;
    if (this._canvasElement !== null) {
      var i = dn(this._canvasElement);
      if (i !== null) {
        var n = (e = (t = this._devicePixelRatioObservable) === null || t === void 0 ? void 0 : t.value) !== null && e !== void 0 ? e : i.devicePixelRatio,
          o = this._canvasElement.getClientRects(),
          r = o[0] !== void 0 ? Jc(o[0], n) : Y({
            width: this._canvasElementClientSize.width * n,
            height: this._canvasElementClientSize.height * n
          });
        this._suggestNewBitmapSize(r)
      }
    }
  }, s.prototype._initResizeObserver = function() {
    var t = this;
    this._canvasElement !== null && (this._canvasElementResizeObserver = new ResizeObserver(function(e) {
      var i = e.find(function(r) {
        return r.target === t._canvasElement
      });
      if (!(!i || !i.devicePixelContentBoxSize || !i.devicePixelContentBoxSize[0])) {
        var n = i.devicePixelContentBoxSize[0],
          o = Y({
            width: n.inlineSize,
            height: n.blockSize
          });
        t._suggestNewBitmapSize(o)
      }
    }), this._canvasElementResizeObserver.observe(this._canvasElement, {
      box: "device-pixel-content-box"
    }))
  }, s
}();

function Kc(s, t) {
  if (t.type === "device-pixel-content-box") return new Uc(s, t.transform, t.options);
  throw new Error("Unsupported binding target")
}

function dn(s) {
  return s.ownerDocument.defaultView
}

function Hc() {
  return new Promise(function(s) {
    var t = new ResizeObserver(function(e) {
      s(e.every(function(i) {
        return "devicePixelContentBoxSize" in i
      })), t.disconnect()
    });
    t.observe(document.body, {
      box: "device-pixel-content-box"
    })
  }).catch(function() {
    return !1
  })
}

function Jc(s, t) {
  return Y({
    width: Math.round(s.left * t + s.width * t) - Math.round(s.left * t),
    height: Math.round(s.top * t + s.height * t) - Math.round(s.top * t)
  })
}
var Xc = function() {
  function s(t, e, i) {
    if (e.width === 0 || e.height === 0) throw new TypeError("Rendering target could only be created on a media with positive width and height");
    if (this._mediaSize = e, i.width === 0 || i.height === 0) throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
    this._bitmapSize = i, this._context = t
  }
  return s.prototype.useMediaCoordinateSpace = function(t) {
    try {
      return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio), t({
        context: this._context,
        mediaSize: this._mediaSize
      })
    } finally {
      this._context.restore()
    }
  }, s.prototype.useBitmapCoordinateSpace = function(t) {
    try {
      return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), t({
        context: this._context,
        mediaSize: this._mediaSize,
        bitmapSize: this._bitmapSize,
        horizontalPixelRatio: this._horizontalPixelRatio,
        verticalPixelRatio: this._verticalPixelRatio
      })
    } finally {
      this._context.restore()
    }
  }, Object.defineProperty(s.prototype, "_horizontalPixelRatio", {
    get: function() {
      return this._bitmapSize.width / this._mediaSize.width
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s.prototype, "_verticalPixelRatio", {
    get: function() {
      return this._bitmapSize.height / this._mediaSize.height
    },
    enumerable: !1,
    configurable: !0
  }), s
}();

function Jt(s, t) {
  var e = s.canvasElementClientSize;
  if (e.width === 0 || e.height === 0) return null;
  var i = s.bitmapSize;
  if (i.width === 0 || i.height === 0) return null;
  var n = s.canvasElement.getContext("2d", t);
  return n === null ? null : new Xc(n, e, i)
}
/*!
 * @license
 * TradingView Lightweight Charts™ v4.2.1
 * Copyright (c) 2024 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
const Yc = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    wickVisible: !0,
    borderVisible: !0,
    borderColor: "#378658",
    borderUpColor: "#26a69a",
    borderDownColor: "#ef5350",
    wickColor: "#737375",
    wickUpColor: "#26a69a",
    wickDownColor: "#ef5350"
  },
  Gc = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    openVisible: !0,
    thinBars: !0
  },
  Zc = {
    color: "#2196f3",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    lineVisible: !0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
    pointMarkersVisible: !1
  },
  qc = {
    topColor: "rgba( 46, 220, 135, 0.4)",
    bottomColor: "rgba( 40, 221, 100, 0)",
    invertFilledArea: !1,
    lineColor: "#33D778",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    lineVisible: !0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
    pointMarkersVisible: !1
  },
  Qc = {
    baseValue: {
      type: "price",
      price: 0
    },
    topFillColor1: "rgba(38, 166, 154, 0.28)",
    topFillColor2: "rgba(38, 166, 154, 0.05)",
    topLineColor: "rgba(38, 166, 154, 1)",
    bottomFillColor1: "rgba(239, 83, 80, 0.05)",
    bottomFillColor2: "rgba(239, 83, 80, 0.28)",
    bottomLineColor: "rgba(239, 83, 80, 1)",
    lineWidth: 3,
    lineStyle: 0,
    lineType: 0,
    lineVisible: !0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
    pointMarkersVisible: !1
  },
  tu = {
    color: "#26a69a",
    base: 0
  },
  Go = {
    color: "#2196f3"
  },
  Zo = {
    title: "",
    visible: !0,
    lastValueVisible: !0,
    priceLineVisible: !0,
    priceLineSource: 0,
    priceLineWidth: 1,
    priceLineColor: "",
    priceLineStyle: 2,
    baseLineVisible: !0,
    baseLineWidth: 1,
    baseLineColor: "#B2B5BE",
    baseLineStyle: 0,
    priceFormat: {
      type: "price",
      precision: 2,
      minMove: .01
    }
  };
var fn, ci;

function Xt(s, t) {
  const e = {
    0: [],
    1: [s.lineWidth, s.lineWidth],
    2: [2 * s.lineWidth, 2 * s.lineWidth],
    3: [6 * s.lineWidth, 6 * s.lineWidth],
    4: [s.lineWidth, 4 * s.lineWidth]
  } [t];
  s.setLineDash(e)
}

function qo(s, t, e, i) {
  s.beginPath();
  const n = s.lineWidth % 2 ? .5 : 0;
  s.moveTo(e, t + n), s.lineTo(i, t + n), s.stroke()
}

function Ot(s, t) {
  if (!s) throw new Error("Assertion failed" + (t ? ": " + t : ""))
}

function ct(s) {
  if (s === void 0) throw new Error("Value is undefined");
  return s
}

function w(s) {
  if (s === null) throw new Error("Value is null");
  return s
}

function se(s) {
  return w(ct(s))
}(function(s) {
  s[s.Simple = 0] = "Simple", s[s.WithSteps = 1] = "WithSteps", s[s.Curved = 2] = "Curved"
})(fn || (fn = {})),
function(s) {
  s[s.Solid = 0] = "Solid", s[s.Dotted = 1] = "Dotted", s[s.Dashed = 2] = "Dashed", s[s.LargeDashed = 3] = "LargeDashed", s[s.SparseDotted = 4] = "SparseDotted"
}(ci || (ci = {}));
const pn = {
  khaki: "#f0e68c",
  azure: "#f0ffff",
  aliceblue: "#f0f8ff",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gainsboro: "#dcdcdc",
  gray: "#808080",
  green: "#008000",
  honeydew: "#f0fff0",
  floralwhite: "#fffaf0",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lemonchiffon: "#fffacd",
  hotpink: "#ff69b4",
  lightyellow: "#ffffe0",
  greenyellow: "#adff2f",
  lightgoldenrodyellow: "#fafad2",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  lightcyan: "#e0ffff",
  magenta: "#f0f",
  maroon: "#800000",
  olive: "#808000",
  orange: "#ffa500",
  oldlace: "#fdf5e6",
  mediumblue: "#0000cd",
  transparent: "#0000",
  lime: "#0f0",
  lightpink: "#ffb6c1",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  midnightblue: "#191970",
  orchid: "#da70d6",
  mediumorchid: "#ba55d3",
  mediumturquoise: "#48d1cc",
  orangered: "#ff4500",
  royalblue: "#4169e1",
  powderblue: "#b0e0e6",
  red: "#f00",
  coral: "#ff7f50",
  turquoise: "#40e0d0",
  white: "#fff",
  whitesmoke: "#f5f5f5",
  wheat: "#f5deb3",
  teal: "#008080",
  steelblue: "#4682b4",
  bisque: "#ffe4c4",
  aquamarine: "#7fffd4",
  aqua: "#0ff",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  springgreen: "#00ff7f",
  antiquewhite: "#faebd7",
  burlywood: "#deb887",
  brown: "#a52a2a",
  beige: "#f5f5dc",
  chocolate: "#d2691e",
  chartreuse: "#7fff00",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cadetblue: "#5f9ea0",
  tomato: "#ff6347",
  fuchsia: "#f0f",
  blue: "#00f",
  salmon: "#fa8072",
  blanchedalmond: "#ffebcd",
  slateblue: "#6a5acd",
  slategray: "#708090",
  thistle: "#d8bfd8",
  tan: "#d2b48c",
  cyan: "#0ff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  blueviolet: "#8a2be2",
  black: "#000",
  darkmagenta: "#8b008b",
  darkslateblue: "#483d8b",
  darkkhaki: "#bdb76b",
  darkorchid: "#9932cc",
  darkorange: "#ff8c00",
  darkgreen: "#006400",
  darkred: "#8b0000",
  dodgerblue: "#1e90ff",
  darkslategray: "#2f4f4f",
  dimgray: "#696969",
  deepskyblue: "#00bfff",
  firebrick: "#b22222",
  forestgreen: "#228b22",
  indigo: "#4b0082",
  ivory: "#fffff0",
  lavenderblush: "#fff0f5",
  feldspar: "#d19275",
  indianred: "#cd5c5c",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightskyblue: "#87cefa",
  lightslategray: "#789",
  lightslateblue: "#8470ff",
  snow: "#fffafa",
  lightseagreen: "#20b2aa",
  lightsalmon: "#ffa07a",
  darksalmon: "#e9967a",
  darkviolet: "#9400d3",
  mediumpurple: "#9370d8",
  mediumaquamarine: "#66cdaa",
  skyblue: "#87ceeb",
  lavender: "#e6e6fa",
  lightsteelblue: "#b0c4de",
  mediumvioletred: "#c71585",
  mintcream: "#f5fffa",
  navajowhite: "#ffdead",
  navy: "#000080",
  olivedrab: "#6b8e23",
  palevioletred: "#d87093",
  violetred: "#d02090",
  yellow: "#ff0",
  yellowgreen: "#9acd32",
  lawngreen: "#7cfc00",
  pink: "#ffc0cb",
  paleturquoise: "#afeeee",
  palegoldenrod: "#eee8aa",
  darkolivegreen: "#556b2f",
  darkseagreen: "#8fbc8f",
  darkturquoise: "#00ced1",
  peachpuff: "#ffdab9",
  deeppink: "#ff1493",
  violet: "#ee82ee",
  palegreen: "#98fb98",
  mediumseagreen: "#3cb371",
  peru: "#cd853f",
  saddlebrown: "#8b4513",
  sandybrown: "#f4a460",
  rosybrown: "#bc8f8f",
  purple: "#800080",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  papayawhip: "#ffefd5",
  mediumslateblue: "#7b68ee",
  plum: "#dda0dd",
  mediumspringgreen: "#00fa9a"
};

function dt(s) {
  return s < 0 ? 0 : s > 255 ? 255 : Math.round(s) || 0
}

function Qo(s) {
  return s <= 0 || s > 1 ? Math.min(Math.max(s, 0), 1) : Math.round(1e4 * s) / 1e4
}
const eu = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
  iu = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
  su = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
  nu = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;

function Pe(s) {
  (s = s.toLowerCase()) in pn && (s = pn[s]);
  {
    const t = nu.exec(s) || su.exec(s);
    if (t) return [dt(parseInt(t[1], 10)), dt(parseInt(t[2], 10)), dt(parseInt(t[3], 10)), Qo(t.length < 5 ? 1 : parseFloat(t[4]))]
  } {
    const t = iu.exec(s);
    if (t) return [dt(parseInt(t[1], 16)), dt(parseInt(t[2], 16)), dt(parseInt(t[3], 16)), 1]
  } {
    const t = eu.exec(s);
    if (t) return [dt(17 * parseInt(t[1], 16)), dt(17 * parseInt(t[2], 16)), dt(17 * parseInt(t[3], 16)), 1]
  }
  throw new Error(`Cannot parse color: ${s}`)
}

function tr(s) {
  return .199 * s[0] + .687 * s[1] + .114 * s[2]
}

function _i(s) {
  const t = Pe(s);
  return {
    t: `rgb(${t[0]}, ${t[1]}, ${t[2]})`,
    i: tr(t) > 160 ? "black" : "white"
  }
}
class st {
  constructor() {
    this.h = []
  }
  l(t, e, i) {
    const n = {
      o: t,
      _: e,
      u: i === !0
    };
    this.h.push(n)
  }
  v(t) {
    const e = this.h.findIndex(i => t === i.o);
    e > -1 && this.h.splice(e, 1)
  }
  p(t) {
    this.h = this.h.filter(e => e._ !== t)
  }
  m(t, e, i) {
    const n = [...this.h];
    this.h = this.h.filter(o => !o.u), n.forEach(o => o.o(t, e, i))
  }
  M() {
    return this.h.length > 0
  }
  S() {
    this.h = []
  }
}

function vt(s, ...t) {
  for (const e of t)
    for (const i in e) e[i] !== void 0 && (typeof e[i] != "object" || s[i] === void 0 || Array.isArray(e[i]) ? s[i] = e[i] : vt(s[i], e[i]));
  return s
}

function _t(s) {
  return typeof s == "number" && isFinite(s)
}

function Ie(s) {
  return typeof s == "number" && s % 1 == 0
}

function De(s) {
  return typeof s == "string"
}

function Fe(s) {
  return typeof s == "boolean"
}

function Mt(s) {
  const t = s;
  if (!t || typeof t != "object") return t;
  let e, i, n;
  for (i in e = Array.isArray(t) ? [] : {}, t) t.hasOwnProperty(i) && (n = t[i], e[i] = n && typeof n == "object" ? Mt(n) : n);
  return e
}

function ou(s) {
  return s !== null
}

function $e(s) {
  return s === null ? void 0 : s
}
const js = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";

function ue(s, t, e) {
  return t === void 0 && (t = js), `${e=e!==void 0?`${e} `:""}${s}px ${t}`
}
class ru {
  constructor(t) {
    this.k = {
      C: 1,
      T: 5,
      P: NaN,
      R: "",
      D: "",
      V: "",
      O: "",
      B: 0,
      A: 0,
      I: 0,
      L: 0,
      N: 0
    }, this.F = t
  }
  W() {
    const t = this.k,
      e = this.j(),
      i = this.H();
    return t.P === e && t.D === i || (t.P = e, t.D = i, t.R = ue(e, i), t.L = 2.5 / 12 * e, t.B = t.L, t.A = e / 12 * t.T, t.I = e / 12 * t.T, t.N = 0), t.V = this.$(), t.O = this.U(), this.k
  }
  $() {
    return this.F.W().layout.textColor
  }
  U() {
    return this.F.q()
  }
  j() {
    return this.F.W().layout.fontSize
  }
  H() {
    return this.F.W().layout.fontFamily
  }
}
class Rs {
  constructor() {
    this.Y = []
  }
  Z(t) {
    this.Y = t
  }
  X(t, e, i) {
    this.Y.forEach(n => {
      n.X(t, e, i)
    })
  }
}
class gt {
  X(t, e, i) {
    t.useBitmapCoordinateSpace(n => this.K(n, e, i))
  }
}
class lu extends gt {
  constructor() {
    super(...arguments), this.G = null
  }
  J(t) {
    this.G = t
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: i
  }) {
    if (this.G === null || this.G.tt === null) return;
    const n = this.G.tt,
      o = this.G,
      r = Math.max(1, Math.floor(e)) % 2 / 2,
      l = a => {
        t.beginPath();
        for (let h = n.to - 1; h >= n.from; --h) {
          const c = o.it[h],
            u = Math.round(c.nt * e) + r,
            d = c.st * i,
            f = a * i + r;
          t.moveTo(u, d), t.arc(u, d, f, 0, 2 * Math.PI)
        }
        t.fill()
      };
    o.et > 0 && (t.fillStyle = o.rt, l(o.ht + o.et)), t.fillStyle = o.lt, l(o.ht)
  }
}

function au() {
  return {
    it: [{
      nt: 0,
      st: 0,
      ot: 0,
      _t: 0
    }],
    lt: "",
    rt: "",
    ht: 0,
    et: 0,
    tt: null
  }
}
const hu = {
  from: 0,
  to: 1
};
class cu {
  constructor(t, e) {
    this.ut = new Rs, this.ct = [], this.dt = [], this.ft = !0, this.F = t, this.vt = e, this.ut.Z(this.ct)
  }
  bt(t) {
    const e = this.F.wt();
    e.length !== this.ct.length && (this.dt = e.map(au), this.ct = this.dt.map(i => {
      const n = new lu;
      return n.J(i), n
    }), this.ut.Z(this.ct)), this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.ut
  }
  Mt() {
    const t = this.vt.W().mode === 2,
      e = this.F.wt(),
      i = this.vt.xt(),
      n = this.F.St();
    e.forEach((o, r) => {
      var l;
      const a = this.dt[r],
        h = o.kt(i);
      if (t || h === null || !o.yt()) return void(a.tt = null);
      const c = w(o.Ct());
      a.lt = h.Tt, a.ht = h.ht, a.et = h.Pt, a.it[0]._t = h._t, a.it[0].st = o.Dt().Rt(h._t, c.Vt), a.rt = (l = h.Ot) !== null && l !== void 0 ? l : this.F.Bt(a.it[0].st / o.Dt().At()), a.it[0].ot = i, a.it[0].nt = n.It(i), a.tt = hu
    })
  }
}
class uu extends gt {
  constructor(t) {
    super(), this.zt = t
  }
  K({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i,
    verticalPixelRatio: n
  }) {
    if (this.zt === null) return;
    const o = this.zt.Lt.yt,
      r = this.zt.Et.yt;
    if (!o && !r) return;
    const l = Math.round(this.zt.nt * i),
      a = Math.round(this.zt.st * n);
    t.lineCap = "butt", o && l >= 0 && (t.lineWidth = Math.floor(this.zt.Lt.et * i), t.strokeStyle = this.zt.Lt.V, t.fillStyle = this.zt.Lt.V, Xt(t, this.zt.Lt.Nt), function(h, c, u, d) {
      h.beginPath();
      const f = h.lineWidth % 2 ? .5 : 0;
      h.moveTo(c + f, u), h.lineTo(c + f, d), h.stroke()
    }(t, l, 0, e.height)), r && a >= 0 && (t.lineWidth = Math.floor(this.zt.Et.et * n), t.strokeStyle = this.zt.Et.V, t.fillStyle = this.zt.Et.V, Xt(t, this.zt.Et.Nt), qo(t, a, 0, e.width))
  }
}
class du {
  constructor(t) {
    this.ft = !0, this.Ft = {
      Lt: {
        et: 1,
        Nt: 0,
        V: "",
        yt: !1
      },
      Et: {
        et: 1,
        Nt: 0,
        V: "",
        yt: !1
      },
      nt: 0,
      st: 0
    }, this.Wt = new uu(this.Ft), this.jt = t
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.Wt
  }
  Mt() {
    const t = this.jt.yt(),
      e = w(this.jt.Ht()),
      i = e.$t().W().crosshair,
      n = this.Ft;
    if (i.mode === 2) return n.Et.yt = !1, void(n.Lt.yt = !1);
    n.Et.yt = t && this.jt.Ut(e), n.Lt.yt = t && this.jt.qt(), n.Et.et = i.horzLine.width, n.Et.Nt = i.horzLine.style, n.Et.V = i.horzLine.color, n.Lt.et = i.vertLine.width, n.Lt.Nt = i.vertLine.style, n.Lt.V = i.vertLine.color, n.nt = this.jt.Yt(), n.st = this.jt.Zt()
  }
}

function fu(s, t, e, i, n, o) {
  s.fillRect(t + o, e, i - 2 * o, o), s.fillRect(t + o, e + n - o, i - 2 * o, o), s.fillRect(t, e, o, n), s.fillRect(t + i - o, e, o, n)
}

function wi(s, t, e, i, n, o) {
  s.save(), s.globalCompositeOperation = "copy", s.fillStyle = o, s.fillRect(t, e, i, n), s.restore()
}

function mn(s, t, e, i, n, o) {
  s.beginPath(), s.roundRect ? s.roundRect(t, e, i, n, o) : (s.lineTo(t + i - o[1], e), o[1] !== 0 && s.arcTo(t + i, e, t + i, e + o[1], o[1]), s.lineTo(t + i, e + n - o[2]), o[2] !== 0 && s.arcTo(t + i, e + n, t + i - o[2], e + n, o[2]), s.lineTo(t + o[3], e + n), o[3] !== 0 && s.arcTo(t, e + n, t, e + n - o[3], o[3]), s.lineTo(t, e + o[0]), o[0] !== 0 && s.arcTo(t, e, t + o[0], e, o[0]))
}

function vn(s, t, e, i, n, o, r = 0, l = [0, 0, 0, 0], a = "") {
  if (s.save(), !r || !a || a === o) return mn(s, t, e, i, n, l), s.fillStyle = o, s.fill(), void s.restore();
  const h = r / 2;
  var c;
  mn(s, t + h, e + h, i - r, n - r, (c = -h, l.map(u => u === 0 ? u : u + c))), o !== "transparent" && (s.fillStyle = o, s.fill()), a !== "transparent" && (s.lineWidth = r, s.strokeStyle = a, s.closePath(), s.stroke()), s.restore()
}

function er(s, t, e, i, n, o, r) {
  s.save(), s.globalCompositeOperation = "copy";
  const l = s.createLinearGradient(0, 0, 0, n);
  l.addColorStop(0, o), l.addColorStop(1, r), s.fillStyle = l, s.fillRect(t, e, i, n), s.restore()
}
class gn {
  constructor(t, e) {
    this.J(t, e)
  }
  J(t, e) {
    this.zt = t, this.Xt = e
  }
  At(t, e) {
    return this.zt.yt ? t.P + t.L + t.B : 0
  }
  X(t, e, i, n) {
    if (!this.zt.yt || this.zt.Kt.length === 0) return;
    const o = this.zt.V,
      r = this.Xt.t,
      l = t.useBitmapCoordinateSpace(a => {
        const h = a.context;
        h.font = e.R;
        const c = this.Gt(a, e, i, n),
          u = c.Jt;
        return c.Qt ? vn(h, u.ti, u.ii, u.ni, u.si, r, u.ei, [u.ht, 0, 0, u.ht], r) : vn(h, u.ri, u.ii, u.ni, u.si, r, u.ei, [0, u.ht, u.ht, 0], r), this.zt.hi && (h.fillStyle = o, h.fillRect(u.ri, u.li, u.ai - u.ri, u.oi)), this.zt._i && (h.fillStyle = e.O, h.fillRect(c.Qt ? u.ui - u.ei : 0, u.ii, u.ei, u.ci - u.ii)), c
      });
    t.useMediaCoordinateSpace(({
      context: a
    }) => {
      const h = l.di;
      a.font = e.R, a.textAlign = l.Qt ? "right" : "left", a.textBaseline = "middle", a.fillStyle = o, a.fillText(this.zt.Kt, h.fi, (h.ii + h.ci) / 2 + h.pi)
    })
  }
  Gt(t, e, i, n) {
    var o;
    const {
      context: r,
      bitmapSize: l,
      mediaSize: a,
      horizontalPixelRatio: h,
      verticalPixelRatio: c
    } = t, u = this.zt.hi || !this.zt.mi ? e.T : 0, d = this.zt.bi ? e.C : 0, f = e.L + this.Xt.wi, p = e.B + this.Xt.gi, m = e.A, b = e.I, y = this.zt.Kt, g = e.P, M = i.Mi(r, y), S = Math.ceil(i.xi(r, y)), z = g + f + p, D = e.C + m + b + S + u, O = Math.max(1, Math.floor(c));
    let $ = Math.round(z * c);
    $ % 2 != O % 2 && ($ += 1);
    const T = d > 0 ? Math.max(1, Math.floor(d * h)) : 0,
      x = Math.round(D * h),
      L = Math.round(u * h),
      I = (o = this.Xt.Si) !== null && o !== void 0 ? o : this.Xt.ki,
      N = Math.round(I * c) - Math.floor(.5 * c),
      it = Math.floor(N + O / 2 - $ / 2),
      nt = it + $,
      U = n === "right",
      X = U ? a.width - d : d,
      J = U ? l.width - T : T;
    let ot, rt, F;
    return U ? (ot = J - x, rt = J - L, F = X - u - m - d) : (ot = J + x, rt = J + L, F = X + u + m), {
      Qt: U,
      Jt: {
        ii: it,
        li: N,
        ci: nt,
        ni: x,
        si: $,
        ht: 2 * h,
        ei: T,
        ti: ot,
        ri: J,
        ai: rt,
        oi: O,
        ui: l.width
      },
      di: {
        ii: it / c,
        ci: nt / c,
        fi: F,
        pi: M
      }
    }
  }
}
class Si {
  constructor(t) {
    this.yi = {
      ki: 0,
      t: "#000",
      gi: 0,
      wi: 0
    }, this.Ci = {
      Kt: "",
      yt: !1,
      hi: !0,
      mi: !1,
      Ot: "",
      V: "#FFF",
      _i: !1,
      bi: !1
    }, this.Ti = {
      Kt: "",
      yt: !1,
      hi: !1,
      mi: !0,
      Ot: "",
      V: "#FFF",
      _i: !0,
      bi: !0
    }, this.ft = !0, this.Pi = new(t || gn)(this.Ci, this.yi), this.Ri = new(t || gn)(this.Ti, this.yi)
  }
  Kt() {
    return this.Di(), this.Ci.Kt
  }
  ki() {
    return this.Di(), this.yi.ki
  }
  bt() {
    this.ft = !0
  }
  At(t, e = !1) {
    return Math.max(this.Pi.At(t, e), this.Ri.At(t, e))
  }
  Vi() {
    return this.yi.Si || 0
  }
  Oi(t) {
    this.yi.Si = t
  }
  Bi() {
    return this.Di(), this.Ci.yt || this.Ti.yt
  }
  Ai() {
    return this.Di(), this.Ci.yt
  }
  gt(t) {
    return this.Di(), this.Ci.hi = this.Ci.hi && t.W().ticksVisible, this.Ti.hi = this.Ti.hi && t.W().ticksVisible, this.Pi.J(this.Ci, this.yi), this.Ri.J(this.Ti, this.yi), this.Pi
  }
  Ii() {
    return this.Di(), this.Pi.J(this.Ci, this.yi), this.Ri.J(this.Ti, this.yi), this.Ri
  }
  Di() {
    this.ft && (this.Ci.hi = !0, this.Ti.hi = !1, this.zi(this.Ci, this.Ti, this.yi))
  }
}
class pu extends Si {
  constructor(t, e, i) {
    super(), this.jt = t, this.Li = e, this.Ei = i
  }
  zi(t, e, i) {
    if (t.yt = !1, this.jt.W().mode === 2) return;
    const n = this.jt.W().horzLine;
    if (!n.labelVisible) return;
    const o = this.Li.Ct();
    if (!this.jt.yt() || this.Li.Ni() || o === null) return;
    const r = _i(n.labelBackgroundColor);
    i.t = r.t, t.V = r.i;
    const l = 2 / 12 * this.Li.P();
    i.wi = l, i.gi = l;
    const a = this.Ei(this.Li);
    i.ki = a.ki, t.Kt = this.Li.Fi(a._t, o), t.yt = !0
  }
}
const mu = /[1-9]/g;
class ir {
  constructor() {
    this.zt = null
  }
  J(t) {
    this.zt = t
  }
  X(t, e) {
    if (this.zt === null || this.zt.yt === !1 || this.zt.Kt.length === 0) return;
    const i = t.useMediaCoordinateSpace(({
      context: d
    }) => (d.font = e.R, Math.round(e.Wi.xi(d, w(this.zt).Kt, mu))));
    if (i <= 0) return;
    const n = e.ji,
      o = i + 2 * n,
      r = o / 2,
      l = this.zt.Hi;
    let a = this.zt.ki,
      h = Math.floor(a - r) + .5;
    h < 0 ? (a += Math.abs(0 - h), h = Math.floor(a - r) + .5) : h + o > l && (a -= Math.abs(l - (h + o)), h = Math.floor(a - r) + .5);
    const c = h + o,
      u = Math.ceil(0 + e.C + e.T + e.L + e.P + e.B);
    t.useBitmapCoordinateSpace(({
      context: d,
      horizontalPixelRatio: f,
      verticalPixelRatio: p
    }) => {
      const m = w(this.zt);
      d.fillStyle = m.t;
      const b = Math.round(h * f),
        y = Math.round(0 * p),
        g = Math.round(c * f),
        M = Math.round(u * p),
        S = Math.round(2 * f);
      if (d.beginPath(), d.moveTo(b, y), d.lineTo(b, M - S), d.arcTo(b, M, b + S, M, S), d.lineTo(g - S, M), d.arcTo(g, M, g, M - S, S), d.lineTo(g, y), d.fill(), m.hi) {
        const z = Math.round(m.ki * f),
          D = y,
          O = Math.round((D + e.T) * p);
        d.fillStyle = m.V;
        const $ = Math.max(1, Math.floor(f)),
          T = Math.floor(.5 * f);
        d.fillRect(z - T, D, $, O - D)
      }
    }), t.useMediaCoordinateSpace(({
      context: d
    }) => {
      const f = w(this.zt),
        p = 0 + e.C + e.T + e.L + e.P / 2;
      d.font = e.R, d.textAlign = "left", d.textBaseline = "middle", d.fillStyle = f.V;
      const m = e.Wi.Mi(d, "Apr0");
      d.translate(h + n, p + m), d.fillText(f.Kt, 0, 0)
    })
  }
}
class vu {
  constructor(t, e, i) {
    this.ft = !0, this.Wt = new ir, this.Ft = {
      yt: !1,
      t: "#4c525e",
      V: "white",
      Kt: "",
      Hi: 0,
      ki: NaN,
      hi: !0
    }, this.vt = t, this.$i = e, this.Ei = i
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.Wt.J(this.Ft), this.Wt
  }
  Mt() {
    const t = this.Ft;
    if (t.yt = !1, this.vt.W().mode === 2) return;
    const e = this.vt.W().vertLine;
    if (!e.labelVisible) return;
    const i = this.$i.St();
    if (i.Ni()) return;
    t.Hi = i.Hi();
    const n = this.Ei();
    if (n === null) return;
    t.ki = n.ki;
    const o = i.Ui(this.vt.xt());
    t.Kt = i.qi(w(o)), t.yt = !0;
    const r = _i(e.labelBackgroundColor);
    t.t = r.t, t.V = r.i, t.hi = i.W().ticksVisible
  }
}
class Os {
  constructor() {
    this.Yi = null, this.Zi = 0
  }
  Xi() {
    return this.Zi
  }
  Ki(t) {
    this.Zi = t
  }
  Dt() {
    return this.Yi
  }
  Gi(t) {
    this.Yi = t
  }
  Ji(t) {
    return []
  }
  Qi() {
    return []
  }
  yt() {
    return !0
  }
}
var ps;
(function(s) {
  s[s.Normal = 0] = "Normal", s[s.Magnet = 1] = "Magnet", s[s.Hidden = 2] = "Hidden"
})(ps || (ps = {}));
class gu extends Os {
  constructor(t, e) {
    super(), this.tn = null, this.nn = NaN, this.sn = 0, this.en = !0, this.rn = new Map, this.hn = !1, this.ln = NaN, this.an = NaN, this._n = NaN, this.un = NaN, this.$i = t, this.cn = e, this.dn = new cu(t, this), this.fn = ((n, o) => r => {
      const l = o(),
        a = n();
      if (r === w(this.tn).vn()) return {
        _t: a,
        ki: l
      };
      {
        const h = w(r.Ct());
        return {
          _t: r.pn(l, h),
          ki: l
        }
      }
    })(() => this.nn, () => this.an);
    const i = ((n, o) => () => {
      const r = this.$i.St().mn(n()),
        l = o();
      return r && Number.isFinite(l) ? {
        ot: r,
        ki: l
      } : null
    })(() => this.sn, () => this.Yt());
    this.bn = new vu(this, t, i), this.wn = new du(this)
  }
  W() {
    return this.cn
  }
  gn(t, e) {
    this._n = t, this.un = e
  }
  Mn() {
    this._n = NaN, this.un = NaN
  }
  xn() {
    return this._n
  }
  Sn() {
    return this.un
  }
  kn(t, e, i) {
    this.hn || (this.hn = !0), this.en = !0, this.yn(t, e, i)
  }
  xt() {
    return this.sn
  }
  Yt() {
    return this.ln
  }
  Zt() {
    return this.an
  }
  yt() {
    return this.en
  }
  Cn() {
    this.en = !1, this.Tn(), this.nn = NaN, this.ln = NaN, this.an = NaN, this.tn = null, this.Mn()
  }
  Pn(t) {
    return this.tn !== null ? [this.wn, this.dn] : []
  }
  Ut(t) {
    return t === this.tn && this.cn.horzLine.visible
  }
  qt() {
    return this.cn.vertLine.visible
  }
  Rn(t, e) {
    this.en && this.tn === t || this.rn.clear();
    const i = [];
    return this.tn === t && i.push(this.Dn(this.rn, e, this.fn)), i
  }
  Qi() {
    return this.en ? [this.bn] : []
  }
  Ht() {
    return this.tn
  }
  Vn() {
    this.wn.bt(), this.rn.forEach(t => t.bt()), this.bn.bt(), this.dn.bt()
  }
  On(t) {
    return t && !t.vn().Ni() ? t.vn() : null
  }
  yn(t, e, i) {
    this.Bn(t, e, i) && this.Vn()
  }
  Bn(t, e, i) {
    const n = this.ln,
      o = this.an,
      r = this.nn,
      l = this.sn,
      a = this.tn,
      h = this.On(i);
    this.sn = t, this.ln = isNaN(t) ? NaN : this.$i.St().It(t), this.tn = i;
    const c = h !== null ? h.Ct() : null;
    return h !== null && c !== null ? (this.nn = e, this.an = h.Rt(e, c)) : (this.nn = NaN, this.an = NaN), n !== this.ln || o !== this.an || l !== this.sn || r !== this.nn || a !== this.tn
  }
  Tn() {
    const t = this.$i.wt().map(i => i.In().An()).filter(ou),
      e = t.length === 0 ? null : Math.max(...t);
    this.sn = e !== null ? e : NaN
  }
  Dn(t, e, i) {
    let n = t.get(e);
    return n === void 0 && (n = new pu(this, e, i), t.set(e, n)), n
  }
}

function xi(s) {
  return s === "left" || s === "right"
}
class at {
  constructor(t) {
    this.zn = new Map, this.Ln = [], this.En = t
  }
  Nn(t, e) {
    const i = function(n, o) {
      return n === void 0 ? o : {
        Fn: Math.max(n.Fn, o.Fn),
        Wn: n.Wn || o.Wn
      }
    }(this.zn.get(t), e);
    this.zn.set(t, i)
  }
  jn() {
    return this.En
  }
  Hn(t) {
    const e = this.zn.get(t);
    return e === void 0 ? {
      Fn: this.En
    } : {
      Fn: Math.max(this.En, e.Fn),
      Wn: e.Wn
    }
  }
  $n() {
    this.Un(), this.Ln = [{
      qn: 0
    }]
  }
  Yn(t) {
    this.Un(), this.Ln = [{
      qn: 1,
      Vt: t
    }]
  }
  Zn(t) {
    this.Xn(), this.Ln.push({
      qn: 5,
      Vt: t
    })
  }
  Un() {
    this.Xn(), this.Ln.push({
      qn: 6
    })
  }
  Kn() {
    this.Un(), this.Ln = [{
      qn: 4
    }]
  }
  Gn(t) {
    this.Un(), this.Ln.push({
      qn: 2,
      Vt: t
    })
  }
  Jn(t) {
    this.Un(), this.Ln.push({
      qn: 3,
      Vt: t
    })
  }
  Qn() {
    return this.Ln
  }
  ts(t) {
    for (const e of t.Ln) this.ns(e);
    this.En = Math.max(this.En, t.En), t.zn.forEach((e, i) => {
      this.Nn(i, e)
    })
  }
  static ss() {
    return new at(2)
  }
  static es() {
    return new at(3)
  }
  ns(t) {
    switch (t.qn) {
      case 0:
        this.$n();
        break;
      case 1:
        this.Yn(t.Vt);
        break;
      case 2:
        this.Gn(t.Vt);
        break;
      case 3:
        this.Jn(t.Vt);
        break;
      case 4:
        this.Kn();
        break;
      case 5:
        this.Zn(t.Vt);
        break;
      case 6:
        this.Xn()
    }
  }
  Xn() {
    const t = this.Ln.findIndex(e => e.qn === 5);
    t !== -1 && this.Ln.splice(t, 1)
  }
}
const bn = ".";

function kt(s, t) {
  if (!_t(s)) return "n/a";
  if (!Ie(t)) throw new TypeError("invalid length");
  if (t < 0 || t > 16) throw new TypeError("invalid length");
  return t === 0 ? s.toString() : ("0000000000000000" + s.toString()).slice(-t)
}
class Mi {
  constructor(t, e) {
    if (e || (e = 1), _t(t) && Ie(t) || (t = 100), t < 0) throw new TypeError("invalid base");
    this.Li = t, this.rs = e, this.hs()
  }
  format(t) {
    const e = t < 0 ? "−" : "";
    return t = Math.abs(t), e + this.ls(t)
  }
  hs() {
    if (this.os = 0, this.Li > 0 && this.rs > 0) {
      let t = this.Li;
      for (; t > 1;) t /= 10, this.os++
    }
  }
  ls(t) {
    const e = this.Li / this.rs;
    let i = Math.floor(t),
      n = "";
    const o = this.os !== void 0 ? this.os : NaN;
    if (e > 1) {
      let r = +(Math.round(t * e) - i * e).toFixed(this.os);
      r >= e && (r -= e, i += 1), n = bn + kt(+r.toFixed(this.os) * this.rs, o)
    } else i = Math.round(i * e) / e, o > 0 && (n = bn + kt(0, o));
    return i.toFixed(0) + n
  }
}
class sr extends Mi {
  constructor(t = 100) {
    super(t)
  }
  format(t) {
    return `${super.format(t)}%`
  }
}
class bu {
  constructor(t) {
    this._s = t
  }
  format(t) {
    let e = "";
    return t < 0 && (e = "-", t = -t), t < 995 ? e + this.us(t) : t < 999995 ? e + this.us(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), e + this.us(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), e + this.us(t / 1e9) + "B")
  }
  us(t) {
    let e;
    const i = Math.pow(10, this._s);
    return e = (t = Math.round(t * i) / i) >= 1e-15 && t < 1 ? t.toFixed(this._s).replace(/\.?0+$/, "") : String(t), e.replace(/(\.[1-9]*)0+$/, (n, o) => o)
  }
}

function nr(s, t, e, i, n, o, r) {
  if (t.length === 0 || i.from >= t.length || i.to <= 0) return;
  const {
    context: l,
    horizontalPixelRatio: a,
    verticalPixelRatio: h
  } = s, c = t[i.from];
  let u = o(s, c),
    d = c;
  if (i.to - i.from < 2) {
    const f = n / 2;
    l.beginPath();
    const p = {
        nt: c.nt - f,
        st: c.st
      },
      m = {
        nt: c.nt + f,
        st: c.st
      };
    l.moveTo(p.nt * a, p.st * h), l.lineTo(m.nt * a, m.st * h), r(s, u, p, m)
  } else {
    const f = (m, b) => {
      r(s, u, d, b), l.beginPath(), u = m, d = b
    };
    let p = d;
    l.beginPath(), l.moveTo(c.nt * a, c.st * h);
    for (let m = i.from + 1; m < i.to; ++m) {
      p = t[m];
      const b = o(s, p);
      switch (e) {
        case 0:
          l.lineTo(p.nt * a, p.st * h);
          break;
        case 1:
          l.lineTo(p.nt * a, t[m - 1].st * h), b !== u && (f(b, p), l.lineTo(p.nt * a, t[m - 1].st * h)), l.lineTo(p.nt * a, p.st * h);
          break;
        case 2: {
          const [y, g] = yu(t, m - 1, m);
          l.bezierCurveTo(y.nt * a, y.st * h, g.nt * a, g.st * h, p.nt * a, p.st * h);
          break
        }
      }
      e !== 1 && b !== u && (f(b, p), l.moveTo(p.nt * a, p.st * h))
    }(d !== p || d === p && e === 1) && r(s, u, d, p)
  }
}
const yn = 6;

function Li(s, t) {
  return {
    nt: s.nt - t.nt,
    st: s.st - t.st
  }
}

function _n(s, t) {
  return {
    nt: s.nt / t,
    st: s.st / t
  }
}

function yu(s, t, e) {
  const i = Math.max(0, t - 1),
    n = Math.min(s.length - 1, e + 1);
  var o, r;
  return [(o = s[t], r = _n(Li(s[e], s[i]), yn), {
    nt: o.nt + r.nt,
    st: o.st + r.st
  }), Li(s[e], _n(Li(s[n], s[t]), yn))]
}

function _u(s, t, e, i, n) {
  const {
    context: o,
    horizontalPixelRatio: r,
    verticalPixelRatio: l
  } = t;
  o.lineTo(n.nt * r, s * l), o.lineTo(i.nt * r, s * l), o.closePath(), o.fillStyle = e, o.fill()
}
class or extends gt {
  constructor() {
    super(...arguments), this.G = null
  }
  J(t) {
    this.G = t
  }
  K(t) {
    var e;
    if (this.G === null) return;
    const {
      it: i,
      tt: n,
      cs: o,
      et: r,
      Nt: l,
      ds: a
    } = this.G, h = (e = this.G.fs) !== null && e !== void 0 ? e : this.G.vs ? 0 : t.mediaSize.height;
    if (n === null) return;
    const c = t.context;
    c.lineCap = "butt", c.lineJoin = "round", c.lineWidth = r, Xt(c, l), c.lineWidth = 1, nr(t, i, a, n, o, this.ps.bind(this), _u.bind(null, h))
  }
}

function ms(s, t, e) {
  return Math.min(Math.max(s, t), e)
}

function Ue(s, t, e) {
  return t - s <= e
}

function rr(s) {
  const t = Math.ceil(s);
  return t % 2 == 0 ? t - 1 : t
}
class As {
  bs(t, e) {
    const i = this.ws,
      {
        gs: n,
        Ms: o,
        xs: r,
        Ss: l,
        ks: a,
        fs: h
      } = e;
    if (this.ys === void 0 || i === void 0 || i.gs !== n || i.Ms !== o || i.xs !== r || i.Ss !== l || i.fs !== h || i.ks !== a) {
      const c = t.context.createLinearGradient(0, 0, 0, a);
      if (c.addColorStop(0, n), h != null) {
        const u = ms(h * t.verticalPixelRatio / a, 0, 1);
        c.addColorStop(u, o), c.addColorStop(u, r)
      }
      c.addColorStop(1, l), this.ys = c, this.ws = e
    }
    return this.ys
  }
}
class wu extends or {
  constructor() {
    super(...arguments), this.Cs = new As
  }
  ps(t, e) {
    return this.Cs.bs(t, {
      gs: e.Ts,
      Ms: "",
      xs: "",
      Ss: e.Ps,
      ks: t.bitmapSize.height
    })
  }
}

function Su(s, t) {
  const e = s.context;
  e.strokeStyle = t, e.stroke()
}
class lr extends gt {
  constructor() {
    super(...arguments), this.G = null
  }
  J(t) {
    this.G = t
  }
  K(t) {
    if (this.G === null) return;
    const {
      it: e,
      tt: i,
      cs: n,
      ds: o,
      et: r,
      Nt: l,
      Rs: a
    } = this.G;
    if (i === null) return;
    const h = t.context;
    h.lineCap = "butt", h.lineWidth = r * t.verticalPixelRatio, Xt(h, l), h.lineJoin = "round";
    const c = this.Ds.bind(this);
    o !== void 0 && nr(t, e, o, i, n, c, Su), a && function(u, d, f, p, m) {
      const {
        horizontalPixelRatio: b,
        verticalPixelRatio: y,
        context: g
      } = u;
      let M = null;
      const S = Math.max(1, Math.floor(b)) % 2 / 2,
        z = f * y + S;
      for (let D = p.to - 1; D >= p.from; --D) {
        const O = d[D];
        if (O) {
          const $ = m(u, O);
          $ !== M && (g.beginPath(), M !== null && g.fill(), g.fillStyle = $, M = $);
          const T = Math.round(O.nt * b) + S,
            x = O.st * y;
          g.moveTo(T, x), g.arc(T, x, z, 0, 2 * Math.PI)
        }
      }
      g.fill()
    }(t, e, a, i, c)
  }
}
class ar extends lr {
  Ds(t, e) {
    return e.lt
  }
}

function hr(s, t, e, i, n = 0, o = t.length) {
  let r = o - n;
  for (; 0 < r;) {
    const l = r >> 1,
      a = n + l;
    i(t[a], e) === s ? (n = a + 1, r -= l + 1) : r = l
  }
  return n
}
const Ve = hr.bind(null, !0),
  cr = hr.bind(null, !1);

function xu(s, t) {
  return s.ot < t
}

function Mu(s, t) {
  return t < s.ot
}

function ur(s, t, e) {
  const i = t.Vs(),
    n = t.ui(),
    o = Ve(s, i, xu),
    r = cr(s, n, Mu);
  if (!e) return {
    from: o,
    to: r
  };
  let l = o,
    a = r;
  return o > 0 && o < s.length && s[o].ot >= i && (l = o - 1), r > 0 && r < s.length && s[r - 1].ot <= n && (a = r + 1), {
    from: l,
    to: a
  }
}
class Ds {
  constructor(t, e, i) {
    this.Os = !0, this.Bs = !0, this.As = !0, this.Is = [], this.zs = null, this.Ls = t, this.Es = e, this.Ns = i
  }
  bt(t) {
    this.Os = !0, t === "data" && (this.Bs = !0), t === "options" && (this.As = !0)
  }
  gt() {
    return this.Ls.yt() ? (this.Fs(), this.zs === null ? null : this.Ws) : null
  }
  js() {
    this.Is = this.Is.map(t => Object.assign(Object.assign({}, t), this.Ls.$s().Hs(t.ot)))
  }
  Us() {
    this.zs = null
  }
  Fs() {
    this.Bs && (this.qs(), this.Bs = !1), this.As && (this.js(), this.As = !1), this.Os && (this.Ys(), this.Os = !1)
  }
  Ys() {
    const t = this.Ls.Dt(),
      e = this.Es.St();
    if (this.Us(), e.Ni() || t.Ni()) return;
    const i = e.Zs();
    if (i === null || this.Ls.In().Xs() === 0) return;
    const n = this.Ls.Ct();
    n !== null && (this.zs = ur(this.Is, i, this.Ns), this.Ks(t, e, n.Vt), this.Gs())
  }
}
class ki extends Ds {
  constructor(t, e) {
    super(t, e, !0)
  }
  Ks(t, e, i) {
    e.Js(this.Is, $e(this.zs)), t.Qs(this.Is, i, $e(this.zs))
  }
  te(t, e) {
    return {
      ot: t,
      _t: e,
      nt: NaN,
      st: NaN
    }
  }
  qs() {
    const t = this.Ls.$s();
    this.Is = this.Ls.In().ie().map(e => {
      const i = e.Vt[3];
      return this.ne(e.se, i, t)
    })
  }
}
class ku extends ki {
  constructor(t, e) {
    super(t, e), this.Ws = new Rs, this.ee = new wu, this.re = new ar, this.Ws.Z([this.ee, this.re])
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.te(t, e)), i.Hs(t))
  }
  Gs() {
    const t = this.Ls.W();
    this.ee.J({
      ds: t.lineType,
      it: this.Is,
      Nt: t.lineStyle,
      et: t.lineWidth,
      fs: null,
      vs: t.invertFilledArea,
      tt: this.zs,
      cs: this.Es.St().he()
    }), this.re.J({
      ds: t.lineVisible ? t.lineType : void 0,
      it: this.Is,
      Nt: t.lineStyle,
      et: t.lineWidth,
      tt: this.zs,
      cs: this.Es.St().he(),
      Rs: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0
    })
  }
}
class Cu extends gt {
  constructor() {
    super(...arguments), this.zt = null, this.le = 0, this.ae = 0
  }
  J(t) {
    this.zt = t
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: i
  }) {
    if (this.zt === null || this.zt.In.length === 0 || this.zt.tt === null) return;
    this.le = this.oe(e), this.le >= 2 && Math.max(1, Math.floor(e)) % 2 != this.le % 2 && this.le--, this.ae = this.zt._e ? Math.min(this.le, Math.floor(e)) : this.le;
    let n = null;
    const o = this.ae <= this.le && this.zt.he >= Math.floor(1.5 * e);
    for (let r = this.zt.tt.from; r < this.zt.tt.to; ++r) {
      const l = this.zt.In[r];
      n !== l.ue && (t.fillStyle = l.ue, n = l.ue);
      const a = Math.floor(.5 * this.ae),
        h = Math.round(l.nt * e),
        c = h - a,
        u = this.ae,
        d = c + u - 1,
        f = Math.min(l.ce, l.de),
        p = Math.max(l.ce, l.de),
        m = Math.round(f * i) - a,
        b = Math.round(p * i) + a,
        y = Math.max(b - m, this.ae);
      t.fillRect(c, m, u, y);
      const g = Math.ceil(1.5 * this.le);
      if (o) {
        if (this.zt.fe) {
          const D = h - g;
          let O = Math.max(m, Math.round(l.ve * i) - a),
            $ = O + u - 1;
          $ > m + y - 1 && ($ = m + y - 1, O = $ - u + 1), t.fillRect(D, O, c - D, $ - O + 1)
        }
        const M = h + g;
        let S = Math.max(m, Math.round(l.pe * i) - a),
          z = S + u - 1;
        z > m + y - 1 && (z = m + y - 1, S = z - u + 1), t.fillRect(d + 1, S, M - d, z - S + 1)
      }
    }
  }
  oe(t) {
    const e = Math.floor(t);
    return Math.max(e, Math.floor(function(i, n) {
      return Math.floor(.3 * i * n)
    }(w(this.zt).he, t)))
  }
}
class dr extends Ds {
  constructor(t, e) {
    super(t, e, !1)
  }
  Ks(t, e, i) {
    e.Js(this.Is, $e(this.zs)), t.me(this.Is, i, $e(this.zs))
  }
  be(t, e, i) {
    return {
      ot: t,
      we: e.Vt[0],
      ge: e.Vt[1],
      Me: e.Vt[2],
      xe: e.Vt[3],
      nt: NaN,
      ve: NaN,
      ce: NaN,
      de: NaN,
      pe: NaN
    }
  }
  qs() {
    const t = this.Ls.$s();
    this.Is = this.Ls.In().ie().map(e => this.ne(e.se, e, t))
  }
}
class Eu extends dr {
  constructor() {
    super(...arguments), this.Ws = new Cu
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.be(t, e, i)), i.Hs(t))
  }
  Gs() {
    const t = this.Ls.W();
    this.Ws.J({
      In: this.Is,
      he: this.Es.St().he(),
      fe: t.openVisible,
      _e: t.thinBars,
      tt: this.zs
    })
  }
}
class Tu extends or {
  constructor() {
    super(...arguments), this.Cs = new As
  }
  ps(t, e) {
    const i = this.G;
    return this.Cs.bs(t, {
      gs: e.Se,
      Ms: e.ke,
      xs: e.ye,
      Ss: e.Ce,
      ks: t.bitmapSize.height,
      fs: i.fs
    })
  }
}
class zu extends lr {
  constructor() {
    super(...arguments), this.Te = new As
  }
  Ds(t, e) {
    const i = this.G;
    return this.Te.bs(t, {
      gs: e.Pe,
      Ms: e.Pe,
      xs: e.Re,
      Ss: e.Re,
      ks: t.bitmapSize.height,
      fs: i.fs
    })
  }
}
class Pu extends ki {
  constructor(t, e) {
    super(t, e), this.Ws = new Rs, this.De = new Tu, this.Ve = new zu, this.Ws.Z([this.De, this.Ve])
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.te(t, e)), i.Hs(t))
  }
  Gs() {
    const t = this.Ls.Ct();
    if (t === null) return;
    const e = this.Ls.W(),
      i = this.Ls.Dt().Rt(e.baseValue.price, t.Vt),
      n = this.Es.St().he();
    this.De.J({
      it: this.Is,
      et: e.lineWidth,
      Nt: e.lineStyle,
      ds: e.lineType,
      fs: i,
      vs: !1,
      tt: this.zs,
      cs: n
    }), this.Ve.J({
      it: this.Is,
      et: e.lineWidth,
      Nt: e.lineStyle,
      ds: e.lineVisible ? e.lineType : void 0,
      Rs: e.pointMarkersVisible ? e.pointMarkersRadius || e.lineWidth / 2 + 2 : void 0,
      fs: i,
      tt: this.zs,
      cs: n
    })
  }
}
class Iu extends gt {
  constructor() {
    super(...arguments), this.zt = null, this.le = 0
  }
  J(t) {
    this.zt = t
  }
  K(t) {
    if (this.zt === null || this.zt.In.length === 0 || this.zt.tt === null) return;
    const {
      horizontalPixelRatio: e
    } = t;
    this.le = function(o, r) {
      if (o >= 2.5 && o <= 4) return Math.floor(3 * r);
      const l = 1 - .2 * Math.atan(Math.max(4, o) - 4) / (.5 * Math.PI),
        a = Math.floor(o * l * r),
        h = Math.floor(o * r),
        c = Math.min(a, h);
      return Math.max(Math.floor(r), c)
    }(this.zt.he, e), this.le >= 2 && Math.floor(e) % 2 != this.le % 2 && this.le--;
    const i = this.zt.In;
    this.zt.Oe && this.Be(t, i, this.zt.tt), this.zt._i && this.Ae(t, i, this.zt.tt);
    const n = this.Ie(e);
    (!this.zt._i || this.le > 2 * n) && this.ze(t, i, this.zt.tt)
  }
  Be(t, e, i) {
    if (this.zt === null) return;
    const {
      context: n,
      horizontalPixelRatio: o,
      verticalPixelRatio: r
    } = t;
    let l = "",
      a = Math.min(Math.floor(o), Math.floor(this.zt.he * o));
    a = Math.max(Math.floor(o), Math.min(a, this.le));
    const h = Math.floor(.5 * a);
    let c = null;
    for (let u = i.from; u < i.to; u++) {
      const d = e[u];
      d.Le !== l && (n.fillStyle = d.Le, l = d.Le);
      const f = Math.round(Math.min(d.ve, d.pe) * r),
        p = Math.round(Math.max(d.ve, d.pe) * r),
        m = Math.round(d.ce * r),
        b = Math.round(d.de * r);
      let y = Math.round(o * d.nt) - h;
      const g = y + a - 1;
      c !== null && (y = Math.max(c + 1, y), y = Math.min(y, g));
      const M = g - y + 1;
      n.fillRect(y, m, M, f - m), n.fillRect(y, p + 1, M, b - p), c = g
    }
  }
  Ie(t) {
    let e = Math.floor(1 * t);
    this.le <= 2 * e && (e = Math.floor(.5 * (this.le - 1)));
    const i = Math.max(Math.floor(t), e);
    return this.le <= 2 * i ? Math.max(Math.floor(t), Math.floor(1 * t)) : i
  }
  Ae(t, e, i) {
    if (this.zt === null) return;
    const {
      context: n,
      horizontalPixelRatio: o,
      verticalPixelRatio: r
    } = t;
    let l = "";
    const a = this.Ie(o);
    let h = null;
    for (let c = i.from; c < i.to; c++) {
      const u = e[c];
      u.Ee !== l && (n.fillStyle = u.Ee, l = u.Ee);
      let d = Math.round(u.nt * o) - Math.floor(.5 * this.le);
      const f = d + this.le - 1,
        p = Math.round(Math.min(u.ve, u.pe) * r),
        m = Math.round(Math.max(u.ve, u.pe) * r);
      if (h !== null && (d = Math.max(h + 1, d), d = Math.min(d, f)), this.zt.he * o > 2 * a) fu(n, d, p, f - d + 1, m - p + 1, a);
      else {
        const b = f - d + 1;
        n.fillRect(d, p, b, m - p + 1)
      }
      h = f
    }
  }
  ze(t, e, i) {
    if (this.zt === null) return;
    const {
      context: n,
      horizontalPixelRatio: o,
      verticalPixelRatio: r
    } = t;
    let l = "";
    const a = this.Ie(o);
    for (let h = i.from; h < i.to; h++) {
      const c = e[h];
      let u = Math.round(Math.min(c.ve, c.pe) * r),
        d = Math.round(Math.max(c.ve, c.pe) * r),
        f = Math.round(c.nt * o) - Math.floor(.5 * this.le),
        p = f + this.le - 1;
      if (c.ue !== l) {
        const m = c.ue;
        n.fillStyle = m, l = m
      }
      this.zt._i && (f += a, u += a, p -= a, d -= a), u > d || n.fillRect(f, u, p - f + 1, d - u + 1)
    }
  }
}
class $u extends dr {
  constructor() {
    super(...arguments), this.Ws = new Iu
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.be(t, e, i)), i.Hs(t))
  }
  Gs() {
    const t = this.Ls.W();
    this.Ws.J({
      In: this.Is,
      he: this.Es.St().he(),
      Oe: t.wickVisible,
      _i: t.borderVisible,
      tt: this.zs
    })
  }
}
class Lu {
  constructor(t, e) {
    this.Ne = t, this.Li = e
  }
  X(t, e, i) {
    this.Ne.draw(t, this.Li, e, i)
  }
}
class ji extends Ds {
  constructor(t, e, i) {
    super(t, e, !1), this.wn = i, this.Ws = new Lu(this.wn.renderer(), n => {
      const o = t.Ct();
      return o === null ? null : t.Dt().Rt(n, o.Vt)
    })
  }
  Fe(t) {
    return this.wn.priceValueBuilder(t)
  }
  We(t) {
    return this.wn.isWhitespace(t)
  }
  qs() {
    const t = this.Ls.$s();
    this.Is = this.Ls.In().ie().map(e => Object.assign(Object.assign({
      ot: e.se,
      nt: NaN
    }, t.Hs(e.se)), {
      je: e.He
    }))
  }
  Ks(t, e) {
    e.Js(this.Is, $e(this.zs))
  }
  Gs() {
    this.wn.update({
      bars: this.Is.map(ju),
      barSpacing: this.Es.St().he(),
      visibleRange: this.zs
    }, this.Ls.W())
  }
}

function ju(s) {
  return {
    x: s.nt,
    time: s.ot,
    originalData: s.je,
    barColor: s.ue
  }
}
class Ru extends gt {
  constructor() {
    super(...arguments), this.zt = null, this.$e = []
  }
  J(t) {
    this.zt = t, this.$e = []
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: i
  }) {
    if (this.zt === null || this.zt.it.length === 0 || this.zt.tt === null) return;
    this.$e.length || this.Ue(e);
    const n = Math.max(1, Math.floor(i)),
      o = Math.round(this.zt.qe * i) - Math.floor(n / 2),
      r = o + n;
    for (let l = this.zt.tt.from; l < this.zt.tt.to; l++) {
      const a = this.zt.it[l],
        h = this.$e[l - this.zt.tt.from],
        c = Math.round(a.st * i);
      let u, d;
      t.fillStyle = a.ue, c <= o ? (u = c, d = r) : (u = o, d = c - Math.floor(n / 2) + n), t.fillRect(h.Vs, u, h.ui - h.Vs + 1, d - u)
    }
  }
  Ue(t) {
    if (this.zt === null || this.zt.it.length === 0 || this.zt.tt === null) return void(this.$e = []);
    const e = Math.ceil(this.zt.he * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
      i = Math.round(this.zt.he * t) - e;
    this.$e = new Array(this.zt.tt.to - this.zt.tt.from);
    for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
      const r = this.zt.it[o],
        l = Math.round(r.nt * t);
      let a, h;
      if (i % 2) {
        const c = (i - 1) / 2;
        a = l - c, h = l + c
      } else {
        const c = i / 2;
        a = l - c, h = l + c - 1
      }
      this.$e[o - this.zt.tt.from] = {
        Vs: a,
        ui: h,
        Ye: l,
        Ze: r.nt * t,
        ot: r.ot
      }
    }
    for (let o = this.zt.tt.from + 1; o < this.zt.tt.to; o++) {
      const r = this.$e[o - this.zt.tt.from],
        l = this.$e[o - this.zt.tt.from - 1];
      r.ot === l.ot + 1 && r.Vs - l.ui !== e + 1 && (l.Ye > l.Ze ? l.ui = r.Vs - e - 1 : r.Vs = l.ui + e + 1)
    }
    let n = Math.ceil(this.zt.he * t);
    for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
      const r = this.$e[o - this.zt.tt.from];
      r.ui < r.Vs && (r.ui = r.Vs);
      const l = r.ui - r.Vs + 1;
      n = Math.min(l, n)
    }
    if (e > 0 && n < 4)
      for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
        const r = this.$e[o - this.zt.tt.from];
        r.ui - r.Vs + 1 > n && (r.Ye > r.Ze ? r.ui -= 1 : r.Vs += 1)
      }
  }
}
class Ou extends ki {
  constructor() {
    super(...arguments), this.Ws = new Ru
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.te(t, e)), i.Hs(t))
  }
  Gs() {
    const t = {
      it: this.Is,
      he: this.Es.St().he(),
      tt: this.zs,
      qe: this.Ls.Dt().Rt(this.Ls.W().base, w(this.Ls.Ct()).Vt)
    };
    this.Ws.J(t)
  }
}
class Au extends ki {
  constructor() {
    super(...arguments), this.Ws = new ar
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.te(t, e)), i.Hs(t))
  }
  Gs() {
    const t = this.Ls.W(),
      e = {
        it: this.Is,
        Nt: t.lineStyle,
        ds: t.lineVisible ? t.lineType : void 0,
        et: t.lineWidth,
        Rs: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0,
        tt: this.zs,
        cs: this.Es.St().he()
      };
    this.Ws.J(e)
  }
}
const Du = /[2-9]/g;
class Le {
  constructor(t = 50) {
    this.Xe = 0, this.Ke = 1, this.Ge = 1, this.Je = {}, this.Qe = new Map, this.tr = t
  }
  ir() {
    this.Xe = 0, this.Qe.clear(), this.Ke = 1, this.Ge = 1, this.Je = {}
  }
  xi(t, e, i) {
    return this.nr(t, e, i).width
  }
  Mi(t, e, i) {
    const n = this.nr(t, e, i);
    return ((n.actualBoundingBoxAscent || 0) - (n.actualBoundingBoxDescent || 0)) / 2
  }
  nr(t, e, i) {
    const n = i || Du,
      o = String(e).replace(n, "0");
    if (this.Qe.has(o)) return ct(this.Qe.get(o)).sr;
    if (this.Xe === this.tr) {
      const l = this.Je[this.Ge];
      delete this.Je[this.Ge], this.Qe.delete(l), this.Ge++, this.Xe--
    }
    t.save(), t.textBaseline = "middle";
    const r = t.measureText(o);
    return t.restore(), r.width === 0 && e.length || (this.Qe.set(o, {
      sr: r,
      er: this.Ke
    }), this.Je[this.Ke] = o, this.Xe++, this.Ke++), r
  }
}
class Vu {
  constructor(t) {
    this.rr = null, this.k = null, this.hr = "right", this.lr = t
  }
  ar(t, e, i) {
    this.rr = t, this.k = e, this.hr = i
  }
  X(t) {
    this.k !== null && this.rr !== null && this.rr.X(t, this.k, this.lr, this.hr)
  }
}
class fr {
  constructor(t, e, i) {
    this._r = t, this.lr = new Le(50), this.ur = e, this.F = i, this.j = -1, this.Wt = new Vu(this.lr)
  }
  gt() {
    const t = this.F.cr(this.ur);
    if (t === null) return null;
    const e = t.dr(this.ur) ? t.vr() : this.ur.Dt();
    if (e === null) return null;
    const i = t.pr(e);
    if (i === "overlay") return null;
    const n = this.F.mr();
    return n.P !== this.j && (this.j = n.P, this.lr.ir()), this.Wt.ar(this._r.Ii(), n, i), this.Wt
  }
}
class Wu extends gt {
  constructor() {
    super(...arguments), this.zt = null
  }
  J(t) {
    this.zt = t
  }
  br(t, e) {
    var i;
    if (!(!((i = this.zt) === null || i === void 0) && i.yt)) return null;
    const {
      st: n,
      et: o,
      wr: r
    } = this.zt;
    return e >= n - o - 7 && e <= n + o + 7 ? {
      gr: this.zt,
      wr: r
    } : null
  }
  K({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i,
    verticalPixelRatio: n
  }) {
    if (this.zt === null || this.zt.yt === !1) return;
    const o = Math.round(this.zt.st * n);
    o < 0 || o > e.height || (t.lineCap = "butt", t.strokeStyle = this.zt.V, t.lineWidth = Math.floor(this.zt.et * i), Xt(t, this.zt.Nt), qo(t, o, 0, e.width))
  }
}
class Vs {
  constructor(t) {
    this.Mr = {
      st: 0,
      V: "rgba(0, 0, 0, 0)",
      et: 1,
      Nt: 0,
      yt: !1
    }, this.Sr = new Wu, this.ft = !0, this.Ls = t, this.Es = t.$t(), this.Sr.J(this.Mr)
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.Ls.yt() ? (this.ft && (this.kr(), this.ft = !1), this.Sr) : null
  }
}
class Bu extends Vs {
  constructor(t) {
    super(t)
  }
  kr() {
    this.Mr.yt = !1;
    const t = this.Ls.Dt(),
      e = t.yr().yr;
    if (e !== 2 && e !== 3) return;
    const i = this.Ls.W();
    if (!i.baseLineVisible || !this.Ls.yt()) return;
    const n = this.Ls.Ct();
    n !== null && (this.Mr.yt = !0, this.Mr.st = t.Rt(n.Vt, n.Vt), this.Mr.V = i.baseLineColor, this.Mr.et = i.baseLineWidth, this.Mr.Nt = i.baseLineStyle)
  }
}
class Nu extends gt {
  constructor() {
    super(...arguments), this.zt = null
  }
  J(t) {
    this.zt = t
  }
  He() {
    return this.zt
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: i
  }) {
    const n = this.zt;
    if (n === null) return;
    const o = Math.max(1, Math.floor(e)),
      r = o % 2 / 2,
      l = Math.round(n.Ze.x * e) + r,
      a = n.Ze.y * i;
    t.fillStyle = n.Cr, t.beginPath();
    const h = Math.max(2, 1.5 * n.Tr) * e;
    t.arc(l, a, h, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = n.Pr, t.beginPath(), t.arc(l, a, n.ht * e, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = o, t.strokeStyle = n.Rr, t.beginPath(), t.arc(l, a, n.ht * e + o / 2, 0, 2 * Math.PI, !1), t.stroke()
  }
}
const Fu = [{
  Dr: 0,
  Vr: .25,
  Or: 4,
  Br: 10,
  Ar: .25,
  Ir: 0,
  zr: .4,
  Lr: .8
}, {
  Dr: .25,
  Vr: .525,
  Or: 10,
  Br: 14,
  Ar: 0,
  Ir: 0,
  zr: .8,
  Lr: 0
}, {
  Dr: .525,
  Vr: 1,
  Or: 14,
  Br: 14,
  Ar: 0,
  Ir: 0,
  zr: 0,
  Lr: 0
}];

function wn(s, t, e, i) {
  return function(n, o) {
    if (n === "transparent") return n;
    const r = Pe(n),
      l = r[3];
    return `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o*l})`
  }(s, e + (i - e) * t)
}

function Sn(s, t) {
  const e = s % 2600 / 2600;
  let i;
  for (const a of Fu)
    if (e >= a.Dr && e <= a.Vr) {
      i = a;
      break
    } Ot(i !== void 0, "Last price animation internal logic error");
  const n = (e - i.Dr) / (i.Vr - i.Dr);
  return {
    Pr: wn(t, n, i.Ar, i.Ir),
    Rr: wn(t, n, i.zr, i.Lr),
    ht: (o = n, r = i.Or, l = i.Br, r + (l - r) * o)
  };
  var o, r, l
}
class Uu {
  constructor(t) {
    this.Wt = new Nu, this.ft = !0, this.Er = !0, this.Nr = performance.now(), this.Fr = this.Nr - 1, this.Wr = t
  }
  jr() {
    this.Fr = this.Nr - 1, this.bt()
  }
  Hr() {
    if (this.bt(), this.Wr.W().lastPriceAnimation === 2) {
      const t = performance.now(),
        e = this.Fr - t;
      if (e > 0) return void(e < 650 && (this.Fr += 2600));
      this.Nr = t, this.Fr = t + 2600
    }
  }
  bt() {
    this.ft = !0
  }
  $r() {
    this.Er = !0
  }
  yt() {
    return this.Wr.W().lastPriceAnimation !== 0
  }
  Ur() {
    switch (this.Wr.W().lastPriceAnimation) {
      case 0:
        return !1;
      case 1:
        return !0;
      case 2:
        return performance.now() <= this.Fr
    }
  }
  gt() {
    return this.ft ? (this.Mt(), this.ft = !1, this.Er = !1) : this.Er && (this.qr(), this.Er = !1), this.Wt
  }
  Mt() {
    this.Wt.J(null);
    const t = this.Wr.$t().St(),
      e = t.Zs(),
      i = this.Wr.Ct();
    if (e === null || i === null) return;
    const n = this.Wr.Yr(!0);
    if (n.Zr || !e.Xr(n.se)) return;
    const o = {
        x: t.It(n.se),
        y: this.Wr.Dt().Rt(n._t, i.Vt)
      },
      r = n.V,
      l = this.Wr.W().lineWidth,
      a = Sn(this.Kr(), r);
    this.Wt.J({
      Cr: r,
      Tr: l,
      Pr: a.Pr,
      Rr: a.Rr,
      ht: a.ht,
      Ze: o
    })
  }
  qr() {
    const t = this.Wt.He();
    if (t !== null) {
      const e = Sn(this.Kr(), t.Cr);
      t.Pr = e.Pr, t.Rr = e.Rr, t.ht = e.ht
    }
  }
  Kr() {
    return this.Ur() ? performance.now() - this.Nr : 2599
  }
}

function Se(s, t) {
  return rr(Math.min(Math.max(s, 12), 30) * t)
}

function je(s, t) {
  switch (s) {
    case "arrowDown":
    case "arrowUp":
      return Se(t, 1);
    case "circle":
      return Se(t, .8);
    case "square":
      return Se(t, .7)
  }
}

function pr(s) {
  return function(t) {
    const e = Math.ceil(t);
    return e % 2 != 0 ? e - 1 : e
  }(Se(s, 1))
}

function xn(s) {
  return Math.max(Se(s, .1), 3)
}

function Mn(s, t, e) {
  return t ? s : e ? Math.ceil(s / 2) : 0
}

function mr(s, t, e, i, n) {
  const o = je("square", e),
    r = (o - 1) / 2,
    l = s - r,
    a = t - r;
  return i >= l && i <= l + o && n >= a && n <= a + o
}

function kn(s, t, e, i) {
  const n = (je("arrowUp", i) - 1) / 2 * e.Gr,
    o = (rr(i / 2) - 1) / 2 * e.Gr;
  t.beginPath(), s ? (t.moveTo(e.nt - n, e.st), t.lineTo(e.nt, e.st - n), t.lineTo(e.nt + n, e.st), t.lineTo(e.nt + o, e.st), t.lineTo(e.nt + o, e.st + n), t.lineTo(e.nt - o, e.st + n), t.lineTo(e.nt - o, e.st)) : (t.moveTo(e.nt - n, e.st), t.lineTo(e.nt, e.st + n), t.lineTo(e.nt + n, e.st), t.lineTo(e.nt + o, e.st), t.lineTo(e.nt + o, e.st - n), t.lineTo(e.nt - o, e.st - n), t.lineTo(e.nt - o, e.st)), t.fill()
}

function Ku(s, t, e, i, n, o) {
  return mr(t, e, i, n, o)
}
class Hu extends gt {
  constructor() {
    super(...arguments), this.zt = null, this.lr = new Le, this.j = -1, this.H = "", this.Jr = ""
  }
  J(t) {
    this.zt = t
  }
  ar(t, e) {
    this.j === t && this.H === e || (this.j = t, this.H = e, this.Jr = ue(t, e), this.lr.ir())
  }
  br(t, e) {
    if (this.zt === null || this.zt.tt === null) return null;
    for (let i = this.zt.tt.from; i < this.zt.tt.to; i++) {
      const n = this.zt.it[i];
      if (Xu(n, t, e)) return {
        gr: n.Qr,
        wr: n.wr
      }
    }
    return null
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: i
  }, n, o) {
    if (this.zt !== null && this.zt.tt !== null) {
      t.textBaseline = "middle", t.font = this.Jr;
      for (let r = this.zt.tt.from; r < this.zt.tt.to; r++) {
        const l = this.zt.it[r];
        l.Kt !== void 0 && (l.Kt.Hi = this.lr.xi(t, l.Kt.th), l.Kt.At = this.j, l.Kt.nt = l.nt - l.Kt.Hi / 2), Ju(l, t, e, i)
      }
    }
  }
}

function Ju(s, t, e, i) {
  t.fillStyle = s.V, s.Kt !== void 0 && function(n, o, r, l, a, h) {
      n.save(), n.scale(a, h), n.fillText(o, r, l), n.restore()
    }(t, s.Kt.th, s.Kt.nt, s.Kt.st, e, i),
    function(n, o, r) {
      if (n.Xs !== 0) {
        switch (n.ih) {
          case "arrowDown":
            return void kn(!1, o, r, n.Xs);
          case "arrowUp":
            return void kn(!0, o, r, n.Xs);
          case "circle":
            return void
            function(l, a, h) {
              const c = (je("circle", h) - 1) / 2;
              l.beginPath(), l.arc(a.nt, a.st, c * a.Gr, 0, 2 * Math.PI, !1), l.fill()
            }(o, r, n.Xs);
          case "square":
            return void
            function(l, a, h) {
              const c = je("square", h),
                u = (c - 1) * a.Gr / 2,
                d = a.nt - u,
                f = a.st - u;
              l.fillRect(d, f, c * a.Gr, c * a.Gr)
            }(o, r, n.Xs)
        }
        n.ih
      }
    }(s, t, function(n, o, r) {
      const l = Math.max(1, Math.floor(o)) % 2 / 2;
      return {
        nt: Math.round(n.nt * o) + l,
        st: n.st * r,
        Gr: o
      }
    }(s, e, i))
}

function Xu(s, t, e) {
  return !(s.Kt === void 0 || ! function(i, n, o, r, l, a) {
    const h = r / 2;
    return l >= i && l <= i + o && a >= n - h && a <= n + h
  }(s.Kt.nt, s.Kt.st, s.Kt.Hi, s.Kt.At, t, e)) || function(i, n, o) {
    if (i.Xs === 0) return !1;
    switch (i.ih) {
      case "arrowDown":
      case "arrowUp":
        return Ku(0, i.nt, i.st, i.Xs, n, o);
      case "circle":
        return function(r, l, a, h, c) {
          const u = 2 + je("circle", a) / 2,
            d = r - h,
            f = l - c;
          return Math.sqrt(d * d + f * f) <= u
        }(i.nt, i.st, i.Xs, n, o);
      case "square":
        return mr(i.nt, i.st, i.Xs, n, o)
    }
  }(s, t, e)
}

function Yu(s, t, e, i, n, o, r, l, a) {
  const h = _t(e) ? e : e.xe,
    c = _t(e) ? e : e.ge,
    u = _t(e) ? e : e.Me,
    d = _t(t.size) ? Math.max(t.size, 0) : 1,
    f = pr(l.he()) * d,
    p = f / 2;
  switch (s.Xs = f, t.position) {
    case "inBar":
      return s.st = r.Rt(h, a), void(s.Kt !== void 0 && (s.Kt.st = s.st + p + o + .6 * n));
    case "aboveBar":
      return s.st = r.Rt(c, a) - p - i.nh, s.Kt !== void 0 && (s.Kt.st = s.st - p - .6 * n, i.nh += 1.2 * n), void(i.nh += f + o);
    case "belowBar":
      return s.st = r.Rt(u, a) + p + i.sh, s.Kt !== void 0 && (s.Kt.st = s.st + p + o + .6 * n, i.sh += 1.2 * n), void(i.sh += f + o)
  }
  t.position
}
class Gu {
  constructor(t, e) {
    this.ft = !0, this.eh = !0, this.rh = !0, this.hh = null, this.ah = null, this.Wt = new Hu, this.Wr = t, this.$i = e, this.zt = {
      it: [],
      tt: null
    }
  }
  bt(t) {
    this.ft = !0, this.rh = !0, t === "data" && (this.eh = !0, this.ah = null)
  }
  gt(t) {
    if (!this.Wr.yt()) return null;
    this.ft && this.oh();
    const e = this.$i.W().layout;
    return this.Wt.ar(e.fontSize, e.fontFamily), this.Wt.J(this.zt), this.Wt
  }
  _h() {
    if (this.rh) {
      if (this.Wr.uh().length > 0) {
        const t = this.$i.St().he(),
          e = xn(t),
          i = 1.5 * pr(t) + 2 * e,
          n = this.dh();
        this.hh = {
          above: Mn(i, n.aboveBar, n.inBar),
          below: Mn(i, n.belowBar, n.inBar)
        }
      } else this.hh = null;
      this.rh = !1
    }
    return this.hh
  }
  dh() {
    return this.ah === null && (this.ah = this.Wr.uh().reduce((t, e) => (t[e.position] || (t[e.position] = !0), t), {
      inBar: !1,
      aboveBar: !1,
      belowBar: !1
    })), this.ah
  }
  oh() {
    const t = this.Wr.Dt(),
      e = this.$i.St(),
      i = this.Wr.uh();
    this.eh && (this.zt.it = i.map(c => ({
      ot: c.time,
      nt: 0,
      st: 0,
      Xs: 0,
      ih: c.shape,
      V: c.color,
      Qr: c.Qr,
      wr: c.id,
      Kt: void 0
    })), this.eh = !1);
    const n = this.$i.W().layout;
    this.zt.tt = null;
    const o = e.Zs();
    if (o === null) return;
    const r = this.Wr.Ct();
    if (r === null || this.zt.it.length === 0) return;
    let l = NaN;
    const a = xn(e.he()),
      h = {
        nh: a,
        sh: a
      };
    this.zt.tt = ur(this.zt.it, o, !0);
    for (let c = this.zt.tt.from; c < this.zt.tt.to; c++) {
      const u = i[c];
      u.time !== l && (h.nh = a, h.sh = a, l = u.time);
      const d = this.zt.it[c];
      d.nt = e.It(u.time), u.text !== void 0 && u.text.length > 0 && (d.Kt = {
        th: u.text,
        nt: 0,
        st: 0,
        Hi: 0,
        At: 0
      });
      const f = this.Wr.fh(u.time);
      f !== null && Yu(d, u, f, h, n.fontSize, a, t, e, r.Vt)
    }
    this.ft = !1
  }
}
class Zu extends Vs {
  constructor(t) {
    super(t)
  }
  kr() {
    const t = this.Mr;
    t.yt = !1;
    const e = this.Ls.W();
    if (!e.priceLineVisible || !this.Ls.yt()) return;
    const i = this.Ls.Yr(e.priceLineSource === 0);
    i.Zr || (t.yt = !0, t.st = i.ki, t.V = this.Ls.ph(i.V), t.et = e.priceLineWidth, t.Nt = e.priceLineStyle)
  }
}
class qu extends Si {
  constructor(t) {
    super(), this.jt = t
  }
  zi(t, e, i) {
    t.yt = !1, e.yt = !1;
    const n = this.jt;
    if (!n.yt()) return;
    const o = n.W(),
      r = o.lastValueVisible,
      l = n.mh() !== "",
      a = o.seriesLastValueMode === 0,
      h = n.Yr(!1);
    if (h.Zr) return;
    r && (t.Kt = this.bh(h, r, a), t.yt = t.Kt.length !== 0), (l || a) && (e.Kt = this.wh(h, r, l, a), e.yt = e.Kt.length > 0);
    const c = n.ph(h.V),
      u = _i(c);
    i.t = u.t, i.ki = h.ki, e.Ot = n.$t().Bt(h.ki / n.Dt().At()), t.Ot = c, t.V = u.i, e.V = u.i
  }
  wh(t, e, i, n) {
    let o = "";
    const r = this.jt.mh();
    return i && r.length !== 0 && (o += `${r} `), e && n && (o += this.jt.Dt().gh() ? t.Mh : t.xh), o.trim()
  }
  bh(t, e, i) {
    return e ? i ? this.jt.Dt().gh() ? t.xh : t.Mh : t.Kt : ""
  }
}

function Cn(s, t, e, i) {
  const n = Number.isFinite(t),
    o = Number.isFinite(e);
  return n && o ? s(t, e) : n || o ? n ? t : e : i
}
class ut {
  constructor(t, e) {
    this.Sh = t, this.kh = e
  }
  yh(t) {
    return t !== null && this.Sh === t.Sh && this.kh === t.kh
  }
  Ch() {
    return new ut(this.Sh, this.kh)
  }
  Th() {
    return this.Sh
  }
  Ph() {
    return this.kh
  }
  Rh() {
    return this.kh - this.Sh
  }
  Ni() {
    return this.kh === this.Sh || Number.isNaN(this.kh) || Number.isNaN(this.Sh)
  }
  ts(t) {
    return t === null ? this : new ut(Cn(Math.min, this.Th(), t.Th(), -1 / 0), Cn(Math.max, this.Ph(), t.Ph(), 1 / 0))
  }
  Dh(t) {
    if (!_t(t) || this.kh - this.Sh === 0) return;
    const e = .5 * (this.kh + this.Sh);
    let i = this.kh - e,
      n = this.Sh - e;
    i *= t, n *= t, this.kh = e + i, this.Sh = e + n
  }
  Vh(t) {
    _t(t) && (this.kh += t, this.Sh += t)
  }
  Oh() {
    return {
      minValue: this.Sh,
      maxValue: this.kh
    }
  }
  static Bh(t) {
    return t === null ? null : new ut(t.minValue, t.maxValue)
  }
}
class ui {
  constructor(t, e) {
    this.Ah = t, this.Ih = e || null
  }
  zh() {
    return this.Ah
  }
  Lh() {
    return this.Ih
  }
  Oh() {
    return this.Ah === null ? null : {
      priceRange: this.Ah.Oh(),
      margins: this.Ih || void 0
    }
  }
  static Bh(t) {
    return t === null ? null : new ui(ut.Bh(t.priceRange), t.margins)
  }
}
class Qu extends Vs {
  constructor(t, e) {
    super(t), this.Eh = e
  }
  kr() {
    const t = this.Mr;
    t.yt = !1;
    const e = this.Eh.W();
    if (!this.Ls.yt() || !e.lineVisible) return;
    const i = this.Eh.Nh();
    i !== null && (t.yt = !0, t.st = i, t.V = e.color, t.et = e.lineWidth, t.Nt = e.lineStyle, t.wr = this.Eh.W().id)
  }
}
class td extends Si {
  constructor(t, e) {
    super(), this.Wr = t, this.Eh = e
  }
  zi(t, e, i) {
    t.yt = !1, e.yt = !1;
    const n = this.Eh.W(),
      o = n.axisLabelVisible,
      r = n.title !== "",
      l = this.Wr;
    if (!o || !l.yt()) return;
    const a = this.Eh.Nh();
    if (a === null) return;
    r && (e.Kt = n.title, e.yt = !0), e.Ot = l.$t().Bt(a / l.Dt().At()), t.Kt = this.Fh(n.price), t.yt = !0;
    const h = _i(n.axisLabelColor || n.color);
    i.t = h.t;
    const c = n.axisLabelTextColor || h.i;
    t.V = c, e.V = c, i.ki = a
  }
  Fh(t) {
    const e = this.Wr.Ct();
    return e === null ? "" : this.Wr.Dt().Fi(t, e.Vt)
  }
}
class ed {
  constructor(t, e) {
    this.Wr = t, this.cn = e, this.Wh = new Qu(t, this), this._r = new td(t, this), this.jh = new fr(this._r, t, t.$t())
  }
  Hh(t) {
    vt(this.cn, t), this.bt(), this.Wr.$t().$h()
  }
  W() {
    return this.cn
  }
  Uh() {
    return this.Wh
  }
  qh() {
    return this.jh
  }
  Yh() {
    return this._r
  }
  bt() {
    this.Wh.bt(), this._r.bt()
  }
  Nh() {
    const t = this.Wr,
      e = t.Dt();
    if (t.$t().St().Ni() || e.Ni()) return null;
    const i = t.Ct();
    return i === null ? null : e.Rt(this.cn.price, i.Vt)
  }
}
class id extends Os {
  constructor(t) {
    super(), this.$i = t
  }
  $t() {
    return this.$i
  }
}
const sd = {
  Bar: (s, t, e, i) => {
    var n;
    const o = t.upColor,
      r = t.downColor,
      l = w(s(e, i)),
      a = se(l.Vt[0]) <= se(l.Vt[3]);
    return {
      ue: (n = l.V) !== null && n !== void 0 ? n : a ? o : r
    }
  },
  Candlestick: (s, t, e, i) => {
    var n, o, r;
    const l = t.upColor,
      a = t.downColor,
      h = t.borderUpColor,
      c = t.borderDownColor,
      u = t.wickUpColor,
      d = t.wickDownColor,
      f = w(s(e, i)),
      p = se(f.Vt[0]) <= se(f.Vt[3]);
    return {
      ue: (n = f.V) !== null && n !== void 0 ? n : p ? l : a,
      Ee: (o = f.Ot) !== null && o !== void 0 ? o : p ? h : c,
      Le: (r = f.Zh) !== null && r !== void 0 ? r : p ? u : d
    }
  },
  Custom: (s, t, e, i) => {
    var n;
    return {
      ue: (n = w(s(e, i)).V) !== null && n !== void 0 ? n : t.color
    }
  },
  Area: (s, t, e, i) => {
    var n, o, r, l;
    const a = w(s(e, i));
    return {
      ue: (n = a.lt) !== null && n !== void 0 ? n : t.lineColor,
      lt: (o = a.lt) !== null && o !== void 0 ? o : t.lineColor,
      Ts: (r = a.Ts) !== null && r !== void 0 ? r : t.topColor,
      Ps: (l = a.Ps) !== null && l !== void 0 ? l : t.bottomColor
    }
  },
  Baseline: (s, t, e, i) => {
    var n, o, r, l, a, h;
    const c = w(s(e, i));
    return {
      ue: c.Vt[3] >= t.baseValue.price ? t.topLineColor : t.bottomLineColor,
      Pe: (n = c.Pe) !== null && n !== void 0 ? n : t.topLineColor,
      Re: (o = c.Re) !== null && o !== void 0 ? o : t.bottomLineColor,
      Se: (r = c.Se) !== null && r !== void 0 ? r : t.topFillColor1,
      ke: (l = c.ke) !== null && l !== void 0 ? l : t.topFillColor2,
      ye: (a = c.ye) !== null && a !== void 0 ? a : t.bottomFillColor1,
      Ce: (h = c.Ce) !== null && h !== void 0 ? h : t.bottomFillColor2
    }
  },
  Line: (s, t, e, i) => {
    var n, o;
    const r = w(s(e, i));
    return {
      ue: (n = r.V) !== null && n !== void 0 ? n : t.color,
      lt: (o = r.V) !== null && o !== void 0 ? o : t.color
    }
  },
  Histogram: (s, t, e, i) => {
    var n;
    return {
      ue: (n = w(s(e, i)).V) !== null && n !== void 0 ? n : t.color
    }
  }
};
class nd {
  constructor(t) {
    this.Xh = (e, i) => i !== void 0 ? i.Vt : this.Wr.In().Kh(e), this.Wr = t, this.Gh = sd[t.Jh()]
  }
  Hs(t, e) {
    return this.Gh(this.Xh, this.Wr.W(), t, e)
  }
}
var En;
(function(s) {
  s[s.NearestLeft = -1] = "NearestLeft", s[s.None = 0] = "None", s[s.NearestRight = 1] = "NearestRight"
})(En || (En = {}));
const Pt = 30;
class od {
  constructor() {
    this.Qh = [], this.tl = new Map, this.il = new Map
  }
  nl() {
    return this.Xs() > 0 ? this.Qh[this.Qh.length - 1] : null
  }
  sl() {
    return this.Xs() > 0 ? this.el(0) : null
  }
  An() {
    return this.Xs() > 0 ? this.el(this.Qh.length - 1) : null
  }
  Xs() {
    return this.Qh.length
  }
  Ni() {
    return this.Xs() === 0
  }
  Xr(t) {
    return this.rl(t, 0) !== null
  }
  Kh(t) {
    return this.hl(t)
  }
  hl(t, e = 0) {
    const i = this.rl(t, e);
    return i === null ? null : Object.assign(Object.assign({}, this.ll(i)), {
      se: this.el(i)
    })
  }
  ie() {
    return this.Qh
  }
  al(t, e, i) {
    if (this.Ni()) return null;
    let n = null;
    for (const o of i) n = Ke(n, this.ol(t, e, o));
    return n
  }
  J(t) {
    this.il.clear(), this.tl.clear(), this.Qh = t
  }
  el(t) {
    return this.Qh[t].se
  }
  ll(t) {
    return this.Qh[t]
  }
  rl(t, e) {
    const i = this._l(t);
    if (i === null && e !== 0) switch (e) {
      case -1:
        return this.ul(t);
      case 1:
        return this.cl(t);
      default:
        throw new TypeError("Unknown search mode")
    }
    return i
  }
  ul(t) {
    let e = this.dl(t);
    return e > 0 && (e -= 1), e !== this.Qh.length && this.el(e) < t ? e : null
  }
  cl(t) {
    const e = this.fl(t);
    return e !== this.Qh.length && t < this.el(e) ? e : null
  }
  _l(t) {
    const e = this.dl(t);
    return e === this.Qh.length || t < this.Qh[e].se ? null : e
  }
  dl(t) {
    return Ve(this.Qh, t, (e, i) => e.se < i)
  }
  fl(t) {
    return cr(this.Qh, t, (e, i) => e.se > i)
  }
  vl(t, e, i) {
    let n = null;
    for (let o = t; o < e; o++) {
      const r = this.Qh[o].Vt[i];
      Number.isNaN(r) || (n === null ? n = {
        pl: r,
        ml: r
      } : (r < n.pl && (n.pl = r), r > n.ml && (n.ml = r)))
    }
    return n
  }
  ol(t, e, i) {
    if (this.Ni()) return null;
    let n = null;
    const o = w(this.sl()),
      r = w(this.An()),
      l = Math.max(t, o),
      a = Math.min(e, r),
      h = Math.ceil(l / Pt) * Pt,
      c = Math.max(h, Math.floor(a / Pt) * Pt);
    {
      const d = this.dl(l),
        f = this.fl(Math.min(a, h, e));
      n = Ke(n, this.vl(d, f, i))
    }
    let u = this.tl.get(i);
    u === void 0 && (u = new Map, this.tl.set(i, u));
    for (let d = Math.max(h + 1, l); d < c; d += Pt) {
      const f = Math.floor(d / Pt);
      let p = u.get(f);
      if (p === void 0) {
        const m = this.dl(f * Pt),
          b = this.fl((f + 1) * Pt - 1);
        p = this.vl(m, b, i), u.set(f, p)
      }
      n = Ke(n, p)
    } {
      const d = this.dl(c),
        f = this.fl(a);
      n = Ke(n, this.vl(d, f, i))
    }
    return n
  }
}

function Ke(s, t) {
  return s === null ? t : t === null ? s : {
    pl: Math.min(s.pl, t.pl),
    ml: Math.max(s.ml, t.ml)
  }
}
class rd {
  constructor(t) {
    this.bl = t
  }
  X(t, e, i) {
    this.bl.draw(t)
  }
  wl(t, e, i) {
    var n, o;
    (o = (n = this.bl).drawBackground) === null || o === void 0 || o.call(n, t)
  }
}
class Ri {
  constructor(t) {
    this.Qe = null, this.wn = t
  }
  gt() {
    var t;
    const e = this.wn.renderer();
    if (e === null) return null;
    if (((t = this.Qe) === null || t === void 0 ? void 0 : t.gl) === e) return this.Qe.Ml;
    const i = new rd(e);
    return this.Qe = {
      gl: e,
      Ml: i
    }, i
  }
  xl() {
    var t, e, i;
    return (i = (e = (t = this.wn).zOrder) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : "normal"
  }
}

function vr(s) {
  var t, e, i, n, o;
  return {
    Kt: s.text(),
    ki: s.coordinate(),
    Si: (t = s.fixedCoordinate) === null || t === void 0 ? void 0 : t.call(s),
    V: s.textColor(),
    t: s.backColor(),
    yt: (i = (e = s.visible) === null || e === void 0 ? void 0 : e.call(s)) === null || i === void 0 || i,
    hi: (o = (n = s.tickVisible) === null || n === void 0 ? void 0 : n.call(s)) === null || o === void 0 || o
  }
}
class ld {
  constructor(t, e) {
    this.Wt = new ir, this.Sl = t, this.kl = e
  }
  gt() {
    return this.Wt.J(Object.assign({
      Hi: this.kl.Hi()
    }, vr(this.Sl))), this.Wt
  }
}
class ad extends Si {
  constructor(t, e) {
    super(), this.Sl = t, this.Li = e
  }
  zi(t, e, i) {
    const n = vr(this.Sl);
    i.t = n.t, t.V = n.V;
    const o = 2 / 12 * this.Li.P();
    i.wi = o, i.gi = o, i.ki = n.ki, i.Si = n.Si, t.Kt = n.Kt, t.yt = n.yt, t.hi = n.hi
  }
}
class hd {
  constructor(t, e) {
    this.yl = null, this.Cl = null, this.Tl = null, this.Pl = null, this.Rl = null, this.Dl = t, this.Wr = e
  }
  Vl() {
    return this.Dl
  }
  Vn() {
    var t, e;
    (e = (t = this.Dl).updateAllViews) === null || e === void 0 || e.call(t)
  }
  Pn() {
    var t, e, i, n;
    const o = (i = (e = (t = this.Dl).paneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((n = this.yl) === null || n === void 0 ? void 0 : n.gl) === o) return this.yl.Ml;
    const r = o.map(l => new Ri(l));
    return this.yl = {
      gl: o,
      Ml: r
    }, r
  }
  Qi() {
    var t, e, i, n;
    const o = (i = (e = (t = this.Dl).timeAxisViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((n = this.Cl) === null || n === void 0 ? void 0 : n.gl) === o) return this.Cl.Ml;
    const r = this.Wr.$t().St(),
      l = o.map(a => new ld(a, r));
    return this.Cl = {
      gl: o,
      Ml: l
    }, l
  }
  Rn() {
    var t, e, i, n;
    const o = (i = (e = (t = this.Dl).priceAxisViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((n = this.Tl) === null || n === void 0 ? void 0 : n.gl) === o) return this.Tl.Ml;
    const r = this.Wr.Dt(),
      l = o.map(a => new ad(a, r));
    return this.Tl = {
      gl: o,
      Ml: l
    }, l
  }
  Ol() {
    var t, e, i, n;
    const o = (i = (e = (t = this.Dl).priceAxisPaneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((n = this.Pl) === null || n === void 0 ? void 0 : n.gl) === o) return this.Pl.Ml;
    const r = o.map(l => new Ri(l));
    return this.Pl = {
      gl: o,
      Ml: r
    }, r
  }
  Bl() {
    var t, e, i, n;
    const o = (i = (e = (t = this.Dl).timeAxisPaneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((n = this.Rl) === null || n === void 0 ? void 0 : n.gl) === o) return this.Rl.Ml;
    const r = o.map(l => new Ri(l));
    return this.Rl = {
      gl: o,
      Ml: r
    }, r
  }
  Al(t, e) {
    var i, n, o;
    return (o = (n = (i = this.Dl).autoscaleInfo) === null || n === void 0 ? void 0 : n.call(i, t, e)) !== null && o !== void 0 ? o : null
  }
  br(t, e) {
    var i, n, o;
    return (o = (n = (i = this.Dl).hitTest) === null || n === void 0 ? void 0 : n.call(i, t, e)) !== null && o !== void 0 ? o : null
  }
}

function Oi(s, t, e, i) {
  s.forEach(n => {
    t(n).forEach(o => {
      o.xl() === e && i.push(o)
    })
  })
}

function Ai(s) {
  return s.Pn()
}

function cd(s) {
  return s.Ol()
}

function ud(s) {
  return s.Bl()
}
class Ws extends id {
  constructor(t, e, i, n, o) {
    super(t), this.zt = new od, this.Wh = new Zu(this), this.Il = [], this.zl = new Bu(this), this.Ll = null, this.El = null, this.Nl = [], this.Fl = [], this.Wl = null, this.jl = [], this.cn = e, this.Hl = i;
    const r = new qu(this);
    this.rn = [r], this.jh = new fr(r, this, t), i !== "Area" && i !== "Line" && i !== "Baseline" || (this.Ll = new Uu(this)), this.$l(), this.Ul(o)
  }
  S() {
    this.Wl !== null && clearTimeout(this.Wl)
  }
  ph(t) {
    return this.cn.priceLineColor || t
  }
  Yr(t) {
    const e = {
        Zr: !0
      },
      i = this.Dt();
    if (this.$t().St().Ni() || i.Ni() || this.zt.Ni()) return e;
    const n = this.$t().St().Zs(),
      o = this.Ct();
    if (n === null || o === null) return e;
    let r, l;
    if (t) {
      const u = this.zt.nl();
      if (u === null) return e;
      r = u, l = u.se
    } else {
      const u = this.zt.hl(n.ui(), -1);
      if (u === null || (r = this.zt.Kh(u.se), r === null)) return e;
      l = u.se
    }
    const a = r.Vt[3],
      h = this.$s().Hs(l, {
        Vt: r
      }),
      c = i.Rt(a, o.Vt);
    return {
      Zr: !1,
      _t: a,
      Kt: i.Fi(a, o.Vt),
      Mh: i.ql(a),
      xh: i.Yl(a, o.Vt),
      V: h.ue,
      ki: c,
      se: l
    }
  }
  $s() {
    return this.El !== null || (this.El = new nd(this)), this.El
  }
  W() {
    return this.cn
  }
  Hh(t) {
    const e = t.priceScaleId;
    e !== void 0 && e !== this.cn.priceScaleId && this.$t().Zl(this, e), vt(this.cn, t), t.priceFormat !== void 0 && (this.$l(), this.$t().Xl()), this.$t().Kl(this), this.$t().Gl(), this.wn.bt("options")
  }
  J(t, e) {
    this.zt.J(t), this.Jl(), this.wn.bt("data"), this.dn.bt("data"), this.Ll !== null && (e && e.Ql ? this.Ll.Hr() : t.length === 0 && this.Ll.jr());
    const i = this.$t().cr(this);
    this.$t().ta(i), this.$t().Kl(this), this.$t().Gl(), this.$t().$h()
  }
  ia(t) {
    this.Nl = t, this.Jl();
    const e = this.$t().cr(this);
    this.dn.bt("data"), this.$t().ta(e), this.$t().Kl(this), this.$t().Gl(), this.$t().$h()
  }
  na() {
    return this.Nl
  }
  uh() {
    return this.Fl
  }
  sa(t) {
    const e = new ed(this, t);
    return this.Il.push(e), this.$t().Kl(this), e
  }
  ea(t) {
    const e = this.Il.indexOf(t);
    e !== -1 && this.Il.splice(e, 1), this.$t().Kl(this)
  }
  Jh() {
    return this.Hl
  }
  Ct() {
    const t = this.ra();
    return t === null ? null : {
      Vt: t.Vt[3],
      ha: t.ot
    }
  }
  ra() {
    const t = this.$t().St().Zs();
    if (t === null) return null;
    const e = t.Vs();
    return this.zt.hl(e, 1)
  }
  In() {
    return this.zt
  }
  fh(t) {
    const e = this.zt.Kh(t);
    return e === null ? null : this.Hl === "Bar" || this.Hl === "Candlestick" || this.Hl === "Custom" ? {
      we: e.Vt[0],
      ge: e.Vt[1],
      Me: e.Vt[2],
      xe: e.Vt[3]
    } : e.Vt[3]
  }
  la(t) {
    const e = [];
    Oi(this.jl, Ai, "top", e);
    const i = this.Ll;
    return i !== null && i.yt() && (this.Wl === null && i.Ur() && (this.Wl = setTimeout(() => {
      this.Wl = null, this.$t().aa()
    }, 0)), i.$r(), e.unshift(i)), e
  }
  Pn() {
    const t = [];
    this.oa() || t.push(this.zl), t.push(this.wn, this.Wh, this.dn);
    const e = this.Il.map(i => i.Uh());
    return t.push(...e), Oi(this.jl, Ai, "normal", t), t
  }
  _a() {
    return this.ua(Ai, "bottom")
  }
  ca(t) {
    return this.ua(cd, t)
  }
  da(t) {
    return this.ua(ud, t)
  }
  fa(t, e) {
    return this.jl.map(i => i.br(t, e)).filter(i => i !== null)
  }
  Ji(t) {
    return [this.jh, ...this.Il.map(e => e.qh())]
  }
  Rn(t, e) {
    if (e !== this.Yi && !this.oa()) return [];
    const i = [...this.rn];
    for (const n of this.Il) i.push(n.Yh());
    return this.jl.forEach(n => {
      i.push(...n.Rn())
    }), i
  }
  Qi() {
    const t = [];
    return this.jl.forEach(e => {
      t.push(...e.Qi())
    }), t
  }
  Al(t, e) {
    if (this.cn.autoscaleInfoProvider !== void 0) {
      const i = this.cn.autoscaleInfoProvider(() => {
        const n = this.va(t, e);
        return n === null ? null : n.Oh()
      });
      return ui.Bh(i)
    }
    return this.va(t, e)
  }
  pa() {
    return this.cn.priceFormat.minMove
  }
  ma() {
    return this.ba
  }
  Vn() {
    var t;
    this.wn.bt(), this.dn.bt();
    for (const e of this.rn) e.bt();
    for (const e of this.Il) e.bt();
    this.Wh.bt(), this.zl.bt(), (t = this.Ll) === null || t === void 0 || t.bt(), this.jl.forEach(e => e.Vn())
  }
  Dt() {
    return w(super.Dt())
  }
  kt(t) {
    if (!((this.Hl === "Line" || this.Hl === "Area" || this.Hl === "Baseline") && this.cn.crosshairMarkerVisible)) return null;
    const e = this.zt.Kh(t);
    return e === null ? null : {
      _t: e.Vt[3],
      ht: this.wa(),
      Ot: this.ga(),
      Pt: this.Ma(),
      Tt: this.xa(t)
    }
  }
  mh() {
    return this.cn.title
  }
  yt() {
    return this.cn.visible
  }
  Sa(t) {
    this.jl.push(new hd(t, this))
  }
  ka(t) {
    this.jl = this.jl.filter(e => e.Vl() !== t)
  }
  ya() {
    if (this.wn instanceof ji) return t => this.wn.Fe(t)
  }
  Ca() {
    if (this.wn instanceof ji) return t => this.wn.We(t)
  }
  oa() {
    return !xi(this.Dt().Ta())
  }
  va(t, e) {
    if (!Ie(t) || !Ie(e) || this.zt.Ni()) return null;
    const i = this.Hl === "Line" || this.Hl === "Area" || this.Hl === "Baseline" || this.Hl === "Histogram" ? [3] : [2, 1],
      n = this.zt.al(t, e, i);
    let o = n !== null ? new ut(n.pl, n.ml) : null;
    if (this.Jh() === "Histogram") {
      const l = this.cn.base,
        a = new ut(l, l);
      o = o !== null ? o.ts(a) : a
    }
    let r = this.dn._h();
    return this.jl.forEach(l => {
      const a = l.Al(t, e);
      if (a != null && a.priceRange) {
        const f = new ut(a.priceRange.minValue, a.priceRange.maxValue);
        o = o !== null ? o.ts(f) : f
      }
      var h, c, u, d;
      a != null && a.margins && (h = r, c = a.margins, r = {
        above: Math.max((u = h == null ? void 0 : h.above) !== null && u !== void 0 ? u : 0, c.above),
        below: Math.max((d = h == null ? void 0 : h.below) !== null && d !== void 0 ? d : 0, c.below)
      })
    }), new ui(o, r)
  }
  wa() {
    switch (this.Hl) {
      case "Line":
      case "Area":
      case "Baseline":
        return this.cn.crosshairMarkerRadius
    }
    return 0
  }
  ga() {
    switch (this.Hl) {
      case "Line":
      case "Area":
      case "Baseline": {
        const t = this.cn.crosshairMarkerBorderColor;
        if (t.length !== 0) return t
      }
    }
    return null
  }
  Ma() {
    switch (this.Hl) {
      case "Line":
      case "Area":
      case "Baseline":
        return this.cn.crosshairMarkerBorderWidth
    }
    return 0
  }
  xa(t) {
    switch (this.Hl) {
      case "Line":
      case "Area":
      case "Baseline": {
        const e = this.cn.crosshairMarkerBackgroundColor;
        if (e.length !== 0) return e
      }
    }
    return this.$s().Hs(t).ue
  }
  $l() {
    switch (this.cn.priceFormat.type) {
      case "custom":
        this.ba = {
          format: this.cn.priceFormat.formatter
        };
        break;
      case "volume":
        this.ba = new bu(this.cn.priceFormat.precision);
        break;
      case "percent":
        this.ba = new sr(this.cn.priceFormat.precision);
        break;
      default: {
        const t = Math.pow(10, this.cn.priceFormat.precision);
        this.ba = new Mi(t, this.cn.priceFormat.minMove * t)
      }
    }
    this.Yi !== null && this.Yi.Pa()
  }
  Jl() {
    const t = this.$t().St();
    if (!t.Ra() || this.zt.Ni()) return void(this.Fl = []);
    const e = w(this.zt.sl());
    this.Fl = this.Nl.map((i, n) => {
      const o = w(t.Da(i.time, !0)),
        r = o < e ? 1 : -1;
      return {
        time: w(this.zt.hl(o, r)).se,
        position: i.position,
        shape: i.shape,
        color: i.color,
        id: i.id,
        Qr: n,
        text: i.text,
        size: i.size,
        originalTime: i.originalTime
      }
    })
  }
  Ul(t) {
    switch (this.dn = new Gu(this, this.$t()), this.Hl) {
      case "Bar":
        this.wn = new Eu(this, this.$t());
        break;
      case "Candlestick":
        this.wn = new $u(this, this.$t());
        break;
      case "Line":
        this.wn = new Au(this, this.$t());
        break;
      case "Custom":
        this.wn = new ji(this, this.$t(), ct(t));
        break;
      case "Area":
        this.wn = new ku(this, this.$t());
        break;
      case "Baseline":
        this.wn = new Pu(this, this.$t());
        break;
      case "Histogram":
        this.wn = new Ou(this, this.$t());
        break;
      default:
        throw Error("Unknown chart style assigned: " + this.Hl)
    }
  }
  ua(t, e) {
    const i = [];
    return Oi(this.jl, t, e, i), i
  }
}
class dd {
  constructor(t) {
    this.cn = t
  }
  Va(t, e, i) {
    let n = t;
    if (this.cn.mode === 0) return n;
    const o = i.vn(),
      r = o.Ct();
    if (r === null) return n;
    const l = o.Rt(t, r),
      a = i.Oa().filter(c => c instanceof Ws).reduce((c, u) => {
        if (i.dr(u) || !u.yt()) return c;
        const d = u.Dt(),
          f = u.In();
        if (d.Ni() || !f.Xr(e)) return c;
        const p = f.Kh(e);
        if (p === null) return c;
        const m = se(u.Ct());
        return c.concat([d.Rt(p.Vt[3], m.Vt)])
      }, []);
    if (a.length === 0) return n;
    a.sort((c, u) => Math.abs(c - l) - Math.abs(u - l));
    const h = a[0];
    return n = o.pn(h, r), n
  }
}
class fd extends gt {
  constructor() {
    super(...arguments), this.zt = null
  }
  J(t) {
    this.zt = t
  }
  K({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i,
    verticalPixelRatio: n
  }) {
    if (this.zt === null) return;
    const o = Math.max(1, Math.floor(i));
    t.lineWidth = o,
      function(r, l) {
        r.save(), r.lineWidth % 2 && r.translate(.5, .5), l(), r.restore()
      }(t, () => {
        const r = w(this.zt);
        if (r.Ba) {
          t.strokeStyle = r.Aa, Xt(t, r.Ia), t.beginPath();
          for (const l of r.za) {
            const a = Math.round(l.La * i);
            t.moveTo(a, -o), t.lineTo(a, e.height + o)
          }
          t.stroke()
        }
        if (r.Ea) {
          t.strokeStyle = r.Na, Xt(t, r.Fa), t.beginPath();
          for (const l of r.Wa) {
            const a = Math.round(l.La * n);
            t.moveTo(-o, a), t.lineTo(e.width + o, a)
          }
          t.stroke()
        }
      })
  }
}
class pd {
  constructor(t) {
    this.Wt = new fd, this.ft = !0, this.tn = t
  }
  bt() {
    this.ft = !0
  }
  gt() {
    if (this.ft) {
      const t = this.tn.$t().W().grid,
        e = {
          Ea: t.horzLines.visible,
          Ba: t.vertLines.visible,
          Na: t.horzLines.color,
          Aa: t.vertLines.color,
          Fa: t.horzLines.style,
          Ia: t.vertLines.style,
          Wa: this.tn.vn().ja(),
          za: (this.tn.$t().St().ja() || []).map(i => ({
            La: i.coord
          }))
        };
      this.Wt.J(e), this.ft = !1
    }
    return this.Wt
  }
}
class md {
  constructor(t) {
    this.wn = new pd(t)
  }
  Uh() {
    return this.wn
  }
}
const Di = {
  Ha: 4,
  $a: 1e-4
};

function ne(s, t) {
  const e = 100 * (s - t) / t;
  return t < 0 ? -e : e
}

function vd(s, t) {
  const e = ne(s.Th(), t),
    i = ne(s.Ph(), t);
  return new ut(e, i)
}

function xe(s, t) {
  const e = 100 * (s - t) / t + 100;
  return t < 0 ? -e : e
}

function gd(s, t) {
  const e = xe(s.Th(), t),
    i = xe(s.Ph(), t);
  return new ut(e, i)
}

function di(s, t) {
  const e = Math.abs(s);
  if (e < 1e-15) return 0;
  const i = Math.log10(e + t.$a) + t.Ha;
  return s < 0 ? -i : i
}

function Me(s, t) {
  const e = Math.abs(s);
  if (e < 1e-15) return 0;
  const i = Math.pow(10, e - t.Ha) - t.$a;
  return s < 0 ? -i : i
}

function me(s, t) {
  if (s === null) return null;
  const e = di(s.Th(), t),
    i = di(s.Ph(), t);
  return new ut(e, i)
}

function He(s, t) {
  if (s === null) return null;
  const e = Me(s.Th(), t),
    i = Me(s.Ph(), t);
  return new ut(e, i)
}

function Vi(s) {
  if (s === null) return Di;
  const t = Math.abs(s.Ph() - s.Th());
  if (t >= 1 || t < 1e-15) return Di;
  const e = Math.ceil(Math.abs(Math.log10(t))),
    i = Di.Ha + e;
  return {
    Ha: i,
    $a: 1 / Math.pow(10, i)
  }
}
class Wi {
  constructor(t, e) {
    if (this.Ua = t, this.qa = e, function(i) {
        if (i < 0) return !1;
        for (let n = i; n > 1; n /= 10)
          if (n % 10 != 0) return !1;
        return !0
      }(this.Ua)) this.Ya = [2, 2.5, 2];
    else {
      this.Ya = [];
      for (let i = this.Ua; i !== 1;) {
        if (i % 2 == 0) this.Ya.push(2), i /= 2;
        else {
          if (i % 5 != 0) throw new Error("unexpected base");
          this.Ya.push(2, 2.5), i /= 5
        }
        if (this.Ya.length > 100) throw new Error("something wrong with base")
      }
    }
  }
  Za(t, e, i) {
    const n = this.Ua === 0 ? 0 : 1 / this.Ua;
    let o = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - e)))),
      r = 0,
      l = this.qa[0];
    for (;;) {
      const u = Ue(o, n, 1e-14) && o > n + 1e-14,
        d = Ue(o, i * l, 1e-14),
        f = Ue(o, 1, 1e-14);
      if (!(u && d && f)) break;
      o /= l, l = this.qa[++r % this.qa.length]
    }
    if (o <= n + 1e-14 && (o = n), o = Math.max(1, o), this.Ya.length > 0 && (a = o, h = 1, c = 1e-14, Math.abs(a - h) < c))
      for (r = 0, l = this.Ya[0]; Ue(o, i * l, 1e-14) && o > n + 1e-14;) o /= l, l = this.Ya[++r % this.Ya.length];
    var a, h, c;
    return o
  }
}
class Tn {
  constructor(t, e, i, n) {
    this.Xa = [], this.Li = t, this.Ua = e, this.Ka = i, this.Ga = n
  }
  Za(t, e) {
    if (t < e) throw new Error("high < low");
    const i = this.Li.At(),
      n = (t - e) * this.Ja() / i,
      o = new Wi(this.Ua, [2, 2.5, 2]),
      r = new Wi(this.Ua, [2, 2, 2.5]),
      l = new Wi(this.Ua, [2.5, 2, 2]),
      a = [];
    return a.push(o.Za(t, e, n), r.Za(t, e, n), l.Za(t, e, n)),
      function(h) {
        if (h.length < 1) throw Error("array is empty");
        let c = h[0];
        for (let u = 1; u < h.length; ++u) h[u] < c && (c = h[u]);
        return c
      }(a)
  }
  Qa() {
    const t = this.Li,
      e = t.Ct();
    if (e === null) return void(this.Xa = []);
    const i = t.At(),
      n = this.Ka(i - 1, e),
      o = this.Ka(0, e),
      r = this.Li.W().entireTextOnly ? this.io() / 2 : 0,
      l = r,
      a = i - 1 - r,
      h = Math.max(n, o),
      c = Math.min(n, o);
    if (h === c) return void(this.Xa = []);
    let u = this.Za(h, c),
      d = h % u;
    d += d < 0 ? u : 0;
    const f = h >= c ? 1 : -1;
    let p = null,
      m = 0;
    for (let b = h - d; b > c; b -= u) {
      const y = this.Ga(b, e, !0);
      p !== null && Math.abs(y - p) < this.Ja() || y < l || y > a || (m < this.Xa.length ? (this.Xa[m].La = y, this.Xa[m].no = t.so(b)) : this.Xa.push({
        La: y,
        no: t.so(b)
      }), m++, p = y, t.eo() && (u = this.Za(b * f, c)))
    }
    this.Xa.length = m
  }
  ja() {
    return this.Xa
  }
  io() {
    return this.Li.P()
  }
  Ja() {
    return Math.ceil(2.5 * this.io())
  }
}

function gr(s) {
  return s.slice().sort((t, e) => w(t.Xi()) - w(e.Xi()))
}
var zn;
(function(s) {
  s[s.Normal = 0] = "Normal", s[s.Logarithmic = 1] = "Logarithmic", s[s.Percentage = 2] = "Percentage", s[s.IndexedTo100 = 3] = "IndexedTo100"
})(zn || (zn = {}));
const Pn = new sr,
  In = new Mi(100, 1);
class bd {
  constructor(t, e, i, n) {
    this.ro = 0, this.ho = null, this.Ah = null, this.lo = null, this.ao = {
      oo: !1,
      _o: null
    }, this.uo = 0, this.co = 0, this.do = new st, this.fo = new st, this.vo = [], this.po = null, this.mo = null, this.bo = null, this.wo = null, this.ba = In, this.Mo = Vi(null), this.xo = t, this.cn = e, this.So = i, this.ko = n, this.yo = new Tn(this, 100, this.Co.bind(this), this.To.bind(this))
  }
  Ta() {
    return this.xo
  }
  W() {
    return this.cn
  }
  Hh(t) {
    if (vt(this.cn, t), this.Pa(), t.mode !== void 0 && this.Po({
        yr: t.mode
      }), t.scaleMargins !== void 0) {
      const e = ct(t.scaleMargins.top),
        i = ct(t.scaleMargins.bottom);
      if (e < 0 || e > 1) throw new Error(`Invalid top margin - expect value between 0 and 1, given=${e}`);
      if (i < 0 || i > 1) throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${i}`);
      if (e + i > 1) throw new Error(`Invalid margins - sum of margins must be less than 1, given=${e+i}`);
      this.Ro(), this.mo = null
    }
  }
  Do() {
    return this.cn.autoScale
  }
  eo() {
    return this.cn.mode === 1
  }
  gh() {
    return this.cn.mode === 2
  }
  Vo() {
    return this.cn.mode === 3
  }
  yr() {
    return {
      Wn: this.cn.autoScale,
      Oo: this.cn.invertScale,
      yr: this.cn.mode
    }
  }
  Po(t) {
    const e = this.yr();
    let i = null;
    t.Wn !== void 0 && (this.cn.autoScale = t.Wn), t.yr !== void 0 && (this.cn.mode = t.yr, t.yr !== 2 && t.yr !== 3 || (this.cn.autoScale = !0), this.ao.oo = !1), e.yr === 1 && t.yr !== e.yr && (function(o, r) {
      if (o === null) return !1;
      const l = Me(o.Th(), r),
        a = Me(o.Ph(), r);
      return isFinite(l) && isFinite(a)
    }(this.Ah, this.Mo) ? (i = He(this.Ah, this.Mo), i !== null && this.Bo(i)) : this.cn.autoScale = !0), t.yr === 1 && t.yr !== e.yr && (i = me(this.Ah, this.Mo), i !== null && this.Bo(i));
    const n = e.yr !== this.cn.mode;
    n && (e.yr === 2 || this.gh()) && this.Pa(), n && (e.yr === 3 || this.Vo()) && this.Pa(), t.Oo !== void 0 && e.Oo !== t.Oo && (this.cn.invertScale = t.Oo, this.Ao()), this.fo.m(e, this.yr())
  }
  Io() {
    return this.fo
  }
  P() {
    return this.So.fontSize
  }
  At() {
    return this.ro
  }
  zo(t) {
    this.ro !== t && (this.ro = t, this.Ro(), this.mo = null)
  }
  Lo() {
    if (this.ho) return this.ho;
    const t = this.At() - this.Eo() - this.No();
    return this.ho = t, t
  }
  zh() {
    return this.Fo(), this.Ah
  }
  Bo(t, e) {
    const i = this.Ah;
    (e || i === null && t !== null || i !== null && !i.yh(t)) && (this.mo = null, this.Ah = t)
  }
  Ni() {
    return this.Fo(), this.ro === 0 || !this.Ah || this.Ah.Ni()
  }
  Wo(t) {
    return this.Oo() ? t : this.At() - 1 - t
  }
  Rt(t, e) {
    return this.gh() ? t = ne(t, e) : this.Vo() && (t = xe(t, e)), this.To(t, e)
  }
  Qs(t, e, i) {
    this.Fo();
    const n = this.No(),
      o = w(this.zh()),
      r = o.Th(),
      l = o.Ph(),
      a = this.Lo() - 1,
      h = this.Oo(),
      c = a / (l - r),
      u = i === void 0 ? 0 : i.from,
      d = i === void 0 ? t.length : i.to,
      f = this.jo();
    for (let p = u; p < d; p++) {
      const m = t[p],
        b = m._t;
      if (isNaN(b)) continue;
      let y = b;
      f !== null && (y = f(m._t, e));
      const g = n + c * (y - r),
        M = h ? g : this.ro - 1 - g;
      m.st = M
    }
  }
  me(t, e, i) {
    this.Fo();
    const n = this.No(),
      o = w(this.zh()),
      r = o.Th(),
      l = o.Ph(),
      a = this.Lo() - 1,
      h = this.Oo(),
      c = a / (l - r),
      u = i === void 0 ? 0 : i.from,
      d = i === void 0 ? t.length : i.to,
      f = this.jo();
    for (let p = u; p < d; p++) {
      const m = t[p];
      let b = m.we,
        y = m.ge,
        g = m.Me,
        M = m.xe;
      f !== null && (b = f(m.we, e), y = f(m.ge, e), g = f(m.Me, e), M = f(m.xe, e));
      let S = n + c * (b - r),
        z = h ? S : this.ro - 1 - S;
      m.ve = z, S = n + c * (y - r), z = h ? S : this.ro - 1 - S, m.ce = z, S = n + c * (g - r), z = h ? S : this.ro - 1 - S, m.de = z, S = n + c * (M - r), z = h ? S : this.ro - 1 - S, m.pe = z
    }
  }
  pn(t, e) {
    const i = this.Co(t, e);
    return this.Ho(i, e)
  }
  Ho(t, e) {
    let i = t;
    return this.gh() ? i = function(n, o) {
      return o < 0 && (n = -n), n / 100 * o + o
    }(i, e) : this.Vo() && (i = function(n, o) {
      return n -= 100, o < 0 && (n = -n), n / 100 * o + o
    }(i, e)), i
  }
  Oa() {
    return this.vo
  }
  $o() {
    if (this.po) return this.po;
    let t = [];
    for (let e = 0; e < this.vo.length; e++) {
      const i = this.vo[e];
      i.Xi() === null && i.Ki(e + 1), t.push(i)
    }
    return t = gr(t), this.po = t, this.po
  }
  Uo(t) {
    this.vo.indexOf(t) === -1 && (this.vo.push(t), this.Pa(), this.qo())
  }
  Yo(t) {
    const e = this.vo.indexOf(t);
    if (e === -1) throw new Error("source is not attached to scale");
    this.vo.splice(e, 1), this.vo.length === 0 && (this.Po({
      Wn: !0
    }), this.Bo(null)), this.Pa(), this.qo()
  }
  Ct() {
    let t = null;
    for (const e of this.vo) {
      const i = e.Ct();
      i !== null && (t === null || i.ha < t.ha) && (t = i)
    }
    return t === null ? null : t.Vt
  }
  Oo() {
    return this.cn.invertScale
  }
  ja() {
    const t = this.Ct() === null;
    if (this.mo !== null && (t || this.mo.Zo === t)) return this.mo.ja;
    this.yo.Qa();
    const e = this.yo.ja();
    return this.mo = {
      ja: e,
      Zo: t
    }, this.do.m(), e
  }
  Xo() {
    return this.do
  }
  Ko(t) {
    this.gh() || this.Vo() || this.bo === null && this.lo === null && (this.Ni() || (this.bo = this.ro - t, this.lo = w(this.zh()).Ch()))
  }
  Go(t) {
    if (this.gh() || this.Vo() || this.bo === null) return;
    this.Po({
      Wn: !1
    }), (t = this.ro - t) < 0 && (t = 0);
    let e = (this.bo + .2 * (this.ro - 1)) / (t + .2 * (this.ro - 1));
    const i = w(this.lo).Ch();
    e = Math.max(e, .1), i.Dh(e), this.Bo(i)
  }
  Jo() {
    this.gh() || this.Vo() || (this.bo = null, this.lo = null)
  }
  Qo(t) {
    this.Do() || this.wo === null && this.lo === null && (this.Ni() || (this.wo = t, this.lo = w(this.zh()).Ch()))
  }
  t_(t) {
    if (this.Do() || this.wo === null) return;
    const e = w(this.zh()).Rh() / (this.Lo() - 1);
    let i = t - this.wo;
    this.Oo() && (i *= -1);
    const n = i * e,
      o = w(this.lo).Ch();
    o.Vh(n), this.Bo(o, !0), this.mo = null
  }
  i_() {
    this.Do() || this.wo !== null && (this.wo = null, this.lo = null)
  }
  ma() {
    return this.ba || this.Pa(), this.ba
  }
  Fi(t, e) {
    switch (this.cn.mode) {
      case 2:
        return this.n_(ne(t, e));
      case 3:
        return this.ma().format(xe(t, e));
      default:
        return this.Fh(t)
    }
  }
  so(t) {
    switch (this.cn.mode) {
      case 2:
        return this.n_(t);
      case 3:
        return this.ma().format(t);
      default:
        return this.Fh(t)
    }
  }
  ql(t) {
    return this.Fh(t, w(this.s_()).ma())
  }
  Yl(t, e) {
    return t = ne(t, e), this.n_(t, Pn)
  }
  e_() {
    return this.vo
  }
  r_(t) {
    this.ao = {
      _o: t,
      oo: !1
    }
  }
  Vn() {
    this.vo.forEach(t => t.Vn())
  }
  Pa() {
    this.mo = null;
    const t = this.s_();
    let e = 100;
    t !== null && (e = Math.round(1 / t.pa())), this.ba = In, this.gh() ? (this.ba = Pn, e = 100) : this.Vo() ? (this.ba = new Mi(100, 1), e = 100) : t !== null && (this.ba = t.ma()), this.yo = new Tn(this, e, this.Co.bind(this), this.To.bind(this)), this.yo.Qa()
  }
  qo() {
    this.po = null
  }
  s_() {
    return this.vo[0] || null
  }
  Eo() {
    return this.Oo() ? this.cn.scaleMargins.bottom * this.At() + this.co : this.cn.scaleMargins.top * this.At() + this.uo
  }
  No() {
    return this.Oo() ? this.cn.scaleMargins.top * this.At() + this.uo : this.cn.scaleMargins.bottom * this.At() + this.co
  }
  Fo() {
    this.ao.oo || (this.ao.oo = !0, this.h_())
  }
  Ro() {
    this.ho = null
  }
  To(t, e) {
    if (this.Fo(), this.Ni()) return 0;
    t = this.eo() && t ? di(t, this.Mo) : t;
    const i = w(this.zh()),
      n = this.No() + (this.Lo() - 1) * (t - i.Th()) / i.Rh();
    return this.Wo(n)
  }
  Co(t, e) {
    if (this.Fo(), this.Ni()) return 0;
    const i = this.Wo(t),
      n = w(this.zh()),
      o = n.Th() + n.Rh() * ((i - this.No()) / (this.Lo() - 1));
    return this.eo() ? Me(o, this.Mo) : o
  }
  Ao() {
    this.mo = null, this.yo.Qa()
  }
  h_() {
    const t = this.ao._o;
    if (t === null) return;
    let e = null;
    const i = this.e_();
    let n = 0,
      o = 0;
    for (const a of i) {
      if (!a.yt()) continue;
      const h = a.Ct();
      if (h === null) continue;
      const c = a.Al(t.Vs(), t.ui());
      let u = c && c.zh();
      if (u !== null) {
        switch (this.cn.mode) {
          case 1:
            u = me(u, this.Mo);
            break;
          case 2:
            u = vd(u, h.Vt);
            break;
          case 3:
            u = gd(u, h.Vt)
        }
        if (e = e === null ? u : e.ts(w(u)), c !== null) {
          const d = c.Lh();
          d !== null && (n = Math.max(n, d.above), o = Math.max(o, d.below))
        }
      }
    }
    if (n === this.uo && o === this.co || (this.uo = n, this.co = o, this.mo = null, this.Ro()), e !== null) {
      if (e.Th() === e.Ph()) {
        const a = this.s_(),
          h = 5 * (a === null || this.gh() || this.Vo() ? 1 : a.pa());
        this.eo() && (e = He(e, this.Mo)), e = new ut(e.Th() - h, e.Ph() + h), this.eo() && (e = me(e, this.Mo))
      }
      if (this.eo()) {
        const a = He(e, this.Mo),
          h = Vi(a);
        if (r = h, l = this.Mo, r.Ha !== l.Ha || r.$a !== l.$a) {
          const c = this.lo !== null ? He(this.lo, this.Mo) : null;
          this.Mo = h, e = me(a, h), c !== null && (this.lo = me(c, h))
        }
      }
      this.Bo(e)
    } else this.Ah === null && (this.Bo(new ut(-.5, .5)), this.Mo = Vi(null));
    var r, l;
    this.ao.oo = !0
  }
  jo() {
    return this.gh() ? ne : this.Vo() ? xe : this.eo() ? t => di(t, this.Mo) : null
  }
  l_(t, e, i) {
    return e === void 0 ? (i === void 0 && (i = this.ma()), i.format(t)) : e(t)
  }
  Fh(t, e) {
    return this.l_(t, this.ko.priceFormatter, e)
  }
  n_(t, e) {
    return this.l_(t, this.ko.percentageFormatter, e)
  }
}
class yd {
  constructor(t, e) {
    this.vo = [], this.a_ = new Map, this.ro = 0, this.o_ = 0, this.__ = 1e3, this.po = null, this.u_ = new st, this.kl = t, this.$i = e, this.c_ = new md(this);
    const i = e.W();
    this.d_ = this.f_("left", i.leftPriceScale), this.v_ = this.f_("right", i.rightPriceScale), this.d_.Io().l(this.p_.bind(this, this.d_), this), this.v_.Io().l(this.p_.bind(this, this.v_), this), this.m_(i)
  }
  m_(t) {
    if (t.leftPriceScale && this.d_.Hh(t.leftPriceScale), t.rightPriceScale && this.v_.Hh(t.rightPriceScale), t.localization && (this.d_.Pa(), this.v_.Pa()), t.overlayPriceScales) {
      const e = Array.from(this.a_.values());
      for (const i of e) {
        const n = w(i[0].Dt());
        n.Hh(t.overlayPriceScales), t.localization && n.Pa()
      }
    }
  }
  b_(t) {
    switch (t) {
      case "left":
        return this.d_;
      case "right":
        return this.v_
    }
    return this.a_.has(t) ? ct(this.a_.get(t))[0].Dt() : null
  }
  S() {
    this.$t().w_().p(this), this.d_.Io().p(this), this.v_.Io().p(this), this.vo.forEach(t => {
      t.S && t.S()
    }), this.u_.m()
  }
  g_() {
    return this.__
  }
  M_(t) {
    this.__ = t
  }
  $t() {
    return this.$i
  }
  Hi() {
    return this.o_
  }
  At() {
    return this.ro
  }
  x_(t) {
    this.o_ = t, this.S_()
  }
  zo(t) {
    this.ro = t, this.d_.zo(t), this.v_.zo(t), this.vo.forEach(e => {
      if (this.dr(e)) {
        const i = e.Dt();
        i !== null && i.zo(t)
      }
    }), this.S_()
  }
  Oa() {
    return this.vo
  }
  dr(t) {
    const e = t.Dt();
    return e === null || this.d_ !== e && this.v_ !== e
  }
  Uo(t, e, i) {
    const n = i !== void 0 ? i : this.y_().k_ + 1;
    this.C_(t, e, n)
  }
  Yo(t) {
    const e = this.vo.indexOf(t);
    Ot(e !== -1, "removeDataSource: invalid data source"), this.vo.splice(e, 1);
    const i = w(t.Dt()).Ta();
    if (this.a_.has(i)) {
      const o = ct(this.a_.get(i)),
        r = o.indexOf(t);
      r !== -1 && (o.splice(r, 1), o.length === 0 && this.a_.delete(i))
    }
    const n = t.Dt();
    n && n.Oa().indexOf(t) >= 0 && n.Yo(t), n !== null && (n.qo(), this.T_(n)), this.po = null
  }
  pr(t) {
    return t === this.d_ ? "left" : t === this.v_ ? "right" : "overlay"
  }
  P_() {
    return this.d_
  }
  R_() {
    return this.v_
  }
  D_(t, e) {
    t.Ko(e)
  }
  V_(t, e) {
    t.Go(e), this.S_()
  }
  O_(t) {
    t.Jo()
  }
  B_(t, e) {
    t.Qo(e)
  }
  A_(t, e) {
    t.t_(e), this.S_()
  }
  I_(t) {
    t.i_()
  }
  S_() {
    this.vo.forEach(t => {
      t.Vn()
    })
  }
  vn() {
    let t = null;
    return this.$i.W().rightPriceScale.visible && this.v_.Oa().length !== 0 ? t = this.v_ : this.$i.W().leftPriceScale.visible && this.d_.Oa().length !== 0 ? t = this.d_ : this.vo.length !== 0 && (t = this.vo[0].Dt()), t === null && (t = this.v_), t
  }
  vr() {
    let t = null;
    return this.$i.W().rightPriceScale.visible ? t = this.v_ : this.$i.W().leftPriceScale.visible && (t = this.d_), t
  }
  T_(t) {
    t !== null && t.Do() && this.z_(t)
  }
  L_(t) {
    const e = this.kl.Zs();
    t.Po({
      Wn: !0
    }), e !== null && t.r_(e), this.S_()
  }
  E_() {
    this.z_(this.d_), this.z_(this.v_)
  }
  N_() {
    this.T_(this.d_), this.T_(this.v_), this.vo.forEach(t => {
      this.dr(t) && this.T_(t.Dt())
    }), this.S_(), this.$i.$h()
  }
  $o() {
    return this.po === null && (this.po = gr(this.vo)), this.po
  }
  F_() {
    return this.u_
  }
  W_() {
    return this.c_
  }
  z_(t) {
    const e = t.e_();
    if (e && e.length > 0 && !this.kl.Ni()) {
      const i = this.kl.Zs();
      i !== null && t.r_(i)
    }
    t.Vn()
  }
  y_() {
    const t = this.$o();
    if (t.length === 0) return {
      j_: 0,
      k_: 0
    };
    let e = 0,
      i = 0;
    for (let n = 0; n < t.length; n++) {
      const o = t[n].Xi();
      o !== null && (o < e && (e = o), o > i && (i = o))
    }
    return {
      j_: e,
      k_: i
    }
  }
  C_(t, e, i) {
    let n = this.b_(e);
    if (n === null && (n = this.f_(e, this.$i.W().overlayPriceScales)), this.vo.push(t), !xi(e)) {
      const o = this.a_.get(e) || [];
      o.push(t), this.a_.set(e, o)
    }
    n.Uo(t), t.Gi(n), t.Ki(i), this.T_(n), this.po = null
  }
  p_(t, e, i) {
    e.yr !== i.yr && this.z_(t)
  }
  f_(t, e) {
    const i = Object.assign({
        visible: !0,
        autoScale: !0
      }, Mt(e)),
      n = new bd(t, i, this.$i.W().layout, this.$i.W().localization);
    return n.zo(this.At()), n
  }
}
class _d {
  constructor(t, e, i = 50) {
    this.Xe = 0, this.Ke = 1, this.Ge = 1, this.Qe = new Map, this.Je = new Map, this.H_ = t, this.U_ = e, this.tr = i
  }
  q_(t) {
    const e = t.time,
      i = this.U_.cacheKey(e),
      n = this.Qe.get(i);
    if (n !== void 0) return n.Y_;
    if (this.Xe === this.tr) {
      const r = this.Je.get(this.Ge);
      this.Je.delete(this.Ge), this.Qe.delete(ct(r)), this.Ge++, this.Xe--
    }
    const o = this.H_(t);
    return this.Qe.set(i, {
      Y_: o,
      er: this.Ke
    }), this.Je.set(this.Ke, i), this.Xe++, this.Ke++, o
  }
}
class ke {
  constructor(t, e) {
    Ot(t <= e, "right should be >= left"), this.Z_ = t, this.X_ = e
  }
  Vs() {
    return this.Z_
  }
  ui() {
    return this.X_
  }
  K_() {
    return this.X_ - this.Z_ + 1
  }
  Xr(t) {
    return this.Z_ <= t && t <= this.X_
  }
  yh(t) {
    return this.Z_ === t.Vs() && this.X_ === t.ui()
  }
}

function $n(s, t) {
  return s === null || t === null ? s === t : s.yh(t)
}
class wd {
  constructor() {
    this.G_ = new Map, this.Qe = null, this.J_ = !1
  }
  Q_(t) {
    this.J_ = t, this.Qe = null
  }
  tu(t, e) {
    this.iu(e), this.Qe = null;
    for (let i = e; i < t.length; ++i) {
      const n = t[i];
      let o = this.G_.get(n.timeWeight);
      o === void 0 && (o = [], this.G_.set(n.timeWeight, o)), o.push({
        index: i,
        time: n.time,
        weight: n.timeWeight,
        originalTime: n.originalTime
      })
    }
  }
  nu(t, e) {
    const i = Math.ceil(e / t);
    return this.Qe !== null && this.Qe.su === i || (this.Qe = {
      ja: this.eu(i),
      su: i
    }), this.Qe.ja
  }
  iu(t) {
    if (t === 0) return void this.G_.clear();
    const e = [];
    this.G_.forEach((i, n) => {
      t <= i[0].index ? e.push(n) : i.splice(Ve(i, t, o => o.index < t), 1 / 0)
    });
    for (const i of e) this.G_.delete(i)
  }
  eu(t) {
    let e = [];
    for (const i of Array.from(this.G_.keys()).sort((n, o) => o - n)) {
      if (!this.G_.get(i)) continue;
      const n = e;
      e = [];
      const o = n.length;
      let r = 0;
      const l = ct(this.G_.get(i)),
        a = l.length;
      let h = 1 / 0,
        c = -1 / 0;
      for (let u = 0; u < a; u++) {
        const d = l[u],
          f = d.index;
        for (; r < o;) {
          const p = n[r],
            m = p.index;
          if (!(m < f)) {
            h = m;
            break
          }
          r++, e.push(p), c = m, h = 1 / 0
        }
        if (h - f >= t && f - c >= t) e.push(d), c = f;
        else if (this.J_) return n
      }
      for (; r < o; r++) e.push(n[r])
    }
    return e
  }
}
class ae {
  constructor(t) {
    this.ru = t
  }
  hu() {
    return this.ru === null ? null : new ke(Math.floor(this.ru.Vs()), Math.ceil(this.ru.ui()))
  }
  lu() {
    return this.ru
  }
  static au() {
    return new ae(null)
  }
}

function Sd(s, t) {
  return s.weight > t.weight ? s : t
}
class xd {
  constructor(t, e, i, n) {
    this.o_ = 0, this.ou = null, this._u = [], this.wo = null, this.bo = null, this.uu = new wd, this.cu = new Map, this.du = ae.au(), this.fu = !0, this.vu = new st, this.pu = new st, this.mu = new st, this.bu = null, this.wu = null, this.gu = [], this.cn = e, this.ko = i, this.Mu = e.rightOffset, this.xu = e.barSpacing, this.$i = t, this.U_ = n, this.Su(), this.uu.Q_(e.uniformDistribution)
  }
  W() {
    return this.cn
  }
  ku(t) {
    vt(this.ko, t), this.yu(), this.Su()
  }
  Hh(t, e) {
    var i;
    vt(this.cn, t), this.cn.fixLeftEdge && this.Cu(), this.cn.fixRightEdge && this.Tu(), t.barSpacing !== void 0 && this.$i.Gn(t.barSpacing), t.rightOffset !== void 0 && this.$i.Jn(t.rightOffset), t.minBarSpacing !== void 0 && this.$i.Gn((i = t.barSpacing) !== null && i !== void 0 ? i : this.xu), this.yu(), this.Su(), this.mu.m()
  }
  mn(t) {
    var e, i;
    return (i = (e = this._u[t]) === null || e === void 0 ? void 0 : e.time) !== null && i !== void 0 ? i : null
  }
  Ui(t) {
    var e;
    return (e = this._u[t]) !== null && e !== void 0 ? e : null
  }
  Da(t, e) {
    if (this._u.length < 1) return null;
    if (this.U_.key(t) > this.U_.key(this._u[this._u.length - 1].time)) return e ? this._u.length - 1 : null;
    const i = Ve(this._u, this.U_.key(t), (n, o) => this.U_.key(n.time) < o);
    return this.U_.key(t) < this.U_.key(this._u[i].time) ? e ? i : null : i
  }
  Ni() {
    return this.o_ === 0 || this._u.length === 0 || this.ou === null
  }
  Ra() {
    return this._u.length > 0
  }
  Zs() {
    return this.Pu(), this.du.hu()
  }
  Ru() {
    return this.Pu(), this.du.lu()
  }
  Du() {
    const t = this.Zs();
    if (t === null) return null;
    const e = {
      from: t.Vs(),
      to: t.ui()
    };
    return this.Vu(e)
  }
  Vu(t) {
    const e = Math.round(t.from),
      i = Math.round(t.to),
      n = w(this.Ou()),
      o = w(this.Bu());
    return {
      from: w(this.Ui(Math.max(n, e))),
      to: w(this.Ui(Math.min(o, i)))
    }
  }
  Au(t) {
    return {
      from: w(this.Da(t.from, !0)),
      to: w(this.Da(t.to, !0))
    }
  }
  Hi() {
    return this.o_
  }
  x_(t) {
    if (!isFinite(t) || t <= 0 || this.o_ === t) return;
    const e = this.Ru(),
      i = this.o_;
    if (this.o_ = t, this.fu = !0, this.cn.lockVisibleTimeRangeOnResize && i !== 0) {
      const n = this.xu * t / i;
      this.xu = n
    }
    if (this.cn.fixLeftEdge && e !== null && e.Vs() <= 0) {
      const n = i - t;
      this.Mu -= Math.round(n / this.xu) + 1, this.fu = !0
    }
    this.Iu(), this.zu()
  }
  It(t) {
    if (this.Ni() || !Ie(t)) return 0;
    const e = this.Lu() + this.Mu - t;
    return this.o_ - (e + .5) * this.xu - 1
  }
  Js(t, e) {
    const i = this.Lu(),
      n = e === void 0 ? 0 : e.from,
      o = e === void 0 ? t.length : e.to;
    for (let r = n; r < o; r++) {
      const l = t[r].ot,
        a = i + this.Mu - l,
        h = this.o_ - (a + .5) * this.xu - 1;
      t[r].nt = h
    }
  }
  Eu(t) {
    return Math.ceil(this.Nu(t))
  }
  Jn(t) {
    this.fu = !0, this.Mu = t, this.zu(), this.$i.Fu(), this.$i.$h()
  }
  he() {
    return this.xu
  }
  Gn(t) {
    this.Wu(t), this.zu(), this.$i.Fu(), this.$i.$h()
  }
  ju() {
    return this.Mu
  }
  ja() {
    if (this.Ni()) return null;
    if (this.wu !== null) return this.wu;
    const t = this.xu,
      e = 5 * (this.$i.W().layout.fontSize + 4) / 8 * (this.cn.tickMarkMaxCharacterLength || 8),
      i = Math.round(e / t),
      n = w(this.Zs()),
      o = Math.max(n.Vs(), n.Vs() - i),
      r = Math.max(n.ui(), n.ui() - i),
      l = this.uu.nu(t, e),
      a = this.Ou() + i,
      h = this.Bu() - i,
      c = this.Hu(),
      u = this.cn.fixLeftEdge || c,
      d = this.cn.fixRightEdge || c;
    let f = 0;
    for (const p of l) {
      if (!(o <= p.index && p.index <= r)) continue;
      let m;
      f < this.gu.length ? (m = this.gu[f], m.coord = this.It(p.index), m.label = this.$u(p), m.weight = p.weight) : (m = {
        needAlignCoordinate: !1,
        coord: this.It(p.index),
        label: this.$u(p),
        weight: p.weight
      }, this.gu.push(m)), this.xu > e / 2 && !c ? m.needAlignCoordinate = !1 : m.needAlignCoordinate = u && p.index <= a || d && p.index >= h, f++
    }
    return this.gu.length = f, this.wu = this.gu, this.gu
  }
  Uu() {
    this.fu = !0, this.Gn(this.cn.barSpacing), this.Jn(this.cn.rightOffset)
  }
  qu(t) {
    this.fu = !0, this.ou = t, this.zu(), this.Cu()
  }
  Yu(t, e) {
    const i = this.Nu(t),
      n = this.he(),
      o = n + e * (n / 10);
    this.Gn(o), this.cn.rightBarStaysOnScroll || this.Jn(this.ju() + (i - this.Nu(t)))
  }
  Ko(t) {
    this.wo && this.i_(), this.bo === null && this.bu === null && (this.Ni() || (this.bo = t, this.Zu()))
  }
  Go(t) {
    if (this.bu === null) return;
    const e = ms(this.o_ - t, 0, this.o_),
      i = ms(this.o_ - w(this.bo), 0, this.o_);
    e !== 0 && i !== 0 && this.Gn(this.bu.he * e / i)
  }
  Jo() {
    this.bo !== null && (this.bo = null, this.Xu())
  }
  Qo(t) {
    this.wo === null && this.bu === null && (this.Ni() || (this.wo = t, this.Zu()))
  }
  t_(t) {
    if (this.wo === null) return;
    const e = (this.wo - t) / this.he();
    this.Mu = w(this.bu).ju + e, this.fu = !0, this.zu()
  }
  i_() {
    this.wo !== null && (this.wo = null, this.Xu())
  }
  Ku() {
    this.Gu(this.cn.rightOffset)
  }
  Gu(t, e = 400) {
    if (!isFinite(t)) throw new RangeError("offset is required and must be finite number");
    if (!isFinite(e) || e <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
    const i = this.Mu,
      n = performance.now();
    this.$i.Zn({
      Ju: o => (o - n) / e >= 1,
      Qu: o => {
        const r = (o - n) / e;
        return r >= 1 ? t : i + (t - i) * r
      }
    })
  }
  bt(t, e) {
    this.fu = !0, this._u = t, this.uu.tu(t, e), this.zu()
  }
  tc() {
    return this.vu
  }
  nc() {
    return this.pu
  }
  sc() {
    return this.mu
  }
  Lu() {
    return this.ou || 0
  }
  ec(t) {
    const e = t.K_();
    this.Wu(this.o_ / e), this.Mu = t.ui() - this.Lu(), this.zu(), this.fu = !0, this.$i.Fu(), this.$i.$h()
  }
  rc() {
    const t = this.Ou(),
      e = this.Bu();
    t !== null && e !== null && this.ec(new ke(t, e + this.cn.rightOffset))
  }
  hc(t) {
    const e = new ke(t.from, t.to);
    this.ec(e)
  }
  qi(t) {
    return this.ko.timeFormatter !== void 0 ? this.ko.timeFormatter(t.originalTime) : this.U_.formatHorzItem(t.time)
  }
  Hu() {
    const {
      handleScroll: t,
      handleScale: e
    } = this.$i.W();
    return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || e.axisDoubleClickReset.time || e.axisPressedMouseMove.time || e.mouseWheel || e.pinch)
  }
  Ou() {
    return this._u.length === 0 ? null : 0
  }
  Bu() {
    return this._u.length === 0 ? null : this._u.length - 1
  }
  lc(t) {
    return (this.o_ - 1 - t) / this.xu
  }
  Nu(t) {
    const e = this.lc(t),
      i = this.Lu() + this.Mu - e;
    return Math.round(1e6 * i) / 1e6
  }
  Wu(t) {
    const e = this.xu;
    this.xu = t, this.Iu(), e !== this.xu && (this.fu = !0, this.ac())
  }
  Pu() {
    if (!this.fu) return;
    if (this.fu = !1, this.Ni()) return void this.oc(ae.au());
    const t = this.Lu(),
      e = this.o_ / this.xu,
      i = this.Mu + t,
      n = new ke(i - e + 1, i);
    this.oc(new ae(n))
  }
  Iu() {
    const t = this._c();
    if (this.xu < t && (this.xu = t, this.fu = !0), this.o_ !== 0) {
      const e = .5 * this.o_;
      this.xu > e && (this.xu = e, this.fu = !0)
    }
  }
  _c() {
    return this.cn.fixLeftEdge && this.cn.fixRightEdge && this._u.length !== 0 ? this.o_ / this._u.length : this.cn.minBarSpacing
  }
  zu() {
    const t = this.uc();
    this.Mu > t && (this.Mu = t, this.fu = !0);
    const e = this.cc();
    e !== null && this.Mu < e && (this.Mu = e, this.fu = !0)
  }
  cc() {
    const t = this.Ou(),
      e = this.ou;
    return t === null || e === null ? null : t - e - 1 + (this.cn.fixLeftEdge ? this.o_ / this.xu : Math.min(2, this._u.length))
  }
  uc() {
    return this.cn.fixRightEdge ? 0 : this.o_ / this.xu - Math.min(2, this._u.length)
  }
  Zu() {
    this.bu = {
      he: this.he(),
      ju: this.ju()
    }
  }
  Xu() {
    this.bu = null
  }
  $u(t) {
    let e = this.cu.get(t.weight);
    return e === void 0 && (e = new _d(i => this.dc(i), this.U_), this.cu.set(t.weight, e)), e.q_(t)
  }
  dc(t) {
    return this.U_.formatTickmark(t, this.ko)
  }
  oc(t) {
    const e = this.du;
    this.du = t, $n(e.hu(), this.du.hu()) || this.vu.m(), $n(e.lu(), this.du.lu()) || this.pu.m(), this.ac()
  }
  ac() {
    this.wu = null
  }
  yu() {
    this.ac(), this.cu.clear()
  }
  Su() {
    this.U_.updateFormatter(this.ko)
  }
  Cu() {
    if (!this.cn.fixLeftEdge) return;
    const t = this.Ou();
    if (t === null) return;
    const e = this.Zs();
    if (e === null) return;
    const i = e.Vs() - t;
    if (i < 0) {
      const n = this.Mu - i - 1;
      this.Jn(n)
    }
    this.Iu()
  }
  Tu() {
    this.zu(), this.Iu()
  }
}
class Md {
  X(t, e, i) {
    t.useMediaCoordinateSpace(n => this.K(n, e, i))
  }
  wl(t, e, i) {
    t.useMediaCoordinateSpace(n => this.fc(n, e, i))
  }
  fc(t, e, i) {}
}
class kd extends Md {
  constructor(t) {
    super(), this.vc = new Map, this.zt = t
  }
  K(t) {}
  fc(t) {
    if (!this.zt.yt) return;
    const {
      context: e,
      mediaSize: i
    } = t;
    let n = 0;
    for (const r of this.zt.mc) {
      if (r.Kt.length === 0) continue;
      e.font = r.R;
      const l = this.bc(e, r.Kt);
      l > i.width ? r.Yu = i.width / l : r.Yu = 1, n += r.wc * r.Yu
    }
    let o = 0;
    switch (this.zt.gc) {
      case "top":
        o = 0;
        break;
      case "center":
        o = Math.max((i.height - n) / 2, 0);
        break;
      case "bottom":
        o = Math.max(i.height - n, 0)
    }
    e.fillStyle = this.zt.V;
    for (const r of this.zt.mc) {
      e.save();
      let l = 0;
      switch (this.zt.Mc) {
        case "left":
          e.textAlign = "left", l = r.wc / 2;
          break;
        case "center":
          e.textAlign = "center", l = i.width / 2;
          break;
        case "right":
          e.textAlign = "right", l = i.width - 1 - r.wc / 2
      }
      e.translate(l, o), e.textBaseline = "top", e.font = r.R, e.scale(r.Yu, r.Yu), e.fillText(r.Kt, 0, r.xc), e.restore(), o += r.wc * r.Yu
    }
  }
  bc(t, e) {
    const i = this.Sc(t.font);
    let n = i.get(e);
    return n === void 0 && (n = t.measureText(e).width, i.set(e, n)), n
  }
  Sc(t) {
    let e = this.vc.get(t);
    return e === void 0 && (e = new Map, this.vc.set(t, e)), e
  }
}
class Cd {
  constructor(t) {
    this.ft = !0, this.Ft = {
      yt: !1,
      V: "",
      mc: [],
      gc: "center",
      Mc: "center"
    }, this.Wt = new kd(this.Ft), this.jt = t
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.Wt
  }
  Mt() {
    const t = this.jt.W(),
      e = this.Ft;
    e.yt = t.visible, e.yt && (e.V = t.color, e.Mc = t.horzAlign, e.gc = t.vertAlign, e.mc = [{
      Kt: t.text,
      R: ue(t.fontSize, t.fontFamily, t.fontStyle),
      wc: 1.2 * t.fontSize,
      xc: 0,
      Yu: 0
    }])
  }
}
class Ed extends Os {
  constructor(t, e) {
    super(), this.cn = e, this.wn = new Cd(this)
  }
  Rn() {
    return []
  }
  Pn() {
    return [this.wn]
  }
  W() {
    return this.cn
  }
  Vn() {
    this.wn.bt()
  }
}
var Ln, jn, Rn, On, An;
(function(s) {
  s[s.OnTouchEnd = 0] = "OnTouchEnd", s[s.OnNextTap = 1] = "OnNextTap"
})(Ln || (Ln = {}));
class Td {
  constructor(t, e, i) {
    this.kc = [], this.yc = [], this.o_ = 0, this.Cc = null, this.Tc = new st, this.Pc = new st, this.Rc = null, this.Dc = t, this.cn = e, this.U_ = i, this.Vc = new ru(this), this.kl = new xd(this, e.timeScale, this.cn.localization, i), this.vt = new gu(this, e.crosshair), this.Oc = new dd(e.crosshair), this.Bc = new Ed(this, e.watermark), this.Ac(), this.kc[0].M_(2e3), this.Ic = this.zc(0), this.Lc = this.zc(1)
  }
  Xl() {
    this.Ec(at.es())
  }
  $h() {
    this.Ec(at.ss())
  }
  aa() {
    this.Ec(new at(1))
  }
  Kl(t) {
    const e = this.Nc(t);
    this.Ec(e)
  }
  Fc() {
    return this.Cc
  }
  Wc(t) {
    const e = this.Cc;
    this.Cc = t, e !== null && this.Kl(e.jc), t !== null && this.Kl(t.jc)
  }
  W() {
    return this.cn
  }
  Hh(t) {
    vt(this.cn, t), this.kc.forEach(e => e.m_(t)), t.timeScale !== void 0 && this.kl.Hh(t.timeScale), t.localization !== void 0 && this.kl.ku(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Tc.m(), this.Ic = this.zc(0), this.Lc = this.zc(1), this.Xl()
  }
  Hc(t, e) {
    if (t === "left") return void this.Hh({
      leftPriceScale: e
    });
    if (t === "right") return void this.Hh({
      rightPriceScale: e
    });
    const i = this.$c(t);
    i !== null && (i.Dt.Hh(e), this.Tc.m())
  }
  $c(t) {
    for (const e of this.kc) {
      const i = e.b_(t);
      if (i !== null) return {
        Ht: e,
        Dt: i
      }
    }
    return null
  }
  St() {
    return this.kl
  }
  Uc() {
    return this.kc
  }
  qc() {
    return this.Bc
  }
  Yc() {
    return this.vt
  }
  Zc() {
    return this.Pc
  }
  Xc(t, e) {
    t.zo(e), this.Fu()
  }
  x_(t) {
    this.o_ = t, this.kl.x_(this.o_), this.kc.forEach(e => e.x_(t)), this.Fu()
  }
  Ac(t) {
    const e = new yd(this.kl, this);
    t !== void 0 ? this.kc.splice(t, 0, e) : this.kc.push(e);
    const i = t === void 0 ? this.kc.length - 1 : t,
      n = at.es();
    return n.Nn(i, {
      Fn: 0,
      Wn: !0
    }), this.Ec(n), e
  }
  D_(t, e, i) {
    t.D_(e, i)
  }
  V_(t, e, i) {
    t.V_(e, i), this.Gl(), this.Ec(this.Kc(t, 2))
  }
  O_(t, e) {
    t.O_(e), this.Ec(this.Kc(t, 2))
  }
  B_(t, e, i) {
    e.Do() || t.B_(e, i)
  }
  A_(t, e, i) {
    e.Do() || (t.A_(e, i), this.Gl(), this.Ec(this.Kc(t, 2)))
  }
  I_(t, e) {
    e.Do() || (t.I_(e), this.Ec(this.Kc(t, 2)))
  }
  L_(t, e) {
    t.L_(e), this.Ec(this.Kc(t, 2))
  }
  Gc(t) {
    this.kl.Ko(t)
  }
  Jc(t, e) {
    const i = this.St();
    if (i.Ni() || e === 0) return;
    const n = i.Hi();
    t = Math.max(1, Math.min(t, n)), i.Yu(t, e), this.Fu()
  }
  Qc(t) {
    this.td(0), this.nd(t), this.sd()
  }
  ed(t) {
    this.kl.Go(t), this.Fu()
  }
  rd() {
    this.kl.Jo(), this.$h()
  }
  td(t) {
    this.kl.Qo(t)
  }
  nd(t) {
    this.kl.t_(t), this.Fu()
  }
  sd() {
    this.kl.i_(), this.$h()
  }
  wt() {
    return this.yc
  }
  hd(t, e, i, n, o) {
    this.vt.gn(t, e);
    let r = NaN,
      l = this.kl.Eu(t);
    const a = this.kl.Zs();
    a !== null && (l = Math.min(Math.max(a.Vs(), l), a.ui()));
    const h = n.vn(),
      c = h.Ct();
    c !== null && (r = h.pn(e, c)), r = this.Oc.Va(r, l, n), this.vt.kn(l, r, n), this.aa(), o || this.Pc.m(this.vt.xt(), {
      x: t,
      y: e
    }, i)
  }
  ld(t, e, i) {
    const n = i.vn(),
      o = n.Ct(),
      r = n.Rt(t, w(o)),
      l = this.kl.Da(e, !0),
      a = this.kl.It(w(l));
    this.hd(a, r, null, i, !0)
  }
  ad(t) {
    this.Yc().Cn(), this.aa(), t || this.Pc.m(null, null, null)
  }
  Gl() {
    const t = this.vt.Ht();
    if (t !== null) {
      const e = this.vt.xn(),
        i = this.vt.Sn();
      this.hd(e, i, null, t)
    }
    this.vt.Vn()
  }
  od(t, e, i) {
    const n = this.kl.mn(0);
    e !== void 0 && i !== void 0 && this.kl.bt(e, i);
    const o = this.kl.mn(0),
      r = this.kl.Lu(),
      l = this.kl.Zs();
    if (l !== null && n !== null && o !== null) {
      const a = l.Xr(r),
        h = this.U_.key(n) > this.U_.key(o),
        c = t !== null && t > r && !h,
        u = this.kl.W().allowShiftVisibleRangeOnWhitespaceReplacement,
        d = a && (i !== void 0 || u) && this.kl.W().shiftVisibleRangeOnNewBar;
      if (c && !d) {
        const f = t - r;
        this.kl.Jn(this.kl.ju() - f)
      }
    }
    this.kl.qu(t)
  }
  ta(t) {
    t !== null && t.N_()
  }
  cr(t) {
    const e = this.kc.find(i => i.$o().includes(t));
    return e === void 0 ? null : e
  }
  Fu() {
    this.Bc.Vn(), this.kc.forEach(t => t.N_()), this.Gl()
  }
  S() {
    this.kc.forEach(t => t.S()), this.kc.length = 0, this.cn.localization.priceFormatter = void 0, this.cn.localization.percentageFormatter = void 0, this.cn.localization.timeFormatter = void 0
  }
  _d() {
    return this.Vc
  }
  mr() {
    return this.Vc.W()
  }
  w_() {
    return this.Tc
  }
  ud(t, e, i) {
    const n = this.kc[0],
      o = this.dd(e, t, n, i);
    return this.yc.push(o), this.yc.length === 1 ? this.Xl() : this.$h(), o
  }
  fd(t) {
    const e = this.cr(t),
      i = this.yc.indexOf(t);
    Ot(i !== -1, "Series not found"), this.yc.splice(i, 1), w(e).Yo(t), t.S && t.S()
  }
  Zl(t, e) {
    const i = w(this.cr(t));
    i.Yo(t);
    const n = this.$c(e);
    if (n === null) {
      const o = t.Xi();
      i.Uo(t, e, o)
    } else {
      const o = n.Ht === i ? t.Xi() : void 0;
      n.Ht.Uo(t, e, o)
    }
  }
  rc() {
    const t = at.ss();
    t.$n(), this.Ec(t)
  }
  vd(t) {
    const e = at.ss();
    e.Yn(t), this.Ec(e)
  }
  Kn() {
    const t = at.ss();
    t.Kn(), this.Ec(t)
  }
  Gn(t) {
    const e = at.ss();
    e.Gn(t), this.Ec(e)
  }
  Jn(t) {
    const e = at.ss();
    e.Jn(t), this.Ec(e)
  }
  Zn(t) {
    const e = at.ss();
    e.Zn(t), this.Ec(e)
  }
  Un() {
    const t = at.ss();
    t.Un(), this.Ec(t)
  }
  pd() {
    return this.cn.rightPriceScale.visible ? "right" : "left"
  }
  md() {
    return this.Lc
  }
  q() {
    return this.Ic
  }
  Bt(t) {
    const e = this.Lc,
      i = this.Ic;
    if (e === i) return e;
    if (t = Math.max(0, Math.min(100, Math.round(100 * t))), this.Rc === null || this.Rc.Ts !== i || this.Rc.Ps !== e) this.Rc = {
      Ts: i,
      Ps: e,
      bd: new Map
    };
    else {
      const o = this.Rc.bd.get(t);
      if (o !== void 0) return o
    }
    const n = function(o, r, l) {
      const [a, h, c, u] = Pe(o), [d, f, p, m] = Pe(r), b = [dt(a + l * (d - a)), dt(h + l * (f - h)), dt(c + l * (p - c)), Qo(u + l * (m - u))];
      return `rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]})`
    }(i, e, t / 100);
    return this.Rc.bd.set(t, n), n
  }
  Kc(t, e) {
    const i = new at(e);
    if (t !== null) {
      const n = this.kc.indexOf(t);
      i.Nn(n, {
        Fn: e
      })
    }
    return i
  }
  Nc(t, e) {
    return e === void 0 && (e = 2), this.Kc(this.cr(t), e)
  }
  Ec(t) {
    this.Dc && this.Dc(t), this.kc.forEach(e => e.W_().Uh().bt())
  }
  dd(t, e, i, n) {
    const o = new Ws(this, t, e, i, n),
      r = t.priceScaleId !== void 0 ? t.priceScaleId : this.pd();
    return i.Uo(o, r), xi(r) || o.Hh(t), o
  }
  zc(t) {
    const e = this.cn.layout;
    return e.background.type === "gradient" ? t === 0 ? e.background.topColor : e.background.bottomColor : e.background.color
  }
}

function vs(s) {
  return !_t(s) && !De(s)
}

function br(s) {
  return _t(s)
}(function(s) {
  s[s.Disabled = 0] = "Disabled", s[s.Continuous = 1] = "Continuous", s[s.OnDataUpdate = 2] = "OnDataUpdate"
})(jn || (jn = {})),
function(s) {
  s[s.LastBar = 0] = "LastBar", s[s.LastVisible = 1] = "LastVisible"
}(Rn || (Rn = {})),
function(s) {
  s.Solid = "solid", s.VerticalGradient = "gradient"
}(On || (On = {})),
function(s) {
  s[s.Year = 0] = "Year", s[s.Month = 1] = "Month", s[s.DayOfMonth = 2] = "DayOfMonth", s[s.Time = 3] = "Time", s[s.TimeWithSeconds = 4] = "TimeWithSeconds"
}(An || (An = {}));
const Dn = s => s.getUTCFullYear();

function zd(s, t, e) {
  return t.replace(/yyyy/g, (i => kt(Dn(i), 4))(s)).replace(/yy/g, (i => kt(Dn(i) % 100, 2))(s)).replace(/MMMM/g, ((i, n) => new Date(i.getUTCFullYear(), i.getUTCMonth(), 1).toLocaleString(n, {
    month: "long"
  }))(s, e)).replace(/MMM/g, ((i, n) => new Date(i.getUTCFullYear(), i.getUTCMonth(), 1).toLocaleString(n, {
    month: "short"
  }))(s, e)).replace(/MM/g, (i => kt((n => n.getUTCMonth() + 1)(i), 2))(s)).replace(/dd/g, (i => kt((n => n.getUTCDate())(i), 2))(s))
}
class yr {
  constructor(t = "yyyy-MM-dd", e = "default") {
    this.wd = t, this.gd = e
  }
  q_(t) {
    return zd(t, this.wd, this.gd)
  }
}
class Pd {
  constructor(t) {
    this.Md = t || "%h:%m:%s"
  }
  q_(t) {
    return this.Md.replace("%h", kt(t.getUTCHours(), 2)).replace("%m", kt(t.getUTCMinutes(), 2)).replace("%s", kt(t.getUTCSeconds(), 2))
  }
}
const Id = {
  xd: "yyyy-MM-dd",
  Sd: "%h:%m:%s",
  kd: " ",
  yd: "default"
};
class $d {
  constructor(t = {}) {
    const e = Object.assign(Object.assign({}, Id), t);
    this.Cd = new yr(e.xd, e.yd), this.Td = new Pd(e.Sd), this.Pd = e.kd
  }
  q_(t) {
    return `${this.Cd.q_(t)}${this.Pd}${this.Td.q_(t)}`
  }
}

function Je(s) {
  return 60 * s * 60 * 1e3
}

function Bi(s) {
  return 60 * s * 1e3
}
const Xe = [{
  Rd: (Vn = 1, 1e3 * Vn),
  Dd: 10
}, {
  Rd: Bi(1),
  Dd: 20
}, {
  Rd: Bi(5),
  Dd: 21
}, {
  Rd: Bi(30),
  Dd: 22
}, {
  Rd: Je(1),
  Dd: 30
}, {
  Rd: Je(3),
  Dd: 31
}, {
  Rd: Je(6),
  Dd: 32
}, {
  Rd: Je(12),
  Dd: 33
}];
var Vn;

function Wn(s, t) {
  if (s.getUTCFullYear() !== t.getUTCFullYear()) return 70;
  if (s.getUTCMonth() !== t.getUTCMonth()) return 60;
  if (s.getUTCDate() !== t.getUTCDate()) return 50;
  for (let e = Xe.length - 1; e >= 0; --e)
    if (Math.floor(t.getTime() / Xe[e].Rd) !== Math.floor(s.getTime() / Xe[e].Rd)) return Xe[e].Dd;
  return 0
}

function Ni(s) {
  let t = s;
  if (De(s) && (t = Bs(s)), !vs(t)) throw new Error("time must be of type BusinessDay");
  const e = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
  return {
    Vd: Math.round(e.getTime() / 1e3),
    Od: t
  }
}

function Bn(s) {
  if (!br(s)) throw new Error("time must be of type isUTCTimestamp");
  return {
    Vd: s
  }
}

function Bs(s) {
  const t = new Date(s);
  if (isNaN(t.getTime())) throw new Error(`Invalid date string=${s}, expected format=yyyy-mm-dd`);
  return {
    day: t.getUTCDate(),
    month: t.getUTCMonth() + 1,
    year: t.getUTCFullYear()
  }
}

function Nn(s) {
  De(s.time) && (s.time = Bs(s.time))
}
class Fn {
  options() {
    return this.cn
  }
  setOptions(t) {
    this.cn = t, this.updateFormatter(t.localization)
  }
  preprocessData(t) {
    Array.isArray(t) ? function(e) {
      e.forEach(Nn)
    }(t) : Nn(t)
  }
  createConverterToInternalObj(t) {
    return w(function(e) {
      return e.length === 0 ? null : vs(e[0].time) || De(e[0].time) ? Ni : Bn
    }(t))
  }
  key(t) {
    return typeof t == "object" && "Vd" in t ? t.Vd : this.key(this.convertHorzItemToInternal(t))
  }
  cacheKey(t) {
    const e = t;
    return e.Od === void 0 ? new Date(1e3 * e.Vd).getTime() : new Date(Date.UTC(e.Od.year, e.Od.month - 1, e.Od.day)).getTime()
  }
  convertHorzItemToInternal(t) {
    return br(e = t) ? Bn(e) : vs(e) ? Ni(e) : Ni(Bs(e));
    var e
  }
  updateFormatter(t) {
    if (!this.cn) return;
    const e = t.dateFormat;
    this.cn.timeScale.timeVisible ? this.Bd = new $d({
      xd: e,
      Sd: this.cn.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m",
      kd: "   ",
      yd: t.locale
    }) : this.Bd = new yr(e, t.locale)
  }
  formatHorzItem(t) {
    const e = t;
    return this.Bd.q_(new Date(1e3 * e.Vd))
  }
  formatTickmark(t, e) {
    const i = function(o, r, l) {
        switch (o) {
          case 0:
          case 10:
            return r ? l ? 4 : 3 : 2;
          case 20:
          case 21:
          case 22:
          case 30:
          case 31:
          case 32:
          case 33:
            return r ? 3 : 2;
          case 50:
            return 2;
          case 60:
            return 1;
          case 70:
            return 0
        }
      }(t.weight, this.cn.timeScale.timeVisible, this.cn.timeScale.secondsVisible),
      n = this.cn.timeScale;
    if (n.tickMarkFormatter !== void 0) {
      const o = n.tickMarkFormatter(t.originalTime, i, e.locale);
      if (o !== null) return o
    }
    return function(o, r, l) {
      const a = {};
      switch (r) {
        case 0:
          a.year = "numeric";
          break;
        case 1:
          a.month = "short";
          break;
        case 2:
          a.day = "numeric";
          break;
        case 3:
          a.hour12 = !1, a.hour = "2-digit", a.minute = "2-digit";
          break;
        case 4:
          a.hour12 = !1, a.hour = "2-digit", a.minute = "2-digit", a.second = "2-digit"
      }
      const h = o.Od === void 0 ? new Date(1e3 * o.Vd) : new Date(Date.UTC(o.Od.year, o.Od.month - 1, o.Od.day));
      return new Date(h.getUTCFullYear(), h.getUTCMonth(), h.getUTCDate(), h.getUTCHours(), h.getUTCMinutes(), h.getUTCSeconds(), h.getUTCMilliseconds()).toLocaleString(l, a)
    }(t.time, i, e.locale)
  }
  maxTickMarkWeight(t) {
    let e = t.reduce(Sd, t[0]).weight;
    return e > 30 && e < 50 && (e = 30), e
  }
  fillWeightsForPoints(t, e) {
    (function(i, n = 0) {
      if (i.length === 0) return;
      let o = n === 0 ? null : i[n - 1].time.Vd,
        r = o !== null ? new Date(1e3 * o) : null,
        l = 0;
      for (let a = n; a < i.length; ++a) {
        const h = i[a],
          c = new Date(1e3 * h.time.Vd);
        r !== null && (h.timeWeight = Wn(c, r)), l += h.time.Vd - (o || h.time.Vd), o = h.time.Vd, r = c
      }
      if (n === 0 && i.length > 1) {
        const a = Math.ceil(l / (i.length - 1)),
          h = new Date(1e3 * (i[0].time.Vd - a));
        i[0].timeWeight = Wn(new Date(1e3 * i[0].time.Vd), h)
      }
    })(t, e)
  }
  static Ad(t) {
    return vt({
      localization: {
        dateFormat: "dd MMM 'yy"
      }
    }, t ?? {})
  }
}
const de = typeof window < "u";

function Un() {
  return !!de && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
}

function Fi() {
  return !!de && /iPhone|iPad|iPod/.test(window.navigator.platform)
}

function gs(s) {
  return s + s % 2
}

function Ui(s, t) {
  return s.Id - t.Id
}

function Ki(s, t, e) {
  const i = (s.Id - t.Id) / (s.ot - t.ot);
  return Math.sign(i) * Math.min(Math.abs(i), e)
}
class Ld {
  constructor(t, e, i, n) {
    this.zd = null, this.Ld = null, this.Ed = null, this.Nd = null, this.Fd = null, this.Wd = 0, this.jd = 0, this.Hd = t, this.$d = e, this.Ud = i, this.rs = n
  }
  qd(t, e) {
    if (this.zd !== null) {
      if (this.zd.ot === e) return void(this.zd.Id = t);
      if (Math.abs(this.zd.Id - t) < this.rs) return
    }
    this.Nd = this.Ed, this.Ed = this.Ld, this.Ld = this.zd, this.zd = {
      ot: e,
      Id: t
    }
  }
  Dr(t, e) {
    if (this.zd === null || this.Ld === null || e - this.zd.ot > 50) return;
    let i = 0;
    const n = Ki(this.zd, this.Ld, this.$d),
      o = Ui(this.zd, this.Ld),
      r = [n],
      l = [o];
    if (i += o, this.Ed !== null) {
      const h = Ki(this.Ld, this.Ed, this.$d);
      if (Math.sign(h) === Math.sign(n)) {
        const c = Ui(this.Ld, this.Ed);
        if (r.push(h), l.push(c), i += c, this.Nd !== null) {
          const u = Ki(this.Ed, this.Nd, this.$d);
          if (Math.sign(u) === Math.sign(n)) {
            const d = Ui(this.Ed, this.Nd);
            r.push(u), l.push(d), i += d
          }
        }
      }
    }
    let a = 0;
    for (let h = 0; h < r.length; ++h) a += l[h] / i * r[h];
    Math.abs(a) < this.Hd || (this.Fd = {
      Id: t,
      ot: e
    }, this.jd = a, this.Wd = function(h, c) {
      const u = Math.log(c);
      return Math.log(1 * u / -h) / u
    }(Math.abs(a), this.Ud))
  }
  Qu(t) {
    const e = w(this.Fd),
      i = t - e.ot;
    return e.Id + this.jd * (Math.pow(this.Ud, i) - 1) / Math.log(this.Ud)
  }
  Ju(t) {
    return this.Fd === null || this.Yd(t) === this.Wd
  }
  Yd(t) {
    const e = t - w(this.Fd).ot;
    return Math.min(e, this.Wd)
  }
}
class jd {
  constructor(t, e) {
    this.Zd = void 0, this.Xd = void 0, this.Kd = void 0, this.en = !1, this.Gd = t, this.Jd = e, this.Qd()
  }
  bt() {
    this.Qd()
  }
  tf() {
    this.Zd && this.Gd.removeChild(this.Zd), this.Xd && this.Gd.removeChild(this.Xd), this.Zd = void 0, this.Xd = void 0
  }
  if () {
    return this.en !== this.nf() || this.Kd !== this.sf()
  }
  sf() {
    return tr(Pe(this.Jd.W().layout.textColor)) > 160 ? "dark" : "light"
  }
  nf() {
    return this.Jd.W().layout.attributionLogo
  }
  ef() {
    const t = new URL(location.href);
    return t.hostname ? "&utm_source=" + t.hostname + t.pathname : ""
  }
  Qd() {
    this.if() && (this.tf(), this.en = this.nf(), this.en && (this.Kd = this.sf(), this.Xd = document.createElement("style"), this.Xd.innerText = "a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}", this.Zd = document.createElement("a"), this.Zd.href = `https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.ef()}`, this.Zd.title = "Charting by TradingView", this.Zd.id = "tv-attr-logo", this.Zd.target = "_blank", this.Zd.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 19" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>', this.Zd.toggleAttribute("data-dark", this.Kd === "dark"), this.Gd.appendChild(this.Xd), this.Gd.appendChild(this.Zd)))
  }
}

function Yt(s, t) {
  const e = w(s.ownerDocument).createElement("canvas");
  s.appendChild(e);
  const i = Kc(e, {
    type: "device-pixel-content-box",
    options: {
      allowResizeObserver: !1
    },
    transform: (n, o) => ({
      width: Math.max(n.width, o.width),
      height: Math.max(n.height, o.height)
    })
  });
  return i.resizeCanvasElement(t), i
}

function Gt(s) {
  var t;
  s.width = 1, s.height = 1, (t = s.getContext("2d")) === null || t === void 0 || t.clearRect(0, 0, 1, 1)
}

function bs(s, t, e, i) {
  s.wl && s.wl(t, e, i)
}

function ei(s, t, e, i) {
  s.X(t, e, i)
}

function ys(s, t, e, i) {
  const n = s(e, i);
  for (const o of n) {
    const r = o.gt();
    r !== null && t(r)
  }
}

function Rd(s) {
  de && window.chrome !== void 0 && s.addEventListener("mousedown", t => {
    if (t.button === 1) return t.preventDefault(), !1
  })
}
class Ns {
  constructor(t, e, i) {
    this.rf = 0, this.hf = null, this.lf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }, this.af = 0, this._f = null, this.uf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }, this.cf = null, this.df = !1, this.ff = null, this.vf = null, this.pf = !1, this.mf = !1, this.bf = !1, this.wf = null, this.gf = null, this.Mf = null, this.xf = null, this.Sf = null, this.kf = null, this.yf = null, this.Cf = 0, this.Tf = !1, this.Pf = !1, this.Rf = !1, this.Df = 0, this.Vf = null, this.Of = !Fi(), this.Bf = n => {
      this.Af(n)
    }, this.If = n => {
      if (this.zf(n)) {
        const o = this.Lf(n);
        if (++this.af, this._f && this.af > 1) {
          const {
            Ef: r
          } = this.Nf(yt(n), this.uf);
          r < 30 && !this.bf && this.Ff(o, this.jf.Wf), this.Hf()
        }
      } else {
        const o = this.Lf(n);
        if (++this.rf, this.hf && this.rf > 1) {
          const {
            Ef: r
          } = this.Nf(yt(n), this.lf);
          r < 5 && !this.mf && this.$f(o, this.jf.Uf), this.qf()
        }
      }
    }, this.Yf = t, this.jf = e, this.cn = i, this.Zf()
  }
  S() {
    this.wf !== null && (this.wf(), this.wf = null), this.gf !== null && (this.gf(), this.gf = null), this.xf !== null && (this.xf(), this.xf = null), this.Sf !== null && (this.Sf(), this.Sf = null), this.kf !== null && (this.kf(), this.kf = null), this.Mf !== null && (this.Mf(), this.Mf = null), this.Xf(), this.qf()
  }
  Kf(t) {
    this.xf && this.xf();
    const e = this.Gf.bind(this);
    if (this.xf = () => {
        this.Yf.removeEventListener("mousemove", e)
      }, this.Yf.addEventListener("mousemove", e), this.zf(t)) return;
    const i = this.Lf(t);
    this.$f(i, this.jf.Jf), this.Of = !0
  }
  qf() {
    this.hf !== null && clearTimeout(this.hf), this.rf = 0, this.hf = null, this.lf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }
  }
  Hf() {
    this._f !== null && clearTimeout(this._f), this.af = 0, this._f = null, this.uf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }
  }
  Gf(t) {
    if (this.Rf || this.vf !== null || this.zf(t)) return;
    const e = this.Lf(t);
    this.$f(e, this.jf.Qf), this.Of = !0
  }
  tv(t) {
    const e = Hi(t.changedTouches, w(this.Vf));
    if (e === null || (this.Df = Ye(t), this.yf !== null) || this.Pf) return;
    this.Tf = !0;
    const i = this.Nf(yt(e), w(this.vf)),
      {
        iv: n,
        nv: o,
        Ef: r
      } = i;
    if (this.pf || !(r < 5)) {
      if (!this.pf) {
        const l = .5 * n,
          a = o >= l && !this.cn.sv(),
          h = l > o && !this.cn.ev();
        a || h || (this.Pf = !0), this.pf = !0, this.bf = !0, this.Xf(), this.Hf()
      }
      if (!this.Pf) {
        const l = this.Lf(t, e);
        this.Ff(l, this.jf.rv), ee(t)
      }
    }
  }
  hv(t) {
    if (t.button !== 0) return;
    const e = this.Nf(yt(t), w(this.ff)),
      {
        Ef: i
      } = e;
    if (i >= 5 && (this.mf = !0, this.qf()), this.mf) {
      const n = this.Lf(t);
      this.$f(n, this.jf.lv)
    }
  }
  Nf(t, e) {
    const i = Math.abs(e.nt - t.nt),
      n = Math.abs(e.st - t.st);
    return {
      iv: i,
      nv: n,
      Ef: i + n
    }
  }
  av(t) {
    let e = Hi(t.changedTouches, w(this.Vf));
    if (e === null && t.touches.length === 0 && (e = t.changedTouches[0]), e === null) return;
    this.Vf = null, this.Df = Ye(t), this.Xf(), this.vf = null, this.kf && (this.kf(), this.kf = null);
    const i = this.Lf(t, e);
    if (this.Ff(i, this.jf.ov), ++this.af, this._f && this.af > 1) {
      const {
        Ef: n
      } = this.Nf(yt(e), this.uf);
      n < 30 && !this.bf && this.Ff(i, this.jf.Wf), this.Hf()
    } else this.bf || (this.Ff(i, this.jf._v), this.jf._v && ee(t));
    this.af === 0 && ee(t), t.touches.length === 0 && this.df && (this.df = !1, ee(t))
  }
  Af(t) {
    if (t.button !== 0) return;
    const e = this.Lf(t);
    if (this.ff = null, this.Rf = !1, this.Sf && (this.Sf(), this.Sf = null), Un() && this.Yf.ownerDocument.documentElement.removeEventListener("mouseleave", this.Bf), !this.zf(t))
      if (this.$f(e, this.jf.uv), ++this.rf, this.hf && this.rf > 1) {
        const {
          Ef: i
        } = this.Nf(yt(t), this.lf);
        i < 5 && !this.mf && this.$f(e, this.jf.Uf), this.qf()
      } else this.mf || this.$f(e, this.jf.cv)
  }
  Xf() {
    this.cf !== null && (clearTimeout(this.cf), this.cf = null)
  }
  dv(t) {
    if (this.Vf !== null) return;
    const e = t.changedTouches[0];
    this.Vf = e.identifier, this.Df = Ye(t);
    const i = this.Yf.ownerDocument.documentElement;
    this.bf = !1, this.pf = !1, this.Pf = !1, this.vf = yt(e), this.kf && (this.kf(), this.kf = null);
    {
      const o = this.tv.bind(this),
        r = this.av.bind(this);
      this.kf = () => {
        i.removeEventListener("touchmove", o), i.removeEventListener("touchend", r)
      }, i.addEventListener("touchmove", o, {
        passive: !1
      }), i.addEventListener("touchend", r, {
        passive: !1
      }), this.Xf(), this.cf = setTimeout(this.fv.bind(this, t), 240)
    }
    const n = this.Lf(t, e);
    this.Ff(n, this.jf.vv), this._f || (this.af = 0, this._f = setTimeout(this.Hf.bind(this), 500), this.uf = yt(e))
  }
  pv(t) {
    if (t.button !== 0) return;
    const e = this.Yf.ownerDocument.documentElement;
    Un() && e.addEventListener("mouseleave", this.Bf), this.mf = !1, this.ff = yt(t), this.Sf && (this.Sf(), this.Sf = null);
    {
      const n = this.hv.bind(this),
        o = this.Af.bind(this);
      this.Sf = () => {
        e.removeEventListener("mousemove", n), e.removeEventListener("mouseup", o)
      }, e.addEventListener("mousemove", n), e.addEventListener("mouseup", o)
    }
    if (this.Rf = !0, this.zf(t)) return;
    const i = this.Lf(t);
    this.$f(i, this.jf.mv), this.hf || (this.rf = 0, this.hf = setTimeout(this.qf.bind(this), 500), this.lf = yt(t))
  }
  Zf() {
    this.Yf.addEventListener("mouseenter", this.Kf.bind(this)), this.Yf.addEventListener("touchcancel", this.Xf.bind(this));
    {
      const t = this.Yf.ownerDocument,
        e = i => {
          this.jf.bv && (i.composed && this.Yf.contains(i.composedPath()[0]) || i.target && this.Yf.contains(i.target) || this.jf.bv())
        };
      this.gf = () => {
        t.removeEventListener("touchstart", e)
      }, this.wf = () => {
        t.removeEventListener("mousedown", e)
      }, t.addEventListener("mousedown", e), t.addEventListener("touchstart", e, {
        passive: !0
      })
    }
    Fi() && (this.Mf = () => {
      this.Yf.removeEventListener("dblclick", this.If)
    }, this.Yf.addEventListener("dblclick", this.If)), this.Yf.addEventListener("mouseleave", this.wv.bind(this)), this.Yf.addEventListener("touchstart", this.dv.bind(this), {
      passive: !0
    }), Rd(this.Yf), this.Yf.addEventListener("mousedown", this.pv.bind(this)), this.gv(), this.Yf.addEventListener("touchmove", () => {}, {
      passive: !1
    })
  }
  gv() {
    this.jf.Mv === void 0 && this.jf.xv === void 0 && this.jf.Sv === void 0 || (this.Yf.addEventListener("touchstart", t => this.kv(t.touches), {
      passive: !0
    }), this.Yf.addEventListener("touchmove", t => {
      if (t.touches.length === 2 && this.yf !== null && this.jf.xv !== void 0) {
        const e = Kn(t.touches[0], t.touches[1]) / this.Cf;
        this.jf.xv(this.yf, e), ee(t)
      }
    }, {
      passive: !1
    }), this.Yf.addEventListener("touchend", t => {
      this.kv(t.touches)
    }))
  }
  kv(t) {
    t.length === 1 && (this.Tf = !1), t.length !== 2 || this.Tf || this.df ? this.yv() : this.Cv(t)
  }
  Cv(t) {
    const e = this.Yf.getBoundingClientRect() || {
      left: 0,
      top: 0
    };
    this.yf = {
      nt: (t[0].clientX - e.left + (t[1].clientX - e.left)) / 2,
      st: (t[0].clientY - e.top + (t[1].clientY - e.top)) / 2
    }, this.Cf = Kn(t[0], t[1]), this.jf.Mv !== void 0 && this.jf.Mv(), this.Xf()
  }
  yv() {
    this.yf !== null && (this.yf = null, this.jf.Sv !== void 0 && this.jf.Sv())
  }
  wv(t) {
    if (this.xf && this.xf(), this.zf(t) || !this.Of) return;
    const e = this.Lf(t);
    this.$f(e, this.jf.Tv), this.Of = !Fi()
  }
  fv(t) {
    const e = Hi(t.touches, w(this.Vf));
    if (e === null) return;
    const i = this.Lf(t, e);
    this.Ff(i, this.jf.Pv), this.bf = !0, this.df = !0
  }
  zf(t) {
    return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents !== void 0 ? t.sourceCapabilities.firesTouchEvents : Ye(t) < this.Df + 500
  }
  Ff(t, e) {
    e && e.call(this.jf, t)
  }
  $f(t, e) {
    e && e.call(this.jf, t)
  }
  Lf(t, e) {
    const i = e || t,
      n = this.Yf.getBoundingClientRect() || {
        left: 0,
        top: 0
      };
    return {
      clientX: i.clientX,
      clientY: i.clientY,
      pageX: i.pageX,
      pageY: i.pageY,
      screenX: i.screenX,
      screenY: i.screenY,
      localX: i.clientX - n.left,
      localY: i.clientY - n.top,
      ctrlKey: t.ctrlKey,
      altKey: t.altKey,
      shiftKey: t.shiftKey,
      metaKey: t.metaKey,
      Rv: !t.type.startsWith("mouse") && t.type !== "contextmenu" && t.type !== "click",
      Dv: t.type,
      Vv: i.target,
      Ov: t.view,
      Bv: () => {
        t.type !== "touchstart" && ee(t)
      }
    }
  }
}

function Kn(s, t) {
  const e = s.clientX - t.clientX,
    i = s.clientY - t.clientY;
  return Math.sqrt(e * e + i * i)
}

function ee(s) {
  s.cancelable && s.preventDefault()
}

function yt(s) {
  return {
    nt: s.pageX,
    st: s.pageY
  }
}

function Ye(s) {
  return s.timeStamp || performance.now()
}

function Hi(s, t) {
  for (let e = 0; e < s.length; ++e)
    if (s[e].identifier === t) return s[e];
  return null
}

function Ge(s) {
  return {
    jc: s.jc,
    Av: {
      wr: s.Iv.externalId
    },
    zv: s.Iv.cursorStyle
  }
}

function Od(s, t, e) {
  for (const i of s) {
    const n = i.gt();
    if (n !== null && n.br) {
      const o = n.br(t, e);
      if (o !== null) return {
        Ov: i,
        Av: o
      }
    }
  }
  return null
}

function Ji(s, t) {
  return e => {
    var i, n, o, r;
    return ((n = (i = e.Dt()) === null || i === void 0 ? void 0 : i.Ta()) !== null && n !== void 0 ? n : "") !== t ? [] : (r = (o = e.ca) === null || o === void 0 ? void 0 : o.call(e, s)) !== null && r !== void 0 ? r : []
  }
}

function Hn(s, t, e, i) {
  if (!s.length) return;
  let n = 0;
  const o = e / 2,
    r = s[0].At(i, !0);
  let l = t === 1 ? o - (s[0].Vi() - r / 2) : s[0].Vi() - r / 2 - o;
  l = Math.max(0, l);
  for (let a = 1; a < s.length; a++) {
    const h = s[a],
      c = s[a - 1],
      u = c.At(i, !1),
      d = h.Vi(),
      f = c.Vi();
    if (t === 1 ? d > f - u : d < f + u) {
      const p = f - u * t;
      h.Oi(p);
      const m = p - t * u / 2;
      if ((t === 1 ? m < 0 : m > e) && l > 0) {
        const b = t === 1 ? -1 - m : m - e,
          y = Math.min(b, l);
        for (let g = n; g < s.length; g++) s[g].Oi(s[g].Vi() + t * y);
        l -= y
      }
    } else n = a, l = t === 1 ? f - u - d : d - (f + u)
  }
}
class Jn {
  constructor(t, e, i, n) {
    this.Li = null, this.Lv = null, this.Ev = !1, this.Nv = new Le(200), this.Jr = null, this.Fv = 0, this.Wv = !1, this.jv = () => {
      this.Wv || this.tn.Hv().$t().$h()
    }, this.$v = () => {
      this.Wv || this.tn.Hv().$t().$h()
    }, this.tn = t, this.cn = e, this.So = e.layout, this.Vc = i, this.Uv = n === "left", this.qv = Ji("normal", n), this.Yv = Ji("top", n), this.Zv = Ji("bottom", n), this.Xv = document.createElement("div"), this.Xv.style.height = "100%", this.Xv.style.overflow = "hidden", this.Xv.style.width = "25px", this.Xv.style.left = "0", this.Xv.style.position = "relative", this.Kv = Yt(this.Xv, Y({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const o = this.Kv.canvasElement;
    o.style.position = "absolute", o.style.zIndex = "1", o.style.left = "0", o.style.top = "0", this.Gv = Yt(this.Xv, Y({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const r = this.Gv.canvasElement;
    r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0";
    const l = {
      mv: this.Jv.bind(this),
      vv: this.Jv.bind(this),
      lv: this.Qv.bind(this),
      rv: this.Qv.bind(this),
      bv: this.tp.bind(this),
      uv: this.ip.bind(this),
      ov: this.ip.bind(this),
      Uf: this.np.bind(this),
      Wf: this.np.bind(this),
      Jf: this.sp.bind(this),
      Tv: this.ep.bind(this)
    };
    this.rp = new Ns(this.Gv.canvasElement, l, {
      sv: () => !this.cn.handleScroll.vertTouchDrag,
      ev: () => !0
    })
  }
  S() {
    this.rp.S(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Gt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Gt(this.Kv.canvasElement), this.Kv.dispose(), this.Li !== null && this.Li.Xo().p(this), this.Li = null
  }
  hp() {
    return this.Xv
  }
  P() {
    return this.So.fontSize
  }
  lp() {
    const t = this.Vc.W();
    return this.Jr !== t.R && (this.Nv.ir(), this.Jr = t.R), t
  }
  ap() {
    if (this.Li === null) return 0;
    let t = 0;
    const e = this.lp(),
      i = w(this.Kv.canvasElement.getContext("2d"));
    i.save();
    const n = this.Li.ja();
    i.font = this.op(), n.length > 0 && (t = Math.max(this.Nv.xi(i, n[0].no), this.Nv.xi(i, n[n.length - 1].no)));
    const o = this._p();
    for (let a = o.length; a--;) {
      const h = this.Nv.xi(i, o[a].Kt());
      h > t && (t = h)
    }
    const r = this.Li.Ct();
    if (r !== null && this.Lv !== null) {
      const a = this.Li.pn(1, r),
        h = this.Li.pn(this.Lv.height - 2, r);
      t = Math.max(t, this.Nv.xi(i, this.Li.Fi(Math.floor(Math.min(a, h)) + .11111111111111, r)), this.Nv.xi(i, this.Li.Fi(Math.ceil(Math.max(a, h)) - .11111111111111, r)))
    }
    i.restore();
    const l = t || 34;
    return gs(Math.ceil(e.C + e.T + e.A + e.I + 5 + l))
  }
  up(t) {
    this.Lv !== null && Ft(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`)
  }
  cp() {
    return w(this.Lv).width
  }
  Gi(t) {
    this.Li !== t && (this.Li !== null && this.Li.Xo().p(this), this.Li = t, t.Xo().l(this.do.bind(this), this))
  }
  Dt() {
    return this.Li
  }
  ir() {
    const t = this.tn.dp();
    this.tn.Hv().$t().L_(t, w(this.Dt()))
  }
  fp(t) {
    if (this.Lv === null) return;
    if (t !== 1) {
      this.vp(), this.Kv.applySuggestedBitmapSize();
      const i = Jt(this.Kv);
      i !== null && (i.useBitmapCoordinateSpace(n => {
        this.pp(n), this.Ae(n)
      }), this.tn.mp(i, this.Zv), this.bp(i), this.tn.mp(i, this.qv), this.wp(i))
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Jt(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: i,
      bitmapSize: n
    }) => {
      i.clearRect(0, 0, n.width, n.height)
    }), this.gp(e), this.tn.mp(e, this.Yv))
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, i) {
    const n = this.Mp();
    n.width > 0 && n.height > 0 && t.drawImage(this.Kv.canvasElement, e, i)
  }
  bt() {
    var t;
    (t = this.Li) === null || t === void 0 || t.ja()
  }
  Jv(t) {
    if (this.Li === null || this.Li.Ni() || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const e = this.tn.Hv().$t(),
      i = this.tn.dp();
    this.Ev = !0, e.D_(i, this.Li, t.localY)
  }
  Qv(t) {
    if (this.Li === null || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const e = this.tn.Hv().$t(),
      i = this.tn.dp(),
      n = this.Li;
    e.V_(i, n, t.localY)
  }
  tp() {
    if (this.Li === null || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const t = this.tn.Hv().$t(),
      e = this.tn.dp(),
      i = this.Li;
    this.Ev && (this.Ev = !1, t.O_(e, i))
  }
  ip(t) {
    if (this.Li === null || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const e = this.tn.Hv().$t(),
      i = this.tn.dp();
    this.Ev = !1, e.O_(i, this.Li)
  }
  np(t) {
    this.cn.handleScale.axisDoubleClickReset.price && this.ir()
  }
  sp(t) {
    this.Li !== null && (!this.tn.Hv().$t().W().handleScale.axisPressedMouseMove.price || this.Li.gh() || this.Li.Vo() || this.Sp(1))
  }
  ep(t) {
    this.Sp(0)
  }
  _p() {
    const t = [],
      e = this.Li === null ? void 0 : this.Li;
    return (i => {
      for (let n = 0; n < i.length; ++n) {
        const o = i[n].Rn(this.tn.dp(), e);
        for (let r = 0; r < o.length; r++) t.push(o[r])
      }
    })(this.tn.dp().$o()), t
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    const {
      width: i,
      height: n
    } = e, o = this.tn.dp().$t(), r = o.q(), l = o.md();
    r === l ? wi(t, 0, 0, i, n, r) : er(t, 0, 0, i, n, r, l)
  }
  Ae({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i
  }) {
    if (this.Lv === null || this.Li === null || !this.Li.W().borderVisible) return;
    t.fillStyle = this.Li.W().borderColor;
    const n = Math.max(1, Math.floor(this.lp().C * i));
    let o;
    o = this.Uv ? e.width - n : 0, t.fillRect(o, 0, n, e.height)
  }
  bp(t) {
    if (this.Lv === null || this.Li === null) return;
    const e = this.Li.ja(),
      i = this.Li.W(),
      n = this.lp(),
      o = this.Uv ? this.Lv.width - n.T : 0;
    i.borderVisible && i.ticksVisible && t.useBitmapCoordinateSpace(({
      context: r,
      horizontalPixelRatio: l,
      verticalPixelRatio: a
    }) => {
      r.fillStyle = i.borderColor;
      const h = Math.max(1, Math.floor(a)),
        c = Math.floor(.5 * a),
        u = Math.round(n.T * l);
      r.beginPath();
      for (const d of e) r.rect(Math.floor(o * l), Math.round(d.La * a) - c, u, h);
      r.fill()
    }), t.useMediaCoordinateSpace(({
      context: r
    }) => {
      var l;
      r.font = this.op(), r.fillStyle = (l = i.textColor) !== null && l !== void 0 ? l : this.So.textColor, r.textAlign = this.Uv ? "right" : "left", r.textBaseline = "middle";
      const a = this.Uv ? Math.round(o - n.A) : Math.round(o + n.T + n.A),
        h = e.map(c => this.Nv.Mi(r, c.no));
      for (let c = e.length; c--;) {
        const u = e[c];
        r.fillText(u.no, a, u.La + h[c])
      }
    })
  }
  vp() {
    if (this.Lv === null || this.Li === null) return;
    const t = [],
      e = this.Li.$o().slice(),
      i = this.tn.dp(),
      n = this.lp();
    this.Li === i.vr() && this.tn.dp().$o().forEach(r => {
      i.dr(r) && e.push(r)
    });
    const o = this.Li;
    e.forEach(r => {
      r.Rn(i, o).forEach(l => {
        l.Oi(null), l.Bi() && t.push(l)
      })
    }), t.forEach(r => r.Oi(r.ki())), this.Li.W().alignLabels && this.kp(t, n)
  }
  kp(t, e) {
    if (this.Lv === null) return;
    const i = this.Lv.height / 2,
      n = t.filter(r => r.ki() <= i),
      o = t.filter(r => r.ki() > i);
    n.sort((r, l) => l.ki() - r.ki()), o.sort((r, l) => r.ki() - l.ki());
    for (const r of t) {
      const l = Math.floor(r.At(e) / 2),
        a = r.ki();
      a > -l && a < l && r.Oi(l), a > this.Lv.height - l && a < this.Lv.height + l && r.Oi(this.Lv.height - l)
    }
    Hn(n, 1, this.Lv.height, e), Hn(o, -1, this.Lv.height, e)
  }
  wp(t) {
    if (this.Lv === null) return;
    const e = this._p(),
      i = this.lp(),
      n = this.Uv ? "right" : "left";
    e.forEach(o => {
      o.Ai() && o.gt(w(this.Li)).X(t, i, this.Nv, n)
    })
  }
  gp(t) {
    if (this.Lv === null || this.Li === null) return;
    const e = this.tn.Hv().$t(),
      i = [],
      n = this.tn.dp(),
      o = e.Yc().Rn(n, this.Li);
    o.length && i.push(o);
    const r = this.lp(),
      l = this.Uv ? "right" : "left";
    i.forEach(a => {
      a.forEach(h => {
        h.gt(w(this.Li)).X(t, r, this.Nv, l)
      })
    })
  }
  Sp(t) {
    this.Xv.style.cursor = t === 1 ? "ns-resize" : "default"
  }
  do() {
    const t = this.ap();
    this.Fv < t && this.tn.Hv().$t().Xl(), this.Fv = t
  }
  op() {
    return ue(this.So.fontSize, this.So.fontFamily)
  }
}

function Ad(s, t) {
  var e, i;
  return (i = (e = s._a) === null || e === void 0 ? void 0 : e.call(s, t)) !== null && i !== void 0 ? i : []
}

function Ze(s, t) {
  var e, i;
  return (i = (e = s.Pn) === null || e === void 0 ? void 0 : e.call(s, t)) !== null && i !== void 0 ? i : []
}

function Dd(s, t) {
  var e, i;
  return (i = (e = s.Ji) === null || e === void 0 ? void 0 : e.call(s, t)) !== null && i !== void 0 ? i : []
}

function Vd(s, t) {
  var e, i;
  return (i = (e = s.la) === null || e === void 0 ? void 0 : e.call(s, t)) !== null && i !== void 0 ? i : []
}
class Fs {
  constructor(t, e) {
    this.Lv = Y({
      width: 0,
      height: 0
    }), this.yp = null, this.Cp = null, this.Tp = null, this.Pp = null, this.Rp = !1, this.Dp = new st, this.Vp = new st, this.Op = 0, this.Bp = !1, this.Ap = null, this.Ip = !1, this.zp = null, this.Lp = null, this.Wv = !1, this.jv = () => {
      this.Wv || this.Ep === null || this.$i().$h()
    }, this.$v = () => {
      this.Wv || this.Ep === null || this.$i().$h()
    }, this.Jd = t, this.Ep = e, this.Ep.F_().l(this.Np.bind(this), this, !0), this.Fp = document.createElement("td"), this.Fp.style.padding = "0", this.Fp.style.position = "relative";
    const i = document.createElement("div");
    i.style.width = "100%", i.style.height = "100%", i.style.position = "relative", i.style.overflow = "hidden", this.Wp = document.createElement("td"), this.Wp.style.padding = "0", this.jp = document.createElement("td"), this.jp.style.padding = "0", this.Fp.appendChild(i), this.Kv = Yt(i, Y({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const n = this.Kv.canvasElement;
    n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Gv = Yt(i, Y({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const o = this.Gv.canvasElement;
    o.style.position = "absolute", o.style.zIndex = "2", o.style.left = "0", o.style.top = "0", this.Hp = document.createElement("tr"), this.Hp.appendChild(this.Wp), this.Hp.appendChild(this.Fp), this.Hp.appendChild(this.jp), this.$p(), this.rp = new Ns(this.Gv.canvasElement, this, {
      sv: () => this.Ap === null && !this.Jd.W().handleScroll.vertTouchDrag,
      ev: () => this.Ap === null && !this.Jd.W().handleScroll.horzTouchDrag
    })
  }
  S() {
    this.yp !== null && this.yp.S(), this.Cp !== null && this.Cp.S(), this.Tp = null, this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Gt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Gt(this.Kv.canvasElement), this.Kv.dispose(), this.Ep !== null && this.Ep.F_().p(this), this.rp.S()
  }
  dp() {
    return w(this.Ep)
  }
  Up(t) {
    var e, i;
    this.Ep !== null && this.Ep.F_().p(this), this.Ep = t, this.Ep !== null && this.Ep.F_().l(Fs.prototype.Np.bind(this), this, !0), this.$p(), this.Jd.qp().indexOf(this) === this.Jd.qp().length - 1 ? (this.Tp = (e = this.Tp) !== null && e !== void 0 ? e : new jd(this.Fp, this.Jd), this.Tp.bt()) : ((i = this.Tp) === null || i === void 0 || i.tf(), this.Tp = null)
  }
  Hv() {
    return this.Jd
  }
  hp() {
    return this.Hp
  }
  $p() {
    if (this.Ep !== null && (this.Yp(), this.$i().wt().length !== 0)) {
      if (this.yp !== null) {
        const t = this.Ep.P_();
        this.yp.Gi(w(t))
      }
      if (this.Cp !== null) {
        const t = this.Ep.R_();
        this.Cp.Gi(w(t))
      }
    }
  }
  Zp() {
    this.yp !== null && this.yp.bt(), this.Cp !== null && this.Cp.bt()
  }
  g_() {
    return this.Ep !== null ? this.Ep.g_() : 0
  }
  M_(t) {
    this.Ep && this.Ep.M_(t)
  }
  Jf(t) {
    if (!this.Ep) return;
    this.Xp();
    const e = t.localX,
      i = t.localY;
    this.Kp(e, i, t)
  }
  mv(t) {
    this.Xp(), this.Gp(), this.Kp(t.localX, t.localY, t)
  }
  Qf(t) {
    var e;
    if (!this.Ep) return;
    this.Xp();
    const i = t.localX,
      n = t.localY;
    this.Kp(i, n, t);
    const o = this.br(i, n);
    this.Jd.Jp((e = o == null ? void 0 : o.zv) !== null && e !== void 0 ? e : null), this.$i().Wc(o && {
      jc: o.jc,
      Av: o.Av
    })
  }
  cv(t) {
    this.Ep !== null && (this.Xp(), this.Qp(t))
  }
  Uf(t) {
    this.Ep !== null && this.tm(this.Vp, t)
  }
  Wf(t) {
    this.Uf(t)
  }
  lv(t) {
    this.Xp(), this.im(t), this.Kp(t.localX, t.localY, t)
  }
  uv(t) {
    this.Ep !== null && (this.Xp(), this.Bp = !1, this.nm(t))
  }
  _v(t) {
    this.Ep !== null && this.Qp(t)
  }
  Pv(t) {
    if (this.Bp = !0, this.Ap === null) {
      const e = {
        x: t.localX,
        y: t.localY
      };
      this.sm(e, e, t)
    }
  }
  Tv(t) {
    this.Ep !== null && (this.Xp(), this.Ep.$t().Wc(null), this.rm())
  }
  hm() {
    return this.Dp
  }
  lm() {
    return this.Vp
  }
  Mv() {
    this.Op = 1, this.$i().Un()
  }
  xv(t, e) {
    if (!this.Jd.W().handleScale.pinch) return;
    const i = 5 * (e - this.Op);
    this.Op = e, this.$i().Jc(t.nt, i)
  }
  vv(t) {
    this.Bp = !1, this.Ip = this.Ap !== null, this.Gp();
    const e = this.$i().Yc();
    this.Ap !== null && e.yt() && (this.zp = {
      x: e.Yt(),
      y: e.Zt()
    }, this.Ap = {
      x: t.localX,
      y: t.localY
    })
  }
  rv(t) {
    if (this.Ep === null) return;
    const e = t.localX,
      i = t.localY;
    if (this.Ap === null) this.im(t);
    else {
      this.Ip = !1;
      const n = w(this.zp),
        o = n.x + (e - this.Ap.x),
        r = n.y + (i - this.Ap.y);
      this.Kp(o, r, t)
    }
  }
  ov(t) {
    this.Hv().W().trackingMode.exitMode === 0 && (this.Ip = !0), this.am(), this.nm(t)
  }
  br(t, e) {
    const i = this.Ep;
    return i === null ? null : function(n, o, r) {
      const l = n.$o(),
        a = function(h, c, u) {
          var d, f;
          let p, m;
          for (const g of h) {
            const M = (f = (d = g.fa) === null || d === void 0 ? void 0 : d.call(g, c, u)) !== null && f !== void 0 ? f : [];
            for (const S of M) b = S.zOrder, (!(y = p == null ? void 0 : p.zOrder) || b === "top" && y !== "top" || b === "normal" && y === "bottom") && (p = S, m = g)
          }
          var b, y;
          return p && m ? {
            Iv: p,
            jc: m
          } : null
        }(l, o, r);
      if ((a == null ? void 0 : a.Iv.zOrder) === "top") return Ge(a);
      for (const h of l) {
        if (a && a.jc === h && a.Iv.zOrder !== "bottom" && !a.Iv.isBackground) return Ge(a);
        const c = Od(h.Pn(n), o, r);
        if (c !== null) return {
          jc: h,
          Ov: c.Ov,
          Av: c.Av
        };
        if (a && a.jc === h && a.Iv.zOrder !== "bottom" && a.Iv.isBackground) return Ge(a)
      }
      return a != null && a.Iv ? Ge(a) : null
    }(i, t, e)
  }
  om(t, e) {
    w(e === "left" ? this.yp : this.Cp).up(Y({
      width: t,
      height: this.Lv.height
    }))
  }
  _m() {
    return this.Lv
  }
  up(t) {
    Ft(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Fp.style.width = t.width + "px", this.Fp.style.height = t.height + "px")
  }
  um() {
    const t = w(this.Ep);
    t.T_(t.P_()), t.T_(t.R_());
    for (const e of t.Oa())
      if (t.dr(e)) {
        const i = e.Dt();
        i !== null && t.T_(i), e.Vn()
      }
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, i) {
    const n = this.Mp();
    n.width > 0 && n.height > 0 && t.drawImage(this.Kv.canvasElement, e, i)
  }
  fp(t) {
    if (t === 0 || this.Ep === null) return;
    if (t > 1 && this.um(), this.yp !== null && this.yp.fp(t), this.Cp !== null && this.Cp.fp(t), t !== 1) {
      this.Kv.applySuggestedBitmapSize();
      const i = Jt(this.Kv);
      i !== null && (i.useBitmapCoordinateSpace(n => {
        this.pp(n)
      }), this.Ep && (this.dm(i, Ad), this.fm(i), this.vm(i), this.dm(i, Ze), this.dm(i, Dd)))
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Jt(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: i,
      bitmapSize: n
    }) => {
      i.clearRect(0, 0, n.width, n.height)
    }), this.pm(e), this.dm(e, Vd))
  }
  bm() {
    return this.yp
  }
  wm() {
    return this.Cp
  }
  mp(t, e) {
    this.dm(t, e)
  }
  Np() {
    this.Ep !== null && this.Ep.F_().p(this), this.Ep = null
  }
  Qp(t) {
    this.tm(this.Dp, t)
  }
  tm(t, e) {
    const i = e.localX,
      n = e.localY;
    t.M() && t.m(this.$i().St().Eu(i), {
      x: i,
      y: n
    }, e)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    const {
      width: i,
      height: n
    } = e, o = this.$i(), r = o.q(), l = o.md();
    r === l ? wi(t, 0, 0, i, n, l) : er(t, 0, 0, i, n, r, l)
  }
  fm(t) {
    const e = w(this.Ep).W_().Uh().gt();
    e !== null && e.X(t, !1)
  }
  vm(t) {
    const e = this.$i().qc();
    this.gm(t, Ze, bs, e), this.gm(t, Ze, ei, e)
  }
  pm(t) {
    this.gm(t, Ze, ei, this.$i().Yc())
  }
  dm(t, e) {
    const i = w(this.Ep).$o();
    for (const n of i) this.gm(t, e, bs, n);
    for (const n of i) this.gm(t, e, ei, n)
  }
  gm(t, e, i, n) {
    const o = w(this.Ep),
      r = o.$t().Fc(),
      l = r !== null && r.jc === n,
      a = r !== null && l && r.Av !== void 0 ? r.Av.gr : void 0;
    ys(e, h => i(h, t, l, a), n, o)
  }
  Yp() {
    if (this.Ep === null) return;
    const t = this.Jd,
      e = this.Ep.P_().W().visible,
      i = this.Ep.R_().W().visible;
    e || this.yp === null || (this.Wp.removeChild(this.yp.hp()), this.yp.S(), this.yp = null), i || this.Cp === null || (this.jp.removeChild(this.Cp.hp()), this.Cp.S(), this.Cp = null);
    const n = t.$t()._d();
    e && this.yp === null && (this.yp = new Jn(this, t.W(), n, "left"), this.Wp.appendChild(this.yp.hp())), i && this.Cp === null && (this.Cp = new Jn(this, t.W(), n, "right"), this.jp.appendChild(this.Cp.hp()))
  }
  Mm(t) {
    return t.Rv && this.Bp || this.Ap !== null
  }
  xm(t) {
    return Math.max(0, Math.min(t, this.Lv.width - 1))
  }
  Sm(t) {
    return Math.max(0, Math.min(t, this.Lv.height - 1))
  }
  Kp(t, e, i) {
    this.$i().hd(this.xm(t), this.Sm(e), i, w(this.Ep))
  }
  rm() {
    this.$i().ad()
  }
  am() {
    this.Ip && (this.Ap = null, this.rm())
  }
  sm(t, e, i) {
    this.Ap = t, this.Ip = !1, this.Kp(e.x, e.y, i);
    const n = this.$i().Yc();
    this.zp = {
      x: n.Yt(),
      y: n.Zt()
    }
  }
  $i() {
    return this.Jd.$t()
  }
  nm(t) {
    if (!this.Rp) return;
    const e = this.$i(),
      i = this.dp();
    if (e.I_(i, i.vn()), this.Pp = null, this.Rp = !1, e.sd(), this.Lp !== null) {
      const n = performance.now(),
        o = e.St();
      this.Lp.Dr(o.ju(), n), this.Lp.Ju(n) || e.Zn(this.Lp)
    }
  }
  Xp() {
    this.Ap = null
  }
  Gp() {
    if (this.Ep) {
      if (this.$i().Un(), document.activeElement !== document.body && document.activeElement !== document.documentElement) w(document.activeElement).blur();
      else {
        const t = document.getSelection();
        t !== null && t.removeAllRanges()
      }!this.Ep.vn().Ni() && this.$i().St().Ni()
    }
  }
  im(t) {
    if (this.Ep === null) return;
    const e = this.$i(),
      i = e.St();
    if (i.Ni()) return;
    const n = this.Jd.W(),
      o = n.handleScroll,
      r = n.kineticScroll;
    if ((!o.pressedMouseMove || t.Rv) && (!o.horzTouchDrag && !o.vertTouchDrag || !t.Rv)) return;
    const l = this.Ep.vn(),
      a = performance.now();
    if (this.Pp !== null || this.Mm(t) || (this.Pp = {
        x: t.clientX,
        y: t.clientY,
        Vd: a,
        km: t.localX,
        ym: t.localY
      }), this.Pp !== null && !this.Rp && (this.Pp.x !== t.clientX || this.Pp.y !== t.clientY)) {
      if (t.Rv && r.touch || !t.Rv && r.mouse) {
        const h = i.he();
        this.Lp = new Ld(.2 / h, 7 / h, .997, 15 / h), this.Lp.qd(i.ju(), this.Pp.Vd)
      } else this.Lp = null;
      l.Ni() || e.B_(this.Ep, l, t.localY), e.td(t.localX), this.Rp = !0
    }
    this.Rp && (l.Ni() || e.A_(this.Ep, l, t.localY), e.nd(t.localX), this.Lp !== null && this.Lp.qd(i.ju(), a))
  }
}
class Xn {
  constructor(t, e, i, n, o) {
    this.ft = !0, this.Lv = Y({
      width: 0,
      height: 0
    }), this.jv = () => this.fp(3), this.Uv = t === "left", this.Vc = i._d, this.cn = e, this.Cm = n, this.Tm = o, this.Xv = document.createElement("div"), this.Xv.style.width = "25px", this.Xv.style.height = "100%", this.Xv.style.overflow = "hidden", this.Kv = Yt(this.Xv, Y({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv)
  }
  S() {
    this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Gt(this.Kv.canvasElement), this.Kv.dispose()
  }
  hp() {
    return this.Xv
  }
  _m() {
    return this.Lv
  }
  up(t) {
    Ft(this.Lv, t) || (this.Lv = t, this.Kv.resizeCanvasElement(t), this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`, this.ft = !0)
  }
  fp(t) {
    if (t < 3 && !this.ft || this.Lv.width === 0 || this.Lv.height === 0) return;
    this.ft = !1, this.Kv.applySuggestedBitmapSize();
    const e = Jt(this.Kv);
    e !== null && e.useBitmapCoordinateSpace(i => {
      this.pp(i), this.Ae(i)
    })
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, i) {
    const n = this.Mp();
    n.width > 0 && n.height > 0 && t.drawImage(this.Kv.canvasElement, e, i)
  }
  Ae({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i,
    verticalPixelRatio: n
  }) {
    if (!this.Cm()) return;
    t.fillStyle = this.cn.timeScale.borderColor;
    const o = Math.floor(this.Vc.W().C * i),
      r = Math.floor(this.Vc.W().C * n),
      l = this.Uv ? e.width - o : 0;
    t.fillRect(l, 0, o, r)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    wi(t, 0, 0, e.width, e.height, this.Tm())
  }
}

function Us(s) {
  return t => {
    var e, i;
    return (i = (e = t.da) === null || e === void 0 ? void 0 : e.call(t, s)) !== null && i !== void 0 ? i : []
  }
}
const Wd = Us("normal"),
  Bd = Us("top"),
  Nd = Us("bottom");
class Fd {
  constructor(t, e) {
    this.Pm = null, this.Rm = null, this.k = null, this.Dm = !1, this.Lv = Y({
      width: 0,
      height: 0
    }), this.Vm = new st, this.Nv = new Le(5), this.Wv = !1, this.jv = () => {
      this.Wv || this.Jd.$t().$h()
    }, this.$v = () => {
      this.Wv || this.Jd.$t().$h()
    }, this.Jd = t, this.U_ = e, this.cn = t.W().layout, this.Zd = document.createElement("tr"), this.Om = document.createElement("td"), this.Om.style.padding = "0", this.Bm = document.createElement("td"), this.Bm.style.padding = "0", this.Xv = document.createElement("td"), this.Xv.style.height = "25px", this.Xv.style.padding = "0", this.Am = document.createElement("div"), this.Am.style.width = "100%", this.Am.style.height = "100%", this.Am.style.position = "relative", this.Am.style.overflow = "hidden", this.Xv.appendChild(this.Am), this.Kv = Yt(this.Am, Y({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const i = this.Kv.canvasElement;
    i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.Gv = Yt(this.Am, Y({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const n = this.Gv.canvasElement;
    n.style.position = "absolute", n.style.zIndex = "2", n.style.left = "0", n.style.top = "0", this.Zd.appendChild(this.Om), this.Zd.appendChild(this.Xv), this.Zd.appendChild(this.Bm), this.Im(), this.Jd.$t().w_().l(this.Im.bind(this), this), this.rp = new Ns(this.Gv.canvasElement, this, {
      sv: () => !0,
      ev: () => !this.Jd.W().handleScroll.horzTouchDrag
    })
  }
  S() {
    this.rp.S(), this.Pm !== null && this.Pm.S(), this.Rm !== null && this.Rm.S(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Gt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Gt(this.Kv.canvasElement), this.Kv.dispose()
  }
  hp() {
    return this.Zd
  }
  zm() {
    return this.Pm
  }
  Lm() {
    return this.Rm
  }
  mv(t) {
    if (this.Dm) return;
    this.Dm = !0;
    const e = this.Jd.$t();
    !e.St().Ni() && this.Jd.W().handleScale.axisPressedMouseMove.time && e.Gc(t.localX)
  }
  vv(t) {
    this.mv(t)
  }
  bv() {
    const t = this.Jd.$t();
    !t.St().Ni() && this.Dm && (this.Dm = !1, this.Jd.W().handleScale.axisPressedMouseMove.time && t.rd())
  }
  lv(t) {
    const e = this.Jd.$t();
    !e.St().Ni() && this.Jd.W().handleScale.axisPressedMouseMove.time && e.ed(t.localX)
  }
  rv(t) {
    this.lv(t)
  }
  uv() {
    this.Dm = !1;
    const t = this.Jd.$t();
    t.St().Ni() && !this.Jd.W().handleScale.axisPressedMouseMove.time || t.rd()
  }
  ov() {
    this.uv()
  }
  Uf() {
    this.Jd.W().handleScale.axisDoubleClickReset.time && this.Jd.$t().Kn()
  }
  Wf() {
    this.Uf()
  }
  Jf() {
    this.Jd.$t().W().handleScale.axisPressedMouseMove.time && this.Sp(1)
  }
  Tv() {
    this.Sp(0)
  }
  _m() {
    return this.Lv
  }
  Em() {
    return this.Vm
  }
  Nm(t, e, i) {
    Ft(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`, this.Vm.m(t)), this.Pm !== null && this.Pm.up(Y({
      width: e,
      height: t.height
    })), this.Rm !== null && this.Rm.up(Y({
      width: i,
      height: t.height
    }))
  }
  Fm() {
    const t = this.Wm();
    return Math.ceil(t.C + t.T + t.P + t.L + t.B + t.jm)
  }
  bt() {
    this.Jd.$t().St().ja()
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, i) {
    const n = this.Mp();
    n.width > 0 && n.height > 0 && t.drawImage(this.Kv.canvasElement, e, i)
  }
  fp(t) {
    if (t === 0) return;
    if (t !== 1) {
      this.Kv.applySuggestedBitmapSize();
      const i = Jt(this.Kv);
      i !== null && (i.useBitmapCoordinateSpace(n => {
        this.pp(n), this.Ae(n), this.Hm(i, Nd)
      }), this.bp(i), this.Hm(i, Wd)), this.Pm !== null && this.Pm.fp(t), this.Rm !== null && this.Rm.fp(t)
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Jt(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: i,
      bitmapSize: n
    }) => {
      i.clearRect(0, 0, n.width, n.height)
    }), this.$m([...this.Jd.$t().wt(), this.Jd.$t().Yc()], e), this.Hm(e, Bd))
  }
  Hm(t, e) {
    const i = this.Jd.$t().wt();
    for (const n of i) ys(e, o => bs(o, t, !1, void 0), n, void 0);
    for (const n of i) ys(e, o => ei(o, t, !1, void 0), n, void 0)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    wi(t, 0, 0, e.width, e.height, this.Jd.$t().md())
  }
  Ae({
    context: t,
    bitmapSize: e,
    verticalPixelRatio: i
  }) {
    if (this.Jd.W().timeScale.borderVisible) {
      t.fillStyle = this.Um();
      const n = Math.max(1, Math.floor(this.Wm().C * i));
      t.fillRect(0, 0, e.width, n)
    }
  }
  bp(t) {
    const e = this.Jd.$t().St(),
      i = e.ja();
    if (!i || i.length === 0) return;
    const n = this.U_.maxTickMarkWeight(i),
      o = this.Wm(),
      r = e.W();
    r.borderVisible && r.ticksVisible && t.useBitmapCoordinateSpace(({
      context: l,
      horizontalPixelRatio: a,
      verticalPixelRatio: h
    }) => {
      l.strokeStyle = this.Um(), l.fillStyle = this.Um();
      const c = Math.max(1, Math.floor(a)),
        u = Math.floor(.5 * a);
      l.beginPath();
      const d = Math.round(o.T * h);
      for (let f = i.length; f--;) {
        const p = Math.round(i[f].coord * a);
        l.rect(p - u, 0, c, d)
      }
      l.fill()
    }), t.useMediaCoordinateSpace(({
      context: l
    }) => {
      const a = o.C + o.T + o.L + o.P / 2;
      l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = this.$(), l.font = this.op();
      for (const h of i)
        if (h.weight < n) {
          const c = h.needAlignCoordinate ? this.qm(l, h.coord, h.label) : h.coord;
          l.fillText(h.label, c, a)
        } this.Jd.W().timeScale.allowBoldLabels && (l.font = this.Ym());
      for (const h of i)
        if (h.weight >= n) {
          const c = h.needAlignCoordinate ? this.qm(l, h.coord, h.label) : h.coord;
          l.fillText(h.label, c, a)
        }
    })
  }
  qm(t, e, i) {
    const n = this.Nv.xi(t, i),
      o = n / 2,
      r = Math.floor(e - o) + .5;
    return r < 0 ? e += Math.abs(0 - r) : r + n > this.Lv.width && (e -= Math.abs(this.Lv.width - (r + n))), e
  }
  $m(t, e) {
    const i = this.Wm();
    for (const n of t)
      for (const o of n.Qi()) o.gt().X(e, i)
  }
  Um() {
    return this.Jd.W().timeScale.borderColor
  }
  $() {
    return this.cn.textColor
  }
  j() {
    return this.cn.fontSize
  }
  op() {
    return ue(this.j(), this.cn.fontFamily)
  }
  Ym() {
    return ue(this.j(), this.cn.fontFamily, "bold")
  }
  Wm() {
    this.k === null && (this.k = {
      C: 1,
      N: NaN,
      L: NaN,
      B: NaN,
      ji: NaN,
      T: 5,
      P: NaN,
      R: "",
      Wi: new Le,
      jm: 0
    });
    const t = this.k,
      e = this.op();
    if (t.R !== e) {
      const i = this.j();
      t.P = i, t.R = e, t.L = 3 * i / 12, t.B = 3 * i / 12, t.ji = 9 * i / 12, t.N = 0, t.jm = 4 * i / 12, t.Wi.ir()
    }
    return this.k
  }
  Sp(t) {
    this.Xv.style.cursor = t === 1 ? "ew-resize" : "default"
  }
  Im() {
    const t = this.Jd.$t(),
      e = t.W();
    e.leftPriceScale.visible || this.Pm === null || (this.Om.removeChild(this.Pm.hp()), this.Pm.S(), this.Pm = null), e.rightPriceScale.visible || this.Rm === null || (this.Bm.removeChild(this.Rm.hp()), this.Rm.S(), this.Rm = null);
    const i = {
        _d: this.Jd.$t()._d()
      },
      n = () => e.leftPriceScale.borderVisible && t.St().W().borderVisible,
      o = () => t.md();
    e.leftPriceScale.visible && this.Pm === null && (this.Pm = new Xn("left", e, i, n, o), this.Om.appendChild(this.Pm.hp())), e.rightPriceScale.visible && this.Rm === null && (this.Rm = new Xn("right", e, i, n, o), this.Bm.appendChild(this.Rm.hp()))
  }
}
const Ud = !!de && !!navigator.userAgentData && navigator.userAgentData.brands.some(s => s.brand.includes("Chromium")) && !!de && (!((Xi = navigator == null ? void 0 : navigator.userAgentData) === null || Xi === void 0) && Xi.platform ? navigator.userAgentData.platform === "Windows" : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
var Xi;
class Kd {
  constructor(t, e, i) {
    var n;
    this.Zm = [], this.Xm = 0, this.ro = 0, this.o_ = 0, this.Km = 0, this.Gm = 0, this.Jm = null, this.Qm = !1, this.Dp = new st, this.Vp = new st, this.Pc = new st, this.tb = null, this.ib = null, this.Gd = t, this.cn = e, this.U_ = i, this.Zd = document.createElement("div"), this.Zd.classList.add("tv-lightweight-charts"), this.Zd.style.overflow = "hidden", this.Zd.style.direction = "ltr", this.Zd.style.width = "100%", this.Zd.style.height = "100%", (n = this.Zd).style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.msUserSelect = "none", n.style.MozUserSelect = "none", n.style.webkitTapHighlightColor = "transparent", this.nb = document.createElement("table"), this.nb.setAttribute("cellspacing", "0"), this.Zd.appendChild(this.nb), this.sb = this.eb.bind(this), Yi(this.cn) && this.rb(!0), this.$i = new Td(this.Dc.bind(this), this.cn, i), this.$t().Zc().l(this.hb.bind(this), this), this.lb = new Fd(this, this.U_), this.nb.appendChild(this.lb.hp());
    const o = e.autoSize && this.ab();
    let r = this.cn.width,
      l = this.cn.height;
    if (o || r === 0 || l === 0) {
      const a = t.getBoundingClientRect();
      r = r || a.width, l = l || a.height
    }
    this.ob(r, l), this._b(), t.appendChild(this.Zd), this.ub(), this.$i.St().sc().l(this.$i.Xl.bind(this.$i), this), this.$i.w_().l(this.$i.Xl.bind(this.$i), this)
  }
  $t() {
    return this.$i
  }
  W() {
    return this.cn
  }
  qp() {
    return this.Zm
  }
  cb() {
    return this.lb
  }
  S() {
    this.rb(!1), this.Xm !== 0 && window.cancelAnimationFrame(this.Xm), this.$i.Zc().p(this), this.$i.St().sc().p(this), this.$i.w_().p(this), this.$i.S();
    for (const t of this.Zm) this.nb.removeChild(t.hp()), t.hm().p(this), t.lm().p(this), t.S();
    this.Zm = [], w(this.lb).S(), this.Zd.parentElement !== null && this.Zd.parentElement.removeChild(this.Zd), this.Pc.S(), this.Dp.S(), this.Vp.S(), this.fb()
  }
  ob(t, e, i = !1) {
    if (this.ro === e && this.o_ === t) return;
    const n = function(l) {
      const a = Math.floor(l.width),
        h = Math.floor(l.height);
      return Y({
        width: a - a % 2,
        height: h - h % 2
      })
    }(Y({
      width: t,
      height: e
    }));
    this.ro = n.height, this.o_ = n.width;
    const o = this.ro + "px",
      r = this.o_ + "px";
    w(this.Zd).style.height = o, w(this.Zd).style.width = r, this.nb.style.height = o, this.nb.style.width = r, i ? this.pb(at.es(), performance.now()) : this.$i.Xl()
  }
  fp(t) {
    t === void 0 && (t = at.es());
    for (let e = 0; e < this.Zm.length; e++) this.Zm[e].fp(t.Hn(e).Fn);
    this.cn.timeScale.visible && this.lb.fp(t.jn())
  }
  Hh(t) {
    const e = Yi(this.cn);
    this.$i.Hh(t);
    const i = Yi(this.cn);
    i !== e && this.rb(i), this.ub(), this.mb(t)
  }
  hm() {
    return this.Dp
  }
  lm() {
    return this.Vp
  }
  Zc() {
    return this.Pc
  }
  bb() {
    this.Jm !== null && (this.pb(this.Jm, performance.now()), this.Jm = null);
    const t = this.wb(null),
      e = document.createElement("canvas");
    e.width = t.width, e.height = t.height;
    const i = w(e.getContext("2d"));
    return this.wb(i), e
  }
  gb(t) {
    return t === "left" && !this.Mb() || t === "right" && !this.xb() || this.Zm.length === 0 ? 0 : w(t === "left" ? this.Zm[0].bm() : this.Zm[0].wm()).cp()
  }
  Sb() {
    return this.cn.autoSize && this.tb !== null
  }
  kb() {
    return this.Zd
  }
  Jp(t) {
    this.ib = t, this.ib ? this.kb().style.setProperty("cursor", t) : this.kb().style.removeProperty("cursor")
  }
  yb() {
    return this.ib
  }
  Cb() {
    return ct(this.Zm[0])._m()
  }
  mb(t) {
    (t.autoSize !== void 0 || !this.tb || t.width === void 0 && t.height === void 0) && (t.autoSize && !this.tb && this.ab(), t.autoSize === !1 && this.tb !== null && this.fb(), t.autoSize || t.width === void 0 && t.height === void 0 || this.ob(t.width || this.o_, t.height || this.ro))
  }
  wb(t) {
    let e = 0,
      i = 0;
    const n = this.Zm[0],
      o = (l, a) => {
        let h = 0;
        for (let c = 0; c < this.Zm.length; c++) {
          const u = this.Zm[c],
            d = w(l === "left" ? u.bm() : u.wm()),
            f = d.Mp();
          t !== null && d.xp(t, a, h), h += f.height
        }
      };
    this.Mb() && (o("left", 0), e += w(n.bm()).Mp().width);
    for (let l = 0; l < this.Zm.length; l++) {
      const a = this.Zm[l],
        h = a.Mp();
      t !== null && a.xp(t, e, i), i += h.height
    }
    e += n.Mp().width, this.xb() && (o("right", e), e += w(n.wm()).Mp().width);
    const r = (l, a, h) => {
      w(l === "left" ? this.lb.zm() : this.lb.Lm()).xp(w(t), a, h)
    };
    if (this.cn.timeScale.visible) {
      const l = this.lb.Mp();
      if (t !== null) {
        let a = 0;
        this.Mb() && (r("left", a, i), a = w(n.bm()).Mp().width), this.lb.xp(t, a, i), a += l.width, this.xb() && r("right", a, i)
      }
      i += l.height
    }
    return Y({
      width: e,
      height: i
    })
  }
  Tb() {
    let t = 0,
      e = 0,
      i = 0;
    for (const p of this.Zm) this.Mb() && (e = Math.max(e, w(p.bm()).ap(), this.cn.leftPriceScale.minimumWidth)), this.xb() && (i = Math.max(i, w(p.wm()).ap(), this.cn.rightPriceScale.minimumWidth)), t += p.g_();
    e = gs(e), i = gs(i);
    const n = this.o_,
      o = this.ro,
      r = Math.max(n - e - i, 0),
      l = this.cn.timeScale.visible;
    let a = l ? Math.max(this.lb.Fm(), this.cn.timeScale.minimumHeight) : 0;
    var h;
    a = (h = a) + h % 2;
    const c = 0 + a,
      u = o < c ? 0 : o - c,
      d = u / t;
    let f = 0;
    for (let p = 0; p < this.Zm.length; ++p) {
      const m = this.Zm[p];
      m.Up(this.$i.Uc()[p]);
      let b = 0,
        y = 0;
      y = p === this.Zm.length - 1 ? u - f : Math.round(m.g_() * d), b = Math.max(y, 2), f += b, m.up(Y({
        width: r,
        height: b
      })), this.Mb() && m.om(e, "left"), this.xb() && m.om(i, "right"), m.dp() && this.$i.Xc(m.dp(), b)
    }
    this.lb.Nm(Y({
      width: l ? r : 0,
      height: a
    }), l ? e : 0, l ? i : 0), this.$i.x_(r), this.Km !== e && (this.Km = e), this.Gm !== i && (this.Gm = i)
  }
  rb(t) {
    t ? this.Zd.addEventListener("wheel", this.sb, {
      passive: !1
    }) : this.Zd.removeEventListener("wheel", this.sb)
  }
  Pb(t) {
    switch (t.deltaMode) {
      case t.DOM_DELTA_PAGE:
        return 120;
      case t.DOM_DELTA_LINE:
        return 32
    }
    return Ud ? 1 / window.devicePixelRatio : 1
  }
  eb(t) {
    if (!(t.deltaX !== 0 && this.cn.handleScroll.mouseWheel || t.deltaY !== 0 && this.cn.handleScale.mouseWheel)) return;
    const e = this.Pb(t),
      i = e * t.deltaX / 100,
      n = -e * t.deltaY / 100;
    if (t.cancelable && t.preventDefault(), n !== 0 && this.cn.handleScale.mouseWheel) {
      const o = Math.sign(n) * Math.min(1, Math.abs(n)),
        r = t.clientX - this.Zd.getBoundingClientRect().left;
      this.$t().Jc(r, o)
    }
    i !== 0 && this.cn.handleScroll.mouseWheel && this.$t().Qc(-80 * i)
  }
  pb(t, e) {
    var i;
    const n = t.jn();
    n === 3 && this.Rb(), n !== 3 && n !== 2 || (this.Db(t), this.Vb(t, e), this.lb.bt(), this.Zm.forEach(o => {
      o.Zp()
    }), ((i = this.Jm) === null || i === void 0 ? void 0 : i.jn()) === 3 && (this.Jm.ts(t), this.Rb(), this.Db(this.Jm), this.Vb(this.Jm, e), t = this.Jm, this.Jm = null)), this.fp(t)
  }
  Vb(t, e) {
    for (const i of t.Qn()) this.ns(i, e)
  }
  Db(t) {
    const e = this.$i.Uc();
    for (let i = 0; i < e.length; i++) t.Hn(i).Wn && e[i].E_()
  }
  ns(t, e) {
    const i = this.$i.St();
    switch (t.qn) {
      case 0:
        i.rc();
        break;
      case 1:
        i.hc(t.Vt);
        break;
      case 2:
        i.Gn(t.Vt);
        break;
      case 3:
        i.Jn(t.Vt);
        break;
      case 4:
        i.Uu();
        break;
      case 5:
        t.Vt.Ju(e) || i.Jn(t.Vt.Qu(e))
    }
  }
  Dc(t) {
    this.Jm !== null ? this.Jm.ts(t) : this.Jm = t, this.Qm || (this.Qm = !0, this.Xm = window.requestAnimationFrame(e => {
      if (this.Qm = !1, this.Xm = 0, this.Jm !== null) {
        const i = this.Jm;
        this.Jm = null, this.pb(i, e);
        for (const n of i.Qn())
          if (n.qn === 5 && !n.Vt.Ju(e)) {
            this.$t().Zn(n.Vt);
            break
          }
      }
    }))
  }
  Rb() {
    this._b()
  }
  _b() {
    const t = this.$i.Uc(),
      e = t.length,
      i = this.Zm.length;
    for (let n = e; n < i; n++) {
      const o = ct(this.Zm.pop());
      this.nb.removeChild(o.hp()), o.hm().p(this), o.lm().p(this), o.S()
    }
    for (let n = i; n < e; n++) {
      const o = new Fs(this, t[n]);
      o.hm().l(this.Ob.bind(this), this), o.lm().l(this.Bb.bind(this), this), this.Zm.push(o), this.nb.insertBefore(o.hp(), this.lb.hp())
    }
    for (let n = 0; n < e; n++) {
      const o = t[n],
        r = this.Zm[n];
      r.dp() !== o ? r.Up(o) : r.$p()
    }
    this.ub(), this.Tb()
  }
  Ab(t, e, i) {
    var n;
    const o = new Map;
    t !== null && this.$i.wt().forEach(c => {
      const u = c.In().hl(t);
      u !== null && o.set(c, u)
    });
    let r;
    if (t !== null) {
      const c = (n = this.$i.St().Ui(t)) === null || n === void 0 ? void 0 : n.originalTime;
      c !== void 0 && (r = c)
    }
    const l = this.$t().Fc(),
      a = l !== null && l.jc instanceof Ws ? l.jc : void 0,
      h = l !== null && l.Av !== void 0 ? l.Av.wr : void 0;
    return {
      Ib: r,
      se: t ?? void 0,
      zb: e ?? void 0,
      Lb: a,
      Eb: o,
      Nb: h,
      Fb: i ?? void 0
    }
  }
  Ob(t, e, i) {
    this.Dp.m(() => this.Ab(t, e, i))
  }
  Bb(t, e, i) {
    this.Vp.m(() => this.Ab(t, e, i))
  }
  hb(t, e, i) {
    this.Pc.m(() => this.Ab(t, e, i))
  }
  ub() {
    const t = this.cn.timeScale.visible ? "" : "none";
    this.lb.hp().style.display = t
  }
  Mb() {
    return this.Zm[0].dp().P_().W().visible
  }
  xb() {
    return this.Zm[0].dp().R_().W().visible
  }
  ab() {
    return "ResizeObserver" in window && (this.tb = new ResizeObserver(t => {
      const e = t.find(i => i.target === this.Gd);
      e && this.ob(e.contentRect.width, e.contentRect.height)
    }), this.tb.observe(this.Gd, {
      box: "border-box"
    }), !0)
  }
  fb() {
    this.tb !== null && this.tb.disconnect(), this.tb = null
  }
}

function Yi(s) {
  return !!(s.handleScroll.mouseWheel || s.handleScale.mouseWheel)
}

function Hd(s) {
  return function(t) {
    return t.open !== void 0
  }(s) || function(t) {
    return t.value !== void 0
  }(s)
}

function _r(s, t) {
  var e = {};
  for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && t.indexOf(i) < 0 && (e[i] = s[i]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") {
    var n = 0;
    for (i = Object.getOwnPropertySymbols(s); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(s, i[n]) && (e[i[n]] = s[i[n]])
  }
  return e
}

function Yn(s, t, e, i) {
  const n = e.value,
    o = {
      se: t,
      ot: s,
      Vt: [n, n, n, n],
      Ib: i
    };
  return e.color !== void 0 && (o.V = e.color), o
}

function Jd(s, t, e, i) {
  const n = e.value,
    o = {
      se: t,
      ot: s,
      Vt: [n, n, n, n],
      Ib: i
    };
  return e.lineColor !== void 0 && (o.lt = e.lineColor), e.topColor !== void 0 && (o.Ts = e.topColor), e.bottomColor !== void 0 && (o.Ps = e.bottomColor), o
}

function Xd(s, t, e, i) {
  const n = e.value,
    o = {
      se: t,
      ot: s,
      Vt: [n, n, n, n],
      Ib: i
    };
  return e.topLineColor !== void 0 && (o.Pe = e.topLineColor), e.bottomLineColor !== void 0 && (o.Re = e.bottomLineColor), e.topFillColor1 !== void 0 && (o.Se = e.topFillColor1), e.topFillColor2 !== void 0 && (o.ke = e.topFillColor2), e.bottomFillColor1 !== void 0 && (o.ye = e.bottomFillColor1), e.bottomFillColor2 !== void 0 && (o.Ce = e.bottomFillColor2), o
}

function Yd(s, t, e, i) {
  const n = {
    se: t,
    ot: s,
    Vt: [e.open, e.high, e.low, e.close],
    Ib: i
  };
  return e.color !== void 0 && (n.V = e.color), n
}

function Gd(s, t, e, i) {
  const n = {
    se: t,
    ot: s,
    Vt: [e.open, e.high, e.low, e.close],
    Ib: i
  };
  return e.color !== void 0 && (n.V = e.color), e.borderColor !== void 0 && (n.Ot = e.borderColor), e.wickColor !== void 0 && (n.Zh = e.wickColor), n
}

function Zd(s, t, e, i, n) {
  const o = ct(n)(e),
    r = Math.max(...o),
    l = Math.min(...o),
    a = o[o.length - 1],
    h = [a, r, l, a],
    c = e,
    {
      time: u,
      color: d
    } = c;
  return {
    se: t,
    ot: s,
    Vt: h,
    Ib: i,
    He: _r(c, ["time", "color"]),
    V: d
  }
}

function qe(s) {
  return s.Vt !== void 0
}

function Gn(s, t) {
  return t.customValues !== void 0 && (s.Wb = t.customValues), s
}

function Dt(s) {
  return (t, e, i, n, o, r) => function(l, a) {
    return a ? a(l) : (h = l).open === void 0 && h.value === void 0;
    var h
  }(i, r) ? Gn({
    ot: t,
    se: e,
    Ib: n
  }, i) : Gn(s(t, e, i, n, o), i)
}

function Zn(s) {
  return {
    Candlestick: Dt(Gd),
    Bar: Dt(Yd),
    Area: Dt(Jd),
    Baseline: Dt(Xd),
    Histogram: Dt(Yn),
    Line: Dt(Yn),
    Custom: Dt(Zd)
  } [s]
}

function qn(s) {
  return {
    se: 0,
    jb: new Map,
    ha: s
  }
}

function Qn(s, t) {
  if (s !== void 0 && s.length !== 0) return {
    Hb: t.key(s[0].ot),
    $b: t.key(s[s.length - 1].ot)
  }
}

function to(s) {
  let t;
  return s.forEach(e => {
    t === void 0 && (t = e.Ib)
  }), ct(t)
}
class qd {
  constructor(t) {
    this.Ub = new Map, this.qb = new Map, this.Yb = new Map, this.Zb = [], this.U_ = t
  }
  S() {
    this.Ub.clear(), this.qb.clear(), this.Yb.clear(), this.Zb = []
  }
  Xb(t, e) {
    let i = this.Ub.size !== 0,
      n = !1;
    const o = this.qb.get(t);
    if (o !== void 0)
      if (this.qb.size === 1) i = !1, n = !0, this.Ub.clear();
      else
        for (const a of this.Zb) a.pointData.jb.delete(t) && (n = !0);
    let r = [];
    if (e.length !== 0) {
      const a = e.map(f => f.time),
        h = this.U_.createConverterToInternalObj(e),
        c = Zn(t.Jh()),
        u = t.ya(),
        d = t.Ca();
      r = e.map((f, p) => {
        const m = h(f.time),
          b = this.U_.key(m);
        let y = this.Ub.get(b);
        y === void 0 && (y = qn(m), this.Ub.set(b, y), n = !0);
        const g = c(m, y.se, f, a[p], u, d);
        return y.jb.set(t, g), g
      })
    }
    i && this.Kb(), this.Gb(t, r);
    let l = -1;
    if (n) {
      const a = [];
      this.Ub.forEach(h => {
        a.push({
          timeWeight: 0,
          time: h.ha,
          pointData: h,
          originalTime: to(h.jb)
        })
      }), a.sort((h, c) => this.U_.key(h.time) - this.U_.key(c.time)), l = this.Jb(a)
    }
    return this.Qb(t, l, function(a, h, c) {
      const u = Qn(a, c),
        d = Qn(h, c);
      if (u !== void 0 && d !== void 0) return {
        Ql: u.$b >= d.$b && u.Hb >= d.Hb
      }
    }(this.qb.get(t), o, this.U_))
  }
  fd(t) {
    return this.Xb(t, [])
  }
  tw(t, e) {
    const i = e;
    (function(m) {
      m.Ib === void 0 && (m.Ib = m.time)
    })(i), this.U_.preprocessData(e);
    const n = this.U_.createConverterToInternalObj([e])(e.time),
      o = this.Yb.get(t);
    if (o !== void 0 && this.U_.key(n) < this.U_.key(o)) throw new Error(`Cannot update oldest data, last time=${o}, new time=${n}`);
    let r = this.Ub.get(this.U_.key(n));
    const l = r === void 0;
    r === void 0 && (r = qn(n), this.Ub.set(this.U_.key(n), r));
    const a = Zn(t.Jh()),
      h = t.ya(),
      c = t.Ca(),
      u = a(n, r.se, e, i.Ib, h, c);
    r.jb.set(t, u), this.iw(t, u);
    const d = {
      Ql: qe(u)
    };
    if (!l) return this.Qb(t, -1, d);
    const f = {
        timeWeight: 0,
        time: r.ha,
        pointData: r,
        originalTime: to(r.jb)
      },
      p = Ve(this.Zb, this.U_.key(f.time), (m, b) => this.U_.key(m.time) < b);
    this.Zb.splice(p, 0, f);
    for (let m = p; m < this.Zb.length; ++m) Gi(this.Zb[m].pointData, m);
    return this.U_.fillWeightsForPoints(this.Zb, p), this.Qb(t, p, d)
  }
  iw(t, e) {
    let i = this.qb.get(t);
    i === void 0 && (i = [], this.qb.set(t, i));
    const n = i.length !== 0 ? i[i.length - 1] : null;
    n === null || this.U_.key(e.ot) > this.U_.key(n.ot) ? qe(e) && i.push(e) : qe(e) ? i[i.length - 1] = e : i.splice(-1, 1), this.Yb.set(t, e.ot)
  }
  Gb(t, e) {
    e.length !== 0 ? (this.qb.set(t, e.filter(qe)), this.Yb.set(t, e[e.length - 1].ot)) : (this.qb.delete(t), this.Yb.delete(t))
  }
  Kb() {
    for (const t of this.Zb) t.pointData.jb.size === 0 && this.Ub.delete(this.U_.key(t.time))
  }
  Jb(t) {
    let e = -1;
    for (let i = 0; i < this.Zb.length && i < t.length; ++i) {
      const n = this.Zb[i],
        o = t[i];
      if (this.U_.key(n.time) !== this.U_.key(o.time)) {
        e = i;
        break
      }
      o.timeWeight = n.timeWeight, Gi(o.pointData, i)
    }
    if (e === -1 && this.Zb.length !== t.length && (e = Math.min(this.Zb.length, t.length)), e === -1) return -1;
    for (let i = e; i < t.length; ++i) Gi(t[i].pointData, i);
    return this.U_.fillWeightsForPoints(t, e), this.Zb = t, e
  }
  nw() {
    if (this.qb.size === 0) return null;
    let t = 0;
    return this.qb.forEach(e => {
      e.length !== 0 && (t = Math.max(t, e[e.length - 1].se))
    }), t
  }
  Qb(t, e, i) {
    const n = {
      sw: new Map,
      St: {
        Lu: this.nw()
      }
    };
    if (e !== -1) this.qb.forEach((o, r) => {
      n.sw.set(r, {
        He: o,
        ew: r === t ? i : void 0
      })
    }), this.qb.has(t) || n.sw.set(t, {
      He: [],
      ew: i
    }), n.St.rw = this.Zb, n.St.hw = e;
    else {
      const o = this.qb.get(t);
      n.sw.set(t, {
        He: o || [],
        ew: i
      })
    }
    return n
  }
}

function Gi(s, t) {
  s.se = t, s.jb.forEach(e => {
    e.se = t
  })
}

function Ks(s) {
  const t = {
    value: s.Vt[3],
    time: s.Ib
  };
  return s.Wb !== void 0 && (t.customValues = s.Wb), t
}

function eo(s) {
  const t = Ks(s);
  return s.V !== void 0 && (t.color = s.V), t
}

function Qd(s) {
  const t = Ks(s);
  return s.lt !== void 0 && (t.lineColor = s.lt), s.Ts !== void 0 && (t.topColor = s.Ts), s.Ps !== void 0 && (t.bottomColor = s.Ps), t
}

function tf(s) {
  const t = Ks(s);
  return s.Pe !== void 0 && (t.topLineColor = s.Pe), s.Re !== void 0 && (t.bottomLineColor = s.Re), s.Se !== void 0 && (t.topFillColor1 = s.Se), s.ke !== void 0 && (t.topFillColor2 = s.ke), s.ye !== void 0 && (t.bottomFillColor1 = s.ye), s.Ce !== void 0 && (t.bottomFillColor2 = s.Ce), t
}

function wr(s) {
  const t = {
    open: s.Vt[0],
    high: s.Vt[1],
    low: s.Vt[2],
    close: s.Vt[3],
    time: s.Ib
  };
  return s.Wb !== void 0 && (t.customValues = s.Wb), t
}

function ef(s) {
  const t = wr(s);
  return s.V !== void 0 && (t.color = s.V), t
}

function sf(s) {
  const t = wr(s),
    {
      V: e,
      Ot: i,
      Zh: n
    } = s;
  return e !== void 0 && (t.color = e), i !== void 0 && (t.borderColor = i), n !== void 0 && (t.wickColor = n), t
}

function _s(s) {
  return {
    Area: Qd,
    Line: eo,
    Baseline: tf,
    Histogram: eo,
    Bar: ef,
    Candlestick: sf,
    Custom: nf
  } [s]
}

function nf(s) {
  const t = s.Ib;
  return Object.assign(Object.assign({}, s.He), {
    time: t
  })
}
const of = {
  vertLine: {
    color: "#9598A1",
    width: 1,
    style: 3,
    visible: !0,
    labelVisible: !0,
    labelBackgroundColor: "#131722"
  },
  horzLine: {
    color: "#9598A1",
    width: 1,
    style: 3,
    visible: !0,
    labelVisible: !0,
    labelBackgroundColor: "#131722"
  },
  mode: 1
}, rf = {
  vertLines: {
    color: "#D6DCDE",
    style: 0,
    visible: !0
  },
  horzLines: {
    color: "#D6DCDE",
    style: 0,
    visible: !0
  }
}, lf = {
  background: {
    type: "solid",
    color: "#FFFFFF"
  },
  textColor: "#191919",
  fontSize: 12,
  fontFamily: js,
  attributionLogo: !0
}, Zi = {
  autoScale: !0,
  mode: 0,
  invertScale: !1,
  alignLabels: !0,
  borderVisible: !0,
  borderColor: "#2B2B43",
  entireTextOnly: !1,
  visible: !1,
  ticksVisible: !1,
  scaleMargins: {
    bottom: .1,
    top: .2
  },
  minimumWidth: 0
}, af = {
  rightOffset: 0,
  barSpacing: 6,
  minBarSpacing: .5,
  fixLeftEdge: !1,
  fixRightEdge: !1,
  lockVisibleTimeRangeOnResize: !1,
  rightBarStaysOnScroll: !1,
  borderVisible: !0,
  borderColor: "#2B2B43",
  visible: !0,
  timeVisible: !1,
  secondsVisible: !0,
  shiftVisibleRangeOnNewBar: !0,
  allowShiftVisibleRangeOnWhitespaceReplacement: !1,
  ticksVisible: !1,
  uniformDistribution: !1,
  minimumHeight: 0,
  allowBoldLabels: !0
}, hf = {
  color: "rgba(0, 0, 0, 0)",
  visible: !1,
  fontSize: 48,
  fontFamily: js,
  fontStyle: "",
  text: "",
  horzAlign: "center",
  vertAlign: "center"
};

function io() {
  return {
    width: 0,
    height: 0,
    autoSize: !1,
    layout: lf,
    crosshair: of,
    grid: rf,
    overlayPriceScales: Object.assign({}, Zi),
    leftPriceScale: Object.assign(Object.assign({}, Zi), {
      visible: !1
    }),
    rightPriceScale: Object.assign(Object.assign({}, Zi), {
      visible: !0
    }),
    timeScale: af,
    watermark: hf,
    localization: {
      locale: de ? navigator.language : "",
      dateFormat: "dd MMM 'yy"
    },
    handleScroll: {
      mouseWheel: !0,
      pressedMouseMove: !0,
      horzTouchDrag: !0,
      vertTouchDrag: !0
    },
    handleScale: {
      axisPressedMouseMove: {
        time: !0,
        price: !0
      },
      axisDoubleClickReset: {
        time: !0,
        price: !0
      },
      mouseWheel: !0,
      pinch: !0
    },
    kineticScroll: {
      mouse: !1,
      touch: !0
    },
    trackingMode: {
      exitMode: 1
    }
  }
}
class cf {
  constructor(t, e) {
    this.lw = t, this.aw = e
  }
  applyOptions(t) {
    this.lw.$t().Hc(this.aw, t)
  }
  options() {
    return this.Li().W()
  }
  width() {
    return xi(this.aw) ? this.lw.gb(this.aw) : 0
  }
  Li() {
    return w(this.lw.$t().$c(this.aw)).Dt
  }
}

function so(s, t, e) {
  const i = _r(s, ["time", "originalTime"]),
    n = Object.assign({
      time: t
    }, i);
  return e !== void 0 && (n.originalTime = e), n
}
const uf = {
  color: "#FF0000",
  price: 0,
  lineStyle: 2,
  lineWidth: 1,
  lineVisible: !0,
  axisLabelVisible: !0,
  title: "",
  axisLabelColor: "",
  axisLabelTextColor: ""
};
class df {
  constructor(t) {
    this.Eh = t
  }
  applyOptions(t) {
    this.Eh.Hh(t)
  }
  options() {
    return this.Eh.W()
  }
  ow() {
    return this.Eh
  }
}
class ff {
  constructor(t, e, i, n, o) {
    this._w = new st, this.Ls = t, this.uw = e, this.cw = i, this.U_ = o, this.dw = n
  }
  S() {
    this._w.S()
  }
  priceFormatter() {
    return this.Ls.ma()
  }
  priceToCoordinate(t) {
    const e = this.Ls.Ct();
    return e === null ? null : this.Ls.Dt().Rt(t, e.Vt)
  }
  coordinateToPrice(t) {
    const e = this.Ls.Ct();
    return e === null ? null : this.Ls.Dt().pn(t, e.Vt)
  }
  barsInLogicalRange(t) {
    if (t === null) return null;
    const e = new ae(new ke(t.from, t.to)).hu(),
      i = this.Ls.In();
    if (i.Ni()) return null;
    const n = i.hl(e.Vs(), 1),
      o = i.hl(e.ui(), -1),
      r = w(i.sl()),
      l = w(i.An());
    if (n !== null && o !== null && n.se > o.se) return {
      barsBefore: t.from - r,
      barsAfter: l - t.to
    };
    const a = {
      barsBefore: n === null || n.se === r ? t.from - r : n.se - r,
      barsAfter: o === null || o.se === l ? l - t.to : l - o.se
    };
    return n !== null && o !== null && (a.from = n.Ib, a.to = o.Ib), a
  }
  setData(t) {
    this.U_, this.Ls.Jh(), this.uw.fw(this.Ls, t), this.pw("full")
  }
  update(t) {
    this.Ls.Jh(), this.uw.mw(this.Ls, t), this.pw("update")
  }
  dataByIndex(t, e) {
    const i = this.Ls.In().hl(t, e);
    return i === null ? null : _s(this.seriesType())(i)
  }
  data() {
    const t = _s(this.seriesType());
    return this.Ls.In().ie().map(e => t(e))
  }
  subscribeDataChanged(t) {
    this._w.l(t)
  }
  unsubscribeDataChanged(t) {
    this._w.v(t)
  }
  setMarkers(t) {
    this.U_;
    const e = t.map(i => so(i, this.U_.convertHorzItemToInternal(i.time), i.time));
    this.Ls.ia(e)
  }
  markers() {
    return this.Ls.na().map(t => so(t, t.originalTime, void 0))
  }
  applyOptions(t) {
    this.Ls.Hh(t)
  }
  options() {
    return Mt(this.Ls.W())
  }
  priceScale() {
    return this.cw.priceScale(this.Ls.Dt().Ta())
  }
  createPriceLine(t) {
    const e = vt(Mt(uf), t),
      i = this.Ls.sa(e);
    return new df(i)
  }
  removePriceLine(t) {
    this.Ls.ea(t.ow())
  }
  seriesType() {
    return this.Ls.Jh()
  }
  attachPrimitive(t) {
    this.Ls.Sa(t), t.attached && t.attached({
      chart: this.dw,
      series: this,
      requestUpdate: () => this.Ls.$t().Xl()
    })
  }
  detachPrimitive(t) {
    this.Ls.ka(t), t.detached && t.detached()
  }
  pw(t) {
    this._w.M() && this._w.m(t)
  }
}
class pf {
  constructor(t, e, i) {
    this.bw = new st, this.pu = new st, this.Vm = new st, this.$i = t, this.kl = t.St(), this.lb = e, this.kl.tc().l(this.ww.bind(this)), this.kl.nc().l(this.gw.bind(this)), this.lb.Em().l(this.Mw.bind(this)), this.U_ = i
  }
  S() {
    this.kl.tc().p(this), this.kl.nc().p(this), this.lb.Em().p(this), this.bw.S(), this.pu.S(), this.Vm.S()
  }
  scrollPosition() {
    return this.kl.ju()
  }
  scrollToPosition(t, e) {
    e ? this.kl.Gu(t, 1e3) : this.$i.Jn(t)
  }
  scrollToRealTime() {
    this.kl.Ku()
  }
  getVisibleRange() {
    const t = this.kl.Du();
    return t === null ? null : {
      from: t.from.originalTime,
      to: t.to.originalTime
    }
  }
  setVisibleRange(t) {
    const e = {
        from: this.U_.convertHorzItemToInternal(t.from),
        to: this.U_.convertHorzItemToInternal(t.to)
      },
      i = this.kl.Au(e);
    this.$i.vd(i)
  }
  getVisibleLogicalRange() {
    const t = this.kl.Ru();
    return t === null ? null : {
      from: t.Vs(),
      to: t.ui()
    }
  }
  setVisibleLogicalRange(t) {
    Ot(t.from <= t.to, "The from index cannot be after the to index."), this.$i.vd(t)
  }
  resetTimeScale() {
    this.$i.Kn()
  }
  fitContent() {
    this.$i.rc()
  }
  logicalToCoordinate(t) {
    const e = this.$i.St();
    return e.Ni() ? null : e.It(t)
  }
  coordinateToLogical(t) {
    return this.kl.Ni() ? null : this.kl.Eu(t)
  }
  timeToCoordinate(t) {
    const e = this.U_.convertHorzItemToInternal(t),
      i = this.kl.Da(e, !1);
    return i === null ? null : this.kl.It(i)
  }
  coordinateToTime(t) {
    const e = this.$i.St(),
      i = e.Eu(t),
      n = e.Ui(i);
    return n === null ? null : n.originalTime
  }
  width() {
    return this.lb._m().width
  }
  height() {
    return this.lb._m().height
  }
  subscribeVisibleTimeRangeChange(t) {
    this.bw.l(t)
  }
  unsubscribeVisibleTimeRangeChange(t) {
    this.bw.v(t)
  }
  subscribeVisibleLogicalRangeChange(t) {
    this.pu.l(t)
  }
  unsubscribeVisibleLogicalRangeChange(t) {
    this.pu.v(t)
  }
  subscribeSizeChange(t) {
    this.Vm.l(t)
  }
  unsubscribeSizeChange(t) {
    this.Vm.v(t)
  }
  applyOptions(t) {
    this.kl.Hh(t)
  }
  options() {
    return Object.assign(Object.assign({}, Mt(this.kl.W())), {
      barSpacing: this.kl.he()
    })
  }
  ww() {
    this.bw.M() && this.bw.m(this.getVisibleRange())
  }
  gw() {
    this.pu.M() && this.pu.m(this.getVisibleLogicalRange())
  }
  Mw(t) {
    this.Vm.m(t.width, t.height)
  }
}

function mf(s) {
  if (s === void 0 || s.type === "custom") return;
  const t = s;
  t.minMove !== void 0 && t.precision === void 0 && (t.precision = function(e) {
    if (e >= 1) return 0;
    let i = 0;
    for (; i < 8; i++) {
      const n = Math.round(e);
      if (Math.abs(n - e) < 1e-8) return i;
      e *= 10
    }
    return i
  }(t.minMove))
}

function no(s) {
  return function(t) {
    if (Fe(t.handleScale)) {
      const i = t.handleScale;
      t.handleScale = {
        axisDoubleClickReset: {
          time: i,
          price: i
        },
        axisPressedMouseMove: {
          time: i,
          price: i
        },
        mouseWheel: i,
        pinch: i
      }
    } else if (t.handleScale !== void 0) {
      const {
        axisPressedMouseMove: i,
        axisDoubleClickReset: n
      } = t.handleScale;
      Fe(i) && (t.handleScale.axisPressedMouseMove = {
        time: i,
        price: i
      }), Fe(n) && (t.handleScale.axisDoubleClickReset = {
        time: n,
        price: n
      })
    }
    const e = t.handleScroll;
    Fe(e) && (t.handleScroll = {
      horzTouchDrag: e,
      vertTouchDrag: e,
      mouseWheel: e,
      pressedMouseMove: e
    })
  }(s), s
}
class vf {
  constructor(t, e, i) {
    this.xw = new Map, this.Sw = new Map, this.kw = new st, this.yw = new st, this.Cw = new st, this.Tw = new qd(e);
    const n = i === void 0 ? Mt(io()) : vt(Mt(io()), no(i));
    this.U_ = e, this.lw = new Kd(t, n, e), this.lw.hm().l(r => {
      this.kw.M() && this.kw.m(this.Pw(r()))
    }, this), this.lw.lm().l(r => {
      this.yw.M() && this.yw.m(this.Pw(r()))
    }, this), this.lw.Zc().l(r => {
      this.Cw.M() && this.Cw.m(this.Pw(r()))
    }, this);
    const o = this.lw.$t();
    this.Rw = new pf(o, this.lw.cb(), this.U_)
  }
  remove() {
    this.lw.hm().p(this), this.lw.lm().p(this), this.lw.Zc().p(this), this.Rw.S(), this.lw.S(), this.xw.clear(), this.Sw.clear(), this.kw.S(), this.yw.S(), this.Cw.S(), this.Tw.S()
  }
  resize(t, e, i) {
    this.autoSizeActive() || this.lw.ob(t, e, i)
  }
  addCustomSeries(t, e) {
    const i = se(t),
      n = Object.assign(Object.assign({}, Go), i.defaultOptions());
    return this.Dw("Custom", n, e, i)
  }
  addAreaSeries(t) {
    return this.Dw("Area", qc, t)
  }
  addBaselineSeries(t) {
    return this.Dw("Baseline", Qc, t)
  }
  addBarSeries(t) {
    return this.Dw("Bar", Gc, t)
  }
  addCandlestickSeries(t = {}) {
    return function(e) {
      e.borderColor !== void 0 && (e.borderUpColor = e.borderColor, e.borderDownColor = e.borderColor), e.wickColor !== void 0 && (e.wickUpColor = e.wickColor, e.wickDownColor = e.wickColor)
    }(t), this.Dw("Candlestick", Yc, t)
  }
  addHistogramSeries(t) {
    return this.Dw("Histogram", tu, t)
  }
  addLineSeries(t) {
    return this.Dw("Line", Zc, t)
  }
  removeSeries(t) {
    const e = ct(this.xw.get(t)),
      i = this.Tw.fd(e);
    this.lw.$t().fd(e), this.Vw(i), this.xw.delete(t), this.Sw.delete(e)
  }
  fw(t, e) {
    this.Vw(this.Tw.Xb(t, e))
  }
  mw(t, e) {
    this.Vw(this.Tw.tw(t, e))
  }
  subscribeClick(t) {
    this.kw.l(t)
  }
  unsubscribeClick(t) {
    this.kw.v(t)
  }
  subscribeCrosshairMove(t) {
    this.Cw.l(t)
  }
  unsubscribeCrosshairMove(t) {
    this.Cw.v(t)
  }
  subscribeDblClick(t) {
    this.yw.l(t)
  }
  unsubscribeDblClick(t) {
    this.yw.v(t)
  }
  priceScale(t) {
    return new cf(this.lw, t)
  }
  timeScale() {
    return this.Rw
  }
  applyOptions(t) {
    this.lw.Hh(no(t))
  }
  options() {
    return this.lw.W()
  }
  takeScreenshot() {
    return this.lw.bb()
  }
  autoSizeActive() {
    return this.lw.Sb()
  }
  chartElement() {
    return this.lw.kb()
  }
  paneSize() {
    const t = this.lw.Cb();
    return {
      height: t.height,
      width: t.width
    }
  }
  setCrosshairPosition(t, e, i) {
    const n = this.xw.get(i);
    if (n === void 0) return;
    const o = this.lw.$t().cr(n);
    o !== null && this.lw.$t().ld(t, e, o)
  }
  clearCrosshairPosition() {
    this.lw.$t().ad(!0)
  }
  Dw(t, e, i = {}, n) {
    mf(i.priceFormat);
    const o = vt(Mt(Zo), Mt(e), i),
      r = this.lw.$t().ud(t, o, n),
      l = new ff(r, this, this, this, this.U_);
    return this.xw.set(l, r), this.Sw.set(r, l), l
  }
  Vw(t) {
    const e = this.lw.$t();
    e.od(t.St.Lu, t.St.rw, t.St.hw), t.sw.forEach((i, n) => n.J(i.He, i.ew)), e.Fu()
  }
  Ow(t) {
    return ct(this.Sw.get(t))
  }
  Pw(t) {
    const e = new Map;
    t.Eb.forEach((n, o) => {
      const r = o.Jh(),
        l = _s(r)(n);
      if (r !== "Custom") Ot(Hd(l));
      else {
        const a = o.Ca();
        Ot(!a || a(l) === !1)
      }
      e.set(this.Ow(o), l)
    });
    const i = t.Lb !== void 0 && this.Sw.has(t.Lb) ? this.Ow(t.Lb) : void 0;
    return {
      time: t.Ib,
      logical: t.se,
      point: t.zb,
      hoveredSeries: i,
      hoveredObjectId: t.Nb,
      seriesData: e,
      sourceEvent: t.Fb
    }
  }
}

function gf(s, t, e) {
  let i;
  if (De(s)) {
    const o = document.getElementById(s);
    Ot(o !== null, `Cannot find element in DOM with id=${s}`), i = o
  } else i = s;
  const n = new vf(i, t, e);
  return t.setOptions(n.options()), n
}

function bf(s, t) {
  return gf(s, new Fn, Fn.Ad(t))
}
Object.assign(Object.assign({}, Zo), Go);
const oo = "chart-series-type-storage-key",
  Sr = s => {
    const t = zt("$iBkM1fJygO"),
      e = zt(() => ge.ONE_MINUTE, "$U7uRnIu5qm"),
      i = zt(() => $t.MARKET_CAP, "$oqBOSk6KRz"),
      n = zt(() => {
        const g = ie.CANDLESTICK;
        return Ce().$webApp.storage.local.get(oo) ?? g
      }, "$HolymaTkRj"),
      o = zt(() => s.jettonShortname, "$UDNpnPF3Rr"),
      r = zt("$OxUMQZpMxL"),
      l = zt(() => new AbortController, "$3srltZOr0B"),
      a = () => {
        l.value.abort(), l.value = new AbortController
      },
      h = g => {
        r.value = void 0, e.value = g, a(), p.value.exec()
      },
      c = g => {
        r.value = void 0, i.value = g, a(), p.value.exec()
      },
      u = g => {
        n.value = g, Ce().$webApp.storage.local.set(oo, g)
      },
      d = g => {
        const M = i.value,
          S = e.value,
          z = t.value;
        if (!z || z.type !== M || z.interval !== S) return {
          type: M,
          interval: S,
          data: g
        };
        const D = g.points.filter($ => z.data.points.some(T => T.timestamp === $.timestamp)),
          O = g.points.filter($ => !z.data.points.some(T => T.timestamp === $.timestamp));
        return {
          type: M,
          interval: S,
          data: {
            points: [...O, ...z.data.points.map($ => D.find(T => T.timestamp === $.timestamp) || $)]
          }
        }
      },
      f = async g => {
        if (r.value === g) return;
        const M = r.value;
        r.value = g;
        const {
          signal: S
        } = l.value, z = await si.getMemepadJettonCandleChart(o.value, {
          interval: e.value,
          type: i.value,
          fromTimestamp: g
        });
        S.aborted || (pt(z) ? t.value = d(z.data) : r.value = M)
      }, p = zt(() => $r(async () => {
        const g = await si.getMemepadJettonCandleChart(o.value, {
          interval: e.value,
          type: i.value
        });
        return Lr(g)
      }, g => t.value = d(g), 5e3), "$94wRLOqniR"), m = j(() => {
        var g;
        return t.value && t.value.type === $t.MARKET_CAP ? (g = [...t.value.data.points].sort((M, S) => M.timestamp - S.timestamp).at(-1)) == null ? void 0 : g.price : void 0
      });
    return {
      _flow: {
        init: async () => {
          o.value = s.jettonShortname, await p.value.exec()
        },
        destroy: () => {
          p.value.destroy(), t.value = void 0, e.value = ge.ONE_MINUTE, i.value = $t.MARKET_CAP, r.value = void 0, a()
        }
      },
      chart: j(() => t.value),
      chartType: j(() => i.value),
      chartInterval: j(() => e.value),
      chartSeriesType: j(() => n.value),
      chartMarketCap: m,
      updateChartSeriesType: u,
      updateChartType: c,
      updateChartInterval: h,
      fetchChartHistory: f
    }
  },
  yf = {
    class: "memepad-jetton-chart"
  },
  _f = {
    class: "controls"
  },
  wf = ["value"],
  Sf = {
    class: "label"
  },
  xf = ["value"],
  Mf = {
    class: "label"
  },
  kf = {
    key: 0,
    class: "chart-empty-wrapper"
  },
  Cf = {
    class: "inner"
  },
  Ef = {
    class: "label"
  },
  Tf = {
    key: 1,
    class: "chart-wrapper"
  },
  zf = lt({
    __name: "Chart",
    props: {
      jettonPnl: {},
      jettonShortname: {}
    },
    setup(s) {
      const t = s,
        {
          chart: e,
          chartInterval: i,
          chartType: n,
          chartSeriesType: o,
          updateChartInterval: r,
          updateChartType: l,
          updateChartSeriesType: a,
          fetchChartHistory: h
        } = Sr({
          jettonShortname: t.jettonShortname
        }),
        c = q(null),
        u = q(null),
        d = q(null),
        f = q(i.value),
        p = q(n.value),
        m = j(() => [{
          value: ge.ONE_MINUTE,
          label: `1${V("base.time.abbr.minutes")}`
        }, {
          value: ge.FIVE_MINUTES,
          label: `5${V("base.time.abbr.minutes")}`
        }, {
          value: ge.FIFTEEN_MINUTES,
          label: `15${V("base.time.abbr.minutes")}`
        }]),
        b = j(() => [{
          value: $t.MARKET_CAP,
          label: V("memepad.chart.tabs.market_cap")
        }, {
          value: $t.PRICE,
          label: V("memepad.chart.tabs.price")
        }]),
        y = j({
          get: () => i.value,
          set: T => {
            r(T)
          }
        }),
        g = j({
          get: () => n.value,
          set: T => {
            l(T)
          }
        }),
        M = new ResizeObserver(() => {
          var x;
          const T = c.value;
          T && ((x = u.value) == null || x.resize(T.clientWidth, T.clientHeight))
        }),
        S = () => {
          const T = c.value;
          T && M.observe(T)
        },
        z = () => {
          const T = c.value;
          T && M.unobserve(T)
        };
      let D = null;
      const O = (T, x, L) => {
          var nt;
          const I = (nt = Ce().$webApp.dataUnsafe.user) == null ? void 0 : nt.language_code;
          u.value || (u.value = bf(x, {
            localization: {
              timeFormatter: U => {
                const X = ot => String(ot).padStart(2, "0"),
                  J = new Date(U * 1e3);
                return `${X(J.getUTCHours())}:${X(J.getUTCMinutes())}`
              },
              priceFormatter: U => {
                if (g.value === $t.MARKET_CAP) return `$${ni(U,{accuracy:0})}`;
                {
                  if (Math.abs(U) < 1e-9) return "$0";
                  const [X, J] = U.toFixed(9).split("."), ot = J[0], F = J.slice(1).match(/^0+/), H = F ? F[0].length : 0, bt = H > 0 ? String.fromCharCode(8321 + H) : "", E = J.slice(H + 1).replace(/0+$/, "").slice(0, 3);
                  return `$${X}.${ot}${bt}${E}`
                }
              },
              locale: I
            },
            layout: {
              textColor: "#A6A6A6",
              fontSize: 12,
              attributionLogo: !1,
              background: {
                color: "transparent"
              }
            },
            grid: {
              vertLines: {
                color: "transparent"
              },
              horzLines: {
                color: "transparent"
              }
            },
            rightPriceScale: {
              borderColor: "transparent"
            },
            crosshair: {
              mode: ps.Magnet,
              horzLine: {
                color: "#ffffff",
                style: ci.Dashed,
                labelBackgroundColor: "#ffffff"
              },
              vertLine: {
                color: "#ffffff",
                style: ci.Dashed,
                labelBackgroundColor: "#ffffff"
              }
            }
          }), u.value.timeScale().applyOptions({
            borderColor: "transparent",
            secondsVisible: !0,
            timeVisible: !0,
            ticksVisible: !0,
            allowBoldLabels: !1
          }));
          const N = T.map(U => ({
            time: (() => {
              const X = new Date(U.timestamp);
              return (X.getTime() - X.getTimezoneOffset() * 60 * 1e3) / 1e3
            })(),
            open: U.open.toNumber(),
            high: U.high.toNumber(),
            low: U.low.toNumber(),
            close: U.close.toNumber(),
            value: U.price.toNumber()
          })).sort((U, X) => U.time - X.time);
          (!d.value || D !== L) && (d.value && u.value.removeSeries(d.value), L === ie.CANDLESTICK ? d.value = u.value.addCandlestickSeries({
            upColor: "#C4F85C",
            downColor: "#FF00C7",
            baseLineWidth: 2,
            wickDownColor: "#FF00C7",
            wickUpColor: "#C4F85C",
            borderDownColor: "#FF00C7",
            borderUpColor: "#C4F85C",
            priceFormat: {
              type: "price",
              precision: g.value === $t.MARKET_CAP ? 0 : 9,
              minMove: 1e-9
            }
          }) : d.value = u.value.addLineSeries({
            color: "#C4F85C",
            baseLineWidth: 2,
            crosshairMarkerBackgroundColor: "#C4F85C",
            crosshairMarkerBorderColor: "#000000",
            crosshairMarkerBorderWidth: 2,
            crosshairMarkerRadius: 3,
            priceFormat: {
              type: "price",
              precision: g.value === $t.MARKET_CAP ? 0 : 9,
              minMove: 1e-9
            }
          }), D = L, u.value.timeScale().subscribeVisibleLogicalRangeChange(U => {
            var rt, F, H, bt;
            if (!U || U.from >= 0) return;
            const X = (F = (rt = d.value) == null ? void 0 : rt.dataByIndex(0)) == null ? void 0 : F.time,
              J = (bt = (H = u.value) == null ? void 0 : H.timeScale().getVisibleRange()) == null ? void 0 : bt.from;
            if (!X || X !== J) return;
            const ot = (() => {
              const E = new Date(J * 1e3);
              return (E.getTime() + E.getTimezoneOffset() * 60 * 1e3) / 1e3
            })();
            h(ot)
          })), d.value.setData(N);
          const it = f.value !== i.value ? "interval" : p.value !== n.value ? "type" : "other";
          f.value = i.value, p.value = n.value, (it === "interval" || it === "type") && u.value.timeScale().fitContent()
        },
        $ = j(() => {
          var L;
          if (!((L = t.jettonPnl) != null && L.hasPnL)) return;
          const T = jr(t.jettonPnl.pnlAbsoluteUSD, {
              accuracy: 2,
              trim: !0
            }),
            x = ol(t.jettonPnl.pnlPercent);
          return {
            label: `P&L ${T} ${x.formatted}`,
            cls: x.cls
          }
        });
      return re(() => {
        var T;
        return {
          container: c.value,
          chart: (T = e.value) == null ? void 0 : T.data,
          chartSeriesType: o.value
        }
      }, T => {
        !T.container || !T.chart || O(T.chart.points, T.container, T.chartSeriesType)
      }, {
        immediate: !0
      }), re(c, T => T && S(), {
        immediate: !0
      }), Re(z), (T, x) => {
        const L = Oe;
        return C(), B("div", yf, [k("div", _f, [k("div", {
          class: "section",
          style: Hs({
            "grid-template-columns": `repeat(${v(b).length}, 1fr)`
          })
        }, [(C(!0), B(Rt, null, es(v(b), I => (C(), B("label", {
          key: I.value,
          class: oe(["item", {
            "is-active": v(n) === I.value
          }])
        }, [Bt(k("input", {
          "onUpdate:modelValue": x[0] || (x[0] = N => mt(g) ? g.value = N : null),
          type: "radio",
          name: "chart-type",
          value: I.value
        }, null, 8, wf), [
          [is, v(g)]
        ]), k("span", Sf, K(I.label), 1)], 2))), 128))], 4), k("div", {
          class: "section",
          style: Hs({
            "grid-template-columns": `repeat(${v(m).length}, 1fr)`
          })
        }, [(C(!0), B(Rt, null, es(v(m), I => (C(), B("label", {
          key: I.value,
          class: oe(["item", {
            "is-active": v(i) === I.value
          }])
        }, [Bt(k("input", {
          "onUpdate:modelValue": x[1] || (x[1] = N => mt(y) ? y.value = N : null),
          type: "radio",
          name: "chart-interval",
          value: I.value
        }, null, 8, xf), [
          [is, v(y)]
        ]), k("span", Mf, K(I.label), 1)], 2))), 128))], 4), k("button", {
          type: "button",
          class: "reset chart-type",
          onClick: x[2] || (x[2] = I => v(a)(v(o) === v(ie).LINEAR ? v(ie).CANDLESTICK : v(ie).LINEAR))
        }, [v(o) === v(ie).CANDLESTICK ? (C(), W(L, {
          key: 0,
          name: "chart-line",
          class: "icon"
        })) : (C(), W(L, {
          key: 1,
          name: "candle-chart",
          class: "icon"
        }))])]), !v(e) || !v(e).data.points.length ? (C(), B("div", kf, [x[4] || (x[4] = k("img", {
          src: Js,
          class: "lines"
        }, null, -1)), x[5] || (x[5] = k("img", {
          src: Rr,
          class: "empty"
        }, null, -1)), k("div", Cf, [x[3] || (x[3] = k("div", {
          class: "dot"
        }, null, -1)), k("div", Ef, K(("t" in T ? T.t : v(V))("memepad.jetton.chart.coming_text")), 1)])])) : (C(), B("div", Tf, [v($) ? (C(), B("div", {
          key: 0,
          class: oe(["pnl-label", v($).cls])
        }, K(v($).label), 3)) : Ct("", !0), k("div", {
          ref_key: "container",
          ref: c,
          class: "chart-container"
        }, null, 512), x[6] || (x[6] = k("img", {
          src: Js,
          class: "lines"
        }, null, -1))]))])
      }
    }
  }),
  Pf = ht(zf, [
    ["__scopeId", "data-v-92602654"]
  ]),
  If = {
    class: "label"
  },
  $f = {
    class: "memepad-jetton-actions-controls-unlock-sheet"
  },
  Lf = {
    class: "icon-wrapper"
  },
  jf = {
    class: "title"
  },
  Rf = {
    class: "subtitle"
  },
  Of = {
    class: "buttons-wrapper"
  },
  Af = lt({
    __name: "UnlockSheetAndButton",
    props: {
      jetton: {},
      jettonInformation: {},
      jettonSdk: {},
      unlockSuccessCallback: {
        type: Function
      },
      balances: {}
    },
    setup(s) {
      const t = s,
        e = q(!1),
        i = () => {
          e.value = !1, t.unlockSuccessCallback()
        };
      return (n, o) => {
        const r = Zt,
          l = ao,
          a = ks,
          h = co;
        return C(), B(Rt, null, [R(r, {
          class: "memepad-jetton-actions-controls-unlock-button",
          icon: "lock-open",
          type: v(jt).HIGHLIGHT,
          fill: "",
          "icon-align": "left",
          onClick: o[0] || (o[0] = c => e.value = !0)
        }, {
          default: et(() => [k("div", If, K(("t" in n ? n.t : v(V))("memepad.jetton.unlock.btn")), 1)]),
          _: 1
        }, 8, ["type"]), R(h, {
          modelValue: v(e),
          "onUpdate:modelValue": o[1] || (o[1] = c => mt(e) ? e.value = c : null)
        }, {
          default: et(() => [k("div", $f, [k("div", Lf, [R(l, {
            src: v(lo)(n.jetton.iconFileKey),
            size: 80
          }, null, 8, ["src"])]), k("div", jf, K(("t" in n ? n.t : v(V))("memepad.jetton.unlock.sheet.title", {
            ticker: n.jetton.ticker
          })), 1), k("div", Rf, K(("t" in n ? n.t : v(V))("memepad.jetton.unlock.sheet.subtitle", {
            ticker: n.jetton.ticker
          })), 1), k("div", Of, [R(a, {
            jetton: n.jetton,
            "jetton-information": n.jettonInformation,
            "jetton-sdk": n.jettonSdk,
            balances: n.balances,
            onUnlocked: i
          }, null, 8, ["jetton", "jetton-information", "jetton-sdk", "balances"])])])]),
          _: 1
        }, 8, ["modelValue"])], 64)
      }
    }
  }),
  Df = ht(Af, [
    ["__scopeId", "data-v-8b1a7291"]
  ]),
  Vf = {
    class: "label"
  },
  Wf = ["value", "name"],
  Bf = lt({
    __name: "KitTab",
    props: {
      label: {
        type: String,
        required: !0
      },
      value: {
        type: String,
        required: !0
      },
      type: {
        type: String,
        default: void 0
      }
    },
    setup(s) {
      const t = s,
        e = Or(uo);
      if (!e) throw Ss("Tabs injection not defined");
      const i = j(() => t.type ?? e.type.value),
        n = j({
          get() {
            return e.value.value === t.value
          },
          set() {
            e.updateValue(t.value)
          }
        });
      return (o, r) => (C(), B("label", {
        class: oe(["kit-tab", [`is-${v(i).toLowerCase()}`, {
          "is-active": v(n)
        }]])
      }, [k("span", Vf, K(s.label), 1), Bt(k("input", {
        "onUpdate:modelValue": r[0] || (r[0] = l => mt(n) ? n.value = l : null),
        type: "radio",
        value: s.value,
        name: v(e).name
      }, null, 8, Wf), [
        [is, v(n)]
      ])], 2))
    }
  }),
  xr = ht(Bf, [
    ["__scopeId", "data-v-94bc640b"]
  ]),
  Nf = {
    class: "list"
  },
  Ff = lt({
    __name: "KitTabs",
    props: ss({
      items: {
        type: Array,
        default: void 0
      },
      type: {
        type: String,
        default: ns.DEFAULT
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(s) {
      const t = s,
        e = os(s, "modelValue"),
        i = j(() => {
          var n;
          return ((n = t.items) == null ? void 0 : n.map(o => typeof o == "string" ? {
            value: o,
            label: o
          } : o)) ?? []
        });
      return Ar(uo, {
        value: j(() => e.value),
        updateValue: n => {
          e.value = n
        },
        type: j(() => t.type),
        name: Dr()
      }), (n, o) => {
        const r = xr,
          l = Vr("horizontal-wheel-scroll");
        return C(), B("div", {
          class: oe(["kit-tabs", `is-${s.type.toLowerCase()}`])
        }, [Bt((C(), B("div", Nf, [Wr(n.$slots, "default", {}, void 0, !0), (C(!0), B(Rt, null, es(v(i), a => (C(), W(r, {
          key: a.value,
          label: a.label,
          value: a.value,
          type: s.type
        }, null, 8, ["label", "value", "type"]))), 128))])), [
          [l]
        ])], 2)
      }
    }
  }),
  Uf = ht(Ff, [
    ["__scopeId", "data-v-74a842a0"]
  ]),
  Kf = {
    class: "memepad-jetton-action-controls-action-button"
  },
  Hf = {
    class: "info"
  },
  Jf = {
    class: "label"
  },
  Xf = {
    class: "label"
  },
  Yf = lt({
    __name: "ActionButton",
    props: {
      value: {},
      jetton: {},
      tab: {},
      inputState: {},
      tradePendings: {},
      balances: {}
    },
    emits: ["trade"],
    setup(s) {
      const t = s,
        e = () => Wt().memepad.memepadJettonTradeDisabledButtonClick(),
        i = j(() => Ms(t.value)),
        n = j(() => t.tradePendings[t.tab]),
        o = j(() => !!(n.value || !t.inputState || t.inputState.loading)),
        r = j(() => o.value ? !1 : !!(i.value.isZero() || !t.inputState || t.inputState.error));
      return (l, a) => {
        var p, m, b, y, g, M;
        const h = po,
          c = fi,
          u = mo,
          d = vo,
          f = Zt;
        return C(), B("div", Kf, [k("div", Hf, [l.inputState ? (C(), B(Rt, {
          key: 0
        }, [l.inputState.balanceLabel ? (C(), W(h, {
          key: 0,
          balance: l.inputState.balanceLabel
        }, null, 8, ["balance"])) : (C(), W(c, {
          key: 1,
          class: "skeleton"
        })), l.inputState.error || l.inputState.feesInfo ? (C(), W(u, {
          key: 2,
          details: (p = l.inputState.feesInfo) == null ? void 0 : p.details,
          "total-label": (m = l.inputState.feesInfo) == null ? void 0 : m.totalLabel,
          "error-message": (b = l.inputState.error) == null ? void 0 : b.message
        }, null, 8, ["details", "total-label", "error-message"])) : (C(), W(c, {
          key: 3,
          class: "skeleton"
        }))], 64)) : (C(), B(Rt, {
          key: 1
        }, [R(c, {
          class: "skeleton"
        }), R(c, {
          class: "skeleton"
        })], 64))]), ((g = (y = l.inputState) == null ? void 0 : y.error) == null ? void 0 : g.type) === ("MEMEPAD_TRADE_ERRORS" in l ? l.MEMEPAD_TRADE_ERRORS : v(el)).NOT_ENOUGH_TOKEN ? (C(), W(d, {
          key: 0,
          "jetton-shortname": l.jetton.shortname,
          "jetton-address": l.jetton.address,
          details: l.inputState.error.details,
          "input-value": l.tab === v(Q).BUY ? v(i).toNumber() : void 0,
          "value-balance": (M = l.balances.tokenBalance) == null ? void 0 : M.value.toNumber(),
          source: l.tab === v(Q).BUY ? ("ANALYTICS_MEMEPAD_TOP_UP_SHOW_SOURCE" in l ? l.ANALYTICS_MEMEPAD_TOP_UP_SHOW_SOURCE : v(Qi)).BUY : ("ANALYTICS_MEMEPAD_TOP_UP_SHOW_SOURCE" in l ? l.ANALYTICS_MEMEPAD_TOP_UP_SHOW_SOURCE : v(Qi)).SELL
        }, null, 8, ["jetton-shortname", "jetton-address", "details", "input-value", "value-balance", "source"])) : (C(), B("div", {
          key: 1,
          onPointerdown: a[2] || (a[2] = () => v(r) && e())
        }, [l.tab === v(Q).BUY ? (C(), W(f, {
          key: 0,
          fill: "",
          size: v(Ut).LARGE,
          type: v(jt).HIGHLIGHT,
          loading: v(o),
          disabled: v(r),
          onClick: a[0] || (a[0] = S => l.$emit("trade"))
        }, {
          default: et(() => [k("div", Jf, K(("t" in l ? l.t : v(V))("memepad.jetton.buy_button_label", {
            ticker: l.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "type", "loading", "disabled"])) : Ct("", !0), l.tab === v(Q).SELL ? (C(), W(f, {
          key: 1,
          fill: "",
          size: v(Ut).LARGE,
          type: v(jt).PINK,
          loading: v(o),
          disabled: v(r),
          onClick: a[1] || (a[1] = S => l.$emit("trade"))
        }, {
          default: et(() => [k("div", Xf, K(("t" in l ? l.t : v(V))("memepad.jetton.sell_button_label", {
            ticker: l.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "type", "loading", "disabled"])) : Ct("", !0)], 32))])
      }
    }
  }),
  Gf = ht(Yf, [
    ["__scopeId", "data-v-4fbee064"]
  ]),
  Zf = {
    class: "content"
  },
  qf = {
    class: "subtitle"
  },
  Qf = {
    key: 0
  },
  tp = {
    class: "label"
  },
  ep = lt({
    __name: "TradeModal",
    props: ss({
      jetton: {},
      jettonInformation: {},
      jettonBclData: {},
      isReleased: {
        type: Boolean
      },
      unlockEnabled: {
        type: Boolean
      },
      balances: {},
      jettonSdk: {},
      tradeSuccessCallback: {
        type: Function
      }
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {},
      tradePendings: {
        required: !0
      },
      tradePendingsModifiers: {}
    }),
    emits: ss(["trade", "unlock-success", "open-slippage", "close"], ["update:modelValue", "update:tradePendings"]),
    setup(s, {
      emit: t
    }) {
      const e = s,
        i = t,
        n = os(s, "modelValue"),
        o = os(s, "tradePendings"),
        r = q(),
        l = q(e.jettonSdk.getSlippage()),
        a = q("0"),
        h = j(() => Ms(a.value)),
        c = j({
          get: () => a.value,
          set: x => {
            a.value = x
          }
        }),
        u = j({
          get: () => a.value,
          set: x => {
            a.value = M(x)
          }
        }),
        d = j(() => Br(e.jetton.networkType)),
        {
          state: f,
          updateInputState: p
        } = $(),
        {
          useWalletOperationsErrorsStack: m,
          getTokenUsdValue: b
        } = ws(),
        y = T(),
        g = () => {
          var x;
          (x = r.value) == null || x.focusOnInput()
        },
        M = x => ni(x, {
          join: "emptyFractional"
        });
      re(() => n.value, () => {
        a.value = "0"
      });
      const S = j(() => {
        if (!(!f.value || f.value.loading)) {
          if (h.value.isZero()) return n.value === Q.BUY ? `0 ${e.jetton.ticker}` : "0 TON";
          if (!f.value.feesInfo || !f.value.ready) return "";
          if (n.value === Q.SELL) {
            const x = f.value.tradeInfo.maxReceive,
              L = `${Xs(x)} TON`,
              I = b({
                networkType: e.jetton.networkType,
                value: x
              });
            if (!I) return L;
            const N = Nr(I);
            return `${L} (≈$${N})`
          } else {
            const x = f.value.tradeInfo.maxReceive;
            return `≈${ni(x,{accuracy:2})} ${e.jetton.ticker}`
          }
        }
      });
      let z;
      const D = () => {
        Wt().memepad.memepadJettonSlippageButtonClick(), i("open-slippage")
      };
      re(() => [a.value, e.balances], () => p(), {
        deep: !0
      });
      const O = Ys(x => Wt().memepad.memepadJettonTradeInputUpdate(x), 300).debouncedFunction;
      re(h, x => O({
        value: x.toNumber(),
        type: n.value
      })), Re(() => {
        z == null || z.destroy()
      }), fo().initHandler(() => {
        i("close")
      }, "memepad-jetton-shortname-trade-trade-modal");

      function $() {
        const x = j(() => e.jettonSdk.tradeStateControls.getImmediateState({
            operation: n.value,
            amount: h.value
          })),
          L = q(e.jettonSdk.tradeStateControls.getEmptyState({
            operation: n.value
          })),
          I = j(() => x.value || L.value);
        let N = new AbortController;
        const it = () => {
            N.abort(), N = new AbortController
          },
          {
            debouncedFunction: nt
          } = Ys(async () => {
            if (it(), x.value) return;
            const {
              signal: X
            } = N, J = await e.jettonSdk.tradeStateControls.getState({
              operation: n.value,
              amount: h.value
            });
            X.aborted || (L.value = J)
          }, 600);
        return {
          state: I,
          updateInputState: () => {
            L.value = void 0, nt()
          }
        }
      }

      function T() {
        const x = Wt(),
          {
            addErrorToStackAndCheck: L
          } = m();
        return async () => {
          if (!f.value || !f.value.ready) return;
          const I = n.value,
            N = new Fr(h.value),
            it = f.value.tradeInfo,
            nt = e.jetton.ticker,
            U = e.jetton.id,
            X = e.jetton.address,
            J = e.jetton.shortname;
          await (async () => {
            o.value[I] = !0;
            const ot = () => {
                const E = rs(I === Q.BUY ? it.minReceive : N, nt),
                  A = rs(I === Q.BUY ? N : it.minReceive, "TON"),
                  G = I === Q.BUY ? V("memepad.jetton.buy.failed_alert", {
                    askLabel: E.frontendWithSymbol,
                    offerLabel: A.frontendWithSymbol
                  }) : V("memepad.jetton.sell.failed_alert", {
                    askLabel: E.frontendWithSymbol,
                    offerLabel: A.frontendWithSymbol
                  });
                ii().error(G)
              },
              rt = await (I === Q.BUY ? e.jettonSdk.buyJetton({
                tons: N,
                tradeInfoParams: it
              }) : e.jettonSdk.sellJetton({
                jettons: N,
                tradeInfoParams: it
              }));
            if (rt.err) {
              Ur().error("Memepad jetton trade error", rt.extra), o.value[I] = !1, ot(), L({
                value: N.toFixed(),
                operation: I
              });
              return
            }
            i("trade"), z = I === Q.BUY ? e.jettonSdk.getWaitForBuyStatus() : e.jettonSdk.getWaitForSellStatus(), await ro(5e3);
            const F = await z.exec({
                transactionHash: rt.data
              }),
              H = F ? "success" : "failed";
            if (I === Q.BUY ? x.memepad.memepadJettonBuy({
                status: H,
                jettonId: U,
                jettonShortname: J,
                jettonAddress: X,
                purchaseAmount: N.toNumber()
              }) : x.memepad.memepadJettonSell({
                status: H,
                jettonId: U,
                jettonShortname: J,
                jettonAddress: X,
                purchaseAmount: it.maxReceive.toNumber()
              }), !F) {
              o.value[I] = !1, ot();
              return
            }
            const bt = I === Q.BUY ? V("memepad.jetton.buy.success_alert", {
              ticker: nt,
              label: `${Xs(N)} TON`
            }) : V("memepad.jetton.sell.success_alert", {
              label: `${Kr(N).full} ${nt}`
            });
            ii().success(bt), o.value[I] = !1, e.tradeSuccessCallback()
          })()
        }
      }
      return (x, L) => {
        const I = xr,
          N = Uf,
          it = go,
          nt = fi,
          U = Oe,
          X = ks,
          J = Gf,
          ot = xs,
          rt = Zr,
          F = bo;
        return C(), W(F, {
          class: "memepad-jetton-trade-modal"
        }, {
          "top-center": et(() => [R(N, {
            modelValue: n.value,
            "onUpdate:modelValue": L[0] || (L[0] = H => n.value = H),
            class: "tabs"
          }, {
            default: et(() => [R(I, {
              label: ("t" in x ? x.t : v(V))("memepad.jetton.buy_tab"),
              value: v(Q).BUY,
              type: v(ns).PRIMARY,
              class: "buy-tab"
            }, null, 8, ["label", "value", "type"]), R(I, {
              label: ("t" in x ? x.t : v(V))("memepad.jetton.sell_tab"),
              value: v(Q).SELL,
              type: v(ns).SECONDARY,
              class: "sell-tab"
            }, null, 8, ["label", "value", "type"])]),
            _: 1
          }, 8, ["modelValue"])]),
          default: et(() => [k("div", Zf, [(C(), W(it, {
            ref_key: "actionControlsInputComp",
            ref: r,
            key: n.value,
            modelValue: v(c),
            "onUpdate:modelValue": L[1] || (L[1] = H => mt(c) ? c.value = H : null),
            postfix: n.value === "buy" ? "TON" : x.jetton.ticker,
            modifier: M,
            onBlur: g
          }, null, 8, ["modelValue", "postfix"])), k("div", qf, [v(S) ? (C(), B("span", Qf, K(v(S)), 1)) : v(S) === void 0 ? (C(), W(nt, {
            key: 1,
            class: "skeleton"
          })) : Ct("", !0)]), k("button", {
            type: "button",
            class: "reset slippage-btn",
            onClick: D
          }, [k("span", tp, K(`${("t"in x?x.t:v(V))("memepad.jetton.slippage_btn")} ${v(l)}%`), 1), R(U, {
            name: "arrow-caret-down",
            class: "icon"
          })])])]),
          "bottom-action": et(() => [R(ot, {
            "force-loading": x.unlockEnabled === void 0 && x.isReleased
          }, {
            default: et(() => [x.unlockEnabled ? (C(), W(X, {
              key: 0,
              jetton: x.jetton,
              "jetton-information": x.jettonInformation,
              "jetton-sdk": x.jettonSdk,
              balances: x.balances,
              onUnlocked: L[2] || (L[2] = H => x.$emit("unlock-success"))
            }, null, 8, ["jetton", "jetton-information", "jetton-sdk", "balances"])) : (C(), W(J, {
              key: 1,
              value: v(a),
              tab: n.value,
              jetton: x.jetton,
              "trade-pendings": o.value,
              balances: x.balances,
              "input-state": v(f),
              onTrade: v(y)
            }, null, 8, ["value", "tab", "jetton", "trade-pendings", "balances", "input-state", "onTrade"]))]),
            _: 1
          }, 8, ["force-loading"])]),
          "bottom-helpers": et(() => [R(rt, {
            modelValue: v(u),
            "onUpdate:modelValue": L[3] || (L[3] = H => mt(u) ? u.value = H : null),
            tab: n.value,
            balances: x.balances,
            "token-balance": x.balances.tokenBalance,
            "jetton-balance": x.balances.jettonBalance,
            "token-ticker": v(d)
          }, null, 8, ["modelValue", "tab", "balances", "token-balance", "jetton-balance", "token-ticker"])]),
          _: 1
        })
      }
    }
  }),
  ip = ht(ep, [
    ["__scopeId", "data-v-b04857ce"]
  ]),
  sp = {
    class: "title"
  },
  np = {
    class: "content"
  },
  op = {
    class: "actions"
  },
  rp = {
    key: 1,
    class: "text"
  },
  lp = 1,
  ap = 99,
  hp = lt({
    __name: "SlippageModal",
    props: {
      jettonSdk: {}
    },
    emits: ["slippage-updated", "close"],
    setup(s, {
      emit: t
    }) {
      const e = s,
        i = t,
        n = q(),
        o = () => {
          var c;
          (c = n.value) == null || c.focusOnInput()
        },
        r = q(e.jettonSdk.getSlippage().toString()),
        l = j(() => Ms(r.value)),
        a = j(() => l.value.lt(lp) ? V("memepad.jetton.slippage.error_message.too_low") : l.value.gt(ap) ? V("memepad.jetton.slippage.error_message.too_high") : ""),
        h = () => {
          if (a.value) return;
          const c = parseFloat(r.value);
          e.jettonSdk.getSlippage() !== c ? (Wt().memepad.memepadJettonSlippageUpdate({
            value: c
          }), e.jettonSdk.updateSlippage(c), i("slippage-updated")) : i("close")
        };
      return fo().initHandler(() => {
        i("close")
      }, "memepad-jetton-shortname-trade-slippage-modal"), (c, u) => {
        const d = go,
          f = ll,
          p = Zt,
          m = bo;
        return C(), W(m, {
          class: "memepad-jetton-action-controls-slippage-modal"
        }, {
          "top-center": et(() => [k("div", sp, K(("t" in c ? c.t : v(V))("memepad.jetton.slippage.title")), 1)]),
          default: et(() => [k("div", np, [R(d, {
            ref_key: "actionControlsInputComp",
            ref: n,
            modelValue: v(r),
            "onUpdate:modelValue": u[0] || (u[0] = b => mt(r) ? r.value = b : null),
            postfix: "%",
            modifier: b => ("formatFloatLine" in c ? c.formatFloatLine : v(ni))(b, {
              join: "emptyFractional"
            }),
            onBlur: o
          }, null, 8, ["modelValue", "modifier"]), u[1] || (u[1] = k("div", {
            class: "subtitle-compensator"
          }, null, -1))])]),
          "bottom-action": et(() => [k("div", op, [v(a) ? (C(), W(f, {
            key: 0,
            "error-message": v(a)
          }, null, 8, ["error-message"])) : (C(), B("div", rp, K(("t" in c ? c.t : v(V))("memepad.jetton.slippage.text")), 1)), R(p, {
            label: ("t" in c ? c.t : v(V))("memepad.jetton.slippage.done_btn"),
            fill: "",
            size: v(Ut).LARGE,
            type: v(a) ? v(jt).HIGHLIGHT : v(jt).PRIMARY,
            disabled: !!v(a),
            onClick: h
          }, null, 8, ["label", "size", "type", "disabled"])])]),
          _: 1
        })
      }
    }
  }),
  cp = ht(hp, [
    ["__scopeId", "data-v-3e1adef7"]
  ]),
  up = {
    class: "memepad-jetton-action-controls-trade-buttons"
  },
  dp = {
    class: "label"
  },
  fp = {
    class: "label"
  },
  pp = lt({
    __name: "TradeButtons",
    props: {
      tradePendings: {}
    },
    emits: ["click"],
    setup(s, {
      emit: t
    }) {
      const e = t,
        i = Wt(),
        n = () => {
          i.memepad.memepadTradeButtonBuyClick(), e("click", Q.BUY)
        },
        o = () => {
          i.memepad.memepadTradeButtonSellClick(), e("click", Q.SELL)
        };
      return (r, l) => {
        const a = Zt;
        return C(), B("div", up, [R(a, {
          class: "buy-button",
          type: v(jt).HIGHLIGHT,
          loading: r.tradePendings[v(Q).BUY],
          onClick: n
        }, {
          default: et(() => [k("span", dp, K(("t" in r ? r.t : v(V))("memepad.jetton.buy_button_preview_label")), 1)]),
          _: 1
        }, 8, ["type", "loading"]), R(a, {
          class: "sell-button",
          type: v(jt).PINK,
          loading: r.tradePendings[v(Q).SELL],
          onClick: o
        }, {
          default: et(() => [k("span", fp, K(("t" in r ? r.t : v(V))("memepad.jetton.sell_button_preview_label")), 1)]),
          _: 1
        }, 8, ["type", "loading"])])
      }
    }
  }),
  mp = ht(pp, [
    ["__scopeId", "data-v-3f7ac605"]
  ]),
  vp = {
    class: "memepad-jetton-action-controls"
  },
  gp = lt({
    __name: "ActionControls",
    props: {
      jetton: {},
      jettonInformation: {},
      jettonBclData: {},
      isReleased: {
        type: Boolean
      },
      unlockEnabled: {
        type: Boolean
      },
      balances: {},
      jettonSdk: {}
    },
    emits: ["trade-success", "unlock-success"],
    setup(s, {
      emit: t
    }) {
      const e = t,
        i = q(Q.BUY),
        n = Hr({
          [Q.BUY]: !1,
          [Q.SELL]: !1
        }),
        o = q(),
        r = c => {
          i.value = c, o.value = "trade"
        },
        l = () => {
          o.value = void 0
        },
        a = () => {
          e("trade-success")
        },
        h = () => {
          e("unlock-success")
        };
      return (c, u) => {
        const d = Df,
          f = ip,
          p = cp,
          m = mp,
          b = xs;
        return C(), B("div", vp, [R(b, {
          "force-loading": c.unlockEnabled === void 0 && c.isReleased,
          "button-size": v(Ut).MEDIUM
        }, {
          default: et(() => [c.unlockEnabled ? (C(), W(d, {
            key: 0,
            jetton: c.jetton,
            "jetton-information": c.jettonInformation,
            "jetton-sdk": c.jettonSdk,
            "unlock-success-callback": h,
            balances: c.balances
          }, null, 8, ["jetton", "jetton-information", "jetton-sdk", "balances"])) : (C(), B(Rt, {
            key: 1
          }, [v(o) === "trade" ? (C(), W(f, {
            key: 0,
            modelValue: v(i),
            "onUpdate:modelValue": u[0] || (u[0] = y => mt(i) ? i.value = y : null),
            "trade-pendings": v(n),
            "onUpdate:tradePendings": u[1] || (u[1] = y => mt(n) ? n.value = y : null),
            jetton: c.jetton,
            "jetton-information": c.jettonInformation,
            "jetton-bcl-data": c.jettonBclData,
            balances: c.balances,
            "is-released": c.isReleased,
            "unlock-enabled": c.unlockEnabled,
            "jetton-sdk": c.jettonSdk,
            "trade-success-callback": a,
            onTrade: l,
            onUnlockSuccess: u[2] || (u[2] = y => c.$emit("unlock-success")),
            onOpenSlippage: u[3] || (u[3] = y => o.value = "slippage"),
            onClose: u[4] || (u[4] = y => o.value = void 0)
          }, null, 8, ["modelValue", "trade-pendings", "jetton", "jetton-information", "jetton-bcl-data", "balances", "is-released", "unlock-enabled", "jetton-sdk"])) : Ct("", !0), v(o) === "slippage" ? (C(), W(p, {
            key: 1,
            "jetton-sdk": c.jettonSdk,
            onSlippageUpdated: u[5] || (u[5] = y => o.value = "trade"),
            onClose: u[6] || (u[6] = y => o.value = "trade")
          }, null, 8, ["jetton-sdk"])) : Ct("", !0), R(m, {
            "trade-pendings": v(n),
            onClick: r
          }, null, 8, ["trade-pendings"])], 64))]),
          _: 1
        }, 8, ["force-loading", "button-size"])])
      }
    }
  }),
  bp = ht(gp, [
    ["__scopeId", "data-v-6d30715d"]
  ]),
  yp = {
    class: "memepad-jetton-page-trade"
  },
  _p = lt({
    __name: "PageTrade",
    props: {
      jetton: {},
      jettonInformation: {},
      jettonPnl: {},
      jettonReactions: {},
      updateJettonReaction: {
        type: Function
      },
      isReleased: {
        type: Boolean
      },
      unlockEnabled: {
        type: Boolean
      },
      balances: {},
      jettonSdk: {},
      chartMarketCap: {}
    },
    emits: ["trade-success", "unlock-success", "share", "copy"],
    setup(s) {
      const t = s,
        e = j(() => t.chartMarketCap ? t.chartMarketCap : t.jettonInformation.marketCap),
        i = j(() => {
          var l, a, h, c;
          const n = (l = t.jettonInformation) == null ? void 0 : l.tokenCollected,
            o = (a = t.jetton) == null ? void 0 : a.tokenForDex,
            r = o && n.div(o).times(100);
          return {
            isReleased: t.isReleased,
            percent: r,
            collected: n,
            total: o,
            marketDetails: {
              marketCap: e.value,
              listRows: {
                holdersCount: (h = t.jettonInformation) == null ? void 0 : h.holdersCount,
                transactionsCount: (c = t.jettonInformation) == null ? void 0 : c.transactionsCount,
                transactionsVolume: t.jettonInformation.transactionsVolume
              }
            }
          }
        });
      return (n, o) => {
        const r = Il,
          l = Bc,
          a = qr,
          h = Pf,
          c = rl,
          u = bp;
        return C(), B("div", yp, [R(r, {
          jetton: n.jetton,
          "jetton-information": n.jettonInformation,
          "is-released": n.isReleased,
          onShare: o[0] || (o[0] = d => n.$emit("share")),
          onCopy: o[1] || (o[1] = d => n.$emit("copy"))
        }, null, 8, ["jetton", "jetton-information", "is-released"]), R(l, {
          jetton: n.jetton,
          "jetton-information": n.jettonInformation
        }, null, 8, ["jetton", "jetton-information"]), R(a, Jr(Xr(v(i))), null, 16), R(h, {
          "jetton-pnl": n.jettonPnl,
          "jetton-shortname": n.jetton.shortname,
          class: "chart"
        }, null, 8, ["jetton-pnl", "jetton-shortname"]), R(c, {
          reactions: n.jettonReactions,
          "update-callback": n.updateJettonReaction,
          type: "trade",
          class: "reactions"
        }, null, 8, ["reactions", "update-callback"]), R(u, {
          jetton: n.jetton,
          "jetton-information": n.jettonInformation,
          "is-released": n.isReleased,
          "unlock-enabled": n.unlockEnabled,
          balances: n.balances,
          "jetton-sdk": n.jettonSdk,
          class: "action-controls",
          onTradeSuccess: o[2] || (o[2] = d => n.$emit("trade-success")),
          onUnlockSuccess: o[3] || (o[3] = d => n.$emit("unlock-success"))
        }, null, 8, ["jetton", "jetton-information", "is-released", "unlock-enabled", "balances", "jetton-sdk"])])
      }
    }
  }),
  wp = ht(_p, [
    ["__scopeId", "data-v-f66155e1"]
  ]),
  qi = (s, t) => {
    let e = !1,
      i;
    i = re(s, n => {
      e || pt(n) && (e = !0, i == null || i(), t(n.data))
    }, {
      immediate: !0
    })
  },
  Ap = lt({
    inheritAttrs: !1,
    __name: "trade",
    emits: ["share", "copy"],
    setup(s) {
      const t = Yr(),
        e = j(() => t.jetton),
        i = j(() => t.jettonShortname),
        n = j(() => t.jettonInformation),
        o = j(() => t.jettonReactions),
        r = j(() => t.updateJettonReaction),
        {
          addresses: l,
          getNetworkTokenBalance: a
        } = ws(),
        h = Gr().state,
        {
          jettonBalance: c,
          jettonUnlockEnabled: u,
          jettonPnl: d,
          ...f
        } = D(),
        {
          _flow: p,
          chartMarketCap: m
        } = Sr({
          jettonShortname: i.value
        }),
        b = () => f.update(),
        y = () => f.resetAndUpdateUnlocked(),
        g = j(() => ({
          jettonBalance: c.value ? rs(c.value, e.value.ticker) : void 0,
          tokenBalance: a(e.value.networkType)
        })),
        M = j(() => {
          if (!(!n.value || !l.value)) return Qr({
            addresses: l.value,
            jetton: e.value,
            isReleased: n.value.isReleased,
            sdkType: e.value.sdkType,
            dexType: e.value.dexType,
            networkType: e.value.networkType,
            balances: g.value
          })
        }),
        S = () => {
          f.init(), p.init()
        },
        z = () => {
          p.destroy(), f.destroy()
        };
      S(), Re(() => {
        z()
      });

      function D() {
        const O = q(),
          $ = q(),
          T = q();
        let x, L, I;
        const N = {
          BALANCE_UPDATE: 6e4,
          UNLOCK_ENABLED_UPDATE: 6e4,
          PNL_UPDATE: 6e4
        };

        function it() {
          const J = () => !M.value || h.value.status !== "connected" ? Qt() : St({
            jettonSdk: M.value
          });
          qi(J, () => {
            x = Ti(async () => {
              const F = J();
              if (!pt(F)) return Qt();
              const H = await F.data.jettonSdk.getUserJettonBalance();
              return St((pt(H) ? H.data : O.value) || O.value)
            }, F => O.value = F, N.BALANCE_UPDATE), x.exec()
          });
          const ot = () => !M.value || !n.value || h.value.status !== "connected" || !O.value || !n.value.isReleased ? Qt() : St({
            jettonSdk: M.value,
            balance: O.value,
            jettonInformation: n.value
          });
          qi(ot, () => {
            L = Ti(async () => {
              if ($.value === !1) return St(!1);
              const F = ot();
              if (!pt(F)) return Qt();
              const H = await F.data.jettonSdk.getUnlockEnabled();
              return St(pt(H) ? H.data : $.value)
            }, F => $.value = F, N.UNLOCK_ENABLED_UPDATE), L == null || L.exec()
          });
          const rt = () => !n.value || h.value.status !== "connected" ? Qt() : St({
            walletAddress: h.value.address,
            jettonShortname: e.value.shortname
          });
          qi(rt, () => {
            I = Ti(async () => {
              const F = rt();
              if (!pt(F)) return Qt();
              const H = await si.getMemepadJettonPnl(F.data.jettonShortname, F.data.walletAddress);
              return St((pt(H) ? H.data : T.value) || T.value)
            }, F => T.value = F, N.PNL_UPDATE), I == null || I.exec()
          })
        }
        return {
          init: it,
          destroy: () => {
            x == null || x.destroy(), L == null || L.destroy(), I == null || I.destroy(), O.value = void 0, $.value = void 0, T.value = void 0
          },
          update: () => {
            x == null || x.exec(), L == null || L.exec(), I == null || I.exec()
          },
          resetAndUpdateUnlocked: () => {
            $.value = void 0, L == null || L.exec()
          },
          jettonBalance: j(() => O.value),
          jettonUnlockEnabled: j(() => $.value),
          jettonPnl: j(() => T.value)
        }
      }
      return (O, $) => {
        const T = Mr,
          x = yl,
          L = wp;
        return !v(n) || !v(l) || !v(M) || v(n).status === v(Gs).IN_PROGRESS ? (C(), W(T, {
          key: 0
        })) : v(n).status === v(Gs).LISTED_TO_DEX ? (C(), W(x, {
          key: 1,
          jetton: v(e),
          "jetton-information": v(n),
          "unlock-enabled": v(u),
          "jetton-sdk": v(M),
          balances: v(g)
        }, null, 8, ["jetton", "jetton-information", "unlock-enabled", "jetton-sdk", "balances"])) : (C(), W(L, {
          key: 2,
          jetton: v(e),
          "jetton-information": v(n),
          "jetton-pnl": v(d),
          "chart-market-cap": v(m),
          "jetton-reactions": v(o),
          "update-jetton-reaction": v(r),
          "is-released": v(n).isReleased,
          "unlock-enabled": v(u),
          "jetton-sdk": v(M),
          balances: v(g),
          onTradeSuccess: b,
          onUnlockSuccess: y,
          onShare: $[0] || ($[0] = I => O.$emit("share", "trade")),
          onCopy: $[1] || ($[1] = I => O.$emit("copy", "trade"))
        }, null, 8, ["jetton", "jetton-information", "jetton-pnl", "chart-market-cap", "jetton-reactions", "update-jetton-reaction", "is-released", "unlock-enabled", "jetton-sdk", "balances"]))
      }
    }
  });
export {
  Ap as
  default
};