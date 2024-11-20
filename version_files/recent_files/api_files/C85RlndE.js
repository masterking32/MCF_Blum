import {
  _ as $n
} from "./WqPPS6k-.js";
import {
  _ as Ln
} from "./CGuwd9aU.js";
import {
  _ as En
} from "./B4j_Jksi.js";
import {
  d as K,
  a as g,
  c as k,
  k as C,
  b as _,
  t as W,
  N as Pt,
  j as X,
  m as A,
  x as F,
  W as st,
  X as Lt,
  g as it,
  e as v,
  bd as Tn,
  F as x,
  ab as Ss,
  r as O,
  o as We,
  f as I,
  B as Et,
  ba as Rt,
  be as Ri,
  G as xe,
  C as Ot,
  aY as me,
  V as at,
  A as xn,
  aZ as pe,
  bf as Ii,
  ay as Ht,
  az as he,
  M as Pn,
  aW as Wi,
  Y as Tt,
  aS as Bi,
  aU as Ai,
  bg as ie,
  bh as se,
  av as gt,
  aJ as It,
  n as Yt,
  w as Gt,
  bi as ds,
  bj as Ds,
  bk as Vn,
  P as Di,
  ai as Pe,
  bl as Rn,
  bm as Ni,
  L as Oi,
  bn as fs,
  bo as In,
  au as Wn,
  a8 as Bn,
  aB as Ft,
  aj as An,
  bp as Ui,
  bq as ms,
  af as bt,
  br as Y,
  aX as Fi,
  bs as ht,
  bt as Ns,
  bu as Dn,
  bv as Nn,
  bw as On,
  bx as Un,
  by as Fn,
  bz as Jn,
  bA as Kn,
  bB as Xn,
  bC as Hn,
  b0 as Ji,
  am as Yn,
  an as ps,
  ah as Gn,
  ap as Zn,
  bD as qn,
  bE as Qn,
  ao as to,
  b1 as eo,
  ax as so,
  J as Je,
  u as io,
  bF as ge,
  bG as _e,
  b8 as no,
  bH as oo,
  a9 as te,
  bI as ro,
  bJ as lo,
  bK as ho,
  bL as ao,
  aR as co,
  aT as uo,
  K as we,
  bb as ft,
  bM as fo
} from "./ulDqqcK5.js";
import {
  _ as Be
} from "./BHm9mJG9.js";
import {
  _ as mo
} from "./CxBQokC7.js";
import {
  _ as Ki,
  a as ks,
  m as po,
  s as vo,
  b as bo
} from "./CX7ROeuY.js";
import {
  _ as Cs
} from "./DfdpEqBk.js";
import {
  _ as go,
  u as _o
} from "./CArTUWzC.js";
import {
  u as wo
} from "./CqV_Y-E3.js";
import {
  u as yo
} from "./CT6xteUK.js";
import {
  c as Mo
} from "./DPbxm6ol.js";
const So = {
    class: "memepad-jetton-action-controls-balance"
  },
  ko = {
    class: "label"
  },
  Co = K({
    __name: "Balance",
    props: {
      balance: {}
    },
    setup(n) {
      return (t, e) => {
        const s = Pt;
        return g(), k("div", So, [C(s, {
          name: "wallet",
          class: "icon"
        }), _("span", ko, W(t.balance), 1)])
      }
    }
  }),
  Xi = X(Co, [
    ["__scopeId", "data-v-5ed33e11"]
  ]),
  jo = {
    class: "kit-error-message"
  },
  zo = {
    class: "label"
  },
  $o = K({
    __name: "ErrorMessage",
    props: {
      errorMessage: {}
    },
    setup(n) {
      return (t, e) => {
        const s = Pt;
        return g(), k("div", jo, [C(s, {
          name: "circle-warning",
          class: "icon"
        }), _("span", zo, W(t.errorMessage), 1)])
      }
    }
  }),
  Hi = X($o, [
    ["__scopeId", "data-v-f9832edf"]
  ]),
  Lo = {
    type: "button",
    class: "memepad-jetton-action-controls-fees"
  },
  Eo = {
    key: 1,
    class: "fees"
  },
  To = {
    class: "memepad-jetton-action-controls-fees-tooltip-detail"
  },
  xo = {
    key: 0
  },
  Po = {
    class: "label"
  },
  Vo = K({
    __name: "Fees",
    props: {
      details: {},
      totalLabel: {},
      errorMessage: {}
    },
    setup(n) {
      return (t, e) => {
        const s = Hi,
          i = Pt,
          o = mo;
        return g(), k("div", Lo, [t.errorMessage ? (g(), A(s, {
          key: 0,
          "error-message": t.errorMessage
        }, null, 8, ["error-message"])) : t.details && t.totalLabel ? (g(), k("div", Eo, [t.details.length ? (g(), A(o, {
          key: 0,
          "text-min-width": 155,
          alignment: v(Tn).TOP
        }, {
          default: F(() => [C(i, {
            name: "circle-help",
            class: "memepad-jetton-action-controls-fees-tooltip-icon"
          })]),
          inner: F(() => [_("div", To, [(g(!0), k(st, null, Lt(t.details, (r, l) => (g(), k(st, {
            key: r.label
          }, [_("span", null, W(r.label), 1), l !== t.details.length - 1 ? (g(), k("br", xo)) : it("", !0)], 64))), 128))])]),
          _: 1
        }, 8, ["alignment"])) : it("", !0), _("span", Po, W(t.totalLabel), 1)])) : it("", !0)])
      }
    }
  }),
  Yi = X(Vo, [
    ["__scopeId", "data-v-a277f7f4"]
  ]),
  Ro = {
    class: "memepad-jetton-action-controls-unlock-button"
  },
  Io = {
    class: "info"
  },
  Wo = {
    class: "label"
  },
  Bo = K({
    __name: "UnlockButton",
    props: {
      jetton: {},
      jettonInformation: {},
      balances: {},
      jettonManagement: {}
    },
    emits: ["unlocked"],
    setup(n, {
      emit: t
    }) {
      const e = n,
        s = x(() => e.jettonManagement.unlockStateControls.getState({
          tonBalance: e.balances.tonBalance,
          jettonBalance: e.balances.jettonBalance,
          jetton: e.jetton
        })),
        i = t,
        o = Ss(),
        r = O(!1),
        l = e.jettonManagement.getWaitForUnlockStatus(e.jetton.address),
        h = async () => {
          if (a.value) return;
          const c = () => xe().bottom.error(I("memepad.jetton.unlock.failed_alert", {
              ticker: e.jetton.ticker
            })),
            u = m => {
              o.memepad.memepadJettonUnlock({
                status: m,
                jettonId: e.jetton.id,
                jettonShortname: e.jetton.shortname,
                jettonAddress: e.jetton.address
              })
            };
          r.value = !0;
          const d = await e.jettonManagement.unlockWallet(e.jetton.address);
          if (!Rt(d)) {
            u("failed"), c();
            return
          }
          await Ri(2e4), await l.exec(d.data) ? (u("success"), i("unlocked"), xe().bottom.success(I("memepad.jetton.unlock.success_alert", {
            ticker: e.jetton.ticker
          }))) : (u("failed"), c()), r.value = !1
        }, a = x(() => !!(r.value || !s.value.feesInfo));
      return We(() => {
        l.destroy()
      }), (c, u) => {
        var w, M;
        const d = Xi,
          f = Be,
          m = Yi,
          p = Ki,
          b = Ot;
        return g(), k("div", Ro, [_("div", Io, [v(s).balanceLabel ? (g(), A(d, {
          key: 0,
          balance: v(s).balanceLabel
        }, null, 8, ["balance"])) : (g(), A(f, {
          key: 1,
          class: "skeleton"
        })), v(s).feesInfo ? (g(), A(m, {
          key: 2,
          details: v(s).feesInfo.details,
          "total-label": v(s).feesInfo.totalLabel,
          "error-message": (w = v(s).error) == null ? void 0 : w.message
        }, null, 8, ["details", "total-label", "error-message"])) : (g(), A(f, {
          key: 3,
          class: "skeleton"
        }))]), (M = v(s).error) != null && M.notEnoughtTon ? (g(), A(p, {
          key: 0,
          "jetton-shortname": c.jetton.shortname,
          "jetton-address": c.jetton.address
        }, null, 8, ["jetton-shortname", "jetton-address"])) : (g(), A(b, {
          key: 1,
          fill: "",
          icon: "lock-open",
          "icon-align": "left",
          size: v(Et).LARGE,
          class: "button",
          loading: v(a),
          disabled: !!v(s).error,
          onClick: h
        }, {
          default: F(() => [_("div", Wo, W(("t" in c ? c.t : v(I))("memepad.jetton.unlock_btn", {
            ticker: c.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "loading", "disabled"]))])
      }
    }
  }),
  js = X(Bo, [
    ["__scopeId", "data-v-b8dbba79"]
  ]),
  Ao = {
    class: "memepad-jetton-moving-to-dex-page"
  },
  Do = {
    class: "content"
  },
  No = {
    class: "image-wrapper"
  },
  Oo = {
    class: "title"
  },
  Uo = {
    class: "subtitle"
  },
  Fo = {
    class: "wallet-and-button"
  },
  Jo = K({
    __name: "MovingToDexPage",
    props: {
      jetton: {},
      jettonInformation: {},
      unlockEnabled: {
        type: Boolean
      },
      isReleased: {
        type: Boolean
      },
      balances: {},
      jettonManagement: {}
    },
    emits: ["trade-success", "unlock-success"],
    setup(n) {
      const t = n,
        e = O(!1);
      return (s, i) => {
        const o = En,
          r = xn,
          l = pe,
          h = js,
          a = Ot,
          c = ks,
          u = Cs,
          d = Ii;
        return g(), k("div", Ao, [C(o), _("div", Do, [_("div", No, [C(r, {
          size: 342,
          name: "animations/Clover",
          class: "animation"
        }), C(l, {
          src: v(me)(s.jetton.iconFileKey),
          size: 80
        }, null, 8, ["src"])]), _("div", Oo, W(("t" in s ? s.t : v(I))("memepad.moving_to_dex.title")), 1), _("div", Uo, W(("t" in s ? s.t : v(I))("memepad.moving_to_dex.subtitle", {
          ticker: s.jetton.ticker
        })), 1)]), C(u, null, {
          default: F(() => [_("div", Fo, [C(c, {
            "force-loading": s.unlockEnabled === void 0 && s.isReleased
          }, {
            default: F(() => [s.unlockEnabled ? (g(), A(h, {
              key: 0,
              jetton: s.jetton,
              "jetton-information": s.jettonInformation,
              balances: s.balances,
              "jetton-management": s.jettonManagement,
              onUnlocked: i[0] || (i[0] = f => s.$emit("unlock-success"))
            }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])) : (g(), A(a, {
              key: 1,
              label: ("t" in s ? s.t : v(I))("memepad.jetton.share_token_link"),
              fill: "",
              size: v(Et).LARGE,
              onClick: i[1] || (i[1] = f => e.value = !0)
            }, null, 8, ["label", "size"]))]),
            _: 1
          }, 8, ["force-loading"])])]),
          _: 1
        }), C(d, {
          modelValue: v(e),
          "onUpdate:modelValue": i[2] || (i[2] = f => at(e) ? e.value = f : null),
          "jetton-shortname": t.jetton.shortname,
          ticker: s.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])])
      }
    }
  }),
  Ko = X(Jo, [
    ["__scopeId", "data-v-08f5fe7f"]
  ]),
  Xo = {
    class: "header"
  },
  Ho = {
    class: "name"
  },
  Yo = {
    class: "inner"
  },
  Go = {
    key: 0
  },
  Zo = {
    class: "info"
  },
  qo = {
    class: "address"
  },
  Qo = {
    class: "label"
  },
  tr = {
    key: 0,
    class: "nsfw"
  },
  er = {
    class: "label"
  },
  sr = {
    class: "description"
  },
  ir = {
    key: 1,
    class: "socials"
  },
  nr = ["onClick"],
  or = {
    class: "label"
  },
  rr = {
    class: "buttons"
  },
  lr = K({
    __name: "InfoSheet",
    props: Ht({
      jetton: {}
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: Ht(["share"], ["update:modelValue"]),
    setup(n, {
      emit: t
    }) {
      const e = n,
        s = t,
        i = x(() => {
          var h;
          return (h = e.jetton.socials) == null ? void 0 : h.map(a => ({
            ...a,
            ...po(a.type)
          }))
        }),
        o = he(n, "modelValue"),
        {
          copy: r
        } = Pn(),
        l = () => {
          o.value = !1, s("share")
        };
      return (h, a) => {
        const c = pe,
          u = bo,
          d = Pt,
          f = Ot,
          m = Bi;
        return g(), A(m, {
          modelValue: o.value,
          "onUpdate:modelValue": a[2] || (a[2] = p => o.value = p),
          class: "memepad-jetton-info-sheet",
          "no-header-line": ""
        }, {
          title: F(() => [_("div", Xo, [C(c, {
            src: v(me)(h.jetton.iconFileKey),
            size: 24
          }, null, 8, ["src"]), _("span", Ho, W(h.jetton.name), 1)])]),
          default: F(() => {
            var p;
            return [_("div", Yo, [h.jetton.bannerFileKey ? (g(), k("div", Go, [C(u, {
              "banner-file-key": h.jetton.bannerFileKey,
              class: "banner"
            }, null, 8, ["banner-file-key"])])) : it("", !0), _("div", Zo, [_("div", qo, [_("span", Qo, W(("t" in h ? h.t : v(I))("memepad.jetton.info_sheet.address_label", {
              address: ("sliceWalletAddress" in h ? h.sliceWalletAddress : v(Wi))(h.jetton.address)
            })), 1), _("button", {
              type: "button",
              class: "reset copy-button",
              onClick: a[0] || (a[0] = b => v(r)(h.jetton.address))
            }, [C(d, {
              name: "edit-copy",
              class: "icon"
            })])]), h.jetton.isNSFW ? (g(), k("div", tr, [C(d, {
              name: "circle-check-white",
              class: "icon"
            }), _("span", er, W(("t" in h ? h.t : v(I))("memepad.jetton.nsfw")), 1)])) : it("", !0)]), _("div", sr, W(h.jetton.description), 1), (p = v(i)) != null && p.length ? (g(), k("div", ir, [(g(!0), k(st, null, Lt(v(i), b => (g(), k("button", {
              key: b.type,
              type: "button",
              class: "item reset",
              onClick: w => v(vo)(b.type, b.url)
            }, [C(d, {
              name: b.icon,
              class: "icon"
            }, null, 8, ["name"]), _("div", or, W(b.url), 1)], 8, nr))), 128))])) : it("", !0), _("div", rr, [C(f, {
              label: ("t" in h ? h.t : v(I))("memepad.jetton.share_token_link"),
              fill: "",
              size: v(Et).LARGE,
              type: v(Tt).SECONDARY,
              onClick: l
            }, null, 8, ["label", "size", "type"]), C(f, {
              label: ("t" in h ? h.t : v(I))("base.got_it"),
              fill: "",
              size: v(Et).LARGE,
              onClick: a[1] || (a[1] = b => o.value = !1)
            }, null, 8, ["label", "size"])])])]
          }),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  hr = X(lr, [
    ["__scopeId", "data-v-f5a2d880"]
  ]),
  ar = {
    class: "memepad-jetton-header"
  },
  cr = {
    class: "jetton"
  },
  ur = {
    class: "list"
  },
  dr = {
    class: "ticker"
  },
  fr = {
    key: 0,
    class: "rating"
  },
  mr = {
    key: 1,
    class: "released"
  },
  pr = {
    key: 2,
    class: "lifetime"
  },
  vr = {
    class: "label"
  },
  br = {
    class: "right"
  },
  gr = K({
    __name: "Header",
    props: {
      jetton: {},
      jettonInformation: {},
      isReleased: {
        type: Boolean
      }
    },
    emits: ["share"],
    setup(n) {
      const t = O(!1);
      return (e, s) => {
        var l;
        const i = pe,
          o = Pt,
          r = hr;
        return g(), k("div", ar, [_("div", cr, [C(i, {
          src: v(me)(e.jetton.iconFileKey),
          size: 28
        }, null, 8, ["src"]), _("div", ur, [_("div", dr, W(e.jetton.ticker), 1), (l = e.jettonInformation) != null && l.inSpotlight ? (g(), k("div", fr, [C(o, {
          name: "fire",
          class: "icon"
        }), s[4] || (s[4] = _("span", {
          class: "label"
        }, "#1", -1))])) : it("", !0), e.isReleased ? (g(), k("div", mr, [C(o, {
          name: "ship",
          class: "icon"
        }), s[5] || (s[5] = _("span", {
          class: "label"
        }, "STON.fi", -1))])) : (g(), k("div", pr, [C(o, {
          name: "fresh",
          class: "icon"
        }), _("span", vr, W(("getTimeSince" in e ? e.getTimeSince : v(Ai))(e.jetton.releaseTimestamp).label), 1)]))])]), _("div", br, [_("button", {
          type: "button",
          class: "reset share",
          onClick: s[0] || (s[0] = h => e.$emit("share"))
        }, [_("span", null, W(("t" in e ? e.t : v(I))("base.share")), 1)]), _("button", {
          type: "button",
          class: "reset info",
          onClick: s[1] || (s[1] = h => t.value = !0)
        }, [C(o, {
          name: "info",
          class: "icon"
        })])]), C(r, {
          modelValue: v(t),
          "onUpdate:modelValue": s[2] || (s[2] = h => at(t) ? t.value = h : null),
          jetton: e.jetton,
          onShare: s[3] || (s[3] = h => e.$emit("share"))
        }, null, 8, ["modelValue", "jetton"])])
      }
    }
  }),
  _r = X(gr, [
    ["__scopeId", "data-v-722817c5"]
  ]);

function J(n) {
  var t = n.width,
    e = n.height;
  if (t < 0) throw new Error("Negative width is not allowed for Size");
  if (e < 0) throw new Error("Negative height is not allowed for Size");
  return {
    width: t,
    height: e
  }
}

function Wt(n, t) {
  return n.width === t.width && n.height === t.height
}
var wr = function() {
  function n(t) {
    var e = this;
    this._resolutionListener = function() {
      return e._onResolutionChanged()
    }, this._resolutionMediaQueryList = null, this._observers = [], this._window = t, this._installResolutionListener()
  }
  return n.prototype.dispose = function() {
    this._uninstallResolutionListener(), this._window = null
  }, Object.defineProperty(n.prototype, "value", {
    get: function() {
      return this._window.devicePixelRatio
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.subscribe = function(t) {
    var e = this,
      s = {
        next: t
      };
    return this._observers.push(s), {
      unsubscribe: function() {
        e._observers = e._observers.filter(function(i) {
          return i !== s
        })
      }
    }
  }, n.prototype._installResolutionListener = function() {
    if (this._resolutionMediaQueryList !== null) throw new Error("Resolution listener is already installed");
    var t = this._window.devicePixelRatio;
    this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(t, "dppx)")), this._resolutionMediaQueryList.addListener(this._resolutionListener)
  }, n.prototype._uninstallResolutionListener = function() {
    this._resolutionMediaQueryList !== null && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null)
  }, n.prototype._reinstallResolutionListener = function() {
    this._uninstallResolutionListener(), this._installResolutionListener()
  }, n.prototype._onResolutionChanged = function() {
    var t = this;
    this._observers.forEach(function(e) {
      return e.next(t._window.devicePixelRatio)
    }), this._reinstallResolutionListener()
  }, n
}();

function yr(n) {
  return new wr(n)
}
var Mr = function() {
  function n(t, e, s) {
    var i;
    this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = t, this._canvasElementClientSize = J({
      width: this._canvasElement.clientWidth,
      height: this._canvasElement.clientHeight
    }), this._transformBitmapSize = e ?? function(o) {
      return o
    }, this._allowResizeObserver = (i = s == null ? void 0 : s.allowResizeObserver) !== null && i !== void 0 ? i : !0, this._chooseAndInitObserver()
  }
  return n.prototype.dispose = function() {
    var t, e;
    if (this._canvasElement === null) throw new Error("Object is disposed");
    (t = this._canvasElementResizeObserver) === null || t === void 0 || t.disconnect(), this._canvasElementResizeObserver = null, (e = this._devicePixelRatioObservable) === null || e === void 0 || e.dispose(), this._devicePixelRatioObservable = null, this._suggestedBitmapSizeChangedListeners.length = 0, this._bitmapSizeChangedListeners.length = 0, this._canvasElement = null
  }, Object.defineProperty(n.prototype, "canvasElement", {
    get: function() {
      if (this._canvasElement === null) throw new Error("Object is disposed");
      return this._canvasElement
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n.prototype, "canvasElementClientSize", {
    get: function() {
      return this._canvasElementClientSize
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n.prototype, "bitmapSize", {
    get: function() {
      return J({
        width: this.canvasElement.width,
        height: this.canvasElement.height
      })
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.resizeCanvasElement = function(t) {
    this._canvasElementClientSize = J(t), this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px"), this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px"), this._invalidateBitmapSize()
  }, n.prototype.subscribeBitmapSizeChanged = function(t) {
    this._bitmapSizeChangedListeners.push(t)
  }, n.prototype.unsubscribeBitmapSizeChanged = function(t) {
    this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(function(e) {
      return e !== t
    })
  }, Object.defineProperty(n.prototype, "suggestedBitmapSize", {
    get: function() {
      return this._suggestedBitmapSize
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.subscribeSuggestedBitmapSizeChanged = function(t) {
    this._suggestedBitmapSizeChangedListeners.push(t)
  }, n.prototype.unsubscribeSuggestedBitmapSizeChanged = function(t) {
    this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter(function(e) {
      return e !== t
    })
  }, n.prototype.applySuggestedBitmapSize = function() {
    if (this._suggestedBitmapSize !== null) {
      var t = this._suggestedBitmapSize;
      this._suggestedBitmapSize = null, this._resizeBitmap(t), this._emitSuggestedBitmapSizeChanged(t, this._suggestedBitmapSize)
    }
  }, n.prototype._resizeBitmap = function(t) {
    var e = this.bitmapSize;
    Wt(e, t) || (this.canvasElement.width = t.width, this.canvasElement.height = t.height, this._emitBitmapSizeChanged(e, t))
  }, n.prototype._emitBitmapSizeChanged = function(t, e) {
    var s = this;
    this._bitmapSizeChangedListeners.forEach(function(i) {
      return i.call(s, t, e)
    })
  }, n.prototype._suggestNewBitmapSize = function(t) {
    var e = this._suggestedBitmapSize,
      s = J(this._transformBitmapSize(t, this._canvasElementClientSize)),
      i = Wt(this.bitmapSize, s) ? null : s;
    e === null && i === null || e !== null && i !== null && Wt(e, i) || (this._suggestedBitmapSize = i, this._emitSuggestedBitmapSizeChanged(e, i))
  }, n.prototype._emitSuggestedBitmapSizeChanged = function(t, e) {
    var s = this;
    this._suggestedBitmapSizeChangedListeners.forEach(function(i) {
      return i.call(s, t, e)
    })
  }, n.prototype._chooseAndInitObserver = function() {
    var t = this;
    if (!this._allowResizeObserver) {
      this._initDevicePixelRatioObservable();
      return
    }
    kr().then(function(e) {
      return e ? t._initResizeObserver() : t._initDevicePixelRatioObservable()
    })
  }, n.prototype._initDevicePixelRatioObservable = function() {
    var t = this;
    if (this._canvasElement !== null) {
      var e = Os(this._canvasElement);
      if (e === null) throw new Error("No window is associated with the canvas");
      this._devicePixelRatioObservable = yr(e), this._devicePixelRatioObservable.subscribe(function() {
        return t._invalidateBitmapSize()
      }), this._invalidateBitmapSize()
    }
  }, n.prototype._invalidateBitmapSize = function() {
    var t, e;
    if (this._canvasElement !== null) {
      var s = Os(this._canvasElement);
      if (s !== null) {
        var i = (e = (t = this._devicePixelRatioObservable) === null || t === void 0 ? void 0 : t.value) !== null && e !== void 0 ? e : s.devicePixelRatio,
          o = this._canvasElement.getClientRects(),
          r = o[0] !== void 0 ? Cr(o[0], i) : J({
            width: this._canvasElementClientSize.width * i,
            height: this._canvasElementClientSize.height * i
          });
        this._suggestNewBitmapSize(r)
      }
    }
  }, n.prototype._initResizeObserver = function() {
    var t = this;
    this._canvasElement !== null && (this._canvasElementResizeObserver = new ResizeObserver(function(e) {
      var s = e.find(function(r) {
        return r.target === t._canvasElement
      });
      if (!(!s || !s.devicePixelContentBoxSize || !s.devicePixelContentBoxSize[0])) {
        var i = s.devicePixelContentBoxSize[0],
          o = J({
            width: i.inlineSize,
            height: i.blockSize
          });
        t._suggestNewBitmapSize(o)
      }
    }), this._canvasElementResizeObserver.observe(this._canvasElement, {
      box: "device-pixel-content-box"
    }))
  }, n
}();

function Sr(n, t) {
  if (t.type === "device-pixel-content-box") return new Mr(n, t.transform, t.options);
  throw new Error("Unsupported binding target")
}

function Os(n) {
  return n.ownerDocument.defaultView
}

function kr() {
  return new Promise(function(n) {
    var t = new ResizeObserver(function(e) {
      n(e.every(function(s) {
        return "devicePixelContentBoxSize" in s
      })), t.disconnect()
    });
    t.observe(document.body, {
      box: "device-pixel-content-box"
    })
  }).catch(function() {
    return !1
  })
}

function Cr(n, t) {
  return J({
    width: Math.round(n.left * t + n.width * t) - Math.round(n.left * t),
    height: Math.round(n.top * t + n.height * t) - Math.round(n.top * t)
  })
}
var jr = function() {
  function n(t, e, s) {
    if (e.width === 0 || e.height === 0) throw new TypeError("Rendering target could only be created on a media with positive width and height");
    if (this._mediaSize = e, s.width === 0 || s.height === 0) throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
    this._bitmapSize = s, this._context = t
  }
  return n.prototype.useMediaCoordinateSpace = function(t) {
    try {
      return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio), t({
        context: this._context,
        mediaSize: this._mediaSize
      })
    } finally {
      this._context.restore()
    }
  }, n.prototype.useBitmapCoordinateSpace = function(t) {
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
  }, Object.defineProperty(n.prototype, "_horizontalPixelRatio", {
    get: function() {
      return this._bitmapSize.width / this._mediaSize.width
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n.prototype, "_verticalPixelRatio", {
    get: function() {
      return this._bitmapSize.height / this._mediaSize.height
    },
    enumerable: !1,
    configurable: !0
  }), n
}();

function Bt(n, t) {
  var e = n.canvasElementClientSize;
  if (e.width === 0 || e.height === 0) return null;
  var s = n.bitmapSize;
  if (s.width === 0 || s.height === 0) return null;
  var i = n.canvasElement.getContext("2d", t);
  return i === null ? null : new jr(i, e, s)
}
/*!
 * @license
 * TradingView Lightweight Charts™ v4.2.1
 * Copyright (c) 2024 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
const zr = {
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
  $r = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    openVisible: !0,
    thinBars: !0
  },
  Lr = {
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
  Er = {
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
  Tr = {
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
  xr = {
    color: "#26a69a",
    base: 0
  },
  Gi = {
    color: "#2196f3"
  },
  Zi = {
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
var Us, Ve;

function At(n, t) {
  const e = {
    0: [],
    1: [n.lineWidth, n.lineWidth],
    2: [2 * n.lineWidth, 2 * n.lineWidth],
    3: [6 * n.lineWidth, 6 * n.lineWidth],
    4: [n.lineWidth, 4 * n.lineWidth]
  } [t];
  n.setLineDash(e)
}

function qi(n, t, e, s) {
  n.beginPath();
  const i = n.lineWidth % 2 ? .5 : 0;
  n.moveTo(e, t + i), n.lineTo(s, t + i), n.stroke()
}

function xt(n, t) {
  if (!n) throw new Error("Assertion failed" + (t ? ": " + t : ""))
}

function nt(n) {
  if (n === void 0) throw new Error("Value is undefined");
  return n
}

function y(n) {
  if (n === null) throw new Error("Value is null");
  return n
}

function Jt(n) {
  return y(nt(n))
}(function(n) {
  n[n.Simple = 0] = "Simple", n[n.WithSteps = 1] = "WithSteps", n[n.Curved = 2] = "Curved"
})(Us || (Us = {})),
function(n) {
  n[n.Solid = 0] = "Solid", n[n.Dotted = 1] = "Dotted", n[n.Dashed = 2] = "Dashed", n[n.LargeDashed = 3] = "LargeDashed", n[n.SparseDotted = 4] = "SparseDotted"
}(Ve || (Ve = {}));
const Fs = {
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

function mt(n) {
  return n < 0 ? 0 : n > 255 ? 255 : Math.round(n) || 0
}

function Qi(n) {
  return n <= 0 || n > 1 ? Math.min(Math.max(n, 0), 1) : Math.round(1e4 * n) / 1e4
}
const Pr = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
  Vr = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
  Rr = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
  Ir = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;

function ae(n) {
  (n = n.toLowerCase()) in Fs && (n = Fs[n]);
  {
    const t = Ir.exec(n) || Rr.exec(n);
    if (t) return [mt(parseInt(t[1], 10)), mt(parseInt(t[2], 10)), mt(parseInt(t[3], 10)), Qi(t.length < 5 ? 1 : parseFloat(t[4]))]
  } {
    const t = Vr.exec(n);
    if (t) return [mt(parseInt(t[1], 16)), mt(parseInt(t[2], 16)), mt(parseInt(t[3], 16)), 1]
  } {
    const t = Pr.exec(n);
    if (t) return [mt(17 * parseInt(t[1], 16)), mt(17 * parseInt(t[2], 16)), mt(17 * parseInt(t[3], 16)), 1]
  }
  throw new Error(`Cannot parse color: ${n}`)
}

function tn(n) {
  return .199 * n[0] + .687 * n[1] + .114 * n[2]
}

function Ae(n) {
  const t = ae(n);
  return {
    t: `rgb(${t[0]}, ${t[1]}, ${t[2]})`,
    i: tn(t) > 160 ? "black" : "white"
  }
}
class q {
  constructor() {
    this.h = []
  }
  l(t, e, s) {
    const i = {
      o: t,
      _: e,
      u: s === !0
    };
    this.h.push(i)
  }
  v(t) {
    const e = this.h.findIndex(s => t === s.o);
    e > -1 && this.h.splice(e, 1)
  }
  p(t) {
    this.h = this.h.filter(e => e._ !== t)
  }
  m(t, e, s) {
    const i = [...this.h];
    this.h = this.h.filter(o => !o.u), i.forEach(o => o.o(t, e, s))
  }
  M() {
    return this.h.length > 0
  }
  S() {
    this.h = []
  }
}

function _t(n, ...t) {
  for (const e of t)
    for (const s in e) e[s] !== void 0 && (typeof e[s] != "object" || n[s] === void 0 || Array.isArray(e[s]) ? n[s] = e[s] : _t(n[s], e[s]));
  return n
}

function St(n) {
  return typeof n == "number" && isFinite(n)
}

function ce(n) {
  return typeof n == "number" && n % 1 == 0
}

function ve(n) {
  return typeof n == "string"
}

function ye(n) {
  return typeof n == "boolean"
}

function Ct(n) {
  const t = n;
  if (!t || typeof t != "object") return t;
  let e, s, i;
  for (s in e = Array.isArray(t) ? [] : {}, t) t.hasOwnProperty(s) && (i = t[s], e[s] = i && typeof i == "object" ? Ct(i) : i);
  return e
}

function Wr(n) {
  return n !== null
}

function ue(n) {
  return n === null ? void 0 : n
}
const zs = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";

function Zt(n, t, e) {
  return t === void 0 && (t = zs), `${e=e!==void 0?`${e} `:""}${n}px ${t}`
}
class Br {
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
      s = this.H();
    return t.P === e && t.D === s || (t.P = e, t.D = s, t.R = Zt(e, s), t.L = 2.5 / 12 * e, t.B = t.L, t.A = e / 12 * t.T, t.I = e / 12 * t.T, t.N = 0), t.V = this.$(), t.O = this.U(), this.k
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
class $s {
  constructor() {
    this.Y = []
  }
  Z(t) {
    this.Y = t
  }
  X(t, e, s) {
    this.Y.forEach(i => {
      i.X(t, e, s)
    })
  }
}
class wt {
  X(t, e, s) {
    t.useBitmapCoordinateSpace(i => this.K(i, e, s))
  }
}
class Ar extends wt {
  constructor() {
    super(...arguments), this.G = null
  }
  J(t) {
    this.G = t
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: s
  }) {
    if (this.G === null || this.G.tt === null) return;
    const i = this.G.tt,
      o = this.G,
      r = Math.max(1, Math.floor(e)) % 2 / 2,
      l = h => {
        t.beginPath();
        for (let a = i.to - 1; a >= i.from; --a) {
          const c = o.it[a],
            u = Math.round(c.nt * e) + r,
            d = c.st * s,
            f = h * s + r;
          t.moveTo(u, d), t.arc(u, d, f, 0, 2 * Math.PI)
        }
        t.fill()
      };
    o.et > 0 && (t.fillStyle = o.rt, l(o.ht + o.et)), t.fillStyle = o.lt, l(o.ht)
  }
}

function Dr() {
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
const Nr = {
  from: 0,
  to: 1
};
class Or {
  constructor(t, e) {
    this.ut = new $s, this.ct = [], this.dt = [], this.ft = !0, this.F = t, this.vt = e, this.ut.Z(this.ct)
  }
  bt(t) {
    const e = this.F.wt();
    e.length !== this.ct.length && (this.dt = e.map(Dr), this.ct = this.dt.map(s => {
      const i = new Ar;
      return i.J(s), i
    }), this.ut.Z(this.ct)), this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.ut
  }
  Mt() {
    const t = this.vt.W().mode === 2,
      e = this.F.wt(),
      s = this.vt.xt(),
      i = this.F.St();
    e.forEach((o, r) => {
      var l;
      const h = this.dt[r],
        a = o.kt(s);
      if (t || a === null || !o.yt()) return void(h.tt = null);
      const c = y(o.Ct());
      h.lt = a.Tt, h.ht = a.ht, h.et = a.Pt, h.it[0]._t = a._t, h.it[0].st = o.Dt().Rt(a._t, c.Vt), h.rt = (l = a.Ot) !== null && l !== void 0 ? l : this.F.Bt(h.it[0].st / o.Dt().At()), h.it[0].ot = s, h.it[0].nt = i.It(s), h.tt = Nr
    })
  }
}
class Ur extends wt {
  constructor(t) {
    super(), this.zt = t
  }
  K({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: s,
    verticalPixelRatio: i
  }) {
    if (this.zt === null) return;
    const o = this.zt.Lt.yt,
      r = this.zt.Et.yt;
    if (!o && !r) return;
    const l = Math.round(this.zt.nt * s),
      h = Math.round(this.zt.st * i);
    t.lineCap = "butt", o && l >= 0 && (t.lineWidth = Math.floor(this.zt.Lt.et * s), t.strokeStyle = this.zt.Lt.V, t.fillStyle = this.zt.Lt.V, At(t, this.zt.Lt.Nt), function(a, c, u, d) {
      a.beginPath();
      const f = a.lineWidth % 2 ? .5 : 0;
      a.moveTo(c + f, u), a.lineTo(c + f, d), a.stroke()
    }(t, l, 0, e.height)), r && h >= 0 && (t.lineWidth = Math.floor(this.zt.Et.et * i), t.strokeStyle = this.zt.Et.V, t.fillStyle = this.zt.Et.V, At(t, this.zt.Et.Nt), qi(t, h, 0, e.width))
  }
}
class Fr {
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
    }, this.Wt = new Ur(this.Ft), this.jt = t
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.Wt
  }
  Mt() {
    const t = this.jt.yt(),
      e = y(this.jt.Ht()),
      s = e.$t().W().crosshair,
      i = this.Ft;
    if (s.mode === 2) return i.Et.yt = !1, void(i.Lt.yt = !1);
    i.Et.yt = t && this.jt.Ut(e), i.Lt.yt = t && this.jt.qt(), i.Et.et = s.horzLine.width, i.Et.Nt = s.horzLine.style, i.Et.V = s.horzLine.color, i.Lt.et = s.vertLine.width, i.Lt.Nt = s.vertLine.style, i.Lt.V = s.vertLine.color, i.nt = this.jt.Yt(), i.st = this.jt.Zt()
  }
}

function Jr(n, t, e, s, i, o) {
  n.fillRect(t + o, e, s - 2 * o, o), n.fillRect(t + o, e + i - o, s - 2 * o, o), n.fillRect(t, e, o, i), n.fillRect(t + s - o, e, o, i)
}

function De(n, t, e, s, i, o) {
  n.save(), n.globalCompositeOperation = "copy", n.fillStyle = o, n.fillRect(t, e, s, i), n.restore()
}

function Js(n, t, e, s, i, o) {
  n.beginPath(), n.roundRect ? n.roundRect(t, e, s, i, o) : (n.lineTo(t + s - o[1], e), o[1] !== 0 && n.arcTo(t + s, e, t + s, e + o[1], o[1]), n.lineTo(t + s, e + i - o[2]), o[2] !== 0 && n.arcTo(t + s, e + i, t + s - o[2], e + i, o[2]), n.lineTo(t + o[3], e + i), o[3] !== 0 && n.arcTo(t, e + i, t, e + i - o[3], o[3]), n.lineTo(t, e + o[0]), o[0] !== 0 && n.arcTo(t, e, t + o[0], e, o[0]))
}

function Ks(n, t, e, s, i, o, r = 0, l = [0, 0, 0, 0], h = "") {
  if (n.save(), !r || !h || h === o) return Js(n, t, e, s, i, l), n.fillStyle = o, n.fill(), void n.restore();
  const a = r / 2;
  var c;
  Js(n, t + a, e + a, s - r, i - r, (c = -a, l.map(u => u === 0 ? u : u + c))), o !== "transparent" && (n.fillStyle = o, n.fill()), h !== "transparent" && (n.lineWidth = r, n.strokeStyle = h, n.closePath(), n.stroke()), n.restore()
}

function en(n, t, e, s, i, o, r) {
  n.save(), n.globalCompositeOperation = "copy";
  const l = n.createLinearGradient(0, 0, 0, i);
  l.addColorStop(0, o), l.addColorStop(1, r), n.fillStyle = l, n.fillRect(t, e, s, i), n.restore()
}
class Xs {
  constructor(t, e) {
    this.J(t, e)
  }
  J(t, e) {
    this.zt = t, this.Xt = e
  }
  At(t, e) {
    return this.zt.yt ? t.P + t.L + t.B : 0
  }
  X(t, e, s, i) {
    if (!this.zt.yt || this.zt.Kt.length === 0) return;
    const o = this.zt.V,
      r = this.Xt.t,
      l = t.useBitmapCoordinateSpace(h => {
        const a = h.context;
        a.font = e.R;
        const c = this.Gt(h, e, s, i),
          u = c.Jt;
        return c.Qt ? Ks(a, u.ti, u.ii, u.ni, u.si, r, u.ei, [u.ht, 0, 0, u.ht], r) : Ks(a, u.ri, u.ii, u.ni, u.si, r, u.ei, [0, u.ht, u.ht, 0], r), this.zt.hi && (a.fillStyle = o, a.fillRect(u.ri, u.li, u.ai - u.ri, u.oi)), this.zt._i && (a.fillStyle = e.O, a.fillRect(c.Qt ? u.ui - u.ei : 0, u.ii, u.ei, u.ci - u.ii)), c
      });
    t.useMediaCoordinateSpace(({
      context: h
    }) => {
      const a = l.di;
      h.font = e.R, h.textAlign = l.Qt ? "right" : "left", h.textBaseline = "middle", h.fillStyle = o, h.fillText(this.zt.Kt, a.fi, (a.ii + a.ci) / 2 + a.pi)
    })
  }
  Gt(t, e, s, i) {
    var o;
    const {
      context: r,
      bitmapSize: l,
      mediaSize: h,
      horizontalPixelRatio: a,
      verticalPixelRatio: c
    } = t, u = this.zt.hi || !this.zt.mi ? e.T : 0, d = this.zt.bi ? e.C : 0, f = e.L + this.Xt.wi, m = e.B + this.Xt.gi, p = e.A, b = e.I, w = this.zt.Kt, M = e.P, $ = s.Mi(r, w), j = Math.ceil(s.xi(r, w)), P = M + f + m, S = e.C + p + b + j + u, E = Math.max(1, Math.floor(c));
    let T = Math.round(P * c);
    T % 2 != E % 2 && (T += 1);
    const V = d > 0 ? Math.max(1, Math.floor(d * a)) : 0,
      D = Math.round(S * a),
      Q = Math.round(u * a),
      ct = (o = this.Xt.Si) !== null && o !== void 0 ? o : this.Xt.ki,
      yt = Math.round(ct * c) - Math.floor(.5 * c),
      z = Math.floor(yt + E / 2 - T / 2),
      pt = z + T,
      vt = i === "right",
      ut = vt ? h.width - d : d,
      tt = vt ? l.width - V : V;
    let zt, L, R;
    return vt ? (zt = tt - D, L = tt - Q, R = ut - u - p - d) : (zt = tt + D, L = tt + Q, R = ut + u + p), {
      Qt: vt,
      Jt: {
        ii: z,
        li: yt,
        ci: pt,
        ni: D,
        si: T,
        ht: 2 * a,
        ei: V,
        ti: zt,
        ri: tt,
        ai: L,
        oi: E,
        ui: l.width
      },
      di: {
        ii: z / c,
        ci: pt / c,
        fi: R,
        pi: $
      }
    }
  }
}
class Ne {
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
    }, this.ft = !0, this.Pi = new(t || Xs)(this.Ci, this.yi), this.Ri = new(t || Xs)(this.Ti, this.yi)
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
class Kr extends Ne {
  constructor(t, e, s) {
    super(), this.jt = t, this.Li = e, this.Ei = s
  }
  zi(t, e, s) {
    if (t.yt = !1, this.jt.W().mode === 2) return;
    const i = this.jt.W().horzLine;
    if (!i.labelVisible) return;
    const o = this.Li.Ct();
    if (!this.jt.yt() || this.Li.Ni() || o === null) return;
    const r = Ae(i.labelBackgroundColor);
    s.t = r.t, t.V = r.i;
    const l = 2 / 12 * this.Li.P();
    s.wi = l, s.gi = l;
    const h = this.Ei(this.Li);
    s.ki = h.ki, t.Kt = this.Li.Fi(h._t, o), t.yt = !0
  }
}
const Xr = /[1-9]/g;
class sn {
  constructor() {
    this.zt = null
  }
  J(t) {
    this.zt = t
  }
  X(t, e) {
    if (this.zt === null || this.zt.yt === !1 || this.zt.Kt.length === 0) return;
    const s = t.useMediaCoordinateSpace(({
      context: d
    }) => (d.font = e.R, Math.round(e.Wi.xi(d, y(this.zt).Kt, Xr))));
    if (s <= 0) return;
    const i = e.ji,
      o = s + 2 * i,
      r = o / 2,
      l = this.zt.Hi;
    let h = this.zt.ki,
      a = Math.floor(h - r) + .5;
    a < 0 ? (h += Math.abs(0 - a), a = Math.floor(h - r) + .5) : a + o > l && (h -= Math.abs(l - (a + o)), a = Math.floor(h - r) + .5);
    const c = a + o,
      u = Math.ceil(0 + e.C + e.T + e.L + e.P + e.B);
    t.useBitmapCoordinateSpace(({
      context: d,
      horizontalPixelRatio: f,
      verticalPixelRatio: m
    }) => {
      const p = y(this.zt);
      d.fillStyle = p.t;
      const b = Math.round(a * f),
        w = Math.round(0 * m),
        M = Math.round(c * f),
        $ = Math.round(u * m),
        j = Math.round(2 * f);
      if (d.beginPath(), d.moveTo(b, w), d.lineTo(b, $ - j), d.arcTo(b, $, b + j, $, j), d.lineTo(M - j, $), d.arcTo(M, $, M, $ - j, j), d.lineTo(M, w), d.fill(), p.hi) {
        const P = Math.round(p.ki * f),
          S = w,
          E = Math.round((S + e.T) * m);
        d.fillStyle = p.V;
        const T = Math.max(1, Math.floor(f)),
          V = Math.floor(.5 * f);
        d.fillRect(P - V, S, T, E - S)
      }
    }), t.useMediaCoordinateSpace(({
      context: d
    }) => {
      const f = y(this.zt),
        m = 0 + e.C + e.T + e.L + e.P / 2;
      d.font = e.R, d.textAlign = "left", d.textBaseline = "middle", d.fillStyle = f.V;
      const p = e.Wi.Mi(d, "Apr0");
      d.translate(a + i, m + p), d.fillText(f.Kt, 0, 0)
    })
  }
}
class Hr {
  constructor(t, e, s) {
    this.ft = !0, this.Wt = new sn, this.Ft = {
      yt: !1,
      t: "#4c525e",
      V: "white",
      Kt: "",
      Hi: 0,
      ki: NaN,
      hi: !0
    }, this.vt = t, this.$i = e, this.Ei = s
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
    const s = this.$i.St();
    if (s.Ni()) return;
    t.Hi = s.Hi();
    const i = this.Ei();
    if (i === null) return;
    t.ki = i.ki;
    const o = s.Ui(this.vt.xt());
    t.Kt = s.qi(y(o)), t.yt = !0;
    const r = Ae(e.labelBackgroundColor);
    t.t = r.t, t.V = r.i, t.hi = s.W().ticksVisible
  }
}
class Ls {
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
var vs;
(function(n) {
  n[n.Normal = 0] = "Normal", n[n.Magnet = 1] = "Magnet", n[n.Hidden = 2] = "Hidden"
})(vs || (vs = {}));
class Yr extends Ls {
  constructor(t, e) {
    super(), this.tn = null, this.nn = NaN, this.sn = 0, this.en = !0, this.rn = new Map, this.hn = !1, this.ln = NaN, this.an = NaN, this._n = NaN, this.un = NaN, this.$i = t, this.cn = e, this.dn = new Or(t, this), this.fn = ((i, o) => r => {
      const l = o(),
        h = i();
      if (r === y(this.tn).vn()) return {
        _t: h,
        ki: l
      };
      {
        const a = y(r.Ct());
        return {
          _t: r.pn(l, a),
          ki: l
        }
      }
    })(() => this.nn, () => this.an);
    const s = ((i, o) => () => {
      const r = this.$i.St().mn(i()),
        l = o();
      return r && Number.isFinite(l) ? {
        ot: r,
        ki: l
      } : null
    })(() => this.sn, () => this.Yt());
    this.bn = new Hr(this, t, s), this.wn = new Fr(this)
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
  kn(t, e, s) {
    this.hn || (this.hn = !0), this.en = !0, this.yn(t, e, s)
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
    const s = [];
    return this.tn === t && s.push(this.Dn(this.rn, e, this.fn)), s
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
  yn(t, e, s) {
    this.Bn(t, e, s) && this.Vn()
  }
  Bn(t, e, s) {
    const i = this.ln,
      o = this.an,
      r = this.nn,
      l = this.sn,
      h = this.tn,
      a = this.On(s);
    this.sn = t, this.ln = isNaN(t) ? NaN : this.$i.St().It(t), this.tn = s;
    const c = a !== null ? a.Ct() : null;
    return a !== null && c !== null ? (this.nn = e, this.an = a.Rt(e, c)) : (this.nn = NaN, this.an = NaN), i !== this.ln || o !== this.an || l !== this.sn || r !== this.nn || h !== this.tn
  }
  Tn() {
    const t = this.$i.wt().map(s => s.In().An()).filter(Wr),
      e = t.length === 0 ? null : Math.max(...t);
    this.sn = e !== null ? e : NaN
  }
  Dn(t, e, s) {
    let i = t.get(e);
    return i === void 0 && (i = new Kr(this, e, s), t.set(e, i)), i
  }
}

function Oe(n) {
  return n === "left" || n === "right"
}
class et {
  constructor(t) {
    this.zn = new Map, this.Ln = [], this.En = t
  }
  Nn(t, e) {
    const s = function(i, o) {
      return i === void 0 ? o : {
        Fn: Math.max(i.Fn, o.Fn),
        Wn: i.Wn || o.Wn
      }
    }(this.zn.get(t), e);
    this.zn.set(t, s)
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
    this.En = Math.max(this.En, t.En), t.zn.forEach((e, s) => {
      this.Nn(s, e)
    })
  }
  static ss() {
    return new et(2)
  }
  static es() {
    return new et(3)
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
const Hs = ".";

function jt(n, t) {
  if (!St(n)) return "n/a";
  if (!ce(t)) throw new TypeError("invalid length");
  if (t < 0 || t > 16) throw new TypeError("invalid length");
  return t === 0 ? n.toString() : ("0000000000000000" + n.toString()).slice(-t)
}
class Ue {
  constructor(t, e) {
    if (e || (e = 1), St(t) && ce(t) || (t = 100), t < 0) throw new TypeError("invalid base");
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
    let s = Math.floor(t),
      i = "";
    const o = this.os !== void 0 ? this.os : NaN;
    if (e > 1) {
      let r = +(Math.round(t * e) - s * e).toFixed(this.os);
      r >= e && (r -= e, s += 1), i = Hs + jt(+r.toFixed(this.os) * this.rs, o)
    } else s = Math.round(s * e) / e, o > 0 && (i = Hs + jt(0, o));
    return s.toFixed(0) + i
  }
}
class nn extends Ue {
  constructor(t = 100) {
    super(t)
  }
  format(t) {
    return `${super.format(t)}%`
  }
}
class Gr {
  constructor(t) {
    this._s = t
  }
  format(t) {
    let e = "";
    return t < 0 && (e = "-", t = -t), t < 995 ? e + this.us(t) : t < 999995 ? e + this.us(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), e + this.us(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), e + this.us(t / 1e9) + "B")
  }
  us(t) {
    let e;
    const s = Math.pow(10, this._s);
    return e = (t = Math.round(t * s) / s) >= 1e-15 && t < 1 ? t.toFixed(this._s).replace(/\.?0+$/, "") : String(t), e.replace(/(\.[1-9]*)0+$/, (i, o) => o)
  }
}

function on(n, t, e, s, i, o, r) {
  if (t.length === 0 || s.from >= t.length || s.to <= 0) return;
  const {
    context: l,
    horizontalPixelRatio: h,
    verticalPixelRatio: a
  } = n, c = t[s.from];
  let u = o(n, c),
    d = c;
  if (s.to - s.from < 2) {
    const f = i / 2;
    l.beginPath();
    const m = {
        nt: c.nt - f,
        st: c.st
      },
      p = {
        nt: c.nt + f,
        st: c.st
      };
    l.moveTo(m.nt * h, m.st * a), l.lineTo(p.nt * h, p.st * a), r(n, u, m, p)
  } else {
    const f = (p, b) => {
      r(n, u, d, b), l.beginPath(), u = p, d = b
    };
    let m = d;
    l.beginPath(), l.moveTo(c.nt * h, c.st * a);
    for (let p = s.from + 1; p < s.to; ++p) {
      m = t[p];
      const b = o(n, m);
      switch (e) {
        case 0:
          l.lineTo(m.nt * h, m.st * a);
          break;
        case 1:
          l.lineTo(m.nt * h, t[p - 1].st * a), b !== u && (f(b, m), l.lineTo(m.nt * h, t[p - 1].st * a)), l.lineTo(m.nt * h, m.st * a);
          break;
        case 2: {
          const [w, M] = Zr(t, p - 1, p);
          l.bezierCurveTo(w.nt * h, w.st * a, M.nt * h, M.st * a, m.nt * h, m.st * a);
          break
        }
      }
      e !== 1 && b !== u && (f(b, m), l.moveTo(m.nt * h, m.st * a))
    }(d !== m || d === m && e === 1) && r(n, u, d, m)
  }
}
const Ys = 6;

function Ke(n, t) {
  return {
    nt: n.nt - t.nt,
    st: n.st - t.st
  }
}

function Gs(n, t) {
  return {
    nt: n.nt / t,
    st: n.st / t
  }
}

function Zr(n, t, e) {
  const s = Math.max(0, t - 1),
    i = Math.min(n.length - 1, e + 1);
  var o, r;
  return [(o = n[t], r = Gs(Ke(n[e], n[s]), Ys), {
    nt: o.nt + r.nt,
    st: o.st + r.st
  }), Ke(n[e], Gs(Ke(n[i], n[t]), Ys))]
}

function qr(n, t, e, s, i) {
  const {
    context: o,
    horizontalPixelRatio: r,
    verticalPixelRatio: l
  } = t;
  o.lineTo(i.nt * r, n * l), o.lineTo(s.nt * r, n * l), o.closePath(), o.fillStyle = e, o.fill()
}
class rn extends wt {
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
      it: s,
      tt: i,
      cs: o,
      et: r,
      Nt: l,
      ds: h
    } = this.G, a = (e = this.G.fs) !== null && e !== void 0 ? e : this.G.vs ? 0 : t.mediaSize.height;
    if (i === null) return;
    const c = t.context;
    c.lineCap = "butt", c.lineJoin = "round", c.lineWidth = r, At(c, l), c.lineWidth = 1, on(t, s, h, i, o, this.ps.bind(this), qr.bind(null, a))
  }
}

function bs(n, t, e) {
  return Math.min(Math.max(n, t), e)
}

function Me(n, t, e) {
  return t - n <= e
}

function ln(n) {
  const t = Math.ceil(n);
  return t % 2 == 0 ? t - 1 : t
}
class Es {
  bs(t, e) {
    const s = this.ws,
      {
        gs: i,
        Ms: o,
        xs: r,
        Ss: l,
        ks: h,
        fs: a
      } = e;
    if (this.ys === void 0 || s === void 0 || s.gs !== i || s.Ms !== o || s.xs !== r || s.Ss !== l || s.fs !== a || s.ks !== h) {
      const c = t.context.createLinearGradient(0, 0, 0, h);
      if (c.addColorStop(0, i), a != null) {
        const u = bs(a * t.verticalPixelRatio / h, 0, 1);
        c.addColorStop(u, o), c.addColorStop(u, r)
      }
      c.addColorStop(1, l), this.ys = c, this.ws = e
    }
    return this.ys
  }
}
class Qr extends rn {
  constructor() {
    super(...arguments), this.Cs = new Es
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

function tl(n, t) {
  const e = n.context;
  e.strokeStyle = t, e.stroke()
}
class hn extends wt {
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
      tt: s,
      cs: i,
      ds: o,
      et: r,
      Nt: l,
      Rs: h
    } = this.G;
    if (s === null) return;
    const a = t.context;
    a.lineCap = "butt", a.lineWidth = r * t.verticalPixelRatio, At(a, l), a.lineJoin = "round";
    const c = this.Ds.bind(this);
    o !== void 0 && on(t, e, o, s, i, c, tl), h && function(u, d, f, m, p) {
      const {
        horizontalPixelRatio: b,
        verticalPixelRatio: w,
        context: M
      } = u;
      let $ = null;
      const j = Math.max(1, Math.floor(b)) % 2 / 2,
        P = f * w + j;
      for (let S = m.to - 1; S >= m.from; --S) {
        const E = d[S];
        if (E) {
          const T = p(u, E);
          T !== $ && (M.beginPath(), $ !== null && M.fill(), M.fillStyle = T, $ = T);
          const V = Math.round(E.nt * b) + j,
            D = E.st * w;
          M.moveTo(V, D), M.arc(V, D, P, 0, 2 * Math.PI)
        }
      }
      M.fill()
    }(t, e, h, s, c)
  }
}
class an extends hn {
  Ds(t, e) {
    return e.lt
  }
}

function cn(n, t, e, s, i = 0, o = t.length) {
  let r = o - i;
  for (; 0 < r;) {
    const l = r >> 1,
      h = i + l;
    s(t[h], e) === n ? (i = h + 1, r -= l + 1) : r = l
  }
  return i
}
const be = cn.bind(null, !0),
  un = cn.bind(null, !1);

function el(n, t) {
  return n.ot < t
}

function sl(n, t) {
  return t < n.ot
}

function dn(n, t, e) {
  const s = t.Vs(),
    i = t.ui(),
    o = be(n, s, el),
    r = un(n, i, sl);
  if (!e) return {
    from: o,
    to: r
  };
  let l = o,
    h = r;
  return o > 0 && o < n.length && n[o].ot >= s && (l = o - 1), r > 0 && r < n.length && n[r - 1].ot <= i && (h = r + 1), {
    from: l,
    to: h
  }
}
class Ts {
  constructor(t, e, s) {
    this.Os = !0, this.Bs = !0, this.As = !0, this.Is = [], this.zs = null, this.Ls = t, this.Es = e, this.Ns = s
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
    const s = e.Zs();
    if (s === null || this.Ls.In().Xs() === 0) return;
    const i = this.Ls.Ct();
    i !== null && (this.zs = dn(this.Is, s, this.Ns), this.Ks(t, e, i.Vt), this.Gs())
  }
}
class Fe extends Ts {
  constructor(t, e) {
    super(t, e, !0)
  }
  Ks(t, e, s) {
    e.Js(this.Is, ue(this.zs)), t.Qs(this.Is, s, ue(this.zs))
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
      const s = e.Vt[3];
      return this.ne(e.se, s, t)
    })
  }
}
class il extends Fe {
  constructor(t, e) {
    super(t, e), this.Ws = new $s, this.ee = new Qr, this.re = new an, this.Ws.Z([this.ee, this.re])
  }
  ne(t, e, s) {
    return Object.assign(Object.assign({}, this.te(t, e)), s.Hs(t))
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
class nl extends wt {
  constructor() {
    super(...arguments), this.zt = null, this.le = 0, this.ae = 0
  }
  J(t) {
    this.zt = t
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: s
  }) {
    if (this.zt === null || this.zt.In.length === 0 || this.zt.tt === null) return;
    this.le = this.oe(e), this.le >= 2 && Math.max(1, Math.floor(e)) % 2 != this.le % 2 && this.le--, this.ae = this.zt._e ? Math.min(this.le, Math.floor(e)) : this.le;
    let i = null;
    const o = this.ae <= this.le && this.zt.he >= Math.floor(1.5 * e);
    for (let r = this.zt.tt.from; r < this.zt.tt.to; ++r) {
      const l = this.zt.In[r];
      i !== l.ue && (t.fillStyle = l.ue, i = l.ue);
      const h = Math.floor(.5 * this.ae),
        a = Math.round(l.nt * e),
        c = a - h,
        u = this.ae,
        d = c + u - 1,
        f = Math.min(l.ce, l.de),
        m = Math.max(l.ce, l.de),
        p = Math.round(f * s) - h,
        b = Math.round(m * s) + h,
        w = Math.max(b - p, this.ae);
      t.fillRect(c, p, u, w);
      const M = Math.ceil(1.5 * this.le);
      if (o) {
        if (this.zt.fe) {
          const S = a - M;
          let E = Math.max(p, Math.round(l.ve * s) - h),
            T = E + u - 1;
          T > p + w - 1 && (T = p + w - 1, E = T - u + 1), t.fillRect(S, E, c - S, T - E + 1)
        }
        const $ = a + M;
        let j = Math.max(p, Math.round(l.pe * s) - h),
          P = j + u - 1;
        P > p + w - 1 && (P = p + w - 1, j = P - u + 1), t.fillRect(d + 1, j, $ - d, P - j + 1)
      }
    }
  }
  oe(t) {
    const e = Math.floor(t);
    return Math.max(e, Math.floor(function(s, i) {
      return Math.floor(.3 * s * i)
    }(y(this.zt).he, t)))
  }
}
class fn extends Ts {
  constructor(t, e) {
    super(t, e, !1)
  }
  Ks(t, e, s) {
    e.Js(this.Is, ue(this.zs)), t.me(this.Is, s, ue(this.zs))
  }
  be(t, e, s) {
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
class ol extends fn {
  constructor() {
    super(...arguments), this.Ws = new nl
  }
  ne(t, e, s) {
    return Object.assign(Object.assign({}, this.be(t, e, s)), s.Hs(t))
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
class rl extends rn {
  constructor() {
    super(...arguments), this.Cs = new Es
  }
  ps(t, e) {
    const s = this.G;
    return this.Cs.bs(t, {
      gs: e.Se,
      Ms: e.ke,
      xs: e.ye,
      Ss: e.Ce,
      ks: t.bitmapSize.height,
      fs: s.fs
    })
  }
}
class ll extends hn {
  constructor() {
    super(...arguments), this.Te = new Es
  }
  Ds(t, e) {
    const s = this.G;
    return this.Te.bs(t, {
      gs: e.Pe,
      Ms: e.Pe,
      xs: e.Re,
      Ss: e.Re,
      ks: t.bitmapSize.height,
      fs: s.fs
    })
  }
}
class hl extends Fe {
  constructor(t, e) {
    super(t, e), this.Ws = new $s, this.De = new rl, this.Ve = new ll, this.Ws.Z([this.De, this.Ve])
  }
  ne(t, e, s) {
    return Object.assign(Object.assign({}, this.te(t, e)), s.Hs(t))
  }
  Gs() {
    const t = this.Ls.Ct();
    if (t === null) return;
    const e = this.Ls.W(),
      s = this.Ls.Dt().Rt(e.baseValue.price, t.Vt),
      i = this.Es.St().he();
    this.De.J({
      it: this.Is,
      et: e.lineWidth,
      Nt: e.lineStyle,
      ds: e.lineType,
      fs: s,
      vs: !1,
      tt: this.zs,
      cs: i
    }), this.Ve.J({
      it: this.Is,
      et: e.lineWidth,
      Nt: e.lineStyle,
      ds: e.lineVisible ? e.lineType : void 0,
      Rs: e.pointMarkersVisible ? e.pointMarkersRadius || e.lineWidth / 2 + 2 : void 0,
      fs: s,
      tt: this.zs,
      cs: i
    })
  }
}
class al extends wt {
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
        h = Math.floor(o * l * r),
        a = Math.floor(o * r),
        c = Math.min(h, a);
      return Math.max(Math.floor(r), c)
    }(this.zt.he, e), this.le >= 2 && Math.floor(e) % 2 != this.le % 2 && this.le--;
    const s = this.zt.In;
    this.zt.Oe && this.Be(t, s, this.zt.tt), this.zt._i && this.Ae(t, s, this.zt.tt);
    const i = this.Ie(e);
    (!this.zt._i || this.le > 2 * i) && this.ze(t, s, this.zt.tt)
  }
  Be(t, e, s) {
    if (this.zt === null) return;
    const {
      context: i,
      horizontalPixelRatio: o,
      verticalPixelRatio: r
    } = t;
    let l = "",
      h = Math.min(Math.floor(o), Math.floor(this.zt.he * o));
    h = Math.max(Math.floor(o), Math.min(h, this.le));
    const a = Math.floor(.5 * h);
    let c = null;
    for (let u = s.from; u < s.to; u++) {
      const d = e[u];
      d.Le !== l && (i.fillStyle = d.Le, l = d.Le);
      const f = Math.round(Math.min(d.ve, d.pe) * r),
        m = Math.round(Math.max(d.ve, d.pe) * r),
        p = Math.round(d.ce * r),
        b = Math.round(d.de * r);
      let w = Math.round(o * d.nt) - a;
      const M = w + h - 1;
      c !== null && (w = Math.max(c + 1, w), w = Math.min(w, M));
      const $ = M - w + 1;
      i.fillRect(w, p, $, f - p), i.fillRect(w, m + 1, $, b - m), c = M
    }
  }
  Ie(t) {
    let e = Math.floor(1 * t);
    this.le <= 2 * e && (e = Math.floor(.5 * (this.le - 1)));
    const s = Math.max(Math.floor(t), e);
    return this.le <= 2 * s ? Math.max(Math.floor(t), Math.floor(1 * t)) : s
  }
  Ae(t, e, s) {
    if (this.zt === null) return;
    const {
      context: i,
      horizontalPixelRatio: o,
      verticalPixelRatio: r
    } = t;
    let l = "";
    const h = this.Ie(o);
    let a = null;
    for (let c = s.from; c < s.to; c++) {
      const u = e[c];
      u.Ee !== l && (i.fillStyle = u.Ee, l = u.Ee);
      let d = Math.round(u.nt * o) - Math.floor(.5 * this.le);
      const f = d + this.le - 1,
        m = Math.round(Math.min(u.ve, u.pe) * r),
        p = Math.round(Math.max(u.ve, u.pe) * r);
      if (a !== null && (d = Math.max(a + 1, d), d = Math.min(d, f)), this.zt.he * o > 2 * h) Jr(i, d, m, f - d + 1, p - m + 1, h);
      else {
        const b = f - d + 1;
        i.fillRect(d, m, b, p - m + 1)
      }
      a = f
    }
  }
  ze(t, e, s) {
    if (this.zt === null) return;
    const {
      context: i,
      horizontalPixelRatio: o,
      verticalPixelRatio: r
    } = t;
    let l = "";
    const h = this.Ie(o);
    for (let a = s.from; a < s.to; a++) {
      const c = e[a];
      let u = Math.round(Math.min(c.ve, c.pe) * r),
        d = Math.round(Math.max(c.ve, c.pe) * r),
        f = Math.round(c.nt * o) - Math.floor(.5 * this.le),
        m = f + this.le - 1;
      if (c.ue !== l) {
        const p = c.ue;
        i.fillStyle = p, l = p
      }
      this.zt._i && (f += h, u += h, m -= h, d -= h), u > d || i.fillRect(f, u, m - f + 1, d - u + 1)
    }
  }
}
class cl extends fn {
  constructor() {
    super(...arguments), this.Ws = new al
  }
  ne(t, e, s) {
    return Object.assign(Object.assign({}, this.be(t, e, s)), s.Hs(t))
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
class ul {
  constructor(t, e) {
    this.Ne = t, this.Li = e
  }
  X(t, e, s) {
    this.Ne.draw(t, this.Li, e, s)
  }
}
class Xe extends Ts {
  constructor(t, e, s) {
    super(t, e, !1), this.wn = s, this.Ws = new ul(this.wn.renderer(), i => {
      const o = t.Ct();
      return o === null ? null : t.Dt().Rt(i, o.Vt)
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
    e.Js(this.Is, ue(this.zs))
  }
  Gs() {
    this.wn.update({
      bars: this.Is.map(dl),
      barSpacing: this.Es.St().he(),
      visibleRange: this.zs
    }, this.Ls.W())
  }
}

function dl(n) {
  return {
    x: n.nt,
    time: n.ot,
    originalData: n.je,
    barColor: n.ue
  }
}
class fl extends wt {
  constructor() {
    super(...arguments), this.zt = null, this.$e = []
  }
  J(t) {
    this.zt = t, this.$e = []
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: s
  }) {
    if (this.zt === null || this.zt.it.length === 0 || this.zt.tt === null) return;
    this.$e.length || this.Ue(e);
    const i = Math.max(1, Math.floor(s)),
      o = Math.round(this.zt.qe * s) - Math.floor(i / 2),
      r = o + i;
    for (let l = this.zt.tt.from; l < this.zt.tt.to; l++) {
      const h = this.zt.it[l],
        a = this.$e[l - this.zt.tt.from],
        c = Math.round(h.st * s);
      let u, d;
      t.fillStyle = h.ue, c <= o ? (u = c, d = r) : (u = o, d = c - Math.floor(i / 2) + i), t.fillRect(a.Vs, u, a.ui - a.Vs + 1, d - u)
    }
  }
  Ue(t) {
    if (this.zt === null || this.zt.it.length === 0 || this.zt.tt === null) return void(this.$e = []);
    const e = Math.ceil(this.zt.he * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
      s = Math.round(this.zt.he * t) - e;
    this.$e = new Array(this.zt.tt.to - this.zt.tt.from);
    for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
      const r = this.zt.it[o],
        l = Math.round(r.nt * t);
      let h, a;
      if (s % 2) {
        const c = (s - 1) / 2;
        h = l - c, a = l + c
      } else {
        const c = s / 2;
        h = l - c, a = l + c - 1
      }
      this.$e[o - this.zt.tt.from] = {
        Vs: h,
        ui: a,
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
    let i = Math.ceil(this.zt.he * t);
    for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
      const r = this.$e[o - this.zt.tt.from];
      r.ui < r.Vs && (r.ui = r.Vs);
      const l = r.ui - r.Vs + 1;
      i = Math.min(l, i)
    }
    if (e > 0 && i < 4)
      for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
        const r = this.$e[o - this.zt.tt.from];
        r.ui - r.Vs + 1 > i && (r.Ye > r.Ze ? r.ui -= 1 : r.Vs += 1)
      }
  }
}
class ml extends Fe {
  constructor() {
    super(...arguments), this.Ws = new fl
  }
  ne(t, e, s) {
    return Object.assign(Object.assign({}, this.te(t, e)), s.Hs(t))
  }
  Gs() {
    const t = {
      it: this.Is,
      he: this.Es.St().he(),
      tt: this.zs,
      qe: this.Ls.Dt().Rt(this.Ls.W().base, y(this.Ls.Ct()).Vt)
    };
    this.Ws.J(t)
  }
}
class pl extends Fe {
  constructor() {
    super(...arguments), this.Ws = new an
  }
  ne(t, e, s) {
    return Object.assign(Object.assign({}, this.te(t, e)), s.Hs(t))
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
const vl = /[2-9]/g;
class de {
  constructor(t = 50) {
    this.Xe = 0, this.Ke = 1, this.Ge = 1, this.Je = {}, this.Qe = new Map, this.tr = t
  }
  ir() {
    this.Xe = 0, this.Qe.clear(), this.Ke = 1, this.Ge = 1, this.Je = {}
  }
  xi(t, e, s) {
    return this.nr(t, e, s).width
  }
  Mi(t, e, s) {
    const i = this.nr(t, e, s);
    return ((i.actualBoundingBoxAscent || 0) - (i.actualBoundingBoxDescent || 0)) / 2
  }
  nr(t, e, s) {
    const i = s || vl,
      o = String(e).replace(i, "0");
    if (this.Qe.has(o)) return nt(this.Qe.get(o)).sr;
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
class bl {
  constructor(t) {
    this.rr = null, this.k = null, this.hr = "right", this.lr = t
  }
  ar(t, e, s) {
    this.rr = t, this.k = e, this.hr = s
  }
  X(t) {
    this.k !== null && this.rr !== null && this.rr.X(t, this.k, this.lr, this.hr)
  }
}
class mn {
  constructor(t, e, s) {
    this._r = t, this.lr = new de(50), this.ur = e, this.F = s, this.j = -1, this.Wt = new bl(this.lr)
  }
  gt() {
    const t = this.F.cr(this.ur);
    if (t === null) return null;
    const e = t.dr(this.ur) ? t.vr() : this.ur.Dt();
    if (e === null) return null;
    const s = t.pr(e);
    if (s === "overlay") return null;
    const i = this.F.mr();
    return i.P !== this.j && (this.j = i.P, this.lr.ir()), this.Wt.ar(this._r.Ii(), i, s), this.Wt
  }
}
class gl extends wt {
  constructor() {
    super(...arguments), this.zt = null
  }
  J(t) {
    this.zt = t
  }
  br(t, e) {
    var s;
    if (!(!((s = this.zt) === null || s === void 0) && s.yt)) return null;
    const {
      st: i,
      et: o,
      wr: r
    } = this.zt;
    return e >= i - o - 7 && e <= i + o + 7 ? {
      gr: this.zt,
      wr: r
    } : null
  }
  K({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: s,
    verticalPixelRatio: i
  }) {
    if (this.zt === null || this.zt.yt === !1) return;
    const o = Math.round(this.zt.st * i);
    o < 0 || o > e.height || (t.lineCap = "butt", t.strokeStyle = this.zt.V, t.lineWidth = Math.floor(this.zt.et * s), At(t, this.zt.Nt), qi(t, o, 0, e.width))
  }
}
class xs {
  constructor(t) {
    this.Mr = {
      st: 0,
      V: "rgba(0, 0, 0, 0)",
      et: 1,
      Nt: 0,
      yt: !1
    }, this.Sr = new gl, this.ft = !0, this.Ls = t, this.Es = t.$t(), this.Sr.J(this.Mr)
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.Ls.yt() ? (this.ft && (this.kr(), this.ft = !1), this.Sr) : null
  }
}
class _l extends xs {
  constructor(t) {
    super(t)
  }
  kr() {
    this.Mr.yt = !1;
    const t = this.Ls.Dt(),
      e = t.yr().yr;
    if (e !== 2 && e !== 3) return;
    const s = this.Ls.W();
    if (!s.baseLineVisible || !this.Ls.yt()) return;
    const i = this.Ls.Ct();
    i !== null && (this.Mr.yt = !0, this.Mr.st = t.Rt(i.Vt, i.Vt), this.Mr.V = s.baseLineColor, this.Mr.et = s.baseLineWidth, this.Mr.Nt = s.baseLineStyle)
  }
}
class wl extends wt {
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
    verticalPixelRatio: s
  }) {
    const i = this.zt;
    if (i === null) return;
    const o = Math.max(1, Math.floor(e)),
      r = o % 2 / 2,
      l = Math.round(i.Ze.x * e) + r,
      h = i.Ze.y * s;
    t.fillStyle = i.Cr, t.beginPath();
    const a = Math.max(2, 1.5 * i.Tr) * e;
    t.arc(l, h, a, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = i.Pr, t.beginPath(), t.arc(l, h, i.ht * e, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = o, t.strokeStyle = i.Rr, t.beginPath(), t.arc(l, h, i.ht * e + o / 2, 0, 2 * Math.PI, !1), t.stroke()
  }
}
const yl = [{
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

function Zs(n, t, e, s) {
  return function(i, o) {
    if (i === "transparent") return i;
    const r = ae(i),
      l = r[3];
    return `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o*l})`
  }(n, e + (s - e) * t)
}

function qs(n, t) {
  const e = n % 2600 / 2600;
  let s;
  for (const h of yl)
    if (e >= h.Dr && e <= h.Vr) {
      s = h;
      break
    } xt(s !== void 0, "Last price animation internal logic error");
  const i = (e - s.Dr) / (s.Vr - s.Dr);
  return {
    Pr: Zs(t, i, s.Ar, s.Ir),
    Rr: Zs(t, i, s.zr, s.Lr),
    ht: (o = i, r = s.Or, l = s.Br, r + (l - r) * o)
  };
  var o, r, l
}
class Ml {
  constructor(t) {
    this.Wt = new wl, this.ft = !0, this.Er = !0, this.Nr = performance.now(), this.Fr = this.Nr - 1, this.Wr = t
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
      s = this.Wr.Ct();
    if (e === null || s === null) return;
    const i = this.Wr.Yr(!0);
    if (i.Zr || !e.Xr(i.se)) return;
    const o = {
        x: t.It(i.se),
        y: this.Wr.Dt().Rt(i._t, s.Vt)
      },
      r = i.V,
      l = this.Wr.W().lineWidth,
      h = qs(this.Kr(), r);
    this.Wt.J({
      Cr: r,
      Tr: l,
      Pr: h.Pr,
      Rr: h.Rr,
      ht: h.ht,
      Ze: o
    })
  }
  qr() {
    const t = this.Wt.He();
    if (t !== null) {
      const e = qs(this.Kr(), t.Cr);
      t.Pr = e.Pr, t.Rr = e.Rr, t.ht = e.ht
    }
  }
  Kr() {
    return this.Ur() ? performance.now() - this.Nr : 2599
  }
}

function ne(n, t) {
  return ln(Math.min(Math.max(n, 12), 30) * t)
}

function fe(n, t) {
  switch (n) {
    case "arrowDown":
    case "arrowUp":
      return ne(t, 1);
    case "circle":
      return ne(t, .8);
    case "square":
      return ne(t, .7)
  }
}

function pn(n) {
  return function(t) {
    const e = Math.ceil(t);
    return e % 2 != 0 ? e - 1 : e
  }(ne(n, 1))
}

function Qs(n) {
  return Math.max(ne(n, .1), 3)
}

function ti(n, t, e) {
  return t ? n : e ? Math.ceil(n / 2) : 0
}

function vn(n, t, e, s, i) {
  const o = fe("square", e),
    r = (o - 1) / 2,
    l = n - r,
    h = t - r;
  return s >= l && s <= l + o && i >= h && i <= h + o
}

function ei(n, t, e, s) {
  const i = (fe("arrowUp", s) - 1) / 2 * e.Gr,
    o = (ln(s / 2) - 1) / 2 * e.Gr;
  t.beginPath(), n ? (t.moveTo(e.nt - i, e.st), t.lineTo(e.nt, e.st - i), t.lineTo(e.nt + i, e.st), t.lineTo(e.nt + o, e.st), t.lineTo(e.nt + o, e.st + i), t.lineTo(e.nt - o, e.st + i), t.lineTo(e.nt - o, e.st)) : (t.moveTo(e.nt - i, e.st), t.lineTo(e.nt, e.st + i), t.lineTo(e.nt + i, e.st), t.lineTo(e.nt + o, e.st), t.lineTo(e.nt + o, e.st - i), t.lineTo(e.nt - o, e.st - i), t.lineTo(e.nt - o, e.st)), t.fill()
}

function Sl(n, t, e, s, i, o) {
  return vn(t, e, s, i, o)
}
class kl extends wt {
  constructor() {
    super(...arguments), this.zt = null, this.lr = new de, this.j = -1, this.H = "", this.Jr = ""
  }
  J(t) {
    this.zt = t
  }
  ar(t, e) {
    this.j === t && this.H === e || (this.j = t, this.H = e, this.Jr = Zt(t, e), this.lr.ir())
  }
  br(t, e) {
    if (this.zt === null || this.zt.tt === null) return null;
    for (let s = this.zt.tt.from; s < this.zt.tt.to; s++) {
      const i = this.zt.it[s];
      if (jl(i, t, e)) return {
        gr: i.Qr,
        wr: i.wr
      }
    }
    return null
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: s
  }, i, o) {
    if (this.zt !== null && this.zt.tt !== null) {
      t.textBaseline = "middle", t.font = this.Jr;
      for (let r = this.zt.tt.from; r < this.zt.tt.to; r++) {
        const l = this.zt.it[r];
        l.Kt !== void 0 && (l.Kt.Hi = this.lr.xi(t, l.Kt.th), l.Kt.At = this.j, l.Kt.nt = l.nt - l.Kt.Hi / 2), Cl(l, t, e, s)
      }
    }
  }
}

function Cl(n, t, e, s) {
  t.fillStyle = n.V, n.Kt !== void 0 && function(i, o, r, l, h, a) {
      i.save(), i.scale(h, a), i.fillText(o, r, l), i.restore()
    }(t, n.Kt.th, n.Kt.nt, n.Kt.st, e, s),
    function(i, o, r) {
      if (i.Xs !== 0) {
        switch (i.ih) {
          case "arrowDown":
            return void ei(!1, o, r, i.Xs);
          case "arrowUp":
            return void ei(!0, o, r, i.Xs);
          case "circle":
            return void
            function(l, h, a) {
              const c = (fe("circle", a) - 1) / 2;
              l.beginPath(), l.arc(h.nt, h.st, c * h.Gr, 0, 2 * Math.PI, !1), l.fill()
            }(o, r, i.Xs);
          case "square":
            return void
            function(l, h, a) {
              const c = fe("square", a),
                u = (c - 1) * h.Gr / 2,
                d = h.nt - u,
                f = h.st - u;
              l.fillRect(d, f, c * h.Gr, c * h.Gr)
            }(o, r, i.Xs)
        }
        i.ih
      }
    }(n, t, function(i, o, r) {
      const l = Math.max(1, Math.floor(o)) % 2 / 2;
      return {
        nt: Math.round(i.nt * o) + l,
        st: i.st * r,
        Gr: o
      }
    }(n, e, s))
}

function jl(n, t, e) {
  return !(n.Kt === void 0 || ! function(s, i, o, r, l, h) {
    const a = r / 2;
    return l >= s && l <= s + o && h >= i - a && h <= i + a
  }(n.Kt.nt, n.Kt.st, n.Kt.Hi, n.Kt.At, t, e)) || function(s, i, o) {
    if (s.Xs === 0) return !1;
    switch (s.ih) {
      case "arrowDown":
      case "arrowUp":
        return Sl(0, s.nt, s.st, s.Xs, i, o);
      case "circle":
        return function(r, l, h, a, c) {
          const u = 2 + fe("circle", h) / 2,
            d = r - a,
            f = l - c;
          return Math.sqrt(d * d + f * f) <= u
        }(s.nt, s.st, s.Xs, i, o);
      case "square":
        return vn(s.nt, s.st, s.Xs, i, o)
    }
  }(n, t, e)
}

function zl(n, t, e, s, i, o, r, l, h) {
  const a = St(e) ? e : e.xe,
    c = St(e) ? e : e.ge,
    u = St(e) ? e : e.Me,
    d = St(t.size) ? Math.max(t.size, 0) : 1,
    f = pn(l.he()) * d,
    m = f / 2;
  switch (n.Xs = f, t.position) {
    case "inBar":
      return n.st = r.Rt(a, h), void(n.Kt !== void 0 && (n.Kt.st = n.st + m + o + .6 * i));
    case "aboveBar":
      return n.st = r.Rt(c, h) - m - s.nh, n.Kt !== void 0 && (n.Kt.st = n.st - m - .6 * i, s.nh += 1.2 * i), void(s.nh += f + o);
    case "belowBar":
      return n.st = r.Rt(u, h) + m + s.sh, n.Kt !== void 0 && (n.Kt.st = n.st + m + o + .6 * i, s.sh += 1.2 * i), void(s.sh += f + o)
  }
  t.position
}
class $l {
  constructor(t, e) {
    this.ft = !0, this.eh = !0, this.rh = !0, this.hh = null, this.ah = null, this.Wt = new kl, this.Wr = t, this.$i = e, this.zt = {
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
          e = Qs(t),
          s = 1.5 * pn(t) + 2 * e,
          i = this.dh();
        this.hh = {
          above: ti(s, i.aboveBar, i.inBar),
          below: ti(s, i.belowBar, i.inBar)
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
      s = this.Wr.uh();
    this.eh && (this.zt.it = s.map(c => ({
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
    const i = this.$i.W().layout;
    this.zt.tt = null;
    const o = e.Zs();
    if (o === null) return;
    const r = this.Wr.Ct();
    if (r === null || this.zt.it.length === 0) return;
    let l = NaN;
    const h = Qs(e.he()),
      a = {
        nh: h,
        sh: h
      };
    this.zt.tt = dn(this.zt.it, o, !0);
    for (let c = this.zt.tt.from; c < this.zt.tt.to; c++) {
      const u = s[c];
      u.time !== l && (a.nh = h, a.sh = h, l = u.time);
      const d = this.zt.it[c];
      d.nt = e.It(u.time), u.text !== void 0 && u.text.length > 0 && (d.Kt = {
        th: u.text,
        nt: 0,
        st: 0,
        Hi: 0,
        At: 0
      });
      const f = this.Wr.fh(u.time);
      f !== null && zl(d, u, f, a, i.fontSize, h, t, e, r.Vt)
    }
    this.ft = !1
  }
}
class Ll extends xs {
  constructor(t) {
    super(t)
  }
  kr() {
    const t = this.Mr;
    t.yt = !1;
    const e = this.Ls.W();
    if (!e.priceLineVisible || !this.Ls.yt()) return;
    const s = this.Ls.Yr(e.priceLineSource === 0);
    s.Zr || (t.yt = !0, t.st = s.ki, t.V = this.Ls.ph(s.V), t.et = e.priceLineWidth, t.Nt = e.priceLineStyle)
  }
}
class El extends Ne {
  constructor(t) {
    super(), this.jt = t
  }
  zi(t, e, s) {
    t.yt = !1, e.yt = !1;
    const i = this.jt;
    if (!i.yt()) return;
    const o = i.W(),
      r = o.lastValueVisible,
      l = i.mh() !== "",
      h = o.seriesLastValueMode === 0,
      a = i.Yr(!1);
    if (a.Zr) return;
    r && (t.Kt = this.bh(a, r, h), t.yt = t.Kt.length !== 0), (l || h) && (e.Kt = this.wh(a, r, l, h), e.yt = e.Kt.length > 0);
    const c = i.ph(a.V),
      u = Ae(c);
    s.t = u.t, s.ki = a.ki, e.Ot = i.$t().Bt(a.ki / i.Dt().At()), t.Ot = c, t.V = u.i, e.V = u.i
  }
  wh(t, e, s, i) {
    let o = "";
    const r = this.jt.mh();
    return s && r.length !== 0 && (o += `${r} `), e && i && (o += this.jt.Dt().gh() ? t.Mh : t.xh), o.trim()
  }
  bh(t, e, s) {
    return e ? s ? this.jt.Dt().gh() ? t.xh : t.Mh : t.Kt : ""
  }
}

function si(n, t, e, s) {
  const i = Number.isFinite(t),
    o = Number.isFinite(e);
  return i && o ? n(t, e) : i || o ? i ? t : e : s
}
class rt {
  constructor(t, e) {
    this.Sh = t, this.kh = e
  }
  yh(t) {
    return t !== null && this.Sh === t.Sh && this.kh === t.kh
  }
  Ch() {
    return new rt(this.Sh, this.kh)
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
    return t === null ? this : new rt(si(Math.min, this.Th(), t.Th(), -1 / 0), si(Math.max, this.Ph(), t.Ph(), 1 / 0))
  }
  Dh(t) {
    if (!St(t) || this.kh - this.Sh === 0) return;
    const e = .5 * (this.kh + this.Sh);
    let s = this.kh - e,
      i = this.Sh - e;
    s *= t, i *= t, this.kh = e + s, this.Sh = e + i
  }
  Vh(t) {
    St(t) && (this.kh += t, this.Sh += t)
  }
  Oh() {
    return {
      minValue: this.Sh,
      maxValue: this.kh
    }
  }
  static Bh(t) {
    return t === null ? null : new rt(t.minValue, t.maxValue)
  }
}
class Re {
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
    return t === null ? null : new Re(rt.Bh(t.priceRange), t.margins)
  }
}
class Tl extends xs {
  constructor(t, e) {
    super(t), this.Eh = e
  }
  kr() {
    const t = this.Mr;
    t.yt = !1;
    const e = this.Eh.W();
    if (!this.Ls.yt() || !e.lineVisible) return;
    const s = this.Eh.Nh();
    s !== null && (t.yt = !0, t.st = s, t.V = e.color, t.et = e.lineWidth, t.Nt = e.lineStyle, t.wr = this.Eh.W().id)
  }
}
class xl extends Ne {
  constructor(t, e) {
    super(), this.Wr = t, this.Eh = e
  }
  zi(t, e, s) {
    t.yt = !1, e.yt = !1;
    const i = this.Eh.W(),
      o = i.axisLabelVisible,
      r = i.title !== "",
      l = this.Wr;
    if (!o || !l.yt()) return;
    const h = this.Eh.Nh();
    if (h === null) return;
    r && (e.Kt = i.title, e.yt = !0), e.Ot = l.$t().Bt(h / l.Dt().At()), t.Kt = this.Fh(i.price), t.yt = !0;
    const a = Ae(i.axisLabelColor || i.color);
    s.t = a.t;
    const c = i.axisLabelTextColor || a.i;
    t.V = c, e.V = c, s.ki = h
  }
  Fh(t) {
    const e = this.Wr.Ct();
    return e === null ? "" : this.Wr.Dt().Fi(t, e.Vt)
  }
}
class Pl {
  constructor(t, e) {
    this.Wr = t, this.cn = e, this.Wh = new Tl(t, this), this._r = new xl(t, this), this.jh = new mn(this._r, t, t.$t())
  }
  Hh(t) {
    _t(this.cn, t), this.bt(), this.Wr.$t().$h()
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
    const s = t.Ct();
    return s === null ? null : e.Rt(this.cn.price, s.Vt)
  }
}
class Vl extends Ls {
  constructor(t) {
    super(), this.$i = t
  }
  $t() {
    return this.$i
  }
}
const Rl = {
  Bar: (n, t, e, s) => {
    var i;
    const o = t.upColor,
      r = t.downColor,
      l = y(n(e, s)),
      h = Jt(l.Vt[0]) <= Jt(l.Vt[3]);
    return {
      ue: (i = l.V) !== null && i !== void 0 ? i : h ? o : r
    }
  },
  Candlestick: (n, t, e, s) => {
    var i, o, r;
    const l = t.upColor,
      h = t.downColor,
      a = t.borderUpColor,
      c = t.borderDownColor,
      u = t.wickUpColor,
      d = t.wickDownColor,
      f = y(n(e, s)),
      m = Jt(f.Vt[0]) <= Jt(f.Vt[3]);
    return {
      ue: (i = f.V) !== null && i !== void 0 ? i : m ? l : h,
      Ee: (o = f.Ot) !== null && o !== void 0 ? o : m ? a : c,
      Le: (r = f.Zh) !== null && r !== void 0 ? r : m ? u : d
    }
  },
  Custom: (n, t, e, s) => {
    var i;
    return {
      ue: (i = y(n(e, s)).V) !== null && i !== void 0 ? i : t.color
    }
  },
  Area: (n, t, e, s) => {
    var i, o, r, l;
    const h = y(n(e, s));
    return {
      ue: (i = h.lt) !== null && i !== void 0 ? i : t.lineColor,
      lt: (o = h.lt) !== null && o !== void 0 ? o : t.lineColor,
      Ts: (r = h.Ts) !== null && r !== void 0 ? r : t.topColor,
      Ps: (l = h.Ps) !== null && l !== void 0 ? l : t.bottomColor
    }
  },
  Baseline: (n, t, e, s) => {
    var i, o, r, l, h, a;
    const c = y(n(e, s));
    return {
      ue: c.Vt[3] >= t.baseValue.price ? t.topLineColor : t.bottomLineColor,
      Pe: (i = c.Pe) !== null && i !== void 0 ? i : t.topLineColor,
      Re: (o = c.Re) !== null && o !== void 0 ? o : t.bottomLineColor,
      Se: (r = c.Se) !== null && r !== void 0 ? r : t.topFillColor1,
      ke: (l = c.ke) !== null && l !== void 0 ? l : t.topFillColor2,
      ye: (h = c.ye) !== null && h !== void 0 ? h : t.bottomFillColor1,
      Ce: (a = c.Ce) !== null && a !== void 0 ? a : t.bottomFillColor2
    }
  },
  Line: (n, t, e, s) => {
    var i, o;
    const r = y(n(e, s));
    return {
      ue: (i = r.V) !== null && i !== void 0 ? i : t.color,
      lt: (o = r.V) !== null && o !== void 0 ? o : t.color
    }
  },
  Histogram: (n, t, e, s) => {
    var i;
    return {
      ue: (i = y(n(e, s)).V) !== null && i !== void 0 ? i : t.color
    }
  }
};
class Il {
  constructor(t) {
    this.Xh = (e, s) => s !== void 0 ? s.Vt : this.Wr.In().Kh(e), this.Wr = t, this.Gh = Rl[t.Jh()]
  }
  Hs(t, e) {
    return this.Gh(this.Xh, this.Wr.W(), t, e)
  }
}
var ii;
(function(n) {
  n[n.NearestLeft = -1] = "NearestLeft", n[n.None = 0] = "None", n[n.NearestRight = 1] = "NearestRight"
})(ii || (ii = {}));
const $t = 30;
class Wl {
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
    const s = this.rl(t, e);
    return s === null ? null : Object.assign(Object.assign({}, this.ll(s)), {
      se: this.el(s)
    })
  }
  ie() {
    return this.Qh
  }
  al(t, e, s) {
    if (this.Ni()) return null;
    let i = null;
    for (const o of s) i = Se(i, this.ol(t, e, o));
    return i
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
    const s = this._l(t);
    if (s === null && e !== 0) switch (e) {
      case -1:
        return this.ul(t);
      case 1:
        return this.cl(t);
      default:
        throw new TypeError("Unknown search mode")
    }
    return s
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
    return be(this.Qh, t, (e, s) => e.se < s)
  }
  fl(t) {
    return un(this.Qh, t, (e, s) => e.se > s)
  }
  vl(t, e, s) {
    let i = null;
    for (let o = t; o < e; o++) {
      const r = this.Qh[o].Vt[s];
      Number.isNaN(r) || (i === null ? i = {
        pl: r,
        ml: r
      } : (r < i.pl && (i.pl = r), r > i.ml && (i.ml = r)))
    }
    return i
  }
  ol(t, e, s) {
    if (this.Ni()) return null;
    let i = null;
    const o = y(this.sl()),
      r = y(this.An()),
      l = Math.max(t, o),
      h = Math.min(e, r),
      a = Math.ceil(l / $t) * $t,
      c = Math.max(a, Math.floor(h / $t) * $t);
    {
      const d = this.dl(l),
        f = this.fl(Math.min(h, a, e));
      i = Se(i, this.vl(d, f, s))
    }
    let u = this.tl.get(s);
    u === void 0 && (u = new Map, this.tl.set(s, u));
    for (let d = Math.max(a + 1, l); d < c; d += $t) {
      const f = Math.floor(d / $t);
      let m = u.get(f);
      if (m === void 0) {
        const p = this.dl(f * $t),
          b = this.fl((f + 1) * $t - 1);
        m = this.vl(p, b, s), u.set(f, m)
      }
      i = Se(i, m)
    } {
      const d = this.dl(c),
        f = this.fl(h);
      i = Se(i, this.vl(d, f, s))
    }
    return i
  }
}

function Se(n, t) {
  return n === null ? t : t === null ? n : {
    pl: Math.min(n.pl, t.pl),
    ml: Math.max(n.ml, t.ml)
  }
}
class Bl {
  constructor(t) {
    this.bl = t
  }
  X(t, e, s) {
    this.bl.draw(t)
  }
  wl(t, e, s) {
    var i, o;
    (o = (i = this.bl).drawBackground) === null || o === void 0 || o.call(i, t)
  }
}
class He {
  constructor(t) {
    this.Qe = null, this.wn = t
  }
  gt() {
    var t;
    const e = this.wn.renderer();
    if (e === null) return null;
    if (((t = this.Qe) === null || t === void 0 ? void 0 : t.gl) === e) return this.Qe.Ml;
    const s = new Bl(e);
    return this.Qe = {
      gl: e,
      Ml: s
    }, s
  }
  xl() {
    var t, e, s;
    return (s = (e = (t = this.wn).zOrder) === null || e === void 0 ? void 0 : e.call(t)) !== null && s !== void 0 ? s : "normal"
  }
}

function bn(n) {
  var t, e, s, i, o;
  return {
    Kt: n.text(),
    ki: n.coordinate(),
    Si: (t = n.fixedCoordinate) === null || t === void 0 ? void 0 : t.call(n),
    V: n.textColor(),
    t: n.backColor(),
    yt: (s = (e = n.visible) === null || e === void 0 ? void 0 : e.call(n)) === null || s === void 0 || s,
    hi: (o = (i = n.tickVisible) === null || i === void 0 ? void 0 : i.call(n)) === null || o === void 0 || o
  }
}
class Al {
  constructor(t, e) {
    this.Wt = new sn, this.Sl = t, this.kl = e
  }
  gt() {
    return this.Wt.J(Object.assign({
      Hi: this.kl.Hi()
    }, bn(this.Sl))), this.Wt
  }
}
class Dl extends Ne {
  constructor(t, e) {
    super(), this.Sl = t, this.Li = e
  }
  zi(t, e, s) {
    const i = bn(this.Sl);
    s.t = i.t, t.V = i.V;
    const o = 2 / 12 * this.Li.P();
    s.wi = o, s.gi = o, s.ki = i.ki, s.Si = i.Si, t.Kt = i.Kt, t.yt = i.yt, t.hi = i.hi
  }
}
class Nl {
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
    var t, e, s, i;
    const o = (s = (e = (t = this.Dl).paneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && s !== void 0 ? s : [];
    if (((i = this.yl) === null || i === void 0 ? void 0 : i.gl) === o) return this.yl.Ml;
    const r = o.map(l => new He(l));
    return this.yl = {
      gl: o,
      Ml: r
    }, r
  }
  Qi() {
    var t, e, s, i;
    const o = (s = (e = (t = this.Dl).timeAxisViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && s !== void 0 ? s : [];
    if (((i = this.Cl) === null || i === void 0 ? void 0 : i.gl) === o) return this.Cl.Ml;
    const r = this.Wr.$t().St(),
      l = o.map(h => new Al(h, r));
    return this.Cl = {
      gl: o,
      Ml: l
    }, l
  }
  Rn() {
    var t, e, s, i;
    const o = (s = (e = (t = this.Dl).priceAxisViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && s !== void 0 ? s : [];
    if (((i = this.Tl) === null || i === void 0 ? void 0 : i.gl) === o) return this.Tl.Ml;
    const r = this.Wr.Dt(),
      l = o.map(h => new Dl(h, r));
    return this.Tl = {
      gl: o,
      Ml: l
    }, l
  }
  Ol() {
    var t, e, s, i;
    const o = (s = (e = (t = this.Dl).priceAxisPaneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && s !== void 0 ? s : [];
    if (((i = this.Pl) === null || i === void 0 ? void 0 : i.gl) === o) return this.Pl.Ml;
    const r = o.map(l => new He(l));
    return this.Pl = {
      gl: o,
      Ml: r
    }, r
  }
  Bl() {
    var t, e, s, i;
    const o = (s = (e = (t = this.Dl).timeAxisPaneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && s !== void 0 ? s : [];
    if (((i = this.Rl) === null || i === void 0 ? void 0 : i.gl) === o) return this.Rl.Ml;
    const r = o.map(l => new He(l));
    return this.Rl = {
      gl: o,
      Ml: r
    }, r
  }
  Al(t, e) {
    var s, i, o;
    return (o = (i = (s = this.Dl).autoscaleInfo) === null || i === void 0 ? void 0 : i.call(s, t, e)) !== null && o !== void 0 ? o : null
  }
  br(t, e) {
    var s, i, o;
    return (o = (i = (s = this.Dl).hitTest) === null || i === void 0 ? void 0 : i.call(s, t, e)) !== null && o !== void 0 ? o : null
  }
}

function Ye(n, t, e, s) {
  n.forEach(i => {
    t(i).forEach(o => {
      o.xl() === e && s.push(o)
    })
  })
}

function Ge(n) {
  return n.Pn()
}

function Ol(n) {
  return n.Ol()
}

function Ul(n) {
  return n.Bl()
}
class Ps extends Vl {
  constructor(t, e, s, i, o) {
    super(t), this.zt = new Wl, this.Wh = new Ll(this), this.Il = [], this.zl = new _l(this), this.Ll = null, this.El = null, this.Nl = [], this.Fl = [], this.Wl = null, this.jl = [], this.cn = e, this.Hl = s;
    const r = new El(this);
    this.rn = [r], this.jh = new mn(r, this, t), s !== "Area" && s !== "Line" && s !== "Baseline" || (this.Ll = new Ml(this)), this.$l(), this.Ul(o)
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
      s = this.Dt();
    if (this.$t().St().Ni() || s.Ni() || this.zt.Ni()) return e;
    const i = this.$t().St().Zs(),
      o = this.Ct();
    if (i === null || o === null) return e;
    let r, l;
    if (t) {
      const u = this.zt.nl();
      if (u === null) return e;
      r = u, l = u.se
    } else {
      const u = this.zt.hl(i.ui(), -1);
      if (u === null || (r = this.zt.Kh(u.se), r === null)) return e;
      l = u.se
    }
    const h = r.Vt[3],
      a = this.$s().Hs(l, {
        Vt: r
      }),
      c = s.Rt(h, o.Vt);
    return {
      Zr: !1,
      _t: h,
      Kt: s.Fi(h, o.Vt),
      Mh: s.ql(h),
      xh: s.Yl(h, o.Vt),
      V: a.ue,
      ki: c,
      se: l
    }
  }
  $s() {
    return this.El !== null || (this.El = new Il(this)), this.El
  }
  W() {
    return this.cn
  }
  Hh(t) {
    const e = t.priceScaleId;
    e !== void 0 && e !== this.cn.priceScaleId && this.$t().Zl(this, e), _t(this.cn, t), t.priceFormat !== void 0 && (this.$l(), this.$t().Xl()), this.$t().Kl(this), this.$t().Gl(), this.wn.bt("options")
  }
  J(t, e) {
    this.zt.J(t), this.Jl(), this.wn.bt("data"), this.dn.bt("data"), this.Ll !== null && (e && e.Ql ? this.Ll.Hr() : t.length === 0 && this.Ll.jr());
    const s = this.$t().cr(this);
    this.$t().ta(s), this.$t().Kl(this), this.$t().Gl(), this.$t().$h()
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
    const e = new Pl(this, t);
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
    Ye(this.jl, Ge, "top", e);
    const s = this.Ll;
    return s !== null && s.yt() && (this.Wl === null && s.Ur() && (this.Wl = setTimeout(() => {
      this.Wl = null, this.$t().aa()
    }, 0)), s.$r(), e.unshift(s)), e
  }
  Pn() {
    const t = [];
    this.oa() || t.push(this.zl), t.push(this.wn, this.Wh, this.dn);
    const e = this.Il.map(s => s.Uh());
    return t.push(...e), Ye(this.jl, Ge, "normal", t), t
  }
  _a() {
    return this.ua(Ge, "bottom")
  }
  ca(t) {
    return this.ua(Ol, t)
  }
  da(t) {
    return this.ua(Ul, t)
  }
  fa(t, e) {
    return this.jl.map(s => s.br(t, e)).filter(s => s !== null)
  }
  Ji(t) {
    return [this.jh, ...this.Il.map(e => e.qh())]
  }
  Rn(t, e) {
    if (e !== this.Yi && !this.oa()) return [];
    const s = [...this.rn];
    for (const i of this.Il) s.push(i.Yh());
    return this.jl.forEach(i => {
      s.push(...i.Rn())
    }), s
  }
  Qi() {
    const t = [];
    return this.jl.forEach(e => {
      t.push(...e.Qi())
    }), t
  }
  Al(t, e) {
    if (this.cn.autoscaleInfoProvider !== void 0) {
      const s = this.cn.autoscaleInfoProvider(() => {
        const i = this.va(t, e);
        return i === null ? null : i.Oh()
      });
      return Re.Bh(s)
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
    return y(super.Dt())
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
    this.jl.push(new Nl(t, this))
  }
  ka(t) {
    this.jl = this.jl.filter(e => e.Vl() !== t)
  }
  ya() {
    if (this.wn instanceof Xe) return t => this.wn.Fe(t)
  }
  Ca() {
    if (this.wn instanceof Xe) return t => this.wn.We(t)
  }
  oa() {
    return !Oe(this.Dt().Ta())
  }
  va(t, e) {
    if (!ce(t) || !ce(e) || this.zt.Ni()) return null;
    const s = this.Hl === "Line" || this.Hl === "Area" || this.Hl === "Baseline" || this.Hl === "Histogram" ? [3] : [2, 1],
      i = this.zt.al(t, e, s);
    let o = i !== null ? new rt(i.pl, i.ml) : null;
    if (this.Jh() === "Histogram") {
      const l = this.cn.base,
        h = new rt(l, l);
      o = o !== null ? o.ts(h) : h
    }
    let r = this.dn._h();
    return this.jl.forEach(l => {
      const h = l.Al(t, e);
      if (h != null && h.priceRange) {
        const f = new rt(h.priceRange.minValue, h.priceRange.maxValue);
        o = o !== null ? o.ts(f) : f
      }
      var a, c, u, d;
      h != null && h.margins && (a = r, c = h.margins, r = {
        above: Math.max((u = a == null ? void 0 : a.above) !== null && u !== void 0 ? u : 0, c.above),
        below: Math.max((d = a == null ? void 0 : a.below) !== null && d !== void 0 ? d : 0, c.below)
      })
    }), new Re(o, r)
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
        this.ba = new Gr(this.cn.priceFormat.precision);
        break;
      case "percent":
        this.ba = new nn(this.cn.priceFormat.precision);
        break;
      default: {
        const t = Math.pow(10, this.cn.priceFormat.precision);
        this.ba = new Ue(t, this.cn.priceFormat.minMove * t)
      }
    }
    this.Yi !== null && this.Yi.Pa()
  }
  Jl() {
    const t = this.$t().St();
    if (!t.Ra() || this.zt.Ni()) return void(this.Fl = []);
    const e = y(this.zt.sl());
    this.Fl = this.Nl.map((s, i) => {
      const o = y(t.Da(s.time, !0)),
        r = o < e ? 1 : -1;
      return {
        time: y(this.zt.hl(o, r)).se,
        position: s.position,
        shape: s.shape,
        color: s.color,
        id: s.id,
        Qr: i,
        text: s.text,
        size: s.size,
        originalTime: s.originalTime
      }
    })
  }
  Ul(t) {
    switch (this.dn = new $l(this, this.$t()), this.Hl) {
      case "Bar":
        this.wn = new ol(this, this.$t());
        break;
      case "Candlestick":
        this.wn = new cl(this, this.$t());
        break;
      case "Line":
        this.wn = new pl(this, this.$t());
        break;
      case "Custom":
        this.wn = new Xe(this, this.$t(), nt(t));
        break;
      case "Area":
        this.wn = new il(this, this.$t());
        break;
      case "Baseline":
        this.wn = new hl(this, this.$t());
        break;
      case "Histogram":
        this.wn = new ml(this, this.$t());
        break;
      default:
        throw Error("Unknown chart style assigned: " + this.Hl)
    }
  }
  ua(t, e) {
    const s = [];
    return Ye(this.jl, t, e, s), s
  }
}
class Fl {
  constructor(t) {
    this.cn = t
  }
  Va(t, e, s) {
    let i = t;
    if (this.cn.mode === 0) return i;
    const o = s.vn(),
      r = o.Ct();
    if (r === null) return i;
    const l = o.Rt(t, r),
      h = s.Oa().filter(c => c instanceof Ps).reduce((c, u) => {
        if (s.dr(u) || !u.yt()) return c;
        const d = u.Dt(),
          f = u.In();
        if (d.Ni() || !f.Xr(e)) return c;
        const m = f.Kh(e);
        if (m === null) return c;
        const p = Jt(u.Ct());
        return c.concat([d.Rt(m.Vt[3], p.Vt)])
      }, []);
    if (h.length === 0) return i;
    h.sort((c, u) => Math.abs(c - l) - Math.abs(u - l));
    const a = h[0];
    return i = o.pn(a, r), i
  }
}
class Jl extends wt {
  constructor() {
    super(...arguments), this.zt = null
  }
  J(t) {
    this.zt = t
  }
  K({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: s,
    verticalPixelRatio: i
  }) {
    if (this.zt === null) return;
    const o = Math.max(1, Math.floor(s));
    t.lineWidth = o,
      function(r, l) {
        r.save(), r.lineWidth % 2 && r.translate(.5, .5), l(), r.restore()
      }(t, () => {
        const r = y(this.zt);
        if (r.Ba) {
          t.strokeStyle = r.Aa, At(t, r.Ia), t.beginPath();
          for (const l of r.za) {
            const h = Math.round(l.La * s);
            t.moveTo(h, -o), t.lineTo(h, e.height + o)
          }
          t.stroke()
        }
        if (r.Ea) {
          t.strokeStyle = r.Na, At(t, r.Fa), t.beginPath();
          for (const l of r.Wa) {
            const h = Math.round(l.La * i);
            t.moveTo(-o, h), t.lineTo(e.width + o, h)
          }
          t.stroke()
        }
      })
  }
}
class Kl {
  constructor(t) {
    this.Wt = new Jl, this.ft = !0, this.tn = t
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
          za: (this.tn.$t().St().ja() || []).map(s => ({
            La: s.coord
          }))
        };
      this.Wt.J(e), this.ft = !1
    }
    return this.Wt
  }
}
class Xl {
  constructor(t) {
    this.wn = new Kl(t)
  }
  Uh() {
    return this.wn
  }
}
const Ze = {
  Ha: 4,
  $a: 1e-4
};

function Kt(n, t) {
  const e = 100 * (n - t) / t;
  return t < 0 ? -e : e
}

function Hl(n, t) {
  const e = Kt(n.Th(), t),
    s = Kt(n.Ph(), t);
  return new rt(e, s)
}

function oe(n, t) {
  const e = 100 * (n - t) / t + 100;
  return t < 0 ? -e : e
}

function Yl(n, t) {
  const e = oe(n.Th(), t),
    s = oe(n.Ph(), t);
  return new rt(e, s)
}

function Ie(n, t) {
  const e = Math.abs(n);
  if (e < 1e-15) return 0;
  const s = Math.log10(e + t.$a) + t.Ha;
  return n < 0 ? -s : s
}

function re(n, t) {
  const e = Math.abs(n);
  if (e < 1e-15) return 0;
  const s = Math.pow(10, e - t.Ha) - t.$a;
  return n < 0 ? -s : s
}

function ee(n, t) {
  if (n === null) return null;
  const e = Ie(n.Th(), t),
    s = Ie(n.Ph(), t);
  return new rt(e, s)
}

function ke(n, t) {
  if (n === null) return null;
  const e = re(n.Th(), t),
    s = re(n.Ph(), t);
  return new rt(e, s)
}

function qe(n) {
  if (n === null) return Ze;
  const t = Math.abs(n.Ph() - n.Th());
  if (t >= 1 || t < 1e-15) return Ze;
  const e = Math.ceil(Math.abs(Math.log10(t))),
    s = Ze.Ha + e;
  return {
    Ha: s,
    $a: 1 / Math.pow(10, s)
  }
}
class Qe {
  constructor(t, e) {
    if (this.Ua = t, this.qa = e, function(s) {
        if (s < 0) return !1;
        for (let i = s; i > 1; i /= 10)
          if (i % 10 != 0) return !1;
        return !0
      }(this.Ua)) this.Ya = [2, 2.5, 2];
    else {
      this.Ya = [];
      for (let s = this.Ua; s !== 1;) {
        if (s % 2 == 0) this.Ya.push(2), s /= 2;
        else {
          if (s % 5 != 0) throw new Error("unexpected base");
          this.Ya.push(2, 2.5), s /= 5
        }
        if (this.Ya.length > 100) throw new Error("something wrong with base")
      }
    }
  }
  Za(t, e, s) {
    const i = this.Ua === 0 ? 0 : 1 / this.Ua;
    let o = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - e)))),
      r = 0,
      l = this.qa[0];
    for (;;) {
      const u = Me(o, i, 1e-14) && o > i + 1e-14,
        d = Me(o, s * l, 1e-14),
        f = Me(o, 1, 1e-14);
      if (!(u && d && f)) break;
      o /= l, l = this.qa[++r % this.qa.length]
    }
    if (o <= i + 1e-14 && (o = i), o = Math.max(1, o), this.Ya.length > 0 && (h = o, a = 1, c = 1e-14, Math.abs(h - a) < c))
      for (r = 0, l = this.Ya[0]; Me(o, s * l, 1e-14) && o > i + 1e-14;) o /= l, l = this.Ya[++r % this.Ya.length];
    var h, a, c;
    return o
  }
}
class ni {
  constructor(t, e, s, i) {
    this.Xa = [], this.Li = t, this.Ua = e, this.Ka = s, this.Ga = i
  }
  Za(t, e) {
    if (t < e) throw new Error("high < low");
    const s = this.Li.At(),
      i = (t - e) * this.Ja() / s,
      o = new Qe(this.Ua, [2, 2.5, 2]),
      r = new Qe(this.Ua, [2, 2, 2.5]),
      l = new Qe(this.Ua, [2.5, 2, 2]),
      h = [];
    return h.push(o.Za(t, e, i), r.Za(t, e, i), l.Za(t, e, i)),
      function(a) {
        if (a.length < 1) throw Error("array is empty");
        let c = a[0];
        for (let u = 1; u < a.length; ++u) a[u] < c && (c = a[u]);
        return c
      }(h)
  }
  Qa() {
    const t = this.Li,
      e = t.Ct();
    if (e === null) return void(this.Xa = []);
    const s = t.At(),
      i = this.Ka(s - 1, e),
      o = this.Ka(0, e),
      r = this.Li.W().entireTextOnly ? this.io() / 2 : 0,
      l = r,
      h = s - 1 - r,
      a = Math.max(i, o),
      c = Math.min(i, o);
    if (a === c) return void(this.Xa = []);
    let u = this.Za(a, c),
      d = a % u;
    d += d < 0 ? u : 0;
    const f = a >= c ? 1 : -1;
    let m = null,
      p = 0;
    for (let b = a - d; b > c; b -= u) {
      const w = this.Ga(b, e, !0);
      m !== null && Math.abs(w - m) < this.Ja() || w < l || w > h || (p < this.Xa.length ? (this.Xa[p].La = w, this.Xa[p].no = t.so(b)) : this.Xa.push({
        La: w,
        no: t.so(b)
      }), p++, m = w, t.eo() && (u = this.Za(b * f, c)))
    }
    this.Xa.length = p
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

function gn(n) {
  return n.slice().sort((t, e) => y(t.Xi()) - y(e.Xi()))
}
var oi;
(function(n) {
  n[n.Normal = 0] = "Normal", n[n.Logarithmic = 1] = "Logarithmic", n[n.Percentage = 2] = "Percentage", n[n.IndexedTo100 = 3] = "IndexedTo100"
})(oi || (oi = {}));
const ri = new nn,
  li = new Ue(100, 1);
class Gl {
  constructor(t, e, s, i) {
    this.ro = 0, this.ho = null, this.Ah = null, this.lo = null, this.ao = {
      oo: !1,
      _o: null
    }, this.uo = 0, this.co = 0, this.do = new q, this.fo = new q, this.vo = [], this.po = null, this.mo = null, this.bo = null, this.wo = null, this.ba = li, this.Mo = qe(null), this.xo = t, this.cn = e, this.So = s, this.ko = i, this.yo = new ni(this, 100, this.Co.bind(this), this.To.bind(this))
  }
  Ta() {
    return this.xo
  }
  W() {
    return this.cn
  }
  Hh(t) {
    if (_t(this.cn, t), this.Pa(), t.mode !== void 0 && this.Po({
        yr: t.mode
      }), t.scaleMargins !== void 0) {
      const e = nt(t.scaleMargins.top),
        s = nt(t.scaleMargins.bottom);
      if (e < 0 || e > 1) throw new Error(`Invalid top margin - expect value between 0 and 1, given=${e}`);
      if (s < 0 || s > 1) throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${s}`);
      if (e + s > 1) throw new Error(`Invalid margins - sum of margins must be less than 1, given=${e+s}`);
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
    let s = null;
    t.Wn !== void 0 && (this.cn.autoScale = t.Wn), t.yr !== void 0 && (this.cn.mode = t.yr, t.yr !== 2 && t.yr !== 3 || (this.cn.autoScale = !0), this.ao.oo = !1), e.yr === 1 && t.yr !== e.yr && (function(o, r) {
      if (o === null) return !1;
      const l = re(o.Th(), r),
        h = re(o.Ph(), r);
      return isFinite(l) && isFinite(h)
    }(this.Ah, this.Mo) ? (s = ke(this.Ah, this.Mo), s !== null && this.Bo(s)) : this.cn.autoScale = !0), t.yr === 1 && t.yr !== e.yr && (s = ee(this.Ah, this.Mo), s !== null && this.Bo(s));
    const i = e.yr !== this.cn.mode;
    i && (e.yr === 2 || this.gh()) && this.Pa(), i && (e.yr === 3 || this.Vo()) && this.Pa(), t.Oo !== void 0 && e.Oo !== t.Oo && (this.cn.invertScale = t.Oo, this.Ao()), this.fo.m(e, this.yr())
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
    const s = this.Ah;
    (e || s === null && t !== null || s !== null && !s.yh(t)) && (this.mo = null, this.Ah = t)
  }
  Ni() {
    return this.Fo(), this.ro === 0 || !this.Ah || this.Ah.Ni()
  }
  Wo(t) {
    return this.Oo() ? t : this.At() - 1 - t
  }
  Rt(t, e) {
    return this.gh() ? t = Kt(t, e) : this.Vo() && (t = oe(t, e)), this.To(t, e)
  }
  Qs(t, e, s) {
    this.Fo();
    const i = this.No(),
      o = y(this.zh()),
      r = o.Th(),
      l = o.Ph(),
      h = this.Lo() - 1,
      a = this.Oo(),
      c = h / (l - r),
      u = s === void 0 ? 0 : s.from,
      d = s === void 0 ? t.length : s.to,
      f = this.jo();
    for (let m = u; m < d; m++) {
      const p = t[m],
        b = p._t;
      if (isNaN(b)) continue;
      let w = b;
      f !== null && (w = f(p._t, e));
      const M = i + c * (w - r),
        $ = a ? M : this.ro - 1 - M;
      p.st = $
    }
  }
  me(t, e, s) {
    this.Fo();
    const i = this.No(),
      o = y(this.zh()),
      r = o.Th(),
      l = o.Ph(),
      h = this.Lo() - 1,
      a = this.Oo(),
      c = h / (l - r),
      u = s === void 0 ? 0 : s.from,
      d = s === void 0 ? t.length : s.to,
      f = this.jo();
    for (let m = u; m < d; m++) {
      const p = t[m];
      let b = p.we,
        w = p.ge,
        M = p.Me,
        $ = p.xe;
      f !== null && (b = f(p.we, e), w = f(p.ge, e), M = f(p.Me, e), $ = f(p.xe, e));
      let j = i + c * (b - r),
        P = a ? j : this.ro - 1 - j;
      p.ve = P, j = i + c * (w - r), P = a ? j : this.ro - 1 - j, p.ce = P, j = i + c * (M - r), P = a ? j : this.ro - 1 - j, p.de = P, j = i + c * ($ - r), P = a ? j : this.ro - 1 - j, p.pe = P
    }
  }
  pn(t, e) {
    const s = this.Co(t, e);
    return this.Ho(s, e)
  }
  Ho(t, e) {
    let s = t;
    return this.gh() ? s = function(i, o) {
      return o < 0 && (i = -i), i / 100 * o + o
    }(s, e) : this.Vo() && (s = function(i, o) {
      return i -= 100, o < 0 && (i = -i), i / 100 * o + o
    }(s, e)), s
  }
  Oa() {
    return this.vo
  }
  $o() {
    if (this.po) return this.po;
    let t = [];
    for (let e = 0; e < this.vo.length; e++) {
      const s = this.vo[e];
      s.Xi() === null && s.Ki(e + 1), t.push(s)
    }
    return t = gn(t), this.po = t, this.po
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
      const s = e.Ct();
      s !== null && (t === null || s.ha < t.ha) && (t = s)
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
    this.gh() || this.Vo() || this.bo === null && this.lo === null && (this.Ni() || (this.bo = this.ro - t, this.lo = y(this.zh()).Ch()))
  }
  Go(t) {
    if (this.gh() || this.Vo() || this.bo === null) return;
    this.Po({
      Wn: !1
    }), (t = this.ro - t) < 0 && (t = 0);
    let e = (this.bo + .2 * (this.ro - 1)) / (t + .2 * (this.ro - 1));
    const s = y(this.lo).Ch();
    e = Math.max(e, .1), s.Dh(e), this.Bo(s)
  }
  Jo() {
    this.gh() || this.Vo() || (this.bo = null, this.lo = null)
  }
  Qo(t) {
    this.Do() || this.wo === null && this.lo === null && (this.Ni() || (this.wo = t, this.lo = y(this.zh()).Ch()))
  }
  t_(t) {
    if (this.Do() || this.wo === null) return;
    const e = y(this.zh()).Rh() / (this.Lo() - 1);
    let s = t - this.wo;
    this.Oo() && (s *= -1);
    const i = s * e,
      o = y(this.lo).Ch();
    o.Vh(i), this.Bo(o, !0), this.mo = null
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
        return this.n_(Kt(t, e));
      case 3:
        return this.ma().format(oe(t, e));
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
    return this.Fh(t, y(this.s_()).ma())
  }
  Yl(t, e) {
    return t = Kt(t, e), this.n_(t, ri)
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
    t !== null && (e = Math.round(1 / t.pa())), this.ba = li, this.gh() ? (this.ba = ri, e = 100) : this.Vo() ? (this.ba = new Ue(100, 1), e = 100) : t !== null && (this.ba = t.ma()), this.yo = new ni(this, e, this.Co.bind(this), this.To.bind(this)), this.yo.Qa()
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
    t = this.eo() && t ? Ie(t, this.Mo) : t;
    const s = y(this.zh()),
      i = this.No() + (this.Lo() - 1) * (t - s.Th()) / s.Rh();
    return this.Wo(i)
  }
  Co(t, e) {
    if (this.Fo(), this.Ni()) return 0;
    const s = this.Wo(t),
      i = y(this.zh()),
      o = i.Th() + i.Rh() * ((s - this.No()) / (this.Lo() - 1));
    return this.eo() ? re(o, this.Mo) : o
  }
  Ao() {
    this.mo = null, this.yo.Qa()
  }
  h_() {
    const t = this.ao._o;
    if (t === null) return;
    let e = null;
    const s = this.e_();
    let i = 0,
      o = 0;
    for (const h of s) {
      if (!h.yt()) continue;
      const a = h.Ct();
      if (a === null) continue;
      const c = h.Al(t.Vs(), t.ui());
      let u = c && c.zh();
      if (u !== null) {
        switch (this.cn.mode) {
          case 1:
            u = ee(u, this.Mo);
            break;
          case 2:
            u = Hl(u, a.Vt);
            break;
          case 3:
            u = Yl(u, a.Vt)
        }
        if (e = e === null ? u : e.ts(y(u)), c !== null) {
          const d = c.Lh();
          d !== null && (i = Math.max(i, d.above), o = Math.max(o, d.below))
        }
      }
    }
    if (i === this.uo && o === this.co || (this.uo = i, this.co = o, this.mo = null, this.Ro()), e !== null) {
      if (e.Th() === e.Ph()) {
        const h = this.s_(),
          a = 5 * (h === null || this.gh() || this.Vo() ? 1 : h.pa());
        this.eo() && (e = ke(e, this.Mo)), e = new rt(e.Th() - a, e.Ph() + a), this.eo() && (e = ee(e, this.Mo))
      }
      if (this.eo()) {
        const h = ke(e, this.Mo),
          a = qe(h);
        if (r = a, l = this.Mo, r.Ha !== l.Ha || r.$a !== l.$a) {
          const c = this.lo !== null ? ke(this.lo, this.Mo) : null;
          this.Mo = a, e = ee(h, a), c !== null && (this.lo = ee(c, a))
        }
      }
      this.Bo(e)
    } else this.Ah === null && (this.Bo(new rt(-.5, .5)), this.Mo = qe(null));
    var r, l;
    this.ao.oo = !0
  }
  jo() {
    return this.gh() ? Kt : this.Vo() ? oe : this.eo() ? t => Ie(t, this.Mo) : null
  }
  l_(t, e, s) {
    return e === void 0 ? (s === void 0 && (s = this.ma()), s.format(t)) : e(t)
  }
  Fh(t, e) {
    return this.l_(t, this.ko.priceFormatter, e)
  }
  n_(t, e) {
    return this.l_(t, this.ko.percentageFormatter, e)
  }
}
class Zl {
  constructor(t, e) {
    this.vo = [], this.a_ = new Map, this.ro = 0, this.o_ = 0, this.__ = 1e3, this.po = null, this.u_ = new q, this.kl = t, this.$i = e, this.c_ = new Xl(this);
    const s = e.W();
    this.d_ = this.f_("left", s.leftPriceScale), this.v_ = this.f_("right", s.rightPriceScale), this.d_.Io().l(this.p_.bind(this, this.d_), this), this.v_.Io().l(this.p_.bind(this, this.v_), this), this.m_(s)
  }
  m_(t) {
    if (t.leftPriceScale && this.d_.Hh(t.leftPriceScale), t.rightPriceScale && this.v_.Hh(t.rightPriceScale), t.localization && (this.d_.Pa(), this.v_.Pa()), t.overlayPriceScales) {
      const e = Array.from(this.a_.values());
      for (const s of e) {
        const i = y(s[0].Dt());
        i.Hh(t.overlayPriceScales), t.localization && i.Pa()
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
    return this.a_.has(t) ? nt(this.a_.get(t))[0].Dt() : null
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
        const s = e.Dt();
        s !== null && s.zo(t)
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
  Uo(t, e, s) {
    const i = s !== void 0 ? s : this.y_().k_ + 1;
    this.C_(t, e, i)
  }
  Yo(t) {
    const e = this.vo.indexOf(t);
    xt(e !== -1, "removeDataSource: invalid data source"), this.vo.splice(e, 1);
    const s = y(t.Dt()).Ta();
    if (this.a_.has(s)) {
      const o = nt(this.a_.get(s)),
        r = o.indexOf(t);
      r !== -1 && (o.splice(r, 1), o.length === 0 && this.a_.delete(s))
    }
    const i = t.Dt();
    i && i.Oa().indexOf(t) >= 0 && i.Yo(t), i !== null && (i.qo(), this.T_(i)), this.po = null
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
    return this.po === null && (this.po = gn(this.vo)), this.po
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
      const s = this.kl.Zs();
      s !== null && t.r_(s)
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
      s = 0;
    for (let i = 0; i < t.length; i++) {
      const o = t[i].Xi();
      o !== null && (o < e && (e = o), o > s && (s = o))
    }
    return {
      j_: e,
      k_: s
    }
  }
  C_(t, e, s) {
    let i = this.b_(e);
    if (i === null && (i = this.f_(e, this.$i.W().overlayPriceScales)), this.vo.push(t), !Oe(e)) {
      const o = this.a_.get(e) || [];
      o.push(t), this.a_.set(e, o)
    }
    i.Uo(t), t.Gi(i), t.Ki(s), this.T_(i), this.po = null
  }
  p_(t, e, s) {
    e.yr !== s.yr && this.z_(t)
  }
  f_(t, e) {
    const s = Object.assign({
        visible: !0,
        autoScale: !0
      }, Ct(e)),
      i = new Gl(t, s, this.$i.W().layout, this.$i.W().localization);
    return i.zo(this.At()), i
  }
}
class ql {
  constructor(t, e, s = 50) {
    this.Xe = 0, this.Ke = 1, this.Ge = 1, this.Qe = new Map, this.Je = new Map, this.H_ = t, this.U_ = e, this.tr = s
  }
  q_(t) {
    const e = t.time,
      s = this.U_.cacheKey(e),
      i = this.Qe.get(s);
    if (i !== void 0) return i.Y_;
    if (this.Xe === this.tr) {
      const r = this.Je.get(this.Ge);
      this.Je.delete(this.Ge), this.Qe.delete(nt(r)), this.Ge++, this.Xe--
    }
    const o = this.H_(t);
    return this.Qe.set(s, {
      Y_: o,
      er: this.Ke
    }), this.Je.set(this.Ke, s), this.Xe++, this.Ke++, o
  }
}
class le {
  constructor(t, e) {
    xt(t <= e, "right should be >= left"), this.Z_ = t, this.X_ = e
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

function hi(n, t) {
  return n === null || t === null ? n === t : n.yh(t)
}
class Ql {
  constructor() {
    this.G_ = new Map, this.Qe = null, this.J_ = !1
  }
  Q_(t) {
    this.J_ = t, this.Qe = null
  }
  tu(t, e) {
    this.iu(e), this.Qe = null;
    for (let s = e; s < t.length; ++s) {
      const i = t[s];
      let o = this.G_.get(i.timeWeight);
      o === void 0 && (o = [], this.G_.set(i.timeWeight, o)), o.push({
        index: s,
        time: i.time,
        weight: i.timeWeight,
        originalTime: i.originalTime
      })
    }
  }
  nu(t, e) {
    const s = Math.ceil(e / t);
    return this.Qe !== null && this.Qe.su === s || (this.Qe = {
      ja: this.eu(s),
      su: s
    }), this.Qe.ja
  }
  iu(t) {
    if (t === 0) return void this.G_.clear();
    const e = [];
    this.G_.forEach((s, i) => {
      t <= s[0].index ? e.push(i) : s.splice(be(s, t, o => o.index < t), 1 / 0)
    });
    for (const s of e) this.G_.delete(s)
  }
  eu(t) {
    let e = [];
    for (const s of Array.from(this.G_.keys()).sort((i, o) => o - i)) {
      if (!this.G_.get(s)) continue;
      const i = e;
      e = [];
      const o = i.length;
      let r = 0;
      const l = nt(this.G_.get(s)),
        h = l.length;
      let a = 1 / 0,
        c = -1 / 0;
      for (let u = 0; u < h; u++) {
        const d = l[u],
          f = d.index;
        for (; r < o;) {
          const m = i[r],
            p = m.index;
          if (!(p < f)) {
            a = p;
            break
          }
          r++, e.push(m), c = p, a = 1 / 0
        }
        if (a - f >= t && f - c >= t) e.push(d), c = f;
        else if (this.J_) return i
      }
      for (; r < o; r++) e.push(i[r])
    }
    return e
  }
}
class Xt {
  constructor(t) {
    this.ru = t
  }
  hu() {
    return this.ru === null ? null : new le(Math.floor(this.ru.Vs()), Math.ceil(this.ru.ui()))
  }
  lu() {
    return this.ru
  }
  static au() {
    return new Xt(null)
  }
}

function th(n, t) {
  return n.weight > t.weight ? n : t
}
class eh {
  constructor(t, e, s, i) {
    this.o_ = 0, this.ou = null, this._u = [], this.wo = null, this.bo = null, this.uu = new Ql, this.cu = new Map, this.du = Xt.au(), this.fu = !0, this.vu = new q, this.pu = new q, this.mu = new q, this.bu = null, this.wu = null, this.gu = [], this.cn = e, this.ko = s, this.Mu = e.rightOffset, this.xu = e.barSpacing, this.$i = t, this.U_ = i, this.Su(), this.uu.Q_(e.uniformDistribution)
  }
  W() {
    return this.cn
  }
  ku(t) {
    _t(this.ko, t), this.yu(), this.Su()
  }
  Hh(t, e) {
    var s;
    _t(this.cn, t), this.cn.fixLeftEdge && this.Cu(), this.cn.fixRightEdge && this.Tu(), t.barSpacing !== void 0 && this.$i.Gn(t.barSpacing), t.rightOffset !== void 0 && this.$i.Jn(t.rightOffset), t.minBarSpacing !== void 0 && this.$i.Gn((s = t.barSpacing) !== null && s !== void 0 ? s : this.xu), this.yu(), this.Su(), this.mu.m()
  }
  mn(t) {
    var e, s;
    return (s = (e = this._u[t]) === null || e === void 0 ? void 0 : e.time) !== null && s !== void 0 ? s : null
  }
  Ui(t) {
    var e;
    return (e = this._u[t]) !== null && e !== void 0 ? e : null
  }
  Da(t, e) {
    if (this._u.length < 1) return null;
    if (this.U_.key(t) > this.U_.key(this._u[this._u.length - 1].time)) return e ? this._u.length - 1 : null;
    const s = be(this._u, this.U_.key(t), (i, o) => this.U_.key(i.time) < o);
    return this.U_.key(t) < this.U_.key(this._u[s].time) ? e ? s : null : s
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
      s = Math.round(t.to),
      i = y(this.Ou()),
      o = y(this.Bu());
    return {
      from: y(this.Ui(Math.max(i, e))),
      to: y(this.Ui(Math.min(o, s)))
    }
  }
  Au(t) {
    return {
      from: y(this.Da(t.from, !0)),
      to: y(this.Da(t.to, !0))
    }
  }
  Hi() {
    return this.o_
  }
  x_(t) {
    if (!isFinite(t) || t <= 0 || this.o_ === t) return;
    const e = this.Ru(),
      s = this.o_;
    if (this.o_ = t, this.fu = !0, this.cn.lockVisibleTimeRangeOnResize && s !== 0) {
      const i = this.xu * t / s;
      this.xu = i
    }
    if (this.cn.fixLeftEdge && e !== null && e.Vs() <= 0) {
      const i = s - t;
      this.Mu -= Math.round(i / this.xu) + 1, this.fu = !0
    }
    this.Iu(), this.zu()
  }
  It(t) {
    if (this.Ni() || !ce(t)) return 0;
    const e = this.Lu() + this.Mu - t;
    return this.o_ - (e + .5) * this.xu - 1
  }
  Js(t, e) {
    const s = this.Lu(),
      i = e === void 0 ? 0 : e.from,
      o = e === void 0 ? t.length : e.to;
    for (let r = i; r < o; r++) {
      const l = t[r].ot,
        h = s + this.Mu - l,
        a = this.o_ - (h + .5) * this.xu - 1;
      t[r].nt = a
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
      s = Math.round(e / t),
      i = y(this.Zs()),
      o = Math.max(i.Vs(), i.Vs() - s),
      r = Math.max(i.ui(), i.ui() - s),
      l = this.uu.nu(t, e),
      h = this.Ou() + s,
      a = this.Bu() - s,
      c = this.Hu(),
      u = this.cn.fixLeftEdge || c,
      d = this.cn.fixRightEdge || c;
    let f = 0;
    for (const m of l) {
      if (!(o <= m.index && m.index <= r)) continue;
      let p;
      f < this.gu.length ? (p = this.gu[f], p.coord = this.It(m.index), p.label = this.$u(m), p.weight = m.weight) : (p = {
        needAlignCoordinate: !1,
        coord: this.It(m.index),
        label: this.$u(m),
        weight: m.weight
      }, this.gu.push(p)), this.xu > e / 2 && !c ? p.needAlignCoordinate = !1 : p.needAlignCoordinate = u && m.index <= h || d && m.index >= a, f++
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
    const s = this.Nu(t),
      i = this.he(),
      o = i + e * (i / 10);
    this.Gn(o), this.cn.rightBarStaysOnScroll || this.Jn(this.ju() + (s - this.Nu(t)))
  }
  Ko(t) {
    this.wo && this.i_(), this.bo === null && this.bu === null && (this.Ni() || (this.bo = t, this.Zu()))
  }
  Go(t) {
    if (this.bu === null) return;
    const e = bs(this.o_ - t, 0, this.o_),
      s = bs(this.o_ - y(this.bo), 0, this.o_);
    e !== 0 && s !== 0 && this.Gn(this.bu.he * e / s)
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
    this.Mu = y(this.bu).ju + e, this.fu = !0, this.zu()
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
    const s = this.Mu,
      i = performance.now();
    this.$i.Zn({
      Ju: o => (o - i) / e >= 1,
      Qu: o => {
        const r = (o - i) / e;
        return r >= 1 ? t : s + (t - s) * r
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
    t !== null && e !== null && this.ec(new le(t, e + this.cn.rightOffset))
  }
  hc(t) {
    const e = new le(t.from, t.to);
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
      s = this.Lu() + this.Mu - e;
    return Math.round(1e6 * s) / 1e6
  }
  Wu(t) {
    const e = this.xu;
    this.xu = t, this.Iu(), e !== this.xu && (this.fu = !0, this.ac())
  }
  Pu() {
    if (!this.fu) return;
    if (this.fu = !1, this.Ni()) return void this.oc(Xt.au());
    const t = this.Lu(),
      e = this.o_ / this.xu,
      s = this.Mu + t,
      i = new le(s - e + 1, s);
    this.oc(new Xt(i))
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
    return e === void 0 && (e = new ql(s => this.dc(s), this.U_), this.cu.set(t.weight, e)), e.q_(t)
  }
  dc(t) {
    return this.U_.formatTickmark(t, this.ko)
  }
  oc(t) {
    const e = this.du;
    this.du = t, hi(e.hu(), this.du.hu()) || this.vu.m(), hi(e.lu(), this.du.lu()) || this.pu.m(), this.ac()
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
    const s = e.Vs() - t;
    if (s < 0) {
      const i = this.Mu - s - 1;
      this.Jn(i)
    }
    this.Iu()
  }
  Tu() {
    this.zu(), this.Iu()
  }
}
class sh {
  X(t, e, s) {
    t.useMediaCoordinateSpace(i => this.K(i, e, s))
  }
  wl(t, e, s) {
    t.useMediaCoordinateSpace(i => this.fc(i, e, s))
  }
  fc(t, e, s) {}
}
class ih extends sh {
  constructor(t) {
    super(), this.vc = new Map, this.zt = t
  }
  K(t) {}
  fc(t) {
    if (!this.zt.yt) return;
    const {
      context: e,
      mediaSize: s
    } = t;
    let i = 0;
    for (const r of this.zt.mc) {
      if (r.Kt.length === 0) continue;
      e.font = r.R;
      const l = this.bc(e, r.Kt);
      l > s.width ? r.Yu = s.width / l : r.Yu = 1, i += r.wc * r.Yu
    }
    let o = 0;
    switch (this.zt.gc) {
      case "top":
        o = 0;
        break;
      case "center":
        o = Math.max((s.height - i) / 2, 0);
        break;
      case "bottom":
        o = Math.max(s.height - i, 0)
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
          e.textAlign = "center", l = s.width / 2;
          break;
        case "right":
          e.textAlign = "right", l = s.width - 1 - r.wc / 2
      }
      e.translate(l, o), e.textBaseline = "top", e.font = r.R, e.scale(r.Yu, r.Yu), e.fillText(r.Kt, 0, r.xc), e.restore(), o += r.wc * r.Yu
    }
  }
  bc(t, e) {
    const s = this.Sc(t.font);
    let i = s.get(e);
    return i === void 0 && (i = t.measureText(e).width, s.set(e, i)), i
  }
  Sc(t) {
    let e = this.vc.get(t);
    return e === void 0 && (e = new Map, this.vc.set(t, e)), e
  }
}
class nh {
  constructor(t) {
    this.ft = !0, this.Ft = {
      yt: !1,
      V: "",
      mc: [],
      gc: "center",
      Mc: "center"
    }, this.Wt = new ih(this.Ft), this.jt = t
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
      R: Zt(t.fontSize, t.fontFamily, t.fontStyle),
      wc: 1.2 * t.fontSize,
      xc: 0,
      Yu: 0
    }])
  }
}
class oh extends Ls {
  constructor(t, e) {
    super(), this.cn = e, this.wn = new nh(this)
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
var ai, ci, ui, di, fi;
(function(n) {
  n[n.OnTouchEnd = 0] = "OnTouchEnd", n[n.OnNextTap = 1] = "OnNextTap"
})(ai || (ai = {}));
class rh {
  constructor(t, e, s) {
    this.kc = [], this.yc = [], this.o_ = 0, this.Cc = null, this.Tc = new q, this.Pc = new q, this.Rc = null, this.Dc = t, this.cn = e, this.U_ = s, this.Vc = new Br(this), this.kl = new eh(this, e.timeScale, this.cn.localization, s), this.vt = new Yr(this, e.crosshair), this.Oc = new Fl(e.crosshair), this.Bc = new oh(this, e.watermark), this.Ac(), this.kc[0].M_(2e3), this.Ic = this.zc(0), this.Lc = this.zc(1)
  }
  Xl() {
    this.Ec(et.es())
  }
  $h() {
    this.Ec(et.ss())
  }
  aa() {
    this.Ec(new et(1))
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
    _t(this.cn, t), this.kc.forEach(e => e.m_(t)), t.timeScale !== void 0 && this.kl.Hh(t.timeScale), t.localization !== void 0 && this.kl.ku(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Tc.m(), this.Ic = this.zc(0), this.Lc = this.zc(1), this.Xl()
  }
  Hc(t, e) {
    if (t === "left") return void this.Hh({
      leftPriceScale: e
    });
    if (t === "right") return void this.Hh({
      rightPriceScale: e
    });
    const s = this.$c(t);
    s !== null && (s.Dt.Hh(e), this.Tc.m())
  }
  $c(t) {
    for (const e of this.kc) {
      const s = e.b_(t);
      if (s !== null) return {
        Ht: e,
        Dt: s
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
    const e = new Zl(this.kl, this);
    t !== void 0 ? this.kc.splice(t, 0, e) : this.kc.push(e);
    const s = t === void 0 ? this.kc.length - 1 : t,
      i = et.es();
    return i.Nn(s, {
      Fn: 0,
      Wn: !0
    }), this.Ec(i), e
  }
  D_(t, e, s) {
    t.D_(e, s)
  }
  V_(t, e, s) {
    t.V_(e, s), this.Gl(), this.Ec(this.Kc(t, 2))
  }
  O_(t, e) {
    t.O_(e), this.Ec(this.Kc(t, 2))
  }
  B_(t, e, s) {
    e.Do() || t.B_(e, s)
  }
  A_(t, e, s) {
    e.Do() || (t.A_(e, s), this.Gl(), this.Ec(this.Kc(t, 2)))
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
    const s = this.St();
    if (s.Ni() || e === 0) return;
    const i = s.Hi();
    t = Math.max(1, Math.min(t, i)), s.Yu(t, e), this.Fu()
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
  hd(t, e, s, i, o) {
    this.vt.gn(t, e);
    let r = NaN,
      l = this.kl.Eu(t);
    const h = this.kl.Zs();
    h !== null && (l = Math.min(Math.max(h.Vs(), l), h.ui()));
    const a = i.vn(),
      c = a.Ct();
    c !== null && (r = a.pn(e, c)), r = this.Oc.Va(r, l, i), this.vt.kn(l, r, i), this.aa(), o || this.Pc.m(this.vt.xt(), {
      x: t,
      y: e
    }, s)
  }
  ld(t, e, s) {
    const i = s.vn(),
      o = i.Ct(),
      r = i.Rt(t, y(o)),
      l = this.kl.Da(e, !0),
      h = this.kl.It(y(l));
    this.hd(h, r, null, s, !0)
  }
  ad(t) {
    this.Yc().Cn(), this.aa(), t || this.Pc.m(null, null, null)
  }
  Gl() {
    const t = this.vt.Ht();
    if (t !== null) {
      const e = this.vt.xn(),
        s = this.vt.Sn();
      this.hd(e, s, null, t)
    }
    this.vt.Vn()
  }
  od(t, e, s) {
    const i = this.kl.mn(0);
    e !== void 0 && s !== void 0 && this.kl.bt(e, s);
    const o = this.kl.mn(0),
      r = this.kl.Lu(),
      l = this.kl.Zs();
    if (l !== null && i !== null && o !== null) {
      const h = l.Xr(r),
        a = this.U_.key(i) > this.U_.key(o),
        c = t !== null && t > r && !a,
        u = this.kl.W().allowShiftVisibleRangeOnWhitespaceReplacement,
        d = h && (s !== void 0 || u) && this.kl.W().shiftVisibleRangeOnNewBar;
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
    const e = this.kc.find(s => s.$o().includes(t));
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
  ud(t, e, s) {
    const i = this.kc[0],
      o = this.dd(e, t, i, s);
    return this.yc.push(o), this.yc.length === 1 ? this.Xl() : this.$h(), o
  }
  fd(t) {
    const e = this.cr(t),
      s = this.yc.indexOf(t);
    xt(s !== -1, "Series not found"), this.yc.splice(s, 1), y(e).Yo(t), t.S && t.S()
  }
  Zl(t, e) {
    const s = y(this.cr(t));
    s.Yo(t);
    const i = this.$c(e);
    if (i === null) {
      const o = t.Xi();
      s.Uo(t, e, o)
    } else {
      const o = i.Ht === s ? t.Xi() : void 0;
      i.Ht.Uo(t, e, o)
    }
  }
  rc() {
    const t = et.ss();
    t.$n(), this.Ec(t)
  }
  vd(t) {
    const e = et.ss();
    e.Yn(t), this.Ec(e)
  }
  Kn() {
    const t = et.ss();
    t.Kn(), this.Ec(t)
  }
  Gn(t) {
    const e = et.ss();
    e.Gn(t), this.Ec(e)
  }
  Jn(t) {
    const e = et.ss();
    e.Jn(t), this.Ec(e)
  }
  Zn(t) {
    const e = et.ss();
    e.Zn(t), this.Ec(e)
  }
  Un() {
    const t = et.ss();
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
      s = this.Ic;
    if (e === s) return e;
    if (t = Math.max(0, Math.min(100, Math.round(100 * t))), this.Rc === null || this.Rc.Ts !== s || this.Rc.Ps !== e) this.Rc = {
      Ts: s,
      Ps: e,
      bd: new Map
    };
    else {
      const o = this.Rc.bd.get(t);
      if (o !== void 0) return o
    }
    const i = function(o, r, l) {
      const [h, a, c, u] = ae(o), [d, f, m, p] = ae(r), b = [mt(h + l * (d - h)), mt(a + l * (f - a)), mt(c + l * (m - c)), Qi(u + l * (p - u))];
      return `rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]})`
    }(s, e, t / 100);
    return this.Rc.bd.set(t, i), i
  }
  Kc(t, e) {
    const s = new et(e);
    if (t !== null) {
      const i = this.kc.indexOf(t);
      s.Nn(i, {
        Fn: e
      })
    }
    return s
  }
  Nc(t, e) {
    return e === void 0 && (e = 2), this.Kc(this.cr(t), e)
  }
  Ec(t) {
    this.Dc && this.Dc(t), this.kc.forEach(e => e.W_().Uh().bt())
  }
  dd(t, e, s, i) {
    const o = new Ps(this, t, e, s, i),
      r = t.priceScaleId !== void 0 ? t.priceScaleId : this.pd();
    return s.Uo(o, r), Oe(r) || o.Hh(t), o
  }
  zc(t) {
    const e = this.cn.layout;
    return e.background.type === "gradient" ? t === 0 ? e.background.topColor : e.background.bottomColor : e.background.color
  }
}

function gs(n) {
  return !St(n) && !ve(n)
}

function _n(n) {
  return St(n)
}(function(n) {
  n[n.Disabled = 0] = "Disabled", n[n.Continuous = 1] = "Continuous", n[n.OnDataUpdate = 2] = "OnDataUpdate"
})(ci || (ci = {})),
function(n) {
  n[n.LastBar = 0] = "LastBar", n[n.LastVisible = 1] = "LastVisible"
}(ui || (ui = {})),
function(n) {
  n.Solid = "solid", n.VerticalGradient = "gradient"
}(di || (di = {})),
function(n) {
  n[n.Year = 0] = "Year", n[n.Month = 1] = "Month", n[n.DayOfMonth = 2] = "DayOfMonth", n[n.Time = 3] = "Time", n[n.TimeWithSeconds = 4] = "TimeWithSeconds"
}(fi || (fi = {}));
const mi = n => n.getUTCFullYear();

function lh(n, t, e) {
  return t.replace(/yyyy/g, (s => jt(mi(s), 4))(n)).replace(/yy/g, (s => jt(mi(s) % 100, 2))(n)).replace(/MMMM/g, ((s, i) => new Date(s.getUTCFullYear(), s.getUTCMonth(), 1).toLocaleString(i, {
    month: "long"
  }))(n, e)).replace(/MMM/g, ((s, i) => new Date(s.getUTCFullYear(), s.getUTCMonth(), 1).toLocaleString(i, {
    month: "short"
  }))(n, e)).replace(/MM/g, (s => jt((i => i.getUTCMonth() + 1)(s), 2))(n)).replace(/dd/g, (s => jt((i => i.getUTCDate())(s), 2))(n))
}
class wn {
  constructor(t = "yyyy-MM-dd", e = "default") {
    this.wd = t, this.gd = e
  }
  q_(t) {
    return lh(t, this.wd, this.gd)
  }
}
class hh {
  constructor(t) {
    this.Md = t || "%h:%m:%s"
  }
  q_(t) {
    return this.Md.replace("%h", jt(t.getUTCHours(), 2)).replace("%m", jt(t.getUTCMinutes(), 2)).replace("%s", jt(t.getUTCSeconds(), 2))
  }
}
const ah = {
  xd: "yyyy-MM-dd",
  Sd: "%h:%m:%s",
  kd: " ",
  yd: "default"
};
class ch {
  constructor(t = {}) {
    const e = Object.assign(Object.assign({}, ah), t);
    this.Cd = new wn(e.xd, e.yd), this.Td = new hh(e.Sd), this.Pd = e.kd
  }
  q_(t) {
    return `${this.Cd.q_(t)}${this.Pd}${this.Td.q_(t)}`
  }
}

function Ce(n) {
  return 60 * n * 60 * 1e3
}

function ts(n) {
  return 60 * n * 1e3
}
const je = [{
  Rd: (pi = 1, 1e3 * pi),
  Dd: 10
}, {
  Rd: ts(1),
  Dd: 20
}, {
  Rd: ts(5),
  Dd: 21
}, {
  Rd: ts(30),
  Dd: 22
}, {
  Rd: Ce(1),
  Dd: 30
}, {
  Rd: Ce(3),
  Dd: 31
}, {
  Rd: Ce(6),
  Dd: 32
}, {
  Rd: Ce(12),
  Dd: 33
}];
var pi;

function vi(n, t) {
  if (n.getUTCFullYear() !== t.getUTCFullYear()) return 70;
  if (n.getUTCMonth() !== t.getUTCMonth()) return 60;
  if (n.getUTCDate() !== t.getUTCDate()) return 50;
  for (let e = je.length - 1; e >= 0; --e)
    if (Math.floor(t.getTime() / je[e].Rd) !== Math.floor(n.getTime() / je[e].Rd)) return je[e].Dd;
  return 0
}

function es(n) {
  let t = n;
  if (ve(n) && (t = Vs(n)), !gs(t)) throw new Error("time must be of type BusinessDay");
  const e = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
  return {
    Vd: Math.round(e.getTime() / 1e3),
    Od: t
  }
}

function bi(n) {
  if (!_n(n)) throw new Error("time must be of type isUTCTimestamp");
  return {
    Vd: n
  }
}

function Vs(n) {
  const t = new Date(n);
  if (isNaN(t.getTime())) throw new Error(`Invalid date string=${n}, expected format=yyyy-mm-dd`);
  return {
    day: t.getUTCDate(),
    month: t.getUTCMonth() + 1,
    year: t.getUTCFullYear()
  }
}

function gi(n) {
  ve(n.time) && (n.time = Vs(n.time))
}
class _i {
  options() {
    return this.cn
  }
  setOptions(t) {
    this.cn = t, this.updateFormatter(t.localization)
  }
  preprocessData(t) {
    Array.isArray(t) ? function(e) {
      e.forEach(gi)
    }(t) : gi(t)
  }
  createConverterToInternalObj(t) {
    return y(function(e) {
      return e.length === 0 ? null : gs(e[0].time) || ve(e[0].time) ? es : bi
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
    return _n(e = t) ? bi(e) : gs(e) ? es(e) : es(Vs(e));
    var e
  }
  updateFormatter(t) {
    if (!this.cn) return;
    const e = t.dateFormat;
    this.cn.timeScale.timeVisible ? this.Bd = new ch({
      xd: e,
      Sd: this.cn.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m",
      kd: "   ",
      yd: t.locale
    }) : this.Bd = new wn(e, t.locale)
  }
  formatHorzItem(t) {
    const e = t;
    return this.Bd.q_(new Date(1e3 * e.Vd))
  }
  formatTickmark(t, e) {
    const s = function(o, r, l) {
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
      i = this.cn.timeScale;
    if (i.tickMarkFormatter !== void 0) {
      const o = i.tickMarkFormatter(t.originalTime, s, e.locale);
      if (o !== null) return o
    }
    return function(o, r, l) {
      const h = {};
      switch (r) {
        case 0:
          h.year = "numeric";
          break;
        case 1:
          h.month = "short";
          break;
        case 2:
          h.day = "numeric";
          break;
        case 3:
          h.hour12 = !1, h.hour = "2-digit", h.minute = "2-digit";
          break;
        case 4:
          h.hour12 = !1, h.hour = "2-digit", h.minute = "2-digit", h.second = "2-digit"
      }
      const a = o.Od === void 0 ? new Date(1e3 * o.Vd) : new Date(Date.UTC(o.Od.year, o.Od.month - 1, o.Od.day));
      return new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()).toLocaleString(l, h)
    }(t.time, s, e.locale)
  }
  maxTickMarkWeight(t) {
    let e = t.reduce(th, t[0]).weight;
    return e > 30 && e < 50 && (e = 30), e
  }
  fillWeightsForPoints(t, e) {
    (function(s, i = 0) {
      if (s.length === 0) return;
      let o = i === 0 ? null : s[i - 1].time.Vd,
        r = o !== null ? new Date(1e3 * o) : null,
        l = 0;
      for (let h = i; h < s.length; ++h) {
        const a = s[h],
          c = new Date(1e3 * a.time.Vd);
        r !== null && (a.timeWeight = vi(c, r)), l += a.time.Vd - (o || a.time.Vd), o = a.time.Vd, r = c
      }
      if (i === 0 && s.length > 1) {
        const h = Math.ceil(l / (s.length - 1)),
          a = new Date(1e3 * (s[0].time.Vd - h));
        s[0].timeWeight = vi(new Date(1e3 * s[0].time.Vd), a)
      }
    })(t, e)
  }
  static Ad(t) {
    return _t({
      localization: {
        dateFormat: "dd MMM 'yy"
      }
    }, t ?? {})
  }
}
const qt = typeof window < "u";

function wi() {
  return !!qt && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
}

function ss() {
  return !!qt && /iPhone|iPad|iPod/.test(window.navigator.platform)
}

function _s(n) {
  return n + n % 2
}

function is(n, t) {
  return n.Id - t.Id
}

function ns(n, t, e) {
  const s = (n.Id - t.Id) / (n.ot - t.ot);
  return Math.sign(s) * Math.min(Math.abs(s), e)
}
class uh {
  constructor(t, e, s, i) {
    this.zd = null, this.Ld = null, this.Ed = null, this.Nd = null, this.Fd = null, this.Wd = 0, this.jd = 0, this.Hd = t, this.$d = e, this.Ud = s, this.rs = i
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
    let s = 0;
    const i = ns(this.zd, this.Ld, this.$d),
      o = is(this.zd, this.Ld),
      r = [i],
      l = [o];
    if (s += o, this.Ed !== null) {
      const a = ns(this.Ld, this.Ed, this.$d);
      if (Math.sign(a) === Math.sign(i)) {
        const c = is(this.Ld, this.Ed);
        if (r.push(a), l.push(c), s += c, this.Nd !== null) {
          const u = ns(this.Ed, this.Nd, this.$d);
          if (Math.sign(u) === Math.sign(i)) {
            const d = is(this.Ed, this.Nd);
            r.push(u), l.push(d), s += d
          }
        }
      }
    }
    let h = 0;
    for (let a = 0; a < r.length; ++a) h += l[a] / s * r[a];
    Math.abs(h) < this.Hd || (this.Fd = {
      Id: t,
      ot: e
    }, this.jd = h, this.Wd = function(a, c) {
      const u = Math.log(c);
      return Math.log(1 * u / -a) / u
    }(Math.abs(h), this.Ud))
  }
  Qu(t) {
    const e = y(this.Fd),
      s = t - e.ot;
    return e.Id + this.jd * (Math.pow(this.Ud, s) - 1) / Math.log(this.Ud)
  }
  Ju(t) {
    return this.Fd === null || this.Yd(t) === this.Wd
  }
  Yd(t) {
    const e = t - y(this.Fd).ot;
    return Math.min(e, this.Wd)
  }
}
class dh {
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
    return tn(ae(this.Jd.W().layout.textColor)) > 160 ? "dark" : "light"
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

function Dt(n, t) {
  const e = y(n.ownerDocument).createElement("canvas");
  n.appendChild(e);
  const s = Sr(e, {
    type: "device-pixel-content-box",
    options: {
      allowResizeObserver: !1
    },
    transform: (i, o) => ({
      width: Math.max(i.width, o.width),
      height: Math.max(i.height, o.height)
    })
  });
  return s.resizeCanvasElement(t), s
}

function Nt(n) {
  var t;
  n.width = 1, n.height = 1, (t = n.getContext("2d")) === null || t === void 0 || t.clearRect(0, 0, 1, 1)
}

function ws(n, t, e, s) {
  n.wl && n.wl(t, e, s)
}

function Te(n, t, e, s) {
  n.X(t, e, s)
}

function ys(n, t, e, s) {
  const i = n(e, s);
  for (const o of i) {
    const r = o.gt();
    r !== null && t(r)
  }
}

function fh(n) {
  qt && window.chrome !== void 0 && n.addEventListener("mousedown", t => {
    if (t.button === 1) return t.preventDefault(), !1
  })
}
class Rs {
  constructor(t, e, s) {
    this.rf = 0, this.hf = null, this.lf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }, this.af = 0, this._f = null, this.uf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }, this.cf = null, this.df = !1, this.ff = null, this.vf = null, this.pf = !1, this.mf = !1, this.bf = !1, this.wf = null, this.gf = null, this.Mf = null, this.xf = null, this.Sf = null, this.kf = null, this.yf = null, this.Cf = 0, this.Tf = !1, this.Pf = !1, this.Rf = !1, this.Df = 0, this.Vf = null, this.Of = !ss(), this.Bf = i => {
      this.Af(i)
    }, this.If = i => {
      if (this.zf(i)) {
        const o = this.Lf(i);
        if (++this.af, this._f && this.af > 1) {
          const {
            Ef: r
          } = this.Nf(Mt(i), this.uf);
          r < 30 && !this.bf && this.Ff(o, this.jf.Wf), this.Hf()
        }
      } else {
        const o = this.Lf(i);
        if (++this.rf, this.hf && this.rf > 1) {
          const {
            Ef: r
          } = this.Nf(Mt(i), this.lf);
          r < 5 && !this.mf && this.$f(o, this.jf.Uf), this.qf()
        }
      }
    }, this.Yf = t, this.jf = e, this.cn = s, this.Zf()
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
    const s = this.Lf(t);
    this.$f(s, this.jf.Jf), this.Of = !0
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
    const e = os(t.changedTouches, y(this.Vf));
    if (e === null || (this.Df = ze(t), this.yf !== null) || this.Pf) return;
    this.Tf = !0;
    const s = this.Nf(Mt(e), y(this.vf)),
      {
        iv: i,
        nv: o,
        Ef: r
      } = s;
    if (this.pf || !(r < 5)) {
      if (!this.pf) {
        const l = .5 * i,
          h = o >= l && !this.cn.sv(),
          a = l > o && !this.cn.ev();
        h || a || (this.Pf = !0), this.pf = !0, this.bf = !0, this.Xf(), this.Hf()
      }
      if (!this.Pf) {
        const l = this.Lf(t, e);
        this.Ff(l, this.jf.rv), Ut(t)
      }
    }
  }
  hv(t) {
    if (t.button !== 0) return;
    const e = this.Nf(Mt(t), y(this.ff)),
      {
        Ef: s
      } = e;
    if (s >= 5 && (this.mf = !0, this.qf()), this.mf) {
      const i = this.Lf(t);
      this.$f(i, this.jf.lv)
    }
  }
  Nf(t, e) {
    const s = Math.abs(e.nt - t.nt),
      i = Math.abs(e.st - t.st);
    return {
      iv: s,
      nv: i,
      Ef: s + i
    }
  }
  av(t) {
    let e = os(t.changedTouches, y(this.Vf));
    if (e === null && t.touches.length === 0 && (e = t.changedTouches[0]), e === null) return;
    this.Vf = null, this.Df = ze(t), this.Xf(), this.vf = null, this.kf && (this.kf(), this.kf = null);
    const s = this.Lf(t, e);
    if (this.Ff(s, this.jf.ov), ++this.af, this._f && this.af > 1) {
      const {
        Ef: i
      } = this.Nf(Mt(e), this.uf);
      i < 30 && !this.bf && this.Ff(s, this.jf.Wf), this.Hf()
    } else this.bf || (this.Ff(s, this.jf._v), this.jf._v && Ut(t));
    this.af === 0 && Ut(t), t.touches.length === 0 && this.df && (this.df = !1, Ut(t))
  }
  Af(t) {
    if (t.button !== 0) return;
    const e = this.Lf(t);
    if (this.ff = null, this.Rf = !1, this.Sf && (this.Sf(), this.Sf = null), wi() && this.Yf.ownerDocument.documentElement.removeEventListener("mouseleave", this.Bf), !this.zf(t))
      if (this.$f(e, this.jf.uv), ++this.rf, this.hf && this.rf > 1) {
        const {
          Ef: s
        } = this.Nf(Mt(t), this.lf);
        s < 5 && !this.mf && this.$f(e, this.jf.Uf), this.qf()
      } else this.mf || this.$f(e, this.jf.cv)
  }
  Xf() {
    this.cf !== null && (clearTimeout(this.cf), this.cf = null)
  }
  dv(t) {
    if (this.Vf !== null) return;
    const e = t.changedTouches[0];
    this.Vf = e.identifier, this.Df = ze(t);
    const s = this.Yf.ownerDocument.documentElement;
    this.bf = !1, this.pf = !1, this.Pf = !1, this.vf = Mt(e), this.kf && (this.kf(), this.kf = null);
    {
      const o = this.tv.bind(this),
        r = this.av.bind(this);
      this.kf = () => {
        s.removeEventListener("touchmove", o), s.removeEventListener("touchend", r)
      }, s.addEventListener("touchmove", o, {
        passive: !1
      }), s.addEventListener("touchend", r, {
        passive: !1
      }), this.Xf(), this.cf = setTimeout(this.fv.bind(this, t), 240)
    }
    const i = this.Lf(t, e);
    this.Ff(i, this.jf.vv), this._f || (this.af = 0, this._f = setTimeout(this.Hf.bind(this), 500), this.uf = Mt(e))
  }
  pv(t) {
    if (t.button !== 0) return;
    const e = this.Yf.ownerDocument.documentElement;
    wi() && e.addEventListener("mouseleave", this.Bf), this.mf = !1, this.ff = Mt(t), this.Sf && (this.Sf(), this.Sf = null);
    {
      const i = this.hv.bind(this),
        o = this.Af.bind(this);
      this.Sf = () => {
        e.removeEventListener("mousemove", i), e.removeEventListener("mouseup", o)
      }, e.addEventListener("mousemove", i), e.addEventListener("mouseup", o)
    }
    if (this.Rf = !0, this.zf(t)) return;
    const s = this.Lf(t);
    this.$f(s, this.jf.mv), this.hf || (this.rf = 0, this.hf = setTimeout(this.qf.bind(this), 500), this.lf = Mt(t))
  }
  Zf() {
    this.Yf.addEventListener("mouseenter", this.Kf.bind(this)), this.Yf.addEventListener("touchcancel", this.Xf.bind(this));
    {
      const t = this.Yf.ownerDocument,
        e = s => {
          this.jf.bv && (s.composed && this.Yf.contains(s.composedPath()[0]) || s.target && this.Yf.contains(s.target) || this.jf.bv())
        };
      this.gf = () => {
        t.removeEventListener("touchstart", e)
      }, this.wf = () => {
        t.removeEventListener("mousedown", e)
      }, t.addEventListener("mousedown", e), t.addEventListener("touchstart", e, {
        passive: !0
      })
    }
    ss() && (this.Mf = () => {
      this.Yf.removeEventListener("dblclick", this.If)
    }, this.Yf.addEventListener("dblclick", this.If)), this.Yf.addEventListener("mouseleave", this.wv.bind(this)), this.Yf.addEventListener("touchstart", this.dv.bind(this), {
      passive: !0
    }), fh(this.Yf), this.Yf.addEventListener("mousedown", this.pv.bind(this)), this.gv(), this.Yf.addEventListener("touchmove", () => {}, {
      passive: !1
    })
  }
  gv() {
    this.jf.Mv === void 0 && this.jf.xv === void 0 && this.jf.Sv === void 0 || (this.Yf.addEventListener("touchstart", t => this.kv(t.touches), {
      passive: !0
    }), this.Yf.addEventListener("touchmove", t => {
      if (t.touches.length === 2 && this.yf !== null && this.jf.xv !== void 0) {
        const e = yi(t.touches[0], t.touches[1]) / this.Cf;
        this.jf.xv(this.yf, e), Ut(t)
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
    }, this.Cf = yi(t[0], t[1]), this.jf.Mv !== void 0 && this.jf.Mv(), this.Xf()
  }
  yv() {
    this.yf !== null && (this.yf = null, this.jf.Sv !== void 0 && this.jf.Sv())
  }
  wv(t) {
    if (this.xf && this.xf(), this.zf(t) || !this.Of) return;
    const e = this.Lf(t);
    this.$f(e, this.jf.Tv), this.Of = !ss()
  }
  fv(t) {
    const e = os(t.touches, y(this.Vf));
    if (e === null) return;
    const s = this.Lf(t, e);
    this.Ff(s, this.jf.Pv), this.bf = !0, this.df = !0
  }
  zf(t) {
    return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents !== void 0 ? t.sourceCapabilities.firesTouchEvents : ze(t) < this.Df + 500
  }
  Ff(t, e) {
    e && e.call(this.jf, t)
  }
  $f(t, e) {
    e && e.call(this.jf, t)
  }
  Lf(t, e) {
    const s = e || t,
      i = this.Yf.getBoundingClientRect() || {
        left: 0,
        top: 0
      };
    return {
      clientX: s.clientX,
      clientY: s.clientY,
      pageX: s.pageX,
      pageY: s.pageY,
      screenX: s.screenX,
      screenY: s.screenY,
      localX: s.clientX - i.left,
      localY: s.clientY - i.top,
      ctrlKey: t.ctrlKey,
      altKey: t.altKey,
      shiftKey: t.shiftKey,
      metaKey: t.metaKey,
      Rv: !t.type.startsWith("mouse") && t.type !== "contextmenu" && t.type !== "click",
      Dv: t.type,
      Vv: s.target,
      Ov: t.view,
      Bv: () => {
        t.type !== "touchstart" && Ut(t)
      }
    }
  }
}

function yi(n, t) {
  const e = n.clientX - t.clientX,
    s = n.clientY - t.clientY;
  return Math.sqrt(e * e + s * s)
}

function Ut(n) {
  n.cancelable && n.preventDefault()
}

function Mt(n) {
  return {
    nt: n.pageX,
    st: n.pageY
  }
}

function ze(n) {
  return n.timeStamp || performance.now()
}

function os(n, t) {
  for (let e = 0; e < n.length; ++e)
    if (n[e].identifier === t) return n[e];
  return null
}

function $e(n) {
  return {
    jc: n.jc,
    Av: {
      wr: n.Iv.externalId
    },
    zv: n.Iv.cursorStyle
  }
}

function mh(n, t, e) {
  for (const s of n) {
    const i = s.gt();
    if (i !== null && i.br) {
      const o = i.br(t, e);
      if (o !== null) return {
        Ov: s,
        Av: o
      }
    }
  }
  return null
}

function rs(n, t) {
  return e => {
    var s, i, o, r;
    return ((i = (s = e.Dt()) === null || s === void 0 ? void 0 : s.Ta()) !== null && i !== void 0 ? i : "") !== t ? [] : (r = (o = e.ca) === null || o === void 0 ? void 0 : o.call(e, n)) !== null && r !== void 0 ? r : []
  }
}

function Mi(n, t, e, s) {
  if (!n.length) return;
  let i = 0;
  const o = e / 2,
    r = n[0].At(s, !0);
  let l = t === 1 ? o - (n[0].Vi() - r / 2) : n[0].Vi() - r / 2 - o;
  l = Math.max(0, l);
  for (let h = 1; h < n.length; h++) {
    const a = n[h],
      c = n[h - 1],
      u = c.At(s, !1),
      d = a.Vi(),
      f = c.Vi();
    if (t === 1 ? d > f - u : d < f + u) {
      const m = f - u * t;
      a.Oi(m);
      const p = m - t * u / 2;
      if ((t === 1 ? p < 0 : p > e) && l > 0) {
        const b = t === 1 ? -1 - p : p - e,
          w = Math.min(b, l);
        for (let M = i; M < n.length; M++) n[M].Oi(n[M].Vi() + t * w);
        l -= w
      }
    } else i = h, l = t === 1 ? f - u - d : d - (f + u)
  }
}
class Si {
  constructor(t, e, s, i) {
    this.Li = null, this.Lv = null, this.Ev = !1, this.Nv = new de(200), this.Jr = null, this.Fv = 0, this.Wv = !1, this.jv = () => {
      this.Wv || this.tn.Hv().$t().$h()
    }, this.$v = () => {
      this.Wv || this.tn.Hv().$t().$h()
    }, this.tn = t, this.cn = e, this.So = e.layout, this.Vc = s, this.Uv = i === "left", this.qv = rs("normal", i), this.Yv = rs("top", i), this.Zv = rs("bottom", i), this.Xv = document.createElement("div"), this.Xv.style.height = "100%", this.Xv.style.overflow = "hidden", this.Xv.style.width = "25px", this.Xv.style.left = "0", this.Xv.style.position = "relative", this.Kv = Dt(this.Xv, J({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const o = this.Kv.canvasElement;
    o.style.position = "absolute", o.style.zIndex = "1", o.style.left = "0", o.style.top = "0", this.Gv = Dt(this.Xv, J({
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
    this.rp = new Rs(this.Gv.canvasElement, l, {
      sv: () => !this.cn.handleScroll.vertTouchDrag,
      ev: () => !0
    })
  }
  S() {
    this.rp.S(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Nt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Nt(this.Kv.canvasElement), this.Kv.dispose(), this.Li !== null && this.Li.Xo().p(this), this.Li = null
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
      s = y(this.Kv.canvasElement.getContext("2d"));
    s.save();
    const i = this.Li.ja();
    s.font = this.op(), i.length > 0 && (t = Math.max(this.Nv.xi(s, i[0].no), this.Nv.xi(s, i[i.length - 1].no)));
    const o = this._p();
    for (let h = o.length; h--;) {
      const a = this.Nv.xi(s, o[h].Kt());
      a > t && (t = a)
    }
    const r = this.Li.Ct();
    if (r !== null && this.Lv !== null) {
      const h = this.Li.pn(1, r),
        a = this.Li.pn(this.Lv.height - 2, r);
      t = Math.max(t, this.Nv.xi(s, this.Li.Fi(Math.floor(Math.min(h, a)) + .11111111111111, r)), this.Nv.xi(s, this.Li.Fi(Math.ceil(Math.max(h, a)) - .11111111111111, r)))
    }
    s.restore();
    const l = t || 34;
    return _s(Math.ceil(e.C + e.T + e.A + e.I + 5 + l))
  }
  up(t) {
    this.Lv !== null && Wt(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`)
  }
  cp() {
    return y(this.Lv).width
  }
  Gi(t) {
    this.Li !== t && (this.Li !== null && this.Li.Xo().p(this), this.Li = t, t.Xo().l(this.do.bind(this), this))
  }
  Dt() {
    return this.Li
  }
  ir() {
    const t = this.tn.dp();
    this.tn.Hv().$t().L_(t, y(this.Dt()))
  }
  fp(t) {
    if (this.Lv === null) return;
    if (t !== 1) {
      this.vp(), this.Kv.applySuggestedBitmapSize();
      const s = Bt(this.Kv);
      s !== null && (s.useBitmapCoordinateSpace(i => {
        this.pp(i), this.Ae(i)
      }), this.tn.mp(s, this.Zv), this.bp(s), this.tn.mp(s, this.qv), this.wp(s))
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Bt(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: s,
      bitmapSize: i
    }) => {
      s.clearRect(0, 0, i.width, i.height)
    }), this.gp(e), this.tn.mp(e, this.Yv))
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, s) {
    const i = this.Mp();
    i.width > 0 && i.height > 0 && t.drawImage(this.Kv.canvasElement, e, s)
  }
  bt() {
    var t;
    (t = this.Li) === null || t === void 0 || t.ja()
  }
  Jv(t) {
    if (this.Li === null || this.Li.Ni() || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const e = this.tn.Hv().$t(),
      s = this.tn.dp();
    this.Ev = !0, e.D_(s, this.Li, t.localY)
  }
  Qv(t) {
    if (this.Li === null || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const e = this.tn.Hv().$t(),
      s = this.tn.dp(),
      i = this.Li;
    e.V_(s, i, t.localY)
  }
  tp() {
    if (this.Li === null || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const t = this.tn.Hv().$t(),
      e = this.tn.dp(),
      s = this.Li;
    this.Ev && (this.Ev = !1, t.O_(e, s))
  }
  ip(t) {
    if (this.Li === null || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const e = this.tn.Hv().$t(),
      s = this.tn.dp();
    this.Ev = !1, e.O_(s, this.Li)
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
    return (s => {
      for (let i = 0; i < s.length; ++i) {
        const o = s[i].Rn(this.tn.dp(), e);
        for (let r = 0; r < o.length; r++) t.push(o[r])
      }
    })(this.tn.dp().$o()), t
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    const {
      width: s,
      height: i
    } = e, o = this.tn.dp().$t(), r = o.q(), l = o.md();
    r === l ? De(t, 0, 0, s, i, r) : en(t, 0, 0, s, i, r, l)
  }
  Ae({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: s
  }) {
    if (this.Lv === null || this.Li === null || !this.Li.W().borderVisible) return;
    t.fillStyle = this.Li.W().borderColor;
    const i = Math.max(1, Math.floor(this.lp().C * s));
    let o;
    o = this.Uv ? e.width - i : 0, t.fillRect(o, 0, i, e.height)
  }
  bp(t) {
    if (this.Lv === null || this.Li === null) return;
    const e = this.Li.ja(),
      s = this.Li.W(),
      i = this.lp(),
      o = this.Uv ? this.Lv.width - i.T : 0;
    s.borderVisible && s.ticksVisible && t.useBitmapCoordinateSpace(({
      context: r,
      horizontalPixelRatio: l,
      verticalPixelRatio: h
    }) => {
      r.fillStyle = s.borderColor;
      const a = Math.max(1, Math.floor(h)),
        c = Math.floor(.5 * h),
        u = Math.round(i.T * l);
      r.beginPath();
      for (const d of e) r.rect(Math.floor(o * l), Math.round(d.La * h) - c, u, a);
      r.fill()
    }), t.useMediaCoordinateSpace(({
      context: r
    }) => {
      var l;
      r.font = this.op(), r.fillStyle = (l = s.textColor) !== null && l !== void 0 ? l : this.So.textColor, r.textAlign = this.Uv ? "right" : "left", r.textBaseline = "middle";
      const h = this.Uv ? Math.round(o - i.A) : Math.round(o + i.T + i.A),
        a = e.map(c => this.Nv.Mi(r, c.no));
      for (let c = e.length; c--;) {
        const u = e[c];
        r.fillText(u.no, h, u.La + a[c])
      }
    })
  }
  vp() {
    if (this.Lv === null || this.Li === null) return;
    const t = [],
      e = this.Li.$o().slice(),
      s = this.tn.dp(),
      i = this.lp();
    this.Li === s.vr() && this.tn.dp().$o().forEach(r => {
      s.dr(r) && e.push(r)
    });
    const o = this.Li;
    e.forEach(r => {
      r.Rn(s, o).forEach(l => {
        l.Oi(null), l.Bi() && t.push(l)
      })
    }), t.forEach(r => r.Oi(r.ki())), this.Li.W().alignLabels && this.kp(t, i)
  }
  kp(t, e) {
    if (this.Lv === null) return;
    const s = this.Lv.height / 2,
      i = t.filter(r => r.ki() <= s),
      o = t.filter(r => r.ki() > s);
    i.sort((r, l) => l.ki() - r.ki()), o.sort((r, l) => r.ki() - l.ki());
    for (const r of t) {
      const l = Math.floor(r.At(e) / 2),
        h = r.ki();
      h > -l && h < l && r.Oi(l), h > this.Lv.height - l && h < this.Lv.height + l && r.Oi(this.Lv.height - l)
    }
    Mi(i, 1, this.Lv.height, e), Mi(o, -1, this.Lv.height, e)
  }
  wp(t) {
    if (this.Lv === null) return;
    const e = this._p(),
      s = this.lp(),
      i = this.Uv ? "right" : "left";
    e.forEach(o => {
      o.Ai() && o.gt(y(this.Li)).X(t, s, this.Nv, i)
    })
  }
  gp(t) {
    if (this.Lv === null || this.Li === null) return;
    const e = this.tn.Hv().$t(),
      s = [],
      i = this.tn.dp(),
      o = e.Yc().Rn(i, this.Li);
    o.length && s.push(o);
    const r = this.lp(),
      l = this.Uv ? "right" : "left";
    s.forEach(h => {
      h.forEach(a => {
        a.gt(y(this.Li)).X(t, r, this.Nv, l)
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
    return Zt(this.So.fontSize, this.So.fontFamily)
  }
}

function ph(n, t) {
  var e, s;
  return (s = (e = n._a) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && s !== void 0 ? s : []
}

function Le(n, t) {
  var e, s;
  return (s = (e = n.Pn) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && s !== void 0 ? s : []
}

function vh(n, t) {
  var e, s;
  return (s = (e = n.Ji) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && s !== void 0 ? s : []
}

function bh(n, t) {
  var e, s;
  return (s = (e = n.la) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && s !== void 0 ? s : []
}
class Is {
  constructor(t, e) {
    this.Lv = J({
      width: 0,
      height: 0
    }), this.yp = null, this.Cp = null, this.Tp = null, this.Pp = null, this.Rp = !1, this.Dp = new q, this.Vp = new q, this.Op = 0, this.Bp = !1, this.Ap = null, this.Ip = !1, this.zp = null, this.Lp = null, this.Wv = !1, this.jv = () => {
      this.Wv || this.Ep === null || this.$i().$h()
    }, this.$v = () => {
      this.Wv || this.Ep === null || this.$i().$h()
    }, this.Jd = t, this.Ep = e, this.Ep.F_().l(this.Np.bind(this), this, !0), this.Fp = document.createElement("td"), this.Fp.style.padding = "0", this.Fp.style.position = "relative";
    const s = document.createElement("div");
    s.style.width = "100%", s.style.height = "100%", s.style.position = "relative", s.style.overflow = "hidden", this.Wp = document.createElement("td"), this.Wp.style.padding = "0", this.jp = document.createElement("td"), this.jp.style.padding = "0", this.Fp.appendChild(s), this.Kv = Dt(s, J({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const i = this.Kv.canvasElement;
    i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.Gv = Dt(s, J({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const o = this.Gv.canvasElement;
    o.style.position = "absolute", o.style.zIndex = "2", o.style.left = "0", o.style.top = "0", this.Hp = document.createElement("tr"), this.Hp.appendChild(this.Wp), this.Hp.appendChild(this.Fp), this.Hp.appendChild(this.jp), this.$p(), this.rp = new Rs(this.Gv.canvasElement, this, {
      sv: () => this.Ap === null && !this.Jd.W().handleScroll.vertTouchDrag,
      ev: () => this.Ap === null && !this.Jd.W().handleScroll.horzTouchDrag
    })
  }
  S() {
    this.yp !== null && this.yp.S(), this.Cp !== null && this.Cp.S(), this.Tp = null, this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Nt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Nt(this.Kv.canvasElement), this.Kv.dispose(), this.Ep !== null && this.Ep.F_().p(this), this.rp.S()
  }
  dp() {
    return y(this.Ep)
  }
  Up(t) {
    var e, s;
    this.Ep !== null && this.Ep.F_().p(this), this.Ep = t, this.Ep !== null && this.Ep.F_().l(Is.prototype.Np.bind(this), this, !0), this.$p(), this.Jd.qp().indexOf(this) === this.Jd.qp().length - 1 ? (this.Tp = (e = this.Tp) !== null && e !== void 0 ? e : new dh(this.Fp, this.Jd), this.Tp.bt()) : ((s = this.Tp) === null || s === void 0 || s.tf(), this.Tp = null)
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
        this.yp.Gi(y(t))
      }
      if (this.Cp !== null) {
        const t = this.Ep.R_();
        this.Cp.Gi(y(t))
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
      s = t.localY;
    this.Kp(e, s, t)
  }
  mv(t) {
    this.Xp(), this.Gp(), this.Kp(t.localX, t.localY, t)
  }
  Qf(t) {
    var e;
    if (!this.Ep) return;
    this.Xp();
    const s = t.localX,
      i = t.localY;
    this.Kp(s, i, t);
    const o = this.br(s, i);
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
    const s = 5 * (e - this.Op);
    this.Op = e, this.$i().Jc(t.nt, s)
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
      s = t.localY;
    if (this.Ap === null) this.im(t);
    else {
      this.Ip = !1;
      const i = y(this.zp),
        o = i.x + (e - this.Ap.x),
        r = i.y + (s - this.Ap.y);
      this.Kp(o, r, t)
    }
  }
  ov(t) {
    this.Hv().W().trackingMode.exitMode === 0 && (this.Ip = !0), this.am(), this.nm(t)
  }
  br(t, e) {
    const s = this.Ep;
    return s === null ? null : function(i, o, r) {
      const l = i.$o(),
        h = function(a, c, u) {
          var d, f;
          let m, p;
          for (const M of a) {
            const $ = (f = (d = M.fa) === null || d === void 0 ? void 0 : d.call(M, c, u)) !== null && f !== void 0 ? f : [];
            for (const j of $) b = j.zOrder, (!(w = m == null ? void 0 : m.zOrder) || b === "top" && w !== "top" || b === "normal" && w === "bottom") && (m = j, p = M)
          }
          var b, w;
          return m && p ? {
            Iv: m,
            jc: p
          } : null
        }(l, o, r);
      if ((h == null ? void 0 : h.Iv.zOrder) === "top") return $e(h);
      for (const a of l) {
        if (h && h.jc === a && h.Iv.zOrder !== "bottom" && !h.Iv.isBackground) return $e(h);
        const c = mh(a.Pn(i), o, r);
        if (c !== null) return {
          jc: a,
          Ov: c.Ov,
          Av: c.Av
        };
        if (h && h.jc === a && h.Iv.zOrder !== "bottom" && h.Iv.isBackground) return $e(h)
      }
      return h != null && h.Iv ? $e(h) : null
    }(s, t, e)
  }
  om(t, e) {
    y(e === "left" ? this.yp : this.Cp).up(J({
      width: t,
      height: this.Lv.height
    }))
  }
  _m() {
    return this.Lv
  }
  up(t) {
    Wt(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Fp.style.width = t.width + "px", this.Fp.style.height = t.height + "px")
  }
  um() {
    const t = y(this.Ep);
    t.T_(t.P_()), t.T_(t.R_());
    for (const e of t.Oa())
      if (t.dr(e)) {
        const s = e.Dt();
        s !== null && t.T_(s), e.Vn()
      }
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, s) {
    const i = this.Mp();
    i.width > 0 && i.height > 0 && t.drawImage(this.Kv.canvasElement, e, s)
  }
  fp(t) {
    if (t === 0 || this.Ep === null) return;
    if (t > 1 && this.um(), this.yp !== null && this.yp.fp(t), this.Cp !== null && this.Cp.fp(t), t !== 1) {
      this.Kv.applySuggestedBitmapSize();
      const s = Bt(this.Kv);
      s !== null && (s.useBitmapCoordinateSpace(i => {
        this.pp(i)
      }), this.Ep && (this.dm(s, ph), this.fm(s), this.vm(s), this.dm(s, Le), this.dm(s, vh)))
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Bt(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: s,
      bitmapSize: i
    }) => {
      s.clearRect(0, 0, i.width, i.height)
    }), this.pm(e), this.dm(e, bh))
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
    const s = e.localX,
      i = e.localY;
    t.M() && t.m(this.$i().St().Eu(s), {
      x: s,
      y: i
    }, e)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    const {
      width: s,
      height: i
    } = e, o = this.$i(), r = o.q(), l = o.md();
    r === l ? De(t, 0, 0, s, i, l) : en(t, 0, 0, s, i, r, l)
  }
  fm(t) {
    const e = y(this.Ep).W_().Uh().gt();
    e !== null && e.X(t, !1)
  }
  vm(t) {
    const e = this.$i().qc();
    this.gm(t, Le, ws, e), this.gm(t, Le, Te, e)
  }
  pm(t) {
    this.gm(t, Le, Te, this.$i().Yc())
  }
  dm(t, e) {
    const s = y(this.Ep).$o();
    for (const i of s) this.gm(t, e, ws, i);
    for (const i of s) this.gm(t, e, Te, i)
  }
  gm(t, e, s, i) {
    const o = y(this.Ep),
      r = o.$t().Fc(),
      l = r !== null && r.jc === i,
      h = r !== null && l && r.Av !== void 0 ? r.Av.gr : void 0;
    ys(e, a => s(a, t, l, h), i, o)
  }
  Yp() {
    if (this.Ep === null) return;
    const t = this.Jd,
      e = this.Ep.P_().W().visible,
      s = this.Ep.R_().W().visible;
    e || this.yp === null || (this.Wp.removeChild(this.yp.hp()), this.yp.S(), this.yp = null), s || this.Cp === null || (this.jp.removeChild(this.Cp.hp()), this.Cp.S(), this.Cp = null);
    const i = t.$t()._d();
    e && this.yp === null && (this.yp = new Si(this, t.W(), i, "left"), this.Wp.appendChild(this.yp.hp())), s && this.Cp === null && (this.Cp = new Si(this, t.W(), i, "right"), this.jp.appendChild(this.Cp.hp()))
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
  Kp(t, e, s) {
    this.$i().hd(this.xm(t), this.Sm(e), s, y(this.Ep))
  }
  rm() {
    this.$i().ad()
  }
  am() {
    this.Ip && (this.Ap = null, this.rm())
  }
  sm(t, e, s) {
    this.Ap = t, this.Ip = !1, this.Kp(e.x, e.y, s);
    const i = this.$i().Yc();
    this.zp = {
      x: i.Yt(),
      y: i.Zt()
    }
  }
  $i() {
    return this.Jd.$t()
  }
  nm(t) {
    if (!this.Rp) return;
    const e = this.$i(),
      s = this.dp();
    if (e.I_(s, s.vn()), this.Pp = null, this.Rp = !1, e.sd(), this.Lp !== null) {
      const i = performance.now(),
        o = e.St();
      this.Lp.Dr(o.ju(), i), this.Lp.Ju(i) || e.Zn(this.Lp)
    }
  }
  Xp() {
    this.Ap = null
  }
  Gp() {
    if (this.Ep) {
      if (this.$i().Un(), document.activeElement !== document.body && document.activeElement !== document.documentElement) y(document.activeElement).blur();
      else {
        const t = document.getSelection();
        t !== null && t.removeAllRanges()
      }!this.Ep.vn().Ni() && this.$i().St().Ni()
    }
  }
  im(t) {
    if (this.Ep === null) return;
    const e = this.$i(),
      s = e.St();
    if (s.Ni()) return;
    const i = this.Jd.W(),
      o = i.handleScroll,
      r = i.kineticScroll;
    if ((!o.pressedMouseMove || t.Rv) && (!o.horzTouchDrag && !o.vertTouchDrag || !t.Rv)) return;
    const l = this.Ep.vn(),
      h = performance.now();
    if (this.Pp !== null || this.Mm(t) || (this.Pp = {
        x: t.clientX,
        y: t.clientY,
        Vd: h,
        km: t.localX,
        ym: t.localY
      }), this.Pp !== null && !this.Rp && (this.Pp.x !== t.clientX || this.Pp.y !== t.clientY)) {
      if (t.Rv && r.touch || !t.Rv && r.mouse) {
        const a = s.he();
        this.Lp = new uh(.2 / a, 7 / a, .997, 15 / a), this.Lp.qd(s.ju(), this.Pp.Vd)
      } else this.Lp = null;
      l.Ni() || e.B_(this.Ep, l, t.localY), e.td(t.localX), this.Rp = !0
    }
    this.Rp && (l.Ni() || e.A_(this.Ep, l, t.localY), e.nd(t.localX), this.Lp !== null && this.Lp.qd(s.ju(), h))
  }
}
class ki {
  constructor(t, e, s, i, o) {
    this.ft = !0, this.Lv = J({
      width: 0,
      height: 0
    }), this.jv = () => this.fp(3), this.Uv = t === "left", this.Vc = s._d, this.cn = e, this.Cm = i, this.Tm = o, this.Xv = document.createElement("div"), this.Xv.style.width = "25px", this.Xv.style.height = "100%", this.Xv.style.overflow = "hidden", this.Kv = Dt(this.Xv, J({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv)
  }
  S() {
    this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Nt(this.Kv.canvasElement), this.Kv.dispose()
  }
  hp() {
    return this.Xv
  }
  _m() {
    return this.Lv
  }
  up(t) {
    Wt(this.Lv, t) || (this.Lv = t, this.Kv.resizeCanvasElement(t), this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`, this.ft = !0)
  }
  fp(t) {
    if (t < 3 && !this.ft || this.Lv.width === 0 || this.Lv.height === 0) return;
    this.ft = !1, this.Kv.applySuggestedBitmapSize();
    const e = Bt(this.Kv);
    e !== null && e.useBitmapCoordinateSpace(s => {
      this.pp(s), this.Ae(s)
    })
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, s) {
    const i = this.Mp();
    i.width > 0 && i.height > 0 && t.drawImage(this.Kv.canvasElement, e, s)
  }
  Ae({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: s,
    verticalPixelRatio: i
  }) {
    if (!this.Cm()) return;
    t.fillStyle = this.cn.timeScale.borderColor;
    const o = Math.floor(this.Vc.W().C * s),
      r = Math.floor(this.Vc.W().C * i),
      l = this.Uv ? e.width - o : 0;
    t.fillRect(l, 0, o, r)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    De(t, 0, 0, e.width, e.height, this.Tm())
  }
}

function Ws(n) {
  return t => {
    var e, s;
    return (s = (e = t.da) === null || e === void 0 ? void 0 : e.call(t, n)) !== null && s !== void 0 ? s : []
  }
}
const gh = Ws("normal"),
  _h = Ws("top"),
  wh = Ws("bottom");
class yh {
  constructor(t, e) {
    this.Pm = null, this.Rm = null, this.k = null, this.Dm = !1, this.Lv = J({
      width: 0,
      height: 0
    }), this.Vm = new q, this.Nv = new de(5), this.Wv = !1, this.jv = () => {
      this.Wv || this.Jd.$t().$h()
    }, this.$v = () => {
      this.Wv || this.Jd.$t().$h()
    }, this.Jd = t, this.U_ = e, this.cn = t.W().layout, this.Zd = document.createElement("tr"), this.Om = document.createElement("td"), this.Om.style.padding = "0", this.Bm = document.createElement("td"), this.Bm.style.padding = "0", this.Xv = document.createElement("td"), this.Xv.style.height = "25px", this.Xv.style.padding = "0", this.Am = document.createElement("div"), this.Am.style.width = "100%", this.Am.style.height = "100%", this.Am.style.position = "relative", this.Am.style.overflow = "hidden", this.Xv.appendChild(this.Am), this.Kv = Dt(this.Am, J({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const s = this.Kv.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "1", s.style.left = "0", s.style.top = "0", this.Gv = Dt(this.Am, J({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const i = this.Gv.canvasElement;
    i.style.position = "absolute", i.style.zIndex = "2", i.style.left = "0", i.style.top = "0", this.Zd.appendChild(this.Om), this.Zd.appendChild(this.Xv), this.Zd.appendChild(this.Bm), this.Im(), this.Jd.$t().w_().l(this.Im.bind(this), this), this.rp = new Rs(this.Gv.canvasElement, this, {
      sv: () => !0,
      ev: () => !this.Jd.W().handleScroll.horzTouchDrag
    })
  }
  S() {
    this.rp.S(), this.Pm !== null && this.Pm.S(), this.Rm !== null && this.Rm.S(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Nt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Nt(this.Kv.canvasElement), this.Kv.dispose()
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
  Nm(t, e, s) {
    Wt(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`, this.Vm.m(t)), this.Pm !== null && this.Pm.up(J({
      width: e,
      height: t.height
    })), this.Rm !== null && this.Rm.up(J({
      width: s,
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
  xp(t, e, s) {
    const i = this.Mp();
    i.width > 0 && i.height > 0 && t.drawImage(this.Kv.canvasElement, e, s)
  }
  fp(t) {
    if (t === 0) return;
    if (t !== 1) {
      this.Kv.applySuggestedBitmapSize();
      const s = Bt(this.Kv);
      s !== null && (s.useBitmapCoordinateSpace(i => {
        this.pp(i), this.Ae(i), this.Hm(s, wh)
      }), this.bp(s), this.Hm(s, gh)), this.Pm !== null && this.Pm.fp(t), this.Rm !== null && this.Rm.fp(t)
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Bt(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: s,
      bitmapSize: i
    }) => {
      s.clearRect(0, 0, i.width, i.height)
    }), this.$m([...this.Jd.$t().wt(), this.Jd.$t().Yc()], e), this.Hm(e, _h))
  }
  Hm(t, e) {
    const s = this.Jd.$t().wt();
    for (const i of s) ys(e, o => ws(o, t, !1, void 0), i, void 0);
    for (const i of s) ys(e, o => Te(o, t, !1, void 0), i, void 0)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    De(t, 0, 0, e.width, e.height, this.Jd.$t().md())
  }
  Ae({
    context: t,
    bitmapSize: e,
    verticalPixelRatio: s
  }) {
    if (this.Jd.W().timeScale.borderVisible) {
      t.fillStyle = this.Um();
      const i = Math.max(1, Math.floor(this.Wm().C * s));
      t.fillRect(0, 0, e.width, i)
    }
  }
  bp(t) {
    const e = this.Jd.$t().St(),
      s = e.ja();
    if (!s || s.length === 0) return;
    const i = this.U_.maxTickMarkWeight(s),
      o = this.Wm(),
      r = e.W();
    r.borderVisible && r.ticksVisible && t.useBitmapCoordinateSpace(({
      context: l,
      horizontalPixelRatio: h,
      verticalPixelRatio: a
    }) => {
      l.strokeStyle = this.Um(), l.fillStyle = this.Um();
      const c = Math.max(1, Math.floor(h)),
        u = Math.floor(.5 * h);
      l.beginPath();
      const d = Math.round(o.T * a);
      for (let f = s.length; f--;) {
        const m = Math.round(s[f].coord * h);
        l.rect(m - u, 0, c, d)
      }
      l.fill()
    }), t.useMediaCoordinateSpace(({
      context: l
    }) => {
      const h = o.C + o.T + o.L + o.P / 2;
      l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = this.$(), l.font = this.op();
      for (const a of s)
        if (a.weight < i) {
          const c = a.needAlignCoordinate ? this.qm(l, a.coord, a.label) : a.coord;
          l.fillText(a.label, c, h)
        } this.Jd.W().timeScale.allowBoldLabels && (l.font = this.Ym());
      for (const a of s)
        if (a.weight >= i) {
          const c = a.needAlignCoordinate ? this.qm(l, a.coord, a.label) : a.coord;
          l.fillText(a.label, c, h)
        }
    })
  }
  qm(t, e, s) {
    const i = this.Nv.xi(t, s),
      o = i / 2,
      r = Math.floor(e - o) + .5;
    return r < 0 ? e += Math.abs(0 - r) : r + i > this.Lv.width && (e -= Math.abs(this.Lv.width - (r + i))), e
  }
  $m(t, e) {
    const s = this.Wm();
    for (const i of t)
      for (const o of i.Qi()) o.gt().X(e, s)
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
    return Zt(this.j(), this.cn.fontFamily)
  }
  Ym() {
    return Zt(this.j(), this.cn.fontFamily, "bold")
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
      Wi: new de,
      jm: 0
    });
    const t = this.k,
      e = this.op();
    if (t.R !== e) {
      const s = this.j();
      t.P = s, t.R = e, t.L = 3 * s / 12, t.B = 3 * s / 12, t.ji = 9 * s / 12, t.N = 0, t.jm = 4 * s / 12, t.Wi.ir()
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
    const s = {
        _d: this.Jd.$t()._d()
      },
      i = () => e.leftPriceScale.borderVisible && t.St().W().borderVisible,
      o = () => t.md();
    e.leftPriceScale.visible && this.Pm === null && (this.Pm = new ki("left", e, s, i, o), this.Om.appendChild(this.Pm.hp())), e.rightPriceScale.visible && this.Rm === null && (this.Rm = new ki("right", e, s, i, o), this.Bm.appendChild(this.Rm.hp()))
  }
}
const Mh = !!qt && !!navigator.userAgentData && navigator.userAgentData.brands.some(n => n.brand.includes("Chromium")) && !!qt && (!((ls = navigator == null ? void 0 : navigator.userAgentData) === null || ls === void 0) && ls.platform ? navigator.userAgentData.platform === "Windows" : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
var ls;
class Sh {
  constructor(t, e, s) {
    var i;
    this.Zm = [], this.Xm = 0, this.ro = 0, this.o_ = 0, this.Km = 0, this.Gm = 0, this.Jm = null, this.Qm = !1, this.Dp = new q, this.Vp = new q, this.Pc = new q, this.tb = null, this.ib = null, this.Gd = t, this.cn = e, this.U_ = s, this.Zd = document.createElement("div"), this.Zd.classList.add("tv-lightweight-charts"), this.Zd.style.overflow = "hidden", this.Zd.style.direction = "ltr", this.Zd.style.width = "100%", this.Zd.style.height = "100%", (i = this.Zd).style.userSelect = "none", i.style.webkitUserSelect = "none", i.style.msUserSelect = "none", i.style.MozUserSelect = "none", i.style.webkitTapHighlightColor = "transparent", this.nb = document.createElement("table"), this.nb.setAttribute("cellspacing", "0"), this.Zd.appendChild(this.nb), this.sb = this.eb.bind(this), hs(this.cn) && this.rb(!0), this.$i = new rh(this.Dc.bind(this), this.cn, s), this.$t().Zc().l(this.hb.bind(this), this), this.lb = new yh(this, this.U_), this.nb.appendChild(this.lb.hp());
    const o = e.autoSize && this.ab();
    let r = this.cn.width,
      l = this.cn.height;
    if (o || r === 0 || l === 0) {
      const h = t.getBoundingClientRect();
      r = r || h.width, l = l || h.height
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
    this.Zm = [], y(this.lb).S(), this.Zd.parentElement !== null && this.Zd.parentElement.removeChild(this.Zd), this.Pc.S(), this.Dp.S(), this.Vp.S(), this.fb()
  }
  ob(t, e, s = !1) {
    if (this.ro === e && this.o_ === t) return;
    const i = function(l) {
      const h = Math.floor(l.width),
        a = Math.floor(l.height);
      return J({
        width: h - h % 2,
        height: a - a % 2
      })
    }(J({
      width: t,
      height: e
    }));
    this.ro = i.height, this.o_ = i.width;
    const o = this.ro + "px",
      r = this.o_ + "px";
    y(this.Zd).style.height = o, y(this.Zd).style.width = r, this.nb.style.height = o, this.nb.style.width = r, s ? this.pb(et.es(), performance.now()) : this.$i.Xl()
  }
  fp(t) {
    t === void 0 && (t = et.es());
    for (let e = 0; e < this.Zm.length; e++) this.Zm[e].fp(t.Hn(e).Fn);
    this.cn.timeScale.visible && this.lb.fp(t.jn())
  }
  Hh(t) {
    const e = hs(this.cn);
    this.$i.Hh(t);
    const s = hs(this.cn);
    s !== e && this.rb(s), this.ub(), this.mb(t)
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
    const s = y(e.getContext("2d"));
    return this.wb(s), e
  }
  gb(t) {
    return t === "left" && !this.Mb() || t === "right" && !this.xb() || this.Zm.length === 0 ? 0 : y(t === "left" ? this.Zm[0].bm() : this.Zm[0].wm()).cp()
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
    return nt(this.Zm[0])._m()
  }
  mb(t) {
    (t.autoSize !== void 0 || !this.tb || t.width === void 0 && t.height === void 0) && (t.autoSize && !this.tb && this.ab(), t.autoSize === !1 && this.tb !== null && this.fb(), t.autoSize || t.width === void 0 && t.height === void 0 || this.ob(t.width || this.o_, t.height || this.ro))
  }
  wb(t) {
    let e = 0,
      s = 0;
    const i = this.Zm[0],
      o = (l, h) => {
        let a = 0;
        for (let c = 0; c < this.Zm.length; c++) {
          const u = this.Zm[c],
            d = y(l === "left" ? u.bm() : u.wm()),
            f = d.Mp();
          t !== null && d.xp(t, h, a), a += f.height
        }
      };
    this.Mb() && (o("left", 0), e += y(i.bm()).Mp().width);
    for (let l = 0; l < this.Zm.length; l++) {
      const h = this.Zm[l],
        a = h.Mp();
      t !== null && h.xp(t, e, s), s += a.height
    }
    e += i.Mp().width, this.xb() && (o("right", e), e += y(i.wm()).Mp().width);
    const r = (l, h, a) => {
      y(l === "left" ? this.lb.zm() : this.lb.Lm()).xp(y(t), h, a)
    };
    if (this.cn.timeScale.visible) {
      const l = this.lb.Mp();
      if (t !== null) {
        let h = 0;
        this.Mb() && (r("left", h, s), h = y(i.bm()).Mp().width), this.lb.xp(t, h, s), h += l.width, this.xb() && r("right", h, s)
      }
      s += l.height
    }
    return J({
      width: e,
      height: s
    })
  }
  Tb() {
    let t = 0,
      e = 0,
      s = 0;
    for (const m of this.Zm) this.Mb() && (e = Math.max(e, y(m.bm()).ap(), this.cn.leftPriceScale.minimumWidth)), this.xb() && (s = Math.max(s, y(m.wm()).ap(), this.cn.rightPriceScale.minimumWidth)), t += m.g_();
    e = _s(e), s = _s(s);
    const i = this.o_,
      o = this.ro,
      r = Math.max(i - e - s, 0),
      l = this.cn.timeScale.visible;
    let h = l ? Math.max(this.lb.Fm(), this.cn.timeScale.minimumHeight) : 0;
    var a;
    h = (a = h) + a % 2;
    const c = 0 + h,
      u = o < c ? 0 : o - c,
      d = u / t;
    let f = 0;
    for (let m = 0; m < this.Zm.length; ++m) {
      const p = this.Zm[m];
      p.Up(this.$i.Uc()[m]);
      let b = 0,
        w = 0;
      w = m === this.Zm.length - 1 ? u - f : Math.round(p.g_() * d), b = Math.max(w, 2), f += b, p.up(J({
        width: r,
        height: b
      })), this.Mb() && p.om(e, "left"), this.xb() && p.om(s, "right"), p.dp() && this.$i.Xc(p.dp(), b)
    }
    this.lb.Nm(J({
      width: l ? r : 0,
      height: h
    }), l ? e : 0, l ? s : 0), this.$i.x_(r), this.Km !== e && (this.Km = e), this.Gm !== s && (this.Gm = s)
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
    return Mh ? 1 / window.devicePixelRatio : 1
  }
  eb(t) {
    if (!(t.deltaX !== 0 && this.cn.handleScroll.mouseWheel || t.deltaY !== 0 && this.cn.handleScale.mouseWheel)) return;
    const e = this.Pb(t),
      s = e * t.deltaX / 100,
      i = -e * t.deltaY / 100;
    if (t.cancelable && t.preventDefault(), i !== 0 && this.cn.handleScale.mouseWheel) {
      const o = Math.sign(i) * Math.min(1, Math.abs(i)),
        r = t.clientX - this.Zd.getBoundingClientRect().left;
      this.$t().Jc(r, o)
    }
    s !== 0 && this.cn.handleScroll.mouseWheel && this.$t().Qc(-80 * s)
  }
  pb(t, e) {
    var s;
    const i = t.jn();
    i === 3 && this.Rb(), i !== 3 && i !== 2 || (this.Db(t), this.Vb(t, e), this.lb.bt(), this.Zm.forEach(o => {
      o.Zp()
    }), ((s = this.Jm) === null || s === void 0 ? void 0 : s.jn()) === 3 && (this.Jm.ts(t), this.Rb(), this.Db(this.Jm), this.Vb(this.Jm, e), t = this.Jm, this.Jm = null)), this.fp(t)
  }
  Vb(t, e) {
    for (const s of t.Qn()) this.ns(s, e)
  }
  Db(t) {
    const e = this.$i.Uc();
    for (let s = 0; s < e.length; s++) t.Hn(s).Wn && e[s].E_()
  }
  ns(t, e) {
    const s = this.$i.St();
    switch (t.qn) {
      case 0:
        s.rc();
        break;
      case 1:
        s.hc(t.Vt);
        break;
      case 2:
        s.Gn(t.Vt);
        break;
      case 3:
        s.Jn(t.Vt);
        break;
      case 4:
        s.Uu();
        break;
      case 5:
        t.Vt.Ju(e) || s.Jn(t.Vt.Qu(e))
    }
  }
  Dc(t) {
    this.Jm !== null ? this.Jm.ts(t) : this.Jm = t, this.Qm || (this.Qm = !0, this.Xm = window.requestAnimationFrame(e => {
      if (this.Qm = !1, this.Xm = 0, this.Jm !== null) {
        const s = this.Jm;
        this.Jm = null, this.pb(s, e);
        for (const i of s.Qn())
          if (i.qn === 5 && !i.Vt.Ju(e)) {
            this.$t().Zn(i.Vt);
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
      s = this.Zm.length;
    for (let i = e; i < s; i++) {
      const o = nt(this.Zm.pop());
      this.nb.removeChild(o.hp()), o.hm().p(this), o.lm().p(this), o.S()
    }
    for (let i = s; i < e; i++) {
      const o = new Is(this, t[i]);
      o.hm().l(this.Ob.bind(this), this), o.lm().l(this.Bb.bind(this), this), this.Zm.push(o), this.nb.insertBefore(o.hp(), this.lb.hp())
    }
    for (let i = 0; i < e; i++) {
      const o = t[i],
        r = this.Zm[i];
      r.dp() !== o ? r.Up(o) : r.$p()
    }
    this.ub(), this.Tb()
  }
  Ab(t, e, s) {
    var i;
    const o = new Map;
    t !== null && this.$i.wt().forEach(c => {
      const u = c.In().hl(t);
      u !== null && o.set(c, u)
    });
    let r;
    if (t !== null) {
      const c = (i = this.$i.St().Ui(t)) === null || i === void 0 ? void 0 : i.originalTime;
      c !== void 0 && (r = c)
    }
    const l = this.$t().Fc(),
      h = l !== null && l.jc instanceof Ps ? l.jc : void 0,
      a = l !== null && l.Av !== void 0 ? l.Av.wr : void 0;
    return {
      Ib: r,
      se: t ?? void 0,
      zb: e ?? void 0,
      Lb: h,
      Eb: o,
      Nb: a,
      Fb: s ?? void 0
    }
  }
  Ob(t, e, s) {
    this.Dp.m(() => this.Ab(t, e, s))
  }
  Bb(t, e, s) {
    this.Vp.m(() => this.Ab(t, e, s))
  }
  hb(t, e, s) {
    this.Pc.m(() => this.Ab(t, e, s))
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
      const e = t.find(s => s.target === this.Gd);
      e && this.ob(e.contentRect.width, e.contentRect.height)
    }), this.tb.observe(this.Gd, {
      box: "border-box"
    }), !0)
  }
  fb() {
    this.tb !== null && this.tb.disconnect(), this.tb = null
  }
}

function hs(n) {
  return !!(n.handleScroll.mouseWheel || n.handleScale.mouseWheel)
}

function kh(n) {
  return function(t) {
    return t.open !== void 0
  }(n) || function(t) {
    return t.value !== void 0
  }(n)
}

function yn(n, t) {
  var e = {};
  for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && t.indexOf(s) < 0 && (e[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (s = Object.getOwnPropertySymbols(n); i < s.length; i++) t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[i]) && (e[s[i]] = n[s[i]])
  }
  return e
}

function Ci(n, t, e, s) {
  const i = e.value,
    o = {
      se: t,
      ot: n,
      Vt: [i, i, i, i],
      Ib: s
    };
  return e.color !== void 0 && (o.V = e.color), o
}

function Ch(n, t, e, s) {
  const i = e.value,
    o = {
      se: t,
      ot: n,
      Vt: [i, i, i, i],
      Ib: s
    };
  return e.lineColor !== void 0 && (o.lt = e.lineColor), e.topColor !== void 0 && (o.Ts = e.topColor), e.bottomColor !== void 0 && (o.Ps = e.bottomColor), o
}

function jh(n, t, e, s) {
  const i = e.value,
    o = {
      se: t,
      ot: n,
      Vt: [i, i, i, i],
      Ib: s
    };
  return e.topLineColor !== void 0 && (o.Pe = e.topLineColor), e.bottomLineColor !== void 0 && (o.Re = e.bottomLineColor), e.topFillColor1 !== void 0 && (o.Se = e.topFillColor1), e.topFillColor2 !== void 0 && (o.ke = e.topFillColor2), e.bottomFillColor1 !== void 0 && (o.ye = e.bottomFillColor1), e.bottomFillColor2 !== void 0 && (o.Ce = e.bottomFillColor2), o
}

function zh(n, t, e, s) {
  const i = {
    se: t,
    ot: n,
    Vt: [e.open, e.high, e.low, e.close],
    Ib: s
  };
  return e.color !== void 0 && (i.V = e.color), i
}

function $h(n, t, e, s) {
  const i = {
    se: t,
    ot: n,
    Vt: [e.open, e.high, e.low, e.close],
    Ib: s
  };
  return e.color !== void 0 && (i.V = e.color), e.borderColor !== void 0 && (i.Ot = e.borderColor), e.wickColor !== void 0 && (i.Zh = e.wickColor), i
}

function Lh(n, t, e, s, i) {
  const o = nt(i)(e),
    r = Math.max(...o),
    l = Math.min(...o),
    h = o[o.length - 1],
    a = [h, r, l, h],
    c = e,
    {
      time: u,
      color: d
    } = c;
  return {
    se: t,
    ot: n,
    Vt: a,
    Ib: s,
    He: yn(c, ["time", "color"]),
    V: d
  }
}

function Ee(n) {
  return n.Vt !== void 0
}

function ji(n, t) {
  return t.customValues !== void 0 && (n.Wb = t.customValues), n
}

function Vt(n) {
  return (t, e, s, i, o, r) => function(l, h) {
    return h ? h(l) : (a = l).open === void 0 && a.value === void 0;
    var a
  }(s, r) ? ji({
    ot: t,
    se: e,
    Ib: i
  }, s) : ji(n(t, e, s, i, o), s)
}

function zi(n) {
  return {
    Candlestick: Vt($h),
    Bar: Vt(zh),
    Area: Vt(Ch),
    Baseline: Vt(jh),
    Histogram: Vt(Ci),
    Line: Vt(Ci),
    Custom: Vt(Lh)
  } [n]
}

function $i(n) {
  return {
    se: 0,
    jb: new Map,
    ha: n
  }
}

function Li(n, t) {
  if (n !== void 0 && n.length !== 0) return {
    Hb: t.key(n[0].ot),
    $b: t.key(n[n.length - 1].ot)
  }
}

function Ei(n) {
  let t;
  return n.forEach(e => {
    t === void 0 && (t = e.Ib)
  }), nt(t)
}
class Eh {
  constructor(t) {
    this.Ub = new Map, this.qb = new Map, this.Yb = new Map, this.Zb = [], this.U_ = t
  }
  S() {
    this.Ub.clear(), this.qb.clear(), this.Yb.clear(), this.Zb = []
  }
  Xb(t, e) {
    let s = this.Ub.size !== 0,
      i = !1;
    const o = this.qb.get(t);
    if (o !== void 0)
      if (this.qb.size === 1) s = !1, i = !0, this.Ub.clear();
      else
        for (const h of this.Zb) h.pointData.jb.delete(t) && (i = !0);
    let r = [];
    if (e.length !== 0) {
      const h = e.map(f => f.time),
        a = this.U_.createConverterToInternalObj(e),
        c = zi(t.Jh()),
        u = t.ya(),
        d = t.Ca();
      r = e.map((f, m) => {
        const p = a(f.time),
          b = this.U_.key(p);
        let w = this.Ub.get(b);
        w === void 0 && (w = $i(p), this.Ub.set(b, w), i = !0);
        const M = c(p, w.se, f, h[m], u, d);
        return w.jb.set(t, M), M
      })
    }
    s && this.Kb(), this.Gb(t, r);
    let l = -1;
    if (i) {
      const h = [];
      this.Ub.forEach(a => {
        h.push({
          timeWeight: 0,
          time: a.ha,
          pointData: a,
          originalTime: Ei(a.jb)
        })
      }), h.sort((a, c) => this.U_.key(a.time) - this.U_.key(c.time)), l = this.Jb(h)
    }
    return this.Qb(t, l, function(h, a, c) {
      const u = Li(h, c),
        d = Li(a, c);
      if (u !== void 0 && d !== void 0) return {
        Ql: u.$b >= d.$b && u.Hb >= d.Hb
      }
    }(this.qb.get(t), o, this.U_))
  }
  fd(t) {
    return this.Xb(t, [])
  }
  tw(t, e) {
    const s = e;
    (function(p) {
      p.Ib === void 0 && (p.Ib = p.time)
    })(s), this.U_.preprocessData(e);
    const i = this.U_.createConverterToInternalObj([e])(e.time),
      o = this.Yb.get(t);
    if (o !== void 0 && this.U_.key(i) < this.U_.key(o)) throw new Error(`Cannot update oldest data, last time=${o}, new time=${i}`);
    let r = this.Ub.get(this.U_.key(i));
    const l = r === void 0;
    r === void 0 && (r = $i(i), this.Ub.set(this.U_.key(i), r));
    const h = zi(t.Jh()),
      a = t.ya(),
      c = t.Ca(),
      u = h(i, r.se, e, s.Ib, a, c);
    r.jb.set(t, u), this.iw(t, u);
    const d = {
      Ql: Ee(u)
    };
    if (!l) return this.Qb(t, -1, d);
    const f = {
        timeWeight: 0,
        time: r.ha,
        pointData: r,
        originalTime: Ei(r.jb)
      },
      m = be(this.Zb, this.U_.key(f.time), (p, b) => this.U_.key(p.time) < b);
    this.Zb.splice(m, 0, f);
    for (let p = m; p < this.Zb.length; ++p) as(this.Zb[p].pointData, p);
    return this.U_.fillWeightsForPoints(this.Zb, m), this.Qb(t, m, d)
  }
  iw(t, e) {
    let s = this.qb.get(t);
    s === void 0 && (s = [], this.qb.set(t, s));
    const i = s.length !== 0 ? s[s.length - 1] : null;
    i === null || this.U_.key(e.ot) > this.U_.key(i.ot) ? Ee(e) && s.push(e) : Ee(e) ? s[s.length - 1] = e : s.splice(-1, 1), this.Yb.set(t, e.ot)
  }
  Gb(t, e) {
    e.length !== 0 ? (this.qb.set(t, e.filter(Ee)), this.Yb.set(t, e[e.length - 1].ot)) : (this.qb.delete(t), this.Yb.delete(t))
  }
  Kb() {
    for (const t of this.Zb) t.pointData.jb.size === 0 && this.Ub.delete(this.U_.key(t.time))
  }
  Jb(t) {
    let e = -1;
    for (let s = 0; s < this.Zb.length && s < t.length; ++s) {
      const i = this.Zb[s],
        o = t[s];
      if (this.U_.key(i.time) !== this.U_.key(o.time)) {
        e = s;
        break
      }
      o.timeWeight = i.timeWeight, as(o.pointData, s)
    }
    if (e === -1 && this.Zb.length !== t.length && (e = Math.min(this.Zb.length, t.length)), e === -1) return -1;
    for (let s = e; s < t.length; ++s) as(t[s].pointData, s);
    return this.U_.fillWeightsForPoints(t, e), this.Zb = t, e
  }
  nw() {
    if (this.qb.size === 0) return null;
    let t = 0;
    return this.qb.forEach(e => {
      e.length !== 0 && (t = Math.max(t, e[e.length - 1].se))
    }), t
  }
  Qb(t, e, s) {
    const i = {
      sw: new Map,
      St: {
        Lu: this.nw()
      }
    };
    if (e !== -1) this.qb.forEach((o, r) => {
      i.sw.set(r, {
        He: o,
        ew: r === t ? s : void 0
      })
    }), this.qb.has(t) || i.sw.set(t, {
      He: [],
      ew: s
    }), i.St.rw = this.Zb, i.St.hw = e;
    else {
      const o = this.qb.get(t);
      i.sw.set(t, {
        He: o || [],
        ew: s
      })
    }
    return i
  }
}

function as(n, t) {
  n.se = t, n.jb.forEach(e => {
    e.se = t
  })
}

function Bs(n) {
  const t = {
    value: n.Vt[3],
    time: n.Ib
  };
  return n.Wb !== void 0 && (t.customValues = n.Wb), t
}

function Ti(n) {
  const t = Bs(n);
  return n.V !== void 0 && (t.color = n.V), t
}

function Th(n) {
  const t = Bs(n);
  return n.lt !== void 0 && (t.lineColor = n.lt), n.Ts !== void 0 && (t.topColor = n.Ts), n.Ps !== void 0 && (t.bottomColor = n.Ps), t
}

function xh(n) {
  const t = Bs(n);
  return n.Pe !== void 0 && (t.topLineColor = n.Pe), n.Re !== void 0 && (t.bottomLineColor = n.Re), n.Se !== void 0 && (t.topFillColor1 = n.Se), n.ke !== void 0 && (t.topFillColor2 = n.ke), n.ye !== void 0 && (t.bottomFillColor1 = n.ye), n.Ce !== void 0 && (t.bottomFillColor2 = n.Ce), t
}

function Mn(n) {
  const t = {
    open: n.Vt[0],
    high: n.Vt[1],
    low: n.Vt[2],
    close: n.Vt[3],
    time: n.Ib
  };
  return n.Wb !== void 0 && (t.customValues = n.Wb), t
}

function Ph(n) {
  const t = Mn(n);
  return n.V !== void 0 && (t.color = n.V), t
}

function Vh(n) {
  const t = Mn(n),
    {
      V: e,
      Ot: s,
      Zh: i
    } = n;
  return e !== void 0 && (t.color = e), s !== void 0 && (t.borderColor = s), i !== void 0 && (t.wickColor = i), t
}

function Ms(n) {
  return {
    Area: Th,
    Line: Ti,
    Baseline: xh,
    Histogram: Ti,
    Bar: Ph,
    Candlestick: Vh,
    Custom: Rh
  } [n]
}

function Rh(n) {
  const t = n.Ib;
  return Object.assign(Object.assign({}, n.He), {
    time: t
  })
}
const Ih = {
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
  Wh = {
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
  Bh = {
    background: {
      type: "solid",
      color: "#FFFFFF"
    },
    textColor: "#191919",
    fontSize: 12,
    fontFamily: zs,
    attributionLogo: !0
  },
  cs = {
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
  Ah = {
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
  Dh = {
    color: "rgba(0, 0, 0, 0)",
    visible: !1,
    fontSize: 48,
    fontFamily: zs,
    fontStyle: "",
    text: "",
    horzAlign: "center",
    vertAlign: "center"
  };

function xi() {
  return {
    width: 0,
    height: 0,
    autoSize: !1,
    layout: Bh,
    crosshair: Ih,
    grid: Wh,
    overlayPriceScales: Object.assign({}, cs),
    leftPriceScale: Object.assign(Object.assign({}, cs), {
      visible: !1
    }),
    rightPriceScale: Object.assign(Object.assign({}, cs), {
      visible: !0
    }),
    timeScale: Ah,
    watermark: Dh,
    localization: {
      locale: qt ? navigator.language : "",
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
class Nh {
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
    return Oe(this.aw) ? this.lw.gb(this.aw) : 0
  }
  Li() {
    return y(this.lw.$t().$c(this.aw)).Dt
  }
}

function Pi(n, t, e) {
  const s = yn(n, ["time", "originalTime"]),
    i = Object.assign({
      time: t
    }, s);
  return e !== void 0 && (i.originalTime = e), i
}
const Oh = {
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
class Uh {
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
class Fh {
  constructor(t, e, s, i, o) {
    this._w = new q, this.Ls = t, this.uw = e, this.cw = s, this.U_ = o, this.dw = i
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
    const e = new Xt(new le(t.from, t.to)).hu(),
      s = this.Ls.In();
    if (s.Ni()) return null;
    const i = s.hl(e.Vs(), 1),
      o = s.hl(e.ui(), -1),
      r = y(s.sl()),
      l = y(s.An());
    if (i !== null && o !== null && i.se > o.se) return {
      barsBefore: t.from - r,
      barsAfter: l - t.to
    };
    const h = {
      barsBefore: i === null || i.se === r ? t.from - r : i.se - r,
      barsAfter: o === null || o.se === l ? l - t.to : l - o.se
    };
    return i !== null && o !== null && (h.from = i.Ib, h.to = o.Ib), h
  }
  setData(t) {
    this.U_, this.Ls.Jh(), this.uw.fw(this.Ls, t), this.pw("full")
  }
  update(t) {
    this.Ls.Jh(), this.uw.mw(this.Ls, t), this.pw("update")
  }
  dataByIndex(t, e) {
    const s = this.Ls.In().hl(t, e);
    return s === null ? null : Ms(this.seriesType())(s)
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
    const e = t.map(s => Pi(s, this.U_.convertHorzItemToInternal(s.time), s.time));
    this.Ls.ia(e)
  }
  markers() {
    return this.Ls.na().map(t => Pi(t, t.originalTime, void 0))
  }
  applyOptions(t) {
    this.Ls.Hh(t)
  }
  options() {
    return Ct(this.Ls.W())
  }
  priceScale() {
    return this.cw.priceScale(this.Ls.Dt().Ta())
  }
  createPriceLine(t) {
    const e = _t(Ct(Oh), t),
      s = this.Ls.sa(e);
    return new Uh(s)
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
class Jh {
  constructor(t, e, s) {
    this.bw = new q, this.pu = new q, this.Vm = new q, this.$i = t, this.kl = t.St(), this.lb = e, this.kl.tc().l(this.ww.bind(this)), this.kl.nc().l(this.gw.bind(this)), this.lb.Em().l(this.Mw.bind(this)), this.U_ = s
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
      s = this.kl.Au(e);
    this.$i.vd(s)
  }
  getVisibleLogicalRange() {
    const t = this.kl.Ru();
    return t === null ? null : {
      from: t.Vs(),
      to: t.ui()
    }
  }
  setVisibleLogicalRange(t) {
    xt(t.from <= t.to, "The from index cannot be after the to index."), this.$i.vd(t)
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
      s = this.kl.Da(e, !1);
    return s === null ? null : this.kl.It(s)
  }
  coordinateToTime(t) {
    const e = this.$i.St(),
      s = e.Eu(t),
      i = e.Ui(s);
    return i === null ? null : i.originalTime
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
    return Object.assign(Object.assign({}, Ct(this.kl.W())), {
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

function Kh(n) {
  if (n === void 0 || n.type === "custom") return;
  const t = n;
  t.minMove !== void 0 && t.precision === void 0 && (t.precision = function(e) {
    if (e >= 1) return 0;
    let s = 0;
    for (; s < 8; s++) {
      const i = Math.round(e);
      if (Math.abs(i - e) < 1e-8) return s;
      e *= 10
    }
    return s
  }(t.minMove))
}

function Vi(n) {
  return function(t) {
    if (ye(t.handleScale)) {
      const s = t.handleScale;
      t.handleScale = {
        axisDoubleClickReset: {
          time: s,
          price: s
        },
        axisPressedMouseMove: {
          time: s,
          price: s
        },
        mouseWheel: s,
        pinch: s
      }
    } else if (t.handleScale !== void 0) {
      const {
        axisPressedMouseMove: s,
        axisDoubleClickReset: i
      } = t.handleScale;
      ye(s) && (t.handleScale.axisPressedMouseMove = {
        time: s,
        price: s
      }), ye(i) && (t.handleScale.axisDoubleClickReset = {
        time: i,
        price: i
      })
    }
    const e = t.handleScroll;
    ye(e) && (t.handleScroll = {
      horzTouchDrag: e,
      vertTouchDrag: e,
      mouseWheel: e,
      pressedMouseMove: e
    })
  }(n), n
}
class Xh {
  constructor(t, e, s) {
    this.xw = new Map, this.Sw = new Map, this.kw = new q, this.yw = new q, this.Cw = new q, this.Tw = new Eh(e);
    const i = s === void 0 ? Ct(xi()) : _t(Ct(xi()), Vi(s));
    this.U_ = e, this.lw = new Sh(t, i, e), this.lw.hm().l(r => {
      this.kw.M() && this.kw.m(this.Pw(r()))
    }, this), this.lw.lm().l(r => {
      this.yw.M() && this.yw.m(this.Pw(r()))
    }, this), this.lw.Zc().l(r => {
      this.Cw.M() && this.Cw.m(this.Pw(r()))
    }, this);
    const o = this.lw.$t();
    this.Rw = new Jh(o, this.lw.cb(), this.U_)
  }
  remove() {
    this.lw.hm().p(this), this.lw.lm().p(this), this.lw.Zc().p(this), this.Rw.S(), this.lw.S(), this.xw.clear(), this.Sw.clear(), this.kw.S(), this.yw.S(), this.Cw.S(), this.Tw.S()
  }
  resize(t, e, s) {
    this.autoSizeActive() || this.lw.ob(t, e, s)
  }
  addCustomSeries(t, e) {
    const s = Jt(t),
      i = Object.assign(Object.assign({}, Gi), s.defaultOptions());
    return this.Dw("Custom", i, e, s)
  }
  addAreaSeries(t) {
    return this.Dw("Area", Er, t)
  }
  addBaselineSeries(t) {
    return this.Dw("Baseline", Tr, t)
  }
  addBarSeries(t) {
    return this.Dw("Bar", $r, t)
  }
  addCandlestickSeries(t = {}) {
    return function(e) {
      e.borderColor !== void 0 && (e.borderUpColor = e.borderColor, e.borderDownColor = e.borderColor), e.wickColor !== void 0 && (e.wickUpColor = e.wickColor, e.wickDownColor = e.wickColor)
    }(t), this.Dw("Candlestick", zr, t)
  }
  addHistogramSeries(t) {
    return this.Dw("Histogram", xr, t)
  }
  addLineSeries(t) {
    return this.Dw("Line", Lr, t)
  }
  removeSeries(t) {
    const e = nt(this.xw.get(t)),
      s = this.Tw.fd(e);
    this.lw.$t().fd(e), this.Vw(s), this.xw.delete(t), this.Sw.delete(e)
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
    return new Nh(this.lw, t)
  }
  timeScale() {
    return this.Rw
  }
  applyOptions(t) {
    this.lw.Hh(Vi(t))
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
  setCrosshairPosition(t, e, s) {
    const i = this.xw.get(s);
    if (i === void 0) return;
    const o = this.lw.$t().cr(i);
    o !== null && this.lw.$t().ld(t, e, o)
  }
  clearCrosshairPosition() {
    this.lw.$t().ad(!0)
  }
  Dw(t, e, s = {}, i) {
    Kh(s.priceFormat);
    const o = _t(Ct(Zi), Ct(e), s),
      r = this.lw.$t().ud(t, o, i),
      l = new Fh(r, this, this, this, this.U_);
    return this.xw.set(l, r), this.Sw.set(r, l), l
  }
  Vw(t) {
    const e = this.lw.$t();
    e.od(t.St.Lu, t.St.rw, t.St.hw), t.sw.forEach((s, i) => i.J(s.He, s.ew)), e.Fu()
  }
  Ow(t) {
    return nt(this.Sw.get(t))
  }
  Pw(t) {
    const e = new Map;
    t.Eb.forEach((i, o) => {
      const r = o.Jh(),
        l = Ms(r)(i);
      if (r !== "Custom") xt(kh(l));
      else {
        const h = o.Ca();
        xt(!h || h(l) === !1)
      }
      e.set(this.Ow(o), l)
    });
    const s = t.Lb !== void 0 && this.Sw.has(t.Lb) ? this.Ow(t.Lb) : void 0;
    return {
      time: t.Ib,
      logical: t.se,
      point: t.zb,
      hoveredSeries: s,
      hoveredObjectId: t.Nb,
      seriesData: e,
      sourceEvent: t.Fb
    }
  }
}

function Hh(n, t, e) {
  let s;
  if (ve(n)) {
    const o = document.getElementById(n);
    xt(o !== null, `Cannot find element in DOM with id=${n}`), s = o
  } else s = n;
  const i = new Xh(s, t, e);
  return t.setOptions(i.options()), i
}

function Yh(n, t) {
  return Hh(n, new _i, _i.Ad(t))
}
Object.assign(Object.assign({}, Zi), Gi);
const Gh = {
    class: "memepad-jetton-chart"
  },
  Zh = {
    class: "controls"
  },
  qh = ["value"],
  Qh = {
    class: "label"
  },
  ta = ["value"],
  ea = {
    class: "label"
  },
  sa = {
    key: 0,
    class: "chart-empty-wrapper"
  },
  ia = {
    class: "inner"
  },
  na = {
    class: "label"
  },
  oa = {
    key: 1,
    class: "chart-wrapper"
  },
  ra = K({
    __name: "Chart",
    props: {
      chart: {},
      chartInterval: {},
      chartType: {},
      updateChartInterval: {
        type: Function
      },
      updateChartType: {
        type: Function
      }
    },
    setup(n) {
      const t = n,
        e = O(null),
        s = O(null),
        i = O(null),
        o = x(() => [{
          value: ie.ONE_MINUTE,
          label: `1${I("base.time.abbr.minutes")}`
        }, {
          value: ie.FIVE_MINUTES,
          label: `5${I("base.time.abbr.minutes")}`
        }, {
          value: ie.FIFTEEN_MINUTES,
          label: `15${I("base.time.abbr.minutes")}`
        }]),
        r = x(() => [{
          value: se.MARKET_CAP,
          label: I("memepad.chart.tabs.market_cap")
        }, {
          value: se.PRICE,
          label: I("memepad.chart.tabs.price")
        }]),
        l = x({
          get: () => t.chartInterval,
          set: d => {
            t.updateChartInterval(d)
          }
        }),
        h = x({
          get: () => t.chartType,
          set: d => {
            t.updateChartType(d)
          }
        }),
        a = () => {
          var d;
          (d = s.value) == null || d.resize(e.value.clientWidth, e.value.clientHeight)
        },
        c = () => {
          window.removeEventListener("resize", a)
        },
        u = (d, f) => {
          var $;
          const m = ($ = Di().$webApp.dataUnsafe.user) == null ? void 0 : $.language_code;
          i.value && s.value && s.value.removeSeries(i.value), f.innerHTML = "";
          const b = Yh(f, {
            localization: {
              timeFormatter: j => {
                const P = E => String(E).padStart(2, "0"),
                  S = new Date(j * 1e3);
                return `${P(S.getUTCHours())}:${P(S.getUTCMinutes())}`
              },
              priceFormatter: j => {
                if (h.value === se.MARKET_CAP) return `$${Pe(j,{accuracy:0})}`;
                {
                  if (Math.abs(j) < 1e-9) return "$0";
                  const [P, S] = j.toFixed(9).split("."), E = S[0], V = S.slice(1).match(/^0+/), D = V ? V[0].length : 0, Q = D > 0 ? String.fromCharCode(8321 + D) : "", ct = S.slice(D + 1).replace(/0+$/, "").slice(0, 3);
                  return `$${P}.${E}${Q}${ct}`
                }
              },
              locale: m
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
              borderColor: "transparent",
              ticksVisible: !0
            },
            crosshair: {
              mode: vs.Magnet,
              horzLine: {
                color: "#ffffff",
                style: Ve.Dashed,
                labelBackgroundColor: "#ffffff"
              },
              vertLine: {
                color: "#ffffff",
                style: Ve.Dashed,
                labelBackgroundColor: "#ffffff"
              }
            }
          });
          s.value = b, b.timeScale().applyOptions({
            borderColor: "transparent",
            secondsVisible: !0,
            timeVisible: !0,
            ticksVisible: !0,
            allowBoldLabels: !1
          }), window.addEventListener("resize", a);
          const w = b.addLineSeries({
              color: "#C4F85C",
              baseLineWidth: 2,
              crosshairMarkerBackgroundColor: "#C4F85C",
              crosshairMarkerBorderColor: "#000000",
              crosshairMarkerBorderWidth: 2,
              crosshairMarkerRadius: 3,
              priceFormat: {
                type: "price",
                precision: h.value === se.MARKET_CAP ? 0 : 9,
                minMove: 1e-9
              }
            }),
            M = d.map(j => {
              const P = new Date(j.timestamp);
              return {
                time: (P.getTime() - P.getTimezoneOffset() * 60 * 1e3) / 1e3,
                value: j.price.toNumber()
              }
            }).sort((j, P) => j.time - P.time);
          w.setData(M), b.timeScale().fitContent()
        };
      return gt(() => [e.value, t.chart, t.chartInterval], () => {
        !e.value || !t.chart || u(t.chart.points, e.value)
      }, {
        immediate: !0
      }), We(c), (d, f) => (g(), k("div", Gh, [_("div", Zh, [_("div", {
        class: "section",
        style: It({
          "grid-template-columns": `repeat(${v(r).length}, 1fr)`
        })
      }, [(g(!0), k(st, null, Lt(v(r), m => (g(), k("label", {
        key: m.value,
        class: Yt(["item", {
          "is-active": d.chartType === m.value
        }])
      }, [Gt(_("input", {
        "onUpdate:modelValue": f[0] || (f[0] = p => at(h) ? h.value = p : null),
        type: "radio",
        name: "chart-type",
        value: m.value
      }, null, 8, qh), [
        [ds, v(h)]
      ]), _("span", Qh, W(m.label), 1)], 2))), 128))], 4), _("div", {
        class: "section",
        style: It({
          "grid-template-columns": `repeat(${v(o).length}, 1fr)`
        })
      }, [(g(!0), k(st, null, Lt(v(o), m => (g(), k("label", {
        key: m.value,
        class: Yt(["item", {
          "is-active": d.chartInterval === m.value
        }])
      }, [Gt(_("input", {
        "onUpdate:modelValue": f[1] || (f[1] = p => at(l) ? l.value = p : null),
        type: "radio",
        name: "chart-interval",
        value: m.value
      }, null, 8, ta), [
        [ds, v(l)]
      ]), _("span", ea, W(m.label), 1)], 2))), 128))], 4)]), !d.chart || !d.chart.points.length ? (g(), k("div", sa, [f[3] || (f[3] = _("img", {
        src: Ds,
        class: "lines"
      }, null, -1)), f[4] || (f[4] = _("img", {
        src: Vn,
        class: "empty"
      }, null, -1)), _("div", ia, [f[2] || (f[2] = _("div", {
        class: "dot"
      }, null, -1)), _("div", na, W(("t" in d ? d.t : v(I))("memepad.jetton.chart.coming_text")), 1)])])) : (g(), k("div", oa, [_("div", {
        ref_key: "container",
        ref: e,
        style: {
          width: "100%",
          height: "320px"
        }
      }, null, 512), f[5] || (f[5] = _("img", {
        src: Ds,
        class: "lines"
      }, null, -1))]))]))
    }
  }),
  la = X(ra, [
    ["__scopeId", "data-v-e70589ec"]
  ]),
  ha = {
    class: "label"
  },
  aa = {
    class: "memepad-jetton-actions-controls-unlock-sheet"
  },
  ca = {
    class: "icon-wrapper"
  },
  ua = {
    class: "title"
  },
  da = {
    class: "subtitle"
  },
  fa = {
    class: "buttons-wrapper"
  },
  ma = K({
    __name: "UnlockSheetAndButton",
    props: {
      jetton: {},
      jettonInformation: {},
      balances: {},
      jettonManagement: {},
      unlockSuccessCallback: {
        type: Function
      }
    },
    setup(n) {
      const t = n,
        e = O(!1),
        s = () => {
          e.value = !1, t.unlockSuccessCallback()
        };
      return (i, o) => {
        const r = Ot,
          l = pe,
          h = js,
          a = Bi;
        return g(), k(st, null, [C(r, {
          class: "memepad-jetton-actions-controls-unlock-button",
          icon: "lock-open",
          type: v(Tt).HIGHLIGHT,
          fill: "",
          "icon-align": "left",
          onClick: o[0] || (o[0] = c => e.value = !0)
        }, {
          default: F(() => [_("div", ha, W(("t" in i ? i.t : v(I))("memepad.jetton.unlock.btn")), 1)]),
          _: 1
        }, 8, ["type"]), C(a, {
          modelValue: v(e),
          "onUpdate:modelValue": o[1] || (o[1] = c => at(e) ? e.value = c : null)
        }, {
          default: F(() => [_("div", aa, [_("div", ca, [C(l, {
            src: v(me)(i.jetton.iconFileKey),
            size: 80
          }, null, 8, ["src"])]), _("div", ua, W(("t" in i ? i.t : v(I))("memepad.jetton.unlock.sheet.title", {
            ticker: i.jetton.ticker
          })), 1), _("div", da, W(("t" in i ? i.t : v(I))("memepad.jetton.unlock.sheet.subtitle", {
            ticker: i.jetton.ticker
          })), 1), _("div", fa, [C(h, {
            jetton: i.jetton,
            "jetton-information": i.jettonInformation,
            balances: i.balances,
            "jetton-management": i.jettonManagement,
            onUnlocked: s
          }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])])])]),
          _: 1
        }, 8, ["modelValue"])], 64)
      }
    }
  }),
  pa = X(ma, [
    ["__scopeId", "data-v-f5a83b7e"]
  ]),
  va = {
    class: "label"
  },
  ba = ["value", "name"],
  ga = K({
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
    setup(n) {
      const t = n,
        e = Rn(Ni);
      if (!e) throw Oi("Tabs injection not defined");
      const s = x(() => t.type ?? e.type.value),
        i = x({
          get() {
            return e.value.value === t.value
          },
          set() {
            e.updateValue(t.value)
          }
        });
      return (o, r) => (g(), k("label", {
        class: Yt(["kit-tab", [`is-${v(s).toLowerCase()}`, {
          "is-active": v(i)
        }]])
      }, [_("span", va, W(n.label), 1), Gt(_("input", {
        "onUpdate:modelValue": r[0] || (r[0] = l => at(i) ? i.value = l : null),
        type: "radio",
        value: n.value,
        name: v(e).name
      }, null, 8, ba), [
        [ds, v(i)]
      ])], 2))
    }
  }),
  Sn = X(ga, [
    ["__scopeId", "data-v-94bc640b"]
  ]),
  _a = {
    class: "list"
  },
  wa = K({
    __name: "KitTabs",
    props: Ht({
      items: {
        type: Array,
        default: void 0
      },
      type: {
        type: String,
        default: fs.DEFAULT
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(n) {
      const t = n,
        e = he(n, "modelValue"),
        s = x(() => {
          var i;
          return ((i = t.items) == null ? void 0 : i.map(o => typeof o == "string" ? {
            value: o,
            label: o
          } : o)) ?? []
        });
      return In(Ni, {
        value: x(() => e.value),
        updateValue: i => {
          e.value = i
        },
        type: x(() => t.type),
        name: Wn()
      }), (i, o) => {
        const r = Sn,
          l = Bn("horizontal-wheel-scroll");
        return g(), k("div", {
          class: Yt(["kit-tabs", `is-${n.type.toLowerCase()}`])
        }, [Gt((g(), k("div", _a, [Ft(i.$slots, "default", {}, void 0, !0), (g(!0), k(st, null, Lt(v(s), h => (g(), A(r, {
          key: h.value,
          label: h.label,
          value: h.value,
          type: n.type
        }, null, 8, ["label", "value", "type"]))), 128))])), [
          [l]
        ])], 2)
      }
    }
  }),
  ya = X(wa, [
    ["__scopeId", "data-v-74a842a0"]
  ]),
  Ma = {
    class: "memepad-jetton-actions-controls-input"
  },
  Sa = K({
    __name: "Input",
    props: {
      modelValue: {},
      postfix: {},
      modifier: {
        type: Function
      }
    },
    emits: ["update:modelValue", "blur"],
    setup(n, {
      expose: t,
      emit: e
    }) {
      const s = n,
        i = e,
        o = O(),
        r = O(),
        l = () => {
          ms(() => {
            o.value && (o.value.style.width = "", o.value.style.width = o.value.scrollWidth + "px")
          })
        },
        h = x({
          get: () => s.modelValue,
          set: d => {
            if (o.value && o.value.value !== s.modelValue) {
              const m = [...o.value.value].findIndex((p, b) => p !== s.modelValue[b]);
              m !== -1 && o.value.value[m] === "," && (d = d.slice(0, m) + "." + d.slice(m))
            }
            d = (s.modifier || (m => m))(d), o.value && o.value.value !== d && (o.value.value = d), i("update:modelValue", d)
          }
        });
      gt(() => s.modelValue, l), gt(() => o.value, l);
      const a = x(() => {
          const d = window.innerWidth,
            f = s.modelValue.length + (s.postfix ? s.postfix.length : 0),
            m = Math.floor((d - 360) / 30) + 12.5,
            p = f - m,
            b = Math.min(Math.max(1 - p / f, 0), 1);
          return {
            fontSize: `${44*b}px`,
            lineHeight: `${52*b}px`
          }
        }),
        c = () => {
          var d;
          (d = r.value) == null || d.focus()
        };
      An(() => {
        c()
      }), t({
        focusOnInput: c
      });
      const u = () => {
        setTimeout(() => {
          var d;
          (d = o.value) == null || d.focus()
        }, 100)
      };
      return (d, f) => (g(), k("label", Ma, [Gt(_("input", {
        ref_key: "inputRef",
        ref: o,
        "onUpdate:modelValue": f[0] || (f[0] = m => at(h) ? h.value = m : null),
        type: "text",
        inputmode: "decimal",
        style: It(v(a)),
        onBlur: f[1] || (f[1] = m => i("blur"))
      }, null, 36), [
        [Ui, v(h)]
      ]), _("input", {
        ref_key: "hiddenInputRef",
        ref: r,
        type: "text",
        inputmode: "decimal",
        class: "hidden",
        onFocus: u
      }, null, 544), d.postfix ? (g(), k("span", {
        key: 0,
        class: "label",
        style: It(v(a))
      }, W(d.postfix), 5)) : it("", !0)]))
    }
  }),
  kn = X(Sa, [
    ["__scopeId", "data-v-ece355cf"]
  ]),
  ka = {
    class: "memepad-jetton-action-controls-action-button"
  },
  Ca = {
    class: "info"
  },
  ja = {
    class: "label"
  },
  za = {
    class: "label"
  },
  $a = K({
    __name: "ActionButton",
    props: {
      value: {},
      jetton: {},
      tab: {},
      inputState: {},
      tradePendings: {}
    },
    emits: ["trade"],
    setup(n) {
      const t = n,
        e = x(() => new bt(t.value.replaceAll(",", "") || "0")),
        s = x(() => t.tradePendings[t.tab]),
        i = x(() => !!(s.value || !t.inputState || t.inputState.loading)),
        o = x(() => i.value ? !1 : !!(e.value.isZero() || !t.inputState || t.inputState.error));
      return (r, l) => {
        var f, m, p, b, w;
        const h = Xi,
          a = Be,
          c = Yi,
          u = Ki,
          d = Ot;
        return g(), k("div", ka, [_("div", Ca, [r.inputState ? (g(), k(st, {
          key: 0
        }, [r.inputState.balanceLabel ? (g(), A(h, {
          key: 0,
          balance: r.inputState.balanceLabel
        }, null, 8, ["balance"])) : (g(), A(a, {
          key: 1,
          class: "skeleton"
        })), r.inputState.error || r.inputState.feesInfo ? (g(), A(c, {
          key: 2,
          details: (f = r.inputState.feesInfo) == null ? void 0 : f.details,
          "total-label": (m = r.inputState.feesInfo) == null ? void 0 : m.totalLabel,
          "error-message": (p = r.inputState.error) == null ? void 0 : p.message
        }, null, 8, ["details", "total-label", "error-message"])) : (g(), A(a, {
          key: 3,
          class: "skeleton"
        }))], 64)) : (g(), k(st, {
          key: 1
        }, [C(a, {
          class: "skeleton"
        }), C(a, {
          class: "skeleton"
        })], 64))]), (w = (b = r.inputState) == null ? void 0 : b.error) != null && w.notEnoughtTon ? (g(), A(u, {
          key: 0,
          "jetton-shortname": r.jetton.shortname,
          "jetton-address": r.jetton.address
        }, null, 8, ["jetton-shortname", "jetton-address"])) : (g(), k(st, {
          key: 1
        }, [r.tab === v(Y).BUY ? (g(), A(d, {
          key: 0,
          fill: "",
          size: v(Et).LARGE,
          type: v(Tt).HIGHLIGHT,
          loading: v(i),
          disabled: v(o),
          onClick: l[0] || (l[0] = M => r.$emit("trade"))
        }, {
          default: F(() => [_("div", ja, W(("t" in r ? r.t : v(I))("memepad.jetton.buy_button_label", {
            ticker: r.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "type", "loading", "disabled"])) : it("", !0), r.tab === v(Y).SELL ? (g(), A(d, {
          key: 1,
          fill: "",
          size: v(Et).LARGE,
          type: v(Tt).PINK,
          loading: v(i),
          disabled: v(o),
          onClick: l[1] || (l[1] = M => r.$emit("trade"))
        }, {
          default: F(() => [_("div", za, W(("t" in r ? r.t : v(I))("memepad.jetton.sell_button_label", {
            ticker: r.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "type", "loading", "disabled"])) : it("", !0)], 64))])
      }
    }
  }),
  La = X($a, [
    ["__scopeId", "data-v-85aa80e6"]
  ]),
  Ea = {
    class: "memepad-jetton-actions-controls-range-slider"
  },
  Ta = {
    class: "marks"
  },
  xa = {
    class: "line"
  },
  Pa = {
    class: "inner"
  },
  Va = {
    class: "content"
  },
  Ra = {
    class: "label"
  },
  us = 100,
  Ia = K({
    __name: "RangeInput",
    props: Ht({
      jetton: {},
      balances: {},
      tab: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(n, {
      expose: t
    }) {
      const e = n,
        s = he(n, "modelValue"),
        i = O(null),
        o = O("0"),
        r = x(() => new bt(s.value.replaceAll(",", "") || "0")),
        l = x(() => {
          const m = {
              0: {
                value: 0
              },
              20: {
                value: .3
              },
              40: {
                value: 5
              },
              60: {
                value: 10
              },
              80: {
                value: 20
              },
              100: {
                value: 50
              }
            },
            p = {
              0: {
                percent: 0
              },
              33: {
                percent: 20
              },
              66: {
                percent: 50
              },
              100: {
                percent: 100
              }
            };
          return e.tab === Y.SELL ? p : m
        }),
        h = x(() => {
          const m = l.value,
            p = Object.keys(m).map(Number).sort((w, M) => w - M),
            b = [];
          for (let w = 0; w <= us; w++) {
            const M = w;
            if (p.includes(M)) {
              const V = m[M],
                D = "value" in V ? V.value : V.percent;
              b.push(D);
              continue
            }
            let $, j, P, S;
            for (let V = 0; V < p.length - 1; V++)
              if (M > p[V] && M < p[V + 1]) {
                $ = p[V], j = p[V + 1];
                const D = m[$],
                  Q = m[j];
                P = "value" in D ? D.value : D.percent, S = "value" in Q ? Q.value : Q.percent;
                break
              } if ($ === void 0 || j === void 0 || P === void 0 || S === void 0) continue;
            const E = (M - $) / (j - $),
              T = P + E * (S - P);
            b.push(T)
          }
          return b
        }),
        a = x(() => {
          const m = l.value,
            b = Object.keys(m).map(Number).sort((M, $) => M - $).map(M => {
              const $ = m[M];
              return "value" in $ ? $.value : $.percent
            }),
            w = [];
          for (let M = 0; M < b.length; M++) {
            const $ = b[M],
              j = h.value.indexOf($),
              P = j / us * 100,
              S = Math.min(new bt($).decimalPlaces(), 2),
              E = M === 0,
              T = M === b.length - 1,
              V = new bt(f.value).gte(P),
              D = e.tab === Y.SELL ? `${$}%` : `${Fi($,S)} TON`;
            w.push({
              label: D,
              position: j,
              percent: P,
              isFirst: E,
              isLast: T,
              isActive: V
            })
          }
          return w
        }),
        c = () => {
          const m = r.value,
            p = String((() => {
              if (e.tab === Y.BUY) {
                for (let b = 0; b < h.value.length; b++) {
                  const w = new bt(h.value[b]);
                  if (m.eq(w)) return b;
                  if (m.lte(w)) return b - 1
                }
                return us
              } else {
                if (!e.balances.jettonBalance) return 0;
                const b = e.balances.jettonBalance.value;
                for (let w = 0; w < h.value.length; w++) {
                  const M = b.times(h.value[w]).div(100);
                  if (m.eq(M)) return w;
                  if (m.lte(M)) return w - 1
                }
                return 0
              }
            })());
          o.value = p, i.value && i.value.value !== p && (i.value.value = p)
        },
        u = m => a.value.find(p => Math.abs(Number(p.percent) - m) < 4 && !p.isFirst),
        d = m => {
          if (e.tab === Y.BUY) {
            const p = Math.min(new bt(m).decimalPlaces(), 2);
            s.value = new bt(m).toDecimalPlaces(p, bt.ROUND_DOWN).toFixed(p)
          } else {
            if (!e.balances.jettonBalance) return;
            const b = e.balances.jettonBalance.value.times(m).div(100);
            s.value = b.toFixed()
          }
        },
        f = x({
          get: () => o.value,
          set: m => {
            var M;
            const p = Number(m),
              b = (M = u(p)) == null ? void 0 : M.percent;
            b && i.value && i.value.value !== String(b) && (i.value.value = String(b));
            const w = h.value[b ?? p];
            o.value = String(b ?? p), d(String(w))
          }
        });
      return t({
        applyNearestValue: c
      }), (m, p) => (g(), k("label", Ea, [Gt(_("input", {
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": p[0] || (p[0] = b => f.value = b),
        type: "range",
        step: 1,
        min: 0,
        max: 100,
        style: It({
          "--value": f.value
        })
      }, null, 4), [
        [Ui, f.value]
      ]), _("div", Ta, [_("div", xa, [_("div", {
        class: "filled",
        style: It({
          "--width": `${f.value}%`
        })
      }, null, 4)]), _("div", Pa, [(g(!0), k(st, null, Lt(a.value, b => (g(), k("div", {
        key: b.position,
        style: It({
          "--left": `${b.percent}%`
        }),
        class: Yt([{
          "is-last": b.isLast,
          "is-first": b.isFirst,
          "is-active": b.isActive
        }, "item"])
      }, [_("div", Va, [p[1] || (p[1] = _("div", {
        class: "point"
      }, null, -1)), _("div", Ra, W(b.label), 1)])], 6))), 128))])])]))
    }
  }),
  Wa = X(Ia, [
    ["__scopeId", "data-v-cfe6d1e0"]
  ]),
  Ba = {
    class: "memepad-jetton-modal"
  },
  Aa = {
    class: "top"
  },
  Da = {
    class: "center"
  },
  Na = {
    class: "right"
  },
  Oa = {
    class: "inner"
  },
  Ua = {
    class: "memepad-jetton-modal-bottom"
  },
  Fa = {
    class: "action"
  },
  Ja = {
    key: 0,
    class: "helpers"
  },
  Ka = K({
    __name: "Modal",
    setup(n) {
      return (t, e) => {
        const s = Cs;
        return g(), k("div", Ba, [_("div", Aa, [e[0] || (e[0] = _("div", {
          class: "left"
        }, null, -1)), _("div", Da, [Ft(t.$slots, "top-center", {}, void 0, !0)]), _("div", Na, [Ft(t.$slots, "top-right", {}, void 0, !0)])]), _("div", Oa, [Ft(t.$slots, "default", {}, void 0, !0)]), C(s, {
          "ignore-tabs": "",
          "hide-space": ""
        }, {
          default: F(() => [_("div", Ua, [_("div", Fa, [Ft(t.$slots, "bottom-action", {}, void 0, !0)]), t.$slots["bottom-helpers"] ? (g(), k("div", Ja, [Ft(t.$slots, "bottom-helpers", {}, void 0, !0)])) : it("", !0)])]),
          _: 3
        })])
      }
    }
  }),
  Cn = X(Ka, [
    ["__scopeId", "data-v-39f361cf"]
  ]),
  Xa = {
    class: "content"
  },
  Ha = {
    class: "subtitle"
  },
  Ya = {
    key: 0
  },
  Ga = {
    class: "label"
  },
  Za = K({
    __name: "TradeModal",
    props: Ht({
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
      jettonManagement: {},
      jettonTrading: {},
      tonUsdRate: {},
      jettonModalControls: {},
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
    emits: Ht(["trade", "unlock-success", "open-slippage"], ["update:modelValue", "update:tradePendings"]),
    setup(n, {
      emit: t
    }) {
      const e = n,
        s = t,
        i = he(n, "modelValue"),
        o = he(n, "tradePendings"),
        r = O(),
        {
          state: l,
          updateInputState: h
        } = j(),
        a = P(),
        c = () => {
          var S;
          e.jettonModalControls.value.value === ht.TRADE && ((S = r.value) == null || S.focusOnInput())
        },
        u = O(e.jettonTrading.slippage);
      gt(() => e.jettonModalControls.isOpened(ht.SLIPPAGE), S => {
        var E;
        u.value = e.jettonTrading.slippage, h(), S || (E = r.value) == null || E.focusOnInput()
      });
      const d = O(),
        f = O("0"),
        m = S => Pe(S, {
          join: "emptyFractional"
        }),
        p = x({
          get: () => f.value,
          set: S => {
            f.value = S, ms(() => {
              var E;
              return (E = d.value) == null ? void 0 : E.applyNearestValue()
            })
          }
        }),
        b = x({
          get: () => f.value,
          set: S => {
            f.value = m(S)
          }
        });
      gt(() => i.value, () => {
        f.value = "0", ms(() => {
          var S;
          return (S = d.value) == null ? void 0 : S.applyNearestValue()
        })
      });
      const w = x(() => {
          if (!(!l.value || l.value.loading)) {
            if (M.value.isZero()) return i.value === Y.BUY ? `0 ${e.jetton.ticker}` : "0 TON";
            if (!l.value.feesInfo || !l.value.ready) return "";
            if (i.value === Y.SELL) {
              const S = l.value.tradeInfo.maxReceive,
                E = `${Ns(S)} TON`;
              if (!e.tonUsdRate) return E;
              const T = Dn(e.tonUsdRate.mul(S));
              return `${E} (≈$${T})`
            } else {
              const S = l.value.tradeInfo.maxReceive;
              return `≈${Pe(S,{accuracy:0})} ${e.jetton.ticker}`
            }
          }
        }),
        M = x(() => new bt(f.value.replaceAll(",", "") || "0"));
      let $;
      gt(() => [f.value, e.balances.jettonBalance, e.balances.tonBalance], () => h()), We(() => {
        $ == null || $.destroy()
      });

      function j() {
        const S = e.jettonTrading.tradeStateControls,
          E = x(() => S.getImmediateState({
            operation: i.value,
            amount: M.value,
            tonBalance: e.balances.tonBalance,
            jettonBalance: e.balances.jettonBalance,
            jetton: e.jetton
          })),
          T = O(S.getEmptyState({
            operation: i.value,
            jettonBalance: e.balances.jettonBalance,
            tonBalance: e.balances.tonBalance
          })),
          V = x(() => E.value || T.value);
        let D = new AbortController;
        const Q = () => {
            D.abort(), D = new AbortController
          },
          {
            debouncedFunction: ct
          } = Yn(async () => {
            if (Q(), E.value) return;
            const {
              signal: z
            } = D, pt = await S.getState({
              operation: i.value,
              amount: M.value,
              tonBalance: e.balances.tonBalance,
              jettonBalance: e.balances.jettonBalance,
              jetton: e.jetton
            });
            z.aborted || (T.value = pt)
          }, 600);
        return {
          state: V,
          updateInputState: () => {
            T.value = void 0, ct()
          }
        }
      }

      function P() {
        const S = Ss();
        return async () => {
          if (!l.value || !l.value.ready) return;
          const T = i.value,
            V = new bt(M.value),
            D = l.value.tradeInfo,
            Q = e.jetton.ticker,
            ct = e.jetton.id,
            yt = e.jetton.address,
            z = e.jetton.address,
            pt = e.jetton.shortname;
          await (async () => {
            o.value[T] = !0;
            const vt = () => {
                const B = ps(T === Y.BUY ? D.minReceive : V, Q),
                  N = ps(T === Y.BUY ? V : D.minReceive, "TON"),
                  G = T === Y.BUY ? I("memepad.jetton.buy.failed_alert", {
                    askLabel: B.frontendWithSymbol,
                    offerLabel: N.frontendWithSymbol
                  }) : I("memepad.jetton.sell.failed_alert", {
                    askLabel: B.frontendWithSymbol,
                    offerLabel: N.frontendWithSymbol
                  });
                xe().bottom.error(G)
              },
              ut = await (T === Y.BUY ? e.jettonTrading.buyJetton(V, D) : e.jettonTrading.sellJetton(V, D));
            if (ut.err) {
              if (ut.extra && ut.extra instanceof Error) {
                const B = ut.extra;
                console.log(B, {
                  UserRejectsError: B instanceof Nn,
                  TonConnectError: B instanceof On,
                  UnknownError: B instanceof Un,
                  UnknownAppError: B instanceof Fn,
                  BadRequestError: B instanceof Jn,
                  WrongAddressError: B instanceof Kn,
                  WalletNotInjectedError: B instanceof Xn,
                  WalletNotConnectedError: B instanceof Hn
                })
              }
              o.value[T] = !1, vt();
              return
            }
            s("trade");
            const tt = ut.data;
            $ = T === Y.BUY ? e.jettonTrading.getWaitForBuyStatus() : e.jettonTrading.getWaitForSellStatus(), await Ri(2e4);
            const zt = await $.exec({
                jettonAddress: z,
                transactionHash: tt
              }),
              L = zt ? "success" : "failed";
            if (T === Y.BUY ? S.memepad.memepadJettonBuy({
                status: L,
                jettonId: ct,
                jettonShortname: pt,
                jettonAddress: yt,
                purchaseAmount: V.toNumber()
              }) : S.memepad.memepadJettonSell({
                status: L,
                jettonId: ct,
                jettonShortname: pt,
                jettonAddress: yt,
                purchaseAmount: D.maxReceive.toNumber()
              }), !zt) {
              o.value[T] = !1, vt();
              return
            }
            const R = T === Y.BUY ? I("memepad.jetton.buy.success_alert", {
              ticker: Q,
              label: `${Ns(V)} TON`
            }) : I("memepad.jetton.sell.success_alert", {
              label: `${Ji(V).full} ${Q}`
            });
            xe().bottom.success(R), o.value[T] = !1, e.tradeSuccessCallback()
          })()
        }
      }
      return (S, E) => {
        const T = Sn,
          V = ya,
          D = kn,
          Q = Be,
          ct = Pt,
          yt = js,
          z = La,
          pt = ks,
          vt = Wa,
          ut = Cn;
        return g(), A(ut, {
          class: "memepad-jetton-trade-modal"
        }, {
          "top-center": F(() => [C(V, {
            modelValue: i.value,
            "onUpdate:modelValue": E[0] || (E[0] = tt => i.value = tt),
            class: "tabs"
          }, {
            default: F(() => [C(T, {
              label: ("t" in S ? S.t : v(I))("memepad.jetton.buy_tab"),
              value: v(Y).BUY,
              type: v(fs).PRIMARY,
              class: "buy-tab"
            }, null, 8, ["label", "value", "type"]), C(T, {
              label: ("t" in S ? S.t : v(I))("memepad.jetton.sell_tab"),
              value: v(Y).SELL,
              type: v(fs).SECONDARY,
              class: "sell-tab"
            }, null, 8, ["label", "value", "type"])]),
            _: 1
          }, 8, ["modelValue"])]),
          default: F(() => [_("div", Xa, [(g(), A(D, {
            ref_key: "actionControlsInputComp",
            ref: r,
            key: i.value,
            modelValue: v(p),
            "onUpdate:modelValue": E[1] || (E[1] = tt => at(p) ? p.value = tt : null),
            postfix: i.value === "buy" ? "TON" : S.jetton.ticker,
            modifier: m,
            onBlur: c
          }, null, 8, ["modelValue", "postfix"])), _("div", Ha, [v(w) ? (g(), k("span", Ya, W(v(w)), 1)) : v(w) === void 0 ? (g(), A(Q, {
            key: 1,
            class: "skeleton"
          })) : it("", !0)]), _("button", {
            type: "button",
            class: "reset slippage-btn",
            onClick: E[2] || (E[2] = tt => S.$emit("open-slippage"))
          }, [_("span", Ga, W(`${("t"in S?S.t:v(I))("memepad.jetton.slippage_btn")} ${v(u)}%`), 1), C(ct, {
            name: "arrow-caret-down",
            class: "icon"
          })])])]),
          "bottom-action": F(() => [C(pt, {
            "force-loading": S.unlockEnabled === void 0 && S.isReleased || !S.jettonTrading
          }, {
            default: F(() => [S.unlockEnabled ? (g(), A(yt, {
              key: 0,
              jetton: S.jetton,
              "jetton-information": S.jettonInformation,
              balances: S.balances,
              "jetton-management": S.jettonManagement,
              onUnlocked: E[3] || (E[3] = tt => S.$emit("unlock-success"))
            }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])) : (g(), A(z, {
              key: 1,
              value: v(f),
              tab: i.value,
              jetton: S.jetton,
              "trade-pendings": o.value,
              "input-state": v(l),
              onTrade: v(a)
            }, null, 8, ["value", "tab", "jetton", "trade-pendings", "input-state", "onTrade"]))]),
            _: 1
          }, 8, ["force-loading"])]),
          "bottom-helpers": F(() => [C(vt, {
            ref_key: "rangeInputEl",
            ref: d,
            modelValue: v(b),
            "onUpdate:modelValue": E[4] || (E[4] = tt => at(b) ? b.value = tt : null),
            tab: i.value,
            jetton: S.jetton,
            balances: S.balances
          }, null, 8, ["modelValue", "tab", "jetton", "balances"])]),
          _: 1
        })
      }
    }
  }),
  qa = X(Za, [
    ["__scopeId", "data-v-a5969575"]
  ]),
  Qa = {
    class: "title"
  },
  tc = {
    class: "content"
  },
  ec = {
    class: "actions"
  },
  sc = {
    key: 1,
    class: "text"
  },
  ic = 1,
  nc = 99,
  oc = K({
    __name: "SlippageModal",
    props: {
      jettonTrading: {},
      jettonModalControls: {}
    },
    emits: ["slippage-updated"],
    setup(n, {
      emit: t
    }) {
      const e = n,
        s = t,
        i = O(),
        o = () => {
          var c;
          e.jettonModalControls.value.value === ht.SLIPPAGE && ((c = i.value) == null || c.focusOnInput())
        },
        r = O(e.jettonTrading.slippage.toString()),
        l = x(() => new bt(r.value.replaceAll(",", "") || "0")),
        h = x(() => l.value.lt(ic) ? I("memepad.jetton.slippage.error_message.too_low") : l.value.gt(nc) ? I("memepad.jetton.slippage.error_message.too_high") : ""),
        a = () => {
          h.value || (e.jettonTrading.updateSlippage(parseFloat(r.value)), s("slippage-updated"))
        };
      return (c, u) => {
        const d = kn,
          f = Hi,
          m = Ot,
          p = Cn;
        return g(), A(p, {
          class: "memepad-jetton-action-controls-slippage-modal"
        }, {
          "top-center": F(() => [_("div", Qa, W(("t" in c ? c.t : v(I))("memepad.jetton.slippage.title")), 1)]),
          default: F(() => [_("div", tc, [C(d, {
            ref_key: "actionControlsInputComp",
            ref: i,
            modelValue: v(r),
            "onUpdate:modelValue": u[0] || (u[0] = b => at(r) ? r.value = b : null),
            postfix: "%",
            modifier: b => ("formatFloatLine" in c ? c.formatFloatLine : v(Pe))(b, {
              join: "emptyFractional"
            }),
            onBlur: o
          }, null, 8, ["modelValue", "modifier"]), u[1] || (u[1] = _("div", {
            class: "subtitle-compensator"
          }, null, -1))])]),
          "bottom-action": F(() => [_("div", ec, [v(h) ? (g(), A(f, {
            key: 0,
            "error-message": v(h)
          }, null, 8, ["error-message"])) : (g(), k("div", sc, W(("t" in c ? c.t : v(I))("memepad.jetton.slippage.text")), 1)), C(m, {
            label: ("t" in c ? c.t : v(I))("memepad.jetton.slippage.done_btn"),
            fill: "",
            size: v(Et).LARGE,
            type: v(h) ? v(Tt).HIGHLIGHT : v(Tt).PRIMARY,
            disabled: !!v(h),
            onClick: a
          }, null, 8, ["label", "size", "type", "disabled"])])]),
          _: 1
        })
      }
    }
  }),
  rc = X(oc, [
    ["__scopeId", "data-v-0736f852"]
  ]),
  lc = {
    class: "memepad-jetton-action-controls-trade-buttons"
  },
  hc = {
    class: "inner"
  },
  ac = {
    class: "label"
  },
  cc = {
    class: "inner"
  },
  uc = {
    class: "label"
  },
  dc = K({
    __name: "TradeButtons",
    props: {
      tradePendings: {}
    },
    emits: ["click"],
    setup(n) {
      return (t, e) => {
        const s = Pt,
          i = Ot;
        return g(), k("div", lc, [C(i, {
          class: "buy-button",
          type: v(Tt).HIGHLIGHT,
          loading: t.tradePendings[v(Y).BUY],
          onClick: e[0] || (e[0] = o => t.$emit("click", v(Y).BUY))
        }, {
          default: F(() => [_("div", hc, [C(s, {
            name: "arrow-up-sm",
            class: "icon"
          }), _("span", ac, W(("t" in t ? t.t : v(I))("memepad.jetton.buy_button_preview_label")), 1)])]),
          _: 1
        }, 8, ["type", "loading"]), C(i, {
          class: "sell-button",
          type: v(Tt).PINK,
          loading: t.tradePendings[v(Y).SELL],
          onClick: e[1] || (e[1] = o => t.$emit("click", v(Y).SELL))
        }, {
          default: F(() => [_("div", cc, [C(s, {
            name: "arrow-down-sm",
            class: "icon"
          }), _("span", uc, W(("t" in t ? t.t : v(I))("memepad.jetton.sell_button_preview_label")), 1)])]),
          _: 1
        }, 8, ["type", "loading"])])
      }
    }
  }),
  fc = X(dc, [
    ["__scopeId", "data-v-82e53b2b"]
  ]),
  mc = {
    class: "memepad-jetton-action-controls"
  },
  pc = K({
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
      jettonManagement: {},
      jettonTrading: {},
      jettonModalControls: {},
      tonUsdRate: {}
    },
    emits: ["trade-success", "unlock-success"],
    setup(n, {
      emit: t
    }) {
      const e = n,
        s = t,
        i = O(Y.BUY),
        o = Gn({
          [Y.BUY]: !1,
          [Y.SELL]: !1
        }),
        r = c => {
          i.value = c, e.jettonModalControls.update(ht.TRADE)
        },
        l = () => {
          e.jettonModalControls.update(void 0)
        },
        h = () => {
          s("trade-success")
        },
        a = () => {
          s("unlock-success")
        };
      return (c, u) => {
        const d = pa,
          f = qa,
          m = rc,
          p = fc,
          b = ks,
          w = Cs;
        return g(), k("div", mc, [C(w, null, {
          default: F(() => [C(b, {
            "force-loading": c.unlockEnabled === void 0 && c.isReleased || !c.jettonTrading,
            "button-size": v(Et).MEDIUM
          }, {
            default: F(() => [c.unlockEnabled ? (g(), A(d, {
              key: 0,
              jetton: c.jetton,
              "jetton-information": c.jettonInformation,
              balances: c.balances,
              "jetton-management": c.jettonManagement,
              "unlock-success-callback": a
            }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])) : (g(), k(st, {
              key: 1
            }, [c.jettonModalControls.isOpened(v(ht).TRADE) ? (g(), A(f, {
              key: 0,
              modelValue: v(i),
              "onUpdate:modelValue": u[0] || (u[0] = M => at(i) ? i.value = M : null),
              "trade-pendings": v(o),
              "onUpdate:tradePendings": u[1] || (u[1] = M => at(o) ? o.value = M : null),
              jetton: c.jetton,
              "jetton-information": c.jettonInformation,
              "jetton-bcl-data": c.jettonBclData,
              balances: c.balances,
              "jetton-management": c.jettonManagement,
              "jetton-trading": c.jettonTrading,
              "is-released": c.isReleased,
              "unlock-enabled": c.unlockEnabled,
              "ton-usd-rate": c.tonUsdRate,
              "trade-success-callback": h,
              "jetton-modal-controls": c.jettonModalControls,
              onTrade: l,
              onUnlockSuccess: u[2] || (u[2] = M => c.$emit("unlock-success")),
              onOpenSlippage: u[3] || (u[3] = M => c.jettonModalControls.update(v(ht).SLIPPAGE))
            }, null, 8, ["modelValue", "trade-pendings", "jetton", "jetton-information", "jetton-bcl-data", "balances", "jetton-management", "jetton-trading", "is-released", "unlock-enabled", "ton-usd-rate", "jetton-modal-controls"])) : it("", !0), c.jettonModalControls.isOpened(v(ht).SLIPPAGE) ? (g(), A(m, {
              key: 1,
              "jetton-trading": c.jettonTrading,
              "jetton-modal-controls": c.jettonModalControls,
              onSlippageUpdated: u[4] || (u[4] = M => c.jettonModalControls.update(v(ht).TRADE))
            }, null, 8, ["jetton-trading", "jetton-modal-controls"])) : it("", !0), C(p, {
              "trade-pendings": v(o),
              onClick: r
            }, null, 8, ["trade-pendings"])], 64))]),
            _: 1
          }, 8, ["force-loading", "button-size"])]),
          _: 1
        })])
      }
    }
  }),
  vc = X(pc, [
    ["__scopeId", "data-v-bacfcc1b"]
  ]),
  bc = {
    class: "memepad-jetton-page-trade"
  },
  gc = K({
    __name: "PageTrade",
    props: {
      jetton: {},
      jettonInformation: {},
      jettonBclData: {},
      jettonChart: {},
      jettonChartInterval: {},
      jettonChartType: {},
      updateJettonChartInterval: {
        type: Function
      },
      updateJettonChartType: {
        type: Function
      },
      isReleased: {
        type: Boolean
      },
      unlockEnabled: {
        type: Boolean
      },
      balances: {},
      jettonManagement: {},
      jettonTrading: {},
      jettonModalControls: {},
      tonUsdRate: {}
    },
    emits: ["trade-success", "unlock-success"],
    setup(n) {
      const t = n,
        e = O(!1),
        s = x(() => {
          var h, a, c, u, d;
          const i = t.jettonInformation.marketCap,
            o = t.jettonBclData && t.jettonBclData.tonCollectedPercent,
            r = ((h = t.jettonBclData) == null ? void 0 : h.tonCollected) || ((a = t.jettonInformation) == null ? void 0 : a.tonCollected),
            l = (c = t.jettonBclData) == null ? void 0 : c.tonForDex;
          return {
            isReleased: t.isReleased,
            percent: o,
            collected: r,
            total: l,
            marketDetails: {
              marketCap: i,
              listRows: {
                holdersCount: (u = t.jettonInformation) == null ? void 0 : u.holdersCount,
                transactionsCount: (d = t.jettonInformation) == null ? void 0 : d.transactionsCount,
                transactionsVolume: t.jettonInformation.transactionsVolume
              }
            }
          }
        });
      return (i, o) => {
        const r = _r,
          l = go,
          h = la,
          a = vc,
          c = Ii;
        return g(), k(st, null, [_("div", bc, [C(r, {
          jetton: i.jetton,
          "jetton-information": i.jettonInformation,
          "is-released": i.isReleased,
          onShare: o[0] || (o[0] = u => e.value = !0)
        }, null, 8, ["jetton", "jetton-information", "is-released"]), C(l, Zn(v(s), {
          class: "details"
        }), null, 16), C(h, {
          chart: i.jettonChart,
          "chart-interval": i.jettonChartInterval,
          "chart-type": i.jettonChartType,
          "update-chart-interval": i.updateJettonChartInterval,
          "update-chart-type": i.updateJettonChartType
        }, null, 8, ["chart", "chart-interval", "chart-type", "update-chart-interval", "update-chart-type"]), C(a, {
          jetton: i.jetton,
          "jetton-information": i.jettonInformation,
          "is-released": i.isReleased,
          "unlock-enabled": i.unlockEnabled,
          balances: i.balances,
          "jetton-management": i.jettonManagement,
          "jetton-trading": i.jettonTrading,
          "ton-usd-rate": i.tonUsdRate,
          "jetton-modal-controls": i.jettonModalControls,
          class: "action-controls",
          onTradeSuccess: o[1] || (o[1] = u => i.$emit("trade-success")),
          onUnlockSuccess: o[2] || (o[2] = u => i.$emit("unlock-success"))
        }, null, 8, ["jetton", "jetton-information", "is-released", "unlock-enabled", "balances", "jetton-management", "jetton-trading", "ton-usd-rate", "jetton-modal-controls"])]), C(c, {
          modelValue: v(e),
          "onUpdate:modelValue": o[3] || (o[3] = u => at(e) ? e.value = u : null),
          "jetton-shortname": t.jetton.shortname,
          ticker: i.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64)
      }
    }
  }),
  _c = X(gc, [
    ["__scopeId", "data-v-a850878f"]
  ]),
  wc = {
    class: "memepad-jetton-header-short"
  },
  yc = {
    class: "ticker"
  },
  Mc = K({
    __name: "HeaderShort",
    props: {
      jetton: {}
    },
    setup(n) {
      return (t, e) => {
        const s = pe;
        return g(), k("div", wc, [C(s, {
          src: v(me)(t.jetton.iconFileKey),
          size: 28
        }, null, 8, ["src"]), _("div", yc, W(t.jetton.ticker), 1)])
      }
    }
  }),
  Sc = X(Mc, [
    ["__scopeId", "data-v-801b9d68"]
  ]),
  kc = {
    class: "memepad-jetton-transaction"
  },
  Cc = {
    class: "user-avatar-wrapper"
  },
  jc = ["src"],
  zc = {
    key: 1,
    class: "user-avatar-empty"
  },
  $c = {
    class: "content"
  },
  Lc = {
    key: 0,
    class: "name"
  },
  Ec = {
    key: 1,
    class: "user-address"
  },
  Tc = {
    class: "event-data"
  },
  xc = {
    class: "time"
  },
  Pc = {
    class: "values"
  },
  Vc = {
    key: 0,
    class: "ton-price"
  },
  Rc = {
    key: 1,
    class: "amount"
  },
  Ic = K({
    __name: "Transaction",
    props: {
      transaction: {}
    },
    setup(n) {
      const t = n,
        e = x(() => {
          const o = Ai(t.transaction.timestamp);
          return o.isDate ? o.label : I("base.time.ago", {
            time: o.label
          })
        }),
        s = x(() => I(`memepad.jetton.transactions.type.${t.transaction.type.toLowerCase()}`)),
        i = x(() => Wi(qn(t.transaction.user.address)));
      return (o, r) => {
        const l = Pt;
        return g(), k("div", kc, [_("div", Cc, [o.transaction.user.avatarUrl ? (g(), k("img", {
          key: 0,
          src: o.transaction.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, jc)) : (g(), k("div", zc, [C(l, {
          name: "space-invader",
          class: "icon"
        })]))]), _("div", $c, [o.transaction.user.nickname ? (g(), k("div", Lc, W(o.transaction.user.nickname), 1)) : (g(), k("div", Ec, W(v(i)), 1)), _("div", Tc, [_("div", {
          class: Yt(["type", `is-${o.transaction.type.toLowerCase()}`])
        }, W(v(s)), 3), _("div", xc, W(v(e)), 1)])]), _("div", Pc, [o.transaction.amount ? (g(), k("div", Vc, W(`${("formatTon"in o?o.formatTon:v(Fi))(o.transaction.amount,2)} TON`), 1)) : it("", !0), o.transaction.jettonAmount ? (g(), k("div", Rc, W(`${("formatCount"in o?o.formatCount:v(Ji))(o.transaction.jettonAmount).full} ${o.transaction.ticker}`), 1)) : it("", !0)])])
      }
    }
  }),
  Wc = X(Ic, [
    ["__scopeId", "data-v-af7bb1f2"]
  ]),
  Bc = {
    class: "memepad-jetton-page-transactions"
  },
  Ac = K({
    __name: "Transactions",
    props: {
      transactions: {}
    },
    setup(n) {
      return (t, e) => {
        const s = Be,
          i = Wc;
        return g(), k("div", Bc, [t.transactions ? (g(!0), k(st, {
          key: 1
        }, Lt(t.transactions.transactions, o => (g(), A(i, {
          key: o.user.address + o.timestamp,
          transaction: o
        }, null, 8, ["transaction"]))), 128)) : (g(), k(st, {
          key: 0
        }, Lt(3, o => _("div", {
          key: o,
          class: "skeleton"
        }, [C(s, {
          class: "image",
          rounded: ""
        }), C(s, {
          class: "title"
        }), C(s, {
          class: "value"
        })])), 64))])
      }
    }
  }),
  Dc = X(Ac, [
    ["__scopeId", "data-v-3267f193"]
  ]),
  Nc = {
    class: "memepad-jetton-page-transactions"
  },
  Oc = K({
    __name: "PageTransactions",
    props: {
      jetton: {},
      jettonTransactions: {}
    },
    setup(n) {
      return (t, e) => {
        const s = Sc,
          i = Dc;
        return g(), k("div", Nc, [C(s, {
          jetton: t.jetton
        }, null, 8, ["jetton"]), C(i, {
          transactions: t.jettonTransactions
        }, null, 8, ["transactions"])])
      }
    }
  }),
  Uc = X(Oc, [
    ["__scopeId", "data-v-cd9e28c5"]
  ]),
  Fc = () => Di().$webApp.openTelegramLink("https://t.me/BlumCrypto"),
  Jc = {
    class: "memepad-jetton page"
  },
  Kc = K({
    __name: "[shortname]",
    setup(n) {
      const t = (() => {
          const L = Qn("shortname");
          if (!L) throw Oi("Jetton shortname is not provided");
          return L
        })(),
        {
          tonUsdRate: e
        } = wo(),
        {
          defaultManagementSdk: s,
          getBeforeDexTradingSdk: i,
          getDexTradingSdk: o
        } = _o(),
        r = to(),
        l = eo(),
        h = Ss(),
        a = so(),
        c = Je(),
        u = io(),
        d = x(() => a.name === "memepad-jetton-shortname-transactions" ? ge.TRANSACTIONS : ge.TRADE),
        {
          jettonStaticState: f,
          ...m
        } = pt(),
        {
          jettonInformation: p,
          jettonTransactions: b,
          ...w
        } = vt(),
        {
          jettonBclData: M,
          jettonBalance: $,
          jettonUnlockEnabled: j,
          ...P
        } = tt(),
        {
          jettonChart: S,
          jettonChartInterval: E,
          ...T
        } = ut(t),
        V = zt();
      yo(() => a.name === "memepad-jetton-shortname-transactions" ? Je().push({
        name: "memepad-jetton-shortname-trade"
      }) : V.state.value === ht.SLIPPAGE ? V.controls.update(ht.TRADE) : V.state.value === ht.TRADE ? V.controls.update(void 0) : Je().push({
        name: "memepad"
      }));
      const D = async () => {
        const L = ho("from", uo);
        h.memepad.memepadJettonPageOpen({
          source: L,
          jettonShortname: t,
          jettonId: f.value.status === "loaded" ? f.value.data.id : void 0
        }), L && Mo(), a.name === "memepad-jetton-shortname" && c.replace({
          name: "memepad-jetton-shortname-trade",
          params: {
            shortname: t
          }
        }), await ao().getReferralToken(), await m.getMemepadJettonUntilOk.exec(), await w.init(), P.init(), T.init()
      }, Q = () => {
        m.destroy(), w.destroy(), T.destroy(), P.destroy()
      };
      D(), We(() => {
        Q(), u.internal.removeForceHideTabs()
      });
      const ct = async () => {
        await Promise.all([r.update(), w.update(), T.update(), P.update()])
      }, yt = async () => {
        await P.resetAndUpdateUnlocked()
      }, z = x(() => {
        var H;
        if (f.value.status === "error") return {
          status: "error"
        };
        if (f.value.status === "loading" || !p.value) return {
          status: "loading"
        };
        const L = f.value.data;
        if (!L || !p || p.value.status === _e.IN_PROGRESS) return {
          status: "loading"
        };
        const R = L.address,
          B = [_e.PUBLISHED_ON_DEX, _e.LISTED_TO_DEX].includes(p.value.status),
          N = {
            jettonBalance: $.value ? ps($.value, L.ticker) : void 0,
            tonBalance: r.wallet.value.status === "connected" ? (H = r.wallet.value.balance) == null ? void 0 : H.tonBalance.balance : void 0
          },
          G = s,
          U = (() => {
            if (!B) return i(R);
            if (M.value) return o(R)
          })();
        return p.value.status === _e.LISTED_TO_DEX ? {
          status: "moving_to_dex",
          jetton: L,
          jettonInformation: p.value,
          isReleased: !0,
          unlockEnabled: j.value,
          balances: N,
          jettonManagement: G,
          jettonTrading: U
        } : {
          status: "trade",
          jetton: L,
          jettonInformation: p.value,
          jettonBclData: M.value,
          jettonTransactions: b.value,
          jettonChart: S.value,
          jettonChartInterval: E.value,
          jettonChartType: T.jettonChartType.value,
          updateJettonChartInterval: T.updateChartInterval,
          updateJettonChartType: T.updateChartType,
          isReleased: B,
          unlockEnabled: j.value,
          balances: N,
          jettonManagement: G,
          jettonTrading: U,
          jettonModalControls: V.controls
        }
      });
      gt(() => V.state.value, L => {
        L ? u.internal.forceHideTabs() : u.internal.removeForceHideTabs()
      }), gt(() => z.value.status, (L, R) => {
        L === "moving_to_dex" ? u.internal.forceHideTabs() : R === "moving_to_dex" && u.internal.removeForceHideTabs()
      });

      function pt() {
        const L = no(() => new Map, "$LIXaimu3X5"),
          R = O({
            status: "loading"
          }),
          N = oo(async () => {
            const U = L.value.get(t);
            if (U) return ft(U);
            const H = await we.getMemepadJetton(t);
            return H.err ? fo() : (L.value.set(t, H.data), ft(H.data))
          }, U => R.value = {
            status: "loaded",
            data: U
          }, 2e4);
        return {
          destroy: () => {
            N.destroy(), R.value = {
              status: "loading"
            }
          },
          getMemepadJettonUntilOk: N,
          jettonStaticState: x(() => R.value)
        }
      }

      function vt() {
        const L = O(),
          R = O(),
          B = te(async () => {
            const H = await we.getMemepadJettonInformation(t),
              Z = await we.getMemepadJettonTransactions(t);
            return ft({
              information: (Rt(H) ? H.data : L.value) || L.value,
              transactions: (Rt(Z) ? Z.data : R.value) || R.value
            })
          }, H => {
            L.value = H.information, R.value = H.transactions
          }, 5e3);
        return {
          init: async () => await B.exec(),
          destroy: () => {
            B.destroy(), L.value = void 0, R.value = void 0
          },
          update: async () => await B.exec(),
          jettonInformation: x(() => L.value),
          jettonTransactions: x(() => R.value)
        }
      }

      function ut(L) {
        const R = O(),
          B = O(ie.ONE_MINUTE),
          N = O(se.MARKET_CAP);
        let G = new AbortController;
        const U = () => {
            G.abort(), G = new AbortController
          },
          H = kt => {
            B.value = kt, ot.exec()
          },
          Z = kt => {
            N.value = kt, ot.exec()
          },
          ot = te(async () => {
            U();
            const kt = await we.getMemepadJettonChart(L, {
              interval: B.value,
              type: N.value
            });
            return G.signal.aborted ? ft(R.value) : ft((Rt(kt) ? kt.data : R.value) || R.value)
          }, kt => R.value = kt, 5e3);
        return {
          init: async () => await ot.exec(),
          destroy: () => {
            ot.destroy(), R.value = void 0, B.value = ie.ONE_MINUTE
          },
          update: async () => await ot.exec(),
          updateChartInterval: H,
          updateChartType: Z,
          jettonChartInterval: x(() => B.value),
          jettonChartType: x(() => N.value),
          jettonChart: x(() => R.value)
        }
      }

      function tt() {
        const L = O(),
          R = O(),
          B = O();
        let N, G, U, H, Z, ot;

        function As() {
          G = gt(z, lt => {
            lt.status === "error" || lt.status === "loading" || N || lt.jettonManagement && (G == null || G(), N = te(async () => {
              if (z.value.status === "error" || z.value.status === "loading") return ft(void 0);
              const dt = z.value.jetton.address,
                Qt = await z.value.jettonManagement.getJettonBclData(dt);
              return ft((Rt(Qt) ? Qt.data : L.value) || L.value)
            }, dt => L.value = dt, 6e4), N == null || N.exec())
          }, {
            immediate: !0
          }), H = gt(z, lt => {
            lt.status === "error" || lt.status === "loading" || U || !lt.jettonTrading || l.value !== "connected" || (H == null || H(), U = te(async () => {
              if (z.value.status === "error" || z.value.status === "loading" || !z.value.jettonTrading || l.value !== "connected") return ft(void 0);
              const dt = z.value.jetton.address,
                Qt = await z.value.jettonTrading.getUserJettonBalance(dt);
              return ft((Rt(Qt) ? Qt.data : R.value) || R.value)
            }, dt => R.value = dt, 6e4), U == null || U.exec())
          }, {
            immediate: !0
          }), ot = gt(z, lt => {
            lt.status === "error" || lt.status === "loading" || Z || !lt.jetton || !lt.balances.jettonBalance || !lt.isReleased || l.value !== "connected" || (ot == null || ot(), Z = te(async () => {
              if (z.value.status === "error" || z.value.status === "loading" || !z.value.balances.jettonBalance || !z.value.isReleased || l.value !== "connected") return ft(void 0);
              if (z.value.balances.jettonBalance.value.isZero()) return ft(!1);
              const dt = await z.value.jettonManagement.getUnlockEnabled(z.value.jetton.address);
              return ft(Rt(dt) ? dt.data : B.value)
            }, dt => B.value = dt, 6e4), Z == null || Z.exec())
          }, {
            immediate: !0
          })
        }
        return {
          init: As,
          destroy: () => {
            G == null || G(), N == null || N.destroy(), H == null || H(), U == null || U.destroy(), ot == null || ot(), Z == null || Z.destroy(), L.value = void 0, R.value = void 0, B.value = void 0
          },
          update: async () => {
            await (N == null ? void 0 : N.exec()), await (U == null ? void 0 : U.exec()), await (Z == null ? void 0 : Z.exec())
          },
          resetAndUpdateUnlocked: async () => {
            B.value = void 0, await (Z == null ? void 0 : Z.exec())
          },
          jettonBclData: x(() => L.value),
          jettonBalance: x(() => R.value),
          jettonUnlockEnabled: x(() => B.value)
        }
      }

      function zt() {
        const L = [ht.TRADE, ht.SLIPPAGE],
          R = O(void 0),
          B = {
            update: N => {
              R.value = N
            },
            isOpened: N => {
              if (!R.value) return !1;
              const G = L.indexOf(R.value),
                U = L.indexOf(N);
              return G >= U
            },
            value: x(() => R.value)
          };
        return {
          state: x(() => R.value),
          controls: B
        }
      }
      return ro(() => {
        console.log("state", z.value)
      }), (L, R) => {
        const B = $n,
          N = Ln,
          G = Ko,
          U = _c,
          H = Uc,
          Z = co;
        return g(), k("div", Jc, [v(z).status === "error" ? (g(), A(B, {
          key: 0,
          icon: ("imgResolver" in L ? L.imgResolver : v(lo))("emoji/Collision"),
          title: ("t" in L ? L.t : v(I))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in L ? L.t : v(I))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in L ? L.t : v(I))("memepad.jetton.error_screen.btn_label"),
          onButton: R[0] || (R[0] = ot => ("visitCommunity" in L ? L.visitCommunity : v(Fc))())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : v(z).status === "loading" ? (g(), A(N, {
          key: 1
        })) : (g(), k(st, {
          key: 2
        }, [v(d) === v(ge).TRADE ? (g(), k(st, {
          key: 0
        }, [v(z).status === "moving_to_dex" ? (g(), A(G, {
          key: 0,
          jetton: v(z).jetton,
          "jetton-information": v(z).jettonInformation,
          "unlock-enabled": v(z).unlockEnabled,
          balances: v(z).balances,
          "jetton-management": v(z).jettonManagement,
          "is-released": ""
        }, null, 8, ["jetton", "jetton-information", "unlock-enabled", "balances", "jetton-management"])) : (g(), A(U, {
          key: 1,
          jetton: v(z).jetton,
          "jetton-information": v(z).jettonInformation,
          "jetton-bcl-data": v(z).jettonBclData,
          "jetton-chart": v(z).jettonChart,
          "jetton-chart-interval": v(z).jettonChartInterval,
          "jetton-chart-type": v(z).jettonChartType,
          "update-jetton-chart-interval": v(z).updateJettonChartInterval,
          "update-jetton-chart-type": v(z).updateJettonChartType,
          "is-released": v(z).isReleased,
          "unlock-enabled": v(z).unlockEnabled,
          "jetton-management": v(z).jettonManagement,
          "jetton-trading": v(z).jettonTrading,
          balances: v(z).balances,
          "jetton-modal-controls": v(z).jettonModalControls,
          "ton-usd-rate": v(e),
          onTradeSuccess: ct,
          onUnlockSuccess: yt
        }, null, 8, ["jetton", "jetton-information", "jetton-bcl-data", "jetton-chart", "jetton-chart-interval", "jetton-chart-type", "update-jetton-chart-interval", "update-jetton-chart-type", "is-released", "unlock-enabled", "jetton-management", "jetton-trading", "balances", "jetton-modal-controls", "ton-usd-rate"]))], 64)) : v(d) === v(ge).TRANSACTIONS ? (g(), A(H, {
          key: 1,
          jetton: v(z).jetton,
          "jetton-transactions": v(z).jettonTransactions
        }, null, 8, ["jetton", "jetton-transactions"])) : it("", !0)], 64)), C(Z)])
      }
    }
  }),
  ou = X(Kc, [
    ["__scopeId", "data-v-c104fb06"]
  ]);
export {
  ou as
  default
};