import {
  d as V,
  C as g,
  Y as f,
  B as N,
  ch as h,
  ci as G,
  aU as B,
  H as R,
  bR as j,
  ay as A,
  r as M,
  av as P,
  a as o,
  c as l,
  b as p,
  W as d,
  X as k,
  e as n,
  m as O,
  bv as Y,
  ap as D,
  ar as C,
  g as y,
  J as q,
  cj as F,
  n as K,
  t as r,
  x as z,
  h as T,
  w as U,
  b_ as $,
  ck as X,
  U as H,
  j as J
} from "./BPAM48h1.js";
import {
  K as W
} from "./jszFP6Om.js";
import {
  a as Z
} from "./CowfBi6h.js";
import {
  _ as Q
} from "./BNlrXKw2.js";
import "./B_QQ-Wg9.js";
import "./VoK4CKOe.js";
import "./HRaZwbrL.js";
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
  pe = {
    key: 2
  },
  ie = ["onUpdate:modelValue", "multiple"];
var S = (v => (v.CLOSE = "close", v))(S || {});
const E = "model-value",
  ye = V({
    __name: "preview",
    setup(v) {
      const b = [{
          component: g,
          key: "kit-button",
          props: [{
            key: "label",
            value: "Button",
            type: "STRING"
          }, {
            key: "type",
            type: "ENUM",
            value: f.PRIMARY,
            options: Object.values(f)
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
            options: Object.values(S)
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
          component: Z,
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
          component: B,
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
          component: W,
          key: "kit-file-uploader",
          props: [{
            key: "hideUi",
            type: "TOGGLE",
            value: !1
          }, {
            key: "accept",
            type: "ENUM_ARRAY",
            value: [],
            options: Object.values(j)
          }, {
            key: "maxFileSizeMb",
            type: "NUMBER",
            value: 10
          }]
        }, {
          component: Q,
          key: "pages-welcome"
        }],
        I = (() => {
          const a = A().query.component;
          if (typeof a == "string") return a
        })(),
        _ = M(I),
        s = M(),
        x = a => a.split("-").map(t => t[0].toUpperCase() + t.substring(1).toLowerCase()).join(" "),
        L = a => a && Object.fromEntries(a.map(t => [t.key, t.value])),
        w = a => {
          var c, i;
          const t = (i = (c = s.value) == null ? void 0 : c.props) == null ? void 0 : i.find(e => e.key === E);
          t && typeof t.value == typeof a && (t.value = a)
        };
      return P(() => _.value, a => {
        const t = b.find(c => c.key === a);
        t ? (q().push({
          query: {
            component: a
          }
        }), s.value = {
          ...t,
          component: F(t.component)
        }) : window.history.replaceState({}, "", location.pathname)
      }, {
        immediate: !0
      }), (a, t) => {
        var c, i;
        return o(), l("div", ee, [p("div", te, [(o(), l(d, null, k(b, e => p("div", {
          key: e.key,
          class: K(["menu-components-item", {
            "is-current": n(_) === e.key
          }]),
          onClick: m => _.value = e.key
        }, r(x(e.key)), 11, ae)), 64))]), p("div", oe, [(c = n(s)) != null && c.key ? (o(), O(C(n(s).component), D({
          key: 0,
          style: n(s).customStyle
        }, L(n(s).props), {
          "onUpdate:modelValue": t[0] || (t[0] = e => w(e))
        }), Y({
          _: 2
        }, [k(n(s).slots ? Object.entries(n(s).slots) : [], ([e, m]) => ({
          name: e,
          fn: z(() => [(o(), O(C(m)))])
        }))]), 1040, ["style"])) : y("", !0)]), (i = n(s)) != null && i.props ? (o(), l("div", se, [(o(!0), l(d, null, k(n(s).props, (e, m) => (o(), l(d, {
          key: m
        }, [e.type === "TOGGLE" ? (o(), l("label", le, [T(r(e.key) + " ", 1), U(p("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: "checkbox",
          label: e.key
        }, null, 8, ne), [
          [$, e.value]
        ])])) : y("", !0), e.type === "STRING" || e.type === "NUMBER" ? (o(), l("label", ue, [T(r(e.key) + " ", 1), U(p("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: e.type === "NUMBER" ? "number" : "text",
          placeholder: e.key
        }, null, 8, ce), [
          [X, e.value]
        ])])) : y("", !0), e.type === "ENUM" || e.type === "ENUM_ARRAY" ? (o(), l("label", pe, [T(r(e.key) + " ", 1), U(p("select", {
          "onUpdate:modelValue": u => e.value = u,
          multiple: e.type === "ENUM_ARRAY"
        }, [(o(!0), l(d, null, k(e.options, u => (o(), l("option", {
          key: u
        }, r(u), 1))), 128))], 8, ie), [
          [H, e.value]
        ])])) : y("", !0)], 64))), 128))])) : y("", !0)])
      }
    }
  }),
  Ue = J(ye, [
    ["__scopeId", "data-v-eed089be"]
  ]);
export {
  Ue as
  default
};