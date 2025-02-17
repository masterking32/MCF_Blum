import {
  bK as We,
  d as T,
  o as p,
  c as w,
  a as v,
  ax as be,
  f as U,
  j,
  V as ye,
  z as k,
  t as $,
  e,
  ao as W,
  K as I,
  aT as se,
  bL as pe,
  G as M,
  a_ as Re,
  bM as Te,
  D as O,
  b as A,
  bN as z,
  bO as ze,
  a$ as Ue,
  an as J,
  ak as Je,
  aF as we,
  bP as He,
  w as Ve,
  bQ as Qe,
  n as Ne,
  bR as Ze,
  bS as ae,
  F as G,
  q as Q,
  H as L,
  bl as Fe,
  ae as Ee,
  aA as Ye,
  bT as Xe,
  p as oe,
  U as H,
  x as Z,
  _ as Y,
  bU as et,
  bV as tt,
  bW as nt,
  bb as Pe,
  aY as at,
  a9 as ot,
  bX as st,
  R as K,
  P as Ce,
  b2 as ke,
  E as te,
  aS as ce,
  bY as lt,
  bz as rt,
  a7 as it,
  Z as Oe,
  a1 as ne,
  ab as ut,
  bC as ct,
  bD as dt,
  B as pt,
  ac as me,
  $ as Ae,
  T as mt,
  bZ as _t,
  h as ft,
  ad as vt,
  b_ as Le,
  bd as je,
  O as gt,
  b$ as ht,
  bn as bt,
  b7 as yt,
  bE as wt,
  aL as kt,
  au as $e
} from "./jalGrT4m.js";
import {
  K as De
} from "./B0XKak_K.js";
import {
  _ as At,
  a as St
} from "./ClY1Dv7j.js";
import {
  _ as le
} from "./BkepT6Cs.js";
import {
  g as Ft,
  _ as Et,
  r as Pt,
  a as de,
  b as xe
} from "./BQQuRCND.js";
import {
  _ as $t
} from "./CBJKYRFI.js";
import {
  d as xt,
  _ as Mt,
  a as It,
  b as Be,
  e as Rt,
  f as Tt,
  g as Ut,
  c as Vt
} from "./DGv9WAg4.js";
import {
  _ as Nt
} from "./ZiLsTO_Y.js";
import {
  _ as Ct
} from "./tFfQGhaO.js";
import {
  _ as Ot
} from "./iyS2EXyX.js";
import {
  _ as Lt
} from "./7X64O2QS.js";
import {
  u as jt
} from "./CAb5sc76.js";
import {
  c as Dt
} from "./CjrCyY9h.js";
import "./CtAx_7Mj.js";
import "./ZK9drXsv.js";
import "./D57Zpb5h.js";
import "./DUg-h6sn.js";
var _e = {
  exports: {}
};
(function(m, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = _;

  function n(f) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? n = function(i) {
      return typeof i
    } : n = function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i
    }, n(f)
  }

  function _(f) {
    var t = typeof f == "string" || f instanceof String;
    if (!t) {
      var i = n(f);
      throw f === null ? i = "null" : i === "object" && (i = f.constructor.name), new TypeError("Expected a string but received a ".concat(i))
    }
  }
  m.exports = s.default, m.exports.default = s.default
})(_e, _e.exports);
var Se = _e.exports,
  fe = {
    exports: {}
  };
(function(m, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = n;

  function n() {
    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      f = arguments.length > 1 ? arguments[1] : void 0;
    for (var t in f) typeof _[t] > "u" && (_[t] = f[t]);
    return _
  }
  m.exports = s.default, m.exports.default = s.default
})(fe, fe.exports);
var qe = fe.exports,
  ve = {
    exports: {}
  };
(function(m, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = i;
  var n = f(Se),
    _ = f(qe);

  function f(a) {
    return a && a.__esModule ? a : {
      default: a
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

  function i(a, u) {
    (0, n.default)(a), u = (0, _.default)(u, t), u.allow_trailing_dot && a[a.length - 1] === "." && (a = a.substring(0, a.length - 1)), u.allow_wildcard === !0 && a.indexOf("*.") === 0 && (a = a.substring(2));
    var g = a.split("."),
      r = g[g.length - 1];
    return u.require_tld && (g.length < 2 || !u.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(r) || /\s/.test(r)) || !u.allow_numeric_tld && /^\d+$/.test(r) ? !1 : g.every(function(l) {
      return !(l.length > 63 && !u.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(l) || /[\uff01-\uff5e]/.test(l) || /^-|-$/.test(l) || !u.allow_underscores && /_/.test(l))
    })
  }
  m.exports = s.default, m.exports.default = s.default
})(ve, ve.exports);
var Bt = ve.exports,
  ge = {
    exports: {}
  };
(function(m, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = g;
  var n = _(Se);

  function _(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }
  var f = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    t = "(".concat(f, "[.]){3}").concat(f),
    i = new RegExp("^".concat(t, "$")),
    a = "(?:[0-9a-fA-F]{1,4})",
    u = new RegExp("^(" + "(?:".concat(a, ":){7}(?:").concat(a, "|:)|") + "(?:".concat(a, ":){6}(?:").concat(t, "|:").concat(a, "|:)|") + "(?:".concat(a, ":){5}(?::").concat(t, "|(:").concat(a, "){1,2}|:)|") + "(?:".concat(a, ":){4}(?:(:").concat(a, "){0,1}:").concat(t, "|(:").concat(a, "){1,3}|:)|") + "(?:".concat(a, ":){3}(?:(:").concat(a, "){0,2}:").concat(t, "|(:").concat(a, "){1,4}|:)|") + "(?:".concat(a, ":){2}(?:(:").concat(a, "){0,3}:").concat(t, "|(:").concat(a, "){1,5}|:)|") + "(?:".concat(a, ":){1}(?:(:").concat(a, "){0,4}:").concat(t, "|(:").concat(a, "){1,6}|:)|") + "(?::((?::".concat(a, "){0,5}:").concat(t, "|(?::").concat(a, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

  function g(r) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, n.default)(r), l = String(l), l ? l === "4" ? i.test(r) : l === "6" ? u.test(r) : !1 : g(r, 4) || g(r, 6)
  }
  m.exports = s.default, m.exports.default = s.default
})(ge, ge.exports);
var qt = ge.exports,
  he = {
    exports: {}
  };
(function(m, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = R;
  var n = i(Se),
    _ = i(Bt),
    f = i(qt),
    t = i(qe);

  function i(o) {
    return o && o.__esModule ? o : {
      default: o
    }
  }

  function a(o, d) {
    return b(o) || l(o, d) || g(o, d) || u()
  }

  function u() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }

  function g(o, d) {
    if (o) {
      if (typeof o == "string") return r(o, d);
      var F = Object.prototype.toString.call(o).slice(8, -1);
      if (F === "Object" && o.constructor && (F = o.constructor.name), F === "Map" || F === "Set") return Array.from(o);
      if (F === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)) return r(o, d)
    }
  }

  function r(o, d) {
    (d == null || d > o.length) && (d = o.length);
    for (var F = 0, y = new Array(d); F < d; F++) y[F] = o[F];
    return y
  }

  function l(o, d) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(o)))) {
      var F = [],
        y = !0,
        S = !1,
        C = void 0;
      try {
        for (var V = o[Symbol.iterator](), N; !(y = (N = V.next()).done) && (F.push(N.value), !(d && F.length === d)); y = !0);
      } catch (E) {
        S = !0, C = E
      } finally {
        try {
          !y && V.return != null && V.return()
        } finally {
          if (S) throw C
        }
      }
      return F
    }
  }

  function b(o) {
    if (Array.isArray(o)) return o
  }
  var h = {
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

  function c(o) {
    return Object.prototype.toString.call(o) === "[object RegExp]"
  }

  function x(o, d) {
    for (var F = 0; F < d.length; F++) {
      var y = d[F];
      if (o === y || c(y) && y.test(o)) return !0
    }
    return !1
  }

  function R(o, d) {
    if ((0, n.default)(o), !o || /[\s<>]/.test(o) || o.indexOf("mailto:") === 0 || (d = (0, t.default)(d, h), d.validate_length && o.length >= 2083) || !d.allow_fragments && o.includes("#") || !d.allow_query_components && (o.includes("?") || o.includes("&"))) return !1;
    var F, y, S, C, V, N, E, D;
    if (E = o.split("#"), o = E.shift(), E = o.split("?"), o = E.shift(), E = o.split("://"), E.length > 1) {
      if (F = E.shift().toLowerCase(), d.require_valid_protocol && d.protocols.indexOf(F) === -1) return !1
    } else {
      if (d.require_protocol) return !1;
      if (o.slice(0, 2) === "//") {
        if (!d.allow_protocol_relative_urls) return !1;
        E[0] = o.slice(2)
      }
    }
    if (o = E.join("://"), o === "") return !1;
    if (E = o.split("/"), o = E.shift(), o === "" && !d.require_host) return !0;
    if (E = o.split("@"), E.length > 1) {
      if (d.disallow_auth || E[0] === "" || (y = E.shift(), y.indexOf(":") >= 0 && y.split(":").length > 2)) return !1;
      var X = y.split(":"),
        ee = a(X, 2),
        ie = ee[0],
        ue = ee[1];
      if (ie === "" && ue === "") return !1
    }
    C = E.join("@"), N = null, D = null;
    var B = C.match(P);
    if (B ? (S = "", D = B[1], N = B[2] || null) : (E = C.split(":"), S = E.shift(), E.length && (N = E.join(":"))), N !== null && N.length > 0) {
      if (V = parseInt(N, 10), !/^[0-9]+$/.test(N) || V <= 0 || V > 65535) return !1
    } else if (d.require_port) return !1;
    return d.host_whitelist ? x(S, d.host_whitelist) : S === "" && !d.require_host ? !0 : !(!(0, f.default)(S) && !(0, _.default)(S, d) && (!D || !(0, f.default)(D, 6)) || (S = S || D, d.host_blacklist && x(S, d.host_blacklist)))
  }
  m.exports = s.default, m.exports.default = s.default
})(he, he.exports);
var Kt = he.exports;
const Gt = We(Kt);

function Wt(m, s) {
  return typeof m == "string" && Gt(m, s)
}
const zt = {
    class: "memepad-new-progress"
  },
  Jt = T({
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
      return (s, n) => (p(), w("div", zt, [v("div", {
        class: "track",
        style: be({
          width: `${m.step/m.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  Ht = U(Jt, [
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
  Xt = T({
    __name: "NewStepHeading",
    props: {
      step: {
        type: Number,
        required: !0
      }
    },
    setup(m) {
      const s = m,
        n = j(() => {
          switch (s.step) {
            case 1:
              return {
                step: "1", label: k("memepad.new.step_1.title")
              };
            case 2:
              return {
                step: "2", label: k("memepad.new.step_2.title")
              };
            case 3:
              return {
                step: "3", label: k("memepad.new.step_3.title")
              };
            case 4:
              return {
                step: "4", label: k("memepad.new.step_4.title")
              };
            default:
              throw s.step, ye("Invalid step")
          }
        });
      return (_, f) => (p(), w("div", Qt, [v("div", Zt, $(e(n).step), 1), v("div", Yt, $(e(n).label), 1)]))
    }
  }),
  re = U(Xt, [
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
    src: ze,
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
  Me = 10,
  ln = T({
    __name: "Avatar",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(m) {
      const s = W(m, "modelValue"),
        n = I(),
        _ = () => {
          var i;
          return (i = n.value) == null ? void 0 : i.triggerFileUpload()
        },
        f = I(),
        t = j(() => {
          if (s.value) return se(s.value)
        });
      return (i, a) => {
        var r;
        const u = Ue,
          g = De;
        return p(), w("div", en, [v("div", tn, [e(t) ? (p(), w("div", {
          key: 0,
          class: "image is-uploaded",
          style: be({
            backgroundImage: `url(${e(t)})`
          })
        }, null, 4)) : (p(), w("div", {
          key: 1,
          class: "image wait-upload",
          onClick: a[0] || (a[0] = l => _())
        }, [((r = e(f)) == null ? void 0 : r.status) === e(pe).UPLOADING ? (p(), M(u, {
          key: 0,
          type: e(Re).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (p(), w("img", nn))])), v("div", an, [v("div", on, $(("t" in i ? i.t : e(k))("memepad.new.step_1.field_icon.label")), 1), v("div", sn, $(("t" in i ? i.t : e(k))("memepad.new.step_1.field_icon.description", {
          maxUploadSize: String(Me)
        })), 1)]), s.value ? (p(), w("div", {
          key: 2,
          class: "delete",
          onClick: a[1] || (a[1] = l => s.value = void 0)
        }, a[4] || (a[4] = [v("img", {
          src: Te,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))) : O("", !0)]), A(g, {
          ref_key: "fileUploaderRef",
          ref: n,
          "hide-ui": "",
          "max-file-size-mb": Me,
          accept: [e(z).JPEG, e(z).PNG, e(z).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 1,
            borderRadius: 999
          },
          "onUpdate:progress": a[2] || (a[2] = l => f.value = l),
          onUploaded: a[3] || (a[3] = l => s.value = l.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  rn = U(ln, [
    ["__scopeId", "data-v-d13d4287"]
  ]),
  un = ["for"],
  cn = {
    key: 0,
    class: "error-caption"
  },
  dn = ["id", "placeholder"],
  pn = T({
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
      emit: s
    }) {
      const n = m,
        _ = s,
        f = Je(),
        t = W(m, "modelValue"),
        i = I(),
        a = I(!1),
        u = () => {
          a.value = !0, _("focus", i.value)
        },
        g = () => {
          a.value = !1, _("blur", i.value)
        },
        r = j(() => {
          const h = [];
          return (n.isError || n.errorCaption) && h.push("is-error"), h
        });
      let l;
      return we(t, () => {
        if (!i.value) return;
        i.value.style.height = "auto";
        const h = i.value.scrollHeight,
          P = l !== void 0 ? h - l : 0;
        l = h, i.value.style.height = `${h}px`, P !== 0 && Ze(() => window.document.body.scrollBy(0, P))
      }), (h, P) => {
        const c = At;
        return p(), w("div", {
          class: Ne(["kit-textarea", e(r)])
        }, [h.label ? (p(), w("label", {
          key: 0,
          for: e(f)
        }, [v("span", null, $(h.label), 1), h.errorCaption ? (p(), w("div", cn, [P[3] || (P[3] = v("img", {
          src: He,
          alt: "Warning icon"
        }, null, -1)), v("div", null, $(h.errorCaption), 1)])) : h.maxLength ? (p(), M(c, {
          key: 1,
          value: t.value,
          "max-length": h.maxLength
        }, null, 8, ["value", "max-length"])) : O("", !0)], 8, un)) : O("", !0), Ve(v("textarea", {
          id: e(f),
          ref_key: "textareaRef",
          ref: i,
          "onUpdate:modelValue": P[0] || (P[0] = x => t.value = x),
          placeholder: h.placeholder,
          onChange: P[1] || (P[1] = x => h.$emit("change")),
          onInput: P[2] || (P[2] = x => h.$emit("input")),
          onFocus: u,
          onBlur: g
        }, null, 40, dn), [
          [Qe, t.value]
        ])], 2)
      }
    }
  }),
  mn = U(pn, [
    ["__scopeId", "data-v-fbb8bb63"]
  ]);
var q = (m => (m.STRING = "STRING", m.TEXTAREA = "TEXTAREA", m))(q || {});
const _n = T({
    __name: "KitForm",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: J(["channel"], ["update:modelValue"]),
    setup(m, {
      emit: s
    }) {
      const n = s,
        _ = W(m, "modelValue"),
        f = l => {
          l._ctx || (l._ctx = {
            initialValue: l.value,
            errors: []
          })
        };
      we(_, () => _.value.forEach(f), {
        immediate: !0
      });
      const t = () => {},
        i = l => l._ctx.errors = u(l),
        a = j(() => _.value.every(l => u(l).length === 0));
      ae(() => _.value.forEach(l => {
        l._ctx && l._ctx.errors.length > 0 && (l._ctx.errors = u(l))
      }));
      const u = l => {
          var h, P, c, x;
          const b = [];
          switch (l.type) {
            case q.STRING:
            case q.TEXTAREA: {
              if ((h = l.validators) != null && h.required && !l.value && b.push({
                  msg: "Required to continue",
                  isVisible: !0
                }), (P = l.validators) != null && P.maxLength) {
                const R = l.validators.maxLength.value - l.value.length;
                R < 0 && b.push({
                  msg: `${R*-1} over`,
                  isVisible: !1
                })
              }
              if (l.type === q.STRING && ((c = l.validators) != null && c.url)) {
                const R = l.validators.url.includePrefix && ((x = l.props) != null && x.prefix) ? `${l.props.prefix}${l.value}` : l.value;
                Wt(R) || b.push({
                  msg: "Invalid URL",
                  isVisible: !0
                })
              }
              break
            }
            default:
              throw ye("unknown type")
          }
          if (l.customValidator) {
            const R = l.customValidator(l.value);
            R && b.push({
              msg: R,
              isVisible: !0
            })
          }
          return b
        },
        g = l => {
          var h;
          const b = (h = l._ctx) == null ? void 0 : h.errors.find(P => P.isVisible);
          return b == null ? void 0 : b.msg
        },
        r = l => {
          var h;
          const b = (h = l._ctx) == null ? void 0 : h.errors.length;
          return b ? b > 0 : !1
        };
      return ae(() => n("channel", {
        isFormValid: a.value
      })), (l, b) => {
        const h = St,
          P = mn;
        return p(), w("form", {
          class: "kit-form",
          novalidate: "",
          onSubmit: b[0] || (b[0] = Ye(c => t(), ["prevent"]))
        }, [(p(!0), w(G, null, Q(_.value, c => {
          var x, R, o, d, F, y, S, C;
          return p(), w("div", {
            key: c.key,
            class: "field"
          }, [c.type === e(q).STRING ? (p(), M(h, Ee({
            key: 0,
            modelValue: c.value,
            "onUpdate:modelValue": V => c.value = V,
            ref_for: !0
          }, c.props, {
            "error-caption": g(c),
            "is-error": r(c),
            "max-length": (R = (x = c.validators) == null ? void 0 : x.maxLength) == null ? void 0 : R.value,
            class: "input",
            onChange: V => i(c),
            onFocus: (o = c.eventHandlers) == null ? void 0 : o.onFocus,
            onBlur: (d = c.eventHandlers) == null ? void 0 : d.onBlur
          }), {
            label: L(() => [Fe(l.$slots, `${c.key}-label`, {}, void 0, !0)]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : O("", !0), c.type === e(q).TEXTAREA ? (p(), M(P, Ee({
            key: 1,
            modelValue: c.value,
            "onUpdate:modelValue": V => c.value = V,
            ref_for: !0
          }, c.props, {
            "error-caption": g(c),
            "is-error": r(c),
            "max-length": (y = (F = c.validators) == null ? void 0 : F.maxLength) == null ? void 0 : y.value,
            class: "textarea",
            onChange: V => i(c),
            onFocus: (S = c.eventHandlers) == null ? void 0 : S.onFocus,
            onBlur: (C = c.eventHandlers) == null ? void 0 : C.onBlur
          }), null, 16, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : O("", !0), Fe(l.$slots, `${c.key}-after`, {}, void 0, !0)])
        }), 128))], 32)
      }
    }
  }),
  Ke = U(_n, [
    ["__scopeId", "data-v-5c8581ee"]
  ]),
  fn = {
    class: "memepad-new-step-1"
  },
  vn = T({
    __name: "1",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(m, {
      emit: s
    }) {
      const _ = I({
          ...m.state.step1
        }),
        f = s,
        t = I([{
          key: "name",
          type: q.STRING,
          value: j({
            get: () => _.value.name ?? "",
            set: g => _.value.name = g ?? ""
          }),
          props: {
            label: k("memepad.new.step_1.field_name.label"),
            placeholder: k("memepad.new.step_1.field_name.placeholder")
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
            get: () => _.value.ticker ?? "",
            set: g => _.value.ticker = g ?? ""
          }),
          props: {
            label: k("memepad.new.step_1.field_ticker.label"),
            placeholder: k("memepad.new.step_1.field_ticker.placeholder"),
            modifiers: [Xe.UPPERCASE]
          },
          validators: {
            required: {},
            maxLength: {
              value: 10
            }
          },
          customValidator: g => {
            if (!g.match(/^[A-Z0-9]+$/)) return k("memepad.new.step_1.field_ticker.custom_validator_error")
          }
        }, {
          key: "description",
          type: q.TEXTAREA,
          value: j({
            get: () => _.value.description ?? "",
            set: g => _.value.description = g ?? ""
          }),
          props: {
            label: k("memepad.new.step_1.field_description.label"),
            placeholder: k("memepad.new.step_1.field_description.placeholder")
          },
          validators: {
            required: {},
            maxLength: {
              value: 240
            }
          }
        }]),
        i = I(),
        a = j(() => {
          var g;
          return ((g = i.value) == null ? void 0 : g.isFormValid) && !!_.value.iconFileKey
        }),
        u = () => f("continue", _.value);
      return (g, r) => {
        const l = re,
          b = rn,
          h = Ke,
          P = Z,
          c = le;
        return p(), w("div", fn, [A(l, {
          step: 1
        }), A(b, {
          modelValue: e(_).iconFileKey,
          "onUpdate:modelValue": r[0] || (r[0] = x => e(_).iconFileKey = x)
        }, null, 8, ["modelValue"]), A(h, {
          modelValue: e(t),
          "onUpdate:modelValue": r[1] || (r[1] = x => oe(t) ? t.value = x : null),
          onChannel: r[2] || (r[2] = x => i.value = x)
        }, null, 8, ["modelValue"]), A(c, null, {
          default: L(() => [A(P, {
            label: ("t" in g ? g.t : e(k))("base.continue"),
            fill: "",
            disabled: !e(a),
            tertiary: "",
            size: e(H).LARGE,
            onClick: u
          }, null, 8, ["label", "disabled", "size"])]),
          _: 1
        })])
      }
    }
  }),
  gn = U(vn, [
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
  kn = T({
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
      return (s, n) => {
        const _ = Y;
        return p(), w("div", hn, [m.iconName ? (p(), M(_, {
          key: 0,
          name: m.iconName,
          class: "icon"
        }, null, 8, ["name"])) : O("", !0), v("div", bn, [v("span", yn, $(m.title), 1), m.isOptional ? (p(), w("span", wn, $(` ${("t"in s?s.t:e(k))("base.optional")}`), 1)) : O("", !0)])])
      }
    }
  }),
  Ge = U(kn, [
    ["__scopeId", "data-v-272f2d1c"]
  ]),
  An = {
    class: "memepad-new-form-banner"
  },
  Sn = {
    key: 1,
    class: "banner is-uploading"
  },
  Fn = {
    class: "description"
  },
  En = {
    class: "text"
  },
  Pn = {
    class: "description"
  },
  Ie = 10,
  $n = T({
    __name: "Banner",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(m) {
      const s = W(m, "modelValue"),
        n = I(),
        _ = () => {
          var i;
          return (i = n.value) == null ? void 0 : i.triggerFileUpload()
        },
        f = I(),
        t = j(() => {
          if (f.value && f.value.status === pe.UPLOADING) return f.value.localUrl;
          if (s.value) return se(s.value)
        });
      return (i, a) => {
        var l;
        const u = Ge,
          g = Ue,
          r = De;
        return p(), w("div", An, [A(u, {
          title: ("t" in i ? i.t : e(k))("memepad.new.step_1.field_banner.label"),
          "is-optional": "",
          class: "heading"
        }, null, 8, ["title"]), s.value ? (p(), w("div", {
          key: 0,
          class: "banner is-uploaded",
          style: be({
            backgroundImage: `url(${e(t)})`
          })
        }, [v("div", {
          class: "delete-btn",
          onClick: a[0] || (a[0] = b => s.value = void 0)
        }, a[4] || (a[4] = [v("img", {
          src: Te,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((l = e(f)) == null ? void 0 : l.status) === e(pe).UPLOADING ? (p(), w("div", Sn, [A(g, {
          type: e(Re).LIGHT,
          size: 16
        }, null, 8, ["type"]), v("div", Fn, $(("t" in i ? i.t : e(k))("memepad.new.step_1.field_banner.uploading")), 1)])) : (p(), w("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: a[1] || (a[1] = b => _())
        }, [a[6] || (a[6] = v("img", {
          src: et,
          alt: "Add"
        }, null, -1)), v("div", En, [v("div", Pn, $(("t" in i ? i.t : e(k))("memepad.new.step_1.field_banner.description", {
          maxUploadSize: String(Ie)
        })), 1), a[5] || (a[5] = v("div", {
          class: "ratio"
        }, "361 × 119", -1))])])), A(r, {
          ref_key: "fileUploaderRef",
          ref: n,
          "hide-ui": "",
          "max-file-size-mb": Ie,
          accept: [e(z).JPEG, e(z).PNG, e(z).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 361 / 119,
            borderRadius: 8
          },
          "onUpdate:progress": a[2] || (a[2] = b => f.value = b),
          onUploaded: a[3] || (a[3] = b => s.value = b.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  xn = U($n, [
    ["__scopeId", "data-v-327e2cf8"]
  ]),
  Mn = {
    class: "memepad-new-form-social-links-item"
  },
  In = T({
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
      emit: s
    }) {
      const n = m,
        _ = s,
        f = W(m, "modelValue"),
        t = I([{
          type: q.STRING,
          key: n.meta.apiKey,
          value: j({
            get: () => f.value ?? "",
            set: a => f.value = a || void 0
          }),
          props: {
            placeholder: n.meta.placeholder,
            size: tt.COMPACT
          },
          validators: n.meta.skipUrlValidation ? {} : {
            url: {}
          }
        }]),
        i = I();
      return ae(() => {
        var a;
        return _("isValid", ((a = i.value) == null ? void 0 : a.isFormValid) ?? !1)
      }), (a, u) => {
        const g = Ge,
          r = Y,
          l = Ke;
        return p(), w("div", Mn, [A(l, {
          modelValue: e(t),
          "onUpdate:modelValue": u[1] || (u[1] = b => oe(t) ? t.value = b : null),
          onChannel: u[2] || (u[2] = b => i.value = b)
        }, nt({
          [`${m.meta.apiKey}-label`]: L(() => [A(g, {
            "icon-name": m.meta.icon,
            title: m.meta.display,
            "is-optional": ""
          }, null, 8, ["icon-name", "title"])]),
          _: 2
        }, [m.optional ? {
          name: `${m.meta.apiKey}-after`,
          fn: L(() => [v("button", {
            type: "button",
            class: "delete-button reset",
            onClick: u[0] || (u[0] = b => a.$emit("delete"))
          }, [A(r, {
            name: "trash",
            class: "icon"
          })])]),
          key: "0"
        } : void 0]), 1032, ["modelValue"])])
      }
    }
  }),
  Rn = U(In, [
    ["__scopeId", "data-v-e8eb736f"]
  ]),
  Tn = {
    class: "memepad-new-form-social-links"
  },
  Un = {
    class: "inputs"
  },
  Vn = {
    key: 0,
    class: "add-panel"
  },
  Nn = {
    class: "providers"
  },
  Cn = T({
    __name: "SocialLinks",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: J(["isValid"], ["update:modelValue"]),
    setup(m, {
      emit: s
    }) {
      const n = Ft(),
        _ = W(m, "modelValue"),
        f = s,
        t = I([{
          provider: Pe.TELEGRAM,
          isValid: !1,
          optional: !1
        }]),
        i = j(() => Object.values(Pe).filter(g => !t.value.find(r => r.provider === g))),
        a = g => t.value.push({
          provider: g,
          isValid: !1,
          optional: !0
        }),
        u = g => {
          t.value.splice(g, 1)
        };
      return ae(() => {
        const g = t.value.every(r => r.isValid);
        f("isValid", g)
      }), (g, r) => {
        const l = Rn,
          b = Y;
        return p(), w("div", Tn, [v("div", Un, [A(at, {
          name: "list-shuffle-transition"
        }, {
          default: L(() => [(p(!0), w(G, null, Q(e(t), (h, P) => (p(), M(l, {
            key: h.provider,
            modelValue: _.value[h.provider],
            "onUpdate:modelValue": c => _.value[h.provider] = c,
            meta: e(n)[h.provider],
            optional: h.optional,
            class: "provider-input",
            onIsValid: c => h.isValid = c,
            onDelete: c => u(P)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "meta", "optional", "onIsValid", "onDelete"]))), 128))]),
          _: 1
        })]), A(ot, {
          name: "appear-from-right-transition"
        }, {
          default: L(() => [e(i).length > 0 ? (p(), w("div", Vn, [A(b, {
            name: "plus",
            class: "plus-icon"
          }), v("div", Nn, [(p(!0), w(G, null, Q(e(i), h => (p(), w("div", {
            key: h,
            class: "provider"
          }, [A(b, {
            name: e(n)[h].icon,
            class: "provider-icon",
            onClick: P => a(h)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : O("", !0)]),
          _: 1
        })])
      }
    }
  }),
  On = U(Cn, [
    ["__scopeId", "data-v-5d3fea7d"]
  ]),
  Ln = {
    class: "kit-switch"
  },
  jn = T({
    __name: "Switch",
    props: {
      modelValue: {
        type: Boolean
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(m) {
      const s = W(m, "modelValue");
      return (n, _) => (p(), w("div", Ln, [Ve(v("input", {
        "onUpdate:modelValue": _[0] || (_[0] = f => s.value = f),
        type: "checkbox"
      }, null, 512), [
        [st, s.value]
      ])]))
    }
  }),
  Dn = U(jn, [
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
  Wn = T({
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
      const s = W(m, "modelValue");
      return (n, _) => {
        const f = Dn,
          t = $t;
        return p(), w("div", qn, [v("div", Kn, [v("div", Gn, $(("t" in n ? n.t : e(k))("memepad.new.step_1.field_nsfw.label")), 1), A(f, {
          modelValue: s.value,
          "onUpdate:modelValue": _[0] || (_[0] = i => s.value = i)
        }, null, 8, ["modelValue"])]), A(t, {
          text: ("t" in n ? n.t : e(k))("memepad.new.step_1.field_nsfw.message"),
          image: e(Bn),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }),
  zn = U(Wn, [
    ["__scopeId", "data-v-cf4bf4c7"]
  ]),
  Jn = {
    class: "memepad-new-step-2"
  },
  Hn = T({
    __name: "2",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(m, {
      emit: s
    }) {
      const n = m,
        _ = s,
        f = I(!1),
        t = I({
          ...n.state.step2
        }),
        i = () => _("continue", t.value);
      return (a, u) => {
        const g = re,
          r = xn,
          l = On,
          b = zn,
          h = Z,
          P = le;
        return p(), w("div", Jn, [A(g, {
          step: 2
        }), A(r, {
          modelValue: e(t).bannerFileKey,
          "onUpdate:modelValue": u[0] || (u[0] = c => e(t).bannerFileKey = c)
        }, null, 8, ["modelValue"]), A(l, {
          modelValue: e(t).socialProviders,
          "onUpdate:modelValue": u[1] || (u[1] = c => e(t).socialProviders = c),
          onIsValid: u[2] || (u[2] = c => f.value = c)
        }, null, 8, ["modelValue"]), A(b, {
          modelValue: e(t).isNSFW,
          "onUpdate:modelValue": u[3] || (u[3] = c => e(t).isNSFW = c)
        }, null, 8, ["modelValue"]), A(P, null, {
          default: L(() => [A(h, {
            label: ("t" in a ? a.t : e(k))("base.continue"),
            fill: "",
            tertiary: "",
            size: e(H).LARGE,
            disabled: !e(f),
            onClick: i
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  Qn = U(Hn, [
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
  oa = T({
    __name: "3",
    props: {
      state: {},
      jettonManagement: {},
      bclData: {}
    },
    emits: ["continue", "update"],
    setup(m, {
      emit: s
    }) {
      const n = m,
        _ = s,
        f = I(),
        t = I(n.state.step3.overview ? {
          status: "loaded",
          share: n.state.step3.share ?? 0,
          overview: n.state.step3.overview
        } : {
          status: "idle",
          share: n.state.step3.share ?? 0
        }),
        i = y => it(y, {
          join: "emptyFractional"
        }),
        a = y => +new K(y.replaceAll(",", "") || "0").toFixed(),
        u = j({
          get: () => new K(t.value.share).toFixed(),
          set: y => t.value.share = a(y)
        }),
        g = j({
          get: () => String(t.value.share),
          set: y => {
            t.value.share = a(i(y))
          }
        }),
        r = Ce(),
        l = ke(),
        b = () => Oe().success(k("memepad.jetton.new.error_alert"));
      l.onConnectError(b);
      const h = I(!1),
        P = j(() => {
          var y;
          return {
            jettonBalance: te(new K(0), n.state.step1.ticker),
            tonBalance: r.wallet.value.status === "connected" ? (y = r.wallet.value.balance) == null ? void 0 : y.tonBalance.balance : void 0
          }
        }),
        c = j(() => {
          var N;
          const y = (() => {
              var D;
              const E = r.wallet.value.status === "connected" ? (D = r.wallet.value.balance) == null ? void 0 : D.tonBalance.balance.value : void 0;
              return {
                value: E,
                label: E ? te(E, "TON").frontendWithSymbol : void 0
              }
            })(),
            S = {
              value: n.jettonManagement.fees.buyNetworkFee,
              label: `${k("memepad.jetton.fees_base")}: ${ce(n.jettonManagement.fees.buyNetworkFee)} TON`,
              details: [{
                label: `${k("memepad.jetton.fees_network")}: ${ce(n.jettonManagement.fees.buyNetworkFee)} TON`
              }, ...t.value.overview ? [{
                label: `${k("memepad.jetton.fees_platform")}: ${ce((N=t.value.overview)==null?void 0:N.platformFee)} TON`
              }] : []]
            },
            C = (() => {
              if ((y.value ? y.value.gte(S.value.plus(t.value.share)) : void 0) === !1) return {
                type: "NOT_ENOUGH_TON",
                message: k("memepad.jetton.not_enough_error", {
                  ticker: "TON"
                })
              };
              if (!new K(t.value.share).isZero() && new K(t.value.share).lt(1e-9)) return {
                type: "TOO_LOW_AMOUNT",
                message: k("memepad.new.share.error.too_low_amount")
              };
              if (n.bclData.tonForDexWithFees.lt(t.value.share)) return {
                type: "EXCEEDS_MAX_SUPPLY",
                message: k("memepad.new.share.error.exceeds_max_supply")
              }
            })(),
            V = (() => {
              if (t.value.status === "loading") return;
              if (C) return C.type === "EXCEEDS_MAX_SUPPLY" ? `${k("memepad.new.step_3.subtitle_of_supply",{percentAmount:">100%"})}` : C.type === "TOO_LOW_AMOUNT" ? `${k("memepad.new.step_3.subtitle_of_supply",{percentAmount:"<0.01%"})}` : "";
              if (!t.value.overview) {
                if (new K(t.value.share).isZero()) {
                  const D = te(new K(0), n.state.step1.ticker);
                  return k("memepad.new.step_3.subtitle", {
                    jettonsAmountWithSymbol: D.frontendWithSymbol,
                    percentAmount: "0"
                  })
                }
                return
              }
              const E = te(new K(t.value.overview.minReceive), n.state.step1.ticker);
              return t.value.overview ? k("memepad.new.step_3.subtitle", {
                jettonsAmountWithSymbol: E.frontendWithSymbol,
                percentAmount: lt(t.value.overview.jettonReceivePercent)
              }) : E.frontendWithSymbol
            })();
          return {
            tonBalance: y,
            showInfo: y.value !== void 0,
            fees: S,
            error: C,
            subtitle: V,
            loading: t.value.status === "loading" || h.value
          }
        }),
        x = () => {
          var y;
          (y = f.value) == null || y.focusOnInput()
        },
        R = () => {
          c.value.error || d()
        },
        o = async () => {
          const y = new K(t.value.share),
            S = await n.jettonManagement.getJettonOverview(y.toNumber());
          y.eq(t.value.share) && ne(S) && (t.value = {
            status: "loaded",
            share: y.toNumber(),
            overview: S.data
          }, _("update", {
            share: y.toNumber(),
            overview: ne(S) ? S.data : void 0
          }))
        }, d = async () => {
          if (t.value.status === "loaded") return _("continue", {
            share: +t.value.share,
            overview: t.value.overview
          });
          h.value = !0;
          const y = await n.jettonManagement.getJettonOverview(t.value.share);
          ne(y) ? _("continue", {
            share: +t.value.share,
            overview: y.data
          }) : b(), h.value = !1
        }, {
          debouncedFunction: F
        } = ut(o, 400);
      return we(() => t.value.share, () => {
        t.value.status = "loading", F()
      }), (y, S) => {
        const C = re,
          V = xt,
          N = Nt,
          E = Mt,
          D = It,
          X = Be,
          ee = Z,
          ie = Rt,
          ue = Tt;
        return p(), M(ue, {
          class: "memepad-new-step-3"
        }, {
          top: L(() => [v("div", Zn, [A(C, {
            step: 3
          })])]),
          default: L(() => [v("div", Yn, [A(V, {
            ref_key: "actionControlsInputComp",
            ref: f,
            modelValue: e(u),
            "onUpdate:modelValue": S[0] || (S[0] = B => oe(u) ? u.value = B : null),
            postfix: "TON",
            modifier: i,
            onBlur: x
          }, null, 8, ["modelValue"]), v("div", Xn, [e(c).subtitle ? (p(), w("span", ea, $(e(c).subtitle), 1)) : e(c).subtitle === void 0 ? (p(), M(N, {
            key: 1,
            class: "skeleton"
          })) : O("", !0)])])]),
          "bottom-action": L(() => {
            var B;
            return [v("div", ta, [e(c).showInfo ? (p(), w("div", na, [e(c).tonBalance.label && !e(c).loading ? (p(), M(E, {
              key: 0,
              balance: e(c).tonBalance.label
            }, null, 8, ["balance"])) : (p(), M(N, {
              key: 1,
              class: "skeleton"
            })), e(c).loading ? (p(), M(N, {
              key: 3,
              class: "skeleton"
            })) : (p(), M(D, {
              key: 2,
              details: e(c).fees.details,
              "total-label": e(c).fees.label,
              "error-message": (B = e(c).error) == null ? void 0 : B.message
            }, null, 8, ["details", "total-label", "error-message"]))])) : O("", !0), e(c).error && e(c).error.type === "NOT_ENOUGH_TON" ? (p(), M(X, {
              key: 1
            })) : (p(), M(ee, {
              key: 2,
              fill: "",
              size: e(H).LARGE,
              loading: e(c).loading,
              disabled: !e(c).loading && !!e(c).error,
              tertiary: "",
              onClick: R
            }, {
              default: L(() => [v("div", aa, $(("t" in y ? y.t : e(k))("memepad.new.step_3.next_btn")), 1)]),
              _: 1
            }, 8, ["size", "loading", "disabled"]))])]
          }),
          "bottom-helpers": L(() => [A(ie, {
            modelValue: e(g),
            "onUpdate:modelValue": S[1] || (S[1] = B => oe(g) ? g.value = B : null),
            tab: e(rt).BUY,
            balances: e(P)
          }, null, 8, ["modelValue", "tab", "balances"])]),
          _: 1
        })
      }
    }
  }),
  sa = U(oa, [
    ["__scopeId", "data-v-11ede1e3"]
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
  da = T({
    __name: "LogoTicker",
    props: {
      logoFileKey: {},
      ticker: {},
      name: {}
    },
    setup(m) {
      return (s, n) => (p(), w("div", la, [v("img", {
        src: e(se)(s.logoFileKey),
        alt: "Jetton logo"
      }, null, 8, ra), v("div", ia, [v("div", ua, $(s.ticker), 1), v("div", ca, $(s.name), 1)])]))
    }
  }),
  pa = U(da, [
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
  Sa = T({
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
      return (s, n) => {
        const _ = Y,
          f = Ct;
        return p(), w("div", ma, [(p(!0), w(G, null, Q(s.details.sections, t => (p(), w("div", {
          key: t.title,
          class: "row"
        }, [v("div", _a, $(t.title), 1), v("div", fa, [A(f, null, {
          default: L(() => [A(_, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: L(() => [v("div", va, [(p(!0), w(G, null, Q(t.details, i => (p(), w("span", {
            key: i.label,
            class: Ne({
              highlighted: i.highlight
            })
          }, $(i.label), 3))), 128))])]),
          _: 2
        }, 1024), v("span", ga, $(t.label), 1)])]))), 128)), s.details.totalSection ? (p(), w(G, {
          key: 0
        }, [n[0] || (n[0] = v("div", {
          class: "divider"
        }, null, -1)), v("div", ha, [v("div", ba, $(s.details.totalSection.title), 1), s.notEnoughBalance ? (p(), w("div", ya, [A(_, {
          name: "circle-help",
          class: "icon"
        }), v("span", wa, $(("t" in s ? s.t : e(k))("memepad.jetton.not_enough_error", {
          ticker: "TON"
        })), 1)])) : (p(), w("div", ka, [v("span", Aa, $(s.details.totalSection.label), 1)]))])], 64)) : O("", !0)])
      }
    }
  }),
  Fa = U(Sa, [
    ["__scopeId", "data-v-cd02a0d6"]
  ]),
  Ea = {
    class: "memepad-new-step-overview"
  },
  Pa = {
    class: "button-wrapper"
  },
  $a = T({
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
      emit: s
    }) {
      const n = m,
        _ = s,
        f = Ce(),
        t = ke(),
        i = () => Oe().success(k("memepad.jetton.new.error_alert"));
      t.onConnectError(i);
      const a = j(() => {
          const b = n.tonUsdRate && n.form.overview.marketCapTon.mul(n.tonUsdRate),
            h = n.tonUsdRate && n.form.overview.priceTon.mul(n.tonUsdRate);
          return {
            percent: n.form.overview.tonCollectedPercent,
            collected: n.form.overview.tonCollected,
            total: n.form.overview.tonForDex,
            marketDetails: {
              marketCap: b,
              listRows: {
                price: h,
                availableSupply: n.form.overview.availableSupply,
                maxSupply: n.form.overview.maxSupply
              }
            }
          }
        }),
        u = j(() => n.jettonManagement.getPriceDetails(n.form.overview)),
        g = j(() => {
          var h;
          const b = f.wallet.value.status === "connected" ? (h = f.wallet.value.balance) == null ? void 0 : h.tonBalance : void 0;
          if (b) return b.balance.value.gte(u.value.total)
        }),
        r = I(!1),
        l = async () => {
          if (!g.value || r.value) return;
          r.value = !0, await n.launchCallback(n.form) ? _("continue") : i(), r.value = !1
        };
      return (b, h) => {
        const P = re,
          c = pa,
          x = Et,
          R = Ut,
          o = Fa,
          d = Be,
          F = Z,
          y = Vt,
          S = le;
        return p(), w("div", Ea, [A(P, {
          step: 4,
          class: "heading"
        }), A(c, {
          "logo-file-key": b.form.iconFileKey,
          ticker: b.form.ticker,
          name: b.form.name,
          class: "logo-ticker"
        }, null, 8, ["logo-file-key", "ticker", "name"]), A(x, {
          "banner-file-key": b.form.bannerFileKey,
          class: "banner"
        }, null, 8, ["banner-file-key"]), A(R, ct(dt(e(a))), null, 16), A(S, null, {
          default: L(() => [A(o, {
            "with-share": !!b.form.share,
            details: e(u),
            "not-enough-balance": e(g) === !1
          }, null, 8, ["with-share", "details", "not-enough-balance"]), v("div", Pa, [A(y, null, {
            default: L(() => [e(g) ? (p(), M(F, {
              key: 1,
              label: ("t" in b ? b.t : e(k))("memepad.new.step_4.launch_btn"),
              fill: "",
              size: e(H).LARGE,
              type: e(pt).DROP,
              onClick: l
            }, null, 8, ["label", "size", "type"])) : (p(), M(d, {
              key: 0
            }))]),
            _: 1
          })])]),
          _: 1
        })])
      }
    }
  }),
  xa = U($a, [
    ["__scopeId", "data-v-c3aa5e11"]
  ]),
  Ma = {
    class: "memepad-new-step-launch"
  },
  Ia = {
    class: "inner"
  },
  Ra = {
    class: "icon-wrapper"
  },
  Ta = {
    class: "error-icon"
  },
  Ua = {
    class: "title"
  },
  Va = {
    class: "subtitle"
  },
  Na = {
    class: "inner"
  },
  Ca = {
    class: "icon-wrapper"
  },
  Oa = ["src"],
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
  qa = {
    class: "footer"
  },
  Ka = {
    class: "arena-banner"
  },
  Ga = {
    class: "title"
  },
  Wa = {
    class: "subtitle"
  },
  za = 3e3,
  Ja = T({
    __name: "Launch",
    props: {
      form: {},
      retryCallback: {
        type: Function
      }
    },
    setup(m, {
      expose: s
    }) {
      const n = me(),
        _ = Ae();
      _.memepad.memepadCabalArenaBannerShow();
      const f = I("LOADING"),
        t = [],
        i = () => new Promise(r => {
          f.value = "ROCKET", t.push(setTimeout(() => {
            r(void 0)
          }, za))
        }),
        a = () => {
          f.value = "ERROR"
        },
        u = () => {
          t.forEach(clearTimeout), f.value = "LOADING"
        },
        g = () => {
          _.memepad.memepadCabalArenaBannerClick(), ft().$webApp.openLink("https://www.cabal-arena.fun/")
        };
      return mt(() => {
        u()
      }), s({
        runSuccess: i,
        runError: a
      }), (r, l) => {
        const b = Ot,
          h = Y,
          P = Z,
          c = le,
          x = vt;
        return p(), w("div", Ma, [A(b), e(f) === "ERROR" ? (p(), w(G, {
          key: 0
        }, [v("div", Ia, [v("div", Ra, [v("div", Ta, [A(h, {
          name: "warning",
          class: "icon"
        })])]), v("div", Ua, $(("t" in r ? r.t : e(k))("memepad.new.failed.title", {
          ticker: r.form.ticker
        })), 1), v("div", Va, $(("t" in r ? r.t : e(k))("memepad.new.failed.subtitle")), 1)]), A(c, null, {
          default: L(() => [A(P, {
            fill: "",
            label: ("t" in r ? r.t : e(k))("memepad.new.retry_btn_label"),
            size: e(H).LARGE,
            onClick: l[0] || (l[0] = R => r.retryCallback(r.form))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64)) : (p(), w(G, {
          key: 1
        }, [v("div", Na, [v("div", Ca, [v("img", {
          src: e(se)(r.form.iconFileKey),
          alt: "Jetton logo",
          width: "80",
          height: "80"
        }, null, 8, Oa)]), v("div", La, [l[2] || (l[2] = v("div", {
          class: "dot"
        }, null, -1)), v("div", ja, $(("t" in r ? r.t : e(k))("memepad.new.step_launch.title")), 1)]), v("div", Da, $(("t" in r ? r.t : e(k))("memepad.new.step_launch.subtitle")), 1)]), e(f) === "ROCKET" ? (p(), w("div", Ba, [A(x, {
          name: "animations/Rocket",
          size: 348
        })])) : O("", !0), A(c, null, {
          default: L(() => [v("div", qa, [v("div", Ka, [v("div", Ga, $(("t" in r ? r.t : e(k))("cabal_arena_banner.title")), 1), v("div", Wa, $(("t" in r ? r.t : e(k))("cabal_arena_banner.subtitle")), 1), v("button", {
            type: "button",
            class: "reset",
            onClick: g
          }, $(("t" in r ? r.t : e(k))("cabal_arena_banner.btn_label")), 1), l[3] || (l[3] = v("img", {
            src: _t
          }, null, -1))]), A(P, {
            fill: "",
            label: ("t" in r ? r.t : e(k))("base.got_it"),
            size: e(H).LARGE,
            onClick: l[1] || (l[1] = R => e(n).push({
              name: "memepad"
            }))
          }, null, 8, ["label", "size"])])]),
          _: 1
        })], 64))])
      }
    }
  }),
  Ha = U(Ja, [
    ["__scopeId", "data-v-01bce8e1"]
  ]),
  Qa = {
    class: "memepad-new"
  },
  Za = T({
    __name: "New",
    props: {
      tonUsdRate: {},
      retryPayload: {},
      jettonManagement: {},
      bclData: {}
    },
    setup(m) {
      const s = m,
        n = Ae(),
        _ = me(),
        f = Le(),
        t = ke(),
        i = I();
      je().getReferralToken();
      const a = s.jettonManagement.getWaitForCreateStatus(),
        u = I(s.retryPayload ? Pt(s.retryPayload) : {
          step: 1,
          step1: de.step1(),
          step2: de.step2(),
          step3: de.step3()
        });
      (() => {
        s.retryPayload ? n.memepad.memepadJettonRetry() : n.memepad.memepadJettonStepInfo()
      })();
      const r = (o, d) => {
          const F = {
            step: 2,
            step1: d,
            step2: o.step2,
            step3: o.step3
          };
          u.value = F, n.memepad.memepadJettonStepPersonalise()
        },
        l = (o, d) => {
          const F = {
            step: 3,
            step1: o.step1,
            step2: d,
            step3: o.step3
          };
          u.value = F, n.memepad.memepadJettonStepShare()
        },
        b = (o, d) => {
          const F = {
            step: 4,
            step1: o.step1,
            step2: o.step2,
            step3: d
          };
          u.value = F, n.memepad.memepadJettonStepOverview()
        },
        h = (o, d) => {
          u.value = {
            ...o,
            step3: d
          }
        },
        P = o => {
          const d = {
            step: 5,
            step1: o.step1,
            step2: o.step2,
            step3: o.step3
          };
          u.value = d
        };
      gt().initHandler(() => {
        const o = u.value;
        switch (o.step) {
          case 1:
            me().push({
              name: "memepad"
            });
            break;
          case 2:
            u.value = {
              ...o,
              step: 1
            };
            break;
          case 3:
          case 4:
            u.value = {
              ...o,
              step: o.step - 1
            };
            break;
          case 5:
            return;
          default:
            throw ye("Invalid step")
        }
      }, "memepad-new");
      let c = [];
      const x = o => {
          c.push({
            payload: o
          }), c = c.slice(-3), c.length === 3 && c.every(F => JSON.stringify(F.payload) === JSON.stringify(c[0].payload)) && t.disconnect()
        },
        R = async o => {
          const d = await s.jettonManagement.createJetton(o);
          return ne(d) ? ((async () => {
            const {
              launchTransactionHash: F,
              queryId: y
            } = d.data;
            n.memepad.memepadJettonStartLaunch({
              jettonId: y
            }), await bt(3e4);
            const S = await a.exec({
              launchTransactionHash: F,
              queryId: y
            });
            S ? n.memepad.memepadJettonEndLaunch({
              status: "success",
              purchaseAmount: o.share,
              jettonAddress: S.address,
              jettonShortname: S.shortname,
              jettonId: y
            }) : n.memepad.memepadJettonEndLaunch({
              status: "failed",
              purchaseAmount: o.share
            }), i.value ? S ? (await i.value.runSuccess(), await _.push({
              name: "memepad-jetton-shortname",
              params: {
                shortname: S.shortname
              }
            })) : i.value.runError() : (S ? n.memepad.memepadJettonLaunchShowNotification({
              status: "success",
              jettonAddress: S.address,
              jettonShortname: S.shortname,
              jettonId: y
            }) : n.memepad.memepadJettonLaunchShowNotification({
              status: "failed"
            }), yt().name !== "game" && (S ? f.showSuccessSheet(o, S.shortname) : f.showErrorSheet(o)))
          })(), !0) : (d.extra && d.extra instanceof Error && d.extra instanceof ht && n.memepad.memepadJettonLaunchWalletUiError(), x(o), !1)
        };
      return (o, d) => {
        const F = Ht,
          y = gn,
          S = Qn,
          C = sa,
          V = xa,
          N = Ha;
        return p(), w("div", Qa, [e(u).step !== 5 ? (p(), M(F, {
          key: 0,
          step: e(u).step,
          "count-steps": 4
        }, null, 8, ["step"])) : O("", !0), e(u).step === 1 ? (p(), M(y, {
          key: 1,
          state: e(u),
          onContinue: d[0] || (d[0] = E => r(e(u), E))
        }, null, 8, ["state"])) : O("", !0), e(u).step === 2 ? (p(), M(S, {
          key: 2,
          state: e(u),
          onContinue: d[1] || (d[1] = E => l(e(u), E))
        }, null, 8, ["state"])) : O("", !0), e(u).step === 3 ? (p(), M(C, {
          key: 3,
          state: e(u),
          "jetton-management": s.jettonManagement,
          "bcl-data": o.bclData,
          onContinue: d[2] || (d[2] = E => b(e(u), E)),
          onUpdate: d[3] || (d[3] = E => h(e(u), E))
        }, null, 8, ["state", "jetton-management", "bcl-data"])) : O("", !0), e(u).step === 4 ? (p(), M(V, {
          key: 4,
          form: e(xe)(e(u)),
          "jetton-management": s.jettonManagement,
          "ton-usd-rate": o.tonUsdRate,
          "launch-callback": R,
          onContinue: d[4] || (d[4] = E => P(e(u)))
        }, null, 8, ["form", "jetton-management", "ton-usd-rate"])) : O("", !0), e(u).step === 5 ? (p(), M(N, {
          key: 5,
          ref_key: "stepLaunchApi",
          ref: i,
          form: e(xe)(e(u)),
          "retry-callback": e(f).retry
        }, null, 8, ["form", "retry-callback"])) : O("", !0)])
      }
    }
  }),
  Ya = U(Za, [
    ["__scopeId", "data-v-7a28b46a"]
  ]),
  Xa = {
    class: "memepad-new-page page"
  },
  eo = T({
    __name: "new",
    setup(m) {
      const {
        popRetryPayload: s
      } = Le(), {
        memepadManagementSdk: n,
        bclData: _
      } = jt(), {
        tonUsdRate: f
      } = wt(), t = Ae();
      return (() => {
        const a = kt("memepadNewFrom", $e) ?? $e.NA;
        Dt(), je().getReferralToken(), t.memepad.memepadJettonStart({
          source: a
        })
      })(), (a, u) => {
        const g = Ya,
          r = Lt;
        return p(), w("div", Xa, [e(n) && e(_) ? (p(), M(g, {
          key: 0,
          "bcl-data": e(_),
          "ton-usd-rate": e(f),
          "retry-payload": e(s)(),
          "jetton-management": e(n)
        }, null, 8, ["bcl-data", "ton-usd-rate", "retry-payload", "jetton-management"])) : (p(), M(r, {
          key: 1
        }))])
      }
    }
  }),
  bo = U(eo, [
    ["__scopeId", "data-v-a8e1a3f4"]
  ]);
export {
  bo as
  default
};