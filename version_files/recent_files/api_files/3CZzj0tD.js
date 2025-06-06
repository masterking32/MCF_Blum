import {
  _ as ie,
  b as fe,
  a as ce
} from "./DfcTT092.js";
import {
  _ as de
} from "./Dl7VDv3R.js";
import {
  cH as te,
  d as re,
  a4 as N,
  b7 as _e,
  C as ae,
  J as Z,
  j as ne,
  K as le,
  o as k,
  c as A,
  e as D,
  b as me,
  a as M,
  cI as ve,
  t as pe,
  z as B,
  G as T,
  w as ge,
  bY as he,
  n as xe,
  cb as ye,
  f as se,
  bZ as J,
  ah as be,
  A as U,
  F as Fe,
  q as we,
  D as Ee,
  aq as Y,
  aW as ee,
  au as Se
} from "./aUn4L-is.js";
var H = {
  exports: {}
};
(function(o, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = m;

  function x(f) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? x = function(l) {
      return typeof l
    } : x = function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l
    }, x(f)
  }

  function m(f) {
    var u = typeof f == "string" || f instanceof String;
    if (!u) {
      var l = x(f);
      throw f === null ? l = "null" : l === "object" && (l = f.constructor.name), new TypeError("Expected a string but received a ".concat(l))
    }
  }
  o.exports = s.default, o.exports.default = s.default
})(H, H.exports);
var L = H.exports,
  z = {
    exports: {}
  };
(function(o, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = x;

  function x() {
    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      f = arguments.length > 1 ? arguments[1] : void 0;
    for (var u in f) typeof m[u] > "u" && (m[u] = f[u]);
    return m
  }
  o.exports = s.default, o.exports.default = s.default
})(z, z.exports);
var j = z.exports,
  G = {
    exports: {}
  };
(function(o, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = u;
  var x = m(L);

  function m(l) {
    return l && l.__esModule ? l : {
      default: l
    }
  }

  function f(l) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? f = function(i) {
      return typeof i
    } : f = function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i
    }, f(l)
  }

  function u(l, a) {
    (0, x.default)(l);
    var i, y;
    f(a) === "object" ? (i = a.min || 0, y = a.max) : (i = arguments[1], y = arguments[2]);
    var v = encodeURI(l).split(/%..|./).length - 1;
    return v >= i && (typeof y > "u" || v <= y)
  }
  o.exports = s.default, o.exports.default = s.default
})(G, G.exports);
var $e = G.exports,
  K = {
    exports: {}
  },
  W = {
    exports: {}
  };
(function(o, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = l;
  var x = f(L),
    m = f(j);

  function f(a) {
    return a && a.__esModule ? a : {
      default: a
    }
  }
  var u = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1
  };

  function l(a, i) {
    (0, x.default)(a), i = (0, m.default)(i, u), i.allow_trailing_dot && a[a.length - 1] === "." && (a = a.substring(0, a.length - 1)), i.allow_wildcard === !0 && a.indexOf("*.") === 0 && (a = a.substring(2));
    var y = a.split("."),
      v = y[y.length - 1];
    return i.require_tld && (y.length < 2 || !i.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(v) || /\s/.test(v)) || !i.allow_numeric_tld && /^\d+$/.test(v) ? !1 : y.every(function(r) {
      return !(r.length > 63 && !i.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(r) || /[\uff01-\uff5e]/.test(r) || /^-|-$/.test(r) || !i.allow_underscores && /_/.test(r))
    })
  }
  o.exports = s.default, o.exports.default = s.default
})(W, W.exports);
var oe = W.exports,
  Q = {
    exports: {}
  };
(function(o, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = y;
  var x = m(L);

  function m(v) {
    return v && v.__esModule ? v : {
      default: v
    }
  }
  var f = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    u = "(".concat(f, "[.]){3}").concat(f),
    l = new RegExp("^".concat(u, "$")),
    a = "(?:[0-9a-fA-F]{1,4})",
    i = new RegExp("^(" + "(?:".concat(a, ":){7}(?:").concat(a, "|:)|") + "(?:".concat(a, ":){6}(?:").concat(u, "|:").concat(a, "|:)|") + "(?:".concat(a, ":){5}(?::").concat(u, "|(:").concat(a, "){1,2}|:)|") + "(?:".concat(a, ":){4}(?:(:").concat(a, "){0,1}:").concat(u, "|(:").concat(a, "){1,3}|:)|") + "(?:".concat(a, ":){3}(?:(:").concat(a, "){0,2}:").concat(u, "|(:").concat(a, "){1,4}|:)|") + "(?:".concat(a, ":){2}(?:(:").concat(a, "){0,3}:").concat(u, "|(:").concat(a, "){1,5}|:)|") + "(?:".concat(a, ":){1}(?:(:").concat(a, "){0,4}:").concat(u, "|(:").concat(a, "){1,6}|:)|") + "(?::((?::".concat(a, "){0,5}:").concat(u, "|(?::").concat(a, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

  function y(v) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, x.default)(v), r = String(r), r ? r === "4" ? l.test(v) : r === "6" ? i.test(v) : !1 : y(v, 4) || y(v, 6)
  }
  o.exports = s.default, o.exports.default = s.default
})(Q, Q.exports);
var ue = Q.exports;
(function(o, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = $;
  var x = a(L),
    m = a($e),
    f = a(oe),
    u = a(ue),
    l = a(j);

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
    y = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i,
    v = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
    r = /^[a-z\d]+$/,
    h = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
    w = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
    c = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
    n = 254;

  function S(e) {
    var t = e.replace(/^"(.+)"$/, "$1");
    if (!t.trim()) return !1;
    var _ = /[\.";<>]/.test(t);
    if (_) {
      if (t === e) return !1;
      var p = t.split('"').length === t.split('\\"').length;
      if (!p) return !1
    }
    return !0
  }

  function $(e, t) {
    if ((0, x.default)(e), t = (0, l.default)(t, i), t.require_display_name || t.allow_display_name) {
      var _ = e.match(y);
      if (_) {
        var p = _[1];
        if (e = e.replace(p, "").replace(/(^<|>$)/g, ""), p.endsWith(" ") && (p = p.slice(0, -1)), !S(p)) return !1
      } else if (t.require_display_name) return !1
    }
    if (!t.ignore_max_length && e.length > n) return !1;
    var b = e.split("@"),
      F = b.pop(),
      E = F.toLowerCase();
    if (t.host_blacklist.includes(E) || t.host_whitelist.length > 0 && !t.host_whitelist.includes(E)) return !1;
    var g = b.join("@");
    if (t.domain_specific_validation && (E === "gmail.com" || E === "googlemail.com")) {
      g = g.toLowerCase();
      var d = g.split("+")[0];
      if (!(0, m.default)(d.replace(/\./g, ""), {
          min: 6,
          max: 30
        })) return !1;
      for (var q = d.split("."), R = 0; R < q.length; R++)
        if (!r.test(q[R])) return !1
    }
    if (t.ignore_max_length === !1 && (!(0, m.default)(g, {
        max: 64
      }) || !(0, m.default)(F, {
        max: 254
      }))) return !1;
    if (!(0, f.default)(F, {
        require_tld: t.require_tld,
        ignore_max_length: t.ignore_max_length,
        allow_underscores: t.allow_underscores
      })) {
      if (!t.allow_ip_domain) return !1;
      if (!(0, u.default)(F)) {
        if (!F.startsWith("[") || !F.endsWith("]")) return !1;
        var I = F.slice(1, -1);
        if (I.length === 0 || !(0, u.default)(I)) return !1
      }
    }
    if (g[0] === '"') return g = g.slice(1, g.length - 1), t.allow_utf8_local_part ? c.test(g) : h.test(g);
    for (var O = t.allow_utf8_local_part ? w : v, P = g.split("."), C = 0; C < P.length; C++)
      if (!O.test(P[C])) return !1;
    return !(t.blacklisted_chars && g.search(new RegExp("[".concat(t.blacklisted_chars, "]+"), "g")) !== -1)
  }
  o.exports = s.default, o.exports.default = s.default
})(K, K.exports);
var ke = K.exports;
const qe = te(ke);

function Ce(o, s) {
  return typeof o == "string" && qe(o, s)
}
var X = {
  exports: {}
};
(function(o, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = $;
  var x = l(L),
    m = l(oe),
    f = l(ue),
    u = l(j);

  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function a(e, t) {
    return h(e) || r(e, t) || y(e, t) || i()
  }

  function i() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }

  function y(e, t) {
    if (e) {
      if (typeof e == "string") return v(e, t);
      var _ = Object.prototype.toString.call(e).slice(8, -1);
      if (_ === "Object" && e.constructor && (_ = e.constructor.name), _ === "Map" || _ === "Set") return Array.from(e);
      if (_ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)) return v(e, t)
    }
  }

  function v(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var _ = 0, p = new Array(t); _ < t; _++) p[_] = e[_];
    return p
  }

  function r(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
      var _ = [],
        p = !0,
        b = !1,
        F = void 0;
      try {
        for (var E = e[Symbol.iterator](), g; !(p = (g = E.next()).done) && (_.push(g.value), !(t && _.length === t)); p = !0);
      } catch (d) {
        b = !0, F = d
      } finally {
        try {
          !p && E.return != null && E.return()
        } finally {
          if (b) throw F
        }
      }
      return _
    }
  }

  function h(e) {
    if (Array.isArray(e)) return e
  }
  var w = {
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
    c = /^\[([^\]]+)\](?::([0-9]+))?$/;

  function n(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]"
  }

  function S(e, t) {
    for (var _ = 0; _ < t.length; _++) {
      var p = t[_];
      if (e === p || n(p) && p.test(e)) return !0
    }
    return !1
  }

  function $(e, t) {
    if ((0, x.default)(e), !e || /[\s<>]/.test(e) || e.indexOf("mailto:") === 0 || (t = (0, u.default)(t, w), t.validate_length && e.length >= 2083) || !t.allow_fragments && e.includes("#") || !t.allow_query_components && (e.includes("?") || e.includes("&"))) return !1;
    var _, p, b, F, E, g, d, q;
    if (d = e.split("#"), e = d.shift(), d = e.split("?"), e = d.shift(), d = e.split("://"), d.length > 1) {
      if (_ = d.shift().toLowerCase(), t.require_valid_protocol && t.protocols.indexOf(_) === -1) return !1
    } else {
      if (t.require_protocol) return !1;
      if (e.slice(0, 2) === "//") {
        if (!t.allow_protocol_relative_urls) return !1;
        d[0] = e.slice(2)
      }
    }
    if (e = d.join("://"), e === "") return !1;
    if (d = e.split("/"), e = d.shift(), e === "" && !t.require_host) return !0;
    if (d = e.split("@"), d.length > 1) {
      if (t.disallow_auth || d[0] === "" || (p = d.shift(), p.indexOf(":") >= 0 && p.split(":").length > 2)) return !1;
      var R = p.split(":"),
        I = a(R, 2),
        O = I[0],
        P = I[1];
      if (O === "" && P === "") return !1
    }
    F = d.join("@"), g = null, q = null;
    var C = F.match(c);
    if (C ? (b = "", q = C[1], g = C[2] || null) : (d = F.split(":"), b = d.shift(), d.length && (g = d.join(":"))), g !== null && g.length > 0) {
      if (E = parseInt(g, 10), !/^[0-9]+$/.test(g) || E <= 0 || E > 65535) return !1
    } else if (t.require_port) return !1;
    return t.host_whitelist ? S(b, t.host_whitelist) : b === "" && !t.require_host ? !0 : !(!(0, f.default)(b) && !(0, m.default)(b, t) && (!q || !(0, f.default)(q, 6)) || (b = b || q, t.host_blacklist && S(b, t.host_blacklist)))
  }
  o.exports = s.default, o.exports.default = s.default
})(X, X.exports);
var Ve = X.exports;
const Ae = te(Ve);

function Re(o, s) {
  return typeof o == "string" && Ae(o, s)
}
const Ie = ["for"],
  De = {
    key: 0,
    class: "error-caption"
  },
  Te = ["id", "placeholder", "disabled"],
  Le = re({
    __name: "Textarea",
    props: N({
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
      placeholder: {},
      disabled: {
        type: Boolean
      }
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: N(["change", "input", "focus", "blur", "click"], ["update:modelValue"]),
    setup(o, {
      emit: s
    }) {
      const x = o,
        m = s,
        f = _e(),
        u = ae(o, "modelValue"),
        l = Z(),
        a = Z(!1),
        i = () => {
          a.value = !0, m("focus", l.value)
        },
        y = () => {
          a.value = !1, m("blur", l.value)
        },
        v = () => {
          m("click", l.value)
        },
        r = ne(() => {
          const c = [];
          return (x.isError || x.errorCaption) && c.push("is-error"), x.disabled && c.push("is-disabled"), c
        });
      let h;
      return le(u, () => {
        if (!l.value) return;
        l.value.style.height = "auto";
        const c = l.value.scrollHeight,
          n = h !== void 0 ? c - h : 0;
        h = c, l.value.style.height = `${c}px`, n !== 0 && ye(() => window.document.body.scrollBy(0, n))
      }), (c, n) => {
        const S = ie,
          $ = fe,
          e = de;
        return k(), A("div", {
          class: xe(["kit-textarea", D(r)])
        }, [c.label ? (k(), A("label", {
          key: 0,
          for: D(f)
        }, [me(S, {
          title: c.label,
          "is-optional": c.isOptional
        }, null, 8, ["title", "is-optional"]), c.errorCaption ? (k(), A("div", De, [n[3] || (n[3] = M("img", {
          src: ve,
          alt: "Warning icon"
        }, null, -1)), M("div", null, pe(c.errorCaption), 1)])) : c.maxLength ? (k(), B($, {
          key: 1,
          value: u.value,
          "max-length": c.maxLength
        }, null, 8, ["value", "max-length"])) : T("", !0)], 8, Ie)) : T("", !0), M("div", {
          class: "wrapper",
          onClick: v
        }, [ge(M("textarea", {
          id: D(f),
          ref_key: "textareaRef",
          ref: l,
          "onUpdate:modelValue": n[0] || (n[0] = t => u.value = t),
          placeholder: c.placeholder,
          disabled: c.disabled,
          onChange: n[1] || (n[1] = t => c.$emit("change")),
          onInput: n[2] || (n[2] = t => c.$emit("input")),
          onFocus: i,
          onBlur: y
        }, null, 40, Te), [
          [he, u.value]
        ]), c.loading ? (k(), B(e, {
          key: 0,
          class: "skeleton"
        })) : T("", !0)])], 2)
      }
    }
  }),
  Pe = se(Le, [
    ["__scopeId", "data-v-c16b8851"]
  ]);
var V = (o => (o.STRING = "STRING", o.TEXTAREA = "TEXTAREA", o))(V || {});
const Me = re({
    __name: "KitForm",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: N(["channel"], ["update:modelValue"]),
    setup(o, {
      emit: s
    }) {
      const x = s,
        m = ae(o, "modelValue"),
        f = r => {
          r._ctx || (r._ctx = {
            initialValue: r.value,
            errors: []
          })
        };
      le(m, () => m.value.forEach(f), {
        immediate: !0
      });
      const u = () => {},
        l = r => r._ctx.errors = i(r),
        a = ne(() => m.value.every(r => i(r).length === 0));
      J(() => m.value.forEach(r => {
        r._ctx && r._ctx.errors.length > 0 && (r._ctx.errors = i(r))
      }));
      const i = r => {
          var w, c, n, S, $;
          const h = [];
          switch (r.type) {
            case V.STRING:
            case V.TEXTAREA: {
              if ((w = r.validators) != null && w.required && !r.value && h.push({
                  msg: U("form.rules.required"),
                  isVisible: !0
                }), (c = r.validators) != null && c.maxLength) {
                const e = r.validators.maxLength.value - r.value.length;
                e < 0 && h.push({
                  msg: U("form.rules.max_length", {
                    overCount: String(e * -1)
                  }),
                  isVisible: !1
                })
              }
              if (r.type === V.STRING && ((n = r.validators) != null && n.url)) {
                const e = r.validators.url.includePrefix && ((S = r.props) != null && S.prefix) ? `${r.props.prefix}${r.value}` : r.value;
                Re(e) || h.push({
                  msg: U("form.rules.is_url"),
                  isVisible: !0
                })
              }
              r.type === V.STRING && (($ = r.validators) != null && $.email) && (Ce(r.value) || h.push({
                msg: U("form.rules.is_email"),
                isVisible: !0
              }));
              break
            }
            default:
              throw be("unknown type")
          }
          if (r.customValidator) {
            const e = r.customValidator(r.value);
            e && h.push({
              msg: e,
              isVisible: !0
            })
          }
          return h
        },
        y = r => {
          var w;
          const h = (w = r._ctx) == null ? void 0 : w.errors.find(c => c.isVisible);
          return h == null ? void 0 : h.msg
        },
        v = r => {
          var w;
          const h = (w = r._ctx) == null ? void 0 : w.errors.length;
          return h ? h > 0 : !1
        };
      return J(() => x("channel", {
        isFormValid: a.value
      })), (r, h) => {
        const w = ce,
          c = Pe;
        return k(), A("form", {
          class: "kit-form",
          novalidate: "",
          onSubmit: h[0] || (h[0] = Se(n => u(), ["prevent"]))
        }, [(k(!0), A(Fe, null, we(m.value, n => {
          var S, $, e, t, _, p, b, F, E, g;
          return k(), A("div", {
            key: n.key,
            class: "field"
          }, [n.type === D(V).STRING ? (k(), B(w, ee({
            key: 0,
            modelValue: n.value,
            "onUpdate:modelValue": d => n.value = d,
            ref_for: !0
          }, n.props, {
            "error-caption": y(n),
            "is-error": v(n),
            "max-length": ($ = (S = n.validators) == null ? void 0 : S.maxLength) == null ? void 0 : $.value,
            class: "input",
            onChange: d => l(n),
            onFocus: (e = n.eventHandlers) == null ? void 0 : e.onFocus,
            onBlur: (t = n.eventHandlers) == null ? void 0 : t.onBlur,
            onClick: (_ = n.eventHandlers) == null ? void 0 : _.onClick
          }), {
            label: Ee(() => [Y(r.$slots, `${n.key}-label`, {}, void 0, !0)]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur", "onClick"])) : T("", !0), n.type === D(V).TEXTAREA ? (k(), B(c, ee({
            key: 1,
            modelValue: n.value,
            "onUpdate:modelValue": d => n.value = d,
            ref_for: !0
          }, n.props, {
            "error-caption": y(n),
            "is-error": v(n),
            "max-length": (b = (p = n.validators) == null ? void 0 : p.maxLength) == null ? void 0 : b.value,
            class: "textarea",
            onChange: d => l(n),
            onFocus: (F = n.eventHandlers) == null ? void 0 : F.onFocus,
            onBlur: (E = n.eventHandlers) == null ? void 0 : E.onBlur,
            onClick: (g = n.eventHandlers) == null ? void 0 : g.onClick
          }), null, 16, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur", "onClick"])) : T("", !0), Y(r.$slots, `${n.key}-after`, {}, void 0, !0)])
        }), 128))], 32)
      }
    }
  }),
  Ne = se(Me, [
    ["__scopeId", "data-v-198c9948"]
  ]);
export {
  V as F, Ne as _
};