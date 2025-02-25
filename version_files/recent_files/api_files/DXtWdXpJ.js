import {
  bK as We,
  d as R,
  o as p,
  c as w,
  a as b,
  ax as be,
  f as U,
  j,
  V as ye,
  z as A,
  t as x,
  e,
  ao as W,
  K as I,
  aU as se,
  bL as pe,
  G as M,
  a$ as Ie,
  bM as Re,
  D as O,
  b as k,
  bN as z,
  bO as ze,
  b0 as Ue,
  an as J,
  ak as Je,
  aF as we,
  bP as He,
  w as Te,
  bQ as Qe,
  n as Ve,
  bR as Ze,
  bS as ae,
  F as G,
  q as Q,
  H as L,
  bm as Ae,
  ae as Fe,
  aA as Ye,
  bT as Xe,
  p as oe,
  U as H,
  x as Z,
  _ as Y,
  bU as et,
  bV as tt,
  bW as nt,
  bc as Ee,
  aZ as at,
  a9 as ot,
  bX as st,
  R as K,
  P as Ne,
  b3 as ke,
  E as te,
  aT as ce,
  bY as lt,
  bA as rt,
  a7 as it,
  Z as Ce,
  a1 as ne,
  ab as ut,
  bD as ct,
  bE as dt,
  B as pt,
  ac as me,
  T as mt,
  ad as _t,
  $ as Oe,
  bZ as Le,
  be as je,
  O as ft,
  b_ as vt,
  bo as gt,
  b8 as ht,
  aM as bt,
  au as Pe
} from "./HMtIIKN9.js";
import {
  K as De
} from "./DxP1Ye5m.js";
import {
  _ as yt,
  a as wt
} from "./DkcNUprX.js";
import {
  _ as le
} from "./BnMR0Hvn.js";
import {
  g as kt,
  _ as St,
  r as At,
  a as de,
  b as xe
} from "./W09PiuQT.js";
import {
  _ as Ft
} from "./D0-ungZA.js";
import {
  d as Et,
  _ as Pt,
  a as xt,
  b as Be,
  e as $t,
  f as Mt,
  g as It,
  c as Rt
} from "./DrQxZGUr.js";
import {
  _ as Ut
} from "./BezWsQga.js";
import {
  _ as Tt
} from "./BDsGXAn_.js";
import {
  _ as Vt
} from "./Bz1irRkk.js";
import {
  _ as Nt
} from "./CcZX2ME1.js";
import {
  u as Ct,
  a as Ot
} from "./DBB-sfjw.js";
import {
  c as Lt
} from "./CjrCyY9h.js";
import "./Dxy8DVrN.js";
import "./l2ZOA4Wy.js";
import "./DokjUYsk.js";
import "./CxEm-GmM.js";
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
var Se = _e.exports,
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
var qe = fe.exports,
  ve = {
    exports: {}
  };
(function(m, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = r;
  var a = _(Se),
    c = _(qe);

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
var jt = ve.exports,
  ge = {
    exports: {}
  };
(function(m, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = f;
  var a = c(Se);

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
var Dt = ge.exports,
  he = {
    exports: {}
  };
(function(m, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = N;
  var a = r(Se),
    c = r(jt),
    _ = r(Dt),
    t = r(qe);

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
      var F = Object.prototype.toString.call(s).slice(8, -1);
      if (F === "Object" && s.constructor && (F = s.constructor.name), F === "Map" || F === "Set") return Array.from(s);
      if (F === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)) return g(s, d)
    }
  }

  function g(s, d) {
    (d == null || d > s.length) && (d = s.length);
    for (var F = 0, y = new Array(d); F < d; F++) y[F] = s[F];
    return y
  }

  function i(s, d) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(s)))) {
      var F = [],
        y = !0,
        S = !1,
        C = void 0;
      try {
        for (var T = s[Symbol.iterator](), V; !(y = (V = T.next()).done) && (F.push(V.value), !(d && F.length === d)); y = !0);
      } catch (E) {
        S = !0, C = E
      } finally {
        try {
          !y && T.return != null && T.return()
        } finally {
          if (S) throw C
        }
      }
      return F
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

  function $(s, d) {
    for (var F = 0; F < d.length; F++) {
      var y = d[F];
      if (s === y || u(y) && y.test(s)) return !0
    }
    return !1
  }

  function N(s, d) {
    if ((0, a.default)(s), !s || /[\s<>]/.test(s) || s.indexOf("mailto:") === 0 || (d = (0, t.default)(d, v), d.validate_length && s.length >= 2083) || !d.allow_fragments && s.includes("#") || !d.allow_query_components && (s.includes("?") || s.includes("&"))) return !1;
    var F, y, S, C, T, V, E, D;
    if (E = s.split("#"), s = E.shift(), E = s.split("?"), s = E.shift(), E = s.split("://"), E.length > 1) {
      if (F = E.shift().toLowerCase(), d.require_valid_protocol && d.protocols.indexOf(F) === -1) return !1
    } else {
      if (d.require_protocol) return !1;
      if (s.slice(0, 2) === "//") {
        if (!d.allow_protocol_relative_urls) return !1;
        E[0] = s.slice(2)
      }
    }
    if (s = E.join("://"), s === "") return !1;
    if (E = s.split("/"), s = E.shift(), s === "" && !d.require_host) return !0;
    if (E = s.split("@"), E.length > 1) {
      if (d.disallow_auth || E[0] === "" || (y = E.shift(), y.indexOf(":") >= 0 && y.split(":").length > 2)) return !1;
      var X = y.split(":"),
        ee = o(X, 2),
        ie = ee[0],
        ue = ee[1];
      if (ie === "" && ue === "") return !1
    }
    C = E.join("@"), V = null, D = null;
    var B = C.match(P);
    if (B ? (S = "", D = B[1], V = B[2] || null) : (E = C.split(":"), S = E.shift(), E.length && (V = E.join(":"))), V !== null && V.length > 0) {
      if (T = parseInt(V, 10), !/^[0-9]+$/.test(V) || T <= 0 || T > 65535) return !1
    } else if (d.require_port) return !1;
    return d.host_whitelist ? $(S, d.host_whitelist) : S === "" && !d.require_host ? !0 : !(!(0, _.default)(S) && !(0, c.default)(S, d) && (!D || !(0, _.default)(D, 6)) || (S = S || D, d.host_blacklist && $(S, d.host_blacklist)))
  }
  m.exports = l.default, m.exports.default = l.default
})(he, he.exports);
var Bt = he.exports;
const qt = We(Bt);

function Kt(m, l) {
  return typeof m == "string" && qt(m, l)
}
const Gt = {
    class: "memepad-new-progress"
  },
  Wt = R({
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
      return (l, a) => (p(), w("div", Gt, [b("div", {
        class: "track",
        style: be({
          width: `${m.step/m.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  zt = U(Wt, [
    ["__scopeId", "data-v-2261863a"]
  ]),
  Jt = {
    class: "memepad-new-step-heading"
  },
  Ht = {
    class: "step"
  },
  Qt = {
    class: "label"
  },
  Zt = R({
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
              throw l.step, ye("Invalid step")
          }
        });
      return (c, _) => (p(), w("div", Jt, [b("div", Ht, x(e(a).step), 1), b("div", Qt, x(e(a).label), 1)]))
    }
  }),
  re = U(Zt, [
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
    src: ze,
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
  $e = 10,
  on = R({
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
        a = I(),
        c = () => {
          var r;
          return (r = a.value) == null ? void 0 : r.triggerFileUpload()
        },
        _ = I(),
        t = j(() => {
          if (l.value) return se(l.value)
        });
      return (r, o) => {
        var g;
        const n = Ue,
          f = De;
        return p(), w("div", Yt, [b("div", Xt, [e(t) ? (p(), w("div", {
          key: 0,
          class: "image is-uploaded",
          style: be({
            backgroundImage: `url(${e(t)})`
          })
        }, null, 4)) : (p(), w("div", {
          key: 1,
          class: "image wait-upload",
          onClick: o[0] || (o[0] = i => c())
        }, [((g = e(_)) == null ? void 0 : g.status) === e(pe).UPLOADING ? (p(), M(n, {
          key: 0,
          type: e(Ie).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (p(), w("img", en))])), b("div", tn, [b("div", nn, x(("t" in r ? r.t : e(A))("memepad.new.step_1.field_icon.label")), 1), b("div", an, x(("t" in r ? r.t : e(A))("memepad.new.step_1.field_icon.description", {
          maxUploadSize: String($e)
        })), 1)]), l.value ? (p(), w("div", {
          key: 2,
          class: "delete",
          onClick: o[1] || (o[1] = i => l.value = void 0)
        }, o[4] || (o[4] = [b("img", {
          src: Re,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))) : O("", !0)]), k(f, {
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
  sn = U(on, [
    ["__scopeId", "data-v-d13d4287"]
  ]),
  ln = ["for"],
  rn = {
    key: 0,
    class: "error-caption"
  },
  un = ["id", "placeholder"],
  cn = R({
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
        _ = Je(),
        t = W(m, "modelValue"),
        r = I(),
        o = I(!1),
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
        i = v, r.value.style.height = `${v}px`, P !== 0 && Ze(() => window.document.body.scrollBy(0, P))
      }), (v, P) => {
        const u = yt;
        return p(), w("div", {
          class: Ve(["kit-textarea", e(g)])
        }, [v.label ? (p(), w("label", {
          key: 0,
          for: e(_)
        }, [b("span", null, x(v.label), 1), v.errorCaption ? (p(), w("div", rn, [P[3] || (P[3] = b("img", {
          src: He,
          alt: "Warning icon"
        }, null, -1)), b("div", null, x(v.errorCaption), 1)])) : v.maxLength ? (p(), M(u, {
          key: 1,
          value: t.value,
          "max-length": v.maxLength
        }, null, 8, ["value", "max-length"])) : O("", !0)], 8, ln)) : O("", !0), Te(b("textarea", {
          id: e(_),
          ref_key: "textareaRef",
          ref: r,
          "onUpdate:modelValue": P[0] || (P[0] = $ => t.value = $),
          placeholder: v.placeholder,
          onChange: P[1] || (P[1] = $ => v.$emit("change")),
          onInput: P[2] || (P[2] = $ => v.$emit("input")),
          onFocus: n,
          onBlur: f
        }, null, 40, un), [
          [Qe, t.value]
        ])], 2)
      }
    }
  }),
  dn = U(cn, [
    ["__scopeId", "data-v-fbb8bb63"]
  ]);
var q = (m => (m.STRING = "STRING", m.TEXTAREA = "TEXTAREA", m))(q || {});
const pn = R({
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
          var v, P, u, $;
          const h = [];
          switch (i.type) {
            case q.STRING:
            case q.TEXTAREA: {
              if ((v = i.validators) != null && v.required && !i.value && h.push({
                  msg: "Required to continue",
                  isVisible: !0
                }), (P = i.validators) != null && P.maxLength) {
                const N = i.validators.maxLength.value - i.value.length;
                N < 0 && h.push({
                  msg: `${N*-1} over`,
                  isVisible: !1
                })
              }
              if (i.type === q.STRING && ((u = i.validators) != null && u.url)) {
                const N = i.validators.url.includePrefix && (($ = i.props) != null && $.prefix) ? `${i.props.prefix}${i.value}` : i.value;
                Kt(N) || h.push({
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
            const N = i.customValidator(i.value);
            N && h.push({
              msg: N,
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
        const v = wt,
          P = dn;
        return p(), w("form", {
          class: "kit-form",
          novalidate: "",
          onSubmit: h[0] || (h[0] = Ye(u => t(), ["prevent"]))
        }, [(p(!0), w(G, null, Q(c.value, u => {
          var $, N, s, d, F, y, S, C;
          return p(), w("div", {
            key: u.key,
            class: "field"
          }, [u.type === e(q).STRING ? (p(), M(v, Fe({
            key: 0,
            modelValue: u.value,
            "onUpdate:modelValue": T => u.value = T,
            ref_for: !0
          }, u.props, {
            "error-caption": f(u),
            "is-error": g(u),
            "max-length": (N = ($ = u.validators) == null ? void 0 : $.maxLength) == null ? void 0 : N.value,
            class: "input",
            onChange: T => r(u),
            onFocus: (s = u.eventHandlers) == null ? void 0 : s.onFocus,
            onBlur: (d = u.eventHandlers) == null ? void 0 : d.onBlur
          }), {
            label: L(() => [Ae(i.$slots, `${u.key}-label`, {}, void 0, !0)]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : O("", !0), u.type === e(q).TEXTAREA ? (p(), M(P, Fe({
            key: 1,
            modelValue: u.value,
            "onUpdate:modelValue": T => u.value = T,
            ref_for: !0
          }, u.props, {
            "error-caption": f(u),
            "is-error": g(u),
            "max-length": (y = (F = u.validators) == null ? void 0 : F.maxLength) == null ? void 0 : y.value,
            class: "textarea",
            onChange: T => r(u),
            onFocus: (S = u.eventHandlers) == null ? void 0 : S.onFocus,
            onBlur: (C = u.eventHandlers) == null ? void 0 : C.onBlur
          }), null, 16, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : O("", !0), Ae(i.$slots, `${u.key}-after`, {}, void 0, !0)])
        }), 128))], 32)
      }
    }
  }),
  Ke = U(pn, [
    ["__scopeId", "data-v-5c8581ee"]
  ]),
  mn = {
    class: "memepad-new-step-1"
  },
  _n = R({
    __name: "1",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(m, {
      emit: l
    }) {
      const c = I({
          ...m.state.step1
        }),
        _ = l,
        t = I([{
          key: "name",
          type: q.STRING,
          value: j({
            get: () => c.value.name ?? "",
            set: f => c.value.name = f ?? ""
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
            get: () => c.value.ticker ?? "",
            set: f => c.value.ticker = f ?? ""
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
          customValidator: f => {
            if (!f.match(/^[A-Z0-9]+$/)) return A("memepad.new.step_1.field_ticker.custom_validator_error")
          }
        }, {
          key: "description",
          type: q.TEXTAREA,
          value: j({
            get: () => c.value.description ?? "",
            set: f => c.value.description = f ?? ""
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
        r = I(),
        o = j(() => {
          var f;
          return ((f = r.value) == null ? void 0 : f.isFormValid) && !!c.value.iconFileKey
        }),
        n = () => _("continue", c.value);
      return (f, g) => {
        const i = re,
          h = sn,
          v = Ke,
          P = Z,
          u = le;
        return p(), w("div", mn, [k(i, {
          step: 1
        }), k(h, {
          modelValue: e(c).iconFileKey,
          "onUpdate:modelValue": g[0] || (g[0] = $ => e(c).iconFileKey = $)
        }, null, 8, ["modelValue"]), k(v, {
          modelValue: e(t),
          "onUpdate:modelValue": g[1] || (g[1] = $ => oe(t) ? t.value = $ : null),
          onChannel: g[2] || (g[2] = $ => r.value = $)
        }, null, 8, ["modelValue"]), k(u, null, {
          default: L(() => [k(P, {
            label: ("t" in f ? f.t : e(A))("base.continue"),
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
  fn = U(_n, [
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
  yn = R({
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
        return p(), w("div", vn, [m.iconName ? (p(), M(c, {
          key: 0,
          name: m.iconName,
          class: "icon"
        }, null, 8, ["name"])) : O("", !0), b("div", gn, [b("span", hn, x(m.title), 1), m.isOptional ? (p(), w("span", bn, x(` ${("t"in l?l.t:e(A))("base.optional")}`), 1)) : O("", !0)])])
      }
    }
  }),
  Ge = U(yn, [
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
  En = R({
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
        a = I(),
        c = () => {
          var r;
          return (r = a.value) == null ? void 0 : r.triggerFileUpload()
        },
        _ = I(),
        t = j(() => {
          if (_.value && _.value.status === pe.UPLOADING) return _.value.localUrl;
          if (l.value) return se(l.value)
        });
      return (r, o) => {
        var i;
        const n = Ge,
          f = Ue,
          g = De;
        return p(), w("div", wn, [k(n, {
          title: ("t" in r ? r.t : e(A))("memepad.new.step_1.field_banner.label"),
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
          src: Re,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((i = e(_)) == null ? void 0 : i.status) === e(pe).UPLOADING ? (p(), w("div", kn, [k(f, {
          type: e(Ie).LIGHT,
          size: 16
        }, null, 8, ["type"]), b("div", Sn, x(("t" in r ? r.t : e(A))("memepad.new.step_1.field_banner.uploading")), 1)])) : (p(), w("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: o[1] || (o[1] = h => c())
        }, [o[6] || (o[6] = b("img", {
          src: et,
          alt: "Add"
        }, null, -1)), b("div", An, [b("div", Fn, x(("t" in r ? r.t : e(A))("memepad.new.step_1.field_banner.description", {
          maxUploadSize: String(Me)
        })), 1), o[5] || (o[5] = b("div", {
          class: "ratio"
        }, "361 × 119", -1))])])), k(g, {
          ref_key: "fileUploaderRef",
          ref: a,
          "hide-ui": "",
          "max-file-size-mb": Me,
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
  Pn = U(En, [
    ["__scopeId", "data-v-327e2cf8"]
  ]),
  xn = {
    class: "memepad-new-form-social-links-item"
  },
  $n = R({
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
        t = I([{
          type: q.STRING,
          key: a.meta.apiKey,
          value: j({
            get: () => _.value ?? "",
            set: o => _.value = o || void 0
          }),
          props: {
            placeholder: a.meta.placeholder,
            size: tt.COMPACT
          },
          validators: a.meta.skipUrlValidation ? {} : {
            url: {}
          }
        }]),
        r = I();
      return ae(() => {
        var o;
        return c("isValid", ((o = r.value) == null ? void 0 : o.isFormValid) ?? !1)
      }), (o, n) => {
        const f = Ge,
          g = Y,
          i = Ke;
        return p(), w("div", xn, [k(i, {
          modelValue: e(t),
          "onUpdate:modelValue": n[1] || (n[1] = h => oe(t) ? t.value = h : null),
          onChannel: n[2] || (n[2] = h => r.value = h)
        }, nt({
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
  Mn = U($n, [
    ["__scopeId", "data-v-e8eb736f"]
  ]),
  In = {
    class: "memepad-new-form-social-links"
  },
  Rn = {
    class: "inputs"
  },
  Un = {
    key: 0,
    class: "add-panel"
  },
  Tn = {
    class: "providers"
  },
  Vn = R({
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
      const a = kt(),
        c = W(m, "modelValue"),
        _ = l,
        t = I([{
          provider: Ee.TELEGRAM,
          isValid: !1,
          optional: !1
        }]),
        r = j(() => Object.values(Ee).filter(f => !t.value.find(g => g.provider === f))),
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
        const i = Mn,
          h = Y;
        return p(), w("div", In, [b("div", Rn, [k(at, {
          name: "list-shuffle-transition"
        }, {
          default: L(() => [(p(!0), w(G, null, Q(e(t), (v, P) => (p(), M(i, {
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
        })]), k(ot, {
          name: "appear-from-right-transition"
        }, {
          default: L(() => [e(r).length > 0 ? (p(), w("div", Un, [k(h, {
            name: "plus",
            class: "plus-icon"
          }), b("div", Tn, [(p(!0), w(G, null, Q(e(r), v => (p(), w("div", {
            key: v,
            class: "provider"
          }, [k(h, {
            name: e(a)[v].icon,
            class: "provider-icon",
            onClick: P => o(v)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : O("", !0)]),
          _: 1
        })])
      }
    }
  }),
  Nn = U(Vn, [
    ["__scopeId", "data-v-5d3fea7d"]
  ]),
  Cn = {
    class: "kit-switch"
  },
  On = R({
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
      return (a, c) => (p(), w("div", Cn, [Te(b("input", {
        "onUpdate:modelValue": c[0] || (c[0] = _ => l.value = _),
        type: "checkbox"
      }, null, 512), [
        [st, l.value]
      ])]))
    }
  }),
  Ln = U(On, [
    ["__scopeId", "data-v-e0ffb56d"]
  ]),
  jn = "data:image/webp;base64,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",
  Dn = {
    class: "memepad-new-form-nsfw"
  },
  Bn = {
    class: "setting"
  },
  qn = {
    class: "label"
  },
  Kn = R({
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
        const _ = Ln,
          t = Ft;
        return p(), w("div", Dn, [b("div", Bn, [b("div", qn, x(("t" in a ? a.t : e(A))("memepad.new.step_1.field_nsfw.label")), 1), k(_, {
          modelValue: l.value,
          "onUpdate:modelValue": c[0] || (c[0] = r => l.value = r)
        }, null, 8, ["modelValue"])]), k(t, {
          text: ("t" in a ? a.t : e(A))("memepad.new.step_1.field_nsfw.message"),
          image: e(jn),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }),
  Gn = U(Kn, [
    ["__scopeId", "data-v-cf4bf4c7"]
  ]),
  Wn = {
    class: "memepad-new-step-2"
  },
  zn = R({
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
        _ = I(!1),
        t = I({
          ...a.state.step2
        }),
        r = () => c("continue", t.value);
      return (o, n) => {
        const f = re,
          g = Pn,
          i = Nn,
          h = Gn,
          v = Z,
          P = le;
        return p(), w("div", Wn, [k(f, {
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
            label: ("t" in o ? o.t : e(A))("base.continue"),
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
  Jn = U(zn, [
    ["__scopeId", "data-v-2e24fde9"]
  ]),
  Hn = {
    class: "header"
  },
  Qn = {
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
  na = R({
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
        _ = I(),
        t = I(a.state.step3.overview ? {
          status: "loaded",
          share: a.state.step3.share ?? 0,
          overview: a.state.step3.overview
        } : {
          status: "idle",
          share: a.state.step3.share ?? 0
        }),
        r = y => it(y, {
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
        g = Ne(),
        i = ke(),
        h = () => Ce().success(A("memepad.jetton.new.error_alert"));
      i.onConnectError(h);
      const v = I(!1),
        P = j(() => {
          var y;
          return {
            jettonBalance: te(new K(0), a.state.step1.ticker),
            tonBalance: g.wallet.value.status === "connected" ? (y = g.wallet.value.balance) == null ? void 0 : y.tonBalance.balance : void 0
          }
        }),
        u = j(() => {
          var V;
          const y = (() => {
              var D;
              const E = g.wallet.value.status === "connected" ? (D = g.wallet.value.balance) == null ? void 0 : D.tonBalance.balance.value : void 0;
              return {
                value: E,
                label: E ? te(E, "TON").frontendWithSymbol : void 0
              }
            })(),
            S = {
              value: a.jettonManagement.fees.buyNetworkFee,
              label: `${A("memepad.jetton.fees_base")}: ${ce(a.jettonManagement.fees.buyNetworkFee)} TON`,
              details: [{
                label: `${A("memepad.jetton.fees_network")}: ${ce(a.jettonManagement.fees.buyNetworkFee)} TON`
              }, ...t.value.overview ? [{
                label: `${A("memepad.jetton.fees_platform")}: ${ce((V=t.value.overview)==null?void 0:V.platformFee)} TON`
              }] : []]
            },
            C = (() => {
              if ((y.value ? y.value.gte(S.value.plus(t.value.share)) : void 0) === !1) return {
                type: "NOT_ENOUGH_TON",
                message: A("memepad.jetton.not_enough_error", {
                  ticker: "TON"
                })
              };
              if (!new K(t.value.share).isZero() && new K(t.value.share).lt(1e-9)) return {
                type: "TOO_LOW_AMOUNT",
                message: A("memepad.new.share.error.too_low_amount")
              };
              if (a.bclData.tonForDexWithFees.lt(t.value.share)) return {
                type: "EXCEEDS_MAX_SUPPLY",
                message: A("memepad.new.share.error.exceeds_max_supply")
              }
            })(),
            T = (() => {
              if (t.value.status === "loading") return;
              if (C) return C.type === "EXCEEDS_MAX_SUPPLY" ? `${A("memepad.new.step_3.subtitle_of_supply",{percentAmount:">100%"})}` : C.type === "TOO_LOW_AMOUNT" ? `${A("memepad.new.step_3.subtitle_of_supply",{percentAmount:"<0.01%"})}` : "";
              if (!t.value.overview) {
                if (new K(t.value.share).isZero()) {
                  const D = te(new K(0), a.state.step1.ticker);
                  return A("memepad.new.step_3.subtitle", {
                    jettonsAmountWithSymbol: D.frontendWithSymbol,
                    percentAmount: "0"
                  })
                }
                return
              }
              const E = te(new K(t.value.overview.minReceive), a.state.step1.ticker);
              return t.value.overview ? A("memepad.new.step_3.subtitle", {
                jettonsAmountWithSymbol: E.frontendWithSymbol,
                percentAmount: lt(t.value.overview.jettonReceivePercent)
              }) : E.frontendWithSymbol
            })();
          return {
            tonBalance: y,
            showInfo: y.value !== void 0,
            fees: S,
            error: C,
            subtitle: T,
            loading: t.value.status === "loading" || v.value
          }
        }),
        $ = () => {
          var y;
          (y = _.value) == null || y.focusOnInput()
        },
        N = () => {
          u.value.error || d()
        },
        s = async () => {
          const y = new K(t.value.share),
            S = await a.jettonManagement.getJettonOverview(y.toNumber());
          y.eq(t.value.share) && ne(S) && (t.value = {
            status: "loaded",
            share: y.toNumber(),
            overview: S.data
          }, c("update", {
            share: y.toNumber(),
            overview: ne(S) ? S.data : void 0
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
          debouncedFunction: F
        } = ut(s, 400);
      return we(() => t.value.share, () => {
        t.value.status = "loading", F()
      }), (y, S) => {
        const C = re,
          T = Et,
          V = Ut,
          E = Pt,
          D = xt,
          X = Be,
          ee = Z,
          ie = $t,
          ue = Mt;
        return p(), M(ue, {
          class: "memepad-new-step-3"
        }, {
          top: L(() => [b("div", Hn, [k(C, {
            step: 3
          })])]),
          default: L(() => [b("div", Qn, [k(T, {
            ref_key: "actionControlsInputComp",
            ref: _,
            modelValue: e(n),
            "onUpdate:modelValue": S[0] || (S[0] = B => oe(n) ? n.value = B : null),
            postfix: "TON",
            modifier: r,
            onBlur: $
          }, null, 8, ["modelValue"]), b("div", Zn, [e(u).subtitle ? (p(), w("span", Yn, x(e(u).subtitle), 1)) : e(u).subtitle === void 0 ? (p(), M(V, {
            key: 1,
            class: "skeleton"
          })) : O("", !0)])])]),
          "bottom-action": L(() => {
            var B;
            return [b("div", Xn, [e(u).showInfo ? (p(), w("div", ea, [e(u).tonBalance.label && !e(u).loading ? (p(), M(E, {
              key: 0,
              balance: e(u).tonBalance.label
            }, null, 8, ["balance"])) : (p(), M(V, {
              key: 1,
              class: "skeleton"
            })), e(u).loading ? (p(), M(V, {
              key: 3,
              class: "skeleton"
            })) : (p(), M(D, {
              key: 2,
              details: e(u).fees.details,
              "total-label": e(u).fees.label,
              "error-message": (B = e(u).error) == null ? void 0 : B.message
            }, null, 8, ["details", "total-label", "error-message"]))])) : O("", !0), e(u).error && e(u).error.type === "NOT_ENOUGH_TON" ? (p(), M(X, {
              key: 1
            })) : (p(), M(ee, {
              key: 2,
              fill: "",
              size: e(H).LARGE,
              loading: e(u).loading,
              disabled: !e(u).loading && !!e(u).error,
              tertiary: "",
              onClick: N
            }, {
              default: L(() => [b("div", ta, x(("t" in y ? y.t : e(A))("memepad.new.step_3.next_btn")), 1)]),
              _: 1
            }, 8, ["size", "loading", "disabled"]))])]
          }),
          "bottom-helpers": L(() => [k(ie, {
            modelValue: e(f),
            "onUpdate:modelValue": S[1] || (S[1] = B => oe(f) ? f.value = B : null),
            tab: e(rt).BUY,
            balances: e(P)
          }, null, 8, ["modelValue", "tab", "balances"])]),
          _: 1
        })
      }
    }
  }),
  aa = U(na, [
    ["__scopeId", "data-v-11ede1e3"]
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
  ua = R({
    __name: "LogoTicker",
    props: {
      logoFileKey: {},
      ticker: {},
      name: {}
    },
    setup(m) {
      return (l, a) => (p(), w("div", oa, [b("img", {
        src: e(se)(l.logoFileKey),
        alt: "Jetton logo"
      }, null, 8, sa), b("div", la, [b("div", ra, x(l.ticker), 1), b("div", ia, x(l.name), 1)])]))
    }
  }),
  ca = U(ua, [
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
  ka = R({
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
          _ = Tt;
        return p(), w("div", da, [(p(!0), w(G, null, Q(l.details.sections, t => (p(), w("div", {
          key: t.title,
          class: "row"
        }, [b("div", pa, x(t.title), 1), b("div", ma, [k(_, null, {
          default: L(() => [k(c, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: L(() => [b("div", _a, [(p(!0), w(G, null, Q(t.details, r => (p(), w("span", {
            key: r.label,
            class: Ve({
              highlighted: r.highlight
            })
          }, x(r.label), 3))), 128))])]),
          _: 2
        }, 1024), b("span", fa, x(t.label), 1)])]))), 128)), l.details.totalSection ? (p(), w(G, {
          key: 0
        }, [a[0] || (a[0] = b("div", {
          class: "divider"
        }, null, -1)), b("div", va, [b("div", ga, x(l.details.totalSection.title), 1), l.notEnoughBalance ? (p(), w("div", ha, [k(c, {
          name: "circle-help",
          class: "icon"
        }), b("span", ba, x(("t" in l ? l.t : e(A))("memepad.jetton.not_enough_error", {
          ticker: "TON"
        })), 1)])) : (p(), w("div", ya, [b("span", wa, x(l.details.totalSection.label), 1)]))])], 64)) : O("", !0)])
      }
    }
  }),
  Sa = U(ka, [
    ["__scopeId", "data-v-cd02a0d6"]
  ]),
  Aa = {
    class: "memepad-new-step-overview"
  },
  Fa = {
    class: "button-wrapper"
  },
  Ea = R({
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
        _ = Ne(),
        t = ke(),
        r = () => Ce().success(A("memepad.jetton.new.error_alert"));
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
        g = I(!1),
        i = async () => {
          if (!f.value || g.value) return;
          g.value = !0, await a.launchCallback(a.form) ? c("continue") : r(), g.value = !1
        };
      return (h, v) => {
        const P = re,
          u = ca,
          $ = St,
          N = It,
          s = Sa,
          d = Be,
          F = Z,
          y = Rt,
          S = le;
        return p(), w("div", Aa, [k(P, {
          step: 4,
          class: "heading"
        }), k(u, {
          "logo-file-key": h.form.iconFileKey,
          ticker: h.form.ticker,
          name: h.form.name,
          class: "logo-ticker"
        }, null, 8, ["logo-file-key", "ticker", "name"]), k($, {
          "banner-file-key": h.form.bannerFileKey,
          class: "banner"
        }, null, 8, ["banner-file-key"]), k(N, ct(dt(e(o))), null, 16), k(S, null, {
          default: L(() => [k(s, {
            "with-share": !!h.form.share,
            details: e(n),
            "not-enough-balance": e(f) === !1
          }, null, 8, ["with-share", "details", "not-enough-balance"]), b("div", Fa, [k(y, null, {
            default: L(() => [e(f) ? (p(), M(F, {
              key: 1,
              label: ("t" in h ? h.t : e(A))("memepad.new.step_4.launch_btn"),
              fill: "",
              size: e(H).LARGE,
              type: e(pt).DROP,
              onClick: i
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
  Pa = U(Ea, [
    ["__scopeId", "data-v-c3aa5e11"]
  ]),
  xa = {
    class: "memepad-new-step-launch"
  },
  $a = {
    class: "inner"
  },
  Ma = {
    class: "icon-wrapper"
  },
  Ia = {
    class: "error-icon"
  },
  Ra = {
    class: "title"
  },
  Ua = {
    class: "subtitle"
  },
  Ta = {
    class: "inner"
  },
  Va = {
    class: "icon-wrapper"
  },
  Na = ["src"],
  Ca = {
    class: "title"
  },
  Oa = {
    class: "label"
  },
  La = {
    class: "subtitle"
  },
  ja = {
    key: 0,
    class: "rocket-wrapper"
  },
  Da = 3e3,
  Ba = R({
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
        c = I("LOADING"),
        _ = [],
        t = () => new Promise(n => {
          c.value = "ROCKET", _.push(setTimeout(() => {
            n(void 0)
          }, Da))
        }),
        r = () => {
          c.value = "ERROR"
        },
        o = () => {
          _.forEach(clearTimeout), c.value = "LOADING"
        };
      return mt(() => {
        o()
      }), l({
        runSuccess: t,
        runError: r
      }), (n, f) => {
        const g = Vt,
          i = Y,
          h = Z,
          v = le,
          P = _t;
        return p(), w("div", xa, [k(g), e(c) === "ERROR" ? (p(), w(G, {
          key: 0
        }, [b("div", $a, [b("div", Ma, [b("div", Ia, [k(i, {
          name: "warning",
          class: "icon"
        })])]), b("div", Ra, x(("t" in n ? n.t : e(A))("memepad.new.failed.title", {
          ticker: n.form.ticker
        })), 1), b("div", Ua, x(("t" in n ? n.t : e(A))("memepad.new.failed.subtitle")), 1)]), k(v, null, {
          default: L(() => [k(h, {
            fill: "",
            label: ("t" in n ? n.t : e(A))("memepad.new.retry_btn_label"),
            size: e(H).LARGE,
            onClick: f[0] || (f[0] = u => n.retryCallback(n.form))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64)) : (p(), w(G, {
          key: 1
        }, [b("div", Ta, [b("div", Va, [b("img", {
          src: e(se)(n.form.iconFileKey),
          alt: "Jetton logo",
          width: "80",
          height: "80"
        }, null, 8, Na)]), b("div", Ca, [f[2] || (f[2] = b("div", {
          class: "dot"
        }, null, -1)), b("div", Oa, x(("t" in n ? n.t : e(A))("memepad.new.step_launch.title")), 1)]), b("div", La, x(("t" in n ? n.t : e(A))("memepad.new.step_launch.subtitle")), 1)]), e(c) === "ROCKET" ? (p(), w("div", ja, [k(P, {
          name: "animations/Rocket",
          size: 348
        })])) : O("", !0), k(v, null, {
          default: L(() => [k(h, {
            fill: "",
            label: ("t" in n ? n.t : e(A))("base.got_it"),
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
  qa = U(Ba, [
    ["__scopeId", "data-v-906459a1"]
  ]),
  Ka = {
    class: "memepad-new"
  },
  Ga = R({
    __name: "New",
    props: {
      tonUsdRate: {},
      retryPayload: {},
      jettonManagement: {},
      bclData: {}
    },
    setup(m) {
      const l = m,
        a = Oe(),
        c = me(),
        _ = Le(),
        t = ke(),
        r = I();
      je().getReferralToken();
      const o = l.jettonManagement.getWaitForCreateStatus(),
        n = I(l.retryPayload ? At(l.retryPayload) : {
          step: 1,
          step1: de.step1(),
          step2: de.step2(),
          step3: de.step3()
        });
      (() => {
        l.retryPayload ? a.memepad.memepadJettonRetry() : a.memepad.memepadJettonStepInfo()
      })();
      const g = (s, d) => {
          const F = {
            step: 2,
            step1: d,
            step2: s.step2,
            step3: s.step3
          };
          n.value = F, a.memepad.memepadJettonStepPersonalise()
        },
        i = (s, d) => {
          const F = {
            step: 3,
            step1: s.step1,
            step2: d,
            step3: s.step3
          };
          n.value = F, a.memepad.memepadJettonStepShare()
        },
        h = (s, d) => {
          const F = {
            step: 4,
            step1: s.step1,
            step2: s.step2,
            step3: d
          };
          n.value = F, a.memepad.memepadJettonStepOverview()
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
      ft().initHandler(() => {
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
      const $ = s => {
          u.push({
            payload: s
          }), u = u.slice(-3), u.length === 3 && u.every(F => JSON.stringify(F.payload) === JSON.stringify(u[0].payload)) && t.disconnect()
        },
        N = async s => {
          const d = await l.jettonManagement.createJetton(s);
          return ne(d) ? ((async () => {
            const {
              launchTransactionHash: F,
              queryId: y
            } = d.data;
            a.memepad.memepadJettonStartLaunch({
              jettonId: y
            }), await gt(3e4);
            const S = await o.exec({
              launchTransactionHash: F,
              queryId: y
            });
            S ? a.memepad.memepadJettonEndLaunch({
              status: "success",
              purchaseAmount: s.share,
              jettonAddress: S.address,
              jettonShortname: S.shortname,
              jettonId: y
            }) : a.memepad.memepadJettonEndLaunch({
              status: "failed",
              purchaseAmount: s.share
            }), r.value ? S ? (await r.value.runSuccess(), await c.push({
              name: "memepad-jetton-shortname",
              params: {
                shortname: S.shortname
              }
            })) : r.value.runError() : (S ? a.memepad.memepadJettonLaunchShowNotification({
              status: "success",
              jettonAddress: S.address,
              jettonShortname: S.shortname,
              jettonId: y
            }) : a.memepad.memepadJettonLaunchShowNotification({
              status: "failed"
            }), ht().name !== "game" && (S ? _.showSuccessSheet(s, S.shortname) : _.showErrorSheet(s)))
          })(), !0) : (d.extra && d.extra instanceof Error && d.extra instanceof vt && a.memepad.memepadJettonLaunchWalletUiError(), $(s), !1)
        };
      return (s, d) => {
        const F = zt,
          y = fn,
          S = Jn,
          C = aa,
          T = Pa,
          V = qa;
        return p(), w("div", Ka, [e(n).step !== 5 ? (p(), M(F, {
          key: 0,
          step: e(n).step,
          "count-steps": 4
        }, null, 8, ["step"])) : O("", !0), e(n).step === 1 ? (p(), M(y, {
          key: 1,
          state: e(n),
          onContinue: d[0] || (d[0] = E => g(e(n), E))
        }, null, 8, ["state"])) : O("", !0), e(n).step === 2 ? (p(), M(S, {
          key: 2,
          state: e(n),
          onContinue: d[1] || (d[1] = E => i(e(n), E))
        }, null, 8, ["state"])) : O("", !0), e(n).step === 3 ? (p(), M(C, {
          key: 3,
          state: e(n),
          "jetton-management": l.jettonManagement,
          "bcl-data": s.bclData,
          onContinue: d[2] || (d[2] = E => h(e(n), E)),
          onUpdate: d[3] || (d[3] = E => v(e(n), E))
        }, null, 8, ["state", "jetton-management", "bcl-data"])) : O("", !0), e(n).step === 4 ? (p(), M(T, {
          key: 4,
          form: e(xe)(e(n)),
          "jetton-management": l.jettonManagement,
          "ton-usd-rate": s.tonUsdRate,
          "launch-callback": N,
          onContinue: d[4] || (d[4] = E => P(e(n)))
        }, null, 8, ["form", "jetton-management", "ton-usd-rate"])) : O("", !0), e(n).step === 5 ? (p(), M(V, {
          key: 5,
          ref_key: "stepLaunchApi",
          ref: r,
          form: e(xe)(e(n)),
          "retry-callback": e(_).retry
        }, null, 8, ["form", "retry-callback"])) : O("", !0)])
      }
    }
  }),
  Wa = U(Ga, [
    ["__scopeId", "data-v-7a28b46a"]
  ]),
  za = {
    class: "memepad-new-page page"
  },
  Ja = R({
    __name: "new",
    setup(m) {
      const {
        popRetryPayload: l
      } = Le(), {
        memepadManagementSdk: a,
        bclData: c
      } = Ct(), {
        tonUsdRate: _
      } = Ot(), t = Oe();
      return (() => {
        const o = bt("memepadNewFrom", Pe) ?? Pe.NA;
        Lt(), je().getReferralToken(), t.memepad.memepadJettonStart({
          source: o
        })
      })(), (o, n) => {
        const f = Wa,
          g = Nt;
        return p(), w("div", za, [e(a) && e(c) ? (p(), M(f, {
          key: 0,
          "bcl-data": e(c),
          "ton-usd-rate": e(_),
          "retry-payload": e(l)(),
          "jetton-management": e(a)
        }, null, 8, ["bcl-data", "ton-usd-rate", "retry-payload", "jetton-management"])) : (p(), M(g, {
          key: 1
        }))])
      }
    }
  }),
  mo = U(Ja, [
    ["__scopeId", "data-v-a8e1a3f4"]
  ]);
export {
  mo as
  default
};