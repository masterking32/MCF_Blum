import {
  bB as ze,
  d as N,
  o as d,
  c as w,
  a as f,
  aw as ye,
  f as T,
  j as C,
  a3 as we,
  z as A,
  t as E,
  e,
  ao as K,
  L as R,
  aN as se,
  bC as me,
  G as M,
  aU as Re,
  bD as Ve,
  D as L,
  b as k,
  bE as W,
  bF as We,
  aV as Ue,
  an as J,
  ak as Je,
  Q as ke,
  bG as Qe,
  w as Ne,
  bH as He,
  n as Te,
  aY as Ze,
  bI as ae,
  F as D,
  q as Z,
  I as j,
  bk as Pe,
  ae as $e,
  az as Ye,
  bJ as Xe,
  p as oe,
  W as Q,
  x as Y,
  _ as X,
  bK as et,
  bL as tt,
  bM as nt,
  b6 as Ie,
  aS as at,
  a8 as ot,
  bN as st,
  P as Ce,
  a_ as Se,
  ab as te,
  U as z,
  bO as lt,
  E as de,
  bv as rt,
  a6 as it,
  Z as Le,
  av as ne,
  aa as ut,
  bP as ct,
  bQ as dt,
  B as pt,
  ac as _e,
  $ as Ae,
  V as mt,
  bR as _t,
  h as ft,
  ad as vt,
  bS as je,
  b9 as Oe,
  bT as gt,
  aZ as ht,
  R as bt,
  bx as yt
} from "./CZHgEWRg.js";
import {
  K as Be
} from "./IfZ_NKcL.js";
import {
  _ as wt,
  a as kt
} from "./sTPCdnTJ.js";
import {
  _ as le
} from "./Buw3Wxes.js";
import {
  g as St,
  _ as At,
  r as Ft,
  a as pe,
  b as Ee
} from "./0ymqzQ_x.js";
import {
  _ as Pt
} from "./C_2yUF-W.js";
import {
  d as $t,
  _ as It,
  a as Et,
  b as qe,
  e as xt,
  f as Mt,
  g as Rt,
  c as Vt
} from "./VB4y_sZV.js";
import {
  _ as Ut
} from "./DbRNdSO4.js";
import {
  _ as Nt
} from "./BCfaPKA7.js";
import {
  _ as Tt
} from "./Cl9Mwi30.js";
import {
  u as Ct
} from "./Dr_IbCDY.js";
import {
  _ as Lt
} from "./DEDnj9sq.js";
import {
  u as jt
} from "./DZ8u8hPw.js";
import "./Cvvsp9V2.js";
import "./BZgtHqLM.js";
import "./Dkesp57p.js";
var fe = {
  exports: {}
};
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = _;

  function t(m) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(r) {
      return typeof r
    } : t = function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, t(m)
  }

  function _(m) {
    var n = typeof m == "string" || m instanceof String;
    if (!n) {
      var r = t(m);
      throw m === null ? r = "null" : r === "object" && (r = m.constructor.name), new TypeError("Expected a string but received a ".concat(r))
    }
  }
  p.exports = s.default, p.exports.default = s.default
})(fe, fe.exports);
var Fe = fe.exports,
  ve = {
    exports: {}
  };
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = t;

  function t() {
    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      m = arguments.length > 1 ? arguments[1] : void 0;
    for (var n in m) typeof _[n] > "u" && (_[n] = m[n]);
    return _
  }
  p.exports = s.default, p.exports.default = s.default
})(ve, ve.exports);
var De = ve.exports,
  ge = {
    exports: {}
  };
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = r;
  var t = m(Fe),
    _ = m(De);

  function m(a) {
    return a && a.__esModule ? a : {
      default: a
    }
  }
  var n = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1
  };

  function r(a, i) {
    (0, t.default)(a), i = (0, _.default)(i, n), i.allow_trailing_dot && a[a.length - 1] === "." && (a = a.substring(0, a.length - 1)), i.allow_wildcard === !0 && a.indexOf("*.") === 0 && (a = a.substring(2));
    var h = a.split("."),
      u = h[h.length - 1];
    return i.require_tld && (h.length < 2 || !i.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(u) || /\s/.test(u)) || !i.allow_numeric_tld && /^\d+$/.test(u) ? !1 : h.every(function(l) {
      return !(l.length > 63 && !i.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(l) || /[\uff01-\uff5e]/.test(l) || /^-|-$/.test(l) || !i.allow_underscores && /_/.test(l))
    })
  }
  p.exports = s.default, p.exports.default = s.default
})(ge, ge.exports);
var Ot = ge.exports,
  he = {
    exports: {}
  };
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = h;
  var t = _(Fe);

  function _(u) {
    return u && u.__esModule ? u : {
      default: u
    }
  }
  var m = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    n = "(".concat(m, "[.]){3}").concat(m),
    r = new RegExp("^".concat(n, "$")),
    a = "(?:[0-9a-fA-F]{1,4})",
    i = new RegExp("^(" + "(?:".concat(a, ":){7}(?:").concat(a, "|:)|") + "(?:".concat(a, ":){6}(?:").concat(n, "|:").concat(a, "|:)|") + "(?:".concat(a, ":){5}(?::").concat(n, "|(:").concat(a, "){1,2}|:)|") + "(?:".concat(a, ":){4}(?:(:").concat(a, "){0,1}:").concat(n, "|(:").concat(a, "){1,3}|:)|") + "(?:".concat(a, ":){3}(?:(:").concat(a, "){0,2}:").concat(n, "|(:").concat(a, "){1,4}|:)|") + "(?:".concat(a, ":){2}(?:(:").concat(a, "){0,3}:").concat(n, "|(:").concat(a, "){1,5}|:)|") + "(?:".concat(a, ":){1}(?:(:").concat(a, "){0,4}:").concat(n, "|(:").concat(a, "){1,6}|:)|") + "(?::((?::".concat(a, "){0,5}:").concat(n, "|(?::").concat(a, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

  function h(u) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, t.default)(u), l = String(l), l ? l === "4" ? r.test(u) : l === "6" ? i.test(u) : !1 : h(u, 4) || h(u, 6)
  }
  p.exports = s.default, p.exports.default = s.default
})(he, he.exports);
var Bt = he.exports,
  be = {
    exports: {}
  };
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = V;
  var t = r(Fe),
    _ = r(Ot),
    m = r(Bt),
    n = r(De);

  function r(o) {
    return o && o.__esModule ? o : {
      default: o
    }
  }

  function a(o, c) {
    return y(o) || l(o, c) || h(o, c) || i()
  }

  function i() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }

  function h(o, c) {
    if (o) {
      if (typeof o == "string") return u(o, c);
      var S = Object.prototype.toString.call(o).slice(8, -1);
      if (S === "Object" && o.constructor && (S = o.constructor.name), S === "Map" || S === "Set") return Array.from(o);
      if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)) return u(o, c)
    }
  }

  function u(o, c) {
    (c == null || c > o.length) && (c = o.length);
    for (var S = 0, I = new Array(c); S < c; S++) I[S] = o[S];
    return I
  }

  function l(o, c) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(o)))) {
      var S = [],
        I = !0,
        v = !1,
        x = void 0;
      try {
        for (var U = o[Symbol.iterator](), O; !(I = (O = U.next()).done) && (S.push(O.value), !(c && S.length === c)); I = !0);
      } catch (F) {
        v = !0, x = F
      } finally {
        try {
          !I && U.return != null && U.return()
        } finally {
          if (v) throw x
        }
      }
      return S
    }
  }

  function y(o) {
    if (Array.isArray(o)) return o
  }
  var b = {
      protocols: ["http", "https", "ftp"],
      require_tld: !0,
      require_protocol: !1,
      require_host: !0,
      require_port: !1,
      require_valid_protocol: !0,
      allow_underscores: !1,
      allow_trailing_dot: !1,
      allow_protocol_relative_urls: !1,
      allow_fragments: !0,
      allow_query_components: !0,
      validate_length: !0
    },
    $ = /^\[([^\]]+)\](?::([0-9]+))?$/;

  function g(o) {
    return Object.prototype.toString.call(o) === "[object RegExp]"
  }

  function P(o, c) {
    for (var S = 0; S < c.length; S++) {
      var I = c[S];
      if (o === I || g(I) && I.test(o)) return !0
    }
    return !1
  }

  function V(o, c) {
    if ((0, t.default)(o), !o || /[\s<>]/.test(o) || o.indexOf("mailto:") === 0 || (c = (0, n.default)(c, b), c.validate_length && o.length >= 2083) || !c.allow_fragments && o.includes("#") || !c.allow_query_components && (o.includes("?") || o.includes("&"))) return !1;
    var S, I, v, x, U, O, F, B;
    if (F = o.split("#"), o = F.shift(), F = o.split("?"), o = F.shift(), F = o.split("://"), F.length > 1) {
      if (S = F.shift().toLowerCase(), c.require_valid_protocol && c.protocols.indexOf(S) === -1) return !1
    } else {
      if (c.require_protocol) return !1;
      if (o.slice(0, 2) === "//") {
        if (!c.allow_protocol_relative_urls) return !1;
        F[0] = o.slice(2)
      }
    }
    if (o = F.join("://"), o === "") return !1;
    if (F = o.split("/"), o = F.shift(), o === "" && !c.require_host) return !0;
    if (F = o.split("@"), F.length > 1) {
      if (c.disallow_auth || F[0] === "" || (I = F.shift(), I.indexOf(":") >= 0 && I.split(":").length > 2)) return !1;
      var G = I.split(":"),
        ee = a(G, 2),
        ie = ee[0],
        ue = ee[1];
      if (ie === "" && ue === "") return !1
    }
    x = F.join("@"), O = null, B = null;
    var H = x.match($);
    if (H ? (v = "", B = H[1], O = H[2] || null) : (F = x.split(":"), v = F.shift(), F.length && (O = F.join(":"))), O !== null && O.length > 0) {
      if (U = parseInt(O, 10), !/^[0-9]+$/.test(O) || U <= 0 || U > 65535) return !1
    } else if (c.require_port) return !1;
    return c.host_whitelist ? P(v, c.host_whitelist) : v === "" && !c.require_host ? !0 : !(!(0, m.default)(v) && !(0, _.default)(v, c) && (!B || !(0, m.default)(B, 6)) || (v = v || B, c.host_blacklist && P(v, c.host_blacklist)))
  }
  p.exports = s.default, p.exports.default = s.default
})(be, be.exports);
var qt = be.exports;
const Dt = ze(qt);

function Kt(p, s) {
  return typeof p == "string" && Dt(p, s)
}
const Gt = {
    class: "memepad-new-progress"
  },
  zt = N({
    __name: "NewProgress",
    props: {
      step: {
        type: Number,
        required: !0
      },
      countSteps: {
        type: Number,
        required: !0
      }
    },
    setup(p) {
      return (s, t) => (d(), w("div", Gt, [f("div", {
        class: "track",
        style: ye({
          width: `${p.step/p.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  Wt = T(zt, [
    ["__scopeId", "data-v-44aaf1af"]
  ]),
  Jt = {
    class: "memepad-new-step-heading"
  },
  Qt = {
    class: "step"
  },
  Ht = {
    class: "label"
  },
  Zt = N({
    __name: "NewStepHeading",
    props: {
      step: {
        type: Number,
        required: !0
      }
    },
    setup(p) {
      const s = p,
        t = C(() => {
          switch (s.step) {
            case 1:
              return {
                step: "1", label: A("memepad.new.step_1.title")
              };
            case 2:
              return {
                step: "2", label: A("memepad.new.step_2.title")
              };
            case 3:
              return {
                step: "3", label: A("memepad.new.step_3.title")
              };
            case 4:
              return {
                step: "4", label: A("memepad.new.step_4.title")
              };
            default:
              throw s.step, we("Invalid step")
          }
        });
      return (_, m) => (d(), w("div", Jt, [f("div", Qt, E(e(t).step), 1), f("div", Ht, E(e(t).label), 1)]))
    }
  }),
  re = T(Zt, [
    ["__scopeId", "data-v-44eadcb9"]
  ]),
  Yt = {
    class: "memepad-new-form-avatar"
  },
  Xt = {
    class: "compose"
  },
  en = {
    key: 1,
    src: We,
    alt: "Plus icon"
  },
  tn = {
    class: "content"
  },
  nn = {
    class: "name"
  },
  an = {
    class: "disclaimer"
  },
  xe = 10,
  on = N({
    __name: "Avatar",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(p) {
      const s = K(p, "modelValue"),
        t = R(),
        _ = () => {
          var r;
          return (r = t.value) == null ? void 0 : r.triggerFileUpload()
        },
        m = R(),
        n = C(() => {
          if (s.value) return se(s.value)
        });
      return (r, a) => {
        var u;
        const i = Ue,
          h = Be;
        return d(), w("div", Yt, [f("div", Xt, [e(n) ? (d(), w("div", {
          key: 0,
          class: "image is-uploaded",
          style: ye({
            backgroundImage: `url(${e(n)})`
          })
        }, null, 4)) : (d(), w("div", {
          key: 1,
          class: "image wait-upload",
          onClick: a[0] || (a[0] = l => _())
        }, [((u = e(m)) == null ? void 0 : u.status) === e(me).UPLOADING ? (d(), M(i, {
          key: 0,
          type: e(Re).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (d(), w("img", en))])), f("div", tn, [f("div", nn, E(("t" in r ? r.t : e(A))("memepad.new.step_1.field_icon.label")), 1), f("div", an, E(("t" in r ? r.t : e(A))("memepad.new.step_1.field_icon.description", {
          maxUploadSize: String(xe)
        })), 1)]), s.value ? (d(), w("div", {
          key: 2,
          class: "delete",
          onClick: a[1] || (a[1] = l => s.value = void 0)
        }, a[4] || (a[4] = [f("img", {
          src: Ve,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))) : L("", !0)]), k(h, {
          ref_key: "fileUploaderRef",
          ref: t,
          "hide-ui": "",
          "max-file-size-mb": xe,
          accept: [e(W).JPEG, e(W).PNG, e(W).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 1,
            borderRadius: 999
          },
          "onUpdate:progress": a[2] || (a[2] = l => m.value = l),
          onUploaded: a[3] || (a[3] = l => s.value = l.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  sn = T(on, [
    ["__scopeId", "data-v-d13d4287"]
  ]),
  ln = ["for"],
  rn = {
    key: 0,
    class: "error-caption"
  },
  un = ["id", "placeholder"],
  cn = N({
    __name: "Textarea",
    props: J({
      errorCaption: {},
      isError: {
        type: Boolean,
        default: !1
      },
      maxLength: {},
      label: {},
      placeholder: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: J(["change", "input", "focus", "blur"], ["update:modelValue"]),
    setup(p, {
      emit: s
    }) {
      const t = p,
        _ = s,
        m = Je(),
        n = K(p, "modelValue"),
        r = R(),
        a = R(!1),
        i = () => {
          a.value = !0, _("focus", r.value)
        },
        h = () => {
          a.value = !1, _("blur", r.value)
        },
        u = C(() => {
          const b = [];
          return (t.isError || t.errorCaption) && b.push("is-error"), b
        });
      let l;
      return ke(n, () => {
        if (!r.value) return;
        r.value.style.height = "auto";
        const b = r.value.scrollHeight,
          $ = l !== void 0 ? b - l : 0;
        l = b, r.value.style.height = `${b}px`, $ !== 0 && Ze(() => window.document.body.scrollBy(0, $))
      }), (b, $) => {
        const g = wt;
        return d(), w("div", {
          class: Te(["kit-textarea", e(u)])
        }, [b.label ? (d(), w("label", {
          key: 0,
          for: e(m)
        }, [f("span", null, E(b.label), 1), b.errorCaption ? (d(), w("div", rn, [$[3] || ($[3] = f("img", {
          src: Qe,
          alt: "Warning icon"
        }, null, -1)), f("div", null, E(b.errorCaption), 1)])) : b.maxLength ? (d(), M(g, {
          key: 1,
          value: n.value,
          "max-length": b.maxLength
        }, null, 8, ["value", "max-length"])) : L("", !0)], 8, ln)) : L("", !0), Ne(f("textarea", {
          id: e(m),
          ref_key: "textareaRef",
          ref: r,
          "onUpdate:modelValue": $[0] || ($[0] = P => n.value = P),
          placeholder: b.placeholder,
          onChange: $[1] || ($[1] = P => b.$emit("change")),
          onInput: $[2] || ($[2] = P => b.$emit("input")),
          onFocus: i,
          onBlur: h
        }, null, 40, un), [
          [He, n.value]
        ])], 2)
      }
    }
  }),
  dn = T(cn, [
    ["__scopeId", "data-v-fbb8bb63"]
  ]);
var q = (p => (p.STRING = "STRING", p.TEXTAREA = "TEXTAREA", p))(q || {});
const pn = N({
    __name: "KitForm",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: J(["channel"], ["update:modelValue"]),
    setup(p, {
      emit: s
    }) {
      const t = s,
        _ = K(p, "modelValue"),
        m = l => {
          l._ctx || (l._ctx = {
            initialValue: l.value,
            errors: []
          })
        };
      ke(_, () => _.value.forEach(m), {
        immediate: !0
      });
      const n = () => {},
        r = l => l._ctx.errors = i(l),
        a = C(() => _.value.every(l => i(l).length === 0));
      ae(() => _.value.forEach(l => {
        l._ctx && l._ctx.errors.length > 0 && (l._ctx.errors = i(l))
      }));
      const i = l => {
          var b, $, g, P;
          const y = [];
          switch (l.type) {
            case q.STRING:
            case q.TEXTAREA: {
              if ((b = l.validators) != null && b.required && !l.value && y.push({
                  msg: "Required to continue",
                  isVisible: !0
                }), ($ = l.validators) != null && $.maxLength) {
                const V = l.validators.maxLength.value - l.value.length;
                V < 0 && y.push({
                  msg: `${V*-1} over`,
                  isVisible: !1
                })
              }
              if (l.type === q.STRING && ((g = l.validators) != null && g.url)) {
                const V = l.validators.url.includePrefix && ((P = l.props) != null && P.prefix) ? `${l.props.prefix}${l.value}` : l.value;
                Kt(V) || y.push({
                  msg: "Invalid URL",
                  isVisible: !0
                })
              }
              break
            }
            default:
              throw we("unknown type")
          }
          if (l.customValidator) {
            const V = l.customValidator(l.value);
            V && y.push({
              msg: V,
              isVisible: !0
            })
          }
          return y
        },
        h = l => {
          var b;
          const y = (b = l._ctx) == null ? void 0 : b.errors.find($ => $.isVisible);
          return y == null ? void 0 : y.msg
        },
        u = l => {
          var b;
          const y = (b = l._ctx) == null ? void 0 : b.errors.length;
          return y ? y > 0 : !1
        };
      return ae(() => t("channel", {
        isFormValid: a.value
      })), (l, y) => {
        const b = kt,
          $ = dn;
        return d(), w("form", {
          class: "kit-form",
          novalidate: "",
          onSubmit: y[0] || (y[0] = Ye(g => n(), ["prevent"]))
        }, [(d(!0), w(D, null, Z(_.value, g => {
          var P, V, o, c, S, I, v, x;
          return d(), w("div", {
            key: g.key,
            class: "field"
          }, [g.type === e(q).STRING ? (d(), M(b, $e({
            key: 0,
            modelValue: g.value,
            "onUpdate:modelValue": U => g.value = U,
            ref_for: !0
          }, g.props, {
            "error-caption": h(g),
            "is-error": u(g),
            "max-length": (V = (P = g.validators) == null ? void 0 : P.maxLength) == null ? void 0 : V.value,
            class: "input",
            onChange: U => r(g),
            onFocus: (o = g.eventHandlers) == null ? void 0 : o.onFocus,
            onBlur: (c = g.eventHandlers) == null ? void 0 : c.onBlur
          }), {
            label: j(() => [Pe(l.$slots, `${g.key}-label`, {}, void 0, !0)]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : L("", !0), g.type === e(q).TEXTAREA ? (d(), M($, $e({
            key: 1,
            modelValue: g.value,
            "onUpdate:modelValue": U => g.value = U,
            ref_for: !0
          }, g.props, {
            "error-caption": h(g),
            "is-error": u(g),
            "max-length": (I = (S = g.validators) == null ? void 0 : S.maxLength) == null ? void 0 : I.value,
            class: "textarea",
            onChange: U => r(g),
            onFocus: (v = g.eventHandlers) == null ? void 0 : v.onFocus,
            onBlur: (x = g.eventHandlers) == null ? void 0 : x.onBlur
          }), null, 16, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : L("", !0), Pe(l.$slots, `${g.key}-after`, {}, void 0, !0)])
        }), 128))], 32)
      }
    }
  }),
  Ke = T(pn, [
    ["__scopeId", "data-v-5c8581ee"]
  ]),
  mn = {
    class: "memepad-new-step-1"
  },
  _n = N({
    __name: "1",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(p, {
      emit: s
    }) {
      const _ = R({
          ...p.state.step1
        }),
        m = s,
        n = R([{
          key: "name",
          type: q.STRING,
          value: C({
            get: () => _.value.name ?? "",
            set: h => _.value.name = h ?? ""
          }),
          props: {
            label: A("memepad.new.step_1.field_name.label"),
            placeholder: A("memepad.new.step_1.field_name.placeholder")
          },
          validators: {
            required: {},
            maxLength: {
              value: 20
            }
          }
        }, {
          key: "ticker",
          type: q.STRING,
          value: C({
            get: () => _.value.ticker ?? "",
            set: h => _.value.ticker = h ?? ""
          }),
          props: {
            label: A("memepad.new.step_1.field_ticker.label"),
            placeholder: A("memepad.new.step_1.field_ticker.placeholder"),
            modifiers: [Xe.UPPERCASE]
          },
          validators: {
            required: {},
            maxLength: {
              value: 10
            }
          },
          customValidator: h => {
            if (!h.match(/^[A-Z0-9]+$/)) return A("memepad.new.step_1.field_ticker.custom_validator_error")
          }
        }, {
          key: "description",
          type: q.TEXTAREA,
          value: C({
            get: () => _.value.description ?? "",
            set: h => _.value.description = h ?? ""
          }),
          props: {
            label: A("memepad.new.step_1.field_description.label"),
            placeholder: A("memepad.new.step_1.field_description.placeholder")
          },
          validators: {
            required: {},
            maxLength: {
              value: 240
            }
          }
        }]),
        r = R(),
        a = C(() => {
          var h;
          return ((h = r.value) == null ? void 0 : h.isFormValid) && !!_.value.iconFileKey
        }),
        i = () => m("continue", _.value);
      return (h, u) => {
        const l = re,
          y = sn,
          b = Ke,
          $ = Y,
          g = le;
        return d(), w("div", mn, [k(l, {
          step: 1
        }), k(y, {
          modelValue: e(_).iconFileKey,
          "onUpdate:modelValue": u[0] || (u[0] = P => e(_).iconFileKey = P)
        }, null, 8, ["modelValue"]), k(b, {
          modelValue: e(n),
          "onUpdate:modelValue": u[1] || (u[1] = P => oe(n) ? n.value = P : null),
          onChannel: u[2] || (u[2] = P => r.value = P)
        }, null, 8, ["modelValue"]), k(g, null, {
          default: j(() => [k($, {
            label: ("t" in h ? h.t : e(A))("base.continue"),
            fill: "",
            disabled: !e(a),
            tertiary: "",
            size: e(Q).LARGE,
            onClick: i
          }, null, 8, ["label", "disabled", "size"])]),
          _: 1
        })])
      }
    }
  }),
  fn = T(_n, [
    ["__scopeId", "data-v-9573d404"]
  ]),
  vn = {
    class: "memepad-new-form-label"
  },
  gn = {
    class: "compose"
  },
  hn = {
    class: "title"
  },
  bn = {
    key: 0,
    class: "optional"
  },
  yn = N({
    __name: "NewFormLabel",
    props: {
      title: {
        type: String,
        required: !0
      },
      isOptional: {
        type: Boolean,
        default: !1
      },
      iconName: {
        type: String,
        default: void 0
      }
    },
    setup(p) {
      return (s, t) => {
        const _ = X;
        return d(), w("div", vn, [p.iconName ? (d(), M(_, {
          key: 0,
          name: p.iconName,
          class: "icon"
        }, null, 8, ["name"])) : L("", !0), f("div", gn, [f("span", hn, E(p.title), 1), p.isOptional ? (d(), w("span", bn, E(` ${("t"in s?s.t:e(A))("base.optional")}`), 1)) : L("", !0)])])
      }
    }
  }),
  Ge = T(yn, [
    ["__scopeId", "data-v-272f2d1c"]
  ]),
  wn = {
    class: "memepad-new-form-banner"
  },
  kn = {
    key: 1,
    class: "banner is-uploading"
  },
  Sn = {
    class: "description"
  },
  An = {
    class: "text"
  },
  Fn = {
    class: "description"
  },
  Me = 10,
  Pn = N({
    __name: "Banner",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(p) {
      const s = K(p, "modelValue"),
        t = R(),
        _ = () => {
          var r;
          return (r = t.value) == null ? void 0 : r.triggerFileUpload()
        },
        m = R(),
        n = C(() => {
          if (m.value && m.value.status === me.UPLOADING) return m.value.localUrl;
          if (s.value) return se(s.value)
        });
      return (r, a) => {
        var l;
        const i = Ge,
          h = Ue,
          u = Be;
        return d(), w("div", wn, [k(i, {
          title: ("t" in r ? r.t : e(A))("memepad.new.step_1.field_banner.label"),
          "is-optional": "",
          class: "heading"
        }, null, 8, ["title"]), s.value ? (d(), w("div", {
          key: 0,
          class: "banner is-uploaded",
          style: ye({
            backgroundImage: `url(${e(n)})`
          })
        }, [f("div", {
          class: "delete-btn",
          onClick: a[0] || (a[0] = y => s.value = void 0)
        }, a[4] || (a[4] = [f("img", {
          src: Ve,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((l = e(m)) == null ? void 0 : l.status) === e(me).UPLOADING ? (d(), w("div", kn, [k(h, {
          type: e(Re).LIGHT,
          size: 16
        }, null, 8, ["type"]), f("div", Sn, E(("t" in r ? r.t : e(A))("memepad.new.step_1.field_banner.uploading")), 1)])) : (d(), w("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: a[1] || (a[1] = y => _())
        }, [a[6] || (a[6] = f("img", {
          src: et,
          alt: "Add"
        }, null, -1)), f("div", An, [f("div", Fn, E(("t" in r ? r.t : e(A))("memepad.new.step_1.field_banner.description", {
          maxUploadSize: String(Me)
        })), 1), a[5] || (a[5] = f("div", {
          class: "ratio"
        }, "361 × 119", -1))])])), k(u, {
          ref_key: "fileUploaderRef",
          ref: t,
          "hide-ui": "",
          "max-file-size-mb": Me,
          accept: [e(W).JPEG, e(W).PNG, e(W).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 361 / 119,
            borderRadius: 8
          },
          "onUpdate:progress": a[2] || (a[2] = y => m.value = y),
          onUploaded: a[3] || (a[3] = y => s.value = y.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  $n = T(Pn, [
    ["__scopeId", "data-v-327e2cf8"]
  ]),
  In = {
    class: "memepad-new-form-social-links-item"
  },
  En = N({
    __name: "SocialLinksItem",
    props: J({
      meta: {
        type: Object,
        required: !0
      },
      optional: {
        type: Boolean,
        required: !0
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: J(["isValid", "delete"], ["update:modelValue"]),
    setup(p, {
      emit: s
    }) {
      const t = p,
        _ = s,
        m = K(p, "modelValue"),
        n = R([{
          type: q.STRING,
          key: t.meta.apiKey,
          value: C({
            get: () => m.value ?? "",
            set: a => m.value = a || void 0
          }),
          props: {
            placeholder: t.meta.placeholder,
            size: tt.COMPACT
          },
          validators: t.meta.skipUrlValidation ? {} : {
            url: {}
          }
        }]),
        r = R();
      return ae(() => {
        var a;
        return _("isValid", ((a = r.value) == null ? void 0 : a.isFormValid) ?? !1)
      }), (a, i) => {
        const h = Ge,
          u = X,
          l = Ke;
        return d(), w("div", In, [k(l, {
          modelValue: e(n),
          "onUpdate:modelValue": i[1] || (i[1] = y => oe(n) ? n.value = y : null),
          onChannel: i[2] || (i[2] = y => r.value = y)
        }, nt({
          [`${p.meta.apiKey}-label`]: j(() => [k(h, {
            "icon-name": p.meta.icon,
            title: p.meta.display,
            "is-optional": ""
          }, null, 8, ["icon-name", "title"])]),
          _: 2
        }, [p.optional ? {
          name: `${p.meta.apiKey}-after`,
          fn: j(() => [f("button", {
            type: "button",
            class: "delete-button reset",
            onClick: i[0] || (i[0] = y => a.$emit("delete"))
          }, [k(u, {
            name: "trash",
            class: "icon"
          })])]),
          key: "0"
        } : void 0]), 1032, ["modelValue"])])
      }
    }
  }),
  xn = T(En, [
    ["__scopeId", "data-v-e8eb736f"]
  ]),
  Mn = {
    class: "memepad-new-form-social-links"
  },
  Rn = {
    class: "inputs"
  },
  Vn = {
    key: 0,
    class: "add-panel"
  },
  Un = {
    class: "providers"
  },
  Nn = N({
    __name: "SocialLinks",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: J(["isValid"], ["update:modelValue"]),
    setup(p, {
      emit: s
    }) {
      const t = St(),
        _ = K(p, "modelValue"),
        m = s,
        n = R([{
          provider: Ie.TELEGRAM,
          isValid: !1,
          optional: !1
        }]),
        r = C(() => Object.values(Ie).filter(h => !n.value.find(u => u.provider === h))),
        a = h => n.value.push({
          provider: h,
          isValid: !1,
          optional: !0
        }),
        i = h => {
          n.value.splice(h, 1)
        };
      return ae(() => {
        const h = n.value.every(u => u.isValid);
        m("isValid", h)
      }), (h, u) => {
        const l = xn,
          y = X;
        return d(), w("div", Mn, [f("div", Rn, [k(at, {
          name: "list-shuffle-transition"
        }, {
          default: j(() => [(d(!0), w(D, null, Z(e(n), (b, $) => (d(), M(l, {
            key: b.provider,
            modelValue: _.value[b.provider],
            "onUpdate:modelValue": g => _.value[b.provider] = g,
            meta: e(t)[b.provider],
            optional: b.optional,
            class: "provider-input",
            onIsValid: g => b.isValid = g,
            onDelete: g => i($)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "meta", "optional", "onIsValid", "onDelete"]))), 128))]),
          _: 1
        })]), k(ot, {
          name: "appear-from-right-transition"
        }, {
          default: j(() => [e(r).length > 0 ? (d(), w("div", Vn, [k(y, {
            name: "plus",
            class: "plus-icon"
          }), f("div", Un, [(d(!0), w(D, null, Z(e(r), b => (d(), w("div", {
            key: b,
            class: "provider"
          }, [k(y, {
            name: e(t)[b].icon,
            class: "provider-icon",
            onClick: $ => a(b)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : L("", !0)]),
          _: 1
        })])
      }
    }
  }),
  Tn = T(Nn, [
    ["__scopeId", "data-v-5d3fea7d"]
  ]),
  Cn = {
    class: "kit-switch"
  },
  Ln = N({
    __name: "Switch",
    props: {
      modelValue: {
        type: Boolean
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(p) {
      const s = K(p, "modelValue");
      return (t, _) => (d(), w("div", Cn, [Ne(f("input", {
        "onUpdate:modelValue": _[0] || (_[0] = m => s.value = m),
        type: "checkbox"
      }, null, 512), [
        [st, s.value]
      ])]))
    }
  }),
  jn = T(Ln, [
    ["__scopeId", "data-v-e0ffb56d"]
  ]),
  On = "data:image/webp;base64,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",
  Bn = {
    class: "memepad-new-form-nsfw"
  },
  qn = {
    class: "setting"
  },
  Dn = {
    class: "label"
  },
  Kn = N({
    __name: "NSFW",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(p) {
      const s = K(p, "modelValue");
      return (t, _) => {
        const m = jn,
          n = Pt;
        return d(), w("div", Bn, [f("div", qn, [f("div", Dn, E(("t" in t ? t.t : e(A))("memepad.new.step_1.field_nsfw.label")), 1), k(m, {
          modelValue: s.value,
          "onUpdate:modelValue": _[0] || (_[0] = r => s.value = r)
        }, null, 8, ["modelValue"])]), k(n, {
          text: ("t" in t ? t.t : e(A))("memepad.new.step_1.field_nsfw.message"),
          image: e(On),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }),
  Gn = T(Kn, [
    ["__scopeId", "data-v-cf4bf4c7"]
  ]),
  zn = {
    class: "memepad-new-step-2"
  },
  Wn = N({
    __name: "2",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(p, {
      emit: s
    }) {
      const t = p,
        _ = s,
        m = R(!1),
        n = R({
          ...t.state.step2
        }),
        r = () => _("continue", n.value);
      return (a, i) => {
        const h = re,
          u = $n,
          l = Tn,
          y = Gn,
          b = Y,
          $ = le;
        return d(), w("div", zn, [k(h, {
          step: 2
        }), k(u, {
          modelValue: e(n).bannerFileKey,
          "onUpdate:modelValue": i[0] || (i[0] = g => e(n).bannerFileKey = g)
        }, null, 8, ["modelValue"]), k(l, {
          modelValue: e(n).socialProviders,
          "onUpdate:modelValue": i[1] || (i[1] = g => e(n).socialProviders = g),
          onIsValid: i[2] || (i[2] = g => m.value = g)
        }, null, 8, ["modelValue"]), k(y, {
          modelValue: e(n).isNSFW,
          "onUpdate:modelValue": i[3] || (i[3] = g => e(n).isNSFW = g)
        }, null, 8, ["modelValue"]), k($, null, {
          default: j(() => [k(b, {
            label: ("t" in a ? a.t : e(A))("base.continue"),
            fill: "",
            tertiary: "",
            size: e(Q).LARGE,
            disabled: !e(m),
            onClick: r
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  Jn = T(Wn, [
    ["__scopeId", "data-v-2e24fde9"]
  ]),
  Qn = {
    class: "header"
  },
  Hn = {
    class: "content"
  },
  Zn = {
    class: "subtitle"
  },
  Yn = {
    key: 0
  },
  Xn = {
    class: "controls"
  },
  ea = {
    key: 0,
    class: "info"
  },
  ta = {
    class: "label"
  },
  na = N({
    __name: "3",
    props: {
      state: {},
      jettonManagement: {}
    },
    emits: ["continue", "update"],
    setup(p, {
      emit: s
    }) {
      const t = p,
        _ = s,
        m = R(),
        n = R(t.state.step3.overview ? {
          status: "loaded",
          share: t.state.step3.share ?? 0,
          overview: t.state.step3.overview
        } : {
          status: "idle",
          share: t.state.step3.share ?? 0
        }),
        r = v => it(v, {
          join: "emptyFractional"
        }),
        a = v => new z(v.replaceAll(",", "") || "0").toNumber(),
        i = C({
          get: () => String(n.value.share),
          set: v => {
            n.value.share = a(v)
          }
        }),
        h = C({
          get: () => String(n.value.share),
          set: v => {
            n.value.share = a(r(v))
          }
        }),
        u = Ce(),
        l = Se(),
        y = () => Le().success(A("memepad.jetton.new.error_alert"));
      l.onConnectError(y);
      const b = R(!1),
        $ = C(() => {
          var v;
          return {
            jettonBalance: te(new z(0), t.state.step1.ticker),
            tonBalance: u.wallet.value.status === "connected" ? (v = u.wallet.value.balance) == null ? void 0 : v.tonBalance.balance : void 0
          }
        }),
        g = C(() => {
          if (n.value.status === "loading") return;
          if (!n.value.overview) {
            if (new z(n.value.share).isZero()) {
              const x = te(new z(0), t.state.step1.ticker);
              return A("memepad.new.step_3.subtitle", {
                jettonsAmountWithSymbol: x.frontendWithSymbol,
                percentAmount: "0"
              })
            }
            return
          }
          const v = te(new z(n.value.overview.minReceive), t.state.step1.ticker);
          return n.value.overview ? A("memepad.new.step_3.subtitle", {
            jettonsAmountWithSymbol: v.frontendWithSymbol,
            percentAmount: lt(n.value.overview.jettonReceivePercent)
          }) : v.frontendWithSymbol
        }),
        P = C(() => {
          var F;
          const v = (() => {
              var G;
              const B = u.wallet.value.status === "connected" ? (G = u.wallet.value.balance) == null ? void 0 : G.tonBalance.balance.value : void 0;
              return {
                value: B,
                label: B ? te(B, "TON").frontendWithSymbol : void 0
              }
            })(),
            x = {
              value: t.jettonManagement.fees.buyNetworkFee,
              label: `${A("memepad.jetton.fees_base")}: ${de(t.jettonManagement.fees.buyNetworkFee)} TON`,
              details: [{
                label: `${A("memepad.jetton.fees_network")}: ${de(t.jettonManagement.fees.buyNetworkFee)} TON`
              }, ...n.value.overview ? [{
                label: `${A("memepad.jetton.fees_platform")}: ${de((F=n.value.overview)==null?void 0:F.platformFee)} TON`
              }] : []]
            },
            U = (() => {
              if (!v.value) return;
              const B = x.value.plus(n.value.share);
              return v.value.gte(B)
            })(),
            O = U !== !1 ? void 0 : A("memepad.jetton.not_enough_error", {
              ticker: "TON"
            });
          return {
            tonBalance: v,
            showInfo: v.value !== void 0,
            fees: x,
            isEnoughTon: U !== !1,
            errorMessage: O,
            loading: n.value.status === "loading" || b.value
          }
        }),
        V = () => {
          var v;
          (v = m.value) == null || v.focusOnInput()
        },
        o = () => {
          P.value.errorMessage || S()
        },
        c = async () => {
          if (P.value.errorMessage) return;
          const v = new z(n.value.share),
            x = await t.jettonManagement.getJettonOverview(v.toNumber());
          v.eq(n.value.share) && ne(x) && (n.value = {
            status: "loaded",
            share: v.toNumber(),
            overview: x.data
          }, _("update", {
            share: v.toNumber(),
            overview: ne(x) ? x.data : void 0
          }))
        }, S = async () => {
          if (n.value.status === "loaded") return _("continue", {
            share: +n.value.share,
            overview: n.value.overview
          });
          b.value = !0;
          const v = await t.jettonManagement.getJettonOverview(n.value.share);
          ne(v) ? _("continue", {
            share: +n.value.share,
            overview: v.data
          }) : y(), b.value = !1
        }, {
          debouncedFunction: I
        } = ut(c, 400);
      return ke(() => n.value.share, () => {
        n.value.status = "loading", I()
      }), (v, x) => {
        const U = re,
          O = $t,
          F = Ut,
          B = It,
          G = Et,
          ee = qe,
          ie = Y,
          ue = xt,
          H = Mt;
        return d(), M(H, {
          class: "memepad-new-step-3"
        }, {
          top: j(() => [f("div", Qn, [k(U, {
            step: 3
          })])]),
          default: j(() => [f("div", Hn, [k(O, {
            ref_key: "actionControlsInputComp",
            ref: m,
            modelValue: e(i),
            "onUpdate:modelValue": x[0] || (x[0] = ce => oe(i) ? i.value = ce : null),
            postfix: "TON",
            modifier: r,
            onBlur: V
          }, null, 8, ["modelValue"]), f("div", Zn, [e(g) ? (d(), w("span", Yn, E(e(g)), 1)) : e(g) === void 0 ? (d(), M(F, {
            key: 1,
            class: "skeleton"
          })) : L("", !0)])])]),
          "bottom-action": j(() => [f("div", Xn, [e(P).showInfo ? (d(), w("div", ea, [e(P).tonBalance.label && !e(P).loading ? (d(), M(B, {
            key: 0,
            balance: e(P).tonBalance.label
          }, null, 8, ["balance"])) : (d(), M(F, {
            key: 1,
            class: "skeleton"
          })), e(P).loading ? (d(), M(F, {
            key: 3,
            class: "skeleton"
          })) : (d(), M(G, {
            key: 2,
            details: e(P).fees.details,
            "total-label": e(P).fees.label,
            "error-message": e(P).errorMessage
          }, null, 8, ["details", "total-label", "error-message"]))])) : L("", !0), e(P).isEnoughTon ? (d(), M(ie, {
            key: 2,
            fill: "",
            size: e(Q).LARGE,
            loading: e(P).loading,
            onClick: o
          }, {
            default: j(() => [f("div", ta, E(("t" in v ? v.t : e(A))("memepad.new.step_3.next_btn")), 1)]),
            _: 1
          }, 8, ["size", "loading"])) : (d(), M(ee, {
            key: 1
          }))])]),
          "bottom-helpers": j(() => [k(ue, {
            modelValue: e(h),
            "onUpdate:modelValue": x[1] || (x[1] = ce => oe(h) ? h.value = ce : null),
            tab: e(rt).BUY,
            balances: e($)
          }, null, 8, ["modelValue", "tab", "balances"])]),
          _: 1
        })
      }
    }
  }),
  aa = T(na, [
    ["__scopeId", "data-v-1fb6c898"]
  ]),
  oa = {
    class: "memepad-jetton-logo-ticker"
  },
  sa = ["src"],
  la = {
    class: "ticker-name-compose"
  },
  ra = {
    class: "ticker"
  },
  ia = {
    class: "name"
  },
  ua = N({
    __name: "LogoTicker",
    props: {
      logoFileKey: {},
      ticker: {},
      name: {}
    },
    setup(p) {
      return (s, t) => (d(), w("div", oa, [f("img", {
        src: e(se)(s.logoFileKey),
        alt: "Jetton logo"
      }, null, 8, sa), f("div", la, [f("div", ra, E(s.ticker), 1), f("div", ia, E(s.name), 1)])]))
    }
  }),
  ca = T(ua, [
    ["__scopeId", "data-v-39dff782"]
  ]),
  da = {
    class: "memepad-new-price-details"
  },
  pa = {
    class: "key"
  },
  ma = {
    class: "value"
  },
  _a = {
    class: "fee-details"
  },
  fa = {
    class: "label"
  },
  va = {
    class: "row total"
  },
  ga = {
    class: "key"
  },
  ha = {
    key: 0,
    class: "not-enough-balance"
  },
  ba = {
    class: "label"
  },
  ya = {
    key: 1,
    class: "value"
  },
  wa = {
    class: "label"
  },
  ka = N({
    __name: "NewPriceDetails",
    props: {
      withShare: {
        type: Boolean
      },
      details: {},
      notEnoughBalance: {
        type: Boolean
      }
    },
    setup(p) {
      return (s, t) => {
        const _ = X,
          m = Nt;
        return d(), w("div", da, [(d(!0), w(D, null, Z(s.details.sections, n => (d(), w("div", {
          key: n.title,
          class: "row"
        }, [f("div", pa, E(n.title), 1), f("div", ma, [k(m, null, {
          default: j(() => [k(_, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: j(() => [f("div", _a, [(d(!0), w(D, null, Z(n.details, r => (d(), w("span", {
            key: r.label,
            class: Te({
              highlighted: r.highlight
            })
          }, E(r.label), 3))), 128))])]),
          _: 2
        }, 1024), f("span", fa, E(n.label), 1)])]))), 128)), s.details.totalSection ? (d(), w(D, {
          key: 0
        }, [t[0] || (t[0] = f("div", {
          class: "divider"
        }, null, -1)), f("div", va, [f("div", ga, E(s.details.totalSection.title), 1), s.notEnoughBalance ? (d(), w("div", ha, [k(_, {
          name: "circle-help",
          class: "icon"
        }), f("span", ba, E(("t" in s ? s.t : e(A))("memepad.jetton.not_enough_error", {
          ticker: "TON"
        })), 1)])) : (d(), w("div", ya, [f("span", wa, E(s.details.totalSection.label), 1)]))])], 64)) : L("", !0)])
      }
    }
  }),
  Sa = T(ka, [
    ["__scopeId", "data-v-cd02a0d6"]
  ]),
  Aa = {
    class: "memepad-new-step-overview"
  },
  Fa = {
    class: "button-wrapper"
  },
  Pa = N({
    __name: "Overview",
    props: {
      form: {},
      tonUsdRate: {},
      launchCallback: {
        type: Function
      },
      jettonManagement: {}
    },
    emits: ["continue"],
    setup(p, {
      emit: s
    }) {
      const t = p,
        _ = s,
        m = Ce(),
        n = Se(),
        r = () => Le().success(A("memepad.jetton.new.error_alert"));
      n.onConnectError(r);
      const a = C(() => {
          const y = t.tonUsdRate && t.form.overview.marketCapTon.mul(t.tonUsdRate),
            b = t.tonUsdRate && t.form.overview.priceTon.mul(t.tonUsdRate);
          return {
            percent: t.form.overview.tonCollectedPercent,
            collected: t.form.overview.tonCollected,
            total: t.form.overview.tonForDex,
            marketDetails: {
              marketCap: y,
              listRows: {
                price: b,
                availableSupply: t.form.overview.availableSupply,
                maxSupply: t.form.overview.maxSupply
              }
            }
          }
        }),
        i = C(() => t.jettonManagement.getPriceDetails(t.form.overview)),
        h = C(() => {
          var b;
          const y = m.wallet.value.status === "connected" ? (b = m.wallet.value.balance) == null ? void 0 : b.tonBalance : void 0;
          if (y) return y.balance.value.gte(i.value.total)
        }),
        u = R(!1),
        l = async () => {
          if (!h.value || u.value) return;
          u.value = !0, await t.launchCallback(t.form) ? _("continue") : r(), u.value = !1
        };
      return (y, b) => {
        const $ = re,
          g = ca,
          P = At,
          V = Rt,
          o = Sa,
          c = qe,
          S = Y,
          I = Vt,
          v = le;
        return d(), w("div", Aa, [k($, {
          step: 4,
          class: "heading"
        }), k(g, {
          "logo-file-key": y.form.iconFileKey,
          ticker: y.form.ticker,
          name: y.form.name,
          class: "logo-ticker"
        }, null, 8, ["logo-file-key", "ticker", "name"]), k(P, {
          "banner-file-key": y.form.bannerFileKey,
          class: "banner"
        }, null, 8, ["banner-file-key"]), k(V, ct(dt(e(a))), null, 16), k(v, null, {
          default: j(() => [k(o, {
            "with-share": !!y.form.share,
            details: e(i),
            "not-enough-balance": e(h) === !1
          }, null, 8, ["with-share", "details", "not-enough-balance"]), f("div", Fa, [k(I, null, {
            default: j(() => [e(h) ? (d(), M(S, {
              key: 1,
              label: ("t" in y ? y.t : e(A))("memepad.new.step_4.launch_btn"),
              fill: "",
              size: e(Q).LARGE,
              type: e(pt).DROP,
              onClick: l
            }, null, 8, ["label", "size", "type"])) : (d(), M(c, {
              key: 0
            }))]),
            _: 1
          })])]),
          _: 1
        })])
      }
    }
  }),
  $a = T(Pa, [
    ["__scopeId", "data-v-c3aa5e11"]
  ]),
  Ia = {
    class: "memepad-new-step-launch"
  },
  Ea = {
    class: "inner"
  },
  xa = {
    class: "icon-wrapper"
  },
  Ma = {
    class: "error-icon"
  },
  Ra = {
    class: "title"
  },
  Va = {
    class: "subtitle"
  },
  Ua = {
    class: "inner"
  },
  Na = {
    class: "icon-wrapper"
  },
  Ta = ["src"],
  Ca = {
    class: "title"
  },
  La = {
    class: "label"
  },
  ja = {
    class: "subtitle"
  },
  Oa = {
    key: 0,
    class: "rocket-wrapper"
  },
  Ba = {
    class: "footer"
  },
  qa = {
    class: "arena-banner"
  },
  Da = {
    class: "title"
  },
  Ka = {
    class: "subtitle"
  },
  Ga = 3e3,
  za = N({
    __name: "Launch",
    props: {
      form: {},
      retryCallback: {
        type: Function
      }
    },
    setup(p, {
      expose: s
    }) {
      const t = _e(),
        _ = Ae();
      _.memepad.memepadCabalArenaBannerShow();
      const m = R("LOADING"),
        n = [],
        r = () => new Promise(u => {
          m.value = "ROCKET", n.push(setTimeout(() => {
            u(void 0)
          }, Ga))
        }),
        a = () => {
          m.value = "ERROR"
        },
        i = () => {
          n.forEach(clearTimeout), m.value = "LOADING"
        },
        h = () => {
          _.memepad.memepadCabalArenaBannerClick(), ft().$webApp.openLink("https://www.cabal-arena.fun/")
        };
      return mt(() => {
        i()
      }), s({
        runSuccess: r,
        runError: a
      }), (u, l) => {
        const y = Tt,
          b = X,
          $ = Y,
          g = le,
          P = vt;
        return d(), w("div", Ia, [k(y), e(m) === "ERROR" ? (d(), w(D, {
          key: 0
        }, [f("div", Ea, [f("div", xa, [f("div", Ma, [k(b, {
          name: "warning",
          class: "icon"
        })])]), f("div", Ra, E(("t" in u ? u.t : e(A))("memepad.new.failed.title", {
          ticker: u.form.ticker
        })), 1), f("div", Va, E(("t" in u ? u.t : e(A))("memepad.new.failed.subtitle")), 1)]), k(g, null, {
          default: j(() => [k($, {
            fill: "",
            label: ("t" in u ? u.t : e(A))("memepad.new.retry_btn_label"),
            size: e(Q).LARGE,
            onClick: l[0] || (l[0] = V => u.retryCallback(u.form))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64)) : (d(), w(D, {
          key: 1
        }, [f("div", Ua, [f("div", Na, [f("img", {
          src: e(se)(u.form.iconFileKey),
          alt: "Jetton logo",
          width: "80",
          height: "80"
        }, null, 8, Ta)]), f("div", Ca, [l[2] || (l[2] = f("div", {
          class: "dot"
        }, null, -1)), f("div", La, E(("t" in u ? u.t : e(A))("memepad.new.step_launch.title")), 1)]), f("div", ja, E(("t" in u ? u.t : e(A))("memepad.new.step_launch.subtitle")), 1)]), e(m) === "ROCKET" ? (d(), w("div", Oa, [k(P, {
          name: "animations/Rocket",
          size: 348
        })])) : L("", !0), k(g, null, {
          default: j(() => [f("div", Ba, [f("div", qa, [f("div", Da, E(("t" in u ? u.t : e(A))("cabal_arena_banner.title")), 1), f("div", Ka, E(("t" in u ? u.t : e(A))("cabal_arena_banner.subtitle")), 1), f("button", {
            type: "button",
            class: "reset",
            onClick: h
          }, E(("t" in u ? u.t : e(A))("cabal_arena_banner.btn_label")), 1), l[3] || (l[3] = f("img", {
            src: _t
          }, null, -1))]), k($, {
            fill: "",
            label: ("t" in u ? u.t : e(A))("base.got_it"),
            size: e(Q).LARGE,
            onClick: l[1] || (l[1] = V => e(t).push({
              name: "memepad"
            }))
          }, null, 8, ["label", "size"])])]),
          _: 1
        })], 64))])
      }
    }
  }),
  Wa = T(za, [
    ["__scopeId", "data-v-a99c5bb8"]
  ]),
  Ja = {
    class: "memepad-new"
  },
  Qa = N({
    __name: "New",
    props: {
      tonUsdRate: {},
      retryPayload: {},
      jettonManagement: {}
    },
    setup(p) {
      const s = p,
        t = Ae(),
        _ = _e(),
        m = je(),
        n = Se(),
        r = R();
      Oe().getReferralToken();
      const a = s.jettonManagement.getWaitForCreateStatus(),
        i = R(s.retryPayload ? Ft(s.retryPayload) : {
          step: 1,
          step1: pe.step1(),
          step2: pe.step2(),
          step3: pe.step3()
        });
      (() => {
        s.retryPayload ? t.memepad.memepadJettonRetry() : t.memepad.memepadJettonStepInfo()
      })();
      const u = (o, c) => {
          const S = {
            step: 2,
            step1: c,
            step2: o.step2,
            step3: o.step3
          };
          i.value = S, t.memepad.memepadJettonStepPersonalise()
        },
        l = (o, c) => {
          const S = {
            step: 3,
            step1: o.step1,
            step2: c,
            step3: o.step3
          };
          i.value = S, t.memepad.memepadJettonStepShare()
        },
        y = (o, c) => {
          const S = {
            step: 4,
            step1: o.step1,
            step2: o.step2,
            step3: c
          };
          i.value = S, t.memepad.memepadJettonStepOverview()
        },
        b = (o, c) => {
          i.value = {
            ...o,
            step3: c
          }
        },
        $ = o => {
          const c = {
            step: 5,
            step1: o.step1,
            step2: o.step2,
            step3: o.step3
          };
          i.value = c
        };
      Ct(() => {
        const o = i.value;
        switch (o.step) {
          case 1:
            _e().push({
              name: "memepad"
            });
            break;
          case 2:
            i.value = {
              ...o,
              step: 1
            };
            break;
          case 3:
          case 4:
            i.value = {
              ...o,
              step: o.step - 1
            };
            break;
          case 5:
            return;
          default:
            throw we("Invalid step")
        }
      });
      let g = [];
      const P = o => {
          g.push({
            payload: o
          }), g = g.slice(-3), g.length === 3 && g.every(S => JSON.stringify(S.payload) === JSON.stringify(g[0].payload)) && n.disconnect()
        },
        V = async o => {
          const c = await s.jettonManagement.createJetton(o);
          return ne(c) ? ((async () => {
            const {
              launchTransactionHash: S,
              queryId: I
            } = c.data;
            t.memepad.memepadJettonStartLaunch({
              jettonId: I
            }), await ht(3e4);
            const v = await a.exec({
              launchTransactionHash: S,
              queryId: I
            });
            v ? t.memepad.memepadJettonEndLaunch({
              status: "success",
              purchaseAmount: o.share,
              jettonAddress: v.address,
              jettonShortname: v.shortname,
              jettonId: I
            }) : t.memepad.memepadJettonEndLaunch({
              status: "failed",
              purchaseAmount: o.share
            }), r.value ? v ? (await r.value.runSuccess(), await _.push({
              name: "memepad-jetton-shortname",
              params: {
                shortname: v.shortname
              }
            })) : r.value.runError() : (v ? t.memepad.memepadJettonLaunchShowNotification({
              status: "success",
              jettonAddress: v.address,
              jettonShortname: v.shortname,
              jettonId: I
            }) : t.memepad.memepadJettonLaunchShowNotification({
              status: "failed"
            }), bt().name !== "game" && (v ? m.showSuccessSheet(o, v.shortname) : m.showErrorSheet(o)))
          })(), !0) : (c.extra && c.extra instanceof Error && c.extra instanceof gt && t.memepad.memepadJettonLaunchWalletUiError(), P(o), !1)
        };
      return (o, c) => {
        const S = Wt,
          I = fn,
          v = Jn,
          x = aa,
          U = $a,
          O = Wa;
        return d(), w("div", Ja, [e(i).step !== 5 ? (d(), M(S, {
          key: 0,
          step: e(i).step,
          "count-steps": 4
        }, null, 8, ["step"])) : L("", !0), e(i).step === 1 ? (d(), M(I, {
          key: 1,
          state: e(i),
          onContinue: c[0] || (c[0] = F => u(e(i), F))
        }, null, 8, ["state"])) : L("", !0), e(i).step === 2 ? (d(), M(v, {
          key: 2,
          state: e(i),
          onContinue: c[1] || (c[1] = F => l(e(i), F))
        }, null, 8, ["state"])) : L("", !0), e(i).step === 3 ? (d(), M(x, {
          key: 3,
          state: e(i),
          "jetton-management": s.jettonManagement,
          onContinue: c[2] || (c[2] = F => y(e(i), F)),
          onUpdate: c[3] || (c[3] = F => b(e(i), F))
        }, null, 8, ["state", "jetton-management"])) : L("", !0), e(i).step === 4 ? (d(), M(U, {
          key: 4,
          form: e(Ee)(e(i)),
          "jetton-management": s.jettonManagement,
          "ton-usd-rate": o.tonUsdRate,
          "launch-callback": V,
          onContinue: c[4] || (c[4] = F => $(e(i)))
        }, null, 8, ["form", "jetton-management", "ton-usd-rate"])) : L("", !0), e(i).step === 5 ? (d(), M(O, {
          key: 5,
          ref_key: "stepLaunchApi",
          ref: r,
          form: e(Ee)(e(i)),
          "retry-callback": e(m).retry
        }, null, 8, ["form", "retry-callback"])) : L("", !0)])
      }
    }
  }),
  Ha = T(Qa, [
    ["__scopeId", "data-v-770637c9"]
  ]),
  Za = {
    class: "memepad-new-page page"
  },
  Ya = N({
    __name: "new",
    setup(p) {
      const {
        popRetryPayload: s
      } = je(), {
        memepadManagementSdk: t
      } = jt(), {
        tonUsdRate: _
      } = yt(), m = Ae();
      return (() => {
        Oe().getReferralToken(), m.memepad.memepadJettonStart()
      })(), (r, a) => {
        const i = Ha,
          h = Lt;
        return d(), w("div", Za, [e(t) ? (d(), M(i, {
          key: 0,
          "ton-usd-rate": e(_),
          "retry-payload": e(s)(),
          "jetton-management": e(t)
        }, null, 8, ["ton-usd-rate", "retry-payload", "jetton-management"])) : (d(), M(h, {
          key: 1
        }))])
      }
    }
  }),
  vo = T(Ya, [
    ["__scopeId", "data-v-6f2f78f8"]
  ]);
export {
  vo as
  default
};