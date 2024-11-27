import {
  bF as ze,
  d as U,
  a as c,
  c as k,
  b,
  aL as we,
  j as N,
  F as j,
  L as ke,
  f as A,
  t as E,
  e as t,
  aA as K,
  r as R,
  a_ as oe,
  bG as me,
  m as V,
  a4 as Me,
  bH as Ve,
  g as C,
  k as S,
  bI as Q,
  bJ as Je,
  a7 as Re,
  az as W,
  au as He,
  av as Se,
  bK as Qe,
  w as Ue,
  bL as Ze,
  n as Ne,
  b8 as _e,
  bM as ne,
  W as D,
  X as Z,
  x as L,
  aC as Fe,
  ap as Ie,
  bN as Ye,
  bO as Xe,
  V as ae,
  B as z,
  C as Y,
  N as X,
  bP as et,
  bQ as tt,
  bR as nt,
  bS as Pe,
  b1 as at,
  ak as ot,
  bT as st,
  ao as Te,
  ba as Ce,
  af as H,
  an as ce,
  bU as lt,
  aZ as de,
  bs as rt,
  ai as it,
  G as Le,
  be as te,
  am as ut,
  bV as ct,
  bW as dt,
  Y as pt,
  J as fe,
  o as mt,
  A as _t,
  ab as je,
  bX as Oe,
  bD as qe,
  bY as ft,
  b9 as vt,
  ay as gt
} from "./DK5KlhXV.js";
import {
  K as Be
} from "./BYV5fuOY.js";
import {
  _ as ht,
  a as bt
} from "./B5NWmaiN.js";
import {
  _ as se
} from "./Bi1HGdYx.js";
import {
  j as yt,
  e as wt,
  _ as kt,
  a as St,
  b as De,
  f as At,
  g as Ft,
  d as It,
  i as Pt,
  c as xt,
  r as $t,
  k as pe,
  l as xe
} from "./mhxLjxeg.js";
import {
  _ as Et
} from "./h6YW5rU5.js";
import {
  _ as Mt
} from "./DAxbXggZ.js";
import {
  _ as Vt
} from "./BcwYCnMP.js";
import {
  _ as Rt
} from "./CNYhAsBO.js";
import {
  u as Ut
} from "./CSHt9DK6.js";
import {
  _ as Nt
} from "./CSlEO21f.js";
import {
  u as Tt
} from "./Bv0biUN3.js";
import "./B03tZgu7.js";
var ve = {
  exports: {}
};
(function(d, o) {
  Object.defineProperty(o, "__esModule", {
    value: !0
  }), o.default = i;

  function a(m) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? a = function(n) {
      return typeof n
    } : a = function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, a(m)
  }

  function i(m) {
    var r = typeof m == "string" || m instanceof String;
    if (!r) {
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
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      m = arguments.length > 1 ? arguments[1] : void 0;
    for (var r in m) typeof i[r] > "u" && (i[r] = m[r]);
    return i
  }
  d.exports = o.default, d.exports.default = o.default
})(ge, ge.exports);
var Ke = ge.exports,
  he = {
    exports: {}
  };
(function(d, o) {
  Object.defineProperty(o, "__esModule", {
    value: !0
  }), o.default = n;
  var a = m(Ae),
    i = m(Ke);

  function m(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1
  };

  function n(e, u) {
    (0, a.default)(e), u = (0, i.default)(u, r), u.allow_trailing_dot && e[e.length - 1] === "." && (e = e.substring(0, e.length - 1)), u.allow_wildcard === !0 && e.indexOf("*.") === 0 && (e = e.substring(2));
    var _ = e.split("."),
      y = _[_.length - 1];
    return u.require_tld && (_.length < 2 || !u.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(y) || /\s/.test(y)) || !u.allow_numeric_tld && /^\d+$/.test(y) ? !1 : _.every(function(l) {
      return !(l.length > 63 && !u.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(l) || /[\uff01-\uff5e]/.test(l) || /^-|-$/.test(l) || !u.allow_underscores && /_/.test(l))
    })
  }
  d.exports = o.default, d.exports.default = o.default
})(he, he.exports);
var Ct = he.exports,
  be = {
    exports: {}
  };
(function(d, o) {
  Object.defineProperty(o, "__esModule", {
    value: !0
  }), o.default = _;
  var a = i(Ae);

  function i(y) {
    return y && y.__esModule ? y : {
      default: y
    }
  }
  var m = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    r = "(".concat(m, "[.]){3}").concat(m),
    n = new RegExp("^".concat(r, "$")),
    e = "(?:[0-9a-fA-F]{1,4})",
    u = new RegExp("^(" + "(?:".concat(e, ":){7}(?:").concat(e, "|:)|") + "(?:".concat(e, ":){6}(?:").concat(r, "|:").concat(e, "|:)|") + "(?:".concat(e, ":){5}(?::").concat(r, "|(:").concat(e, "){1,2}|:)|") + "(?:".concat(e, ":){4}(?:(:").concat(e, "){0,1}:").concat(r, "|(:").concat(e, "){1,3}|:)|") + "(?:".concat(e, ":){3}(?:(:").concat(e, "){0,2}:").concat(r, "|(:").concat(e, "){1,4}|:)|") + "(?:".concat(e, ":){2}(?:(:").concat(e, "){0,3}:").concat(r, "|(:").concat(e, "){1,5}|:)|") + "(?:".concat(e, ":){1}(?:(:").concat(e, "){0,4}:").concat(r, "|(:").concat(e, "){1,6}|:)|") + "(?::((?::".concat(e, "){0,5}:").concat(r, "|(?::").concat(e, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

  function _(y) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, a.default)(y), l = String(l), l ? l === "4" ? n.test(y) : l === "6" ? u.test(y) : !1 : _(y, 4) || _(y, 6)
  }
  d.exports = o.default, d.exports.default = o.default
})(be, be.exports);
var Lt = be.exports,
  ye = {
    exports: {}
  };
(function(d, o) {
  Object.defineProperty(o, "__esModule", {
    value: !0
  }), o.default = $;
  var a = n(Ae),
    i = n(Ct),
    m = n(Lt),
    r = n(Ke);

  function n(p) {
    return p && p.__esModule ? p : {
      default: p
    }
  }

  function e(p, h) {
    return g(p) || l(p, h) || _(p, h) || u()
  }

  function u() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }

  function _(p, h) {
    if (p) {
      if (typeof p == "string") return y(p, h);
      var P = Object.prototype.toString.call(p).slice(8, -1);
      if (P === "Object" && p.constructor && (P = p.constructor.name), P === "Map" || P === "Set") return Array.from(p);
      if (P === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)) return y(p, h)
    }
  }

  function y(p, h) {
    (h == null || h > p.length) && (h = p.length);
    for (var P = 0, M = new Array(h); P < h; P++) M[P] = p[P];
    return M
  }

  function l(p, h) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(p)))) {
      var P = [],
        M = !0,
        w = !1,
        I = void 0;
      try {
        for (var T = p[Symbol.iterator](), O; !(M = (O = T.next()).done) && (P.push(O.value), !(h && P.length === h)); M = !0);
      } catch (x) {
        w = !0, I = x
      } finally {
        try {
          !M && T.return != null && T.return()
        } finally {
          if (w) throw I
        }
      }
      return P
    }
  }

  function g(p) {
    if (Array.isArray(p)) return p
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
    F = /^\[([^\]]+)\](?::([0-9]+))?$/;

  function s(p) {
    return Object.prototype.toString.call(p) === "[object RegExp]"
  }

  function f(p, h) {
    for (var P = 0; P < h.length; P++) {
      var M = h[P];
      if (p === M || s(M) && M.test(p)) return !0
    }
    return !1
  }

  function $(p, h) {
    if ((0, a.default)(p), !p || /[\s<>]/.test(p) || p.indexOf("mailto:") === 0 || (h = (0, r.default)(h, v), h.validate_length && p.length >= 2083) || !h.allow_fragments && p.includes("#") || !h.allow_query_components && (p.includes("?") || p.includes("&"))) return !1;
    var P, M, w, I, T, O, x, q;
    if (x = p.split("#"), p = x.shift(), x = p.split("?"), p = x.shift(), x = p.split("://"), x.length > 1) {
      if (P = x.shift().toLowerCase(), h.require_valid_protocol && h.protocols.indexOf(P) === -1) return !1
    } else {
      if (h.require_protocol) return !1;
      if (p.slice(0, 2) === "//") {
        if (!h.allow_protocol_relative_urls) return !1;
        x[0] = p.slice(2)
      }
    }
    if (p = x.join("://"), p === "") return !1;
    if (x = p.split("/"), p = x.shift(), p === "" && !h.require_host) return !0;
    if (x = p.split("@"), x.length > 1) {
      if (h.disallow_auth || x[0] === "" || (M = x.shift(), M.indexOf(":") >= 0 && M.split(":").length > 2)) return !1;
      var G = M.split(":"),
        ee = e(G, 2),
        re = ee[0],
        ie = ee[1];
      if (re === "" && ie === "") return !1
    }
    I = x.join("@"), O = null, q = null;
    var J = I.match(F);
    if (J ? (w = "", q = J[1], O = J[2] || null) : (x = I.split(":"), w = x.shift(), x.length && (O = x.join(":"))), O !== null && O.length > 0) {
      if (T = parseInt(O, 10), !/^[0-9]+$/.test(O) || T <= 0 || T > 65535) return !1
    } else if (h.require_port) return !1;
    return h.host_whitelist ? f(w, h.host_whitelist) : w === "" && !h.require_host ? !0 : !(!(0, m.default)(w) && !(0, i.default)(w, h) && (!q || !(0, m.default)(q, 6)) || (w = w || q, h.host_blacklist && f(w, h.host_blacklist)))
  }
  d.exports = o.default, d.exports.default = o.default
})(ye, ye.exports);
var jt = ye.exports;
const Ot = ze(jt);

function qt(d, o) {
  return typeof d == "string" && Ot(d, o)
}
const Bt = {
    class: "memepad-new-progress"
  },
  Dt = U({
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
      return (o, a) => (c(), k("div", Bt, [b("div", {
        class: "track",
        style: we({
          width: `${d.step/d.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  Kt = N(Dt, [
    ["__scopeId", "data-v-44aaf1af"]
  ]),
  Gt = {
    class: "memepad-new-step-heading"
  },
  Wt = {
    class: "step"
  },
  zt = {
    class: "label"
  },
  Jt = U({
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
      return (i, m) => (c(), k("div", Gt, [b("div", Wt, E(t(a).step), 1), b("div", zt, E(t(a).label), 1)]))
    }
  }),
  le = N(Jt, [
    ["__scopeId", "data-v-44eadcb9"]
  ]),
  Ht = {
    class: "memepad-new-form-avatar"
  },
  Qt = {
    class: "compose"
  },
  Zt = {
    key: 1,
    src: Je,
    alt: "Plus icon"
  },
  Yt = {
    class: "content"
  },
  Xt = {
    class: "name"
  },
  en = {
    class: "disclaimer"
  },
  $e = 10,
  tn = U({
    __name: "Avatar",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(d) {
      const o = K(d, "modelValue"),
        a = R(),
        i = () => {
          var n;
          return (n = a.value) == null ? void 0 : n.triggerFileUpload()
        },
        m = R(),
        r = j(() => {
          if (o.value) return oe(o.value)
        });
      return (n, e) => {
        var y;
        const u = Re,
          _ = Be;
        return c(), k("div", Ht, [b("div", Qt, [t(r) ? (c(), k("div", {
          key: 0,
          class: "image is-uploaded",
          style: we({
            backgroundImage: `url(${t(r)})`
          })
        }, null, 4)) : (c(), k("div", {
          key: 1,
          class: "image wait-upload",
          onClick: e[0] || (e[0] = l => i())
        }, [((y = t(m)) == null ? void 0 : y.status) === t(me).UPLOADING ? (c(), V(u, {
          key: 0,
          type: t(Me).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (c(), k("img", Zt))])), b("div", Yt, [b("div", Xt, E(("t" in n ? n.t : t(A))("memepad.new.step_1.field_icon.label")), 1), b("div", en, E(("t" in n ? n.t : t(A))("memepad.new.step_1.field_icon.description", {
          maxUploadSize: String($e)
        })), 1)]), o.value ? (c(), k("div", {
          key: 2,
          class: "delete",
          onClick: e[1] || (e[1] = l => o.value = void 0)
        }, e[4] || (e[4] = [b("img", {
          src: Ve,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))) : C("", !0)]), S(_, {
          ref_key: "fileUploaderRef",
          ref: a,
          "hide-ui": "",
          "max-file-size-mb": $e,
          accept: [t(Q).JPEG, t(Q).PNG, t(Q).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 1,
            borderRadius: 999
          },
          "onUpdate:progress": e[2] || (e[2] = l => m.value = l),
          onUploaded: e[3] || (e[3] = l => o.value = l.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  nn = N(tn, [
    ["__scopeId", "data-v-d13d4287"]
  ]),
  an = ["for"],
  on = {
    key: 0,
    class: "error-caption"
  },
  sn = ["id", "placeholder"],
  ln = U({
    __name: "Textarea",
    props: W({
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
    emits: W(["change", "input", "focus", "blur"], ["update:modelValue"]),
    setup(d, {
      emit: o
    }) {
      const a = d,
        i = o,
        m = He(),
        r = K(d, "modelValue"),
        n = R(),
        e = R(!1),
        u = () => {
          e.value = !0, i("focus", n.value)
        },
        _ = () => {
          e.value = !1, i("blur", n.value)
        },
        y = j(() => {
          const v = [];
          return (a.isError || a.errorCaption) && v.push("is-error"), v
        });
      let l;
      return Se(r, () => {
        if (!n.value) return;
        n.value.style.height = "auto";
        const v = n.value.scrollHeight,
          F = l !== void 0 ? v - l : 0;
        l = v, n.value.style.height = `${v}px`, F !== 0 && _e(() => window.document.body.scrollBy(0, F))
      }), (v, F) => {
        const s = ht;
        return c(), k("div", {
          class: Ne(["kit-textarea", t(y)])
        }, [v.label ? (c(), k("label", {
          key: 0,
          for: t(m)
        }, [b("span", null, E(v.label), 1), v.errorCaption ? (c(), k("div", on, [F[3] || (F[3] = b("img", {
          src: Qe,
          alt: "Warning icon"
        }, null, -1)), b("div", null, E(v.errorCaption), 1)])) : v.maxLength ? (c(), V(s, {
          key: 1,
          value: r.value,
          "max-length": v.maxLength
        }, null, 8, ["value", "max-length"])) : C("", !0)], 8, an)) : C("", !0), Ue(b("textarea", {
          id: t(m),
          ref_key: "textareaRef",
          ref: n,
          "onUpdate:modelValue": F[0] || (F[0] = f => r.value = f),
          placeholder: v.placeholder,
          onChange: F[1] || (F[1] = f => v.$emit("change")),
          onInput: F[2] || (F[2] = f => v.$emit("input")),
          onFocus: u,
          onBlur: _
        }, null, 40, sn), [
          [Ze, r.value]
        ])], 2)
      }
    }
  }),
  rn = N(ln, [
    ["__scopeId", "data-v-fbb8bb63"]
  ]);
var B = (d => (d.STRING = "STRING", d.TEXTAREA = "TEXTAREA", d))(B || {});
const un = U({
    __name: "KitForm",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: W(["channel"], ["update:modelValue"]),
    setup(d, {
      emit: o
    }) {
      const a = o,
        i = K(d, "modelValue"),
        m = l => {
          l._ctx || (l._ctx = {
            initialValue: l.value,
            errors: []
          })
        };
      Se(i, () => i.value.forEach(m), {
        immediate: !0
      });
      const r = () => {},
        n = l => l._ctx.errors = u(l),
        e = j(() => i.value.every(l => u(l).length === 0));
      ne(() => i.value.forEach(l => {
        l._ctx && l._ctx.errors.length > 0 && (l._ctx.errors = u(l))
      }));
      const u = l => {
          var v, F, s, f;
          const g = [];
          switch (l.type) {
            case B.STRING:
            case B.TEXTAREA: {
              if ((v = l.validators) != null && v.required && !l.value && g.push({
                  msg: "Required to continue",
                  isVisible: !0
                }), (F = l.validators) != null && F.maxLength) {
                const $ = l.validators.maxLength.value - l.value.length;
                $ < 0 && g.push({
                  msg: `${$*-1} over`,
                  isVisible: !1
                })
              }
              if (l.type === B.STRING && ((s = l.validators) != null && s.url)) {
                const $ = l.validators.url.includePrefix && ((f = l.props) != null && f.prefix) ? `${l.props.prefix}${l.value}` : l.value;
                qt($) || g.push({
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
            const $ = l.customValidator(l.value);
            $ && g.push({
              msg: $,
              isVisible: !0
            })
          }
          return g
        },
        _ = l => {
          var v;
          const g = (v = l._ctx) == null ? void 0 : v.errors.find(F => F.isVisible);
          return g == null ? void 0 : g.msg
        },
        y = l => {
          var v;
          const g = (v = l._ctx) == null ? void 0 : v.errors.length;
          return g ? g > 0 : !1
        };
      return ne(() => a("channel", {
        isFormValid: e.value
      })), (l, g) => {
        const v = bt,
          F = rn;
        return c(), k("form", {
          class: "kit-form",
          novalidate: "",
          onSubmit: g[0] || (g[0] = Ye(s => r(), ["prevent"]))
        }, [(c(!0), k(D, null, Z(i.value, s => {
          var f, $, p, h, P, M, w, I;
          return c(), k("div", {
            key: s.key,
            class: "field"
          }, [s.type === t(B).STRING ? (c(), V(v, Ie({
            key: 0,
            modelValue: s.value,
            "onUpdate:modelValue": T => s.value = T,
            ref_for: !0
          }, s.props, {
            "error-caption": _(s),
            "is-error": y(s),
            "max-length": ($ = (f = s.validators) == null ? void 0 : f.maxLength) == null ? void 0 : $.value,
            class: "input",
            onChange: T => n(s),
            onFocus: (p = s.eventHandlers) == null ? void 0 : p.onFocus,
            onBlur: (h = s.eventHandlers) == null ? void 0 : h.onBlur
          }), {
            label: L(() => [Fe(l.$slots, `${s.key}-label`, {}, void 0, !0)]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : C("", !0), s.type === t(B).TEXTAREA ? (c(), V(F, Ie({
            key: 1,
            modelValue: s.value,
            "onUpdate:modelValue": T => s.value = T,
            ref_for: !0
          }, s.props, {
            "error-caption": _(s),
            "is-error": y(s),
            "max-length": (M = (P = s.validators) == null ? void 0 : P.maxLength) == null ? void 0 : M.value,
            class: "textarea",
            onChange: T => n(s),
            onFocus: (w = s.eventHandlers) == null ? void 0 : w.onFocus,
            onBlur: (I = s.eventHandlers) == null ? void 0 : I.onBlur
          }), null, 16, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : C("", !0), Fe(l.$slots, `${s.key}-after`, {}, void 0, !0)])
        }), 128))], 32)
      }
    }
  }),
  Ge = N(un, [
    ["__scopeId", "data-v-5c8581ee"]
  ]),
  cn = {
    class: "memepad-new-step-1"
  },
  dn = U({
    __name: "1",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(d, {
      emit: o
    }) {
      const i = R({
          ...d.state.step1
        }),
        m = o,
        r = R([{
          key: "name",
          type: B.STRING,
          value: j({
            get: () => i.value.name ?? "",
            set: _ => i.value.name = _ ?? ""
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
            get: () => i.value.ticker ?? "",
            set: _ => i.value.ticker = _ ?? ""
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
          customValidator: _ => {
            if (!_.match(/^[A-Z0-9]+$/)) return A("memepad.new.step_1.field_ticker.custom_validator_error")
          }
        }, {
          key: "description",
          type: B.TEXTAREA,
          value: j({
            get: () => i.value.description ?? "",
            set: _ => i.value.description = _ ?? ""
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
          var _;
          return ((_ = n.value) == null ? void 0 : _.isFormValid) && !!i.value.iconFileKey
        }),
        u = () => m("continue", i.value);
      return (_, y) => {
        const l = le,
          g = nn,
          v = Ge,
          F = Y,
          s = se;
        return c(), k("div", cn, [S(l, {
          step: 1
        }), S(g, {
          modelValue: t(i).iconFileKey,
          "onUpdate:modelValue": y[0] || (y[0] = f => t(i).iconFileKey = f)
        }, null, 8, ["modelValue"]), S(v, {
          modelValue: t(r),
          "onUpdate:modelValue": y[1] || (y[1] = f => ae(r) ? r.value = f : null),
          onChannel: y[2] || (y[2] = f => n.value = f)
        }, null, 8, ["modelValue"]), S(s, null, {
          default: L(() => [S(F, {
            label: ("t" in _ ? _.t : t(A))("base.continue"),
            fill: "",
            disabled: !t(e),
            tertiary: "",
            size: t(z).LARGE,
            onClick: u
          }, null, 8, ["label", "disabled", "size"])]),
          _: 1
        })])
      }
    }
  }),
  pn = N(dn, [
    ["__scopeId", "data-v-9573d404"]
  ]),
  mn = {
    class: "memepad-new-form-label"
  },
  _n = {
    class: "compose"
  },
  fn = {
    class: "title"
  },
  vn = {
    key: 0,
    class: "optional"
  },
  gn = U({
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
        const i = X;
        return c(), k("div", mn, [d.iconName ? (c(), V(i, {
          key: 0,
          name: d.iconName,
          class: "icon"
        }, null, 8, ["name"])) : C("", !0), b("div", _n, [b("span", fn, E(d.title), 1), d.isOptional ? (c(), k("span", vn, E(` ${("t"in o?o.t:t(A))("base.optional")}`), 1)) : C("", !0)])])
      }
    }
  }),
  We = N(gn, [
    ["__scopeId", "data-v-272f2d1c"]
  ]),
  hn = {
    class: "memepad-new-form-banner"
  },
  bn = {
    key: 1,
    class: "banner is-uploading"
  },
  yn = {
    class: "description"
  },
  wn = {
    class: "text"
  },
  kn = {
    class: "description"
  },
  Ee = 10,
  Sn = U({
    __name: "Banner",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(d) {
      const o = K(d, "modelValue"),
        a = R(),
        i = () => {
          var n;
          return (n = a.value) == null ? void 0 : n.triggerFileUpload()
        },
        m = R(),
        r = j(() => {
          if (m.value && m.value.status === me.UPLOADING) return m.value.localUrl;
          if (o.value) return oe(o.value)
        });
      return (n, e) => {
        var l;
        const u = We,
          _ = Re,
          y = Be;
        return c(), k("div", hn, [S(u, {
          title: ("t" in n ? n.t : t(A))("memepad.new.step_1.field_banner.label"),
          "is-optional": "",
          class: "heading"
        }, null, 8, ["title"]), o.value ? (c(), k("div", {
          key: 0,
          class: "banner is-uploaded",
          style: we({
            backgroundImage: `url(${t(r)})`
          })
        }, [b("div", {
          class: "delete-btn",
          onClick: e[0] || (e[0] = g => o.value = void 0)
        }, e[4] || (e[4] = [b("img", {
          src: Ve,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((l = t(m)) == null ? void 0 : l.status) === t(me).UPLOADING ? (c(), k("div", bn, [S(_, {
          type: t(Me).LIGHT,
          size: 16
        }, null, 8, ["type"]), b("div", yn, E(("t" in n ? n.t : t(A))("memepad.new.step_1.field_banner.uploading")), 1)])) : (c(), k("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: e[1] || (e[1] = g => i())
        }, [e[6] || (e[6] = b("img", {
          src: et,
          alt: "Add"
        }, null, -1)), b("div", wn, [b("div", kn, E(("t" in n ? n.t : t(A))("memepad.new.step_1.field_banner.description", {
          maxUploadSize: String(Ee)
        })), 1), e[5] || (e[5] = b("div", {
          class: "ratio"
        }, "361 × 119", -1))])])), S(y, {
          ref_key: "fileUploaderRef",
          ref: a,
          "hide-ui": "",
          "max-file-size-mb": Ee,
          accept: [t(Q).JPEG, t(Q).PNG],
          crop: "",
          "cropper-params": {
            aspectRatio: 361 / 119,
            borderRadius: 8
          },
          "onUpdate:progress": e[2] || (e[2] = g => m.value = g),
          onUploaded: e[3] || (e[3] = g => o.value = g.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  An = N(Sn, [
    ["__scopeId", "data-v-c557c556"]
  ]),
  Fn = {
    class: "memepad-new-form-social-links-item"
  },
  In = U({
    __name: "SocialLinksItem",
    props: W({
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
    emits: W(["isValid", "delete"], ["update:modelValue"]),
    setup(d, {
      emit: o
    }) {
      const a = d,
        i = o,
        m = K(d, "modelValue"),
        r = R([{
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
        return i("isValid", ((e = n.value) == null ? void 0 : e.isFormValid) ?? !1)
      }), (e, u) => {
        const _ = We,
          y = X,
          l = Ge;
        return c(), k("div", Fn, [S(l, {
          modelValue: t(r),
          "onUpdate:modelValue": u[1] || (u[1] = g => ae(r) ? r.value = g : null),
          onChannel: u[2] || (u[2] = g => n.value = g)
        }, nt({
          [`${d.meta.apiKey}-label`]: L(() => [S(_, {
            "icon-name": d.meta.icon,
            title: d.meta.display,
            "is-optional": ""
          }, null, 8, ["icon-name", "title"])]),
          _: 2
        }, [d.optional ? {
          name: `${d.meta.apiKey}-after`,
          fn: L(() => [b("button", {
            type: "button",
            class: "delete-button reset",
            onClick: u[0] || (u[0] = g => e.$emit("delete"))
          }, [S(y, {
            name: "trash",
            class: "icon"
          })])]),
          key: "0"
        } : void 0]), 1032, ["modelValue"])])
      }
    }
  }),
  Pn = N(In, [
    ["__scopeId", "data-v-e8eb736f"]
  ]),
  xn = {
    class: "memepad-new-form-social-links"
  },
  $n = {
    class: "inputs"
  },
  En = {
    key: 0,
    class: "add-panel"
  },
  Mn = {
    class: "providers"
  },
  Vn = U({
    __name: "SocialLinks",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: W(["isValid"], ["update:modelValue"]),
    setup(d, {
      emit: o
    }) {
      const a = yt(),
        i = K(d, "modelValue"),
        m = o,
        r = R([{
          provider: Pe.TELEGRAM,
          isValid: !1,
          optional: !1
        }]),
        n = j(() => Object.values(Pe).filter(_ => !r.value.find(y => y.provider === _))),
        e = _ => r.value.push({
          provider: _,
          isValid: !1,
          optional: !0
        }),
        u = _ => {
          r.value.splice(_, 1)
        };
      return ne(() => {
        const _ = r.value.every(y => y.isValid);
        m("isValid", _)
      }), (_, y) => {
        const l = Pn,
          g = X;
        return c(), k("div", xn, [b("div", $n, [S(at, {
          name: "list-shuffle-transition"
        }, {
          default: L(() => [(c(!0), k(D, null, Z(t(r), (v, F) => (c(), V(l, {
            key: v.provider,
            modelValue: i.value[v.provider],
            "onUpdate:modelValue": s => i.value[v.provider] = s,
            meta: t(a)[v.provider],
            optional: v.optional,
            class: "provider-input",
            onIsValid: s => v.isValid = s,
            onDelete: s => u(F)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "meta", "optional", "onIsValid", "onDelete"]))), 128))]),
          _: 1
        })]), S(ot, {
          name: "appear-from-right-transition"
        }, {
          default: L(() => [t(n).length > 0 ? (c(), k("div", En, [S(g, {
            name: "plus",
            class: "plus-icon"
          }), b("div", Mn, [(c(!0), k(D, null, Z(t(n), v => (c(), k("div", {
            key: v,
            class: "provider"
          }, [S(g, {
            name: t(a)[v].icon,
            class: "provider-icon",
            onClick: F => e(v)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : C("", !0)]),
          _: 1
        })])
      }
    }
  }),
  Rn = N(Vn, [
    ["__scopeId", "data-v-5d3fea7d"]
  ]),
  Un = {
    class: "kit-switch"
  },
  Nn = U({
    __name: "Switch",
    props: {
      modelValue: {
        type: Boolean
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(d) {
      const o = K(d, "modelValue");
      return (a, i) => (c(), k("div", Un, [Ue(b("input", {
        "onUpdate:modelValue": i[0] || (i[0] = m => o.value = m),
        type: "checkbox"
      }, null, 512), [
        [st, o.value]
      ])]))
    }
  }),
  Tn = N(Nn, [
    ["__scopeId", "data-v-e0ffb56d"]
  ]),
  Cn = "data:image/webp;base64,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",
  Ln = {
    class: "memepad-new-form-nsfw"
  },
  jn = {
    class: "setting"
  },
  On = {
    class: "label"
  },
  qn = U({
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
      const o = K(d, "modelValue");
      return (a, i) => {
        const m = Tn,
          r = Et;
        return c(), k("div", Ln, [b("div", jn, [b("div", On, E(("t" in a ? a.t : t(A))("memepad.new.step_1.field_nsfw.label")), 1), S(m, {
          modelValue: o.value,
          "onUpdate:modelValue": i[0] || (i[0] = n => o.value = n)
        }, null, 8, ["modelValue"])]), S(r, {
          text: ("t" in a ? a.t : t(A))("memepad.new.step_1.field_nsfw.message"),
          image: t(Cn),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }),
  Bn = N(qn, [
    ["__scopeId", "data-v-cf4bf4c7"]
  ]),
  Dn = {
    class: "memepad-new-step-2"
  },
  Kn = U({
    __name: "2",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(d, {
      emit: o
    }) {
      const a = d,
        i = o,
        m = R(!1),
        r = R({
          ...a.state.step2
        }),
        n = () => i("continue", r.value);
      return (e, u) => {
        const _ = le,
          y = An,
          l = Rn,
          g = Bn,
          v = Y,
          F = se;
        return c(), k("div", Dn, [S(_, {
          step: 2
        }), S(y, {
          modelValue: t(r).bannerFileKey,
          "onUpdate:modelValue": u[0] || (u[0] = s => t(r).bannerFileKey = s)
        }, null, 8, ["modelValue"]), S(l, {
          modelValue: t(r).socialProviders,
          "onUpdate:modelValue": u[1] || (u[1] = s => t(r).socialProviders = s),
          onIsValid: u[2] || (u[2] = s => m.value = s)
        }, null, 8, ["modelValue"]), S(g, {
          modelValue: t(r).isNSFW,
          "onUpdate:modelValue": u[3] || (u[3] = s => t(r).isNSFW = s)
        }, null, 8, ["modelValue"]), S(F, null, {
          default: L(() => [S(v, {
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
  Gn = N(Kn, [
    ["__scopeId", "data-v-2e24fde9"]
  ]),
  Wn = {
    class: "header"
  },
  zn = {
    class: "content"
  },
  Jn = {
    class: "subtitle"
  },
  Hn = {
    key: 0
  },
  Qn = {
    class: "controls"
  },
  Zn = {
    key: 0,
    class: "info"
  },
  Yn = {
    class: "label"
  },
  Xn = U({
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
        i = o,
        m = R(),
        r = R(),
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
        return (w = r.value) == null ? void 0 : w.applyNearestValue()
      });
      const e = w => it(w, {
          join: "emptyFractional"
        }),
        u = w => new H(w.replaceAll(",", "") || "0").toNumber(),
        _ = j({
          get: () => String(n.value.share),
          set: w => {
            n.value.share = u(w), _e(() => {
              var I;
              return (I = r.value) == null ? void 0 : I.applyNearestValue()
            })
          }
        }),
        y = j({
          get: () => String(n.value.share),
          set: w => {
            n.value.share = u(e(w))
          }
        }),
        l = Te(),
        g = Ce(),
        v = () => Le().bottom.success(A("memepad.jetton.new.error_alert"));
      g.onConnectError(v);
      const F = R(!1),
        s = j(() => {
          if (n.value.status === "loading") return;
          if (!n.value.overview) {
            if (new H(n.value.share).isZero()) {
              const I = ce(new H(0), a.state.step1.ticker);
              return A("memepad.new.step_3.subtitle", {
                jettonsAmountWithSymbol: I.frontendWithSymbol,
                percentAmount: "0"
              })
            }
            return
          }
          const w = ce(new H(n.value.overview.minReceive), a.state.step1.ticker);
          return n.value.overview ? A("memepad.new.step_3.subtitle", {
            jettonsAmountWithSymbol: w.frontendWithSymbol,
            percentAmount: lt(n.value.overview.jettonReceivePercent)
          }) : w.frontendWithSymbol
        }),
        f = j(() => {
          var x;
          const w = (() => {
              var G;
              const q = l.wallet.value.status === "connected" ? (G = l.wallet.value.balance) == null ? void 0 : G.tonBalance.balance.value : void 0;
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
                label: `${A("memepad.jetton.fees_platform")}: ${de((x=n.value.overview)==null?void 0:x.platformFee,2)} TON`
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
        $ = () => {
          var w;
          (w = m.value) == null || w.focusOnInput()
        },
        p = () => {
          f.value.errorMessage || P()
        },
        h = async () => {
          if (f.value.errorMessage) return;
          const w = new H(n.value.share),
            I = await a.jettonManagement.getJettonOverview(w.toNumber());
          w.eq(n.value.share) && te(I) && (n.value = {
            status: "loaded",
            share: w.toNumber(),
            overview: I.data
          }, i("update", {
            share: w.toNumber(),
            overview: te(I) ? I.data : void 0
          }))
        }, P = async () => {
          if (n.value.status === "loaded") return i("continue", {
            share: +n.value.share,
            overview: n.value.overview
          });
          F.value = !0;
          const w = await a.jettonManagement.getJettonOverview(n.value.share);
          te(w) ? i("continue", {
            share: +n.value.share,
            overview: w.data
          }) : v(), F.value = !1
        }, {
          debouncedFunction: M
        } = ut(h, 400);
      return Se(() => n.value.share, () => {
        n.value.status = "loading", M()
      }), (w, I) => {
        const T = le,
          O = wt,
          x = Mt,
          q = kt,
          G = St,
          ee = De,
          re = Y,
          ie = At,
          J = Ft;
        return c(), V(J, {
          class: "memepad-new-step-3"
        }, {
          top: L(() => [b("div", Wn, [S(T, {
            step: 3
          })])]),
          default: L(() => [b("div", zn, [S(O, {
            ref_key: "actionControlsInputComp",
            ref: m,
            modelValue: t(_),
            "onUpdate:modelValue": I[0] || (I[0] = ue => ae(_) ? _.value = ue : null),
            postfix: "TON",
            modifier: e,
            onBlur: $
          }, null, 8, ["modelValue"]), b("div", Jn, [t(s) ? (c(), k("span", Hn, E(t(s)), 1)) : t(s) === void 0 ? (c(), V(x, {
            key: 1,
            class: "skeleton"
          })) : C("", !0)])])]),
          "bottom-action": L(() => [b("div", Qn, [t(f).showInfo ? (c(), k("div", Zn, [t(f).tonBalance.label && !t(f).loading ? (c(), V(q, {
            key: 0,
            balance: t(f).tonBalance.label
          }, null, 8, ["balance"])) : (c(), V(x, {
            key: 1,
            class: "skeleton"
          })), t(f).loading ? (c(), V(x, {
            key: 3,
            class: "skeleton"
          })) : (c(), V(G, {
            key: 2,
            details: t(f).fees.details,
            "total-label": t(f).fees.label,
            "error-message": t(f).errorMessage
          }, null, 8, ["details", "total-label", "error-message"]))])) : C("", !0), t(f).isEnoughTon ? (c(), V(re, {
            key: 2,
            fill: "",
            size: t(z).LARGE,
            loading: t(f).loading,
            onClick: p
          }, {
            default: L(() => [b("div", Yn, E(("t" in w ? w.t : t(A))("memepad.new.step_3.next_btn")), 1)]),
            _: 1
          }, 8, ["size", "loading"])) : (c(), V(ee, {
            key: 1
          }))])]),
          "bottom-helpers": L(() => [S(ie, {
            ref_key: "rangeInputEl",
            ref: r,
            modelValue: t(y),
            "onUpdate:modelValue": I[1] || (I[1] = ue => ae(y) ? y.value = ue : null),
            tab: t(rt).BUY
          }, null, 8, ["modelValue", "tab"])]),
          _: 1
        })
      }
    }
  }),
  ea = N(Xn, [
    ["__scopeId", "data-v-1702c8a9"]
  ]),
  ta = {
    class: "memepad-jetton-logo-ticker"
  },
  na = ["src"],
  aa = {
    class: "ticker-name-compose"
  },
  oa = {
    class: "ticker"
  },
  sa = {
    class: "name"
  },
  la = U({
    __name: "LogoTicker",
    props: {
      logoFileKey: {},
      ticker: {},
      name: {}
    },
    setup(d) {
      return (o, a) => (c(), k("div", ta, [b("img", {
        src: t(oe)(o.logoFileKey),
        alt: "Jetton logo"
      }, null, 8, na), b("div", aa, [b("div", oa, E(o.ticker), 1), b("div", sa, E(o.name), 1)])]))
    }
  }),
  ra = N(la, [
    ["__scopeId", "data-v-39dff782"]
  ]),
  ia = {
    class: "memepad-new-price-details"
  },
  ua = {
    class: "key"
  },
  ca = {
    class: "value"
  },
  da = {
    class: "memepad-new-price-details-fee-details"
  },
  pa = {
    class: "label"
  },
  ma = {
    class: "row total"
  },
  _a = {
    class: "key"
  },
  fa = {
    key: 0,
    class: "not-enough-balance"
  },
  va = {
    class: "label"
  },
  ga = {
    key: 1,
    class: "value"
  },
  ha = {
    class: "label"
  },
  ba = U({
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
        const i = X,
          m = Vt;
        return c(), k("div", ia, [(c(!0), k(D, null, Z(o.details.sections, r => (c(), k("div", {
          key: r.title,
          class: "row"
        }, [b("div", ua, E(r.title), 1), b("div", ca, [S(m, null, {
          default: L(() => [S(i, {
            name: "circle-help",
            class: "memepad-new-price-details-tooltip-icon"
          })]),
          inner: L(() => [b("div", da, [(c(!0), k(D, null, Z(r.details, n => (c(), k("span", {
            key: n.label,
            class: Ne({
              highlighted: n.highlight
            })
          }, E(n.label), 3))), 128))])]),
          _: 2
        }, 1024), b("span", pa, E(r.label), 1)])]))), 128)), o.details.totalSection ? (c(), k(D, {
          key: 0
        }, [a[0] || (a[0] = b("div", {
          class: "divider"
        }, null, -1)), b("div", ma, [b("div", _a, E(o.details.totalSection.title), 1), o.notEnoughBalance ? (c(), k("div", fa, [S(i, {
          name: "circle-help",
          class: "icon"
        }), b("span", va, E(("t" in o ? o.t : t(A))("memepad.jetton.not_enough_error", {
          ticker: "TON"
        })), 1)])) : (c(), k("div", ga, [b("span", ha, E(o.details.totalSection.label), 1)]))])], 64)) : C("", !0)])
      }
    }
  }),
  ya = N(ba, [
    ["__scopeId", "data-v-a59dc9db"]
  ]),
  wa = {
    class: "memepad-new-step-overview"
  },
  ka = {
    class: "button-wrapper"
  },
  Sa = U({
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
        i = o,
        m = Te(),
        r = Ce(),
        n = () => Le().bottom.success(A("memepad.jetton.new.error_alert"));
      r.onConnectError(n);
      const e = j(() => {
          const g = a.tonUsdRate && a.form.overview.marketCapTon.mul(a.tonUsdRate),
            v = a.tonUsdRate && a.form.overview.priceTon.mul(a.tonUsdRate);
          return {
            percent: a.form.overview.tonCollectedPercent,
            collected: a.form.overview.tonCollected,
            total: a.form.overview.tonForDex,
            marketDetails: {
              marketCap: g,
              listRows: {
                price: v,
                availableSupply: a.form.overview.availableSupply,
                maxSupply: a.form.overview.maxSupply
              }
            }
          }
        }),
        u = j(() => a.jettonManagement.getPriceDetails(a.form.overview)),
        _ = j(() => {
          var v;
          const g = m.wallet.value.status === "connected" ? (v = m.wallet.value.balance) == null ? void 0 : v.tonBalance : void 0;
          if (g) return g.balance.value.gte(u.value.total)
        }),
        y = R(!1),
        l = async () => {
          if (!_.value || y.value) return;
          y.value = !0, await a.launchCallback(a.form) ? i("continue") : n(), y.value = !1
        };
      return (g, v) => {
        const F = le,
          s = ra,
          f = It,
          $ = Pt,
          p = ya,
          h = De,
          P = Y,
          M = xt,
          w = se;
        return c(), k("div", wa, [S(F, {
          step: 4,
          class: "heading"
        }), S(s, {
          "logo-file-key": g.form.iconFileKey,
          ticker: g.form.ticker,
          name: g.form.name,
          class: "logo-ticker"
        }, null, 8, ["logo-file-key", "ticker", "name"]), S(f, {
          "banner-file-key": g.form.bannerFileKey,
          class: "banner"
        }, null, 8, ["banner-file-key"]), S($, ct(dt(t(e))), null, 16), S(w, null, {
          default: L(() => [S(p, {
            "with-share": !!g.form.share,
            details: t(u),
            "not-enough-balance": t(_) === !1
          }, null, 8, ["with-share", "details", "not-enough-balance"]), b("div", ka, [S(M, null, {
            default: L(() => [t(_) ? (c(), V(P, {
              key: 1,
              label: ("t" in g ? g.t : t(A))("memepad.new.step_4.launch_btn"),
              fill: "",
              size: t(z).LARGE,
              type: t(pt).DROP,
              onClick: l
            }, null, 8, ["label", "size", "type"])) : (c(), V(h, {
              key: 0
            }))]),
            _: 1
          })])]),
          _: 1
        })])
      }
    }
  }),
  Aa = N(Sa, [
    ["__scopeId", "data-v-f18ecdd0"]
  ]),
  Fa = {
    class: "memepad-new-step-launch"
  },
  Ia = {
    class: "inner"
  },
  Pa = {
    class: "icon-wrapper"
  },
  xa = {
    class: "error-icon"
  },
  $a = {
    class: "title"
  },
  Ea = {
    class: "subtitle"
  },
  Ma = {
    class: "inner"
  },
  Va = {
    class: "icon-wrapper"
  },
  Ra = ["src"],
  Ua = {
    class: "title"
  },
  Na = {
    class: "subtitle"
  },
  Ta = {
    key: 0,
    class: "rocket-wrapper"
  },
  Ca = 3e3,
  La = U({
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
        i = R("LOADING"),
        m = [],
        r = () => new Promise(u => {
          i.value = "ROCKET", m.push(setTimeout(() => {
            u(void 0)
          }, Ca))
        }),
        n = () => {
          i.value = "ERROR"
        },
        e = () => {
          m.forEach(clearTimeout), i.value = "LOADING"
        };
      return mt(() => {
        e()
      }), o({
        runSuccess: r,
        runError: n
      }), (u, _) => {
        const y = Rt,
          l = X,
          g = Y,
          v = se,
          F = _t;
        return c(), k("div", Fa, [S(y), t(i) === "ERROR" ? (c(), k(D, {
          key: 0
        }, [b("div", Ia, [b("div", Pa, [b("div", xa, [S(l, {
          name: "warning",
          class: "icon"
        })])]), b("div", $a, E(("t" in u ? u.t : t(A))("memepad.new.failed.title", {
          ticker: u.form.ticker
        })), 1), b("div", Ea, E(("t" in u ? u.t : t(A))("memepad.new.failed.subtitle")), 1)]), S(v, null, {
          default: L(() => [S(g, {
            fill: "",
            label: ("t" in u ? u.t : t(A))("memepad.new.retry_btn_label"),
            size: t(z).LARGE,
            onClick: _[0] || (_[0] = s => u.retryCallback(u.form))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64)) : (c(), k(D, {
          key: 1
        }, [b("div", Ma, [b("div", Va, [b("img", {
          src: t(oe)(u.form.iconFileKey),
          alt: "Jetton logo",
          width: "80",
          height: "80"
        }, null, 8, Ra)]), b("div", Ua, E(("t" in u ? u.t : t(A))("memepad.new.step_launch.title")), 1), b("div", Na, E(("t" in u ? u.t : t(A))("memepad.new.step_launch.subtitle")), 1)]), t(i) === "ROCKET" ? (c(), k("div", Ta, [S(F, {
          name: "animations/Rocket",
          size: 348
        })])) : C("", !0), S(v, null, {
          default: L(() => [S(g, {
            fill: "",
            label: ("t" in u ? u.t : t(A))("base.continue"),
            size: t(z).LARGE,
            onClick: _[1] || (_[1] = s => t(a).push({
              name: "memepad"
            }))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64))])
      }
    }
  }),
  ja = N(La, [
    ["__scopeId", "data-v-85485fa8"]
  ]),
  Oa = {
    class: "memepad-new"
  },
  qa = U({
    __name: "New",
    props: {
      tonUsdRate: {},
      retryPayload: {},
      jettonManagement: {}
    },
    setup(d) {
      const o = d,
        a = je(),
        i = fe(),
        m = Oe(),
        r = R();
      qe().getReferralToken();
      const n = o.jettonManagement.getWaitForCreateStatus(),
        e = R(o.retryPayload ? $t(o.retryPayload) : {
          step: 1,
          step1: pe.step1(),
          step2: pe.step2(),
          step3: pe.step3()
        });
      (() => {
        o.retryPayload ? a.memepad.memepadJettonRetry() : a.memepad.memepadJettonStepInfo()
      })();
      const _ = (s, f) => {
          const $ = {
            step: 2,
            step1: f,
            step2: s.step2,
            step3: s.step3
          };
          e.value = $, a.memepad.memepadJettonStepPersonalise()
        },
        y = (s, f) => {
          const $ = {
            step: 3,
            step1: s.step1,
            step2: f,
            step3: s.step3
          };
          e.value = $, a.memepad.memepadJettonStepShare()
        },
        l = (s, f) => {
          const $ = {
            step: 4,
            step1: s.step1,
            step2: s.step2,
            step3: f
          };
          e.value = $, a.memepad.memepadJettonStepOverview()
        },
        g = (s, f) => {
          e.value = {
            ...s,
            step3: f
          }
        },
        v = s => {
          const f = {
            step: 5,
            step1: s.step1,
            step2: s.step2,
            step3: s.step3
          };
          e.value = f
        };
      Ut(() => {
        const s = e.value;
        switch (s.step) {
          case 1:
            fe().push({
              name: "memepad"
            });
            break;
          case 2:
            e.value = {
              ...s,
              step: 1
            };
            break;
          case 3:
          case 4:
            e.value = {
              ...s,
              step: s.step - 1
            };
            break;
          case 5:
            return;
          default:
            throw ke("Invalid step")
        }
      });
      const F = async s => {
        const f = await o.jettonManagement.createJetton(s);
        return te(f) ? ((async () => {
          const {
            launchTransactionHash: $,
            queryId: p
          } = f.data;
          a.memepad.memepadJettonStartLaunch({
            jettonId: p
          }), await vt(3e4);
          const h = await n.exec({
            launchTransactionHash: $,
            queryId: p
          });
          h ? a.memepad.memepadJettonEndLaunch({
            status: "success",
            purchaseAmount: s.share,
            jettonAddress: h.address,
            jettonShortname: h.shortname,
            jettonId: p
          }) : a.memepad.memepadJettonEndLaunch({
            status: "failed",
            purchaseAmount: s.share
          }), r.value ? h ? (await r.value.runSuccess(), await i.push({
            name: "memepad-jetton-shortname",
            params: {
              shortname: h.shortname
            }
          })) : r.value.runError() : (h ? a.memepad.memepadJettonLaunchShowNotification({
            status: "success",
            jettonAddress: h.address,
            jettonShortname: h.shortname,
            jettonId: p
          }) : a.memepad.memepadJettonLaunchShowNotification({
            status: "failed"
          }), gt().name !== "game" && (h ? m.showSuccessSheet(s, h.shortname) : m.showErrorSheet(s)))
        })(), !0) : (f.extra && f.extra instanceof Error && f.extra instanceof ft && a.memepad.memepadJettonLaunchWalletUiError(), !1)
      };
      return (s, f) => {
        const $ = Kt,
          p = pn,
          h = Gn,
          P = ea,
          M = Aa,
          w = ja;
        return c(), k("div", Oa, [t(e).step !== 5 ? (c(), V($, {
          key: 0,
          step: t(e).step,
          "count-steps": 4
        }, null, 8, ["step"])) : C("", !0), t(e).step === 1 ? (c(), V(p, {
          key: 1,
          state: t(e),
          onContinue: f[0] || (f[0] = I => _(t(e), I))
        }, null, 8, ["state"])) : C("", !0), t(e).step === 2 ? (c(), V(h, {
          key: 2,
          state: t(e),
          onContinue: f[1] || (f[1] = I => y(t(e), I))
        }, null, 8, ["state"])) : C("", !0), t(e).step === 3 ? (c(), V(P, {
          key: 3,
          state: t(e),
          "jetton-management": o.jettonManagement,
          onContinue: f[2] || (f[2] = I => l(t(e), I)),
          onUpdate: f[3] || (f[3] = I => g(t(e), I))
        }, null, 8, ["state", "jetton-management"])) : C("", !0), t(e).step === 4 ? (c(), V(M, {
          key: 4,
          form: t(xe)(t(e)),
          "jetton-management": o.jettonManagement,
          "ton-usd-rate": s.tonUsdRate,
          "launch-callback": F,
          onContinue: f[4] || (f[4] = I => v(t(e)))
        }, null, 8, ["form", "jetton-management", "ton-usd-rate"])) : C("", !0), t(e).step === 5 ? (c(), V(w, {
          key: 5,
          ref_key: "stepLaunchApi",
          ref: r,
          form: t(xe)(t(e)),
          "retry-callback": t(m).retry
        }, null, 8, ["form", "retry-callback"])) : C("", !0)])
      }
    }
  }),
  Ba = N(qa, [
    ["__scopeId", "data-v-9f00743b"]
  ]),
  Da = {
    class: "memepad-new-page page"
  },
  Ka = U({
    __name: "new",
    setup(d) {
      const {
        popRetryPayload: o
      } = Oe(), {
        tonUsdRate: a,
        memepadManagementSdk: i
      } = Tt(), m = je();
      return (() => {
        qe().getReferralToken(), m.memepad.memepadJettonStart()
      })(), (n, e) => {
        const u = Ba,
          _ = Nt;
        return c(), k("div", Da, [t(i) ? (c(), V(u, {
          key: 0,
          "ton-usd-rate": t(a),
          "retry-payload": t(o)(),
          "jetton-management": t(i)
        }, null, 8, ["ton-usd-rate", "retry-payload", "jetton-management"])) : (c(), V(_, {
          key: 1
        }))])
      }
    }
  }),
  oo = N(Ka, [
    ["__scopeId", "data-v-11d52018"]
  ]);
export {
  oo as
  default
};