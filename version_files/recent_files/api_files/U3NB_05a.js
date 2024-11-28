import {
  bO as ze,
  d as U,
  a as c,
  c as k,
  b as _,
  aL as we,
  j as N,
  F as j,
  L as ke,
  f as A,
  t as E,
  e as t,
  aA as D,
  r as R,
  a_ as oe,
  bP as me,
  m as M,
  a4 as xe,
  bQ as Me,
  g as C,
  k as S,
  bR as H,
  bS as Je,
  a7 as Re,
  az as G,
  au as Qe,
  av as Se,
  bT as He,
  w as Ue,
  bU as Ze,
  n as Ne,
  b8 as _e,
  bV as ne,
  W as K,
  X as Z,
  x as L,
  aC as Fe,
  ap as Ie,
  bW as Ye,
  bX as Xe,
  V as ae,
  B as z,
  C as Y,
  N as X,
  bY as et,
  bZ as tt,
  bv as nt,
  bl as Pe,
  b1 as at,
  ak as ot,
  b_ as st,
  ao as Te,
  ba as Ce,
  af as Q,
  an as ce,
  b$ as lt,
  aZ as de,
  bK as rt,
  ai as it,
  G as Le,
  be as te,
  am as ut,
  bn as ct,
  c0 as dt,
  Y as pt,
  J as fe,
  o as mt,
  c1 as _t,
  P as ft,
  A as vt,
  ab as je,
  c2 as Oe,
  bp as qe,
  c3 as gt,
  b9 as ht,
  ay as bt
} from "./yAg4xOB2.js";
import {
  K as Be
} from "./D3r1eJp4.js";
import {
  _ as yt,
  a as wt
} from "./BCVfJxrz.js";
import {
  _ as se
} from "./DykT_tw6.js";
import {
  j as kt,
  e as St,
  _ as At,
  a as Ft,
  b as Ke,
  f as It,
  g as Pt,
  d as $t,
  i as Et,
  c as Vt,
  r as xt,
  k as pe,
  l as $e
} from "./BtTxGTXe.js";
import {
  _ as Mt
} from "./Bec9moYc.js";
import {
  _ as Rt
} from "./DYMhC8NL.js";
import {
  _ as Ut
} from "./Dp1r_Riy.js";
import {
  _ as Nt
} from "./DoNBLfm7.js";
import {
  u as Tt
} from "./s-w9LWF2.js";
import {
  _ as Ct
} from "./49ku45_B.js";
import {
  u as Lt
} from "./CdxfbMtV.js";
import "./Cv8r32Zn.js";
import "./BZiVAhmd.js";
var ve = {
  exports: {}
};
(function(d, o) {
  Object.defineProperty(o, "__esModule", {
    value: !0
  }), o.default = u;

  function a(m) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? a = function(n) {
      return typeof n
    } : a = function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, a(m)
  }

  function u(m) {
    var i = typeof m == "string" || m instanceof String;
    if (!i) {
      var n = a(m);
      throw m === null ? n = "null" : n === "object" && (n = m.constructor.name), new TypeError("Expected a string but received a ".concat(n))
    }
  }
  d.exports = o.default, d.exports.default = o.default
})(ve, ve.exports);
var Ae = ve.exports,
  ge = {
    exports: {}
  };
(function(d, o) {
  Object.defineProperty(o, "__esModule", {
    value: !0
  }), o.default = a;

  function a() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      m = arguments.length > 1 ? arguments[1] : void 0;
    for (var i in m) typeof u[i] > "u" && (u[i] = m[i]);
    return u
  }
  d.exports = o.default, d.exports.default = o.default
})(ge, ge.exports);
var De = ge.exports,
  he = {
    exports: {}
  };
(function(d, o) {
  Object.defineProperty(o, "__esModule", {
    value: !0
  }), o.default = n;
  var a = m(Ae),
    u = m(De);

  function m(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var i = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1
  };

  function n(e, y) {
    (0, a.default)(e), y = (0, u.default)(y, i), y.allow_trailing_dot && e[e.length - 1] === "." && (e = e.substring(0, e.length - 1)), y.allow_wildcard === !0 && e.indexOf("*.") === 0 && (e = e.substring(2));
    var s = e.split("."),
      f = s[s.length - 1];
    return y.require_tld && (s.length < 2 || !y.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(f) || /\s/.test(f)) || !y.allow_numeric_tld && /^\d+$/.test(f) ? !1 : s.every(function(r) {
      return !(r.length > 63 && !y.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(r) || /[\uff01-\uff5e]/.test(r) || /^-|-$/.test(r) || !y.allow_underscores && /_/.test(r))
    })
  }
  d.exports = o.default, d.exports.default = o.default
})(he, he.exports);
var jt = he.exports,
  be = {
    exports: {}
  };
(function(d, o) {
  Object.defineProperty(o, "__esModule", {
    value: !0
  }), o.default = s;
  var a = u(Ae);

  function u(f) {
    return f && f.__esModule ? f : {
      default: f
    }
  }
  var m = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    i = "(".concat(m, "[.]){3}").concat(m),
    n = new RegExp("^".concat(i, "$")),
    e = "(?:[0-9a-fA-F]{1,4})",
    y = new RegExp("^(" + "(?:".concat(e, ":){7}(?:").concat(e, "|:)|") + "(?:".concat(e, ":){6}(?:").concat(i, "|:").concat(e, "|:)|") + "(?:".concat(e, ":){5}(?::").concat(i, "|(:").concat(e, "){1,2}|:)|") + "(?:".concat(e, ":){4}(?:(:").concat(e, "){0,1}:").concat(i, "|(:").concat(e, "){1,3}|:)|") + "(?:".concat(e, ":){3}(?:(:").concat(e, "){0,2}:").concat(i, "|(:").concat(e, "){1,4}|:)|") + "(?:".concat(e, ":){2}(?:(:").concat(e, "){0,3}:").concat(i, "|(:").concat(e, "){1,5}|:)|") + "(?:".concat(e, ":){1}(?:(:").concat(e, "){0,4}:").concat(i, "|(:").concat(e, "){1,6}|:)|") + "(?::((?::".concat(e, "){0,5}:").concat(i, "|(?::").concat(e, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

  function s(f) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, a.default)(f), r = String(r), r ? r === "4" ? n.test(f) : r === "6" ? y.test(f) : !1 : s(f, 4) || s(f, 6)
  }
  d.exports = o.default, d.exports.default = o.default
})(be, be.exports);
var Ot = be.exports,
  ye = {
    exports: {}
  };
(function(d, o) {
  Object.defineProperty(o, "__esModule", {
    value: !0
  }), o.default = V;
  var a = n(Ae),
    u = n(jt),
    m = n(Ot),
    i = n(De);

  function n(p) {
    return p && p.__esModule ? p : {
      default: p
    }
  }

  function e(p, b) {
    return h(p) || r(p, b) || s(p, b) || y()
  }

  function y() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }

  function s(p, b) {
    if (p) {
      if (typeof p == "string") return f(p, b);
      var P = Object.prototype.toString.call(p).slice(8, -1);
      if (P === "Object" && p.constructor && (P = p.constructor.name), P === "Map" || P === "Set") return Array.from(p);
      if (P === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)) return f(p, b)
    }
  }

  function f(p, b) {
    (b == null || b > p.length) && (b = p.length);
    for (var P = 0, x = new Array(b); P < b; P++) x[P] = p[P];
    return x
  }

  function r(p, b) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(p)))) {
      var P = [],
        x = !0,
        w = !1,
        I = void 0;
      try {
        for (var T = p[Symbol.iterator](), O; !(x = (O = T.next()).done) && (P.push(O.value), !(b && P.length === b)); x = !0);
      } catch ($) {
        w = !0, I = $
      } finally {
        try {
          !x && T.return != null && T.return()
        } finally {
          if (w) throw I
        }
      }
      return P
    }
  }

  function h(p) {
    if (Array.isArray(p)) return p
  }
  var g = {
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
    F = /^\[([^\]]+)\](?::([0-9]+))?$/;

  function l(p) {
    return Object.prototype.toString.call(p) === "[object RegExp]"
  }

  function v(p, b) {
    for (var P = 0; P < b.length; P++) {
      var x = b[P];
      if (p === x || l(x) && x.test(p)) return !0
    }
    return !1
  }

  function V(p, b) {
    if ((0, a.default)(p), !p || /[\s<>]/.test(p) || p.indexOf("mailto:") === 0 || (b = (0, i.default)(b, g), b.validate_length && p.length >= 2083) || !b.allow_fragments && p.includes("#") || !b.allow_query_components && (p.includes("?") || p.includes("&"))) return !1;
    var P, x, w, I, T, O, $, q;
    if ($ = p.split("#"), p = $.shift(), $ = p.split("?"), p = $.shift(), $ = p.split("://"), $.length > 1) {
      if (P = $.shift().toLowerCase(), b.require_valid_protocol && b.protocols.indexOf(P) === -1) return !1
    } else {
      if (b.require_protocol) return !1;
      if (p.slice(0, 2) === "//") {
        if (!b.allow_protocol_relative_urls) return !1;
        $[0] = p.slice(2)
      }
    }
    if (p = $.join("://"), p === "") return !1;
    if ($ = p.split("/"), p = $.shift(), p === "" && !b.require_host) return !0;
    if ($ = p.split("@"), $.length > 1) {
      if (b.disallow_auth || $[0] === "" || (x = $.shift(), x.indexOf(":") >= 0 && x.split(":").length > 2)) return !1;
      var W = x.split(":"),
        ee = e(W, 2),
        re = ee[0],
        ie = ee[1];
      if (re === "" && ie === "") return !1
    }
    I = $.join("@"), O = null, q = null;
    var J = I.match(F);
    if (J ? (w = "", q = J[1], O = J[2] || null) : ($ = I.split(":"), w = $.shift(), $.length && (O = $.join(":"))), O !== null && O.length > 0) {
      if (T = parseInt(O, 10), !/^[0-9]+$/.test(O) || T <= 0 || T > 65535) return !1
    } else if (b.require_port) return !1;
    return b.host_whitelist ? v(w, b.host_whitelist) : w === "" && !b.require_host ? !0 : !(!(0, m.default)(w) && !(0, u.default)(w, b) && (!q || !(0, m.default)(q, 6)) || (w = w || q, b.host_blacklist && v(w, b.host_blacklist)))
  }
  d.exports = o.default, d.exports.default = o.default
})(ye, ye.exports);
var qt = ye.exports;
const Bt = ze(qt);

function Kt(d, o) {
  return typeof d == "string" && Bt(d, o)
}
const Dt = {
    class: "memepad-new-progress"
  },
  Wt = U({
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
    setup(d) {
      return (o, a) => (c(), k("div", Dt, [_("div", {
        class: "track",
        style: we({
          width: `${d.step/d.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  Gt = N(Wt, [
    ["__scopeId", "data-v-44aaf1af"]
  ]),
  zt = {
    class: "memepad-new-step-heading"
  },
  Jt = {
    class: "step"
  },
  Qt = {
    class: "label"
  },
  Ht = U({
    __name: "NewStepHeading",
    props: {
      step: {
        type: Number,
        required: !0
      }
    },
    setup(d) {
      const o = d,
        a = j(() => {
          switch (o.step) {
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
              throw o.step, ke("Invalid step")
          }
        });
      return (u, m) => (c(), k("div", zt, [_("div", Jt, E(t(a).step), 1), _("div", Qt, E(t(a).label), 1)]))
    }
  }),
  le = N(Ht, [
    ["__scopeId", "data-v-44eadcb9"]
  ]),
  Zt = {
    class: "memepad-new-form-avatar"
  },
  Yt = {
    class: "compose"
  },
  Xt = {
    key: 1,
    src: Je,
    alt: "Plus icon"
  },
  en = {
    class: "content"
  },
  tn = {
    class: "name"
  },
  nn = {
    class: "disclaimer"
  },
  Ee = 10,
  an = U({
    __name: "Avatar",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(d) {
      const o = D(d, "modelValue"),
        a = R(),
        u = () => {
          var n;
          return (n = a.value) == null ? void 0 : n.triggerFileUpload()
        },
        m = R(),
        i = j(() => {
          if (o.value) return oe(o.value)
        });
      return (n, e) => {
        var f;
        const y = Re,
          s = Be;
        return c(), k("div", Zt, [_("div", Yt, [t(i) ? (c(), k("div", {
          key: 0,
          class: "image is-uploaded",
          style: we({
            backgroundImage: `url(${t(i)})`
          })
        }, null, 4)) : (c(), k("div", {
          key: 1,
          class: "image wait-upload",
          onClick: e[0] || (e[0] = r => u())
        }, [((f = t(m)) == null ? void 0 : f.status) === t(me).UPLOADING ? (c(), M(y, {
          key: 0,
          type: t(xe).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (c(), k("img", Xt))])), _("div", en, [_("div", tn, E(("t" in n ? n.t : t(A))("memepad.new.step_1.field_icon.label")), 1), _("div", nn, E(("t" in n ? n.t : t(A))("memepad.new.step_1.field_icon.description", {
          maxUploadSize: String(Ee)
        })), 1)]), o.value ? (c(), k("div", {
          key: 2,
          class: "delete",
          onClick: e[1] || (e[1] = r => o.value = void 0)
        }, e[4] || (e[4] = [_("img", {
          src: Me,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))) : C("", !0)]), S(s, {
          ref_key: "fileUploaderRef",
          ref: a,
          "hide-ui": "",
          "max-file-size-mb": Ee,
          accept: [t(H).JPEG, t(H).PNG, t(H).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 1,
            borderRadius: 999
          },
          "onUpdate:progress": e[2] || (e[2] = r => m.value = r),
          onUploaded: e[3] || (e[3] = r => o.value = r.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  on = N(an, [
    ["__scopeId", "data-v-d13d4287"]
  ]),
  sn = ["for"],
  ln = {
    key: 0,
    class: "error-caption"
  },
  rn = ["id", "placeholder"],
  un = U({
    __name: "Textarea",
    props: G({
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
    emits: G(["change", "input", "focus", "blur"], ["update:modelValue"]),
    setup(d, {
      emit: o
    }) {
      const a = d,
        u = o,
        m = Qe(),
        i = D(d, "modelValue"),
        n = R(),
        e = R(!1),
        y = () => {
          e.value = !0, u("focus", n.value)
        },
        s = () => {
          e.value = !1, u("blur", n.value)
        },
        f = j(() => {
          const g = [];
          return (a.isError || a.errorCaption) && g.push("is-error"), g
        });
      let r;
      return Se(i, () => {
        if (!n.value) return;
        n.value.style.height = "auto";
        const g = n.value.scrollHeight,
          F = r !== void 0 ? g - r : 0;
        r = g, n.value.style.height = `${g}px`, F !== 0 && _e(() => window.document.body.scrollBy(0, F))
      }), (g, F) => {
        const l = yt;
        return c(), k("div", {
          class: Ne(["kit-textarea", t(f)])
        }, [g.label ? (c(), k("label", {
          key: 0,
          for: t(m)
        }, [_("span", null, E(g.label), 1), g.errorCaption ? (c(), k("div", ln, [F[3] || (F[3] = _("img", {
          src: He,
          alt: "Warning icon"
        }, null, -1)), _("div", null, E(g.errorCaption), 1)])) : g.maxLength ? (c(), M(l, {
          key: 1,
          value: i.value,
          "max-length": g.maxLength
        }, null, 8, ["value", "max-length"])) : C("", !0)], 8, sn)) : C("", !0), Ue(_("textarea", {
          id: t(m),
          ref_key: "textareaRef",
          ref: n,
          "onUpdate:modelValue": F[0] || (F[0] = v => i.value = v),
          placeholder: g.placeholder,
          onChange: F[1] || (F[1] = v => g.$emit("change")),
          onInput: F[2] || (F[2] = v => g.$emit("input")),
          onFocus: y,
          onBlur: s
        }, null, 40, rn), [
          [Ze, i.value]
        ])], 2)
      }
    }
  }),
  cn = N(un, [
    ["__scopeId", "data-v-fbb8bb63"]
  ]);
var B = (d => (d.STRING = "STRING", d.TEXTAREA = "TEXTAREA", d))(B || {});
const dn = U({
    __name: "KitForm",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: G(["channel"], ["update:modelValue"]),
    setup(d, {
      emit: o
    }) {
      const a = o,
        u = D(d, "modelValue"),
        m = r => {
          r._ctx || (r._ctx = {
            initialValue: r.value,
            errors: []
          })
        };
      Se(u, () => u.value.forEach(m), {
        immediate: !0
      });
      const i = () => {},
        n = r => r._ctx.errors = y(r),
        e = j(() => u.value.every(r => y(r).length === 0));
      ne(() => u.value.forEach(r => {
        r._ctx && r._ctx.errors.length > 0 && (r._ctx.errors = y(r))
      }));
      const y = r => {
          var g, F, l, v;
          const h = [];
          switch (r.type) {
            case B.STRING:
            case B.TEXTAREA: {
              if ((g = r.validators) != null && g.required && !r.value && h.push({
                  msg: "Required to continue",
                  isVisible: !0
                }), (F = r.validators) != null && F.maxLength) {
                const V = r.validators.maxLength.value - r.value.length;
                V < 0 && h.push({
                  msg: `${V*-1} over`,
                  isVisible: !1
                })
              }
              if (r.type === B.STRING && ((l = r.validators) != null && l.url)) {
                const V = r.validators.url.includePrefix && ((v = r.props) != null && v.prefix) ? `${r.props.prefix}${r.value}` : r.value;
                Kt(V) || h.push({
                  msg: "Invalid URL",
                  isVisible: !0
                })
              }
              break
            }
            default:
              throw ke("unknown type")
          }
          if (r.customValidator) {
            const V = r.customValidator(r.value);
            V && h.push({
              msg: V,
              isVisible: !0
            })
          }
          return h
        },
        s = r => {
          var g;
          const h = (g = r._ctx) == null ? void 0 : g.errors.find(F => F.isVisible);
          return h == null ? void 0 : h.msg
        },
        f = r => {
          var g;
          const h = (g = r._ctx) == null ? void 0 : g.errors.length;
          return h ? h > 0 : !1
        };
      return ne(() => a("channel", {
        isFormValid: e.value
      })), (r, h) => {
        const g = wt,
          F = cn;
        return c(), k("form", {
          class: "kit-form",
          novalidate: "",
          onSubmit: h[0] || (h[0] = Ye(l => i(), ["prevent"]))
        }, [(c(!0), k(K, null, Z(u.value, l => {
          var v, V, p, b, P, x, w, I;
          return c(), k("div", {
            key: l.key,
            class: "field"
          }, [l.type === t(B).STRING ? (c(), M(g, Ie({
            key: 0,
            modelValue: l.value,
            "onUpdate:modelValue": T => l.value = T,
            ref_for: !0
          }, l.props, {
            "error-caption": s(l),
            "is-error": f(l),
            "max-length": (V = (v = l.validators) == null ? void 0 : v.maxLength) == null ? void 0 : V.value,
            class: "input",
            onChange: T => n(l),
            onFocus: (p = l.eventHandlers) == null ? void 0 : p.onFocus,
            onBlur: (b = l.eventHandlers) == null ? void 0 : b.onBlur
          }), {
            label: L(() => [Fe(r.$slots, `${l.key}-label`, {}, void 0, !0)]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : C("", !0), l.type === t(B).TEXTAREA ? (c(), M(F, Ie({
            key: 1,
            modelValue: l.value,
            "onUpdate:modelValue": T => l.value = T,
            ref_for: !0
          }, l.props, {
            "error-caption": s(l),
            "is-error": f(l),
            "max-length": (x = (P = l.validators) == null ? void 0 : P.maxLength) == null ? void 0 : x.value,
            class: "textarea",
            onChange: T => n(l),
            onFocus: (w = l.eventHandlers) == null ? void 0 : w.onFocus,
            onBlur: (I = l.eventHandlers) == null ? void 0 : I.onBlur
          }), null, 16, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : C("", !0), Fe(r.$slots, `${l.key}-after`, {}, void 0, !0)])
        }), 128))], 32)
      }
    }
  }),
  We = N(dn, [
    ["__scopeId", "data-v-5c8581ee"]
  ]),
  pn = {
    class: "memepad-new-step-1"
  },
  mn = U({
    __name: "1",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(d, {
      emit: o
    }) {
      const u = R({
          ...d.state.step1
        }),
        m = o,
        i = R([{
          key: "name",
          type: B.STRING,
          value: j({
            get: () => u.value.name ?? "",
            set: s => u.value.name = s ?? ""
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
          type: B.STRING,
          value: j({
            get: () => u.value.ticker ?? "",
            set: s => u.value.ticker = s ?? ""
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
          customValidator: s => {
            if (!s.match(/^[A-Z0-9]+$/)) return A("memepad.new.step_1.field_ticker.custom_validator_error")
          }
        }, {
          key: "description",
          type: B.TEXTAREA,
          value: j({
            get: () => u.value.description ?? "",
            set: s => u.value.description = s ?? ""
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
        n = R(),
        e = j(() => {
          var s;
          return ((s = n.value) == null ? void 0 : s.isFormValid) && !!u.value.iconFileKey
        }),
        y = () => m("continue", u.value);
      return (s, f) => {
        const r = le,
          h = on,
          g = We,
          F = Y,
          l = se;
        return c(), k("div", pn, [S(r, {
          step: 1
        }), S(h, {
          modelValue: t(u).iconFileKey,
          "onUpdate:modelValue": f[0] || (f[0] = v => t(u).iconFileKey = v)
        }, null, 8, ["modelValue"]), S(g, {
          modelValue: t(i),
          "onUpdate:modelValue": f[1] || (f[1] = v => ae(i) ? i.value = v : null),
          onChannel: f[2] || (f[2] = v => n.value = v)
        }, null, 8, ["modelValue"]), S(l, null, {
          default: L(() => [S(F, {
            label: ("t" in s ? s.t : t(A))("base.continue"),
            fill: "",
            disabled: !t(e),
            tertiary: "",
            size: t(z).LARGE,
            onClick: y
          }, null, 8, ["label", "disabled", "size"])]),
          _: 1
        })])
      }
    }
  }),
  _n = N(mn, [
    ["__scopeId", "data-v-9573d404"]
  ]),
  fn = {
    class: "memepad-new-form-label"
  },
  vn = {
    class: "compose"
  },
  gn = {
    class: "title"
  },
  hn = {
    key: 0,
    class: "optional"
  },
  bn = U({
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
    setup(d) {
      return (o, a) => {
        const u = X;
        return c(), k("div", fn, [d.iconName ? (c(), M(u, {
          key: 0,
          name: d.iconName,
          class: "icon"
        }, null, 8, ["name"])) : C("", !0), _("div", vn, [_("span", gn, E(d.title), 1), d.isOptional ? (c(), k("span", hn, E(` ${("t"in o?o.t:t(A))("base.optional")}`), 1)) : C("", !0)])])
      }
    }
  }),
  Ge = N(bn, [
    ["__scopeId", "data-v-272f2d1c"]
  ]),
  yn = {
    class: "memepad-new-form-banner"
  },
  wn = {
    key: 1,
    class: "banner is-uploading"
  },
  kn = {
    class: "description"
  },
  Sn = {
    class: "text"
  },
  An = {
    class: "description"
  },
  Ve = 10,
  Fn = U({
    __name: "Banner",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(d) {
      const o = D(d, "modelValue"),
        a = R(),
        u = () => {
          var n;
          return (n = a.value) == null ? void 0 : n.triggerFileUpload()
        },
        m = R(),
        i = j(() => {
          if (m.value && m.value.status === me.UPLOADING) return m.value.localUrl;
          if (o.value) return oe(o.value)
        });
      return (n, e) => {
        var r;
        const y = Ge,
          s = Re,
          f = Be;
        return c(), k("div", yn, [S(y, {
          title: ("t" in n ? n.t : t(A))("memepad.new.step_1.field_banner.label"),
          "is-optional": "",
          class: "heading"
        }, null, 8, ["title"]), o.value ? (c(), k("div", {
          key: 0,
          class: "banner is-uploaded",
          style: we({
            backgroundImage: `url(${t(i)})`
          })
        }, [_("div", {
          class: "delete-btn",
          onClick: e[0] || (e[0] = h => o.value = void 0)
        }, e[4] || (e[4] = [_("img", {
          src: Me,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((r = t(m)) == null ? void 0 : r.status) === t(me).UPLOADING ? (c(), k("div", wn, [S(s, {
          type: t(xe).LIGHT,
          size: 16
        }, null, 8, ["type"]), _("div", kn, E(("t" in n ? n.t : t(A))("memepad.new.step_1.field_banner.uploading")), 1)])) : (c(), k("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: e[1] || (e[1] = h => u())
        }, [e[6] || (e[6] = _("img", {
          src: et,
          alt: "Add"
        }, null, -1)), _("div", Sn, [_("div", An, E(("t" in n ? n.t : t(A))("memepad.new.step_1.field_banner.description", {
          maxUploadSize: String(Ve)
        })), 1), e[5] || (e[5] = _("div", {
          class: "ratio"
        }, "361 × 119", -1))])])), S(f, {
          ref_key: "fileUploaderRef",
          ref: a,
          "hide-ui": "",
          "max-file-size-mb": Ve,
          accept: [t(H).JPEG, t(H).PNG],
          crop: "",
          "cropper-params": {
            aspectRatio: 361 / 119,
            borderRadius: 8
          },
          "onUpdate:progress": e[2] || (e[2] = h => m.value = h),
          onUploaded: e[3] || (e[3] = h => o.value = h.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  In = N(Fn, [
    ["__scopeId", "data-v-c557c556"]
  ]),
  Pn = {
    class: "memepad-new-form-social-links-item"
  },
  $n = U({
    __name: "SocialLinksItem",
    props: G({
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
    emits: G(["isValid", "delete"], ["update:modelValue"]),
    setup(d, {
      emit: o
    }) {
      const a = d,
        u = o,
        m = D(d, "modelValue"),
        i = R([{
          type: B.STRING,
          key: a.meta.apiKey,
          value: j({
            get: () => m.value ?? "",
            set: e => m.value = e || void 0
          }),
          props: {
            placeholder: a.meta.placeholder,
            size: tt.COMPACT
          },
          validators: a.meta.skipUrlValidation ? {} : {
            url: {}
          }
        }]),
        n = R();
      return ne(() => {
        var e;
        return u("isValid", ((e = n.value) == null ? void 0 : e.isFormValid) ?? !1)
      }), (e, y) => {
        const s = Ge,
          f = X,
          r = We;
        return c(), k("div", Pn, [S(r, {
          modelValue: t(i),
          "onUpdate:modelValue": y[1] || (y[1] = h => ae(i) ? i.value = h : null),
          onChannel: y[2] || (y[2] = h => n.value = h)
        }, nt({
          [`${d.meta.apiKey}-label`]: L(() => [S(s, {
            "icon-name": d.meta.icon,
            title: d.meta.display,
            "is-optional": ""
          }, null, 8, ["icon-name", "title"])]),
          _: 2
        }, [d.optional ? {
          name: `${d.meta.apiKey}-after`,
          fn: L(() => [_("button", {
            type: "button",
            class: "delete-button reset",
            onClick: y[0] || (y[0] = h => e.$emit("delete"))
          }, [S(f, {
            name: "trash",
            class: "icon"
          })])]),
          key: "0"
        } : void 0]), 1032, ["modelValue"])])
      }
    }
  }),
  En = N($n, [
    ["__scopeId", "data-v-e8eb736f"]
  ]),
  Vn = {
    class: "memepad-new-form-social-links"
  },
  xn = {
    class: "inputs"
  },
  Mn = {
    key: 0,
    class: "add-panel"
  },
  Rn = {
    class: "providers"
  },
  Un = U({
    __name: "SocialLinks",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: G(["isValid"], ["update:modelValue"]),
    setup(d, {
      emit: o
    }) {
      const a = kt(),
        u = D(d, "modelValue"),
        m = o,
        i = R([{
          provider: Pe.TELEGRAM,
          isValid: !1,
          optional: !1
        }]),
        n = j(() => Object.values(Pe).filter(s => !i.value.find(f => f.provider === s))),
        e = s => i.value.push({
          provider: s,
          isValid: !1,
          optional: !0
        }),
        y = s => {
          i.value.splice(s, 1)
        };
      return ne(() => {
        const s = i.value.every(f => f.isValid);
        m("isValid", s)
      }), (s, f) => {
        const r = En,
          h = X;
        return c(), k("div", Vn, [_("div", xn, [S(at, {
          name: "list-shuffle-transition"
        }, {
          default: L(() => [(c(!0), k(K, null, Z(t(i), (g, F) => (c(), M(r, {
            key: g.provider,
            modelValue: u.value[g.provider],
            "onUpdate:modelValue": l => u.value[g.provider] = l,
            meta: t(a)[g.provider],
            optional: g.optional,
            class: "provider-input",
            onIsValid: l => g.isValid = l,
            onDelete: l => y(F)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "meta", "optional", "onIsValid", "onDelete"]))), 128))]),
          _: 1
        })]), S(ot, {
          name: "appear-from-right-transition"
        }, {
          default: L(() => [t(n).length > 0 ? (c(), k("div", Mn, [S(h, {
            name: "plus",
            class: "plus-icon"
          }), _("div", Rn, [(c(!0), k(K, null, Z(t(n), g => (c(), k("div", {
            key: g,
            class: "provider"
          }, [S(h, {
            name: t(a)[g].icon,
            class: "provider-icon",
            onClick: F => e(g)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : C("", !0)]),
          _: 1
        })])
      }
    }
  }),
  Nn = N(Un, [
    ["__scopeId", "data-v-5d3fea7d"]
  ]),
  Tn = {
    class: "kit-switch"
  },
  Cn = U({
    __name: "Switch",
    props: {
      modelValue: {
        type: Boolean
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(d) {
      const o = D(d, "modelValue");
      return (a, u) => (c(), k("div", Tn, [Ue(_("input", {
        "onUpdate:modelValue": u[0] || (u[0] = m => o.value = m),
        type: "checkbox"
      }, null, 512), [
        [st, o.value]
      ])]))
    }
  }),
  Ln = N(Cn, [
    ["__scopeId", "data-v-e0ffb56d"]
  ]),
  jn = "data:image/webp;base64,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",
  On = {
    class: "memepad-new-form-nsfw"
  },
  qn = {
    class: "setting"
  },
  Bn = {
    class: "label"
  },
  Kn = U({
    __name: "NSFW",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(d) {
      const o = D(d, "modelValue");
      return (a, u) => {
        const m = Ln,
          i = Mt;
        return c(), k("div", On, [_("div", qn, [_("div", Bn, E(("t" in a ? a.t : t(A))("memepad.new.step_1.field_nsfw.label")), 1), S(m, {
          modelValue: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = n => o.value = n)
        }, null, 8, ["modelValue"])]), S(i, {
          text: ("t" in a ? a.t : t(A))("memepad.new.step_1.field_nsfw.message"),
          image: t(jn),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }),
  Dn = N(Kn, [
    ["__scopeId", "data-v-cf4bf4c7"]
  ]),
  Wn = {
    class: "memepad-new-step-2"
  },
  Gn = U({
    __name: "2",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(d, {
      emit: o
    }) {
      const a = d,
        u = o,
        m = R(!1),
        i = R({
          ...a.state.step2
        }),
        n = () => u("continue", i.value);
      return (e, y) => {
        const s = le,
          f = In,
          r = Nn,
          h = Dn,
          g = Y,
          F = se;
        return c(), k("div", Wn, [S(s, {
          step: 2
        }), S(f, {
          modelValue: t(i).bannerFileKey,
          "onUpdate:modelValue": y[0] || (y[0] = l => t(i).bannerFileKey = l)
        }, null, 8, ["modelValue"]), S(r, {
          modelValue: t(i).socialProviders,
          "onUpdate:modelValue": y[1] || (y[1] = l => t(i).socialProviders = l),
          onIsValid: y[2] || (y[2] = l => m.value = l)
        }, null, 8, ["modelValue"]), S(h, {
          modelValue: t(i).isNSFW,
          "onUpdate:modelValue": y[3] || (y[3] = l => t(i).isNSFW = l)
        }, null, 8, ["modelValue"]), S(F, null, {
          default: L(() => [S(g, {
            label: ("t" in e ? e.t : t(A))("base.continue"),
            fill: "",
            tertiary: "",
            size: t(z).LARGE,
            disabled: !t(m),
            onClick: n
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  zn = N(Gn, [
    ["__scopeId", "data-v-2e24fde9"]
  ]),
  Jn = {
    class: "header"
  },
  Qn = {
    class: "content"
  },
  Hn = {
    class: "subtitle"
  },
  Zn = {
    key: 0
  },
  Yn = {
    class: "controls"
  },
  Xn = {
    key: 0,
    class: "info"
  },
  ea = {
    class: "label"
  },
  ta = U({
    __name: "3",
    props: {
      state: {},
      jettonManagement: {}
    },
    emits: ["continue", "update"],
    setup(d, {
      emit: o
    }) {
      const a = d,
        u = o,
        m = R(),
        i = R(),
        n = R(a.state.step3.overview ? {
          status: "loaded",
          share: a.state.step3.share ?? 0,
          overview: a.state.step3.overview
        } : {
          status: "idle",
          share: a.state.step3.share ?? 0
        });
      _e(() => {
        var w;
        return (w = i.value) == null ? void 0 : w.applyNearestValue()
      });
      const e = w => it(w, {
          join: "emptyFractional"
        }),
        y = w => new Q(w.replaceAll(",", "") || "0").toNumber(),
        s = j({
          get: () => String(n.value.share),
          set: w => {
            n.value.share = y(w), _e(() => {
              var I;
              return (I = i.value) == null ? void 0 : I.applyNearestValue()
            })
          }
        }),
        f = j({
          get: () => String(n.value.share),
          set: w => {
            n.value.share = y(e(w))
          }
        }),
        r = Te(),
        h = Ce(),
        g = () => Le().bottom.success(A("memepad.jetton.new.error_alert"));
      h.onConnectError(g);
      const F = R(!1),
        l = j(() => {
          if (n.value.status === "loading") return;
          if (!n.value.overview) {
            if (new Q(n.value.share).isZero()) {
              const I = ce(new Q(0), a.state.step1.ticker);
              return A("memepad.new.step_3.subtitle", {
                jettonsAmountWithSymbol: I.frontendWithSymbol,
                percentAmount: "0"
              })
            }
            return
          }
          const w = ce(new Q(n.value.overview.minReceive), a.state.step1.ticker);
          return n.value.overview ? A("memepad.new.step_3.subtitle", {
            jettonsAmountWithSymbol: w.frontendWithSymbol,
            percentAmount: lt(n.value.overview.jettonReceivePercent)
          }) : w.frontendWithSymbol
        }),
        v = j(() => {
          var $;
          const w = (() => {
              var W;
              const q = r.wallet.value.status === "connected" ? (W = r.wallet.value.balance) == null ? void 0 : W.tonBalance.balance.value : void 0;
              return {
                value: q,
                label: q ? ce(q, "TON").frontendWithSymbol : void 0
              }
            })(),
            I = {
              value: a.jettonManagement.fees.buyNetworkFee,
              label: `${A("memepad.jetton.fees_base")}: ${de(a.jettonManagement.fees.buyNetworkFee,2)} TON`,
              details: [{
                label: `${A("memepad.jetton.fees_network")}: ${de(a.jettonManagement.fees.buyNetworkFee,2)} TON`
              }, ...n.value.overview ? [{
                label: `${A("memepad.jetton.fees_platform")}: ${de(($=n.value.overview)==null?void 0:$.platformFee,2)} TON`
              }] : []]
            },
            T = (() => {
              if (!w.value) return;
              const q = I.value.plus(n.value.share);
              return w.value.gte(q)
            })(),
            O = T !== !1 ? void 0 : A("memepad.jetton.not_enough_error", {
              ticker: "TON"
            });
          return {
            tonBalance: w,
            showInfo: w.value !== void 0,
            fees: I,
            isEnoughTon: T !== !1,
            errorMessage: O,
            loading: n.value.status === "loading" || F.value
          }
        }),
        V = () => {
          var w;
          (w = m.value) == null || w.focusOnInput()
        },
        p = () => {
          v.value.errorMessage || P()
        },
        b = async () => {
          if (v.value.errorMessage) return;
          const w = new Q(n.value.share),
            I = await a.jettonManagement.getJettonOverview(w.toNumber());
          w.eq(n.value.share) && te(I) && (n.value = {
            status: "loaded",
            share: w.toNumber(),
            overview: I.data
          }, u("update", {
            share: w.toNumber(),
            overview: te(I) ? I.data : void 0
          }))
        }, P = async () => {
          if (n.value.status === "loaded") return u("continue", {
            share: +n.value.share,
            overview: n.value.overview
          });
          F.value = !0;
          const w = await a.jettonManagement.getJettonOverview(n.value.share);
          te(w) ? u("continue", {
            share: +n.value.share,
            overview: w.data
          }) : g(), F.value = !1
        }, {
          debouncedFunction: x
        } = ut(b, 400);
      return Se(() => n.value.share, () => {
        n.value.status = "loading", x()
      }), (w, I) => {
        const T = le,
          O = St,
          $ = Rt,
          q = At,
          W = Ft,
          ee = Ke,
          re = Y,
          ie = It,
          J = Pt;
        return c(), M(J, {
          class: "memepad-new-step-3"
        }, {
          top: L(() => [_("div", Jn, [S(T, {
            step: 3
          })])]),
          default: L(() => [_("div", Qn, [S(O, {
            ref_key: "actionControlsInputComp",
            ref: m,
            modelValue: t(s),
            "onUpdate:modelValue": I[0] || (I[0] = ue => ae(s) ? s.value = ue : null),
            postfix: "TON",
            modifier: e,
            onBlur: V
          }, null, 8, ["modelValue"]), _("div", Hn, [t(l) ? (c(), k("span", Zn, E(t(l)), 1)) : t(l) === void 0 ? (c(), M($, {
            key: 1,
            class: "skeleton"
          })) : C("", !0)])])]),
          "bottom-action": L(() => [_("div", Yn, [t(v).showInfo ? (c(), k("div", Xn, [t(v).tonBalance.label && !t(v).loading ? (c(), M(q, {
            key: 0,
            balance: t(v).tonBalance.label
          }, null, 8, ["balance"])) : (c(), M($, {
            key: 1,
            class: "skeleton"
          })), t(v).loading ? (c(), M($, {
            key: 3,
            class: "skeleton"
          })) : (c(), M(W, {
            key: 2,
            details: t(v).fees.details,
            "total-label": t(v).fees.label,
            "error-message": t(v).errorMessage
          }, null, 8, ["details", "total-label", "error-message"]))])) : C("", !0), t(v).isEnoughTon ? (c(), M(re, {
            key: 2,
            fill: "",
            size: t(z).LARGE,
            loading: t(v).loading,
            onClick: p
          }, {
            default: L(() => [_("div", ea, E(("t" in w ? w.t : t(A))("memepad.new.step_3.next_btn")), 1)]),
            _: 1
          }, 8, ["size", "loading"])) : (c(), M(ee, {
            key: 1
          }))])]),
          "bottom-helpers": L(() => [S(ie, {
            ref_key: "rangeInputEl",
            ref: i,
            modelValue: t(f),
            "onUpdate:modelValue": I[1] || (I[1] = ue => ae(f) ? f.value = ue : null),
            tab: t(rt).BUY
          }, null, 8, ["modelValue", "tab"])]),
          _: 1
        })
      }
    }
  }),
  na = N(ta, [
    ["__scopeId", "data-v-617861bd"]
  ]),
  aa = {
    class: "memepad-jetton-logo-ticker"
  },
  oa = ["src"],
  sa = {
    class: "ticker-name-compose"
  },
  la = {
    class: "ticker"
  },
  ra = {
    class: "name"
  },
  ia = U({
    __name: "LogoTicker",
    props: {
      logoFileKey: {},
      ticker: {},
      name: {}
    },
    setup(d) {
      return (o, a) => (c(), k("div", aa, [_("img", {
        src: t(oe)(o.logoFileKey),
        alt: "Jetton logo"
      }, null, 8, oa), _("div", sa, [_("div", la, E(o.ticker), 1), _("div", ra, E(o.name), 1)])]))
    }
  }),
  ua = N(ia, [
    ["__scopeId", "data-v-39dff782"]
  ]),
  ca = {
    class: "memepad-new-price-details"
  },
  da = {
    class: "key"
  },
  pa = {
    class: "value"
  },
  ma = {
    class: "memepad-new-price-details-fee-details"
  },
  _a = {
    class: "label"
  },
  fa = {
    class: "row total"
  },
  va = {
    class: "key"
  },
  ga = {
    key: 0,
    class: "not-enough-balance"
  },
  ha = {
    class: "label"
  },
  ba = {
    key: 1,
    class: "value"
  },
  ya = {
    class: "label"
  },
  wa = U({
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
    setup(d) {
      return (o, a) => {
        const u = X,
          m = Ut;
        return c(), k("div", ca, [(c(!0), k(K, null, Z(o.details.sections, i => (c(), k("div", {
          key: i.title,
          class: "row"
        }, [_("div", da, E(i.title), 1), _("div", pa, [S(m, null, {
          default: L(() => [S(u, {
            name: "circle-help",
            class: "memepad-new-price-details-tooltip-icon"
          })]),
          inner: L(() => [_("div", ma, [(c(!0), k(K, null, Z(i.details, n => (c(), k("span", {
            key: n.label,
            class: Ne({
              highlighted: n.highlight
            })
          }, E(n.label), 3))), 128))])]),
          _: 2
        }, 1024), _("span", _a, E(i.label), 1)])]))), 128)), o.details.totalSection ? (c(), k(K, {
          key: 0
        }, [a[0] || (a[0] = _("div", {
          class: "divider"
        }, null, -1)), _("div", fa, [_("div", va, E(o.details.totalSection.title), 1), o.notEnoughBalance ? (c(), k("div", ga, [S(u, {
          name: "circle-help",
          class: "icon"
        }), _("span", ha, E(("t" in o ? o.t : t(A))("memepad.jetton.not_enough_error", {
          ticker: "TON"
        })), 1)])) : (c(), k("div", ba, [_("span", ya, E(o.details.totalSection.label), 1)]))])], 64)) : C("", !0)])
      }
    }
  }),
  ka = N(wa, [
    ["__scopeId", "data-v-a59dc9db"]
  ]),
  Sa = {
    class: "memepad-new-step-overview"
  },
  Aa = {
    class: "button-wrapper"
  },
  Fa = U({
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
    setup(d, {
      emit: o
    }) {
      const a = d,
        u = o,
        m = Te(),
        i = Ce(),
        n = () => Le().bottom.success(A("memepad.jetton.new.error_alert"));
      i.onConnectError(n);
      const e = j(() => {
          const h = a.tonUsdRate && a.form.overview.marketCapTon.mul(a.tonUsdRate),
            g = a.tonUsdRate && a.form.overview.priceTon.mul(a.tonUsdRate);
          return {
            percent: a.form.overview.tonCollectedPercent,
            collected: a.form.overview.tonCollected,
            total: a.form.overview.tonForDex,
            marketDetails: {
              marketCap: h,
              listRows: {
                price: g,
                availableSupply: a.form.overview.availableSupply,
                maxSupply: a.form.overview.maxSupply
              }
            }
          }
        }),
        y = j(() => a.jettonManagement.getPriceDetails(a.form.overview)),
        s = j(() => {
          var g;
          const h = m.wallet.value.status === "connected" ? (g = m.wallet.value.balance) == null ? void 0 : g.tonBalance : void 0;
          if (h) return h.balance.value.gte(y.value.total)
        }),
        f = R(!1),
        r = async () => {
          if (!s.value || f.value) return;
          f.value = !0, await a.launchCallback(a.form) ? u("continue") : n(), f.value = !1
        };
      return (h, g) => {
        const F = le,
          l = ua,
          v = $t,
          V = Et,
          p = ka,
          b = Ke,
          P = Y,
          x = Vt,
          w = se;
        return c(), k("div", Sa, [S(F, {
          step: 4,
          class: "heading"
        }), S(l, {
          "logo-file-key": h.form.iconFileKey,
          ticker: h.form.ticker,
          name: h.form.name,
          class: "logo-ticker"
        }, null, 8, ["logo-file-key", "ticker", "name"]), S(v, {
          "banner-file-key": h.form.bannerFileKey,
          class: "banner"
        }, null, 8, ["banner-file-key"]), S(V, ct(dt(t(e))), null, 16), S(w, null, {
          default: L(() => [S(p, {
            "with-share": !!h.form.share,
            details: t(y),
            "not-enough-balance": t(s) === !1
          }, null, 8, ["with-share", "details", "not-enough-balance"]), _("div", Aa, [S(x, null, {
            default: L(() => [t(s) ? (c(), M(P, {
              key: 1,
              label: ("t" in h ? h.t : t(A))("memepad.new.step_4.launch_btn"),
              fill: "",
              size: t(z).LARGE,
              type: t(pt).DROP,
              onClick: r
            }, null, 8, ["label", "size", "type"])) : (c(), M(b, {
              key: 0
            }))]),
            _: 1
          })])]),
          _: 1
        })])
      }
    }
  }),
  Ia = N(Fa, [
    ["__scopeId", "data-v-f18ecdd0"]
  ]),
  Pa = {
    class: "memepad-new-step-launch"
  },
  $a = {
    class: "inner"
  },
  Ea = {
    class: "icon-wrapper"
  },
  Va = {
    class: "error-icon"
  },
  xa = {
    class: "title"
  },
  Ma = {
    class: "subtitle"
  },
  Ra = {
    class: "inner"
  },
  Ua = {
    class: "icon-wrapper"
  },
  Na = ["src"],
  Ta = {
    class: "title"
  },
  Ca = {
    class: "label"
  },
  La = {
    class: "subtitle"
  },
  ja = {
    key: 0,
    class: "rocket-wrapper"
  },
  Oa = {
    class: "footer"
  },
  qa = {
    class: "arena-banner"
  },
  Ba = {
    class: "title"
  },
  Ka = {
    class: "subtitle"
  },
  Da = 3e3,
  Wa = U({
    __name: "Launch",
    props: {
      form: {},
      retryCallback: {
        type: Function
      }
    },
    setup(d, {
      expose: o
    }) {
      const a = fe(),
        u = R("LOADING"),
        m = [],
        i = () => new Promise(s => {
          u.value = "ROCKET", m.push(setTimeout(() => {
            s(void 0)
          }, Da))
        }),
        n = () => {
          u.value = "ERROR"
        },
        e = () => {
          m.forEach(clearTimeout), u.value = "LOADING"
        },
        y = () => {
          ft().$webApp.openLink("https://www.cabal-arena.fun/")
        };
      return mt(() => {
        e()
      }), o({
        runSuccess: i,
        runError: n
      }), (s, f) => {
        const r = Nt,
          h = X,
          g = Y,
          F = se,
          l = vt;
        return c(), k("div", Pa, [S(r), t(u) === "ERROR" ? (c(), k(K, {
          key: 0
        }, [_("div", $a, [_("div", Ea, [_("div", Va, [S(h, {
          name: "warning",
          class: "icon"
        })])]), _("div", xa, E(("t" in s ? s.t : t(A))("memepad.new.failed.title", {
          ticker: s.form.ticker
        })), 1), _("div", Ma, E(("t" in s ? s.t : t(A))("memepad.new.failed.subtitle")), 1)]), S(F, null, {
          default: L(() => [S(g, {
            fill: "",
            label: ("t" in s ? s.t : t(A))("memepad.new.retry_btn_label"),
            size: t(z).LARGE,
            onClick: f[0] || (f[0] = v => s.retryCallback(s.form))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64)) : (c(), k(K, {
          key: 1
        }, [_("div", Ra, [_("div", Ua, [_("img", {
          src: t(oe)(s.form.iconFileKey),
          alt: "Jetton logo",
          width: "80",
          height: "80"
        }, null, 8, Na)]), _("div", Ta, [f[2] || (f[2] = _("div", {
          class: "dot"
        }, null, -1)), _("div", Ca, E(("t" in s ? s.t : t(A))("memepad.new.step_launch.title")), 1)]), _("div", La, E(("t" in s ? s.t : t(A))("memepad.new.step_launch.subtitle")), 1)]), t(u) === "ROCKET" ? (c(), k("div", ja, [S(l, {
          name: "animations/Rocket",
          size: 348
        })])) : C("", !0), S(F, null, {
          default: L(() => [_("div", Oa, [_("div", qa, [_("div", Ba, E(("t" in s ? s.t : t(A))("cabal_arena_banner.title")), 1), _("div", Ka, E(("t" in s ? s.t : t(A))("cabal_arena_banner.subtitle")), 1), _("button", {
            type: "button",
            class: "reset",
            onClick: y
          }, E(("t" in s ? s.t : t(A))("cabal_arena_banner.btn_label")), 1), f[3] || (f[3] = _("img", {
            src: _t
          }, null, -1))]), S(g, {
            fill: "",
            label: ("t" in s ? s.t : t(A))("base.got_it"),
            size: t(z).LARGE,
            onClick: f[1] || (f[1] = v => t(a).push({
              name: "memepad"
            }))
          }, null, 8, ["label", "size"])])]),
          _: 1
        })], 64))])
      }
    }
  }),
  Ga = N(Wa, [
    ["__scopeId", "data-v-de2e12ba"]
  ]),
  za = {
    class: "memepad-new"
  },
  Ja = U({
    __name: "New",
    props: {
      tonUsdRate: {},
      retryPayload: {},
      jettonManagement: {}
    },
    setup(d) {
      const o = d,
        a = je(),
        u = fe(),
        m = Oe(),
        i = R();
      qe().getReferralToken();
      const n = o.jettonManagement.getWaitForCreateStatus(),
        e = R(o.retryPayload ? xt(o.retryPayload) : {
          step: 1,
          step1: pe.step1(),
          step2: pe.step2(),
          step3: pe.step3()
        });
      (() => {
        o.retryPayload ? a.memepad.memepadJettonRetry() : a.memepad.memepadJettonStepInfo()
      })();
      const s = (l, v) => {
          const V = {
            step: 2,
            step1: v,
            step2: l.step2,
            step3: l.step3
          };
          e.value = V, a.memepad.memepadJettonStepPersonalise()
        },
        f = (l, v) => {
          const V = {
            step: 3,
            step1: l.step1,
            step2: v,
            step3: l.step3
          };
          e.value = V, a.memepad.memepadJettonStepShare()
        },
        r = (l, v) => {
          const V = {
            step: 4,
            step1: l.step1,
            step2: l.step2,
            step3: v
          };
          e.value = V, a.memepad.memepadJettonStepOverview()
        },
        h = (l, v) => {
          e.value = {
            ...l,
            step3: v
          }
        },
        g = l => {
          const v = {
            step: 5,
            step1: l.step1,
            step2: l.step2,
            step3: l.step3
          };
          e.value = v
        };
      Tt(() => {
        const l = e.value;
        switch (l.step) {
          case 1:
            fe().push({
              name: "memepad"
            });
            break;
          case 2:
            e.value = {
              ...l,
              step: 1
            };
            break;
          case 3:
          case 4:
            e.value = {
              ...l,
              step: l.step - 1
            };
            break;
          case 5:
            return;
          default:
            throw ke("Invalid step")
        }
      });
      const F = async l => {
        const v = await o.jettonManagement.createJetton(l);
        return te(v) ? ((async () => {
          const {
            launchTransactionHash: V,
            queryId: p
          } = v.data;
          a.memepad.memepadJettonStartLaunch({
            jettonId: p
          }), await ht(3e4);
          const b = await n.exec({
            launchTransactionHash: V,
            queryId: p
          });
          b ? a.memepad.memepadJettonEndLaunch({
            status: "success",
            purchaseAmount: l.share,
            jettonAddress: b.address,
            jettonShortname: b.shortname,
            jettonId: p
          }) : a.memepad.memepadJettonEndLaunch({
            status: "failed",
            purchaseAmount: l.share
          }), i.value ? b ? (await i.value.runSuccess(), await u.push({
            name: "memepad-jetton-shortname",
            params: {
              shortname: b.shortname
            }
          })) : i.value.runError() : (b ? a.memepad.memepadJettonLaunchShowNotification({
            status: "success",
            jettonAddress: b.address,
            jettonShortname: b.shortname,
            jettonId: p
          }) : a.memepad.memepadJettonLaunchShowNotification({
            status: "failed"
          }), bt().name !== "game" && (b ? m.showSuccessSheet(l, b.shortname) : m.showErrorSheet(l)))
        })(), !0) : (v.extra && v.extra instanceof Error && v.extra instanceof gt && a.memepad.memepadJettonLaunchWalletUiError(), !1)
      };
      return (l, v) => {
        const V = Gt,
          p = _n,
          b = zn,
          P = na,
          x = Ia,
          w = Ga;
        return c(), k("div", za, [t(e).step !== 5 ? (c(), M(V, {
          key: 0,
          step: t(e).step,
          "count-steps": 4
        }, null, 8, ["step"])) : C("", !0), t(e).step === 1 ? (c(), M(p, {
          key: 1,
          state: t(e),
          onContinue: v[0] || (v[0] = I => s(t(e), I))
        }, null, 8, ["state"])) : C("", !0), t(e).step === 2 ? (c(), M(b, {
          key: 2,
          state: t(e),
          onContinue: v[1] || (v[1] = I => f(t(e), I))
        }, null, 8, ["state"])) : C("", !0), t(e).step === 3 ? (c(), M(P, {
          key: 3,
          state: t(e),
          "jetton-management": o.jettonManagement,
          onContinue: v[2] || (v[2] = I => r(t(e), I)),
          onUpdate: v[3] || (v[3] = I => h(t(e), I))
        }, null, 8, ["state", "jetton-management"])) : C("", !0), t(e).step === 4 ? (c(), M(x, {
          key: 4,
          form: t($e)(t(e)),
          "jetton-management": o.jettonManagement,
          "ton-usd-rate": l.tonUsdRate,
          "launch-callback": F,
          onContinue: v[4] || (v[4] = I => g(t(e)))
        }, null, 8, ["form", "jetton-management", "ton-usd-rate"])) : C("", !0), t(e).step === 5 ? (c(), M(w, {
          key: 5,
          ref_key: "stepLaunchApi",
          ref: i,
          form: t($e)(t(e)),
          "retry-callback": t(m).retry
        }, null, 8, ["form", "retry-callback"])) : C("", !0)])
      }
    }
  }),
  Qa = N(Ja, [
    ["__scopeId", "data-v-9f00743b"]
  ]),
  Ha = {
    class: "memepad-new-page page"
  },
  Za = U({
    __name: "new",
    setup(d) {
      const {
        popRetryPayload: o
      } = Oe(), {
        tonUsdRate: a,
        memepadManagementSdk: u
      } = Lt(), m = je();
      return (() => {
        qe().getReferralToken(), m.memepad.memepadJettonStart()
      })(), (n, e) => {
        const y = Qa,
          s = Ct;
        return c(), k("div", Ha, [t(u) ? (c(), M(y, {
          key: 0,
          "ton-usd-rate": t(a),
          "retry-payload": t(o)(),
          "jetton-management": t(u)
        }, null, 8, ["ton-usd-rate", "retry-payload", "jetton-management"])) : (c(), M(s, {
          key: 1
        }))])
      }
    }
  }),
  mo = N(Za, [
    ["__scopeId", "data-v-11d52018"]
  ]);
export {
  mo as
  default
};