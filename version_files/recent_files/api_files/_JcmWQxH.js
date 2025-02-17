import {
  bK as We,
  d as N,
  o as d,
  c as w,
  a as f,
  ax as ye,
  f as T,
  j as C,
  V as we,
  z as A,
  t as I,
  e,
  ao as K,
  K as x,
  aT as se,
  bL as me,
  G as R,
  a_ as Ve,
  bM as Ue,
  D as L,
  b as k,
  bN as W,
  bO as Je,
  a$ as Ne,
  an as J,
  ak as Qe,
  aF as ke,
  bP as He,
  w as Te,
  bQ as Ze,
  n as Ce,
  bR as Ye,
  bS as ae,
  F as q,
  q as Z,
  H as O,
  bl as Pe,
  ae as Ee,
  aA as Xe,
  bT as et,
  p as oe,
  U as Q,
  x as Y,
  _ as X,
  bU as tt,
  bV as nt,
  bW as at,
  bb as $e,
  aY as ot,
  a9 as st,
  bX as lt,
  P as Le,
  b2 as Se,
  E as te,
  R as z,
  bY as rt,
  aS as de,
  bz as it,
  a7 as ut,
  Z as Oe,
  a1 as ne,
  ab as ct,
  bC as dt,
  bD as pt,
  B as mt,
  ac as _e,
  $ as Ae,
  T as _t,
  bZ as ft,
  h as vt,
  ad as gt,
  b_ as je,
  bd as Be,
  O as ht,
  b$ as bt,
  bn as yt,
  b7 as wt,
  bE as kt,
  aL as St,
  au as Ie
} from "./DconZeyr.js";
import {
  K as De
} from "./C9NjzZ-a.js";
import {
  _ as At,
  a as Ft
} from "./BKEXsMlP.js";
import {
  _ as le
} from "./WcRE45wb.js";
import {
  g as Pt,
  _ as Et,
  r as $t,
  a as pe,
  b as Me
} from "./BM345gvG.js";
import {
  _ as It
} from "./CKK-DVPf.js";
import {
  d as Mt,
  _ as Rt,
  a as xt,
  b as qe,
  e as Vt,
  f as Ut,
  g as Nt,
  c as Tt
} from "./TwIn8Iiq.js";
import {
  _ as Ct
} from "./DKELU81l.js";
import {
  _ as Lt
} from "./BCsqPlFp.js";
import {
  _ as Ot
} from "./Ddeprp_T.js";
import {
  _ as jt
} from "./QlkasoEw.js";
import {
  u as Bt
} from "./BlTYiauh.js";
import {
  c as Dt
} from "./CjrCyY9h.js";
import "./Dmeg96Mw.js";
import "./DLycv-Cy.js";
import "./6x6RsUL-.js";
import "./4OJewqWt.js";
var fe = {
  exports: {}
};
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = _;

  function n(m) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? n = function(r) {
      return typeof r
    } : n = function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, n(m)
  }

  function _(m) {
    var t = typeof m == "string" || m instanceof String;
    if (!t) {
      var r = n(m);
      throw m === null ? r = "null" : r === "object" && (r = m.constructor.name), new TypeError("Expected a string but received a ".concat(r))
    }
  }
  p.exports = s.default, p.exports.default = s.default
})(fe, fe.exports);
var Fe = fe.exports,
  ve = {
    exports: {}
  };
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = n;

  function n() {
    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      m = arguments.length > 1 ? arguments[1] : void 0;
    for (var t in m) typeof _[t] > "u" && (_[t] = m[t]);
    return _
  }
  p.exports = s.default, p.exports.default = s.default
})(ve, ve.exports);
var Ke = ve.exports,
  ge = {
    exports: {}
  };
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = r;
  var n = m(Fe),
    _ = m(Ke);

  function m(a) {
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

  function r(a, i) {
    (0, n.default)(a), i = (0, _.default)(i, t), i.allow_trailing_dot && a[a.length - 1] === "." && (a = a.substring(0, a.length - 1)), i.allow_wildcard === !0 && a.indexOf("*.") === 0 && (a = a.substring(2));
    var h = a.split("."),
      u = h[h.length - 1];
    return i.require_tld && (h.length < 2 || !i.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(u) || /\s/.test(u)) || !i.allow_numeric_tld && /^\d+$/.test(u) ? !1 : h.every(function(l) {
      return !(l.length > 63 && !i.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(l) || /[\uff01-\uff5e]/.test(l) || /^-|-$/.test(l) || !i.allow_underscores && /_/.test(l))
    })
  }
  p.exports = s.default, p.exports.default = s.default
})(ge, ge.exports);
var qt = ge.exports,
  he = {
    exports: {}
  };
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = h;
  var n = _(Fe);

  function _(u) {
    return u && u.__esModule ? u : {
      default: u
    }
  }
  var m = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    t = "(".concat(m, "[.]){3}").concat(m),
    r = new RegExp("^".concat(t, "$")),
    a = "(?:[0-9a-fA-F]{1,4})",
    i = new RegExp("^(" + "(?:".concat(a, ":){7}(?:").concat(a, "|:)|") + "(?:".concat(a, ":){6}(?:").concat(t, "|:").concat(a, "|:)|") + "(?:".concat(a, ":){5}(?::").concat(t, "|(:").concat(a, "){1,2}|:)|") + "(?:".concat(a, ":){4}(?:(:").concat(a, "){0,1}:").concat(t, "|(:").concat(a, "){1,3}|:)|") + "(?:".concat(a, ":){3}(?:(:").concat(a, "){0,2}:").concat(t, "|(:").concat(a, "){1,4}|:)|") + "(?:".concat(a, ":){2}(?:(:").concat(a, "){0,3}:").concat(t, "|(:").concat(a, "){1,5}|:)|") + "(?:".concat(a, ":){1}(?:(:").concat(a, "){0,4}:").concat(t, "|(:").concat(a, "){1,6}|:)|") + "(?::((?::".concat(a, "){0,5}:").concat(t, "|(?::").concat(a, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

  function h(u) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, n.default)(u), l = String(l), l ? l === "4" ? r.test(u) : l === "6" ? i.test(u) : !1 : h(u, 4) || h(u, 6)
  }
  p.exports = s.default, p.exports.default = s.default
})(he, he.exports);
var Kt = he.exports,
  be = {
    exports: {}
  };
(function(p, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = V;
  var n = r(Fe),
    _ = r(qt),
    m = r(Kt),
    t = r(Ke);

  function r(o) {
    return o && o.__esModule ? o : {
      default: o
    }
  }

  function a(o, c) {
    return y(o) || l(o, c) || h(o, c) || i()
  }

  function i() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }

  function h(o, c) {
    if (o) {
      if (typeof o == "string") return u(o, c);
      var S = Object.prototype.toString.call(o).slice(8, -1);
      if (S === "Object" && o.constructor && (S = o.constructor.name), S === "Map" || S === "Set") return Array.from(o);
      if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)) return u(o, c)
    }
  }

  function u(o, c) {
    (c == null || c > o.length) && (c = o.length);
    for (var S = 0, $ = new Array(c); S < c; S++) $[S] = o[S];
    return $
  }

  function l(o, c) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(o)))) {
      var S = [],
        $ = !0,
        v = !1,
        M = void 0;
      try {
        for (var U = o[Symbol.iterator](), j; !($ = (j = U.next()).done) && (S.push(j.value), !(c && S.length === c)); $ = !0);
      } catch (F) {
        v = !0, M = F
      } finally {
        try {
          !$ && U.return != null && U.return()
        } finally {
          if (v) throw M
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
    E = /^\[([^\]]+)\](?::([0-9]+))?$/;

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

  function V(o, c) {
    if ((0, n.default)(o), !o || /[\s<>]/.test(o) || o.indexOf("mailto:") === 0 || (c = (0, t.default)(c, b), c.validate_length && o.length >= 2083) || !c.allow_fragments && o.includes("#") || !c.allow_query_components && (o.includes("?") || o.includes("&"))) return !1;
    var S, $, v, M, U, j, F, B;
    if (F = o.split("#"), o = F.shift(), F = o.split("?"), o = F.shift(), F = o.split("://"), F.length > 1) {
      if (S = F.shift().toLowerCase(), c.require_valid_protocol && c.protocols.indexOf(S) === -1) return !1
    } else {
      if (c.require_protocol) return !1;
      if (o.slice(0, 2) === "//") {
        if (!c.allow_protocol_relative_urls) return !1;
        F[0] = o.slice(2)
      }
    }
    if (o = F.join("://"), o === "") return !1;
    if (F = o.split("/"), o = F.shift(), o === "" && !c.require_host) return !0;
    if (F = o.split("@"), F.length > 1) {
      if (c.disallow_auth || F[0] === "" || ($ = F.shift(), $.indexOf(":") >= 0 && $.split(":").length > 2)) return !1;
      var G = $.split(":"),
        ee = a(G, 2),
        ie = ee[0],
        ue = ee[1];
      if (ie === "" && ue === "") return !1
    }
    M = F.join("@"), j = null, B = null;
    var H = M.match(E);
    if (H ? (v = "", B = H[1], j = H[2] || null) : (F = M.split(":"), v = F.shift(), F.length && (j = F.join(":"))), j !== null && j.length > 0) {
      if (U = parseInt(j, 10), !/^[0-9]+$/.test(j) || U <= 0 || U > 65535) return !1
    } else if (c.require_port) return !1;
    return c.host_whitelist ? P(v, c.host_whitelist) : v === "" && !c.require_host ? !0 : !(!(0, m.default)(v) && !(0, _.default)(v, c) && (!B || !(0, m.default)(B, 6)) || (v = v || B, c.host_blacklist && P(v, c.host_blacklist)))
  }
  p.exports = s.default, p.exports.default = s.default
})(be, be.exports);
var Gt = be.exports;
const zt = We(Gt);

function Wt(p, s) {
  return typeof p == "string" && zt(p, s)
}
const Jt = {
    class: "memepad-new-progress"
  },
  Qt = N({
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
      return (s, n) => (d(), w("div", Jt, [f("div", {
        class: "track",
        style: ye({
          width: `${p.step/p.countSteps*100}%`
        })
      }, null, 4)]))
    }
  }),
  Ht = T(Qt, [
    ["__scopeId", "data-v-2261863a"]
  ]),
  Zt = {
    class: "memepad-new-step-heading"
  },
  Yt = {
    class: "step"
  },
  Xt = {
    class: "label"
  },
  en = N({
    __name: "NewStepHeading",
    props: {
      step: {
        type: Number,
        required: !0
      }
    },
    setup(p) {
      const s = p,
        n = C(() => {
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
              throw s.step, we("Invalid step")
          }
        });
      return (_, m) => (d(), w("div", Zt, [f("div", Yt, I(e(n).step), 1), f("div", Xt, I(e(n).label), 1)]))
    }
  }),
  re = T(en, [
    ["__scopeId", "data-v-44eadcb9"]
  ]),
  tn = {
    class: "memepad-new-form-avatar"
  },
  nn = {
    class: "compose"
  },
  an = {
    key: 1,
    src: Je,
    alt: "Plus icon"
  },
  on = {
    class: "content"
  },
  sn = {
    class: "name"
  },
  ln = {
    class: "disclaimer"
  },
  Re = 10,
  rn = N({
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
        n = x(),
        _ = () => {
          var r;
          return (r = n.value) == null ? void 0 : r.triggerFileUpload()
        },
        m = x(),
        t = C(() => {
          if (s.value) return se(s.value)
        });
      return (r, a) => {
        var u;
        const i = Ne,
          h = De;
        return d(), w("div", tn, [f("div", nn, [e(t) ? (d(), w("div", {
          key: 0,
          class: "image is-uploaded",
          style: ye({
            backgroundImage: `url(${e(t)})`
          })
        }, null, 4)) : (d(), w("div", {
          key: 1,
          class: "image wait-upload",
          onClick: a[0] || (a[0] = l => _())
        }, [((u = e(m)) == null ? void 0 : u.status) === e(me).UPLOADING ? (d(), R(i, {
          key: 0,
          type: e(Ve).LIGHT,
          size: 16
        }, null, 8, ["type"])) : (d(), w("img", an))])), f("div", on, [f("div", sn, I(("t" in r ? r.t : e(A))("memepad.new.step_1.field_icon.label")), 1), f("div", ln, I(("t" in r ? r.t : e(A))("memepad.new.step_1.field_icon.description", {
          maxUploadSize: String(Re)
        })), 1)]), s.value ? (d(), w("div", {
          key: 2,
          class: "delete",
          onClick: a[1] || (a[1] = l => s.value = void 0)
        }, a[4] || (a[4] = [f("img", {
          src: Ue,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))) : L("", !0)]), k(h, {
          ref_key: "fileUploaderRef",
          ref: n,
          "hide-ui": "",
          "max-file-size-mb": Re,
          accept: [e(W).JPEG, e(W).PNG, e(W).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 1,
            borderRadius: 999
          },
          "onUpdate:progress": a[2] || (a[2] = l => m.value = l),
          onUploaded: a[3] || (a[3] = l => s.value = l.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  un = T(rn, [
    ["__scopeId", "data-v-d13d4287"]
  ]),
  cn = ["for"],
  dn = {
    key: 0,
    class: "error-caption"
  },
  pn = ["id", "placeholder"],
  mn = N({
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
    setup(p, {
      emit: s
    }) {
      const n = p,
        _ = s,
        m = Qe(),
        t = K(p, "modelValue"),
        r = x(),
        a = x(!1),
        i = () => {
          a.value = !0, _("focus", r.value)
        },
        h = () => {
          a.value = !1, _("blur", r.value)
        },
        u = C(() => {
          const b = [];
          return (n.isError || n.errorCaption) && b.push("is-error"), b
        });
      let l;
      return ke(t, () => {
        if (!r.value) return;
        r.value.style.height = "auto";
        const b = r.value.scrollHeight,
          E = l !== void 0 ? b - l : 0;
        l = b, r.value.style.height = `${b}px`, E !== 0 && Ye(() => window.document.body.scrollBy(0, E))
      }), (b, E) => {
        const g = At;
        return d(), w("div", {
          class: Ce(["kit-textarea", e(u)])
        }, [b.label ? (d(), w("label", {
          key: 0,
          for: e(m)
        }, [f("span", null, I(b.label), 1), b.errorCaption ? (d(), w("div", dn, [E[3] || (E[3] = f("img", {
          src: He,
          alt: "Warning icon"
        }, null, -1)), f("div", null, I(b.errorCaption), 1)])) : b.maxLength ? (d(), R(g, {
          key: 1,
          value: t.value,
          "max-length": b.maxLength
        }, null, 8, ["value", "max-length"])) : L("", !0)], 8, cn)) : L("", !0), Te(f("textarea", {
          id: e(m),
          ref_key: "textareaRef",
          ref: r,
          "onUpdate:modelValue": E[0] || (E[0] = P => t.value = P),
          placeholder: b.placeholder,
          onChange: E[1] || (E[1] = P => b.$emit("change")),
          onInput: E[2] || (E[2] = P => b.$emit("input")),
          onFocus: i,
          onBlur: h
        }, null, 40, pn), [
          [Ze, t.value]
        ])], 2)
      }
    }
  }),
  _n = T(mn, [
    ["__scopeId", "data-v-fbb8bb63"]
  ]);
var D = (p => (p.STRING = "STRING", p.TEXTAREA = "TEXTAREA", p))(D || {});
const fn = N({
    __name: "KitForm",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: J(["channel"], ["update:modelValue"]),
    setup(p, {
      emit: s
    }) {
      const n = s,
        _ = K(p, "modelValue"),
        m = l => {
          l._ctx || (l._ctx = {
            initialValue: l.value,
            errors: []
          })
        };
      ke(_, () => _.value.forEach(m), {
        immediate: !0
      });
      const t = () => {},
        r = l => l._ctx.errors = i(l),
        a = C(() => _.value.every(l => i(l).length === 0));
      ae(() => _.value.forEach(l => {
        l._ctx && l._ctx.errors.length > 0 && (l._ctx.errors = i(l))
      }));
      const i = l => {
          var b, E, g, P;
          const y = [];
          switch (l.type) {
            case D.STRING:
            case D.TEXTAREA: {
              if ((b = l.validators) != null && b.required && !l.value && y.push({
                  msg: "Required to continue",
                  isVisible: !0
                }), (E = l.validators) != null && E.maxLength) {
                const V = l.validators.maxLength.value - l.value.length;
                V < 0 && y.push({
                  msg: `${V*-1} over`,
                  isVisible: !1
                })
              }
              if (l.type === D.STRING && ((g = l.validators) != null && g.url)) {
                const V = l.validators.url.includePrefix && ((P = l.props) != null && P.prefix) ? `${l.props.prefix}${l.value}` : l.value;
                Wt(V) || y.push({
                  msg: "Invalid URL",
                  isVisible: !0
                })
              }
              break
            }
            default:
              throw we("unknown type")
          }
          if (l.customValidator) {
            const V = l.customValidator(l.value);
            V && y.push({
              msg: V,
              isVisible: !0
            })
          }
          return y
        },
        h = l => {
          var b;
          const y = (b = l._ctx) == null ? void 0 : b.errors.find(E => E.isVisible);
          return y == null ? void 0 : y.msg
        },
        u = l => {
          var b;
          const y = (b = l._ctx) == null ? void 0 : b.errors.length;
          return y ? y > 0 : !1
        };
      return ae(() => n("channel", {
        isFormValid: a.value
      })), (l, y) => {
        const b = Ft,
          E = _n;
        return d(), w("form", {
          class: "kit-form",
          novalidate: "",
          onSubmit: y[0] || (y[0] = Xe(g => t(), ["prevent"]))
        }, [(d(!0), w(q, null, Z(_.value, g => {
          var P, V, o, c, S, $, v, M;
          return d(), w("div", {
            key: g.key,
            class: "field"
          }, [g.type === e(D).STRING ? (d(), R(b, Ee({
            key: 0,
            modelValue: g.value,
            "onUpdate:modelValue": U => g.value = U,
            ref_for: !0
          }, g.props, {
            "error-caption": h(g),
            "is-error": u(g),
            "max-length": (V = (P = g.validators) == null ? void 0 : P.maxLength) == null ? void 0 : V.value,
            class: "input",
            onChange: U => r(g),
            onFocus: (o = g.eventHandlers) == null ? void 0 : o.onFocus,
            onBlur: (c = g.eventHandlers) == null ? void 0 : c.onBlur
          }), {
            label: O(() => [Pe(l.$slots, `${g.key}-label`, {}, void 0, !0)]),
            _: 2
          }, 1040, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : L("", !0), g.type === e(D).TEXTAREA ? (d(), R(E, Ee({
            key: 1,
            modelValue: g.value,
            "onUpdate:modelValue": U => g.value = U,
            ref_for: !0
          }, g.props, {
            "error-caption": h(g),
            "is-error": u(g),
            "max-length": ($ = (S = g.validators) == null ? void 0 : S.maxLength) == null ? void 0 : $.value,
            class: "textarea",
            onChange: U => r(g),
            onFocus: (v = g.eventHandlers) == null ? void 0 : v.onFocus,
            onBlur: (M = g.eventHandlers) == null ? void 0 : M.onBlur
          }), null, 16, ["modelValue", "onUpdate:modelValue", "error-caption", "is-error", "max-length", "onChange", "onFocus", "onBlur"])) : L("", !0), Pe(l.$slots, `${g.key}-after`, {}, void 0, !0)])
        }), 128))], 32)
      }
    }
  }),
  Ge = T(fn, [
    ["__scopeId", "data-v-5c8581ee"]
  ]),
  vn = {
    class: "memepad-new-step-1"
  },
  gn = N({
    __name: "1",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(p, {
      emit: s
    }) {
      const _ = x({
          ...p.state.step1
        }),
        m = s,
        t = x([{
          key: "name",
          type: D.STRING,
          value: C({
            get: () => _.value.name ?? "",
            set: h => _.value.name = h ?? ""
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
          type: D.STRING,
          value: C({
            get: () => _.value.ticker ?? "",
            set: h => _.value.ticker = h ?? ""
          }),
          props: {
            label: A("memepad.new.step_1.field_ticker.label"),
            placeholder: A("memepad.new.step_1.field_ticker.placeholder"),
            modifiers: [et.UPPERCASE]
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
          type: D.TEXTAREA,
          value: C({
            get: () => _.value.description ?? "",
            set: h => _.value.description = h ?? ""
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
        r = x(),
        a = C(() => {
          var h;
          return ((h = r.value) == null ? void 0 : h.isFormValid) && !!_.value.iconFileKey
        }),
        i = () => m("continue", _.value);
      return (h, u) => {
        const l = re,
          y = un,
          b = Ge,
          E = Y,
          g = le;
        return d(), w("div", vn, [k(l, {
          step: 1
        }), k(y, {
          modelValue: e(_).iconFileKey,
          "onUpdate:modelValue": u[0] || (u[0] = P => e(_).iconFileKey = P)
        }, null, 8, ["modelValue"]), k(b, {
          modelValue: e(t),
          "onUpdate:modelValue": u[1] || (u[1] = P => oe(t) ? t.value = P : null),
          onChannel: u[2] || (u[2] = P => r.value = P)
        }, null, 8, ["modelValue"]), k(g, null, {
          default: O(() => [k(E, {
            label: ("t" in h ? h.t : e(A))("base.continue"),
            fill: "",
            disabled: !e(a),
            tertiary: "",
            size: e(Q).LARGE,
            onClick: i
          }, null, 8, ["label", "disabled", "size"])]),
          _: 1
        })])
      }
    }
  }),
  hn = T(gn, [
    ["__scopeId", "data-v-9573d404"]
  ]),
  bn = {
    class: "memepad-new-form-label"
  },
  yn = {
    class: "compose"
  },
  wn = {
    class: "title"
  },
  kn = {
    key: 0,
    class: "optional"
  },
  Sn = N({
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
      return (s, n) => {
        const _ = X;
        return d(), w("div", bn, [p.iconName ? (d(), R(_, {
          key: 0,
          name: p.iconName,
          class: "icon"
        }, null, 8, ["name"])) : L("", !0), f("div", yn, [f("span", wn, I(p.title), 1), p.isOptional ? (d(), w("span", kn, I(` ${("t"in s?s.t:e(A))("base.optional")}`), 1)) : L("", !0)])])
      }
    }
  }),
  ze = T(Sn, [
    ["__scopeId", "data-v-272f2d1c"]
  ]),
  An = {
    class: "memepad-new-form-banner"
  },
  Fn = {
    key: 1,
    class: "banner is-uploading"
  },
  Pn = {
    class: "description"
  },
  En = {
    class: "text"
  },
  $n = {
    class: "description"
  },
  xe = 10,
  In = N({
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
        n = x(),
        _ = () => {
          var r;
          return (r = n.value) == null ? void 0 : r.triggerFileUpload()
        },
        m = x(),
        t = C(() => {
          if (m.value && m.value.status === me.UPLOADING) return m.value.localUrl;
          if (s.value) return se(s.value)
        });
      return (r, a) => {
        var l;
        const i = ze,
          h = Ne,
          u = De;
        return d(), w("div", An, [k(i, {
          title: ("t" in r ? r.t : e(A))("memepad.new.step_1.field_banner.label"),
          "is-optional": "",
          class: "heading"
        }, null, 8, ["title"]), s.value ? (d(), w("div", {
          key: 0,
          class: "banner is-uploaded",
          style: ye({
            backgroundImage: `url(${e(t)})`
          })
        }, [f("div", {
          class: "delete-btn",
          onClick: a[0] || (a[0] = y => s.value = void 0)
        }, a[4] || (a[4] = [f("img", {
          src: Ue,
          alt: "Trash icon",
          class: "icon"
        }, null, -1)]))], 4)) : ((l = e(m)) == null ? void 0 : l.status) === e(me).UPLOADING ? (d(), w("div", Fn, [k(h, {
          type: e(Ve).LIGHT,
          size: 16
        }, null, 8, ["type"]), f("div", Pn, I(("t" in r ? r.t : e(A))("memepad.new.step_1.field_banner.uploading")), 1)])) : (d(), w("div", {
          key: 2,
          class: "banner wait-upload",
          onClick: a[1] || (a[1] = y => _())
        }, [a[6] || (a[6] = f("img", {
          src: tt,
          alt: "Add"
        }, null, -1)), f("div", En, [f("div", $n, I(("t" in r ? r.t : e(A))("memepad.new.step_1.field_banner.description", {
          maxUploadSize: String(xe)
        })), 1), a[5] || (a[5] = f("div", {
          class: "ratio"
        }, "361 × 119", -1))])])), k(u, {
          ref_key: "fileUploaderRef",
          ref: n,
          "hide-ui": "",
          "max-file-size-mb": xe,
          accept: [e(W).JPEG, e(W).PNG, e(W).GIF],
          crop: "",
          "cropper-params": {
            aspectRatio: 361 / 119,
            borderRadius: 8
          },
          "onUpdate:progress": a[2] || (a[2] = y => m.value = y),
          onUploaded: a[3] || (a[3] = y => s.value = y.key)
        }, null, 8, ["accept"])])
      }
    }
  }),
  Mn = T(In, [
    ["__scopeId", "data-v-327e2cf8"]
  ]),
  Rn = {
    class: "memepad-new-form-social-links-item"
  },
  xn = N({
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
    setup(p, {
      emit: s
    }) {
      const n = p,
        _ = s,
        m = K(p, "modelValue"),
        t = x([{
          type: D.STRING,
          key: n.meta.apiKey,
          value: C({
            get: () => m.value ?? "",
            set: a => m.value = a || void 0
          }),
          props: {
            placeholder: n.meta.placeholder,
            size: nt.COMPACT
          },
          validators: n.meta.skipUrlValidation ? {} : {
            url: {}
          }
        }]),
        r = x();
      return ae(() => {
        var a;
        return _("isValid", ((a = r.value) == null ? void 0 : a.isFormValid) ?? !1)
      }), (a, i) => {
        const h = ze,
          u = X,
          l = Ge;
        return d(), w("div", Rn, [k(l, {
          modelValue: e(t),
          "onUpdate:modelValue": i[1] || (i[1] = y => oe(t) ? t.value = y : null),
          onChannel: i[2] || (i[2] = y => r.value = y)
        }, at({
          [`${p.meta.apiKey}-label`]: O(() => [k(h, {
            "icon-name": p.meta.icon,
            title: p.meta.display,
            "is-optional": ""
          }, null, 8, ["icon-name", "title"])]),
          _: 2
        }, [p.optional ? {
          name: `${p.meta.apiKey}-after`,
          fn: O(() => [f("button", {
            type: "button",
            class: "delete-button reset",
            onClick: i[0] || (i[0] = y => a.$emit("delete"))
          }, [k(u, {
            name: "trash",
            class: "icon"
          })])]),
          key: "0"
        } : void 0]), 1032, ["modelValue"])])
      }
    }
  }),
  Vn = T(xn, [
    ["__scopeId", "data-v-e8eb736f"]
  ]),
  Un = {
    class: "memepad-new-form-social-links"
  },
  Nn = {
    class: "inputs"
  },
  Tn = {
    key: 0,
    class: "add-panel"
  },
  Cn = {
    class: "providers"
  },
  Ln = N({
    __name: "SocialLinks",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: J(["isValid"], ["update:modelValue"]),
    setup(p, {
      emit: s
    }) {
      const n = Pt(),
        _ = K(p, "modelValue"),
        m = s,
        t = x([{
          provider: $e.TELEGRAM,
          isValid: !1,
          optional: !1
        }]),
        r = C(() => Object.values($e).filter(h => !t.value.find(u => u.provider === h))),
        a = h => t.value.push({
          provider: h,
          isValid: !1,
          optional: !0
        }),
        i = h => {
          t.value.splice(h, 1)
        };
      return ae(() => {
        const h = t.value.every(u => u.isValid);
        m("isValid", h)
      }), (h, u) => {
        const l = Vn,
          y = X;
        return d(), w("div", Un, [f("div", Nn, [k(ot, {
          name: "list-shuffle-transition"
        }, {
          default: O(() => [(d(!0), w(q, null, Z(e(t), (b, E) => (d(), R(l, {
            key: b.provider,
            modelValue: _.value[b.provider],
            "onUpdate:modelValue": g => _.value[b.provider] = g,
            meta: e(n)[b.provider],
            optional: b.optional,
            class: "provider-input",
            onIsValid: g => b.isValid = g,
            onDelete: g => i(E)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "meta", "optional", "onIsValid", "onDelete"]))), 128))]),
          _: 1
        })]), k(st, {
          name: "appear-from-right-transition"
        }, {
          default: O(() => [e(r).length > 0 ? (d(), w("div", Tn, [k(y, {
            name: "plus",
            class: "plus-icon"
          }), f("div", Cn, [(d(!0), w(q, null, Z(e(r), b => (d(), w("div", {
            key: b,
            class: "provider"
          }, [k(y, {
            name: e(n)[b].icon,
            class: "provider-icon",
            onClick: E => a(b)
          }, null, 8, ["name", "onClick"])]))), 128))])])) : L("", !0)]),
          _: 1
        })])
      }
    }
  }),
  On = T(Ln, [
    ["__scopeId", "data-v-5d3fea7d"]
  ]),
  jn = {
    class: "kit-switch"
  },
  Bn = N({
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
      return (n, _) => (d(), w("div", jn, [Te(f("input", {
        "onUpdate:modelValue": _[0] || (_[0] = m => s.value = m),
        type: "checkbox"
      }, null, 512), [
        [lt, s.value]
      ])]))
    }
  }),
  Dn = T(Bn, [
    ["__scopeId", "data-v-e0ffb56d"]
  ]),
  qn = "data:image/webp;base64,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",
  Kn = {
    class: "memepad-new-form-nsfw"
  },
  Gn = {
    class: "setting"
  },
  zn = {
    class: "label"
  },
  Wn = N({
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
      return (n, _) => {
        const m = Dn,
          t = It;
        return d(), w("div", Kn, [f("div", Gn, [f("div", zn, I(("t" in n ? n.t : e(A))("memepad.new.step_1.field_nsfw.label")), 1), k(m, {
          modelValue: s.value,
          "onUpdate:modelValue": _[0] || (_[0] = r => s.value = r)
        }, null, 8, ["modelValue"])]), k(t, {
          text: ("t" in n ? n.t : e(A))("memepad.new.step_1.field_nsfw.message"),
          image: e(qn),
          class: "note",
          tertiary: ""
        }, null, 8, ["text", "image"])])
      }
    }
  }),
  Jn = T(Wn, [
    ["__scopeId", "data-v-cf4bf4c7"]
  ]),
  Qn = {
    class: "memepad-new-step-2"
  },
  Hn = N({
    __name: "2",
    props: {
      state: {}
    },
    emits: ["continue"],
    setup(p, {
      emit: s
    }) {
      const n = p,
        _ = s,
        m = x(!1),
        t = x({
          ...n.state.step2
        }),
        r = () => _("continue", t.value);
      return (a, i) => {
        const h = re,
          u = Mn,
          l = On,
          y = Jn,
          b = Y,
          E = le;
        return d(), w("div", Qn, [k(h, {
          step: 2
        }), k(u, {
          modelValue: e(t).bannerFileKey,
          "onUpdate:modelValue": i[0] || (i[0] = g => e(t).bannerFileKey = g)
        }, null, 8, ["modelValue"]), k(l, {
          modelValue: e(t).socialProviders,
          "onUpdate:modelValue": i[1] || (i[1] = g => e(t).socialProviders = g),
          onIsValid: i[2] || (i[2] = g => m.value = g)
        }, null, 8, ["modelValue"]), k(y, {
          modelValue: e(t).isNSFW,
          "onUpdate:modelValue": i[3] || (i[3] = g => e(t).isNSFW = g)
        }, null, 8, ["modelValue"]), k(E, null, {
          default: O(() => [k(b, {
            label: ("t" in a ? a.t : e(A))("base.continue"),
            fill: "",
            tertiary: "",
            size: e(Q).LARGE,
            disabled: !e(m),
            onClick: r
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  Zn = T(Hn, [
    ["__scopeId", "data-v-2e24fde9"]
  ]),
  Yn = {
    class: "header"
  },
  Xn = {
    class: "content"
  },
  ea = {
    class: "subtitle"
  },
  ta = {
    key: 0
  },
  na = {
    class: "controls"
  },
  aa = {
    key: 0,
    class: "info"
  },
  oa = {
    class: "label"
  },
  sa = N({
    __name: "3",
    props: {
      state: {},
      jettonManagement: {}
    },
    emits: ["continue", "update"],
    setup(p, {
      emit: s
    }) {
      const n = p,
        _ = s,
        m = x(),
        t = x(n.state.step3.overview ? {
          status: "loaded",
          share: n.state.step3.share ?? 0,
          overview: n.state.step3.overview
        } : {
          status: "idle",
          share: n.state.step3.share ?? 0
        }),
        r = v => ut(v, {
          join: "emptyFractional"
        }),
        a = v => new z(v.replaceAll(",", "") || "0").toNumber(),
        i = C({
          get: () => String(t.value.share),
          set: v => {
            t.value.share = a(v)
          }
        }),
        h = C({
          get: () => String(t.value.share),
          set: v => {
            t.value.share = a(r(v))
          }
        }),
        u = Le(),
        l = Se(),
        y = () => Oe().success(A("memepad.jetton.new.error_alert"));
      l.onConnectError(y);
      const b = x(!1),
        E = C(() => {
          var v;
          return {
            jettonBalance: te(new z(0), n.state.step1.ticker),
            tonBalance: u.wallet.value.status === "connected" ? (v = u.wallet.value.balance) == null ? void 0 : v.tonBalance.balance : void 0
          }
        }),
        g = C(() => {
          if (t.value.status === "loading") return;
          if (!t.value.overview) {
            if (new z(t.value.share).isZero()) {
              const M = te(new z(0), n.state.step1.ticker);
              return A("memepad.new.step_3.subtitle", {
                jettonsAmountWithSymbol: M.frontendWithSymbol,
                percentAmount: "0"
              })
            }
            return
          }
          const v = te(new z(t.value.overview.minReceive), n.state.step1.ticker);
          return t.value.overview ? A("memepad.new.step_3.subtitle", {
            jettonsAmountWithSymbol: v.frontendWithSymbol,
            percentAmount: rt(t.value.overview.jettonReceivePercent)
          }) : v.frontendWithSymbol
        }),
        P = C(() => {
          var F;
          const v = (() => {
              var G;
              const B = u.wallet.value.status === "connected" ? (G = u.wallet.value.balance) == null ? void 0 : G.tonBalance.balance.value : void 0;
              return {
                value: B,
                label: B ? te(B, "TON").frontendWithSymbol : void 0
              }
            })(),
            M = {
              value: n.jettonManagement.fees.buyNetworkFee,
              label: `${A("memepad.jetton.fees_base")}: ${de(n.jettonManagement.fees.buyNetworkFee)} TON`,
              details: [{
                label: `${A("memepad.jetton.fees_network")}: ${de(n.jettonManagement.fees.buyNetworkFee)} TON`
              }, ...t.value.overview ? [{
                label: `${A("memepad.jetton.fees_platform")}: ${de((F=t.value.overview)==null?void 0:F.platformFee)} TON`
              }] : []]
            },
            U = (() => {
              if (!v.value) return;
              const B = M.value.plus(t.value.share);
              return v.value.gte(B)
            })(),
            j = U !== !1 ? void 0 : A("memepad.jetton.not_enough_error", {
              ticker: "TON"
            });
          return {
            tonBalance: v,
            showInfo: v.value !== void 0,
            fees: M,
            isEnoughTon: U !== !1,
            errorMessage: j,
            loading: t.value.status === "loading" || b.value
          }
        }),
        V = () => {
          var v;
          (v = m.value) == null || v.focusOnInput()
        },
        o = () => {
          P.value.errorMessage || S()
        },
        c = async () => {
          if (P.value.errorMessage) {
            t.value.status = "idle";
            return
          }
          const v = new z(t.value.share),
            M = await n.jettonManagement.getJettonOverview(v.toNumber());
          v.eq(t.value.share) && ne(M) && (t.value = {
            status: "loaded",
            share: v.toNumber(),
            overview: M.data
          }, _("update", {
            share: v.toNumber(),
            overview: ne(M) ? M.data : void 0
          }))
        }, S = async () => {
          if (t.value.status === "loaded") return _("continue", {
            share: +t.value.share,
            overview: t.value.overview
          });
          b.value = !0;
          const v = await n.jettonManagement.getJettonOverview(t.value.share);
          ne(v) ? _("continue", {
            share: +t.value.share,
            overview: v.data
          }) : y(), b.value = !1
        }, {
          debouncedFunction: $
        } = ct(c, 400);
      return ke(() => t.value.share, () => {
        t.value.status = "loading", $()
      }), (v, M) => {
        const U = re,
          j = Mt,
          F = Ct,
          B = Rt,
          G = xt,
          ee = qe,
          ie = Y,
          ue = Vt,
          H = Ut;
        return d(), R(H, {
          class: "memepad-new-step-3"
        }, {
          top: O(() => [f("div", Yn, [k(U, {
            step: 3
          })])]),
          default: O(() => [f("div", Xn, [k(j, {
            ref_key: "actionControlsInputComp",
            ref: m,
            modelValue: e(i),
            "onUpdate:modelValue": M[0] || (M[0] = ce => oe(i) ? i.value = ce : null),
            postfix: "TON",
            modifier: r,
            onBlur: V
          }, null, 8, ["modelValue"]), f("div", ea, [e(g) ? (d(), w("span", ta, I(e(g)), 1)) : e(g) === void 0 ? (d(), R(F, {
            key: 1,
            class: "skeleton"
          })) : L("", !0)])])]),
          "bottom-action": O(() => [f("div", na, [e(P).showInfo ? (d(), w("div", aa, [e(P).tonBalance.label && !e(P).loading ? (d(), R(B, {
            key: 0,
            balance: e(P).tonBalance.label
          }, null, 8, ["balance"])) : (d(), R(F, {
            key: 1,
            class: "skeleton"
          })), e(P).loading ? (d(), R(F, {
            key: 3,
            class: "skeleton"
          })) : (d(), R(G, {
            key: 2,
            details: e(P).fees.details,
            "total-label": e(P).fees.label,
            "error-message": e(P).errorMessage
          }, null, 8, ["details", "total-label", "error-message"]))])) : L("", !0), e(P).isEnoughTon ? (d(), R(ie, {
            key: 2,
            fill: "",
            size: e(Q).LARGE,
            loading: e(P).loading,
            onClick: o
          }, {
            default: O(() => [f("div", oa, I(("t" in v ? v.t : e(A))("memepad.new.step_3.next_btn")), 1)]),
            _: 1
          }, 8, ["size", "loading"])) : (d(), R(ee, {
            key: 1
          }))])]),
          "bottom-helpers": O(() => [k(ue, {
            modelValue: e(h),
            "onUpdate:modelValue": M[1] || (M[1] = ce => oe(h) ? h.value = ce : null),
            tab: e(it).BUY,
            balances: e(E)
          }, null, 8, ["modelValue", "tab", "balances"])]),
          _: 1
        })
      }
    }
  }),
  la = T(sa, [
    ["__scopeId", "data-v-68edcfd3"]
  ]),
  ra = {
    class: "memepad-jetton-logo-ticker"
  },
  ia = ["src"],
  ua = {
    class: "ticker-name-compose"
  },
  ca = {
    class: "ticker"
  },
  da = {
    class: "name"
  },
  pa = N({
    __name: "LogoTicker",
    props: {
      logoFileKey: {},
      ticker: {},
      name: {}
    },
    setup(p) {
      return (s, n) => (d(), w("div", ra, [f("img", {
        src: e(se)(s.logoFileKey),
        alt: "Jetton logo"
      }, null, 8, ia), f("div", ua, [f("div", ca, I(s.ticker), 1), f("div", da, I(s.name), 1)])]))
    }
  }),
  ma = T(pa, [
    ["__scopeId", "data-v-39dff782"]
  ]),
  _a = {
    class: "memepad-new-price-details"
  },
  fa = {
    class: "key"
  },
  va = {
    class: "value"
  },
  ga = {
    class: "fee-details"
  },
  ha = {
    class: "label"
  },
  ba = {
    class: "row total"
  },
  ya = {
    class: "key"
  },
  wa = {
    key: 0,
    class: "not-enough-balance"
  },
  ka = {
    class: "label"
  },
  Sa = {
    key: 1,
    class: "value"
  },
  Aa = {
    class: "label"
  },
  Fa = N({
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
      return (s, n) => {
        const _ = X,
          m = Lt;
        return d(), w("div", _a, [(d(!0), w(q, null, Z(s.details.sections, t => (d(), w("div", {
          key: t.title,
          class: "row"
        }, [f("div", fa, I(t.title), 1), f("div", va, [k(m, null, {
          default: O(() => [k(_, {
            name: "circle-help",
            class: "tooltip-icon"
          })]),
          inner: O(() => [f("div", ga, [(d(!0), w(q, null, Z(t.details, r => (d(), w("span", {
            key: r.label,
            class: Ce({
              highlighted: r.highlight
            })
          }, I(r.label), 3))), 128))])]),
          _: 2
        }, 1024), f("span", ha, I(t.label), 1)])]))), 128)), s.details.totalSection ? (d(), w(q, {
          key: 0
        }, [n[0] || (n[0] = f("div", {
          class: "divider"
        }, null, -1)), f("div", ba, [f("div", ya, I(s.details.totalSection.title), 1), s.notEnoughBalance ? (d(), w("div", wa, [k(_, {
          name: "circle-help",
          class: "icon"
        }), f("span", ka, I(("t" in s ? s.t : e(A))("memepad.jetton.not_enough_error", {
          ticker: "TON"
        })), 1)])) : (d(), w("div", Sa, [f("span", Aa, I(s.details.totalSection.label), 1)]))])], 64)) : L("", !0)])
      }
    }
  }),
  Pa = T(Fa, [
    ["__scopeId", "data-v-cd02a0d6"]
  ]),
  Ea = {
    class: "memepad-new-step-overview"
  },
  $a = {
    class: "button-wrapper"
  },
  Ia = N({
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
      const n = p,
        _ = s,
        m = Le(),
        t = Se(),
        r = () => Oe().success(A("memepad.jetton.new.error_alert"));
      t.onConnectError(r);
      const a = C(() => {
          const y = n.tonUsdRate && n.form.overview.marketCapTon.mul(n.tonUsdRate),
            b = n.tonUsdRate && n.form.overview.priceTon.mul(n.tonUsdRate);
          return {
            percent: n.form.overview.tonCollectedPercent,
            collected: n.form.overview.tonCollected,
            total: n.form.overview.tonForDex,
            marketDetails: {
              marketCap: y,
              listRows: {
                price: b,
                availableSupply: n.form.overview.availableSupply,
                maxSupply: n.form.overview.maxSupply
              }
            }
          }
        }),
        i = C(() => n.jettonManagement.getPriceDetails(n.form.overview)),
        h = C(() => {
          var b;
          const y = m.wallet.value.status === "connected" ? (b = m.wallet.value.balance) == null ? void 0 : b.tonBalance : void 0;
          if (y) return y.balance.value.gte(i.value.total)
        }),
        u = x(!1),
        l = async () => {
          if (!h.value || u.value) return;
          u.value = !0, await n.launchCallback(n.form) ? _("continue") : r(), u.value = !1
        };
      return (y, b) => {
        const E = re,
          g = ma,
          P = Et,
          V = Nt,
          o = Pa,
          c = qe,
          S = Y,
          $ = Tt,
          v = le;
        return d(), w("div", Ea, [k(E, {
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
        }, null, 8, ["banner-file-key"]), k(V, dt(pt(e(a))), null, 16), k(v, null, {
          default: O(() => [k(o, {
            "with-share": !!y.form.share,
            details: e(i),
            "not-enough-balance": e(h) === !1
          }, null, 8, ["with-share", "details", "not-enough-balance"]), f("div", $a, [k($, null, {
            default: O(() => [e(h) ? (d(), R(S, {
              key: 1,
              label: ("t" in y ? y.t : e(A))("memepad.new.step_4.launch_btn"),
              fill: "",
              size: e(Q).LARGE,
              type: e(mt).DROP,
              onClick: l
            }, null, 8, ["label", "size", "type"])) : (d(), R(c, {
              key: 0
            }))]),
            _: 1
          })])]),
          _: 1
        })])
      }
    }
  }),
  Ma = T(Ia, [
    ["__scopeId", "data-v-c3aa5e11"]
  ]),
  Ra = {
    class: "memepad-new-step-launch"
  },
  xa = {
    class: "inner"
  },
  Va = {
    class: "icon-wrapper"
  },
  Ua = {
    class: "error-icon"
  },
  Na = {
    class: "title"
  },
  Ta = {
    class: "subtitle"
  },
  Ca = {
    class: "inner"
  },
  La = {
    class: "icon-wrapper"
  },
  Oa = ["src"],
  ja = {
    class: "title"
  },
  Ba = {
    class: "label"
  },
  Da = {
    class: "subtitle"
  },
  qa = {
    key: 0,
    class: "rocket-wrapper"
  },
  Ka = {
    class: "footer"
  },
  Ga = {
    class: "arena-banner"
  },
  za = {
    class: "title"
  },
  Wa = {
    class: "subtitle"
  },
  Ja = 3e3,
  Qa = N({
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
      const n = _e(),
        _ = Ae();
      _.memepad.memepadCabalArenaBannerShow();
      const m = x("LOADING"),
        t = [],
        r = () => new Promise(u => {
          m.value = "ROCKET", t.push(setTimeout(() => {
            u(void 0)
          }, Ja))
        }),
        a = () => {
          m.value = "ERROR"
        },
        i = () => {
          t.forEach(clearTimeout), m.value = "LOADING"
        },
        h = () => {
          _.memepad.memepadCabalArenaBannerClick(), vt().$webApp.openLink("https://www.cabal-arena.fun/")
        };
      return _t(() => {
        i()
      }), s({
        runSuccess: r,
        runError: a
      }), (u, l) => {
        const y = Ot,
          b = X,
          E = Y,
          g = le,
          P = gt;
        return d(), w("div", Ra, [k(y), e(m) === "ERROR" ? (d(), w(q, {
          key: 0
        }, [f("div", xa, [f("div", Va, [f("div", Ua, [k(b, {
          name: "warning",
          class: "icon"
        })])]), f("div", Na, I(("t" in u ? u.t : e(A))("memepad.new.failed.title", {
          ticker: u.form.ticker
        })), 1), f("div", Ta, I(("t" in u ? u.t : e(A))("memepad.new.failed.subtitle")), 1)]), k(g, null, {
          default: O(() => [k(E, {
            fill: "",
            label: ("t" in u ? u.t : e(A))("memepad.new.retry_btn_label"),
            size: e(Q).LARGE,
            onClick: l[0] || (l[0] = V => u.retryCallback(u.form))
          }, null, 8, ["label", "size"])]),
          _: 1
        })], 64)) : (d(), w(q, {
          key: 1
        }, [f("div", Ca, [f("div", La, [f("img", {
          src: e(se)(u.form.iconFileKey),
          alt: "Jetton logo",
          width: "80",
          height: "80"
        }, null, 8, Oa)]), f("div", ja, [l[2] || (l[2] = f("div", {
          class: "dot"
        }, null, -1)), f("div", Ba, I(("t" in u ? u.t : e(A))("memepad.new.step_launch.title")), 1)]), f("div", Da, I(("t" in u ? u.t : e(A))("memepad.new.step_launch.subtitle")), 1)]), e(m) === "ROCKET" ? (d(), w("div", qa, [k(P, {
          name: "animations/Rocket",
          size: 348
        })])) : L("", !0), k(g, null, {
          default: O(() => [f("div", Ka, [f("div", Ga, [f("div", za, I(("t" in u ? u.t : e(A))("cabal_arena_banner.title")), 1), f("div", Wa, I(("t" in u ? u.t : e(A))("cabal_arena_banner.subtitle")), 1), f("button", {
            type: "button",
            class: "reset",
            onClick: h
          }, I(("t" in u ? u.t : e(A))("cabal_arena_banner.btn_label")), 1), l[3] || (l[3] = f("img", {
            src: ft
          }, null, -1))]), k(E, {
            fill: "",
            label: ("t" in u ? u.t : e(A))("base.got_it"),
            size: e(Q).LARGE,
            onClick: l[1] || (l[1] = V => e(n).push({
              name: "memepad"
            }))
          }, null, 8, ["label", "size"])])]),
          _: 1
        })], 64))])
      }
    }
  }),
  Ha = T(Qa, [
    ["__scopeId", "data-v-01bce8e1"]
  ]),
  Za = {
    class: "memepad-new"
  },
  Ya = N({
    __name: "New",
    props: {
      tonUsdRate: {},
      retryPayload: {},
      jettonManagement: {}
    },
    setup(p) {
      const s = p,
        n = Ae(),
        _ = _e(),
        m = je(),
        t = Se(),
        r = x();
      Be().getReferralToken();
      const a = s.jettonManagement.getWaitForCreateStatus(),
        i = x(s.retryPayload ? $t(s.retryPayload) : {
          step: 1,
          step1: pe.step1(),
          step2: pe.step2(),
          step3: pe.step3()
        });
      (() => {
        s.retryPayload ? n.memepad.memepadJettonRetry() : n.memepad.memepadJettonStepInfo()
      })();
      const u = (o, c) => {
          const S = {
            step: 2,
            step1: c,
            step2: o.step2,
            step3: o.step3
          };
          i.value = S, n.memepad.memepadJettonStepPersonalise()
        },
        l = (o, c) => {
          const S = {
            step: 3,
            step1: o.step1,
            step2: c,
            step3: o.step3
          };
          i.value = S, n.memepad.memepadJettonStepShare()
        },
        y = (o, c) => {
          const S = {
            step: 4,
            step1: o.step1,
            step2: o.step2,
            step3: c
          };
          i.value = S, n.memepad.memepadJettonStepOverview()
        },
        b = (o, c) => {
          i.value = {
            ...o,
            step3: c
          }
        },
        E = o => {
          const c = {
            step: 5,
            step1: o.step1,
            step2: o.step2,
            step3: o.step3
          };
          i.value = c
        };
      ht().initHandler(() => {
        const o = i.value;
        switch (o.step) {
          case 1:
            _e().push({
              name: "memepad"
            });
            break;
          case 2:
            i.value = {
              ...o,
              step: 1
            };
            break;
          case 3:
          case 4:
            i.value = {
              ...o,
              step: o.step - 1
            };
            break;
          case 5:
            return;
          default:
            throw we("Invalid step")
        }
      }, "memepad-new");
      let g = [];
      const P = o => {
          g.push({
            payload: o
          }), g = g.slice(-3), g.length === 3 && g.every(S => JSON.stringify(S.payload) === JSON.stringify(g[0].payload)) && t.disconnect()
        },
        V = async o => {
          const c = await s.jettonManagement.createJetton(o);
          return ne(c) ? ((async () => {
            const {
              launchTransactionHash: S,
              queryId: $
            } = c.data;
            n.memepad.memepadJettonStartLaunch({
              jettonId: $
            }), await yt(3e4);
            const v = await a.exec({
              launchTransactionHash: S,
              queryId: $
            });
            v ? n.memepad.memepadJettonEndLaunch({
              status: "success",
              purchaseAmount: o.share,
              jettonAddress: v.address,
              jettonShortname: v.shortname,
              jettonId: $
            }) : n.memepad.memepadJettonEndLaunch({
              status: "failed",
              purchaseAmount: o.share
            }), r.value ? v ? (await r.value.runSuccess(), await _.push({
              name: "memepad-jetton-shortname",
              params: {
                shortname: v.shortname
              }
            })) : r.value.runError() : (v ? n.memepad.memepadJettonLaunchShowNotification({
              status: "success",
              jettonAddress: v.address,
              jettonShortname: v.shortname,
              jettonId: $
            }) : n.memepad.memepadJettonLaunchShowNotification({
              status: "failed"
            }), wt().name !== "game" && (v ? m.showSuccessSheet(o, v.shortname) : m.showErrorSheet(o)))
          })(), !0) : (c.extra && c.extra instanceof Error && c.extra instanceof bt && n.memepad.memepadJettonLaunchWalletUiError(), P(o), !1)
        };
      return (o, c) => {
        const S = Ht,
          $ = hn,
          v = Zn,
          M = la,
          U = Ma,
          j = Ha;
        return d(), w("div", Za, [e(i).step !== 5 ? (d(), R(S, {
          key: 0,
          step: e(i).step,
          "count-steps": 4
        }, null, 8, ["step"])) : L("", !0), e(i).step === 1 ? (d(), R($, {
          key: 1,
          state: e(i),
          onContinue: c[0] || (c[0] = F => u(e(i), F))
        }, null, 8, ["state"])) : L("", !0), e(i).step === 2 ? (d(), R(v, {
          key: 2,
          state: e(i),
          onContinue: c[1] || (c[1] = F => l(e(i), F))
        }, null, 8, ["state"])) : L("", !0), e(i).step === 3 ? (d(), R(M, {
          key: 3,
          state: e(i),
          "jetton-management": s.jettonManagement,
          onContinue: c[2] || (c[2] = F => y(e(i), F)),
          onUpdate: c[3] || (c[3] = F => b(e(i), F))
        }, null, 8, ["state", "jetton-management"])) : L("", !0), e(i).step === 4 ? (d(), R(U, {
          key: 4,
          form: e(Me)(e(i)),
          "jetton-management": s.jettonManagement,
          "ton-usd-rate": o.tonUsdRate,
          "launch-callback": V,
          onContinue: c[4] || (c[4] = F => E(e(i)))
        }, null, 8, ["form", "jetton-management", "ton-usd-rate"])) : L("", !0), e(i).step === 5 ? (d(), R(j, {
          key: 5,
          ref_key: "stepLaunchApi",
          ref: r,
          form: e(Me)(e(i)),
          "retry-callback": e(m).retry
        }, null, 8, ["form", "retry-callback"])) : L("", !0)])
      }
    }
  }),
  Xa = T(Ya, [
    ["__scopeId", "data-v-cfa14791"]
  ]),
  eo = {
    class: "memepad-new-page page"
  },
  to = N({
    __name: "new",
    setup(p) {
      const {
        popRetryPayload: s
      } = je(), {
        memepadManagementSdk: n
      } = Bt(), {
        tonUsdRate: _
      } = kt(), m = Ae();
      return (() => {
        const r = St("memepadNewFrom", Ie) ?? Ie.NA;
        Dt(), Be().getReferralToken(), m.memepad.memepadJettonStart({
          source: r
        })
      })(), (r, a) => {
        const i = Xa,
          h = jt;
        return d(), w("div", eo, [e(n) ? (d(), R(i, {
          key: 0,
          "ton-usd-rate": e(_),
          "retry-payload": e(s)(),
          "jetton-management": e(n)
        }, null, 8, ["ton-usd-rate", "retry-payload", "jetton-management"])) : (d(), R(h, {
          key: 1
        }))])
      }
    }
  }),
  yo = T(to, [
    ["__scopeId", "data-v-79365e51"]
  ]);
export {
  yo as
  default
};