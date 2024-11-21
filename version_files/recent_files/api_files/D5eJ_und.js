import {
  bN as He,
  d as E,
  a as p,
  c as w,
  b as _,
  aJ as he,
  j as P,
  F as U,
  L as fe,
  f as I,
  t as $,
  e as o,
  az as q,
  r as T,
  aY as se,
  bO as ie,
  m as L,
  a4 as $e,
  bP as Ve,
  g as O,
  k as S,
  bQ as Q,
  bR as Qe,
  a7 as Ae,
  ay as K,
  au as Ze,
  av as _e,
  bS as Ye,
  w as Ee,
  bo as Xe,
  n as Fe,
  bp as et,
  bI as ne,
  W,
  X as Y,
  x as N,
  aB as Z,
  ap as ye,
  bT as tt,
  bU as nt,
  V as Pe,
  B as G,
  C as X,
  N as J,
  bV as st,
  bW as ot,
  bX as at,
  bY as we,
  bZ as lt,
  ak as rt,
  b_ as it,
  H as j,
  af as z,
  ao as Re,
  b4 as Te,
  an as Se,
  b$ as ct,
  c0 as ut,
  G as Ue,
  b9 as te,
  am as dt,
  a_ as mt,
  a$ as pt,
  Y as vt,
  J as ce,
  o as ht,
  A as ft,
  ab as Le,
  c1 as Oe,
  bL as Ce,
  c2 as _t,
  bd as gt,
  ax as bt
} from "./DwYsksKZ.js";
import {
  K as Ne
} from "./DC9zUryN.js";
import {
  _ as yt,
  a as wt
} from "./CUE6qQqw.js";
import {
  _ as ee
} from "./BliXxM54.js";
import {
  g as St,
  _ as Be,
  b as kt,
  a as xt,
  r as It,
  c as le,
  d as ke
} from "./DBRysHsS.js";
import {
  _ as Mt
} from "./FD56Cpi_.js";
import {
  _ as $t
} from "./B1l3_1k-.js";
import {
  _ as Vt,
  u as At
} from "./BBKeLfGy.js";
import {
  _ as Et
} from "./D4uVtbIj.js";
import {
  _ as Ft
} from "./DgvNSdjA.js";
import {
  u as Pt
} from "./NCFxGKl_.js";
import {
  u as Rt
} from "./DQ_rBxwQ.js";
var ue = {
  exports: {}
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;

  function s(l) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? s = function(c) {
      return typeof c
    } : s = function(c) {
      return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
    }, s(l)
  }

  function r(l) {
    var a = typeof l == "string" || l instanceof String;
    if (!a) {
      var c = s(l);
      throw l === null ? c = "null" : c === "object" && (c = l.constructor.name), new TypeError("Expected a string but received a ".concat(c))
    }
  }
  e.exports = t.default, e.exports.default = t.default
})(ue, ue.exports);
var ge = ue.exports,
  de = {
    exports: {}
  };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;

  function s() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      l = arguments.length > 1 ? arguments[1] : void 0;
    for (var a in l) typeof r[a] > "u" && (r[a] = l[a]);
    return r
  }
  e.exports = t.default, e.exports.default = t.default
})(de, de.exports);
var De = de.exports,
  me = {
    exports: {}
  };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = c;
  var s = l(ge),
    r = l(De);

  function l(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  }
  var a = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1
  };

  function c(n, i) {
    (0, s.default)(n), i = (0, r.default)(i, a), i.allow_trailing_dot && n[n.length - 1] === "." && (n = n.substring(0, n.length - 1)), i.allow_wildcard === !0 && n.indexOf("*.") === 0 && (n = n.substring(2));
    var v = n.split("."),
      f = v[v.length - 1];
    return i.require_tld && (v.length < 2 || !i.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(f) || /\s/.test(f)) || !i.allow_numeric_tld && /^\d+$/.test(f) ? !1 : v.every(function(u) {
      return !(u.length > 63 && !i.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(u) || /[\uff01-\uff5e]/.test(u) || /^-|-$/.test(u) || !i.allow_underscores && /_/.test(u))
    })
  }
  e.exports = t.default, e.exports.default = t.default
})(me, me.exports);
var Tt = me.exports,
  pe = {
    exports: {}
  };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = v;
  var s = r(ge);

  function r(f) {
    return f && f.__esModule ? f : {
      default: f
    }
  }
  var l = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    a = "(".concat(l, "[.]){3}").concat(l),
    c = new RegExp("^".concat(a, "$")),
    n = "(?:[0-9a-fA-F]{1,4})",
    i = new RegExp("^(" + "(?:".concat(n, ":){7}(?:").concat(n, "|:)|") + "(?:".concat(n, ":){6}(?:").concat(a, "|:").concat(n, "|:)|") + "(?:".concat(n, ":){5}(?::").concat(a, "|(:").concat(n, "){1,2}|:)|") + "(?:".concat(n, ":){4}(?:(:").concat(n, "){0,1}:").concat(a, "|(:").concat(n, "){1,3}|:)|") + "(?:".concat(n, ":){3}(?:(:").concat(n, "){0,2}:").concat(a, "|(:").concat(n, "){1,4}|:)|") + "(?:".concat(n, ":){2}(?:(:").concat(n, "){0,3}:").concat(a, "|(:").concat(n, "){1,5}|:)|") + "(?:".concat(n, ":){1}(?:(:").concat(n, "){0,4}:").concat(a, "|(:").concat(n, "){1,6}|:)|") + "(?::((?::".concat(n, "){0,5}:").concat(a, "|(?::").concat(n, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

  function v(f) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, s.default)(f), u = String(u), u ? u === "4" ? c.test(f) : u === "6" ? i.test(f) : !1 : v(f, 4) || v(f, 6)
  }
  e.exports = t.default, e.exports.default = t.default
})(pe, pe.exports);
var Ut = pe.exports,
  ve = {
    exports: {}
  };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = x;
  var s = c(ge),
    r = c(Tt),
    l = c(Ut),
    a = c(De);

  function c(m) {
    return m && m.__esModule ? m : {
      default: m
    }
  }

  function n(m, y) {
    return g(m) || u(m, y) || v(m, y) || i()
  }

  function i() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }

  function v(m, y) {
    if (m) {
      if (typeof m == "string") return f(m, y);
      var M = Object.prototype.toString.call(m).slice(8, -1);
      if (M === "Object" && m.constructor && (M = m.constructor.name), M === "Map" || M === "Set") return Array.from(m);
      if (M === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)) return f(m, y)
    }
  }

  function f(m, y) {
    (y == null || y > m.length) && (y = m.length);
    for (var M = 0, V = new Array(y); M < y; M++) V[M] = m[M];
    return V
  }

  function u(m, y) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(m)))) {
      var M = [],
        V = !0,
        F = !1,
        R = void 0;
      try {
        for (var C = m[Symbol.iterator](), B; !(V = (B = C.next()).done) && (M.push(B.value), !(y && M.length === y)); V = !0);
      } catch (A) {
        F = !0, R = A
      } finally {
        try {
          !V && C.return != null && C.return()
        } finally {
          if (F) throw R
        }
      }
      return M
    }
  }

  function g(m) {
    if (Array.isArray(m)) return m
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
    k = /^\[([^\]]+)\](?::([0-9]+))?$/;

  function d(m) {
    return Object.prototype.toString.call(m) === "[object RegExp]"
  }

  function h(m, y) {
    for (var M = 0; M < y.length; M++) {
      var V = y[M];
      if (m === V || d(V) && V.test(m)) return !0
    }
    return !1
  }

  function x(m, y) {
    if ((0, s.default)(m), !m || /[\s<>]/.test(m) || m.indexOf("mailto:") === 0 || (y = (0, a.default)(y, b), y.validate_length && m.length >= 2083) || !y.allow_fragments && m.includes("#") || !y.allow_query_components && (m.includes("?") || m.includes("&"))) return !1;
    var M, V, F, R, C, B, A, H;
    if (A = m.split("#"), m = A.shift(), A = m.split("?"), m = A.shift(), A = m.split("://"), A.length > 1) {
      if (M = A.shift().toLowerCase(), y.require_valid_protocol && y.protocols.indexOf(M) === -1) return !1
    } else {
      if (y.require_protocol) return !1;
      if (m.slice(0, 2) === "//") {
        if (!y.allow_protocol_relative_urls) return !1;
        A[0] = m.slice(2)
      }
    }
    if (m = A.join("://"), m === "") return !1;
    if (A = m.split("/"), m = A.shift(), m === "" && !y.require_host) return !0;
    if (A = m.split("@"), A.length > 1) {
      if (y.disallow_auth || A[0] === "" || (V = A.shift(), V.indexOf(":") >= 0 && V.split(":").length > 2)) return !1;
      var ze = V.split(":"),
        be = n(ze, 2),
        Ge = be[0],
        Je = be[1];
      if (Ge === "" && Je === "") return !1
    }
    R = A.join("@"), B = null, H = null;
    var ae = R.match(k);
    if (ae ? (F = "", H = ae[1], B = ae[2] || null) : (A = R.split(":"), F = A.shift(), A.length && (B = A.join(":"))), B !== null && B.length > 0) {
      if (C = parseInt(B, 10), !/^[0-9]+$/.test(B) || C <= 0 || C > 65535) return !1
    } else if (y.require_port) return !1;
    return y.host_whitelist ? h(F, y.host_whitelist) : F === "" && !y.require_host ? !0 : !(!(0, l.default)(F) && !(0, r.default)(F, y) && (!H || !(0, l.default)(H, 6)) || (F = F || H, y.host_blacklist && h(F, y.host_blacklist)))
  }
  e.exports = t.default, e.exports.default = t.default
})(ve, ve.exports);
var Lt = ve.exports;
const Ot = He(Lt);

function Ct(e, t) {
  return typeof e == "string" && Ot(e, t)
}
const Nt = {
    class: "memepad-new-progress"
  },
  Bt = E({
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
    setup(e) {
      return (t, s) => (p(), w("div", Nt, [_("div", {
        class: "track",
        style: he({
          width: `${e.step/e.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  Dt = P(Bt, [
    ["__scopeId", "data-v-6cdfbf16"]
  ]),
  jt = {
    class: "memepad-new-step-heading"
  },
  qt = {
    class: "step"
  },
  Wt = {
    class: "label"
  },
  Kt = E({
    __name: "NewStepHeading",
    props: {
      step: {
        type: Number,
        required: !0
      }
    },
    setup(e) {
      const t = e,
        s = U(() => {
          switch (t.step) {
            case 1:
              return {
                step: "1", label: I("memepad.new.step_1.title")
              };
            case 2:
              return {
                step: "2", label: I("memepad.new.step_2.title")
              };
            case 3:
              return {
                step: "3", label: I("memepad.new.step_3.title")
              };
            case 4:
              return {
                step: "4", label: I("memepad.new.step_4.title")
              };
            default:
              throw t.step, fe("Invalid step")
          }
        });
      return (r, l) => (p(), w("div", jt, [_("div", qt, $(o(s).step), 1), _("div", Wt, $(o(s).label), 1)]))
    }
  }),
  oe = P(Kt, [
    ["__scopeId", "data-v-44eadcb9"]
  ]),
  zt = {
    class: "memepad-new-form-avatar"
  },
  Gt = {
    class: "compose"
  },
  Jt = {
    key: 1,
    src: Qe,
    alt: "Plus icon"
  },
  Ht = {
    class: "content"
  },
  Qt = {
    class: "name"
  },
  Zt = {
    class: "disclaimer"
  },
  xe = 10,
  Yt = E({
    __name: "Avatar",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(e) {
      const t = q(e, "modelValue"),
        s = T(),
        r = () => {
          var c;
          return (c = s.value) == null ? void 0 : c.triggerFileUpload()
        },
        l = T(),
        a = U(() => {
          if (t.value) return se(t.value)
        });
      return (c, n) => {
        var f;
        const i = Ae,
          v = Ne;
        return p(), w("div", zt, [_("div", Gt, [o(a) ? (p(), w("div", {
          key: 0,
          class: "image is-uploaded",
          style: he({
            backgroundImage: `url(${o(a)})`
          })
        }, null, 4)) : (p(), w("div", {
          key: 1,
          class: "image wait-upload",
          onClick: n[0] || (n[0] = u => r())
        }, [((f = o(l)) == null ? void 0 : f.status) === o(ie).UPLOADING ? (p(), L(i, {
          key: 0,
          type: o($e).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (p(), w("img", Jt))])), _("div", Ht, [_("div", Qt, $(("t" in c ? c.t : o(I))("memepad.new.step_1.field_icon.label")), 1), _("div", Zt, $(("t" in c ? c.t : o(I))("memepad.new.step_1.field_icon.description", {
          maxUploadSize: String(xe)
        })), 1)]), t.value ? (p(), w("div", {
          key: 2,
          class: "delete",
          onClick: n[1] || (n[1] = u => t.value = void 0)
        }, n[4] || (n[4] = [_("img", {
          src: Ve,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))) : O("", !0)]), S(v, {
          ref_key: "fileUploaderRef",
          ref: s,
          "hide-ui": "",
          "max-file-size-mb": xe,
          accept: [o(Q).JPEG, o(Q).PNG, o(Q).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 1,
            borderRadius: 999
          },
          "onUpdate:progress": n[2] || (n[2] = u => l.value = u),
          onUploaded: n[3] || (n[3] = u => t.value = u.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  Xt = P(Yt, [
    ["__scopeId", "data-v-a1496bcf"]
  ]),
  en = ["for"],
  tn = {
    key: 0,
    class: "error-caption"
  },
  nn = ["id", "placeholder"],
  sn = E({
    __name: "Textarea",
    props: K({
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
    emits: K(["change", "input", "focus", "blur"], ["update:modelValue"]),
    setup(e, {
      emit: t
    }) {
      const s = e,
        r = t,
        l = Ze(),
        a = q(e, "modelValue"),
        c = T(),
        n = T(!1),
        i = () => {
          n.value = !0, r("focus", c.value)
        },
        v = () => {
          n.value = !1, r("blur", c.value)
        },
        f = U(() => {
          const b = [];
          return (s.isError || s.errorCaption) && b.push("is-error"), b
        });
      let u;
      return _e(a, () => {
        if (!c.value) return;
        c.value.style.height = "auto";
        const b = c.value.scrollHeight,
          k = u !== void 0 ? b - u : 0;
        u = b, c.value.style.height = `${b}px`, k !== 0 && et(() => window.document.body.scrollBy(0, k))
      }), (b, k) => {
        const d = yt;
        return p(), w("div", {
          class: Fe(["kit-textarea", o(f)])
        }, [b.label ? (p(), w("label", {
          key: 0,
          for: o(l)
        }, [_("span", null, $(b.label), 1), b.errorCaption ? (p(), w("div", tn, [k[3] || (k[3] = _("img", {
          src: Ye,
          alt: "Warning icon"
        }, null, -1)), _("div", null, $(b.errorCaption), 1)])) : b.maxLength ? (p(), L(d, {
          key: 1,
          value: a.value,
          "max-length": b.maxLength
        }, null, 8, ["value", "max-length"])) : O("", !0)], 8, en)) : O("", !0), Ee(_("textarea", {
          id: o(l),
          ref_key: "textareaRef",
          ref: c,
          "onUpdate:modelValue": k[0] || (k[0] = h => a.value = h),
          placeholder: b.placeholder,
          onChange: k[1] || (k[1] = h => b.$emit("change")),
          onInput: k[2] || (k[2] = h => b.$emit("input")),
          onFocus: i,
          onBlur: v
        }, null, 40, nn), [
          [Xe, a.value]
        ])], 2)
      }
    }
  }),
  on = P(sn, [
    ["__scopeId", "data-v-fbb8bb63"]
  ]);
var D = (e => (e.STRING = "STRING", e.TEXTAREA = "TEXTAREA", e))(D || {});
const an = E({
    __name: "KitForm",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: K(["channel"], ["update:modelValue"]),
    setup(e, {
      emit: t
    }) {
      const s = t,
        r = q(e, "modelValue"),
        l = u => {
          u._ctx || (u._ctx = {
            initialValue: u.value,
            errors: []
          })
        };
      _e(r, () => r.value.forEach(l), {
        immediate: !0
      });
      const a = () => {},
        c = u => u._ctx.errors = i(u),
        n = U(() => r.value.every(u => i(u).length === 0));
      ne(() => r.value.forEach(u => {
        u._ctx && u._ctx.errors.length > 0 && (u._ctx.errors = i(u))
      }));
      const i = u => {
          var b, k, d, h;
          const g = [];
          switch (u.type) {
            case D.STRING:
            case D.TEXTAREA: {
              if ((b = u.validators) != null && b.required && !u.value && g.push({
                  msg: "Required to continue",
                  isVisible: !0
                }), (k = u.validators) != null && k.maxLength) {
                const x = u.validators.maxLength.value - u.value.length;
                x < 0 && g.push({
                  msg: `${x*-1} over`,
                  isVisible: !1
                })
              }
              if (u.type === D.STRING && ((d = u.validators) != null && d.url)) {
                const x = u.validators.url.includePrefix && ((h = u.props) != null && h.prefix) ? `${u.props.prefix}${u.value}` : u.value;
                Ct(x) || g.push({
                  msg: "Invalid URL",
                  isVisible: !0
                })
              }
              break
            }
            default:
              throw fe("unknown type")
          }
          if (u.customValidator) {
            const x = u.customValidator(u.value);
            x && g.push({
              msg: x,
              isVisible: !0
            })
          }
          return g
        },
        v = u => {
          var b;
          const g = (b = u._ctx) == null ? void 0 : b.errors.find(k => k.isVisible);
          return g == null ? void 0 : g.msg
        },
        f = u => {
          var b;
          const g = (b = u._ctx) == null ? void 0 : b.errors.length;
          return g ? g > 0 : !1
        };
      return ne(() => s("channel", {
        isFormValid: n.value
      })), (u, g) => {
        const b = wt,
          k = on;
        return p(), w("form", {
          class: "kit-form",
          novalidate: "",
          onSubmit: g[0] || (g[0] = tt(d => a(), ["prevent"]))
        }, [(p(!0), w(W, null, Y(r.value, d => {
          var h, x, m, y, M, V, F, R;
          return p(), w("div", {
            key: d.key,
            class: "field"
          }, [d.type === o(D).STRING ? (p(), L(b, ye({
            key: 0,
            modelValue: d.value,
            "onUpdate:modelValue": C => d.value = C,
            ref_for: !0
          }, d.props, {
            "error-caption": v(d),
            "is-error": f(d),
            "max-length": (x = (h = d.validators) == null ? void 0 : h.maxLength) == null ? void 0 : x.value,
            class: "input",
            onChange: C => c(d),
            onFocus: (m = d.eventHandlers) == null ? void 0 : m.onFocus,
            onBlur: (y = d.eventHandlers) == null ? void 0 : y.onBlur
          }), {
            label: N(() => [Z(u.$slots, `${d.key}-label`, {}, void 0, !0)]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : O("", !0), d.type === o(D).TEXTAREA ? (p(), L(k, ye({
            key: 1,
            modelValue: d.value,
            "onUpdate:modelValue": C => d.value = C,
            ref_for: !0
          }, d.props, {
            "error-caption": v(d),
            "is-error": f(d),
            "max-length": (V = (M = d.validators) == null ? void 0 : M.maxLength) == null ? void 0 : V.value,
            class: "textarea",
            onChange: C => c(d),
            onFocus: (F = d.eventHandlers) == null ? void 0 : F.onFocus,
            onBlur: (R = d.eventHandlers) == null ? void 0 : R.onBlur
          }), null, 16, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : O("", !0), Z(u.$slots, `${d.key}-after`, {}, void 0, !0)])
        }), 128))], 32)
      }
    }
  }),
  je = P(an, [
    ["__scopeId", "data-v-5c8581ee"]
  ]),
  ln = {
    class: "memepad-new-step-1"
  },
  rn = E({
    __name: "1",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(e, {
      emit: t
    }) {
      const r = T({
          ...e.state.step1
        }),
        l = t,
        a = T([{
          key: "name",
          type: D.STRING,
          value: U({
            get: () => r.value.name ?? "",
            set: v => r.value.name = v ?? ""
          }),
          props: {
            label: I("memepad.new.step_1.field_name.label"),
            placeholder: I("memepad.new.step_1.field_name.placeholder")
          },
          validators: {
            required: {},
            maxLength: {
              value: 20
            }
          }
        }, {
          key: "ticker",
          type: D.STRING,
          value: U({
            get: () => r.value.ticker ?? "",
            set: v => r.value.ticker = v ?? ""
          }),
          props: {
            label: I("memepad.new.step_1.field_ticker.label"),
            placeholder: I("memepad.new.step_1.field_ticker.placeholder"),
            modifiers: [nt.UPPERCASE]
          },
          validators: {
            required: {},
            maxLength: {
              value: 10
            }
          },
          customValidator: v => {
            if (!v.match(/^[A-Z0-9]+$/)) return I("memepad.new.step_1.field_ticker.custom_validator_error")
          }
        }, {
          key: "description",
          type: D.TEXTAREA,
          value: U({
            get: () => r.value.description ?? "",
            set: v => r.value.description = v ?? ""
          }),
          props: {
            label: I("memepad.new.step_1.field_description.label"),
            placeholder: I("memepad.new.step_1.field_description.placeholder")
          },
          validators: {
            required: {},
            maxLength: {
              value: 240
            }
          }
        }]),
        c = T(),
        n = U(() => {
          var v;
          return ((v = c.value) == null ? void 0 : v.isFormValid) && !!r.value.iconFileKey
        }),
        i = () => l("continue", r.value);
      return (v, f) => {
        const u = oe,
          g = Xt,
          b = je,
          k = X,
          d = ee;
        return p(), w("div", ln, [S(u, {
          step: 1
        }), S(g, {
          modelValue: o(r).iconFileKey,
          "onUpdate:modelValue": f[0] || (f[0] = h => o(r).iconFileKey = h)
        }, null, 8, ["modelValue"]), S(b, {
          modelValue: o(a),
          "onUpdate:modelValue": f[1] || (f[1] = h => Pe(a) ? a.value = h : null),
          onChannel: f[2] || (f[2] = h => c.value = h)
        }, null, 8, ["modelValue"]), S(d, null, {
          default: N(() => [S(k, {
            label: ("t" in v ? v.t : o(I))("base.continue"),
            fill: "",
            disabled: !o(n),
            tertiary: "",
            size: o(G).LARGE,
            onClick: i
          }, null, 8, ["label", "disabled", "size"])]),
          _: 1
        })])
      }
    }
  }),
  cn = P(rn, [
    ["__scopeId", "data-v-9573d404"]
  ]),
  un = {
    class: "memepad-new-form-label"
  },
  dn = {
    class: "compose"
  },
  mn = {
    class: "title"
  },
  pn = {
    key: 0,
    class: "optional"
  },
  vn = E({
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
    setup(e) {
      return (t, s) => {
        const r = J;
        return p(), w("div", un, [e.iconName ? (p(), L(r, {
          key: 0,
          name: e.iconName,
          class: "icon"
        }, null, 8, ["name"])) : O("", !0), _("div", dn, [_("span", mn, $(e.title), 1), e.isOptional ? (p(), w("span", pn, $(` ${("t"in t?t.t:o(I))("base.optional")}`), 1)) : O("", !0)])])
      }
    }
  }),
  qe = P(vn, [
    ["__scopeId", "data-v-272f2d1c"]
  ]),
  hn = {
    class: "memepad-new-form-banner"
  },
  fn = {
    key: 1,
    class: "banner is-uploading"
  },
  _n = {
    class: "description"
  },
  gn = {
    class: "text"
  },
  bn = {
    class: "description"
  },
  Ie = 10,
  yn = E({
    __name: "Banner",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(e) {
      const t = q(e, "modelValue"),
        s = T(),
        r = () => {
          var c;
          return (c = s.value) == null ? void 0 : c.triggerFileUpload()
        },
        l = T(),
        a = U(() => {
          if (l.value && l.value.status === ie.UPLOADING) return l.value.localUrl;
          if (t.value) return se(t.value)
        });
      return (c, n) => {
        var u;
        const i = qe,
          v = Ae,
          f = Ne;
        return p(), w("div", hn, [S(i, {
          title: ("t" in c ? c.t : o(I))("memepad.new.step_1.field_banner.label"),
          "is-optional": "",
          class: "heading"
        }, null, 8, ["title"]), t.value ? (p(), w("div", {
          key: 0,
          class: "banner is-uploaded",
          style: he({
            backgroundImage: `url(${o(a)})`
          })
        }, [_("div", {
          class: "delete-btn",
          onClick: n[0] || (n[0] = g => t.value = void 0)
        }, n[4] || (n[4] = [_("img", {
          src: Ve,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((u = o(l)) == null ? void 0 : u.status) === o(ie).UPLOADING ? (p(), w("div", fn, [S(v, {
          type: o($e).LIGHT,
          size: 16
        }, null, 8, ["type"]), _("div", _n, $(("t" in c ? c.t : o(I))("memepad.new.step_1.field_banner.uploading")), 1)])) : (p(), w("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: n[1] || (n[1] = g => r())
        }, [n[6] || (n[6] = _("img", {
          src: st,
          alt: "Add"
        }, null, -1)), _("div", gn, [_("div", bn, $(("t" in c ? c.t : o(I))("memepad.new.step_1.field_banner.description", {
          maxUploadSize: String(Ie)
        })), 1), n[5] || (n[5] = _("div", {
          class: "ratio"
        }, "361 × 119", -1))])])), S(f, {
          ref_key: "fileUploaderRef",
          ref: s,
          "hide-ui": "",
          "max-file-size-mb": Ie,
          accept: [o(Q).JPEG, o(Q).PNG],
          crop: "",
          "cropper-params": {
            aspectRatio: 361 / 119,
            borderRadius: 8
          },
          "onUpdate:progress": n[2] || (n[2] = g => l.value = g),
          onUploaded: n[3] || (n[3] = g => t.value = g.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  wn = P(yn, [
    ["__scopeId", "data-v-c557c556"]
  ]),
  Sn = {
    class: "memepad-new-form-social-links-item"
  },
  kn = E({
    __name: "SocialLinksItem",
    props: K({
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
    emits: K(["isValid", "delete"], ["update:modelValue"]),
    setup(e, {
      emit: t
    }) {
      const s = e,
        r = t,
        l = q(e, "modelValue"),
        a = T([{
          type: D.STRING,
          key: s.meta.apiKey,
          value: U({
            get: () => l.value ?? "",
            set: n => l.value = n || void 0
          }),
          props: {
            placeholder: s.meta.placeholder,
            size: ot.COMPACT
          },
          validators: s.meta.skipUrlValidation ? {} : {
            url: {}
          }
        }]),
        c = T();
      return ne(() => {
        var n;
        return r("isValid", ((n = c.value) == null ? void 0 : n.isFormValid) ?? !1)
      }), (n, i) => {
        const v = qe,
          f = J,
          u = je;
        return p(), w("div", Sn, [S(u, {
          modelValue: o(a),
          "onUpdate:modelValue": i[1] || (i[1] = g => Pe(a) ? a.value = g : null),
          onChannel: i[2] || (i[2] = g => c.value = g)
        }, at({
          [`${e.meta.apiKey}-label`]: N(() => [S(v, {
            "icon-name": e.meta.icon,
            title: e.meta.display,
            "is-optional": ""
          }, null, 8, ["icon-name", "title"])]),
          _: 2
        }, [e.optional ? {
          name: `${e.meta.apiKey}-after`,
          fn: N(() => [_("button", {
            type: "button",
            class: "delete-button reset",
            onClick: i[0] || (i[0] = g => n.$emit("delete"))
          }, [S(f, {
            name: "trash",
            class: "icon"
          })])]),
          key: "0"
        } : void 0]), 1032, ["modelValue"])])
      }
    }
  }),
  xn = P(kn, [
    ["__scopeId", "data-v-e8eb736f"]
  ]),
  In = {
    class: "memepad-new-form-social-links"
  },
  Mn = {
    class: "inputs"
  },
  $n = {
    key: 0,
    class: "add-panel"
  },
  Vn = {
    class: "providers"
  },
  An = E({
    __name: "SocialLinks",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: K(["isValid"], ["update:modelValue"]),
    setup(e, {
      emit: t
    }) {
      const s = St(),
        r = q(e, "modelValue"),
        l = t,
        a = T([{
          provider: we.TELEGRAM,
          isValid: !1,
          optional: !1
        }]),
        c = U(() => Object.values(we).filter(v => !a.value.find(f => f.provider === v))),
        n = v => a.value.push({
          provider: v,
          isValid: !1,
          optional: !0
        }),
        i = v => {
          a.value.splice(v, 1)
        };
      return ne(() => {
        const v = a.value.every(f => f.isValid);
        l("isValid", v)
      }), (v, f) => {
        const u = xn,
          g = J;
        return p(), w("div", In, [_("div", Mn, [S(lt, {
          name: "list-shuffle-transition"
        }, {
          default: N(() => [(p(!0), w(W, null, Y(o(a), (b, k) => (p(), L(u, {
            key: b.provider,
            modelValue: r.value[b.provider],
            "onUpdate:modelValue": d => r.value[b.provider] = d,
            meta: o(s)[b.provider],
            optional: b.optional,
            class: "provider-input",
            onIsValid: d => b.isValid = d,
            onDelete: d => i(k)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "meta", "optional", "onIsValid", "onDelete"]))), 128))]),
          _: 1
        })]), S(rt, {
          name: "appear-from-right-transition"
        }, {
          default: N(() => [o(c).length > 0 ? (p(), w("div", $n, [S(g, {
            name: "plus",
            class: "plus-icon"
          }), _("div", Vn, [(p(!0), w(W, null, Y(o(c), b => (p(), w("div", {
            key: b,
            class: "provider"
          }, [S(g, {
            name: o(s)[b].icon,
            class: "provider-icon",
            onClick: k => n(b)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : O("", !0)]),
          _: 1
        })])
      }
    }
  }),
  En = P(An, [
    ["__scopeId", "data-v-5d3fea7d"]
  ]),
  Fn = {
    class: "kit-switch"
  },
  Pn = E({
    __name: "Switch",
    props: {
      modelValue: {
        type: Boolean
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(e) {
      const t = q(e, "modelValue");
      return (s, r) => (p(), w("div", Fn, [Ee(_("input", {
        "onUpdate:modelValue": r[0] || (r[0] = l => t.value = l),
        type: "checkbox"
      }, null, 512), [
        [it, t.value]
      ])]))
    }
  }),
  Rn = P(Pn, [
    ["__scopeId", "data-v-e0ffb56d"]
  ]),
  Tn = "data:image/webp;base64,UklGRvYLAABXRUJQVlA4WAoAAAAQAAAAjwAAjwAAQUxQSBADAAABh6GwbSM19unBM0VElMwcI3dUnWQQ/tv0ryO8Ipl8GArDBRUA27btpFWEQC1oeuuWUg/0/P/nITXI4dpDRP/dOJKkSJHO7MGCw/sCgkyUfnf8P41zIfp9KaMiKft9ITj/LhBCSqVWqzQ1BmoZk6arlVJSCtHlKPW8JNHaGHg5Y7ROEs+jtIsJkSRpCh8pTZNEiG7FmO9rDR9Na99nrCsJMZkYAx/PmMlEiC7U769W0FirVb/fbSiVMk2h0dJUSkq7CqW+fzpB451Ovk9pF6mNWtGTQQdgjFeSshi1ptNJSl6JMbxRKkQUKbWoVYxa1em0qKVUFAlBKbaEUEprsCatlRICU56nNViX1p6HkXdHeQ5WlOePBhjifD4HALjfwZ4ebOV8zjl+ogisLoqwI8RuB1a32wmBGymvV7C661VK3CgF1qcUZiidTMD6JhNK8cLYYgHWt1gw9vPyHfobNscFzEQRWF8U4cbz7D/P8TzccG77nnix4Bwj2Fz3Ycd193uwtv3edfFDaZKAtSUJpRh59SN7P8MQIbZ+lCSEYMlxlkuwruXScfBEyGh0u4FV3W6jESGYGgzsMxjgajQC6xqNcBWGYF1h+Avtm7Pf++4dN133cACrOhxcF1ecbzZgVZsN57giZDwGqxqPCcHWcJjnYE15Phziy3G2W7Cm7dZx8EVIHNvyUZ7HMSEYc93t1pbPXBdnhAQBWFEQEII1zicTG54bc46XT83AhjlgjpBerxhA+/bIeREUo16PEIw0M2hj1RFmPjv76nLvd2hDlbW/3yeTB/PvAIQwFgTrdZ63Zf7rdRAwRgi+3j9zDoLZDBruePz6CoLirLgV4aOs379coMGMGQ7LJ8WUdpem33PZbIr5FKMu0/Qd6OmUsS5TWf/KHcSmr8cZ6zaMTafQWFkWhqyItCSMMPYZWfbOGdFs1qZjFD6K7wq93vEIb3U6hWEcn8/vvG/QZSjlfDx+d08yGJTrFwRZ9s7XOPvUvtF1N5vbLcvMg7Ki261cl+MxjuvbyNhsVq4dgHlSuY5hiDICVlA4IMAIAADQKwCdASqQAJAAPoU4lUelI6IhNvWLIKAQiUAZv0Jri9JqmyCMj2G7t4PMB5rvnS76B6AHTD/4zAZO4L/X+HflE9rIM985pbjtjLq0f8Sv/L0oeQ3+2/ZDzF/j3ka9DD/n/0flQJ7bOct2qqUi11Di2zbZ0CzZV7u0D7WsVKOayRBAaUzsRLh9GiivLlyRM0t+E014JqfmvA1WQHbJbfko4pshHtVCS88ADUzqdz5kSJqU9a5jE0+a/qIcZzPlpLdnG1lSh/vKtPDTpuwqi16nC9Eup/1uQFMRVliCxDpjl50xjq2qU/+viaNSEp8H7Pr1xYnMUArhfhvAWlW0JaObWi69bX/KPC1Rwh1YNE6WOMTrL2LMyWgk0g5OZ3jOVTsgJaTsuYIYciTpZUqWyGXg+F3HGn19XdwEke5icNy2pvx6MCtxI5nXcNLriyGAhtSRFA+3gjsv8SCowRkED5eRHn9XUtFSoAD+/PhAA/7c71fGGP2yBq7d1iuKHek/8x8Em1/EozG7rlX+DKit9jPauOqFbt74QLBykuVL3VDmDeDJ0yXCiPJAtkVQhlWoHw+NJBUP1PSHXEozxVoMiZ5V6dL1xyRlbOc6jt9BzFldx+TdmT1yabODRxq8ni5Dnw7U6ytAFEnCSPr1D0OmcXLBZObVFYKg8LMIQ2zXBZF+P6vSa90kZwDK7I9RpQ+POrwhU7IEQ3KnD15GSWZxLb7rImHolEpmx2pZEFqeIKK9iAwE70ImWXrxKqIZoV36qyO+a8iNRe0Aot0yXqhy+6hJq7K/RwAnp3yAJcT7cd5vI1Tw/dvhH9YoUsYf55j9VJdTy16ftchMtV4z0J3dyrLEwcJATBRivyR/Rb3Hfcawr577o53rU+aknMlT4vuQOaBzSOM28bfDhGCR7ujMKPWniNxxYFgs2OOMhMVL36c4dl64HjCeWYZjFjCDCHEg1gdEo12tAwo4RYCeQM6MJhT5Syz8uKx1bwXYjIfavfLTQjPTWNrv1ByYMA8oJot1DAJRpjvPOrFQ/944p6vUTPMPy0XLLfcMkX3ZEhRqFsICf1j0uWgAJ37un6qJlI/tfjLRn+/bTlU+Djqzug5xIwtBp1z059G9ba4Djlt44YnHtGsdbsBb7pcSS4LAJIj2uNyqmsE4+yTP32VzodMxGAOpkDoPsJhca5J5bBHuRPzfnSg5kI/oJfK6T2EsrBSGTIjOHnPVtR5GLckrdFG/TASH2B91zeA9JTa5yoxXnWFhAjt97uj8je4T7quBbP2B5ZAAgEAFGLwyb3hIS1QN7gXJCjUfxOIX7FFZ/d7NX431aWEOXtrMIg/f1RNU1X+gXE+L9VefHTTSm+Q/0Fqlr6yc57tlXMcmYIURVsW4iG3gl+GH5gWj/egq64/ms+Yp4uBbLF+VQ255mi8f+5muc2sRXY/9dvZrKiO3Y8nLxeCDpQIHbvJNfyo3Liew+RdXKLcgyDE4VeTxk/4fHM7onMy/ufHaAwdj7aTFot17HAfZMP5HE3G9YB+BS68n8z13djvxTBcQd7taznvNZbZ38PFlJuWb28WMFhRpBU8vxdLyzGQT0ET2vHdSwZyHtlfpL/8K76Jq2PLts6hxCCIQClKS6xdhgA0+nxGCim0TiXbri3CoZg2C+N0G4qjff8T6+zcXu6fHYU5h5HsgegFGEvumaDOdmdHLviqW7FulbEex9qc2OekyyC447cYUzH4RaE+5++WVxLS+QQi28ZRRleQ/XmkLjcWC4u2ZoxwoL9lhYepLx9ambr48iC8gcWx8QqoWiO0neU9aUx9QWU3flyHAiSmzqXn9q60Q0WfUI/iPutnGu07cGKy5prNVQzp1O97O7EnzLzGiMvbffLxkms2lG8yQzD73nhzQqNh04rdQA/AzBLEsyfNMJ8GfkWPNYgey8ONgRuqsvAGc3tHhAtVvlzdtk2S9bL1c7POmxc26MapXq+9jC6fclbmDHJtDaSxWOEgHhvkqgEQE8HNs+P9ReouJN2gHqR623iR69kra8ULyksyHY/YNJnpc4s1mH8LaxrPZmpwFn16B0DY3N5u9ZXo7lf9Uh9rPcj5SB9yQGwQFUKxgFIbCEx04pZkD+1YVk9CYmS07tsX3tviFCElTxgQFzzy1sPe9AlRKizMhM1XVmDF03FWdfFQDIBWtWG+wmrTGvorO49KNUzk7Ob+bgY9/j2MfqwkX+c9sc/N768iEflzVD01HzzdZeZR+73qfEFvqmQxJPQv0oftKS3cQdD4aDeKijY5XY/p/iMKJ+Haa7+mS6sa1VXOd9A0x243cKcZFv9XDQb0QU9pljJ9SZ5kQhu73q0IlUbrgXKEhld38b02iYZV4rhAiF564sR0cd53ygi7zVb67vric3noLDojtUsxhYAb+AlEAGqsN39GEROZByY64KJo0qsYYmkwsEESZ1/ZFa/095tp5beRNiBMuGLYEDzfOuqSSdRP+2udXC4L86NWP7IUoUlps2Z6Q2/qzB0B4Yt+6uCcfb+7BYWAabhqYiadFlo9PQO1BfxdIvcivkoyo83WXN3zppyC/c5bmEWOdc1MjyUUPvPAex1Bc421uWGRNPsuBbyZH9NyNmtnvNOe0WqUySd/Rmj9WF/tJyXRDZJQFfsGWnPdqgi8N8C24ozqy73+Zj0tUF6UGaDBbxoiW8lQ+TIeAXhh7n0FjDSYKl22hkvqr0xwgn9R+KeKLM9aMbQBPJbcfp+Ly0pVSte60Z/snzO08R2AxZ8/csJlLlyoumK+9ecmN/GJDF/0Z86xxgNRvSgwSfMxzftuj1qssMUG2XwTFx+AMT+msVF8CnwjXpUKDIzu9JOdnYnDWTJWpRRTARerTmLN3riae5xp7gFpoIdtwaHz8PdAV3GhU/gCvOMwqPkagtp49gacYxp/Q07QUO+pKx6nRISPp9wDn6v84atUUnfo9sRr8C8uotzDow3AVLClKwYyl1rE11EwGvaYAAAAAAA==",
  Un = {
    class: "memepad-new-form-nsfw"
  },
  Ln = {
    class: "setting"
  },
  On = {
    class: "label"
  },
  Cn = E({
    __name: "NSFW",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(e) {
      const t = q(e, "modelValue");
      return (s, r) => {
        const l = Rn,
          a = Mt;
        return p(), w("div", Un, [_("div", Ln, [_("div", On, $(("t" in s ? s.t : o(I))("memepad.new.step_1.field_nsfw.label")), 1), S(l, {
          modelValue: t.value,
          "onUpdate:modelValue": r[0] || (r[0] = c => t.value = c)
        }, null, 8, ["modelValue"])]), S(a, {
          text: ("t" in s ? s.t : o(I))("memepad.new.step_1.field_nsfw.message"),
          image: o(Tn),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }),
  Nn = P(Cn, [
    ["__scopeId", "data-v-cf4bf4c7"]
  ]),
  Bn = {
    class: "memepad-new-step-2"
  },
  Dn = E({
    __name: "2",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(e, {
      emit: t
    }) {
      const s = e,
        r = t,
        l = T(!1),
        a = T({
          ...s.state.step2
        }),
        c = () => r("continue", a.value);
      return (n, i) => {
        const v = oe,
          f = wn,
          u = En,
          g = Nn,
          b = X,
          k = ee;
        return p(), w("div", Bn, [S(v, {
          step: 2
        }), S(f, {
          modelValue: o(a).bannerFileKey,
          "onUpdate:modelValue": i[0] || (i[0] = d => o(a).bannerFileKey = d)
        }, null, 8, ["modelValue"]), S(u, {
          modelValue: o(a).socialProviders,
          "onUpdate:modelValue": i[1] || (i[1] = d => o(a).socialProviders = d),
          onIsValid: i[2] || (i[2] = d => l.value = d)
        }, null, 8, ["modelValue"]), S(g, {
          modelValue: o(a).isNSFW,
          "onUpdate:modelValue": i[3] || (i[3] = d => o(a).isNSFW = d)
        }, null, 8, ["modelValue"]), S(k, null, {
          default: N(() => [S(b, {
            label: ("t" in n ? n.t : o(I))("base.continue"),
            fill: "",
            tertiary: "",
            size: o(G).LARGE,
            disabled: !o(l),
            onClick: c
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  jn = P(Dn, [
    ["__scopeId", "data-v-2e24fde9"]
  ]);

function qn(e, t = 83) {
  let s = null;
  return function() {
    s && (clearTimeout(s), s = null);
    const r = this,
      l = arguments;
    s = setTimeout(() => e.apply(r, l), t)
  }
}

function Wn(e) {
  const {
    top: t,
    bottom: s
  } = e.getBoundingClientRect();
  return (t + s) / 2
}

function Me(e) {
  return e.map(t => {
    switch (typeof t) {
      case "string":
        return {
          value: t, name: t
        };
      case "number":
      case "boolean":
        return {
          value: t, name: `${t}`
        }
    }
    return t
  })
}

function We(e) {
  return e.changedTouches || e.touches
}

function re(e) {
  return We(e) ? e.changedTouches[0] || e.touches[0] : e
}
const Ke = E({
  props: {
    modelValue: null,
    options: {
      type: Array,
      default: () => []
    },
    dragSensitivity: {
      type: Number,
      default: 1.7
    },
    touchSensitivity: {
      type: Number,
      default: 1.7
    },
    scrollSensitivity: {
      type: Number,
      default: 1
    },
    empty: {
      type: String,
      default: "No Items"
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  emits: {
    "update:modelValue": e => !0,
    start: () => !0,
    move: e => !0,
    end: e => !0,
    cancel: () => !0,
    wheel: e => !0,
    click: (e, t) => !0
  },
  data() {
    var e;
    const t = Me(this.options);
    let s = t.findIndex(l => l.value == this.modelValue);
    s === -1 && !this.placeholder && !this.$slots.placeholder && this.options.length > 0 && (s = 0);
    const r = ((e = t[s]) == null ? void 0 : e.value) ?? null;
    return {
      resizeObserver: null,
      refItems: [],
      internalOptions: t,
      internalIndex: s,
      internalValue: r,
      bounds: [],
      boundMin: 0,
      boundMax: 0,
      scroll: null,
      scrollOffsetTop: 0,
      scrollMin: 0,
      scrollMax: 0,
      transitionTimeout: null,
      start: null,
      isDragging: !1
    }
  },
  computed: {
    hasPlaceholder() {
      return !!(this.placeholder || this.$slots.placeholder)
    }
  },
  watch: {
    modelValue(e) {
      if (e == null && this.hasPlaceholder) {
        this.scrollTo(this.findScrollByIndex(-1));
        return
      }
      const t = this.internalOptions.findIndex(s => s.value == e);
      if (t === -1) {
        this.$emit("update:modelValue", this.internalValue);
        return
      }
      this.internalIndex !== t && (this.internalIndex = t, this.scrollTo(this.findScrollByIndex(t)))
    },
    options: {
      handler(e) {
        var t;
        const s = this.internalOptions = Me(e);
        let r = s.findIndex(a => a.value == this.modelValue);
        r === -1 && !this.hasPlaceholder && this.options.length > 0 && (r = 0);
        const l = ((t = s[r]) == null ? void 0 : t.value) ?? null;
        this.$nextTick(() => {
          this.calculateBounds(), this.scroll = this.findScrollByIndex(r), this.internalIndex = r, this.internalValue !== l && this.$emit("update:modelValue", this.internalValue = l)
        })
      },
      deep: !0
    }
  },
  beforeUpdate() {
    this.refItems = []
  },
  mounted() {
    this.calculateBounds(), this.scroll = this.findScrollByIndex(this.internalIndex), this.internalValue !== this.modelValue && this.$emit("update:modelValue", this.internalValue);
    const e = this.$el;
    e.addEventListener("touchstart", this.onStart), e.addEventListener("touchmove", this.onMove), e.addEventListener("touchend", this.onEnd), e.addEventListener("touchcancel", this.onCancel), "onwheel" in e ? e.addEventListener("wheel", this.onWheel) : "onmousewheel" in e ? e.addEventListener("mousewheel", this.onWheel) : "onDOMMouseScroll" in e && e.addEventListener("DOMMouseScroll", this.onWheel), e.addEventListener("mousedown", this.onStart), document.addEventListener("mousemove", this.onMove), document.addEventListener("mouseup", this.onEnd), document.addEventListener("mouseout", this.onDocumentMouseOut), typeof window.ResizeObserver < "u" && (this.resizeObserver = new window.ResizeObserver(() => this.resize())).observe(e)
  },
  beforeUnmount() {
    var e;
    const t = this.$el;
    t.removeEventListener("touchstart", this.onStart), t.removeEventListener("touchmove", this.onMove), t.removeEventListener("touchend", this.onEnd), t.removeEventListener("touchcancel", this.onCancel), "onwheel" in t ? t.removeEventListener("wheel", this.onWheel) : "onmousewheel" in t ? t.removeEventListener("mousewheel", this.onWheel) : "onDOMMouseScroll" in t && t.removeEventListener("DOMMouseScroll", this.onWheel), t.removeEventListener("mousedown", this.onStart), document.removeEventListener("mousemove", this.onMove), document.removeEventListener("mouseup", this.onEnd), document.removeEventListener("mouseout", this.onDocumentMouseOut), (e = this.resizeObserver) == null || e.disconnect()
  },
  methods: {
    setRefItem(e) {
      this.refItems.push(e)
    },
    resize() {
      this.$nextTick(() => {
        this.calculateBounds(), this.scroll = this.findScrollByIndex(this.internalIndex)
      })
    },
    calculateBounds() {
      const e = this.$refs.rotator,
        t = this.$refs.layerSelection,
        s = e.getBoundingClientRect().top,
        r = this.bounds = this.refItems.map(n => Wn(n) - s).sort((n, i) => n - i),
        l = this.boundMin = Math.min(...r),
        a = this.boundMax = Math.max(...r),
        c = this.scrollOffsetTop = t.offsetTop + t.offsetHeight / 2;
      this.scrollMin = c - l, this.scrollMax = c - a
    },
    sanitizeInternalIndex(e) {
      return Math.min(Math.max(e, this.hasPlaceholder ? -1 : 0), this.internalOptions.length - 1)
    },
    findIndexFromScroll(e) {
      let t = null,
        s = 0;
      return this.bounds.forEach((r, l) => {
        const a = r + e - this.scrollOffsetTop;
        (t === null || Math.abs(t) > Math.abs(a)) && (s = l, t = a)
      }), this.hasPlaceholder || this.options.length === 0 ? s - 1 : s
    },
    findScrollByIndex(e) {
      let t = e;
      return (this.hasPlaceholder || this.options.length === 0) && t++, e > -1 && t in this.bounds ? this.scrollOffsetTop - this.bounds[t] : e >= this.bounds.length ? this.scrollOffsetTop - this.boundMax : this.scrollOffsetTop - this.boundMin
    },
    onWheel(e) {
      if (this.scroll >= this.scrollMin && e.deltaY < 0 || this.scroll <= this.scrollMax && e.deltaY > 0 || this.bounds.length === 1) return;
      e.preventDefault();
      const t = this.sanitizeInternalIndex(this.internalIndex + (e.deltaY > 0 ? 1 : -1)),
        s = e.deltaY > 0 ? this.findScrollByIndex(t - 1) - this.findScrollByIndex(t) : this.findScrollByIndex(t) - this.findScrollByIndex(t + 1),
        r = Math.max(Math.min(e.deltaY, s), s * -1);
      this.scroll = Math.min(Math.max(this.scroll - r * this.scrollSensitivity, this.scrollMax), this.scrollMin);
      const l = this.sanitizeInternalIndex(this.findIndexFromScroll(this.scroll)),
        a = this.internalOptions[l],
        c = (a == null ? void 0 : a.value) ?? null;
      this.internalIndex = l, this.$emit("wheel", c), this.internalValue !== c && !(a != null && a.disabled) && this.$emit("update:modelValue", this.internalValue = c), this.onAfterWheel(() => {
        this.correction(this.scroll)
      })
    },
    onAfterWheel: qn(e => {
      e()
    }, 200),
    onStart(e) {
      e.cancelable && e.preventDefault();
      const {
        clientY: t
      } = re(e);
      this.start = [this.scroll, t], this.isDragging = !1, this.$emit("start")
    },
    onMove(e) {
      var t;
      if (!this.start) return;
      e.cancelable && e.preventDefault();
      const {
        clientY: s
      } = re(e), r = s - this.start[1];
      Math.abs(r) > 1.5 && (this.isDragging = !0), this.scroll = this.start[0] + r * (We(e) ? this.touchSensitivity : this.dragSensitivity);
      const l = this.sanitizeInternalIndex(this.findIndexFromScroll(this.scroll)),
        a = ((t = this.internalOptions[l]) == null ? void 0 : t.value) ?? null;
      this.$emit("move", a)
    },
    onEnd(e) {
      this.start && (e.cancelable && e.preventDefault(), this.isDragging ? this.correction(this.scroll) : this.onClick(e), this.start = null, this.isDragging = !1, this.$emit("end", this.internalValue))
    },
    onDocumentMouseOut(e) {
      var t;
      (e.relatedTarget === null || ((t = e.relatedTarget) == null ? void 0 : t.nodeName) === "HTML") && this.onCancel(e)
    },
    onCancel(e) {
      e.cancelable && e.preventDefault(), this.scrollTo(this.findScrollByIndex(this.internalIndex)), this.start = null, this.isDragging = !1, this.$emit("cancel")
    },
    onClick(e) {
      const t = this.$refs.layerTop,
        s = this.$refs.layerBottom,
        {
          clientX: r,
          clientY: l
        } = re(e),
        a = t.getBoundingClientRect(),
        c = s.getBoundingClientRect();
      let n = this.internalIndex;
      if (a.left <= r && r <= a.right && a.top <= l && l <= a.bottom) {
        if (this.internalIndex === (this.hasPlaceholder ? -1 : 0)) return;
        for (n--; this.internalOptions[n] && this.internalOptions[n].disabled;) n--
      } else if (c.left <= r && r <= c.right && c.top <= l && l <= c.bottom) {
        if (this.internalIndex === this.internalOptions.length - 1) return;
        for (n++; this.internalOptions[n] && this.internalOptions[n].disabled;) n++
      }
      if (this.internalIndex !== n && this.internalOptions[n]) {
        const i = this.internalValue,
          v = this.internalOptions[n].value;
        this.scrollTo(this.findScrollByIndex(n), () => {
          this.internalIndex = n, this.emitModalValue(v)
        }), this.$emit("click", v, i)
      }
    },
    correction(e) {
      var t;
      const s = this.hasPlaceholder || this.options.length === 0 ? 1 : 0,
        r = this.bounds.map((a, c) => [c - s, a + e - this.scrollOffsetTop]).sort((a, c) => Math.abs(a[1]) - Math.abs(c[1])).map(([a]) => a);
      let l = 0;
      for (; r[l] != null && this.internalOptions[r[l]] && this.internalOptions[r[l]].disabled;) l++;
      if (r[l] === -1 || r[l] != null && this.internalOptions[r[l]]) {
        const a = r[l],
          c = ((t = this.internalOptions[a]) == null ? void 0 : t.value) ?? null;
        this.scrollTo(this.findScrollByIndex(a), () => {
          this.internalIndex = a, this.emitModalValue(c)
        })
      } else this.scrollTo(this.findScrollByIndex(this.internalIndex))
    },
    scrollTo(e, t) {
      this.scroll = e, this.transitionTimeout && clearTimeout(this.transitionTimeout), this.transitionTimeout = setTimeout(() => {
        this.transitionTimeout = null, t == null || t()
      }, 100)
    },
    emitModalValue(e) {
      this.internalValue !== e && this.$emit("update:modelValue", this.internalValue = e)
    }
  },
  render() {
    let e = [];
    return this.hasPlaceholder ? e.push(j("div", {
      class: ["vue-scroll-picker-item", "vue-scroll-picker-item-placeholder", {
        "vue-scroll-picker-item-selected": this.internalIndex === -1
      }],
      ref: t => t && this.setRefItem(t)
    }, Z(this.$slots, "placeholder", {
      text: this.placeholder
    }, () => [this.placeholder]))) : this.internalOptions.length === 0 && e.push(j("div", {
      class: ["vue-scroll-picker-item", "vue-scroll-picker-item-empty", "vue-scroll-picker-item-selected"],
      ref: t => t && this.setRefItem(t)
    }, Z(this.$slots, "empty", {
      text: this.empty
    }, () => [this.empty]))), e = e.concat(this.internalOptions.map((t, s) => j("div", {
      class: ["vue-scroll-picker-item", {
        "vue-scroll-picker-item-selected": this.internalIndex === s,
        "vue-scroll-picker-item-disabled": t.disabled
      }],
      key: t.value,
      ref: r => r && this.setRefItem(r)
    }, Z(this.$slots, "default", {
      option: t
    }, () => [t.name])))), j("div", {
      class: ["vue-scroll-picker"]
    }, [j("div", {
      ref: "rotator",
      class: ["vue-scroll-picker-rotator", {
        "vue-scroll-picker-rotator-transition": this.transitionTimeout
      }],
      style: typeof this.scroll == "number" ? {
        top: `${this.scroll}px`
      } : {}
    }, e), j("div", {
      class: ["vue-scroll-picker-layer"]
    }, [j("div", {
      class: ["vue-scroll-picker-layer-top"],
      ref: "layerTop"
    }), j("div", {
      class: ["vue-scroll-picker-layer-selection"],
      ref: "layerSelection"
    }), j("div", {
      class: ["vue-scroll-picker-layer-bottom"],
      ref: "layerBottom"
    })])])
  }
});

function Kn(e) {
  e.component("VueScrollPicker", Ke)
}
typeof window < "u" && window.Vue && Kn(window.Vue);
const zn = {
    class: "memepad-new-form-share-wheel"
  },
  Gn = {
    class: "option-wrapper"
  },
  Jn = {
    class: "option"
  },
  Hn = E({
    __name: "ShareWheel",
    props: K({
      overview: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const t = e,
        s = q(e, "modelValue"),
        r = U(() => {
          var v;
          let l = new z(0);
          const a = [],
            c = [{
              lt: 5,
              add: .1
            }, {
              lt: 20,
              add: .5
            }, {
              lt: 40,
              add: 1
            }, {
              lt: 70,
              add: 5
            }, {
              lt: 1e3,
              add: 10
            }],
            n = f => {
              const u = new z(f).decimalPlaces();
              return f.toFixed(Math.min(u, 2))
            };
          c.forEach(({
            lt: f,
            add: u
          }) => {
            for (; l.lt(f);) a.push({
              name: n(l),
              value: l.toNumber()
            }), l = z.min(l.add(u), f)
          }), a.push({
            name: n(l),
            value: l.toNumber()
          });
          const i = (v = t.overview) == null ? void 0 : v.tonForDexWithFees;
          return i && a.push({
            name: n(i),
            value: i.toNumber()
          }), a.filter(f => i ? i.gte(f.value) : !0).sort((f, u) => f.value - u.value)
        });
      return (l, a) => (p(), w("div", zn, [S(o(Ke), {
        modelValue: s.value,
        "onUpdate:modelValue": a[0] || (a[0] = c => s.value = c),
        options: o(r)
      }, {
        default: N(({
          option: c
        }) => [_("div", Gn, [_("div", Jn, $(c.name), 1), a[1] || (a[1] = _("div", null, null, -1))])]),
        _: 1
      }, 8, ["modelValue", "options"]), a[2] || (a[2] = _("div", {
        class: "ton"
      }, "TON", -1))]))
    }
  }),
  Qn = P(Hn, [
    ["__scopeId", "data-v-5876f720"]
  ]),
  Zn = {
    class: "memepad-new-step-3"
  },
  Yn = {
    class: "buttons"
  },
  Xn = {
    key: 0,
    class: "error-message"
  },
  es = {
    class: "label"
  },
  ts = {
    key: 1,
    class: "received-jetton"
  },
  ns = {
    key: 0
  },
  ss = {
    key: 2,
    class: "ton-balance"
  },
  os = {
    class: "left"
  },
  as = {
    class: "label"
  },
  ls = {
    class: "balance"
  },
  rs = E({
    __name: "3",
    props: {
      state: {},
      jettonManagement: {}
    },
    emits: ["continue", "update"],
    setup(e, {
      emit: t
    }) {
      const s = e,
        r = t,
        l = Re(),
        a = Te(),
        c = () => Ue().bottom.success(I("memepad.jetton.new.error_alert"));
      a.onConnectError(c);
      const n = U(() => {
          var h;
          return l.wallet.value.status === "connected" ? (h = l.wallet.value.balance) == null ? void 0 : h.tonBalance : void 0
        }),
        i = T(s.state.step3.overview ? {
          status: "loaded",
          share: s.state.step3.share ?? 0,
          overview: s.state.step3.overview
        } : {
          status: "idle",
          share: s.state.step3.share ?? 0
        }),
        v = T(!1),
        f = U(() => {
          if (i.value.status === "loading") return;
          if (!i.value.overview) return new z(i.value.share).isZero() ? `${Se(new z(0),s.state.step1.ticker).frontendWithSymbol} ・ 0%` : void 0;
          const h = Se(new z(i.value.overview.minReceive), s.state.step1.ticker);
          return i.value.overview ? `${h.frontendWithSymbol} ・ ${ct(i.value.overview.jettonReceivePercent)}%` : h.frontendWithSymbol
        }),
        u = U(() => {
          if (n.value) return n.value.balance.value.gte(i.value.share)
        }),
        g = () => {
          u.value !== void 0 && !u.value || k()
        },
        b = async () => {
          if (u.value !== void 0 && !u.value) return;
          const h = i.value.share,
            x = await s.jettonManagement.getJettonOverview(h);
          h === i.value.share && (te(x) ? i.value = {
            status: "loaded",
            share: i.value.share,
            overview: x.data
          } : i.value = {
            status: "error",
            share: i.value.share,
            overview: void 0
          }, r("update", {
            share: i.value.share,
            overview: te(x) ? x.data : void 0
          }))
        }, k = async () => {
          if (i.value.status === "loaded") return r("continue", {
            share: i.value.share,
            overview: i.value.overview
          });
          v.value = !0;
          const h = await s.jettonManagement.getJettonOverview(i.value.share);
          te(h) ? r("continue", {
            share: i.value.share,
            overview: h.data
          }) : c(), v.value = !1
        }, {
          debouncedFunction: d
        } = dt(b, 400);
      return _e(() => i.value.share, () => {
        i.value.status = "loading", d()
      }), (h, x) => {
        const m = oe,
          y = Qn,
          M = J,
          V = $t,
          F = Be,
          R = X,
          C = ee;
        return p(), w("div", Zn, [S(m, {
          step: 3
        }), S(y, {
          modelValue: o(i).share,
          "onUpdate:modelValue": x[0] || (x[0] = B => o(i).share = B),
          class: "wheel",
          overview: o(i).overview
        }, null, 8, ["modelValue", "overview"]), S(C, null, {
          default: N(() => [_("div", Yn, [o(l).wallet.value.status === "connected" && o(a).tonConnectUI.value.connected && o(l).wallet.value.balance && !o(u) ? (p(), w("div", Xn, [S(M, {
            name: "circle-warning",
            class: "icon"
          }), _("span", es, $(("t" in h ? h.t : o(I))("memepad.jetton.not_enough_error", {
            ticker: "TON"
          })), 1)])) : (p(), w("div", ts, [o(f) ? (p(), w("span", ns, $(o(f)), 1)) : (p(), L(V, {
            key: 1,
            class: "received-jetton-skeleton"
          }))])), o(l).wallet.value.status === "connected" && o(a).tonConnectUI.value.connected && o(l).wallet.value.balance ? (p(), w("div", ss, [_("div", os, [x[1] || (x[1] = _("img", {
            class: "img",
            src: ut,
            alt: "Ton logo",
            width: "24",
            height: "24"
          }, null, -1)), _("span", as, $(("t" in h ? h.t : o(I))("memepad.new.step_3.balance_label")), 1)]), _("div", ls, $(o(l).wallet.value.balance.tonBalance.balance.frontendWithSymbol), 1)])) : O("", !0), o(l).wallet.value.status === "connected" && o(a).tonConnectUI.value.connected && o(l).wallet.value.balance && !o(u) ? (p(), L(F, {
            key: 3
          })) : (p(), L(R, {
            key: 4,
            label: ("t" in h ? h.t : o(I))("base.continue"),
            fill: "",
            tertiary: "",
            size: o(G).LARGE,
            loading: o(v),
            onClick: g
          }, null, 8, ["label", "size", "loading"]))])]),
          _: 1
        })])
      }
    }
  }),
  is = P(rs, [
    ["__scopeId", "data-v-c723723c"]
  ]),
  cs = {
    class: "memepad-jetton-logo-ticker"
  },
  us = ["src"],
  ds = {
    class: "ticker-name-compose"
  },
  ms = {
    class: "ticker"
  },
  ps = {
    class: "name"
  },
  vs = E({
    __name: "LogoTicker",
    props: {
      logoFileKey: {},
      ticker: {},
      name: {}
    },
    setup(e) {
      return (t, s) => (p(), w("div", cs, [_("img", {
        src: o(se)(t.logoFileKey),
        alt: "Jetton logo"
      }, null, 8, us), _("div", ds, [_("div", ms, $(t.ticker), 1), _("div", ps, $(t.name), 1)])]))
    }
  }),
  hs = P(vs, [
    ["__scopeId", "data-v-39dff782"]
  ]),
  fs = {
    class: "memepad-new-price-details"
  },
  _s = {
    class: "key"
  },
  gs = {
    class: "value"
  },
  bs = {
    class: "memepad-new-price-details-fee-details"
  },
  ys = {
    class: "label"
  },
  ws = {
    class: "row total"
  },
  Ss = {
    class: "key"
  },
  ks = {
    key: 0,
    class: "not-enough-balance"
  },
  xs = {
    class: "label"
  },
  Is = {
    key: 1,
    class: "value"
  },
  Ms = {
    class: "label"
  },
  $s = E({
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
    setup(e) {
      return (t, s) => {
        const r = J,
          l = Et;
        return p(), w("div", fs, [(p(!0), w(W, null, Y(t.details.sections, a => (p(), w("div", {
          key: a.title,
          class: "row"
        }, [_("div", _s, $(a.title), 1), _("div", gs, [S(l, null, {
          default: N(() => [S(r, {
            name: "circle-help",
            class: "memepad-new-price-details-tooltip-icon"
          })]),
          inner: N(() => [_("div", bs, [(p(!0), w(W, null, Y(a.details, c => (p(), w("span", {
            key: c.label,
            class: Fe({
              highlighted: c.highlight
            })
          }, $(c.label), 3))), 128))])]),
          _: 2
        }, 1024), _("span", ys, $(a.label), 1)])]))), 128)), t.details.totalSection ? (p(), w(W, {
          key: 0
        }, [s[0] || (s[0] = _("div", {
          class: "divider"
        }, null, -1)), _("div", ws, [_("div", Ss, $(t.details.totalSection.title), 1), t.notEnoughBalance ? (p(), w("div", ks, [S(r, {
          name: "circle-help",
          class: "icon"
        }), _("span", xs, $(("t" in t ? t.t : o(I))("memepad.jetton.not_enough_error", {
          ticker: "TON"
        })), 1)])) : (p(), w("div", Is, [_("span", Ms, $(t.details.totalSection.label), 1)]))])], 64)) : O("", !0)])
      }
    }
  }),
  Vs = P($s, [
    ["__scopeId", "data-v-a59dc9db"]
  ]),
  As = {
    class: "memepad-new-step-overview"
  },
  Es = {
    class: "button-wrapper"
  },
  Fs = E({
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
    setup(e, {
      emit: t
    }) {
      const s = e,
        r = t,
        l = Re(),
        a = Te(),
        c = () => Ue().bottom.success(I("memepad.jetton.new.error_alert"));
      a.onConnectError(c);
      const n = U(() => {
          const g = s.tonUsdRate && s.form.overview.marketCapTon.mul(s.tonUsdRate),
            b = s.tonUsdRate && s.form.overview.priceTon.mul(s.tonUsdRate);
          return {
            percent: s.form.overview.tonCollectedPercent,
            collected: s.form.overview.tonCollected,
            total: s.form.overview.tonForDex,
            marketDetails: {
              marketCap: g,
              listRows: {
                price: b,
                availableSupply: s.form.overview.availableSupply,
                maxSupply: s.form.overview.maxSupply
              }
            }
          }
        }),
        i = U(() => s.jettonManagement.getPriceDetails(s.form.overview)),
        v = U(() => {
          var b;
          const g = l.wallet.value.status === "connected" ? (b = l.wallet.value.balance) == null ? void 0 : b.tonBalance : void 0;
          if (g) return g.balance.value.gte(i.value.total)
        }),
        f = T(!1),
        u = async () => {
          if (!v.value || f.value) return;
          f.value = !0, await s.launchCallback(s.form) ? r("continue") : c(), f.value = !1
        };
      return (g, b) => {
        const k = oe,
          d = hs,
          h = kt,
          x = Vt,
          m = Vs,
          y = Be,
          M = X,
          V = xt,
          F = ee;
        return p(), w("div", As, [S(k, {
          step: 4,
          class: "heading"
        }), S(d, {
          "logo-file-key": g.form.iconFileKey,
          ticker: g.form.ticker,
          name: g.form.name,
          class: "logo-ticker"
        }, null, 8, ["logo-file-key", "ticker", "name"]), S(h, {
          "banner-file-key": g.form.bannerFileKey,
          class: "banner"
        }, null, 8, ["banner-file-key"]), S(x, mt(pt(o(n))), null, 16), S(F, null, {
          default: N(() => [S(m, {
            "with-share": !!g.form.share,
            details: o(i),
            "not-enough-balance": o(v) === !1
          }, null, 8, ["with-share", "details", "not-enough-balance"]), _("div", Es, [S(V, null, {
            default: N(() => [o(v) ? (p(), L(M, {
              key: 1,
              label: ("t" in g ? g.t : o(I))("memepad.new.step_4.launch_btn"),
              fill: "",
              size: o(G).LARGE,
              type: o(vt).DROP,
              onClick: u
            }, null, 8, ["label", "size", "type"])) : (p(), L(y, {
              key: 0
            }))]),
            _: 1
          })])]),
          _: 1
        })])
      }
    }
  }),
  Ps = P(Fs, [
    ["__scopeId", "data-v-f18ecdd0"]
  ]),
  Rs = {
    class: "memepad-new-step-launch"
  },
  Ts = {
    class: "inner"
  },
  Us = {
    class: "icon-wrapper"
  },
  Ls = {
    class: "error-icon"
  },
  Os = {
    class: "title"
  },
  Cs = {
    class: "subtitle"
  },
  Ns = {
    class: "inner"
  },
  Bs = {
    class: "icon-wrapper"
  },
  Ds = ["src"],
  js = {
    class: "title"
  },
  qs = {
    class: "subtitle"
  },
  Ws = {
    key: 0,
    class: "rocket-wrapper"
  },
  Ks = 3e3,
  zs = E({
    __name: "Launch",
    props: {
      form: {},
      retryCallback: {
        type: Function
      }
    },
    setup(e, {
      expose: t
    }) {
      const s = ce(),
        r = T("LOADING"),
        l = [],
        a = () => new Promise(i => {
          r.value = "ROCKET", l.push(setTimeout(() => {
            i(void 0)
          }, Ks))
        }),
        c = () => {
          r.value = "ERROR"
        },
        n = () => {
          l.forEach(clearTimeout), r.value = "LOADING"
        };
      return ht(() => {
        n()
      }), t({
        runSuccess: a,
        runError: c
      }), (i, v) => {
        const f = Ft,
          u = J,
          g = X,
          b = ee,
          k = ft;
        return p(), w("div", Rs, [S(f), o(r) === "ERROR" ? (p(), w(W, {
          key: 0
        }, [_("div", Ts, [_("div", Us, [_("div", Ls, [S(u, {
          name: "warning",
          class: "icon"
        })])]), _("div", Os, $(("t" in i ? i.t : o(I))("memepad.new.failed.title", {
          ticker: i.form.ticker
        })), 1), _("div", Cs, $(("t" in i ? i.t : o(I))("memepad.new.failed.subtitle")), 1)]), S(b, null, {
          default: N(() => [S(g, {
            fill: "",
            label: ("t" in i ? i.t : o(I))("memepad.new.retry_btn_label"),
            size: o(G).LARGE,
            onClick: v[0] || (v[0] = d => i.retryCallback(i.form))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64)) : (p(), w(W, {
          key: 1
        }, [_("div", Ns, [_("div", Bs, [_("img", {
          src: o(se)(i.form.iconFileKey),
          alt: "Jetton logo",
          width: "80",
          height: "80"
        }, null, 8, Ds)]), _("div", js, $(("t" in i ? i.t : o(I))("memepad.new.step_launch.title")), 1), _("div", qs, $(("t" in i ? i.t : o(I))("memepad.new.step_launch.subtitle")), 1)]), o(r) === "ROCKET" ? (p(), w("div", Ws, [S(k, {
          name: "animations/Rocket",
          size: 348
        })])) : O("", !0), S(b, null, {
          default: N(() => [S(g, {
            fill: "",
            label: ("t" in i ? i.t : o(I))("base.continue"),
            size: o(G).LARGE,
            onClick: v[1] || (v[1] = d => o(s).push({
              name: "memepad"
            }))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64))])
      }
    }
  }),
  Gs = P(zs, [
    ["__scopeId", "data-v-85485fa8"]
  ]),
  Js = {
    class: "memepad-new"
  },
  Hs = E({
    __name: "New",
    props: {
      tonUsdRate: {},
      retryPayload: {},
      jettonManagement: {}
    },
    setup(e) {
      const t = e,
        s = Le(),
        r = ce(),
        l = Oe(),
        a = T();
      Ce().getReferralToken();
      const c = t.jettonManagement.getWaitForCreateStatus(),
        n = T(t.retryPayload ? It(t.retryPayload) : {
          step: 1,
          step1: le.step1(),
          step2: le.step2(),
          step3: le.step3()
        });
      (() => {
        t.retryPayload ? s.memepad.memepadJettonRetry() : s.memepad.memepadJettonStepInfo()
      })();
      const v = (d, h) => {
          const x = {
            step: 2,
            step1: h,
            step2: d.step2,
            step3: d.step3
          };
          n.value = x, s.memepad.memepadJettonStepPersonalise()
        },
        f = (d, h) => {
          const x = {
            step: 3,
            step1: d.step1,
            step2: h,
            step3: d.step3
          };
          n.value = x, s.memepad.memepadJettonStepShare()
        },
        u = (d, h) => {
          const x = {
            step: 4,
            step1: d.step1,
            step2: d.step2,
            step3: h
          };
          n.value = x, s.memepad.memepadJettonStepOverview()
        },
        g = (d, h) => {
          n.value = {
            ...d,
            step3: h
          }
        },
        b = d => {
          const h = {
            step: 5,
            step1: d.step1,
            step2: d.step2,
            step3: d.step3
          };
          n.value = h
        };
      Pt(() => {
        const d = n.value;
        switch (d.step) {
          case 1:
            ce().push({
              name: "memepad"
            });
            break;
          case 2:
            n.value = {
              ...d,
              step: 1
            };
            break;
          case 3:
          case 4:
            n.value = {
              ...d,
              step: d.step - 1
            };
            break;
          case 5:
            return;
          default:
            throw fe("Invalid step")
        }
      });
      const k = async d => {
        const h = await t.jettonManagement.createJetton(d);
        return te(h) ? ((async () => {
          const {
            launchTransactionHash: x,
            queryId: m
          } = h.data;
          s.memepad.memepadJettonStartLaunch({
            jettonId: m
          }), await gt(3e4);
          const y = await c.exec({
            launchTransactionHash: x,
            queryId: m
          });
          y ? s.memepad.memepadJettonEndLaunch({
            status: "success",
            purchaseAmount: d.share,
            jettonAddress: y.address,
            jettonShortname: y.shortname,
            jettonId: m
          }) : s.memepad.memepadJettonEndLaunch({
            status: "failed",
            purchaseAmount: d.share
          }), a.value ? y ? (await a.value.runSuccess(), await r.push({
            name: "memepad-jetton-shortname",
            params: {
              shortname: y.shortname
            }
          })) : a.value.runError() : (y ? s.memepad.memepadJettonLaunchShowNotification({
            status: "success",
            jettonAddress: y.address,
            jettonShortname: y.shortname,
            jettonId: m
          }) : s.memepad.memepadJettonLaunchShowNotification({
            status: "failed"
          }), bt().name !== "game" && (y ? l.showSuccessSheet(d, y.shortname) : l.showErrorSheet(d)))
        })(), !0) : (h.extra && h.extra instanceof Error && h.extra instanceof _t && s.memepad.memepadJettonLaunchWalletUiError(), !1)
      };
      return (d, h) => {
        const x = Dt,
          m = cn,
          y = jn,
          M = is,
          V = Ps,
          F = Gs;
        return p(), w("div", Js, [o(n).step !== 5 ? (p(), L(x, {
          key: 0,
          step: o(n).step,
          "count-steps": 4
        }, null, 8, ["step"])) : O("", !0), o(n).step === 1 ? (p(), L(m, {
          key: 1,
          state: o(n),
          onContinue: h[0] || (h[0] = R => v(o(n), R))
        }, null, 8, ["state"])) : O("", !0), o(n).step === 2 ? (p(), L(y, {
          key: 2,
          state: o(n),
          onContinue: h[1] || (h[1] = R => f(o(n), R))
        }, null, 8, ["state"])) : O("", !0), o(n).step === 3 ? (p(), L(M, {
          key: 3,
          state: o(n),
          "jetton-management": t.jettonManagement,
          onContinue: h[2] || (h[2] = R => u(o(n), R)),
          onUpdate: h[3] || (h[3] = R => g(o(n), R))
        }, null, 8, ["state", "jetton-management"])) : O("", !0), o(n).step === 4 ? (p(), L(V, {
          key: 4,
          form: o(ke)(o(n)),
          "jetton-management": t.jettonManagement,
          "ton-usd-rate": d.tonUsdRate,
          "launch-callback": k,
          onContinue: h[4] || (h[4] = R => b(o(n)))
        }, null, 8, ["form", "jetton-management", "ton-usd-rate"])) : O("", !0), o(n).step === 5 ? (p(), L(F, {
          key: 5,
          ref_key: "stepLaunchApi",
          ref: a,
          form: o(ke)(o(n)),
          "retry-callback": o(l).retry
        }, null, 8, ["form", "retry-callback"])) : O("", !0)])
      }
    }
  }),
  Qs = P(Hs, [
    ["__scopeId", "data-v-9f00743b"]
  ]),
  Zs = {
    class: "memepad-new-page page"
  },
  Ys = E({
    __name: "new",
    setup(e) {
      const {
        defaultManagementSdk: t
      } = At(), {
        popRetryPayload: s
      } = Oe(), {
        tonUsdRate: r
      } = Rt(), l = Le();
      return (() => {
        Ce().getReferralToken(), l.memepad.memepadJettonStart()
      })(), (c, n) => {
        const i = Qs;
        return p(), w("div", Zs, [S(i, {
          "ton-usd-rate": o(r),
          "retry-payload": o(s)(),
          "jetton-management": o(t)
        }, null, 8, ["ton-usd-rate", "retry-payload", "jetton-management"])])
      }
    }
  }),
  mo = P(Ys, [
    ["__scopeId", "data-v-77a6bb1c"]
  ]);
export {
  mo as
  default
};