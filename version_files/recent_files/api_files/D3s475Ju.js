import {
  bK as Je,
  d as R,
  o as p,
  c as w,
  a as b,
  ax as be,
  f as I,
  j,
  V as ye,
  z as S,
  t as x,
  e,
  ao as W,
  K as N,
  aU as se,
  bL as pe,
  G as $,
  a$ as Re,
  bM as Ie,
  D as C,
  b as k,
  bN as z,
  bO as He,
  b0 as Te,
  an as J,
  ak as Qe,
  aF as we,
  bP as Ze,
  w as Ue,
  bQ as Ye,
  n as Ve,
  bR as Xe,
  bS as ae,
  F as G,
  q as Q,
  H as L,
  bm as Ee,
  ae as Fe,
  aA as et,
  bT as tt,
  p as oe,
  U as H,
  x as Z,
  _ as Y,
  bU as nt,
  bV as at,
  bW as ot,
  bc as Pe,
  aZ as st,
  a9 as lt,
  bX as rt,
  R as K,
  P as Oe,
  b3 as ke,
  E as te,
  aT as ce,
  bY as it,
  bZ as Ce,
  bA as ut,
  a7 as ct,
  Z as Le,
  a1 as ne,
  ab as dt,
  bD as pt,
  bE as mt,
  B as _t,
  ac as me,
  T as ft,
  ad as vt,
  $ as je,
  b_ as De,
  be as Be,
  O as gt,
  b$ as ht,
  bo as bt,
  b8 as yt,
  aM as wt,
  au as xe
} from "./BHZlrYgM.js";
import {
  K as qe
} from "./DOXL_Gx5.js";
import {
  _ as kt,
  a as At
} from "./ziuxx-DX.js";
import {
  _ as le
} from "./q2ENi3bi.js";
import {
  g as St,
  _ as Et,
  r as Ft,
  a as de,
  b as Me
} from "./DJupkc5z.js";
import {
  _ as Pt
} from "./FZdmT3uR.js";
import {
  d as xt,
  _ as Mt,
  a as $t,
  b as Ke,
  e as Nt,
  f as Rt,
  g as It,
  c as Tt
} from "./FT_npF0U.js";
import {
  _ as Ut
} from "./wIBA-zAR.js";
import {
  _ as Vt
} from "./Dj4Tt8py.js";
import {
  _ as Ot
} from "./Cj0FLBEI.js";
import {
  _ as Ct
} from "./-D34n8sx.js";
import {
  u as Lt,
  a as jt
} from "./CX8r7F1n.js";
import {
  c as Dt
} from "./CjrCyY9h.js";
import "./BRlH4TZm.js";
import "./Bu8TzYIA.js";
import "./bPhuWeyj.js";
import "./Cstj1tkL.js";
var _e = {
  exports: {}
};
(function(m, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = c;

  function a(_) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? a = function(r) {
      return typeof r
    } : a = function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, a(_)
  }

  function c(_) {
    var t = typeof _ == "string" || _ instanceof String;
    if (!t) {
      var r = a(_);
      throw _ === null ? r = "null" : r === "object" && (r = _.constructor.name), new TypeError("Expected a string but received a ".concat(r))
    }
  }
  m.exports = l.default, m.exports.default = l.default
})(_e, _e.exports);
var Ae = _e.exports,
  fe = {
    exports: {}
  };
(function(m, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = a;

  function a() {
    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      _ = arguments.length > 1 ? arguments[1] : void 0;
    for (var t in _) typeof c[t] > "u" && (c[t] = _[t]);
    return c
  }
  m.exports = l.default, m.exports.default = l.default
})(fe, fe.exports);
var Ge = fe.exports,
  ve = {
    exports: {}
  };
(function(m, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = r;
  var a = _(Ae),
    c = _(Ge);

  function _(o) {
    return o && o.__esModule ? o : {
      default: o
    }
  }
  var t = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1
  };

  function r(o, n) {
    (0, a.default)(o), n = (0, c.default)(n, t), n.allow_trailing_dot && o[o.length - 1] === "." && (o = o.substring(0, o.length - 1)), n.allow_wildcard === !0 && o.indexOf("*.") === 0 && (o = o.substring(2));
    var f = o.split("."),
      g = f[f.length - 1];
    return n.require_tld && (f.length < 2 || !n.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(g) || /\s/.test(g)) || !n.allow_numeric_tld && /^\d+$/.test(g) ? !1 : f.every(function(i) {
      return !(i.length > 63 && !n.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(i) || /[\uff01-\uff5e]/.test(i) || /^-|-$/.test(i) || !n.allow_underscores && /_/.test(i))
    })
  }
  m.exports = l.default, m.exports.default = l.default
})(ve, ve.exports);
var Bt = ve.exports,
  ge = {
    exports: {}
  };
(function(m, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = f;
  var a = c(Ae);

  function c(g) {
    return g && g.__esModule ? g : {
      default: g
    }
  }
  var _ = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    t = "(".concat(_, "[.]){3}").concat(_),
    r = new RegExp("^".concat(t, "$")),
    o = "(?:[0-9a-fA-F]{1,4})",
    n = new RegExp("^(" + "(?:".concat(o, ":){7}(?:").concat(o, "|:)|") + "(?:".concat(o, ":){6}(?:").concat(t, "|:").concat(o, "|:)|") + "(?:".concat(o, ":){5}(?::").concat(t, "|(:").concat(o, "){1,2}|:)|") + "(?:".concat(o, ":){4}(?:(:").concat(o, "){0,1}:").concat(t, "|(:").concat(o, "){1,3}|:)|") + "(?:".concat(o, ":){3}(?:(:").concat(o, "){0,2}:").concat(t, "|(:").concat(o, "){1,4}|:)|") + "(?:".concat(o, ":){2}(?:(:").concat(o, "){0,3}:").concat(t, "|(:").concat(o, "){1,5}|:)|") + "(?:".concat(o, ":){1}(?:(:").concat(o, "){0,4}:").concat(t, "|(:").concat(o, "){1,6}|:)|") + "(?::((?::".concat(o, "){0,5}:").concat(t, "|(?::").concat(o, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

  function f(g) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, a.default)(g), i = String(i), i ? i === "4" ? r.test(g) : i === "6" ? n.test(g) : !1 : f(g, 4) || f(g, 6)
  }
  m.exports = l.default, m.exports.default = l.default
})(ge, ge.exports);
var qt = ge.exports,
  he = {
    exports: {}
  };
(function(m, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = V;
  var a = r(Ae),
    c = r(Bt),
    _ = r(qt),
    t = r(Ge);

  function r(s) {
    return s && s.__esModule ? s : {
      default: s
    }
  }

  function o(s, d) {
    return h(s) || i(s, d) || f(s, d) || n()
  }

  function n() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }

  function f(s, d) {
    if (s) {
      if (typeof s == "string") return g(s, d);
      var E = Object.prototype.toString.call(s).slice(8, -1);
      if (E === "Object" && s.constructor && (E = s.constructor.name), E === "Map" || E === "Set") return Array.from(s);
      if (E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)) return g(s, d)
    }
  }

  function g(s, d) {
    (d == null || d > s.length) && (d = s.length);
    for (var E = 0, y = new Array(d); E < d; E++) y[E] = s[E];
    return y
  }

  function i(s, d) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(s)))) {
      var E = [],
        y = !0,
        A = !1,
        O = void 0;
      try {
        for (var T = s[Symbol.iterator](), U; !(y = (U = T.next()).done) && (E.push(U.value), !(d && E.length === d)); y = !0);
      } catch (F) {
        A = !0, O = F
      } finally {
        try {
          !y && T.return != null && T.return()
        } finally {
          if (A) throw O
        }
      }
      return E
    }
  }

  function h(s) {
    if (Array.isArray(s)) return s
  }
  var v = {
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
    P = /^\[([^\]]+)\](?::([0-9]+))?$/;

  function u(s) {
    return Object.prototype.toString.call(s) === "[object RegExp]"
  }

  function M(s, d) {
    for (var E = 0; E < d.length; E++) {
      var y = d[E];
      if (s === y || u(y) && y.test(s)) return !0
    }
    return !1
  }

  function V(s, d) {
    if ((0, a.default)(s), !s || /[\s<>]/.test(s) || s.indexOf("mailto:") === 0 || (d = (0, t.default)(d, v), d.validate_length && s.length >= 2083) || !d.allow_fragments && s.includes("#") || !d.allow_query_components && (s.includes("?") || s.includes("&"))) return !1;
    var E, y, A, O, T, U, F, D;
    if (F = s.split("#"), s = F.shift(), F = s.split("?"), s = F.shift(), F = s.split("://"), F.length > 1) {
      if (E = F.shift().toLowerCase(), d.require_valid_protocol && d.protocols.indexOf(E) === -1) return !1
    } else {
      if (d.require_protocol) return !1;
      if (s.slice(0, 2) === "//") {
        if (!d.allow_protocol_relative_urls) return !1;
        F[0] = s.slice(2)
      }
    }
    if (s = F.join("://"), s === "") return !1;
    if (F = s.split("/"), s = F.shift(), s === "" && !d.require_host) return !0;
    if (F = s.split("@"), F.length > 1) {
      if (d.disallow_auth || F[0] === "" || (y = F.shift(), y.indexOf(":") >= 0 && y.split(":").length > 2)) return !1;
      var X = y.split(":"),
        ee = o(X, 2),
        ie = ee[0],
        ue = ee[1];
      if (ie === "" && ue === "") return !1
    }
    O = F.join("@"), U = null, D = null;
    var B = O.match(P);
    if (B ? (A = "", D = B[1], U = B[2] || null) : (F = O.split(":"), A = F.shift(), F.length && (U = F.join(":"))), U !== null && U.length > 0) {
      if (T = parseInt(U, 10), !/^[0-9]+$/.test(U) || T <= 0 || T > 65535) return !1
    } else if (d.require_port) return !1;
    return d.host_whitelist ? M(A, d.host_whitelist) : A === "" && !d.require_host ? !0 : !(!(0, _.default)(A) && !(0, c.default)(A, d) && (!D || !(0, _.default)(D, 6)) || (A = A || D, d.host_blacklist && M(A, d.host_blacklist)))
  }
  m.exports = l.default, m.exports.default = l.default
})(he, he.exports);
var Kt = he.exports;
const Gt = Je(Kt);

function Wt(m, l) {
  return typeof m == "string" && Gt(m, l)
}
const zt = {
    class: "memepad-new-progress"
  },
  Jt = R({
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
    setup(m) {
      return (l, a) => (p(), w("div", zt, [b("div", {
        class: "track",
        style: be({
          width: `${m.step/m.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  Ht = I(Jt, [
    ["__scopeId", "data-v-2261863a"]
  ]),
  Qt = {
    class: "memepad-new-step-heading"
  },
  Zt = {
    class: "step"
  },
  Yt = {
    class: "label"
  },
  Xt = R({
    __name: "NewStepHeading",
    props: {
      step: {
        type: Number,
        required: !0
      }
    },
    setup(m) {
      const l = m,
        a = j(() => {
          switch (l.step) {
            case 1:
              return {
                step: "1", label: S("memepad.new.step_1.title")
              };
            case 2:
              return {
                step: "2", label: S("memepad.new.step_2.title")
              };
            case 3:
              return {
                step: "3", label: S("memepad.new.step_3.title")
              };
            case 4:
              return {
                step: "4", label: S("memepad.new.step_4.title")
              };
            default:
              throw l.step, ye("Invalid step")
          }
        });
      return (c, _) => (p(), w("div", Qt, [b("div", Zt, x(e(a).step), 1), b("div", Yt, x(e(a).label), 1)]))
    }
  }),
  re = I(Xt, [
    ["__scopeId", "data-v-44eadcb9"]
  ]),
  en = {
    class: "memepad-new-form-avatar"
  },
  tn = {
    class: "compose"
  },
  nn = {
    key: 1,
    src: He,
    alt: "Plus icon"
  },
  an = {
    class: "content"
  },
  on = {
    class: "name"
  },
  sn = {
    class: "disclaimer"
  },
  $e = 10,
  ln = R({
    __name: "Avatar",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(m) {
      const l = W(m, "modelValue"),
        a = N(),
        c = () => {
          var r;
          return (r = a.value) == null ? void 0 : r.triggerFileUpload()
        },
        _ = N(),
        t = j(() => {
          if (l.value) return se(l.value)
        });
      return (r, o) => {
        var g;
        const n = Te,
          f = qe;
        return p(), w("div", en, [b("div", tn, [e(t) ? (p(), w("div", {
          key: 0,
          class: "image is-uploaded",
          style: be({
            backgroundImage: `url(${e(t)})`
          })
        }, null, 4)) : (p(), w("div", {
          key: 1,
          class: "image wait-upload",
          onClick: o[0] || (o[0] = i => c())
        }, [((g = e(_)) == null ? void 0 : g.status) === e(pe).UPLOADING ? (p(), $(n, {
          key: 0,
          type: e(Re).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (p(), w("img", nn))])), b("div", an, [b("div", on, x(("t" in r ? r.t : e(S))("memepad.new.step_1.field_icon.label")), 1), b("div", sn, x(("t" in r ? r.t : e(S))("memepad.new.step_1.field_icon.description", {
          maxUploadSize: String($e)
        })), 1)]), l.value ? (p(), w("div", {
          key: 2,
          class: "delete",
          onClick: o[1] || (o[1] = i => l.value = void 0)
        }, o[4] || (o[4] = [b("img", {
          src: Ie,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))) : C("", !0)]), k(f, {
          ref_key: "fileUploaderRef",
          ref: a,
          "hide-ui": "",
          "max-file-size-mb": $e,
          accept: [e(z).JPEG, e(z).PNG, e(z).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 1,
            borderRadius: 999
          },
          "onUpdate:progress": o[2] || (o[2] = i => _.value = i),
          onUploaded: o[3] || (o[3] = i => l.value = i.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  rn = I(ln, [
    ["__scopeId", "data-v-d13d4287"]
  ]),
  un = ["for"],
  cn = {
    key: 0,
    class: "error-caption"
  },
  dn = ["id", "placeholder"],
  pn = R({
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
    setup(m, {
      emit: l
    }) {
      const a = m,
        c = l,
        _ = Qe(),
        t = W(m, "modelValue"),
        r = N(),
        o = N(!1),
        n = () => {
          o.value = !0, c("focus", r.value)
        },
        f = () => {
          o.value = !1, c("blur", r.value)
        },
        g = j(() => {
          const v = [];
          return (a.isError || a.errorCaption) && v.push("is-error"), v
        });
      let i;
      return we(t, () => {
        if (!r.value) return;
        r.value.style.height = "auto";
        const v = r.value.scrollHeight,
          P = i !== void 0 ? v - i : 0;
        i = v, r.value.style.height = `${v}px`, P !== 0 && Xe(() => window.document.body.scrollBy(0, P))
      }), (v, P) => {
        const u = kt;
        return p(), w("div", {
          class: Ve(["kit-textarea", e(g)])
        }, [v.label ? (p(), w("label", {
          key: 0,
          for: e(_)
        }, [b("span", null, x(v.label), 1), v.errorCaption ? (p(), w("div", cn, [P[3] || (P[3] = b("img", {
          src: Ze,
          alt: "Warning icon"
        }, null, -1)), b("div", null, x(v.errorCaption), 1)])) : v.maxLength ? (p(), $(u, {
          key: 1,
          value: t.value,
          "max-length": v.maxLength
        }, null, 8, ["value", "max-length"])) : C("", !0)], 8, un)) : C("", !0), Ue(b("textarea", {
          id: e(_),
          ref_key: "textareaRef",
          ref: r,
          "onUpdate:modelValue": P[0] || (P[0] = M => t.value = M),
          placeholder: v.placeholder,
          onChange: P[1] || (P[1] = M => v.$emit("change")),
          onInput: P[2] || (P[2] = M => v.$emit("input")),
          onFocus: n,
          onBlur: f
        }, null, 40, dn), [
          [Ye, t.value]
        ])], 2)
      }
    }
  }),
  mn = I(pn, [
    ["__scopeId", "data-v-fbb8bb63"]
  ]);
var q = (m => (m.STRING = "STRING", m.TEXTAREA = "TEXTAREA", m))(q || {});
const _n = R({
    __name: "KitForm",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: J(["channel"], ["update:modelValue"]),
    setup(m, {
      emit: l
    }) {
      const a = l,
        c = W(m, "modelValue"),
        _ = i => {
          i._ctx || (i._ctx = {
            initialValue: i.value,
            errors: []
          })
        };
      we(c, () => c.value.forEach(_), {
        immediate: !0
      });
      const t = () => {},
        r = i => i._ctx.errors = n(i),
        o = j(() => c.value.every(i => n(i).length === 0));
      ae(() => c.value.forEach(i => {
        i._ctx && i._ctx.errors.length > 0 && (i._ctx.errors = n(i))
      }));
      const n = i => {
          var v, P, u, M;
          const h = [];
          switch (i.type) {
            case q.STRING:
            case q.TEXTAREA: {
              if ((v = i.validators) != null && v.required && !i.value && h.push({
                  msg: "Required to continue",
                  isVisible: !0
                }), (P = i.validators) != null && P.maxLength) {
                const V = i.validators.maxLength.value - i.value.length;
                V < 0 && h.push({
                  msg: `${V*-1} over`,
                  isVisible: !1
                })
              }
              if (i.type === q.STRING && ((u = i.validators) != null && u.url)) {
                const V = i.validators.url.includePrefix && ((M = i.props) != null && M.prefix) ? `${i.props.prefix}${i.value}` : i.value;
                Wt(V) || h.push({
                  msg: "Invalid URL",
                  isVisible: !0
                })
              }
              break
            }
            default:
              throw ye("unknown type")
          }
          if (i.customValidator) {
            const V = i.customValidator(i.value);
            V && h.push({
              msg: V,
              isVisible: !0
            })
          }
          return h
        },
        f = i => {
          var v;
          const h = (v = i._ctx) == null ? void 0 : v.errors.find(P => P.isVisible);
          return h == null ? void 0 : h.msg
        },
        g = i => {
          var v;
          const h = (v = i._ctx) == null ? void 0 : v.errors.length;
          return h ? h > 0 : !1
        };
      return ae(() => a("channel", {
        isFormValid: o.value
      })), (i, h) => {
        const v = At,
          P = mn;
        return p(), w("form", {
          class: "kit-form",
          novalidate: "",
          onSubmit: h[0] || (h[0] = et(u => t(), ["prevent"]))
        }, [(p(!0), w(G, null, Q(c.value, u => {
          var M, V, s, d, E, y, A, O;
          return p(), w("div", {
            key: u.key,
            class: "field"
          }, [u.type === e(q).STRING ? (p(), $(v, Fe({
            key: 0,
            modelValue: u.value,
            "onUpdate:modelValue": T => u.value = T,
            ref_for: !0
          }, u.props, {
            "error-caption": f(u),
            "is-error": g(u),
            "max-length": (V = (M = u.validators) == null ? void 0 : M.maxLength) == null ? void 0 : V.value,
            class: "input",
            onChange: T => r(u),
            onFocus: (s = u.eventHandlers) == null ? void 0 : s.onFocus,
            onBlur: (d = u.eventHandlers) == null ? void 0 : d.onBlur
          }), {
            label: L(() => [Ee(i.$slots, `${u.key}-label`, {}, void 0, !0)]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : C("", !0), u.type === e(q).TEXTAREA ? (p(), $(P, Fe({
            key: 1,
            modelValue: u.value,
            "onUpdate:modelValue": T => u.value = T,
            ref_for: !0
          }, u.props, {
            "error-caption": f(u),
            "is-error": g(u),
            "max-length": (y = (E = u.validators) == null ? void 0 : E.maxLength) == null ? void 0 : y.value,
            class: "textarea",
            onChange: T => r(u),
            onFocus: (A = u.eventHandlers) == null ? void 0 : A.onFocus,
            onBlur: (O = u.eventHandlers) == null ? void 0 : O.onBlur
          }), null, 16, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : C("", !0), Ee(i.$slots, `${u.key}-after`, {}, void 0, !0)])
        }), 128))], 32)
      }
    }
  }),
  We = I(_n, [
    ["__scopeId", "data-v-5c8581ee"]
  ]),
  fn = {
    class: "memepad-new-step-1"
  },
  vn = R({
    __name: "1",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(m, {
      emit: l
    }) {
      const c = N({
          ...m.state.step1
        }),
        _ = l,
        t = N([{
          key: "name",
          type: q.STRING,
          value: j({
            get: () => c.value.name ?? "",
            set: f => c.value.name = f ?? ""
          }),
          props: {
            label: S("memepad.new.step_1.field_name.label"),
            placeholder: S("memepad.new.step_1.field_name.placeholder")
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
          value: j({
            get: () => c.value.ticker ?? "",
            set: f => c.value.ticker = f ?? ""
          }),
          props: {
            label: S("memepad.new.step_1.field_ticker.label"),
            placeholder: S("memepad.new.step_1.field_ticker.placeholder"),
            modifiers: [tt.UPPERCASE]
          },
          validators: {
            required: {},
            maxLength: {
              value: 10
            }
          },
          customValidator: f => {
            if (!f.match(/^[A-Z0-9]+$/)) return S("memepad.new.step_1.field_ticker.custom_validator_error")
          }
        }, {
          key: "description",
          type: q.TEXTAREA,
          value: j({
            get: () => c.value.description ?? "",
            set: f => c.value.description = f ?? ""
          }),
          props: {
            label: S("memepad.new.step_1.field_description.label"),
            placeholder: S("memepad.new.step_1.field_description.placeholder")
          },
          validators: {
            required: {},
            maxLength: {
              value: 240
            }
          }
        }]),
        r = N(),
        o = j(() => {
          var f;
          return ((f = r.value) == null ? void 0 : f.isFormValid) && !!c.value.iconFileKey
        }),
        n = () => _("continue", c.value);
      return (f, g) => {
        const i = re,
          h = rn,
          v = We,
          P = Z,
          u = le;
        return p(), w("div", fn, [k(i, {
          step: 1
        }), k(h, {
          modelValue: e(c).iconFileKey,
          "onUpdate:modelValue": g[0] || (g[0] = M => e(c).iconFileKey = M)
        }, null, 8, ["modelValue"]), k(v, {
          modelValue: e(t),
          "onUpdate:modelValue": g[1] || (g[1] = M => oe(t) ? t.value = M : null),
          onChannel: g[2] || (g[2] = M => r.value = M)
        }, null, 8, ["modelValue"]), k(u, null, {
          default: L(() => [k(P, {
            label: ("t" in f ? f.t : e(S))("base.continue"),
            fill: "",
            disabled: !e(o),
            tertiary: "",
            size: e(H).LARGE,
            onClick: n
          }, null, 8, ["label", "disabled", "size"])]),
          _: 1
        })])
      }
    }
  }),
  gn = I(vn, [
    ["__scopeId", "data-v-9573d404"]
  ]),
  hn = {
    class: "memepad-new-form-label"
  },
  bn = {
    class: "compose"
  },
  yn = {
    class: "title"
  },
  wn = {
    key: 0,
    class: "optional"
  },
  kn = R({
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
    setup(m) {
      return (l, a) => {
        const c = Y;
        return p(), w("div", hn, [m.iconName ? (p(), $(c, {
          key: 0,
          name: m.iconName,
          class: "icon"
        }, null, 8, ["name"])) : C("", !0), b("div", bn, [b("span", yn, x(m.title), 1), m.isOptional ? (p(), w("span", wn, x(` ${("t"in l?l.t:e(S))("base.optional")}`), 1)) : C("", !0)])])
      }
    }
  }),
  ze = I(kn, [
    ["__scopeId", "data-v-272f2d1c"]
  ]),
  An = {
    class: "memepad-new-form-banner"
  },
  Sn = {
    key: 1,
    class: "banner is-uploading"
  },
  En = {
    class: "description"
  },
  Fn = {
    class: "text"
  },
  Pn = {
    class: "description"
  },
  Ne = 10,
  xn = R({
    __name: "Banner",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(m) {
      const l = W(m, "modelValue"),
        a = N(),
        c = () => {
          var r;
          return (r = a.value) == null ? void 0 : r.triggerFileUpload()
        },
        _ = N(),
        t = j(() => {
          if (_.value && _.value.status === pe.UPLOADING) return _.value.localUrl;
          if (l.value) return se(l.value)
        });
      return (r, o) => {
        var i;
        const n = ze,
          f = Te,
          g = qe;
        return p(), w("div", An, [k(n, {
          title: ("t" in r ? r.t : e(S))("memepad.new.step_1.field_banner.label"),
          "is-optional": "",
          class: "heading"
        }, null, 8, ["title"]), l.value ? (p(), w("div", {
          key: 0,
          class: "banner is-uploaded",
          style: be({
            backgroundImage: `url(${e(t)})`
          })
        }, [b("div", {
          class: "delete-btn",
          onClick: o[0] || (o[0] = h => l.value = void 0)
        }, o[4] || (o[4] = [b("img", {
          src: Ie,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((i = e(_)) == null ? void 0 : i.status) === e(pe).UPLOADING ? (p(), w("div", Sn, [k(f, {
          type: e(Re).LIGHT,
          size: 16
        }, null, 8, ["type"]), b("div", En, x(("t" in r ? r.t : e(S))("memepad.new.step_1.field_banner.uploading")), 1)])) : (p(), w("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: o[1] || (o[1] = h => c())
        }, [o[6] || (o[6] = b("img", {
          src: nt,
          alt: "Add"
        }, null, -1)), b("div", Fn, [b("div", Pn, x(("t" in r ? r.t : e(S))("memepad.new.step_1.field_banner.description", {
          maxUploadSize: String(Ne)
        })), 1), o[5] || (o[5] = b("div", {
          class: "ratio"
        }, "361 × 119", -1))])])), k(g, {
          ref_key: "fileUploaderRef",
          ref: a,
          "hide-ui": "",
          "max-file-size-mb": Ne,
          accept: [e(z).JPEG, e(z).PNG, e(z).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 361 / 119,
            borderRadius: 8
          },
          "onUpdate:progress": o[2] || (o[2] = h => _.value = h),
          onUploaded: o[3] || (o[3] = h => l.value = h.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  Mn = I(xn, [
    ["__scopeId", "data-v-327e2cf8"]
  ]),
  $n = {
    class: "memepad-new-form-social-links-item"
  },
  Nn = R({
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
    setup(m, {
      emit: l
    }) {
      const a = m,
        c = l,
        _ = W(m, "modelValue"),
        t = N([{
          type: q.STRING,
          key: a.meta.apiKey,
          value: j({
            get: () => _.value ?? "",
            set: o => _.value = o || void 0
          }),
          props: {
            placeholder: a.meta.placeholder,
            size: at.COMPACT
          },
          validators: a.meta.skipUrlValidation ? {} : {
            url: {}
          }
        }]),
        r = N();
      return ae(() => {
        var o;
        return c("isValid", ((o = r.value) == null ? void 0 : o.isFormValid) ?? !1)
      }), (o, n) => {
        const f = ze,
          g = Y,
          i = We;
        return p(), w("div", $n, [k(i, {
          modelValue: e(t),
          "onUpdate:modelValue": n[1] || (n[1] = h => oe(t) ? t.value = h : null),
          onChannel: n[2] || (n[2] = h => r.value = h)
        }, ot({
          [`${m.meta.apiKey}-label`]: L(() => [k(f, {
            "icon-name": m.meta.icon,
            title: m.meta.display,
            "is-optional": ""
          }, null, 8, ["icon-name", "title"])]),
          _: 2
        }, [m.optional ? {
          name: `${m.meta.apiKey}-after`,
          fn: L(() => [b("button", {
            type: "button",
            class: "delete-button reset",
            onClick: n[0] || (n[0] = h => o.$emit("delete"))
          }, [k(g, {
            name: "trash",
            class: "icon"
          })])]),
          key: "0"
        } : void 0]), 1032, ["modelValue"])])
      }
    }
  }),
  Rn = I(Nn, [
    ["__scopeId", "data-v-e8eb736f"]
  ]),
  In = {
    class: "memepad-new-form-social-links"
  },
  Tn = {
    class: "inputs"
  },
  Un = {
    key: 0,
    class: "add-panel"
  },
  Vn = {
    class: "providers"
  },
  On = R({
    __name: "SocialLinks",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: J(["isValid"], ["update:modelValue"]),
    setup(m, {
      emit: l
    }) {
      const a = St(),
        c = W(m, "modelValue"),
        _ = l,
        t = N([{
          provider: Pe.TELEGRAM,
          isValid: !1,
          optional: !1
        }]),
        r = j(() => Object.values(Pe).filter(f => !t.value.find(g => g.provider === f))),
        o = f => t.value.push({
          provider: f,
          isValid: !1,
          optional: !0
        }),
        n = f => {
          t.value.splice(f, 1)
        };
      return ae(() => {
        const f = t.value.every(g => g.isValid);
        _("isValid", f)
      }), (f, g) => {
        const i = Rn,
          h = Y;
        return p(), w("div", In, [b("div", Tn, [k(st, {
          name: "list-shuffle-transition"
        }, {
          default: L(() => [(p(!0), w(G, null, Q(e(t), (v, P) => (p(), $(i, {
            key: v.provider,
            modelValue: c.value[v.provider],
            "onUpdate:modelValue": u => c.value[v.provider] = u,
            meta: e(a)[v.provider],
            optional: v.optional,
            class: "provider-input",
            onIsValid: u => v.isValid = u,
            onDelete: u => n(P)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "meta", "optional", "onIsValid", "onDelete"]))), 128))]),
          _: 1
        })]), k(lt, {
          name: "appear-from-right-transition"
        }, {
          default: L(() => [e(r).length > 0 ? (p(), w("div", Un, [k(h, {
            name: "plus",
            class: "plus-icon"
          }), b("div", Vn, [(p(!0), w(G, null, Q(e(r), v => (p(), w("div", {
            key: v,
            class: "provider"
          }, [k(h, {
            name: e(a)[v].icon,
            class: "provider-icon",
            onClick: P => o(v)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : C("", !0)]),
          _: 1
        })])
      }
    }
  }),
  Cn = I(On, [
    ["__scopeId", "data-v-5d3fea7d"]
  ]),
  Ln = {
    class: "kit-switch"
  },
  jn = R({
    __name: "Switch",
    props: {
      modelValue: {
        type: Boolean
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(m) {
      const l = W(m, "modelValue");
      return (a, c) => (p(), w("div", Ln, [Ue(b("input", {
        "onUpdate:modelValue": c[0] || (c[0] = _ => l.value = _),
        type: "checkbox"
      }, null, 512), [
        [rt, l.value]
      ])]))
    }
  }),
  Dn = I(jn, [
    ["__scopeId", "data-v-e0ffb56d"]
  ]),
  Bn = "data:image/webp;base64,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",
  qn = {
    class: "memepad-new-form-nsfw"
  },
  Kn = {
    class: "setting"
  },
  Gn = {
    class: "label"
  },
  Wn = R({
    __name: "NSFW",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(m) {
      const l = W(m, "modelValue");
      return (a, c) => {
        const _ = Dn,
          t = Pt;
        return p(), w("div", qn, [b("div", Kn, [b("div", Gn, x(("t" in a ? a.t : e(S))("memepad.new.step_1.field_nsfw.label")), 1), k(_, {
          modelValue: l.value,
          "onUpdate:modelValue": c[0] || (c[0] = r => l.value = r)
        }, null, 8, ["modelValue"])]), k(t, {
          text: ("t" in a ? a.t : e(S))("memepad.new.step_1.field_nsfw.message"),
          image: e(Bn),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }),
  zn = I(Wn, [
    ["__scopeId", "data-v-cf4bf4c7"]
  ]),
  Jn = {
    class: "memepad-new-step-2"
  },
  Hn = R({
    __name: "2",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(m, {
      emit: l
    }) {
      const a = m,
        c = l,
        _ = N(!1),
        t = N({
          ...a.state.step2
        }),
        r = () => c("continue", t.value);
      return (o, n) => {
        const f = re,
          g = Mn,
          i = Cn,
          h = zn,
          v = Z,
          P = le;
        return p(), w("div", Jn, [k(f, {
          step: 2
        }), k(g, {
          modelValue: e(t).bannerFileKey,
          "onUpdate:modelValue": n[0] || (n[0] = u => e(t).bannerFileKey = u)
        }, null, 8, ["modelValue"]), k(i, {
          modelValue: e(t).socialProviders,
          "onUpdate:modelValue": n[1] || (n[1] = u => e(t).socialProviders = u),
          onIsValid: n[2] || (n[2] = u => _.value = u)
        }, null, 8, ["modelValue"]), k(h, {
          modelValue: e(t).isNSFW,
          "onUpdate:modelValue": n[3] || (n[3] = u => e(t).isNSFW = u)
        }, null, 8, ["modelValue"]), k(P, null, {
          default: L(() => [k(v, {
            label: ("t" in o ? o.t : e(S))("base.continue"),
            fill: "",
            tertiary: "",
            size: e(H).LARGE,
            disabled: !e(_),
            onClick: r
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  Qn = I(Hn, [
    ["__scopeId", "data-v-2e24fde9"]
  ]),
  Zn = {
    class: "header"
  },
  Yn = {
    class: "content"
  },
  Xn = {
    class: "subtitle"
  },
  ea = {
    key: 0
  },
  ta = {
    class: "controls"
  },
  na = {
    key: 0,
    class: "info"
  },
  aa = {
    class: "label"
  },
  oa = R({
    __name: "3",
    props: {
      state: {},
      jettonManagement: {},
      bclData: {}
    },
    emits: ["continue", "update"],
    setup(m, {
      emit: l
    }) {
      const a = m,
        c = l,
        _ = N(),
        t = N(a.state.step3.overview ? {
          status: "loaded",
          share: a.state.step3.share ?? 0,
          overview: a.state.step3.overview
        } : {
          status: "idle",
          share: a.state.step3.share ?? 0
        }),
        r = y => ct(y, {
          join: "emptyFractional"
        }),
        o = y => +new K(y.replaceAll(",", "") || "0").toFixed(),
        n = j({
          get: () => new K(t.value.share).toFixed(),
          set: y => t.value.share = o(y)
        }),
        f = j({
          get: () => String(t.value.share),
          set: y => {
            t.value.share = o(r(y))
          }
        }),
        g = Oe(),
        i = ke(),
        h = () => Le().success(S("memepad.jetton.new.error_alert"));
      i.onConnectError(h);
      const v = N(!1),
        P = j(() => {
          var y;
          return {
            jettonBalance: te(new K(0), a.state.step1.ticker),
            tonBalance: g.wallet.value.status === "connected" ? (y = g.wallet.value.balance) == null ? void 0 : y.tonBalance.balance : void 0
          }
        }),
        u = j(() => {
          var U;
          const y = (() => {
              var D;
              const F = g.wallet.value.status === "connected" ? (D = g.wallet.value.balance) == null ? void 0 : D.tonBalance.balance.value : void 0;
              return {
                value: F,
                label: F ? te(F, "TON").frontendWithSymbol : void 0
              }
            })(),
            A = {
              value: a.jettonManagement.fees.buyNetworkFee,
              label: `${S("memepad.jetton.fees_base")}: ${ce(a.jettonManagement.fees.buyNetworkFee)} TON`,
              details: [{
                label: `${S("memepad.jetton.fees_network")}: ${ce(a.jettonManagement.fees.buyNetworkFee)} TON`
              }, ...t.value.overview ? [{
                label: `${S("memepad.jetton.fees_platform")}: ${ce((U=t.value.overview)==null?void 0:U.platformFee)} TON`
              }] : []]
            },
            O = (() => {
              if ((y.value ? y.value.gte(A.value.plus(t.value.share)) : void 0) === !1) return {
                type: "NOT_ENOUGH_TON",
                message: S("memepad.jetton.not_enough_error", {
                  ticker: "TON"
                })
              };
              if (!new K(t.value.share).isZero() && new K(t.value.share).lt(1e-9)) return {
                type: "TOO_LOW_AMOUNT",
                message: S("memepad.new.share.error.too_low_amount")
              };
              if (a.bclData.tonForDexWithFees.lt(t.value.share)) return {
                type: "EXCEEDS_MAX_SUPPLY",
                message: S("memepad.new.share.error.exceeds_max_supply")
              }
            })(),
            T = (() => {
              if (t.value.status === "loading") return;
              if (O) return O.type === "EXCEEDS_MAX_SUPPLY" ? `${S("memepad.new.step_3.subtitle_of_supply",{percentAmount:">100%"})}` : O.type === "TOO_LOW_AMOUNT" ? `${S("memepad.new.step_3.subtitle_of_supply",{percentAmount:"<0.01%"})}` : "";
              if (!t.value.overview) {
                if (new K(t.value.share).isZero()) {
                  const D = te(new K(0), a.state.step1.ticker);
                  return S("memepad.new.step_3.subtitle", {
                    jettonsAmountWithSymbol: D.frontendWithSymbol,
                    percentAmount: "0"
                  })
                }
                return
              }
              const F = te(new K(t.value.overview.minReceive), a.state.step1.ticker);
              return t.value.overview ? S("memepad.new.step_3.subtitle", {
                jettonsAmountWithSymbol: F.frontendWithSymbol,
                percentAmount: it(t.value.overview.jettonReceivePercent)
              }) : F.frontendWithSymbol
            })();
          return {
            tonBalance: y,
            showInfo: y.value !== void 0,
            fees: A,
            error: O,
            subtitle: T,
            loading: t.value.status === "loading" || v.value
          }
        }),
        M = () => {
          var y;
          (y = _.value) == null || y.focusOnInput()
        },
        V = () => {
          u.value.error || d()
        },
        s = async () => {
          const y = new K(t.value.share),
            A = await a.jettonManagement.getJettonOverview(y.toNumber());
          y.eq(t.value.share) && ne(A) && (t.value = {
            status: "loaded",
            share: y.toNumber(),
            overview: A.data
          }, c("update", {
            share: y.toNumber(),
            overview: ne(A) ? A.data : void 0
          }))
        }, d = async () => {
          if (t.value.status === "loaded") return c("continue", {
            share: +t.value.share,
            overview: t.value.overview
          });
          v.value = !0;
          const y = await a.jettonManagement.getJettonOverview(t.value.share);
          ne(y) ? c("continue", {
            share: +t.value.share,
            overview: y.data
          }) : h(), v.value = !1
        }, {
          debouncedFunction: E
        } = dt(s, 400);
      return we(() => t.value.share, () => {
        t.value.status = "loading", E()
      }), (y, A) => {
        const O = re,
          T = xt,
          U = Ut,
          F = Mt,
          D = $t,
          X = Ke,
          ee = Z,
          ie = Nt,
          ue = Rt;
        return p(), $(ue, {
          class: "memepad-new-step-3"
        }, {
          top: L(() => [b("div", Zn, [k(O, {
            step: 3
          })])]),
          default: L(() => [b("div", Yn, [k(T, {
            ref_key: "actionControlsInputComp",
            ref: _,
            modelValue: e(n),
            "onUpdate:modelValue": A[0] || (A[0] = B => oe(n) ? n.value = B : null),
            postfix: "TON",
            modifier: r,
            onBlur: M
          }, null, 8, ["modelValue"]), b("div", Xn, [e(u).subtitle ? (p(), w("span", ea, x(e(u).subtitle), 1)) : e(u).subtitle === void 0 ? (p(), $(U, {
            key: 1,
            class: "skeleton"
          })) : C("", !0)])])]),
          "bottom-action": L(() => {
            var B, Se;
            return [b("div", ta, [e(u).showInfo ? (p(), w("div", na, [e(u).tonBalance.label && !e(u).loading ? (p(), $(F, {
              key: 0,
              balance: e(u).tonBalance.label
            }, null, 8, ["balance"])) : (p(), $(U, {
              key: 1,
              class: "skeleton"
            })), e(u).loading ? (p(), $(U, {
              key: 3,
              class: "skeleton"
            })) : (p(), $(D, {
              key: 2,
              details: e(u).fees.details,
              "total-label": e(u).fees.label,
              "error-message": (B = e(u).error) == null ? void 0 : B.message
            }, null, 8, ["details", "total-label", "error-message"]))])) : C("", !0), ((Se = e(u).error) == null ? void 0 : Se.type) === "NOT_ENOUGH_TON" ? (p(), $(X, {
              key: 1,
              reason: e(Ce).NOT_ENOUGH_FOR_AMOUNT
            }, null, 8, ["reason"])) : (p(), $(ee, {
              key: 2,
              fill: "",
              size: e(H).LARGE,
              loading: e(u).loading,
              disabled: !e(u).loading && !!e(u).error,
              tertiary: "",
              onClick: V
            }, {
              default: L(() => [b("div", aa, x(("t" in y ? y.t : e(S))("memepad.new.step_3.next_btn")), 1)]),
              _: 1
            }, 8, ["size", "loading", "disabled"]))])]
          }),
          "bottom-helpers": L(() => [k(ie, {
            modelValue: e(f),
            "onUpdate:modelValue": A[1] || (A[1] = B => oe(f) ? f.value = B : null),
            tab: e(ut).BUY,
            balances: e(P)
          }, null, 8, ["modelValue", "tab", "balances"])]),
          _: 1
        })
      }
    }
  }),
  sa = I(oa, [
    ["__scopeId", "data-v-0743d37d"]
  ]),
  la = {
    class: "memepad-jetton-logo-ticker"
  },
  ra = ["src"],
  ia = {
    class: "ticker-name-compose"
  },
  ua = {
    class: "ticker"
  },
  ca = {
    class: "name"
  },
  da = R({
    __name: "LogoTicker",
    props: {
      logoFileKey: {},
      ticker: {},
      name: {}
    },
    setup(m) {
      return (l, a) => (p(), w("div", la, [b("img", {
        src: e(se)(l.logoFileKey),
        alt: "Jetton logo"
      }, null, 8, ra), b("div", ia, [b("div", ua, x(l.ticker), 1), b("div", ca, x(l.name), 1)])]))
    }
  }),
  pa = I(da, [
    ["__scopeId", "data-v-39dff782"]
  ]),
  ma = {
    class: "memepad-new-price-details"
  },
  _a = {
    class: "key"
  },
  fa = {
    class: "value"
  },
  va = {
    class: "fee-details"
  },
  ga = {
    class: "label"
  },
  ha = {
    class: "row total"
  },
  ba = {
    class: "key"
  },
  ya = {
    key: 0,
    class: "not-enough-balance"
  },
  wa = {
    class: "label"
  },
  ka = {
    key: 1,
    class: "value"
  },
  Aa = {
    class: "label"
  },
  Sa = R({
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
    setup(m) {
      return (l, a) => {
        const c = Y,
          _ = Vt;
        return p(), w("div", ma, [(p(!0), w(G, null, Q(l.details.sections, t => (p(), w("div", {
          key: t.title,
          class: "row"
        }, [b("div", _a, x(t.title), 1), b("div", fa, [k(_, null, {
          default: L(() => [k(c, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: L(() => [b("div", va, [(p(!0), w(G, null, Q(t.details, r => (p(), w("span", {
            key: r.label,
            class: Ve({
              highlighted: r.highlight
            })
          }, x(r.label), 3))), 128))])]),
          _: 2
        }, 1024), b("span", ga, x(t.label), 1)])]))), 128)), l.details.totalSection ? (p(), w(G, {
          key: 0
        }, [a[0] || (a[0] = b("div", {
          class: "divider"
        }, null, -1)), b("div", ha, [b("div", ba, x(l.details.totalSection.title), 1), l.notEnoughBalance ? (p(), w("div", ya, [k(c, {
          name: "circle-help",
          class: "icon"
        }), b("span", wa, x(("t" in l ? l.t : e(S))("memepad.jetton.not_enough_error", {
          ticker: "TON"
        })), 1)])) : (p(), w("div", ka, [b("span", Aa, x(l.details.totalSection.label), 1)]))])], 64)) : C("", !0)])
      }
    }
  }),
  Ea = I(Sa, [
    ["__scopeId", "data-v-cd02a0d6"]
  ]),
  Fa = {
    class: "memepad-new-step-overview"
  },
  Pa = {
    class: "button-wrapper"
  },
  xa = R({
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
    setup(m, {
      emit: l
    }) {
      const a = m,
        c = l,
        _ = Oe(),
        t = ke(),
        r = () => Le().success(S("memepad.jetton.new.error_alert"));
      t.onConnectError(r);
      const o = j(() => {
          const h = a.tonUsdRate && a.form.overview.marketCapTon.mul(a.tonUsdRate),
            v = a.tonUsdRate && a.form.overview.priceTon.mul(a.tonUsdRate);
          return {
            percent: a.form.overview.tonCollectedPercent,
            collected: a.form.overview.tonCollected,
            total: a.form.overview.tonForDex,
            marketDetails: {
              marketCap: h,
              listRows: {
                price: v,
                availableSupply: a.form.overview.availableSupply,
                maxSupply: a.form.overview.maxSupply
              }
            }
          }
        }),
        n = j(() => a.jettonManagement.getPriceDetails(a.form.overview)),
        f = j(() => {
          var v;
          const h = _.wallet.value.status === "connected" ? (v = _.wallet.value.balance) == null ? void 0 : v.tonBalance : void 0;
          if (h) return h.balance.value.gte(n.value.total)
        }),
        g = N(!1),
        i = async () => {
          if (!f.value || g.value) return;
          g.value = !0, await a.launchCallback(a.form) ? c("continue") : r(), g.value = !1
        };
      return (h, v) => {
        const P = re,
          u = pa,
          M = Et,
          V = It,
          s = Ea,
          d = Ke,
          E = Z,
          y = Tt,
          A = le;
        return p(), w("div", Fa, [k(P, {
          step: 4,
          class: "heading"
        }), k(u, {
          "logo-file-key": h.form.iconFileKey,
          ticker: h.form.ticker,
          name: h.form.name,
          class: "logo-ticker"
        }, null, 8, ["logo-file-key", "ticker", "name"]), k(M, {
          "banner-file-key": h.form.bannerFileKey,
          class: "banner"
        }, null, 8, ["banner-file-key"]), k(V, pt(mt(e(o))), null, 16), k(A, null, {
          default: L(() => [k(s, {
            "with-share": !!h.form.share,
            details: e(n),
            "not-enough-balance": e(f) === !1
          }, null, 8, ["with-share", "details", "not-enough-balance"]), b("div", Pa, [k(y, null, {
            default: L(() => [e(f) ? (p(), $(E, {
              key: 1,
              label: ("t" in h ? h.t : e(S))("memepad.new.step_4.launch_btn"),
              fill: "",
              size: e(H).LARGE,
              type: e(_t).DROP,
              onClick: i
            }, null, 8, ["label", "size", "type"])) : (p(), $(d, {
              key: 0,
              reason: e(Ce).NOT_ENOUGH_FOR_AMOUNT
            }, null, 8, ["reason"]))]),
            _: 1
          })])]),
          _: 1
        })])
      }
    }
  }),
  Ma = I(xa, [
    ["__scopeId", "data-v-3140e470"]
  ]),
  $a = {
    class: "memepad-new-step-launch"
  },
  Na = {
    class: "inner"
  },
  Ra = {
    class: "icon-wrapper"
  },
  Ia = {
    class: "error-icon"
  },
  Ta = {
    class: "title"
  },
  Ua = {
    class: "subtitle"
  },
  Va = {
    class: "inner"
  },
  Oa = {
    class: "icon-wrapper"
  },
  Ca = ["src"],
  La = {
    class: "title"
  },
  ja = {
    class: "label"
  },
  Da = {
    class: "subtitle"
  },
  Ba = {
    key: 0,
    class: "rocket-wrapper"
  },
  qa = 3e3,
  Ka = R({
    __name: "Launch",
    props: {
      form: {},
      retryCallback: {
        type: Function
      }
    },
    setup(m, {
      expose: l
    }) {
      const a = me(),
        c = N("LOADING"),
        _ = [],
        t = () => new Promise(n => {
          c.value = "ROCKET", _.push(setTimeout(() => {
            n(void 0)
          }, qa))
        }),
        r = () => {
          c.value = "ERROR"
        },
        o = () => {
          _.forEach(clearTimeout), c.value = "LOADING"
        };
      return ft(() => {
        o()
      }), l({
        runSuccess: t,
        runError: r
      }), (n, f) => {
        const g = Ot,
          i = Y,
          h = Z,
          v = le,
          P = vt;
        return p(), w("div", $a, [k(g), e(c) === "ERROR" ? (p(), w(G, {
          key: 0
        }, [b("div", Na, [b("div", Ra, [b("div", Ia, [k(i, {
          name: "warning",
          class: "icon"
        })])]), b("div", Ta, x(("t" in n ? n.t : e(S))("memepad.new.failed.title", {
          ticker: n.form.ticker
        })), 1), b("div", Ua, x(("t" in n ? n.t : e(S))("memepad.new.failed.subtitle")), 1)]), k(v, null, {
          default: L(() => [k(h, {
            fill: "",
            label: ("t" in n ? n.t : e(S))("memepad.new.retry_btn_label"),
            size: e(H).LARGE,
            onClick: f[0] || (f[0] = u => n.retryCallback(n.form))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64)) : (p(), w(G, {
          key: 1
        }, [b("div", Va, [b("div", Oa, [b("img", {
          src: e(se)(n.form.iconFileKey),
          alt: "Jetton logo",
          width: "80",
          height: "80"
        }, null, 8, Ca)]), b("div", La, [f[2] || (f[2] = b("div", {
          class: "dot"
        }, null, -1)), b("div", ja, x(("t" in n ? n.t : e(S))("memepad.new.step_launch.title")), 1)]), b("div", Da, x(("t" in n ? n.t : e(S))("memepad.new.step_launch.subtitle")), 1)]), e(c) === "ROCKET" ? (p(), w("div", Ba, [k(P, {
          name: "animations/Rocket",
          size: 348
        })])) : C("", !0), k(v, null, {
          default: L(() => [k(h, {
            fill: "",
            label: ("t" in n ? n.t : e(S))("base.got_it"),
            size: e(H).LARGE,
            onClick: f[1] || (f[1] = u => e(a).push({
              name: "memepad"
            }))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64))])
      }
    }
  }),
  Ga = I(Ka, [
    ["__scopeId", "data-v-906459a1"]
  ]),
  Wa = {
    class: "memepad-new"
  },
  za = R({
    __name: "New",
    props: {
      tonUsdRate: {},
      retryPayload: {},
      jettonManagement: {},
      bclData: {}
    },
    setup(m) {
      const l = m,
        a = je(),
        c = me(),
        _ = De(),
        t = ke(),
        r = N();
      Be().getReferralToken();
      const o = l.jettonManagement.getWaitForCreateStatus(),
        n = N(l.retryPayload ? Ft(l.retryPayload) : {
          step: 1,
          step1: de.step1(),
          step2: de.step2(),
          step3: de.step3()
        });
      (() => {
        l.retryPayload ? a.memepad.memepadJettonRetry() : a.memepad.memepadJettonStepInfo()
      })();
      const g = (s, d) => {
          const E = {
            step: 2,
            step1: d,
            step2: s.step2,
            step3: s.step3
          };
          n.value = E, a.memepad.memepadJettonStepPersonalise()
        },
        i = (s, d) => {
          const E = {
            step: 3,
            step1: s.step1,
            step2: d,
            step3: s.step3
          };
          n.value = E, a.memepad.memepadJettonStepShare()
        },
        h = (s, d) => {
          const E = {
            step: 4,
            step1: s.step1,
            step2: s.step2,
            step3: d
          };
          n.value = E, a.memepad.memepadJettonStepOverview()
        },
        v = (s, d) => {
          n.value = {
            ...s,
            step3: d
          }
        },
        P = s => {
          const d = {
            step: 5,
            step1: s.step1,
            step2: s.step2,
            step3: s.step3
          };
          n.value = d
        };
      gt().initHandler(() => {
        const s = n.value;
        switch (s.step) {
          case 1:
            me().push({
              name: "memepad"
            });
            break;
          case 2:
            n.value = {
              ...s,
              step: 1
            };
            break;
          case 3:
          case 4:
            n.value = {
              ...s,
              step: s.step - 1
            };
            break;
          case 5:
            return;
          default:
            throw ye("Invalid step")
        }
      }, "memepad-new");
      let u = [];
      const M = s => {
          u.push({
            payload: s
          }), u = u.slice(-3), u.length === 3 && u.every(E => JSON.stringify(E.payload) === JSON.stringify(u[0].payload)) && t.disconnect()
        },
        V = async s => {
          const d = await l.jettonManagement.createJetton(s);
          return ne(d) ? ((async () => {
            const {
              launchTransactionHash: E,
              queryId: y
            } = d.data;
            a.memepad.memepadJettonStartLaunch({
              jettonId: y
            }), await bt(3e4);
            const A = await o.exec({
              launchTransactionHash: E,
              queryId: y
            });
            A ? a.memepad.memepadJettonEndLaunch({
              status: "success",
              purchaseAmount: s.share,
              jettonAddress: A.address,
              jettonShortname: A.shortname,
              jettonId: y
            }) : a.memepad.memepadJettonEndLaunch({
              status: "failed",
              purchaseAmount: s.share
            }), r.value ? A ? (await r.value.runSuccess(), await c.push({
              name: "memepad-jetton-shortname",
              params: {
                shortname: A.shortname
              }
            })) : r.value.runError() : (A ? a.memepad.memepadJettonLaunchShowNotification({
              status: "success",
              jettonAddress: A.address,
              jettonShortname: A.shortname,
              jettonId: y
            }) : a.memepad.memepadJettonLaunchShowNotification({
              status: "failed"
            }), yt().name !== "game" && (A ? _.showSuccessSheet(s, A.shortname) : _.showErrorSheet(s)))
          })(), !0) : (d.extra && d.extra instanceof Error && d.extra instanceof ht && a.memepad.memepadJettonLaunchWalletUiError(), M(s), !1)
        };
      return (s, d) => {
        const E = Ht,
          y = gn,
          A = Qn,
          O = sa,
          T = Ma,
          U = Ga;
        return p(), w("div", Wa, [e(n).step !== 5 ? (p(), $(E, {
          key: 0,
          step: e(n).step,
          "count-steps": 4
        }, null, 8, ["step"])) : C("", !0), e(n).step === 1 ? (p(), $(y, {
          key: 1,
          state: e(n),
          onContinue: d[0] || (d[0] = F => g(e(n), F))
        }, null, 8, ["state"])) : C("", !0), e(n).step === 2 ? (p(), $(A, {
          key: 2,
          state: e(n),
          onContinue: d[1] || (d[1] = F => i(e(n), F))
        }, null, 8, ["state"])) : C("", !0), e(n).step === 3 ? (p(), $(O, {
          key: 3,
          state: e(n),
          "jetton-management": l.jettonManagement,
          "bcl-data": s.bclData,
          onContinue: d[2] || (d[2] = F => h(e(n), F)),
          onUpdate: d[3] || (d[3] = F => v(e(n), F))
        }, null, 8, ["state", "jetton-management", "bcl-data"])) : C("", !0), e(n).step === 4 ? (p(), $(T, {
          key: 4,
          form: e(Me)(e(n)),
          "jetton-management": l.jettonManagement,
          "ton-usd-rate": s.tonUsdRate,
          "launch-callback": V,
          onContinue: d[4] || (d[4] = F => P(e(n)))
        }, null, 8, ["form", "jetton-management", "ton-usd-rate"])) : C("", !0), e(n).step === 5 ? (p(), $(U, {
          key: 5,
          ref_key: "stepLaunchApi",
          ref: r,
          form: e(Me)(e(n)),
          "retry-callback": e(_).retry
        }, null, 8, ["form", "retry-callback"])) : C("", !0)])
      }
    }
  }),
  Ja = I(za, [
    ["__scopeId", "data-v-7a28b46a"]
  ]),
  Ha = {
    class: "memepad-new-page page"
  },
  Qa = R({
    __name: "new",
    setup(m) {
      const {
        popRetryPayload: l
      } = De(), {
        memepadManagementSdk: a,
        bclData: c
      } = Lt(), {
        tonUsdRate: _
      } = jt(), t = je();
      return (() => {
        const o = wt("memepadNewFrom", xe) ?? xe.NA;
        Dt(), Be().getReferralToken(), t.memepad.memepadJettonStart({
          source: o
        })
      })(), (o, n) => {
        const f = Ja,
          g = Ct;
        return p(), w("div", Ha, [e(a) && e(c) ? (p(), $(f, {
          key: 0,
          "bcl-data": e(c),
          "ton-usd-rate": e(_),
          "retry-payload": e(l)(),
          "jetton-management": e(a)
        }, null, 8, ["bcl-data", "ton-usd-rate", "retry-payload", "jetton-management"])) : (p(), $(g, {
          key: 1
        }))])
      }
    }
  }),
  fo = I(Qa, [
    ["__scopeId", "data-v-a8e1a3f4"]
  ]);
export {
  fo as
  default
};