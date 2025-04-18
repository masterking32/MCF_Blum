import {
  cK as ne,
  d as J,
  cL as ie,
  j as D,
  o as E,
  c as q,
  e as k,
  ag as T,
  G as A,
  f as Y,
  ay as z,
  aw as fe,
  az as le,
  y as te,
  V as se,
  b as ce,
  a as B,
  cM as de,
  t as _e,
  N,
  w as ve,
  c0 as me,
  n as pe,
  cf as ge,
  b$ as re,
  a4 as he,
  C as O,
  F as xe,
  q as ye,
  D as be,
  aq as ae,
  aE as Fe
} from "./CkAWtTNJ.js";
import {
  _ as we,
  b as $e,
  a as Ee
} from "./yh1FHjfU.js";
import {
  _ as Se
} from "./_0AndDZn.js";
var G = {
  exports: {}
};
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = _;

  function g(u) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? g = function(n) {
      return typeof n
    } : g = function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, g(u)
  }

  function _(u) {
    var o = typeof u == "string" || u instanceof String;
    if (!o) {
      var n = g(u);
      throw u === null ? n = "null" : n === "object" && (n = u.constructor.name), new TypeError("Expected a string but received a ".concat(n))
    }
  }
  s.exports = l.default, s.exports.default = l.default
})(G, G.exports);
var P = G.exports,
  K = {
    exports: {}
  };
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = g;

  function g() {
    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      u = arguments.length > 1 ? arguments[1] : void 0;
    for (var o in u) typeof _[o] > "u" && (_[o] = u[o]);
    return _
  }
  s.exports = l.default, s.exports.default = l.default
})(K, K.exports);
var ee = K.exports,
  Q = {
    exports: {}
  };
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = o;
  var g = _(P);

  function _(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  }

  function u(n) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? u = function(i) {
      return typeof i
    } : u = function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i
    }, u(n)
  }

  function o(n, r) {
    (0, g.default)(n);
    var i, x;
    u(r) === "object" ? (i = r.min || 0, x = r.max) : (i = arguments[1], x = arguments[2]);
    var v = encodeURI(n).split(/%..|./).length - 1;
    return v >= i && (typeof x > "u" || v <= x)
  }
  s.exports = l.default, s.exports.default = l.default
})(Q, Q.exports);
var Ve = Q.exports,
  W = {
    exports: {}
  },
  X = {
    exports: {}
  };
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = n;
  var g = u(P),
    _ = u(ee);

  function u(r) {
    return r && r.__esModule ? r : {
      default: r
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

  function n(r, i) {
    (0, g.default)(r), i = (0, _.default)(i, o), i.allow_trailing_dot && r[r.length - 1] === "." && (r = r.substring(0, r.length - 1)), i.allow_wildcard === !0 && r.indexOf("*.") === 0 && (r = r.substring(2));
    var x = r.split("."),
      v = x[x.length - 1];
    return i.require_tld && (x.length < 2 || !i.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(v) || /\s/.test(v)) || !i.allow_numeric_tld && /^\d+$/.test(v) ? !1 : x.every(function(a) {
      return !(a.length > 63 && !i.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(a) || /[\uff01-\uff5e]/.test(a) || /^-|-$/.test(a) || !i.allow_underscores && /_/.test(a))
    })
  }
  s.exports = l.default, s.exports.default = l.default
})(X, X.exports);
var oe = X.exports,
  j = {
    exports: {}
  };
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = x;
  var g = _(P);

  function _(v) {
    return v && v.__esModule ? v : {
      default: v
    }
  }
  var u = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    o = "(".concat(u, "[.]){3}").concat(u),
    n = new RegExp("^".concat(o, "$")),
    r = "(?:[0-9a-fA-F]{1,4})",
    i = new RegExp("^(" + "(?:".concat(r, ":){7}(?:").concat(r, "|:)|") + "(?:".concat(r, ":){6}(?:").concat(o, "|:").concat(r, "|:)|") + "(?:".concat(r, ":){5}(?::").concat(o, "|(:").concat(r, "){1,2}|:)|") + "(?:".concat(r, ":){4}(?:(:").concat(r, "){0,1}:").concat(o, "|(:").concat(r, "){1,3}|:)|") + "(?:".concat(r, ":){3}(?:(:").concat(r, "){0,2}:").concat(o, "|(:").concat(r, "){1,4}|:)|") + "(?:".concat(r, ":){2}(?:(:").concat(r, "){0,3}:").concat(o, "|(:").concat(r, "){1,5}|:)|") + "(?:".concat(r, ":){1}(?:(:").concat(r, "){0,4}:").concat(o, "|(:").concat(r, "){1,6}|:)|") + "(?::((?::".concat(r, "){0,5}:").concat(o, "|(?::").concat(r, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

  function x(v) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, g.default)(v), a = String(a), a ? a === "4" ? n.test(v) : a === "6" ? i.test(v) : !1 : x(v, 4) || x(v, 6)
  }
  s.exports = l.default, s.exports.default = l.default
})(j, j.exports);
var ue = j.exports;
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = V;
  var g = r(P),
    _ = r(Ve),
    u = r(oe),
    o = r(ue),
    n = r(ee);

  function r(e) {
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
    x = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i,
    v = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
    a = /^[a-z\d]+$/,
    b = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
    f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
    y = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
    c = 254;

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

  function V(e, t) {
    if ((0, g.default)(e), t = (0, n.default)(t, i), t.require_display_name || t.allow_display_name) {
      var d = e.match(x);
      if (d) {
        var m = d[1];
        if (e = e.replace(m, "").replace(/(^<|>$)/g, ""), m.endsWith(" ") && (m = m.slice(0, -1)), !S(m)) return !1
      } else if (t.require_display_name) return !1
    }
    if (!t.ignore_max_length && e.length > c) return !1;
    var F = e.split("@"),
      $ = F.pop(),
      w = $.toLowerCase();
    if (t.host_blacklist.includes(w) || t.host_whitelist.length > 0 && !t.host_whitelist.includes(w)) return !1;
    var h = F.join("@");
    if (t.domain_specific_validation && (w === "gmail.com" || w === "googlemail.com")) {
      h = h.toLowerCase();
      var p = h.split("+")[0];
      if (!(0, _.default)(p.replace(/\./g, ""), {
          min: 6,
          max: 30
        })) return !1;
      for (var R = p.split("."), L = 0; L < R.length; L++)
        if (!a.test(R[L])) return !1
    }
    if (t.ignore_max_length === !1 && (!(0, _.default)(h, {
        max: 64
      }) || !(0, _.default)($, {
        max: 254
      }))) return !1;
    if (!(0, u.default)($, {
        require_tld: t.require_tld,
        ignore_max_length: t.ignore_max_length,
        allow_underscores: t.allow_underscores
      })) {
      if (!t.allow_ip_domain) return !1;
      if (!(0, o.default)($)) {
        if (!$.startsWith("[") || !$.endsWith("]")) return !1;
        var M = $.slice(1, -1);
        if (M.length === 0 || !(0, o.default)(M)) return !1
      }
    }
    if (h[0] === '"') return h = h.slice(1, h.length - 1), t.allow_utf8_local_part ? y.test(h) : b.test(h);
    for (var H = t.allow_utf8_local_part ? f : v, U = h.split("."), C = 0; C < U.length; C++)
      if (!H.test(U[C])) return !1;
    return !(t.blacklisted_chars && h.search(new RegExp("[".concat(t.blacklisted_chars, "]+"), "g")) !== -1)
  }
  s.exports = l.default, s.exports.default = l.default
})(W, W.exports);
var qe = W.exports;
const ke = ne(qe);

function Ae(s, l) {
  return typeof s == "string" && ke(s, l)
}
var Z = {
  exports: {}
};
(function(s, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = V;
  var g = n(P),
    _ = n(oe),
    u = n(ue),
    o = n(ee);

  function n(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function r(e, t) {
    return b(e) || a(e, t) || x(e, t) || i()
  }

  function i() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }

  function x(e, t) {
    if (e) {
      if (typeof e == "string") return v(e, t);
      var d = Object.prototype.toString.call(e).slice(8, -1);
      if (d === "Object" && e.constructor && (d = e.constructor.name), d === "Map" || d === "Set") return Array.from(e);
      if (d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)) return v(e, t)
    }
  }

  function v(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var d = 0, m = new Array(t); d < t; d++) m[d] = e[d];
    return m
  }

  function a(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
      var d = [],
        m = !0,
        F = !1,
        $ = void 0;
      try {
        for (var w = e[Symbol.iterator](), h; !(m = (h = w.next()).done) && (d.push(h.value), !(t && d.length === t)); m = !0);
      } catch (p) {
        F = !0, $ = p
      } finally {
        try {
          !m && w.return != null && w.return()
        } finally {
          if (F) throw $
        }
      }
      return d
    }
  }

  function b(e) {
    if (Array.isArray(e)) return e
  }
  var f = {
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
    y = /^\[([^\]]+)\](?::([0-9]+))?$/;

  function c(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]"
  }

  function S(e, t) {
    for (var d = 0; d < t.length; d++) {
      var m = t[d];
      if (e === m || c(m) && m.test(e)) return !0
    }
    return !1
  }

  function V(e, t) {
    if ((0, g.default)(e), !e || /[\s<>]/.test(e) || e.indexOf("mailto:") === 0 || (t = (0, o.default)(t, f), t.validate_length && e.length >= 2083) || !t.allow_fragments && e.includes("#") || !t.allow_query_components && (e.includes("?") || e.includes("&"))) return !1;
    var d, m, F, $, w, h, p, R;
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
      var L = m.split(":"),
        M = r(L, 2),
        H = M[0],
        U = M[1];
      if (H === "" && U === "") return !1
    }
    $ = p.join("@"), h = null, R = null;
    var C = $.match(y);
    if (C ? (F = "", R = C[1], h = C[2] || null) : (p = $.split(":"), F = p.shift(), p.length && (h = p.join(":"))), h !== null && h.length > 0) {
      if (w = parseInt(h, 10), !/^[0-9]+$/.test(h) || w <= 0 || w > 65535) return !1
    } else if (t.require_port) return !1;
    return t.host_whitelist ? S(F, t.host_whitelist) : F === "" && !t.require_host ? !0 : !(!(0, u.default)(F) && !(0, _.default)(F, t) && (!R || !(0, u.default)(R, 6)) || (F = F || R, t.host_blacklist && S(F, t.host_blacklist)))
  }
  s.exports = l.default, s.exports.default = l.default
})(Z, Z.exports);
var Re = Z.exports;
const Ce = ne(Re);

function Ie(s, l) {
  return typeof s == "string" && Ce(s, l)
}
const De = {
    class: "kit-bottom-sheet-content"
  },
  Te = {
    key: 0,
    class: "header"
  },
  Le = {
    key: 1,
    class: "title"
  },
  Me = {
    key: 2,
    class: "subtitle"
  },
  Pe = {
    key: 3,
    class: "footer"
  },
  Ue = J({
    __name: "BottomSheetContent",
    setup(s) {
      const l = ie(),
        g = D(() => n("header")),
        _ = D(() => n("title")),
        u = D(() => n("subTitle")),
        o = D(() => n("footer")),
        n = r => typeof l[r] == "function" && l[r]().length > 0;
      return (r, i) => (E(), q("div", De, [k(g) ? (E(), q("div", Te, [T(r.$slots, "header", {}, void 0, !0)])) : A("", !0), k(_) ? (E(), q("div", Le, [T(r.$slots, "title", {}, void 0, !0)])) : A("", !0), k(u) ? (E(), q("div", Me, [T(r.$slots, "subTitle", {}, void 0, !0)])) : A("", !0), k(o) ? (E(), q("div", Pe, [T(r.$slots, "footer", {}, void 0, !0)])) : A("", !0)]))
    }
  }),
  je = Y(Ue, [
    ["__scopeId", "data-v-8c9f245f"]
  ]),
  Be = ["for"],
  Oe = {
    key: 0,
    class: "error-caption"
  },
  Ne = {
    class: "wrapper"
  },
  He = ["id", "placeholder"],
  ze = J({
    __name: "Textarea",
    props: z({
      errorCaption: {},
      isError: {
        type: Boolean,
        default: !1
      },
      maxLength: {},
      isOptional: {
        type: Boolean,
        default: !1
      },
      loading: {
        type: Boolean
      },
      label: {},
      placeholder: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: z(["change", "input", "focus", "blur"], ["update:modelValue"]),
    setup(s, {
      emit: l
    }) {
      const g = s,
        _ = l,
        u = fe(),
        o = le(s, "modelValue"),
        n = te(),
        r = te(!1),
        i = () => {
          r.value = !0, _("focus", n.value)
        },
        x = () => {
          r.value = !1, _("blur", n.value)
        },
        v = D(() => {
          const f = [];
          return (g.isError || g.errorCaption) && f.push("is-error"), f
        });
      let a;
      return se(o, () => {
        if (!n.value) return;
        n.value.style.height = "auto";
        const f = n.value.scrollHeight,
          y = a !== void 0 ? f - a : 0;
        a = f, n.value.style.height = `${f}px`, y !== 0 && ge(() => window.document.body.scrollBy(0, y))
      }), (f, y) => {
        const c = we,
          S = $e,
          V = Se;
        return E(), q("div", {
          class: pe(["kit-textarea", k(v)])
        }, [f.label ? (E(), q("label", {
          key: 0,
          for: k(u)
        }, [ce(c, {
          title: f.label,
          "is-optional": f.isOptional
        }, null, 8, ["title", "is-optional"]), f.errorCaption ? (E(), q("div", Oe, [y[3] || (y[3] = B("img", {
          src: de,
          alt: "Warning icon"
        }, null, -1)), B("div", null, _e(f.errorCaption), 1)])) : f.maxLength ? (E(), N(S, {
          key: 1,
          value: o.value,
          "max-length": f.maxLength
        }, null, 8, ["value", "max-length"])) : A("", !0)], 8, Be)) : A("", !0), B("div", Ne, [ve(B("textarea", {
          id: k(u),
          ref_key: "textareaRef",
          ref: n,
          "onUpdate:modelValue": y[0] || (y[0] = e => o.value = e),
          placeholder: f.placeholder,
          onChange: y[1] || (y[1] = e => f.$emit("change")),
          onInput: y[2] || (y[2] = e => f.$emit("input")),
          onFocus: i,
          onBlur: x
        }, null, 40, He), [
          [me, o.value]
        ]), f.loading ? (E(), N(V, {
          key: 0,
          class: "skeleton"
        })) : A("", !0)])], 2)
      }
    }
  }),
  Ge = Y(ze, [
    ["__scopeId", "data-v-6941b334"]
  ]);
var I = (s => (s.STRING = "STRING", s.TEXTAREA = "TEXTAREA", s))(I || {});
const Ke = J({
    __name: "KitForm",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: z(["channel"], ["update:modelValue"]),
    setup(s, {
      emit: l
    }) {
      const g = l,
        _ = le(s, "modelValue"),
        u = a => {
          a._ctx || (a._ctx = {
            initialValue: a.value,
            errors: []
          })
        };
      se(_, () => _.value.forEach(u), {
        immediate: !0
      });
      const o = () => {},
        n = a => a._ctx.errors = i(a),
        r = D(() => _.value.every(a => i(a).length === 0));
      re(() => _.value.forEach(a => {
        a._ctx && a._ctx.errors.length > 0 && (a._ctx.errors = i(a))
      }));
      const i = a => {
          var f, y, c, S, V;
          const b = [];
          switch (a.type) {
            case I.STRING:
            case I.TEXTAREA: {
              if ((f = a.validators) != null && f.required && !a.value && b.push({
                  msg: O("form.rules.required"),
                  isVisible: !0
                }), (y = a.validators) != null && y.maxLength) {
                const e = a.validators.maxLength.value - a.value.length;
                e < 0 && b.push({
                  msg: O("form.rules.max_length", {
                    overCount: String(e * -1)
                  }),
                  isVisible: !1
                })
              }
              if (a.type === I.STRING && ((c = a.validators) != null && c.url)) {
                const e = a.validators.url.includePrefix && ((S = a.props) != null && S.prefix) ? `${a.props.prefix}${a.value}` : a.value;
                Ie(e) || b.push({
                  msg: O("form.rules.is_url"),
                  isVisible: !0
                })
              }
              a.type === I.STRING && ((V = a.validators) != null && V.email) && (Ae(a.value) || b.push({
                msg: O("form.rules.is_email"),
                isVisible: !0
              }));
              break
            }
            default:
              throw he("unknown type")
          }
          if (a.customValidator) {
            const e = a.customValidator(a.value);
            e && b.push({
              msg: e,
              isVisible: !0
            })
          }
          return b
        },
        x = a => {
          var f;
          const b = (f = a._ctx) == null ? void 0 : f.errors.find(y => y.isVisible);
          return b == null ? void 0 : b.msg
        },
        v = a => {
          var f;
          const b = (f = a._ctx) == null ? void 0 : f.errors.length;
          return b ? b > 0 : !1
        };
      return re(() => g("channel", {
        isFormValid: r.value
      })), (a, b) => {
        const f = Ee,
          y = Ge;
        return E(), q("form", {
          class: "kit-form",
          novalidate: "",
          onSubmit: b[0] || (b[0] = Fe(c => o(), ["prevent"]))
        }, [(E(!0), q(xe, null, ye(_.value, c => {
          var S, V, e, t, d, m, F, $;
          return E(), q("div", {
            key: c.key,
            class: "field"
          }, [c.type === k(I).STRING ? (E(), N(f, ae({
            key: 0,
            modelValue: c.value,
            "onUpdate:modelValue": w => c.value = w,
            ref_for: !0
          }, c.props, {
            "error-caption": x(c),
            "is-error": v(c),
            "max-length": (V = (S = c.validators) == null ? void 0 : S.maxLength) == null ? void 0 : V.value,
            class: "input",
            onChange: w => n(c),
            onFocus: (e = c.eventHandlers) == null ? void 0 : e.onFocus,
            onBlur: (t = c.eventHandlers) == null ? void 0 : t.onBlur
          }), {
            label: be(() => [T(a.$slots, `${c.key}-label`, {}, void 0, !0)]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : A("", !0), c.type === k(I).TEXTAREA ? (E(), N(y, ae({
            key: 1,
            modelValue: c.value,
            "onUpdate:modelValue": w => c.value = w,
            ref_for: !0
          }, c.props, {
            "error-caption": x(c),
            "is-error": v(c),
            "max-length": (m = (d = c.validators) == null ? void 0 : d.maxLength) == null ? void 0 : m.value,
            class: "textarea",
            onChange: w => n(c),
            onFocus: (F = c.eventHandlers) == null ? void 0 : F.onFocus,
            onBlur: ($ = c.eventHandlers) == null ? void 0 : $.onBlur
          }), null, 16, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : A("", !0), T(a.$slots, `${c.key}-after`, {}, void 0, !0)])
        }), 128))], 32)
      }
    }
  }),
  Ze = Y(Ke, [
    ["__scopeId", "data-v-2e0fd85e"]
  ]);
export {
  I as F, je as _, Ae as a, Ge as b, Ze as c, Ie as i
};