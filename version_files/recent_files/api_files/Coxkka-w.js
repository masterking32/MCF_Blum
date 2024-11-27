import {
  _ as Cn
} from "./DhHmlXex.js";
import {
  _ as jn
} from "./CSlEO21f.js";
import {
  _ as zn
} from "./CNYhAsBO.js";
import {
  d as Z,
  F as T,
  ab as yi,
  r as D,
  o as Ie,
  a as _,
  c as L,
  b as w,
  e as m,
  m as R,
  x as H,
  t as I,
  f as $,
  B as Et,
  be as Pt,
  b9 as Ps,
  G as Le,
  C as Dt,
  j as q,
  k as j,
  a_ as ne,
  V as pt,
  A as Ln,
  a$ as We,
  bh as Vs,
  bi as et,
  n as Rt,
  aL as qt,
  g as ct,
  W as st,
  N as ue,
  az as oe,
  aA as Ee,
  M as En,
  aY as Rs,
  X as Jt,
  Y as Tt,
  aU as Is,
  aW as Ws,
  bj as Qt,
  bk as Zt,
  av as St,
  w as Te,
  bl as ui,
  bm as Wi,
  bn as Tn,
  P as Bs,
  ai as $e,
  bo as $n,
  bp as As,
  L as Ds,
  bq as di,
  br as xn,
  au as Pn,
  a8 as Vn,
  aC as Rn,
  af as xe,
  bs as G,
  b8 as Bi,
  bt as Ai,
  bu as In,
  b0 as Ns,
  am as Wn,
  an as fi,
  ah as Bn,
  ap as An,
  bv as Dn,
  aZ as Nn,
  bw as On,
  ao as Un,
  b2 as Fn,
  ay as Jn,
  J as Je,
  u as Kn,
  bx as me,
  by as pe,
  bz as Hn,
  bA as Xn,
  b6 as Yn,
  bB as Gn,
  a9 as Yt,
  ax as Zn,
  bC as qn,
  bD as Qn,
  aT as to,
  aV as eo,
  K as ve,
  bf as ft,
  bE as io
} from "./DK5KlhXV.js";
import {
  _ as Os,
  a as Us,
  b as Fs,
  c as Mi,
  m as so,
  s as no,
  d as oo,
  e as Js,
  f as ro,
  g as Ks,
  h as ho,
  i as lo
} from "./mhxLjxeg.js";
import {
  _ as Be
} from "./DAxbXggZ.js";
import {
  _ as Hs
} from "./Bi1HGdYx.js";
import {
  u as ao,
  a as co
} from "./Bv0biUN3.js";
import {
  u as uo
} from "./CSHt9DK6.js";
import {
  c as fo
} from "./DPbxm6ol.js";
import "./BcwYCnMP.js";
import "./B03tZgu7.js";
const mo = {
    class: "memepad-jetton-action-controls-unlock-button"
  },
  po = {
    class: "info"
  },
  vo = {
    class: "label"
  },
  bo = Z({
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
        i = T(() => e.jettonManagement.unlockStateControls.getState({
          tonBalance: e.balances.tonBalance,
          jettonBalance: e.balances.jettonBalance,
          jetton: e.jetton
        })),
        s = t,
        o = yi(),
        r = D(!1),
        h = e.jettonManagement.getWaitForUnlockStatus(e.jetton.address),
        l = async () => {
          if (a.value) return;
          const c = () => Le().bottom.error($("memepad.jetton.unlock.failed_alert", {
              ticker: e.jetton.ticker
            })),
            u = p => {
              o.memepad.memepadJettonUnlock({
                status: p,
                jettonId: e.jetton.id,
                jettonShortname: e.jetton.shortname,
                jettonAddress: e.jetton.address
              })
            };
          r.value = !0;
          const d = await e.jettonManagement.unlockWallet(e.jetton.address);
          if (!Pt(d)) {
            u("failed"), c();
            return
          }
          await Ps(2e4), await h.exec(d.data) ? (u("success"), s("unlocked"), Le().bottom.success($("memepad.jetton.unlock.success_alert", {
            ticker: e.jetton.ticker
          }))) : (u("failed"), c()), r.value = !1
        }, a = T(() => !!(r.value || !i.value.feesInfo));
      return Ie(() => {
        h.destroy()
      }), (c, u) => {
        var y, S;
        const d = Os,
          f = Be,
          p = Us,
          v = Fs,
          g = Dt;
        return _(), L("div", mo, [w("div", po, [m(i).balanceLabel ? (_(), R(d, {
          key: 0,
          balance: m(i).balanceLabel
        }, null, 8, ["balance"])) : (_(), R(f, {
          key: 1,
          class: "skeleton"
        })), m(i).feesInfo ? (_(), R(p, {
          key: 2,
          details: m(i).feesInfo.details,
          "total-label": m(i).feesInfo.totalLabel,
          "error-message": (y = m(i).error) == null ? void 0 : y.message
        }, null, 8, ["details", "total-label", "error-message"])) : (_(), R(f, {
          key: 3,
          class: "skeleton"
        }))]), (S = m(i).error) != null && S.notEnoughtTon ? (_(), R(v, {
          key: 0,
          "jetton-shortname": c.jetton.shortname,
          "jetton-address": c.jetton.address
        }, null, 8, ["jetton-shortname", "jetton-address"])) : (_(), R(g, {
          key: 1,
          fill: "",
          icon: "lock-open",
          "icon-align": "left",
          size: m(Et).LARGE,
          class: "button",
          loading: m(a),
          disabled: !!m(i).error,
          onClick: l
        }, {
          default: H(() => [w("div", vo, I(("t" in c ? c.t : m($))("memepad.jetton.unlock_btn", {
            ticker: c.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "loading", "disabled"]))])
      }
    }
  }),
  Si = q(bo, [
    ["__scopeId", "data-v-b8dbba79"]
  ]),
  go = {
    class: "memepad-jetton-moving-to-dex-page"
  },
  _o = {
    class: "content"
  },
  wo = {
    class: "image-wrapper"
  },
  yo = {
    class: "title"
  },
  Mo = {
    class: "subtitle"
  },
  So = {
    class: "wallet-and-button"
  },
  ko = Z({
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
        e = D(!1);
      return (i, s) => {
        const o = zn,
          r = Ln,
          h = We,
          l = Si,
          a = Dt,
          c = Mi,
          u = Hs,
          d = Vs;
        return _(), L("div", go, [j(o), w("div", _o, [w("div", wo, [j(r, {
          size: 342,
          name: "animations/Clover",
          class: "animation"
        }), j(h, {
          src: m(ne)(i.jetton.iconFileKey),
          size: 80
        }, null, 8, ["src"])]), w("div", yo, I(("t" in i ? i.t : m($))("memepad.moving_to_dex.title")), 1), w("div", Mo, I(("t" in i ? i.t : m($))("memepad.moving_to_dex.subtitle", {
          ticker: i.jetton.ticker
        })), 1)]), j(u, null, {
          default: H(() => [w("div", So, [j(c, {
            "force-loading": i.unlockEnabled === void 0 && i.isReleased
          }, {
            default: H(() => [i.unlockEnabled ? (_(), R(l, {
              key: 0,
              jetton: i.jetton,
              "jetton-information": i.jettonInformation,
              balances: i.balances,
              "jetton-management": i.jettonManagement,
              onUnlocked: s[0] || (s[0] = f => i.$emit("unlock-success"))
            }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])) : (_(), R(a, {
              key: 1,
              label: ("t" in i ? i.t : m($))("memepad.jetton.share_token_link"),
              fill: "",
              size: m(Et).LARGE,
              onClick: s[1] || (s[1] = f => e.value = !0)
            }, null, 8, ["label", "size"]))]),
            _: 1
          }, 8, ["force-loading"])])]),
          _: 1
        }), j(d, {
          modelValue: m(e),
          "onUpdate:modelValue": s[2] || (s[2] = f => pt(e) ? e.value = f : null),
          "jetton-shortname": t.jetton.shortname,
          ticker: i.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])])
      }
    }
  }),
  Co = q(ko, [
    ["__scopeId", "data-v-08f5fe7f"]
  ]),
  jo = {
    class: "inner"
  },
  zo = {
    class: "inner"
  },
  Lo = Z({
    __name: "HeaderImage",
    props: {
      jetton: {},
      jettonModalControls: {}
    },
    setup(n) {
      const t = n,
        e = T({
          get() {
            return t.jettonModalControls.isOpened(et.IMAGE_PREVIEW)
          },
          set(u) {
            u ? t.jettonModalControls.update(et.IMAGE_PREVIEW) : t.jettonModalControls.update(void 0)
          }
        }),
        i = D(null),
        s = D({
          start: void 0,
          current: void 0,
          touchFree: !0
        }),
        o = T(() => s.value.start === void 0 || s.value.current === void 0 ? 0 : Math.max(s.value.current - s.value.start, 0)),
        r = T(() => {
          const u = o.value,
            f = window.innerHeight / 2;
          return Math.abs(u) / f
        }),
        h = T(() => 1 - r.value),
        l = u => {
          u.preventDefault();
          const d = u.touches[0];
          s.value = {
            start: d.clientY,
            current: d.clientY,
            touchFree: !1
          }
        },
        a = u => {
          u.preventDefault();
          const d = u.touches[0];
          s.value.current = d.clientY
        },
        c = u => {
          u.preventDefault(), h.value < .3 && (e.value = !1), s.value = {
            start: void 0,
            current: void 0,
            touchFree: !0
          }
        };
      return (u, d) => {
        const f = We,
          p = ue;
        return _(), L(st, null, [w("div", {
          class: Rt(["memepad-jetton-header-image", {
            "is-modal-opened": m(e)
          }]),
          style: qt({
            "--move-percent": Math.min(m(r) * 100, 100)
          })
        }, [w("div", jo, [j(f, {
          src: m(ne)(u.jetton.iconFileKey),
          size: 36,
          onClick: d[0] || (d[0] = v => e.value = !0)
        }, null, 8, ["src"])])], 6), m(e) ? (_(), L("div", {
          key: 0,
          class: Rt(["memepad-jetton-header-modal-image", {
            "touch-free": m(s).touchFree
          }]),
          style: qt({
            "--opacity": m(h)
          })
        }, [w("div", zo, [w("button", {
          type: "button",
          class: "close-btn reset",
          onClick: d[1] || (d[1] = v => e.value = !1)
        }, [j(p, {
          name: "close-md",
          class: "icon"
        })]), w("div", {
          ref_key: "wrapperEl",
          ref: i,
          class: "wrapper",
          style: qt({
            "--diff": m(o)
          }),
          onTouchstart: l,
          onTouchmove: a,
          onTouchend: c
        }, [j(f, {
          src: m(ne)(u.jetton.iconFileKey),
          "full-width": ""
        }, null, 8, ["src"])], 36)])], 6)) : ct("", !0)], 64)
      }
    }
  }),
  Xs = q(Lo, [
    ["__scopeId", "data-v-27c6a740"]
  ]),
  Eo = {
    class: "header"
  },
  To = {
    class: "name"
  },
  $o = {
    class: "inner"
  },
  xo = {
    key: 0
  },
  Po = {
    class: "info"
  },
  Vo = {
    class: "address"
  },
  Ro = {
    class: "label"
  },
  Io = {
    key: 0,
    class: "nsfw"
  },
  Wo = {
    class: "label"
  },
  Bo = {
    class: "description"
  },
  Ao = {
    key: 1,
    class: "socials"
  },
  Do = ["onClick"],
  No = {
    class: "label"
  },
  Oo = {
    class: "buttons"
  },
  Uo = Z({
    __name: "InfoSheet",
    props: oe({
      jetton: {}
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: oe(["share"], ["update:modelValue"]),
    setup(n, {
      emit: t
    }) {
      const e = n,
        i = t,
        s = T(() => {
          var l;
          return (l = e.jetton.socials) == null ? void 0 : l.map(a => ({
            ...a,
            ...so(a.type)
          }))
        }),
        o = Ee(n, "modelValue"),
        {
          copy: r
        } = En(),
        h = () => {
          o.value = !1, i("share")
        };
      return (l, a) => {
        const c = We,
          u = oo,
          d = ue,
          f = Dt,
          p = Is;
        return _(), R(p, {
          modelValue: o.value,
          "onUpdate:modelValue": a[2] || (a[2] = v => o.value = v),
          class: "memepad-jetton-info-sheet",
          "no-header-line": ""
        }, {
          title: H(() => [w("div", Eo, [j(c, {
            src: m(ne)(l.jetton.iconFileKey),
            size: 24
          }, null, 8, ["src"]), w("span", To, I(l.jetton.name), 1)])]),
          default: H(() => {
            var v;
            return [w("div", $o, [l.jetton.bannerFileKey ? (_(), L("div", xo, [j(u, {
              "banner-file-key": l.jetton.bannerFileKey,
              class: "banner"
            }, null, 8, ["banner-file-key"])])) : ct("", !0), w("div", Po, [w("div", Vo, [w("span", Ro, I(("t" in l ? l.t : m($))("memepad.jetton.info_sheet.address_label", {
              address: ("sliceWalletAddress" in l ? l.sliceWalletAddress : m(Rs))(l.jetton.address)
            })), 1), w("button", {
              type: "button",
              class: "reset copy-button",
              onClick: a[0] || (a[0] = g => m(r)(l.jetton.address))
            }, [j(d, {
              name: "edit-copy",
              class: "icon"
            })])]), l.jetton.isNSFW ? (_(), L("div", Io, [j(d, {
              name: "circle-check-white",
              class: "icon"
            }), w("span", Wo, I(("t" in l ? l.t : m($))("memepad.jetton.nsfw")), 1)])) : ct("", !0)]), w("div", Bo, I(l.jetton.description), 1), (v = m(s)) != null && v.length ? (_(), L("div", Ao, [(_(!0), L(st, null, Jt(m(s), g => (_(), L("button", {
              key: g.type,
              type: "button",
              class: "item reset",
              onClick: y => m(no)(g.type, g.url)
            }, [j(d, {
              name: g.icon,
              class: "icon"
            }, null, 8, ["name"]), w("div", No, I(g.url), 1)], 8, Do))), 128))])) : ct("", !0), w("div", Oo, [j(f, {
              label: ("t" in l ? l.t : m($))("memepad.jetton.share_token_link"),
              fill: "",
              size: m(Et).LARGE,
              type: m(Tt).SECONDARY,
              onClick: h
            }, null, 8, ["label", "size", "type"]), j(f, {
              label: ("t" in l ? l.t : m($))("base.got_it"),
              fill: "",
              size: m(Et).LARGE,
              onClick: a[1] || (a[1] = g => o.value = !1)
            }, null, 8, ["label", "size"])])])]
          }),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  Fo = q(Uo, [
    ["__scopeId", "data-v-f5a2d880"]
  ]),
  Jo = {
    class: "memepad-jetton-header"
  },
  Ko = {
    class: "jetton"
  },
  Ho = {
    class: "info"
  },
  Xo = {
    class: "info-top"
  },
  Yo = {
    class: "ticker"
  },
  Go = {
    key: 0,
    class: "spotlight"
  },
  Zo = {
    class: "info-bottom"
  },
  qo = {
    class: "right"
  },
  Qo = Z({
    __name: "Header",
    props: {
      jetton: {},
      jettonInformation: {},
      isReleased: {
        type: Boolean
      },
      jettonModalControls: {}
    },
    emits: ["share"],
    setup(n) {
      const t = n,
        e = D(!1),
        i = T(() => {
          const s = Ws(t.jetton.releaseTimestamp).label;
          return t.isReleased ? `${s} • STON.fi` : s
        });
      return (s, o) => {
        var a;
        const r = Xs,
          h = ue,
          l = Fo;
        return _(), L("div", Jo, [w("div", Ko, [j(r, {
          "jetton-modal-controls": s.jettonModalControls,
          jetton: s.jetton
        }, null, 8, ["jetton-modal-controls", "jetton"]), w("div", Ho, [w("div", Xo, [w("div", Yo, I(s.jetton.ticker), 1), (a = s.jettonInformation) != null && a.inSpotlight ? (_(), L("div", Go, [j(h, {
          name: "fire",
          class: "icon"
        }), o[4] || (o[4] = w("span", {
          class: "label"
        }, "Spotlight", -1))])) : ct("", !0)]), w("div", Zo, I(m(i)), 1)])]), w("div", qo, [w("button", {
          type: "button",
          class: "reset share",
          onClick: o[0] || (o[0] = c => s.$emit("share"))
        }, [w("span", null, I(("t" in s ? s.t : m($))("base.share")), 1)]), w("button", {
          type: "button",
          class: "reset info",
          onClick: o[1] || (o[1] = c => e.value = !0)
        }, [j(h, {
          name: "info",
          class: "icon"
        })])]), j(l, {
          modelValue: m(e),
          "onUpdate:modelValue": o[2] || (o[2] = c => pt(e) ? e.value = c : null),
          jetton: s.jetton,
          onShare: o[3] || (o[3] = c => s.$emit("share"))
        }, null, 8, ["modelValue", "jetton"])])
      }
    }
  }),
  tr = q(Qo, [
    ["__scopeId", "data-v-efec3a85"]
  ]);

function F(n) {
  var t = n.width,
    e = n.height;
  if (t < 0) throw new Error("Negative width is not allowed for Size");
  if (e < 0) throw new Error("Negative height is not allowed for Size");
  return {
    width: t,
    height: e
  }
}

function Vt(n, t) {
  return n.width === t.width && n.height === t.height
}
var er = function() {
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
      i = {
        next: t
      };
    return this._observers.push(i), {
      unsubscribe: function() {
        e._observers = e._observers.filter(function(s) {
          return s !== i
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

function ir(n) {
  return new er(n)
}
var sr = function() {
  function n(t, e, i) {
    var s;
    this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = t, this._canvasElementClientSize = F({
      width: this._canvasElement.clientWidth,
      height: this._canvasElement.clientHeight
    }), this._transformBitmapSize = e ?? function(o) {
      return o
    }, this._allowResizeObserver = (s = i == null ? void 0 : i.allowResizeObserver) !== null && s !== void 0 ? s : !0, this._chooseAndInitObserver()
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
      return F({
        width: this.canvasElement.width,
        height: this.canvasElement.height
      })
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.resizeCanvasElement = function(t) {
    this._canvasElementClientSize = F(t), this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px"), this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px"), this._invalidateBitmapSize()
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
    Vt(e, t) || (this.canvasElement.width = t.width, this.canvasElement.height = t.height, this._emitBitmapSizeChanged(e, t))
  }, n.prototype._emitBitmapSizeChanged = function(t, e) {
    var i = this;
    this._bitmapSizeChangedListeners.forEach(function(s) {
      return s.call(i, t, e)
    })
  }, n.prototype._suggestNewBitmapSize = function(t) {
    var e = this._suggestedBitmapSize,
      i = F(this._transformBitmapSize(t, this._canvasElementClientSize)),
      s = Vt(this.bitmapSize, i) ? null : i;
    e === null && s === null || e !== null && s !== null && Vt(e, s) || (this._suggestedBitmapSize = s, this._emitSuggestedBitmapSizeChanged(e, s))
  }, n.prototype._emitSuggestedBitmapSizeChanged = function(t, e) {
    var i = this;
    this._suggestedBitmapSizeChangedListeners.forEach(function(s) {
      return s.call(i, t, e)
    })
  }, n.prototype._chooseAndInitObserver = function() {
    var t = this;
    if (!this._allowResizeObserver) {
      this._initDevicePixelRatioObservable();
      return
    }
    or().then(function(e) {
      return e ? t._initResizeObserver() : t._initDevicePixelRatioObservable()
    })
  }, n.prototype._initDevicePixelRatioObservable = function() {
    var t = this;
    if (this._canvasElement !== null) {
      var e = Di(this._canvasElement);
      if (e === null) throw new Error("No window is associated with the canvas");
      this._devicePixelRatioObservable = ir(e), this._devicePixelRatioObservable.subscribe(function() {
        return t._invalidateBitmapSize()
      }), this._invalidateBitmapSize()
    }
  }, n.prototype._invalidateBitmapSize = function() {
    var t, e;
    if (this._canvasElement !== null) {
      var i = Di(this._canvasElement);
      if (i !== null) {
        var s = (e = (t = this._devicePixelRatioObservable) === null || t === void 0 ? void 0 : t.value) !== null && e !== void 0 ? e : i.devicePixelRatio,
          o = this._canvasElement.getClientRects(),
          r = o[0] !== void 0 ? rr(o[0], s) : F({
            width: this._canvasElementClientSize.width * s,
            height: this._canvasElementClientSize.height * s
          });
        this._suggestNewBitmapSize(r)
      }
    }
  }, n.prototype._initResizeObserver = function() {
    var t = this;
    this._canvasElement !== null && (this._canvasElementResizeObserver = new ResizeObserver(function(e) {
      var i = e.find(function(r) {
        return r.target === t._canvasElement
      });
      if (!(!i || !i.devicePixelContentBoxSize || !i.devicePixelContentBoxSize[0])) {
        var s = i.devicePixelContentBoxSize[0],
          o = F({
            width: s.inlineSize,
            height: s.blockSize
          });
        t._suggestNewBitmapSize(o)
      }
    }), this._canvasElementResizeObserver.observe(this._canvasElement, {
      box: "device-pixel-content-box"
    }))
  }, n
}();

function nr(n, t) {
  if (t.type === "device-pixel-content-box") return new sr(n, t.transform, t.options);
  throw new Error("Unsupported binding target")
}

function Di(n) {
  return n.ownerDocument.defaultView
}

function or() {
  return new Promise(function(n) {
    var t = new ResizeObserver(function(e) {
      n(e.every(function(i) {
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

function rr(n, t) {
  return F({
    width: Math.round(n.left * t + n.width * t) - Math.round(n.left * t),
    height: Math.round(n.top * t + n.height * t) - Math.round(n.top * t)
  })
}
var hr = function() {
  function n(t, e, i) {
    if (e.width === 0 || e.height === 0) throw new TypeError("Rendering target could only be created on a media with positive width and height");
    if (this._mediaSize = e, i.width === 0 || i.height === 0) throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
    this._bitmapSize = i, this._context = t
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

function It(n, t) {
  var e = n.canvasElementClientSize;
  if (e.width === 0 || e.height === 0) return null;
  var i = n.bitmapSize;
  if (i.width === 0 || i.height === 0) return null;
  var s = n.canvasElement.getContext("2d", t);
  return s === null ? null : new hr(s, e, i)
}
/*!
 * @license
 * TradingView Lightweight Charts™ v4.2.1
 * Copyright (c) 2024 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
const lr = {
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
  ar = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    openVisible: !0,
    thinBars: !0
  },
  cr = {
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
  ur = {
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
  dr = {
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
  fr = {
    color: "#26a69a",
    base: 0
  },
  Ys = {
    color: "#2196f3"
  },
  Gs = {
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
var Ni, Pe;

function Wt(n, t) {
  const e = {
    0: [],
    1: [n.lineWidth, n.lineWidth],
    2: [2 * n.lineWidth, 2 * n.lineWidth],
    3: [6 * n.lineWidth, 6 * n.lineWidth],
    4: [n.lineWidth, 4 * n.lineWidth]
  } [t];
  n.setLineDash(e)
}

function Zs(n, t, e, i) {
  n.beginPath();
  const s = n.lineWidth % 2 ? .5 : 0;
  n.moveTo(e, t + s), n.lineTo(i, t + s), n.stroke()
}

function $t(n, t) {
  if (!n) throw new Error("Assertion failed" + (t ? ": " + t : ""))
}

function nt(n) {
  if (n === void 0) throw new Error("Value is undefined");
  return n
}

function b(n) {
  if (n === null) throw new Error("Value is null");
  return n
}

function Ot(n) {
  return b(nt(n))
}(function(n) {
  n[n.Simple = 0] = "Simple", n[n.WithSteps = 1] = "WithSteps", n[n.Curved = 2] = "Curved"
})(Ni || (Ni = {})),
function(n) {
  n[n.Solid = 0] = "Solid", n[n.Dotted = 1] = "Dotted", n[n.Dashed = 2] = "Dashed", n[n.LargeDashed = 3] = "LargeDashed", n[n.SparseDotted = 4] = "SparseDotted"
}(Pe || (Pe = {}));
const Oi = {
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

function qs(n) {
  return n <= 0 || n > 1 ? Math.min(Math.max(n, 0), 1) : Math.round(1e4 * n) / 1e4
}
const mr = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
  pr = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
  vr = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
  br = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;

function re(n) {
  (n = n.toLowerCase()) in Oi && (n = Oi[n]);
  {
    const t = br.exec(n) || vr.exec(n);
    if (t) return [mt(parseInt(t[1], 10)), mt(parseInt(t[2], 10)), mt(parseInt(t[3], 10)), qs(t.length < 5 ? 1 : parseFloat(t[4]))]
  } {
    const t = pr.exec(n);
    if (t) return [mt(parseInt(t[1], 16)), mt(parseInt(t[2], 16)), mt(parseInt(t[3], 16)), 1]
  } {
    const t = mr.exec(n);
    if (t) return [mt(17 * parseInt(t[1], 16)), mt(17 * parseInt(t[2], 16)), mt(17 * parseInt(t[3], 16)), 1]
  }
  throw new Error(`Cannot parse color: ${n}`)
}

function Qs(n) {
  return .199 * n[0] + .687 * n[1] + .114 * n[2]
}

function Ae(n) {
  const t = re(n);
  return {
    t: `rgb(${t[0]}, ${t[1]}, ${t[2]})`,
    i: Qs(t) > 160 ? "black" : "white"
  }
}
class X {
  constructor() {
    this.h = []
  }
  l(t, e, i) {
    const s = {
      o: t,
      _: e,
      u: i === !0
    };
    this.h.push(s)
  }
  v(t) {
    const e = this.h.findIndex(i => t === i.o);
    e > -1 && this.h.splice(e, 1)
  }
  p(t) {
    this.h = this.h.filter(e => e._ !== t)
  }
  m(t, e, i) {
    const s = [...this.h];
    this.h = this.h.filter(o => !o.u), s.forEach(o => o.o(t, e, i))
  }
  M() {
    return this.h.length > 0
  }
  S() {
    this.h = []
  }
}

function bt(n, ...t) {
  for (const e of t)
    for (const i in e) e[i] !== void 0 && (typeof e[i] != "object" || n[i] === void 0 || Array.isArray(e[i]) ? n[i] = e[i] : bt(n[i], e[i]));
  return n
}

function wt(n) {
  return typeof n == "number" && isFinite(n)
}

function he(n) {
  return typeof n == "number" && n % 1 == 0
}

function de(n) {
  return typeof n == "string"
}

function be(n) {
  return typeof n == "boolean"
}

function kt(n) {
  const t = n;
  if (!t || typeof t != "object") return t;
  let e, i, s;
  for (i in e = Array.isArray(t) ? [] : {}, t) t.hasOwnProperty(i) && (s = t[i], e[i] = s && typeof s == "object" ? kt(s) : s);
  return e
}

function gr(n) {
  return n !== null
}

function le(n) {
  return n === null ? void 0 : n
}
const ki = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";

function Kt(n, t, e) {
  return t === void 0 && (t = ki), `${e=e!==void 0?`${e} `:""}${n}px ${t}`
}
class _r {
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
    return t.P === e && t.D === i || (t.P = e, t.D = i, t.R = Kt(e, i), t.L = 2.5 / 12 * e, t.B = t.L, t.A = e / 12 * t.T, t.I = e / 12 * t.T, t.N = 0), t.V = this.$(), t.O = this.U(), this.k
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
class Ci {
  constructor() {
    this.Y = []
  }
  Z(t) {
    this.Y = t
  }
  X(t, e, i) {
    this.Y.forEach(s => {
      s.X(t, e, i)
    })
  }
}
class gt {
  X(t, e, i) {
    t.useBitmapCoordinateSpace(s => this.K(s, e, i))
  }
}
class wr extends gt {
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
    const s = this.G.tt,
      o = this.G,
      r = Math.max(1, Math.floor(e)) % 2 / 2,
      h = l => {
        t.beginPath();
        for (let a = s.to - 1; a >= s.from; --a) {
          const c = o.it[a],
            u = Math.round(c.nt * e) + r,
            d = c.st * i,
            f = l * i + r;
          t.moveTo(u, d), t.arc(u, d, f, 0, 2 * Math.PI)
        }
        t.fill()
      };
    o.et > 0 && (t.fillStyle = o.rt, h(o.ht + o.et)), t.fillStyle = o.lt, h(o.ht)
  }
}

function yr() {
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
const Mr = {
  from: 0,
  to: 1
};
class Sr {
  constructor(t, e) {
    this.ut = new Ci, this.ct = [], this.dt = [], this.ft = !0, this.F = t, this.vt = e, this.ut.Z(this.ct)
  }
  bt(t) {
    const e = this.F.wt();
    e.length !== this.ct.length && (this.dt = e.map(yr), this.ct = this.dt.map(i => {
      const s = new wr;
      return s.J(i), s
    }), this.ut.Z(this.ct)), this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.ut
  }
  Mt() {
    const t = this.vt.W().mode === 2,
      e = this.F.wt(),
      i = this.vt.xt(),
      s = this.F.St();
    e.forEach((o, r) => {
      var h;
      const l = this.dt[r],
        a = o.kt(i);
      if (t || a === null || !o.yt()) return void(l.tt = null);
      const c = b(o.Ct());
      l.lt = a.Tt, l.ht = a.ht, l.et = a.Pt, l.it[0]._t = a._t, l.it[0].st = o.Dt().Rt(a._t, c.Vt), l.rt = (h = a.Ot) !== null && h !== void 0 ? h : this.F.Bt(l.it[0].st / o.Dt().At()), l.it[0].ot = i, l.it[0].nt = s.It(i), l.tt = Mr
    })
  }
}
class kr extends gt {
  constructor(t) {
    super(), this.zt = t
  }
  K({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i,
    verticalPixelRatio: s
  }) {
    if (this.zt === null) return;
    const o = this.zt.Lt.yt,
      r = this.zt.Et.yt;
    if (!o && !r) return;
    const h = Math.round(this.zt.nt * i),
      l = Math.round(this.zt.st * s);
    t.lineCap = "butt", o && h >= 0 && (t.lineWidth = Math.floor(this.zt.Lt.et * i), t.strokeStyle = this.zt.Lt.V, t.fillStyle = this.zt.Lt.V, Wt(t, this.zt.Lt.Nt), function(a, c, u, d) {
      a.beginPath();
      const f = a.lineWidth % 2 ? .5 : 0;
      a.moveTo(c + f, u), a.lineTo(c + f, d), a.stroke()
    }(t, h, 0, e.height)), r && l >= 0 && (t.lineWidth = Math.floor(this.zt.Et.et * s), t.strokeStyle = this.zt.Et.V, t.fillStyle = this.zt.Et.V, Wt(t, this.zt.Et.Nt), Zs(t, l, 0, e.width))
  }
}
class Cr {
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
    }, this.Wt = new kr(this.Ft), this.jt = t
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.Wt
  }
  Mt() {
    const t = this.jt.yt(),
      e = b(this.jt.Ht()),
      i = e.$t().W().crosshair,
      s = this.Ft;
    if (i.mode === 2) return s.Et.yt = !1, void(s.Lt.yt = !1);
    s.Et.yt = t && this.jt.Ut(e), s.Lt.yt = t && this.jt.qt(), s.Et.et = i.horzLine.width, s.Et.Nt = i.horzLine.style, s.Et.V = i.horzLine.color, s.Lt.et = i.vertLine.width, s.Lt.Nt = i.vertLine.style, s.Lt.V = i.vertLine.color, s.nt = this.jt.Yt(), s.st = this.jt.Zt()
  }
}

function jr(n, t, e, i, s, o) {
  n.fillRect(t + o, e, i - 2 * o, o), n.fillRect(t + o, e + s - o, i - 2 * o, o), n.fillRect(t, e, o, s), n.fillRect(t + i - o, e, o, s)
}

function De(n, t, e, i, s, o) {
  n.save(), n.globalCompositeOperation = "copy", n.fillStyle = o, n.fillRect(t, e, i, s), n.restore()
}

function Ui(n, t, e, i, s, o) {
  n.beginPath(), n.roundRect ? n.roundRect(t, e, i, s, o) : (n.lineTo(t + i - o[1], e), o[1] !== 0 && n.arcTo(t + i, e, t + i, e + o[1], o[1]), n.lineTo(t + i, e + s - o[2]), o[2] !== 0 && n.arcTo(t + i, e + s, t + i - o[2], e + s, o[2]), n.lineTo(t + o[3], e + s), o[3] !== 0 && n.arcTo(t, e + s, t, e + s - o[3], o[3]), n.lineTo(t, e + o[0]), o[0] !== 0 && n.arcTo(t, e, t + o[0], e, o[0]))
}

function Fi(n, t, e, i, s, o, r = 0, h = [0, 0, 0, 0], l = "") {
  if (n.save(), !r || !l || l === o) return Ui(n, t, e, i, s, h), n.fillStyle = o, n.fill(), void n.restore();
  const a = r / 2;
  var c;
  Ui(n, t + a, e + a, i - r, s - r, (c = -a, h.map(u => u === 0 ? u : u + c))), o !== "transparent" && (n.fillStyle = o, n.fill()), l !== "transparent" && (n.lineWidth = r, n.strokeStyle = l, n.closePath(), n.stroke()), n.restore()
}

function tn(n, t, e, i, s, o, r) {
  n.save(), n.globalCompositeOperation = "copy";
  const h = n.createLinearGradient(0, 0, 0, s);
  h.addColorStop(0, o), h.addColorStop(1, r), n.fillStyle = h, n.fillRect(t, e, i, s), n.restore()
}
class Ji {
  constructor(t, e) {
    this.J(t, e)
  }
  J(t, e) {
    this.zt = t, this.Xt = e
  }
  At(t, e) {
    return this.zt.yt ? t.P + t.L + t.B : 0
  }
  X(t, e, i, s) {
    if (!this.zt.yt || this.zt.Kt.length === 0) return;
    const o = this.zt.V,
      r = this.Xt.t,
      h = t.useBitmapCoordinateSpace(l => {
        const a = l.context;
        a.font = e.R;
        const c = this.Gt(l, e, i, s),
          u = c.Jt;
        return c.Qt ? Fi(a, u.ti, u.ii, u.ni, u.si, r, u.ei, [u.ht, 0, 0, u.ht], r) : Fi(a, u.ri, u.ii, u.ni, u.si, r, u.ei, [0, u.ht, u.ht, 0], r), this.zt.hi && (a.fillStyle = o, a.fillRect(u.ri, u.li, u.ai - u.ri, u.oi)), this.zt._i && (a.fillStyle = e.O, a.fillRect(c.Qt ? u.ui - u.ei : 0, u.ii, u.ei, u.ci - u.ii)), c
      });
    t.useMediaCoordinateSpace(({
      context: l
    }) => {
      const a = h.di;
      l.font = e.R, l.textAlign = h.Qt ? "right" : "left", l.textBaseline = "middle", l.fillStyle = o, l.fillText(this.zt.Kt, a.fi, (a.ii + a.ci) / 2 + a.pi)
    })
  }
  Gt(t, e, i, s) {
    var o;
    const {
      context: r,
      bitmapSize: h,
      mediaSize: l,
      horizontalPixelRatio: a,
      verticalPixelRatio: c
    } = t, u = this.zt.hi || !this.zt.mi ? e.T : 0, d = this.zt.bi ? e.C : 0, f = e.L + this.Xt.wi, p = e.B + this.Xt.gi, v = e.A, g = e.I, y = this.zt.Kt, S = e.P, V = i.Mi(r, y), P = Math.ceil(i.xi(r, y)), O = S + f + p, M = e.C + v + g + P + u, z = Math.max(1, Math.floor(c));
    let E = Math.round(O * c);
    E % 2 != z % 2 && (E += 1);
    const W = d > 0 ? Math.max(1, Math.floor(d * a)) : 0,
      A = Math.round(M * a),
      it = Math.round(u * a),
      ot = (o = this.Xt.Si) !== null && o !== void 0 ? o : this.Xt.ki,
      ut = Math.round(ot * c) - Math.floor(.5 * c),
      lt = Math.floor(ut + z / 2 - E / 2),
      k = lt + E,
      vt = s === "right",
      yt = vt ? l.width - d : d,
      Q = vt ? h.width - W : W;
    let jt, zt, C;
    return vt ? (jt = Q - A, zt = Q - it, C = yt - u - v - d) : (jt = Q + A, zt = Q + it, C = yt + u + v), {
      Qt: vt,
      Jt: {
        ii: lt,
        li: ut,
        ci: k,
        ni: A,
        si: E,
        ht: 2 * a,
        ei: W,
        ti: jt,
        ri: Q,
        ai: zt,
        oi: z,
        ui: h.width
      },
      di: {
        ii: lt / c,
        ci: k / c,
        fi: C,
        pi: V
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
    }, this.ft = !0, this.Pi = new(t || Ji)(this.Ci, this.yi), this.Ri = new(t || Ji)(this.Ti, this.yi)
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
class zr extends Ne {
  constructor(t, e, i) {
    super(), this.jt = t, this.Li = e, this.Ei = i
  }
  zi(t, e, i) {
    if (t.yt = !1, this.jt.W().mode === 2) return;
    const s = this.jt.W().horzLine;
    if (!s.labelVisible) return;
    const o = this.Li.Ct();
    if (!this.jt.yt() || this.Li.Ni() || o === null) return;
    const r = Ae(s.labelBackgroundColor);
    i.t = r.t, t.V = r.i;
    const h = 2 / 12 * this.Li.P();
    i.wi = h, i.gi = h;
    const l = this.Ei(this.Li);
    i.ki = l.ki, t.Kt = this.Li.Fi(l._t, o), t.yt = !0
  }
}
const Lr = /[1-9]/g;
class en {
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
    }) => (d.font = e.R, Math.round(e.Wi.xi(d, b(this.zt).Kt, Lr))));
    if (i <= 0) return;
    const s = e.ji,
      o = i + 2 * s,
      r = o / 2,
      h = this.zt.Hi;
    let l = this.zt.ki,
      a = Math.floor(l - r) + .5;
    a < 0 ? (l += Math.abs(0 - a), a = Math.floor(l - r) + .5) : a + o > h && (l -= Math.abs(h - (a + o)), a = Math.floor(l - r) + .5);
    const c = a + o,
      u = Math.ceil(0 + e.C + e.T + e.L + e.P + e.B);
    t.useBitmapCoordinateSpace(({
      context: d,
      horizontalPixelRatio: f,
      verticalPixelRatio: p
    }) => {
      const v = b(this.zt);
      d.fillStyle = v.t;
      const g = Math.round(a * f),
        y = Math.round(0 * p),
        S = Math.round(c * f),
        V = Math.round(u * p),
        P = Math.round(2 * f);
      if (d.beginPath(), d.moveTo(g, y), d.lineTo(g, V - P), d.arcTo(g, V, g + P, V, P), d.lineTo(S - P, V), d.arcTo(S, V, S, V - P, P), d.lineTo(S, y), d.fill(), v.hi) {
        const O = Math.round(v.ki * f),
          M = y,
          z = Math.round((M + e.T) * p);
        d.fillStyle = v.V;
        const E = Math.max(1, Math.floor(f)),
          W = Math.floor(.5 * f);
        d.fillRect(O - W, M, E, z - M)
      }
    }), t.useMediaCoordinateSpace(({
      context: d
    }) => {
      const f = b(this.zt),
        p = 0 + e.C + e.T + e.L + e.P / 2;
      d.font = e.R, d.textAlign = "left", d.textBaseline = "middle", d.fillStyle = f.V;
      const v = e.Wi.Mi(d, "Apr0");
      d.translate(a + s, p + v), d.fillText(f.Kt, 0, 0)
    })
  }
}
class Er {
  constructor(t, e, i) {
    this.ft = !0, this.Wt = new en, this.Ft = {
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
    const s = this.Ei();
    if (s === null) return;
    t.ki = s.ki;
    const o = i.Ui(this.vt.xt());
    t.Kt = i.qi(b(o)), t.yt = !0;
    const r = Ae(e.labelBackgroundColor);
    t.t = r.t, t.V = r.i, t.hi = i.W().ticksVisible
  }
}
class ji {
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
var mi;
(function(n) {
  n[n.Normal = 0] = "Normal", n[n.Magnet = 1] = "Magnet", n[n.Hidden = 2] = "Hidden"
})(mi || (mi = {}));
class Tr extends ji {
  constructor(t, e) {
    super(), this.tn = null, this.nn = NaN, this.sn = 0, this.en = !0, this.rn = new Map, this.hn = !1, this.ln = NaN, this.an = NaN, this._n = NaN, this.un = NaN, this.$i = t, this.cn = e, this.dn = new Sr(t, this), this.fn = ((s, o) => r => {
      const h = o(),
        l = s();
      if (r === b(this.tn).vn()) return {
        _t: l,
        ki: h
      };
      {
        const a = b(r.Ct());
        return {
          _t: r.pn(h, a),
          ki: h
        }
      }
    })(() => this.nn, () => this.an);
    const i = ((s, o) => () => {
      const r = this.$i.St().mn(s()),
        h = o();
      return r && Number.isFinite(h) ? {
        ot: r,
        ki: h
      } : null
    })(() => this.sn, () => this.Yt());
    this.bn = new Er(this, t, i), this.wn = new Cr(this)
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
    const s = this.ln,
      o = this.an,
      r = this.nn,
      h = this.sn,
      l = this.tn,
      a = this.On(i);
    this.sn = t, this.ln = isNaN(t) ? NaN : this.$i.St().It(t), this.tn = i;
    const c = a !== null ? a.Ct() : null;
    return a !== null && c !== null ? (this.nn = e, this.an = a.Rt(e, c)) : (this.nn = NaN, this.an = NaN), s !== this.ln || o !== this.an || h !== this.sn || r !== this.nn || l !== this.tn
  }
  Tn() {
    const t = this.$i.wt().map(i => i.In().An()).filter(gr),
      e = t.length === 0 ? null : Math.max(...t);
    this.sn = e !== null ? e : NaN
  }
  Dn(t, e, i) {
    let s = t.get(e);
    return s === void 0 && (s = new zr(this, e, i), t.set(e, s)), s
  }
}

function Oe(n) {
  return n === "left" || n === "right"
}
class tt {
  constructor(t) {
    this.zn = new Map, this.Ln = [], this.En = t
  }
  Nn(t, e) {
    const i = function(s, o) {
      return s === void 0 ? o : {
        Fn: Math.max(s.Fn, o.Fn),
        Wn: s.Wn || o.Wn
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
    return new tt(2)
  }
  static es() {
    return new tt(3)
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
const Ki = ".";

function Ct(n, t) {
  if (!wt(n)) return "n/a";
  if (!he(t)) throw new TypeError("invalid length");
  if (t < 0 || t > 16) throw new TypeError("invalid length");
  return t === 0 ? n.toString() : ("0000000000000000" + n.toString()).slice(-t)
}
class Ue {
  constructor(t, e) {
    if (e || (e = 1), wt(t) && he(t) || (t = 100), t < 0) throw new TypeError("invalid base");
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
      s = "";
    const o = this.os !== void 0 ? this.os : NaN;
    if (e > 1) {
      let r = +(Math.round(t * e) - i * e).toFixed(this.os);
      r >= e && (r -= e, i += 1), s = Ki + Ct(+r.toFixed(this.os) * this.rs, o)
    } else i = Math.round(i * e) / e, o > 0 && (s = Ki + Ct(0, o));
    return i.toFixed(0) + s
  }
}
class sn extends Ue {
  constructor(t = 100) {
    super(t)
  }
  format(t) {
    return `${super.format(t)}%`
  }
}
class $r {
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
    return e = (t = Math.round(t * i) / i) >= 1e-15 && t < 1 ? t.toFixed(this._s).replace(/\.?0+$/, "") : String(t), e.replace(/(\.[1-9]*)0+$/, (s, o) => o)
  }
}

function nn(n, t, e, i, s, o, r) {
  if (t.length === 0 || i.from >= t.length || i.to <= 0) return;
  const {
    context: h,
    horizontalPixelRatio: l,
    verticalPixelRatio: a
  } = n, c = t[i.from];
  let u = o(n, c),
    d = c;
  if (i.to - i.from < 2) {
    const f = s / 2;
    h.beginPath();
    const p = {
        nt: c.nt - f,
        st: c.st
      },
      v = {
        nt: c.nt + f,
        st: c.st
      };
    h.moveTo(p.nt * l, p.st * a), h.lineTo(v.nt * l, v.st * a), r(n, u, p, v)
  } else {
    const f = (v, g) => {
      r(n, u, d, g), h.beginPath(), u = v, d = g
    };
    let p = d;
    h.beginPath(), h.moveTo(c.nt * l, c.st * a);
    for (let v = i.from + 1; v < i.to; ++v) {
      p = t[v];
      const g = o(n, p);
      switch (e) {
        case 0:
          h.lineTo(p.nt * l, p.st * a);
          break;
        case 1:
          h.lineTo(p.nt * l, t[v - 1].st * a), g !== u && (f(g, p), h.lineTo(p.nt * l, t[v - 1].st * a)), h.lineTo(p.nt * l, p.st * a);
          break;
        case 2: {
          const [y, S] = xr(t, v - 1, v);
          h.bezierCurveTo(y.nt * l, y.st * a, S.nt * l, S.st * a, p.nt * l, p.st * a);
          break
        }
      }
      e !== 1 && g !== u && (f(g, p), h.moveTo(p.nt * l, p.st * a))
    }(d !== p || d === p && e === 1) && r(n, u, d, p)
  }
}
const Hi = 6;

function Ke(n, t) {
  return {
    nt: n.nt - t.nt,
    st: n.st - t.st
  }
}

function Xi(n, t) {
  return {
    nt: n.nt / t,
    st: n.st / t
  }
}

function xr(n, t, e) {
  const i = Math.max(0, t - 1),
    s = Math.min(n.length - 1, e + 1);
  var o, r;
  return [(o = n[t], r = Xi(Ke(n[e], n[i]), Hi), {
    nt: o.nt + r.nt,
    st: o.st + r.st
  }), Ke(n[e], Xi(Ke(n[s], n[t]), Hi))]
}

function Pr(n, t, e, i, s) {
  const {
    context: o,
    horizontalPixelRatio: r,
    verticalPixelRatio: h
  } = t;
  o.lineTo(s.nt * r, n * h), o.lineTo(i.nt * r, n * h), o.closePath(), o.fillStyle = e, o.fill()
}
class on extends gt {
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
      tt: s,
      cs: o,
      et: r,
      Nt: h,
      ds: l
    } = this.G, a = (e = this.G.fs) !== null && e !== void 0 ? e : this.G.vs ? 0 : t.mediaSize.height;
    if (s === null) return;
    const c = t.context;
    c.lineCap = "butt", c.lineJoin = "round", c.lineWidth = r, Wt(c, h), c.lineWidth = 1, nn(t, i, l, s, o, this.ps.bind(this), Pr.bind(null, a))
  }
}

function pi(n, t, e) {
  return Math.min(Math.max(n, t), e)
}

function ge(n, t, e) {
  return t - n <= e
}

function rn(n) {
  const t = Math.ceil(n);
  return t % 2 == 0 ? t - 1 : t
}
class zi {
  bs(t, e) {
    const i = this.ws,
      {
        gs: s,
        Ms: o,
        xs: r,
        Ss: h,
        ks: l,
        fs: a
      } = e;
    if (this.ys === void 0 || i === void 0 || i.gs !== s || i.Ms !== o || i.xs !== r || i.Ss !== h || i.fs !== a || i.ks !== l) {
      const c = t.context.createLinearGradient(0, 0, 0, l);
      if (c.addColorStop(0, s), a != null) {
        const u = pi(a * t.verticalPixelRatio / l, 0, 1);
        c.addColorStop(u, o), c.addColorStop(u, r)
      }
      c.addColorStop(1, h), this.ys = c, this.ws = e
    }
    return this.ys
  }
}
class Vr extends on {
  constructor() {
    super(...arguments), this.Cs = new zi
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

function Rr(n, t) {
  const e = n.context;
  e.strokeStyle = t, e.stroke()
}
class hn extends gt {
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
      cs: s,
      ds: o,
      et: r,
      Nt: h,
      Rs: l
    } = this.G;
    if (i === null) return;
    const a = t.context;
    a.lineCap = "butt", a.lineWidth = r * t.verticalPixelRatio, Wt(a, h), a.lineJoin = "round";
    const c = this.Ds.bind(this);
    o !== void 0 && nn(t, e, o, i, s, c, Rr), l && function(u, d, f, p, v) {
      const {
        horizontalPixelRatio: g,
        verticalPixelRatio: y,
        context: S
      } = u;
      let V = null;
      const P = Math.max(1, Math.floor(g)) % 2 / 2,
        O = f * y + P;
      for (let M = p.to - 1; M >= p.from; --M) {
        const z = d[M];
        if (z) {
          const E = v(u, z);
          E !== V && (S.beginPath(), V !== null && S.fill(), S.fillStyle = E, V = E);
          const W = Math.round(z.nt * g) + P,
            A = z.st * y;
          S.moveTo(W, A), S.arc(W, A, O, 0, 2 * Math.PI)
        }
      }
      S.fill()
    }(t, e, l, i, c)
  }
}
class ln extends hn {
  Ds(t, e) {
    return e.lt
  }
}

function an(n, t, e, i, s = 0, o = t.length) {
  let r = o - s;
  for (; 0 < r;) {
    const h = r >> 1,
      l = s + h;
    i(t[l], e) === n ? (s = l + 1, r -= h + 1) : r = h
  }
  return s
}
const fe = an.bind(null, !0),
  cn = an.bind(null, !1);

function Ir(n, t) {
  return n.ot < t
}

function Wr(n, t) {
  return t < n.ot
}

function un(n, t, e) {
  const i = t.Vs(),
    s = t.ui(),
    o = fe(n, i, Ir),
    r = cn(n, s, Wr);
  if (!e) return {
    from: o,
    to: r
  };
  let h = o,
    l = r;
  return o > 0 && o < n.length && n[o].ot >= i && (h = o - 1), r > 0 && r < n.length && n[r - 1].ot <= s && (l = r + 1), {
    from: h,
    to: l
  }
}
class Li {
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
    const s = this.Ls.Ct();
    s !== null && (this.zs = un(this.Is, i, this.Ns), this.Ks(t, e, s.Vt), this.Gs())
  }
}
class Fe extends Li {
  constructor(t, e) {
    super(t, e, !0)
  }
  Ks(t, e, i) {
    e.Js(this.Is, le(this.zs)), t.Qs(this.Is, i, le(this.zs))
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
class Br extends Fe {
  constructor(t, e) {
    super(t, e), this.Ws = new Ci, this.ee = new Vr, this.re = new ln, this.Ws.Z([this.ee, this.re])
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
class Ar extends gt {
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
    let s = null;
    const o = this.ae <= this.le && this.zt.he >= Math.floor(1.5 * e);
    for (let r = this.zt.tt.from; r < this.zt.tt.to; ++r) {
      const h = this.zt.In[r];
      s !== h.ue && (t.fillStyle = h.ue, s = h.ue);
      const l = Math.floor(.5 * this.ae),
        a = Math.round(h.nt * e),
        c = a - l,
        u = this.ae,
        d = c + u - 1,
        f = Math.min(h.ce, h.de),
        p = Math.max(h.ce, h.de),
        v = Math.round(f * i) - l,
        g = Math.round(p * i) + l,
        y = Math.max(g - v, this.ae);
      t.fillRect(c, v, u, y);
      const S = Math.ceil(1.5 * this.le);
      if (o) {
        if (this.zt.fe) {
          const M = a - S;
          let z = Math.max(v, Math.round(h.ve * i) - l),
            E = z + u - 1;
          E > v + y - 1 && (E = v + y - 1, z = E - u + 1), t.fillRect(M, z, c - M, E - z + 1)
        }
        const V = a + S;
        let P = Math.max(v, Math.round(h.pe * i) - l),
          O = P + u - 1;
        O > v + y - 1 && (O = v + y - 1, P = O - u + 1), t.fillRect(d + 1, P, V - d, O - P + 1)
      }
    }
  }
  oe(t) {
    const e = Math.floor(t);
    return Math.max(e, Math.floor(function(i, s) {
      return Math.floor(.3 * i * s)
    }(b(this.zt).he, t)))
  }
}
class dn extends Li {
  constructor(t, e) {
    super(t, e, !1)
  }
  Ks(t, e, i) {
    e.Js(this.Is, le(this.zs)), t.me(this.Is, i, le(this.zs))
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
class Dr extends dn {
  constructor() {
    super(...arguments), this.Ws = new Ar
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
class Nr extends on {
  constructor() {
    super(...arguments), this.Cs = new zi
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
class Or extends hn {
  constructor() {
    super(...arguments), this.Te = new zi
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
class Ur extends Fe {
  constructor(t, e) {
    super(t, e), this.Ws = new Ci, this.De = new Nr, this.Ve = new Or, this.Ws.Z([this.De, this.Ve])
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.te(t, e)), i.Hs(t))
  }
  Gs() {
    const t = this.Ls.Ct();
    if (t === null) return;
    const e = this.Ls.W(),
      i = this.Ls.Dt().Rt(e.baseValue.price, t.Vt),
      s = this.Es.St().he();
    this.De.J({
      it: this.Is,
      et: e.lineWidth,
      Nt: e.lineStyle,
      ds: e.lineType,
      fs: i,
      vs: !1,
      tt: this.zs,
      cs: s
    }), this.Ve.J({
      it: this.Is,
      et: e.lineWidth,
      Nt: e.lineStyle,
      ds: e.lineVisible ? e.lineType : void 0,
      Rs: e.pointMarkersVisible ? e.pointMarkersRadius || e.lineWidth / 2 + 2 : void 0,
      fs: i,
      tt: this.zs,
      cs: s
    })
  }
}
class Fr extends gt {
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
      const h = 1 - .2 * Math.atan(Math.max(4, o) - 4) / (.5 * Math.PI),
        l = Math.floor(o * h * r),
        a = Math.floor(o * r),
        c = Math.min(l, a);
      return Math.max(Math.floor(r), c)
    }(this.zt.he, e), this.le >= 2 && Math.floor(e) % 2 != this.le % 2 && this.le--;
    const i = this.zt.In;
    this.zt.Oe && this.Be(t, i, this.zt.tt), this.zt._i && this.Ae(t, i, this.zt.tt);
    const s = this.Ie(e);
    (!this.zt._i || this.le > 2 * s) && this.ze(t, i, this.zt.tt)
  }
  Be(t, e, i) {
    if (this.zt === null) return;
    const {
      context: s,
      horizontalPixelRatio: o,
      verticalPixelRatio: r
    } = t;
    let h = "",
      l = Math.min(Math.floor(o), Math.floor(this.zt.he * o));
    l = Math.max(Math.floor(o), Math.min(l, this.le));
    const a = Math.floor(.5 * l);
    let c = null;
    for (let u = i.from; u < i.to; u++) {
      const d = e[u];
      d.Le !== h && (s.fillStyle = d.Le, h = d.Le);
      const f = Math.round(Math.min(d.ve, d.pe) * r),
        p = Math.round(Math.max(d.ve, d.pe) * r),
        v = Math.round(d.ce * r),
        g = Math.round(d.de * r);
      let y = Math.round(o * d.nt) - a;
      const S = y + l - 1;
      c !== null && (y = Math.max(c + 1, y), y = Math.min(y, S));
      const V = S - y + 1;
      s.fillRect(y, v, V, f - v), s.fillRect(y, p + 1, V, g - p), c = S
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
      context: s,
      horizontalPixelRatio: o,
      verticalPixelRatio: r
    } = t;
    let h = "";
    const l = this.Ie(o);
    let a = null;
    for (let c = i.from; c < i.to; c++) {
      const u = e[c];
      u.Ee !== h && (s.fillStyle = u.Ee, h = u.Ee);
      let d = Math.round(u.nt * o) - Math.floor(.5 * this.le);
      const f = d + this.le - 1,
        p = Math.round(Math.min(u.ve, u.pe) * r),
        v = Math.round(Math.max(u.ve, u.pe) * r);
      if (a !== null && (d = Math.max(a + 1, d), d = Math.min(d, f)), this.zt.he * o > 2 * l) jr(s, d, p, f - d + 1, v - p + 1, l);
      else {
        const g = f - d + 1;
        s.fillRect(d, p, g, v - p + 1)
      }
      a = f
    }
  }
  ze(t, e, i) {
    if (this.zt === null) return;
    const {
      context: s,
      horizontalPixelRatio: o,
      verticalPixelRatio: r
    } = t;
    let h = "";
    const l = this.Ie(o);
    for (let a = i.from; a < i.to; a++) {
      const c = e[a];
      let u = Math.round(Math.min(c.ve, c.pe) * r),
        d = Math.round(Math.max(c.ve, c.pe) * r),
        f = Math.round(c.nt * o) - Math.floor(.5 * this.le),
        p = f + this.le - 1;
      if (c.ue !== h) {
        const v = c.ue;
        s.fillStyle = v, h = v
      }
      this.zt._i && (f += l, u += l, p -= l, d -= l), u > d || s.fillRect(f, u, p - f + 1, d - u + 1)
    }
  }
}
class Jr extends dn {
  constructor() {
    super(...arguments), this.Ws = new Fr
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
class Kr {
  constructor(t, e) {
    this.Ne = t, this.Li = e
  }
  X(t, e, i) {
    this.Ne.draw(t, this.Li, e, i)
  }
}
class He extends Li {
  constructor(t, e, i) {
    super(t, e, !1), this.wn = i, this.Ws = new Kr(this.wn.renderer(), s => {
      const o = t.Ct();
      return o === null ? null : t.Dt().Rt(s, o.Vt)
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
    e.Js(this.Is, le(this.zs))
  }
  Gs() {
    this.wn.update({
      bars: this.Is.map(Hr),
      barSpacing: this.Es.St().he(),
      visibleRange: this.zs
    }, this.Ls.W())
  }
}

function Hr(n) {
  return {
    x: n.nt,
    time: n.ot,
    originalData: n.je,
    barColor: n.ue
  }
}
class Xr extends gt {
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
    const s = Math.max(1, Math.floor(i)),
      o = Math.round(this.zt.qe * i) - Math.floor(s / 2),
      r = o + s;
    for (let h = this.zt.tt.from; h < this.zt.tt.to; h++) {
      const l = this.zt.it[h],
        a = this.$e[h - this.zt.tt.from],
        c = Math.round(l.st * i);
      let u, d;
      t.fillStyle = l.ue, c <= o ? (u = c, d = r) : (u = o, d = c - Math.floor(s / 2) + s), t.fillRect(a.Vs, u, a.ui - a.Vs + 1, d - u)
    }
  }
  Ue(t) {
    if (this.zt === null || this.zt.it.length === 0 || this.zt.tt === null) return void(this.$e = []);
    const e = Math.ceil(this.zt.he * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
      i = Math.round(this.zt.he * t) - e;
    this.$e = new Array(this.zt.tt.to - this.zt.tt.from);
    for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
      const r = this.zt.it[o],
        h = Math.round(r.nt * t);
      let l, a;
      if (i % 2) {
        const c = (i - 1) / 2;
        l = h - c, a = h + c
      } else {
        const c = i / 2;
        l = h - c, a = h + c - 1
      }
      this.$e[o - this.zt.tt.from] = {
        Vs: l,
        ui: a,
        Ye: h,
        Ze: r.nt * t,
        ot: r.ot
      }
    }
    for (let o = this.zt.tt.from + 1; o < this.zt.tt.to; o++) {
      const r = this.$e[o - this.zt.tt.from],
        h = this.$e[o - this.zt.tt.from - 1];
      r.ot === h.ot + 1 && r.Vs - h.ui !== e + 1 && (h.Ye > h.Ze ? h.ui = r.Vs - e - 1 : r.Vs = h.ui + e + 1)
    }
    let s = Math.ceil(this.zt.he * t);
    for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
      const r = this.$e[o - this.zt.tt.from];
      r.ui < r.Vs && (r.ui = r.Vs);
      const h = r.ui - r.Vs + 1;
      s = Math.min(h, s)
    }
    if (e > 0 && s < 4)
      for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
        const r = this.$e[o - this.zt.tt.from];
        r.ui - r.Vs + 1 > s && (r.Ye > r.Ze ? r.ui -= 1 : r.Vs += 1)
      }
  }
}
class Yr extends Fe {
  constructor() {
    super(...arguments), this.Ws = new Xr
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.te(t, e)), i.Hs(t))
  }
  Gs() {
    const t = {
      it: this.Is,
      he: this.Es.St().he(),
      tt: this.zs,
      qe: this.Ls.Dt().Rt(this.Ls.W().base, b(this.Ls.Ct()).Vt)
    };
    this.Ws.J(t)
  }
}
class Gr extends Fe {
  constructor() {
    super(...arguments), this.Ws = new ln
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
const Zr = /[2-9]/g;
class ae {
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
    const s = this.nr(t, e, i);
    return ((s.actualBoundingBoxAscent || 0) - (s.actualBoundingBoxDescent || 0)) / 2
  }
  nr(t, e, i) {
    const s = i || Zr,
      o = String(e).replace(s, "0");
    if (this.Qe.has(o)) return nt(this.Qe.get(o)).sr;
    if (this.Xe === this.tr) {
      const h = this.Je[this.Ge];
      delete this.Je[this.Ge], this.Qe.delete(h), this.Ge++, this.Xe--
    }
    t.save(), t.textBaseline = "middle";
    const r = t.measureText(o);
    return t.restore(), r.width === 0 && e.length || (this.Qe.set(o, {
      sr: r,
      er: this.Ke
    }), this.Je[this.Ke] = o, this.Xe++, this.Ke++), r
  }
}
class qr {
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
class fn {
  constructor(t, e, i) {
    this._r = t, this.lr = new ae(50), this.ur = e, this.F = i, this.j = -1, this.Wt = new qr(this.lr)
  }
  gt() {
    const t = this.F.cr(this.ur);
    if (t === null) return null;
    const e = t.dr(this.ur) ? t.vr() : this.ur.Dt();
    if (e === null) return null;
    const i = t.pr(e);
    if (i === "overlay") return null;
    const s = this.F.mr();
    return s.P !== this.j && (this.j = s.P, this.lr.ir()), this.Wt.ar(this._r.Ii(), s, i), this.Wt
  }
}
class Qr extends gt {
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
      st: s,
      et: o,
      wr: r
    } = this.zt;
    return e >= s - o - 7 && e <= s + o + 7 ? {
      gr: this.zt,
      wr: r
    } : null
  }
  K({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i,
    verticalPixelRatio: s
  }) {
    if (this.zt === null || this.zt.yt === !1) return;
    const o = Math.round(this.zt.st * s);
    o < 0 || o > e.height || (t.lineCap = "butt", t.strokeStyle = this.zt.V, t.lineWidth = Math.floor(this.zt.et * i), Wt(t, this.zt.Nt), Zs(t, o, 0, e.width))
  }
}
class Ei {
  constructor(t) {
    this.Mr = {
      st: 0,
      V: "rgba(0, 0, 0, 0)",
      et: 1,
      Nt: 0,
      yt: !1
    }, this.Sr = new Qr, this.ft = !0, this.Ls = t, this.Es = t.$t(), this.Sr.J(this.Mr)
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.Ls.yt() ? (this.ft && (this.kr(), this.ft = !1), this.Sr) : null
  }
}
class th extends Ei {
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
    const s = this.Ls.Ct();
    s !== null && (this.Mr.yt = !0, this.Mr.st = t.Rt(s.Vt, s.Vt), this.Mr.V = i.baseLineColor, this.Mr.et = i.baseLineWidth, this.Mr.Nt = i.baseLineStyle)
  }
}
class eh extends gt {
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
    const s = this.zt;
    if (s === null) return;
    const o = Math.max(1, Math.floor(e)),
      r = o % 2 / 2,
      h = Math.round(s.Ze.x * e) + r,
      l = s.Ze.y * i;
    t.fillStyle = s.Cr, t.beginPath();
    const a = Math.max(2, 1.5 * s.Tr) * e;
    t.arc(h, l, a, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = s.Pr, t.beginPath(), t.arc(h, l, s.ht * e, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = o, t.strokeStyle = s.Rr, t.beginPath(), t.arc(h, l, s.ht * e + o / 2, 0, 2 * Math.PI, !1), t.stroke()
  }
}
const ih = [{
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

function Yi(n, t, e, i) {
  return function(s, o) {
    if (s === "transparent") return s;
    const r = re(s),
      h = r[3];
    return `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${o*h})`
  }(n, e + (i - e) * t)
}

function Gi(n, t) {
  const e = n % 2600 / 2600;
  let i;
  for (const l of ih)
    if (e >= l.Dr && e <= l.Vr) {
      i = l;
      break
    } $t(i !== void 0, "Last price animation internal logic error");
  const s = (e - i.Dr) / (i.Vr - i.Dr);
  return {
    Pr: Yi(t, s, i.Ar, i.Ir),
    Rr: Yi(t, s, i.zr, i.Lr),
    ht: (o = s, r = i.Or, h = i.Br, r + (h - r) * o)
  };
  var o, r, h
}
class sh {
  constructor(t) {
    this.Wt = new eh, this.ft = !0, this.Er = !0, this.Nr = performance.now(), this.Fr = this.Nr - 1, this.Wr = t
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
    const s = this.Wr.Yr(!0);
    if (s.Zr || !e.Xr(s.se)) return;
    const o = {
        x: t.It(s.se),
        y: this.Wr.Dt().Rt(s._t, i.Vt)
      },
      r = s.V,
      h = this.Wr.W().lineWidth,
      l = Gi(this.Kr(), r);
    this.Wt.J({
      Cr: r,
      Tr: h,
      Pr: l.Pr,
      Rr: l.Rr,
      ht: l.ht,
      Ze: o
    })
  }
  qr() {
    const t = this.Wt.He();
    if (t !== null) {
      const e = Gi(this.Kr(), t.Cr);
      t.Pr = e.Pr, t.Rr = e.Rr, t.ht = e.ht
    }
  }
  Kr() {
    return this.Ur() ? performance.now() - this.Nr : 2599
  }
}

function te(n, t) {
  return rn(Math.min(Math.max(n, 12), 30) * t)
}

function ce(n, t) {
  switch (n) {
    case "arrowDown":
    case "arrowUp":
      return te(t, 1);
    case "circle":
      return te(t, .8);
    case "square":
      return te(t, .7)
  }
}

function mn(n) {
  return function(t) {
    const e = Math.ceil(t);
    return e % 2 != 0 ? e - 1 : e
  }(te(n, 1))
}

function Zi(n) {
  return Math.max(te(n, .1), 3)
}

function qi(n, t, e) {
  return t ? n : e ? Math.ceil(n / 2) : 0
}

function pn(n, t, e, i, s) {
  const o = ce("square", e),
    r = (o - 1) / 2,
    h = n - r,
    l = t - r;
  return i >= h && i <= h + o && s >= l && s <= l + o
}

function Qi(n, t, e, i) {
  const s = (ce("arrowUp", i) - 1) / 2 * e.Gr,
    o = (rn(i / 2) - 1) / 2 * e.Gr;
  t.beginPath(), n ? (t.moveTo(e.nt - s, e.st), t.lineTo(e.nt, e.st - s), t.lineTo(e.nt + s, e.st), t.lineTo(e.nt + o, e.st), t.lineTo(e.nt + o, e.st + s), t.lineTo(e.nt - o, e.st + s), t.lineTo(e.nt - o, e.st)) : (t.moveTo(e.nt - s, e.st), t.lineTo(e.nt, e.st + s), t.lineTo(e.nt + s, e.st), t.lineTo(e.nt + o, e.st), t.lineTo(e.nt + o, e.st - s), t.lineTo(e.nt - o, e.st - s), t.lineTo(e.nt - o, e.st)), t.fill()
}

function nh(n, t, e, i, s, o) {
  return pn(t, e, i, s, o)
}
class oh extends gt {
  constructor() {
    super(...arguments), this.zt = null, this.lr = new ae, this.j = -1, this.H = "", this.Jr = ""
  }
  J(t) {
    this.zt = t
  }
  ar(t, e) {
    this.j === t && this.H === e || (this.j = t, this.H = e, this.Jr = Kt(t, e), this.lr.ir())
  }
  br(t, e) {
    if (this.zt === null || this.zt.tt === null) return null;
    for (let i = this.zt.tt.from; i < this.zt.tt.to; i++) {
      const s = this.zt.it[i];
      if (hh(s, t, e)) return {
        gr: s.Qr,
        wr: s.wr
      }
    }
    return null
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: i
  }, s, o) {
    if (this.zt !== null && this.zt.tt !== null) {
      t.textBaseline = "middle", t.font = this.Jr;
      for (let r = this.zt.tt.from; r < this.zt.tt.to; r++) {
        const h = this.zt.it[r];
        h.Kt !== void 0 && (h.Kt.Hi = this.lr.xi(t, h.Kt.th), h.Kt.At = this.j, h.Kt.nt = h.nt - h.Kt.Hi / 2), rh(h, t, e, i)
      }
    }
  }
}

function rh(n, t, e, i) {
  t.fillStyle = n.V, n.Kt !== void 0 && function(s, o, r, h, l, a) {
      s.save(), s.scale(l, a), s.fillText(o, r, h), s.restore()
    }(t, n.Kt.th, n.Kt.nt, n.Kt.st, e, i),
    function(s, o, r) {
      if (s.Xs !== 0) {
        switch (s.ih) {
          case "arrowDown":
            return void Qi(!1, o, r, s.Xs);
          case "arrowUp":
            return void Qi(!0, o, r, s.Xs);
          case "circle":
            return void
            function(h, l, a) {
              const c = (ce("circle", a) - 1) / 2;
              h.beginPath(), h.arc(l.nt, l.st, c * l.Gr, 0, 2 * Math.PI, !1), h.fill()
            }(o, r, s.Xs);
          case "square":
            return void
            function(h, l, a) {
              const c = ce("square", a),
                u = (c - 1) * l.Gr / 2,
                d = l.nt - u,
                f = l.st - u;
              h.fillRect(d, f, c * l.Gr, c * l.Gr)
            }(o, r, s.Xs)
        }
        s.ih
      }
    }(n, t, function(s, o, r) {
      const h = Math.max(1, Math.floor(o)) % 2 / 2;
      return {
        nt: Math.round(s.nt * o) + h,
        st: s.st * r,
        Gr: o
      }
    }(n, e, i))
}

function hh(n, t, e) {
  return !(n.Kt === void 0 || ! function(i, s, o, r, h, l) {
    const a = r / 2;
    return h >= i && h <= i + o && l >= s - a && l <= s + a
  }(n.Kt.nt, n.Kt.st, n.Kt.Hi, n.Kt.At, t, e)) || function(i, s, o) {
    if (i.Xs === 0) return !1;
    switch (i.ih) {
      case "arrowDown":
      case "arrowUp":
        return nh(0, i.nt, i.st, i.Xs, s, o);
      case "circle":
        return function(r, h, l, a, c) {
          const u = 2 + ce("circle", l) / 2,
            d = r - a,
            f = h - c;
          return Math.sqrt(d * d + f * f) <= u
        }(i.nt, i.st, i.Xs, s, o);
      case "square":
        return pn(i.nt, i.st, i.Xs, s, o)
    }
  }(n, t, e)
}

function lh(n, t, e, i, s, o, r, h, l) {
  const a = wt(e) ? e : e.xe,
    c = wt(e) ? e : e.ge,
    u = wt(e) ? e : e.Me,
    d = wt(t.size) ? Math.max(t.size, 0) : 1,
    f = mn(h.he()) * d,
    p = f / 2;
  switch (n.Xs = f, t.position) {
    case "inBar":
      return n.st = r.Rt(a, l), void(n.Kt !== void 0 && (n.Kt.st = n.st + p + o + .6 * s));
    case "aboveBar":
      return n.st = r.Rt(c, l) - p - i.nh, n.Kt !== void 0 && (n.Kt.st = n.st - p - .6 * s, i.nh += 1.2 * s), void(i.nh += f + o);
    case "belowBar":
      return n.st = r.Rt(u, l) + p + i.sh, n.Kt !== void 0 && (n.Kt.st = n.st + p + o + .6 * s, i.sh += 1.2 * s), void(i.sh += f + o)
  }
  t.position
}
class ah {
  constructor(t, e) {
    this.ft = !0, this.eh = !0, this.rh = !0, this.hh = null, this.ah = null, this.Wt = new oh, this.Wr = t, this.$i = e, this.zt = {
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
          e = Zi(t),
          i = 1.5 * mn(t) + 2 * e,
          s = this.dh();
        this.hh = {
          above: qi(i, s.aboveBar, s.inBar),
          below: qi(i, s.belowBar, s.inBar)
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
    const s = this.$i.W().layout;
    this.zt.tt = null;
    const o = e.Zs();
    if (o === null) return;
    const r = this.Wr.Ct();
    if (r === null || this.zt.it.length === 0) return;
    let h = NaN;
    const l = Zi(e.he()),
      a = {
        nh: l,
        sh: l
      };
    this.zt.tt = un(this.zt.it, o, !0);
    for (let c = this.zt.tt.from; c < this.zt.tt.to; c++) {
      const u = i[c];
      u.time !== h && (a.nh = l, a.sh = l, h = u.time);
      const d = this.zt.it[c];
      d.nt = e.It(u.time), u.text !== void 0 && u.text.length > 0 && (d.Kt = {
        th: u.text,
        nt: 0,
        st: 0,
        Hi: 0,
        At: 0
      });
      const f = this.Wr.fh(u.time);
      f !== null && lh(d, u, f, a, s.fontSize, l, t, e, r.Vt)
    }
    this.ft = !1
  }
}
class ch extends Ei {
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
class uh extends Ne {
  constructor(t) {
    super(), this.jt = t
  }
  zi(t, e, i) {
    t.yt = !1, e.yt = !1;
    const s = this.jt;
    if (!s.yt()) return;
    const o = s.W(),
      r = o.lastValueVisible,
      h = s.mh() !== "",
      l = o.seriesLastValueMode === 0,
      a = s.Yr(!1);
    if (a.Zr) return;
    r && (t.Kt = this.bh(a, r, l), t.yt = t.Kt.length !== 0), (h || l) && (e.Kt = this.wh(a, r, h, l), e.yt = e.Kt.length > 0);
    const c = s.ph(a.V),
      u = Ae(c);
    i.t = u.t, i.ki = a.ki, e.Ot = s.$t().Bt(a.ki / s.Dt().At()), t.Ot = c, t.V = u.i, e.V = u.i
  }
  wh(t, e, i, s) {
    let o = "";
    const r = this.jt.mh();
    return i && r.length !== 0 && (o += `${r} `), e && s && (o += this.jt.Dt().gh() ? t.Mh : t.xh), o.trim()
  }
  bh(t, e, i) {
    return e ? i ? this.jt.Dt().gh() ? t.xh : t.Mh : t.Kt : ""
  }
}

function ts(n, t, e, i) {
  const s = Number.isFinite(t),
    o = Number.isFinite(e);
  return s && o ? n(t, e) : s || o ? s ? t : e : i
}
class ht {
  constructor(t, e) {
    this.Sh = t, this.kh = e
  }
  yh(t) {
    return t !== null && this.Sh === t.Sh && this.kh === t.kh
  }
  Ch() {
    return new ht(this.Sh, this.kh)
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
    return t === null ? this : new ht(ts(Math.min, this.Th(), t.Th(), -1 / 0), ts(Math.max, this.Ph(), t.Ph(), 1 / 0))
  }
  Dh(t) {
    if (!wt(t) || this.kh - this.Sh === 0) return;
    const e = .5 * (this.kh + this.Sh);
    let i = this.kh - e,
      s = this.Sh - e;
    i *= t, s *= t, this.kh = e + i, this.Sh = e + s
  }
  Vh(t) {
    wt(t) && (this.kh += t, this.Sh += t)
  }
  Oh() {
    return {
      minValue: this.Sh,
      maxValue: this.kh
    }
  }
  static Bh(t) {
    return t === null ? null : new ht(t.minValue, t.maxValue)
  }
}
class Ve {
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
    return t === null ? null : new Ve(ht.Bh(t.priceRange), t.margins)
  }
}
class dh extends Ei {
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
class fh extends Ne {
  constructor(t, e) {
    super(), this.Wr = t, this.Eh = e
  }
  zi(t, e, i) {
    t.yt = !1, e.yt = !1;
    const s = this.Eh.W(),
      o = s.axisLabelVisible,
      r = s.title !== "",
      h = this.Wr;
    if (!o || !h.yt()) return;
    const l = this.Eh.Nh();
    if (l === null) return;
    r && (e.Kt = s.title, e.yt = !0), e.Ot = h.$t().Bt(l / h.Dt().At()), t.Kt = this.Fh(s.price), t.yt = !0;
    const a = Ae(s.axisLabelColor || s.color);
    i.t = a.t;
    const c = s.axisLabelTextColor || a.i;
    t.V = c, e.V = c, i.ki = l
  }
  Fh(t) {
    const e = this.Wr.Ct();
    return e === null ? "" : this.Wr.Dt().Fi(t, e.Vt)
  }
}
class mh {
  constructor(t, e) {
    this.Wr = t, this.cn = e, this.Wh = new dh(t, this), this._r = new fh(t, this), this.jh = new fn(this._r, t, t.$t())
  }
  Hh(t) {
    bt(this.cn, t), this.bt(), this.Wr.$t().$h()
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
class ph extends ji {
  constructor(t) {
    super(), this.$i = t
  }
  $t() {
    return this.$i
  }
}
const vh = {
  Bar: (n, t, e, i) => {
    var s;
    const o = t.upColor,
      r = t.downColor,
      h = b(n(e, i)),
      l = Ot(h.Vt[0]) <= Ot(h.Vt[3]);
    return {
      ue: (s = h.V) !== null && s !== void 0 ? s : l ? o : r
    }
  },
  Candlestick: (n, t, e, i) => {
    var s, o, r;
    const h = t.upColor,
      l = t.downColor,
      a = t.borderUpColor,
      c = t.borderDownColor,
      u = t.wickUpColor,
      d = t.wickDownColor,
      f = b(n(e, i)),
      p = Ot(f.Vt[0]) <= Ot(f.Vt[3]);
    return {
      ue: (s = f.V) !== null && s !== void 0 ? s : p ? h : l,
      Ee: (o = f.Ot) !== null && o !== void 0 ? o : p ? a : c,
      Le: (r = f.Zh) !== null && r !== void 0 ? r : p ? u : d
    }
  },
  Custom: (n, t, e, i) => {
    var s;
    return {
      ue: (s = b(n(e, i)).V) !== null && s !== void 0 ? s : t.color
    }
  },
  Area: (n, t, e, i) => {
    var s, o, r, h;
    const l = b(n(e, i));
    return {
      ue: (s = l.lt) !== null && s !== void 0 ? s : t.lineColor,
      lt: (o = l.lt) !== null && o !== void 0 ? o : t.lineColor,
      Ts: (r = l.Ts) !== null && r !== void 0 ? r : t.topColor,
      Ps: (h = l.Ps) !== null && h !== void 0 ? h : t.bottomColor
    }
  },
  Baseline: (n, t, e, i) => {
    var s, o, r, h, l, a;
    const c = b(n(e, i));
    return {
      ue: c.Vt[3] >= t.baseValue.price ? t.topLineColor : t.bottomLineColor,
      Pe: (s = c.Pe) !== null && s !== void 0 ? s : t.topLineColor,
      Re: (o = c.Re) !== null && o !== void 0 ? o : t.bottomLineColor,
      Se: (r = c.Se) !== null && r !== void 0 ? r : t.topFillColor1,
      ke: (h = c.ke) !== null && h !== void 0 ? h : t.topFillColor2,
      ye: (l = c.ye) !== null && l !== void 0 ? l : t.bottomFillColor1,
      Ce: (a = c.Ce) !== null && a !== void 0 ? a : t.bottomFillColor2
    }
  },
  Line: (n, t, e, i) => {
    var s, o;
    const r = b(n(e, i));
    return {
      ue: (s = r.V) !== null && s !== void 0 ? s : t.color,
      lt: (o = r.V) !== null && o !== void 0 ? o : t.color
    }
  },
  Histogram: (n, t, e, i) => {
    var s;
    return {
      ue: (s = b(n(e, i)).V) !== null && s !== void 0 ? s : t.color
    }
  }
};
class bh {
  constructor(t) {
    this.Xh = (e, i) => i !== void 0 ? i.Vt : this.Wr.In().Kh(e), this.Wr = t, this.Gh = vh[t.Jh()]
  }
  Hs(t, e) {
    return this.Gh(this.Xh, this.Wr.W(), t, e)
  }
}
var es;
(function(n) {
  n[n.NearestLeft = -1] = "NearestLeft", n[n.None = 0] = "None", n[n.NearestRight = 1] = "NearestRight"
})(es || (es = {}));
const Lt = 30;
class gh {
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
    let s = null;
    for (const o of i) s = _e(s, this.ol(t, e, o));
    return s
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
    return fe(this.Qh, t, (e, i) => e.se < i)
  }
  fl(t) {
    return cn(this.Qh, t, (e, i) => e.se > i)
  }
  vl(t, e, i) {
    let s = null;
    for (let o = t; o < e; o++) {
      const r = this.Qh[o].Vt[i];
      Number.isNaN(r) || (s === null ? s = {
        pl: r,
        ml: r
      } : (r < s.pl && (s.pl = r), r > s.ml && (s.ml = r)))
    }
    return s
  }
  ol(t, e, i) {
    if (this.Ni()) return null;
    let s = null;
    const o = b(this.sl()),
      r = b(this.An()),
      h = Math.max(t, o),
      l = Math.min(e, r),
      a = Math.ceil(h / Lt) * Lt,
      c = Math.max(a, Math.floor(l / Lt) * Lt);
    {
      const d = this.dl(h),
        f = this.fl(Math.min(l, a, e));
      s = _e(s, this.vl(d, f, i))
    }
    let u = this.tl.get(i);
    u === void 0 && (u = new Map, this.tl.set(i, u));
    for (let d = Math.max(a + 1, h); d < c; d += Lt) {
      const f = Math.floor(d / Lt);
      let p = u.get(f);
      if (p === void 0) {
        const v = this.dl(f * Lt),
          g = this.fl((f + 1) * Lt - 1);
        p = this.vl(v, g, i), u.set(f, p)
      }
      s = _e(s, p)
    } {
      const d = this.dl(c),
        f = this.fl(l);
      s = _e(s, this.vl(d, f, i))
    }
    return s
  }
}

function _e(n, t) {
  return n === null ? t : t === null ? n : {
    pl: Math.min(n.pl, t.pl),
    ml: Math.max(n.ml, t.ml)
  }
}
class _h {
  constructor(t) {
    this.bl = t
  }
  X(t, e, i) {
    this.bl.draw(t)
  }
  wl(t, e, i) {
    var s, o;
    (o = (s = this.bl).drawBackground) === null || o === void 0 || o.call(s, t)
  }
}
class Xe {
  constructor(t) {
    this.Qe = null, this.wn = t
  }
  gt() {
    var t;
    const e = this.wn.renderer();
    if (e === null) return null;
    if (((t = this.Qe) === null || t === void 0 ? void 0 : t.gl) === e) return this.Qe.Ml;
    const i = new _h(e);
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

function vn(n) {
  var t, e, i, s, o;
  return {
    Kt: n.text(),
    ki: n.coordinate(),
    Si: (t = n.fixedCoordinate) === null || t === void 0 ? void 0 : t.call(n),
    V: n.textColor(),
    t: n.backColor(),
    yt: (i = (e = n.visible) === null || e === void 0 ? void 0 : e.call(n)) === null || i === void 0 || i,
    hi: (o = (s = n.tickVisible) === null || s === void 0 ? void 0 : s.call(n)) === null || o === void 0 || o
  }
}
class wh {
  constructor(t, e) {
    this.Wt = new en, this.Sl = t, this.kl = e
  }
  gt() {
    return this.Wt.J(Object.assign({
      Hi: this.kl.Hi()
    }, vn(this.Sl))), this.Wt
  }
}
class yh extends Ne {
  constructor(t, e) {
    super(), this.Sl = t, this.Li = e
  }
  zi(t, e, i) {
    const s = vn(this.Sl);
    i.t = s.t, t.V = s.V;
    const o = 2 / 12 * this.Li.P();
    i.wi = o, i.gi = o, i.ki = s.ki, i.Si = s.Si, t.Kt = s.Kt, t.yt = s.yt, t.hi = s.hi
  }
}
class Mh {
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
    var t, e, i, s;
    const o = (i = (e = (t = this.Dl).paneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((s = this.yl) === null || s === void 0 ? void 0 : s.gl) === o) return this.yl.Ml;
    const r = o.map(h => new Xe(h));
    return this.yl = {
      gl: o,
      Ml: r
    }, r
  }
  Qi() {
    var t, e, i, s;
    const o = (i = (e = (t = this.Dl).timeAxisViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((s = this.Cl) === null || s === void 0 ? void 0 : s.gl) === o) return this.Cl.Ml;
    const r = this.Wr.$t().St(),
      h = o.map(l => new wh(l, r));
    return this.Cl = {
      gl: o,
      Ml: h
    }, h
  }
  Rn() {
    var t, e, i, s;
    const o = (i = (e = (t = this.Dl).priceAxisViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((s = this.Tl) === null || s === void 0 ? void 0 : s.gl) === o) return this.Tl.Ml;
    const r = this.Wr.Dt(),
      h = o.map(l => new yh(l, r));
    return this.Tl = {
      gl: o,
      Ml: h
    }, h
  }
  Ol() {
    var t, e, i, s;
    const o = (i = (e = (t = this.Dl).priceAxisPaneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((s = this.Pl) === null || s === void 0 ? void 0 : s.gl) === o) return this.Pl.Ml;
    const r = o.map(h => new Xe(h));
    return this.Pl = {
      gl: o,
      Ml: r
    }, r
  }
  Bl() {
    var t, e, i, s;
    const o = (i = (e = (t = this.Dl).timeAxisPaneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((s = this.Rl) === null || s === void 0 ? void 0 : s.gl) === o) return this.Rl.Ml;
    const r = o.map(h => new Xe(h));
    return this.Rl = {
      gl: o,
      Ml: r
    }, r
  }
  Al(t, e) {
    var i, s, o;
    return (o = (s = (i = this.Dl).autoscaleInfo) === null || s === void 0 ? void 0 : s.call(i, t, e)) !== null && o !== void 0 ? o : null
  }
  br(t, e) {
    var i, s, o;
    return (o = (s = (i = this.Dl).hitTest) === null || s === void 0 ? void 0 : s.call(i, t, e)) !== null && o !== void 0 ? o : null
  }
}

function Ye(n, t, e, i) {
  n.forEach(s => {
    t(s).forEach(o => {
      o.xl() === e && i.push(o)
    })
  })
}

function Ge(n) {
  return n.Pn()
}

function Sh(n) {
  return n.Ol()
}

function kh(n) {
  return n.Bl()
}
class Ti extends ph {
  constructor(t, e, i, s, o) {
    super(t), this.zt = new gh, this.Wh = new ch(this), this.Il = [], this.zl = new th(this), this.Ll = null, this.El = null, this.Nl = [], this.Fl = [], this.Wl = null, this.jl = [], this.cn = e, this.Hl = i;
    const r = new uh(this);
    this.rn = [r], this.jh = new fn(r, this, t), i !== "Area" && i !== "Line" && i !== "Baseline" || (this.Ll = new sh(this)), this.$l(), this.Ul(o)
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
    const s = this.$t().St().Zs(),
      o = this.Ct();
    if (s === null || o === null) return e;
    let r, h;
    if (t) {
      const u = this.zt.nl();
      if (u === null) return e;
      r = u, h = u.se
    } else {
      const u = this.zt.hl(s.ui(), -1);
      if (u === null || (r = this.zt.Kh(u.se), r === null)) return e;
      h = u.se
    }
    const l = r.Vt[3],
      a = this.$s().Hs(h, {
        Vt: r
      }),
      c = i.Rt(l, o.Vt);
    return {
      Zr: !1,
      _t: l,
      Kt: i.Fi(l, o.Vt),
      Mh: i.ql(l),
      xh: i.Yl(l, o.Vt),
      V: a.ue,
      ki: c,
      se: h
    }
  }
  $s() {
    return this.El !== null || (this.El = new bh(this)), this.El
  }
  W() {
    return this.cn
  }
  Hh(t) {
    const e = t.priceScaleId;
    e !== void 0 && e !== this.cn.priceScaleId && this.$t().Zl(this, e), bt(this.cn, t), t.priceFormat !== void 0 && (this.$l(), this.$t().Xl()), this.$t().Kl(this), this.$t().Gl(), this.wn.bt("options")
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
    const e = new mh(this, t);
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
    const i = this.Ll;
    return i !== null && i.yt() && (this.Wl === null && i.Ur() && (this.Wl = setTimeout(() => {
      this.Wl = null, this.$t().aa()
    }, 0)), i.$r(), e.unshift(i)), e
  }
  Pn() {
    const t = [];
    this.oa() || t.push(this.zl), t.push(this.wn, this.Wh, this.dn);
    const e = this.Il.map(i => i.Uh());
    return t.push(...e), Ye(this.jl, Ge, "normal", t), t
  }
  _a() {
    return this.ua(Ge, "bottom")
  }
  ca(t) {
    return this.ua(Sh, t)
  }
  da(t) {
    return this.ua(kh, t)
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
    for (const s of this.Il) i.push(s.Yh());
    return this.jl.forEach(s => {
      i.push(...s.Rn())
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
        const s = this.va(t, e);
        return s === null ? null : s.Oh()
      });
      return Ve.Bh(i)
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
    return b(super.Dt())
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
    this.jl.push(new Mh(t, this))
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
    return !Oe(this.Dt().Ta())
  }
  va(t, e) {
    if (!he(t) || !he(e) || this.zt.Ni()) return null;
    const i = this.Hl === "Line" || this.Hl === "Area" || this.Hl === "Baseline" || this.Hl === "Histogram" ? [3] : [2, 1],
      s = this.zt.al(t, e, i);
    let o = s !== null ? new ht(s.pl, s.ml) : null;
    if (this.Jh() === "Histogram") {
      const h = this.cn.base,
        l = new ht(h, h);
      o = o !== null ? o.ts(l) : l
    }
    let r = this.dn._h();
    return this.jl.forEach(h => {
      const l = h.Al(t, e);
      if (l != null && l.priceRange) {
        const f = new ht(l.priceRange.minValue, l.priceRange.maxValue);
        o = o !== null ? o.ts(f) : f
      }
      var a, c, u, d;
      l != null && l.margins && (a = r, c = l.margins, r = {
        above: Math.max((u = a == null ? void 0 : a.above) !== null && u !== void 0 ? u : 0, c.above),
        below: Math.max((d = a == null ? void 0 : a.below) !== null && d !== void 0 ? d : 0, c.below)
      })
    }), new Ve(o, r)
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
        this.ba = new $r(this.cn.priceFormat.precision);
        break;
      case "percent":
        this.ba = new sn(this.cn.priceFormat.precision);
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
    const e = b(this.zt.sl());
    this.Fl = this.Nl.map((i, s) => {
      const o = b(t.Da(i.time, !0)),
        r = o < e ? 1 : -1;
      return {
        time: b(this.zt.hl(o, r)).se,
        position: i.position,
        shape: i.shape,
        color: i.color,
        id: i.id,
        Qr: s,
        text: i.text,
        size: i.size,
        originalTime: i.originalTime
      }
    })
  }
  Ul(t) {
    switch (this.dn = new ah(this, this.$t()), this.Hl) {
      case "Bar":
        this.wn = new Dr(this, this.$t());
        break;
      case "Candlestick":
        this.wn = new Jr(this, this.$t());
        break;
      case "Line":
        this.wn = new Gr(this, this.$t());
        break;
      case "Custom":
        this.wn = new He(this, this.$t(), nt(t));
        break;
      case "Area":
        this.wn = new Br(this, this.$t());
        break;
      case "Baseline":
        this.wn = new Ur(this, this.$t());
        break;
      case "Histogram":
        this.wn = new Yr(this, this.$t());
        break;
      default:
        throw Error("Unknown chart style assigned: " + this.Hl)
    }
  }
  ua(t, e) {
    const i = [];
    return Ye(this.jl, t, e, i), i
  }
}
class Ch {
  constructor(t) {
    this.cn = t
  }
  Va(t, e, i) {
    let s = t;
    if (this.cn.mode === 0) return s;
    const o = i.vn(),
      r = o.Ct();
    if (r === null) return s;
    const h = o.Rt(t, r),
      l = i.Oa().filter(c => c instanceof Ti).reduce((c, u) => {
        if (i.dr(u) || !u.yt()) return c;
        const d = u.Dt(),
          f = u.In();
        if (d.Ni() || !f.Xr(e)) return c;
        const p = f.Kh(e);
        if (p === null) return c;
        const v = Ot(u.Ct());
        return c.concat([d.Rt(p.Vt[3], v.Vt)])
      }, []);
    if (l.length === 0) return s;
    l.sort((c, u) => Math.abs(c - h) - Math.abs(u - h));
    const a = l[0];
    return s = o.pn(a, r), s
  }
}
class jh extends gt {
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
    verticalPixelRatio: s
  }) {
    if (this.zt === null) return;
    const o = Math.max(1, Math.floor(i));
    t.lineWidth = o,
      function(r, h) {
        r.save(), r.lineWidth % 2 && r.translate(.5, .5), h(), r.restore()
      }(t, () => {
        const r = b(this.zt);
        if (r.Ba) {
          t.strokeStyle = r.Aa, Wt(t, r.Ia), t.beginPath();
          for (const h of r.za) {
            const l = Math.round(h.La * i);
            t.moveTo(l, -o), t.lineTo(l, e.height + o)
          }
          t.stroke()
        }
        if (r.Ea) {
          t.strokeStyle = r.Na, Wt(t, r.Fa), t.beginPath();
          for (const h of r.Wa) {
            const l = Math.round(h.La * s);
            t.moveTo(-o, l), t.lineTo(e.width + o, l)
          }
          t.stroke()
        }
      })
  }
}
class zh {
  constructor(t) {
    this.Wt = new jh, this.ft = !0, this.tn = t
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
class Lh {
  constructor(t) {
    this.wn = new zh(t)
  }
  Uh() {
    return this.wn
  }
}
const Ze = {
  Ha: 4,
  $a: 1e-4
};

function Ut(n, t) {
  const e = 100 * (n - t) / t;
  return t < 0 ? -e : e
}

function Eh(n, t) {
  const e = Ut(n.Th(), t),
    i = Ut(n.Ph(), t);
  return new ht(e, i)
}

function ee(n, t) {
  const e = 100 * (n - t) / t + 100;
  return t < 0 ? -e : e
}

function Th(n, t) {
  const e = ee(n.Th(), t),
    i = ee(n.Ph(), t);
  return new ht(e, i)
}

function Re(n, t) {
  const e = Math.abs(n);
  if (e < 1e-15) return 0;
  const i = Math.log10(e + t.$a) + t.Ha;
  return n < 0 ? -i : i
}

function ie(n, t) {
  const e = Math.abs(n);
  if (e < 1e-15) return 0;
  const i = Math.pow(10, e - t.Ha) - t.$a;
  return n < 0 ? -i : i
}

function Gt(n, t) {
  if (n === null) return null;
  const e = Re(n.Th(), t),
    i = Re(n.Ph(), t);
  return new ht(e, i)
}

function we(n, t) {
  if (n === null) return null;
  const e = ie(n.Th(), t),
    i = ie(n.Ph(), t);
  return new ht(e, i)
}

function qe(n) {
  if (n === null) return Ze;
  const t = Math.abs(n.Ph() - n.Th());
  if (t >= 1 || t < 1e-15) return Ze;
  const e = Math.ceil(Math.abs(Math.log10(t))),
    i = Ze.Ha + e;
  return {
    Ha: i,
    $a: 1 / Math.pow(10, i)
  }
}
class Qe {
  constructor(t, e) {
    if (this.Ua = t, this.qa = e, function(i) {
        if (i < 0) return !1;
        for (let s = i; s > 1; s /= 10)
          if (s % 10 != 0) return !1;
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
    const s = this.Ua === 0 ? 0 : 1 / this.Ua;
    let o = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - e)))),
      r = 0,
      h = this.qa[0];
    for (;;) {
      const u = ge(o, s, 1e-14) && o > s + 1e-14,
        d = ge(o, i * h, 1e-14),
        f = ge(o, 1, 1e-14);
      if (!(u && d && f)) break;
      o /= h, h = this.qa[++r % this.qa.length]
    }
    if (o <= s + 1e-14 && (o = s), o = Math.max(1, o), this.Ya.length > 0 && (l = o, a = 1, c = 1e-14, Math.abs(l - a) < c))
      for (r = 0, h = this.Ya[0]; ge(o, i * h, 1e-14) && o > s + 1e-14;) o /= h, h = this.Ya[++r % this.Ya.length];
    var l, a, c;
    return o
  }
}
class is {
  constructor(t, e, i, s) {
    this.Xa = [], this.Li = t, this.Ua = e, this.Ka = i, this.Ga = s
  }
  Za(t, e) {
    if (t < e) throw new Error("high < low");
    const i = this.Li.At(),
      s = (t - e) * this.Ja() / i,
      o = new Qe(this.Ua, [2, 2.5, 2]),
      r = new Qe(this.Ua, [2, 2, 2.5]),
      h = new Qe(this.Ua, [2.5, 2, 2]),
      l = [];
    return l.push(o.Za(t, e, s), r.Za(t, e, s), h.Za(t, e, s)),
      function(a) {
        if (a.length < 1) throw Error("array is empty");
        let c = a[0];
        for (let u = 1; u < a.length; ++u) a[u] < c && (c = a[u]);
        return c
      }(l)
  }
  Qa() {
    const t = this.Li,
      e = t.Ct();
    if (e === null) return void(this.Xa = []);
    const i = t.At(),
      s = this.Ka(i - 1, e),
      o = this.Ka(0, e),
      r = this.Li.W().entireTextOnly ? this.io() / 2 : 0,
      h = r,
      l = i - 1 - r,
      a = Math.max(s, o),
      c = Math.min(s, o);
    if (a === c) return void(this.Xa = []);
    let u = this.Za(a, c),
      d = a % u;
    d += d < 0 ? u : 0;
    const f = a >= c ? 1 : -1;
    let p = null,
      v = 0;
    for (let g = a - d; g > c; g -= u) {
      const y = this.Ga(g, e, !0);
      p !== null && Math.abs(y - p) < this.Ja() || y < h || y > l || (v < this.Xa.length ? (this.Xa[v].La = y, this.Xa[v].no = t.so(g)) : this.Xa.push({
        La: y,
        no: t.so(g)
      }), v++, p = y, t.eo() && (u = this.Za(g * f, c)))
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

function bn(n) {
  return n.slice().sort((t, e) => b(t.Xi()) - b(e.Xi()))
}
var ss;
(function(n) {
  n[n.Normal = 0] = "Normal", n[n.Logarithmic = 1] = "Logarithmic", n[n.Percentage = 2] = "Percentage", n[n.IndexedTo100 = 3] = "IndexedTo100"
})(ss || (ss = {}));
const ns = new sn,
  os = new Ue(100, 1);
class $h {
  constructor(t, e, i, s) {
    this.ro = 0, this.ho = null, this.Ah = null, this.lo = null, this.ao = {
      oo: !1,
      _o: null
    }, this.uo = 0, this.co = 0, this.do = new X, this.fo = new X, this.vo = [], this.po = null, this.mo = null, this.bo = null, this.wo = null, this.ba = os, this.Mo = qe(null), this.xo = t, this.cn = e, this.So = i, this.ko = s, this.yo = new is(this, 100, this.Co.bind(this), this.To.bind(this))
  }
  Ta() {
    return this.xo
  }
  W() {
    return this.cn
  }
  Hh(t) {
    if (bt(this.cn, t), this.Pa(), t.mode !== void 0 && this.Po({
        yr: t.mode
      }), t.scaleMargins !== void 0) {
      const e = nt(t.scaleMargins.top),
        i = nt(t.scaleMargins.bottom);
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
      const h = ie(o.Th(), r),
        l = ie(o.Ph(), r);
      return isFinite(h) && isFinite(l)
    }(this.Ah, this.Mo) ? (i = we(this.Ah, this.Mo), i !== null && this.Bo(i)) : this.cn.autoScale = !0), t.yr === 1 && t.yr !== e.yr && (i = Gt(this.Ah, this.Mo), i !== null && this.Bo(i));
    const s = e.yr !== this.cn.mode;
    s && (e.yr === 2 || this.gh()) && this.Pa(), s && (e.yr === 3 || this.Vo()) && this.Pa(), t.Oo !== void 0 && e.Oo !== t.Oo && (this.cn.invertScale = t.Oo, this.Ao()), this.fo.m(e, this.yr())
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
    return this.gh() ? t = Ut(t, e) : this.Vo() && (t = ee(t, e)), this.To(t, e)
  }
  Qs(t, e, i) {
    this.Fo();
    const s = this.No(),
      o = b(this.zh()),
      r = o.Th(),
      h = o.Ph(),
      l = this.Lo() - 1,
      a = this.Oo(),
      c = l / (h - r),
      u = i === void 0 ? 0 : i.from,
      d = i === void 0 ? t.length : i.to,
      f = this.jo();
    for (let p = u; p < d; p++) {
      const v = t[p],
        g = v._t;
      if (isNaN(g)) continue;
      let y = g;
      f !== null && (y = f(v._t, e));
      const S = s + c * (y - r),
        V = a ? S : this.ro - 1 - S;
      v.st = V
    }
  }
  me(t, e, i) {
    this.Fo();
    const s = this.No(),
      o = b(this.zh()),
      r = o.Th(),
      h = o.Ph(),
      l = this.Lo() - 1,
      a = this.Oo(),
      c = l / (h - r),
      u = i === void 0 ? 0 : i.from,
      d = i === void 0 ? t.length : i.to,
      f = this.jo();
    for (let p = u; p < d; p++) {
      const v = t[p];
      let g = v.we,
        y = v.ge,
        S = v.Me,
        V = v.xe;
      f !== null && (g = f(v.we, e), y = f(v.ge, e), S = f(v.Me, e), V = f(v.xe, e));
      let P = s + c * (g - r),
        O = a ? P : this.ro - 1 - P;
      v.ve = O, P = s + c * (y - r), O = a ? P : this.ro - 1 - P, v.ce = O, P = s + c * (S - r), O = a ? P : this.ro - 1 - P, v.de = O, P = s + c * (V - r), O = a ? P : this.ro - 1 - P, v.pe = O
    }
  }
  pn(t, e) {
    const i = this.Co(t, e);
    return this.Ho(i, e)
  }
  Ho(t, e) {
    let i = t;
    return this.gh() ? i = function(s, o) {
      return o < 0 && (s = -s), s / 100 * o + o
    }(i, e) : this.Vo() && (i = function(s, o) {
      return s -= 100, o < 0 && (s = -s), s / 100 * o + o
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
    return t = bn(t), this.po = t, this.po
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
    this.gh() || this.Vo() || this.bo === null && this.lo === null && (this.Ni() || (this.bo = this.ro - t, this.lo = b(this.zh()).Ch()))
  }
  Go(t) {
    if (this.gh() || this.Vo() || this.bo === null) return;
    this.Po({
      Wn: !1
    }), (t = this.ro - t) < 0 && (t = 0);
    let e = (this.bo + .2 * (this.ro - 1)) / (t + .2 * (this.ro - 1));
    const i = b(this.lo).Ch();
    e = Math.max(e, .1), i.Dh(e), this.Bo(i)
  }
  Jo() {
    this.gh() || this.Vo() || (this.bo = null, this.lo = null)
  }
  Qo(t) {
    this.Do() || this.wo === null && this.lo === null && (this.Ni() || (this.wo = t, this.lo = b(this.zh()).Ch()))
  }
  t_(t) {
    if (this.Do() || this.wo === null) return;
    const e = b(this.zh()).Rh() / (this.Lo() - 1);
    let i = t - this.wo;
    this.Oo() && (i *= -1);
    const s = i * e,
      o = b(this.lo).Ch();
    o.Vh(s), this.Bo(o, !0), this.mo = null
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
        return this.n_(Ut(t, e));
      case 3:
        return this.ma().format(ee(t, e));
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
    return this.Fh(t, b(this.s_()).ma())
  }
  Yl(t, e) {
    return t = Ut(t, e), this.n_(t, ns)
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
    t !== null && (e = Math.round(1 / t.pa())), this.ba = os, this.gh() ? (this.ba = ns, e = 100) : this.Vo() ? (this.ba = new Ue(100, 1), e = 100) : t !== null && (this.ba = t.ma()), this.yo = new is(this, e, this.Co.bind(this), this.To.bind(this)), this.yo.Qa()
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
    t = this.eo() && t ? Re(t, this.Mo) : t;
    const i = b(this.zh()),
      s = this.No() + (this.Lo() - 1) * (t - i.Th()) / i.Rh();
    return this.Wo(s)
  }
  Co(t, e) {
    if (this.Fo(), this.Ni()) return 0;
    const i = this.Wo(t),
      s = b(this.zh()),
      o = s.Th() + s.Rh() * ((i - this.No()) / (this.Lo() - 1));
    return this.eo() ? ie(o, this.Mo) : o
  }
  Ao() {
    this.mo = null, this.yo.Qa()
  }
  h_() {
    const t = this.ao._o;
    if (t === null) return;
    let e = null;
    const i = this.e_();
    let s = 0,
      o = 0;
    for (const l of i) {
      if (!l.yt()) continue;
      const a = l.Ct();
      if (a === null) continue;
      const c = l.Al(t.Vs(), t.ui());
      let u = c && c.zh();
      if (u !== null) {
        switch (this.cn.mode) {
          case 1:
            u = Gt(u, this.Mo);
            break;
          case 2:
            u = Eh(u, a.Vt);
            break;
          case 3:
            u = Th(u, a.Vt)
        }
        if (e = e === null ? u : e.ts(b(u)), c !== null) {
          const d = c.Lh();
          d !== null && (s = Math.max(s, d.above), o = Math.max(o, d.below))
        }
      }
    }
    if (s === this.uo && o === this.co || (this.uo = s, this.co = o, this.mo = null, this.Ro()), e !== null) {
      if (e.Th() === e.Ph()) {
        const l = this.s_(),
          a = 5 * (l === null || this.gh() || this.Vo() ? 1 : l.pa());
        this.eo() && (e = we(e, this.Mo)), e = new ht(e.Th() - a, e.Ph() + a), this.eo() && (e = Gt(e, this.Mo))
      }
      if (this.eo()) {
        const l = we(e, this.Mo),
          a = qe(l);
        if (r = a, h = this.Mo, r.Ha !== h.Ha || r.$a !== h.$a) {
          const c = this.lo !== null ? we(this.lo, this.Mo) : null;
          this.Mo = a, e = Gt(l, a), c !== null && (this.lo = Gt(c, a))
        }
      }
      this.Bo(e)
    } else this.Ah === null && (this.Bo(new ht(-.5, .5)), this.Mo = qe(null));
    var r, h;
    this.ao.oo = !0
  }
  jo() {
    return this.gh() ? Ut : this.Vo() ? ee : this.eo() ? t => Re(t, this.Mo) : null
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
class xh {
  constructor(t, e) {
    this.vo = [], this.a_ = new Map, this.ro = 0, this.o_ = 0, this.__ = 1e3, this.po = null, this.u_ = new X, this.kl = t, this.$i = e, this.c_ = new Lh(this);
    const i = e.W();
    this.d_ = this.f_("left", i.leftPriceScale), this.v_ = this.f_("right", i.rightPriceScale), this.d_.Io().l(this.p_.bind(this, this.d_), this), this.v_.Io().l(this.p_.bind(this, this.v_), this), this.m_(i)
  }
  m_(t) {
    if (t.leftPriceScale && this.d_.Hh(t.leftPriceScale), t.rightPriceScale && this.v_.Hh(t.rightPriceScale), t.localization && (this.d_.Pa(), this.v_.Pa()), t.overlayPriceScales) {
      const e = Array.from(this.a_.values());
      for (const i of e) {
        const s = b(i[0].Dt());
        s.Hh(t.overlayPriceScales), t.localization && s.Pa()
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
    const s = i !== void 0 ? i : this.y_().k_ + 1;
    this.C_(t, e, s)
  }
  Yo(t) {
    const e = this.vo.indexOf(t);
    $t(e !== -1, "removeDataSource: invalid data source"), this.vo.splice(e, 1);
    const i = b(t.Dt()).Ta();
    if (this.a_.has(i)) {
      const o = nt(this.a_.get(i)),
        r = o.indexOf(t);
      r !== -1 && (o.splice(r, 1), o.length === 0 && this.a_.delete(i))
    }
    const s = t.Dt();
    s && s.Oa().indexOf(t) >= 0 && s.Yo(t), s !== null && (s.qo(), this.T_(s)), this.po = null
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
    return this.po === null && (this.po = bn(this.vo)), this.po
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
    for (let s = 0; s < t.length; s++) {
      const o = t[s].Xi();
      o !== null && (o < e && (e = o), o > i && (i = o))
    }
    return {
      j_: e,
      k_: i
    }
  }
  C_(t, e, i) {
    let s = this.b_(e);
    if (s === null && (s = this.f_(e, this.$i.W().overlayPriceScales)), this.vo.push(t), !Oe(e)) {
      const o = this.a_.get(e) || [];
      o.push(t), this.a_.set(e, o)
    }
    s.Uo(t), t.Gi(s), t.Ki(i), this.T_(s), this.po = null
  }
  p_(t, e, i) {
    e.yr !== i.yr && this.z_(t)
  }
  f_(t, e) {
    const i = Object.assign({
        visible: !0,
        autoScale: !0
      }, kt(e)),
      s = new $h(t, i, this.$i.W().layout, this.$i.W().localization);
    return s.zo(this.At()), s
  }
}
class Ph {
  constructor(t, e, i = 50) {
    this.Xe = 0, this.Ke = 1, this.Ge = 1, this.Qe = new Map, this.Je = new Map, this.H_ = t, this.U_ = e, this.tr = i
  }
  q_(t) {
    const e = t.time,
      i = this.U_.cacheKey(e),
      s = this.Qe.get(i);
    if (s !== void 0) return s.Y_;
    if (this.Xe === this.tr) {
      const r = this.Je.get(this.Ge);
      this.Je.delete(this.Ge), this.Qe.delete(nt(r)), this.Ge++, this.Xe--
    }
    const o = this.H_(t);
    return this.Qe.set(i, {
      Y_: o,
      er: this.Ke
    }), this.Je.set(this.Ke, i), this.Xe++, this.Ke++, o
  }
}
class se {
  constructor(t, e) {
    $t(t <= e, "right should be >= left"), this.Z_ = t, this.X_ = e
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

function rs(n, t) {
  return n === null || t === null ? n === t : n.yh(t)
}
class Vh {
  constructor() {
    this.G_ = new Map, this.Qe = null, this.J_ = !1
  }
  Q_(t) {
    this.J_ = t, this.Qe = null
  }
  tu(t, e) {
    this.iu(e), this.Qe = null;
    for (let i = e; i < t.length; ++i) {
      const s = t[i];
      let o = this.G_.get(s.timeWeight);
      o === void 0 && (o = [], this.G_.set(s.timeWeight, o)), o.push({
        index: i,
        time: s.time,
        weight: s.timeWeight,
        originalTime: s.originalTime
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
    this.G_.forEach((i, s) => {
      t <= i[0].index ? e.push(s) : i.splice(fe(i, t, o => o.index < t), 1 / 0)
    });
    for (const i of e) this.G_.delete(i)
  }
  eu(t) {
    let e = [];
    for (const i of Array.from(this.G_.keys()).sort((s, o) => o - s)) {
      if (!this.G_.get(i)) continue;
      const s = e;
      e = [];
      const o = s.length;
      let r = 0;
      const h = nt(this.G_.get(i)),
        l = h.length;
      let a = 1 / 0,
        c = -1 / 0;
      for (let u = 0; u < l; u++) {
        const d = h[u],
          f = d.index;
        for (; r < o;) {
          const p = s[r],
            v = p.index;
          if (!(v < f)) {
            a = v;
            break
          }
          r++, e.push(p), c = v, a = 1 / 0
        }
        if (a - f >= t && f - c >= t) e.push(d), c = f;
        else if (this.J_) return s
      }
      for (; r < o; r++) e.push(s[r])
    }
    return e
  }
}
class Ft {
  constructor(t) {
    this.ru = t
  }
  hu() {
    return this.ru === null ? null : new se(Math.floor(this.ru.Vs()), Math.ceil(this.ru.ui()))
  }
  lu() {
    return this.ru
  }
  static au() {
    return new Ft(null)
  }
}

function Rh(n, t) {
  return n.weight > t.weight ? n : t
}
class Ih {
  constructor(t, e, i, s) {
    this.o_ = 0, this.ou = null, this._u = [], this.wo = null, this.bo = null, this.uu = new Vh, this.cu = new Map, this.du = Ft.au(), this.fu = !0, this.vu = new X, this.pu = new X, this.mu = new X, this.bu = null, this.wu = null, this.gu = [], this.cn = e, this.ko = i, this.Mu = e.rightOffset, this.xu = e.barSpacing, this.$i = t, this.U_ = s, this.Su(), this.uu.Q_(e.uniformDistribution)
  }
  W() {
    return this.cn
  }
  ku(t) {
    bt(this.ko, t), this.yu(), this.Su()
  }
  Hh(t, e) {
    var i;
    bt(this.cn, t), this.cn.fixLeftEdge && this.Cu(), this.cn.fixRightEdge && this.Tu(), t.barSpacing !== void 0 && this.$i.Gn(t.barSpacing), t.rightOffset !== void 0 && this.$i.Jn(t.rightOffset), t.minBarSpacing !== void 0 && this.$i.Gn((i = t.barSpacing) !== null && i !== void 0 ? i : this.xu), this.yu(), this.Su(), this.mu.m()
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
    const i = fe(this._u, this.U_.key(t), (s, o) => this.U_.key(s.time) < o);
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
      s = b(this.Ou()),
      o = b(this.Bu());
    return {
      from: b(this.Ui(Math.max(s, e))),
      to: b(this.Ui(Math.min(o, i)))
    }
  }
  Au(t) {
    return {
      from: b(this.Da(t.from, !0)),
      to: b(this.Da(t.to, !0))
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
      const s = this.xu * t / i;
      this.xu = s
    }
    if (this.cn.fixLeftEdge && e !== null && e.Vs() <= 0) {
      const s = i - t;
      this.Mu -= Math.round(s / this.xu) + 1, this.fu = !0
    }
    this.Iu(), this.zu()
  }
  It(t) {
    if (this.Ni() || !he(t)) return 0;
    const e = this.Lu() + this.Mu - t;
    return this.o_ - (e + .5) * this.xu - 1
  }
  Js(t, e) {
    const i = this.Lu(),
      s = e === void 0 ? 0 : e.from,
      o = e === void 0 ? t.length : e.to;
    for (let r = s; r < o; r++) {
      const h = t[r].ot,
        l = i + this.Mu - h,
        a = this.o_ - (l + .5) * this.xu - 1;
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
      i = Math.round(e / t),
      s = b(this.Zs()),
      o = Math.max(s.Vs(), s.Vs() - i),
      r = Math.max(s.ui(), s.ui() - i),
      h = this.uu.nu(t, e),
      l = this.Ou() + i,
      a = this.Bu() - i,
      c = this.Hu(),
      u = this.cn.fixLeftEdge || c,
      d = this.cn.fixRightEdge || c;
    let f = 0;
    for (const p of h) {
      if (!(o <= p.index && p.index <= r)) continue;
      let v;
      f < this.gu.length ? (v = this.gu[f], v.coord = this.It(p.index), v.label = this.$u(p), v.weight = p.weight) : (v = {
        needAlignCoordinate: !1,
        coord: this.It(p.index),
        label: this.$u(p),
        weight: p.weight
      }, this.gu.push(v)), this.xu > e / 2 && !c ? v.needAlignCoordinate = !1 : v.needAlignCoordinate = u && p.index <= l || d && p.index >= a, f++
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
      s = this.he(),
      o = s + e * (s / 10);
    this.Gn(o), this.cn.rightBarStaysOnScroll || this.Jn(this.ju() + (i - this.Nu(t)))
  }
  Ko(t) {
    this.wo && this.i_(), this.bo === null && this.bu === null && (this.Ni() || (this.bo = t, this.Zu()))
  }
  Go(t) {
    if (this.bu === null) return;
    const e = pi(this.o_ - t, 0, this.o_),
      i = pi(this.o_ - b(this.bo), 0, this.o_);
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
    this.Mu = b(this.bu).ju + e, this.fu = !0, this.zu()
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
      s = performance.now();
    this.$i.Zn({
      Ju: o => (o - s) / e >= 1,
      Qu: o => {
        const r = (o - s) / e;
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
    t !== null && e !== null && this.ec(new se(t, e + this.cn.rightOffset))
  }
  hc(t) {
    const e = new se(t.from, t.to);
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
    if (this.fu = !1, this.Ni()) return void this.oc(Ft.au());
    const t = this.Lu(),
      e = this.o_ / this.xu,
      i = this.Mu + t,
      s = new se(i - e + 1, i);
    this.oc(new Ft(s))
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
    return e === void 0 && (e = new Ph(i => this.dc(i), this.U_), this.cu.set(t.weight, e)), e.q_(t)
  }
  dc(t) {
    return this.U_.formatTickmark(t, this.ko)
  }
  oc(t) {
    const e = this.du;
    this.du = t, rs(e.hu(), this.du.hu()) || this.vu.m(), rs(e.lu(), this.du.lu()) || this.pu.m(), this.ac()
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
      const s = this.Mu - i - 1;
      this.Jn(s)
    }
    this.Iu()
  }
  Tu() {
    this.zu(), this.Iu()
  }
}
class Wh {
  X(t, e, i) {
    t.useMediaCoordinateSpace(s => this.K(s, e, i))
  }
  wl(t, e, i) {
    t.useMediaCoordinateSpace(s => this.fc(s, e, i))
  }
  fc(t, e, i) {}
}
class Bh extends Wh {
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
    let s = 0;
    for (const r of this.zt.mc) {
      if (r.Kt.length === 0) continue;
      e.font = r.R;
      const h = this.bc(e, r.Kt);
      h > i.width ? r.Yu = i.width / h : r.Yu = 1, s += r.wc * r.Yu
    }
    let o = 0;
    switch (this.zt.gc) {
      case "top":
        o = 0;
        break;
      case "center":
        o = Math.max((i.height - s) / 2, 0);
        break;
      case "bottom":
        o = Math.max(i.height - s, 0)
    }
    e.fillStyle = this.zt.V;
    for (const r of this.zt.mc) {
      e.save();
      let h = 0;
      switch (this.zt.Mc) {
        case "left":
          e.textAlign = "left", h = r.wc / 2;
          break;
        case "center":
          e.textAlign = "center", h = i.width / 2;
          break;
        case "right":
          e.textAlign = "right", h = i.width - 1 - r.wc / 2
      }
      e.translate(h, o), e.textBaseline = "top", e.font = r.R, e.scale(r.Yu, r.Yu), e.fillText(r.Kt, 0, r.xc), e.restore(), o += r.wc * r.Yu
    }
  }
  bc(t, e) {
    const i = this.Sc(t.font);
    let s = i.get(e);
    return s === void 0 && (s = t.measureText(e).width, i.set(e, s)), s
  }
  Sc(t) {
    let e = this.vc.get(t);
    return e === void 0 && (e = new Map, this.vc.set(t, e)), e
  }
}
class Ah {
  constructor(t) {
    this.ft = !0, this.Ft = {
      yt: !1,
      V: "",
      mc: [],
      gc: "center",
      Mc: "center"
    }, this.Wt = new Bh(this.Ft), this.jt = t
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
      R: Kt(t.fontSize, t.fontFamily, t.fontStyle),
      wc: 1.2 * t.fontSize,
      xc: 0,
      Yu: 0
    }])
  }
}
class Dh extends ji {
  constructor(t, e) {
    super(), this.cn = e, this.wn = new Ah(this)
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
var hs, ls, as, cs, us;
(function(n) {
  n[n.OnTouchEnd = 0] = "OnTouchEnd", n[n.OnNextTap = 1] = "OnNextTap"
})(hs || (hs = {}));
class Nh {
  constructor(t, e, i) {
    this.kc = [], this.yc = [], this.o_ = 0, this.Cc = null, this.Tc = new X, this.Pc = new X, this.Rc = null, this.Dc = t, this.cn = e, this.U_ = i, this.Vc = new _r(this), this.kl = new Ih(this, e.timeScale, this.cn.localization, i), this.vt = new Tr(this, e.crosshair), this.Oc = new Ch(e.crosshair), this.Bc = new Dh(this, e.watermark), this.Ac(), this.kc[0].M_(2e3), this.Ic = this.zc(0), this.Lc = this.zc(1)
  }
  Xl() {
    this.Ec(tt.es())
  }
  $h() {
    this.Ec(tt.ss())
  }
  aa() {
    this.Ec(new tt(1))
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
    bt(this.cn, t), this.kc.forEach(e => e.m_(t)), t.timeScale !== void 0 && this.kl.Hh(t.timeScale), t.localization !== void 0 && this.kl.ku(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Tc.m(), this.Ic = this.zc(0), this.Lc = this.zc(1), this.Xl()
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
    const e = new xh(this.kl, this);
    t !== void 0 ? this.kc.splice(t, 0, e) : this.kc.push(e);
    const i = t === void 0 ? this.kc.length - 1 : t,
      s = tt.es();
    return s.Nn(i, {
      Fn: 0,
      Wn: !0
    }), this.Ec(s), e
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
    const s = i.Hi();
    t = Math.max(1, Math.min(t, s)), i.Yu(t, e), this.Fu()
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
  hd(t, e, i, s, o) {
    this.vt.gn(t, e);
    let r = NaN,
      h = this.kl.Eu(t);
    const l = this.kl.Zs();
    l !== null && (h = Math.min(Math.max(l.Vs(), h), l.ui()));
    const a = s.vn(),
      c = a.Ct();
    c !== null && (r = a.pn(e, c)), r = this.Oc.Va(r, h, s), this.vt.kn(h, r, s), this.aa(), o || this.Pc.m(this.vt.xt(), {
      x: t,
      y: e
    }, i)
  }
  ld(t, e, i) {
    const s = i.vn(),
      o = s.Ct(),
      r = s.Rt(t, b(o)),
      h = this.kl.Da(e, !0),
      l = this.kl.It(b(h));
    this.hd(l, r, null, i, !0)
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
    const s = this.kl.mn(0);
    e !== void 0 && i !== void 0 && this.kl.bt(e, i);
    const o = this.kl.mn(0),
      r = this.kl.Lu(),
      h = this.kl.Zs();
    if (h !== null && s !== null && o !== null) {
      const l = h.Xr(r),
        a = this.U_.key(s) > this.U_.key(o),
        c = t !== null && t > r && !a,
        u = this.kl.W().allowShiftVisibleRangeOnWhitespaceReplacement,
        d = l && (i !== void 0 || u) && this.kl.W().shiftVisibleRangeOnNewBar;
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
    const s = this.kc[0],
      o = this.dd(e, t, s, i);
    return this.yc.push(o), this.yc.length === 1 ? this.Xl() : this.$h(), o
  }
  fd(t) {
    const e = this.cr(t),
      i = this.yc.indexOf(t);
    $t(i !== -1, "Series not found"), this.yc.splice(i, 1), b(e).Yo(t), t.S && t.S()
  }
  Zl(t, e) {
    const i = b(this.cr(t));
    i.Yo(t);
    const s = this.$c(e);
    if (s === null) {
      const o = t.Xi();
      i.Uo(t, e, o)
    } else {
      const o = s.Ht === i ? t.Xi() : void 0;
      s.Ht.Uo(t, e, o)
    }
  }
  rc() {
    const t = tt.ss();
    t.$n(), this.Ec(t)
  }
  vd(t) {
    const e = tt.ss();
    e.Yn(t), this.Ec(e)
  }
  Kn() {
    const t = tt.ss();
    t.Kn(), this.Ec(t)
  }
  Gn(t) {
    const e = tt.ss();
    e.Gn(t), this.Ec(e)
  }
  Jn(t) {
    const e = tt.ss();
    e.Jn(t), this.Ec(e)
  }
  Zn(t) {
    const e = tt.ss();
    e.Zn(t), this.Ec(e)
  }
  Un() {
    const t = tt.ss();
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
    const s = function(o, r, h) {
      const [l, a, c, u] = re(o), [d, f, p, v] = re(r), g = [mt(l + h * (d - l)), mt(a + h * (f - a)), mt(c + h * (p - c)), qs(u + h * (v - u))];
      return `rgba(${g[0]}, ${g[1]}, ${g[2]}, ${g[3]})`
    }(i, e, t / 100);
    return this.Rc.bd.set(t, s), s
  }
  Kc(t, e) {
    const i = new tt(e);
    if (t !== null) {
      const s = this.kc.indexOf(t);
      i.Nn(s, {
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
  dd(t, e, i, s) {
    const o = new Ti(this, t, e, i, s),
      r = t.priceScaleId !== void 0 ? t.priceScaleId : this.pd();
    return i.Uo(o, r), Oe(r) || o.Hh(t), o
  }
  zc(t) {
    const e = this.cn.layout;
    return e.background.type === "gradient" ? t === 0 ? e.background.topColor : e.background.bottomColor : e.background.color
  }
}

function vi(n) {
  return !wt(n) && !de(n)
}

function gn(n) {
  return wt(n)
}(function(n) {
  n[n.Disabled = 0] = "Disabled", n[n.Continuous = 1] = "Continuous", n[n.OnDataUpdate = 2] = "OnDataUpdate"
})(ls || (ls = {})),
function(n) {
  n[n.LastBar = 0] = "LastBar", n[n.LastVisible = 1] = "LastVisible"
}(as || (as = {})),
function(n) {
  n.Solid = "solid", n.VerticalGradient = "gradient"
}(cs || (cs = {})),
function(n) {
  n[n.Year = 0] = "Year", n[n.Month = 1] = "Month", n[n.DayOfMonth = 2] = "DayOfMonth", n[n.Time = 3] = "Time", n[n.TimeWithSeconds = 4] = "TimeWithSeconds"
}(us || (us = {}));
const ds = n => n.getUTCFullYear();

function Oh(n, t, e) {
  return t.replace(/yyyy/g, (i => Ct(ds(i), 4))(n)).replace(/yy/g, (i => Ct(ds(i) % 100, 2))(n)).replace(/MMMM/g, ((i, s) => new Date(i.getUTCFullYear(), i.getUTCMonth(), 1).toLocaleString(s, {
    month: "long"
  }))(n, e)).replace(/MMM/g, ((i, s) => new Date(i.getUTCFullYear(), i.getUTCMonth(), 1).toLocaleString(s, {
    month: "short"
  }))(n, e)).replace(/MM/g, (i => Ct((s => s.getUTCMonth() + 1)(i), 2))(n)).replace(/dd/g, (i => Ct((s => s.getUTCDate())(i), 2))(n))
}
class _n {
  constructor(t = "yyyy-MM-dd", e = "default") {
    this.wd = t, this.gd = e
  }
  q_(t) {
    return Oh(t, this.wd, this.gd)
  }
}
class Uh {
  constructor(t) {
    this.Md = t || "%h:%m:%s"
  }
  q_(t) {
    return this.Md.replace("%h", Ct(t.getUTCHours(), 2)).replace("%m", Ct(t.getUTCMinutes(), 2)).replace("%s", Ct(t.getUTCSeconds(), 2))
  }
}
const Fh = {
  xd: "yyyy-MM-dd",
  Sd: "%h:%m:%s",
  kd: " ",
  yd: "default"
};
class Jh {
  constructor(t = {}) {
    const e = Object.assign(Object.assign({}, Fh), t);
    this.Cd = new _n(e.xd, e.yd), this.Td = new Uh(e.Sd), this.Pd = e.kd
  }
  q_(t) {
    return `${this.Cd.q_(t)}${this.Pd}${this.Td.q_(t)}`
  }
}

function ye(n) {
  return 60 * n * 60 * 1e3
}

function ti(n) {
  return 60 * n * 1e3
}
const Me = [{
  Rd: (fs = 1, 1e3 * fs),
  Dd: 10
}, {
  Rd: ti(1),
  Dd: 20
}, {
  Rd: ti(5),
  Dd: 21
}, {
  Rd: ti(30),
  Dd: 22
}, {
  Rd: ye(1),
  Dd: 30
}, {
  Rd: ye(3),
  Dd: 31
}, {
  Rd: ye(6),
  Dd: 32
}, {
  Rd: ye(12),
  Dd: 33
}];
var fs;

function ms(n, t) {
  if (n.getUTCFullYear() !== t.getUTCFullYear()) return 70;
  if (n.getUTCMonth() !== t.getUTCMonth()) return 60;
  if (n.getUTCDate() !== t.getUTCDate()) return 50;
  for (let e = Me.length - 1; e >= 0; --e)
    if (Math.floor(t.getTime() / Me[e].Rd) !== Math.floor(n.getTime() / Me[e].Rd)) return Me[e].Dd;
  return 0
}

function ei(n) {
  let t = n;
  if (de(n) && (t = $i(n)), !vi(t)) throw new Error("time must be of type BusinessDay");
  const e = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
  return {
    Vd: Math.round(e.getTime() / 1e3),
    Od: t
  }
}

function ps(n) {
  if (!gn(n)) throw new Error("time must be of type isUTCTimestamp");
  return {
    Vd: n
  }
}

function $i(n) {
  const t = new Date(n);
  if (isNaN(t.getTime())) throw new Error(`Invalid date string=${n}, expected format=yyyy-mm-dd`);
  return {
    day: t.getUTCDate(),
    month: t.getUTCMonth() + 1,
    year: t.getUTCFullYear()
  }
}

function vs(n) {
  de(n.time) && (n.time = $i(n.time))
}
class bs {
  options() {
    return this.cn
  }
  setOptions(t) {
    this.cn = t, this.updateFormatter(t.localization)
  }
  preprocessData(t) {
    Array.isArray(t) ? function(e) {
      e.forEach(vs)
    }(t) : vs(t)
  }
  createConverterToInternalObj(t) {
    return b(function(e) {
      return e.length === 0 ? null : vi(e[0].time) || de(e[0].time) ? ei : ps
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
    return gn(e = t) ? ps(e) : vi(e) ? ei(e) : ei($i(e));
    var e
  }
  updateFormatter(t) {
    if (!this.cn) return;
    const e = t.dateFormat;
    this.cn.timeScale.timeVisible ? this.Bd = new Jh({
      xd: e,
      Sd: this.cn.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m",
      kd: "   ",
      yd: t.locale
    }) : this.Bd = new _n(e, t.locale)
  }
  formatHorzItem(t) {
    const e = t;
    return this.Bd.q_(new Date(1e3 * e.Vd))
  }
  formatTickmark(t, e) {
    const i = function(o, r, h) {
        switch (o) {
          case 0:
          case 10:
            return r ? h ? 4 : 3 : 2;
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
      s = this.cn.timeScale;
    if (s.tickMarkFormatter !== void 0) {
      const o = s.tickMarkFormatter(t.originalTime, i, e.locale);
      if (o !== null) return o
    }
    return function(o, r, h) {
      const l = {};
      switch (r) {
        case 0:
          l.year = "numeric";
          break;
        case 1:
          l.month = "short";
          break;
        case 2:
          l.day = "numeric";
          break;
        case 3:
          l.hour12 = !1, l.hour = "2-digit", l.minute = "2-digit";
          break;
        case 4:
          l.hour12 = !1, l.hour = "2-digit", l.minute = "2-digit", l.second = "2-digit"
      }
      const a = o.Od === void 0 ? new Date(1e3 * o.Vd) : new Date(Date.UTC(o.Od.year, o.Od.month - 1, o.Od.day));
      return new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()).toLocaleString(h, l)
    }(t.time, i, e.locale)
  }
  maxTickMarkWeight(t) {
    let e = t.reduce(Rh, t[0]).weight;
    return e > 30 && e < 50 && (e = 30), e
  }
  fillWeightsForPoints(t, e) {
    (function(i, s = 0) {
      if (i.length === 0) return;
      let o = s === 0 ? null : i[s - 1].time.Vd,
        r = o !== null ? new Date(1e3 * o) : null,
        h = 0;
      for (let l = s; l < i.length; ++l) {
        const a = i[l],
          c = new Date(1e3 * a.time.Vd);
        r !== null && (a.timeWeight = ms(c, r)), h += a.time.Vd - (o || a.time.Vd), o = a.time.Vd, r = c
      }
      if (s === 0 && i.length > 1) {
        const l = Math.ceil(h / (i.length - 1)),
          a = new Date(1e3 * (i[0].time.Vd - l));
        i[0].timeWeight = ms(new Date(1e3 * i[0].time.Vd), a)
      }
    })(t, e)
  }
  static Ad(t) {
    return bt({
      localization: {
        dateFormat: "dd MMM 'yy"
      }
    }, t ?? {})
  }
}
const Ht = typeof window < "u";

function gs() {
  return !!Ht && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
}

function ii() {
  return !!Ht && /iPhone|iPad|iPod/.test(window.navigator.platform)
}

function bi(n) {
  return n + n % 2
}

function si(n, t) {
  return n.Id - t.Id
}

function ni(n, t, e) {
  const i = (n.Id - t.Id) / (n.ot - t.ot);
  return Math.sign(i) * Math.min(Math.abs(i), e)
}
class Kh {
  constructor(t, e, i, s) {
    this.zd = null, this.Ld = null, this.Ed = null, this.Nd = null, this.Fd = null, this.Wd = 0, this.jd = 0, this.Hd = t, this.$d = e, this.Ud = i, this.rs = s
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
    const s = ni(this.zd, this.Ld, this.$d),
      o = si(this.zd, this.Ld),
      r = [s],
      h = [o];
    if (i += o, this.Ed !== null) {
      const a = ni(this.Ld, this.Ed, this.$d);
      if (Math.sign(a) === Math.sign(s)) {
        const c = si(this.Ld, this.Ed);
        if (r.push(a), h.push(c), i += c, this.Nd !== null) {
          const u = ni(this.Ed, this.Nd, this.$d);
          if (Math.sign(u) === Math.sign(s)) {
            const d = si(this.Ed, this.Nd);
            r.push(u), h.push(d), i += d
          }
        }
      }
    }
    let l = 0;
    for (let a = 0; a < r.length; ++a) l += h[a] / i * r[a];
    Math.abs(l) < this.Hd || (this.Fd = {
      Id: t,
      ot: e
    }, this.jd = l, this.Wd = function(a, c) {
      const u = Math.log(c);
      return Math.log(1 * u / -a) / u
    }(Math.abs(l), this.Ud))
  }
  Qu(t) {
    const e = b(this.Fd),
      i = t - e.ot;
    return e.Id + this.jd * (Math.pow(this.Ud, i) - 1) / Math.log(this.Ud)
  }
  Ju(t) {
    return this.Fd === null || this.Yd(t) === this.Wd
  }
  Yd(t) {
    const e = t - b(this.Fd).ot;
    return Math.min(e, this.Wd)
  }
}
class Hh {
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
    return Qs(re(this.Jd.W().layout.textColor)) > 160 ? "dark" : "light"
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

function Bt(n, t) {
  const e = b(n.ownerDocument).createElement("canvas");
  n.appendChild(e);
  const i = nr(e, {
    type: "device-pixel-content-box",
    options: {
      allowResizeObserver: !1
    },
    transform: (s, o) => ({
      width: Math.max(s.width, o.width),
      height: Math.max(s.height, o.height)
    })
  });
  return i.resizeCanvasElement(t), i
}

function At(n) {
  var t;
  n.width = 1, n.height = 1, (t = n.getContext("2d")) === null || t === void 0 || t.clearRect(0, 0, 1, 1)
}

function gi(n, t, e, i) {
  n.wl && n.wl(t, e, i)
}

function ze(n, t, e, i) {
  n.X(t, e, i)
}

function _i(n, t, e, i) {
  const s = n(e, i);
  for (const o of s) {
    const r = o.gt();
    r !== null && t(r)
  }
}

function Xh(n) {
  Ht && window.chrome !== void 0 && n.addEventListener("mousedown", t => {
    if (t.button === 1) return t.preventDefault(), !1
  })
}
class xi {
  constructor(t, e, i) {
    this.rf = 0, this.hf = null, this.lf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }, this.af = 0, this._f = null, this.uf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }, this.cf = null, this.df = !1, this.ff = null, this.vf = null, this.pf = !1, this.mf = !1, this.bf = !1, this.wf = null, this.gf = null, this.Mf = null, this.xf = null, this.Sf = null, this.kf = null, this.yf = null, this.Cf = 0, this.Tf = !1, this.Pf = !1, this.Rf = !1, this.Df = 0, this.Vf = null, this.Of = !ii(), this.Bf = s => {
      this.Af(s)
    }, this.If = s => {
      if (this.zf(s)) {
        const o = this.Lf(s);
        if (++this.af, this._f && this.af > 1) {
          const {
            Ef: r
          } = this.Nf(_t(s), this.uf);
          r < 30 && !this.bf && this.Ff(o, this.jf.Wf), this.Hf()
        }
      } else {
        const o = this.Lf(s);
        if (++this.rf, this.hf && this.rf > 1) {
          const {
            Ef: r
          } = this.Nf(_t(s), this.lf);
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
    const e = oi(t.changedTouches, b(this.Vf));
    if (e === null || (this.Df = Se(t), this.yf !== null) || this.Pf) return;
    this.Tf = !0;
    const i = this.Nf(_t(e), b(this.vf)),
      {
        iv: s,
        nv: o,
        Ef: r
      } = i;
    if (this.pf || !(r < 5)) {
      if (!this.pf) {
        const h = .5 * s,
          l = o >= h && !this.cn.sv(),
          a = h > o && !this.cn.ev();
        l || a || (this.Pf = !0), this.pf = !0, this.bf = !0, this.Xf(), this.Hf()
      }
      if (!this.Pf) {
        const h = this.Lf(t, e);
        this.Ff(h, this.jf.rv), Nt(t)
      }
    }
  }
  hv(t) {
    if (t.button !== 0) return;
    const e = this.Nf(_t(t), b(this.ff)),
      {
        Ef: i
      } = e;
    if (i >= 5 && (this.mf = !0, this.qf()), this.mf) {
      const s = this.Lf(t);
      this.$f(s, this.jf.lv)
    }
  }
  Nf(t, e) {
    const i = Math.abs(e.nt - t.nt),
      s = Math.abs(e.st - t.st);
    return {
      iv: i,
      nv: s,
      Ef: i + s
    }
  }
  av(t) {
    let e = oi(t.changedTouches, b(this.Vf));
    if (e === null && t.touches.length === 0 && (e = t.changedTouches[0]), e === null) return;
    this.Vf = null, this.Df = Se(t), this.Xf(), this.vf = null, this.kf && (this.kf(), this.kf = null);
    const i = this.Lf(t, e);
    if (this.Ff(i, this.jf.ov), ++this.af, this._f && this.af > 1) {
      const {
        Ef: s
      } = this.Nf(_t(e), this.uf);
      s < 30 && !this.bf && this.Ff(i, this.jf.Wf), this.Hf()
    } else this.bf || (this.Ff(i, this.jf._v), this.jf._v && Nt(t));
    this.af === 0 && Nt(t), t.touches.length === 0 && this.df && (this.df = !1, Nt(t))
  }
  Af(t) {
    if (t.button !== 0) return;
    const e = this.Lf(t);
    if (this.ff = null, this.Rf = !1, this.Sf && (this.Sf(), this.Sf = null), gs() && this.Yf.ownerDocument.documentElement.removeEventListener("mouseleave", this.Bf), !this.zf(t))
      if (this.$f(e, this.jf.uv), ++this.rf, this.hf && this.rf > 1) {
        const {
          Ef: i
        } = this.Nf(_t(t), this.lf);
        i < 5 && !this.mf && this.$f(e, this.jf.Uf), this.qf()
      } else this.mf || this.$f(e, this.jf.cv)
  }
  Xf() {
    this.cf !== null && (clearTimeout(this.cf), this.cf = null)
  }
  dv(t) {
    if (this.Vf !== null) return;
    const e = t.changedTouches[0];
    this.Vf = e.identifier, this.Df = Se(t);
    const i = this.Yf.ownerDocument.documentElement;
    this.bf = !1, this.pf = !1, this.Pf = !1, this.vf = _t(e), this.kf && (this.kf(), this.kf = null);
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
    const s = this.Lf(t, e);
    this.Ff(s, this.jf.vv), this._f || (this.af = 0, this._f = setTimeout(this.Hf.bind(this), 500), this.uf = _t(e))
  }
  pv(t) {
    if (t.button !== 0) return;
    const e = this.Yf.ownerDocument.documentElement;
    gs() && e.addEventListener("mouseleave", this.Bf), this.mf = !1, this.ff = _t(t), this.Sf && (this.Sf(), this.Sf = null);
    {
      const s = this.hv.bind(this),
        o = this.Af.bind(this);
      this.Sf = () => {
        e.removeEventListener("mousemove", s), e.removeEventListener("mouseup", o)
      }, e.addEventListener("mousemove", s), e.addEventListener("mouseup", o)
    }
    if (this.Rf = !0, this.zf(t)) return;
    const i = this.Lf(t);
    this.$f(i, this.jf.mv), this.hf || (this.rf = 0, this.hf = setTimeout(this.qf.bind(this), 500), this.lf = _t(t))
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
    ii() && (this.Mf = () => {
      this.Yf.removeEventListener("dblclick", this.If)
    }, this.Yf.addEventListener("dblclick", this.If)), this.Yf.addEventListener("mouseleave", this.wv.bind(this)), this.Yf.addEventListener("touchstart", this.dv.bind(this), {
      passive: !0
    }), Xh(this.Yf), this.Yf.addEventListener("mousedown", this.pv.bind(this)), this.gv(), this.Yf.addEventListener("touchmove", () => {}, {
      passive: !1
    })
  }
  gv() {
    this.jf.Mv === void 0 && this.jf.xv === void 0 && this.jf.Sv === void 0 || (this.Yf.addEventListener("touchstart", t => this.kv(t.touches), {
      passive: !0
    }), this.Yf.addEventListener("touchmove", t => {
      if (t.touches.length === 2 && this.yf !== null && this.jf.xv !== void 0) {
        const e = _s(t.touches[0], t.touches[1]) / this.Cf;
        this.jf.xv(this.yf, e), Nt(t)
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
    }, this.Cf = _s(t[0], t[1]), this.jf.Mv !== void 0 && this.jf.Mv(), this.Xf()
  }
  yv() {
    this.yf !== null && (this.yf = null, this.jf.Sv !== void 0 && this.jf.Sv())
  }
  wv(t) {
    if (this.xf && this.xf(), this.zf(t) || !this.Of) return;
    const e = this.Lf(t);
    this.$f(e, this.jf.Tv), this.Of = !ii()
  }
  fv(t) {
    const e = oi(t.touches, b(this.Vf));
    if (e === null) return;
    const i = this.Lf(t, e);
    this.Ff(i, this.jf.Pv), this.bf = !0, this.df = !0
  }
  zf(t) {
    return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents !== void 0 ? t.sourceCapabilities.firesTouchEvents : Se(t) < this.Df + 500
  }
  Ff(t, e) {
    e && e.call(this.jf, t)
  }
  $f(t, e) {
    e && e.call(this.jf, t)
  }
  Lf(t, e) {
    const i = e || t,
      s = this.Yf.getBoundingClientRect() || {
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
      localX: i.clientX - s.left,
      localY: i.clientY - s.top,
      ctrlKey: t.ctrlKey,
      altKey: t.altKey,
      shiftKey: t.shiftKey,
      metaKey: t.metaKey,
      Rv: !t.type.startsWith("mouse") && t.type !== "contextmenu" && t.type !== "click",
      Dv: t.type,
      Vv: i.target,
      Ov: t.view,
      Bv: () => {
        t.type !== "touchstart" && Nt(t)
      }
    }
  }
}

function _s(n, t) {
  const e = n.clientX - t.clientX,
    i = n.clientY - t.clientY;
  return Math.sqrt(e * e + i * i)
}

function Nt(n) {
  n.cancelable && n.preventDefault()
}

function _t(n) {
  return {
    nt: n.pageX,
    st: n.pageY
  }
}

function Se(n) {
  return n.timeStamp || performance.now()
}

function oi(n, t) {
  for (let e = 0; e < n.length; ++e)
    if (n[e].identifier === t) return n[e];
  return null
}

function ke(n) {
  return {
    jc: n.jc,
    Av: {
      wr: n.Iv.externalId
    },
    zv: n.Iv.cursorStyle
  }
}

function Yh(n, t, e) {
  for (const i of n) {
    const s = i.gt();
    if (s !== null && s.br) {
      const o = s.br(t, e);
      if (o !== null) return {
        Ov: i,
        Av: o
      }
    }
  }
  return null
}

function ri(n, t) {
  return e => {
    var i, s, o, r;
    return ((s = (i = e.Dt()) === null || i === void 0 ? void 0 : i.Ta()) !== null && s !== void 0 ? s : "") !== t ? [] : (r = (o = e.ca) === null || o === void 0 ? void 0 : o.call(e, n)) !== null && r !== void 0 ? r : []
  }
}

function ws(n, t, e, i) {
  if (!n.length) return;
  let s = 0;
  const o = e / 2,
    r = n[0].At(i, !0);
  let h = t === 1 ? o - (n[0].Vi() - r / 2) : n[0].Vi() - r / 2 - o;
  h = Math.max(0, h);
  for (let l = 1; l < n.length; l++) {
    const a = n[l],
      c = n[l - 1],
      u = c.At(i, !1),
      d = a.Vi(),
      f = c.Vi();
    if (t === 1 ? d > f - u : d < f + u) {
      const p = f - u * t;
      a.Oi(p);
      const v = p - t * u / 2;
      if ((t === 1 ? v < 0 : v > e) && h > 0) {
        const g = t === 1 ? -1 - v : v - e,
          y = Math.min(g, h);
        for (let S = s; S < n.length; S++) n[S].Oi(n[S].Vi() + t * y);
        h -= y
      }
    } else s = l, h = t === 1 ? f - u - d : d - (f + u)
  }
}
class ys {
  constructor(t, e, i, s) {
    this.Li = null, this.Lv = null, this.Ev = !1, this.Nv = new ae(200), this.Jr = null, this.Fv = 0, this.Wv = !1, this.jv = () => {
      this.Wv || this.tn.Hv().$t().$h()
    }, this.$v = () => {
      this.Wv || this.tn.Hv().$t().$h()
    }, this.tn = t, this.cn = e, this.So = e.layout, this.Vc = i, this.Uv = s === "left", this.qv = ri("normal", s), this.Yv = ri("top", s), this.Zv = ri("bottom", s), this.Xv = document.createElement("div"), this.Xv.style.height = "100%", this.Xv.style.overflow = "hidden", this.Xv.style.width = "25px", this.Xv.style.left = "0", this.Xv.style.position = "relative", this.Kv = Bt(this.Xv, F({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const o = this.Kv.canvasElement;
    o.style.position = "absolute", o.style.zIndex = "1", o.style.left = "0", o.style.top = "0", this.Gv = Bt(this.Xv, F({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const r = this.Gv.canvasElement;
    r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0";
    const h = {
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
    this.rp = new xi(this.Gv.canvasElement, h, {
      sv: () => !this.cn.handleScroll.vertTouchDrag,
      ev: () => !0
    })
  }
  S() {
    this.rp.S(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), At(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), At(this.Kv.canvasElement), this.Kv.dispose(), this.Li !== null && this.Li.Xo().p(this), this.Li = null
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
      i = b(this.Kv.canvasElement.getContext("2d"));
    i.save();
    const s = this.Li.ja();
    i.font = this.op(), s.length > 0 && (t = Math.max(this.Nv.xi(i, s[0].no), this.Nv.xi(i, s[s.length - 1].no)));
    const o = this._p();
    for (let l = o.length; l--;) {
      const a = this.Nv.xi(i, o[l].Kt());
      a > t && (t = a)
    }
    const r = this.Li.Ct();
    if (r !== null && this.Lv !== null) {
      const l = this.Li.pn(1, r),
        a = this.Li.pn(this.Lv.height - 2, r);
      t = Math.max(t, this.Nv.xi(i, this.Li.Fi(Math.floor(Math.min(l, a)) + .11111111111111, r)), this.Nv.xi(i, this.Li.Fi(Math.ceil(Math.max(l, a)) - .11111111111111, r)))
    }
    i.restore();
    const h = t || 34;
    return bi(Math.ceil(e.C + e.T + e.A + e.I + 5 + h))
  }
  up(t) {
    this.Lv !== null && Vt(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`)
  }
  cp() {
    return b(this.Lv).width
  }
  Gi(t) {
    this.Li !== t && (this.Li !== null && this.Li.Xo().p(this), this.Li = t, t.Xo().l(this.do.bind(this), this))
  }
  Dt() {
    return this.Li
  }
  ir() {
    const t = this.tn.dp();
    this.tn.Hv().$t().L_(t, b(this.Dt()))
  }
  fp(t) {
    if (this.Lv === null) return;
    if (t !== 1) {
      this.vp(), this.Kv.applySuggestedBitmapSize();
      const i = It(this.Kv);
      i !== null && (i.useBitmapCoordinateSpace(s => {
        this.pp(s), this.Ae(s)
      }), this.tn.mp(i, this.Zv), this.bp(i), this.tn.mp(i, this.qv), this.wp(i))
    }
    this.Gv.applySuggestedBitmapSize();
    const e = It(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: i,
      bitmapSize: s
    }) => {
      i.clearRect(0, 0, s.width, s.height)
    }), this.gp(e), this.tn.mp(e, this.Yv))
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, i) {
    const s = this.Mp();
    s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, e, i)
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
      s = this.Li;
    e.V_(i, s, t.localY)
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
      for (let s = 0; s < i.length; ++s) {
        const o = i[s].Rn(this.tn.dp(), e);
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
      height: s
    } = e, o = this.tn.dp().$t(), r = o.q(), h = o.md();
    r === h ? De(t, 0, 0, i, s, r) : tn(t, 0, 0, i, s, r, h)
  }
  Ae({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i
  }) {
    if (this.Lv === null || this.Li === null || !this.Li.W().borderVisible) return;
    t.fillStyle = this.Li.W().borderColor;
    const s = Math.max(1, Math.floor(this.lp().C * i));
    let o;
    o = this.Uv ? e.width - s : 0, t.fillRect(o, 0, s, e.height)
  }
  bp(t) {
    if (this.Lv === null || this.Li === null) return;
    const e = this.Li.ja(),
      i = this.Li.W(),
      s = this.lp(),
      o = this.Uv ? this.Lv.width - s.T : 0;
    i.borderVisible && i.ticksVisible && t.useBitmapCoordinateSpace(({
      context: r,
      horizontalPixelRatio: h,
      verticalPixelRatio: l
    }) => {
      r.fillStyle = i.borderColor;
      const a = Math.max(1, Math.floor(l)),
        c = Math.floor(.5 * l),
        u = Math.round(s.T * h);
      r.beginPath();
      for (const d of e) r.rect(Math.floor(o * h), Math.round(d.La * l) - c, u, a);
      r.fill()
    }), t.useMediaCoordinateSpace(({
      context: r
    }) => {
      var h;
      r.font = this.op(), r.fillStyle = (h = i.textColor) !== null && h !== void 0 ? h : this.So.textColor, r.textAlign = this.Uv ? "right" : "left", r.textBaseline = "middle";
      const l = this.Uv ? Math.round(o - s.A) : Math.round(o + s.T + s.A),
        a = e.map(c => this.Nv.Mi(r, c.no));
      for (let c = e.length; c--;) {
        const u = e[c];
        r.fillText(u.no, l, u.La + a[c])
      }
    })
  }
  vp() {
    if (this.Lv === null || this.Li === null) return;
    const t = [],
      e = this.Li.$o().slice(),
      i = this.tn.dp(),
      s = this.lp();
    this.Li === i.vr() && this.tn.dp().$o().forEach(r => {
      i.dr(r) && e.push(r)
    });
    const o = this.Li;
    e.forEach(r => {
      r.Rn(i, o).forEach(h => {
        h.Oi(null), h.Bi() && t.push(h)
      })
    }), t.forEach(r => r.Oi(r.ki())), this.Li.W().alignLabels && this.kp(t, s)
  }
  kp(t, e) {
    if (this.Lv === null) return;
    const i = this.Lv.height / 2,
      s = t.filter(r => r.ki() <= i),
      o = t.filter(r => r.ki() > i);
    s.sort((r, h) => h.ki() - r.ki()), o.sort((r, h) => r.ki() - h.ki());
    for (const r of t) {
      const h = Math.floor(r.At(e) / 2),
        l = r.ki();
      l > -h && l < h && r.Oi(h), l > this.Lv.height - h && l < this.Lv.height + h && r.Oi(this.Lv.height - h)
    }
    ws(s, 1, this.Lv.height, e), ws(o, -1, this.Lv.height, e)
  }
  wp(t) {
    if (this.Lv === null) return;
    const e = this._p(),
      i = this.lp(),
      s = this.Uv ? "right" : "left";
    e.forEach(o => {
      o.Ai() && o.gt(b(this.Li)).X(t, i, this.Nv, s)
    })
  }
  gp(t) {
    if (this.Lv === null || this.Li === null) return;
    const e = this.tn.Hv().$t(),
      i = [],
      s = this.tn.dp(),
      o = e.Yc().Rn(s, this.Li);
    o.length && i.push(o);
    const r = this.lp(),
      h = this.Uv ? "right" : "left";
    i.forEach(l => {
      l.forEach(a => {
        a.gt(b(this.Li)).X(t, r, this.Nv, h)
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
    return Kt(this.So.fontSize, this.So.fontFamily)
  }
}

function Gh(n, t) {
  var e, i;
  return (i = (e = n._a) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && i !== void 0 ? i : []
}

function Ce(n, t) {
  var e, i;
  return (i = (e = n.Pn) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && i !== void 0 ? i : []
}

function Zh(n, t) {
  var e, i;
  return (i = (e = n.Ji) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && i !== void 0 ? i : []
}

function qh(n, t) {
  var e, i;
  return (i = (e = n.la) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && i !== void 0 ? i : []
}
class Pi {
  constructor(t, e) {
    this.Lv = F({
      width: 0,
      height: 0
    }), this.yp = null, this.Cp = null, this.Tp = null, this.Pp = null, this.Rp = !1, this.Dp = new X, this.Vp = new X, this.Op = 0, this.Bp = !1, this.Ap = null, this.Ip = !1, this.zp = null, this.Lp = null, this.Wv = !1, this.jv = () => {
      this.Wv || this.Ep === null || this.$i().$h()
    }, this.$v = () => {
      this.Wv || this.Ep === null || this.$i().$h()
    }, this.Jd = t, this.Ep = e, this.Ep.F_().l(this.Np.bind(this), this, !0), this.Fp = document.createElement("td"), this.Fp.style.padding = "0", this.Fp.style.position = "relative";
    const i = document.createElement("div");
    i.style.width = "100%", i.style.height = "100%", i.style.position = "relative", i.style.overflow = "hidden", this.Wp = document.createElement("td"), this.Wp.style.padding = "0", this.jp = document.createElement("td"), this.jp.style.padding = "0", this.Fp.appendChild(i), this.Kv = Bt(i, F({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const s = this.Kv.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "1", s.style.left = "0", s.style.top = "0", this.Gv = Bt(i, F({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const o = this.Gv.canvasElement;
    o.style.position = "absolute", o.style.zIndex = "2", o.style.left = "0", o.style.top = "0", this.Hp = document.createElement("tr"), this.Hp.appendChild(this.Wp), this.Hp.appendChild(this.Fp), this.Hp.appendChild(this.jp), this.$p(), this.rp = new xi(this.Gv.canvasElement, this, {
      sv: () => this.Ap === null && !this.Jd.W().handleScroll.vertTouchDrag,
      ev: () => this.Ap === null && !this.Jd.W().handleScroll.horzTouchDrag
    })
  }
  S() {
    this.yp !== null && this.yp.S(), this.Cp !== null && this.Cp.S(), this.Tp = null, this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), At(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), At(this.Kv.canvasElement), this.Kv.dispose(), this.Ep !== null && this.Ep.F_().p(this), this.rp.S()
  }
  dp() {
    return b(this.Ep)
  }
  Up(t) {
    var e, i;
    this.Ep !== null && this.Ep.F_().p(this), this.Ep = t, this.Ep !== null && this.Ep.F_().l(Pi.prototype.Np.bind(this), this, !0), this.$p(), this.Jd.qp().indexOf(this) === this.Jd.qp().length - 1 ? (this.Tp = (e = this.Tp) !== null && e !== void 0 ? e : new Hh(this.Fp, this.Jd), this.Tp.bt()) : ((i = this.Tp) === null || i === void 0 || i.tf(), this.Tp = null)
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
        this.yp.Gi(b(t))
      }
      if (this.Cp !== null) {
        const t = this.Ep.R_();
        this.Cp.Gi(b(t))
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
      s = t.localY;
    this.Kp(i, s, t);
    const o = this.br(i, s);
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
      const s = b(this.zp),
        o = s.x + (e - this.Ap.x),
        r = s.y + (i - this.Ap.y);
      this.Kp(o, r, t)
    }
  }
  ov(t) {
    this.Hv().W().trackingMode.exitMode === 0 && (this.Ip = !0), this.am(), this.nm(t)
  }
  br(t, e) {
    const i = this.Ep;
    return i === null ? null : function(s, o, r) {
      const h = s.$o(),
        l = function(a, c, u) {
          var d, f;
          let p, v;
          for (const S of a) {
            const V = (f = (d = S.fa) === null || d === void 0 ? void 0 : d.call(S, c, u)) !== null && f !== void 0 ? f : [];
            for (const P of V) g = P.zOrder, (!(y = p == null ? void 0 : p.zOrder) || g === "top" && y !== "top" || g === "normal" && y === "bottom") && (p = P, v = S)
          }
          var g, y;
          return p && v ? {
            Iv: p,
            jc: v
          } : null
        }(h, o, r);
      if ((l == null ? void 0 : l.Iv.zOrder) === "top") return ke(l);
      for (const a of h) {
        if (l && l.jc === a && l.Iv.zOrder !== "bottom" && !l.Iv.isBackground) return ke(l);
        const c = Yh(a.Pn(s), o, r);
        if (c !== null) return {
          jc: a,
          Ov: c.Ov,
          Av: c.Av
        };
        if (l && l.jc === a && l.Iv.zOrder !== "bottom" && l.Iv.isBackground) return ke(l)
      }
      return l != null && l.Iv ? ke(l) : null
    }(i, t, e)
  }
  om(t, e) {
    b(e === "left" ? this.yp : this.Cp).up(F({
      width: t,
      height: this.Lv.height
    }))
  }
  _m() {
    return this.Lv
  }
  up(t) {
    Vt(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Fp.style.width = t.width + "px", this.Fp.style.height = t.height + "px")
  }
  um() {
    const t = b(this.Ep);
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
    const s = this.Mp();
    s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, e, i)
  }
  fp(t) {
    if (t === 0 || this.Ep === null) return;
    if (t > 1 && this.um(), this.yp !== null && this.yp.fp(t), this.Cp !== null && this.Cp.fp(t), t !== 1) {
      this.Kv.applySuggestedBitmapSize();
      const i = It(this.Kv);
      i !== null && (i.useBitmapCoordinateSpace(s => {
        this.pp(s)
      }), this.Ep && (this.dm(i, Gh), this.fm(i), this.vm(i), this.dm(i, Ce), this.dm(i, Zh)))
    }
    this.Gv.applySuggestedBitmapSize();
    const e = It(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: i,
      bitmapSize: s
    }) => {
      i.clearRect(0, 0, s.width, s.height)
    }), this.pm(e), this.dm(e, qh))
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
      s = e.localY;
    t.M() && t.m(this.$i().St().Eu(i), {
      x: i,
      y: s
    }, e)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    const {
      width: i,
      height: s
    } = e, o = this.$i(), r = o.q(), h = o.md();
    r === h ? De(t, 0, 0, i, s, h) : tn(t, 0, 0, i, s, r, h)
  }
  fm(t) {
    const e = b(this.Ep).W_().Uh().gt();
    e !== null && e.X(t, !1)
  }
  vm(t) {
    const e = this.$i().qc();
    this.gm(t, Ce, gi, e), this.gm(t, Ce, ze, e)
  }
  pm(t) {
    this.gm(t, Ce, ze, this.$i().Yc())
  }
  dm(t, e) {
    const i = b(this.Ep).$o();
    for (const s of i) this.gm(t, e, gi, s);
    for (const s of i) this.gm(t, e, ze, s)
  }
  gm(t, e, i, s) {
    const o = b(this.Ep),
      r = o.$t().Fc(),
      h = r !== null && r.jc === s,
      l = r !== null && h && r.Av !== void 0 ? r.Av.gr : void 0;
    _i(e, a => i(a, t, h, l), s, o)
  }
  Yp() {
    if (this.Ep === null) return;
    const t = this.Jd,
      e = this.Ep.P_().W().visible,
      i = this.Ep.R_().W().visible;
    e || this.yp === null || (this.Wp.removeChild(this.yp.hp()), this.yp.S(), this.yp = null), i || this.Cp === null || (this.jp.removeChild(this.Cp.hp()), this.Cp.S(), this.Cp = null);
    const s = t.$t()._d();
    e && this.yp === null && (this.yp = new ys(this, t.W(), s, "left"), this.Wp.appendChild(this.yp.hp())), i && this.Cp === null && (this.Cp = new ys(this, t.W(), s, "right"), this.jp.appendChild(this.Cp.hp()))
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
    this.$i().hd(this.xm(t), this.Sm(e), i, b(this.Ep))
  }
  rm() {
    this.$i().ad()
  }
  am() {
    this.Ip && (this.Ap = null, this.rm())
  }
  sm(t, e, i) {
    this.Ap = t, this.Ip = !1, this.Kp(e.x, e.y, i);
    const s = this.$i().Yc();
    this.zp = {
      x: s.Yt(),
      y: s.Zt()
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
      const s = performance.now(),
        o = e.St();
      this.Lp.Dr(o.ju(), s), this.Lp.Ju(s) || e.Zn(this.Lp)
    }
  }
  Xp() {
    this.Ap = null
  }
  Gp() {
    if (this.Ep) {
      if (this.$i().Un(), document.activeElement !== document.body && document.activeElement !== document.documentElement) b(document.activeElement).blur();
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
    const s = this.Jd.W(),
      o = s.handleScroll,
      r = s.kineticScroll;
    if ((!o.pressedMouseMove || t.Rv) && (!o.horzTouchDrag && !o.vertTouchDrag || !t.Rv)) return;
    const h = this.Ep.vn(),
      l = performance.now();
    if (this.Pp !== null || this.Mm(t) || (this.Pp = {
        x: t.clientX,
        y: t.clientY,
        Vd: l,
        km: t.localX,
        ym: t.localY
      }), this.Pp !== null && !this.Rp && (this.Pp.x !== t.clientX || this.Pp.y !== t.clientY)) {
      if (t.Rv && r.touch || !t.Rv && r.mouse) {
        const a = i.he();
        this.Lp = new Kh(.2 / a, 7 / a, .997, 15 / a), this.Lp.qd(i.ju(), this.Pp.Vd)
      } else this.Lp = null;
      h.Ni() || e.B_(this.Ep, h, t.localY), e.td(t.localX), this.Rp = !0
    }
    this.Rp && (h.Ni() || e.A_(this.Ep, h, t.localY), e.nd(t.localX), this.Lp !== null && this.Lp.qd(i.ju(), l))
  }
}
class Ms {
  constructor(t, e, i, s, o) {
    this.ft = !0, this.Lv = F({
      width: 0,
      height: 0
    }), this.jv = () => this.fp(3), this.Uv = t === "left", this.Vc = i._d, this.cn = e, this.Cm = s, this.Tm = o, this.Xv = document.createElement("div"), this.Xv.style.width = "25px", this.Xv.style.height = "100%", this.Xv.style.overflow = "hidden", this.Kv = Bt(this.Xv, F({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv)
  }
  S() {
    this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), At(this.Kv.canvasElement), this.Kv.dispose()
  }
  hp() {
    return this.Xv
  }
  _m() {
    return this.Lv
  }
  up(t) {
    Vt(this.Lv, t) || (this.Lv = t, this.Kv.resizeCanvasElement(t), this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`, this.ft = !0)
  }
  fp(t) {
    if (t < 3 && !this.ft || this.Lv.width === 0 || this.Lv.height === 0) return;
    this.ft = !1, this.Kv.applySuggestedBitmapSize();
    const e = It(this.Kv);
    e !== null && e.useBitmapCoordinateSpace(i => {
      this.pp(i), this.Ae(i)
    })
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, i) {
    const s = this.Mp();
    s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, e, i)
  }
  Ae({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i,
    verticalPixelRatio: s
  }) {
    if (!this.Cm()) return;
    t.fillStyle = this.cn.timeScale.borderColor;
    const o = Math.floor(this.Vc.W().C * i),
      r = Math.floor(this.Vc.W().C * s),
      h = this.Uv ? e.width - o : 0;
    t.fillRect(h, 0, o, r)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    De(t, 0, 0, e.width, e.height, this.Tm())
  }
}

function Vi(n) {
  return t => {
    var e, i;
    return (i = (e = t.da) === null || e === void 0 ? void 0 : e.call(t, n)) !== null && i !== void 0 ? i : []
  }
}
const Qh = Vi("normal"),
  tl = Vi("top"),
  el = Vi("bottom");
class il {
  constructor(t, e) {
    this.Pm = null, this.Rm = null, this.k = null, this.Dm = !1, this.Lv = F({
      width: 0,
      height: 0
    }), this.Vm = new X, this.Nv = new ae(5), this.Wv = !1, this.jv = () => {
      this.Wv || this.Jd.$t().$h()
    }, this.$v = () => {
      this.Wv || this.Jd.$t().$h()
    }, this.Jd = t, this.U_ = e, this.cn = t.W().layout, this.Zd = document.createElement("tr"), this.Om = document.createElement("td"), this.Om.style.padding = "0", this.Bm = document.createElement("td"), this.Bm.style.padding = "0", this.Xv = document.createElement("td"), this.Xv.style.height = "25px", this.Xv.style.padding = "0", this.Am = document.createElement("div"), this.Am.style.width = "100%", this.Am.style.height = "100%", this.Am.style.position = "relative", this.Am.style.overflow = "hidden", this.Xv.appendChild(this.Am), this.Kv = Bt(this.Am, F({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const i = this.Kv.canvasElement;
    i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.Gv = Bt(this.Am, F({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const s = this.Gv.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "2", s.style.left = "0", s.style.top = "0", this.Zd.appendChild(this.Om), this.Zd.appendChild(this.Xv), this.Zd.appendChild(this.Bm), this.Im(), this.Jd.$t().w_().l(this.Im.bind(this), this), this.rp = new xi(this.Gv.canvasElement, this, {
      sv: () => !0,
      ev: () => !this.Jd.W().handleScroll.horzTouchDrag
    })
  }
  S() {
    this.rp.S(), this.Pm !== null && this.Pm.S(), this.Rm !== null && this.Rm.S(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), At(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), At(this.Kv.canvasElement), this.Kv.dispose()
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
    Vt(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`, this.Vm.m(t)), this.Pm !== null && this.Pm.up(F({
      width: e,
      height: t.height
    })), this.Rm !== null && this.Rm.up(F({
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
    const s = this.Mp();
    s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, e, i)
  }
  fp(t) {
    if (t === 0) return;
    if (t !== 1) {
      this.Kv.applySuggestedBitmapSize();
      const i = It(this.Kv);
      i !== null && (i.useBitmapCoordinateSpace(s => {
        this.pp(s), this.Ae(s), this.Hm(i, el)
      }), this.bp(i), this.Hm(i, Qh)), this.Pm !== null && this.Pm.fp(t), this.Rm !== null && this.Rm.fp(t)
    }
    this.Gv.applySuggestedBitmapSize();
    const e = It(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: i,
      bitmapSize: s
    }) => {
      i.clearRect(0, 0, s.width, s.height)
    }), this.$m([...this.Jd.$t().wt(), this.Jd.$t().Yc()], e), this.Hm(e, tl))
  }
  Hm(t, e) {
    const i = this.Jd.$t().wt();
    for (const s of i) _i(e, o => gi(o, t, !1, void 0), s, void 0);
    for (const s of i) _i(e, o => ze(o, t, !1, void 0), s, void 0)
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
    verticalPixelRatio: i
  }) {
    if (this.Jd.W().timeScale.borderVisible) {
      t.fillStyle = this.Um();
      const s = Math.max(1, Math.floor(this.Wm().C * i));
      t.fillRect(0, 0, e.width, s)
    }
  }
  bp(t) {
    const e = this.Jd.$t().St(),
      i = e.ja();
    if (!i || i.length === 0) return;
    const s = this.U_.maxTickMarkWeight(i),
      o = this.Wm(),
      r = e.W();
    r.borderVisible && r.ticksVisible && t.useBitmapCoordinateSpace(({
      context: h,
      horizontalPixelRatio: l,
      verticalPixelRatio: a
    }) => {
      h.strokeStyle = this.Um(), h.fillStyle = this.Um();
      const c = Math.max(1, Math.floor(l)),
        u = Math.floor(.5 * l);
      h.beginPath();
      const d = Math.round(o.T * a);
      for (let f = i.length; f--;) {
        const p = Math.round(i[f].coord * l);
        h.rect(p - u, 0, c, d)
      }
      h.fill()
    }), t.useMediaCoordinateSpace(({
      context: h
    }) => {
      const l = o.C + o.T + o.L + o.P / 2;
      h.textAlign = "center", h.textBaseline = "middle", h.fillStyle = this.$(), h.font = this.op();
      for (const a of i)
        if (a.weight < s) {
          const c = a.needAlignCoordinate ? this.qm(h, a.coord, a.label) : a.coord;
          h.fillText(a.label, c, l)
        } this.Jd.W().timeScale.allowBoldLabels && (h.font = this.Ym());
      for (const a of i)
        if (a.weight >= s) {
          const c = a.needAlignCoordinate ? this.qm(h, a.coord, a.label) : a.coord;
          h.fillText(a.label, c, l)
        }
    })
  }
  qm(t, e, i) {
    const s = this.Nv.xi(t, i),
      o = s / 2,
      r = Math.floor(e - o) + .5;
    return r < 0 ? e += Math.abs(0 - r) : r + s > this.Lv.width && (e -= Math.abs(this.Lv.width - (r + s))), e
  }
  $m(t, e) {
    const i = this.Wm();
    for (const s of t)
      for (const o of s.Qi()) o.gt().X(e, i)
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
    return Kt(this.j(), this.cn.fontFamily)
  }
  Ym() {
    return Kt(this.j(), this.cn.fontFamily, "bold")
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
      Wi: new ae,
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
      s = () => e.leftPriceScale.borderVisible && t.St().W().borderVisible,
      o = () => t.md();
    e.leftPriceScale.visible && this.Pm === null && (this.Pm = new Ms("left", e, i, s, o), this.Om.appendChild(this.Pm.hp())), e.rightPriceScale.visible && this.Rm === null && (this.Rm = new Ms("right", e, i, s, o), this.Bm.appendChild(this.Rm.hp()))
  }
}
const sl = !!Ht && !!navigator.userAgentData && navigator.userAgentData.brands.some(n => n.brand.includes("Chromium")) && !!Ht && (!((hi = navigator == null ? void 0 : navigator.userAgentData) === null || hi === void 0) && hi.platform ? navigator.userAgentData.platform === "Windows" : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
var hi;
class nl {
  constructor(t, e, i) {
    var s;
    this.Zm = [], this.Xm = 0, this.ro = 0, this.o_ = 0, this.Km = 0, this.Gm = 0, this.Jm = null, this.Qm = !1, this.Dp = new X, this.Vp = new X, this.Pc = new X, this.tb = null, this.ib = null, this.Gd = t, this.cn = e, this.U_ = i, this.Zd = document.createElement("div"), this.Zd.classList.add("tv-lightweight-charts"), this.Zd.style.overflow = "hidden", this.Zd.style.direction = "ltr", this.Zd.style.width = "100%", this.Zd.style.height = "100%", (s = this.Zd).style.userSelect = "none", s.style.webkitUserSelect = "none", s.style.msUserSelect = "none", s.style.MozUserSelect = "none", s.style.webkitTapHighlightColor = "transparent", this.nb = document.createElement("table"), this.nb.setAttribute("cellspacing", "0"), this.Zd.appendChild(this.nb), this.sb = this.eb.bind(this), li(this.cn) && this.rb(!0), this.$i = new Nh(this.Dc.bind(this), this.cn, i), this.$t().Zc().l(this.hb.bind(this), this), this.lb = new il(this, this.U_), this.nb.appendChild(this.lb.hp());
    const o = e.autoSize && this.ab();
    let r = this.cn.width,
      h = this.cn.height;
    if (o || r === 0 || h === 0) {
      const l = t.getBoundingClientRect();
      r = r || l.width, h = h || l.height
    }
    this.ob(r, h), this._b(), t.appendChild(this.Zd), this.ub(), this.$i.St().sc().l(this.$i.Xl.bind(this.$i), this), this.$i.w_().l(this.$i.Xl.bind(this.$i), this)
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
    this.Zm = [], b(this.lb).S(), this.Zd.parentElement !== null && this.Zd.parentElement.removeChild(this.Zd), this.Pc.S(), this.Dp.S(), this.Vp.S(), this.fb()
  }
  ob(t, e, i = !1) {
    if (this.ro === e && this.o_ === t) return;
    const s = function(h) {
      const l = Math.floor(h.width),
        a = Math.floor(h.height);
      return F({
        width: l - l % 2,
        height: a - a % 2
      })
    }(F({
      width: t,
      height: e
    }));
    this.ro = s.height, this.o_ = s.width;
    const o = this.ro + "px",
      r = this.o_ + "px";
    b(this.Zd).style.height = o, b(this.Zd).style.width = r, this.nb.style.height = o, this.nb.style.width = r, i ? this.pb(tt.es(), performance.now()) : this.$i.Xl()
  }
  fp(t) {
    t === void 0 && (t = tt.es());
    for (let e = 0; e < this.Zm.length; e++) this.Zm[e].fp(t.Hn(e).Fn);
    this.cn.timeScale.visible && this.lb.fp(t.jn())
  }
  Hh(t) {
    const e = li(this.cn);
    this.$i.Hh(t);
    const i = li(this.cn);
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
    const i = b(e.getContext("2d"));
    return this.wb(i), e
  }
  gb(t) {
    return t === "left" && !this.Mb() || t === "right" && !this.xb() || this.Zm.length === 0 ? 0 : b(t === "left" ? this.Zm[0].bm() : this.Zm[0].wm()).cp()
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
      i = 0;
    const s = this.Zm[0],
      o = (h, l) => {
        let a = 0;
        for (let c = 0; c < this.Zm.length; c++) {
          const u = this.Zm[c],
            d = b(h === "left" ? u.bm() : u.wm()),
            f = d.Mp();
          t !== null && d.xp(t, l, a), a += f.height
        }
      };
    this.Mb() && (o("left", 0), e += b(s.bm()).Mp().width);
    for (let h = 0; h < this.Zm.length; h++) {
      const l = this.Zm[h],
        a = l.Mp();
      t !== null && l.xp(t, e, i), i += a.height
    }
    e += s.Mp().width, this.xb() && (o("right", e), e += b(s.wm()).Mp().width);
    const r = (h, l, a) => {
      b(h === "left" ? this.lb.zm() : this.lb.Lm()).xp(b(t), l, a)
    };
    if (this.cn.timeScale.visible) {
      const h = this.lb.Mp();
      if (t !== null) {
        let l = 0;
        this.Mb() && (r("left", l, i), l = b(s.bm()).Mp().width), this.lb.xp(t, l, i), l += h.width, this.xb() && r("right", l, i)
      }
      i += h.height
    }
    return F({
      width: e,
      height: i
    })
  }
  Tb() {
    let t = 0,
      e = 0,
      i = 0;
    for (const p of this.Zm) this.Mb() && (e = Math.max(e, b(p.bm()).ap(), this.cn.leftPriceScale.minimumWidth)), this.xb() && (i = Math.max(i, b(p.wm()).ap(), this.cn.rightPriceScale.minimumWidth)), t += p.g_();
    e = bi(e), i = bi(i);
    const s = this.o_,
      o = this.ro,
      r = Math.max(s - e - i, 0),
      h = this.cn.timeScale.visible;
    let l = h ? Math.max(this.lb.Fm(), this.cn.timeScale.minimumHeight) : 0;
    var a;
    l = (a = l) + a % 2;
    const c = 0 + l,
      u = o < c ? 0 : o - c,
      d = u / t;
    let f = 0;
    for (let p = 0; p < this.Zm.length; ++p) {
      const v = this.Zm[p];
      v.Up(this.$i.Uc()[p]);
      let g = 0,
        y = 0;
      y = p === this.Zm.length - 1 ? u - f : Math.round(v.g_() * d), g = Math.max(y, 2), f += g, v.up(F({
        width: r,
        height: g
      })), this.Mb() && v.om(e, "left"), this.xb() && v.om(i, "right"), v.dp() && this.$i.Xc(v.dp(), g)
    }
    this.lb.Nm(F({
      width: h ? r : 0,
      height: l
    }), h ? e : 0, h ? i : 0), this.$i.x_(r), this.Km !== e && (this.Km = e), this.Gm !== i && (this.Gm = i)
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
    return sl ? 1 / window.devicePixelRatio : 1
  }
  eb(t) {
    if (!(t.deltaX !== 0 && this.cn.handleScroll.mouseWheel || t.deltaY !== 0 && this.cn.handleScale.mouseWheel)) return;
    const e = this.Pb(t),
      i = e * t.deltaX / 100,
      s = -e * t.deltaY / 100;
    if (t.cancelable && t.preventDefault(), s !== 0 && this.cn.handleScale.mouseWheel) {
      const o = Math.sign(s) * Math.min(1, Math.abs(s)),
        r = t.clientX - this.Zd.getBoundingClientRect().left;
      this.$t().Jc(r, o)
    }
    i !== 0 && this.cn.handleScroll.mouseWheel && this.$t().Qc(-80 * i)
  }
  pb(t, e) {
    var i;
    const s = t.jn();
    s === 3 && this.Rb(), s !== 3 && s !== 2 || (this.Db(t), this.Vb(t, e), this.lb.bt(), this.Zm.forEach(o => {
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
        for (const s of i.Qn())
          if (s.qn === 5 && !s.Vt.Ju(e)) {
            this.$t().Zn(s.Vt);
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
    for (let s = e; s < i; s++) {
      const o = nt(this.Zm.pop());
      this.nb.removeChild(o.hp()), o.hm().p(this), o.lm().p(this), o.S()
    }
    for (let s = i; s < e; s++) {
      const o = new Pi(this, t[s]);
      o.hm().l(this.Ob.bind(this), this), o.lm().l(this.Bb.bind(this), this), this.Zm.push(o), this.nb.insertBefore(o.hp(), this.lb.hp())
    }
    for (let s = 0; s < e; s++) {
      const o = t[s],
        r = this.Zm[s];
      r.dp() !== o ? r.Up(o) : r.$p()
    }
    this.ub(), this.Tb()
  }
  Ab(t, e, i) {
    var s;
    const o = new Map;
    t !== null && this.$i.wt().forEach(c => {
      const u = c.In().hl(t);
      u !== null && o.set(c, u)
    });
    let r;
    if (t !== null) {
      const c = (s = this.$i.St().Ui(t)) === null || s === void 0 ? void 0 : s.originalTime;
      c !== void 0 && (r = c)
    }
    const h = this.$t().Fc(),
      l = h !== null && h.jc instanceof Ti ? h.jc : void 0,
      a = h !== null && h.Av !== void 0 ? h.Av.wr : void 0;
    return {
      Ib: r,
      se: t ?? void 0,
      zb: e ?? void 0,
      Lb: l,
      Eb: o,
      Nb: a,
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

function li(n) {
  return !!(n.handleScroll.mouseWheel || n.handleScale.mouseWheel)
}

function ol(n) {
  return function(t) {
    return t.open !== void 0
  }(n) || function(t) {
    return t.value !== void 0
  }(n)
}

function wn(n, t) {
  var e = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") {
    var s = 0;
    for (i = Object.getOwnPropertySymbols(n); s < i.length; s++) t.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[s]) && (e[i[s]] = n[i[s]])
  }
  return e
}

function Ss(n, t, e, i) {
  const s = e.value,
    o = {
      se: t,
      ot: n,
      Vt: [s, s, s, s],
      Ib: i
    };
  return e.color !== void 0 && (o.V = e.color), o
}

function rl(n, t, e, i) {
  const s = e.value,
    o = {
      se: t,
      ot: n,
      Vt: [s, s, s, s],
      Ib: i
    };
  return e.lineColor !== void 0 && (o.lt = e.lineColor), e.topColor !== void 0 && (o.Ts = e.topColor), e.bottomColor !== void 0 && (o.Ps = e.bottomColor), o
}

function hl(n, t, e, i) {
  const s = e.value,
    o = {
      se: t,
      ot: n,
      Vt: [s, s, s, s],
      Ib: i
    };
  return e.topLineColor !== void 0 && (o.Pe = e.topLineColor), e.bottomLineColor !== void 0 && (o.Re = e.bottomLineColor), e.topFillColor1 !== void 0 && (o.Se = e.topFillColor1), e.topFillColor2 !== void 0 && (o.ke = e.topFillColor2), e.bottomFillColor1 !== void 0 && (o.ye = e.bottomFillColor1), e.bottomFillColor2 !== void 0 && (o.Ce = e.bottomFillColor2), o
}

function ll(n, t, e, i) {
  const s = {
    se: t,
    ot: n,
    Vt: [e.open, e.high, e.low, e.close],
    Ib: i
  };
  return e.color !== void 0 && (s.V = e.color), s
}

function al(n, t, e, i) {
  const s = {
    se: t,
    ot: n,
    Vt: [e.open, e.high, e.low, e.close],
    Ib: i
  };
  return e.color !== void 0 && (s.V = e.color), e.borderColor !== void 0 && (s.Ot = e.borderColor), e.wickColor !== void 0 && (s.Zh = e.wickColor), s
}

function cl(n, t, e, i, s) {
  const o = nt(s)(e),
    r = Math.max(...o),
    h = Math.min(...o),
    l = o[o.length - 1],
    a = [l, r, h, l],
    c = e,
    {
      time: u,
      color: d
    } = c;
  return {
    se: t,
    ot: n,
    Vt: a,
    Ib: i,
    He: wn(c, ["time", "color"]),
    V: d
  }
}

function je(n) {
  return n.Vt !== void 0
}

function ks(n, t) {
  return t.customValues !== void 0 && (n.Wb = t.customValues), n
}

function xt(n) {
  return (t, e, i, s, o, r) => function(h, l) {
    return l ? l(h) : (a = h).open === void 0 && a.value === void 0;
    var a
  }(i, r) ? ks({
    ot: t,
    se: e,
    Ib: s
  }, i) : ks(n(t, e, i, s, o), i)
}

function Cs(n) {
  return {
    Candlestick: xt(al),
    Bar: xt(ll),
    Area: xt(rl),
    Baseline: xt(hl),
    Histogram: xt(Ss),
    Line: xt(Ss),
    Custom: xt(cl)
  } [n]
}

function js(n) {
  return {
    se: 0,
    jb: new Map,
    ha: n
  }
}

function zs(n, t) {
  if (n !== void 0 && n.length !== 0) return {
    Hb: t.key(n[0].ot),
    $b: t.key(n[n.length - 1].ot)
  }
}

function Ls(n) {
  let t;
  return n.forEach(e => {
    t === void 0 && (t = e.Ib)
  }), nt(t)
}
class ul {
  constructor(t) {
    this.Ub = new Map, this.qb = new Map, this.Yb = new Map, this.Zb = [], this.U_ = t
  }
  S() {
    this.Ub.clear(), this.qb.clear(), this.Yb.clear(), this.Zb = []
  }
  Xb(t, e) {
    let i = this.Ub.size !== 0,
      s = !1;
    const o = this.qb.get(t);
    if (o !== void 0)
      if (this.qb.size === 1) i = !1, s = !0, this.Ub.clear();
      else
        for (const l of this.Zb) l.pointData.jb.delete(t) && (s = !0);
    let r = [];
    if (e.length !== 0) {
      const l = e.map(f => f.time),
        a = this.U_.createConverterToInternalObj(e),
        c = Cs(t.Jh()),
        u = t.ya(),
        d = t.Ca();
      r = e.map((f, p) => {
        const v = a(f.time),
          g = this.U_.key(v);
        let y = this.Ub.get(g);
        y === void 0 && (y = js(v), this.Ub.set(g, y), s = !0);
        const S = c(v, y.se, f, l[p], u, d);
        return y.jb.set(t, S), S
      })
    }
    i && this.Kb(), this.Gb(t, r);
    let h = -1;
    if (s) {
      const l = [];
      this.Ub.forEach(a => {
        l.push({
          timeWeight: 0,
          time: a.ha,
          pointData: a,
          originalTime: Ls(a.jb)
        })
      }), l.sort((a, c) => this.U_.key(a.time) - this.U_.key(c.time)), h = this.Jb(l)
    }
    return this.Qb(t, h, function(l, a, c) {
      const u = zs(l, c),
        d = zs(a, c);
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
    const s = this.U_.createConverterToInternalObj([e])(e.time),
      o = this.Yb.get(t);
    if (o !== void 0 && this.U_.key(s) < this.U_.key(o)) throw new Error(`Cannot update oldest data, last time=${o}, new time=${s}`);
    let r = this.Ub.get(this.U_.key(s));
    const h = r === void 0;
    r === void 0 && (r = js(s), this.Ub.set(this.U_.key(s), r));
    const l = Cs(t.Jh()),
      a = t.ya(),
      c = t.Ca(),
      u = l(s, r.se, e, i.Ib, a, c);
    r.jb.set(t, u), this.iw(t, u);
    const d = {
      Ql: je(u)
    };
    if (!h) return this.Qb(t, -1, d);
    const f = {
        timeWeight: 0,
        time: r.ha,
        pointData: r,
        originalTime: Ls(r.jb)
      },
      p = fe(this.Zb, this.U_.key(f.time), (v, g) => this.U_.key(v.time) < g);
    this.Zb.splice(p, 0, f);
    for (let v = p; v < this.Zb.length; ++v) ai(this.Zb[v].pointData, v);
    return this.U_.fillWeightsForPoints(this.Zb, p), this.Qb(t, p, d)
  }
  iw(t, e) {
    let i = this.qb.get(t);
    i === void 0 && (i = [], this.qb.set(t, i));
    const s = i.length !== 0 ? i[i.length - 1] : null;
    s === null || this.U_.key(e.ot) > this.U_.key(s.ot) ? je(e) && i.push(e) : je(e) ? i[i.length - 1] = e : i.splice(-1, 1), this.Yb.set(t, e.ot)
  }
  Gb(t, e) {
    e.length !== 0 ? (this.qb.set(t, e.filter(je)), this.Yb.set(t, e[e.length - 1].ot)) : (this.qb.delete(t), this.Yb.delete(t))
  }
  Kb() {
    for (const t of this.Zb) t.pointData.jb.size === 0 && this.Ub.delete(this.U_.key(t.time))
  }
  Jb(t) {
    let e = -1;
    for (let i = 0; i < this.Zb.length && i < t.length; ++i) {
      const s = this.Zb[i],
        o = t[i];
      if (this.U_.key(s.time) !== this.U_.key(o.time)) {
        e = i;
        break
      }
      o.timeWeight = s.timeWeight, ai(o.pointData, i)
    }
    if (e === -1 && this.Zb.length !== t.length && (e = Math.min(this.Zb.length, t.length)), e === -1) return -1;
    for (let i = e; i < t.length; ++i) ai(t[i].pointData, i);
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
    const s = {
      sw: new Map,
      St: {
        Lu: this.nw()
      }
    };
    if (e !== -1) this.qb.forEach((o, r) => {
      s.sw.set(r, {
        He: o,
        ew: r === t ? i : void 0
      })
    }), this.qb.has(t) || s.sw.set(t, {
      He: [],
      ew: i
    }), s.St.rw = this.Zb, s.St.hw = e;
    else {
      const o = this.qb.get(t);
      s.sw.set(t, {
        He: o || [],
        ew: i
      })
    }
    return s
  }
}

function ai(n, t) {
  n.se = t, n.jb.forEach(e => {
    e.se = t
  })
}

function Ri(n) {
  const t = {
    value: n.Vt[3],
    time: n.Ib
  };
  return n.Wb !== void 0 && (t.customValues = n.Wb), t
}

function Es(n) {
  const t = Ri(n);
  return n.V !== void 0 && (t.color = n.V), t
}

function dl(n) {
  const t = Ri(n);
  return n.lt !== void 0 && (t.lineColor = n.lt), n.Ts !== void 0 && (t.topColor = n.Ts), n.Ps !== void 0 && (t.bottomColor = n.Ps), t
}

function fl(n) {
  const t = Ri(n);
  return n.Pe !== void 0 && (t.topLineColor = n.Pe), n.Re !== void 0 && (t.bottomLineColor = n.Re), n.Se !== void 0 && (t.topFillColor1 = n.Se), n.ke !== void 0 && (t.topFillColor2 = n.ke), n.ye !== void 0 && (t.bottomFillColor1 = n.ye), n.Ce !== void 0 && (t.bottomFillColor2 = n.Ce), t
}

function yn(n) {
  const t = {
    open: n.Vt[0],
    high: n.Vt[1],
    low: n.Vt[2],
    close: n.Vt[3],
    time: n.Ib
  };
  return n.Wb !== void 0 && (t.customValues = n.Wb), t
}

function ml(n) {
  const t = yn(n);
  return n.V !== void 0 && (t.color = n.V), t
}

function pl(n) {
  const t = yn(n),
    {
      V: e,
      Ot: i,
      Zh: s
    } = n;
  return e !== void 0 && (t.color = e), i !== void 0 && (t.borderColor = i), s !== void 0 && (t.wickColor = s), t
}

function wi(n) {
  return {
    Area: dl,
    Line: Es,
    Baseline: fl,
    Histogram: Es,
    Bar: ml,
    Candlestick: pl,
    Custom: vl
  } [n]
}

function vl(n) {
  const t = n.Ib;
  return Object.assign(Object.assign({}, n.He), {
    time: t
  })
}
const bl = {
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
  gl = {
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
  _l = {
    background: {
      type: "solid",
      color: "#FFFFFF"
    },
    textColor: "#191919",
    fontSize: 12,
    fontFamily: ki,
    attributionLogo: !0
  },
  ci = {
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
  wl = {
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
  yl = {
    color: "rgba(0, 0, 0, 0)",
    visible: !1,
    fontSize: 48,
    fontFamily: ki,
    fontStyle: "",
    text: "",
    horzAlign: "center",
    vertAlign: "center"
  };

function Ts() {
  return {
    width: 0,
    height: 0,
    autoSize: !1,
    layout: _l,
    crosshair: bl,
    grid: gl,
    overlayPriceScales: Object.assign({}, ci),
    leftPriceScale: Object.assign(Object.assign({}, ci), {
      visible: !1
    }),
    rightPriceScale: Object.assign(Object.assign({}, ci), {
      visible: !0
    }),
    timeScale: wl,
    watermark: yl,
    localization: {
      locale: Ht ? navigator.language : "",
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
class Ml {
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
    return b(this.lw.$t().$c(this.aw)).Dt
  }
}

function $s(n, t, e) {
  const i = wn(n, ["time", "originalTime"]),
    s = Object.assign({
      time: t
    }, i);
  return e !== void 0 && (s.originalTime = e), s
}
const Sl = {
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
class kl {
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
class Cl {
  constructor(t, e, i, s, o) {
    this._w = new X, this.Ls = t, this.uw = e, this.cw = i, this.U_ = o, this.dw = s
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
    const e = new Ft(new se(t.from, t.to)).hu(),
      i = this.Ls.In();
    if (i.Ni()) return null;
    const s = i.hl(e.Vs(), 1),
      o = i.hl(e.ui(), -1),
      r = b(i.sl()),
      h = b(i.An());
    if (s !== null && o !== null && s.se > o.se) return {
      barsBefore: t.from - r,
      barsAfter: h - t.to
    };
    const l = {
      barsBefore: s === null || s.se === r ? t.from - r : s.se - r,
      barsAfter: o === null || o.se === h ? h - t.to : h - o.se
    };
    return s !== null && o !== null && (l.from = s.Ib, l.to = o.Ib), l
  }
  setData(t) {
    this.U_, this.Ls.Jh(), this.uw.fw(this.Ls, t), this.pw("full")
  }
  update(t) {
    this.Ls.Jh(), this.uw.mw(this.Ls, t), this.pw("update")
  }
  dataByIndex(t, e) {
    const i = this.Ls.In().hl(t, e);
    return i === null ? null : wi(this.seriesType())(i)
  }
  data() {
    const t = wi(this.seriesType());
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
    const e = t.map(i => $s(i, this.U_.convertHorzItemToInternal(i.time), i.time));
    this.Ls.ia(e)
  }
  markers() {
    return this.Ls.na().map(t => $s(t, t.originalTime, void 0))
  }
  applyOptions(t) {
    this.Ls.Hh(t)
  }
  options() {
    return kt(this.Ls.W())
  }
  priceScale() {
    return this.cw.priceScale(this.Ls.Dt().Ta())
  }
  createPriceLine(t) {
    const e = bt(kt(Sl), t),
      i = this.Ls.sa(e);
    return new kl(i)
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
class jl {
  constructor(t, e, i) {
    this.bw = new X, this.pu = new X, this.Vm = new X, this.$i = t, this.kl = t.St(), this.lb = e, this.kl.tc().l(this.ww.bind(this)), this.kl.nc().l(this.gw.bind(this)), this.lb.Em().l(this.Mw.bind(this)), this.U_ = i
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
    $t(t.from <= t.to, "The from index cannot be after the to index."), this.$i.vd(t)
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
      s = e.Ui(i);
    return s === null ? null : s.originalTime
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
    return Object.assign(Object.assign({}, kt(this.kl.W())), {
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

function zl(n) {
  if (n === void 0 || n.type === "custom") return;
  const t = n;
  t.minMove !== void 0 && t.precision === void 0 && (t.precision = function(e) {
    if (e >= 1) return 0;
    let i = 0;
    for (; i < 8; i++) {
      const s = Math.round(e);
      if (Math.abs(s - e) < 1e-8) return i;
      e *= 10
    }
    return i
  }(t.minMove))
}

function xs(n) {
  return function(t) {
    if (be(t.handleScale)) {
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
        axisDoubleClickReset: s
      } = t.handleScale;
      be(i) && (t.handleScale.axisPressedMouseMove = {
        time: i,
        price: i
      }), be(s) && (t.handleScale.axisDoubleClickReset = {
        time: s,
        price: s
      })
    }
    const e = t.handleScroll;
    be(e) && (t.handleScroll = {
      horzTouchDrag: e,
      vertTouchDrag: e,
      mouseWheel: e,
      pressedMouseMove: e
    })
  }(n), n
}
class Ll {
  constructor(t, e, i) {
    this.xw = new Map, this.Sw = new Map, this.kw = new X, this.yw = new X, this.Cw = new X, this.Tw = new ul(e);
    const s = i === void 0 ? kt(Ts()) : bt(kt(Ts()), xs(i));
    this.U_ = e, this.lw = new nl(t, s, e), this.lw.hm().l(r => {
      this.kw.M() && this.kw.m(this.Pw(r()))
    }, this), this.lw.lm().l(r => {
      this.yw.M() && this.yw.m(this.Pw(r()))
    }, this), this.lw.Zc().l(r => {
      this.Cw.M() && this.Cw.m(this.Pw(r()))
    }, this);
    const o = this.lw.$t();
    this.Rw = new jl(o, this.lw.cb(), this.U_)
  }
  remove() {
    this.lw.hm().p(this), this.lw.lm().p(this), this.lw.Zc().p(this), this.Rw.S(), this.lw.S(), this.xw.clear(), this.Sw.clear(), this.kw.S(), this.yw.S(), this.Cw.S(), this.Tw.S()
  }
  resize(t, e, i) {
    this.autoSizeActive() || this.lw.ob(t, e, i)
  }
  addCustomSeries(t, e) {
    const i = Ot(t),
      s = Object.assign(Object.assign({}, Ys), i.defaultOptions());
    return this.Dw("Custom", s, e, i)
  }
  addAreaSeries(t) {
    return this.Dw("Area", ur, t)
  }
  addBaselineSeries(t) {
    return this.Dw("Baseline", dr, t)
  }
  addBarSeries(t) {
    return this.Dw("Bar", ar, t)
  }
  addCandlestickSeries(t = {}) {
    return function(e) {
      e.borderColor !== void 0 && (e.borderUpColor = e.borderColor, e.borderDownColor = e.borderColor), e.wickColor !== void 0 && (e.wickUpColor = e.wickColor, e.wickDownColor = e.wickColor)
    }(t), this.Dw("Candlestick", lr, t)
  }
  addHistogramSeries(t) {
    return this.Dw("Histogram", fr, t)
  }
  addLineSeries(t) {
    return this.Dw("Line", cr, t)
  }
  removeSeries(t) {
    const e = nt(this.xw.get(t)),
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
    return new Ml(this.lw, t)
  }
  timeScale() {
    return this.Rw
  }
  applyOptions(t) {
    this.lw.Hh(xs(t))
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
    const s = this.xw.get(i);
    if (s === void 0) return;
    const o = this.lw.$t().cr(s);
    o !== null && this.lw.$t().ld(t, e, o)
  }
  clearCrosshairPosition() {
    this.lw.$t().ad(!0)
  }
  Dw(t, e, i = {}, s) {
    zl(i.priceFormat);
    const o = bt(kt(Gs), kt(e), i),
      r = this.lw.$t().ud(t, o, s),
      h = new Cl(r, this, this, this, this.U_);
    return this.xw.set(h, r), this.Sw.set(r, h), h
  }
  Vw(t) {
    const e = this.lw.$t();
    e.od(t.St.Lu, t.St.rw, t.St.hw), t.sw.forEach((i, s) => s.J(i.He, i.ew)), e.Fu()
  }
  Ow(t) {
    return nt(this.Sw.get(t))
  }
  Pw(t) {
    const e = new Map;
    t.Eb.forEach((s, o) => {
      const r = o.Jh(),
        h = wi(r)(s);
      if (r !== "Custom") $t(ol(h));
      else {
        const l = o.Ca();
        $t(!l || l(h) === !1)
      }
      e.set(this.Ow(o), h)
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

function El(n, t, e) {
  let i;
  if (de(n)) {
    const o = document.getElementById(n);
    $t(o !== null, `Cannot find element in DOM with id=${n}`), i = o
  } else i = n;
  const s = new Ll(i, t, e);
  return t.setOptions(s.options()), s
}

function Tl(n, t) {
  return El(n, new bs, bs.Ad(t))
}
Object.assign(Object.assign({}, Gs), Ys);
const $l = {
    class: "memepad-jetton-chart"
  },
  xl = {
    class: "controls"
  },
  Pl = ["value"],
  Vl = {
    class: "label"
  },
  Rl = ["value"],
  Il = {
    class: "label"
  },
  Wl = {
    key: 0,
    class: "chart-empty-wrapper"
  },
  Bl = {
    class: "inner"
  },
  Al = {
    class: "label"
  },
  Dl = {
    key: 1,
    class: "chart-wrapper"
  },
  Nl = Z({
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
        e = D(null),
        i = D(null),
        s = D(null),
        o = T(() => [{
          value: Qt.ONE_MINUTE,
          label: `1${$("base.time.abbr.minutes")}`
        }, {
          value: Qt.FIVE_MINUTES,
          label: `5${$("base.time.abbr.minutes")}`
        }, {
          value: Qt.FIFTEEN_MINUTES,
          label: `15${$("base.time.abbr.minutes")}`
        }]),
        r = T(() => [{
          value: Zt.MARKET_CAP,
          label: $("memepad.chart.tabs.market_cap")
        }, {
          value: Zt.PRICE,
          label: $("memepad.chart.tabs.price")
        }]),
        h = T({
          get: () => t.chartInterval,
          set: d => {
            t.updateChartInterval(d)
          }
        }),
        l = T({
          get: () => t.chartType,
          set: d => {
            t.updateChartType(d)
          }
        }),
        a = () => {
          var d;
          (d = i.value) == null || d.resize(e.value.clientWidth, e.value.clientHeight)
        },
        c = () => {
          window.removeEventListener("resize", a)
        },
        u = (d, f) => {
          var P, O;
          const p = (P = Bs().$webApp.dataUnsafe.user) == null ? void 0 : P.language_code,
            v = (O = i.value) == null ? void 0 : O.timeScale().getVisibleLogicalRange();
          s.value && i.value && i.value.removeSeries(s.value), f.innerHTML = "";
          const y = Tl(f, {
            localization: {
              timeFormatter: M => {
                const z = W => String(W).padStart(2, "0"),
                  E = new Date(M * 1e3);
                return `${z(E.getUTCHours())}:${z(E.getUTCMinutes())}`
              },
              priceFormatter: M => {
                if (l.value === Zt.MARKET_CAP) return `$${$e(M,{accuracy:0})}`;
                {
                  if (Math.abs(M) < 1e-9) return "$0";
                  const [z, E] = M.toFixed(9).split("."), W = E[0], it = E.slice(1).match(/^0+/), ot = it ? it[0].length : 0, ut = ot > 0 ? String.fromCharCode(8321 + ot) : "", lt = E.slice(ot + 1).replace(/0+$/, "").slice(0, 3);
                  return `$${z}.${W}${ut}${lt}`
                }
              },
              locale: p
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
              mode: mi.Magnet,
              horzLine: {
                color: "#ffffff",
                style: Pe.Dashed,
                labelBackgroundColor: "#ffffff"
              },
              vertLine: {
                color: "#ffffff",
                style: Pe.Dashed,
                labelBackgroundColor: "#ffffff"
              }
            }
          });
          i.value = y, y.timeScale().applyOptions({
            borderColor: "transparent",
            secondsVisible: !0,
            timeVisible: !0,
            ticksVisible: !0,
            allowBoldLabels: !1
          }), window.addEventListener("resize", a);
          const S = y.addLineSeries({
              color: "#C4F85C",
              baseLineWidth: 2,
              crosshairMarkerBackgroundColor: "#C4F85C",
              crosshairMarkerBorderColor: "#000000",
              crosshairMarkerBorderWidth: 2,
              crosshairMarkerRadius: 3,
              priceFormat: {
                type: "price",
                precision: l.value === Zt.MARKET_CAP ? 0 : 9,
                minMove: 1e-9
              }
            }),
            V = d.map(M => {
              const z = new Date(M.timestamp);
              return {
                time: (z.getTime() - z.getTimezoneOffset() * 60 * 1e3) / 1e3,
                value: M.price.toNumber()
              }
            }).sort((M, z) => M.time - z.time);
          S.setData(V), v && y.timeScale().setVisibleLogicalRange(v)
        };
      return St(() => [e.value, t.chart, t.chartInterval], () => {
        !e.value || !t.chart || u(t.chart.points, e.value)
      }, {
        immediate: !0
      }), Ie(c), (d, f) => (_(), L("div", $l, [w("div", xl, [w("div", {
        class: "section",
        style: qt({
          "grid-template-columns": `repeat(${m(r).length}, 1fr)`
        })
      }, [(_(!0), L(st, null, Jt(m(r), p => (_(), L("label", {
        key: p.value,
        class: Rt(["item", {
          "is-active": d.chartType === p.value
        }])
      }, [Te(w("input", {
        "onUpdate:modelValue": f[0] || (f[0] = v => pt(l) ? l.value = v : null),
        type: "radio",
        name: "chart-type",
        value: p.value
      }, null, 8, Pl), [
        [ui, m(l)]
      ]), w("span", Vl, I(p.label), 1)], 2))), 128))], 4), w("div", {
        class: "section",
        style: qt({
          "grid-template-columns": `repeat(${m(o).length}, 1fr)`
        })
      }, [(_(!0), L(st, null, Jt(m(o), p => (_(), L("label", {
        key: p.value,
        class: Rt(["item", {
          "is-active": d.chartInterval === p.value
        }])
      }, [Te(w("input", {
        "onUpdate:modelValue": f[1] || (f[1] = v => pt(h) ? h.value = v : null),
        type: "radio",
        name: "chart-interval",
        value: p.value
      }, null, 8, Rl), [
        [ui, m(h)]
      ]), w("span", Il, I(p.label), 1)], 2))), 128))], 4)]), !d.chart || !d.chart.points.length ? (_(), L("div", Wl, [f[3] || (f[3] = w("img", {
        src: Wi,
        class: "lines"
      }, null, -1)), f[4] || (f[4] = w("img", {
        src: Tn,
        class: "empty"
      }, null, -1)), w("div", Bl, [f[2] || (f[2] = w("div", {
        class: "dot"
      }, null, -1)), w("div", Al, I(("t" in d ? d.t : m($))("memepad.jetton.chart.coming_text")), 1)])])) : (_(), L("div", Dl, [w("div", {
        ref_key: "container",
        ref: e,
        style: {
          width: "100%",
          height: "320px"
        }
      }, null, 512), f[5] || (f[5] = w("img", {
        src: Wi,
        class: "lines"
      }, null, -1))]))]))
    }
  }),
  Ol = q(Nl, [
    ["__scopeId", "data-v-7367c134"]
  ]),
  Ul = {
    class: "label"
  },
  Fl = {
    class: "memepad-jetton-actions-controls-unlock-sheet"
  },
  Jl = {
    class: "icon-wrapper"
  },
  Kl = {
    class: "title"
  },
  Hl = {
    class: "subtitle"
  },
  Xl = {
    class: "buttons-wrapper"
  },
  Yl = Z({
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
        e = D(!1),
        i = () => {
          e.value = !1, t.unlockSuccessCallback()
        };
      return (s, o) => {
        const r = Dt,
          h = We,
          l = Si,
          a = Is;
        return _(), L(st, null, [j(r, {
          class: "memepad-jetton-actions-controls-unlock-button",
          icon: "lock-open",
          type: m(Tt).HIGHLIGHT,
          fill: "",
          "icon-align": "left",
          onClick: o[0] || (o[0] = c => e.value = !0)
        }, {
          default: H(() => [w("div", Ul, I(("t" in s ? s.t : m($))("memepad.jetton.unlock.btn")), 1)]),
          _: 1
        }, 8, ["type"]), j(a, {
          modelValue: m(e),
          "onUpdate:modelValue": o[1] || (o[1] = c => pt(e) ? e.value = c : null)
        }, {
          default: H(() => [w("div", Fl, [w("div", Jl, [j(h, {
            src: m(ne)(s.jetton.iconFileKey),
            size: 80
          }, null, 8, ["src"])]), w("div", Kl, I(("t" in s ? s.t : m($))("memepad.jetton.unlock.sheet.title", {
            ticker: s.jetton.ticker
          })), 1), w("div", Hl, I(("t" in s ? s.t : m($))("memepad.jetton.unlock.sheet.subtitle", {
            ticker: s.jetton.ticker
          })), 1), w("div", Xl, [j(l, {
            jetton: s.jetton,
            "jetton-information": s.jettonInformation,
            balances: s.balances,
            "jetton-management": s.jettonManagement,
            onUnlocked: i
          }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])])])]),
          _: 1
        }, 8, ["modelValue"])], 64)
      }
    }
  }),
  Gl = q(Yl, [
    ["__scopeId", "data-v-f5a83b7e"]
  ]),
  Zl = {
    class: "label"
  },
  ql = ["value", "name"],
  Ql = Z({
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
        e = $n(As);
      if (!e) throw Ds("Tabs injection not defined");
      const i = T(() => t.type ?? e.type.value),
        s = T({
          get() {
            return e.value.value === t.value
          },
          set() {
            e.updateValue(t.value)
          }
        });
      return (o, r) => (_(), L("label", {
        class: Rt(["kit-tab", [`is-${m(i).toLowerCase()}`, {
          "is-active": m(s)
        }]])
      }, [w("span", Zl, I(n.label), 1), Te(w("input", {
        "onUpdate:modelValue": r[0] || (r[0] = h => pt(s) ? s.value = h : null),
        type: "radio",
        value: n.value,
        name: m(e).name
      }, null, 8, ql), [
        [ui, m(s)]
      ])], 2))
    }
  }),
  Mn = q(Ql, [
    ["__scopeId", "data-v-94bc640b"]
  ]),
  ta = {
    class: "list"
  },
  ea = Z({
    __name: "KitTabs",
    props: oe({
      items: {
        type: Array,
        default: void 0
      },
      type: {
        type: String,
        default: di.DEFAULT
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(n) {
      const t = n,
        e = Ee(n, "modelValue"),
        i = T(() => {
          var s;
          return ((s = t.items) == null ? void 0 : s.map(o => typeof o == "string" ? {
            value: o,
            label: o
          } : o)) ?? []
        });
      return xn(As, {
        value: T(() => e.value),
        updateValue: s => {
          e.value = s
        },
        type: T(() => t.type),
        name: Pn()
      }), (s, o) => {
        const r = Mn,
          h = Vn("horizontal-wheel-scroll");
        return _(), L("div", {
          class: Rt(["kit-tabs", `is-${n.type.toLowerCase()}`])
        }, [Te((_(), L("div", ta, [Rn(s.$slots, "default", {}, void 0, !0), (_(!0), L(st, null, Jt(m(i), l => (_(), R(r, {
          key: l.value,
          label: l.label,
          value: l.value,
          type: n.type
        }, null, 8, ["label", "value", "type"]))), 128))])), [
          [h]
        ])], 2)
      }
    }
  }),
  ia = q(ea, [
    ["__scopeId", "data-v-74a842a0"]
  ]),
  sa = {
    class: "memepad-jetton-action-controls-action-button"
  },
  na = {
    class: "info"
  },
  oa = {
    class: "label"
  },
  ra = {
    class: "label"
  },
  ha = Z({
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
        e = T(() => new xe(t.value.replaceAll(",", "") || "0")),
        i = T(() => t.tradePendings[t.tab]),
        s = T(() => !!(i.value || !t.inputState || t.inputState.loading)),
        o = T(() => s.value ? !1 : !!(e.value.isZero() || !t.inputState || t.inputState.error));
      return (r, h) => {
        var f, p, v, g, y;
        const l = Os,
          a = Be,
          c = Us,
          u = Fs,
          d = Dt;
        return _(), L("div", sa, [w("div", na, [r.inputState ? (_(), L(st, {
          key: 0
        }, [r.inputState.balanceLabel ? (_(), R(l, {
          key: 0,
          balance: r.inputState.balanceLabel
        }, null, 8, ["balance"])) : (_(), R(a, {
          key: 1,
          class: "skeleton"
        })), r.inputState.error || r.inputState.feesInfo ? (_(), R(c, {
          key: 2,
          details: (f = r.inputState.feesInfo) == null ? void 0 : f.details,
          "total-label": (p = r.inputState.feesInfo) == null ? void 0 : p.totalLabel,
          "error-message": (v = r.inputState.error) == null ? void 0 : v.message
        }, null, 8, ["details", "total-label", "error-message"])) : (_(), R(a, {
          key: 3,
          class: "skeleton"
        }))], 64)) : (_(), L(st, {
          key: 1
        }, [j(a, {
          class: "skeleton"
        }), j(a, {
          class: "skeleton"
        })], 64))]), (y = (g = r.inputState) == null ? void 0 : g.error) != null && y.notEnoughtTon ? (_(), R(u, {
          key: 0,
          "jetton-shortname": r.jetton.shortname,
          "jetton-address": r.jetton.address
        }, null, 8, ["jetton-shortname", "jetton-address"])) : (_(), L(st, {
          key: 1
        }, [r.tab === m(G).BUY ? (_(), R(d, {
          key: 0,
          fill: "",
          size: m(Et).LARGE,
          type: m(Tt).HIGHLIGHT,
          loading: m(s),
          disabled: m(o),
          onClick: h[0] || (h[0] = S => r.$emit("trade"))
        }, {
          default: H(() => [w("div", oa, I(("t" in r ? r.t : m($))("memepad.jetton.buy_button_label", {
            ticker: r.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "type", "loading", "disabled"])) : ct("", !0), r.tab === m(G).SELL ? (_(), R(d, {
          key: 1,
          fill: "",
          size: m(Et).LARGE,
          type: m(Tt).PINK,
          loading: m(s),
          disabled: m(o),
          onClick: h[1] || (h[1] = S => r.$emit("trade"))
        }, {
          default: H(() => [w("div", ra, I(("t" in r ? r.t : m($))("memepad.jetton.sell_button_label", {
            ticker: r.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "type", "loading", "disabled"])) : ct("", !0)], 64))])
      }
    }
  }),
  la = q(ha, [
    ["__scopeId", "data-v-85aa80e6"]
  ]),
  aa = {
    class: "content"
  },
  ca = {
    class: "subtitle"
  },
  ua = {
    key: 0
  },
  da = {
    class: "label"
  },
  fa = Z({
    __name: "TradeModal",
    props: oe({
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
    emits: oe(["trade", "unlock-success", "open-slippage"], ["update:modelValue", "update:tradePendings"]),
    setup(n, {
      emit: t
    }) {
      const e = n,
        i = t,
        s = Ee(n, "modelValue"),
        o = Ee(n, "tradePendings"),
        r = D(),
        {
          state: h,
          updateInputState: l
        } = P(),
        a = O(),
        c = () => {
          var M;
          e.jettonModalControls.value.value === et.TRADE && ((M = r.value) == null || M.focusOnInput())
        },
        u = D(e.jettonTrading.slippage);
      St(() => e.jettonModalControls.isOpened(et.SLIPPAGE), M => {
        var z;
        u.value = e.jettonTrading.slippage, l(), M || (z = r.value) == null || z.focusOnInput()
      });
      const d = D(),
        f = D("0"),
        p = M => $e(M, {
          join: "emptyFractional"
        }),
        v = T({
          get: () => f.value,
          set: M => {
            f.value = M, Bi(() => {
              var z;
              return (z = d.value) == null ? void 0 : z.applyNearestValue()
            })
          }
        }),
        g = T({
          get: () => f.value,
          set: M => {
            f.value = p(M)
          }
        });
      St(() => s.value, () => {
        f.value = "0", Bi(() => {
          var M;
          return (M = d.value) == null ? void 0 : M.applyNearestValue()
        })
      });
      const y = T(() => {
          if (!(!h.value || h.value.loading)) {
            if (S.value.isZero()) return s.value === G.BUY ? `0 ${e.jetton.ticker}` : "0 TON";
            if (!h.value.feesInfo || !h.value.ready) return "";
            if (s.value === G.SELL) {
              const M = h.value.tradeInfo.maxReceive,
                z = `${Ai(M)} TON`;
              if (!e.tonUsdRate) return z;
              const E = In(e.tonUsdRate.mul(M));
              return `${z} (≈$${E})`
            } else {
              const M = h.value.tradeInfo.maxReceive;
              return `≈${$e(M,{accuracy:0})} ${e.jetton.ticker}`
            }
          }
        }),
        S = T(() => new xe(f.value.replaceAll(",", "") || "0"));
      let V;
      St(() => [f.value, e.balances.jettonBalance, e.balances.tonBalance], () => l()), Ie(() => {
        V == null || V.destroy()
      });

      function P() {
        const M = e.jettonTrading.tradeStateControls,
          z = T(() => M.getImmediateState({
            operation: s.value,
            amount: S.value,
            tonBalance: e.balances.tonBalance,
            jettonBalance: e.balances.jettonBalance,
            jetton: e.jetton
          })),
          E = D(M.getEmptyState({
            operation: s.value,
            jettonBalance: e.balances.jettonBalance,
            tonBalance: e.balances.tonBalance
          })),
          W = T(() => z.value || E.value);
        let A = new AbortController;
        const it = () => {
            A.abort(), A = new AbortController
          },
          {
            debouncedFunction: ot
          } = Wn(async () => {
            if (it(), z.value) return;
            const {
              signal: lt
            } = A, k = await M.getState({
              operation: s.value,
              amount: S.value,
              tonBalance: e.balances.tonBalance,
              jettonBalance: e.balances.jettonBalance,
              jetton: e.jetton
            });
            lt.aborted || (E.value = k)
          }, 600);
        return {
          state: W,
          updateInputState: () => {
            E.value = void 0, ot()
          }
        }
      }

      function O() {
        const M = yi();
        return async () => {
          if (!h.value || !h.value.ready) return;
          const E = s.value,
            W = new xe(S.value),
            A = h.value.tradeInfo,
            it = e.jetton.ticker,
            ot = e.jetton.id,
            ut = e.jetton.address,
            lt = e.jetton.address,
            k = e.jetton.shortname;
          await (async () => {
            o.value[E] = !0;
            const vt = () => {
                const x = fi(E === G.BUY ? A.minReceive : W, it),
                  U = fi(E === G.BUY ? W : A.minReceive, "TON"),
                  B = E === G.BUY ? $("memepad.jetton.buy.failed_alert", {
                    askLabel: x.frontendWithSymbol,
                    offerLabel: U.frontendWithSymbol
                  }) : $("memepad.jetton.sell.failed_alert", {
                    askLabel: x.frontendWithSymbol,
                    offerLabel: U.frontendWithSymbol
                  });
                Le().bottom.error(B)
              },
              yt = await (E === G.BUY ? e.jettonTrading.buyJetton(W, A) : e.jettonTrading.sellJetton(W, A));
            if (yt.err) {
              o.value[E] = !1, vt();
              return
            }
            i("trade");
            const Q = yt.data;
            V = E === G.BUY ? e.jettonTrading.getWaitForBuyStatus() : e.jettonTrading.getWaitForSellStatus(), await Ps(2e4);
            const jt = await V.exec({
                jettonAddress: lt,
                transactionHash: Q
              }),
              zt = jt ? "success" : "failed";
            if (E === G.BUY ? M.memepad.memepadJettonBuy({
                status: zt,
                jettonId: ot,
                jettonShortname: k,
                jettonAddress: ut,
                purchaseAmount: W.toNumber()
              }) : M.memepad.memepadJettonSell({
                status: zt,
                jettonId: ot,
                jettonShortname: k,
                jettonAddress: ut,
                purchaseAmount: A.maxReceive.toNumber()
              }), !jt) {
              o.value[E] = !1, vt();
              return
            }
            const C = E === G.BUY ? $("memepad.jetton.buy.success_alert", {
              ticker: it,
              label: `${Ai(W)} TON`
            }) : $("memepad.jetton.sell.success_alert", {
              label: `${Ns(W).full} ${it}`
            });
            Le().bottom.success(C), o.value[E] = !1, e.tradeSuccessCallback()
          })()
        }
      }
      return (M, z) => {
        const E = Mn,
          W = ia,
          A = Js,
          it = Be,
          ot = ue,
          ut = Si,
          lt = la,
          k = Mi,
          vt = ro,
          yt = Ks;
        return _(), R(yt, {
          class: "memepad-jetton-trade-modal"
        }, {
          "top-center": H(() => [j(W, {
            modelValue: s.value,
            "onUpdate:modelValue": z[0] || (z[0] = Q => s.value = Q),
            class: "tabs"
          }, {
            default: H(() => [j(E, {
              label: ("t" in M ? M.t : m($))("memepad.jetton.buy_tab"),
              value: m(G).BUY,
              type: m(di).PRIMARY,
              class: "buy-tab"
            }, null, 8, ["label", "value", "type"]), j(E, {
              label: ("t" in M ? M.t : m($))("memepad.jetton.sell_tab"),
              value: m(G).SELL,
              type: m(di).SECONDARY,
              class: "sell-tab"
            }, null, 8, ["label", "value", "type"])]),
            _: 1
          }, 8, ["modelValue"])]),
          default: H(() => [w("div", aa, [(_(), R(A, {
            ref_key: "actionControlsInputComp",
            ref: r,
            key: s.value,
            modelValue: m(v),
            "onUpdate:modelValue": z[1] || (z[1] = Q => pt(v) ? v.value = Q : null),
            postfix: s.value === "buy" ? "TON" : M.jetton.ticker,
            modifier: p,
            onBlur: c
          }, null, 8, ["modelValue", "postfix"])), w("div", ca, [m(y) ? (_(), L("span", ua, I(m(y)), 1)) : m(y) === void 0 ? (_(), R(it, {
            key: 1,
            class: "skeleton"
          })) : ct("", !0)]), w("button", {
            type: "button",
            class: "reset slippage-btn",
            onClick: z[2] || (z[2] = Q => M.$emit("open-slippage"))
          }, [w("span", da, I(`${("t"in M?M.t:m($))("memepad.jetton.slippage_btn")} ${m(u)}%`), 1), j(ot, {
            name: "arrow-caret-down",
            class: "icon"
          })])])]),
          "bottom-action": H(() => [j(k, {
            "force-loading": M.unlockEnabled === void 0 && M.isReleased || !M.jettonTrading
          }, {
            default: H(() => [M.unlockEnabled ? (_(), R(ut, {
              key: 0,
              jetton: M.jetton,
              "jetton-information": M.jettonInformation,
              balances: M.balances,
              "jetton-management": M.jettonManagement,
              onUnlocked: z[3] || (z[3] = Q => M.$emit("unlock-success"))
            }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])) : (_(), R(lt, {
              key: 1,
              value: m(f),
              tab: s.value,
              jetton: M.jetton,
              "trade-pendings": o.value,
              "input-state": m(h),
              onTrade: m(a)
            }, null, 8, ["value", "tab", "jetton", "trade-pendings", "input-state", "onTrade"]))]),
            _: 1
          }, 8, ["force-loading"])]),
          "bottom-helpers": H(() => [j(vt, {
            ref_key: "rangeInputEl",
            ref: d,
            modelValue: m(g),
            "onUpdate:modelValue": z[4] || (z[4] = Q => pt(g) ? g.value = Q : null),
            tab: s.value,
            balances: M.balances
          }, null, 8, ["modelValue", "tab", "balances"])]),
          _: 1
        })
      }
    }
  }),
  ma = q(fa, [
    ["__scopeId", "data-v-b587619b"]
  ]),
  pa = {
    class: "title"
  },
  va = {
    class: "content"
  },
  ba = {
    class: "actions"
  },
  ga = {
    key: 1,
    class: "text"
  },
  _a = 1,
  wa = 99,
  ya = Z({
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
        i = t,
        s = D(),
        o = () => {
          var c;
          e.jettonModalControls.value.value === et.SLIPPAGE && ((c = s.value) == null || c.focusOnInput())
        },
        r = D(e.jettonTrading.slippage.toString()),
        h = T(() => new xe(r.value.replaceAll(",", "") || "0")),
        l = T(() => h.value.lt(_a) ? $("memepad.jetton.slippage.error_message.too_low") : h.value.gt(wa) ? $("memepad.jetton.slippage.error_message.too_high") : ""),
        a = () => {
          l.value || (e.jettonTrading.updateSlippage(parseFloat(r.value)), i("slippage-updated"))
        };
      return (c, u) => {
        const d = Js,
          f = ho,
          p = Dt,
          v = Ks;
        return _(), R(v, {
          class: "memepad-jetton-action-controls-slippage-modal"
        }, {
          "top-center": H(() => [w("div", pa, I(("t" in c ? c.t : m($))("memepad.jetton.slippage.title")), 1)]),
          default: H(() => [w("div", va, [j(d, {
            ref_key: "actionControlsInputComp",
            ref: s,
            modelValue: m(r),
            "onUpdate:modelValue": u[0] || (u[0] = g => pt(r) ? r.value = g : null),
            postfix: "%",
            modifier: g => ("formatFloatLine" in c ? c.formatFloatLine : m($e))(g, {
              join: "emptyFractional"
            }),
            onBlur: o
          }, null, 8, ["modelValue", "modifier"]), u[1] || (u[1] = w("div", {
            class: "subtitle-compensator"
          }, null, -1))])]),
          "bottom-action": H(() => [w("div", ba, [m(l) ? (_(), R(f, {
            key: 0,
            "error-message": m(l)
          }, null, 8, ["error-message"])) : (_(), L("div", ga, I(("t" in c ? c.t : m($))("memepad.jetton.slippage.text")), 1)), j(p, {
            label: ("t" in c ? c.t : m($))("memepad.jetton.slippage.done_btn"),
            fill: "",
            size: m(Et).LARGE,
            type: m(l) ? m(Tt).HIGHLIGHT : m(Tt).PRIMARY,
            disabled: !!m(l),
            onClick: a
          }, null, 8, ["label", "size", "type", "disabled"])])]),
          _: 1
        })
      }
    }
  }),
  Ma = q(ya, [
    ["__scopeId", "data-v-0736f852"]
  ]),
  Sa = {
    class: "memepad-jetton-action-controls-trade-buttons"
  },
  ka = {
    class: "label"
  },
  Ca = {
    class: "label"
  },
  ja = Z({
    __name: "TradeButtons",
    props: {
      tradePendings: {}
    },
    emits: ["click"],
    setup(n) {
      return (t, e) => {
        const i = Dt;
        return _(), L("div", Sa, [j(i, {
          class: "buy-button",
          type: m(Tt).HIGHLIGHT,
          loading: t.tradePendings[m(G).BUY],
          onClick: e[0] || (e[0] = s => t.$emit("click", m(G).BUY))
        }, {
          default: H(() => [w("span", ka, I(("t" in t ? t.t : m($))("memepad.jetton.buy_button_preview_label")), 1)]),
          _: 1
        }, 8, ["type", "loading"]), j(i, {
          class: "sell-button",
          type: m(Tt).PINK,
          loading: t.tradePendings[m(G).SELL],
          onClick: e[1] || (e[1] = s => t.$emit("click", m(G).SELL))
        }, {
          default: H(() => [w("span", Ca, I(("t" in t ? t.t : m($))("memepad.jetton.sell_button_preview_label")), 1)]),
          _: 1
        }, 8, ["type", "loading"])])
      }
    }
  }),
  za = q(ja, [
    ["__scopeId", "data-v-7976e3b5"]
  ]),
  La = {
    class: "memepad-jetton-action-controls"
  },
  Ea = Z({
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
        i = t,
        s = D(G.BUY),
        o = Bn({
          [G.BUY]: !1,
          [G.SELL]: !1
        }),
        r = c => {
          s.value = c, e.jettonModalControls.update(et.TRADE)
        },
        h = () => {
          e.jettonModalControls.update(void 0)
        },
        l = () => {
          i("trade-success")
        },
        a = () => {
          i("unlock-success")
        };
      return (c, u) => {
        const d = Gl,
          f = ma,
          p = Ma,
          v = za,
          g = Mi,
          y = Hs;
        return _(), L("div", La, [j(y, null, {
          default: H(() => [j(g, {
            "force-loading": c.unlockEnabled === void 0 && c.isReleased || !c.jettonTrading,
            "button-size": m(Et).MEDIUM
          }, {
            default: H(() => [c.unlockEnabled ? (_(), R(d, {
              key: 0,
              jetton: c.jetton,
              "jetton-information": c.jettonInformation,
              balances: c.balances,
              "jetton-management": c.jettonManagement,
              "unlock-success-callback": a
            }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])) : (_(), L(st, {
              key: 1
            }, [c.jettonModalControls.isOpened(m(et).TRADE) ? (_(), R(f, {
              key: 0,
              modelValue: m(s),
              "onUpdate:modelValue": u[0] || (u[0] = S => pt(s) ? s.value = S : null),
              "trade-pendings": m(o),
              "onUpdate:tradePendings": u[1] || (u[1] = S => pt(o) ? o.value = S : null),
              jetton: c.jetton,
              "jetton-information": c.jettonInformation,
              "jetton-bcl-data": c.jettonBclData,
              balances: c.balances,
              "jetton-management": c.jettonManagement,
              "jetton-trading": c.jettonTrading,
              "is-released": c.isReleased,
              "unlock-enabled": c.unlockEnabled,
              "ton-usd-rate": c.tonUsdRate,
              "trade-success-callback": l,
              "jetton-modal-controls": c.jettonModalControls,
              onTrade: h,
              onUnlockSuccess: u[2] || (u[2] = S => c.$emit("unlock-success")),
              onOpenSlippage: u[3] || (u[3] = S => c.jettonModalControls.update(m(et).SLIPPAGE))
            }, null, 8, ["modelValue", "trade-pendings", "jetton", "jetton-information", "jetton-bcl-data", "balances", "jetton-management", "jetton-trading", "is-released", "unlock-enabled", "ton-usd-rate", "jetton-modal-controls"])) : ct("", !0), c.jettonModalControls.isOpened(m(et).SLIPPAGE) ? (_(), R(p, {
              key: 1,
              "jetton-trading": c.jettonTrading,
              "jetton-modal-controls": c.jettonModalControls,
              onSlippageUpdated: u[4] || (u[4] = S => c.jettonModalControls.update(m(et).TRADE))
            }, null, 8, ["jetton-trading", "jetton-modal-controls"])) : ct("", !0), j(v, {
              "trade-pendings": m(o),
              onClick: r
            }, null, 8, ["trade-pendings"])], 64))]),
            _: 1
          }, 8, ["force-loading", "button-size"])]),
          _: 1
        })])
      }
    }
  }),
  Ta = q(Ea, [
    ["__scopeId", "data-v-bacfcc1b"]
  ]),
  $a = {
    class: "memepad-jetton-page-trade"
  },
  xa = Z({
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
        e = D(!1),
        i = T(() => {
          var l, a, c, u, d;
          const s = t.jettonInformation.marketCap,
            o = t.jettonBclData && t.jettonBclData.tonCollectedPercent,
            r = ((l = t.jettonBclData) == null ? void 0 : l.tonCollected) || ((a = t.jettonInformation) == null ? void 0 : a.tonCollected),
            h = (c = t.jettonBclData) == null ? void 0 : c.tonForDex;
          return {
            isReleased: t.isReleased,
            percent: o,
            collected: r,
            total: h,
            marketDetails: {
              marketCap: s,
              listRows: {
                holdersCount: (u = t.jettonInformation) == null ? void 0 : u.holdersCount,
                transactionsCount: (d = t.jettonInformation) == null ? void 0 : d.transactionsCount,
                transactionsVolume: t.jettonInformation.transactionsVolume
              }
            }
          }
        });
      return (s, o) => {
        const r = tr,
          h = lo,
          l = Ol,
          a = Ta,
          c = Vs;
        return _(), L(st, null, [w("div", $a, [j(r, {
          jetton: s.jetton,
          "jetton-information": s.jettonInformation,
          "is-released": s.isReleased,
          "jetton-modal-controls": s.jettonModalControls,
          onShare: o[0] || (o[0] = u => e.value = !0)
        }, null, 8, ["jetton", "jetton-information", "is-released", "jetton-modal-controls"]), j(h, An(m(i), {
          class: "details"
        }), null, 16), j(l, {
          chart: s.jettonChart,
          "chart-interval": s.jettonChartInterval,
          "chart-type": s.jettonChartType,
          "update-chart-interval": s.updateJettonChartInterval,
          "update-chart-type": s.updateJettonChartType
        }, null, 8, ["chart", "chart-interval", "chart-type", "update-chart-interval", "update-chart-type"]), j(a, {
          jetton: s.jetton,
          "jetton-information": s.jettonInformation,
          "is-released": s.isReleased,
          "unlock-enabled": s.unlockEnabled,
          balances: s.balances,
          "jetton-management": s.jettonManagement,
          "jetton-trading": s.jettonTrading,
          "ton-usd-rate": s.tonUsdRate,
          "jetton-modal-controls": s.jettonModalControls,
          class: "action-controls",
          onTradeSuccess: o[1] || (o[1] = u => s.$emit("trade-success")),
          onUnlockSuccess: o[2] || (o[2] = u => s.$emit("unlock-success"))
        }, null, 8, ["jetton", "jetton-information", "is-released", "unlock-enabled", "balances", "jetton-management", "jetton-trading", "ton-usd-rate", "jetton-modal-controls"])]), j(c, {
          modelValue: m(e),
          "onUpdate:modelValue": o[3] || (o[3] = u => pt(e) ? e.value = u : null),
          "jetton-shortname": t.jetton.shortname,
          ticker: s.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])], 64)
      }
    }
  }),
  Pa = q(xa, [
    ["__scopeId", "data-v-1e73f9e8"]
  ]),
  Va = {
    class: "memepad-jetton-header-short"
  },
  Ra = {
    class: "ticker"
  },
  Ia = Z({
    __name: "HeaderShort",
    props: {
      jetton: {},
      jettonModalControls: {}
    },
    setup(n) {
      return (t, e) => {
        const i = Xs;
        return _(), L("div", Va, [j(i, {
          jetton: t.jetton,
          "jetton-modal-controls": t.jettonModalControls
        }, null, 8, ["jetton", "jetton-modal-controls"]), w("div", Ra, I(("t" in t ? t.t : m($))("memepad.transactions.ticker", {
          ticker: t.jetton.ticker
        })), 1)])
      }
    }
  }),
  Wa = q(Ia, [
    ["__scopeId", "data-v-3c970b74"]
  ]),
  Ba = {
    class: "memepad-jetton-transaction"
  },
  Aa = {
    class: "user-avatar-wrapper"
  },
  Da = ["src"],
  Na = {
    key: 1,
    class: "user-avatar-empty"
  },
  Oa = {
    class: "content"
  },
  Ua = {
    key: 0,
    class: "name"
  },
  Fa = {
    key: 1,
    class: "user-address"
  },
  Ja = {
    class: "event-data"
  },
  Ka = {
    class: "time"
  },
  Ha = {
    class: "values"
  },
  Xa = {
    key: 0,
    class: "ton-price"
  },
  Ya = {
    key: 1,
    class: "amount"
  },
  Ga = Z({
    __name: "Transaction",
    props: {
      transaction: {}
    },
    setup(n) {
      const t = n,
        e = T(() => {
          const o = Ws(t.transaction.timestamp);
          return o.isDate ? o.label : $("base.time.ago", {
            time: o.label
          })
        }),
        i = T(() => $(`memepad.jetton.transactions.type.${t.transaction.type.toLowerCase()}`)),
        s = T(() => Rs(Dn(t.transaction.user.address)));
      return (o, r) => {
        const h = ue;
        return _(), L("div", Ba, [w("div", Aa, [o.transaction.user.avatarUrl ? (_(), L("img", {
          key: 0,
          src: o.transaction.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, Da)) : (_(), L("div", Na, [j(h, {
          name: "space-invader",
          class: "icon"
        })]))]), w("div", Oa, [o.transaction.user.nickname ? (_(), L("div", Ua, I(o.transaction.user.nickname), 1)) : (_(), L("div", Fa, I(m(s)), 1)), w("div", Ja, [w("div", {
          class: Rt(["type", `is-${o.transaction.type.toLowerCase()}`])
        }, I(m(i)), 3), w("div", Ka, I(m(e)), 1)])]), w("div", Ha, [o.transaction.amount ? (_(), L("div", Xa, I(`${("formatTon"in o?o.formatTon:m(Nn))(o.transaction.amount,2)} TON`), 1)) : ct("", !0), o.transaction.jettonAmount ? (_(), L("div", Ya, I(`${("formatCount"in o?o.formatCount:m(Ns))(o.transaction.jettonAmount).full} ${o.transaction.ticker}`), 1)) : ct("", !0)])])
      }
    }
  }),
  Za = q(Ga, [
    ["__scopeId", "data-v-af7bb1f2"]
  ]),
  qa = {
    class: "memepad-jetton-page-transactions"
  },
  Qa = Z({
    __name: "Transactions",
    props: {
      transactions: {}
    },
    setup(n) {
      return (t, e) => {
        const i = Be,
          s = Za;
        return _(), L("div", qa, [t.transactions ? (_(!0), L(st, {
          key: 1
        }, Jt(t.transactions.transactions, o => (_(), R(s, {
          key: o.user.address + o.timestamp,
          transaction: o
        }, null, 8, ["transaction"]))), 128)) : (_(), L(st, {
          key: 0
        }, Jt(3, o => w("div", {
          key: o,
          class: "skeleton"
        }, [j(i, {
          class: "image",
          rounded: ""
        }), j(i, {
          class: "title"
        }), j(i, {
          class: "value"
        })])), 64))])
      }
    }
  }),
  tc = q(Qa, [
    ["__scopeId", "data-v-3267f193"]
  ]),
  ec = {
    class: "memepad-jetton-page-transactions"
  },
  ic = Z({
    __name: "PageTransactions",
    props: {
      jetton: {},
      jettonTransactions: {},
      jettonModalControls: {}
    },
    setup(n) {
      return (t, e) => {
        const i = Wa,
          s = tc;
        return _(), L("div", ec, [j(i, {
          jetton: t.jetton,
          "jetton-modal-controls": t.jettonModalControls
        }, null, 8, ["jetton", "jetton-modal-controls"]), j(s, {
          transactions: t.jettonTransactions
        }, null, 8, ["transactions"])])
      }
    }
  }),
  sc = q(ic, [
    ["__scopeId", "data-v-e0d242ba"]
  ]),
  nc = () => Bs().$webApp.openTelegramLink("https://t.me/BlumCrypto"),
  oc = {
    class: "memepad-jetton page"
  },
  rc = Z({
    __name: "[shortname]",
    setup(n) {
      const t = (() => {
          const C = On("shortname");
          if (!C) throw Ds("Jetton shortname is not provided");
          return C
        })(),
        {
          tonUsdRate: e,
          partnerAddresses: i
        } = ao(),
        {
          getManagementSdk: s,
          getBeforeDexTradingSdk: o,
          getDexTradingSdk: r
        } = co(),
        h = Un(),
        l = Fn(),
        a = yi(),
        c = Jn(),
        u = Je(),
        d = Kn(),
        f = T(() => c.name === "memepad-jetton-shortname-transactions" ? me.TRANSACTIONS : me.TRADE),
        {
          jettonStaticState: p,
          ...v
        } = vt(),
        {
          jettonInformation: g,
          jettonTransactions: y,
          ...S
        } = yt(),
        {
          jettonBclData: V,
          jettonBalance: P,
          jettonUnlockEnabled: O,
          ...M
        } = jt(),
        {
          jettonChart: z,
          jettonChartInterval: E,
          ...W
        } = Q(t),
        A = zt();
      uo(() => c.name === "memepad-jetton-shortname-transactions" ? Je().push({
        name: "memepad-jetton-shortname-trade"
      }) : A.state.value === et.SLIPPAGE ? A.controls.update(et.TRADE) : A.state.value === et.TRADE || A.state.value === et.IMAGE_PREVIEW ? A.controls.update(void 0) : Je().push({
        name: "memepad"
      }));
      const it = async () => {
        const C = qn("from", eo);
        a.memepad.memepadJettonPageOpen({
          source: C,
          jettonShortname: t,
          jettonId: p.value.status === "loaded" ? p.value.data.id : void 0
        }), C && fo(), c.name === "memepad-jetton-shortname" && u.replace({
          name: "memepad-jetton-shortname-trade",
          params: {
            shortname: t
          }
        }), await Qn().getReferralToken(), await v.getMemepadJettonUntilOk.exec(), await S.init(), M.init(), W.init()
      }, ot = () => {
        v.destroy(), S.destroy(), W.destroy(), M.destroy()
      };
      it(), Ie(() => {
        ot(), d.internal.removeForceHideTabs()
      });
      const ut = async () => {
        await Promise.all([h.update(), S.update(), W.update(), M.update()])
      }, lt = async () => {
        await M.resetAndUpdateUnlocked()
      }, k = T(() => {
        var K;
        if (p.value.status === "error") return {
          status: "error"
        };
        if (p.value.status === "loading" || !g.value || !i.value) return {
          status: "loading"
        };
        const C = p.value.data;
        if (!C || !g || g.value.status === pe.IN_PROGRESS) return {
          status: "loading"
        };
        const x = C.address,
          U = [pe.PUBLISHED_ON_DEX, pe.LISTED_TO_DEX].includes(g.value.status),
          B = {
            jettonBalance: P.value ? fi(P.value, C.ticker) : void 0,
            tonBalance: h.wallet.value.status === "connected" ? (K = h.wallet.value.balance) == null ? void 0 : K.tonBalance.balance : void 0
          },
          Y = Hn(Xn, {
            address: i.value.partnerAddress,
            masterContractAddress: C.masterContractAddress.toString()
          }),
          N = s(Y),
          J = U ? r(x) : o(x, Y);
        return g.value.status === pe.LISTED_TO_DEX ? {
          status: "moving_to_dex",
          jetton: C,
          jettonInformation: g.value,
          isReleased: !0,
          unlockEnabled: O.value,
          balances: B,
          jettonManagement: N,
          jettonTrading: J,
          jettonModalControls: A.controls
        } : {
          status: "trade",
          jetton: C,
          jettonInformation: g.value,
          jettonBclData: V.value,
          jettonTransactions: y.value,
          jettonChart: z.value,
          jettonChartInterval: E.value,
          jettonChartType: W.jettonChartType.value,
          updateJettonChartInterval: W.updateChartInterval,
          updateJettonChartType: W.updateChartType,
          isReleased: U,
          unlockEnabled: O.value,
          balances: B,
          jettonManagement: N,
          jettonTrading: J,
          jettonModalControls: A.controls
        }
      });
      St(() => A.state.value, C => {
        C ? d.internal.forceHideTabs() : d.internal.removeForceHideTabs()
      }), St(() => k.value.status, (C, x) => {
        C === "moving_to_dex" ? d.internal.forceHideTabs() : x === "moving_to_dex" && d.internal.removeForceHideTabs()
      });

      function vt() {
        const C = Yn(() => new Map, "$LIXaimu3X5"),
          x = D({
            status: "loading"
          }),
          B = Gn(async () => {
            const N = C.value.get(t);
            if (N) return ft(N);
            const J = await ve.getMemepadJetton(t);
            return J.err ? io() : (C.value.set(t, J.data), ft(J.data))
          }, N => x.value = {
            status: "loaded",
            data: N
          }, 2e4);
        return {
          destroy: () => {
            B.destroy(), x.value = {
              status: "loading"
            }
          },
          getMemepadJettonUntilOk: B,
          jettonStaticState: T(() => x.value)
        }
      }

      function yt() {
        const C = D(),
          x = D(),
          U = Yt(async () => {
            const J = await ve.getMemepadJettonInformation(t),
              K = await ve.getMemepadJettonTransactions(t);
            return ft({
              information: (Pt(J) ? J.data : C.value) || C.value,
              transactions: (Pt(K) ? K.data : x.value) || x.value
            })
          }, J => {
            C.value = J.information, x.value = J.transactions
          }, 5e3);
        return {
          init: async () => await U.exec(),
          destroy: () => {
            U.destroy(), C.value = void 0, x.value = void 0
          },
          update: async () => await U.exec(),
          jettonInformation: T(() => C.value),
          jettonTransactions: T(() => x.value)
        }
      }

      function Q(C) {
        const x = D(),
          U = D(Qt.ONE_MINUTE),
          B = D(Zt.MARKET_CAP);
        let Y = new AbortController;
        const N = () => {
            Y.abort(), Y = new AbortController
          },
          J = Mt => {
            U.value = Mt, rt.exec()
          },
          K = Mt => {
            B.value = Mt, rt.exec()
          },
          rt = Yt(async () => {
            N();
            const Mt = await ve.getMemepadJettonChart(C, {
              interval: U.value,
              type: B.value
            });
            return Y.signal.aborted ? ft(x.value) : ft((Pt(Mt) ? Mt.data : x.value) || x.value)
          }, Mt => x.value = Mt, 5e3);
        return {
          init: async () => await rt.exec(),
          destroy: () => {
            rt.destroy(), x.value = void 0, U.value = Qt.ONE_MINUTE
          },
          update: async () => await rt.exec(),
          updateChartInterval: J,
          updateChartType: K,
          jettonChartInterval: T(() => U.value),
          jettonChartType: T(() => B.value),
          jettonChart: T(() => x.value)
        }
      }

      function jt() {
        const C = D(),
          x = D(),
          U = D();
        let B, Y, N, J, K, rt;

        function Ii() {
          Y = St(k, at => {
            at.status === "error" || at.status === "loading" || B || at.jettonManagement && (Y == null || Y(), B = Yt(async () => {
              if (k.value.status === "error" || k.value.status === "loading") return ft(void 0);
              const dt = k.value.jetton.address,
                Xt = await k.value.jettonManagement.getJettonBclData(dt);
              return ft((Pt(Xt) ? Xt.data : C.value) || C.value)
            }, dt => C.value = dt, 6e4), B == null || B.exec())
          }, {
            immediate: !0
          }), J = St(k, at => {
            at.status === "error" || at.status === "loading" || N || !at.jettonTrading || l.value !== "connected" || (J == null || J(), N = Yt(async () => {
              if (k.value.status === "error" || k.value.status === "loading" || !k.value.jettonTrading || l.value !== "connected") return ft(void 0);
              const dt = k.value.jetton.address,
                Xt = await k.value.jettonTrading.getUserJettonBalance(dt);
              return ft((Pt(Xt) ? Xt.data : x.value) || x.value)
            }, dt => x.value = dt, 6e4), N == null || N.exec())
          }, {
            immediate: !0
          }), rt = St(k, at => {
            at.status === "error" || at.status === "loading" || K || !at.jetton || !at.balances.jettonBalance || !at.isReleased || l.value !== "connected" || (rt == null || rt(), K = Yt(async () => {
              if (k.value.status === "error" || k.value.status === "loading" || !k.value.balances.jettonBalance || !k.value.isReleased || l.value !== "connected") return ft(void 0);
              if (k.value.balances.jettonBalance.value.isZero()) return ft(!1);
              const dt = await k.value.jettonManagement.getUnlockEnabled(k.value.jetton.address);
              return ft(Pt(dt) ? dt.data : U.value)
            }, dt => U.value = dt, 6e4), K == null || K.exec())
          }, {
            immediate: !0
          })
        }
        return {
          init: Ii,
          destroy: () => {
            Y == null || Y(), B == null || B.destroy(), J == null || J(), N == null || N.destroy(), rt == null || rt(), K == null || K.destroy(), C.value = void 0, x.value = void 0, U.value = void 0
          },
          update: async () => {
            await (B == null ? void 0 : B.exec()), await (N == null ? void 0 : N.exec()), await (K == null ? void 0 : K.exec())
          },
          resetAndUpdateUnlocked: async () => {
            U.value = void 0, await (K == null ? void 0 : K.exec())
          },
          jettonBclData: T(() => C.value),
          jettonBalance: T(() => x.value),
          jettonUnlockEnabled: T(() => U.value)
        }
      }

      function zt() {
        const C = [et.TRADE, et.SLIPPAGE],
          x = D(void 0),
          U = {
            update: B => {
              x.value = B
            },
            isOpened: B => {
              if (!x.value) return !1;
              const Y = C.indexOf(x.value),
                N = C.indexOf(B);
              return N === -1 ? x.value === B : Y >= N
            },
            value: T(() => x.value)
          };
        return {
          state: T(() => x.value),
          controls: U
        }
      }
      return (C, x) => {
        const U = Cn,
          B = jn,
          Y = Co,
          N = Pa,
          J = sc,
          K = to;
        return _(), L("div", oc, [m(k).status === "error" ? (_(), R(U, {
          key: 0,
          icon: ("imgResolver" in C ? C.imgResolver : m(Zn))("emoji/Collision"),
          title: ("t" in C ? C.t : m($))("memepad.jetton.error_screen.title"),
          subtitle: ("t" in C ? C.t : m($))("memepad.jetton.error_screen.subtitle"),
          "button-label": ("t" in C ? C.t : m($))("memepad.jetton.error_screen.btn_label"),
          onButton: x[0] || (x[0] = rt => ("visitCommunity" in C ? C.visitCommunity : m(nc))())
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : m(k).status === "loading" ? (_(), R(B, {
          key: 1
        })) : (_(), L(st, {
          key: 2
        }, [m(f) === m(me).TRADE ? (_(), L(st, {
          key: 0
        }, [m(k).status === "moving_to_dex" ? (_(), R(Y, {
          key: 0,
          jetton: m(k).jetton,
          "jetton-information": m(k).jettonInformation,
          "unlock-enabled": m(k).unlockEnabled,
          balances: m(k).balances,
          "jetton-management": m(k).jettonManagement,
          "is-released": ""
        }, null, 8, ["jetton", "jetton-information", "unlock-enabled", "balances", "jetton-management"])) : (_(), R(N, {
          key: 1,
          jetton: m(k).jetton,
          "jetton-information": m(k).jettonInformation,
          "jetton-bcl-data": m(k).jettonBclData,
          "jetton-chart": m(k).jettonChart,
          "jetton-chart-interval": m(k).jettonChartInterval,
          "jetton-chart-type": m(k).jettonChartType,
          "update-jetton-chart-interval": m(k).updateJettonChartInterval,
          "update-jetton-chart-type": m(k).updateJettonChartType,
          "is-released": m(k).isReleased,
          "unlock-enabled": m(k).unlockEnabled,
          "jetton-management": m(k).jettonManagement,
          "jetton-trading": m(k).jettonTrading,
          balances: m(k).balances,
          "jetton-modal-controls": m(k).jettonModalControls,
          "ton-usd-rate": m(e),
          onTradeSuccess: ut,
          onUnlockSuccess: lt
        }, null, 8, ["jetton", "jetton-information", "jetton-bcl-data", "jetton-chart", "jetton-chart-interval", "jetton-chart-type", "update-jetton-chart-interval", "update-jetton-chart-type", "is-released", "unlock-enabled", "jetton-management", "jetton-trading", "balances", "jetton-modal-controls", "ton-usd-rate"]))], 64)) : m(f) === m(me).TRANSACTIONS ? (_(), R(J, {
          key: 1,
          jetton: m(k).jetton,
          "jetton-transactions": m(k).jettonTransactions,
          "jetton-modal-controls": m(k).jettonModalControls
        }, null, 8, ["jetton", "jetton-transactions", "jetton-modal-controls"])) : ct("", !0)], 64)), j(K)])
      }
    }
  }),
  _c = q(rc, [
    ["__scopeId", "data-v-d9803a4a"]
  ]);
export {
  _c as
  default
};