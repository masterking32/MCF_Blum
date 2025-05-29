import {
  d as st,
  o as _,
  c as E,
  b as R,
  a as S,
  t as A,
  _ as Ot,
  f as lt,
  y as B,
  C as Y,
  F as dt,
  q as de,
  E as ht,
  e as m,
  bx as Pr,
  j,
  a5 as Bt,
  I as tt,
  af as We,
  by as fe,
  z as O,
  a9 as Jt,
  am as gt,
  bz as co,
  ak as ai,
  x as te,
  b3 as uo,
  p as bt,
  aJ as $r,
  b4 as fo,
  bo as Lr,
  b0 as rs,
  b1 as jr,
  a7 as po,
  L as Rr,
  aL as Ar,
  R as Li,
  w as Ft,
  O as ji,
  n as ae,
  u as Or,
  aG as Dr,
  B as Rt,
  ag as ks,
  h as Pe,
  aa as mo,
  ai as Mt,
  ah as hi,
  bv as Ut,
  b5 as Wt,
  bA as vo,
  b2 as Ys,
  ae as ci,
  aH as ls,
  m as Gs,
  aO as It,
  bB as Se,
  bC as Lt,
  bD as oe,
  aP as Vr,
  al as Wr,
  bE as Nr,
  J as he,
  bF as as,
  bG as Zs,
  bH as Br,
  bI as Fr,
  bJ as go,
  a4 as ui,
  bK as hs,
  A as di,
  bL as Ur,
  b6 as Kr,
  a2 as Hr,
  aq as Jr,
  bM as q,
  bN as Xr,
  bO as qs,
  Y as ni,
  a3 as bo,
  g as Yr,
  N as Qs,
  bP as Gr,
  bQ as Zr,
  bR as qr,
  bp as Qr,
  bw as tl,
  k as el,
  bS as il,
  bT as tn,
  P as sl,
  ad as Ri,
  aF as ie
} from "./OTci2SnY.js";
import {
  _ as nl
} from "./CpMdIGF_.js";
import {
  _ as Ne
} from "./C-AfopAy.js";
import {
  _ as yo
} from "./BQZBAlEl.js";
import {
  _ as _o
} from "./bLkoCpqM.js";
import {
  _ as wo,
  a as xs,
  f as Cs,
  b as So,
  c as Mo,
  g as ol
} from "./BzgymCC_.js";
import {
  M as rl,
  a as ll
} from "./1WIz8oN4.js";
import {
  u as Es
} from "./W6gTW2ol.js";
import {
  _ as al
} from "./CGEs3GdN.js";
import {
  a as hl
} from "./CUsSTWSZ.js";
import {
  _ as cl
} from "./CBQFN1Au.js";
import {
  g as ul
} from "./CJkdctNp.js";
import {
  _ as dl
} from "./tjlFJSq8.js";
import "./CMCllNmi.js";
import "./x-Xd4p_6.js";
import "./CMam5PgC.js";
import "./C9fWHaux.js";
const fl = {
    class: "memepad-jetton-action-controls-balance"
  },
  pl = {
    class: "label"
  },
  ml = st({
    __name: "Balance",
    props: {
      balance: {}
    },
    setup(s) {
      return (t, e) => {
        const i = Ot;
        return _(), E("div", fl, [R(i, {
          name: "wallet",
          class: "icon"
        }), S("span", pl, A(t.balance), 1)])
      }
    }
  }),
  ko = lt(ml, [
    ["__scopeId", "data-v-5ed33e11"]
  ]),
  vl = {
    type: "button",
    class: "memepad-jetton-action-controls-fees"
  },
  gl = {
    key: 1,
    class: "fees"
  },
  bl = {
    class: "tooltip-detail"
  },
  yl = {
    key: 0
  },
  _l = {
    class: "label"
  },
  wl = st({
    __name: "Fees",
    props: {
      details: {},
      totalLabel: {},
      errorMessage: {}
    },
    setup(s) {
      return (t, e) => {
        const i = yo,
          n = Ot,
          o = _o;
        return _(), E("div", vl, [t.errorMessage ? (_(), B(i, {
          key: 0,
          "error-message": t.errorMessage
        }, null, 8, ["error-message"])) : t.details && t.totalLabel ? (_(), E("div", gl, [t.details.length ? (_(), B(o, {
          key: 0,
          "text-min-width": 155,
          alignment: m(Pr).TOP
        }, {
          default: Y(() => [R(n, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: Y(() => [S("div", bl, [(_(!0), E(dt, null, de(t.details, (r, l) => (_(), E(dt, {
            key: r.label
          }, [S("span", null, A(r.label), 1), l !== t.details.length - 1 ? (_(), E("br", yl)) : ht("", !0)], 64))), 128))])]),
          _: 1
        }, 8, ["alignment"])) : ht("", !0), S("span", _l, A(t.totalLabel), 1)])) : ht("", !0)])
      }
    }
  }),
  xo = lt(wl, [
    ["__scopeId", "data-v-1a2557c2"]
  ]),
  Sl = {
    class: "memepad-jetton-action-controls-unlock-button"
  },
  Ml = {
    class: "info"
  },
  kl = {
    class: "label"
  },
  xl = st({
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
        o = Bt(),
        {
          addErrorToStackAndCheck: r
        } = Es().useWalletOperationsErrorsStack(),
        l = tt(!1),
        a = e.jettonSdk.getWaitForUnlockStatus(),
        h = async () => {
          if (c.value) return;
          const u = () => ai().error(O("memepad.jetton.unlock.failed_alert", {
              ticker: e.jetton.ticker
            })),
            d = v => {
              o.memepad.memepadJettonUnlock({
                status: v,
                jettonId: e.jetton.id,
                jettonShortname: e.jetton.shortname,
                jettonAddress: e.jetton.address
              })
            };
          l.value = !0;
          const f = await e.jettonSdk.unlockWallet();
          if (!gt(f)) {
            d("failed"), u(), r({
              address: e.jetton.address
            }, {
              source: fe.UNLOCK
            });
            return
          }
          await co(5e3), await a.exec({
            transactionHash: f.data
          }) ? (ai().success(O("memepad.jetton.unlock.success_alert", {
            ticker: e.jetton.ticker
          })), d("success"), n("unlocked")) : (d("failed"), u()), l.value = !1
        }, c = j(() => !!(l.value || !i.value.feesInfo));
      return We(() => {
        a.destroy()
      }), (u, d) => {
        var g, x, k;
        const f = ko,
          p = Ne,
          v = xo,
          b = wo,
          y = te;
        return _(), E("div", Sl, [S("div", Ml, [m(i).balanceLabel ? (_(), B(f, {
          key: 0,
          balance: m(i).balanceLabel
        }, null, 8, ["balance"])) : (_(), B(p, {
          key: 1,
          class: "skeleton"
        })), m(i).feesInfo ? (_(), B(v, {
          key: 2,
          details: m(i).feesInfo.details,
          "total-label": m(i).feesInfo.totalLabel,
          "error-message": (g = m(i).error) == null ? void 0 : g.message
        }, null, 8, ["details", "total-label", "error-message"])) : (_(), B(p, {
          key: 3,
          class: "skeleton"
        }))]), ((x = m(i).error) == null ? void 0 : x.type) === ("MEMEPAD_UNLOCK_ERRORS" in u ? u.MEMEPAD_UNLOCK_ERRORS : m(rl)).NOT_ENOUGH_TOKEN ? (_(), B(b, {
          key: 0,
          "jetton-shortname": u.jetton.shortname,
          "jetton-address": u.jetton.address,
          details: m(i).error.details,
          source: ("ANALYTICS_MEMEPAD_OPERATION_SOURCE" in u ? u.ANALYTICS_MEMEPAD_OPERATION_SOURCE : m(fe)).UNLOCK,
          "value-balance": (k = u.balances.tokenBalance) == null ? void 0 : k.value.toNumber()
        }, null, 8, ["jetton-shortname", "jetton-address", "details", "source", "value-balance"])) : (_(), B(y, {
          key: 1,
          fill: "",
          icon: "lock-open",
          "icon-align": "left",
          size: m(Jt).LARGE,
          class: "button",
          loading: m(c),
          disabled: !!m(i).error,
          onClick: h
        }, {
          default: Y(() => [S("div", kl, A(("t" in u ? u.t : m(O))("memepad.jetton.unlock_btn", {
            ticker: u.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "loading", "disabled"]))])
      }
    }
  }),
  Ts = lt(xl, [
    ["__scopeId", "data-v-1fa12b53"]
  ]),
  Cl = {
    class: "memepad-jetton-moving-to-dex-page"
  },
  El = {
    class: "content"
  },
  Tl = {
    class: "image-wrapper"
  },
  zl = {
    class: "title"
  },
  Il = {
    class: "subtitle"
  },
  Pl = {
    class: "wallet-and-button"
  },
  $l = st({
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
        e = tt(!1);
      return hl("memepad-jetton-moving-to-dex"), (i, n) => {
        const o = nl,
          r = $r,
          l = fo,
          a = Ts,
          h = te,
          c = xs,
          u = al,
          d = Lr;
        return _(), E("div", Cl, [R(o), S("div", El, [S("div", Tl, [R(r, {
          size: 342,
          name: "animations/Clover",
          class: "animation"
        }), R(l, {
          src: m(uo)(i.jetton.iconFileKey),
          size: 80
        }, null, 8, ["src"])]), S("div", zl, A(("t" in i ? i.t : m(O))("memepad.moving_to_dex.title")), 1), S("div", Il, A(("t" in i ? i.t : m(O))("memepad.moving_to_dex.subtitle", {
          ticker: i.jetton.ticker
        })), 1)]), R(u, null, {
          default: Y(() => [S("div", Pl, [R(c, {
            "force-loading": i.unlockEnabled === void 0
          }, {
            default: Y(() => [i.unlockEnabled ? (_(), B(a, {
              key: 0,
              jetton: i.jetton,
              "jetton-information": i.jettonInformation,
              "jetton-sdk": i.jettonSdk,
              balances: i.balances,
              onUnlocked: n[0] || (n[0] = f => i.$emit("unlock-success"))
            }, null, 8, ["jetton", "jetton-information", "jetton-sdk", "balances"])) : (_(), B(h, {
              key: 1,
              label: ("t" in i ? i.t : m(O))("memepad.jetton.share_token_link"),
              fill: "",
              size: m(Jt).LARGE,
              onClick: n[1] || (n[1] = f => e.value = !0)
            }, null, 8, ["label", "size"]))]),
            _: 1
          }, 8, ["force-loading"])])]),
          _: 1
        }), R(d, {
          modelValue: m(e),
          "onUpdate:modelValue": n[2] || (n[2] = f => bt(e) ? e.value = f : null),
          "jetton-shortname": t.jetton.shortname,
          ticker: i.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])])
      }
    }
  }),
  Ll = lt($l, [
    ["__scopeId", "data-v-dbae86fa"]
  ]),
  jl = {
    class: "memepad-jetton-header"
  },
  Rl = {
    class: "jetton"
  },
  Al = {
    class: "info"
  },
  Ol = {
    class: "info-top"
  },
  Dl = {
    class: "ticker"
  },
  Vl = {
    key: 0,
    class: "live"
  },
  Wl = {
    key: 1,
    class: "spotlight"
  },
  Nl = {
    class: "info-bottom"
  },
  Bl = {
    class: "right"
  },
  Fl = {
    class: "label"
  },
  Ul = st({
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
          const i = rs(t.jetton.releaseTimestamp).label;
          return t.isReleased ? `${i} • STON.fi` : i
        });
      return (i, n) => {
        const o = cl,
          r = Ot;
        return _(), E("div", jl, [S("div", Rl, [R(o, {
          jetton: i.jetton
        }, null, 8, ["jetton"]), S("div", Al, [S("div", Ol, [S("div", Dl, A(i.jetton.ticker), 1), i.jettonInformation.stream.online ? (_(), E("div", Vl, n[2] || (n[2] = [S("div", {
          class: "dot"
        }, null, -1)]))) : ht("", !0), i.jettonInformation.inSpotlight ? (_(), E("div", Wl, [R(r, {
          name: "fire",
          class: "icon"
        }), n[3] || (n[3] = S("span", {
          class: "label"
        }, "Spotlight", -1))])) : ht("", !0)]), S("div", Nl, A(m(e)), 1)])]), S("div", Bl, [S("button", {
          type: "button",
          class: "reset copy",
          onClick: n[0] || (n[0] = l => i.$emit("copy"))
        }, [R(r, {
          name: "edit-copy",
          class: "icon"
        }), S("span", Fl, A(("sliceWalletAddress" in i ? i.sliceWalletAddress : m(jr))(i.jetton.address, 3)), 1)]), S("button", {
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
  Kl = lt(Ul, [
    ["__scopeId", "data-v-88ec0231"]
  ]),
  Hl = {
    class: "reset memepad-jetton-stream-banned"
  },
  Jl = st({
    __name: "Banned",
    emits: ["open-rules"],
    setup(s) {
      return (t, e) => {
        const i = po("I18nT");
        return _(), E("div", Hl, [R(i, {
          keypath: "memepad.jetton.stream_banned_text",
          tag: "div",
          class: "rules"
        }, {
          rules: Y(() => [S("button", {
            type: "button",
            class: "reset",
            onClick: e[0] || (e[0] = n => t.$emit("open-rules"))
          }, A(("t" in t ? t.t : m(O))("memepad.jetton.stream_banned_link")), 1)]),
          _: 1
        })])
      }
    }
  }),
  Xl = lt(Jl, [
    ["__scopeId", "data-v-a9a5db5c"]
  ]),
  Q = {
    init: Yl,
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

function se() {}

function Yl(s) {
  const t = s;
  Q.document = t.document, Q.DocumentFragment = t.DocumentFragment || se, Q.SVGElement = t.SVGElement || se, Q.SVGSVGElement = t.SVGSVGElement || se, Q.SVGElementInstance = t.SVGElementInstance || se, Q.Element = t.Element || se, Q.HTMLElement = t.HTMLElement || Q.Element, Q.Event = t.Event, Q.Touch = t.Touch || se, Q.PointerEvent = t.PointerEvent || t.MSPointerEvent
}
var Co = s => !!(s && s.Window) && s instanceof s.Window;
let Eo, ee;

function To(s) {
  Eo = s;
  const t = s.document.createTextNode("");
  t.ownerDocument !== s.document && typeof s.wrap == "function" && s.wrap(t) === t && (s = s.wrap(s)), ee = s
}
typeof window < "u" && window && To(window);

function pe(s) {
  return Co(s) ? s : (s.ownerDocument || s).defaultView || ee.window
}
const Gl = s => s === ee || Co(s),
  Zl = s => wi(s) && s.nodeType === 11,
  wi = s => !!s && typeof s == "object",
  zo = s => typeof s == "function",
  ql = s => typeof s == "number",
  Ql = s => typeof s == "boolean",
  ta = s => typeof s == "string",
  ea = s => {
    if (!s || typeof s != "object") return !1;
    const t = pe(s) || ee;
    return /object|function/.test(typeof Element) ? s instanceof Element || s instanceof t.Element : s.nodeType === 1 && typeof s.nodeName == "string"
  },
  ia = s => wi(s) && !!s.constructor && /function Object\b/.test(s.constructor.toString()),
  sa = s => wi(s) && typeof s.length < "u" && zo(s.splice);
var w = {
  window: Gl,
  docFrag: Zl,
  object: wi,
  func: zo,
  number: ql,
  bool: Ql,
  string: ta,
  element: ea,
  plainObject: ia,
  array: sa
};
const it = {
  init: na,
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

function na(s) {
  const t = Q.Element,
    e = s.navigator || {};
  it.supportsTouch = "ontouchstart" in s || w.func(s.DocumentTouch) && Q.document instanceof s.DocumentTouch, it.supportsPointerEvent = e.pointerEnabled !== !1 && !!Q.PointerEvent, it.isIOS = /iP(hone|od|ad)/.test(e.platform), it.isIOS7 = /iP(hone|od|ad)/.test(e.platform) && /OS 7[^\d]/.test(e.appVersion), it.isIe9 = /MSIE 9/.test(e.userAgent), it.isOperaMobile = e.appName === "Opera" && it.supportsTouch && /Presto/.test(e.userAgent), it.prefixedMatchesSelector = "matches" in t.prototype ? "matches" : "webkitMatchesSelector" in t.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in t.prototype ? "mozMatchesSelector" : "oMatchesSelector" in t.prototype ? "oMatchesSelector" : "msMatchesSelector", it.pEventTypes = it.supportsPointerEvent ? Q.PointerEvent === s.MSPointerEvent ? {
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
  } : null, it.wheelEvent = Q.document && "onmousewheel" in Q.document ? "mousewheel" : "wheel"
}

function Kt(s, t) {
  if (s.contains) return s.contains(t);
  for (; t;) {
    if (t === s) return !0;
    t = t.parentNode
  }
  return !1
}

function Io(s, t) {
  for (; w.element(s);) {
    if (Xt(s, t)) return s;
    s = zt(s)
  }
  return null
}

function zt(s) {
  let t = s.parentNode;
  if (w.docFrag(t)) {
    for (;
      (t = t.host) && w.docFrag(t););
    return t
  }
  return t
}

function Xt(s, t) {
  return ee !== Eo && (t = t.replace(/\/deep\//g, " ")), s[it.prefixedMatchesSelector](t)
}

function cs(s, t, e) {
  for (; w.element(s);) {
    if (Xt(s, t)) return !0;
    if (s = zt(s), s === e) return Xt(s, t)
  }
  return !1
}

function en(s) {
  return s.correspondingUseElement || s
}

function oa(s) {
  return s = s || ee, {
    x: s.scrollX || s.document.documentElement.scrollLeft,
    y: s.scrollY || s.document.documentElement.scrollTop
  }
}

function Po(s) {
  const t = s instanceof Q.SVGElement ? s.getBoundingClientRect() : s.getClientRects()[0];
  return t && {
    left: t.left,
    right: t.right,
    top: t.top,
    bottom: t.bottom,
    width: t.width || t.right - t.left,
    height: t.height || t.bottom - t.top
  }
}

function zs(s) {
  const t = Po(s);
  if (!it.isIOS7 && t) {
    const e = oa(pe(s));
    t.left += e.x, t.right += e.x, t.top += e.y, t.bottom += e.y
  }
  return t
}

function $o(s) {
  const t = [];
  for (; s;) t.push(s), s = zt(s);
  return t
}

function sn(s) {
  return w.string(s) ? (Q.document.querySelector(s), !0) : !1
}

function P(s, t) {
  for (const i in t) s[i] = t[i];
  return s
}

function $e(s, t) {
  let e = !1;
  return function() {
    return e || (ee.console.warn(t), e = !0), s.apply(this, arguments)
  }
}

function Is(s, t) {
  return s.name = t.name, s.axis = t.axis, s.edges = t.edges, s
}

function ra(s) {
  const {
    Interactable: t
  } = s;
  t.prototype.getAction = function(i, n, o, r) {
    const l = la(this, n, o, r, s);
    return this.options.actionChecker ? this.options.actionChecker(i, n, l, this, r, o) : l
  }, t.prototype.ignoreFrom = $e(function(e) {
    return this._backCompatOption("ignoreFrom", e)
  }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), t.prototype.allowFrom = $e(function(e) {
    return this._backCompatOption("allowFrom", e)
  }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), t.prototype.actionChecker = ha, t.prototype.styleCursor = aa
}

function la(s, t, e, i, n) {
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

function aa(s) {
  return w.bool(s) ? (this.options.styleCursor = s, this) : s === null ? (delete this.options.styleCursor, this) : this.options.styleCursor
}

function ha(s) {
  return w.func(s) ? (this.options.actionChecker = s, this) : s === null ? (delete this.options.actionChecker, this) : this.options.actionChecker
}
var ca = {
  id: "auto-start/interactableMethods",
  install: ra
};

function ua(s) {
  const {
    interactStatic: t,
    defaults: e
  } = s;
  s.usePlugin(ca), e.base.actionChecker = null, e.base.styleCursor = !0, P(e.perAction, {
    manualStart: !1,
    max: 1 / 0,
    maxPerElement: 1,
    allowFrom: null,
    ignoreFrom: null,
    mouseButtons: 1
  }), t.maxInteractions = i => Ao(i, s), s.autoStart = {
    maxInteractions: 1 / 0,
    withinInteractionLimit: Si,
    cursorElement: null
  }
}

function da(s, t) {
  let {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o
  } = s;
  if (e.interacting()) return;
  const r = jo(e, i, n, o, t);
  Ro(e, r, t)
}

function fa(s, t) {
  let {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o
  } = s;
  if (e.pointerType !== "mouse" || e.pointerIsDown || e.interacting()) return;
  const r = jo(e, i, n, o, t);
  Ro(e, r, t)
}

function pa(s, t) {
  const {
    interaction: e
  } = s;
  if (!e.pointerIsDown || e.interacting() || !e.pointerWasMoved || !e.prepared.name) return;
  t.fire("autoStart:before-start", s);
  const {
    interactable: i
  } = e, n = e.prepared.name;
  n && i && (i.options[n].manualStart || !Si(i, e.element, e.prepared, t) ? e.stop() : (e.start(e.prepared, i, e.element), Oo(e, t)))
}

function ma(s, t) {
  let {
    interaction: e
  } = s;
  const {
    interactable: i
  } = e;
  i && i.options.styleCursor && us(e.element, "", t)
}

function Lo(s, t, e, i, n) {
  return t.testIgnoreAllow(t.options[s.name], e, i) && t.options[s.name].enabled && Si(t, e, s, n) ? s : null
}

function va(s, t, e, i, n, o, r) {
  for (let l = 0, a = i.length; l < a; l++) {
    const h = i[l],
      c = n[l],
      u = h.getAction(t, e, s, c);
    if (!u) continue;
    const d = Lo(u, h, c, o, r);
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

function jo(s, t, e, i, n) {
  let o = [],
    r = [],
    l = i;

  function a(h) {
    o.push(h), r.push(l)
  }
  for (; w.element(l);) {
    o = [], r = [], n.interactables.forEachMatch(l, a);
    const h = va(s, t, e, o, r, i, n);
    if (h.action && !h.interactable.options[h.action.name].manualStart) return h;
    l = zt(l)
  }
  return {
    action: null,
    interactable: null,
    element: null
  }
}

function Ro(s, t, e) {
  let {
    action: i,
    interactable: n,
    element: o
  } = t;
  i = i || {
    name: null
  }, s.interactable = n, s.element = o, Is(s.prepared, i), s.rect = n && i.name ? n.getRect(o) : null, Oo(s, e), e.fire("autoStart:prepared", {
    interaction: s
  })
}

function Si(s, t, e, i) {
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

function Ao(s, t) {
  return w.number(s) ? (t.autoStart.maxInteractions = s, this) : t.autoStart.maxInteractions
}

function us(s, t, e) {
  const {
    cursorElement: i
  } = e.autoStart;
  i && i !== s && (i.style.cursor = ""), s.ownerDocument.documentElement.style.cursor = t, s.style.cursor = t, e.autoStart.cursorElement = t ? s : null
}

function Oo(s, t) {
  const {
    interactable: e,
    element: i,
    prepared: n
  } = s;
  if (!(s.pointerType === "mouse" && e && e.options.styleCursor)) {
    t.autoStart.cursorElement && us(t.autoStart.cursorElement, "", t);
    return
  }
  let o = "";
  if (n.name) {
    const r = e.options[n.name].cursorChecker;
    w.func(r) ? o = r(n, e, i, s._interacting) : o = t.actions.map[n.name].getCursor(n)
  }
  us(s.element, o || "", t)
}
const Ps = {
  id: "auto-start/base",
  before: ["actions"],
  install: ua,
  listeners: {
    "interactions:down": da,
    "interactions:move": (s, t) => {
      fa(s, t), pa(s, t)
    },
    "interactions:stop": ma
  },
  maxInteractions: Ao,
  withinInteractionLimit: Si,
  validateAction: Lo
};

function ga(s, t) {
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
        const v = f.getAction(e.downPointer, e.downEvent, e, u);
        if (v && v.name === "drag" && ba(c, f) && Ps.validateAction(v, f, u, i, t)) return f
      }
    };
    for (; w.element(u);) {
      const f = t.interactables.forEachMatch(u, d);
      if (f) {
        e.prepared.name = "drag", e.interactable = f, e.element = u;
        break
      }
      u = zt(u)
    }
  }
}

function ba(s, t) {
  if (!t) return !1;
  const e = t.options.drag.startAxis;
  return s === "xy" || e === "xy" || e === s
}
var ya = {
  id: "auto-start/dragAxis",
  listeners: {
    "autoStart:before-start": ga
  }
};

function _a(s) {
  const {
    defaults: t
  } = s;
  s.usePlugin(Ps), t.perAction.hold = 0, t.perAction.delay = 0
}

function Ai(s) {
  const t = s.prepared && s.prepared.name;
  if (!t) return null;
  const e = s.interactable.options;
  return e[t].hold || e[t].delay
}
const wa = {
  id: "auto-start/hold",
  install: _a,
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
      const e = Ai(t);
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
      Ai(t) > 0 && (t.prepared.name = null)
    }
  },
  getHoldDuration: Ai
};
var Sa = {
  id: "auto-start",
  install(s) {
    s.usePlugin(Ps), s.usePlugin(wa), s.usePlugin(ya)
  }
};
const Ma = (s, t) => s.splice(s.indexOf(t), 1),
  Do = (s, t) => {
    for (const e of t) s.push(e);
    return s
  },
  Vo = s => Do([], s),
  Mi = (s, t) => {
    for (let e = 0; e < s.length; e++)
      if (t(s[e], e, s)) return e;
    return -1
  },
  Me = (s, t) => s[Mi(s, t)];

function me(s) {
  const t = {};
  for (const e in s) {
    const i = s[e];
    w.plainObject(i) ? t[e] = me(i) : w.array(i) ? t[e] = Vo(i) : t[e] = i
  }
  return t
}
let nn = 0,
  xt, Nt;

function ka(s) {
  if (xt = s.requestAnimationFrame, Nt = s.cancelAnimationFrame, !xt) {
    const t = ["ms", "moz", "webkit", "o"];
    for (const e of t) xt = s[`${e}RequestAnimationFrame`], Nt = s[`${e}CancelAnimationFrame`] || s[`${e}CancelRequestAnimationFrame`]
  }
  xt = xt && xt.bind(s), Nt = Nt && Nt.bind(s), xt || (xt = t => {
    const e = Date.now(),
      i = Math.max(0, 16 - (e - nn)),
      n = s.setTimeout(() => {
        t(e + i)
      }, i);
    return nn = e + i, n
  }, Nt = t => clearTimeout(t))
}
var ds = {
  request: s => xt(s),
  cancel: s => Nt(s),
  init: ka
};

function ce(s, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : n => !0,
    i = arguments.length > 3 ? arguments[3] : void 0;
  if (i = i || {}, w.string(s) && s.search(" ") !== -1 && (s = on(s)), w.array(s)) return s.forEach(n => ce(n, t, e, i)), i;
  if (w.object(s) && (t = s, s = ""), w.func(t) && e(s)) i[s] = i[s] || [], i[s].push(t);
  else if (w.array(t))
    for (const n of t) ce(s, n, e, i);
  else if (w.object(t))
    for (const n in t) {
      const o = on(n).map(r => `${s}${r}`);
      ce(o, t[n], e, i)
    }
  return i
}

function on(s) {
  return s.trim().split(/ +/)
}

function rn(s, t) {
  for (const e of t) {
    if (s.immediatePropagationStopped) break;
    e(s)
  }
}
class Wo {
  constructor(t) {
    this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = P({}, t || {})
  }
  fire(t) {
    let e;
    const i = this.global;
    (e = this.types[t.type]) && rn(t, e), !t.propagationStopped && i && (e = i[t.type]) && rn(t, e)
  }
  on(t, e) {
    const i = ce(t, e);
    for (t in i) this.types[t] = Do(this.types[t] || [], i[t])
  }
  off(t, e) {
    const i = ce(t, e);
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
const xa = ["webkit", "moz"];

function fi(s, t) {
  s.__set || (s.__set = {});
  for (const e in t) xa.some(i => e.indexOf(i) === 0) || typeof s[e] != "function" && e !== "__set" && Object.defineProperty(s, e, {
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
var Be = (s, t) => Math.sqrt(s * s + t * t);

function oi(s, t) {
  s.page = s.page || {}, s.page.x = t.page.x, s.page.y = t.page.y, s.client = s.client || {}, s.client.x = t.client.x, s.client.y = t.client.y, s.timeStamp = t.timeStamp
}

function Ca(s, t, e) {
  s.page.x = e.page.x - t.page.x, s.page.y = e.page.y - t.page.y, s.client.x = e.client.x - t.client.x, s.client.y = e.client.y - t.client.y, s.timeStamp = e.timeStamp - t.timeStamp
}

function Ea(s, t) {
  const e = Math.max(t.timeStamp / 1e3, .001);
  s.page.x = t.page.x / e, s.page.y = t.page.y / e, s.client.x = t.client.x / e, s.client.y = t.client.y / e, s.timeStamp = e
}

function No(s) {
  s.page.x = 0, s.page.y = 0, s.client.x = 0, s.client.y = 0
}

function Bo(s) {
  return s instanceof Q.Event || s instanceof Q.Touch
}

function pi(s, t, e) {
  return e = e || {}, s = s || "page", e.x = t[s + "X"], e.y = t[s + "Y"], e
}

function Ta(s, t) {
  return t = t || {
    x: 0,
    y: 0
  }, it.isOperaMobile && Bo(s) ? (pi("screen", s, t), t.x += window.scrollX, t.y += window.scrollY) : pi("page", s, t), t
}

function za(s, t) {
  return t = t || {}, it.isOperaMobile && Bo(s) ? pi("screen", s, t) : pi("client", s, t), t
}

function Le(s) {
  return w.number(s.pointerId) ? s.pointerId : s.identifier
}

function Ia(s, t, e) {
  const i = t.length > 1 ? Fo(t) : t[0];
  Ta(i, s.page), za(i, s.client), s.timeStamp = e
}

function $s(s) {
  const t = [];
  return w.array(s) ? (t[0] = s[0], t[1] = s[1]) : s.type === "touchend" ? s.touches.length === 1 ? (t[0] = s.touches[0], t[1] = s.changedTouches[0]) : s.touches.length === 0 && (t[0] = s.changedTouches[0], t[1] = s.changedTouches[1]) : (t[0] = s.touches[0], t[1] = s.touches[1]), t
}

function Fo(s) {
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

function Pa(s) {
  if (!s.length) return null;
  const t = $s(s),
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

function $a(s, t) {
  const e = t + "X",
    i = t + "Y",
    n = $s(s),
    o = n[0][e] - n[1][e],
    r = n[0][i] - n[1][i];
  return Be(o, r)
}

function La(s, t) {
  const e = t + "X",
    i = t + "Y",
    n = $s(s),
    o = n[1][e] - n[0][e],
    r = n[1][i] - n[0][i];
  return 180 * Math.atan2(r, o) / Math.PI
}

function Uo(s) {
  return w.string(s.pointerType) ? s.pointerType : w.number(s.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][s.pointerType] : /touch/.test(s.type || "") || s instanceof Q.Touch ? "touch" : "mouse"
}

function Ko(s) {
  const t = w.func(s.composedPath) ? s.composedPath() : s.path;
  return [en(t ? t[0] : s.target), en(s.currentTarget)]
}

function be() {
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

function ja(s) {
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

function Ra(s) {
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

  function r(d, f, p, v) {
    if (!d.addEventListener) return;
    const b = ye(v);
    let y = Me(e, g => g.eventTarget === d);
    y || (y = {
      eventTarget: d,
      events: {}
    }, e.push(y)), y.events[f] || (y.events[f] = []), Me(y.events[f], g => g.func === p && Ke(g.options, b)) || (d.addEventListener(f, p, o.supportsOptions ? b : b.capture), y.events[f].push({
      func: p,
      options: b
    }))
  }

  function l(d, f, p, v) {
    if (!d.addEventListener || !d.removeEventListener) return;
    const b = Mi(e, k => k.eventTarget === d),
      y = e[b];
    if (!y || !y.events) return;
    if (f === "all") {
      for (f in y.events) y.events.hasOwnProperty(f) && l(d, f, "all");
      return
    }
    let g = !1;
    const x = y.events[f];
    if (x)
      if (p === "all") {
        for (let k = x.length - 1; k >= 0; k--) {
          const I = x[k];
          l(d, f, I.func, I.options)
        }
        return
      } else {
        const k = ye(v);
        for (let I = 0; I < x.length; I++) {
          const N = x[I];
          if (N.func === p && Ke(N.options, k)) {
            d.removeEventListener(f, p, o.supportsOptions ? k : k.capture), x.splice(I, 1), x.length === 0 && (delete y.events[f], g = !0);
            break
          }
        }
      } g && !Object.keys(y.events).length && e.splice(b, 1)
  }

  function a(d, f, p, v, b) {
    const y = ye(b);
    if (!i[p]) {
      i[p] = [];
      for (const k of n) r(k, p, c), r(k, p, u, !0)
    }
    const g = i[p];
    let x = Me(g, k => k.selector === d && k.context === f);
    x || (x = {
      selector: d,
      context: f,
      listeners: []
    }, g.push(x)), x.listeners.push({
      func: v,
      options: y
    })
  }

  function h(d, f, p, v, b) {
    const y = ye(b),
      g = i[p];
    let x = !1,
      k;
    if (g)
      for (k = g.length - 1; k >= 0; k--) {
        const I = g[k];
        if (I.selector === d && I.context === f) {
          const {
            listeners: N
          } = I;
          for (let D = N.length - 1; D >= 0; D--) {
            const $ = N[D];
            if ($.func === v && Ke($.options, y)) {
              N.splice(D, 1), N.length || (g.splice(k, 1), l(f, p, c), l(f, p, u, !0)), x = !0;
              break
            }
          }
          if (x) break
        }
      }
  }

  function c(d, f) {
    const p = ye(f),
      v = new Aa(d),
      b = i[d.type],
      [y] = Ko(d);
    let g = y;
    for (; w.element(g);) {
      for (let x = 0; x < b.length; x++) {
        const k = b[x],
          {
            selector: I,
            context: N
          } = k;
        if (Xt(g, I) && Kt(N, y) && Kt(N, g)) {
          const {
            listeners: D
          } = k;
          v.currentTarget = g;
          for (const $ of D) Ke($.options, p) && $.func(v)
        }
      }
      g = zt(g)
    }
  }

  function u(d) {
    return c.call(this, d, !0)
  }
  return o
}
class Aa {
  constructor(t) {
    this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = t, fi(this, t)
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

function ye(s) {
  return w.object(s) ? {
    capture: !!s.capture,
    passive: !!s.passive
  } : {
    capture: !!s,
    passive: !1
  }
}

function Ke(s, t) {
  return s === t ? !0 : typeof s == "boolean" ? !!t.capture === s && !t.passive : !!s.capture == !!t.capture && !!s.passive == !!t.passive
}
var Oa = {
  id: "events",
  install: Ra
};
const Da = function(t) {
  return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : w.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault
};

function Va(s, t, e) {
  const i = s.options.preventDefault;
  if (i !== "never") {
    if (i === "always") {
      e.preventDefault();
      return
    }
    if (t.events.supportsPassive && /^touch(start|move)$/.test(e.type)) {
      const n = pe(e.target).document,
        o = t.getDocOptions(n);
      if (!(o && o.events) || o.events.passive !== !1) return
    }
    /^(mouse|pointer|touch)*(down|start)/i.test(e.type) || w.element(e.target) && Xt(e.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || e.preventDefault()
  }
}

function Wa(s) {
  let {
    interaction: t,
    event: e
  } = s;
  t.interactable && t.interactable.checkAndPreventDefault(e)
}

function Na(s) {
  const {
    Interactable: t
  } = s;
  t.prototype.preventDefault = Da, t.prototype.checkAndPreventDefault = function(e) {
    return Va(this, s, e)
  }, s.interactions.docEvents.push({
    type: "dragstart",
    listener(e) {
      for (const i of s.interactions.list)
        if (i.element && (i.element === e.target || Kt(i.element, e.target))) {
          i.interactable.checkAndPreventDefault(e);
          return
        }
    }
  })
}
var Ba = {
  id: "core/interactablePreventDefault",
  install: Na,
  listeners: ["down", "move", "up", "cancel"].reduce((s, t) => (s[`interactions:${t}`] = Wa, s), {})
};

function Fa(s, t, e) {
  return s === "parent" ? zt(e) : s === "self" ? t.getRect(e) : Io(e, s)
}

function je(s, t, e, i) {
  let n = s;
  return w.string(n) ? n = Fa(n, t, e) : w.func(n) && (n = n(...i)), w.element(n) && (n = zs(n)), n
}

function ki(s) {
  return s && {
    x: "x" in s ? s.x : s.left,
    y: "y" in s ? s.y : s.top
  }
}

function Ua(s) {
  return s && !("left" in s && "top" in s) && (s = P({}, s), s.left = s.x || 0, s.top = s.y || 0, s.right = s.right || s.left + s.width, s.bottom = s.bottom || s.top + s.height), s
}

function fs(s) {
  return s && !("x" in s && "y" in s) && (s = P({}, s), s.x = s.left || 0, s.y = s.top || 0, s.width = s.width || (s.right || 0) - s.x, s.height = s.height || (s.bottom || 0) - s.y), s
}

function xi(s, t, e) {
  s.left && (t.left += e.x), s.right && (t.right += e.x), s.top && (t.top += e.y), s.bottom && (t.bottom += e.y), t.width = t.right - t.left, t.height = t.bottom - t.top
}

function Ci(s, t, e) {
  const i = e && s.options[e],
    o = i && i.origin || s.options.origin,
    r = je(o, s, t, [s && t]);
  return ki(r) || {
    x: 0,
    y: 0
  }
}
class Ls {
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
Object.defineProperty(Ls.prototype, "interaction", {
  get() {
    return this._interaction._proxy
  },
  set() {}
});
const Ho = {
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
class js extends Ls {
  constructor(t, e, i, n, o, r, l) {
    super(t), this.relatedTarget = null, this.screenX = void 0, this.screenY = void 0, this.button = void 0, this.buttons = void 0, this.ctrlKey = void 0, this.shiftKey = void 0, this.altKey = void 0, this.metaKey = void 0, this.page = void 0, this.client = void 0, this.delta = void 0, this.rect = void 0, this.x0 = void 0, this.y0 = void 0, this.t0 = void 0, this.dt = void 0, this.duration = void 0, this.clientX0 = void 0, this.clientY0 = void 0, this.velocity = void 0, this.speed = void 0, this.swipe = void 0, this.axes = void 0, this.preEnd = void 0, o = o || t.element;
    const a = t.interactable,
      h = (a && a.options || Ho).deltaSource,
      c = Ci(a, o, i),
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
    }, this.dt = t.coords.delta.timeStamp, this.duration = this.timeStamp - this.t0, this.velocity = P({}, t.coords.velocity[h]), this.speed = Be(this.velocity.x, this.velocity.y), this.swipe = d || n === "inertiastart" ? this.getSwipe() : null
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
Object.defineProperties(js.prototype, {
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
class Ka {
  constructor(t, e, i, n, o) {
    this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = t, this.pointer = e, this.event = i, this.downTime = n, this.downTarget = o
  }
}
let Ha = function(s) {
    return s.interactable = "", s.element = "", s.prepared = "", s.pointerIsDown = "", s.pointerWasMoved = "", s._proxy = "", s
  }({}),
  Jo = function(s) {
    return s.start = "", s.move = "", s.end = "", s.stop = "", s.interacting = "", s
  }({}),
  Ja = 0;
class Xa {
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
    }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = $e(function(o) {
      this.move(o)
    }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = {
      start: be(),
      prev: be(),
      cur: be(),
      delta: be(),
      velocity: be()
    }, this._id = Ja++;
    let {
      pointerType: e,
      scopeFire: i
    } = t;
    this._scopeFire = i, this.pointerType = e;
    const n = this;
    this._proxy = {};
    for (const o in Ha) Object.defineProperty(this._proxy, o, {
      get() {
        return n[o]
      }
    });
    for (const o in Jo) Object.defineProperty(this._proxy, o, {
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
    return this.interacting() || !this.pointerIsDown || this.pointers.length < (t.name === "gesture" ? 2 : 1) || !e.options[t.name].enabled ? !1 : (Is(this.prepared, t), this.interactable = e, this.element = i, this.rect = e.getRect(i), this.edges = this.prepared.edges ? P({}, this.prepared.edges) : {
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
    this.pointerIsDown && !this.pointerWasMoved && (o = this.coords.cur.client.x - this.coords.start.client.x, r = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Be(o, r) > this.pointerMoveTolerance);
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
    n || Ea(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", a), !n && !this.simulation && (this.interacting() && (a.type = null, this.move(a)), this.pointerWasMoved && oi(this.coords.prev, this.coords.cur))
  }
  move(t) {
    (!t || !t.event) && No(this.coords.delta), t = P({
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
    const e = Le(t);
    return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Mi(this.pointers, i => i.id === e)
  }
  getPointerInfo(t) {
    return this.pointers[this.getPointerIndex(t)]
  }
  updatePointer(t, e, i, n) {
    const o = Le(t);
    let r = this.getPointerIndex(t),
      l = this.pointers[r];
    return n = n === !1 ? !1 : n || /(down|start)$/i.test(e.type), l ? l.pointer = t : (l = new Ka(o, t, e, null, null), r = this.pointers.length, this.pointers.push(l)), Ia(this.coords.cur, this.pointers.map(a => a.pointer), this._now()), Ca(this.coords.delta, this.coords.prev, this.coords.cur), n && (this.pointerIsDown = !0, l.downTime = this.coords.cur.timeStamp, l.downTarget = i, fi(this.downPointer, t), this.interacting() || (oi(this.coords.start, this.coords.cur), oi(this.coords.prev, this.coords.cur), this.downEvent = e, this.pointerWasMoved = !1)), this._updateLatestPointer(t, e, i), this._scopeFire("interactions:update-pointer", {
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
    return new js(this, t, this.prepared.name, e, this.element, i, n)
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
    if (r && i === "move" && (xi(this.edges, r, this.coords.delta[this.interactable.options.deltaSource]), r.width = r.right - r.left, r.height = r.bottom - r.top), this._scopeFire(`interactions:before-action-${i}`, t) === !1) return !1;
    const a = t.iEvent = this._createPreparedEvent(e, i, n, o);
    return this._scopeFire(`interactions:action-${i}`, t), i === "start" && (this.prevEvent = a), this._fireEvent(a), this._scopeFire(`interactions:after-action-${i}`, t), !0
  }
  _now() {
    return Date.now()
  }
}
const ps = {
  methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
  search(s) {
    for (const t of ps.methodOrder) {
      const e = ps[t](s);
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
          r = zt(r)
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
        if (r.simulation && !ln(r, t)) continue;
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
      if (ln(i, t)) return i;
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

function ln(s, t) {
  return s.pointers.some(e => {
    let {
      id: i
    } = e;
    return i === t
  })
}
const Xo = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];

function Ya(s) {
  const t = {};
  for (const o of Xo) t[o] = Yo(o, s);
  const e = it.pEventTypes;
  let i;
  Q.PointerEvent ? i = [{
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
  }), s.prevTouchTime = 0, s.Interaction = class extends Xa {
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
          return Kt(a, r.downTarget)
        }) || o.removePointer(r.pointer, r.event)
  }
  s.usePlugin(Ba)
}

function Yo(s, t) {
  return function(e) {
    const i = t.interactions.list,
      n = Uo(e),
      [o, r] = Ko(e),
      l = [];
    if (/^touch/.test(e.type)) {
      t.prevTouchTime = t.now();
      for (const a of e.changedTouches) {
        const h = a,
          c = Le(h),
          u = {
            pointer: h,
            pointerId: c,
            pointerType: n,
            eventType: e.type,
            eventTarget: o,
            curEventTarget: r,
            scope: t
          },
          d = an(u);
        l.push([u.pointer, u.eventTarget, u.curEventTarget, d])
      }
    } else {
      let a = !1;
      if (!it.supportsPointerEvent && /mouse/.test(e.type)) {
        for (let h = 0; h < i.length && !a; h++) a = i[h].pointerType !== "mouse" && i[h].pointerIsDown;
        a = a || t.now() - t.prevTouchTime < 500 || e.timeStamp === 0
      }
      if (!a) {
        const h = {
            pointer: e,
            pointerId: Le(e),
            pointerType: n,
            eventType: e.type,
            curEventTarget: r,
            eventTarget: o,
            scope: t
          },
          c = an(h);
        l.push([h.pointer, h.eventTarget, h.curEventTarget, c])
      }
    }
    for (const [a, h, c, u] of l) u[s](a, e, h, c)
  }
}

function an(s) {
  const {
    pointerType: t,
    scope: e
  } = s, n = {
    interaction: ps.search(s),
    searchDetails: s
  };
  return e.fire("interactions:find", n), n.interaction || e.interactions.new({
    pointerType: t
  })
}

function Oi(s, t) {
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
const Ga = {
  id: "core/interactions",
  install: Ya,
  listeners: {
    "scope:add-document": s => Oi(s, "add"),
    "scope:remove-document": s => Oi(s, "remove"),
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
  onDocSignal: Oi,
  doOnInteractions: Yo,
  methodNames: Xo
};

function mi(s, t) {
  if (t.phaselessTypes[s]) return !0;
  for (const e in t.map)
    if (s.indexOf(e) === 0 && s.substr(e.length) in t.phases) return !0;
  return !1
}
var $t = function(s) {
  return s[s.On = 0] = "On", s[s.Off = 1] = "Off", s
}($t || {});
class Za {
  get _defaults() {
    return {
      base: {},
      perAction: {},
      actions: {}
    }
  }
  constructor(t, e, i, n) {
    this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new Wo, this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = e.actions, this.target = t, this._context = e.context || i, this._win = pe(sn(t) ? this._context : t), this._doc = this._win.document, this._scopeEvents = n, this.set(e)
  }
  setOnEvents(t, e) {
    return w.func(e.onstart) && this.on(`${t}start`, e.onstart), w.func(e.onmove) && this.on(`${t}move`, e.onmove), w.func(e.onend) && this.on(`${t}end`, e.onend), w.func(e.oninertiastart) && this.on(`${t}inertiastart`, e.oninertiastart), this
  }
  updatePerActionListeners(t, e, i) {
    var n;
    const o = (n = this._actions.map[t]) == null ? void 0 : n.filterEventType,
      r = l => (o == null || o(l)) && mi(l, this._actions);
    (w.array(e) || w.object(e)) && this._onOff($t.Off, t, e, void 0, r), (w.array(i) || w.object(i)) && this._onOff($t.On, t, i, void 0, r)
  }
  setPerAction(t, e) {
    const i = this._defaults;
    for (const n in e) {
      const o = n,
        r = this.options[t],
        l = e[o];
      o === "listeners" && this.updatePerActionListeners(t, r.listeners, l), w.array(l) ? r[o] = Vo(l) : w.plainObject(l) ? (r[o] = P(r[o] || {}, me(l)), w.object(i.perAction[o]) && "enabled" in i.perAction[o] && (r[o].enabled = l.enabled !== !1)) : w.bool(l) && w.object(i.perAction[o]) ? r[o].enabled = l : r[o] = l
    }
  }
  getRect(t) {
    return t = t || (w.element(this.target) ? this.target : null), w.string(this.target) && (t = t || this._context.querySelector(this.target)), zs(t)
  }
  rectChecker(t) {
    return w.func(t) ? (this.getRect = e => {
      const i = P({}, t.apply(this, e));
      return "width" in i || (i.width = i.right - i.left, i.height = i.bottom - i.top), i
    }, this) : t === null ? (delete this.getRect, this) : this.getRect
  }
  _backCompatOption(t, e) {
    if (sn(e) || w.object(e)) {
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
    return w.string(t) ? Array.from(this._context.querySelectorAll(t)) : w.func(t) && t.getAllElements ? t.getAllElements() : w.element(t) ? [t] : []
  }
  context() {
    return this._context
  }
  inContext(t) {
    return this._context === t.ownerDocument || Kt(this._context, t)
  }
  testIgnoreAllow(t, e, i) {
    return !this.testIgnore(t.ignoreFrom, e, i) && this.testAllow(t.allowFrom, e, i)
  }
  testAllow(t, e, i) {
    return t ? w.element(i) ? w.string(t) ? cs(i, t, e) : w.element(t) ? Kt(t, i) : !1 : !1 : !0
  }
  testIgnore(t, e, i) {
    return !t || !w.element(i) ? !1 : w.string(t) ? cs(i, t, e) : w.element(t) ? Kt(t, i) : !1
  }
  fire(t) {
    return this.events.fire(t), this
  }
  _onOff(t, e, i, n, o) {
    w.object(e) && !w.array(e) && (n = i, i = null);
    const r = ce(e, i, o);
    for (let l in r) {
      l === "wheel" && (l = it.wheelEvent);
      for (const a of r[l]) mi(l, this._actions) ? this.events[t === $t.On ? "on" : "off"](l, a) : w.string(this.target) ? this._scopeEvents[t === $t.On ? "addDelegate" : "removeDelegate"](this.target, this._context, l, a, n) : this._scopeEvents[t === $t.On ? "add" : "remove"](this.target, l, a, n)
    }
    return this
  }
  on(t, e, i) {
    return this._onOff($t.On, t, e, i)
  }
  off(t, e, i) {
    return this._onOff($t.Off, t, e, i)
  }
  set(t) {
    const e = this._defaults;
    w.object(t) || (t = {}), this.options = me(e.base);
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
      w.func(this[i]) && this[i](t[i])
    }
    return this
  }
  unset() {
    if (w.string(this.target))
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
class qa {
  constructor(t) {
    this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = t, t.addListeners({
      "interactable:unset": e => {
        let {
          interactable: i
        } = e;
        const {
          target: n
        } = i, o = w.string(n) ? this.selectorMap[n] : n[this.scope.id], r = Mi(o, l => l === i);
        o.splice(r, 1)
      }
    })
  }
  new(t, e) {
    e = P(e || {}, {
      actions: this.scope.actions
    });
    const i = new this.scope.Interactable(t, e, this.scope.document, this.scope.events);
    return this.scope.addDocument(i._doc), this.list.push(i), w.string(t) ? (this.selectorMap[t] || (this.selectorMap[t] = []), this.selectorMap[t].push(i)) : (i.target[this.scope.id] || Object.defineProperty(t, this.scope.id, {
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
      n = w.string(t),
      o = n ? this.selectorMap[t] : t[this.scope.id];
    if (o) return Me(o, r => r._context === i && (n || r.inContext(t)))
  }
  forEachMatch(t, e) {
    for (const i of this.list) {
      let n;
      if ((w.string(i.target) ? w.element(t) && Xt(t, i.target) : t === i.target) && i.inContext(t) && (n = e(i)), n !== void 0) return n
    }
  }
}

function Qa(s) {
  const t = (e, i) => {
    let n = s.interactables.getExisting(e, i);
    return n || (n = s.interactables.new(e, i), n.events.global = t.globalEvents), n
  };
  return t.getPointerAverage = Fo, t.getTouchBBox = Pa, t.getTouchDistance = $a, t.getTouchAngle = La, t.getElementRect = zs, t.getElementClientRect = Po, t.matchesSelector = Xt, t.closest = Io, t.globalEvents = {}, t.version = "1.10.27", t.scope = s, t.use = function(e, i) {
    return this.scope.usePlugin(e, i), this
  }, t.isSet = function(e, i) {
    return !!this.scope.interactables.get(e, i && i.context)
  }, t.on = $e(function(i, n, o) {
    if (w.string(i) && i.search(" ") !== -1 && (i = i.trim().split(/ +/)), w.array(i)) {
      for (const r of i) this.on(r, n, o);
      return this
    }
    if (w.object(i)) {
      for (const r in i) this.on(r, i[r], n);
      return this
    }
    return mi(i, this.scope.actions) ? this.globalEvents[i] ? this.globalEvents[i].push(n) : this.globalEvents[i] = [n] : this.scope.events.add(this.scope.document, i, n, {
      options: o
    }), this
  }, "The interact.on() method is being deprecated"), t.off = $e(function(i, n, o) {
    if (w.string(i) && i.search(" ") !== -1 && (i = i.trim().split(/ +/)), w.array(i)) {
      for (const r of i) this.off(r, n, o);
      return this
    }
    if (w.object(i)) {
      for (const r in i) this.off(r, i[r], n);
      return this
    }
    if (mi(i, this.scope.actions)) {
      let r;
      i in this.globalEvents && (r = this.globalEvents[i].indexOf(n)) !== -1 && this.globalEvents[i].splice(r, 1)
    } else this.scope.events.remove(this.scope.document, i, n, o);
    return this
  }, "The interact.off() method is being deprecated"), t.debug = function() {
    return this.scope
  }, t.supportsTouch = function() {
    return it.supportsTouch
  }, t.supportsPointerEvent = function() {
    return it.supportsPointerEvent
  }, t.stop = function() {
    for (const e of this.scope.interactions.list) e.stop();
    return this
  }, t.pointerMoveTolerance = function(e) {
    return w.number(e) ? (this.scope.interactions.pointerMoveTolerance = e, this) : this.scope.interactions.pointerMoveTolerance
  }, t.addDocument = function(e, i) {
    this.scope.addDocument(e, i)
  }, t.removeDocument = function(e) {
    this.scope.removeDocument(e)
  }, t
}
class th {
  constructor() {
    this.id = `__interact_scope_${Math.floor(Math.random()*100)}`, this.isInitialized = !1, this.listenerMaps = [], this.browser = it, this.defaults = me(Ho), this.Eventable = Wo, this.actions = {
      map: {},
      phases: {
        start: !0,
        move: !0,
        end: !0
      },
      methodDict: {},
      phaselessTypes: {}
    }, this.interactStatic = Qa(this), this.InteractEvent = js, this.Interactable = void 0, this.interactables = new qa(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = {
      list: [],
      map: {}
    }, this.onWindowUnload = e => this.removeDocument(e.target);
    const t = this;
    this.Interactable = class extends Za {
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
    return this.isInitialized ? this : eh(this, t)
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
        o = t.before.reduce((r, l) => (r[l] = !0, r[hn(l)] = !0, r), {});
      for (; i < n; i++) {
        const r = this.listenerMaps[i].id;
        if (r && (o[r] || o[hn(r)])) break
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
    const i = pe(t);
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
      i = pe(t),
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

function eh(s, t) {
  return s.isInitialized = !0, w.window(t) && To(t), Q.init(t), it.init(t), ds.init(t), s.window = t, s.document = t.document, s.usePlugin(Ga), s.usePlugin(Oa), s
}

function hn(s) {
  return s && s.replace(/\/.*$/, "")
}
const Go = new th,
  vt = Go.interactStatic,
  ih = typeof globalThis < "u" ? globalThis : window;
Go.init(ih);
vt.use(Sa);
class Rs {
  constructor(t) {
    this.states = [], this.startOffset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = t, this.result = He(), this.edges = {
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
    } = this, o = sh(n);
    this.prepareStates(o), this.startEdges = P({}, n.edges), this.edges = P({}, this.startEdges), this.startOffset = nh(n.rect, e), this.startDelta = {
      x: 0,
      y: 0
    };
    const r = this.fillArg({
      phase: i,
      pageCoords: e,
      preEnd: !1
    });
    return this.result = He(), this.startAll(r), this.result = this.setAll(r)
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
      a = He(t.coords, t.rect);
    for (const d of l) {
      var h;
      const {
        options: f
      } = d, p = P({}, t.coords);
      let v = null;
      (h = d.methods) != null && h.set && this.shouldDo(f, i, e) && (t.state = d, v = d.methods.set(t), xi(t.edges, t.rect, {
        x: t.coords.x - p.x,
        y: t.coords.y - p.y
      })), a.eventProps.push(v)
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
    this.startOffset = t.startOffset, this.startDelta = t.startDelta, this.startEdges = t.startEdges, this.edges = t.edges, this.states = t.states.map(e => me(e)), this.result = He(P({}, t.result.coords), P({}, t.result.rect))
  }
  destroy() {
    for (const t in this) this[t] = null
  }
}

function He(s, t) {
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

function sh(s) {
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

function nh(s, t) {
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

function Dt(s, t) {
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

function ke(s) {
  let {
    iEvent: t,
    interaction: e
  } = s;
  const i = e.modification.result;
  i && (t.modifiers = i.eventProps)
}
const Zo = {
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
      t.modification = new Rs(t)
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
    "interactions:action-start": ke,
    "interactions:action-move": ke,
    "interactions:action-end": ke,
    "interactions:after-action-start": s => s.interaction.modification.restoreInteractionCoords(s),
    "interactions:after-action-move": s => s.interaction.modification.restoreInteractionCoords(s),
    "interactions:stop": s => s.interaction.modification.stop(s)
  }
};
Jo.offsetBy = "";

function oh(s) {
  s.pointerIsDown && (ms(s.coords.cur, s.offset.total), s.offset.pending.x = 0, s.offset.pending.y = 0)
}

function cn(s) {
  let {
    interaction: t
  } = s;
  qo(t)
}

function rh(s) {
  let {
    interaction: t
  } = s;
  if (qo(t)) return t.move({
    offset: !0
  }), t.end(), !1
}

function lh(s) {
  let {
    interaction: t
  } = s;
  t.offset.total.x = 0, t.offset.total.y = 0, t.offset.pending.x = 0, t.offset.pending.y = 0
}

function qo(s) {
  if (!hh(s)) return !1;
  const {
    pending: t
  } = s.offset;
  return ms(s.coords.cur, t), ms(s.coords.delta, t), xi(s.edges, s.rect, t), t.x = 0, t.y = 0, !0
}

function ah(s) {
  let {
    x: t,
    y: e
  } = s;
  this.offset.pending.x += t, this.offset.pending.y += e, this.offset.total.x += t, this.offset.total.y += e
}

function ms(s, t) {
  let {
    page: e,
    client: i
  } = s, {
    x: n,
    y: o
  } = t;
  e.x += n, e.y += o, i.x += n, i.y += o
}

function hh(s) {
  return !!(s.offset.pending.x || s.offset.pending.y)
}
const ch = {
  id: "offset",
  before: ["modifiers", "pointer-events", "actions", "inertia"],
  install(s) {
    s.Interaction.prototype.offsetBy = ah
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
      return oh(t)
    },
    "interactions:before-action-start": cn,
    "interactions:before-action-move": cn,
    "interactions:before-action-end": rh,
    "interactions:stop": lh
  }
};

function uh(s) {
  const {
    defaults: t
  } = s;
  s.usePlugin(ch), s.usePlugin(Zo), s.actions.phases.inertiastart = !0, s.actions.phases.resume = !0, t.perAction.inertia = {
    enabled: !1,
    resistance: 10,
    minSpeed: 100,
    endSpeed: 10,
    allowResume: !0,
    smoothEndDuration: 300
  }
}
class dh {
  constructor(t) {
    this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = t
  }
  start(t) {
    const {
      interaction: e
    } = this, i = Je(e);
    if (!i || !i.enabled) return !1;
    const {
      client: n
    } = e.coords.velocity, o = Be(n.x, n.y), r = this.modification || (this.modification = new Rs(e));
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
      e = Je(this.interaction),
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
    this.timeout = ds.request(() => {
      this.active && t()
    })
  }
  inertiaTick() {
    const {
      interaction: t
    } = this, i = Je(t).resistance, n = (t._now() - this.t0) / 1e3;
    if (n < this.te) {
      const o = 1 - (Math.exp(-i * n) - this.lambda_v0) / this.one_ve_v0;
      let r;
      this.isModified ? r = gh(0, 0, this.targetOffset.x, this.targetOffset.y, this.modifiedOffset.x, this.modifiedOffset.y, o) : r = {
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
    } = Je(t);
    if (e < i) {
      const n = {
          x: dn(e, 0, this.targetOffset.x, i),
          y: dn(e, 0, this.targetOffset.y, i)
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
    }), oi(o.coords.prev, o.coords.cur), this.stop()
  }
  end() {
    this.interaction.move(), this.interaction.end(), this.stop()
  }
  stop() {
    this.active = this.smoothEnd = !1, this.interaction.simulation = null, ds.cancel(this.timeout)
  }
}

function fh(s) {
  let {
    interaction: t,
    event: e
  } = s;
  return !t._interacting || t.simulation ? null : t.inertia.start(e) ? !1 : null
}

function ph(s) {
  const {
    interaction: t,
    eventTarget: e
  } = s, i = t.inertia;
  if (!i.active) return;
  let n = e;
  for (; w.element(n);) {
    if (n === t.element) {
      i.resume(s);
      break
    }
    n = zt(n)
  }
}

function mh(s) {
  let {
    interaction: t
  } = s;
  const e = t.inertia;
  e.active && e.stop()
}

function Je(s) {
  let {
    interactable: t,
    prepared: e
  } = s;
  return t && t.options && e.name && t.options[e.name].inertia
}
const vh = {
  id: "inertia",
  before: ["modifiers", "actions"],
  install: uh,
  listeners: {
    "interactions:new": s => {
      let {
        interaction: t
      } = s;
      t.inertia = new dh(t)
    },
    "interactions:before-action-end": fh,
    "interactions:down": ph,
    "interactions:stop": mh,
    "interactions:before-action-resume": s => {
      const {
        modification: t
      } = s.interaction;
      t.stop(s), t.start(s, s.interaction.coords.cur.page), t.applyToInteraction(s)
    },
    "interactions:before-action-inertiastart": s => s.interaction.modification.setAndApply(s),
    "interactions:action-resume": ke,
    "interactions:action-inertiastart": ke,
    "interactions:after-action-inertiastart": s => s.interaction.modification.restoreInteractionCoords(s),
    "interactions:after-action-resume": s => s.interaction.modification.restoreInteractionCoords(s)
  }
};

function un(s, t, e, i) {
  const n = 1 - s;
  return n * n * t + 2 * n * s * e + s * s * i
}

function gh(s, t, e, i, n, o, r) {
  return {
    x: un(r, s, e, n),
    y: un(r, t, i, o)
  }
}

function dn(s, t, e, i) {
  return s /= i, -e * s * (s - 2) + t
}
vt.use(vh);

function bh(s) {
  const {
    actions: t,
    Interactable: e,
    defaults: i
  } = s;
  e.prototype.draggable = ri.draggable, t.map.drag = ri, t.methodDict.drag = "draggable", i.actions.drag = ri.defaults
}

function Di(s) {
  let {
    interaction: t
  } = s;
  if (t.prepared.name !== "drag") return;
  const e = t.prepared.axis;
  e === "x" ? (t.coords.cur.page.y = t.coords.start.page.y, t.coords.cur.client.y = t.coords.start.client.y, t.coords.velocity.client.y = 0, t.coords.velocity.page.y = 0) : e === "y" && (t.coords.cur.page.x = t.coords.start.page.x, t.coords.cur.client.x = t.coords.start.client.x, t.coords.velocity.client.x = 0, t.coords.velocity.page.x = 0)
}

function fn(s) {
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
const yh = function(t) {
    return w.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : w.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag
  },
  ri = {
    id: "actions/drag",
    install: bh,
    listeners: {
      "interactions:before-action-move": Di,
      "interactions:action-resume": Di,
      "interactions:action-move": fn,
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
    draggable: yh,
    beforeMove: Di,
    move: fn,
    defaults: {
      startAxis: "xy",
      lockAxis: "xy"
    },
    getCursor() {
      return "move"
    },
    filterEventType: s => s.search("drag") === 0
  };
vt.use(ri);

function _h(s) {
  const {
    actions: t,
    browser: e,
    Interactable: i,
    defaults: n
  } = s;
  Ct.cursors = kh(e), Ct.defaultMargin = e.supportsTouch || e.supportsPointerEvent ? 20 : 10, i.prototype.resizable = function(o) {
    return Sh(this, o, s)
  }, t.map.resize = Ct, t.methodDict.resize = "resizable", n.actions.resize = Ct.defaults
}

function wh(s) {
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
    if (w.object(l.edges)) {
      const a = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      };
      for (const h in a) a[h] = Mh(h, l.edges[h], r, t._latestPointer.eventTarget, i, n, l.margin || Ct.defaultMargin);
      a.left = a.left && !a.right, a.top = a.top && !a.bottom, (a.left || a.right || a.top || a.bottom) && (s.action = {
        name: "resize",
        edges: a
      })
    } else {
      const a = l.axis !== "y" && r.x > n.right - Ct.defaultMargin,
        h = l.axis !== "x" && r.y > n.bottom - Ct.defaultMargin;
      (a || h) && (s.action = {
        name: "resize",
        axes: (a ? "x" : "") + (h ? "y" : "")
      })
    }
    return s.action ? !1 : void 0
  }
}

function Sh(s, t, e) {
  return w.object(t) ? (s.options.resize.enabled = t.enabled !== !1, s.setPerAction("resize", t), s.setOnEvents("resize", t), w.string(t.axis) && /^x$|^y$|^xy$/.test(t.axis) ? s.options.resize.axis = t.axis : t.axis === null && (s.options.resize.axis = e.defaults.actions.resize.axis), w.bool(t.preserveAspectRatio) ? s.options.resize.preserveAspectRatio = t.preserveAspectRatio : w.bool(t.square) && (s.options.resize.square = t.square), s) : w.bool(t) ? (s.options.resize.enabled = t, s) : s.options.resize
}

function Mh(s, t, e, i, n, o, r) {
  if (!t) return !1;
  if (t === !0) {
    const l = w.number(o.width) ? o.width : o.right - o.left,
      a = w.number(o.height) ? o.height : o.bottom - o.top;
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
  return w.element(i) ? w.element(t) ? t === i : cs(i, t, n) : !1
}

function kh(s) {
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

function xh(s) {
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

function Ch(s) {
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

function Eh(s) {
  let {
    iEvent: t,
    interaction: e
  } = s;
  if (e.prepared.name !== "resize" || !e.prepared.edges) return;
  const i = t;
  i.edges = e.prepared.edges, i.rect = e._rects.corrected, i.deltaRect = e._rects.delta
}

function pn(s) {
  let {
    iEvent: t,
    interaction: e
  } = s;
  if (e.prepared.name !== "resize" || !e.resizeAxes) return;
  const i = e.interactable.options,
    n = t;
  i.resize.square ? (e.resizeAxes === "y" ? n.delta.x = n.delta.y : n.delta.y = n.delta.x, n.axes = "xy") : (n.axes = e.resizeAxes, e.resizeAxes === "x" ? n.delta.y = 0 : e.resizeAxes === "y" && (n.delta.x = 0))
}
const Ct = {
  id: "actions/resize",
  before: ["actions/drag"],
  install: _h,
  listeners: {
    "interactions:new": s => {
      let {
        interaction: t
      } = s;
      t.resizeAxes = "xy"
    },
    "interactions:action-start": s => {
      xh(s), pn(s)
    },
    "interactions:action-move": s => {
      Ch(s), pn(s)
    },
    "interactions:action-end": Eh,
    "auto-start:check": wh
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
    const n = Ct.cursors;
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
vt.use(Ct);
var Th = () => {},
  zh = () => {},
  Ih = s => {
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
  Ph = Object.freeze({
    __proto__: null,
    edgeTarget: Th,
    elements: zh,
    grid: Ih
  });
const $h = {
    id: "snappers",
    install(s) {
      const {
        interactStatic: t
      } = s;
      t.snappers = P(t.snappers || {}, Ph), t.createSnapGrid = t.snappers.grid
    }
  },
  Lh = {
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
      const c = new Rs(s.interaction);
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
      } = t, o = P({}, i), r = t.equalDelta ? jh : Rh;
      if (P(s.edges, n), r(t, t.xIsPrimaryAxis, i, e), !t.subModification) return null;
      const l = P({}, e);
      xi(n, l, {
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

function jh(s, t, e) {
  let {
    startCoords: i,
    edgeSign: n
  } = s;
  t ? e.y = i.y + (e.x - i.x) * n.y : e.x = i.x + (e.y - i.y) * n.x
}

function Rh(s, t, e, i) {
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
var Ah = Dt(Lh, "aspectRatio");

function Oh(s) {
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
    const h = Yt(r.restriction, n, o);
    if (h) {
      const c = h.right - h.left - t.width,
        u = h.bottom - h.top - t.height;
      c < 0 && (a.left += c, a.right += c), u < 0 && (a.top += u, a.bottom += u)
    }
    a.left += e.left - t.width * l.left, a.top += e.top - t.height * l.top, a.right += e.right - t.width * (1 - l.right), a.bottom += e.bottom - t.height * (1 - l.bottom)
  }
  i.offset = a
}

function Dh(s) {
  let {
    coords: t,
    interaction: e,
    state: i
  } = s;
  const {
    options: n,
    offset: o
  } = i, r = Yt(n.restriction, e, t);
  if (!r) return;
  const l = Ua(r);
  t.x = Math.max(Math.min(l.right - o.right, t.x), l.left + o.left), t.y = Math.max(Math.min(l.bottom - o.bottom, t.y), l.top + o.top)
}

function Yt(s, t, e) {
  return w.func(s) ? je(s, t.interactable, t.element, [e.x, e.y, t]) : je(s, t.interactable, t.element)
}
const Vh = {
    restriction: null,
    elementRect: null,
    offset: null,
    endOnly: !1,
    enabled: !1
  },
  vi = {
    start: Oh,
    set: Dh,
    defaults: Vh
  };
var Wh = Dt(vi, "restrict");
const Qo = {
    top: 1 / 0,
    left: 1 / 0,
    bottom: -1 / 0,
    right: -1 / 0
  },
  tr = {
    top: -1 / 0,
    left: -1 / 0,
    bottom: 1 / 0,
    right: 1 / 0
  };

function Nh(s) {
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
    const r = Yt(n.offset, t, t.coords.start.page);
    o = ki(r)
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

function Bh(s) {
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
    a = Yt(r.inner, i, l) || {},
    h = Yt(r.outer, i, l) || {};
  mn(a, Qo), mn(h, tr), e.top ? t.y = Math.min(Math.max(h.top + o.top, l.y), a.top + o.top) : e.bottom && (t.y = Math.max(Math.min(h.bottom + o.bottom, l.y), a.bottom + o.bottom)), e.left ? t.x = Math.min(Math.max(h.left + o.left, l.x), a.left + o.left) : e.right && (t.x = Math.max(Math.min(h.right + o.right, l.x), a.right + o.right))
}

function mn(s, t) {
  for (const e of ["top", "left", "bottom", "right"]) e in s || (s[e] = t[e]);
  return s
}
const Fh = {
    inner: null,
    outer: null,
    offset: null,
    endOnly: !1,
    enabled: !1
  },
  xe = {
    noInner: Qo,
    noOuter: tr,
    start: Nh,
    set: Bh,
    defaults: Fh
  };
var Uh = Dt(xe, "restrictEdges");
const Kh = P({
    get elementRect() {
      return {
        top: 0,
        left: 0,
        bottom: 1,
        right: 1
      }
    },
    set elementRect(s) {}
  }, vi.defaults),
  Hh = {
    start: vi.start,
    set: vi.set,
    defaults: Kh
  };
var Jh = Dt(Hh, "restrictRect");
const Xh = {
    width: -1 / 0,
    height: -1 / 0
  },
  Yh = {
    width: 1 / 0,
    height: 1 / 0
  };

function Gh(s) {
  return xe.start(s)
}

function Zh(s) {
  const {
    interaction: t,
    state: e,
    rect: i,
    edges: n
  } = s, {
    options: o
  } = e;
  if (!n) return;
  const r = fs(Yt(o.min, t, s.coords)) || Xh,
    l = fs(Yt(o.max, t, s.coords)) || Yh;
  e.options = {
    endOnly: o.endOnly,
    inner: P({}, xe.noInner),
    outer: P({}, xe.noOuter)
  }, n.top ? (e.options.inner.top = i.bottom - r.height, e.options.outer.top = i.bottom - l.height) : n.bottom && (e.options.inner.bottom = i.top + r.height, e.options.outer.bottom = i.top + l.height), n.left ? (e.options.inner.left = i.right - r.width, e.options.outer.left = i.right - l.width) : n.right && (e.options.inner.right = i.left + r.width, e.options.outer.right = i.left + l.width), xe.set(s), e.options = o
}
const qh = {
    min: null,
    max: null,
    endOnly: !1,
    enabled: !1
  },
  Qh = {
    start: Gh,
    set: Zh,
    defaults: qh
  };
var tc = Dt(Qh, "restrictSize");

function ec(s) {
  const {
    interaction: t,
    interactable: e,
    element: i,
    rect: n,
    state: o,
    startOffset: r
  } = s, {
    options: l
  } = o, a = l.offsetWithOrigin ? sc(s) : {
    x: 0,
    y: 0
  };
  let h;
  if (l.offset === "startCoords") h = {
    x: t.coords.start.page.x,
    y: t.coords.start.page.y
  };
  else {
    const u = je(l.offset, e, i, [t]);
    h = ki(u) || {
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

function ic(s) {
  const {
    interaction: t,
    coords: e,
    state: i
  } = s, {
    options: n,
    offsets: o
  } = i, r = Ci(t.interactable, t.element, t.prepared.name), l = P({}, e), a = [];
  n.offsetWithOrigin || (l.x -= r.x, l.y -= r.y);
  for (const c of o) {
    const u = l.x - c.x,
      d = l.y - c.y;
    for (let f = 0, p = n.targets.length; f < p; f++) {
      const v = n.targets[f];
      let b;
      w.func(v) ? b = v(u, d, t._proxy, c, f) : b = v, b && a.push({
        x: (w.number(b.x) ? b.x : u) + c.x,
        y: (w.number(b.y) ? b.y : d) + c.y,
        range: w.number(b.range) ? b.range : n.range,
        source: v,
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
      p = Be(d, f);
    let v = p <= u;
    u === 1 / 0 && h.inRange && h.range !== 1 / 0 && (v = !1), (!h.target || (v ? h.inRange && u !== 1 / 0 ? p / u < h.distance / h.range : u === 1 / 0 && h.range !== 1 / 0 || p < h.distance : !h.inRange && p < h.distance)) && (h.target = c, h.distance = p, h.range = u, h.inRange = v, h.delta.x = d, h.delta.y = f)
  }
  return h.inRange && (e.x = h.target.x, e.y = h.target.y), i.closest = h, h
}

function sc(s) {
  const {
    element: t
  } = s.interaction;
  return ki(je(s.state.options.origin, null, null, [t])) || Ci(s.interactable, t, s.interaction.prepared.name)
}
const nc = {
    range: 1 / 0,
    targets: null,
    offset: null,
    offsetWithOrigin: !0,
    origin: null,
    relativePoints: null,
    endOnly: !1,
    enabled: !1
  },
  As = {
    start: ec,
    set: ic,
    defaults: nc
  };
var oc = Dt(As, "snap");

function rc(s) {
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
  ], As.start(s), t.offsets = s.state.offsets, s.state = t
}

function lc(s) {
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
    if (w.func(a) ? h = a(r.x, r.y, t) : h = a, !!h) {
      for (const [c, u] of e.targetFields)
        if (c in h || u in h) {
          h.x = h[c], h.y = h[u];
          break
        } e.options.targets.push(h)
    }
  }
  const l = As.set(s);
  return e.options = n, l
}
const ac = {
    range: 1 / 0,
    targets: null,
    offset: null,
    endOnly: !1,
    enabled: !1
  },
  gi = {
    start: rc,
    set: lc,
    defaults: ac
  };
var hc = Dt(gi, "snapSize");

function cc(s) {
  const {
    edges: t
  } = s;
  return t ? (s.state.targetFields = s.state.targetFields || [
    [t.left ? "left" : "right", t.top ? "top" : "bottom"]
  ], gi.start(s)) : null
}
const uc = {
  start: cc,
  set: gi.set,
  defaults: P(me(gi.defaults), {
    targets: void 0,
    range: void 0,
    offset: {
      x: 0,
      y: 0
    }
  })
};
var dc = Dt(uc, "snapEdges");
const we = () => {};
we._defaults = {};
var Vi = {
  aspectRatio: Ah,
  restrictEdges: Uh,
  restrict: Wh,
  restrictRect: Jh,
  restrictSize: tc,
  snapEdges: dc,
  snap: oc,
  snapSize: hc,
  spring: we,
  avoid: we,
  transform: we,
  rubberband: we
};
const fc = {
  id: "modifiers",
  install(s) {
    const {
      interactStatic: t
    } = s;
    s.usePlugin(Zo), s.usePlugin($h), t.modifiers = Vi;
    for (const e in Vi) {
      const {
        _defaults: i,
        _methods: n
      } = Vi[e];
      i._methods = n, s.defaults.perAction[e] = i
    }
  }
};
vt.use(fc);
class er extends Ls {
  constructor(t, e, i, n, o, r) {
    if (super(o), fi(this, i), i !== e && fi(this, e), this.timeStamp = r, this.originalEvent = i, this.type = t, this.pointerId = Le(e), this.pointerType = Uo(e), this.target = n, this.currentTarget = null, t === "tap") {
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
const pc = {
    holdDuration: 600,
    ignoreFrom: null,
    allowFrom: null,
    origin: {
      x: 0,
      y: 0
    }
  },
  Ce = {
    id: "pointer-events/base",
    before: ["inertia", "modifiers", "auto-start", "actions"],
    install: _c,
    listeners: {
      "interactions:new": mc,
      "interactions:update-pointer": vc,
      "interactions:move": gc,
      "interactions:down": (s, t) => {
        bc(s, t), jt(s, t)
      },
      "interactions:up": (s, t) => {
        vs(s), jt(s, t), yc(s, t)
      },
      "interactions:cancel": (s, t) => {
        vs(s), jt(s, t)
      }
    },
    PointerEvent: er,
    fire: jt,
    collectEventTargets: ir,
    defaults: pc,
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

function jt(s, t) {
  const {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o,
    type: r,
    targets: l = ir(s, t)
  } = s, a = new er(r, i, n, o, e, t.now());
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
    const d = Ci(u.eventable, u.node);
    if (a._subtractOrigin(d), a.eventable = u.eventable, a.currentTarget = u.node, u.eventable.fire(a), a._addOrigin(d), a.immediatePropagationStopped || a.propagationStopped && c + 1 < l.length && l[c + 1].node !== a.currentTarget) break
  }
  if (t.fire("pointerEvents:fired", h), r === "tap") {
    const c = a.double ? jt({
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

function ir(s, t) {
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
  const h = $o(o),
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

function mc(s) {
  let {
    interaction: t
  } = s;
  t.prevTap = null, t.tapTime = 0
}

function vc(s) {
  let {
    down: t,
    pointerInfo: e
  } = s;
  !t && e.hold || (e.hold = {
    duration: 1 / 0,
    timeout: null
  })
}

function vs(s) {
  let {
    interaction: t,
    pointerIndex: e
  } = s;
  const i = t.pointers[e].hold;
  i && i.timeout && (clearTimeout(i.timeout), i.timeout = null)
}

function gc(s, t) {
  const {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o,
    duplicate: r
  } = s;
  !r && (!e.pointerIsDown || e.pointerWasMoved) && (e.pointerIsDown && vs(s), jt({
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o,
    type: "move"
  }, t))
}

function bc(s, t) {
  let {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o,
    pointerIndex: r
  } = s;
  const l = e.pointers[r].hold,
    a = $o(o),
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
    jt({
      interaction: e,
      eventTarget: o,
      pointer: i,
      event: n,
      type: "hold"
    }, t)
  }, c)
}

function yc(s, t) {
  let {
    interaction: e,
    pointer: i,
    event: n,
    eventTarget: o
  } = s;
  e.pointerWasMoved || jt({
    interaction: e,
    eventTarget: o,
    pointer: i,
    event: n,
    type: "tap"
  }, t)
}

function _c(s) {
  s.pointerEvents = Ce, s.defaults.actions.pointerEvents = Ce.defaults, P(s.actions.phaselessTypes, Ce.types)
}
var wc = Object.freeze({
  __proto__: null,
  default: Ce
});

function Sc(s) {
  s.usePlugin(Ce);
  const {
    pointerEvents: t
  } = s;
  t.defaults.holdRepeatInterval = 0, t.types.holdrepeat = s.actions.phaselessTypes.holdrepeat = !0
}

function Mc(s) {
  let {
    pointerEvent: t
  } = s;
  t.type === "hold" && (t.count = (t.count || 0) + 1)
}

function kc(s, t) {
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

function xc(s) {
  let {
    interaction: t
  } = s;
  t.holdIntervalHandle && (clearInterval(t.holdIntervalHandle), t.holdIntervalHandle = null)
}
const Cc = {
  id: "pointer-events/holdRepeat",
  install: Sc,
  listeners: ["move", "up", "cancel", "endall"].reduce((s, t) => (s[`pointerEvents:${t}`] = xc, s), {
    "pointerEvents:new": Mc,
    "pointerEvents:fired": kc
  })
};

function Ec(s) {
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
const Tc = {
    id: "pointer-events/interactableTargets",
    install: Ec,
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
  zc = {
    id: "pointer-events",
    install(s) {
      s.usePlugin(wc), s.usePlugin(Cc), s.usePlugin(Tc)
    }
  };
vt.use(zc);

function Ic(s) {
  const {
    Interactable: t
  } = s;
  s.actions.phases.reflow = !0, t.prototype.reflow = function(e) {
    return Pc(this, e, s)
  }
}

function Pc(s, t, e) {
  const i = s.getAllElements(),
    n = e.window.Promise,
    o = n ? [] : null;
  for (const r of i) {
    const l = s.getRect(r);
    if (!l) break;
    const a = Me(e.interactions.list, c => c.interacting() && c.interactable === s && c.element === r && c.prepared.name === t.name);
    let h;
    if (a) a.move(), o && (h = a._reflowPromise || new n(c => {
      a._reflowResolve = c
    }));
    else {
      const c = fs(l),
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
        d = ja(u);
      h = $c(e, s, r, t, d)
    }
    o && o.push(h)
  }
  return o && n.all(o).then(() => s)
}

function $c(s, t, e, i, n) {
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
  o.interactable = t, o.element = e, o.prevEvent = n, o.updatePointer(n, n, e, !0), No(o.coords.delta), Is(o.prepared, i), o._doPhase(r);
  const {
    Promise: l
  } = s.window, a = l ? new l(h => {
    o._reflowResolve = h
  }) : void 0;
  return o._reflowPromise = a, o.start(i, t, e), o._interacting ? (o.move(r), o.end(n)) : (o.stop(), o._reflowResolve()), o.removePointer(n, n), a
}
const Lc = {
  id: "reflow",
  install: Ic,
  listeners: {
    "interactions:stop": (s, t) => {
      let {
        interaction: e
      } = s;
      e.pointerType === "reflow" && (e._reflowResolve && e._reflowResolve(), Ma(t.interactions.list, e))
    }
  }
};
vt.use(Lc);
const jc = () => ({
    createAspectRatioModifier: ({
      ratio: l,
      minHeight: a,
      minWidth: h
    }) => vt.modifiers.aspectRatio({
      ratio: l,
      modifiers: [vt.modifiers.restrictSize({
        min: {
          width: h,
          height: a
        }
      })]
    }),
    createInteractable: l => {
      if (l !== null) return vt(l)
    },
    createRestrictRectModifier: ({
      restriction: l
    }) => vt.modifiers.restrictRect({
      restriction: l
    }),
    interactStatic: vt,
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
  Rc = (s, t) => {
    let n, o;
    const r = tt(!1),
      {
        createAspectRatioModifier: l,
        createInteractable: a,
        createRestrictRectModifier: h,
        onInteractionEnd: c,
        onInteractionStart: u,
        reflow: d,
        destroyInteractable: f
      } = jc(),
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
      v = () => {
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
      x = () => 174 / 98,
      k = () => {
        var X;
        const T = N(),
          W = Math.ceil(((((X = window.visualViewport) == null ? void 0 : X.width) ?? window.innerWidth) - T) / 2);
        return {
          left: W,
          right: W
        }
      },
      I = () => {
        const T = document.querySelector(".tabs"),
          W = document.querySelector(".memepad-jetton-header"),
          X = (T == null ? void 0 : T.offsetHeight) ?? 0;
        return {
          top: W instanceof HTMLElement ? Math.ceil(W.offsetTop + parseInt(getComputedStyle(W).marginTop) + parseInt(getComputedStyle(W).borderTop) + parseInt(getComputedStyle(W).paddingTop)) : 0,
          bottom: X
        }
      },
      N = () => {
        const T = document.querySelector(".page");
        return Math.ceil((T == null ? void 0 : T.offsetWidth) ?? 0)
      },
      D = () => {
        var X;
        const {
          top: T,
          bottom: W
        } = I();
        return Math.ceil((((X = window.visualViewport) == null ? void 0 : X.height) ?? window.innerHeight) - T - W)
      },
      $ = () => {
        const T = N(),
          W = D();
        return T < W ? T : T > W ? Math.ceil(W * x()) : Math.ceil(T / 2)
      },
      z = () => {
        const T = N(),
          W = D();
        return T < W ? Math.ceil(T / x()) : T > W ? W : Math.ceil(W / 2)
      },
      V = () => {
        var T, W;
        return (((T = s.value) == null ? void 0 : T.offsetWidth) ?? 174) > 174 && (((W = s.value) == null ? void 0 : W.offsetHeight) ?? 98) > 98
      },
      C = () => {
        if (s.value === null) return;
        const T = N(),
          {
            offsetWidth: W
          } = s.value,
          X = T - W < 0 ? 0 : Math.ceil(T - W),
          wt = 0;
        p.position.x = X, p.position.y = wt, s.value.style.transform = `translate(${X}px, ${wt}px)`
      },
      L = () => {
        s.value !== null && (s.value.style.height = "98px", s.value.style.width = "174px")
      },
      F = (T, W) => {
        s.value !== null && (T === void 0 && W === void 0 || (T !== void 0 && (s.value.style.width = T), W !== void 0 && (s.value.style.height = W)))
      },
      H = async () => {
        C(), await d(n)
      }, nt = () => {
        requestAnimationFrame(async () => {
          V() ? (at(), await et(), F(`${$()}px`, `${z()}px`)) : L(), await d(n)
        })
      }, U = () => {
        window.addEventListener("resize", H), window.screen && "orientation" in window.screen ? window.screen.orientation.addEventListener("change", nt) : window.addEventListener("orientationchange", nt)
      }, Z = () => {
        window.removeEventListener("resize", H), window.screen && "orientation" in window.screen ? window.screen.orientation.removeEventListener("change", nt) : window.removeEventListener("orientationchange", nt)
      }, J = l({
        ratio: x(),
        minHeight: 98,
        minWidth: 174
      }), ot = h({
        restriction() {
          const T = N(),
            W = D(),
            {
              left: X
            } = k(),
            {
              top: wt
            } = I();
          return {
            top: wt,
            left: X,
            bottom: Math.ceil(wt + W),
            right: Math.ceil(X + T)
          }
        }
      }), ct = {
        inertia: {
          resistance: 5,
          minSpeed: 300
        },
        modifiers: [ot],
        onmove(T) {
          p.position.x += T.dx, p.position.y += T.dy, T.target.style.transform = `translate(${p.position.x}px, ${p.position.y}px)`
        },
        onstart: u,
        onend: c
      }, K = {
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
        onmove(T) {
          var W, X;
          p.position.x += ((W = T.deltaRect) == null ? void 0 : W.left) ?? 0, p.position.y += ((X = T.deltaRect) == null ? void 0 : X.top) ?? 0, T.target.style.height = `${T.rect.height}px`, T.target.style.transform = `translate(${p.position.x}px, ${p.position.y}px)`, T.target.style.width = `${T.rect.width}px`
        },
        onstart: u,
        onend(T) {
          const W = $(),
            X = z();
          T.rect.width > W || T.rect.height > X ? (T.target.style.height = `${X}px`, T.target.style.width = `${W}px`, d(n).then(() => c(T))) : c(T)
        }
      }, et = async () => {
        var T, W, X;
        b(), v(), L(), C(), n = (W = (T = a(s.value)) == null ? void 0 : T.draggable(ct)) == null ? void 0 : W.resizable(K), o = (X = a(t.value)) == null ? void 0 : X.on("doubletap", async wt => {
          V() ? L() : F(`${$()}px`, `${z()}px`), await d(n), wt.preventDefault()
        }), await d(n), U(), r.value = !0
      }, at = () => {
        Z(), f(n), f(o), g(), y(), r.value = !1
      };
    return Rr(at), {
      destroy: at,
      init: et,
      isEnabled: r
    }
  },
  Ac = (...s) => {
    const t = tt(rs(...s)),
      e = Ar(() => {
        t.value = rs(...s)
      }, 1e3);
    return We(() => {
      clearInterval(e)
    }), t
  },
  Oc = ["src"],
  Dc = {
    class: "stats"
  },
  Vc = {
    class: "item"
  },
  Wc = {
    class: "label"
  },
  Nc = {
    class: "item"
  },
  Bc = {
    class: "label"
  },
  Fc = {
    class: "controls"
  },
  Uc = st({
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
        n = Li("player"),
        o = Li("wrapper"),
        r = Li("bg"),
        l = Rc(o, r),
        a = Ac(e.stream.startAt, "hms"),
        h = tt(!0),
        c = j(() => ({
          "memepad-stream-view": !0,
          "memepad-stream-view--pip": l.isEnabled.value
        })),
        u = j(() => `https://stream.blum.codes/embed/${e.stream.id}?autoplay=1&loop=1&muted=1&controls=0&coverFitMode=1&ignoreSize=1`),
        d = j(() => h.value ? "media-volume-off" : "media-volume-min"),
        f = g => {
          var x, k;
          (k = (x = n.value) == null ? void 0 : x.contentWindow) == null || k.postMessage(g, "*")
        },
        p = () => {
          f({
            actionName: "mute"
          }), h.value = !0
        },
        v = () => {
          f({
            actionName: "unmute"
          }), h.value = !1
        },
        b = () => {
          h.value ? v() : p()
        },
        y = () => {
          l.destroy(), i("hide")
        };
      return (g, x) => {
        const k = Ot;
        return _(), E("div", {
          ref_key: "wrapper",
          ref: o,
          class: ae(m(c))
        }, [S("iframe", {
          ref_key: "player",
          ref: n,
          src: m(u),
          frameborder: "0",
          allow: "autoplay; encrypted-media",
          allowfullscreen: "",
          width: "100%",
          height: "100%",
          sandbox: "allow-scripts allow-same-origin allow-presentation",
          referrerpolicy: "no-referrer"
        }, null, 8, Oc), S("div", {
          ref_key: "bg",
          ref: r,
          class: "bg"
        }, null, 512), S("div", Dc, [S("div", Vc, [R(k, {
          name: "user-voice",
          class: "icon"
        }), S("span", Wc, A(e.stream.viewers), 1)]), S("div", Nc, [R(k, {
          name: "calendar-clock",
          class: "icon"
        }), S("span", Bc, A(m(a).label), 1)])]), Ft(S("div", Fc, [S("button", {
          type: "button",
          class: "reset sound-control",
          onClick: b
        }, [R(k, {
          name: m(d),
          class: "icon"
        }, null, 8, ["name"])]), S("button", {
          type: "button",
          class: "reset visibility-control",
          onClick: y
        }, [R(k, {
          name: "edit-hide",
          class: "icon"
        })])], 512), [
          [ji, !m(l).isEnabled.value]
        ]), Ft(S("button", {
          type: "button",
          class: "reset sound-control",
          onClick: b
        }, [R(k, {
          name: m(d),
          class: "icon"
        }, null, 8, ["name"])], 512), [
          [ji, m(l).isEnabled.value]
        ]), Ft(S("button", {
          type: "button",
          class: "reset pip-disable-control",
          onClick: y
        }, [R(k, {
          name: "close",
          class: "icon"
        })], 512), [
          [ji, m(l).isEnabled.value]
        ])], 2)
      }
    }
  }),
  Kc = lt(Uc, [
    ["__scopeId", "data-v-96eb9da9"]
  ]),
  Hc = {
    class: "memepad-jetton-stream-start"
  },
  Jc = {
    class: "memepad-jetton-stream-start-key-sheet"
  },
  Xc = {
    class: "title"
  },
  Yc = {
    class: "subtitle"
  },
  Gc = {
    class: "copy"
  },
  Zc = {
    class: "label"
  },
  qc = st({
    __name: "Start",
    props: {
      generateStreamKey: {
        type: Function
      }
    },
    emits: ["open-rules"],
    setup(s) {
      const t = s,
        e = tt({
          status: "idle"
        }),
        i = async () => {
          if (e.value.status === "loading" || e.value.status === "loaded") return;
          e.value = {
            status: "loading"
          };
          const r = await t.generateStreamKey();
          if (!gt(r)) throw ks("Failed to generate stream key");
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
        }), o = () => Pe().$webApp.openLink("https://www.blum.io/post/videostream-quick-start-guide");
      return (r, l) => {
        const a = Ot,
          h = Ne,
          c = po("I18nT"),
          u = te,
          d = mo;
        return _(), E("div", Hc, [S("button", {
          type: "button",
          class: "reset button",
          onClick: i
        }, A(("t" in r ? r.t : m(O))("memepad.jetton.start_stream_button")), 1), R(d, {
          modelValue: m(n),
          "onUpdate:modelValue": l[2] || (l[2] = f => bt(n) ? n.value = f : null)
        }, {
          default: Y(() => [S("div", Jc, [S("div", Xc, A(("t" in r ? r.t : m(O))("memepad.jetton.steam.start_sheet.title")), 1), S("div", Yc, A(("t" in r ? r.t : m(O))("memepad.jetton.steam.start_sheet.subtitle")), 1), S("div", Gc, [m(e).status === "loaded" ? (_(), E("button", {
            key: 0,
            type: "button",
            class: "reset",
            onClick: l[0] || (l[0] = f => ("useCopy" in r ? r.useCopy : m(Or))().copy(m(e).streamKey))
          }, [S("div", Zc, A(m(e).streamKey), 1), R(a, {
            name: "edit-copy",
            class: "icon"
          })])) : (_(), B(h, {
            key: 1,
            class: "skeleton",
            type: m(Dr).SECONDARY
          }, null, 8, ["type"]))]), R(c, {
            keypath: "memepad.jetton.stream.rules_text",
            tag: "div",
            class: "rules"
          }, {
            link: Y(() => [S("button", {
              type: "button",
              class: "reset",
              onClick: l[1] || (l[1] = f => r.$emit("open-rules"))
            }, A(("t" in r ? r.t : m(O))("memepad.jetton.stream.rules_link")), 1)]),
            _: 1
          }), R(u, {
            label: ("t" in r ? r.t : m(O))("memepad.jetton.stream.how.title"),
            fill: "",
            type: m(Rt).SECONDARY,
            size: m(Jt).LARGE,
            onClick: o
          }, null, 8, ["label", "type", "size"])])]),
          _: 1
        }, 8, ["modelValue"])])
      }
    }
  }),
  Qc = lt(qc, [
    ["__scopeId", "data-v-09d11ae5"]
  ]),
  tu = st({
    __name: "Stream",
    props: {
      jetton: {},
      jettonInformation: {}
    },
    setup(s) {
      const t = s,
        e = tt(!1),
        i = async () => {
          if (t.jettonInformation.stream.key) return Mt(t.jettonInformation.stream.key);
          const o = await hi.getMemepadStreamKey(t.jetton.shortname);
          if (!gt(o)) return o;
          const r = o.data.stream.key;
          if (!r) throw ks("Failed to generate stream key");
          return Mt(r)
        }, n = () => Pe().$webApp.openLink("https://www.blum.io/post/videostream-quick-start-guide#:~:text=Blum%20Memepad%20Videostream%20Terms%20%26%C2%A0Conditions");
      return (o, r) => {
        const l = Xl,
          a = Kc,
          h = Qc;
        return o.jettonInformation.stream.isBanned ? (_(), B(l, {
          key: 0,
          onOpenRules: n
        })) : o.jettonInformation.stream.online ? (_(), E(dt, {
          key: 1
        }, [m(e) ? (_(), E("button", {
          key: 0,
          type: "button",
          class: "reset memepad-jetton-stream-show-button",
          onClick: r[0] || (r[0] = c => e.value = !1)
        }, A(("t" in o ? o.t : m(O))("memepad.jetton.show_stream_button")), 1)) : (_(), B(a, {
          key: 1,
          stream: o.jettonInformation.stream,
          onHide: r[1] || (r[1] = c => e.value = !0)
        }, null, 8, ["stream"]))], 64)) : o.jettonInformation.stream.creator ? (_(), B(h, {
          key: 2,
          "generate-stream-key": i,
          onOpenRules: n
        })) : ht("", !0)
      }
    }
  }),
  eu = lt(tu, [
    ["__scopeId", "data-v-7e727a94"]
  ]),
  iu = {
    class: "memepad-jetton-market-info"
  },
  su = {
    key: 0,
    class: "top"
  },
  nu = {
    class: "data"
  },
  ou = {
    class: "left"
  },
  ru = {
    key: 0,
    class: "percent"
  },
  lu = {
    key: 1,
    class: "part"
  },
  au = {
    key: 0,
    class: "market-details"
  },
  hu = {
    class: "holders-count"
  },
  cu = {
    key: 0
  },
  uu = {
    key: 1
  },
  du = {
    class: "transactions-count"
  },
  fu = {
    key: 0
  },
  pu = {
    key: 1
  },
  mu = {
    class: "market-cap"
  },
  vu = {
    class: "label"
  },
  gu = {
    class: "value"
  },
  bu = {
    key: 1
  },
  yu = {
    type: "button",
    class: "memepad-jetton-market-info-tooltip reset"
  },
  _u = {
    class: "text"
  },
  wu = {
    class: "progress"
  },
  Su = {
    key: 1,
    class: "metrics"
  },
  Mu = {
    class: "cap"
  },
  ku = {
    class: "title"
  },
  xu = {
    key: 0,
    class: "value"
  },
  Cu = {
    class: "list"
  },
  Eu = {
    class: "title"
  },
  Tu = {
    key: 1,
    class: "value"
  },
  zu = {
    key: 0,
    class: "prefix"
  },
  Iu = {
    key: 1,
    class: "postfix"
  },
  Pu = st({
    __name: "MarketInfo",
    props: {
      isReleased: {
        type: Boolean
      },
      percent: {},
      total: {},
      collected: {},
      marketDetails: {}
    },
    setup(s) {
      const t = s,
        e = j(() => {
          var n;
          if (!((n = t.marketDetails) != null && n.listRows)) return [];
          const i = [];
          if ("holdersCount" in t.marketDetails.listRows) {
            const o = t.marketDetails.listRows.holdersCount,
              r = t.marketDetails.listRows.transactionsCount,
              l = t.marketDetails.listRows.transactionsVolume;
            i.push({
              title: O("memepad.jetton.holders"),
              value: o != null ? Ut(o, {
                accuracy: 0
              }) : o
            }), i.push({
              title: O("memepad.jetton.transactions"),
              value: r != null ? Ut(r, {
                accuracy: 0
              }) : r
            }), i.push({
              title: O("memepad.jetton.trading_volume"),
              value: l != null ? (() => {
                const {
                  value: a,
                  postfix: h
                } = Wt(l);
                return {
                  prefix: "$",
                  value: a,
                  postfix: h
                }
              })() : l
            })
          } else if ("price" in t.marketDetails.listRows) {
            const o = t.marketDetails.listRows.price,
              r = t.marketDetails.listRows.maxSupply,
              l = t.marketDetails.listRows.availableSupply;
            i.push({
              title: O("memepad.jetton.price"),
              value: o != null ? {
                prefix: "$",
                value: vo(o, {
                  accuracy: 10
                })
              } : o
            }), i.push({
              title: O("memepad.jetton.max_supply"),
              value: r != null ? Wt(r) : r
            }), i.push({
              title: O("memepad.jetton.available"),
              value: l != null ? Ut(l, {
                accuracy: 0
              }) : l
            })
          }
          return i
        });
      return (i, n) => {
        var a, h;
        const o = Ne,
          r = Ot,
          l = _o;
        return _(), E("div", iu, [i.isReleased ? ht("", !0) : (_(), E("div", su, [S("div", nu, [S("div", ou, [i.total !== void 0 && i.collected !== void 0 || i.percent ? (_(), E(dt, {
          key: 1
        }, [i.percent !== void 0 ? (_(), E("span", ru, A(`${i.percent.toFixed(2)}%`), 1)) : ht("", !0), i.total !== void 0 && i.collected !== void 0 ? (_(), E("span", lu, A(`${("formatTon"in i?i.formatTon:m(Ys))(i.collected,{trim:!0})}/${("formatTon"in i?i.formatTon:m(Ys))(i.total,{trim:!0,rounding:m(ci).ROUND_UP})} TON`), 1)) : ht("", !0)], 64)) : (_(), B(o, {
          key: 0,
          class: "skeleton"
        }))]), (a = i.marketDetails) != null && a.statistics ? (_(), E("div", au, [S("div", hu, [R(r, {
          name: "personal",
          class: "icon"
        }), i.marketDetails.statistics.holdersCount ? (_(), E("span", cu, A(("formatCount" in i ? i.formatCount : m(Wt))(i.marketDetails.statistics.holdersCount, {
          accuracy: 0
        }).full), 1)) : (_(), E("span", uu, "—"))]), S("div", du, [R(r, {
          name: "transfer",
          class: "icon"
        }), i.marketDetails.statistics.transactionsCount ? (_(), E("span", fu, A(("formatCount" in i ? i.formatCount : m(Wt))(i.marketDetails.statistics.transactionsCount, {
          accuracy: 0
        }).full), 1)) : (_(), E("span", pu, "—"))]), S("div", mu, [i.marketDetails.statistics.marketCap ? (_(), E(dt, {
          key: 0
        }, [S("span", vu, A(("t" in i ? i.t : m(O))("memepad.jetton.stats.market_cap")), 1), S("span", gu, A(`$${("formatCount"in i?i.formatCount:m(Wt))(i.marketDetails.statistics.marketCap).full}`), 1)], 64)) : (_(), E("span", bu, "—"))])])) : (_(), B(l, {
          key: 1,
          text: ("t" in i ? i.t : m(O))("memepad.jetton.market_info_tooltip.text"),
          "text-min-width": 155,
          "text-max-width": 155
        }, {
          default: Y(() => [S("button", yu, [R(r, {
            name: "circle-help",
            class: "icon"
          }), S("span", _u, A(("t" in i ? i.t : m(O))("memepad.jetton.market_info_tooltip.label")), 1)])]),
          _: 1
        }, 8, ["text"]))]), S("div", wu, [S("div", {
          class: "line",
          style: ls({
            width: `${i.percent}%`
          })
        }, null, 4)])])), m(e).length ? (_(), E("div", Su, [S("div", Mu, [S("div", ku, A(("t" in i ? i.t : m(O))("memepad.jetton.market_cap")), 1), (h = i.marketDetails) != null && h.marketCap ? (_(), E("div", xu, [n[0] || (n[0] = S("span", {
          class: "dollar"
        }, "$", -1)), S("span", null, A(("formatCount" in i ? i.formatCount : m(Wt))(i.marketDetails.marketCap).full), 1)])) : (_(), B(o, {
          key: 1,
          class: "skeleton"
        }))]), S("div", Cu, [(_(!0), E(dt, null, de(m(e), c => (_(), E("div", {
          key: c.title,
          class: "item"
        }, [S("span", Eu, A(c.title), 1), c.value === void 0 ? (_(), B(o, {
          key: 0,
          class: "skeleton"
        })) : (_(), E("span", Tu, [typeof c.value == "string" ? (_(), E(dt, {
          key: 0
        }, [Gs(A(c.value), 1)], 64)) : c.value === null ? (_(), E(dt, {
          key: 1
        }, [Gs(" — ")], 64)) : (_(), E(dt, {
          key: 2
        }, [c.value.prefix ? (_(), E("span", zu, A(c.value.prefix), 1)) : ht("", !0), S("span", null, A(c.value.value), 1), c.value.postfix ? (_(), E("span", Iu, A(c.value.postfix), 1)) : ht("", !0)], 64))]))]))), 128))])])) : ht("", !0)])
      }
    }
  }),
  $u = lt(Pu, [
    ["__scopeId", "data-v-ac2413e8"]
  ]);

function G(s) {
  var t = s.width,
    e = s.height;
  if (t < 0) throw new Error("Negative width is not allowed for Size");
  if (e < 0) throw new Error("Negative height is not allowed for Size");
  return {
    width: t,
    height: e
  }
}

function Ht(s, t) {
  return s.width === t.width && s.height === t.height
}
var Lu = function() {
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

function ju(s) {
  return new Lu(s)
}
var Ru = function() {
  function s(t, e, i) {
    var n;
    this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = t, this._canvasElementClientSize = G({
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
      return G({
        width: this.canvasElement.width,
        height: this.canvasElement.height
      })
    },
    enumerable: !1,
    configurable: !0
  }), s.prototype.resizeCanvasElement = function(t) {
    this._canvasElementClientSize = G(t), this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px"), this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px"), this._invalidateBitmapSize()
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
    Ht(e, t) || (this.canvasElement.width = t.width, this.canvasElement.height = t.height, this._emitBitmapSizeChanged(e, t))
  }, s.prototype._emitBitmapSizeChanged = function(t, e) {
    var i = this;
    this._bitmapSizeChangedListeners.forEach(function(n) {
      return n.call(i, t, e)
    })
  }, s.prototype._suggestNewBitmapSize = function(t) {
    var e = this._suggestedBitmapSize,
      i = G(this._transformBitmapSize(t, this._canvasElementClientSize)),
      n = Ht(this.bitmapSize, i) ? null : i;
    e === null && n === null || e !== null && n !== null && Ht(e, n) || (this._suggestedBitmapSize = n, this._emitSuggestedBitmapSizeChanged(e, n))
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
    Ou().then(function(e) {
      return e ? t._initResizeObserver() : t._initDevicePixelRatioObservable()
    })
  }, s.prototype._initDevicePixelRatioObservable = function() {
    var t = this;
    if (this._canvasElement !== null) {
      var e = vn(this._canvasElement);
      if (e === null) throw new Error("No window is associated with the canvas");
      this._devicePixelRatioObservable = ju(e), this._devicePixelRatioObservable.subscribe(function() {
        return t._invalidateBitmapSize()
      }), this._invalidateBitmapSize()
    }
  }, s.prototype._invalidateBitmapSize = function() {
    var t, e;
    if (this._canvasElement !== null) {
      var i = vn(this._canvasElement);
      if (i !== null) {
        var n = (e = (t = this._devicePixelRatioObservable) === null || t === void 0 ? void 0 : t.value) !== null && e !== void 0 ? e : i.devicePixelRatio,
          o = this._canvasElement.getClientRects(),
          r = o[0] !== void 0 ? Du(o[0], n) : G({
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
          o = G({
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

function Au(s, t) {
  if (t.type === "device-pixel-content-box") return new Ru(s, t.transform, t.options);
  throw new Error("Unsupported binding target")
}

function vn(s) {
  return s.ownerDocument.defaultView
}

function Ou() {
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

function Du(s, t) {
  return G({
    width: Math.round(s.left * t + s.width * t) - Math.round(s.left * t),
    height: Math.round(s.top * t + s.height * t) - Math.round(s.top * t)
  })
}
var Vu = function() {
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

function Gt(s, t) {
  var e = s.canvasElementClientSize;
  if (e.width === 0 || e.height === 0) return null;
  var i = s.bitmapSize;
  if (i.width === 0 || i.height === 0) return null;
  var n = s.canvasElement.getContext("2d", t);
  return n === null ? null : new Vu(n, e, i)
}
/*!
 * @license
 * TradingView Lightweight Charts™ v4.2.1
 * Copyright (c) 2024 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
const Wu = {
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
  Nu = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    openVisible: !0,
    thinBars: !0
  },
  Bu = {
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
  Fu = {
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
  Uu = {
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
  Ku = {
    color: "#26a69a",
    base: 0
  },
  sr = {
    color: "#2196f3"
  },
  nr = {
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
var gn, bi;

function Zt(s, t) {
  const e = {
    0: [],
    1: [s.lineWidth, s.lineWidth],
    2: [2 * s.lineWidth, 2 * s.lineWidth],
    3: [6 * s.lineWidth, 6 * s.lineWidth],
    4: [s.lineWidth, 4 * s.lineWidth]
  } [t];
  s.setLineDash(e)
}

function or(s, t, e, i) {
  s.beginPath();
  const n = s.lineWidth % 2 ? .5 : 0;
  s.moveTo(e, t + n), s.lineTo(i, t + n), s.stroke()
}

function At(s, t) {
  if (!s) throw new Error("Assertion failed" + (t ? ": " + t : ""))
}

function ft(s) {
  if (s === void 0) throw new Error("Value is undefined");
  return s
}

function M(s) {
  if (s === null) throw new Error("Value is null");
  return s
}

function re(s) {
  return M(ft(s))
}(function(s) {
  s[s.Simple = 0] = "Simple", s[s.WithSteps = 1] = "WithSteps", s[s.Curved = 2] = "Curved"
})(gn || (gn = {})),
function(s) {
  s[s.Solid = 0] = "Solid", s[s.Dotted = 1] = "Dotted", s[s.Dashed = 2] = "Dashed", s[s.LargeDashed = 3] = "LargeDashed", s[s.SparseDotted = 4] = "SparseDotted"
}(bi || (bi = {}));
const bn = {
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

function mt(s) {
  return s < 0 ? 0 : s > 255 ? 255 : Math.round(s) || 0
}

function rr(s) {
  return s <= 0 || s > 1 ? Math.min(Math.max(s, 0), 1) : Math.round(1e4 * s) / 1e4
}
const Hu = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
  Ju = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
  Xu = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
  Yu = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;

function Re(s) {
  (s = s.toLowerCase()) in bn && (s = bn[s]);
  {
    const t = Yu.exec(s) || Xu.exec(s);
    if (t) return [mt(parseInt(t[1], 10)), mt(parseInt(t[2], 10)), mt(parseInt(t[3], 10)), rr(t.length < 5 ? 1 : parseFloat(t[4]))]
  } {
    const t = Ju.exec(s);
    if (t) return [mt(parseInt(t[1], 16)), mt(parseInt(t[2], 16)), mt(parseInt(t[3], 16)), 1]
  } {
    const t = Hu.exec(s);
    if (t) return [mt(17 * parseInt(t[1], 16)), mt(17 * parseInt(t[2], 16)), mt(17 * parseInt(t[3], 16)), 1]
  }
  throw new Error(`Cannot parse color: ${s}`)
}

function lr(s) {
  return .199 * s[0] + .687 * s[1] + .114 * s[2]
}

function Ei(s) {
  const t = Re(s);
  return {
    t: `rgb(${t[0]}, ${t[1]}, ${t[2]})`,
    i: lr(t) > 160 ? "black" : "white"
  }
}
class rt {
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

function yt(s, ...t) {
  for (const e of t)
    for (const i in e) e[i] !== void 0 && (typeof e[i] != "object" || s[i] === void 0 || Array.isArray(e[i]) ? s[i] = e[i] : yt(s[i], e[i]));
  return s
}

function kt(s) {
  return typeof s == "number" && isFinite(s)
}

function Ae(s) {
  return typeof s == "number" && s % 1 == 0
}

function Fe(s) {
  return typeof s == "string"
}

function Xe(s) {
  return typeof s == "boolean"
}

function Et(s) {
  const t = s;
  if (!t || typeof t != "object") return t;
  let e, i, n;
  for (i in e = Array.isArray(t) ? [] : {}, t) t.hasOwnProperty(i) && (n = t[i], e[i] = n && typeof n == "object" ? Et(n) : n);
  return e
}

function Gu(s) {
  return s !== null
}

function Oe(s) {
  return s === null ? void 0 : s
}
const Os = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";

function ve(s, t, e) {
  return t === void 0 && (t = Os), `${e=e!==void 0?`${e} `:""}${s}px ${t}`
}
class Zu {
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
    return t.P === e && t.D === i || (t.P = e, t.D = i, t.R = ve(e, i), t.L = 2.5 / 12 * e, t.B = t.L, t.A = e / 12 * t.T, t.I = e / 12 * t.T, t.N = 0), t.V = this.$(), t.O = this.U(), this.k
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
class Ds {
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
class _t {
  X(t, e, i) {
    t.useBitmapCoordinateSpace(n => this.K(n, e, i))
  }
}
class qu extends _t {
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

function Qu() {
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
const td = {
  from: 0,
  to: 1
};
class ed {
  constructor(t, e) {
    this.ut = new Ds, this.ct = [], this.dt = [], this.ft = !0, this.F = t, this.vt = e, this.ut.Z(this.ct)
  }
  bt(t) {
    const e = this.F.wt();
    e.length !== this.ct.length && (this.dt = e.map(Qu), this.ct = this.dt.map(i => {
      const n = new qu;
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
      const c = M(o.Ct());
      a.lt = h.Tt, a.ht = h.ht, a.et = h.Pt, a.it[0]._t = h._t, a.it[0].st = o.Dt().Rt(h._t, c.Vt), a.rt = (l = h.Ot) !== null && l !== void 0 ? l : this.F.Bt(a.it[0].st / o.Dt().At()), a.it[0].ot = i, a.it[0].nt = n.It(i), a.tt = td
    })
  }
}
class id extends _t {
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
    t.lineCap = "butt", o && l >= 0 && (t.lineWidth = Math.floor(this.zt.Lt.et * i), t.strokeStyle = this.zt.Lt.V, t.fillStyle = this.zt.Lt.V, Zt(t, this.zt.Lt.Nt), function(h, c, u, d) {
      h.beginPath();
      const f = h.lineWidth % 2 ? .5 : 0;
      h.moveTo(c + f, u), h.lineTo(c + f, d), h.stroke()
    }(t, l, 0, e.height)), r && a >= 0 && (t.lineWidth = Math.floor(this.zt.Et.et * n), t.strokeStyle = this.zt.Et.V, t.fillStyle = this.zt.Et.V, Zt(t, this.zt.Et.Nt), or(t, a, 0, e.width))
  }
}
class sd {
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
    }, this.Wt = new id(this.Ft), this.jt = t
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.Wt
  }
  Mt() {
    const t = this.jt.yt(),
      e = M(this.jt.Ht()),
      i = e.$t().W().crosshair,
      n = this.Ft;
    if (i.mode === 2) return n.Et.yt = !1, void(n.Lt.yt = !1);
    n.Et.yt = t && this.jt.Ut(e), n.Lt.yt = t && this.jt.qt(), n.Et.et = i.horzLine.width, n.Et.Nt = i.horzLine.style, n.Et.V = i.horzLine.color, n.Lt.et = i.vertLine.width, n.Lt.Nt = i.vertLine.style, n.Lt.V = i.vertLine.color, n.nt = this.jt.Yt(), n.st = this.jt.Zt()
  }
}

function nd(s, t, e, i, n, o) {
  s.fillRect(t + o, e, i - 2 * o, o), s.fillRect(t + o, e + n - o, i - 2 * o, o), s.fillRect(t, e, o, n), s.fillRect(t + i - o, e, o, n)
}

function Ti(s, t, e, i, n, o) {
  s.save(), s.globalCompositeOperation = "copy", s.fillStyle = o, s.fillRect(t, e, i, n), s.restore()
}

function yn(s, t, e, i, n, o) {
  s.beginPath(), s.roundRect ? s.roundRect(t, e, i, n, o) : (s.lineTo(t + i - o[1], e), o[1] !== 0 && s.arcTo(t + i, e, t + i, e + o[1], o[1]), s.lineTo(t + i, e + n - o[2]), o[2] !== 0 && s.arcTo(t + i, e + n, t + i - o[2], e + n, o[2]), s.lineTo(t + o[3], e + n), o[3] !== 0 && s.arcTo(t, e + n, t, e + n - o[3], o[3]), s.lineTo(t, e + o[0]), o[0] !== 0 && s.arcTo(t, e, t + o[0], e, o[0]))
}

function _n(s, t, e, i, n, o, r = 0, l = [0, 0, 0, 0], a = "") {
  if (s.save(), !r || !a || a === o) return yn(s, t, e, i, n, l), s.fillStyle = o, s.fill(), void s.restore();
  const h = r / 2;
  var c;
  yn(s, t + h, e + h, i - r, n - r, (c = -h, l.map(u => u === 0 ? u : u + c))), o !== "transparent" && (s.fillStyle = o, s.fill()), a !== "transparent" && (s.lineWidth = r, s.strokeStyle = a, s.closePath(), s.stroke()), s.restore()
}

function ar(s, t, e, i, n, o, r) {
  s.save(), s.globalCompositeOperation = "copy";
  const l = s.createLinearGradient(0, 0, 0, n);
  l.addColorStop(0, o), l.addColorStop(1, r), s.fillStyle = l, s.fillRect(t, e, i, n), s.restore()
}
class wn {
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
        return c.Qt ? _n(h, u.ti, u.ii, u.ni, u.si, r, u.ei, [u.ht, 0, 0, u.ht], r) : _n(h, u.ri, u.ii, u.ni, u.si, r, u.ei, [0, u.ht, u.ht, 0], r), this.zt.hi && (h.fillStyle = o, h.fillRect(u.ri, u.li, u.ai - u.ri, u.oi)), this.zt._i && (h.fillStyle = e.O, h.fillRect(c.Qt ? u.ui - u.ei : 0, u.ii, u.ei, u.ci - u.ii)), c
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
    } = t, u = this.zt.hi || !this.zt.mi ? e.T : 0, d = this.zt.bi ? e.C : 0, f = e.L + this.Xt.wi, p = e.B + this.Xt.gi, v = e.A, b = e.I, y = this.zt.Kt, g = e.P, x = i.Mi(r, y), k = Math.ceil(i.xi(r, y)), I = g + f + p, N = e.C + v + b + k + u, D = Math.max(1, Math.floor(c));
    let $ = Math.round(I * c);
    $ % 2 != D % 2 && ($ += 1);
    const z = d > 0 ? Math.max(1, Math.floor(d * h)) : 0,
      V = Math.round(N * h),
      C = Math.round(u * h),
      L = (o = this.Xt.Si) !== null && o !== void 0 ? o : this.Xt.ki,
      F = Math.round(L * c) - Math.floor(.5 * c),
      H = Math.floor(F + D / 2 - $ / 2),
      nt = H + $,
      U = n === "right",
      Z = U ? a.width - d : d,
      J = U ? l.width - z : z;
    let ot, ct, K;
    return U ? (ot = J - V, ct = J - C, K = Z - u - v - d) : (ot = J + V, ct = J + C, K = Z + u + v), {
      Qt: U,
      Jt: {
        ii: H,
        li: F,
        ci: nt,
        ni: V,
        si: $,
        ht: 2 * h,
        ei: z,
        ti: ot,
        ri: J,
        ai: ct,
        oi: D,
        ui: l.width
      },
      di: {
        ii: H / c,
        ci: nt / c,
        fi: K,
        pi: x
      }
    }
  }
}
class zi {
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
    }, this.ft = !0, this.Pi = new(t || wn)(this.Ci, this.yi), this.Ri = new(t || wn)(this.Ti, this.yi)
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
class od extends zi {
  constructor(t, e, i) {
    super(), this.jt = t, this.Li = e, this.Ei = i
  }
  zi(t, e, i) {
    if (t.yt = !1, this.jt.W().mode === 2) return;
    const n = this.jt.W().horzLine;
    if (!n.labelVisible) return;
    const o = this.Li.Ct();
    if (!this.jt.yt() || this.Li.Ni() || o === null) return;
    const r = Ei(n.labelBackgroundColor);
    i.t = r.t, t.V = r.i;
    const l = 2 / 12 * this.Li.P();
    i.wi = l, i.gi = l;
    const a = this.Ei(this.Li);
    i.ki = a.ki, t.Kt = this.Li.Fi(a._t, o), t.yt = !0
  }
}
const rd = /[1-9]/g;
class hr {
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
    }) => (d.font = e.R, Math.round(e.Wi.xi(d, M(this.zt).Kt, rd))));
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
      const v = M(this.zt);
      d.fillStyle = v.t;
      const b = Math.round(h * f),
        y = Math.round(0 * p),
        g = Math.round(c * f),
        x = Math.round(u * p),
        k = Math.round(2 * f);
      if (d.beginPath(), d.moveTo(b, y), d.lineTo(b, x - k), d.arcTo(b, x, b + k, x, k), d.lineTo(g - k, x), d.arcTo(g, x, g, x - k, k), d.lineTo(g, y), d.fill(), v.hi) {
        const I = Math.round(v.ki * f),
          N = y,
          D = Math.round((N + e.T) * p);
        d.fillStyle = v.V;
        const $ = Math.max(1, Math.floor(f)),
          z = Math.floor(.5 * f);
        d.fillRect(I - z, N, $, D - N)
      }
    }), t.useMediaCoordinateSpace(({
      context: d
    }) => {
      const f = M(this.zt),
        p = 0 + e.C + e.T + e.L + e.P / 2;
      d.font = e.R, d.textAlign = "left", d.textBaseline = "middle", d.fillStyle = f.V;
      const v = e.Wi.Mi(d, "Apr0");
      d.translate(h + n, p + v), d.fillText(f.Kt, 0, 0)
    })
  }
}
class ld {
  constructor(t, e, i) {
    this.ft = !0, this.Wt = new hr, this.Ft = {
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
    t.Kt = i.qi(M(o)), t.yt = !0;
    const r = Ei(e.labelBackgroundColor);
    t.t = r.t, t.V = r.i, t.hi = i.W().ticksVisible
  }
}
class Vs {
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
var gs;
(function(s) {
  s[s.Normal = 0] = "Normal", s[s.Magnet = 1] = "Magnet", s[s.Hidden = 2] = "Hidden"
})(gs || (gs = {}));
class ad extends Vs {
  constructor(t, e) {
    super(), this.tn = null, this.nn = NaN, this.sn = 0, this.en = !0, this.rn = new Map, this.hn = !1, this.ln = NaN, this.an = NaN, this._n = NaN, this.un = NaN, this.$i = t, this.cn = e, this.dn = new ed(t, this), this.fn = ((n, o) => r => {
      const l = o(),
        a = n();
      if (r === M(this.tn).vn()) return {
        _t: a,
        ki: l
      };
      {
        const h = M(r.Ct());
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
    this.bn = new ld(this, t, i), this.wn = new sd(this)
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
    const t = this.$i.wt().map(i => i.In().An()).filter(Gu),
      e = t.length === 0 ? null : Math.max(...t);
    this.sn = e !== null ? e : NaN
  }
  Dn(t, e, i) {
    let n = t.get(e);
    return n === void 0 && (n = new od(this, e, i), t.set(e, n)), n
  }
}

function Ii(s) {
  return s === "left" || s === "right"
}
class ut {
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
    return new ut(2)
  }
  static es() {
    return new ut(3)
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
const Sn = ".";

function Tt(s, t) {
  if (!kt(s)) return "n/a";
  if (!Ae(t)) throw new TypeError("invalid length");
  if (t < 0 || t > 16) throw new TypeError("invalid length");
  return t === 0 ? s.toString() : ("0000000000000000" + s.toString()).slice(-t)
}
class Pi {
  constructor(t, e) {
    if (e || (e = 1), kt(t) && Ae(t) || (t = 100), t < 0) throw new TypeError("invalid base");
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
      r >= e && (r -= e, i += 1), n = Sn + Tt(+r.toFixed(this.os) * this.rs, o)
    } else i = Math.round(i * e) / e, o > 0 && (n = Sn + Tt(0, o));
    return i.toFixed(0) + n
  }
}
class cr extends Pi {
  constructor(t = 100) {
    super(t)
  }
  format(t) {
    return `${super.format(t)}%`
  }
}
class hd {
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

function ur(s, t, e, i, n, o, r) {
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
      v = {
        nt: c.nt + f,
        st: c.st
      };
    l.moveTo(p.nt * a, p.st * h), l.lineTo(v.nt * a, v.st * h), r(s, u, p, v)
  } else {
    const f = (v, b) => {
      r(s, u, d, b), l.beginPath(), u = v, d = b
    };
    let p = d;
    l.beginPath(), l.moveTo(c.nt * a, c.st * h);
    for (let v = i.from + 1; v < i.to; ++v) {
      p = t[v];
      const b = o(s, p);
      switch (e) {
        case 0:
          l.lineTo(p.nt * a, p.st * h);
          break;
        case 1:
          l.lineTo(p.nt * a, t[v - 1].st * h), b !== u && (f(b, p), l.lineTo(p.nt * a, t[v - 1].st * h)), l.lineTo(p.nt * a, p.st * h);
          break;
        case 2: {
          const [y, g] = cd(t, v - 1, v);
          l.bezierCurveTo(y.nt * a, y.st * h, g.nt * a, g.st * h, p.nt * a, p.st * h);
          break
        }
      }
      e !== 1 && b !== u && (f(b, p), l.moveTo(p.nt * a, p.st * h))
    }(d !== p || d === p && e === 1) && r(s, u, d, p)
  }
}
const Mn = 6;

function Wi(s, t) {
  return {
    nt: s.nt - t.nt,
    st: s.st - t.st
  }
}

function kn(s, t) {
  return {
    nt: s.nt / t,
    st: s.st / t
  }
}

function cd(s, t, e) {
  const i = Math.max(0, t - 1),
    n = Math.min(s.length - 1, e + 1);
  var o, r;
  return [(o = s[t], r = kn(Wi(s[e], s[i]), Mn), {
    nt: o.nt + r.nt,
    st: o.st + r.st
  }), Wi(s[e], kn(Wi(s[n], s[t]), Mn))]
}

function ud(s, t, e, i, n) {
  const {
    context: o,
    horizontalPixelRatio: r,
    verticalPixelRatio: l
  } = t;
  o.lineTo(n.nt * r, s * l), o.lineTo(i.nt * r, s * l), o.closePath(), o.fillStyle = e, o.fill()
}
class dr extends _t {
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
    c.lineCap = "butt", c.lineJoin = "round", c.lineWidth = r, Zt(c, l), c.lineWidth = 1, ur(t, i, a, n, o, this.ps.bind(this), ud.bind(null, h))
  }
}

function bs(s, t, e) {
  return Math.min(Math.max(s, t), e)
}

function Ye(s, t, e) {
  return t - s <= e
}

function fr(s) {
  const t = Math.ceil(s);
  return t % 2 == 0 ? t - 1 : t
}
class Ws {
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
        const u = bs(h * t.verticalPixelRatio / a, 0, 1);
        c.addColorStop(u, o), c.addColorStop(u, r)
      }
      c.addColorStop(1, l), this.ys = c, this.ws = e
    }
    return this.ys
  }
}
class dd extends dr {
  constructor() {
    super(...arguments), this.Cs = new Ws
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

function fd(s, t) {
  const e = s.context;
  e.strokeStyle = t, e.stroke()
}
class pr extends _t {
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
    h.lineCap = "butt", h.lineWidth = r * t.verticalPixelRatio, Zt(h, l), h.lineJoin = "round";
    const c = this.Ds.bind(this);
    o !== void 0 && ur(t, e, o, i, n, c, fd), a && function(u, d, f, p, v) {
      const {
        horizontalPixelRatio: b,
        verticalPixelRatio: y,
        context: g
      } = u;
      let x = null;
      const k = Math.max(1, Math.floor(b)) % 2 / 2,
        I = f * y + k;
      for (let N = p.to - 1; N >= p.from; --N) {
        const D = d[N];
        if (D) {
          const $ = v(u, D);
          $ !== x && (g.beginPath(), x !== null && g.fill(), g.fillStyle = $, x = $);
          const z = Math.round(D.nt * b) + k,
            V = D.st * y;
          g.moveTo(z, V), g.arc(z, V, I, 0, 2 * Math.PI)
        }
      }
      g.fill()
    }(t, e, a, i, c)
  }
}
class mr extends pr {
  Ds(t, e) {
    return e.lt
  }
}

function vr(s, t, e, i, n = 0, o = t.length) {
  let r = o - n;
  for (; 0 < r;) {
    const l = r >> 1,
      a = n + l;
    i(t[a], e) === s ? (n = a + 1, r -= l + 1) : r = l
  }
  return n
}
const Ue = vr.bind(null, !0),
  gr = vr.bind(null, !1);

function pd(s, t) {
  return s.ot < t
}

function md(s, t) {
  return t < s.ot
}

function br(s, t, e) {
  const i = t.Vs(),
    n = t.ui(),
    o = Ue(s, i, pd),
    r = gr(s, n, md);
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
class Ns {
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
    n !== null && (this.zs = br(this.Is, i, this.Ns), this.Ks(t, e, n.Vt), this.Gs())
  }
}
class $i extends Ns {
  constructor(t, e) {
    super(t, e, !0)
  }
  Ks(t, e, i) {
    e.Js(this.Is, Oe(this.zs)), t.Qs(this.Is, i, Oe(this.zs))
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
class vd extends $i {
  constructor(t, e) {
    super(t, e), this.Ws = new Ds, this.ee = new dd, this.re = new mr, this.Ws.Z([this.ee, this.re])
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
class gd extends _t {
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
        v = Math.round(f * i) - a,
        b = Math.round(p * i) + a,
        y = Math.max(b - v, this.ae);
      t.fillRect(c, v, u, y);
      const g = Math.ceil(1.5 * this.le);
      if (o) {
        if (this.zt.fe) {
          const N = h - g;
          let D = Math.max(v, Math.round(l.ve * i) - a),
            $ = D + u - 1;
          $ > v + y - 1 && ($ = v + y - 1, D = $ - u + 1), t.fillRect(N, D, c - N, $ - D + 1)
        }
        const x = h + g;
        let k = Math.max(v, Math.round(l.pe * i) - a),
          I = k + u - 1;
        I > v + y - 1 && (I = v + y - 1, k = I - u + 1), t.fillRect(d + 1, k, x - d, I - k + 1)
      }
    }
  }
  oe(t) {
    const e = Math.floor(t);
    return Math.max(e, Math.floor(function(i, n) {
      return Math.floor(.3 * i * n)
    }(M(this.zt).he, t)))
  }
}
class yr extends Ns {
  constructor(t, e) {
    super(t, e, !1)
  }
  Ks(t, e, i) {
    e.Js(this.Is, Oe(this.zs)), t.me(this.Is, i, Oe(this.zs))
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
class bd extends yr {
  constructor() {
    super(...arguments), this.Ws = new gd
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
class yd extends dr {
  constructor() {
    super(...arguments), this.Cs = new Ws
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
class _d extends pr {
  constructor() {
    super(...arguments), this.Te = new Ws
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
class wd extends $i {
  constructor(t, e) {
    super(t, e), this.Ws = new Ds, this.De = new yd, this.Ve = new _d, this.Ws.Z([this.De, this.Ve])
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
class Sd extends _t {
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
        v = Math.round(d.ce * r),
        b = Math.round(d.de * r);
      let y = Math.round(o * d.nt) - h;
      const g = y + a - 1;
      c !== null && (y = Math.max(c + 1, y), y = Math.min(y, g));
      const x = g - y + 1;
      n.fillRect(y, v, x, f - v), n.fillRect(y, p + 1, x, b - p), c = g
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
        v = Math.round(Math.max(u.ve, u.pe) * r);
      if (h !== null && (d = Math.max(h + 1, d), d = Math.min(d, f)), this.zt.he * o > 2 * a) nd(n, d, p, f - d + 1, v - p + 1, a);
      else {
        const b = f - d + 1;
        n.fillRect(d, p, b, v - p + 1)
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
        const v = c.ue;
        n.fillStyle = v, l = v
      }
      this.zt._i && (f += a, u += a, p -= a, d -= a), u > d || n.fillRect(f, u, p - f + 1, d - u + 1)
    }
  }
}
class Md extends yr {
  constructor() {
    super(...arguments), this.Ws = new Sd
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
class kd {
  constructor(t, e) {
    this.Ne = t, this.Li = e
  }
  X(t, e, i) {
    this.Ne.draw(t, this.Li, e, i)
  }
}
class Ni extends Ns {
  constructor(t, e, i) {
    super(t, e, !1), this.wn = i, this.Ws = new kd(this.wn.renderer(), n => {
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
    e.Js(this.Is, Oe(this.zs))
  }
  Gs() {
    this.wn.update({
      bars: this.Is.map(xd),
      barSpacing: this.Es.St().he(),
      visibleRange: this.zs
    }, this.Ls.W())
  }
}

function xd(s) {
  return {
    x: s.nt,
    time: s.ot,
    originalData: s.je,
    barColor: s.ue
  }
}
class Cd extends _t {
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
class Ed extends $i {
  constructor() {
    super(...arguments), this.Ws = new Cd
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.te(t, e)), i.Hs(t))
  }
  Gs() {
    const t = {
      it: this.Is,
      he: this.Es.St().he(),
      tt: this.zs,
      qe: this.Ls.Dt().Rt(this.Ls.W().base, M(this.Ls.Ct()).Vt)
    };
    this.Ws.J(t)
  }
}
class Td extends $i {
  constructor() {
    super(...arguments), this.Ws = new mr
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
const zd = /[2-9]/g;
class De {
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
    const n = i || zd,
      o = String(e).replace(n, "0");
    if (this.Qe.has(o)) return ft(this.Qe.get(o)).sr;
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
class Id {
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
class _r {
  constructor(t, e, i) {
    this._r = t, this.lr = new De(50), this.ur = e, this.F = i, this.j = -1, this.Wt = new Id(this.lr)
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
class Pd extends _t {
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
    o < 0 || o > e.height || (t.lineCap = "butt", t.strokeStyle = this.zt.V, t.lineWidth = Math.floor(this.zt.et * i), Zt(t, this.zt.Nt), or(t, o, 0, e.width))
  }
}
class Bs {
  constructor(t) {
    this.Mr = {
      st: 0,
      V: "rgba(0, 0, 0, 0)",
      et: 1,
      Nt: 0,
      yt: !1
    }, this.Sr = new Pd, this.ft = !0, this.Ls = t, this.Es = t.$t(), this.Sr.J(this.Mr)
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.Ls.yt() ? (this.ft && (this.kr(), this.ft = !1), this.Sr) : null
  }
}
class $d extends Bs {
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
class Ld extends _t {
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
const jd = [{
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

function xn(s, t, e, i) {
  return function(n, o) {
    if (n === "transparent") return n;
    const r = Re(n),
      l = r[3];
    return `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o*l})`
  }(s, e + (i - e) * t)
}

function Cn(s, t) {
  const e = s % 2600 / 2600;
  let i;
  for (const a of jd)
    if (e >= a.Dr && e <= a.Vr) {
      i = a;
      break
    } At(i !== void 0, "Last price animation internal logic error");
  const n = (e - i.Dr) / (i.Vr - i.Dr);
  return {
    Pr: xn(t, n, i.Ar, i.Ir),
    Rr: xn(t, n, i.zr, i.Lr),
    ht: (o = n, r = i.Or, l = i.Br, r + (l - r) * o)
  };
  var o, r, l
}
class Rd {
  constructor(t) {
    this.Wt = new Ld, this.ft = !0, this.Er = !0, this.Nr = performance.now(), this.Fr = this.Nr - 1, this.Wr = t
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
      a = Cn(this.Kr(), r);
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
      const e = Cn(this.Kr(), t.Cr);
      t.Pr = e.Pr, t.Rr = e.Rr, t.ht = e.ht
    }
  }
  Kr() {
    return this.Ur() ? performance.now() - this.Nr : 2599
  }
}

function Ee(s, t) {
  return fr(Math.min(Math.max(s, 12), 30) * t)
}

function Ve(s, t) {
  switch (s) {
    case "arrowDown":
    case "arrowUp":
      return Ee(t, 1);
    case "circle":
      return Ee(t, .8);
    case "square":
      return Ee(t, .7)
  }
}

function wr(s) {
  return function(t) {
    const e = Math.ceil(t);
    return e % 2 != 0 ? e - 1 : e
  }(Ee(s, 1))
}

function En(s) {
  return Math.max(Ee(s, .1), 3)
}

function Tn(s, t, e) {
  return t ? s : e ? Math.ceil(s / 2) : 0
}

function Sr(s, t, e, i, n) {
  const o = Ve("square", e),
    r = (o - 1) / 2,
    l = s - r,
    a = t - r;
  return i >= l && i <= l + o && n >= a && n <= a + o
}

function zn(s, t, e, i) {
  const n = (Ve("arrowUp", i) - 1) / 2 * e.Gr,
    o = (fr(i / 2) - 1) / 2 * e.Gr;
  t.beginPath(), s ? (t.moveTo(e.nt - n, e.st), t.lineTo(e.nt, e.st - n), t.lineTo(e.nt + n, e.st), t.lineTo(e.nt + o, e.st), t.lineTo(e.nt + o, e.st + n), t.lineTo(e.nt - o, e.st + n), t.lineTo(e.nt - o, e.st)) : (t.moveTo(e.nt - n, e.st), t.lineTo(e.nt, e.st + n), t.lineTo(e.nt + n, e.st), t.lineTo(e.nt + o, e.st), t.lineTo(e.nt + o, e.st - n), t.lineTo(e.nt - o, e.st - n), t.lineTo(e.nt - o, e.st)), t.fill()
}

function Ad(s, t, e, i, n, o) {
  return Sr(t, e, i, n, o)
}
class Od extends _t {
  constructor() {
    super(...arguments), this.zt = null, this.lr = new De, this.j = -1, this.H = "", this.Jr = ""
  }
  J(t) {
    this.zt = t
  }
  ar(t, e) {
    this.j === t && this.H === e || (this.j = t, this.H = e, this.Jr = ve(t, e), this.lr.ir())
  }
  br(t, e) {
    if (this.zt === null || this.zt.tt === null) return null;
    for (let i = this.zt.tt.from; i < this.zt.tt.to; i++) {
      const n = this.zt.it[i];
      if (Vd(n, t, e)) return {
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
        l.Kt !== void 0 && (l.Kt.Hi = this.lr.xi(t, l.Kt.th), l.Kt.At = this.j, l.Kt.nt = l.nt - l.Kt.Hi / 2), Dd(l, t, e, i)
      }
    }
  }
}

function Dd(s, t, e, i) {
  t.fillStyle = s.V, s.Kt !== void 0 && function(n, o, r, l, a, h) {
      n.save(), n.scale(a, h), n.fillText(o, r, l), n.restore()
    }(t, s.Kt.th, s.Kt.nt, s.Kt.st, e, i),
    function(n, o, r) {
      if (n.Xs !== 0) {
        switch (n.ih) {
          case "arrowDown":
            return void zn(!1, o, r, n.Xs);
          case "arrowUp":
            return void zn(!0, o, r, n.Xs);
          case "circle":
            return void
            function(l, a, h) {
              const c = (Ve("circle", h) - 1) / 2;
              l.beginPath(), l.arc(a.nt, a.st, c * a.Gr, 0, 2 * Math.PI, !1), l.fill()
            }(o, r, n.Xs);
          case "square":
            return void
            function(l, a, h) {
              const c = Ve("square", h),
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

function Vd(s, t, e) {
  return !(s.Kt === void 0 || ! function(i, n, o, r, l, a) {
    const h = r / 2;
    return l >= i && l <= i + o && a >= n - h && a <= n + h
  }(s.Kt.nt, s.Kt.st, s.Kt.Hi, s.Kt.At, t, e)) || function(i, n, o) {
    if (i.Xs === 0) return !1;
    switch (i.ih) {
      case "arrowDown":
      case "arrowUp":
        return Ad(0, i.nt, i.st, i.Xs, n, o);
      case "circle":
        return function(r, l, a, h, c) {
          const u = 2 + Ve("circle", a) / 2,
            d = r - h,
            f = l - c;
          return Math.sqrt(d * d + f * f) <= u
        }(i.nt, i.st, i.Xs, n, o);
      case "square":
        return Sr(i.nt, i.st, i.Xs, n, o)
    }
  }(s, t, e)
}

function Wd(s, t, e, i, n, o, r, l, a) {
  const h = kt(e) ? e : e.xe,
    c = kt(e) ? e : e.ge,
    u = kt(e) ? e : e.Me,
    d = kt(t.size) ? Math.max(t.size, 0) : 1,
    f = wr(l.he()) * d,
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
class Nd {
  constructor(t, e) {
    this.ft = !0, this.eh = !0, this.rh = !0, this.hh = null, this.ah = null, this.Wt = new Od, this.Wr = t, this.$i = e, this.zt = {
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
          e = En(t),
          i = 1.5 * wr(t) + 2 * e,
          n = this.dh();
        this.hh = {
          above: Tn(i, n.aboveBar, n.inBar),
          below: Tn(i, n.belowBar, n.inBar)
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
    const a = En(e.he()),
      h = {
        nh: a,
        sh: a
      };
    this.zt.tt = br(this.zt.it, o, !0);
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
      f !== null && Wd(d, u, f, h, n.fontSize, a, t, e, r.Vt)
    }
    this.ft = !1
  }
}
class Bd extends Bs {
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
class Fd extends zi {
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
      u = Ei(c);
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

function In(s, t, e, i) {
  const n = Number.isFinite(t),
    o = Number.isFinite(e);
  return n && o ? s(t, e) : n || o ? n ? t : e : i
}
class pt {
  constructor(t, e) {
    this.Sh = t, this.kh = e
  }
  yh(t) {
    return t !== null && this.Sh === t.Sh && this.kh === t.kh
  }
  Ch() {
    return new pt(this.Sh, this.kh)
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
    return t === null ? this : new pt(In(Math.min, this.Th(), t.Th(), -1 / 0), In(Math.max, this.Ph(), t.Ph(), 1 / 0))
  }
  Dh(t) {
    if (!kt(t) || this.kh - this.Sh === 0) return;
    const e = .5 * (this.kh + this.Sh);
    let i = this.kh - e,
      n = this.Sh - e;
    i *= t, n *= t, this.kh = e + i, this.Sh = e + n
  }
  Vh(t) {
    kt(t) && (this.kh += t, this.Sh += t)
  }
  Oh() {
    return {
      minValue: this.Sh,
      maxValue: this.kh
    }
  }
  static Bh(t) {
    return t === null ? null : new pt(t.minValue, t.maxValue)
  }
}
class yi {
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
    return t === null ? null : new yi(pt.Bh(t.priceRange), t.margins)
  }
}
class Ud extends Bs {
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
class Kd extends zi {
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
    const h = Ei(n.axisLabelColor || n.color);
    i.t = h.t;
    const c = n.axisLabelTextColor || h.i;
    t.V = c, e.V = c, i.ki = a
  }
  Fh(t) {
    const e = this.Wr.Ct();
    return e === null ? "" : this.Wr.Dt().Fi(t, e.Vt)
  }
}
class Hd {
  constructor(t, e) {
    this.Wr = t, this.cn = e, this.Wh = new Ud(t, this), this._r = new Kd(t, this), this.jh = new _r(this._r, t, t.$t())
  }
  Hh(t) {
    yt(this.cn, t), this.bt(), this.Wr.$t().$h()
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
class Jd extends Vs {
  constructor(t) {
    super(), this.$i = t
  }
  $t() {
    return this.$i
  }
}
const Xd = {
  Bar: (s, t, e, i) => {
    var n;
    const o = t.upColor,
      r = t.downColor,
      l = M(s(e, i)),
      a = re(l.Vt[0]) <= re(l.Vt[3]);
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
      f = M(s(e, i)),
      p = re(f.Vt[0]) <= re(f.Vt[3]);
    return {
      ue: (n = f.V) !== null && n !== void 0 ? n : p ? l : a,
      Ee: (o = f.Ot) !== null && o !== void 0 ? o : p ? h : c,
      Le: (r = f.Zh) !== null && r !== void 0 ? r : p ? u : d
    }
  },
  Custom: (s, t, e, i) => {
    var n;
    return {
      ue: (n = M(s(e, i)).V) !== null && n !== void 0 ? n : t.color
    }
  },
  Area: (s, t, e, i) => {
    var n, o, r, l;
    const a = M(s(e, i));
    return {
      ue: (n = a.lt) !== null && n !== void 0 ? n : t.lineColor,
      lt: (o = a.lt) !== null && o !== void 0 ? o : t.lineColor,
      Ts: (r = a.Ts) !== null && r !== void 0 ? r : t.topColor,
      Ps: (l = a.Ps) !== null && l !== void 0 ? l : t.bottomColor
    }
  },
  Baseline: (s, t, e, i) => {
    var n, o, r, l, a, h;
    const c = M(s(e, i));
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
    const r = M(s(e, i));
    return {
      ue: (n = r.V) !== null && n !== void 0 ? n : t.color,
      lt: (o = r.V) !== null && o !== void 0 ? o : t.color
    }
  },
  Histogram: (s, t, e, i) => {
    var n;
    return {
      ue: (n = M(s(e, i)).V) !== null && n !== void 0 ? n : t.color
    }
  }
};
class Yd {
  constructor(t) {
    this.Xh = (e, i) => i !== void 0 ? i.Vt : this.Wr.In().Kh(e), this.Wr = t, this.Gh = Xd[t.Jh()]
  }
  Hs(t, e) {
    return this.Gh(this.Xh, this.Wr.W(), t, e)
  }
}
var Pn;
(function(s) {
  s[s.NearestLeft = -1] = "NearestLeft", s[s.None = 0] = "None", s[s.NearestRight = 1] = "NearestRight"
})(Pn || (Pn = {}));
const Pt = 30;
class Gd {
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
    for (const o of i) n = Ge(n, this.ol(t, e, o));
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
    return Ue(this.Qh, t, (e, i) => e.se < i)
  }
  fl(t) {
    return gr(this.Qh, t, (e, i) => e.se > i)
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
    const o = M(this.sl()),
      r = M(this.An()),
      l = Math.max(t, o),
      a = Math.min(e, r),
      h = Math.ceil(l / Pt) * Pt,
      c = Math.max(h, Math.floor(a / Pt) * Pt);
    {
      const d = this.dl(l),
        f = this.fl(Math.min(a, h, e));
      n = Ge(n, this.vl(d, f, i))
    }
    let u = this.tl.get(i);
    u === void 0 && (u = new Map, this.tl.set(i, u));
    for (let d = Math.max(h + 1, l); d < c; d += Pt) {
      const f = Math.floor(d / Pt);
      let p = u.get(f);
      if (p === void 0) {
        const v = this.dl(f * Pt),
          b = this.fl((f + 1) * Pt - 1);
        p = this.vl(v, b, i), u.set(f, p)
      }
      n = Ge(n, p)
    } {
      const d = this.dl(c),
        f = this.fl(a);
      n = Ge(n, this.vl(d, f, i))
    }
    return n
  }
}

function Ge(s, t) {
  return s === null ? t : t === null ? s : {
    pl: Math.min(s.pl, t.pl),
    ml: Math.max(s.ml, t.ml)
  }
}
class Zd {
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
class Bi {
  constructor(t) {
    this.Qe = null, this.wn = t
  }
  gt() {
    var t;
    const e = this.wn.renderer();
    if (e === null) return null;
    if (((t = this.Qe) === null || t === void 0 ? void 0 : t.gl) === e) return this.Qe.Ml;
    const i = new Zd(e);
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

function Mr(s) {
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
class qd {
  constructor(t, e) {
    this.Wt = new hr, this.Sl = t, this.kl = e
  }
  gt() {
    return this.Wt.J(Object.assign({
      Hi: this.kl.Hi()
    }, Mr(this.Sl))), this.Wt
  }
}
class Qd extends zi {
  constructor(t, e) {
    super(), this.Sl = t, this.Li = e
  }
  zi(t, e, i) {
    const n = Mr(this.Sl);
    i.t = n.t, t.V = n.V;
    const o = 2 / 12 * this.Li.P();
    i.wi = o, i.gi = o, i.ki = n.ki, i.Si = n.Si, t.Kt = n.Kt, t.yt = n.yt, t.hi = n.hi
  }
}
class tf {
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
    const r = o.map(l => new Bi(l));
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
      l = o.map(a => new qd(a, r));
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
      l = o.map(a => new Qd(a, r));
    return this.Tl = {
      gl: o,
      Ml: l
    }, l
  }
  Ol() {
    var t, e, i, n;
    const o = (i = (e = (t = this.Dl).priceAxisPaneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((n = this.Pl) === null || n === void 0 ? void 0 : n.gl) === o) return this.Pl.Ml;
    const r = o.map(l => new Bi(l));
    return this.Pl = {
      gl: o,
      Ml: r
    }, r
  }
  Bl() {
    var t, e, i, n;
    const o = (i = (e = (t = this.Dl).timeAxisPaneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((n = this.Rl) === null || n === void 0 ? void 0 : n.gl) === o) return this.Rl.Ml;
    const r = o.map(l => new Bi(l));
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

function Fi(s, t, e, i) {
  s.forEach(n => {
    t(n).forEach(o => {
      o.xl() === e && i.push(o)
    })
  })
}

function Ui(s) {
  return s.Pn()
}

function ef(s) {
  return s.Ol()
}

function sf(s) {
  return s.Bl()
}
class Fs extends Jd {
  constructor(t, e, i, n, o) {
    super(t), this.zt = new Gd, this.Wh = new Bd(this), this.Il = [], this.zl = new $d(this), this.Ll = null, this.El = null, this.Nl = [], this.Fl = [], this.Wl = null, this.jl = [], this.cn = e, this.Hl = i;
    const r = new Fd(this);
    this.rn = [r], this.jh = new _r(r, this, t), i !== "Area" && i !== "Line" && i !== "Baseline" || (this.Ll = new Rd(this)), this.$l(), this.Ul(o)
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
    return this.El !== null || (this.El = new Yd(this)), this.El
  }
  W() {
    return this.cn
  }
  Hh(t) {
    const e = t.priceScaleId;
    e !== void 0 && e !== this.cn.priceScaleId && this.$t().Zl(this, e), yt(this.cn, t), t.priceFormat !== void 0 && (this.$l(), this.$t().Xl()), this.$t().Kl(this), this.$t().Gl(), this.wn.bt("options")
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
    const e = new Hd(this, t);
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
    Fi(this.jl, Ui, "top", e);
    const i = this.Ll;
    return i !== null && i.yt() && (this.Wl === null && i.Ur() && (this.Wl = setTimeout(() => {
      this.Wl = null, this.$t().aa()
    }, 0)), i.$r(), e.unshift(i)), e
  }
  Pn() {
    const t = [];
    this.oa() || t.push(this.zl), t.push(this.wn, this.Wh, this.dn);
    const e = this.Il.map(i => i.Uh());
    return t.push(...e), Fi(this.jl, Ui, "normal", t), t
  }
  _a() {
    return this.ua(Ui, "bottom")
  }
  ca(t) {
    return this.ua(ef, t)
  }
  da(t) {
    return this.ua(sf, t)
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
      return yi.Bh(i)
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
    return M(super.Dt())
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
    this.jl.push(new tf(t, this))
  }
  ka(t) {
    this.jl = this.jl.filter(e => e.Vl() !== t)
  }
  ya() {
    if (this.wn instanceof Ni) return t => this.wn.Fe(t)
  }
  Ca() {
    if (this.wn instanceof Ni) return t => this.wn.We(t)
  }
  oa() {
    return !Ii(this.Dt().Ta())
  }
  va(t, e) {
    if (!Ae(t) || !Ae(e) || this.zt.Ni()) return null;
    const i = this.Hl === "Line" || this.Hl === "Area" || this.Hl === "Baseline" || this.Hl === "Histogram" ? [3] : [2, 1],
      n = this.zt.al(t, e, i);
    let o = n !== null ? new pt(n.pl, n.ml) : null;
    if (this.Jh() === "Histogram") {
      const l = this.cn.base,
        a = new pt(l, l);
      o = o !== null ? o.ts(a) : a
    }
    let r = this.dn._h();
    return this.jl.forEach(l => {
      const a = l.Al(t, e);
      if (a != null && a.priceRange) {
        const f = new pt(a.priceRange.minValue, a.priceRange.maxValue);
        o = o !== null ? o.ts(f) : f
      }
      var h, c, u, d;
      a != null && a.margins && (h = r, c = a.margins, r = {
        above: Math.max((u = h == null ? void 0 : h.above) !== null && u !== void 0 ? u : 0, c.above),
        below: Math.max((d = h == null ? void 0 : h.below) !== null && d !== void 0 ? d : 0, c.below)
      })
    }), new yi(o, r)
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
        this.ba = new hd(this.cn.priceFormat.precision);
        break;
      case "percent":
        this.ba = new cr(this.cn.priceFormat.precision);
        break;
      default: {
        const t = Math.pow(10, this.cn.priceFormat.precision);
        this.ba = new Pi(t, this.cn.priceFormat.minMove * t)
      }
    }
    this.Yi !== null && this.Yi.Pa()
  }
  Jl() {
    const t = this.$t().St();
    if (!t.Ra() || this.zt.Ni()) return void(this.Fl = []);
    const e = M(this.zt.sl());
    this.Fl = this.Nl.map((i, n) => {
      const o = M(t.Da(i.time, !0)),
        r = o < e ? 1 : -1;
      return {
        time: M(this.zt.hl(o, r)).se,
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
    switch (this.dn = new Nd(this, this.$t()), this.Hl) {
      case "Bar":
        this.wn = new bd(this, this.$t());
        break;
      case "Candlestick":
        this.wn = new Md(this, this.$t());
        break;
      case "Line":
        this.wn = new Td(this, this.$t());
        break;
      case "Custom":
        this.wn = new Ni(this, this.$t(), ft(t));
        break;
      case "Area":
        this.wn = new vd(this, this.$t());
        break;
      case "Baseline":
        this.wn = new wd(this, this.$t());
        break;
      case "Histogram":
        this.wn = new Ed(this, this.$t());
        break;
      default:
        throw Error("Unknown chart style assigned: " + this.Hl)
    }
  }
  ua(t, e) {
    const i = [];
    return Fi(this.jl, t, e, i), i
  }
}
class nf {
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
      a = i.Oa().filter(c => c instanceof Fs).reduce((c, u) => {
        if (i.dr(u) || !u.yt()) return c;
        const d = u.Dt(),
          f = u.In();
        if (d.Ni() || !f.Xr(e)) return c;
        const p = f.Kh(e);
        if (p === null) return c;
        const v = re(u.Ct());
        return c.concat([d.Rt(p.Vt[3], v.Vt)])
      }, []);
    if (a.length === 0) return n;
    a.sort((c, u) => Math.abs(c - l) - Math.abs(u - l));
    const h = a[0];
    return n = o.pn(h, r), n
  }
}
class of extends _t {
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
        const r = M(this.zt);
        if (r.Ba) {
          t.strokeStyle = r.Aa, Zt(t, r.Ia), t.beginPath();
          for (const l of r.za) {
            const a = Math.round(l.La * i);
            t.moveTo(a, -o), t.lineTo(a, e.height + o)
          }
          t.stroke()
        }
        if (r.Ea) {
          t.strokeStyle = r.Na, Zt(t, r.Fa), t.beginPath();
          for (const l of r.Wa) {
            const a = Math.round(l.La * n);
            t.moveTo(-o, a), t.lineTo(e.width + o, a)
          }
          t.stroke()
        }
      })
  }
}
class rf {
  constructor(t) {
    this.Wt = new of, this.ft = !0, this.tn = t
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
class lf {
  constructor(t) {
    this.wn = new rf(t)
  }
  Uh() {
    return this.wn
  }
}
const Ki = {
  Ha: 4,
  $a: 1e-4
};

function le(s, t) {
  const e = 100 * (s - t) / t;
  return t < 0 ? -e : e
}

function af(s, t) {
  const e = le(s.Th(), t),
    i = le(s.Ph(), t);
  return new pt(e, i)
}

function Te(s, t) {
  const e = 100 * (s - t) / t + 100;
  return t < 0 ? -e : e
}

function hf(s, t) {
  const e = Te(s.Th(), t),
    i = Te(s.Ph(), t);
  return new pt(e, i)
}

function _i(s, t) {
  const e = Math.abs(s);
  if (e < 1e-15) return 0;
  const i = Math.log10(e + t.$a) + t.Ha;
  return s < 0 ? -i : i
}

function ze(s, t) {
  const e = Math.abs(s);
  if (e < 1e-15) return 0;
  const i = Math.pow(10, e - t.Ha) - t.$a;
  return s < 0 ? -i : i
}

function _e(s, t) {
  if (s === null) return null;
  const e = _i(s.Th(), t),
    i = _i(s.Ph(), t);
  return new pt(e, i)
}

function Ze(s, t) {
  if (s === null) return null;
  const e = ze(s.Th(), t),
    i = ze(s.Ph(), t);
  return new pt(e, i)
}

function Hi(s) {
  if (s === null) return Ki;
  const t = Math.abs(s.Ph() - s.Th());
  if (t >= 1 || t < 1e-15) return Ki;
  const e = Math.ceil(Math.abs(Math.log10(t))),
    i = Ki.Ha + e;
  return {
    Ha: i,
    $a: 1 / Math.pow(10, i)
  }
}
class Ji {
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
      const u = Ye(o, n, 1e-14) && o > n + 1e-14,
        d = Ye(o, i * l, 1e-14),
        f = Ye(o, 1, 1e-14);
      if (!(u && d && f)) break;
      o /= l, l = this.qa[++r % this.qa.length]
    }
    if (o <= n + 1e-14 && (o = n), o = Math.max(1, o), this.Ya.length > 0 && (a = o, h = 1, c = 1e-14, Math.abs(a - h) < c))
      for (r = 0, l = this.Ya[0]; Ye(o, i * l, 1e-14) && o > n + 1e-14;) o /= l, l = this.Ya[++r % this.Ya.length];
    var a, h, c;
    return o
  }
}
class $n {
  constructor(t, e, i, n) {
    this.Xa = [], this.Li = t, this.Ua = e, this.Ka = i, this.Ga = n
  }
  Za(t, e) {
    if (t < e) throw new Error("high < low");
    const i = this.Li.At(),
      n = (t - e) * this.Ja() / i,
      o = new Ji(this.Ua, [2, 2.5, 2]),
      r = new Ji(this.Ua, [2, 2, 2.5]),
      l = new Ji(this.Ua, [2.5, 2, 2]),
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
      v = 0;
    for (let b = h - d; b > c; b -= u) {
      const y = this.Ga(b, e, !0);
      p !== null && Math.abs(y - p) < this.Ja() || y < l || y > a || (v < this.Xa.length ? (this.Xa[v].La = y, this.Xa[v].no = t.so(b)) : this.Xa.push({
        La: y,
        no: t.so(b)
      }), v++, p = y, t.eo() && (u = this.Za(b * f, c)))
    }
    this.Xa.length = v
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

function kr(s) {
  return s.slice().sort((t, e) => M(t.Xi()) - M(e.Xi()))
}
var Ln;
(function(s) {
  s[s.Normal = 0] = "Normal", s[s.Logarithmic = 1] = "Logarithmic", s[s.Percentage = 2] = "Percentage", s[s.IndexedTo100 = 3] = "IndexedTo100"
})(Ln || (Ln = {}));
const jn = new cr,
  Rn = new Pi(100, 1);
class cf {
  constructor(t, e, i, n) {
    this.ro = 0, this.ho = null, this.Ah = null, this.lo = null, this.ao = {
      oo: !1,
      _o: null
    }, this.uo = 0, this.co = 0, this.do = new rt, this.fo = new rt, this.vo = [], this.po = null, this.mo = null, this.bo = null, this.wo = null, this.ba = Rn, this.Mo = Hi(null), this.xo = t, this.cn = e, this.So = i, this.ko = n, this.yo = new $n(this, 100, this.Co.bind(this), this.To.bind(this))
  }
  Ta() {
    return this.xo
  }
  W() {
    return this.cn
  }
  Hh(t) {
    if (yt(this.cn, t), this.Pa(), t.mode !== void 0 && this.Po({
        yr: t.mode
      }), t.scaleMargins !== void 0) {
      const e = ft(t.scaleMargins.top),
        i = ft(t.scaleMargins.bottom);
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
      const l = ze(o.Th(), r),
        a = ze(o.Ph(), r);
      return isFinite(l) && isFinite(a)
    }(this.Ah, this.Mo) ? (i = Ze(this.Ah, this.Mo), i !== null && this.Bo(i)) : this.cn.autoScale = !0), t.yr === 1 && t.yr !== e.yr && (i = _e(this.Ah, this.Mo), i !== null && this.Bo(i));
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
    return this.gh() ? t = le(t, e) : this.Vo() && (t = Te(t, e)), this.To(t, e)
  }
  Qs(t, e, i) {
    this.Fo();
    const n = this.No(),
      o = M(this.zh()),
      r = o.Th(),
      l = o.Ph(),
      a = this.Lo() - 1,
      h = this.Oo(),
      c = a / (l - r),
      u = i === void 0 ? 0 : i.from,
      d = i === void 0 ? t.length : i.to,
      f = this.jo();
    for (let p = u; p < d; p++) {
      const v = t[p],
        b = v._t;
      if (isNaN(b)) continue;
      let y = b;
      f !== null && (y = f(v._t, e));
      const g = n + c * (y - r),
        x = h ? g : this.ro - 1 - g;
      v.st = x
    }
  }
  me(t, e, i) {
    this.Fo();
    const n = this.No(),
      o = M(this.zh()),
      r = o.Th(),
      l = o.Ph(),
      a = this.Lo() - 1,
      h = this.Oo(),
      c = a / (l - r),
      u = i === void 0 ? 0 : i.from,
      d = i === void 0 ? t.length : i.to,
      f = this.jo();
    for (let p = u; p < d; p++) {
      const v = t[p];
      let b = v.we,
        y = v.ge,
        g = v.Me,
        x = v.xe;
      f !== null && (b = f(v.we, e), y = f(v.ge, e), g = f(v.Me, e), x = f(v.xe, e));
      let k = n + c * (b - r),
        I = h ? k : this.ro - 1 - k;
      v.ve = I, k = n + c * (y - r), I = h ? k : this.ro - 1 - k, v.ce = I, k = n + c * (g - r), I = h ? k : this.ro - 1 - k, v.de = I, k = n + c * (x - r), I = h ? k : this.ro - 1 - k, v.pe = I
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
    return t = kr(t), this.po = t, this.po
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
    this.gh() || this.Vo() || this.bo === null && this.lo === null && (this.Ni() || (this.bo = this.ro - t, this.lo = M(this.zh()).Ch()))
  }
  Go(t) {
    if (this.gh() || this.Vo() || this.bo === null) return;
    this.Po({
      Wn: !1
    }), (t = this.ro - t) < 0 && (t = 0);
    let e = (this.bo + .2 * (this.ro - 1)) / (t + .2 * (this.ro - 1));
    const i = M(this.lo).Ch();
    e = Math.max(e, .1), i.Dh(e), this.Bo(i)
  }
  Jo() {
    this.gh() || this.Vo() || (this.bo = null, this.lo = null)
  }
  Qo(t) {
    this.Do() || this.wo === null && this.lo === null && (this.Ni() || (this.wo = t, this.lo = M(this.zh()).Ch()))
  }
  t_(t) {
    if (this.Do() || this.wo === null) return;
    const e = M(this.zh()).Rh() / (this.Lo() - 1);
    let i = t - this.wo;
    this.Oo() && (i *= -1);
    const n = i * e,
      o = M(this.lo).Ch();
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
        return this.n_(le(t, e));
      case 3:
        return this.ma().format(Te(t, e));
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
    return this.Fh(t, M(this.s_()).ma())
  }
  Yl(t, e) {
    return t = le(t, e), this.n_(t, jn)
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
    t !== null && (e = Math.round(1 / t.pa())), this.ba = Rn, this.gh() ? (this.ba = jn, e = 100) : this.Vo() ? (this.ba = new Pi(100, 1), e = 100) : t !== null && (this.ba = t.ma()), this.yo = new $n(this, e, this.Co.bind(this), this.To.bind(this)), this.yo.Qa()
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
    t = this.eo() && t ? _i(t, this.Mo) : t;
    const i = M(this.zh()),
      n = this.No() + (this.Lo() - 1) * (t - i.Th()) / i.Rh();
    return this.Wo(n)
  }
  Co(t, e) {
    if (this.Fo(), this.Ni()) return 0;
    const i = this.Wo(t),
      n = M(this.zh()),
      o = n.Th() + n.Rh() * ((i - this.No()) / (this.Lo() - 1));
    return this.eo() ? ze(o, this.Mo) : o
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
            u = _e(u, this.Mo);
            break;
          case 2:
            u = af(u, h.Vt);
            break;
          case 3:
            u = hf(u, h.Vt)
        }
        if (e = e === null ? u : e.ts(M(u)), c !== null) {
          const d = c.Lh();
          d !== null && (n = Math.max(n, d.above), o = Math.max(o, d.below))
        }
      }
    }
    if (n === this.uo && o === this.co || (this.uo = n, this.co = o, this.mo = null, this.Ro()), e !== null) {
      if (e.Th() === e.Ph()) {
        const a = this.s_(),
          h = 5 * (a === null || this.gh() || this.Vo() ? 1 : a.pa());
        this.eo() && (e = Ze(e, this.Mo)), e = new pt(e.Th() - h, e.Ph() + h), this.eo() && (e = _e(e, this.Mo))
      }
      if (this.eo()) {
        const a = Ze(e, this.Mo),
          h = Hi(a);
        if (r = h, l = this.Mo, r.Ha !== l.Ha || r.$a !== l.$a) {
          const c = this.lo !== null ? Ze(this.lo, this.Mo) : null;
          this.Mo = h, e = _e(a, h), c !== null && (this.lo = _e(c, h))
        }
      }
      this.Bo(e)
    } else this.Ah === null && (this.Bo(new pt(-.5, .5)), this.Mo = Hi(null));
    var r, l;
    this.ao.oo = !0
  }
  jo() {
    return this.gh() ? le : this.Vo() ? Te : this.eo() ? t => _i(t, this.Mo) : null
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
class uf {
  constructor(t, e) {
    this.vo = [], this.a_ = new Map, this.ro = 0, this.o_ = 0, this.__ = 1e3, this.po = null, this.u_ = new rt, this.kl = t, this.$i = e, this.c_ = new lf(this);
    const i = e.W();
    this.d_ = this.f_("left", i.leftPriceScale), this.v_ = this.f_("right", i.rightPriceScale), this.d_.Io().l(this.p_.bind(this, this.d_), this), this.v_.Io().l(this.p_.bind(this, this.v_), this), this.m_(i)
  }
  m_(t) {
    if (t.leftPriceScale && this.d_.Hh(t.leftPriceScale), t.rightPriceScale && this.v_.Hh(t.rightPriceScale), t.localization && (this.d_.Pa(), this.v_.Pa()), t.overlayPriceScales) {
      const e = Array.from(this.a_.values());
      for (const i of e) {
        const n = M(i[0].Dt());
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
    return this.a_.has(t) ? ft(this.a_.get(t))[0].Dt() : null
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
    At(e !== -1, "removeDataSource: invalid data source"), this.vo.splice(e, 1);
    const i = M(t.Dt()).Ta();
    if (this.a_.has(i)) {
      const o = ft(this.a_.get(i)),
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
    return this.po === null && (this.po = kr(this.vo)), this.po
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
    if (n === null && (n = this.f_(e, this.$i.W().overlayPriceScales)), this.vo.push(t), !Ii(e)) {
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
      }, Et(e)),
      n = new cf(t, i, this.$i.W().layout, this.$i.W().localization);
    return n.zo(this.At()), n
  }
}
class df {
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
      this.Je.delete(this.Ge), this.Qe.delete(ft(r)), this.Ge++, this.Xe--
    }
    const o = this.H_(t);
    return this.Qe.set(i, {
      Y_: o,
      er: this.Ke
    }), this.Je.set(this.Ke, i), this.Xe++, this.Ke++, o
  }
}
class Ie {
  constructor(t, e) {
    At(t <= e, "right should be >= left"), this.Z_ = t, this.X_ = e
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

function An(s, t) {
  return s === null || t === null ? s === t : s.yh(t)
}
class ff {
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
      t <= i[0].index ? e.push(n) : i.splice(Ue(i, t, o => o.index < t), 1 / 0)
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
      const l = ft(this.G_.get(i)),
        a = l.length;
      let h = 1 / 0,
        c = -1 / 0;
      for (let u = 0; u < a; u++) {
        const d = l[u],
          f = d.index;
        for (; r < o;) {
          const p = n[r],
            v = p.index;
          if (!(v < f)) {
            h = v;
            break
          }
          r++, e.push(p), c = v, h = 1 / 0
        }
        if (h - f >= t && f - c >= t) e.push(d), c = f;
        else if (this.J_) return n
      }
      for (; r < o; r++) e.push(n[r])
    }
    return e
  }
}
class ue {
  constructor(t) {
    this.ru = t
  }
  hu() {
    return this.ru === null ? null : new Ie(Math.floor(this.ru.Vs()), Math.ceil(this.ru.ui()))
  }
  lu() {
    return this.ru
  }
  static au() {
    return new ue(null)
  }
}

function pf(s, t) {
  return s.weight > t.weight ? s : t
}
class mf {
  constructor(t, e, i, n) {
    this.o_ = 0, this.ou = null, this._u = [], this.wo = null, this.bo = null, this.uu = new ff, this.cu = new Map, this.du = ue.au(), this.fu = !0, this.vu = new rt, this.pu = new rt, this.mu = new rt, this.bu = null, this.wu = null, this.gu = [], this.cn = e, this.ko = i, this.Mu = e.rightOffset, this.xu = e.barSpacing, this.$i = t, this.U_ = n, this.Su(), this.uu.Q_(e.uniformDistribution)
  }
  W() {
    return this.cn
  }
  ku(t) {
    yt(this.ko, t), this.yu(), this.Su()
  }
  Hh(t, e) {
    var i;
    yt(this.cn, t), this.cn.fixLeftEdge && this.Cu(), this.cn.fixRightEdge && this.Tu(), t.barSpacing !== void 0 && this.$i.Gn(t.barSpacing), t.rightOffset !== void 0 && this.$i.Jn(t.rightOffset), t.minBarSpacing !== void 0 && this.$i.Gn((i = t.barSpacing) !== null && i !== void 0 ? i : this.xu), this.yu(), this.Su(), this.mu.m()
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
    const i = Ue(this._u, this.U_.key(t), (n, o) => this.U_.key(n.time) < o);
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
      n = M(this.Ou()),
      o = M(this.Bu());
    return {
      from: M(this.Ui(Math.max(n, e))),
      to: M(this.Ui(Math.min(o, i)))
    }
  }
  Au(t) {
    return {
      from: M(this.Da(t.from, !0)),
      to: M(this.Da(t.to, !0))
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
    if (this.Ni() || !Ae(t)) return 0;
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
      n = M(this.Zs()),
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
      let v;
      f < this.gu.length ? (v = this.gu[f], v.coord = this.It(p.index), v.label = this.$u(p), v.weight = p.weight) : (v = {
        needAlignCoordinate: !1,
        coord: this.It(p.index),
        label: this.$u(p),
        weight: p.weight
      }, this.gu.push(v)), this.xu > e / 2 && !c ? v.needAlignCoordinate = !1 : v.needAlignCoordinate = u && p.index <= a || d && p.index >= h, f++
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
    const e = bs(this.o_ - t, 0, this.o_),
      i = bs(this.o_ - M(this.bo), 0, this.o_);
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
    this.Mu = M(this.bu).ju + e, this.fu = !0, this.zu()
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
    t !== null && e !== null && this.ec(new Ie(t, e + this.cn.rightOffset))
  }
  hc(t) {
    const e = new Ie(t.from, t.to);
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
    if (this.fu = !1, this.Ni()) return void this.oc(ue.au());
    const t = this.Lu(),
      e = this.o_ / this.xu,
      i = this.Mu + t,
      n = new Ie(i - e + 1, i);
    this.oc(new ue(n))
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
    return e === void 0 && (e = new df(i => this.dc(i), this.U_), this.cu.set(t.weight, e)), e.q_(t)
  }
  dc(t) {
    return this.U_.formatTickmark(t, this.ko)
  }
  oc(t) {
    const e = this.du;
    this.du = t, An(e.hu(), this.du.hu()) || this.vu.m(), An(e.lu(), this.du.lu()) || this.pu.m(), this.ac()
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
class vf {
  X(t, e, i) {
    t.useMediaCoordinateSpace(n => this.K(n, e, i))
  }
  wl(t, e, i) {
    t.useMediaCoordinateSpace(n => this.fc(n, e, i))
  }
  fc(t, e, i) {}
}
class gf extends vf {
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
class bf {
  constructor(t) {
    this.ft = !0, this.Ft = {
      yt: !1,
      V: "",
      mc: [],
      gc: "center",
      Mc: "center"
    }, this.Wt = new gf(this.Ft), this.jt = t
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
      R: ve(t.fontSize, t.fontFamily, t.fontStyle),
      wc: 1.2 * t.fontSize,
      xc: 0,
      Yu: 0
    }])
  }
}
class yf extends Vs {
  constructor(t, e) {
    super(), this.cn = e, this.wn = new bf(this)
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
var On, Dn, Vn, Wn, Nn;
(function(s) {
  s[s.OnTouchEnd = 0] = "OnTouchEnd", s[s.OnNextTap = 1] = "OnNextTap"
})(On || (On = {}));
class _f {
  constructor(t, e, i) {
    this.kc = [], this.yc = [], this.o_ = 0, this.Cc = null, this.Tc = new rt, this.Pc = new rt, this.Rc = null, this.Dc = t, this.cn = e, this.U_ = i, this.Vc = new Zu(this), this.kl = new mf(this, e.timeScale, this.cn.localization, i), this.vt = new ad(this, e.crosshair), this.Oc = new nf(e.crosshair), this.Bc = new yf(this, e.watermark), this.Ac(), this.kc[0].M_(2e3), this.Ic = this.zc(0), this.Lc = this.zc(1)
  }
  Xl() {
    this.Ec(ut.es())
  }
  $h() {
    this.Ec(ut.ss())
  }
  aa() {
    this.Ec(new ut(1))
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
    yt(this.cn, t), this.kc.forEach(e => e.m_(t)), t.timeScale !== void 0 && this.kl.Hh(t.timeScale), t.localization !== void 0 && this.kl.ku(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Tc.m(), this.Ic = this.zc(0), this.Lc = this.zc(1), this.Xl()
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
    const e = new uf(this.kl, this);
    t !== void 0 ? this.kc.splice(t, 0, e) : this.kc.push(e);
    const i = t === void 0 ? this.kc.length - 1 : t,
      n = ut.es();
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
      r = n.Rt(t, M(o)),
      l = this.kl.Da(e, !0),
      a = this.kl.It(M(l));
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
    At(i !== -1, "Series not found"), this.yc.splice(i, 1), M(e).Yo(t), t.S && t.S()
  }
  Zl(t, e) {
    const i = M(this.cr(t));
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
    const t = ut.ss();
    t.$n(), this.Ec(t)
  }
  vd(t) {
    const e = ut.ss();
    e.Yn(t), this.Ec(e)
  }
  Kn() {
    const t = ut.ss();
    t.Kn(), this.Ec(t)
  }
  Gn(t) {
    const e = ut.ss();
    e.Gn(t), this.Ec(e)
  }
  Jn(t) {
    const e = ut.ss();
    e.Jn(t), this.Ec(e)
  }
  Zn(t) {
    const e = ut.ss();
    e.Zn(t), this.Ec(e)
  }
  Un() {
    const t = ut.ss();
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
      const [a, h, c, u] = Re(o), [d, f, p, v] = Re(r), b = [mt(a + l * (d - a)), mt(h + l * (f - h)), mt(c + l * (p - c)), rr(u + l * (v - u))];
      return `rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]})`
    }(i, e, t / 100);
    return this.Rc.bd.set(t, n), n
  }
  Kc(t, e) {
    const i = new ut(e);
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
    const o = new Fs(this, t, e, i, n),
      r = t.priceScaleId !== void 0 ? t.priceScaleId : this.pd();
    return i.Uo(o, r), Ii(r) || o.Hh(t), o
  }
  zc(t) {
    const e = this.cn.layout;
    return e.background.type === "gradient" ? t === 0 ? e.background.topColor : e.background.bottomColor : e.background.color
  }
}

function ys(s) {
  return !kt(s) && !Fe(s)
}

function xr(s) {
  return kt(s)
}(function(s) {
  s[s.Disabled = 0] = "Disabled", s[s.Continuous = 1] = "Continuous", s[s.OnDataUpdate = 2] = "OnDataUpdate"
})(Dn || (Dn = {})),
function(s) {
  s[s.LastBar = 0] = "LastBar", s[s.LastVisible = 1] = "LastVisible"
}(Vn || (Vn = {})),
function(s) {
  s.Solid = "solid", s.VerticalGradient = "gradient"
}(Wn || (Wn = {})),
function(s) {
  s[s.Year = 0] = "Year", s[s.Month = 1] = "Month", s[s.DayOfMonth = 2] = "DayOfMonth", s[s.Time = 3] = "Time", s[s.TimeWithSeconds = 4] = "TimeWithSeconds"
}(Nn || (Nn = {}));
const Bn = s => s.getUTCFullYear();

function wf(s, t, e) {
  return t.replace(/yyyy/g, (i => Tt(Bn(i), 4))(s)).replace(/yy/g, (i => Tt(Bn(i) % 100, 2))(s)).replace(/MMMM/g, ((i, n) => new Date(i.getUTCFullYear(), i.getUTCMonth(), 1).toLocaleString(n, {
    month: "long"
  }))(s, e)).replace(/MMM/g, ((i, n) => new Date(i.getUTCFullYear(), i.getUTCMonth(), 1).toLocaleString(n, {
    month: "short"
  }))(s, e)).replace(/MM/g, (i => Tt((n => n.getUTCMonth() + 1)(i), 2))(s)).replace(/dd/g, (i => Tt((n => n.getUTCDate())(i), 2))(s))
}
class Cr {
  constructor(t = "yyyy-MM-dd", e = "default") {
    this.wd = t, this.gd = e
  }
  q_(t) {
    return wf(t, this.wd, this.gd)
  }
}
class Sf {
  constructor(t) {
    this.Md = t || "%h:%m:%s"
  }
  q_(t) {
    return this.Md.replace("%h", Tt(t.getUTCHours(), 2)).replace("%m", Tt(t.getUTCMinutes(), 2)).replace("%s", Tt(t.getUTCSeconds(), 2))
  }
}
const Mf = {
  xd: "yyyy-MM-dd",
  Sd: "%h:%m:%s",
  kd: " ",
  yd: "default"
};
class kf {
  constructor(t = {}) {
    const e = Object.assign(Object.assign({}, Mf), t);
    this.Cd = new Cr(e.xd, e.yd), this.Td = new Sf(e.Sd), this.Pd = e.kd
  }
  q_(t) {
    return `${this.Cd.q_(t)}${this.Pd}${this.Td.q_(t)}`
  }
}

function qe(s) {
  return 60 * s * 60 * 1e3
}

function Xi(s) {
  return 60 * s * 1e3
}
const Qe = [{
  Rd: (Fn = 1, 1e3 * Fn),
  Dd: 10
}, {
  Rd: Xi(1),
  Dd: 20
}, {
  Rd: Xi(5),
  Dd: 21
}, {
  Rd: Xi(30),
  Dd: 22
}, {
  Rd: qe(1),
  Dd: 30
}, {
  Rd: qe(3),
  Dd: 31
}, {
  Rd: qe(6),
  Dd: 32
}, {
  Rd: qe(12),
  Dd: 33
}];
var Fn;

function Un(s, t) {
  if (s.getUTCFullYear() !== t.getUTCFullYear()) return 70;
  if (s.getUTCMonth() !== t.getUTCMonth()) return 60;
  if (s.getUTCDate() !== t.getUTCDate()) return 50;
  for (let e = Qe.length - 1; e >= 0; --e)
    if (Math.floor(t.getTime() / Qe[e].Rd) !== Math.floor(s.getTime() / Qe[e].Rd)) return Qe[e].Dd;
  return 0
}

function Yi(s) {
  let t = s;
  if (Fe(s) && (t = Us(s)), !ys(t)) throw new Error("time must be of type BusinessDay");
  const e = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
  return {
    Vd: Math.round(e.getTime() / 1e3),
    Od: t
  }
}

function Kn(s) {
  if (!xr(s)) throw new Error("time must be of type isUTCTimestamp");
  return {
    Vd: s
  }
}

function Us(s) {
  const t = new Date(s);
  if (isNaN(t.getTime())) throw new Error(`Invalid date string=${s}, expected format=yyyy-mm-dd`);
  return {
    day: t.getUTCDate(),
    month: t.getUTCMonth() + 1,
    year: t.getUTCFullYear()
  }
}

function Hn(s) {
  Fe(s.time) && (s.time = Us(s.time))
}
class Jn {
  options() {
    return this.cn
  }
  setOptions(t) {
    this.cn = t, this.updateFormatter(t.localization)
  }
  preprocessData(t) {
    Array.isArray(t) ? function(e) {
      e.forEach(Hn)
    }(t) : Hn(t)
  }
  createConverterToInternalObj(t) {
    return M(function(e) {
      return e.length === 0 ? null : ys(e[0].time) || Fe(e[0].time) ? Yi : Kn
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
    return xr(e = t) ? Kn(e) : ys(e) ? Yi(e) : Yi(Us(e));
    var e
  }
  updateFormatter(t) {
    if (!this.cn) return;
    const e = t.dateFormat;
    this.cn.timeScale.timeVisible ? this.Bd = new kf({
      xd: e,
      Sd: this.cn.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m",
      kd: "   ",
      yd: t.locale
    }) : this.Bd = new Cr(e, t.locale)
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
    let e = t.reduce(pf, t[0]).weight;
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
        r !== null && (h.timeWeight = Un(c, r)), l += h.time.Vd - (o || h.time.Vd), o = h.time.Vd, r = c
      }
      if (n === 0 && i.length > 1) {
        const a = Math.ceil(l / (i.length - 1)),
          h = new Date(1e3 * (i[0].time.Vd - a));
        i[0].timeWeight = Un(new Date(1e3 * i[0].time.Vd), h)
      }
    })(t, e)
  }
  static Ad(t) {
    return yt({
      localization: {
        dateFormat: "dd MMM 'yy"
      }
    }, t ?? {})
  }
}
const ge = typeof window < "u";

function Xn() {
  return !!ge && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
}

function Gi() {
  return !!ge && /iPhone|iPad|iPod/.test(window.navigator.platform)
}

function _s(s) {
  return s + s % 2
}

function Zi(s, t) {
  return s.Id - t.Id
}

function qi(s, t, e) {
  const i = (s.Id - t.Id) / (s.ot - t.ot);
  return Math.sign(i) * Math.min(Math.abs(i), e)
}
class xf {
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
    const n = qi(this.zd, this.Ld, this.$d),
      o = Zi(this.zd, this.Ld),
      r = [n],
      l = [o];
    if (i += o, this.Ed !== null) {
      const h = qi(this.Ld, this.Ed, this.$d);
      if (Math.sign(h) === Math.sign(n)) {
        const c = Zi(this.Ld, this.Ed);
        if (r.push(h), l.push(c), i += c, this.Nd !== null) {
          const u = qi(this.Ed, this.Nd, this.$d);
          if (Math.sign(u) === Math.sign(n)) {
            const d = Zi(this.Ed, this.Nd);
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
    const e = M(this.Fd),
      i = t - e.ot;
    return e.Id + this.jd * (Math.pow(this.Ud, i) - 1) / Math.log(this.Ud)
  }
  Ju(t) {
    return this.Fd === null || this.Yd(t) === this.Wd
  }
  Yd(t) {
    const e = t - M(this.Fd).ot;
    return Math.min(e, this.Wd)
  }
}
class Cf {
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
    return lr(Re(this.Jd.W().layout.textColor)) > 160 ? "dark" : "light"
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

function qt(s, t) {
  const e = M(s.ownerDocument).createElement("canvas");
  s.appendChild(e);
  const i = Au(e, {
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

function Qt(s) {
  var t;
  s.width = 1, s.height = 1, (t = s.getContext("2d")) === null || t === void 0 || t.clearRect(0, 0, 1, 1)
}

function ws(s, t, e, i) {
  s.wl && s.wl(t, e, i)
}

function li(s, t, e, i) {
  s.X(t, e, i)
}

function Ss(s, t, e, i) {
  const n = s(e, i);
  for (const o of n) {
    const r = o.gt();
    r !== null && t(r)
  }
}

function Ef(s) {
  ge && window.chrome !== void 0 && s.addEventListener("mousedown", t => {
    if (t.button === 1) return t.preventDefault(), !1
  })
}
class Ks {
  constructor(t, e, i) {
    this.rf = 0, this.hf = null, this.lf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }, this.af = 0, this._f = null, this.uf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }, this.cf = null, this.df = !1, this.ff = null, this.vf = null, this.pf = !1, this.mf = !1, this.bf = !1, this.wf = null, this.gf = null, this.Mf = null, this.xf = null, this.Sf = null, this.kf = null, this.yf = null, this.Cf = 0, this.Tf = !1, this.Pf = !1, this.Rf = !1, this.Df = 0, this.Vf = null, this.Of = !Gi(), this.Bf = n => {
      this.Af(n)
    }, this.If = n => {
      if (this.zf(n)) {
        const o = this.Lf(n);
        if (++this.af, this._f && this.af > 1) {
          const {
            Ef: r
          } = this.Nf(St(n), this.uf);
          r < 30 && !this.bf && this.Ff(o, this.jf.Wf), this.Hf()
        }
      } else {
        const o = this.Lf(n);
        if (++this.rf, this.hf && this.rf > 1) {
          const {
            Ef: r
          } = this.Nf(St(n), this.lf);
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
    const e = Qi(t.changedTouches, M(this.Vf));
    if (e === null || (this.Df = ti(t), this.yf !== null) || this.Pf) return;
    this.Tf = !0;
    const i = this.Nf(St(e), M(this.vf)),
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
        this.Ff(l, this.jf.rv), ne(t)
      }
    }
  }
  hv(t) {
    if (t.button !== 0) return;
    const e = this.Nf(St(t), M(this.ff)),
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
    let e = Qi(t.changedTouches, M(this.Vf));
    if (e === null && t.touches.length === 0 && (e = t.changedTouches[0]), e === null) return;
    this.Vf = null, this.Df = ti(t), this.Xf(), this.vf = null, this.kf && (this.kf(), this.kf = null);
    const i = this.Lf(t, e);
    if (this.Ff(i, this.jf.ov), ++this.af, this._f && this.af > 1) {
      const {
        Ef: n
      } = this.Nf(St(e), this.uf);
      n < 30 && !this.bf && this.Ff(i, this.jf.Wf), this.Hf()
    } else this.bf || (this.Ff(i, this.jf._v), this.jf._v && ne(t));
    this.af === 0 && ne(t), t.touches.length === 0 && this.df && (this.df = !1, ne(t))
  }
  Af(t) {
    if (t.button !== 0) return;
    const e = this.Lf(t);
    if (this.ff = null, this.Rf = !1, this.Sf && (this.Sf(), this.Sf = null), Xn() && this.Yf.ownerDocument.documentElement.removeEventListener("mouseleave", this.Bf), !this.zf(t))
      if (this.$f(e, this.jf.uv), ++this.rf, this.hf && this.rf > 1) {
        const {
          Ef: i
        } = this.Nf(St(t), this.lf);
        i < 5 && !this.mf && this.$f(e, this.jf.Uf), this.qf()
      } else this.mf || this.$f(e, this.jf.cv)
  }
  Xf() {
    this.cf !== null && (clearTimeout(this.cf), this.cf = null)
  }
  dv(t) {
    if (this.Vf !== null) return;
    const e = t.changedTouches[0];
    this.Vf = e.identifier, this.Df = ti(t);
    const i = this.Yf.ownerDocument.documentElement;
    this.bf = !1, this.pf = !1, this.Pf = !1, this.vf = St(e), this.kf && (this.kf(), this.kf = null);
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
    this.Ff(n, this.jf.vv), this._f || (this.af = 0, this._f = setTimeout(this.Hf.bind(this), 500), this.uf = St(e))
  }
  pv(t) {
    if (t.button !== 0) return;
    const e = this.Yf.ownerDocument.documentElement;
    Xn() && e.addEventListener("mouseleave", this.Bf), this.mf = !1, this.ff = St(t), this.Sf && (this.Sf(), this.Sf = null);
    {
      const n = this.hv.bind(this),
        o = this.Af.bind(this);
      this.Sf = () => {
        e.removeEventListener("mousemove", n), e.removeEventListener("mouseup", o)
      }, e.addEventListener("mousemove", n), e.addEventListener("mouseup", o)
    }
    if (this.Rf = !0, this.zf(t)) return;
    const i = this.Lf(t);
    this.$f(i, this.jf.mv), this.hf || (this.rf = 0, this.hf = setTimeout(this.qf.bind(this), 500), this.lf = St(t))
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
    Gi() && (this.Mf = () => {
      this.Yf.removeEventListener("dblclick", this.If)
    }, this.Yf.addEventListener("dblclick", this.If)), this.Yf.addEventListener("mouseleave", this.wv.bind(this)), this.Yf.addEventListener("touchstart", this.dv.bind(this), {
      passive: !0
    }), Ef(this.Yf), this.Yf.addEventListener("mousedown", this.pv.bind(this)), this.gv(), this.Yf.addEventListener("touchmove", () => {}, {
      passive: !1
    })
  }
  gv() {
    this.jf.Mv === void 0 && this.jf.xv === void 0 && this.jf.Sv === void 0 || (this.Yf.addEventListener("touchstart", t => this.kv(t.touches), {
      passive: !0
    }), this.Yf.addEventListener("touchmove", t => {
      if (t.touches.length === 2 && this.yf !== null && this.jf.xv !== void 0) {
        const e = Yn(t.touches[0], t.touches[1]) / this.Cf;
        this.jf.xv(this.yf, e), ne(t)
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
    }, this.Cf = Yn(t[0], t[1]), this.jf.Mv !== void 0 && this.jf.Mv(), this.Xf()
  }
  yv() {
    this.yf !== null && (this.yf = null, this.jf.Sv !== void 0 && this.jf.Sv())
  }
  wv(t) {
    if (this.xf && this.xf(), this.zf(t) || !this.Of) return;
    const e = this.Lf(t);
    this.$f(e, this.jf.Tv), this.Of = !Gi()
  }
  fv(t) {
    const e = Qi(t.touches, M(this.Vf));
    if (e === null) return;
    const i = this.Lf(t, e);
    this.Ff(i, this.jf.Pv), this.bf = !0, this.df = !0
  }
  zf(t) {
    return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents !== void 0 ? t.sourceCapabilities.firesTouchEvents : ti(t) < this.Df + 500
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
        t.type !== "touchstart" && ne(t)
      }
    }
  }
}

function Yn(s, t) {
  const e = s.clientX - t.clientX,
    i = s.clientY - t.clientY;
  return Math.sqrt(e * e + i * i)
}

function ne(s) {
  s.cancelable && s.preventDefault()
}

function St(s) {
  return {
    nt: s.pageX,
    st: s.pageY
  }
}

function ti(s) {
  return s.timeStamp || performance.now()
}

function Qi(s, t) {
  for (let e = 0; e < s.length; ++e)
    if (s[e].identifier === t) return s[e];
  return null
}

function ei(s) {
  return {
    jc: s.jc,
    Av: {
      wr: s.Iv.externalId
    },
    zv: s.Iv.cursorStyle
  }
}

function Tf(s, t, e) {
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

function ts(s, t) {
  return e => {
    var i, n, o, r;
    return ((n = (i = e.Dt()) === null || i === void 0 ? void 0 : i.Ta()) !== null && n !== void 0 ? n : "") !== t ? [] : (r = (o = e.ca) === null || o === void 0 ? void 0 : o.call(e, s)) !== null && r !== void 0 ? r : []
  }
}

function Gn(s, t, e, i) {
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
      const v = p - t * u / 2;
      if ((t === 1 ? v < 0 : v > e) && l > 0) {
        const b = t === 1 ? -1 - v : v - e,
          y = Math.min(b, l);
        for (let g = n; g < s.length; g++) s[g].Oi(s[g].Vi() + t * y);
        l -= y
      }
    } else n = a, l = t === 1 ? f - u - d : d - (f + u)
  }
}
class Zn {
  constructor(t, e, i, n) {
    this.Li = null, this.Lv = null, this.Ev = !1, this.Nv = new De(200), this.Jr = null, this.Fv = 0, this.Wv = !1, this.jv = () => {
      this.Wv || this.tn.Hv().$t().$h()
    }, this.$v = () => {
      this.Wv || this.tn.Hv().$t().$h()
    }, this.tn = t, this.cn = e, this.So = e.layout, this.Vc = i, this.Uv = n === "left", this.qv = ts("normal", n), this.Yv = ts("top", n), this.Zv = ts("bottom", n), this.Xv = document.createElement("div"), this.Xv.style.height = "100%", this.Xv.style.overflow = "hidden", this.Xv.style.width = "25px", this.Xv.style.left = "0", this.Xv.style.position = "relative", this.Kv = qt(this.Xv, G({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const o = this.Kv.canvasElement;
    o.style.position = "absolute", o.style.zIndex = "1", o.style.left = "0", o.style.top = "0", this.Gv = qt(this.Xv, G({
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
    this.rp = new Ks(this.Gv.canvasElement, l, {
      sv: () => !this.cn.handleScroll.vertTouchDrag,
      ev: () => !0
    })
  }
  S() {
    this.rp.S(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Qt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Qt(this.Kv.canvasElement), this.Kv.dispose(), this.Li !== null && this.Li.Xo().p(this), this.Li = null
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
      i = M(this.Kv.canvasElement.getContext("2d"));
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
    return _s(Math.ceil(e.C + e.T + e.A + e.I + 5 + l))
  }
  up(t) {
    this.Lv !== null && Ht(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`)
  }
  cp() {
    return M(this.Lv).width
  }
  Gi(t) {
    this.Li !== t && (this.Li !== null && this.Li.Xo().p(this), this.Li = t, t.Xo().l(this.do.bind(this), this))
  }
  Dt() {
    return this.Li
  }
  ir() {
    const t = this.tn.dp();
    this.tn.Hv().$t().L_(t, M(this.Dt()))
  }
  fp(t) {
    if (this.Lv === null) return;
    if (t !== 1) {
      this.vp(), this.Kv.applySuggestedBitmapSize();
      const i = Gt(this.Kv);
      i !== null && (i.useBitmapCoordinateSpace(n => {
        this.pp(n), this.Ae(n)
      }), this.tn.mp(i, this.Zv), this.bp(i), this.tn.mp(i, this.qv), this.wp(i))
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Gt(this.Gv);
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
    r === l ? Ti(t, 0, 0, i, n, r) : ar(t, 0, 0, i, n, r, l)
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
    Gn(n, 1, this.Lv.height, e), Gn(o, -1, this.Lv.height, e)
  }
  wp(t) {
    if (this.Lv === null) return;
    const e = this._p(),
      i = this.lp(),
      n = this.Uv ? "right" : "left";
    e.forEach(o => {
      o.Ai() && o.gt(M(this.Li)).X(t, i, this.Nv, n)
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
        h.gt(M(this.Li)).X(t, r, this.Nv, l)
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
    return ve(this.So.fontSize, this.So.fontFamily)
  }
}

function zf(s, t) {
  var e, i;
  return (i = (e = s._a) === null || e === void 0 ? void 0 : e.call(s, t)) !== null && i !== void 0 ? i : []
}

function ii(s, t) {
  var e, i;
  return (i = (e = s.Pn) === null || e === void 0 ? void 0 : e.call(s, t)) !== null && i !== void 0 ? i : []
}

function If(s, t) {
  var e, i;
  return (i = (e = s.Ji) === null || e === void 0 ? void 0 : e.call(s, t)) !== null && i !== void 0 ? i : []
}

function Pf(s, t) {
  var e, i;
  return (i = (e = s.la) === null || e === void 0 ? void 0 : e.call(s, t)) !== null && i !== void 0 ? i : []
}
class Hs {
  constructor(t, e) {
    this.Lv = G({
      width: 0,
      height: 0
    }), this.yp = null, this.Cp = null, this.Tp = null, this.Pp = null, this.Rp = !1, this.Dp = new rt, this.Vp = new rt, this.Op = 0, this.Bp = !1, this.Ap = null, this.Ip = !1, this.zp = null, this.Lp = null, this.Wv = !1, this.jv = () => {
      this.Wv || this.Ep === null || this.$i().$h()
    }, this.$v = () => {
      this.Wv || this.Ep === null || this.$i().$h()
    }, this.Jd = t, this.Ep = e, this.Ep.F_().l(this.Np.bind(this), this, !0), this.Fp = document.createElement("td"), this.Fp.style.padding = "0", this.Fp.style.position = "relative";
    const i = document.createElement("div");
    i.style.width = "100%", i.style.height = "100%", i.style.position = "relative", i.style.overflow = "hidden", this.Wp = document.createElement("td"), this.Wp.style.padding = "0", this.jp = document.createElement("td"), this.jp.style.padding = "0", this.Fp.appendChild(i), this.Kv = qt(i, G({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const n = this.Kv.canvasElement;
    n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Gv = qt(i, G({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const o = this.Gv.canvasElement;
    o.style.position = "absolute", o.style.zIndex = "2", o.style.left = "0", o.style.top = "0", this.Hp = document.createElement("tr"), this.Hp.appendChild(this.Wp), this.Hp.appendChild(this.Fp), this.Hp.appendChild(this.jp), this.$p(), this.rp = new Ks(this.Gv.canvasElement, this, {
      sv: () => this.Ap === null && !this.Jd.W().handleScroll.vertTouchDrag,
      ev: () => this.Ap === null && !this.Jd.W().handleScroll.horzTouchDrag
    })
  }
  S() {
    this.yp !== null && this.yp.S(), this.Cp !== null && this.Cp.S(), this.Tp = null, this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Qt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Qt(this.Kv.canvasElement), this.Kv.dispose(), this.Ep !== null && this.Ep.F_().p(this), this.rp.S()
  }
  dp() {
    return M(this.Ep)
  }
  Up(t) {
    var e, i;
    this.Ep !== null && this.Ep.F_().p(this), this.Ep = t, this.Ep !== null && this.Ep.F_().l(Hs.prototype.Np.bind(this), this, !0), this.$p(), this.Jd.qp().indexOf(this) === this.Jd.qp().length - 1 ? (this.Tp = (e = this.Tp) !== null && e !== void 0 ? e : new Cf(this.Fp, this.Jd), this.Tp.bt()) : ((i = this.Tp) === null || i === void 0 || i.tf(), this.Tp = null)
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
        this.yp.Gi(M(t))
      }
      if (this.Cp !== null) {
        const t = this.Ep.R_();
        this.Cp.Gi(M(t))
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
      const n = M(this.zp),
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
          let p, v;
          for (const g of h) {
            const x = (f = (d = g.fa) === null || d === void 0 ? void 0 : d.call(g, c, u)) !== null && f !== void 0 ? f : [];
            for (const k of x) b = k.zOrder, (!(y = p == null ? void 0 : p.zOrder) || b === "top" && y !== "top" || b === "normal" && y === "bottom") && (p = k, v = g)
          }
          var b, y;
          return p && v ? {
            Iv: p,
            jc: v
          } : null
        }(l, o, r);
      if ((a == null ? void 0 : a.Iv.zOrder) === "top") return ei(a);
      for (const h of l) {
        if (a && a.jc === h && a.Iv.zOrder !== "bottom" && !a.Iv.isBackground) return ei(a);
        const c = Tf(h.Pn(n), o, r);
        if (c !== null) return {
          jc: h,
          Ov: c.Ov,
          Av: c.Av
        };
        if (a && a.jc === h && a.Iv.zOrder !== "bottom" && a.Iv.isBackground) return ei(a)
      }
      return a != null && a.Iv ? ei(a) : null
    }(i, t, e)
  }
  om(t, e) {
    M(e === "left" ? this.yp : this.Cp).up(G({
      width: t,
      height: this.Lv.height
    }))
  }
  _m() {
    return this.Lv
  }
  up(t) {
    Ht(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Fp.style.width = t.width + "px", this.Fp.style.height = t.height + "px")
  }
  um() {
    const t = M(this.Ep);
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
      const i = Gt(this.Kv);
      i !== null && (i.useBitmapCoordinateSpace(n => {
        this.pp(n)
      }), this.Ep && (this.dm(i, zf), this.fm(i), this.vm(i), this.dm(i, ii), this.dm(i, If)))
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Gt(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: i,
      bitmapSize: n
    }) => {
      i.clearRect(0, 0, n.width, n.height)
    }), this.pm(e), this.dm(e, Pf))
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
    r === l ? Ti(t, 0, 0, i, n, l) : ar(t, 0, 0, i, n, r, l)
  }
  fm(t) {
    const e = M(this.Ep).W_().Uh().gt();
    e !== null && e.X(t, !1)
  }
  vm(t) {
    const e = this.$i().qc();
    this.gm(t, ii, ws, e), this.gm(t, ii, li, e)
  }
  pm(t) {
    this.gm(t, ii, li, this.$i().Yc())
  }
  dm(t, e) {
    const i = M(this.Ep).$o();
    for (const n of i) this.gm(t, e, ws, n);
    for (const n of i) this.gm(t, e, li, n)
  }
  gm(t, e, i, n) {
    const o = M(this.Ep),
      r = o.$t().Fc(),
      l = r !== null && r.jc === n,
      a = r !== null && l && r.Av !== void 0 ? r.Av.gr : void 0;
    Ss(e, h => i(h, t, l, a), n, o)
  }
  Yp() {
    if (this.Ep === null) return;
    const t = this.Jd,
      e = this.Ep.P_().W().visible,
      i = this.Ep.R_().W().visible;
    e || this.yp === null || (this.Wp.removeChild(this.yp.hp()), this.yp.S(), this.yp = null), i || this.Cp === null || (this.jp.removeChild(this.Cp.hp()), this.Cp.S(), this.Cp = null);
    const n = t.$t()._d();
    e && this.yp === null && (this.yp = new Zn(this, t.W(), n, "left"), this.Wp.appendChild(this.yp.hp())), i && this.Cp === null && (this.Cp = new Zn(this, t.W(), n, "right"), this.jp.appendChild(this.Cp.hp()))
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
    this.$i().hd(this.xm(t), this.Sm(e), i, M(this.Ep))
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
      if (this.$i().Un(), document.activeElement !== document.body && document.activeElement !== document.documentElement) M(document.activeElement).blur();
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
        this.Lp = new xf(.2 / h, 7 / h, .997, 15 / h), this.Lp.qd(i.ju(), this.Pp.Vd)
      } else this.Lp = null;
      l.Ni() || e.B_(this.Ep, l, t.localY), e.td(t.localX), this.Rp = !0
    }
    this.Rp && (l.Ni() || e.A_(this.Ep, l, t.localY), e.nd(t.localX), this.Lp !== null && this.Lp.qd(i.ju(), a))
  }
}
class qn {
  constructor(t, e, i, n, o) {
    this.ft = !0, this.Lv = G({
      width: 0,
      height: 0
    }), this.jv = () => this.fp(3), this.Uv = t === "left", this.Vc = i._d, this.cn = e, this.Cm = n, this.Tm = o, this.Xv = document.createElement("div"), this.Xv.style.width = "25px", this.Xv.style.height = "100%", this.Xv.style.overflow = "hidden", this.Kv = qt(this.Xv, G({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv)
  }
  S() {
    this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Qt(this.Kv.canvasElement), this.Kv.dispose()
  }
  hp() {
    return this.Xv
  }
  _m() {
    return this.Lv
  }
  up(t) {
    Ht(this.Lv, t) || (this.Lv = t, this.Kv.resizeCanvasElement(t), this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`, this.ft = !0)
  }
  fp(t) {
    if (t < 3 && !this.ft || this.Lv.width === 0 || this.Lv.height === 0) return;
    this.ft = !1, this.Kv.applySuggestedBitmapSize();
    const e = Gt(this.Kv);
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
    Ti(t, 0, 0, e.width, e.height, this.Tm())
  }
}

function Js(s) {
  return t => {
    var e, i;
    return (i = (e = t.da) === null || e === void 0 ? void 0 : e.call(t, s)) !== null && i !== void 0 ? i : []
  }
}
const $f = Js("normal"),
  Lf = Js("top"),
  jf = Js("bottom");
class Rf {
  constructor(t, e) {
    this.Pm = null, this.Rm = null, this.k = null, this.Dm = !1, this.Lv = G({
      width: 0,
      height: 0
    }), this.Vm = new rt, this.Nv = new De(5), this.Wv = !1, this.jv = () => {
      this.Wv || this.Jd.$t().$h()
    }, this.$v = () => {
      this.Wv || this.Jd.$t().$h()
    }, this.Jd = t, this.U_ = e, this.cn = t.W().layout, this.Zd = document.createElement("tr"), this.Om = document.createElement("td"), this.Om.style.padding = "0", this.Bm = document.createElement("td"), this.Bm.style.padding = "0", this.Xv = document.createElement("td"), this.Xv.style.height = "25px", this.Xv.style.padding = "0", this.Am = document.createElement("div"), this.Am.style.width = "100%", this.Am.style.height = "100%", this.Am.style.position = "relative", this.Am.style.overflow = "hidden", this.Xv.appendChild(this.Am), this.Kv = qt(this.Am, G({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const i = this.Kv.canvasElement;
    i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.Gv = qt(this.Am, G({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const n = this.Gv.canvasElement;
    n.style.position = "absolute", n.style.zIndex = "2", n.style.left = "0", n.style.top = "0", this.Zd.appendChild(this.Om), this.Zd.appendChild(this.Xv), this.Zd.appendChild(this.Bm), this.Im(), this.Jd.$t().w_().l(this.Im.bind(this), this), this.rp = new Ks(this.Gv.canvasElement, this, {
      sv: () => !0,
      ev: () => !this.Jd.W().handleScroll.horzTouchDrag
    })
  }
  S() {
    this.rp.S(), this.Pm !== null && this.Pm.S(), this.Rm !== null && this.Rm.S(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Qt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Qt(this.Kv.canvasElement), this.Kv.dispose()
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
    Ht(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`, this.Vm.m(t)), this.Pm !== null && this.Pm.up(G({
      width: e,
      height: t.height
    })), this.Rm !== null && this.Rm.up(G({
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
      const i = Gt(this.Kv);
      i !== null && (i.useBitmapCoordinateSpace(n => {
        this.pp(n), this.Ae(n), this.Hm(i, jf)
      }), this.bp(i), this.Hm(i, $f)), this.Pm !== null && this.Pm.fp(t), this.Rm !== null && this.Rm.fp(t)
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Gt(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: i,
      bitmapSize: n
    }) => {
      i.clearRect(0, 0, n.width, n.height)
    }), this.$m([...this.Jd.$t().wt(), this.Jd.$t().Yc()], e), this.Hm(e, Lf))
  }
  Hm(t, e) {
    const i = this.Jd.$t().wt();
    for (const n of i) Ss(e, o => ws(o, t, !1, void 0), n, void 0);
    for (const n of i) Ss(e, o => li(o, t, !1, void 0), n, void 0)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    Ti(t, 0, 0, e.width, e.height, this.Jd.$t().md())
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
    return ve(this.j(), this.cn.fontFamily)
  }
  Ym() {
    return ve(this.j(), this.cn.fontFamily, "bold")
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
      Wi: new De,
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
    e.leftPriceScale.visible && this.Pm === null && (this.Pm = new qn("left", e, i, n, o), this.Om.appendChild(this.Pm.hp())), e.rightPriceScale.visible && this.Rm === null && (this.Rm = new qn("right", e, i, n, o), this.Bm.appendChild(this.Rm.hp()))
  }
}
const Af = !!ge && !!navigator.userAgentData && navigator.userAgentData.brands.some(s => s.brand.includes("Chromium")) && !!ge && (!((es = navigator == null ? void 0 : navigator.userAgentData) === null || es === void 0) && es.platform ? navigator.userAgentData.platform === "Windows" : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
var es;
class Of {
  constructor(t, e, i) {
    var n;
    this.Zm = [], this.Xm = 0, this.ro = 0, this.o_ = 0, this.Km = 0, this.Gm = 0, this.Jm = null, this.Qm = !1, this.Dp = new rt, this.Vp = new rt, this.Pc = new rt, this.tb = null, this.ib = null, this.Gd = t, this.cn = e, this.U_ = i, this.Zd = document.createElement("div"), this.Zd.classList.add("tv-lightweight-charts"), this.Zd.style.overflow = "hidden", this.Zd.style.direction = "ltr", this.Zd.style.width = "100%", this.Zd.style.height = "100%", (n = this.Zd).style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.msUserSelect = "none", n.style.MozUserSelect = "none", n.style.webkitTapHighlightColor = "transparent", this.nb = document.createElement("table"), this.nb.setAttribute("cellspacing", "0"), this.Zd.appendChild(this.nb), this.sb = this.eb.bind(this), is(this.cn) && this.rb(!0), this.$i = new _f(this.Dc.bind(this), this.cn, i), this.$t().Zc().l(this.hb.bind(this), this), this.lb = new Rf(this, this.U_), this.nb.appendChild(this.lb.hp());
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
    this.Zm = [], M(this.lb).S(), this.Zd.parentElement !== null && this.Zd.parentElement.removeChild(this.Zd), this.Pc.S(), this.Dp.S(), this.Vp.S(), this.fb()
  }
  ob(t, e, i = !1) {
    if (this.ro === e && this.o_ === t) return;
    const n = function(l) {
      const a = Math.floor(l.width),
        h = Math.floor(l.height);
      return G({
        width: a - a % 2,
        height: h - h % 2
      })
    }(G({
      width: t,
      height: e
    }));
    this.ro = n.height, this.o_ = n.width;
    const o = this.ro + "px",
      r = this.o_ + "px";
    M(this.Zd).style.height = o, M(this.Zd).style.width = r, this.nb.style.height = o, this.nb.style.width = r, i ? this.pb(ut.es(), performance.now()) : this.$i.Xl()
  }
  fp(t) {
    t === void 0 && (t = ut.es());
    for (let e = 0; e < this.Zm.length; e++) this.Zm[e].fp(t.Hn(e).Fn);
    this.cn.timeScale.visible && this.lb.fp(t.jn())
  }
  Hh(t) {
    const e = is(this.cn);
    this.$i.Hh(t);
    const i = is(this.cn);
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
    const i = M(e.getContext("2d"));
    return this.wb(i), e
  }
  gb(t) {
    return t === "left" && !this.Mb() || t === "right" && !this.xb() || this.Zm.length === 0 ? 0 : M(t === "left" ? this.Zm[0].bm() : this.Zm[0].wm()).cp()
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
    return ft(this.Zm[0])._m()
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
            d = M(l === "left" ? u.bm() : u.wm()),
            f = d.Mp();
          t !== null && d.xp(t, a, h), h += f.height
        }
      };
    this.Mb() && (o("left", 0), e += M(n.bm()).Mp().width);
    for (let l = 0; l < this.Zm.length; l++) {
      const a = this.Zm[l],
        h = a.Mp();
      t !== null && a.xp(t, e, i), i += h.height
    }
    e += n.Mp().width, this.xb() && (o("right", e), e += M(n.wm()).Mp().width);
    const r = (l, a, h) => {
      M(l === "left" ? this.lb.zm() : this.lb.Lm()).xp(M(t), a, h)
    };
    if (this.cn.timeScale.visible) {
      const l = this.lb.Mp();
      if (t !== null) {
        let a = 0;
        this.Mb() && (r("left", a, i), a = M(n.bm()).Mp().width), this.lb.xp(t, a, i), a += l.width, this.xb() && r("right", a, i)
      }
      i += l.height
    }
    return G({
      width: e,
      height: i
    })
  }
  Tb() {
    let t = 0,
      e = 0,
      i = 0;
    for (const p of this.Zm) this.Mb() && (e = Math.max(e, M(p.bm()).ap(), this.cn.leftPriceScale.minimumWidth)), this.xb() && (i = Math.max(i, M(p.wm()).ap(), this.cn.rightPriceScale.minimumWidth)), t += p.g_();
    e = _s(e), i = _s(i);
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
      const v = this.Zm[p];
      v.Up(this.$i.Uc()[p]);
      let b = 0,
        y = 0;
      y = p === this.Zm.length - 1 ? u - f : Math.round(v.g_() * d), b = Math.max(y, 2), f += b, v.up(G({
        width: r,
        height: b
      })), this.Mb() && v.om(e, "left"), this.xb() && v.om(i, "right"), v.dp() && this.$i.Xc(v.dp(), b)
    }
    this.lb.Nm(G({
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
    return Af ? 1 / window.devicePixelRatio : 1
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
      const o = ft(this.Zm.pop());
      this.nb.removeChild(o.hp()), o.hm().p(this), o.lm().p(this), o.S()
    }
    for (let n = i; n < e; n++) {
      const o = new Hs(this, t[n]);
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
      a = l !== null && l.jc instanceof Fs ? l.jc : void 0,
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

function is(s) {
  return !!(s.handleScroll.mouseWheel || s.handleScale.mouseWheel)
}

function Df(s) {
  return function(t) {
    return t.open !== void 0
  }(s) || function(t) {
    return t.value !== void 0
  }(s)
}

function Er(s, t) {
  var e = {};
  for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && t.indexOf(i) < 0 && (e[i] = s[i]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") {
    var n = 0;
    for (i = Object.getOwnPropertySymbols(s); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(s, i[n]) && (e[i[n]] = s[i[n]])
  }
  return e
}

function Qn(s, t, e, i) {
  const n = e.value,
    o = {
      se: t,
      ot: s,
      Vt: [n, n, n, n],
      Ib: i
    };
  return e.color !== void 0 && (o.V = e.color), o
}

function Vf(s, t, e, i) {
  const n = e.value,
    o = {
      se: t,
      ot: s,
      Vt: [n, n, n, n],
      Ib: i
    };
  return e.lineColor !== void 0 && (o.lt = e.lineColor), e.topColor !== void 0 && (o.Ts = e.topColor), e.bottomColor !== void 0 && (o.Ps = e.bottomColor), o
}

function Wf(s, t, e, i) {
  const n = e.value,
    o = {
      se: t,
      ot: s,
      Vt: [n, n, n, n],
      Ib: i
    };
  return e.topLineColor !== void 0 && (o.Pe = e.topLineColor), e.bottomLineColor !== void 0 && (o.Re = e.bottomLineColor), e.topFillColor1 !== void 0 && (o.Se = e.topFillColor1), e.topFillColor2 !== void 0 && (o.ke = e.topFillColor2), e.bottomFillColor1 !== void 0 && (o.ye = e.bottomFillColor1), e.bottomFillColor2 !== void 0 && (o.Ce = e.bottomFillColor2), o
}

function Nf(s, t, e, i) {
  const n = {
    se: t,
    ot: s,
    Vt: [e.open, e.high, e.low, e.close],
    Ib: i
  };
  return e.color !== void 0 && (n.V = e.color), n
}

function Bf(s, t, e, i) {
  const n = {
    se: t,
    ot: s,
    Vt: [e.open, e.high, e.low, e.close],
    Ib: i
  };
  return e.color !== void 0 && (n.V = e.color), e.borderColor !== void 0 && (n.Ot = e.borderColor), e.wickColor !== void 0 && (n.Zh = e.wickColor), n
}

function Ff(s, t, e, i, n) {
  const o = ft(n)(e),
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
    He: Er(c, ["time", "color"]),
    V: d
  }
}

function si(s) {
  return s.Vt !== void 0
}

function to(s, t) {
  return t.customValues !== void 0 && (s.Wb = t.customValues), s
}

function Vt(s) {
  return (t, e, i, n, o, r) => function(l, a) {
    return a ? a(l) : (h = l).open === void 0 && h.value === void 0;
    var h
  }(i, r) ? to({
    ot: t,
    se: e,
    Ib: n
  }, i) : to(s(t, e, i, n, o), i)
}

function eo(s) {
  return {
    Candlestick: Vt(Bf),
    Bar: Vt(Nf),
    Area: Vt(Vf),
    Baseline: Vt(Wf),
    Histogram: Vt(Qn),
    Line: Vt(Qn),
    Custom: Vt(Ff)
  } [s]
}

function io(s) {
  return {
    se: 0,
    jb: new Map,
    ha: s
  }
}

function so(s, t) {
  if (s !== void 0 && s.length !== 0) return {
    Hb: t.key(s[0].ot),
    $b: t.key(s[s.length - 1].ot)
  }
}

function no(s) {
  let t;
  return s.forEach(e => {
    t === void 0 && (t = e.Ib)
  }), ft(t)
}
class Uf {
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
        c = eo(t.Jh()),
        u = t.ya(),
        d = t.Ca();
      r = e.map((f, p) => {
        const v = h(f.time),
          b = this.U_.key(v);
        let y = this.Ub.get(b);
        y === void 0 && (y = io(v), this.Ub.set(b, y), n = !0);
        const g = c(v, y.se, f, a[p], u, d);
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
          originalTime: no(h.jb)
        })
      }), a.sort((h, c) => this.U_.key(h.time) - this.U_.key(c.time)), l = this.Jb(a)
    }
    return this.Qb(t, l, function(a, h, c) {
      const u = so(a, c),
        d = so(h, c);
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
    (function(v) {
      v.Ib === void 0 && (v.Ib = v.time)
    })(i), this.U_.preprocessData(e);
    const n = this.U_.createConverterToInternalObj([e])(e.time),
      o = this.Yb.get(t);
    if (o !== void 0 && this.U_.key(n) < this.U_.key(o)) throw new Error(`Cannot update oldest data, last time=${o}, new time=${n}`);
    let r = this.Ub.get(this.U_.key(n));
    const l = r === void 0;
    r === void 0 && (r = io(n), this.Ub.set(this.U_.key(n), r));
    const a = eo(t.Jh()),
      h = t.ya(),
      c = t.Ca(),
      u = a(n, r.se, e, i.Ib, h, c);
    r.jb.set(t, u), this.iw(t, u);
    const d = {
      Ql: si(u)
    };
    if (!l) return this.Qb(t, -1, d);
    const f = {
        timeWeight: 0,
        time: r.ha,
        pointData: r,
        originalTime: no(r.jb)
      },
      p = Ue(this.Zb, this.U_.key(f.time), (v, b) => this.U_.key(v.time) < b);
    this.Zb.splice(p, 0, f);
    for (let v = p; v < this.Zb.length; ++v) ss(this.Zb[v].pointData, v);
    return this.U_.fillWeightsForPoints(this.Zb, p), this.Qb(t, p, d)
  }
  iw(t, e) {
    let i = this.qb.get(t);
    i === void 0 && (i = [], this.qb.set(t, i));
    const n = i.length !== 0 ? i[i.length - 1] : null;
    n === null || this.U_.key(e.ot) > this.U_.key(n.ot) ? si(e) && i.push(e) : si(e) ? i[i.length - 1] = e : i.splice(-1, 1), this.Yb.set(t, e.ot)
  }
  Gb(t, e) {
    e.length !== 0 ? (this.qb.set(t, e.filter(si)), this.Yb.set(t, e[e.length - 1].ot)) : (this.qb.delete(t), this.Yb.delete(t))
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
      o.timeWeight = n.timeWeight, ss(o.pointData, i)
    }
    if (e === -1 && this.Zb.length !== t.length && (e = Math.min(this.Zb.length, t.length)), e === -1) return -1;
    for (let i = e; i < t.length; ++i) ss(t[i].pointData, i);
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

function ss(s, t) {
  s.se = t, s.jb.forEach(e => {
    e.se = t
  })
}

function Xs(s) {
  const t = {
    value: s.Vt[3],
    time: s.Ib
  };
  return s.Wb !== void 0 && (t.customValues = s.Wb), t
}

function oo(s) {
  const t = Xs(s);
  return s.V !== void 0 && (t.color = s.V), t
}

function Kf(s) {
  const t = Xs(s);
  return s.lt !== void 0 && (t.lineColor = s.lt), s.Ts !== void 0 && (t.topColor = s.Ts), s.Ps !== void 0 && (t.bottomColor = s.Ps), t
}

function Hf(s) {
  const t = Xs(s);
  return s.Pe !== void 0 && (t.topLineColor = s.Pe), s.Re !== void 0 && (t.bottomLineColor = s.Re), s.Se !== void 0 && (t.topFillColor1 = s.Se), s.ke !== void 0 && (t.topFillColor2 = s.ke), s.ye !== void 0 && (t.bottomFillColor1 = s.ye), s.Ce !== void 0 && (t.bottomFillColor2 = s.Ce), t
}

function Tr(s) {
  const t = {
    open: s.Vt[0],
    high: s.Vt[1],
    low: s.Vt[2],
    close: s.Vt[3],
    time: s.Ib
  };
  return s.Wb !== void 0 && (t.customValues = s.Wb), t
}

function Jf(s) {
  const t = Tr(s);
  return s.V !== void 0 && (t.color = s.V), t
}

function Xf(s) {
  const t = Tr(s),
    {
      V: e,
      Ot: i,
      Zh: n
    } = s;
  return e !== void 0 && (t.color = e), i !== void 0 && (t.borderColor = i), n !== void 0 && (t.wickColor = n), t
}

function Ms(s) {
  return {
    Area: Kf,
    Line: oo,
    Baseline: Hf,
    Histogram: oo,
    Bar: Jf,
    Candlestick: Xf,
    Custom: Yf
  } [s]
}

function Yf(s) {
  const t = s.Ib;
  return Object.assign(Object.assign({}, s.He), {
    time: t
  })
}
const Gf = {
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
  },
  Zf = {
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
  },
  qf = {
    background: {
      type: "solid",
      color: "#FFFFFF"
    },
    textColor: "#191919",
    fontSize: 12,
    fontFamily: Os,
    attributionLogo: !0
  },
  ns = {
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
  },
  Qf = {
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
  },
  tp = {
    color: "rgba(0, 0, 0, 0)",
    visible: !1,
    fontSize: 48,
    fontFamily: Os,
    fontStyle: "",
    text: "",
    horzAlign: "center",
    vertAlign: "center"
  };

function ro() {
  return {
    width: 0,
    height: 0,
    autoSize: !1,
    layout: qf,
    crosshair: Gf,
    grid: Zf,
    overlayPriceScales: Object.assign({}, ns),
    leftPriceScale: Object.assign(Object.assign({}, ns), {
      visible: !1
    }),
    rightPriceScale: Object.assign(Object.assign({}, ns), {
      visible: !0
    }),
    timeScale: Qf,
    watermark: tp,
    localization: {
      locale: ge ? navigator.language : "",
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
class ep {
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
    return Ii(this.aw) ? this.lw.gb(this.aw) : 0
  }
  Li() {
    return M(this.lw.$t().$c(this.aw)).Dt
  }
}

function lo(s, t, e) {
  const i = Er(s, ["time", "originalTime"]),
    n = Object.assign({
      time: t
    }, i);
  return e !== void 0 && (n.originalTime = e), n
}
const ip = {
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
class sp {
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
class np {
  constructor(t, e, i, n, o) {
    this._w = new rt, this.Ls = t, this.uw = e, this.cw = i, this.U_ = o, this.dw = n
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
    const e = new ue(new Ie(t.from, t.to)).hu(),
      i = this.Ls.In();
    if (i.Ni()) return null;
    const n = i.hl(e.Vs(), 1),
      o = i.hl(e.ui(), -1),
      r = M(i.sl()),
      l = M(i.An());
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
    return i === null ? null : Ms(this.seriesType())(i)
  }
  data() {
    const t = Ms(this.seriesType());
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
    const e = t.map(i => lo(i, this.U_.convertHorzItemToInternal(i.time), i.time));
    this.Ls.ia(e)
  }
  markers() {
    return this.Ls.na().map(t => lo(t, t.originalTime, void 0))
  }
  applyOptions(t) {
    this.Ls.Hh(t)
  }
  options() {
    return Et(this.Ls.W())
  }
  priceScale() {
    return this.cw.priceScale(this.Ls.Dt().Ta())
  }
  createPriceLine(t) {
    const e = yt(Et(ip), t),
      i = this.Ls.sa(e);
    return new sp(i)
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
class op {
  constructor(t, e, i) {
    this.bw = new rt, this.pu = new rt, this.Vm = new rt, this.$i = t, this.kl = t.St(), this.lb = e, this.kl.tc().l(this.ww.bind(this)), this.kl.nc().l(this.gw.bind(this)), this.lb.Em().l(this.Mw.bind(this)), this.U_ = i
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
    At(t.from <= t.to, "The from index cannot be after the to index."), this.$i.vd(t)
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
    return Object.assign(Object.assign({}, Et(this.kl.W())), {
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

function rp(s) {
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

function ao(s) {
  return function(t) {
    if (Xe(t.handleScale)) {
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
      Xe(i) && (t.handleScale.axisPressedMouseMove = {
        time: i,
        price: i
      }), Xe(n) && (t.handleScale.axisDoubleClickReset = {
        time: n,
        price: n
      })
    }
    const e = t.handleScroll;
    Xe(e) && (t.handleScroll = {
      horzTouchDrag: e,
      vertTouchDrag: e,
      mouseWheel: e,
      pressedMouseMove: e
    })
  }(s), s
}
class lp {
  constructor(t, e, i) {
    this.xw = new Map, this.Sw = new Map, this.kw = new rt, this.yw = new rt, this.Cw = new rt, this.Tw = new Uf(e);
    const n = i === void 0 ? Et(ro()) : yt(Et(ro()), ao(i));
    this.U_ = e, this.lw = new Of(t, n, e), this.lw.hm().l(r => {
      this.kw.M() && this.kw.m(this.Pw(r()))
    }, this), this.lw.lm().l(r => {
      this.yw.M() && this.yw.m(this.Pw(r()))
    }, this), this.lw.Zc().l(r => {
      this.Cw.M() && this.Cw.m(this.Pw(r()))
    }, this);
    const o = this.lw.$t();
    this.Rw = new op(o, this.lw.cb(), this.U_)
  }
  remove() {
    this.lw.hm().p(this), this.lw.lm().p(this), this.lw.Zc().p(this), this.Rw.S(), this.lw.S(), this.xw.clear(), this.Sw.clear(), this.kw.S(), this.yw.S(), this.Cw.S(), this.Tw.S()
  }
  resize(t, e, i) {
    this.autoSizeActive() || this.lw.ob(t, e, i)
  }
  addCustomSeries(t, e) {
    const i = re(t),
      n = Object.assign(Object.assign({}, sr), i.defaultOptions());
    return this.Dw("Custom", n, e, i)
  }
  addAreaSeries(t) {
    return this.Dw("Area", Fu, t)
  }
  addBaselineSeries(t) {
    return this.Dw("Baseline", Uu, t)
  }
  addBarSeries(t) {
    return this.Dw("Bar", Nu, t)
  }
  addCandlestickSeries(t = {}) {
    return function(e) {
      e.borderColor !== void 0 && (e.borderUpColor = e.borderColor, e.borderDownColor = e.borderColor), e.wickColor !== void 0 && (e.wickUpColor = e.wickColor, e.wickDownColor = e.wickColor)
    }(t), this.Dw("Candlestick", Wu, t)
  }
  addHistogramSeries(t) {
    return this.Dw("Histogram", Ku, t)
  }
  addLineSeries(t) {
    return this.Dw("Line", Bu, t)
  }
  removeSeries(t) {
    const e = ft(this.xw.get(t)),
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
    return new ep(this.lw, t)
  }
  timeScale() {
    return this.Rw
  }
  applyOptions(t) {
    this.lw.Hh(ao(t))
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
    rp(i.priceFormat);
    const o = yt(Et(nr), Et(e), i),
      r = this.lw.$t().ud(t, o, n),
      l = new np(r, this, this, this, this.U_);
    return this.xw.set(l, r), this.Sw.set(r, l), l
  }
  Vw(t) {
    const e = this.lw.$t();
    e.od(t.St.Lu, t.St.rw, t.St.hw), t.sw.forEach((i, n) => n.J(i.He, i.ew)), e.Fu()
  }
  Ow(t) {
    return ft(this.Sw.get(t))
  }
  Pw(t) {
    const e = new Map;
    t.Eb.forEach((n, o) => {
      const r = o.Jh(),
        l = Ms(r)(n);
      if (r !== "Custom") At(Df(l));
      else {
        const a = o.Ca();
        At(!a || a(l) === !1)
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

function ap(s, t, e) {
  let i;
  if (Fe(s)) {
    const o = document.getElementById(s);
    At(o !== null, `Cannot find element in DOM with id=${s}`), i = o
  } else i = s;
  const n = new lp(i, t, e);
  return t.setOptions(n.options()), n
}

function hp(s, t) {
  return ap(s, new Jn, Jn.Ad(t))
}
Object.assign(Object.assign({}, nr), sr);
const ho = "chart-series-type-storage-key",
  zr = s => {
    const t = It("$iBkM1fJygO"),
      e = It(() => Se.ONE_MINUTE, "$U7uRnIu5qm"),
      i = It(() => Lt.MARKET_CAP, "$oqBOSk6KRz"),
      n = It(() => {
        const g = oe.CANDLESTICK;
        return Pe().$webApp.storage.local.get(ho) ?? g
      }, "$HolymaTkRj"),
      o = It(() => s.jettonShortname, "$UDNpnPF3Rr"),
      r = It("$OxUMQZpMxL"),
      l = It(() => new AbortController, "$3srltZOr0B"),
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
        n.value = g, Pe().$webApp.storage.local.set(ho, g)
      },
      d = g => {
        const x = i.value,
          k = e.value,
          I = t.value;
        if (!I || I.type !== x || I.interval !== k) return {
          type: x,
          interval: k,
          data: g
        };
        const N = g.points.filter($ => I.data.points.some(z => z.timestamp === $.timestamp)),
          D = g.points.filter($ => !I.data.points.some(z => z.timestamp === $.timestamp));
        return {
          type: x,
          interval: k,
          data: {
            points: [...D, ...I.data.points.map($ => N.find(z => z.timestamp === $.timestamp) || $)]
          }
        }
      },
      f = async g => {
        if (r.value === g) return;
        const x = r.value;
        r.value = g;
        const {
          signal: k
        } = l.value, I = await hi.getMemepadJettonCandleChart(o.value, {
          interval: e.value,
          type: i.value,
          fromTimestamp: g
        });
        k.aborted || (gt(I) ? t.value = d(I.data) : r.value = x)
      }, p = It(() => Vr(async () => {
        const g = await hi.getMemepadJettonCandleChart(o.value, {
          interval: e.value,
          type: i.value
        });
        return Wr(g)
      }, g => t.value = d(g), 5e3), "$94wRLOqniR"), v = j(() => {
        var g;
        return t.value && t.value.type === Lt.MARKET_CAP ? (g = [...t.value.data.points].sort((x, k) => x.timestamp - k.timestamp).at(-1)) == null ? void 0 : g.price : void 0
      });
    return {
      _flow: {
        init: async () => {
          o.value = s.jettonShortname, await p.value.exec()
        },
        destroy: () => {
          p.value.destroy(), t.value = void 0, e.value = Se.ONE_MINUTE, i.value = Lt.MARKET_CAP, r.value = void 0, a()
        }
      },
      chart: j(() => t.value),
      chartType: j(() => i.value),
      chartInterval: j(() => e.value),
      chartSeriesType: j(() => n.value),
      chartMarketCap: v,
      updateChartSeriesType: u,
      updateChartType: c,
      updateChartInterval: h,
      fetchChartHistory: f
    }
  },
  cp = {
    class: "memepad-jetton-chart"
  },
  up = {
    class: "controls"
  },
  dp = ["value"],
  fp = {
    class: "label"
  },
  pp = ["value"],
  mp = {
    class: "label"
  },
  vp = {
    key: 0,
    class: "chart-empty-wrapper"
  },
  gp = {
    class: "inner"
  },
  bp = {
    class: "label"
  },
  yp = {
    key: 1,
    class: "chart-wrapper"
  },
  _p = st({
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
        } = zr({
          jettonShortname: t.jettonShortname
        }),
        c = tt(null),
        u = tt(null),
        d = tt(null),
        f = tt(i.value),
        p = tt(n.value),
        v = j(() => [{
          value: Se.ONE_MINUTE,
          label: `1${O("base.time.abbr.minutes")}`
        }, {
          value: Se.FIVE_MINUTES,
          label: `5${O("base.time.abbr.minutes")}`
        }, {
          value: Se.FIFTEEN_MINUTES,
          label: `15${O("base.time.abbr.minutes")}`
        }]),
        b = j(() => [{
          value: Lt.MARKET_CAP,
          label: O("memepad.chart.tabs.market_cap")
        }, {
          value: Lt.PRICE,
          label: O("memepad.chart.tabs.price")
        }]),
        y = j({
          get: () => i.value,
          set: z => {
            r(z)
          }
        }),
        g = j({
          get: () => n.value,
          set: z => {
            l(z)
          }
        }),
        x = new ResizeObserver(() => {
          var V;
          const z = c.value;
          z && ((V = u.value) == null || V.resize(z.clientWidth, z.clientHeight))
        }),
        k = () => {
          const z = c.value;
          z && x.observe(z)
        },
        I = () => {
          const z = c.value;
          z && x.unobserve(z)
        };
      let N = null;
      const D = (z, V, C) => {
          var nt;
          const L = (nt = Pe().$webApp.dataUnsafe.user) == null ? void 0 : nt.language_code;
          u.value || (u.value = hp(V, {
            localization: {
              timeFormatter: U => {
                const Z = ot => String(ot).padStart(2, "0"),
                  J = new Date(U * 1e3);
                return `${Z(J.getUTCHours())}:${Z(J.getUTCMinutes())}`
              },
              priceFormatter: U => {
                if (g.value === Lt.MARKET_CAP) return `$${Ut(U,{accuracy:0})}`;
                {
                  if (Math.abs(U) < 1e-12) return "$0";
                  const [Z, J] = U.toFixed(12).split("."), ot = J[0], K = J.slice(1).match(/^0+/), et = K ? K[0].length : 0, at = et > 0 ? String.fromCharCode(8321 + et) : "", T = J.slice(et + 1).replace(/0+$/, "").slice(0, 3);
                  return `$${Z}.${ot}${at}${T}`
                }
              },
              locale: L
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
              mode: gs.Magnet,
              horzLine: {
                color: "#ffffff",
                style: bi.Dashed,
                labelBackgroundColor: "#ffffff"
              },
              vertLine: {
                color: "#ffffff",
                style: bi.Dashed,
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
          const F = z.map(U => ({
            time: (() => {
              const Z = new Date(U.timestamp);
              return (Z.getTime() - Z.getTimezoneOffset() * 60 * 1e3) / 1e3
            })(),
            open: U.open.toNumber(),
            high: U.high.toNumber(),
            low: U.low.toNumber(),
            close: U.close.toNumber(),
            value: U.price.toNumber()
          })).sort((U, Z) => U.time - Z.time);
          (!d.value || N !== C) && (d.value && u.value.removeSeries(d.value), C === oe.CANDLESTICK ? d.value = u.value.addCandlestickSeries({
            upColor: "#C4F85C",
            downColor: "#FF00C7",
            baseLineWidth: 2,
            wickDownColor: "#FF00C7",
            wickUpColor: "#C4F85C",
            borderDownColor: "#FF00C7",
            borderUpColor: "#C4F85C",
            priceFormat: {
              type: "price",
              precision: g.value === Lt.MARKET_CAP ? 0 : 12,
              minMove: 1e-12
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
              precision: g.value === Lt.MARKET_CAP ? 0 : 12,
              minMove: 1e-12
            }
          }), N = C, u.value.timeScale().subscribeVisibleLogicalRangeChange(U => {
            var ct, K, et, at;
            if (!U || U.from >= 0) return;
            const Z = (K = (ct = d.value) == null ? void 0 : ct.dataByIndex(0)) == null ? void 0 : K.time,
              J = (at = (et = u.value) == null ? void 0 : et.timeScale().getVisibleRange()) == null ? void 0 : at.from;
            if (!Z || Z !== J) return;
            const ot = (() => {
              const T = new Date(J * 1e3);
              return (T.getTime() + T.getTimezoneOffset() * 60 * 1e3) / 1e3
            })();
            h(ot)
          })), d.value.setData(F);
          const H = f.value !== i.value ? "interval" : p.value !== n.value ? "type" : "other";
          f.value = i.value, p.value = n.value, (H === "interval" || H === "type") && u.value.timeScale().fitContent()
        },
        $ = j(() => {
          var C;
          if (!((C = t.jettonPnl) != null && C.hasPnL)) return;
          const z = Nr(t.jettonPnl.pnlAbsoluteUSD, {
              accuracy: 2,
              trim: !0
            }),
            V = ul(t.jettonPnl.pnlPercent);
          return {
            label: `P&L ${z} ${V.formatted}`,
            cls: V.cls
          }
        });
      return he(() => {
        var z;
        return {
          container: c.value,
          chart: (z = e.value) == null ? void 0 : z.data,
          chartSeriesType: o.value
        }
      }, z => {
        !z.container || !z.chart || D(z.chart.points, z.container, z.chartSeriesType)
      }, {
        immediate: !0
      }), he(c, z => z && k(), {
        immediate: !0
      }), We(I), (z, V) => {
        const C = Ot;
        return _(), E("div", cp, [S("div", up, [S("div", {
          class: "section",
          style: ls({
            "grid-template-columns": `repeat(${m(b).length}, 1fr)`
          })
        }, [(_(!0), E(dt, null, de(m(b), L => (_(), E("label", {
          key: L.value,
          class: ae(["item", {
            "is-active": m(n) === L.value
          }])
        }, [Ft(S("input", {
          "onUpdate:modelValue": V[0] || (V[0] = F => bt(g) ? g.value = F : null),
          type: "radio",
          name: "chart-type",
          value: L.value
        }, null, 8, dp), [
          [as, m(g)]
        ]), S("span", fp, A(L.label), 1)], 2))), 128))], 4), S("div", {
          class: "section",
          style: ls({
            "grid-template-columns": `repeat(${m(v).length}, 1fr)`
          })
        }, [(_(!0), E(dt, null, de(m(v), L => (_(), E("label", {
          key: L.value,
          class: ae(["item", {
            "is-active": m(i) === L.value
          }])
        }, [Ft(S("input", {
          "onUpdate:modelValue": V[1] || (V[1] = F => bt(y) ? y.value = F : null),
          type: "radio",
          name: "chart-interval",
          value: L.value
        }, null, 8, pp), [
          [as, m(y)]
        ]), S("span", mp, A(L.label), 1)], 2))), 128))], 4), S("button", {
          type: "button",
          class: "reset chart-type",
          onClick: V[2] || (V[2] = L => m(a)(m(o) === m(oe).LINEAR ? m(oe).CANDLESTICK : m(oe).LINEAR))
        }, [m(o) === m(oe).CANDLESTICK ? (_(), B(C, {
          key: 0,
          name: "chart-line",
          class: "icon"
        })) : (_(), B(C, {
          key: 1,
          name: "candle-chart",
          class: "icon"
        }))])]), !m(e) || !m(e).data.points.length ? (_(), E("div", vp, [V[4] || (V[4] = S("img", {
          src: Zs,
          class: "lines"
        }, null, -1)), V[5] || (V[5] = S("img", {
          src: Br,
          class: "empty"
        }, null, -1)), S("div", gp, [V[3] || (V[3] = S("div", {
          class: "dot"
        }, null, -1)), S("div", bp, A(("t" in z ? z.t : m(O))("memepad.jetton.chart.coming_text")), 1)])])) : (_(), E("div", yp, [m($) ? (_(), E("div", {
          key: 0,
          class: ae(["pnl-label", m($).cls])
        }, A(m($).label), 3)) : ht("", !0), S("div", {
          ref_key: "container",
          ref: c,
          class: "chart-container"
        }, null, 512), V[6] || (V[6] = S("img", {
          src: Zs,
          class: "lines"
        }, null, -1))]))])
      }
    }
  }),
  wp = lt(_p, [
    ["__scopeId", "data-v-0b38d5c9"]
  ]),
  Sp = {
    class: "label"
  },
  Mp = {
    class: "memepad-jetton-actions-controls-unlock-sheet"
  },
  kp = {
    class: "icon-wrapper"
  },
  xp = {
    class: "title"
  },
  Cp = {
    class: "subtitle"
  },
  Ep = {
    class: "buttons-wrapper"
  },
  Tp = st({
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
        e = tt(!1),
        i = () => {
          e.value = !1, t.unlockSuccessCallback()
        };
      return (n, o) => {
        const r = te,
          l = fo,
          a = Ts,
          h = mo;
        return _(), E(dt, null, [R(r, {
          class: "memepad-jetton-actions-controls-unlock-button",
          icon: "lock-open",
          type: m(Rt).HIGHLIGHT,
          fill: "",
          "icon-align": "left",
          onClick: o[0] || (o[0] = c => e.value = !0)
        }, {
          default: Y(() => [S("div", Sp, A(("t" in n ? n.t : m(O))("memepad.jetton.unlock.btn")), 1)]),
          _: 1
        }, 8, ["type"]), R(h, {
          modelValue: m(e),
          "onUpdate:modelValue": o[1] || (o[1] = c => bt(e) ? e.value = c : null)
        }, {
          default: Y(() => [S("div", Mp, [S("div", kp, [R(l, {
            src: m(uo)(n.jetton.iconFileKey),
            size: 80
          }, null, 8, ["src"])]), S("div", xp, A(("t" in n ? n.t : m(O))("memepad.jetton.unlock.sheet.title", {
            ticker: n.jetton.ticker
          })), 1), S("div", Cp, A(("t" in n ? n.t : m(O))("memepad.jetton.unlock.sheet.subtitle", {
            ticker: n.jetton.ticker
          })), 1), S("div", Ep, [R(a, {
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
  zp = lt(Tp, [
    ["__scopeId", "data-v-d3967752"]
  ]),
  Ip = {
    class: "label"
  },
  Pp = ["value", "name"],
  $p = st({
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
        e = Fr(go);
      if (!e) throw ks("Tabs injection not defined");
      const i = j(() => t.type ?? e.type.value),
        n = j({
          get() {
            return e.value.value === t.value
          },
          set() {
            e.updateValue(t.value)
          }
        });
      return (o, r) => (_(), E("label", {
        class: ae(["kit-tab", [`is-${m(i).toLowerCase()}`, {
          "is-active": m(n)
        }]])
      }, [S("span", Ip, A(s.label), 1), Ft(S("input", {
        "onUpdate:modelValue": r[0] || (r[0] = l => bt(n) ? n.value = l : null),
        type: "radio",
        value: s.value,
        name: m(e).name
      }, null, 8, Pp), [
        [as, m(n)]
      ])], 2))
    }
  }),
  Ir = lt($p, [
    ["__scopeId", "data-v-f0048470"]
  ]),
  Lp = {
    class: "list"
  },
  jp = st({
    __name: "KitTabs",
    props: ui({
      items: {
        type: Array,
        default: void 0
      },
      type: {
        type: String,
        default: hs.DEFAULT
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(s) {
      const t = s,
        e = di(s, "modelValue"),
        i = j(() => {
          var n;
          return ((n = t.items) == null ? void 0 : n.map(o => typeof o == "string" ? {
            value: o,
            label: o
          } : o)) ?? []
        });
      return Ur(go, {
        value: j(() => e.value),
        updateValue: n => {
          e.value = n
        },
        type: j(() => t.type),
        name: Kr()
      }), (n, o) => {
        const r = Ir,
          l = Hr("horizontal-wheel-scroll");
        return _(), E("div", {
          class: ae(["kit-tabs", `is-${s.type.toLowerCase()}`])
        }, [Ft((_(), E("div", Lp, [Jr(n.$slots, "default", {}, void 0, !0), (_(!0), E(dt, null, de(m(i), a => (_(), B(r, {
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
  Rp = lt(jp, [
    ["__scopeId", "data-v-74a842a0"]
  ]),
  Ap = {
    class: "memepad-jetton-action-controls-action-button"
  },
  Op = {
    class: "info"
  },
  Dp = {
    class: "label"
  },
  Vp = {
    class: "label"
  },
  Wp = st({
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
        e = () => Bt().memepad.memepadJettonTradeDisabledButtonClick(),
        i = j(() => Cs(t.value)),
        n = j(() => t.tradePendings[t.tab]),
        o = j(() => !!(n.value || !t.inputState || t.inputState.loading)),
        r = j(() => o.value ? !1 : !!(i.value.isZero() || !t.inputState || t.inputState.error));
      return (l, a) => {
        var p, v, b, y, g, x, k;
        const h = ko,
          c = Ne,
          u = xo,
          d = wo,
          f = te;
        return _(), E("div", Ap, [S("div", Op, [l.inputState ? (_(), E(dt, {
          key: 0
        }, [l.inputState.balanceLabel ? (_(), B(h, {
          key: 0,
          balance: l.inputState.balanceLabel
        }, null, 8, ["balance"])) : (_(), B(c, {
          key: 1,
          class: "skeleton"
        })), l.inputState.error || l.inputState.feesInfo ? (_(), B(u, {
          key: 2,
          details: (p = l.inputState.feesInfo) == null ? void 0 : p.details,
          "total-label": (v = l.inputState.feesInfo) == null ? void 0 : v.totalLabel,
          "error-message": (b = l.inputState.error) == null ? void 0 : b.message
        }, null, 8, ["details", "total-label", "error-message"])) : (_(), B(c, {
          key: 3,
          class: "skeleton"
        }))], 64)) : (_(), E(dt, {
          key: 1
        }, [R(c, {
          class: "skeleton"
        }), R(c, {
          class: "skeleton"
        })], 64))]), ((g = (y = l.inputState) == null ? void 0 : y.error) == null ? void 0 : g.type) === ("MEMEPAD_TRADE_ERRORS" in l ? l.MEMEPAD_TRADE_ERRORS : m(ll)).NOT_ENOUGH_TOKEN ? (_(), B(d, {
          key: 0,
          "jetton-shortname": l.jetton.shortname,
          "jetton-address": l.jetton.address,
          details: l.inputState.error.details,
          "input-value": l.tab === m(q).BUY ? m(i).toNumber() : void 0,
          "value-balance": (x = l.balances.tokenBalance) == null ? void 0 : x.value.toNumber(),
          "need-more-value": (k = l.inputState.error.needMoreValue) == null ? void 0 : k.toNumber(),
          source: l.tab === m(q).BUY ? ("ANALYTICS_MEMEPAD_OPERATION_SOURCE" in l ? l.ANALYTICS_MEMEPAD_OPERATION_SOURCE : m(fe)).BUY : ("ANALYTICS_MEMEPAD_OPERATION_SOURCE" in l ? l.ANALYTICS_MEMEPAD_OPERATION_SOURCE : m(fe)).SELL
        }, null, 8, ["jetton-shortname", "jetton-address", "details", "input-value", "value-balance", "need-more-value", "source"])) : (_(), E("div", {
          key: 1,
          onPointerdown: a[2] || (a[2] = () => m(r) && e())
        }, [l.tab === m(q).BUY ? (_(), B(f, {
          key: 0,
          fill: "",
          size: m(Jt).LARGE,
          type: m(Rt).HIGHLIGHT,
          loading: m(o),
          disabled: m(r),
          onClick: a[0] || (a[0] = I => l.$emit("trade"))
        }, {
          default: Y(() => [S("div", Dp, A(("t" in l ? l.t : m(O))("memepad.jetton.buy_button_label", {
            ticker: l.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "type", "loading", "disabled"])) : ht("", !0), l.tab === m(q).SELL ? (_(), B(f, {
          key: 1,
          fill: "",
          size: m(Jt).LARGE,
          type: m(Rt).PINK,
          loading: m(o),
          disabled: m(r),
          onClick: a[1] || (a[1] = I => l.$emit("trade"))
        }, {
          default: Y(() => [S("div", Vp, A(("t" in l ? l.t : m(O))("memepad.jetton.sell_button_label", {
            ticker: l.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "type", "loading", "disabled"])) : ht("", !0)], 32))])
      }
    }
  }),
  Np = lt(Wp, [
    ["__scopeId", "data-v-4daf2cc3"]
  ]),
  Bp = {
    class: "memepad-jetton-actions-controls-presets"
  },
  Fp = ["onClick"],
  Up = st({
    __name: "Presets",
    props: ui({
      tokenTicker: {},
      tokenBalance: {},
      jettonBalance: {},
      tab: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(s) {
      const t = s,
        e = di(s, "modelValue"),
        i = j(() => {
          var a, h;
          const n = c => ({
              label: `${c} ${t.tokenTicker}`,
              value: new ci(c)
            }),
            o = (c, u) => ({
              label: c === 100 ? "MAX" : `${c}%`,
              value: u ?? new ci(0)
            }),
            r = (a = t.tokenBalance) == null ? void 0 : a.value,
            l = (h = t.jettonBalance) == null ? void 0 : h.value;
          return t.tab === q.BUY ? [n(1), n(5), n(10), o(100, r)] : [o(25, l == null ? void 0 : l.mul(.25)), o(50, l == null ? void 0 : l.mul(.5)), o(75, l == null ? void 0 : l.mul(.75)), o(100, l)]
        });
      return (n, o) => (_(), E("div", Bp, [(_(!0), E(dt, null, de(m(i), r => (_(), E("button", {
        key: r.label,
        type: "button",
        class: "item reset",
        onClick: l => e.value = r.value.toFixed()
      }, A(r.label), 9, Fp))), 128))]))
    }
  }),
  Kp = lt(Up, [
    ["__scopeId", "data-v-a68cf1cc"]
  ]),
  Hp = {
    class: "content"
  },
  Jp = {
    class: "subtitle"
  },
  Xp = {
    key: 0
  },
  Yp = {
    class: "label"
  },
  Gp = st({
    __name: "TradeModal",
    props: ui({
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
    emits: ui(["trade", "unlock-success", "open-slippage", "close"], ["update:modelValue", "update:tradePendings"]),
    setup(s, {
      emit: t
    }) {
      const e = s,
        i = t,
        n = di(s, "modelValue"),
        o = di(s, "tradePendings"),
        r = tt(),
        l = tt(e.jettonSdk.getSlippage()),
        a = tt("0"),
        h = j(() => Cs(a.value)),
        c = j({
          get: () => a.value,
          set: C => {
            a.value = C
          }
        }),
        u = j({
          get: () => a.value,
          set: C => {
            a.value = x(C)
          }
        }),
        d = j(() => Xr(e.jetton.networkType)),
        {
          state: f,
          updateInputState: p
        } = z(),
        {
          useWalletOperationsErrorsStack: v,
          getTokenUsdValue: b
        } = Es(),
        y = V(),
        g = () => {
          var C;
          (C = r.value) == null || C.focusOnInput()
        },
        x = C => Ut(C, {
          join: "emptyFractional"
        });
      he(() => n.value, () => {
        a.value = "0"
      });
      const k = j(() => {
          if (!(!f.value || f.value.loading)) {
            if (h.value.isZero()) return n.value === q.BUY ? `0 ${e.jetton.ticker}` : "0 TON";
            if (!f.value.feesInfo || !f.value.ready) return "";
            if (n.value === q.SELL) {
              const C = f.value.tradeInfo.maxReceive,
                L = `${qs(C)} TON`,
                F = b({
                  networkType: e.jetton.networkType,
                  value: C
                });
              if (!F) return L;
              const H = vo(F);
              return `${L} (≈$${H})`
            } else {
              const C = f.value.tradeInfo.maxReceive;
              return `≈${Ut(C,{accuracy:2})} ${e.jetton.ticker}`
            }
          }
        }),
        I = j(() => {
          const C = e.balances.tokenBalance;
          if (!C) return;
          const L = e.jettonSdk.getMaxBuyAmount({
            tokenBalance: C
          });
          return ni(L, "TON")
        });
      let N;
      const D = () => {
        Bt().memepad.memepadJettonSlippageButtonClick(), i("open-slippage")
      };
      he(() => [a.value, e.balances], () => p(), {
        deep: !0
      });
      const $ = Qs(C => Bt().memepad.memepadJettonTradeInputUpdate(C), 300).debouncedFunction;
      he(h, C => $({
        value: C.toNumber(),
        type: n.value
      })), We(() => {
        N == null || N.destroy()
      }), bo().initHandler(() => {
        i("close")
      }, "memepad-jetton-shortname-trade-trade-modal");

      function z() {
        const C = j(() => e.jettonSdk.tradeStateControls.getImmediateState({
            operation: n.value,
            amount: h.value
          })),
          L = tt(e.jettonSdk.tradeStateControls.getEmptyState({
            operation: n.value
          })),
          F = j(() => C.value || L.value);
        let H = new AbortController;
        const nt = () => {
            H.abort(), H = new AbortController
          },
          {
            debouncedFunction: U
          } = Qs(async () => {
            if (nt(), C.value) return;
            const {
              signal: J
            } = H, ot = await e.jettonSdk.tradeStateControls.getState({
              operation: n.value,
              amount: h.value
            });
            J.aborted || (L.value = ot)
          }, 600);
        return {
          state: F,
          updateInputState: () => {
            L.value = void 0, U()
          }
        }
      }

      function V() {
        const C = Bt(),
          {
            addErrorToStackAndCheck: L
          } = v();
        return async () => {
          if (!f.value || !f.value.ready) return;
          const F = n.value,
            H = new ci(h.value),
            nt = f.value.tradeInfo,
            U = e.jetton.ticker,
            Z = e.jetton.id,
            J = e.jetton.address,
            ot = e.jetton.shortname;
          await (async () => {
            o.value[F] = !0;
            const ct = () => {
                const W = ni(F === q.BUY ? nt.minReceive : H, U),
                  X = ni(F === q.BUY ? H : nt.minReceive, "TON"),
                  wt = F === q.BUY ? O("memepad.jetton.buy.failed_alert", {
                    askLabel: W.frontendWithSymbol,
                    offerLabel: X.frontendWithSymbol
                  }) : O("memepad.jetton.sell.failed_alert", {
                    askLabel: W.frontendWithSymbol,
                    offerLabel: X.frontendWithSymbol
                  });
                ai().error(wt)
              },
              K = await (F === q.BUY ? e.jettonSdk.buyJetton({
                tons: H,
                tradeInfoParams: nt
              }) : e.jettonSdk.sellJetton({
                jettons: H,
                tradeInfoParams: nt
              }));
            if (K.err) {
              Yr().error("Memepad jetton trade error", K.extra), o.value[F] = !1, ct(), L({
                value: H.toFixed(),
                operation: F
              }, {
                source: F === q.BUY ? fe.BUY : fe.SELL
              });
              return
            }
            i("trade"), N = F === q.BUY ? e.jettonSdk.getWaitForBuyStatus() : e.jettonSdk.getWaitForSellStatus(), await co(5e3);
            const et = await N.exec({
                transactionHash: K.data
              }),
              at = et ? "success" : "failed";
            if (F === q.BUY ? C.memepad.memepadJettonBuy({
                status: at,
                jettonId: Z,
                jettonShortname: ot,
                jettonAddress: J,
                purchaseAmount: H.toNumber()
              }) : C.memepad.memepadJettonSell({
                status: at,
                jettonId: Z,
                jettonShortname: ot,
                jettonAddress: J,
                purchaseAmount: nt.maxReceive.toNumber()
              }), !et) {
              o.value[F] = !1, ct();
              return
            }
            const T = F === q.BUY ? O("memepad.jetton.buy.success_alert", {
              ticker: U,
              label: `${qs(H)} TON`
            }) : O("memepad.jetton.sell.success_alert", {
              label: `${Wt(H).full} ${U}`
            });
            ai().success(T), o.value[F] = !1, e.tradeSuccessCallback()
          })()
        }
      }
      return (C, L) => {
        const F = Ir,
          H = Rp,
          nt = So,
          U = Ne,
          Z = Ot,
          J = Ts,
          ot = Np,
          ct = xs,
          K = Kp,
          et = Mo;
        return _(), B(et, {
          class: "memepad-jetton-trade-modal"
        }, {
          "top-center": Y(() => [R(H, {
            modelValue: n.value,
            "onUpdate:modelValue": L[0] || (L[0] = at => n.value = at),
            class: "tabs"
          }, {
            default: Y(() => [R(F, {
              label: ("t" in C ? C.t : m(O))("memepad.jetton.buy_tab"),
              value: m(q).BUY,
              type: m(hs).PRIMARY,
              class: "buy-tab"
            }, null, 8, ["label", "value", "type"]), R(F, {
              label: ("t" in C ? C.t : m(O))("memepad.jetton.sell_tab"),
              value: m(q).SELL,
              type: m(hs).SECONDARY,
              class: "sell-tab"
            }, null, 8, ["label", "value", "type"])]),
            _: 1
          }, 8, ["modelValue"])]),
          inner: Y(() => [S("div", Hp, [(_(), B(nt, {
            ref_key: "actionControlsInputComp",
            ref: r,
            key: n.value,
            modelValue: m(c),
            "onUpdate:modelValue": L[1] || (L[1] = at => bt(c) ? c.value = at : null),
            postfix: n.value === "buy" ? "TON" : C.jetton.ticker,
            modifier: x,
            centered: "",
            onBlur: g
          }, null, 8, ["modelValue", "postfix"])), S("div", Jp, [m(k) ? (_(), E("span", Xp, A(m(k)), 1)) : m(k) === void 0 ? (_(), B(U, {
            key: 1,
            class: "skeleton"
          })) : ht("", !0)]), S("button", {
            type: "button",
            class: "reset slippage-btn",
            onClick: D
          }, [S("span", Yp, A(`${("t"in C?C.t:m(O))("memepad.jetton.slippage_btn")} ${m(l)}%`), 1), R(Z, {
            name: "arrow-caret-down",
            class: "icon"
          })])])]),
          "bottom-action": Y(() => [R(ct, {
            "force-loading": C.unlockEnabled === void 0 && C.isReleased
          }, {
            default: Y(() => [C.unlockEnabled ? (_(), B(J, {
              key: 0,
              jetton: C.jetton,
              "jetton-information": C.jettonInformation,
              "jetton-sdk": C.jettonSdk,
              balances: C.balances,
              onUnlocked: L[2] || (L[2] = at => C.$emit("unlock-success"))
            }, null, 8, ["jetton", "jetton-information", "jetton-sdk", "balances"])) : (_(), B(ot, {
              key: 1,
              value: m(a),
              tab: n.value,
              jetton: C.jetton,
              "trade-pendings": o.value,
              balances: C.balances,
              "input-state": m(f),
              onTrade: m(y)
            }, null, 8, ["value", "tab", "jetton", "trade-pendings", "balances", "input-state", "onTrade"]))]),
            _: 1
          }, 8, ["force-loading"])]),
          "bottom-helpers": Y(() => [R(K, {
            modelValue: m(u),
            "onUpdate:modelValue": L[3] || (L[3] = at => bt(u) ? u.value = at : null),
            tab: n.value,
            balances: C.balances,
            "token-balance": m(I),
            "jetton-balance": C.balances.jettonBalance,
            "token-ticker": m(d)
          }, null, 8, ["modelValue", "tab", "balances", "token-balance", "jetton-balance", "token-ticker"])]),
          _: 1
        })
      }
    }
  }),
  Zp = lt(Gp, [
    ["__scopeId", "data-v-de76260b"]
  ]),
  qp = {
    class: "title"
  },
  Qp = {
    class: "content"
  },
  tm = {
    class: "actions"
  },
  em = {
    key: 1,
    class: "text"
  },
  im = 1,
  sm = 99,
  nm = st({
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
        n = tt(),
        o = () => {
          var c;
          (c = n.value) == null || c.focusOnInput()
        },
        r = tt(e.jettonSdk.getSlippage().toString()),
        l = j(() => Cs(r.value)),
        a = j(() => l.value.lt(im) ? O("memepad.jetton.slippage.error_message.too_low") : l.value.gt(sm) ? O("memepad.jetton.slippage.error_message.too_high") : ""),
        h = () => {
          if (a.value) return;
          const c = parseFloat(r.value);
          e.jettonSdk.getSlippage() !== c ? (Bt().memepad.memepadJettonSlippageUpdate({
            value: c
          }), e.jettonSdk.updateSlippage(c), i("slippage-updated")) : i("close")
        };
      return bo().initHandler(() => {
        i("close")
      }, "memepad-jetton-shortname-trade-slippage-modal"), (c, u) => {
        const d = So,
          f = yo,
          p = te,
          v = Mo;
        return _(), B(v, {
          class: "memepad-jetton-action-controls-slippage-modal"
        }, {
          "top-center": Y(() => [S("div", qp, A(("t" in c ? c.t : m(O))("memepad.jetton.slippage.title")), 1)]),
          inner: Y(() => [S("div", Qp, [R(d, {
            ref_key: "actionControlsInputComp",
            ref: n,
            modelValue: m(r),
            "onUpdate:modelValue": u[0] || (u[0] = b => bt(r) ? r.value = b : null),
            postfix: "%",
            modifier: b => ("formatFloatLine" in c ? c.formatFloatLine : m(Ut))(b, {
              join: "emptyFractional"
            }),
            centered: "",
            onBlur: o
          }, null, 8, ["modelValue", "modifier"]), u[1] || (u[1] = S("div", {
            class: "subtitle-compensator"
          }, null, -1))])]),
          "bottom-action": Y(() => [S("div", tm, [m(a) ? (_(), B(f, {
            key: 0,
            "error-message": m(a)
          }, null, 8, ["error-message"])) : (_(), E("div", em, A(("t" in c ? c.t : m(O))("memepad.jetton.slippage.text")), 1)), R(p, {
            label: ("t" in c ? c.t : m(O))("memepad.jetton.slippage.done_btn"),
            fill: "",
            size: m(Jt).LARGE,
            type: m(a) ? m(Rt).HIGHLIGHT : m(Rt).PRIMARY,
            disabled: !!m(a),
            onClick: h
          }, null, 8, ["label", "size", "type", "disabled"])])]),
          _: 1
        })
      }
    }
  }),
  om = lt(nm, [
    ["__scopeId", "data-v-11aff6d5"]
  ]),
  rm = {
    class: "memepad-jetton-action-controls-trade-buttons"
  },
  lm = {
    class: "label"
  },
  am = {
    class: "label"
  },
  hm = st({
    __name: "TradeButtons",
    props: {
      tradePendings: {}
    },
    emits: ["click"],
    setup(s, {
      emit: t
    }) {
      const e = t,
        i = Bt(),
        n = () => {
          i.memepad.memepadTradeButtonBuyClick(), e("click", q.BUY)
        },
        o = () => {
          i.memepad.memepadTradeButtonSellClick(), e("click", q.SELL)
        };
      return (r, l) => {
        const a = te;
        return _(), E("div", rm, [R(a, {
          class: "buy-button",
          type: m(Rt).HIGHLIGHT,
          loading: r.tradePendings[m(q).BUY],
          onClick: n
        }, {
          default: Y(() => [S("span", lm, A(("t" in r ? r.t : m(O))("memepad.jetton.buy_button_preview_label")), 1)]),
          _: 1
        }, 8, ["type", "loading"]), R(a, {
          class: "sell-button",
          type: m(Rt).PINK,
          loading: r.tradePendings[m(q).SELL],
          onClick: o
        }, {
          default: Y(() => [S("span", am, A(("t" in r ? r.t : m(O))("memepad.jetton.sell_button_preview_label")), 1)]),
          _: 1
        }, 8, ["type", "loading"])])
      }
    }
  }),
  cm = lt(hm, [
    ["__scopeId", "data-v-3f7ac605"]
  ]),
  um = {
    class: "memepad-jetton-action-controls"
  },
  dm = st({
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
        i = tt(q.BUY),
        n = Gr({
          [q.BUY]: !1,
          [q.SELL]: !1
        }),
        o = tt(),
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
        const d = zp,
          f = Zp,
          p = om,
          v = cm,
          b = xs;
        return _(), E("div", um, [R(b, {
          "force-loading": c.unlockEnabled === void 0 && c.isReleased,
          "button-size": m(Jt).MEDIUM
        }, {
          default: Y(() => [c.unlockEnabled ? (_(), B(d, {
            key: 0,
            jetton: c.jetton,
            "jetton-information": c.jettonInformation,
            "jetton-sdk": c.jettonSdk,
            "unlock-success-callback": h,
            balances: c.balances
          }, null, 8, ["jetton", "jetton-information", "jetton-sdk", "balances"])) : (_(), E(dt, {
            key: 1
          }, [m(o) === "trade" ? (_(), B(f, {
            key: 0,
            modelValue: m(i),
            "onUpdate:modelValue": u[0] || (u[0] = y => bt(i) ? i.value = y : null),
            "trade-pendings": m(n),
            "onUpdate:tradePendings": u[1] || (u[1] = y => bt(n) ? n.value = y : null),
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
          }, null, 8, ["modelValue", "trade-pendings", "jetton", "jetton-information", "jetton-bcl-data", "balances", "is-released", "unlock-enabled", "jetton-sdk"])) : ht("", !0), m(o) === "slippage" ? (_(), B(p, {
            key: 1,
            "jetton-sdk": c.jettonSdk,
            onSlippageUpdated: u[5] || (u[5] = y => o.value = "trade"),
            onClose: u[6] || (u[6] = y => o.value = "trade")
          }, null, 8, ["jetton-sdk"])) : ht("", !0), R(v, {
            "trade-pendings": m(n),
            onClick: r
          }, null, 8, ["trade-pendings"])], 64))]),
          _: 1
        }, 8, ["force-loading", "button-size"])])
      }
    }
  }),
  fm = lt(dm, [
    ["__scopeId", "data-v-34524c7a"]
  ]),
  pm = {
    class: "memepad-jetton-page-trade"
  },
  mm = st({
    __name: "PageTrade",
    props: {
      jetton: {},
      jettonInformation: {},
      jettonPnl: {},
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
        const r = Kl,
          l = eu,
          a = $u,
          h = wp,
          c = dl,
          u = fm;
        return _(), E("div", pm, [R(r, {
          jetton: n.jetton,
          "jetton-information": n.jettonInformation,
          "is-released": n.isReleased,
          onShare: o[0] || (o[0] = d => n.$emit("share")),
          onCopy: o[1] || (o[1] = d => n.$emit("copy"))
        }, null, 8, ["jetton", "jetton-information", "is-released"]), R(l, {
          jetton: n.jetton,
          "jetton-information": n.jettonInformation
        }, null, 8, ["jetton", "jetton-information"]), R(a, Zr(qr(m(i))), null, 16), R(h, {
          "jetton-pnl": n.jettonPnl,
          "jetton-shortname": n.jetton.shortname,
          class: "chart"
        }, null, 8, ["jetton-pnl", "jetton-shortname"]), R(c, {
          jetton: n.jetton,
          mode: "trade",
          class: "reactions"
        }, null, 8, ["jetton"]), R(u, {
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
  vm = lt(mm, [
    ["__scopeId", "data-v-fbdd5ca0"]
  ]),
  os = (s, t) => {
    let e = !1,
      i;
    i = he(s, n => {
      e || gt(n) && (e = !0, i == null || i(), t(n.data))
    }, {
      immediate: !0
    })
  },
  jm = st({
    inheritAttrs: !1,
    __name: "trade",
    emits: ["share", "copy"],
    setup(s) {
      const t = Qr(),
        e = j(() => t.jetton),
        i = j(() => t.jettonShortname),
        n = j(() => t.jettonInformation),
        o = j(() => tl.Address.parse(e.value.address).equals(e.value.masterContractAddress)),
        r = j(() => {
          var D;
          return (D = el().getters.getUser.value) == null ? void 0 : D.referrerToken
        }),
        {
          addresses: l,
          getNetworkTokenBalance: a
        } = Es(),
        h = il().state,
        {
          jettonBalance: c,
          jettonUnlockEnabled: u,
          jettonPnl: d,
          ...f
        } = N(),
        {
          _flow: p,
          chartMarketCap: v
        } = zr({
          jettonShortname: i.value
        }),
        b = () => f.update(),
        y = () => f.resetAndUpdateUnlocked(),
        g = j(() => ({
          jettonBalance: c.value ? ni(c.value, e.value.ticker) : void 0,
          tokenBalance: a(e.value.networkType)
        })),
        x = j(() => {
          if (!(!n.value || !l.value)) return ol({
            addresses: l.value,
            jetton: e.value,
            isReleased: n.value.isReleased,
            sdkType: e.value.sdkType,
            dexType: e.value.dexType,
            networkType: e.value.networkType,
            balances: g.value,
            referrerToken: r.value
          })
        }),
        k = () => {
          f.init(), p.init()
        },
        I = () => {
          p.destroy(), f.destroy()
        };
      k(), We(() => {
        I()
      });

      function N() {
        const D = tt(),
          $ = tt(),
          z = tt();
        let V, C, L;
        const F = {
          BALANCE_UPDATE: 2e4,
          UNLOCK_ENABLED_UPDATE: 6e4,
          PNL_UPDATE: 6e4
        };

        function H() {
          const J = () => !x.value || h.value.status !== "connected" ? ie() : Mt({
            jettonSdk: x.value
          });
          os(J, () => {
            V = Ri(async () => {
              const K = J();
              if (!gt(K)) return ie();
              const et = await K.data.jettonSdk.getUserJettonBalance();
              return Mt((gt(et) ? et.data : D.value) || D.value)
            }, K => D.value = K, F.BALANCE_UPDATE), V.exec()
          });
          const ot = () => !x.value || !n.value || h.value.status !== "connected" || !D.value || !n.value.isReleased ? ie() : Mt({
            jettonSdk: x.value,
            balance: D.value,
            jettonInformation: n.value
          });
          os(ot, () => {
            C = Ri(async () => {
              if (o.value) return Mt(!1);
              if ($.value === !1) return Mt(!1);
              const K = ot();
              if (!gt(K)) return ie();
              const et = await K.data.jettonSdk.getUnlockEnabled();
              return Mt(gt(et) ? et.data : $.value)
            }, K => $.value = K, F.UNLOCK_ENABLED_UPDATE), C == null || C.exec()
          });
          const ct = () => !n.value || h.value.status !== "connected" ? ie() : Mt({
            walletAddress: h.value.address,
            jettonShortname: e.value.shortname
          });
          os(ct, () => {
            L = Ri(async () => {
              const K = ct();
              if (!gt(K)) return ie();
              const et = await hi.getMemepadJettonPnl(K.data.jettonShortname, K.data.walletAddress);
              return Mt((gt(et) ? et.data : z.value) || z.value)
            }, K => z.value = K, F.PNL_UPDATE), L == null || L.exec()
          })
        }
        return {
          init: H,
          destroy: () => {
            V == null || V.destroy(), C == null || C.destroy(), L == null || L.destroy(), D.value = void 0, $.value = void 0, z.value = void 0
          },
          update: () => {
            V == null || V.exec(), C == null || C.exec(), L == null || L.exec()
          },
          resetAndUpdateUnlocked: () => {
            $.value = void 0, C == null || C.exec()
          },
          jettonBalance: j(() => D.value),
          jettonUnlockEnabled: j(() => $.value),
          jettonPnl: j(() => z.value)
        }
      }
      return (D, $) => {
        const z = sl,
          V = Ll,
          C = vm;
        return !m(n) || !m(l) || !m(x) || m(n).status === m(tn).IN_PROGRESS ? (_(), B(z, {
          key: 0
        })) : m(n).status === m(tn).LISTED_TO_DEX ? (_(), B(V, {
          key: 1,
          jetton: m(e),
          "jetton-information": m(n),
          "unlock-enabled": m(u),
          "jetton-sdk": m(x),
          balances: m(g)
        }, null, 8, ["jetton", "jetton-information", "unlock-enabled", "jetton-sdk", "balances"])) : (_(), B(C, {
          key: 2,
          jetton: m(e),
          "jetton-information": m(n),
          "jetton-pnl": m(d),
          "chart-market-cap": m(v),
          "is-released": m(n).isReleased,
          "unlock-enabled": m(u),
          "jetton-sdk": m(x),
          balances: m(g),
          onTradeSuccess: b,
          onUnlockSuccess: y,
          onShare: $[0] || ($[0] = L => D.$emit("share", "trade")),
          onCopy: $[1] || ($[1] = L => D.$emit("copy", "trade"))
        }, null, 8, ["jetton", "jetton-information", "jetton-pnl", "chart-market-cap", "is-released", "unlock-enabled", "jetton-sdk", "balances"]))
      }
    }
  });
export {
  jm as
  default
};