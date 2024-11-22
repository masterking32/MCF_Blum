import {
  _ as Ln
} from "./Cht2VRmT.js";
import {
  _ as Tn
} from "./zQF4wy8r.js";
import {
  _ as En
} from "./BNZo_vHe.js";
import {
  d as K,
  a as g,
  c as k,
  k as j,
  b as _,
  t as W,
  N as Ot,
  j as X,
  m as A,
  x as F,
  W as st,
  X as Tt,
  g as it,
  e as v,
  bd as xn,
  F as E,
  ab as ks,
  r as N,
  o as Be,
  f as R,
  B as Et,
  ba as Rt,
  be as Ii,
  G as Pe,
  C as Ut,
  aY as pe,
  V as at,
  A as Pn,
  aZ as ve,
  bf as Wi,
  ay as Yt,
  az as ae,
  M as Vn,
  aW as Bi,
  Y as xt,
  aS as Ai,
  aU as Di,
  bg as ne,
  bh as ie,
  av as bt,
  aJ as It,
  n as Gt,
  w as Zt,
  bi as fs,
  bj as Ns,
  bk as Rn,
  P as Ni,
  ai as Ve,
  bl as In,
  bm as Oi,
  L as Ui,
  bn as ms,
  bo as Wn,
  au as Bn,
  a8 as An,
  aB as Jt,
  aj as Dn,
  bp as Fi,
  bq as ps,
  af as vt,
  br as G,
  aX as Ji,
  bs as ht,
  bt as Os,
  bu as Nn,
  a_ as Ki,
  am as On,
  an as vs,
  ah as Un,
  ap as Fn,
  bv as Jn,
  bw as Kn,
  ao as Xn,
  b1 as Hn,
  ax as Yn,
  J as Ke,
  u as Gn,
  bx as _e,
  by as we,
  bz as Zn,
  bA as qn,
  b8 as Qn,
  bB as to,
  a9 as ee,
  a$ as eo,
  bC as so,
  bD as io,
  aR as no,
  aT as oo,
  K as ye,
  bb as dt,
  bE as ro
} from "./BZXAykfw.js";
import {
  _ as Ae
} from "./CIgmxH5Y.js";
import {
  _ as lo
} from "./CsV4hbOn.js";
import {
  _ as Xi,
  a as Cs,
  m as ho,
  s as ao,
  b as co,
  c as uo
} from "./CHDBK8-b.js";
import {
  _ as js
} from "./BwKX5owb.js";
import {
  u as fo,
  a as mo
} from "./BApF9PQZ.js";
import {
  u as po
} from "./B2dRjhuK.js";
import {
  c as vo
} from "./DPbxm6ol.js";
import "./CR0t1yhu.js";
const bo = {
    class: "memepad-jetton-action-controls-balance"
  },
  go = {
    class: "label"
  },
  _o = K({
    __name: "Balance",
    props: {
      balance: {}
    },
    setup(n) {
      return (t, e) => {
        const s = Ot;
        return g(), k("div", bo, [j(s, {
          name: "wallet",
          class: "icon"
        }), _("span", go, W(t.balance), 1)])
      }
    }
  }),
  Hi = X(_o, [
    ["__scopeId", "data-v-5ed33e11"]
  ]),
  wo = {
    class: "kit-error-message"
  },
  yo = {
    class: "label"
  },
  Mo = K({
    __name: "ErrorMessage",
    props: {
      errorMessage: {}
    },
    setup(n) {
      return (t, e) => {
        const s = Ot;
        return g(), k("div", wo, [j(s, {
          name: "circle-warning",
          class: "icon"
        }), _("span", yo, W(t.errorMessage), 1)])
      }
    }
  }),
  Yi = X(Mo, [
    ["__scopeId", "data-v-f9832edf"]
  ]),
  So = {
    type: "button",
    class: "memepad-jetton-action-controls-fees"
  },
  ko = {
    key: 1,
    class: "fees"
  },
  Co = {
    class: "memepad-jetton-action-controls-fees-tooltip-detail"
  },
  jo = {
    key: 0
  },
  zo = {
    class: "label"
  },
  $o = K({
    __name: "Fees",
    props: {
      details: {},
      totalLabel: {},
      errorMessage: {}
    },
    setup(n) {
      return (t, e) => {
        const s = Yi,
          i = Ot,
          o = lo;
        return g(), k("div", So, [t.errorMessage ? (g(), A(s, {
          key: 0,
          "error-message": t.errorMessage
        }, null, 8, ["error-message"])) : t.details && t.totalLabel ? (g(), k("div", ko, [t.details.length ? (g(), A(o, {
          key: 0,
          "text-min-width": 155,
          alignment: v(xn).TOP
        }, {
          default: F(() => [j(i, {
            name: "circle-help",
            class: "memepad-jetton-action-controls-fees-tooltip-icon"
          })]),
          inner: F(() => [_("div", Co, [(g(!0), k(st, null, Tt(t.details, (r, l) => (g(), k(st, {
            key: r.label
          }, [_("span", null, W(r.label), 1), l !== t.details.length - 1 ? (g(), k("br", jo)) : it("", !0)], 64))), 128))])]),
          _: 1
        }, 8, ["alignment"])) : it("", !0), _("span", zo, W(t.totalLabel), 1)])) : it("", !0)])
      }
    }
  }),
  Gi = X($o, [
    ["__scopeId", "data-v-a277f7f4"]
  ]),
  Lo = {
    class: "memepad-jetton-action-controls-unlock-button"
  },
  To = {
    class: "info"
  },
  Eo = {
    class: "label"
  },
  xo = K({
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
        s = E(() => e.jettonManagement.unlockStateControls.getState({
          tonBalance: e.balances.tonBalance,
          jettonBalance: e.balances.jettonBalance,
          jetton: e.jetton
        })),
        i = t,
        o = ks(),
        r = N(!1),
        l = e.jettonManagement.getWaitForUnlockStatus(e.jetton.address),
        h = async () => {
          if (a.value) return;
          const c = () => Pe().bottom.error(R("memepad.jetton.unlock.failed_alert", {
              ticker: e.jetton.ticker
            })),
            u = f => {
              o.memepad.memepadJettonUnlock({
                status: f,
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
          await Ii(2e4), await l.exec(d.data) ? (u("success"), i("unlocked"), Pe().bottom.success(R("memepad.jetton.unlock.success_alert", {
            ticker: e.jetton.ticker
          }))) : (u("failed"), c()), r.value = !1
        }, a = E(() => !!(r.value || !s.value.feesInfo));
      return Be(() => {
        l.destroy()
      }), (c, u) => {
        var y, M;
        const d = Hi,
          m = Ae,
          f = Gi,
          p = Xi,
          b = Ut;
        return g(), k("div", Lo, [_("div", To, [v(s).balanceLabel ? (g(), A(d, {
          key: 0,
          balance: v(s).balanceLabel
        }, null, 8, ["balance"])) : (g(), A(m, {
          key: 1,
          class: "skeleton"
        })), v(s).feesInfo ? (g(), A(f, {
          key: 2,
          details: v(s).feesInfo.details,
          "total-label": v(s).feesInfo.totalLabel,
          "error-message": (y = v(s).error) == null ? void 0 : y.message
        }, null, 8, ["details", "total-label", "error-message"])) : (g(), A(m, {
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
          default: F(() => [_("div", Eo, W(("t" in c ? c.t : v(R))("memepad.jetton.unlock_btn", {
            ticker: c.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "loading", "disabled"]))])
      }
    }
  }),
  zs = X(xo, [
    ["__scopeId", "data-v-b8dbba79"]
  ]),
  Po = {
    class: "memepad-jetton-moving-to-dex-page"
  },
  Vo = {
    class: "content"
  },
  Ro = {
    class: "image-wrapper"
  },
  Io = {
    class: "title"
  },
  Wo = {
    class: "subtitle"
  },
  Bo = {
    class: "wallet-and-button"
  },
  Ao = K({
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
        e = N(!1);
      return (s, i) => {
        const o = En,
          r = Pn,
          l = ve,
          h = zs,
          a = Ut,
          c = Cs,
          u = js,
          d = Wi;
        return g(), k("div", Po, [j(o), _("div", Vo, [_("div", Ro, [j(r, {
          size: 342,
          name: "animations/Clover",
          class: "animation"
        }), j(l, {
          src: v(pe)(s.jetton.iconFileKey),
          size: 80
        }, null, 8, ["src"])]), _("div", Io, W(("t" in s ? s.t : v(R))("memepad.moving_to_dex.title")), 1), _("div", Wo, W(("t" in s ? s.t : v(R))("memepad.moving_to_dex.subtitle", {
          ticker: s.jetton.ticker
        })), 1)]), j(u, null, {
          default: F(() => [_("div", Bo, [j(c, {
            "force-loading": s.unlockEnabled === void 0 && s.isReleased
          }, {
            default: F(() => [s.unlockEnabled ? (g(), A(h, {
              key: 0,
              jetton: s.jetton,
              "jetton-information": s.jettonInformation,
              balances: s.balances,
              "jetton-management": s.jettonManagement,
              onUnlocked: i[0] || (i[0] = m => s.$emit("unlock-success"))
            }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])) : (g(), A(a, {
              key: 1,
              label: ("t" in s ? s.t : v(R))("memepad.jetton.share_token_link"),
              fill: "",
              size: v(Et).LARGE,
              onClick: i[1] || (i[1] = m => e.value = !0)
            }, null, 8, ["label", "size"]))]),
            _: 1
          }, 8, ["force-loading"])])]),
          _: 1
        }), j(d, {
          modelValue: v(e),
          "onUpdate:modelValue": i[2] || (i[2] = m => at(e) ? e.value = m : null),
          "jetton-shortname": t.jetton.shortname,
          ticker: s.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])])
      }
    }
  }),
  Do = X(Ao, [
    ["__scopeId", "data-v-08f5fe7f"]
  ]),
  No = {
    class: "header"
  },
  Oo = {
    class: "name"
  },
  Uo = {
    class: "inner"
  },
  Fo = {
    key: 0
  },
  Jo = {
    class: "info"
  },
  Ko = {
    class: "address"
  },
  Xo = {
    class: "label"
  },
  Ho = {
    key: 0,
    class: "nsfw"
  },
  Yo = {
    class: "label"
  },
  Go = {
    class: "description"
  },
  Zo = {
    key: 1,
    class: "socials"
  },
  qo = ["onClick"],
  Qo = {
    class: "label"
  },
  tr = {
    class: "buttons"
  },
  er = K({
    __name: "InfoSheet",
    props: Yt({
      jetton: {}
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: Yt(["share"], ["update:modelValue"]),
    setup(n, {
      emit: t
    }) {
      const e = n,
        s = t,
        i = E(() => {
          var h;
          return (h = e.jetton.socials) == null ? void 0 : h.map(a => ({
            ...a,
            ...ho(a.type)
          }))
        }),
        o = ae(n, "modelValue"),
        {
          copy: r
        } = Vn(),
        l = () => {
          o.value = !1, s("share")
        };
      return (h, a) => {
        const c = ve,
          u = co,
          d = Ot,
          m = Ut,
          f = Ai;
        return g(), A(f, {
          modelValue: o.value,
          "onUpdate:modelValue": a[2] || (a[2] = p => o.value = p),
          class: "memepad-jetton-info-sheet",
          "no-header-line": ""
        }, {
          title: F(() => [_("div", No, [j(c, {
            src: v(pe)(h.jetton.iconFileKey),
            size: 24
          }, null, 8, ["src"]), _("span", Oo, W(h.jetton.name), 1)])]),
          default: F(() => {
            var p;
            return [_("div", Uo, [h.jetton.bannerFileKey ? (g(), k("div", Fo, [j(u, {
              "banner-file-key": h.jetton.bannerFileKey,
              class: "banner"
            }, null, 8, ["banner-file-key"])])) : it("", !0), _("div", Jo, [_("div", Ko, [_("span", Xo, W(("t" in h ? h.t : v(R))("memepad.jetton.info_sheet.address_label", {
              address: ("sliceWalletAddress" in h ? h.sliceWalletAddress : v(Bi))(h.jetton.address)
            })), 1), _("button", {
              type: "button",
              class: "reset copy-button",
              onClick: a[0] || (a[0] = b => v(r)(h.jetton.address))
            }, [j(d, {
              name: "edit-copy",
              class: "icon"
            })])]), h.jetton.isNSFW ? (g(), k("div", Ho, [j(d, {
              name: "circle-check-white",
              class: "icon"
            }), _("span", Yo, W(("t" in h ? h.t : v(R))("memepad.jetton.nsfw")), 1)])) : it("", !0)]), _("div", Go, W(h.jetton.description), 1), (p = v(i)) != null && p.length ? (g(), k("div", Zo, [(g(!0), k(st, null, Tt(v(i), b => (g(), k("button", {
              key: b.type,
              type: "button",
              class: "item reset",
              onClick: y => v(ao)(b.type, b.url)
            }, [j(d, {
              name: b.icon,
              class: "icon"
            }, null, 8, ["name"]), _("div", Qo, W(b.url), 1)], 8, qo))), 128))])) : it("", !0), _("div", tr, [j(m, {
              label: ("t" in h ? h.t : v(R))("memepad.jetton.share_token_link"),
              fill: "",
              size: v(Et).LARGE,
              type: v(xt).SECONDARY,
              onClick: l
            }, null, 8, ["label", "size", "type"]), j(m, {
              label: ("t" in h ? h.t : v(R))("base.got_it"),
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
  sr = X(er, [
    ["__scopeId", "data-v-f5a2d880"]
  ]),
  ir = {
    class: "memepad-jetton-header"
  },
  nr = {
    class: "jetton"
  },
  or = {
    class: "list"
  },
  rr = {
    class: "ticker"
  },
  lr = {
    key: 0,
    class: "rating"
  },
  hr = {
    key: 1,
    class: "released"
  },
  ar = {
    key: 2,
    class: "lifetime"
  },
  cr = {
    class: "label"
  },
  ur = {
    class: "right"
  },
  dr = K({
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
      const t = N(!1);
      return (e, s) => {
        var l;
        const i = ve,
          o = Ot,
          r = sr;
        return g(), k("div", ir, [_("div", nr, [j(i, {
          src: v(pe)(e.jetton.iconFileKey),
          size: 28
        }, null, 8, ["src"]), _("div", or, [_("div", rr, W(e.jetton.ticker), 1), (l = e.jettonInformation) != null && l.inSpotlight ? (g(), k("div", lr, [j(o, {
          name: "fire",
          class: "icon"
        }), s[4] || (s[4] = _("span", {
          class: "label"
        }, "#1", -1))])) : it("", !0), e.isReleased ? (g(), k("div", hr, [j(o, {
          name: "ship",
          class: "icon"
        }), s[5] || (s[5] = _("span", {
          class: "label"
        }, "STON.fi", -1))])) : (g(), k("div", ar, [j(o, {
          name: "fresh",
          class: "icon"
        }), _("span", cr, W(("getTimeSince" in e ? e.getTimeSince : v(Di))(e.jetton.releaseTimestamp).label), 1)]))])]), _("div", ur, [_("button", {
          type: "button",
          class: "reset share",
          onClick: s[0] || (s[0] = h => e.$emit("share"))
        }, [_("span", null, W(("t" in e ? e.t : v(R))("base.share")), 1)]), _("button", {
          type: "button",
          class: "reset info",
          onClick: s[1] || (s[1] = h => t.value = !0)
        }, [j(o, {
          name: "info",
          class: "icon"
        })])]), j(r, {
          modelValue: v(t),
          "onUpdate:modelValue": s[2] || (s[2] = h => at(t) ? t.value = h : null),
          jetton: e.jetton,
          onShare: s[3] || (s[3] = h => e.$emit("share"))
        }, null, 8, ["modelValue", "jetton"])])
      }
    }
  }),
  fr = X(dr, [
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
var mr = function() {
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

function pr(n) {
  return new mr(n)
}
var vr = function() {
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
    gr().then(function(e) {
      return e ? t._initResizeObserver() : t._initDevicePixelRatioObservable()
    })
  }, n.prototype._initDevicePixelRatioObservable = function() {
    var t = this;
    if (this._canvasElement !== null) {
      var e = Us(this._canvasElement);
      if (e === null) throw new Error("No window is associated with the canvas");
      this._devicePixelRatioObservable = pr(e), this._devicePixelRatioObservable.subscribe(function() {
        return t._invalidateBitmapSize()
      }), this._invalidateBitmapSize()
    }
  }, n.prototype._invalidateBitmapSize = function() {
    var t, e;
    if (this._canvasElement !== null) {
      var s = Us(this._canvasElement);
      if (s !== null) {
        var i = (e = (t = this._devicePixelRatioObservable) === null || t === void 0 ? void 0 : t.value) !== null && e !== void 0 ? e : s.devicePixelRatio,
          o = this._canvasElement.getClientRects(),
          r = o[0] !== void 0 ? _r(o[0], i) : J({
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

function br(n, t) {
  if (t.type === "device-pixel-content-box") return new vr(n, t.transform, t.options);
  throw new Error("Unsupported binding target")
}

function Us(n) {
  return n.ownerDocument.defaultView
}

function gr() {
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

function _r(n, t) {
  return J({
    width: Math.round(n.left * t + n.width * t) - Math.round(n.left * t),
    height: Math.round(n.top * t + n.height * t) - Math.round(n.top * t)
  })
}
var wr = function() {
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
  return i === null ? null : new wr(i, e, s)
}
/*!
 * @license
 * TradingView Lightweight Charts™ v4.2.1
 * Copyright (c) 2024 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
const yr = {
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
  Mr = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    openVisible: !0,
    thinBars: !0
  },
  Sr = {
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
  kr = {
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
  Cr = {
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
  jr = {
    color: "#26a69a",
    base: 0
  },
  Zi = {
    color: "#2196f3"
  },
  qi = {
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
var Fs, Re;

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

function Qi(n, t, e, s) {
  n.beginPath();
  const i = n.lineWidth % 2 ? .5 : 0;
  n.moveTo(e, t + i), n.lineTo(s, t + i), n.stroke()
}

function Pt(n, t) {
  if (!n) throw new Error("Assertion failed" + (t ? ": " + t : ""))
}

function nt(n) {
  if (n === void 0) throw new Error("Value is undefined");
  return n
}

function w(n) {
  if (n === null) throw new Error("Value is null");
  return n
}

function Kt(n) {
  return w(nt(n))
}(function(n) {
  n[n.Simple = 0] = "Simple", n[n.WithSteps = 1] = "WithSteps", n[n.Curved = 2] = "Curved"
})(Fs || (Fs = {})),
function(n) {
  n[n.Solid = 0] = "Solid", n[n.Dotted = 1] = "Dotted", n[n.Dashed = 2] = "Dashed", n[n.LargeDashed = 3] = "LargeDashed", n[n.SparseDotted = 4] = "SparseDotted"
}(Re || (Re = {}));
const Js = {
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

function ft(n) {
  return n < 0 ? 0 : n > 255 ? 255 : Math.round(n) || 0
}

function tn(n) {
  return n <= 0 || n > 1 ? Math.min(Math.max(n, 0), 1) : Math.round(1e4 * n) / 1e4
}
const zr = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
  $r = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
  Lr = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
  Tr = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;

function ce(n) {
  (n = n.toLowerCase()) in Js && (n = Js[n]);
  {
    const t = Tr.exec(n) || Lr.exec(n);
    if (t) return [ft(parseInt(t[1], 10)), ft(parseInt(t[2], 10)), ft(parseInt(t[3], 10)), tn(t.length < 5 ? 1 : parseFloat(t[4]))]
  } {
    const t = $r.exec(n);
    if (t) return [ft(parseInt(t[1], 16)), ft(parseInt(t[2], 16)), ft(parseInt(t[3], 16)), 1]
  } {
    const t = zr.exec(n);
    if (t) return [ft(17 * parseInt(t[1], 16)), ft(17 * parseInt(t[2], 16)), ft(17 * parseInt(t[3], 16)), 1]
  }
  throw new Error(`Cannot parse color: ${n}`)
}

function en(n) {
  return .199 * n[0] + .687 * n[1] + .114 * n[2]
}

function De(n) {
  const t = ce(n);
  return {
    t: `rgb(${t[0]}, ${t[1]}, ${t[2]})`,
    i: en(t) > 160 ? "black" : "white"
  }
}
class Z {
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

function gt(n, ...t) {
  for (const e of t)
    for (const s in e) e[s] !== void 0 && (typeof e[s] != "object" || n[s] === void 0 || Array.isArray(e[s]) ? n[s] = e[s] : gt(n[s], e[s]));
  return n
}

function Mt(n) {
  return typeof n == "number" && isFinite(n)
}

function ue(n) {
  return typeof n == "number" && n % 1 == 0
}

function be(n) {
  return typeof n == "string"
}

function Me(n) {
  return typeof n == "boolean"
}

function Ct(n) {
  const t = n;
  if (!t || typeof t != "object") return t;
  let e, s, i;
  for (s in e = Array.isArray(t) ? [] : {}, t) t.hasOwnProperty(s) && (i = t[s], e[s] = i && typeof i == "object" ? Ct(i) : i);
  return e
}

function Er(n) {
  return n !== null
}

function de(n) {
  return n === null ? void 0 : n
}
const $s = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";

function qt(n, t, e) {
  return t === void 0 && (t = $s), `${e=e!==void 0?`${e} `:""}${n}px ${t}`
}
class xr {
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
    return t.P === e && t.D === s || (t.P = e, t.D = s, t.R = qt(e, s), t.L = 2.5 / 12 * e, t.B = t.L, t.A = e / 12 * t.T, t.I = e / 12 * t.T, t.N = 0), t.V = this.$(), t.O = this.U(), this.k
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
class Ls {
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
class _t {
  X(t, e, s) {
    t.useBitmapCoordinateSpace(i => this.K(i, e, s))
  }
}
class Pr extends _t {
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
            m = h * s + r;
          t.moveTo(u, d), t.arc(u, d, m, 0, 2 * Math.PI)
        }
        t.fill()
      };
    o.et > 0 && (t.fillStyle = o.rt, l(o.ht + o.et)), t.fillStyle = o.lt, l(o.ht)
  }
}

function Vr() {
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
const Rr = {
  from: 0,
  to: 1
};
class Ir {
  constructor(t, e) {
    this.ut = new Ls, this.ct = [], this.dt = [], this.ft = !0, this.F = t, this.vt = e, this.ut.Z(this.ct)
  }
  bt(t) {
    const e = this.F.wt();
    e.length !== this.ct.length && (this.dt = e.map(Vr), this.ct = this.dt.map(s => {
      const i = new Pr;
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
      const c = w(o.Ct());
      h.lt = a.Tt, h.ht = a.ht, h.et = a.Pt, h.it[0]._t = a._t, h.it[0].st = o.Dt().Rt(a._t, c.Vt), h.rt = (l = a.Ot) !== null && l !== void 0 ? l : this.F.Bt(h.it[0].st / o.Dt().At()), h.it[0].ot = s, h.it[0].nt = i.It(s), h.tt = Rr
    })
  }
}
class Wr extends _t {
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
      const m = a.lineWidth % 2 ? .5 : 0;
      a.moveTo(c + m, u), a.lineTo(c + m, d), a.stroke()
    }(t, l, 0, e.height)), r && h >= 0 && (t.lineWidth = Math.floor(this.zt.Et.et * i), t.strokeStyle = this.zt.Et.V, t.fillStyle = this.zt.Et.V, At(t, this.zt.Et.Nt), Qi(t, h, 0, e.width))
  }
}
class Br {
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
    }, this.Wt = new Wr(this.Ft), this.jt = t
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
      s = e.$t().W().crosshair,
      i = this.Ft;
    if (s.mode === 2) return i.Et.yt = !1, void(i.Lt.yt = !1);
    i.Et.yt = t && this.jt.Ut(e), i.Lt.yt = t && this.jt.qt(), i.Et.et = s.horzLine.width, i.Et.Nt = s.horzLine.style, i.Et.V = s.horzLine.color, i.Lt.et = s.vertLine.width, i.Lt.Nt = s.vertLine.style, i.Lt.V = s.vertLine.color, i.nt = this.jt.Yt(), i.st = this.jt.Zt()
  }
}

function Ar(n, t, e, s, i, o) {
  n.fillRect(t + o, e, s - 2 * o, o), n.fillRect(t + o, e + i - o, s - 2 * o, o), n.fillRect(t, e, o, i), n.fillRect(t + s - o, e, o, i)
}

function Ne(n, t, e, s, i, o) {
  n.save(), n.globalCompositeOperation = "copy", n.fillStyle = o, n.fillRect(t, e, s, i), n.restore()
}

function Ks(n, t, e, s, i, o) {
  n.beginPath(), n.roundRect ? n.roundRect(t, e, s, i, o) : (n.lineTo(t + s - o[1], e), o[1] !== 0 && n.arcTo(t + s, e, t + s, e + o[1], o[1]), n.lineTo(t + s, e + i - o[2]), o[2] !== 0 && n.arcTo(t + s, e + i, t + s - o[2], e + i, o[2]), n.lineTo(t + o[3], e + i), o[3] !== 0 && n.arcTo(t, e + i, t, e + i - o[3], o[3]), n.lineTo(t, e + o[0]), o[0] !== 0 && n.arcTo(t, e, t + o[0], e, o[0]))
}

function Xs(n, t, e, s, i, o, r = 0, l = [0, 0, 0, 0], h = "") {
  if (n.save(), !r || !h || h === o) return Ks(n, t, e, s, i, l), n.fillStyle = o, n.fill(), void n.restore();
  const a = r / 2;
  var c;
  Ks(n, t + a, e + a, s - r, i - r, (c = -a, l.map(u => u === 0 ? u : u + c))), o !== "transparent" && (n.fillStyle = o, n.fill()), h !== "transparent" && (n.lineWidth = r, n.strokeStyle = h, n.closePath(), n.stroke()), n.restore()
}

function sn(n, t, e, s, i, o, r) {
  n.save(), n.globalCompositeOperation = "copy";
  const l = n.createLinearGradient(0, 0, 0, i);
  l.addColorStop(0, o), l.addColorStop(1, r), n.fillStyle = l, n.fillRect(t, e, s, i), n.restore()
}
class Hs {
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
        return c.Qt ? Xs(a, u.ti, u.ii, u.ni, u.si, r, u.ei, [u.ht, 0, 0, u.ht], r) : Xs(a, u.ri, u.ii, u.ni, u.si, r, u.ei, [0, u.ht, u.ht, 0], r), this.zt.hi && (a.fillStyle = o, a.fillRect(u.ri, u.li, u.ai - u.ri, u.oi)), this.zt._i && (a.fillStyle = e.O, a.fillRect(c.Qt ? u.ui - u.ei : 0, u.ii, u.ei, u.ci - u.ii)), c
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
    } = t, u = this.zt.hi || !this.zt.mi ? e.T : 0, d = this.zt.bi ? e.C : 0, m = e.L + this.Xt.wi, f = e.B + this.Xt.gi, p = e.A, b = e.I, y = this.zt.Kt, M = e.P, L = s.Mi(r, y), C = Math.ceil(s.xi(r, y)), V = M + m + f, S = e.C + p + b + C + u, T = Math.max(1, Math.floor(c));
    let x = Math.round(V * c);
    x % 2 != T % 2 && (x += 1);
    const P = d > 0 ? Math.max(1, Math.floor(d * a)) : 0,
      B = Math.round(S * a),
      Q = Math.round(u * a),
      ct = (o = this.Xt.Si) !== null && o !== void 0 ? o : this.Xt.ki,
      wt = Math.round(ct * c) - Math.floor(.5 * c),
      mt = Math.floor(wt + T / 2 - x / 2),
      z = mt + x,
      pt = i === "right",
      St = pt ? h.width - d : d,
      tt = pt ? l.width - P : P;
    let zt, $t, $;
    return pt ? (zt = tt - B, $t = tt - Q, $ = St - u - p - d) : (zt = tt + B, $t = tt + Q, $ = St + u + p), {
      Qt: pt,
      Jt: {
        ii: mt,
        li: wt,
        ci: z,
        ni: B,
        si: x,
        ht: 2 * a,
        ei: P,
        ti: zt,
        ri: tt,
        ai: $t,
        oi: T,
        ui: l.width
      },
      di: {
        ii: mt / c,
        ci: z / c,
        fi: $,
        pi: L
      }
    }
  }
}
class Oe {
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
    }, this.ft = !0, this.Pi = new(t || Hs)(this.Ci, this.yi), this.Ri = new(t || Hs)(this.Ti, this.yi)
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
class Dr extends Oe {
  constructor(t, e, s) {
    super(), this.jt = t, this.Li = e, this.Ei = s
  }
  zi(t, e, s) {
    if (t.yt = !1, this.jt.W().mode === 2) return;
    const i = this.jt.W().horzLine;
    if (!i.labelVisible) return;
    const o = this.Li.Ct();
    if (!this.jt.yt() || this.Li.Ni() || o === null) return;
    const r = De(i.labelBackgroundColor);
    s.t = r.t, t.V = r.i;
    const l = 2 / 12 * this.Li.P();
    s.wi = l, s.gi = l;
    const h = this.Ei(this.Li);
    s.ki = h.ki, t.Kt = this.Li.Fi(h._t, o), t.yt = !0
  }
}
const Nr = /[1-9]/g;
class nn {
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
    }) => (d.font = e.R, Math.round(e.Wi.xi(d, w(this.zt).Kt, Nr))));
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
      horizontalPixelRatio: m,
      verticalPixelRatio: f
    }) => {
      const p = w(this.zt);
      d.fillStyle = p.t;
      const b = Math.round(a * m),
        y = Math.round(0 * f),
        M = Math.round(c * m),
        L = Math.round(u * f),
        C = Math.round(2 * m);
      if (d.beginPath(), d.moveTo(b, y), d.lineTo(b, L - C), d.arcTo(b, L, b + C, L, C), d.lineTo(M - C, L), d.arcTo(M, L, M, L - C, C), d.lineTo(M, y), d.fill(), p.hi) {
        const V = Math.round(p.ki * m),
          S = y,
          T = Math.round((S + e.T) * f);
        d.fillStyle = p.V;
        const x = Math.max(1, Math.floor(m)),
          P = Math.floor(.5 * m);
        d.fillRect(V - P, S, x, T - S)
      }
    }), t.useMediaCoordinateSpace(({
      context: d
    }) => {
      const m = w(this.zt),
        f = 0 + e.C + e.T + e.L + e.P / 2;
      d.font = e.R, d.textAlign = "left", d.textBaseline = "middle", d.fillStyle = m.V;
      const p = e.Wi.Mi(d, "Apr0");
      d.translate(a + i, f + p), d.fillText(m.Kt, 0, 0)
    })
  }
}
class Or {
  constructor(t, e, s) {
    this.ft = !0, this.Wt = new nn, this.Ft = {
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
    t.Kt = s.qi(w(o)), t.yt = !0;
    const r = De(e.labelBackgroundColor);
    t.t = r.t, t.V = r.i, t.hi = s.W().ticksVisible
  }
}
class Ts {
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
var bs;
(function(n) {
  n[n.Normal = 0] = "Normal", n[n.Magnet = 1] = "Magnet", n[n.Hidden = 2] = "Hidden"
})(bs || (bs = {}));
class Ur extends Ts {
  constructor(t, e) {
    super(), this.tn = null, this.nn = NaN, this.sn = 0, this.en = !0, this.rn = new Map, this.hn = !1, this.ln = NaN, this.an = NaN, this._n = NaN, this.un = NaN, this.$i = t, this.cn = e, this.dn = new Ir(t, this), this.fn = ((i, o) => r => {
      const l = o(),
        h = i();
      if (r === w(this.tn).vn()) return {
        _t: h,
        ki: l
      };
      {
        const a = w(r.Ct());
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
    this.bn = new Or(this, t, s), this.wn = new Br(this)
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
    const t = this.$i.wt().map(s => s.In().An()).filter(Er),
      e = t.length === 0 ? null : Math.max(...t);
    this.sn = e !== null ? e : NaN
  }
  Dn(t, e, s) {
    let i = t.get(e);
    return i === void 0 && (i = new Dr(this, e, s), t.set(e, i)), i
  }
}

function Ue(n) {
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
const Ys = ".";

function jt(n, t) {
  if (!Mt(n)) return "n/a";
  if (!ue(t)) throw new TypeError("invalid length");
  if (t < 0 || t > 16) throw new TypeError("invalid length");
  return t === 0 ? n.toString() : ("0000000000000000" + n.toString()).slice(-t)
}
class Fe {
  constructor(t, e) {
    if (e || (e = 1), Mt(t) && ue(t) || (t = 100), t < 0) throw new TypeError("invalid base");
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
      r >= e && (r -= e, s += 1), i = Ys + jt(+r.toFixed(this.os) * this.rs, o)
    } else s = Math.round(s * e) / e, o > 0 && (i = Ys + jt(0, o));
    return s.toFixed(0) + i
  }
}
class on extends Fe {
  constructor(t = 100) {
    super(t)
  }
  format(t) {
    return `${super.format(t)}%`
  }
}
class Fr {
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

function rn(n, t, e, s, i, o, r) {
  if (t.length === 0 || s.from >= t.length || s.to <= 0) return;
  const {
    context: l,
    horizontalPixelRatio: h,
    verticalPixelRatio: a
  } = n, c = t[s.from];
  let u = o(n, c),
    d = c;
  if (s.to - s.from < 2) {
    const m = i / 2;
    l.beginPath();
    const f = {
        nt: c.nt - m,
        st: c.st
      },
      p = {
        nt: c.nt + m,
        st: c.st
      };
    l.moveTo(f.nt * h, f.st * a), l.lineTo(p.nt * h, p.st * a), r(n, u, f, p)
  } else {
    const m = (p, b) => {
      r(n, u, d, b), l.beginPath(), u = p, d = b
    };
    let f = d;
    l.beginPath(), l.moveTo(c.nt * h, c.st * a);
    for (let p = s.from + 1; p < s.to; ++p) {
      f = t[p];
      const b = o(n, f);
      switch (e) {
        case 0:
          l.lineTo(f.nt * h, f.st * a);
          break;
        case 1:
          l.lineTo(f.nt * h, t[p - 1].st * a), b !== u && (m(b, f), l.lineTo(f.nt * h, t[p - 1].st * a)), l.lineTo(f.nt * h, f.st * a);
          break;
        case 2: {
          const [y, M] = Jr(t, p - 1, p);
          l.bezierCurveTo(y.nt * h, y.st * a, M.nt * h, M.st * a, f.nt * h, f.st * a);
          break
        }
      }
      e !== 1 && b !== u && (m(b, f), l.moveTo(f.nt * h, f.st * a))
    }(d !== f || d === f && e === 1) && r(n, u, d, f)
  }
}
const Gs = 6;

function Xe(n, t) {
  return {
    nt: n.nt - t.nt,
    st: n.st - t.st
  }
}

function Zs(n, t) {
  return {
    nt: n.nt / t,
    st: n.st / t
  }
}

function Jr(n, t, e) {
  const s = Math.max(0, t - 1),
    i = Math.min(n.length - 1, e + 1);
  var o, r;
  return [(o = n[t], r = Zs(Xe(n[e], n[s]), Gs), {
    nt: o.nt + r.nt,
    st: o.st + r.st
  }), Xe(n[e], Zs(Xe(n[i], n[t]), Gs))]
}

function Kr(n, t, e, s, i) {
  const {
    context: o,
    horizontalPixelRatio: r,
    verticalPixelRatio: l
  } = t;
  o.lineTo(i.nt * r, n * l), o.lineTo(s.nt * r, n * l), o.closePath(), o.fillStyle = e, o.fill()
}
class ln extends _t {
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
    c.lineCap = "butt", c.lineJoin = "round", c.lineWidth = r, At(c, l), c.lineWidth = 1, rn(t, s, h, i, o, this.ps.bind(this), Kr.bind(null, a))
  }
}

function gs(n, t, e) {
  return Math.min(Math.max(n, t), e)
}

function Se(n, t, e) {
  return t - n <= e
}

function hn(n) {
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
        const u = gs(a * t.verticalPixelRatio / h, 0, 1);
        c.addColorStop(u, o), c.addColorStop(u, r)
      }
      c.addColorStop(1, l), this.ys = c, this.ws = e
    }
    return this.ys
  }
}
class Xr extends ln {
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

function Hr(n, t) {
  const e = n.context;
  e.strokeStyle = t, e.stroke()
}
class an extends _t {
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
    o !== void 0 && rn(t, e, o, s, i, c, Hr), h && function(u, d, m, f, p) {
      const {
        horizontalPixelRatio: b,
        verticalPixelRatio: y,
        context: M
      } = u;
      let L = null;
      const C = Math.max(1, Math.floor(b)) % 2 / 2,
        V = m * y + C;
      for (let S = f.to - 1; S >= f.from; --S) {
        const T = d[S];
        if (T) {
          const x = p(u, T);
          x !== L && (M.beginPath(), L !== null && M.fill(), M.fillStyle = x, L = x);
          const P = Math.round(T.nt * b) + C,
            B = T.st * y;
          M.moveTo(P, B), M.arc(P, B, V, 0, 2 * Math.PI)
        }
      }
      M.fill()
    }(t, e, h, s, c)
  }
}
class cn extends an {
  Ds(t, e) {
    return e.lt
  }
}

function un(n, t, e, s, i = 0, o = t.length) {
  let r = o - i;
  for (; 0 < r;) {
    const l = r >> 1,
      h = i + l;
    s(t[h], e) === n ? (i = h + 1, r -= l + 1) : r = l
  }
  return i
}
const ge = un.bind(null, !0),
  dn = un.bind(null, !1);

function Yr(n, t) {
  return n.ot < t
}

function Gr(n, t) {
  return t < n.ot
}

function fn(n, t, e) {
  const s = t.Vs(),
    i = t.ui(),
    o = ge(n, s, Yr),
    r = dn(n, i, Gr);
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
class xs {
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
    i !== null && (this.zs = fn(this.Is, s, this.Ns), this.Ks(t, e, i.Vt), this.Gs())
  }
}
class Je extends xs {
  constructor(t, e) {
    super(t, e, !0)
  }
  Ks(t, e, s) {
    e.Js(this.Is, de(this.zs)), t.Qs(this.Is, s, de(this.zs))
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
class Zr extends Je {
  constructor(t, e) {
    super(t, e), this.Ws = new Ls, this.ee = new Xr, this.re = new cn, this.Ws.Z([this.ee, this.re])
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
class qr extends _t {
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
        m = Math.min(l.ce, l.de),
        f = Math.max(l.ce, l.de),
        p = Math.round(m * s) - h,
        b = Math.round(f * s) + h,
        y = Math.max(b - p, this.ae);
      t.fillRect(c, p, u, y);
      const M = Math.ceil(1.5 * this.le);
      if (o) {
        if (this.zt.fe) {
          const S = a - M;
          let T = Math.max(p, Math.round(l.ve * s) - h),
            x = T + u - 1;
          x > p + y - 1 && (x = p + y - 1, T = x - u + 1), t.fillRect(S, T, c - S, x - T + 1)
        }
        const L = a + M;
        let C = Math.max(p, Math.round(l.pe * s) - h),
          V = C + u - 1;
        V > p + y - 1 && (V = p + y - 1, C = V - u + 1), t.fillRect(d + 1, C, L - d, V - C + 1)
      }
    }
  }
  oe(t) {
    const e = Math.floor(t);
    return Math.max(e, Math.floor(function(s, i) {
      return Math.floor(.3 * s * i)
    }(w(this.zt).he, t)))
  }
}
class mn extends xs {
  constructor(t, e) {
    super(t, e, !1)
  }
  Ks(t, e, s) {
    e.Js(this.Is, de(this.zs)), t.me(this.Is, s, de(this.zs))
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
class Qr extends mn {
  constructor() {
    super(...arguments), this.Ws = new qr
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
class tl extends ln {
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
class el extends an {
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
class sl extends Je {
  constructor(t, e) {
    super(t, e), this.Ws = new Ls, this.De = new tl, this.Ve = new el, this.Ws.Z([this.De, this.Ve])
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
class il extends _t {
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
      const m = Math.round(Math.min(d.ve, d.pe) * r),
        f = Math.round(Math.max(d.ve, d.pe) * r),
        p = Math.round(d.ce * r),
        b = Math.round(d.de * r);
      let y = Math.round(o * d.nt) - a;
      const M = y + h - 1;
      c !== null && (y = Math.max(c + 1, y), y = Math.min(y, M));
      const L = M - y + 1;
      i.fillRect(y, p, L, m - p), i.fillRect(y, f + 1, L, b - f), c = M
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
      const m = d + this.le - 1,
        f = Math.round(Math.min(u.ve, u.pe) * r),
        p = Math.round(Math.max(u.ve, u.pe) * r);
      if (a !== null && (d = Math.max(a + 1, d), d = Math.min(d, m)), this.zt.he * o > 2 * h) Ar(i, d, f, m - d + 1, p - f + 1, h);
      else {
        const b = m - d + 1;
        i.fillRect(d, f, b, p - f + 1)
      }
      a = m
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
        m = Math.round(c.nt * o) - Math.floor(.5 * this.le),
        f = m + this.le - 1;
      if (c.ue !== l) {
        const p = c.ue;
        i.fillStyle = p, l = p
      }
      this.zt._i && (m += h, u += h, f -= h, d -= h), u > d || i.fillRect(m, u, f - m + 1, d - u + 1)
    }
  }
}
class nl extends mn {
  constructor() {
    super(...arguments), this.Ws = new il
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
class ol {
  constructor(t, e) {
    this.Ne = t, this.Li = e
  }
  X(t, e, s) {
    this.Ne.draw(t, this.Li, e, s)
  }
}
class He extends xs {
  constructor(t, e, s) {
    super(t, e, !1), this.wn = s, this.Ws = new ol(this.wn.renderer(), i => {
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
    e.Js(this.Is, de(this.zs))
  }
  Gs() {
    this.wn.update({
      bars: this.Is.map(rl),
      barSpacing: this.Es.St().he(),
      visibleRange: this.zs
    }, this.Ls.W())
  }
}

function rl(n) {
  return {
    x: n.nt,
    time: n.ot,
    originalData: n.je,
    barColor: n.ue
  }
}
class ll extends _t {
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
class hl extends Je {
  constructor() {
    super(...arguments), this.Ws = new ll
  }
  ne(t, e, s) {
    return Object.assign(Object.assign({}, this.te(t, e)), s.Hs(t))
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
class al extends Je {
  constructor() {
    super(...arguments), this.Ws = new cn
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
const cl = /[2-9]/g;
class fe {
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
    const i = s || cl,
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
class ul {
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
class pn {
  constructor(t, e, s) {
    this._r = t, this.lr = new fe(50), this.ur = e, this.F = s, this.j = -1, this.Wt = new ul(this.lr)
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
class dl extends _t {
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
    o < 0 || o > e.height || (t.lineCap = "butt", t.strokeStyle = this.zt.V, t.lineWidth = Math.floor(this.zt.et * s), At(t, this.zt.Nt), Qi(t, o, 0, e.width))
  }
}
class Ps {
  constructor(t) {
    this.Mr = {
      st: 0,
      V: "rgba(0, 0, 0, 0)",
      et: 1,
      Nt: 0,
      yt: !1
    }, this.Sr = new dl, this.ft = !0, this.Ls = t, this.Es = t.$t(), this.Sr.J(this.Mr)
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.Ls.yt() ? (this.ft && (this.kr(), this.ft = !1), this.Sr) : null
  }
}
class fl extends Ps {
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
class ml extends _t {
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
const pl = [{
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

function qs(n, t, e, s) {
  return function(i, o) {
    if (i === "transparent") return i;
    const r = ce(i),
      l = r[3];
    return `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o*l})`
  }(n, e + (s - e) * t)
}

function Qs(n, t) {
  const e = n % 2600 / 2600;
  let s;
  for (const h of pl)
    if (e >= h.Dr && e <= h.Vr) {
      s = h;
      break
    } Pt(s !== void 0, "Last price animation internal logic error");
  const i = (e - s.Dr) / (s.Vr - s.Dr);
  return {
    Pr: qs(t, i, s.Ar, s.Ir),
    Rr: qs(t, i, s.zr, s.Lr),
    ht: (o = i, r = s.Or, l = s.Br, r + (l - r) * o)
  };
  var o, r, l
}
class vl {
  constructor(t) {
    this.Wt = new ml, this.ft = !0, this.Er = !0, this.Nr = performance.now(), this.Fr = this.Nr - 1, this.Wr = t
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
      h = Qs(this.Kr(), r);
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
      const e = Qs(this.Kr(), t.Cr);
      t.Pr = e.Pr, t.Rr = e.Rr, t.ht = e.ht
    }
  }
  Kr() {
    return this.Ur() ? performance.now() - this.Nr : 2599
  }
}

function oe(n, t) {
  return hn(Math.min(Math.max(n, 12), 30) * t)
}

function me(n, t) {
  switch (n) {
    case "arrowDown":
    case "arrowUp":
      return oe(t, 1);
    case "circle":
      return oe(t, .8);
    case "square":
      return oe(t, .7)
  }
}

function vn(n) {
  return function(t) {
    const e = Math.ceil(t);
    return e % 2 != 0 ? e - 1 : e
  }(oe(n, 1))
}

function ti(n) {
  return Math.max(oe(n, .1), 3)
}

function ei(n, t, e) {
  return t ? n : e ? Math.ceil(n / 2) : 0
}

function bn(n, t, e, s, i) {
  const o = me("square", e),
    r = (o - 1) / 2,
    l = n - r,
    h = t - r;
  return s >= l && s <= l + o && i >= h && i <= h + o
}

function si(n, t, e, s) {
  const i = (me("arrowUp", s) - 1) / 2 * e.Gr,
    o = (hn(s / 2) - 1) / 2 * e.Gr;
  t.beginPath(), n ? (t.moveTo(e.nt - i, e.st), t.lineTo(e.nt, e.st - i), t.lineTo(e.nt + i, e.st), t.lineTo(e.nt + o, e.st), t.lineTo(e.nt + o, e.st + i), t.lineTo(e.nt - o, e.st + i), t.lineTo(e.nt - o, e.st)) : (t.moveTo(e.nt - i, e.st), t.lineTo(e.nt, e.st + i), t.lineTo(e.nt + i, e.st), t.lineTo(e.nt + o, e.st), t.lineTo(e.nt + o, e.st - i), t.lineTo(e.nt - o, e.st - i), t.lineTo(e.nt - o, e.st)), t.fill()
}

function bl(n, t, e, s, i, o) {
  return bn(t, e, s, i, o)
}
class gl extends _t {
  constructor() {
    super(...arguments), this.zt = null, this.lr = new fe, this.j = -1, this.H = "", this.Jr = ""
  }
  J(t) {
    this.zt = t
  }
  ar(t, e) {
    this.j === t && this.H === e || (this.j = t, this.H = e, this.Jr = qt(t, e), this.lr.ir())
  }
  br(t, e) {
    if (this.zt === null || this.zt.tt === null) return null;
    for (let s = this.zt.tt.from; s < this.zt.tt.to; s++) {
      const i = this.zt.it[s];
      if (wl(i, t, e)) return {
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
        l.Kt !== void 0 && (l.Kt.Hi = this.lr.xi(t, l.Kt.th), l.Kt.At = this.j, l.Kt.nt = l.nt - l.Kt.Hi / 2), _l(l, t, e, s)
      }
    }
  }
}

function _l(n, t, e, s) {
  t.fillStyle = n.V, n.Kt !== void 0 && function(i, o, r, l, h, a) {
      i.save(), i.scale(h, a), i.fillText(o, r, l), i.restore()
    }(t, n.Kt.th, n.Kt.nt, n.Kt.st, e, s),
    function(i, o, r) {
      if (i.Xs !== 0) {
        switch (i.ih) {
          case "arrowDown":
            return void si(!1, o, r, i.Xs);
          case "arrowUp":
            return void si(!0, o, r, i.Xs);
          case "circle":
            return void
            function(l, h, a) {
              const c = (me("circle", a) - 1) / 2;
              l.beginPath(), l.arc(h.nt, h.st, c * h.Gr, 0, 2 * Math.PI, !1), l.fill()
            }(o, r, i.Xs);
          case "square":
            return void
            function(l, h, a) {
              const c = me("square", a),
                u = (c - 1) * h.Gr / 2,
                d = h.nt - u,
                m = h.st - u;
              l.fillRect(d, m, c * h.Gr, c * h.Gr)
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

function wl(n, t, e) {
  return !(n.Kt === void 0 || ! function(s, i, o, r, l, h) {
    const a = r / 2;
    return l >= s && l <= s + o && h >= i - a && h <= i + a
  }(n.Kt.nt, n.Kt.st, n.Kt.Hi, n.Kt.At, t, e)) || function(s, i, o) {
    if (s.Xs === 0) return !1;
    switch (s.ih) {
      case "arrowDown":
      case "arrowUp":
        return bl(0, s.nt, s.st, s.Xs, i, o);
      case "circle":
        return function(r, l, h, a, c) {
          const u = 2 + me("circle", h) / 2,
            d = r - a,
            m = l - c;
          return Math.sqrt(d * d + m * m) <= u
        }(s.nt, s.st, s.Xs, i, o);
      case "square":
        return bn(s.nt, s.st, s.Xs, i, o)
    }
  }(n, t, e)
}

function yl(n, t, e, s, i, o, r, l, h) {
  const a = Mt(e) ? e : e.xe,
    c = Mt(e) ? e : e.ge,
    u = Mt(e) ? e : e.Me,
    d = Mt(t.size) ? Math.max(t.size, 0) : 1,
    m = vn(l.he()) * d,
    f = m / 2;
  switch (n.Xs = m, t.position) {
    case "inBar":
      return n.st = r.Rt(a, h), void(n.Kt !== void 0 && (n.Kt.st = n.st + f + o + .6 * i));
    case "aboveBar":
      return n.st = r.Rt(c, h) - f - s.nh, n.Kt !== void 0 && (n.Kt.st = n.st - f - .6 * i, s.nh += 1.2 * i), void(s.nh += m + o);
    case "belowBar":
      return n.st = r.Rt(u, h) + f + s.sh, n.Kt !== void 0 && (n.Kt.st = n.st + f + o + .6 * i, s.sh += 1.2 * i), void(s.sh += m + o)
  }
  t.position
}
class Ml {
  constructor(t, e) {
    this.ft = !0, this.eh = !0, this.rh = !0, this.hh = null, this.ah = null, this.Wt = new gl, this.Wr = t, this.$i = e, this.zt = {
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
          e = ti(t),
          s = 1.5 * vn(t) + 2 * e,
          i = this.dh();
        this.hh = {
          above: ei(s, i.aboveBar, i.inBar),
          below: ei(s, i.belowBar, i.inBar)
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
    const h = ti(e.he()),
      a = {
        nh: h,
        sh: h
      };
    this.zt.tt = fn(this.zt.it, o, !0);
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
      const m = this.Wr.fh(u.time);
      m !== null && yl(d, u, m, a, i.fontSize, h, t, e, r.Vt)
    }
    this.ft = !1
  }
}
class Sl extends Ps {
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
class kl extends Oe {
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
      u = De(c);
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

function ii(n, t, e, s) {
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
    return t === null ? this : new rt(ii(Math.min, this.Th(), t.Th(), -1 / 0), ii(Math.max, this.Ph(), t.Ph(), 1 / 0))
  }
  Dh(t) {
    if (!Mt(t) || this.kh - this.Sh === 0) return;
    const e = .5 * (this.kh + this.Sh);
    let s = this.kh - e,
      i = this.Sh - e;
    s *= t, i *= t, this.kh = e + s, this.Sh = e + i
  }
  Vh(t) {
    Mt(t) && (this.kh += t, this.Sh += t)
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
class Ie {
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
    return t === null ? null : new Ie(rt.Bh(t.priceRange), t.margins)
  }
}
class Cl extends Ps {
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
class jl extends Oe {
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
    const a = De(i.axisLabelColor || i.color);
    s.t = a.t;
    const c = i.axisLabelTextColor || a.i;
    t.V = c, e.V = c, s.ki = h
  }
  Fh(t) {
    const e = this.Wr.Ct();
    return e === null ? "" : this.Wr.Dt().Fi(t, e.Vt)
  }
}
class zl {
  constructor(t, e) {
    this.Wr = t, this.cn = e, this.Wh = new Cl(t, this), this._r = new jl(t, this), this.jh = new pn(this._r, t, t.$t())
  }
  Hh(t) {
    gt(this.cn, t), this.bt(), this.Wr.$t().$h()
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
class $l extends Ts {
  constructor(t) {
    super(), this.$i = t
  }
  $t() {
    return this.$i
  }
}
const Ll = {
  Bar: (n, t, e, s) => {
    var i;
    const o = t.upColor,
      r = t.downColor,
      l = w(n(e, s)),
      h = Kt(l.Vt[0]) <= Kt(l.Vt[3]);
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
      m = w(n(e, s)),
      f = Kt(m.Vt[0]) <= Kt(m.Vt[3]);
    return {
      ue: (i = m.V) !== null && i !== void 0 ? i : f ? l : h,
      Ee: (o = m.Ot) !== null && o !== void 0 ? o : f ? a : c,
      Le: (r = m.Zh) !== null && r !== void 0 ? r : f ? u : d
    }
  },
  Custom: (n, t, e, s) => {
    var i;
    return {
      ue: (i = w(n(e, s)).V) !== null && i !== void 0 ? i : t.color
    }
  },
  Area: (n, t, e, s) => {
    var i, o, r, l;
    const h = w(n(e, s));
    return {
      ue: (i = h.lt) !== null && i !== void 0 ? i : t.lineColor,
      lt: (o = h.lt) !== null && o !== void 0 ? o : t.lineColor,
      Ts: (r = h.Ts) !== null && r !== void 0 ? r : t.topColor,
      Ps: (l = h.Ps) !== null && l !== void 0 ? l : t.bottomColor
    }
  },
  Baseline: (n, t, e, s) => {
    var i, o, r, l, h, a;
    const c = w(n(e, s));
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
    const r = w(n(e, s));
    return {
      ue: (i = r.V) !== null && i !== void 0 ? i : t.color,
      lt: (o = r.V) !== null && o !== void 0 ? o : t.color
    }
  },
  Histogram: (n, t, e, s) => {
    var i;
    return {
      ue: (i = w(n(e, s)).V) !== null && i !== void 0 ? i : t.color
    }
  }
};
class Tl {
  constructor(t) {
    this.Xh = (e, s) => s !== void 0 ? s.Vt : this.Wr.In().Kh(e), this.Wr = t, this.Gh = Ll[t.Jh()]
  }
  Hs(t, e) {
    return this.Gh(this.Xh, this.Wr.W(), t, e)
  }
}
var ni;
(function(n) {
  n[n.NearestLeft = -1] = "NearestLeft", n[n.None = 0] = "None", n[n.NearestRight = 1] = "NearestRight"
})(ni || (ni = {}));
const Lt = 30;
class El {
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
    for (const o of s) i = ke(i, this.ol(t, e, o));
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
    return ge(this.Qh, t, (e, s) => e.se < s)
  }
  fl(t) {
    return dn(this.Qh, t, (e, s) => e.se > s)
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
    const o = w(this.sl()),
      r = w(this.An()),
      l = Math.max(t, o),
      h = Math.min(e, r),
      a = Math.ceil(l / Lt) * Lt,
      c = Math.max(a, Math.floor(h / Lt) * Lt);
    {
      const d = this.dl(l),
        m = this.fl(Math.min(h, a, e));
      i = ke(i, this.vl(d, m, s))
    }
    let u = this.tl.get(s);
    u === void 0 && (u = new Map, this.tl.set(s, u));
    for (let d = Math.max(a + 1, l); d < c; d += Lt) {
      const m = Math.floor(d / Lt);
      let f = u.get(m);
      if (f === void 0) {
        const p = this.dl(m * Lt),
          b = this.fl((m + 1) * Lt - 1);
        f = this.vl(p, b, s), u.set(m, f)
      }
      i = ke(i, f)
    } {
      const d = this.dl(c),
        m = this.fl(h);
      i = ke(i, this.vl(d, m, s))
    }
    return i
  }
}

function ke(n, t) {
  return n === null ? t : t === null ? n : {
    pl: Math.min(n.pl, t.pl),
    ml: Math.max(n.ml, t.ml)
  }
}
class xl {
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
class Ye {
  constructor(t) {
    this.Qe = null, this.wn = t
  }
  gt() {
    var t;
    const e = this.wn.renderer();
    if (e === null) return null;
    if (((t = this.Qe) === null || t === void 0 ? void 0 : t.gl) === e) return this.Qe.Ml;
    const s = new xl(e);
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

function gn(n) {
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
class Pl {
  constructor(t, e) {
    this.Wt = new nn, this.Sl = t, this.kl = e
  }
  gt() {
    return this.Wt.J(Object.assign({
      Hi: this.kl.Hi()
    }, gn(this.Sl))), this.Wt
  }
}
class Vl extends Oe {
  constructor(t, e) {
    super(), this.Sl = t, this.Li = e
  }
  zi(t, e, s) {
    const i = gn(this.Sl);
    s.t = i.t, t.V = i.V;
    const o = 2 / 12 * this.Li.P();
    s.wi = o, s.gi = o, s.ki = i.ki, s.Si = i.Si, t.Kt = i.Kt, t.yt = i.yt, t.hi = i.hi
  }
}
class Rl {
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
    const r = o.map(l => new Ye(l));
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
      l = o.map(h => new Pl(h, r));
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
      l = o.map(h => new Vl(h, r));
    return this.Tl = {
      gl: o,
      Ml: l
    }, l
  }
  Ol() {
    var t, e, s, i;
    const o = (s = (e = (t = this.Dl).priceAxisPaneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && s !== void 0 ? s : [];
    if (((i = this.Pl) === null || i === void 0 ? void 0 : i.gl) === o) return this.Pl.Ml;
    const r = o.map(l => new Ye(l));
    return this.Pl = {
      gl: o,
      Ml: r
    }, r
  }
  Bl() {
    var t, e, s, i;
    const o = (s = (e = (t = this.Dl).timeAxisPaneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && s !== void 0 ? s : [];
    if (((i = this.Rl) === null || i === void 0 ? void 0 : i.gl) === o) return this.Rl.Ml;
    const r = o.map(l => new Ye(l));
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

function Ge(n, t, e, s) {
  n.forEach(i => {
    t(i).forEach(o => {
      o.xl() === e && s.push(o)
    })
  })
}

function Ze(n) {
  return n.Pn()
}

function Il(n) {
  return n.Ol()
}

function Wl(n) {
  return n.Bl()
}
class Vs extends $l {
  constructor(t, e, s, i, o) {
    super(t), this.zt = new El, this.Wh = new Sl(this), this.Il = [], this.zl = new fl(this), this.Ll = null, this.El = null, this.Nl = [], this.Fl = [], this.Wl = null, this.jl = [], this.cn = e, this.Hl = s;
    const r = new kl(this);
    this.rn = [r], this.jh = new pn(r, this, t), s !== "Area" && s !== "Line" && s !== "Baseline" || (this.Ll = new vl(this)), this.$l(), this.Ul(o)
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
    return this.El !== null || (this.El = new Tl(this)), this.El
  }
  W() {
    return this.cn
  }
  Hh(t) {
    const e = t.priceScaleId;
    e !== void 0 && e !== this.cn.priceScaleId && this.$t().Zl(this, e), gt(this.cn, t), t.priceFormat !== void 0 && (this.$l(), this.$t().Xl()), this.$t().Kl(this), this.$t().Gl(), this.wn.bt("options")
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
    const e = new zl(this, t);
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
    Ge(this.jl, Ze, "top", e);
    const s = this.Ll;
    return s !== null && s.yt() && (this.Wl === null && s.Ur() && (this.Wl = setTimeout(() => {
      this.Wl = null, this.$t().aa()
    }, 0)), s.$r(), e.unshift(s)), e
  }
  Pn() {
    const t = [];
    this.oa() || t.push(this.zl), t.push(this.wn, this.Wh, this.dn);
    const e = this.Il.map(s => s.Uh());
    return t.push(...e), Ge(this.jl, Ze, "normal", t), t
  }
  _a() {
    return this.ua(Ze, "bottom")
  }
  ca(t) {
    return this.ua(Il, t)
  }
  da(t) {
    return this.ua(Wl, t)
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
      return Ie.Bh(s)
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
    this.jl.push(new Rl(t, this))
  }
  ka(t) {
    this.jl = this.jl.filter(e => e.Vl() !== t)
  }
  ya() {
    if (this.wn instanceof He) return t => this.wn.Fe(t)
  }
  Ca() {
    if (this.wn instanceof He) return t => this.wn.We(t)
  }
  oa() {
    return !Ue(this.Dt().Ta())
  }
  va(t, e) {
    if (!ue(t) || !ue(e) || this.zt.Ni()) return null;
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
        const m = new rt(h.priceRange.minValue, h.priceRange.maxValue);
        o = o !== null ? o.ts(m) : m
      }
      var a, c, u, d;
      h != null && h.margins && (a = r, c = h.margins, r = {
        above: Math.max((u = a == null ? void 0 : a.above) !== null && u !== void 0 ? u : 0, c.above),
        below: Math.max((d = a == null ? void 0 : a.below) !== null && d !== void 0 ? d : 0, c.below)
      })
    }), new Ie(o, r)
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
        this.ba = new Fr(this.cn.priceFormat.precision);
        break;
      case "percent":
        this.ba = new on(this.cn.priceFormat.precision);
        break;
      default: {
        const t = Math.pow(10, this.cn.priceFormat.precision);
        this.ba = new Fe(t, this.cn.priceFormat.minMove * t)
      }
    }
    this.Yi !== null && this.Yi.Pa()
  }
  Jl() {
    const t = this.$t().St();
    if (!t.Ra() || this.zt.Ni()) return void(this.Fl = []);
    const e = w(this.zt.sl());
    this.Fl = this.Nl.map((s, i) => {
      const o = w(t.Da(s.time, !0)),
        r = o < e ? 1 : -1;
      return {
        time: w(this.zt.hl(o, r)).se,
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
    switch (this.dn = new Ml(this, this.$t()), this.Hl) {
      case "Bar":
        this.wn = new Qr(this, this.$t());
        break;
      case "Candlestick":
        this.wn = new nl(this, this.$t());
        break;
      case "Line":
        this.wn = new al(this, this.$t());
        break;
      case "Custom":
        this.wn = new He(this, this.$t(), nt(t));
        break;
      case "Area":
        this.wn = new Zr(this, this.$t());
        break;
      case "Baseline":
        this.wn = new sl(this, this.$t());
        break;
      case "Histogram":
        this.wn = new hl(this, this.$t());
        break;
      default:
        throw Error("Unknown chart style assigned: " + this.Hl)
    }
  }
  ua(t, e) {
    const s = [];
    return Ge(this.jl, t, e, s), s
  }
}
class Bl {
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
      h = s.Oa().filter(c => c instanceof Vs).reduce((c, u) => {
        if (s.dr(u) || !u.yt()) return c;
        const d = u.Dt(),
          m = u.In();
        if (d.Ni() || !m.Xr(e)) return c;
        const f = m.Kh(e);
        if (f === null) return c;
        const p = Kt(u.Ct());
        return c.concat([d.Rt(f.Vt[3], p.Vt)])
      }, []);
    if (h.length === 0) return i;
    h.sort((c, u) => Math.abs(c - l) - Math.abs(u - l));
    const a = h[0];
    return i = o.pn(a, r), i
  }
}
class Al extends _t {
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
        const r = w(this.zt);
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
class Dl {
  constructor(t) {
    this.Wt = new Al, this.ft = !0, this.tn = t
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
class Nl {
  constructor(t) {
    this.wn = new Dl(t)
  }
  Uh() {
    return this.wn
  }
}
const qe = {
  Ha: 4,
  $a: 1e-4
};

function Xt(n, t) {
  const e = 100 * (n - t) / t;
  return t < 0 ? -e : e
}

function Ol(n, t) {
  const e = Xt(n.Th(), t),
    s = Xt(n.Ph(), t);
  return new rt(e, s)
}

function re(n, t) {
  const e = 100 * (n - t) / t + 100;
  return t < 0 ? -e : e
}

function Ul(n, t) {
  const e = re(n.Th(), t),
    s = re(n.Ph(), t);
  return new rt(e, s)
}

function We(n, t) {
  const e = Math.abs(n);
  if (e < 1e-15) return 0;
  const s = Math.log10(e + t.$a) + t.Ha;
  return n < 0 ? -s : s
}

function le(n, t) {
  const e = Math.abs(n);
  if (e < 1e-15) return 0;
  const s = Math.pow(10, e - t.Ha) - t.$a;
  return n < 0 ? -s : s
}

function se(n, t) {
  if (n === null) return null;
  const e = We(n.Th(), t),
    s = We(n.Ph(), t);
  return new rt(e, s)
}

function Ce(n, t) {
  if (n === null) return null;
  const e = le(n.Th(), t),
    s = le(n.Ph(), t);
  return new rt(e, s)
}

function Qe(n) {
  if (n === null) return qe;
  const t = Math.abs(n.Ph() - n.Th());
  if (t >= 1 || t < 1e-15) return qe;
  const e = Math.ceil(Math.abs(Math.log10(t))),
    s = qe.Ha + e;
  return {
    Ha: s,
    $a: 1 / Math.pow(10, s)
  }
}
class ts {
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
      const u = Se(o, i, 1e-14) && o > i + 1e-14,
        d = Se(o, s * l, 1e-14),
        m = Se(o, 1, 1e-14);
      if (!(u && d && m)) break;
      o /= l, l = this.qa[++r % this.qa.length]
    }
    if (o <= i + 1e-14 && (o = i), o = Math.max(1, o), this.Ya.length > 0 && (h = o, a = 1, c = 1e-14, Math.abs(h - a) < c))
      for (r = 0, l = this.Ya[0]; Se(o, s * l, 1e-14) && o > i + 1e-14;) o /= l, l = this.Ya[++r % this.Ya.length];
    var h, a, c;
    return o
  }
}
class oi {
  constructor(t, e, s, i) {
    this.Xa = [], this.Li = t, this.Ua = e, this.Ka = s, this.Ga = i
  }
  Za(t, e) {
    if (t < e) throw new Error("high < low");
    const s = this.Li.At(),
      i = (t - e) * this.Ja() / s,
      o = new ts(this.Ua, [2, 2.5, 2]),
      r = new ts(this.Ua, [2, 2, 2.5]),
      l = new ts(this.Ua, [2.5, 2, 2]),
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
    const m = a >= c ? 1 : -1;
    let f = null,
      p = 0;
    for (let b = a - d; b > c; b -= u) {
      const y = this.Ga(b, e, !0);
      f !== null && Math.abs(y - f) < this.Ja() || y < l || y > h || (p < this.Xa.length ? (this.Xa[p].La = y, this.Xa[p].no = t.so(b)) : this.Xa.push({
        La: y,
        no: t.so(b)
      }), p++, f = y, t.eo() && (u = this.Za(b * m, c)))
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

function _n(n) {
  return n.slice().sort((t, e) => w(t.Xi()) - w(e.Xi()))
}
var ri;
(function(n) {
  n[n.Normal = 0] = "Normal", n[n.Logarithmic = 1] = "Logarithmic", n[n.Percentage = 2] = "Percentage", n[n.IndexedTo100 = 3] = "IndexedTo100"
})(ri || (ri = {}));
const li = new on,
  hi = new Fe(100, 1);
class Fl {
  constructor(t, e, s, i) {
    this.ro = 0, this.ho = null, this.Ah = null, this.lo = null, this.ao = {
      oo: !1,
      _o: null
    }, this.uo = 0, this.co = 0, this.do = new Z, this.fo = new Z, this.vo = [], this.po = null, this.mo = null, this.bo = null, this.wo = null, this.ba = hi, this.Mo = Qe(null), this.xo = t, this.cn = e, this.So = s, this.ko = i, this.yo = new oi(this, 100, this.Co.bind(this), this.To.bind(this))
  }
  Ta() {
    return this.xo
  }
  W() {
    return this.cn
  }
  Hh(t) {
    if (gt(this.cn, t), this.Pa(), t.mode !== void 0 && this.Po({
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
      const l = le(o.Th(), r),
        h = le(o.Ph(), r);
      return isFinite(l) && isFinite(h)
    }(this.Ah, this.Mo) ? (s = Ce(this.Ah, this.Mo), s !== null && this.Bo(s)) : this.cn.autoScale = !0), t.yr === 1 && t.yr !== e.yr && (s = se(this.Ah, this.Mo), s !== null && this.Bo(s));
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
    return this.gh() ? t = Xt(t, e) : this.Vo() && (t = re(t, e)), this.To(t, e)
  }
  Qs(t, e, s) {
    this.Fo();
    const i = this.No(),
      o = w(this.zh()),
      r = o.Th(),
      l = o.Ph(),
      h = this.Lo() - 1,
      a = this.Oo(),
      c = h / (l - r),
      u = s === void 0 ? 0 : s.from,
      d = s === void 0 ? t.length : s.to,
      m = this.jo();
    for (let f = u; f < d; f++) {
      const p = t[f],
        b = p._t;
      if (isNaN(b)) continue;
      let y = b;
      m !== null && (y = m(p._t, e));
      const M = i + c * (y - r),
        L = a ? M : this.ro - 1 - M;
      p.st = L
    }
  }
  me(t, e, s) {
    this.Fo();
    const i = this.No(),
      o = w(this.zh()),
      r = o.Th(),
      l = o.Ph(),
      h = this.Lo() - 1,
      a = this.Oo(),
      c = h / (l - r),
      u = s === void 0 ? 0 : s.from,
      d = s === void 0 ? t.length : s.to,
      m = this.jo();
    for (let f = u; f < d; f++) {
      const p = t[f];
      let b = p.we,
        y = p.ge,
        M = p.Me,
        L = p.xe;
      m !== null && (b = m(p.we, e), y = m(p.ge, e), M = m(p.Me, e), L = m(p.xe, e));
      let C = i + c * (b - r),
        V = a ? C : this.ro - 1 - C;
      p.ve = V, C = i + c * (y - r), V = a ? C : this.ro - 1 - C, p.ce = V, C = i + c * (M - r), V = a ? C : this.ro - 1 - C, p.de = V, C = i + c * (L - r), V = a ? C : this.ro - 1 - C, p.pe = V
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
    return t = _n(t), this.po = t, this.po
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
    this.gh() || this.Vo() || this.bo === null && this.lo === null && (this.Ni() || (this.bo = this.ro - t, this.lo = w(this.zh()).Ch()))
  }
  Go(t) {
    if (this.gh() || this.Vo() || this.bo === null) return;
    this.Po({
      Wn: !1
    }), (t = this.ro - t) < 0 && (t = 0);
    let e = (this.bo + .2 * (this.ro - 1)) / (t + .2 * (this.ro - 1));
    const s = w(this.lo).Ch();
    e = Math.max(e, .1), s.Dh(e), this.Bo(s)
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
    let s = t - this.wo;
    this.Oo() && (s *= -1);
    const i = s * e,
      o = w(this.lo).Ch();
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
        return this.n_(Xt(t, e));
      case 3:
        return this.ma().format(re(t, e));
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
    return t = Xt(t, e), this.n_(t, li)
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
    t !== null && (e = Math.round(1 / t.pa())), this.ba = hi, this.gh() ? (this.ba = li, e = 100) : this.Vo() ? (this.ba = new Fe(100, 1), e = 100) : t !== null && (this.ba = t.ma()), this.yo = new oi(this, e, this.Co.bind(this), this.To.bind(this)), this.yo.Qa()
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
    t = this.eo() && t ? We(t, this.Mo) : t;
    const s = w(this.zh()),
      i = this.No() + (this.Lo() - 1) * (t - s.Th()) / s.Rh();
    return this.Wo(i)
  }
  Co(t, e) {
    if (this.Fo(), this.Ni()) return 0;
    const s = this.Wo(t),
      i = w(this.zh()),
      o = i.Th() + i.Rh() * ((s - this.No()) / (this.Lo() - 1));
    return this.eo() ? le(o, this.Mo) : o
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
            u = se(u, this.Mo);
            break;
          case 2:
            u = Ol(u, a.Vt);
            break;
          case 3:
            u = Ul(u, a.Vt)
        }
        if (e = e === null ? u : e.ts(w(u)), c !== null) {
          const d = c.Lh();
          d !== null && (i = Math.max(i, d.above), o = Math.max(o, d.below))
        }
      }
    }
    if (i === this.uo && o === this.co || (this.uo = i, this.co = o, this.mo = null, this.Ro()), e !== null) {
      if (e.Th() === e.Ph()) {
        const h = this.s_(),
          a = 5 * (h === null || this.gh() || this.Vo() ? 1 : h.pa());
        this.eo() && (e = Ce(e, this.Mo)), e = new rt(e.Th() - a, e.Ph() + a), this.eo() && (e = se(e, this.Mo))
      }
      if (this.eo()) {
        const h = Ce(e, this.Mo),
          a = Qe(h);
        if (r = a, l = this.Mo, r.Ha !== l.Ha || r.$a !== l.$a) {
          const c = this.lo !== null ? Ce(this.lo, this.Mo) : null;
          this.Mo = a, e = se(h, a), c !== null && (this.lo = se(c, a))
        }
      }
      this.Bo(e)
    } else this.Ah === null && (this.Bo(new rt(-.5, .5)), this.Mo = Qe(null));
    var r, l;
    this.ao.oo = !0
  }
  jo() {
    return this.gh() ? Xt : this.Vo() ? re : this.eo() ? t => We(t, this.Mo) : null
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
class Jl {
  constructor(t, e) {
    this.vo = [], this.a_ = new Map, this.ro = 0, this.o_ = 0, this.__ = 1e3, this.po = null, this.u_ = new Z, this.kl = t, this.$i = e, this.c_ = new Nl(this);
    const s = e.W();
    this.d_ = this.f_("left", s.leftPriceScale), this.v_ = this.f_("right", s.rightPriceScale), this.d_.Io().l(this.p_.bind(this, this.d_), this), this.v_.Io().l(this.p_.bind(this, this.v_), this), this.m_(s)
  }
  m_(t) {
    if (t.leftPriceScale && this.d_.Hh(t.leftPriceScale), t.rightPriceScale && this.v_.Hh(t.rightPriceScale), t.localization && (this.d_.Pa(), this.v_.Pa()), t.overlayPriceScales) {
      const e = Array.from(this.a_.values());
      for (const s of e) {
        const i = w(s[0].Dt());
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
    Pt(e !== -1, "removeDataSource: invalid data source"), this.vo.splice(e, 1);
    const s = w(t.Dt()).Ta();
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
    return this.po === null && (this.po = _n(this.vo)), this.po
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
    if (i === null && (i = this.f_(e, this.$i.W().overlayPriceScales)), this.vo.push(t), !Ue(e)) {
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
      i = new Fl(t, s, this.$i.W().layout, this.$i.W().localization);
    return i.zo(this.At()), i
  }
}
class Kl {
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
class he {
  constructor(t, e) {
    Pt(t <= e, "right should be >= left"), this.Z_ = t, this.X_ = e
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

function ai(n, t) {
  return n === null || t === null ? n === t : n.yh(t)
}
class Xl {
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
      t <= s[0].index ? e.push(i) : s.splice(ge(s, t, o => o.index < t), 1 / 0)
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
          m = d.index;
        for (; r < o;) {
          const f = i[r],
            p = f.index;
          if (!(p < m)) {
            a = p;
            break
          }
          r++, e.push(f), c = p, a = 1 / 0
        }
        if (a - m >= t && m - c >= t) e.push(d), c = m;
        else if (this.J_) return i
      }
      for (; r < o; r++) e.push(i[r])
    }
    return e
  }
}
class Ht {
  constructor(t) {
    this.ru = t
  }
  hu() {
    return this.ru === null ? null : new he(Math.floor(this.ru.Vs()), Math.ceil(this.ru.ui()))
  }
  lu() {
    return this.ru
  }
  static au() {
    return new Ht(null)
  }
}

function Hl(n, t) {
  return n.weight > t.weight ? n : t
}
class Yl {
  constructor(t, e, s, i) {
    this.o_ = 0, this.ou = null, this._u = [], this.wo = null, this.bo = null, this.uu = new Xl, this.cu = new Map, this.du = Ht.au(), this.fu = !0, this.vu = new Z, this.pu = new Z, this.mu = new Z, this.bu = null, this.wu = null, this.gu = [], this.cn = e, this.ko = s, this.Mu = e.rightOffset, this.xu = e.barSpacing, this.$i = t, this.U_ = i, this.Su(), this.uu.Q_(e.uniformDistribution)
  }
  W() {
    return this.cn
  }
  ku(t) {
    gt(this.ko, t), this.yu(), this.Su()
  }
  Hh(t, e) {
    var s;
    gt(this.cn, t), this.cn.fixLeftEdge && this.Cu(), this.cn.fixRightEdge && this.Tu(), t.barSpacing !== void 0 && this.$i.Gn(t.barSpacing), t.rightOffset !== void 0 && this.$i.Jn(t.rightOffset), t.minBarSpacing !== void 0 && this.$i.Gn((s = t.barSpacing) !== null && s !== void 0 ? s : this.xu), this.yu(), this.Su(), this.mu.m()
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
    const s = ge(this._u, this.U_.key(t), (i, o) => this.U_.key(i.time) < o);
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
      i = w(this.Ou()),
      o = w(this.Bu());
    return {
      from: w(this.Ui(Math.max(i, e))),
      to: w(this.Ui(Math.min(o, s)))
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
    if (this.Ni() || !ue(t)) return 0;
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
      i = w(this.Zs()),
      o = Math.max(i.Vs(), i.Vs() - s),
      r = Math.max(i.ui(), i.ui() - s),
      l = this.uu.nu(t, e),
      h = this.Ou() + s,
      a = this.Bu() - s,
      c = this.Hu(),
      u = this.cn.fixLeftEdge || c,
      d = this.cn.fixRightEdge || c;
    let m = 0;
    for (const f of l) {
      if (!(o <= f.index && f.index <= r)) continue;
      let p;
      m < this.gu.length ? (p = this.gu[m], p.coord = this.It(f.index), p.label = this.$u(f), p.weight = f.weight) : (p = {
        needAlignCoordinate: !1,
        coord: this.It(f.index),
        label: this.$u(f),
        weight: f.weight
      }, this.gu.push(p)), this.xu > e / 2 && !c ? p.needAlignCoordinate = !1 : p.needAlignCoordinate = u && f.index <= h || d && f.index >= a, m++
    }
    return this.gu.length = m, this.wu = this.gu, this.gu
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
    const e = gs(this.o_ - t, 0, this.o_),
      s = gs(this.o_ - w(this.bo), 0, this.o_);
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
    t !== null && e !== null && this.ec(new he(t, e + this.cn.rightOffset))
  }
  hc(t) {
    const e = new he(t.from, t.to);
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
    if (this.fu = !1, this.Ni()) return void this.oc(Ht.au());
    const t = this.Lu(),
      e = this.o_ / this.xu,
      s = this.Mu + t,
      i = new he(s - e + 1, s);
    this.oc(new Ht(i))
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
    return e === void 0 && (e = new Kl(s => this.dc(s), this.U_), this.cu.set(t.weight, e)), e.q_(t)
  }
  dc(t) {
    return this.U_.formatTickmark(t, this.ko)
  }
  oc(t) {
    const e = this.du;
    this.du = t, ai(e.hu(), this.du.hu()) || this.vu.m(), ai(e.lu(), this.du.lu()) || this.pu.m(), this.ac()
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
class Gl {
  X(t, e, s) {
    t.useMediaCoordinateSpace(i => this.K(i, e, s))
  }
  wl(t, e, s) {
    t.useMediaCoordinateSpace(i => this.fc(i, e, s))
  }
  fc(t, e, s) {}
}
class Zl extends Gl {
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
class ql {
  constructor(t) {
    this.ft = !0, this.Ft = {
      yt: !1,
      V: "",
      mc: [],
      gc: "center",
      Mc: "center"
    }, this.Wt = new Zl(this.Ft), this.jt = t
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
      R: qt(t.fontSize, t.fontFamily, t.fontStyle),
      wc: 1.2 * t.fontSize,
      xc: 0,
      Yu: 0
    }])
  }
}
class Ql extends Ts {
  constructor(t, e) {
    super(), this.cn = e, this.wn = new ql(this)
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
var ci, ui, di, fi, mi;
(function(n) {
  n[n.OnTouchEnd = 0] = "OnTouchEnd", n[n.OnNextTap = 1] = "OnNextTap"
})(ci || (ci = {}));
class th {
  constructor(t, e, s) {
    this.kc = [], this.yc = [], this.o_ = 0, this.Cc = null, this.Tc = new Z, this.Pc = new Z, this.Rc = null, this.Dc = t, this.cn = e, this.U_ = s, this.Vc = new xr(this), this.kl = new Yl(this, e.timeScale, this.cn.localization, s), this.vt = new Ur(this, e.crosshair), this.Oc = new Bl(e.crosshair), this.Bc = new Ql(this, e.watermark), this.Ac(), this.kc[0].M_(2e3), this.Ic = this.zc(0), this.Lc = this.zc(1)
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
    gt(this.cn, t), this.kc.forEach(e => e.m_(t)), t.timeScale !== void 0 && this.kl.Hh(t.timeScale), t.localization !== void 0 && this.kl.ku(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Tc.m(), this.Ic = this.zc(0), this.Lc = this.zc(1), this.Xl()
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
    const e = new Jl(this.kl, this);
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
      r = i.Rt(t, w(o)),
      l = this.kl.Da(e, !0),
      h = this.kl.It(w(l));
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
        const m = t - r;
        this.kl.Jn(this.kl.ju() - m)
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
    Pt(s !== -1, "Series not found"), this.yc.splice(s, 1), w(e).Yo(t), t.S && t.S()
  }
  Zl(t, e) {
    const s = w(this.cr(t));
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
      const [h, a, c, u] = ce(o), [d, m, f, p] = ce(r), b = [ft(h + l * (d - h)), ft(a + l * (m - a)), ft(c + l * (f - c)), tn(u + l * (p - u))];
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
    const o = new Vs(this, t, e, s, i),
      r = t.priceScaleId !== void 0 ? t.priceScaleId : this.pd();
    return s.Uo(o, r), Ue(r) || o.Hh(t), o
  }
  zc(t) {
    const e = this.cn.layout;
    return e.background.type === "gradient" ? t === 0 ? e.background.topColor : e.background.bottomColor : e.background.color
  }
}

function _s(n) {
  return !Mt(n) && !be(n)
}

function wn(n) {
  return Mt(n)
}(function(n) {
  n[n.Disabled = 0] = "Disabled", n[n.Continuous = 1] = "Continuous", n[n.OnDataUpdate = 2] = "OnDataUpdate"
})(ui || (ui = {})),
function(n) {
  n[n.LastBar = 0] = "LastBar", n[n.LastVisible = 1] = "LastVisible"
}(di || (di = {})),
function(n) {
  n.Solid = "solid", n.VerticalGradient = "gradient"
}(fi || (fi = {})),
function(n) {
  n[n.Year = 0] = "Year", n[n.Month = 1] = "Month", n[n.DayOfMonth = 2] = "DayOfMonth", n[n.Time = 3] = "Time", n[n.TimeWithSeconds = 4] = "TimeWithSeconds"
}(mi || (mi = {}));
const pi = n => n.getUTCFullYear();

function eh(n, t, e) {
  return t.replace(/yyyy/g, (s => jt(pi(s), 4))(n)).replace(/yy/g, (s => jt(pi(s) % 100, 2))(n)).replace(/MMMM/g, ((s, i) => new Date(s.getUTCFullYear(), s.getUTCMonth(), 1).toLocaleString(i, {
    month: "long"
  }))(n, e)).replace(/MMM/g, ((s, i) => new Date(s.getUTCFullYear(), s.getUTCMonth(), 1).toLocaleString(i, {
    month: "short"
  }))(n, e)).replace(/MM/g, (s => jt((i => i.getUTCMonth() + 1)(s), 2))(n)).replace(/dd/g, (s => jt((i => i.getUTCDate())(s), 2))(n))
}
class yn {
  constructor(t = "yyyy-MM-dd", e = "default") {
    this.wd = t, this.gd = e
  }
  q_(t) {
    return eh(t, this.wd, this.gd)
  }
}
class sh {
  constructor(t) {
    this.Md = t || "%h:%m:%s"
  }
  q_(t) {
    return this.Md.replace("%h", jt(t.getUTCHours(), 2)).replace("%m", jt(t.getUTCMinutes(), 2)).replace("%s", jt(t.getUTCSeconds(), 2))
  }
}
const ih = {
  xd: "yyyy-MM-dd",
  Sd: "%h:%m:%s",
  kd: " ",
  yd: "default"
};
class nh {
  constructor(t = {}) {
    const e = Object.assign(Object.assign({}, ih), t);
    this.Cd = new yn(e.xd, e.yd), this.Td = new sh(e.Sd), this.Pd = e.kd
  }
  q_(t) {
    return `${this.Cd.q_(t)}${this.Pd}${this.Td.q_(t)}`
  }
}

function je(n) {
  return 60 * n * 60 * 1e3
}

function es(n) {
  return 60 * n * 1e3
}
const ze = [{
  Rd: (vi = 1, 1e3 * vi),
  Dd: 10
}, {
  Rd: es(1),
  Dd: 20
}, {
  Rd: es(5),
  Dd: 21
}, {
  Rd: es(30),
  Dd: 22
}, {
  Rd: je(1),
  Dd: 30
}, {
  Rd: je(3),
  Dd: 31
}, {
  Rd: je(6),
  Dd: 32
}, {
  Rd: je(12),
  Dd: 33
}];
var vi;

function bi(n, t) {
  if (n.getUTCFullYear() !== t.getUTCFullYear()) return 70;
  if (n.getUTCMonth() !== t.getUTCMonth()) return 60;
  if (n.getUTCDate() !== t.getUTCDate()) return 50;
  for (let e = ze.length - 1; e >= 0; --e)
    if (Math.floor(t.getTime() / ze[e].Rd) !== Math.floor(n.getTime() / ze[e].Rd)) return ze[e].Dd;
  return 0
}

function ss(n) {
  let t = n;
  if (be(n) && (t = Rs(n)), !_s(t)) throw new Error("time must be of type BusinessDay");
  const e = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
  return {
    Vd: Math.round(e.getTime() / 1e3),
    Od: t
  }
}

function gi(n) {
  if (!wn(n)) throw new Error("time must be of type isUTCTimestamp");
  return {
    Vd: n
  }
}

function Rs(n) {
  const t = new Date(n);
  if (isNaN(t.getTime())) throw new Error(`Invalid date string=${n}, expected format=yyyy-mm-dd`);
  return {
    day: t.getUTCDate(),
    month: t.getUTCMonth() + 1,
    year: t.getUTCFullYear()
  }
}

function _i(n) {
  be(n.time) && (n.time = Rs(n.time))
}
class wi {
  options() {
    return this.cn
  }
  setOptions(t) {
    this.cn = t, this.updateFormatter(t.localization)
  }
  preprocessData(t) {
    Array.isArray(t) ? function(e) {
      e.forEach(_i)
    }(t) : _i(t)
  }
  createConverterToInternalObj(t) {
    return w(function(e) {
      return e.length === 0 ? null : _s(e[0].time) || be(e[0].time) ? ss : gi
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
    return wn(e = t) ? gi(e) : _s(e) ? ss(e) : ss(Rs(e));
    var e
  }
  updateFormatter(t) {
    if (!this.cn) return;
    const e = t.dateFormat;
    this.cn.timeScale.timeVisible ? this.Bd = new nh({
      xd: e,
      Sd: this.cn.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m",
      kd: "   ",
      yd: t.locale
    }) : this.Bd = new yn(e, t.locale)
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
    let e = t.reduce(Hl, t[0]).weight;
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
        r !== null && (a.timeWeight = bi(c, r)), l += a.time.Vd - (o || a.time.Vd), o = a.time.Vd, r = c
      }
      if (i === 0 && s.length > 1) {
        const h = Math.ceil(l / (s.length - 1)),
          a = new Date(1e3 * (s[0].time.Vd - h));
        s[0].timeWeight = bi(new Date(1e3 * s[0].time.Vd), a)
      }
    })(t, e)
  }
  static Ad(t) {
    return gt({
      localization: {
        dateFormat: "dd MMM 'yy"
      }
    }, t ?? {})
  }
}
const Qt = typeof window < "u";

function yi() {
  return !!Qt && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
}

function is() {
  return !!Qt && /iPhone|iPad|iPod/.test(window.navigator.platform)
}

function ws(n) {
  return n + n % 2
}

function ns(n, t) {
  return n.Id - t.Id
}

function os(n, t, e) {
  const s = (n.Id - t.Id) / (n.ot - t.ot);
  return Math.sign(s) * Math.min(Math.abs(s), e)
}
class oh {
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
    const i = os(this.zd, this.Ld, this.$d),
      o = ns(this.zd, this.Ld),
      r = [i],
      l = [o];
    if (s += o, this.Ed !== null) {
      const a = os(this.Ld, this.Ed, this.$d);
      if (Math.sign(a) === Math.sign(i)) {
        const c = ns(this.Ld, this.Ed);
        if (r.push(a), l.push(c), s += c, this.Nd !== null) {
          const u = os(this.Ed, this.Nd, this.$d);
          if (Math.sign(u) === Math.sign(i)) {
            const d = ns(this.Ed, this.Nd);
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
    const e = w(this.Fd),
      s = t - e.ot;
    return e.Id + this.jd * (Math.pow(this.Ud, s) - 1) / Math.log(this.Ud)
  }
  Ju(t) {
    return this.Fd === null || this.Yd(t) === this.Wd
  }
  Yd(t) {
    const e = t - w(this.Fd).ot;
    return Math.min(e, this.Wd)
  }
}
class rh {
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
    return en(ce(this.Jd.W().layout.textColor)) > 160 ? "dark" : "light"
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
  const e = w(n.ownerDocument).createElement("canvas");
  n.appendChild(e);
  const s = br(e, {
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

function ys(n, t, e, s) {
  n.wl && n.wl(t, e, s)
}

function xe(n, t, e, s) {
  n.X(t, e, s)
}

function Ms(n, t, e, s) {
  const i = n(e, s);
  for (const o of i) {
    const r = o.gt();
    r !== null && t(r)
  }
}

function lh(n) {
  Qt && window.chrome !== void 0 && n.addEventListener("mousedown", t => {
    if (t.button === 1) return t.preventDefault(), !1
  })
}
class Is {
  constructor(t, e, s) {
    this.rf = 0, this.hf = null, this.lf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }, this.af = 0, this._f = null, this.uf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }, this.cf = null, this.df = !1, this.ff = null, this.vf = null, this.pf = !1, this.mf = !1, this.bf = !1, this.wf = null, this.gf = null, this.Mf = null, this.xf = null, this.Sf = null, this.kf = null, this.yf = null, this.Cf = 0, this.Tf = !1, this.Pf = !1, this.Rf = !1, this.Df = 0, this.Vf = null, this.Of = !is(), this.Bf = i => {
      this.Af(i)
    }, this.If = i => {
      if (this.zf(i)) {
        const o = this.Lf(i);
        if (++this.af, this._f && this.af > 1) {
          const {
            Ef: r
          } = this.Nf(yt(i), this.uf);
          r < 30 && !this.bf && this.Ff(o, this.jf.Wf), this.Hf()
        }
      } else {
        const o = this.Lf(i);
        if (++this.rf, this.hf && this.rf > 1) {
          const {
            Ef: r
          } = this.Nf(yt(i), this.lf);
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
    const e = rs(t.changedTouches, w(this.Vf));
    if (e === null || (this.Df = $e(t), this.yf !== null) || this.Pf) return;
    this.Tf = !0;
    const s = this.Nf(yt(e), w(this.vf)),
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
        this.Ff(l, this.jf.rv), Ft(t)
      }
    }
  }
  hv(t) {
    if (t.button !== 0) return;
    const e = this.Nf(yt(t), w(this.ff)),
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
    let e = rs(t.changedTouches, w(this.Vf));
    if (e === null && t.touches.length === 0 && (e = t.changedTouches[0]), e === null) return;
    this.Vf = null, this.Df = $e(t), this.Xf(), this.vf = null, this.kf && (this.kf(), this.kf = null);
    const s = this.Lf(t, e);
    if (this.Ff(s, this.jf.ov), ++this.af, this._f && this.af > 1) {
      const {
        Ef: i
      } = this.Nf(yt(e), this.uf);
      i < 30 && !this.bf && this.Ff(s, this.jf.Wf), this.Hf()
    } else this.bf || (this.Ff(s, this.jf._v), this.jf._v && Ft(t));
    this.af === 0 && Ft(t), t.touches.length === 0 && this.df && (this.df = !1, Ft(t))
  }
  Af(t) {
    if (t.button !== 0) return;
    const e = this.Lf(t);
    if (this.ff = null, this.Rf = !1, this.Sf && (this.Sf(), this.Sf = null), yi() && this.Yf.ownerDocument.documentElement.removeEventListener("mouseleave", this.Bf), !this.zf(t))
      if (this.$f(e, this.jf.uv), ++this.rf, this.hf && this.rf > 1) {
        const {
          Ef: s
        } = this.Nf(yt(t), this.lf);
        s < 5 && !this.mf && this.$f(e, this.jf.Uf), this.qf()
      } else this.mf || this.$f(e, this.jf.cv)
  }
  Xf() {
    this.cf !== null && (clearTimeout(this.cf), this.cf = null)
  }
  dv(t) {
    if (this.Vf !== null) return;
    const e = t.changedTouches[0];
    this.Vf = e.identifier, this.Df = $e(t);
    const s = this.Yf.ownerDocument.documentElement;
    this.bf = !1, this.pf = !1, this.Pf = !1, this.vf = yt(e), this.kf && (this.kf(), this.kf = null);
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
    this.Ff(i, this.jf.vv), this._f || (this.af = 0, this._f = setTimeout(this.Hf.bind(this), 500), this.uf = yt(e))
  }
  pv(t) {
    if (t.button !== 0) return;
    const e = this.Yf.ownerDocument.documentElement;
    yi() && e.addEventListener("mouseleave", this.Bf), this.mf = !1, this.ff = yt(t), this.Sf && (this.Sf(), this.Sf = null);
    {
      const i = this.hv.bind(this),
        o = this.Af.bind(this);
      this.Sf = () => {
        e.removeEventListener("mousemove", i), e.removeEventListener("mouseup", o)
      }, e.addEventListener("mousemove", i), e.addEventListener("mouseup", o)
    }
    if (this.Rf = !0, this.zf(t)) return;
    const s = this.Lf(t);
    this.$f(s, this.jf.mv), this.hf || (this.rf = 0, this.hf = setTimeout(this.qf.bind(this), 500), this.lf = yt(t))
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
    is() && (this.Mf = () => {
      this.Yf.removeEventListener("dblclick", this.If)
    }, this.Yf.addEventListener("dblclick", this.If)), this.Yf.addEventListener("mouseleave", this.wv.bind(this)), this.Yf.addEventListener("touchstart", this.dv.bind(this), {
      passive: !0
    }), lh(this.Yf), this.Yf.addEventListener("mousedown", this.pv.bind(this)), this.gv(), this.Yf.addEventListener("touchmove", () => {}, {
      passive: !1
    })
  }
  gv() {
    this.jf.Mv === void 0 && this.jf.xv === void 0 && this.jf.Sv === void 0 || (this.Yf.addEventListener("touchstart", t => this.kv(t.touches), {
      passive: !0
    }), this.Yf.addEventListener("touchmove", t => {
      if (t.touches.length === 2 && this.yf !== null && this.jf.xv !== void 0) {
        const e = Mi(t.touches[0], t.touches[1]) / this.Cf;
        this.jf.xv(this.yf, e), Ft(t)
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
    }, this.Cf = Mi(t[0], t[1]), this.jf.Mv !== void 0 && this.jf.Mv(), this.Xf()
  }
  yv() {
    this.yf !== null && (this.yf = null, this.jf.Sv !== void 0 && this.jf.Sv())
  }
  wv(t) {
    if (this.xf && this.xf(), this.zf(t) || !this.Of) return;
    const e = this.Lf(t);
    this.$f(e, this.jf.Tv), this.Of = !is()
  }
  fv(t) {
    const e = rs(t.touches, w(this.Vf));
    if (e === null) return;
    const s = this.Lf(t, e);
    this.Ff(s, this.jf.Pv), this.bf = !0, this.df = !0
  }
  zf(t) {
    return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents !== void 0 ? t.sourceCapabilities.firesTouchEvents : $e(t) < this.Df + 500
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
        t.type !== "touchstart" && Ft(t)
      }
    }
  }
}

function Mi(n, t) {
  const e = n.clientX - t.clientX,
    s = n.clientY - t.clientY;
  return Math.sqrt(e * e + s * s)
}

function Ft(n) {
  n.cancelable && n.preventDefault()
}

function yt(n) {
  return {
    nt: n.pageX,
    st: n.pageY
  }
}

function $e(n) {
  return n.timeStamp || performance.now()
}

function rs(n, t) {
  for (let e = 0; e < n.length; ++e)
    if (n[e].identifier === t) return n[e];
  return null
}

function Le(n) {
  return {
    jc: n.jc,
    Av: {
      wr: n.Iv.externalId
    },
    zv: n.Iv.cursorStyle
  }
}

function hh(n, t, e) {
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

function ls(n, t) {
  return e => {
    var s, i, o, r;
    return ((i = (s = e.Dt()) === null || s === void 0 ? void 0 : s.Ta()) !== null && i !== void 0 ? i : "") !== t ? [] : (r = (o = e.ca) === null || o === void 0 ? void 0 : o.call(e, n)) !== null && r !== void 0 ? r : []
  }
}

function Si(n, t, e, s) {
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
      m = c.Vi();
    if (t === 1 ? d > m - u : d < m + u) {
      const f = m - u * t;
      a.Oi(f);
      const p = f - t * u / 2;
      if ((t === 1 ? p < 0 : p > e) && l > 0) {
        const b = t === 1 ? -1 - p : p - e,
          y = Math.min(b, l);
        for (let M = i; M < n.length; M++) n[M].Oi(n[M].Vi() + t * y);
        l -= y
      }
    } else i = h, l = t === 1 ? m - u - d : d - (m + u)
  }
}
class ki {
  constructor(t, e, s, i) {
    this.Li = null, this.Lv = null, this.Ev = !1, this.Nv = new fe(200), this.Jr = null, this.Fv = 0, this.Wv = !1, this.jv = () => {
      this.Wv || this.tn.Hv().$t().$h()
    }, this.$v = () => {
      this.Wv || this.tn.Hv().$t().$h()
    }, this.tn = t, this.cn = e, this.So = e.layout, this.Vc = s, this.Uv = i === "left", this.qv = ls("normal", i), this.Yv = ls("top", i), this.Zv = ls("bottom", i), this.Xv = document.createElement("div"), this.Xv.style.height = "100%", this.Xv.style.overflow = "hidden", this.Xv.style.width = "25px", this.Xv.style.left = "0", this.Xv.style.position = "relative", this.Kv = Dt(this.Xv, J({
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
    this.rp = new Is(this.Gv.canvasElement, l, {
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
      s = w(this.Kv.canvasElement.getContext("2d"));
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
    return ws(Math.ceil(e.C + e.T + e.A + e.I + 5 + l))
  }
  up(t) {
    this.Lv !== null && Wt(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`)
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
    r === l ? Ne(t, 0, 0, s, i, r) : sn(t, 0, 0, s, i, r, l)
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
    Si(i, 1, this.Lv.height, e), Si(o, -1, this.Lv.height, e)
  }
  wp(t) {
    if (this.Lv === null) return;
    const e = this._p(),
      s = this.lp(),
      i = this.Uv ? "right" : "left";
    e.forEach(o => {
      o.Ai() && o.gt(w(this.Li)).X(t, s, this.Nv, i)
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
        a.gt(w(this.Li)).X(t, r, this.Nv, l)
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
    return qt(this.So.fontSize, this.So.fontFamily)
  }
}

function ah(n, t) {
  var e, s;
  return (s = (e = n._a) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && s !== void 0 ? s : []
}

function Te(n, t) {
  var e, s;
  return (s = (e = n.Pn) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && s !== void 0 ? s : []
}

function ch(n, t) {
  var e, s;
  return (s = (e = n.Ji) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && s !== void 0 ? s : []
}

function uh(n, t) {
  var e, s;
  return (s = (e = n.la) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && s !== void 0 ? s : []
}
class Ws {
  constructor(t, e) {
    this.Lv = J({
      width: 0,
      height: 0
    }), this.yp = null, this.Cp = null, this.Tp = null, this.Pp = null, this.Rp = !1, this.Dp = new Z, this.Vp = new Z, this.Op = 0, this.Bp = !1, this.Ap = null, this.Ip = !1, this.zp = null, this.Lp = null, this.Wv = !1, this.jv = () => {
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
    o.style.position = "absolute", o.style.zIndex = "2", o.style.left = "0", o.style.top = "0", this.Hp = document.createElement("tr"), this.Hp.appendChild(this.Wp), this.Hp.appendChild(this.Fp), this.Hp.appendChild(this.jp), this.$p(), this.rp = new Is(this.Gv.canvasElement, this, {
      sv: () => this.Ap === null && !this.Jd.W().handleScroll.vertTouchDrag,
      ev: () => this.Ap === null && !this.Jd.W().handleScroll.horzTouchDrag
    })
  }
  S() {
    this.yp !== null && this.yp.S(), this.Cp !== null && this.Cp.S(), this.Tp = null, this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Nt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Nt(this.Kv.canvasElement), this.Kv.dispose(), this.Ep !== null && this.Ep.F_().p(this), this.rp.S()
  }
  dp() {
    return w(this.Ep)
  }
  Up(t) {
    var e, s;
    this.Ep !== null && this.Ep.F_().p(this), this.Ep = t, this.Ep !== null && this.Ep.F_().l(Ws.prototype.Np.bind(this), this, !0), this.$p(), this.Jd.qp().indexOf(this) === this.Jd.qp().length - 1 ? (this.Tp = (e = this.Tp) !== null && e !== void 0 ? e : new rh(this.Fp, this.Jd), this.Tp.bt()) : ((s = this.Tp) === null || s === void 0 || s.tf(), this.Tp = null)
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
      const i = w(this.zp),
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
          var d, m;
          let f, p;
          for (const M of a) {
            const L = (m = (d = M.fa) === null || d === void 0 ? void 0 : d.call(M, c, u)) !== null && m !== void 0 ? m : [];
            for (const C of L) b = C.zOrder, (!(y = f == null ? void 0 : f.zOrder) || b === "top" && y !== "top" || b === "normal" && y === "bottom") && (f = C, p = M)
          }
          var b, y;
          return f && p ? {
            Iv: f,
            jc: p
          } : null
        }(l, o, r);
      if ((h == null ? void 0 : h.Iv.zOrder) === "top") return Le(h);
      for (const a of l) {
        if (h && h.jc === a && h.Iv.zOrder !== "bottom" && !h.Iv.isBackground) return Le(h);
        const c = hh(a.Pn(i), o, r);
        if (c !== null) return {
          jc: a,
          Ov: c.Ov,
          Av: c.Av
        };
        if (h && h.jc === a && h.Iv.zOrder !== "bottom" && h.Iv.isBackground) return Le(h)
      }
      return h != null && h.Iv ? Le(h) : null
    }(s, t, e)
  }
  om(t, e) {
    w(e === "left" ? this.yp : this.Cp).up(J({
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
    const t = w(this.Ep);
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
      }), this.Ep && (this.dm(s, ah), this.fm(s), this.vm(s), this.dm(s, Te), this.dm(s, ch)))
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Bt(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: s,
      bitmapSize: i
    }) => {
      s.clearRect(0, 0, i.width, i.height)
    }), this.pm(e), this.dm(e, uh))
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
    r === l ? Ne(t, 0, 0, s, i, l) : sn(t, 0, 0, s, i, r, l)
  }
  fm(t) {
    const e = w(this.Ep).W_().Uh().gt();
    e !== null && e.X(t, !1)
  }
  vm(t) {
    const e = this.$i().qc();
    this.gm(t, Te, ys, e), this.gm(t, Te, xe, e)
  }
  pm(t) {
    this.gm(t, Te, xe, this.$i().Yc())
  }
  dm(t, e) {
    const s = w(this.Ep).$o();
    for (const i of s) this.gm(t, e, ys, i);
    for (const i of s) this.gm(t, e, xe, i)
  }
  gm(t, e, s, i) {
    const o = w(this.Ep),
      r = o.$t().Fc(),
      l = r !== null && r.jc === i,
      h = r !== null && l && r.Av !== void 0 ? r.Av.gr : void 0;
    Ms(e, a => s(a, t, l, h), i, o)
  }
  Yp() {
    if (this.Ep === null) return;
    const t = this.Jd,
      e = this.Ep.P_().W().visible,
      s = this.Ep.R_().W().visible;
    e || this.yp === null || (this.Wp.removeChild(this.yp.hp()), this.yp.S(), this.yp = null), s || this.Cp === null || (this.jp.removeChild(this.Cp.hp()), this.Cp.S(), this.Cp = null);
    const i = t.$t()._d();
    e && this.yp === null && (this.yp = new ki(this, t.W(), i, "left"), this.Wp.appendChild(this.yp.hp())), s && this.Cp === null && (this.Cp = new ki(this, t.W(), i, "right"), this.jp.appendChild(this.Cp.hp()))
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
    this.$i().hd(this.xm(t), this.Sm(e), s, w(this.Ep))
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
        this.Lp = new oh(.2 / a, 7 / a, .997, 15 / a), this.Lp.qd(s.ju(), this.Pp.Vd)
      } else this.Lp = null;
      l.Ni() || e.B_(this.Ep, l, t.localY), e.td(t.localX), this.Rp = !0
    }
    this.Rp && (l.Ni() || e.A_(this.Ep, l, t.localY), e.nd(t.localX), this.Lp !== null && this.Lp.qd(s.ju(), h))
  }
}
class Ci {
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
    Ne(t, 0, 0, e.width, e.height, this.Tm())
  }
}

function Bs(n) {
  return t => {
    var e, s;
    return (s = (e = t.da) === null || e === void 0 ? void 0 : e.call(t, n)) !== null && s !== void 0 ? s : []
  }
}
const dh = Bs("normal"),
  fh = Bs("top"),
  mh = Bs("bottom");
class ph {
  constructor(t, e) {
    this.Pm = null, this.Rm = null, this.k = null, this.Dm = !1, this.Lv = J({
      width: 0,
      height: 0
    }), this.Vm = new Z, this.Nv = new fe(5), this.Wv = !1, this.jv = () => {
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
    i.style.position = "absolute", i.style.zIndex = "2", i.style.left = "0", i.style.top = "0", this.Zd.appendChild(this.Om), this.Zd.appendChild(this.Xv), this.Zd.appendChild(this.Bm), this.Im(), this.Jd.$t().w_().l(this.Im.bind(this), this), this.rp = new Is(this.Gv.canvasElement, this, {
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
        this.pp(i), this.Ae(i), this.Hm(s, mh)
      }), this.bp(s), this.Hm(s, dh)), this.Pm !== null && this.Pm.fp(t), this.Rm !== null && this.Rm.fp(t)
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Bt(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: s,
      bitmapSize: i
    }) => {
      s.clearRect(0, 0, i.width, i.height)
    }), this.$m([...this.Jd.$t().wt(), this.Jd.$t().Yc()], e), this.Hm(e, fh))
  }
  Hm(t, e) {
    const s = this.Jd.$t().wt();
    for (const i of s) Ms(e, o => ys(o, t, !1, void 0), i, void 0);
    for (const i of s) Ms(e, o => xe(o, t, !1, void 0), i, void 0)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    Ne(t, 0, 0, e.width, e.height, this.Jd.$t().md())
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
      for (let m = s.length; m--;) {
        const f = Math.round(s[m].coord * h);
        l.rect(f - u, 0, c, d)
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
    return qt(this.j(), this.cn.fontFamily)
  }
  Ym() {
    return qt(this.j(), this.cn.fontFamily, "bold")
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
      Wi: new fe,
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
    e.leftPriceScale.visible && this.Pm === null && (this.Pm = new Ci("left", e, s, i, o), this.Om.appendChild(this.Pm.hp())), e.rightPriceScale.visible && this.Rm === null && (this.Rm = new Ci("right", e, s, i, o), this.Bm.appendChild(this.Rm.hp()))
  }
}
const vh = !!Qt && !!navigator.userAgentData && navigator.userAgentData.brands.some(n => n.brand.includes("Chromium")) && !!Qt && (!((hs = navigator == null ? void 0 : navigator.userAgentData) === null || hs === void 0) && hs.platform ? navigator.userAgentData.platform === "Windows" : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
var hs;
class bh {
  constructor(t, e, s) {
    var i;
    this.Zm = [], this.Xm = 0, this.ro = 0, this.o_ = 0, this.Km = 0, this.Gm = 0, this.Jm = null, this.Qm = !1, this.Dp = new Z, this.Vp = new Z, this.Pc = new Z, this.tb = null, this.ib = null, this.Gd = t, this.cn = e, this.U_ = s, this.Zd = document.createElement("div"), this.Zd.classList.add("tv-lightweight-charts"), this.Zd.style.overflow = "hidden", this.Zd.style.direction = "ltr", this.Zd.style.width = "100%", this.Zd.style.height = "100%", (i = this.Zd).style.userSelect = "none", i.style.webkitUserSelect = "none", i.style.msUserSelect = "none", i.style.MozUserSelect = "none", i.style.webkitTapHighlightColor = "transparent", this.nb = document.createElement("table"), this.nb.setAttribute("cellspacing", "0"), this.Zd.appendChild(this.nb), this.sb = this.eb.bind(this), as(this.cn) && this.rb(!0), this.$i = new th(this.Dc.bind(this), this.cn, s), this.$t().Zc().l(this.hb.bind(this), this), this.lb = new ph(this, this.U_), this.nb.appendChild(this.lb.hp());
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
    this.Zm = [], w(this.lb).S(), this.Zd.parentElement !== null && this.Zd.parentElement.removeChild(this.Zd), this.Pc.S(), this.Dp.S(), this.Vp.S(), this.fb()
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
    w(this.Zd).style.height = o, w(this.Zd).style.width = r, this.nb.style.height = o, this.nb.style.width = r, s ? this.pb(et.es(), performance.now()) : this.$i.Xl()
  }
  fp(t) {
    t === void 0 && (t = et.es());
    for (let e = 0; e < this.Zm.length; e++) this.Zm[e].fp(t.Hn(e).Fn);
    this.cn.timeScale.visible && this.lb.fp(t.jn())
  }
  Hh(t) {
    const e = as(this.cn);
    this.$i.Hh(t);
    const s = as(this.cn);
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
    const s = w(e.getContext("2d"));
    return this.wb(s), e
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
            d = w(l === "left" ? u.bm() : u.wm()),
            m = d.Mp();
          t !== null && d.xp(t, h, a), a += m.height
        }
      };
    this.Mb() && (o("left", 0), e += w(i.bm()).Mp().width);
    for (let l = 0; l < this.Zm.length; l++) {
      const h = this.Zm[l],
        a = h.Mp();
      t !== null && h.xp(t, e, s), s += a.height
    }
    e += i.Mp().width, this.xb() && (o("right", e), e += w(i.wm()).Mp().width);
    const r = (l, h, a) => {
      w(l === "left" ? this.lb.zm() : this.lb.Lm()).xp(w(t), h, a)
    };
    if (this.cn.timeScale.visible) {
      const l = this.lb.Mp();
      if (t !== null) {
        let h = 0;
        this.Mb() && (r("left", h, s), h = w(i.bm()).Mp().width), this.lb.xp(t, h, s), h += l.width, this.xb() && r("right", h, s)
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
    for (const f of this.Zm) this.Mb() && (e = Math.max(e, w(f.bm()).ap(), this.cn.leftPriceScale.minimumWidth)), this.xb() && (s = Math.max(s, w(f.wm()).ap(), this.cn.rightPriceScale.minimumWidth)), t += f.g_();
    e = ws(e), s = ws(s);
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
    let m = 0;
    for (let f = 0; f < this.Zm.length; ++f) {
      const p = this.Zm[f];
      p.Up(this.$i.Uc()[f]);
      let b = 0,
        y = 0;
      y = f === this.Zm.length - 1 ? u - m : Math.round(p.g_() * d), b = Math.max(y, 2), m += b, p.up(J({
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
    return vh ? 1 / window.devicePixelRatio : 1
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
      const o = new Ws(this, t[i]);
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
      h = l !== null && l.jc instanceof Vs ? l.jc : void 0,
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

function as(n) {
  return !!(n.handleScroll.mouseWheel || n.handleScale.mouseWheel)
}

function gh(n) {
  return function(t) {
    return t.open !== void 0
  }(n) || function(t) {
    return t.value !== void 0
  }(n)
}

function Mn(n, t) {
  var e = {};
  for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && t.indexOf(s) < 0 && (e[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (s = Object.getOwnPropertySymbols(n); i < s.length; i++) t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[i]) && (e[s[i]] = n[s[i]])
  }
  return e
}

function ji(n, t, e, s) {
  const i = e.value,
    o = {
      se: t,
      ot: n,
      Vt: [i, i, i, i],
      Ib: s
    };
  return e.color !== void 0 && (o.V = e.color), o
}

function _h(n, t, e, s) {
  const i = e.value,
    o = {
      se: t,
      ot: n,
      Vt: [i, i, i, i],
      Ib: s
    };
  return e.lineColor !== void 0 && (o.lt = e.lineColor), e.topColor !== void 0 && (o.Ts = e.topColor), e.bottomColor !== void 0 && (o.Ps = e.bottomColor), o
}

function wh(n, t, e, s) {
  const i = e.value,
    o = {
      se: t,
      ot: n,
      Vt: [i, i, i, i],
      Ib: s
    };
  return e.topLineColor !== void 0 && (o.Pe = e.topLineColor), e.bottomLineColor !== void 0 && (o.Re = e.bottomLineColor), e.topFillColor1 !== void 0 && (o.Se = e.topFillColor1), e.topFillColor2 !== void 0 && (o.ke = e.topFillColor2), e.bottomFillColor1 !== void 0 && (o.ye = e.bottomFillColor1), e.bottomFillColor2 !== void 0 && (o.Ce = e.bottomFillColor2), o
}

function yh(n, t, e, s) {
  const i = {
    se: t,
    ot: n,
    Vt: [e.open, e.high, e.low, e.close],
    Ib: s
  };
  return e.color !== void 0 && (i.V = e.color), i
}

function Mh(n, t, e, s) {
  const i = {
    se: t,
    ot: n,
    Vt: [e.open, e.high, e.low, e.close],
    Ib: s
  };
  return e.color !== void 0 && (i.V = e.color), e.borderColor !== void 0 && (i.Ot = e.borderColor), e.wickColor !== void 0 && (i.Zh = e.wickColor), i
}

function Sh(n, t, e, s, i) {
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
    He: Mn(c, ["time", "color"]),
    V: d
  }
}

function Ee(n) {
  return n.Vt !== void 0
}

function zi(n, t) {
  return t.customValues !== void 0 && (n.Wb = t.customValues), n
}

function Vt(n) {
  return (t, e, s, i, o, r) => function(l, h) {
    return h ? h(l) : (a = l).open === void 0 && a.value === void 0;
    var a
  }(s, r) ? zi({
    ot: t,
    se: e,
    Ib: i
  }, s) : zi(n(t, e, s, i, o), s)
}

function $i(n) {
  return {
    Candlestick: Vt(Mh),
    Bar: Vt(yh),
    Area: Vt(_h),
    Baseline: Vt(wh),
    Histogram: Vt(ji),
    Line: Vt(ji),
    Custom: Vt(Sh)
  } [n]
}

function Li(n) {
  return {
    se: 0,
    jb: new Map,
    ha: n
  }
}

function Ti(n, t) {
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
class kh {
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
      const h = e.map(m => m.time),
        a = this.U_.createConverterToInternalObj(e),
        c = $i(t.Jh()),
        u = t.ya(),
        d = t.Ca();
      r = e.map((m, f) => {
        const p = a(m.time),
          b = this.U_.key(p);
        let y = this.Ub.get(b);
        y === void 0 && (y = Li(p), this.Ub.set(b, y), i = !0);
        const M = c(p, y.se, m, h[f], u, d);
        return y.jb.set(t, M), M
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
      const u = Ti(h, c),
        d = Ti(a, c);
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
    r === void 0 && (r = Li(i), this.Ub.set(this.U_.key(i), r));
    const h = $i(t.Jh()),
      a = t.ya(),
      c = t.Ca(),
      u = h(i, r.se, e, s.Ib, a, c);
    r.jb.set(t, u), this.iw(t, u);
    const d = {
      Ql: Ee(u)
    };
    if (!l) return this.Qb(t, -1, d);
    const m = {
        timeWeight: 0,
        time: r.ha,
        pointData: r,
        originalTime: Ei(r.jb)
      },
      f = ge(this.Zb, this.U_.key(m.time), (p, b) => this.U_.key(p.time) < b);
    this.Zb.splice(f, 0, m);
    for (let p = f; p < this.Zb.length; ++p) cs(this.Zb[p].pointData, p);
    return this.U_.fillWeightsForPoints(this.Zb, f), this.Qb(t, f, d)
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
      o.timeWeight = i.timeWeight, cs(o.pointData, s)
    }
    if (e === -1 && this.Zb.length !== t.length && (e = Math.min(this.Zb.length, t.length)), e === -1) return -1;
    for (let s = e; s < t.length; ++s) cs(t[s].pointData, s);
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

function cs(n, t) {
  n.se = t, n.jb.forEach(e => {
    e.se = t
  })
}

function As(n) {
  const t = {
    value: n.Vt[3],
    time: n.Ib
  };
  return n.Wb !== void 0 && (t.customValues = n.Wb), t
}

function xi(n) {
  const t = As(n);
  return n.V !== void 0 && (t.color = n.V), t
}

function Ch(n) {
  const t = As(n);
  return n.lt !== void 0 && (t.lineColor = n.lt), n.Ts !== void 0 && (t.topColor = n.Ts), n.Ps !== void 0 && (t.bottomColor = n.Ps), t
}

function jh(n) {
  const t = As(n);
  return n.Pe !== void 0 && (t.topLineColor = n.Pe), n.Re !== void 0 && (t.bottomLineColor = n.Re), n.Se !== void 0 && (t.topFillColor1 = n.Se), n.ke !== void 0 && (t.topFillColor2 = n.ke), n.ye !== void 0 && (t.bottomFillColor1 = n.ye), n.Ce !== void 0 && (t.bottomFillColor2 = n.Ce), t
}

function Sn(n) {
  const t = {
    open: n.Vt[0],
    high: n.Vt[1],
    low: n.Vt[2],
    close: n.Vt[3],
    time: n.Ib
  };
  return n.Wb !== void 0 && (t.customValues = n.Wb), t
}

function zh(n) {
  const t = Sn(n);
  return n.V !== void 0 && (t.color = n.V), t
}

function $h(n) {
  const t = Sn(n),
    {
      V: e,
      Ot: s,
      Zh: i
    } = n;
  return e !== void 0 && (t.color = e), s !== void 0 && (t.borderColor = s), i !== void 0 && (t.wickColor = i), t
}

function Ss(n) {
  return {
    Area: Ch,
    Line: xi,
    Baseline: jh,
    Histogram: xi,
    Bar: zh,
    Candlestick: $h,
    Custom: Lh
  } [n]
}

function Lh(n) {
  const t = n.Ib;
  return Object.assign(Object.assign({}, n.He), {
    time: t
  })
}
const Th = {
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
  Eh = {
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
  xh = {
    background: {
      type: "solid",
      color: "#FFFFFF"
    },
    textColor: "#191919",
    fontSize: 12,
    fontFamily: $s,
    attributionLogo: !0
  },
  us = {
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
  Ph = {
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
  Vh = {
    color: "rgba(0, 0, 0, 0)",
    visible: !1,
    fontSize: 48,
    fontFamily: $s,
    fontStyle: "",
    text: "",
    horzAlign: "center",
    vertAlign: "center"
  };

function Pi() {
  return {
    width: 0,
    height: 0,
    autoSize: !1,
    layout: xh,
    crosshair: Th,
    grid: Eh,
    overlayPriceScales: Object.assign({}, us),
    leftPriceScale: Object.assign(Object.assign({}, us), {
      visible: !1
    }),
    rightPriceScale: Object.assign(Object.assign({}, us), {
      visible: !0
    }),
    timeScale: Ph,
    watermark: Vh,
    localization: {
      locale: Qt ? navigator.language : "",
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
class Rh {
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
    return Ue(this.aw) ? this.lw.gb(this.aw) : 0
  }
  Li() {
    return w(this.lw.$t().$c(this.aw)).Dt
  }
}

function Vi(n, t, e) {
  const s = Mn(n, ["time", "originalTime"]),
    i = Object.assign({
      time: t
    }, s);
  return e !== void 0 && (i.originalTime = e), i
}
const Ih = {
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
class Wh {
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
class Bh {
  constructor(t, e, s, i, o) {
    this._w = new Z, this.Ls = t, this.uw = e, this.cw = s, this.U_ = o, this.dw = i
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
    const e = new Ht(new he(t.from, t.to)).hu(),
      s = this.Ls.In();
    if (s.Ni()) return null;
    const i = s.hl(e.Vs(), 1),
      o = s.hl(e.ui(), -1),
      r = w(s.sl()),
      l = w(s.An());
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
    return s === null ? null : Ss(this.seriesType())(s)
  }
  data() {
    const t = Ss(this.seriesType());
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
    const e = t.map(s => Vi(s, this.U_.convertHorzItemToInternal(s.time), s.time));
    this.Ls.ia(e)
  }
  markers() {
    return this.Ls.na().map(t => Vi(t, t.originalTime, void 0))
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
    const e = gt(Ct(Ih), t),
      s = this.Ls.sa(e);
    return new Wh(s)
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
class Ah {
  constructor(t, e, s) {
    this.bw = new Z, this.pu = new Z, this.Vm = new Z, this.$i = t, this.kl = t.St(), this.lb = e, this.kl.tc().l(this.ww.bind(this)), this.kl.nc().l(this.gw.bind(this)), this.lb.Em().l(this.Mw.bind(this)), this.U_ = s
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
    Pt(t.from <= t.to, "The from index cannot be after the to index."), this.$i.vd(t)
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

function Dh(n) {
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

function Ri(n) {
  return function(t) {
    if (Me(t.handleScale)) {
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
      Me(s) && (t.handleScale.axisPressedMouseMove = {
        time: s,
        price: s
      }), Me(i) && (t.handleScale.axisDoubleClickReset = {
        time: i,
        price: i
      })
    }
    const e = t.handleScroll;
    Me(e) && (t.handleScroll = {
      horzTouchDrag: e,
      vertTouchDrag: e,
      mouseWheel: e,
      pressedMouseMove: e
    })
  }(n), n
}
class Nh {
  constructor(t, e, s) {
    this.xw = new Map, this.Sw = new Map, this.kw = new Z, this.yw = new Z, this.Cw = new Z, this.Tw = new kh(e);
    const i = s === void 0 ? Ct(Pi()) : gt(Ct(Pi()), Ri(s));
    this.U_ = e, this.lw = new bh(t, i, e), this.lw.hm().l(r => {
      this.kw.M() && this.kw.m(this.Pw(r()))
    }, this), this.lw.lm().l(r => {
      this.yw.M() && this.yw.m(this.Pw(r()))
    }, this), this.lw.Zc().l(r => {
      this.Cw.M() && this.Cw.m(this.Pw(r()))
    }, this);
    const o = this.lw.$t();
    this.Rw = new Ah(o, this.lw.cb(), this.U_)
  }
  remove() {
    this.lw.hm().p(this), this.lw.lm().p(this), this.lw.Zc().p(this), this.Rw.S(), this.lw.S(), this.xw.clear(), this.Sw.clear(), this.kw.S(), this.yw.S(), this.Cw.S(), this.Tw.S()
  }
  resize(t, e, s) {
    this.autoSizeActive() || this.lw.ob(t, e, s)
  }
  addCustomSeries(t, e) {
    const s = Kt(t),
      i = Object.assign(Object.assign({}, Zi), s.defaultOptions());
    return this.Dw("Custom", i, e, s)
  }
  addAreaSeries(t) {
    return this.Dw("Area", kr, t)
  }
  addBaselineSeries(t) {
    return this.Dw("Baseline", Cr, t)
  }
  addBarSeries(t) {
    return this.Dw("Bar", Mr, t)
  }
  addCandlestickSeries(t = {}) {
    return function(e) {
      e.borderColor !== void 0 && (e.borderUpColor = e.borderColor, e.borderDownColor = e.borderColor), e.wickColor !== void 0 && (e.wickUpColor = e.wickColor, e.wickDownColor = e.wickColor)
    }(t), this.Dw("Candlestick", yr, t)
  }
  addHistogramSeries(t) {
    return this.Dw("Histogram", jr, t)
  }
  addLineSeries(t) {
    return this.Dw("Line", Sr, t)
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
    return new Rh(this.lw, t)
  }
  timeScale() {
    return this.Rw
  }
  applyOptions(t) {
    this.lw.Hh(Ri(t))
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
    Dh(s.priceFormat);
    const o = gt(Ct(qi), Ct(e), s),
      r = this.lw.$t().ud(t, o, i),
      l = new Bh(r, this, this, this, this.U_);
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
        l = Ss(r)(i);
      if (r !== "Custom") Pt(gh(l));
      else {
        const h = o.Ca();
        Pt(!h || h(l) === !1)
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

function Oh(n, t, e) {
  let s;
  if (be(n)) {
    const o = document.getElementById(n);
    Pt(o !== null, `Cannot find element in DOM with id=${n}`), s = o
  } else s = n;
  const i = new Nh(s, t, e);
  return t.setOptions(i.options()), i
}

function Uh(n, t) {
  return Oh(n, new wi, wi.Ad(t))
}
Object.assign(Object.assign({}, qi), Zi);
const Fh = {
    class: "memepad-jetton-chart"
  },
  Jh = {
    class: "controls"
  },
  Kh = ["value"],
  Xh = {
    class: "label"
  },
  Hh = ["value"],
  Yh = {
    class: "label"
  },
  Gh = {
    key: 0,
    class: "chart-empty-wrapper"
  },
  Zh = {
    class: "inner"
  },
  qh = {
    class: "label"
  },
  Qh = {
    key: 1,
    class: "chart-wrapper"
  },
  ta = K({
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
        e = N(null),
        s = N(null),
        i = N(null),
        o = E(() => [{
          value: ne.ONE_MINUTE,
          label: `1${R("base.time.abbr.minutes")}`
        }, {
          value: ne.FIVE_MINUTES,
          label: `5${R("base.time.abbr.minutes")}`
        }, {
          value: ne.FIFTEEN_MINUTES,
          label: `15${R("base.time.abbr.minutes")}`
        }]),
        r = E(() => [{
          value: ie.MARKET_CAP,
          label: R("memepad.chart.tabs.market_cap")
        }, {
          value: ie.PRICE,
          label: R("memepad.chart.tabs.price")
        }]),
        l = E({
          get: () => t.chartInterval,
          set: d => {
            t.updateChartInterval(d)
          }
        }),
        h = E({
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
        u = (d, m) => {
          var L;
          const f = (L = Ni().$webApp.dataUnsafe.user) == null ? void 0 : L.language_code;
          i.value && s.value && s.value.removeSeries(i.value), m.innerHTML = "";
          const b = Uh(m, {
            localization: {
              timeFormatter: C => {
                const V = T => String(T).padStart(2, "0"),
                  S = new Date(C * 1e3);
                return `${V(S.getUTCHours())}:${V(S.getUTCMinutes())}`
              },
              priceFormatter: C => {
                if (h.value === ie.MARKET_CAP) return `$${Ve(C,{accuracy:0})}`;
                {
                  if (Math.abs(C) < 1e-9) return "$0";
                  const [V, S] = C.toFixed(9).split("."), T = S[0], P = S.slice(1).match(/^0+/), B = P ? P[0].length : 0, Q = B > 0 ? String.fromCharCode(8321 + B) : "", ct = S.slice(B + 1).replace(/0+$/, "").slice(0, 3);
                  return `$${V}.${T}${Q}${ct}`
                }
              },
              locale: f
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
              mode: bs.Magnet,
              horzLine: {
                color: "#ffffff",
                style: Re.Dashed,
                labelBackgroundColor: "#ffffff"
              },
              vertLine: {
                color: "#ffffff",
                style: Re.Dashed,
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
          const y = b.addLineSeries({
              color: "#C4F85C",
              baseLineWidth: 2,
              crosshairMarkerBackgroundColor: "#C4F85C",
              crosshairMarkerBorderColor: "#000000",
              crosshairMarkerBorderWidth: 2,
              crosshairMarkerRadius: 3,
              priceFormat: {
                type: "price",
                precision: h.value === ie.MARKET_CAP ? 0 : 9,
                minMove: 1e-9
              }
            }),
            M = d.map(C => {
              const V = new Date(C.timestamp);
              return {
                time: (V.getTime() - V.getTimezoneOffset() * 60 * 1e3) / 1e3,
                value: C.price.toNumber()
              }
            }).sort((C, V) => C.time - V.time);
          y.setData(M), b.timeScale().fitContent()
        };
      return bt(() => [e.value, t.chart, t.chartInterval], () => {
        !e.value || !t.chart || u(t.chart.points, e.value)
      }, {
        immediate: !0
      }), Be(c), (d, m) => (g(), k("div", Fh, [_("div", Jh, [_("div", {
        class: "section",
        style: It({
          "grid-template-columns": `repeat(${v(r).length}, 1fr)`
        })
      }, [(g(!0), k(st, null, Tt(v(r), f => (g(), k("label", {
        key: f.value,
        class: Gt(["item", {
          "is-active": d.chartType === f.value
        }])
      }, [Zt(_("input", {
        "onUpdate:modelValue": m[0] || (m[0] = p => at(h) ? h.value = p : null),
        type: "radio",
        name: "chart-type",
        value: f.value
      }, null, 8, Kh), [
        [fs, v(h)]
      ]), _("span", Xh, W(f.label), 1)], 2))), 128))], 4), _("div", {
        class: "section",
        style: It({
          "grid-template-columns": `repeat(${v(o).length}, 1fr)`
        })
      }, [(g(!0), k(st, null, Tt(v(o), f => (g(), k("label", {
        key: f.value,
        class: Gt(["item", {
          "is-active": d.chartInterval === f.value
        }])
      }, [Zt(_("input", {
        "onUpdate:modelValue": m[1] || (m[1] = p => at(l) ? l.value = p : null),
        type: "radio",
        name: "chart-interval",
        value: f.value
      }, null, 8, Hh), [
        [fs, v(l)]
      ]), _("span", Yh, W(f.label), 1)], 2))), 128))], 4)]), !d.chart || !d.chart.points.length ? (g(), k("div", Gh, [m[3] || (m[3] = _("img", {
        src: Ns,
        class: "lines"
      }, null, -1)), m[4] || (m[4] = _("img", {
        src: Rn,
        class: "empty"
      }, null, -1)), _("div", Zh, [m[2] || (m[2] = _("div", {
        class: "dot"
      }, null, -1)), _("div", qh, W(("t" in d ? d.t : v(R))("memepad.jetton.chart.coming_text")), 1)])])) : (g(), k("div", Qh, [_("div", {
        ref_key: "container",
        ref: e,
        style: {
          width: "100%",
          height: "320px"
        }
      }, null, 512), m[5] || (m[5] = _("img", {
        src: Ns,
        class: "lines"
      }, null, -1))]))]))
    }
  }),
  ea = X(ta, [
    ["__scopeId", "data-v-e70589ec"]
  ]),
  sa = {
    class: "label"
  },
  ia = {
    class: "memepad-jetton-actions-controls-unlock-sheet"
  },
  na = {
    class: "icon-wrapper"
  },
  oa = {
    class: "title"
  },
  ra = {
    class: "subtitle"
  },
  la = {
    class: "buttons-wrapper"
  },
  ha = K({
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
        e = N(!1),
        s = () => {
          e.value = !1, t.unlockSuccessCallback()
        };
      return (i, o) => {
        const r = Ut,
          l = ve,
          h = zs,
          a = Ai;
        return g(), k(st, null, [j(r, {
          class: "memepad-jetton-actions-controls-unlock-button",
          icon: "lock-open",
          type: v(xt).HIGHLIGHT,
          fill: "",
          "icon-align": "left",
          onClick: o[0] || (o[0] = c => e.value = !0)
        }, {
          default: F(() => [_("div", sa, W(("t" in i ? i.t : v(R))("memepad.jetton.unlock.btn")), 1)]),
          _: 1
        }, 8, ["type"]), j(a, {
          modelValue: v(e),
          "onUpdate:modelValue": o[1] || (o[1] = c => at(e) ? e.value = c : null)
        }, {
          default: F(() => [_("div", ia, [_("div", na, [j(l, {
            src: v(pe)(i.jetton.iconFileKey),
            size: 80
          }, null, 8, ["src"])]), _("div", oa, W(("t" in i ? i.t : v(R))("memepad.jetton.unlock.sheet.title", {
            ticker: i.jetton.ticker
          })), 1), _("div", ra, W(("t" in i ? i.t : v(R))("memepad.jetton.unlock.sheet.subtitle", {
            ticker: i.jetton.ticker
          })), 1), _("div", la, [j(h, {
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
  aa = X(ha, [
    ["__scopeId", "data-v-f5a83b7e"]
  ]),
  ca = {
    class: "label"
  },
  ua = ["value", "name"],
  da = K({
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
        e = In(Oi);
      if (!e) throw Ui("Tabs injection not defined");
      const s = E(() => t.type ?? e.type.value),
        i = E({
          get() {
            return e.value.value === t.value
          },
          set() {
            e.updateValue(t.value)
          }
        });
      return (o, r) => (g(), k("label", {
        class: Gt(["kit-tab", [`is-${v(s).toLowerCase()}`, {
          "is-active": v(i)
        }]])
      }, [_("span", ca, W(n.label), 1), Zt(_("input", {
        "onUpdate:modelValue": r[0] || (r[0] = l => at(i) ? i.value = l : null),
        type: "radio",
        value: n.value,
        name: v(e).name
      }, null, 8, ua), [
        [fs, v(i)]
      ])], 2))
    }
  }),
  kn = X(da, [
    ["__scopeId", "data-v-94bc640b"]
  ]),
  fa = {
    class: "list"
  },
  ma = K({
    __name: "KitTabs",
    props: Yt({
      items: {
        type: Array,
        default: void 0
      },
      type: {
        type: String,
        default: ms.DEFAULT
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(n) {
      const t = n,
        e = ae(n, "modelValue"),
        s = E(() => {
          var i;
          return ((i = t.items) == null ? void 0 : i.map(o => typeof o == "string" ? {
            value: o,
            label: o
          } : o)) ?? []
        });
      return Wn(Oi, {
        value: E(() => e.value),
        updateValue: i => {
          e.value = i
        },
        type: E(() => t.type),
        name: Bn()
      }), (i, o) => {
        const r = kn,
          l = An("horizontal-wheel-scroll");
        return g(), k("div", {
          class: Gt(["kit-tabs", `is-${n.type.toLowerCase()}`])
        }, [Zt((g(), k("div", fa, [Jt(i.$slots, "default", {}, void 0, !0), (g(!0), k(st, null, Tt(v(s), h => (g(), A(r, {
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
  pa = X(ma, [
    ["__scopeId", "data-v-74a842a0"]
  ]),
  va = {
    class: "memepad-jetton-actions-controls-input"
  },
  ba = K({
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
        o = N(),
        r = N(),
        l = () => {
          ps(() => {
            o.value && (o.value.style.width = "", o.value.style.width = o.value.scrollWidth + "px")
          })
        },
        h = E({
          get: () => s.modelValue,
          set: d => {
            if (o.value && o.value.value !== s.modelValue) {
              const f = [...o.value.value].findIndex((p, b) => p !== s.modelValue[b]);
              f !== -1 && o.value.value[f] === "," && (d = d.slice(0, f) + "." + d.slice(f))
            }
            d = (s.modifier || (f => f))(d), o.value && o.value.value !== d && (o.value.value = d), i("update:modelValue", d)
          }
        });
      bt(() => s.modelValue, l), bt(() => o.value, l);
      const a = E(() => {
          const d = window.innerWidth,
            m = s.modelValue.length + (s.postfix ? s.postfix.length : 0),
            f = Math.floor((d - 360) / 30) + 12.5,
            p = m - f,
            b = Math.min(Math.max(1 - p / m, 0), 1);
          return {
            fontSize: `${44*b}px`,
            lineHeight: `${52*b}px`
          }
        }),
        c = () => {
          var d;
          (d = r.value) == null || d.focus()
        };
      Dn(() => {
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
      return (d, m) => (g(), k("label", va, [Zt(_("input", {
        ref_key: "inputRef",
        ref: o,
        "onUpdate:modelValue": m[0] || (m[0] = f => at(h) ? h.value = f : null),
        type: "text",
        inputmode: "decimal",
        style: It(v(a)),
        onBlur: m[1] || (m[1] = f => i("blur"))
      }, null, 36), [
        [Fi, v(h)]
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
  Cn = X(ba, [
    ["__scopeId", "data-v-ece355cf"]
  ]),
  ga = {
    class: "memepad-jetton-action-controls-action-button"
  },
  _a = {
    class: "info"
  },
  wa = {
    class: "label"
  },
  ya = {
    class: "label"
  },
  Ma = K({
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
        e = E(() => new vt(t.value.replaceAll(",", "") || "0")),
        s = E(() => t.tradePendings[t.tab]),
        i = E(() => !!(s.value || !t.inputState || t.inputState.loading)),
        o = E(() => i.value ? !1 : !!(e.value.isZero() || !t.inputState || t.inputState.error));
      return (r, l) => {
        var m, f, p, b, y;
        const h = Hi,
          a = Ae,
          c = Gi,
          u = Xi,
          d = Ut;
        return g(), k("div", ga, [_("div", _a, [r.inputState ? (g(), k(st, {
          key: 0
        }, [r.inputState.balanceLabel ? (g(), A(h, {
          key: 0,
          balance: r.inputState.balanceLabel
        }, null, 8, ["balance"])) : (g(), A(a, {
          key: 1,
          class: "skeleton"
        })), r.inputState.error || r.inputState.feesInfo ? (g(), A(c, {
          key: 2,
          details: (m = r.inputState.feesInfo) == null ? void 0 : m.details,
          "total-label": (f = r.inputState.feesInfo) == null ? void 0 : f.totalLabel,
          "error-message": (p = r.inputState.error) == null ? void 0 : p.message
        }, null, 8, ["details", "total-label", "error-message"])) : (g(), A(a, {
          key: 3,
          class: "skeleton"
        }))], 64)) : (g(), k(st, {
          key: 1
        }, [j(a, {
          class: "skeleton"
        }), j(a, {
          class: "skeleton"
        })], 64))]), (y = (b = r.inputState) == null ? void 0 : b.error) != null && y.notEnoughtTon ? (g(), A(u, {
          key: 0,
          "jetton-shortname": r.jetton.shortname,
          "jetton-address": r.jetton.address
        }, null, 8, ["jetton-shortname", "jetton-address"])) : (g(), k(st, {
          key: 1
        }, [r.tab === v(G).BUY ? (g(), A(d, {
          key: 0,
          fill: "",
          size: v(Et).LARGE,
          type: v(xt).HIGHLIGHT,
          loading: v(i),
          disabled: v(o),
          onClick: l[0] || (l[0] = M => r.$emit("trade"))
        }, {
          default: F(() => [_("div", wa, W(("t" in r ? r.t : v(R))("memepad.jetton.buy_button_label", {
            ticker: r.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "type", "loading", "disabled"])) : it("", !0), r.tab === v(G).SELL ? (g(), A(d, {
          key: 1,
          fill: "",
          size: v(Et).LARGE,
          type: v(xt).PINK,
          loading: v(i),
          disabled: v(o),
          onClick: l[1] || (l[1] = M => r.$emit("trade"))
        }, {
          default: F(() => [_("div", ya, W(("t" in r ? r.t : v(R))("memepad.jetton.sell_button_label", {
            ticker: r.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "type", "loading", "disabled"])) : it("", !0)], 64))])
      }
    }
  }),
  Sa = X(Ma, [
    ["__scopeId", "data-v-85aa80e6"]
  ]),
  ka = {
    class: "memepad-jetton-actions-controls-range-slider"
  },
  Ca = {
    class: "marks"
  },
  ja = {
    class: "line"
  },
  za = {
    class: "inner"
  },
  $a = {
    class: "content"
  },
  La = {
    class: "label"
  },
  ds = 100,
  Ta = K({
    __name: "RangeInput",
    props: Yt({
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
        s = ae(n, "modelValue"),
        i = N(null),
        o = N("0"),
        r = E(() => new vt(s.value.replaceAll(",", "") || "0")),
        l = E(() => {
          const f = {
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
          return e.tab === G.SELL ? p : f
        }),
        h = E(() => {
          const f = l.value,
            p = Object.keys(f).map(Number).sort((y, M) => y - M),
            b = [];
          for (let y = 0; y <= ds; y++) {
            const M = y;
            if (p.includes(M)) {
              const P = f[M],
                B = "value" in P ? P.value : P.percent;
              b.push(B);
              continue
            }
            let L, C, V, S;
            for (let P = 0; P < p.length - 1; P++)
              if (M > p[P] && M < p[P + 1]) {
                L = p[P], C = p[P + 1];
                const B = f[L],
                  Q = f[C];
                V = "value" in B ? B.value : B.percent, S = "value" in Q ? Q.value : Q.percent;
                break
              } if (L === void 0 || C === void 0 || V === void 0 || S === void 0) continue;
            const T = (M - L) / (C - L),
              x = V + T * (S - V);
            b.push(x)
          }
          return b
        }),
        a = E(() => {
          const f = l.value,
            b = Object.keys(f).map(Number).sort((M, L) => M - L).map(M => {
              const L = f[M];
              return "value" in L ? L.value : L.percent
            }),
            y = [];
          for (let M = 0; M < b.length; M++) {
            const L = b[M],
              C = h.value.indexOf(L),
              V = C / ds * 100,
              S = Math.min(new vt(L).decimalPlaces(), 2),
              T = M === 0,
              x = M === b.length - 1,
              P = new vt(m.value).gte(V),
              B = e.tab === G.SELL ? `${L}%` : `${Ji(L,S)} TON`;
            y.push({
              label: B,
              position: C,
              percent: V,
              isFirst: T,
              isLast: x,
              isActive: P
            })
          }
          return y
        }),
        c = () => {
          const f = r.value,
            p = String((() => {
              if (e.tab === G.BUY) {
                for (let b = 0; b < h.value.length; b++) {
                  const y = new vt(h.value[b]);
                  if (f.eq(y)) return b;
                  if (f.lte(y)) return b - 1
                }
                return ds
              } else {
                if (!e.balances.jettonBalance) return 0;
                const b = e.balances.jettonBalance.value;
                for (let y = 0; y < h.value.length; y++) {
                  const M = b.times(h.value[y]).div(100);
                  if (f.eq(M)) return y;
                  if (f.lte(M)) return y - 1
                }
                return 0
              }
            })());
          o.value = p, i.value && i.value.value !== p && (i.value.value = p)
        },
        u = f => a.value.find(p => Math.abs(Number(p.percent) - f) < 4 && !p.isFirst),
        d = f => {
          if (e.tab === G.BUY) {
            const p = Math.min(new vt(f).decimalPlaces(), 2);
            s.value = new vt(f).toDecimalPlaces(p, vt.ROUND_DOWN).toFixed(p)
          } else {
            if (!e.balances.jettonBalance) return;
            const b = e.balances.jettonBalance.value.times(f).div(100);
            s.value = b.toFixed()
          }
        },
        m = E({
          get: () => o.value,
          set: f => {
            var M;
            const p = Number(f),
              b = (M = u(p)) == null ? void 0 : M.percent;
            b && i.value && i.value.value !== String(b) && (i.value.value = String(b));
            const y = h.value[b ?? p];
            o.value = String(b ?? p), d(String(y))
          }
        });
      return t({
        applyNearestValue: c
      }), (f, p) => (g(), k("label", ka, [Zt(_("input", {
        ref_key: "inputRef",
        ref: i,
        "onUpdate:modelValue": p[0] || (p[0] = b => m.value = b),
        type: "range",
        step: 1,
        min: 0,
        max: 100,
        style: It({
          "--value": m.value
        })
      }, null, 4), [
        [Fi, m.value]
      ]), _("div", Ca, [_("div", ja, [_("div", {
        class: "filled",
        style: It({
          "--width": `${m.value}%`
        })
      }, null, 4)]), _("div", za, [(g(!0), k(st, null, Tt(a.value, b => (g(), k("div", {
        key: b.position,
        style: It({
          "--left": `${b.percent}%`
        }),
        class: Gt([{
          "is-last": b.isLast,
          "is-first": b.isFirst,
          "is-active": b.isActive
        }, "item"])
      }, [_("div", $a, [p[1] || (p[1] = _("div", {
        class: "point"
      }, null, -1)), _("div", La, W(b.label), 1)])], 6))), 128))])])]))
    }
  }),
  Ea = X(Ta, [
    ["__scopeId", "data-v-cfe6d1e0"]
  ]),
  xa = {
    class: "memepad-jetton-modal"
  },
  Pa = {
    class: "top"
  },
  Va = {
    class: "center"
  },
  Ra = {
    class: "right"
  },
  Ia = {
    class: "inner"
  },
  Wa = {
    class: "memepad-jetton-modal-bottom"
  },
  Ba = {
    class: "action"
  },
  Aa = {
    key: 0,
    class: "helpers"
  },
  Da = K({
    __name: "Modal",
    setup(n) {
      return (t, e) => {
        const s = js;
        return g(), k("div", xa, [_("div", Pa, [e[0] || (e[0] = _("div", {
          class: "left"
        }, null, -1)), _("div", Va, [Jt(t.$slots, "top-center", {}, void 0, !0)]), _("div", Ra, [Jt(t.$slots, "top-right", {}, void 0, !0)])]), _("div", Ia, [Jt(t.$slots, "default", {}, void 0, !0)]), j(s, {
          "ignore-tabs": "",
          "hide-space": ""
        }, {
          default: F(() => [_("div", Wa, [_("div", Ba, [Jt(t.$slots, "bottom-action", {}, void 0, !0)]), t.$slots["bottom-helpers"] ? (g(), k("div", Aa, [Jt(t.$slots, "bottom-helpers", {}, void 0, !0)])) : it("", !0)])]),
          _: 3
        })])
      }
    }
  }),
  jn = X(Da, [
    ["__scopeId", "data-v-39f361cf"]
  ]),
  Na = {
    class: "content"
  },
  Oa = {
    class: "subtitle"
  },
  Ua = {
    key: 0
  },
  Fa = {
    class: "label"
  },
  Ja = K({
    __name: "TradeModal",
    props: Yt({
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
    emits: Yt(["trade", "unlock-success", "open-slippage"], ["update:modelValue", "update:tradePendings"]),
    setup(n, {
      emit: t
    }) {
      const e = n,
        s = t,
        i = ae(n, "modelValue"),
        o = ae(n, "tradePendings"),
        r = N(),
        {
          state: l,
          updateInputState: h
        } = C(),
        a = V(),
        c = () => {
          var S;
          e.jettonModalControls.value.value === ht.TRADE && ((S = r.value) == null || S.focusOnInput())
        },
        u = N(e.jettonTrading.slippage);
      bt(() => e.jettonModalControls.isOpened(ht.SLIPPAGE), S => {
        var T;
        u.value = e.jettonTrading.slippage, h(), S || (T = r.value) == null || T.focusOnInput()
      });
      const d = N(),
        m = N("0"),
        f = S => Ve(S, {
          join: "emptyFractional"
        }),
        p = E({
          get: () => m.value,
          set: S => {
            m.value = S, ps(() => {
              var T;
              return (T = d.value) == null ? void 0 : T.applyNearestValue()
            })
          }
        }),
        b = E({
          get: () => m.value,
          set: S => {
            m.value = f(S)
          }
        });
      bt(() => i.value, () => {
        m.value = "0", ps(() => {
          var S;
          return (S = d.value) == null ? void 0 : S.applyNearestValue()
        })
      });
      const y = E(() => {
          if (!(!l.value || l.value.loading)) {
            if (M.value.isZero()) return i.value === G.BUY ? `0 ${e.jetton.ticker}` : "0 TON";
            if (!l.value.feesInfo || !l.value.ready) return "";
            if (i.value === G.SELL) {
              const S = l.value.tradeInfo.maxReceive,
                T = `${Os(S)} TON`;
              if (!e.tonUsdRate) return T;
              const x = Nn(e.tonUsdRate.mul(S));
              return `${T} (≈$${x})`
            } else {
              const S = l.value.tradeInfo.maxReceive;
              return `≈${Ve(S,{accuracy:0})} ${e.jetton.ticker}`
            }
          }
        }),
        M = E(() => new vt(m.value.replaceAll(",", "") || "0"));
      let L;
      bt(() => [m.value, e.balances.jettonBalance, e.balances.tonBalance], () => h()), Be(() => {
        L == null || L.destroy()
      });

      function C() {
        const S = e.jettonTrading.tradeStateControls,
          T = E(() => S.getImmediateState({
            operation: i.value,
            amount: M.value,
            tonBalance: e.balances.tonBalance,
            jettonBalance: e.balances.jettonBalance,
            jetton: e.jetton
          })),
          x = N(S.getEmptyState({
            operation: i.value,
            jettonBalance: e.balances.jettonBalance,
            tonBalance: e.balances.tonBalance
          })),
          P = E(() => T.value || x.value);
        let B = new AbortController;
        const Q = () => {
            B.abort(), B = new AbortController
          },
          {
            debouncedFunction: ct
          } = On(async () => {
            if (Q(), T.value) return;
            const {
              signal: mt
            } = B, z = await S.getState({
              operation: i.value,
              amount: M.value,
              tonBalance: e.balances.tonBalance,
              jettonBalance: e.balances.jettonBalance,
              jetton: e.jetton
            });
            mt.aborted || (x.value = z)
          }, 600);
        return {
          state: P,
          updateInputState: () => {
            x.value = void 0, ct()
          }
        }
      }

      function V() {
        const S = ks();
        return async () => {
          if (!l.value || !l.value.ready) return;
          const x = i.value,
            P = new vt(M.value),
            B = l.value.tradeInfo,
            Q = e.jetton.ticker,
            ct = e.jetton.id,
            wt = e.jetton.address,
            mt = e.jetton.address,
            z = e.jetton.shortname;
          await (async () => {
            o.value[x] = !0;
            const pt = () => {
                const I = vs(x === G.BUY ? B.minReceive : P, Q),
                  U = vs(x === G.BUY ? P : B.minReceive, "TON"),
                  D = x === G.BUY ? R("memepad.jetton.buy.failed_alert", {
                    askLabel: I.frontendWithSymbol,
                    offerLabel: U.frontendWithSymbol
                  }) : R("memepad.jetton.sell.failed_alert", {
                    askLabel: I.frontendWithSymbol,
                    offerLabel: U.frontendWithSymbol
                  });
                Pe().bottom.error(D)
              },
              St = await (x === G.BUY ? e.jettonTrading.buyJetton(P, B) : e.jettonTrading.sellJetton(P, B));
            if (St.err) {
              o.value[x] = !1, pt();
              return
            }
            s("trade");
            const tt = St.data;
            L = x === G.BUY ? e.jettonTrading.getWaitForBuyStatus() : e.jettonTrading.getWaitForSellStatus(), await Ii(2e4);
            const zt = await L.exec({
                jettonAddress: mt,
                transactionHash: tt
              }),
              $t = zt ? "success" : "failed";
            if (x === G.BUY ? S.memepad.memepadJettonBuy({
                status: $t,
                jettonId: ct,
                jettonShortname: z,
                jettonAddress: wt,
                purchaseAmount: P.toNumber()
              }) : S.memepad.memepadJettonSell({
                status: $t,
                jettonId: ct,
                jettonShortname: z,
                jettonAddress: wt,
                purchaseAmount: B.maxReceive.toNumber()
              }), !zt) {
              o.value[x] = !1, pt();
              return
            }
            const $ = x === G.BUY ? R("memepad.jetton.buy.success_alert", {
              ticker: Q,
              label: `${Os(P)} TON`
            }) : R("memepad.jetton.sell.success_alert", {
              label: `${Ki(P).full} ${Q}`
            });
            Pe().bottom.success($), o.value[x] = !1, e.tradeSuccessCallback()
          })()
        }
      }
      return (S, T) => {
        const x = kn,
          P = pa,
          B = Cn,
          Q = Ae,
          ct = Ot,
          wt = zs,
          mt = Sa,
          z = Cs,
          pt = Ea,
          St = jn;
        return g(), A(St, {
          class: "memepad-jetton-trade-modal"
        }, {
          "top-center": F(() => [j(P, {
            modelValue: i.value,
            "onUpdate:modelValue": T[0] || (T[0] = tt => i.value = tt),
            class: "tabs"
          }, {
            default: F(() => [j(x, {
              label: ("t" in S ? S.t : v(R))("memepad.jetton.buy_tab"),
              value: v(G).BUY,
              type: v(ms).PRIMARY,
              class: "buy-tab"
            }, null, 8, ["label", "value", "type"]), j(x, {
              label: ("t" in S ? S.t : v(R))("memepad.jetton.sell_tab"),
              value: v(G).SELL,
              type: v(ms).SECONDARY,
              class: "sell-tab"
            }, null, 8, ["label", "value", "type"])]),
            _: 1
          }, 8, ["modelValue"])]),
          default: F(() => [_("div", Na, [(g(), A(B, {
            ref_key: "actionControlsInputComp",
            ref: r,
            key: i.value,
            modelValue: v(p),
            "onUpdate:modelValue": T[1] || (T[1] = tt => at(p) ? p.value = tt : null),
            postfix: i.value === "buy" ? "TON" : S.jetton.ticker,
            modifier: f,
            onBlur: c
          }, null, 8, ["modelValue", "postfix"])), _("div", Oa, [v(y) ? (g(), k("span", Ua, W(v(y)), 1)) : v(y) === void 0 ? (g(), A(Q, {
            key: 1,
            class: "skeleton"
          })) : it("", !0)]), _("button", {
            type: "button",
            class: "reset slippage-btn",
            onClick: T[2] || (T[2] = tt => S.$emit("open-slippage"))
          }, [_("span", Fa, W(`${("t"in S?S.t:v(R))("memepad.jetton.slippage_btn")} ${v(u)}%`), 1), j(ct, {
            name: "arrow-caret-down",
            class: "icon"
          })])])]),
          "bottom-action": F(() => [j(z, {
            "force-loading": S.unlockEnabled === void 0 && S.isReleased || !S.jettonTrading
          }, {
            default: F(() => [S.unlockEnabled ? (g(), A(wt, {
              key: 0,
              jetton: S.jetton,
              "jetton-information": S.jettonInformation,
              balances: S.balances,
              "jetton-management": S.jettonManagement,
              onUnlocked: T[3] || (T[3] = tt => S.$emit("unlock-success"))
            }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])) : (g(), A(mt, {
              key: 1,
              value: v(m),
              tab: i.value,
              jetton: S.jetton,
              "trade-pendings": o.value,
              "input-state": v(l),
              onTrade: v(a)
            }, null, 8, ["value", "tab", "jetton", "trade-pendings", "input-state", "onTrade"]))]),
            _: 1
          }, 8, ["force-loading"])]),
          "bottom-helpers": F(() => [j(pt, {
            ref_key: "rangeInputEl",
            ref: d,
            modelValue: v(b),
            "onUpdate:modelValue": T[4] || (T[4] = tt => at(b) ? b.value = tt : null),
            tab: i.value,
            jetton: S.jetton,
            balances: S.balances
          }, null, 8, ["modelValue", "tab", "jetton", "balances"])]),
          _: 1
        })
      }
    }
  }),
  Ka = X(Ja, [
    ["__scopeId", "data-v-2b330e9e"]
  ]),
  Xa = {
    class: "title"
  },
  Ha = {
    class: "content"
  },
  Ya = {
    class: "actions"
  },
  Ga = {
    key: 1,
    class: "text"
  },
  Za = 1,
  qa = 99,
  Qa = K({
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
        i = N(),
        o = () => {
          var c;
          e.jettonModalControls.value.value === ht.SLIPPAGE && ((c = i.value) == null || c.focusOnInput())
        },
        r = N(e.jettonTrading.slippage.toString()),
        l = E(() => new vt(r.value.replaceAll(",", "") || "0")),
        h = E(() => l.value.lt(Za) ? R("memepad.jetton.slippage.error_message.too_low") : l.value.gt(qa) ? R("memepad.jetton.slippage.error_message.too_high") : ""),
        a = () => {
          h.value || (e.jettonTrading.updateSlippage(parseFloat(r.value)), s("slippage-updated"))
        };
      return (c, u) => {
        const d = Cn,
          m = Yi,
          f = Ut,
          p = jn;
        return g(), A(p, {
          class: "memepad-jetton-action-controls-slippage-modal"
        }, {
          "top-center": F(() => [_("div", Xa, W(("t" in c ? c.t : v(R))("memepad.jetton.slippage.title")), 1)]),
          default: F(() => [_("div", Ha, [j(d, {
            ref_key: "actionControlsInputComp",
            ref: i,
            modelValue: v(r),
            "onUpdate:modelValue": u[0] || (u[0] = b => at(r) ? r.value = b : null),
            postfix: "%",
            modifier: b => ("formatFloatLine" in c ? c.formatFloatLine : v(Ve))(b, {
              join: "emptyFractional"
            }),
            onBlur: o
          }, null, 8, ["modelValue", "modifier"]), u[1] || (u[1] = _("div", {
            class: "subtitle-compensator"
          }, null, -1))])]),
          "bottom-action": F(() => [_("div", Ya, [v(h) ? (g(), A(m, {
            key: 0,
            "error-message": v(h)
          }, null, 8, ["error-message"])) : (g(), k("div", Ga, W(("t" in c ? c.t : v(R))("memepad.jetton.slippage.text")), 1)), j(f, {
            label: ("t" in c ? c.t : v(R))("memepad.jetton.slippage.done_btn"),
            fill: "",
            size: v(Et).LARGE,
            type: v(h) ? v(xt).HIGHLIGHT : v(xt).PRIMARY,
            disabled: !!v(h),
            onClick: a
          }, null, 8, ["label", "size", "type", "disabled"])])]),
          _: 1
        })
      }
    }
  }),
  tc = X(Qa, [
    ["__scopeId", "data-v-0736f852"]
  ]),
  ec = {
    class: "memepad-jetton-action-controls-trade-buttons"
  },
  sc = {
    class: "label"
  },
  ic = {
    class: "label"
  },
  nc = K({
    __name: "TradeButtons",
    props: {
      tradePendings: {}
    },
    emits: ["click"],
    setup(n) {
      return (t, e) => {
        const s = Ut;
        return g(), k("div", ec, [j(s, {
          class: "buy-button",
          type: v(xt).HIGHLIGHT,
          loading: t.tradePendings[v(G).BUY],
          onClick: e[0] || (e[0] = i => t.$emit("click", v(G).BUY))
        }, {
          default: F(() => [_("span", sc, W(("t" in t ? t.t : v(R))("memepad.jetton.buy_button_preview_label")), 1)]),
          _: 1
        }, 8, ["type", "loading"]), j(s, {
          class: "sell-button",
          type: v(xt).PINK,
          loading: t.tradePendings[v(G).SELL],
          onClick: e[1] || (e[1] = i => t.$emit("click", v(G).SELL))
        }, {
          default: F(() => [_("span", ic, W(("t" in t ? t.t : v(R))("memepad.jetton.sell_button_preview_label")), 1)]),
          _: 1
        }, 8, ["type", "loading"])])
      }
    }
  }),
  oc = X(nc, [
    ["__scopeId", "data-v-7976e3b5"]
  ]),
  rc = {
    class: "memepad-jetton-action-controls"
  },
  lc = K({
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
        i = N(G.BUY),
        o = Un({
          [G.BUY]: !1,
          [G.SELL]: !1
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
        const d = aa,
          m = Ka,
          f = tc,
          p = oc,
          b = Cs,
          y = js;
        return g(), k("div", rc, [j(y, null, {
          default: F(() => [j(b, {
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
            }, [c.jettonModalControls.isOpened(v(ht).TRADE) ? (g(), A(m, {
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
            }, null, 8, ["modelValue", "trade-pendings", "jetton", "jetton-information", "jetton-bcl-data", "balances", "jetton-management", "jetton-trading", "is-released", "unlock-enabled", "ton-usd-rate", "jetton-modal-controls"])) : it("", !0), c.jettonModalControls.isOpened(v(ht).SLIPPAGE) ? (g(), A(f, {
              key: 1,
              "jetton-trading": c.jettonTrading,
              "jetton-modal-controls": c.jettonModalControls,
              onSlippageUpdated: u[4] || (u[4] = M => c.jettonModalControls.update(v(ht).TRADE))
            }, null, 8, ["jetton-trading", "jetton-modal-controls"])) : it("", !0), j(p, {
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
  hc = X(lc, [
    ["__scopeId", "data-v-bacfcc1b"]
  ]),
  ac = {
    class: "memepad-jetton-page-trade"
  },
  cc = K({
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
        e = N(!1),
        s = E(() => {
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
        const r = fr,
          l = uo,
          h = ea,
          a = hc,
          c = Wi;
        return g(), k(st, null, [_("div", ac, [j(r, {
          jetton: i.jetton,
          "jetton-information": i.jettonInformation,
          "is-released": i.isReleased,
          onShare: o[0] || (o[0] = u => e.value = !0)
        }, null, 8, ["jetton", "jetton-information", "is-released"]), j(l, Fn(v(s), {
          class: "details"
        }), null, 16), j(h, {
          chart: i.jettonChart,
          "chart-interval": i.jettonChartInterval,
          "chart-type": i.jettonChartType,
          "update-chart-interval": i.updateJettonChartInterval,
          "update-chart-type": i.updateJettonChartType
        }, null, 8, ["chart", "chart-interval", "chart-type", "update-chart-interval", "update-chart-type"]), j(a, {
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
        }, null, 8, ["jetton", "jetton-information", "is-released", "unlock-enabled", "balances", "jetton-management", "jetton-trading", "ton-usd-rate", "jetton-modal-controls"])]), j(c, {
          modelValue: v(e),
          "onUpdate:modelValue": o[3] || (o[3] = u => at(e) ? e.value = u : null),
          "jetton-shortname": t.jetton.shortname,
          ticker: i.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64)
      }
    }
  }),
  uc = X(cc, [
    ["__scopeId", "data-v-a850878f"]
  ]),
  dc = {
    class: "memepad-jetton-header-short"
  },
  fc = {
    class: "ticker"
  },
  mc = K({
    __name: "HeaderShort",
    props: {
      jetton: {}
    },
    setup(n) {
      return (t, e) => {
        const s = ve;
        return g(), k("div", dc, [j(s, {
          src: v(pe)(t.jetton.iconFileKey),
          size: 28
        }, null, 8, ["src"]), _("div", fc, W(t.jetton.ticker), 1)])
      }
    }
  }),
  pc = X(mc, [
    ["__scopeId", "data-v-801b9d68"]
  ]),
  vc = {
    class: "memepad-jetton-transaction"
  },
  bc = {
    class: "user-avatar-wrapper"
  },
  gc = ["src"],
  _c = {
    key: 1,
    class: "user-avatar-empty"
  },
  wc = {
    class: "content"
  },
  yc = {
    key: 0,
    class: "name"
  },
  Mc = {
    key: 1,
    class: "user-address"
  },
  Sc = {
    class: "event-data"
  },
  kc = {
    class: "time"
  },
  Cc = {
    class: "values"
  },
  jc = {
    key: 0,
    class: "ton-price"
  },
  zc = {
    key: 1,
    class: "amount"
  },
  $c = K({
    __name: "Transaction",
    props: {
      transaction: {}
    },
    setup(n) {
      const t = n,
        e = E(() => {
          const o = Di(t.transaction.timestamp);
          return o.isDate ? o.label : R("base.time.ago", {
            time: o.label
          })
        }),
        s = E(() => R(`memepad.jetton.transactions.type.${t.transaction.type.toLowerCase()}`)),
        i = E(() => Bi(Jn(t.transaction.user.address)));
      return (o, r) => {
        const l = Ot;
        return g(), k("div", vc, [_("div", bc, [o.transaction.user.avatarUrl ? (g(), k("img", {
          key: 0,
          src: o.transaction.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, gc)) : (g(), k("div", _c, [j(l, {
          name: "space-invader",
          class: "icon"
        })]))]), _("div", wc, [o.transaction.user.nickname ? (g(), k("div", yc, W(o.transaction.user.nickname), 1)) : (g(), k("div", Mc, W(v(i)), 1)), _("div", Sc, [_("div", {
          class: Gt(["type", `is-${o.transaction.type.toLowerCase()}`])
        }, W(v(s)), 3), _("div", kc, W(v(e)), 1)])]), _("div", Cc, [o.transaction.amount ? (g(), k("div", jc, W(`${("formatTon"in o?o.formatTon:v(Ji))(o.transaction.amount,2)} TON`), 1)) : it("", !0), o.transaction.jettonAmount ? (g(), k("div", zc, W(`${("formatCount"in o?o.formatCount:v(Ki))(o.transaction.jettonAmount).full} ${o.transaction.ticker}`), 1)) : it("", !0)])])
      }
    }
  }),
  Lc = X($c, [
    ["__scopeId", "data-v-af7bb1f2"]
  ]),
  Tc = {
    class: "memepad-jetton-page-transactions"
  },
  Ec = K({
    __name: "Transactions",
    props: {
      transactions: {}
    },
    setup(n) {
      return (t, e) => {
        const s = Ae,
          i = Lc;
        return g(), k("div", Tc, [t.transactions ? (g(!0), k(st, {
          key: 1
        }, Tt(t.transactions.transactions, o => (g(), A(i, {
          key: o.user.address + o.timestamp,
          transaction: o
        }, null, 8, ["transaction"]))), 128)) : (g(), k(st, {
          key: 0
        }, Tt(3, o => _("div", {
          key: o,
          class: "skeleton"
        }, [j(s, {
          class: "image",
          rounded: ""
        }), j(s, {
          class: "title"
        }), j(s, {
          class: "value"
        })])), 64))])
      }
    }
  }),
  xc = X(Ec, [
    ["__scopeId", "data-v-3267f193"]
  ]),
  Pc = {
    class: "memepad-jetton-page-transactions"
  },
  Vc = K({
    __name: "PageTransactions",
    props: {
      jetton: {},
      jettonTransactions: {}
    },
    setup(n) {
      return (t, e) => {
        const s = pc,
          i = xc;
        return g(), k("div", Pc, [j(s, {
          jetton: t.jetton
        }, null, 8, ["jetton"]), j(i, {
          transactions: t.jettonTransactions
        }, null, 8, ["transactions"])])
      }
    }
  }),
  Rc = X(Vc, [
    ["__scopeId", "data-v-cd9e28c5"]
  ]),
  Ic = () => Ni().$webApp.openTelegramLink("https://t.me/BlumCrypto"),
  Wc = {
    class: "memepad-jetton page"
  },
  Bc = K({
    __name: "[shortname]",
    setup(n) {
      const t = (() => {
          const $ = Kn("shortname");
          if (!$) throw Ui("Jetton shortname is not provided");
          return $
        })(),
        {
          tonUsdRate: e,
          partnerAddresses: s
        } = fo(),
        {
          getManagementSdk: i,
          getBeforeDexTradingSdk: o,
          getDexTradingSdk: r
        } = mo(),
        l = Xn(),
        h = Hn(),
        a = ks(),
        c = Yn(),
        u = Ke(),
        d = Gn(),
        m = E(() => c.name === "memepad-jetton-shortname-transactions" ? _e.TRANSACTIONS : _e.TRADE),
        {
          jettonStaticState: f,
          ...p
        } = pt(),
        {
          jettonInformation: b,
          jettonTransactions: y,
          ...M
        } = St(),
        {
          jettonBclData: L,
          jettonBalance: C,
          jettonUnlockEnabled: V,
          ...S
        } = zt(),
        {
          jettonChart: T,
          jettonChartInterval: x,
          ...P
        } = tt(t),
        B = $t();
      po(() => c.name === "memepad-jetton-shortname-transactions" ? Ke().push({
        name: "memepad-jetton-shortname-trade"
      }) : B.state.value === ht.SLIPPAGE ? B.controls.update(ht.TRADE) : B.state.value === ht.TRADE ? B.controls.update(void 0) : Ke().push({
        name: "memepad"
      }));
      const Q = async () => {
        const $ = so("from", oo);
        a.memepad.memepadJettonPageOpen({
          source: $,
          jettonShortname: t,
          jettonId: f.value.status === "loaded" ? f.value.data.id : void 0
        }), $ && vo(), c.name === "memepad-jetton-shortname" && u.replace({
          name: "memepad-jetton-shortname-trade",
          params: {
            shortname: t
          }
        }), await io().getReferralToken(), await p.getMemepadJettonUntilOk.exec(), await M.init(), S.init(), P.init()
      }, ct = () => {
        p.destroy(), M.destroy(), P.destroy(), S.destroy()
      };
      Q(), Be(() => {
        ct(), d.internal.removeForceHideTabs()
      });
      const wt = async () => {
        await Promise.all([l.update(), M.update(), P.update(), S.update()])
      }, mt = async () => {
        await S.resetAndUpdateUnlocked()
      }, z = E(() => {
        var Y;
        if (f.value.status === "error") return {
          status: "error"
        };
        if (f.value.status === "loading" || !b.value || !s.value) return {
          status: "loading"
        };
        const $ = f.value.data;
        if (!$ || !b || b.value.status === we.IN_PROGRESS) return {
          status: "loading"
        };
        const I = $.address,
          U = [we.PUBLISHED_ON_DEX, we.LISTED_TO_DEX].includes(b.value.status),
          D = {
            jettonBalance: C.value ? vs(C.value, $.ticker) : void 0,
            tonBalance: l.wallet.value.status === "connected" ? (Y = l.wallet.value.balance) == null ? void 0 : Y.tonBalance.balance : void 0
          },
          q = Zn(qn, {
            address: s.value.partnerAddress,
            masterContractAddress: $.masterContractAddress.toString()
          }),
          O = i(q),
          H = U ? r(I) : o(I, q);
        return b.value.status === we.LISTED_TO_DEX ? {
          status: "moving_to_dex",
          jetton: $,
          jettonInformation: b.value,
          isReleased: !0,
          unlockEnabled: V.value,
          balances: D,
          jettonManagement: O,
          jettonTrading: H
        } : {
          status: "trade",
          jetton: $,
          jettonInformation: b.value,
          jettonBclData: L.value,
          jettonTransactions: y.value,
          jettonChart: T.value,
          jettonChartInterval: x.value,
          jettonChartType: P.jettonChartType.value,
          updateJettonChartInterval: P.updateChartInterval,
          updateJettonChartType: P.updateChartType,
          isReleased: U,
          unlockEnabled: V.value,
          balances: D,
          jettonManagement: O,
          jettonTrading: H,
          jettonModalControls: B.controls
        }
      });
      bt(() => B.state.value, $ => {
        $ ? d.internal.forceHideTabs() : d.internal.removeForceHideTabs()
      }), bt(() => z.value.status, ($, I) => {
        $ === "moving_to_dex" ? d.internal.forceHideTabs() : I === "moving_to_dex" && d.internal.removeForceHideTabs()
      });

      function pt() {
        const $ = Qn(() => new Map, "$LIXaimu3X5"),
          I = N({
            status: "loading"
          }),
          D = to(async () => {
            const O = $.value.get(t);
            if (O) return dt(O);
            const H = await ye.getMemepadJetton(t);
            return H.err ? ro() : ($.value.set(t, H.data), dt(H.data))
          }, O => I.value = {
            status: "loaded",
            data: O
          }, 2e4);
        return {
          destroy: () => {
            D.destroy(), I.value = {
              status: "loading"
            }
          },
          getMemepadJettonUntilOk: D,
          jettonStaticState: E(() => I.value)
        }
      }

      function St() {
        const $ = N(),
          I = N(),
          U = ee(async () => {
            const H = await ye.getMemepadJettonInformation(t),
              Y = await ye.getMemepadJettonTransactions(t);
            return dt({
              information: (Rt(H) ? H.data : $.value) || $.value,
              transactions: (Rt(Y) ? Y.data : I.value) || I.value
            })
          }, H => {
            $.value = H.information, I.value = H.transactions
          }, 5e3);
        return {
          init: async () => await U.exec(),
          destroy: () => {
            U.destroy(), $.value = void 0, I.value = void 0
          },
          update: async () => await U.exec(),
          jettonInformation: E(() => $.value),
          jettonTransactions: E(() => I.value)
        }
      }

      function tt($) {
        const I = N(),
          U = N(ne.ONE_MINUTE),
          D = N(ie.MARKET_CAP);
        let q = new AbortController;
        const O = () => {
            q.abort(), q = new AbortController
          },
          H = kt => {
            U.value = kt, ot.exec()
          },
          Y = kt => {
            D.value = kt, ot.exec()
          },
          ot = ee(async () => {
            O();
            const kt = await ye.getMemepadJettonChart($, {
              interval: U.value,
              type: D.value
            });
            return q.signal.aborted ? dt(I.value) : dt((Rt(kt) ? kt.data : I.value) || I.value)
          }, kt => I.value = kt, 5e3);
        return {
          init: async () => await ot.exec(),
          destroy: () => {
            ot.destroy(), I.value = void 0, U.value = ne.ONE_MINUTE
          },
          update: async () => await ot.exec(),
          updateChartInterval: H,
          updateChartType: Y,
          jettonChartInterval: E(() => U.value),
          jettonChartType: E(() => D.value),
          jettonChart: E(() => I.value)
        }
      }

      function zt() {
        const $ = N(),
          I = N(),
          U = N();
        let D, q, O, H, Y, ot;

        function Ds() {
          q = bt(z, lt => {
            lt.status === "error" || lt.status === "loading" || D || lt.jettonManagement && (q == null || q(), D = ee(async () => {
              if (z.value.status === "error" || z.value.status === "loading") return dt(void 0);
              const ut = z.value.jetton.address,
                te = await z.value.jettonManagement.getJettonBclData(ut);
              return dt((Rt(te) ? te.data : $.value) || $.value)
            }, ut => $.value = ut, 6e4), D == null || D.exec())
          }, {
            immediate: !0
          }), H = bt(z, lt => {
            lt.status === "error" || lt.status === "loading" || O || !lt.jettonTrading || h.value !== "connected" || (H == null || H(), O = ee(async () => {
              if (z.value.status === "error" || z.value.status === "loading" || !z.value.jettonTrading || h.value !== "connected") return dt(void 0);
              const ut = z.value.jetton.address,
                te = await z.value.jettonTrading.getUserJettonBalance(ut);
              return dt((Rt(te) ? te.data : I.value) || I.value)
            }, ut => I.value = ut, 6e4), O == null || O.exec())
          }, {
            immediate: !0
          }), ot = bt(z, lt => {
            lt.status === "error" || lt.status === "loading" || Y || !lt.jetton || !lt.balances.jettonBalance || !lt.isReleased || h.value !== "connected" || (ot == null || ot(), Y = ee(async () => {
              if (z.value.status === "error" || z.value.status === "loading" || !z.value.balances.jettonBalance || !z.value.isReleased || h.value !== "connected") return dt(void 0);
              if (z.value.balances.jettonBalance.value.isZero()) return dt(!1);
              const ut = await z.value.jettonManagement.getUnlockEnabled(z.value.jetton.address);
              return dt(Rt(ut) ? ut.data : U.value)
            }, ut => U.value = ut, 6e4), Y == null || Y.exec())
          }, {
            immediate: !0
          })
        }
        return {
          init: Ds,
          destroy: () => {
            q == null || q(), D == null || D.destroy(), H == null || H(), O == null || O.destroy(), ot == null || ot(), Y == null || Y.destroy(), $.value = void 0, I.value = void 0, U.value = void 0
          },
          update: async () => {
            await (D == null ? void 0 : D.exec()), await (O == null ? void 0 : O.exec()), await (Y == null ? void 0 : Y.exec())
          },
          resetAndUpdateUnlocked: async () => {
            U.value = void 0, await (Y == null ? void 0 : Y.exec())
          },
          jettonBclData: E(() => $.value),
          jettonBalance: E(() => I.value),
          jettonUnlockEnabled: E(() => U.value)
        }
      }

      function $t() {
        const $ = [ht.TRADE, ht.SLIPPAGE],
          I = N(void 0),
          U = {
            update: D => {
              I.value = D
            },
            isOpened: D => {
              if (!I.value) return !1;
              const q = $.indexOf(I.value),
                O = $.indexOf(D);
              return q >= O
            },
            value: E(() => I.value)
          };
        return {
          state: E(() => I.value),
          controls: U
        }
      }
      return ($, I) => {
        const U = Ln,
          D = Tn,
          q = Do,
          O = uc,
          H = Rc,
          Y = no;
        return g(), k("div", Wc, [v(z).status === "error" ? (g(), A(U, {
          key: 0,
          icon: ("imgResolver" in $ ? $.imgResolver : v(eo))("emoji/Collision"),
          title: ("t" in $ ? $.t : v(R))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in $ ? $.t : v(R))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in $ ? $.t : v(R))("memepad.jetton.error_screen.btn_label"),
          onButton: I[0] || (I[0] = ot => ("visitCommunity" in $ ? $.visitCommunity : v(Ic))())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : v(z).status === "loading" ? (g(), A(D, {
          key: 1
        })) : (g(), k(st, {
          key: 2
        }, [v(m) === v(_e).TRADE ? (g(), k(st, {
          key: 0
        }, [v(z).status === "moving_to_dex" ? (g(), A(q, {
          key: 0,
          jetton: v(z).jetton,
          "jetton-information": v(z).jettonInformation,
          "unlock-enabled": v(z).unlockEnabled,
          balances: v(z).balances,
          "jetton-management": v(z).jettonManagement,
          "is-released": ""
        }, null, 8, ["jetton", "jetton-information", "unlock-enabled", "balances", "jetton-management"])) : (g(), A(O, {
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
          onTradeSuccess: wt,
          onUnlockSuccess: mt
        }, null, 8, ["jetton", "jetton-information", "jetton-bcl-data", "jetton-chart", "jetton-chart-interval", "jetton-chart-type", "update-jetton-chart-interval", "update-jetton-chart-type", "is-released", "unlock-enabled", "jetton-management", "jetton-trading", "balances", "jetton-modal-controls", "ton-usd-rate"]))], 64)) : v(m) === v(_e).TRANSACTIONS ? (g(), A(H, {
          key: 1,
          jetton: v(z).jetton,
          "jetton-transactions": v(z).jettonTransactions
        }, null, 8, ["jetton", "jetton-transactions"])) : it("", !0)], 64)), j(Y)])
      }
    }
  }),
  Zc = X(Bc, [
    ["__scopeId", "data-v-b5f954f2"]
  ]);
export {
  Zc as
  default
};