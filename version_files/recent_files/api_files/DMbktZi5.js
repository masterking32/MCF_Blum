import {
  a as ie,
  _ as fe
} from "./CJKr-INT.js";
import {
  cC as te,
  d as re,
  av as B,
  at as ce,
  aw as ae,
  y as j,
  j as ne,
  T as le,
  o as q,
  c as I,
  e as k,
  a as M,
  t as Z,
  cD as de,
  M as O,
  E as P,
  w as _e,
  c6 as ve,
  n as me,
  c7 as pe,
  f as se,
  c1 as J,
  a2 as ge,
  F as he,
  q as xe,
  D as ye,
  ac as Y,
  an as ee,
  aC as Fe
} from "./DrkX69Hr.js";
var N = {
  exports: {}
};
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = v;

  function y(f) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? y = function(n) {
      return typeof n
    } : y = function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, y(f)
  }

  function v(f) {
    var o = typeof f == "string" || f instanceof String;
    if (!o) {
      var n = y(f);
      throw f === null ? n = "null" : n === "object" && (n = f.constructor.name), new TypeError("Expected a string but received a ".concat(n))
    }
  }
  s.exports = l.default, s.exports.default = l.default
})(N, N.exports);
var T = N.exports,
  H = {
    exports: {}
  };
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = y;

  function y() {
    var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      f = arguments.length > 1 ? arguments[1] : void 0;
    for (var o in f) typeof v[o] > "u" && (v[o] = f[o]);
    return v
  }
  s.exports = l.default, s.exports.default = l.default
})(H, H.exports);
var K = H.exports,
  z = {
    exports: {}
  };
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = o;
  var y = v(T);

  function v(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  }

  function f(n) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? f = function(i) {
      return typeof i
    } : f = function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i
    }, f(n)
  }

  function o(n, a) {
    (0, y.default)(n);
    var i, h;
    f(a) === "object" ? (i = a.min || 0, h = a.max) : (i = arguments[1], h = arguments[2]);
    var _ = encodeURI(n).split(/%..|./).length - 1;
    return _ >= i && (typeof h > "u" || _ <= h)
  }
  s.exports = l.default, s.exports.default = l.default
})(z, z.exports);
var be = z.exports,
  G = {
    exports: {}
  },
  Q = {
    exports: {}
  };
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = n;
  var y = f(T),
    v = f(K);

  function f(a) {
    return a && a.__esModule ? a : {
      default: a
    }
  }
  var o = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1
  };

  function n(a, i) {
    (0, y.default)(a), i = (0, v.default)(i, o), i.allow_trailing_dot && a[a.length - 1] === "." && (a = a.substring(0, a.length - 1)), i.allow_wildcard === !0 && a.indexOf("*.") === 0 && (a = a.substring(2));
    var h = a.split("."),
      _ = h[h.length - 1];
    return i.require_tld && (h.length < 2 || !i.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(_) || /\s/.test(_)) || !i.allow_numeric_tld && /^\d+$/.test(_) ? !1 : h.every(function(r) {
      return !(r.length > 63 && !i.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(r) || /[\uff01-\uff5e]/.test(r) || /^-|-$/.test(r) || !i.allow_underscores && /_/.test(r))
    })
  }
  s.exports = l.default, s.exports.default = l.default
})(Q, Q.exports);
var ue = Q.exports,
  W = {
    exports: {}
  };
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = h;
  var y = v(T);

  function v(_) {
    return _ && _.__esModule ? _ : {
      default: _
    }
  }
  var f = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    o = "(".concat(f, "[.]){3}").concat(f),
    n = new RegExp("^".concat(o, "$")),
    a = "(?:[0-9a-fA-F]{1,4})",
    i = new RegExp("^(" + "(?:".concat(a, ":){7}(?:").concat(a, "|:)|") + "(?:".concat(a, ":){6}(?:").concat(o, "|:").concat(a, "|:)|") + "(?:".concat(a, ":){5}(?::").concat(o, "|(:").concat(a, "){1,2}|:)|") + "(?:".concat(a, ":){4}(?:(:").concat(a, "){0,1}:").concat(o, "|(:").concat(a, "){1,3}|:)|") + "(?:".concat(a, ":){3}(?:(:").concat(a, "){0,2}:").concat(o, "|(:").concat(a, "){1,4}|:)|") + "(?:".concat(a, ":){2}(?:(:").concat(a, "){0,3}:").concat(o, "|(:").concat(a, "){1,5}|:)|") + "(?:".concat(a, ":){1}(?:(:").concat(a, "){0,4}:").concat(o, "|(:").concat(a, "){1,6}|:)|") + "(?::((?::".concat(a, "){0,5}:").concat(o, "|(?::").concat(a, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

  function h(_) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, y.default)(_), r = String(r), r ? r === "4" ? n.test(_) : r === "6" ? i.test(_) : !1 : h(_, 4) || h(_, 6)
  }
  s.exports = l.default, s.exports.default = l.default
})(W, W.exports);
var oe = W.exports;
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = $;
  var y = a(T),
    v = a(be),
    f = a(ue),
    o = a(oe),
    n = a(K);

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var i = {
      allow_display_name: !1,
      allow_underscores: !1,
      require_display_name: !1,
      allow_utf8_local_part: !0,
      require_tld: !0,
      blacklisted_chars: "",
      ignore_max_length: !1,
      host_blacklist: [],
      host_whitelist: []
    },
    h = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i,
    _ = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
    r = /^[a-z\d]+$/,
    F = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
    c = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
    x = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
    u = 254;

  function S(e) {
    var t = e.replace(/^"(.+)"$/, "$1");
    if (!t.trim()) return !1;
    var d = /[\.";<>]/.test(t);
    if (d) {
      if (t === e) return !1;
      var m = t.split('"').length === t.split('\\"').length;
      if (!m) return !1
    }
    return !0
  }

  function $(e, t) {
    if ((0, y.default)(e), t = (0, n.default)(t, i), t.require_display_name || t.allow_display_name) {
      var d = e.match(h);
      if (d) {
        var m = d[1];
        if (e = e.replace(m, "").replace(/(^<|>$)/g, ""), m.endsWith(" ") && (m = m.slice(0, -1)), !S(m)) return !1
      } else if (t.require_display_name) return !1
    }
    if (!t.ignore_max_length && e.length > u) return !1;
    var b = e.split("@"),
      E = b.pop(),
      w = E.toLowerCase();
    if (t.host_blacklist.includes(w) || t.host_whitelist.length > 0 && !t.host_whitelist.includes(w)) return !1;
    var g = b.join("@");
    if (t.domain_specific_validation && (w === "gmail.com" || w === "googlemail.com")) {
      g = g.toLowerCase();
      var p = g.split("+")[0];
      if (!(0, v.default)(p.replace(/\./g, ""), {
          min: 6,
          max: 30
        })) return !1;
      for (var R = p.split("."), D = 0; D < R.length; D++)
        if (!r.test(R[D])) return !1
    }
    if (t.ignore_max_length === !1 && (!(0, v.default)(g, {
        max: 64
      }) || !(0, v.default)(E, {
        max: 254
      }))) return !1;
    if (!(0, f.default)(E, {
        require_tld: t.require_tld,
        ignore_max_length: t.ignore_max_length,
        allow_underscores: t.allow_underscores
      })) {
      if (!t.allow_ip_domain) return !1;
      if (!(0, o.default)(E)) {
        if (!E.startsWith("[") || !E.endsWith("]")) return !1;
        var C = E.slice(1, -1);
        if (C.length === 0 || !(0, o.default)(C)) return !1
      }
    }
    if (g[0] === '"') return g = g.slice(1, g.length - 1), t.allow_utf8_local_part ? x.test(g) : F.test(g);
    for (var U = t.allow_utf8_local_part ? c : _, L = g.split("."), V = 0; V < L.length; V++)
      if (!U.test(L[V])) return !1;
    return !(t.blacklisted_chars && g.search(new RegExp("[".concat(t.blacklisted_chars, "]+"), "g")) !== -1)
  }
  s.exports = l.default, s.exports.default = l.default
})(G, G.exports);
var we = G.exports;
const Ee = te(we);

function Se(s, l) {
  return typeof s == "string" && Ee(s, l)
}
var X = {
  exports: {}
};
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = $;
  var y = n(T),
    v = n(ue),
    f = n(oe),
    o = n(K);

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function a(e, t) {
    return F(e) || r(e, t) || h(e, t) || i()
  }

  function i() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }

  function h(e, t) {
    if (e) {
      if (typeof e == "string") return _(e, t);
      var d = Object.prototype.toString.call(e).slice(8, -1);
      if (d === "Object" && e.constructor && (d = e.constructor.name), d === "Map" || d === "Set") return Array.from(e);
      if (d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)) return _(e, t)
    }
  }

  function _(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var d = 0, m = new Array(t); d < t; d++) m[d] = e[d];
    return m
  }

  function r(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
      var d = [],
        m = !0,
        b = !1,
        E = void 0;
      try {
        for (var w = e[Symbol.iterator](), g; !(m = (g = w.next()).done) && (d.push(g.value), !(t && d.length === t)); m = !0);
      } catch (p) {
        b = !0, E = p
      } finally {
        try {
          !m && w.return != null && w.return()
        } finally {
          if (b) throw E
        }
      }
      return d
    }
  }

  function F(e) {
    if (Array.isArray(e)) return e
  }
  var c = {
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
    x = /^\[([^\]]+)\](?::([0-9]+))?$/;

  function u(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]"
  }

  function S(e, t) {
    for (var d = 0; d < t.length; d++) {
      var m = t[d];
      if (e === m || u(m) && m.test(e)) return !0
    }
    return !1
  }

  function $(e, t) {
    if ((0, y.default)(e), !e || /[\s<>]/.test(e) || e.indexOf("mailto:") === 0 || (t = (0, o.default)(t, c), t.validate_length && e.length >= 2083) || !t.allow_fragments && e.includes("#") || !t.allow_query_components && (e.includes("?") || e.includes("&"))) return !1;
    var d, m, b, E, w, g, p, R;
    if (p = e.split("#"), e = p.shift(), p = e.split("?"), e = p.shift(), p = e.split("://"), p.length > 1) {
      if (d = p.shift().toLowerCase(), t.require_valid_protocol && t.protocols.indexOf(d) === -1) return !1
    } else {
      if (t.require_protocol) return !1;
      if (e.slice(0, 2) === "//") {
        if (!t.allow_protocol_relative_urls) return !1;
        p[0] = e.slice(2)
      }
    }
    if (e = p.join("://"), e === "") return !1;
    if (p = e.split("/"), e = p.shift(), e === "" && !t.require_host) return !0;
    if (p = e.split("@"), p.length > 1) {
      if (t.disallow_auth || p[0] === "" || (m = p.shift(), m.indexOf(":") >= 0 && m.split(":").length > 2)) return !1;
      var D = m.split(":"),
        C = a(D, 2),
        U = C[0],
        L = C[1];
      if (U === "" && L === "") return !1
    }
    E = p.join("@"), g = null, R = null;
    var V = E.match(x);
    if (V ? (b = "", R = V[1], g = V[2] || null) : (p = E.split(":"), b = p.shift(), p.length && (g = p.join(":"))), g !== null && g.length > 0) {
      if (w = parseInt(g, 10), !/^[0-9]+$/.test(g) || w <= 0 || w > 65535) return !1
    } else if (t.require_port) return !1;
    return t.host_whitelist ? S(b, t.host_whitelist) : b === "" && !t.require_host ? !0 : !(!(0, f.default)(b) && !(0, v.default)(b, t) && (!R || !(0, f.default)(R, 6)) || (b = b || R, t.host_blacklist && S(b, t.host_blacklist)))
  }
  s.exports = l.default, s.exports.default = l.default
})(X, X.exports);
var $e = X.exports;
const qe = te($e);

function Re(s, l) {
  return typeof s == "string" && qe(s, l)
}
const Ve = ["for"],
  Ae = {
    key: 0,
    class: "error-caption"
  },
  Ie = ["id", "placeholder"],
  De = re({
    __name: "Textarea",
    props: B({
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
    emits: B(["change", "input", "focus", "blur"], ["update:modelValue"]),
    setup(s, {
      emit: l
    }) {
      const y = s,
        v = l,
        f = ce(),
        o = ae(s, "modelValue"),
        n = j(),
        a = j(!1),
        i = () => {
          a.value = !0, v("focus", n.value)
        },
        h = () => {
          a.value = !1, v("blur", n.value)
        },
        _ = ne(() => {
          const c = [];
          return (y.isError || y.errorCaption) && c.push("is-error"), c
        });
      let r;
      return le(o, () => {
        if (!n.value) return;
        n.value.style.height = "auto";
        const c = n.value.scrollHeight,
          x = r !== void 0 ? c - r : 0;
        r = c, n.value.style.height = `${c}px`, x !== 0 && pe(() => window.document.body.scrollBy(0, x))
      }), (c, x) => {
        const u = ie;
        return q(), I("div", {
          class: me(["kit-textarea", k(_)])
        }, [c.label ? (q(), I("label", {
          key: 0,
          for: k(f)
        }, [M("span", null, Z(c.label), 1), c.errorCaption ? (q(), I("div", Ae, [x[3] || (x[3] = M("img", {
          src: de,
          alt: "Warning icon"
        }, null, -1)), M("div", null, Z(c.errorCaption), 1)])) : c.maxLength ? (q(), O(u, {
          key: 1,
          value: o.value,
          "max-length": c.maxLength
        }, null, 8, ["value", "max-length"])) : P("", !0)], 8, Ve)) : P("", !0), _e(M("textarea", {
          id: k(f),
          ref_key: "textareaRef",
          ref: n,
          "onUpdate:modelValue": x[0] || (x[0] = S => o.value = S),
          placeholder: c.placeholder,
          onChange: x[1] || (x[1] = S => c.$emit("change")),
          onInput: x[2] || (x[2] = S => c.$emit("input")),
          onFocus: i,
          onBlur: h
        }, null, 40, Ie), [
          [ve, o.value]
        ])], 2)
      }
    }
  }),
  Ce = se(De, [
    ["__scopeId", "data-v-fbb8bb63"]
  ]);
var A = (s => (s.STRING = "STRING", s.TEXTAREA = "TEXTAREA", s))(A || {});
const ke = re({
    __name: "KitForm",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: B(["channel"], ["update:modelValue"]),
    setup(s, {
      emit: l
    }) {
      const y = l,
        v = ae(s, "modelValue"),
        f = r => {
          r._ctx || (r._ctx = {
            initialValue: r.value,
            errors: []
          })
        };
      le(v, () => v.value.forEach(f), {
        immediate: !0
      });
      const o = () => {},
        n = r => r._ctx.errors = i(r),
        a = ne(() => v.value.every(r => i(r).length === 0));
      J(() => v.value.forEach(r => {
        r._ctx && r._ctx.errors.length > 0 && (r._ctx.errors = i(r))
      }));
      const i = r => {
          var c, x, u, S, $;
          const F = [];
          switch (r.type) {
            case A.STRING:
            case A.TEXTAREA: {
              if ((c = r.validators) != null && c.required && !r.value && F.push({
                  msg: "Required to continue",
                  isVisible: !0
                }), (x = r.validators) != null && x.maxLength) {
                const e = r.validators.maxLength.value - r.value.length;
                e < 0 && F.push({
                  msg: `${e*-1} over`,
                  isVisible: !1
                })
              }
              if (r.type === A.STRING && ((u = r.validators) != null && u.url)) {
                const e = r.validators.url.includePrefix && ((S = r.props) != null && S.prefix) ? `${r.props.prefix}${r.value}` : r.value;
                Re(e) || F.push({
                  msg: "Invalid URL",
                  isVisible: !0
                })
              }
              r.type === A.STRING && (($ = r.validators) != null && $.email) && (Se(r.value) || F.push({
                msg: "Invalid email",
                isVisible: !0
              }));
              break
            }
            default:
              throw ge("unknown type")
          }
          if (r.customValidator) {
            const e = r.customValidator(r.value);
            e && F.push({
              msg: e,
              isVisible: !0
            })
          }
          return F
        },
        h = r => {
          var c;
          const F = (c = r._ctx) == null ? void 0 : c.errors.find(x => x.isVisible);
          return F == null ? void 0 : F.msg
        },
        _ = r => {
          var c;
          const F = (c = r._ctx) == null ? void 0 : c.errors.length;
          return F ? F > 0 : !1
        };
      return J(() => y("channel", {
        isFormValid: a.value
      })), (r, F) => {
        const c = fe,
          x = Ce;
        return q(), I("form", {
          class: "kit-form",
          novalidate: "",
          onSubmit: F[0] || (F[0] = Fe(u => o(), ["prevent"]))
        }, [(q(!0), I(he, null, xe(v.value, u => {
          var S, $, e, t, d, m, b, E;
          return q(), I("div", {
            key: u.key,
            class: "field"
          }, [u.type === k(A).STRING ? (q(), O(c, ee({
            key: 0,
            modelValue: u.value,
            "onUpdate:modelValue": w => u.value = w,
            ref_for: !0
          }, u.props, {
            "error-caption": h(u),
            "is-error": _(u),
            "max-length": ($ = (S = u.validators) == null ? void 0 : S.maxLength) == null ? void 0 : $.value,
            class: "input",
            onChange: w => n(u),
            onFocus: (e = u.eventHandlers) == null ? void 0 : e.onFocus,
            onBlur: (t = u.eventHandlers) == null ? void 0 : t.onBlur
          }), {
            label: ye(() => [Y(r.$slots, `${u.key}-label`, {}, void 0, !0)]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : P("", !0), u.type === k(A).TEXTAREA ? (q(), O(x, ee({
            key: 1,
            modelValue: u.value,
            "onUpdate:modelValue": w => u.value = w,
            ref_for: !0
          }, u.props, {
            "error-caption": h(u),
            "is-error": _(u),
            "max-length": (m = (d = u.validators) == null ? void 0 : d.maxLength) == null ? void 0 : m.value,
            class: "textarea",
            onChange: w => n(u),
            onFocus: (b = u.eventHandlers) == null ? void 0 : b.onFocus,
            onBlur: (E = u.eventHandlers) == null ? void 0 : E.onBlur
          }), null, 16, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : P("", !0), Y(r.$slots, `${u.key}-after`, {}, void 0, !0)])
        }), 128))], 32)
      }
    }
  }),
  Me = se(ke, [
    ["__scopeId", "data-v-f6b6edd0"]
  ]);
export {
  A as F, Me as _
};