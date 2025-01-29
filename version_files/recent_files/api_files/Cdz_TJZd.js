import {
  d as w,
  x as B,
  B as b,
  V as N,
  cb as h,
  cc as G,
  aK as g,
  ah as R,
  bL as A,
  Q as j,
  K as M,
  P,
  o,
  c as l,
  a as i,
  F as d,
  q as k,
  e as n,
  G as O,
  bT as D,
  af as Y,
  ai as S,
  D as y,
  ad as K,
  cd as q,
  n as F,
  t as r,
  H as z,
  m as T,
  w as f,
  bU as $,
  ce as H,
  v as Q,
  f as X
} from "./7B743EeA.js";
import {
  K as Z
} from "./BpDbyILA.js";
import {
  a as J
} from "./DHWTYcqW.js";
import {
  _ as W
} from "./DZvvYG2c.js";
import "./4cYmRbee.js";
import "./CT7akwlJ.js";
import "./HKUPTPvZ.js";
const ee = {
    class: "preview-page page no-wrapper"
  },
  te = {
    class: "menu-components"
  },
  ae = ["onClick"],
  oe = {
    class: "active-components"
  },
  se = {
    key: 0,
    class: "props"
  },
  le = {
    key: 0
  },
  ne = ["onUpdate:modelValue", "label"],
  ue = {
    key: 1
  },
  ce = ["onUpdate:modelValue", "type", "placeholder"],
  ie = {
    key: 2
  },
  pe = ["onUpdate:modelValue", "multiple"];
var C = (v => (v.CLOSE = "close", v))(C || {});
const E = "model-value",
  ye = w({
    __name: "preview",
    setup(v) {
      const U = [{
          component: B,
          key: "kit-button",
          props: [{
            key: "label",
            value: "Button",
            type: "STRING"
          }, {
            key: "type",
            type: "ENUM",
            value: b.PRIMARY,
            options: Object.values(b)
          }, {
            key: "size",
            type: "ENUM",
            value: N.MEDIUM,
            options: Object.values(N)
          }, {
            key: "isDanger",
            type: "TOGGLE",
            value: !1
          }, {
            key: "icon",
            type: "ENUM",
            value: "",
            options: Object.values(C)
          }, {
            key: "link",
            value: "",
            type: "STRING"
          }, {
            key: "disabled",
            value: !1,
            type: "TOGGLE"
          }, {
            key: "fill",
            value: !1,
            type: "TOGGLE"
          }, {
            key: "hasContinueIcon",
            value: !1,
            type: "TOGGLE"
          }]
        }, {
          component: J,
          key: "kit-input",
          props: [{
            key: E,
            value: "",
            type: "STRING"
          }, {
            key: "type",
            value: h.TEXT,
            type: "ENUM",
            options: Object.values(h)
          }, {
            key: "label",
            value: "Label",
            type: "STRING"
          }, {
            key: "placeholder",
            value: "Placeholder",
            type: "STRING"
          }, {
            key: "caption",
            value: "",
            type: "STRING"
          }, {
            key: "status",
            value: G.REGULAR,
            type: "ENUM",
            options: Object.values(G)
          }, {
            key: "disabled",
            value: !1,
            type: "TOGGLE"
          }]
        }, {
          component: g,
          key: "kit-bottom-modal",
          props: [{
            key: E,
            value: !0,
            type: "TOGGLE"
          }, {
            key: "title",
            value: "Modal Title",
            type: "STRING"
          }],
          slots: {
            default: () => R("div", [...Array(50)].map((a, t) => R("div", `${t+1} - Test`)))
          }
        }, {
          component: Z,
          key: "kit-file-uploader",
          props: [{
            key: "hideUi",
            type: "TOGGLE",
            value: !1
          }, {
            key: "accept",
            type: "ENUM_ARRAY",
            value: [],
            options: Object.values(A)
          }, {
            key: "maxFileSizeMb",
            type: "NUMBER",
            value: 10
          }]
        }, {
          component: W,
          key: "pages-welcome"
        }],
        I = (() => {
          const a = j().query.component;
          if (typeof a == "string") return a
        })(),
        _ = M(I),
        s = M(),
        L = a => a.split("-").map(t => t[0].toUpperCase() + t.substring(1).toLowerCase()).join(" "),
        x = a => a && Object.fromEntries(a.map(t => [t.key, t.value])),
        V = a => {
          var c, p;
          const t = (p = (c = s.value) == null ? void 0 : c.props) == null ? void 0 : p.find(e => e.key === E);
          t && typeof t.value == typeof a && (t.value = a)
        };
      return P(() => _.value, a => {
        const t = U.find(c => c.key === a);
        t ? (K().push({
          query: {
            component: a
          }
        }), s.value = {
          ...t,
          component: q(t.component)
        }) : window.history.replaceState({}, "", location.pathname)
      }, {
        immediate: !0
      }), (a, t) => {
        var c, p;
        return o(), l("div", ee, [i("div", te, [(o(), l(d, null, k(U, e => i("div", {
          key: e.key,
          class: F(["menu-components-item", {
            "is-current": n(_) === e.key
          }]),
          onClick: m => _.value = e.key
        }, r(L(e.key)), 11, ae)), 64))]), i("div", oe, [(c = n(s)) != null && c.key ? (o(), O(S(n(s).component), Y({
          key: 0,
          style: n(s).customStyle
        }, x(n(s).props), {
          "onUpdate:modelValue": t[0] || (t[0] = e => V(e))
        }), D({
          _: 2
        }, [k(n(s).slots ? Object.entries(n(s).slots) : [], ([e, m]) => ({
          name: e,
          fn: z(() => [(o(), O(S(m)))])
        }))]), 1040, ["style"])) : y("", !0)]), (p = n(s)) != null && p.props ? (o(), l("div", se, [(o(!0), l(d, null, k(n(s).props, (e, m) => (o(), l(d, {
          key: m
        }, [e.type === "TOGGLE" ? (o(), l("label", le, [T(r(e.key) + " ", 1), f(i("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: "checkbox",
          label: e.key
        }, null, 8, ne), [
          [$, e.value]
        ])])) : y("", !0), e.type === "STRING" || e.type === "NUMBER" ? (o(), l("label", ue, [T(r(e.key) + " ", 1), f(i("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: e.type === "NUMBER" ? "number" : "text",
          placeholder: e.key
        }, null, 8, ce), [
          [H, e.value]
        ])])) : y("", !0), e.type === "ENUM" || e.type === "ENUM_ARRAY" ? (o(), l("label", ie, [T(r(e.key) + " ", 1), f(i("select", {
          "onUpdate:modelValue": u => e.value = u,
          multiple: e.type === "ENUM_ARRAY"
        }, [(o(!0), l(d, null, k(e.options, u => (o(), l("option", {
          key: u
        }, r(u), 1))), 128))], 8, pe), [
          [Q, e.value]
        ])])) : y("", !0)], 64))), 128))])) : y("", !0)])
      }
    }
  }),
  fe = X(ye, [
    ["__scopeId", "data-v-eed089be"]
  ]);
export {
  fe as
  default
};