import {
  bO as ze,
  d as U,
  a as d,
  c as w,
  b as f,
  aL as we,
  j as C,
  F as j,
  L as ke,
  f as A,
  t as V,
  e,
  aA as K,
  r as M,
  aZ as oe,
  bP as me,
  m as x,
  a4 as Re,
  bQ as Ne,
  g as T,
  k,
  bR as W,
  bS as Je,
  a7 as Ue,
  az as z,
  au as Qe,
  av as Se,
  bT as He,
  w as Ce,
  bU as Ze,
  n as Te,
  b6 as _e,
  bV as ne,
  W as D,
  X as Z,
  x as L,
  aC as Pe,
  ap as $e,
  bW as Ye,
  bX as Xe,
  V as ae,
  B as J,
  C as Y,
  N as X,
  bY as et,
  bZ as tt,
  bt as nt,
  bi as Ee,
  b1 as at,
  ak as ot,
  b_ as st,
  ao as Le,
  b8 as Ae,
  af as H,
  an as ce,
  b$ as lt,
  aY as de,
  bI as rt,
  ai as it,
  G as je,
  bc as te,
  am as ut,
  bk as ct,
  c0 as dt,
  Y as pt,
  J as fe,
  ab as Fe,
  o as mt,
  c1 as _t,
  P as ft,
  A as vt,
  c2 as Oe,
  bm as Be,
  c3 as gt,
  b7 as ht,
  ay as bt
} from "./4q655kMI.js";
import {
  K as qe
} from "./Cb1tY54G.js";
import {
  _ as yt,
  a as wt
} from "./BnDIxUOZ.js";
import {
  _ as se
} from "./SxfgLXAP.js";
import {
  i as kt,
  e as St,
  _ as At,
  a as Ft,
  b as De,
  f as It,
  g as Pt,
  d as $t,
  h as Et,
  c as Vt,
  r as xt,
  j as pe,
  k as Ve
} from "./DbCHfXda.js";
import {
  _ as Mt
} from "./DUxt5u7Y.js";
import {
  _ as Rt
} from "./D6ooDtHS.js";
import {
  _ as Nt
} from "./DXZ5s_dV.js";
import {
  _ as Ut
} from "./gP1Vj2vc.js";
import {
  u as Ct
} from "./Cie-b6W3.js";
import {
  _ as Tt
} from "./BnJp0EaA.js";
import {
  u as Lt
} from "./B8VumzBl.js";
import "./Dg1Ck6M8.js";
import "./gZ3aEVfU.js";
import "./CrgZqG5E.js";
var ve = {
  exports: {}
};
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = m;

  function a(_) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? a = function(t) {
      return typeof t
    } : a = function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, a(_)
  }

  function m(_) {
    var u = typeof _ == "string" || _ instanceof String;
    if (!u) {
      var t = a(_);
      throw _ === null ? t = "null" : t === "object" && (t = _.constructor.name), new TypeError("Expected a string but received a ".concat(t))
    }
  }
  p.exports = s.default, p.exports.default = s.default
})(ve, ve.exports);
var Ie = ve.exports,
  ge = {
    exports: {}
  };
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = a;

  function a() {
    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      _ = arguments.length > 1 ? arguments[1] : void 0;
    for (var u in _) typeof m[u] > "u" && (m[u] = _[u]);
    return m
  }
  p.exports = s.default, p.exports.default = s.default
})(ge, ge.exports);
var Ke = ge.exports,
  he = {
    exports: {}
  };
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = t;
  var a = _(Ie),
    m = _(Ke);

  function _(n) {
    return n && n.__esModule ? n : {
      default: n
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

  function t(n, r) {
    (0, a.default)(n), r = (0, m.default)(r, u), r.allow_trailing_dot && n[n.length - 1] === "." && (n = n.substring(0, n.length - 1)), r.allow_wildcard === !0 && n.indexOf("*.") === 0 && (n = n.substring(2));
    var h = n.split("."),
      i = h[h.length - 1];
    return r.require_tld && (h.length < 2 || !r.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(i) || /\s/.test(i)) || !r.allow_numeric_tld && /^\d+$/.test(i) ? !1 : h.every(function(l) {
      return !(l.length > 63 && !r.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(l) || /[\uff01-\uff5e]/.test(l) || /^-|-$/.test(l) || !r.allow_underscores && /_/.test(l))
    })
  }
  p.exports = s.default, p.exports.default = s.default
})(he, he.exports);
var jt = he.exports,
  be = {
    exports: {}
  };
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = h;
  var a = m(Ie);

  function m(i) {
    return i && i.__esModule ? i : {
      default: i
    }
  }
  var _ = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    u = "(".concat(_, "[.]){3}").concat(_),
    t = new RegExp("^".concat(u, "$")),
    n = "(?:[0-9a-fA-F]{1,4})",
    r = new RegExp("^(" + "(?:".concat(n, ":){7}(?:").concat(n, "|:)|") + "(?:".concat(n, ":){6}(?:").concat(u, "|:").concat(n, "|:)|") + "(?:".concat(n, ":){5}(?::").concat(u, "|(:").concat(n, "){1,2}|:)|") + "(?:".concat(n, ":){4}(?:(:").concat(n, "){0,1}:").concat(u, "|(:").concat(n, "){1,3}|:)|") + "(?:".concat(n, ":){3}(?:(:").concat(n, "){0,2}:").concat(u, "|(:").concat(n, "){1,4}|:)|") + "(?:".concat(n, ":){2}(?:(:").concat(n, "){0,3}:").concat(u, "|(:").concat(n, "){1,5}|:)|") + "(?:".concat(n, ":){1}(?:(:").concat(n, "){0,4}:").concat(u, "|(:").concat(n, "){1,6}|:)|") + "(?::((?::".concat(n, "){0,5}:").concat(u, "|(?::").concat(n, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

  function h(i) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, a.default)(i), l = String(l), l ? l === "4" ? t.test(i) : l === "6" ? r.test(i) : !1 : h(i, 4) || h(i, 6)
  }
  p.exports = s.default, p.exports.default = s.default
})(be, be.exports);
var Ot = be.exports,
  ye = {
    exports: {}
  };
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = R;
  var a = t(Ie),
    m = t(jt),
    _ = t(Ot),
    u = t(Ke);

  function t(o) {
    return o && o.__esModule ? o : {
      default: o
    }
  }

  function n(o, c) {
    return y(o) || l(o, c) || h(o, c) || r()
  }

  function r() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }

  function h(o, c) {
    if (o) {
      if (typeof o == "string") return i(o, c);
      var S = Object.prototype.toString.call(o).slice(8, -1);
      if (S === "Object" && o.constructor && (S = o.constructor.name), S === "Map" || S === "Set") return Array.from(o);
      if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)) return i(o, c)
    }
  }

  function i(o, c) {
    (c == null || c > o.length) && (c = o.length);
    for (var S = 0, $ = new Array(c); S < c; S++) $[S] = o[S];
    return $
  }

  function l(o, c) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(o)))) {
      var S = [],
        $ = !0,
        v = !1,
        E = void 0;
      try {
        for (var N = o[Symbol.iterator](), O; !($ = (O = N.next()).done) && (S.push(O.value), !(c && S.length === c)); $ = !0);
      } catch (I) {
        v = !0, E = I
      } finally {
        try {
          !$ && N.return != null && N.return()
        } finally {
          if (v) throw E
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
    F = /^\[([^\]]+)\](?::([0-9]+))?$/;

  function g(o) {
    return Object.prototype.toString.call(o) === "[object RegExp]"
  }

  function P(o, c) {
    for (var S = 0; S < c.length; S++) {
      var $ = c[S];
      if (o === $ || g($) && $.test(o)) return !0
    }
    return !1
  }

  function R(o, c) {
    if ((0, a.default)(o), !o || /[\s<>]/.test(o) || o.indexOf("mailto:") === 0 || (c = (0, u.default)(c, b), c.validate_length && o.length >= 2083) || !c.allow_fragments && o.includes("#") || !c.allow_query_components && (o.includes("?") || o.includes("&"))) return !1;
    var S, $, v, E, N, O, I, B;
    if (I = o.split("#"), o = I.shift(), I = o.split("?"), o = I.shift(), I = o.split("://"), I.length > 1) {
      if (S = I.shift().toLowerCase(), c.require_valid_protocol && c.protocols.indexOf(S) === -1) return !1
    } else {
      if (c.require_protocol) return !1;
      if (o.slice(0, 2) === "//") {
        if (!c.allow_protocol_relative_urls) return !1;
        I[0] = o.slice(2)
      }
    }
    if (o = I.join("://"), o === "") return !1;
    if (I = o.split("/"), o = I.shift(), o === "" && !c.require_host) return !0;
    if (I = o.split("@"), I.length > 1) {
      if (c.disallow_auth || I[0] === "" || ($ = I.shift(), $.indexOf(":") >= 0 && $.split(":").length > 2)) return !1;
      var G = $.split(":"),
        ee = n(G, 2),
        re = ee[0],
        ie = ee[1];
      if (re === "" && ie === "") return !1
    }
    E = I.join("@"), O = null, B = null;
    var Q = E.match(F);
    if (Q ? (v = "", B = Q[1], O = Q[2] || null) : (I = E.split(":"), v = I.shift(), I.length && (O = I.join(":"))), O !== null && O.length > 0) {
      if (N = parseInt(O, 10), !/^[0-9]+$/.test(O) || N <= 0 || N > 65535) return !1
    } else if (c.require_port) return !1;
    return c.host_whitelist ? P(v, c.host_whitelist) : v === "" && !c.require_host ? !0 : !(!(0, _.default)(v) && !(0, m.default)(v, c) && (!B || !(0, _.default)(B, 6)) || (v = v || B, c.host_blacklist && P(v, c.host_blacklist)))
  }
  p.exports = s.default, p.exports.default = s.default
})(ye, ye.exports);
var Bt = ye.exports;
const qt = ze(Bt);

function Dt(p, s) {
  return typeof p == "string" && qt(p, s)
}
const Kt = {
    class: "memepad-new-progress"
  },
  Gt = U({
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
      return (s, a) => (d(), w("div", Kt, [f("div", {
        class: "track",
        style: we({
          width: `${p.step/p.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  Wt = C(Gt, [
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
    setup(p) {
      const s = p,
        a = j(() => {
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
              throw s.step, ke("Invalid step")
          }
        });
      return (m, _) => (d(), w("div", zt, [f("div", Jt, V(e(a).step), 1), f("div", Qt, V(e(a).label), 1)]))
    }
  }),
  le = C(Ht, [
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
  xe = 10,
  an = U({
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
        a = M(),
        m = () => {
          var t;
          return (t = a.value) == null ? void 0 : t.triggerFileUpload()
        },
        _ = M(),
        u = j(() => {
          if (s.value) return oe(s.value)
        });
      return (t, n) => {
        var i;
        const r = Ue,
          h = qe;
        return d(), w("div", Zt, [f("div", Yt, [e(u) ? (d(), w("div", {
          key: 0,
          class: "image is-uploaded",
          style: we({
            backgroundImage: `url(${e(u)})`
          })
        }, null, 4)) : (d(), w("div", {
          key: 1,
          class: "image wait-upload",
          onClick: n[0] || (n[0] = l => m())
        }, [((i = e(_)) == null ? void 0 : i.status) === e(me).UPLOADING ? (d(), x(r, {
          key: 0,
          type: e(Re).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (d(), w("img", Xt))])), f("div", en, [f("div", tn, V(("t" in t ? t.t : e(A))("memepad.new.step_1.field_icon.label")), 1), f("div", nn, V(("t" in t ? t.t : e(A))("memepad.new.step_1.field_icon.description", {
          maxUploadSize: String(xe)
        })), 1)]), s.value ? (d(), w("div", {
          key: 2,
          class: "delete",
          onClick: n[1] || (n[1] = l => s.value = void 0)
        }, n[4] || (n[4] = [f("img", {
          src: Ne,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))) : T("", !0)]), k(h, {
          ref_key: "fileUploaderRef",
          ref: a,
          "hide-ui": "",
          "max-file-size-mb": xe,
          accept: [e(W).JPEG, e(W).PNG, e(W).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 1,
            borderRadius: 999
          },
          "onUpdate:progress": n[2] || (n[2] = l => _.value = l),
          onUploaded: n[3] || (n[3] = l => s.value = l.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  on = C(an, [
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
    props: z({
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
    emits: z(["change", "input", "focus", "blur"], ["update:modelValue"]),
    setup(p, {
      emit: s
    }) {
      const a = p,
        m = s,
        _ = Qe(),
        u = K(p, "modelValue"),
        t = M(),
        n = M(!1),
        r = () => {
          n.value = !0, m("focus", t.value)
        },
        h = () => {
          n.value = !1, m("blur", t.value)
        },
        i = j(() => {
          const b = [];
          return (a.isError || a.errorCaption) && b.push("is-error"), b
        });
      let l;
      return Se(u, () => {
        if (!t.value) return;
        t.value.style.height = "auto";
        const b = t.value.scrollHeight,
          F = l !== void 0 ? b - l : 0;
        l = b, t.value.style.height = `${b}px`, F !== 0 && _e(() => window.document.body.scrollBy(0, F))
      }), (b, F) => {
        const g = yt;
        return d(), w("div", {
          class: Te(["kit-textarea", e(i)])
        }, [b.label ? (d(), w("label", {
          key: 0,
          for: e(_)
        }, [f("span", null, V(b.label), 1), b.errorCaption ? (d(), w("div", ln, [F[3] || (F[3] = f("img", {
          src: He,
          alt: "Warning icon"
        }, null, -1)), f("div", null, V(b.errorCaption), 1)])) : b.maxLength ? (d(), x(g, {
          key: 1,
          value: u.value,
          "max-length": b.maxLength
        }, null, 8, ["value", "max-length"])) : T("", !0)], 8, sn)) : T("", !0), Ce(f("textarea", {
          id: e(_),
          ref_key: "textareaRef",
          ref: t,
          "onUpdate:modelValue": F[0] || (F[0] = P => u.value = P),
          placeholder: b.placeholder,
          onChange: F[1] || (F[1] = P => b.$emit("change")),
          onInput: F[2] || (F[2] = P => b.$emit("input")),
          onFocus: r,
          onBlur: h
        }, null, 40, rn), [
          [Ze, u.value]
        ])], 2)
      }
    }
  }),
  cn = C(un, [
    ["__scopeId", "data-v-fbb8bb63"]
  ]);
var q = (p => (p.STRING = "STRING", p.TEXTAREA = "TEXTAREA", p))(q || {});
const dn = U({
    __name: "KitForm",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: z(["channel"], ["update:modelValue"]),
    setup(p, {
      emit: s
    }) {
      const a = s,
        m = K(p, "modelValue"),
        _ = l => {
          l._ctx || (l._ctx = {
            initialValue: l.value,
            errors: []
          })
        };
      Se(m, () => m.value.forEach(_), {
        immediate: !0
      });
      const u = () => {},
        t = l => l._ctx.errors = r(l),
        n = j(() => m.value.every(l => r(l).length === 0));
      ne(() => m.value.forEach(l => {
        l._ctx && l._ctx.errors.length > 0 && (l._ctx.errors = r(l))
      }));
      const r = l => {
          var b, F, g, P;
          const y = [];
          switch (l.type) {
            case q.STRING:
            case q.TEXTAREA: {
              if ((b = l.validators) != null && b.required && !l.value && y.push({
                  msg: "Required to continue",
                  isVisible: !0
                }), (F = l.validators) != null && F.maxLength) {
                const R = l.validators.maxLength.value - l.value.length;
                R < 0 && y.push({
                  msg: `${R*-1} over`,
                  isVisible: !1
                })
              }
              if (l.type === q.STRING && ((g = l.validators) != null && g.url)) {
                const R = l.validators.url.includePrefix && ((P = l.props) != null && P.prefix) ? `${l.props.prefix}${l.value}` : l.value;
                Dt(R) || y.push({
                  msg: "Invalid URL",
                  isVisible: !0
                })
              }
              break
            }
            default:
              throw ke("unknown type")
          }
          if (l.customValidator) {
            const R = l.customValidator(l.value);
            R && y.push({
              msg: R,
              isVisible: !0
            })
          }
          return y
        },
        h = l => {
          var b;
          const y = (b = l._ctx) == null ? void 0 : b.errors.find(F => F.isVisible);
          return y == null ? void 0 : y.msg
        },
        i = l => {
          var b;
          const y = (b = l._ctx) == null ? void 0 : b.errors.length;
          return y ? y > 0 : !1
        };
      return ne(() => a("channel", {
        isFormValid: n.value
      })), (l, y) => {
        const b = wt,
          F = cn;
        return d(), w("form", {
          class: "kit-form",
          novalidate: "",
          onSubmit: y[0] || (y[0] = Ye(g => u(), ["prevent"]))
        }, [(d(!0), w(D, null, Z(m.value, g => {
          var P, R, o, c, S, $, v, E;
          return d(), w("div", {
            key: g.key,
            class: "field"
          }, [g.type === e(q).STRING ? (d(), x(b, $e({
            key: 0,
            modelValue: g.value,
            "onUpdate:modelValue": N => g.value = N,
            ref_for: !0
          }, g.props, {
            "error-caption": h(g),
            "is-error": i(g),
            "max-length": (R = (P = g.validators) == null ? void 0 : P.maxLength) == null ? void 0 : R.value,
            class: "input",
            onChange: N => t(g),
            onFocus: (o = g.eventHandlers) == null ? void 0 : o.onFocus,
            onBlur: (c = g.eventHandlers) == null ? void 0 : c.onBlur
          }), {
            label: L(() => [Pe(l.$slots, `${g.key}-label`, {}, void 0, !0)]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : T("", !0), g.type === e(q).TEXTAREA ? (d(), x(F, $e({
            key: 1,
            modelValue: g.value,
            "onUpdate:modelValue": N => g.value = N,
            ref_for: !0
          }, g.props, {
            "error-caption": h(g),
            "is-error": i(g),
            "max-length": ($ = (S = g.validators) == null ? void 0 : S.maxLength) == null ? void 0 : $.value,
            class: "textarea",
            onChange: N => t(g),
            onFocus: (v = g.eventHandlers) == null ? void 0 : v.onFocus,
            onBlur: (E = g.eventHandlers) == null ? void 0 : E.onBlur
          }), null, 16, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : T("", !0), Pe(l.$slots, `${g.key}-after`, {}, void 0, !0)])
        }), 128))], 32)
      }
    }
  }),
  Ge = C(dn, [
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
    setup(p, {
      emit: s
    }) {
      const m = M({
          ...p.state.step1
        }),
        _ = s,
        u = M([{
          key: "name",
          type: q.STRING,
          value: j({
            get: () => m.value.name ?? "",
            set: h => m.value.name = h ?? ""
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
          value: j({
            get: () => m.value.ticker ?? "",
            set: h => m.value.ticker = h ?? ""
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
          value: j({
            get: () => m.value.description ?? "",
            set: h => m.value.description = h ?? ""
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
        t = M(),
        n = j(() => {
          var h;
          return ((h = t.value) == null ? void 0 : h.isFormValid) && !!m.value.iconFileKey
        }),
        r = () => _("continue", m.value);
      return (h, i) => {
        const l = le,
          y = on,
          b = Ge,
          F = Y,
          g = se;
        return d(), w("div", pn, [k(l, {
          step: 1
        }), k(y, {
          modelValue: e(m).iconFileKey,
          "onUpdate:modelValue": i[0] || (i[0] = P => e(m).iconFileKey = P)
        }, null, 8, ["modelValue"]), k(b, {
          modelValue: e(u),
          "onUpdate:modelValue": i[1] || (i[1] = P => ae(u) ? u.value = P : null),
          onChannel: i[2] || (i[2] = P => t.value = P)
        }, null, 8, ["modelValue"]), k(g, null, {
          default: L(() => [k(F, {
            label: ("t" in h ? h.t : e(A))("base.continue"),
            fill: "",
            disabled: !e(n),
            tertiary: "",
            size: e(J).LARGE,
            onClick: r
          }, null, 8, ["label", "disabled", "size"])]),
          _: 1
        })])
      }
    }
  }),
  _n = C(mn, [
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
    setup(p) {
      return (s, a) => {
        const m = X;
        return d(), w("div", fn, [p.iconName ? (d(), x(m, {
          key: 0,
          name: p.iconName,
          class: "icon"
        }, null, 8, ["name"])) : T("", !0), f("div", vn, [f("span", gn, V(p.title), 1), p.isOptional ? (d(), w("span", hn, V(` ${("t"in s?s.t:e(A))("base.optional")}`), 1)) : T("", !0)])])
      }
    }
  }),
  We = C(bn, [
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
  Me = 10,
  Fn = U({
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
        a = M(),
        m = () => {
          var t;
          return (t = a.value) == null ? void 0 : t.triggerFileUpload()
        },
        _ = M(),
        u = j(() => {
          if (_.value && _.value.status === me.UPLOADING) return _.value.localUrl;
          if (s.value) return oe(s.value)
        });
      return (t, n) => {
        var l;
        const r = We,
          h = Ue,
          i = qe;
        return d(), w("div", yn, [k(r, {
          title: ("t" in t ? t.t : e(A))("memepad.new.step_1.field_banner.label"),
          "is-optional": "",
          class: "heading"
        }, null, 8, ["title"]), s.value ? (d(), w("div", {
          key: 0,
          class: "banner is-uploaded",
          style: we({
            backgroundImage: `url(${e(u)})`
          })
        }, [f("div", {
          class: "delete-btn",
          onClick: n[0] || (n[0] = y => s.value = void 0)
        }, n[4] || (n[4] = [f("img", {
          src: Ne,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((l = e(_)) == null ? void 0 : l.status) === e(me).UPLOADING ? (d(), w("div", wn, [k(h, {
          type: e(Re).LIGHT,
          size: 16
        }, null, 8, ["type"]), f("div", kn, V(("t" in t ? t.t : e(A))("memepad.new.step_1.field_banner.uploading")), 1)])) : (d(), w("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: n[1] || (n[1] = y => m())
        }, [n[6] || (n[6] = f("img", {
          src: et,
          alt: "Add"
        }, null, -1)), f("div", Sn, [f("div", An, V(("t" in t ? t.t : e(A))("memepad.new.step_1.field_banner.description", {
          maxUploadSize: String(Me)
        })), 1), n[5] || (n[5] = f("div", {
          class: "ratio"
        }, "361 × 119", -1))])])), k(i, {
          ref_key: "fileUploaderRef",
          ref: a,
          "hide-ui": "",
          "max-file-size-mb": Me,
          accept: [e(W).JPEG, e(W).PNG, e(W).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 361 / 119,
            borderRadius: 8
          },
          "onUpdate:progress": n[2] || (n[2] = y => _.value = y),
          onUploaded: n[3] || (n[3] = y => s.value = y.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  In = C(Fn, [
    ["__scopeId", "data-v-327e2cf8"]
  ]),
  Pn = {
    class: "memepad-new-form-social-links-item"
  },
  $n = U({
    __name: "SocialLinksItem",
    props: z({
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
    emits: z(["isValid", "delete"], ["update:modelValue"]),
    setup(p, {
      emit: s
    }) {
      const a = p,
        m = s,
        _ = K(p, "modelValue"),
        u = M([{
          type: q.STRING,
          key: a.meta.apiKey,
          value: j({
            get: () => _.value ?? "",
            set: n => _.value = n || void 0
          }),
          props: {
            placeholder: a.meta.placeholder,
            size: tt.COMPACT
          },
          validators: a.meta.skipUrlValidation ? {} : {
            url: {}
          }
        }]),
        t = M();
      return ne(() => {
        var n;
        return m("isValid", ((n = t.value) == null ? void 0 : n.isFormValid) ?? !1)
      }), (n, r) => {
        const h = We,
          i = X,
          l = Ge;
        return d(), w("div", Pn, [k(l, {
          modelValue: e(u),
          "onUpdate:modelValue": r[1] || (r[1] = y => ae(u) ? u.value = y : null),
          onChannel: r[2] || (r[2] = y => t.value = y)
        }, nt({
          [`${p.meta.apiKey}-label`]: L(() => [k(h, {
            "icon-name": p.meta.icon,
            title: p.meta.display,
            "is-optional": ""
          }, null, 8, ["icon-name", "title"])]),
          _: 2
        }, [p.optional ? {
          name: `${p.meta.apiKey}-after`,
          fn: L(() => [f("button", {
            type: "button",
            class: "delete-button reset",
            onClick: r[0] || (r[0] = y => n.$emit("delete"))
          }, [k(i, {
            name: "trash",
            class: "icon"
          })])]),
          key: "0"
        } : void 0]), 1032, ["modelValue"])])
      }
    }
  }),
  En = C($n, [
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
  Nn = U({
    __name: "SocialLinks",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: z(["isValid"], ["update:modelValue"]),
    setup(p, {
      emit: s
    }) {
      const a = kt(),
        m = K(p, "modelValue"),
        _ = s,
        u = M([{
          provider: Ee.TELEGRAM,
          isValid: !1,
          optional: !1
        }]),
        t = j(() => Object.values(Ee).filter(h => !u.value.find(i => i.provider === h))),
        n = h => u.value.push({
          provider: h,
          isValid: !1,
          optional: !0
        }),
        r = h => {
          u.value.splice(h, 1)
        };
      return ne(() => {
        const h = u.value.every(i => i.isValid);
        _("isValid", h)
      }), (h, i) => {
        const l = En,
          y = X;
        return d(), w("div", Vn, [f("div", xn, [k(at, {
          name: "list-shuffle-transition"
        }, {
          default: L(() => [(d(!0), w(D, null, Z(e(u), (b, F) => (d(), x(l, {
            key: b.provider,
            modelValue: m.value[b.provider],
            "onUpdate:modelValue": g => m.value[b.provider] = g,
            meta: e(a)[b.provider],
            optional: b.optional,
            class: "provider-input",
            onIsValid: g => b.isValid = g,
            onDelete: g => r(F)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "meta", "optional", "onIsValid", "onDelete"]))), 128))]),
          _: 1
        })]), k(ot, {
          name: "appear-from-right-transition"
        }, {
          default: L(() => [e(t).length > 0 ? (d(), w("div", Mn, [k(y, {
            name: "plus",
            class: "plus-icon"
          }), f("div", Rn, [(d(!0), w(D, null, Z(e(t), b => (d(), w("div", {
            key: b,
            class: "provider"
          }, [k(y, {
            name: e(a)[b].icon,
            class: "provider-icon",
            onClick: F => n(b)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : T("", !0)]),
          _: 1
        })])
      }
    }
  }),
  Un = C(Nn, [
    ["__scopeId", "data-v-5d3fea7d"]
  ]),
  Cn = {
    class: "kit-switch"
  },
  Tn = U({
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
      return (a, m) => (d(), w("div", Cn, [Ce(f("input", {
        "onUpdate:modelValue": m[0] || (m[0] = _ => s.value = _),
        type: "checkbox"
      }, null, 512), [
        [st, s.value]
      ])]))
    }
  }),
  Ln = C(Tn, [
    ["__scopeId", "data-v-e0ffb56d"]
  ]),
  jn = "data:image/webp;base64,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",
  On = {
    class: "memepad-new-form-nsfw"
  },
  Bn = {
    class: "setting"
  },
  qn = {
    class: "label"
  },
  Dn = U({
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
      return (a, m) => {
        const _ = Ln,
          u = Mt;
        return d(), w("div", On, [f("div", Bn, [f("div", qn, V(("t" in a ? a.t : e(A))("memepad.new.step_1.field_nsfw.label")), 1), k(_, {
          modelValue: s.value,
          "onUpdate:modelValue": m[0] || (m[0] = t => s.value = t)
        }, null, 8, ["modelValue"])]), k(u, {
          text: ("t" in a ? a.t : e(A))("memepad.new.step_1.field_nsfw.message"),
          image: e(jn),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }),
  Kn = C(Dn, [
    ["__scopeId", "data-v-cf4bf4c7"]
  ]),
  Gn = {
    class: "memepad-new-step-2"
  },
  Wn = U({
    __name: "2",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(p, {
      emit: s
    }) {
      const a = p,
        m = s,
        _ = M(!1),
        u = M({
          ...a.state.step2
        }),
        t = () => m("continue", u.value);
      return (n, r) => {
        const h = le,
          i = In,
          l = Un,
          y = Kn,
          b = Y,
          F = se;
        return d(), w("div", Gn, [k(h, {
          step: 2
        }), k(i, {
          modelValue: e(u).bannerFileKey,
          "onUpdate:modelValue": r[0] || (r[0] = g => e(u).bannerFileKey = g)
        }, null, 8, ["modelValue"]), k(l, {
          modelValue: e(u).socialProviders,
          "onUpdate:modelValue": r[1] || (r[1] = g => e(u).socialProviders = g),
          onIsValid: r[2] || (r[2] = g => _.value = g)
        }, null, 8, ["modelValue"]), k(y, {
          modelValue: e(u).isNSFW,
          "onUpdate:modelValue": r[3] || (r[3] = g => e(u).isNSFW = g)
        }, null, 8, ["modelValue"]), k(F, null, {
          default: L(() => [k(b, {
            label: ("t" in n ? n.t : e(A))("base.continue"),
            fill: "",
            tertiary: "",
            size: e(J).LARGE,
            disabled: !e(_),
            onClick: t
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  zn = C(Wn, [
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
    setup(p, {
      emit: s
    }) {
      const a = p,
        m = s,
        _ = M(),
        u = M(),
        t = M(a.state.step3.overview ? {
          status: "loaded",
          share: a.state.step3.share ?? 0,
          overview: a.state.step3.overview
        } : {
          status: "idle",
          share: a.state.step3.share ?? 0
        });
      _e(() => {
        var v;
        return (v = u.value) == null ? void 0 : v.applyNearestValue()
      });
      const n = v => it(v, {
          join: "emptyFractional"
        }),
        r = v => new H(v.replaceAll(",", "") || "0").toNumber(),
        h = j({
          get: () => String(t.value.share),
          set: v => {
            t.value.share = r(v), _e(() => {
              var E;
              return (E = u.value) == null ? void 0 : E.applyNearestValue()
            })
          }
        }),
        i = j({
          get: () => String(t.value.share),
          set: v => {
            t.value.share = r(n(v))
          }
        }),
        l = Le(),
        y = Ae(),
        b = () => je().bottom.success(A("memepad.jetton.new.error_alert"));
      y.onConnectError(b);
      const F = M(!1),
        g = j(() => {
          if (t.value.status === "loading") return;
          if (!t.value.overview) {
            if (new H(t.value.share).isZero()) {
              const E = ce(new H(0), a.state.step1.ticker);
              return A("memepad.new.step_3.subtitle", {
                jettonsAmountWithSymbol: E.frontendWithSymbol,
                percentAmount: "0"
              })
            }
            return
          }
          const v = ce(new H(t.value.overview.minReceive), a.state.step1.ticker);
          return t.value.overview ? A("memepad.new.step_3.subtitle", {
            jettonsAmountWithSymbol: v.frontendWithSymbol,
            percentAmount: lt(t.value.overview.jettonReceivePercent)
          }) : v.frontendWithSymbol
        }),
        P = j(() => {
          var I;
          const v = (() => {
              var G;
              const B = l.wallet.value.status === "connected" ? (G = l.wallet.value.balance) == null ? void 0 : G.tonBalance.balance.value : void 0;
              return {
                value: B,
                label: B ? ce(B, "TON").frontendWithSymbol : void 0
              }
            })(),
            E = {
              value: a.jettonManagement.fees.buyNetworkFee,
              label: `${A("memepad.jetton.fees_base")}: ${de(a.jettonManagement.fees.buyNetworkFee,2)} TON`,
              details: [{
                label: `${A("memepad.jetton.fees_network")}: ${de(a.jettonManagement.fees.buyNetworkFee,2)} TON`
              }, ...t.value.overview ? [{
                label: `${A("memepad.jetton.fees_platform")}: ${de((I=t.value.overview)==null?void 0:I.platformFee,2)} TON`
              }] : []]
            },
            N = (() => {
              if (!v.value) return;
              const B = E.value.plus(t.value.share);
              return v.value.gte(B)
            })(),
            O = N !== !1 ? void 0 : A("memepad.jetton.not_enough_error", {
              ticker: "TON"
            });
          return {
            tonBalance: v,
            showInfo: v.value !== void 0,
            fees: E,
            isEnoughTon: N !== !1,
            errorMessage: O,
            loading: t.value.status === "loading" || F.value
          }
        }),
        R = () => {
          var v;
          (v = _.value) == null || v.focusOnInput()
        },
        o = () => {
          P.value.errorMessage || S()
        },
        c = async () => {
          if (P.value.errorMessage) return;
          const v = new H(t.value.share),
            E = await a.jettonManagement.getJettonOverview(v.toNumber());
          v.eq(t.value.share) && te(E) && (t.value = {
            status: "loaded",
            share: v.toNumber(),
            overview: E.data
          }, m("update", {
            share: v.toNumber(),
            overview: te(E) ? E.data : void 0
          }))
        }, S = async () => {
          if (t.value.status === "loaded") return m("continue", {
            share: +t.value.share,
            overview: t.value.overview
          });
          F.value = !0;
          const v = await a.jettonManagement.getJettonOverview(t.value.share);
          te(v) ? m("continue", {
            share: +t.value.share,
            overview: v.data
          }) : b(), F.value = !1
        }, {
          debouncedFunction: $
        } = ut(c, 400);
      return Se(() => t.value.share, () => {
        t.value.status = "loading", $()
      }), (v, E) => {
        const N = le,
          O = St,
          I = Rt,
          B = At,
          G = Ft,
          ee = De,
          re = Y,
          ie = It,
          Q = Pt;
        return d(), x(Q, {
          class: "memepad-new-step-3"
        }, {
          top: L(() => [f("div", Jn, [k(N, {
            step: 3
          })])]),
          default: L(() => [f("div", Qn, [k(O, {
            ref_key: "actionControlsInputComp",
            ref: _,
            modelValue: e(h),
            "onUpdate:modelValue": E[0] || (E[0] = ue => ae(h) ? h.value = ue : null),
            postfix: "TON",
            modifier: n,
            onBlur: R
          }, null, 8, ["modelValue"]), f("div", Hn, [e(g) ? (d(), w("span", Zn, V(e(g)), 1)) : e(g) === void 0 ? (d(), x(I, {
            key: 1,
            class: "skeleton"
          })) : T("", !0)])])]),
          "bottom-action": L(() => [f("div", Yn, [e(P).showInfo ? (d(), w("div", Xn, [e(P).tonBalance.label && !e(P).loading ? (d(), x(B, {
            key: 0,
            balance: e(P).tonBalance.label
          }, null, 8, ["balance"])) : (d(), x(I, {
            key: 1,
            class: "skeleton"
          })), e(P).loading ? (d(), x(I, {
            key: 3,
            class: "skeleton"
          })) : (d(), x(G, {
            key: 2,
            details: e(P).fees.details,
            "total-label": e(P).fees.label,
            "error-message": e(P).errorMessage
          }, null, 8, ["details", "total-label", "error-message"]))])) : T("", !0), e(P).isEnoughTon ? (d(), x(re, {
            key: 2,
            fill: "",
            size: e(J).LARGE,
            loading: e(P).loading,
            onClick: o
          }, {
            default: L(() => [f("div", ea, V(("t" in v ? v.t : e(A))("memepad.new.step_3.next_btn")), 1)]),
            _: 1
          }, 8, ["size", "loading"])) : (d(), x(ee, {
            key: 1
          }))])]),
          "bottom-helpers": L(() => [k(ie, {
            ref_key: "rangeInputEl",
            ref: u,
            modelValue: e(i),
            "onUpdate:modelValue": E[1] || (E[1] = ue => ae(i) ? i.value = ue : null),
            tab: e(rt).BUY
          }, null, 8, ["modelValue", "tab"])]),
          _: 1
        })
      }
    }
  }),
  na = C(ta, [
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
    setup(p) {
      return (s, a) => (d(), w("div", aa, [f("img", {
        src: e(oe)(s.logoFileKey),
        alt: "Jetton logo"
      }, null, 8, oa), f("div", sa, [f("div", la, V(s.ticker), 1), f("div", ra, V(s.name), 1)])]))
    }
  }),
  ua = C(ia, [
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
    class: "fee-details"
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
    setup(p) {
      return (s, a) => {
        const m = X,
          _ = Nt;
        return d(), w("div", ca, [(d(!0), w(D, null, Z(s.details.sections, u => (d(), w("div", {
          key: u.title,
          class: "row"
        }, [f("div", da, V(u.title), 1), f("div", pa, [k(_, null, {
          default: L(() => [k(m, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: L(() => [f("div", ma, [(d(!0), w(D, null, Z(u.details, t => (d(), w("span", {
            key: t.label,
            class: Te({
              highlighted: t.highlight
            })
          }, V(t.label), 3))), 128))])]),
          _: 2
        }, 1024), f("span", _a, V(u.label), 1)])]))), 128)), s.details.totalSection ? (d(), w(D, {
          key: 0
        }, [a[0] || (a[0] = f("div", {
          class: "divider"
        }, null, -1)), f("div", fa, [f("div", va, V(s.details.totalSection.title), 1), s.notEnoughBalance ? (d(), w("div", ga, [k(m, {
          name: "circle-help",
          class: "icon"
        }), f("span", ha, V(("t" in s ? s.t : e(A))("memepad.jetton.not_enough_error", {
          ticker: "TON"
        })), 1)])) : (d(), w("div", ba, [f("span", ya, V(s.details.totalSection.label), 1)]))])], 64)) : T("", !0)])
      }
    }
  }),
  ka = C(wa, [
    ["__scopeId", "data-v-56c89545"]
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
    setup(p, {
      emit: s
    }) {
      const a = p,
        m = s,
        _ = Le(),
        u = Ae(),
        t = () => je().bottom.success(A("memepad.jetton.new.error_alert"));
      u.onConnectError(t);
      const n = j(() => {
          const y = a.tonUsdRate && a.form.overview.marketCapTon.mul(a.tonUsdRate),
            b = a.tonUsdRate && a.form.overview.priceTon.mul(a.tonUsdRate);
          return {
            percent: a.form.overview.tonCollectedPercent,
            collected: a.form.overview.tonCollected,
            total: a.form.overview.tonForDex,
            marketDetails: {
              marketCap: y,
              listRows: {
                price: b,
                availableSupply: a.form.overview.availableSupply,
                maxSupply: a.form.overview.maxSupply
              }
            }
          }
        }),
        r = j(() => a.jettonManagement.getPriceDetails(a.form.overview)),
        h = j(() => {
          var b;
          const y = _.wallet.value.status === "connected" ? (b = _.wallet.value.balance) == null ? void 0 : b.tonBalance : void 0;
          if (y) return y.balance.value.gte(r.value.total)
        }),
        i = M(!1),
        l = async () => {
          if (!h.value || i.value) return;
          i.value = !0, await a.launchCallback(a.form) ? m("continue") : t(), i.value = !1
        };
      return (y, b) => {
        const F = le,
          g = ua,
          P = $t,
          R = Et,
          o = ka,
          c = De,
          S = Y,
          $ = Vt,
          v = se;
        return d(), w("div", Sa, [k(F, {
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
        }, null, 8, ["banner-file-key"]), k(R, ct(dt(e(n))), null, 16), k(v, null, {
          default: L(() => [k(o, {
            "with-share": !!y.form.share,
            details: e(r),
            "not-enough-balance": e(h) === !1
          }, null, 8, ["with-share", "details", "not-enough-balance"]), f("div", Aa, [k($, null, {
            default: L(() => [e(h) ? (d(), x(S, {
              key: 1,
              label: ("t" in y ? y.t : e(A))("memepad.new.step_4.launch_btn"),
              fill: "",
              size: e(J).LARGE,
              type: e(pt).DROP,
              onClick: l
            }, null, 8, ["label", "size", "type"])) : (d(), x(c, {
              key: 0
            }))]),
            _: 1
          })])]),
          _: 1
        })])
      }
    }
  }),
  Ia = C(Fa, [
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
  Na = {
    class: "icon-wrapper"
  },
  Ua = ["src"],
  Ca = {
    class: "title"
  },
  Ta = {
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
  Ba = {
    class: "arena-banner"
  },
  qa = {
    class: "title"
  },
  Da = {
    class: "subtitle"
  },
  Ka = 3e3,
  Ga = U({
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
      const a = fe(),
        m = Fe();
      m.memepad.memepadCabalArenaBannerShow();
      const _ = M("LOADING"),
        u = [],
        t = () => new Promise(i => {
          _.value = "ROCKET", u.push(setTimeout(() => {
            i(void 0)
          }, Ka))
        }),
        n = () => {
          _.value = "ERROR"
        },
        r = () => {
          u.forEach(clearTimeout), _.value = "LOADING"
        },
        h = () => {
          m.memepad.memepadCabalArenaBannerClick(), ft().$webApp.openLink("https://www.cabal-arena.fun/")
        };
      return mt(() => {
        r()
      }), s({
        runSuccess: t,
        runError: n
      }), (i, l) => {
        const y = Ut,
          b = X,
          F = Y,
          g = se,
          P = vt;
        return d(), w("div", Pa, [k(y), e(_) === "ERROR" ? (d(), w(D, {
          key: 0
        }, [f("div", $a, [f("div", Ea, [f("div", Va, [k(b, {
          name: "warning",
          class: "icon"
        })])]), f("div", xa, V(("t" in i ? i.t : e(A))("memepad.new.failed.title", {
          ticker: i.form.ticker
        })), 1), f("div", Ma, V(("t" in i ? i.t : e(A))("memepad.new.failed.subtitle")), 1)]), k(g, null, {
          default: L(() => [k(F, {
            fill: "",
            label: ("t" in i ? i.t : e(A))("memepad.new.retry_btn_label"),
            size: e(J).LARGE,
            onClick: l[0] || (l[0] = R => i.retryCallback(i.form))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64)) : (d(), w(D, {
          key: 1
        }, [f("div", Ra, [f("div", Na, [f("img", {
          src: e(oe)(i.form.iconFileKey),
          alt: "Jetton logo",
          width: "80",
          height: "80"
        }, null, 8, Ua)]), f("div", Ca, [l[2] || (l[2] = f("div", {
          class: "dot"
        }, null, -1)), f("div", Ta, V(("t" in i ? i.t : e(A))("memepad.new.step_launch.title")), 1)]), f("div", La, V(("t" in i ? i.t : e(A))("memepad.new.step_launch.subtitle")), 1)]), e(_) === "ROCKET" ? (d(), w("div", ja, [k(P, {
          name: "animations/Rocket",
          size: 348
        })])) : T("", !0), k(g, null, {
          default: L(() => [f("div", Oa, [f("div", Ba, [f("div", qa, V(("t" in i ? i.t : e(A))("cabal_arena_banner.title")), 1), f("div", Da, V(("t" in i ? i.t : e(A))("cabal_arena_banner.subtitle")), 1), f("button", {
            type: "button",
            class: "reset",
            onClick: h
          }, V(("t" in i ? i.t : e(A))("cabal_arena_banner.btn_label")), 1), l[3] || (l[3] = f("img", {
            src: _t
          }, null, -1))]), k(F, {
            fill: "",
            label: ("t" in i ? i.t : e(A))("base.got_it"),
            size: e(J).LARGE,
            onClick: l[1] || (l[1] = R => e(a).push({
              name: "memepad"
            }))
          }, null, 8, ["label", "size"])])]),
          _: 1
        })], 64))])
      }
    }
  }),
  Wa = C(Ga, [
    ["__scopeId", "data-v-a99c5bb8"]
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
    setup(p) {
      const s = p,
        a = Fe(),
        m = fe(),
        _ = Oe(),
        u = Ae(),
        t = M();
      Be().getReferralToken();
      const n = s.jettonManagement.getWaitForCreateStatus(),
        r = M(s.retryPayload ? xt(s.retryPayload) : {
          step: 1,
          step1: pe.step1(),
          step2: pe.step2(),
          step3: pe.step3()
        });
      (() => {
        s.retryPayload ? a.memepad.memepadJettonRetry() : a.memepad.memepadJettonStepInfo()
      })();
      const i = (o, c) => {
          const S = {
            step: 2,
            step1: c,
            step2: o.step2,
            step3: o.step3
          };
          r.value = S, a.memepad.memepadJettonStepPersonalise()
        },
        l = (o, c) => {
          const S = {
            step: 3,
            step1: o.step1,
            step2: c,
            step3: o.step3
          };
          r.value = S, a.memepad.memepadJettonStepShare()
        },
        y = (o, c) => {
          const S = {
            step: 4,
            step1: o.step1,
            step2: o.step2,
            step3: c
          };
          r.value = S, a.memepad.memepadJettonStepOverview()
        },
        b = (o, c) => {
          r.value = {
            ...o,
            step3: c
          }
        },
        F = o => {
          const c = {
            step: 5,
            step1: o.step1,
            step2: o.step2,
            step3: o.step3
          };
          r.value = c
        };
      Ct(() => {
        const o = r.value;
        switch (o.step) {
          case 1:
            fe().push({
              name: "memepad"
            });
            break;
          case 2:
            r.value = {
              ...o,
              step: 1
            };
            break;
          case 3:
          case 4:
            r.value = {
              ...o,
              step: o.step - 1
            };
            break;
          case 5:
            return;
          default:
            throw ke("Invalid step")
        }
      });
      let g = [];
      const P = o => {
          g.push({
            payload: o
          }), g = g.slice(-3), g.length === 3 && g.every(S => JSON.stringify(S.payload) === JSON.stringify(g[0].payload)) && u.disconnect()
        },
        R = async o => {
          const c = await s.jettonManagement.createJetton(o);
          return te(c) ? ((async () => {
            const {
              launchTransactionHash: S,
              queryId: $
            } = c.data;
            a.memepad.memepadJettonStartLaunch({
              jettonId: $
            }), await ht(3e4);
            const v = await n.exec({
              launchTransactionHash: S,
              queryId: $
            });
            v ? a.memepad.memepadJettonEndLaunch({
              status: "success",
              purchaseAmount: o.share,
              jettonAddress: v.address,
              jettonShortname: v.shortname,
              jettonId: $
            }) : a.memepad.memepadJettonEndLaunch({
              status: "failed",
              purchaseAmount: o.share
            }), t.value ? v ? (await t.value.runSuccess(), await m.push({
              name: "memepad-jetton-shortname",
              params: {
                shortname: v.shortname
              }
            })) : t.value.runError() : (v ? a.memepad.memepadJettonLaunchShowNotification({
              status: "success",
              jettonAddress: v.address,
              jettonShortname: v.shortname,
              jettonId: $
            }) : a.memepad.memepadJettonLaunchShowNotification({
              status: "failed"
            }), bt().name !== "game" && (v ? _.showSuccessSheet(o, v.shortname) : _.showErrorSheet(o)))
          })(), !0) : (c.extra && c.extra instanceof Error && c.extra instanceof gt && a.memepad.memepadJettonLaunchWalletUiError(), P(o), !1)
        };
      return (o, c) => {
        const S = Wt,
          $ = _n,
          v = zn,
          E = na,
          N = Ia,
          O = Wa;
        return d(), w("div", za, [e(r).step !== 5 ? (d(), x(S, {
          key: 0,
          step: e(r).step,
          "count-steps": 4
        }, null, 8, ["step"])) : T("", !0), e(r).step === 1 ? (d(), x($, {
          key: 1,
          state: e(r),
          onContinue: c[0] || (c[0] = I => i(e(r), I))
        }, null, 8, ["state"])) : T("", !0), e(r).step === 2 ? (d(), x(v, {
          key: 2,
          state: e(r),
          onContinue: c[1] || (c[1] = I => l(e(r), I))
        }, null, 8, ["state"])) : T("", !0), e(r).step === 3 ? (d(), x(E, {
          key: 3,
          state: e(r),
          "jetton-management": s.jettonManagement,
          onContinue: c[2] || (c[2] = I => y(e(r), I)),
          onUpdate: c[3] || (c[3] = I => b(e(r), I))
        }, null, 8, ["state", "jetton-management"])) : T("", !0), e(r).step === 4 ? (d(), x(N, {
          key: 4,
          form: e(Ve)(e(r)),
          "jetton-management": s.jettonManagement,
          "ton-usd-rate": o.tonUsdRate,
          "launch-callback": R,
          onContinue: c[4] || (c[4] = I => F(e(r)))
        }, null, 8, ["form", "jetton-management", "ton-usd-rate"])) : T("", !0), e(r).step === 5 ? (d(), x(O, {
          key: 5,
          ref_key: "stepLaunchApi",
          ref: t,
          form: e(Ve)(e(r)),
          "retry-callback": e(_).retry
        }, null, 8, ["form", "retry-callback"])) : T("", !0)])
      }
    }
  }),
  Qa = C(Ja, [
    ["__scopeId", "data-v-770637c9"]
  ]),
  Ha = {
    class: "memepad-new-page page"
  },
  Za = U({
    __name: "new",
    setup(p) {
      const {
        popRetryPayload: s
      } = Oe(), {
        tonUsdRate: a,
        memepadManagementSdk: m
      } = Lt(), _ = Fe();
      return (() => {
        Be().getReferralToken(), _.memepad.memepadJettonStart()
      })(), (t, n) => {
        const r = Qa,
          h = Tt;
        return d(), w("div", Ha, [e(m) ? (d(), x(r, {
          key: 0,
          "ton-usd-rate": e(a),
          "retry-payload": e(s)(),
          "jetton-management": e(m)
        }, null, 8, ["ton-usd-rate", "retry-payload", "jetton-management"])) : (d(), x(h, {
          key: 1
        }))])
      }
    }
  }),
  _o = C(Za, [
    ["__scopeId", "data-v-11d52018"]
  ]);
export {
  _o as
  default
};